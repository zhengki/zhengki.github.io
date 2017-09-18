app.initialize(function() {
    window.StatusBar.styleLightContent();
})

$('.testInfo').text(getCookie('json'));
var loadingToast = null;


var json = JSON.parse(getCookie('json'));

var enterAmount = $('#enterAmount');
var comfirmAmount = $('#comfirmAmount');
var pay_pass = '';
var amount = json.amount==undefined ? '' : json.amount.toString();

var comfirm_btn = null;


if(amount){
    $('#amout_number').text(amount);
    comfirmAmount.show();
}else{
    enterAmount.show();
}

//--------------------------------------
//如果没有金额
//--------------------------------------
$('#enterPay').on('touchstart', function(){
    comfirm_btn = $(this)
    enterPay()
})



//--------------------------------------
//如果有金额
//--------------------------------------
$('#comfirmPay').on('touchstart', function(){
    comfirm_btn = $(this)
    enterPay()
})

function enterPay(){
    var remark;
    var pay_amount;
    if(amount==undefined || amount==''){
        pay_amount = $('#amount').val().trim()
    }else{
        pay_amount = amount
    }
    if(pay_amount.length>0){
        json.amount = pay_amount;
        json.session = getCookie('session');
        json.password = '';
        if(pay_pass!=''){json.password=pay_pass}
        switch (comfirm_btn.attr('id')){
            case 'enterPay':
                remark = $('.remark').eq(0).val();
                break;
            case 'comfirmPay':
                remark = $('.remark').eq(1).val();
                break;
            default:
                break
        }
        remark.length>0 ? json.remark=remark : null;
        postFetch({
            hostname:'http://pgmember.stargt.com.my/api.php',
            service:'member',
            action:'transfer',
            params:json,
            success:function(data){
                if(data.status == 'ok'){
                    weui.alert('转账成功',function(){
                        window.location.href='index.html'
                    });
                }else{
                    if(data.code=='amount_invalid'){
                        pay_amount='';
                        $('#amount').val('')
                        weui.alert('金额不能小于等于0')
                    }else if(data.error=='insufficient_fund' || data.code =='insufficient_fund'){
                        weui.alert('您的账户余额不足')
                    }else if(data.code=='password_invalid'){
                        weui.alert('支付密码错误');
                        pay_pass = '';
                        $('#enterPayPass').val('');
                    }else if(data.code=='password_required') {
                        $('.PayPass-alert').show();
                    }
                }
            },
            fail:function(error){
                alert(error)
            }
        })
    }else{
        weui.alert('请输入转账金额')
    }
}

$('.cancelPay').on('touchstart',function(){
    window.location.href='index.html';
})

$('#cancelPayPass').on('touchstart',function(){
    pay_pass = '';
    $('.PayPass-alert').hide();
})

$('#confirmPayPass').on('touchstart',function(){
    pay_pass = sha1($('#enterPayPass').val());
    enterPay();
})