(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{435:function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"f",(function(){return c})),e.d(n,"c",(function(){return m})),e.d(n,"b",(function(){return f})),e.d(n,"e",(function(){return v})),e.d(n,"g",(function(){return y})),e.d(n,"h",(function(){return x})),e.d(n,"d",(function(){return k})),e.d(n,"i",(function(){return S}));e(24),e(200),e(60),e(201),e(38);var r=e(275),o=e.n(r),l=function(source){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o()("array"===t.type?[]:{},source,{clone:!0})},c=function(t,source){return o()(t,source)},d=/^\d+(\.\d+)?$/,h=/px|r?em|vw|vh|%$/,m=function(t){return d.test(t)?t+"px":h.test(t)?t:void 0},f=function(t){if("string"==typeof t)return t.split(/[\s\-\/]/).map((function(t){return/[A-z]/i.test(t)?t:t+"px"})).join(" ")},v=function(t){return/^(http|https)/.test(t)},y=function(t){var link=document.createElement("a");link.href=t,link.target="_blank",link.style.display="none",document.body.appendChild(link),link.click(),document.body.removeChild(link)};function x(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.model;return e.map((function(e,r){var o=e.props;return o.value=e.children,o.animation=e.animation,o.index=r,t(n.mode+"-"+e.name,{props:o,domProps:e.domProps})}))}var O=null,k=function(){return O},S=function(t){return O=t}},436:function(t,n,e){"use strict";var r=e(13),o=(e(274),e(38),e(61),e(34),e(23),e(27),e(11),e(45),e(22),e(46),e(435)),l={props:{width:[String,Number],height:[String,Number],padding:String,border:String,margin:String,backgroundColor:String,backgroundImage:String,borderRadius:[String,Number]},computed:{boxStyle:function(){var t=this.currentProps,n=Object(o.c)(t.width),e=Object(o.c)(t.height),r=Object(o.b)(t.padding),l=Object(o.b)(t.margin),c=t.backgroundImage?"url("+t.backgroundImage+")":void 0,d=Object(o.c)(t.borderRadius);return{width:n,height:e,padding:r,margin:l,backgroundColor:t.backgroundColor,backgroundImage:c,borderRadius:d}}}},c={props:{top:String,right:String,bottom:String,left:String,zIndex:[String,Number]},computed:{positionStyle:function(){var t=this.currentProps,n=Object(o.c)(t.top),e=Object(o.c)(t.right),r=Object(o.c)(t.bottom),l=Object(o.c)(t.left);return{position:n||e||r||l?"absolute":void 0,top:n,right:e,bottom:r,left:l,zIndex:t.zIndex}}}},d={props:{linkUrl:String},computed:{linkStyle:function(){return{cursor:this.linkUrl?"pointer":void 0}}},mounted:function(){this.$el.addEventListener("click",this.clickHandler)},beforeDestroy:function(){this.$el.removeEventListener("click",this.clickHandler)},methods:{clickHandler:function(t){this.linkUrl&&(t.stopPropagation(),Object(o.e)(this.linkUrl)?Object(o.g)(this.linkUrl):window.$nuxt.context.redirect(this.linkUrl))}}},animate=(e(60),{props:{animation:Array},beforeCreate:function(){this.inAnimation=!1,this.animated=!1,this.activeAnimation="",this.animationQueue=[]},data:function(){return{currentAnimation:this.animation||[]}},methods:{runAnimation:function(){0===this.currentAnimation.length||this.inAnimation||this.animated||(this.inAnimation=!0,this.animationQueue=this.currentAnimation.map((function(t){return t.value})),this.$el.addEventListener("animationend",this.animationendHandler),this.doNextAnimation())},doNextAnimation:function(){this.activeAnimation=this.animationQueue.shift(),this.activeAnimation?this.$el.classList.add("animated",this.activeAnimation):(this.inAnimation=!1,this.animated=!0,this.$el.removeEventListener("animationend",this.animationendHandler))},animationendHandler:function(t){this.$el.classList.remove("animated",this.activeAnimation),this.doNextAnimation()}}});function h(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}n.a={mixins:[l,c,d,animate],props:{index:Number},beforeCreate:function(){var t=this.$options.name;this.mode=t.slice(0,t.indexOf("-"))},data:function(){return{currentProps:Object(o.a)(this.$options.propsData)}},computed:{baseStyle:function(){return m(m(m({},this.boxStyle),this.positionStyle),this.linkStyle)}}}},438:function(t,n,e){"use strict";function r(){return r=Object.assign||function(a){for(var b,t=1;t<arguments.length;t++)for(var n in b=arguments[t])Object.prototype.hasOwnProperty.call(b,n)&&(a[n]=b[n]);return a},r.apply(this,arguments)}var o=["attrs","props","domProps"],l=["class","style","directives"],c=["on","nativeOn"],d=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};t.exports=function(a){return a.reduce((function(t,a){for(var b in a)if(t[b])if(-1!==o.indexOf(b))t[b]=r({},t[b],a[b]);else if(-1!==l.indexOf(b)){var n=t[b]instanceof Array?t[b]:[t[b]],e=a[b]instanceof Array?a[b]:[a[b]];t[b]=n.concat(e)}else if(-1!==c.indexOf(b))for(var h in a[b])if(t[b][h]){var g=t[b][h]instanceof Array?t[b][h]:[t[b][h]],m=a[b][h]instanceof Array?a[b][h]:[a[b][h]];t[b][h]=g.concat(m)}else t[b][h]=a[b][h];else if("hook"==b)for(var i in a[b])t[b][i]=t[b][i]?d(t[b][i],a[b][i]):a[b][i];else t[b]=a[b];else t[b]=a[b];return t}),{})}},442:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return o}));var r=function(){return[{label:"产品介绍",path:"https://element.eleme.cn/#/zh-CN/component/installation",children:[]},{label:"解决方案",path:"",children:[]},{label:"合作共赢",path:"",children:[]},{label:"关于我们",path:"",children:[]},{label:"新闻资讯",path:"",children:[]},{label:"人才招聘",path:"",children:[]}]},o=function(){return[{label:"关于倍施特",children:[{label:"发展简介",url:""},{label:"发展历程",url:""},{label:"企业文化",url:""},{label:"荣誉成就",url:""}]},{label:"产品介绍",children:[{label:"个人用户产品",url:""},{label:"企业用户产品",url:""},{label:"政府/事业单位产品",url:""}]},{label:"解决方案",children:[{label:"OTS解决方案",url:""}]},{label:"合作共赢",children:[{label:"合作方式",url:""}]},{label:"新闻资讯",children:[{label:"公司新闻",url:""},{label:"行业新闻",url:""}]},{label:"购票网站",children:[{label:"团子出行官网",url:""}]},{label:"意见反馈",children:[{label:"意见反馈",url:""}]}]}},444:function(t,n,e){"use strict";var base=e(436),r={props:{direction:String,horizontal:String,vertical:String},computed:{flexClasses:function(){var t=[],n=this.currentProps,e=n.direction,r=n.horizontal,o=n.vertical;return(e||r||o)&&(t.push("v-flex"),t.push(e,r,o)),t}}},o=e(435);n.a={mixins:[base.a,r],props:{value:Array},data:function(){return{model:this.value||[]}},methods:{renderChildren:o.h}}},469:function(t,n,e){var content=e(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(53).default)("339a1f8e",content,!0,{sourceMap:!1})},495:function(t,n,e){"use strict";e(469)},496:function(t,n,e){var r=e(52)(!1);r.push([t.i,".smartable-header{position:-webkit-sticky;position:sticky;top:0;right:0;left:0;z-index:10;background-color:#14151a;display:flex;align-items:center;min-width:1000px;height:60px;padding:0 40px}.smartable-logo img{-o-object-fit:contain;object-fit:contain}.smartable-menu{display:flex;justify-content:flex-start;align-items:center;margin:0 40px}.smartable-menu__item{list-style:none;display:inline-block;height:34px;line-height:34px;padding:0 20px}.smartable-menu__link{text-decoration:none;color:inherit;font-size:14px;font-weight:400;cursor:pointer}.smartable-menu__link:hover{color:#6398ff}.smartable-menu__link.is-active{color:#fff;font-weight:500}.smartable-menu .el-dropdown{color:inherit}",""]),t.exports=r},520:function(t,n,e){"use strict";e.r(n);var r=e(438),o=e.n(r),l=e(7),base=(e(35),e(60),e(442)),c={name:"v-menu",mixins:[e(444).a],props:{color:String},data:function(){return{menuData:Object(base.b)()}},render:function(t){return t("header",{class:["smartable-header"].concat(Object(l.a)(this.flexClasses)),style:this.currentStyle},[t("div",{class:"smartable-logo"},[t("img",{attrs:{src:"https://www.uupoop.com/vue_dist/img/uupoop.8e88ff95.svg"}})]),t("ul",{class:"smartable-menu",style:this.menuStyle},[this.renderMenuItems(t)])])},computed:{currentStyle:function(){var style=this.baseStyle;return this.currentProps.width&&(style.margin="0 auto"),style},menuStyle:function(){return{color:this.currentProps.color}}},methods:{renderMenuItems:function(t){var n=this;return this.menuData.map((function(e){return t("li",{class:"smartable-menu__item"},[0===e.children.length?n.renderLink(t,e):n.renderSubmenu(t,e)])}))},renderLink:function(t,n){return t("a",{attrs:{src:n.path},class:"smartable-menu__link"},[n.label])},renderSubmenu:function(t,n){var e=this,r=n.children.map((function(n){return t("el-dropdown-item",[e.renderLink(t,n)])}));return t("el-dropdown",o()([{},{props:{trigger:"click"}}]),[t("span",{class:"smartable-menu__link"},[n.label," ",t("i",{class:"el-icon-arrow-down"})]),t("el-dropdown-menu",{slot:"dropdown"},[r])])}}},d=(e(495),e(37)),component=Object(d.a)(c,undefined,undefined,!1,null,null,null);n.default=component.exports}}]);