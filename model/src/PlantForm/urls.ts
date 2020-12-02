const urls = {

    unity:{
        scene:{
            gameScene:'res/unity/mainsence.ls',
            shopScene:'res/unity/show.ls'
        },  
    },

    guanqiamusic:[
        {name:'Unity',musicurl:'res/music/sound01.mp3',map:0,delaytime:1,stars:0,highscore:0,},
        {name:'江南少女',musicurl:'res/music/sound10.mp3',map:1,delaytime:1,stars:0,highscore:0,},
        {name:'画画的baby',musicurl:'res/music/sound03.mp3',map:0,delaytime:1,stars:0,highscore:0,},
        {name:'Дадада (Jarico Remix)',musicurl:'res/music/sound02.mp3',map:1,delaytime:1,stars:0,highscore:0,},
        {name:'Roly poly',musicurl:'res/music/sound04.mp3',map:0,delaytime:1,stars:0,highscore:0,},
        {name:'Faded',musicurl:'res/music/sound05.mp3',map:1,delaytime:1,stars:0,highscore:0,},
        {name:'谪仙',musicurl:'res/music/sound07.mp3',map:0,delaytime:1,stars:0,highscore:0,},
        {name:'dancing with your ghost',musicurl:'res/music/sound09.mp3',map:1,delaytime:1,stars:0,highscore:0,},
        {name:'旧梦一场',musicurl:'res/music/sound08.mp3',map:0,delaytime:1,stars:0,highscore:0,},
        {name:'一个人挺好',musicurl:'res/music/sound06.mp3',map:1,delaytime:1,stars:0,highscore:0,},
        
    ],

    nowskin:[
        {weapon:0,helmet:0,cloth:0,bag:0},
    ],

    unlockskin:[10,10,25,25,25,50,50,50],

    weapons:[
        {id:'0',modelurl:'res/unity/weapon01.lh',name:'棒球棍',icon:'ui/ICON/weapon01.png'},
        {id:'1',modelurl:'res/unity/weapon02.lh',name:'武士刀',icon:'ui/ICON/weapon02.png'},
        {id:'2',modelurl:'res/unity/weapon03.lh',name:'工兵铲',icon:'ui/ICON/weapon03.png'},
        {id:'3',modelurl:'res/unity/weapon04.lh',name:'狼牙木棒',icon:'ui/ICON/weapon04.png'},
        {id:'4',modelurl:'res/unity/weapon05.lh',name:'平底锅',icon:'ui/ICON/weapon05.png'},
        {id:'5',modelurl:'res/unity/weapon06.lh',name:'打狗棒',icon:'ui/ICON/weapon06.png'},
        {id:'6',modelurl:'res/unity/weapon07.lh',name:'尼泊尔弯刀',icon:'ui/ICON/weapon07.png'},
        {id:'7',modelurl:'res/unity/weapon08.lh',name:'金箍棒',icon:'ui/ICON/weapon08.png'},
    ],

    helmets:[
        {id:'0',modelurl:'res/unity/Head10.lh',icon:'ui/ICON/Head10.png'},
        {id:'1',modelurl:'res/unity/Head2.lh',icon:'ui/ICON/Head2.png'},
        {id:'2',modelurl:'res/unity/Head14.lh',icon:'ui/ICON/Head14.png'},
        {id:'3',modelurl:'res/unity/Head11.lh',icon:'ui/ICON/Head11.png'},
        {id:'4',modelurl:'res/unity/Head12.lh',icon:'ui/ICON/Head12.png'},
        {id:'5',modelurl:'res/unity/Head3.lh',icon:'ui/ICON/Head3.png'},
        {id:'6',modelurl:'res/unity/Head4.lh',icon:'ui/ICON/Head4.png'},
        {id:'7',modelurl:'res/unity/Head9.lh',icon:'ui/ICON/Head9.png'},
    ],

    clothes:[
        {id:'0',modelurl:'res/unity/Role011.lh',name:'嘻哈男孩',icon:'ui/ICON/Role011.png'},
        {id:'1',modelurl:'res/unity/Role002.lh',name:'粉熊',icon:'ui/ICON/Role002.png'},
        {id:'2',modelurl:'res/unity/Role015.lh',name:'呆呆鸡',icon:'ui/ICON/Role015.png'},
        {id:'3',modelurl:'res/unity/Role012.lh',name:'罗丽塔',icon:'ui/ICON/Role012.png'},
        {id:'4',modelurl:'res/unity/Role013.lh',name:'恶灵',icon:'ui/ICON/Role013.png'},
        {id:'5',modelurl:'res/unity/Role003.lh',name:'美队',icon:'ui/ICON/Role003.png'},
        {id:'6',modelurl:'res/unity/Role004.lh',name:'死仕',icon:'ui/ICON/Role004.png'},
        {id:'7',modelurl:'res/unity/Role010.lh',name:'孙悟空',icon:'ui/ICON/Role010.png'},
    ],

    bags:[
        {id:'0',modelurl:'res/unity/Prop1.lh',name:'吉他',icon:'ui/ICON/Prop1.png'},
        {id:'1',modelurl:'res/unity/Prop2.lh',name:'魔法书',icon:'ui/ICON/Prop2.png'},
        {id:'2',modelurl:'res/unity/Prop5.lh',name:'时空行囊',icon:'ui/ICON/Prop5.png'},
        {id:'3',modelurl:'res/unity/Prop6.lh',name:'恶魔之翼',icon:'ui/ICON/Prop6.png'},
        {id:'4',modelurl:'res/unity/Prop7.lh',name:'滑板',icon:'ui/ICON/Prop7.png'},
        {id:'5',modelurl:'res/unity/Prop3.lh',name:'美队之盾',icon:'ui/ICON/Prop3.png'},
        {id:'6',modelurl:'res/unity/Prop4.lh',name:'魔法卷轴',icon:'ui/ICON/Prop4.png'},
        {id:'7',modelurl:'res/unity/Prop8.lh',name:'光之羽翼',icon:'ui/ICON/Prop8.png'},
    ],

    gifts:[

        {
            "des": [
                "[Online]  在线宝箱：普通奖励：ordinary  额外奖励；additional  时间（秒）：time  类型：type  数量：num  权重：weight ",
                "[type]     道具类型：1：货币 2：体力 3：武器碎片 4：衣服碎片 5：背部碎片 6：钥匙 7：视频卡  8：视频  9：白色装备  10：绿色装备  11：紫色装备",
                "[Limit]    限量礼包  初级礼包：primary   中级礼包：intermediate  高级礼包：senior    物品类型：propType  道具数量：propNum   ",
                "[box]      补给宝箱  开启条件：open  消耗道具：openType  道具数量：TypeNum "
            ],
            "Online": [
                {
                    "time": 0,
                    "ordinary": "1",
                    "ordinaryNum": "30",
                    "additional": "3",
                    "additionalNum": "5"
                    
                },
                {
                    "time": 30,
                    "ordinary": "3",
                    "ordinaryNum": "2",
                    "additional": "6",
                    "additionalNum": "1"
                },
                {
                   "time": 60,
                    "ordinary": "1",
                    "ordinaryNum": "50",
                    "additional": "2",
                    "additionalNum": "50"
                },
                {
                    "time": 90,
                    "ordinary": "6",
                    "ordinaryNum": "1",
                    "additional": "7",
                    "additionalNum": "2"
                },
                {
                    "time": 120,
                    "ordinary": "1",
                    "ordinaryNum": "80",
                    "additional": "5",
                    "additionalNum": "5"
                },
                {
                    "time": 180,
                    "ordinary": "2",
                    "ordinaryNum": "20",
                    "additional": "6",
                    "additionalNum": "2"
                },
                {
                    "time": 300,
                    "ordinary": "5",
                    "ordinaryNum": "5",
                    "additional": "2",
                    "additionalNum": "50"
                },
                {
                    "time": 300,
                    "ordinary": "7",
                    "ordinaryNum": "2",
                    "additional": "1",
                    "additionalNum": "800"
                },
                {
                    "time": 300,
                    "ordinary": "1",
                    "ordinaryNum": "100",
                    "additional": "7",
                    "additionalNum": "2"
                },
                {
                    "time": 300,
                    "ordinary": "4",
                    "ordinaryNum": "5",
                    "additional": "4",
                    "additionalNum": "5"
                }
            ],
            "Limit": [
                {
                   "primary": [
                {
                    "propType": "2",
                    "propNum": "20",
                    "sellType": "1", 
                    "sellNum": "100", 
                    "weight": "40"
                    
                },
                {
                    "propType": "4",
                    "propNum": "2",
                    "sellType": "1", 
                    "sellNum": "100", 
                    "weight": "30"
                },
                {
                    "propType": "5",
                    "propNum": "2",
                    "sellType": "1", 
                    "sellNum": "100", 
                    "weight": "30"
                }
            ]
                    
                },
                {
                    "intermediate": [
                {
                    "propType": "6",
                    "propNum": "1",
                    "sellType": "1", 
                    "sellNum": "500", 
                    "weight": "30"
                    
                },
                {
                    "propType": "3",
                    "propNum": "5",
                    "sellType": "1", 
                    "sellNum": "500", 
                    "weight": "40"
                },
                {
                    "propType": "4",
                    "propNum": "5",
                    "sellType": "1", 
                    "sellNum": "500", 
                    "weight": "30"
                }
            ]
                },
                {
                  
                    "senior": [
                {
                    "propType": "10",
                    "propNum": "1",
                    "sellType": "8", 
                    "sellNum": "1"
                    
                }
            ]
                }
            ],
            "box": [
        
                {
                    "propType": "5",
                    "propNum": "2",
                    "weight": "20"           
                },
                {
                    "propType": "4",
                    "propNum": "3",
                    "weight": "10"   
                },
                {
                    "propType": "4",
                    "propNum": "2",
                    "weight": "20"                    
                },
                {
                    "propType": "3",
                    "propNum": "2",
                    "weight": "10"                    
                },
                {
                    "propType": "3",
                    "propNum": "3",
                    "weight": "7"                    
                },
                {
                    "propType": "2",
                    "propNum": "10",
                    "weight": "20"                    
                },
                {
                    "propType": "2",
                    "propNum": "20",
                    "weight": "10"                    
                },
                {
                    "propType": "7",
                    "propNum": "1",
                    "weight": "3"                    
                }
                ,
                {
                  
                    "open": [
                {
                    "openType1": "1",
                    "TypeNum1": "500",
                    "openType2": "6", 
                    "TypeNum2": "1"
                    
                }
            ]
                }
            ]
        }

    ],

    missions:[
        {type:0,num1:1,num2:2,num3:3,},
        {type:1,num1:1,num2:2,num3:3,},
        {type:2,num1:1,num2:2,num3:3,},
        {type:3,num1:2,num2:5,num3:8,},
        {type:4,num1:1,num2:3,num3:8,},
        {type:5,num1:1,num2:3,num3:8,},
        {type:6,num1:1000,num2:3000,num3:5000,},
    ],

}

export default urls;