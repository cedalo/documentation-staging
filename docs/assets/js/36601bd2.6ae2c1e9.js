"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[22610],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(o),d=r,h=f["".concat(l,".").concat(d)]||f[d]||c[d]||a;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},32072:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>f,metadata:()=>h,toc:()=>g});var n=o(3905),r=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,o)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&p(e,o,t[o]);if(s)for(var o of s(t))u.call(t,o)&&p(e,o,t[o]);return e};const f={id:"protobuf",title:"Protobuf/Sparkplug (Beta)",sidebar_label:"Protobuf/Sparkplug"},d=void 0,h={unversionedId:"guides/connections/protobuf",id:"guides/connections/protobuf",title:"Protobuf/Sparkplug (Beta)",description:"Protobuf/Sparkplug messages work via the general MQTT architecture. Specially designed functions help to integrate them into the regular MQTT message stream.",source:"@site/streamsheets/guides/connections/protobuf.md",sourceDirName:"guides/connections",slug:"/guides/connections/protobuf",permalink:"/documentation-staging/streamsheets/next/guides/connections/protobuf",draft:!1,tags:[],version:"current",frontMatter:{id:"protobuf",title:"Protobuf/Sparkplug (Beta)",sidebar_label:"Protobuf/Sparkplug"},sidebar:"someSidebar",previous:{title:"OPC UA",permalink:"/documentation-staging/streamsheets/next/guides/connections/opcuareq"},next:{title:"TimescaleDB",permalink:"/documentation-staging/streamsheets/next/guides/connections/timescale"}},m={},g=[{value:"MQTT Connection",id:"mqtt-connection",level:2},{value:"Subscription",id:"subscription",level:3},{value:"Sparkplug Functions",id:"sparkplug-functions",level:2},{value:"Protobuf Functions",id:"protobuf-functions",level:2},{value:"Mount a .proto file",id:"mount-a-proto-file",level:3}],b={toc:g};function k(e){var t,r=e,{components:p}=r,f=((e,t)=>{var o={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&u.call(e,n)&&(o[n]=e[n]);return o})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},b),f),a(t,i({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Protobuf/Sparkplug messages work via the general MQTT architecture. Specially designed functions help to integrate them into the regular MQTT message stream.  "),(0,n.kt)("p",null,"Protobuf and Sparkplug are two technologies that work together within the context of MQTT. Protobuf is a binary serialization protocol developed by Google, while Sparkplug is an open-source project to define a standard set of payloads for use with MQTT. Together, they allow applications to send data over networks efficiently in a compact format. Protobuf encodes messages into binary form before sending them across the network, which reduces bandwidth usage and latency compared to other formats, such as XML or JSON. Meanwhile, Sparkplug provides additional features like message type identification and versioning so that receivers can easily interpret incoming messages without needing any prior knowledge about their contents or structure. Both technologies are useful in IoT applications due to their efficiency and ease-of-use; they enable devices from different vendors/manufacturers to communicate with each other using common protocols regardless of platform differences"),(0,n.kt)("h2",c({},{id:"mqtt-connection"}),"MQTT Connection"),(0,n.kt)("p",null,"As a basis a MQTT connection to a broker is needed. Find out ",(0,n.kt)("a",c({parentName:"p"},{href:"/documentation-staging/streamsheets/next/guides/connections/mqtt"}),"here")," how to define the details. "),(0,n.kt)("h3",c({},{id:"subscription"}),"Subscription"),(0,n.kt)("p",null,'Protobuf/Sparkplug messages are binary encoded. The inbox only supports "regular" data formats like JSON or strings. To be able to work with binaries, a certain "DataType" setting is necessary. This is not yet configurable via the subscription menu in the connection. Use the MQTT.SUBSCRIBE() function instead. The MQTT.SUBSCRIBE function is creating a subscription in your app based on a defined connection to a specific Inbox. We trigger this function first, to make sure that the Inbox in Sheet2 will be configured to the "binary" payload before sending one via a MQTT.PUBLISH.'),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'=MQTT.SUBSCRIBE(MQTT_Connection!,"topic",INBOX(Sheet2!),,,,,,"binary")')),(0,n.kt)("p",null,'The data type parameter set to "binary" allows an inbox to interpret the incoming binary message. Make sure this function is triggered once, before the message you want to receive arrives in your inbox. '),(0,n.kt)("h2",c({},{id:"sparkplug-functions"}),"Sparkplug Functions"),(0,n.kt)("p",null,"To work with Sparkplug messages in Streamsheets you can either en- or decode a message. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/documentation-staging/streamsheets/next/functions/dataformats/sparkplugencode"}),"SPARKPLUG.ENCODE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/documentation-staging/streamsheets/next/functions/dataformats/sparkplugdecode"}),"SPARKPLUG.DECODE"))),(0,n.kt)("p",null,"A message to be en- or decoded always has to be structured as defined in the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://sparkplug.eclipse.org/specification/"}),"Sparkplug specifications"),". The payload can have five different fields described ",(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/eclipse/tahu/blob/master/sparkplug_b/sparkplug_b.proto"}),"here"),' ("timestamp", "metrics", "seq", "uuid" and "body").'),(0,n.kt)("p",null,"For encoding create the needed JSON structure resembling your data and reference that in the message parameter. The encoded data appears in the set target cell or in the function cell itself. Now use a ",(0,n.kt)("a",c({parentName:"p"},{href:"../../functions/connection/mqttpublish"}),"MQTT.PUBLISH()")," function to send the data, by referencing the encoded payload as the MQTT payload. "),(0,n.kt)("p",null,"For decoding make sure, that you have subscribed to the topic the binary/sparkplug message is send to, as described in ",(0,n.kt)("a",c({parentName:"p"},{href:"#subscription"}),"Subscription"),'.\nThe decoding function has to reference the "data" array from the inbox in the message parameter. The fastest way to do so is to use the DOT notation: ',(0,n.kt)("em",{parentName:"p"},"INBOXDATA.data")),(0,n.kt)("p",null,"e.g. ",(0,n.kt)("em",{parentName:"p"},"=SPARKPLUG.DECODE(INBOXDATA.data,A9)")),(0,n.kt)("p",null,"A9 in this example now shows the original JSON of the Sparkplug message. "),(0,n.kt)("img",{src:o(19047).Z,width:"100%"}),(0,n.kt)("h2",c({},{id:"protobuf-functions"}),"Protobuf Functions"),(0,n.kt)("p",null,"Protobuf functions work similar to the Sparkplug ones, but require some further clarification. The main difference is, that Protobuf messages can have different underlying Protobuf files. While Sparkplug always uses the same. To address this difference, the Protobuf functions have two further parameters. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MessageType: Sets a certain message type set within a Protobuf file"),(0,n.kt)("li",{parentName:"ul"},"Protobuf file: Structures the content of a Protobuf message. Both sender and receiver of the Protobuf message have to use the same file for to make encoding and decoding work. ")),(0,n.kt)("h3",c({},{id:"mount-a-proto-file"}),"Mount a .proto file"),(0,n.kt)("p",null,"The Protobuf file has to be manually placed in your system files so Streamsheets can read it. This path has to be mounted to your installation within the docker-compose.yml of your installation. If you are a hosted customer please contact support, so they can arrange this configuration for you. "),(0,n.kt)("p",null,'To add a mount go into your .yml file and find the "volumes" section under in the "streamsheets" configuration.\nThere you add a statement like the following: '),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"- ./sparkplug_b.proto:/protobuf/sparkplug_b.proto")),(0,n.kt)("p",null,'This maps your operating system files to your docker files. The ":" in the middle separates the two paths. The left path is the one from your operating system and the right one is within docker. This setting will search for a file called: "sparkplug_b.proto" on the same level as your docker-compose.yml file and mount it into the docker path on the right.\nNow restart your installation and use the docker path in your functions to tell Streamsheets where to look for it. '),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},'=PROTOBUF.ENCODE(B12:C15,"Payload","/protobuf/sparkplug_b.proto")')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},'=PROTOBUF.DECODE(INBOXDATA.data,"Payload","/protobuf/sparkplug_b.proto",A9)'))))}k.isMDXComponent=!0},19047:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/sparkplugfunctions-2b6fa1f319f0d4ca843ba31bb3e2617b.png"}}]);