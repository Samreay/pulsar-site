/*! For license information please see 84314.33b329e4.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[84314],{62962:(e,t,o)=>{o.d(t,{Z:()=>b});var r=o(87462),n=o(63366),l=o(67294),i=o(78987),s=o(94780),a=o(27621);function c(e){return(0,a.Z)("MuiTabPanel",e)}(0,o(1588).Z)("MuiTabPanel",["root","hidden"]);var u=o(12474);const d=function(e){const{value:t}=e,o=(0,u._i)();if(null===o)throw new Error("No TabContext provided");const r=t!==o.value,n=(0,u.uU)(o,t),l=(0,u.pQ)(o,t);return{hidden:r,getRootProps:()=>({"aria-labelledby":null!=l?l:void 0,hidden:r,id:null!=n?n:void 0})}};var f=o(85893);const p=["children","component","value","slotProps","slots"],b=l.forwardRef((function(e,t){var o;const{children:l,component:a,slotProps:u={},slots:b={}}=e,v=(0,n.Z)(e,p),{hidden:m,getRootProps:y}=d(e),h=(0,r.Z)({},e,{hidden:m}),Z=(e=>{const{hidden:t}=e,o={root:["root",t&&"hidden"]};return(0,s.Z)(o,c,{})})(h),P=null!=(o=null!=a?a:b.root)?o:"div",w=(0,i.Z)({elementType:P,getSlotProps:y,externalSlotProps:u.root,externalForwardedProps:v,additionalProps:{role:"tabpanel",ref:t},ownerState:h,className:Z.root});return(0,f.jsx)(P,(0,r.Z)({},w,{children:!m&&l}))}))},26218:(e,t,o)=>{o.d(t,{Z:()=>y});var r=o(87462),n=o(63366),l=o(67294),i=o(30067),s=o(94780),a=o(27621);function c(e){return(0,a.Z)("MuiTab",e)}(0,o(1588).Z)("MuiTab",["root","selected","disabled"]);var u=o(12474),d=o(70758);const f=["getRootProps"];const p=function(e){var t,o;const{value:l,onChange:i,onClick:s,onFocus:a}=e,c=(0,d.Z)(e),{getRootProps:p}=c,b=(0,n.Z)(c,f),v=(0,u._i)();if(null===v)throw new Error("No TabContext provided");const m=null!=l?l:0,y=v.value===m,h=v.selectionFollowsFocus,Z={role:"tab","aria-controls":null!=(t=(0,u.uU)(v,m))?t:void 0,id:null!=(o=(0,u.pQ)(v,m))?o:void 0,"aria-selected":y,disabled:b.disabled},P=e=>t=>{var o;null==(o=e.onFocus)||o.call(e,t),t.defaultPrevented||(h&&!y&&(i&&i(t,m),v.onSelected(t,m)),a&&a(t))},w=e=>t=>{var o;null==(o=e.onClick)||o.call(e,t),t.defaultPrevented||(y||(i&&i(t,m),v.onSelected(t,m)),s&&s(t))};return(0,r.Z)({getRootProps:(e={})=>{const t=p((0,r.Z)({},e,{onClick:w(e),onFocus:P(e)}));return(0,r.Z)({},t,Z)}},b,{selected:y})};var b=o(78987),v=o(85893);const m=["action","children","value","disabled","onChange","onClick","onFocus","component","slotProps","slots"],y=l.forwardRef((function(e,t){var o;const{action:a,children:u,disabled:d=!1,component:f,slotProps:y={},slots:h={}}=e,Z=(0,n.Z)(e,m),P=l.useRef(),w=(0,i.Z)(P,t),{active:x,focusVisible:S,setFocusVisible:C,selected:g,getRootProps:$}=p((0,r.Z)({},e,{ref:w}));l.useImperativeHandle(a,(()=>({focusVisible:()=>{C(!0),P.current.focus()}})),[C]);const R=(0,r.Z)({},e,{active:x,focusVisible:S,disabled:d,selected:g}),_=(e=>{const{selected:t,disabled:o}=e,r={root:["root",t&&"selected",o&&"disabled"]};return(0,s.Z)(r,c,{})})(R),E=null!=(o=null!=f?f:h.root)?o:"button",F=(0,b.Z)({elementType:E,getSlotProps:$,externalSlotProps:y.root,externalForwardedProps:Z,additionalProps:{ref:t},ownerState:R,className:_.root});return(0,v.jsx)(E,(0,r.Z)({},F,{children:u}))}))},75301:(e,t,o)=>{o.d(t,{Z:()=>P});var r=o(87462),n=o(63366),l=o(67294),i=o(94780),s=o(78987),a=o(27621);function c(e){return(0,a.Z)("MuiTabsList",e)}(0,o(1588).Z)("MuiTabsList",["root","horizontal","vertical"]);var u=o(30067),d=o(57094),f=(o(59864),o(12474)),p=o(30437);const b=(e,t)=>e?e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild:null,v=(e,t)=>e?e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild:null,m=(e,t,o)=>{let r=!1,n=o(e,t);for(;e&&n;){if(n===e.firstChild){if(r)return;r=!0}const t=n.disabled||"true"===n.getAttribute("aria-disabled");if(n.hasAttribute("tabindex")&&!t)return void n.focus();n=o(e,n)}};const y=function(e){const{"aria-label":t,"aria-labelledby":o,children:n,ref:i}=e,s=l.createRef(),a=(0,u.Z)(s,i),c=(0,f._i)();if(null===c)throw new Error("No TabContext provided");const{value:y,orientation:h="horizontal",direction:Z="ltr"}=c,P="rtl"===Z,w=e=>t=>{var o;(e=>{const t=s.current,o=(0,d.Z)(t).activeElement;if("tab"!==(null==o?void 0:o.getAttribute("role")))return;let r="horizontal"===h?"ArrowLeft":"ArrowUp",n="horizontal"===h?"ArrowRight":"ArrowDown";switch("horizontal"===h&&P&&(r="ArrowRight",n="ArrowLeft"),e.key){case r:e.preventDefault(),m(t,o,v);break;case n:e.preventDefault(),m(t,o,b);break;case"Home":e.preventDefault(),m(t,null,b);break;case"End":e.preventDefault(),m(t,null,v)}})(t),null==(o=e.onKeyDown)||o.call(e,t)},x=l.useCallback((()=>{const e=new Map;let t=0;return l.Children.map(n,(o=>{if(!l.isValidElement(o))return null;const n=void 0===o.props.value?t:o.props.value;return e.set(n,t),t+=1,l.cloneElement(o,(0,r.Z)({value:n},1===t&&!1===y&&!o.props.tabIndex||y===n?{tabIndex:0}:{tabIndex:-1}))}))}),[n,y]);return{isRtl:P,orientation:h,value:y,processChildren:x,getRootProps:(n={})=>{const l=(0,p.Z)(e),i=(0,r.Z)({},l,n),s={onKeyDown:w(i)},c=(0,r.Z)({},i,s);return(0,r.Z)({"aria-label":t,"aria-labelledby":o,"aria-orientation":"vertical"===h?"vertical":void 0,role:"tablist",ref:a},c)}}};var h=o(85893);const Z=["children","component","slotProps","slots"],P=l.forwardRef(((e,t)=>{var o;const{component:l,slotProps:a={},slots:u={}}=e,d=(0,n.Z)(e,Z),{isRtl:f,orientation:p,getRootProps:b,processChildren:v}=y((0,r.Z)({},e,{ref:t})),m=(0,r.Z)({},e,{isRtl:f,orientation:p}),P=(e=>{const{orientation:t}=e,o={root:["root",t]};return(0,i.Z)(o,c,{})})(m),w=null!=(o=null!=l?l:u.root)?o:"div",x=(0,s.Z)({elementType:w,getSlotProps:b,externalSlotProps:a.root,externalForwardedProps:d,ownerState:m,className:P.root}),S=v();return(0,h.jsx)(w,(0,r.Z)({},x,{children:S}))}))},12474:(e,t,o)=>{o.d(t,{ZP:()=>a,_i:()=>l,pQ:()=>s,uU:()=>i});var r=o(67294);const n=r.createContext(null);function l(){return r.useContext(n)}function i(e,t){const{idPrefix:o}=e;return null===o?null:`${e.idPrefix}-P-${t}`}function s(e,t){const{idPrefix:o}=e;return null===o?null:`${e.idPrefix}-T-${t}`}const a=n},84239:(e,t,o)=>{o.d(t,{Z:()=>m});var r=o(87462),n=o(63366),l=o(67294),i=o(78987),s=o(94780),a=o(27621);function c(e){return(0,a.Z)("MuiTabs",e)}(0,o(1588).Z)("MuiTabs",["root","horizontal","vertical"]);var u=o(8925),d=o(57579);const f=function(e){const{value:t,defaultValue:o,onChange:r,orientation:n,direction:i,selectionFollowsFocus:s}=e,[a,c]=(0,u.Z)({controlled:t,default:o,name:"Tabs",state:"value"}),f=(0,d.Z)(),p=l.useCallback(((e,t)=>{c(t),r&&r(e,t)}),[r,c]);return{tabsContextValue:l.useMemo((()=>({idPrefix:f,value:a,onSelected:p,orientation:n,direction:i,selectionFollowsFocus:s})),[f,a,p,n,i,s])}};var p=o(12474),b=o(85893);const v=["children","value","defaultValue","orientation","direction","component","onChange","selectionFollowsFocus","slotProps","slots"],m=l.forwardRef(((e,t)=>{var o;const{children:l,orientation:a="horizontal",direction:u="ltr",component:d,slotProps:m={},slots:y={}}=e,h=(0,n.Z)(e,v),{tabsContextValue:Z}=f(e),P=(0,r.Z)({},e,{orientation:a,direction:u}),w=(e=>{const{orientation:t}=e,o={root:["root",t]};return(0,s.Z)(o,c,{})})(P),x=null!=(o=null!=d?d:y.root)?o:"div",S=(0,i.Z)({elementType:x,externalSlotProps:m.root,externalForwardedProps:h,additionalProps:{ref:t},ownerState:P,className:w.root});return(0,b.jsx)(x,(0,r.Z)({},S,{children:(0,b.jsx)(p.ZP.Provider,{value:Z,children:l})}))}))},94780:(e,t,o)=>{function r(e,t,o){const r={};return Object.keys(e).forEach((n=>{r[n]=e[n].reduce(((e,r)=>(r&&(e.push(t(r)),o&&o[r]&&e.push(o[r])),e)),[]).join(" ")})),r}o.d(t,{Z:()=>r})},27621:(e,t,o)=>{o.d(t,{Z:()=>i});const r=e=>e,n=(()=>{let e=r;return{configure(t){e=t},generate:t=>e(t),reset(){e=r}}})(),l={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function i(e,t,o="Mui"){const r=l[t];return r?`${o}-${r}`:`${n.generate(e)}-${t}`}},1588:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(27621);function n(e,t,o="Mui"){const n={};return t.forEach((t=>{n[t]=(0,r.Z)(e,t,o)})),n}},69921:(e,t)=>{var o,r=Symbol.for("react.element"),n=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen");function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case s:case i:case f:case p:return e;default:switch(e=e&&e.$$typeof){case u:case c:case d:case v:case b:case a:return e;default:return t}}case n:return t}}}o=Symbol.for("react.module.reference"),t.ContextConsumer=c,t.ContextProvider=a,t.Element=r,t.ForwardRef=d,t.Fragment=l,t.Lazy=v,t.Memo=b,t.Portal=n,t.Profiler=s,t.StrictMode=i,t.Suspense=f,t.SuspenseList=p,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return y(e)===c},t.isContextProvider=function(e){return y(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return y(e)===d},t.isFragment=function(e){return y(e)===l},t.isLazy=function(e){return y(e)===v},t.isMemo=function(e){return y(e)===b},t.isPortal=function(e){return y(e)===n},t.isProfiler=function(e){return y(e)===s},t.isStrictMode=function(e){return y(e)===i},t.isSuspense=function(e){return y(e)===f},t.isSuspenseList=function(e){return y(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===l||e===s||e===i||e===f||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===b||e.$$typeof===a||e.$$typeof===c||e.$$typeof===d||e.$$typeof===o||void 0!==e.getModuleId)},t.typeOf=y},59864:(e,t,o)=>{e.exports=o(69921)},75251:(e,t,o)=>{o(27418);var r=o(67294),n=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var l=Symbol.for;n=l("react.element"),l("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var r,l={},c=null,u=null;for(r in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!a.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:n,type:e,key:c,ref:u,props:l,_owner:i.current}}t.jsx=c,t.jsxs=c},85893:(e,t,o)=>{e.exports=o(75251)}}]);