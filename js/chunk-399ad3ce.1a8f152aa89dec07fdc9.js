(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-399ad3ce"],{"02de":function(t,a,s){"use strict";function e(t){var a=window.getComputedStyle(t),s="none"===a.display,e=null===t.offsetParent&&"fixed"!==a.position;return s||e}s.d(a,"a",(function(){return e}))},"9e33":function(t,a,s){},a1bf:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"details"},[e("div",{staticClass:"time-desc"},[t._v("数据统计日期："+t._s(t.params.timeStr))]),e("div",{staticClass:"goods flex ac js"},[e("CustomImg",{attrs:{width:"1.6rem",height:"1.6rem",fit:"cover",round:"",src:t.params.head_pic}}),e("div",{staticClass:"item goods-name"},[e("div",[t._v(t._s(t._f("longtext")(t.params.nickname))+"的团队")]),e("div",[t._v("人数："+t._s(t.member)+"人")])])],1),e("WholeData",{attrs:{nums:t.nums}}),e("div",{staticClass:"rank"},[e("div",{staticClass:"rank-head"},[e("MenuBar",{ref:"menuBar",attrs:{list:t.menus},on:{change:t.menuChange}}),e("div",{staticClass:"rank-title flex ac js"},[e("div",[t._v(t._s("sale_num"===t.params.type?"商品销售数量排行":"商品销售额排行"))]),e("div",{staticClass:"flex ac",on:{click:t.toggleSort}},[t._v(" "+t._s(0===t.params.order?"按销量由多到少排序":"按销量由少到多排序")+" "),e("img",{class:{top:1===t.params.order},attrs:{src:s("e8a4"),alt:""}})])])],1),e("div",{staticClass:"rank-list"},[e("InfiniteList",{ref:"list",attrs:{api:"teamManage/getTeamGoodsSaleList",params:t.listParams,formatData:t.formatData},scopedSlots:t._u([{key:"default",fn:function(a){return t._l(a.list,(function(a,i){return e("div",{key:a.goods_id,staticClass:"list-item flex column",on:{click:function(s){return t.toGoods(a.goods_id)}}},[e("div",{staticClass:"detail item flex ac js"},[e("CustomImg",{attrs:{width:"1.6rem",height:"1.6rem",fit:"cover",src:a.goods_info.original_img}}),e("div",{staticClass:"item goods-name"},[t._v(t._s(a.goods_info.goods_name))]),"sale_money"===t.params.type?e("div",{staticClass:"goods-num"},[t._v(" "+t._s(a.sale_money)+" "),e("span",[t._v("元")])]):t._e(),"sale_num"===t.params.type?e("div",{staticClass:"goods-num"},[t._v(" "+t._s(a.sale_num)+" "),e("span",[t._v("件")])]):t._e(),0===i?e("img",{staticClass:"rank-icon",attrs:{src:s("9b56"),alt:""}}):t._e(),1===i?e("img",{staticClass:"rank-icon",attrs:{src:s("dd35"),alt:""}}):t._e(),2===i?e("img",{staticClass:"rank-icon",attrs:{src:s("42a9"),alt:""}}):t._e()],1),t.goodsVisible?e("div",{staticClass:"list-item-btn text-center"},[t._v("查看商品详情")]):t._e()])}))}}])})],1)])],1)},i=[],n=(s("99af"),s("5530")),o=s("2f62"),r=s("d7ad"),c=s("c247"),l=s("9ac8"),m={components:{WholeData:r["a"],MenuBar:c["a"],InfiniteList:l["a"]},data:function(){return{params:{order:0,type:"sale_num"},nums:[],goods:{},member:0,menus:[{name:"商品销售数量排行",value:"sale_num"},{name:"商品销售额排行",value:"sale_money"}]}},computed:Object(n["a"])({listParams:function(){var t=Object(n["a"])({},this.params);return delete t.timeStr,delete t.head_pic,delete t.nickname,t}},Object(o["b"])({goodsVisible:"config/goodsVisible"})),created:function(){var t=this.$route.query;this.params=Object(n["a"])({},this.params,{},t),this.$store.dispatch("config/getConfig")},mounted:function(){this.$refs.menuBar.active="sale_num"===this.params.type?0:1,this.$refs.list.resetData()},methods:{menuChange:function(t,a){this.params=Object(n["a"])({},this.params,{type:a}),this.$refs.list.resetData()},toggleSort:function(){var t=this.params;this.params=Object(n["a"])({},t,{order:1===t.order?0:1}),this.$refs.list.resetData()},formatData:function(t){var a=t.sale_num,s=t.sale_money,e=t.member,i=t.list,n=i.data,o=i.current_page,r=i.last_page,c=[];return c.push({name:"总销量(件)",value:a||0},{name:"销售额(元)",value:s}),this.nums=c,this.member=e,{data:n,current_page:o,last_page:r}},toGoods:function(t){if(this.goodsVisible){var a=JSON.parse(localStorage.getItem("userInfo")).invite_code,s="".concat("https://h5.chinaaimo.cn","/goodsDetail?id=").concat(t,"&invite_code=").concat(a);location.href=s}}}},d=m,u=(s("b1a7"),s("2877")),g=Object(u["a"])(d,e,i,!1,null,"ea05e5e4",null);a["default"]=g.exports},b1a7:function(t,a,s){"use strict";var e=s("9e33"),i=s.n(e);i.a},e8a4:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAYCAYAAACBbx+6AAABqElEQVRYR8WWvUoEMRRGz6K1lcKCPoeN+LOPIP4U9iooWvoSWykqok8gq4i9hQrWFr6DjdY2WsiFZI2XZJPMZHam2s1MJmc+zr1Jh79rFpgD3oAvZ7zNn1PAIvAOvApIx9DMA/dAF3gAtoCPNkmBGeAa6AE/hmlggU+AAwfwGVgDPluCngZugSVn/QGwaYH3gDMF1xa0JHujYAXtCOhb4EkDvKOgn4CNMeohsJLksuK4BPZFDQss9wX6HNj2JL0+BuhQskNYt+gsYyjppvXwOStM/2B9wLGkmyjEEOwVILUlHWJ4uUq44yE9SjsdctYLG0rY1aNJp0POBmFjwE3qkaVBihKpekj3yN1cBFb6rG5dI5O1QCGH9QZXquVV0iA34ZSWl9Kna8OmOOxL+hTYzdzGKzurAVKVcOdNmG1cQ0vL8zldy9kSwLZ7pCRdLNncotMfGoNeNRPuPKeupG7gW7CKw6lOP5oHV9SEWrAlgOUdIaf1x9WGLQWcAl0EtiTwKKeLwZYGttDH5lgo/y+AQ+A7VES541X6cGwN2cYXzEMv+jwbmxy7/wu5uHkZzEau9AAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=chunk-399ad3ce.1a8f152aa89dec07fdc9.js.map