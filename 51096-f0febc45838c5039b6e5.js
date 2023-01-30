"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[51096],{51096:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),i=u(n(47166)),o=u(n(13266)),a=u(n(52065));function u(e){return e&&e.__esModule?e:{default:e}}var l=i.default.bind(a.default),s=function(){return r.default.createElement("div",{id:"fixed-target"},r.default.createElement("div",{className:l("responsive-element-wrapper")},r.default.createElement(o.default,{tiny:r.default.createElement("div",null,"Tiny"),small:r.default.createElement("div",null,"Small"),medium:r.default.createElement("div",null,"Medium"),large:r.default.createElement("div",null,"Large"),huge:r.default.createElement("div",null,"Huge"),enormous:r.default.createElement("div",null,"Enormous")})))};t.default=s},13266:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.DependentViewport=void 0;var i=s(n(67294)),o=s(n(45697)),a=s(n(32018)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(i,a,u):i[a]=e[a]}i.default=e,n&&n.set(e,i);return i}(n(31622));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}function s(e){return e&&e.__esModule?e:{default:e}}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(o=i.key,a=void 0,a=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===r(a)?a:String(a)),i)}var o,a}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var v={children:o.default.node,onChange:o.default.func,onResize:o.default.func,tiny:o.default.element,small:o.default.element,medium:o.default.element,large:o.default.element,huge:o.default.element,enormous:o.default.element,responsiveTo:o.default.oneOf(["window","parent"])},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(l,e);var t,n,r,o=d(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=o.call(this)).state={element:null},e.setContainer=e.setContainer.bind(m(e)),e.handleResize=e.handleResize.bind(m(e)),e.handleWindowResize=e.handleWindowResize.bind(m(e)),e.animationFrameID=null,e}return t=l,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new a.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,r=t.onResize,i=t.tiny,o=t.small,a=t.medium,l=t.large,s=t.huge,f=t.enormous;r&&r(e);var c,d=(0,u.activeBreakpointForSize)(e);n&&d!==this.breakpoint&&n(d),this.breakpoint=d,(i||o||a||l||s||f)&&(c=e>=u.default.enormous&&f?"enormous":e>=u.default.huge&&s?"huge":e>=u.default.large&&l?"large":e>=u.default.medium&&a?"medium":e>=u.default.small&&o?"small":"tiny",this.state.element!==c&&this.setState({element:c}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:i.default.createElement(i.default.Fragment,null,"parent"===n&&!this.container&&i.default.createElement("div",{ref:this.setContainer}),t)}}])&&f(t.prototype,n),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(i.default.Component);y.propTypes=v,y.defaultProps={responsiveTo:"parent"};var b=y;t.default=b},52065:function(e,t,n){n.r(t),t.default={"responsive-element-wrapper":"FixedSize-module__responsive-element-wrapper___nZ70n"}}}]);