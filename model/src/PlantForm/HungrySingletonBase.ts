'use strict';

/**
 * 一般情况下，不建议使用第 2 种和第 3 种懒汉式单例，建议使用第 1 种饿汉式单例，
 * 如果项目中明确要使用延时加载那么使用第 5 种静态内存类的单例，
 * 如果有序列化反序列化操作可以使用第 6 种枚举单例模式，
 * 如果是其它需求可以使用第 4 种 DCL 单例。
 */

/**
 * 单例类基类 (饿汉式) 
 * 
 * @export
 * @abstract
 * @class SingletonBase
 */
export abstract class HungrySingletonBase {

	// 1、构造方法私有化
    private constructor() {
		
    }
	
	// 2、成员变量静态化  饿汉式直接在类加载的时候就初始化实例
	private static _instance = new (<any> this)();

	// 3、实例公有方法静态化
    public static getInstance<T>(): T {
		let instance = (<any> this)._instance;
        return instance;
    }
	
}
