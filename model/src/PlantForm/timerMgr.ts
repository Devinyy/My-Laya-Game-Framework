import platform from "./platform";
import tempData from "./tempData";

//数据管理器
export default class timerMgr {

    /**设置单例的引用方式，方便其他类引用 */
    static instance: timerMgr;

    constructor() {
        timerMgr.instance = this;
    }

    //=======================================================初始化所有数据================================================================
    init() {
        console.log("构造一个时间管理器");
        
    }

    //=======================================================存取删查数据操作================================================================
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