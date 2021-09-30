(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{204:function(e,t,a){},335:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(51),r=a.n(i),s=(a(204),a(12)),o=a(395),d=a(401),l=a(87),j=a(1);var b=function(e){return Object(j.jsx)(l.a,{data:{labels:e.arr,datasets:[{label:e.label,data:e.arrcount,backgroundColor:["#00acc1","#ffa726","#00c853","#f4511e"],borderColor:["#d7ccc8"],borderWidth:1,borderRadius:7}]},height:300,width:200,options:{maintainAspectRatio:!1}})},x=a(163),h=a.n(x),p=a(164),O=a.n(p),u=a(165),f=a.n(u),m=a(166),g=a.n(m),v={fontSize:"5rem",position:"absolute",top:"1rem",right:"1rem",opacity:"0.1"};var y=function(e){var t=e.covid;return Object(j.jsxs)(o.a,{container:!0,spacing:2,mt:"0.4rem",children:[Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:6,lg:3,children:Object(j.jsxs)(d.a,{sx:{height:"150px",backgroundColor:"#00acc1",paddingTop:"1rem",paddingLeft:"1rem",position:"relative"},elevation:3,children:[Object(j.jsxs)("h2",{style:{color:"#fff"},children:[t?t.totalCases:"Loading"," ",Object(j.jsx)("span",{style:{fontSize:"15px"}})]}),Object(j.jsx)("span",{style:{color:"#fff"},children:"Total confirmed cases"}),Object(j.jsx)(h.a,{sx:v})]})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:6,lg:3,children:Object(j.jsxs)(d.a,{sx:{height:"150px",backgroundColor:"#ffa726",paddingTop:"1rem",paddingLeft:"1rem",position:"relative"},elevation:3,children:[Object(j.jsxs)("h2",{style:{color:"#111"},children:[t?t.activeCases:"Loading",Object(j.jsxs)("span",{style:{fontSize:"15px"},children:[" (",t?t.activeCasesNew:"",")"]})]}),Object(j.jsx)("span",{style:{color:"#111"},children:"Active Cases"}),Object(j.jsx)(O.a,{sx:v})]})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:6,lg:3,children:Object(j.jsxs)(d.a,{sx:{height:"150px",backgroundColor:"#00c853",paddingTop:"1rem",paddingLeft:"1rem",position:"relative"},elevation:3,children:[Object(j.jsxs)("h2",{style:{color:"#fff"},children:[t?t.recovered:"Loading"," ",Object(j.jsxs)("span",{style:{fontSize:"15px"},children:["(+ ",t?t.recoveredNew:"",")"]})]}),Object(j.jsx)("span",{style:{color:"#fff"},children:"Total Recovered"}),Object(j.jsx)(f.a,{sx:v})]})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:6,lg:3,children:Object(j.jsxs)(d.a,{sx:{height:"150px",backgroundColor:"#f4511e",paddingTop:"1rem",paddingLeft:"1rem",position:"relative"},elevation:3,children:[Object(j.jsxs)("h2",{style:{color:"#fff"},children:[t?t.deaths:"Loading"," ",Object(j.jsxs)("span",{style:{fontSize:"15px"},children:["(+ ",t?t.deathsNew:"",")"]})]}),Object(j.jsx)("span",{style:{color:"#fff"},children:"Total Deceased"}),Object(j.jsx)(g.a,{sx:v})]})})]})};var w=function(e){return Object(j.jsx)(l.b,{data:{labels:["First Dose","Second Dose"],datasets:[{label:"India Vaccination status",data:e.vaccine,backgroundColor:["#00acc1","#f4511e"],borderColor:["#111"],borderWidth:1,borderRadius:3}]},height:300,width:200,options:{maintainAspectRatio:!1}})},C=a(43),S=a.n(C);var k=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),r=Object(s.a)(i,2),l=r[0],x=r[1],h=Object(n.useState)([]),p=Object(s.a)(h,2),O=p[0],u=p[1];return Object(n.useEffect)((function(){S.a.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true").then((function(e){x([e.data.totalCases,e.data.activeCases,e.data.recovered,e.data.deaths].concat()),c(e.data)})),S.a.get("https://data.covid19india.org/v4/min/data.min.json").then((function(e){var t=Object.values(e.data),a=t.map((function(e){return e.total.vaccinated1})),n=t.map((function(e){return e.total.vaccinated2})),c=a.reduce((function(e,t){return e+t})),i=n.reduce((function(e,t){return e+t}));u([c,i].concat())}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("h2",{style:{color:"#f50057"},children:[Object(j.jsx)("span",{style:{color:"#4dabf5"},children:"India"})," Updates .."]}),Object(j.jsx)(y,{covid:a}),Object(j.jsxs)(o.a,{container:!0,spacing:2,columns:12,children:[Object(j.jsx)(o.a,{item:!0,xs:12,md:6,A:!0,lg:6,children:Object(j.jsx)(d.a,{sx:{marginTop:"2rem",padding:"2rem",backgroundColor:"#eeeeee"},children:Object(j.jsx)(b,{label:"India covid status",arr:["Confirmed","Active","Recovered","Death"],arrcount:l})})}),Object(j.jsx)(o.a,{item:!0,xs:12,md:6,lg:6,children:Object(j.jsx)(d.a,{sx:{marginTop:"2rem",padding:"2rem",backgroundColor:"#eeeeee"},children:Object(j.jsx)(w,{vaccine:O})})})]})]})},T=a(25),I=a(4),R=a(5),D=a(30),z=a(397),A=a(394),F=a(396),L=a(398),W=a(400),N=a(383),P=a(93),E=a(384),H=a(399),M=a(169),J=a.n(M),V=a(172),X=a.n(V),U=a(171),B=a.n(U),_=a(391),G=a(385),q=a(386),K=a(170),Q=a.n(K),Y=a(168),Z=a.n(Y),$=a(178),ee=a.n($),te=a(174),ae=a.n(te),ne=a(175),ce=a.n(ne),ie=a(176),re=a.n(ie),se=a(18),oe=240,de=function(e){return{width:oe,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"}},le=function(e){return Object(I.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:"calc(".concat(e.spacing(7)," + 1px)")},e.breakpoints.up("sm"),{width:"calc(".concat(e.spacing(9)," + 1px)")})},je=Object(R.a)("div")((function(e){var t=e.theme;return Object(T.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1)},t.mixins.toolbar)})),be=Object(R.a)(F.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,a=e.open;return Object(T.a)({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},a&&{marginLeft:oe,width:"calc(100% - ".concat(oe,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})})),xe=Object(R.a)(A.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,a=e.open;return Object(T.a)(Object(T.a)({width:oe,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box"},a&&Object(T.a)(Object(T.a)({},de(t)),{},{"& .MuiDrawer-paper":de(t)})),!a&&Object(T.a)(Object(T.a)({},le(t)),{},{"& .MuiDrawer-paper":le(t)}))}));function he(e){var t=Object(se.e)(),a=Object(D.a)(),c=n.useState(!1),i=Object(s.a)(c,2),r=i[0],o=i[1];return Object(j.jsxs)(z.a,{sx:{display:"flex",height:"100vh"},children:[Object(j.jsx)(N.a,{}),Object(j.jsx)(be,{position:"fixed",open:r,sx:{padding:"0.4rem",backgroundColor:"#fff",color:"#263238"},children:Object(j.jsxs)(L.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(j.jsx)(Z.a,{color:"primary","aria-label":"open drawer",onClick:function(){o(!0)},edge:"start",sx:Object(T.a)({fontSize:"35px",cursor:"pointer",fontWeight:"800"},r&&{display:"none"}),children:Object(j.jsx)(J.a,{})}),Object(j.jsxs)(P.a,{variant:"h6",noWrap:!0,component:"div",sx:{color:"#1565c0",fontSize:"25px",fontWeight:"900"},children:[Object(j.jsx)("span",{style:{color:"#ff1744"},children:" COVID-19"})," Battle \ud83c\uddee\ud83c\uddf3"]}),Object(j.jsx)(Q.a,{sx:{color:"#ff3d00",fontSize:"35px",marginRight:"15px"}})]})}),Object(j.jsx)(xe,{variant:"permanent",open:r,children:Object(j.jsxs)("div",{style:{backgroundColor:"#424242",height:"100vh",color:"#fff"},children:[Object(j.jsxs)(je,{children:[Object(j.jsx)(d.a,{sx:{padding:"2px 50px",fontWeight:"500"},children:"\ud83c\uddee\ud83c\uddf3  India"}),Object(j.jsx)(H.a,{onClick:function(){o(!1)},color:"primary",children:"rtl"===a.direction?Object(j.jsx)(B.a,{}):Object(j.jsx)(X.a,{})})]}),Object(j.jsx)(E.a,{}),Object(j.jsx)(W.a,{sx:{paddingLeft:"5px"},children:[{name:"Home",icon:ae.a,color:"primary",route:"/"},{name:"Statewise Data",icon:ce.a,color:"error",route:"/statewise"},{name:"Districtwise Search",icon:re.a,color:"warning",route:"/districtwise"}].map((function(e,a){return Object(j.jsxs)(_.a,{onClick:function(){t.push(e.route)},alignItems:"center",button:!0,sx:{marginTop:"15px",borderRadius:"10px"},children:[Object(j.jsx)(G.a,{children:Object(j.jsx)(e.icon,{color:e.color,sx:{backgroundColor:"#fff",borderRadius:"5px",padding:"1px"}})}),Object(j.jsx)(q.a,{primary:e.name})]},a)}))}),Object(j.jsx)(E.a,{}),Object(j.jsx)(W.a,{sx:{paddingLeft:"5px"},children:["About"].map((function(e,a){return Object(j.jsxs)(_.a,{onClick:function(){t.push("/about")},button:!0,children:[Object(j.jsx)(G.a,{children:Object(j.jsx)(ee.a,{sx:{backgroundColor:"#fff",color:"#1565c0",borderRadius:"5px"}})}),Object(j.jsx)(q.a,{primary:e})]},e)}))})]})}),Object(j.jsxs)(z.a,{component:"main",sx:{flexGrow:1,p:3,backgroundColor:"#f5f5f5"},children:[Object(j.jsx)(je,{}),Object(j.jsx)(P.a,{paragraph:!0,children:e.children})]})]})}var pe=a(114),Oe=a(403),ue=a(407),fe=a(406),me=a(402),ge=a(404),ve=a(405),ye=a(387),we=Object(ye.a)({tableheadings:{backgroundColor:"#c5cae9",fontFamily:"Poppins, sans-serif"},tablehead:{fontWeight:"550",fontSize:"15px"},tablecontent:{fontFamily:"Poppins, sans-serif"}});var Ce=function(e){var t=e.tablecontents,a=we(),n=e.tableHeading;return Object(j.jsx)(me.a,{component:d.a,children:Object(j.jsxs)(Oe.a,{"aria-label":"simple table",children:[Object(j.jsx)(ge.a,{className:a.tableheadings,children:Object(j.jsx)(ve.a,{children:n.map((function(e){return Object(j.jsx)(fe.a,{className:a.tablehead,children:e})}))})}),Object(j.jsx)(ue.a,{children:t.map((function(e){return Object(j.jsxs)(ve.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(j.jsx)(fe.a,{component:"th",scope:"row",sx:{fontFamily:"Poppins, sans-serif"},children:e.region}),Object(j.jsx)(fe.a,{children:e.activeCases}),Object(j.jsx)(fe.a,{children:e.recovered}),Object(j.jsx)(fe.a,{children:e.deceased}),Object(j.jsx)(fe.a,{children:e.totalInfected})]},e.region)}))})]})})};var Se=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),r=Object(s.a)(i,2),l=r[0],x=r[1],h=Object(n.useState)([]),p=Object(s.a)(h,2),O=p[0],u=p[1];return Object(n.useEffect)((function(){S.a.get("https://data.covid19india.org/v4/min/data.min.json").then((function(e){var t=Object.keys(e.data);c(t.filter((function(e){return"TT"!==e})));var a=Object.values(e.data);x(a.map((function(e){return e.total.confirmed<3e7?e.total.confirmed:""})))})),S.a.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true").then((function(e){u(e.data.regionData)}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("h2",{style:{color:"#f50057"},children:[Object(j.jsx)("span",{style:{color:"#4dabf5"},children:"Statewise"})," Updates .."]}),Object(j.jsx)(o.a,{container:!0,spacing:2,columns:12,children:Object(j.jsx)(o.a,{item:!0,xs:12,md:12,lg:12,children:Object(j.jsx)(d.a,{sx:{marginTop:"1rem",padding:"2rem",backgroundColor:"#eeeeee"},children:Object(j.jsx)(b,{arr:a,arrcount:l,label:"Total confirmed cases"})})})}),Object(j.jsx)(o.a,{container:!0,spacing:2,columns:12,children:Object(j.jsx)(o.a,{item:!0,xs:12,md:12,lg:12,children:Object(j.jsx)(d.a,{sx:{marginTop:"1rem",padding:"1rem",backgroundColor:"#eeeeee"},children:Object(j.jsx)(Ce,{tablecontents:O,tableHeading:["State","Active","Recovered","Deceased","Total Infected"]})})})})]})},ke=a(408),Te=a(392),Ie=a(388),Re=a(409),De=Object(ye.a)({tableheadings:{backgroundColor:"#c5cae9",fontFamily:"Poppins, sans-serif"},tablehead:{fontWeight:"550",fontSize:"15px"},tablecontent:{fontFamily:"Poppins, sans-serif"}});var ze=function(e){var t=e.tablecontents,a=De(),n=e.tableHeading;return Object(j.jsx)(me.a,{component:d.a,children:Object(j.jsxs)(Oe.a,{"aria-label":"simple table",children:[Object(j.jsx)(ge.a,{className:a.tableheadings,children:Object(j.jsx)(ve.a,{children:n.map((function(e){return Object(j.jsx)(fe.a,{className:a.tablehead,children:e})}))})}),Object(j.jsx)(ue.a,{children:t.map((function(e){return Object(j.jsxs)(ve.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(j.jsx)(fe.a,{component:"th",scope:"row",sx:{fontFamily:"Poppins, sans-serif"},children:e[0]}),Object(j.jsx)(fe.a,{children:e[1].total.confirmed}),Object(j.jsx)(fe.a,{children:e[1].total.deceased}),Object(j.jsx)(fe.a,{children:e[1].total.recovered}),Object(j.jsx)(fe.a,{children:e[1].total.vaccinated1}),Object(j.jsx)(fe.a,{children:e[1].total.vaccinated2})]},e.region)}))})]})})};var Ae=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),r=Object(s.a)(i,2),l=r[0],b=r[1];return Object(n.useEffect)((function(){S.a.get("https://data.covid19india.org/state_district_wise.json").then((function(e){var t=Object.keys(e.data);c(t.filter((function(e){return"State Unassigned"!==e})))}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(o.a,{container:!0,spacing:2,sx:{marginTop:"0.5rem",display:"flex",alignItems:"center"},children:Object(j.jsx)(o.a,{item:!0,xs:6,md:6,lg:4,children:Object(j.jsxs)(ke.a,{fullWidth:!0,children:[Object(j.jsx)(Te.a,{id:"demo-simple-select-label",children:"Select state"}),Object(j.jsx)(Ie.a,{color:"primary",labelId:"demo-simple-select-label",id:"demo-simple-select",label:"select state",onChange:function(e){var t=e.target.value;S.a.get("https://data.covid19india.org/v4/min/data.min.json").then((function(e){var a=Object.values(e.data)[t].districts,n=Object.entries(a);b(n)}))},children:a.map((function(e,t){return Object(j.jsx)(Re.a,{value:t,children:e})}))})]})})}),Object(j.jsx)(o.a,{container:!0,spacing:2,columns:12,children:Object(j.jsx)(o.a,{item:!0,xs:6,sm:12,md:12,lg:12,children:Object(j.jsx)(d.a,{sx:{marginTop:"2rem",padding:"1rem",backgroundColor:"#eeeeee"},children:Object(j.jsx)(ze,{tableHeading:["District","Confirmed","Deceased","Recovered","Vaccine 1","Vaccine 2"],tablecontents:l})})})})]})},Fe=Object(ye.a)({aboutWrapper:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",marginTop:"2rem",textAlign:"center",color:"#546e7a"},aboutImg:{width:"150px"}});var Le=function(){var e=Fe();return Object(j.jsxs)("div",{className:e.aboutWrapper,children:[Object(j.jsx)("img",{className:e.aboutImg,src:"https://www.psycharchives.org/retrieve/096175aa-f7f2-4970-989d-d934c30b5551",alt:""}),Object(j.jsxs)("div",{className:"contents",children:[Object(j.jsx)("p",{children:"Covid tracking app created by Ajeesh"}),Object(j.jsx)("span",{children:"All rights Reserved \xa9 2021"})]})]})};var We=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(pe.a,{basename:"/Covid-Tracking",children:Object(j.jsxs)(he,{children:[Object(j.jsx)(se.a,{exact:!0,path:"/",children:Object(j.jsx)(k,{})}),Object(j.jsx)(se.a,{path:"/statewise",children:Object(j.jsx)(Se,{})}),Object(j.jsx)(se.a,{path:"/districtwise",children:Object(j.jsx)(Ae,{})}),Object(j.jsx)(se.a,{path:"/about",children:Object(j.jsx)(Le,{})})]})})})};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(We,{})}),document.getElementById("root"))}},[[335,1,2]]]);
//# sourceMappingURL=main.a7d1bd8a.chunk.js.map