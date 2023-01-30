"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[27637],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),o=r(n(47166)),d=r(n(17422)),i=o.default.bind(d.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(l))),d=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},o,d)};c.propTypes=u;var m=c;t.Z=m},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=l?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),d=r(n(45697)),i=r(n(47166)),u=n(21538),c=r(n(13810)),m=r(n(40931)),p=n(51051),s=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var y=i.default.bind(s.default),x={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,d=e.description,i=e.isExpanded,s=(0,o.useState)(i),f=(0,l.default)(s,2),x=f[0],v=f[1],h=(0,o.useState)(!1),_=(0,l.default)(h,2),O=_[0],T=_[1],E=o.default.useContext(u.ThemeContext),j=void 0!==r,w=function(){T(!O),x&&v(!x)},N=function(){v(!x),O&&T(!O)},P=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:y("template",E.className)},o.default.createElement("div",{className:y("header")},a&&o.default.createElement("h2",{className:y("title")},a)),o.default.createElement("div",{className:y("content")},d&&o.default.createElement("div",{className:y("description")},d),t),o.default.createElement("div",{className:y("footer")},n?o.default.createElement("div",{className:y("button-container")},j&&o.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":O}),onClick:w,onKeyDown:function(e){return P(e,w)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:y("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(m.default,{className:y("chevron")})),o.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":x}),onClick:N,onKeyDown:function(e){return P(e,N)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:y("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(m.default,{className:y("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:y("css")},r),x&&o.default.createElement("div",{className:y("code")},n))))};v.propTypes=x,v.defaultProps={isExpanded:!1};var h=v;t.Z=h},78530:function(e,t,n){var r=n(64836),a=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return u.Row}}),t.ZP=t.Di=void 0;var l=p(n(67294)),o=r(n(45697)),d=r(n(47166)),i=n(21538),u=p(n(37515)),c=r(n(54931));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=l?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var s=d.default.bind(c.default),f={children:o.default.node},y={isRequired:o.default.bool},x=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:s("bold")},t)};t.O=x,x.propTypes=f;var b=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:s("code-block-override")},t)};t.Di=b,b.propTypes=f;var g=function(e){var t=e.isRequired;return l.default.createElement(u.Cell,{className:s([t?["required"]:[]])},t?"required":"optional")};t.dS=g,g.propTypes=y;var v=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:s("code-block-override")},t)};t.mW=v,v.propTypes=f;var h=function(e){var t=e.children;return l.default.createElement(u.Cell,null,t)};t.Ex=h,h.propTypes=f;var _=function(e){var t=e.children,n=(0,l.useContext)(i.ThemeContext);return l.default.createElement(u.default,{paddingStyle:"compact",className:s("table",n.className)},l.default.createElement(u.Header,{className:s("header")},l.default.createElement(u.HeaderCell,null,"Prop"),l.default.createElement(u.HeaderCell,null,"Type"),l.default.createElement(u.HeaderCell,null,"Required"),l.default.createElement(u.HeaderCell,null,"Default"),l.default.createElement(u.HeaderCell,null,"Description")),l.default.createElement(u.Body,null,t))};_.propTypes=f;var O=_;t.ZP=O},27637:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var r=n(67294),a=n(81254),l=n(11304),o=n(67026),d=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={};function m(e){var t=e.components,n=u(e,d);return(0,a.mdx)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Image from \'terra-image\';\nimport placeholderPic150x150 from \'../assets/150x150.jpg\';\nimport placeholderPic1000x200 from \'../assets/1000x200.png\';\n\nconst ImageDefault = () => (\n  <div>\n    <h2>Default</h2>\n    <Image src={placeholderPic150x150} alt="default image" />\n    <br />\n    <h2>Circle</h2>\n    <Image src={placeholderPic150x150} alt="circle image" variant="circle" />\n    <br />\n    <h2>Rounded</h2>\n    <Image src={placeholderPic150x150} alt="rounded image" variant="rounded" />\n    <br />\n    <h2>Thumbnail</h2>\n    <Image src={placeholderPic150x150} alt="thumbnail image" variant="thumbnail" />\n    <br />\n    <h2>Fluid</h2>\n    <Image src={placeholderPic1000x200} alt="fluid image" isFluid />\n    <br />\n    <h2>Placeholder</h2>\n    <h3>Invalid src prop (placeholder will show)</h3>\n    {/* eslint-disable-next-line react/jsx-no-duplicate-props */}\n    <Image src="/mock/failure/route" alt="invalid src attribute image" placeholder={<Image src={placeholderPic1000x200} alt="placeholder image" />} />\n    <h3>Valid src prop (src will show)</h3>\n    <Image src={placeholderPic150x150} alt="src image" placeholder={<Image src={placeholderPic1000x200} alt="placeholder image" />} />\n  </div>\n);\n\nexport default ImageDefault;\n\n')))}m.isMDXComponent=!0;var p=n(49271),s=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Image Default",description:n,example:r.createElement(o.Z,null),exampleSrc:r.createElement(m,null),isExpanded:a})},f=n(53792),y=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g={};function v(e){var t=e.components,n=b(e,y);return(0,a.mdx)("wrapper",x({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport Image from 'terra-image';\nimport FitTypesWrapper from './common/FitTypesWrapper';\nimport styles from './ImageFitTypes.scss';\nimport exampleImage from '../assets/170x251.jpg';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = { fit: PropTypes.string, variant: PropTypes.string };\n\nconst ImageFitTypes = ({\n  ...props\n}) => (\n  <div className={cx('image-container')}>\n    <Image alt=\"Toggle fit image\" className={cx('image')} src={exampleImage} fit={props.fit} variant={props.variant} />\n  </div>\n);\n\nImageFitTypes.propTypes = propTypes;\nexport default FitTypesWrapper(ImageFitTypes);\n\n")))}v.isMDXComponent=!0;var h=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var T={};function E(e){var t=e.components,n=O(e,h);return(0,a.mdx)("wrapper",_({},T,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .image-container {\n    height: 150px;\n    width: 150px;\n  }\n  \n  .image {\n    height: 100%;\n    width: 100%;\n  }\n}\n\n")))}E.isMDXComponent=!0;var j=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Image Fit Types",description:n,example:r.createElement(f.Z,null),exampleCssSrc:r.createElement(E,null),exampleSrc:r.createElement(v,null),isExpanded:a})},w=n(78530),N=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var S={};function D(e){var t=e.components,n=C(e,N);return(0,a.mdx)("wrapper",P({},S,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(w.ZP,{mdxType:"PropsTable"},(0,a.mdx)(w.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(w.O,{mdxType:"PropNameCell"},"src"),(0,a.mdx)(w.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(w.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The source string for the image which will be loaded and displayed."))),(0,a.mdx)(w.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(w.O,{mdxType:"PropNameCell"},"variant"),(0,a.mdx)(w.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'default'\n  'rounded'\n  'circle'\n  'thumbnail'\n],\n"))),(0,a.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'default'\n"))),(0,a.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the style of the image from the following values; ",(0,a.mdx)("inlineCode",{parentName:"p"},"default"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"rounded"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"circle"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"thumbnail"),"."))),(0,a.mdx)(w.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(w.O,{mdxType:"PropNameCell"},"isFluid"),(0,a.mdx)(w.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the fluid behavior of the image, which is ",(0,a.mdx)("inlineCode",{parentName:"p"},"nonfluid")," by default."))),(0,a.mdx)(w.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(w.O,{mdxType:"PropNameCell"},"alt"),(0,a.mdx)(w.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"' '\n"))),(0,a.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The text content that specifies an alternative text for an image."))),(0,a.mdx)(w.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(w.O,{mdxType:"PropNameCell"},"placeholder"),(0,a.mdx)(w.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A React element which will be displayed during loading and in case of src load failure."))),(0,a.mdx)(w.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(w.O,{mdxType:"PropNameCell"},"height"),(0,a.mdx)(w.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the height of the image."))),(0,a.mdx)(w.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(w.O,{mdxType:"PropNameCell"},"width"),(0,a.mdx)(w.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the width of the image."))),(0,a.mdx)(w.X2,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(w.O,{mdxType:"PropNameCell"},"onLoad"),(0,a.mdx)(w.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function to be executed when the image load is successful."))),(0,a.mdx)(w.X2,{key:"ROW9",mdxType:"Row"},(0,a.mdx)(w.O,{mdxType:"PropNameCell"},"onError"),(0,a.mdx)(w.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function to be executed when the image load errors."))),(0,a.mdx)(w.X2,{key:"ROW10",mdxType:"Row"},(0,a.mdx)(w.O,{mdxType:"PropNameCell"},"fit"),(0,a.mdx)(w.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'cover'\n  'scale-down'\n  'fill'\n  'contain'\n  'none'\n],\n"))),(0,a.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'fill'\n"))),(0,a.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the ",(0,a.mdx)("inlineCode",{parentName:"p"},"object-fit")," style of the image from the following values; ",(0,a.mdx)("inlineCode",{parentName:"p"},"cover"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"contain"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"fill"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"scale-down"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"none"),".")))))}D.isMDXComponent=!0;var R=["components"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var M={};function W(e){var t=e.components,n=I(e,R);return(0,a.mdx)("wrapper",k({},M,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-image"},"Terra Image"),(0,a.mdx)("p",null,"The terra-image component provides styling for visual imagery."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-image"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Image from 'terra-image';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(s,{mdxType:"ImageDefault"}),(0,a.mdx)(j,{mdxType:"ImageFit"}),(0,a.mdx)("h2",{id:"image-props"},"Image Props"),(0,a.mdx)(D,{mdxType:"ImagePropsTable"}))}W.isMDXComponent=!0},11304:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-image",name:"terra-image",version:"3.36.0",url:t})}},67026:function(e,t,n){t.Z=void 0;var r=d(n(67294)),a=d(n(24788)),l=d(n(37937)),o=d(n(45441));function d(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement("div",null,r.default.createElement("h2",null,"Default"),r.default.createElement(a.default,{src:l.default,alt:"default image"}),r.default.createElement("br",null),r.default.createElement("h2",null,"Circle"),r.default.createElement(a.default,{src:l.default,alt:"circle image",variant:"circle"}),r.default.createElement("br",null),r.default.createElement("h2",null,"Rounded"),r.default.createElement(a.default,{src:l.default,alt:"rounded image",variant:"rounded"}),r.default.createElement("br",null),r.default.createElement("h2",null,"Thumbnail"),r.default.createElement(a.default,{src:l.default,alt:"thumbnail image",variant:"thumbnail"}),r.default.createElement("br",null),r.default.createElement("h2",null,"Fluid"),r.default.createElement(a.default,{src:o.default,alt:"fluid image",isFluid:!0}),r.default.createElement("br",null),r.default.createElement("h2",null,"Placeholder"),r.default.createElement("h3",null,"Invalid src prop (placeholder will show)"),r.default.createElement(a.default,{src:"/mock/failure/route",alt:"invalid src attribute image",placeholder:r.default.createElement(a.default,{src:o.default,alt:"placeholder image"})}),r.default.createElement("h3",null,"Valid src prop (src will show)"),r.default.createElement(a.default,{src:l.default,alt:"src image",placeholder:r.default.createElement(a.default,{src:o.default,alt:"placeholder image"})}))};t.Z=i},53792:function(e,t,n){t.Z=void 0;var r=c(n(67294)),a=c(n(45697)),l=c(n(47166)),o=c(n(24788)),d=c(n(3449)),i=c(n(41597)),u=c(n(83487));function c(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var p=l.default.bind(i.default),s={fit:a.default.string,variant:a.default.string},f=function(e){var t=m({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return r.default.createElement("div",{className:p("image-container")},r.default.createElement(o.default,{alt:"Toggle fit image",className:p("image"),src:u.default,fit:t.fit,variant:t.variant}))};f.propTypes=s;var y=(0,d.default)(f);t.Z=y},3449:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l=(a=n(67294))&&a.__esModule?a:{default:a};function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i(r.key),r)}}function i(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var f=function(e){return function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(s,t);var n,r,a,m=c(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=m.call(this,e)).handleOnSelect=t.handleOnSelect.bind(p(t)),t.state={fitType:"fill",variantType:"default"},t}return n=s,r=[{key:"handleOnSelect",value:function(e){this.setState(function(e,t,n){return(t=i(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement(e,o({fit:this.state.fitType,variant:this.state.variantType},this.props)),l.default.createElement("p",null,l.default.createElement("label",{htmlFor:"fitType"},"Select a Fit Type:")),l.default.createElement("select",{id:"fitType",name:"fitType",value:this.state.fitType,onChange:this.handleOnSelect},l.default.createElement("option",{value:"fill"},"fill"),l.default.createElement("option",{value:"cover"},"cover"),l.default.createElement("option",{value:"contain"},"contain"),l.default.createElement("option",{value:"scale-down"},"scale-down"),l.default.createElement("option",{value:"none"},"none")),l.default.createElement("p",null,l.default.createElement("label",{htmlFor:"variantType"},"Select a Variant Type:")),l.default.createElement("select",{id:"variantType",name:"variantType",value:this.state.variantType,onChange:this.handleOnSelect},l.default.createElement("option",{value:"default"},"default"),l.default.createElement("option",{value:"circle"},"circle"),l.default.createElement("option",{value:"rounded"},"rounded"),l.default.createElement("option",{value:"thumbnail"},"thumbnail")))}}],r&&d(n.prototype,r),a&&d(n,a),Object.defineProperty(n,"prototype",{writable:!1}),s}(l.default.Component)};t.default=f},32634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),l=c(n(94184)),o=c(n(47166)),d=c(n(50026)),i=c(n(16749)),u=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.default.bind(i.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,o=p(e,u),i=r.default.useContext(d.default),c=(0,l.default)(s("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},i.className),o.className);return r.default.createElement("table",m({},o,{className:c}),t)};y.propTypes=f,y.defaultProps={disableStripes:!1,paddingStyle:"none"};var x=y;t.default=x},80196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},u=function(e){var t=e.children,n=d(e,l);return r.default.createElement("tbody",n,t)};u.propTypes=i,u.defaultProps={children:[]};var c=u;t.default=c},8685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},u=function(e){var t=e.children,n=d(e,l);return r.default.createElement("td",n,t)};u.propTypes=i,u.defaultProps={children:[]};var c=u;t.default=c},19852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),a=d(n(45697)),l=d(n(29805)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={children:a.default.node},c=function(e){var t=e.children,n=i(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};c.propTypes=u,c.defaultProps={children:[]};var m=c;t.default=m},80876:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},u=function(e){var t=e.children,n=d(e,l);return r.default.createElement("th",n,t)};u.propTypes=i,u.defaultProps={children:[]};var c=u;t.default=c},70829:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),l=u(n(47166)),o=u(n(16749)),d=u(n(29805)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.default.bind(o.default),s={children:a.default.node},f=function(e){var t=e.children,n=m(e,i),a=p(["row"]);return r.default.createElement("tr",c({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),d.default.addScope(t,"row"))};f.propTypes=s,f.defaultProps={children:[]};var y=f;t.default=y},29805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(67294))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},37515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=u(n(32634)),a=u(n(80196)),l=u(n(70829)),o=u(n(8685)),d=u(n(19852)),i=u(n(80876));function u(e){return e&&e.__esModule?e:{default:e}}var c=r.default;t.default=c},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var d=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=d;t.default=i},45441:function(e,t,n){n.r(t),t.default=n.p+"ab2308634047d9bcfd50b938d3321418.png"},37937:function(e,t,n){n.r(t),t.default=n.p+"51d085f765a7361bab659ffffdb9bb46.jpg"},83487:function(e,t,n){n.r(t),t.default=n.p+"e2f185bcea2cc1dac4fefdd29f998ede.jpg"},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},41597:function(e,t,n){n.r(t),t.default={"image-container":"ImageFitTypes__image-container___O5Wbc",image:"ImageFitTypes__image___GvW8r"}},16749:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);