webpackJsonp([17],{AceQ:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("Hmpo"),s=e.n(i),n=e("vYJH"),r=e.n(n),o=e("5HJ5"),c=e("UgCr"),l={mixins:[o.a],data:function(){return{total:0,searchData:{pageSize:6,pageNo:1}}},methods:{_getList:function(){var t=this;return r()(s.a.mark(function a(){var e;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.loading=!0,a.next=3,Object(c.d)(t.searchData);case 3:e=a.sent,t.loading=!1,t.list=e.data.dataList,t.total=e.data.total;case 7:case"end":return a.stop()}},a,t)}))()},detail:function(t){this.$router.push({path:"/product/detail",query:{id:t,from:"flockBoard",name:this.$route.meta.title}})}}},_={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"board-panel",attrs:{"loading-text":t.loadingText}},[e("ul",{staticClass:"carousel-panel"},t._l(t.list,function(a,i){return e("li",{key:i,staticClass:"carousel-item",on:{click:function(e){t.detail(a.id)}}},[e("figure",{staticClass:"figure__panel"},[e("div",{staticClass:"figure_img"},[e("img",{attrs:{src:"/static/images/"+t.$route.meta.title+"/"+a.src}}),t._v(" "),e("span",{staticClass:"tips__item"},[t._v(t._s(t.$route.meta.title))])]),t._v(" "),e("figcaption",{staticClass:"figcaption__panel"},[e("div",{staticClass:"figcaption__panel__inner fontSize20"},[e("svg-icon",{attrs:{type:"heart"}}),t._v(" "),e("span",{staticClass:"figcaption__inner__text"},[t._v(t._s(a.heart))])],1),t._v(" "),e("div",{staticClass:"figcaption__panel__inner borderBoth fontSize26"},[e("svg-icon",{attrs:{type:"eyes"}}),t._v(" "),e("span",{staticClass:"figcaption__inner__text"},[t._v(t._s(a.times))])],1),t._v(" "),e("div",{staticClass:"figcaption__panel__inner fontSize20"},[e("svg-icon",{attrs:{type:"message"}}),t._v(" "),e("span",{staticClass:"figcaption__inner__text"},[t._v(t._s(a.message))])],1)])])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.pageShow,expression:"pageShow"}],staticClass:"page-panel"},[e("el-pagination",{attrs:{background:"","page-size":t.searchData.pageSize,"current-page":t.searchData.pageNo,layout:t.$store.state.layout,total:t.total},on:{"current-change":t.currentChange}})],1)])},staticRenderFns:[]};var p=e("Aizv")(l,_,!1,function(t){e("MVTh")},"data-v-ce608a66",null);a.default=p.exports},MVTh:function(t,a){}});
//# sourceMappingURL=17.1deceebfe4b6d46bd469.js.map