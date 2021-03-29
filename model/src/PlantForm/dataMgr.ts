import platform from "./platform";

//数据管理器
export default class dataMgr {

    /**设置单例的引用方式，方便其他类引用 */
    static instance: dataMgr;

    constructor() {
        dataMgr.instance = this;
        this.init();
    }

    //=======================================================初始化所有数据================================================================
    enemyData: Array<number>;
    shurikenData: Array<number>;
    init() {
        console.log("构造一个数据管理器");
        this.enemyData = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
        this.shurikenData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,100,100,100];
        //存取当前关卡-------------------------------------------------------------------------------------------------------------------------
        let str = localStorage.getItem("curMission");
        if (!str) {
            localStorage.setItem("curMission", String(0));
        }
        //存取当前选中手里干-------------------------------------------------------------------------------------------------------------------------
        str = localStorage.getItem("curShuriken");
        if (!str) {
            localStorage.setItem("curShuriken", String(0));
        }
        //存取当前金币数-------------------------------------------------------------------------------------------------------------------------
        str = localStorage.getItem("gold");
        if (!str) {
            localStorage.setItem("gold", String(0));
        }
        //存取神器可使用次数-------------------------------------------------------------------------------------------------------------------------
        str = localStorage.getItem("NBweaponTimes");
        if (!str) {
            localStorage.setItem("NBweaponTimes", String(0));
        }
        //存取神器可使用次数-------------------------------------------------------------------------------------------------------------------------
        str = localStorage.getItem("NBweaponIndex");
        if (!str) {
            localStorage.setItem("NBweaponIndex", String(-1));
        }
        //存取当前三项设置-----------------------------------------------------------------------------------------------------------------------------
        str = localStorage.getItem("settingData");
        if (!str) {
            localStorage.setItem("settingData", JSON.stringify(
                {
                    "isMusic": true,
                    "isSound": true,
                    "isVibrate": true
                }
            ))
        }
        //存取签到天数-------------------------------------------------------------------------------------------------------------------------
        str = localStorage.getItem("signDays");
        if (!str) {
            localStorage.setItem("signDays", String(0));
        }
        //存取今日签到窗口是否已经弹出-------------------------------------------------------------------------------------------------------------------------
        str = localStorage.getItem("isSignPop");
        if (!str) {
            localStorage.setItem("isSignPop", String(false));
        }
        //存取上次签到系统日期-------------------------------------------------------------------------------------------------------------------------
        str = localStorage.getItem("lastSignDate");
        if (!str) {
            localStorage.setItem("lastSignDate", JSON.stringify([0, 0, 0]));
        }
        //商城数据
        str = localStorage.getItem("shopData_0");
        if (!str) {
            localStorage.setItem("shopData_0", JSON.stringify([1, -1, -5, -10, -20, -30]));
        }
        str = localStorage.getItem("shopData_1");
        if (!str) {
            localStorage.setItem("shopData_1", JSON.stringify([0, 0, 0, 0, 0, 0]));
        }
        str = localStorage.getItem("shopData_2");
        if (!str) {
            localStorage.setItem("shopData_2", JSON.stringify([-2, -2, -2, -2, -2, -2]));
        }
    }

    //=======================================================存取删查数据操作================================================================
    /**
     * 获取存储数据
     * @param {string} key 数据项关键字
     * @param {string} type 数据项返回值类型 (string, number, boolean, object(对象数组匹配任何类型))
     * @returns {any} 返回相应数据项
    */
    // 获取本地存储的键值
    getStorageSync(key:string,type:string){
        if(type == 'object'){
            var str = Laya.LocalStorage.getItem(key);
            try{
                console.log('getJSON' + key , JSON.parse(str));             
                return JSON.parse(str);
            }catch(err){
                console.log('get err = ', err);
                return null;
            }
        }else{
            var value = Laya.LocalStorage.getItem(key);
            switch(type){
                default:
                case 'string':
                    return value;
                case 'number':
                    return Number(value);
                case 'boolean':
                    return value == 'true';
            }                
        }
    }

    /**
     * 更新存储数据
     * @param {string} key 数据项关键字
     * @param {any} value 数据值
    */
    // 往本地存数值
    setStorageSync(key:string,value:any){
        if(typeof value == 'object'){
            console.log('setJSON',key,value); 
            localStorage.setItem(key,JSON.stringify(value));
        }else{
            Laya.LocalStorage.setItem(key,value);
        }
    }

    /**
     * 删除存储数据
     * @param {string} key 数据项关键字
    */
    deleteStorageSync(key:string){
        Laya.LocalStorage.removeItem(key);
    }

    /**
     * 查看是否有存储数据
     * @param {string} key 数据项关键字
    */
    hasStorageSync(key:string){
        var value = Laya.LocalStorage.getItem(key);
        return !(value === null || value === undefined || value === '');
    }

    //=======================================================存取数据操作================================================================

    
}