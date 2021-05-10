/**
 * name: 时间工具类
 * author：羊羽
 */

export default class timeMgr {
	private static _date: Date;

	//获取当前时间（毫秒）
	static getCurTime_ms(): number {
		this._date = null;
		this._date = new Date();
		return this._date.getTime();
	}

	//获取当前时间（秒）
	static getCurTime_s(): number {
		let time: number = this.getCurTime_ms();
		return Math.floor(time / 1000);
	}

	/**
	 * 将秒转换为 hh:mm:ss
	 * @param seconds 
	 */
	public static toTimeString_hh_mm_ss(seconds: number): string {
		var rtn: string = "";
		var h = parseInt(seconds / 3600 + "");
		var m = parseInt((seconds - h * 3600) / 60 + "");
		var s = parseInt(seconds % 60 + "");
		if (h <= 0) {
			rtn += "00:";
		}
		else if (h < 10) {
			rtn += "0" + h + ":";
		}
		else {
			rtn += h + ":";
		}
		if (m <= 0) {
			rtn += "00:";
		}
		else if (m < 10) {
			rtn += "0" + m + ":";
		}
		else {
			rtn += m + ":";
		}
		if (s <= 0) {
			rtn += "00";
		}
		else if (s < 10) {
			rtn += "0" + s;
		}
		else {
			rtn += s + "";
		}
		return rtn;
	}

	/**
	 * 将秒转换成: mm_ss
	 * @param seconds 
	 */
	public static toTimeString_mm_ss(seconds: number): string {
		var rtn: string = "";
		var m = parseInt(seconds / 60 + "");
		var s = parseInt(seconds % 60 + "");
		if (m <= 0) {
			rtn += "00:";
		}
		else if (m < 10) {
			rtn += "0" + m + ":";
		}
		else {
			rtn += m + ":";
		}
		if (s <= 0) {
			rtn += "00";
		}
		else if (s < 10) {
			rtn += "0" + s;
		}
		else {
			rtn += s + "";
		}
		return rtn;
	}

	//判断是否是同一日期
	static isTheSameDate(date: string): boolean {
		let today = new Date();
		console.log("---前一天", date);
		console.log("---今天", today.toDateString());
		if (date == today.toDateString()) {
			return true;
		}
		return false;
	}

	/**
	 * 将毫秒数转换成天数
	 * @param time 毫秒
	 */
	static msToDay(time: number): number {
		return time / 24 / 60 / 60;
	}

	//将秒转成分钟
	static sToMinute(time: number): number {
		let minute: number = time / 60;
		return Math.floor(minute);
	}

	//计算两个时间相差的天数
	static calcDayCount(time: number): number {
		let day1 = Math.floor(time / 1000 / 60 / 60 / 24);
		let day2 = Math.floor(this.getCurTime_ms() / 1000 / 60 / 60 / 24);
		return Math.abs(day1 - day2);
	}

	/** 根据时间戳获取剩余时间*/
	static getFormatTimeStr(time: number) {
		time = Math.floor(time / 1000);
		let m = Math.floor((time % 3600) / 60);
		let s = time % 60;
		return this.getFormatStr(m) + ':' + this.getFormatStr(s);
	}

	/** 格式化*/
	static getFormatStr(num: number) {
		let str = '';
		if (num < 10) {
			str = '0' + num;
		} else {
			str = num + '';
		}
		return str;
	}
}