(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{318:function(t,e,r){"use strict";r.r(e);r(30),r(26),r(17),r(53),r(54);var o=r(14),n=(r(25),r(52),r(21),r(39),r(45),r(44));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{textdata:{type:String,required:!0},highlight:{type:Boolean,default:!1},highlightClass:{type:String,default:"default-text-highlight"},vocab:{type:Boolean,default:!0}},data:function(){return{words:[],vocabDict:this.$store.state.lesson.glossary}},created:function(){this.words=this.appendVocab()},methods:{splitHighlight:function(){if(this.highlight){var t=this.textdata.split(/[#@]/),e=[];return t.forEach((function(t,r){var text={text:t,isHighlight:!1,hasVocab:!1,vocab:null};r%2&&(text.isHighlight=!0),""!==t&&e.push(text)})),e}return[{text:this.textdata,isHighlight:!1,hasVocab:!1,vocab:null}]},appendVocab:function(){if(this.words=this.splitHighlight(),this.vocab){var t=[],e=this.vocabDict,r=this.$store.state.lesson.selectors;return this.words.forEach((function(o){var c=[o];r.forEach((function(t){var r=o.text,l=r.toLowerCase(),f=l.indexOf(t);if(-1!=f){var d=f+t.length,v=l[d];if(!Object(n.e)(v)){var O=h({},o),w=h({},o),y=h({},o),j=r.slice(0,f),x=r.slice(f,d),C=r.slice(d);O.text=j,w.text=x,w.hasVocab=!0,w.vocab=e[t],y.text=C,c=[O,w,y]}}})),t=t.concat(c)})),t}return this.words},getClass:function(t){return t?this.highlightClass:""},onOver:function(data,t){var rect=this.$refs.vocabItem[0].getBoundingClientRect();this.$store.dispatch("lesson/setVocab"),this.$store.dispatch("lesson/setCurrentWord",data),this.$store.dispatch("lesson/setVocabPosition",rect)},onLeave:function(){this.$store.dispatch("lesson/resetVocab")}}},f=r(3),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._l(t.words,(function(e){return[e.hasVocab?r("span",{key:e,ref:"vocabItem",refInFor:!0,staticClass:"default-vocab-word",class:t.getClass(e.isHighlight),on:{mouseover:function(r){return t.onOver(e.vocab,r)}}},[t._v(t._s(e.text)+"\n      ")]):r("span",{key:e,class:t.getClass(e.isHighlight)},[t._v(t._s(e.text))])]}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);