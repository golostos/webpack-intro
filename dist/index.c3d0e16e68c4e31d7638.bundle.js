"use strict";(self.webpackChunkwebpack_intro=self.webpackChunkwebpack_intro||[]).push([[826],{366:(e,n,r)=>{var t=r(294),l=r(745),a=r(379),o=r.n(a),s=r(795),u=r.n(s),c=r(569),i=r.n(c),m=r(565),f=r.n(m),d=r(216),g=r.n(d),E=r(589),h=r.n(E),p=r(424),y={};y.styleTagTransform=h(),y.setAttributes=f(),y.insert=i().bind(null,"head"),y.domAPI=u(),y.insertStyleElement=g(),o()(p.Z,y),p.Z&&p.Z.locals&&p.Z.locals;var w=r(648).Z.create({baseURL:"/api",timeout:5e3}),v=r(477),b=function(){var e=(0,v.a)({queryKey:["message"],queryFn:function(){return w.get("hello").then((function(e){return e.data}))}}),n=e.data,r=e.error;return e.refetch,{message:n,error:r}};const C=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e);var n=b(),r=n.error,l=n.message;return t.createElement("div",null,t.createElement("h2",null,"Message 1 Comp"),t.createElement("h3",null,"Message from server:"),r?t.createElement("h4",null,r.message):null,t.createElement("h4",null,l||"loading..."))},k=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e);var n=b(),r=n.error,l=n.message;return t.createElement("div",null,t.createElement("h2",null,"Message 2 Comp"),t.createElement("h3",null,"Message from server:"),r?t.createElement("h4",null,r.message):null,t.createElement("h4",null,l||"loading..."))},M=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),t.createElement(t.Fragment,null,t.createElement(C,null),t.createElement(k,null))};var S=r(488),Z=r(945),T=r(41),F=new S.S;l.createRoot(document.getElementById("root")).render(t.createElement(t.StrictMode,null,t.createElement(Z.aH,{client:F},t.createElement(M,null),t.createElement(T.t,{initialIsOpen:!0}))))},424:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(81),l=r.n(t),a=r(645),o=r.n(a)()(l());o.push([e.id,"body {\r\n    margin: 0;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\r\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\r\n      sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\ncode {\r\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\r\n        monospace;\r\n}\r\n",""]);const s=o}},e=>{e.O(0,[216],(()=>(366,e(e.s=366)))),e.O()}]);