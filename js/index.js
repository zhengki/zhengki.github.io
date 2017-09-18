app.initialize(function(){
    window.StatusBar.styleLightContent();
})

var session = getCookie('session');

$('#scan').on('touchstart',function(){
    window.QRScanner.prepare(onDone); // show the prompt
})
$('#qrCode').on('touchstart',function(){
    window.location.href='collections.html'
})

$('#wallet').on('touchstart',function(){
    window.location.href='payList.html'
})

$('#profile').on('touchstart',function(){
    window.location.href='profile.html'
})

$('.navigation-right').on('touchend',function(){
    if(maskBol){return}
    // $('.userInfo').toggleClass('userInfoToggleShow');
    $('#homeActionsheet').toggleClass('weui-actionsheet_toggle');
    maskShow(300);
})
$('#mask').on('touchend',function(){
    if(maskBol){return}
    // $('.userInfo').toggleClass('userInfoToggleShow');
    $('#homeActionsheet').toggleClass('weui-actionsheet_toggle');
    maskHide(300);
})
$('#cancelhomeActionsheet').on('touchend',function(){
    if(maskBol){return}
    // $('.userInfo').toggleClass('userInfoToggleShow');
    $('#homeActionsheet').toggleClass('weui-actionsheet_toggle');
    maskHide(300);
})


function onDone(err, status){
    if (err) {
        // here we can handle errors and clean up any loose ends.
        console.error(err);
    }
    if (status.authorized) {
    	window.location.href='scan.html'
        // W00t, you have camera access and the scanner is initialized.
        // QRscanner.show() should feel very fast.
    } else if (status.denied) {
        // The video preview will remain black, and scanning is disabled. We can
        // try to ask the user to change their mind, but we'll have to send them
        // to their device settings with `QRScanner.openSettings()`.
    } else {
        // we didn't get permission, but we didn't get permanently denied. (On
        // Android, a denial isn't permanent unless the user checks the "Don't
        // ask again" box.) We can ask again at the next relevant opportunity.
    }
}

/***
 * 每5 秒更新用户余额一次
 */
getBalance(function(data){
    if(data.status == 'ok'){
        $('#balance').text(data.balance);
    }
})

setInterval(function() {
    getBalance(function(data) {
        if (data.status == 'ok') {
            $('#balance').text(data.balance);
        }
    })
}, 5000)

/***
 * 更新用户余额
 */
function getBalance(cb){
    postFetch({
        hostname:'http://pgmember.stargt.com.my/api.php',
        service:'member',
        action:'profile',
        params:{
            method:'getBalance',
            session:session,
        },
        success:cb
    })
}