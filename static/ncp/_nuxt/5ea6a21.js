(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{298:function(t,e,r){var content=r(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("5befc037",content,!0,{sourceMap:!1})},314:function(t,e,r){"use strict";r.r(e);r(25),r(52),r(11),r(33);var n=r(107),l=r(44),c={data:function(){return{modules:[],currentPage:this.$route.name.split("__")[0],currentLangModules:[],parent:{},current:""}},created:function(){var t=this.$i18n.locale;this.modules=Object(l.b)(n),this.currentLangModules=this.modules.map((function(e){return e[t]}));for(var i=0;i<this.currentLangModules.length;){var e=this.currentLangModules[i],r=e.routes.indexOf(this.currentPage);if(r>-1){var c=this.currentPage.split("-")[0]+"___"+this.$i18n.locale;this.parent={title:e.title,route:c},this.current=e.pageNames[r]}i++}}},o=r(322),d=r(5);var component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"breadcrumb has-succeeds-separator is-medium",class:t.$style.breadcrumbContainer,attrs:{"aria-label":"breadcrumbs"}},[r("ul",[r("li",[r("nuxt-link",{attrs:{to:{name:"index___"+this.$i18n.locale}}},[t._v("Home")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:{name:t.parent.route}}},[t._v(t._s(t.parent.title))])],1),t._v(" "),r("li",{staticClass:"is-active"},[r("nuxt-link",{attrs:{to:{name:t.$route.name},"aria-current":"page"}},[t._v(t._s(t.current))])],1)])])}),[],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.default=component.exports},322:function(t,e,r){"use strict";var n=r(298),l=r.n(n);r.d(e,"default",(function(){return l.a}))},323:function(t,e,r){var n=r(12)(!1);n.push([t.i,".breadcrumbContainer_1uSt2{width:100%}",""]),n.locals={breadcrumbContainer:"breadcrumbContainer_1uSt2"},t.exports=n}}]);