"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[65346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var r=i.createContext({}),u=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,r=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=s,m=d["".concat(r,".").concat(h)]||d[h]||c[h]||a;return n?i.createElement(m,l(l({ref:t},p),{},{components:n})):i.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>k});var i=n(3905),s=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e};const d={id:"subscribing",title:"Subscribing",sidebar_label:"Subscribing"},h=void 0,m={unversionedId:"MQTT/subscribing",id:"version-2.7/MQTT/subscribing",title:"Subscribing",description:'Currently the section "Subscribing" contains "mosquitto_sub" and "Subscription Support". Both are command line tools. Both can publish/subscribe.',source:"@site/mosquitto_versioned_docs/version-2.7/MQTT/NEW_subscribing.md",sourceDirName:"MQTT",slug:"/MQTT/subscribing",permalink:"/documentation-staging/mosquitto/2.7/MQTT/subscribing",draft:!1,tags:[],version:"2.7",frontMatter:{id:"subscribing",title:"Subscribing",sidebar_label:"Subscribing"}},b={},k=[{value:"Subscription Support",id:"subscription-support",level:3},{value:"Introduction Publish / Subscribe",id:"introduction-publish--subscribe",level:4},{value:"Password Management",id:"password-management",level:3},{value:"Unsubscribe",id:"unsubscribe",level:3}],f={toc:k};function g(e){var t,n=e,{components:s}=n,p=((e,t)=>{var n={};for(var i in e)r.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&u.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=c(c({},f),p),a(t,l({components:s,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,'Currently the section "Subscribing" contains "mosquitto_sub" and "Subscription Support". Both are command line tools. Both can publish/subscribe.'),(0,i.kt)("h3",c({},{id:"subscription-support"}),"Subscription Support"),(0,i.kt)("h4",c({},{id:"introduction-publish--subscribe"}),"Introduction Publish / Subscribe"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retain_available [ true | false ]"))),(0,i.kt)("p",null,"If set to false, then retained messages are not supported. Clients that send a message with the retain bit will be disconnected if this option is set to false. Defaults to true."),(0,i.kt)("p",null,"This option applies globally."),(0,i.kt)("p",null,"Reloaded on reload signal."),(0,i.kt)("p",null,"The PUBLISH/SUBSCRIBE model consists of the client-server model."),(0,i.kt)("p",null,"Any client communicates with an endpoint via the broker."),(0,i.kt)("p",null,"Before a client wants to publish messages it first has to set up a connection with the broker."),(0,i.kt)("p",null,"Also, a subscribing client has to do the same."),(0,i.kt)("p",null,"Therefore the broker can decouple publisher and subscriber."),(0,i.kt)("p",null,'he delivered subject is ether called "message" or "packet" by all participants working with MQTT.'),(0,i.kt)("p",null,"Both - messages and packets - are the same."),(0,i.kt)("p",null,"There is no definition of when a delivery is called a packet or message."),(0,i.kt)("p",null,'Cedalo is using the term "packet" for any of the commands, and "message" for publishing or subscribing messages.'),(0,i.kt)("p",null,"Direct contact between subscriber and publisher is never able. Only the broker enables transmitting messages."),(0,i.kt)("p",null,"The setup allows no other than the broker to connect the publisher and subscriber. There is no way around this setup but still using MQTT, no gap."),(0,i.kt)("p",null,"Once the PUBLISHER and SUBSCRIBER are authenticated by the broker. Backed on information the broker sent, the broker ensures the connected devices can send messages to other devices. And the other way round, to receive messages from other devices."),(0,i.kt)("p",null,"So the broker is the central hub every message sent must pass. The brokers job is to receive, filter, and forward the message. The so-called load balancer moves the message from process stage to the next."),(0,i.kt)("p",null,"The brokers' responsibility is to receive all messages that are sent by the publishing clients."),(0,i.kt)("p",null,"In the next step, the broker must filter the incoming message. Part of it is to check the configured rules the publishing client has set. Following the broker authorativates who have subscribed to the topic of the message, and finally forwarding the message to the subscribing clients."),(0,i.kt)("p",null,"Whenever a subscribing client requests storage of not-sent messages, the broker does as pleased within the possibility the MQTT protocol sets."),(0,i.kt)("p",null,"Therefore the publishing client has only one duty. To make sure that the message is sent to the broker. Everything else is dealt with by the broker."),(0,i.kt)("p",null,"Also, the subscribing client only has one duty. To subscribe to the topic it wants to receive messages from."),(0,i.kt)("p",null,"In fact, because of the decoupling of the publishing client and subscribing client, they have no chance to find out more about the other one."),(0,i.kt)("p",null,"The subscriber only knows about the existence of the publisher as the client subscribes to the published topics."),(0,i.kt)("p",null,"Every exchange of messages is done by the broker."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allow_duplicate_messages [ true | false ]"))),(0,i.kt)("p",null,"This option is deprecated and will be removed in a future version. The behaviour will default to true."),(0,i.kt)("p",null,"If a client is subscribed to multiple subscriptions that overlap, e.g. foo/# and foo/+/baz , then MQTT expects that when the broker receives a message on a topic that matches both subscriptions, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"foo/bar/baz"),", then the client should only receive the message once."),(0,i.kt)("p",null,"Mosquitto keeps track of which clients a message has been sent to in order to meet this requirement. This option allows this behaviour to be disabled, which may be useful if you have a large number of clients subscribed to the same set of topics and want to minimise memory usage."),(0,i.kt)("p",null,"It can be safely set to true if you know in advance that your clients will never have overlapping subscriptions, otherwise your clients must be able to correctly deal with duplicate messages even when then have QoS=2."),(0,i.kt)("p",null,"Defaults to true."),(0,i.kt)("p",null,"This option applies globally."),(0,i.kt)("p",null,"Reloaded on reload signal."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"autosave_on_changes [ true | false ]"))),(0,i.kt)("p",null,"If true, mosquitto will count the number of subscription changes, retained messages received and queued messages and if the total exceeds ",(0,i.kt)("inlineCode",{parentName:"p"},"autosave_interval")," then the in-memory database will be saved to disk. If false, mosquitto will save the in-memory database to disk by treating ",(0,i.kt)("inlineCode",{parentName:"p"},"autosave_interval")," as a time in seconds."),(0,i.kt)("p",null,"This option applies globally."),(0,i.kt)("p",null,"Reloaded on reload signal."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"check_retain_source [ true | false ]"))),(0,i.kt)("p",null,"This option affects the scenario when a client subscribes to a topic that has retained messages. It is possible that the client that published the retained message to the topic had access at the time they published, but that access has been subsequently removed. If ",(0,i.kt)("inlineCode",{parentName:"p"},"check_retain_source")," is set to true, the default, the source of a retained message will be checked for access rights before it is republished. When set to false, no check will be made and the retained message will always be published."),(0,i.kt)("p",null,"This option applies globally, regardless of the ",(0,i.kt)("inlineCode",{parentName:"p"},"per_listener_settings")," option."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_packet_size value"))),(0,i.kt)("p",null,'For MQTT v5 clients, it is possible to have the server send a "maximum packet size" value that will instruct the client it will not accept MQTT packets with size greater than value bytes. This applies to the full MQTT packet, not just the payload. Setting this option to a positive value will set the maximum packet size to that number of bytes. If a client sends a packet which is larger than this value, it will be disconnected. This applies to all clients regardless of the protocol version they are using, but v3.1.1 and earlier clients will of course not have received the maximum packet size information. Defaults to no limit.'),(0,i.kt)("p",null,"This option applies to all clients, not just those using MQTT v5, but it is not possible to notify clients using MQTT v3.1.1 or MQTT v3.1 of the limit."),(0,i.kt)("p",null,"Setting below 20 bytes is forbidden because it is likely to interfere with normal client operation even with small payloads."),(0,i.kt)("p",null,"This option applies globally."),(0,i.kt)("p",null,"Reloaded on reload signal."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_queued_bytes count"))),(0,i.kt)("p",null,"The number of outgoing QoS 1 and 2 messages above those currently in-flight will be queued (per client) by the broker. Once this limit has been reached, subsequent messages will be silently dropped. This is an important option if you are sending messages at a high rate and/or have clients who are slow to respond or may be offline for extended periods of time. Defaults to 0. (No maximum)."),(0,i.kt)("p",null,"See also the ",(0,i.kt)("inlineCode",{parentName:"p"},"max_queued_messages")," option. If both ",(0,i.kt)("inlineCode",{parentName:"p"},"max_queued_messages")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max_queued_bytes")," are specified, packets will be queued until the first limit is reached."),(0,i.kt)("p",null,"This option applies globally."),(0,i.kt)("p",null,"Reloaded on reload signal."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_queued_messages count"))),(0,i.kt)("p",null,"The maximum number of QoS 1 or 2 messages to hold in the queue (per client) above those messages that are currently in flight. Defaults to 1000. Set to 0 for no maximum (not recommended). See also the ",(0,i.kt)("inlineCode",{parentName:"p"},"queue_qos0_messages")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max_queued_bytes")," options."),(0,i.kt)("p",null,"This option applies globally."),(0,i.kt)("p",null,"Reloaded on reload signal."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"memory_limit limit"))),(0,i.kt)("p",null,"This option sets the maximum number of heap memory bytes that the broker will allocate, and hence sets a hard limit on memory use by the broker. Memory requests that exceed this value will be denied. The effect will vary depending on what has been denied. If an incoming message is being processed, then the message will be dropped and the publishing client will be disconnected. If an outgoing message is being sent, then the individual message will be dropped and the receiving client will be disconnected. Defaults to no limit."),(0,i.kt)("p",null,"This option is only available if memory tracking support is compiled in."),(0,i.kt)("p",null,"Reloaded on reload signal. Setting to a lower value and reloading will not result in memory being freed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message_size_limit limit"))),(0,i.kt)("p",null,'This option sets the maximum publish payload size that the broker will allow. Received messages that exceed this size will not be accepted by the broker. This means that the message will not be forwarded on to subscribing clients, but the QoS flow will be completed for QoS 1 or QoS 2 messages. MQTT v5 clients using QoS 1 or QoS 2 will receive a PUBACK or PUBREC with the "implementation specific error" reason code.'),(0,i.kt)("p",null,"The default value is 0, which means that all valid MQTT messages are accepted. MQTT imposes a maximum payload size of 268435455 bytes."),(0,i.kt)("p",null,"This option applies globally."),(0,i.kt)("p",null,"Reloaded on reload signal."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password_file file path"))),(0,i.kt)("p",null,"Set the path to a password file. If defined, the contents of the file are used to control client access to the broker. The file can be created using the ",(0,i.kt)("inlineCode",{parentName:"p"},"mosquitto_passwd")," utility. "),(0,i.kt)("p",null,"Read more about Password:\n","[Here]"," (NEW_security.md).\nAnd ","[here]"," (NEW_mosquitto-configuration.md).\nAnd ","[here]"," (./mqtt)."),(0,i.kt)("p",null,'If mosquitto is compiled without TLS support (it is recommended that TLS support is included), then the password file should be a text file with each line in the format "username:password", where the colon and password are optional but recommended. If ',(0,i.kt)("inlineCode",{parentName:"p"},"allow_anonymous")," is set to false, only users defined in this file will be able to connect. Setting ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_anonymous")," to true when ",(0,i.kt)("inlineCode",{parentName:"p"},"password_file")," is defined is valid and could be used with ",(0,i.kt)("inlineCode",{parentName:"p"},"acl_file")," to have e.g. read only guest/anonymous accounts and defined users that can publish."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"per_listener_settings")," is true, this option applies to the current listener being configured only. If ",(0,i.kt)("inlineCode",{parentName:"p"},"per_listener_settings")," is false, this option applies to all listeners."),(0,i.kt)("p",null,"Reloaded on reload signal. The currently loaded username and password data will be freed and reloaded. Clients that are already connected will not be affected."),(0,i.kt)("p",null,"See also ","[this]"," (NEW_security.md)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"autosave_on_changes [ true | false ]"))),(0,i.kt)("p",null,"If true, mosquitto will count the number of subscription changes, retained messages received and queued messages and if the total exceeds ",(0,i.kt)("inlineCode",{parentName:"p"},"autosave_interval")," then the in-memory database will be saved to disk. If false, mosquitto will save the in-memory database to disk by treating ",(0,i.kt)("inlineCode",{parentName:"p"},"autosave_interval")," as a time in seconds."),(0,i.kt)("p",null,"This option applies globally."),(0,i.kt)("p",null,"Reloaded on reload signal."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"per_listener_settings [ true | false ]"))),(0,i.kt)("p",null,"If true, then authentication and access control settings will be controlled on a per-listener basis. The following options are affected:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"password_file"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"acl_file"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"psk_file"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_anonymous"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_zero_length_clientid"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"auto_id_prefix"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"plugin, plugin_opt_*"))),(0,i.kt)("p",null,"Note that if set to true, then a durable client (i.e. with clean session set to false) that has disconnected will use the ACL settings defined for the listener that it was most recently connected to."),(0,i.kt)("p",null,"The default behaviour is for this to be set to false, which maintains the settings behaviour from previous versions of mosquitto."),(0,i.kt)("p",null,"Reloaded on reload signal."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"check_retain_source"))),(0,i.kt)("p",null,"This option affects the scenario when a client subscribes to a topic that has retained messages. It is possible that the client that published the retained message to the topic had access at the time they published, but that access has been subsequently removed. If ",(0,i.kt)("inlineCode",{parentName:"p"},"check_retain_source")," is set to true, the default, the source of a retained message will be checked for access rights before it is republished. When set to false, no check will be made and the retained message will always be published."),(0,i.kt)("p",null,"This option applies globally, regardless of the ",(0,i.kt)("inlineCode",{parentName:"p"},"per_listener_settings")," option."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"persistence [ true | false ]"))),(0,i.kt)("p",null,"If true, connection, subscription and message data will be written to the disk in mosquitto.db at the location dictated by ",(0,i.kt)("inlineCode",{parentName:"p"},"persistence_location"),". When mosquitto is restarted, it will reload the information stored in mosquitto.db. The data will be written to disk when mosquitto closes and also at periodic intervals as defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"autosave_interval"),". Writing of the persistence database may also be forced by sending mosquitto the SIGUSR1 signal. If false, the data will be stored in memory only. Defaults to false."),(0,i.kt)("p",null,"The persistence file may change its format in a new version. The broker can currently read all old formats, but will only save in the latest format. It should always be safe to upgrade, but cautious users may wish to take a copy of the persistence file before installing a new version so that they can roll back to an earlier version if necessary."),(0,i.kt)("p",null,"This option applies globally."),(0,i.kt)("p",null,"Reloaded on reload signal."),(0,i.kt)("p",null,"To receive messages on topics of interest, the client sends a SUBSCRIBE packet to the broker."),(0,i.kt)("admonition",c({},{type:"caution"}),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Attention")," "),(0,i.kt)("p",{parentName:"admonition"},"To subscribe to a topic, the subscriber must also set a QoS level of the topic subscription. (#).")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"packetId:"))),(0,i.kt)("p",null,"Unique packet identifier."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"subscriptions:"))),(0,i.kt)("p",null,"The limitation on subscriptions a subscriber can subscribe to within one SUBSCRIBE packet is huge."),(0,i.kt)("p",null,"A SUBSCRIBE packet does not have to have only one subscription. Multiple can be added."),(0,i.kt)("p",null,"Each subscription consists of a topic and a QoS level."),(0,i.kt)("p",null,"When subscriptions overlap, the broker delivers the message that has the highest QoS level for the specific topic."),(0,i.kt)("p",null,"The brokers must make sure the subscribing client receives the messages that are permitted to be received by him in terms of security. But also concerning the QoS level that was set by the publishing client."),(0,i.kt)("p",null,'Subscribing to several topics simultaneously is an option that\'s possible. A so-called "wildcard" enables this feature.'),(0,i.kt)("p",null,"Read more about Quality of Service:\n","[Quality of Service]"," (NEW_quality-of-service.md)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"persistence_file file name"))),(0,i.kt)("p",null,"The filename to use for the persistent database. Defaults to mosquitto.db."),(0,i.kt)("p",null,"This option applies globally."),(0,i.kt)("p",null,"Reloaded on reload signal."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"persistence_location path"))),(0,i.kt)("p",null,"The path where the persistence database should be stored. If not given, then the current directory is used."),(0,i.kt)("p",null,"This option applies globally."),(0,i.kt)("p",null,"Reloaded on reload signal."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retain_available [ true | false ]"))),(0,i.kt)("p",null,"If set to false, then retained messages are not supported. Clients that send a message with the retain bit will be disconnected if this option is set to false. Defaults to true."),(0,i.kt)("p",null,"This option applies globally."),(0,i.kt)("p",null,"Reloaded on reload signal."),(0,i.kt)("p",null,"The broker must acknowledge each SUBSCRIBE packet. Therefore the broker sends a SUBACK packet (subscribe acknowledge) to the client."),(0,i.kt)("p",null,"The broker sends one return code for each topic/QoS-pair that it receives in the SUBSCRIBE packet."),(0,i.kt)("p",null,"The return codes can be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"0")," - Success-Maximum QoS0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"1")," - Success-Maximum QoS1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"2")," - Success-Maximum QoS2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"128")," - Failure "))),(0,i.kt)("p",null,"The Success-Maximum QoS0-2 shows the level of Quality of Service (QoS) that is set and can be supported."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"persistent_client_expiration duration"))),(0,i.kt)("p",null,"This option allows persistent clients (those with clean session set to false) to be removed if they do not reconnect within a certain time frame. This is a non-standard option. As far as the MQTT spec is concerned, persistent clients persist forever."),(0,i.kt)("p",null,"Badly designed clients may set clean session to false whilst using a randomly generated client id. This leads to persistent clients that will never reconnect. This option allows these clients to be removed."),(0,i.kt)("p",null,"The expiration period should be an integer followed by one of h d w m y for hour, day, week, month and year respectively. For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"persistent_client_expiration")," 2m")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"persistent_client_expiration")," 14d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"persistent_client_expiration")," 1y"))),(0,i.kt)("p",null,"As this is a non-standard option, the default if not set is to never expire persistent clients."),(0,i.kt)("p",null,"This option applies globally."),(0,i.kt)("p",null,"Reloaded on reload signal."),(0,i.kt)("p",null,"The broker filters the incoming messages. In the next step, the filtered message gets forwarded to the subscriber. That\u2019s how the subscriber only receives messages of interest."),(0,i.kt)("p",null,'As there is no direct link between publisher and client, the publisher can never make sure that somebody is actually "listening" to the messages sent.'),(0,i.kt)("p",null,"The worst case would be that there is no subscriber to the topic, following the broker discards the topic."),(0,i.kt)("p",null,"In MQTT v5, if a client publishes with QoS 1 or 2 and there is no subscriber, then the broker can tell the publisher this in the PUBACK/PUBREC reply."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"upgrade_outgoing_qos [ true | false ]"))),(0,i.kt)("p",null,"The MQTT specification requires that the QoS of a message delivered to a subscriber is never upgraded to match the QoS of the subscription. Enabling this option changes this behaviour. If ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade_outgoing_qos")," is set true, messages sent to a subscriber will always match the QoS of its subscription. This is a non-standard option not provided for by the spec. Defaults to false."),(0,i.kt)("p",null,"This option applies globally."),(0,i.kt)("p",null,"Reloaded on reload signal."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user username"))),(0,i.kt)("p",null,'When run as root, change to this user and its primary group on startup. If set to "mosquitto" or left unset, and if the "mosquitto" user does not exist, then mosquitto will change to the "nobody" user instead. If this is set to another value and mosquitto is unable to change to this user and group, it will exit with an error. The user specified must have read/write access to the persistence database if it is to be written. If run as a non-root user, this setting has no effect. Defaults to mosquitto.'),(0,i.kt)("p",null,"This setting has no effect on Windows and so you should run mosquitto as the user you wish it to run as."),(0,i.kt)("p",null,"Not reloaded on reload signal."),(0,i.kt)("admonition",c({},{type:"caution"}),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Attention")," "),(0,i.kt)("p",{parentName:"admonition"},"MQTT v.3.1.1:"),(0,i.kt)("p",{parentName:"admonition"},"Whenever you disconnect unintendedly and haven't set a cleanSession flag (cleanSession=false) all topic subscriptions are lost. You must resubscribe to every single one again."),(0,i.kt)("p",{parentName:"admonition"},"In case you have set CleanFlag=false and reconnected with the same clientId, the broker remembers the topics you have subscribed to."),(0,i.kt)("p",{parentName:"admonition"},"MQTT v.5.0:"),(0,i.kt)("p",{parentName:"admonition"},"The session duration is set by the session expiry interval. (#).")),(0,i.kt)("h3",c({},{id:"password-management"}),"Password Management"),(0,i.kt)("p",null,"Manage password files for Mosquitto."),(0,i.kt)("p",null,"See Mosquitto Password "),(0,i.kt)("p",null,"// Internal link"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{})," // External link\n\n{\n\n  type: 'link',\n\n  label: 'Facebook', // The link label\n\n  href: 'https://docs.cedalo.com/mosquitto/security', \n  // The external \n  \n  URL\n\n},\n")),(0,i.kt)("p",null,"Add a user to a new password file:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mosquitto_passwd -c /etc/mosquitto/passwd ral")),(0,i.kt)("p",null,"Delete a user from a password file"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mosquitto_passwd -D /etc/mosquitto/passwd ral")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"autosave_on_changes [ true | false ]"))),(0,i.kt)("p",null,"If true, mosquitto will count the number of subscription changes, retained messages received and queued messages and if the total exceeds ",(0,i.kt)("inlineCode",{parentName:"p"},"autosave_interval")," then the in-memory database will be saved to disk. If false, mosquitto will save the in-memory database to disk by treating ",(0,i.kt)("inlineCode",{parentName:"p"},"autosave_interval")," as a time in seconds."),(0,i.kt)("p",null,"This option applies globally."),(0,i.kt)("p",null,"Reloaded on reload signal."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"check_retain_source"))),(0,i.kt)("p",null,"This option affects the scenario when a client subscribes to a topic that has retained messages. It is possible that the client that published the retained message to the topic had access at the time they published, but that access has been subsequently removed. If ",(0,i.kt)("inlineCode",{parentName:"p"},"check_retain_source")," is set to true, the default, the source of a retained message will be checked for access rights before it is republished. When set to false, no check will be made and the retained message will always be published."),(0,i.kt)("p",null,"This option applies globally, regardless of the ",(0,i.kt)("inlineCode",{parentName:"p"},"per_listener_settings")," option."),(0,i.kt)("h3",c({},{id:"unsubscribe"}),"Unsubscribe"),(0,i.kt)("p",null,"A client can always UNSUBSCRIBE from a topic."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"packetId:"))),(0,i.kt)("p",null,"Uniquely identifies a message."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"List of topics:"))),(0,i.kt)("p",null,"The UNSUBSCRIBE packet contains also the topics you want to unsubscribe from."),(0,i.kt)("p",null,"After the packet is sent, the broker unsubscribes the client from the topics."))}g.isMDXComponent=!0}}]);