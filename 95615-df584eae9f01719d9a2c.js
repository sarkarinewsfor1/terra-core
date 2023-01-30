"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[95615],{82310:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(67294),r=n(81254),i=n(85525),l=n(13031),o=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m={};function u(e){var t=e.components,n=c(e,o);return(0,r.mdx)("wrapper",s({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport List, { Item } from 'terra-list/lib/index';\nimport { Placeholder } from '@cerner/terra-docs';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-select';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass SingleSelectList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createListItem = this.createListItem.bind(this);\n    this.handleItemSelection = this.handleItemSelection.bind(this);\n    this.state = { selectedKey: null };\n  }\n\n  handleItemSelection(event, metaData) {\n    event.preventDefault();\n    if (this.state.selectedKey !== metaData.key) {\n      this.setState({ selectedKey: metaData.key });\n    }\n  }\n\n  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n        isSelectable\n        isSelected={this.state.selectedKey === itemData.key}\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder title={itemData.title} className={cx('placeholder')} />\n      </Item>\n    );\n  }\n\n  createListItems(data) {\n    return data.map(childItem => this.createListItem(childItem));\n  }\n\n  render() {\n    return (\n      <List dividerStyle=\"standard\" ariaSelectionStyle=\"single-select\">\n        {this.createListItems(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default SingleSelectList;\n\n")))}u.isMDXComponent=!0;var d=n(49271),p=n(30382),f=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(d.Z,{title:t||"Single Select List",description:n,example:a.createElement(l.Z,null),exampleCssSrc:a.createElement(p.Z,null),exampleSrc:a.createElement(u,null),isExpanded:r})},h=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g={};function x(e){var t=e.components,n=b(e,h);return(0,r.mdx)("wrapper",y({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(i.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-list---implementing-a-single-select-list"},"Terra List - Implementing a Single Select List"),(0,r.mdx)("p",null,"The terra-list implementation requires controlled state if selections are required. As a result, selections are applied at child item generation from HOC state. The following guide will show you how to implement that state within a single row selection variant of list."),(0,r.mdx)("h2",{id:"state-management"},"State Management"),(0,r.mdx)("p",null,"The state of selection needs to be managed for the list in a HOC. In this example we are going to be a unique key, but the type of state used is open to the implementor of the HOC."),(0,r.mdx)("p",null," First defaulting our state to a null value in the constructor."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n+    this.state = { selectedKey: null };\n  }\n\n  render() {\n    return (\n    );\n  }\n}\n")),(0,r.mdx)("p",null,"Next creating an event handler callback method to pass to the list item's ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelect")," prop. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelect")," will return the metaData prop passed it each listItem."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { selectedKey: null };\n+   this.handleItemSelection = this.handleItemSelection.bind(this)\n  }\n\n+ handleItemSelection(event, metaData) {\n+\n+ }\n  ...\n")),(0,r.mdx)("p",null,"As a precaution we can ",(0,r.mdx)("inlineCode",{parentName:"p"},"preventDefault")," on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"  handleItemSelection(event, metaData) {\n+    event.preventDefault();\n  }\n")),(0,r.mdx)("p",null,"A single select list normally doesn't allow deselection, so we'll be using it in our example, but if deselection is desired we could adjust this method. So we compare the key to the current one in state, and if they aren't the same we set this as our state."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"  handleItemSelection(event, metaData) {\n    event.preventDefault();\n+    if (this.state.selectedKey !== metaData.key) {\n+      this.setState({ selectedKey: metaData.key });\n+    }\n  }\n")),(0,r.mdx)("p",null,"Setting state will trigger another render. So in the render method we need generate our list items with the updated ",(0,r.mdx)("inlineCode",{parentName:"p"},"isSelected")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"isSelectable")," props. Each item needs a unique key, not necessarily associated to our own key, but it works as well. The list renders flat, so keys need to be unique even if they are placed within sections.\n",(0,r.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/lists-and-keys.html"},"React List & Key Documentation")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { selectedKey: null };\n    this.handleItemSelection = this.handleItemSelection.bind(this)\n+   this.createListItem = this.createListItem.bind(this)\n  }\n  ...\n+  createListItem(itemData) {\n+    return (\n+      <Item\n+        key={itemData.key}\n+      >\n+        <Placeholder />\n+      </Item>\n+    );\n+  }\n")),(0,r.mdx)("p",null,"Next we need to set up our ",(0,r.mdx)("inlineCode",{parentName:"p"},"metaData")," object with our key value, and attach the ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelect")," to our handler."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n+       metaData={{ key: itemData.key }}\n+       onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),(0,r.mdx)("p",null,"For the single select list we set ",(0,r.mdx)("inlineCode",{parentName:"p"},"isSelectable")," for all items."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n+       isSelectable\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),(0,r.mdx)("p",null,"Finally we need to check if the item matches the selectedKey in state to set ",(0,r.mdx)("inlineCode",{parentName:"p"},"isSelected"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n        isSelectable\n+       isSelected={this.state.selectedKey === itemData.key}\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),(0,r.mdx)("p",null,"Then we can implement a method to loop through our data and create the list item with our methods and call it from our render method. Making special note to assign the prop ",(0,r.mdx)("inlineCode",{parentName:"p"},"ariaSelectionStyle")," with the value ",(0,r.mdx)("inlineCode",{parentName:"p"},"single-select")," for the list, as it is required for accessibility with selectable list options."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},'  render() {\n    return (\n+      <List ariaSelectionStyle="single-select">\n+        {data.map(childItem => this.createListItem(mockData))}\n+      </List>\n    );\n  }\n')),(0,r.mdx)("p",null,"  Using these steps we get the following example."),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(f,{mdxType:"SingleSelectList"}))}x.isMDXComponent=!0},13031:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var r=u(n(67294)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=i?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(r,l,o):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(1893)),l=n(60619),o=u(n(47166)),s=u(n(21202)),c=u(n(29423));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,l=void 0,l=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===a(l)?l:String(l)),r)}var i,l}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b(e);if(t){var r=b(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return h(this,n)}}function h(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var g=o.default.bind(c.default),x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(c,e);var t,n,a,o=f(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).createListItem=t.createListItem.bind(y(t)),t.handleItemSelection=t.handleItemSelection.bind(y(t)),t.state={selectedKey:null},t}return t=c,(n=[{key:"handleItemSelection",value:function(e,t){e.preventDefault(),this.state.selectedKey!==t.key&&this.setState({selectedKey:t.key})}},{key:"createListItem",value:function(e){return r.default.createElement(i.Item,{key:e.key,isSelectable:!0,isSelected:this.state.selectedKey===e.key,metaData:{key:e.key},onSelect:this.handleItemSelection},r.default.createElement(l.Placeholder,{title:e.title,className:g("placeholder")}))}},{key:"createListItems",value:function(e){var t=this;return e.map((function(e){return t.createListItem(e)}))}},{key:"render",value:function(){return r.default.createElement(i.default,{dividerStyle:"standard",ariaSelectionStyle:"single-select"},this.createListItems(s.default))}}])&&d(t.prototype,n),a&&d(t,a),Object.defineProperty(t,"prototype",{writable:!1}),c}(r.default.Component);t.Z=x},21202:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{title:"Item 0",key:"unique-0"},{title:"Item 1",key:"unique-1"},{title:"Item 2",key:"unique-2"},{title:"Item 3",key:"unique-3"},{title:"Item 4",key:"unique-4"}];t.default=n}}]);