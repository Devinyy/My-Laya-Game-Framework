import { LwgTools } from "../../Lwg/Lwg";
import { GameData } from "../Control/GameData";
import { GameEnum } from "../Control/GameEnum";
import { GameRes } from "../Control/GameRes";
import { GameType } from "../Control/GameType";

export class SkinBase {

    skin: Laya.Sprite3D;
    init(): void {
        for (let index = 0; index < this.skin.numChildren; index++) {
            const part = this.skin.getChildAt(index) as Laya.SkinnedMeshSprite3D;
            if (part.name.substr(0, 5) === 'Dress') {
                if (part.name === GameData.Skin.pitchDressName) {
                    part.active = true;
                } else {
                    part.active = false;
                }
                part.skinnedMeshRenderer.material = GameRes.Material.dress01.instance;
            }
        }
        const hairParent = LwgTools.Node.findChild3D(this.skin, 'mixamorig:HeadTop_End');
        for (let index = 0; index < hairParent.numChildren; index++) {
            const part = hairParent.getChildAt(index) as Laya.MeshSprite3D;
            if (part.name === GameData.Skin.pitchHairName) {
                part.active = true;
            } else {
                part.active = false;
            }
        }

        const wingPoint = LwgTools.Node.findChild3D(this.skin, 'WingPoint');
        for (let index = 0; index < wingPoint.numChildren; index++) {
            const part = wingPoint.getChildAt(index) as Laya.MeshSprite3D;
            if (part.name === GameData.Skin.pitchWingName) {
                part.active = true;
            } else {
                part.active = false;
            }
        }
        const TravelPointL = LwgTools.Node.findChild3D(this.skin, 'TravelPointL');
        TravelPointL.active = false;
        const TravelPointR = LwgTools.Node.findChild3D(this.skin, 'TravelPointR');
        TravelPointR.active = false;
    }

    changePart(id: number): void {
        let parent: Laya.Sprite3D;
        const partData = GameData.Skin.getObjByID(id) as GameType.SkinData;
        if (!partData) {
            console.log('没有', id, '的皮肤信息');
            return;
        }
        if (partData.part === GameEnum.Part.dress) {
            parent = this.skin;
        } else if (partData.part === GameEnum.Part.hair) {
            parent = LwgTools.Node.findChild3D(this.skin, 'mixamorig:HeadTop_End');
        } else if (partData.part === GameEnum.Part.wing) {
            parent = LwgTools.Node.findChild3D(this.skin, 'WingPoint');
        }
        if (parent === this.skin) {
            for (let index = 0; index < parent.numChildren; index++) {
                const part = parent.getChildAt(index) as Laya.MeshSprite3D;
                if (parent === this.skin && part.name.substr(0, 5) === 'Dress') {
                    if (part.name === partData.name) {
                        part.active = true;
                    } else {
                        part.active = false;
                    }
                }
            }
        } else {
            for (let index = 0; index < parent.numChildren; index++) {
                const part = parent.getChildAt(index) as Laya.MeshSprite3D;
                if (part.name === partData.name) {
                    part.active = true;
                } else {
                    part.active = false;
                }
            }
        }
    }
}