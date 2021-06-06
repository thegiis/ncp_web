(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{320:function(t,e,n){var content=n(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("632e23d9",content,!0,{sourceMap:!1})},341:function(t,e,n){var content=n(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("3dde4574",content,!0,{sourceMap:!1})},357:function(t,e,n){"use strict";n.r(e);n(29),n(11),n(17);var r={props:{answers:{type:Array,required:!0},questionList:{type:Array,required:!0},userAnswers:{type:Array,required:!0}},data:function(){return{totalQuestions:this.answers.length,questionIdx:0,correctAnswers:this.questionList.map((function(t){return t.options.filter((function(t){return t.isCorrect}))[0].name}))}},created:function(){},mounted:function(){console.log(this.$refs),this.checkNavigation()},computed:{currentScore:function(){return this.answers.filter((function(t){return 1==t})).length},scoreDisplay:function(){return this.currentScore+"/"+this.totalQuestions},instruction:function(){return this.questionList[this.questionIdx].instruction},question:function(){return this.questionList[this.questionIdx].question},options:function(){return this.questionList[this.questionIdx].options}},methods:{getClass:function(t,e){var n=[];return n.push(this.$style.ansDot),0==t?n.push(this.$style.incorrectDot):n.push(this.$style.correctDot),e==this.questionIdx&&n.push(this.$style.currentAns),n},getShape:function(t){switch(t){case"fill_blank":return"fill-blank-shape";case"circle":default:return"circle-shape"}},checkUserAns:function(t,e){var n=this.userAnswers[this.questionIdx];this.correctAnswers[this.questionIdx];return!t&&e==n},jumpTo:function(t){this.questionIdx=t,this.checkNavigation()},goNext:function(){this.questionIdx+=1,this.checkNavigation()},goPrev:function(){this.questionIdx-=1,this.checkNavigation()},checkNavigation:function(){var t=this.$refs.nextButton,e=this.$refs.prevButton;0==this.questionIdx?e.style.display="none":e.style.display="block",this.questionIdx==this.totalQuestions-1?t.style.display="none":t.style.display="block"},playAgain:function(){this.$emit("repeat",!0)}}},o=n(379),c=(n(381),n(3));var component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:t.$style.topSection},[n("p",{class:t.$style.scoreIndicator},[n("span",{class:t.$style.scoreIndicatorText},[t._v("Score")]),t._v(" "),n("span",{class:t.$style.currentScore},[t._v(t._s(t.scoreDisplay))])]),t._v(" "),n("div",{class:t.$style.dotsContainer},t._l(t.answers,(function(e,r){return n("div",{key:r,class:t.$style.progressDot},[n("div",{class:t.getClass(e,r),attrs:{"data-idx":"idx"},on:{click:function(e){return t.jumpTo(r)}}},[n("div",{class:t.$style.dotIconContainer},[n("i",e?{staticClass:"fas fa-check"}:{staticClass:"fas fa-times"})])])])})),0),t._v(" "),n("p",{class:t.$style.questionIdx},[n("span",{class:t.$style.questionIdxText},[t._v("Question")]),t._v(" "),n("span",{class:t.$style.currentIdx},[t._v(t._s(t.questionIdx+1))])])]),t._v(" "),n("div",{class:t.$style.summarySection},[n("h1",{staticClass:"quesInstruction",class:t.instruction.class},[t._v("\n      "+t._s(t.instruction.text)+"\n    ")]),t._v(" "),n("div",{staticClass:"questionContainer"},[n("div",{staticClass:"questionStructure",class:t.getShape(t.question.shape)},[n("p",[t._v("\n          "+t._s(t.question.text)+"\n        ")])])]),t._v(" "),n("div",{staticClass:"optionContainer"},t._l(t.options,(function(option){return n("div",{key:option.name},[n("div",{staticClass:"optionItem",class:{correctOption:option.isCorrect,incorrectOption:t.checkUserAns(option.isCorrect,option.name)}},[n("p",[t._v(t._s(option.name))]),t._v(" "),option.isCorrect?n("div",{staticClass:"correctCheckIcon"},[n("i",{staticClass:"fas fa-check"})]):t._e(),t._v(" "),t.checkUserAns(option.isCorrect,option.name)?n("div",{staticClass:"incorrectCheckIcon"},[n("i",{staticClass:"fas fa-times"})]):t._e()])])})),0),t._v(" "),n("div",{ref:"nextButton",class:t.$style.nextBtn,on:{click:function(e){return t.goNext()}}},[n("i",{staticClass:"fas fa-arrow-right",class:t.$style.centeredArrow})]),t._v(" "),n("div",{ref:"prevButton",class:t.$style.prevBtn,on:{click:function(e){return t.goPrev()}}},[n("i",{staticClass:"fas fa-arrow-left",class:t.$style.centeredArrow})]),t._v(" "),n("div",{class:t.$style.playAgain,on:{click:function(e){return t.playAgain()}}},[n("p",[t._v("Play Again")])])])])}),[],!1,(function(t){this.$style=o.default.locals||o.default}),"d9be5a1c",null);e.default=component.exports},379:function(t,e,n){"use strict";var r=n(320),o=n.n(r);n.d(e,"default",(function(){return o.a}))},380:function(t,e,n){var r=n(12)(!1);r.push([t.i,".topSection_1jyC4{width:100%;display:flex;justify-content:space-between;align-items:flex-end;flex-direction:row;padding:.5rem}.questionIdx_2XLsm,.scoreIndicator_1cfkf{display:flex;flex-direction:column;justify-content:center;align-items:center;color:grey;font-size:1rem;margin:.5rem}.currentIdx_1JdVl,.currentScore_3dnZ9{color:#000;margin:.5rem;font-weight:700;font-size:1.25rem}.dotsContainer_3rUd0{display:flex;width:100%;align-items:center;justify-content:space-around}.progressDot_2CtV9{cursor:pointer}.ansDot_20iuX,.progressDot_2CtV9{position:relative;display:inline-block}.ansDot_20iuX{width:1.5rem;height:1.5rem;background-color:#888;border-radius:50%;margin:.25rem;color:#fff}.currentAns_2GeGh{width:2rem;height:2rem}.dotIconContainer_uBxzu{display:flex;width:100%;height:100%;position:relative;align-items:center;justify-content:center}.correctDot_2WxUw{background-color:#0f0}.incorrectDot_1crSS{background-color:red}.summarySection_FPZQX{display:flex;align-items:center;flex-direction:column}.nextBtn_1lldT,.prevBtn_UAXLx{position:absolute;cursor:pointer;z-index:50;border-radius:50%;height:3rem;width:3rem;background-color:navy;color:#fff;transition:.3s}.nextBtn_1lldT:hover,.prevBtn_UAXLx:hover{opacity:.8;transform:translateY(-50%) scale(1.1)}.nextBtn_1lldT{right:0}.nextBtn_1lldT,.prevBtn_UAXLx{top:50%;transform:translateY(-50%)}.prevBtn_UAXLx{left:0}.centeredArrow_WHhq2{top:50%;left:50%;transform:translate(-50%,-50%)}.centeredArrow_WHhq2,.playAgain_13B5R{position:absolute;font-size:1.5rem}.playAgain_13B5R{cursor:pointer;bottom:5%;right:5%;z-index:50;border-radius:1rem;padding:.5rem 1.5rem;border:2px solid #20b2aa;color:navy;transition:.3s}.playAgain_13B5R:hover{background-color:#b0c4de;color:#fff}",""]),r.locals={topSection:"topSection_1jyC4",questionIdx:"questionIdx_2XLsm",scoreIndicator:"scoreIndicator_1cfkf",currentIdx:"currentIdx_1JdVl",currentScore:"currentScore_3dnZ9",dotsContainer:"dotsContainer_3rUd0",progressDot:"progressDot_2CtV9",ansDot:"ansDot_20iuX",currentAns:"currentAns_2GeGh",dotIconContainer:"dotIconContainer_uBxzu",correctDot:"correctDot_2WxUw",incorrectDot:"incorrectDot_1crSS",summarySection:"summarySection_FPZQX",nextBtn:"nextBtn_1lldT",prevBtn:"prevBtn_UAXLx",centeredArrow:"centeredArrow_WHhq2",playAgain:"playAgain_13B5R"},t.exports=r},381:function(t,e,n){"use strict";n(341)},382:function(t,e,n){var r=n(12)(!1);r.push([t.i,".quesInstruction[data-v-d9be5a1c]{font-size:2rem;margin:.5rem 0;color:#1e4d63;text-align:center}.questionStructure[data-v-d9be5a1c]{background-color:#d3d3d3;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden}.circle-shape[data-v-d9be5a1c]{width:10rem;height:10rem;border-radius:50%}.fill-blank-shape[data-v-d9be5a1c]{width:500px;height:auto;padding:30px 20px}.optionContainer[data-v-d9be5a1c]{position:relative;margin:1rem}.optionItem[data-v-d9be5a1c]{position:relative;padding:.25rem 1rem;border:1px solid grey;border-radius:1rem;margin:.5rem;text-align:center}.correctOption[data-v-d9be5a1c]{background-color:#b0c4de;border:2px solid #006400}.incorrectOption[data-v-d9be5a1c]{background-color:#ffb6c1;border:2px solid red}.correctCheckIcon[data-v-d9be5a1c],.incorrectCheckIcon[data-v-d9be5a1c]{position:absolute;justify-content:center;align-items:center;top:50%;left:0;transform:translate(-50%,-50%);border-radius:50%;width:1.5rem;height:1.5rem;background-color:green;color:#fff}.incorrectCheckIcon[data-v-d9be5a1c]{background-color:red}",""]),t.exports=r}}]);