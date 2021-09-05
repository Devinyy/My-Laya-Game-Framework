import { ui } from "../../../ui/layaMaxUI";
import { Lwg3D, LwgAni3D, LwgControl, LwgCurrency, LwgDate, LwgDialogue, LwgEvent, LwgGuide, LwgPlatform, LwgTimer, LwgTools } from "../../Lwg/Lwg";
import { GameData } from "../Control/GameData";
import { GameEnum } from "../Control/GameEnum";
import { GameEvent } from "../Control/GameEvent";
import { GameRes } from "../Control/GameRes";
import { GameType } from "../Control/GameType";
import { Effect3D } from "./Effect3D";
import { MainScene } from "./MainScene";

export class Role {
    static ins: Role;
    constructor() {
        Role.ins = this;
        this.changeScene(MainScene.ins.scene);
        StateControl.Init();
    }
    scene: Laya.Scene3D;
    cameraPoint: Laya.Sprite3D;
    camera: Laya.Camera;
    role: Laya.Sprite3D;
    skin: Laya.Sprite3D;
    changeScene(scene: Laya.Scene3D): void {
        this.scene = scene;
        this.cameraPoint = this.scene.getChildByName('CameraPoint') as Laya.Sprite3D;
        this.camera = this.cameraPoint.getChildByName('Main Camera') as Laya.Camera;
        if (!this.scene.getChildByName('Role')) {
            this.role = new Laya.Sprite3D;
            this.role.name = 'Role';
            this.scene.addChild(this.role);
        } else {
            this.role = this.scene.getChildByName('Role') as Laya.Sprite3D;
        }
        this.changeSkin();
        this.changeColor(4);
        this.changeTravel(4);
    }
    state: GameEnum.RoleState;
    /**
     * 设置状态
     */
    setState(state: GameEnum.RoleState, args: any[] = []): void {
        StateControl.stateClear();
        switch (state) {
            case GameEnum.RoleState.Suspend:
                StateControl.Suspend.ins.action();
                break;

            case GameEnum.RoleState.Ready:
                StateControl.stateReset();
                StateControl.Ready.ins.action();
                break;

            case GameEnum.RoleState.Start:
                StateControl.stateReset();
                StateControl.Start.ins.action(
                    args, () => {
                        this.setState(GameEnum.RoleState.Run, args);
                    });
                break;
            case GameEnum.RoleState.Resurgence:
                StateControl.Resurgence.ins.action(
                    args, () => {
                        this.setState(GameEnum.RoleState.Run, args);
                    });
                break;

            case GameEnum.RoleState.Run:
                StateControl.MoveCrosswise.ins.action();
                StateControl.MoveForward.ins.action(args);
                StateControl.Run.ins.action();
                break;

            case GameEnum.RoleState.Diamond:
                StateControl.Diamond.ins.action(
                    args,
                    () => {
                        this.setState(GameEnum.RoleState.Run);
                    });
                break;

            case GameEnum.RoleState.Wall:
                StateControl.Wall.ins.action(
                    args,
                    () => {
                        this.setState(GameEnum.RoleState.Run);
                    },
                    () => {
                        this.setState(GameEnum.RoleState.Defeated);
                    });
                break;

            case GameEnum.RoleState.Bubble:
                StateControl.MoveCrosswise.ins.action();
                StateControl.Bubble.ins.action(
                    args,
                    (args: any[]) => {
                        StateControl.MoveForward.ins.action(args);
                    },
                    () => {
                        this.setState(GameEnum.RoleState.Defeated);
                    });
                break;

            case GameEnum.RoleState.Door:
                StateControl.Door.ins.action(
                    args,
                    () => {
                        this.setState(GameEnum.RoleState.Run);
                    });
                break;
            case GameEnum.RoleState.Drop:
                StateControl.Drop.ins.action(
                    args,
                    () => {
                        this.setState(GameEnum.RoleState.Run);
                    },
                    (drop: GameEnum.ResurgenceType.drop) => {
                        this.setState(GameEnum.RoleState.Defeated, [GameEnum.ResurgenceType.drop]);
                    });
                break;

            case GameEnum.RoleState.Slope:
                StateControl.Slope.ins.action(
                    args,
                    () => {
                        this.setState(GameEnum.RoleState.Run);
                    });
                StateControl.MoveCrosswise.ins.action();
                break;

            case GameEnum.RoleState.KeyFood:
                StateControl.KeyFood.ins.action(
                    args,
                    () => {
                        this.setState(GameEnum.RoleState.Run);
                    });
                break;

            case GameEnum.RoleState.Destination:
                StateControl.MoveCrosswise.ins.action();
                StateControl.Destination.ins.action(
                    args,
                    () => {
                        this.setState(GameEnum.RoleState.Dance);
                    });
                break;

            case GameEnum.RoleState.Dance:
                StateControl.Dance.ins.action(
                    args,
                    () => {
                        this.setState(GameEnum.RoleState.Victory);
                    });
                break;

            case GameEnum.RoleState.Victory:
                StateControl.Victory.ins.action();
                break;

            case GameEnum.RoleState.Defeated:
                StateControl.Defeated.ins.action(args);
                break;

            default:
                break;
        }
        this.state = state;
    }
    playAniRole(aniName: GameEnum.RoleAni): Laya.Animator {
        // const box = this.skin.getChildByName('box') as Laya.Sprite3D;
        // if (!box.getComponent(RoleScript)) {
        //     box.addComponent(RoleScript);
        // }
        // const aniCilp = GameData.Animator.getClipNameByRoleNameAndAni(this.skin.name, aniName);
        // console.log('----------', skin.name, aniName, aniCilp);
        return LwgTools.D3.playAnimator(this.skin, aniName);
    }

    playAniCrossFade(aniName: GameEnum.RoleAni): void {
        const animator = this.skin.getComponent(Laya.Animator) as Laya.Animator;
        animator.crossFade(aniName, 1);
    }

    playAniByCommon(roleSkin: Laya.Sprite3D, aniName: GameEnum.RoleAni): Laya.Animator {
        return;
        const aniCilp = GameData.Animator.getClipNameByRoleNameAndAni(roleSkin.name, aniName);
        // console.log(skin.name, aniCilp);
        return LwgTools.D3.playAnimator(roleSkin, aniCilp);
    }
    _colorIndex: number;
    public get colorIndex(): number {
        return this._colorIndex ? this._colorIndex : 1;
    }

    public set colorIndex(val: number) {
        this._colorIndex = val;
        LwgEvent.notify(GameEvent.updateRoleHP, [this._colorIndex]);
    }

    changeColor(colorIdnex: GameEnum.Colour = GameEnum.Colour.red): void {
        this.colorIndex = colorIdnex;
        if (colorIdnex !== GameEnum.Colour.rainbow) {
            this.hair.meshRenderer.material = GameRes.Material[`dress0${colorIdnex}`].instance;
            this.dress.skinnedMeshRenderer.material = GameRes.Material[`hair0${colorIdnex}`].instance;
        } else {
            this.dress.skinnedMeshRenderer.material = GameRes.Material[`hair0${colorIdnex}`].instance;
        }
    }

    changeTravel(colorIndex: GameEnum.Colour): void {
        // if (!this.travelPointL) {
        const travelPointL = LwgTools.Node.findChild3D(this.skin, 'TravelPointL');
        // }
        for (let index = 0; index < travelPointL.numChildren; index++) {
            const element = travelPointL.getChildAt(index) as Laya.Sprite3D;
            if (+element.name.substr(7, 1) === colorIndex) {
                element.active = true;
            } else {
                element.active = false;
            }
        }
        // if (!this.travelPointR) {
        const travelPointR = LwgTools.Node.findChild3D(this.skin, 'TravelPointR');
        // }
        for (let index = 0; index < travelPointR.numChildren; index++) {
            const element = travelPointR.getChildAt(index) as Laya.Sprite3D;
            if (+element.name.substr(7, 1) === colorIndex) {
                element.active = true;
            } else {
                element.active = false;
            }
        }
    }

    hair: Laya.MeshSprite3D;
    dress: Laya.SkinnedMeshSprite3D;
    wing: Laya.MeshSprite3D;
    changeSkin(dressName?: string, hairName?: string, wingName?: string): void {

        dressName = dressName ? dressName : GameData.Skin.pitchDressName;
        hairName = hairName ? hairName : GameData.Skin.pitchHairName;
        wingName = wingName ? wingName : GameData.Skin.pitchWingName;

        LwgTools.Node.destroyAllChildren(this.role);
        this.skin = (GameRes.Prefab3D.role01.instance as Laya.Sprite3D).clone() as Laya.Sprite3D;
        this.role.addChild(this.skin);
        const box = this.skin.getChildByName('box') as Laya.Sprite3D;
        if (!box.getComponent(RoleScript)) {
            box.addComponent(RoleScript);
        }
        for (let index = 0; index < this.skin.numChildren; index++) {
            const part = this.skin.getChildAt(index) as Laya.SkinnedMeshSprite3D;
            if (part.name.substr(0, 5) === 'Dress') {
                if (part.name === dressName) {
                    part.active = true;
                    this.dress = part;
                } else {
                    part.active = false;
                }
            }
        }
        const hairParent = LwgTools.Node.findChild3D(this.skin, 'mixamorig:HeadTop_End');
        for (let index = 0; index < hairParent.numChildren; index++) {
            const part = hairParent.getChildAt(index) as Laya.MeshSprite3D;
            if (part.name === hairName) {
                part.active = true;
                this.hair = part.getChildAt(0) as Laya.MeshSprite3D;
            } else {
                part.active = false;
            }
        }
        const wingPoint = LwgTools.Node.findChild3D(this.skin, 'WingPoint');
        for (let index = 0; index < wingPoint.numChildren; index++) {
            const part = wingPoint.getChildAt(index) as Laya.MeshSprite3D;
            if (part.name === wingName) {
                part.active = true;
                this.wing = part.getChildAt(0) as Laya.MeshSprite3D;
            } else {
                part.active = false;
            }
        }
    }

    showFontHP(num: number, sp3D?: Laya.Sprite3D, diffX?: number, diffY?: number): void {
        return;
        const sp3d0 = sp3D ? sp3D : Role.ins.role;
        const point = LwgTools.D3.getPosToScreen(sp3d0.transform.position, Role.ins.camera);
        let color = '#ff5547';
        if (num >= 0) {
            color = '#56ff47';
        }
        const numStr = num > 0 ? '+' + num.toString() : num.toString();
        let diffX0 = diffX === undefined ? 100 : diffX;
        let diffY0 = diffY === undefined ? 100 : diffY;
        const scale = sp3d0.transform.localScaleX;
        diffX0 *= scale;
        diffY0 *= scale;
        LwgDialogue.FloatWord.createFontSystem(point.x + diffX0, point.y + diffY0, { content: numStr, color: color }, 1, false);
    }
    showFontAttribute(str: string): void {
        return;
        let color = '#56ff47';
        const point = LwgTools.D3.getPosToScreen(Role.ins.role.transform.position, Role.ins.camera);
        point.y -= this.role.transform.localScaleX * 100;
        point.y -= 50;
        LwgDialogue.FloatWord.createFontSystem(point.x, point.y, { content: str, color: color }, 1, false);
    }
    updateLevelDisplay(): void {
        const point = LwgTools.D3.getPosToScreen(Role.ins.role.transform.position, Role.ins.camera);
        point.y -= this.role.transform.localScaleX * 100;
        point.y -= 50;
        LwgEvent.notify(GameEvent.updateRoleDataDisplay, [point]);
    }
}

/**
 * 碰撞检测脚本
 * 1.岩浆碰到后，根据岩浆的长度减少不同的血量，用碰撞检测结束减血也可以
 * 2.碰到恐龙后，根据恐龙身上的血量数值减去一定的数值，每秒减多少数值来计算时间
 * 3.碰到转换形态的门;恐龙的形态分为2种，一种是食肉，一种是食草，碰到转换形态后会变身，变身是为了吃后面的对应的食物，如果吃到对应的食物相反掉血，对应则加血
 * 4.吃到对应的食物会增加一定数量的血量，达到一定数量就会变身变大，仅作为视觉上的增长，如果吃到相反的食物，则掉血
 * 5.结算时跟最后的boss比血量
 * 6.食草的食物是草木，食肉的食物是肉食
 */
class RoleScript extends Lwg3D.Object3D {
    owner: Laya.MeshSprite3D;
    onTriggerEnter(other: laya.d3.physics.PhysicsComponent): void {
        const otherOwner = other.owner as Laya.Sprite3D;
        const name = otherOwner.name;
        if (otherOwner['alreadyEnter']) {
            return;
        }
        otherOwner['alreadyEnter'] = true;
        // console.log(name);
        if (name.substr(0, 6) == 'paopao') {
            Role.ins.setState(GameEnum.RoleState.Bubble, [otherOwner]);
        }
        else if (name.substr(0, 11) == 'ZhangaiBian') {
            Role.ins.setState(GameEnum.RoleState.Door, [otherOwner]);
        }
        else if (name.substr(0, 11) == 'destination') {
            Role.ins.setState(GameEnum.RoleState.Destination, [otherOwner]);
        }
        else if (name.substr(0, 13) == 'zhangai_xiepo') {
            Role.ins.setState(GameEnum.RoleState.Slope, [otherOwner]);
        }
        else if (name.substr(0, 8) == 'zhangai0') {
            Role.ins.setState(GameEnum.RoleState.Wall, [otherOwner]);
        }
        else if (name.substr(0, 7) == 'KeyFood') {
            Role.ins.setState(GameEnum.RoleState.KeyFood, [otherOwner]);
        }
        else if (name.substr(0, 4) == 'drop') {
            Role.ins.setState(GameEnum.RoleState.Drop, [otherOwner]);
        }
    }

    onTriggerExit(other: laya.d3.physics.PhysicsComponent): void {
        return;
        const otherOwner = other.owner as Laya.Sprite3D;
        const name = otherOwner.name;
        if (name.substr(0, 12) === 'yanjiang') {
            if (otherOwner['alreadyExit']) {
                return;
            }
            otherOwner['alreadyExit'] = true;
        }
    }
}
export class aniScript extends Lwg3D.Object3D {
    owner: Laya.Sprite3D;
    lwgOnAwake(): void {
    }
    attackEnd(): void {
        const animator = this.owner.getComponent(Laya.Animator) as Laya.Animator;
        const state = GameData.Animator.getClipNameByRoleNameAndAni(this.owner.name, GameEnum.RoleAni.idle);
        animator.crossFade(state, 1);
    }
}

/**
 * 通常不会直接调用
 */
export module StateControl {
    /**
     * 清理状态
     */
    export function stateReset(): void {
        for (const key in StateControl) {
            if (Object.prototype.hasOwnProperty.call(StateControl, key)) {
                const state = StateControl[key];
                if (state['ins'] && state['ins']['reset']) {
                    state['ins']['reset']();
                    // LwgEvent.offAllCaller(state['ins']);
                }
            }
        }
    }

    /**
     * 清理状态
     */
    export function stateClear(): void {
        for (const key in StateControl) {
            if (Object.prototype.hasOwnProperty.call(StateControl, key)) {
                const state = StateControl[key];
                if (state['ins'] && state['ins']['actionStop']) {
                    state['ins']['actionStop']();
                }
            }
        }
    }

    /**
     * 状态初始化
     */
    export function Init(): void {
        for (const key in StateControl) {
            if (Object.prototype.hasOwnProperty.call(StateControl, key)) {
                const state = StateControl[key];
                const name = state['name'];
                if (name && name && name !== 'Init' && name !== 'stateClear' && name !== 'stateBase') {
                    new state();
                }
            }
        }
    }

    /**
     * 状态基本接口,接口内不会相互转换状态，不改变其他状态的属性，全部在setState中通过回调进行改变和转换
     */
    export class stateBase {
        /**
         * 游戏重新准备的时候，重置属性
         */
        reset?: Function;
        /**
         * 行为
         */
        action(args: any[], continueCb?: Function, endCb?: Function) { };
        /**
         * 停止行为
         */
        actionStop?: Function;
    }

    export class Suspend implements stateBase {
        static ins: Suspend;
        constructor() {
            Suspend.ins = this;
        }
        action(): void {
            // 暂停
        }
    }

    export class Ready implements stateBase {
        static ins: Ready;
        constructor() {
            Ready.ins = this;
        }
        cameraPointFP: Laya.Vector3;
        cameraPointFR: Laya.Vector3;
        cameraFR: Laya.Vector3;
        cameraFP: Laya.Vector3;
        roleFP: Laya.Vector3;
        roleFS: Laya.Vector3;
        roleFR: Laya.Vector3;
        action(): void {
            Role.ins.cameraPoint.transform.position = new Laya.Vector3(2, -7, -7);
            Role.ins.cameraPoint.transform.localRotationEuler = new Laya.Vector3(-15, 147.5, 4.8);

            Role.ins.role.transform.localPosition = new Laya.Vector3(0, 0, 0);
            Role.ins.role.transform.localScale = new Laya.Vector3(1, 1, 1);
            Role.ins.role.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);

            Role.ins.changeSkin();
            Role.ins.changeColor();
            Role.ins.changeTravel(0);
            Role.ins.playAniRole(GameEnum.RoleAni.dance);
            Laya.timer.frameLoop(1, this, () => {
                Role.ins.updateLevelDisplay();
            })
        }
        actionStop(): void {
            Laya.timer.clearAll(this);
        }
    }

    export class Start implements stateBase {
        static ins: Start;
        constructor() {
            Start.ins = this;
        }
        action(args: any[], endCb: Function): void {
            Laya.timer.frameLoop(1, this, () => {
                Role.ins.updateLevelDisplay();
            })
            const time = 1000;
            LwgAni3D.moveTo(Role.ins.cameraPoint, new Laya.Vector3(0, 0, 0), time, this, null, () => {
            });
            LwgAni3D.rotateTo(Role.ins.cameraPoint, new Laya.Vector3(0, 0, 0), time, this, null, () => {
                endCb && endCb();
                Role.ins.changeTravel(Role.ins.colorIndex);
            });
        }
        actionStop(): void {
            Laya.timer.clearAll(this);
        }
    }

    /**
     * 向前移动
     */
    export class MoveForward implements stateBase {
        static ins: MoveForward;
        constructor() {
            MoveForward.ins = this;
            this.reset();
        }

        public get speed(): number {
            // console.log(this.speedBase, this.speedBubble, this.speedSprint);
            return this.speedBase + this.speedBubble + this.speedSprint;
        }

        bubbleCaller: any = {};
        isBubble: boolean;
        bubbleAddSpeed = 0;
        bubbleTime = 50;

        sprintCaller: any = {};
        get sprintTime(): number {
            if (GameData.Level.mode === GameEnum.LevelMode.endless) {
                return 6000;
            } else {
                return 6000;
            }
        }
        isSprint: boolean;
        sprintAddSpeed = 0.5;
        sprintEff: Laya.Sprite3D;
        speedSprint = 0;
        speedBubble = 0;
        speedBase: number = 0;
        reset(): void {
            this.speedBase = 0.8 * (1 + GameData.Skill.getSkillAdditionByType(GameEnum.SkillType.speed));
            this.speedBubble = 0;
            this.speedSprint = 0;
            this.sprintAddSpeed = 0.5;
            this.bubbleAddSpeed = 0;
            if (GameData.Level.mode === GameEnum.LevelMode.endless) {
                LwgEvent.offAllCaller(this);
                LwgEvent.register(GameEvent.roadIndex, this, () => {
                    this.speedBase += 0.03;
                    // console.log(this.speedBase, this.speedBubble, this.speedSprint);
                });
            }
        }
        action(args: any[] = []): void {
            // console.log('移动参数：', args);
            if (args[0] === GameEnum.MoveForwardArgs.sprint) {
                this.sprintProps();
            } else {
                if (args[0] === GameEnum.MoveForwardArgs.rightBubble) {
                    this.bubbleAddSpeed = 0.15;
                }
                else if (args[0] === GameEnum.MoveForwardArgs.errorBubble) {
                    this.bubbleAddSpeed = -0.2;
                }
                this.bubble();
            }
            Laya.timer.frameLoop(1, this, this.actionCb);
        }
        private actionCb(): void {
            LwgEvent.notify(GameEvent.addMileageCur, [this.speed]);
            Role.ins.cameraPoint.transform.translate(new Laya.Vector3(0, 0, this.speed), false);
            Role.ins.role.transform.translate(new Laya.Vector3(0, 0, this.speed), false);
            Role.ins.updateLevelDisplay();
        }

        bubble(): void {
            // if (!this.isSprint) {
            Laya.timer.clearAll(this.bubbleCaller);
            this.speedBubble = this.bubbleAddSpeed;
            this.isBubble = true;
            Laya.timer.once(this.bubbleTime, this.bubbleCaller, () => {
                this.isBubble = false;
                const subSpeed = this.bubbleAddSpeed / 15;
                LwgTimer.frameNumLoop(1, 15, this.bubbleCaller, () => {
                    this.speedBubble -= subSpeed;
                }, () => {
                    this.speedBubble = 0;
                    Role.ins.playAniRole(GameEnum.RoleAni.run);
                })
            })
            // }
        }

        sprintProps(): void {
            this.isSprint = true;
            this.sprintEff && this.sprintEff.destroy(true);
            this.sprintEff = GameRes.Prefab3D.effect_chongci.instance.clone() as Laya.Sprite3D;
            Role.ins.changeColor(GameEnum.Colour.rainbow);
            Laya.timer.once(200, this, () => {
                Role.ins.changeTravel(GameEnum.Colour.rainbow);
            })
            Role.ins.skin.addChild(this.sprintEff);
            Laya.timer.clearAll(this.sprintCaller);
            this.speedSprint = this.sprintAddSpeed;
            Laya.timer.once(this.sprintTime, this.sprintCaller, () => {
                this.isSprint = false;
                const subSpeed = this.sprintAddSpeed / 15;
                LwgTimer.frameNumLoop(1, 15, this.sprintCaller, () => {
                    this.speedSprint -= subSpeed;
                }, () => {
                    this.speedSprint = 0;
                    this.sprintEff && this.sprintEff.destroy(true);
                    Door.ins.changeColor();
                    Role.ins.playAniRole(GameEnum.RoleAni.run);
                })
            })
        }

        stopBubble(): void {
            Laya.timer.clearAll(this.bubbleCaller);
        }
        // stopSprint(): void {
        //     Laya.timer.clearAll(this.sprintCaller);
        // }

        actionStop(): void {
            Laya.timer.clear(this, this.actionCb);

        }
    }

    /**
      * 移动范围
      */
    export let gMoveScope: [number, number];
    /**
     * 移动范围
     */
    export let gMoveCameraScope: [number, number];
    /**
     * 横向移动
     */
    export class MoveCrosswise implements stateBase {
        static ins: MoveCrosswise;
        constructor() {
            MoveCrosswise.ins = this;
            this.reset();
        }
        /**
         * 速度
         */
        speed: number;
        reset(): void {
            this.speed = 0.06;
            gMoveScope = [-10, 10];
            gMoveCameraScope = [-6, 6];
            this.isDestination = false;
        }
        isDestination = false;
        /**
         * 记录横向移动是按下的X位置
         */
        mouseX: number;
        action(): void {
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.stageMove);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.stageUp);
            Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.stageUp);
        }
        private stageMove(event: Laya.Event): void {
            if (this.isDestination) {
                return;
            }
            if (this.mouseX) {
                this.setScopeLimit(Role.ins.cameraPoint, event);
                this.setScopeLimit(Role.ins.role, event);
                this.mouseX = event.stageX;
            } else {
                this.mouseX = event.stageX;
            }
        }
        /**
         * 设置横向移动范围上线
         * @param target 
         * @param e  Laya.Event
         */
        setScopeLimit(target: Laya.Sprite3D, e: Laya.Event): void {
            let croMouseX = this.mouseX;
            let diffX = e.stageX - croMouseX;
            let targetX = 0;
            if (target == Role.ins.cameraPoint) {
                targetX = target.transform.position.x - diffX * this.speed * 0.6;
            } else {
                targetX = target.transform.position.x - diffX * this.speed;
            }
            target.transform.position = new Laya.Vector3(targetX, target.transform.position.y, target.transform.position.z)
            //摄像机
            const posTarget = target.transform.position.clone();

            if (target == Role.ins.cameraPoint) {
                if (target.transform.position.x < gMoveCameraScope[0]) {
                    target.transform.position = new Laya.Vector3(gMoveCameraScope[0], posTarget.y, posTarget.z);
                }
                if (target.transform.position.x > gMoveCameraScope[1]) {
                    target.transform.position = new Laya.Vector3(gMoveCameraScope[1], posTarget.y, posTarget.z);
                }
            } else {
                if (target.transform.position.x < gMoveScope[0]) {
                    target.transform.position = new Laya.Vector3(gMoveScope[0], posTarget.y, posTarget.z);
                }
                if (target.transform.position.x > gMoveScope[1]) {
                    target.transform.position = new Laya.Vector3(gMoveScope[1], posTarget.y, posTarget.z);
                }
            }
        }
        private stageUp(e: Laya.Event): void {
            this.mouseX = null;
        }
        actionStop(): void {
            this.mouseX = null;
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.stageMove);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.stageUp);
            Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.stageUp);
        }
    }

    export class Run implements stateBase {
        static ins: Run;
        constructor() {
            Run.ins = this;
        }
        action(): void {
            Role.ins.playAniRole(GameEnum.RoleAni.run);
        }
    }
    export class Slope implements stateBase {
        static ins: Slope;
        constructor() {
            Slope.ins = this;
        }
        /*
         * 斜坡飞起的高度
         */
        high: number = 20;
        /**
         * 斜坡的长度，可以根据几个角度判断几个固定的斜坡长度
         */
        moveLen: number = 70;
        action(args: any[], cuntinueCb: Function): void {
            const time1 = 150;
            const time2 = 500;
            cuntinueCb && cuntinueCb();
            LwgAni3D.moveToY(Role.ins.role, this.high, time1, this, Laya.Ease.quadOut, () => {
                LwgAni3D.moveToY(Role.ins.role, 0, time2, this, Laya.Ease.quadIn, () => { });
            });
            LwgAni3D.moveZ(Role.ins.role, this.moveLen, time1 + time2, this);

            const cameraDiffY = Role.ins.cameraPoint.transform.position.y - Role.ins.role.transform.position.y;
            LwgAni3D.moveToY(Role.ins.cameraPoint, this.high + cameraDiffY, time1, this, Laya.Ease.quadOut, () => {
                LwgAni3D.moveToY(Role.ins.cameraPoint, cameraDiffY, time2, this, Laya.Ease.quadIn, () => { });
            });
            LwgAni3D.moveZ(Role.ins.cameraPoint, this.moveLen, time1 + time2, this);
        }
    }

    export class Drop implements stateBase {
        static ins: Drop;
        constructor() {
            Drop.ins = this;
        }
        cameraPointPos: Laya.Vector3;
        rolePos: Laya.Vector3;
        action(ags: any[] = [], cuntinueCb: Function, defeatedCb: Function): void {
            if (MoveForward.ins.isSprint) {
                cuntinueCb && cuntinueCb();
                return;
            }
            this.cameraPointPos = Role.ins.cameraPoint.transform.position.clone();
            this.rolePos = Role.ins.role.transform.position.clone();
            const time = 1000;
            LwgAni3D.moveZ(Role.ins.role, 30, time, this, null, () => {
                defeatedCb && defeatedCb(GameEnum.ResurgenceType.drop);
            })
            LwgAni3D.moveZ(Role.ins.cameraPoint, 30, time, this)
            LwgAni3D.moveY(Role.ins.role, -30, time, this)
        }

    }

    export class Diamond implements stateBase {
        static ins: Diamond;
        constructor() {
            Diamond.ins = this;
        }
        addNum = 5;
        sumNum = 0;
        reset(): void {
            this.sumNum = 0;
        }
        action(args: any[] = [], continueCb: Function): void {
        }
    }

    export class Wall implements stateBase {
        static ins: Wall;
        constructor() {
            Wall.ins = this;
        }
        reset(): void {
            this.isInvincible = false;
        }
        /**
         * 无敌状态
         */
        isInvincible: boolean;
        /**
         * 无敌时间
         */
        invincibleTime: number = 3000;
        invincibleCaller = {};
        public get subBubbleNum(): number {
            return GameData.Level.mode === GameEnum.LevelMode.common ? 10 : 25;
        }
        action(args: any = [], cuntinueCb: Function, defeatedCb: Function): void {
            MoveForward.ins.stopBubble();
            if (this.isInvincible || Resurgence.ins.isResurgence || MoveForward.ins.isSprint) {
                cuntinueCb && cuntinueCb();
                return;
            }
            LwgPlatform.System.shakeShort();
            Bubble.ins.rainbowEnergyNum -= this.subBubbleNum;
            GameData.Sound.playSoundByID(15);
            const posZ = -10;
            const high = Role.ins.role.transform.position.y;
            const time = 200 + high * 50;
            Role.ins.playAniRole(GameEnum.RoleAni.fall);
            LwgAni3D.moveZ(Role.ins.role, posZ, time, this, Laya.Ease.quadOut, () => {
                if (Bubble.ins.rainbowEnergyNum < 0) {
                    defeatedCb && defeatedCb();
                    GameData.Sound.playSoundByID(18);
                } else {
                    Laya.timer.once(1500, this, () => {
                        cuntinueCb && cuntinueCb();
                    })
                    this.isInvincible = true;
                    Laya.timer.once(this.invincibleTime, this.invincibleCaller, () => {
                        this.isInvincible = false;
                    })
                }
            })
            LwgAni3D.moveZ(Role.ins.cameraPoint, posZ, time, this);

            LwgAni3D.moveY(Role.ins.role, -high, time, this);
            LwgAni3D.moveY(Role.ins.cameraPoint, -high, time, this);
        }
    }

    export class Bubble implements stateBase {
        static ins: Bubble;
        constructor() {
            Bubble.ins = this;
        }

        addNum = 1;
        subNum = -2;
        private _rainbowEnergyNum = 0;
        get rainbowEnergyNum(): number {
            return this._rainbowEnergyNum;
        }
        /**
         * 彩虹蓄力值
         */
        set rainbowEnergyNum(val: number) {
            const num = val - this._rainbowEnergyNum;
            if (val >= this.rainbowEnergyMaxNum) {
                val = this.rainbowEnergyMaxNum;
            }
            if (val < -5) {
                val = -5;
            }
            this._rainbowEnergyNum = val;
            LwgEvent.notify(GameEvent.bubblesNum, [this._rainbowEnergyNum, num, this.rainbowEnergyNum / this.rainbowEnergyMaxNum]);
        }
        /**
         * 达到这个值出现彩虹套装
         */
        rainbowEnergyMaxNum = 50;
        rainbowCaller = {};
        errorCaller = {};
        isDestination = false;
        diamondSumNum = 0;
        reset(): void {
            this.rainbowEnergyNum = Math.round(this.rainbowEnergyMaxNum * GameData.Skill.getSkillAdditionByType(GameEnum.SkillType.energy));
            this.diamondSumNum = 0;
        }
        action(args: any = [], continueCb: Function, defeatedCb: Function): void {
            const bubble = args[0] as GameType.BubbleSp3D as GameType.BubbleSp3D;
            LwgPlatform.System.shakeShort();
            if (this.isDestination) {
                LwgTools.D3.playAnimator(bubble, GameEnum.BubbleAni.retract);
                Effect3D.ins.play_zuanshi(bubble.transform.position);
                this.diamondSumNum++;
                const point = LwgTools.D3.getPosToScreen(bubble.transform.position, Role.ins.camera);
                point.y -= 150;
                LwgCurrency.Diamond.playGetHeapAni(null, 1, [49, 45], 'Game/UI/img_icon_money_01.png', new Laya.Point(point.x, point.y), new Laya.Point(65, 70), null, () => {
                    LwgEvent.notify(GameEvent.updateDiamond, [this.diamondSumNum]);
                }, false);
                GameData.Sound.playSoundByID(6);
                const bubbleParent = bubble.parent as Laya.Sprite3D;
                let rubin: Laya.Sprite3D;
                if (bubble.name === "paopao01") {
                    rubin = bubbleParent.getChildByName("rubin (1)") as Laya.Sprite3D;

                } else if (bubble.name === "paopao01 (1)") {
                    rubin = bubbleParent.getChildByName("rubin") as Laya.Sprite3D;

                } else if (bubble.name === "paopao01 (2)") {
                    rubin = bubbleParent.getChildByName("rubin (2)") as Laya.Sprite3D;
                }
                Effect3D.ins.play_zuanshi(rubin.transform.position.clone());
                rubin && rubin.destroy(true);
            } else {
                let cbArgs = [];
                let high = 0.2;

                var right = () => {
                    this.rainbowEnergyNum += this.addNum;
                    LwgTools.D3.playAnimator(bubble, GameEnum.BubbleAni.retract);
                    cbArgs = [GameEnum.MoveForwardArgs.rightBubble];
                    Effect3D.ins.play_Right(bubble.transform.position);
                    continueCb && continueCb(cbArgs);
                }
                if (bubble.colorIndex === Role.ins.colorIndex) {
                    right();
                } else {
                    LwgTools.D3.playAnimator(bubble, GameEnum.BubbleAni.ball);

                    if (MoveForward.ins.isSprint) {
                        right();
                    } else if (Wall.ins.isInvincible || Resurgence.ins.isResurgence) {
                        cbArgs = [GameEnum.MoveForwardArgs.errorBubble];
                        GameData.Sound.playSoundByID(21);
                        continueCb && continueCb(cbArgs);

                    } else {
                        this.rainbowEnergyNum += this.subNum;
                        if (this.rainbowEnergyNum < 0) {
                            MoveForward.ins.stopBubble();
                            Role.ins.playAniRole(GameEnum.RoleAni.fall);
                            defeatedCb && defeatedCb();
                            return;
                        } else {
                            cbArgs = [GameEnum.MoveForwardArgs.errorBubble];
                            GameData.Sound.playSoundByID(21);
                            continueCb && continueCb(cbArgs);
                        }
                    }
                }
                const time = 50;
                Laya.timer.once(time, this.errorCaller, () => {
                    LwgAni3D.moveY(Role.ins.role, high, time, this.errorCaller, null, () => {
                        LwgAni3D.moveToY(Role.ins.role, 0, time, this.errorCaller);
                    })
                })
                Role.ins.playAniRole(GameEnum.RoleAni.slide);
            }
        }
    }

    export class Door implements stateBase {
        static ins: Door;
        constructor() {
            Door.ins = this;
        }
        colorIndex: number;
        action(args: any[] = [], cuntinueCb: Function): void {
            const door = args[0] as Laya.Sprite3D;
            this.colorIndex = + door.name.substr(13, 1);
            LwgPlatform.System.shakeShort();
            GameData.Sound.playSoundByID(16);
            if (!MoveForward.ins.isSprint) {
                this.changeColor();
            }
            cuntinueCb && cuntinueCb();
        }
        changeColor(): void {
            Role.ins.changeColor(this.colorIndex);
            Role.ins.changeTravel(this.colorIndex);
            Effect3D.ins.play_Change(Role.ins.role.transform.position.clone(), this.colorIndex, Role.ins.role);
        }

    }

    export class KeyFood implements stateBase {
        static ins: KeyFood;
        constructor() {
            KeyFood.ins = this;
        }
        action(args: any[] = [], continueCb: Function): void {
            continueCb && continueCb();
            const key = (args[0] as Laya.Sprite3D).parent as Laya.Sprite3D;
            key.removeSelf();
            LwgEvent.notify(GameEvent.pickedKey);
            GameData.Sound.playSoundByID(10);
            Effect3D.ins.play_zuanshi(Role.ins.role.transform.position.clone());
        }
    }

    export class Destination implements stateBase {
        static ins: Destination;
        constructor() {
            Destination.ins = this;
        }
        fCameraFP: Laya.Vector3;
        fCameraFR: Laya.Vector3;
        boss: Laya.Sprite3D;

        reset(): void {
            Bubble.ins.isDestination = false;
        }

        action(args: any[] = [], continueCb: Function): void {
            Laya.timer.once(200, this, () => {
                Role.ins.changeColor(4);
                Role.ins.changeTravel(4);
            })
            const chongci = GameRes.Prefab3D.effect_chongci.instance.clone() as Laya.Sprite3D;
            Role.ins.skin.addChild(chongci);
            Bubble.ins.isDestination = true;
            let steps = 25;
            let num = Math.round(Bubble.ins.rainbowEnergyNum / (Bubble.ins.rainbowEnergyMaxNum / steps));
            // let num = 25;
            // console.log('剩余蓄气值', num);
            const roadLen = num == 0 ? 30 : 38;
            const high = 3 * (num - 1);
            const len = 8 * num;
            const speedBase = (MoveForward.ins.speed * 60) * 2;
            const time1 = 1000 * roadLen / speedBase;
            const time2 = 1000 * Math.sqrt(len * len + high * high) / speedBase;

            var end = () => {
                continueCb();
                chongci.destroy();
                Role.ins.changeTravel(0);
            }

            LwgEvent.notify(GameEvent.reduceStorage, [time1, time2 + 100]);
            LwgAni3D.moveZ(Role.ins.role, roadLen, time1, this, null, () => {
                if (num === 0) {
                    end();
                } else {
                    LwgAni3D.moveY(Role.ins.role, high, time2, this, null, () => {
                        if (num >= steps) {
                            MoveCrosswise.ins.isDestination = true;
                            // console.log('到达最高点');
                            const len997 = 65;
                            const time3 = 1000 * len997 / speedBase;
                            LwgAni3D.moveZ(Role.ins.role, len997, time3, this, null, () => {
                                end();
                            })
                            LwgAni3D.moveToX(Role.ins.role, 0, time3 / 2, this);
                            LwgAni3D.moveZ(Role.ins.cameraPoint, len997, time3, this);
                            LwgAni3D.moveZ(Role.ins.cameraPoint, len997, time3, this);
                            LwgAni3D.moveToX(Role.ins.cameraPoint, 0, time3 / 2, this);
                        } else {
                            end();
                        }
                    })
                    LwgAni3D.moveZ(Role.ins.role, len, time2, this);
                    LwgAni3D.moveY(Role.ins.cameraPoint, high, time2, this);
                    LwgAni3D.moveZ(Role.ins.cameraPoint, len, time2, this);
                }
            })
            LwgAni3D.moveZ(Role.ins.cameraPoint, roadLen, time1, this);
        }
    }

    export class Victory implements stateBase {
        static ins: Victory;
        constructor() {
            Victory.ins = this;
        }
        action(): void {
            Laya.timer.once(1500, this, () => {
                LwgEvent.notify(GameEvent.victory);
            })
        }
    }

    export class Dance implements stateBase {
        static ins: Dance;
        constructor() {
            Dance.ins = this;
        }
        action(args: any[], continueCb: Function): void {
            LwgEvent.notify(GameEvent.hideStorage);
            MoveCrosswise.ins.isDestination = true;
            const time1 = 300;
            const time2 = 1000;
            GameData.Sound.playSoundByID(17);
            Role.ins.playAniCrossFade(GameEnum.RoleAni.dance);
            LwgAni3D.rotateTo(Role.ins.role, new Laya.Vector3(0, -180, 0), time1, this);
            LwgAni3D.moveY(Role.ins.cameraPoint, -7, time2, this);
            LwgAni3D.rotateTo(Role.ins.cameraPoint, new Laya.Vector3(-12, -20, 5), time2, this);
            LwgAni3D.moveZ(Role.ins.cameraPoint, 11, time2, this);
            Laya.timer.once(1500, this, () => {
                continueCb && continueCb();
            })
        }
    }

    export class Resurgence implements stateBase {
        static ins: Resurgence;
        constructor() {
            Resurgence.ins = this;
        }
        reset(): void {
            this.isResurgence = false;
        }
        /**
         * 是否在复活状态中
         */
        isResurgence = false;
        resurgenceCaller = {};
        action(args: any[], cuntinueCb: Function): void {
            // console.log('复活参数', args[0]);
            Bubble.ins.rainbowEnergyNum = 0;
            if (args[0] == GameEnum.ResurgenceType.drop) {
                Role.ins.role.transform.position = new Laya.Vector3(Drop.ins.rolePos.x, Drop.ins.rolePos.y, Drop.ins.rolePos.z + 50);
                Role.ins.cameraPoint.transform.position = new Laya.Vector3(Drop.ins.cameraPointPos.x, Drop.ins.cameraPointPos.y, Drop.ins.cameraPointPos.z + 50);
            }
            cuntinueCb && cuntinueCb();
            this.isResurgence = true;
            Laya.timer.once(3000, this.resurgenceCaller, () => {
                this.isResurgence = false;
                Defeated.ins.isDefeated = false;
            })
        }
    }

    /**
     * 失败
     */
    export class Defeated implements stateBase {
        static ins: Defeated;
        constructor() {
            Defeated.ins = this;
        }
        isDefeated: boolean;
        reset(): void {
            this.isDefeated = false;
        }
        action(args: any[]): void {
            if (this.isDefeated) {
                return;
            }
            this.isDefeated = true;
            Laya.timer.once(1000, this, () => {
                LwgEvent.notify(GameEvent.Resurgence, [args[0]]);
            })
        }
    }
}
