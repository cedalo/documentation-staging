"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[18450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>h,toc:()=>g});var a=n(3905),o=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&u(e,n,t[n]);return e};const d={id:"high-availability-autoscaling-openshift",title:"High Availability Autoscaling Openshift",sidebar_label:"HA-Autoscaling Openshift"},m=void 0,h={unversionedId:"deployment/on-premises/deployment/installation/openshift/high-availability-autoscaling-openshift",id:"version-3.0/deployment/on-premises/deployment/installation/openshift/high-availability-autoscaling-openshift",title:"High Availability Autoscaling Openshift",description:"This setup will deploy HA Mosquitto broker and Platform with autoscaling feature on a managed Openshift cluster using Helm charts. This setup would deploy a 3 Mosquitto broker as a statefulsets and a Platform pod  replica as a deployment entity as part of the default setup. This deployment by default uses a Persistent volumes for persistence. The setup uses HPA (Horizontal Pod autoscaler) to scale the kubernetes pods according to the manage the load of incoming request. This setup works best with Dynsec  cluster sync mode as in case of normal HA cluster, all the request is routed to the leader and follower mosquitto pods acts the backup. Therefore, no clear leverage of using Kubernetes autoscaling feature. Openshift offers lot of different features on top of Kubernetes.For deploying a full fledged OKD cluster,  you can follow the official Openshift OKD installation documentation.  OKD can be mainly installed in two different fashion:",source:"@site/mosquitto_versioned_docs/version-3.0/deployment/on-premises/deployment/installation/openshift/high-availability-autoscaling-openshift.md",sourceDirName:"deployment/on-premises/deployment/installation/openshift",slug:"/deployment/on-premises/deployment/installation/openshift/high-availability-autoscaling-openshift",permalink:"/documentation-staging/mosquitto/deployment/on-premises/deployment/installation/openshift/high-availability-autoscaling-openshift",draft:!1,tags:[],version:"3.0",frontMatter:{id:"high-availability-autoscaling-openshift",title:"High Availability Autoscaling Openshift",sidebar_label:"HA-Autoscaling Openshift"},sidebar:"someSidebar",previous:{title:"HA Openshift",permalink:"/documentation-staging/mosquitto/deployment/on-premises/deployment/installation/openshift/high-availability-openshift"},next:{title:"Basic Configurations On-Premises Broker",permalink:"/documentation-staging/mosquitto/deployment/on-premises/deployment/administrating/configuring-on-premises"}},f={},g=[{value:"Why Auto-scaling ?",id:"why-auto-scaling-",level:3},{value:"How does Auto-scaling works?",id:"how-does-auto-scaling-works",level:3},{value:"Openshift Cluster Setup and Configuration",id:"openshift-cluster-setup-and-configuration",level:2},{value:"Installation",id:"installation",level:2},{value:"Connect to cluster",id:"connect-to-cluster",level:2}],k={toc:g};function y(e){var t,o=e,{components:u}=o,d=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(o,["components"]);return(0,a.kt)("wrapper",(t=c(c({},k),d),i(t,r({components:u,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"This setup will deploy HA Mosquitto broker and Platform with autoscaling feature on a managed Openshift cluster using Helm charts. This setup would deploy a 3 Mosquitto broker as a statefulsets and a Platform pod  replica as a deployment entity as part of the default setup. This deployment by default uses a Persistent volumes for persistence. The setup uses HPA (Horizontal Pod autoscaler) to scale the kubernetes pods according to the manage the load of incoming request. This setup works best with ",(0,a.kt)("inlineCode",{parentName:"p"},"Dynsec"),"  cluster sync mode as in case of normal HA cluster, all the request is routed to the leader and follower mosquitto pods acts the backup. Therefore, no clear leverage of using Kubernetes autoscaling feature. Openshift offers lot of different features on top of Kubernetes.For deploying a full fledged OKD cluster,  you can follow the official Openshift OKD installation ",(0,a.kt)("a",c({parentName:"p"},{href:"https://docs.okd.io/"}),"documentation"),".  OKD can be mainly installed in two different fashion:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"IPI: Installer Provisioned Infrastructure"),(0,a.kt)("li",{parentName:"ol"},"UPI: User Provisioned Infrastructure")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Installer Provisioned Infrastructure:"),"  Installer Provisioned Infrastructure (IPI) in OKD/OpenShift refers to a deployment model where the installation program provisions and manages all the components of the infrastructure needed to run the OpenShift cluster. This includes the creation of virtual machines, networking rules, load balancers, and storage components, among others. The installer uses cloud-specific APIs to automatically set up the infrastructure, making the process faster, more standardized, and less prone to human error compared to manually setting up the environment."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"User Provisioned Infrastructure:"),"  User Provisioned Infrastructure (UPI) in OKD/OpenShift is a deployment model where users manually create and manage all the infrastructure components required to run the OpenShift cluster. This includes setting up virtual machines or physical servers, configuring networking, load balancers, storage, and any other necessary infrastructure components. Unlike the Installer Provisioned Infrastructure (IPI) model, where the installation program automatically creates and configures the infrastructure, UPI offers users complete control over the deployment process."),(0,a.kt)("p",null,"You are free to choose your own method among the two. You can also choose the cloud provider you want to deploy your solution on. Openshift OKD supports number of different cloud providers and also gives you an option to do bare-metal installation. In this deployment we went forward with UPI and deployed our infrastructure on Google Cloud Platform (GCP) using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Private cluster")," method mentioned ",(0,a.kt)("a",c({parentName:"p"},{href:"https://docs.okd.io/latest/installing/installing_gcp/installing-gcp-private.html"}),"here"),". Therefore, this solution is developed and tested on GCP, however it is unlikely that basic infrastructure would differ across different cloud providers."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"private cluster")," in GCP ensures that the nodes are isolated in a private network, reducing exposure to the public internet but again you are free to choose your own version of infrastructure supported by Openshift OKD.  We will briefly discuss how the infrastructure looks like in our case so that you can have a reference for your own infrastructure."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"OKD Infrastructure (During provisioning)",src:n(31070).Z,title:"OKD Infrastructure on GCP during provisioning",width:"751",height:"510"})),(0,a.kt)("p",null,"Figure 1: OKD Infrastructure on GCP during provisioning"),(0,a.kt)("p",null,"The diagram depicts the deployment process for our OCP cluster on GCP, starting with the establishment of a bastion host. Bastion host is where we'll execute commands to configure the bootstrap node, then the Master nodes, and finally, the worker nodes in a separate subnet. Before initiating the bootstrap procedure, we set up the essential infrastructure components, including networks, subnetworks, an IAM service account, an IAM project, a Private DNS zone, Load balancers, Cloud NATs, and a Cloud Router."),(0,a.kt)("p",null,"Upon completing the bootstrap phase, we dismantled the bootstrap components from the cluster. Subsequently, we focussed on creating the worker nodes. After the worker nodes are operational, we set up a reverse proxy on the bastion host to facilitate local access to the OCP Console UI through our browser. To conclude, we confirm that all cluster operators are marked as \u2018Available\u2019. Once we done with the provisioning the architecture would look something like Figure 2. More detailed steps can be found in the official documentation.  These discussed steps are all part of the official  ",(0,a.kt)("a",c({parentName:"p"},{href:"https://docs.okd.io/latest/installing/installing_gcp/installing-gcp-private.html"}),"documentation"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"OKD Infrastructure (Post provisioning)",src:n(87083).Z,title:"OKD Infrastructure on GCP post provisioning ",width:"684",height:"676"}),"\nFigure 2: OKD Infrastructure on GCP post provisioning"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Note:")," This deployment involves setting up a private cluster, which means access to the cluster is limited to through the bastion host. Consequently, we avoid using public DNS for this installation, relying solely on a private DNS zone. To facilitate access to the external UI, we will employ a reverse proxy for this purpose."),(0,a.kt)("h3",c({},{id:"why-auto-scaling-"}),"Why Auto-scaling ?"),(0,a.kt)("p",null,"When we deploy this Openshift setup, by default we start with 3 Mosquitto  and 1Platform pod . However, we might run into problems if we have a lot of incoming requests and connections causing overload at Mosquitto brokers, especially in DynSec mode. We would want the setup to adjust based on the load to avoid crashes and maintain system requirements and at the same time avoid any need of human monitoring and intervention."),(0,a.kt)("h3",c({},{id:"how-does-auto-scaling-works"}),"How does Auto-scaling works?"),(0,a.kt)("p",null,"On deploying the above setup we also deploy certain other helper pods that takes care of Auto-scaling. For eg:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Metrics Server:")," This server pod monitors metrics of the deployed applications pods. Metrics could be CPU, Memory etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Horizontal Pod Scaler (HPA):")," HPA automatically scales up or down the pods based on the threshold. For eg: If the CPU threshold is set to 60%, and of overall CPU consumption across all pods reaches 60%, HPA scales up the Mosquitto pods."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Cluster-operator:")," This pod keeps tracks of pod scaling and triggers the requests to MQTT APIs so that newly scaled pods gets added to internal cluster of Mosquitto brokers. For eg If the current number of Mosquitto brokers are 3 and it scales to 5, then cluster-operator would send a ",(0,a.kt)("inlineCode",{parentName:"li"},"addNode")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"joinCluster")," MQTT request for 2 added nodes. If pod is to be scaled down, then the cluster-operator would send ",(0,a.kt)("inlineCode",{parentName:"li"},"removeNode")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"leaveCluster")," MQTT API requests.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Recommended Setup")),(0,a.kt)("p",null,"We would recommend to use Dynsec cluster with this setup as using HA cluster with autoscaling do not add much value. Make sure you understand the functioning of Dynsec cluster and its limitation before proceeding."),(0,a.kt)("h2",c({},{id:"openshift-cluster-setup-and-configuration"}),"Openshift Cluster Setup and Configuration"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Create a namespace")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"- Once you are connected to your Kubernetes setup and can access the cluster using `oc` tool. Create a namespace in which you would want to deploy the application. The deployment folder is pre-configured for the namespace named `ha`. If you want to use the default configuration you can create a namespace named `ha` using the below command:\n- `oc create namespace ha`\n- If you want to use a different namespace, use the command: `oc create namespace <your-custom-namespace>`.  Replace `<your-custom-namespace>` with the name of the namespace you want to configure.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"On your bastion node"),": Check the allocated user id for your namespace after you already created your desired namespace (step 2). You can check the allocated user id for your namespace by running the command ",(0,a.kt)("inlineCode",{parentName:"p"},"oc describe namespace <namespace>")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"<namespace>")," is the namespace you chose while creating the namespace in step 2. For default namespace i.e ",(0,a.kt)("inlineCode",{parentName:"p"},"ha"),", the command would be ",(0,a.kt)("inlineCode",{parentName:"p"},"oc describe namespace multinode"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"  - The above command would output a response.  A sample output could be like:\n\n     ```\n    Name:         multinode\n    Labels:       kubernetes.io/metadata.name=multinode\n                  pod-security.kubernetes.io/audit=restricted\n                  pod-security.kubernetes.io/audit-version=v1.24\n                  pod-security.kubernetes.io/warn=restricted\n                  pod-security.kubernetes.io/warn-version=v1.24\n    Annotations:  openshift.io/sa.scc.mcs: s0:c27,c4\n                  openshift.io/sa.scc.supplemental-groups: 1000710000/10000\n                  openshift.io/sa.scc.uid-range: 1000710000/10000\n    Status:       Active\n\n    No resource quota.\n    No LimitRange resource.\n    ```\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Note down the value for ",(0,a.kt)("inlineCode",{parentName:"li"},"openshift.io/sa.scc.uid-range"),". The noted user id will now be used to install the helm chart. This user id needs to be propagated to the pods so that they could have adequate permissions while execution without needing additional security policy. After checking the environment prerequisites are set, follow we will prepare the Mosquitto environment:")),(0,a.kt)("h2",c({},{id:"installation"}),"Installation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prerequisites"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Openshift  Cluster should be up and running."),(0,a.kt)("li",{parentName:"ol"},"You have successfully created the namespace and noted down the uid range.")),(0,a.kt)("p",null,"Helm charts offer a comprehensive solution for configuring various Kubernetes resources\u2014including stateful sets, deployment templates, services, and service accounts\u2014through a single command, streamlining the deployment process.When the user downloads helm package from the Platform license key is already part of the package."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Get the helm chart")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Make sure you have the helm chart  ",(0,a.kt)("inlineCode",{parentName:"li"},"mosquitto-ha-openshift-autoscaling-3.0.0.tgz"),"."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Install Helm Chart:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the following ",(0,a.kt)("inlineCode",{parentName:"p"},"helm install")," command to deploy the Mosquitto application on to your Openshift cluster. Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<release-name>")," with the desired name for your Helm release and ",(0,a.kt)("inlineCode",{parentName:"p"},"<namespace>")," with your chosen Kubernetes namespace:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"helm install <release-name>  mosquitto-ha-openshift-autoscaling-3.0.0.tgz  -n <namespace> --set runAsUser=<namespace-alloted-user-id> --set clusterSyncMode=dynsec --set imageCredentials.registry=registry.cedalo.com  --set imageCredentials.username=<username> --set imageCredentials.password=<password> --set imageCredentials.email=<email> \n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"namespace"),": Set it to the namespace of your deployment.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"imageCredentials.username"),": Your docker username provided by Cedalo team.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"imageCredentials.password"),": Your docker password provided by Cedalo team.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"imageCredentials.email"),": Registered e-mail for accessing docker registry.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"namespace-alloted-user-id"),": Set it to user id you noted through ",(0,a.kt)("inlineCode",{parentName:"p"},"oc describe namespace singlenode")," command.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Note"),": By default the HPA threshold is set to 60 . That mean Horizontal Pod Scaler will scale the pods if overall CPU consumption passes the 60% threshold. To set a new thresold, you can change pass ",(0,a.kt)("inlineCode",{parentName:"p"},"--set hpa_threshold=<new_hpa_threshold>")," along with helm installation command.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Note"),": By default the max pod number is set to 5. That means tha HPA can only scale the max replica pods to 5. If you want set a new higher number, you can pass",(0,a.kt)("inlineCode",{parentName:"p"},"--set max_replica=<your-max-replica-count>")," by passing it along with helm installation command.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Sample example: If  your arbitrary release name is ",(0,a.kt)("inlineCode",{parentName:"p"},"sample-release-name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"email")," be ",(0,a.kt)("inlineCode",{parentName:"p"},"demo-username"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"demo-password")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"demo@gmail.com"),",your new hpa threshold is 80 , max replica changed to 6  and dummy license key is ",(0,a.kt)("inlineCode",{parentName:"p"},"jkansdkjbaskcbasdb"),"then your helm installation command should be:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"   helm install sample-release-name  mosquitto-ha-openshift-autoscaling-3.0.0.tgz  -n ha --set clusterSyncMode=dynsec --set runAsUser=1000710000 --set hpa_threshold=80  --set max_replica=6 --set imageCredentials.registry=registry.cedalo.com --set imageCredentials.username=demo-username --set imageCredentials.password=demo-password --set imageCredentials.email=demo@gmail.com \n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can monitor the running pods using the ",(0,a.kt)("inlineCode",{parentName:"p"},"oc get pods -o wide -n <namespace>")," command. To observe the service endpoints ports use ",(0,a.kt)("inlineCode",{parentName:"p"},"oc get svc -n <namespace>"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To uninstall the setup:\n",(0,a.kt)("inlineCode",{parentName:"p"},"helm uninstall <release-name> -n <namespace>")))),(0,a.kt)("p",null,"Your Mosquitto setup is now running  with three single mosquitto nodes in a Dynsec cluster along with a Platform portal."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Further Useful Commands")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you want to change ",(0,a.kt)("inlineCode",{parentName:"li"},"mosquitto.conf"),", you can do so by uncompressing the helm chart, making the required changes and packaging the helm charts again. The detailed procedure is mentioned below:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tar -xzvf mosquitto-ha-openshift-autoscaling-3.0.0.tgz"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cd mosquitto-ha-openshift-autoscaling-3.0.0/files/")),(0,a.kt)("li",{parentName:"ul"},"Make changes to ",(0,a.kt)("inlineCode",{parentName:"li"},"mosquitto.conf")," and save it."),(0,a.kt)("li",{parentName:"ul"},"Go back to the parent directory:\n",(0,a.kt)("inlineCode",{parentName:"li"},"cd ../")),(0,a.kt)("li",{parentName:"ul"},"Package the helm chart to its original form using:\n",(0,a.kt)("inlineCode",{parentName:"li"},"helm package mosquitto-ha-openshift-autoscaling-3.0.0")),(0,a.kt)("li",{parentName:"ul"},"Uninstall helm package\n",(0,a.kt)("inlineCode",{parentName:"li"},"helm uninstall <release-name> -n <namespace>")))),(0,a.kt)("li",{parentName:"ul"},"Reinstall the helm package using the same ",(0,a.kt)("inlineCode",{parentName:"li"},"helm install")," command you used the first time or do a ",(0,a.kt)("inlineCode",{parentName:"li"},"helm upgrade"),"."))),(0,a.kt)("li",{parentName:"ul"},"You can similarly change any other configuration like ",(0,a.kt)("inlineCode",{parentName:"li"},"sql-bridge")," configuration, repackage the helm chart and install to bring changes into effect.")),(0,a.kt)("h2",c({},{id:"connect-to-cluster"}),"Connect to cluster"),(0,a.kt)("p",null,"Once your setup is ready, you can access the mosquitto brokers using the external ip of the haproxy service deployed to connect to the cluster from the outside world.\nGo to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Client Account"),' menu and create a new client to connect from. Make sure to assign a role, like the default "client" role, to allow your client to publish and/or subscribe to topics.\nNow you can connect to the Mosquitto cluster. You can access it either with connecting it directly to worker node running the haproxy pod along with a service exposed at port 1883:'),(0,a.kt)("p",null,"To get the external ip of HAproxy service:\n",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get service mosquitto-loadbalancer -n <namespace>")),(0,a.kt)("p",null,"In this example command we use Mosquitto Sub to subscribe onto all topics:\n",(0,a.kt)("inlineCode",{parentName:"p"},"mosquitto_sub -h <external-ip-of-mosquitto-loadbalancer> -p 1883 -u <username> -P <password> -t '#'")),(0,a.kt)("p",null,"Make sure to replace your IP, username and password."))}y.isMDXComponent=!0},31070:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/okd-infrastructure-1-bba8c29af6e08db7c6f3e61d79bfd615.png"},87083:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/okd-infrastructure-2-abe5236cfef5147cd3d552b6886cc976.png"}}]);