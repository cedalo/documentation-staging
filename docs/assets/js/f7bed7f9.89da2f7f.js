"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[13430],{83166:(e,A,t)=>{var n=t(64836);A.Z=void 0;var a=n(t(64938)),i=t(85893),o=(0,a.default)((0,i.jsx)("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"}),"GppGood");A.Z=o},57281:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>f,contentTitle:()=>p,default:()=>w,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var n=t(3905),a=t(49044),i=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,g=(e,A,t)=>A in e?i(e,A,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[A]=t,m=(e,A)=>{for(var t in A||(A={}))l.call(A,t)&&g(e,t,A[t]);if(s)for(var t of s(A))c.call(A,t)&&g(e,t,A[t]);return e};const d={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},p=void 0,u={unversionedId:"management-center/introduction",id:"version-2.9/management-center/introduction",title:"Introduction",description:"The Management Center allows to easily manage, monitor and inspect instances of Eclipse Mosquitto.",source:"@site/mosquitto_versioned_docs/version-2.9/management-center/introduction.md",sourceDirName:"management-center",slug:"/management-center/introduction",permalink:"/documentation-staging/mosquitto/management-center/introduction",draft:!1,tags:[],version:"2.9",frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"someSidebar",previous:{title:"HA-Autoscaling Openshift",permalink:"/documentation-staging/mosquitto/openshift/high-availability-autoscaling-openshift"},next:{title:"Inspection",permalink:"/documentation-staging/mosquitto/management-center/overview/inspection/"}},f={},h=[{value:"Features",id:"features",level:2},{value:"Login",id:"login",level:2},{value:"Management Center User Interface",id:"management-center-user-interface",level:2},{value:"Title Bar",id:"title-bar",level:3},{value:"Navigation",id:"navigation",level:3}],v={toc:h};function w(e){var A,i=e,{components:g}=i,d=((e,A)=>{var t={};for(var n in e)l.call(e,n)&&A.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))A.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t})(i,["components"]);return(0,n.kt)("wrapper",(A=m(m({},v),d),o(A,r({components:g,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The Management Center allows to easily manage, monitor and inspect instances of Eclipse Mosquitto."),(0,n.kt)("h2",m({},{id:"features"}),"Features"),(0,n.kt)("p",null,"The following features are provided:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A system dashboard to view key figures, showing broker traffic, license and client infos."),(0,n.kt)("li",{parentName:"ul"},"Table of clients, which have connected to the broker, for inspection purposes."),(0,n.kt)("li",{parentName:"ul"},"A topic tree, displaying those topics that have been addressed, while the MMC is running."),(0,n.kt)("li",{parentName:"ul"},"Management of broker security allowing to modify clients, group and roles."),(0,n.kt)("li",{parentName:"ul"},"Create and manage streams to transfer and transform messages"),(0,n.kt)("li",{parentName:"ul"},"A terminal to execute commands related to the dynamic security API"),(0,n.kt)("li",{parentName:"ul"},"Cluster configuration"),(0,n.kt)("li",{parentName:"ul"},"Broker connections to connect to running Mosquitto instances"),(0,n.kt)("li",{parentName:"ul"},"Management Center specific security management"),(0,n.kt)("li",{parentName:"ul"},"Topic and Certificate Management"),(0,n.kt)("li",{parentName:"ul"},"Management Center infos and settings")),(0,n.kt)("p",null,"Some of these features are only available in the Premium Version."),(0,n.kt)("h2",m({},{id:"login"}),"Login"),(0,n.kt)("p",null,"After accessing the Management Center you will have to log in first. The following dialog will appear:"),(0,n.kt)("img",{className:"docimagemb",src:t(92339).Z,width:"40%"}),(0,n.kt)("p",null,"Enter your username and password.\nThe default login of the management center is set in the docker-compose.yml file. Default Credentials are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User: cedalo "),(0,n.kt)("li",{parentName:"ul"},"Password: mmcisawesome.")),(0,n.kt)("admonition",m({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"To change the password in the docker-compose.yml file, find and change this entry:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"CEDALO_MC_USERNAME: cedalo"),(0,n.kt)("li",{parentName:"ul"},"CEDALO_MC_PASSWORD: mmcisawesome")),(0,n.kt)("p",{parentName:"admonition"},"After a restart your new credentials will be applied.\nThe default password is only set in on-premise setups. For cloud hostings see your e-mail for credential information. ")),(0,n.kt)("p",null,"After confirming the credentials you will be guided to the Management Center Application. "),(0,n.kt)("h2",m({},{id:"management-center-user-interface"}),"Management Center User Interface"),(0,n.kt)("p",null,"The following general user interface elements will be available throughout all views of the application."),(0,n.kt)("h3",m({},{id:"title-bar"}),"Title Bar"),(0,n.kt)("p",null,"The title bar displays the app name. This can be changed, if a custom theme is defined and activated. Left to the\napp name you can click on the burger menu to expand the navigation bar. This will display textual information next\nto the navigation items. "),(0,n.kt)("img",{style:{marginBottom:"15px"},src:t(51761).Z,width:"100%"}),(0,n.kt)("p",null,"On the right side the selection of the active broker connection from the broker connection list is located. This\nselection is only visible for those pages, that show or enable broker related infos and changes. For pages that\nhandle Management Center, cluster or connection settings this selection is hidden. Right beside this selection you can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Start one of the two tours to get an introduction to the user interface of the Management Center"),(0,n.kt)("li",{parentName:"ul"},"Open the documentation. The Management Center will jump to the documentation section that relates to the current page"),(0,n.kt)("li",{parentName:"ul"},"View the profile of the current user. See also ",(0,n.kt)("a",m({parentName:"li"},{href:"/documentation-staging/mosquitto/management-center/overview/mc-user-profile"}),"User Profile")),(0,n.kt)("li",{parentName:"ul"},"Logout")),(0,n.kt)("h3",m({},{id:"navigation"}),"Navigation"),(0,n.kt)("p",null,"The navigation on the left side of the browser window allows you to switch between the different pages of the application.\nIt has three different layout. The default shows the icons for the most used features. After clicking on the three dots at\nthe bottom, additional navigation targets are blended in. These relate mostly to rarely used administration options. If\nyou click on the burger menu in the title bar, title will be shown next to the navigation items, explaining their use.\nSome options are only available in the Premium Version. "),(0,n.kt)("p",null,"The following options and their features are accessible here:"),(0,n.kt)("img",{className:"docimagelefticon",src:t(96592).Z,width:"32px"}),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/management-center/overview/inspection/mc-system"}),"View the broker status and broker license infos")),(0,n.kt)("img",{className:"docimagelefticon",src:t(94326).Z,width:"32px"}),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/management-center/overview/inspection/mc-topics"}),"View the topic tree, where lately published topics are collected and presented")),(0,n.kt)("img",{className:"docimagelefticon",src:t(52961).Z,width:"32px"}),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/management-center/overview/inspection/mc-clientinspection"}),"Inspect a list of clients, that have been connected to or disconnected from the broker"),(0,n.kt)(a.Z,{inline:!0,mdxType:"PremiumFeature"})),(0,n.kt)("hr",null),(0,n.kt)("img",{className:"docimagelefticon",src:t(22089).Z,width:"32px"}),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/management-center/overview/configuration/mc-clients"}),"Manage the client list and add, modify or delete clients")),(0,n.kt)("img",{className:"docimagelefticon",src:t(79561).Z,width:"32px"}),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/management-center/overview/configuration/mc-groups"}),"View, create or modify the groups")),(0,n.kt)("img",{className:"docimagelefticon",src:t(42792).Z,width:"32px"}),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/management-center/overview/configuration/mc-roles"}),"Manage roles and assign rights to the roles")),(0,n.kt)("hr",null),(0,n.kt)("img",{className:"docimagelefticon",src:t(60660).Z,width:"32px"}),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/management-center/overview/configuration/mc-streams"}),"Create and manage Streams for topic mapping"),(0,n.kt)(a.Z,{inline:!0,mdxType:"PremiumFeature"})),(0,n.kt)("img",{className:"docimagelefticon",src:t(22723).Z,width:"32px"}),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/management-center/overview/configuration/mc-terminal"}),"Execute Terminal commands")),(0,n.kt)("hr",null),(0,n.kt)("img",{className:"docimagelefticon",src:t(15978).Z,width:"32px"}),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/management-center/overview/configuration/mc-connections"}),"Define broker connections to access mosquitto instances")),(0,n.kt)("img",{className:"docimagelefticon",src:t(94848).Z,width:"32px"}),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/management-center/overview/configuration/mc-clusters"}),"Manage Cluster Settings"),(0,n.kt)(a.Z,{inline:!0,mdxType:"PremiumFeature"})),(0,n.kt)("img",{className:"docimagelefticon",src:t(92699).Z,width:"32px"}),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/management-center/overview/configuration/mc-certificates"}),"Manage and assign certificates"),(0,n.kt)(a.Z,{inline:!0,mdxType:"PremiumFeature"})),(0,n.kt)("p",null,"If the admin section is opened by clicking on the three dots at the bottom of the navigation the following options\nare available:"),(0,n.kt)("img",{className:"docimagelefticon",src:t(94024).Z,width:"32px"}),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/management-center/overview/administration/mc-information"}),"Show Management Center infos about license and features")),(0,n.kt)("img",{className:"docimagelefticon",src:t(5770).Z,width:"32px"}),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/management-center/overview/administration/mc-users"}),"Manage Users and Assign Roles to users"),(0,n.kt)(a.Z,{inline:!0,mdxType:"PremiumFeature"})),(0,n.kt)("img",{className:"docimagelefticon",src:t(72657).Z,width:"32px"}),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/management-center/overview/administration/mc-user-groups"}),"Manage User Groups and Users to Groups"),(0,n.kt)(a.Z,{inline:!0,mdxType:"PremiumFeature"})),(0,n.kt)("img",{className:"docimagelefticon",src:t(95984).Z,width:"32px"}),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/management-center/overview/administration/mc-tokens"}),"Create Tokens for REST API Access"),(0,n.kt)(a.Z,{inline:!0,mdxType:"PremiumFeature"})),(0,n.kt)("img",{className:"docimagelefticon",src:t(76689).Z,width:"32px"}),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/management-center/overview/administration/mc-settings"}),"View and modify Management Center Settings")))}w.isMDXComponent=!0},49044:(e,A,t)=>{t.d(A,{Z:()=>r});var n=t(67294),a=t(39082),i=t(62659),o=t(83166);function r({inline:e}){return n.createElement(a.Z,{sx:{margin:e?"0px 5px":"5px 5px 15px 5px",height:e?"22px":void 0,color:"#ffffff",backgroundColor:i.Z[500]},size:"small",icon:n.createElement(o.Z,{style:{color:"white"},size:"small"}),label:"Premium"})}},92699:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAwUExURf6wl/10SP6cff1gLv2IYv2HYv6vlv6bfP1pOv6lif1qO/1+Vf1zR/6Rb/19VQAAAHeZyDYAAAAQdFJOU////////////////////wDgI10ZAAAACXBIWXMAAB2GAAAdhgFdohOBAAAAzUlEQVQ4T62SWQ7DIAxEQxwIWQr3v23HSzBpVVSpnR+PeTLJAFMd6p94CuFlwSprJtFsLcvxAhJTiiiLLTkOWF3VrrBBrWGM5E2caMtEu7gLd5C1EUm9sJROI3wMMVEaYInwEWtAOqVxbP9u8SlK13CSpO1w6CFFMXeF9qnRh33tS4ydC0Oldb/jwm2x0YofKWoMy3hN6n244dhdMrbRWI5r9leyUjbnGJFxE6zDDpTlGPO8AR5cm71hhBXpeal6jK+e55VNdcdv+gXX+gQr9i2nRFdhwgAAAABJRU5ErkJggg=="},52961:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA8UExURf6bfP6lif1gLv1qO/6Rbv2BWf6be/6ggv1zR/2HYv19Vf1+Vf6pjv1xRf1pOv6Rb/6vlv6ScP10SAAAAP2X3RYAAAAUdFJOU/////////////////////////8AT0/nEQAAAAlwSFlzAAAdhgAAHYYBXaITgQAAAKtJREFUOE/NkdsSgjAMRGW5SEHxkv//V5NNSjsijG96HtJlD7Sd4SSH/KHO9WfdoPWw8zXgotJdP0TSGvCVUznDYLSN3zUtS248IlmbdVf0hFkk2Si6D30xoy9xFD2E1jhiMq1jc/ZV04LGxs3aVdOb1cP5xFi0iJ6bSVi41roCuHPd07xY0TNvBjziOXDdhjSebALqEBkKx/QYdaa6j8VoV/gznC/0Ab/TIi9/vjbsf2EzXgAAAABJRU5ErkJggg=="},22089:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAnUExURf6cff2IYv1gLv6vlv6bfP6lif1pOv1zR/6wl/1+Vf1qO/2HYgAAAOcgtjIAAAANdFJOU////////////////wA96CKGAAAACXBIWXMAAB2GAAAdhgFdohOBAAAAd0lEQVQ4T9XQSw6AIAwAUcUPKr3/eS11CJQYo0tnA+1LDHGQx/7Dw+gXfgo57pZjU+ctT/DErLU8wwuz9uHjspquTDnHElUjd8uzPo+Teu7qeeOklnd7WQg7s1b5AHMHu8pAiW3hxLqUrvVLXpKP/16fdttfWeQEqCQlj17IMxkAAAAASUVORK5CYII="},94848:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA5UExURf2HYv2IYv1gLv65o/7Xy/19Vf////1+Vf1qO/6vlv6wl/6bfP1zR/6cff10SP1pOv66pP/YywAAANubnSoAAAATdFJOU////////////////////////wCyfdwIAAAACXBIWXMAAB2GAAAdhgFdohOBAAAAZ0lEQVQ4T9XOzRKAIAhGUSTNtB/L93/YNgwwDabLOsvvLgDqq79ncAbJiJMP+KCzn4FWpnN0C61MctNQTtkgGXFNG51kOnc+3/NBK5OcLJKbhjJigEInmc6dz88r0sokg0Vy02dzrTeuPC+4dGDZxAAAAABJRU5ErkJggg=="},15978:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAqUExURf6lif10SP1gLv2HYv6vlv2IYv1qO/1+Vf6wl/19Vf6bfP1pOv1zRwAAADXdGvAAAAAOdFJOU/////////////////8ARcDcyAAAAAlwSFlzAAAdhgAAHYYBXaITgQAAAHxJREFUOE/FkjkSwCAMA0FAyOX/fzeWDTNJkTS51KzwjhkKglzmCx2iU9AYXTSd2jgje4EP3tepDKhFS4mIxgoUFtOwcJfRfSP3f9fZ0st+YPo8vj0yWg5keeBpUz8dOHVtx1m5KBflzAGFa1l5pSYhGYPbrv/7Lee5o0U2OlQii6ARIJ4AAAAASUVORK5CYII="},79561:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkUExURf6cff2IYv6wl/1gLv19Vf1qO/6bfP2HYv6vlv1+Vf6ScAAAABd0mdAAAAAMdFJOU///////////////ABLfzs4AAAAJcEhZcwAAHYYAAB2GAV2iE4EAAACCSURBVDhP3ZBBEoAgDAOFqqD8/7+mqbU6ow5ncknIolCm9qsh8JQyPacoIwmU4DN8seqGV8WCQF+tDFxYI9CLlYErawR3Ks7WMytc9/nHN/yqfpxtbPzeQ+CNNxLZdQHf2J7YoQoNh+QGYpvZhYKuT0jM1SVMZ6ETl4euwvG3BsWtHZcHIap1HnMOAAAAAElFTkSuQmCC"},96592:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAhUExURf6cff10SP1gLv1qO/6bfP1+Vf6vlv1zR/2HYv6liQAAAADudCQAAAALdFJOU/////////////8ASk8B8gAAAAlwSFlzAAAdhgAAHYYBXaITgQAAAHJJREFUOE/NzFEOgCAMA1ABGYP7H1i2FWXEGD/pD11fwtE+sxMv93KGGNAsnlOMMaFrHIt6n1lRgrtnYpgEy8QnxDLm8Xq9/R9nrE+y7mCigtlSiHQfnzcGWBirZyYiK1g9y4+0HVfu0Salapv4PdtyaxfoVh0j81W+xwAAAABJRU5ErkJggg=="},94024:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURf6ScP2IYv1gLv6cff1qO/6bfP7Xy/6vlv////6wl/2HYv6Rb/1zR//Yy/6lif1pOgAAAJ6k11YAAAARdFJOU/////////////////////8AJa2ZYgAAAAlwSFlzAAAdhgAAHYYBXaITgQAAAJZJREFUOE/N0VEPgjAMBGDWgdNNZP//1yLzul5BjS8k3lO5L0uzMdSv+R8eggTX0EcUTUTDPMK2jOiMWc2VvXYHT2inS59aD0Yn6ZowSet3HG4BE3NGxSlvOCcbjdG43XfjfoSYThdUzLT714t9YH2rOOt/e7QeXBe0muVVK+8cauxclbjv171biJ8pWXK7r8bzISdyrSuPoCcVZ6YIugAAAABJRU5ErkJggg=="},42792:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAtUExURf6wl/10SP6cff1gLv2IYv2HYv1qO/1pOv2AWf6vlv1zR/6Rb/19Vf6bfAAAAEyxOuMAAAAPdFJOU///////////////////ANTcmKEAAAAJcEhZcwAAHYYAAB2GAV2iE4EAAAC6SURBVDhPrZDbEsIgDERLL/ae//9cN8sWUlsdZ/Q8QMiBAGnsI//UTXrZHpdt57Rakap7SqdXBhw6SWWSstKD0pUH8291x/xZDzW86pGh2XivPeCvbjUqT5imsDnquR7DuDAfdOgaRn8luDs9Y1yZl3aBVoa7sdn5WvOt/Jh/3GcgvSGjNoOx2xRJ51ehftP7rqOBRft9olapWp0mwRedy5NSOupyPtiobaVVOzNRm+3Lrkic9YVftNkTamYl7lfxLBMAAAAASUVORK5CYII="},76689:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAnUExURf6wl/1gLv6vlv6lif6cff1+Vf2HYv1pOv2IYv1qO/6bfP19VQAAAGfiN/wAAAANdFJOU////////////////wA96CKGAAAACXBIWXMAAB2GAAAdhgFdohOBAAAApElEQVQ4T82RUQ+EIAyDHSig8v9/77G1UyTmEnIv16euX5lElvpVf4SXJlrTE4uJg2oGB+AucxtF1g1UZFtFosWOCTpZTJyY5ZQybdGcGEnGwIJaX24RvZVRdawRDwPD9TjR2k3gJvBO+7J8vyNgdIk1uI5bFWVi/y1SCg1u4suZdbLYcZR8nARyHuOTmPiggWPTA/MTHFRTuIYmWtOAR/2Ca/0Ag0wguR1xs9IAAAAASUVORK5CYII="},60660:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAqUExURf6ScP6cff1pOv1gLv6Rb/6bfP6vlv1+Vf6lif1qO/19Vf6wl/2HYgAAAPXg4ekAAAAOdFJOU/////////////////8ARcDcyAAAAAlwSFlzAAAdhgAAHYYBXaITgQAAAIFJREFUOE/t0GsWQCAQBeCYXhPtf7tuTe+DBTjuj1x9Ean4mp/XqC0N0kuGu51IL0xEpeW+z2wwZa10h+5nZkwx5+rSo8jATMEGLECtOjAUYwjER9POoghe0LRx02jBZ+nCHjNV59/LjCPoM1hdrkhmPew2R/Y2OL/b1E97yEc5xgvRMSrPGpI1fgAAAABJRU5ErkJggg=="},22723:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAYUExURf6ScP2IYv6Rb/1gLv1pOv10SP2HYgAAAJaSDCQAAAAIdFJOU/////////8A3oO9WQAAAAlwSFlzAAAdhgAAHYYBXaITgQAAAEpJREFUOE/t0EsOABAMQEEUvf+NaZX425J4iyY6SRcUbnudlR4SoGFgkikMQLMt7T53ndjSZD78OTpZVTmGyPKexOyX5ePLrmXEABDTFfJbuAgtAAAAAElFTkSuQmCC"},95984:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA/UExURf6wl/10SP6cff1gLv2IYv2HYv6bfP7Xy/////6vlv1pOv6lif/r5f1qO//18v1zR/65o/6Rb/19Vf1+VQAAAFevMvMAAAAVdFJOU///////////////////////////ACvZfeoAAAAJcEhZcwAAHYYAAB2GAV2iE4EAAAC3SURBVDhPzdLdDoMgDAVgpYrg73B9/2cdtAcGJu5mybJzpeez2Bg7/phfcte3RXNnKMXgLqXiIdI4pgcGNBX3sbaT84mJerTgODQvq3OZiTbpCy97xIpJ+sKT6H/wIX1h00m8xtIofWHE6yEPCtKDGZo56KtveMdmhc+GPZ1aZ87jwuuG4TdjOeETe1fMc+bd0IyuYj3eu/WZ94qpWOZN/KHKbMsc5AD9IJqGme1hcaW58DXfMPMLMHwziXwua3IAAAAASUVORK5CYII="},94326:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAeUExURf2HYv2IYv1gLv6vlv10SP6bfP6wl/6cff1zRwAAAOzNR/oAAAAKdFJOU////////////wCyzCzPAAAACXBIWXMAAB2GAAAdhgFdohOBAAAAcUlEQVQ4T82OQQ6AIAwE0YLY/39Yuq2IiKjxoHPYdDsJxXGXv2s3ACwS2lChR4VkZiarMj/QXh/1VmtdUevAwQLUmuQsAtzVpODTkms1nVFd0NKTIouGPtzOXOvIsac3ZLHX7BLzuRbOb4N3uuQ7zbwA730Ym26FXFIAAAAASUVORK5CYII="},72657:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURf2IYv6ScP1+Vf1gLv19Vf1pOv6vlv6lif6Rb/2HYv10SP1zR/6cff6wl/1qO/6bfAAAALs4PL0AAAARdFJOU/////////////////////8AJa2ZYgAAAAlwSFlzAAAdhgAAHYYBXaITgQAAAKNJREFUOE/dkMESwiAMRCkLpQWK/P/XugkSO051vOo7hC2PaSCuf+QvtFseYXluWvIIEStDQgzwY9P0CpZNCjYpcpBMve9SVUsI+nnSWarpIr8g1huV/SNDZN+qZ4jpBEAsPVPSdNLXfK+P4zWYro0NiT/8CI03JUM3nQXvV4Cbpg1NFtWlSB3MJ/Uik1A9RyhY1jEPnZ1hOZver5n6Pb+qe78DhIAyZo4XGloAAAAASUVORK5CYII="},5770:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkUExURf6cff2IYv6wl/1gLv19Vf1qO/6bfP2HYv6vlv1+Vf6ScAAAABd0mdAAAAAMdFJOU///////////////ABLfzs4AAAAJcEhZcwAAHYYAAB2GAV2iE4EAAACCSURBVDhP3ZBBEoAgDAOFqqD8/7+mqbU6ow5ncknIolCm9qsh8JQyPacoIwmU4DN8seqGV8WCQF+tDFxYI9CLlYErawR3Ks7WMytc9/nHN/yqfpxtbPzeQ+CNNxLZdQHf2J7YoQoNh+QGYpvZhYKuT0jM1SVMZ6ETl4euwvG3BsWtHZcHIap1HnMOAAAAAElFTkSuQmCC"},92339:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/login-baa26f0d566329e5b420ef0b76943abd.png"},51761:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/titlebar-2b1961a2c3609037222a5205e4db564e.png"}}]);