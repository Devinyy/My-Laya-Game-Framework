import platform from "./platform";

export default class Utils {

    /**设置单例的引用方式，方便其他类引用 */
    static instance: Utils;

    constructor() { 
        Utils.instance = this;
    }


    public static ttfName: string = "SimHei";
    public static NumfontName: string = "SimHei";

    // 判断当前设备的宽高比
    public static ischangping(): boolean{
        let stagewidth = Laya.stage.width;
        let stageheight = Laya.stage.height;
        if (stageheight/stagewidth > 1.7795138888888888){
            return true;
        }
        else{
            return false;
        }
    }

    // ui 长屏适配
    public static uichangping(object:Laya.Scene) {
        object.width = Laya.stage.width;
        object.height = Laya.stage.height;
    }

    // 根据手机宽高比例选择不同的相机视野
    public static changeCameraField(camera:Laya.Camera) {
        let stagewidth = Laya.stage.width;
        let stageheight = Laya.stage.height;
        if (stageheight/stagewidth > 1.7795138888888888){
            camera.fieldOfView = 60;
        }
        else{
            camera.fieldOfView = 50;
        }
    }

    // 发现子节点
    public static findChildNode(parentObj:any,path:string):Laya.Node {
        let result = parentObj;
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
    }

    // 发射投影
    public static setCastShadow(node:Laya.Sprite3D,bool:boolean){
        if(node && !node.destroyed){
            if(node instanceof Laya.MeshSprite3D){
                node.meshRenderer.castShadow = bool;
            }else if(node instanceof Laya.SkinnedMeshSprite3D){
                node.skinnedMeshRenderer.castShadow = bool;
            }
            for(var i = 0;i<node.numChildren;i++){
                this.setCastShadow((node.getChildAt(i) as Laya.Sprite3D),bool);
            }
        }
    }

    // 接收投影
    public static setReceiveShadow(node:Laya.Sprite3D,bool:boolean){
        if(node && !node.destroyed){
            if(node instanceof Laya.MeshSprite3D){
                node.meshRenderer.receiveShadow = bool;
            }else if(node instanceof Laya.SkinnedMeshSprite3D){
                node.skinnedMeshRenderer.receiveShadow = bool;
            }
            for(var i = 0;i<node.numChildren;i++){
                this.setReceiveShadow((node.getChildAt(i) as Laya.Sprite3D),bool);
            }
        }
    }

    // 传一个a返回一个min到max之间的数
    public static clampf(a,min,max){
        if(a<min) return min;
        else if(a>max) return max;
        return a;
    }

    // 得到一个两数之间的随机整数，包括两个数在内
    public static getRandomIntInclusive(min:number, max:number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
    }


    // 计算当前时间到第二天的时间差
    public static dif_to_nextday(lab_countDown:Laya.Label){
        // 获取现在的小时分钟秒
        let nowhour = new Date().getHours();
        let nowmin = new Date().getMinutes();
        let nowsec = new Date().getSeconds();
        console.log(nowhour,nowmin,nowsec);
        // 距离第二天刷新的时间
        let difhour = 23 - nowhour;
        let difmin = 59 - nowmin;
        let difsec = 60 - nowsec;
        lab_countDown.text = '任务刷新时间：' + difhour + ':' + difmin + ':' + difsec;
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
                        lab_countDown.text = '任务刷新时间：' + hour + ':0' + min + ':0' + sec;
                    }else{
                        lab_countDown.text = '任务刷新时间：' + hour + ':0' + min + ':' + sec;
                    }
                }else{
                    if(sec<10){
                        lab_countDown.text = '任务刷新时间：' + hour + ':' + min + ':0' + sec;
                    }else{
                        lab_countDown.text = '任务刷新时间：' + hour + ':' + min + ':' + sec;
                    }
                }
                console.log(hour,min,sec);
            }
            else{
                sumtime = 59 + 59 * 60 + 23 *3600;
                lab_countDown.text = '任务刷新时间：' + '23' + ':' + '59' + ':' + '59';
            }
        });
        return [difhour,difmin,difsec];
    }

    // 给指定的敌人添加血槽
    public static addbloodline(object,x,y){
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
    }

    // 给指定UI内的对象添加小红点
    public static addredtippoint(object,skinurl:string='ui/ass1/redpoint.png'){
        let redtips = new Laya.Image;
        redtips.name = 'redtips';
        redtips.skin = skinurl;
        object.addChild(redtips);
        redtips.width = 32;
        redtips.height = 32;
        redtips.x = object.width - 25;
        redtips.y = -16;
    }

    // 给指定UI内的对象移除小红点
    public static delredtippoint(object,skinurl:string='ui/ass1/redpoint.png'){
        while(object.getChildByName('redtips')){
            let redtips = object.getChildByName('redtips') as Laya.Image;
            if(redtips){
                redtips.removeSelf();
                redtips.destroy();
            }
        }
    }

    // 游戏过度动画函数
    public static transition1(){
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
    }

    // 游戏过度动画函数
    public static transition2(){
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
    }

    // 世界坐标转相对坐标
    public static InverseTransformPoint(origin, point) {
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
    }

    // 相对坐标转世界坐标
    public static TransformPoint(origin, point) {
        var value = new Laya.Vector3();
        Laya.Vector3.transformQuat(point, origin.rotation, value);
        Laya.Vector3.add(value, origin.position, value);
        return value;
    }

    /**[SixGod]
     * 向量投影长度, 向量CA 在向量 CB 上的投影长度
     * @param {Laya.Vector3} A
     * @param {Laya.Vector3} C
     * @param {Laya.Vector3} B
     */
    public static ProjectDistance(A, C, B) {
        var CA = new Laya.Vector3();
        Laya.Vector3.subtract(A, C, CA);
        var angle = this.Angle2(CA, B) * Math.PI / 180;
        var distance = Laya.Vector3.distance(A, C);
        distance *= Math.cos(angle);
        return distance;
    }

    /**[SixGod]
     * 向量夹角
     * @param {Laya.Vector3} ma 向量A
     * @param {Laya.Vector3} mb 向量B
     */
    public static Angle2(ma, mb) {
        var v1 = (ma.x * mb.x) + (ma.y * mb.y) + (ma.z * mb.z);
        var ma_val = Math.sqrt(ma.x * ma.x + ma.y * ma.y + ma.z * ma.z);
        var mb_val = Math.sqrt(mb.x * mb.x + mb.y * mb.y + mb.z * mb.z);
        var cosM = v1 / (ma_val * mb_val);

        if (cosM < -1) cosM = -1;
        if (cosM > 1) cosM = 1;

        var angleAMB = Math.acos(cosM) * 180 / Math.PI;
        return angleAMB;
    }

    /** 世界坐标转屏幕坐标
     * @param {Laya.Camera} camera   参照相机
     * @param {Laya.Vector3} point   需要转换的点
     */
    public static WorldToScreen2(camera, point) {
        var pointA = this.InverseTransformPoint(camera.transform, point);
        var distance = pointA.z;

        var out = new Laya.Vector3();
        camera.viewport.project(point, camera.projectionViewMatrix, out);
        var value = new Laya.Vector3(out.x / Laya.stage.clientScaleX, out.y / Laya.stage.clientScaleY, distance);
        return value;
    }

    // 屏幕坐标转世界坐标
    public static ScreenToWorld(camera:Laya.Camera, point: Laya.Vector3) {
        var distance = point.z;
        var halfFOV = (camera.fieldOfView * 0.5) * Math.PI / 180;
        var height = distance * Math.tan(halfFOV);
        var width = height * camera.aspectRatio;

        // 相机在 distance距离的截面左下角世界坐标位置
        // LowerLeft
        var lowerLeft = new Laya.Vector3();
        var tx = camera.transform;

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
    }

    // 求两个V3角度
    public static getAngle(_a:Laya.Vector3, _b:Laya.Vector3):number
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
    }

    // 弧度转角度
    public static radianToAngle(radian){
        let angle = radian / Math.PI * 180;
        return angle;
    }

    //深度拷贝json对象的函数，
    //source：待拷贝对象
    //返回一个新的对象
    public static DeepCopy(source: Object): any 
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
    }

    /**
     * 更换贴图
     * @param bg1:3D网格精灵
     * @param url:贴图的地址
     */
    public static changeTexture(MeshSpriteObj:Laya.MeshSprite3D, textureUrl:string) {
        let bg1material = MeshSpriteObj.meshRenderer.material as laya.d3.core.material.UnlitMaterial;
        // 换贴图
        Laya.loader.load(textureUrl,Laya.Handler.create(this,(texture)=> {
            bg1material.albedoTexture = texture;
        }));
    }

    /**
     * 修改材质球
     * @param MeshSpriteObj:3D网格精灵
     * @param isSharedMatretial:是否更改共享材质球
     */
     public static getMaterial(MeshSpriteObj:Laya.MeshSprite3D, isSharedMatretial:boolean) {
        if(isSharedMatretial) {
            // 修改共享材质球
            // 获取取sharedMaterial材质球
            var MeshSpriteMaterial = MeshSpriteObj.meshRenderer.sharedMaterial  as laya.d3.core.material.BlinnPhongMaterial;
        }
        else {
            var MeshSpriteMaterial = MeshSpriteObj.meshRenderer.material  as laya.d3.core.material.BlinnPhongMaterial;
        }
        
        return MeshSpriteMaterial;
    }
    

    // 原地旋转二位矩阵
    public static rotateMaps(matrix:number[][]) {
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

    // 根据角度旋转二位矩阵
    public static rotationarray(matrix:number[][],spinangle:number){
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
    }

    // 水平翻转二维矩阵
    public static xrotationarray(matrix:number[][]){
        let resultarray = [[0,0,0],[0,0,0],[0,0,0]];
        for(let i=0;i<matrix.length;i++)
        {   
            for(let j=0;j<matrix[i].length;j++)
            {
                resultarray[i][j]=matrix[matrix.length-1-i][j];  //顺时针旋转0度
            }
        }
        return resultarray;
    }

    // 根据角度旋转二位矩阵中的某个点
    public static rotationpoint(matrix:number[][],spinangle:number,point:number[]){
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
    }

    // 水平翻转二位矩阵中的某个点
    public static xrotationpoint(matrix:number[][],point:number[]){
        // 根据旋转角度选择不同的计算方法
        let i = 0;
        let j = 0;
        i = matrix.length-1-point[0];
        j = j;
        return [i,j];
    }

    // 计算概率 固定数组结构 通过权重
    public static countProByWeight(dataArr:Array<any>, isRepeat = true, count = 1)
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
            let r:number = this.getRandomIntInclusive(1, totalWeight);
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
    }

    // 比较敌人的移动距离
    public static compare(property){
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
    }

    // 去除一个数末尾多余的0并返回
    public static deletezero(num){
        num = Number(num);
        let s = num.toString();
        if(s.indexOf(".") > 0){
          //正则表达
          s = s.replace("0+?$", "");//去掉后面无用的零
          s = s.replace("[.]$", "");//如小数点后面全是零则去掉小数点
        }
        return s;
    }

    // 创建新手引导的遮罩
    public static createMask():Laya.View{
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
    }

    public static ChangeListLabelFont(parent) {
        if (parent instanceof Laya.List) {
            var itemRenderTemp = parent.itemRender;
            var childs = itemRenderTemp["child"];
        }
        else
            var childs = parent;

        for (var childI = 0; childI < childs.length; childI++) {
            var childTemp = childs[childI];
            if (this.ttfName) {
                if (childTemp["type"] == "Label") {
                    childTemp["props"]["font"] = this.ttfName;
                }
                var childTempsChildre = childTemp["child"]
                if (childTempsChildre && childTempsChildre.length != 0) {
                    this.ChangeListLabelFont(childTempsChildre);
                }
            }
        }
    }

    //循环遍历所有子物体 寻找Label
    public static findAndChangeFont(parent, isChangeFont = true) {
        // var widthFix = Laya.stage.width / GameConfig.width;
        // var heightFix = Laya.stage.height / GameConfig.height;
        // console.log("findAndChangeFont.",widthFix, heightFix);
        for (let i = 0; i < parent._children.length; i++) {
            let child = parent._children[i];
            // this.sceneWFixed(child);
            // child.scaleY = child.scaleY / this.heightFix * this.widthFix;

            if (this.ttfName && isChangeFont) {
                if (child instanceof Laya.Label) {
                    this.ChangeLabel(child);
                }
                if (child._children.length != 0) {
                    this.findAndChangeFontChild(child);
                }
            }
        }
    }

    public static findAndChangeFontChild(parent) {
        for (let i = 0; i < parent._children.length; i++) {
            let child = parent._children[i];

            if (this.ttfName) {
                if (child instanceof Laya.Label) {
                    this.ChangeLabel(child);
                }
                if (child._children.length != 0) {
                    this.findAndChangeFontChild(child);
                }
            }
        }
    }

    public static ChangeLabel(child) {
        if (child.name == "Num_Font") {
            child.font = this.ttfName;
            // child.bold = true;
            // console.log("替换字体:", this.NumfontName);
        }
        else {
            child.font = this.ttfName;
            // child.bold = true;
        }

    }

}