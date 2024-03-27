"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4551],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>h});var r=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},g=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),d=p(a),y=i,h=d["".concat(o,".").concat(y)]||d[y]||m[y]||n;return a?r.createElement(h,l(l({ref:t},g),{},{components:a})):r.createElement(h,l({ref:t},g))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},25339:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(58168),i=(a(96540),a(15680));const n={id:"ISeriesPrimitiveBase",title:"Interface: ISeriesPrimitiveBase<TSeriesAttachedParameters>",sidebar_label:"ISeriesPrimitiveBase",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,s={unversionedId:"api/interfaces/ISeriesPrimitiveBase",id:"version-4.1/api/interfaces/ISeriesPrimitiveBase",title:"Interface: ISeriesPrimitiveBase<TSeriesAttachedParameters>",description:"Base interface for series primitives. It must be implemented to add some external graphics to series",source:"@site/versioned_docs/version-4.1/api/interfaces/ISeriesPrimitiveBase.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ISeriesPrimitiveBase",permalink:"/lightweight-charts/docs/api/interfaces/ISeriesPrimitiveBase",draft:!1,editUrl:null,tags:[],version:"4.1",sidebarPosition:0,frontMatter:{id:"ISeriesPrimitiveBase",title:"Interface: ISeriesPrimitiveBase<TSeriesAttachedParameters>",sidebar_label:"ISeriesPrimitiveBase",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},o={},p=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"updateAllViews",id:"updateallviews",level:3},{value:"Returns",id:"returns",level:4},{value:"priceAxisViews",id:"priceaxisviews",level:3},{value:"Returns",id:"returns-1",level:4},{value:"timeAxisViews",id:"timeaxisviews",level:3},{value:"Returns",id:"returns-2",level:4},{value:"paneViews",id:"paneviews",level:3},{value:"Returns",id:"returns-3",level:4},{value:"priceAxisPaneViews",id:"priceaxispaneviews",level:3},{value:"Returns",id:"returns-4",level:4},{value:"timeAxisPaneViews",id:"timeaxispaneviews",level:3},{value:"Returns",id:"returns-5",level:4},{value:"autoscaleInfo",id:"autoscaleinfo",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-6",level:4},{value:"attached",id:"attached",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-7",level:4},{value:"detached",id:"detached",level:3},{value:"Returns",id:"returns-8",level:4},{value:"hitTest",id:"hittest",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-9",level:4}],g={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.yg)(d,(0,r.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Base interface for series primitives. It must be implemented to add some external graphics to series"),(0,i.yg)("h2",{id:"type-parameters"},"Type parameters"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"TSeriesAttachedParameters")),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"unknown"))))),(0,i.yg)("h2",{id:"methods"},"Methods"),(0,i.yg)("h3",{id:"updateallviews"},"updateAllViews"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"updateAllViews"),"(): ",(0,i.yg)("inlineCode",{parentName:"p"},"void")),(0,i.yg)("p",null,"This method is called when viewport has been changed, so primitive have to recalculate / invalidate its data"),(0,i.yg)("h4",{id:"returns"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"void")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"priceaxisviews"},"priceAxisViews"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"priceAxisViews"),"(): readonly ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesPrimitiveAxisView"},(0,i.yg)("inlineCode",{parentName:"a"},"ISeriesPrimitiveAxisView")),"[]"),(0,i.yg)("p",null,"Returns array of labels to be drawn on the price axis used by the series"),(0,i.yg)("h4",{id:"returns-1"},"Returns"),(0,i.yg)("p",null,"readonly ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesPrimitiveAxisView"},(0,i.yg)("inlineCode",{parentName:"a"},"ISeriesPrimitiveAxisView")),"[]"),(0,i.yg)("p",null,"array of objects; each of then must implement ISeriesPrimitiveAxisView interface"),(0,i.yg)("p",null,"For performance reasons, the lightweight library uses internal caches based on references to arrays\nSo, this method must return new array if set of views has changed and should try to return the same array if nothing changed"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"timeaxisviews"},"timeAxisViews"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"timeAxisViews"),"(): readonly ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesPrimitiveAxisView"},(0,i.yg)("inlineCode",{parentName:"a"},"ISeriesPrimitiveAxisView")),"[]"),(0,i.yg)("p",null,"Returns array of labels to be drawn on the time axis"),(0,i.yg)("h4",{id:"returns-2"},"Returns"),(0,i.yg)("p",null,"readonly ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesPrimitiveAxisView"},(0,i.yg)("inlineCode",{parentName:"a"},"ISeriesPrimitiveAxisView")),"[]"),(0,i.yg)("p",null,"array of objects; each of then must implement ISeriesPrimitiveAxisView interface"),(0,i.yg)("p",null,"For performance reasons, the lightweight library uses internal caches based on references to arrays\nSo, this method must return new array if set of views has changed and should try to return the same array if nothing changed"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"paneviews"},"paneViews"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"paneViews"),"(): readonly ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesPrimitivePaneView"},(0,i.yg)("inlineCode",{parentName:"a"},"ISeriesPrimitivePaneView")),"[]"),(0,i.yg)("p",null,"Returns array of objects representing primitive in the main area of the chart"),(0,i.yg)("h4",{id:"returns-3"},"Returns"),(0,i.yg)("p",null,"readonly ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesPrimitivePaneView"},(0,i.yg)("inlineCode",{parentName:"a"},"ISeriesPrimitivePaneView")),"[]"),(0,i.yg)("p",null,"array of objects; each of then must implement ISeriesPrimitivePaneView interface"),(0,i.yg)("p",null,"For performance reasons, the lightweight library uses internal caches based on references to arrays\nSo, this method must return new array if set of views has changed and should try to return the same array if nothing changed"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"priceaxispaneviews"},"priceAxisPaneViews"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"priceAxisPaneViews"),"(): readonly ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesPrimitivePaneView"},(0,i.yg)("inlineCode",{parentName:"a"},"ISeriesPrimitivePaneView")),"[]"),(0,i.yg)("p",null,"Returns array of objects representing primitive in the price axis area of the chart"),(0,i.yg)("h4",{id:"returns-4"},"Returns"),(0,i.yg)("p",null,"readonly ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesPrimitivePaneView"},(0,i.yg)("inlineCode",{parentName:"a"},"ISeriesPrimitivePaneView")),"[]"),(0,i.yg)("p",null,"array of objects; each of then must implement ISeriesPrimitivePaneView interface"),(0,i.yg)("p",null,"For performance reasons, the lightweight library uses internal caches based on references to arrays\nSo, this method must return new array if set of views has changed and should try to return the same array if nothing changed"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"timeaxispaneviews"},"timeAxisPaneViews"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"timeAxisPaneViews"),"(): readonly ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesPrimitivePaneView"},(0,i.yg)("inlineCode",{parentName:"a"},"ISeriesPrimitivePaneView")),"[]"),(0,i.yg)("p",null,"Returns array of objects representing primitive in the time axis area of the chart"),(0,i.yg)("h4",{id:"returns-5"},"Returns"),(0,i.yg)("p",null,"readonly ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesPrimitivePaneView"},(0,i.yg)("inlineCode",{parentName:"a"},"ISeriesPrimitivePaneView")),"[]"),(0,i.yg)("p",null,"array of objects; each of then must implement ISeriesPrimitivePaneView interface"),(0,i.yg)("p",null,"For performance reasons, the lightweight library uses internal caches based on references to arrays\nSo, this method must return new array if set of views has changed and should try to return the same array if nothing changed"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"autoscaleinfo"},"autoscaleInfo"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"autoscaleInfo"),"(",(0,i.yg)("inlineCode",{parentName:"p"},"startTimePoint"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"endTimePoint"),"): ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/AutoscaleInfo"},(0,i.yg)("inlineCode",{parentName:"a"},"AutoscaleInfo"))),(0,i.yg)("p",null,"Return autoscaleInfo which will be merged with the series base autoscaleInfo. You can use this to expand the autoscale range\nto include visual elements drawn outside of the series' current visible price range."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Important"),": Please note that this method will be evoked very often during scrolling and zooming of the chart, thus it\nis recommended that this method is either simple to execute, or makes use of optimisations such as caching to ensure that\nthe chart remains responsive."),(0,i.yg)("h4",{id:"parameters"},"Parameters"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"startTimePoint")),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/api/#logical"},(0,i.yg)("inlineCode",{parentName:"a"},"Logical"))),(0,i.yg)("td",{parentName:"tr",align:"left"},"start time point for the current visible range")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"endTimePoint")),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/api/#logical"},(0,i.yg)("inlineCode",{parentName:"a"},"Logical"))),(0,i.yg)("td",{parentName:"tr",align:"left"},"end time point for the current visible range")))),(0,i.yg)("h4",{id:"returns-6"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/AutoscaleInfo"},(0,i.yg)("inlineCode",{parentName:"a"},"AutoscaleInfo"))),(0,i.yg)("p",null,"AutoscaleInfo"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"attached"},"attached"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"attached"),"(",(0,i.yg)("inlineCode",{parentName:"p"},"param"),"): ",(0,i.yg)("inlineCode",{parentName:"p"},"void")),(0,i.yg)("p",null,"Attached Lifecycle hook."),(0,i.yg)("h4",{id:"parameters-1"},"Parameters"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"param")),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"TSeriesAttachedParameters")),(0,i.yg)("td",{parentName:"tr",align:"left"},"An object containing useful references for the attached primitive to use.")))),(0,i.yg)("h4",{id:"returns-7"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"void")),(0,i.yg)("p",null,"void"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"detached"},"detached"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"detached"),"(): ",(0,i.yg)("inlineCode",{parentName:"p"},"void")),(0,i.yg)("p",null,"Detached Lifecycle hook."),(0,i.yg)("h4",{id:"returns-8"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"void")),(0,i.yg)("p",null,"void"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"hittest"},"hitTest"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"hitTest"),"(",(0,i.yg)("inlineCode",{parentName:"p"},"x"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"y"),"): ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/PrimitiveHoveredItem"},(0,i.yg)("inlineCode",{parentName:"a"},"PrimitiveHoveredItem"))),(0,i.yg)("p",null,"Hit test method which will be called by the library when the cursor is moved.\nUse this to register object ids being hovered for use within the crosshairMoved\nand click events emitted by the chart. Additionally, the hit test result can\nspecify a preferred cursor type to display for the main chart pane. This method\nshould return the top most hit for this primitive if more than one object is\nbeing intersected."),(0,i.yg)("h4",{id:"parameters-2"},"Parameters"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"x")),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"number")),(0,i.yg)("td",{parentName:"tr",align:"left"},"x Coordinate of mouse event")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"y")),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"number")),(0,i.yg)("td",{parentName:"tr",align:"left"},"y Coordinate of mouse event")))),(0,i.yg)("h4",{id:"returns-9"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/PrimitiveHoveredItem"},(0,i.yg)("inlineCode",{parentName:"a"},"PrimitiveHoveredItem"))))}m.isMDXComponent=!0}}]);