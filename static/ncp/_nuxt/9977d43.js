(window.webpackJsonp=window.webpackJsonp||[]).push([[1,14,15,16,18],{309:function(t,e,n){var content=n(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("5978863e",content,!0,{sourceMap:!1})},310:function(t,e,n){var content=n(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("68682476",content,!0,{sourceMap:!1})},315:function(t,e,n){var content=n(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("b2afd3ee",content,!0,{sourceMap:!1})},318:function(t,e,n){t.exports=n.p+"img/hint.4168780.svg"},325:function(t,e,n){var content=n(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("38a0c993",content,!0,{sourceMap:!1})},326:function(t,e,n){"use strict";var o=n(309),r=n.n(o);n.d(e,"default",(function(){return r.a}))},327:function(t,e,n){var o=n(12)(!1);o.push([t.i,".hintContainer_b6dI5{position:fixed;z-index:100;height:100vh;background-color:#fff;top:0;left:0;padding:0}.headerContainer_3KI4h{width:100%;background-color:#b0c4de;padding:1rem;height:8vh;display:flex;align-items:center;justify-content:space-between}.headerTitle_2-tkm{color:#00008b;margin-bottom:0!important;padding:0}.closeHint_1pXFO{color:#00008b;cursor:pointer}.hintBody_1QOTT{position:relative;padding:1rem}.hintFooter_1lH1f{position:absolute;bottom:0;left:0;width:100%;height:8vh}.gotIt_21_zs{float:right;margin-right:1rem;color:teal;font-size:1.4rem;cursor:pointer;font-weight:700}",""]),o.locals={hintContainer:"hintContainer_b6dI5",headerContainer:"headerContainer_3KI4h",headerTitle:"headerTitle_2-tkm",closeHint:"closeHint_1pXFO",hintBody:"hintBody_1QOTT",hintFooter:"hintFooter_1lH1f",gotIt:"gotIt_21_zs"},t.exports=o},328:function(t,e,n){"use strict";var o=n(310),r=n.n(o);n.d(e,"default",(function(){return r.a}))},329:function(t,e,n){var o=n(12)(!1);o.push([t.i,".hintIcon_2IXmz{cursor:pointer;position:fixed;bottom:1rem;right:1rem;left:auto;width:4rem;z-index:99}@media only screen and (min-width:768px){.hintIcon_2IXmz{right:auto;left:1rem}}",""]),o.locals={hintIcon:"hintIcon_2IXmz"},t.exports=o},331:function(t,e,n){var content=n(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("00829d2e",content,!0,{sourceMap:!1})},333:function(t,e,n){"use strict";n.r(e);var o={props:{hintText:{type:String,required:!1},display:{type:Boolean,required:!0}},methods:{closeHint:function(){this.$emit("close")}}},r=n(326),c=n(3);var component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.display?n("div",{staticClass:"column is-12-mobile is-4-desktop",class:t.$style.hintContainer},[n("div",{class:t.$style.headerContainer},[n("h1",{staticClass:"title is-5",class:t.$style.headerTitle},[t._v("Hint")]),t._v(" "),n("i",{staticClass:"fa fa-times fa-2x",class:t.$style.closeHint,attrs:{"aria-hidden":"true"},on:{click:t.closeHint}})]),t._v(" "),n("div",{class:t.$style.hintBody},[n("p",[t._v(t._s(t.hintText))])]),t._v(" "),n("div",{class:t.$style.hintFooter},[n("p",{class:t.$style.gotIt,on:{click:t.closeHint}},[t._v(t._s(t.$t("close")))])])]):t._e()}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},334:function(t,e,n){"use strict";n.r(e);var o={methods:{showHint:function(){this.$emit("open")}}},r=n(328),c=n(3);var component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{class:t.$style.hintIcon,attrs:{src:n(318),alt:""},on:{click:function(e){return t.showHint()}}})}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},346:function(t,e,n){"use strict";var o=n(315),r=n.n(o);n.d(e,"default",(function(){return r.a}))},347:function(t,e,n){var o=n(12)(!1);o.push([t.i,".optionItemContainer_3ruZi{position:relative;padding:1rem;width:100%;margin:.5rem;display:flex;justify-content:space-around;flex-direction:column;align-items:center}",""]),o.locals={optionItemContainer:"optionItemContainer_3ruZi"},t.exports=o},348:function(t,e,n){"use strict";n(331)},349:function(t,e,n){var o=n(12)(!1);o.push([t.i,".optionMCQDiv[data-v-e2ed5df0]{position:relative;width:100%;height:100%;padding:1rem;background-color:#e4f7f1;border:2px solid transparent;cursor:pointer}.optionMCQDiv[data-v-e2ed5df0]:hover{background-color:#def8f7}.optionMCQSelected[data-v-e2ed5df0]{border-color:#4dccc4}.optionMCQcorrect[data-v-e2ed5df0]{background-color:#e1eab8;color:#509c59;border-color:#509c59}.optionMCQincorrect[data-v-e2ed5df0]{background-color:#ffedf1;color:#d9491a;border-color:#d9491a}.optionIndex[data-v-e2ed5df0]{float:left;font-weight:700;color:grey;margin-right:1rem}",""]),t.exports=o},364:function(t,e,n){var content=n(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("6ed4974d",content,!0,{sourceMap:!1})},374:function(t,e,n){"use strict";n.r(e);n(215);var o={name:"MCQTextAnswer",props:{option:{type:Object,required:!0},id:{type:String,required:!0},idx:{type:Number,required:!1},selectedOptions:{type:Array,required:!0},correctOptions:{type:Array,required:!0},answered:{type:Boolean,required:!0}},computed:{isSelected:function(){return-1!==this.selectedOptions.indexOf(this.option.option)?(console.log(this.answered),this.answered?-1!==this.correctOptions.indexOf(this.option.option)?["optionMCQDiv","optionMCQcorrect"]:["optionMCQDiv","optionMCQincorrect"]:["optionMCQDiv","optionMCQSelected"]):["optionMCQDiv"]}},methods:{handleChange:function(option){this.$emit("select",option.option)}}},r=n(346),c=(n(348),n(3));var component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.optionItemContainer,on:{click:function(e){return t.handleChange(t.option)}}},[n("div",{class:t.isSelected},[n("p",{staticClass:"optionIndex"},[t._v(t._s(t.idx))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.option.option)+"\n    ")])])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),"e2ed5df0",null);e.default=component.exports},394:function(t,e,n){"use strict";var o=n(325),r=n.n(o);n.d(e,"default",(function(){return r.a}))},395:function(t,e,n){var o=n(12)(!1);o.push([t.i,".answerDiv_EBvqE{margin:.5rem;display:flex;justify-content:space-around;flex-direction:column;align-items:center}.answerDiv_EBvqE,.optionItem_3-VGq{position:relative;width:100%}.optionItem_3-VGq{height:auto}",""]),o.locals={answerDiv:"answerDiv_EBvqE",optionItem:"optionItem_3-VGq"},t.exports=o},402:function(t,e,n){"use strict";n.r(e);n(215),n(217);var o=n(409),r=n(333),c=n(334),l=n(45),d={name:"MCQQuestionItem",components:{MCQAnswerList:o.default,HintInterface:r.default,HintIcon:c.default},props:{question:{required:!0,type:Object},questionNum:{required:!0,type:Number}},data:function(){return{submitText:this.$i18n.t("submit"),selectedOptions:[],correctOptions:[],multiChoice:!1,correctlyAnswered:null,hint:!1}},created:function(){this.correctOptions=this.question.options.reduce((function(t,option){return option.isCorrect&&t.push(option.option),t}),[]),this.correctOptions.length>1&&(this.multiChoice=!0)},computed:{showHint:function(){return this.hint},isAnswered:function(){return!(null===this.correctlyAnswered)},isSelected:function(){return 0!=this.selectedOptions.length},getSubmitClass:function(){return null==this.correctlyAnswered?"":1==this.correctlyAnswered?"submit-correct-answer":"submit-incorrect-answer"}},methods:{checkAns:function(){null===this.correctlyAnswered?Object(l.a)(this.selectedOptions,this.correctOptions)?(this.submitText=this.$i18n.t("next"),this.correctlyAnswered=!0,this.$emit("answer",!0)):(this.submitText=this.$i18n.t("tryagain"),this.correctlyAnswered=!1,this.$emit("answer",!1)):!0===this.correctlyAnswered?(this.$emit("goNext",!0),this.selectedOptions=[],this.correctlyAnswered=null,this.submitText=this.$i18n.t("submit")):(this.selectedOptions=[],this.correctlyAnswered=null,this.submitText=this.$i18n.t("submit"))},handleSelect:function(t){var e=this.selectedOptions.indexOf(t);-1!==e?this.selectedOptions.splice(e,1):(this.multiChoice||(this.selectedOptions=[]),this.selectedOptions.push(t))},openHint:function(){this.hint=!0},closeHint:function(){this.hint=!1}}},f=n(429),h=(n(431),n(3));var component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.questionDiv},[n("p",[t._v(t._s(t.question.question))]),t._v(" "),n("MCQAnswerList",{class:{disabledInput:t.isAnswered},attrs:{options:t.question.options,multiChoice:t.multiChoice,selectedOptions:t.selectedOptions,correctOptions:t.correctOptions,answered:t.isAnswered},on:{select:t.handleSelect}}),t._v(" "),n("button",{staticClass:"button is-primary",class:t.getSubmitClass,attrs:{disabled:!t.isSelected},on:{click:t.checkAns}},[t._v("\n    "+t._s(t.submitText)+"\n  ")]),t._v(" "),n("HintInterface",{attrs:{display:t.showHint,hintText:"this is hint"},on:{close:function(e){return t.closeHint()}}}),t._v(" "),n("HintIcon",{on:{open:function(e){return t.openHint()}}})],1)}),[],!1,(function(t){this.$style=f.default.locals||f.default}),"4139008c",null);e.default=component.exports},406:function(t,e,n){var content=n(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("09cff228",content,!0,{sourceMap:!1})},409:function(t,e,n){"use strict";n.r(e);var o={name:"MCQAnswerList",components:{MCQOptionItem2:n(374).default},props:{options:{type:Array,required:!0},multiChoice:{type:Boolean,default:!1},selectedOptions:{type:Array,required:!0},correctOptions:{type:Array,required:!0},answered:{type:Boolean,required:!0}},computed:{isSelected:function(){}},methods:{handleSelect:function(option){this.$emit("select",option.option)}}},r=n(394),c=n(3);var component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.answerDiv},t._l(t.options,(function(option,e){return n("div",{key:option.option,class:t.$style.optionItem},[n("MCQOptionItem2",{attrs:{id:"opt"+e,option:option,idx:e+1,selectedOptions:t.selectedOptions,correctOptions:t.correctOptions,answered:t.answered},on:{select:function(e){return t.handleSelect(option)}}})],1)})),0)}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},429:function(t,e,n){"use strict";var o=n(364),r=n.n(o);n.d(e,"default",(function(){return r.a}))},430:function(t,e,n){var o=n(12)(!1);o.push([t.i,".questionDiv_HfgHy{position:relative;width:100%;margin:.5rem;display:flex;justify-content:space-around;flex-direction:column;align-items:center}",""]),o.locals={questionDiv:"questionDiv_HfgHy"},t.exports=o},431:function(t,e,n){"use strict";n(406)},432:function(t,e,n){var o=n(12)(!1);o.push([t.i,".submit-correct-answer[data-v-4139008c]{background-color:#b8d34f}.submit-correct-answer[data-v-4139008c]:hover{background-color:#84c251}.submit-incorrect-answer[data-v-4139008c]{background-color:#cd5c5c}.submit-incorrect-answer[data-v-4139008c]:hover{background-color:#ff918e}.disabledInput[data-v-4139008c]{pointer-events:none}",""]),t.exports=o}}]);