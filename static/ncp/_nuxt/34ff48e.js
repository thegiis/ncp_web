(window.webpackJsonp=window.webpackJsonp||[]).push([[24,19],{302:function(t,e,n){var content=n(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("3da43b1a",content,!0,{sourceMap:!1})},324:function(t){t.exports=JSON.parse('{"title":"pollination","pages":["page1","quiz","quiz2"],"en":{"title":"Pollination","pageNames":["Parts of a Flower","Test Time","Drag and Drop"]},"np":{"title":"परागकण","pageNames":["फूलका विभिन्‍न भागहरू","परिक्षण समय","Drag and Drop"]}}')},328:function(t,e,n){"use strict";n.r(e);n(25),n(52),n(11),n(33);var o=n(107),l=n(44),c={data:function(){return{currentPage:this.$route.name.split("__")[0],nextLink:this.$route.name,nextTopic:"",showNextSection:!1}},created:function(){for(var t=this.$i18n.locale,e=Object(l.b)(o).map((function(e){return e[t]})),i=0;i<e.length;){var n=e[i],c=n.routes.indexOf(this.currentPage),r=n.routes.length;c>-1&&c<r&&(this.nextLink=n.routes[c+1]+"___"+this.$i18n.locale,this.nextTopic=n.pageNames[c+1],this.showNextSection=!0),i++}},computed:{getTopic:function(){return this.nextTopic},getNextLink:function(){return this.nextLink}}},r=n(334),d=n(5);var component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showNextSection?n("section",{class:t.$style.nextSection},[n("div",{class:t.$style.topicIndicator},[t._v("Next Section")]),t._v(" "),n("div",{class:t.$style.topicTitleDiv},[n("nuxt-link",{class:t.$style.topicTitle,attrs:{to:{name:t.getNextLink}}},[n("p",[t._v(t._s(t.getTopic))]),t._v(" "),n("p",[n("i",{staticClass:"fas fa-angle-right"})])])],1)]):t._e()}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},334:function(t,e,n){"use strict";var o=n(302),l=n.n(o);n.d(e,"default",(function(){return l.a}))},335:function(t,e,n){var o=n(12)(!1);o.push([t.i,".nextSection_3FC79{position:relative;background:#ffffe0;padding:1rem;width:100%}.topicIndicator_3RhyD{font-size:1.2rem}.topicIndicator_3RhyD,.topicTitleDiv_AFKZd{border-bottom:1px solid #a9a9a9;padding:.5rem}.topicTitleDiv_AFKZd{font-size:1.5rem}.topicTitle_1aFkC{width:100%;display:flex;flex-direction:row;justify-content:space-between}",""]),o.locals={nextSection:"nextSection_3FC79",topicIndicator:"topicIndicator_3RhyD",topicTitleDiv:"topicTitleDiv_AFKZd",topicTitle:"topicTitle_1aFkC"},t.exports=o},345:function(t,e,n){var content=n(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("d9186494",content,!0,{sourceMap:!1})},403:function(t,e,n){"use strict";var o=n(345),l=n.n(o);n.d(e,"default",(function(){return l.a}))},404:function(t,e,n){var o=n(12)(!1);o.push([t.i,".indexPage_36Co9{position:relative;padding:2rem;background-color:#efefef;width:100%;min-height:calc(100vh - 4rem)}.title_8lugE{font-size:2.25rem;text-align:left;color:#000;text-decoration:underline}.title_8lugE,.videoContianer_1jSSo{margin:1rem}",""]),o.locals={indexPage:"indexPage_36Co9",title:"title_8lugE",videoContianer:"videoContianer_1jSSo"},t.exports=o},429:function(t,e,n){"use strict";n.r(e);var o=n(324),l=n(328),c={en:o.en,np:o.np},r={components:{LessonNextButton:l.default},i18n:{messages:c},data:function(){return{title:o.title,pages:o.pages,videoID:"rwCJvSKzQkc"}},created:function(){console.log(this.$store.state.lesson.vocabLocale)},methods:{getLink:function(t){return{name:this.title+"-"+t+"___"+this.$i18n.locale}}}},d=n(403),f=n(5);var component=Object(f.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container is-max-desktop",class:t.$style.indexPage},[n("h1",{class:t.$style.title},[t._v(t._s(t.$t("title")))]),t._v(" "),n("div",{class:t.$style.videoContianer},[n("client-only",[n("vue-youtube-player",{attrs:{"video-id":t.videoID}})],1)],1),t._v(" "),n("LessonNextButton")],1)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports;installComponents(component,{LessonNextButton:n(328).default})}}]);