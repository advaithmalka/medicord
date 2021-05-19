(this["webpackJsonpmedicord-client"]=this["webpackJsonpmedicord-client"]||[]).push([[0],{94:function(e,t,a){},95:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var c,s=a(0),n=a.n(s),r=a(28),o=a.n(r),i=a(18),l=a(16),j=a(17),d=a(15),b="https://medicord-server.herokuapp.com/",h=a(102),u=a(109),m=a(106),x=a(103),O=a(104),p=a(26),g=a(27),f=a(46),S=a(3),N=localStorage.getItem("medicord-token"),y=!1;N&&(y=!0,1e3*(c=Object(f.a)(N)).exp<Date.now()&&(localStorage.removeItem("medicord-token"),y=!1));var v=Object(s.createContext)({user:null,loginUser:function(){},logoutUser:function(){}}),w=function(e,t){switch(t.type){case"LOGIN_USER":return Object(j.a)(Object(j.a)({},e),{},{user:t.payload});case"LOGOUT_USER":return Object(j.a)(Object(j.a)({},e),{},{user:null});default:return e}},C=function(e){var t=Object(s.useReducer)(w,{user:y?c:null}),a=Object(d.a)(t,2),n=a[0],r=a[1];return Object(S.jsx)(v.Provider,Object(j.a)(Object(j.a)({value:{user:n.user,loginUser:function(e){localStorage.setItem("medicord-token",e.token),r({type:"LOGIN_USER",payload:e})},logoutUser:function(){localStorage.removeItem("medicord-token"),r({type:"LOGOUT_USER"})}}},e),{},{children:e.children}))};function F(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),a=t[0],c=(t[1],Object(l.g)()),n=Object(s.useState)({email:"",password:"",confirmPassword:""}),r=Object(d.a)(n,2),o=r[0],f=r[1],N=Object(s.useContext)(v);function y(e){if(e.preventDefault(),o.password!==o.confirmPassword)return alert("Please make sure the password and re-enter password fields match.");var t={email:o.email,password:o.password};fetch("".concat(b,"signup"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){N.loginUser(e),c.push("/dashboard")})).catch((function(e){return console.log(e)}))}return Object(S.jsx)(h.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"calc(100vh - 56px)",marginTop:"auto",marginBottom:"auto"},children:Object(S.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(S.jsx)(u.a,{className:"form-card shadow-xl",id:"hospital",children:Object(S.jsxs)(u.a.Body,{children:[Object(S.jsx)("h3",{className:"text-center",children:"Sign Up"}),Object(S.jsxs)(m.a,{onSubmit:y,children:[Object(S.jsxs)(m.a.Group,{children:[Object(S.jsx)(m.a.Label,{children:"Email Address"}),Object(S.jsxs)(x.a,{children:[Object(S.jsx)(x.a.Prepend,{children:Object(S.jsx)(x.a.Text,{children:Object(S.jsx)(p.a,{icon:g.e})})}),Object(S.jsx)(m.a.Control,{type:"email",placeholder:"Email address",value:o.email,onChange:function(e){return f(Object(j.a)(Object(j.a)({},o),{},{email:e.target.value}))},required:!0})]})]}),Object(S.jsxs)(m.a.Group,{children:[Object(S.jsx)(m.a.Label,{children:"Password"}),Object(S.jsxs)(x.a,{children:[Object(S.jsx)(x.a.Prepend,{children:Object(S.jsx)(x.a.Text,{children:Object(S.jsx)(p.a,{icon:g.d})})}),Object(S.jsx)(m.a.Control,{type:"password",placeholder:"Enter password",value:o.password,onChange:function(e){return f(Object(j.a)(Object(j.a)({},o),{},{password:e.target.value}))},required:!0})]})]}),Object(S.jsxs)(m.a.Group,{children:[Object(S.jsx)(m.a.Label,{children:"Confirm Password"}),Object(S.jsxs)(x.a,{children:[Object(S.jsx)(x.a.Prepend,{children:Object(S.jsx)(x.a.Text,{children:Object(S.jsx)(p.a,{icon:g.a})})}),Object(S.jsx)(m.a.Control,{type:"password",placeholder:"Re-enter password",value:o.confirmPassword,onChange:function(e){return f(Object(j.a)(Object(j.a)({},o),{},{confirmPassword:e.target.value}))},required:!0})]})]}),Object(S.jsx)("p",{className:"text-danger",children:a&&a}),Object(S.jsx)(O.a,{onClick:y,type:"submit",className:"w-100 text-center shadow-sm",children:"Sign Up"})]}),Object(S.jsxs)("p",{className:"text-center mt-3 mb-0",children:["Already have an account?"," ",Object(S.jsx)(i.b,{to:"/login",className:"text-danger",children:Object(S.jsx)("b",{children:"Log In"})})]})]})})})})}var I=a(30),L=a.n(I),A=a(39);function Y(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),a=t[0],c=(t[1],Object(s.useState)("")),n=Object(d.a)(c,2),r=n[0],o=n[1],j=Object(s.useState)(!1),f=Object(d.a)(j,2),N=f[0],y=f[1],w=Object(s.useState)(""),C=Object(d.a)(w,2),F=C[0],I=C[1],Y=Object(s.useContext)(v),K=Object(l.g)();function V(){return(V=Object(A.a)(L.a.mark((function e(t){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),y(!0),a={email:r,password:F},fetch("".concat(b,"login"),{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){switch(console.log(e),y(!1),e.error){case"INVALID_PASSWORD":return alert("Error: Invalid password!");case"NOT_FOUND":return alert("Error: User does not exist!")}Y.loginUser(e),K.push("/dashboard")}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(S.jsx)(h.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"calc(100vh - 56px)",marginTop:"auto",marginBottom:"auto"},children:Object(S.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(S.jsx)(u.a,{className:"form-card shadow-xl",id:"hospital",children:Object(S.jsxs)(u.a.Body,{children:[Object(S.jsx)("h3",{className:"text-center",children:"Log In"}),Object(S.jsxs)(m.a,{onSubmit:function(e){return V.apply(this,arguments)},children:[Object(S.jsxs)(m.a.Group,{children:[Object(S.jsx)(m.a.Label,{children:"Email Address"}),Object(S.jsxs)(x.a,{children:[Object(S.jsx)(x.a.Prepend,{children:Object(S.jsx)(x.a.Text,{children:Object(S.jsx)(p.a,{icon:g.e})})}),Object(S.jsx)(m.a.Control,{type:"email",placeholder:"Email address",value:r,onChange:function(e){return o(e.target.value)},required:!0})]})]}),Object(S.jsxs)(m.a.Group,{children:[Object(S.jsx)(m.a.Label,{children:"Password"}),Object(S.jsxs)(x.a,{children:[Object(S.jsx)(x.a.Prepend,{children:Object(S.jsx)(x.a.Text,{children:Object(S.jsx)(p.a,{icon:g.d})})}),Object(S.jsx)(m.a.Control,{type:"password",placeholder:"Enter password",value:F,onChange:function(e){return I(e.target.value)},required:!0})]})]}),Object(S.jsx)("p",{className:"text-danger",children:a&&a}),Object(S.jsx)(O.a,{type:"submit",className:"w-100 text-center shadow-sm mt-1 mb-1",children:N?Object(S.jsx)("div",{className:"lit-spinner text-center mx-auto"}):"Log In"})]}),Object(S.jsxs)("p",{className:"text-center mt-2 mb-0",children:["Need an account?"," ",Object(S.jsx)(i.b,{to:"/signup",className:"text-danger font-bold",children:"Sign Up"})]})]})})})})}var K=a(108),V=a(107),k=function(){var e;return localStorage.getItem("medicord-token")&&(e=Object(f.a)(localStorage.getItem("medicord-token"))),e||null};function U(){var e=Object(s.useContext)(v),t=Object(s.useState)(k()),a=Object(d.a)(t,2),c=a[0],n=a[1];return Object(s.useEffect)((function(){n(k())}),[e.user]),Object(S.jsxs)(K.a,{expand:"lg",className:"shadow-sm",children:[Object(S.jsx)(i.b,{to:c?"/dashboard":"/",children:Object(S.jsx)(K.a.Brand,{children:Object(S.jsx)("img",{className:"nav-logo d-inline-block align-top",src:"data:image/png;base64,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",alt:"MediCord Logo"})})}),Object(S.jsx)(K.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(S.jsx)(K.a.Collapse,{id:"basic-navbar-nav",children:Object(S.jsx)(V.a,{className:"ml-auto",children:c?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(i.b,{className:"nav-link",to:"/dashboard",children:c.email}),Object(S.jsx)("div",{className:"nav-link logout-link",onClick:e.logoutUser,children:"Log Out"})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(i.b,{className:"nav-link",to:"/login",children:"Login"}),Object(S.jsx)(i.b,{className:"nav-link",to:"/signup",children:"Sign Up"})]})})})]})}var T=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:"landing-page",children:[" ",Object(S.jsxs)(h.a,{className:"text-left text-xl landing-container",children:[Object(S.jsxs)("div",{className:"landing-text",children:[Object(S.jsx)("h1",{className:"text-7xl mb-3",children:Object(S.jsxs)("span",{className:"logo-theme",children:[Object(S.jsx)("span",{children:"M"}),"edi",Object(S.jsx)("span",{children:"C"}),"ord"]})}),Object(S.jsx)("p",{className:"mb-4",children:"Letting you get the most out of your conversations with medical professionals."}),Object(S.jsx)(i.b,{to:"/signup",className:"btn btn-primary px-3",children:"Sign Up"})]}),Object(S.jsx)("div",{className:"landing-img"})]})]}),Object(S.jsx)(h.a,{className:"text-center",children:Object(S.jsxs)("div",{className:"footer-logo pb-4 mt-7",children:[Object(S.jsxs)("strong",{className:"text-lg",children:[Object(S.jsx)("span",{children:"M"}),"edi",Object(S.jsx)("span",{children:"C"}),"ord"]}),Object(S.jsx)("br",{}),Object(S.jsxs)("em",{className:"text-sm",children:["by"," ",Object(S.jsx)("a",{href:"https://advaithmalka.github.io/",target:"_blank",children:"Advaith Malka"}),","," ",Object(S.jsx)("a",{href:"https://realtechnerd.github.io/",target:"_blank",children:"Nithil Krishnaraj"}),", and"," ",Object(S.jsx)("a",{href:"https://sritanmotati.github.io/",target:"_blank",children:"Sritan Motati"})]})]})})]})},R=a(105),M=a(61),J=a.n(M),Q=a(62),G=a.n(Q),q=a(68);var W=function(e){var t=e.data,a=Object(s.useState)(!1),c=Object(d.a)(a,2),n=c[0],r=c[1];return Object(S.jsxs)("div",{children:[Object(S.jsx)(u.a,{className:"shadow-md border-none mb-4",children:Object(S.jsxs)(u.a.Body,{children:[Object(S.jsxs)("div",{className:"block overflow-hidden text-center",children:[Object(S.jsx)(u.a.Text,{className:"md:float-left",children:Object(S.jsx)("small",{className:"text-muted",children:J()(t.date).format("MM/DD/YY")})}),Object(S.jsx)(q.a,{delay:[200,0],content:"View transcript",children:Object(S.jsx)("button",{className:"btn btn-light md:float-right rounded-full mr-1",onClick:function(){return r(!0)},children:Object(S.jsx)(p.a,{icon:g.c})})})]}),Object(S.jsx)("h4",{children:t.title})]})},t.idx),Object(S.jsxs)(R.a,{show:n,onHide:function(){return r(!1)},children:[Object(S.jsx)(R.a.Header,{closeButton:!0,children:Object(S.jsx)(R.a.Title,{children:t.title})}),Object(S.jsxs)(R.a.Body,{children:[Object(S.jsx)("strong",{children:"Transcript:"}),Object(S.jsx)(G.a,{text:t.transcription,readMoreText:"...Read More"}),Object(S.jsx)("br",{}),Object(S.jsx)("strong",{children:"Summary:"}),Object(S.jsx)(G.a,{text:t.summary,readMoreText:"...Read More"})]}),Object(S.jsx)(R.a.Footer,{children:Object(S.jsx)(u.a.Text,{className:"float-right align-right",children:Object(S.jsx)("small",{className:"text-muted",children:J()(t.date).format("MM/DD/YY")})})})]})]})};var Z=function(){var e=Object(s.useContext)(v),t=Object(s.useState)(e.user),a=Object(d.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(),o=Object(d.a)(r,2),l=o[0],u=o[1],m=function(){var e=Object(A.a)(L.a.mark((function e(){var t,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"sessions/all/").concat(k().id));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,u(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){n(k()),m()}),[e.user]),Object(S.jsxs)(h.a,{children:[Object(S.jsxs)("h1",{className:"mt-20 text-center mb-8",children:["Welcome",c&&c?", ":"",Object(S.jsx)("span",{className:"text-3xl text-red-500 font-semibold",children:c.email?c.email.split("@")[0]:""}),"."]}),Object(S.jsx)("hr",{}),Object(S.jsxs)("div",{className:"mb-0.5 block overflow-hidden text-center",children:[Object(S.jsx)("p",{className:"md:float-left text-3xl mt-2",children:Object(S.jsx)("b",{children:"Your Sessions"})}),Object(S.jsx)(i.b,{to:"/dashboard/add",children:Object(S.jsx)("button",{id:"addSession-btn",className:"btn btn-danger md:float-right my-2 mr-1",children:Object(S.jsxs)("b",{id:"addSession-btn-text",className:"text-base align-text-top",children:[" ","Add Session"]})})})]}),Object(S.jsx)("div",{className:"sessions mb-10 block",children:l?l.map((function(e,t){return Object(S.jsx)(W,{data:Object(j.a)(Object(j.a)({},e),{},{idx:t})},t)})):Object(S.jsx)("div",{className:"text-center",children:Object(S.jsx)("img",{src:"https://icg.llc/Content/img/loading.gif",alt:"Loader",className:"text-center mr-auto ml-auto mt-2"})})})]})},H=a(69),B=(a(92),H.a.initializeApp({apiKey:"AIzaSyA4Vn7ZUph5YNxjkjXz7A2LeP12MW2ix6I",authDomain:"medicord-bfd24.firebaseapp.com",projectId:"medicord-bfd24",storageBucket:"medicord-bfd24.appspot.com",messagingSenderId:"500139354346",appId:"1:500139354346:web:8a0a401a1716ff76248f93"})),E=B.storage();var z=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(l.g)(),r=Object(s.useState)(""),o=Object(d.a)(r,2),j=o[0],u=o[1],O=Object(s.useState)(!1),f=Object(d.a)(O,2),N=f[0],y=f[1],v=Object(s.useState)(40),w=Object(d.a)(v,2),C=w[0],F=w[1];return Object(S.jsxs)(h.a,{className:"pt-20",children:[Object(S.jsxs)(i.b,{to:"/dashboard",className:"text-black hover:no-underline hover:text-black",children:[Object(S.jsx)(p.a,{icon:g.b})," Go Back"]}),Object(S.jsx)("h1",{className:"mb-3 mt-2",children:"Create Session"}),Object(S.jsx)("br",{}),Object(S.jsxs)(m.a,{onSubmit:function(e){if(e.preventDefault(),a){var t=E.ref(k().email).child(a.name).put(a);t.on("on",Object(A.a)(L.a.mark((function e(){var a,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,t.snapshot.ref.getDownloadURL();case 3:a=e.sent,c={url:a,id:k().id,title:j,percent:Math.ceil(C)},fetch("".concat(b,"upload"),{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),y(!1),n.push("/dashboard")})).catch(console.error);case 6:case"end":return e.stop()}}),e)}))))}},className:"mb-10",children:[Object(S.jsxs)(m.a.Group,{children:[Object(S.jsx)(m.a.Label,{children:"Title"}),Object(S.jsx)(x.a,{children:Object(S.jsx)(m.a.Control,{type:"text",placeholder:"Enter a title",value:j,onChange:function(e){return u(e.target.value)},required:!0})})]}),Object(S.jsxs)(m.a.Group,{className:"d-flex",children:[Object(S.jsx)(m.a.Label,{children:"% of Transcript in Summary: "}),Object(S.jsx)(x.a,{children:Object(S.jsx)(m.a.Control,{type:"number",placeholder:"ex. 50",value:C,onChange:function(e){return F(e.target.value)},required:!0})})]}),Object(S.jsx)(m.a.Label,{children:"File"}),Object(S.jsxs)("div",{className:"custom-file",children:[Object(S.jsx)("input",{onChange:function(e){c(e.target.files[0])},type:"file",className:"custom-file-input",id:"customFile",accept:"audio/*",required:!0}),Object(S.jsx)("label",{className:"custom-file-label",htmlFor:"customFile",children:a?a.name:"Choose file"}),Object(S.jsx)("button",{type:"submit",className:"btn btn-danger mt-3",children:N?Object(S.jsx)("div",{className:"lit-spinner text-center mx-auto"}):"Upload audio"})]})]})]})},D=a(70);function P(e){var t=e.component,a=Object(D.a)(e,["component"]),c=Object(s.useContext)(v);return Object(S.jsx)(l.b,Object(j.a)(Object(j.a)({},a),{},{render:function(e){return c.user?Object(S.jsx)(t,Object(j.a)({},e)):Object(S.jsx)(l.a,{to:"/login"})}}))}a(93);var X=function(){return fetch("".concat(b)),Object(S.jsx)(C,{children:Object(S.jsxs)(i.a,{basename:"/medicord",children:[Object(S.jsx)(U,{}),Object(S.jsxs)(l.d,{children:[Object(S.jsx)(P,{path:"/dashboard",exact:!0,component:Z}),Object(S.jsx)(P,{path:"/dashboard/add",exact:!0,component:z}),Object(S.jsx)(l.b,{path:"/",exact:!0,component:T}),Object(S.jsx)(l.b,{path:"/signup",exact:!0,component:F}),Object(S.jsx)(l.b,{path:"/login",exact:!0,component:Y})]})]})})};a(94),a(95),a(96);o.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(X,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.49867727.chunk.js.map