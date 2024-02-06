"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[752],{94928:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ie});var n=a(11504),l=a(15756),c=a(91100);const r=n.createContext(null);function o(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(r.Provider,{value:l},t)}function s(){const e=(0,n.useContext)(r);if(null===e)throw new c.AH("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:a}=s();return n.createElement(l.U7,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(14971),m=a(11432),u=a(45072),b=a(84357),p=a(76016);function E(e){const{permalink:t,title:a,subLabel:l,isNext:c}=e;return n.createElement(p.c,{className:(0,d.c)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function h(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,b.G)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&n.createElement(E,(0,u.c)({},t,{subLabel:n.createElement(b.c,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(E,(0,u.c)({},a,{subLabel:n.createElement(b.c,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function v(){const{metadata:e}=s();return n.createElement(h,{previous:e.previous,next:e.next})}var g=a(28264),f=a(15172),_=a(45864),N=a(94592),C=a(69920);const L={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(b.c,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(b.c,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function T(e){const t=L[e.versionMetadata.banner];return n.createElement(t,e)}function U(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(b.c,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(p.c,{to:a,onClick:l},n.createElement(b.c,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function k(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,g.c)(),{pluginId:c}=(0,f.UF)({failfast:!0}),{savePreferredVersionName:r}=(0,N.iy)(c),{latestDocSuggestion:o,latestVersionSuggestion:s}=(0,f.i8)(c),i=o??(m=s).docs.find((e=>e.id===m.mainDocId));var m;return n.createElement("div",{className:(0,d.c)(t,_.W.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(T,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(U,{versionLabel:s.label,to:i.path,onClick:()=>r(s.name)})))}function w(e){let{className:t}=e;const a=(0,C.E)();return a.banner?n.createElement(k,{className:t,versionMetadata:a}):null}function x(e){let{className:t}=e;const a=(0,C.E)();return a.badge?n.createElement("span",{className:(0,d.c)(t,_.W.docs.docVersionBadge,"badge badge--secondary")},n.createElement(b.c,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function y(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(b.c,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function A(e){let{lastUpdatedBy:t}=e;return n.createElement(b.c,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function M(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:_.W.common.lastUpdated},n.createElement(b.c,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(y,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(A,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const B={iconEdit:"iconEdit_Z9Sw"};function I(e){let{className:t,...a}=e;return n.createElement("svg",(0,u.c)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.c)(B.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function H(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:_.W.common.editThisPage},n.createElement(I,null),n.createElement(b.c,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const V={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function P(e){let{permalink:t,label:a,count:l}=e;return n.createElement(p.c,{href:t,className:(0,d.c)(V.tag,l?V.tagWithCount:V.tagRegular)},a,l&&n.createElement("span",null,l))}const W={tags:"tags_jXut",tag:"tag_QGVx"};function D(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(b.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.c)(W.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:W.tag},n.createElement(P,{label:t,permalink:a}))}))))}const S={lastUpdated:"lastUpdated_vwxv"};function F(e){return n.createElement("div",{className:(0,d.c)(_.W.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(D,e)))}function R(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:c}=e;return n.createElement("div",{className:(0,d.c)(_.W.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(H,{editUrl:t})),n.createElement("div",{className:(0,d.c)("col",S.lastUpdated)},(a||l)&&n.createElement(M,{lastUpdatedAt:a,formattedLastUpdatedAt:c,lastUpdatedBy:l})))}function O(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:c,tags:r}=e,o=r.length>0,i=!!(t||a||c);return o||i?n.createElement("footer",{className:(0,d.c)(_.W.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(F,{tags:r}),i&&n.createElement(R,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:c,formattedLastUpdatedAt:l})):null}var j=a(47860);const z={tocMobile:"tocMobile_ITEo"};function G(){const{toc:e,frontMatter:t}=s();return n.createElement(j.c,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.c)(_.W.docs.docTocMobile,z.tocMobile)})}var q=a(75124);function Q(){const{toc:e,frontMatter:t}=s();return n.createElement(q.c,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:_.W.docs.docTocDesktop})}var Y=a(56448),Z=a(1796);function X(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=s();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.c)(_.W.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(Y.c,{as:"h1"},a)),n.createElement(Z.c,null,t))}var $=a(79940),J=a(13376),K=a(70964);function ee(e){return n.createElement("svg",(0,u.c)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const te={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function ae(){const e=(0,K.c)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(p.c,{"aria-label":(0,b.G)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},n.createElement(ee,{className:te.breadcrumbHomeIcon})))}const ne={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function le(e){let{children:t,href:a,isLast:l}=e;const c="breadcrumbs__link";return l?n.createElement("span",{className:c,itemProp:"name"},t):a?n.createElement(p.c,{className:c,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:c},t)}function ce(e){let{children:t,active:a,index:l,addMicrodata:c}=e;return n.createElement("li",(0,u.c)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.c)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function re(){const e=(0,$.js)(),t=(0,J.Y5)();return e?n.createElement("nav",{className:(0,d.c)(_.W.docs.docBreadcrumbs,ne.breadcrumbsContainer),"aria-label":(0,b.G)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(ae,null),e.map(((t,a)=>{const l=a===e.length-1;return n.createElement(ce,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(le,{href:t.href,isLast:l},t.label))})))):null}const oe={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function se(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=s(),a=(0,m.U)(),l=e.hide_table_of_contents,c=!l&&t.length>0;return{hidden:l,mobile:c?n.createElement(G,null):void 0,desktop:!c||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(Q,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.c)("col",!a.hidden&&oe.docItemCol)},n.createElement(w,null),n.createElement("div",{className:oe.docItemContainer},n.createElement("article",null,n.createElement(re,null),n.createElement(x,null),a.mobile,n.createElement(X,null,t),n.createElement(O,null)),n.createElement(v,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function ie(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(o,{content:e.content},n.createElement(l.cr,{className:t},n.createElement(i,null),n.createElement(se,null,n.createElement(a,null))))}},47860:(e,t,a)=>{a.d(t,{c:()=>u});var n=a(11504),l=a(14971),c=a(58448),r=a(43088),o=a(45072),s=a(84357);const i={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function d(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,o.c)({type:"button"},a,{className:(0,l.c)("clean-btn",i.tocCollapsibleButton,!t&&i.tocCollapsibleButtonExpanded,a.className)}),n.createElement(s.c,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const m={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function u(e){let{toc:t,className:a,minHeadingLevel:o,maxHeadingLevel:s}=e;const{collapsed:i,toggleCollapsed:u}=(0,c.a)({initialState:!0});return n.createElement("div",{className:(0,l.c)(m.tocCollapsible,!i&&m.tocCollapsibleExpanded,a)},n.createElement(d,{collapsed:i,onClick:u}),n.createElement(c.U,{lazy:!0,className:m.tocCollapsibleContent,collapsed:i},n.createElement(r.c,{toc:t,minHeadingLevel:o,maxHeadingLevel:s})))}},69920:(e,t,a)=>{a.d(t,{E:()=>o,Q:()=>r});var n=a(11504),l=a(91100);const c=n.createContext(null);function r(e){let{children:t,version:a}=e;return n.createElement(c.Provider,{value:a},t)}function o(){const e=(0,n.useContext)(c);if(null===e)throw new l.AH("DocsVersionProvider");return e}}}]);