"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[6928],{83166:(e,t,n)=>{var i=n(64836);t.Z=void 0;var o=i(n(64938)),a=n(85893),r=(0,o.default)((0,a.jsx)("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"}),"GppGood");t.Z=r},61816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>N,frontMatter:()=>c,metadata:()=>g,toc:()=>f});var i=n(3905),o=n(49044),a=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&d(e,n,t[n]);return e};const c={id:"mosquitto-google-pubsub-bridge",title:"Google Pub/Sub Bridge",sidebar_label:"Google Pub/Sub Bridge"},b=void 0,g={unversionedId:"broker/Mosquitto Manual/Bridges/mosquitto-google-pubsub-bridge",id:"version-2.8/broker/Mosquitto Manual/Bridges/mosquitto-google-pubsub-bridge",title:"Google Pub/Sub Bridge",description:"The Google Pub/Sub Plugin serves as a bridge between the Mosquitto broker and Google Pub/Sub service, facilitating the exchange of messages between MQTT and Google Pub/Sub. This interoperability supports various messaging patterns, including 1n, and n:1, as dictated by the designated topic mappings. For instance, a message that arrives at a Mosquitto broker can be relayed to one or multiple topics within the Google Pub/Sub service. Similarly, a Mosquitto broker can fetch messages from one or more Google Pub/Sub topics and distribute them to one or several MQTT topics. For further details, refer to the example configuration.",source:"@site/mosquitto_versioned_docs/version-2.8/broker/Mosquitto Manual/Bridges/google-pubsub.md",sourceDirName:"broker/Mosquitto Manual/Bridges",slug:"/broker/Mosquitto Manual/Bridges/mosquitto-google-pubsub-bridge",permalink:"/documentation-staging/mosquitto/broker/Mosquitto Manual/Bridges/mosquitto-google-pubsub-bridge",draft:!1,tags:[],version:"2.8",frontMatter:{id:"mosquitto-google-pubsub-bridge",title:"Google Pub/Sub Bridge",sidebar_label:"Google Pub/Sub Bridge"},sidebar:"someSidebar",previous:{title:"Kafka Bridge",permalink:"/documentation-staging/mosquitto/broker/Mosquitto Manual/Bridges/mosquitto-kafka-bridge"},next:{title:"SQL Bridges",permalink:"/documentation-staging/mosquitto/broker/Mosquitto Manual/Bridges/mosquitto-sql-bridge"}},h={},f=[{value:"Plugin activation",id:"plugin-activation",level:2},{value:"Config file format",id:"config-file-format",level:2},{value:"JSON Schema",id:"json-schema",level:2}],k={toc:f};function N(e){var t,n=e,{components:a}=n,d=((e,t)=>{var n={};for(var i in e)p.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&s)for(var i of s(e))t.indexOf(i)<0&&u.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=m(m({},k),d),r(t,l({components:a,mdxType:"MDXLayout"}))),(0,i.kt)(o.Z,{mdxType:"PremiumFeature"}),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Google Pub/Sub Plugin")," serves as a bridge between the ",(0,i.kt)("strong",{parentName:"p"},"Mosquitto broker")," and ",(0,i.kt)("strong",{parentName:"p"},"Google Pub/Sub service"),", facilitating the exchange of messages between MQTT and Google Pub/Sub. This interoperability supports various messaging patterns, including ",(0,i.kt)("strong",{parentName:"p"},"1:1"),", ",(0,i.kt)("strong",{parentName:"p"},"1:n"),", and ",(0,i.kt)("strong",{parentName:"p"},"n:1"),", as dictated by the designated topic mappings. For instance, a message that arrives at a Mosquitto broker can be relayed to one or multiple topics within the Google Pub/Sub service. Similarly, a Mosquitto broker can fetch messages from one or more Google Pub/Sub topics and distribute them to one or several MQTT topics. For further details, refer to the ",(0,i.kt)("a",m({parentName:"p"},{href:"#pubsub-config.son"}),"example configuration"),"."),(0,i.kt)("admonition",m({},{type:"info"}),(0,i.kt)("p",{parentName:"admonition"},"The plugin cannot configure the Google-Pub/Sub service. This has to be done upfront.")),(0,i.kt)("admonition",m({},{type:"info"}),(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"push")," feature is currently not supported at all and the ",(0,i.kt)("inlineCode",{parentName:"p"},"pull")," feature is in the beta state and therefore subject to change!")),(0,i.kt)("h2",m({},{id:"plugin-activation"}),"Plugin activation"),(0,i.kt)("p",null,"To load and enable the Google Pub/Sub plugin in the broker add the following to the ",(0,i.kt)("inlineCode",{parentName:"p"},"mosquitto.conf")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-aconf"}),"plugin /usr/lib/cedalo_google_pubsub.so\nplugin_opt_key_file pubsub-key.json\nplugin_opt_config_file pubsub-config.json\n\npersistence_location /mosquitto/data\n")),(0,i.kt)("p",null,"Configuration is done via two JSON files. One is a key file which contains the Pub/Sub project and credentials to use. This file is provided by Google. The other file configures the plugin itself (see ",(0,i.kt)("a",m({parentName:"p"},{href:"#config-file-format"}),"next section"),"). The filenames can be edited, but the path is resolved relative to the ",(0,i.kt)("inlineCode",{parentName:"p"},"persistence_location")," property."),(0,i.kt)("h2",m({},{id:"config-file-format"}),"Config file format"),(0,i.kt)("p",null,"The configuration contains the settings for each Google Pub/Sub feature, namely ",(0,i.kt)("inlineCode",{parentName:"p"},"publish"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pull")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"push"),".\nThe core setting for each feature is the topic mapping defined by the ",(0,i.kt)("inlineCode",{parentName:"p"},"topics")," property. For ",(0,i.kt)("inlineCode",{parentName:"p"},"publish")," this defines how messages are forwarded from Mosquitto broker to Google Pub/Sub and for ",(0,i.kt)("inlineCode",{parentName:"p"},"pull"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"push")," it defines the other way round, i.e. how messages received by Google Pub/Sub are forwarded to the Mosquitto broker."),(0,i.kt)("p",null,"The configuration file requires only a descriptive name. This means that each feature settings property, ",(0,i.kt)("inlineCode",{parentName:"p"},"publish"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pull")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"push"),", is optional! However, if none is specified the plugin does nothing."),(0,i.kt)("p",null,"Feature properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"publish"),": Settings for the publish feature (i.e., topic mapping) (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),").",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"topics"),": The topic mappings which define how messages received by Mosquitto broker are forwarded to Google Pub/Sub topics (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"array")," of type ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),").",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mqtt"),": MQTT topic to be forwarded to Pub/Sub (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pubsub"),": Pub/Sub topic to receive forwarded Mosquitto broker messages (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"queue"),": Settings for internal message queue which is used to try to publish failed messages again (Optional, type: ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),").",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"limit"),": Max. total number of queued messages. If limit is reached further received messages are dropped. (Optional, defaults to 100)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retryDelaySEC"),": Delay in seconds to wait before retrying to publish queued messages again. (Optional, defaults to 10 seconds)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maxRetries"),": Max. number of attempts before retry is stopped. Use -1 for unlimited retries. (Optional, defaults to -1)"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pull"),": ",(0,i.kt)("em",{parentName:"li"},"BETA")," - Settings for the pull feature. (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),").",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pullTopic"),": The MQTT topic used to start pulling messages (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pullDurationSEC"),": The duration in seconds for how long messages should be pulled from Google Pub/Sub (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"qos"),": The quality of service flag to use for MQTT publish (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),"; allowed values: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"topics"),": The topic mappings which define how messages received from Google Pub/Sub are forwarded to MQTT topics (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),")."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"push"),": ",(0,i.kt)("em",{parentName:"li"},"Currently not supported.")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),").")),(0,i.kt)("p",null,"For a more technical overview refer to the ",(0,i.kt)("a",m({parentName:"p"},{href:"#json-schema"}),"format schema")," at the bottom of this page as well."),(0,i.kt)("p",null,"Following is an example for a ",(0,i.kt)("inlineCode",{parentName:"p"},"pubsub-config.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n    "name": "MQTT - GooglePubSub Topics Mapping",\n    "publish": {\n        "topics": [\n            {\n                "mqtt": "cedalo/test",\n                "pubsub": "test_topic"\n            },\n            {\n                "mqtt": "cedalo/test",\n                "pubsub": "cedalo_test_topic"\n            }\n        ],\n        "queue": {\n            "limit": 10000,\n            "retryDelaySEC": 5\n        }\n    },\n    "pull": {\n        "pullTopic": "cedalo/test/pull",\n        "pullDurationSEC": 10,\n        "topics": [\n            {\n                "mqtt": "cedalo/app",\n                "pubsub": "cedalo_test_topic"\n            }\n        ]\n    }\n}\n')),(0,i.kt)("p",null,"In this example ",(0,i.kt)("inlineCode",{parentName:"p"},"publish")," defines a 1:n topic mapping, i.e. each message sent to the Mosquitto broker on topic ",(0,i.kt)("inlineCode",{parentName:"p"},"cedalo/test")," is published to two Google Pub/Sub topics, namely ",(0,i.kt)("inlineCode",{parentName:"p"},"test_topic")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"cedalo_test_topic"),". On the other hand ",(0,i.kt)("inlineCode",{parentName:"p"},"pull")," defines a 1:1 topic mapping and a pull duration of 10 seconds. That means after the broker has started to pull messages each message received on Google Pub/Sub topic ",(0,i.kt)("inlineCode",{parentName:"p"},"cedalo_test_topic")," within the following 10 seconds will be published by Mosquitto broker on topic ",(0,i.kt)("inlineCode",{parentName:"p"},"cedalo/app"),". Message pull is started by sending an empty message to the specified pull topic ",(0,i.kt)("inlineCode",{parentName:"p"},"cedalo/test/pull")," to the broker."),(0,i.kt)("admonition",m({},{type:"info"}),(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pull")," feature is still experimental and subject to change!")),(0,i.kt)("h2",m({},{id:"json-schema"}),"JSON Schema"),(0,i.kt)("p",null,"Overview over all possible parameters for the ",(0,i.kt)("inlineCode",{parentName:"p"},"pubsub-config.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n    "type": "object",\n    "description": "Configuration for Google-Pub/Sub client connection.",\n    "additionalProperties": false,\n    "properties": {\n        "name": {\n            "type": "string",\n            "description": "Descriptive name for this configuration."\n        },\n        "publish": {\n            "type": "object",\n            "description": "Topics mapping for publish",\n            "additionalProperties": false,\n            "properties": {\n                "topics": {\n                    "type": "array",\n                    "minItems": 1,\n                    "items": {\n                        "type": "object",\n                        "additionalProperties": false,\n                        "properties": {\n                            "mqtt": {\n                                "type": "string",\n                                "description": "The mqtt topic to map",\n                                "minLength": 1\n                            },\n                            "pubsub": {\n                                "type": "string",\n                                "description": "The google pubsub topic to publish to.",\n                                "minLength": 1\n                            }\n                        },\n                        "required": ["mqtt", "pubsub"]\n                    }\n                }\n            },\n            "required": ["topics"]\n        },\n        "pull": {\n            "type": "object",\n            "description": "Topics mapping and settings for pull",\n            "additionalProperties": false,\n            "properties": {\n                "pullDurationSEC": {\n                    "type": "number",\n                    "description": "Specifies in seconds for how long incoming messages should be pulled.",\n                    "minimum": 1,\n                    "default": 30\n                },\n                "pullTopic": {\n                    "type": "string",\n                    "description": "The mqtt topic which triggers the pubsub pull.",\n                    "minLength": 1\n                },\n                "qos": {\n                    "type": "integer",\n                    "enum": [0, 1, 2],\n                    "description": "The quality of service value to use for publishing received messages to mqtt topic.",\n                    "default": 0\n                },\n                "topics": {\n                    "type": "array",\n                    "minItems": 1,\n                    "items": {\n                        "type": "object",\n                        "additionalProperties": false,\n                        "properties": {\n                            "mqtt": {\n                                "type": "string",\n                                "description": "The mqtt topic to publish to.",\n                                "minLength": 1\n                            },\n                            "pubsub": {\n                                "type": "string",\n                                "description": "The google pubsub topic to pull from.",\n                                "minLength": 1\n                            }\n                        },\n                        "required": ["mqtt", "pubsub"]\n                    }\n                }\n            },\n            "required": ["pullTopic", "topics"]\n        },\n        "push": {\n            "type": "object",\n            "description": "Topics mapping and settings for push",\n            "additionalProperties": false,\n            "properties": {\n                "url": {\n                    "type": "string",\n                    "description": "Specifies the https endpoint for push.",\n                    "minLength": 1\n                }\n            },\n            "required": ["url"]\n        }\n    },\n    "required": ["name"]\n}\n')))}N.isMDXComponent=!0},49044:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(67294),o=n(39082),a=n(62659),r=n(83166);function l({inline:e}){return i.createElement(o.Z,{sx:{margin:e?"0px 5px":"5px",height:e?"22px":void 0,color:"#ffffff",backgroundColor:a.Z[500]},size:"small",icon:i.createElement(r.Z,{style:{color:"white"},size:"small"}),label:"Premium"})}}}]);