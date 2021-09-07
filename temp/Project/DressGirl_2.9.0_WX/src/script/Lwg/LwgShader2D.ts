
export module LwgShader2D {

    interface ICustomShader {
        vs: string;
        ps: string;
        mainId: number;
    }
    export class CustomShader {

        private static mainId: number = Laya.ShaderDefines2D.MVP3D + 1;

        private static readonly registeredShder: Map<string, ICustomShader> = new Map();

        public static readonly registedIdArr: number[] = [];

        /**
         * 是否已经实现2dShader
         */
        private static inited: boolean = false;

        static getId(): number {
            return ++CustomShader.mainId;
        }

        /**
         * 修改自定义2DShader的部分流程
         * 在Laya.init之前调用
         */
        static realizeShader() {
            if (CustomShader.inited) return;
            CustomShader.inited = true;

            //首先注册2d贴图定义ID
            Laya.ShaderDefines2D["CUSTOMTEXTURE2D"] = 0x60;
            Laya.ShaderDefines2D.reg("CUSTOMTEXTURE2D", 0x60);
            //添加自定义绘制贴图提交的ID
            Laya.SubmitBase["KEY_CUSTOM_DRAWTEXTURE"] = 5;
            //初始化并注册自定义shaderValue类
            Laya.Value2D._initone(Custom2DSV.CUSTOMSHADER2D, Custom2DSV);
            //覆盖RenderSprite的自定义渲染函数
            Laya.RenderSprite.prototype["_custom"] = function (sprite: Laya.Sprite, context: Laya.Context, x: number, y: number) {
                var tex = sprite.texture;
                if (tex["_getSource"]()) {
                    sprite.customRender(context, x, y);
                }
                var next = this._next;
                if (next != Laya.RenderSprite["NORENDER"]) {
                    next._fun.call(next, sprite, context, x, y);
                }
            }
            //自定义渲染函数
            Laya.Context.prototype["customDrawMesh"] = function (mainId: number, tex: Laya.Texture, x: number, y: number, width: number, height: number) {
                var preKey = this._curSubmit._key;
                var uv = tex["_uv"];
                var lastRender = false;
                var m = null;
                var imgid = tex.bitmap["id"];
                var alpha = 1;

                var mesh: Laya.MeshQuadTexture = this._mesh;
                var submit: Laya.SubmitTexture = this._curSubmit;
                var ops: any[] = lastRender ? this._charSubmitCache.getPos() : this._transedPoints;

                //凡是这个都是在_mesh上操作，不用考虑samekey
                this.transformQuad(x, y, width || tex.width, height || tex.height, this._italicDeg, m || this._curMat, ops);

                if (this.drawTexAlign) {
                    var round: Function = Math.round;
                    ops[0] = round(ops[0]);//  (ops[0] + 0.5) | 0;	// 这么计算负的时候会有问题
                    ops[1] = round(ops[1]);
                    ops[2] = round(ops[2]);
                    ops[3] = round(ops[3]);
                    ops[4] = round(ops[4]);
                    ops[5] = round(ops[5]);
                    ops[6] = round(ops[6]);
                    ops[7] = round(ops[7]);
                    this.drawTexAlign = false;	//一次性的
                }

                var rgba: number = this._mixRGBandAlpha(0xffffffff, this._shader2D.ALPHA * alpha);

                //lastRender = false;
                if (lastRender) {
                    this._charSubmitCache.add(this, tex, imgid, ops, uv, rgba);
                    return true;
                }

                this._drawCount++;

                var sameKey: boolean = imgid >= 0 && preKey.submitType === Laya.SubmitBase["KEY_CUSTOM_DRAWTEXTURE"] && preKey.other === imgid;

                //clipinfo
                sameKey && (sameKey = sameKey && this.isSameClipInfo(submit));

                this._lastTex = tex;

                if (mesh.vertNum + 4 > Laya.Context["_MAXVERTNUM"]) {
                    mesh = this._mesh = Laya.MeshQuadTexture.getAMesh(this.isMain);//创建新的mesh  TODO 如果_mesh不是常见格式，这里就不能这么做了。以后把_mesh单独表示成常用模式 
                    this.meshlist.push(mesh);
                    sameKey = false;	//新的mesh不能算samekey了
                }

                {
                    mesh.addQuad(ops, uv, rgba, true);
                    if (!sameKey) {
                        var customValue = Laya.Value2D.create(Custom2DSV.CUSTOMSHADER2D, 0) as Custom2DSV;
                        //设置shader
                        customValue.setMainId(mainId);
                        this._submits[this._submits._length++] = this._curSubmit = submit = CustomSubmitTexture.create(this, mesh, customValue);
                        submit.shaderValue.textureHost = tex;
                        submit.shaderValue.defines["_value"] = Laya.ShaderDefines2D["CUSTOMTEXTURE2D"];
                        submit["_key"].other = imgid;
                        this._copyClipInfo(submit, this._globalClipMatrix);
                    }
                    submit["_numEle"] += 6;
                    mesh.indexNum += 6;
                    mesh.vertNum += 4;
                    return true;
                }
                return false;
            }
            //覆盖Laya.Context的自定义渲染函数
            Laya.Context.prototype["drawMesh"] = function (...args) {
                this["customDrawMesh"](...args);
            }
        }
        /**
         * 注册并预打包shader
         * 建议在Laya.init之后使用
         */
        static InitShder(name: string, vs: string, ps: string, mainId: number): void {
            if (CustomShader.registeredShder.has(name)) {
                console.warn(`this custom shader named ${name} has be registered !`)
            }
            CustomShader.registeredShder.set(name, {
                vs: vs,
                ps: ps,
                mainId: mainId
            });
            CustomShader.registeredShder.forEach((pershder => {
                try {
                    Laya.Shader.preCompile2D(0, pershder.mainId, pershder.vs, pershder.ps, null);
                    CustomShader.registedIdArr.push()
                } catch (e) {
                    console.error("customshader compile fail !\n", e);
                }
            }))
        }

        static hasRegisteredById(mainId: number): boolean {
            let result = false;
            CustomShader.registeredShder.forEach(preshader => {
                result = preshader.mainId == mainId || result;
            })
            return result;
        }
    }

    export class Custom2DSV extends Laya.Value2D {
        public static readonly CUSTOMSHADER2D: number = 0x1000;
        public sys_time = 0;
        _sin = 0;
        _sinTime = 0;
        constructor(subID: number = 0) {
            super(Custom2DSV.CUSTOMSHADER2D, subID);
            this.defines["_value"] = Laya.ShaderDefines2D["CUSTOMTEXTURE2D"];
            this["_ShaderWithCompile"] = this._shaderWithCompile;
        }
        private _shaderWithCompile(): CustomShader2X {
            var ret: CustomShader2X = Laya.Shader.withCompile2D(0, this.mainID, this.defines.toNameDic(), this.mainID | this.defines["_value"], CustomShader2X.create, this._attribLocation) as CustomShader2X;
            return ret;
        }

        /**
         * 更新自定义shader的自定义参数
         * @param params shader参数数组
         */
        private setCommonValue(params: Array<any>): void {

        }

        public setMainId(id: number): void {
            if (CustomShader.hasRegisteredById(id)) {
                this.mainID = id;
            } else {
                console.error("can't find id : ", id);
            }
        }

        delay = 100;
        delayTime = 0;
        public upload(): void {
            this.sys_time += Laya.timer.delta / 1000;
            //用于流光特效
            this._sinTime += Laya.timer.delta / 500;
            this._sin = Math.sin(this._sinTime);
            if (this._sin > 0.99) {
                // this.delayTime++;
                this._sin = 0;
                this._sinTime = 0;
            }
            var renderstate2d: any = Laya.RenderState2D;

            // 如果有矩阵的话，就设置 WORLDMAT 宏
            Laya.RenderState2D.worldMatrix4 === Laya.RenderState2D.TEMPMAT4_ARRAY || this.defines.addInt(Laya.ShaderDefines2D.WORLDMAT);
            this.mmat = renderstate2d.worldMatrix4;

            if (Laya.RenderState2D.matWVP) {
                this.defines.addInt(Laya.ShaderDefines2D.MVP3D);
                this.u_MvpMatrix = Laya.RenderState2D.matWVP.elements;
            }
            var sd: CustomShader2X = Laya.Shader.sharders[this.mainID | this.defines["_value"]] || this._shaderWithCompile();
            //更新自定义的shader值
            this.setCommonValue(sd._params2dQuick2 || sd._make2dQuick2());
            if (sd._shaderValueWidth !== renderstate2d.width
                || sd._shaderValueHeight !== renderstate2d.height
                || this.size[0] !== renderstate2d.width
                || this.size[1] !== renderstate2d.height) {
                this.size[0] = renderstate2d.width;
                this.size[1] = renderstate2d.height;
                sd._shaderValueWidth = renderstate2d.width;
                sd._shaderValueHeight = renderstate2d.height;
                sd.upload(this as Laya.ShaderValue, null);
            }
            else {
                sd.upload(this as Laya.ShaderValue, sd._params2dQuick2 || sd._make2dQuick2());
            }
        }
    }

    export class CustomSubmitTexture extends Laya.SubmitTexture {
        private static poolSize: number = 0;
        private static _POOL: any[] = [];

        constructor(type: number) {
            super(type);
        }

        public releaseRender(): void {
            if ((--this["_ref"]) < 1) {
                CustomSubmitTexture._POOL[CustomSubmitTexture.poolSize++] = this;
                this.shaderValue.release();
                //_vb = null;
                this["_mesh"] = null;
                this["_parent"] && (this["_parent"].releaseRender(), this["_parent"] = null);
            }
        }

        public renderSubmit(): number {

            var tex: Laya.Texture = this.shaderValue.textureHost;
            if (tex) {//现在fillrect也用的这个submit，所以不必要求有texture
                var source: any = tex ? tex["_getSource"]() : null;
                if (!source) return 1;
            }

            var gl: WebGLRenderingContext = Laya.WebGLContext['mainContext'];

            this["_mesh"].useMesh(gl);

            if (Laya.BlendMode.activeBlendFunction !== this["_blendFn"]) {
                Laya.WebGLContext['setBlend'](gl, true);
                this["_blendFn"](gl);
                Laya.BlendMode.activeBlendFunction = this["_blendFn"];
            }
            this.shaderValue.texture = source;
            this.shaderValue.upload();

            gl.drawElements(gl.TRIANGLES, this["_numEle"], gl.UNSIGNED_SHORT, this["_startIdx"]);

            Laya.Stat.renderBatches++;
            Laya.Stat.trianglesFaces += this["_numEle"] / 3;

            return 1;
        }
        /*
        create方法只传对submit设置的值
        */
        public static create(context: Laya.Context, mesh: Laya.Mesh2D, sv: Laya.Value2D): CustomSubmitTexture {
            var o: CustomSubmitTexture = CustomSubmitTexture.poolSize ? CustomSubmitTexture._POOL[--CustomSubmitTexture.poolSize] : new CustomSubmitTexture(Laya.Submit.TYPE_TEXTURE);
            o["_mesh"] = mesh;
            o["_key"].clear();
            o["_key"].submitType = Laya.SubmitBase["KEY_CUSTOM_DRAWTEXTURE"];
            o["_ref"] = 1;
            o["_startIdx"] = mesh.indexNum * Laya.CONST3D2D.BYTES_PIDX;
            o["_numEle"] = 0;
            var blendType: number = context["_nBlendType"];
            o["_key"].blendShader = blendType;
            o["_blendFn"] = context["_targets"] ? Laya.BlendMode.targetFns[blendType] : Laya.BlendMode.fns[blendType];
            o.shaderValue = sv;
            //sv.setValue(context._shader2D);
            if (context["_colorFiler"]) {
                var ft: Laya.ColorFilter = context["_colorFiler"];
                sv.defines.add(ft.type);
                (sv as Laya.TextureSV).colorMat = ft["_mat"];
                (sv as Laya.TextureSV).colorAlpha = ft["_alpha"];
            }
            return o;
        }
    }

    export class CustomShader2X extends Laya.Shader2X {
        constructor(vs: string, ps: string, saveName: any = null, nameMap: any = null, bindAttrib: Array<any> = null) {
            super(vs, ps, saveName, nameMap, bindAttrib);
        }

        protected recreateResource(): void {
            (this as any).customCompile = true;
            super.recreateResource();
        }

        public _make2dQuick2(): Array<any> {
            if (!this._params2dQuick2) {
                this._params2dQuick2 = [];

                var params: Array<any> = this['_params'], one: any;
                for (var i: number = 0, n: number = params.length; i < n; i++) {
                    one = params[i];
                    this._params2dQuick2.push(one);
                }
            }
            return this._params2dQuick2;
        }

        public static create(vs: string, ps: string, saveName: any = null, nameMap: any = null, bindAttrib: Array<any> = null): CustomShader2X {
            return new CustomShader2X(vs, ps, saveName, nameMap, bindAttrib);
        }
    }
}


