"use strict";
exports.id = 476;
exports.ids = [476];
exports.modules = {

/***/ 7306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6358);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
// src/components/Header.js
const linkPaths={Oferta:"/oferta",Materiały:"/materialy",Producenci:"/producenci",Partnerzy:"/partnerzy",Kontakt:"/kontakt",SKLEP:"/sklep"};const Header=({onMenuToggle})=>{const linksMobileRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const menuBtnRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const linksRefs=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);const setLinksInitialState=()=>{linksRefs.current.forEach(link=>{gsap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.set(link,{autoAlpha:0,y:30});});};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const linksMobile=linksMobileRef.current;const menuBtn=menuBtnRef.current;gsap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.set(linksMobile,{autoAlpha:0,y:-50});setLinksInitialState();menuBtn.addEventListener("click",()=>{const isOpen=gsap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.getProperty(linksMobile,"autoAlpha")===1;setLinksInitialState();if(isOpen){gsap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.to(linksMobile,{autoAlpha:0,y:-50,duration:1.2});}else{gsap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.to(linksMobile,{autoAlpha:1,y:0,duration:1.2});linksRefs.current.forEach((link,index)=>{gsap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.to(link,{autoAlpha:1,y:0,delay:0.1*index,duration:2.5});});}});},[]);const handleMenuClick=()=>{const isOpen=menuBtnRef.current.classList.contains("open");menuBtnRef.current.classList.toggle("open");onMenuToggle(!isOpen);setLinksInitialState();if(isOpen){gsap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.to(linksMobileRef.current,{autoAlpha:0,y:-50,duration:1.2,display:'none'});}else{gsap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.to(linksMobileRef.current,{autoAlpha:1,y:0,duration:1.2,display:'block'});// Możesz zmienić 'block' na 'flex' w zależności od układu
linksRefs.current.forEach((link,index)=>{gsap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.to(link,{autoAlpha:1,y:0,delay:0.1*index,duration:2.5});});}};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{class:"home"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",{className:"header"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"header-logo"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"/icons/CERAMIKAlogo.png"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:"desktop-links"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{href:""},"Oferta")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{href:""},"Materia\u0142y")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{href:""},"Producenci")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{href:""},"Partnerzy")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{href:""},"Kontakt")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{href:""},"SKLEP"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"header-nav"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{class:"header-nav__btns"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"menu-btn",ref:menuBtnRef,onClick:handleMenuClick},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"menu-btn__burger"}))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav",{className:"links-mobile",ref:linksMobileRef},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,Object.entries(linkPaths).map(([item,path],index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:index},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:path,ref:el=>linksRefs.current[index]=el},item))))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ 8678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7306);
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */const Layout=({children})=>{var _data$site$siteMetada;const data=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("3649515864");return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{siteTitle:((_data$site$siteMetada=data.site.siteMetadata)===null||_data$site$siteMetada===void 0?void 0:_data$site$siteMetada.title)||`Title`}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{margin:`0 auto`,maxWidth:`var(--size-content)`,padding:`var(--size-gutter)`}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",null,children),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer",{style:{marginTop:`var(--space-5)`,fontSize:`var(--font-sm)`}},"\xA9 ",new Date().getFullYear()," \xB7 Built with",` `,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ 9357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */function Seo({description,title,children}){var _site$siteMetadata,_site$siteMetadata2;const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("63159454");const metaDescription=description||site.siteMetadata.description;const defaultTitle=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,defaultTitle?`${title} | ${defaultTitle}`:title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:type",content:"website"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:card",content:"summary"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:creator",content:((_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.author)||``}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:description",content:metaDescription}),children);}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ 9698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerData: () => (/* binding */ getServerData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8678);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9357);
/* provided dependency */ var fetch = __webpack_require__(1515);
const UsingSSR=({serverData})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"This page is ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"rendered server-side")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"This page is rendered server side every time the page is requested. Reload it to see a(nother) random photo from"," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,"dog.ceo/api/breed/shiba/images/random"),":"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{style:{width:"320px",borderRadius:"var(--border-radius)"},alt:"A random dog",src:serverData.message}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"To learn more, head over to our"," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/"},"documentation about Server Side Rendering"),"."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"/"},"Go back to the homepage"));};const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{title:"Using SSR"});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsingSSR);async function getServerData(){try{const res=await fetch(`https://dog.ceo/api/breed/shiba/images/random`);if(!res.ok){throw new Error(`Response failed`);}return{props:await res.json()};}catch(error){return{status:500,headers:{},props:{}};}}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-using-ssr-js.js.map