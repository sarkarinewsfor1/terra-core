"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[75527],{75527:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(r(67294)),i=c(r(47166)),l=c(r(53593)),a=c(r(52943)),u=c(r(14452));function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,l=void 0,l=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===n(l)?l:String(l)),o)}var i,l}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=p(e);if(t){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}function d(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var h=i.default.bind(u.default),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(u,e);var t,r,n,i=y(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this)).state={show:!1},e.handleTriggerOverlay=e.handleTriggerOverlay.bind(v(e)),e.handleTriggerFullScreenOverlay=e.handleTriggerFullScreenOverlay.bind(v(e)),e.handleOnRequestESC=e.handleOnRequestESC.bind(v(e)),e.forceUpdateForTest=function(){e.forceUpdate()},e}return t=u,(r=[{key:"componentDidMount",value:function(){document.addEventListener("overlay.forceUpdateForTest",this.forceUpdateForTest)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("overlay.forceUpdateForTest",this.forceUpdateForTest)}},{key:"handleTriggerOverlay",value:function(){this.setState({show:!0,relative:!0,id:"terra-Overlay--container"})}},{key:"handleTriggerFullScreenOverlay",value:function(){this.setState({show:!0,relative:!1,id:"terra-Overlay--fullscreen"})}},{key:"handleOnRequestESC",value:function(){this.setState({show:!1})}},{key:"addOverlay",value:function(){return o.default.createElement(l.default,{isOpen:this.state.show,isRelativeToContainer:this.state.relative,onRequestClose:this.handleOnRequestESC,id:this.state.id,zIndex:"6000"},o.default.createElement("h3",null,"The onRequestClose prop gives the overlay close behaviors."),o.default.createElement("br",null),o.default.createElement("p",null,"Close by clicking inside the overlay or pressing the ESC key."))}},{key:"render",value:function(){return o.default.createElement(a.default,{className:h("overlay-container2"),overlay:this.addOverlay(),id:"test-overlay-container"},o.default.createElement("button",{type:"button",id:"trigger_container",onClick:this.handleTriggerOverlay},"Trigger Container Overlay"),o.default.createElement("button",{type:"button",id:"trigger_fullscreen",onClick:this.handleTriggerFullScreenOverlay},"Trigger Fullscreen Overlay"))}}])&&f(t.prototype,r),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o.default.Component);t.default=b},14452:function(e,t,r){r.r(t),t.default={"overlay-container1":"OverlayTestCommon-module__overlay-container1___C3+9j","overlay-container2":"OverlayTestCommon-module__overlay-container2___dP6Me"}}}]);