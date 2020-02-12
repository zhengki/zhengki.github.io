(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"200":function(e,t,n){e.exports={"test":"style-module__test___12gRM"}},"202":function(e,t,n){e.exports={"captcha":"style-module__captcha___18sHf","captcha_item":"style-module__captcha_item___2hxs-"}},"208":function(e,t,n){e.exports={"index":"style-module__index___1wle6"}},"218":function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(14),a=n(2),c=n(214),i=n(217),u=n(216),s=n(23),l=n(219),p=n(212),f=n(25),h=n(24),d=n(12),y={"api":"https://testnewapi.chungoulife.com/api/"},m=1,b={"400":"发出的请求有错误，服务器没有进行新建或修改数据的操作。","401":"用户没有权限（令牌、用户名、密码错误）。","403":"用户得到授权，但是访问是被禁止的。","404":"发出的请求针对的是不存在的记录，服务器没有进行操作。","406":"请求的格式不可得。","410":"请求的资源被永久删除，且不会再得到的。","422":"当创建一个对象时，发生一个验证错误。","500":"服务器开小差了。","502":"网关错误。","503":"服务不可用，服务器暂时过载或维护。","504":"网关超时。"},_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function checkHttpStatus(e){if(e.statusCode>=200&&e.statusCode<300)return e.data;Object(f.a)();var t=b[e.statusCode]||"ERROR CODE: "+e.statusCode;Object(f.f)({"title":t,"icon":"none"});var n=new Error(t);throw n.response=e,n}var v={"request":function request(e,t){var n=e.url,o=e.showLoading;return(void 0===o||o)&&Object(f.d)(),new Promise(function(o,r){Object(h.b)(_({},e,{"method":t||"GET","url":""+y.api+n,"header":_({"content-type":"application/json","access-token":Object(d.f)("token")},e.header)})).then(checkHttpStatus).then(function(e){!function checkSuccess(e,t){if(Object(f.a)(),e instanceof ArrayBuffer&&"string"==typeof e)return e;if("number"==typeof e.code&&e.code===m)return t(e);Object(f.f)({"title":e.msg,"icon":"none"});var n=new Error(e.msg||"服务端返回异常");throw n.data=e,n}(e,o)}).catch(function(e){!function throwError(e,t){if(Object(f.a)(),Object(f.f)({"title":"请求失败","icon":"none"}),e.errMsg)throw t("服务器正在维护中!"),new Error("服务器正在维护中!");throw e}(e,r)})})},"get":function get(e){return this.request(_({},e))},"post":function post(e){return this.request(_({},e),"POST")},"put":function put(e){return this.request(_({},e),"PUT")},"delete":function _delete(e){return this.request(_({},e),"DELETE")}};var g,w,O=n(56),C=n.n(O),E=n(200),j=n.n(E),x=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var k=(w=g=function(e){function Test(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Test);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Test.__proto__||Object.getPrototypeOf(Test)).apply(this,arguments));return e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Test,a["default"].Component),x(Test,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"render","value":function render(){return o.l.createElement(c.a,{"className":j.a.test},"Test")}}]),Test}(),g.defaultProps={"tip":""},w);k.propTypes={"tip":C.a.string};var P,T,R=k,D=n(215),I=n(202),S=n.n(I),M=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var A=(T=P=function(e){function Captcha(){!function Captcha_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Captcha);var e=function Captcha_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Captcha.__proto__||Object.getPrototypeOf(Captcha)).apply(this,arguments));return e.onInput=function(t){e.setState({"value":t.detail.value})},e.onFocus=function(){e.input.inputRef.focus()},e.state={"value":""},e}return function Captcha_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Captcha,a["default"].Component),M(Captcha,[{"key":"componentDidMount","value":function componentDidMount(){console.log(this.input),this.onFocus()}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.type,r=t.captchaLength,a=this.state.value,i=new Array(r).fill("");return o.l.createElement(c.a,{"className":S.a.captcha},o.l.createElement(D.a,{"ref":function ref(t){return e.input=t},"focus":!0,"type":n,"maxLength":r,"onInput":this.onInput}),o.l.createElement(c.a,{"onClick":this.onFocus},i.map(function(e,t){return o.l.createElement(u.a,{"className":S.a.captcha_item,"key":t},a[t])})))}}]),Captcha}(),P.defaultProps={"type":"number","captchaLength":6},T);A.propTypes={"type":C.a.string,"captchaLength":C.a.number};var B,L=A,N=n(208),q=n.n(N),H=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),W=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0};function index_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var F=Object(s.b)(function(e){return{"count":e.count}},function(e){return{"add":function add(){e({"type":"count/increase"})},"dec":function dec(){e({"type":"count/decrease"})},"testAsync":function testAsync(){e({"type":"count/testAsync"})}}})(B=function(e){function Index(){var e,t,n;!function index_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return t=n=index_possibleConstructorReturn(this,(e=Index.__proto__||Object.getPrototypeOf(Index)).call.apply(e,[this].concat(r))),n.config={"navigationBarTitleText":"首页"},index_possibleConstructorReturn(n,t)}return function index_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,a["default"].Component),H(Index,[{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){!function getRecommendList(){return v.get({"url":"/personalized"})}(),this._offReachBottom=Object(r.a)({"callback":this.onReachBottom,"ctx":this,"onReachBottomDistance":void 0})}},{"key":"componentDidHide","value":function componentDidHide(){this._offReachBottom&&this._offReachBottom()}},{"key":"test","value":function test(){a.default.navigateTo({"url":"/pages/package-hi/hello/index"})}},{"key":"onReachBottom","value":function onReachBottom(){console.log("到底了")}},{"key":"render","value":function render(){return o.l.createElement(c.a,{"className":q.a.index},o.l.createElement(L,null),o.l.createElement(i.a,{"className":"add_btn","onClick":this.props.add},"+"),o.l.createElement(i.a,{"className":"dec_btn","onClick":this.props.dec},"-"),o.l.createElement(i.a,{"className":"dec_btn","onClick":this.props.testAsync},"async"),o.l.createElement(c.a,null,o.l.createElement(u.a,null,this.props.count)),o.l.createElement(c.a,{"onClick":this.test},o.l.createElement(u.a,null,"Hello, World")),o.l.createElement(l.a,{"type":"primary"},"按钮文案嘿嘿"),o.l.createElement(c.a,{"style":"width:100%;height:500px"},o.l.createElement(p.a,{"option":{"xAxis":{"type":"category","data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},"yAxis":{"type":"value"},"tooltip":{"show":!0,"trigger":"axis"},"series":[{"data":[820,932,901,934,1290,1330,1320],"type":"line"}]}})),o.l.createElement(R,{"tip":"这是一个cssmoudule styl测试组件"}))}},{"key":"componentDidMount","value":function componentDidMount(){W(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this)&&W(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this).call(this)}}]),Index}())||B;t.default=F}}]);