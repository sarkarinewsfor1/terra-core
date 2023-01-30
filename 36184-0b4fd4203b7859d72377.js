"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[36184],{36184:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),o=i(n(77073)),u=i(n(1626));function i(e){return e&&e.__esModule?e:{default:e}}var l=r.default.createElement(o.default,null),c=function(){return r.default.createElement(u.default,{icon:l,text:"Icon Tag",id:"iconTag"})};t.default=c},1626:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(67294)),u=d(n(45697)),i=d(n(94184)),l=d(n(47166)),c=d(n(50026)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=u?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}o.default=e,n&&n.set(e,o);return o}(n(51051)),f=d(n(37932)),s=["icon","text","href","onClick","onBlur","onFocus","onKeyUp"];function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function d(e){return e&&e.__esModule?e:{default:e}}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(u=o.key,i=void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(u,"string"),"symbol"===r(i)?i:String(i)),o)}var u,i}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var j=l.default.bind(f.default),w={href:u.default.string,icon:u.default.element,onClick:u.default.func,onBlur:u.default.func,onFocus:u.default.func,onKeyUp:u.default.func,text:u.default.string.isRequired},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(l,e);var t,n,r,u=_(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=u.call(this,e)).state={focused:!1},t.handleKeyUp=t.handleKeyUp.bind(O(t)),t.handleOnBlur=t.handleOnBlur.bind(O(t)),t}return t=l,(n=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===a.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,r=e.href,u=e.onClick,l=(e.onBlur,e.onFocus),c=(e.onKeyUp,b(e,s)),a=this.context,f=(0,i.default)(j("tag",{"is-focused":this.state.focused},{"is-interactive":r||u},a.className),c.className),p=j("icon"),d=t?o.default.createElement("span",{className:p},t):null,h=r||u?r?"a":"button":"span";return o.default.createElement(h,y({},c,{className:f,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:u,onFocus:l,href:r}),d,n)}}])&&h(t.prototype,n),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.default.Component);P.propTypes=w,P.contextType=c.default;var k=P;t.default=k},37932:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Tag-module__clinical-lowlight-theme___5sCDf","orion-fusion-theme":"Tag-module__orion-fusion-theme___1C0Ag",tag:"Tag-module__tag___nh+rs","is-interactive":"Tag-module__is-interactive___o8dLe","is-focused":"Tag-module__is-focused___BEB78",icon:"Tag-module__icon___CoP6c"}}}]);