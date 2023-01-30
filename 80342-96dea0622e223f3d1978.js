"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[80342],{22863:function(e,a,t){var n=t(64836);a.Z=void 0;var r=n(t(67294)),o=n(t(45697)),d=n(t(47166)),i=n(t(17422)),s=d.default.bind(i.default),l={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},m=function(e){var a=e.src,t=e.name,n=e.url,o=e.version,d=r.default.createElement("a",{className:s("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},r.default.createElement("span",{className:s("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:s("badge-version")},"v".concat(o))),i=a?r.default.createElement("a",{className:s("badge"),href:a},r.default.createElement("span",{className:s("badge-name")},"github"),r.default.createElement("span",{className:s("badge-version")},"source")):void 0;return r.default.createElement("div",{className:s("badge-container")},d,i)};m.propTypes=l;var u=m;a.Z=u},80342:function(e,a,t){t.r(a),t.d(a,{default:function(){return l}});t(67294);var n=t(81254),r=t(61173),o=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d.apply(this,arguments)}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s={};function l(e){var a=e.components,t=i(e,o);return(0,n.mdx)("wrapper",d({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-form-field-upgrade-guide"},"Terra Form Field Upgrade Guide"),(0,n.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),(0,n.mdx)("h3",{id:"props"},"Props"),(0,n.mdx)("h4",{id:"updated"},"Updated"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Form Fields allowed the ",(0,n.mdx)("inlineCode",{parentName:"li"},"label")," to be a node, which potentially breaks the display when injecting other non-inline-only text elements (terra-text) or has the potential to completely break accessibility if something non-text based would be passed in."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"label")," prop's type changed from node to string.")),(0,n.mdx)("h5",{id:"steps-to-upgrade"},"Steps to Upgrade"),(0,n.mdx)("p",null,"To upgrade from 3.0 to 4.0 each existing Field must be reviewed and updated to ensure only a string is being passed to the ",(0,n.mdx)("inlineCode",{parentName:"p"},"label")," prop. Solutions passing node data types need to be reworked to provide only a string."),(0,n.mdx)("h2",{id:"changes-from-20-to-30"},"Changes from 2.0 to 3.0"),(0,n.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,n.mdx)("p",null,"The following transitive dependency had breaking changes. See its upgrade guide for more information."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"terra-doc-template")))}l.isMDXComponent=!0},61173:function(e,a,t){t.d(a,{C:function(){return o}});var n=t(67294),r=t(22863),o=function(e){var a=e.url;return n.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field",name:"terra-form-field",version:"4.22.0",url:a})}},17422:function(e,a,t){t.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);