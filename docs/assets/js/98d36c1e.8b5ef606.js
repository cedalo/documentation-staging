"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[94402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>g,toc:()=>b});var r=n(3905),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(a)for(var n of a(t))p.call(t,n)&&c(e,n,t[n]);return e};const d={id:"restapi-monitoring",title:"Monitoring",sidebar_label:"Monitoring"},m=void 0,g={unversionedId:"api/restapis/restapi-monitoring",id:"api/restapis/restapi-monitoring",title:"Monitoring",description:"Monitoring API",source:"@site/mosquitto/api/restapis/monitoring.md",sourceDirName:"api/restapis",slug:"/api/restapis/restapi-monitoring",permalink:"/documentation-staging/mosquitto/next/api/restapis/restapi-monitoring",draft:!1,tags:[],version:"current",frontMatter:{id:"restapi-monitoring",title:"Monitoring",sidebar_label:"Monitoring"},sidebar:"someSidebar",previous:{title:"Dynamic Security",permalink:"/documentation-staging/mosquitto/next/api/restapis/restapi-dynamic-security"},next:{title:"System Status",permalink:"/documentation-staging/mosquitto/next/api/restapis/restapi-system-status"}},k={},b=[{value:"Available API Paths",id:"available-api-paths",level:2},{value:"Path: /api/monitoring/brokers",id:"path-apimonitoringbrokers",level:2},{value:"Methods",id:"methods",level:3},{value:"GET",id:"get",level:4},{value:"Path: /api/monitoring/brokers/{brokerId}",id:"path-apimonitoringbrokersbrokerid",level:2},{value:"Methods",id:"methods-1",level:3},{value:"GET",id:"get-1",level:4},{value:"Path: /api/monitoring/clusters",id:"path-apimonitoringclusters",level:2},{value:"Methods",id:"methods-2",level:3},{value:"GET",id:"get-2",level:4},{value:"Path: /api/monitoring/clusters/{clusterName}",id:"path-apimonitoringclustersclustername",level:2},{value:"Methods",id:"methods-3",level:3},{value:"GET",id:"get-3",level:4}],h={toc:b};function y(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},h),c),o(t,s({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Monitoring API"),(0,r.kt)("h2",u({},{id:"available-api-paths"}),"Available API Paths"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#apimonitoringbrokers"}),"/api/monitoring/brokers"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#apimonitoringbrokersbrokerid"}),"/api/monitoring/brokers/{brokerId}"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#apimonitoringclusters"}),"/api/monitoring/clusters"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#apimonitoringclustersclustername"}),"/api/monitoring/clusters/{clusterName}"),(0,r.kt)("br",null))),(0,r.kt)("hr",null),(0,r.kt)("h2",u({},{id:"path-apimonitoringbrokers"}),"Path: /api/monitoring/brokers"),(0,r.kt)("h3",u({},{id:"methods"}),"Methods"),(0,r.kt)("h4",u({},{id:"get"}),"GET"),(0,r.kt)("p",null,"Returns the monitoring overview of all the brokers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Responses")),(0,r.kt)("table",null,(0,r.kt)("colgroup",null,(0,r.kt)("col",null),(0,r.kt)("col",{style:{minWidth:"250px"}})),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null," Status "),(0,r.kt)("td",null," Description "),(0,r.kt)("td",null," Response Content or Scheme")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 200 "),(0,r.kt)("td",null," Contains the overview information of all brokers. Each broker provides additional metrics information like the number of clients connected, the number of subscriptions and the number of messages received and sent "),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "total": {\n    "description": "Total number of brokers. Length of the \\"brokers\\" property array",\n    "type": "integer",\n    "format": "int32"\n  },\n  "brokers": {\n    "type": "array",\n    "items": {\n      "$ref": "#/components/schemas/BrokerInfo"\n    }\n  }\n} \n')))),(0,r.kt)("tr",null,(0,r.kt)("td",null," 404 "),(0,r.kt)("td",null," Plugin not found/Not enabled "),(0,r.kt)("td",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,"Plugin not enabled")))))),(0,r.kt)("hr",null),(0,r.kt)("h2",u({},{id:"path-apimonitoringbrokersbrokerid"}),"Path: /api/monitoring/brokers/{brokerId}"),(0,r.kt)("h3",u({},{id:"methods-1"}),"Methods"),(0,r.kt)("h4",u({},{id:"get-1"}),"GET"),(0,r.kt)("p",null,"Returns the monitoring overview of a signle broker"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Location"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"brokerId")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"path"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Id of the broker which the information is requestsed for")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Responses")),(0,r.kt)("table",null,(0,r.kt)("colgroup",null,(0,r.kt)("col",null),(0,r.kt)("col",{style:{minWidth:"250px"}})),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null," Status "),(0,r.kt)("td",null," Description "),(0,r.kt)("td",null," Response Content or Scheme")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 200 "),(0,r.kt)("td",null," Contains detailed monitoring information on one single broker "),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "id": {\n    "type": "string",\n    "description": "ID of the broker. Same as brokerId"\n  },\n  "name": {\n    "type": "string",\n    "description": "Text name of the broker"\n  },\n  "status": {\n    "type": "object",\n    "required": [\n      "timestamp",\n      "connected"\n    ],\n    "properties": {\n      "timestamp": {\n        "type": "integer",\n        "format": "int32",\n        "description": "Time when broker was connected to MMC"\n      },\n      "connected": {\n        "type": "boolean",\n        "description": "Indicates if the broker is connected"\n      },\n      "error": {\n        "type": "object",\n        "required": [\n          "code"\n        ],\n        "properties": {\n          "errno": {\n            "type": "integer",\n            "format": "int32"\n          },\n          "code": {\n            "type": "string",\n            "description": "Error name"\n          },\n          "syscall": {\n            "type": "string",\n            "description": "Command that failed"\n          },\n          "address": {\n            "type": "string",\n            "description": "IP address of the broker"\n          },\n          "port": {\n            "type": "integer",\n            "format": "int32",\n            "description": "Port of the broker connection"\n          }\n        },\n        "description": "Specifies connection error if any (present only in case of an error)"\n      }\n    }\n  },\n  "metrics": {\n    "type": "object",\n    "properties": {\n      "version": {\n        "type": "string",\n        "description": "Version of the broker. Static"\n      },\n      "clients": {\n        "type": "object",\n        "properties": {\n          "total": {\n            "type": "string",\n            "description": "Total number of active and inactive clients currently connected and registered on the broker"\n          },\n          "active": {\n            "type": "string",\n            "description": "Number of currently connected clients (deprecated)"\n          },\n          "connected": {\n            "type": "string",\n            "description": "Number of currently connected clients"\n          }\n        }\n      },\n      "load": {\n        "type": "object",\n        "description": "Moving averages. Contains differnt events with 1min, 5min or 15min averages. The values represent the number of events done in 1 minute, averaged over 1, 5 or 15 minutes",\n        "properties": {\n          "publish": {\n            "type": "object",\n            "properties": {\n              "sent": {\n                "type": "object",\n                "properties": {\n                  "1min": {\n                    "type": "string"\n                  },\n                  "5min": {\n                    "type": "string"\n                  },\n                  "15min": {\n                    "type": "string"\n                  }\n                },\n                "description": "The moving average of the number of publish messages sent by the broker over different time intervals"\n              }\n            }\n          },\n          "sockets": {\n            "type": "object",\n            "properties": {\n              "15min": {\n                "type": "string"\n              },\n              "1min": {\n                "type": "string"\n              },\n              "5min": {\n                "type": "string"\n              }\n            },\n            "description": "The moving average of the number of socket connections opened to the broker over different time intervals"\n          },\n          "connections": {\n            "type": "object",\n            "properties": {\n              "15min": {\n                "type": "string"\n              },\n              "1min": {\n                "type": "string"\n              },\n              "5min": {\n                "type": "string"\n              }\n            },\n            "description": "The moving average of the number of CONNECT packets received by the broker over different time intervals"\n          },\n          "messages": {\n            "type": "object",\n            "properties": {\n              "received": {\n                "type": "object",\n                "properties": {\n                  "1min": {\n                    "type": "string"\n                  },\n                  "5min": {\n                    "type": "string"\n                  },\n                  "15min": {\n                    "type": "string"\n                  }\n                },\n                "description": "The moving average of the number of all types of MQTT messages received by the broker over different time intervals"\n              },\n              "sent": {\n                "type": "object",\n                "properties": {\n                  "1min": {\n                    "type": "string"\n                  },\n                  "5min": {\n                    "type": "string"\n                  },\n                  "15min": {\n                    "type": "string"\n                  }\n                },\n                "description": "The moving average of the number of all types of MQTT messages sent by the broker over different time intervals"\n              }\n            }\n          },\n          "bytes": {\n            "type": "object",\n            "properties": {\n              "received": {\n                "type": "object",\n                "properties": {\n                  "1min": {\n                    "type": "string"\n                  },\n                  "5min": {\n                    "type": "string"\n                  },\n                  "15min": {\n                    "type": "string"\n                  }\n                },\n                "description": "The moving average of the number of bytes received by the broker over different time intervals"\n              },\n              "sent": {\n                "type": "object",\n                "properties": {\n                  "1min": {\n                    "type": "string"\n                  },\n                  "5min": {\n                    "type": "string"\n                  },\n                  "15min": {\n                    "type": "string"\n                  }\n                },\n                "description": "The moving average of the number of bytes sent by the broker over different time intervals"\n              }\n            }\n          }\n        }\n      },\n      "messages": {\n        "type": "object",\n        "properties": {\n          "stored": {\n            "type": "string",\n            "description": "The number of messages currently held in the message store. This includes retained messages and messages queued for durable clients"\n          },\n          "received": {\n            "type": "string",\n            "description": "The total number of messages of any type received since the broker started"\n          },\n          "sent": {\n            "type": "string",\n            "description": "The total number of messages of any type sent since the broker started"\n          }\n        }\n      },\n      "store": {\n        "type": "object",\n        "properties": {\n          "messages": {\n            "type": "object",\n            "properties": {\n              "count": {\n                "type": "string",\n                "description": "The number of messages currently held in the message store. This includes retained messages and messages queued for durable clients"\n              },\n              "bytes": {\n                "type": "string",\n                "description": "The number of bytes currently held by message payloads in the message store. This includes retained messages and messages queued for durable clients"\n              }\n            }\n          }\n        }\n      },\n      "subscriptions": {\n        "type": "object",\n        "properties": {\n          "count": {\n            "type": "string",\n            "description": "The total number of subscriptions active on the broker"\n          }\n        }\n      },\n      "retained messages": {\n        "type": "object",\n        "properties": {\n          "count": {\n            "type": "string",\n            "description": "The total number of retained messages active on the broker"\n          }\n        }\n      },\n      "publish": {\n        "type": "object",\n        "properties": {\n          "messages": {\n            "type": "object",\n            "properties": {\n              "sent": {\n                "type": "string",\n                "description": "The total number of PUBLISH messages sent since the broker started"\n              }\n            }\n          },\n          "bytes": {\n            "type": "object",\n            "properties": {\n              "sent": {\n                "type": "string",\n                "description": "The total number of bytes of PUBLISH messages sent since the broker started"\n              }\n            }\n          }\n        }\n      },\n      "bytes": {\n        "type": "object",\n        "properties": {\n          "received": {\n            "type": "string",\n            "description": "The total number of bytes received since the broker started"\n          },\n          "sent": {\n            "type": "string",\n            "description": "The total number of bytes sent since the broker started"\n          }\n        }\n      },\n      "uptime": {\n        "type": "string",\n        "description": "Uptime of the broker in seconds"\n      }\n    }\n  }\n} \n')))))),(0,r.kt)("hr",null),(0,r.kt)("h2",u({},{id:"path-apimonitoringclusters"}),"Path: /api/monitoring/clusters"),(0,r.kt)("h3",u({},{id:"methods-2"}),"Methods"),(0,r.kt)("h4",u({},{id:"get-2"}),"GET"),(0,r.kt)("p",null,"Returns statuses of all the clusters"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Responses")),(0,r.kt)("table",null,(0,r.kt)("colgroup",null,(0,r.kt)("col",null),(0,r.kt)("col",{style:{minWidth:"250px"}})),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null," Status "),(0,r.kt)("td",null," Description "),(0,r.kt)("td",null," Response Content or Scheme")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 200 "),(0,r.kt)("td",null," Contains a list of all available clusters plus an additional counter. Each cluster information contains the name, the description and a status of the cluster "),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "total": {\n    "type": "integer",\n    "format": "int32",\n    "description": "Total number of clusters returned. Length of \\"clusters\\" property array"\n  },\n  "clusters": {\n    "type": "array",\n    "items": {\n      "$ref": "#/components/schemas/ClusterInfo"\n    }\n  }\n} \n')))))),(0,r.kt)("hr",null),(0,r.kt)("h2",u({},{id:"path-apimonitoringclustersclustername"}),"Path: /api/monitoring/clusters/{clusterName}"),(0,r.kt)("h3",u({},{id:"methods-3"}),"Methods"),(0,r.kt)("h4",u({},{id:"get-3"}),"GET"),(0,r.kt)("p",null,"Returns status of a single cluster"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Location"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"clusterName")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"path"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Name of the cluster which the information is requestsed for")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Responses")),(0,r.kt)("table",null,(0,r.kt)("colgroup",null,(0,r.kt)("col",null),(0,r.kt)("col",{style:{minWidth:"250px"}})),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null," Status "),(0,r.kt)("td",null," Description "),(0,r.kt)("td",null," Response Content or Scheme")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 200 "),(0,r.kt)("td",null,' Contains the detailed information of one single cluster. For every cluster the same information is included as in the "Clusters" endpoint plus additional detail information, i.e., specific information about each node in the cluster '),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "name": {\n    "type": "string",\n    "description": "Name of the cluster"\n  },\n  "description": {\n    "type": "string",\n    "description": "Description of the cluster"\n  },\n  "status": {\n    "type": "object",\n    "properties": {\n      "clusterstate": {\n        "type": "string",\n        "description": "active - cluster is active and working; degraded - cluster is active, but not all nodes are healthy; inactive - cluster is inactive",\n        "enum": [\n          "active",\n          "degraded",\n          "inactive"\n        ]\n      }\n    }\n  },\n  "details": {\n    "type": "object",\n    "properties": {\n      "nodes": {\n        "type": "array",\n        "description": "Represents nodes/brokers which form a cluster",\n        "items": {\n          "type": "object",\n          "properties": {\n            "address": {\n              "type": "string",\n              "description": "Address of the node"\n            },\n            "port": {\n              "type": "integer",\n              "format": "int32",\n              "description": "Port used to connect to the node"\n            },\n            "nodeid": {\n              "type": "integer",\n              "format": "int32",\n              "description": "ID of the node. Node is an abstraction on top of the broker used in cluster"\n            },\n            "broker": {\n              "type": "string",\n              "description": "ID of the broker. The same as brokerId"\n            },\n            "leader": {\n              "type": "boolean",\n              "description": "Indicates if node is a "\n            }\n          }\n        }\n      }\n    }\n  }\n} \n')))))),(0,r.kt)("hr",null))}y.isMDXComponent=!0}}]);