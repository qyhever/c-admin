(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-44f0"],{"2J2m":function(e,t,n){},"9yIC":function(e,t,n){},A7De:function(e,t,n){"use strict";var r=n("Svzt");n.n(r).a},ArBV:function(e,t,n){"use strict";var r=n("RsIi");n.n(r).a},C8qJ:function(e,t,n){"use strict";var r=new(n("Kw5r").default);t.a=r},KL4A:function(e,t,n){"use strict";var r=n("2J2m");n.n(r).a},MV9w:function(e,t,n){"use strict";var r=n("PUe/");n.n(r).a},"PUe/":function(e,t,n){},RsIi:function(e,t,n){},Svzt:function(e,t,n){},jg4p:function(e,t,n){"use strict";var r=n("9yIC");n.n(r).a},"k7+O":function(e,t){
/*!
* screenfull
* v4.0.1 - 2019-02-18
* (c) Sindre Sorhus; MIT License
*/
!function(){"use strict";var t="undefined"!=typeof window&&void 0!==window.document?window.document:{},n=void 0!==e&&e.exports,r="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,i=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,i=n.length,a={};r<i;r++)if((e=n[r])&&e[1]in t){for(r=0;r<e.length;r++)a[n[0][r]]=e[r];return a}return!1}(),a={change:i.fullscreenchange,error:i.fullscreenerror},l={request:function(e){return new Promise(function(n){var a=i.requestFullscreen,l=function(){this.off("change",l),n()}.bind(this);e=e||t.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?e[a]():e[a](r?Element.ALLOW_KEYBOARD_INPUT:{}),this.on("change",l)}.bind(this))},exit:function(){return new Promise(function(e){if(this.isFullscreen){var n=function(){this.off("change",n),e()}.bind(this);t[i.exitFullscreen](),this.on("change",n)}else e()}.bind(this))},toggle:function(e){return this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var r=a[e];r&&t.addEventListener(r,n,!1)},off:function(e,n){var r=a[e];r&&t.removeEventListener(r,n,!1)},raw:i};i?(Object.defineProperties(l,{isFullscreen:{get:function(){return Boolean(t[i.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[i.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(t[i.fullscreenEnabled])}}}),n?e.exports=l:window.screenfull=l):n?e.exports=!1:window.screenfull=!1}()},vRGJ:function(e,t){e.exports=d,e.exports.parse=a,e.exports.compile=function(e,t){return l(a(e,t))},e.exports.tokensToFunction=l,e.exports.tokensToRegExp=u;var n="/",r="./",i=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function a(e,t){for(var a,l=[],c=0,u=0,d="",f=t&&t.delimiter||n,h=t&&t.delimiters||r,m=!1;null!==(a=i.exec(e));){var p=a[0],v=a[1],b=a.index;if(d+=e.slice(u,b),u=b+p.length,v)d+=v[1],m=!0;else{var g="",w=e[u],x=a[2],_=a[3],E=a[4],y=a[5];if(!m&&d.length){var k=d.length-1;h.indexOf(d[k])>-1&&(g=d[k],d=d.slice(0,k))}d&&(l.push(d),d="",m=!1);var C=""!==g&&void 0!==w&&w!==g,F="+"===y||"*"===y,S="?"===y||"*"===y,$=g||f,M=_||E;l.push({name:x||c++,prefix:g,delimiter:$,optional:S,repeat:F,partial:C,pattern:M?s(M):"[^"+o($)+"]+?"})}}return(d||u<e.length)&&l.push(d+e.substr(u)),l}function l(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var i="",a=r&&r.encode||encodeURIComponent,l=0;l<e.length;l++){var o=e[l];if("string"!=typeof o){var s,c=n?n[o.name]:void 0;if(Array.isArray(c)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but got array');if(0===c.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var u=0;u<c.length;u++){if(s=a(c[u],o),!t[l].test(s))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'"');i+=(0===u?o.prefix:o.delimiter)+s}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!o.optional)throw new TypeError('Expected "'+o.name+'" to be '+(o.repeat?"an array":"a string"));o.partial&&(i+=o.prefix)}else{if(s=a(String(c),o),!t[l].test(s))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but got "'+s+'"');i+=o.prefix+s}}else i+=o}return i}}function o(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$/()])/g,"\\$1")}function c(e){return e&&e.sensitive?"":"i"}function u(e,t,i){for(var a=(i=i||{}).strict,l=!1!==i.start,s=!1!==i.end,u=o(i.delimiter||n),d=i.delimiters||r,f=[].concat(i.endsWith||[]).map(o).concat("$").join("|"),h=l?"^":"",m=0===e.length,p=0;p<e.length;p++){var v=e[p];if("string"==typeof v)h+=o(v),m=p===e.length-1&&d.indexOf(v[v.length-1])>-1;else{var b=v.repeat?"(?:"+v.pattern+")(?:"+o(v.delimiter)+"(?:"+v.pattern+"))*":v.pattern;t&&t.push(v),v.optional?v.partial?h+=o(v.prefix)+"("+b+")?":h+="(?:"+o(v.prefix)+"("+b+"))?":h+=o(v.prefix)+"("+b+")"}}return s?(a||(h+="(?:"+u+")?"),h+="$"===f?"$":"(?="+f+")"):(a||(h+="(?:"+u+"(?="+f+"))?"),m||(h+="(?="+u+"|"+f+")")),new RegExp(h,c(i))}function d(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(d(e[i],t,n).source);return new RegExp("(?:"+r.join("|")+")",c(n))}(e,t,n):function(e,t,n){return u(a(e,n),t,n)}(e,t,n)}},vhjy:function(e,t,n){"use strict";n.r(t);var r=n("QbLZ"),i=n.n(r),a=n("L2JU");var l={name:"Sliderbar",data:function(){return{}},computed:i()({},Object(a.c)(["collapsed"]),{routers:function(){return function e(t){return t.filter(function(t){return!t.hiddenInMenu&&(t.children&&(t.children=e(t.children)),!0)})}(this.$store.getters.routers)},activeMenu:function(){var e=this.$route,t=e.meta,n=e.path;return t.activeMenu?t.activeMenu:n}}),methods:{handleSelect:function(e){this.$router.push({path:e,query:{t:+new Date}})}}},o=(n("jg4p"),n("KHd+")),s=Object(o.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper"}},[n("el-menu",{staticClass:"menu",attrs:{router:"","default-active":e.activeMenu,"background-color":"#001529","active-text-color":"#fff","text-color":"#ffffffa6",collapse:e.collapsed,"unique-opened":""},on:{select:e.handleSelect}},[e._l(e.routers,function(t){return[t.children&&t.children.length>1?[n("el-submenu",{key:t.path,attrs:{index:t.path}},[n("template",{slot:"title"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":t.meta.icon}}),e._v(" "),n("span",[e._v(e._s(t.meta.title))])],1),e._v(" "),e._l(t.children,function(t){return n("el-menu-item",{key:t.path,attrs:{index:t.path}},[e._v("\n            "+e._s(t.meta.title)+"\n          ")])})],2)]:[n("el-menu-item",{key:t.children[0].path,attrs:{index:t.children[0].path}},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":t.children[0].meta.icon}}),e._v(" "),n("span",[e._v(e._s(t.children[0].meta.title))])],1)]]})],2)],1)},[],!1,null,"019072b1",null);s.options.__file="siderbar.vue";var c=s.exports,u=n("14Xm"),d=n.n(u),f=n("D3Ub"),h=n.n(f),m={name:"MenuFold"},p=Object(o.a)(m,function(){var e=this.$createElement,t=this._self._c||e;return t("i",{staticClass:"menu-fold"},[t("svg",{attrs:{viewBox:"64 64 896 896","data-icon":"menu-fold",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}},[t("path",{attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z"}})])])},[],!1,null,null,null);p.options.__file="menu-fold.vue";var v=p.exports,b={name:"MenuUnfold"},g=Object(o.a)(b,function(){var e=this.$createElement,t=this._self._c||e;return t("i",{staticClass:"menu-unfold"},[t("svg",{attrs:{viewBox:"64 64 896 896","data-icon":"menu-unfold",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}},[t("path",{attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"}})])])},[],!1,null,null,null);g.options.__file="menu-unfold.vue";var w=g.exports,x=n("k7+O"),_=n.n(x),E=n("C8qJ"),y={name:"HomeHeader",components:{MenuFold:v,MenuUnfold:w},data:function(){return{isFullscreen:!1}},computed:i()({},Object(a.c)(["collapsed","userInfo"])),mounted:function(){this.init()},methods:{handleFullscreen:function(){if(!_.a.enabled)return this.$message({message:"当前浏览器不支持此功能",type:"warning"}),!1;_.a.toggle()},init:function(){var e=this;_.a.enabled&&_.a.on("change",function(){e.isFullscreen=_.a.isFullscreen})},toggleMenu:function(){this.$store.commit("TOGGLE_MENU"),E.a.$emit("toggleMenu")},handleDropdown:function(e){var t=this;return h()(d.a.mark(function n(){return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("a"!==e){n.next=3;break}n.next=6;break;case 3:return n.next=5,t.$store.dispatch("logout");case 5:t.$router.replace("/login?redirect="+t.$route.fullPath);case 6:case"end":return n.stop()}},n,t)}))()}}},k=(n("A7De"),Object(o.a)(y,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-header",{staticClass:"header"},[n("div",{staticClass:"menu-collapse",on:{click:e.toggleMenu}},[e.collapsed?n("menu-unfold",{staticClass:"icon-menu"}):n("menu-fold",{staticClass:"icon-menu"})],1),e._v(" "),n("div",{staticClass:"header-right"},[n("div",{staticClass:"full-wrapper",on:{click:e.handleFullscreen}},[n("svg-icon",{staticClass:"full",attrs:{"icon-class":e.isFullscreen?"exit-fullscreen":"fullscreen"}})],1),e._v(" "),n("el-dropdown",{staticClass:"user",attrs:{"show-timeout":50},on:{command:e.handleDropdown}},[n("div",[n("span",{staticClass:"userName"},[e._v(e._s(e.userInfo.userName))]),e._v(" "),n("img",{staticClass:"avatar",attrs:{src:e.userInfo.avatar,alt:e.userInfo.userName}})]),e._v(" "),n("el-dropdown-menu",{staticClass:"dropdown-menu",attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"b"}},[e._v("退出登录")])],1)],1)],1)])},[],!1,null,"f2d6ad4c",null));k.options.__file="header-bar.vue";var C=k.exports,F=n("vRGJ"),S=n.n(F),$={data:function(){return{list:[]}},watch:{$route:function(){this.getBreadcrumb()}},created:function(){this.getBreadcrumb()},methods:{getBreadcrumb:function(){var e=this.$route.matched.filter(function(e){return e.name}),t=e[0];t&&"dashboard"!==t.name.trim().toLocaleLowerCase()&&(e=[{path:"/dashboard",meta:{title:"首页"}}].concat(e)),this.list=e},pathCompile:function(e){var t=this.$route.params;return S.a.compile(e)(t)},handleLink:function(e){var t=e.redirect,n=e.path;t?this.$router.push(t):this.$router.push(this.pathCompile(n))}}},M=(n("MV9w"),Object(o.a)($,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-breadcrumb",{staticClass:"bread",attrs:{separator:"/"}},[e._l(e.list,function(t,r){return[t.meta&&t.meta.title?n("el-breadcrumb-item",{key:t.path},["/dashboard"===t.path?n("router-link",{attrs:{to:"/dashboard"}},[e._v(e._s(t.meta.title))]):t.redirect&&r!==e.list.length-1?n("a",{on:{click:function(n){n.preventDefault(),e.handleClick(t)}}},[e._v(e._s(t.meta.title))]):n("span",[e._v(e._s(t.meta.title))])],1):e._e()]})],2)},[],!1,null,"7227824b",null));M.options.__file="breadcrumb.vue";var L=M.exports,T={name:"BackToTop",props:{dom:{default:function(){return window}},visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:function(){return{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}},transitionName:{type:String,default:"fade"}},data:function(){return{visible:!1,isMoving:!1}},watch:{dom:function(e){e&&e.addEventListener("scroll",this.handleScroll)}},mounted:function(){this.dom&&this.dom.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){this.dom&&this.dom.removeEventListener("scroll",this.handleScroll),this.timer&&clearInterval(this.timer)},methods:{handleScroll:function(){var e=0;e=this.dom?this.dom.scrollTop:window.pageYOffset,this.alreadyScroll=e,this.visible=e>this.visibilityHeight},backToTop:function(){var e=this,t=this.alreadyScroll;this.timer=setInterval(function(){var n=t-0;t-=n/6,Math.abs(n)>1?e.dom.scrollTop=t:(e.dom.scrollTop=t,clearInterval(e.timer))},16)}}},O=(n("KL4A"),Object(o.a)(T,function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:this.transitionName}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:this.customStyle,on:{click:this.backToTop}},[t("svg",{staticClass:"Icon Icon--backToTopArrow",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[t("title",[this._v("回到顶部")]),this._v(" "),t("g",[t("path",{attrs:{d:"M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z","fill-rule":"evenodd"}})])])])])},[],!1,null,"cf9ce15a",null));O.options.__file="back-top.vue";var z={name:"BasiceLayout",components:{Siderbar:c,HeaderBar:C,BackTop:O.exports,Breadcrumb:L},data:function(){return{scrollEle:null}},mounted:function(){var e=this;setTimeout(function(){e.scrollEle=document.querySelector("#scrollWrapper")},20)}},j=(n("ArBV"),Object(o.a)(z,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home"},[t("siderbar"),this._v(" "),t("el-container",{staticClass:"container",attrs:{id:"scrollWrapper"}},[t("header-bar"),this._v(" "),t("breadcrumb"),this._v(" "),t("el-main",[t("transition",{attrs:{name:"fade-main",mode:"out-in"}},[t("router-view")],1)],1),this._v(" "),t("el-footer",{staticClass:"footer"},[this._v("2018 © 正在缓冲99% 允许侵权")]),this._v(" "),t("el-tooltip",{attrs:{placement:"top",content:"返回顶部"}},[t("back-top",{attrs:{dom:this.scrollEle,transitionName:"fade",visibilityHeight:300,backPosition:50}})],1)],1)],1)},[],!1,null,"86cddf5e",null));j.options.__file="basic-layout.vue";t.default=j.exports}}]);