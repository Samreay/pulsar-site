(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[16911],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,v=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(v,s(s({ref:t},u),{},{components:r})):n.createElement(v,s({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53184:(e,t,r)=>{"use strict";r.d(t,{Z:()=>N});var n=r(87462),o=r(63366),a=r(67294),s=r(86010),l=r(94780),i=r(44063),c=r(71657),u=r(90948),d=r(1588),p=r(27621);function m(e){return(0,p.Z)("MuiTableHead",e)}(0,d.Z)("MuiTableHead",["root"]);var v=r(85893);const g=["className","component"],f=(0,u.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),b={variant:"head"},y="thead",N=a.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiTableHead"}),{className:a,component:u=y}=r,d=(0,o.Z)(r,g),p=(0,n.Z)({},r,{component:u}),N=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},m,t)})(p);return(0,v.jsx)(i.Z.Provider,{value:b,children:(0,v.jsx)(f,(0,n.Z)({as:u,className:(0,s.Z)(N.root,a),ref:t,role:u===y?null:"rowgroup",ownerState:p},d))})}))},31427:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=r(55063),s=r(87440),l=r.n(s);const i={id:"client-go",title:"Go Client Release Notes",sidebar_label:"Go Client"},c=void 0,u={unversionedId:"client-go",id:"client-go",title:"Go Client Release Notes",description:"",source:"@site/release-notes/client-go.mdx",sourceDirName:".",slug:"/client-go",permalink:"/release-notes/client-go",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/client-go.mdx",tags:[],version:"current",frontMatter:{id:"client-go",title:"Go Client Release Notes",sidebar_label:"Go Client"},sidebar:"releaseNote",previous:{title:"Python Client",permalink:"/release-notes/client-python"},next:{title:"Node.js Client",permalink:"/release-notes/client-node"}},d={},p=[],m={toc:p},v="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(v,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{data:l(),mdxType:"ClientReleaseTable"}))}g.isMDXComponent=!0},87440:e=>{e.exports=[{tagName:"v0.9.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.9.0/",doc:"/docs/client-libraries-go",version:"v0.9.x"},{tagName:"v0.8.1",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.8.1/",doc:"/docs/client-libraries-go",version:"v0.8.x"},{tagName:"v0.8.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.8.0/",doc:"/docs/client-libraries-go",version:""},{tagName:"v0.7.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.7.0/",doc:"/docs/client-libraries-go",version:"v0.7.x"},{tagName:"v0.6.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.6.0/",doc:"/docs/client-libraries-go",version:"v0.6.x"},{tagName:"v0.5.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.5.0/",doc:"/docs/client-libraries-go",version:"v0.5.x"},{tagName:"v0.4.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.4.0/",doc:"/docs/client-libraries-go",version:"v0.4.x"},{tagName:"v0.3.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.3.0/",doc:"/docs/client-libraries-go",version:"v0.3.x"},{tagName:"v0.2.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.2.0/",doc:"/docs/client-libraries-go",version:"v0.2.x"},{tagName:"v0.1.1",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.1.1/",doc:"/docs/client-libraries-go",version:"v0.1.x"},{tagName:"v0.1.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.1.0/",doc:"/docs/client-libraries-go",version:""}]},55063:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(67294),o=r(7906),a=r(295),s=r(53252),l=r(53184),i=r(53816),c=r(95999);function u(e){return n.createElement(o.Z,{size:"small"},n.createElement(l.Z,null,n.createElement(i.Z,null,["Version","Release Note","Documentation"].map((e=>n.createElement(s.Z,{className:"font-bold",sx:{color:"inherit"},key:e},n.createElement(c.Z,null,e)))))),n.createElement(a.Z,null,e.data.map(((e,t)=>n.createElement(i.Z,{key:t,sx:{color:"inherit"}},n.createElement(s.Z,{sx:{color:"inherit"}},e.version),n.createElement(s.Z,{sx:{color:"inherit"}},n.createElement("a",{href:e.releaseNotes},e.tagName)),n.createElement(s.Z,{sx:{color:"inherit"}},n.createElement("a",{href:e.doc},e.vtag," Documentation")))))))}}}]);