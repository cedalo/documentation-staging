"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[20378],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=i,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>b,frontMatter:()=>m,metadata:()=>d,toc:()=>g});var r=n(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&u(e,n,t[n]);return e};const m={id:"security-username",title:"Force Username",sidebar_label:"Force Username"},f=void 0,d={unversionedId:"security/clients/security-username",id:"security/clients/security-username",title:"Force Username",description:"When utilizing this plugin, it mandates that every client's username will automatically be set to match its client id before proceeding with any basic username/password authentication.",source:"@site/mosquitto/security/clients/username.md",sourceDirName:"security/clients",slug:"/security/clients/security-username",permalink:"/documentation-staging/mosquitto/next/security/clients/security-username",draft:!1,tags:[],version:"current",frontMatter:{id:"security-username",title:"Force Username",sidebar_label:"Force Username"},sidebar:"someSidebar",previous:{title:"Roles",permalink:"/documentation-staging/mosquitto/next/security/clients/security-roles"},next:{title:"API Tokens",permalink:"/documentation-staging/mosquitto/next/security/platform-access/api-tokens"}},y={},g=[{value:"Plugin configuration",id:"plugin-configuration",level:2}],h={toc:g};function b(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},h),u),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"When utilizing this plugin, it mandates that every client's ",(0,r.kt)("strong",{parentName:"p"},"username")," will automatically be set to match its ",(0,r.kt)("strong",{parentName:"p"},"client id")," before proceeding with any basic username/password authentication.\nThis feature is particularly beneficial for devices or applications that bypass the use of usernames for authentication purposes, akin to the now obsolete ",(0,r.kt)("strong",{parentName:"p"},"IBM Watson IoT platform"),". It enables such devices or applications to integrate with Mosquitto and utilize usernames for both authentication and authorization, for instance, when leveraging the dynamic security plugin."),(0,r.kt)("p",null,"Moreover, there are additional Mosquitto options that can alter a client's username based on the information contained within a client's TLS certificate. These options include ",(0,r.kt)("inlineCode",{parentName:"p"},"use_identity_as_username")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"use_subject_as_username"),", which should be used in tandem with ",(0,r.kt)("inlineCode",{parentName:"p"},"require_certificate"),". Should either of these options be enabled alongside the ",(0,r.kt)("strong",{parentName:"p"},"Force Username plugin"),", the ultimate username assigned to the client will be the one specified by the ",(0,r.kt)("strong",{parentName:"p"},"Force Username plugin"),"."),(0,r.kt)("admonition",p({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"This feature is currently not editable via the Pro Mosquitto MQTT Platform UI. To make changes, please directly edit the configuration file. If you are a cloud customer please contact our support at ",(0,r.kt)("a",p({parentName:"p"},{href:"mailto:support@cedalo.com"}),"support@cedalo.com"))),(0,r.kt)("h2",p({},{id:"plugin-configuration"}),"Plugin configuration"),(0,r.kt)("p",null,"To configure the plugin, add it to your Mosquitto configuration file ",(0,r.kt)("em",{parentName:"p"},"before"),"\nother authentication plugins. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-aconf"}),"listener 8883\ncertfile <server.pem>\nkeyfile <server.key>\n\nplugin /usr/lib/cedalo_force_username.so\n\nplugin /usr/lib/mosquitto_dynamic_security.so\nplugin_opt_config_file /mosquitto/data/dynamic-security.json\n")),(0,r.kt)("p",null,"There is no further configuration required."))}b.isMDXComponent=!0}}]);