"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[4076],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),g=a,f=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45305:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>g,default:()=>v,frontMatter:()=>d,metadata:()=>f,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&u(e,r,t[r]);return e};const d={id:"sparkplug-awareness",title:"Sparkplug Awareness",sidebar_label:"Sparkplug Awareness"},g=void 0,f={unversionedId:"advanced-features/sparkplug/sparkplug-awareness",id:"advanced-features/sparkplug/sparkplug-awareness",title:"Sparkplug Awareness",description:"The Sparkplug specification version 3.0 has certain requirements of an MQTT",source:"@site/mosquitto/advanced-features/sparkplug/sparkplug-awareness.md",sourceDirName:"advanced-features/sparkplug",slug:"/advanced-features/sparkplug/sparkplug-awareness",permalink:"/documentation-staging/mosquitto/next/advanced-features/sparkplug/sparkplug-awareness",draft:!1,tags:[],version:"current",frontMatter:{id:"sparkplug-awareness",title:"Sparkplug Awareness",sidebar_label:"Sparkplug Awareness"},sidebar:"someSidebar",previous:{title:"Persistent Ensured QoS1/QoS2 Message Handling",permalink:"/documentation-staging/mosquitto/next/advanced-features/persistent-message-handling"},next:{title:"Sparkplug Decode",permalink:"/documentation-staging/mosquitto/next/advanced-features/sparkplug/sparkplug-decode"}},m={},b=[{value:"Plugin Activation",id:"plugin-activation",level:2}],k={toc:b};function v(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},k),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The Sparkplug specification version 3.0 has certain requirements of an MQTT\nbroker to be usable for Sparkplug."),(0,n.kt)("p",null,'The first category is "Sparkplug Compliance", which means that the broker\nsupports basic MQTT features. Any MQTT compliant broker should also be\nSparkplug compliant.'),(0,n.kt)("p",null,'The second category is "Sparkplug Aware", which requires that certain Sparkplug\nmessages are automatically republished by the broker on a different topic. This\nrelates to all ',(0,n.kt)("inlineCode",{parentName:"p"},"NBIRTH")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"DBIRTH")," messages, and provides a mechanism to have\na persistent store of birth certificates."),(0,n.kt)("p",null,"More specifically, all messages published matching the topic\n",(0,n.kt)("inlineCode",{parentName:"p"},"spBv1.0/+/NBIRTH/+")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"spBv1.0/+/DBIRTH/+/+")," will be republished on the same\ntopic, but prefixed with ",(0,n.kt)("inlineCode",{parentName:"p"},"$sparkplug/certificates/"),". In other words, a message\npublished on ",(0,n.kt)("inlineCode",{parentName:"p"},"spBv1.0/group_id/NBIRTH/edge_node_id")," would be republished on\n",(0,n.kt)("inlineCode",{parentName:"p"},"$sparkplug/certificates/spBv1.0/group_id/NBIRTH/edge_node_id")),(0,n.kt)("p",null,"Sparkplug awareness would not be part of a standard MQTT broker and is\ntypically provided as an extension."),(0,n.kt)("p",null,"Mosquitto is Sparkplug compliant out of the box without any configuration."),(0,n.kt)("p",null,"For Sparkplug awareness support, Mosquitto provides a plugin."),(0,n.kt)("h2",c({},{id:"plugin-activation"}),"Plugin Activation"),(0,n.kt)("p",null,"To enable the plugin it must be loaded into the broker with, by adding the\nfollowing to your ",(0,n.kt)("inlineCode",{parentName:"p"},"mosquitto.conf"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-aconf"}),"global_plugin /usr/lib/mosquitto_sparkplug_aware.so\n")),(0,n.kt)("p",null,"There is no further configuration required."))}v.isMDXComponent=!0}}]);