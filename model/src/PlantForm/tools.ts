import platform from "./platform";
import urls from "./urls";
import gameconstdata from "../Data/gameconstdata"

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
                gold.skin = 'ui/ass0/icon_money_03.png';
                platform.playEffect('res/music/zuanshi.mp3');
                let x = Laya.stage.width/2-100;
                let y = Laya.stage.height/2-100;
                gold.pos(Laya.stage.width/2,Laya.stage.height/2);                                        
                this.addChild(gold);    
                Laya.Tween.to(gold,{x:x+Math.random()*300-150-25, y:y+Math.random()*300-150-22},200,Laya.Ease.quartOut,Laya.Handler.create(this,()=>{//Laya.Ease.quartOut
                    Laya.Tween.to(gold,{x:45,y:20},250,Laya.Ease.quartIn,Laya.Handler.create(this,()=>{//Laya.Ease.quartIn
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
        bloodline.graphics.drawLine(-20, -60, 20, -60, '#222222', 4);
        bloodline.name = 'bloodline';
        object.addChild(bloodline);
        let bloodline2 = new Laya.Sprite();
        bloodline2.graphics.drawLine(-20, -60, 20, -60, 'green', 4);
        bloodline2.name = 'bloodline2';
        bloodline.addChild(bloodline2);
        bloodline.x = x;
        bloodline.y = y;
        return bloodline;
    },


    // 给指定UI内的对象添加小红点
    addredtippoint(object,skinurl:string='ui/ass1/redpoint.png'){
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
    delredtippoint(object,skinurl:string='ui/ass1/redpoint.png'){
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
    transition1(){
        let img1 = new Laya.Image;
        img1.skin = 'ui/z_bigpic/Main_BG.jpg';
        img1.width = Laya.stage.width;
        img1.height = Laya.stage.height;
        let x = 0;
        let y = -Laya.stage.height;
        img1.pos(x,0); 
        img1.zOrder = 9999;    
        Laya.stage.addChild(img1);
        img1.name = 'img1';
        img1.on(Laya.Event.MOUSE_DOWN,img1,(e)=>{e.stopPropagation();});
        img1.on(Laya.Event.MOUSE_MOVE,img1,(e)=>{e.stopPropagation();});
        img1.on(Laya.Event.MOUSE_UP,img1,(e)=>{e.stopPropagation();});
        Laya.loader.create("prefab/startmiddle.json", Laya.Handler.create(this, (res)=>{
            let startmiddle = Laya.loader.getRes("prefab/startmiddle.json");
            let cell = new Laya.View();
            cell.createView(startmiddle);
            img1.addChild(cell);
            cell.pos(Laya.stage.width,Laya.stage.height/2);
        }));
        Laya.Tween.to(img1,{y:0},88,Laya.Ease.quartIn,Laya.Handler.create(this,()=>{}));
    },

    // 游戏过度动画函数
    transition2(){
        Laya.timer.once(1500,this,function(){
            let img1 = Laya.stage.getChildByName('img1') as Laya.Image;
            if(img1){
                let img2 = new Laya.Image;
                img2.skin = 'ui/z_bigpic/Main_BG.jpg';
                img2.width = Laya.stage.width;
                img2.height = Laya.stage.height;
                let x = 0;
                let y = 0;
                img2.pos(x,y);                                        
                Laya.stage.addChild(img2);
                img1.removeSelf();
                img1.destroy();
                img2.on(Laya.Event.MOUSE_DOWN,img2,(e)=>{e.stopPropagation();});
                img2.on(Laya.Event.MOUSE_MOVE,img2,(e)=>{e.stopPropagation();});
                img2.on(Laya.Event.MOUSE_UP,img2,(e)=>{e.stopPropagation();});
                Laya.stage.event('guodu2');
                img2.zOrder = 9999;    
                Laya.loader.create("prefab/startmiddle.json", Laya.Handler.create(this, (res)=>{
                    let startmiddle = Laya.loader.getRes("prefab/startmiddle.json");
                    let cell = new Laya.View();
                    cell.createView(startmiddle);
                    img2.addChild(cell);
                    cell.pos(Laya.stage.width,Laya.stage.height/2);
                }));
                Laya.Tween.to(img2,{y:-Laya.stage.height},1,Laya.Ease.quartIn,Laya.Handler.create(this,()=>{//Laya.Ease.quartIn
                    Laya.stage.event('trasitionover');
                    img2.removeSelf();
                    img2.destroy(true);                                                
                }));
            }
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
    },

    // 根据角度旋转二位矩阵
    rotationarray(matrix:number[][],spinangle:number){
        let resultarray = [[0,0,0],[0,0,0],[0,0,0]];
        // 根据旋转角度选择不同的计算方法
        // console.log('spinangle = ',spinangle);
        for(let i=0;i<matrix.length;i++)
        {   
            for(let j=0;j<matrix[i].length;j++)
            {
                if(spinangle == 0){
                    resultarray[i][j]=matrix[i][j];  //顺时针旋转0度
                }
                else if(spinangle == 90){
                    resultarray[i][j]=matrix[matrix.length-1-j][i];  //顺时针旋转90度
                }
                else if(spinangle == 180){
                    resultarray[i][j]=matrix[matrix.length-1-i][matrix.length-1-j]; //顺时针旋转180度
                }
                else if(spinangle == 270){
                    resultarray[i][j]=matrix[j][matrix.length-1-i];   //顺时针旋转270度
                }
            }
        }
        return resultarray;
    },

    // 水平翻转二维矩阵
    xrotationarray(matrix:number[][]){
        let resultarray = [[0,0,0],[0,0,0],[0,0,0]];
        for(let i=0;i<matrix.length;i++)
        {   
            for(let j=0;j<matrix[i].length;j++)
            {
                resultarray[i][j]=matrix[matrix.length-1-i][j];  //顺时针旋转0度
            }
        }
        return resultarray;
    },

    // 根据角度旋转二位矩阵中的某个点
    rotationpoint(matrix:number[][],spinangle:number,point:number[]){
        // 根据旋转角度选择不同的计算方法
        let i = 0;
        let j = 0;
        if(spinangle == 0){
            //顺时针旋转0度
            i = point[0];
            j = point[1];  
        }
        else if(spinangle == 90){
            //顺时针旋转90 度
            i = point[1];
            j = matrix.length-1-point[0];
        }
        else if(spinangle == 180){
            //顺时针旋转180度
            i = matrix.length-1-point[0];
            j = matrix.length-1-point[1];
        }
        else if(spinangle == 270){
            //顺时针旋转270度
            i = matrix.length-1-point[1];
            j = point[0];
        }
        return [i,j];
    },

    // 水平翻转二位矩阵中的某个点
    xrotationpoint(matrix:number[][],point:number[]){
        // 根据旋转角度选择不同的计算方法
        let i = 0;
        let j = 0;
        i = matrix.length-1-point[0];
        j = j;
        return [i,j];
    },

    // 计算概率 固定数组结构 通过权重
    countProByWeight(dataArr:Array<any>, isRepeat = true, count = 1)
    {
        // 数据结构必须要是 [{"weight:100"}] || [{"rate:100"}]
        let natrueArr = dataArr;
        let arr = natrueArr.concat();
        let _data:any = [];

        for(let c = 1; c <= count; c++)
        {
            let totalWeight = 0;
            for(let i = 0; i < arr.length; i++)
            {
                if(arr[i].weight){
                    totalWeight += Number(arr[i].weight);
                }else{
                    totalWeight += Number(arr[i].rate);
                }
            }
            let r:number = tools.getRandomIntInclusive(1, totalWeight);
            let n:number = 0;
            for(let _i:number = 0; _i < arr.length; _i++)
            {
                    let data:any = arr[_i];
                    if(data.weight){
                        var w:number = Number(data.weight);
                    }else{
                        var w:number = Number(data.rate);
                    }
                    if(r>n && r<=n+w)
                    {
                        _data.push(data);
                        if(!isRepeat) arr.splice(_i, 1);
                        break;
                    }else n += w;
            }
        }
        return _data;
    },

    // 比较敌人的移动距离
    compare(property){
        return function(a,b){
            if(a && b){
                var value1 = a[property];
                var value2 = b[property];
                if(value1){
                    if(value2){
                        return -(value1 - value2);
                    }
                }
                else return 0;
            }
        }
    },

    // 去除一个数末尾多余的0并返回
    deletezero(num){
        num = Number(num);
        let s = num.toString();
        if(s.indexOf(".") > 0){
          //正则表达
          s = s.replace("0+?$", "");//去掉后面无用的零
          s = s.replace("[.]$", "");//如小数点后面全是零则去掉小数点
        }
        return s;
    },

    // 创建新手引导的遮罩
    createMask():Laya.View{
        var layer:Laya.View = new Laya.View();           
        layer.size(Laya.stage.width,Laya.stage.height);
        layer.zOrder = 98;      
        var bg = new Laya.Box();
        bg.size(Laya.stage.width,Laya.stage.height);    
        bg.bgColor = '#000000';
        bg.alpha = 0.8;
        layer.addChild(bg);
        bg.mouseEnabled = false;
        bg.on(Laya.Event.MOUSE_DOWN,bg,(e)=>{e.stopPropagation();});
        bg.on(Laya.Event.MOUSE_MOVE,bg,(e)=>{e.stopPropagation();});
        bg.on(Laya.Event.MOUSE_UP,bg,(e)=>{e.stopPropagation();});

        // 然后添加公主
        Laya.loader.create("prefab/dialog2.json", Laya.Handler.create(this, function(){
            let cellView = Laya.loader.getRes("prefab/dialog2.json");
            let cell = new Laya.View();
            cell.createView(cellView);
            cell.name = 'dialog2';
            layer.addChild(cell);
            // 调节节点的位置
            cell.x = bg.width / 2;
            cell.y = bg.height / 2;
            cell.visible = false;
            Laya.stage.event('addfinish');
        }));

        return layer;
    },
    
    //201119
    attr(a,b,keys:string[]=[]){
        // if(tools.isValid(a) && tools.isValid(b)){
            for(var i = 0;i<keys.length;i++){
                var key = keys[i];
                a[key] = b[key];
            }
        // }
    },

    isValid(node){
        if(node){
            return true;
        }
        else return false;
    },

    //201119 复制精灵和img和button外观 图省事 应该有别的复制法
    copyImgNode(node:Laya.Node,parent:Laya.Node=null){
        if(tools.isValid(node)){                                 
            if(node instanceof Laya.Image || node instanceof Laya.Button){
                var a = new Laya.Image();                    
                this.attr(a,node,[
                    'skin','sizeGrid',
                    'x','y','width','height','left','right','top','bottom','centerX','centerY',
                    'pivotX','pivotY','anchorX','anchorY','scaleX','scaleY','skewX','skewY','rotation','alpha',
                    'name','visible'
                ]);                    
                for(var i = 0;i<node.numChildren;i++){
                    this.copyImgNode(node.getChildAt(i),a);
                }
                if(tools.isValid(parent)){
                    parent.addChild(a);
                }
                return a;
            }else if(node instanceof Laya.Label){
                var l = new Laya.Label();
                this.attr(l,node,[
                    'text','italic','bold','fontSize','color','stroke','strokeColor',
                    'x','y','width','height','left','right','top','bottom','centerX','centerY',
                    'pivotX','pivotY','anchorX','anchorY','scaleX','scaleY','skewX','skewY','rotation','alpha',
                    'name','visible'
                ]);
                for(var i = 0;i<node.numChildren;i++){
                    this.copyImgNode(node.getChildAt(i),l);
                }
                if(tools.isValid(parent)){
                    parent.addChild(l);
                }
                return l;
            }else if(node instanceof Laya.Box){
                var d = new Laya.Box();                
                this.attr(d,node,[
                    'bgColor',
                    'x','y','width','height','left','right','top','bottom','centerX','centerY',
                    'pivotX','pivotY','anchorX','anchorY','scaleX','scaleY','skewX','skewY','rotation','alpha',
                    'name','visible'
                ]);
                for(var i = 0;i<node.numChildren;i++){
                    this.copyImgNode(node.getChildAt(i),d);
                }
                if(tools.isValid(parent)){
                    parent.addChild(d);
                }
                return d;

            }else if(node instanceof Laya.Sprite){
                var b = new Laya.Sprite();                                        
                this.attr(b,node,[
                    'texture',
                    'x','y','width','height','left','right','top','bottom','centerX','centerY',
                    'pivotX','pivotY','anchorX','anchorY','scaleX','scaleY','skewX','skewY','rotation','alpha',
                    'name','visible'
                ]);
                for(var i = 0;i<node.numChildren;i++){
                    this.copyImgNode(node.getChildAt(i),b);
                }
                if(tools.isValid(parent)){
                    parent.addChild(b);
                }
                return b;
            }else{
                var c = new Laya.Sprite();                    
                this.attr(c,node,[
                    'x','y','width','height','left','right','top','bottom','centerX','centerY',
                    'pivotX','pivotY','anchorX','anchorY','scaleX','scaleY','skewX','skewY','rotation','alpha',
                    'name','visible'
                ]);
                for(var i = 0;i<node.numChildren;i++){
                    this.copyImgNode(node.getChildAt(i),c);
                }
                if(tools.isValid(parent)){
                    parent.addChild(c);
                }
                return c;
            }
        }
    },


}

export default tools;