;(function (w, config, $) {
	'use strict';
	var model = {};
//	model.rootUrl = "http://120.25.100.122:8003/";

//    model.rootUrl = "http://test.dygzshop.com/";
	var isDev = 1;
	if(isDev === 1){
		model.rootUrl = "http://www.duyinguozhong.com/";
		model.rootMarketUrl = "http://123.206.220.99:5550/";
		model.wsRootUrl = "ws://123.206.220.99:5550/"
	} else {
		model.rootUrl = window.location.origin + "/";
		model.rootMarketUrl = "http://123.206.220.99:5550/";
		model.wsRootUrl = "ws://123.206.220.99:5550/"
	}

  
    //用户登录
    model.userLogin=function(callBackSuccess,callBackError,postData){
        $.ajax({
            url:model.rootUrl+"user/login",
            type:"POST",
            data:postData,
            contentType:"application/x-www-form-urlencoded",
            success: function (data, status, xhr) {
                callBackSuccess(data);
            },
            error:function(xhr,errorType,error){
                callBackError(xhr);
            }
        })
    };

   




	w.model = model;

})(window, config, jQuery);