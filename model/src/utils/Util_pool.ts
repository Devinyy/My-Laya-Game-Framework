import { Enum_url } from "../enum/Enum_url";

/**
 * name: 对象池工具类
 */
export default class Util_pool {
    public static Instance: Util_pool = new Util_pool();
    public len: number = 0;                        //对象池长度
    public pool: Object;                           //对象池对象

    constructor() {
        this.pool = {};
    }

    pushInPool(key: any, value: any): void {
        if (key == null || value == null) {
            return undefined;
        } else {
            if (!value["inpool"]) {
                value["inpool"] = true;
                this.pool[key] = this.pool[key] || [];
                this.pool[key].push(value);
                this.len++;
            }
        }
    }

    getFromPool(key: any, handler: Laya.Handler, url: Enum_url = null): void {
        if (this.pool[key]) {
            let obj = this.pool[key].pop();
            if (obj && !obj.destroyed) {
                obj["inpool"] = false;
                this.len--;
                if (handler) {
                    handler.runWith(obj);
                }
            } else {
                if (!url) {
                    this.createFunc(Enum_url.url_game + key, handler);
                } else {
                    this.createFunc(url + key, handler);
                }
            }
        } else {
            if (!url) {
                this.createFunc(Enum_url.url_game + key, handler);
            } else {
                this.createFunc(url + key, handler);
            }
        }
    }

    createFunc(name: string, handler: Laya.Handler): void {
        Laya.Sprite3D.load(name + ".lh", Laya.Handler.create(null, (sprite) => {
            if (handler) {
                handler.runWith(Laya.Sprite3D.instantiate(sprite));
            }
        }));
    }

    clearPool(key: any): void {
        this.pool[key] = [];
        this.len = 0;
    }

    clearAllPool(): void {
        for (var i in this.pool) {
            for (let j = 0; j < this.pool[i].length; j++) {
                let child = this.pool[i][j];
                if (child && !child.destroyed) {
                    child.removeSelf();
                    child.destroy();
                }
            }
            delete this.pool[i];
        }
        this.pool = {};
        this.len = 0;
    }
}