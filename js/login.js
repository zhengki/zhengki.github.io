app.initialize(function(){
    window.StatusBar.styleDefault();
});

var loadingToast; //加载提示
var signForm = $('.signForm');
var username = $('#username');
var pass = $('#password');
var loginBtn = $('#loginBtn button');

$('.signTipsLeft').on('touchstart',function(){
    alert('找回密码')
})

signForm.on('input','input',function(){
    var username_val = username.val().trim();
    var pass_val = pass.val().trim();
    if(username_val.length>0 && pass_val.length>0){
        loginBtn.removeClass('weui-btn_disabled')
    }else{
        loginBtn.addClass('weui-btn_disabled')
    }
})


loginBtn.on('touchend',function(){
    // 如果可以点击的是否触发
    if(!$(this).is('.weui-btn_disabled')){
        loadingToast = weui.loading('请稍后...',{
            className:'top-toast'
        });
        handleLogin(function(data){
            setCookie('session',data.session);
            setCookie('currency',data.currency);
            window.location.replace('index.html');
        })
    }
})

function handleLogin(cb){
    // 进行正则等判断
    var pubkey = createPubKey(40)
    postFetch({
        hostname:'http://pgmember.stargt.com.my/api.php',
        service:'member',
        action:'login',
        params:{
            method:'login',
            pubkey:pubkey,
            username:username.val(),
            password:sha1( username.val() + sha1(pass.val()) + pubkey )
        },
        success:function(data){
            loadingToast.hide();
            loadingToast = null;
            if(data.status == 'ok'){
                cb && cb(data)
            }else{
                weui.alert('用户名或者密码输入错误')
            }
        }
    })
}