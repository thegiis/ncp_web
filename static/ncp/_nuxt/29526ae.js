(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{313:function(r,e,o){var content=o(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,o(13).default)("e22efcce",content,!0,{sourceMap:!1})},338:function(r,e,o){"use strict";o.r(e);o(17);var t={props:{answers:{type:Array,required:!0}},data:function(){return{totalQuestions:this.answers.length}},computed:{currentScore:function(){return this.answers.filter((function(r){return 1==r})).length},scoreDisplay:function(){return 0!==this.currentScore?this.currentScore+"/"+this.totalQuestions:"-"}},methods:{getClass:function(r){var e=[];return!1===this.answers[r]&&e.push(this.$style.incorrectDot),!0===this.answers[r]&&e.push(this.$style.correctDot),e.push(this.$style.progressDotCommon),e}}},n=o(339),c=o(3);var component=Object(c.a)(t,(function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("div",{class:r.$style.scoreSection},[o("p",{class:r.$style.scoreIndicator},[o("span",{class:r.$style.scoreIndicatorText},[r._v("Score")]),r._v(" "),o("span",{class:r.$style.currentScore},[r._v(r._s(r.scoreDisplay))])]),r._v(" "),o("div",{class:r.$style.progressDotsContainer},r._l(r.totalQuestions,(function(e){return o("span",{key:e,class:r.$style.progressDot},[o("span",{class:r.getClass(e-1)})])})),0)])}),[],!1,(function(r){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports},339:function(r,e,o){"use strict";var t=o(313),n=o.n(t);o.d(e,"default",(function(){return n.a}))},340:function(r,e,o){var t=o(12)(!1);t.push([r.i,".scoreSection_fPHC6{width:100%;display:flex;flex-direction:column;padding:.5rem}.scoreIndicator_1fIeg{color:grey;font-size:1rem;margin:.5rem}.currentScore_3XhUX{color:#000;margin:.5rem;font-weight:700;font-size:1.25rem}.progressDotsContainer_JtYhS{display:flex;width:100%;align-items:center;justify-content:space-around}.progressDot_2A-8v,.progressDotCommon_BogOT{position:relative;display:inline-block}.progressDotCommon_BogOT{width:.5rem;height:.5rem;background-color:#888;border-radius:50%;margin:.25rem}.correctDot_1oEH7{background-color:#0f0}.incorrectDot_3rcQK{background-color:red}.progressDotSpecial_2kjpq{display:inline-block;position:relative;width:1.5rem;height:1.5rem;background-color:#888;border-radius:50%;margin:.25rem}",""]),t.locals={scoreSection:"scoreSection_fPHC6",scoreIndicator:"scoreIndicator_1fIeg",currentScore:"currentScore_3XhUX",progressDotsContainer:"progressDotsContainer_JtYhS",progressDot:"progressDot_2A-8v",progressDotCommon:"progressDotCommon_BogOT",correctDot:"correctDot_1oEH7",incorrectDot:"incorrectDot_3rcQK",progressDotSpecial:"progressDotSpecial_2kjpq"},r.exports=t}}]);