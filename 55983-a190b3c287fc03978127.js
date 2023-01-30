"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[55983],{49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=l?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(a,o,s):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),s=a(n(45697)),c=a(n(47166)),u=n(21538),i=a(n(13810)),d=a(n(40931)),m=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var y=c.default.bind(p.default),h={example:s.default.element,exampleSrc:s.default.element,exampleCssSrc:s.default.element,title:s.default.string,description:s.default.node,isExpanded:s.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},k=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,s=e.description,c=e.isExpanded,p=(0,o.useState)(c),f=(0,l.default)(p,2),h=f[0],g=f[1],v=(0,o.useState)(!1),x=(0,l.default)(v,2),w=x[0],_=x[1],C=o.default.useContext(u.ThemeContext),D=void 0!==a,S=function(){_(!w),h&&g(!h)},O=function(){g(!h),w&&_(!w)},E=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:y("template",C.className)},o.default.createElement("div",{className:y("header")},r&&o.default.createElement("h2",{className:y("title")},r)),o.default.createElement("div",{className:y("content")},s&&o.default.createElement("div",{className:y("description")},s),t),o.default.createElement("div",{className:y("footer")},n?o.default.createElement("div",{className:y("button-container")},D&&o.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":w}),onClick:S,onKeyDown:function(e){return E(e,S)},onBlur:b,onMouseDown:k,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:y("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:y("chevron")})),o.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":h}),onClick:O,onKeyDown:function(e){return E(e,O)},onBlur:b,onMouseDown:k,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:y("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:y("chevron")}))):null,o.default.createElement("div",null,w&&o.default.createElement("div",{className:y("css")},a),h&&o.default.createElement("div",{className:y("code")},n))))};g.propTypes=h,g.defaultProps={isExpanded:!1};var v=g;t.Z=v},55983:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(67294),r=n(81254),l=n(44264),o=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u={};function i(e){var t=e.components,n=c(e,o);return(0,r.mdx)("wrapper",s({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, {\n  useState,\n} from 'react';\nimport Table from 'terra-table';\nimport mockData from './mock-data/mock-sort';\n\nconst columnKeys = ['column-0', 'column-1', 'column-2'];\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst createRow = rowData => ({ key: rowData.key, cells: createCellsForRow(rowData.cells) });\n\nconst sortData = (data, sortColumn) => {\n  if (!sortColumn) {\n    return data;\n  }\n\n  const dataCopy = Object.assign([], data);\n  dataCopy.sort((a, b) => {\n    const x = a.cells[columnKeys.indexOf(sortColumn.key)].title.toLowerCase();\n    const y = b.cells[columnKeys.indexOf(sortColumn.key)].title.toLowerCase();\n    if (x < y) { return -1; }\n    if (x > y) { return 1; }\n    return 0;\n  });\n\n  return sortColumn.sortDesc ? dataCopy.reverse() : dataCopy;\n};\n\nconst SortedTable = () => {\n  const [sortColumn, setSortColumn] = useState({ key: columnKeys[0], sortDesc: false });\n\n  const handleSortClick = (event, metaData) => {\n    event.preventDefault();\n    if (sortColumn.key !== metaData.key) {\n      setSortColumn({ key: metaData.key, sortDesc: false });\n    } else {\n      setSortColumn({ key: metaData.key, sortDesc: !sortColumn.sortDesc });\n    }\n  };\n\n  const createRows = (data) => {\n    const sortedData = sortData(data, sortColumn);\n    return sortedData.map(childItem => createRow(childItem));\n  };\n\n  const createHeaderCell = (key, title) => (\n    {\n      key,\n      id: `header-${key}`,\n      metaData: { key },\n      onSortAction: handleSortClick,\n      isSortDesc: sortColumn.key === key ? sortColumn.sortDesc : false,\n      isSortActive: sortColumn.key === key,\n      children: title,\n    }\n  );\n\n  return (\n    <Table\n      summaryId=\"example-sorted-table\"\n      summary=\"This table shows an implementation of sorted table.\"\n      numberOfColumns={3}\n      cellPaddingStyle=\"standard\"\n      headerData={{\n        cells: [\n          createHeaderCell(columnKeys[0], 'Breakfast'),\n          createHeaderCell(columnKeys[1], 'Animals'),\n          createHeaderCell(columnKeys[2], 'Flatware'),\n        ],\n      }}\n      bodyData={[{\n        rows: createRows(mockData),\n      }]}\n    />\n  );\n};\n\nexport default SortedTable;\n\n")))}i.isMDXComponent=!0;var d=n(49271),m=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(d.Z,{title:t||"Sorted Table",description:n,example:a.createElement(l.Z,null),exampleSrc:a.createElement(i,null),isExpanded:r})},p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h={};function b(e){var t=e.components,n=y(e,p);return(0,r.mdx)("wrapper",f({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"terra-table---implementing-a-sorted-table"},"Terra Table - Implementing a Sorted Table"),(0,r.mdx)("p",null,"As table cell content is dynamic and the types of sorting can vary, consumers need to handle the state of their own sorting. The following guide lays out an example of managing sorting and state within a table implementation. There are further optimizations that can be made given an individual implementation of a data set, but this should serve as a framework for that."),(0,r.mdx)("h2",{id:"state-management"},"State Management"),(0,r.mdx)("p",null,"The state of the sort column needs to be managed for the table in a HOC. In this example we are going to be an object containing a unique key for the column and current sort direction."),(0,r.mdx)("p",null," First defaulting our state to sorting the first column."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"+ const [sortColumn, setSortColumn] = useState({ key: columnKeys[0], sortDesc: false });\n")),(0,r.mdx)("p",null,"Next creating an event handler callback method to pass to the table row's ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelect")," prop. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelect")," will return the metaData prop passed it each header cell."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"+  const handleSortClick = (event, metaData) => {\n\n+  }\n")),(0,r.mdx)("p",null,"As a precaution we can prevent default on the event, in case the table has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"  const handleSortClick = (event, metaData) => {\n+   event.preventDefault();\n  }\n")),(0,r.mdx)("p",null,"In this example only one column will be sorted upon, so we'll need to keep track of which column was selected and the current state of sorting for the column. 3 states of column state will be handled, unsorted, sort ascending, and sort descending. A key was sent with the metaData, but an index could have also been used in an implementation where there is no possibility of the columns being rearranged."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"  const handleSortClick = (event, metaData) => {\n    event.preventDefault();\n+   if (sortColumn.key !== metaData.key) {\n+     setSortColumn({ key: metaData.key, sortDesc: false });\n+   } else {\n+     setSortColumn({ key: metaData.key, sortDesc: !sortColumn.sortDesc });\n+   }\n  };\n")),(0,r.mdx)("p",null,"Settting state will trigger another render. So in the render method we need generate our head cells with the updated sort props. Each header cell while need a unique key."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"+ const createHeaderCell = (key, title) => (\n+   {\n+     key,\n+     id: `header-${key}`,\n+     children: title,\n+   }\n+ );\n")),(0,r.mdx)("p",null,"Next we need to set up our metaData object with our key value, and attach the ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSortAction")," to our handler."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"  const createHeaderCell = (key, title) => (\n    {\n      key,\n      id: `header-${key}`,\n+     metaData: { key },\n+     onSortAction: handleSortClick,\n      children: title,\n    }\n  );\n")),(0,r.mdx)("p",null,"Last we need to check if the header cell matches the sortColumn.key in state. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"isSortActive")," prop dictates the visual presence of sorting."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"  const createHeaderCell = (key, title) => (\n    {\n      key,\n      id: `header-${key}`,\n      metaData: { key },\n      onSortAction: handleSortClick,\n+     isSortDesc: sortColumn.key === key ? sortColumn.sortDesc : false,\n+     isSortActive: sortColumn.key === key,\n      children: title,\n    }\n  );\n")),(0,r.mdx)("p",null,"In this example a simple object sort parses the data, followed by a check for reversal."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"+ const sortData = (data, sortColumn) => {\n+   if (!sortColumn) {\n+     return data;\n+   }\n+\n+   const dataCopy = Object.assign([], data);\n+   dataCopy.sort((a, b) => {\n+    const x = a.cells[columns.indexOf(sortColumn.key)].title.toLowerCase();\n+    const y = b.cells[columns.indexOf(sortColumn.key)].title.toLowerCase();\n+    if (x < y) { return -1; }\n+    if (x > y) { return 1; }\n+      return 0;\n+    });\n\n+   return sortColumn.sortDesc ? dataCopy.reverse() : dataCopy;\n+ };\n")),(0,r.mdx)("p",null,"Next we fill in the static methods for the example table rows."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"+ const columns = ['column-0', 'column-1', 'column-2'];\n\n+ const createCell = cell => ({ key: cell.key, children: cell.title });\n\n+ const createCellsForRow = cells => cells.map(cell => createCell(cell));\n\n+ const createRow = rowData => ({ key: rowData.key, cells: createCellsForRow(rowData.cells) });\n")),(0,r.mdx)("p",null,"Then we can implement a method to loop through our data and create the table rows with our methods and call it from our render method. "),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"+ const createRows = (data) => {\n+   const sortedData = sortData(data, sortColumn);\n+   return sortedData.map(childItem => createRow(childItem));\n+ };\n\n  return (\n+   <Table\n+     summaryId=\"example-sorted-table\"\n+     summary=\"This table shows an implementation of sorted table.\"\n+     numberOfColumns={3}\n+     cellPaddingStyle=\"standard\"\n+     headerData={{\n+       cells: [\n+         createHeaderCell(columnKeys[0], 'Breakfast'),\n+         createHeaderCell(columnKeys[1], 'Animals'),\n+         createHeaderCell(columnKeys[2], 'Flatware'),\n+       ],\n+     }}\n+     bodyData={[{\n+       rows: createRows(mockData),\n+     }]}\n+   />\n  );\n")),(0,r.mdx)("p",null,"Using these steps we get the following example:"),(0,r.mdx)(m,{mdxType:"SortedTable"}))}b.isMDXComponent=!0},44264:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=l?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),l=s(n(12810)),o=s(n(70604));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l,o,s=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(a=l.call(n)).done)&&(s.push(a.value),s.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}var m=["column-0","column-1","column-2"],p=function(){var e,t,n=u((0,r.useState)({key:m[0],sortDesc:!1}),2),a=n[0],s=n[1],c=function(e,t){e.preventDefault(),a.key!==t.key?s({key:t.key,sortDesc:!1}):s({key:t.key,sortDesc:!a.sortDesc})},i=function(e,t){return{key:e,id:"header-".concat(e),metaData:{key:e},onSortAction:c,isSortDesc:a.key===e&&a.sortDesc,isSortActive:a.key===e,children:t}};return r.default.createElement(l.default,{summaryId:"example-sorted-table",summary:"This table shows an implementation of sorted table.",numberOfColumns:3,cellPaddingStyle:"standard",headerData:{cells:[i(m[0],"Breakfast"),i(m[1],"Animals"),i(m[2],"Flatware")]},bodyData:[{rows:(e=o.default,t=function(e,t){if(!t)return e;var n=d([],e);return n.sort((function(e,n){var a=e.cells[m.indexOf(t.key)].title.toLowerCase(),r=n.cells[m.indexOf(t.key)].title.toLowerCase();return a<r?-1:a>r?1:0})),t.sortDesc?n.reverse():n}(e,a),t.map((function(e){return{key:(t=e).key,cells:(n=t.cells,n.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)})))};var t,n})))}]})};t.Z=p},70604:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{key:"unique-0",cells:[{key:"unique-0-0",title:"Pancakes"},{key:"unique-0-1",title:"Dogs"},{key:"unique-0-2",title:"Forks"}]},{key:"unique-1",cells:[{key:"unique-1-0",title:"Bacon"},{key:"unique-1-1",title:"Mice"},{key:"unique-1-2",title:"Knives"}]},{key:"unique-2",cells:[{key:"unique-2-0",title:"Waffles"},{key:"unique-2-1",title:"Cats"},{key:"unique-2-2",title:"Chopsticks"}]},{key:"unique-3",cells:[{key:"unique-3-0",title:"Fruit"},{key:"unique-3-1",title:"Sheep"},{key:"unique-3-2",title:"Spoons"}]},{key:"unique-4",cells:[{key:"unique-4-0",title:"Eggs"},{key:"unique-4-1",title:"Pigs"},{key:"unique-4-2",title:"Sporks"}]}];t.default=n},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var s=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};s.displayName="IconChevronLeft",s.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=s;t.default=c},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);