"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[11192],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>g});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?t.createElement(g,s(s({ref:n},u),{},{components:r})):t.createElement(g,s({ref:n},u))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},15835:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(87462),a=(r(67294),r(3905));const o={id:"client-libraries-go",title:"Pulsar Go client",sidebar_label:"Go"},s=void 0,i={unversionedId:"client-libraries-go",id:"version-2.11.x/client-libraries-go",title:"Pulsar Go client",description:"You can use a Pulsar Go client to create Pulsar producers, consumers, and readers in Golang. For Pulsar features that Go clients support, see Client Feature Matrix.",source:"@site/versioned_docs/version-2.11.x/client-libraries-go.md",sourceDirName:".",slug:"/client-libraries-go",permalink:"/docs/2.11.x/client-libraries-go",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/client-libraries-go.md",tags:[],version:"2.11.x",frontMatter:{id:"client-libraries-go",title:"Pulsar Go client",sidebar_label:"Go"},sidebar:"docsSidebar",previous:{title:"Java",permalink:"/docs/2.11.x/client-libraries-java"},next:{title:"Python",permalink:"/docs/2.11.x/client-libraries-python"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Use <code>go get</code>",id:"use-go-get",level:3},{value:"Use <code>go module</code>",id:"use-go-module",level:3},{value:"Connection URLs",id:"connection-urls",level:2},{value:"API reference",id:"api-reference",level:2},{value:"Release notes",id:"release-notes",level:2},{value:"Create a client",id:"create-a-client",level:2},{value:"Producers",id:"producers",level:2},{value:"Producer operations",id:"producer-operations",level:3},{value:"Producer Example",id:"producer-example",level:3},{value:"How to use message router in producer",id:"how-to-use-message-router-in-producer",level:4},{value:"How to use chunking in producer",id:"how-to-use-chunking-in-producer",level:4},{value:"How to use schema interface in producer",id:"how-to-use-schema-interface-in-producer",level:4},{value:"How to use delay relative in producer",id:"how-to-use-delay-relative-in-producer",level:4},{value:"How to use Prometheus metrics in producer",id:"how-to-use-prometheus-metrics-in-producer",level:4},{value:"Producer configuration",id:"producer-configuration",level:3},{value:"Consumers",id:"consumers",level:2},{value:"Consumer operations",id:"consumer-operations",level:3},{value:"Create single-topic consumer",id:"create-single-topic-consumer",level:4},{value:"Create regex-topic consumer",id:"create-regex-topic-consumer",level:4},{value:"Create multi-topic consumer",id:"create-multi-topic-consumer",level:4},{value:"Create consumer listener",id:"create-consumer-listener",level:4},{value:"Receive message with timeout",id:"receive-message-with-timeout",level:4},{value:"Use schema in consumer",id:"use-schema-in-consumer",level:4},{value:"How to use Prometheus metrics in consumer",id:"how-to-use-prometheus-metrics-in-consumer",level:4},{value:"Consumer configuration",id:"consumer-configuration",level:3},{value:"Readers",id:"readers",level:2},{value:"Reader operations",id:"reader-operations",level:3},{value:"Reader example",id:"reader-example",level:3},{value:"How to use reader to read &#39;next&#39; message",id:"how-to-use-reader-to-read-next-message",level:4},{value:"Use reader to read specific message",id:"use-reader-to-read-specific-message",level:4},{value:"Reader configuration",id:"reader-configuration",level:3},{value:"Messages",id:"messages",level:2},{value:"TLS encryption and authentication",id:"tls-encryption-and-authentication",level:2},{value:"OAuth2 authentication",id:"oauth2-authentication",level:2}],u={toc:c},p="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(p,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use a Pulsar ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-go"},"Go client")," to create Pulsar ",(0,a.kt)("a",{parentName:"p",href:"#producers"},"producers"),", ",(0,a.kt)("a",{parentName:"p",href:"#consumers"},"consumers"),", and ",(0,a.kt)("a",{parentName:"p",href:"#readers"},"readers")," in Golang. For Pulsar features that Go clients support, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1YHYTkIXR8-Ql103u-IMI18TXLlGStK8uJjDsOOA0T20/edit#gid=1784579914"},"Client Feature Matrix"),"."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"You can install the ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar")," library by using either ",(0,a.kt)("inlineCode",{parentName:"p"},"go get")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"go module"),"."),(0,a.kt)("h3",{id:"use-go-get"},"Use ",(0,a.kt)("inlineCode",{parentName:"h3"},"go get")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the library of Go client to your local environment:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'go get -u "github.com/apache/pulsar-client-go/pulsar"\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import it into your project:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/apache/pulsar-client-go/pulsar"\n')))),(0,a.kt)("h3",{id:"use-go-module"},"Use ",(0,a.kt)("inlineCode",{parentName:"h3"},"go module")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a directory named ",(0,a.kt)("inlineCode",{parentName:"p"},"test_dir")," and change your working directory to it."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir test_dir && cd test_dir\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Write a sample script (such as ",(0,a.kt)("inlineCode",{parentName:"p"},"test_example.go"),") in the ",(0,a.kt)("inlineCode",{parentName:"p"},"test_dir")," directory and write ",(0,a.kt)("inlineCode",{parentName:"p"},"package main")," at the beginning of the file."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init test_dir \ngo mod tidy && go mod download\ngo build test_example.go\n./test_example\n")))),(0,a.kt)("h2",{id:"connection-urls"},"Connection URLs"),(0,a.kt)("p",null,"To connect to Pulsar using client libraries, you need to specify a ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.11.x/developing-binary-protocol"},"Pulsar protocol")," URL."),(0,a.kt)("p",null,"You can assign Pulsar protocol URLs to specific clusters and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar")," scheme. The following is an example of ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," with the default port ",(0,a.kt)("inlineCode",{parentName:"p"},"6650"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6650\n")),(0,a.kt)("p",null,"If you have multiple brokers, separate ",(0,a.kt)("inlineCode",{parentName:"p"},"IP:port")," by commas:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6550,localhost:6651,localhost:6652\n")),(0,a.kt)("p",null,"If you use ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.11.x/security-tls-authentication"},"mTLS authentication"),", add ",(0,a.kt)("inlineCode",{parentName:"p"},"+ssl")," in the scheme:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"pulsar+ssl://pulsar.us-west.example.com:6651\n")),(0,a.kt)("h2",{id:"api-reference"},"API reference"),(0,a.kt)("p",null,"API docs are available on the ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar"},"Godoc")," page."),(0,a.kt)("h2",{id:"release-notes"},"Release notes"),(0,a.kt)("p",null,"For the changelog of Pulsar Go clients, see ",(0,a.kt)("a",{parentName:"p",href:"/release-notes/#go"},"release notes"),"."),(0,a.kt)("h2",{id:"create-a-client"},"Create a client"),(0,a.kt)("p",null,"To interact with Pulsar, you need a ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#Client"},(0,a.kt)("inlineCode",{parentName:"a"},"Client"))," object first. You can create a client object using the ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#NewClient"},(0,a.kt)("inlineCode",{parentName:"a"},"NewClient"))," function, passing in a ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#ClientOptions"},(0,a.kt)("inlineCode",{parentName:"a"},"ClientOptions"))," object. Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "log"\n    "time"\n\n    "github.com/apache/pulsar-client-go/pulsar"\n)\n\nfunc main() {\n    client, err := pulsar.NewClient(pulsar.ClientOptions{\n        URL:               "pulsar://localhost:6650",\n        OperationTimeout:  30 * time.Second,\n        ConnectionTimeout: 30 * time.Second,\n    })\n    if err != nil {\n        log.Fatalf("Could not instantiate Pulsar client: %v", err)\n    }\n\n    defer client.Close()\n}\n')),(0,a.kt)("p",null,"If you have multiple brokers, you can initiate a client object as below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "log"\n    "time"\n    "github.com/apache/pulsar-client-go/pulsar"\n)\n\nfunc main() {\n    client, err := pulsar.NewClient(pulsar.ClientOptions{\n        URL: "pulsar://localhost:6650,localhost:6651,localhost:6652",\n        OperationTimeout:  30 * time.Second,\n        ConnectionTimeout: 30 * time.Second,\n    })\n    if err != nil {\n        log.Fatalf("Could not instantiate Pulsar client: %v", err)\n    }\n\n    defer client.Close()\n}\n')),(0,a.kt)("p",null,"All configurable parameters for ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientOptions")," are ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#ClientOptions"},"here"),"."),(0,a.kt)("h2",{id:"producers"},"Producers"),(0,a.kt)("p",null,"Pulsar producers publish messages to Pulsar topics. You can ",(0,a.kt)("a",{parentName:"p",href:"#producer-configuration"},"configure")," Go producers using a ",(0,a.kt)("inlineCode",{parentName:"p"},"ProducerOptions")," object. Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'producer, err := client.CreateProducer(pulsar.ProducerOptions{\n    Topic: "my-topic",\n})\n\nif err != nil {\n    log.Fatal(err)\n}\n\n_, err = producer.Send(context.Background(), &pulsar.ProducerMessage{\n    Payload: []byte("hello"),\n})\n\ndefer producer.Close()\n\nif err != nil {\n    fmt.Println("Failed to publish message", err)\n}\nfmt.Println("Published message")\n')),(0,a.kt)("h3",{id:"producer-operations"},"Producer operations"),(0,a.kt)("p",null,"All available methods of ",(0,a.kt)("inlineCode",{parentName:"p"},"Producer")," interface are ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#Producer"},"here"),"."),(0,a.kt)("h3",{id:"producer-example"},"Producer Example"),(0,a.kt)("h4",{id:"how-to-use-message-router-in-producer"},"How to use message router in producer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'client, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: "pulsar://localhost:6650",\n})\n\nif err != nil {\n    log.Fatal(err)\n}\ndefer client.Close()\n\nproducer, err := client.CreateProducer(pulsar.ProducerOptions{\n    Topic: "my-partitioned-topic",\n    MessageRouter: func(msg *pulsar.ProducerMessage, tm pulsar.TopicMetadata) int {\n        fmt.Println("Topic has", tm.NumPartitions(), "partitions. Routing message ", msg, " to partition 2.")\n        // always push msg to partition 2\n        return 2\n    },\n})\n\nif err != nil {\n    log.Fatal(err)\n}\ndefer producer.Close()\n\nfor i := 0; i < 10; i++ {\n    if msgId, err := producer.Send(context.Background(), &pulsar.ProducerMessage{\n        Payload: []byte(fmt.Sprintf("message-%d", i)),\n    }); err != nil {\n        log.Fatal(err)\n    } else {\n        log.Println("Published message: ", msgId)\n    }\n}\n\n// subscribe a specific partition of a topic\n// for demos only, not recommend to subscribe a specific partition\nconsumer, err := client.Subscribe(pulsar.ConsumerOptions{\n    // pulsar partition is a special topic has the suffix \'-partition-xx\'\n    Topic:            "my-partitioned-topic-partition-2",\n    SubscriptionName: "my-sub",\n    Type:             pulsar.Shared,\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer consumer.Close()\n\nfor i := 0; i < 10; i++ {\n    msg, err := consumer.Receive(context.Background())\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Printf("Received message msgId: %#v -- content: \'%s\'\\n", msg.ID(), string(msg.Payload()))\n    consumer.Ack(msg)\n}\n')),(0,a.kt)("h4",{id:"how-to-use-chunking-in-producer"},"How to use chunking in producer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'client, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: serviceURL,\n})\n\nif err != nil {\n    log.Fatal(err)\n}\ndefer client.Close()\n\n// The message chunking feature is OFF by default.\n// By default, a producer chunks the large message based on the max message size (`maxMessageSize`) configured at the broker side (for example, 5MB).\n// Client can also configure the max chunked size using the producer configuration `ChunkMaxMessageSize`.\n// Note: to enable chunking, you need to disable batching (`DisableBatching=true`) concurrently.\nproducer, err := client.CreateProducer(pulsar.ProducerOptions{\n  Topic:               "my-topic",\n  DisableBatching:     true,\n  EnableChunking:      true,\n})\n\nif err != nil {\n    log.Fatal(err)\n}\ndefer producer.Close()\n')),(0,a.kt)("h4",{id:"how-to-use-schema-interface-in-producer"},"How to use schema interface in producer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type testJSON struct {\n    ID   int    `json:"id"`\n    Name string `json:"name"`\n}\n\nvar (\n    exampleSchemaDef = "{\\"type\\":\\"record\\",\\"name\\":\\"Example\\",\\"namespace\\":\\"test\\"," +\n        "\\"fields\\":[{\\"name\\":\\"ID\\",\\"type\\":\\"int\\"},{\\"name\\":\\"Name\\",\\"type\\":\\"string\\"}]}"\n)\n\nclient, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: "pulsar://localhost:6650",\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer client.Close()\n\nproperties := make(map[string]string)\nproperties["pulsar"] = "hello"\njsonSchemaWithProperties := pulsar.NewJSONSchema(exampleSchemaDef, properties)\nproducer, err := client.CreateProducer(pulsar.ProducerOptions{\n    Topic:  "jsonTopic",\n    Schema: jsonSchemaWithProperties,\n})\n\nif err != nil {\n    log.Fatal(err)\n}\n\n_, err = producer.Send(context.Background(), &pulsar.ProducerMessage{\n    Value: &testJSON{\n        ID:   100,\n        Name: "pulsar",\n    },\n})\nif err != nil {\n    log.Fatal(err)\n}\nproducer.Close()\n')),(0,a.kt)("h4",{id:"how-to-use-delay-relative-in-producer"},"How to use delay relative in producer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'client, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: "pulsar://localhost:6650",\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer client.Close()\n\ntopicName := "topic-1"\nproducer, err := client.CreateProducer(pulsar.ProducerOptions{\n    Topic:           topicName,\n    DisableBatching: true,\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer producer.Close()\n\nconsumer, err := client.Subscribe(pulsar.ConsumerOptions{\n    Topic:            topicName,\n    SubscriptionName: "subName",\n    Type:             pulsar.Shared,\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer consumer.Close()\n\nID, err := producer.Send(context.Background(), &pulsar.ProducerMessage{\n    Payload:      []byte(fmt.Sprintf("test")),\n    DeliverAfter: 3 * time.Second,\n})\nif err != nil {\n    log.Fatal(err)\n}\nfmt.Println(ID)\n\nctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)\nmsg, err := consumer.Receive(ctx)\nif err != nil {\n    log.Fatal(err)\n}\nfmt.Println(msg.Payload())\ncancel()\n\nctx, cancel = context.WithTimeout(context.Background(), 5*time.Second)\nmsg, err = consumer.Receive(ctx)\nif err != nil {\n    log.Fatal(err)\n}\nfmt.Println(msg.Payload())\ncancel()\n')),(0,a.kt)("h4",{id:"how-to-use-prometheus-metrics-in-producer"},"How to use Prometheus metrics in producer"),(0,a.kt)("p",null,"Pulsar Go client registers client metrics using Prometheus. This section demonstrates how to create a simple Pulsar producer application that exposes Prometheus metrics via HTTP."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Write a simple producer application.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Create a Pulsar client\nclient, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: "pulsar://localhost:6650",\n})\nif err != nil {\n    log.Fatal(err)\n}\n\ndefer client.Close()\n\n// Start a separate goroutine for Prometheus metrics\n// In this case, Prometheus metrics can be accessed via http://localhost:2112/metrics\ngo func() {\n    prometheusPort := 2112\n    log.Printf("Starting Prometheus metrics at http://localhost:%v/metrics\\n", prometheusPort)\n    http.Handle("/metrics", promhttp.Handler())\n    err = http.ListenAndServe(":"+strconv.Itoa(prometheusPort), nil)\n    if err != nil {\n        log.Fatal(err)\n    }\n}()\n\n// Create a producer\nproducer, err := client.CreateProducer(pulsar.ProducerOptions{\n    Topic: "topic-1",\n})\nif err != nil {\n    log.Fatal(err)\n}\n\ndefer producer.Close()\n\nctx := context.Background()\n\n// Write your business logic here\n// In this case, you build a simple Web server. You can produce messages by requesting http://localhost:8082/produce\nwebPort := 8082\nhttp.HandleFunc("/produce", func(w http.ResponseWriter, r *http.Request) {\n    msgId, err := producer.Send(ctx, &pulsar.ProducerMessage{\n        Payload: []byte(fmt.Sprintf("hello world")),\n    })\n    if err != nil {\n        log.Fatal(err)\n    } else {\n        log.Printf("Published message: %v", msgId)\n        fmt.Fprintf(w, "Published message: %v", msgId)\n    }\n})\n\nerr = http.ListenAndServe(":"+strconv.Itoa(webPort), nil)\nif err != nil {\n    log.Fatal(err)\n}\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"To scrape metrics from applications, configure a local running Prometheus instance using a configuration file (",(0,a.kt)("inlineCode",{parentName:"li"},"prometheus.yml"),").")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n- job_name: pulsar-client-go-metrics\n  scrape_interval: 10s\n  static_configs:\n  - targets:\n  - localhost:2112\n")),(0,a.kt)("p",null,"Now you can query Pulsar client metrics on Prometheus."),(0,a.kt)("h3",{id:"producer-configuration"},"Producer configuration"),(0,a.kt)("p",null,"All available options of ",(0,a.kt)("inlineCode",{parentName:"p"},"ProducerOptions")," are ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#ProducerOptions"},"here"),"."),(0,a.kt)("h2",{id:"consumers"},"Consumers"),(0,a.kt)("p",null,"Pulsar consumers subscribe to one or more Pulsar topics and listen for incoming messages produced on that topic/those topics. You can ",(0,a.kt)("a",{parentName:"p",href:"#consumer-configuration"},"configure")," Go consumers using a ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsumerOptions")," object. Here's a basic example that uses channels:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'consumer, err := client.Subscribe(pulsar.ConsumerOptions{\n    Topic:            "topic-1",\n    SubscriptionName: "my-sub",\n    Type:             pulsar.Shared,\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer consumer.Close()\n\nfor i := 0; i < 10; i++ {\n    // may block here\n    msg, err := consumer.Receive(context.Background())\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    fmt.Printf("Received message msgId: %#v -- content: \'%s\'\\n",\n        msg.ID(), string(msg.Payload()))\n\n    consumer.Ack(msg)\n}\n\nif err := consumer.Unsubscribe(); err != nil {\n    log.Fatal(err)\n}\n')),(0,a.kt)("h3",{id:"consumer-operations"},"Consumer operations"),(0,a.kt)("p",null,"All available methods of ",(0,a.kt)("inlineCode",{parentName:"p"},"Consumer")," interface are ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#Consumer"},"here"),"."),(0,a.kt)("h4",{id:"create-single-topic-consumer"},"Create single-topic consumer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'client, err := pulsar.NewClient(pulsar.ClientOptions{URL: "pulsar://localhost:6650"})\nif err != nil {\n    log.Fatal(err)\n}\n\ndefer client.Close()\n\nconsumer, err := client.Subscribe(pulsar.ConsumerOptions{\n    // fill `Topic` field will create a single-topic consumer\n    Topic:            "topic-1",\n    SubscriptionName: "my-sub",\n    Type:             pulsar.Shared,\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer consumer.Close()\n')),(0,a.kt)("h4",{id:"create-regex-topic-consumer"},"Create regex-topic consumer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'client, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: "pulsar://localhost:6650",\n})\ndefer client.Close()\n\ntopicsPattern := "persistent://public/default/topic.*"\nopts := pulsar.ConsumerOptions{\n    // fill `TopicsPattern` field will create a regex consumer\n    TopicsPattern:    topicsPattern,\n    SubscriptionName: "regex-sub",\n}\n\nconsumer, err := client.Subscribe(opts)\nif err != nil {\n    log.Fatal(err)\n}\ndefer consumer.Close()\n')),(0,a.kt)("h4",{id:"create-multi-topic-consumer"},"Create multi-topic consumer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'client, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: "pulsar://localhost:6650",\n})\nif err != nil {\n    log.Fatal(err)\n}\n\ntopics := []string{"topic-1", "topic-2"}\nconsumer, err := client.Subscribe(pulsar.ConsumerOptions{\n    // fill `Topics` field will create a multi-topic consumer\n    Topics:           topics,\n    SubscriptionName: "multi-topic-sub",\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer consumer.Close()\n')),(0,a.kt)("h4",{id:"create-consumer-listener"},"Create consumer listener"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "fmt"\n    "log"\n\n    "github.com/apache/pulsar-client-go/pulsar"\n)\n\nfunc main() {\n    client, err := pulsar.NewClient(pulsar.ClientOptions{URL: "pulsar://localhost:6650"})\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    defer client.Close()\n\n    // we can listen this channel\n    channel := make(chan pulsar.ConsumerMessage, 100)\n\n    options := pulsar.ConsumerOptions{\n        Topic:            "topic-1",\n        SubscriptionName: "my-subscription",\n        Type:             pulsar.Shared,\n        // fill `MessageChannel` field will create a listener\n        MessageChannel: channel,\n    }\n\n    consumer, err := client.Subscribe(options)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    defer consumer.Close()\n\n    // Receive messages from channel. The channel returns a struct `ConsumerMessage` which contains message and the consumer from where\n    // the message was received. It\'s not necessary here since we have 1 single consumer, but the channel could be\n    // shared across multiple consumers as well\n    for cm := range channel {\n        consumer := cm.Consumer\n        msg := cm.Message\n        fmt.Printf("Consumer %s received a message, msgId: %v, content: \'%s\'\\n",\n            consumer.Name(), msg.ID(), string(msg.Payload()))\n\n        consumer.Ack(msg)\n    }\n}\n')),(0,a.kt)("h4",{id:"receive-message-with-timeout"},"Receive message with timeout"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'client, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: "pulsar://localhost:6650",\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer client.Close()\n\ntopic := "test-topic-with-no-messages"\nctx, cancel := context.WithTimeout(context.Background(), 500*time.Millisecond)\ndefer cancel()\n\n// create consumer\nconsumer, err := client.Subscribe(pulsar.ConsumerOptions{\n    Topic:            topic,\n    SubscriptionName: "my-sub1",\n    Type:             pulsar.Shared,\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer consumer.Close()\n\n// receive message with a timeout\nmsg, err := consumer.Receive(ctx)\nif err != nil {\n    log.Fatal(err)\n}\nfmt.Println(msg.Payload())\n')),(0,a.kt)("h4",{id:"use-schema-in-consumer"},"Use schema in consumer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type testJSON struct {\n    ID   int    `json:"id"`\n    Name string `json:"name"`\n}\n\nvar (\n    exampleSchemaDef = "{\\"type\\":\\"record\\",\\"name\\":\\"Example\\",\\"namespace\\":\\"test\\"," +\n        "\\"fields\\":[{\\"name\\":\\"ID\\",\\"type\\":\\"int\\"},{\\"name\\":\\"Name\\",\\"type\\":\\"string\\"}]}"\n)\n\nclient, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: "pulsar://localhost:6650",\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer client.Close()\n\nvar s testJSON\n\nconsumerJS := pulsar.NewJSONSchema(exampleSchemaDef, nil)\nconsumer, err := client.Subscribe(pulsar.ConsumerOptions{\n    Topic:                       "jsonTopic",\n    SubscriptionName:            "sub-1",\n    Schema:                      consumerJS,\n    SubscriptionInitialPosition: pulsar.SubscriptionPositionEarliest,\n})\nif err != nil {\n    log.Fatal(err)\n}\n\nmsg, err := consumer.Receive(context.Background())\nif err != nil {\n    log.Fatal(err)\n}\n\nerr = msg.GetSchemaValue(&s)\nif err != nil {\n    log.Fatal(err)\n}\ndefer consumer.Close()\n')),(0,a.kt)("h4",{id:"how-to-use-prometheus-metrics-in-consumer"},"How to use Prometheus metrics in consumer"),(0,a.kt)("p",null,"In this guide, This section demonstrates how to create a simple Pulsar consumer application that exposes Prometheus metrics via HTTP."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Write a simple consumer application.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Create a Pulsar client\nclient, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: "pulsar://localhost:6650",\n})\nif err != nil {\n    log.Fatal(err)\n}\n\ndefer client.Close()\n\n// Start a separate goroutine for Prometheus metrics\n// In this case, Prometheus metrics can be accessed via http://localhost:2112/metrics\ngo func() {\n    prometheusPort := 2112\n    log.Printf("Starting Prometheus metrics at http://localhost:%v/metrics\\n", prometheusPort)\n    http.Handle("/metrics", promhttp.Handler())\n    err = http.ListenAndServe(":"+strconv.Itoa(prometheusPort), nil)\n    if err != nil {\n        log.Fatal(err)\n    }\n}()\n\n// Create a consumer\nconsumer, err := client.Subscribe(pulsar.ConsumerOptions{\n    Topic:            "topic-1",\n    SubscriptionName: "sub-1",\n    Type:             pulsar.Shared,\n})\nif err != nil {\n    log.Fatal(err)\n}\n\ndefer consumer.Close()\n\nctx := context.Background()\n\n// Write your business logic here\n// In this case, you build a simple Web server. You can consume messages by requesting http://localhost:8083/consume\nwebPort := 8083\nhttp.HandleFunc("/consume", func(w http.ResponseWriter, r *http.Request) {\n    msg, err := consumer.Receive(ctx)\n    if err != nil {\n        log.Fatal(err)\n    } else {\n        log.Printf("Received message msgId: %v -- content: \'%s\'\\n", msg.ID(), string(msg.Payload()))\n        fmt.Fprintf(w, "Received message msgId: %v -- content: \'%s\'\\n", msg.ID(), string(msg.Payload()))\n        consumer.Ack(msg)\n    }\n})\n\nerr = http.ListenAndServe(":"+strconv.Itoa(webPort), nil)\nif err != nil {\n    log.Fatal(err)\n}\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"To scrape metrics from applications, configure a local running Prometheus instance using a configuration file (",(0,a.kt)("inlineCode",{parentName:"li"},"prometheus.yml"),").")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n- job_name: pulsar-client-go-metrics\n  scrape_interval: 10s\n  static_configs:\n  - targets:\n  - localhost: 2112\n")),(0,a.kt)("p",null,"Now you can query Pulsar client metrics on Prometheus."),(0,a.kt)("h3",{id:"consumer-configuration"},"Consumer configuration"),(0,a.kt)("p",null,"All available options of ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsumerOptions")," are ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#ConsumerOptions"},"here"),"."),(0,a.kt)("h2",{id:"readers"},"Readers"),(0,a.kt)("p",null,"Pulsar readers process messages from Pulsar topics. Readers are different from consumers because with readers you need to explicitly specify which message in the stream you want to begin with (consumers, on the other hand, automatically begin with the most recent unacked message). You can ",(0,a.kt)("a",{parentName:"p",href:"#reader-configuration"},"configure")," Go readers using a ",(0,a.kt)("inlineCode",{parentName:"p"},"ReaderOptions")," object. Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'reader, err := client.CreateReader(pulsar.ReaderOptions{\n    Topic:          "topic-1",\n    StartMessageID: pulsar.EarliestMessageID(),\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer reader.Close()\n')),(0,a.kt)("h3",{id:"reader-operations"},"Reader operations"),(0,a.kt)("p",null,"All available methods of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Reader")," interface are ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#Reader"},"here"),"."),(0,a.kt)("h3",{id:"reader-example"},"Reader example"),(0,a.kt)("h4",{id:"how-to-use-reader-to-read-next-message"},"How to use reader to read 'next' message"),(0,a.kt)("p",null,"Here's an example usage of a Go reader that uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"Next()")," method to process incoming messages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    "log"\n\n    "github.com/apache/pulsar-client-go/pulsar"\n)\n\nfunc main() {\n    client, err := pulsar.NewClient(pulsar.ClientOptions{URL: "pulsar://localhost:6650"})\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    defer client.Close()\n\n    reader, err := client.CreateReader(pulsar.ReaderOptions{\n        Topic:          "topic-1",\n        StartMessageID: pulsar.EarliestMessageID(),\n    })\n    if err != nil {\n        log.Fatal(err)\n    }\n    defer reader.Close()\n\n    for reader.HasNext() {\n        msg, err := reader.Next(context.Background())\n        if err != nil {\n            log.Fatal(err)\n        }\n\n        fmt.Printf("Received message msgId: %#v -- content: \'%s\'\\n",\n            msg.ID(), string(msg.Payload()))\n    }\n}\n')),(0,a.kt)("p",null,"In the example above, the reader begins reading from the earliest available message (specified by ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar.EarliestMessage"),"). The reader can also begin reading from the latest message (",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar.LatestMessage"),") or some other message ID specified by bytes using the ",(0,a.kt)("inlineCode",{parentName:"p"},"DeserializeMessageID")," function, which takes a byte array and returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"MessageID")," object. Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'lastSavedId := // Read last saved message id from external store as byte[]\n\nreader, err := client.CreateReader(pulsar.ReaderOptions{\n    Topic:          "my-golang-topic",\n    StartMessageID: pulsar.DeserializeMessageID(lastSavedId),\n})\n')),(0,a.kt)("h4",{id:"use-reader-to-read-specific-message"},"Use reader to read specific message"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'client, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: "pulsar://localhost:6650",\n})\n\nif err != nil {\n    log.Fatal(err)\n}\ndefer client.Close()\n\ntopic := "topic-1"\nctx := context.Background()\n\n// create producer\nproducer, err := client.CreateProducer(pulsar.ProducerOptions{\n    Topic:           topic,\n    DisableBatching: true,\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer producer.Close()\n\n// send 10 messages\nmsgIDs := [10]pulsar.MessageID{}\nfor i := 0; i < 10; i++ {\n    msgID, _ := producer.Send(ctx, &pulsar.ProducerMessage{\n        Payload: []byte(fmt.Sprintf("hello-%d", i)),\n    })\n    msgIDs[i] = msgID\n}\n\n// create reader on 5th message (not included)\nreader, err := client.CreateReader(pulsar.ReaderOptions{\n    Topic:                   topic,\n    StartMessageID:          msgIDs[4],\n    StartMessageIDInclusive: false,\n})\n\nif err != nil {\n    log.Fatal(err)\n}\ndefer reader.Close()\n\n// receive the remaining 5 messages\nfor i := 5; i < 10; i++ {\n    msg, err := reader.Next(context.Background())\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Printf("Read %d-th msg: %s\\n", i, string(msg.Payload()))\n}\n// create reader on 5th message (included)\nreaderInclusive, err := client.CreateReader(pulsar.ReaderOptions{\n    Topic:                   topic,\n    StartMessageID:          msgIDs[4],\n    StartMessageIDInclusive: true,\n})\n\nif err != nil {\n    log.Fatal(err)\n}\ndefer readerInclusive.Close()\n')),(0,a.kt)("h3",{id:"reader-configuration"},"Reader configuration"),(0,a.kt)("p",null,"All available options of ",(0,a.kt)("inlineCode",{parentName:"p"},"ReaderOptions")," are ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#ReaderOptions"},"here"),"."),(0,a.kt)("h2",{id:"messages"},"Messages"),(0,a.kt)("p",null,"The Pulsar Go client provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"ProducerMessage")," interface that you can use to construct messages to producers on Pulsar topics. Here's an example message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'msg := pulsar.ProducerMessage{\n    Payload: []byte("Here is some message data"),\n    Key: "message-key",\n    Properties: map[string]string{\n        "foo": "bar",\n    },\n    EventTime: time.Now(),\n    ReplicationClusters: []string{"cluster1", "cluster3"},\n}\n\nif _, err := producer.send(msg); err != nil {\n    log.Fatalf("Could not publish message due to: %v", err)\n}\n')),(0,a.kt)("p",null,"All methods of ",(0,a.kt)("inlineCode",{parentName:"p"},"ProducerMessage")," object are ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#ProducerMessage"},"here"),"."),(0,a.kt)("h2",{id:"tls-encryption-and-authentication"},"TLS encryption and authentication"),(0,a.kt)("p",null,"To use ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.11.x/security-tls-transport"},"TLS encryption")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.11.x/security-tls-authentication"},"mTLS authentication"),", you need to configure your client to do so:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"pulsar+ssl")," URL type"),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"TLSTrustCertsFilePath")," to the path of the TLS certs used by your client and the Pulsar broker"),(0,a.kt)("li",{parentName:"ul"},"Configure ",(0,a.kt)("inlineCode",{parentName:"li"},"Authentication")," option")),(0,a.kt)("p",null,"Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'opts := pulsar.ClientOptions{\n    URL: "pulsar+ssl://my-cluster.com:6651",\n    TLSTrustCertsFilePath: "/path/to/certs/my-cert.csr",\n    Authentication: pulsar.NewAuthenticationTLS("my-cert.pem", "my-key.pem"),\n}\n')),(0,a.kt)("h2",{id:"oauth2-authentication"},"OAuth2 authentication"),(0,a.kt)("p",null,"To use ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.11.x/security-oauth2"},"OAuth2 authentication"),", you need to configure your client to perform the following operations."),(0,a.kt)("p",null,"This example shows how to configure OAuth2 authentication."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'oauth := pulsar.NewAuthenticationOAuth2(map[string]string{\n    "type":       "client_credentials",\n    "issuerUrl":  "https://dev-kt-aa9ne.us.auth0.com",\n    "audience":   "https://dev-kt-aa9ne.us.auth0.com/api/v2/",\n    "privateKey": "/path/to/privateKey",\n    "clientId":   "0Xx...Yyxeny",\n})\nclient, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL:              "pulsar://my-cluster:6650",\n    Authentication:   oauth,\n})\n')))}m.isMDXComponent=!0}}]);