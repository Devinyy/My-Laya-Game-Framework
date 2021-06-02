'use strict';

/**
 * 单例类基类
 * 
 * @export
 * @abstract
 * @class SingletonBase
 */
export abstract class SingletonBase {

    public constructor() {
        if((<any>this)._instance){
            throw "singleton class is not use new constructor";
        }
    }

    public static getInstance<T>(): T {
        let instance = (<any>this)._instance;
        
        if (!instance) {
            instance = (<any>this)._instance = new (<any>this)();
        }

        return instance;
    }
}
