"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[96283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>h,toc:()=>g});var a=n(3905),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&p(e,n,t[n]);return e};const c={id:"multi-node-single-host",title:"HA-Single-host",sidebar_label:"HA-Single-host"},d=void 0,h={unversionedId:"kubernetes/multi-node-single-host",id:"kubernetes/multi-node-single-host",title:"HA-Single-host",description:"To set up a multi-node Mosquitto broker and Management Center on a single host using Helm charts, you'll first need a Kubernetes environment. For deploying kubernetes on a single host, Minikube is an excellent choice. Minikube is a lightweight Kubernetes distribution designed for local development and testing (Discussed in Introduction section).",source:"@site/mosquitto/kubernetes/multi-node-single-host.md",sourceDirName:"kubernetes",slug:"/kubernetes/multi-node-single-host",permalink:"/documentation-staging/mosquitto/next/kubernetes/multi-node-single-host",draft:!1,tags:[],version:"current",frontMatter:{id:"multi-node-single-host",title:"HA-Single-host",sidebar_label:"HA-Single-host"},sidebar:"someSidebar",previous:{title:"Single Node",permalink:"/documentation-staging/mosquitto/next/kubernetes/single-node"},next:{title:"High Availability",permalink:"/documentation-staging/mosquitto/next/kubernetes/high-availability"}},k={},g=[{value:"Installation",id:"installation",level:2},{value:"Kubernetes Cluster Setup",id:"kubernetes-cluster-setup",level:2},{value:"Further Useful Commands:",id:"further-useful-commands",level:3},{value:"Usage",id:"usage",level:2}],f={toc:g};function b(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},f),p),r(t,i({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"To set up a multi-node Mosquitto broker and Management Center on a single host using Helm charts, you'll first need a Kubernetes environment. For deploying kubernetes on a single host, Minikube is an excellent choice. Minikube is a lightweight Kubernetes distribution designed for local development and testing (Discussed in Introduction section)."),(0,a.kt)("p",null,"This setup would deploy a 3 Mosquitto broker as statefulsets. Also, a Management-Center pod and HA-proxy pod as a deployment entity. All the deployment would be deployed on the same host."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Recommended Setup")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"1 MMC and 3 Mosquitto Brokers (single host)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HA-PROXY Configurations"),"\nHA-proxy need to be configured accordingly for the kubernetes setup. For server m1, m2 and m3 needs to be configured in this case. Instead of using docker IP we would use DNS names to address the pods. For eg\n",(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto-0.mosquitto.multinode.svc.cluster.local"),". Here ",(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto-0"),",",(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto-1"),",",(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto-2")," are the name of individual mosquitto pods running as statefulsets. Each new pod would increase its pod-ordinal by 1. Rest can be defined as follows\n",(0,a.kt)("inlineCode",{parentName:"p"},"<pod-name>.<name-of-the-statefulset>.<namespace>.svc.cluster.local")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"global\n    daemon\n    maxconn 4096\n\nfrontend mqtt_frontend\n    bind *:1883\n    mode tcp\n    default_backend mqtt_backend\n    timeout client 10m\n\nbackend mqtt_backend\n    timeout connect 5000\n    timeout server 10m\n    mode tcp\n    option redispatch\n    server m1 mosquitto-0.mosquitto.multinode.svc.cluster.local:1883 check on-marked-down shutdown-sessions\n    server m2 mosquitto-1.mosquitto.multinode.svc.cluster.local:1883 check on-marked-down shutdown-sessions\n    server m3 mosquitto-2.mosquitto.multinode.svc.cluster.local:1883 check on-marked-down shutdown-sessions\n")),(0,a.kt)("h2",m({},{id:"installation"}),"Installation"),(0,a.kt)("p",null,"Before proceeding with the actual installation of Mosquitto brokers we would need certain dependencies as a prerequisites for Minikube Kubernetes setup. You can install those dependencies using the ",(0,a.kt)("inlineCode",{parentName:"p"},"install-dependencies.sh")," file in the shared single-node directory. You can find the required dependencies installation file based on your host configuration. If you have a host machine running debian AMD64 configuration, you can get ",(0,a.kt)("inlineCode",{parentName:"p"},"debian-amd64")," directory to install the packages. Main packages included are ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"helm-charts"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Setup Minikube Kubernetes Setup"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"See section: Kubernetes Cluster Setup"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Clone the Setup Repository:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Clone the repository to your local machine."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Change Directory:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Navigate to the project directory (i.e multi-node-single-host)."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Install Helm Chart:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use the following ",(0,a.kt)("inlineCode",{parentName:"li"},"helm install")," command to deploy the setup to your Kubernetes cluster. Replace ",(0,a.kt)("inlineCode",{parentName:"li"},"<release-name>")," with the desired name for your Helm release and ",(0,a.kt)("inlineCode",{parentName:"li"},"<namespace>")," with your chosen Kubernetes namespace:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"helm install <release-name> mosquitto-multi-node-single-host-0.1.0.tgz --set repoPath=$HOME -n <namespace>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repoPath"),": Set the ",(0,a.kt)("inlineCode",{parentName:"li"},"repoPath")," flag to the path where this repo was cloned. The above command expects it to be at ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"namespace"),": Set it to the namespace of your deployment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Note"),": Ensure that you have a running Kubernetes cluster set up to run this deployment. We recommend setting up the kubernetes cluster using Minikube. You can also use our installation script to set up Kubernetes cluster. To setup the kubernetes cluster, follow the instructions in Kubernetes Cluster Setup."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Note"),": If you want to deploy the setup in a different namespace, make sure to pass a seperate flag ",(0,a.kt)("inlineCode",{parentName:"li"},"--set namespace=<your-custom-namespace>")," along with the helm installation command")))),(0,a.kt)("h2",m({},{id:"kubernetes-cluster-setup"}),"Kubernetes Cluster Setup"),(0,a.kt)("p",null,"If you need to set up a Kubernetes cluster, you can use our installation script (recommended). If you plan on using your own cluster, you can skip to step 3. Follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Choose Architecture Folder:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Depending on your host architecture, navigate to the corresponding folder:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For Debian AMD64:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"cd debian_amd64.sh\n"))))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Install Pre-requisites:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Run the following command to install the necessary dependencies on the host:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"bash  install-dependencies.sh\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Setup Kubernetes: IMPORTANT")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Execute the setup script to configure Kubernetes:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"bash setup.sh\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Follow the instructions of this file. This would install Minikube, create configmap for mosquitto.conf, create configmaps for your license file. Make sure you have placed your license file in the required folder before running this script."),(0,a.kt)("li",{parentName:"ul"},"The default namespace for installation is single-node. You can change the namespace through the setup script.."))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Setup Kubernetes Secrets:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This step is required for kubernetes to pull required docker images from the registry. You can set the secrets using the following command:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"kubectl create secret docker-registry  mosquitto-pro-secret  --docker-server=registry.cedalo.com --docker-username=<username> --docker-password=<password>  --docker-email=<email> -n <namespace>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"namespace"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"namespace")," should be the same as the one you selected or enetered while running the ",(0,a.kt)("inlineCode",{parentName:"li"},"setup.sh"),"."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can monitor the running pods using the following command:\n",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods -o wide -n <namespace>"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open Applications:"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubectl get nodes -o wide")),(0,a.kt)("li",{parentName:"ul"},"Get the node ip from the above command. This would not same as your host as Minikube setups a hypervisor between your host and Kubernetes pods."),(0,a.kt)("li",{parentName:"ul"},'http://<"node-ip">:31021 (MMC)'),(0,a.kt)("li",{parentName:"ul"},'IP: <"node-ip"> &  Port: 31028 (HA)')),(0,a.kt)("h3",m({},{id:"further-useful-commands"}),"Further Useful Commands:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you want to change mosquitto.conf. Make the required changes in mosquitto.conf then delete the configmap and create a new one. Make sure to uninstall the deployment before making the change."),(0,a.kt)("li",{parentName:"ul"},"You can uninstall the setup using the following command:\n",(0,a.kt)("inlineCode",{parentName:"li"},"helm uninstall <release-name> -n <namespace>")),(0,a.kt)("li",{parentName:"ul"},"To delete the configmap:\n",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl delete configmap mosquitto-config -n <namespace>")),(0,a.kt)("li",{parentName:"ul"},"To reconfigure the configmap (after making changes to mosquitto.conf):\n",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl create configmap mosquitto-config  -n $namespace --from-file=<path-to-mosquitto.conf>")),(0,a.kt)("li",{parentName:"ul"},"If you want to customize the deployments, you can unzip the package using:\n",(0,a.kt)("inlineCode",{parentName:"li"},"tar -xzvf mosquitto-multi-node-single-host-0.1.0.tgz")),(0,a.kt)("li",{parentName:"ul"},"Make the changes and repackage the folder mosquitto-multi-node-single-host using:\n",(0,a.kt)("inlineCode",{parentName:"li"},"helm package mosquitto-multi-node-single-host  "))),(0,a.kt)("h2",m({},{id:"usage"}),"Usage"),(0,a.kt)("p",null,"Once the installation is complete, you can start using the multi-node Mosquitto broker on your single host. Be sure to check the Mosquitto documentation for further details on configuring and using the broker."))}b.isMDXComponent=!0}}]);