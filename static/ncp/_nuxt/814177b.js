(window.webpackJsonp=window.webpackJsonp||[]).push([[35,19,20,22],{305:function(t,e,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("5befc037",content,!0,{sourceMap:!1})},306:function(t,e,n){"use strict";n.r(e);n(25),n(52),n(11),n(29);var r=n(108),o=n(44),l={data:function(){return{modules:[],currentPage:this.$route.name.split("__")[0],currentLangModules:[],parent:{},current:""}},created:function(){var t=this.$i18n.locale;this.modules=Object(o.b)(r),this.currentLangModules=this.modules.map((function(e){return e[t]}));for(var i=0;i<this.currentLangModules.length;){var e=this.currentLangModules[i],n=e.routes.indexOf(this.currentPage);if(n>-1){var l=this.currentPage.split("-")[0]+"___"+this.$i18n.locale;this.parent={title:e.title,route:l},this.current=e.pageNames[n]}i++}}},c=n(310),d=n(3);var component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"breadcrumb has-succeeds-separator is-medium",class:t.$style.breadcrumbContainer,attrs:{"aria-label":"breadcrumbs"}},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:{name:"index___"+this.$i18n.locale}}},[t._v("Home")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:{name:t.parent.route}}},[t._v(t._s(t.parent.title))])],1),t._v(" "),t.current.startsWith("index")?t._e():n("li",{staticClass:"is-active"},[n("nuxt-link",{attrs:{to:{name:t.$route.name},"aria-current":"page"}},[t._v(t._s(t.current))])],1)])])}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports},310:function(t,e,n){"use strict";var r=n(305),o=n.n(r);n.d(e,"default",(function(){return o.a}))},311:function(t,e,n){var r=n(12)(!1);r.push([t.i,".breadcrumbContainer_1uSt2{width:100%}",""]),r.locals={breadcrumbContainer:"breadcrumbContainer_1uSt2"},t.exports=r},315:function(t,e,n){var content=n(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("7c759ef6",content,!0,{sourceMap:!1})},316:function(t,e,n){var content=n(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("fee95e1a",content,!0,{sourceMap:!1})},337:function(t){t.exports=JSON.parse('{"title":"pollination","pages":["page1","quiz","quiz2"],"en":{"title":"Pollination","pageNames":["Parts of a Flower","Test Time","Drag and Drop"]},"np":{"title":"परागकण","pageNames":["फूलका विभिन्‍न भागहरू","परिक्षण समय","Drag and Drop"]}}')},350:function(t,e,n){"use strict";var r=n(315),o=n.n(r);n.d(e,"default",(function(){return o.a}))},351:function(t,e,n){var r=n(12)(!1);r.push([t.i,".questionListDiv_2NRzi{padding:2rem 1rem;width:100%;min-height:80vh}.progressWrapper_q_4Ya,.questionListDiv_2NRzi{position:relative}.progressBar_2rWZU{border-radius:0;height:2rem}.progressText_geKjb{position:absolute;z-index:10;top:50%;left:1rem;transform:translateY(-50%);color:#fff}.completedMessage_eU-Ux{position:relative}",""]),r.locals={questionListDiv:"questionListDiv_2NRzi",progressWrapper:"progressWrapper_q_4Ya",progressBar:"progressBar_2rWZU",progressText:"progressText_geKjb",completedMessage:"completedMessage_eU-Ux"},t.exports=r},352:function(t,e,n){"use strict";var r=n(316),o=n.n(r);n.d(e,"default",(function(){return o.a}))},353:function(t,e,n){var r=n(12)(!1);r.push([t.i,".nextButton_3TGRS{position:fixed;left:2rem;width:40px;height:40px;top:50%;transform:translateY(-50%);background-color:#40e0d0;font-weight:700;font-size:2rem;border-radius:50%;z-index:100;transition:.2s linear;cursor:pointer}.nextButton_3TGRS:hover{filter:brightness(120%);transform:translateY(-50%) scale(1.1)}.nextButton_3TGRS svg{position:absolute;right:20%;top:50%;transform:translateY(-50%);width:60%}",""]),r.locals={nextButton:"nextButton_3TGRS"},t.exports=r},370:function(t,e,n){var content=n(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("5b1dd0be",content,!0,{sourceMap:!1})},373:function(t,e,n){"use strict";n.r(e);var r={name:"QuestionList",components:{MCQQuestionItem:n(402).default},props:{questionList:{required:!0,type:Array}},data:function(){return{questionNum:1,answers:[],completed:!1,totalQuestions:this.questionList.length}},computed:{getQuestion:function(){return this.questionList[this.questionNum-1]}},methods:{handleAnswer:function(t){this.answers.push(t)},handleNext:function(t){t&&(this.questionNum<this.totalQuestions?this.questionNum+=1:this.completed=!0)}}},o=n(350),l=n(3);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.questionListDiv},[t.completed?t._e():n("div",{class:t.$style.progressWrapper},[n("progress",{staticClass:"progress is-success",class:t.$style.progressBar,attrs:{max:t.totalQuestions},domProps:{value:t.questionNum-1}}),t._v(" "),n("span",{class:t.$style.progressText},[t._v(t._s(t.questionNum-1+"/"+t.totalQuestions))])]),t._v(" "),t.completed?n("div",{class:t.$style.completedMessage},[n("p",{staticClass:"title is-1"},[t._v("Quiz Complete")])]):n("div",{class:t.$style.questionContainer},[n("MCQQuestionItem",{attrs:{question:t.getQuestion,questionNum:t.questionNum},on:{answer:t.handleAnswer,goNext:t.handleNext}})],1)])}),[],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.default=component.exports},375:function(t,e,n){"use strict";n.r(e);var r={props:{navlink:{type:Object,required:!0}},methods:{goNext:function(){this.$router.push(this.navlink)}}},o=n(352),l=n(3);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.$style.nextButton,on:{click:function(e){return t.goNext()}}},[n("svg",{attrs:{viewBox:"0 0 448 448"}},[n("path",{attrs:{fill:"#FFF",d:"M1.5,217.2a16.1,16.1,0,0,0,7.8,21.3l416,192a15.6,15.6,0,0,0,16-1.6,16.1,16.1,0,0,0,3.5-22.5L308,224,444.8,41.6a16,16,0,0,0-19.5-24.1l-416,192A16.2,16.2,0,0,0,1.5,217.2Z"}})])])}),[],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.default=component.exports},400:function(t){t.exports=JSON.parse('{"questions":[{"id":"q001","type":"MCQ","instruction":{"text":"Drag the correct option","highlight":null},"question":{"text":"During respiration, a living thing takes in oxygen from the air and gives out _____.","shape":"fill_blank","type":"text"},"options":[{"name":"carbon dioxide","isCorrect":true},{"name":"carbon monoxide","isCorrect":false},{"name":"nitrogen dioxide","isCorrect":false},{"name":"sulfur dioxide","isCorrect":false}]},{"id":"q002","type":"MCQ","instruction":{"text":"Drag the correct option","highlight":null},"question":{"text":"Carbon dioxide contributes to air pollution in its role in the _____.","shape":"fill_blank","type":"text"},"options":[{"name":"Ozone Depletion","isCorrect":false},{"name":"Greenhouse effect","isCorrect":true},{"name":"Acid Rain","isCorrect":false},{"name":"Nuclear Radiation","isCorrect":false}]},{"id":"q003","type":"MCQ","instruction":{"text":"Drag the correct option","highlight":null},"question":{"text":"_____ air pollution is caused by burning solid fuel sources – such as firewood, crop waste, and dung – for cooking and heating.","shape":"fill_blank","type":"text"},"options":[{"name":"Indoor","isCorrect":true},{"name":"Outdoor","isCorrect":false},{"name":"Natural","isCorrect":false},{"name":"Oceanic","isCorrect":false}]},{"id":"q004","type":"MCQ","instruction":{"text":"Drag the correct option","highlight":null},"question":{"text":"Aboveground plant parts generally act as _____ of pollutants.","shape":"fill_blank","type":"text"},"options":[{"name":"emitters","isCorrect":false},{"name":"absorbers","isCorrect":true},{"name":"transformers","isCorrect":false},{"name":"dividers","isCorrect":false}]},{"id":"q005","type":"MCQ","instruction":{"text":"Drag the correct option","highlight":null},"question":{"text":"Indoor air pollution is mostly suffered by people living in _____ countries.","shape":"fill_blank","type":"text"},"options":[{"name":"Developed","isCorrect":false},{"name":"Developing","isCorrect":true},{"name":"Warm","isCorrect":false},{"name":"Cold","isCorrect":false}]},{"id":"q006","type":"MCQ","instruction":{"text":"Drag the correct option","highlight":null},"question":{"text":"According to the IQ index, 27 out of 30 most polluted cities lie in _____.","shape":"fill_blank","type":"text"},"options":[{"name":"India","isCorrect":false},{"name":"China","isCorrect":false},{"name":"South Asia","isCorrect":true},{"name":"South East Asia","isCorrect":false}]}]}')},401:function(t){t.exports=JSON.parse('{"questions":[{"id":"q001","type":"MCQ","instruction":{"text":"Drag the correct option","highlight":null},"question":{"text":"During respiration, a living thing takes in oxygen from the air and gives out _____.","shape":"fill_blank","type":"text"},"options":[{"name":"carbon dioxide","isCorrect":true},{"name":"carbon monoxide","isCorrect":false},{"name":"nitrogen dioxide","isCorrect":false},{"name":"sulfur dioxide","isCorrect":false}]},{"id":"q002","type":"MCQ","instruction":{"text":"Drag the correct option","highlight":null},"question":{"text":"Carbon dioxide contributes to air pollution in its role in the _____.","shape":"fill_blank","type":"text"},"options":[{"name":"Ozone Depletion","isCorrect":false},{"name":"Greenhouse effect","isCorrect":true},{"name":"Acid Rain","isCorrect":false},{"name":"Nuclear Radiation","isCorrect":false}]},{"id":"q003","type":"MCQ","instruction":{"text":"Drag the correct option","highlight":null},"question":{"text":"_____ air pollution is caused by burning solid fuel sources – such as firewood, crop waste, and dung – for cooking and heating.","shape":"fill_blank","type":"text"},"options":[{"name":"Indoor","isCorrect":true},{"name":"Outdoor","isCorrect":false},{"name":"Natural","isCorrect":false},{"name":"Oceanic","isCorrect":false}]},{"id":"q004","type":"MCQ","instruction":{"text":"Drag the correct option","highlight":null},"question":{"text":"Aboveground plant parts generally act as _____ of pollutants.","shape":"fill_blank","type":"text"},"options":[{"name":"emitters","isCorrect":false},{"name":"absorbers","isCorrect":true},{"name":"transformers","isCorrect":false},{"name":"dividers","isCorrect":false}]},{"id":"q005","type":"MCQ","instruction":{"text":"Drag the correct option","highlight":null},"question":{"text":"Indoor air pollution is mostly suffered by people living in _____ countries.","shape":"fill_blank","type":"text"},"options":[{"name":"Developed","isCorrect":false},{"name":"Developing","isCorrect":true},{"name":"Warm","isCorrect":false},{"name":"Cold","isCorrect":false}]},{"id":"q006","type":"MCQ","instruction":{"text":"Drag the correct option","highlight":null},"question":{"text":"According to the IQ index, 27 out of 30 most polluted cities lie in _____.","shape":"fill_blank","type":"text"},"options":[{"name":"India","isCorrect":false},{"name":"China","isCorrect":false},{"name":"South Asia","isCorrect":true},{"name":"South East Asia","isCorrect":false}]}]}')},445:function(t,e,n){"use strict";var r=n(370),o=n.n(r);n.d(e,"default",(function(){return o.a}))},446:function(t,e,n){var r=n(12)(!1);r.push([t.i,".quizSection_22nfd{padding:2rem;background-color:#f8f9fa}.quizTitle_2dh9R{font-size:2.5rem;color:#1e4d63;text-align:center}.quizWrapper_3uedr{display:flex;justify-content:center}.bgWhite_1DQFV{background-color:#fff}",""]),r.locals={quizSection:"quizSection_22nfd",quizTitle:"quizTitle_2dh9R",quizWrapper:"quizWrapper_3uedr",bgWhite:"bgWhite_1DQFV"},t.exports=r},466:function(t,e,n){"use strict";n.r(e);var r=n(400),o=n(401),l=n(337),c=n(373),d=n(375),f=n(306),h={en:r,np:o},_={components:{QuestionList:c.default,LessonBreadcrumbs:f.default,LessonPrevButton:d.default},head:function(){return{title:"Quiz"}},data:function(){return{bcData:[l[this.$i18n.locale].title,l[this.$i18n.locale].pageNames[1]]}},computed:{quizData:function(){return this.$i18n.messages[this.$i18n.locale].questions},prevLink:function(){return{name:"pollination-page1___"+this.$i18n.locale}}},i18n:{messages:h}},m=n(445),x=n(3);var component=Object(x.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container is-max-desktop",class:t.$style.quizSection},[n("LessonBreadcrumbs",{attrs:{pages:t.bcData}}),t._v(" "),n("div",{class:t.$style.quizWrapper},[n("section",{staticClass:"column is-11-mobile is-6-desktop",class:t.$style.bgWhite},[n("h1",{class:t.$style.quizTitle},[t._v(t._s(t.$t("quizTime")))]),t._v(" "),n("QuestionList",{attrs:{questionList:t.quizData}})],1)])],1)}),[],!1,(function(t){this.$style=m.default.locals||m.default}),null,null);e.default=component.exports;installComponents(component,{LessonBreadcrumbs:n(306).default})}}]);