"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[41554],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(t),p=r,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return t?o.createElement(f,c(c({ref:n},u),{},{components:t})):o.createElement(f,c({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67157:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>p,default:()=>g,frontMatter:()=>m,metadata:()=>f,toc:()=>b});var o=t(3905),r=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&u(e,t,n[t]);if(a)for(var t of a(n))l.call(n,t)&&u(e,t,n[t]);return e};const m={id:"mc-connections",title:"Broker Connections",sidebar_label:"Broker Connections"},p=void 0,f={unversionedId:"management-center/overview/configuration/mc-connections",id:"version-2.7/management-center/overview/configuration/mc-connections",title:"Broker Connections",description:"The Broker connections define the access to existing broker instances. Before you can manage or inspect a broker,",source:"@site/mosquitto_versioned_docs/version-2.7/management-center/overview/configuration/connections.md",sourceDirName:"management-center/overview/configuration",slug:"/management-center/overview/configuration/mc-connections",permalink:"/documentation-staging/mosquitto/2.7/management-center/overview/configuration/mc-connections",draft:!1,tags:[],version:"2.7",frontMatter:{id:"mc-connections",title:"Broker Connections",sidebar_label:"Broker Connections"},sidebar:"someSidebar",previous:{title:"Configuration",permalink:"/documentation-staging/mosquitto/2.7/management-center/overview/configuration/"},next:{title:"Client CA Management",permalink:"/documentation-staging/mosquitto/2.7/management-center/overview/configuration/mc-certificates"}},h={},b=[{value:"Broker Connections Overview",id:"broker-connections-overview",level:2},{value:"Create a new Broker Connection",id:"create-a-new-broker-connection",level:2},{value:"Edit Broker Connection",id:"edit-broker-connection",level:2},{value:"Delete Broker Connection",id:"delete-broker-connection",level:2}],k={toc:b};function g(e){var n,r=e,{components:u}=r,m=((e,n)=>{var t={};for(var o in e)s.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&a)for(var o of a(e))n.indexOf(o)<0&&l.call(e,o)&&(t[o]=e[o]);return t})(r,["components"]);return(0,o.kt)("wrapper",(n=d(d({},k),m),i(n,c({components:u,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"The ",(0,o.kt)("a",d({parentName:"p"},{href:"/documentation-staging/mosquitto/2.7/MQTT/mqtt-glossary#Broker"}),"Broker")," connections define the access to existing broker instances. Before you can manage or inspect a broker,\nyou have to define the configuration of the broker by providing a name and the credentials. "),(0,o.kt)("h2",d({},{id:"broker-connections-overview"}),"Broker Connections Overview"),(0,o.kt)("p",null,"The Broker Connection table shows the details and availability of the defined broker configurations. For every\nconnection, you will see the Name, Id and URL of the connection. At the right side of the table, you can observe,\nwhether the connection is connected to the broker instance. If it is not connected, you are not able to inspect\nor configure the broker instance. There are twoaActions available for each connection. One connects or disconnects to\na broker instance. The other deletes the broker connection from the list of connections."),(0,o.kt)("p",null,"Below a sample of defined Broker Connections:"),(0,o.kt)("img",{className:"docimagemb",src:t(45937).Z,width:"100%"}),(0,o.kt)("h2",d({},{id:"create-a-new-broker-connection"}),"Create a new Broker Connection"),(0,o.kt)("p",null,'To create a new connection, just click on the "New Connection" button at the top right of the page, which leads you to the\nfollowing page. Some default values are provided when the page opens:'),(0,o.kt)("img",{className:"docimagemb",src:t(51685).Z,width:"100%"}),(0,o.kt)("p",null,"The following properties can be set for a new connection:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ID"),": The id of the connection. This has to be unique."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Name"),": The name of the connection."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"URL"),": The URL where the broker is located."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Username"),": Username to log into the broker instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Password"),": Password for the user to log into the broker instance.")),(0,o.kt)("p",null,"If you need certificates to connect to the broker, these can also be provided here."),(0,o.kt)("p",null,'Fill in the values for the broker connection and click "Save" button to create the connection. You can also click\non "Save and Connect" to save and directly connect to the broker.'),(0,o.kt)("admonition",d({},{type:"info"}),(0,o.kt)("p",{parentName:"admonition"},'You can use the "Test Connection" to verify whether the Management Center can establish the connection to the broker\ninstance.')),(0,o.kt)("p",null,"If everything worked correctly the new connection should appear in the Broker Connection Table."),(0,o.kt)("h2",d({},{id:"edit-broker-connection"}),"Edit Broker Connection"),(0,o.kt)("p",null,'To edit existing connections open them up by click on the row of the connection. A new page will open showing the\nconnection infos. Click "Edit" to make changes and save them, when done.'),(0,o.kt)("img",{className:"docimagemb",src:t(6481).Z,width:"100%"}),(0,o.kt)("h2",d({},{id:"delete-broker-connection"}),"Delete Broker Connection"),(0,o.kt)("p",null,"In order to delete a connection you first need to make sure that the Management Center is disconnected from the\ncorresponding broker. To disconnect, just use the switch next to the connection entry. Then to delete the connection,\nclick on the trash symbol next to the connection entry and confirm your decision in the displayed dialog."))}g.isMDXComponent=!0},6481:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/connectionedit-ec67bf0e33b1dc3ec42d9485fe7fe813.png"},51685:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/connectionnew-80448b6ee90ea42ffb0d8d12b216a953.png"},45937:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/connections-f59fb3531934792f23e4e4b91d41f6d5.png"}}]);