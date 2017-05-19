;(function (w) {
	'use strict';
	var config = {};

	config.rootAPI = "";


	//验证是否为空
	config.isNull = function isNull(value) {
		if (value == null || value == undefined || value.length == 0)
			return true;
		else
			return false;
	}

	//验证是否为日期格式
	config.isDate = function isDate(value) {
		if (config.isNull(value))
			return false;
		var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
		var r = value.match(reg);
		if (r != null)
			return true;
		else
			return false;
	}

	//判断是否为email
	config.isEmail = function isEmail(value) {
		if (config.isNull(value))
			return false;
		var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		if (reg.test(value))
			return true;
		else
			return false;
	}

	//判断是否为手机号
	config.isMobileNumber = function isMobileNumber(value) {
		if (config.isNull(value))
			return false;
		var length = value.length;
		var reg = /^1[3|5|7|8][0-9]{9}$/;
		if (length == 11 && reg.test(value))
			return true;
		else
			return false;
	}

	//判断是否为银行卡
	config.isBankCard = function isBankCard(value) {
		if (config.isNull(value))
			return false;
		var reg = /^\d{8,}$/;
		if (reg.test(value))
			return true;
		else
			return false;
	}


	//是否是身份证号码
	config.isIdCard=function isIdCard(value){
		var aCity = {
			11: "北京",
			12: "天津",
			13: "河北",
			14: "山西",
			15: "内蒙古",
			21: "辽宁",
			22: "吉林",
			23: "黑龙江 ",
			31: "上海",
			32: "江苏",
			33: "浙江",
			34: "安徽",
			35: "福建",
			36: "江西",
			37: "山东",
			41: "河南",
			42: "湖北 ",
			43: "湖南",
			44: "广东",
			45: "广西",
			46: "海南",
			50: "重庆",
			51: "四川",
			52: "贵州",
			53: "云南",
			54: "西藏 ",
			61: "陕西",
			62: "甘肃",
			63: "青海",
			64: "宁夏",
			65: "新疆",
			71: "台湾",
			81: "香港",
			82: "澳门",
			91: "国外 "
		};
		var iSum = 0;
		if (!/^\d{17}(\d|x)$/i.test(value)) return false;
		value = value.replace(/x$/i, "a");
		if (aCity[parseInt(value.substr(0, 2))] == null) return false;
		var	sBirthday = value.substr(6, 4) + "-" + Number(value.substr(10, 2)) + "-" + Number(value.substr(12, 2));
		var d = new Date(sBirthday.replace(/-/g, "/"));
		if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return false;
		for (var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(value.charAt(17 - i), 11);
		if (iSum % 11 != 1) return false;
		return true;
	};

	//是否是银行卡号
	config.isCreditcard=function isCreditcard(bankno){
		var lastNum=bankno.substr(bankno.length-1,1);//取出最后一位（与luhm进行比较）

		var first15Num=bankno.substr(0,bankno.length-1);//前15或18位
		var newArr=new Array();
		for(var i=first15Num.length-1;i>-1;i--){    //前15或18位倒序存进数组
			newArr.push(first15Num.substr(i,1));
		}
		var arrJiShu=new Array();  //奇数位*2的积 <9
		var arrJiShu2=new Array(); //奇数位*2的积 >9

		var arrOuShu=new Array();  //偶数位数组
		for(var j=0;j<newArr.length;j++){
			if((j+1)%2==1){//奇数位
				if(parseInt(newArr[j])*2<9)
					arrJiShu.push(parseInt(newArr[j])*2);
				else
					arrJiShu2.push(parseInt(newArr[j])*2);
			}
			else //偶数位
				arrOuShu.push(newArr[j]);
		}

		var jishu_child1=new Array();//奇数位*2 >9 的分割之后的数组个位数
		var jishu_child2=new Array();//奇数位*2 >9 的分割之后的数组十位数
		for(var h=0;h<arrJiShu2.length;h++){
			jishu_child1.push(parseInt(arrJiShu2[h])%10);
			jishu_child2.push(parseInt(arrJiShu2[h])/10);
		}

		var sumJiShu=0; //奇数位*2 < 9 的数组之和
		var sumOuShu=0; //偶数位数组之和
		var sumJiShuChild1=0; //奇数位*2 >9 的分割之后的数组个位数之和
		var sumJiShuChild2=0; //奇数位*2 >9 的分割之后的数组十位数之和
		var sumTotal=0;
		for(var m=0;m<arrJiShu.length;m++){
			sumJiShu=sumJiShu+parseInt(arrJiShu[m]);
		}

		for(var n=0;n<arrOuShu.length;n++){
			sumOuShu=sumOuShu+parseInt(arrOuShu[n]);
		}

		for(var p=0;p<jishu_child1.length;p++){
			sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p]);
			sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p]);
		}
		//计算总和
		sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2);

		//计算Luhm值
		var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;
		var luhm= 10-k;

		if (lastNum == luhm && lastNum.length != 0) {
			return true;
		} else {
			return false;
		}
	};

	//判断是否是浮点数字
	config.checkRate = function checkRate(value) {
		if (value == "" || value == null)
			return false;
		var reg = /^[0-9]+.?[0-9]*$/; //判断字符串是否为数字
		if (reg.test(value))
			return true;
		else
			return false;
	}

	//判断是否纯数字
	config.isdigital = function (value) {
		if (config.isNull(value))
			return false;
		var reg = /^[0-9]*$/;
		if (reg.test(value))
			return true;
		else
			return false;
	}

	//判断是否有字母加数字
	config.isAccountContainNumAndCase = function (value) {
		if (config.isNull(value))
			return false;
		var reg = /^[a-zA-Z][a-zA-Z0-9]+$/;
		if (reg.test(value))
			return true;
		else
			return false;
	}

	//判断确认密码
	config.confirmPassword = function confirmPassword(value1, value2) {
		if (value1 != value2)
			return false;
		else return true;
	}

	//判断是否是正整数
	config.isNumber = function isNumber(value) {
		if (config.isNull(value))
			return false;
		var reg = new RegExp("^[0-9]*$");
		if (reg.test(value))
			return true;
		else
			return false;
	}

	//只能中英文和数字  ^[a-zA-Z0-9\u4E00-\u9FA5]+$
	config.isLimitString = function isLimitString(value) {
		if (config.isNull(value))
			return false;
		var reg = /^[a-zA-Z0-9\u4E00-\u9FA5]+$/;
		if (reg.test(value))
			return true;
		else
			return false;
	}

	//星号隐藏中间值（卡号、手机、身份证）
	config.replaceAsterisk = function replaceAsterisk(str, frontLen, endLen) {
		var len = str.length - frontLen - endLen;
		var asterisk = '';
		for (var i = 0; i < len; i++) {
			asterisk += '*';
		}
		return str.substr(0, frontLen) + asterisk + str.substr(str.length - endLen);
	}

	//从后面截取
	config.cutOutStr = function cutOutStr(str, Len) {
		var str = str;
		return str.substr(str.length - Len);
	}

	//金额分隔，
	config.fmoney = function fmoney(s, n) {
		//debugger;
		//修改了部分代码适配整数的时候也可以分隔；
		n = n > 0 && n <= 20 ? n : 0;
		s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
		var l = s.split(".")[0].split("").reverse(),
			r = s.split(".")[1] || "",
			t = "";
		for (var i = 0; i < l.length; i++) {
			t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
		}
		if (r) {
			r = "." + r;
		};
		return t.split("").reverse().join("") + r;
	}

	//日期转成指定格式的string
	config.dateToString = function dateToString(date, fmt) {
		var date = new Date(date);
		if (date) {
			var o = {
				"M+": date.getMonth() + 1, //月份   
				"d+": date.getDate(), //日   
				"h+": date.getHours(), //小时   
				"m+": date.getMinutes(), //分   
				"s+": date.getSeconds(), //秒   
				"q+": Math.floor((date.getMonth() + 3) / 3), //季度   
				"S": date.getMilliseconds() //毫秒   
			};
			if (!fmt)
				fmt = "yyyy-MM-dd";
			if (/(y+)/.test(fmt))
				fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
			for (var k in o)
				if (new RegExp("(" + k + ")").test(fmt))
					fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			return fmt;
		}
	}

	//date转成年月日 时分秒
	config.dateToStringDetail = function (date) {
		return config.dateToString(date, "yyyy-MM-dd hh:mm:ss");
	};

	//获取url之后的参数
	config.getFragment = function getFragment() {
		if (window.location.search.indexOf("?") === 0) {
			return parseQueryString(window.location.search.substr(1));
		} else {
			return {};
		}

		function parseQueryString(queryString) {
			var data = {},
				pairs, pair, separatorIndex, escapedKey, escapedValue, key, value;

			if (queryString === null) {
				return data;
			}

			pairs = queryString.split("&");

			for (var i = 0; i < pairs.length; i++) {
				pair = pairs[i];
				separatorIndex = pair.indexOf("=");

				if (separatorIndex === -1) {
					escapedKey = pair;
					escapedValue = null;
				} else {
					escapedKey = pair.substr(0, separatorIndex);
					escapedValue = pair.substr(separatorIndex + 1);
				}

				key = decodeURIComponent(escapedKey);
				value = decodeURIComponent(escapedValue);

				data[key] = value;
			}

			return data;
		}
	};

	//创建cookie
	config.setCookie = function setCookie(cookieName, value, expiredays) {
		expiredays = expiredays ? expiredays : 365;
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + expiredays);
		document.cookie = cookieName + "=" + escape(value) +
			((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
	}

	//获取cookie
	config.getCookie = function getCookie(cookieName) {
		var cStart, cEnd;
		if (document.cookie.length > 0) {
			cStart = document.cookie.indexOf(cookieName + "=");
			if (cStart != -1) {
				cStart = cStart + cookieName.length + 1;
				cEnd = document.cookie.indexOf(";", cStart);
				if (cEnd == -1) cEnd = document.cookie.length;
				return unescape(document.cookie.substring(cStart, cEnd));
			}
		}
		return ""
	};
	//删除cookie中指定变量函数    
	config.deleteCookie = function delCookie(name, path) {
		//debugger;
		//如果path不指定，则会出现无法清除cookie的问题；
		path = path ? path : "/views/user";
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = config.getCookie(name);
		if (cval != null)
			document.cookie = name + "=" + "" + ";expires=" + exp.toGMTString() + ";path=" + path;
	}

	//根据http status定制错误提示信息
	config.getErrorMessage = function (code) {
		switch (code) {
			case 10:
				return "请先登录";
				break;
			case 11:
				return "您没有权限";
				break;
			case 12:
				return "服务器异常";
				break;
            case 13:
                return "资源不存在";
                break;
			default:
				return "数据验证失败";
				break;
		};
	}

	//判断浏览器终端
	config.browser = {
		versions: function () {
			var u = navigator.userAgent,
				app = navigator.appVersion;
			return { //移动终端浏览器版本信息 
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 
				android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器 
				iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器 
				iPad: u.indexOf('iPad') > -1, //是否iPad 
			};
		}(),
	}

	//获取表单JSON对象(jq扩展)
	jQuery.prototype.serializeObject = function () {
		var a, o, h, i, e;
		a = this.serializeArray();
		o = {};
		h = o.hasOwnProperty;
		for (i = 0; i < a.length; i++) {
			e = a[i];
			if (!h.call(o, e.name)) {
				o[e.name] = e.value;
			}
		}
		return o;
	};

	
		//空转0
	config.changeToZero = function (data) {
		var str = "";
		if (data === null || (isNaN(data) == true)) {
			str = 0;
		} else {
			str = data;
		}
		return str;
	}

	config.tab = function tab(option) {
		this.active = option.active || 0;
		this.container = option.container;
		this.titleItem = option.titleItem;
		this.contentItem = option.contentItem;
		this.titleActive = option.titleActive || "active",
		this.contentActive = option.contentActive || "active",
		this.initCallback = option.initCallback || function (active) {
				console.log(active);
			}
		this.callback = option.callback || function (active) {
			console.log(active);
		}
		this.init();

	}
	config.tab.prototype = {
		init: function () {
			this.initCallback(this.active);
			this.toChange();
		},
		toChange: function () {
			var me = this;
			me.container.on("click", me.titleItem, function (e) {

				var index = me.container.find(me.titleItem).index($(this));
				if (me.active != index) {
					me.active = index;
					me.container.find(me.titleItem).removeClass(me.titleActive).eq(me.active).addClass(me.titleActive);
					me.container.find(me.contentItem).removeClass(me.contentActive).eq(me.active).addClass(me.contentActive);
					me.callback(me.active);
				}
			});
		}
	};
	
	//判断用户是否已登录
	config.isLogin = function () {
		var sessionId = localStorage.getItem("mobile");
		if (sessionId !== null) {

			return true;
		}
		return false;
	};
	
	
	config.errorMessage = function (data){
		if(data["status"] == 412){
			if(typeof(data["responseJSON"]["message"]) === "string" ){
				return data["responseJSON"]["message"];
			} else if(typeof(data["responseJSON"]["message"]) === "object"){
				if(Array.isArray(data["responseJSON"]["message"])){
					var oArray = [];
					for(var item in data["responseJSON"]["message"][0]){
						oArray.push(data["responseJSON"]["message"][0][item]);
						
					}
					return oArray[0].toString();
				} else {
					var oArray = [];
					for(var item in data["responseJSON"]["message"]){
						oArray.push(data["responseJSON"]["message"][item]);
						
					}
					return oArray[0].toString();
				}
			}
		} else {
			return data["responseJSON"]["message"];
		}
	}
	
	
	
	//数量组件
	




	w.config = config;
})(window);