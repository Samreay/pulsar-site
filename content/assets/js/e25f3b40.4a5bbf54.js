"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[96582],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88154:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"document-preview",title:"Content Preview"},o=void 0,l={unversionedId:"document-preview",id:"document-preview",title:"Content Preview",description:"This guide explains why and how to preview Pulsar content locally with detailed steps and various examples.",source:"@site/contribute/document-preview.md",sourceDirName:".",slug:"/document-preview",permalink:"/contribute/document-preview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/tree/main/site2/website-next/contribute/document-preview.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1668649388,formattedLastUpdatedAt:"Nov 17, 2022",frontMatter:{id:"document-preview",title:"Content Preview"},sidebar:"sidebarDevelopment",previous:{title:"Writing Syntax",permalink:"/contribute/document-syntax"},next:{title:"Releases",permalink:"/contribute/category/releases"}},s={},p=[{value:"Why preview changes locally?",id:"why-preview-changes-locally",level:2},{value:"How to preview changes locally?",id:"how-to-preview-changes-locally",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Preview documentation changes",id:"preview-documentation-changes",level:3},{value:"Preview Java API document changes",id:"preview-java-api-document-changes",level:3},{value:"Preview website changes",id:"preview-website-changes",level:3},{value:"Stop preview",id:"stop-preview",level:3}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide explains why and how to preview Pulsar content locally with detailed steps and various examples."),(0,r.kt)("h2",{id:"why-preview-changes-locally"},"Why preview changes locally?"),(0,r.kt)("p",null,"It is ",(0,r.kt)("strong",{parentName:"p"},"required")," to preview your changes locally and attach the preview screenshots in your PR description. It brings many benefits, including but not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can test your writings. It's a way to check whether you use the correct ",(0,r.kt)("a",{parentName:"li",href:"/contribute/document-syntax"},"syntax")," and debug issues. You ",(0,r.kt)("strong",{parentName:"li"},"must ensure")," docs can be compiled and published correctly."),(0,r.kt)("li",{parentName:"ul"},"You can get your PR merged more quickly. Reviewers know your changes clearly and can speed up the review process.")),(0,r.kt)("h2",{id:"how-to-preview-changes-locally"},"How to preview changes locally?"),(0,r.kt)("p",null,"Pulsar documentation is built using Docusaurus. To preview your changes as you edit the files, you can run a local development server that serves your website and reflect the latest changes."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To verify docs are built correctly before submitting a contribution, you should set up your local environment to build and display the docs locally."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node >= 16.14"),(0,r.kt)("li",{parentName:"ul"},"Yarn >= 1.5"),(0,r.kt)("li",{parentName:"ul"},"Although you can use Linux, macOS, or Windows to build locally the Pulsar documentation, macOS is the preferred build environment as it offers the most complete support for documentation building.")),(0,r.kt)("h3",{id:"preview-documentation-changes"},"Preview documentation changes"),(0,r.kt)("p",null,"Follow these steps to preview documentation changes on the ",(0,r.kt)("strong",{parentName:"p"},"master")," branch."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change to the working directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd pulsar/site2/website\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to preview changes:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Preview the next version\nsh start.sh\n# Preview historical versions\nsh start.sh [<version-number> ...]\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"By default, a browser window will open at http://localhost:3000 to show the changes."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"alt_text",src:a(73183).Z,width:"936",height:"678"})))),(0,r.kt)("h3",{id:"preview-java-api-document-changes"},"Preview Java API document changes"),(0,r.kt)("p",null,"Follow these steps to preview Java API document changes on the ",(0,r.kt)("strong",{parentName:"p"},"master")," branch."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change to the working directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd pulsar/site2/tools\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to generate the ",(0,r.kt)("inlineCode",{parentName:"p"},".html")," files:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh javadoc-gen.sh\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the target ",(0,r.kt)("inlineCode",{parentName:"p"},".html")," file to preview the updates."),(0,r.kt)("p",{parentName:"li"},"Supposed you change JavaDoc for ",(0,r.kt)("inlineCode",{parentName:"p"},"ConsumerBuilder.java"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd generated-site/api/client/{version}/org/apache/pulsar/client/api/\nopen ConsumerBuilder.html\n")))),(0,r.kt)("h3",{id:"preview-website-changes"},"Preview website changes"),(0,r.kt)("p",null,"Pulsar website changes refer to all the changes made to the Pulsar website, including but not limited to the following pages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pathname:///release-notes/"},"Release Notes page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pathname:///ecosystem"},"Ecosystem page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pathname:///case-studies"},"Case studies page")),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("p",null,"Follow these steps to preview the website changes."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change to the working directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd pulsar-site/site2/website-next\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to preview changes:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," ./preview.sh 2.10.x # more versions\n")))),(0,r.kt)("h3",{id:"stop-preview"},"Stop preview"),(0,r.kt)("p",null,"Switch to your command-line interface and press ",(0,r.kt)("strong",{parentName:"p"},"Control+C"),"."))}u.isMDXComponent=!0},73183:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/website-preview-3e284d8b7c2292bcb606955218a65a23.png"}}]);