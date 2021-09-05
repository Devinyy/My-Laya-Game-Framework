import { LwgEvent } from "../../Lwg/Lwg"

/**
 * 事件, 不允许在其他地方写事件,BaseEvent中有的就不要再写了
 */
export class GameEvent extends LwgEvent.BaseEvent {
  /**
   * 更新里程
   */
  static addMileageCur = 'addMileageCur';
  /**
   * 更新颜色索引值
   */
  static colorIndex = 'colorIndex';
  /**
   * 更换boss
   */
  static changeBoss = 'changeBoss';

  static changeFood = 'changeFood';

  /**
   * 更新分数
   */
  // static updateScore = 'updateScore';
  static updateDiamond = 'updateDiamond';
  /**
   * 当前创建的路段索引值，用于无尽模式加速
   */
  static roadIndex = 'roadIndex';
  /**
   * 获取得分
   */
  static D3_2DScore = 'D3to2DScore';
  static D2_3DScore = 'D2_3DScore';

  /**
   * 点击攻击
   */
  static attackByClickStart = 'attackByClickStart';
  static attackByClick = 'attackByClick';
  static attackByClickEnd = 'attackByClickEnd';

  /**
   * 更新头像
   */
  static updateHead = 'updateHead';
  /**
   * 更新血条展示位置
   */
  static updateRoleDataDisplay = 'updateRoleDataDisplay';

  /**
   * 准备和boss战斗
   */
  static readyVSBOSS = 'readyVSBOSS';

  /**
   * 更换boss形象
   */
  static changeBossForm = 'changeBossForm';
  /**
   * 更新boss血量
   */
  static updateBossHP = 'updateBossHP';
  /**
   * 更新角色血量
   */
  static updateRoleHP = 'updateRoleHP';
  /**
   * 隐藏角色血量
   */
  static hideRoleHP = 'hideRoleHP';
  /**
   * 显示角色血量
   */
  static showRoleHP = 'showRoleHP';
  /**
   * 更新成长值
   */
  static updateGrowthValue = 'updateGrowthValue';
  /**
   * 更新进度
   */
  static updateLvSchedule = 'updateLvSchedule';
  /**
   * 胜利
   */
  // static victory = 'victory';
  /**
  * 展示奖励
  */
  static receiveAward = 'receiveAward';
  /**
   * 失败
   */
  static defeated = 'defeated';
  static victory = 'victory';
  /**
   * 捡到钥匙
   */
  static pickedKey = 'pickedKey';
  /**
   * 刷新主界面钥匙的数量
   */
  static updateKeyNumStart = 'updateKeyNumStart';
  /**
   * 刷新幸运抽奖的按钮数量显示
   */
  static updateLuckyWheel = 'updateLuckyWheel';
  /**
   * 选择模式
   */
  static LEVELMODE = 'LEVELMODE';
  /**
   * 泡泡数量
   */
  static bubblesNum = 'bubblesNum';
  /**
   * 蓄气值
   */
  static storageNum = 'storageNum';

  /**
   * 集气进度条下降
   */
  static reduceStorage = 'reduceStorage';

  static Resurgence = 'Resurgence';

  static hideStorage = 'hideStorage';

}