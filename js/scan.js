app.initialize(function(){
    window.StatusBar.styleLightContent();
    window.QRScanner.show();
    window.QRScanner.scan(displayContents);
})

var scanInfo;
var reg = /^app:\/\//;
var service;
var action;



function displayContents(err, text){
    if(err){
        // an error occurred, or the scan was canceled (error code `6`)
    } else {
        // The scan completed, display the contents of the QR code:
        if(reg.test(text)){
            scanInfo = text.slice(6).split('/');
            service = scanInfo[0];
            action = scanInfo[1];
            setCookie('json',scanInfo[2]);
            if(action == 'transfer'){
                window.location.href='transfer.html'
            }
        }
    }
}

// Make the webview transparent so the video preview is visible behind it.
