"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[44224],{44224:function(e,t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}r.default=e,a&&a.set(e,r);return r}(a(67294)),o=s(a(43868)),i=s(a(47166)),l=s(a(84356)),u=s(a(24993));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,o,i,l=[],u=!0,s=!1;try{if(o=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;u=!1}else for(;!(u=(n=o.call(a)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){s=!0,r=e}finally{try{if(!u&&null!=a.return&&(i=a.return(),Object(i)!==i))return}finally{if(s)throw r}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var g=i.default.bind(u.default),p=function(){var e=f((0,r.useState)(1),2),t=e[0],a=e[1];return r.default.createElement("div",{className:g("paginator-wrapper")},r.default.createElement(o.default,{id:"button-9",text:"Set Page to 9",onClick:function(){a(9)}}),r.default.createElement(o.default,{id:"button-15",text:"Set Page to 15",onClick:function(){a(15)}}),r.default.createElement(o.default,{id:"button-45",text:"Set Page to 45",onClick:function(){a(45)}}),r.default.createElement(l.default,{onPageChange:function(e){a(e)},selectedPage:t}))};t.default=p},84356:function(e,t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=h(a(67294)),o=h(a(45697)),i=h(a(47166)),l=h(a(50026)),u=a(25387),s=h(a(13266)),c=h(a(74754)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=b(t);if(a&&a.has(e))return a.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}r.default=e,a&&a.set(e,r);return r}(a(51051)),d=h(a(80646)),g=a(86545),p=h(a(37980));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(b=function(e){return e?a:t})(e)}function h(e){return e&&e.__esModule?e:{default:e}}function y(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,i=void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===n(i)?i:String(i)),r)}var o,i}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=w(e);if(t){var r=w(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return P(this,a)}}function P(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var k=i.default.bind(d.default),O={onPageChange:o.default.func.isRequired,selectedPage:o.default.number.isRequired,totalCount:o.default.number,itemCountPerPage:o.default.number,intl:o.default.shape({formatMessage:o.default.func}).isRequired},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(i,e);var t,a,n,o=v(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).handlePageChange=t.handlePageChange.bind(C(t)),t.buildPageButtons=t.buildPageButtons.bind(C(t)),t.reducedPaginator=t.reducedPaginator.bind(C(t)),t.setPaginator=t.setPaginator.bind(C(t)),t.state={showReducedPaginator:!1},t}return t=i,(a=[{key:"handlePageChange",value:function(e){var t=this;return function(a){return a.nativeEvent.keyCode!==f.KEY_RETURN&&a.nativeEvent.keyCode!==f.KEY_SPACE||a.preventDefault(),Number.isNaN(Number(e))?(t.props.onPageChange(a.currentTarget.attributes["aria-label"].value),!1):(t.props.onPageChange(e),!1)}}},{key:"setPaginator",value:function(e){var t="tiny"===e;this.state.showReducedPaginator!==t&&this.setState({showReducedPaginator:t})}},{key:"buildPageButtons",value:function(e,t){var a=this.props,n=a.totalCount,o=a.itemCountPerPage,i=a.selectedPage,l=a.intl,u=(0,g.pageSet)(i,(0,g.calculatePages)(n,o)),s=[];return u.forEach((function(a){var n=k(["nav-link",a===i?"is-selected":null]);a>e||s.push(r.default.createElement(p.default,{ariaLabel:l.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:a}),ariaCurrent:a===i,className:n,key:"pageButton_".concat(a),onClick:t(a),onKeyDown:t(a),tabIndex:a===i?"-1":"0"},a))})),s}},{key:"defaultPaginator",value:function(){var e=this.context,t=this.props,a=t.selectedPage,n=t.intl,o=t.totalCount,i=t.itemCountPerPage,l=(0,g.calculatePages)(o,i),u=1===a?1:a-1,s=a===l?l:a+1;return r.default.createElement("div",{className:k("paginator",!o&&"pageless",e.className)},o&&r.default.createElement(p.default,{ariaDisabled:1===a,ariaLabel:n.formatMessage({id:"Terra.paginator.first"}),className:k(["nav-link","left-controls",1===a&&"is-disabled"]),disabled:1===a,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},n.formatMessage({id:"Terra.paginator.first"})),r.default.createElement(p.default,{ariaDisabled:1===a,ariaLabel:n.formatMessage({id:"Terra.paginator.previous"}),className:k(["nav-link","left-controls","previous",1===a&&"is-disabled"]),disabled:1===a,onClick:this.handlePageChange(u),onKeyDown:this.handlePageChange(u)},r.default.createElement("span",{className:k("icon")}),n.formatMessage({id:"Terra.paginator.previous"})),o&&this.buildPageButtons(l,this.handlePageChange),r.default.createElement(p.default,{ariaDisabled:a===l,ariaLabel:n.formatMessage({id:"Terra.paginator.next"}),className:k(["nav-link","right-controls","next",a===l&&"is-disabled"]),disabled:a===l,onClick:this.handlePageChange(s),onKeyDown:this.handlePageChange(s)},n.formatMessage({id:"Terra.paginator.next"}),r.default.createElement("span",{className:k("icon")})),o&&r.default.createElement(p.default,{ariaDisabled:a===l,ariaLabel:n.formatMessage({id:"Terra.paginator.last"}),className:k(["nav-link","right-controls",a===l&&"is-disabled"]),disabled:a===l,onClick:this.handlePageChange(l),onKeyDown:this.handlePageChange(l)},n.formatMessage({id:"Terra.paginator.last"})))}},{key:"reducedPaginator",value:function(){var e=this.context,t=this.props,a=t.selectedPage,n=t.intl,o=t.totalCount,i=t.itemCountPerPage,l=(0,g.calculatePages)(o,i),u=1===a?1:a-1,s=a===l?l:a+1;return r.default.createElement("div",{className:k("paginator",!o&&"pageless",e.className),role:"navigation","aria-label":"pagination"},o&&r.default.createElement(p.default,{ariaDisabled:1===a,ariaLabel:n.formatMessage({id:"Terra.paginator.first"}),className:k(["nav-link","left-controls",1===a&&"is-disabled"]),disabled:1===a,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},n.formatMessage({id:"Terra.paginator.first"})),r.default.createElement(p.default,{ariaDisabled:1===a,ariaLabel:n.formatMessage({id:"Terra.paginator.previous"}),className:k(["nav-link","left-controls","previous",1===a&&"is-disabled"]),disabled:1===a,onClick:this.handlePageChange(u),onKeyDown:this.handlePageChange(u)},r.default.createElement("span",{className:k("icon")}),n.formatMessage({id:"Terra.paginator.previous"})),o&&n.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:a}),r.default.createElement(p.default,{ariaDisabled:a===l,ariaLabel:n.formatMessage({id:"Terra.paginator.next"}),className:k(["nav-link","right-controls","next","icon-only",a===l&&"is-disabled"]),disabled:a===l,onClick:this.handlePageChange(s),onKeyDown:this.handlePageChange(s)},r.default.createElement(c.default,{text:n.formatMessage({id:"Terra.paginator.next"})}),r.default.createElement("span",{className:k("icon")})),o&&r.default.createElement(p.default,{ariaDisabled:a===l,ariaLabel:n.formatMessage({id:"Terra.paginator.last"}),className:k(["nav-link","right-controls",a===l&&"is-disabled"]),disabled:a===l,onClick:this.handlePageChange(l),onKeyDown:this.handlePageChange(l)},n.formatMessage({id:"Terra.paginator.last"})))}},{key:"render",value:function(){return r.default.createElement(s.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedPaginator():this.defaultPaginator())}}])&&y(t.prototype,a),n&&y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.default.Component);E.propTypes=O,E.contextType=l.default;var j=(0,u.injectIntl)(E);t.default=j},24993:function(e,t,a){a.r(t),t.default={"paginator-wrapper":"ControlledPaginatorTestCommon-module__paginator-wrapper___oUUxO"}}}]);