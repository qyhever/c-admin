webpackJsonp([0],{"dve+":function(t,e){},qXHH:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("//Fk"),a=n.n(i),o=n("woOf"),s=n.n(o),r=n("cKc3"),d=n("mtWM"),c=n.n(d),u=n("nAIH"),l=n.n(u),h={name:"CKEditor",props:{value:{type:String,default:""},id:{type:String,default:"editor-"+ +new Date},options:{type:Object,default:function(){return{}}}},data:function(){return{instanceValue:""}},watch:{value:function(t){this.setData(t)}},mounted:function(){this.initCkeditor()},activated:function(){this.initCkeditor()},methods:{initCkeditor:function(){var t=this,e={height:"300px",width:"100%",imageUploadCallback:this.imageUploadCallback},n=s()({},e,this.options);l.a.replace(this.id,n),this.editor=l.a.instances[this.id];var i=this.editor;i.setData(this.value),i.on("instanceReady",function(){i.setData(t.value)}),i.on("change",this.handleChange),i.on("mode",this.handleMode)},handleChange:function(){var t=this.editor.getData();this.value!==t&&(this.$emit("input",t),this.instanceValue=t)},handleMode:function(){if("source"===this.editor.mode){var t=this.editor.editable();t.attachListener(t,"input",this.handleChange)}},setData:function(t){this.editor&&this.instanceValue!==t&&this.editor.setData(t)},destroyCkeditor:function(){this.editor&&this.editor.destroy()},imageUploadCallback:function(t,e){var n=this;r.a.get("/upload/qiniuToken").then(function(t){var e=t.data.token;return a.a.resolve(e)}).then(function(i){var a=new FormData;a.append("file",t),a.append("token",i),c.a.post(n.QINIU_UPLOAD_URL,a).then(function(t){var i=t.data.hash,a=n.QINIU_PREFIX+i;e(a)})}).catch(function(t){console.log(t),n.$message.error("上传失败")})}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("textarea",{attrs:{id:this.id}})])},staticRenderFns:[]},p={components:{VueCkeditor:n("VU/8")(h,f,!1,null,null,null).exports},name:"CKEditor",data:function(){return{content:"生命在于折腾"}},methods:{handleSubmit:function(){console.log(this.content)}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("vue-ckeditor",{model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确定")])],1)],1)},staticRenderFns:[]};var m=n("VU/8")(p,v,!1,function(t){n("dve+")},"data-v-4a7484a8",null);e.default=m.exports}});