(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+iOU":function(e,t,n){"use strict";n.r(t);n("a1Th"),n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("pIFo"),n("Z2Ku"),n("L9s1"),n("f3/d");var r=n("q1tI"),a=n.n(r),c=n("/MKj"),o=n("Wbzz"),i=n("sauc"),l=n("YwZP"),u=n("vgdg");function s(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(){var e=Object(l.useLocation)(),t=a.a.useState(!1),n=t[0],r=t[1],m=Object(c.c)(),b=Object(c.d)((function(e){return e.menuReducer.navCats}),c.b),f=Object(c.d)((function(e){return e.categoryReducer.parents}),c.b),d=function(e,t,n,r){var a=b.childs.filter((function(e){var n=e.name;return n.includes("&amp;")&&(n=n.replace("&amp;","&")),n===t}))[0];console.info("handleCatChange2",e,t,n,a),m(Object(u.b)(t,n,r)),m(Object(u.d)(e,t,n,"",a))};if(e.pathname.includes("search"))return null;if(Object.keys(b.childs).length>0){var p=b.childs;return a.a.createElement("div",{className:"subcategory-container"},a.a.createElement("h4",{className:"widget-title"},"Categories"),Object.keys(p).length>0?a.a.createElement("ul",{className:"category-childs-list"},Object.keys(p).length>0&&p.slice(0,5).map((function(e){var t=e.name,n=e.URL,r=e.cid,c=e.longdesc;n=n.replace("SLighting/","");var l=t.replace("&amp;","&"),u=[].concat(s(f),[[l,r,n]]);return a.a.createElement("li",{key:r,className:"sub-menu-list"},a.a.createElement(o.Link,{onClick:function(){return d(r,l,u,c)},to:i.b+"/"+n},l))})),Object.keys(p).length>5&&n&&p.slice(5,p.length).map((function(e){var t=e.name,n=e.URL,r=e.cid,c=e.longdesc;n=n.replace("SLighting/","");var l=t.replace("&amp;","&"),u=[].concat(s(f),[[l,r]]);return a.a.createElement("li",{key:r,className:"sub-menu-list"},a.a.createElement(o.Link,{onClick:function(){return d(r,l,u,c)},to:i.b+"/"+n},l))}))):null,Object.keys(p).length>5?a.a.createElement("button",{className:"subcategory-show-more-button",onClick:function(){return r(!n)}},n?"LESS...":"MORE...",a.a.createElement("i",{className:"material-icons subcategory-show-more-icon"},n?"keyboard_arrow_up":"keyboard_arrow_down")):null)}return null}}}]);
//# sourceMappingURL=15-85a41ced111c21cd372d.js.map