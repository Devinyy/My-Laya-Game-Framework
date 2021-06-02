import platform from "../PlantForm/platform";
import { SingletonBase } from "../base/SingletonBase";
import tempData from "../PlantForm/tempData";

//数据管理器
export default class DataMgr extends SingletonBase {

    /**设置单例的引用方式，方便其他类引用 */
    static instance: DataMgr;

    constructor() {
        super();
        DataMgr.instance = this;
        this.init();
    }

    private static GameName = 'DMMDS_';

    //=======================================================初始化所有数据================================================================
    enemyData: Array<number>;
    shurikenData: Array<number>;
    init() {
        console.log("构造一个数据管理器");
        // 金币
        tempData.gold = this.hasStorageSync('gold') ? this.getStorageSync('gold','number') : 100;
        this.setStorageSync('gold',tempData.gold);
        // 钻石
        tempData.diamond = this.hasStorageSync('diamond') ? this.getStorageSync('diamond','number') : 500;
        this.setStorageSync('diamond',tempData.diamond);
        // 体力数量
        tempData.strength = this.hasStorageSync('strength') ? this.getStorageSync('strength','number') : 50;
        this.setStorageSync('strength',tempData.strength);
        // 当前关卡
        tempData.level = this.hasStorageSync('level') ? this.getStorageSync('level','number') : 0;
        this.setStorageSync('level',tempData.level);
    }

    //=======================================================存取删查数据操作================================================================
    /**
     * 获取存储数据
     * @param {string} key 数据项关键字
     * @param {string} type 数据项返回值类型 (string, number, boolean, object(对象数组匹配任何类型))
     * @returns {any} 返回相应数据项
    */
    public getStorageSync(key:string,type:string){
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
    public setStorageSync(key:string,value:any){
        if(typeof value == 'object'){
            console.log('setJSON',key,value); 
            localStorage.setItem(DataMgr.GameName + key, JSON.stringify(value));
        }else{
            Laya.LocalStorage.setItem(DataMgr.GameName + key,value);
        }
    }

    /**
     * 删除存储数据
     * @param {string} key 数据项关键字
    */
    public deleteStorageSync(key:string){
        Laya.LocalStorage.removeItem(DataMgr.GameName + key);
    }

    /**
     * 查看是否有存储数据
     * @param {string} key 数据项关键字
    */
    public hasStorageSync(key:string){
        var value = Laya.LocalStorage.getItem(DataMgr.GameName + key);
        return !(value === null || value === undefined || value === '');
    }

    //=======================================================通用存取数据操作================================================================
    /**
     * 保存金币
     * @param {string} key 数据项关键字
    */
    public saveGold(){
        this.setStorageSync('gold',tempData.gold);
    }

    /**
     * 保存钻石
     * @param {string} key 数据项关键字
    */
    public saveDiamond(){
        this.setStorageSync('diamond',tempData.diamond);
    }

    /**
     * 保存体力
     * @param {string} key 数据项关键字
    */
    public saveStrength(){
        this.setStorageSync('strength',tempData.strength);
    }


    /**
     * 保存关卡
     * @param {string} key 数据项关键字
    */
    public saveLevel(){
        this.setStorageSync('level',tempData.level);
    }
}

export const dataMgr = DataMgr.getInstance<DataMgr>();