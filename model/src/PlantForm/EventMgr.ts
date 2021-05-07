import { SingletonBase } from "./SingletonBase";

export default class EventMgr extends SingletonBase {

    private _eventDispatcher: Laya.EventDispatcher;

    constructor() {
        super();
        this._eventDispatcher = new Laya.EventDispatcher();
    }

    on(type: string, caller: any, listener: Function, args?: Array<any>): Laya.EventDispatcher {
        return this._eventDispatcher.on(type, caller, listener, args);
    }

    once(type: string, caller: any, listener: Function, args?: Array<any>): Laya.EventDispatcher {
        return this._eventDispatcher.once(type, caller, listener, args);
    }

    off(type: string, caller: any, listener: Function, onceOnly?: boolean): Laya.EventDispatcher {
        return this._eventDispatcher.off(type, caller, listener, onceOnly);
    }

    event(type: string, data?: any): boolean {
        return this._eventDispatcher.event(type, data)
    }
}
export const eventMgr = EventMgr.getInstance<EventMgr>();