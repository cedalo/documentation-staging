"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[61573],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||a;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>j});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&l(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&l(e,n,t[n]);return e};const u={id:"manage-projects",title:"Creating and Managing Projects",sidebar_label:"Creating and Managing Projects"},g=void 0,d={unversionedId:"project-account-management/project-management/manage-projects",id:"project-account-management/project-management/manage-projects",title:"Creating and Managing Projects",description:"After logging in you are guided to the projects overview. Here are your existing projects listed, plus those that you",source:"@site/mosquitto/project-account-management/project-management/manage-projects.md",sourceDirName:"project-account-management/project-management",slug:"/project-account-management/project-management/manage-projects",permalink:"/documentation-staging/mosquitto/next/project-account-management/project-management/manage-projects",draft:!1,tags:[],version:"current",frontMatter:{id:"manage-projects",title:"Creating and Managing Projects",sidebar_label:"Creating and Managing Projects"},sidebar:"someSidebar",previous:{title:"Delete Account",permalink:"/documentation-staging/mosquitto/next/project-account-management/account-management/delete"},next:{title:"Assigning Team Members",permalink:"/documentation-staging/mosquitto/next/project-account-management/project-management/assign-members"}},f={},j=[{value:"Create a project",id:"create-a-project",level:2},{value:"Define Project Settings",id:"define-project-settings",level:2},{value:"Delete a project",id:"delete-a-project",level:2}],h={toc:j};function b(e){var t,o=e,{components:l}=o,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(o,["components"]);return(0,r.kt)("wrapper",(t=m(m({},h),u),a(t,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"After logging in you are guided to the projects overview. Here are your existing projects listed, plus those that you\nwere invited to as a member."),(0,r.kt)("img",{className:"docimagemb",src:n(80462).Z,width:"100%"}),(0,r.kt)("p",null,"You can also jump to the project settings and billing below the current project listing. When you click on a project on\nthe arrow button, the broker overview of the project is opened, listing the available brokers of the project."),(0,r.kt)("h2",m({},{id:"create-a-project"}),"Create a project"),(0,r.kt)("p",null,'To create a new project, click on the "Add Project" button in the project overview. You need to enter a name for the\nproject:'),(0,r.kt)("img",{className:"docimagemb",src:n(59543).Z,width:"40%"}),(0,r.kt)("p",null,"After confirming the name, the project will be created and listed in the project overview."),(0,r.kt)("h2",m({},{id:"define-project-settings"}),"Define Project Settings"),(0,r.kt)("p",null,'To define project settings, you have to click on the "Settings" button in the project overview or, if you are in the\nproject overview (broker list) you can use the "Settings" navigation at the top.'),(0,r.kt)("img",{className:"docimagemb",src:n(98601).Z,width:"100%"}),(0,r.kt)("p",null,"Here you can change the name of the project using the edit button right to the current name and add a description, if\ndesired. The owner can not be changed. The owner of a project is the one, that created it. If you are invited into a\nproject, the name of the initial creator of the project is shown."),(0,r.kt)("p",null,"Below the general settings, a list of the brokers of the current project is shown."),(0,r.kt)("h2",m({},{id:"delete-a-project"}),"Delete a project"),(0,r.kt)("p",null,'To delete a project, use the "Delete Project" button. This can not be undone. The following confirmation dialog is now\nappearing:'),(0,r.kt)("img",{className:"docimagemb",src:n(56851).Z,width:"40%"}),(0,r.kt)("p",null,"For security reasons, you have to enter the project name. If you click on the button with the project name, the name\nwill be copied to the clipboard. You can then paste it into the edit field to simplify the action."))}b.isMDXComponent=!0},59543:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/project_add-ae1ea340ee62c81d104fd8cdef9d8721.png"},56851:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/project_delete-f40cd178e1e769c72f090473b61b0c07.png"},80462:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/projects-51cbf088abce6c57dc2f2cb0f7c8488d.png"},98601:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/projects_settings-9e2550e5376b8cceb4885eeb79ce5285.png"}}]);