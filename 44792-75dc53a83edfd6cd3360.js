"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[44792],{47572:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(67294)),i=a(n(47166)),u=a(n(95269)),l=a(n(10505));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,u=void 0,u=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===r(u)?u:String(u)),o)}var i,u}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var y=i.default.bind(l.default),m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(l,e);var t,n,r,i=s(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=i.call(this)).state={isInvalid:!1,isIncomplete:!1,required:!1},e.toggleInvalid=e.toggleInvalid.bind(d(e)),e.toggleIncomplete=e.toggleIncomplete.bind(d(e)),e}return t=l,(n=[{key:"toggleInvalid",value:function(){this.setState((function(e){return{isInvalid:!e.isInvalid}}))}},{key:"toggleIncomplete",value:function(){this.setState((function(e){return{isIncomplete:!e.isIncomplete,required:!e.required}}))}},{key:"render",value:function(){return o.default.createElement("div",{className:y("content-wrapper")},o.default.createElement("button",{type:"button",id:"validity-toggle",onClick:this.toggleInvalid},"Toggle Validity"),o.default.createElement("button",{type:"button",id:"incomplete-toggle",onClick:this.toggleIncomplete},"Toggle Incomplete"),o.default.createElement(u.default,{inputId:"test-input",defaultValue:"Value",error:"Error message.",help:"Help message.",hideRequired:!0,inputAttrs:{name:"test",type:"text"},isInvalid:this.state.isInvalid,isIncomplete:this.state.isIncomplete,required:this.state.required,label:"Label Text",labelAttrs:{className:"label"},showOptional:!0}))}}])&&c(t.prototype,n),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.default.Component);t.default=m},10505:function(e,t,n){n.r(t),t.default={"content-wrapper":"Input-test-module__content-wrapper___N2IYI","programmatic-button":"Input-test-module__programmatic-button___S++Ze"}}}]);