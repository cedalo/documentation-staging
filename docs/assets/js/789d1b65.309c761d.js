"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[1153],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>y});var i=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=i.createContext({}),c=function(n){var e=i.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},p=function(n){var e=c(n.components);return i.createElement(l.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,l=n.parentName,p=a(n,["components","mdxType","originalType","parentName"]),u=c(t),y=r,k=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return t?i.createElement(k,s(s({ref:e},p),{},{components:t})):i.createElement(k,s({ref:e},p))}));function y(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,s=new Array(o);s[0]=u;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=n,a.mdxType="string"==typeof n?n:r,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},53733:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>y,default:()=>f,frontMatter:()=>u,metadata:()=>k,toc:()=>g});var i=t(3905),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(n,e,t)=>e in n?r(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,d=(n,e)=>{for(var t in e||(e={}))l.call(e,t)&&p(n,t,e[t]);if(a)for(var t of a(e))c.call(e,t)&&p(n,t,e[t]);return n};const u={id:"restapi-connections",title:"Connections",sidebar_label:"Connections"},y=void 0,k={unversionedId:"api/restapis/restapi-connections",id:"version-2.6/api/restapis/restapi-connections",title:"Connections",description:"Connections API",source:"@site/mosquitto_versioned_docs/version-2.6/api/restapis/connections.md",sourceDirName:"api/restapis",slug:"/api/restapis/restapi-connections",permalink:"/documentation-staging/mosquitto/2.6/api/restapis/restapi-connections",draft:!1,tags:[],version:"2.6",frontMatter:{id:"restapi-connections",title:"Connections",sidebar_label:"Connections"},sidebar:"someSidebar",previous:{title:"MMC Rest APIs",permalink:"/documentation-staging/mosquitto/2.6/api/restapis/"},next:{title:"Dynamic Security",permalink:"/documentation-staging/mosquitto/2.6/api/restapis/restapi-dynamic-security"}},m={},g=[{value:"Available API Paths",id:"available-api-paths",level:2},{value:"Path: /api/connections",id:"path-apiconnections",level:2},{value:"Methods",id:"methods",level:3},{value:"GET",id:"get",level:4},{value:"POST",id:"post",level:4},{value:"Path: /api/connections/{connectionId}",id:"path-apiconnectionsconnectionid",level:2},{value:"Methods",id:"methods-1",level:3},{value:"DELETE",id:"delete",level:4}],b={toc:g};function f(n){var e,t=n,{components:r}=t,p=((n,e)=>{var t={};for(var i in n)l.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(null!=n&&a)for(var i of a(n))e.indexOf(i)<0&&c.call(n,i)&&(t[i]=n[i]);return t})(t,["components"]);return(0,i.kt)("wrapper",(e=d(d({},b),p),o(e,s({components:r,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"Connections API"),(0,i.kt)("h2",d({},{id:"available-api-paths"}),"Available API Paths"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",d({parentName:"li"},{href:"#apiconnections"}),"/api/connections"),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",d({parentName:"li"},{href:"#apiconnectionsconnectionid"}),"/api/connections/{connectionId}"),(0,i.kt)("br",null))),(0,i.kt)("hr",null),(0,i.kt)("h2",d({},{id:"path-apiconnections"}),"Path: /api/connections"),(0,i.kt)("h3",d({},{id:"methods"}),"Methods"),(0,i.kt)("h4",d({},{id:"get"}),"GET"),(0,i.kt)("p",null,"Returns a list of active connections"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Responses")),(0,i.kt)("table",null,(0,i.kt)("colgroup",null,(0,i.kt)("col",null),(0,i.kt)("col",{style:{minWidth:"250px"}})),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null," Status "),(0,i.kt)("td",null," Description "),(0,i.kt)("td",null," Response Content or Scheme")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 200 "),(0,i.kt)("td",null," List of active connections "),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "id": {\n    "type": "string",\n    "description": "Connection id (must be unique)"\n  },\n  "name": {\n    "type": "string",\n    "description": "Connection text name (must be unique)"\n  },\n  "url": {\n    "type": "string"\n  },\n  "credentials": {\n    "type": "object",\n    "properties": {\n      "username": {\n        "type": "string"\n      },\n      "password": {\n        "type": "string"\n      }\n    }\n  },\n  "rejectUnauthorized": {\n    "type": "boolean",\n    "description": "If true will validate broker\'s certificate (property is considered only if TLS plugins is enabled)"\n  },\n  "ca": {\n    "type": "object",\n    "description": "CA certificate (property is considered only if TLS plugins is enabled)",\n    "properties": {\n      "data": {\n        "description": "Encoded CA certificate",\n        "type": "string"\n      },\n      "encoding": {\n        "description": "Specifies encoding of the data property",\n        "type": "string",\n        "enum": [\n          "base64"\n        ]\n      }\n    }\n  },\n  "cert": {\n    "type": "object",\n    "description": "Client TLS certificate (property is considered only if TLS plugins is enabled)",\n    "properties": {\n      "data": {\n        "description": "Encoded client certificate",\n        "type": "string"\n      },\n      "encoding": {\n        "description": "Specifies encoding of the data property",\n        "type": "string",\n        "enum": [\n          "base64"\n        ]\n      }\n    }\n  },\n  "key": {\n    "type": "object",\n    "description": "Client private key (property is considered only if TLS plugins is enabled)",\n    "properties": {\n      "data": {\n        "description": "Encoded client private key",\n        "type": "string"\n      },\n      "encoding": {\n        "description": "Specifies encoding of the data property",\n        "type": "string",\n        "enum": [\n          "base64"\n        ]\n      }\n    }\n  },\n  "status": {\n    "type": "object",\n    "description": "Connection status of the broker",\n    "required": [\n      "connected",\n      "timestamp"\n    ],\n    "properties": {\n      "connected": {\n        "type": "boolean",\n        "description": "Specifies if the broker is currently connected"\n      },\n      "timestamp": {\n        "type": "integer",\n        "description": "Time when broker was connected to MMC"\n      },\n      "error": {\n        "type": "object",\n        "description": "Error that occured during connecting, if occured (Field is present only in case of an error)",\n        "required": [\n          "code"\n        ],\n        "properties": {\n          "code": {\n            "type": "string",\n            "description": "Error name"\n          },\n          "errno": {\n            "type": "integer",\n            "description": "Numerical id of the error"\n          },\n          "syscall": {\n            "type": "string",\n            "description": "Command that failed"\n          },\n          "address": {\n            "type": "string",\n            "description": "IP address of the broker"\n          },\n          "port": {\n            "type": "integer",\n            "description": "Port of the broker connection"\n          }\n        }\n      }\n    }\n  }\n} \n')))))),(0,i.kt)("hr",null),(0,i.kt)("h4",d({},{id:"post"}),"POST"),(0,i.kt)("p",null,"Creates a connection. Can be used by connectionManager or Admin roles. If a connection error occured on connection creation which is due to a misconfiguartion, a subsequent request with updated information might fix it"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null," Name "),(0,i.kt)("td",null," Location "),(0,i.kt)("td",null," Type "),(0,i.kt)("td",null," Description ")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null," body ")),(0,i.kt)("td",null,"body"),(0,i.kt)("td",null," object "),(0,i.kt)("td",null," A connection object. Properties:",(0,i.kt)("p",null),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "id": {\n    "type": "string",\n    "description": "Connection id (must be unique)"\n  },\n  "name": {\n    "type": "string",\n    "description": "Connection text name (must be unique)"\n  },\n  "url": {\n    "type": "string"\n  },\n  "credentials": {\n    "type": "object",\n    "properties": {\n      "username": {\n        "type": "string"\n      },\n      "password": {\n        "type": "string"\n      }\n    }\n  },\n  "rejectUnauthorized": {\n    "type": "boolean",\n    "description": "If true will validate broker\'s certificate (property is considered only if TLS plugins is enabled)"\n  },\n  "ca": {\n    "type": "object",\n    "description": "CA certificate (property is considered only if TLS plugins is enabled)",\n    "properties": {\n      "data": {\n        "description": "Encoded CA certificate",\n        "type": "string"\n      },\n      "encoding": {\n        "description": "Specifies encoding of the data property",\n        "type": "string",\n        "enum": [\n          "base64"\n        ]\n      }\n    }\n  },\n  "cert": {\n    "type": "object",\n    "description": "Client TLS certificate (property is considered only if TLS plugins is enabled)",\n    "properties": {\n      "data": {\n        "description": "Encoded client certificate",\n        "type": "string"\n      },\n      "encoding": {\n        "description": "Specifies encoding of the data property",\n        "type": "string",\n        "enum": [\n          "base64"\n        ]\n      }\n    }\n  },\n  "key": {\n    "type": "object",\n    "description": "Client private key (property is considered only if TLS plugins is enabled)",\n    "properties": {\n      "data": {\n        "description": "Encoded client private key",\n        "type": "string"\n      },\n      "encoding": {\n        "description": "Specifies encoding of the data property",\n        "type": "string",\n        "enum": [\n          "base64"\n        ]\n      }\n    }\n  }\n} \n')))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{}),'{\n  "id": "mosquitto-dev",\n  "name": "Development Server",\n  "url": "mqtts://url.com:1883",\n  "credentials": {\n    "username": "admin",\n    "password": "adminpassword"\n  },\n  "ca": {\n    "data": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUVBekNDQXV1Z0F3SUJBZ0lVQlkxaGxDR3ZkajROaEJYa1ovd...",\n    "endoding": "base64"\n  },\n  "cert": {\n    "data": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUVBekNDQXV1Z0F3SUJBZ0lVQlkxaGxDR3ZkajROaEJYa1ovd...",\n    "endoding": "base64"\n  },\n  "key": {\n    "data": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUVBekNDQXV1Z0F3SUJBZ0lVQlkxaGxDR3ZkajROaEJYa1ovd...",\n    "endoding": "base64"\n  },\n  "rejectUnauthorized": "true"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Responses")),(0,i.kt)("table",null,(0,i.kt)("colgroup",null,(0,i.kt)("col",null),(0,i.kt)("col",{style:{minWidth:"250px"}})),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null," Status "),(0,i.kt)("td",null," Description "),(0,i.kt)("td",null," Response Content or Scheme")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 200 "),(0,i.kt)("td",null," List of all connections (active or inactive) "),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "id": {\n    "type": "string",\n    "description": "Connection id (must be unique)"\n  },\n  "name": {\n    "type": "string",\n    "description": "Connection text name (must be unique)"\n  },\n  "url": {\n    "type": "string"\n  },\n  "credentials": {\n    "type": "object",\n    "properties": {\n      "username": {\n        "type": "string"\n      },\n      "password": {\n        "type": "string"\n      }\n    }\n  },\n  "rejectUnauthorized": {\n    "type": "boolean",\n    "description": "If true will validate broker\'s certificate (property is considered only if TLS plugins is enabled)"\n  },\n  "ca": {\n    "type": "object",\n    "description": "CA certificate (property is considered only if TLS plugins is enabled)",\n    "properties": {\n      "data": {\n        "description": "Encoded CA certificate",\n        "type": "string"\n      },\n      "encoding": {\n        "description": "Specifies encoding of the data property",\n        "type": "string",\n        "enum": [\n          "base64"\n        ]\n      }\n    }\n  },\n  "cert": {\n    "type": "object",\n    "description": "Client TLS certificate (property is considered only if TLS plugins is enabled)",\n    "properties": {\n      "data": {\n        "description": "Encoded client certificate",\n        "type": "string"\n      },\n      "encoding": {\n        "description": "Specifies encoding of the data property",\n        "type": "string",\n        "enum": [\n          "base64"\n        ]\n      }\n    }\n  },\n  "key": {\n    "type": "object",\n    "description": "Client private key (property is considered only if TLS plugins is enabled)",\n    "properties": {\n      "data": {\n        "description": "Encoded client private key",\n        "type": "string"\n      },\n      "encoding": {\n        "description": "Specifies encoding of the data property",\n        "type": "string",\n        "enum": [\n          "base64"\n        ]\n      }\n    }\n  },\n  "status": {\n    "type": "object",\n    "description": "Connection status of the broker",\n    "required": [\n      "connected",\n      "timestamp"\n    ],\n    "properties": {\n      "connected": {\n        "type": "boolean",\n        "description": "Specifies if the broker is currently connected"\n      },\n      "timestamp": {\n        "type": "integer",\n        "description": "Time when broker was connected to MMC"\n      },\n      "error": {\n        "type": "object",\n        "description": "Error that occured during connecting, if occured (Field is present only in case of an error)",\n        "required": [\n          "code"\n        ],\n        "properties": {\n          "code": {\n            "type": "string",\n            "description": "Error name"\n          },\n          "errno": {\n            "type": "integer",\n            "description": "Numerical id of the error"\n          },\n          "syscall": {\n            "type": "string",\n            "description": "Command that failed"\n          },\n          "address": {\n            "type": "string",\n            "description": "IP address of the broker"\n          },\n          "port": {\n            "type": "integer",\n            "description": "Port of the broker connection"\n          }\n        }\n      }\n    }\n  }\n} \n')))),(0,i.kt)("tr",null,(0,i.kt)("td",null," 403 "),(0,i.kt)("td",null," Forbidden (Connection with the same name/id already exists | Maximum number of connections reached) | User does not have access permissions "),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Connection with the same name/id already exists"),(0,i.kt)("li",null,"Maximum number of connections reached"),(0,i.kt)("li",null,"Connection with either the same name or id already exists")))),(0,i.kt)("tr",null,(0,i.kt)("td",null," 404 "),(0,i.kt)("td",null," Plugin not found/Not enabled "),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Plugin not enabled")))),(0,i.kt)("tr",null,(0,i.kt)("td",null," 500 "),(0,i.kt)("td",null," An internal server error occured "),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Connection already exists but status of the connection not found"),(0,i.kt)("li",null,"Any other error message")))))),(0,i.kt)("hr",null),(0,i.kt)("h2",d({},{id:"path-apiconnectionsconnectionid"}),"Path: /api/connections/{connectionId}"),(0,i.kt)("h3",d({},{id:"methods-1"}),"Methods"),(0,i.kt)("h4",d({},{id:"delete"}),"DELETE"),(0,i.kt)("p",null,"Deletes a specified connection and returns a list of remaining ones. Can be used by connectionManager or Admin roles"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,i.kt)("th",d({parentName:"tr"},{align:null}),"Location"),(0,i.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,i.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",d({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"connectionId")),(0,i.kt)("td",d({parentName:"tr"},{align:null}),"path"),(0,i.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,i.kt)("td",d({parentName:"tr"},{align:null}),"Id of the connection to be deleted")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Responses")),(0,i.kt)("table",null,(0,i.kt)("colgroup",null,(0,i.kt)("col",null),(0,i.kt)("col",{style:{minWidth:"250px"}})),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null," Status "),(0,i.kt)("td",null," Description "),(0,i.kt)("td",null," Response Content or Scheme")),(0,i.kt)("tr",null,(0,i.kt)("td",null," 200 "),(0,i.kt)("td",null," List of remaining connections (active or inactive) "),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "id": {\n    "type": "string",\n    "description": "Connection id (must be unique)"\n  },\n  "name": {\n    "type": "string",\n    "description": "Connection text name (must be unique)"\n  },\n  "url": {\n    "type": "string"\n  },\n  "credentials": {\n    "type": "object",\n    "properties": {\n      "username": {\n        "type": "string"\n      },\n      "password": {\n        "type": "string"\n      }\n    }\n  },\n  "rejectUnauthorized": {\n    "type": "boolean",\n    "description": "If true will validate broker\'s certificate (property is considered only if TLS plugins is enabled)"\n  },\n  "ca": {\n    "type": "object",\n    "description": "CA certificate (property is considered only if TLS plugins is enabled)",\n    "properties": {\n      "data": {\n        "description": "Encoded CA certificate",\n        "type": "string"\n      },\n      "encoding": {\n        "description": "Specifies encoding of the data property",\n        "type": "string",\n        "enum": [\n          "base64"\n        ]\n      }\n    }\n  },\n  "cert": {\n    "type": "object",\n    "description": "Client TLS certificate (property is considered only if TLS plugins is enabled)",\n    "properties": {\n      "data": {\n        "description": "Encoded client certificate",\n        "type": "string"\n      },\n      "encoding": {\n        "description": "Specifies encoding of the data property",\n        "type": "string",\n        "enum": [\n          "base64"\n        ]\n      }\n    }\n  },\n  "key": {\n    "type": "object",\n    "description": "Client private key (property is considered only if TLS plugins is enabled)",\n    "properties": {\n      "data": {\n        "description": "Encoded client private key",\n        "type": "string"\n      },\n      "encoding": {\n        "description": "Specifies encoding of the data property",\n        "type": "string",\n        "enum": [\n          "base64"\n        ]\n      }\n    }\n  },\n  "status": {\n    "type": "object",\n    "description": "Connection status of the broker",\n    "required": [\n      "connected",\n      "timestamp"\n    ],\n    "properties": {\n      "connected": {\n        "type": "boolean",\n        "description": "Specifies if the broker is currently connected"\n      },\n      "timestamp": {\n        "type": "integer",\n        "description": "Time when broker was connected to MMC"\n      },\n      "error": {\n        "type": "object",\n        "description": "Error that occured during connecting, if occured (Field is present only in case of an error)",\n        "required": [\n          "code"\n        ],\n        "properties": {\n          "code": {\n            "type": "string",\n            "description": "Error name"\n          },\n          "errno": {\n            "type": "integer",\n            "description": "Numerical id of the error"\n          },\n          "syscall": {\n            "type": "string",\n            "description": "Command that failed"\n          },\n          "address": {\n            "type": "string",\n            "description": "IP address of the broker"\n          },\n          "port": {\n            "type": "integer",\n            "description": "Port of the broker connection"\n          }\n        }\n      }\n    }\n  }\n} \n')))),(0,i.kt)("tr",null,(0,i.kt)("td",null," 202 "),(0,i.kt)("td",null," Connection was successfully created but when attempting to connect, an error occured "),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Connection created but could not connect")))),(0,i.kt)("tr",null,(0,i.kt)("td",null," 403 "),(0,i.kt)("td",null," Forbidden (Connection with the same name/id already exists | Maximum number of connections reached) | User does not have access permissions "),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Connection with the same name/id already exists"),(0,i.kt)("li",null,"Maximum number of connections reached"),(0,i.kt)("li",null,"Connection with either the same name or id already exists")))),(0,i.kt)("tr",null,(0,i.kt)("td",null," 404 "),(0,i.kt)("td",null," Plugin not found/Not enabled "),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Plugin not enabled")))),(0,i.kt)("tr",null,(0,i.kt)("td",null," 500 "),(0,i.kt)("td",null,"  "),(0,i.kt)("td",null)))),(0,i.kt)("hr",null))}f.isMDXComponent=!0}}]);