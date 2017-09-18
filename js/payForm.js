app.initialize(function(){
    window.StatusBar.styleLightContent();
});

var session = getCookie('session');
var trxid = getCookie('trxid');

//交易详情 着陆列表
var List = {
    trxtypeamt : $('#trxtypeamt-detail'),
    trxamt : $('#trxamt-detail'),
    trxtype : $('#trxtype-detail'),
    trxusername : $('#trxusername-detail'),
    trxdate : $('#trxdate-detail'),
    trxid : $('#trxid-detail'),
    trxbalance : $('#trxbalance-detail'),
    trxcomment : $('#trxcomment-detail'),
    trxremark : $('#trxremark-detail'),
}

getTrxDetail(function(data){
    if(data.status == 'ok'){

        List.trxtypeamt.text(data.memberTrxDetail['type']===1?"收款金额":"出账金额");
        List.trxamt.text(data.memberTrxDetail['amount']);
        List.trxtype.text(data.memberTrxDetail['type']===1?"存入":"支出");
        List.trxusername.text(data.memberTrxDetail['type']===2?data.memberTrxDetail['frommemberusername']:data.memberTrxDetail['tomemberusername']);
        List.trxdate.text(data.memberTrxDetail['created']);
        List.trxid.text(data.memberTrxDetail['id']);
        List.trxbalance.text(data.memberTrxDetail['balance']);
        List.trxcomment.text(data.memberTrxDetail['comment']);
        List.trxremark.text(data.memberTrxDetail['remark']);
    }
})

/***
 * 获取用户信息
 */
function getTrxDetail(cb){
    postFetch({
        hostname:'http://pgmember.stargt.com.my/api.php',
        service:'member',
        action:'memberTrxList',
        params:{
            method:'getMemberTrxDetail',
            id:trxid,
            session:session,
        },
        success:cb
    })
}
