webpackJsonp([9],{"4fAm":function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=n("woOf"),l=n.n(t),r=n("U82A"),o={props:{dialogTitle:String,isAdd:Boolean,projectId:Number},data:function(){return{dialogVisible:!1,saveGlobalVarForm:{}}},methods:{saveGlobalVar:function(){var a=this;this.isAdd?(this.saveGlobalVarForm.projectId=this.projectId,Object(r.a)(this.saveGlobalVarForm).then(function(e){a.$notify.success(e.msg),a.$emit("onAddOrSaveVarSuccess"),a.dialogVisible=!1})):(this.saveGlobalVarForm.projectId=this.projectId,Object(r.e)(this.saveGlobalVarForm).then(function(e){a.$notify.success(e.msg),a.$emit("onAddOrSaveVarSuccess"),a.dialogVisible=!1}))}}},i={render:function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("el-dialog",{attrs:{title:a.dialogTitle,visible:a.dialogVisible,center:"",width:"500px"},on:{"update:visible":function(e){a.dialogVisible=e}}},[n("el-form",{attrs:{data:a.saveGlobalVarForm,"label-width":"100px"}},[n("el-form-item",{staticClass:"content-center",attrs:{label:"全局变量名",rules:[{required:!0}]}},[n("el-input",{staticStyle:{width:"300px"},attrs:{clearable:""},model:{value:a.saveGlobalVarForm.globalVarName,callback:function(e){a.$set(a.saveGlobalVarForm,"globalVarName","string"==typeof e?e.trim():e)},expression:"saveGlobalVarForm.globalVarName"}})],1),a._v(" "),n("el-form-item",{staticClass:"content-center",attrs:{label:"全局变量值",rules:[{required:!0}]}},[n("el-input",{staticStyle:{width:"300px"},attrs:{clearable:""},model:{value:a.saveGlobalVarForm.globalVarValue,callback:function(e){a.$set(a.saveGlobalVarForm,"globalVarValue","string"==typeof e?e.trim():e)},expression:"saveGlobalVarForm.globalVarValue"}})],1),a._v(" "),n("el-form-item",{staticClass:"content-center",attrs:{label:"描述"}},[n("el-input",{staticStyle:{width:"300px"},attrs:{type:"textarea",clearable:""},model:{value:a.saveGlobalVarForm.description,callback:function(e){a.$set(a.saveGlobalVarForm,"description","string"==typeof e?e.trim():e)},expression:"saveGlobalVarForm.description"}})],1)],1),a._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){a.dialogVisible=!1}}},[a._v("取 消")]),a._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:a.saveGlobalVar}},[a._v("保 存")])],1)],1)},staticRenderFns:[]},s=n("VU/8")(o,i,!1,null,null,null).exports,c=localStorage.getItem("projectId")?parseInt(localStorage.getItem("projectId")):null,d={components:{AddOrSaveGlobalVarDialog:s},data:function(){return{projectId:c,addGlobalVarDialogTitle:"新增全局变量",updateGlobalVarDialogTitle:"修改全局变量",globalVarList:[],pages:null,total:0,queryListForm:{projectId:c,pageIndex:1,countPerPage:10}}},methods:{onAddOrSaveVarSuccess:function(){this.requestGlobalVarList()},makeAddGlobalVarDialogVisible:function(){this.$refs.addGlobalVarDialog.dialogVisible=!0},requestGlobalVarList:function(){var a=this;Object(r.d)(this.queryListForm).then(function(e){a.globalVarList=e.data.data,a.total=e.data.total,a.pages=e.data.pages})},handleCurrentChange:function(a){console.log("点击页码",a),this.queryListForm.pageIndex=a},deleteGlobalVar:function(a){var e=this;this.$confirm("删除该变量？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.b)(a.globalVarId).then(function(a){e.$notify.success(a.msg),e.requestGlobalVarList()})})},makeUpdateGlobalVarDialogVisible:function(a){var e=l()({},a);this.$refs.saveGlobalVarDialog.saveGlobalVarForm=e,this.$refs.saveGlobalVarDialog.dialogVisible=!0}},created:function(){this.requestGlobalVarList()},watch:{queryListForm:{handler:function(){console.log("检测到请求form有变化"),this.requestGlobalVarList()},deep:!0}}},u={render:function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"app-container"},[n("div",[n("el-button",{attrs:{icon:"el-icon-circle-plus-outline",type:"primary"},on:{click:a.makeAddGlobalVarDialogVisible}},[a._v("新增")])],1),a._v(" "),n("div",[n("AddOrSaveGlobalVarDialog",{ref:"addGlobalVarDialog",attrs:{projectId:a.projectId,dialogTitle:a.addGlobalVarDialogTitle,isAdd:!0},on:{onAddOrSaveVarSuccess:function(e){a.onAddOrSaveVarSuccess()}}}),a._v(" "),n("AddOrSaveGlobalVarDialog",{ref:"saveGlobalVarDialog",attrs:{projectId:a.projectId,dialogTitle:a.updateGlobalVarDialogTitle,isAdd:!1},on:{onAddOrSaveVarSuccess:function(e){a.onAddOrSaveVarSuccess()}}})],1),a._v(" "),n("div",{staticStyle:{"margin-top":"10px"}},[n("el-table",{attrs:{data:a.globalVarList,"highlight-current-row":"",border:""}},[n("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime"}}),a._v(" "),n("el-table-column",{attrs:{label:"变量名",align:"center",prop:"globalVarName"}}),a._v(" "),n("el-table-column",{attrs:{label:"变量值",align:"center",prop:"globalVarValue"}}),a._v(" "),n("el-table-column",{attrs:{label:"描述",align:"center",prop:"description"}}),a._v(" "),n("el-table-column",{attrs:{label:"更新时间",align:"center",prop:"updateTime"}}),a._v(" "),n("el-table-column",{attrs:{label:"创建人",align:"center",prop:"creatorNickname"}}),a._v(" "),n("el-table-column",{attrs:{label:"更新人",align:"center",prop:"updatorNickname"}}),a._v(" "),n("el-table-column",{attrs:{label:"操作",width:"300",align:"center"},scopedSlots:a._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(n){a.makeUpdateGlobalVarDialogVisible(e.row)}}},[a._v("修改")]),a._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){a.deleteGlobalVar(e.row)}}},[a._v("删除")])]}}])})],1)],1),a._v(" "),a.total>a.queryListForm.countPerPage?n("div",{staticStyle:{"margin-top":"10px"},attrs:{align:"center"}},[n("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":a.queryListForm.pageIndex,total:10*a.pages},on:{"current-change":a.handleCurrentChange}})],1):a._e()])},staticRenderFns:[]};var b=n("VU/8")(d,u,!1,function(a){n("XOFI")},"data-v-6c2cd52e",null);e.default=b.exports},KKwf:function(a,e,n){(a.exports=n("FZ+f")(!1)).push([a.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},XOFI:function(a,e,n){var t=n("KKwf");"string"==typeof t&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);n("rjj0")("0f3fb386",t,!0)}});