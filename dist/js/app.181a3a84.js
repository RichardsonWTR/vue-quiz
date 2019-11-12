(function(e){function t(t){for(var r,i,a=t[0],c=t[1],u=t[2],d=0,f=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-quiz/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},1139:function(e,t,n){},4820:function(e,t,n){"use strict";var r=n("1139"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("5f5b"),s=(n("f9e3"),n("2dd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{totalAnswered:0,correctAnswered:0}}),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/categories"}},[e._v("Categories")])],1),n("b-container",{attrs:{id:"app-container"}},[n("router-view")],1)],1)}),i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("b-nav",[n("b-nav-item",{attrs:{disabled:""}},[n("b",[e._v("Fancy Quiz App")])])],1)],1)])},c=[],u={props:["correctAnswered","totalAnswered"]},l=u,d=n("2877"),f=Object(d["a"])(l,a,c,!1,null,null,null),m=f.exports,h={components:{Header:m}},p=h,v=(n("034f"),Object(d["a"])(p,s,i,!1,null,null,null)),b=v.exports,g=n("8c4f"),w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Welcome to my "),n("i",[e._v("Fancy Quiz App")])]),n("h3",[e._v(" Test your knowledge among many different categories! ")]),n("p",[e._v(" Share with your friends! ")])])}],x={},y=x,A=Object(d["a"])(y,w,_,!1,null,null,null),j=A.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Question categories ")]),n("CategoryList")],1)},E=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-list-group",e._l(e.categories,(function(t){return n("b-list-group-item",{key:t.value,attrs:{to:"/categories/"+t.value}},[e._v(e._s(t.name))])})),1)],1)},C=[],Q=(n("4160"),n("b0c0"),n("159b"),[{value:"any",name:"Any Category"},{value:"9",name:"General Knowledge"},{value:"10",name:"Entertainment: Books "},{value:"11",name:"Entertainment: Film "},{value:"12",name:"Entertainment: Music "},{value:"13",name:"Entertainment: Musicals &amp; Theatres "},{value:"14",name:"Entertainment: Television "},{value:"15",name:"Entertainment: Video Games "},{value:"16",name:"Entertainment: Board Games "},{value:"17",name:"Science &amp; Nature "},{value:"18",name:"Science: Computers "},{value:"19",name:"Science: Mathematics "},{value:"20",name:"Mythology "},{value:"21",name:"Sports "},{value:"22",name:"Geography "},{value:"23",name:"History "},{value:"24",name:"Politics "},{value:"25",name:"Art "},{value:"26",name:"Celebrities "},{value:"27",name:"Animals "},{value:"28",name:"Vehicles "},{value:"29",name:"Entertainment: Comics "},{value:"30",name:"Science: Gadgets "},{value:"31",name:"Entertainment: Japanese Anime &amp; Manga "},{value:"32",name:"Entertainment: Cartoon &amp; Animations"}]),S={data:function(){return{}},computed:{categories:function(){var e=this,t=Q;return t.forEach((function(t){return t.name=e.htmlDecode(t.name)})),t}},methods:{htmlDecode:function(e){var t=document.createElement("textarea");return t.innerHTML=e,0===t.childNodes.length?"":t.childNodes[0].nodeValue}}},q=S,I=Object(d["a"])(q,k,C,!1,null,null,null),M=I.exports,$={name:"categories",components:{CategoryList:M}},N=$,P=Object(d["a"])(N,O,E,!1,null,null,null),T=P.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col",{attrs:{md:"6","offset-md":"3"}})],1),n("b-row",[n("b-col",{attrs:{md:"6","offset-md":"3"}},[e.questions.length?n("QuestionBox",{attrs:{currentQuestion:e.questions[e.index],next:e.next,increment:e.increment}}):e._e()],1)],1)],1)],1)},B=[],H=(n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question-box-container"},[n("b-jumbotron",{scopedSlots:e._u([{key:"lead",fn:function(){return[e._v(e._s(e.question))]},proxy:!0}])},[n("hr",{staticClass:"my-4"}),n("b-list-group",e._l(e.answers,(function(t,r){return n("b-list-group-item",{key:r,class:e.answerClass(r),attrs:{href:""},on:{click:function(t){return e.selectAnswer(r)}}},[e._v(e._s(t))])})),1),n("b-button",{attrs:{variant:"primary",disabled:null===e.selectedIndex||e.submitted},on:{click:e.submitAnswer}},[e._v("Submit")]),n("b-button",{attrs:{variant:"success",href:"#"},on:{click:e.next}},[e._v("Next")])],1)],1)}),z=[],D=(n("99af"),n("c975"),n("d81d"),n("284c")),G=n("2ef0"),L=n.n(G),V={props:{currentQuestion:Object,next:Function,increment:Function},data:function(){return{selectedIndex:null,shuffledAnswers:[],correctIndex:null,submitted:!1}},computed:{answers:function(){var e=this,t=Object(D["a"])(this.currentQuestion.incorrect_answers);return t.push(this.currentQuestion.correct_answer),t=t.map((function(t){return e.htmlDecode(t)})),t},question:function(){var e=this.currentQuestion.question;return this.htmlDecode(e)}},watch:{currentQuestion:{immediate:!0,handler:function(){this.selectedIndex=null,this.correctIndex=null,this.submitted=!1,this.shuffleAnswers()}}},methods:{selectAnswer:function(e){this.submitted||(this.selectedIndex=e)},shuffleAnswers:function(){var e=[].concat(Object(D["a"])(this.currentQuestion.incorrect_answers),[this.currentQuestion.correct_answer]);this.shuffledAnswers=L.a.shuffle(e),this.correctIndex=this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)},submitAnswer:function(){var e=this.selectedIndex===this.correctIndex;this.submitted=!0,this.increment(e)},answerClass:function(e){return{selected:this.selectedIndex===e&&!1===this.submitted,correct:this.submitted&&this.correctIndex===e,incorrect:this.selectedIndex===e&&this.submitted&&this.correctIndex!==e}},htmlDecode:function(e){var t=document.createElement("textarea");return t.innerHTML=e,0===t.childNodes.length?"":t.childNodes[0].nodeValue}}},J=V,K=(n("4820"),Object(d["a"])(J,H,z,!1,null,"5e4af3b8",null)),W=K.exports,R={props:{},components:{QuestionBox:W},data:function(){return{questions:[],index:0,correctAnswered:0,totalAnswered:0}},methods:{next:function(){this.index++},increment:function(e){e&&this.correctAnswered++,this.totalAnswered++}},mounted:function(){var e=this,t=this.$route.params.id;fetch("https://opentdb.com/api.php?amount=10&category=".concat(t)).then((function(e){return e.json()})).then((function(t){0==t.response_code&&(e.questions=t.results)}))}},U=R,X=Object(d["a"])(U,F,B,!1,null,null,null),Y=X.exports;r["default"].use(g["a"]);var Z=[{path:"/",name:"home",component:j},{path:"/categories",name:"categories",component:T},{path:"/categories/:id",name:"questionBox",component:Y}],ee=new g["a"]({mode:"history",base:"/vue-quiz/",routes:Z}),te=ee,ne=n("9483");Object(ne["a"])("".concat("/vue-quiz/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["default"].config.productionTip=!1,r["default"].use(o["a"]),new r["default"]({router:te,render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.181a3a84.js.map