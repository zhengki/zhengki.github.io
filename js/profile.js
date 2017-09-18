


var loadingToast = null;

//验证码
var vcode_timer = null;
var vcode_timer__bol = false;
var vcode_times = 60;

var cancelChange = $('.cancelChange');

var completeChange = $('.complete');

//上传头像
var setBtn = $('.setBtn');
var cancelBtn = $('#cancelBtn');

//profile 着陆列表
var List = {
    avatar : $('#avatar-list'),
    nickname : $('#nickname-list'),
    gender : $('#gender-list'),
    mobile : $('#mobile-list'),
    email : $('#email-list'),
    password : $('#password-list'),
}

//profile 着陆内容容器
var List_val = {
    avatar: List.avatar.find('.avatar'),
    nickname: List.nickname.find('.weui-cell__ft'),
    gender: List.gender.find('.weui-cell__ft'),
    mobile: List.mobile.find('.weui-cell__ft'),
    email: List.email.find('.weui-cell__ft'),
    password:List.password.find('.weui-cell__ft')
}

//profile 修改包裹层
var List_wrap = {
    land: $('#land-wrap'),
    avatar : $('#avatar-wrap'),
    nickname : $('#nickname-wrap'),
    gender : $('#gender-wrap'),
    mobile : $('#mobile-wrap'),
    email : $('#email-wrap'),
    password : $('#password-wrap')
};

var actionWrap = List_wrap.land;

function resetVcodeTimer(){
    clearInterval(vcode_timer);
    vcode_timer = null;
    vcode_timer__bol = false;
    vcode_times = 5;
}


//截图初始化
var pc = new PhotoClip('#set-avatar-box', {
    size:300,
    outputSize: 640,
    // adaptive: ['85%'],
    file: '.file-hidden',
    view: '',
    ok: '#clipBtn',
    lrzOption:{
        width:300
    },
    //裁剪图片的url地址,加载的图片必须要与本程序同源，如果图片跨域，则无法截图
    img: 'img/default-avatar.jpg',
    loadStart: function() {
        console.log('开始读取照片');
    },
    loadComplete: function() {
        console.log('照片读取完成');
    },
    done: function(dataURL) {
        //成功截图  base 64 处理回调
        $('.avatar-box').css('display','block');
        $('#avatar-wrap .navigation').css('display','flex');
        $('#avatar-img')[0].src = dataURL;
        $('.set-page').css('display','none');
    },
    fail: function(msg) {
        //截图失败
        alert(msg);
    }
});

// 加载的图片必须要与本程序同源，否则无法截图
// pc.load('img/default-avatar.jpg');


//取消截图
cancelBtn.on('touchstart',function () {
    $('.set-page').css('display','none');
    $('.avatar-box').css('display','block');
    $('#avatar-wrap .navigation').css('display','flex');
});

//设置头像
setBtn.on('touchstart',function (e) {
    e.preventDefault();
    weui.actionSheet([
        {
            label: '从手机相册选择',
            onClick: function () {
                $('.file-hidden')[0].click();
                $('.avatar-box').css('display','none');
                $('#avatar-wrap .navigation').css('display','none');
                $('.set-page').css('display','block');
            }
        }
    ], [
        {
            label: '取消',
            onClick: function () {
                console.log('取消');
            }
        }
    ], {
        className: 'custom-classname'
    });
});

cancelChange.on('touchstart',function(){
    resetVcodeTimer()
    var wrap = $(this).parent().parent();
    wrap.hide();
    actionWrap = List_wrap.land;
    actionWrap.show();
})

completeChange.on('touchstart',function(){
    var wrap = $(this).parent().parent();
    var wrapName = wrap.attr('wrap');
    loadingToast = weui.loading('更新中...',{
        className:'top-toast'
    });
    switch (wrapName){
        case 'avatar':
            updateAvatar('123');
            break;
        case 'nickname':
            var nickname = $('#set_nickname').val()
            updateInfo(
                {nickname:nickname},
                function(data){
                    loadingToast.hide();
                    loadingToast = null;
                    if(data.status=='ok'){
                        weui.toast('更新成功', {
                            duration: 1500,
                            className: 'top-toast',
                            callback: function(){
                                actionWrap.hide();
                                actionWrap = List_wrap.land;
                                actionWrap.show();
                            }
                        });
                        List_val.nickname.text(nickname);
                    }else{
                        weui.alert('网络问题请重试。。。')
                        console.log(data)
                    }
                }
                );
            console.log('nickname');break;
        case 'gender':
            var gender = $("#gender-wrap input[type='radio']:checked").val();
            updateInfo(
                {gender:gender},
                function(data){
                    loadingToast.hide();
                    loadingToast = null;
                    if(data.status=='ok'){
                        List_val.gender.text(gender == 0 ? '男' : '女');
                        weui.toast('更新成功', {
                            duration: 1500,
                            className: 'top-toast',
                            callback: function(){
                                actionWrap.hide();
                                actionWrap = List_wrap.land;
                                actionWrap.show();
                            }
                        });
                    }else{
                        weui.alert('网络问题请重试。。。')
                        console.log(data)
                    }
                }
                );
            console.log('gender');break;
        case 'mobile':
            var mobile = $('#set_mobile').val().trim();
            var code=$('#mobile_code').val().trim();
            if(code == ''){
                weui.alert('请输入验证码')
                return
            }
            updateMobile({
                    mobile:mobile,
                    code:code
                }, function(data){
                    loadingToast.hide();
                    loadingToast = null;
                    if(data.status =='ok'){
                        resetVcodeTimer()
                        List_val.mobile.text(mobile);
                        weui.toast('更新成功', {
                            duration: 1500,
                            className: 'top-toast',
                            callback: function(){
                                actionWrap.hide();
                                actionWrap = List_wrap.land;
                                actionWrap.show();
                            }
                        });
                    }else{
                        weui.alert('网络问题请重试。。。')
                        console.log(data)
                    }
                }
                );
            console.log('mobile');break;
        case 'email':
            var email = $('#set_email').val();
            var code=$('#email_code').val().trim();
            if(code == ''){
                weui.alert('请输入验证码')
                return
            }
            updateEmail({
                email:email,
                code:code
            },function(data){
                loadingToast.hide();
                loadingToast = null;
                if(data.status =='ok'){
                    resetVcodeTimer();
                    List_val.email.text(mobile);
                    weui.toast('更新成功', {
                        duration: 1500,
                        className: 'top-toast',
                        callback: function(){
                            actionWrap.hide();
                            actionWrap = List_wrap.land;
                            actionWrap.show();
                        }
                    });
                }else{
                    weui.alert('网络问题请重试。。。')
                    console.log(data)
                }
            });
            console.log('email');break;
        case 'password':
            updatePassword({
                oldpass:$('#set_oldpass').val(),
                newpass1:$('#set_newpass1').val(),
                newpass2:$('#set_newpass2').val()
            },function(data){
                loadingToast.hide();
                loadingToast = null;
                if(data.status =='ok'){
                    weui.toast('更新成功', {
                        duration: 1500,
                        className: 'top-toast',
                        callback: function(){
                            actionWrap.hide();
                            actionWrap = List_wrap.land;
                            actionWrap.show();
                        }
                    });
                }else{
                    weui.alert('网络问题请重试。。。');
                    console.log(data)
                }
            });
            console.log('password');break;
        default:
            console.log('not match any wrap');return
    }
})

for(item in List){
    (function(item){
        List[item].on('touchstart',function(){
            List_wrap.land.hide();
            actionWrap = List_wrap[item];
            actionWrap.show();
        })
    })(item)
}



/***
 * 获取用户信息
 */

/***
 * 更新用户头像
 */


/***
 * 更新用户名，性别
 */

/***
 * 更新手机号
 */
function updateMobile(data,cb){
    postFetch({
        hostname:'http://pgmember.stargt.com.my/api.php',
        service:'member',
        action:'profile',
        params:{
            session:session,
            method:'updateMobile',
            mobile:data.mobile,
            vcode:data.vcode
        },
        success:function(data){
            console.log(data);
            cb && cb(data)
        }
    })
}

/***
 * 更新邮件
 */



//获取验证码
$('.weui-vcode-btn').on('touchstart',function(){
    if(vcode_timer__bol){return}
    vcode_timer__bol = true
    var times = vcode_times;
    $(this).css({color:'gray'}).text( times + '秒');
    vcode_timer = setInterval(function(btn){
        btn.text( --times + '秒');
        if(times == 0){
            resetVcodeTimer()
            btn.css({color:'#3CC51F'}).text('获取验证码');;
            vcode_timer__bol = false
        }
    },1000,$(this))
})