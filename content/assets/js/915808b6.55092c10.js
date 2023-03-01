"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[81478],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(o,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),i=n(72389),s=n(67392),o=n(7094),p=n(12466);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function d(e){const{lazy:t,block:n,defaultValue:i,values:d,groupId:m,className:u}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,s.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,o.U)(),[b,v]=(0,r.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=m){const e=N[m];null!=e&&e!==b&&k.some((t=>t.value===e))&&v(e)}const w=e=>{const t=e.currentTarget,n=x.indexOf(t),a=k[n].value;a!==b&&(C(t),v(a),null!=m&&y(m,String(a)))},P=e=>{let t=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},u)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>x.push(e),onKeyDown:P,onClick:w},i,{className:(0,l.Z)("tabs__item",c.tabItem,i?.className,{"tabs__item--active":b===t})}),n??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},57058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));n(65488),n(85162);const l={id:"client-libraries-python",title:"Pulsar Python client",sidebar_label:"Python"},i=void 0,s={unversionedId:"client-libraries-python",id:"version-2.11.x/client-libraries-python",title:"Pulsar Python client",description:"You can use a Pulsar Python client to create producers, consumers, and readers. For Pulsar features that Python clients support, see Client Feature Matrix.",source:"@site/versioned_docs/version-2.11.x/client-libraries-python.md",sourceDirName:".",slug:"/client-libraries-python",permalink:"/docs/2.11.x/client-libraries-python",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/client-libraries-python.md",tags:[],version:"2.11.x",frontMatter:{id:"client-libraries-python",title:"Pulsar Python client",sidebar_label:"Python"},sidebar:"docsSidebar",previous:{title:"Go",permalink:"/docs/2.11.x/client-libraries-go"},next:{title:"C++",permalink:"/docs/2.11.x/client-libraries-cpp"}},o={},p=[{value:"Installation",id:"installation",level:2},{value:"Connection URLs",id:"connection-urls",level:2},{value:"API reference",id:"api-reference",level:2},{value:"Release notes",id:"release-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Producer example",id:"producer-example",level:3},{value:"Consumer example",id:"consumer-example",level:3},{value:"Reader interface example",id:"reader-interface-example",level:3},{value:"Multi-topic subscriptions",id:"multi-topic-subscriptions",level:3},{value:"Create a Python client with multiple advertised listeners",id:"create-a-python-client-with-multiple-advertised-listeners",level:3},{value:"Schema",id:"schema",level:2},{value:"Supported schema types",id:"supported-schema-types",level:3},{value:"Schema definition reference",id:"schema-definition-reference",level:3},{value:"Fields parameters",id:"fields-parameters",level:4},{value:"Schema definition examples",id:"schema-definition-examples",level:4},{value:"Simple definition",id:"simple-definition",level:5},{value:"Using enums",id:"using-enums",level:5},{value:"Complex types",id:"complex-types",level:5},{value:"Set namespace for Avro schema",id:"set-namespace-for-avro-schema",level:5},{value:"Declare and validate schema",id:"declare-and-validate-schema",level:3},{value:"End-to-end encryption",id:"end-to-end-encryption",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use a Pulsar Python client to create producers, consumers, and readers. For Pulsar features that Python clients support, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1YHYTkIXR8-Ql103u-IMI18TXLlGStK8uJjDsOOA0T20/edit#gid=1784579914"},"Client Feature Matrix"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://pip.pypa.io/"},"pip")," to install the latest version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install 'pulsar-client==2.11.0'\n")),(0,r.kt)("p",null,"You can install optional components alongside the client library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# avro serialization\npip install 'pulsar-client[avro]==2.11.0'\n\n# functions runtime\npip install 'pulsar-client[functions]==2.11.0'\n\n# all optional components\npip install 'pulsar-client[all]==2.11.0'\n")),(0,r.kt)("p",null,"Installation via PyPi is available for the following Python versions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Platform"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported Python versions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"macOS (>= 11.0)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.7, 3.8, 3.9 and 3.10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Linux (including Alpine Linux)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.7, 3.8, 3.9 and 3.10")))),(0,r.kt)("h2",{id:"connection-urls"},"Connection URLs"),(0,r.kt)("p",null,"To connect to Pulsar using client libraries, you need to specify a ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/developing-binary-protocol"},"Pulsar protocol")," URL."),(0,r.kt)("p",null,"You can assign Pulsar protocol URLs to specific clusters and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar")," scheme. The following is an example of ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," with the default port ",(0,r.kt)("inlineCode",{parentName:"p"},"6650"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6650\n")),(0,r.kt)("p",null,"If you have multiple brokers, separate ",(0,r.kt)("inlineCode",{parentName:"p"},"IP:port")," by commas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6550,localhost:6651,localhost:6652\n")),(0,r.kt)("p",null,"If you use ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/security-tls-authentication"},"mTLS authentication"),", add ",(0,r.kt)("inlineCode",{parentName:"p"},"+ssl")," in the scheme:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"pulsar+ssl://pulsar.us-west.example.com:6651\n")),(0,r.kt)("h2",{id:"api-reference"},"API reference"),(0,r.kt)("p",null,"All the methods in producer, consumer, and reader of Pulsar Python clients are thread-safe. See the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/python/2.11.x"},"API docs")," for more details."),(0,r.kt)("h2",{id:"release-notes"},"Release notes"),(0,r.kt)("p",null,"For the changelog of Pulsar Python clients, see ",(0,r.kt)("a",{parentName:"p",href:"/release-notes/#python"},"release notes"),"."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"You can find a variety of Python code examples for the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client")," library."),(0,r.kt)("h3",{id:"producer-example"},"Producer example"),(0,r.kt)("p",null,"The following example creates a Python producer for the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic")," topic and sends 10 messages on that topic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\n\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('Hello-%d' % i).encode('utf-8'))\n\nclient.close()\n")),(0,r.kt)("h3",{id:"consumer-example"},"Consumer example"),(0,r.kt)("p",null,"The following example creates a consumer with the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-subscription")," subscription name on the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic")," topic, receives incoming messages, prints the content and ID of messages that arrive, and acknowledges each message to the Pulsar broker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\n\nconsumer = client.subscribe('my-topic', 'my-subscription')\n\nwhile True:\n    msg = consumer.receive()\n    try:\n        print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except Exception:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\n\nclient.close()\n")),(0,r.kt)("p",null,"This example shows how to configure negative acknowledgment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from pulsar import Client, schema\nclient = Client('pulsar://localhost:6650')\nconsumer = client.subscribe('negative_acks','test',schema=schema.StringSchema())\nproducer = client.create_producer('negative_acks',schema=schema.StringSchema())\nfor i in range(10):\n    print('send msg \"hello-%d\"' % i)\n    producer.send_async('hello-%d' % i, callback=None)\nproducer.flush()\nfor i in range(10):\n    msg = consumer.receive()\n    consumer.negative_acknowledge(msg)\n    print('receive and nack msg \"%s\"' % msg.data())\nfor i in range(10):\n    msg = consumer.receive()\n    consumer.acknowledge(msg)\n    print('receive and ack msg \"%s\"' % msg.data())\ntry:\n    # No more messages expected\n    msg = consumer.receive(100)\nexcept:\n    print(\"no more msg\")\n    pass\n")),(0,r.kt)("h3",{id:"reader-interface-example"},"Reader interface example"),(0,r.kt)("p",null,"You can use the Pulsar Python API to use the Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/concepts-clients#reader-interface"},"reader interface"),". Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# MessageId taken from a previously fetched message\nmsg_id = msg.message_id()\n\nreader = client.create_reader('my-topic', msg_id)\n\nwhile True:\n    msg = reader.read_next()\n    print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n    # No acknowledgment\n")),(0,r.kt)("h3",{id:"multi-topic-subscriptions"},"Multi-topic subscriptions"),(0,r.kt)("p",null,"In addition to subscribing a consumer to a single Pulsar topic, you can also subscribe to multiple topics simultaneously. To use multi-topic subscriptions, you can supply a regular expression (regex) or a ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," of topics. If you select topics via regex, all topics must be within the same Pulsar namespace."),(0,r.kt)("p",null,"The following is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import re\nconsumer = client.subscribe(re.compile('persistent://public/default/topic-*'), 'my-subscription')\nwhile True:\n    msg = consumer.receive()\n    try:\n        print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except Exception:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\nclient.close()\n")),(0,r.kt)("h3",{id:"create-a-python-client-with-multiple-advertised-listeners"},"Create a Python client with multiple advertised listeners"),(0,r.kt)("p",null,"To ensure clients in both internal and external networks can connect to a Pulsar cluster, Pulsar introduces ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/concepts-multiple-advertised-listeners"},"advertisedListeners"),"."),(0,r.kt)("p",null,"The following example creates a Python client using multiple advertised listeners:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650', listener_name='external')\n")),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("h3",{id:"supported-schema-types"},"Supported schema types"),(0,r.kt)("p",null,"You can use different built-in schema types in Pulsar. All the definitions are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar.schema")," package."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Schema"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BytesSchema")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the raw payload as a ",(0,r.kt)("inlineCode",{parentName:"td"},"bytes")," object. No serialization/deserialization are performed. This is the default schema mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"StringSchema")),(0,r.kt)("td",{parentName:"tr",align:null},"Encode/decode payload as a UTF-8 string. Uses ",(0,r.kt)("inlineCode",{parentName:"td"},"str")," objects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"JsonSchema")),(0,r.kt)("td",{parentName:"tr",align:null},"Require record definition. Serializes the record into standard JSON payload")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AvroSchema")),(0,r.kt)("td",{parentName:"tr",align:null},"Require record definition. Serializes in AVRO format")))),(0,r.kt)("h3",{id:"schema-definition-reference"},"Schema definition reference"),(0,r.kt)("p",null,"The schema definition is done through a class that inherits from ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar.schema.Record"),"."),(0,r.kt)("p",null,"This class has a number of fields that can be of either ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar.schema.Field")," type or another nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),". All the fields are specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar.schema")," package. The fields are matching the AVRO field types."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Python Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Integer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Long")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Float")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Double")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Bytes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"list")),(0,r.kt)("td",{parentName:"tr",align:null},"Need to specify record type for items.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Map")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dict")),(0,r.kt)("td",{parentName:"tr",align:null},"Key is always ",(0,r.kt)("inlineCode",{parentName:"td"},"String"),". Need to specify value type.")))),(0,r.kt)("p",null,"Additionally, any Python ",(0,r.kt)("inlineCode",{parentName:"p"},"Enum")," type can be used as a valid field type."),(0,r.kt)("h4",{id:"fields-parameters"},"Fields parameters"),(0,r.kt)("p",null,"When adding a field, you can use these parameters in the constructor."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"Set a default value for the field, such as ",(0,r.kt)("inlineCode",{parentName:"td"},"a = Integer(default=5)"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:null},'Mark the field as "required". It is set in the schema accordingly.')))),(0,r.kt)("h4",{id:"schema-definition-examples"},"Schema definition examples"),(0,r.kt)("h5",{id:"simple-definition"},"Simple definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Example(Record):\n    a = String()\n    b = Integer()\n    c = Array(String())\n    i = Map(String())\n")),(0,r.kt)("h5",{id:"using-enums"},"Using enums"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from enum import Enum\n\nclass Color(Enum):\n    red = 1\n    green = 2\n    blue = 3\n\nclass Example(Record):\n    name = String()\n    color = Color\n")),(0,r.kt)("h5",{id:"complex-types"},"Complex types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class MySubRecord(Record):\n    x = Integer()\n    y = Long()\n    z = String()\n\nclass Example(Record):\n    a = String()\n    sub = MySubRecord()\n")),(0,r.kt)("h5",{id:"set-namespace-for-avro-schema"},"Set namespace for Avro schema"),(0,r.kt)("p",null,"Set the namespace for the Avro Record schema using the special field ",(0,r.kt)("inlineCode",{parentName:"p"},"_avro_namespace"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class NamespaceDemo(Record):\n   _avro_namespace = 'xxx.xxx.xxx'\n   x = String()\n   y = Integer()\n")),(0,r.kt)("p",null,"The schema definition is like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "NamespaceDemo", "namespace": "xxx.xxx.xxx", "type": "record", "fields": [\n    {"name": "x", "type": ["null", "string"]},\n    {"name": "y", "type": ["null", "int"]}\n  ]\n}\n')),(0,r.kt)("h3",{id:"declare-and-validate-schema"},"Declare and validate schema"),(0,r.kt)("p",null,"Before the producer is created, the Pulsar broker validates that the existing topic schema is the correct type and that the format is compatible with the schema definition of a class. If the format of the topic schema is incompatible with the schema definition, an exception occurs in the producer creation."),(0,r.kt)("p",null,"Once a producer is created with a certain schema definition, it only accepts objects that are instances of the declared schema class."),(0,r.kt)("p",null,"Similarly, for a consumer or reader, the consumer returns an object (which is an instance of the schema record class) rather than raw bytes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"consumer = client.subscribe(\n                  topic='my-topic',\n                  subscription_name='my-subscription',\n                  schema=AvroSchema(Example) )\n\nwhile True:\n    msg = consumer.receive()\n    ex = msg.value()\n    try:\n        print(\"Received message a={} b={} c={}\".format(ex.a, ex.b, ex.c))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except Exception:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\n")),(0,r.kt)("p",null,"For more code examples, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/schema-get-started"},"Schema - Get started"),"."),(0,r.kt)("h2",{id:"end-to-end-encryption"},"End-to-end encryption"),(0,r.kt)("p",null,"Pulsar encryption allows applications to encrypt messages at producers and decrypt messages at consumers. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/security-encryption#get-started"},"Get started")," for more details."))}m.isMDXComponent=!0}}]);