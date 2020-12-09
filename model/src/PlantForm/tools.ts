import platform from "./platform";
import urls from "./urls";
import gameconstdata from "./gameconstdata"

const tools = {

    // 判断当前设备的宽高比
    ischangping(){
        let stagewidth = Laya.stage.width;
        let stageheight = Laya.stage.height;
        if (stageheight/stagewidth > 1.7795138888888888){
            return true;
        }
        else{
            return false;
        }
    },

    // ui 长屏适配
    uichangping(){
        this.width = Laya.stage.width;
        this.height = Laya.stage.height;
    },

    // 根据手机宽高比例选择不同的相机视野
    changeCameraField(camera:Laya.Camera){
        let stagewidth = Laya.stage.width;
        let stageheight = Laya.stage.height;
        if (stageheight/stagewidth > 1.7795138888888888){
            camera.fieldOfView = 60;
        }
        else{
            camera.fieldOfView = 50;
        }
    },

    // 发现子节点
    findChildNode:function(parent:any,path:string):Laya.Node{
        let result = parent;
        let names = path.split('/');
        for(let i = 0;i<names.length;i++){
            let name = names[i];
            result = result.getChildByName(name);
            if(result){                    
                continue;
            }else{
                console.log('fail to find node=',path);
                return null;
            }
        }
        console.log('success to find node=',result.name);
        return result;
    },

    // 发射投影
    setCastShadow(node:Laya.Sprite3D,bool:boolean){
        if(node && !node.destroyed){
            if(node instanceof Laya.MeshSprite3D){
                node.meshRenderer.castShadow = bool;
            }else if(node instanceof Laya.SkinnedMeshSprite3D){
                node.skinnedMeshRenderer.castShadow = bool;
            }
            for(var i = 0;i<node.numChildren;i++){
                this.setCastShadow(node.getChildAt(i),bool);
            }
        }
    },

    // 接收投影
    setReceiveShadow(node:Laya.Sprite3D,bool:boolean){
        if(node && !node.destroyed){
            if(node instanceof Laya.MeshSprite3D){
                node.meshRenderer.receiveShadow = bool;
            }else if(node instanceof Laya.SkinnedMeshSprite3D){
                node.skinnedMeshRenderer.receiveShadow = bool;
            }
            for(var i = 0;i<node.numChildren;i++){
                this.setReceiveShadow(node.getChildAt(i),bool);
            }
        }
    },

    // 传一个a返回一个min到max之间的数
    clampf(a,min,max){
        if(a<min) return min;
        else if(a>max) return max;
        return a;
    },

    // 得到一个两数之间的随机整数，包括两个数在内
    getRandomIntInclusive(min:number, max:number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
    },

    // 增加获得的金币
    addgainmoney(){
        for(let i = 0;i<20;i++){
            Laya.timer.once(20*i,this,()=>{
                let gold = new Laya.Image();
                gold.skin = 'ui/icon_battle_money_02.png';
                platform.playEffect('res/music/zuanshi.mp3');
                let x = Laya.stage.width/2-100;
                let y = Laya.stage.height/2-100;
                gold.pos(Laya.stage.width/2,Laya.stage.height/2);                                        
                this.addChild(gold);    
                Laya.Tween.to(gold,{x:x+Math.random()*300-150-25, y:y+Math.random()*300-150-22},200,Laya.Ease.quartOut,Laya.Handler.create(this,()=>{//Laya.Ease.quartOut
                    Laya.Tween.to(gold,{x:20,y:20},250,Laya.Ease.quartIn,Laya.Handler.create(this,()=>{//Laya.Ease.quartIn
                        gold.destroy();                                                
                    }));
                }));
            });
            if(i==19){
                let count = 0;
                Laya.timer.once(20*i,this,()=>{
                    // 更改本关获得的金钱数量
                    for (let i=Number(this.money_num.text);i<=Number(this.money_num.text)+1000;i+=2){
                        Laya.timer.once(2*count,this,function(){
                            this.money_num.text = String(i);
                            if(i == this.diamond +1000){
                                Laya.timer.once(2*(count+1),this,function(){
                                    this.diamond += 1000;
                                    platform.setStorageSync('diamond',this.diamond);
                                    Laya.stage.event('likaibuzu');
                                    this.close();
                                    // Laya.Scene.open("gaindoublediamond.json",false);
                                });
                                
                            }
                        });
                        count += 1;
                    }
                });
            }
        }
    },

    // 计算当前时间到第二天的时间差
    dif_to_nextday(){
        // 获取现在的小时分钟秒
        let nowhour = new Date().getHours();
        let nowmin = new Date().getMinutes();
        let nowsec = new Date().getSeconds();
        console.log(nowhour,nowmin,nowsec);
        // 距离第二天刷新的时间
        let difhour = 23 - nowhour;
        let difmin = 59 - nowmin;
        let difsec = 60 - nowsec;
        this.shuaxinshijian.text = '任务刷新时间：' + difhour + ':' + difmin + ':' + difsec;
        let sumtime = difsec + difmin * 60 + difhour *3600;
        // 时时刷新倒计时
        Laya.timer.loop(1000,this,function(){
            if(sumtime>1){
                sumtime -= 1;
                let hour = Math.floor(sumtime/3600);
                let min =  Math.floor( (sumtime - hour*3600)/60 );
                let sec = Math.floor( (sumtime - hour*3600 - min*60) );
                if(min<10){
                    if(sec<10){
                        this.shuaxinshijian.text = '任务刷新时间：' + hour + ':0' + min + ':0' + sec;
                    }else{
                        this.shuaxinshijian.text = '任务刷新时间：' + hour + ':0' + min + ':' + sec;
                    }
                }else{
                    if(sec<10){
                        this.shuaxinshijian.text = '任务刷新时间：' + hour + ':' + min + ':0' + sec;
                    }else{
                        this.shuaxinshijian.text = '任务刷新时间：' + hour + ':' + min + ':' + sec;
                    }
                }
                console.log(hour,min,sec);
            }
            else{
                sumtime = 59 + 59 * 60 + 23 *3600;
                this.shuaxinshijian.text = '任务刷新时间：' + '23' + ':' + '59' + ':' + '59';
            }
        });
        return [difhour,difmin,difsec];
    },

     // 给指定的敌人添加血槽
     addbloodline(object,x,y){
        // 在ui界面里把初始点画出来
        let bloodline = new Laya.Sprite();
        bloodline.graphics.drawLine(-20, 50, 20, 50, 'green', 4);
        bloodline.name = 'bloodline';
        object.addChild(bloodline);
        bloodline.x = x;
        bloodline.y = y;
        return bloodline;
    },


    // 给指定UI内的对象添加小红点
    addredtippoint(object,skinurl:string='ui/redpoint.png'){
        let redtips = new Laya.Image;
        redtips.name = 'redtips';
        redtips.skin = skinurl;
        object.addChild(redtips);
        redtips.width = 32;
        redtips.height = 32;
        redtips.x = object.width - 25;
        redtips.y = -16;
    },

    // 给指定UI内的对象移除小红点
    delredtippoint(object,skinurl:string='ui/redpoint.png'){
        while(object.getChildByName('redtips')){
            let redtips = object.getChildByName('redtips') as Laya.Image;
            if(redtips){
                redtips.removeSelf();
                redtips.destroy();
            }
        }
    },

    // 按钮点击放大缩小效果加音效
    clickuibtn(object){
        platform.playEffect('res/music/anniu.mp3');
    },

    // 游戏过度动画函数
    transition1(level,isyindao = false){
        let img1 = new Laya.Image;
        img1.skin = 'ui/bg_loading.png';
        img1.width = Laya.stage.width;
        img1.height = Laya.stage.height;
        let x = 0;
        let y = -Laya.stage.height;
        img1.pos(x,0); 
        img1.zOrder = 9999;    
        Laya.stage.addChild(img1);
        let imglogo = new Laya.Image;
        imglogo.skin = 'ui/loading00.png';
        imglogo.anchorX = 0.5;
        imglogo.anchorY = 0.5;
        imglogo.pos(288,354);                         
        img1.addChild(imglogo);
        let tiplabel = new Laya.Label;
        tiplabel.text = '戴上耳机体验效果最佳';
        tiplabel.italic = true;
        tiplabel.bold = true;
        tiplabel.font = 'Microsoft YaHei';
        tiplabel.fontSize = 32;
        tiplabel.color = '#00f4ff';
        tiplabel.align = 'center';
        tiplabel.valign = 'middle';
        tiplabel.anchorX = 0.5;
        tiplabel.anchorY = 0.5;
        tiplabel.pos(Laya.stage.width/2,600);
        img1.addChild(tiplabel);
        Laya.Tween.to(img1,{y:0},88,Laya.Ease.quartIn,Laya.Handler.create(this,()=>{//Laya.Ease.quartIn
            Laya.stage.event('chooseedgame',[level,isyindao]);
            Laya.stage.on('guodu2',this,function(){
                img1.removeSelf();
                img1.destroy(true); 
            });
        }));
    },

    // 游戏过度动画函数
    transition2(){
        Laya.timer.once(888,this,function(){
            let img2 = new Laya.Image;
            img2.skin = 'ui/bg_loading.png';
            img2.width = Laya.stage.width;
            img2.height = Laya.stage.height;
            let x = 0;
            let y = 0;
            img2.pos(x,y);                                        
            Laya.stage.addChild(img2);
            let imglogo = new Laya.Image;
            imglogo.skin = 'ui/loading00.png';
            imglogo.anchorX = 0.5;
            imglogo.anchorY = 0.5;
            imglogo.pos(288,354);
            img2.addChild(imglogo);
            let tiplabel = new Laya.Label;
            tiplabel.text = '戴上耳机体验效果最佳';
            tiplabel.italic = true;
            tiplabel.bold = true;
            tiplabel.font = 'Microsoft YaHei';
            tiplabel.fontSize = 32;
            tiplabel.color = '#00f4ff';
            tiplabel.align = 'center';
            tiplabel.valign = 'middle';
            tiplabel.anchorX = 0.5;
            tiplabel.anchorY = 0.5;
            tiplabel.pos(Laya.stage.width/2,600);
            img2.addChild(tiplabel);
            Laya.stage.event('guodu2');
            img2.zOrder = 9999;    
            Laya.Tween.to(img2,{y:-Laya.stage.height},1288,Laya.Ease.quartIn,Laya.Handler.create(this,()=>{//Laya.Ease.quartIn
                Laya.stage.event('trasitionover');
                img2.removeSelf();
                img2.destroy(true);                                                
            }));
        });
    },

    // 世界坐标转相对坐标
    InverseTransformPoint(origin, point) {
        var xx = new Laya.Vector3();
        origin.getRight(xx);
        var yy = new Laya.Vector3();
        origin.getUp(yy);
        var zz = new Laya.Vector3();
        origin.getForward(zz);
        var zz1 = new Laya.Vector3(-zz.x, -zz.y, -zz.z);

        var x = this.ProjectDistance(point, origin.position, xx);
        var y = this.ProjectDistance(point, origin.position, yy);
        var z = this.ProjectDistance(point, origin.position, zz1);
        var value = new Laya.Vector3(x, y, z);
        return value;
    },

    // 相对坐标转世界坐标
    TransformPoint(origin, point) {
        var value = new Laya.Vector3();
        Laya.Vector3.transformQuat(point, origin.rotation, value);
        Laya.Vector3.add(value, origin.position, value);
        return value;
    },

    /**[SixGod]
     * 向量投影长度, 向量CA 在向量 CB 上的投影长度
     * @param {Laya.Vector3} A
     * @param {Laya.Vector3} C
     * @param {Laya.Vector3} B
     */
    ProjectDistance(A, C, B) {
        var CA = new Laya.Vector3();
        Laya.Vector3.subtract(A, C, CA);
        var angle = this.Angle2(CA, B) * Math.PI / 180;
        var distance = Laya.Vector3.distance(A, C);
        distance *= Math.cos(angle);
        return distance;
    },

    /**[SixGod]
     * 向量夹角
     * @param {Laya.Vector3} ma 向量A
     * @param {Laya.Vector3} mb 向量B
     */
    Angle2(ma, mb) {
        var v1 = (ma.x * mb.x) + (ma.y * mb.y) + (ma.z * mb.z);
        var ma_val = Math.sqrt(ma.x * ma.x + ma.y * ma.y + ma.z * ma.z);
        var mb_val = Math.sqrt(mb.x * mb.x + mb.y * mb.y + mb.z * mb.z);
        var cosM = v1 / (ma_val * mb_val);

        if (cosM < -1) cosM = -1;
        if (cosM > 1) cosM = 1;

        var angleAMB = Math.acos(cosM) * 180 / Math.PI;
        return angleAMB;
    },

    /** 世界坐标转屏幕坐标
     * @param {Laya.Camera} camera   参照相机
     * @param {Laya.Vector3} point   需要转换的点
     */
    WorldToScreen2(camera, point) {
        var pointA = this.InverseTransformPoint(camera.transform, point);
        var distance = pointA.z;

        var out = new Laya.Vector3();
        camera.viewport.project(point, camera.projectionViewMatrix, out);
        var value = new Laya.Vector3(out.x / Laya.stage.clientScaleX, out.y / Laya.stage.clientScaleY, distance);
        return value;
    },

    /**[SixGod]
     * 屏幕坐标转世界坐标
     * @param {Laya.Camera} camera  参照相机
     * @param {Laya.Vector3} point  需要转换的点
     */
    ScreenToWorld2(camera, point) {
        var halfFOV = (camera.fieldOfView * 0.5) * Math.PI / 180;
        let height = point.z * Math.tan(halfFOV);
        let width = height * camera.aspectRatio;

        let lowerLeft = this.GetLowerLeft(camera.transform, point.z, width, height);
        let v = this.GetScreenScale(width, height);

        // 放到同一坐标系（相机坐标系）上计算相对位置
        var value = new Laya.Vector3();
        var lowerLeftA = this.InverseTransformPoint(camera.transform, lowerLeft);
        value = new Laya.Vector3(-point.x / v.x, point.y / v.y, 0);
        Laya.Vector3.add(lowerLeftA, value, value);
        // 转回世界坐标系
        value = this.TransformPoint(camera.transform, value);
        return value;
    },

    // 屏幕坐标转世界坐标
    ScreenToWorld(point: Laya.Vector3) {
        var distance = point.z;
        var halfFOV = (this.mainCamera.fieldOfView * 0.5) * Math.PI / 180;
        var height = distance * Math.tan(halfFOV);
        var width = height * this.mainCamera.aspectRatio;

        // 相机在 distance距离的截面左下角世界坐标位置
        // LowerLeft
        var lowerLeft = new Laya.Vector3();
        var tx = this.mainCamera.transform;

        // lowerLeft = tx.position - (tx.right * width);
        var right = new Laya.Vector3();
        tx.getRight(right);
        var xx = new Laya.Vector3(right.x * width, right.y * width, right.z * width);
        Laya.Vector3.subtract(tx.position, xx, lowerLeft);
        // lowerLeft -= tx.up * height;
        var up = new Laya.Vector3();
        tx.getUp(up);
        var yy = new Laya.Vector3(up.x * height, up.y * height, up.z * height);
        Laya.Vector3.subtract(lowerLeft, yy, lowerLeft);
        // lowerLeft += tx.forward * distance;
        var forward = new Laya.Vector3();
        tx.getForward(forward);
        var zz = new Laya.Vector3(-forward.x * distance, -forward.y * distance, -forward.z * distance);
        Laya.Vector3.add(lowerLeft, zz, lowerLeft);

        // 根据比例计算屏幕相对于世界坐标的比例
        var v = new Laya.Vector3();
        v.x = width / Laya.stage.width * point.x * 2;
        v.y = height / Laya.stage.height * point.y * 2;
        // v.x = width / Laya.Browser.clientWidth * point.x * 2;
        // v.y = height / Laya.Browser.clientHeight * point.y * 2;
        v.z = 0;

        // 放到同一坐标系（相机坐标系）上计算相对位置
        var value = new Laya.Vector3();
        lowerLeft = this.InverseTransformPoint(tx, lowerLeft);
        Laya.Vector3.add(lowerLeft, v, value);
        // 转回世界坐标系
        value = this.TransformPoint(tx, value);
        return value;
    },

    // 求两个V3角度
    getAngle(_a:Laya.Vector3, _b:Laya.Vector3):number
    {
            let b:Laya.Vector3 = new Laya.Vector3(_b.x, _b.y, _b.z);
            let a:Laya.Vector3 = new Laya.Vector3(_a.x, _a.y, _a.z);
            b.x -= a.x;
            b.z -= a.z;

            let deltaAngle:number = 0;
            if (b.x == 0 && b.z == 0) {
                    return 0;
            } else if (b.x > 0 && b.z > 0) {
                    deltaAngle = 0;
            } else if (b.x > 0 && b.z == 0) {
                    return 90;
            } else if (b.x > 0 && b.z < 0) {
                    deltaAngle = 180;
            } else if (b.x == 0 && b.z < 0) {
                    return 180;
            } else if (b.x < 0 && b.z < 0) {
                    deltaAngle = -180;
            } else if (b.x < 0 && b.z == 0) {
                    return -90;
            } else if (b.x < 0 && b.z > 0) {
                    deltaAngle = 0;
            }
            let angle:number = this.radianToAngle(Math.atan(b.x / b.z)) - deltaAngle;
            // console.log("getAngle", angle);
            return angle;
    },

    // 弧度转角度
    radianToAngle(radian){
        let angle = radian / Math.PI * 180;
        return angle;
    },

    //深度拷贝json对象的函数，
    //source：待拷贝对象
    //返回一个新的对象
    DeepCopy(source: Object): any 
    {
        if(null == source || {} == source || [] == source)
        {
            return source;
        }
        
        let newObject : any;
        let isArray = false;
        if((source as any).length)
        {
            newObject = [];
            isArray = true;
        }
        else
        {
            newObject = {};
            isArray = false;
        }
        
	    for (let key of Object.keys(source))
	    {
	        if(null == source[key])
	        {
	            if (isArray)
	            {
	                newObject.push(null);
	            }
	            else
	            {
	                newObject[key] = null;
	            }
	        }
	        else
	        {
	            let sub = (typeof source[key] == 'object') ? this.DeepCopy(source[key]) : source[key];
	            if(isArray)
	            {
	                newObject.push(sub);
	            }
	            else
	            {
	                newObject[key] = sub;
	            }
	        }
	    }
	    return newObject;
    },

    // 原地旋转二位矩阵
    rotateMaps(matrix:number[][]) {
        const n = matrix.length;
        // 倒叙循环进行90度的反转
        for (let i = n-1; i >= 0; i--) {
            // 新数组补位到原数组中，为了是实现原地的旋转操作，如果不需要
            for (let j = 0; j < n ; j++) {
                // console.log(`当前坐标[${i},${j}]`)
                const current = matrix[i][j];
                matrix[j].push(current);
                // 没完成一组的赋值操作，就删除旋转前数组
                if(j === n - 1) {
                    matrix[i].splice(0, n);
                }
            }
        }
        return matrix;
    }

    }

export default tools;