(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,,,function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},,function(e,t,a){e.exports=a(36)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),i=(a(26),a(6)),m=a(7),u=a(11),o=a(8),s=a(12),p=(a(27),a(39)),d=a(41),E=a(19),h=(a(28),a(13)),f=a.n(h),g=a(18),v=a.n(g),b=a(14),y=a.n(b),j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:f.a,alt:"miasto"})}}),r.a.createElement(E.a,{path:"/contact",render:function(){return r.a.createElement("img",{src:v.a,alt:"miasto"})}}),r.a.createElement(E.a,{path:"/products",render:function(){return r.a.createElement("img",{src:y.a,alt:"miasto"})}}),r.a.createElement(E.a,{path:"/admin",render:function(){return r.a.createElement("img",{src:y.a,alt:"miasto"})}}),r.a.createElement(E.a,{render:function(){return r.a.createElement("img",{src:f.a,alt:"miasto"})}})))},k=a(38),w=(a(32),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admina",path:"/admin"}]),x=function(){var e=w.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(k.a,{to:e.path,exact:!0},e.name))});return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},O=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginTop:"40px"}},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},a),r.a.createElement("p",{style:{fontSize:16}},n))},S=[{id:1,title:"Lorem ipsum 1",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque amet, vitae consequatur exercitationem ratione voluptatibus repudiandae alias deleniti culpa illo suscipit quia sint temporibus illum commodi itaque ea ab ipsum?"},{id:2,title:"Lorem ipsum 2 ?",author:"Ania Kwiatkowska",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."},{id:3,title:"Lorem ipsum 3",author:"Jan Kowalski",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."}],N=function(){var e=S.map(function(e){return r.a.createElement(O,Object.assign({key:e.id},e))});return r.a.createElement("div",{className:"home"},e)},z=a(40),L=function(){return r.a.createElement(E.a,{render:function(){return r.a.createElement(z.a,{to:"/login"})}})},q=(a(33),a(42)),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",isEmpty:!0},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:"",isEmpty:!0})},a.handleChange=function(e){e.target.value.length>0?a.setState({value:e.target.value,isEmpty:!1}):a.setState({value:e.target.value,isEmpty:!0})},a}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Napisz do nas"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107"}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(q.a,{when:!this.state.isEmpty,message:"Masz niewype\u0142niony formularz. Czy na pewno chcesz opu\u015bcic stron\u0119?"}))}}]),t}(r.a.Component),A=a(15),F=(a(34),["car","bike","motorcycle"]),J=function(){var e=F.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(A.a,{to:"/product/".concat(e)},e))});return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista produkt\xf3w"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},B=function(){return r.a.createElement("div",null,"nie ma takiej strony")},P=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Podaj login",r.a.createElement("input",{type:"text"})),r.a.createElement("label",{htmlFor:""},"Podaj has\u0142o",r.a.createElement("input",{type:"password"})),r.a.createElement("button",null,"Zaloguj"))},K=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},T=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona produktu"),r.a.createElement(K,{id:t.params.id}),r.a.createElement(A.a,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{path:"/",exact:!0,component:N}),r.a.createElement(E.a,{path:"/contact",component:C}),r.a.createElement(E.a,{path:"/products",component:J}),r.a.createElement(E.a,{path:"/product/:id",component:T}),r.a.createElement(E.a,{path:"/admin",component:L}),r.a.createElement(E.a,{path:"/login",component:P}),r.a.createElement(E.a,{component:B})))},D=(a(35),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(E.a,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"jeste\u015b na ",r.a.createElement("span",null,"stronie g\u0142\xf3wnej"))}}),r.a.createElement(E.a,{path:"/:page",exact:!0,render:function(e){return r.a.createElement("p",null,"jeste\u015b na ",r.a.createElement("span",null,e.match.params.page))}}))}),I=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{basename:"/react-app"},r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(j,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(x,null)),r.a.createElement("section",{className:"page"},r.a.createElement(W,null))),r.a.createElement("footer",null,r.a.createElement(D,null))))}}]),t}(n.Component);l.a.render(r.a.createElement(I,null),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.7815ceec.chunk.js.map