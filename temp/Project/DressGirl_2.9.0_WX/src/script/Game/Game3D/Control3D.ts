import { GameData } from "../Control/GameData";
import { GameEnum } from "../Control/GameEnum";
import { Effect3D } from "./Effect3D";
import { EndLessScene } from "./EndLessScene";
import { MainScene } from "./MainScene";
import { Role } from "./Role";
import { SkinScene } from "./SkinScene";
import { SkinShowScene } from "./SkinShowScene"; 

/**
 * 3d控制
 */
export module Control3D {
    export class Init {
        constructor() {
            new MainScene();
            new EndLessScene();
            new Role();
            new Effect3D();
            new SkinScene();
            new SkinShowScene();
        }
    }
    /**
     * 开始
     */
    export function start(sprint: GameEnum.MoveForwardArgs): void {
        Role.ins.setState(GameEnum.RoleState.Start, [sprint]);
    }
    export function hideAll(): void {
        SkinScene.ins.hide();
        MainScene.ins.scene.active = false;
        MainScene.ins.clear();
        EndLessScene.ins.scene.active = false;
        EndLessScene.ins.clear();
    }
    /**
     * 主场景
     */
    export function showMainScene(): void {
        hideAll();
        MainScene.ins.scene.active = true;
        MainScene.ins.ready();
        Role.ins.changeScene(MainScene.ins.scene);
        Role.ins.setState(GameEnum.RoleState.Ready);
    }

    /**
     * 切换到无尽模式场景
     */
    export function showEndLess(): void {
        hideAll();
        EndLessScene.ins.scene.active = true;
        EndLessScene.ins.ready();
        Role.ins.changeScene(EndLessScene.ins.scene);
        Role.ins.setState(GameEnum.RoleState.Ready);
    }

    /**
     * 皮肤场景
     */
    export function showSkinScene(): void {
        hideAll();
        SkinScene.ins.show();
    }
}
