(window.webpackJsonp=window.webpackJsonp||[]).push([[14,16],{300:function(e,t,o){var content=o(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("b2afd3ee",content,!0,{sourceMap:!1})},306:function(e,t,o){var content=o(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("38a0c993",content,!0,{sourceMap:!1})},315:function(e,t,o){"use strict";var n=o(17),r=o(7),c=o(81),d=o(27),l=o(20),f=o(60),v=o(147),h=o(79),m=o(9),y=o(65),I=o(80).f,_=o(55).f,C=o(22).f,M=o(208).trim,w="Number",x=r.Number,N=x.prototype,E=f(y(N))==w,O=function(e){var t,o,n,r,c,d,l,code,f=h(e,!1);if("string"==typeof f&&f.length>2)if(43===(t=(f=M(f)).charCodeAt(0))||45===t){if(88===(o=f.charCodeAt(2))||120===o)return NaN}else if(48===t){switch(f.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+f}for(d=(c=f.slice(2)).length,l=0;l<d;l++)if((code=c.charCodeAt(l))<48||code>r)return NaN;return parseInt(c,n)}return+f};if(c(w,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var A,Q=function(e){var t=arguments.length<1?0:e,o=this;return o instanceof Q&&(E?m((function(){N.valueOf.call(o)})):f(o)!=w)?v(new x(O(t)),o,Q):O(t)},S=n?I(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),D=0;S.length>D;D++)l(x,A=S[D])&&!l(Q,A)&&C(Q,A,_(x,A));Q.prototype=N,N.constructor=Q,d(r,w,Q)}},316:function(e,t,o){var content=o(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("00829d2e",content,!0,{sourceMap:!1})},331:function(e,t,o){"use strict";var n=o(300),r=o.n(n);o.d(t,"default",(function(){return r.a}))},332:function(e,t,o){var n=o(12)(!1);n.push([e.i,".optionItemContainer_3ruZi{position:relative;padding:1rem;width:100%;margin:.5rem;display:flex;justify-content:space-around;flex-direction:column;align-items:center}",""]),n.locals={optionItemContainer:"optionItemContainer_3ruZi"},e.exports=n},333:function(e,t,o){"use strict";o(316)},334:function(e,t,o){var n=o(12)(!1);n.push([e.i,".optionMCQDiv[data-v-e2ed5df0]{position:relative;width:100%;height:100%;padding:1rem;background-color:#e4f7f1;border:2px solid transparent;cursor:pointer}.optionMCQDiv[data-v-e2ed5df0]:hover{background-color:#def8f7}.optionMCQSelected[data-v-e2ed5df0]{border-color:#4dccc4}.optionMCQcorrect[data-v-e2ed5df0]{background-color:#e1eab8;color:#509c59;border-color:#509c59}.optionMCQincorrect[data-v-e2ed5df0]{background-color:#ffedf1;color:#d9491a;border-color:#d9491a}.optionIndex[data-v-e2ed5df0]{float:left;font-weight:700;color:grey;margin-right:1rem}",""]),e.exports=n},346:function(e,t,o){"use strict";o.r(t);o(315);var n={name:"MCQTextAnswer",props:{option:{type:Object,required:!0},id:{type:String,required:!0},idx:{type:Number,required:!1},selectedOptions:{type:Array,required:!0},correctOptions:{type:Array,required:!0},answered:{type:Boolean,required:!0}},computed:{isSelected:function(){return-1!==this.selectedOptions.indexOf(this.option.option)?(console.log(this.answered),this.answered?-1!==this.correctOptions.indexOf(this.option.option)?["optionMCQDiv","optionMCQcorrect"]:["optionMCQDiv","optionMCQincorrect"]:["optionMCQDiv","optionMCQSelected"]):["optionMCQDiv"]}},methods:{handleChange:function(option){this.$emit("select",option.option)}}},r=o(331),c=(o(333),o(5));var component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:e.$style.optionItemContainer,on:{click:function(t){return e.handleChange(e.option)}}},[o("div",{class:e.isSelected},[o("p",{staticClass:"optionIndex"},[e._v(e._s(e.idx))]),e._v(" "),o("p",[e._v("\n      "+e._s(e.option.option)+"\n    ")])])])}),[],!1,(function(e){this.$style=r.default.locals||r.default}),"e2ed5df0",null);t.default=component.exports},367:function(e,t,o){"use strict";var n=o(306),r=o.n(n);o.d(t,"default",(function(){return r.a}))},368:function(e,t,o){var n=o(12)(!1);n.push([e.i,".answerDiv_EBvqE{margin:.5rem;display:flex;justify-content:space-around;flex-direction:column;align-items:center}.answerDiv_EBvqE,.optionItem_3-VGq{position:relative;width:100%}.optionItem_3-VGq{height:auto}",""]),n.locals={answerDiv:"answerDiv_EBvqE",optionItem:"optionItem_3-VGq"},e.exports=n},385:function(e,t,o){"use strict";o.r(t);var n={name:"MCQAnswerList",components:{MCQOptionItem2:o(346).default},props:{options:{type:Array,required:!0},multiChoice:{type:Boolean,default:!1},selectedOptions:{type:Array,required:!0},correctOptions:{type:Array,required:!0},answered:{type:Boolean,required:!0}},computed:{isSelected:function(){}},methods:{handleSelect:function(option){this.$emit("select",option.option)}}},r=o(367),c=o(5);var component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:e.$style.answerDiv},e._l(e.options,(function(option,t){return o("div",{key:option.option,class:e.$style.optionItem},[o("MCQOptionItem2",{attrs:{id:"opt"+t,option:option,idx:t+1,selectedOptions:e.selectedOptions,correctOptions:e.correctOptions,answered:e.answered},on:{select:function(t){return e.handleSelect(option)}}})],1)})),0)}),[],!1,(function(e){this.$style=r.default.locals||r.default}),null,null);t.default=component.exports}}]);