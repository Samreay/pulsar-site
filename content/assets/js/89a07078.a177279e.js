"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[21655],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,d=p["".concat(i,".").concat(h)]||p[h]||m[h]||n;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),o=a(86010);const n="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(n,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(87462),o=a(67294),n=a(86010),l=a(72389),s=a(67392),i=a(7094),c=a(12466);const u="tabList__CuJ",m="tabItem_LNqP";function p(e){var t;const{lazy:a,block:l,defaultValue:p,values:h,groupId:d,className:f}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=h??g.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),v=(0,s.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:S}=(0,i.U)(),[w,N]=(0,o.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=d){const e=k[d];null!=e&&e!==w&&b.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,a=C.indexOf(t),r=b[a].value;r!==w&&(O(t),N(r),null!=d&&S(d,String(r)))},j=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;a=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;a=C[t]??C[C.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,n.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},f)},b.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:j,onFocus:E,onClick:E},l,{className:(0,n.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,o.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,l.Z)();return o.createElement(p,(0,r.Z)({key:String(t)},e))}},24726:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(87462),o=(a(67294),a(3905));a(65488),a(85162);const n={id:"develop-schema",title:"Custom schema storage",sidebar_label:"Custom schema storage",original_id:"develop-schema"},l=void 0,s={unversionedId:"develop-schema",id:"develop-schema",title:"Custom schema storage",description:"By default, Pulsar stores data type schemas in Apache BookKeeper (which is deployed alongside Pulsar). You can, however, use another storage system if you wish. This doc walks you through creating your own schema storage implementation.",source:"@site/docs/develop-schema.md",sourceDirName:".",slug:"/develop-schema",permalink:"/docs/next/develop-schema",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/develop-schema.md",tags:[],version:"current",frontMatter:{id:"develop-schema",title:"Custom schema storage",sidebar_label:"Custom schema storage",original_id:"develop-schema"}},i={},c=[{value:"SchemaStorage interface",id:"schemastorage-interface",level:2},{value:"SchemaStorageFactory interface",id:"schemastoragefactory-interface",level:2},{value:"Deployment",id:"deployment",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, Pulsar stores data type ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/concepts-schema-registry"},"schemas")," in ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org"},"Apache BookKeeper")," (which is deployed alongside Pulsar). You can, however, use another storage system if you wish. This doc walks you through creating your own schema storage implementation."),(0,o.kt)("p",null,"To use a non-default (i.e. non-BookKeeper) storage system for Pulsar schemas, you need to implement two Java interfaces: ",(0,o.kt)("a",{parentName:"p",href:"#schemastorage-interface"},(0,o.kt)("inlineCode",{parentName:"a"},"SchemaStorage"))," and ",(0,o.kt)("a",{parentName:"p",href:"#schemastoragefactory-interface"},(0,o.kt)("inlineCode",{parentName:"a"},"SchemaStorageFactory")),"."),(0,o.kt)("h2",{id:"schemastorage-interface"},"SchemaStorage interface"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaStorage")," interface has the following methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface SchemaStorage {\n    // How schemas are updated\n    CompletableFuture<SchemaVersion> put(String key, byte[] value, byte[] hash);\n\n    // How schemas are fetched from storage\n    CompletableFuture<StoredSchema> get(String key, SchemaVersion version);\n\n    // How schemas are deleted\n    CompletableFuture<SchemaVersion> delete(String key);\n\n    // Utility method for converting a schema version byte array to a SchemaVersion object\n    SchemaVersion versionFromBytes(byte[] version);\n\n    // Startup behavior for the schema storage client\n    void start() throws Exception;\n\n    // Shutdown behavior for the schema storage client\n    void close() throws Exception;\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For a full-fledged example schema storage implementation, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/schema/BookkeeperSchemaStorage.java"},(0,o.kt)("inlineCode",{parentName:"a"},"BookKeeperSchemaStorage"))," class.")),(0,o.kt)("h2",{id:"schemastoragefactory-interface"},"SchemaStorageFactory interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface SchemaStorageFactory {\n    @NotNull\n    SchemaStorage create(PulsarService pulsar) throws Exception;\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For a full-fledged example schema storage factory implementation, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/schema/BookkeeperSchemaStorageFactory.java"},(0,o.kt)("inlineCode",{parentName:"a"},"BookKeeperSchemaStorageFactory"))," class.")),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"To use your custom schema storage implementation, you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Package the implementation in a JAR file."),(0,o.kt)("li",{parentName:"ol"},"Add that JAR file to the ",(0,o.kt)("inlineCode",{parentName:"li"},"lib")," folder in your Pulsar distribution."),(0,o.kt)("li",{parentName:"ol"},"Change the ",(0,o.kt)("inlineCode",{parentName:"li"},"schemaRegistryStorageClassName")," configuration in ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/reference-configuration#broker"},(0,o.kt)("inlineCode",{parentName:"a"},"broker.conf"))," to your custom factory class (i.e. the ",(0,o.kt)("inlineCode",{parentName:"li"},"SchemaStorageFactory")," implementation, not the ",(0,o.kt)("inlineCode",{parentName:"li"},"SchemaStorage")," implementation)."),(0,o.kt)("li",{parentName:"ol"},"Start up Pulsar.")))}m.isMDXComponent=!0}}]);