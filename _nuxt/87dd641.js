(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{241:function(n,t,o){n.exports=o.p+"img/nav.c5bfdfa.png"},242:function(n,t,o){n.exports=o.p+"img/footer.3bb0cc7.png"},265:function(n,t,o){"use strict";o.r(t);o(67);var r=o.p+"assets/01.ogg",c=o.p+"assets/02.ogg",e=o.p+"assets/03.ogg",v=o.p+"assets/04.ogg",d=o.p+"assets/05.ogg",l=o.p+"assets/06.ogg",_={data:function(){return{audio:new Audio(r),audioCity:new Audio(c),audioControl:new Audio(e),audioStatistics:new Audio(v),audioPesok:new Audio(d),audioTrip:new Audio(l),transition:{expand:!1,expand2:!1,expand3:!1,expand4:!1,expand5:!1},testsSongs:{textCity:!1,textControl:!1}}},mounted:function(){var n=this;this.$nextTick((function(){n.$nuxt.$loading.start(),setTimeout((function(){return n.$nuxt.$loading.finish()}),500)}))},methods:{playSound:function(){var audio="audio/ogg".audio,n=this.audio.play();n.data=audio,void 0!==n&&n.then((function(n){})).catch((function(n){alert("ошибка: ".concat(n))}))},playStop:function(){this.audio.pause()},playSoundCity:function(){var n="audio/ogg".audioCity,t=this.audioCity.play();t.data=n,void 0!==t&&t.then((function(n){})).catch((function(n){alert("ошибка вот она: ".concat(n))}))},playStopCity:function(){this.audioCity.pause()},playSoundControl:function(){var n="audio/ogg".audioControl,t=this.audioControl.play();t.data=n,void 0!==t&&t.then((function(n){})).catch((function(n){alert("ошибка вот она: ".concat(n))}))},playStopControl:function(){this.audioControl.pause()},playSoundStatistics:function(){var n="audio/ogg".audioStatistics,t=this.audioStatistics.play();t.data=n,void 0!==t&&t.then((function(n){})).catch((function(n){alert("ошибка вот она: ".concat(n))}))},playStopStatistics:function(){this.audioStatistics.pause()},playSoundPesok:function(){var n="audio/ogg".audioPesok,t=this.audioPesok.play();t.data=n,void 0!==t&&t.then((function(n){})).catch((function(n){alert("ошибка вот она: ".concat(n))}))},playStopPesok:function(){this.audioPesok.pause()},playSoundTrip:function(){var n="audio/ogg".audioTrip,t=this.audioTrip.play();t.data=n,void 0!==t&&t.then((function(n){})).catch((function(n){alert("ошибка вот она: ".concat(n))}))},playStopTrip:function(){this.audioTrip.pause()}}},f=o(61),x=o(128),y=o.n(x),C=o(236),h=o(308),S=o(266),m=o(238),w=o(303),k=o(243),P=o(304),j=o(310),component=Object(f.a)(_,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("v-app",{attrs:{app:""}},[r("v-card",{attrs:{app:""}},[r("v-parallax",{attrs:{src:o(241),height:"200"}})],1),n._v(" "),r("v-card",{staticClass:"mt-1",attrs:{color:"#1A237E"}},[r("v-card-title",{staticClass:"d-flex justify-center"},[n._v("\n      Intro\n    ")]),n._v(" "),r("v-card-actions",{staticClass:"d-flex justify-center"},[r("v-btn",{attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),n.playSound(t)}}},[r("v-icon",[n._v(" mdi-play-circle-outline ")])],1),n._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),n.playStop(t)}}},[r("v-icon",[n._v(" mdi-stop-circle-outline ")])],1)],1)],1),n._v(" "),r("v-divider"),n._v(" "),r("v-card",{attrs:{outlined:"",color:"#42A5F5"}},[r("v-card-title",{staticClass:"d-flex justify-center"},[n._v("\n      Покинутый город\n    ")]),n._v(" "),r("v-card-actions",{staticClass:"d-flex justify-center position-x"},[r("v-btn",{attrs:{icon:""},on:{click:[function(t){return t.stopPropagation(),n.playSoundCity(t)},function(t){n.transition.expand2=!n.transition.expand2}]}},[r("v-icon",[n._v(" mdi-play-circle-outline ")])],1),n._v(" "),r("v-fab-transition",[r("v-card-text",{directives:[{name:"show",rawName:"v-show",value:n.transition.expand2,expression:"transition.expand2"}],staticClass:"text-center"},[n._v("\n          Подожди, лишь обними меня "),r("br"),n._v("\n          Подними свои глаза "),r("br"),n._v("\n          Я слишком стар чтобы понять тебя "),r("br"),n._v("\n          Так много сил тебе отдал "),r("br"),n._v("\n\n          Буди нас всех"),r("br"),n._v("\n          Кто в эту ночь уснул "),r("br"),n._v("\n          И прогоняй"),r("br"),n._v("\n          Из домов прочь"),r("br"),n._v("\n\n          Город мой"),r("br"),n._v("\n          Город мой"),r("br"),n._v("\n\n          Мы разведем в последний раз мосты"),r("br"),n._v("\n          Оставим свет"),r("br"),n._v("\n          Оставим след"),r("br"),n._v("\n          Надежду"),r("br"),n._v("\n          В город мой"),r("br"),n._v("\n\n          Все застыло"),r("br"),n._v("\n          Что случилось"),r("br"),n._v("\n          Ответь наш друг?"),r("br"),n._v("\n          Покинутый однажды город мой"),r("br")])],1),n._v(" "),r("v-btn",{attrs:{icon:""},on:{click:[function(t){return t.stopPropagation(),n.playStopCity(t)},function(t){n.transition.expand2=!n.transition.expand2}]}},[r("v-icon",[n._v(" mdi-stop-circle-outline ")])],1)],1)],1),n._v(" "),r("v-card",{attrs:{outlined:"",color:"#B71C1C"}},[r("v-card-title",{staticClass:"d-flex justify-center"},[n._v("\n      Контроль\n    ")]),n._v(" "),r("v-card-actions",{staticClass:"d-flex justify-center"},[r("v-btn",{attrs:{icon:""},on:{click:[function(t){return t.stopPropagation(),n.playSoundControl(t)},function(t){n.transition.expand=!n.transition.expand}]}},[r("v-icon",[n._v(" mdi-play-circle-outline ")])],1),n._v(" "),r("v-fab-transition",[r("v-card-text",{directives:[{name:"show",rawName:"v-show",value:n.transition.expand,expression:"transition.expand"}],staticClass:"text-center"},[n._v("\n          Сам не свой  я был, а дождь все лил"),r("br"),n._v("\n          Приложил я ствол к виску"),r("br"),n._v("\n          И застыл"),r("br"),n._v("\n\n          Я хотел нажать курок"),r("br"),n._v("\n          Но ты...ты"),r("br"),n._v("\n          ооо...я потерял контроль"),r("br"),n._v("\n          Я потерял контроль"),r("br"),n._v("\n          С тобой"),r("br"),n._v("\n          Сам не свой  я был, а дождь все лил"),r("br"),n._v("\n          Мокрый палец у курка приложил"),r("br"),n._v("\n\n          Я хотел нажать его"),r("br"),n._v("\n          Но ты...ты"),r("br"),n._v("\n          ооо...я потерял контроль"),r("br"),n._v("\n          Я потерял контроль"),r("br"),n._v("\n          С тобой"),r("br")])],1),n._v(" "),r("v-btn",{attrs:{icon:""},on:{click:[function(t){return t.stopPropagation(),n.playStopControl(t)},function(t){n.transition.expand=!n.transition.expand}]}},[r("v-icon",[n._v(" mdi-stop-circle-outline ")])],1)],1)],1),n._v(" "),r("v-card",{attrs:{outlined:"",color:"#C0CA33"}},[r("v-card-title",{staticClass:"d-flex justify-center"},[n._v("\n      Статистика\n    ")]),n._v(" "),r("v-card-actions",{staticClass:"d-flex justify-center"},[r("v-btn",{attrs:{icon:""},on:{click:[function(t){return t.stopPropagation(),n.playSoundStatistics(t)},function(t){n.transition.expand3=!n.transition.expand3}]}},[r("v-icon",[n._v(" mdi-play-circle-outline ")])],1),n._v(" "),r("v-fab-transition",[r("v-card-text",{directives:[{name:"show",rawName:"v-show",value:n.transition.expand3,expression:"transition.expand3"}],staticClass:"text-center"},[n._v("\n          По статистике бабочка живет всего один день"),r("br"),n._v("\n          В полях умирая"),r("br"),n._v("\n          По стастике человек живет всего 67 лет"),r("br"),n._v("\n          А я уже умираю"),r("br"),n._v("\n\n          По статистике каждый находит  кого то еще"),r("br"),n._v("\n          Но я одинок"),r("br"),n._v("\n          По статистике люди ищут способ остаться собой"),r("br"),n._v("\n          Но я не ищу"),r("br")])],1),n._v(" "),r("v-btn",{attrs:{icon:""},on:{click:[function(t){return t.stopPropagation(),n.playStopStatistics(t)},function(t){n.transition.expand3=!n.transition.expand3}]}},[r("v-icon",[n._v(" mdi-stop-circle-outline ")])],1)],1)],1),n._v(" "),r("v-card",{attrs:{outlined:"",color:"#7CB342"}},[r("v-card-title",{staticClass:"d-flex justify-center"},[n._v("\n      Меклкий Песок\n    ")]),n._v(" "),r("v-card-actions",{staticClass:"d-flex justify-center"},[r("v-btn",{attrs:{icon:""},on:{click:[function(t){return t.stopPropagation(),n.playSoundPesok(t)},function(t){n.transition.expand4=!n.transition.expand4}]}},[r("v-icon",[n._v(" mdi-play-circle-outline ")])],1),n._v(" "),r("v-fab-transition",[r("v-card-text",{directives:[{name:"show",rawName:"v-show",value:n.transition.expand4,expression:"transition.expand4"}],staticClass:"text-center"},[n._v("\n          Мелкий песок"),r("br"),n._v("\n          Пролетит сквозь нас"),r("br"),n._v("\n          Оставив за собой"),r("br"),n._v("\n          Осколки острых фраз"),r("br"),n._v("\n\n          Мелкий песок"),r("br"),n._v("\n          Ветром несет"),r("br"),n._v("\n          По улицам домов"),r("br"),n._v("\n          По улицам,вдоль трас"),r("br"),n._v("\n\n          Мелкий песок"),r("br"),n._v("\n          Чужд нашим краям"),r("br"),n._v("\n          Гонят  с дорог"),r("br"),n._v("\n          Подавляют огнем"),r("br"),n._v("\n          Самолетами"),r("br"),n._v("\n\n          Ревут огни"),r("br"),n._v("\n          От тяжелых ран"),r("br"),n._v("\n          Он не похож на вас"),r("br"),n._v("\n          Истрибить его"),r("br")])],1),n._v(" "),r("v-btn",{attrs:{icon:""},on:{click:[function(t){return t.stopPropagation(),n.playStopPesok(t)},function(t){n.transition.expand4=!n.transition.expand4}]}},[r("v-icon",[n._v(" mdi-stop-circle-outline ")])],1)],1)],1),n._v(" "),r("v-card",{attrs:{outlined:"",color:"#FFA726"}},[r("v-card-title",{staticClass:"d-flex justify-center"},[n._v("\n      Трип\n    ")]),n._v(" "),r("v-card-actions",{staticClass:"d-flex justify-center"},[r("v-btn",{attrs:{icon:""},on:{click:[function(t){return t.stopPropagation(),n.playSoundTrip(t)},function(t){n.transition.expand5=!n.transition.expand5}]}},[r("v-icon",[n._v(" mdi-play-circle-outline ")])],1),n._v(" "),r("v-fab-transition",[r("v-card-text",{directives:[{name:"show",rawName:"v-show",value:n.transition.expand5,expression:"transition.expand5"}],staticClass:"text-center"},[n._v("\n          Мы немного устали"),r("br"),n._v("\n          По сидели поспали"),r("br"),n._v("\n          По курили пошли"),r("br"),n._v("\n\n          Одинокие горы"),r("br"),n._v("\n          Странные разговоры"),r("br"),n._v("\n          Позади полпути"),r("br"),n._v("\n\n          Но я слышу"),r("br"),n._v("\n          Как дышат звезды"),r("br"),n._v("\n          Для чего же я создан"),r("br"),n._v("\n          Может быть для тебя"),r("br"),n._v("\n\n          И мы"),r("br"),n._v("\n          В этой темной вселенной"),r("br"),n._v("\n          Доедаем консервы"),r("br"),n._v("\n          И греемся у костра"),r("br")])],1),n._v(" "),r("v-btn",{attrs:{icon:""},on:{click:[function(t){return t.stopPropagation(),n.playStopTrip(t)},function(t){n.transition.expand5=!n.transition.expand5}]}},[r("v-icon",[n._v(" mdi-stop-circle-outline ")])],1)],1)],1),n._v(" "),r("v-card",{attrs:{app:""}},[r("v-parallax",{attrs:{src:o(242),height:"250"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;y()(component,{VApp:C.a,VBtn:h.a,VCard:S.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VDivider:w.a,VFabTransition:k.a,VIcon:P.a,VParallax:j.a})}}]);