import platform from "./platform";

export default class soundMgr {

    /**设置单例的引用方式，方便其他类引用 */
    static instance: soundMgr;

    constructor() { 
        soundMgr.instance = this;
    }

    public static sounds = {};
    public static music = null;

    private static StopSound(audio){
        if(audio){
            audio.stop();
        }
    }

    public static playEffect(path:string){
        Laya.SoundManager.playSound(path,1);
    }

    public static stopSound(path:string){ 
        Laya.SoundManager.stopSound(path);
    }

    public static playMusic(path:string,loop:number):any{
        console.log('play music=',path);
        if(Laya.Browser.window.wx){ 
            if(loop){
                soundMgr.music = this.wxPlayMusic(path,false);
            }
            else{
                soundMgr.music = this.wxPlayMusic(path,true);
            }
            return soundMgr.music;
        }else{
            soundMgr.music = Laya.SoundManager.playMusic(path,loop); 
            return soundMgr.music;
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
            if(soundMgr.music){
                soundMgr.music.pause();
            }
        }
    }

    public static resumeMusic(path:string){
        console.log('resume music=',path);
        if(Laya.Browser.window.wx){
            this.wxResumeMusic (path);
        }else{
            if(soundMgr.music){
                soundMgr.music.resume();
            }
        }
    }

    private static wxPlayMusic(url:string,loop:boolean=false){
        //这个就不复用了 反正就一个bgm
        console.log('play music==',url);
        if(soundMgr.music){
            soundMgr.music.destroy();
        }
        soundMgr.music = Laya.Browser.window.wx.createInnerAudioContext();
        soundMgr.music.src = url;
        soundMgr.music.loop = loop;
        soundMgr.music.play(); 
        return soundMgr.music;
    }

    private static wxStopMusic(url:string){
        console.log('stop music==',url);
        if(soundMgr.music){
            soundMgr.music.destroy();
            soundMgr.music = null;
        }            
    }

    private static wxPauseMusic(url:string){
        console.log('pause music==',url);
        if(soundMgr.music){
            soundMgr.music.pause();
        }
    }

    private static wxResumeMusic(url:string){
        console.log('resume music==',url);
        if(soundMgr.music){                
            soundMgr.music.play();
        }
    }

}