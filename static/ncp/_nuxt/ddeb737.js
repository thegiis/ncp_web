(window.webpackJsonp=window.webpackJsonp||[]).push([[11,10,12,13],{296:function(t,e,n){var content=n(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("5978863e",content,!0,{sourceMap:!1})},297:function(t,e,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("68682476",content,!0,{sourceMap:!1})},301:function(t,e,n){t.exports=n.p+"img/hint.4168780.svg"},307:function(t,e,n){"use strict";var r=n(296),o=n.n(r);n.d(e,"default",(function(){return o.a}))},308:function(t,e,n){var r=n(12)(!1);r.push([t.i,".hintContainer_b6dI5{position:fixed;z-index:100;height:100vh;background-color:#fff;top:0;left:0;padding:0}.headerContainer_3KI4h{width:100%;background-color:#b0c4de;padding:1rem;height:8vh;display:flex;align-items:center;justify-content:space-between}.headerTitle_2-tkm{color:#00008b;margin-bottom:0!important;padding:0}.closeHint_1pXFO{color:#00008b;cursor:pointer}.hintBody_1QOTT{position:relative;padding:1rem}.hintFooter_1lH1f{position:absolute;bottom:0;left:0;width:100%;height:8vh}.gotIt_21_zs{float:right;margin-right:1rem;color:teal;font-size:1.4rem;cursor:pointer;font-weight:700}",""]),r.locals={hintContainer:"hintContainer_b6dI5",headerContainer:"headerContainer_3KI4h",headerTitle:"headerTitle_2-tkm",closeHint:"closeHint_1pXFO",hintBody:"hintBody_1QOTT",hintFooter:"hintFooter_1lH1f",gotIt:"gotIt_21_zs"},t.exports=r},309:function(t,e,n){"use strict";var r=n(297),o=n.n(r);n.d(e,"default",(function(){return o.a}))},310:function(t,e,n){var r=n(12)(!1);r.push([t.i,".hintIcon_2IXmz{cursor:pointer;position:fixed;bottom:1rem;right:1rem;left:auto;width:4rem;z-index:99}@media only screen and (min-width:768px){.hintIcon_2IXmz{right:auto;left:1rem}}",""]),r.locals={hintIcon:"hintIcon_2IXmz"},t.exports=r},313:function(t,e,n){var content=n(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("0be34729",content,!0,{sourceMap:!1})},317:function(t,e,n){var content=n(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("72fb8e60",content,!0,{sourceMap:!1})},318:function(t,e,n){"use strict";n.r(e);var r={props:{hintText:{type:String,required:!1},display:{type:Boolean,required:!0}},methods:{closeHint:function(){this.$emit("close")}}},o=n(307),c=n(5);var component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.display?n("div",{staticClass:"column is-12-mobile is-4-desktop",class:t.$style.hintContainer},[n("div",{class:t.$style.headerContainer},[n("h1",{staticClass:"title is-5",class:t.$style.headerTitle},[t._v("Hint")]),t._v(" "),n("i",{staticClass:"fa fa-times fa-2x",class:t.$style.closeHint,attrs:{"aria-hidden":"true"},on:{click:t.closeHint}})]),t._v(" "),n("div",{class:t.$style.hintBody},[n("p",[t._v(t._s(t.hintText))])]),t._v(" "),n("div",{class:t.$style.hintFooter},[n("p",{class:t.$style.gotIt,on:{click:t.closeHint}},[t._v(t._s(t.$t("close")))])])]):t._e()}),[],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.default=component.exports},319:function(t,e,n){"use strict";n.r(e);var r={methods:{showHint:function(){this.$emit("open")}}},o=n(309),c=n(5);var component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{class:t.$style.hintIcon,attrs:{src:n(301),alt:""},on:{click:function(e){return t.showHint()}}})}),[],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.default=component.exports},335:function(t,e,n){"use strict";n(317)},336:function(t,e,n){var r=n(12)(!1);r.push([t.i,".dragdropquizWrapper[data-v-e6f7c620]{display:flex;flex-direction:column;min-height:70vh;width:100%}.dragdropTitle[data-v-e6f7c620]{font-size:2.5rem;color:#1e4d63;text-align:center}.questionList[data-v-e6f7c620]{display:flex;padding:1rem;cursor:pointer;min-height:8vh;align-items:center}.dndItem[data-v-e6f7c620]{margin:.25rem .5rem;padding:.5rem}.dragdropAnsDiv[data-v-e6f7c620]{display:flex;align-items:center;justify-content:center}.dropContainer[data-v-e6f7c620]{background-color:#ffa07a;min-height:200px;margin:.25rem;padding:.25rem;width:45%}.dndSubmitBtn[data-v-e6f7c620]{width:auto;margin:1rem auto}.submit-correct-answer[data-v-e6f7c620]{background-color:#b8d34f}.submit-correct-answer[data-v-e6f7c620]:hover{background-color:#84c251}.submit-incorrect-answer[data-v-e6f7c620]{background-color:#cd5c5c}.submit-incorrect-answer[data-v-e6f7c620]:hover{background-color:#ff918e}.disabledInput[data-v-e6f7c620]{pointer-events:none}",""]),t.exports=r},347:function(t,e,n){"use strict";n.r(e);n(33),n(11),n(21);var r=n(328),o=n.n(r),c=n(318),l=n(319),d={components:{draggable:o.a,HintInterface:c.default,HintIcon:l.default},props:{instruction:{type:Object,required:!0},itemList:{type:Object,required:!0},dropList:{type:Array,required:!0}},data:function(){return{submitText:this.$i18n.t("submit"),enabled:!0,questionList:this.itemList.list,ansList:this.dropList.map((function(t){return t.list})),dropMap:this.dropList.map((function(t){return t.name})),isCorrect:!1,correctlyAnswered:null,hint:!1}},created:function(){},computed:{showHint:function(){return this.hint},isSelected:function(){var t=!1;return this.dropList.forEach((function(e){0!=e.length&&(t=!0)})),t},getSubmitClass:function(){return null==this.correctlyAnswered?"":1==this.correctlyAnswered?"submit-correct-answer":"submit-incorrect-answer"}},methods:{checkDrop:function(t){var e=t.added,n=t.removed;(e||n)&&this.correctlyDropped()},correctlyDropped:function(){for(var t=this,e=!0,i=0;i<this.questionList.length;i++)"questionList"!==this.questionList[i].drop&&(e=!1);for(var n=function(n){var r=t.dropMap[n];t.ansList[n].forEach((function(t){t.drop!==r&&(e=!1)}))},r=0;r<this.ansList.length;r++)n(r);e&&(this.isCorrect=e)},checkAns:function(){this.correctlyDropped(),null===this.correctlyAnswered?this.isCorrect?(this.submitText=this.$i18n.t("next"),this.correctlyAnswered=!0,this.$emit("answer",!0)):(this.submitText=this.$i18n.t("tryagain"),this.correctlyAnswered=!1,this.$emit("answer",!1)):!0===this.correctlyAnswered?(this.$emit("goNext",!0),this.correctlyAnswered=null,this.submitText=this.$i18n.t("submit")):(this.correctlyAnswered=null,this.submitText=this.$i18n.t("submit"))},openHint:function(){this.hint=!0},closeHint:function(){this.hint=!1}}},h=(n(335),n(5)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dragdropquizWrapper"},[n("h1",{staticClass:"dragdropTitle",class:t.instruction.class},[t._v("\n    "+t._s(t.instruction.text)+"\n  ")]),t._v(" "),n("draggable",{ref:"questionList",staticClass:"questionList",class:t.itemList.class,attrs:{disabled:!t.enabled,list:t.questionList,group:"activity"},on:{change:t.checkDrop}},t._l(t.questionList,(function(element){return n("div",{key:element.name,staticClass:"card dndItem"},[t._v("\n      "+t._s(element.name)+"\n    ")])})),0),t._v(" "),n("div",{staticClass:"dragdropAnsDiv"},t._l(t.dropList,(function(e,r){return n("draggable",{key:r,ref:e.name,refInFor:!0,staticClass:"dropContainer",class:e.class,attrs:{disabled:!t.enabled,list:t.ansList[r],"data-name":e.name,group:"activity"},on:{change:t.checkDrop}},[n("h1",{staticClass:"title is-5"},[t._v(t._s(e.label))]),t._v(" "),t._l(t.ansList[r],(function(element){return n("div",{key:element.name,staticClass:"card dndItem"},[t._v("\n        "+t._s(element.name)+"\n      ")])}))],2)})),1),t._v(" "),n("button",{staticClass:"button is-primary dndSubmitBtn",class:t.getSubmitClass,attrs:{disabled:!t.isSelected},on:{click:t.checkAns}},[t._v("\n    "+t._s(t.submitText)+"\n  ")]),t._v(" "),n("HintInterface",{attrs:{display:t.showHint,hintText:"this is hint"},on:{close:function(e){return t.closeHint()}}}),t._v(" "),n("HintIcon",{on:{open:function(e){return t.openHint()}}})],1)}),[],!1,null,"e6f7c620",null);e.default=component.exports},373:function(t,e,n){"use strict";var r=n(313),o=n.n(r);n.d(e,"default",(function(){return o.a}))},374:function(t,e,n){var r=n(12)(!1);r.push([t.i,".questionListDiv_2PTn0{padding:2rem 1rem;width:100%;min-height:80vh}.progressWrapper_35N9P,.questionListDiv_2PTn0{position:relative}.progressBar_1O0Lv{border-radius:0;height:2rem}.progressText_1uJTH{position:absolute;z-index:10;top:50%;left:1rem;transform:translateY(-50%);color:#fff}.completedMessage_2D6e4{position:relative}",""]),r.locals={questionListDiv:"questionListDiv_2PTn0",progressWrapper:"progressWrapper_35N9P",progressBar:"progressBar_1O0Lv",progressText:"progressText_1uJTH",completedMessage:"completedMessage_2D6e4"},t.exports=r},387:function(t,e,n){"use strict";n.r(e);n(29),n(26),n(19),n(53),n(21),n(54);var r=n(14);n(33);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"DragDropList",components:{DragDrop:n(347).default},props:{questionList:{required:!0,type:Array},instructionClass:{default:null,required:!1},questionClass:{default:null,required:!1},dropClasses:{type:Array,required:!1}},data:function(){return{componentKey:0,questionNum:1,answers:[],completed:!1,totalQuestions:this.questionList.length}},computed:{getQuestion:function(){return this.questionList[this.questionNum-1]},instruction:function(){return{text:this.questionList[this.questionNum-1].instruction,class:this.instructionClass}},questions:function(){return{list:this.questionList[this.questionNum-1].items,class:this.questionClass}},dropList:function(){var t=this.questionList[this.questionNum-1].dropList,e=t.length,n=this.dropClasses;if(void 0===n&&(n=[]),n.length!==e)for(var i=0;i<e;i++)n.push(null);return t.map((function(t,e){return c(c({},t),{class:n[e]})}))}},created:function(){},methods:{handleAnswer:function(t){this.answers.push(t)},handleNext:function(t){t&&(this.questionNum<this.totalQuestions?(this.questionNum+=1,this.componentKey+=1):this.completed=!0)}}},d=n(373),h=n(5);var component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.questionListDiv},[t.completed?t._e():n("div",{class:t.$style.progressWrapper},[n("progress",{staticClass:"progress is-success",class:t.$style.progressBar,attrs:{max:t.totalQuestions},domProps:{value:t.questionNum-1}}),t._v(" "),n("span",{class:t.$style.progressText},[t._v(t._s(t.questionNum-1+"/"+t.totalQuestions))])]),t._v(" "),t.completed?n("div",{class:t.$style.completedMessage},[n("p",{staticClass:"title is-1"},[t._v("Quiz Complete")])]):n("div",{class:t.$style.questionContainer},[n("DragDrop",{key:t.componentKey,attrs:{instruction:t.instruction,itemList:t.questions,dropList:t.dropList},on:{answer:t.handleAnswer,goNext:t.handleNext}})],1)])}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports}}]);