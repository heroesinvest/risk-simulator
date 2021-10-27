!function(){var e=function(e){var t={exports:{}};return e.call(t.exports,t,t.exports),t.exports},s=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},h=function l(e,t,i){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(n===undefined){var r=Object.getPrototypeOf(e);return null===r?undefined:l(r,t,i)}if("value"in n)return n.value;var o=n.get;return o===undefined?undefined:o.call(i)},c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},n=function(e){return e&&e.__esModule?e:{"default":e}},p=e(function(e,t){"use strict";function i(e,t){!(1<arguments.length&&t!==undefined)||arguments[1]?window.open(e,"adminBarWindow"):window.location.assign(e)}function n(){window.location.reload()}Object.defineProperty(t,"__esModule",{value:!0}),t.redirectToUrl=i,t.refreshPage=n;var r=function(){function o(e){var t=e.targetNode,i=e.iframeRoot,n=e.iframeSrc,r=e.permanentDomain;a(this,o),this.targetNode=t,this.iframeRoot=i,this.iframeSrc=n,this.permanentDomain=r}return s(o,[{key:"createIframe",value:function i(e,t){this.iframe=document.createElement("iframe"),this.iframe.setAttribute("title",e),this.iframe.setAttribute("id",t),this.iframe.setAttribute("src",this.iframeSrc),this.iframe.setAttribute("sandbox","allow-same-origin allow-scripts"),this.iframe.setAttribute("style",this.loadingStyles),this.targetNode.appendChild(this.iframe),this.target=this.iframe.contentWindow}}],[{key:"convertStylesObjectToString",value:function e(t){return Object.keys(t).map(function(e){return e+": "+t[e]+";"}).join(" ")}},{key:"returnObjectValues",value:function n(t){return Object.keys(t).map(function(e){return t[e]})}}]),o}();t["default"]=r});e(function(e,t){"use strict";function u(e){var t=e.countryCode,i=e.returnTo,n=document.createElement("form");n.action="/localization",n.method="POST",n.style.visibility="hidden";var r={_method:"PUT",return_to:i,country_code:t};Object.keys(r).forEach(function(e){var t=r[e],i=document.createElement("input");i.setAttribute("name",e),i.setAttribute("value",t),n.appendChild(i)}),document.body.append(n),n.submit()}Object.defineProperty(t,"__esModule",{value:!0}),t.updateLocalization=u;var i=function(e){function f(e){var t=e.targetNode,i=e.iframeSrc,n=e.permanentDomain;a(this,f);var r=c(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,{targetNode:t,iframeSrc:i,permanentDomain:n}));return r.POST_MESSAGE_ACTIONS={TOGGLE_BAR:"toggle_bar",SET_IFRAME_HEIGHT:"set_iframe_height",REDIRECT_TO_URL:"redirect_to_url",SET_INITIAL_STATE:"set_initial_state",OPEN_POPOVER:"open_popover",CLOSE_POPOVER:"close_popover",TEMPLATE_EDITOR_REFRESH_PAGE:'{"key":"pageRefresh"}',UPDATE_LOCALIZATION:"update_localization",PREPARE_MODAL:"prepare_modal",CLEANUP_MODAL:"cleanup_modal"},r.loadingStyles=f.convertStylesObjectToString({position:"fixed",border:"none"}),r.defaultStyles=f.convertStylesObjectToString({position:"fixed",bottom:0,left:0,"z-index":2147483647,width:"100%",height:"auto",border:"none"}),r.collapsedStyles=f.convertStylesObjectToString({position:"fixed",bottom:0,left:0,"z-index":2147483647,width:"80px",height:"80px",border:"none"}),r.popoverOpenStyles=f.convertStylesObjectToString({position:"fixed",bottom:0,left:0,"z-index":2147483647,width:"100%",height:"100vh",border:"none"}),r}return o(f,e),s(f,[{key:"init",value:function t(){this.postMessageBuffer=this.postMessageBuffer.bind(this),this.setInitialState=this.setInitialState.bind(this),h(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"createIframe",this).call(this,"Shopify Admin Bar","admin-bar-iframe"),this.target=this.iframe.contentWindow,window.addEventListener("message",this.postMessageBuffer)}},{key:"teardown",value:function i(){window.removeEventListener("message",this.postMessageBuffer),window.removeEventListener("DOMContentLoaded",this.setInitialState)}},{key:"setInitialState",value:function n(){this.isCollapsed?this.iframe.setAttribute("style",this.collapsedStyles):this.iframe.setAttribute("style",this.defaultStyles)}},{key:"postMessageBuffer",value:function d(e){var t=e.data.action||e.data,i=e.data,n=i.height,r=i.url,o=i.isCollapsed,s=i.newWindow,a=i.id,l=e.data.localeData,u=e.origin;!t||f.returnObjectValues(this.POST_MESSAGE_ACTIONS).indexOf(t)<0||u!=="https://"+this.permanentDomain||(t!==this.POST_MESSAGE_ACTIONS.SET_IFRAME_HEIGHT||n)&&this.postMessageHandler(t,n,r,o,s,l,u,a)}},{key:"postMessageHandler",value:function l(e,t,i,n,r,o,s,a){e===this.POST_MESSAGE_ACTIONS.TOGGLE_BAR?this.isCollapsed?(this.isCollapsed=!1,this.iframe.setAttribute("style",this.defaultStyles),this.iframe.style.height=this.heightBeforeCollapse):(this.isCollapsed=!0,this.heightBeforeCollapse=this.iframe.style.height,this.iframe.setAttribute("style",this.collapsedStyles)):e===this.POST_MESSAGE_ACTIONS.SET_IFRAME_HEIGHT&&null!=t?this.iframe.style.height=t+"px":e===this.POST_MESSAGE_ACTIONS.REDIRECT_TO_URL&&null!=i?(0,p.redirectToUrl)(i,r):e===this.POST_MESSAGE_ACTIONS.OPEN_POPOVER?this.iframe.setAttribute("style",this.popoverOpenStyles):e===this.POST_MESSAGE_ACTIONS.CLOSE_POPOVER?this.iframe.setAttribute("style",this.defaultStyles):e===this.POST_MESSAGE_ACTIONS.SET_INITIAL_STATE?n?(this.isCollapsed=!0,this.iframe.setAttribute("style",this.collapsedStyles)):(this.isCollapsed=!1,this.iframe.setAttribute("style",this.defaultStyles)):e===this.POST_MESSAGE_ACTIONS.TEMPLATE_EDITOR_REFRESH_PAGE?(0,p.refreshPage)():e===this.POST_MESSAGE_ACTIONS.UPDATE_LOCALIZATION&&null!=o?u(o):e===this.POST_MESSAGE_ACTIONS.PREPARE_MODAL?(this.iframe.setAttribute("style",this.popoverOpenStyles),this.sendPostMessage({action:"modal_prepared",id:a},s)):e===this.POST_MESSAGE_ACTIONS.CLEANUP_MODAL&&(this.iframe.setAttribute("style",this.defaultStyles),this.sendPostMessage({action:"modal_cleaned_up",id:a},s))}},{key:"sendPostMessage",value:function r(e,t){this.target.postMessage(e,t)}}]),f}(n(p)["default"]);t["default"]=i,Shopify.AdminBarInjector=null!=t["default"]?t["default"]:t})}("undefined"!=typeof global?global:"undefined"!=typeof window&&window);