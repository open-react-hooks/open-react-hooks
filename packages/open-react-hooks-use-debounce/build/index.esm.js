function e(e){var t={exports:{}};return e(t,t.exports),t.exports}var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var u=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,u){for(var i,a,c=o(e),f=1;f<arguments.length;f++){for(var l in i=Object(arguments[f]))r.call(i,l)&&(c[l]=i[l]);if(t){a=t(i);for(var s=0;s<a.length;s++)n.call(i,a[s])&&(c[a[s]]=i[a[s]])}}return c},i=e((function(e,t){var r=60103,n=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,i=60110,a=60112;t.Suspense=60113;var c=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;r=l("react.element"),n=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),o=l("react.provider"),i=l("react.context"),a=l("react.forward_ref"),t.Suspense=l("react.suspense"),c=l("react.memo"),f=l("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function v(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||y}function h(){}function m(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=v.prototype;var _=m.prototype=new h;_.constructor=m,u(_,v.prototype),_.isPureReactComponent=!0;var b={current:null},g=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var o,u={},i=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)g.call(t,o)&&!w.hasOwnProperty(o)&&(u[o]=t[o]);var c=arguments.length-2;if(1===c)u.children=n;else if(1<c){for(var f=Array(c),l=0;l<c;l++)f[l]=arguments[l+2];u.children=f}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:r,type:e,key:i,ref:a,props:u,_owner:b.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var S=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,u,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return i=i(c=e),e=""===u?"."+k(c,0):u,Array.isArray(i)?(o="",null!=e&&(o=e.replace(S,"$&/")+"/"),C(i,t,o,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(S,"$&/")+"/")+e)),t.push(i)),1;if(c=0,u=""===u?".":u+":",Array.isArray(e))for(var f=0;f<e.length;f++){var l=u+k(a=e[f],f);c+=C(a,t,o,l,i)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),f=0;!(a=e.next()).done;)c+=C(a=a.value,t,o,l=u+k(a,f++),i);else if("object"===a)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function E(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function $(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function P(){var e=R.current;if(null===e)throw Error(p(321));return e}var x={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:u};t.Children={map:E,forEach:function(e,t,r){E(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(p(143));return e}},t.Component=v,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var o=u({},e.props),i=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=b.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(l in t)g.call(t,l)&&!w.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==f?f[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){f=Array(l);for(var s=0;s<l;s++)f[s]=arguments[s+2];o.children=f}return{$$typeof:r,type:e.type,key:i,ref:a,props:o,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return P().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,r){return P().useReducer(e,t,r)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.1"}));e((function(e,t){}));var a=e((function(e){e.exports=i}));function c(e){var t=this,r=e.mode,n=void 0===r?"default":r,o=e.delay,u=void 0===o?1e3:o,i=a.useCallback((function(e){var r;return function(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];clearTimeout(r),r=setTimeout((function(){e.apply(t,o)}),u)}}),[u]);return{debounce:"memoize"===n?function(e){var t=a.useCallback(e,[]),r=a.useRef(i(t,u));return a.useEffect((function(){r.current=i(t,u)}),[t,r]),r.current}:i}}export{c as useDebounce};
