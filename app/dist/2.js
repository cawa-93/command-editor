webpackJsonp([2],{146:function(t,e,a){a(177);var o=a(29)(a(157),a(172),"data-v-152c4f92",null);t.exports=o.exports},149:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"dropdownZone",data:function(){return{isDragover:!1}},methods:{loadFiles:function(t){this.isDragover=!1,this.$emit("drop",t.dataTransfer.files[0].path)},openFile:function(){var t=this.$electron.remote.dialog.showOpenDialog();t&&t[0]&&this.$emit("drop",t[0])}}}},150:function(t,e,a){e=t.exports=a(15)(),e.push([t.i,".dropdown-zone-root[data-v-7617c4b6]{padding:10px}.dashed[data-v-7617c4b6],.dropdown-zone-root[data-v-7617c4b6]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;cursor:pointer}.dashed[data-v-7617c4b6]{border:5px dashed transparent}.dropdown-zone-root.md-accent[data-v-7617c4b6]{background:#3f51b5;color:#fff}.dropdown-zone-root.md-accent .dashed[data-v-7617c4b6]{border-color:#fff}.md-icon[data-v-7617c4b6]{border:5px dashed;padding:19px;box-sizing:content-box;border-radius:5px;margin:0}.dropdown-zone-content[data-v-7617c4b6]{pointer-events:none!important}",""])},151:function(t,e,a){a(153);var o=a(29)(a(149),a(152),"data-v-7617c4b6",null);t.exports=o.exports},152:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dropdown-zone dropdown-zone-root",class:{"md-accent":t.isDragover},on:{click:t.openFile,drop:function(e){e.preventDefault(),t.loadFiles(e)},dragover:function(e){e.preventDefault(),t.isDragover=!0},dragleave:function(e){e.preventDefault(),t.isDragover=!1}}},[a("div",{staticClass:"dashed"},[a("md-icon",{staticClass:"md-size-4x"},[t._v("file_upload")]),t._v(" "),t._t("default")],2)])},staticRenderFns:[]}},153:function(t,e,a){var o=a(150);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals),a(16)("5cc78d1c",o,!0)},157:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(58),d=a.n(o),r=a(30),n=a.n(r),i=a(151),s=a.n(i),c=a(57),l=(a.n(c),a(154)),p=a.n(l);e.default={name:"keywords",components:{dropdownZone:s.a},data:function(){return{type:"custom",templateType:null}},computed:n()({},a.i(c.mapGetters)(["isDirectLoaded"]),a.i(c.mapState)({pathHistory:function(t){return t.direct.keywordsPathHistory},template:function(t){if(!t.direct.keywordsTemplate||!t.direct.keywordsTemplate.length)return null;var e=[];return t.direct.keywordsTemplate.forEach(function(t){var a=d()(t,3),o=a[0],r=a[1],n=a[2],i=e.find(function(t){return t.campaignName===o&&t.groupName===r});i||(i={campaignName:o,groupName:r,keywords:[]},e.push(i)),i.keywords.push(n)}),e}})),methods:{onDrop:function(t){this.setTemplate({type:this.type,path:t})},setTemplate:function(t){var e=this;t.type||(t.type=this.type),this.$store.dispatch("SET_KEYWORDS_TEMPLATE",t).then(function(){e.saveKeywords()}),this.templateType=t.type},saveKeywords:function(){this.$store.dispatch("SET_KEYWORDS",this.template)},clearTemplate:function(){this.$store.dispatch("CLEAR_KEYWORDS")}},filters:{basename:function(t){return p.a.basename(t)}}}},166:function(t,e,a){e=t.exports=a(15)(),e.push([t.i,".root[data-v-152c4f92]{height:calc(100vh - 64px)}.root>.md-layout[data-v-152c4f92]{height:100%}.md-list[data-v-152c4f92]{width:100%}.md-list-item-container span[data-v-152c4f92]{flex:1}.md-list-item-container b[data-v-152c4f92]{flex-basis:40px}.md-whiteframe[data-v-152c4f92]{width:100%}.md-radio[data-v-152c4f92],label[data-v-152c4f92]{cursor:pointer}.scroll[data-v-152c4f92]{overflow-y:auto}blockquote[data-v-152c4f92]{border-left:5px solid;align-items:center;padding:5px 5px 5px 1em;display:flex}blockquote.md-accent[data-v-152c4f92]{border-left-color:#448aff;background-color:rgba(68,138,255,.25);color:#448aff}blockquote.md-warn[data-v-152c4f92]{border-left-color:#e64a19;background-color:rgba(230,74,25,.25);color:#e64a19;padding:15px 1em}blockquote>span[data-v-152c4f92]{flex:1}.md-caption[data-v-152c4f92]{margin:0}table.md-caption[data-v-152c4f92]{border-collapse:collapse;border-spacing:0}table.md-caption td[data-v-152c4f92],table.md-caption th[data-v-152c4f92],table[data-v-152c4f92]{border-left:1px solid rgba(0,0,0,.2);border-right:1px solid rgba(0,0,0,.2)}table.md-caption td[data-v-152c4f92],table.md-caption th[data-v-152c4f92]{padding:5px 15px;border-top:1px solid rgba(0,0,0,.2)}table.md-caption th[data-v-152c4f92]{border-top:none}",""])},172:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root"},[t.isDirectLoaded?a("md-layout",{attrs:{"md-gutter":"","md-flex":""}},[t.template?a("md-layout",{staticClass:"scroll",attrs:{"md-flex":""}},[a("md-whiteframe",["adwords"===t.templateType?a("blockquote",{staticClass:"md-warn"},[a("span",[t._v("Загрузка ключевых фраз из шаблона AdWords может работать не корректно. Используйте эту функцию на свой страх и риск.")])]):t._e()],1)],1):a("md-layout",{attrs:{"md-flex":""}},[a("md-whiteframe",[a("dropdown-zone",{on:{drop:t.onDrop}},[a("p",{staticClass:"md-title"},[t._v("Выберите файл сожержащий ключевые слова")]),t._v(" "),"custom"===t.type?a("table",{staticClass:"md-caption",attrs:{cellspacing:"0"}},[a("tr",[a("th",[t._v("Кампания")]),a("th",[t._v("Группа")]),a("th",[t._v("Фраза")])]),t._v(" "),a("tr",[a("td",[t._v("Кампания_1")]),a("td",[t._v("Группа_1")]),a("td",[t._v("Фраза 1")])]),t._v(" "),a("tr",[a("td",[t._v("Кампания_1")]),a("td",[t._v("Группа_2")]),a("td",[t._v("Фраза 2")])])]):t._e()])],1)],1),t._v(" "),a("md-layout",{staticClass:"right-sidebar",attrs:{"md-flex":""}},[a("md-whiteframe",[t.template?a("md-list",[a("md-subheader",[t._v("Действия")]),t._v(" "),a("md-list-item",{nativeOn:{click:function(e){t.saveKeywords(e)}}},[t._v("Записать в кампании")]),t._v(" "),a("md-list-item",{nativeOn:{click:function(e){t.clearTemplate(e)}}},[t._v("Очистить")])],1):a("md-list",[a("md-subheader",[t._v("Тип шаблона "+t._s(t.type))]),t._v(" "),a("md-list-item",[a("md-radio",{attrs:{id:"type-custom",name:"type-custom","md-value":"custom"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[t._v("Из Excel")])],1),t._v(" "),a("md-list-item",[a("md-radio",{attrs:{id:"type-adwords",name:"type-adwords","md-value":"adwords"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[t._v("Из AdWords")])],1)],1),t._v(" "),t.pathHistory.length?a("md-list",[a("md-subheader",[t._v("Последние файлы")]),t._v(" "),t._l(t.pathHistory,function(e){return a("md-list-item",{key:e.path,nativeOn:{click:function(a){t.setTemplate(e)}}},[t._v(t._s(t._f("basename")(e.path)))])})],2):t._e()],1)],1)],1):a("div",{staticClass:"direct-first-error"},[a("md-icon",{staticClass:"md-size-4x"},[t._v("error_outline")]),t._v(" "),a("p",{staticClass:"md-title"},[t._v("Сначала нужно загрузить кампании")]),t._v(" "),a("p",{staticClass:"md-caption"},[t._v("Ctrl+O")])],1)],1)},staticRenderFns:[]}},177:function(t,e,a){var o=a(166);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals),a(16)("3385f1cf",o,!0)}});