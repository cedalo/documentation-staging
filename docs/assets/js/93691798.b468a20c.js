"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[41724],{83166:(e,n,t)=>{var i=t(64836);n.Z=void 0;var a=i(t(64938)),o=t(85893),r=(0,a.default)((0,o.jsx)("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"}),"GppGood");n.Z=r},25553:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>h,default:()=>y,frontMatter:()=>g,metadata:()=>u,toc:()=>b});var i=t(3905),a=t(49044),o=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))d.call(n,t)&&c(e,t,n[t]);return e};const g={id:"mongodb-bridge",title:"MongoDB Bridge",sidebar_label:"MongoDB Bridge"},h=void 0,u={unversionedId:"bridges/mongodb-bridge",id:"bridges/mongodb-bridge",title:"MongoDB Bridge",description:"The MongoDB-Bridge plugin can be used to insert data published to the Mosquitto broker into a MongoDB database. The plugin can handle multiple MongoDB client connections. Each connection applies changes to a configured database. Currently, the integrated client supports only basic authentication (username, password). Topic mappings are used to specify which MQTT topic payloads should be inserted into which collection. Each insert can contain the fields payload, jsonPayload, topic, qos, clientid, hostname, retain, timestamp of the received MQTT message. By default, all these fields are included in the database insert command. If needed, Schema mappings_ are used to filter or rename these fields. The queueSize can be configured per MongoDB client, to specify a limit of not-yet-processed MQTT messages, before the plugin starts to drop them. More information in the Json Schema section.",source:"@site/mosquitto/bridges/Mongodb-bridge.md",sourceDirName:"bridges",slug:"/bridges/mongodb-bridge",permalink:"/documentation-staging/mosquitto/next/bridges/mongodb-bridge",draft:!1,tags:[],version:"current",frontMatter:{id:"mongodb-bridge",title:"MongoDB Bridge",sidebar_label:"MongoDB Bridge"},sidebar:"someSidebar",previous:{title:"MQTT Bridge",permalink:"/documentation-staging/mosquitto/next/bridges/mqtt-bridge"},next:{title:"Kafka Bridge",permalink:"/documentation-staging/mosquitto/next/bridges/kafka-bridge"}},f={},b=[{value:"Plugin Activation",id:"plugin-activation",level:2},{value:"Config File Format",id:"config-file-format",level:2},{value:"MongoDB Atlas Bridge",id:"mongodb-atlas-bridge",level:2},{value:"JSON Schema",id:"json-schema",level:2}],k={toc:b};function y(e){var n,t=e,{components:o}=t,c=((e,n)=>{var t={};for(var i in e)p.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&l)for(var i of l(e))n.indexOf(i)<0&&d.call(e,i)&&(t[i]=e[i]);return t})(t,["components"]);return(0,i.kt)("wrapper",(n=m(m({},k),c),r(n,s({components:o,mdxType:"MDXLayout"}))),(0,i.kt)(a.Z,{mdxType:"PremiumFeature"}),(0,i.kt)("p",null,"The MongoDB-Bridge plugin can be used to insert data published to the Mosquitto broker into a MongoDB database. The plugin can handle multiple MongoDB client connections. Each connection applies changes to a configured database. Currently, the integrated client supports only ",(0,i.kt)("em",{parentName:"p"},"basic authentication")," (username, password). ",(0,i.kt)("em",{parentName:"p"},"Topic mappings")," are used to specify which MQTT topic payloads should be inserted into which collection. Each insert can contain the fields ",(0,i.kt)("inlineCode",{parentName:"p"},"payload"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"jsonPayload"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"topic"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"qos"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hostname"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"retain"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp")," of the received MQTT message. By default, all these fields are included in the database insert command. If needed, ",(0,i.kt)("em",{parentName:"p"},"Schema mappings")," are used to filter or rename these fields. The ",(0,i.kt)("inlineCode",{parentName:"p"},"queueSize")," can be configured per MongoDB client, to specify a limit of not-yet-processed MQTT messages, before the plugin starts to drop them. More information in the ",(0,i.kt)("a",m({parentName:"p"},{href:"#json-schema"}),"Json Schema section"),"."),(0,i.kt)("h2",m({},{id:"plugin-activation"}),"Plugin Activation"),(0,i.kt)("p",null,'To load and enable the plugin into the broker, the "mosquitto.conf" must be extended by:'),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{}),"plugin /usr/lib/cedalo_mongodb_bridge.so\nplugin_opt_config_file mongodb-bridge.json\n\npersistence_location /mosquitto/data\n")),(0,i.kt)("p",null,"To make use of the hostname parameter make sure to set the environment variable in the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose-yml")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"hostname")," as wished."),(0,i.kt)("h2",m({},{id:"config-file-format"}),"Config File Format"),(0,i.kt)("p",null,"The config file contains a JSON of the following structure.\nAvailable log fields and BSON types used by the default schema or a custom schema are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hostname"),": The hostname of broker node (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"). The hostname field is set to the value of the HOSTNAME environment variable, if not set to ",(0,i.kt)("inlineCode",{parentName:"li"},"Unknown")," ."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"topic"),": The MQTT topic of the message (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"payload"),": The payload of the message (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jsonPayload"),": The payload converted to a BSON object (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),", not in default schema)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"qos"),": The quality of service level of the message (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),", minimum: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),", maximum: ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retain"),": Whether or not the message is a retained message (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"bool"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timestamp"),": The timestamp of when the message was received by the Mosquitto broker (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"date")," in UTC)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_id"),": The ID of the MQTT client that published the message (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),")")),(0,i.kt)("p",null,"An example for the plugin configuration (",(0,i.kt)("inlineCode",{parentName:"p"},"mongodb-bridge.json"),") is:"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "name": "connection-to-db1",\n        "mongodb": {\n            "hostname": "mongodb",\n            "port": 27017,\n            "database": "db1",\n            "credentials": {\n                "username": "user1",\n                "password": "secret123"\n            },\n            "queueSize": 100000,\n            "reconnectMinDelay": 5,\n            "reconnectMaxDelay": 25000\n        },\n        "schemaMappings": [\n            {\n                "name": "reduced-mapping",\n                "schema": {\n                    "data": "payload",\n                    "nodeId": "hostname"\n                }\n            }\n        ],\n        "topicMappings": [\n            {\n                "name": "topic-mapping",\n                "collection": "sensorData",\n                "schema": "reduced-mapping",\n                "topics": ["sensor_data/#"]\n            }\n        ]\n    }\n]\n')),(0,i.kt)("p",null,"With this example the plugin will create a single client to connect to a MongoDB\ninstance with the URI: ",(0,i.kt)("inlineCode",{parentName:"p"},"mongodb://user1:secret123@mongodb:27017"),"."),(0,i.kt)("p",null,"All data received on ",(0,i.kt)("inlineCode",{parentName:"p"},"sensor_data/#")," topics will be published to the collection ",(0,i.kt)("inlineCode",{parentName:"p"},"sensorData")," of the database ",(0,i.kt)("inlineCode",{parentName:"p"},"db1"),". This is configured using topic mappings, which define the MQTT topics inserted to MongoDB. Without a topic mapping, no messages will be written to MongoDB. Each topic mapping defines a list of MQTT topic filters, and the MongoDB collection where matching messages will be written."),(0,i.kt)("p",null,"A topic mapping can also reference a custom schema, or use the default schema. In the example above the data is reduced to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"payload")," of the MQTT message stored in a ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," column of the collection"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hostname")," stored into the ",(0,i.kt)("inlineCode",{parentName:"li"},"nodeId")," column of the collection")),(0,i.kt)("p",null,"Instead of using the default schema mapping containing all information of the default schema."),(0,i.kt)("admonition",m({},{type:"info"}),(0,i.kt)("p",{parentName:"admonition"},"This is an example configuration snippet, which applies to the docker container setup. For installation not running in a container the above configuration needs to be adjusted accordingly."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"plugin_opt_config_file")," must be a file name, not a path.\n",(0,i.kt)("inlineCode",{parentName:"p"},"persistence_location")," is used as the search path for the plugins' config file.")),(0,i.kt)("h2",m({},{id:"mongodb-atlas-bridge"}),"MongoDB Atlas Bridge"),(0,i.kt)("p",null,"In case the plugin should connect to a MongoDB Atlas cluster or custom options should be used the original connection string can be provided as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "name": "connection-to-db-cluster",\n        "mongodb": {\n            "connectionURI": "mongodb+srv://user1:secret123@mongodb/db_name",\n            "queueSize": 100000\n        },\n        "schemaMappings": [\n            {\n                "name": "reduced-mapping",\n                "schema": {\n                    "data": "payload",\n                    "nodeId": "hostname"\n                }\n            }\n        ],\n        "topicMappings": [\n            {\n                "name": "topic-mapping",\n                "collection": "sensorData",\n                "schema": "reduced-mapping",\n                "topics": ["sensor_data/#"]\n            }\n        ]\n    }\n]\n')),(0,i.kt)("p",null,"In this example the plugin takes the connection string as a whole. The plugin will automatically resolve the host from the connection string provided as the ",(0,i.kt)("inlineCode",{parentName:"p"},"connectionURI")," parameter and parse the parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"hostname"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"port"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"database"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"credentials"),". Those can therefore be omitted in the config. The ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," in the connection string always has to be URL encoded (percent-encoded). Additionally, standard MongoDB connection strings can also be provided as in the previous snippet."),(0,i.kt)("h2",m({},{id:"json-schema"}),"JSON Schema"),(0,i.kt)("p",null,"Overview over all possible parameter for the ",(0,i.kt)("inlineCode",{parentName:"p"},"mongodb-bridge.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n    "type": "array",\n    "description": "List of sub-configurations per MongoDB connection/database.",\n    "items": {\n        "type": "object",\n        "description": "Sub-configurations per MongoDB connection/database.",\n        "properties": {\n            "name": {\n                "type": "string",\n                "description": "Textual identifier of this configuration."\n            },\n            "mongodb": {\n                "type": "object",\n                "description": "MongoDB server specific configurations.",\n                "properties": {\n                    "connectionURI": {\n                        "type": "string",\n                        "description": "MongoDB connection string that contains protocol, hostname, port, database name, optional credentials and options."\n                    },\n                    "hostname": {\n                        "type": "string",\n                        "description": "Hostname or IP address of the MongoDB server."\n                    },\n                    "port": {\n                        "type": "integer",\n                        "description": "Port the MongoDB server is listening on."\n                    },\n                    "database": {\n                        "type": "string",\n                        "description": "Name of the database, the data should be inserted to."\n                    },\n                    "credentials": {\n                        "type": "object",\n                        "description": "Basic authentication configuration.",\n                        "properties": {\n                            "username": {\n                                "type": "string"\n                            },\n                            "password": {\n                                "type": "string"\n                            }\n                        }\n                    },\n                    "queueSize": {\n                        "type": "integer",\n                        "minimum": 1,\n                        "description": "Specifies the limit of not-yet-processed/inserted MQTT messages, before the plugin starts to drop them."\n                    },\n                    "retryInsertMinDelay": {\n                        "type": "integer",\n                        "minimum": 1,\n                        "description": "Initial delay in milliseconds before the plugin tries to insert a message again, once the server returned an error or was not available. The increment follows a pattern of double growth, where each increase is doubled compared to the previous increment. If not specified, the plugin won\'t try to resend messages again after the first try."\n                    },\n                    "retryInsertMaxDelay": {\n                        "type": "integer",\n                        "minimum": 1,\n                        "description": "Maximum delay in milliseconds before the plugin tries to insert a message again, once the server returned an error or was not available. If not specified, the plugin won\'t try to resend messages again after the first try."\n                    }\n                },\n                "oneOf": [\n                    {\n                        "required": ["hostname", "port", "database", "queueSize"]\n                    },\n                    {\n                        "required": ["connectionURI", "queueSize"]\n                    }\n                ]\n            },\n            "schemaMappings": {\n                "type": "array",\n                "items": {\n                    "type": "object",\n                    "properties": {\n                        "name": {\n                            "type": "string",\n                            "description": "Textual identifier of this schema mapping."\n                        },\n                        "schema": {\n                            "type": "object",\n                            "description": "Mapping where <key> is the target column name and <value> is the MQTT message information field.",\n                            "patternProperties": {\n                                ".*": {\n                                    "type": "string",\n                                    "enum": ["hostname", "payload", "jsonPayload", "topic", "qos", "client_id", "retain", "timestamp"]\n                                }\n                            },\n                            "additionalProperties": false\n                        }\n                    },\n                    "required": ["name", "schema"]\n                }\n            },\n            "topicMappings": {\n                "type": "array",\n                "items": {\n                    "type": "object",\n                    "properties": {\n                        "name": {\n                            "type": "string",\n                            "description": "Textual identifier of this topic mapping."\n                        },\n                        "collection": {\n                            "type": "string",\n                            "description": "Name of the collection, the MQTT data should inserted to."\n                        },\n                        "schema": {\n                            "type": "string",\n                            "description": "Name of a schema mapping, which should be applied to this topic mapping. If not specified the default schema mapping including all fields will be used."\n                        },\n                        "topics": {\n                            "type": "array",\n                            "description": "List of topic filters the plugin forwards messages from.",\n                            "items": {\n                                "type": "string"\n                            }\n                        }\n                    },\n                    "required": ["name", "collection", "topics"]\n                }\n            }\n        },\n        "required": ["name", "mongodb", "schemaMappings", "topicMappings"]\n    }\n}\n')))}y.isMDXComponent=!0},49044:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(67294),a=t(39082),o=t(62659),r=t(83166);function s({inline:e}){return i.createElement(a.Z,{sx:{margin:e?"0px 5px":"5px 5px 15px 5px",height:e?"22px":void 0,color:"#ffffff",backgroundColor:o.Z[500]},size:"small",icon:i.createElement(r.Z,{style:{color:"white"},size:"small"}),label:"Premium"})}}}]);