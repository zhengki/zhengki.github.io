webpackJsonp([7],{YKR3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("vLgD"),a={data:function(){return{agreement:"",id:this.$route.params.id}},created:function(){this.getAgreement()},mounted:function(){1===this.id?document.title="消费者注册协议":3===this.id&&(document.title="纯购严选平台隐私政策")},methods:{getAgreement:function(){var t,e=this;(t={id:this.id},Object(i.a)({url:"https://testnewapi.chungoulife.com/Api/Index/agreement",method:"post",data:t})).then(function(t){1===t.code&&(e.agreement=t.data)})}}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{domProps:{innerHTML:this._s(this.agreement)}})},staticRenderFns:[]};var d=n("VU/8")(a,r,!1,function(t){n("n/Lm")},"data-v-b5a4acb6",null);e.default=d.exports},"n/Lm":function(t,e){}});