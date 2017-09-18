var storage = window.localStorage;
var thisLanguage = 'app1';
var language = getStorage('language') || 'app1';
var app = {
    initialize: function(cb) {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this,cb), false);
    },
    onDeviceReady: function(cb) {
        // 如果是苹果系列，隐藏所有退出按钮
 		if(ismobile() == 'iphone'){
        	$('.exitApp').hide();
        }else{
        	$('.exitApp').on('touchstart',function(){
            	navigator.app.exitApp();
        	})
        }
        
        console.log('device is ready');
        cb&&cb();
    }
};

var storage = window.localStorage;
var language = getStorage('language') || 'app1';

if(language != 'app1'){
    window.location.replace(window.location.href.toString().replace(/\/app1\//,'/'+language+'/'));
}

var maskBol = false;

$('.goback').on('touchstart',function(){
    history.back()
})

$('.setLanguage').on('click',function(){
    // 单列picker
    weui.picker([
        {
            label: '中文',
            value: 'app1'
        },
        {
            label: 'Malaysia',
            value: 'ms'
        },
        {
            label: 'English',
            value: 'en'
        }
    ], {
        defaultValue:[language],
        className: 'language_picker',
        onChange: function (result) {
            // console.log(result)
        },
        onConfirm: function (result) {
            var pick = result[0];
            var reg = new RegExp('/'+language+'/');
            var newHref = window.location.href.toString().replace(reg,'/'+pick+'/');
            setStorage('language',pick)
            window.location.replace(newHref);
        },
        id: 'languagePicker'
    });
})

function createPubKey(L){
    var s= '';
    var randomchar=function(){
        var n= Math.floor(Math.random()*62);
        if(n<10) return n; //1-10
        if(n<36) return String.fromCharCode(n+55); //A-Z
        return String.fromCharCode(n+61); //a-z
    }
    while(s.length< L) s+= randomchar();
    return s;
}

function ismobile(){
    var u = navigator.userAgent, app = navigator.appVersion;
    if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
        if(window.location.href.indexOf("?mobile")<0){
            try{
                if(/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)){
                    return 'iphone';
                }else{
                    return 'android';
                }
            }catch(e){}
        }
    }else if( u.indexOf('iPad') > -1){
        return 'iphone';
    }else{
        return 'android';
    }
};

/***
 * 接口请求api
 * @param obj.hostname str
 * @param obj.service  str
 * @param obj.action   str
 * @param obj.params   json
 * obj.service & obj.action set in http header
 */
function postFetch(obj){
    $.ajax({
        url:obj.hostname,
        type:'POST',
        cache:'false',
        dataType:'json',
        data:obj.params,
        headers:{
            service:obj.service,
            action:obj.action
        },
        success:function(data){
            try{
                obj.success(data)
            }catch (e){
                alert('请求成功的回调函数有问题');
            }
        },
        error:function(data){
            try{
                obj.fail && obj.fail(data)
            }catch (e){
                alert('请求失败的回调函数有问题');
            }

        }
    })
}

function maskShow(time){
    maskBol = true
    var time = time ? time : 300;
    console.log(time)
    $('#mask').fadeIn(time)
    setTimeout(function(){
        maskBol = false
    },time+100)
}

function maskHide(time){
    maskBol = true
    var time = time ? time : 300;
    $('#mask').fadeOut(time)
    setTimeout(function(){
        maskBol = false
    },time+100)
}

function getStorage(key){
    return storage.getItem(key);
}
function setStorage(key,value){
    storage.setItem(key, value)
}
function removeItem(key){
    if(getStorage(key)){
        storage.removeItem(key)
    }else{
        return
    }
}

function setCookie(name,value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

$('.exitAccount').on('touchstart',function(){
    delCookie('session')
    window.location.href='login.html';
})

$('.currency').text(getCookie('currency'));
