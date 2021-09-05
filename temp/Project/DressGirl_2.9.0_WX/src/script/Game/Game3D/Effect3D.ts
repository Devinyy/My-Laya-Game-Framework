import { LwgTimer, LwgTools } from "../../Lwg/Lwg";
import { GameData } from "../Control/GameData";
import { GameEnum } from "../Control/GameEnum";
import { GameRes } from "../Control/GameRes";

export class Effect3D {
    static ins: Effect3D;
    constructor() {
        Effect3D.ins = this;
    }
    public get effParent(): Laya.Sprite3D {
        let parent: Laya.Sprite3D;
        let scene: Laya.Scene3D;
        if (GameData.Level.mode === GameEnum.LevelMode.common) {
            scene = GameRes.Scene3D.MainScene.instance;
        } else {
            scene = GameRes.Scene3D.EndLess.instance;
        }
        parent = scene.getChildByName('effParent') as Laya.Sprite3D;
        if (!parent) {
            parent = new Laya.Sprite3D;
            parent.name = 'effParent';
            scene.addChild(parent) as Laya.Sprite3D;
        }
        return parent;
    }

    ready(): void {
        LwgTools.Node.destroyAllChildren(this.effParent);
    }
    play_Right(v3: Laya.Vector3, prent?: Laya.Sprite3D): Laya.Sprite3D {
        const eff = GameRes.Prefab3D.effect_right.instance.clone() as Laya.Sprite3D;
        this.playBase(eff, v3, 3000, prent);
        return eff;
    }
    play_zuanshi(v3: Laya.Vector3, prent?: Laya.Sprite3D): Laya.Sprite3D {
        const eff = GameRes.Prefab3D.effect_zuanshi.instance.clone() as Laya.Sprite3D;
        this.playBase(eff, v3, 3000, prent);
        return eff;
    }
    play_Change(v3: Laya.Vector3, index: number, prent?: Laya.Sprite3D): Laya.Sprite3D {
        const eff = GameRes.Prefab3D['effect_change0' + index].instance.clone() as Laya.Sprite3D;
        this.playBase(eff, v3, 3000, prent);
        return eff;
    }
    // play_chongci(v3: Laya.Vector3, prent?: Laya.Sprite3D): Laya.Sprite3D {
    //     const eff = GameRes.Prefab3D.effect_chongci.instance.clone() as Laya.Sprite3D;
    //     this.playBase(eff, v3, 5000, prent);
    //     return eff;
    // }
    // play_Error(v3: Laya.Vector3, prent?: Laya.Sprite3D): Laya.Sprite3D {
    //     v3.z += 2;
    //     const eff = GameRes.Prefab3D.effect_eat02.instance.clone() as Laya.Sprite3D;
    //     this.playBase(eff, v3, 500, prent);
    //     return eff;
    // }

    // play_Change(v3: Laya.Vector3, prent?: Laya.Sprite3D): Laya.Sprite3D {
    //     const eff = GameRes.Prefab3D.effect_change1.instance.clone() as Laya.Sprite3D;
    //     this.playBase(eff, v3, 3500, prent);
    //     return eff;
    // }
    // play_Attack(v3: Laya.Vector3, prent?: Laya.Sprite3D, localPos?: boolean): Laya.Sprite3D {
    //     const eff = GameRes.Prefab3D.effect_attack.instance.clone() as Laya.Sprite3D;
    //     this.playBase(eff, v3, 2500, prent, localPos);
    //     return eff;
    // }
    // play_Chongci(v3: Laya.Vector3, prent?: Laya.Sprite3D, localPos?: boolean): Laya.Sprite3D {
    //     const eff = GameRes.Prefab3D.effect_chongci.instance.clone() as Laya.Sprite3D;
    //     this.playBase(eff, v3, -1, prent, localPos);
    //     return eff;
    // }

    // play_Stone(v3: Laya.Vector3, prent?: Laya.Sprite3D, localPos?: boolean): Laya.Sprite3D {
    //     const eff = GameRes.Prefab3D.effect_Stone.instance.clone() as Laya.Sprite3D;
    //     this.playBase(eff, v3, 4000, prent, localPos);
    //     return eff;
    // }

    private playBase(eff: Laya.Sprite3D, v3: Laya.Vector3, time: number, parent?: Laya.Sprite3D, localPos?: boolean): void {
        this.effParent.addChild(eff);
        if (parent) {
            parent.addChild(eff);
        } else {
            this.effParent.addChild(eff);
        }
        if (localPos) {
            eff.transform.localPosition = v3;
        } else {
            eff.transform.position = v3;
        }
        if (time !== -1) {
            Laya.timer.once(time, this, () => {
                eff.destroy(true);
            })
        }
    }
}