(window.webpackJsonpbina=window.webpackJsonpbina||[]).push([[0],[,,,,,,,,,,function(e,_,t){"use strict";var a=t(2),r=t(3),n=t(5),s=t(4),o=t(6),c=t(0),l=t.n(c),u=function(e){function _(){var e,t;Object(a.a)(this,_);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=Object(n.a)(this,(e=Object(s.a)(_)).call.apply(e,[this].concat(o)))).call=function(e){e.target.blur(),t.props.onClick()},t.onTouchStartHandler=function(e){e.target.style.backgroundColor="#5a6268",e.target.style.borderColor="#545b62"},t.onTouchEndHandler=function(e){e.target.style.backgroundColor="#6c757d",e.target.style.borderColor="#6c757d"},t}return Object(o.a)(_,e),Object(r.a)(_,[{key:"render",value:function(){var e=this;return l.a.createElement("button",{id:this.props.id,className:"btn btn-secondary",onTouchStart:function(_){e.onTouchStartHandler(_)},onTouchEnd:function(_){e.onTouchEndHandler(_)},onClick:function(_){return e.call(_)}},this.props.butType)}}]),_}(l.a.Component);_.a=u},function(e,_,t){"use strict";var a=t(2),r=t(3),n=t(5),s=t(4),o=t(6),c=t(0),l=t.n(c),u=function(e){function _(){return Object(a.a)(this,_),Object(n.a)(this,Object(s.a)(_).apply(this,arguments))}return Object(o.a)(_,e),Object(r.a)(_,[{key:"render",value:function(){return l.a.createElement("textarea",{id:"textarr",rows:"3",cols:"30",placeholder:this.props.placeholder,readOnly:this.props.readonly,value:this.props.value,onChange:this.props.onChange})}}]),_}(l.a.Component);_.a=u},function(e,_,t){"use strict";t.d(_,"a",function(){return p});var a=t(26),r=t(2),n=t(3),s=t(5),o=t(4),c=t(6),l=t(0),u=t.n(l);function i(e,_){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);_&&(a=a.filter(function(_){return Object.getOwnPropertyDescriptor(e,_).enumerable})),t.push.apply(t,a)}return t}function E(e){for(var _=1;_<arguments.length;_++){var t=null!=arguments[_]?arguments[_]:{};_%2?i(t,!0).forEach(function(_){Object(a.a)(e,_,t[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(t).forEach(function(_){Object.defineProperty(e,_,Object.getOwnPropertyDescriptor(t,_))})}return e}var b=u.a.createContext("Binary"),p=function(e){function _(){var e,t;Object(r.a)(this,_);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(o.a)(_)).call.apply(e,[this].concat(n)))).state={converter:"binary"},t.onConvertChange=function(e){e.target.blur(),"binary"===t.state.converter?t.setState({converter:"hex"}):t.setState({converter:"binary"})},t}return Object(c.a)(_,e),Object(n.a)(_,[{key:"render",value:function(){return u.a.createElement(b.Provider,{value:E({},this.state,{onConvertChange:this.onConvertChange})},this.props.children)}}]),_}(u.a.Component);_.b=b},,function(e,_,t){"use strict";var a=t(2),r=t(3),n=t(5),s=t(4),o=t(6),c=t(0),l=t.n(c),u=t(25),i=t.n(u),E=t(12),b=t(17),p={binary:{main:"Binary",sec:"Hex",link:"/hex"},hex:{main:"Hex",sec:"Binary",link:"/"}},O=function(e){function _(){return Object(a.a)(this,_),Object(n.a)(this,Object(s.a)(_).apply(this,arguments))}return Object(o.a)(_,e),Object(r.a)(_,[{key:"render",value:function(){var e=this;return console.log(this.context),l.a.createElement("header",null,l.a.createElement("div",{className:"navbar navbar-dark bg-dark"},l.a.createElement("div",{className:"d-flex justify-content-start"},l.a.createElement("a",{className:"navbar-brand",href:"#"},p[this.context.converter].main," Converter"," ",l.a.createElement("img",{className:"icon",alt:"",width:"25",src:i.a})),l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item pull-right"},l.a.createElement(b.b,{onClick:function(_){return e.context.onConvertChange(_)},className:"nav-link",to:p[this.context.converter].link},"Switch To ",p[this.context.converter].sec," Converter"))))))}}]),_}(l.a.Component);O.contextType=E.b,_.a=O},,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_TextArrea__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(11),_ConvertContext__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(12),conversionConfig={binary:{main:{placeholder:"Enter decimal number here",function:"decToBin"},sec:{placeholder:"Enter binary number here",function:"binToDec"}},hex:{main:{placeholder:"Enter decimal number here",function:"decToHex"},sec:{placeholder:"Enter hexadecimal number here",function:"hexToDec"}}},Calculator=function(_React$Component){function Calculator(){var e,_;Object(_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(_=Object(_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(e=Object(_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator)).call.apply(e,[this].concat(a)))).state={value:"",convertedValue:"",conversionType:_.context.converter,func:"main"},_.inputReceiver=function(e){var t=e.target.value;_.setState({value:t})},_.decToBin=function(){var e=_.state.value;if(0!==e.length){for(var t,a="",r=e=parseInt(e);0!==r;)t=r%2,r=Math.floor(r/=2),a=t+a;_.setState({convertedValue:a})}_.setState({value:""}),console.log("CONVERTING DECIMAL TO BINARY!")},_.binToDec=function(){var e=document.getElementById("textarr"),t=_.state.value,a=0,r=(t+="").length;if(0!==t.length){for(var n=0;n<r;n++)a+=parseInt(t.charAt(n))*Math.pow(2,r-1-n);e.value="",_.setState({convertedValue:a})}_.setState({value:""})},_.decToHex=function(){var e=_.state.value;if(0!==e.length){for(var t,a="",r=e=parseInt(e);0!==r;){switch(t=r%16,r=Math.floor(r/=16),t){case 10:t="A";break;case 11:t="B";break;case 12:t="C";break;case 13:t="D";break;case 14:t="E";break;case 15:t="F"}a=t+a}_.setState({convertedValue:a})}_.setState({value:""}),console.log("CONVERTING DECIMAL TO BINARY!")},_.hexToDec=function(){var e,t=document.getElementById("textarr"),a=_.state.value,r=0,n=(a+="").length;if(0!==a.length){for(var s=0;s<n;s++){switch(e=a.charAt(s)){case"a":case"A":e=10;break;case"b":case"B":e=11;break;case"c":case"C":e=12;break;case"d":case"D":e=13;break;case"e":case"E":e=14;break;case"f":case"F":e=15;break;default:e=parseInt(e)}r+=e*Math.pow(16,n-1-s)}t.value="",_.setState({convertedValue:r})}_.setState({value:""})},_.swap=function(){"main"===_.state.func?(_.setState({func:"sec"}),console.log("Main Conversion")):(_.setState({func:"main"}),console.log("Sec Conversion")),_.setState({value:"",convertedValue:""})},_}return Object(_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_React$Component),Object(_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calc"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TextArrea__WEBPACK_IMPORTED_MODULE_7__.a,{value:this.state.value,onChange:this.inputReceiver,placeholder:conversionConfig[this.state.conversionType][this.state.func].placeholder,readonly:!1}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"buts"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{id:"sub",butType:"Submit",onClick:eval("this."+conversionConfig[this.state.conversionType][this.state.func].function)}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{id:"swap",butType:"Swap",onClick:this.swap})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TextArrea__WEBPACK_IMPORTED_MODULE_7__.a,{value:this.state.convertedValue,placeholder:"",readonly:!0}))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);Calculator.contextType=_ConvertContext__WEBPACK_IMPORTED_MODULE_8__.b,__webpack_exports__.a=Calculator},,,,function(e,_,t){e.exports=t.p+"static/media/icon.21965593.svg"},,,,function(e,_,t){e.exports=t(42)},,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_TextArrea__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(11),_Header__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(14),conversionConfig={decToBin:{placeholder:"Enter decimal number here",function:"decToBin"},binToDec:{placeholder:"Enter binary number here",function:"binToDec"}},Calculator=function(_React$Component){function Calculator(){var e,_;Object(_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(_=Object(_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(e=Object(_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator)).call.apply(e,[this].concat(a)))).state={value:"",convertedValue:"",conversionType:"decToBin"},_.inputReceiver=function(e){var t=e.target.value;_.setState({value:t})},_.decToBin=function(){var e=_.state.value;if(0!==e.length){for(var t,a="",r=e=parseInt(e);0!==r;)t=r%2,r=Math.floor(r/=2),a=t+a;_.setState({convertedValue:a})}_.setState({value:""}),console.log("CONVERTING DECIMAL TO BINARY!")},_.binToDec=function(){var e=document.getElementById("textarr"),t=_.state.value,a=0,r=(t+="").length;if(0!==t.length){for(var n=0;n<r;n++)a+=parseInt(t.charAt(n))*Math.pow(2,r-1-n);e.value="",_.setState({convertedValue:a})}_.setState({value:""})},_.swap=function(){"decToBin"===_.state.conversionType?(_.setState({conversionType:"binToDec"}),console.log("DECIMAL TO BINARY")):(_.setState({conversionType:"decToBin"}),console.log("BIN TO DEC")),_.setState({value:"",convertedValue:""})},_}return Object(_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_React$Component),Object(_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_8__.a,{converter:"binary"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calc"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TextArrea__WEBPACK_IMPORTED_MODULE_7__.a,{value:this.state.value,onChange:this.inputReceiver,placeholder:conversionConfig[this.state.conversionType].placeholder,readonly:!1}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"buts"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{id:"sub",butType:"Submit",onClick:eval("this."+conversionConfig[this.state.conversionType].function)}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{id:"swap",butType:"Swap",onClick:this.swap})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TextArrea__WEBPACK_IMPORTED_MODULE_7__.a,{value:this.state.convertedValue,placeholder:"",readonly:!0})))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),_unused_webpack_default_export=Calculator},function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_TextArrea__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(11),_Header__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(14),conversionConfig={decToHex:{placeholder:"Enter decimal number here",function:"decToHex"},hexToDec:{placeholder:"Enter hexadecimal number here",function:"hexToDec"}},Calculator=function(_React$Component){function Calculator(){var e,_;Object(_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(_=Object(_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(e=Object(_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator)).call.apply(e,[this].concat(a)))).state={value:"",convertedValue:"",conversionType:"decToHex"},_.inputReceiver=function(e){var t=e.target.value;_.setState({value:t})},_.decToHex=function(){var e=_.state.value;if(0!==e.length){for(var t,a="",r=e=parseInt(e);0!==r;){switch(t=r%16,r=Math.floor(r/=16),t){case 10:t="A";break;case 11:t="B";break;case 12:t="C";break;case 13:t="D";break;case 14:t="E";break;case 15:t="F"}a=t+a}_.setState({convertedValue:a})}_.setState({value:""}),console.log("CONVERTING DECIMAL TO BINARY!")},_.hexToDec=function(){var e,t=document.getElementById("textarr"),a=_.state.value,r=0,n=(a+="").length;if(0!==a.length){for(var s=0;s<n;s++){switch(e=a.charAt(s)){case"a":case"A":e=10;break;case"b":case"B":e=11;break;case"c":case"C":e=12;break;case"d":case"D":e=13;break;case"e":case"E":e=14;break;case"f":case"F":e=15;break;default:e=parseInt(e)}r+=e*Math.pow(16,n-1-s)}t.value="",_.setState({convertedValue:r})}_.setState({value:""})},_.swap=function(){"decToHex"===_.state.conversionType?_.setState({conversionType:"hexToDec"}):_.setState({conversionType:"decToHex"}),_.setState({value:"",convertedValue:""})},_}return Object(_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_React$Component),Object(_Users_vst_Desktop_vs_js_bina_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_8__.a,{converter:"hex"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calc"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TextArrea__WEBPACK_IMPORTED_MODULE_7__.a,{value:this.state.value,onChange:this.inputReceiver,placeholder:conversionConfig[this.state.conversionType].placeholder,readonly:!1}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"buts"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{id:"sub",butType:"Submit",onClick:eval("this."+conversionConfig[this.state.conversionType].function)}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{id:"swap",butType:"Swap",onClick:this.swap})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TextArrea__WEBPACK_IMPORTED_MODULE_7__.a,{value:this.state.convertedValue,placeholder:"",readonly:!0})))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),_unused_webpack_default_export=Calculator},function(e,_,t){},function(e,_,t){"use strict";t.r(_);var a=t(0),r=t.n(a),n=t(24),s=t.n(n),o=t(2),c=t(3),l=t(5),u=t(4),i=t(6),E=t(14),b=t(21),p=(t(39),t(40),t(41),t(17)),O=t(13),v=t(12),d=function(e){function _(){return Object(o.a)(this,_),Object(l.a)(this,Object(u.a)(_).apply(this,arguments))}return Object(i.a)(_,e),Object(c.a)(_,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(p.a,null,r.a.createElement(E.a,null),r.a.createElement(O.a,{exact:!0,path:"/",render:function(){return r.a.createElement(b.a,null)}}),r.a.createElement(O.a,{exact:!0,path:"/hex",render:function(){return r.a.createElement(b.a,null)}}))))}}]),_}(r.a.Component);d.contextType=v.b;var D=d;s.a.render(r.a.createElement(D,null),document.querySelector("#root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.1fe5589d.chunk.js.map