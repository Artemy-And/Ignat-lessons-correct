(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports={container:"Hello_container__3ySnt",messageblue:"Hello_messageblue__OrbTv",messagecontent:"Hello_messagecontent__cm_Bm",messagetimestampright:"Hello_messagetimestampright__tZGlX",messagetimestampleft:"Hello_messagetimestampleft__3kxbl"}},14:function(e,t,n){},16:function(e,t,n){e.exports={item:"Navbar_item__13amG",active:"Navbar_active__DNdWc",dropbtn:"Navbar_dropbtn__2gHIP",dropdown:"Navbar_dropdown__1yt8-",dropdowncontent:"Navbar_dropdowncontent__147ku"}},28:function(e,t,n){e.exports=n(41)},33:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(23),i=n.n(r),o=(n(33),n(8)),c=n(12),u=n.n(c);var m=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:u.a.container},l.a.createElement("div",{className:u.a.messageblue},l.a.createElement("h4",{className:u.a.messagecontent},e.name," ",e.surname),l.a.createElement("p",null,"How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? "),l.a.createElement("div",{className:u.a.messagetimestampleft},"17:15"))),l.a.createElement("img",{src:"https://cdn.ananasposter.ru/image/cache/catalog/poster/film/99/1333-1000x830.jpg"}))},s=n(9),d=n.n(s),E=function(e){return l.a.createElement("div",null,l.a.createElement("p",{id:e.id}," ",e.n," ",e.p))},g=function(e){var t=e.example.map((function(t){return l.a.createElement("ul",null,l.a.createElement("li",{className:d.a.todolist},l.a.createElement(E,{id:t.id,key:t.key,n:t.n}),l.a.createElement("button",{className:d.a.firstBtn,onClick:function(){e.removeExample(t.id)}},"x")))}));return l.a.createElement("div",{className:d.a.all},l.a.createElement("span",{className:d.a.todolist2},t),l.a.createElement("div",{className:d.a.btnAll},l.a.createElement("button",{onClick:function(){e.changeFilter("all")}},"All"),l.a.createElement("button",{onClick:function(){e.changeFilter("hight")}},"HIGHT"),l.a.createElement("button",{onClick:function(){e.changeFilter("middle")}},"Middle"),l.a.createElement("button",{onClick:function(){e.changeFilter("low")}},"Low")))},p=n(26),f=n(24),v=n(27),b=n(14),_=n.n(b);var h=function(e){var t=e.onEnter,n=e.error,a=Object(v.a)(e,["onEnter","error"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",Object.assign({className:_.a.inputNya,onKeyPress:function(e){(e.charCode=13)&&t&&t()}&&e.onKeyPressMethod},a,{type:"text"})),n?l.a.createElement("span",null,n):null)};var w=function(e){return l.a.createElement("button",Object.assign({className:_.a.buttonNya},e)," Click")};var H=function(e){alert("Hello "+e)},k=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),r=n[0],i=n[1],c=function(){if(""!=e.value){H(e.value);var t={id:Object(f.v1)(),name:e.value};i([].concat(Object(p.a)(r),[t])),e.setTitle("")}else alert("Please fill in the input")},u=r.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("p",null,e.name),l.a.createElement("button",{onClick:function(){!function(e){var t=r.filter((function(t){return t.id!=e}));i(t)}(e.id)}},"Remove"))}));return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(h,{onKeyPressMethod:function(e){13===e.charCode&&c()},type:"text",error:"error",onChange:function(t){e.setTitle(t.currentTarget.value)},value:e.value}),l.a.createElement(w,{onClick:c}),l.a.createElement("span",null,u)))};var N=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),r=n[0],i=n[1],c=Object(a.useState)([{id:1,key:55,n:"Work",p:"Hight"},{id:2,key:55,n:"Chill",p:"Middle"},{id:3,key:55,n:"Games",p:"Low"},{id:4,key:55,n:"React",p:"Hight"},{id:5,key:55,n:"HTML",p:"low"}]),u=Object(o.a)(c,2),s=u[0],d=u[1],E=Object(a.useState)("all"),p=Object(o.a)(E,2),f=p[0],v=p[1],b=s;return"hight"===f&&(b=s.filter((function(e){return"Hight"===e.p}))),"middle"===f&&(b=s.filter((function(e){return"Middle"===e.p}))),"low"===f&&(b=s.filter((function(e){return"Low"===e.p}))),l.a.createElement("div",null,l.a.createElement("h1",null,e.message),l.a.createElement(m,{name:"Artemy",surname:"Andruschak"}),l.a.createElement("div",null,l.a.createElement(g,{example:b,removeExample:function(e){var t=s.filter((function(t){return t.id!==e}));d(t)},changeFilter:function(e){v(e)}})),l.a.createElement("div",null,l.a.createElement(k,{value:r,setTitle:i})))};var y=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,e.message))};var j=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,e.message))},O=n(7),x=n(1),T=n(16),C=n.n(T),P=function(){return l.a.createElement("nav",{className:C.a.dropdown},l.a.createElement("button",{className:"dropbtn"},"Dropdown"),l.a.createElement("div",{className:C.a.dropdowncontent},l.a.createElement(O.b,{to:"/junior"},"Junior"),l.a.createElement("br",null),l.a.createElement(O.b,{to:"/juniorPlus"},"JuniorPLus"),l.a.createElement("br",null),l.a.createElement(O.b,{to:"/preJunior"},"Pre Junior")))},J=function(){return l.a.createElement(O.a,null,l.a.createElement("div",null,l.a.createElement("div",null),l.a.createElement(x.a,{path:"/juniorPlus",render:function(){return l.a.createElement(y,{message:"JuniorPlus"})}}),l.a.createElement(x.a,{path:"/junior",render:function(){return l.a.createElement(N,{message:"Junior"})}}),l.a.createElement(x.a,{path:"/preJunior",render:function(){return l.a.createElement(j,{message:"PreJunior"})}}),l.a.createElement(P,null)))};i.a.render(l.a.createElement(J,null),document.getElementById("root"))},9:function(e,t,n){e.exports={todolist:"ThingsToDo_todolist__OT9Bx",firstBtn:"ThingsToDo_firstBtn__nbGq5",btnAll:"ThingsToDo_btnAll__2v_hR"}}},[[28,1,2]]]);
//# sourceMappingURL=main.9cab67bc.chunk.js.map