(window.webpackJsonp=window.webpackJsonp||[]).push([[14,26],{435:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return f})),n.d(t,"e",(function(){return v})),n.d(t,"g",(function(){return x})),n.d(t,"h",(function(){return w})),n.d(t,"d",(function(){return O})),n.d(t,"i",(function(){return _}));n(24),n(200),n(60),n(201),n(38);var o=n(275),r=n.n(o),c=function(source){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r()("array"===e.type?[]:{},source,{clone:!0})},d=function(e,source){return r()(e,source)},l=/^\d+(\.\d+)?$/,h=/px|r?em|vw|vh|%$/,m=function(e){return l.test(e)?e+"px":h.test(e)?e:void 0},f=function(e){if("string"==typeof e)return e.split(/[\s\-\/]/).map((function(e){return/[A-z]/i.test(e)?e:e+"px"})).join(" ")},v=function(e){return/^(http|https)/.test(e)},x=function(e){var link=document.createElement("a");link.href=e,link.target="_blank",link.style.display="none",document.body.appendChild(link),link.click(),document.body.removeChild(link)};function w(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.model;return n.map((function(n,o){var r=n.props;return r.value=n.children,r.animation=n.animation,r.index=o,e(t.mode+"-"+n.name,{props:r,domProps:n.domProps})}))}var y=null,O=function(){return y},_=function(e){return y=e}},436:function(e,t,n){"use strict";var o=n(13),r=(n(274),n(38),n(61),n(34),n(23),n(27),n(11),n(45),n(22),n(46),n(435)),c={props:{width:[String,Number],height:[String,Number],padding:String,border:String,margin:String,backgroundColor:String,backgroundImage:String,borderRadius:[String,Number]},computed:{boxStyle:function(){var e=this.currentProps,t=Object(r.c)(e.width),n=Object(r.c)(e.height),o=Object(r.b)(e.padding),c=Object(r.b)(e.margin),d=e.backgroundImage?"url("+e.backgroundImage+")":void 0,l=Object(r.c)(e.borderRadius);return{width:t,height:n,padding:o,margin:c,backgroundColor:e.backgroundColor,backgroundImage:d,borderRadius:l}}}},d={props:{top:String,right:String,bottom:String,left:String,zIndex:[String,Number]},computed:{positionStyle:function(){var e=this.currentProps,t=Object(r.c)(e.top),n=Object(r.c)(e.right),o=Object(r.c)(e.bottom),c=Object(r.c)(e.left);return{position:t||n||o||c?"absolute":void 0,top:t,right:n,bottom:o,left:c,zIndex:e.zIndex}}}},l={props:{linkUrl:String},computed:{linkStyle:function(){return{cursor:this.linkUrl?"pointer":void 0}}},mounted:function(){this.$el.addEventListener("click",this.clickHandler)},beforeDestroy:function(){this.$el.removeEventListener("click",this.clickHandler)},methods:{clickHandler:function(e){this.linkUrl&&(e.stopPropagation(),Object(r.e)(this.linkUrl)?Object(r.g)(this.linkUrl):window.$nuxt.context.redirect(this.linkUrl))}}},animate=(n(60),{props:{animation:Array},beforeCreate:function(){this.inAnimation=!1,this.animated=!1,this.activeAnimation="",this.animationQueue=[]},data:function(){return{currentAnimation:this.animation||[]}},methods:{runAnimation:function(){0===this.currentAnimation.length||this.inAnimation||this.animated||(this.inAnimation=!0,this.animationQueue=this.currentAnimation.map((function(e){return e.value})),this.$el.addEventListener("animationend",this.animationendHandler),this.doNextAnimation())},doNextAnimation:function(){this.activeAnimation=this.animationQueue.shift(),this.activeAnimation?this.$el.classList.add("animated",this.activeAnimation):(this.inAnimation=!1,this.animated=!0,this.$el.removeEventListener("animationend",this.animationendHandler))},animationendHandler:function(e){this.$el.classList.remove("animated",this.activeAnimation),this.doNextAnimation()}}});function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={mixins:[c,d,l,animate],props:{index:Number},beforeCreate:function(){var e=this.$options.name;this.mode=e.slice(0,e.indexOf("-"))},data:function(){return{currentProps:Object(r.a)(this.$options.propsData)}},computed:{baseStyle:function(){return m(m(m({},this.boxStyle),this.positionStyle),this.linkStyle)}}}},437:function(e,t,n){var content=n(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("20b25f41",content,!0,{sourceMap:!1})},439:function(e,t,n){"use strict";n(437)},440:function(e,t,n){var o=n(52)(!1);o.push([e.i,".custom-contextmenu__wrapper{position:absolute;top:0;left:0;z-index:10;background-color:#fff;border:1px solid #ebeef5;border-radius:4px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1)}.custom-contextmenu__list{list-style:none;color:#303133;padding:10px 0}.custom-contextmenu__item{padding:0 20px;font-size:14px;color:#606266;height:34px;line-height:34px;box-sizing:border-box;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.custom-contextmenu__item:hover{background-color:#f5f7fa}",""]),e.exports=o},441:function(e,t,n){"use strict";n(38),n(61),n(145);var o,r=n(435),c={beforeCreate:function(){var e=this.$options.name;this.shortName=e.slice(e.indexOf("-")+1)},created:function(){var e=Object(r.a)(this.currentProps);delete e.value,delete e.animation,this.viewModel={name:this.shortName,props:e,children:[],animation:Object(r.a)(this.currentAnimation,{type:"array"}),domProps:{}};for(var t=this.$parent||this.$root;t&&!t.mode;)t=t.$parent;this._vparent=t,this.pushModel()},methods:{pushModel:function(){"number"==typeof this.index?this._vparent.viewModel.children[this.index]=this.viewModel:this._vparent.viewModel.children.push(this.viewModel)},removeModel:function(){var e=this._vparent.viewModel.children.indexOf(this.viewModel);this._vparent.viewModel.children.splice(e,1)},updateModel:function(){var e=this._vparent.viewModel.children.indexOf(this.viewModel);this._vparent.viewModel.children.splice(e,1,this.viewModel)},removeAll:function(){this._vparent.model.splice(this.index,1),this.removeModel()}}},d={mounted:function(){this.$el.addEventListener("click",this.clickHandler,!1)},beforeDestroy:function(){this.$el.removeEventListener("click",this.clickHandler,!1)},methods:{clickHandler:function(e){e.preventDefault(),e.stopPropagation();var t=Object(r.d)();this.$el!==t&&(this.$el.classList.add("selected-border"),t&&t.classList.remove("selected-border"),Object(r.i)(this.$el),this.$store.dispatch("proper/renderRightbar",{instance:this,name:this.shortName,props:this.currentProps,animation:this.currentAnimation}))},updateProps:function(e){var t=Object(r.a)(e);delete t.value,delete t.animation,this.currentProps=e,this.viewModel.props=t,this.updateModel()},updateAnimation:function(e){this.currentAnimation=e,this.viewModel.animation=Object(r.a)(e,{type:"array"}),this.updateModel()}}},l=(n(35),n(0)),h={name:"CustomContextmenu",data:function(){return{visible:!1}},mounted:function(){this.$el.addEventListener("mousedown",this.mousedownHandler)},beforeDestroy:function(){this.$el.removeEventListener("mousedown",this.mousedownHandler)},methods:{mousedownHandler:function(e){e.stopPropagation()},handleClick:function(e){this.$emit(e),this.visible=!1}}},m=(n(439),n(37)),main=Object(m.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"custom-contextmenu__wrapper"},[n("ul",{staticClass:"custom-contextmenu__list"},[n("li",{staticClass:"custom-contextmenu__item",on:{click:function(t){return e.handleClick("remove")}}},[e._v("删除")])])])}),[],!1,null,null,null).exports,f=l.default.extend(main);function v(e){(o=o||new f({el:document.createElement("div")}))._events&&o._events.remove?o._events.remove.splice(0,1,e.onRemove):o.$on("remove",e.onRemove),!o.$el&&o.$mount(),o.$el.style.left=e.pageX+1+"px",o.$el.style.top=e.pageY+1+"px",document.body.appendChild(o.$el),l.default.nextTick((function(){o.visible=!0}))}v.show=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];v.call.apply(v,[this].concat(t))},v.hide=function(){o&&o.visible&&(o.visible=!1,o.$el.parentNode.removeChild(o.$el))};var x={mounted:function(){this.$el.addEventListener("contextmenu",this.contextmenuHandler)},beforeDestroy:function(){this.$el.removeEventListener("contextmenu",this.contextmenuHandler)},methods:{contextmenuHandler:function(e){e.preventDefault(),v.show({pageX:e.pageX,pageY:e.pageY,onRemove:this.handleRemove,onCopy:this.handleCopy}),document.addEventListener("mousedown",this.contextmenuHideHandler)},contextmenuHideHandler:function(e){v.hide(),document.removeEventListener("mousedown",this.contextmenuHideHandler)},handleRemove:function(){this.removeAll()},handleCopy:function(){console.log("Copy feature coming soon...")}}};t.a={mixins:[c,d,x]}},468:function(e,t,n){var content=n(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("94d81842",content,!0,{sourceMap:!1})},493:function(e,t,n){"use strict";n(468)},494:function(e,t,n){var o=n(52)(!1);o.push([e.i,".v-image{display:block;width:100%;margin:0 auto;box-sizing:content-box}.v-image img{width:100%;height:100%;max-width:100%;vertical-align:top}.v-image__placeholder{width:100%;height:60px;display:flex;justify-content:center;align-items:center;background-color:#ddd}.v-image__placeholder i{color:#909399;font-size:30px}",""]),e.exports=o},519:function(e,t,n){"use strict";n.r(t);var o={name:"v-image",mixins:[n(436).a],props:{src:String},render:function(e){var content=this.currentProps.src?e("img",{attrs:{src:this.currentProps.src}}):e("div",{class:"v-image__placeholder"},[e("i",{class:"el-icon-picture-outline"})]);return e("div",{class:"v-image",style:this.baseStyle},[content])}},r=(n(493),n(37)),component=Object(r.a)(o,undefined,undefined,!1,null,null,null);t.default=component.exports},537:function(e,t,n){"use strict";n.r(t);var o=n(519),r=n(441),c={name:"editable-image",extends:o.default,mixins:[r.a]},d=n(37),component=Object(d.a)(c,undefined,undefined,!1,null,null,null);t.default=component.exports}}]);