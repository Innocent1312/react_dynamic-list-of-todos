(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),l=n.n(c),o=n(3),u=n(2),i=n.n(u),m=n(6),s=n(1),d=function(e){var t=e.name;return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,t))},p=function(e){var t=e.todoItem,n=t.user,a=t.id,c=t.title,l=t.completed;return r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null,c),r.a.createElement(d,{name:n.name}),r.a.createElement("td",null,l?"completed":"not completed"))},f=function(e){var t=e.todoList,n=e.onClick;return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,["id","title","name","completed"].map(function(e){return r.a.createElement("th",{key:e},r.a.createElement("button",{type:"button",onClick:function(){return n(e)}},"completed"===e?"status":e))}))),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement(p,{todoItem:e,key:e.id})})))},E=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),u=Object(s.a)(l,2),d=u[0],p=u[1],E=Object(a.useState)("id"),b=Object(s.a)(E,2),j=b[0],h=b[1],v=Object(a.useState)(!1),O=Object(s.a)(v,2),y=O[0],g=O[1];return y?r.a.createElement("p",null,"Error"):r.a.createElement("div",null,n.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{todoList:n,onClick:function(e){if(j!==e){var t=Object(o.a)(n).sort(function(t,n){var a=t[e]||t.user[e],r=n[e]||n.user[e];return"string"===typeof a?String(a).localeCompare(String(r)):a-r});c(t),h(e)}else c(Object(o.a)(n).reverse())}})):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:function(){var e,t,n,a,r;return i.a.async(function(l){for(;;)switch(l.prev=l.next){case 0:return p(!0),l.prev=1,l.next=4,i.a.awrap(Promise.all([fetch("https://jsonplaceholder.typicode.com/users"),fetch("https://jsonplaceholder.typicode.com/todos")]).then(function(e){return Promise.all(e.map(function(e){return e.json()}))}));case 4:e=l.sent,t=Object(s.a)(e,2),n=t[0],a=t[1],r=a.map(function(e){return Object(m.a)({},e,{user:n.find(function(t){return t.id===e.userId})})}),c(r),l.next=16;break;case 12:l.prev=12,l.t0=l.catch(1),p(!1),g(!0);case 16:case"end":return l.stop()}},null,null,[[1,12]])},disabled:d},d?"Loading...":"Loaded")))};l.a.render(r.a.createElement(E,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.6d12a430.chunk.js.map