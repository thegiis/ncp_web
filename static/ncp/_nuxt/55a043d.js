(window.webpackJsonp=window.webpackJsonp||[]).push([[16,18],{315:function(e,t,o){var content=o(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("b2afd3ee",content,!0,{sourceMap:!1})},325:function(e,t,o){var content=o(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("38a0c993",content,!0,{sourceMap:!1})},331:function(e,t,o){var content=o(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("00829d2e",content,!0,{sourceMap:!1})},346:function(e,t,o){"use strict";var n=o(315),r=o.n(n);o.d(t,"default",(function(){return r.a}))},347:function(e,t,o){var n=o(12)(!1);n.push([e.i,".optionItemContainer_3ruZi{position:relative;padding:1rem;width:100%;margin:.5rem;display:flex;justify-content:space-around;flex-direction:column;align-items:center}",""]),n.locals={optionItemContainer:"optionItemContainer_3ruZi"},e.exports=n},348:function(e,t,o){"use strict";o(331)},349:function(e,t,o){var n=o(12)(!1);n.push([e.i,".optionMCQDiv[data-v-e2ed5df0]{position:relative;width:100%;height:100%;padding:1rem;background-color:#e4f7f1;border:2px solid transparent;cursor:pointer}.optionMCQDiv[data-v-e2ed5df0]:hover{background-color:#def8f7}.optionMCQSelected[data-v-e2ed5df0]{border-color:#4dccc4}.optionMCQcorrect[data-v-e2ed5df0]{background-color:#e1eab8;color:#509c59;border-color:#509c59}.optionMCQincorrect[data-v-e2ed5df0]{background-color:#ffedf1;color:#d9491a;border-color:#d9491a}.optionIndex[data-v-e2ed5df0]{float:left;font-weight:700;color:grey;margin-right:1rem}",""]),e.exports=n},374:function(e,t,o){"use strict";o.r(t);o(215);var n={name:"MCQTextAnswer",props:{option:{type:Object,required:!0},id:{type:String,required:!0},idx:{type:Number,required:!1},selectedOptions:{type:Array,required:!0},correctOptions:{type:Array,required:!0},answered:{type:Boolean,required:!0}},computed:{isSelected:function(){return-1!==this.selectedOptions.indexOf(this.option.option)?(console.log(this.answered),this.answered?-1!==this.correctOptions.indexOf(this.option.option)?["optionMCQDiv","optionMCQcorrect"]:["optionMCQDiv","optionMCQincorrect"]:["optionMCQDiv","optionMCQSelected"]):["optionMCQDiv"]}},methods:{handleChange:function(option){this.$emit("select",option.option)}}},r=o(346),c=(o(348),o(3));var component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:e.$style.optionItemContainer,on:{click:function(t){return e.handleChange(e.option)}}},[o("div",{class:e.isSelected},[o("p",{staticClass:"optionIndex"},[e._v(e._s(e.idx))]),e._v(" "),o("p",[e._v("\n      "+e._s(e.option.option)+"\n    ")])])])}),[],!1,(function(e){this.$style=r.default.locals||r.default}),"e2ed5df0",null);t.default=component.exports},394:function(e,t,o){"use strict";var n=o(325),r=o.n(n);o.d(t,"default",(function(){return r.a}))},395:function(e,t,o){var n=o(12)(!1);n.push([e.i,".answerDiv_EBvqE{margin:.5rem;display:flex;justify-content:space-around;flex-direction:column;align-items:center}.answerDiv_EBvqE,.optionItem_3-VGq{position:relative;width:100%}.optionItem_3-VGq{height:auto}",""]),n.locals={answerDiv:"answerDiv_EBvqE",optionItem:"optionItem_3-VGq"},e.exports=n},409:function(e,t,o){"use strict";o.r(t);var n={name:"MCQAnswerList",components:{MCQOptionItem2:o(374).default},props:{options:{type:Array,required:!0},multiChoice:{type:Boolean,default:!1},selectedOptions:{type:Array,required:!0},correctOptions:{type:Array,required:!0},answered:{type:Boolean,required:!0}},computed:{isSelected:function(){}},methods:{handleSelect:function(option){this.$emit("select",option.option)}}},r=o(394),c=o(3);var component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:e.$style.answerDiv},e._l(e.options,(function(option,t){return o("div",{key:option.option,class:e.$style.optionItem},[o("MCQOptionItem2",{attrs:{id:"opt"+t,option:option,idx:t+1,selectedOptions:e.selectedOptions,correctOptions:e.correctOptions,answered:e.answered},on:{select:function(t){return e.handleSelect(option)}}})],1)})),0)}),[],!1,(function(e){this.$style=r.default.locals||r.default}),null,null);t.default=component.exports}}]);