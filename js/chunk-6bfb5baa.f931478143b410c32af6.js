(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bfb5baa"],{2277:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));t("99af"),t("d3b7"),t("96cf"),t("1da1"),t("4fd3"),t("365c");var i=function(e){var n=window.btoa("".concat(location.origin,"/login")),t=e||n;location.href="".concat("https://interface.chinaaimo.cn/api/","/Wx/Auth?auth_type=1&b=").concat(t)}},"39be":function(e,n,t){"use strict";var i=t("6fc1"),o=t.n(i);o.a},"48f4":function(e,n,t){"use strict";function i(e,n){var t=n.to,i=n.url,o=n.replace;if(t&&e){var r=e[o?"replace":"push"](t);r&&r.catch&&r.catch((function(e){if(e&&"NavigationDuplicated"!==e.name)throw e}))}else i&&(o?location.replace(i):location.href=i)}function o(e){i(e.parent&&e.parent.$router,e.props)}t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return o})),t.d(n,"c",(function(){return r}));var r={url:String,replace:Boolean,to:[String,Object]}},"4fd3":function(e,n,t){var i;!function(o,r){"object"===typeof e.exports?e.exports=r(o):(i=(()=>r(o)).call(n,t,n,e),void 0===i||(e.exports=i))}(window,(function(e,n){function t(n,t,i){e.WeixinJSBridge?WeixinJSBridge.invoke(n,o(t),(function(e){c(n,e,i)})):u(n,i)}function i(n,t,i){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){i&&i.trigger&&i.trigger(e),c(n,e,t)})):u(n,i||t)}function o(e){return e=e||{},e.appId=A.appId,e.verifyAppId=A.appId,e.verifySignType="sha1",e.verifyTimestamp=A.timestamp+"",e.verifyNonceStr=A.nonceStr,e.verifySignature=A.signature,e}function r(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function a(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function c(e,n,t){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var i=n.errMsg;i||(i=n.err_msg,delete n.err_msg,i=s(e,i),n.errMsg=i),(t=t||{})._complete&&(t._complete(n),delete t._complete),i=n.errMsg||"",A.debug&&!t.isInnerInvoke&&alert(JSON.stringify(n));var o=i.indexOf(":");switch(i.substring(o+1)){case"ok":t.success&&t.success(n);break;case"cancel":t.cancel&&t.cancel(n);break;default:t.fail&&t.fail(n)}t.complete&&t.complete(n)}function s(e,n){var t=e,i=v[t];i&&(t=i);var o="ok";if(n){var r=n.indexOf(":");"confirm"==(o=n.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==t&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return t+":"+o}function d(e){if(e){for(var n=0,t=e.length;n<t;++n){var i=e[n],o=h[i];o&&(e[n]=o)}return e}}function u(e,n){if(!(!A.debug||n&&n.isInnerInvoke)){var t=v[e];t&&(e=t),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function l(e){if(!(_||w||A.debug||M<"6.0.2"||P.systemType<0)){var n=new Image;P.appId=A.appId,P.initTime=C.initEndTime-C.initStartTime,P.preVerifyTime=C.preVerifyEndTime-C.preVerifyStartTime,L.getNetworkType({isInnerInvoke:!0,success:function(e){P.networkType=e.networkType;var t="https://open.weixin.qq.com/sdk/report?v="+P.version+"&o="+P.isPreVerifyOk+"&s="+P.systemType+"&c="+P.clientVersion+"&a="+P.appId+"&n="+P.networkType+"&i="+P.initTime+"&p="+P.preVerifyTime+"&u="+P.url;n.src=t}})}}function f(){return(new Date).getTime()}function p(n){k&&(e.WeixinJSBridge?n():S.addEventListener&&S.addEventListener("WeixinJSBridgeReady",n,!1))}function g(){L.invoke||(L.invoke=function(n,t,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,o(t),i)},L.on=function(n,t){e.WeixinJSBridge&&WeixinJSBridge.on(n,t)})}function m(e){if("string"==typeof e&&e.length>0){var n=e.split("?")[0],t=e.split("?")[1];return n+=".html",void 0!==t?n+"?"+t:n}}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},v=function(){var e={};for(var n in h)e[h[n]]=n;return e}(),S=e.document,y=S.title,I=navigator.userAgent.toLowerCase(),b=navigator.platform.toLowerCase(),_=!(!b.match("mac")&&!b.match("win")),w=-1!=I.indexOf("wxdebugger"),k=-1!=I.indexOf("micromessenger"),x=-1!=I.indexOf("android"),T=-1!=I.indexOf("iphone")||-1!=I.indexOf("ipad"),M=function(){var e=I.match(/micromessenger\/(\d+\.\d+\.\d+)/)||I.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),C={initStartTime:f(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},P={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:T?1:x?2:-1,clientVersion:M,url:encodeURIComponent(location.href)},A={},O={_completes:[]},B={state:0,data:{}};p((function(){C.initEndTime=f()}));var E=!1,V=[],L={config:function(e){A=e,u("config",e);var n=!1!==A.check;p((function(){if(n)t(h.config,{verifyJsApiList:d(A.jsApiList)},function(){O._complete=function(e){C.preVerifyEndTime=f(),B.state=1,B.data=e},O.success=function(e){P.isPreVerifyOk=0},O.fail=function(e){O._fail?O._fail(e):B.state=-1};var e=O._completes;return e.push((function(){l()})),O.complete=function(n){for(var t=0,i=e.length;t<i;++t)e[t]();O._completes=[]},O}()),C.preVerifyStartTime=f();else{B.state=1;for(var e=O._completes,i=0,o=e.length;i<o;++i)e[i]();O._completes=[]}})),g()},ready:function(e){0!=B.state?e():(O._completes.push(e),!k&&A.debug&&e())},error:function(e){M<"6.0.2"||(-1==B.state?e(B.data):O._fail=e)},checkJsApi:function(e){var n=function(e){var n=e.checkResult;for(var t in n){var i=v[t];i&&(n[i]=n[t],delete n[t])}return e};t("checkJsApi",{jsApiList:d(e.jsApiList)},(e._complete=function(e){if(x){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=n(e)},e))},onMenuShareTimeline:function(e){i(h.onMenuShareTimeline,{complete:function(){t("shareTimeline",{title:e.title||y,desc:e.title||y,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){i(h.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?t("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):t("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){i(h.onMenuShareQQ,{complete:function(){t("shareQQ",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){i(h.onMenuShareWeibo,{complete:function(){t("shareWeiboApp",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){i(h.onMenuShareQZone,{complete:function(){t("shareQZone",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){t("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){t("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){t("startRecord",{},e)},stopRecord:function(e){t("stopRecord",{},e)},onVoiceRecordEnd:function(e){i("onVoiceRecordEnd",e)},playVoice:function(e){t("playVoice",{localId:e.localId},e)},pauseVoice:function(e){t("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){t("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){i("onVoicePlayEnd",e)},uploadVoice:function(e){t("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){t("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){t("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){t("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(x){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){t(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){t("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){t("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===E?(E=!0,t("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(E=!1,V.length>0){var n=V.shift();wx.getLocalImgData(n)}},e))):V.push(e)},getNetworkType:function(e){var n=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var t=e.subtype;if(delete e.subtype,t)e.networkType=t;else{var i=n.indexOf(":"),o=n.substring(i+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};t("getNetworkType",{},(e._complete=function(e){e=n(e)},e))},openLocation:function(e){t("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},t(h.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){t("hideOptionMenu",{},e)},showOptionMenu:function(e){t("showOptionMenu",{},e)},closeWindow:function(e){t("closeWindow",{},e=e||{})},hideMenuItems:function(e){t("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){t("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){t("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){t("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){t("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(T){var n=e.resultStr;if(n){var t=JSON.parse(n);e.resultStr=t&&t.scan_code&&t.scan_code.scan_result}}},e))},openAddress:function(e){t(h.openAddress,{},(e._complete=function(e){e=a(e)},e))},openProductSpecificView:function(e){t(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,i=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,card_ext:a.cardExt};i.push(c)}t(h.addCard,{card_list:i},(e._complete=function(e){var n=e.card_list;if(n){for(var t=0,i=(n=JSON.parse(n)).length;t<i;++t){var o=n[t];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))},chooseCard:function(e){t("chooseCard",{app_id:A.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,i=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,code:a.code};i.push(c)}t(h.openCard,{card_list:i},e)},consumeAndShareCard:function(e){t(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){t(h.chooseWXPay,r(e),e)},openEnterpriseRedPacket:function(e){t(h.openEnterpriseRedPacket,r(e),e)},startSearchBeacons:function(e){t(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){t(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){i(h.onSearchBeacons,e)},openEnterpriseChat:function(e){t("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){t("launchMiniProgram",{targetAppId:e.targetAppId,path:m(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},p((function(){t("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){p((function(){t("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){p((function(){t("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){p((function(){t("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){p((function(){t("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){p((function(){t("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){p((function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}},N=1,R={};return S.addEventListener("error",(function(e){if(!x){var n=e.target,t=n.tagName,i=n.src;if(("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=N++,n["wx-id"]=o),R[o])return;R[o]=!0,wx.ready((function(){wx.getLocalImgData({localId:i,success:function(e){n.src=e.localData}})}))}}}),!0),S.addEventListener("load",(function(e){if(!x){var n=e.target,t=n.tagName;if(n.src,"IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var i=n["wx-id"];i&&(R[i]=!1)}}}),!0),n&&(e.wx=e.jWeixin=L),L}}))},5319:function(e,n,t){"use strict";var i=t("d784"),o=t("825a"),r=t("7b0b"),a=t("50c4"),c=t("a691"),s=t("1d80"),d=t("8aa5"),u=t("14c3"),l=Math.max,f=Math.min,p=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};i("replace",2,(function(e,n,t,i){var v=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,S=i.REPLACE_KEEPS_$0,y=v?"$":"$0";return[function(t,i){var o=s(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,o,i):n.call(String(o),t,i)},function(e,i){if(!v&&S||"string"===typeof i&&-1===i.indexOf(y)){var r=t(n,e,this,i);if(r.done)return r.value}var s=o(e),p=String(this),g="function"===typeof i;g||(i=String(i));var m=s.global;if(m){var b=s.unicode;s.lastIndex=0}var _=[];while(1){var w=u(s,p);if(null===w)break;if(_.push(w),!m)break;var k=String(w[0]);""===k&&(s.lastIndex=d(p,a(s.lastIndex),b))}for(var x="",T=0,M=0;M<_.length;M++){w=_[M];for(var C=String(w[0]),P=l(f(c(w.index),p.length),0),A=[],O=1;O<w.length;O++)A.push(h(w[O]));var B=w.groups;if(g){var E=[C].concat(A,P,p);void 0!==B&&E.push(B);var V=String(i.apply(void 0,E))}else V=I(C,p,P,A,B,i);P>=T&&(x+=p.slice(T,P)+V,T=P+C.length)}return x+p.slice(T)}];function I(e,t,i,o,a,c){var s=i+e.length,d=o.length,u=m;return void 0!==a&&(a=r(a),u=g),n.call(c,u,(function(n,r){var c;switch(r.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,i);case"'":return t.slice(s);case"<":c=a[r.slice(1,-1)];break;default:var u=+r;if(0===u)return n;if(u>d){var l=p(u/10);return 0===l?n:l<=d?void 0===o[l-1]?r.charAt(1):o[l-1]+r.charAt(1):n}c=o[u-1]}return void 0===c?"":c}))}}))},"66b9":function(e,n,t){"use strict";t("68ef"),t("9d70"),t("3743"),t("e3b3"),t("bc1b")},"6fc1":function(e,n,t){},"9f2c":function(e,n,t){e.exports=t.p+"img/me.433fdfeb.png"},b1d2:function(e,n,t){"use strict";t.d(n,"g",(function(){return i})),t.d(n,"a",(function(){return o})),t.d(n,"d",(function(){return r})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return c})),t.d(n,"e",(function(){return s})),t.d(n,"f",(function(){return d}));var i="#fff",o="van-hairline",r=o+"--top",a=o+"--left",c=o+"--surround",s=o+"--top-bottom",d=o+"-unset--top-bottom"},b650:function(e,n,t){"use strict";var i=t("c31d"),o=t("2638"),r=t.n(o),a=t("d282"),c=t("ba31"),s=t("b1d2"),d=t("48f4"),u=t("ad06"),l=t("543e"),f=Object(a["a"])("button"),p=f[0],g=f[1];function m(e,n,t,i){var o,a=n.tag,f=n.icon,p=n.type,m=n.color,h=n.plain,v=n.disabled,S=n.loading,y=n.hairline,I=n.loadingText,b={};function _(e){S||v||(Object(c["a"])(i,"click",e),Object(d["a"])(i))}function w(e){Object(c["a"])(i,"touchstart",e)}m&&(b.color=h?m:s["g"],h||(b.background=m),-1!==m.indexOf("gradient")?b.border=0:b.borderColor=m);var k=[g([p,n.size,{plain:h,loading:S,disabled:v,hairline:y,block:n.block,round:n.round,square:n.square}]),(o={},o[s["c"]]=y,o)];function x(){var i,o=[];return S?o.push(e(l["a"],{class:g("loading"),attrs:{size:n.loadingSize,type:n.loadingType,color:"currentColor"}})):f&&o.push(e(u["a"],{attrs:{name:f,classPrefix:n.iconPrefix},class:g("icon")})),i=S?I:t.default?t.default():n.text,i&&o.push(e("span",{class:g("text")},[i])),o}return e(a,r()([{style:b,class:k,attrs:{type:n.nativeType,disabled:v},on:{click:_,touchstart:w}},Object(c["b"])(i)]),[x()])}m.props=Object(i["a"])({},d["c"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),n["a"]=p(m)},bc1b:function(e,n,t){},d723:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"mine-page flex column js"},[i("div",{staticClass:"item"},[i("div",{staticClass:"mine box flex ac"},[i("CustomImg",{staticClass:"portait",attrs:{width:"1.33rem",height:"1.33rem",src:e.list.head_pic,round:""}}),i("div",[i("div",{staticClass:"nickname flex ac"},[e._v(" "+e._s(e._f("longtext")(e.list.nickname))+" "),i("img",{attrs:{src:t("9f2c")}})]),i("div",{staticClass:"nums"},[e._v(e._s(e.list.mobile))])])],1),i("div",{staticClass:"bind"},[i("div",{staticClass:"box wx flex ac js",on:{click:function(n){return e.wxAuth(e.list.openid)}}},[i("div",[e._v("关联微信")]),i("div",{staticClass:"flex center"},[e._v(e._s(e.list.openid?"已绑定":"未绑定"))])]),e.isBind?e._e():i("span",{staticClass:"bind-tip"},[e._v("点击立即绑定")])])]),i("div",{staticClass:"btn box"},[i("van-button",{attrs:{type:"default",block:"",color:"#E84114",size:"large"},on:{click:e.logOut}},[e._v("退出登录")])],1)])},o=[],r=(t("ac1f"),t("5319"),t("96cf"),t("1da1")),a=(t("66b9"),t("b650")),c=t("2b0e"),s=t("365c"),d=t("2277");c["a"].use(a["a"]);var u={data:function(){return{list:{},isBind:!0}},created:function(){var e=this.$route.query.code;this.getUserInfo(),e&&this.wxLogin()},methods:{logOut:function(){localStorage.clear(),this.$router.replace("/login")},wxAuth:function(e){if(!e){var n=window.btoa(location.origin+this.$route.path);Object(d["a"])(n)}},getUserInfo:function(){var e=this;Object(s["p"])({login_platform:"h5"}).then((function(n){if(n.success){e.list=n.data,e.isBind=!!n.data.openid;var t=JSON.stringify(n.data);localStorage.setItem("userInfo",t),localStorage.setItem("token",n.data.token),localStorage.setItem("user_id",n.data.user_id)}}))},wxLogin:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var t,i,o,r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t=e.$route.query.code,!t){n.next=11;break}return n.next=4,Object(s["r"])({code:t});case 4:if(i=n.sent,!i.success){n.next=11;break}return o=i.data,r=o.openid,a=o.unionid,n.next=9,Object(s["c"])({openid:r,unionid:a});case 9:c=n.sent,c.success&&(e.$toast("绑定成功"),e.getUserInfo());case 11:case"end":return n.stop()}}),n)})))()}}},l=u,f=(t("39be"),t("2877")),p=Object(f["a"])(l,i,o,!1,null,"5558e676",null);n["default"]=p.exports}}]);
//# sourceMappingURL=chunk-6bfb5baa.f931478143b410c32af6.js.map