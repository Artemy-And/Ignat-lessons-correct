(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports={container:"Hello_container__3ySnt",messageblue:"Hello_messageblue__OrbTv",messagecontent:"Hello_messagecontent__cm_Bm",messagetimestampright:"Hello_messagetimestampright__tZGlX",messagetimestampleft:"Hello_messagetimestampleft__3kxbl"}},15:function(e,t,n){},17:function(e,t,n){e.exports={item:"Navbar_item__13amG",active:"Navbar_active__DNdWc",dropbtn:"Navbar_dropbtn__2gHIP",dropdown:"Navbar_dropdown__1yt8-",dropdowncontent:"Navbar_dropdowncontent__147ku"}},26:function(e,t,n){e.exports={spann:"EditableSpan_spann__mfDwx"}},30:function(e,t,n){e.exports=n(43)},35:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(24),c=n.n(r),i=(n(35),n(3)),o=n(12),u=n.n(o);var m=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:u.a.container},l.a.createElement("div",{className:u.a.messageblue},l.a.createElement("h4",{className:u.a.messagecontent},e.name," ",e.surname),l.a.createElement("p",null,"How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? "),l.a.createElement("div",{className:u.a.messagetimestampleft},"17:15"))),l.a.createElement("img",{src:"https://cdn.ananasposter.ru/image/cache/catalog/poster/film/99/1333-1000x830.jpg"}))},s=n(9),d=n.n(s),v=function(e){return l.a.createElement("div",null,l.a.createElement("p",{id:e.id}," ",e.n," ",e.p))},p=function(e){var t=e.example.map((function(t){return l.a.createElement("ul",null,l.a.createElement("li",{className:d.a.todolist},l.a.createElement(v,{id:t.id,key:t.key,n:t.n}),l.a.createElement("button",{className:d.a.firstBtn,onClick:function(){e.removeExample(t.id)}},"x")))}));return l.a.createElement("div",{className:d.a.all},l.a.createElement("span",{className:d.a.todolist2},t),l.a.createElement("div",{className:d.a.btnAll},l.a.createElement("button",{onClick:function(){e.changeFilter("all")}},"All"),l.a.createElement("button",{onClick:function(){e.changeFilter("hight")}},"HIGHT"),l.a.createElement("button",{onClick:function(){e.changeFilter("middle")}},"Middle"),l.a.createElement("button",{onClick:function(){e.changeFilter("low")}},"Low")))},E=n(28),f=n(25),g=n(29),b=n(15),h=n.n(b);var _=function(e){var t=e.onKeyPressProps,n=e.error,a=Object(g.a)(e,["onKeyPressProps","error"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",Object.assign({className:h.a.inputNya,onKeyPress:function(e){13===e.charCode&&t()}},a,{type:a.type?a.type:"text"})),n?l.a.createElement("span",null,n):null)};var k=function(e){return l.a.createElement("button",Object.assign({className:h.a.buttonNya},e)," ",e.nameOfBtn)};var O=function(e){alert("Hello "+e)},j=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1],o=function(){if(""!=e.value){O(e.value);var t={id:Object(f.v1)(),name:e.value};c([].concat(Object(E.a)(r),[t])),e.setTitle("")}else alert("Please fill in the input")},u=r.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("p",null,e.name),l.a.createElement("button",{onClick:function(){!function(e){var t=r.filter((function(t){return t.id!=e}));c(t)}(e.id)}},"Remove"))}));return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(_,{type:"text",error:"error",onChange:function(t){e.setTitle(t.currentTarget.value)},value:e.value,onKeyPressProps:function(){o()}}),l.a.createElement(k,{onClick:o,nameOfBtn:"add"}),l.a.createElement("span",null,u)))},y=n(26),w=n.n(y);var N=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),r=n[0],c=n[1];return r?l.a.createElement("input",{onChange:function(t){e.setValue(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),e.setValue(e.value)}}):l.a.createElement("span",{onDoubleClick:function(){c(!0)},className:w.a.spann},e.value?e.value:"Please add smth")};function H(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function C(e,t){var n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}H("test",{x:"A",y:1});C("test",{x:"",y:0});var T=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),s=u[0],d=u[1],v=Object(a.useState)([{id:1,key:55,n:"Work",p:"Hight"},{id:2,key:55,n:"Chill",p:"Middle"},{id:3,key:55,n:"Games",p:"Low"},{id:4,key:55,n:"React",p:"Hight"},{id:5,key:55,n:"HTML",p:"low"}]),E=Object(i.a)(v,2),f=E[0],g=E[1],b=Object(a.useState)("all"),h=Object(i.a)(b,2),_=h[0],k=h[1],O=f;return"hight"===_&&(O=f.filter((function(e){return"Hight"===e.p}))),"middle"===_&&(O=f.filter((function(e){return"Middle"===e.p}))),"low"===_&&(O=f.filter((function(e){return"Low"===e.p}))),l.a.createElement("div",null,l.a.createElement("h1",null,e.message),l.a.createElement(m,{name:"Artemy",surname:"Andruschak"}),l.a.createElement("div",null,l.a.createElement(p,{example:O,removeExample:function(e){var t=f.filter((function(t){return t.id!==e}));g(t)},changeFilter:function(e){k(e)}})),l.a.createElement("div",null,l.a.createElement(j,{value:s,setTitle:d}),l.a.createElement(N,{value:r,setValue:c}),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){H("local title",r)}},"SAVE"),l.a.createElement("button",{onClick:function(){var e=C("local title",r);c(e)}},"RESTORE"))))};var x=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,e.message))},S=n(13);var P=function(e){return l.a.createElement("div",null,l.a.createElement("select",{value:e.value,onChange:function(t){e.setCurrentValue(t.currentTarget.value)}},e.items.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.label)}))))};var J=function(e){return l.a.createElement("div",null,l.a.createElement("label",null,e.itemRadio.map((function(t){return l.a.createElement("label",{key:t.value},l.a.createElement("input",{checked:t.checked,onChange:function(){return e.setRadioCurrentValue(t.name)},type:"radio"}),t.name)}))))};var A=function(e){var t=Object(a.useState)([{value:"Milk",label:"Milk"},{value:"Coffee",label:"Coffee"},{value:"Tea",label:"Tea"},{value:"Juice",label:"Juice"},{value:"Apples",label:"Apples"}]),n=Object(i.a)(t,2),r=n[0],c=(n[1],Object(a.useState)()),o=Object(i.a)(c,2),u=o[0],m=o[1],s=Object(a.useState)([{value:"male",name:"John",checked:!1},{value:"male",name:"Bendjamin",checked:!1},{value:"female",name:"Volerma",checked:!0},{value:"female",name:"Insignia",checked:!1}]),d=Object(i.a)(s,2),v=d[0],p=d[1];return console.log(u),l.a.createElement("div",null,l.a.createElement("h1",null,e.message),l.a.createElement(P,{items:r,value:u,setCurrentValue:m}),l.a.createElement(J,{itemRadio:v,setRadioCurrentValue:function(e){var t=v.map((function(t){return t.name===e?Object(S.a)(Object(S.a)({},t),{},{checked:!0}):Object(S.a)(Object(S.a)({},t),{},{checked:!1})}));p(t)}}))},B=n(8),R=n(1),V=n(17),D=n.n(V),F=function(){return l.a.createElement("nav",{className:D.a.dropdown},l.a.createElement("button",{className:"dropbtn"},"Dropdown"),l.a.createElement("div",{className:D.a.dropdowncontent},l.a.createElement(B.b,{to:"/junior"},"Junior"),l.a.createElement("br",null),l.a.createElement(B.b,{to:"/juniorPlus"},"JuniorPLus"),l.a.createElement("br",null),l.a.createElement(B.b,{to:"/preJunior"},"Pre Junior")))},I=function(){return l.a.createElement(B.a,null,l.a.createElement("div",null,l.a.createElement("div",null),l.a.createElement(R.a,{path:"/juniorPlus",render:function(){return l.a.createElement(x,{message:"JuniorPlus"})}}),l.a.createElement(R.a,{path:"/junior",render:function(){return l.a.createElement(T,{message:"Junior"})}}),l.a.createElement(R.a,{path:"/preJunior",render:function(){return l.a.createElement(A,{message:"PreJunior"})}}),l.a.createElement(F,null)))};c.a.render(l.a.createElement(I,null),document.getElementById("root"))},9:function(e,t,n){e.exports={todolist:"ThingsToDo_todolist__OT9Bx",firstBtn:"ThingsToDo_firstBtn__nbGq5",btnAll:"ThingsToDo_btnAll__2v_hR"}}},[[30,1,2]]]);
//# sourceMappingURL=main.9066251f.chunk.js.map