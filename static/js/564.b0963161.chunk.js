"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[564],{564:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,c,i=t(861),o=t(439),u=t(757),s=t.n(u),p=t(791),f=t(87),d=t(409),l=t(168),h=t(444),x=h.ZP.form(r||(r=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin: 0;\n"]))),v=h.ZP.input(a||(a=(0,l.Z)(["\n  width: 300px;\n  height: 42px;\n  padding: 5px 10px;\n  border: 2px solid #ff8c00b7;\n  font-size: 1.2rem;\n  color: #ff8c007b;\n  border-radius: 4px;\n  outline: none;\n  box-sizing: border-box;\n  margin-right: 10px;\n  background-color: #0486e925;\n\n  &:focus {\n    border: 3px solid #ff8c00;\n    color: #ff8c00;\n  }\n"]))),b=h.ZP.button(c||(c=(0,l.Z)(["\n  width: 70px;\n  height: 42px;\n  border: 2px solid #ff8c00;\n  background-color: #0486e925;\n  color: #ff8c00;\n  border-radius: 4px;\n  font-size: 17px;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    cursor: pointer;\n    border: 3px solid #ff8c00b7;\n    color: #ff8c00b7;\n  }\n"]))),m=t(184),g=function(n){var e=n.onSubmit;return(0,m.jsxs)(x,{onSubmit:e,children:[(0,m.jsx)(v,{type:"text",name:"searchWord",placeholder:"Search your movie"}),(0,m.jsx)(b,{type:"submit",children:"Search"})]})},y=t(689),w=function(n){var e=n.movies,t=(0,y.TH)();return(0,m.jsx)("ul",{children:e.map((function(n){return(0,m.jsx)("li",{children:(0,m.jsx)(f.rU,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})},Z=function(){var n=(0,p.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,f.lr)(),c=(0,o.Z)(a,2),u=c[0],l=c[1],h=u.get("searchWord");(0,p.useEffect)((function(){if(h){var n=function(){var n=(0,i.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.GC)(h);case 3:e=n.sent,t=e.data,r(t.results),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:return n.prev=10,n.finish(10);case 12:case"end":return n.stop()}}),n,null,[[0,8,10,12]])})));return function(){return n.apply(this,arguments)}}();n()}}),[h]);return(0,m.jsxs)("div",{children:[(0,m.jsx)(g,{onSubmit:function(n){n.preventDefault(),l({searchWord:n.target.elements.searchWord.value})}}),(0,m.jsx)(w,{movies:t})]})}},409:function(n,e,t){t.d(e,{Df:function(){return u},GC:function(){return v},Pg:function(){return p},q5:function(){return h},yo:function(){return d}});var r=t(861),a=t(757),c=t.n(a),i=t(243),o="71d212db098bee809be336737b7220c9";function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/trending/movie/week?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/movie/".concat(e,"?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",{data:r});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/movie/".concat(e,"/credits?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",{data:r});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/movie/".concat(e,"/reviews?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",{data:r});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/search/movie?api_key=".concat(o,"&query=").concat(e,"&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",{data:r});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org"}}]);
//# sourceMappingURL=564.b0963161.chunk.js.map