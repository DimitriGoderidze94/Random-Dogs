(this["webpackJsonprandom-dogs"]=this["webpackJsonprandom-dogs"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(6),a=n.n(s),o=(n(11),n(2)),i=n.n(o),u=n(3),d=n(5),b=n(0),l=function(e){var t="https://dog.ceo/api/breed/"+e.breed+"/images";return Object(r.useEffect)((function(){var n=function(){var n=Object(u.a)(i.a.mark((function n(){var r,c,s;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(t);case 3:return r=n.sent,n.next=6,r.json();case 6:for(c=n.sent,document.getElementById("container").innerHTML="",s=e.imgNumber;s<e.imgNumber+9;s++)s<c.message.length&&(document.getElementById("container").innerHTML+="<img src="+c.message[s]+" alt="+e.breed+"/>"),s-8>=c.message.length&&(document.getElementById("container").innerHTML="<h2>No More <span>"+e.breed+"</span> dogs</h2>");n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log("error",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();n()}),[e.imgNumber,e.breed,t]),Object(b.jsx)("div",{name:e.breed,children:Object(b.jsx)("div",{id:"container"})})};l.defaultProps={title:"dogs"};var j=l,m=function(){var e=Object(r.useState)("affenpinscher"),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(0),a=Object(d.a)(s,2),o=a[0],l=a[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://dog.ceo/api/breeds/list/all");case 3:return t=e.sent,e.next=6,t.json();case 6:for(n=e.sent,r=Object.keys(n.message),c=0;c<r.length;c++)document.getElementById("breeds").innerHTML+="<option class='breedOptions'>"+r[c]+"</option>";e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"selectContainer",children:[Object(b.jsx)("select",{id:"breeds",onChange:function(){c(document.getElementById("breeds").value),l(0)}}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Choose breed"})]}),Object(b.jsxs)("div",{className:"menu",children:[Object(b.jsx)("button",{className:"nextButton",onClick:function(){l(o+9)},children:"Next"}),Object(b.jsx)("button",{className:"prevButton",onClick:function(){o>=9&&l(o-9)},children:"Previus"}),Object(b.jsx)("button",{className:"refreshButton",onClick:function(){l(0)},children:"First Page"})]}),Object(b.jsx)(j,{breed:n,imgNumber:o})]})};var f=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Random Dogs"}),Object(b.jsx)(m,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),h()}},[[14,1,2]]]);
//# sourceMappingURL=main.ed78a9e1.chunk.js.map