"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[10738],{83166:(e,t,i)=>{var r=i(64836);t.Z=void 0;var o=r(i(64938)),n=i(85893),a=(0,o.default)((0,n.jsx)("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"}),"GppGood");t.Z=a},23933:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>g,toc:()=>b});var r=i(3905),o=i(49044),n=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,c=(e,t)=>{for(var i in t||(t={}))p.call(t,i)&&u(e,i,t[i]);if(l)for(var i of l(t))m.call(t,i)&&u(e,i,t[i]);return e};const d={id:"prometheus-metrics",title:"Prometheus Metrics Exporter",sidebar_label:"Prometheus Metrics Exporter"},h=void 0,g={unversionedId:"monitoring/metrics/prometheus-metrics",id:"version-3.0/monitoring/metrics/prometheus-metrics",title:"Prometheus Metrics Exporter",description:"The Prometheus Metrics Exporter collects broker metrics and sends them to the configured Prometheus.",source:"@site/mosquitto_versioned_docs/version-3.0/monitoring/metrics/prometheus-metrics.md",sourceDirName:"monitoring/metrics",slug:"/monitoring/metrics/prometheus-metrics",permalink:"/documentation-staging/mosquitto/monitoring/metrics/prometheus-metrics",draft:!1,tags:[],version:"3.0",frontMatter:{id:"prometheus-metrics",title:"Prometheus Metrics Exporter",sidebar_label:"Prometheus Metrics Exporter"},sidebar:"someSidebar",previous:{title:"Available Metrics",permalink:"/documentation-staging/mosquitto/monitoring/metrics/available-metrics"},next:{title:"InfluxDB Metrics Exporter",permalink:"/documentation-staging/mosquitto/monitoring/metrics/influxdb-metrics"}},f={},b=[{value:"Configuration",id:"configuration",level:2},{value:"Plugin Activation",id:"plugin-activation",level:2}],v={toc:b};function k(e){var t,i=e,{components:n}=i,u=((e,t)=>{var i={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&m.call(e,r)&&(i[r]=e[r]);return i})(i,["components"]);return(0,r.kt)("wrapper",(t=c(c({},v),u),a(t,s({components:n,mdxType:"MDXLayout"}))),(0,r.kt)(o.Z,{mdxType:"PremiumFeature"}),(0,r.kt)("p",null,"The Prometheus Metrics Exporter collects broker metrics and sends them to the configured Prometheus.\nFor a detailed overview of all metrics, please refer to the ",(0,r.kt)("a",c({parentName:"p"},{href:"/documentation-staging/mosquitto/monitoring/metrics/available-metrics"}),"Available Metrics")," section. This resource provides descriptions and categorizations of each metric, helping to understand how they contribute to monitoring and analyzing system performance."),(0,r.kt)("h2",c({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"The plugin has some options which can be configured."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bind_address")," : by default, the exporter will listen on all available\nnetwork interfaces. You can bind it to a specific address using this option.\nFor example, ",(0,r.kt)("inlineCode",{parentName:"li"},"plugin_opt_bind_address 192.0.2.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port")," : by default, the exporter will listen on port 8000. You can use\nanother port with this option. For example ",(0,r.kt)("inlineCode",{parentName:"li"},"plugin_opt_port 8100")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"update_interval")," : metrics stored in the exporter are updated on a set\ninterval, by default 15 seconds. It is important to match this to the scrape\ninterval of your Prometheus setup. If you are using a 60 second scrape\ninterval, then use ",(0,r.kt)("inlineCode",{parentName:"li"},"plugin_opt_update_interval 60"))),(0,r.kt)("h2",c({},{id:"plugin-activation"}),"Plugin Activation"),(0,r.kt)("p",null,"To enable the Prometheus Metrics Exporter plugin it must be loaded into the broker with, by adding the following to your ",(0,r.kt)("inlineCode",{parentName:"p"},"mosquitto.conf"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-aconf"}),"global_plugin /usr/lib/cedalo_metrics_prometheus.so\n")),(0,r.kt)("p",null,"A sample configuration could look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-aconf"}),"global_plugin /usr/lib/cedalo_metrics_prometheus.so\nplugin_opt_update_interval 60\nplugin_opt_bind_address 192.0.2.1\nplugin_opt_port 8100\n")))}k.isMDXComponent=!0},49044:(e,t,i)=>{i.d(t,{Z:()=>s});var r=i(67294),o=i(39082),n=i(62659),a=i(83166);function s({inline:e}){return r.createElement(o.Z,{sx:{margin:e?"0px 5px":"5px 5px 15px 5px",height:e?"22px":void 0,color:"#ffffff",backgroundColor:n.Z[500]},size:"small",icon:r.createElement(a.Z,{style:{color:"white"},size:"small"}),label:"Premium"})}}}]);