(window.webpackJsonp=window.webpackJsonp||[]).push([[17,29],{435:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return f})),n.d(t,"e",(function(){return v})),n.d(t,"g",(function(){return x})),n.d(t,"h",(function(){return y})),n.d(t,"d",(function(){return w})),n.d(t,"i",(function(){return j}));n(24),n(200),n(60),n(201),n(38);var o=n(275),r=n.n(o),c=function(source){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r()("array"===e.type?[]:{},source,{clone:!0})},l=function(e,source){return r()(e,source)},d=/^\d+(\.\d+)?$/,h=/px|r?em|vw|vh|%$/,m=function(e){return d.test(e)?e+"px":h.test(e)?e:void 0},f=function(e){if("string"==typeof e)return e.split(/[\s\-\/]/).map((function(e){return/[A-z]/i.test(e)?e:e+"px"})).join(" ")},v=function(e){return/^(http|https)/.test(e)},x=function(e){var link=document.createElement("a");link.href=e,link.target="_blank",link.style.display="none",document.body.appendChild(link),link.click(),document.body.removeChild(link)};function y(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.model;return n.map((function(n,o){var r=n.props;return r.value=n.children,r.animation=n.animation,r.index=o,e(t.mode+"-"+n.name,{props:r,domProps:n.domProps})}))}var O=null,w=function(){return O},j=function(e){return O=e}},436:function(e,t,n){"use strict";var o=n(13),r=(n(274),n(38),n(61),n(34),n(23),n(27),n(11),n(45),n(22),n(46),n(435)),c={props:{width:[String,Number],height:[String,Number],padding:String,border:String,margin:String,backgroundColor:String,backgroundImage:String,borderRadius:[String,Number]},computed:{boxStyle:function(){var e=this.currentProps,t=Object(r.c)(e.width),n=Object(r.c)(e.height),o=Object(r.b)(e.padding),c=Object(r.b)(e.margin),l=e.backgroundImage?"url("+e.backgroundImage+")":void 0,d=Object(r.c)(e.borderRadius);return{width:t,height:n,padding:o,margin:c,backgroundColor:e.backgroundColor,backgroundImage:l,borderRadius:d}}}},l={props:{top:String,right:String,bottom:String,left:String,zIndex:[String,Number]},computed:{positionStyle:function(){var e=this.currentProps,t=Object(r.c)(e.top),n=Object(r.c)(e.right),o=Object(r.c)(e.bottom),c=Object(r.c)(e.left);return{position:t||n||o||c?"absolute":void 0,top:t,right:n,bottom:o,left:c,zIndex:e.zIndex}}}},d={props:{linkUrl:String},computed:{linkStyle:function(){return{cursor:this.linkUrl?"pointer":void 0}}},mounted:function(){this.$el.addEventListener("click",this.clickHandler)},beforeDestroy:function(){this.$el.removeEventListener("click",this.clickHandler)},methods:{clickHandler:function(e){this.linkUrl&&(e.stopPropagation(),Object(r.e)(this.linkUrl)?Object(r.g)(this.linkUrl):window.$nuxt.context.redirect(this.linkUrl))}}},animate=(n(60),{props:{animation:Array},beforeCreate:function(){this.inAnimation=!1,this.animated=!1,this.activeAnimation="",this.animationQueue=[]},data:function(){return{currentAnimation:this.animation||[]}},methods:{runAnimation:function(){0===this.currentAnimation.length||this.inAnimation||this.animated||(this.inAnimation=!0,this.animationQueue=this.currentAnimation.map((function(e){return e.value})),this.$el.addEventListener("animationend",this.animationendHandler),this.doNextAnimation())},doNextAnimation:function(){this.activeAnimation=this.animationQueue.shift(),this.activeAnimation?this.$el.classList.add("animated",this.activeAnimation):(this.inAnimation=!1,this.animated=!0,this.$el.removeEventListener("animationend",this.animationendHandler))},animationendHandler:function(e){this.$el.classList.remove("animated",this.activeAnimation),this.doNextAnimation()}}});function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={mixins:[c,l,d,animate],props:{index:Number},beforeCreate:function(){var e=this.$options.name;this.mode=e.slice(0,e.indexOf("-"))},data:function(){return{currentProps:Object(r.a)(this.$options.propsData)}},computed:{baseStyle:function(){return m(m(m({},this.boxStyle),this.positionStyle),this.linkStyle)}}}},437:function(e,t,n){var content=n(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("20b25f41",content,!0,{sourceMap:!1})},439:function(e,t,n){"use strict";n(437)},440:function(e,t,n){var o=n(52)(!1);o.push([e.i,".custom-contextmenu__wrapper{position:absolute;top:0;left:0;z-index:10;background-color:#fff;border:1px solid #ebeef5;border-radius:4px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1)}.custom-contextmenu__list{list-style:none;color:#303133;padding:10px 0}.custom-contextmenu__item{padding:0 20px;font-size:14px;color:#606266;height:34px;line-height:34px;box-sizing:border-box;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.custom-contextmenu__item:hover{background-color:#f5f7fa}",""]),e.exports=o},441:function(e,t,n){"use strict";n(38),n(61),n(145);var o,r=n(435),c={beforeCreate:function(){var e=this.$options.name;this.shortName=e.slice(e.indexOf("-")+1)},created:function(){var e=Object(r.a)(this.currentProps);delete e.value,delete e.animation,this.viewModel={name:this.shortName,props:e,children:[],animation:Object(r.a)(this.currentAnimation,{type:"array"}),domProps:{}};for(var t=this.$parent||this.$root;t&&!t.mode;)t=t.$parent;this._vparent=t,this.pushModel()},methods:{pushModel:function(){"number"==typeof this.index?this._vparent.viewModel.children[this.index]=this.viewModel:this._vparent.viewModel.children.push(this.viewModel)},removeModel:function(){var e=this._vparent.viewModel.children.indexOf(this.viewModel);this._vparent.viewModel.children.splice(e,1)},updateModel:function(){var e=this._vparent.viewModel.children.indexOf(this.viewModel);this._vparent.viewModel.children.splice(e,1,this.viewModel)},removeAll:function(){this._vparent.model.splice(this.index,1),this.removeModel()}}},l={mounted:function(){this.$el.addEventListener("click",this.clickHandler,!1)},beforeDestroy:function(){this.$el.removeEventListener("click",this.clickHandler,!1)},methods:{clickHandler:function(e){e.preventDefault(),e.stopPropagation();var t=Object(r.d)();this.$el!==t&&(this.$el.classList.add("selected-border"),t&&t.classList.remove("selected-border"),Object(r.i)(this.$el),this.$store.dispatch("proper/renderRightbar",{instance:this,name:this.shortName,props:this.currentProps,animation:this.currentAnimation}))},updateProps:function(e){var t=Object(r.a)(e);delete t.value,delete t.animation,this.currentProps=e,this.viewModel.props=t,this.updateModel()},updateAnimation:function(e){this.currentAnimation=e,this.viewModel.animation=Object(r.a)(e,{type:"array"}),this.updateModel()}}},d=(n(35),n(0)),h={name:"CustomContextmenu",data:function(){return{visible:!1}},mounted:function(){this.$el.addEventListener("mousedown",this.mousedownHandler)},beforeDestroy:function(){this.$el.removeEventListener("mousedown",this.mousedownHandler)},methods:{mousedownHandler:function(e){e.stopPropagation()},handleClick:function(e){this.$emit(e),this.visible=!1}}},m=(n(439),n(37)),main=Object(m.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"custom-contextmenu__wrapper"},[n("ul",{staticClass:"custom-contextmenu__list"},[n("li",{staticClass:"custom-contextmenu__item",on:{click:function(t){return e.handleClick("remove")}}},[e._v("删除")])])])}),[],!1,null,null,null).exports,f=d.default.extend(main);function v(e){(o=o||new f({el:document.createElement("div")}))._events&&o._events.remove?o._events.remove.splice(0,1,e.onRemove):o.$on("remove",e.onRemove),!o.$el&&o.$mount(),o.$el.style.left=e.pageX+1+"px",o.$el.style.top=e.pageY+1+"px",document.body.appendChild(o.$el),d.default.nextTick((function(){o.visible=!0}))}v.show=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];v.call.apply(v,[this].concat(t))},v.hide=function(){o&&o.visible&&(o.visible=!1,o.$el.parentNode.removeChild(o.$el))};var x={mounted:function(){this.$el.addEventListener("contextmenu",this.contextmenuHandler)},beforeDestroy:function(){this.$el.removeEventListener("contextmenu",this.contextmenuHandler)},methods:{contextmenuHandler:function(e){e.preventDefault(),v.show({pageX:e.pageX,pageY:e.pageY,onRemove:this.handleRemove,onCopy:this.handleCopy}),document.addEventListener("mousedown",this.contextmenuHideHandler)},contextmenuHideHandler:function(e){v.hide(),document.removeEventListener("mousedown",this.contextmenuHideHandler)},handleRemove:function(){this.removeAll()},handleCopy:function(){console.log("Copy feature coming soon...")}}};t.a={mixins:[c,l,x]}},452:function(e,t,n){"use strict";n(274);var o=n(435);t.a={props:{color:String,fontSize:[String,Number],fontWeight:[String,Number],lineHeight:String,textAlign:String},computed:{textStyle:function(){var e=this.currentProps;return{color:e.color,fontSize:Object(o.c)(e.fontSize),fontWeight:e.fontWeight,lineHeight:e.lineHeight,textAlign:e.textAlign}}}}},471:function(e,t,n){var content=n(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("89989356",content,!0,{sourceMap:!1})},499:function(e,t,n){"use strict";n(471)},500:function(e,t,n){var o=n(52)(!1);o.push([e.i,".v-text{color:#303133;font-size:14px;line-height:1;padding:10px}",""]),e.exports=o},522:function(e,t,n){"use strict";n.r(t);n(34),n(23),n(27),n(11),n(45),n(22),n(46);var o=n(13),base=n(436),r=n(452),c=n(435);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"v-text",mixins:[base.a,r.a],computed:{currentStyle:function(){return d(d({},this.baseStyle),this.textStyle)}},render:function(e){return this.renderProxy(e)},methods:{renderProxy:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e("div",Object(c.f)({class:"v-text",style:this.currentStyle},t))}}},m=h,f=(n(499),n(37)),component=Object(f.a)(m,undefined,undefined,!1,null,null,null);t.default=component.exports},540:function(e,t,n){"use strict";n.r(t);var o=n(106),r=n.n(o),c=n(522),l=n(441),d={name:"editable-text",extends:c.default,mixins:[l.a],created:function(){var e=this;this.handleInput=r()(50,(function(t){e.viewModel.domProps.innerHTML=t.target.innerHTML,e.updateModel()}))},mounted:function(){this.viewModel.domProps.innerHTML=this.$el.innerHTML},render:function(e){return c.default.methods.renderProxy.call(this,e,{attrs:{contenteditable:"true"},on:{input:this.handleInput}})}},h=n(37),component=Object(h.a)(d,undefined,undefined,!1,null,null,null);t.default=component.exports}}]);