webpackJsonp([1],{119:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={currentId:0}},176:function(t,e){t.exports={template:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.701 18.771h1.437s.433-.047.654-.284c.21-.221.21-.63.21-.63s-.031-1.927.869-2.21c.887-.281 2.012 1.86 3.211 2.683.916.629 1.605.494 1.605.494l3.211-.044s1.682-.105.887-1.426c-.061-.105-.451-.975-2.371-2.76-2.012-1.861-1.742-1.561.676-4.787 1.469-1.965 2.07-3.166 1.875-3.676-.166-.48-1.26-.361-1.26-.361l-3.602.031s-.27-.031-.465.09c-.195.119-.314.391-.314.391s-.572 1.529-1.336 2.82c-1.623 2.729-2.268 2.879-2.523 2.699-.604-.391-.449-1.58-.449-2.432 0-2.641.404-3.75-.781-4.035-.39-.091-.681-.15-1.685-.166-1.29-.014-2.378.01-2.995.311-.405.203-.72.652-.539.675.24.03.779.146 1.064.537.375.506.359 1.636.359 1.636s.211 3.116-.494 3.503c-.495.262-1.155-.28-2.595-2.756-.735-1.26-1.291-2.67-1.291-2.67s-.105-.256-.299-.406c-.227-.165-.557-.225-.557-.225l-3.435.03s-.51.016-.689.24c-.166.195-.016.615-.016.615s2.686 6.287 5.732 9.453c2.79 2.902 5.956 2.715 5.956 2.715l-.05-.055z"/></svg>'}},177:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(82),o=n(468),i=n.n(o),a=n(186),s=n(189),u=n(466),c=n.n(u),l=n(467),p=n(192),v=n(191),d=n(430);n.n(d);r.a.use(l.a,{locale:"ru",dictionary:{en:p.a.en,ru:p.a.ru}});var h=new c.a({locale:["ru","en-US"]});r.a.directive("typograph",{bind:function(t,e,n){t.innerHTML=h.execute(t.innerHTML)}}),r.a.use(v.a),r.a.config.productionTip=!1,new r.a({el:"#app",store:s.a,router:a.a,template:"<App/>",created:function(){window.vue=this},components:{App:i.a}})},179:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(470),o=n.n(r),i=n(469),a=n.n(i),s=n(483),u=n.n(s),c=n(185),l=n(176);n.n(l);e.default={name:"app",components:{vk:c.a.vk,fb:c.a.fb,ok:c.a.ok,googleplus:c.a.googleplus,tw:c.a.tw,Logo:u.a,"menu-app":a.a,Resize:o.a}}},180:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Menu"}},181:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={name:"Resize",mounted:function(){window.addEventListener("resize",this.onResize.bind(this))},data:function(){return{vW:window.innerWidth,vH:window.innerHeight}},computed:{fSize:function(){return 16*Math.min(Math.max(768,this.vW)/1600,Math.max(600,this.vH)/800)}},methods:{onResize:function(){this.vW=window.innerWidth,this.vH=window.innerHeight}}}},182:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(174);e.default={name:"Index"}},183:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(174);e.default={name:"Page2"}},184:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={vk:"https://vk.com/share.php?url=",fb:"https://www.facebook.com/sharer/sharer.php?u=",tw:"https://twitter.com/intent/tweet?text=&hashtags=&url=",ok:"https://connect.ok.ru/dk?cmd=WidgetSharePreview&st.cmd=WidgetSharePreview&st._aid=ExternalShareWidget_SharePreview&st.shareUrl=",tg:"https://telegram.me/share/url?url="};e.default={name:"shareLink",props:{network:{type:[String],required:!0},url:{type:[String],required:!0},title:{type:[String],required:!1,default:""},description:{type:[String],required:!1,default:""},image:{type:[String],required:!1,default:""}},components:{},methods:{sharePopup:function(t,e,n){e||(e=400),n||(n=400);var r=window.open(t,"_blank","height="+n+",width="+e+",menubar=no,toolbar=no,location=no"),o=setInterval(function(){if(r.closed)return clearInterval(o),void this.$emit("onShareClose")},200)},onShareStart:function(){this.sharePopup(r[this.network]+encodeURIComponent(this.url),550,300)}}}},185:function(t,e,n){"use strict";var r=n(455),o=n.n(r),i=n(490),a={};i.keys().forEach(function(t){if("./index.js"!==t){var e=o()(t.replace(/(\.\/|\.svg)/g,""));a[e]=i(t)}}),e.a=a},186:function(t,e,n){"use strict";var r=n(82),o=n(481),i=n(471),a=n.n(i),s=n(472),u=n.n(s);r.a.use(o.a);var c=new o.a({mode:"history",linkActiveClass:"active",routes:[{path:"/",name:"Index",component:a.a},{path:"/page2",name:"Page2",component:u.a}]});e.a=c},187:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"GET_SOCIAL_URL",function(){return a}),n.d(e,"LOGOUT",function(){return s}),n.d(e,"SOCIAL_LOGIN",function(){return u}),n.d(e,"GET_USER",function(){return c});var r=n(194),o=n.n(r),i=n(82),a=function(t){t.commit,t.state;return new o.a(function(t,e){i.a.http.get("/api/auth/social-url").then(function(e){t()},function(){e()})})},s=function(t){t.commit,t.state;return new o.a(function(t,e){i.a.http.get("/api/auth/logout").then(function(){t()},function(){e()})})},u=function(t,e){var n=(t.commit,t.state),r=n.url[e],i=void 0!==window.screenX?window.screenX:window.screenLeft,a=void 0!==window.screenY?window.screenY:window.screenTop,s=void 0!==window.outerWidth?window.outerWidth:document.body.clientWidth,u=void 0!==window.outerHeight?window.outerHeight:document.body.clientHeight-22,l=parseInt(i+(s-800)/2,10),p=parseInt(a+(u-600)/2.5,10),v="width=800,height=600,left="+l+",top="+p;return new o.a(function(t,e){var n=window.open(r,"_blank",v),o=setInterval(function(){try{n.closed&&(clearInterval(o),c().then(function(e){t()},function(){e()}))}catch(t){e()}},200)})},c=function(t){t.commit,t.state;return new o.a(function(t,e){i.a.http.get("/api/user").then(function(e){t()},function(){e()})})}},188:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"GET_CURRENT_ID",function(){return r});var r=function(t){return t.currentId}},189:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n(82),o=n(488),i=n(119),a=n(188),s=n(190),u=n(187),c=n(480);r.a.use(o.a),r.a.use(c.a),r.a.http.options.credentials=!0;var l=new o.a.Store({state:i.a,actions:u,getters:a,mutations:s})},190:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"UPDATE_ID",function(){return r});var r=(n(119),function(t,e){t.currentId=parseInt(e)})},191:function(t,e,n){"use strict";var r=n(473),o=n.n(r),i={install:function(t,e){t.component(o.a.name,o.a)}};e.a=i},192:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={ru:{custom:{}},en:{custom:{}}}},430:function(t,e){},431:function(t,e){},432:function(t,e){},468:function(t,e,n){function r(t){n(432)}var o=n(53)(n(179),n(479),r,null,null);t.exports=o.exports},469:function(t,e,n){function r(t){n(431)}var o=n(53)(n(180),n(477),r,"data-v-78beb9fd",null);t.exports=o.exports},470:function(t,e,n){var r=n(53)(n(181),n(474),null,null,null);t.exports=r.exports},471:function(t,e,n){var r=n(53)(n(182),n(475),null,null,null);t.exports=r.exports},472:function(t,e,n){var r=n(53)(n(183),n(478),null,null,null);t.exports=r.exports},473:function(t,e,n){var r=n(53)(n(184),n(476),null,null,null);t.exports=r.exports},474:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:{fontSize:t.fSize+"px"}},[t._t("default")],2)},staticRenderFns:[]}},475:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-index"},[n("h1",[t._v("\n        Typograph expamle\n    ")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"text"},[n("h2",[t._v("\n            Что такое Lorem Ipsum?\n        ")]),t._v(" "),n("p",{directives:[{name:"typograph",rawName:"v-typograph"}]},[t._v('\n            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.\n            В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.\n            Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в\n            новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной\n            вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.\n        ')]),t._v(" "),n("br"),t._v(" "),n("h2",[t._v("\n            Почему он используется?\n        ")]),t._v(" "),n("p",{directives:[{name:"typograph",rawName:"v-typograph"}]},[t._v('\n            Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.\n            Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона,\n            а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации\n            "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы\n            HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum"\n            сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст\n            Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты). | typograph\n        ')])])])},staticRenderFns:[]}},476:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onShareStart(e)}}},[t._t("default")],2)},staticRenderFns:[]}},477:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("menu",[n("router-link",{attrs:{to:"/"}},[t._v("На главную")]),t._v(" /\n    "),n("router-link",{attrs:{to:"/page2"}},[t._v("На внутреннюю")])],1)},staticRenderFns:[]}},478:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"page-index"},[t._v("\n    Test page Page2\n")])},staticRenderFns:[]}},479:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Resize",{staticClass:"app-layout",attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"preview-text"},[n("Logo",{staticClass:"logo"}),t._v(" "),n("h3")],1),t._v(" "),n("menu-app"),t._v(" "),n("div",{staticClass:"center"},[n("router-view")],1),t._v(" "),n("ul",{staticClass:"social-list"},[n("li",[n("share-link",{staticClass:"icon",attrs:{network:"fb",url:"http://develup.pro/"}},[n("fb")],1)],1),t._v(" "),n("li",[n("share-link",{staticClass:"icon",attrs:{network:"vk",url:"http://develup.pro/"}},[n("vk")],1)],1),t._v(" "),n("li",[n("share-link",{staticClass:"icon",attrs:{network:"ok",url:"http://develup.pro/"}},[n("ok")],1)],1),t._v(" "),n("li",[n("share-link",{staticClass:"icon",attrs:{network:"tw",url:"http://develup.pro/",title:""}},[n("tw")],1)],1)])],1)])},staticRenderFns:[]}},483:function(t,e){t.exports={template:'<svg viewBox="0 0 194 22"><path d="M18.4 12c-.7 2-3 3.5-6.9 3.5H8.4V5.3L.4 0v21h12.5c5.8 0 9.7-1.8 11.9-4.7L18.4 12z"/><path fill-rule="evenodd" fill="#FFE700" d="M24.8 16.3c1.2-1.7 1.8-3.6 1.8-5.8C26.6 5 22.5 0 14 0H.4l8.1 5.4h3.1c5.5 0 7 2.3 7 5.2 0 .5-.1 1-.3 1.5l6.5 4.2z"/><path d="M29.9 21V0h22.4v5.2H38V8h12.2v5.1H38v2.6h14.7V21H29.9zM74.5 21.1h-6.1L56.1.7l.3-.7h8.1l7.2 12.3L78.5 0h7.6l.3.7-11.9 20.4zM88.3 21V0h22.4v5.2H96.4V8h12.2v5.1H96.4v2.6h14.7V21H88.3zM115.3 21V0h8.1v15h15v6h-23.1zM167.7 10.3c0 6.9-4.5 11.2-13.2 11.2-8.9 0-13.5-4.2-13.5-10.9V0h8v9.8c0 4.1 2.2 5.5 5.4 5.5 2.9 0 5.2-1.8 5.2-5.6V0h8v10.3zM183.8 15.5h-5.2V21h-8.1V0h13.4C190 0 194 2.8 194 7.7s-4.6 7.8-10.2 7.8zm-.3-9.8h-4.9V10h4.5c2.1 0 3.2-1 3.2-2.3 0-1.3-.9-2-2.8-2z"/></svg>'}},484:function(t,e){t.exports={template:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/></svg>'}},485:function(t,e){t.exports={template:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.635 10.909v2.619h4.335c-.173 1.125-1.31 3.295-4.331 3.295-2.604 0-4.731-2.16-4.731-4.823 0-2.662 2.122-4.822 4.728-4.822 1.485 0 2.479.633 3.045 1.178l2.073-1.994c-1.33-1.245-3.056-1.995-5.115-1.995C3.412 4.365 0 7.785 0 12s3.414 7.635 7.635 7.635c4.41 0 7.332-3.098 7.332-7.461a6.96 6.96 0 0 0-.12-1.265H7.635zm16.365 0h-2.183V8.726h-2.183v2.183h-2.182v2.181h2.184v2.184h2.189V13.09H24"/></svg>'}},486:function(t,e){t.exports={template:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.505 17.44a11.599 11.599 0 0 0 3.6-1.49 1.816 1.816 0 0 0-1.935-3.073 7.866 7.866 0 0 1-8.34 0 1.814 1.814 0 0 0-2.5.565c0 .002 0 .004-.002.005a1.812 1.812 0 0 0 .567 2.5l.002.002c1.105.695 2.322 1.2 3.596 1.488l-3.465 3.465A1.796 1.796 0 0 0 6 23.439l.03.03c.344.354.81.53 1.274.53.465 0 .93-.176 1.275-.53L12 20.065l3.404 3.406a1.815 1.815 0 0 0 2.566-2.565l-3.465-3.466zM12 12.388a6.202 6.202 0 0 0 6.195-6.193C18.195 2.78 15.415 0 12 0S5.805 2.78 5.805 6.197A6.2 6.2 0 0 0 12 12.389zm0-8.757a2.566 2.566 0 0 1 0 5.13 2.569 2.569 0 0 1-2.565-2.564A2.57 2.57 0 0 1 12 3.63z"/></svg>'}},487:function(t,e){t.exports={template:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/></svg>'}},490:function(t,e,n){function r(t){return n(o(t))}function o(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./fb.svg":484,"./googleplus.svg":485,"./ok.svg":486,"./tw.svg":487,"./vk.svg":176};r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id=490},491:function(t,e){},492:function(t,e,n){n(178),t.exports=n(177)}},[492]);
//# sourceMappingURL=app.js.map