"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[970],{8619:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c}});var n=a(7294),r=a(1883),l=a(8678),o=a(9357);const c=()=>n.createElement(o.Z,{title:"Using TypeScript"});t.default=e=>{let{data:t,location:a}=e;return n.createElement(l.Z,null,n.createElement("h1",null,"Gatsby supports ",n.createElement("b",null,"TypeScript by default")),n.createElement("p",null,"This means that you can create and write ",n.createElement("code",null,".ts/.tsx")," files for your pages, components, and ",n.createElement("code",null,"gatsby-*")," configuration files (for example ",n.createElement("code",null,"gatsby-config.ts"),")."),n.createElement("p",null,"For type checking you'll want to install ",n.createElement("code",null,"typescript")," via npm and run ",n.createElement("code",null,"tsc --init")," to create a ",n.createElement("code",null,"tsconfig")," file."),n.createElement("p",null,"You're currently on the page ",n.createElement("code",null,a.pathname)," which was built on ",t.site.buildTime,"."),n.createElement("p",null,"To learn more, head over to our"," ",n.createElement("a",{href:"https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/"},"documentation about TypeScript"),"."),n.createElement(r.Link,{to:"/"},"Go back to the homepage"))}},7306:function(e,t,a){var n=a(7294),r=a(1883);t.Z=e=>{let{siteTitle:t}=e;const[a,l]=n.useState(!1);return n.useEffect((()=>{window.localStorage.getItem("hasAnimated")||(l(!0),window.localStorage.setItem("hasAnimated","true"))}),[]),n.createElement("header",{className:"header "+(a?"header-slide-in":"")},n.createElement("nav",{className:"header-nav"},n.createElement(r.Link,{to:"/",className:"site-title"},t),n.createElement("div",{className:"nav-links"},n.createElement(r.Link,{to:"/code",className:"nav-link"},"Code"),n.createElement("a",{href:"https://www.linkedin.com/in/buoybrian/",className:"icon-hover",style:{marginRight:"var(--space-3)"},target:"_blank",rel:"noopener noreferrer"},n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"var(--color-text)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.createElement("path",{d:"M16 8a6 6 0 00-12 0v12h4V14a2 2 0 014 0v6h4V8z"}),n.createElement("rect",{x:"2",y:"9",width:"4",height:"12"}),n.createElement("circle",{cx:"4",cy:"4",r:"2"}))),n.createElement("a",{href:"https://github.com/playersplat",className:"icon-hover",style:{marginRight:"var(--space-3)"},target:"_blank",rel:"noopener noreferrer"},n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"var(--color-text)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-1.03-.02-1.88-2.78.61-3.37-1.34-3.37-1.34-.45-1.17-1.11-1.48-1.11-1.48-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.13-4.56-5A3.9 3.9 0 019 7.77 3.62 3.62 0 019.62 6s.63-.2 2.07.77a7.16 7.16 0 013.77 0c1.44-.97 2.07-.77 2.07-.77a3.62 3.62 0 01.62 1.77 3.9 3.9 0 011.06 2.71c0 3.87-2.34 4.75-4.57 5 .36.31.68.93.68 1.87 0 1.35-.01 2.45-.01 2.79 0 .27.18.59.69.49A12 12 0 0022 12C22 6.48 17.52 2 12 2z"}))),n.createElement("a",{href:"mailto:bbui3@ucsc.edu",className:"icon-hover"},n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"var(--color-text)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.createElement("path",{d:"M4 4h16v16H4z"}),n.createElement("path",{d:"M22 6l-10 7L2 6"}))))))}},8678:function(e,t,a){var n=a(7294),r=a(1883),l=a(7306);t.Z=e=>{var t;let{children:a}=e;const o=(0,r.useStaticQuery)("3649515864");return n.createElement(n.Fragment,null,n.createElement(l.Z,{siteTitle:(null===(t=o.site.siteMetadata)||void 0===t?void 0:t.title)||"Portfolio"}),n.createElement("div",{style:{margin:"0 auto",maxWidth:"var(--size-content)",padding:"0 var(--size-gutter)"}},n.createElement("main",{style:{padding:"var(--size-gutter)"}},a),n.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)"}},"© ",(new Date).getFullYear()," · Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},9357:function(e,t,a){var n=a(7294),r=a(1883);t.Z=function(e){var t,a;let{description:l,title:o,children:c}=e;const{site:i}=(0,r.useStaticQuery)("63159454"),s=l||i.siteMetadata.description,m=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,m?o+" | "+m:o),n.createElement("meta",{name:"description",content:s}),n.createElement("meta",{property:"og:title",content:o}),n.createElement("meta",{property:"og:description",content:s}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=i.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:o}),n.createElement("meta",{name:"twitter:description",content:s}),c)}}}]);
//# sourceMappingURL=component---src-pages-using-typescript-tsx-a29491f77972cb3bbc1d.js.map