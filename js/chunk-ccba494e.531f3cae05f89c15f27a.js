(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ccba494e"],{"433f":function(t,i,e){t.exports=e.p+"img/diamond.075c2122.png"},4602:function(t,i,e){"use strict";var a=e("747b"),s=e.n(a);s.a},4946:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("InfiniteList",{ref:"list",attrs:{api:"teamManage/waitAuditList",immediateCheck:""},scopedSlots:t._u([{key:"default",fn:function(i){return[t._l(i.list,(function(i){return a("div",{key:i.id,staticClass:"list-item",on:{click:function(e){return t.toDetail(i)}}},[a("div",{staticClass:"list-item-title flex ac js"},[a("CustomImg",{attrs:{width:"1.33rem",height:"1.33rem",src:i.head_pic,round:""}}),a("div",{staticClass:"item info"},[a("div",{staticClass:"nickname flex ac"},[t._v(" "+t._s(t._f("longtext")(i.nickname))+" "),a("span",{staticClass:"tag ellipsis"},[t._v(" "+t._s(i.level_name)+" "),a("img",{staticClass:"diamond",attrs:{src:e("433f")}})])]),a("div",{staticClass:"time"},[t._v("提交时间 "+t._s(i.create_time))])]),a("div",{staticClass:"status"},[t._v(t._s(i.audit_status))])],1),a("div",{staticClass:"img-list"},[i.img1_url?a("CustomImg",{staticClass:"img-item",attrs:{width:"2.4rem",height:"2.4rem",src:i.img1_url},nativeOn:{click:function(e){return e.stopPropagation(),t.showImg(i.img1_url,i.img2_url,0)}}}):t._e(),i.img2_url?a("CustomImg",{staticClass:"img-item",attrs:{width:"2.4rem",height:"2.4rem",src:i.img2_url},nativeOn:{click:function(e){return e.stopPropagation(),t.showImg(i.img1_url,i.img2_url,1)}}}):t._e()],1),"待审核"===i.audit_status?a("div",{staticClass:"flex center ac"},[a("div",{staticClass:"btn text-center",on:{click:function(e){return e.stopPropagation(),t.auditTask(i.id,2)}}},[t._v("审核通过")]),a("div",{staticClass:"btn text-center",on:{click:function(e){e.stopPropagation(),t.show=!0,t.id=i.id}}},[t._v("审核不通过")])]):t._e(),i.remarks?a("div",{staticClass:"remarks-box"},[a("div",{staticClass:"remarks-text"},[t._v("原因："+t._s(i.remarks))])]):t._e()])})),a("van-dialog",{attrs:{showConfirmButton:!1},model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[a("div",{staticClass:"modal flex column"},[a("img",{staticClass:"modal-close",attrs:{src:e("cd5c"),alt:""},on:{click:t.hideModal}}),a("div",{staticClass:"modal-title text-center"},[t._v("填写不通过原因")]),a("van-field",{staticClass:"remarks",attrs:{rows:"9",type:"textarea",placeholder:"（选填）填写不通过原因，不超过20字",maxlength:"20"},model:{value:t.remarks,callback:function(i){t.remarks=i},expression:"remarks"}}),a("div",{staticClass:"btns flex js ac"},[a("div",{staticClass:"modal-btn text-center",on:{click:function(i){return t.auditTask("",3)}}},[t._v("确定")]),a("div",{staticClass:"modal-btn text-center",on:{click:t.hideModal}},[t._v("取消")])])],1)])]}}])})},s=[],n=(e("4de4"),e("be7f"),e("565f")),r=(e("e17f"),e("2241")),o=(e("4662"),e("28a2")),c=e("2b0e"),l=e("365c"),d=e("9ac8");c["a"].use(o["a"]),c["a"].use(r["a"]),c["a"].use(n["a"]);var u={components:{InfiniteList:d["a"]},data:function(){return{show:!1,remarks:"",id:""}},methods:{auditTask:function(t,i){var e=this,a={id:t||this.id,audit_status:i,remarks:this.remarks};Object(l["a"])(a).then((function(t){t.success&&(e.hideModal(),e.$toast.success("审核成功"),e.$refs.list.resetData())}))},showImg:function(t,i,e){var a=[t,i].filter((function(t){return t}));Object(o["a"])({images:a,startPosition:e})},hideModal:function(){this.show=!1,this.remarks=""},toDetail:function(t){this.$router.push("/task/detail?data=".concat(JSON.stringify(t)))}}},h=u,f=(e("4602"),e("2877")),m=Object(f["a"])(h,a,s,!1,null,"72400c66",null);i["default"]=m.exports},"747b":function(t,i,e){},"9ac8":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("van-list",{attrs:{finished:t.finished,"immediate-check":t.immediateCheck,"finished-text":t.finishedText,"error-text":"请求失败，点击重新加载",error:t.error},on:{"update:error":function(i){t.error=i},load:t.getData},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},[e("div",[t._t("default",null,{list:t.list})],2)])},s=[],n=(e("99af"),e("5530")),r=(e("68ef"),e("e3b3"),e("c0c2"),e("d282")),o=e("02de"),c=e("a8c1"),l=e("5fbe"),d=e("543e"),u=Object(r["a"])("list"),h=u[0],f=u[1],m=u[2],g=h({mixins:[Object(l["a"])((function(t){this.scroller||(this.scroller=Object(c["d"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var i,e=t.$el,a=t.scroller,s=t.offset,n=t.direction;i=a.getBoundingClientRect?a.getBoundingClientRect():{top:0,bottom:a.innerHeight};var r=i.bottom-i.top;if(!r||Object(o["a"])(e))return!1;var c=!1,l=t.$refs.placeholder.getBoundingClientRect();c="up"===n?i.top-l.top<=s:l.bottom-i.bottom<=s,c&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{class:f("loading"),key:"loading"},[this.slots("loading")||t(d["a"],{attrs:{size:"16"}},[this.loadingText||m("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var i=this.slots("finished")||this.finishedText;if(i)return t("div",{class:f("finished-text")},[i])}},genErrorText:function(){var t=this.$createElement;if(this.error){var i=this.slots("error")||this.errorText;if(i)return t("div",{on:{click:this.clickErrorText},class:f("error-text")},[i])}}},render:function(){var t=arguments[0],i=t("div",{ref:"placeholder",class:f("placeholder")});return t("div",{class:f(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():i,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():i])}}),p=e("2b0e"),v=e("365c");p["a"].use(g);var k={props:{immediateCheck:{type:Boolean,default:!1},api:{type:String,default:"",required:!0},params:{type:Object,default:function(){}},formatData:{type:Function,default:function(t){var i=t.current_page,e=t.last_page,a=t.data;return{current_page:i,last_page:e,data:a}}}},data:function(){return{page:this.immediateCheck?0:1,list:[],loading:!1,finished:!1,error:!1}},computed:{finishedText:function(){return 1!==this.page||this.list.length?"已经到底了~":"暂无数据~"}},methods:{getData:function(){var t=this,i=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loading=!0;var e=Object(n["a"])({},this.params,{page:i?this.page+1:this.page});Object(v["g"])(this.api,e,!1).then((function(e){if(t.loading=!1,e.success){t.error=!1;var a=t.formatData(e.data),s=a.data,n=a.current_page,r=a.last_page;t.page=i?t.page+1:t.page,t.list=i?t.list.concat(s):s,t.finished=!r||n===r}else t.error=!0})).catch((function(){t.loading=!1,t.error=!0}))},resetData:function(){var t=this;this.$nextTick().then((function(){t.page=1,t.getData(!1)}))}}},_=k,x=e("2877"),b=Object(x["a"])(_,a,s,!1,null,null,null);i["a"]=b.exports},c0c2:function(t,i,e){}}]);
//# sourceMappingURL=chunk-ccba494e.531f3cae05f89c15f27a.js.map