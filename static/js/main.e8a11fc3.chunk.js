(this["webpackJsonpreact-ecommerce"]=this["webpackJsonpreact-ecommerce"]||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(10),i=n.n(a),r=n(14),l=n(180),s=n(181),o=n(182),j=n(170),d=n(183),b=n.p+"static/media/logo.5770a019.png",u=n(12),O=n(167),h=Object(O.a)((function(e){return{appBar:{boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)",width:"100%",padding:"0px 10px"},toolbar:Object(u.a)({},e.breakpoints.up("md"),{width:940,margin:"0px auto",padding:"0px 16px"}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(u.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1}}})),x=n(60),p=n(24),m=n(80),f=n.n(m),g=n(78),y=n.n(g),w=n(173),v=n(177),N=n(176),S=n(172),A=n(174),C=n(175),E=n(86),M=n(81),R=n.n(M),I=n(82),T=n.n(I),L=n(178),z=n(79),Y=n.n(z),W=n(83),V=n.n(W),Z=n(2),k=Object(O.a)((function(e){return{table:{width:"100%"},list:{width:"100%",height:"90%"},button:{width:100,marginLeft:"auto",margin:e.spacing(2)},emptycart:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}})),D=function(e){var t=e.toggleDrawer,n=Object(p.c)((function(e){return e.cartItems})),c=k(),a=Object(p.b)(),i=function(){return 0===n.length?0:n.map((function(e){return e.price*e.quantity})).reduce((function(e,t){return e+t}))},r=function(){return 0===n.length?0:n.map((function(e){return e.quantity})).reduce((function(e,t){return e+t}))};return Object(Z.jsxs)("div",{className:c.list,children:[Object(Z.jsx)(j.a,{onClick:t(!1),children:Object(Z.jsx)(y.a,{})}),0!==n.length?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(S.a,{component:E.a,className:c.table,children:Object(Z.jsxs)(w.a,{"aria-label":"spanning table",children:[Object(Z.jsxs)(A.a,{children:[Object(Z.jsx)(C.a,{children:Object(Z.jsx)(N.a,{align:"center",colSpan:4,children:Object(Z.jsxs)("h1",{children:[Object(Z.jsx)(Y.a,{}),"\u8cfc\u7269\u8eca"]})})}),Object(Z.jsxs)(C.a,{children:[Object(Z.jsx)(N.a,{align:"center",colSpan:2,children:"\u5546\u54c1\u8cc7\u8a0a"}),Object(Z.jsx)(N.a,{align:"center",style:{padding:0},children:"\u6578\u91cf"}),Object(Z.jsx)(N.a,{align:"center",children:"\u5c0f\u8a08"})]})]}),Object(Z.jsxs)(v.a,{children:[n.map((function(e,t){return Object(Z.jsxs)(C.a,{children:[Object(Z.jsx)(N.a,{align:"center",style:{padding:0},children:Object(Z.jsx)(j.a,{onClick:function(){return a(function(e){return{type:"REMOVE_CART",index:e}}(t))},children:Object(Z.jsx)(f.a,{})})}),Object(Z.jsxs)(N.a,{align:"left",children:[Object(Z.jsxs)("div",{style:{fontSize:14,display:"flex"},children:[Object(Z.jsx)("img",{style:{height:"40px"},src:e.image,alt:e.name}),Object(Z.jsxs)("p",{style:{marginLeft:"auto"},children:["$",e.price]})]}),Object(Z.jsx)("p",{style:{margin:0},children:e.name})]}),Object(Z.jsxs)(N.a,{align:"center",style:{padding:0},children:[Object(Z.jsx)(j.a,{onClick:function(){a(function(e){return{type:"INCREMENT_QUANTITY",index:e}}(t))},children:Object(Z.jsx)(R.a,{fontSize:"small"})}),Object(Z.jsx)("br",{}),e.quantity,Object(Z.jsx)("br",{}),Object(Z.jsx)(j.a,{onClick:function(){a(function(e){return{type:"DECREMENT_QUANTITY",index:e}}(t))},children:Object(Z.jsx)(T.a,{fontSize:"small"})})]}),Object(Z.jsx)(N.a,{align:"center",children:e.quantity*e.price})]},e.id)})),Object(Z.jsxs)(C.a,{children:[Object(Z.jsx)(N.a,{colSpan:2}),Object(Z.jsx)(N.a,{colSpan:1,align:"center",children:"\u5171"}),Object(Z.jsxs)(N.a,{align:"center",children:[r()," \u4ef6"]})]}),Object(Z.jsxs)(C.a,{children:[Object(Z.jsx)(N.a,{colSpan:2}),Object(Z.jsx)(N.a,{colSpan:1,align:"center",style:{padding:0},children:"\u7e3d\u91d1\u984d"}),Object(Z.jsxs)(N.a,{align:"center",children:[i()," \u5143"]})]})]})]})}),Object(Z.jsx)("div",{style:{display:"flex"},children:Object(Z.jsx)(L.a,{variant:"contained",color:"primary",className:c.button,endIcon:Object(Z.jsx)(V.a,{}),onClick:function(){alert("\u60a8\u8cfc\u8cb7\u7684\u4ef6\u6578\u70ba".concat(r(),"\u4ef6\r\u7e3d\u91d1\u984d\u70ba").concat(i(),"\u5143"))},children:"\u7d50\u5e33"})})]}):Object(Z.jsx)("div",{className:c.emptycart,children:Object(Z.jsx)("img",{src:"data:image/png;base64,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",alt:"empty-cart"})})]})},J=n(193),G=n(179),K=Object(O.a)((function(e){return{side:Object(u.a)({width:"100%"},e.breakpoints.up("sm"),{width:450})}})),U=function(){var e=Object(c.useState)({right:!1}),t=Object(r.a)(e,2),n=t[0],a=t[1],i=K(),l=function(e){return function(t){a(Object(x.a)(Object(x.a)({},n),{},{right:e}))}};return Object(Z.jsxs)("div",{children:[Object(Z.jsx)(G.a,{onClick:l(!0)}),Object(Z.jsx)(J.a,{anchor:"right",open:n.right,onClose:l(!1),classes:{paper:i.side},children:Object(Z.jsx)(D,{toggleDrawer:l})})]})},Q=function(){var e=Object(p.c)((function(e){return e.cartItems})),t=h();return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsx)(l.a,{position:"fixed",className:t.appBar,color:"inherit",children:Object(Z.jsxs)(s.a,{className:t.toolbar,children:[Object(Z.jsx)(o.a,{variant:"h6",className:t.title,color:"inherit",children:Object(Z.jsx)("img",{src:b,height:"40px",className:t.image,alt:"Gigathumb"})}),Object(Z.jsx)("div",{className:t.grow}),Object(Z.jsx)("div",{className:t.button,children:Object(Z.jsx)(j.a,{"aria-label":"Show cart items",coloe:"inherit",children:Object(Z.jsx)(d.a,{badgeContent:e.length,color:"secondary",children:Object(Z.jsx)(U,{})})})})]})})})},B=n(189),X=n(184),P=n(185),F=n(186),q=n(187),H=n(188),_=Object(O.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),$=function(e){var t=e.product,n=_(),c=Object(p.b)(),a=Object(p.c)((function(e){return e.cartItems}));return Object(Z.jsxs)(X.a,{className:n.root,children:[Object(Z.jsx)(P.a,{className:n.media,image:t.image,title:t.name}),Object(Z.jsxs)(F.a,{children:[Object(Z.jsxs)("div",{className:n.cardContent,children:[Object(Z.jsx)(o.a,{variant:"h6",gutterBottom:!0,children:t.name}),Object(Z.jsxs)(o.a,{variant:"h6",children:["$",t.price]})]}),Object(Z.jsx)(o.a,{variant:"body2",color:"textSecondary",children:t.description})]}),Object(Z.jsx)(q.a,{disableSpacing:!0,className:n.cardActions,children:Object(Z.jsx)(j.a,{"aria-label":"Add to Cart",onClick:function(){return c({type:"ADD_CART",item:e=t,ip:e.ip});var e},disabled:function(){if(a.find((function(e){return e.id===t.id})))return!0}(),children:Object(Z.jsx)(H.a,{})})})]})},ee=Object(O.a)((function(e){return{toolbar:e.mixins.toolbar,content:Object(u.a)({flexGrow:1,backgroundColor:e.palette.background.default},e.breakpoints.up("md"),{width:940,margin:"0px auto",padding:"0px 16px"}),root:{flexGrow:1}}})),te=function(e){var t=e.products,n=ee();return Object(Z.jsxs)("main",{className:n.content,children:[Object(Z.jsx)("div",{className:n.toolbar}),Object(Z.jsx)(B.a,{container:!0,justify:"center",spacing:4,children:t.map((function(e){return Object(Z.jsx)(B.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:Object(Z.jsx)($,{product:e})},e.name)}))})]})},ne=n(19),ce=n(194),ae=n(195),ie=n(190),re=n(191),le=Object(O.a)((function(e){return{option:Object(u.a)({display:"flex",marginTop:"90px",marginLeft:"auto"},e.breakpoints.up("md"),{width:940,margin:"90px auto 0px",padding:"0px 16px"}),formControl:{margin:e.spacing(1),minWidth:120}}})),se=function(e){var t=e.items,n=e.products,a=e.setProducts,i=le(),l=Object(c.useState)(!1),s=Object(r.a)(l,2),o=s[0],j=s[1],d=Object(c.useState)(!1),b=Object(r.a)(d,2),u=b[0],O=b[1],h=Object(c.useState)(""),x=Object(r.a)(h,2),p=x[0],m=x[1],f=Object(c.useState)(""),g=Object(r.a)(f,2),y=g[0],w=g[1];return Object(Z.jsx)("div",{className:i.option,children:Object(Z.jsxs)("div",{style:{marginLeft:"auto"},children:[Object(Z.jsxs)(ie.a,{className:i.formControl,children:[Object(Z.jsx)(ce.a,{id:"demo-controlled-open-select-label",children:"\u4f9d\u54c1\u724c\u6392\u5e8f"}),Object(Z.jsxs)(re.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:o,onClose:function(){j(!1)},onOpen:function(){j(!0)},value:p,onChange:function(e){m(e.target.value),"all"===e.target.value?(a(t),w("")):(a(t.filter((function(t){return t.brand===e.target.value}))),w(""))},children:[Object(Z.jsx)(ae.a,{value:"all",children:Object(Z.jsx)("em",{children:"\u5168\u90e8\u54c1\u724c"})}),Object(Z.jsx)(ae.a,{value:"+NICHE",children:"+NICHE"}),Object(Z.jsx)(ae.a,{value:"OWNDAYS",children:"OWNDAYS"}),Object(Z.jsx)(ae.a,{value:"John Dillinger",children:"John Dillinger"}),Object(Z.jsx)(ae.a,{value:"Memory Metal",children:"Memory Metal"}),Object(Z.jsx)(ae.a,{value:"AIR Ultem Classic",children:"AIR Ultem Classic"}),Object(Z.jsx)(ae.a,{value:"FUWA CELLU",children:"FUWA CELLU"}),Object(Z.jsx)(ae.a,{value:"lillybell",children:"lillybell"}),Object(Z.jsx)(ae.a,{value:"ECO2XY",children:"ECO2XY"}),Object(Z.jsx)(ae.a,{value:"Junni",children:"Junni"}),Object(Z.jsx)(ae.a,{value:"Graph Belle",children:"Graph Belle"})]})]}),Object(Z.jsxs)(ie.a,{className:i.formControl,children:[Object(Z.jsx)(ce.a,{id:"demo-controlled-open-select-label",children:"\u4f9d\u50f9\u683c\u6392\u5e8f"}),Object(Z.jsxs)(re.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:u,onClose:function(){O(!1)},onOpen:function(){O(!0)},value:y,onChange:function(e){switch(w(e.target.value),e.target.value){default:var t=Object(ne.a)(n).sort((function(e,t){return e.id-t.id}));a(t);break;case"lowToHigh":var c=Object(ne.a)(n).sort((function(e,t){return e.price-t.price}));a(c);break;case"highToLow":var i=Object(ne.a)(n).sort((function(e,t){return t.price-e.price}));a(i)}},children:[Object(Z.jsx)(ae.a,{value:"",children:Object(Z.jsx)("em",{children:"--------"})}),Object(Z.jsx)(ae.a,{value:"lowToHigh",children:"\u4f4e\u2192\u9ad8"}),Object(Z.jsx)(ae.a,{value:"highToLow",children:"\u9ad8\u2192\u4f4e"})]})]})]})})},oe=n(84),je=n.n(oe),de=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),l=Object(r.a)(i,2),s=l[0],o=l[1];return Object(c.useEffect)((function(){je.a.get("https://mighty-tor-73123.herokuapp.com/products").then((function(e){a(e.data),o(e.data),console.log("success")})).catch((function(e){console.log(e)}))}),[]),Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(Q,{}),Object(Z.jsx)(se,{items:n,products:s,setProducts:o}),Object(Z.jsx)(te,{products:s})]})},be=n(38),ue=[],Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0,n=JSON.parse(JSON.stringify(e));switch(t.type){case"ADD_CART":return n.push(t.item),n;case"REMOVE_CART":return n.splice(t.index,1),n;case"INCREMENT_QUANTITY":return n[t.index].quantity+=1,n;case"DECREMENT_QUANTITY":return n[t.index].quantity<2||(n[t.index].quantity-=1),n;case"clearAll":return n.length=0,n;default:return e}},he=Object(be.b)({cartItems:Oe}),xe=Object(be.c)(he,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(Z.jsx)(p.a,{store:xe,children:Object(Z.jsx)(de,{})}),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.e8a11fc3.chunk.js.map