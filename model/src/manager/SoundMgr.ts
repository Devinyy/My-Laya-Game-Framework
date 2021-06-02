import { SingletonBase } from "../base/SingletonBase";
import platform from "../PlantForm/platform";

export default class SoundMgr extends SingletonBase{

    /**设置单例的引用方式，方便其他类引用 */
    static instance: SoundMgr;

    constructor() { 
        super();
        SoundMgr.instance = this;
    }

    private static sounds = {};
    private static music = null;

    public static playEffect(path:string){
        Laya.SoundManager.playSound(path,1);
    }

    public static stopSound(path:string){ 
        Laya.SoundManager.stopSound(path);
    }

    public static playMusic(path:string,loop:number){
        console.log('play music=',path);
        if(Laya.Browser.window.wx){ 
            if(loop){
                SoundMgr.music = this.wxPlayMusic(path,false);
            }
            else{
                SoundMgr.music = this.wxPlayMusic(path,true);
            }
            return SoundMgr.music;
        }else{
            SoundMgr.music = Laya.SoundManager.playMusic(path,loop); 
            return SoundMgr.music;
        }            
    }

    public static stopMusic(path:string=''){
        console.log('stop music=',path);
        if(Laya.Browser.window.wx){
            this.wxStopMusic(path);
        }else{
            Laya.SoundManager.stopMusic();
        }
    }

    public static pauseMusic(path:string){
        console.log('pause music=',path);
        if(Laya.Browser.window.wx){
            this.wxPauseMusic(path);
        }else{
            if(SoundMgr.music){
                SoundMgr.music.pause();
            }
        }
    }

    public static resumeMusic(path:string){
        console.log('resume music=',path);
        if(Laya.Browser.window.wx){
            this.wxResumeMusic (path);
        }else{
            if(SoundMgr.music){
                SoundMgr.music.resume();
            }
        }
    }

    private static wxPlayMusic(url:string,loop:boolean=false){
        //这个就不复用了 反正就一个bgm
        console.log('play music==',url);
        if(SoundMgr.music){
            SoundMgr.music.destroy();
        }
        SoundMgr.music = Laya.Browser.window.wx.createInnerAudioContext();
        SoundMgr.music.src = url;
        SoundMgr.music.loop = loop;
        SoundMgr.music.play(); 
        return SoundMgr.music;
    }

    private static wxPauseMusic(url:string){
        console.log('pause music==',url);
        if(SoundMgr.music){
            SoundMgr.music.pause();
        }
    }

    private static wxResumeMusic(url:string){
        console.log('resume music==',url);
        if(SoundMgr.music){                
            SoundMgr.music.play();
        }
    }

    private static wxStopMusic(url:string){
        console.log('stop music==',url);
        if(SoundMgr.music){
            SoundMgr.music.destroy();
            SoundMgr.music = null;
        }            
    }

}