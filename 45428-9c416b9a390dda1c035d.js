"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[45428],{73333:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(67294)),u=i(n(44618));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(u=o.key,i=void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(u,"string"),"symbol"===r(i)?i:String(i)),o)}var u,i}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(a,e);var t,n,r,i=f(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state={selectedKeys:[]},t.handleSelection=t.handleSelection.bind(s(t)),t}return t=a,(n=[{key:"handleSelection",value:function(e,t){e.preventDefault(),this.setState((function(e){return{selectedKeys:u.default.Utils.handleMultiSelectedKeys(e.selectedKeys,t)}}))}},{key:"render",value:function(){return o.default.createElement(u.default,{id:"button-block-group",isBlock:!0,onChange:this.handleSelection,selectedKeys:this.state.selectedKeys},o.default.createElement(u.default.Button,{text:"Button 1",key:"single-select1"}),o.default.createElement(u.default.Button,{text:"Button 2",key:"single-select2"}),o.default.createElement(u.default.Button,{text:"Button 3",key:"single-select3"}))}}])&&c(t.prototype,n),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o.default.Component);t.default=p}}]);