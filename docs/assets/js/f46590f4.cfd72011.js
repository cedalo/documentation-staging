"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[27291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>w,frontMatter:()=>m,metadata:()=>k,toc:()=>f});var a=n(3905),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e};const m={id:"mosquitto-manpage-passwd",title:"Password Manager",sidebar_label:"Password Manager"},c=void 0,k={unversionedId:"mosquitto-manpage-passwd",id:"version-2.6/mosquitto-manpage-passwd",title:"Password Manager",description:"mosquitto_passwd`",source:"@site/mosquitto_versioned_docs/version-2.6/NOTUSED_manpage-mosquitto-passwd.md",sourceDirName:".",slug:"/mosquitto-manpage-passwd",permalink:"/documentation-staging/mosquitto/mosquitto-manpage-passwd",draft:!1,tags:[],version:"2.6",frontMatter:{id:"mosquitto-manpage-passwd",title:"Password Manager",sidebar_label:"Password Manager"}},h={},f=[{value:"mosquitto_passwd`",id:"mosquitto_passwd",level:3},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Options",id:"options",level:4},{value:"Exit Status",id:"exit-status",level:4},{value:"Examples",id:"examples",level:4},{value:"Certificates",id:"certificates",level:4},{value:"How to create client certificates:",id:"how-to-create-client-certificates",level:4},{value:"Explanation about Device Authentication.",id:"explanation-about-device-authentication",level:4}],N={toc:f};function w(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},N),u),r(t,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("h3",d({},{id:"mosquitto_passwd"}),"mosquitto_passwd`"),(0,a.kt)("h4",d({},{id:"synopsis"}),"Synopsis"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_passwd [ -H hash ] [ -c | -D ] passwordfile username"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_passwd [ -H hash ] -b passwordfile username password"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_passwd -U passwordfile")))),(0,a.kt)("h4",d({},{id:"description"}),"Description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_passwd")," is a tool for managing password files for the mosquitto MQTT broker."),(0,a.kt)("p",null,'Usernames must not contain ":". Passwords are stored in a similar format to crypt.'),(0,a.kt)("h4",d({},{id:"options"}),"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-b")),(0,a.kt)("p",null,"Run in batch mode. This allows the password to be provided at the command line which can be convenient but should be used with care because the password will be visible on the command line and in command history."),(0,a.kt)("p",null,"Add a user to an existing password file, passing the password on the command line: ",(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_passwd -b /etc/mosquitto/passwd ral z2Dr0BsvtZ")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-c")),(0,a.kt)("p",null,"Create a new password file. If the file already exists, it will be overwritten."),(0,a.kt)("p",null,"Add a user to a new password file:\n",(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_passwd -c /etc/mosquitto/passwd ral")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-D")),(0,a.kt)("p",null,"Delete the specified user from the password file."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_passwd -D /etc/mosquitto/passwd ral")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-H")),(0,a.kt)("p",null,"Choose the hash to use. Can be one of sha512-pbkdf2 or sha512. Defaults to sha512-pbkdf2. The sha512 option is provided for creating password files for use with Eclipse Mosquitto 1.6 and earlier."),(0,a.kt)("p",null,"Add a user to an existing password file using the sha512 hash for Mosquitto 1.6 compatibility: ",(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_passwd -H sha512 /etc/mosquitto/passwd ral")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-U")),(0,a.kt)("p",null,"This option can be used to upgrade/convert a password file with plain text passwords into one using hashed passwords. It will modify the specified file. It does not detect whether passwords are already hashed, so using it on a password file that already contains hashed passwords will generate new hashes based on the old hashes and render the password file unusable."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"passwordfile")),(0,a.kt)("p",null,"The password file to modify."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"username")),(0,a.kt)("p",null,"The username to add/update/delete."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"password")),(0,a.kt)("p",null,"The password to use when in batch mode."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_passwd -b -c <path> -D user1 -H sha512 - U <path> <path> user2 passwordexample")),(0,a.kt)("p",null,"Update the password for a user in an existing password file: ",(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_passwd /etc/mosquitto/passwd ral")),(0,a.kt)("p",null,"Add a user to an existing password file: ",(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_passwd /etc/mosquitto/passwd ral")),(0,a.kt)("h4",d({},{id:"exit-status"}),"Exit Status"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_sub")," returns zero on success, or non-zero on error. If the connection is refused by the broker at the MQTT level, then the exit code is the CONNACK reason code. If another error occurs, the exit code is a libmosquitto return value."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MQTT v3.1.1 CONNACK codes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0")," Success"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," Connection refused: ",(0,a.kt)("inlineCode",{parentName:"li"},"Bad protocol version")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2")," Connection refused: ",(0,a.kt)("inlineCode",{parentName:"li"},"Identifier rejected")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"3")," Connection refused: ",(0,a.kt)("inlineCode",{parentName:"li"},"Server unavailable")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"4")," Connection refused: ",(0,a.kt)("inlineCode",{parentName:"li"},"Bad username/password")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"5")," Connection refused: ",(0,a.kt)("inlineCode",{parentName:"li"},"Not authorized"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MQTT v5 CONNACK codes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"0")," Success")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"128")," Unspecified error")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"129")," Malformed packet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"130")," Protocol error")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"131")," Implementation specific error")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"132")," Unsupported protocol version")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"133")," Client ID not valid")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"134")," Bad username or password")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"135")," Not authorized")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"136")," Server unavailable")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"137")," Server busy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"138")," Banned")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"139")," Server shutting down")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"140")," Bad authentication method")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"141")," Keep alive timeout")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"142")," Session taken over")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"143")," Topic filter invalid")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"144")," Topic name invalid")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"147")," Receive maximum exceeded")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"148")," Topic alias invalid")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"149")," Packet too large")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"150")," Message rate too high")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"151")," Quota exceeded")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"152")," Administrative action")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"153")," Payload format invalid")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"154")," Retain not supported")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"155")," QoS not supported")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"156")," Use another server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"157")," Server moved")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"158")," Shared subscriptions not supported")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"159")," Connection rate exceeded")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"160")," Maximum connect time")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"161")," Subscription IDs not supported")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"162")," Wildcard subscriptions not supported"))),(0,a.kt)("h4",d({},{id:"examples"}),"Examples"),(0,a.kt)("p",null,"Add a user to a new password file:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_passwd -c /etc/mosquitto/passwd ral")),(0,a.kt)("p",null,"Delete a user from a password file:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_passwd -D /etc/mosquitto/passwd ral")),(0,a.kt)("p",null,"The Dynamic Security plugin offers a easy to use GUI to configure security measurements."),(0,a.kt)("p",null,"Read more about ","[Dynamic Security]"," (NEW_management-center.md#dynamic-security)."),(0,a.kt)("p",null,"If you want more control over authentication of your users than is offered by a password file, then an authentication plugin may be suitable for you. The features offered depend on which plugin you use."),(0,a.kt)("p",null,"Configuring the plugin Configuring a plugin varies depending on the version of Mosquitto plugin interface the plugin was written for, either version 2.0 and up, or 1.6.x and earlier. For 1.6.x and below, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"auth_plugin")," option. These plugins are also supported by version 2.0:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"listener 1883")," ",(0,a.kt)("inlineCode",{parentName:"p"},"auth_plugin <path to plugin>")),(0,a.kt)("p",null,"Some plugins require extra configuration which will be described in their documentation. For 2.0 and up, use the plugin option:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"listener 1883")," ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin <path to plugin>")),(0,a.kt)("p",null,"Read more about ","[Available plugins]"," (NEW_management-center.md#available-plugins)."),(0,a.kt)("h4",d({},{id:"certificates"}),"Certificates"),(0,a.kt)("p",null,"The highest security levels can be achieved using client certificates (x509)."),(0,a.kt)("p",null,"When using certificate based encryption there are three options that affect authentication."),(0,a.kt)("p",null,"The first is ",(0,a.kt)("inlineCode",{parentName:"p"},"require_certificate"),", which may be set to true or false. If false, the TLS component of the client will verify the server but there is no requirement for the client to provide anything for the server: authentication is limited to the MQTT built in username/password. If ",(0,a.kt)("inlineCode",{parentName:"p"},"require_certificate")," is true, the client must provide a valid certificate in order to connect successfully."),(0,a.kt)("p",null,"In this case, the second and third options, ",(0,a.kt)("inlineCode",{parentName:"p"},"use_identity_as_username")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"use_subject_as_username"),", become relevant. If set to true, ",(0,a.kt)("inlineCode",{parentName:"p"},"use_identity_as_username")," causes the Common Name (CN) from the client certificate to be used instead of the MQTT username for access control purposes."),(0,a.kt)("p",null,"The password is not used because it is assumed that only authenticated clients have valid certificates. This means that any CA certificates you include in cafile or capath will be able to issue client certificates that are valid for connecting to your broker. If ",(0,a.kt)("inlineCode",{parentName:"p"},"use_identity_as_username")," is false, the client must authenticate as normal (if required by ",(0,a.kt)("inlineCode",{parentName:"p"},"password_file"),") through the MQTT options. The same principle applies for the ",(0,a.kt)("inlineCode",{parentName:"p"},"use_subject_as_username")," option, but the entire certificate subject is used as the username instead of just the CN."),(0,a.kt)("h4",d({},{id:"how-to-create-client-certificates"}),"How to create client certificates:"),(0,a.kt)("p",null,"Generate a private key and certificate signing request. Send the CSR to a commercial Certificate Authority with some money, and the CA sends you a certificate."),(0,a.kt)("p",null,"Generate a private key and own self signed certificate to act as a Certificate Authority, then generate a server private key and CSR and sign the server CSR with your CA private key to generate the server certificate (clients need the CA certificate, and this can be used for multiple servers)."),(0,a.kt)("p",null,"Read more about Authorization:\n","[Here]"," (NEW_publishing.md).\nAnd ","[here]"," (NEW_mosquitto-configuration.md#tls-support)."),(0,a.kt)("h4",d({},{id:"explanation-about-device-authentication"}),"Explanation about Device Authentication."),(0,a.kt)("p",null,"When using pre-shared-key based encryption through the ",(0,a.kt)("inlineCode",{parentName:"p"},"psk_hint")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"psk_file")," options, the client must provide a valid identity and key in order to connect to the broker before any MQTT communication takes place."),(0,a.kt)("admonition",d({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Digression:")," PSK"),(0,a.kt)("p",{parentName:"admonition"},"A pre-shared key (PSK) is a previously exchanged key for symmetric encryption. This allows data to be both encrypted and decrypted. ")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"use_identity_as_username")," is true, the PSK identity is used instead of the MQTT username for access control purposes. If ",(0,a.kt)("inlineCode",{parentName:"p"},"use_identity_as_username")," is false, the client may still authenticate using the MQTT username/password if using the ",(0,a.kt)("inlineCode",{parentName:"p"},"password_file")," option."),(0,a.kt)("p",null,"Both certificate and PSK based encryption are configured on a per-listener basis."),(0,a.kt)("p",null,"Authentication plugins can be created to augment the ",(0,a.kt)("inlineCode",{parentName:"p"},"password_file"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"acl_file")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"psk_file")," options with e.g. SQL based lookups."),(0,a.kt)("p",null,"Read more about Certificates:\n","[Here]"," (NEW_publishing.md).\nAnd ","[here]"," (NEW_mosquitto-configuration.md#tls-support)."),(0,a.kt)("p",null,"It is possible to support multiple authentication schemes at once. A config could be created that had a listener for all of the different encryption options described above and hence a large number of ways of authenticating."))}w.isMDXComponent=!0}}]);