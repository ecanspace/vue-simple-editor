(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{511:function(e,r,t){"use strict";t.r(r);var l={props:{onSubmit:Function},data:function(){return{ruleForm:{},rules:{name:[{required:!0,message:"请输入视图名称"}],path:[{required:!0,message:"请配置当前视图跳转路径"}]}}},methods:{submitForm:function(e,r){var t=this;this.$refs.ruleForm.validate((function(l){if(!l)return console.log("error submit!!"),!1;r.start(),t.onSubmit(t.ruleForm,r,e)}))}}},o=t(37),component=Object(o.a)(l,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"视图名称",prop:"name"}},[t("el-input",{attrs:{placeholder:"必填，视图的中文名称"},model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"描述信息"}},[t("el-input",{attrs:{type:"textarea",placeholder:"选填，视图描述，可用于SEO访问"},model:{value:e.ruleForm.description,callback:function(r){e.$set(e.ruleForm,"description",r)},expression:"ruleForm.description"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"路由配置",prop:"path"}},[t("el-input",{attrs:{placeholder:"必填，用于导航跳转"},model:{value:e.ruleForm.path,callback:function(r){e.$set(e.ruleForm,"path",r)},expression:"ruleForm.path"}})],1)],1)}),[],!1,null,null,null);r.default=component.exports}}]);