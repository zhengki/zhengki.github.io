webpackJsonp([6],{"/2o1":function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("Opke"),i={data:function(){return{isRegister:1,isShowShare:!1}},created:function(){"1"===this.$route.params.id?this.isRegister=!0:this.isRegister=!1},methods:{onDownload:function(){a.b?location.href="https://apps.apple.com/cn/app/%E7%BA%AF%E8%B4%AD%E4%B8%A5%E9%80%89/id1478549769":a.a&&a.c?this.isShowShare=!0:a.a&&!a.c&&(location.href="https://download.chungoulife.com/appdownload/chungou_v1.4.0_2019-12-19_11_release_legu_aligned_signed.apk")},onCloseMask:function(){this.isShowShare=!1}}},n={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"success-container"},[s.isRegister?e("p",{staticClass:"tips center"},[s._v("您已是平台注册用户")]):e("p",{staticClass:"tips center"},[s._v("恭喜您注册成功")]),s._v(" "),e("a",{staticClass:"btns center",attrs:{href:"javascript:"},on:{click:s.onDownload}},[s._v("\n    前往APP，体验更多超值好货\n  ")]),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.isShowShare,expression:"isShowShare"}],staticClass:"global-tips"},[e("div",{staticClass:"mask",on:{click:s.onCloseMask}}),s._v(" "),e("div",{staticClass:"mask-arrow"}),s._v(" "),e("div",{staticClass:"mask-text"}),s._v(" "),e("div",{staticClass:"mask-share"})])])},staticRenderFns:[]};var o=e("VU/8")(i,n,!1,function(s){e("WAOS")},"data-v-a4a4492c",null);t.default=o.exports},Opke:function(s,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return n}),e.d(t,"c",function(){return o});var a=window.navigator.userAgent;console.log("ua:",a);var i=a.indexOf("Android")>-1,n=!!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),o=/MicroMessenger/gi.test(navigator.userAgent)},WAOS:function(s,t){}});