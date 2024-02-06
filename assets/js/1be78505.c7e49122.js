"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[656,772],{49276:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var a=n(11504),o=n(14971),l=n(15756),c=n(45864),r=n(14456),i=n(79940),s=n(69920),d=n(46192),m=n(83280),u=n(84357),b=n(53943),p=n(27124);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:c,cancelScroll:r}=(0,b.yI)();return(0,b.SM)(((e,n)=>{let{scrollY:a}=e;const c=n?.scrollY;c&&(l.current?l.current=!1:a>=c?(r(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,p.c)((e=>{e.location.hash&&(l.current=!0,o(!1))})),{shown:n,scrollToTop:()=>c(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.G)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.c)("clean-btn",c.W.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var f=n(13856),g=n(55592),v=n(21162),_=n(97880);const C={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function k(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:C.expandButton,title:(0,u.G)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.G)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(_.c,{className:C.expandButtonIcon}))}const S={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function I(e){let{children:t}=e;const n=(0,d.m)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function N(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:r}=(0,g.IT)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),!i&&(0,f.I)()&&s(!0),l((e=>!e))}),[l,i]);return a.createElement("aside",{className:(0,o.c)(c.W.docs.docSidebarContainer,S.docSidebarContainer,n&&S.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(S.docSidebarContainer)&&n&&s(!0)}},a.createElement(I,null,a.createElement("div",{className:(0,o.c)(S.sidebarViewport,i&&S.sidebarViewportHidden)},a.createElement(v.c,{sidebar:t,path:r,onCollapse:d,isHidden:i}),i&&a.createElement(k,{toggleSidebar:d}))))}const x={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function T(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,d.m)();return a.createElement("main",{className:(0,o.c)(x.docMainContainer,(t||!l)&&x.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.c)("container padding-top--md padding-bottom--lg",x.docItemWrapper,t&&x.docItemWrapperEnhanced)},n))}const y={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX","themedComponent--light":"themedComponent--light_NU7w"};function B(e){let{children:t}=e;const n=(0,d.m)(),[o,l]=(0,a.useState)(!1);return a.createElement(m.c,{wrapperClassName:y.docsWrapper},a.createElement(E,null),a.createElement("div",{className:y.docPage},n&&a.createElement(N,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(T,{hiddenSidebarContainer:o},t)))}var w=n(29772),A=n(48712);function W(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(A.c,{version:t.version,tag:(0,r.SE)(t.pluginId,t.version)}),a.createElement(l.U7,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function L(e){const{versionMetadata:t}=e,n=(0,i.sr)(e);if(!n)return a.createElement(w.default,null);const{docElement:r,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(W,e),a.createElement(l.cr,{className:(0,o.c)(c.W.wrapper.docsPages,c.W.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.Q,{version:t},a.createElement(d.y,{name:m,items:u},a.createElement(B,null,r)))))}},21162:(e,t,n)=>{n.d(t,{c:()=>q});var a=n(11504),o=n(11432),l=n(14971),c=n(21824),r=n(68164),i=n(84357),s=n(97880);const d={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function m(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,i.G)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,i.G)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.c)("button button--secondary button--outline",d.collapseSidebarButton),onClick:t},a.createElement(s.c,{className:d.collapseSidebarButtonIcon}))}var u=n(45864),b=n(43868),p=n(53943),h=n(45072),E=n(91100);const f=Symbol("EmptyContext"),g=a.createContext(f);function v(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),l=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(g.Provider,{value:l},t)}var _=n(58448),C=n(79940),k=n(13376),S=n(76016),I=n(93664);function N(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,i.G)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function x(e){let{item:t,onItemClick:n,activePath:o,level:r,index:i,...s}=e;const{items:d,label:m,collapsible:b,className:p,href:v}=t,{docs:{sidebar:{autoCollapseCategories:x}}}=(0,c.y)(),T=function(e){const t=(0,I.c)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,C.OQ)(e):void 0),[e,t])}(t),y=(0,C.Md)(t,o),B=(0,k.Sc)(v,o),{collapsed:w,setCollapsed:A}=(0,_.a)({initialState:()=>!!b&&(!y&&t.collapsed)}),{expandedItem:W,setExpandedItem:L}=function(){const e=(0,a.useContext)(g);if(e===f)throw new E.AH("DocSidebarItemsExpandedStateProvider");return e}(),M=function(e){void 0===e&&(e=!w),L(e?null:i),A(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const l=(0,E.i0)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n,o])}({isActive:y,collapsed:w,updateCollapsed:M}),(0,a.useEffect)((()=>{b&&null!=W&&W!==i&&x&&A(!0)}),[b,W,i,A,x]),a.createElement("li",{className:(0,l.c)(u.W.docs.docSidebarItemCategory,u.W.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":w},p)},a.createElement("div",{className:(0,l.c)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":B})},a.createElement(S.c,(0,h.c)({className:(0,l.c)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!v&&b,"menu__link--active":y}),onClick:b?e=>{n?.(t),v?M(!1):(e.preventDefault(),M())}:()=>{n?.(t)},"aria-current":B?"page":void 0,"aria-expanded":b?!w:void 0,href:b?T??"#":T},s),m),v&&b&&a.createElement(N,{categoryLabel:m,onClick:e=>{e.preventDefault(),M()}})),a.createElement(_.U,{lazy:!0,as:"ul",className:"menu__list",collapsed:w},a.createElement(H,{items:d,tabIndex:w?-1:0,onItemClick:n,activePath:o,level:r+1})))}var T=n(18136),y=n(3232);const B={menuExternalLink:"menuExternalLink_NmtK"};function w(e){let{item:t,onItemClick:n,activePath:o,level:c,index:r,...i}=e;const{href:s,label:d,className:m,autoAddBaseUrl:b}=t,p=(0,C.Md)(t,o),E=(0,T.c)(s);return a.createElement("li",{className:(0,l.c)(u.W.docs.docSidebarItemLink,u.W.docs.docSidebarItemLinkLevel(c),"menu__list-item",m),key:d},a.createElement(S.c,(0,h.c)({className:(0,l.c)("menu__link",!E&&B.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:s},E&&{onClick:n?()=>n(t):void 0},i),d,!E&&a.createElement(y.c,null)))}const A={menuHtmlItem:"menuHtmlItem_M9Kj"};function W(e){let{item:t,level:n,index:o}=e;const{value:c,defaultStyle:r,className:i}=t;return a.createElement("li",{className:(0,l.c)(u.W.docs.docSidebarItemLink,u.W.docs.docSidebarItemLinkLevel(n),r&&[A.menuHtmlItem,"menu__list-item"],i),key:o,dangerouslySetInnerHTML:{__html:c}})}function L(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(x,(0,h.c)({item:t},n));case"html":return a.createElement(W,(0,h.c)({item:t},n));default:return a.createElement(w,(0,h.c)({item:t},n))}}function M(e){let{items:t,...n}=e;return a.createElement(v,null,t.map(((e,t)=>a.createElement(L,(0,h.c)({key:t,item:e,index:t},n)))))}const H=(0,a.memo)(M),P={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function F(e){let{path:t,sidebar:n,className:o}=e;const c=function(){const{isActive:e}=(0,b.el)(),[t,n]=(0,a.useState)(e);return(0,p.SM)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,i.G)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.c)("menu thin-scrollbar",P.menu,c&&P.menuWithAnnouncementBar,o)},a.createElement("ul",{className:(0,l.c)(u.W.docs.docSidebarMenu,"menu__list")},a.createElement(H,{items:n,activePath:t,level:1})))}const U="sidebar_njMd",D="sidebarWithHideableNavbar_wUlq",G="sidebarHidden_VK0M",R="sidebarLogo_isFc";function V(e){let{path:t,sidebar:n,onCollapse:o,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:d}}}=(0,c.y)();return a.createElement("div",{className:(0,l.c)(U,s&&D,i&&G)},s&&a.createElement(r.c,{tabIndex:-1,className:R}),a.createElement(F,{path:t,sidebar:n}),d&&a.createElement(m,{onClick:o}))}const z=a.memo(V);var K=n(45168),j=n(41336);const O=e=>{let{sidebar:t,path:n}=e;const o=(0,j.q)();return a.createElement("ul",{className:(0,l.c)(u.W.docs.docSidebarMenu,"menu__list")},a.createElement(H,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function Q(e){return a.createElement(K.Mx,{component:O,props:e})}const Y=a.memo(Q);function q(e){const t=(0,o.U)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(z,e),l&&a.createElement(Y,e))}},97880:(e,t,n)=>{n.d(t,{c:()=>l});var a=n(45072),o=n(11504);function l(e){return o.createElement("svg",(0,a.c)({width:"20",height:"20","aria-hidden":"true"},e),o.createElement("g",{fill:"#7a7a7a"},o.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),o.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},29772:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(11504),o=n(84357),l=n(15756),c=n(83280);function r(){return a.createElement(a.Fragment,null,a.createElement(l.U7,{title:(0,o.G)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(c.c,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.c,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.c,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.c,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},69920:(e,t,n)=>{n.d(t,{E:()=>r,Q:()=>c});var a=n(11504),o=n(91100);const l=a.createContext(null);function c(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function r(){const e=(0,a.useContext)(l);if(null===e)throw new o.AH("DocsVersionProvider");return e}}}]);