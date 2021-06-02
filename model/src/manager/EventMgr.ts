/**
 * name:全局事件侦听器
 */

export default class EventMgr extends Laya.EventDispatcher{

    public static readonly instance: EventMgr = new EventMgr();
    /** 事件对象数组 */
    protected events: {type: any, caller: any, func: Function, dispatcher: Laya.EventDispatcher}[] = [];

    constructor(){
        super();
    }

    /**
     * @param type 事件类型
     * @param caller 执行域
     * @param func 回调函数
     * @param args 参数
     * @param dispatcher 事件侦听器
     */
    registEvent(type: any, caller: any, func: Function, args?: Array<any>, dispatcher?: Laya.EventDispatcher): void{
        (args === void 0) && (args = null);
        (dispatcher === void 0) && (dispatcher = EventMgr.instance);
        //监听事件
        dispatcher.on(type, caller, func);
        //删除重复的事件
        this.events.some(e => {
            if(e.type == type && e.caller == caller){
                this.delEvent(e.type, e.caller, e.func);
                return true;
            }
        });
        //将注册的事件放进数组中管理
        this.events.push({type, caller, func, dispatcher});
    }

    /**
     * 从数组中删除对应的事件
     * @param type 
     * @param caller 
     * @param func 
     * @param dispatcher 
     */
    delEvent(type: any, caller: any, func: Function, dispatcher?: Laya.EventDispatcher): void{
        (dispatcher === void 0) && (dispatcher = EventMgr.instance);
        //将原来的事件从事件侦听器中删除
        dispatcher.off(type, caller, func);    
        //从数组中删除已有的事件
        this.events.some((e, index)=>{
            if(e.type == type && e.caller == caller && e.func == func){
                this.events.splice(index, 1);
                return true;
            }
        });
    }

    /** 删除在此对象范围内注册的所有事件 */
    delEvents(): void {
        var e: {type: any, caller: any, func: Function, dispatcher: Laya.EventDispatcher} = null;
        while(this.events && this.events.length > 0){
            e = this.events.pop();
            if(e){
                //根据放在数组中的事件从全局事件对象中关闭对应的事件
                e.dispatcher.off(e.type, e.caller, e.func);
            }
        }
    }
}