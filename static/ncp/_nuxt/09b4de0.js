(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{296:function(t,e,o){var content=o(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("5978863e",content,!0,{sourceMap:!1})},307:function(t,e,o){"use strict";var n=o(296),l=o.n(n);o.d(e,"default",(function(){return l.a}))},308:function(t,e,o){var n=o(12)(!1);n.push([t.i,".hintContainer_b6dI5{position:fixed;z-index:100;height:100vh;background-color:#fff;top:0;left:0;padding:0}.headerContainer_3KI4h{width:100%;background-color:#b0c4de;padding:1rem;height:8vh;display:flex;align-items:center;justify-content:space-between}.headerTitle_2-tkm{color:#00008b;margin-bottom:0!important;padding:0}.closeHint_1pXFO{color:#00008b;cursor:pointer}.hintBody_1QOTT{position:relative;padding:1rem}.hintFooter_1lH1f{position:absolute;bottom:0;left:0;width:100%;height:8vh}.gotIt_21_zs{float:right;margin-right:1rem;color:teal;font-size:1.4rem;cursor:pointer;font-weight:700}",""]),n.locals={hintContainer:"hintContainer_b6dI5",headerContainer:"headerContainer_3KI4h",headerTitle:"headerTitle_2-tkm",closeHint:"closeHint_1pXFO",hintBody:"hintBody_1QOTT",hintFooter:"hintFooter_1lH1f",gotIt:"gotIt_21_zs"},t.exports=n},318:function(t,e,o){"use strict";o.r(e);var n={props:{hintText:{type:String,required:!1},display:{type:Boolean,required:!0}},methods:{closeHint:function(){this.$emit("close")}}},l=o(307),r=o(5);var component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.display?o("div",{staticClass:"column is-12-mobile is-4-desktop",class:t.$style.hintContainer},[o("div",{class:t.$style.headerContainer},[o("h1",{staticClass:"title is-5",class:t.$style.headerTitle},[t._v("Hint")]),t._v(" "),o("i",{staticClass:"fa fa-times fa-2x",class:t.$style.closeHint,attrs:{"aria-hidden":"true"},on:{click:t.closeHint}})]),t._v(" "),o("div",{class:t.$style.hintBody},[o("p",[t._v(t._s(t.hintText))])]),t._v(" "),o("div",{class:t.$style.hintFooter},[o("p",{class:t.$style.gotIt,on:{click:t.closeHint}},[t._v(t._s(t.$t("close")))])])]):t._e()}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.default=component.exports}}]);