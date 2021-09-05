import { ui } from "../../../../ui/layaMaxUI";
import { LwgControl, LwgCurrency, LwgEvent } from "../../../Lwg/Lwg";
import { GameData } from "../../Control/GameData";
import { GameEnum } from "../../Control/GameEnum";
import { GameEvent } from "../../Control/GameEvent";
import { GameType } from "../../Control/GameType";

/**
 * 按钮上红点提示，按钮必须写名字
 */
export default class RedDotObj extends ui.Views.Base.RedDotObjUI {
    constructor() {
        super();
    }
    onAwake(): void {
        LwgEvent.offAllCaller(this);
        LwgEvent.register(GameEvent.redDotHint, this, (args: any) => {
            this.updateHint(args);
        })
    }
    updateHint(args?: any): void {
        let bool = false;
        switch (this.parent && this.parent.name) {
            case 'btnSkin':
                bool = GameData.Skin.getNoCompeletExCheckAndLottery;
                break;

            case 'btnCheckIn':
                bool = !GameData.CheckIn.today;
                break;

            case 'btnLuckyWheel':
                bool = GameData.LuckyWheel.todayFree;
                break;

            case 'skill':
                const view = this.parent as ui.Views.SkillUpgradeObjUI;
                const data = view.dataSource as GameType.SkillData;
                const consume = GameData.Skill.getCurConsumeByType(data.type);
                const maxLv = GameData.Skill.getMaxLevelByType(data.type);
                if (data.level < maxLv) {
                    if (LwgCurrency.Diamond.num >= consume) {
                        bool = true;
                    }
                }
                break;

            default:
                break;
        }

        if (bool) {
            this.aniHint.play(0, true);
            this.visible = true;
        } else {
            this.aniHint.stop();
            this.visible = false;
        }
    }
}