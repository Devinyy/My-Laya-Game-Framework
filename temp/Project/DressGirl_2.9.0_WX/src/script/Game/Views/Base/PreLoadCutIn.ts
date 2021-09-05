import { LwgPreLoad } from "../../../Lwg/Lwg";
import { GameEnum } from "../../Control/GameEnum";
import { GameResCutIn } from "../../Control/GameRes";
import GameSceneName from "../../Control/GameSceneName";
import { Role } from "../../Game3D/Role";
export default class PreLoadCutIn extends LwgPreLoad.PreLoadCutInBase {
    lwgOnAwake(): void {
    }
    lwgOpenAniAfter(): void {
        this.lodeStart([this.preLoadOpenName] ? GameResCutIn[this.preLoadOpenName] : {});
        // if (this.preLoadOpenName === GameSceneName.Start) {
        //     Role.ins.setState(GameEnum.RoleState.Suspend);
        // }
        if (this.preLoadFromName === GameSceneName.Victory) {
            Laya.Resource.destroyUnusedResources();
        }
    }
    lodeAllComplete(): number {
        return 800;
    }
}

