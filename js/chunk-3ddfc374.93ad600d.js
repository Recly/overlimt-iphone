(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ddfc374"],{"6d6b":function(t,s,e){t.exports=e.p+"img/message.180a9770.svg"},9521:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"contact-info"},[e("div",{staticClass:"info-header"},[e("button",{staticClass:"info-header__option",on:{click:t.goBack}},[e("svg",{staticClass:"info-header__icon"},[e("use",{attrs:{"xlink:href":"#arrow"}})]),e("span",[t._v("Назад ")])]),t.userContact.name?e("button",{staticClass:"info-header__option",on:{click:t.editContact}},[t._v("Править")]):t._e()]),e("div",{staticClass:"info-user-data"},[e("div",{staticClass:"info-user"},[e("div",{staticClass:"info-user__pic"},[t._v(t._s(t.getUserPic))]),e("p",{staticClass:"info-user__name"},[t._v(t._s(t.userContact.name||"Неизвестный номер"))])])]),e("div",{staticClass:"info-user-actions"},[e("button",{staticClass:"info-user-actions__option",on:{click:t.writeMessage}},[t._m(0),e("span",[t._v("Сообщение")])]),e("button",{staticClass:"info-user-actions__option",on:{click:t.makeCall}},[t._m(1),e("span",[t._v("Позвонить")])])]),e("div",{staticClass:"info-user-phone"},[e("p",{staticClass:"info-user-phone__title"},[t._v("Телефон")]),e("p",{staticClass:"info-user-phone__number"},[t._v(t._s(t.phone))])]),e("div",{staticClass:"info-user-choices"},[t.userContact.name?e("button",{staticClass:"info-user-choices__option",on:{click:t.deleteContact}},[t._v("Удалить контакт")]):e("div",{staticClass:"info-user-choices__option",on:{click:t.createContact}},[t._v("Добавить в контакты")]),t.userContact.name?e("button",{staticClass:"info-user-choices__option",on:{click:t.addToFavourite}},[t._v(t._s(t.userContact.favourite?"Удалить из избранных":"Добавить в избранные")+" ")]):t._e(),e("button",{staticClass:"info-user-choices__option",on:{click:t.block}},[t._v(t._s(t.blocked?"Разблокировать":"Заблокировать"))])])])},o=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"info-user-actions__icon-wrapper"},[n("img",{staticClass:"info-user-actions__icon",attrs:{src:e("6d6b")}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"info-user-actions__icon-wrapper"},[n("img",{staticClass:"info-user-actions__icon",attrs:{src:e("9cd8")}})])}],i=(e("7db0"),e("caad"),e("b0c0"),e("2532"),e("5530")),a=e("2f62"),c={props:["phone"],computed:Object(i["a"])(Object(i["a"])({},Object(a["d"])({contacts:function(t){return t.calls.contacts},blockedNumbers:function(t){return t.calls.blocked}})),{},{userContact:function(){var t=this,s=this.contacts.find((function(s){return s.number==t.phone}));return s||{user:null,number:this.phone}},getUserPic:function(){return this.userContact.name?this.userContact.name[0].toUpperCase():"?"},blocked:function(){return this.blockedNumbers.includes(parseInt(this.phone))}}),methods:{makeCall:function(){if(this.blocked)return this.$alert.show("Номер в черном списке");this.$store.dispatch("MAKE_CALL",{interlocutor:this.phone,type:"outward"})},createContact:function(){this.$router.push({name:"CreateContact",params:{options:{type:"create",data:{number:this.phone}}}})},editContact:function(){this.$router.push({name:"CreateContact",params:{options:{type:"change",data:this.userContact}}})},writeMessage:function(){this.$router.push({name:"MessageUser",params:{number:this.phone}})},goBack:function(){this.$router.go(-1)},deleteContact:function(){this.$router.go(-1),this.$store.commit("DELETE_CONTACT",this.phone),this.$alert.show("Контакт удален")},addToFavourite:function(){this.$store.commit("CHANGE_USER_FAVOURITE",{number:this.phone,action:!this.userContact.favourite}),this.userContact.favourite?this.$alert.show("Контакт добавлен в избарнные"):this.$alert.show("Контакт удален из избранных")},block:function(){this.$store.commit("BLOCK_NUMBER",parseInt(this.phone)),this.blocked?this.$alert.show("Номер заблокирован"):this.$alert.show("Номер разблокирован")}}},r=c,u=(e("ec74"),e("2877")),l=Object(u["a"])(r,n,o,!1,null,null,null);s["default"]=l.exports},"9cd8":function(t,s,e){t.exports=e.p+"img/call.2f78d3cd.svg"},dee3:function(t,s,e){},ec74:function(t,s,e){"use strict";var n=e("dee3"),o=e.n(n);o.a}}]);
//# sourceMappingURL=chunk-3ddfc374.93ad600d.js.map