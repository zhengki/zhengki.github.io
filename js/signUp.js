app.initialize(function(){
    window.StatusBar.styleDefault();
});

var loadingToast; //加载提示

var signUpWrap = $('#signUpWrap');          //注册页面
var getPhone = $('#getPhone');              //输入的电话号码
var phone_val;                              //电话号码
var signUpBtn = $('#signUpBtn button');     //注册按钮

var goSignUp = $('#goSignUp');              //返回注册页
var submitWrap = $('#submitWrap');          //提交注册页
var phone = $('#phone');                    //只读的电话号码
var username = $('#username');              //用户名
var password = $('#password');              //密码
var vcode  = $('#vcode');                   //验证码
var submitBtn = $('#submitBtn button');     //提交按钮
var signText = $('.sign-text');             //倒计时提示区
var signLink = $('.sign-link');             //收不到验证码提示文本
var timeTips = signText.find('span');       //短信倒计时视图更新
var timer = null;                           //验证码读秒提示定时器
var times = 60;                             // 设置倒计时时长

//第一步验证手机号码，并发送短信验证码
getPhone.on('input',function(){
    phone_val = getPhone.val().trim();
    if(phone_val.length>0){
        signUpBtn.removeClass('weui-btn_disabled')
    }else{
        signUpBtn.addClass('weui-btn_disabled')
    }
})
//注册按钮
signUpBtn.on('touchend',function(){
    // 如果可以点击
    if(!$(this).is('.weui-btn_disabled')){
        weui.confirm('我们将发送验证码短信到这个号码：\n\r'+phone_val, {
            title: '确认手机号码',
            buttons: [{
                label: '取消',
                type: 'default',
                onClick: function(){ console.log('cancel') }
            }, {
                label: '好',
                type: 'primary',
                onClick: function(){
                    console.log('agree')
                    loadingToast = weui.loading('正在发送...',{
                        className:'top-toast'
                    });
                    //请求注册接口
                    fetchVcode(function(data){
                        loadingToast.hide();
                        loadingToast = null;
                        if(data.code =='registered_mobile'){
                            weui.alert('该手机号已注册过了');
                            return;
                        }
                        phone.val(phone_val);
                        signUpWrap.hide();
                        submitWrap.show();
                        submitTime()
                    });
                }
            }]
        });

    }
})
// 请求短信验证码
function fetchVcode(cb){
    postFetch({
        hostname:'http://pgmember.stargt.com.my/api.php',
        service:'member',
        action:'register',
        params:{
            method:'register',
            mobile:phone_val,
        },
        success:function(data){
            cb && cb(data)
            console.log(data);
        }
    })
}

//-----------------------------------------------------------
//第二步，提交验证码和密码

//返回键
goSignUp.on('touchend',function(){
    weui.confirm('验证码短信可能略有延迟，确定返回并重新开始', {
        buttons: [{
            label: '等待',
            type: 'primay',
            onClick: function(){ console.log('wating') }
        }, {
            label: '返回',
            type: 'default',
            onClick: function(){
                console.log('turn to signUp')
                signUpWrap.show();
                submitWrap.hide();
                clearInterval(timer);
                timer = null;
            }
        }]
    });
})
// 提交用户信息
submitBtn.on('touchend',function(){
    loadingToast = weui.loading('请稍后...',{
        className:'top-toast'
    });
    postFetch({
        hostname:'http://pgmember.stargt.com.my/api.php',
        service:'member',
        action:'register',
        params:{
            method:'verify',
            mobile:phone_val,
            code:vcode.val(),
            username:username.val(),
            password:sha1(password.val())
        },
        success:function(data){
            loadingToast.hide();
            loadingToast = null;
            if(data.status == 'error'){
                if(data.code == 'invalid_code'){
                    weui.alert('验证码错误，请重新输入')
                }else if(data.code == 'registered_username'){
                    weui.alert('用户名重复，请重新输入')
                }
            }else{
                weui.toast('注册成功', {
                    duration: 1500,
                    className: 'top-toast',
                    callback: function(){
                        console.log('signUp success');
                        window.location.href='index.html'
                    }
                });
            }

            console.log(data);
        }
    })
})

$('.signUpForm').on('input','input',function(){
    var vcode_val = vcode.val().trim();
    var nick_val = username.val().trim();
    var pass_val = password.val().trim();
    if((vcode_val.length>0 && nick_val.length>0)&&pass_val.length>0){
        submitBtn.removeClass('weui-btn_disabled')
    }else{
        submitBtn.addClass('weui-btn_disabled')
    }
})


signLink.on('touchstart',function(){
    if(maskBol){return}
    $('#vcodeActionsheet').toggleClass('weui-actionsheet_toggle');
    maskShow(300);
})
$('#mask').on('touchstart',function(){
    if(maskBol){return}
    $('#vcodeActionsheet').toggleClass('weui-actionsheet_toggle');
    maskHide(300);
})
$('#resendVcode').on('touchstart',function(){
    if(maskBol){return}
    $('#vcodeActionsheet').toggleClass('weui-actionsheet_toggle');
    maskHide(300);
    loadingToast = weui.loading('请稍后...',{
        className:'top-toast'
    });
    fetchVcode(function(){
        loadingToast.hide();
        loadingToast = null;
    })
})
$('#cancelVcodePanel').on('touchstart',function(){
    if(maskBol){return}
    $('#vcodeActionsheet').toggleClass('weui-actionsheet_toggle');
    maskHide(300);
})

function submitTime(){
    var timeNumber = times
    timeTips.html(timeNumber);
    timer = setInterval(function(){
        timeTips.html(--timeNumber);
        if(timeNumber == 0){
            clearInterval(timer);
            timer = null;
            signText.hide();
            signLink.show();
            console.log('do not get vcode')
        }
    },1000)
}
