"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[62856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(f,s(s({ref:t},u),{},{components:n})):o.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>f,toc:()=>g});var o=n(3905),r=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e};const d={id:"loop",title:"Payload Looping",sidebar_label:"Loop"},m=void 0,f={unversionedId:"guides/sheets/loop",id:"guides/sheets/loop",title:"Payload Looping",description:"Looping inbox payloads allows looking at payload elements individually.",source:"@site/streamsheets/guides/sheets/loop.md",sourceDirName:"guides/sheets",slug:"/guides/sheets/loop",permalink:"/documentation-staging/streamsheets/next/guides/sheets/loop",draft:!1,tags:[],version:"current",frontMatter:{id:"loop",title:"Payload Looping",sidebar_label:"Loop"},sidebar:"someSidebar",previous:{title:"JSON Range",permalink:"/documentation-staging/streamsheets/next/guides/sheets/jsonrange"},next:{title:"Settings",permalink:"/documentation-staging/streamsheets/next/guides/sheets/sheetsettings"}},h={},g=[{value:"Inbox Loop",id:"inbox-loop",level:2}],y={toc:g};function b(e){var t,r=e,{components:u}=r,d=((e,t)=>{var n={};for(var o in e)i.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&p.call(e,o)&&(n[o]=e[o]);return n})(r,["components"]);return(0,o.kt)("wrapper",(t=c(c({},y),d),a(t,s({components:u,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"Looping inbox payloads allows looking at payload elements individually. "),(0,o.kt)("h2",c({},{id:"inbox-loop"}),"Inbox Loop"),(0,o.kt)("p",null,'Inbox messages can consist out of different objects. There are the regular parameters like boolean, number or string elements, which are holding the actual information, and there are structural elements like "dictionaries" and "arrays". The structural elements are ordering the information in different hierarchies. While "dictionaries" only serve as folder elements to organize message data in different levels, "arrays" usually follow a certain style and represent an ordered list of values.\nThey repeat the same form for a certain amount of time. For example, if a message should hold different information for the same parameters an array would be the perfect choice. '),(0,o.kt)("p",null,"Simple example:\nYou could structure multiple sensor information from the same parameter in one message. Let's say you have three sensors, who all measure temperature: Sensor 1 measured 10\xb0C, Sensor 2 measured 20\xb0C and Sensor 3 measured 12\xb0C."),(0,o.kt)("p",null,"A JSON object capturing this information would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{}),'[    {\n"sensor_id":"S1",\n"temp":10\n},\n{\n"sensor_id":"S2",\n"temp":20\n},\n{\n"sensor_id":"S3",\n"temp":12\n}    ]\n')),(0,o.kt)("p",null,"In a Streamsheet Inbox this would look like this:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"JSON Array in Streamsheets")),(0,o.kt)("p",null,"In Streamsheets, it is now possible to loop these arrays. When looping an array, every array object gets treated as part of a single message. Usually, one message takes one step to be processed. Adding a loop to our example message would now result in three steps. Streamsheets would read only one of the three information blocks in every step.\nThere are two main reasons why this seems practical. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The array is filled with messages you want to process one after another."),(0,o.kt)("li",{parentName:"ol"},"The array varies in size, and you never know how big an array could get. So adding simple READ() functions does not cut it. ")),(0,o.kt)("p",null,'Adding a loop element is quit simple. Wait for one message to arrive in the inbox, right-click on the top array element and select "Set Loop Element". It is also possible to set the loop element in the Inbox settings. There you can also add the option "recursively", if you not just want to loop through an array, but want to loop through more than just one level of an "array" or even "dictionary" object.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Payload:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"payload",src:n(59111).Z,width:"1337",height:"712"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'right click on "Data" to set loop element')),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Inboxsettings:")),(0,o.kt)("p",null,"Set the Loop in the Inbox settings or in the payload."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"loop",src:n(69877).Z,width:"1269",height:"785"})),(0,o.kt)("p",null,"Now the incoming message will be treated in three singular steps.\nYou may notice that dragging and dropping the Payload items creates a different function than usual. "),(0,o.kt)("p",null,"In a loop:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'=READ(INBOXDATA(,,,"sensor_id"),G8,"String",,TRUE)')),(0,o.kt)("p",null,"No loop:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'=READ(INBOXDATA(,,"0","sensor_id"),C17,"String",,TRUE)')),(0,o.kt)("p",null,'The loop function is not fixed upon the "0" element and reads the payload information for every loop step. This way, one READ() function covers all loop steps.'),(0,o.kt)("iframe",{title:"vimeo-player",src:"https://player.vimeo.com/video/759921367?h=83ffe23ca4",width:"640",height:"440",frameborder:"0",allowfullscreen:!0}))}b.isMDXComponent=!0},59111:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/PayloadLoop-89397b4523a112bb7a27dff62897ff33.png"},69877:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/loop-a13175c35dcb46d0e5bc8f99f2c75cde.png"}}]);