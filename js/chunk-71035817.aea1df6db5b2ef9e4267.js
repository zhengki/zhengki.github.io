(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71035817"],{"08f8":function(e,n,t){},2277:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));t("99af"),t("d3b7"),t("96cf"),t("1da1"),t("4fd3"),t("365c");var i=function(e){var n=window.btoa("".concat(location.origin,"/login")),t=e||n;location.href="".concat("https://interface.chinaaimo.cn/api/","/Wx/Auth?auth_type=1&b=").concat(t)}},"4fd3":function(e,n,t){var i;!function(r,o){"object"===typeof e.exports?e.exports=o(r):(i=(()=>o(r)).call(n,t,n,e),void 0===i||(e.exports=i))}(window,(function(e,n){function t(n,t,i){e.WeixinJSBridge?WeixinJSBridge.invoke(n,r(t),(function(e){c(n,e,i)})):u(n,i)}function i(n,t,i){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){i&&i.trigger&&i.trigger(e),c(n,e,t)})):u(n,i||t)}function r(e){return e=e||{},e.appId=C.appId,e.verifyAppId=C.appId,e.verifySignType="sha1",e.verifyTimestamp=C.timestamp+"",e.verifyNonceStr=C.nonceStr,e.verifySignature=C.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function a(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function c(e,n,t){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var i=n.errMsg;i||(i=n.err_msg,delete n.err_msg,i=s(e,i),n.errMsg=i),(t=t||{})._complete&&(t._complete(n),delete t._complete),i=n.errMsg||"",C.debug&&!t.isInnerInvoke&&alert(JSON.stringify(n));var r=i.indexOf(":");switch(i.substring(r+1)){case"ok":t.success&&t.success(n);break;case"cancel":t.cancel&&t.cancel(n);break;default:t.fail&&t.fail(n)}t.complete&&t.complete(n)}function s(e,n){var t=e,i=v[t];i&&(t=i);var r="ok";if(n){var o=n.indexOf(":");"confirm"==(r=n.substring(o+1))&&(r="ok"),"failed"==r&&(r="fail"),-1!=r.indexOf("failed_")&&(r=r.substring(7)),-1!=r.indexOf("fail_")&&(r=r.substring(5)),"access denied"!=(r=(r=r.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=r||(r="permission denied"),"config"==t&&"function not exist"==r&&(r="ok"),""==r&&(r="fail")}return t+":"+r}function d(e){if(e){for(var n=0,t=e.length;n<t;++n){var i=e[n],r=h[i];r&&(e[n]=r)}return e}}function u(e,n){if(!(!C.debug||n&&n.isInnerInvoke)){var t=v[e];t&&(e=t),n&&n._complete&&delete n._complete}}function l(e){if(!(_||k||C.debug||M<"6.0.2"||P.systemType<0)){var n=new Image;P.appId=C.appId,P.initTime=A.initEndTime-A.initStartTime,P.preVerifyTime=A.preVerifyEndTime-A.preVerifyStartTime,B.getNetworkType({isInnerInvoke:!0,success:function(e){P.networkType=e.networkType;var t="https://open.weixin.qq.com/sdk/report?v="+P.version+"&o="+P.isPreVerifyOk+"&s="+P.systemType+"&c="+P.clientVersion+"&a="+P.appId+"&n="+P.networkType+"&i="+P.initTime+"&p="+P.preVerifyTime+"&u="+P.url;n.src=t}})}}function f(){return(new Date).getTime()}function p(n){x&&(e.WeixinJSBridge?n():S.addEventListener&&S.addEventListener("WeixinJSBridgeReady",n,!1))}function g(){B.invoke||(B.invoke=function(n,t,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,r(t),i)},B.on=function(n,t){e.WeixinJSBridge&&WeixinJSBridge.on(n,t)})}function m(e){if("string"==typeof e&&e.length>0){var n=e.split("?")[0],t=e.split("?")[1];return n+=".html",void 0!==t?n+"?"+t:n}}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},v=function(){var e={};for(var n in h)e[h[n]]=n;return e}(),S=e.document,I=S.title,w=navigator.userAgent.toLowerCase(),y=navigator.platform.toLowerCase(),_=!(!y.match("mac")&&!y.match("win")),k=-1!=w.indexOf("wxdebugger"),x=-1!=w.indexOf("micromessenger"),T=-1!=w.indexOf("android"),b=-1!=w.indexOf("iphone")||-1!=w.indexOf("ipad"),M=function(){var e=w.match(/micromessenger\/(\d+\.\d+\.\d+)/)||w.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),A={initStartTime:f(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},P={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:b?1:T?2:-1,clientVersion:M,url:encodeURIComponent(location.href)},C={},E={_completes:[]},V={state:0,data:{}};p((function(){A.initEndTime=f()}));var O=!1,L=[],B={config:function(e){C=e,u("config",e);var n=!1!==C.check;p((function(){if(n)t(h.config,{verifyJsApiList:d(C.jsApiList)},function(){E._complete=function(e){A.preVerifyEndTime=f(),V.state=1,V.data=e},E.success=function(e){P.isPreVerifyOk=0},E.fail=function(e){E._fail?E._fail(e):V.state=-1};var e=E._completes;return e.push((function(){l()})),E.complete=function(n){for(var t=0,i=e.length;t<i;++t)e[t]();E._completes=[]},E}()),A.preVerifyStartTime=f();else{V.state=1;for(var e=E._completes,i=0,r=e.length;i<r;++i)e[i]();E._completes=[]}})),g()},ready:function(e){0!=V.state?e():(E._completes.push(e),!x&&C.debug&&e())},error:function(e){M<"6.0.2"||(-1==V.state?e(V.data):E._fail=e)},checkJsApi:function(e){var n=function(e){var n=e.checkResult;for(var t in n){var i=v[t];i&&(n[i]=n[t],delete n[t])}return e};t("checkJsApi",{jsApiList:d(e.jsApiList)},(e._complete=function(e){if(T){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=n(e)},e))},onMenuShareTimeline:function(e){i(h.onMenuShareTimeline,{complete:function(){t("shareTimeline",{title:e.title||I,desc:e.title||I,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){i(h.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?t("sendAppMessage",{title:e.title||I,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):t("sendAppMessage",{title:e.title||I,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){i(h.onMenuShareQQ,{complete:function(){t("shareQQ",{title:e.title||I,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){i(h.onMenuShareWeibo,{complete:function(){t("shareWeiboApp",{title:e.title||I,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){i(h.onMenuShareQZone,{complete:function(){t("shareQZone",{title:e.title||I,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){t("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){t("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){t("startRecord",{},e)},stopRecord:function(e){t("stopRecord",{},e)},onVoiceRecordEnd:function(e){i("onVoiceRecordEnd",e)},playVoice:function(e){t("playVoice",{localId:e.localId},e)},pauseVoice:function(e){t("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){t("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){i("onVoicePlayEnd",e)},uploadVoice:function(e){t("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){t("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){t("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){t("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(T){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){t(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){t("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){t("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===O?(O=!0,t("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(O=!1,L.length>0){var n=L.shift();wx.getLocalImgData(n)}},e))):L.push(e)},getNetworkType:function(e){var n=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var t=e.subtype;if(delete e.subtype,t)e.networkType=t;else{var i=n.indexOf(":"),r=n.substring(i+1);switch(r){case"wifi":case"edge":case"wwan":e.networkType=r;break;default:e.errMsg="getNetworkType:fail"}}return e};t("getNetworkType",{},(e._complete=function(e){e=n(e)},e))},openLocation:function(e){t("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},t(h.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){t("hideOptionMenu",{},e)},showOptionMenu:function(e){t("showOptionMenu",{},e)},closeWindow:function(e){t("closeWindow",{},e=e||{})},hideMenuItems:function(e){t("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){t("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){t("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){t("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){t("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(b){var n=e.resultStr;if(n){var t=JSON.parse(n);e.resultStr=t&&t.scan_code&&t.scan_code.scan_result}}},e))},openAddress:function(e){t(h.openAddress,{},(e._complete=function(e){e=a(e)},e))},openProductSpecificView:function(e){t(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,i=[],r=0,o=n.length;r<o;++r){var a=n[r],c={card_id:a.cardId,card_ext:a.cardExt};i.push(c)}t(h.addCard,{card_list:i},(e._complete=function(e){var n=e.card_list;if(n){for(var t=0,i=(n=JSON.parse(n)).length;t<i;++t){var r=n[t];r.cardId=r.card_id,r.cardExt=r.card_ext,r.isSuccess=!!r.is_succ,delete r.card_id,delete r.card_ext,delete r.is_succ}e.cardList=n,delete e.card_list}},e))},chooseCard:function(e){t("chooseCard",{app_id:C.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,i=[],r=0,o=n.length;r<o;++r){var a=n[r],c={card_id:a.cardId,code:a.code};i.push(c)}t(h.openCard,{card_list:i},e)},consumeAndShareCard:function(e){t(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){t(h.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){t(h.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){t(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){t(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){i(h.onSearchBeacons,e)},openEnterpriseChat:function(e){t("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){t("launchMiniProgram",{targetAppId:e.targetAppId,path:m(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},p((function(){t("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){p((function(){t("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){p((function(){t("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){p((function(){t("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){p((function(){t("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){p((function(){t("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){p((function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}},R=1,N={};return S.addEventListener("error",(function(e){if(!T){var n=e.target,t=n.tagName,i=n.src;if(("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var r=n["wx-id"];if(r||(r=R++,n["wx-id"]=r),N[r])return;N[r]=!0,wx.ready((function(){wx.getLocalImgData({localId:i,success:function(e){n.src=e.localData}})}))}}}),!0),S.addEventListener("load",(function(e){if(!T){var n=e.target,t=n.tagName;if(n.src,"IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var i=n["wx-id"];i&&(N[i]=!1)}}}),!0),n&&(e.wx=e.jWeixin=B),B}}))},5319:function(e,n,t){"use strict";var i=t("d784"),r=t("825a"),o=t("7b0b"),a=t("50c4"),c=t("a691"),s=t("1d80"),d=t("8aa5"),u=t("14c3"),l=Math.max,f=Math.min,p=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};i("replace",2,(function(e,n,t,i){var v=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,S=i.REPLACE_KEEPS_$0,I=v?"$":"$0";return[function(t,i){var r=s(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,r,i):n.call(String(r),t,i)},function(e,i){if(!v&&S||"string"===typeof i&&-1===i.indexOf(I)){var o=t(n,e,this,i);if(o.done)return o.value}var s=r(e),p=String(this),g="function"===typeof i;g||(i=String(i));var m=s.global;if(m){var y=s.unicode;s.lastIndex=0}var _=[];while(1){var k=u(s,p);if(null===k)break;if(_.push(k),!m)break;var x=String(k[0]);""===x&&(s.lastIndex=d(p,a(s.lastIndex),y))}for(var T="",b=0,M=0;M<_.length;M++){k=_[M];for(var A=String(k[0]),P=l(f(c(k.index),p.length),0),C=[],E=1;E<k.length;E++)C.push(h(k[E]));var V=k.groups;if(g){var O=[A].concat(C,P,p);void 0!==V&&O.push(V);var L=String(i.apply(void 0,O))}else L=w(A,p,P,C,V,i);P>=b&&(T+=p.slice(b,P)+L,b=P+A.length)}return T+p.slice(b)}];function w(e,t,i,r,a,c){var s=i+e.length,d=r.length,u=m;return void 0!==a&&(a=o(a),u=g),n.call(c,u,(function(n,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,i);case"'":return t.slice(s);case"<":c=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return n;if(u>d){var l=p(u/10);return 0===l?n:l<=d?void 0===r[l-1]?o.charAt(1):r[l-1]+o.charAt(1):n}c=r[u-1]}return void 0===c?"":c}))}}))},b47d:function(e,n,t){e.exports=t.p+"img/wx2.c1dd1eb0.png"},d2d5:function(e,n,t){"use strict";var i=t("08f8"),r=t.n(i);r.a},ed17:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"login flex column ac"},[i("div",{staticClass:"login-top"},[i("h3",[e._v("验证码登录")]),i("div",{staticClass:"form"},[i("div",{staticClass:"form-item"},[i("van-field",{attrs:{maxlength:"11",placeholder:"手机号",type:"tel",clearable:"","error-message":e.errorUser},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}})],1)]),i("van-button",{staticClass:"login-btn",attrs:{type:"default",color:"#E84114",block:"",round:""},on:{click:e.onSubmit}},[e._v("登录")]),i("div",{staticClass:"other text-center",on:{click:e.toAccount}},[e._v("密码登录")])],1),i("div",{staticClass:"btn flex column ac center"},[i("van-divider",{style:{color:"#666",borderColor:"#d8d8d8",padding:"0 16px",width:"5rem"}},[e._v("其他登录方式")]),i("img",{attrs:{src:t("b47d"),alt:""},on:{click:e.wxAuth}})],1)])},r=[],o=(t("ac1f"),t("5319"),t("96cf"),t("1da1")),a=(t("66b9"),t("b650")),c=(t("be7f"),t("565f")),s=(t("2b28"),t("9ed2")),d=t("2b0e"),u=t("365c"),l=t("2277");d["a"].use(s["a"]),d["a"].use(c["a"]),d["a"].use(a["a"]);var f=/^1[3-9]\d{9}$/,p={data:function(){return{username:"",errorUser:""}},created:function(){this.wxLogin()},methods:{onSubmit:function(){var e=this;if(this.username){if(!f.test(this.username))return void(this.errorUser="请输入正确的手机号");this.errorUser="";var n={mobile:this.username,scene:0};Object(u["q"])(n).then(function(){var n=Object(o["a"])(regeneratorRuntime.mark((function n(t){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.success&&e.$router.push("/login/code?mobile=".concat(e.username));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}else this.errorUser=this.username?"":"请输入手机号"},toAccount:function(){this.$router.replace("/login/account")},wxAuth:function(){var e=window.btoa(location.origin+this.$route.fullPath);Object(l["a"])(e)},wxLogin:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var t,i,r,o,a,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t=e.$route.query.code,!t){n.next=23;break}return n.next=5,Object(u["r"])({code:t});case 5:if(i=n.sent,!i.success){n.next=23;break}return r=i.data,o=r.openid,a=r.unionid,c={type:2,openid:o,unionid:a,login_platform:"h5"},n.next=12,Object(u["t"])(c);case 12:if(s=n.sent,!s.success){n.next=23;break}if(s.data.token){n.next=19;break}return e.$toast("该微信号未绑定相关账号，请使用手机号登录"),setTimeout((function(){e.$router.replace("/login/account")}),2e3),n.abrupt("return");case 19:localStorage.setItem("token",s.data.token),localStorage.setItem("user_id",s.data.user_id),localStorage.setItem("userInfo",JSON.stringify(s.data)),e.$router.replace("/home");case 23:case"end":return n.stop()}}),n)})))()}}},g=p,m=(t("d2d5"),t("2877")),h=Object(m["a"])(g,i,r,!1,null,"9aedb904",null);n["default"]=h.exports}}]);
//# sourceMappingURL=chunk-71035817.aea1df6db5b2ef9e4267.js.map