webpackJsonp([8],{EVKz:function(e,t){},YKR3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("vLgD"),a={data:function(){return{agreement:"",id:this.$route.params.id}},created:function(){this.getAgreement()},mounted:function(){1===this.id?document.title="消费者注册协议":3===this.id&&(document.title="纯购严选平台隐私政策")},methods:{getAgreement:function(){var e,t=this;(e={id:this.id},Object(i.a)({url:"https://grayscale.chungoulife.com/Api/Index/agreement",method:"post",data:e})).then(function(e){1===e.code&&(t.agreement=e.data)})}}},r={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{domProps:{innerHTML:this._s(this.agreement)}})},staticRenderFns:[]};var d=n("VU/8")(a,r,!1,function(e){n("EVKz")},"data-v-b5a4acb6",null);t.default=d.exports}});