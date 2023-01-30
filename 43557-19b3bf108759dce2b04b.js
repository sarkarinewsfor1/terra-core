"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[43557],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(45697)),o=a(n(47166)),i=a(n(17422)),d=o.default.bind(i.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,n=e.name,a=e.url,l=e.version,o=r.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(l))),i=t?r.default.createElement("a",{className:d("badge"),href:t},r.default.createElement("span",{className:d("badge-name")},"github"),r.default.createElement("span",{className:d("badge-version")},"source")):void 0;return r.default.createElement("div",{className:d("badge-container")},o,i)};c.propTypes=u;var s=c;t.Z=s},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),d=a(n(47166)),u=n(21538),c=a(n(13810)),s=a(n(40931)),p=n(51051),m=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=d.default.bind(m.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,d=e.isExpanded,m=(0,o.useState)(d),f=(0,l.default)(m,2),b=f[0],x=f[1],g=(0,o.useState)(!1),_=(0,l.default)(g,2),O=_[0],N=_[1],E=o.default.useContext(u.ThemeContext),w=void 0!==a,T=function(){N(!O),b&&x(!b)},j=function(){x(!b),O&&N(!O)},P=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:h("template",E.className)},o.default.createElement("div",{className:h("header")},r&&o.default.createElement("h2",{className:h("title")},r)),o.default.createElement("div",{className:h("content")},i&&o.default.createElement("div",{className:h("description")},i),t),o.default.createElement("div",{className:h("footer")},n?o.default.createElement("div",{className:h("button-container")},w&&o.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":O}),onClick:T,onKeyDown:function(e){return P(e,T)},onBlur:v,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:h("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:h("chevron")})),o.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":b}),onClick:j,onKeyDown:function(e){return P(e,j)},onBlur:v,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:h("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:h("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:h("css")},a),b&&o.default.createElement("div",{className:h("code")},n))))};x.propTypes=b,x.defaultProps={isExpanded:!1};var g=x;t.Z=g},78530:function(e,t,n){var a=n(64836),r=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return u.Row}}),t.ZP=t.Di=void 0;var l=p(n(67294)),o=a(n(45697)),i=a(n(47166)),d=n(21538),u=p(n(37515)),c=a(n(54931));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}var m=i.default.bind(c.default),f={children:o.default.node},h={isRequired:o.default.bool},b=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:m("bold")},t)};t.O=b,b.propTypes=f;var v=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:m("code-block-override")},t)};t.Di=v,v.propTypes=f;var y=function(e){var t=e.isRequired;return l.default.createElement(u.Cell,{className:m([t?["required"]:[]])},t?"required":"optional")};t.dS=y,y.propTypes=h;var x=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:m("code-block-override")},t)};t.mW=x,x.propTypes=f;var g=function(e){var t=e.children;return l.default.createElement(u.Cell,null,t)};t.Ex=g,g.propTypes=f;var _=function(e){var t=e.children,n=(0,l.useContext)(d.ThemeContext);return l.default.createElement(u.default,{paddingStyle:"compact",className:m("table",n.className)},l.default.createElement(u.Header,{className:m("header")},l.default.createElement(u.HeaderCell,null,"Prop"),l.default.createElement(u.HeaderCell,null,"Type"),l.default.createElement(u.HeaderCell,null,"Required"),l.default.createElement(u.HeaderCell,null,"Default"),l.default.createElement(u.HeaderCell,null,"Description")),l.default.createElement(u.Body,null,t))};_.propTypes=f;var O=_;t.ZP=O},43557:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(67294),r=n(81254),l=n(2422),o=n(20578),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={};function s(e){var t=e.components,n=u(e,i);return(0,r.mdx)("wrapper",d({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport { FormattedMessage, FormattedDate, FormattedNumber } from \'react-intl\';\nimport { I18nProvider, i18nLoader } from \'terra-i18n\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      areTranslationsLoaded: false,\n      locale: \'en-US\',\n      messages: {},\n    };\n    this.handleLocaleChange = this.handleLocaleChange.bind(this);\n  }\n\n  componentDidMount() {\n    i18nLoader(this.state.locale, this.setState, this);\n  }\n\n  handleLocaleChange(e) {\n    i18nLoader(e.target.value, this.setState, this);\n  }\n\n  render() {\n    if (!this.state.areTranslationsLoaded) {\n      return <div />;\n    }\n    return (\n      <I18nProvider\n        locale={this.state.locale}\n        messages={this.state.messages}\n      >\n        <div>\n          <span> Example Message Format: </span>\n          <FormattedMessage id="Terra.ajax.error" />\n        </div>\n        <p>\n          <span> Example Number Format: </span>\n          <FormattedNumber value={parseFloat(\'1123432.123\')} />\n        </p>\n        <p>\n          <span>Example Date Format: </span>\n          <FormattedDate value={new Date(1575476163287)} />\n        </p>\n        <label htmlFor="locale">\n          {\' \'}\n          Current locale:\n          {this.state.locale}\n          {\' \'}\n\n        </label>\n        <select id="locale" value={this.state.locale} onChange={this.handleLocaleChange}>\n          <option value="en">en</option>\n          <option value="en-GB">en-GB</option>\n          <option value="en-US">en-US</option>\n          <option value="de">de</option>\n          <option value="es">es</option>\n          <option value="fr">fr</option>\n          <option value="nl">nl</option>\n          <option value="pt">pt</option>\n        </select>\n      </I18nProvider>\n    );\n  }\n}\n\nexport default () => <Demo />;\n\n')))}s.isMDXComponent=!0;var p=n(49271),m=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(p.Z,{title:t||"I 18 N Demo",description:n,example:a.createElement(o.Z,null),exampleSrc:a.createElement(s,null),isExpanded:r})},f=n(78530),h=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y={};function x(e){var t=e.components,n=v(e,h);return(0,r.mdx)("wrapper",b({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(f.ZP,{mdxType:"PropsTable"},(0,r.mdx)(f.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(f.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(f.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(f.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The component that will be wrapped by i18n provider."))),(0,r.mdx)(f.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(f.O,{mdxType:"PropNameCell"},"locale"),(0,r.mdx)(f.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(f.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The locale name."))),(0,r.mdx)(f.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(f.O,{mdxType:"PropNameCell"},"messages"),(0,r.mdx)(f.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"shape: {\n},\n"))),(0,r.mdx)(f.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Translations messages object.")))))}x.isMDXComponent=!0;var g=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var N={};function E(e){var t=e.components,n=O(e,g);return(0,r.mdx)("wrapper",_({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-i18n"},"Terra I18n"),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("p",null,"This component is not intended for direct usage by developers. It is recommended to use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra-base")," component instead which acts as an abstraction around terra-i18n and react-intl's Intl Provider component. See ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-base"},(0,r.mdx)("inlineCode",{parentName:"a"},"terra-base documentation"))," to get started."),(0,r.mdx)("p",null,"However, terra-i18n can be installed with ",(0,r.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npmjs"),":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-i18n"))),(0,r.mdx)("p",null,"The terra-i18n package provides internationalization for React components by loading translations and locale data on demand and providing the translated messages to the component. It does this by utilizing the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/yahoo/react-intl"},(0,r.mdx)("inlineCode",{parentName:"a"},"react-intl"))," dependency to provide the formatted translation messages to the supplied React children. To enable this behavior, terra-i18n provides the ",(0,r.mdx)("inlineCode",{parentName:"p"},"i18nLoader")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"I18nProvider")," components."),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,r.mdx)("h2",{id:"i18nloader"},"i18nLoader"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"i18nLoader")," component guarantees that the Intl polyfill, locale data and translation messages are loaded before the translation-needing component is rendered. ",(0,r.mdx)("em",{parentName:"p"},"This loader should be utilized only once within an application, because all internationalization information is loaded into memory to remove the need to dynamically load locale data on the server.")),(0,r.mdx)("p",null,"Note: the ",(0,r.mdx)("inlineCode",{parentName:"p"},"i18nLoader")," state object for the callback must contain the following keys to work properly:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"areTranslationsLoaded")," - ",(0,r.mdx)("em",{parentName:"li"},"boolean")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"locale")," - ",(0,r.mdx)("em",{parentName:"li"},"string")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"messages")," - ",(0,r.mdx)("em",{parentName:"li"},"key-value pairs such that the key is the message name and the value is the translation message"))),(0,r.mdx)("h2",{id:"i18nprovider"},"I18nProvider"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"I18nProvider")," component configures the react-intl's ",(0,r.mdx)("inlineCode",{parentName:"p"},"IntlProvider")," and supplies it with the translation-needing components such that the i18n context is accessible. Usually, one ",(0,r.mdx)("inlineCode",{parentName:"p"},"I18nProvider")," will wrap an application's root component such that the entire application is within the same configured i18n context, however it is possible to render nested ",(0,r.mdx)("inlineCode",{parentName:"p"},"I18nProvider")," components to provide different, or modified i18n context."),(0,r.mdx)("h3",{id:"supported-locales"},"Supported Locales"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-aggregate-translations/blob/main/config/i18nSupportedLocales.js"},"You can view a list of locales supported by Terra UI here.")),(0,r.mdx)("h3",{id:"non-supported-locales"},"Non-Supported Locales"),(0,r.mdx)("p",null,"It is possible to add and load non-supported locales with ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra-i18n"),", however one must ensure the locales are supported by ",(0,r.mdx)("inlineCode",{parentName:"p"},"react-intl"),", otherwise no locale-data will exist and loading the intl data will result in an error. Once confirmed that the locale is supported by ",(0,r.mdx)("inlineCode",{parentName:"p"},"react-intl"),", one is responsible for including the appropriate translations messages for each terra component used in your application, otherwise the translations will fail and ",(0,r.mdx)("inlineCode",{parentName:"p"},"react-intl")," will display the message name as the fallback."),(0,r.mdx)("h3",{id:"locale-fallback"},"Locale Fallback"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"i18nLoader")," loads internationalized information from the translationLoader and intlLoader modules, both which utilize a locale fallback strategy. This implemented fallback strategy when loading a locale is:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Try the regional locale (if applicable)"),(0,r.mdx)("li",{parentName:"ol"},"Try the base locale"),(0,r.mdx)("li",{parentName:"ol"},"Try the 'en' base locale"),(0,r.mdx)("li",{parentName:"ol"},"Throw an error if 'en' is not provided")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note:")," This fallback strategy is only applied when an aggregated translation file does not exist. For example if the 'es' locale is loaded and the translation for ",(0,r.mdx)("inlineCode",{parentName:"p"},"Terra.button.close")," is missing, ",(0,r.mdx)("inlineCode",{parentName:"p"},"react-intl")," will display the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Terra.button.close")," message name, not the english translation, because locale data was only loaded for 'es'. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra-i18n")," package does not support loading multiple locales at once. This ensures an application will never have a mix of 'es' and 'en' translations."),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { I18nProvider, i18nLoader } from 'terra-i18n';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/shakacode/react_on_rails/blob/8cb06ed35cb5c2c453bcc193282b4c091574c1b7/docs/basics/i18n.md#how-to-add-i18n"},"react_on_rails Compatible")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/webpack/docs/wiki/configuration#outputpublicpath"},"CND Compatible"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(m,{title:"I18nProvider Example",description:"Note: This is an example of a nested I18nProvider. The site overall is an example of using an application-level I18nProvider implemented through the terra-base component.",mdxType:"I18nDemo"}),(0,r.mdx)("h2",{id:"i18n-provider-props"},"I18n Provider Props"),(0,r.mdx)(x,{mdxType:"I18nPropsTable"}))}E.isMDXComponent=!0},2422:function(e,t,n){n.d(t,{C:function(){return l}});var a=n(67294),r=n(22863),l=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-i18n",name:"terra-i18n",version:"4.39.0",url:t})}},20578:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var r,l=(r=n(67294))&&r.__esModule?r:{default:r},o=n(25387),i=n(8938);function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(l=r.key,o=void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(l,"string"),"symbol"===a(o)?o:String(o)),r)}var l,o}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return s(this,n)}}function s(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(s,e);var t,n,a,r=c(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=r.call(this,e)).state={areTranslationsLoaded:!1,locale:"en-US",messages:{}},t.handleLocaleChange=t.handleLocaleChange.bind(p(t)),t}return t=s,(n=[{key:"componentDidMount",value:function(){(0,i.i18nLoader)(this.state.locale,this.setState,this)}},{key:"handleLocaleChange",value:function(e){(0,i.i18nLoader)(e.target.value,this.setState,this)}},{key:"render",value:function(){return this.state.areTranslationsLoaded?l.default.createElement(i.I18nProvider,{locale:this.state.locale,messages:this.state.messages},l.default.createElement("div",null,l.default.createElement("span",null," Example Message Format: "),l.default.createElement(o.FormattedMessage,{id:"Terra.ajax.error"})),l.default.createElement("p",null,l.default.createElement("span",null," Example Number Format: "),l.default.createElement(o.FormattedNumber,{value:parseFloat("1123432.123")})),l.default.createElement("p",null,l.default.createElement("span",null,"Example Date Format: "),l.default.createElement(o.FormattedDate,{value:new Date(1575476163287)})),l.default.createElement("label",{htmlFor:"locale"}," ","Current locale:",this.state.locale," "),l.default.createElement("select",{id:"locale",value:this.state.locale,onChange:this.handleLocaleChange},l.default.createElement("option",{value:"en"},"en"),l.default.createElement("option",{value:"en-GB"},"en-GB"),l.default.createElement("option",{value:"en-US"},"en-US"),l.default.createElement("option",{value:"de"},"de"),l.default.createElement("option",{value:"es"},"es"),l.default.createElement("option",{value:"fr"},"fr"),l.default.createElement("option",{value:"nl"},"nl"),l.default.createElement("option",{value:"pt"},"pt"))):l.default.createElement("div",null)}}])&&d(t.prototype,n),a&&d(t,a),Object.defineProperty(t,"prototype",{writable:!1}),s}(l.default.Component);t.Z=function(){return l.default.createElement(f,null)}},32634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),l=c(n(94184)),o=c(n(47166)),i=c(n(50026)),d=c(n(16749)),u=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.default.bind(d.default),f={children:r.default.node.isRequired,disableStripes:r.default.bool,paddingStyle:r.default.oneOf(["none","standard","compact"])},h=function(e){var t=e.children,n=e.disableStripes,r=e.paddingStyle,o=p(e,u),d=a.default.useContext(i.default),c=(0,l.default)(m("table",{striped:!n},{"padding-standard":"standard"===r},{"padding-compact":"compact"===r},d.className),o.className);return a.default.createElement("table",s({},o,{className:c}),t)};h.propTypes=f,h.defaultProps={disableStripes:!1,paddingStyle:"none"};var b=h;t.default=b},80196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),r=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={children:r.default.node},u=function(e){var t=e.children,n=i(e,l);return a.default.createElement("tbody",n,t)};u.propTypes=d,u.defaultProps={children:[]};var c=u;t.default=c},8685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),r=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={children:r.default.node},u=function(e){var t=e.children,n=i(e,l);return a.default.createElement("td",n,t)};u.propTypes=d,u.defaultProps={children:[]};var c=u;t.default=c},19852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),r=i(n(45697)),l=i(n(29805)),o=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u={children:r.default.node},c=function(e){var t=e.children,n=d(e,o);return a.default.createElement("thead",n,a.default.createElement("tr",null,l.default.addScope(t,"col")))};c.propTypes=u,c.defaultProps={children:[]};var s=c;t.default=s},80876:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),r=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={children:r.default.node},u=function(e){var t=e.children,n=i(e,l);return a.default.createElement("th",n,t)};u.propTypes=d,u.defaultProps={children:[]};var c=u;t.default=c},70829:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),l=u(n(47166)),o=u(n(16749)),i=u(n(29805)),d=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.default.bind(o.default),m={children:r.default.node},f=function(e){var t=e.children,n=s(e,d),r=p(["row"]);return a.default.createElement("tr",c({},n,{className:n.className?"".concat(r," ").concat(n.className):r}),i.default.addScope(t,"row"))};f.propTypes=m,f.defaultProps={children:[]};var h=f;t.default=h},29805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(67294))&&a.__esModule?a:{default:a};var l={addScope:function(e,t){var n=[];return r.default.Children.forEach(e,(function(e){n.push(r.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},37515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var a=u(n(32634)),r=u(n(80196)),l=u(n(70829)),o=u(n(8685)),i=u(n(19852)),d=u(n(80876));function u(e){return e&&e.__esModule?e:{default:e}}var c=a.default;t.default=c},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var d=i;t.default=d},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},16749:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);