"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[43731],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return o?n.createElement(f,a(a({ref:t},c),{},{components:o})):n.createElement(f,a({ref:t},c))}));function d(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},99730:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>f,toc:()=>b});var n=o(3905),i=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,o)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&c(e,o,t[o]);if(s)for(var o of s(t))u.call(t,o)&&c(e,o,t[o]);return e};const p={id:"mosquitto-overview",title:"Overview",sidebar_label:"Overview"},d=void 0,f={unversionedId:"broker/Mosquitto Manual/mosquitto-overview",id:"version-2.9/broker/Mosquitto Manual/mosquitto-overview",title:"Overview",description:"Mosquitto - an MQTT broker",source:"@site/mosquitto_versioned_docs/version-2.9/broker/Mosquitto Manual/overview.md",sourceDirName:"broker/Mosquitto Manual",slug:"/broker/Mosquitto Manual/mosquitto-overview",permalink:"/documentation-staging/mosquitto/broker/Mosquitto Manual/mosquitto-overview",draft:!1,tags:[],version:"2.9",frontMatter:{id:"mosquitto-overview",title:"Overview",sidebar_label:"Overview"},sidebar:"someSidebar",previous:{title:"Single Sign-On",permalink:"/documentation-staging/mosquitto/management-center/guides/mc-single-sign-on"},next:{title:"Configuration",permalink:"/documentation-staging/mosquitto/broker/Mosquitto Manual/mosquitto-configuration"}},v={},b=[{value:"Mosquitto - an MQTT broker",id:"mosquitto---an-mqtt-broker",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Basic Monitoring",id:"basic-monitoring",level:2},{value:"Files",id:"files",level:2},{value:"Platform limitations",id:"platform-limitations",level:2},{value:"MQTT Compliance",id:"mqtt-compliance",level:2},{value:"v.3.1",id:"v31",level:3},{value:"v.3.1.1",id:"v311",level:3},{value:"v.5.0",id:"v50",level:3}],g={toc:b};function k(e){var t,o=e,{components:i}=o,c=((e,t)=>{var o={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&u.call(e,n)&&(o[n]=e[n]);return o})(o,["components"]);return(0,n.kt)("wrapper",(t=m(m({},g),c),r(t,a({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h2",m({},{id:"mosquitto---an-mqtt-broker"}),"Mosquitto - an MQTT broker"),(0,n.kt)("p",null,"Mosquitto is an open-source lightweight message broker to enable communication between sensors, smartphones, web apps, and other devices within an IoT architecture. Pro Edition for Mosquitto MQTT broker is a more powerful and fully supported version of Mosquitto tailored for commercial use, offering complete compliance with MQTT versions 3 and 5."),(0,n.kt)("p",null,"In this documentation a lot of basic configuration and underlying principles are described.\nMost of this knowledge is not needed while using the Mosquitto UI called Mosquitto Management Center. "),(0,n.kt)("h2",m({},{id:"configuration"}),"Configuration"),(0,n.kt)("p",null,"The broker can be configured using a configuration file as described in ",(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/broker/Mosquitto%20Manual/mosquitto-configuration"}),"configuration")),(0,n.kt)("h2",m({},{id:"basic-monitoring"}),"Basic Monitoring"),(0,n.kt)("p",null,"System topics keep track of system relevant monitoring parameter. See ",(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/broker/Mosquitto%20Manual/broker-topics"}),"here")," a full list."),(0,n.kt)("h2",m({},{id:"files"}),"Files"),(0,n.kt)("p",null,"Files which are being used by the broker:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mosquitto.conf"))),(0,n.kt)("p",null,"Configuration file. See ",(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/broker/Mosquitto%20Manual/mosquitto-configuration"}),"Mosquitto Configuration")," for more information."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mosquitto.db"))),(0,n.kt)("p",null,"Persistent message data storage location if persist enabled. ",(0,n.kt)("inlineCode",{parentName:"p"},"autosave_interval seconds"),"sets the number of seconds that mosquitto will wait between each time it saves the in-memory database to disk. If set to ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),", the in-memory database will only be saved when mosquitto exits or when receiving the SIGUSR1 signal. Note that this setting only has an effect if persistence is enabled. Defaults to 1800 seconds (30 minutes).\nThis option applies globally.\nReloaded on reload signal."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"dynamic-security.json"))),(0,n.kt)("p",null,"Persists the current ",(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/broker/Mosquitto%20Manual/broker-dynamic-security"}),"dynamic security")," configuration to disk."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"streams.json"))),(0,n.kt)("p",null,"Persists the current ",(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/broker/Mosquitto%20Manual/mosquitto-streams"}),"streams")," configuration to disk."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"license.lic"))),(0,n.kt)("p",null,"License file for Pro Mosquitto features from Cedalo Gmbh."),(0,n.kt)("h2",m({},{id:"platform-limitations"}),"Platform limitations"),(0,n.kt)("p",null,"Some versions of Windows have limitations on the number of concurrent connections due to the Windows API being used. In modern versions of Windows, e.g. Windows 10 or Windows Server 2019, this is approximately 8192 connections. In earlier versions of Windows, this limit is 2048 connections."),(0,n.kt)("h2",m({},{id:"mqtt-compliance"}),"MQTT Compliance"),(0,n.kt)("p",null,"The Mosquitto MQTT is MQTT compliant:"),(0,n.kt)("h3",m({},{id:"v31"}),"v.3.1"),(0,n.kt)("p",null,"MQTT Version 3.1:\n",(0,n.kt)("a",m({parentName:"p"},{href:"https://public.dhe.ibm.com/software/dw/webservices/ws-mqtt/mqtt-v3r1.html"}),"https://public.dhe.ibm.com/software/dw/webservices/ws-mqtt/mqtt-v3r1.html")),(0,n.kt)("h3",m({},{id:"v311"}),"v.3.1.1"),(0,n.kt)("p",null,"MQTT Version 3.1.1:\n",(0,n.kt)("a",m({parentName:"p"},{href:"http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html"}),"http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html")),(0,n.kt)("h3",m({},{id:"v50"}),"v.5.0"),(0,n.kt)("p",null,"The MQTT version 5.0 is the next development step in the evolution of MQTT.\nLearn about the ",(0,n.kt)("a",m({parentName:"p"},{href:"https://www.eclipse.org/org/foundation/"}),"Eclipse Foundation"),".\nMajor bugs have been erased. For example in many cases errors led to disconnecting the client from the broker. With v.5.0 negative acknowledgements help to work out ways to solve the problem."))}k.isMDXComponent=!0}}]);