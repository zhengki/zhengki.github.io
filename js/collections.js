app.initialize(function(){
    window.StatusBar.styleLightContent();
});

var qrCode = $('#generalQR');
var amount = $('#amount');
var comfirmAmount = $('#comfirmAmount');
var money = '';
var comment='';
var loadingToast; //加载提示


getGeneralQR({},function(data){
    if(data.status=='ok'){
        qrCode.attr('src','data:image/png;base64,'+data.qr)
    }else{
        console.log('获取普通二维码失败')
    }
})


amount.on('input',function(){
    var amount_val = amount.val().trim();
    if(amount_val.length>0){
        comfirmAmount.removeClass('weui-btn_disabled')
    }else{
        comfirmAmount.addClass('weui-btn_disabled')
    }
})

$(".content").on('touchstart',".set-amount",function () {
    if(money!=''){
        money='';
        var obj = {};
        if(money!=''){obj.amount=money};
        if(comment!=''){obj.comment=comment};
        $('#amount-info strong').text(money);
        $('.set-amount a').text('设置金额');
        $('#amount-info').css('opacity',0);
        getGeneralQR(obj,function(data){
            if(data.status=='ok'){
                qrCode.attr('src','data:image/png;base64,'+data.qr)
            }else{
                console.log('获取普通二维码失败')
            }
        })
    }else{
        $(".set-amount-page").show()
    }
});


comfirmAmount.on('touchend',function(){
    // 如果可以点击的是否触发
    if(!$(this).is('.weui-btn_disabled')){
        money = ($('#amount').val()*100/100).toFixed(2)
        $('#amount').val('')
        var obj = {};
        if(money!=''){obj.amount=money};
        if(comment!=''){obj.comment=comment};
        $('#amount-info').css('opacity',1);
        $('.set-amount a').text('清除金额');
        $('#amount-info strong').text(money);
        loadingToast = weui.loading('加载中...',{
            className:'top-toast'
        });
        getGeneralQR(obj,function(data){
            if(data.status=='ok'){
                $(".set-amount-page").hide();
                loadingToast.hide();
                loadingToast = null;
                qrCode.attr('src','data:image/png;base64,'+data.qr)
            }else{
                console.log('获取普通二维码失败')
            }
        })
    }
})

$(".amount-nav .turnQRcode").on("touchstart",function () {
    $('#amount').val('')
    $(".set-amount-page").hide()
});
$(".remark a").on("touchstart",function () {
    $('.comment-alert').show();

})
$('#cancelComment').on('touchstart',function(){
    $('.comment-alert').hide();
    $('#comment').val('')
})
$('#confirmComment').on('touchstart',function(){
    if($('#comment').val().trim()==''){
        $(".remark a").html('添加收钱备注')
    }
    comment = $('#comment').val()
    $('.comment-alert').hide();
    $(".remark a").html(comment+'<span>修改</span>')
})

function getGeneralQR(data,cb){
    var params = data;
    params.session  = getCookie('session');
    params.method = 'receive';
    postFetch({
        hostname:'http://pgmember.stargt.com.my/api.php',
        service:'member',
        action:'QRCode',
        params:params,
        success:function(data){
            console.log(data);
            cb && cb(data)
        }
    })
}