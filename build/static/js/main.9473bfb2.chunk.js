(this.webpackJsonpmanichino=this.webpackJsonpmanichino||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(29),i=c.n(s),n=(c(71),c(18)),r=c(19),l=c(24),j=c(22),o=(c(72),c(16)),d=c(4),m=c(35),b=(c(61),c(30)),h=c(28),O=(c(73),c(34)),x=c(122),u=c(60),f=c.n(u),v=c(59),p=c.n(v),N=c(119),g=c(121),w=c(1),y=function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(b.a)({},t.name,t.value))},k=Object(O.a)({iconFilled:{color:"#ff6d75"},iconHover:{color:"#ff3d47"}})(x.a);p.a;var S=function(){var e=Object(a.useReducer)(y,{}),t=Object(m.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(!1),n=Object(m.a)(i,2),r=n[0],l=n[1],j=Object(d.f)().userProfile;if(void 0!==j)return Object(w.jsx)("div",{className:"page-content page-container",id:"page-content",children:Object(w.jsx)("div",{className:"padding",children:Object(w.jsx)("div",{className:"row container d-flex justify-content-center",children:Object(w.jsx)("div",{className:"col-xl-6 col-md-12",children:Object(w.jsx)("div",{className:"card user-card-full",children:Object(w.jsxs)("div",{className:"row m-l-0 m-r-0",children:[Object(w.jsx)("div",{className:"col-sm-4 bg-c-lite-green user-profile",children:Object(w.jsxs)("div",{className:"card-block  text-center text-white",children:[Object(w.jsxs)("div",{className:"m-b-25",children:[" ",Object(w.jsx)("img",{height:"100px",width:"100px",src:"https://i.mdel.net/i/db/"+j.image,alt:j.name,className:"img-radius"})," "]}),Object(w.jsx)("h6",{className:"f-w-600",children:j.name}),Object(w.jsx)("p",{children:j.type})," ",Object(w.jsx)("i",{className:" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"})]})}),Object(w.jsx)("div",{className:"col-sm-8",children:Object(w.jsxs)("div",{className:"card-block",children:[Object(w.jsx)("h6",{className:"m-b-20 p-b-5 b-b-default f-w-600",children:"Information"}),Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("div",{className:"col-sm-6",children:[Object(w.jsx)("p",{className:"m-b-10 f-w-600",children:"Email"}),Object(w.jsx)("h6",{className:"text-muted f-w-400",children:"rntng@gmail.com"})]}),Object(w.jsxs)("div",{className:"col-sm-6",children:[Object(w.jsx)("p",{className:"m-b-10 f-w-600",children:"Phone"}),Object(w.jsx)("h6",{className:"text-muted f-w-400",children:"98979989898"})]})]}),Object(w.jsx)("h6",{className:"m-b-20 m-t-40 p-b-5 b-b-default f-w-600",children:"Projects"}),Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("form",{action:"/api",method:"POST",children:Object(w.jsxs)("div",{children:[Object(w.jsxs)(g.a,{component:"fieldset",mb:3,borderColor:"transparent",children:[Object(w.jsx)(N.a,{component:"legend",children:"Notes"}),Object(w.jsx)(k,{name:"customized-color",defaultValue:2,getLabelText:function(e){return"".concat(e," Heart").concat(1!==e?"s":"")},precision:.5,icon:Object(w.jsx)(f.a,{fontSize:"inherit"})})]}),Object(w.jsx)("hr",{}),Object(w.jsx)("div",{className:"commentForm panel panel-default",children:Object(w.jsxs)("div",{className:"panel-body",children:[r&&Object(w.jsx)("div",{children:"Submtting Form..."}),Object(w.jsx)("ul",{children:Object.entries(c).map((function(e){var t=Object(m.a)(e,2),c=t[0],a=t[1];return Object(w.jsxs)("li",{children:[Object(w.jsx)("strong",{children:c}),":",a.toString()]},c)}))}),Object(w.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),l(!0),setTimeout((function(){l(!1)}),3e3)},children:[Object(w.jsx)("input",{className:"form-control",type:"text",placeholder:"Your name",name:"Said ",onChange:function(e){s({name:e.target.name,value:e.target.value})}}),Object(w.jsx)("br",{})]})]})})]})})}),Object(w.jsxs)("ul",{className:"social-link list-unstyled m-t-40 m-b-10",children:[Object(w.jsx)("li",{children:Object(w.jsx)("a",{href:"#!","data-toggle":"tooltip","data-placement":"bottom",title:"","data-original-title":"facebook","data-abc":"true",children:Object(w.jsx)("i",{className:"mdi mdi-facebook feather icon-facebook facebook","aria-hidden":"true"})})}),Object(w.jsx)("li",{children:Object(w.jsx)("a",{href:"#!","data-toggle":"tooltip","data-placement":"bottom",title:"","data-original-title":"twitter","data-abc":"true",children:Object(w.jsx)("i",{className:"mdi mdi-twitter feather icon-twitter twitter","aria-hidden":"true"})})}),Object(w.jsx)("li",{children:Object(w.jsx)("a",{href:"#!","data-toggle":"tooltip","data-placement":"bottom",title:"","data-original-title":"instagram","data-abc":"true",children:Object(w.jsx)("i",{className:"mdi mdi-instagram feather icon-instagram instagram","aria-hidden":"true"})})})]})]})})]})})})})})});window.location.href="/"},L=c(38),R=c.n(L),A=(c(99),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).BASEURL="https://api.models.com/prosearch/sitesearch19-json.html?mdcsearch=",e.state={users:[],isLoading:!0,errors:null},e.valueRecieved=e.props.keyRecieved,e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"getUsers",value:function(){var e=this;R.a.get(this.BASEURL+this.valueRecieved).then((function(e){return e.data.people.map((function(e){return{slug:"".concat(e.slug),name:"".concat(e.name),type:"".concat(e.type),image:"".concat(e.image)}}))})).then((function(t){e.setState({users:t,isLoading:!1})})).catch((function(t){return e.setState({error:t,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,c=e.users;return Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col",children:t?Object(w.jsx)("p",{children:"Loading..."}):c.map((function(e){var t=e.slug,c=e.name,a=(e.type,e.image);return Object(w.jsxs)("div",{className:"card user-card",children:[Object(w.jsx)("div",{className:"card-header",children:Object(w.jsx)("h5",{children:t})},c),Object(w.jsxs)("div",{className:"card-block",children:[Object(w.jsx)("div",{className:"user-image",children:Object(w.jsx)("img",{src:"https://i.mdel.net/i/db/"+a,alt:c,className:"img-radius"})}),Object(w.jsxs)(o.b,{to:{pathname:"/model-profile",userProfile:e},children:[" ",Object(w.jsx)("h6",{className:"f-w-600 m-t-25 m-b-10",children:c})]}),Object(w.jsx)("p",{className:"text-muted",children:"Active | Male | Born 23.05.1992"}),Object(w.jsx)("hr",{}),Object(w.jsx)("p",{className:"text-muted m-t-15",children:"Activity Level: 87%"}),Object(w.jsxs)("ul",{className:"list-unstyled activity-leval",children:[Object(w.jsx)("li",{className:"active"}),Object(w.jsx)("li",{className:"active"}),Object(w.jsx)("li",{className:"active"}),Object(w.jsx)("li",{}),Object(w.jsx)("li",{})]}),Object(w.jsx)("div",{className:"bg-c-green counter-block m-t-10 p-20",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("div",{className:"col-4",children:[Object(w.jsx)("i",{className:"fa fa-comment"}),Object(w.jsx)("p",{children:"1256"})]}),Object(w.jsxs)("div",{className:"col-4",children:[Object(w.jsx)("i",{className:"fa fa-user"}),Object(w.jsx)("p",{children:"8562"})]}),Object(w.jsxs)("div",{className:"col-4",children:[Object(w.jsx)("i",{className:"fa fa-suitcase"}),Object(w.jsx)("p",{children:"189"})]})]})}),Object(w.jsx)("p",{className:"m-t-15 text-muted",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}),Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{className:"row justify-content-center user-social-link",children:[Object(w.jsx)("div",{className:"col-auto",children:Object(w.jsx)("a",{href:"#!",children:Object(w.jsx)("i",{className:"fa fa-facebook text-facebook"})})}),Object(w.jsx)("div",{className:"col-auto",children:Object(w.jsx)("a",{href:"#!",children:Object(w.jsx)("i",{className:"fa fa-twitter text-twitter"})})}),Object(w.jsx)("div",{className:"col-auto",children:Object(w.jsx)("a",{href:"#!",children:Object(w.jsx)("i",{className:"fa fa-dribbble text-dribbble"})})})]})]})]})}))})})})}}]),c}(a.Component)),C=(c(100),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e=this;return Object(w.jsx)("nav",{className:"navbar",children:Object(w.jsxs)("div",{className:"container-fluid",children:[Object(w.jsx)("div",{className:"navbar-header",children:Object(w.jsxs)("a",{className:"navbar-brand",href:"#",to:"/models",children:[Object(w.jsx)("span",{className:"fa fa-home"}),Object(w.jsx)("span",{className:"link",children:" Models"})]})}),Object(w.jsx)("div",{className:"navbar-brand ",id:"collapse-1",children:Object(w.jsxs)("form",{className:"navbar-form navbar-right",children:[Object(w.jsx)("div",{className:"form-group",children:Object(w.jsx)("input",{type:"text",className:"form-control",placeholder:"Search",onChange:function(t){e.props.chan(t.target.value)}})}),Object(w.jsx)("button",{type:"submit",className:"btn"})]})})]})})}}]),c}(a.Component)),B=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={keyword:""},e}return Object(r.a)(c,[{key:"changeKeyword",value:function(e){this.setState({keyword:e})}},{key:"render",value:function(){var e=this;return Object(w.jsxs)(o.a,{children:[Object(w.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",rel:"stylesheet"}),Object(w.jsxs)("div",{className:"Manichino",children:[Object(w.jsx)("header",{children:Object(w.jsx)(C,{keyword:this.state.keyword,chan:function(t){return e.changeKeyword(t)}})}),Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col-md-12",children:Object(w.jsxs)(d.c,{children:[Object(w.jsx)(d.a,{exact:!0,path:"/",component:function(){return Object(w.jsx)(A,{keyRecieved:e.state.keyword})}}),Object(w.jsx)(d.a,{path:"/model-profile",component:S}),Object(w.jsx)(d.a,{path:"/models",component:A})]})})})})]})]})}}]),c}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(w.jsx)(o.a,{children:Object(w.jsx)(B,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,t,c){},73:function(e,t,c){},99:function(e,t,c){}},[[101,1,2]]]);
//# sourceMappingURL=main.9473bfb2.chunk.js.map