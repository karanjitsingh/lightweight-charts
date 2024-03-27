"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1940],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>u});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=c(n),y=i,u=g["".concat(p,".").concat(y)]||g[y]||s[y]||a;return n?r.createElement(u,l(l({ref:t},m),{},{components:n})):r.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},90296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(58168),i=(n(96540),n(15680));const a={id:"TimeScalePoint",title:"Interface: TimeScalePoint",sidebar_label:"TimeScalePoint",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"api/interfaces/TimeScalePoint",id:"version-4.1/api/interfaces/TimeScalePoint",title:"Interface: TimeScalePoint",description:"Represents a point on the time scale",source:"@site/versioned_docs/version-4.1/api/interfaces/TimeScalePoint.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/TimeScalePoint",permalink:"/lightweight-charts/docs/api/interfaces/TimeScalePoint",draft:!1,editUrl:null,tags:[],version:"4.1",sidebarPosition:0,frontMatter:{id:"TimeScalePoint",title:"Interface: TimeScalePoint",sidebar_label:"TimeScalePoint",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},c=[{value:"Properties",id:"properties",level:2},{value:"timeWeight",id:"timeweight",level:3},{value:"time",id:"time",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"originalTime",id:"originaltime",level:3}],m={toc:c},g="wrapper";function s(e){let{components:t,...n}=e;return(0,i.yg)(g,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Represents a point on the time scale"),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"timeweight"},"timeWeight"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.yg)("strong",{parentName:"p"},"timeWeight"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#tickmarkweightvalue"},(0,i.yg)("inlineCode",{parentName:"a"},"TickMarkWeightValue"))),(0,i.yg)("p",null,"Weight of the point"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"time"},"time"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.yg)("strong",{parentName:"p"},"time"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"Object")),(0,i.yg)("p",null,"Time of the point"),(0,i.yg)("h4",{id:"type-declaration"},"Type declaration"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"[species]")),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},'"InternalHorzScaleItem"')),(0,i.yg)("td",{parentName:"tr",align:"left"},"The 'name' or species of the nominal.")))),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"originaltime"},"originalTime"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.yg)("strong",{parentName:"p"},"originalTime"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"unknown")),(0,i.yg)("p",null,"Original time for the point"))}s.isMDXComponent=!0}}]);