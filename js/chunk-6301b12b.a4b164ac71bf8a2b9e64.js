(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6301b12b"],{"33a2":function(t,e,a){},"407f":function(t,e,a){},5319:function(t,e,a){"use strict";var i=a("d784"),s=a("825a"),n=a("7b0b"),r=a("50c4"),o=a("a691"),c=a("1d80"),u=a("8aa5"),l=a("14c3"),m=Math.max,d=Math.min,f=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};i("replace",2,(function(t,e,a,i){var A=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=i.REPLACE_KEEPS_$0,b=A?"$":"$0";return[function(a,i){var s=c(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,s,i):e.call(String(s),a,i)},function(t,i){if(!A&&g||"string"===typeof i&&-1===i.indexOf(b)){var n=a(e,t,this,i);if(n.done)return n.value}var c=s(t),f=String(this),h="function"===typeof i;h||(i=String(i));var p=c.global;if(p){var E=c.unicode;c.lastIndex=0}var y=[];while(1){var C=l(c,f);if(null===C)break;if(y.push(C),!p)break;var _=String(C[0]);""===_&&(c.lastIndex=u(f,r(c.lastIndex),E))}for(var x="",k=0,w=0;w<y.length;w++){C=y[w];for(var I=String(C[0]),U=m(d(o(C.index),f.length),0),B=[],K=1;K<C.length;K++)B.push(v(C[K]));var D=C.groups;if(h){var M=[I].concat(B,U,f);void 0!==D&&M.push(D);var j=String(i.apply(void 0,M))}else j=S(I,f,U,B,D,i);U>=k&&(x+=f.slice(k,U)+j,k=U+I.length)}return x+f.slice(k)}];function S(t,a,i,s,r,o){var c=i+t.length,u=s.length,l=p;return void 0!==r&&(r=n(r),l=h),e.call(o,l,(function(e,n){var o;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,i);case"'":return a.slice(c);case"<":o=r[n.slice(1,-1)];break;default:var l=+n;if(0===l)return e;if(l>u){var m=f(l/10);return 0===m?e:m<=u?void 0===s[m-1]?n.charAt(1):s[m-1]+n.charAt(1):e}o=s[l-1]}return void 0===o?"":o}))}}))},8737:function(t,e,a){"use strict";var i=a("407f"),s=a.n(i);s.a},a15b:function(t,e,a){"use strict";var i=a("23e7"),s=a("44ad"),n=a("fc6a"),r=a("a640"),o=[].join,c=s!=Object,u=r("join",",");i({target:"Array",proto:!0,forced:c||!u},{join:function(t){return o.call(n(this),void 0===t?",":t)}})},ab18:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"volume"},[i("TimeSearch",{on:{timeChange:t.timeChange,search:t.toSearch}}),i("WholeData",{attrs:{nums:t.nums}}),i("div",{staticClass:"rank"},[i("div",{staticClass:"rank-head"},[i("div",{staticClass:"rank-title"},[t._v("排行榜")]),i("MenuBar",{attrs:{list:t.menus},on:{change:t.menuChange}})],1),i("div",{staticClass:"rank-list"},[i("InfiniteList",{ref:"list",attrs:{api:"teamManage/goodsSaleAnalyzeDetail",params:t.listParams,formatData:t.formatData},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.list,(function(e,s){return i("div",{key:e.goods_id,staticClass:"list-item flex column",on:{click:function(a){return t.toDetail(e.goods_id,e.goods_info.goods_name)}}},[i("div",{staticClass:"detail item flex ac js"},[i("CustomImg",{attrs:{width:"1.6rem",height:"1.6rem",fit:"cover",src:e.goods_info.original_img}}),i("div",{staticClass:"item goods-name"},[t._v(t._s(e.goods_info.goods_name))]),"sale_num"===t.params.type?i("div",{staticClass:"goods-num"},[t._v(" "+t._s(e.sale_num)+" "),i("span",[t._v("件")])]):t._e(),"sale_money"===t.params.type?i("div",{staticClass:"goods-num"},[t._v(" "+t._s(e.sale_money)+" "),i("span",[t._v("元")])]):t._e(),"refund_num"===t.params.type?i("div",{staticClass:"goods-num"},[t._v(" "+t._s(e.refund_num)+" "),i("span",[t._v("件")])]):t._e(),0===s&&"refund_num"!==t.params.type?i("img",{staticClass:"rank-icon",attrs:{src:a("9b56"),alt:""}}):t._e(),1===s&&"refund_num"!==t.params.type?i("img",{staticClass:"rank-icon",attrs:{src:a("dd35"),alt:""}}):t._e(),2===s&&"refund_num"!==t.params.type?i("img",{staticClass:"rank-icon",attrs:{src:a("42a9"),alt:""}}):t._e()],1),i("div",{staticClass:"list-item-btn text-center"},[t._v("查看团队成员"+t._s("refund_num"===t.params.type?"退货":"销售")+"情况")])])}))}}])})],1)])],1)},s=[],n=(a("99af"),a("fb6a"),a("ac1f"),a("5319"),a("5530")),r=a("dd44"),o=a("d7ad"),c=a("c247"),u=a("9ac8"),l={components:{TimeSearch:r["a"],WholeData:o["a"],MenuBar:c["a"],InfiniteList:u["a"]},data:function(){return{params:{type:"sale_num"},nums:[],menus:[{name:"商品榜",value:"sale_num"},{name:"成交额榜",value:"sale_money"},{name:"退货商品",value:"refund_num"}]}},computed:{listParams:function(){var t=Object(n["a"])({},this.params);return delete t.timeStr,t}},methods:{timeChange:function(t){this.params=Object(n["a"])({},this.params,{},t),this.$refs.list.resetData()},toSearch:function(){this.$router.push("/goods/search")},menuChange:function(t,e){this.params=Object(n["a"])({},this.params,{type:e}),this.$refs.list.resetData()},formatData:function(t){var e=t.sale_num,a=t.sale_money,i=t.refund_num,s=t.list,n=s.data,r=s.current_page,o=s.last_page,c=[];return c.push({name:"总销量(件)",value:e},{name:"总成交额(元)",value:a},{name:"总退款(件)",value:i}),this.nums=c,{current_page:r,last_page:o,data:n}},toDetail:function(t,e){var a=this.params,i=a.time_type,s=a.start_time,n=a.end_time,r=a.timeStr,o=a.type,c={time_type:i,start_time:s,end_time:n,timeStr:r,goods_id:t,goods_name:e.replace(/%/g,"%25"),type:o},u="";for(var l in c)u+="&".concat(l,"=").concat(c[l]);u=u.slice(1),this.$router.push("/goods/detail?".concat(u))}}},m=l,d=(a("8737"),a("2877")),f=Object(d["a"])(m,i,s,!1,null,"2cd0da70",null);e["default"]=f.exports},bbc5:function(t,e){t.exports="data:image/png;base64,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"},dd44:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"tab-box"},[i("Tabs",{ref:"tab",staticClass:"search-tabs",attrs:{tabs:t.tabs,swipeThreshold:"6",lineWidth:"1.41rem"},on:{tabChange:t.tabChange}},[t.showSearch?i("img",{staticClass:"search",attrs:{src:a("bbc5"),alt:""},on:{click:t.onSearch}}):t._e()])],1),i("div",{staticClass:"time-desc flex"},[t.timeStr?i("div",{staticClass:"item flex ac js"},[i("span",[t._v("数据统计日期："+t._s(t.timeStr))]),4===t.time_type&&t.timeStr?i("van-button",{attrs:{type:"danger",size:"small"},on:{click:function(e){t.timeStr=""}}},[t._v("修改时间")]):t._e()],1):i("div",{staticClass:"item flex ac js"},[i("div",{staticClass:"item flex ac"},[i("div",{staticClass:"time text-center",on:{click:function(e){return t.showDate("start_time")}}},[t._v(t._s(t.startTimeStr))]),i("div",{staticClass:"line"}),i("div",{staticClass:"time text-center",on:{click:function(e){return t.showDate("end_time")}}},[t._v(t._s(t.endTimeStr))])]),i("van-button",{attrs:{type:"danger",size:"small",color:"#E84114"},on:{click:t.confirm}},[t._v("确定")])],1)]),i("van-popup",{attrs:{position:"bottom","close-on-click-overlay":!1,"safe-area-inset-bottom":""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t.show?i("DatePicker",{attrs:{value:t.pickerValue},on:{cancel:function(e){t.show=!1},confirm:t.dateConfirm}}):t._e()],1)],1)},s=[],n=(a("99af"),a("a15b"),a("a9e3"),a("ac1f"),a("1276"),a("68ef"),a("a71a"),a("9d70"),a("3743"),a("4d75"),a("d282")),r=a("a142"),o=a("6605"),c=a("ad06"),u=Object(n["a"])("popup"),l=u[0],m=u[1],d=l({mixins:[Object(o["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(a){return t.$emit(e,a)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var t,e=arguments[0];if(this.shouldRender){var a=this.round,i=this.position,s=this.duration,n="center"===i,o=this.transition||(n?"van-fade":"van-popup-slide-"+i),u={};if(Object(r["b"])(s)){var l=n?"animationDuration":"transitionDuration";u[l]=s+"s"}return e("transition",{attrs:{name:o},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:u,class:m((t={round:a},t[i]=i,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(c["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:m("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}}),f=(a("66b9"),a("b650")),h=a("c1df"),p=a.n(h),v=a("2b0e"),A=a("b50c"),g=a("e94a");v["a"].use(f["a"]),v["a"].use(d);var b="YYYY.MM.DD",S=p()("2020-01-07 00:00:00").unix(),E={props:{showSearch:{type:Boolean,default:!0}},components:{Tabs:A["a"],DatePicker:g["a"]},data:function(){return{tabs:[{name:"今日实时"},{name:"昨日"},{name:"7日"},{name:"30日"},{name:"自定义"}],time_type:0,timeStr:"",start_time:"",end_time:"",show:!1,property:"",pickerValue:new Date}},computed:{startTimeStr:function(){return this.start_time.split("-").join(".")},endTimeStr:function(){return this.end_time.split("-").join(".")}},created:function(){var t=this.$route.query.index,e=void 0===t?0:t;this.tabChange(Number(e))},mounted:function(){var t=this.$route.query.index,e=void 0===t?0:t;this.$refs.tab.active=Number(e)},methods:{tabChange:function(t){switch(this.time_type=t,this.p=1,t){case 0:this.timeStr=p()().format(b);break;case 1:this.timeStr=p()().subtract(1,"days").format(b);break;case 2:this.timeStr="".concat(p()().subtract(7,"days").format(b),"-").concat(p()().subtract(1,"days").format(b));break;case 3:this.timeStr="".concat(p()().subtract(30,"days").format(b),"-").concat(p()().subtract(1,"days").format(b));break;default:p()().subtract(91,"days").unix()<S?this.start_time=p()(1e3*S).format("YYYY-MM-DD"):this.start_time=p()().subtract(91,"days").format("YYYY-MM-DD"),this.end_time=p()().subtract(1,"days").format("YYYY-MM-DD"),this.timeStr=this.startTimeStr+"-"+this.endTimeStr}this.getParams()},getParams:function(){var t=this;this.$nextTick().then((function(){var e={time_type:t.time_type,start_time:t.start_time,end_time:t.end_time,timeStr:t.timeStr};t.$emit("timeChange",e)}))},onSearch:function(){this.$emit("search")},dateConfirm:function(t){this[this.property]=p()(t).format("YYYY-MM-DD"),this.show=!1},showDate:function(t){this.property=t,this.pickerValue=new Date("".concat(this[t].split("-").join("/"))),this.show=!0},confirm:function(){if(this.startTimeStr&&this.endTimeStr){if(p()(this.start_time).unix()>p()(this.end_time).unix())return void this.$toast("请选择正确的时间区间");this.timeStr=this.startTimeStr+"-"+this.endTimeStr,this.getParams()}else this.$toast("请选择时间")}}},y=E,C=(a("ef37"),a("2877")),_=Object(C["a"])(y,i,s,!1,null,"27f236f6",null);e["a"]=_.exports},ef37:function(t,e,a){"use strict";var i=a("33a2"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-6301b12b.a4b164ac71bf8a2b9e64.js.map