app.initialize(function(){
    window.StatusBar.styleLightContent();
});

var session = getCookie('session');

var touchmoved;
$('.transaction').on('touchend','.trxid',function(){
    if(touchmoved !== true) {
        setCookie('trxid', $(this).attr('id'));
        window.location.href = 'payForm.html'
    }
}).on('touchmove', function(){
    touchmoved = true;
}).on('touchstart', function(){
    touchmoved = false;
});

getTransaction(function(data){
    if(data.status == 'ok'){
        var child;
        var trxtype;
        var trxusername;
        var trxdate;
        var trxamt;
        var trxcomment;
        var trxremark;
        var trxid;
        $.each(data.memberTrx, function(index, value){
            trxtype = value['type']===2?'出款':'收款';
            trxusername = value['type']===1?'出款者('+value['tousername']+')':'收款者('+value['fromusername']+')';
            trxdate = value['created'];
            trxamt = value['amount'];
            trxcomment = '收款者备注:'+value['comment'];
            trxremark = '出款者备注:'+value['remark'];
            trxid = value['id'];
            child = '' +
                '<div class="weui-cell trxid" id='+trxid+'>' +
                '   <div class="weui-cell__bd">' +
                '       <p class="pay_type">'+trxtype+'</p>' +
                '       <p class="pay_username">'+trxusername+'</p>' +
                '       <p class="pay_time">'+trxdate+'</p>' +
                '       <p class="pay_comment">'+trxcomment+'</p>' +
                '       <p class="pay_remark">'+trxremark+'</p>' +
                '   </div>' +
                '   <div class="weui-cell__ft">'+trxamt+'</div>' +
                '</div>';
            $('.transaction').append(child);
        });
    }
})

/***
 * 获取交易记录
 */
function getTransaction(cb){
    postFetch({
        hostname:'http://pgmember.stargt.com.my/api.php',
        service:'member',
        action:'memberTrxList',
        params:{
            method:'getMemberTrx',
            page:1,
            session:session,
        },
        success:cb
    })
}