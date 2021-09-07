/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "portrait";

//-----libs-begin-----
require("./libs/min/laya.core.min.js")
require("./libs/min/laya.ani.min.js")
require("./libs/min/laya.ui.min.js")
require("./libs/min/laya.d3.min.js")
require("./libs/min/laya.physics3D.min.js")
//-----libs-end-------
require("./js/bundle.js");
