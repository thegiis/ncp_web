(window.webpackJsonp=window.webpackJsonp||[]).push([[28,6,20,21],{305:function(t,e,r){var content=r(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("5befc037",content,!0,{sourceMap:!1})},306:function(t,e,r){"use strict";r.r(e);r(25),r(52),r(11),r(29);var n=r(108),o=r(44),l={data:function(){return{modules:[],currentPage:this.$route.name.split("__")[0],currentLangModules:[],parent:{},current:""}},created:function(){var t=this.$i18n.locale;this.modules=Object(o.b)(n),this.currentLangModules=this.modules.map((function(e){return e[t]}));for(var i=0;i<this.currentLangModules.length;){var e=this.currentLangModules[i],r=e.routes.indexOf(this.currentPage);if(r>-1){var l=this.currentPage.split("-")[0]+"___"+this.$i18n.locale;this.parent={title:e.title,route:l},this.current=e.pageNames[r]}i++}}},c=r(310),h=r(3);var component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"breadcrumb has-succeeds-separator is-medium",class:t.$style.breadcrumbContainer,attrs:{"aria-label":"breadcrumbs"}},[r("ul",[r("li",[r("nuxt-link",{attrs:{to:{name:"index___"+this.$i18n.locale}}},[t._v("Home")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:{name:t.parent.route}}},[t._v(t._s(t.parent.title))])],1),t._v(" "),t.current.startsWith("index")?t._e():r("li",{staticClass:"is-active"},[r("nuxt-link",{attrs:{to:{name:t.$route.name},"aria-current":"page"}},[t._v(t._s(t.current))])],1)])])}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports},307:function(t,e,r){var content=r(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("3da43b1a",content,!0,{sourceMap:!1})},310:function(t,e,r){"use strict";var n=r(305),o=r.n(n);r.d(e,"default",(function(){return o.a}))},311:function(t,e,r){var n=r(12)(!1);n.push([t.i,".breadcrumbContainer_1uSt2{width:100%}",""]),n.locals={breadcrumbContainer:"breadcrumbContainer_1uSt2"},t.exports=n},312:function(t,e,r){"use strict";r.r(e);r(25),r(52),r(11),r(29);var n=r(108),o=r(44),l={data:function(){return{currentPage:this.$route.name.split("__")[0],nextLink:this.$route.name,nextTopic:"",showNextSection:!1}},created:function(){for(var t=this.$i18n.locale,e=Object(o.b)(n).map((function(e){return e[t]})),i=0;i<e.length;){var r=e[i],l=r.routes.indexOf(this.currentPage),c=r.routes.length;l>-1&&l<c&&(this.nextLink=r.routes[l+1]+"___"+this.$i18n.locale,this.nextTopic=r.pageNames[l+1],this.showNextSection=!0),i++}},computed:{getTopic:function(){return this.nextTopic},getNextLink:function(){return this.nextLink}}},c=r(322),h=r(3);var component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.showNextSection?r("section",{class:t.$style.nextSection},[r("div",{class:t.$style.topicTitleDiv},[r("div",{class:t.$style.topicTitle},[r("p",{staticClass:"is-size-5",class:t.$style.nextSection},[t._v("Next Section")]),t._v(" "),r("nuxt-link",{staticClass:"button is-uppercase is-primary",attrs:{to:{name:t.getNextLink}}},[r("span",[t._v(t._s(t.getTopic))]),t._v(" "),r("span",{class:t.$style.rightArrow},[r("i",{staticClass:"fas fa-angle-right"})])])],1)])]):t._e()}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports},318:function(t,e,r){"use strict";r.r(e);r(30),r(26),r(17),r(53),r(54);var n=r(14),o=(r(25),r(52),r(21),r(39),r(45),r(44));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={props:{textdata:{type:String,required:!0},highlight:{type:Boolean,default:!1},highlightClass:{type:String,default:"default-text-highlight"},vocab:{type:Boolean,default:!0}},data:function(){return{words:[],vocabDict:this.$store.state.lesson.glossary}},created:function(){this.words=this.appendVocab()},methods:{splitHighlight:function(){if(this.highlight){var t=this.textdata.split(/[#@]/),e=[];return t.forEach((function(t,r){var text={text:t,isHighlight:!1,hasVocab:!1,vocab:null};r%2&&(text.isHighlight=!0),""!==t&&e.push(text)})),e}return[{text:this.textdata,isHighlight:!1,hasVocab:!1,vocab:null}]},appendVocab:function(){if(this.words=this.splitHighlight(),this.vocab){var t=[],e=this.vocabDict,r=this.$store.state.lesson.selectors;return this.words.forEach((function(n){var l=[n];r.forEach((function(t){var r=n.text,h=r.toLowerCase(),d=h.indexOf(t);if(-1!=d){var f=d+t.length,x=h[f];if(!Object(o.e)(x)){var v=c({},n),m=c({},n),_=c({},n),y=r.slice(0,d),w=r.slice(d,f),C=r.slice(f);v.text=y,m.text=w,m.hasVocab=!0,m.vocab=e[t],_.text=C,l=[v,m,_]}}})),t=t.concat(l)})),t}return this.words},getClass:function(t){return t?this.highlightClass:""},onOver:function(data,t){var rect=this.$refs.vocabItem[0].getBoundingClientRect();this.$store.dispatch("lesson/setVocab"),this.$store.dispatch("lesson/setCurrentWord",data),this.$store.dispatch("lesson/setVocabPosition",rect)},onLeave:function(){this.$store.dispatch("lesson/resetVocab")}}},d=r(3),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._l(t.words,(function(e){return[e.hasVocab?r("span",{key:e,ref:"vocabItem",refInFor:!0,staticClass:"default-vocab-word",class:t.getClass(e.isHighlight),on:{mouseover:function(r){return t.onOver(e.vocab,r)}}},[t._v(t._s(e.text)+"\n      ")]):r("span",{key:e,class:t.getClass(e.isHighlight)},[t._v(t._s(e.text))])]}))],2)}),[],!1,null,null,null);e.default=component.exports},322:function(t,e,r){"use strict";var n=r(307),o=r.n(n);r.d(e,"default",(function(){return o.a}))},323:function(t,e,r){var n=r(12)(!1);n.push([t.i,".nextSection_3FC79{margin-top:auto;margin-bottom:auto}.topicIndicator_3RhyD{border-bottom:1px solid #a9a9a9;font-size:1.2rem;padding:.5rem}.topicTitleDiv_AFKZd{border:1px solid #a9a9a9;padding:.5rem;border-radius:.3rem}.topicTitle_1aFkC{width:100%;display:flex;flex-direction:row;justify-content:space-between}.rightArrow_2zGut{padding-left:.5rem;padding-top:.1rem}",""]),n.locals={nextSection:"nextSection_3FC79",topicIndicator:"topicIndicator_3RhyD",topicTitleDiv:"topicTitleDiv_AFKZd",topicTitle:"topicTitle_1aFkC",rightArrow:"rightArrow_2zGut"},t.exports=n},335:function(t,e,r){t.exports=r.p+"img/flower1.0fb664c.png"},336:function(t,e,r){t.exports=r.p+"img/flower2.9a224a9.png"},363:function(t,e,r){var content=r(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("3b3fd094",content,!0,{sourceMap:!1})},423:function(t){t.exports=JSON.parse('{"title":"Pollination","data":{"text0":"Parts of a Flower","text1":"Flowers are the most beautiful parts of a plant.","text2":"Flowers vary in shape, size and colors.","text3":"But all flowers have the same basic parts.","text4":"The flower is the reproductive organ of many flowering plants.","text5":"Some flowers may have only male reproductive parts.","text6":"Some flowers may have only female reproductive parts.","text7":"They are called #incomplete flowers@.","text8":"An incomplete flower has either male parts or female parts, but never both. Such as pumpkin flowers."}}')},424:function(t){t.exports=JSON.parse('{"title":"परागकण","data":{"text0":"फूलका विभिन्‍न भागहरू","text1":"बिरुवाको सबैभन्‍दा सुन्‍दर भाग फूल हो।","text2":"फूल विभिन्‍न आकार, प्रकार र रङका हुन्छन्।","text3":"तर सबै फूलका भागहरू भने उस्तै हुन्छन्।","text4":"फूल फूल्ने बिरुवाको प्रजनन अङ्‍ग भनेको फूल नै हो।","text5":"कुनै फूलमा भाले अङ्‍ग मात्रै हुन्छ।","text6":"कुनै फूलमा पोथी अङ्‍ग मात्रै हुन्छ।","text7":"यिनीहरूलाई #अपूर्ण फूल@ भनिन्‍छ।","text8":"अपूर्ण फूलमा भाले वा पोथी अङ्‍गमध्ये कुनै एउटा मात्रै भाग हुन्छ। तर दुवै भने हुँदैन। जस्तै: फर्सीको फूल।"}}')},425:function(t,e,r){"use strict";var n=r(363),o=r.n(n);r.d(e,"default",(function(){return o.a}))},426:function(t,e,r){var n=r(12)(!1);n.push([t.i,".lesson_10XNt{padding:2rem;position:relative}.nextButton_2eBmA{position:relative;left:90%;margin:.5rem}.title_7eC-I{font-size:2.25rem;text-align:center;margin:1rem;color:#00008b;text-decoration:underline}.imgContainer_2cZ9G{position:relative;display:flex;align-items:center;justify-content:center;padding:2rem;height:300px}.imgContainer_2cZ9G img{position:relative;margin:0 1rem;height:100%}.description_1aub1{margin:0 auto;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:1.2rem;line-height:2rem;text-align:center}.testClass_1wRU2{color:red}",""]),n.locals={lesson:"lesson_10XNt",nextButton:"nextButton_2eBmA",title:"title_7eC-I",imgContainer:"imgContainer_2cZ9G",description:"description_1aub1",testClass:"testClass_1wRU2"},t.exports=n},460:function(t,e,r){"use strict";r.r(e);var n=r(423),o=r(424),l=r(215),c=r(318),h=r(306),d=r(312),f={en:n,np:o},x={components:{BaseText:c.default,LessonBreadcrumbs:h.default,LessonNextButton:d.default},i18n:{messages:f},created:function(){var t=this.$i18n.locale;this.$store.dispatch("lesson/setGlossary",{glossary:l,locale:t})},methods:{getText:function(t){return t="data."+t,this.$i18n.t(t)}}},v=r(425),m=r(3);var component=Object(m.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container is-max-desktop"},[n("LessonBreadcrumbs"),t._v(" "),n("div",{class:t.$style.imgContainer},[n("img",{attrs:{src:r(335),alt:""}}),t._v(" "),n("img",{attrs:{src:r(336),alt:""}})]),t._v(" "),n("div",{class:t.$style.description},[n("BaseText",{attrs:{textdata:t.getText("text1"),highlight:!0}}),t._v(" "),n("BaseText",{attrs:{textdata:t.getText("text2"),highlight:!0}}),t._v(" "),n("BaseText",{attrs:{textdata:t.getText("text3"),highlight:!0}}),t._v(" "),n("BaseText",{attrs:{textdata:t.getText("text4"),highlight:!0}}),t._v(" "),n("BaseText",{attrs:{textdata:t.getText("text5"),highlight:!0}}),t._v(" "),n("BaseText",{attrs:{textdata:t.getText("text6"),highlight:!0}}),t._v(" "),n("BaseText",{attrs:{textdata:t.getText("text7"),highlight:!0,highlightClass:t.$style.testClass}})],1),t._v(" "),n("div",{class:t.$style.imgContainer},[n("img",{attrs:{src:r(335),alt:""}}),t._v(" "),n("img",{attrs:{src:r(336),alt:""}})]),t._v(" "),n("div",{class:t.$style.imgContainer},[n("img",{attrs:{src:r(335),alt:""}}),t._v(" "),n("img",{attrs:{src:r(336),alt:""}})]),t._v(" "),n("LessonNextButton")],1)}),[],!1,(function(t){this.$style=v.default.locals||v.default}),null,null);e.default=component.exports;installComponents(component,{LessonBreadcrumbs:r(306).default,BaseText:r(318).default,LessonNextButton:r(312).default})}}]);