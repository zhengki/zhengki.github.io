; (function (w, CryptoJS) {
    'use strict';
    var encryModel = {};
    //加密
    encryModel.encryptCrypto = function encryptPwd(password) {
        var _salt = "!@#ZDVT*()QWER$%^BNM",
            _key = "G#$%^1234MasWQlZ";

        var pwd = CryptoJS.enc.Utf8.parse(password + _salt),
            key = CryptoJS.enc.Utf8.parse(_key);
		

        var hash = CryptoJS.SHA256(password + _salt).toString();

        var encryptedPwd = CryptoJS.AES.encrypt(hash, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
		console.log(encryptedPwd.toString());
        return encryptedPwd.toString();
    }
    w.encryModel = encryModel;
})(window, CryptoJS);