(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a458bd0"],{"3d38":function(t,e,n){},"4f1d":function(t,e,n){"use strict";var i=n("d6aa"),a=n.n(i);a.a},"6af2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Search",{attrs:{placeholder:"输入关键词搜索订单",disabled:""},nativeOn:{click:function(e){return t.toSearch(e)}}}),n("Tab",{attrs:{tabs:t.tabs,lineWidth:"1.41rem"},on:{tabChange:t.tabChange}}),n("div",{staticClass:"list-container"},[n("MenuBar",{staticClass:"menus",attrs:{list:t.menus},on:{change:t.menuChange}}),n("div",{staticClass:"list"},[n("InfiniteList",{ref:"list",attrs:{api:"teamManage/orderManage",params:{type:t.type,status:t.status},immediateCheck:""},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.list,(function(e){return n("div",{key:e.order_id,staticClass:"list-item"},[n("div",{staticClass:"list-item-title flex ac js"},[n("span",[t._v("订单编号："+t._s(e.order_sn))]),n("span",[t._v(t._s(e.status))])]),t._l(e.order_goods,(function(e){return n("div",{key:e.order_id,staticClass:"list-item-goods flex ac js"},[n("CustomImg",{attrs:{src:e.goods.original_img,width:"2.13rem",height:"2.13rem"}}),n("div",{staticClass:"goos-detail item flex column js"},[n("div",{staticClass:"detail-top"},[n("div",[t._v(t._s(e.goods_name))]),e.spec_key_name?n("div",[t._v(t._s(e.spec_key_name))]):t._e()]),n("div",{staticClass:"flex ac js detail-bottom"},[n("span",[t._v("金额：￥ "+t._s(e.final_price))]),n("span",[t._v("x"+t._s(e.goods_num))])])])],1)})),n("div",{staticClass:"order-info-box"},[n("div",{staticClass:"order-info"},[t._v("订单金额："+t._s(e.order_amount))]),n("div",{staticClass:"order-info"},[t._v("支付时间："+t._s(e.pay_time))]),n("div",{staticClass:"order-info"},[t._v("收货人："+t._s(e.consignee))]),n("div",{staticClass:"order-info"},[t._v("收货手机号："+t._s(e.mobile))]),n("div",{staticClass:"order-info"},[t._v("下单人昵称："+t._s(e.users.nickname))]),n("div",{staticClass:"btn text-center",on:{click:function(n){return n.stopPropagation(),t.toOther("/order/logistics?order_id="+e.order_id+"&order_sn="+e.order_sn,e.order_id)}}},[t._v("查看物流")])])],2)}))}}])})],1)],1)],1)},a=[],r=(n("c975"),n("96cf"),n("1da1")),s=n("365c"),o=n("c106"),c=n("b50c"),l=n("c247"),d=n("9ac8"),u={components:{Search:o["a"],Tab:c["a"],MenuBar:l["a"],InfiniteList:d["a"]},data:function(){return{tabs:[{name:"进行中",value:0},{name:"已完成",value:1},{name:"已关闭",value:2}],menus:[{name:"我的订单",value:0},{name:"下级订单",value:1}],type:0,status:0}},methods:{toSearch:function(){this.$router.push("/order/search")},tabChange:function(t,e){this.status=e,this.$refs.list.resetData()},menuChange:function(t,e){this.type=e,this.$refs.list.resetData()},toOther:function(t,e){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(-1===t.indexOf("logistics")){i.next=6;break}return i.next=3,Object(s["h"])({order_id:e});case 3:if(a=i.sent,a.success){i.next=6;break}return i.abrupt("return");case 6:n.$router.push(t);case 7:case"end":return i.stop()}}),i)})))()}}},f=u,h=(n("850d"),n("2877")),g=Object(h["a"])(f,i,a,!1,null,"3661f701",null);e["default"]=g.exports},"850d":function(t,e,n){"use strict";var i=n("3d38"),a=n.n(i);a.a},"9ac8":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-list",{attrs:{finished:t.finished,"immediate-check":t.immediateCheck,"finished-text":t.finishedText,"error-text":"请求失败，点击重新加载",error:t.error},on:{"update:error":function(e){t.error=e},load:t.getData},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("div",[t._t("default",null,{list:t.list})],2)])},a=[],r=(n("99af"),n("5530")),s=(n("68ef"),n("e3b3"),n("c0c2"),n("d282")),o=n("02de"),c=n("a8c1"),l=n("5fbe"),d=n("543e"),u=Object(s["a"])("list"),f=u[0],h=u[1],g=u[2],p=f({mixins:[Object(l["a"])((function(t){this.scroller||(this.scroller=Object(c["d"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var e,n=t.$el,i=t.scroller,a=t.offset,r=t.direction;e=i.getBoundingClientRect?i.getBoundingClientRect():{top:0,bottom:i.innerHeight};var s=e.bottom-e.top;if(!s||Object(o["a"])(n))return!1;var c=!1,l=t.$refs.placeholder.getBoundingClientRect();c="up"===r?e.top-l.top<=a:l.bottom-e.bottom<=a,c&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{class:h("loading"),key:"loading"},[this.slots("loading")||t(d["a"],{attrs:{size:"16"}},[this.loadingText||g("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var e=this.slots("finished")||this.finishedText;if(e)return t("div",{class:h("finished-text")},[e])}},genErrorText:function(){var t=this.$createElement;if(this.error){var e=this.slots("error")||this.errorText;if(e)return t("div",{on:{click:this.clickErrorText},class:h("error-text")},[e])}}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",class:h("placeholder")});return t("div",{class:h(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():e,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():e])}}),v=n("2b0e"),b=n("365c");v["a"].use(p);var m={props:{immediateCheck:{type:Boolean,default:!1},api:{type:String,default:"",required:!0},params:{type:Object,default:function(){}},formatData:{type:Function,default:function(t){var e=t.current_page,n=t.last_page,i=t.data;return{current_page:e,last_page:n,data:i}}}},data:function(){return{page:this.immediateCheck?0:1,list:[],loading:!1,finished:!1,error:!1}},computed:{finishedText:function(){return 1!==this.page||this.list.length?"已经到底了~":"暂无数据~"}},methods:{getData:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loading=!0;var n=Object(r["a"])({},this.params,{page:e?this.page+1:this.page});Object(b["g"])(this.api,n,!1).then((function(n){if(t.loading=!1,n.success){t.error=!1;var i=t.formatData(n.data),a=i.data,r=i.current_page,s=i.last_page;t.page=e?t.page+1:t.page,t.list=e?t.list.concat(a):a,t.finished=!s||r===s}else t.error=!0})).catch((function(){t.loading=!1,t.error=!0}))},resetData:function(){var t=this;this.$nextTick().then((function(){t.page=1,t.getData(!1)}))}}},A=m,k=n("2877"),x=Object(k["a"])(A,i,a,!1,null,null,null);e["a"]=x.exports},af64:function(t,e,n){"use strict";var i=n("f90e"),a=n.n(i);a.a},c0c2:function(t,e,n){},c106:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("van-search",{staticClass:"custom-search",attrs:{placeholder:t.placeholder,clearable:t.clearable,autofocus:t.autofocus,background:t.background,disabled:t.disabled,"left-icon":n("f026")},on:{input:t.debounceInput},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},a=[],r=(n("68ef"),n("9d70"),n("3743"),n("1a04"),n("1146"),n("f032"),n("2638")),s=n.n(r),o=n("c31d"),c=n("d282"),l=n("ba31"),d=n("1325"),u=n("565f"),f=Object(c["a"])("search"),h=f[0],g=f[1],p=f[2];function v(t,e,n,i){function a(){if(n.label||e.label)return t("div",{class:g("label")},[n.label?n.label():e.label])}function r(){if(e.showAction)return t("div",{class:g("action"),attrs:{role:"button",tabindex:"0"},on:{click:a}},[n.action?n.action():e.actionText||p("cancel")]);function a(){n.action||(Object(l["a"])(i,"input",""),Object(l["a"])(i,"cancel"))}}var c={attrs:i.data.attrs,on:Object(o["a"])({},i.listeners,{keypress:function(t){13===t.keyCode&&(Object(d["c"])(t),Object(l["a"])(i,"search",e.value)),Object(l["a"])(i,"keypress",t)}})},f=Object(l["b"])(i);return f.attrs=void 0,t("div",s()([{class:g({"show-action":e.showAction}),style:{background:e.background}},f]),[null==n.left?void 0:n.left(),t("div",{class:g("content",e.shape)},[a(),t(u["a"],s()([{attrs:{type:"search",border:!1,value:e.value,leftIcon:e.leftIcon,rightIcon:e.rightIcon,clearable:e.clearable},scopedSlots:{"left-icon":n["left-icon"],"right-icon":n["right-icon"]}},c]))]),r()])}v.props={value:String,label:String,rightIcon:String,actionText:String,showAction:Boolean,background:String,shape:{type:String,default:"square"},clearable:{type:Boolean,default:!0},leftIcon:{type:String,default:"search"}};var b=h(v),m=n("2b0e"),A=n("b047"),k=n.n(A);m["a"].use(b);var x={props:{placeholder:{type:String,default:"请输入搜索关键词"},clearable:{type:Boolean,default:!0},autofocus:{type:Boolean,default:!0},background:{type:String,default:"#f5f5f5"},disabled:{type:Boolean,default:!1}},data:function(){return{value:""}},created:function(){this.debounceInput=k()(this.onInput,500)},methods:{onInput:function(t){t&&this.$emit("search",t)}}},j=x,y=(n("4f1d"),n("2877")),O=Object(y["a"])(j,i,a,!1,null,null,null);e["a"]=O.exports},c247:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bars flex ac"},t._l(t.list,(function(e,i){return n("div",{key:i,staticClass:"bar-item text-center item",class:{active:t.active===i},on:{click:function(e){return t.barChange(i)}}},[t._v(t._s(e.name))])})),0)},a=[],r={props:{list:{type:Array,default:function(){return[]}}},data:function(){return{active:0}},methods:{barChange:function(t){this.active!==t&&(this.active=t,this.$emit("change",t,this.list[t].value))}}},s=r,o=(n("af64"),n("2877")),c=Object(o["a"])(s,i,a,!1,null,"a12730a6",null);e["a"]=c.exports},c975:function(t,e,n){"use strict";var i=n("23e7"),a=n("4d64").indexOf,r=n("a640"),s=n("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,l=r("indexOf"),d=s("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!l||!d},{indexOf:function(t){return c?o.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},d6aa:function(t,e,n){},f026:function(t,e){t.exports="data:image/png;base64,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"},f032:function(t,e,n){},f90e:function(t,e,n){}}]);
//# sourceMappingURL=chunk-6a458bd0.cc0a72f64bf9faf09283.js.map