(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{58:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var r=n(2),i=n(0),c=n.n(i),a=n(14),s=n.n(a),o=(n(58),n(9)),l=n(24),u=n(107),d=n(46),j=n.n(d),f=n(108),p=n(103),b=n(109),O=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(f.a,{bg:"light",expand:"lg",style:{padding:"1rem 0 1rem 2rem"},children:[Object(r.jsx)(f.a.Brand,{href:"/",children:Object(r.jsx)(p.a,{width:"180",height:"50",src:"/media/smk.png"})}),Object(r.jsx)(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsxs)(f.a.Collapse,{id:"basic-navbar-nav",children:[Object(r.jsx)(b.a,{className:"mr-auto"}),Object(r.jsx)(b.a.Link,{href:"https://github.com/arijitiiest/StuckOverflow",className:"mr-sm-2",children:"Github"})]})]})})},x=n(110),h=n(104),g=n(105),y=n(106),v=n(10),m=n.n(v),w=n(19),C="FETCH_FAVOURITE",k="ADD_FAVOURITE",_="REMOVE_FAVOURITE",q=n(20),S=n.n(q),I=function(e){return function(){var t=Object(w.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.post("/api/sessions",{question_id:e});case 3:n({type:k,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(w.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.delete("/api/sessions",{data:{question_id:e}});case 3:n({type:_,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()},F=function(e){var t=Object(o.b)(),n=e.question,i=n.title,c=n.owner,a=n.tags,s=n.question_id,l=c.profile_image,u=c.display_name,d=c.link,j=e.isFavourite;return Object(r.jsx)(x.a,{style:{width:"45rem",margin:"1rem",padding:"0.5rem",backgroundColor:"#ffffff"},children:Object(r.jsxs)(x.a.Body,{children:[Object(r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"8rem",justifyContent:"center",alignItems:"center"},children:[Object(r.jsx)("a",{href:d,onClick:function(e){return e.stopPropagation()},children:Object(r.jsx)(p.a,{src:l,roundedCircle:!0,width:"60"})}),Object(r.jsx)("div",{children:u})]}),Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:i},style:{width:"28rem",display:"flex",justifyContent:"center",alignItems:"center"}}),Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"8rem",justifyContent:"center",alignItems:"center"},children:[j?Object(r.jsx)(h.a,{style:{color:"red",marginBottom:"2rem",cursor:"pointer"},onClick:function(e){e.stopPropagation(),t(D(s))}}):Object(r.jsx)(g.a,{style:{marginBottom:"2rem",cursor:"pointer"},onClick:function(e){e.stopPropagation(),t(I(s))}}),Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(r.jsx)(y.a,{}),"0"]})]})]}),Object(r.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:a.map((function(e,t){return Object(r.jsx)("div",{style:{padding:10,margin:5,backgroundColor:"#aaffff",borderRadius:"10px"},children:e},t)}))})]})})},L="FETCH_QUESTIONS",T="ADD_QUESTIONS",E="LOADING_TRUE",A="LOADING_FALSE",N=(n(86),function(e){var t=Object(o.b)(),n=e.question,i=n.title,c=n.owner,a=n.tags,s=(n.link,n.view_count,n.answer_count,n.creation_date,n.question_id),l=c.profile_image,u=c.display_name,d=c.link,j=e.isFavourite;return Object(r.jsx)("div",{className:"popup-box",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("span",{className:"close-icon",onClick:e.handleClose,children:"x"}),Object(r.jsx)(x.a,{children:Object(r.jsxs)(x.a.Body,{children:[Object(r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"8rem",justifyContent:"center",alignItems:"center"},children:[Object(r.jsx)("a",{href:d,onClick:function(e){return e.stopPropagation()},children:Object(r.jsx)(p.a,{src:l,roundedCircle:!0,width:"60"})}),Object(r.jsx)("div",{children:u})]}),Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:i},style:{width:"28rem",display:"flex",justifyContent:"center",alignItems:"center"}}),Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"8rem",justifyContent:"center",alignItems:"center"},children:[j?Object(r.jsx)(h.a,{style:{color:"red",marginBottom:"2rem"},onClick:function(e){e.stopPropagation(),t(D(s))}}):Object(r.jsx)(g.a,{style:{marginBottom:"2rem"},onClick:function(e){e.stopPropagation(),t(I(s))}}),Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(r.jsx)(y.a,{}),"0"]})]})]}),Object(r.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:a.map((function(e,t){return Object(r.jsx)("div",{style:{padding:10,margin:5,backgroundColor:"#aaffff",borderRadius:"10px"},children:e},t)}))})]})})]})})}),B=function(){var e=Object(o.b)(),t=Object(i.useState)(!1),n=Object(l.a)(t,2),a=n[0],s=n[1],d=Object(i.useState)(!1),f=Object(l.a)(d,2),p=f[0],b=f[1],x=Object(i.useState)({}),h=Object(l.a)(x,2),g=h[0],y=h[1],v=Object(i.useState)([]),k=Object(l.a)(v,2),_=k[0],q=k[1],I=Object(o.c)((function(e){return e.question.isLoading})),D=Object(o.c)((function(e){return e.question.questions})),B=Object(o.c)((function(e){return e.question.hasMore})),M=Object(o.c)((function(e){return e.favourite.favourites}));Object(i.useEffect)((function(){e(function(){var e=Object(w.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:E}),e.next=4,S.a.get("/api/questions");case 4:n=e.sent,r=n.data,t({type:L,payload:r.questions}),t({type:A}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(w.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("/api/sessions");case 3:n=e.sent,r=n.data,t({type:C,payload:r.favourites}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(i.useEffect)((function(){q(a?D.filter((function(e){return M.includes(e.question_id.toString())})):D)}),[D,a,M]);console.log("Rendered");var R=function(e){y(e),b(!0)};return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)(O,{}),Object(r.jsxs)("div",{style:{textAlign:"center",padding:"1rem",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",backgroundColor:"#f0f0f0"},children:[Object(r.jsxs)("div",{style:{width:"45rem",display:"flex",justifyContent:"flex-end"},children:[Object(r.jsx)(j.a,{onChange:function(){s(!a)},checked:a}),Object(r.jsx)("label",{style:{paddingLeft:".5rem"},children:"Favourites"})]}),_.length>0?_.map((function(e,t){return Object(r.jsx)("div",{onClick:R.bind(undefined,e),children:Object(r.jsx)(F,{question:e,isFavourite:M.find((function(t){return t.toString()===e.question_id.toString()}))})},t)})):"",B?Object(r.jsx)(u.a,{onClick:function(){e(function(){var e=Object(w.a)(m.a.mark((function e(t,n){var r,i,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:E}),r=n().question.current_page,e.next=5,S.a.get("/api/questions/?page=".concat(r+1));case 5:i=e.sent,c=i.data,t({type:T,payload:c}),t({type:A}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}())},style:{marginTop:"1rem"},children:I?"Loading...":"Load More"}):""]}),p?Object(r.jsx)(N,{question:g,handleClose:function(){b(!1)},isFavourite:M.find((function(e){return e.toString()===g.question_id.toString()}))}):null]})},M=(n(87),n(17)),R=n(49),P=n(50),U=n(23),H=n(6),V={questions:[],current_page:1,isLoading:!1,hasMore:!0},G={favourites:[]},J=Object(M.combineReducers)({question:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(H.a)(Object(H.a)({},e),{},{isLoading:!0});case A:return Object(H.a)(Object(H.a)({},e),{},{isLoading:!1});case L:return Object(H.a)(Object(H.a)({},e),{},{questions:t.payload});case T:return Object(H.a)(Object(H.a)({},e),{},{questions:[].concat(Object(U.a)(e.questions),Object(U.a)(t.payload.questions)),current_page:e.current_page+1,hasMore:t.payload.has_more});default:return e}},favourite:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(H.a)(Object(H.a)({},e),{},{favourites:t.payload});case k:return Object(H.a)(Object(H.a)({},e),{},{favourites:[].concat(Object(U.a)(e.favourites),[t.payload.toString()])});case _:return Object(H.a)(Object(H.a)({},e),{},{favourites:e.favourites.filter((function(e){return e.toString()!==t.payload.toString()}))});default:return e}}}),Q=[R.a],W=Object(M.createStore)(J,Object(P.composeWithDevTools)(M.applyMiddleware.apply(void 0,Q)));var z=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(o.a,{store:W,children:Object(r.jsx)(B,{})})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,111)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))};n(88),n(89);s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(z,{})}),document.getElementById("root")),K()}},[[90,1,2]]]);
//# sourceMappingURL=main.ae9a928d.chunk.js.map