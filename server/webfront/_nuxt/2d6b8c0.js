(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{446:function(e,t,r){var content=r(458);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(53).default)("0faf300a",content,!0,{sourceMap:!1})},457:function(e,t,r){"use strict";r(446)},458:function(e,t,r){var n=r(52)(!1);n.push([e.i,".drag-item{flex:1;display:flex;align-items:center;background-color:#eef2f8;padding:10px;border-radius:4px;color:#303133;font-size:14px;font-weight:500;line-height:normal;margin-bottom:10px}.drag-item:hover{cursor:-webkit-grab;cursor:grab;color:#409eff}.drag-item i{margin-right:4px}",""]),e.exports=n},476:function(e,t,r){"use strict";r.r(t);var n={name:"DragItem",mixins:[{mounted:function(){this.$el.draggable=!0,this.$el.addEventListener("dragstart",this.dragstartHandler),this.$el.addEventListener("dragend",this.dragendHandler)},beforeDestroy:function(){this.$el.removeEventListener("dragstart",this.dragstartHandler),this.$el.removeEventListener("dragend",this.dragendHandler)},methods:{dragstartHandler:function(e){e.dataTransfer.setData("type",this.type)},dragendHandler:function(e){e.dataTransfer.clearData()}}}],props:{type:String,label:String,icon:String}},d=(r(457),r(37)),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"drag-item"},[r("i",{class:e.icon}),e._v(" "),r("span",[e._v(e._s(e.label))])])}),[],!1,null,null,null);t.default=component.exports}}]);