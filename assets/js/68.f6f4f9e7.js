"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68],{8911:(e,t,a)=>{a.d(t,{A:()=>j});var n=a(758),s=a(3526),r=a(7622),i=a(5176),l=a(8551),o=a(3501),c=a(5557),d=a(660);function m(e){const{pathname:t}=(0,c.zy)();return(0,n.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_pn07",sidebarItemTitle:"sidebarItemTitle_B_IF",sidebarItemList:"sidebarItemList_NxgD",sidebarItem:"sidebarItem_eJRr",sidebarItemLink:"sidebarItemLink_mvWe",sidebarItemLinkActive:"sidebarItemLinkActive_x5or"};var g=a(6070);function h(e){let{sidebar:t}=e;const a=m(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,s.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,s.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,s.A)(u.sidebarItemList,"clean-list"),children:a.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=a(5739);function x(e){let{sidebar:t}=e;const a=m(t.items);return(0,g.jsx)("ul",{className:"menu__list",children:a.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function f(e){return(0,g.jsx)(p.GX,{component:x,props:e})}function b(e){let{sidebar:t}=e;const a=(0,i.l)();return t?.items.length?"mobile"===a?(0,g.jsx)(f,{sidebar:t}):(0,g.jsx)(h,{sidebar:t}):null}function j(e){const{sidebar:t,toc:a,children:n,...i}=e,l=t&&t.items.length>0;return(0,g.jsx)(r.A,{...i,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(b,{sidebar:t}),(0,g.jsx)("main",{className:(0,s.A)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:n}),a&&(0,g.jsx)("div",{className:"col col--2",children:a})]})})})}},4426:(e,t,a)=>{a.d(t,{A:()=>O});var n=a(758),s=a(3526),r=a(3586),i=a(6070);function l(e){let{children:t,className:a}=e;return(0,i.jsx)("article",{className:a,children:t})}var o=a(8551);const c={title:"title_XbM4"};function d(e){let{className:t}=e;const{metadata:a,isBlogPostPage:n}=(0,r.e)(),{permalink:l,title:d}=a,m=n?"h1":"h2";return(0,i.jsx)(m,{className:(0,s.A)(c.title,t),children:n?d:(0,i.jsx)(o.A,{to:l,children:d})})}var m=a(3501),u=a(140);const g=["zero","one","two","few","many","other"];function h(e){return g.filter((t=>e.includes(t)))}const p={locale:"en",pluralForms:h(["one","other"]),select:e=>1===e?"one":"other"};function x(){const{i18n:{currentLocale:e}}=(0,u.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:h(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),p}}),[e])}function f(){const e=x();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=a.select(t),r=a.pluralForms.indexOf(s);return n[Math.min(r,n.length-1)]}(a,t,e)}}var b=a(9495);const j={container:"container_cqjU"};function v(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=f();return t=>{const a=Math.ceil(t);return e(a,(0,m.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,i.jsx)(i.Fragment,{children:a(t)})}function A(e){let{date:t,formattedDate:a}=e;return(0,i.jsx)("time",{dateTime:t,children:a})}function N(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function _(e){let{className:t}=e;const{metadata:a}=(0,r.e)(),{date:n,readingTime:l}=a,o=(0,b.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,s.A)(j.container,"margin-vert--md",t),children:[(0,i.jsx)(A,{date:n,formattedDate:(c=n,o.format(new Date(c)))}),void 0!==l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(N,{}),(0,i.jsx)(v,{readingTime:l})]})]});var c}function k(e){return e.href?(0,i.jsx)(o.A,{...e}):(0,i.jsx)(i.Fragment,{children:e.children})}function P(e){let{author:t,className:a}=e;const{name:n,title:r,url:l,imageURL:o,email:c}=t,d=l||c&&`mailto:${c}`||void 0;return(0,i.jsxs)("div",{className:(0,s.A)("avatar margin-bottom--sm",a),children:[o&&(0,i.jsx)(k,{href:d,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:"avatar__photo",src:o,alt:n})}),n&&(0,i.jsxs)("div",{className:"avatar__intro",children:[(0,i.jsx)("div",{className:"avatar__name",children:(0,i.jsx)(k,{href:d,children:(0,i.jsx)("span",{children:n})})}),r&&(0,i.jsx)("small",{className:"avatar__subtitle",children:r})]})]})}const w={authorCol:"authorCol_IMui",imageOnlyAuthorRow:"imageOnlyAuthorRow_c86C",imageOnlyAuthorCol:"imageOnlyAuthorCol_sG5G"};function y(e){let{className:t}=e;const{metadata:{authors:a},assets:n}=(0,r.e)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t}));return(0,i.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",l?w.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,i.jsx)("div",{className:(0,s.A)(!l&&"col col--6",l?w.imageOnlyAuthorCol:w.authorCol),children:(0,i.jsx)(P,{author:{...e,imageURL:n.authorsImageUrls[t]??e.imageURL}})},t)))})}function I(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(d,{}),(0,i.jsx)(_,{}),(0,i.jsx)(y,{})]})}var T=a(9942),U=a(5242);function M(e){let{children:t,className:a}=e;const{isBlogPostPage:n}=(0,r.e)();return(0,i.jsx)("div",{id:n?T.blogPostContainerID:void 0,className:(0,s.A)("markdown",a),children:(0,i.jsx)(U.A,{children:t})})}var B=a(9926),L=a(3498),C=a(4366);function R(){return(0,i.jsx)("b",{children:(0,i.jsx)(m.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function $(e){const{blogPostTitle:t,...a}=e;return(0,i.jsx)(o.A,{"aria-label":(0,m.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,i.jsx)(R,{})})}function F(){const{metadata:e,isBlogPostPage:t}=(0,r.e)(),{tags:a,title:n,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,u=a.length>0;if(!(u||m||l))return null;if(t){const e=!!(l||d||c);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,i.jsx)("div",{className:(0,s.A)("row","margin-top--sm",B.G.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(C.A,{tags:a})})}),e&&(0,i.jsx)(L.A,{className:(0,s.A)("margin-top--sm",B.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,i.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,i.jsx)("div",{className:(0,s.A)("col",{"col--9":m}),children:(0,i.jsx)(C.A,{tags:a})}),m&&(0,i.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":u}),children:(0,i.jsx)($,{blogPostTitle:n,to:e.permalink})})]})}function O(e){let{children:t,className:a}=e;const n=function(){const{isBlogPostPage:e}=(0,r.e)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(l,{className:(0,s.A)(n,a),children:[(0,i.jsx)(I,{}),(0,i.jsx)(M,{children:t}),(0,i.jsx)(F,{})]})}},8025:(e,t,a)=>{a.d(t,{A:()=>i});a(758);var n=a(3526),s=a(8551),r=a(6070);function i(e){const{permalink:t,title:a,subLabel:i,isNext:l}=e;return(0,r.jsxs)(s.A,{className:(0,n.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},4366:(e,t,a)=>{a.d(t,{A:()=>d});a(758);var n=a(3526),s=a(3501),r=a(8551);const i={tag:"tag_EX3A",tagRegular:"tagRegular_KBp5",tagWithCount:"tagWithCount_DzRy"};var l=a(6070);function o(e){let{permalink:t,label:a,count:s,description:o}=e;return(0,l.jsxs)(r.A,{href:t,title:o,className:(0,n.A)(i.tag,s?i.tagWithCount:i.tagRegular),children:[a,s&&(0,l.jsx)("span",{children:s})]})}const c={tags:"tags_XN1a",tag:"tag_csUU"};function d(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,n.A)(c.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:c.tag,children:(0,l.jsx)(o,{...e})},e.permalink)))})]})}},3586:(e,t,a)=>{a.d(t,{e:()=>o,i:()=>l});var n=a(758),s=a(6879),r=a(6070);const i=n.createContext(null);function l(e){let{children:t,content:a,isBlogPostPage:s=!1}=e;const l=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:s});return(0,r.jsx)(i.Provider,{value:l,children:t})}function o(){const e=(0,n.useContext)(i);if(null===e)throw new s.dV("BlogPostProvider");return e}},4897:(e,t,a)=>{a.d(t,{k:()=>d,J:()=>m});var n=a(8527),s=a(140),r=a(7037);var i=a(3586);const l=e=>new Date(e).toISOString();function o(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function c(e,t,a){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function d(e){const{siteConfig:t}=(0,s.A)(),{withBaseUrl:a}=(0,n.hH)(),{metadata:{blogDescription:r,blogTitle:i,permalink:d}}=e,m=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":m,mainEntityOfPage:m,headline:i,description:r,blogPost:e.items.map((e=>function(e,t,a){const{assets:n,frontMatter:s,metadata:r}=e,{date:i,title:d,description:m,lastUpdatedAt:u}=r,g=n.image??s.image,h=s.keywords??[],p=`${t.url}${r.permalink}`,x=u?l(u):void 0;return{"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:d,name:d,description:m,datePublished:i,...x?{dateModified:x}:{},...o(r.authors),...c(g,a,d),...h?{keywords:h}:{}}}(e.content,t,a)))}}function m(){const e=function(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:a}=(0,i.e)(),{siteConfig:d}=(0,s.A)(),{withBaseUrl:m}=(0,n.hH)(),{date:u,title:g,description:h,frontMatter:p,lastUpdatedAt:x}=a,f=t.image??p.image,b=p.keywords??[],j=x?l(x):void 0,v=`${d.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:g,name:g,description:h,datePublished:u,...j?{dateModified:j}:{},...o(a.authors),...c(f,m,g),...b?{keywords:b}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}}}]);