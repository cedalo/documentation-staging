"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[64037],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},74233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>O,frontMatter:()=>h,metadata:()=>m,toc:()=>b});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e};const h={id:"dot",title:"DOT Notation",sidebar_label:"DOT Notation"},d=void 0,m={unversionedId:"guides/sheets/dot",id:"guides/sheets/dot",title:"DOT Notation",description:"Usually, references only reference a cell or cell range. The DOT notation goes one step further. It allows breaking down hierarchies and references to objects, which usually are not directly reachable. These hierarchies can be part of a JSON object, like messages in the inbox or values from shapes.",source:"@site/streamsheets/guides/sheets/dot.md",sourceDirName:"guides/sheets",slug:"/guides/sheets/dot",permalink:"/documentation-staging/streamsheets/next/guides/sheets/dot",draft:!1,tags:[],version:"current",frontMatter:{id:"dot",title:"DOT Notation",sidebar_label:"DOT Notation"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/documentation-staging/streamsheets/next/guides/sheets/"},next:{title:"Execute",permalink:"/documentation-staging/streamsheets/next/guides/sheets/execute"}},f={},b=[{value:"Usage",id:"usage",level:2},{value:"Cell level",id:"cell-level",level:2},{value:"Inbox &amp; Outbox",id:"inbox--outbox",level:2},{value:"Shapes",id:"shapes",level:2},{value:"Loop",id:"loop",level:2}],g={toc:b};function O(e){var t,a=e,{components:c}=a,h=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(a,["components"]);return(0,r.kt)("wrapper",(t=u(u({},g),h),o(t,l({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Usually, references only reference a cell or cell range. The DOT notation goes one step further. It allows breaking down hierarchies and references to objects, which usually are not directly reachable. These hierarchies can be part of a JSON object, like messages in the inbox or values from shapes."),(0,r.kt)("h2",u({},{id:"usage"}),"Usage"),(0,r.kt)("p",null,"Using the DOT notation is very simple. Just combine the different levels of a JSON hirarchy into a list separated by dots. This way the reference knows where to locate your searched data."),(0,r.kt)("h2",u({},{id:"cell-level"}),"Cell level"),(0,r.kt)("p",null,"To work with the DOT notation on the cell level, it is necessary to have a JSON object inserted in a cell. There are multiple ways this could happen. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Via a query:")," Use the target parameter of a query on only one cell and the response will be pasted into the cell as a JSON object.\n",(0,r.kt)("strong",{parentName:"p"},"Via function:")," JSON() is a function, which creates JSON objects. "),(0,r.kt)("p",null,"Reference the cell with the JSON object in position one. Now add the hierarchy level until you reach the parameter. "),(0,r.kt)("p",null,"Example:"),(0,r.kt)("p",null,"In cell A1 a pure STRING, but already a JSON notation:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),'{"level1":{"level2":{"parameter1":12,"parameter2":31}}}\n\n')),(0,r.kt)("p",null,'To get the value 12 as a result, use =JSON(A1) in A2. Now you can reference A2 and use the DOT notation to get to the value of "parameter1". '),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"=A2.\u201dlevel1\u201d.\u201dlevel2\u201d.\u201dparameter1\u201d\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DOT",src:n(77397).Z,width:"1262",height:"284"})),(0,r.kt)("h2",u({},{id:"inbox--outbox"}),"Inbox & Outbox"),(0,r.kt)("p",null,"Besides using JSON objects in a cell, it is possible to directly link the in- & outbox to a cell. "),(0,r.kt)("p",null,"Example:\nIn the inbox, the following message arrived:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Images",src:n(33262).Z,width:"203",height:"329"})),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),'=INBOXDATA.0."sensorid"\n')),(0,r.kt)("p",null,'This DOT notation will again result in "S1".\nAnother syntax in this context:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"INBOX")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"INBOXDATA")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"INBOXMETADATA")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"OUTBOX")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"OUTBOXDATA")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"OUTBOXMETADATA"))),(0,r.kt)("h2",u({},{id:"shapes"}),"Shapes"),(0,r.kt)("p",null,"Another very powerful application of the DOT notation is using it to identify shape content.\nUse the name set in the \u201cGeneral\u201d tab of your shape settings and enter:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"=Name.\u201dVALUE\u201d\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Images",src:n(63059).Z,width:"689",height:"253"})),(0,r.kt)("p",null,"Other possible parameter are: X, Y, W (Width), H (Height), ROTATION, VISIBLE, VALUE, NAME "),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"=Name.\u201dX\u201d\n")),(0,r.kt)("h2",u({},{id:"loop"}),"Loop"),(0,r.kt)("p",null,"The Loop element from your inbox uses the DOT notation to point to a certain hierarchy level to loop over. "),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"Data.test.0\n")),(0,r.kt)("p",null,"It is set in the Inbox advanced settings, or you can skip the DOT notation alltogether by right-clicking on a payload element."))}O.isMDXComponent=!0},77397:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/DOT-41ae5b282d480b6d618e5ffde2ddba8a.png"},33262:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Payload-446097a420c6ed4e2b5711c85826c60b.png"},63059:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dotshape-05ebf47eb225ac49a6bc61cf48b55121.png"}}]);