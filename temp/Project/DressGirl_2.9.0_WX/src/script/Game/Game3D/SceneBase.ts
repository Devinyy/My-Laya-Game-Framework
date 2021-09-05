import { LwgAni3D, LwgControl, LwgEvent, LwgGuide, LwgTools } from "../../Lwg/Lwg";
import { GameData } from "../Control/GameData";
import { GameEnum } from "../Control/GameEnum";
import { GameEvent } from "../Control/GameEvent";
import { GameRes } from "../Control/GameRes";
import { GameType } from "../Control/GameType";

export class SceneBase {
    constructor(scene: Laya.Scene3D) {
        this.scene = scene;
        Laya.stage.addChild(this.scene);

        this.camaraPoint = this.scene.getChildByName('CameraPoint') as Laya.Sprite3D;
        this.mainCamara = this.camaraPoint.getChildByName('Main Camera') as Laya.Camera;
        if (Laya.Browser.pixelRatio >= 16 / 9) {
            this.mainCamara.fieldOfView += 5;
        }
        const mainCamaraP = this.mainCamara.transform.position;
        this.mainCamaraFP = new Laya.Vector3(mainCamaraP.x, mainCamaraP.y, mainCamaraP.z);

        this.directionalLight = this.camaraPoint.getChildByName('Directional Light') as Laya.DirectionLight;
        // LwgTools.D3.setLightShadow(this.directionalLight);

        // this.road888 = this.scene.getChildByName('Road_888') as Laya.Sprite3D;

        this.roadParent = new Laya.Sprite3D;
        this.roadParent.name = 'roadParent';
        this.scene.addChild(this.roadParent);

        this.marginParent = new Laya.Sprite3D;
        this.marginParent.name = 'marginParent';
        this.scene.addChild(this.marginParent);
    }
    scene: Laya.Scene3D;

    camaraPoint: Laya.Sprite3D;
    mainCamara: Laya.Camera;
    mainCamaraFP: Laya.Vector3;

    directionalLight: Laya.DirectionLight;

    roadParent: Laya.Sprite3D;

    marginParent: Laya.Sprite3D;

    // road888: Laya.Sprite3D;

    roadIndex: number;
    endRoad: GameType.RoadSp3D;
    roadAddTime = 200;
    roadDestoryDistance = 80;
    marginIndex: number;
    endMargin: Laya.Sprite3D;

    roadDataArr: GameType.RoadData[] = [];
    redBase = [1, 0.45, 0.35];
    yellowBase = [1, 0.70, 0.17];
    blueBase = [0.3, 0.6, 1];
    redCount: number = 0;
    yellowCount: number = 0;
    blueCount: number = 0;
    public get endRoadData(): GameType.RoadData {
        return this._endRoadData;
    }
    public set endRoadData(val: GameType.RoadData) {
        this.redCount = 0;
        this.yellowCount = 0;
        this.blueCount = 0;
        this._endRoadData = val;
    }
    private _endRoadData: GameType.RoadData;

    roleType: GameEnum.RoleType;
    /**
     * 当前路段里程，用于建造路段,为了优化计算
     */
    mileageRoad: number = 0;
    heightRoad: number = 0;
    /**
     * 总里程
     */
    mileageTotal: number = 0;
    private _mileageCur: number = 0;
    /**
     * 当前里程
     */
    get mileageCur(): number {
        return this._mileageCur;
    }
    set mileageCur(val: number) {
        this._mileageCur = val;
        //普通模式会有里程上限
        if (GameData.Level.mode === GameEnum.LevelMode.common) {
            if (this._mileageCur > this.mileageTotal) {
                this._mileageCur = this.mileageTotal;
            }
        }
        LwgEvent.notify(GameEvent.updateLvSchedule, [this._mileageCur / this.mileageTotal, this._mileageCur]);
    }

    /**
     * 当前的颜色值
     */
    colorIndex: number;

    showbase(): void {
        Laya.timer.clearAll(this);
        this.mileageRoad = 0;
        this.heightRoad = 0;
        this.mileageTotal = 0;
        this.mileageCur = 0;
        // this.road888.active = true;
        this.roadIndex = 0;
        this.marginIndex = -2;
        this.colorIndex = 1;
        this.start();
        this.RoadAdd();
        this.RoadDestory();
        LwgEvent.register(GameEvent.addMileageCur, this, (num: number) => {
            this.mileageCur += num;
        })
    }
    start(): void {
        LwgTools.Node.destroyAllChildren(this.marginParent);
        LwgTools.Node.destroyAllChildren(this.roadParent);
        for (let i = 0; i < 4; i++) {
            this.createRoad();
        }
        this.createMargin();
    }
    createMargin(): void {
        if (GameData.Level.mode === GameEnum.LevelMode.common) {
            this.endMargin = GameRes.Prefab3D.marginC.instance.clone() as Laya.Sprite3D;
        } else {
            this.endMargin = GameRes.Prefab3D.marginE.instance.clone() as Laya.Sprite3D;
        }
        this.marginParent.addChild(this.endMargin);
        this.endMargin.transform.position = new Laya.Vector3(0, 0, this.marginIndex * 200);
        this.marginIndex++;
    }

    setEndData(): void {
        this.endRoadData = this.roadDataArr[this.roadIndex];
    }
    createRoad(): boolean {
        this.setEndData();
        if (!this.endRoadData) {
            // 后面无路段!;
            return;
        }
        var add = () => {
            this.roadParent.addChild(this.endRoad);
            this.endRoad.transform.position = new Laya.Vector3(0, this.heightRoad, this.mileageRoad);
            this.mileageRoad += this.endRoadData.length;
            this.heightRoad += this.endRoadData.height;
            this.endRoad.heightRoad = this.heightRoad;
            this.roadIndex++;
        }

        if (this.endRoadData.name === 'Road_999' || this.endRoadData.name === 'Road_888' || this.endRoadData.name === 'Road_997') {
            this.endRoad = GameRes.Prefab3D[this.endRoadData.name].instance.clone() as Laya.Sprite3D;
            if (this.endRoadData.name === 'Road_888') {
                this.changeRodeColor(this.endRoad);
            }
            add();
        } else {
            const childDataArr = GameData.RoadsMsg.getChildDataArrByRoadName(this.endRoadData.name);
            if (childDataArr) {
                this.endRoad = new Laya.Sprite3D();
                this.endRoad.name = this.endRoadData.name;
                add();
                for (let index = 0; index < childDataArr.length; index++) {
                    const childData = childDataArr[index];
                    let res: Laya.Sprite3D = this.resCorresponding(childData.name);
                    if (!res) {
                        console.log(this.endRoadData.name, '不存在资源:', childData.name);
                        return false;
                    }
                    let child = res.clone() as Laya.MeshSprite3D;
                    this.endRoad.addChild(child);
                    child.transform.localPosition = new Laya.Vector3(childData.data.localPositionX, childData.data.localPositionY, childData.data.localPositionZ);
                    child.transform.localScale = new Laya.Vector3(childData.data.localScaleX, childData.data.localScaleY, childData.data.localScaleZ);
                    child.transform.localRotationEuler = new Laya.Vector3(childData.data.localRotationEulerX, childData.data.localRotationEulerY, childData.data.localRotationEulerZ);
                    child.active = childData.active;
                    if (child.name.substr(0, 7) === 'KeyFood') {
                        child.transform.localPositionY += 2;
                    }
                    this.changeRodeColor(child);
                    this.changeDoorColor(child);
                }
                this.setBubbleColorIndex();
                for (let j = 0; j < this.endRoad.numChildren; j++) {
                    const element = this.endRoad.getChildAt(j) as Laya.Sprite3D;
                    this.changeColor(element);
                }

            } else {
                console.log(this.endRoadData.name, '没有数据', this.endRoadData, '索引值：', this.roadIndex);
                Laya.timer.clearAll(this);
                return false;
            }
        }
        return true;
    }
    resCorresponding(name: string): Laya.Sprite3D {
        let res: Laya.Sprite3D;
        if (name.substr(0, 6) === 'paopao') {
            const name0 = name.substr(0, 8);
            res = GameRes.Prefab3D[name0].instance;
            const index = name.substr(7, 1);
            // console.log(index);
            this.endRoadData['index' + index] = 1;
        }
        else if (name.substr(0, 11) === 'ZhangaiBian') {
            const name0 = name.substr(0, 14);
            if (GameData.Level.mode === GameEnum.LevelMode.common) {
                this.colorIndex = +name.substr(13, 1);
            } else {
                this.colorIndex = Math.floor(Math.random() * 3) + 1;
            }
            res = GameRes.Prefab3D[name0].instance;
            // console.log(name0, '索引值更换', this.colorIndex);
        }
        else if (name.substr(0, 8) === 'RoadTied') {
            res = GameRes.Prefab3D.RoadTied.instance;
        }
        else if (name.substr(0, 9) === 'Road_Base') {
            res = GameRes.Prefab3D.Road_Base.instance;
        }
        else if (name.substr(0, 7) === 'KeyFood') {
            res = GameRes.Prefab3D.KeyFood.instance;
        }
        else if (name.substr(0, 13) === 'zhangai_xiepo') {
            res = GameRes.Prefab3D.zhangai_xiepo.instance;
        }
        else if (name.substr(0, 8) === 'zhangai0') {
            const index = +name.substr(8, 1);
            res = GameRes.Prefab3D[`zhangai0${index}`].instance;
        }
        else if (name.substr(0, 4) === 'drop') {
            res = GameRes.Prefab3D.drop.instance;
        }
        return res;
    }

    /**
     * 确定每组的索引值
     */
    setBubbleColorIndex(): void {
        const colorArr = this.endRoadData.color.split('_');
        //确定组数
        let group = 0;
        if (this.endRoadData.index1 && this.endRoadData.index2 && this.endRoadData.index3) {
            group = 3;
        } else if (this.endRoadData.index1 && this.endRoadData.index2) {
            group = 2;
        } else if (this.endRoadData.index1) {
            group = 1;
        }
        // console.log('当前组数', group);
        //如果是color是随机，其中一个锁定，其他随机
        if (colorArr.length === 1) {
            if (group > 1) {
                const ran = Math.floor(Math.random() * group) + 1;
                this.endRoadData['index' + ran] = this.colorIndex;
                for (let i = 0; i < 3; i++) {
                    if (i !== ran) {
                        this.endRoadData['index' + i] = Math.floor(Math.random() * 3) + 1;
                    }
                }
            } else {
                // console.log(this.endRoadData.name, '唯一索引值1:', this.endRoadData.index1);
                this.endRoadData.index1 = this.colorIndex;
            }

        } else {
            for (let i = 0; i < colorArr.length; i++) {
                const index = + colorArr[i];
                if (index === 0) {
                    this.endRoadData[`index${i + 1}`] = Math.floor(Math.random() * 3) + 1;
                    // console.log(this.endRoadData.name, `随机索引值${index + 1}:`, this.endRoadData[`index${i + 1}`]);
                } else {
                    this.endRoadData[`index${i + 1}`] = index;
                    // console.log(this.endRoadData.name, `读取索引值${index + 1}:`, this.endRoadData[`index${i + 1}`]);
                }
            }
        }
    }

    changeColor(bubble: GameType.BubbleSp3D): void {
        if (bubble.name.substr(0, 6) === 'paopao') {
            const group = +bubble.name.substr(7, 1);
            const index0 = this.endRoadData[`index${group}`];

            if (!GameRes.Material[`bubble0${index0}`]) {
                console.log('不存在资源', `bubble0${index0}`);
            } else {
                // console.log(group, index0);
                const bubble01 = bubble.getChildByName('pao01') as Laya.MeshSprite3D;
                const bubble02 = bubble.getChildByName('pao02') as Laya.MeshSprite3D;
                const mat = GameRes.Material['bubble0' + index0].instance as Laya.UnlitMaterial;
                bubble.colorIndex = index0;
                const coe1 = 0.05;
                const coe2 = 0.05;
                const coe3 = 0.02;
                var gradualChange = (arr: any[]) => {
                    // const locZ = bubble.transform.localPositionZ;
                    // if (locZ >= 40 / 5 * 4) {
                    //     mat.albedoColor = new Laya.Vector4(arr[0] - coe1 * 4, arr[1] - coe2 * 4, arr[2] - coe3 * 4, 1);
                    // } else if (locZ >= 40 / 5 * 3) {
                    //     mat.albedoColor = new Laya.Vector4(arr[0] - coe1 * 3, arr[1] - coe2 * 3, arr[2] - coe3 * 3, 1);
                    // } else if (locZ >= 40 / 5 * 2) {
                    //     mat.albedoColor = new Laya.Vector4(arr[0] - coe1 * 2, arr[1] - coe2 * 2, arr[2] - coe3 * 2, 1);
                    // } else if (locZ >= 40 / 5 * 1) {
                    //     mat.albedoColor = new Laya.Vector4(arr[0] - coe1 * 1, arr[1] - coe2 * 1, arr[2] - coe3 * 1, 1);
                    // } else if (locZ >= 40 / 5 * 0) {
                    //     mat.albedoColor = new Laya.Vector4(arr[0], arr[1], arr[2], 1);
                    // }
                }
                if (index0 === 1) {
                    gradualChange(this.redBase);
                } else if (index0 === 2) {
                    gradualChange(this.yellowBase);
                } else if (index0 === 3) {
                    gradualChange(this.blueBase);
                }
                bubble02.meshRenderer.material = bubble01.meshRenderer.material = mat;
            }
        }
    };

    changeRodeColor(roadBase: Laya.Sprite3D): void {
        if (roadBase.name.substr(0, 9) === 'Road_Base' || roadBase.name.substr(0, 9) === 'Road_888') {
            if (GameData.Level.mode === GameEnum.LevelMode.endless) {
                const base01 = roadBase.getChildByName('road_base_01') as Laya.MeshSprite3D;
                if (base01) {
                    const mat = base01.meshRenderer.material as Laya.UnlitMaterial;
                    mat.albedoColor = new Laya.Vector4(0.3, 0.18, 0.92, 1);
                }
            }
        }
    }

    changeDoorColor(door: Laya.Sprite3D): void {
        if (door['alreadyChange'] || GameData.Level.mode === GameEnum.LevelMode.common) {
            return;
        }
        if (door.name.substr(0, 11) === 'ZhangaiBian') {
            const position = door.transform.position.clone();
            const parent = door.parent;
            let newDoor: Laya.Sprite3D;
            const res = GameRes.Prefab3D['ZhangaiBian_0' + this.colorIndex];
            if (!res) {
                // console.log('不存在门', this.colorIndex);
            } else {
                newDoor = res.instance.clone() as Laya.Sprite3D;
                newDoor['alreadyChange'] = true;
                parent.addChild(newDoor);
                newDoor.transform.position = position;
                door.active = false;
                // console.log('随机门为：', this.colorIndex);
            }
        }
    }

    RoadAdd(): void {
        Laya.timer.frameLoop(1, this, () => {
            if (this.endRoad && this.endRoad.transform) {
                if (this.endRoad.transform.position.z - this.camaraPoint.transform.position.z < 100) {
                    if (this.createRoad()) {
                        if (this.roadIndex > 3) {
                            const originalPos = this.endRoad.transform.position.clone() as Laya.Vector3;
                            this.endRoad.transform.localPositionY = originalPos.y - 20;
                            LwgAni3D.moveToY(this.endRoad, originalPos.y + 3, this.roadAddTime, this, null, () => {
                                LwgAni3D.moveToY(this.endRoad, originalPos.y, this.roadAddTime / 2, this, null, () => {
                                })
                            })
                        }
                    }
                }
            }
            let dis = 0;
            if (GameData.Level.mode === GameEnum.LevelMode.endless) {
                dis = 0;
            }
            if (this.endMargin && this.endMargin.transform) {
                if (this.camaraPoint.transform.position.z - this.endMargin.transform.position.z > dis) {
                    this.createMargin();
                    // console.log('增加两边');
                }
            }
        })
    }
    RoadDestory(): void {
        Laya.timer.frameLoop(10, this, () => {
            if (this.roadIndex > 2) {
                for (let i = 0; i < this.roadParent.numChildren; i++) {
                    const Road = this.roadParent.getChildAt(i) as Laya.Sprite3D;
                    if (Road.name !== 'Road_999' && Road.name !== 'Road_997') {
                        if (this.camaraPoint.transform.localPositionZ - Road.transform.position.z > this.roadDestoryDistance) {
                            Road.destroy(true);
                            // console.log('销毁路段！剩余路段数量', this.roadParent.numChildren);
                        }
                    }
                }
            }
            if (this.marginIndex > 2) {
                if (this.marginParent.numChildren > 1) {
                    for (let j = 0; j < this.marginParent.numChildren; j++) {
                        const margin = this.marginParent.getChildAt(j) as Laya.Sprite3D;
                        if (this.camaraPoint.transform.localPositionZ - margin.transform.position.z > 200) {
                            margin.destroy(true);
                            // console.log('销毁两边！剩余两边数量', this.marginParent.numChildren);
                        }
                    }
                }
            }
        })
    }

    hideBase(): void {
        LwgEvent.offAllCaller(this);
        Laya.timer.clearAll(this);
        LwgTools.Node.destroyAllChildren(this.marginParent);
        LwgTools.Node.destroyAllChildren(this.roadParent);
    }
}