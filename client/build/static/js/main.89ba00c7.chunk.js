(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{58:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var i=n(2),r=n(0),c=n.n(r),s=n(14),a=n.n(s),o=(n(58),n(9)),l=n(24),d=n(107),u=n(46),j=n.n(u),f=n(108),p=n(103),b=n(109),x=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(f.a,{bg:"light",expand:"lg",style:{padding:"1rem 0 1rem 2rem"},children:[Object(i.jsx)(f.a.Brand,{href:"/",children:Object(i.jsx)(p.a,{width:"180",height:"50",src:"/media/smk.png"})}),Object(i.jsx)(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(i.jsxs)(f.a.Collapse,{id:"basic-navbar-nav",children:[Object(i.jsx)(b.a,{className:"mr-auto"}),Object(i.jsx)(b.a.Link,{href:"https://github.com/arijitiiest/StuckOverflow",className:"mr-sm-2",children:"Github"})]})]})})},h=n(110),O=n(104),y=n(105),g=n(106),m=n(10),v=n.n(m),w=n(19),C="FETCH_FAVOURITE",k="ADD_FAVOURITE",_="REMOVE_FAVOURITE",S=n(20),q=n.n(S),I=function(e){return function(){var t=Object(w.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:k,payload:e}),t.next=4,q.a.post("/api/sessions",{question_id:e});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(w.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:_,payload:e}),t.next=4,q.a.delete("/api/sessions",{data:{question_id:e}});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()},T=function(e){var t=Object(o.b)(),n=e.question,r=n.title,c=n.owner,s=n.tags,a=n.question_id,l=c.profile_image,d=c.display_name,u=c.link,j=e.isFavourite;return Object(i.jsx)(h.a,{style:{width:"45rem",margin:"1rem",padding:"0.5rem",backgroundColor:"#ffffff"},children:Object(i.jsxs)(h.a.Body,{children:[Object(i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"8rem",justifyContent:"center",alignItems:"center"},children:[Object(i.jsx)("a",{href:u,onClick:function(e){return e.stopPropagation()},style:{borderRadius:"50%",borderWidth:"2px",borderColor:"black",borderStyle:"solid",width:"64px",height:"64px",marginBottom:"0.5rem"},children:Object(i.jsx)(p.a,{src:l,roundedCircle:!0,width:"60"})}),Object(i.jsx)("div",{children:d})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{style:{fontWeight:"bold"},children:"Question Title: "}),Object(i.jsx)("div",{dangerouslySetInnerHTML:{__html:r},style:{width:"30rem",display:"flex",justifyContent:"center",alignItems:"center",padding:"5px"}})]}),Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"6rem",justifyContent:"center",alignItems:"center"},children:[j?Object(i.jsx)(O.a,{style:{color:"red",marginBottom:"2rem",cursor:"pointer"},onClick:function(e){e.stopPropagation(),t(D(a))}}):Object(i.jsx)(y.a,{style:{marginBottom:"2rem",cursor:"pointer"},onClick:function(e){e.stopPropagation(),t(I(a))}}),Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(i.jsx)(g.a,{}),"0"]})]})]}),Object(i.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",paddingTop:"1rem"},children:s.map((function(e,t){return Object(i.jsx)("div",{style:{padding:"6px 15px",margin:5,backgroundColor:"#3e7ff0",color:"#ffffff",borderRadius:"5px"},children:e},t)}))})]})})},L="FETCH_QUESTIONS",F="ADD_QUESTIONS",E="LOADING_TRUE",A="LOADING_FALSE",W=(n(86),function(e){var t=Object(o.b)(),n=e.question,r=n.title,c=n.owner,s=n.tags,a=n.link,l=n.view_count,u=n.answer_count,j=n.creation_date,f=n.question_id,b=c.profile_image,x=c.display_name,m=c.link,v=e.isFavourite;return Object(i.jsx)("div",{className:"popup-box",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("span",{className:"close-icon",onClick:e.handleClose,children:"x"}),Object(i.jsx)(h.a,{children:Object(i.jsxs)(h.a.Body,{children:[Object(i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"8rem",justifyContent:"center",alignItems:"center"},children:[Object(i.jsx)("a",{href:m,onClick:function(e){return e.stopPropagation()},style:{borderRadius:"50%",borderWidth:"2px",borderColor:"black",borderStyle:"solid",width:"64px",height:"64px",marginBottom:"0.5rem"},children:Object(i.jsx)(p.a,{src:b,roundedCircle:!0,width:"60"})}),Object(i.jsx)("div",{children:x})]}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{style:{fontWeight:"bold",width:"30rem"},children:["Question Title:"," ",Object(i.jsx)("span",{dangerouslySetInnerHTML:{__html:r},style:{fontWeight:"normal",display:"flex",alignItems:"center",paddingLeft:"2rem"}})]})}),Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"6rem",justifyContent:"center",alignItems:"center"},children:[v?Object(i.jsx)(O.a,{style:{color:"red",marginBottom:"2rem",cursor:"pointer"},onClick:function(e){e.stopPropagation(),t(D(f))}}):Object(i.jsx)(y.a,{style:{marginBottom:"2rem",cursor:"pointer"},onClick:function(e){e.stopPropagation(),t(I(f))}}),Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(i.jsx)(g.a,{}),"0"]})]})]}),Object(i.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(i.jsxs)("div",{style:{width:"30rem",fontWeight:"bold",paddingLeft:"10px"},children:["Question Desc :","  ",Object(i.jsx)("span",{style:{fontWeight:"normal",display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:"2rem"},children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})]})}),Object(i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"30rem",fontWeight:"bold",marginTop:"1rem"},children:[Object(i.jsxs)("div",{children:["Views :"," ",Object(i.jsx)("span",{style:{fontWeight:"normal"},children:l})]}),Object(i.jsxs)("div",{children:["Asked At :"," ",Object(i.jsx)("span",{style:{fontWeight:"normal"},children:new Date(j).toDateString()})]}),Object(i.jsxs)("div",{children:["Answers :"," ",Object(i.jsx)("span",{style:{fontWeight:"normal"},children:u})]})]})}),Object(i.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",paddingTop:"1rem"},children:s.map((function(e,t){return Object(i.jsx)("div",{style:{padding:"6px 15px",margin:5,backgroundColor:"#3e7ff0",color:"#ffffff",borderRadius:"5px"},children:e},t)}))}),Object(i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"1rem"},children:Object(i.jsx)(d.a,{href:a,variant:"outline-primary",target:"_blank",children:"View in Stackoverflow"})})]})})]})})}),B=function(){var e=Object(o.b)(),t=Object(r.useState)(!1),n=Object(l.a)(t,2),s=n[0],a=n[1],u=Object(r.useState)(!1),f=Object(l.a)(u,2),p=f[0],b=f[1],h=Object(r.useState)({}),O=Object(l.a)(h,2),y=O[0],g=O[1],m=Object(r.useState)([]),k=Object(l.a)(m,2),_=k[0],S=k[1],I=Object(o.c)((function(e){return e.question.isLoading})),D=Object(o.c)((function(e){return e.question.questions})),B=Object(o.c)((function(e){return e.question.hasMore})),R=Object(o.c)((function(e){return e.favourite.favourites}));Object(r.useEffect)((function(){e(function(){var e=Object(w.a)(v.a.mark((function e(t){var n,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:E}),e.next=4,q.a.get("/api/questions");case 4:n=e.sent,i=n.data,t({type:L,payload:i.questions}),t({type:A}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(w.a)(v.a.mark((function e(t){var n,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.get("/api/sessions");case 3:n=e.sent,i=n.data,t({type:C,payload:i.favourites}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(r.useEffect)((function(){S(s?D.filter((function(e){return R.includes(e.question_id.toString())})):D)}),[D,s,R]);console.log("Rendered");var N=function(e){g(e),b(!0)};return Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)(x,{}),Object(i.jsxs)("div",{style:{textAlign:"center",padding:"1rem",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",backgroundColor:"#f0f0f0"},children:[Object(i.jsxs)("div",{style:{width:"45rem",display:"flex",justifyContent:"flex-end"},children:[Object(i.jsx)(j.a,{onChange:function(){a(!s)},checked:s}),Object(i.jsx)("label",{style:{paddingLeft:".5rem"},children:"Favourites"})]}),_.length>0?_.map((function(e,t){return Object(i.jsx)("div",{onClick:N.bind(undefined,e),children:Object(i.jsx)(T,{question:e,isFavourite:R.find((function(t){return t.toString()===e.question_id.toString()}))})},t)})):"",B?Object(i.jsx)(d.a,{onClick:function(){e(function(){var e=Object(w.a)(v.a.mark((function e(t,n){var i,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:E}),i=n().question.current_page,e.next=5,q.a.get("/api/questions/?page=".concat(i+1));case 5:r=e.sent,c=r.data,t({type:F,payload:c}),t({type:A}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}())},style:{marginTop:"1rem"},children:I?"Loading...":"Load More"}):""]}),p?Object(i.jsx)(W,{question:y,handleClose:function(){b(!1)},isFavourite:R.find((function(e){return e.toString()===y.question_id.toString()}))}):null]})},R=(n(87),n(17)),N=n(49),M=n(50),P=n(23),U=n(6),V={questions:[],current_page:1,isLoading:!1,hasMore:!0},Q={favourites:[]},H=Object(R.combineReducers)({question:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(U.a)(Object(U.a)({},e),{},{isLoading:!0});case A:return Object(U.a)(Object(U.a)({},e),{},{isLoading:!1});case L:return Object(U.a)(Object(U.a)({},e),{},{questions:t.payload});case F:return Object(U.a)(Object(U.a)({},e),{},{questions:[].concat(Object(P.a)(e.questions),Object(P.a)(t.payload.questions)),current_page:e.current_page+1,hasMore:t.payload.has_more});default:return e}},favourite:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(U.a)(Object(U.a)({},e),{},{favourites:t.payload});case k:return Object(U.a)(Object(U.a)({},e),{},{favourites:[].concat(Object(P.a)(e.favourites),[t.payload.toString()])});case _:return Object(U.a)(Object(U.a)({},e),{},{favourites:e.favourites.filter((function(e){return e.toString()!==t.payload.toString()}))});default:return e}}}),G=[N.a],J=Object(R.createStore)(H,Object(M.composeWithDevTools)(R.applyMiddleware.apply(void 0,G)));var z=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(o.a,{store:J,children:Object(i.jsx)(B,{})})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,111)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),c(e),s(e)}))};n(88),n(89);a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(z,{})}),document.getElementById("root")),K()}},[[90,1,2]]]);
//# sourceMappingURL=main.89ba00c7.chunk.js.map