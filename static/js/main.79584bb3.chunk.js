(this.webpackJsonpwherewolf=this.webpackJsonpwherewolf||[]).push([[0],{191:function(e,r,t){},192:function(e,r,t){},207:function(e,r,t){"use strict";t.r(r);var a=t(34),n=t.n(a),i=(t(191),t(0)),c=(t(192),t(234)),o=t(222),l=t(223),s=t(29),d=t(41),u=t(1),j=t(26),m=t(7);var f={_tag:"Home"},b={_tag:"Roles"},h={_tag:"Game"},O={_tag:"Players"},p=f,g=b,x=s.b,y=Object(s.d)("roles").then(s.b),v=Object(s.d)("game").then(s.b),w=Object(s.d)("players").then(s.b),k=Object(s.f)().alt(x.parser.map((function(){return f}))).alt(y.parser.map((function(){return b}))).alt(v.parser.map((function(){return h}))).alt(w.parser.map((function(){return O})));var W={formatLocation:function(e){switch(e._tag){case"Home":return Object(s.c)(x.formatter,e);case"Roles":return Object(s.c)(y.formatter,e);case"Game":return Object(s.c)(v.formatter,e);case"Players":return Object(s.c)(w.formatter,e)}},parseLocation:function(e){return Object(s.e)(k,s.a.parse(e),f)}},z=function(){var e=Object(u.createContext)(j.b.none);return{RouterProvider:function(r){var t=Object(u.useState)(r.routing.parseLocation(window.location.pathname)),a=Object(d.a)(t,2),n=a[0],i=a[1],c=function(){i(r.routing.parseLocation(window.location.pathname))};return Object(u.useEffect)((function(){return window.addEventListener("popstate",c),function(){window.removeEventListener("popstate",c)}})),Object(m.jsx)(e.Provider,{value:j.b.some({routing:r.routing,location:n,setLocation:i}),children:r.children})},useRouter:function(){var r=Object(u.useContext)(e);if(j.b.isNone(r))throw new Error("RouterContext not provided");return{current:r.value.location,navigateTo:function(e){var t=r.value.routing.formatLocation(e);window.history.pushState(null,"",t),window.scrollTo(0,0),r.value.setLocation(e)},back:function(){window.history.back()}}}}}(),C=z.RouterProvider,L=z.useRouter;function I(){var e=L();return Object(m.jsxs)(c.a,{display:"flex",width:1,flexDirection:"column",alignItems:"center",children:[Object(m.jsx)("h1",{children:"Welcome"}),Object(m.jsx)(o.a,{variant:"contained",color:"primary",onClick:function(){return e.navigateTo(g)},children:Object(m.jsx)(l.a,{id:"role"})})]})}var M=t(229),P=t(230),R=t(211),D=t(228),A=t(236),E=t(231),S=t(225),T=t(91),_=t.n(T),F=t(92),B=t.n(F),G=t(5),H={primaryWolf:{id:"primaryWolf",aura:"dark",mystical:!1,faction:"wolf"},secondaryWolf:{id:"secondaryWolf",aura:"dark",mystical:!1,faction:"wolf"},youngWolf:{id:"youngWolf",aura:"dark",mystical:!1,faction:"wolf"},traitor:{id:"traitor",aura:"light",mystical:!1,faction:"wolf"},seer:{id:"seer",aura:"light",mystical:!0,faction:"village"},wizard:{id:"wizard",aura:"light",mystical:!0,faction:"village"},medium:{id:"medium",aura:"light",mystical:!0,faction:"village"},witch:{id:"witch",aura:"light",mystical:!0,faction:"village"},healer:{id:"healer",aura:"light",mystical:!0,faction:"village"},farmer:{id:"farmer",aura:"light",mystical:!1,faction:"village"},innkeeper:{id:"innkeeper",aura:"light",mystical:!1,faction:"village"},bard:{id:"bard",aura:"light",mystical:!1,faction:"village"},monk:{id:"monk",aura:"light",mystical:!1,faction:"village"},heremit:{id:"heremit",aura:"light",mystical:!1,faction:"village"},priest:{id:"priest",aura:"light",mystical:!1,faction:"village"},sinner:{id:"sinner",aura:"dark",mystical:!1,faction:"village"},madman:{id:"madman",aura:"light",mystical:!1,faction:"general"},jester:{id:"jester",aura:"light",mystical:!1,faction:"general"}},N=Object(i.j)(H,j.c.toArray,j.a.map((function(e){return Object(d.a)(e,2)[1].faction})),j.a.uniq(G.a)),J=t(90);var q=t(226),V=t(227),K=t(43),Q=t(224);function U(e){return Object(m.jsx)(Q.a,Object(K.a)(Object(K.a)({},e),{},{children:Object(m.jsx)("path",{d:"M12 1.5c-5.398 0-9.75 4.352-9.75 9.602v4.273a2.53 2.53 0 002.55 2.55c.45 0 1.2.223 1.2.825V21c0 .3.227.602.523.75 1.801.602 3.676.898 5.477.898 1.8 0 3.676-.296 5.477-.898.296-.074.523-.375.523-.75v-2.25c0-.602.75-.824 1.2-.824a2.53 2.53 0 002.55-2.551v-4.273c0-5.25-4.352-9.602-9.75-9.602zM9.227 16.273l-.903.153c-.148 0-.3.074-.523.074-.602 0-1.125-.227-1.653-.602a2.666 2.666 0 01-.898-1.949v-.148A2.53 2.53 0 017.8 11.25h.9c.823 0 1.5.375 2.027.977.449.597.671 1.421.449 2.171-.227.977-1.051 1.653-1.95 1.875zm3.824 1.653c-.074.074-.153.074-.301.074-.3 0-.523-.148-.676-.45L12 17.399l-.074.153c-.153.375-.602.523-.977.3-.375-.152-.523-.601-.3-.976l.75-1.5c.226-.523 1.05-.523 1.351 0l.75 1.5c.074.375-.074.824-.45 1.05zm5.699-3.977c0 .75-.375 1.5-.898 1.95a2.632 2.632 0 01-1.653.601c-.148 0-.3 0-.523-.074l-.903-.153c-.972-.222-1.722-.898-1.949-1.875-.222-.75 0-1.574.45-2.171.453-.602 1.203-.977 2.027-.977h.898a2.53 2.53 0 012.551 2.55zm0 0"})}))}function X(e){return Object(m.jsx)(Q.a,Object(K.a)(Object(K.a)({},e),{},{children:Object(m.jsxs)("g",{children:[Object(m.jsx)("path",{d:"M23.887 11.586c-.192-.316-4.742-7.75-11.887-7.75-7.145 0-11.695 7.434-11.887 7.75a.807.807 0 000 .828c.192.316 4.742 7.75 11.887 7.75 7.145 0 11.695-7.434 11.887-7.75a.807.807 0 000-.828zM12 18.559c-5.336 0-9.21-5.063-10.238-6.559C2.789 10.5 6.652 5.441 12 5.441c5.336 0 9.21 5.063 10.238 6.559-1.027 1.5-4.89 6.559-10.238 6.559zm0 0"}),Object(m.jsx)("path",{d:"M12 6.598A5.406 5.406 0 006.598 12 5.409 5.409 0 0012 17.402 5.411 5.411 0 0017.402 12 5.406 5.406 0 0012 6.598zm0 9.199A3.801 3.801 0 018.203 12c0-2.094 1.703-3.8 3.797-3.8a3.804 3.804 0 013.797 3.8A3.801 3.801 0 0112 15.797zm0 0"}),Object(m.jsx)("path",{d:"M12 9.93c-1.145 0-2.07.925-2.07 2.07 0 1.145.925 2.07 2.07 2.07 1.145 0 2.07-.925 2.07-2.07 0-1.145-.925-2.07-2.07-2.07zm0 0"})]})}))}function Y(e){var r=function(){var e=Object(J.a)().formatMessage;return{formatName:function(r){switch(r){case"primaryWolf":return e({id:"role.primaryWolf.name"});case"secondaryWolf":return e({id:"role.secondaryWolf.name"});case"youngWolf":return e({id:"role.youngWolf.name"});case"traitor":return e({id:"role.traitor.name"});case"seer":return e({id:"role.seer.name"});case"wizard":return e({id:"role.wizard.name"});case"medium":return e({id:"role.medium.name"});case"witch":return e({id:"role.witch.name"});case"healer":return e({id:"role.healer.name"});case"farmer":return e({id:"role.farmer.name"});case"innkeeper":return e({id:"role.innkeeper.name"});case"bard":return e({id:"role.bard.name"});case"monk":return e({id:"role.monk.name"});case"heremit":return e({id:"role.heremit.name"});case"priest":return e({id:"role.priest.name"});case"sinner":return e({id:"role.sinner.name"});case"madman":return e({id:"role.madman.name"});case"jester":return e({id:"role.jester.name"})}},formatDescription:function(r){switch(r){case"primaryWolf":return e({id:"role.primaryWolf.description"});case"secondaryWolf":return e({id:"role.secondaryWolf.description"});case"youngWolf":return e({id:"role.youngWolf.description"});case"traitor":return e({id:"role.traitor.description"});case"seer":return e({id:"role.seer.description"});case"wizard":return e({id:"role.wizard.description"});case"medium":return e({id:"role.medium.description"});case"witch":return e({id:"role.witch.description"});case"healer":return e({id:"role.healer.description"});case"farmer":return e({id:"role.farmer.description"});case"innkeeper":return e({id:"role.innkeeper.description"});case"bard":return e({id:"role.bard.description"});case"monk":return e({id:"role.monk.description"});case"heremit":return e({id:"role.heremit.description"});case"priest":return e({id:"role.priest.description"});case"sinner":return e({id:"role.sinner.description"});case"madman":return e({id:"role.madman.description"});case"jester":return e({id:"role.jester.description"})}}}}(),t=r.formatName,a=r.formatDescription;return Object(m.jsx)(S.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(m.jsx)(q.a,{children:Object(m.jsxs)(V.a,{children:[Object(m.jsxs)(c.a,{display:"flex",width:1,flexDirection:"row",children:[Object(m.jsx)(c.a,{display:"flex",width:1,children:Object(m.jsx)(D.a,{gutterBottom:!0,variant:"h5",children:t(e.role.id)})}),Object(m.jsxs)(c.a,{display:"flex",alignItems:"center",children:["dark"===e.role.aura&&Object(m.jsx)(U,{}),e.role.mystical&&Object(m.jsx)(X,{})]})]}),Object(m.jsx)(D.a,{variant:"body2",color:"textSecondary",children:a(e.role.id)})]})})})}function Z(){var e=L(),r=function(){var e=Object(J.a)().formatMessage;return function(r){switch(r){case"general":return e({id:"faction.general"});case"wolf":return e({id:"faction.wolf"});case"village":return e({id:"faction.village"})}}}();return Object(m.jsxs)(c.a,{display:"flex",width:1,flexDirection:"column",alignItems:"center",children:[Object(m.jsx)(M.a,{position:"static",children:Object(m.jsxs)(P.a,{children:[Object(m.jsx)(R.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return e.navigateTo(p)},children:Object(m.jsx)(_.a,{})}),Object(m.jsx)(c.a,{display:"flex",width:1,children:Object(m.jsx)(D.a,{variant:"h6",children:Object(m.jsx)(l.a,{id:"role"})})})]})}),Object(m.jsx)(c.a,{display:"flex",width:1,flexDirection:"column",alignItems:"center",children:Object(i.j)(N,j.a.map((function(e){return Object(m.jsxs)(A.a,{children:[Object(m.jsx)(E.a,{expandIcon:Object(m.jsx)(B.a,{}),children:Object(m.jsx)(D.a,{children:r(e)})}),Object(m.jsx)(c.a,{m:2,children:Object(m.jsx)(S.a,{container:!0,direction:"row",spacing:2,justifyContent:"center",alignItems:"center",children:Object(i.j)(H,j.c.filter((function(r){return r.faction===e})),j.c.toArray,j.a.map((function(e){var r=Object(d.a)(e,2)[1];return Object(m.jsx)(Y,{role:r})})))})})]},e)})))})]})}var $=function(){var e,r=L();return Object(i.j)(r.current,(e={Home:Object(i.f)(Object(m.jsx)(I,{})),Roles:Object(i.f)(Object(m.jsx)(Z,{})),Game:Object(i.f)(Object(m.jsx)("div",{})),Players:Object(i.f)(Object(m.jsx)("div",{}))},function(r){return e[r._tag](r)}))},ee=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,239)).then((function(r){var t=r.getCLS,a=r.getFID,n=r.getFCP,i=r.getLCP,c=r.getTTFB;t(e),a(e),n(e),i(e),c(e)}))},re=t(38),te=t(235),ae=t(232);function ne(){return Object(m.jsx)(c.a,{display:"flex",width:1,height:1,alignItems:"center",justifyContent:"center",children:Object(m.jsx)(ae.a,{})})}function ie(e){var r=Object(u.useState)(j.b.none),a=Object(d.a)(r,2),n=a[0],c=a[1];return Object(u.useEffect)((function(){var r;Object(i.j)((r=e.locale,j.d.tryCatch((function(){switch(r){case"it":return t.e(4).then(t.t.bind(null,240,3)).then((function(e){return Object(K.a)({},e.default)}))}}),re.d)),j.d.map((function(e){return c(j.b.some(e))})))()}),[e.locale]),Object(i.j)(n,j.b.fold(Object(i.f)(Object(m.jsx)(ne,{})),(function(r){return Object(m.jsx)(te.a,{messages:r,locale:e.locale,children:e.children})})))}n.a.render(Object(m.jsx)(u.StrictMode,{children:Object(m.jsx)(ie,{locale:"it",children:Object(m.jsx)(C,{routing:W,children:Object(m.jsx)($,{})})})}),document.getElementById("root")),ee()}},[[207,1,2]]]);
//# sourceMappingURL=main.79584bb3.chunk.js.map