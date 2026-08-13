(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function s(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(c){if(c.ep)return;c.ep=!0;const f=s(c);fetch(c.href,f)}})();function i2(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function l2(a){if(Object.prototype.hasOwnProperty.call(a,"__esModule"))return a;var l=a.default;if(typeof l=="function"){var s=function r(){return this instanceof r?Reflect.construct(l,arguments,this.constructor):l.apply(this,arguments)};s.prototype=l.prototype}else s={};return Object.defineProperty(s,"__esModule",{value:!0}),Object.keys(a).forEach(function(r){var c=Object.getOwnPropertyDescriptor(a,r);Object.defineProperty(s,r,c.get?c:{enumerable:!0,get:function(){return a[r]}})}),s}var $o={exports:{}},jl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function r2(){if(Qp)return jl;Qp=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function s(r,c,f){var m=null;if(f!==void 0&&(m=""+f),c.key!==void 0&&(m=""+c.key),"key"in c){f={};for(var g in c)g!=="key"&&(f[g]=c[g])}else f=c;return c=f.ref,{$$typeof:a,type:r,key:m,ref:c!==void 0?c:null,props:f}}return jl.Fragment=l,jl.jsx=s,jl.jsxs=s,jl}var Xp;function u2(){return Xp||(Xp=1,$o.exports=r2()),$o.exports}var w=u2(),Zo={exports:{}},vt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function s2(){if($p)return vt;$p=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),T=Symbol.iterator;function B(j){return j===null||typeof j!="object"?null:(j=T&&j[T]||j["@@iterator"],typeof j=="function"?j:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,G={};function U(j,J,it){this.props=j,this.context=J,this.refs=G,this.updater=it||K}U.prototype.isReactComponent={},U.prototype.setState=function(j,J){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,J,"setState")},U.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function R(){}R.prototype=U.prototype;function M(j,J,it){this.props=j,this.context=J,this.refs=G,this.updater=it||K}var S=M.prototype=new R;S.constructor=M,z(S,U.prototype),S.isPureReactComponent=!0;var v=Array.isArray,D={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function Q(j,J,it,st,at,ht){return it=ht.ref,{$$typeof:a,type:j,key:J,ref:it!==void 0?it:null,props:ht}}function et(j,J){return Q(j.type,J,void 0,void 0,void 0,j.props)}function _(j){return typeof j=="object"&&j!==null&&j.$$typeof===a}function tt(j){var J={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(it){return J[it]})}var Et=/\/+/g;function ft(j,J){return typeof j=="object"&&j!==null&&j.key!=null?tt(""+j.key):J.toString(36)}function Tt(){}function Dt(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(Tt,Tt):(j.status="pending",j.then(function(J){j.status==="pending"&&(j.status="fulfilled",j.value=J)},function(J){j.status==="pending"&&(j.status="rejected",j.reason=J)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function St(j,J,it,st,at){var ht=typeof j;(ht==="undefined"||ht==="boolean")&&(j=null);var pt=!1;if(j===null)pt=!0;else switch(ht){case"bigint":case"string":case"number":pt=!0;break;case"object":switch(j.$$typeof){case a:case l:pt=!0;break;case x:return pt=j._init,St(pt(j._payload),J,it,st,at)}}if(pt)return at=at(j),pt=st===""?"."+ft(j,0):st,v(at)?(it="",pt!=null&&(it=pt.replace(Et,"$&/")+"/"),St(at,J,it,"",function(F){return F})):at!=null&&(_(at)&&(at=et(at,it+(at.key==null||j&&j.key===at.key?"":(""+at.key).replace(Et,"$&/")+"/")+pt)),J.push(at)),1;pt=0;var E=st===""?".":st+":";if(v(j))for(var p=0;p<j.length;p++)st=j[p],ht=E+ft(st,p),pt+=St(st,J,it,ht,at);else if(p=B(j),typeof p=="function")for(j=p.call(j),p=0;!(st=j.next()).done;)st=st.value,ht=E+ft(st,p++),pt+=St(st,J,it,ht,at);else if(ht==="object"){if(typeof j.then=="function")return St(Dt(j),J,it,st,at);throw J=String(j),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return pt}function W(j,J,it){if(j==null)return j;var st=[],at=0;return St(j,st,"","",function(ht){return J.call(it,ht,at++)}),st}function nt(j){if(j._status===-1){var J=j._result;J=J(),J.then(function(it){(j._status===0||j._status===-1)&&(j._status=1,j._result=it)},function(it){(j._status===0||j._status===-1)&&(j._status=2,j._result=it)}),j._status===-1&&(j._status=0,j._result=J)}if(j._status===1)return j._result.default;throw j._result}var rt=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)};function bt(){}return vt.Children={map:W,forEach:function(j,J,it){W(j,function(){J.apply(this,arguments)},it)},count:function(j){var J=0;return W(j,function(){J++}),J},toArray:function(j){return W(j,function(J){return J})||[]},only:function(j){if(!_(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},vt.Component=U,vt.Fragment=s,vt.Profiler=c,vt.PureComponent=M,vt.StrictMode=r,vt.Suspense=b,vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,vt.act=function(){throw Error("act(...) is not supported in production builds of React.")},vt.cache=function(j){return function(){return j.apply(null,arguments)}},vt.cloneElement=function(j,J,it){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var st=z({},j.props),at=j.key,ht=void 0;if(J!=null)for(pt in J.ref!==void 0&&(ht=void 0),J.key!==void 0&&(at=""+J.key),J)!X.call(J,pt)||pt==="key"||pt==="__self"||pt==="__source"||pt==="ref"&&J.ref===void 0||(st[pt]=J[pt]);var pt=arguments.length-2;if(pt===1)st.children=it;else if(1<pt){for(var E=Array(pt),p=0;p<pt;p++)E[p]=arguments[p+2];st.children=E}return Q(j.type,at,void 0,void 0,ht,st)},vt.createContext=function(j){return j={$$typeof:m,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:f,_context:j},j},vt.createElement=function(j,J,it){var st,at={},ht=null;if(J!=null)for(st in J.key!==void 0&&(ht=""+J.key),J)X.call(J,st)&&st!=="key"&&st!=="__self"&&st!=="__source"&&(at[st]=J[st]);var pt=arguments.length-2;if(pt===1)at.children=it;else if(1<pt){for(var E=Array(pt),p=0;p<pt;p++)E[p]=arguments[p+2];at.children=E}if(j&&j.defaultProps)for(st in pt=j.defaultProps,pt)at[st]===void 0&&(at[st]=pt[st]);return Q(j,ht,void 0,void 0,null,at)},vt.createRef=function(){return{current:null}},vt.forwardRef=function(j){return{$$typeof:g,render:j}},vt.isValidElement=_,vt.lazy=function(j){return{$$typeof:x,_payload:{_status:-1,_result:j},_init:nt}},vt.memo=function(j,J){return{$$typeof:h,type:j,compare:J===void 0?null:J}},vt.startTransition=function(j){var J=D.T,it={};D.T=it;try{var st=j(),at=D.S;at!==null&&at(it,st),typeof st=="object"&&st!==null&&typeof st.then=="function"&&st.then(bt,rt)}catch(ht){rt(ht)}finally{D.T=J}},vt.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},vt.use=function(j){return D.H.use(j)},vt.useActionState=function(j,J,it){return D.H.useActionState(j,J,it)},vt.useCallback=function(j,J){return D.H.useCallback(j,J)},vt.useContext=function(j){return D.H.useContext(j)},vt.useDebugValue=function(){},vt.useDeferredValue=function(j,J){return D.H.useDeferredValue(j,J)},vt.useEffect=function(j,J){return D.H.useEffect(j,J)},vt.useId=function(){return D.H.useId()},vt.useImperativeHandle=function(j,J,it){return D.H.useImperativeHandle(j,J,it)},vt.useInsertionEffect=function(j,J){return D.H.useInsertionEffect(j,J)},vt.useLayoutEffect=function(j,J){return D.H.useLayoutEffect(j,J)},vt.useMemo=function(j,J){return D.H.useMemo(j,J)},vt.useOptimistic=function(j,J){return D.H.useOptimistic(j,J)},vt.useReducer=function(j,J,it){return D.H.useReducer(j,J,it)},vt.useRef=function(j){return D.H.useRef(j)},vt.useState=function(j){return D.H.useState(j)},vt.useSyncExternalStore=function(j,J,it){return D.H.useSyncExternalStore(j,J,it)},vt.useTransition=function(){return D.H.useTransition()},vt.version="19.0.0",vt}var Zp;function qc(){return Zp||(Zp=1,Zo.exports=s2()),Zo.exports}var k=qc();const oe=i2(k);/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Jp="popstate";function Pp(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function o2(a={}){function l(r,c){var h;let f=(h=c.state)==null?void 0:h.masked,{pathname:m,search:g,hash:b}=f||r.location;return Ac("",{pathname:m,search:g,hash:b},c.state&&c.state.usr||null,c.state&&c.state.key||"default",f?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function s(r,c){return typeof c=="string"?c:Ml(c)}return f2(l,s,null,a)}function Ft(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function nn(a,l){if(!a){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function c2(){return Math.random().toString(36).substring(2,10)}function Ip(a,l){return{usr:a.state,key:a.key,idx:l,masked:a.unstable_mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function Ac(a,l,s=null,r,c){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof l=="string"?Ri(l):l,state:s,key:l&&l.key||r||c2(),unstable_mask:c}}function Ml({pathname:a="/",search:l="",hash:s=""}){return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),s&&s!=="#"&&(a+=s.charAt(0)==="#"?s:"#"+s),a}function Ri(a){let l={};if(a){let s=a.indexOf("#");s>=0&&(l.hash=a.substring(s),a=a.substring(0,s));let r=a.indexOf("?");r>=0&&(l.search=a.substring(r),a=a.substring(0,r)),a&&(l.pathname=a)}return l}function f2(a,l,s,r={}){let{window:c=document.defaultView,v5Compat:f=!1}=r,m=c.history,g="POP",b=null,h=x();h==null&&(h=0,m.replaceState({...m.state,idx:h},""));function x(){return(m.state||{idx:null}).idx}function T(){g="POP";let U=x(),R=U==null?null:U-h;h=U,b&&b({action:g,location:G.location,delta:R})}function B(U,R){g="PUSH";let M=Pp(U)?U:Ac(G.location,U,R);h=x()+1;let S=Ip(M,h),v=G.createHref(M.unstable_mask||M);try{m.pushState(S,"",v)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;c.location.assign(v)}f&&b&&b({action:g,location:G.location,delta:1})}function K(U,R){g="REPLACE";let M=Pp(U)?U:Ac(G.location,U,R);h=x();let S=Ip(M,h),v=G.createHref(M.unstable_mask||M);m.replaceState(S,"",v),f&&b&&b({action:g,location:G.location,delta:0})}function z(U){return d2(U)}let G={get action(){return g},get location(){return a(c,m)},listen(U){if(b)throw new Error("A history only accepts one active listener");return c.addEventListener(Jp,T),b=U,()=>{c.removeEventListener(Jp,T),b=null}},createHref(U){return l(c,U)},createURL:z,encodeLocation(U){let R=z(U);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:B,replace:K,go(U){return m.go(U)}};return G}function d2(a,l=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Ft(s,"No window.location.(origin|href) available to create URL");let r=typeof a=="string"?a:Ml(a);return r=r.replace(/ $/,"%20"),!l&&r.startsWith("//")&&(r=s+r),new URL(r,s)}function mh(a,l,s="/"){return m2(a,l,s,!1)}function m2(a,l,s,r){let c=typeof l=="string"?Ri(l):l,f=Nn(c.pathname||"/",s);if(f==null)return null;let m=ph(a);p2(m);let g=null;for(let b=0;g==null&&b<m.length;++b){let h=T2(f);g=S2(m[b],h,r)}return g}function ph(a,l=[],s=[],r="",c=!1){let f=(m,g,b=c,h)=>{let x={relativePath:h===void 0?m.path||"":h,caseSensitive:m.caseSensitive===!0,childrenIndex:g,route:m};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(r)&&b)return;Ft(x.relativePath.startsWith(r),`Absolute route path "${x.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(r.length)}let T=dn([r,x.relativePath]),B=s.concat(x);m.children&&m.children.length>0&&(Ft(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),ph(m.children,l,B,T,b)),!(m.path==null&&!m.index)&&l.push({path:T,score:E2(T,m.index),routesMeta:B})};return a.forEach((m,g)=>{var b;if(m.path===""||!((b=m.path)!=null&&b.includes("?")))f(m,g);else for(let h of hh(m.path))f(m,g,!0,h)}),l}function hh(a){let l=a.split("/");if(l.length===0)return[];let[s,...r]=l,c=s.endsWith("?"),f=s.replace(/\?$/,"");if(r.length===0)return c?[f,""]:[f];let m=hh(r.join("/")),g=[];return g.push(...m.map(b=>b===""?f:[f,b].join("/"))),c&&g.push(...m),g.map(b=>a.startsWith("/")&&b===""?"/":b)}function p2(a){a.sort((l,s)=>l.score!==s.score?s.score-l.score:w2(l.routesMeta.map(r=>r.childrenIndex),s.routesMeta.map(r=>r.childrenIndex)))}var h2=/^:[\w-]+$/,g2=3,y2=2,b2=1,v2=10,x2=-2,Wp=a=>a==="*";function E2(a,l){let s=a.split("/"),r=s.length;return s.some(Wp)&&(r+=x2),l&&(r+=y2),s.filter(c=>!Wp(c)).reduce((c,f)=>c+(h2.test(f)?g2:f===""?b2:v2),r)}function w2(a,l){return a.length===l.length&&a.slice(0,-1).every((r,c)=>r===l[c])?a[a.length-1]-l[l.length-1]:0}function S2(a,l,s=!1){let{routesMeta:r}=a,c={},f="/",m=[];for(let g=0;g<r.length;++g){let b=r[g],h=g===r.length-1,x=f==="/"?l:l.slice(f.length)||"/",T=vu({path:b.relativePath,caseSensitive:b.caseSensitive,end:h},x),B=b.route;if(!T&&h&&s&&!r[r.length-1].route.index&&(T=vu({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},x)),!T)return null;Object.assign(c,T.params),m.push({params:c,pathname:dn([f,T.pathname]),pathnameBase:O2(dn([f,T.pathnameBase])),route:B}),T.pathnameBase!=="/"&&(f=dn([f,T.pathnameBase]))}return m}function vu(a,l){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[s,r]=_2(a.path,a.caseSensitive,a.end),c=l.match(s);if(!c)return null;let f=c[0],m=f.replace(/(.)\/+$/,"$1"),g=c.slice(1);return{params:r.reduce((h,{paramName:x,isOptional:T},B)=>{if(x==="*"){let z=g[B]||"";m=f.slice(0,f.length-z.length).replace(/(.)\/+$/,"$1")}const K=g[B];return T&&!K?h[x]=void 0:h[x]=(K||"").replace(/%2F/g,"/"),h},{}),pathname:f,pathnameBase:m,pattern:a}}function _2(a,l=!1,s=!0){nn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],c="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,g,b,h,x)=>{if(r.push({paramName:g,isOptional:b!=null}),b){let T=x.charAt(h+m.length);return T&&T!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(r.push({paramName:"*"}),c+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?c+="\\/*$":a!==""&&a!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),r]}function T2(a){try{return a.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return nn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),a}}function Nn(a,l){if(l==="/")return a;if(!a.toLowerCase().startsWith(l.toLowerCase()))return null;let s=l.endsWith("/")?l.length-1:l.length,r=a.charAt(s);return r&&r!=="/"?null:a.slice(s)||"/"}var A2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function R2(a,l="/"){let{pathname:s,search:r="",hash:c=""}=typeof a=="string"?Ri(a):a,f;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?f=t0(s.substring(1),"/"):f=t0(s,l)):f=l,{pathname:f,search:C2(r),hash:N2(c)}}function t0(a,l){let s=l.replace(/\/+$/,"").split("/");return a.split("/").forEach(c=>{c===".."?s.length>1&&s.pop():c!=="."&&s.push(c)}),s.length>1?s.join("/"):"/"}function Jo(a,l,s,r){return`Cannot include a '${a}' character in a manually specified \`to.${l}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function j2(a){return a.filter((l,s)=>s===0||l.route.path&&l.route.path.length>0)}function gh(a){let l=j2(a);return l.map((s,r)=>r===l.length-1?s.pathname:s.pathnameBase)}function Yc(a,l,s,r=!1){let c;typeof a=="string"?c=Ri(a):(c={...a},Ft(!c.pathname||!c.pathname.includes("?"),Jo("?","pathname","search",c)),Ft(!c.pathname||!c.pathname.includes("#"),Jo("#","pathname","hash",c)),Ft(!c.search||!c.search.includes("#"),Jo("#","search","hash",c)));let f=a===""||c.pathname==="",m=f?"/":c.pathname,g;if(m==null)g=s;else{let T=l.length-1;if(!r&&m.startsWith("..")){let B=m.split("/");for(;B[0]==="..";)B.shift(),T-=1;c.pathname=B.join("/")}g=T>=0?l[T]:"/"}let b=R2(c,g),h=m&&m!=="/"&&m.endsWith("/"),x=(f||m===".")&&s.endsWith("/");return!b.pathname.endsWith("/")&&(h||x)&&(b.pathname+="/"),b}var dn=a=>a.join("/").replace(/\/\/+/g,"/"),O2=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),C2=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,N2=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,D2=class{constructor(a,l,s,r=!1){this.status=a,this.statusText=l||"",this.internal=r,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function z2(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function M2(a){return a.map(l=>l.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var yh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function bh(a,l){let s=a;if(typeof s!="string"||!A2.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let r=s,c=!1;if(yh)try{let f=new URL(window.location.href),m=s.startsWith("//")?new URL(f.protocol+s):new URL(s),g=Nn(m.pathname,l);m.origin===f.origin&&g!=null?s=g+m.search+m.hash:c=!0}catch{nn(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:c,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var vh=["POST","PUT","PATCH","DELETE"];new Set(vh);var U2=["GET",...vh];new Set(U2);var ji=k.createContext(null);ji.displayName="DataRouter";var ju=k.createContext(null);ju.displayName="DataRouterState";var L2=k.createContext(!1),xh=k.createContext({isTransitioning:!1});xh.displayName="ViewTransition";var B2=k.createContext(new Map);B2.displayName="Fetchers";var H2=k.createContext(null);H2.displayName="Await";var Je=k.createContext(null);Je.displayName="Navigation";var Bl=k.createContext(null);Bl.displayName="Location";var Dn=k.createContext({outlet:null,matches:[],isDataRoute:!1});Dn.displayName="Route";var Fc=k.createContext(null);Fc.displayName="RouteError";var Eh="REACT_ROUTER_ERROR",k2="REDIRECT",G2="ROUTE_ERROR_RESPONSE";function q2(a){if(a.startsWith(`${Eh}:${k2}:{`))try{let l=JSON.parse(a.slice(28));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.location=="string"&&typeof l.reloadDocument=="boolean"&&typeof l.replace=="boolean")return l}catch{}}function Y2(a){if(a.startsWith(`${Eh}:${G2}:{`))try{let l=JSON.parse(a.slice(40));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string")return new D2(l.status,l.statusText,l.data)}catch{}}function F2(a,{relative:l}={}){Ft(Hl(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:r}=k.useContext(Je),{hash:c,pathname:f,search:m}=kl(a,{relative:l}),g=f;return s!=="/"&&(g=f==="/"?s:dn([s,f])),r.createHref({pathname:g,search:m,hash:c})}function Hl(){return k.useContext(Bl)!=null}function zn(){return Ft(Hl(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Bl).location}var wh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sh(a){k.useContext(Je).static||k.useLayoutEffect(a)}function _h(){let{isDataRoute:a}=k.useContext(Dn);return a?nb():K2()}function K2(){Ft(Hl(),"useNavigate() may be used only in the context of a <Router> component.");let a=k.useContext(ji),{basename:l,navigator:s}=k.useContext(Je),{matches:r}=k.useContext(Dn),{pathname:c}=zn(),f=JSON.stringify(gh(r)),m=k.useRef(!1);return Sh(()=>{m.current=!0}),k.useCallback((b,h={})=>{if(nn(m.current,wh),!m.current)return;if(typeof b=="number"){s.go(b);return}let x=Yc(b,JSON.parse(f),c,h.relative==="path");a==null&&l!=="/"&&(x.pathname=x.pathname==="/"?l:dn([l,x.pathname])),(h.replace?s.replace:s.push)(x,h.state,h)},[l,s,f,c,a])}k.createContext(null);function kl(a,{relative:l}={}){let{matches:s}=k.useContext(Dn),{pathname:r}=zn(),c=JSON.stringify(gh(s));return k.useMemo(()=>Yc(a,JSON.parse(c),r,l==="path"),[a,c,r,l])}function V2(a,l){return Th(a,l)}function Th(a,l,s){var U;Ft(Hl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=k.useContext(Je),{matches:c}=k.useContext(Dn),f=c[c.length-1],m=f?f.params:{},g=f?f.pathname:"/",b=f?f.pathnameBase:"/",h=f&&f.route;{let R=h&&h.path||"";Rh(g,!h||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let x=zn(),T;if(l){let R=typeof l=="string"?Ri(l):l;Ft(b==="/"||((U=R.pathname)==null?void 0:U.startsWith(b)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${R.pathname}" was given in the \`location\` prop.`),T=R}else T=x;let B=T.pathname||"/",K=B;if(b!=="/"){let R=b.replace(/^\//,"").split("/");K="/"+B.replace(/^\//,"").split("/").slice(R.length).join("/")}let z=mh(a,{pathname:K});nn(h||z!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),nn(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=J2(z&&z.map(R=>Object.assign({},R,{params:Object.assign({},m,R.params),pathname:dn([b,r.encodeLocation?r.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?b:dn([b,r.encodeLocation?r.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),c,s);return l&&G?k.createElement(Bl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...T},navigationType:"POP"}},G):G}function Q2(){let a=eb(),l=z2(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),s=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:r},f={padding:"2px 4px",backgroundColor:r},m=null;return console.error("Error handled by React Router default ErrorBoundary:",a),m=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:f},"ErrorBoundary")," or"," ",k.createElement("code",{style:f},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},l),s?k.createElement("pre",{style:c},s):null,m)}var X2=k.createElement(Q2,null),Ah=class extends k.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){this.props.onError?this.props.onError(a,l):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const s=Y2(a.digest);s&&(a=s)}let l=a!==void 0?k.createElement(Dn.Provider,{value:this.props.routeContext},k.createElement(Fc.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?k.createElement($2,{error:a},l):l}};Ah.contextType=L2;var Po=new WeakMap;function $2({children:a,error:l}){let{basename:s}=k.useContext(Je);if(typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){let r=q2(l.digest);if(r){let c=Po.get(l);if(c)throw c;let f=bh(r.location,s);if(yh&&!Po.get(l))if(f.isExternal||r.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:r.replace}));throw Po.set(l,m),m}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return a}function Z2({routeContext:a,match:l,children:s}){let r=k.useContext(ji);return r&&r.static&&r.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=l.route.id),k.createElement(Dn.Provider,{value:a},s)}function J2(a,l=[],s){let r=s==null?void 0:s.state;if(a==null){if(!r)return null;if(r.errors)a=r.matches;else if(l.length===0&&!r.initialized&&r.matches.length>0)a=r.matches;else return null}let c=a,f=r==null?void 0:r.errors;if(f!=null){let x=c.findIndex(T=>T.route.id&&(f==null?void 0:f[T.route.id])!==void 0);Ft(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,x+1))}let m=!1,g=-1;if(s&&r){m=r.renderFallback;for(let x=0;x<c.length;x++){let T=c[x];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(g=x),T.route.id){let{loaderData:B,errors:K}=r,z=T.route.loader&&!B.hasOwnProperty(T.route.id)&&(!K||K[T.route.id]===void 0);if(T.route.lazy||z){s.isStatic&&(m=!0),g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}}let b=s==null?void 0:s.onError,h=r&&b?(x,T)=>{var B,K;b(x,{location:r.location,params:((K=(B=r.matches)==null?void 0:B[0])==null?void 0:K.params)??{},unstable_pattern:M2(r.matches),errorInfo:T})}:void 0;return c.reduceRight((x,T,B)=>{let K,z=!1,G=null,U=null;r&&(K=f&&T.route.id?f[T.route.id]:void 0,G=T.route.errorElement||X2,m&&(g<0&&B===0?(Rh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),z=!0,U=null):g===B&&(z=!0,U=T.route.hydrateFallbackElement||null)));let R=l.concat(c.slice(0,B+1)),M=()=>{let S;return K?S=G:z?S=U:T.route.Component?S=k.createElement(T.route.Component,null):T.route.element?S=T.route.element:S=x,k.createElement(Z2,{match:T,routeContext:{outlet:x,matches:R,isDataRoute:r!=null},children:S})};return r&&(T.route.ErrorBoundary||T.route.errorElement||B===0)?k.createElement(Ah,{location:r.location,revalidation:r.revalidation,component:G,error:K,children:M(),routeContext:{outlet:null,matches:R,isDataRoute:!0},onError:h}):M()},null)}function Kc(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function P2(a){let l=k.useContext(ji);return Ft(l,Kc(a)),l}function I2(a){let l=k.useContext(ju);return Ft(l,Kc(a)),l}function W2(a){let l=k.useContext(Dn);return Ft(l,Kc(a)),l}function Vc(a){let l=W2(a),s=l.matches[l.matches.length-1];return Ft(s.route.id,`${a} can only be used on routes that contain a unique "id"`),s.route.id}function tb(){return Vc("useRouteId")}function eb(){var r;let a=k.useContext(Fc),l=I2("useRouteError"),s=Vc("useRouteError");return a!==void 0?a:(r=l.errors)==null?void 0:r[s]}function nb(){let{router:a}=P2("useNavigate"),l=Vc("useNavigate"),s=k.useRef(!1);return Sh(()=>{s.current=!0}),k.useCallback(async(c,f={})=>{nn(s.current,wh),s.current&&(typeof c=="number"?await a.navigate(c):await a.navigate(c,{fromRouteId:l,...f}))},[a,l])}var e0={};function Rh(a,l,s){!l&&!e0[a]&&(e0[a]=!0,nn(!1,s))}k.memo(ab);function ab({routes:a,future:l,state:s,isStatic:r,onError:c}){return Th(a,void 0,{state:s,isStatic:r,onError:c})}function su(a){Ft(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ib({basename:a="/",children:l=null,location:s,navigationType:r="POP",navigator:c,static:f=!1,unstable_useTransitions:m}){Ft(!Hl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=a.replace(/^\/*/,"/"),b=k.useMemo(()=>({basename:g,navigator:c,static:f,unstable_useTransitions:m,future:{}}),[g,c,f,m]);typeof s=="string"&&(s=Ri(s));let{pathname:h="/",search:x="",hash:T="",state:B=null,key:K="default",unstable_mask:z}=s,G=k.useMemo(()=>{let U=Nn(h,g);return U==null?null:{location:{pathname:U,search:x,hash:T,state:B,key:K,unstable_mask:z},navigationType:r}},[g,h,x,T,B,K,r,z]);return nn(G!=null,`<Router basename="${g}"> is not able to match the URL "${h}${x}${T}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:k.createElement(Je.Provider,{value:b},k.createElement(Bl.Provider,{children:l,value:G}))}function lb({children:a,location:l}){return V2(Rc(a),l)}function Rc(a,l=[]){let s=[];return k.Children.forEach(a,(r,c)=>{if(!k.isValidElement(r))return;let f=[...l,c];if(r.type===k.Fragment){s.push.apply(s,Rc(r.props.children,f));return}Ft(r.type===su,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ft(!r.props.index||!r.props.children,"An index route cannot have child routes.");let m={id:r.props.id||f.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(m.children=Rc(r.props.children,f)),s.push(m)}),s}var ou="get",cu="application/x-www-form-urlencoded";function Ou(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function rb(a){return Ou(a)&&a.tagName.toLowerCase()==="button"}function ub(a){return Ou(a)&&a.tagName.toLowerCase()==="form"}function sb(a){return Ou(a)&&a.tagName.toLowerCase()==="input"}function ob(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function cb(a,l){return a.button===0&&(!l||l==="_self")&&!ob(a)}function jc(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((l,s)=>{let r=a[s];return l.concat(Array.isArray(r)?r.map(c=>[s,c]):[[s,r]])},[]))}function fb(a,l){let s=jc(a);return l&&l.forEach((r,c)=>{s.has(c)||l.getAll(c).forEach(f=>{s.append(c,f)})}),s}var au=null;function db(){if(au===null)try{new FormData(document.createElement("form"),0),au=!1}catch{au=!0}return au}var mb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Io(a){return a!=null&&!mb.has(a)?(nn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cu}"`),null):a}function pb(a,l){let s,r,c,f,m;if(ub(a)){let g=a.getAttribute("action");r=g?Nn(g,l):null,s=a.getAttribute("method")||ou,c=Io(a.getAttribute("enctype"))||cu,f=new FormData(a)}else if(rb(a)||sb(a)&&(a.type==="submit"||a.type==="image")){let g=a.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=a.getAttribute("formaction")||g.getAttribute("action");if(r=b?Nn(b,l):null,s=a.getAttribute("formmethod")||g.getAttribute("method")||ou,c=Io(a.getAttribute("formenctype"))||Io(g.getAttribute("enctype"))||cu,f=new FormData(g,a),!db()){let{name:h,type:x,value:T}=a;if(x==="image"){let B=h?`${h}.`:"";f.append(`${B}x`,"0"),f.append(`${B}y`,"0")}else h&&f.append(h,T)}}else{if(Ou(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=ou,r=null,c=cu,m=a}return f&&c==="text/plain"&&(m=f,f=void 0),{action:r,method:s.toLowerCase(),encType:c,formData:f,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Qc(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function hb(a,l,s,r){let c=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return s?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${r}`:c.pathname=`${c.pathname}.${r}`:c.pathname==="/"?c.pathname=`_root.${r}`:l&&Nn(c.pathname,l)==="/"?c.pathname=`${l.replace(/\/$/,"")}/_root.${r}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${r}`,c}async function gb(a,l){if(a.id in l)return l[a.id];try{let s=await import(a.module);return l[a.id]=s,s}catch(s){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yb(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function bb(a,l,s){let r=await Promise.all(a.map(async c=>{let f=l.routes[c.route.id];if(f){let m=await gb(f,s);return m.links?m.links():[]}return[]}));return wb(r.flat(1).filter(yb).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function n0(a,l,s,r,c,f){let m=(b,h)=>s[h]?b.route.id!==s[h].route.id:!0,g=(b,h)=>{var x;return s[h].pathname!==b.pathname||((x=s[h].route.path)==null?void 0:x.endsWith("*"))&&s[h].params["*"]!==b.params["*"]};return f==="assets"?l.filter((b,h)=>m(b,h)||g(b,h)):f==="data"?l.filter((b,h)=>{var T;let x=r.routes[b.route.id];if(!x||!x.hasLoader)return!1;if(m(b,h)||g(b,h))return!0;if(b.route.shouldRevalidate){let B=b.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((T=s[0])==null?void 0:T.params)||{},nextUrl:new URL(a,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof B=="boolean")return B}return!0}):[]}function vb(a,l,{includeHydrateFallback:s}={}){return xb(a.map(r=>{let c=l.routes[r.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),s&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function xb(a){return[...new Set(a)]}function Eb(a){let l={},s=Object.keys(a).sort();for(let r of s)l[r]=a[r];return l}function wb(a,l){let s=new Set;return new Set(l),a.reduce((r,c)=>{let f=JSON.stringify(Eb(c));return s.has(f)||(s.add(f),r.push({key:f,link:c})),r},[])}function jh(){let a=k.useContext(ji);return Qc(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Sb(){let a=k.useContext(ju);return Qc(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Xc=k.createContext(void 0);Xc.displayName="FrameworkContext";function Oh(){let a=k.useContext(Xc);return Qc(a,"You must render this element inside a <HydratedRouter> element"),a}function _b(a,l){let s=k.useContext(Xc),[r,c]=k.useState(!1),[f,m]=k.useState(!1),{onFocus:g,onBlur:b,onMouseEnter:h,onMouseLeave:x,onTouchStart:T}=l,B=k.useRef(null);k.useEffect(()=>{if(a==="render"&&m(!0),a==="viewport"){let G=R=>{R.forEach(M=>{m(M.isIntersecting)})},U=new IntersectionObserver(G,{threshold:.5});return B.current&&U.observe(B.current),()=>{U.disconnect()}}},[a]),k.useEffect(()=>{if(r){let G=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(G)}}},[r]);let K=()=>{c(!0)},z=()=>{c(!1),m(!1)};return s?a!=="intent"?[f,B,{}]:[f,B,{onFocus:Ol(g,K),onBlur:Ol(b,z),onMouseEnter:Ol(h,K),onMouseLeave:Ol(x,z),onTouchStart:Ol(T,K)}]:[!1,B,{}]}function Ol(a,l){return s=>{a&&a(s),s.defaultPrevented||l(s)}}function Tb({page:a,...l}){let{router:s}=jh(),r=k.useMemo(()=>mh(s.routes,a,s.basename),[s.routes,a,s.basename]);return r?k.createElement(Rb,{page:a,matches:r,...l}):null}function Ab(a){let{manifest:l,routeModules:s}=Oh(),[r,c]=k.useState([]);return k.useEffect(()=>{let f=!1;return bb(a,l,s).then(m=>{f||c(m)}),()=>{f=!0}},[a,l,s]),r}function Rb({page:a,matches:l,...s}){let r=zn(),{future:c,manifest:f,routeModules:m}=Oh(),{basename:g}=jh(),{loaderData:b,matches:h}=Sb(),x=k.useMemo(()=>n0(a,l,h,f,r,"data"),[a,l,h,f,r]),T=k.useMemo(()=>n0(a,l,h,f,r,"assets"),[a,l,h,f,r]),B=k.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let G=new Set,U=!1;if(l.forEach(M=>{var v;let S=f.routes[M.route.id];!S||!S.hasLoader||(!x.some(D=>D.route.id===M.route.id)&&M.route.id in b&&((v=m[M.route.id])!=null&&v.shouldRevalidate)||S.hasClientLoader?U=!0:G.add(M.route.id))}),G.size===0)return[];let R=hb(a,g,c.unstable_trailingSlashAwareDataRequests,"data");return U&&G.size>0&&R.searchParams.set("_routes",l.filter(M=>G.has(M.route.id)).map(M=>M.route.id).join(",")),[R.pathname+R.search]},[g,c.unstable_trailingSlashAwareDataRequests,b,r,f,x,l,a,m]),K=k.useMemo(()=>vb(T,f),[T,f]),z=Ab(T);return k.createElement(k.Fragment,null,B.map(G=>k.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...s})),K.map(G=>k.createElement("link",{key:G,rel:"modulepreload",href:G,...s})),z.map(({key:G,link:U})=>k.createElement("link",{key:G,nonce:s.nonce,...U,crossOrigin:U.crossOrigin??s.crossOrigin})))}function jb(...a){return l=>{a.forEach(s=>{typeof s=="function"?s(l):s!=null&&(s.current=l)})}}var Ob=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ob&&(window.__reactRouterVersion="7.13.1")}catch{}function Cb({basename:a,children:l,unstable_useTransitions:s,window:r}){let c=k.useRef();c.current==null&&(c.current=o2({window:r,v5Compat:!0}));let f=c.current,[m,g]=k.useState({action:f.action,location:f.location}),b=k.useCallback(h=>{s===!1?g(h):k.startTransition(()=>g(h))},[s]);return k.useLayoutEffect(()=>f.listen(b),[f,b]),k.createElement(ib,{basename:a,children:l,location:m.location,navigationType:m.action,navigator:f,unstable_useTransitions:s})}var Ch=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$c=k.forwardRef(function({onClick:l,discover:s="render",prefetch:r="none",relative:c,reloadDocument:f,replace:m,unstable_mask:g,state:b,target:h,to:x,preventScrollReset:T,viewTransition:B,unstable_defaultShouldRevalidate:K,...z},G){let{basename:U,navigator:R,unstable_useTransitions:M}=k.useContext(Je),S=typeof x=="string"&&Ch.test(x),v=bh(x,U);x=v.to;let D=F2(x,{relative:c}),X=zn(),Q=null;if(g){let St=Yc(g,[],X.unstable_mask?X.unstable_mask.pathname:"/",!0);U!=="/"&&(St.pathname=St.pathname==="/"?U:dn([U,St.pathname])),Q=R.createHref(St)}let[et,_,tt]=_b(r,z),Et=Mb(x,{replace:m,unstable_mask:g,state:b,target:h,preventScrollReset:T,relative:c,viewTransition:B,unstable_defaultShouldRevalidate:K,unstable_useTransitions:M});function ft(St){l&&l(St),St.defaultPrevented||Et(St)}let Tt=!(v.isExternal||f),Dt=k.createElement("a",{...z,...tt,href:(Tt?Q:void 0)||v.absoluteURL||D,onClick:Tt?ft:l,ref:jb(G,_),target:h,"data-discover":!S&&s==="render"?"true":void 0});return et&&!S?k.createElement(k.Fragment,null,Dt,k.createElement(Tb,{page:D})):Dt});$c.displayName="Link";var Nb=k.forwardRef(function({"aria-current":l="page",caseSensitive:s=!1,className:r="",end:c=!1,style:f,to:m,viewTransition:g,children:b,...h},x){let T=kl(m,{relative:h.relative}),B=zn(),K=k.useContext(ju),{navigator:z,basename:G}=k.useContext(Je),U=K!=null&&Gb(T)&&g===!0,R=z.encodeLocation?z.encodeLocation(T).pathname:T.pathname,M=B.pathname,S=K&&K.navigation&&K.navigation.location?K.navigation.location.pathname:null;s||(M=M.toLowerCase(),S=S?S.toLowerCase():null,R=R.toLowerCase()),S&&G&&(S=Nn(S,G)||S);const v=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let D=M===R||!c&&M.startsWith(R)&&M.charAt(v)==="/",X=S!=null&&(S===R||!c&&S.startsWith(R)&&S.charAt(R.length)==="/"),Q={isActive:D,isPending:X,isTransitioning:U},et=D?l:void 0,_;typeof r=="function"?_=r(Q):_=[r,D?"active":null,X?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let tt=typeof f=="function"?f(Q):f;return k.createElement($c,{...h,"aria-current":et,className:_,ref:x,style:tt,to:m,viewTransition:g},typeof b=="function"?b(Q):b)});Nb.displayName="NavLink";var Db=k.forwardRef(({discover:a="render",fetcherKey:l,navigate:s,reloadDocument:r,replace:c,state:f,method:m=ou,action:g,onSubmit:b,relative:h,preventScrollReset:x,viewTransition:T,unstable_defaultShouldRevalidate:B,...K},z)=>{let{unstable_useTransitions:G}=k.useContext(Je),U=Hb(),R=kb(g,{relative:h}),M=m.toLowerCase()==="get"?"get":"post",S=typeof g=="string"&&Ch.test(g),v=D=>{if(b&&b(D),D.defaultPrevented)return;D.preventDefault();let X=D.nativeEvent.submitter,Q=(X==null?void 0:X.getAttribute("formmethod"))||m,et=()=>U(X||D.currentTarget,{fetcherKey:l,method:Q,navigate:s,replace:c,state:f,relative:h,preventScrollReset:x,viewTransition:T,unstable_defaultShouldRevalidate:B});G&&s!==!1?k.startTransition(()=>et()):et()};return k.createElement("form",{ref:z,method:M,action:R,onSubmit:r?b:v,...K,"data-discover":!S&&a==="render"?"true":void 0})});Db.displayName="Form";function zb(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nh(a){let l=k.useContext(ji);return Ft(l,zb(a)),l}function Mb(a,{target:l,replace:s,unstable_mask:r,state:c,preventScrollReset:f,relative:m,viewTransition:g,unstable_defaultShouldRevalidate:b,unstable_useTransitions:h}={}){let x=_h(),T=zn(),B=kl(a,{relative:m});return k.useCallback(K=>{if(cb(K,l)){K.preventDefault();let z=s!==void 0?s:Ml(T)===Ml(B),G=()=>x(a,{replace:z,unstable_mask:r,state:c,preventScrollReset:f,relative:m,viewTransition:g,unstable_defaultShouldRevalidate:b});h?k.startTransition(()=>G()):G()}},[T,x,B,s,r,c,l,a,f,m,g,b,h])}function Ub(a){nn(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let l=k.useRef(jc(a)),s=k.useRef(!1),r=zn(),c=k.useMemo(()=>fb(r.search,s.current?null:l.current),[r.search]),f=_h(),m=k.useCallback((g,b)=>{const h=jc(typeof g=="function"?g(new URLSearchParams(c)):g);s.current=!0,f("?"+h,b)},[f,c]);return[c,m]}var Lb=0,Bb=()=>`__${String(++Lb)}__`;function Hb(){let{router:a}=Nh("useSubmit"),{basename:l}=k.useContext(Je),s=tb(),r=a.fetch,c=a.navigate;return k.useCallback(async(f,m={})=>{let{action:g,method:b,encType:h,formData:x,body:T}=pb(f,l);if(m.navigate===!1){let B=m.fetcherKey||Bb();await r(B,s,m.action||g,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:x,body:T,formMethod:m.method||b,formEncType:m.encType||h,flushSync:m.flushSync})}else await c(m.action||g,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:x,body:T,formMethod:m.method||b,formEncType:m.encType||h,replace:m.replace,state:m.state,fromRouteId:s,flushSync:m.flushSync,viewTransition:m.viewTransition})},[r,c,l,s])}function kb(a,{relative:l}={}){let{basename:s}=k.useContext(Je),r=k.useContext(Dn);Ft(r,"useFormAction must be used inside a RouteContext");let[c]=r.matches.slice(-1),f={...kl(a||".",{relative:l})},m=zn();if(a==null){f.search=m.search;let g=new URLSearchParams(f.search),b=g.getAll("index");if(b.some(x=>x==="")){g.delete("index"),b.filter(T=>T).forEach(T=>g.append("index",T));let x=g.toString();f.search=x?`?${x}`:""}}return(!a||a===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(f.pathname=f.pathname==="/"?s:dn([s,f.pathname])),Ml(f)}function Gb(a,{relative:l}={}){let s=k.useContext(xh);Ft(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Nh("useViewTransitionState"),c=kl(a,{relative:l});if(!s.isTransitioning)return!1;let f=Nn(s.currentLocation.pathname,r)||s.currentLocation.pathname,m=Nn(s.nextLocation.pathname,r)||s.nextLocation.pathname;return vu(c.pathname,m)!=null||vu(c.pathname,f)!=null}var Wo={exports:{}},ge={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function qb(){if(a0)return ge;a0=1;var a=qc();function l(b){var h="https://react.dev/errors/"+b;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+b+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var r={d:{f:s,r:function(){throw Error(l(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(b,h,x){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:T==null?null:""+T,children:b,containerInfo:h,implementation:x}}var m=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(b,h){if(b==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ge.createPortal=function(b,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(l(299));return f(b,h,null,x)},ge.flushSync=function(b){var h=m.T,x=r.p;try{if(m.T=null,r.p=2,b)return b()}finally{m.T=h,r.p=x,r.d.f()}},ge.preconnect=function(b,h){typeof b=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(b,h))},ge.prefetchDNS=function(b){typeof b=="string"&&r.d.D(b)},ge.preinit=function(b,h){if(typeof b=="string"&&h&&typeof h.as=="string"){var x=h.as,T=g(x,h.crossOrigin),B=typeof h.integrity=="string"?h.integrity:void 0,K=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?r.d.S(b,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:T,integrity:B,fetchPriority:K}):x==="script"&&r.d.X(b,{crossOrigin:T,integrity:B,fetchPriority:K,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},ge.preinitModule=function(b,h){if(typeof b=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=g(h.as,h.crossOrigin);r.d.M(b,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(b)},ge.preload=function(b,h){if(typeof b=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,T=g(x,h.crossOrigin);r.d.L(b,x,{crossOrigin:T,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},ge.preloadModule=function(b,h){if(typeof b=="string")if(h){var x=g(h.as,h.crossOrigin);r.d.m(b,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(b)},ge.requestFormReset=function(b){r.d.r(b)},ge.unstable_batchedUpdates=function(b,h){return b(h)},ge.useFormState=function(b,h,x){return m.H.useFormState(b,h,x)},ge.useFormStatus=function(){return m.H.useHostTransitionStatus()},ge.version="19.0.0",ge}var i0;function Yb(){if(i0)return Wo.exports;i0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Wo.exports=qb(),Wo.exports}var ce=function(){return ce=Object.assign||function(l){for(var s,r=1,c=arguments.length;r<c;r++){s=arguments[r];for(var f in s)Object.prototype.hasOwnProperty.call(s,f)&&(l[f]=s[f])}return l},ce.apply(this,arguments)};function Ei(a,l,s){if(s||arguments.length===2)for(var r=0,c=l.length,f;r<c;r++)(f||!(r in l))&&(f||(f=Array.prototype.slice.call(l,0,r)),f[r]=l[r]);return a.concat(f||Array.prototype.slice.call(l))}var Gt="-ms-",zl="-moz-",zt="-webkit-",Dh="comm",Cu="rule",Zc="decl",Fb="@import",zh="@keyframes",Kb="@layer",Mh=Math.abs,Jc=String.fromCharCode,Oc=Object.assign;function Vb(a,l){return se(a,0)^45?(((l<<2^se(a,0))<<2^se(a,1))<<2^se(a,2))<<2^se(a,3):0}function Uh(a){return a.trim()}function Cn(a,l){return(a=l.exec(a))?a[0]:a}function xt(a,l,s){return a.replace(l,s)}function fu(a,l,s){return a.indexOf(l,s)}function se(a,l){return a.charCodeAt(l)|0}function wi(a,l,s){return a.slice(l,s)}function fn(a){return a.length}function Lh(a){return a.length}function Dl(a,l){return l.push(a),a}function Qb(a,l){return a.map(l).join("")}function l0(a,l){return a.filter(function(s){return!Cn(s,l)})}var Nu=1,Si=1,Bh=0,Ze=0,Wt=0,Oi="";function Du(a,l,s,r,c,f,m,g){return{value:a,root:l,parent:s,type:r,props:c,children:f,line:Nu,column:Si,length:m,return:"",siblings:g}}function ia(a,l){return Oc(Du("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},l)}function vi(a){for(;a.root;)a=ia(a.root,{children:[a]});Dl(a,a.siblings)}function Xb(){return Wt}function $b(){return Wt=Ze>0?se(Oi,--Ze):0,Si--,Wt===10&&(Si=1,Nu--),Wt}function en(){return Wt=Ze<Bh?se(Oi,Ze++):0,Si++,Wt===10&&(Si=1,Nu++),Wt}function Da(){return se(Oi,Ze)}function du(){return Ze}function zu(a,l){return wi(Oi,a,l)}function Cc(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Zb(a){return Nu=Si=1,Bh=fn(Oi=a),Ze=0,[]}function Jb(a){return Oi="",a}function tc(a){return Uh(zu(Ze-1,Nc(a===91?a+2:a===40?a+1:a)))}function Pb(a){for(;(Wt=Da())&&Wt<33;)en();return Cc(a)>2||Cc(Wt)>3?"":" "}function Ib(a,l){for(;--l&&en()&&!(Wt<48||Wt>102||Wt>57&&Wt<65||Wt>70&&Wt<97););return zu(a,du()+(l<6&&Da()==32&&en()==32))}function Nc(a){for(;en();)switch(Wt){case a:return Ze;case 34:case 39:a!==34&&a!==39&&Nc(Wt);break;case 40:a===41&&Nc(a);break;case 92:en();break}return Ze}function Wb(a,l){for(;en()&&a+Wt!==57;)if(a+Wt===84&&Da()===47)break;return"/*"+zu(l,Ze-1)+"*"+Jc(a===47?a:en())}function tv(a){for(;!Cc(Da());)en();return zu(a,Ze)}function ev(a){return Jb(mu("",null,null,null,[""],a=Zb(a),0,[0],a))}function mu(a,l,s,r,c,f,m,g,b){for(var h=0,x=0,T=m,B=0,K=0,z=0,G=1,U=1,R=1,M=0,S="",v=c,D=f,X=r,Q=S;U;)switch(z=M,M=en()){case 40:if(z!=108&&se(Q,T-1)==58){fu(Q+=xt(tc(M),"&","&\f"),"&\f",Mh(h?g[h-1]:0))!=-1&&(R=-1);break}case 34:case 39:case 91:Q+=tc(M);break;case 9:case 10:case 13:case 32:Q+=Pb(z);break;case 92:Q+=Ib(du()-1,7);continue;case 47:switch(Da()){case 42:case 47:Dl(nv(Wb(en(),du()),l,s,b),b);break;default:Q+="/"}break;case 123*G:g[h++]=fn(Q)*R;case 125*G:case 59:case 0:switch(M){case 0:case 125:U=0;case 59+x:R==-1&&(Q=xt(Q,/\f/g,"")),K>0&&fn(Q)-T&&Dl(K>32?u0(Q+";",r,s,T-1,b):u0(xt(Q," ","")+";",r,s,T-2,b),b);break;case 59:Q+=";";default:if(Dl(X=r0(Q,l,s,h,x,c,g,S,v=[],D=[],T,f),f),M===123)if(x===0)mu(Q,l,X,X,v,f,T,g,D);else switch(B===99&&se(Q,3)===110?100:B){case 100:case 108:case 109:case 115:mu(a,X,X,r&&Dl(r0(a,X,X,0,0,c,g,S,c,v=[],T,D),D),c,D,T,g,r?v:D);break;default:mu(Q,X,X,X,[""],D,0,g,D)}}h=x=K=0,G=R=1,S=Q="",T=m;break;case 58:T=1+fn(Q),K=z;default:if(G<1){if(M==123)--G;else if(M==125&&G++==0&&$b()==125)continue}switch(Q+=Jc(M),M*G){case 38:R=x>0?1:(Q+="\f",-1);break;case 44:g[h++]=(fn(Q)-1)*R,R=1;break;case 64:Da()===45&&(Q+=tc(en())),B=Da(),x=T=fn(S=Q+=tv(du())),M++;break;case 45:z===45&&fn(Q)==2&&(G=0)}}return f}function r0(a,l,s,r,c,f,m,g,b,h,x,T){for(var B=c-1,K=c===0?f:[""],z=Lh(K),G=0,U=0,R=0;G<r;++G)for(var M=0,S=wi(a,B+1,B=Mh(U=m[G])),v=a;M<z;++M)(v=Uh(U>0?K[M]+" "+S:xt(S,/&\f/g,K[M])))&&(b[R++]=v);return Du(a,l,s,c===0?Cu:g,b,h,x,T)}function nv(a,l,s,r){return Du(a,l,s,Dh,Jc(Xb()),wi(a,2,-2),0,r)}function u0(a,l,s,r,c){return Du(a,l,s,Zc,wi(a,0,r),wi(a,r+1,-1),r,c)}function Hh(a,l,s){switch(Vb(a,l)){case 5103:return zt+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return zt+a+a;case 4789:return zl+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return zt+a+zl+a+Gt+a+a;case 5936:switch(se(a,l+11)){case 114:return zt+a+Gt+xt(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return zt+a+Gt+xt(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return zt+a+Gt+xt(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return zt+a+Gt+a+a;case 6165:return zt+a+Gt+"flex-"+a+a;case 5187:return zt+a+xt(a,/(\w+).+(:[^]+)/,zt+"box-$1$2"+Gt+"flex-$1$2")+a;case 5443:return zt+a+Gt+"flex-item-"+xt(a,/flex-|-self/g,"")+(Cn(a,/flex-|baseline/)?"":Gt+"grid-row-"+xt(a,/flex-|-self/g,""))+a;case 4675:return zt+a+Gt+"flex-line-pack"+xt(a,/align-content|flex-|-self/g,"")+a;case 5548:return zt+a+Gt+xt(a,"shrink","negative")+a;case 5292:return zt+a+Gt+xt(a,"basis","preferred-size")+a;case 6060:return zt+"box-"+xt(a,"-grow","")+zt+a+Gt+xt(a,"grow","positive")+a;case 4554:return zt+xt(a,/([^-])(transform)/g,"$1"+zt+"$2")+a;case 6187:return xt(xt(xt(a,/(zoom-|grab)/,zt+"$1"),/(image-set)/,zt+"$1"),a,"")+a;case 5495:case 3959:return xt(a,/(image-set\([^]*)/,zt+"$1$`$1");case 4968:return xt(xt(a,/(.+:)(flex-)?(.*)/,zt+"box-pack:$3"+Gt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+zt+a+a;case 4200:if(!Cn(a,/flex-|baseline/))return Gt+"grid-column-align"+wi(a,l)+a;break;case 2592:case 3360:return Gt+xt(a,"template-","")+a;case 4384:case 3616:return s&&s.some(function(r,c){return l=c,Cn(r.props,/grid-\w+-end/)})?~fu(a+(s=s[l].value),"span",0)?a:Gt+xt(a,"-start","")+a+Gt+"grid-row-span:"+(~fu(s,"span",0)?Cn(s,/\d+/):+Cn(s,/\d+/)-+Cn(a,/\d+/))+";":Gt+xt(a,"-start","")+a;case 4896:case 4128:return s&&s.some(function(r){return Cn(r.props,/grid-\w+-start/)})?a:Gt+xt(xt(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return xt(a,/(.+)-inline(.+)/,zt+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fn(a)-1-l>6)switch(se(a,l+1)){case 109:if(se(a,l+4)!==45)break;case 102:return xt(a,/(.+:)(.+)-([^]+)/,"$1"+zt+"$2-$3$1"+zl+(se(a,l+3)==108?"$3":"$2-$3"))+a;case 115:return~fu(a,"stretch",0)?Hh(xt(a,"stretch","fill-available"),l,s)+a:a}break;case 5152:case 5920:return xt(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,c,f,m,g,b,h){return Gt+c+":"+f+h+(m?Gt+c+"-span:"+(g?b:+b-+f)+h:"")+a});case 4949:if(se(a,l+6)===121)return xt(a,":",":"+zt)+a;break;case 6444:switch(se(a,se(a,14)===45?18:11)){case 120:return xt(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+zt+(se(a,14)===45?"inline-":"")+"box$3$1"+zt+"$2$3$1"+Gt+"$2box$3")+a;case 100:return xt(a,":",":"+Gt)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return xt(a,"scroll-","scroll-snap-")+a}return a}function xu(a,l){for(var s="",r=0;r<a.length;r++)s+=l(a[r],r,a,l)||"";return s}function av(a,l,s,r){switch(a.type){case Kb:if(a.children.length)break;case Fb:case Zc:return a.return=a.return||a.value;case Dh:return"";case zh:return a.return=a.value+"{"+xu(a.children,r)+"}";case Cu:if(!fn(a.value=a.props.join(",")))return""}return fn(s=xu(a.children,r))?a.return=a.value+"{"+s+"}":""}function iv(a){var l=Lh(a);return function(s,r,c,f){for(var m="",g=0;g<l;g++)m+=a[g](s,r,c,f)||"";return m}}function lv(a){return function(l){l.root||(l=l.return)&&a(l)}}function rv(a,l,s,r){if(a.length>-1&&!a.return)switch(a.type){case Zc:a.return=Hh(a.value,a.length,s);return;case zh:return xu([ia(a,{value:xt(a.value,"@","@"+zt)})],r);case Cu:if(a.length)return Qb(s=a.props,function(c){switch(Cn(c,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":vi(ia(a,{props:[xt(c,/:(read-\w+)/,":"+zl+"$1")]})),vi(ia(a,{props:[c]})),Oc(a,{props:l0(s,r)});break;case"::placeholder":vi(ia(a,{props:[xt(c,/:(plac\w+)/,":"+zt+"input-$1")]})),vi(ia(a,{props:[xt(c,/:(plac\w+)/,":"+zl+"$1")]})),vi(ia(a,{props:[xt(c,/:(plac\w+)/,Gt+"input-$1")]})),vi(ia(a,{props:[c]})),Oc(a,{props:l0(s,r)});break}return""})}}var uv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Me={},_i=typeof process<"u"&&Me!==void 0&&(Me.REACT_APP_SC_ATTR||Me.SC_ATTR)||"data-styled",kh="active",Gh="data-styled-version",Mu="6.1.16",Pc=`/*!sc*/
`,Eu=typeof window<"u"&&"HTMLElement"in window,sv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Me!==void 0&&Me.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Me.REACT_APP_SC_DISABLE_SPEEDY!==""?Me.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Me.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Me!==void 0&&Me.SC_DISABLE_SPEEDY!==void 0&&Me.SC_DISABLE_SPEEDY!==""&&Me.SC_DISABLE_SPEEDY!=="false"&&Me.SC_DISABLE_SPEEDY),ov={},Uu=Object.freeze([]),Ti=Object.freeze({});function qh(a,l,s){return s===void 0&&(s=Ti),a.theme!==s.theme&&a.theme||l||s.theme}var Yh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),cv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,fv=/(^-|-$)/g;function s0(a){return a.replace(cv,"-").replace(fv,"")}var dv=/(a)(d)/gi,iu=52,o0=function(a){return String.fromCharCode(a+(a>25?39:97))};function Dc(a){var l,s="";for(l=Math.abs(a);l>iu;l=l/iu|0)s=o0(l%iu)+s;return(o0(l%iu)+s).replace(dv,"$1-$2")}var ec,Fh=5381,xi=function(a,l){for(var s=l.length;s;)a=33*a^l.charCodeAt(--s);return a},Kh=function(a){return xi(Fh,a)};function Ic(a){return Dc(Kh(a)>>>0)}function mv(a){return a.displayName||a.name||"Component"}function nc(a){return typeof a=="string"&&!0}var Vh=typeof Symbol=="function"&&Symbol.for,Qh=Vh?Symbol.for("react.memo"):60115,pv=Vh?Symbol.for("react.forward_ref"):60112,hv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yv=((ec={})[pv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ec[Qh]=Xh,ec);function c0(a){return("type"in(l=a)&&l.type.$$typeof)===Qh?Xh:"$$typeof"in a?yv[a.$$typeof]:hv;var l}var bv=Object.defineProperty,vv=Object.getOwnPropertyNames,f0=Object.getOwnPropertySymbols,xv=Object.getOwnPropertyDescriptor,Ev=Object.getPrototypeOf,d0=Object.prototype;function $h(a,l,s){if(typeof l!="string"){if(d0){var r=Ev(l);r&&r!==d0&&$h(a,r,s)}var c=vv(l);f0&&(c=c.concat(f0(l)));for(var f=c0(a),m=c0(l),g=0;g<c.length;++g){var b=c[g];if(!(b in gv||s&&s[b]||m&&b in m||f&&b in f)){var h=xv(l,b);try{bv(a,b,h)}catch{}}}}return a}function Ma(a){return typeof a=="function"}function Wc(a){return typeof a=="object"&&"styledComponentId"in a}function Ca(a,l){return a&&l?"".concat(a," ").concat(l):a||l||""}function wu(a,l){if(a.length===0)return"";for(var s=a[0],r=1;r<a.length;r++)s+=a[r];return s}function Ul(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function zc(a,l,s){if(s===void 0&&(s=!1),!s&&!Ul(a)&&!Array.isArray(a))return l;if(Array.isArray(l))for(var r=0;r<l.length;r++)a[r]=zc(a[r],l[r]);else if(Ul(l))for(var r in l)a[r]=zc(a[r],l[r]);return a}function tf(a,l){Object.defineProperty(a,"toString",{value:l})}function Ua(a){for(var l=[],s=1;s<arguments.length;s++)l[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var wv=function(){function a(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return a.prototype.indexOfGroup=function(l){for(var s=0,r=0;r<l;r++)s+=this.groupSizes[r];return s},a.prototype.insertRules=function(l,s){if(l>=this.groupSizes.length){for(var r=this.groupSizes,c=r.length,f=c;l>=f;)if((f<<=1)<0)throw Ua(16,"".concat(l));this.groupSizes=new Uint32Array(f),this.groupSizes.set(r),this.length=f;for(var m=c;m<f;m++)this.groupSizes[m]=0}for(var g=this.indexOfGroup(l+1),b=(m=0,s.length);m<b;m++)this.tag.insertRule(g,s[m])&&(this.groupSizes[l]++,g++)},a.prototype.clearGroup=function(l){if(l<this.length){var s=this.groupSizes[l],r=this.indexOfGroup(l),c=r+s;this.groupSizes[l]=0;for(var f=r;f<c;f++)this.tag.deleteRule(r)}},a.prototype.getGroup=function(l){var s="";if(l>=this.length||this.groupSizes[l]===0)return s;for(var r=this.groupSizes[l],c=this.indexOfGroup(l),f=c+r,m=c;m<f;m++)s+="".concat(this.tag.getRule(m)).concat(Pc);return s},a}(),pu=new Map,Su=new Map,hu=1,lu=function(a){if(pu.has(a))return pu.get(a);for(;Su.has(hu);)hu++;var l=hu++;return pu.set(a,l),Su.set(l,a),l},Sv=function(a,l){hu=l+1,pu.set(a,l),Su.set(l,a)},_v="style[".concat(_i,"][").concat(Gh,'="').concat(Mu,'"]'),Tv=new RegExp("^".concat(_i,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Av=function(a,l,s){for(var r,c=s.split(","),f=0,m=c.length;f<m;f++)(r=c[f])&&a.registerName(l,r)},Rv=function(a,l){for(var s,r=((s=l.textContent)!==null&&s!==void 0?s:"").split(Pc),c=[],f=0,m=r.length;f<m;f++){var g=r[f].trim();if(g){var b=g.match(Tv);if(b){var h=0|parseInt(b[1],10),x=b[2];h!==0&&(Sv(x,h),Av(a,x,b[3]),a.getTag().insertRules(h,c)),c.length=0}else c.push(g)}}},m0=function(a){for(var l=document.querySelectorAll(_v),s=0,r=l.length;s<r;s++){var c=l[s];c&&c.getAttribute(_i)!==kh&&(Rv(a,c),c.parentNode&&c.parentNode.removeChild(c))}};function jv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Zh=function(a){var l=document.head,s=a||l,r=document.createElement("style"),c=function(g){var b=Array.from(g.querySelectorAll("style[".concat(_i,"]")));return b[b.length-1]}(s),f=c!==void 0?c.nextSibling:null;r.setAttribute(_i,kh),r.setAttribute(Gh,Mu);var m=jv();return m&&r.setAttribute("nonce",m),s.insertBefore(r,f),r},Ov=function(){function a(l){this.element=Zh(l),this.element.appendChild(document.createTextNode("")),this.sheet=function(s){if(s.sheet)return s.sheet;for(var r=document.styleSheets,c=0,f=r.length;c<f;c++){var m=r[c];if(m.ownerNode===s)return m}throw Ua(17)}(this.element),this.length=0}return a.prototype.insertRule=function(l,s){try{return this.sheet.insertRule(s,l),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},a.prototype.getRule=function(l){var s=this.sheet.cssRules[l];return s&&s.cssText?s.cssText:""},a}(),Cv=function(){function a(l){this.element=Zh(l),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(l,s){if(l<=this.length&&l>=0){var r=document.createTextNode(s);return this.element.insertBefore(r,this.nodes[l]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},a.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},a}(),Nv=function(){function a(l){this.rules=[],this.length=0}return a.prototype.insertRule=function(l,s){return l<=this.length&&(this.rules.splice(l,0,s),this.length++,!0)},a.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},a.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},a}(),p0=Eu,Dv={isServer:!Eu,useCSSOMInjection:!sv},_u=function(){function a(l,s,r){l===void 0&&(l=Ti),s===void 0&&(s={});var c=this;this.options=ce(ce({},Dv),l),this.gs=s,this.names=new Map(r),this.server=!!l.isServer,!this.server&&Eu&&p0&&(p0=!1,m0(this)),tf(this,function(){return function(f){for(var m=f.getTag(),g=m.length,b="",h=function(T){var B=function(R){return Su.get(R)}(T);if(B===void 0)return"continue";var K=f.names.get(B),z=m.getGroup(T);if(K===void 0||!K.size||z.length===0)return"continue";var G="".concat(_i,".g").concat(T,'[id="').concat(B,'"]'),U="";K!==void 0&&K.forEach(function(R){R.length>0&&(U+="".concat(R,","))}),b+="".concat(z).concat(G,'{content:"').concat(U,'"}').concat(Pc)},x=0;x<g;x++)h(x);return b}(c)})}return a.registerId=function(l){return lu(l)},a.prototype.rehydrate=function(){!this.server&&Eu&&m0(this)},a.prototype.reconstructWithOptions=function(l,s){return s===void 0&&(s=!0),new a(ce(ce({},this.options),l),this.gs,s&&this.names||void 0)},a.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(l=function(s){var r=s.useCSSOMInjection,c=s.target;return s.isServer?new Nv(c):r?new Ov(c):new Cv(c)}(this.options),new wv(l)));var l},a.prototype.hasNameForId=function(l,s){return this.names.has(l)&&this.names.get(l).has(s)},a.prototype.registerName=function(l,s){if(lu(l),this.names.has(l))this.names.get(l).add(s);else{var r=new Set;r.add(s),this.names.set(l,r)}},a.prototype.insertRules=function(l,s,r){this.registerName(l,s),this.getTag().insertRules(lu(l),r)},a.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},a.prototype.clearRules=function(l){this.getTag().clearGroup(lu(l)),this.clearNames(l)},a.prototype.clearTag=function(){this.tag=void 0},a}(),zv=/&/g,Mv=/^\s*\/\/.*$/gm;function Jh(a,l){return a.map(function(s){return s.type==="rule"&&(s.value="".concat(l," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(l," ")),s.props=s.props.map(function(r){return"".concat(l," ").concat(r)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=Jh(s.children,l)),s})}function Uv(a){var l,s,r,c=Ti,f=c.options,m=f===void 0?Ti:f,g=c.plugins,b=g===void 0?Uu:g,h=function(B,K,z){return z.startsWith(s)&&z.endsWith(s)&&z.replaceAll(s,"").length>0?".".concat(l):B},x=b.slice();x.push(function(B){B.type===Cu&&B.value.includes("&")&&(B.props[0]=B.props[0].replace(zv,s).replace(r,h))}),m.prefix&&x.push(rv),x.push(av);var T=function(B,K,z,G){K===void 0&&(K=""),z===void 0&&(z=""),G===void 0&&(G="&"),l=G,s=K,r=new RegExp("\\".concat(s,"\\b"),"g");var U=B.replace(Mv,""),R=ev(z||K?"".concat(z," ").concat(K," { ").concat(U," }"):U);m.namespace&&(R=Jh(R,m.namespace));var M=[];return xu(R,iv(x.concat(lv(function(S){return M.push(S)})))),M};return T.hash=b.length?b.reduce(function(B,K){return K.name||Ua(15),xi(B,K.name)},Fh).toString():"",T}var Lv=new _u,Mc=Uv(),Ph=oe.createContext({shouldForwardProp:void 0,styleSheet:Lv,stylis:Mc});Ph.Consumer;oe.createContext(void 0);function Uc(){return k.useContext(Ph)}var Ih=function(){function a(l,s){var r=this;this.inject=function(c,f){f===void 0&&(f=Mc);var m=r.name+f.hash;c.hasNameForId(r.id,m)||c.insertRules(r.id,m,f(r.rules,m,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=s,tf(this,function(){throw Ua(12,String(r.name))})}return a.prototype.getName=function(l){return l===void 0&&(l=Mc),this.name+l.hash},a}(),Bv=function(a){return a>="A"&&a<="Z"};function h0(a){for(var l="",s=0;s<a.length;s++){var r=a[s];if(s===1&&r==="-"&&a[0]==="-")return a;Bv(r)?l+="-"+r.toLowerCase():l+=r}return l.startsWith("ms-")?"-"+l:l}var Wh=function(a){return a==null||a===!1||a===""},tg=function(a){var l,s,r=[];for(var c in a){var f=a[c];a.hasOwnProperty(c)&&!Wh(f)&&(Array.isArray(f)&&f.isCss||Ma(f)?r.push("".concat(h0(c),":"),f,";"):Ul(f)?r.push.apply(r,Ei(Ei(["".concat(c," {")],tg(f),!1),["}"],!1)):r.push("".concat(h0(c),": ").concat((l=c,(s=f)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||l in uv||l.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return r};function la(a,l,s,r){if(Wh(a))return[];if(Wc(a))return[".".concat(a.styledComponentId)];if(Ma(a)){if(!Ma(f=a)||f.prototype&&f.prototype.isReactComponent||!l)return[a];var c=a(l);return la(c,l,s,r)}var f;return a instanceof Ih?s?(a.inject(s,r),[a.getName(r)]):[a]:Ul(a)?tg(a):Array.isArray(a)?Array.prototype.concat.apply(Uu,a.map(function(m){return la(m,l,s,r)})):[a.toString()]}function eg(a){for(var l=0;l<a.length;l+=1){var s=a[l];if(Ma(s)&&!Wc(s))return!1}return!0}var Hv=Kh(Mu),kv=function(){function a(l,s,r){this.rules=l,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&eg(l),this.componentId=s,this.baseHash=xi(Hv,s),this.baseStyle=r,_u.registerId(s)}return a.prototype.generateAndInjectStyles=function(l,s,r){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,s,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))c=Ca(c,this.staticRulesId);else{var f=wu(la(this.rules,l,s,r)),m=Dc(xi(this.baseHash,f)>>>0);if(!s.hasNameForId(this.componentId,m)){var g=r(f,".".concat(m),void 0,this.componentId);s.insertRules(this.componentId,m,g)}c=Ca(c,m),this.staticRulesId=m}else{for(var b=xi(this.baseHash,r.hash),h="",x=0;x<this.rules.length;x++){var T=this.rules[x];if(typeof T=="string")h+=T;else if(T){var B=wu(la(T,l,s,r));b=xi(b,B+x),h+=B}}if(h){var K=Dc(b>>>0);s.hasNameForId(this.componentId,K)||s.insertRules(this.componentId,K,r(h,".".concat(K),void 0,this.componentId)),c=Ca(c,K)}}return c},a}(),Ll=oe.createContext(void 0);Ll.Consumer;function Gv(a){var l=oe.useContext(Ll),s=k.useMemo(function(){return function(r,c){if(!r)throw Ua(14);if(Ma(r)){var f=r(c);return f}if(Array.isArray(r)||typeof r!="object")throw Ua(8);return c?ce(ce({},c),r):r}(a.theme,l)},[a.theme,l]);return a.children?oe.createElement(Ll.Provider,{value:s},a.children):null}var ac={};function qv(a,l,s){var r=Wc(a),c=a,f=!nc(a),m=l.attrs,g=m===void 0?Uu:m,b=l.componentId,h=b===void 0?function(v,D){var X=typeof v!="string"?"sc":s0(v);ac[X]=(ac[X]||0)+1;var Q="".concat(X,"-").concat(Ic(Mu+X+ac[X]));return D?"".concat(D,"-").concat(Q):Q}(l.displayName,l.parentComponentId):b,x=l.displayName,T=x===void 0?function(v){return nc(v)?"styled.".concat(v):"Styled(".concat(mv(v),")")}(a):x,B=l.displayName&&l.componentId?"".concat(s0(l.displayName),"-").concat(l.componentId):l.componentId||h,K=r&&c.attrs?c.attrs.concat(g).filter(Boolean):g,z=l.shouldForwardProp;if(r&&c.shouldForwardProp){var G=c.shouldForwardProp;if(l.shouldForwardProp){var U=l.shouldForwardProp;z=function(v,D){return G(v,D)&&U(v,D)}}else z=G}var R=new kv(s,B,r?c.componentStyle:void 0);function M(v,D){return function(X,Q,et){var _=X.attrs,tt=X.componentStyle,Et=X.defaultProps,ft=X.foldedComponentIds,Tt=X.styledComponentId,Dt=X.target,St=oe.useContext(Ll),W=Uc(),nt=X.shouldForwardProp||W.shouldForwardProp,rt=qh(Q,St,Et)||Ti,bt=function(ht,pt,E){for(var p,F=ce(ce({},pt),{className:void 0,theme:E}),O=0;O<ht.length;O+=1){var gt=Ma(p=ht[O])?p(F):p;for(var jt in gt)F[jt]=jt==="className"?Ca(F[jt],gt[jt]):jt==="style"?ce(ce({},F[jt]),gt[jt]):gt[jt]}return pt.className&&(F.className=Ca(F.className,pt.className)),F}(_,Q,rt),j=bt.as||Dt,J={};for(var it in bt)bt[it]===void 0||it[0]==="$"||it==="as"||it==="theme"&&bt.theme===rt||(it==="forwardedAs"?J.as=bt.forwardedAs:nt&&!nt(it,j)||(J[it]=bt[it]));var st=function(ht,pt){var E=Uc(),p=ht.generateAndInjectStyles(pt,E.styleSheet,E.stylis);return p}(tt,bt),at=Ca(ft,Tt);return st&&(at+=" "+st),bt.className&&(at+=" "+bt.className),J[nc(j)&&!Yh.has(j)?"class":"className"]=at,et&&(J.ref=et),k.createElement(j,J)}(S,v,D)}M.displayName=T;var S=oe.forwardRef(M);return S.attrs=K,S.componentStyle=R,S.displayName=T,S.shouldForwardProp=z,S.foldedComponentIds=r?Ca(c.foldedComponentIds,c.styledComponentId):"",S.styledComponentId=B,S.target=r?c.target:a,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(D){for(var X=[],Q=1;Q<arguments.length;Q++)X[Q-1]=arguments[Q];for(var et=0,_=X;et<_.length;et++)zc(D,_[et],!0);return D}({},c.defaultProps,v):v}}),tf(S,function(){return".".concat(S.styledComponentId)}),f&&$h(S,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function g0(a,l){for(var s=[a[0]],r=0,c=l.length;r<c;r+=1)s.push(l[r],a[r+1]);return s}var y0=function(a){return Object.assign(a,{isCss:!0})};function ef(a){for(var l=[],s=1;s<arguments.length;s++)l[s-1]=arguments[s];if(Ma(a)||Ul(a))return y0(la(g0(Uu,Ei([a],l,!0))));var r=a;return l.length===0&&r.length===1&&typeof r[0]=="string"?la(r):y0(la(g0(r,l)))}function Lc(a,l,s){if(s===void 0&&(s=Ti),!l)throw Ua(1,l);var r=function(c){for(var f=[],m=1;m<arguments.length;m++)f[m-1]=arguments[m];return a(l,s,ef.apply(void 0,Ei([c],f,!1)))};return r.attrs=function(c){return Lc(a,l,ce(ce({},s),{attrs:Array.prototype.concat(s.attrs,c).filter(Boolean)}))},r.withConfig=function(c){return Lc(a,l,ce(ce({},s),c))},r}var ng=function(a){return Lc(qv,a)},V=ng;Yh.forEach(function(a){V[a]=ng(a)});var Yv=function(){function a(l,s){this.rules=l,this.componentId=s,this.isStatic=eg(l),_u.registerId(this.componentId+1)}return a.prototype.createStyles=function(l,s,r,c){var f=c(wu(la(this.rules,s,r,c)),""),m=this.componentId+l;r.insertRules(m,m,f)},a.prototype.removeStyles=function(l,s){s.clearRules(this.componentId+l)},a.prototype.renderStyles=function(l,s,r,c){l>2&&_u.registerId(this.componentId+l),this.removeStyles(l,r),this.createStyles(l,s,r,c)},a}();function Fv(a){for(var l=[],s=1;s<arguments.length;s++)l[s-1]=arguments[s];var r=ef.apply(void 0,Ei([a],l,!1)),c="sc-global-".concat(Ic(JSON.stringify(r))),f=new Yv(r,c),m=function(b){var h=Uc(),x=oe.useContext(Ll),T=oe.useRef(h.styleSheet.allocateGSInstance(c)).current;return h.styleSheet.server&&g(T,b,h.styleSheet,x,h.stylis),oe.useLayoutEffect(function(){if(!h.styleSheet.server)return g(T,b,h.styleSheet,x,h.stylis),function(){return f.removeStyles(T,h.styleSheet)}},[T,b,h.styleSheet,x,h.stylis]),null};function g(b,h,x,T,B){if(f.isStatic)f.renderStyles(b,ov,x,B);else{var K=ce(ce({},h),{theme:qh(h,T,m.defaultProps)});f.renderStyles(b,K,x,B)}}return oe.memo(m)}function Lu(a){for(var l=[],s=1;s<arguments.length;s++)l[s-1]=arguments[s];var r=wu(ef.apply(void 0,Ei([a],l,!1))),c=Ic(r);return new Ih(c,r)}const Kv=V.a`
  position: relative;
  display: inline-flex; /* fixes alignment */
  align-items: center;
  justify-content: center;

  padding: 15px 25px;
  border-radius: 16px;
  font-size: 14px;
  font-family: inherit;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  background: ${({primary:a,theme:l})=>a?l.gradient:l.gradientInverse};
  color: white;
  border: none;
  cursor: pointer;
  z-index: 1;
  margin-bottom: 40px;

  outline: none;
  appearance: none;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({primary:a,theme:l})=>a?l.gradientInverse:l.gradient};
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    z-index: -1;
    border-radius: inherit;
  }

  &:hover::after {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:a})=>a.primaryColor};
    outline-offset: 3px;
  }
`,ag=({children:a,href:l,download:s,...r})=>w.jsx(Kv,{href:l,download:s,...r,children:a}),b0={mobile:"550px",tabletMin:"620px"},v0={mobile:`(max-width: ${b0.mobile})`,tabletMin:`(min-width: ${b0.tabletMin})`},lt={mobile:`@media only screen and ${v0.mobile}`,tabletAndGreater:`@media only screen and ${v0.tabletMin}`},ig=new Date().getFullYear(),Vv=2012,Qv=ig-Vv,Xv=a=>ig-a,$v=V.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`,Zv=V.div`
  margin: 0 auto;
  padding: 20px;
  font-size: 1.1rem;
  color: ${({theme:a})=>a.text};
  font-weight: normal;
  padding-bottom: 80px;
`,Jv=V.div`
  display: grid;

  ${lt.mobile} {
    grid-template-columns: 1fr;
  }
  ${lt.tabletAndGreater} {
    grid-template-columns: auto 1fr auto;
    column-gap: 64px;
    justify-content: center;
  }
`,Pv=V.img`
  width: 380px;
  height: 380px;
  border-radius: 10%;
  object-fit: cover;
  ${lt.mobile} {
    height: 250px;
    width: 100%;
    margin-bottom: 32px;
  }
`,Iv=V.div`
  flex: 1;
  width: 80%;

  a {
    display: block;
    margin-top: 32px;
    height: 20px;
    width: 120px;
  }

  ${lt.mobile} {
    width: 100%;
    text-align: center;

    a {
      margin: 0 auto;
      margin-top: 32px;
    }
  }
`,Wv=()=>w.jsxs(Zv,{children:[w.jsx($v,{className:"section-title",children:"About Me"}),w.jsxs(Jv,{children:[w.jsx(Pv,{src:"/images/about-me/group-photo.jpg",alt:"My desk setup with a laptop, keyboard, and board games"}),w.jsxs(Iv,{children:["I'm a software engineer based in Montevideo, Uruguay, with over"," ",Qv+" ","years of experience in the software world. While my journey started in hands-on development, building web and mobile products using technologies like JavaScript, Node.js, and AWS, my focus in recent years has shifted toward leadership.",w.jsx("br",{}),w.jsx("br",{}),"I've led cross-functional teams spread across multiple countries and time zones, helping align goals, support collaboration, and keep communication clear and consistent. I've been involved in people management, internal communication, mentoring, hiring processes, and performance reviews.",w.jsx("br",{}),w.jsx("br",{}),"I like to think my approach is rooted in empathy and transparency, aiming to create an environment where people can grow, collaborate, and feel heard. Outside of work, I enjoy designing and building things with my own hands, both digitally and in the real world.",w.jsx(ag,{href:"mailto:gmelgaba@gmail.com?subject=Let's%20Connect",primary:!0,children:"Contact Me"})]})]})]});var lg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},x0=oe.createContext&&oe.createContext(lg),tx=["attr","size","title"];function ex(a,l){if(a==null)return{};var s=nx(a,l),r,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)r=f[c],!(l.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(a,r)&&(s[r]=a[r])}return s}function nx(a,l){if(a==null)return{};var s={};for(var r in a)if(Object.prototype.hasOwnProperty.call(a,r)){if(l.indexOf(r)>=0)continue;s[r]=a[r]}return s}function Tu(){return Tu=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var s=arguments[l];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(a[r]=s[r])}return a},Tu.apply(this,arguments)}function E0(a,l){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);l&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),s.push.apply(s,r)}return s}function Au(a){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?E0(Object(s),!0).forEach(function(r){ax(a,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):E0(Object(s)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(s,r))})}return a}function ax(a,l,s){return l=ix(l),l in a?Object.defineProperty(a,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[l]=s,a}function ix(a){var l=lx(a,"string");return typeof l=="symbol"?l:l+""}function lx(a,l){if(typeof a!="object"||!a)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var r=s.call(a,l);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)}function rg(a){return a&&a.map((l,s)=>oe.createElement(l.tag,Au({key:s},l.attr),rg(l.child)))}function Ue(a){return l=>oe.createElement(rx,Tu({attr:Au({},a.attr)},l),rg(a.child))}function rx(a){var l=s=>{var{attr:r,size:c,title:f}=a,m=ex(a,tx),g=c||s.size||"1em",b;return s.className&&(b=s.className),a.className&&(b=(b?b+" ":"")+a.className),oe.createElement("svg",Tu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,r,m,{className:b,style:Au(Au({color:a.color||s.color},s.style),a.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),f&&oe.createElement("title",null,f),a.children)};return x0!==void 0?oe.createElement(x0.Consumer,null,s=>l(s)):l(lg)}function ux(a){return Ue({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(a)}function sx(a){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(a)}function ox(a){return Ue({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"},child:[]}]})(a)}function cx(a){return Ue({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"},child:[]}]})(a)}function fx(a){return Ue({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(a)}function dx(a){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(a)}function mx(a){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(a)}function px(a){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(a)}function ug(a){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(a)}function hx(a){return Ue({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(a)}function gx(a){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"},child:[]}]})(a)}function yx(a){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"},child:[]}]})(a)}function ic(a){return Ue({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(a)}const bx=V.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: transparent;
  color: ${({theme:a})=>a.primaryColor};
  border: 1px solid ${({theme:a})=>a.primaryColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: opacity 0.4s ease, transform 0.3s ease-in-out,
    background 0.3s ease-in-out, color 0.3s ease-in-out;
  opacity: ${({visible:a})=>a?1:0};
  pointer-events: ${({visible:a})=>a?"auto":"none"};

  &:hover {
    background: ${({theme:a})=>a.primaryColor};
    color: ${({theme:a})=>a.textLight};
    transform: scale(1.05);
    border: none;
  }
`,vx=()=>{const[a,l]=k.useState(!1);k.useEffect(()=>{const r=()=>{l(window.scrollY>500)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return w.jsx(bx,{visible:a,onClick:s,children:w.jsx(px,{})})},xx=Lu`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,sg=Lu`
  from {
    opacity: 0;
    transform: translateY(10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ex=Fv`
  html {
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: ${({theme:a})=>a.sectionEven};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({theme:a})=>a.primaryColor};
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${({theme:a})=>a.text};
    }
  }

  * {
    font-family: Sora, sans-serif;
  }

  body {
    margin: 0;
    font-family: Sora, sans-serif;
    background-color: ${({theme:a})=>a.background};
    color: ${({theme:a})=>a.text};
    transition: background-color 0.4s ease, color 0.4s ease;
  }

  ::selection {
    background: ${({theme:a})=>a.primaryColor};
    color: ${({theme:a})=>a.textLight};
  }

  p {
    font-weight: normal;
  }

  section:nth-child(odd) {
    background-color: ${({theme:a})=>a.sectionOdd};
  }

  section:nth-child(even) {
    background-color: ${({theme:a})=>a.sectionEven};
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    background-image: ${({theme:a})=>a.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
    text-align: center;
    width: 100%;
    font-weight: bold;
    margin-bottom: 8px;
    &.align-left {
      text-align: left;
    }
    ${lt.mobile} {
      font-size: 29px;
    }
  }
  .section-subtitle {
    text-align: center;
    width: 100%;
  }
`,w0=V.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`,lc=V.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: ${({theme:a})=>a.sectionEven};
  border: 1px solid ${({theme:a})=>a.primaryColor};
  color: ${({theme:a})=>a.primaryColor};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  transition: 0.2s ease;

  svg {
    font-size: 10px;
  }

  &:hover {
    background-color: ${({theme:a})=>a.primaryColor};
    color: ${({theme:a})=>a.textLight};

    svg {
      color: ${({theme:a})=>a.textLight};
    }
  }
`,wx=V.button`
  background: none;
  border: none;
  color: ${({theme:a})=>a.textGray};
  font-size: 13px;
  cursor: pointer;
  padding-left: 0 !important;

  &:hover {
    text-decoration: underline;
  }
`,S0=({playerCount:a,durationFilter:l,gameCategory:s,onClearFilter:r})=>!!a||!!l||s.length>0?w.jsxs(w0,{children:[w.jsx(wx,{onClick:()=>r("all"),children:"Clear all filters"}),a&&w.jsxs(lc,{onClick:()=>r("players"),children:["Players: ",a," ",w.jsx(ic,{})]}),l&&w.jsxs(lc,{onClick:()=>r("duration"),children:["Duration: ",l.replace("-","–")," ",w.jsx(ic,{})]}),s.map(f=>w.jsxs(lc,{onClick:()=>r("category",f),children:[f," ",w.jsx(ic,{})]},f))]}):w.jsx(w0,{}),Sx=V.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  background-color: ${({theme:a})=>a.sectionEven};
`,_x=V.input`
  flex: 1;
  appearance: none;
  height: 4px;
  background: ${({theme:a})=>a.primaryColor}55;
  border-radius: 2px;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    background: ${({theme:a})=>a.primaryColor};
    border-radius: 50%;
    border: none;
  }
`,Tx=V.input`
  width: 60px;
  background-color: ${({theme:a})=>a.sectionOdd};
  color: ${({theme:a})=>a.text};
  padding: 6px 8px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid ${({theme:a})=>a.textGray};
  text-align: center;
`,rc=V.div`
  margin-bottom: 16px;
  background-color: ${({theme:a})=>a.sectionOdd};
  border-radius: 6px;
  overflow: hidden;
`,uc=V.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  font-weight: bold;
  font-size: 14px;
  color: ${({theme:a})=>a.text};
  cursor: pointer;
  user-select: none;
`,sc=V(hx)`
  margin-right: 8px;
  transition: transform 0.3s ease;
  transform: rotate(${a=>a.open?"90deg":"0deg"});
  color: ${({theme:a})=>a.primaryColor};
`,oc=V.div`
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: ${({open:a})=>a?"1000px":"0"};
`,_0=V.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 16px;
  background-color: ${({theme:a})=>a.sectionEven};
`,cc=V.button`
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  border: 1px solid
    ${({selected:a,theme:l})=>a?l.primaryColor:l.textGray};
  background-color: ${({selected:a,theme:l})=>a?l.primaryColor:"transparent"};
  color: ${({selected:a,theme:l})=>a?l.textLight:l.text};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({selected:a,theme:l})=>a?l.primaryColor:l.sectionOdd};
  }
`,T0=({playerCount:a,onPlayerCountChange:l,durationFilter:s,onDurationFilterChange:r,gameCategory:c,onGameCategoryChange:f,availableGameCategories:m})=>{const[g,b]=k.useState({players:!1,duration:!1,category:!1}),h=x=>{b(T=>({...T,[x]:!T[x]}))};return w.jsxs(w.Fragment,{children:[w.jsxs(rc,{children:[w.jsxs(uc,{onClick:()=>h("players"),children:[w.jsx(sc,{open:!g.players}),"Players"]}),w.jsx(oc,{open:!g.players,children:w.jsxs(Sx,{children:[w.jsx(_x,{type:"range",min:"1",max:"10",value:a||1,onChange:x=>l(x.target.value)}),w.jsx(Tx,{type:"number",min:"1",max:"40",value:a||"",onChange:x=>{const T=parseInt(x.target.value,10);!isNaN(T)&&T>=1&&T<=40?l(String(T)):l("")}})]})})]}),w.jsxs(rc,{children:[w.jsxs(uc,{onClick:()=>h("duration"),children:[w.jsx(sc,{open:!g.duration}),"Duration"]}),w.jsx(oc,{open:!g.duration,children:w.jsx(_0,{children:[{value:"",label:"All durations"},{value:"very-short",label:"Less than 20m"},{value:"short",label:"20–30m"},{value:"medium",label:"30–45m"},{value:"long",label:"45m–1h"},{value:"very-long",label:"More than 1h"}].map(({value:x,label:T})=>w.jsx(cc,{selected:s===x,onClick:()=>{r(s===x?"":x)},children:T},x))})})]}),w.jsxs(rc,{children:[w.jsxs(uc,{onClick:()=>h("category"),children:[w.jsx(sc,{open:!g.category}),"Category"]}),w.jsx(oc,{open:!g.category,children:w.jsxs(_0,{children:[w.jsx(cc,{selected:c.length===0,onClick:()=>f([]),children:"All categories"}),m.map(x=>{const T=c.includes(x);return w.jsx(cc,{selected:T,onClick:()=>{const B=T?c.filter(K=>K!==x):[...c,x];f(B)},children:x},x)})]})})]})]})},og=a=>{if(a==="No rating")return"gray";const l=parseFloat(a);return l<5?"red":l<7?"orange":l<8.5?"green":"blue"},Ax=V.div`
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({theme:a})=>a.sectionEven};
  color: ${({theme:a})=>a.text};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`,Rx=V.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,jx=V.div`
  padding: 15px;
  text-align: center;
`,Ox=V.span`
  color: ${({theme:a})=>a.text};
  font-weight: bold;
  text-transform: uppercase;
`,A0=V.p`
  color: ${a=>a.color||a.theme.text};
  margin: 5px 0;
`,Cx=({game:a,onClick:l})=>w.jsxs(Ax,{onClick:l,children:[w.jsx(Rx,{src:a.image,alt:a.name}),w.jsxs(jx,{children:[w.jsx(Ox,{children:a.name}),w.jsxs(A0,{children:["Jugadores: ",a.minPlayers," - ",a.maxPlayers]}),w.jsx(A0,{color:og(a.rating),children:a.rating==="No rating"?a.rating:`${a.rating}/10`})]})]}),Nx=Lu`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Dx=V.div`
  border: 4px solid ${({theme:a})=>a.sectionEven};
  border-top: 4px solid ${({theme:a})=>a.primaryColor};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: ${Nx} 0.5s linear infinite;
  margin: 40px auto;
`,zx=V.div`
  display: ${a=>a.open?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2000;
`,Mx=V.div`
  position: fixed;
  top: 10%;
  left: 10%;
  opacity: ${a=>a.open?1:0};
  background-color: white;
  padding: 40px 24px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 2000;
  max-width: 1300px;
  width: 80%;
  overflow: hidden;
  transition: opacity 0.25s ease, transform 0.25s ease;
  border-radius: 12px;
  animation: ${sg} 0.3s ease;

  ${lt.mobile} {
    margin-top: 0;
    height: 80vh;
    top: 3dvh;
    left: 2dvh;
    right: 0;
  }
`,R0=V.button`
  position: fixed;
  top: 50%;
  z-index: 2001;
  ${({position:a})=>a}: 10px;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  svg {
    color: ${({theme:a})=>a.primaryColor};
    position: fixed;
  }

  ${lt.mobile} {
    background-color: ${({theme:a})=>a.primaryColor};
    width: 50px;

    svg {
      color: ${({theme:a})=>a.textLight};
      position: fixed;
    }
  }
`,Ux=V.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  color: ${({theme:a})=>a.text};
`,Lx=V.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  img {
    max-width: 100%;
    max-height: 400px;
    object-fit: contain;
    border-radius: 8px;
  }

  ${lt.mobile} {
    display: none;
  }
`,Bx=V.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  max-height: 400px;

  ${lt.tabletAndGreater} {
    img {
      display: none;
    }
  }

  ${lt.mobile} {
    max-height: 75vh;
    padding: 0 20px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:a})=>a.sectionEven};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({theme:a})=>a.primaryColor};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({theme:a})=>a.text};
  }
`,ru=V.strong`
  font-size: 20px;
  color: ${({theme:a})=>a.primaryColor};
`,Hx=V.p`
  font-size: 14.5px;
  line-height: 1.6;
  white-space: pre-wrap;
  margin: 0;
  width: 90%;
`,kx=V.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  ul {
    padding-left: 20px;
    margin: 4px 0 0;
  }

  li {
    margin-bottom: 4px;
  }
`,Gx=V.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 22px;
  color: #888;
  cursor: pointer;
  z-index: 2002;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }
`,qx=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  margin-top: -35px;
`,Yx=V.h3`
  margin: 0;
  padding: 0;
  font-size: 44px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;

  ${lt.mobile} {
    font-size: 20px;
    margin-top: 10px;
  }
`,Fx=V.div`
  font-weight: bold;
  font-size: 40px;
  border: dashed 1px;
  padding: 20px 20px;
  width: 186px;
  margin-top: -32px;
  line-height: 74px;
  max-height: 74px;
  text-align: center;

  ${lt.mobile} {
    margin-top: 16px;
    font-size: 25px;
    margin-right: 20px;
    line-height: 20px;
    padding: 20px 0;
    max-width: 130px;
    height: 20px;
  }
`,Kx=V.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${lt.mobile} {
    grid-template-columns: 1fr;
  }
`,Vx=({game:a,details:l,loading:s,onClose:r,onNext:c,onPrev:f})=>{var g,b;const m=k.useRef(null);return k.useEffect(()=>{m.current&&m.current.scrollTo({top:0,behavior:"smooth"})},[a.id]),w.jsxs(w.Fragment,{children:[w.jsx(zx,{open:!!a,onClick:r}),w.jsx(R0,{position:"left",onClick:f,children:w.jsx(dx,{})}),w.jsx(R0,{position:"right",onClick:c,children:w.jsx(mx,{})}),w.jsxs(Mx,{open:!!a,children:[w.jsxs(qx,{children:[w.jsx(Yx,{children:a.name}),w.jsx(Gx,{onClick:r,"aria-label":"Close modal",children:"×"})]}),w.jsxs(Ux,{children:[w.jsx(Lx,{children:w.jsx("img",{src:a.image,alt:a.name})}),w.jsxs(Bx,{ref:m,children:[w.jsx("img",{src:a.image,alt:a.name}),w.jsx(kx,{children:s?w.jsx(Dx,{}):w.jsxs(w.Fragment,{children:[w.jsx(ru,{children:"Basic info"}),w.jsxs(Kx,{children:[w.jsxs("div",{children:[w.jsxs("div",{children:[w.jsx("strong",{children:"Players:"})," ",a.minPlayers," -"," ",a.maxPlayers]}),(l==null?void 0:l.age)&&w.jsxs("div",{children:[w.jsx("strong",{children:"Suggested Age:"})," ",l.age._text,"+"]}),(l==null?void 0:l.playingtime)&&w.jsxs("div",{children:[w.jsx("strong",{children:"Playing Time:"})," ",l.playingtime._text," minutes"]}),(l==null?void 0:l.boardgamesubdomain)&&w.jsxs("div",{children:[w.jsx("strong",{children:"Genre: "}),(Array.isArray(l==null?void 0:l.boardgamecategory)?l==null?void 0:l.boardgamecategory:[l==null?void 0:l.boardgamecategory]).map((h,x)=>{var T;return w.jsxs("span",{children:[x!==0&&", ",h==null?void 0:h._text]},(T=h==null?void 0:h._attributes)==null?void 0:T.objectid)})]})]}),w.jsx(Fx,{style:{color:og(a.rating)},children:a.rating==="No rating"?a.rating:`${a.rating} / 10`})]}),w.jsx("br",{}),(l==null?void 0:l.description)&&w.jsxs(w.Fragment,{children:[w.jsx(ru,{children:"Description"}),w.jsx(Hx,{dangerouslySetInnerHTML:{__html:l.description._text}})]}),(l==null?void 0:l.boardgameexpansion)&&w.jsxs(w.Fragment,{children:[w.jsx(ru,{children:"Expansions"}),w.jsx("ul",{children:(Array.isArray(l.boardgameexpansion)?l.boardgameexpansion:[l.boardgameexpansion]).map(h=>{var x;return w.jsx("li",{children:h._text},(x=h._attributes)==null?void 0:x.objectid)})})]}),(l==null?void 0:l["poll-summary"])&&w.jsxs(w.Fragment,{children:[w.jsx(ru,{children:(g=l["poll-summary"]._attributes)==null?void 0:g.title}),w.jsx("ul",{children:(b=l["poll-summary"].result)==null?void 0:b.map(h=>{var x,T;return w.jsx("li",{children:(x=h._attributes)==null?void 0:x.value},(T=h._attributes)==null?void 0:T.name)})})]})]})})]})]})]})]})},Qx=V.div`
  ${lt.mobile} {
    position: initial;
  }
`,Xx=V.button`
  background: none;
  border: none;
  color: ${({theme:a})=>a.primaryColor};
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;
  width: 100%;
  padding: 0;
  margin-bottom: 20px;
  text-align: left;
  font-weight: 400;

  ${lt.mobile} {
    display: block;
    span {
      margin-left: 8px;
      line-height: 20px;
      font-weight: 400;
    }
  }
`,j0=V.span`
  font-size: 15px;
  color: ${({theme:a})=>a.navText};
`,O0=({username:a,playerCount:l,durationFilter:s,gameCategoryFilter:r,sortOption:c,sortDirection:f})=>{const[m,g]=k.useState(!1),b=()=>{const h=new URLSearchParams;a&&h.set("username",a),l&&h.set("players",l),s&&h.set("duration",s),r&&h.set("gameCategory",r.join(",")),c&&f&&h.set("sorting",`${c}${f}`);const x=`${window.location.origin}/boardgame-app?${h.toString()}`;navigator.clipboard.writeText(x).then(()=>{g(!0),setTimeout(()=>g(!1),4e3)})};return w.jsx(Qx,{children:w.jsxs(Xx,{onClick:b,title:"Share Search Results",children:[w.jsx(yx,{}),m?w.jsx(j0,{children:"Link Copied ✓"}):w.jsx(j0,{children:"Share Search Results"})]})})},$x=V.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Zx=V.label`
  font-size: 14px;
  color: ${({theme:a})=>a.textGray};

  ${lt.mobile} {
    display: none;
  }
`,Jx=V.select`
  height: 36px;
  padding: 0 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: ${({theme:a})=>a.sectionOdd};
  color: ${({theme:a})=>a.text};

  &:focus {
    outline: none;
    border-color: ${({theme:a})=>a.primaryColor};
  }
`,C0=({sortOption:a,sortDirection:l,onSortChange:s,onSortDirectionChange:r})=>w.jsxs($x,{children:[w.jsx(Zx,{htmlFor:"sort-select",children:"Sort By:"}),w.jsxs(Jx,{id:"sort-select",value:`${a}${l}`,onChange:c=>{const f=/(name|minPlayers|maxPlayers|rating)(asc|desc)/i.exec(c.target.value);f&&(s(f[1]),r(f[2]))},children:[w.jsx("option",{value:"nameasc",children:"Name (A → Z)"}),w.jsx("option",{value:"namedesc",children:"Name (Z → A)"}),w.jsx("option",{value:"ratingasc",children:"Rating (High → Low)"}),w.jsx("option",{value:"ratingdesc",children:"Rating (Low → High)"}),w.jsx("option",{value:"minPlayersasc",children:"Min Players (Low → High)"}),w.jsx("option",{value:"minPlayersdesc",children:"Min Players (High → Low)"})]})]}),Px=Lu`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Ix=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`,Wx=V.div`
  border: 6px solid ${({theme:a})=>a.sectionEven};
  border-top: 6px solid ${({theme:a})=>a.primaryColor};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${Px} 1s linear infinite;
`,t5=()=>w.jsx(Ix,{children:w.jsx(Wx,{})}),e5=V.div`
  display: grid;
  align-items: center;
  gap: 10px;
  z-index: 1;
  margin-top: 0 auto;
  justify-content: center;
  img {
    height: 50px;
    margin: 0 auto;
    border-radius: 8px;
  }

  ${lt.mobile} {
    display: grid;
    img {
      height: 50px;
      margin: 0 auto;
    }
  }
`,n5=({username:a})=>w.jsxs(e5,{children:[w.jsx("img",{src:"/images/bgg-logo3.jpg",alt:"BoardGameGeek Logo"}),w.jsx("strong",{children:a})]});function cg(a,l){return function(){return a.apply(l,arguments)}}const{toString:a5}=Object.prototype,{getPrototypeOf:nf}=Object,{iterator:Bu,toStringTag:fg}=Symbol,Hu=(a=>l=>{const s=a5.call(l);return a[s]||(a[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),an=a=>(a=a.toLowerCase(),l=>Hu(l)===a),ku=a=>l=>typeof l===a,{isArray:Ci}=Array,Ai=ku("undefined");function Gl(a){return a!==null&&!Ai(a)&&a.constructor!==null&&!Ai(a.constructor)&&_e(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const dg=an("ArrayBuffer");function i5(a){let l;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?l=ArrayBuffer.isView(a):l=a&&a.buffer&&dg(a.buffer),l}const l5=ku("string"),_e=ku("function"),mg=ku("number"),ql=a=>a!==null&&typeof a=="object",r5=a=>a===!0||a===!1,gu=a=>{if(Hu(a)!=="object")return!1;const l=nf(a);return(l===null||l===Object.prototype||Object.getPrototypeOf(l)===null)&&!(fg in a)&&!(Bu in a)},u5=a=>{if(!ql(a)||Gl(a))return!1;try{return Object.keys(a).length===0&&Object.getPrototypeOf(a)===Object.prototype}catch{return!1}},s5=an("Date"),o5=an("File"),c5=a=>!!(a&&typeof a.uri<"u"),f5=a=>a&&typeof a.getParts<"u",d5=an("Blob"),m5=an("FileList"),p5=a=>ql(a)&&_e(a.pipe);function h5(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const N0=h5(),D0=typeof N0.FormData<"u"?N0.FormData:void 0,g5=a=>{let l;return a&&(D0&&a instanceof D0||_e(a.append)&&((l=Hu(a))==="formdata"||l==="object"&&_e(a.toString)&&a.toString()==="[object FormData]"))},y5=an("URLSearchParams"),[b5,v5,x5,E5]=["ReadableStream","Request","Response","Headers"].map(an),w5=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Yl(a,l,{allOwnKeys:s=!1}={}){if(a===null||typeof a>"u")return;let r,c;if(typeof a!="object"&&(a=[a]),Ci(a))for(r=0,c=a.length;r<c;r++)l.call(null,a[r],r,a);else{if(Gl(a))return;const f=s?Object.getOwnPropertyNames(a):Object.keys(a),m=f.length;let g;for(r=0;r<m;r++)g=f[r],l.call(null,a[g],g,a)}}function pg(a,l){if(Gl(a))return null;l=l.toLowerCase();const s=Object.keys(a);let r=s.length,c;for(;r-- >0;)if(c=s[r],l===c.toLowerCase())return c;return null}const Na=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,hg=a=>!Ai(a)&&a!==Na;function Bc(){const{caseless:a,skipUndefined:l}=hg(this)&&this||{},s={},r=(c,f)=>{if(f==="__proto__"||f==="constructor"||f==="prototype")return;const m=a&&pg(s,f)||f;gu(s[m])&&gu(c)?s[m]=Bc(s[m],c):gu(c)?s[m]=Bc({},c):Ci(c)?s[m]=c.slice():(!l||!Ai(c))&&(s[m]=c)};for(let c=0,f=arguments.length;c<f;c++)arguments[c]&&Yl(arguments[c],r);return s}const S5=(a,l,s,{allOwnKeys:r}={})=>(Yl(l,(c,f)=>{s&&_e(c)?Object.defineProperty(a,f,{value:cg(c,s),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(a,f,{value:c,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),a),_5=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),T5=(a,l,s,r)=>{a.prototype=Object.create(l.prototype,r),Object.defineProperty(a.prototype,"constructor",{value:a,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(a,"super",{value:l.prototype}),s&&Object.assign(a.prototype,s)},A5=(a,l,s,r)=>{let c,f,m;const g={};if(l=l||{},a==null)return l;do{for(c=Object.getOwnPropertyNames(a),f=c.length;f-- >0;)m=c[f],(!r||r(m,a,l))&&!g[m]&&(l[m]=a[m],g[m]=!0);a=s!==!1&&nf(a)}while(a&&(!s||s(a,l))&&a!==Object.prototype);return l},R5=(a,l,s)=>{a=String(a),(s===void 0||s>a.length)&&(s=a.length),s-=l.length;const r=a.indexOf(l,s);return r!==-1&&r===s},j5=a=>{if(!a)return null;if(Ci(a))return a;let l=a.length;if(!mg(l))return null;const s=new Array(l);for(;l-- >0;)s[l]=a[l];return s},O5=(a=>l=>a&&l instanceof a)(typeof Uint8Array<"u"&&nf(Uint8Array)),C5=(a,l)=>{const r=(a&&a[Bu]).call(a);let c;for(;(c=r.next())&&!c.done;){const f=c.value;l.call(a,f[0],f[1])}},N5=(a,l)=>{let s;const r=[];for(;(s=a.exec(l))!==null;)r.push(s);return r},D5=an("HTMLFormElement"),z5=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,r,c){return r.toUpperCase()+c}),z0=(({hasOwnProperty:a})=>(l,s)=>a.call(l,s))(Object.prototype),M5=an("RegExp"),gg=(a,l)=>{const s=Object.getOwnPropertyDescriptors(a),r={};Yl(s,(c,f)=>{let m;(m=l(c,f,a))!==!1&&(r[f]=m||c)}),Object.defineProperties(a,r)},U5=a=>{gg(a,(l,s)=>{if(_e(a)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const r=a[s];if(_e(r)){if(l.enumerable=!1,"writable"in l){l.writable=!1;return}l.set||(l.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},L5=(a,l)=>{const s={},r=c=>{c.forEach(f=>{s[f]=!0})};return Ci(a)?r(a):r(String(a).split(l)),s},B5=()=>{},H5=(a,l)=>a!=null&&Number.isFinite(a=+a)?a:l;function k5(a){return!!(a&&_e(a.append)&&a[fg]==="FormData"&&a[Bu])}const G5=a=>{const l=new Array(10),s=(r,c)=>{if(ql(r)){if(l.indexOf(r)>=0)return;if(Gl(r))return r;if(!("toJSON"in r)){l[c]=r;const f=Ci(r)?[]:{};return Yl(r,(m,g)=>{const b=s(m,c+1);!Ai(b)&&(f[g]=b)}),l[c]=void 0,f}}return r};return s(a,0)},q5=an("AsyncFunction"),Y5=a=>a&&(ql(a)||_e(a))&&_e(a.then)&&_e(a.catch),yg=((a,l)=>a?setImmediate:l?((s,r)=>(Na.addEventListener("message",({source:c,data:f})=>{c===Na&&f===s&&r.length&&r.shift()()},!1),c=>{r.push(c),Na.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",_e(Na.postMessage)),F5=typeof queueMicrotask<"u"?queueMicrotask.bind(Na):typeof process<"u"&&process.nextTick||yg,K5=a=>a!=null&&_e(a[Bu]),Y={isArray:Ci,isArrayBuffer:dg,isBuffer:Gl,isFormData:g5,isArrayBufferView:i5,isString:l5,isNumber:mg,isBoolean:r5,isObject:ql,isPlainObject:gu,isEmptyObject:u5,isReadableStream:b5,isRequest:v5,isResponse:x5,isHeaders:E5,isUndefined:Ai,isDate:s5,isFile:o5,isReactNativeBlob:c5,isReactNative:f5,isBlob:d5,isRegExp:M5,isFunction:_e,isStream:p5,isURLSearchParams:y5,isTypedArray:O5,isFileList:m5,forEach:Yl,merge:Bc,extend:S5,trim:w5,stripBOM:_5,inherits:T5,toFlatObject:A5,kindOf:Hu,kindOfTest:an,endsWith:R5,toArray:j5,forEachEntry:C5,matchAll:N5,isHTMLForm:D5,hasOwnProperty:z0,hasOwnProp:z0,reduceDescriptors:gg,freezeMethods:U5,toObjectSet:L5,toCamelCase:z5,noop:B5,toFiniteNumber:H5,findKey:pg,global:Na,isContextDefined:hg,isSpecCompliantForm:k5,toJSONObject:G5,isAsyncFn:q5,isThenable:Y5,setImmediate:yg,asap:F5,isIterable:K5};let mt=class bg extends Error{static from(l,s,r,c,f,m){const g=new bg(l.message,s||l.code,r,c,f);return g.cause=l,g.name=l.name,l.status!=null&&g.status==null&&(g.status=l.status),m&&Object.assign(g,m),g}constructor(l,s,r,c,f){super(l),Object.defineProperty(this,"message",{value:l,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,s&&(this.code=s),r&&(this.config=r),c&&(this.request=c),f&&(this.response=f,this.status=f.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Y.toJSONObject(this.config),code:this.code,status:this.status}}};mt.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";mt.ERR_BAD_OPTION="ERR_BAD_OPTION";mt.ECONNABORTED="ECONNABORTED";mt.ETIMEDOUT="ETIMEDOUT";mt.ERR_NETWORK="ERR_NETWORK";mt.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";mt.ERR_DEPRECATED="ERR_DEPRECATED";mt.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";mt.ERR_BAD_REQUEST="ERR_BAD_REQUEST";mt.ERR_CANCELED="ERR_CANCELED";mt.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";mt.ERR_INVALID_URL="ERR_INVALID_URL";const V5=null;function Hc(a){return Y.isPlainObject(a)||Y.isArray(a)}function vg(a){return Y.endsWith(a,"[]")?a.slice(0,-2):a}function fc(a,l,s){return a?a.concat(l).map(function(c,f){return c=vg(c),!s&&f?"["+c+"]":c}).join(s?".":""):l}function Q5(a){return Y.isArray(a)&&!a.some(Hc)}const X5=Y.toFlatObject(Y,{},null,function(l){return/^is[A-Z]/.test(l)});function Gu(a,l,s){if(!Y.isObject(a))throw new TypeError("target must be an object");l=l||new FormData,s=Y.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(G,U){return!Y.isUndefined(U[G])});const r=s.metaTokens,c=s.visitor||x,f=s.dots,m=s.indexes,b=(s.Blob||typeof Blob<"u"&&Blob)&&Y.isSpecCompliantForm(l);if(!Y.isFunction(c))throw new TypeError("visitor must be a function");function h(z){if(z===null)return"";if(Y.isDate(z))return z.toISOString();if(Y.isBoolean(z))return z.toString();if(!b&&Y.isBlob(z))throw new mt("Blob is not supported. Use a Buffer instead.");return Y.isArrayBuffer(z)||Y.isTypedArray(z)?b&&typeof Blob=="function"?new Blob([z]):Buffer.from(z):z}function x(z,G,U){let R=z;if(Y.isReactNative(l)&&Y.isReactNativeBlob(z))return l.append(fc(U,G,f),h(z)),!1;if(z&&!U&&typeof z=="object"){if(Y.endsWith(G,"{}"))G=r?G:G.slice(0,-2),z=JSON.stringify(z);else if(Y.isArray(z)&&Q5(z)||(Y.isFileList(z)||Y.endsWith(G,"[]"))&&(R=Y.toArray(z)))return G=vg(G),R.forEach(function(S,v){!(Y.isUndefined(S)||S===null)&&l.append(m===!0?fc([G],v,f):m===null?G:G+"[]",h(S))}),!1}return Hc(z)?!0:(l.append(fc(U,G,f),h(z)),!1)}const T=[],B=Object.assign(X5,{defaultVisitor:x,convertValue:h,isVisitable:Hc});function K(z,G){if(!Y.isUndefined(z)){if(T.indexOf(z)!==-1)throw Error("Circular reference detected in "+G.join("."));T.push(z),Y.forEach(z,function(R,M){(!(Y.isUndefined(R)||R===null)&&c.call(l,R,Y.isString(M)?M.trim():M,G,B))===!0&&K(R,G?G.concat(M):[M])}),T.pop()}}if(!Y.isObject(a))throw new TypeError("data must be an object");return K(a),l}function M0(a){const l={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(r){return l[r]})}function af(a,l){this._pairs=[],a&&Gu(a,this,l)}const xg=af.prototype;xg.append=function(l,s){this._pairs.push([l,s])};xg.toString=function(l){const s=l?function(r){return l.call(this,r,M0)}:M0;return this._pairs.map(function(c){return s(c[0])+"="+s(c[1])},"").join("&")};function $5(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Eg(a,l,s){if(!l)return a;const r=s&&s.encode||$5,c=Y.isFunction(s)?{serialize:s}:s,f=c&&c.serialize;let m;if(f?m=f(l,c):m=Y.isURLSearchParams(l)?l.toString():new af(l,c).toString(r),m){const g=a.indexOf("#");g!==-1&&(a=a.slice(0,g)),a+=(a.indexOf("?")===-1?"?":"&")+m}return a}class U0{constructor(){this.handlers=[]}use(l,s,r){return this.handlers.push({fulfilled:l,rejected:s,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(l){this.handlers[l]&&(this.handlers[l]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(l){Y.forEach(this.handlers,function(r){r!==null&&l(r)})}}const lf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Z5=typeof URLSearchParams<"u"?URLSearchParams:af,J5=typeof FormData<"u"?FormData:null,P5=typeof Blob<"u"?Blob:null,I5={isBrowser:!0,classes:{URLSearchParams:Z5,FormData:J5,Blob:P5},protocols:["http","https","file","blob","url","data"]},rf=typeof window<"u"&&typeof document<"u",kc=typeof navigator=="object"&&navigator||void 0,W5=rf&&(!kc||["ReactNative","NativeScript","NS"].indexOf(kc.product)<0),t4=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",e4=rf&&window.location.href||"http://localhost",n4=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:rf,hasStandardBrowserEnv:W5,hasStandardBrowserWebWorkerEnv:t4,navigator:kc,origin:e4},Symbol.toStringTag,{value:"Module"})),ye={...n4,...I5};function a4(a,l){return Gu(a,new ye.classes.URLSearchParams,{visitor:function(s,r,c,f){return ye.isNode&&Y.isBuffer(s)?(this.append(r,s.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)},...l})}function i4(a){return Y.matchAll(/\w+|\[(\w*)]/g,a).map(l=>l[0]==="[]"?"":l[1]||l[0])}function l4(a){const l={},s=Object.keys(a);let r;const c=s.length;let f;for(r=0;r<c;r++)f=s[r],l[f]=a[f];return l}function wg(a){function l(s,r,c,f){let m=s[f++];if(m==="__proto__")return!0;const g=Number.isFinite(+m),b=f>=s.length;return m=!m&&Y.isArray(c)?c.length:m,b?(Y.hasOwnProp(c,m)?c[m]=[c[m],r]:c[m]=r,!g):((!c[m]||!Y.isObject(c[m]))&&(c[m]=[]),l(s,r,c[m],f)&&Y.isArray(c[m])&&(c[m]=l4(c[m])),!g)}if(Y.isFormData(a)&&Y.isFunction(a.entries)){const s={};return Y.forEachEntry(a,(r,c)=>{l(i4(r),c,s,0)}),s}return null}function r4(a,l,s){if(Y.isString(a))try{return(l||JSON.parse)(a),Y.trim(a)}catch(r){if(r.name!=="SyntaxError")throw r}return(s||JSON.stringify)(a)}const Fl={transitional:lf,adapter:["xhr","http","fetch"],transformRequest:[function(l,s){const r=s.getContentType()||"",c=r.indexOf("application/json")>-1,f=Y.isObject(l);if(f&&Y.isHTMLForm(l)&&(l=new FormData(l)),Y.isFormData(l))return c?JSON.stringify(wg(l)):l;if(Y.isArrayBuffer(l)||Y.isBuffer(l)||Y.isStream(l)||Y.isFile(l)||Y.isBlob(l)||Y.isReadableStream(l))return l;if(Y.isArrayBufferView(l))return l.buffer;if(Y.isURLSearchParams(l))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),l.toString();let g;if(f){if(r.indexOf("application/x-www-form-urlencoded")>-1)return a4(l,this.formSerializer).toString();if((g=Y.isFileList(l))||r.indexOf("multipart/form-data")>-1){const b=this.env&&this.env.FormData;return Gu(g?{"files[]":l}:l,b&&new b,this.formSerializer)}}return f||c?(s.setContentType("application/json",!1),r4(l)):l}],transformResponse:[function(l){const s=this.transitional||Fl.transitional,r=s&&s.forcedJSONParsing,c=this.responseType==="json";if(Y.isResponse(l)||Y.isReadableStream(l))return l;if(l&&Y.isString(l)&&(r&&!this.responseType||c)){const m=!(s&&s.silentJSONParsing)&&c;try{return JSON.parse(l,this.parseReviver)}catch(g){if(m)throw g.name==="SyntaxError"?mt.from(g,mt.ERR_BAD_RESPONSE,this,null,this.response):g}}return l}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ye.classes.FormData,Blob:ye.classes.Blob},validateStatus:function(l){return l>=200&&l<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Y.forEach(["delete","get","head","post","put","patch"],a=>{Fl.headers[a]={}});const u4=Y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),s4=a=>{const l={};let s,r,c;return a&&a.split(`
`).forEach(function(m){c=m.indexOf(":"),s=m.substring(0,c).trim().toLowerCase(),r=m.substring(c+1).trim(),!(!s||l[s]&&u4[s])&&(s==="set-cookie"?l[s]?l[s].push(r):l[s]=[r]:l[s]=l[s]?l[s]+", "+r:r)}),l},L0=Symbol("internals");function Cl(a){return a&&String(a).trim().toLowerCase()}function yu(a){return a===!1||a==null?a:Y.isArray(a)?a.map(yu):String(a)}function o4(a){const l=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=s.exec(a);)l[r[1]]=r[2];return l}const c4=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function dc(a,l,s,r,c){if(Y.isFunction(r))return r.call(this,l,s);if(c&&(l=s),!!Y.isString(l)){if(Y.isString(r))return l.indexOf(r)!==-1;if(Y.isRegExp(r))return r.test(l)}}function f4(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(l,s,r)=>s.toUpperCase()+r)}function d4(a,l){const s=Y.toCamelCase(" "+l);["get","set","has"].forEach(r=>{Object.defineProperty(a,r+s,{value:function(c,f,m){return this[r].call(this,l,c,f,m)},configurable:!0})})}let Te=class{constructor(l){l&&this.set(l)}set(l,s,r){const c=this;function f(g,b,h){const x=Cl(b);if(!x)throw new Error("header name must be a non-empty string");const T=Y.findKey(c,x);(!T||c[T]===void 0||h===!0||h===void 0&&c[T]!==!1)&&(c[T||b]=yu(g))}const m=(g,b)=>Y.forEach(g,(h,x)=>f(h,x,b));if(Y.isPlainObject(l)||l instanceof this.constructor)m(l,s);else if(Y.isString(l)&&(l=l.trim())&&!c4(l))m(s4(l),s);else if(Y.isObject(l)&&Y.isIterable(l)){let g={},b,h;for(const x of l){if(!Y.isArray(x))throw TypeError("Object iterator must return a key-value pair");g[h=x[0]]=(b=g[h])?Y.isArray(b)?[...b,x[1]]:[b,x[1]]:x[1]}m(g,s)}else l!=null&&f(s,l,r);return this}get(l,s){if(l=Cl(l),l){const r=Y.findKey(this,l);if(r){const c=this[r];if(!s)return c;if(s===!0)return o4(c);if(Y.isFunction(s))return s.call(this,c,r);if(Y.isRegExp(s))return s.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(l,s){if(l=Cl(l),l){const r=Y.findKey(this,l);return!!(r&&this[r]!==void 0&&(!s||dc(this,this[r],r,s)))}return!1}delete(l,s){const r=this;let c=!1;function f(m){if(m=Cl(m),m){const g=Y.findKey(r,m);g&&(!s||dc(r,r[g],g,s))&&(delete r[g],c=!0)}}return Y.isArray(l)?l.forEach(f):f(l),c}clear(l){const s=Object.keys(this);let r=s.length,c=!1;for(;r--;){const f=s[r];(!l||dc(this,this[f],f,l,!0))&&(delete this[f],c=!0)}return c}normalize(l){const s=this,r={};return Y.forEach(this,(c,f)=>{const m=Y.findKey(r,f);if(m){s[m]=yu(c),delete s[f];return}const g=l?f4(f):String(f).trim();g!==f&&delete s[f],s[g]=yu(c),r[g]=!0}),this}concat(...l){return this.constructor.concat(this,...l)}toJSON(l){const s=Object.create(null);return Y.forEach(this,(r,c)=>{r!=null&&r!==!1&&(s[c]=l&&Y.isArray(r)?r.join(", "):r)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([l,s])=>l+": "+s).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(l){return l instanceof this?l:new this(l)}static concat(l,...s){const r=new this(l);return s.forEach(c=>r.set(c)),r}static accessor(l){const r=(this[L0]=this[L0]={accessors:{}}).accessors,c=this.prototype;function f(m){const g=Cl(m);r[g]||(d4(c,m),r[g]=!0)}return Y.isArray(l)?l.forEach(f):f(l),this}};Te.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Y.reduceDescriptors(Te.prototype,({value:a},l)=>{let s=l[0].toUpperCase()+l.slice(1);return{get:()=>a,set(r){this[s]=r}}});Y.freezeMethods(Te);function mc(a,l){const s=this||Fl,r=l||s,c=Te.from(r.headers);let f=r.data;return Y.forEach(a,function(g){f=g.call(s,f,c.normalize(),l?l.status:void 0)}),c.normalize(),f}function Sg(a){return!!(a&&a.__CANCEL__)}let Kl=class extends mt{constructor(l,s,r){super(l??"canceled",mt.ERR_CANCELED,s,r),this.name="CanceledError",this.__CANCEL__=!0}};function _g(a,l,s){const r=s.config.validateStatus;!s.status||!r||r(s.status)?a(s):l(new mt("Request failed with status code "+s.status,[mt.ERR_BAD_REQUEST,mt.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}function m4(a){const l=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return l&&l[1]||""}function p4(a,l){a=a||10;const s=new Array(a),r=new Array(a);let c=0,f=0,m;return l=l!==void 0?l:1e3,function(b){const h=Date.now(),x=r[f];m||(m=h),s[c]=b,r[c]=h;let T=f,B=0;for(;T!==c;)B+=s[T++],T=T%a;if(c=(c+1)%a,c===f&&(f=(f+1)%a),h-m<l)return;const K=x&&h-x;return K?Math.round(B*1e3/K):void 0}}function h4(a,l){let s=0,r=1e3/l,c,f;const m=(h,x=Date.now())=>{s=x,c=null,f&&(clearTimeout(f),f=null),a(...h)};return[(...h)=>{const x=Date.now(),T=x-s;T>=r?m(h,x):(c=h,f||(f=setTimeout(()=>{f=null,m(c)},r-T)))},()=>c&&m(c)]}const Ru=(a,l,s=3)=>{let r=0;const c=p4(50,250);return h4(f=>{const m=f.loaded,g=f.lengthComputable?f.total:void 0,b=m-r,h=c(b),x=m<=g;r=m;const T={loaded:m,total:g,progress:g?m/g:void 0,bytes:b,rate:h||void 0,estimated:h&&g&&x?(g-m)/h:void 0,event:f,lengthComputable:g!=null,[l?"download":"upload"]:!0};a(T)},s)},B0=(a,l)=>{const s=a!=null;return[r=>l[0]({lengthComputable:s,total:a,loaded:r}),l[1]]},H0=a=>(...l)=>Y.asap(()=>a(...l)),g4=ye.hasStandardBrowserEnv?((a,l)=>s=>(s=new URL(s,ye.origin),a.protocol===s.protocol&&a.host===s.host&&(l||a.port===s.port)))(new URL(ye.origin),ye.navigator&&/(msie|trident)/i.test(ye.navigator.userAgent)):()=>!0,y4=ye.hasStandardBrowserEnv?{write(a,l,s,r,c,f,m){if(typeof document>"u")return;const g=[`${a}=${encodeURIComponent(l)}`];Y.isNumber(s)&&g.push(`expires=${new Date(s).toUTCString()}`),Y.isString(r)&&g.push(`path=${r}`),Y.isString(c)&&g.push(`domain=${c}`),f===!0&&g.push("secure"),Y.isString(m)&&g.push(`SameSite=${m}`),document.cookie=g.join("; ")},read(a){if(typeof document>"u")return null;const l=document.cookie.match(new RegExp("(?:^|; )"+a+"=([^;]*)"));return l?decodeURIComponent(l[1]):null},remove(a){this.write(a,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function b4(a){return typeof a!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function v4(a,l){return l?a.replace(/\/?\/$/,"")+"/"+l.replace(/^\/+/,""):a}function Tg(a,l,s){let r=!b4(l);return a&&(r||s==!1)?v4(a,l):l}const k0=a=>a instanceof Te?{...a}:a;function La(a,l){l=l||{};const s={};function r(h,x,T,B){return Y.isPlainObject(h)&&Y.isPlainObject(x)?Y.merge.call({caseless:B},h,x):Y.isPlainObject(x)?Y.merge({},x):Y.isArray(x)?x.slice():x}function c(h,x,T,B){if(Y.isUndefined(x)){if(!Y.isUndefined(h))return r(void 0,h,T,B)}else return r(h,x,T,B)}function f(h,x){if(!Y.isUndefined(x))return r(void 0,x)}function m(h,x){if(Y.isUndefined(x)){if(!Y.isUndefined(h))return r(void 0,h)}else return r(void 0,x)}function g(h,x,T){if(T in l)return r(h,x);if(T in a)return r(void 0,h)}const b={url:f,method:f,data:f,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutMessage:m,withCredentials:m,withXSRFToken:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,responseEncoding:m,validateStatus:g,headers:(h,x,T)=>c(k0(h),k0(x),T,!0)};return Y.forEach(Object.keys({...a,...l}),function(x){if(x==="__proto__"||x==="constructor"||x==="prototype")return;const T=Y.hasOwnProp(b,x)?b[x]:c,B=T(a[x],l[x],x);Y.isUndefined(B)&&T!==g||(s[x]=B)}),s}const Ag=a=>{const l=La({},a);let{data:s,withXSRFToken:r,xsrfHeaderName:c,xsrfCookieName:f,headers:m,auth:g}=l;if(l.headers=m=Te.from(m),l.url=Eg(Tg(l.baseURL,l.url,l.allowAbsoluteUrls),a.params,a.paramsSerializer),g&&m.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):""))),Y.isFormData(s)){if(ye.hasStandardBrowserEnv||ye.hasStandardBrowserWebWorkerEnv)m.setContentType(void 0);else if(Y.isFunction(s.getHeaders)){const b=s.getHeaders(),h=["content-type","content-length"];Object.entries(b).forEach(([x,T])=>{h.includes(x.toLowerCase())&&m.set(x,T)})}}if(ye.hasStandardBrowserEnv&&(r&&Y.isFunction(r)&&(r=r(l)),r||r!==!1&&g4(l.url))){const b=c&&f&&y4.read(f);b&&m.set(c,b)}return l},x4=typeof XMLHttpRequest<"u",E4=x4&&function(a){return new Promise(function(s,r){const c=Ag(a);let f=c.data;const m=Te.from(c.headers).normalize();let{responseType:g,onUploadProgress:b,onDownloadProgress:h}=c,x,T,B,K,z;function G(){K&&K(),z&&z(),c.cancelToken&&c.cancelToken.unsubscribe(x),c.signal&&c.signal.removeEventListener("abort",x)}let U=new XMLHttpRequest;U.open(c.method.toUpperCase(),c.url,!0),U.timeout=c.timeout;function R(){if(!U)return;const S=Te.from("getAllResponseHeaders"in U&&U.getAllResponseHeaders()),D={data:!g||g==="text"||g==="json"?U.responseText:U.response,status:U.status,statusText:U.statusText,headers:S,config:a,request:U};_g(function(Q){s(Q),G()},function(Q){r(Q),G()},D),U=null}"onloadend"in U?U.onloadend=R:U.onreadystatechange=function(){!U||U.readyState!==4||U.status===0&&!(U.responseURL&&U.responseURL.indexOf("file:")===0)||setTimeout(R)},U.onabort=function(){U&&(r(new mt("Request aborted",mt.ECONNABORTED,a,U)),U=null)},U.onerror=function(v){const D=v&&v.message?v.message:"Network Error",X=new mt(D,mt.ERR_NETWORK,a,U);X.event=v||null,r(X),U=null},U.ontimeout=function(){let v=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const D=c.transitional||lf;c.timeoutErrorMessage&&(v=c.timeoutErrorMessage),r(new mt(v,D.clarifyTimeoutError?mt.ETIMEDOUT:mt.ECONNABORTED,a,U)),U=null},f===void 0&&m.setContentType(null),"setRequestHeader"in U&&Y.forEach(m.toJSON(),function(v,D){U.setRequestHeader(D,v)}),Y.isUndefined(c.withCredentials)||(U.withCredentials=!!c.withCredentials),g&&g!=="json"&&(U.responseType=c.responseType),h&&([B,z]=Ru(h,!0),U.addEventListener("progress",B)),b&&U.upload&&([T,K]=Ru(b),U.upload.addEventListener("progress",T),U.upload.addEventListener("loadend",K)),(c.cancelToken||c.signal)&&(x=S=>{U&&(r(!S||S.type?new Kl(null,a,U):S),U.abort(),U=null)},c.cancelToken&&c.cancelToken.subscribe(x),c.signal&&(c.signal.aborted?x():c.signal.addEventListener("abort",x)));const M=m4(c.url);if(M&&ye.protocols.indexOf(M)===-1){r(new mt("Unsupported protocol "+M+":",mt.ERR_BAD_REQUEST,a));return}U.send(f||null)})},w4=(a,l)=>{const{length:s}=a=a?a.filter(Boolean):[];if(l||s){let r=new AbortController,c;const f=function(h){if(!c){c=!0,g();const x=h instanceof Error?h:this.reason;r.abort(x instanceof mt?x:new Kl(x instanceof Error?x.message:x))}};let m=l&&setTimeout(()=>{m=null,f(new mt(`timeout of ${l}ms exceeded`,mt.ETIMEDOUT))},l);const g=()=>{a&&(m&&clearTimeout(m),m=null,a.forEach(h=>{h.unsubscribe?h.unsubscribe(f):h.removeEventListener("abort",f)}),a=null)};a.forEach(h=>h.addEventListener("abort",f));const{signal:b}=r;return b.unsubscribe=()=>Y.asap(g),b}},S4=function*(a,l){let s=a.byteLength;if(s<l){yield a;return}let r=0,c;for(;r<s;)c=r+l,yield a.slice(r,c),r=c},_4=async function*(a,l){for await(const s of T4(a))yield*S4(s,l)},T4=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const l=a.getReader();try{for(;;){const{done:s,value:r}=await l.read();if(s)break;yield r}}finally{await l.cancel()}},G0=(a,l,s,r)=>{const c=_4(a,l);let f=0,m,g=b=>{m||(m=!0,r&&r(b))};return new ReadableStream({async pull(b){try{const{done:h,value:x}=await c.next();if(h){g(),b.close();return}let T=x.byteLength;if(s){let B=f+=T;s(B)}b.enqueue(new Uint8Array(x))}catch(h){throw g(h),h}},cancel(b){return g(b),c.return()}},{highWaterMark:2})},q0=64*1024,{isFunction:uu}=Y,A4=(({Request:a,Response:l})=>({Request:a,Response:l}))(Y.global),{ReadableStream:Y0,TextEncoder:F0}=Y.global,K0=(a,...l)=>{try{return!!a(...l)}catch{return!1}},R4=a=>{a=Y.merge.call({skipUndefined:!0},A4,a);const{fetch:l,Request:s,Response:r}=a,c=l?uu(l):typeof fetch=="function",f=uu(s),m=uu(r);if(!c)return!1;const g=c&&uu(Y0),b=c&&(typeof F0=="function"?(z=>G=>z.encode(G))(new F0):async z=>new Uint8Array(await new s(z).arrayBuffer())),h=f&&g&&K0(()=>{let z=!1;const G=new s(ye.origin,{body:new Y0,method:"POST",get duplex(){return z=!0,"half"}}).headers.has("Content-Type");return z&&!G}),x=m&&g&&K0(()=>Y.isReadableStream(new r("").body)),T={stream:x&&(z=>z.body)};c&&["text","arrayBuffer","blob","formData","stream"].forEach(z=>{!T[z]&&(T[z]=(G,U)=>{let R=G&&G[z];if(R)return R.call(G);throw new mt(`Response type '${z}' is not supported`,mt.ERR_NOT_SUPPORT,U)})});const B=async z=>{if(z==null)return 0;if(Y.isBlob(z))return z.size;if(Y.isSpecCompliantForm(z))return(await new s(ye.origin,{method:"POST",body:z}).arrayBuffer()).byteLength;if(Y.isArrayBufferView(z)||Y.isArrayBuffer(z))return z.byteLength;if(Y.isURLSearchParams(z)&&(z=z+""),Y.isString(z))return(await b(z)).byteLength},K=async(z,G)=>{const U=Y.toFiniteNumber(z.getContentLength());return U??B(G)};return async z=>{let{url:G,method:U,data:R,signal:M,cancelToken:S,timeout:v,onDownloadProgress:D,onUploadProgress:X,responseType:Q,headers:et,withCredentials:_="same-origin",fetchOptions:tt}=Ag(z),Et=l||fetch;Q=Q?(Q+"").toLowerCase():"text";let ft=w4([M,S&&S.toAbortSignal()],v),Tt=null;const Dt=ft&&ft.unsubscribe&&(()=>{ft.unsubscribe()});let St;try{if(X&&h&&U!=="get"&&U!=="head"&&(St=await K(et,R))!==0){let J=new s(G,{method:"POST",body:R,duplex:"half"}),it;if(Y.isFormData(R)&&(it=J.headers.get("content-type"))&&et.setContentType(it),J.body){const[st,at]=B0(St,Ru(H0(X)));R=G0(J.body,q0,st,at)}}Y.isString(_)||(_=_?"include":"omit");const W=f&&"credentials"in s.prototype,nt={...tt,signal:ft,method:U.toUpperCase(),headers:et.normalize().toJSON(),body:R,duplex:"half",credentials:W?_:void 0};Tt=f&&new s(G,nt);let rt=await(f?Et(Tt,tt):Et(G,nt));const bt=x&&(Q==="stream"||Q==="response");if(x&&(D||bt&&Dt)){const J={};["status","statusText","headers"].forEach(ht=>{J[ht]=rt[ht]});const it=Y.toFiniteNumber(rt.headers.get("content-length")),[st,at]=D&&B0(it,Ru(H0(D),!0))||[];rt=new r(G0(rt.body,q0,st,()=>{at&&at(),Dt&&Dt()}),J)}Q=Q||"text";let j=await T[Y.findKey(T,Q)||"text"](rt,z);return!bt&&Dt&&Dt(),await new Promise((J,it)=>{_g(J,it,{data:j,headers:Te.from(rt.headers),status:rt.status,statusText:rt.statusText,config:z,request:Tt})})}catch(W){throw Dt&&Dt(),W&&W.name==="TypeError"&&/Load failed|fetch/i.test(W.message)?Object.assign(new mt("Network Error",mt.ERR_NETWORK,z,Tt,W&&W.response),{cause:W.cause||W}):mt.from(W,W&&W.code,z,Tt,W&&W.response)}}},j4=new Map,Rg=a=>{let l=a&&a.env||{};const{fetch:s,Request:r,Response:c}=l,f=[r,c,s];let m=f.length,g=m,b,h,x=j4;for(;g--;)b=f[g],h=x.get(b),h===void 0&&x.set(b,h=g?new Map:R4(l)),x=h;return h};Rg();const uf={http:V5,xhr:E4,fetch:{get:Rg}};Y.forEach(uf,(a,l)=>{if(a){try{Object.defineProperty(a,"name",{value:l})}catch{}Object.defineProperty(a,"adapterName",{value:l})}});const V0=a=>`- ${a}`,O4=a=>Y.isFunction(a)||a===null||a===!1;function C4(a,l){a=Y.isArray(a)?a:[a];const{length:s}=a;let r,c;const f={};for(let m=0;m<s;m++){r=a[m];let g;if(c=r,!O4(r)&&(c=uf[(g=String(r)).toLowerCase()],c===void 0))throw new mt(`Unknown adapter '${g}'`);if(c&&(Y.isFunction(c)||(c=c.get(l))))break;f[g||"#"+m]=c}if(!c){const m=Object.entries(f).map(([b,h])=>`adapter ${b} `+(h===!1?"is not supported by the environment":"is not available in the build"));let g=s?m.length>1?`since :
`+m.map(V0).join(`
`):" "+V0(m[0]):"as no adapter specified";throw new mt("There is no suitable adapter to dispatch the request "+g,"ERR_NOT_SUPPORT")}return c}const jg={getAdapter:C4,adapters:uf};function pc(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new Kl(null,a)}function Q0(a){return pc(a),a.headers=Te.from(a.headers),a.data=mc.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),jg.getAdapter(a.adapter||Fl.adapter,a)(a).then(function(r){return pc(a),r.data=mc.call(a,a.transformResponse,r),r.headers=Te.from(r.headers),r},function(r){return Sg(r)||(pc(a),r&&r.response&&(r.response.data=mc.call(a,a.transformResponse,r.response),r.response.headers=Te.from(r.response.headers))),Promise.reject(r)})}const Og="1.13.6",qu={};["object","boolean","number","function","string","symbol"].forEach((a,l)=>{qu[a]=function(r){return typeof r===a||"a"+(l<1?"n ":" ")+a}});const X0={};qu.transitional=function(l,s,r){function c(f,m){return"[Axios v"+Og+"] Transitional option '"+f+"'"+m+(r?". "+r:"")}return(f,m,g)=>{if(l===!1)throw new mt(c(m," has been removed"+(s?" in "+s:"")),mt.ERR_DEPRECATED);return s&&!X0[m]&&(X0[m]=!0,console.warn(c(m," has been deprecated since v"+s+" and will be removed in the near future"))),l?l(f,m,g):!0}};qu.spelling=function(l){return(s,r)=>(console.warn(`${r} is likely a misspelling of ${l}`),!0)};function N4(a,l,s){if(typeof a!="object")throw new mt("options must be an object",mt.ERR_BAD_OPTION_VALUE);const r=Object.keys(a);let c=r.length;for(;c-- >0;){const f=r[c],m=l[f];if(m){const g=a[f],b=g===void 0||m(g,f,a);if(b!==!0)throw new mt("option "+f+" must be "+b,mt.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new mt("Unknown option "+f,mt.ERR_BAD_OPTION)}}const bu={assertOptions:N4,validators:qu},$e=bu.validators;let za=class{constructor(l){this.defaults=l||{},this.interceptors={request:new U0,response:new U0}}async request(l,s){try{return await this._request(l,s)}catch(r){if(r instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const f=c.stack?c.stack.replace(/^.+\n/,""):"";try{r.stack?f&&!String(r.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+f):r.stack=f}catch{}}throw r}}_request(l,s){typeof l=="string"?(s=s||{},s.url=l):s=l||{},s=La(this.defaults,s);const{transitional:r,paramsSerializer:c,headers:f}=s;r!==void 0&&bu.assertOptions(r,{silentJSONParsing:$e.transitional($e.boolean),forcedJSONParsing:$e.transitional($e.boolean),clarifyTimeoutError:$e.transitional($e.boolean),legacyInterceptorReqResOrdering:$e.transitional($e.boolean)},!1),c!=null&&(Y.isFunction(c)?s.paramsSerializer={serialize:c}:bu.assertOptions(c,{encode:$e.function,serialize:$e.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),bu.assertOptions(s,{baseUrl:$e.spelling("baseURL"),withXsrfToken:$e.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let m=f&&Y.merge(f.common,f[s.method]);f&&Y.forEach(["delete","get","head","post","put","patch","common"],z=>{delete f[z]}),s.headers=Te.concat(m,f);const g=[];let b=!0;this.interceptors.request.forEach(function(G){if(typeof G.runWhen=="function"&&G.runWhen(s)===!1)return;b=b&&G.synchronous;const U=s.transitional||lf;U&&U.legacyInterceptorReqResOrdering?g.unshift(G.fulfilled,G.rejected):g.push(G.fulfilled,G.rejected)});const h=[];this.interceptors.response.forEach(function(G){h.push(G.fulfilled,G.rejected)});let x,T=0,B;if(!b){const z=[Q0.bind(this),void 0];for(z.unshift(...g),z.push(...h),B=z.length,x=Promise.resolve(s);T<B;)x=x.then(z[T++],z[T++]);return x}B=g.length;let K=s;for(;T<B;){const z=g[T++],G=g[T++];try{K=z(K)}catch(U){G.call(this,U);break}}try{x=Q0.call(this,K)}catch(z){return Promise.reject(z)}for(T=0,B=h.length;T<B;)x=x.then(h[T++],h[T++]);return x}getUri(l){l=La(this.defaults,l);const s=Tg(l.baseURL,l.url,l.allowAbsoluteUrls);return Eg(s,l.params,l.paramsSerializer)}};Y.forEach(["delete","get","head","options"],function(l){za.prototype[l]=function(s,r){return this.request(La(r||{},{method:l,url:s,data:(r||{}).data}))}});Y.forEach(["post","put","patch"],function(l){function s(r){return function(f,m,g){return this.request(La(g||{},{method:l,headers:r?{"Content-Type":"multipart/form-data"}:{},url:f,data:m}))}}za.prototype[l]=s(),za.prototype[l+"Form"]=s(!0)});let D4=class Cg{constructor(l){if(typeof l!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(f){s=f});const r=this;this.promise.then(c=>{if(!r._listeners)return;let f=r._listeners.length;for(;f-- >0;)r._listeners[f](c);r._listeners=null}),this.promise.then=c=>{let f;const m=new Promise(g=>{r.subscribe(g),f=g}).then(c);return m.cancel=function(){r.unsubscribe(f)},m},l(function(f,m,g){r.reason||(r.reason=new Kl(f,m,g),s(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(l){if(this.reason){l(this.reason);return}this._listeners?this._listeners.push(l):this._listeners=[l]}unsubscribe(l){if(!this._listeners)return;const s=this._listeners.indexOf(l);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const l=new AbortController,s=r=>{l.abort(r)};return this.subscribe(s),l.signal.unsubscribe=()=>this.unsubscribe(s),l.signal}static source(){let l;return{token:new Cg(function(c){l=c}),cancel:l}}};function z4(a){return function(s){return a.apply(null,s)}}function M4(a){return Y.isObject(a)&&a.isAxiosError===!0}const Gc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Gc).forEach(([a,l])=>{Gc[l]=a});function Ng(a){const l=new za(a),s=cg(za.prototype.request,l);return Y.extend(s,za.prototype,l,{allOwnKeys:!0}),Y.extend(s,l,null,{allOwnKeys:!0}),s.create=function(c){return Ng(La(a,c))},s}const Zt=Ng(Fl);Zt.Axios=za;Zt.CanceledError=Kl;Zt.CancelToken=D4;Zt.isCancel=Sg;Zt.VERSION=Og;Zt.toFormData=Gu;Zt.AxiosError=mt;Zt.Cancel=Zt.CanceledError;Zt.all=function(l){return Promise.all(l)};Zt.spread=z4;Zt.isAxiosError=M4;Zt.mergeConfig=La;Zt.AxiosHeaders=Te;Zt.formToJSON=a=>wg(Y.isHTMLForm(a)?new FormData(a):a);Zt.getAdapter=jg.getAdapter;Zt.HttpStatusCode=Gc;Zt.default=Zt;const{Axios:ZE,AxiosError:JE,CanceledError:PE,isCancel:IE,CancelToken:WE,VERSION:tw,all:ew,Cancel:nw,isAxiosError:aw,spread:iw,toFormData:lw,AxiosHeaders:rw,HttpStatusCode:uw,formToJSON:sw,getAdapter:ow,mergeConfig:cw}=Zt,U4=`<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<items totalitems="45" termsofuse="https://boardgamegeek.com/xmlapi/termsofuse" pubdate="Sun, 09 Mar 2025 22:27:53 +0000">
    <item objecttype="thing" objectid="294514" subtype="boardgame" collid="128899483">
        <name sortindex="1">5-Minute Mystery</name>
        <yearpublished>2020</yearpublished>
        <image>https://cf.geekdo-images.com/227j91odzi4v2S2pbxcscg__original/img/OJ-arew7SLsyDboqb7J9p6--cB0=/0x0/filters:format(jpeg)/pic7486281.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/227j91odzi4v2S2pbxcscg__thumb/img/WnOChlK7te8FoCGy-yDGDCAacOo=/fit-in/200x150/filters:strip_icc()/pic7486281.jpg</thumbnail>
        <stats minplayers="1"																	maxplayers="6"																	minplaytime="5"																	maxplaytime="30"																	playingtime="30"																	numowned="5800" >
            <rating value="7">
                <usersrated value="2223" />
                <average value="7.02888" />
                <bayesaverage value="6.24709" />
                <stddev value="1.30558" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:11:22" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="299571" subtype="boardgame" collid="128899653">
        <name sortindex="1">Bandida</name>
        <yearpublished>2020</yearpublished>
        <image>https://cf.geekdo-images.com/NxzxMSGrXnhZHEQc_1_zfQ__original/img/PqjOV4zujhvuAohuS5NsyNgo06I=/0x0/filters:format(jpeg)/pic5471628.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/NxzxMSGrXnhZHEQc_1_zfQ__thumb/img/tMX5Y7DdmYcgZQTG2i7vjO9USRI=/fit-in/200x150/filters:strip_icc()/pic5471628.jpg</thumbnail>
        <stats minplayers="1"																	maxplayers="4"																	minplaytime="15"																	maxplaytime="15"																	playingtime="15"																	numowned="4203" >
            <rating value="5">
                <usersrated value="1371" />
                <average value="6.47288" />
                <bayesaverage value="5.85973" />
                <stddev value="1.28979" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-03 08:06:52" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="178900" subtype="boardgame" collid="128901389">
        <name sortindex="1">Codenames</name>
        <yearpublished>2015</yearpublished>
        <image>https://cf.geekdo-images.com/F_KDEu0GjdClml8N7c8Imw__original/img/gcX_EfjsRpB5fI4Ug4XV73G4jGI=/0x0/filters:format(jpeg)/pic2582929.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/F_KDEu0GjdClml8N7c8Imw__thumb/img/yl8iXxSNwguMeg3KkmfFO9SMVVc=/fit-in/200x150/filters:strip_icc()/pic2582929.jpg</thumbnail>
        <stats minplayers="2"																	maxplayers="8"																	minplaytime="15"																	maxplaytime="15"																	playingtime="15"																	numowned="164832" >
            <rating value="6">
                <usersrated value="96855" />
                <average value="7.5356" />
                <bayesaverage value="7.44078" />
                <stddev value="1.30236" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:19:43" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="284083" subtype="boardgame" collid="128901413">
        <name sortindex="5">The Crew: The Quest for Planet Nine</name>
        <yearpublished>2019</yearpublished>
        <image>https://cf.geekdo-images.com/98LnQShydr11OBKS46xY-Q__original/img/Q-ZkgnuBu9OTBr7J3qnqPjqamAE=/0x0/filters:format(jpeg)/pic5687013.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/98LnQShydr11OBKS46xY-Q__thumb/img/et-fnuozyOdBOVL-5kSS3_7I8fw=/fit-in/200x150/filters:strip_icc()/pic5687013.jpg</thumbnail>
        <stats minplayers="2"																	maxplayers="5"																	minplaytime="20"																	maxplaytime="20"																	playingtime="20"																	numowned="85640" >
            <rating value="7">
                <usersrated value="44627" />
                <average value="7.78156" />
                <bayesaverage value="7.641" />
                <stddev value="1.31614" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-03 08:07:02" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="230059" subtype="boardgame" collid="128901431">
        <name sortindex="1">Crossfire</name>
        <yearpublished>2017</yearpublished>
        <image>https://cf.geekdo-images.com/6bX0JWyEXFx7mXt_mCfiOw__original/img/hBeZDpruWs6xESEdUpOKdmrzngw=/0x0/filters:format(jpeg)/pic3621676.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/6bX0JWyEXFx7mXt_mCfiOw__thumb/img/Nghcmqav6yPIpYg9kPeS-VZ7puk=/fit-in/200x150/filters:strip_icc()/pic3621676.jpg</thumbnail>
        <stats minplayers="5"																	maxplayers="10"																	minplaytime="5"																	maxplaytime="10"																	playingtime="10"																	numowned="2615" >
            <rating value="6">
                <usersrated value="1030" />
                <average value="6.39905" />
                <bayesaverage value="5.77773" />
                <stddev value="1.48368" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-03 08:07:05" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="245476" subtype="boardgame" collid="128901427">
        <name sortindex="1">CuBirds</name>
        <yearpublished>2018</yearpublished>
        <image>https://cf.geekdo-images.com/FDBUwGFBkniyl8q4Alvq8A__original/img/PQee1I5tS1r2TjNXMj7XR6uCsxE=/0x0/filters:format(jpeg)/pic7491534.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/FDBUwGFBkniyl8q4Alvq8A__thumb/img/EiGltQvI5VsmCSYYxjgD7kXY2eg=/fit-in/200x150/filters:strip_icc()/pic7491534.jpg</thumbnail>
        <stats minplayers="2"																	maxplayers="5"																	minplaytime="20"																	maxplaytime="20"																	playingtime="20"																	numowned="11438" >
            <rating value="6">
                <usersrated value="7936" />
                <average value="6.91533" />
                <bayesaverage value="6.5688" />
                <stddev value="1.27104" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:15:44" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="260300" subtype="boardgame" collid="128899399">
        <name sortindex="1">Dungeon Mayhem</name>
        <yearpublished>2018</yearpublished>
        <image>https://cf.geekdo-images.com/faJfKYz6tG8JvDYqYHBjHg__original/img/-DwgkWe6yIa2GAaf5VugWHMNrH4=/0x0/filters:format(jpeg)/pic5322689.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/faJfKYz6tG8JvDYqYHBjHg__thumb/img/JGJi0rrNusi2_aZ3d9SCN9wp4aw=/fit-in/200x150/filters:strip_icc()/pic5322689.jpg</thumbnail>
        <stats minplayers="2"																	maxplayers="4"																	minplaytime="10"																	maxplaytime="10"																	playingtime="10"																	numowned="11230" >
            <rating value="7">
                <usersrated value="4078" />
                <average value="6.88106" />
                <bayesaverage value="6.29232" />
                <stddev value="1.50796" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:12:00" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="280809" subtype="boardgame" collid="128899680">
        <name sortindex="1">Dungeon Mayhem: Battle for Baldur&#039;s Gate</name>
        <yearpublished>2019</yearpublished>
        <image>https://cf.geekdo-images.com/uNiQU6MDA3XHmtsrrYeP-Q__original/img/g2vXh7RxsnDKMlf749j2mwG3olw=/0x0/filters:format(jpeg)/pic4985693.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/uNiQU6MDA3XHmtsrrYeP-Q__thumb/img/-4WLxRelJRlszIgiAaOOOudF5GA=/fit-in/200x150/filters:strip_icc()/pic4985693.jpg</thumbnail>
        <stats minplayers="2"																	maxplayers="4"																	minplaytime="10"																	maxplaytime="10"																	playingtime="10"																	numowned="4792" >
            <rating value="7">
                <usersrated value="1145" />
                <average value="7.3153" />
                <bayesaverage value="6.0649" />
                <stddev value="1.27829" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:11:46" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="295577" subtype="boardgame" collid="128899393">
        <name sortindex="1">Dungeon Mayhem: Monster Madness</name>
        <yearpublished>2020</yearpublished>
        <image>https://cf.geekdo-images.com/WsOkgEC8ofTxez-X3RFzjA__original/img/nGVXtX5t0trWVavP-6_vqVUExDE=/0x0/filters:format(jpeg)/pic5324418.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/WsOkgEC8ofTxez-X3RFzjA__thumb/img/-JuEMceaLf_c0sNc5weHiiMzwPI=/fit-in/200x150/filters:strip_icc()/pic5324418.jpg</thumbnail>
        <stats minplayers="2"																	maxplayers="6"																	minplaytime="10"																	maxplaytime="10"																	playingtime="10"																	numowned="5446" >
            <rating value="8">
                <usersrated value="1636" />
                <average value="7.45321" />
                <bayesaverage value="6.24403" />
                <stddev value="1.38016" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:16:36" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="172225" subtype="boardgame" collid="128899462">
        <name sortindex="1">Exploding Kittens</name>
        <yearpublished>2015</yearpublished>
        <image>https://cf.geekdo-images.com/N8bL53-pRU7zaXDTrEaYrw__original/img/0ciN1VZYifUd0qIDO0e8cGXmiss=/0x0/filters:format(png)/pic2691976.png</image>
        <thumbnail>https://cf.geekdo-images.com/N8bL53-pRU7zaXDTrEaYrw__thumb/img/3tH4pIc1Udzkd0tXc6MgVQ59BC0=/fit-in/200x150/filters:strip_icc()/pic2691976.png</thumbnail>
        <stats minplayers="2"																	maxplayers="5"																	minplaytime="15"																	maxplaytime="15"																	playingtime="15"																	numowned="82568" >
            <rating value="7">
                <usersrated value="37442" />
                <average value="6.06494" />
                <bayesaverage value="5.8791" />
                <stddev value="1.75446" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:13:43" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="312667" subtype="boardgame" collid="128899469">
        <name sortindex="1">Exploding Kittens: Barking Kittens</name>
        <yearpublished>2020</yearpublished>
        <image>https://cf.geekdo-images.com/Yu_WYc2puk9WVTN1xvUIoA__original/img/wEfM5YgGizWMRsgO_Bgm5eHn_S8=/0x0/filters:format(jpeg)/pic7344713.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/Yu_WYc2puk9WVTN1xvUIoA__thumb/img/aMJ7JPZKEzkcmtJcvs0tE65-4LY=/fit-in/200x150/filters:strip_icc()/pic7344713.jpg</thumbnail>
        <stats minplayers="2"																	maxplayers="5"																	minplaytime="15"																	maxplaytime="15"																	playingtime="15"																	numowned="6471" >
            <rating value="7">
                <usersrated value="1035" />
                <average value="6.83021" />
                <bayesaverage value="5.86093" />
                <stddev value="1.52435" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-03 08:04:25" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="204053" subtype="boardgame" collid="128899466">
        <name sortindex="1">Exploding Kittens: Imploding Kittens</name>
        <yearpublished>2016</yearpublished>
        <image>https://cf.geekdo-images.com/I5JSKlcAKikJ8GlcFRwD6w__original/img/ZpfgFS7Ru7C6N6EZ4OlIzfT_EvU=/0x0/filters:format(jpeg)/pic3518497.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/I5JSKlcAKikJ8GlcFRwD6w__thumb/img/4XKbpNyF4f2QCOB2ITjBI5YaSQ8=/fit-in/200x150/filters:strip_icc()/pic3518497.jpg</thumbnail>
        <stats minplayers="2"																	maxplayers="6"																	minplaytime="15"																																		playingtime="15"																	numowned="20956" >
            <rating value="7">
                <usersrated value="5141" />
                <average value="6.99047" />
                <bayesaverage value="6.41734" />
                <stddev value="1.46256" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:14:45" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="256804" subtype="boardgame" collid="128899579">
        <name sortindex="1">Exploding Kittens: Party Pack</name>
        <yearpublished>2017</yearpublished>
        <image>https://cf.geekdo-images.com/TTsbFSWQjf6ALCmct9Q02g__original/img/X5tRRwzB7DK-hkna5VocAS6Kx0w=/0x0/filters:format(png)/pic5940391.png</image>
        <thumbnail>https://cf.geekdo-images.com/TTsbFSWQjf6ALCmct9Q02g__thumb/img/A7iYWe-75YPppgCss4YelSjrPQs=/fit-in/200x150/filters:strip_icc()/pic5940391.png</thumbnail>
        <stats minplayers="2"																	maxplayers="10"																	minplaytime="15"																	maxplaytime="15"																	playingtime="15"																	numowned="7362" >
            <rating value="7">
                <usersrated value="2258" />
                <average value="7.08284" />
                <bayesaverage value="6.17518" />
                <stddev value="1.52899" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-03 08:04:28" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="260214" subtype="boardgame" collid="128899474">
        <name sortindex="1">Exploding Kittens: Streaking Kittens</name>
        <yearpublished>2018</yearpublished>
        <image>https://cf.geekdo-images.com/NTKDuf6oQOXTYLP56elQ7w__original/img/5KNUp6geyom1XMopini-QYwSRZ0=/0x0/filters:format(jpeg)/pic4385457.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/NTKDuf6oQOXTYLP56elQ7w__thumb/img/C4DkV2oGL-on4OSQkdnIYtIlW7Q=/fit-in/200x150/filters:strip_icc()/pic4385457.jpg</thumbnail>
        <stats minplayers="2"																	maxplayers="5"																	minplaytime="15"																	maxplaytime="15"																	playingtime="15"																	numowned="10569" >
            <rating value="5">
                <usersrated value="2308" />
                <average value="7.15467" />
                <bayesaverage value="6.2393" />
                <stddev value="1.44022" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:17:12" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="135779" subtype="boardgame" collid="128899490">
        <name sortindex="3">A Fake Artist Goes to New York</name>
        <yearpublished>2011</yearpublished>
        <image>https://cf.geekdo-images.com/5Q5YHxJeVp6PAhfv5Ct0-g__original/img/yRNioltDOtjrTRXa0HHoTTCWNf8=/0x0/filters:format(png)/pic3678404.png</image>
        <thumbnail>https://cf.geekdo-images.com/5Q5YHxJeVp6PAhfv5Ct0-g__thumb/img/nqo8xhGEWnqXYDEvYcVpBpABBI4=/fit-in/200x150/filters:strip_icc()/pic3678404.png</thumbnail>
        <stats minplayers="5"																	maxplayers="10"																	minplaytime="20"																	maxplaytime="20"																	playingtime="20"																	numowned="17614" >
            <rating value="6">
                <usersrated value="9340" />
                <average value="7.1281" />
                <bayesaverage value="6.80172" />
                <stddev value="1.26658" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:15:58" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="171273" subtype="boardgame" collid="128899602">
        <name sortindex="1">FUSE</name>
        <yearpublished>2015</yearpublished>
        <image>https://cf.geekdo-images.com/q6V72bfqeoKi3bfThY3XfQ__original/img/WpL6_RxwhMEZJrS3Z4-DztN78l0=/0x0/filters:format(jpeg)/pic5172335.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/q6V72bfqeoKi3bfThY3XfQ__thumb/img/dUvznEJMuiiQvA729qtAa6iA40g=/fit-in/200x150/filters:strip_icc()/pic5172335.jpg</thumbnail>
        <stats minplayers="1"																	maxplayers="5"																	minplaytime="10"																	maxplaytime="10"																	playingtime="10"																	numowned="13424" >
            <rating value="7">
                <usersrated value="8963" />
                <average value="6.99556" />
                <bayesaverage value="6.67949" />
                <stddev value="1.23998" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-03 08:04:44" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="173090" subtype="boardgame" collid="128901495">
        <name sortindex="5">The Game</name>
        <yearpublished>2015</yearpublished>
        <image>https://cf.geekdo-images.com/g4pn1ieUKfIhERl5Ym6joQ__original/img/ZcwvBXraym0wfre1sm9t1d44BBA=/0x0/filters:format(png)/pic4203279.png</image>
        <thumbnail>https://cf.geekdo-images.com/g4pn1ieUKfIhERl5Ym6joQ__thumb/img/IRLfNA-yFg0etLOeNFp7QKFsea4=/fit-in/200x150/filters:strip_icc()/pic4203279.png</thumbnail>
        <stats minplayers="1"																	maxplayers="5"																	minplaytime="20"																	maxplaytime="20"																	playingtime="20"																	numowned="23005" >
            <rating value="3">
                <usersrated value="12762" />
                <average value="6.71142" />
                <bayesaverage value="6.50139" />
                <stddev value="1.33636" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:19:12" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="98778" subtype="boardgame" collid="128901486">
        <name sortindex="1">Hanabi</name>
        <yearpublished>2010</yearpublished>
        <image>https://cf.geekdo-images.com/JDVksMwfcqoem1k_xtZrOA__original/img/5vNHZiTEhK4aRDuGXv5KImp9cmQ=/0x0/filters:format(jpeg)/pic2007286.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/JDVksMwfcqoem1k_xtZrOA__thumb/img/amCeCcEKhYGbVtDvpvIMnu3qTg0=/fit-in/200x150/filters:strip_icc()/pic2007286.jpg</thumbnail>
        <stats minplayers="2"																	maxplayers="5"																	minplaytime="25"																	maxplaytime="25"																	playingtime="25"																	numowned="85378" >
            <rating value="6">
                <usersrated value="50141" />
                <average value="7.03575" />
                <bayesaverage value="6.93088" />
                <stddev value="1.41284" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:14:57" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="158600" subtype="boardgame" collid="128899585">
        <name sortindex="1">Hanamikoji</name>
        <yearpublished>2013</yearpublished>
        <image>https://cf.geekdo-images.com/uiVZ7QVfRFQx3EBG8eDU8w__original/img/tLBrF40IDpARzoiUor4wwUvWXgY=/0x0/filters:format(png)/pic6339446.png</image>
        <thumbnail>https://cf.geekdo-images.com/uiVZ7QVfRFQx3EBG8eDU8w__thumb/img/SUy42NMiK5gx-kLqmV47drIxEU0=/fit-in/200x150/filters:strip_icc()/pic6339446.png</thumbnail>
        <stats minplayers="2"																	maxplayers="2"																	minplaytime="15"																	maxplaytime="15"																	playingtime="15"																	numowned="32378" >
            <rating value="7">
                <usersrated value="19678" />
                <average value="7.46927" />
                <bayesaverage value="7.23673" />
                <stddev value="1.20796" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:21:22" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="198994" subtype="boardgame" collid="128901476">
        <name sortindex="1">Hero Realms</name>
        <yearpublished>2016</yearpublished>
        <image>https://cf.geekdo-images.com/6xc4TuJynN5o_ZF0fHOdAA__original/img/H5xSdHoOk1x5nR16LebPVRh88ZI=/0x0/filters:format(png)/pic6162556.png</image>
        <thumbnail>https://cf.geekdo-images.com/6xc4TuJynN5o_ZF0fHOdAA__thumb/img/sMbWo--LyzJw_weK0h1ESSPqdtU=/fit-in/200x150/filters:strip_icc()/pic6162556.png</thumbnail>
        <stats minplayers="2"																	maxplayers="4"																	minplaytime="20"																	maxplaytime="20"																	playingtime="20"																	numowned="32503" >
            <rating value="7">
                <usersrated value="18859" />
                <average value="7.50804" />
                <bayesaverage value="7.21264" />
                <stddev value="1.23899" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:19:58" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="320718" subtype="boardgame" collid="128899638">
        <name sortindex="1">Hidden Leaders</name>
        <yearpublished>2022</yearpublished>
        <image>https://cf.geekdo-images.com/vDu0Zb4ooGEOF29ZaRQ3EQ__original/img/SP1CFuPlOKKOVtz66o1nKQwBS3o=/0x0/filters:format(jpeg)/pic5845169.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/vDu0Zb4ooGEOF29ZaRQ3EQ__thumb/img/3AcQZQ_MB1dJiQlQzcJMjDK637M=/fit-in/200x150/filters:strip_icc()/pic5845169.jpg</thumbnail>
        <stats minplayers="2"																	maxplayers="6"																	minplaytime="20"																	maxplaytime="40"																	playingtime="40"																	numowned="6436" >
            <rating value="7">
                <usersrated value="3498" />
                <average value="6.74542" />
                <bayesaverage value="6.19976" />
                <stddev value="1.38432" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-03 08:07:21" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="324914" subtype="boardgame" collid="128901437">
        <name sortindex="1">Inside Job</name>
        <yearpublished>2022</yearpublished>
        <image>https://cf.geekdo-images.com/Kimz03Spg3dB96_O-xbcPg__original/img/306hB7Q2HkcGe1DTiqKOnVNU03Q=/0x0/filters:format(png)/pic7233520.png</image>
        <thumbnail>https://cf.geekdo-images.com/Kimz03Spg3dB96_O-xbcPg__thumb/img/4MXilcl8plyqXtNQoCk6pE_lroM=/fit-in/200x150/filters:strip_icc()/pic7233520.png</thumbnail>
        <stats minplayers="2"																	maxplayers="5"																	minplaytime="20"																	maxplaytime="30"																	playingtime="30"																	numowned="3894" >
            <rating value="6">
                <usersrated value="1778" />
                <average value="7.0571" />
                <bayesaverage value="6.18988" />
                <stddev value="1.16899" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-03 08:07:08" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="193621" subtype="boardgame" collid="128901467">
        <name sortindex="1">Joking Hazard</name>
        <yearpublished>2016</yearpublished>
        <image>https://cf.geekdo-images.com/ohrUtQ0FGHPSFxfSX2Ltmg__original/img/ksIb5Fgrn9Tka1FGVnL8iMlGAjA=/0x0/filters:format(png)/pic6411897.png</image>
        <thumbnail>https://cf.geekdo-images.com/ohrUtQ0FGHPSFxfSX2Ltmg__thumb/img/r9PhVsbOjPDDLfVKBhwrPnqV4LI=/fit-in/200x150/filters:strip_icc()/pic6411897.png</thumbnail>
        <stats minplayers="3"																	maxplayers="10"																	minplaytime="30"																	maxplaytime="90"																	playingtime="90"																	numowned="16129" >
            <rating value="4">
                <usersrated value="6307" />
                <average value="6.24361" />
                <bayesaverage value="5.97156" />
                <stddev value="1.68603" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:12:54" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="346571" subtype="boardgame" collid="128899646">
        <name sortindex="1">Mafia the Party Game Deluxe Edition</name>
        <yearpublished>2018</yearpublished>
        <image>https://cf.geekdo-images.com/Zkz26LkZZ1vq1HQWl62ayQ__original/img/nKnRFK2CNqe3hjVRpSAH4uhzswA=/0x0/filters:format(jpeg)/pic6535521.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/Zkz26LkZZ1vq1HQWl62ayQ__thumb/img/sDOrNhnMUgIYlGls113xpoJRAiY=/fit-in/200x150/filters:strip_icc()/pic6535521.jpg</thumbnail>
        <stats minplayers="7"																	maxplayers="30"																	minplaytime="20"																	maxplaytime="60"																	playingtime="60"																	numowned="84" >
            <rating value="4">
                <usersrated value="18" />
                <average value="7.12222" />
                <bayesaverage value="0" />
                <stddev value="1.53208" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-03 08:07:14" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="177249" subtype="boardgame" collid="128901459">
        <name sortindex="5">The Manhattan Project: Chain Reaction</name>
        <yearpublished>2016</yearpublished>
        <image>https://cf.geekdo-images.com/YqmBrUSSNeqFao71khs9vw__original/img/IufTTLqPX2vSqtXxgmz9i6QVZbs=/0x0/filters:format(jpeg)/pic3099445.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/YqmBrUSSNeqFao71khs9vw__thumb/img/Q4xV-x547ZrrX4vT6uhrhUZ0eKg=/fit-in/200x150/filters:strip_icc()/pic3099445.jpg</thumbnail>
        <stats minplayers="1"																	maxplayers="5"																	minplaytime="30"																	maxplaytime="40"																	playingtime="40"																	numowned="4269" >
            <rating value="7">
                <usersrated value="1927" />
                <average value="6.45814" />
                <bayesaverage value="5.92042" />
                <stddev value="1.34083" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:18:21" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="244992" subtype="boardgame" collid="128901462">
        <name sortindex="5">The Mind</name>
        <yearpublished>2018</yearpublished>
        <image>https://cf.geekdo-images.com/q_JGK291hrhnhiRB0667oA__original/img/8VjZEG278faO9JZwzce3v3EKssI=/0x0/filters:format(png)/pic3979766.png</image>
        <thumbnail>https://cf.geekdo-images.com/q_JGK291hrhnhiRB0667oA__thumb/img/PUrzEmTo5kOcK5BOb4cbOOcH86I=/fit-in/200x150/filters:strip_icc()/pic3979766.png</thumbnail>
        <stats minplayers="2"																	maxplayers="4"																	minplaytime="20"																	maxplaytime="20"																	playingtime="20"																	numowned="61715" >
            <rating value="6">
                <usersrated value="33859" />
                <average value="6.74174" />
                <bayesaverage value="6.61957" />
                <stddev value="1.5991" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:12:16" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="12942" subtype="boardgame" collid="128901501">
        <name sortindex="1">No Thanks!</name>
        <yearpublished>2004</yearpublished>
        <image>https://cf.geekdo-images.com/2DyxMVASynw87LRULZuyqA__original/img/IHLuH9f5dB6jJn74cdVdMixAUKg=/0x0/filters:format(jpeg)/pic4657706.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/2DyxMVASynw87LRULZuyqA__thumb/img/yIUSMoN8O5FeDZjXa4vreKj5Ogw=/fit-in/200x150/filters:strip_icc()/pic4657706.jpg</thumbnail>
        <stats minplayers="3"																	maxplayers="7"																	minplaytime="20"																	maxplaytime="20"																	playingtime="20"																	numowned="42505" >
            <rating value="3">
                <usersrated value="28577" />
                <average value="7.08006" />
                <bayesaverage value="6.95365" />
                <stddev value="1.20287" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:15:11" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="176361" subtype="boardgame" collid="128901447">
        <name sortindex="1">One Night Revolution</name>
        <yearpublished>2015</yearpublished>
        <image>https://cf.geekdo-images.com/0SFLHa5hNmtdL0LpqCN2kA__original/img/d5kYkGa5X5b3O6Jzy9R2cJUX9Qg=/0x0/filters:format(jpeg)/pic2513302.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/0SFLHa5hNmtdL0LpqCN2kA__thumb/img/DBscKuzoek17BGUcjPLVgQeoNTc=/fit-in/200x150/filters:strip_icc()/pic2513302.jpg</thumbnail>
        <stats minplayers="3"																	maxplayers="10"																	minplaytime="15"																	maxplaytime="15"																	playingtime="15"																	numowned="5054" >
            <rating value="6">
                <usersrated value="1704" />
                <average value="6.07028" />
                <bayesaverage value="5.73543" />
                <stddev value="1.54169" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:18:56" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="147949" subtype="boardgame" collid="128899560">
        <name sortindex="1">One Night Ultimate Werewolf</name>
        <yearpublished>2014</yearpublished>
        <image>https://cf.geekdo-images.com/WwMK56_OCk2-Y6khQ0fsjg__original/img/oEWIaUPje_Y24UHMoKu3agxgHsw=/0x0/filters:format(png)/pic8547282.png</image>
        <thumbnail>https://cf.geekdo-images.com/WwMK56_OCk2-Y6khQ0fsjg__thumb/img/d0_i_HtBBtMFuiniWnu2d7d8hQ0=/fit-in/200x150/filters:strip_icc()/pic8547282.png</thumbnail>
        <stats minplayers="3"																	maxplayers="10"																	minplaytime="10"																	maxplaytime="10"																	playingtime="10"																	numowned="54883" >
            <rating value="6">
                <usersrated value="29095" />
                <average value="7.04277" />
                <bayesaverage value="6.86804" />
                <stddev value="1.61545" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:17:25" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="41114" subtype="boardgame" collid="128899526">
        <name sortindex="5">The Resistance</name>
        <yearpublished>2009</yearpublished>
        <image>https://cf.geekdo-images.com/cAPTkL2BR3snLO71dkH8rw__original/img/_UahoIUTqh39xRqzCc2jwgdYbSA=/0x0/filters:format(jpeg)/pic2576459.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/cAPTkL2BR3snLO71dkH8rw__thumb/img/5lDn1W82rlLXtVG7nPIYR9Orn-4=/fit-in/200x150/filters:strip_icc()/pic2576459.jpg</thumbnail>
        <stats minplayers="5"																	maxplayers="10"																	minplaytime="30"																	maxplaytime="30"																	playingtime="30"																	numowned="66827" >
            <rating value="6">
                <usersrated value="41637" />
                <average value="7.20392" />
                <bayesaverage value="7.06043" />
                <stddev value="1.47475" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-03 09:07:18" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="128882" subtype="boardgame" collid="128899367">
        <name sortindex="5">The Resistance: Avalon</name>
        <yearpublished>2012</yearpublished>
        <image>https://cf.geekdo-images.com/LPa6rsGcv8S0-OeNjCOAEQ__original/img/AF8HHaIad1re-eg3kd9mlm2j_ss=/0x0/filters:format(jpeg)/pic1398895.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/LPa6rsGcv8S0-OeNjCOAEQ__thumb/img/RKui79VjUbQAzTWaPu44ytupzDs=/fit-in/200x150/filters:strip_icc()/pic1398895.jpg</thumbnail>
        <stats minplayers="5"																	maxplayers="10"																	minplaytime="30"																	maxplaytime="30"																	playingtime="30"																	numowned="51051" >
            <rating value="10">
                <usersrated value="34808" />
                <average value="7.50498" />
                <bayesaverage value="7.31749" />
                <stddev value="1.51159" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:10:12" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="162890" subtype="boardgame" collid="128899534">
        <name sortindex="5">The Resistance: Hidden Agenda</name>
        <yearpublished>2014</yearpublished>
        <image>https://cf.geekdo-images.com/SQOGfcomLUQyS4Km4l_HcA__original/img/JKGtY2bEeQ6_GrP8pYaK17zo2_w=/0x0/filters:format(png)/pic2086253.png</image>
        <thumbnail>https://cf.geekdo-images.com/SQOGfcomLUQyS4Km4l_HcA__thumb/img/NdE3TYOT0qLaUQI9SOzThiCtHp0=/fit-in/200x150/filters:strip_icc()/pic2086253.png</thumbnail>
        <stats minplayers="5"																	maxplayers="10"																	minplaytime="30"																	maxplaytime="30"																	playingtime="30"																	numowned="4404" >
            <rating value="6">
                <usersrated value="857" />
                <average value="7.65076" />
                <bayesaverage value="6.07573" />
                <stddev value="1.37185" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-03 09:07:26" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="163322" subtype="boardgame" collid="128899532">
        <name sortindex="5">The Resistance: Hidden Agenda &amp; Hostile Intent</name>
        <yearpublished>2014</yearpublished>
        <image>https://cf.geekdo-images.com/V4udzGnIq-KA-N02erYUtA__original/img/m5eKagTwriga2qnTgEk-ZiY3QP4=/0x0/filters:format(png)/pic2243281.png</image>
        <thumbnail>https://cf.geekdo-images.com/V4udzGnIq-KA-N02erYUtA__thumb/img/XcqjgSwEaplb79mjRL17xwMb5Z4=/fit-in/200x150/filters:strip_icc()/pic2243281.png</thumbnail>
        <stats minplayers="5"																	maxplayers="10"																	minplaytime="30"																	maxplaytime="30"																	playingtime="30"																	numowned="3137" >
            <rating value="6">
                <usersrated value="579" />
                <average value="7.55799" />
                <bayesaverage value="5.91315" />
                <stddev value="1.52511" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-03 09:07:24" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="200630" subtype="boardgame" collid="128899530">
        <name sortindex="5">The Resistance: The Plot Thickens</name>
        <yearpublished>2016</yearpublished>
        <image>https://cf.geekdo-images.com/iKl6j1td2-iYhVGaq1w68Q__original/img/Ew_hxoner5prkH-C17WXkV8oB8Q=/0x0/filters:format(jpeg)/pic8250038.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/iKl6j1td2-iYhVGaq1w68Q__thumb/img/m3UNXKvPS8LtsoBhlwoRejeirCs=/fit-in/200x150/filters:strip_icc()/pic8250038.jpg</thumbnail>
        <stats minplayers="5"																	maxplayers="10"																	minplaytime="30"																																		playingtime="30"																	numowned="1582" >
            <rating value="6">
                <usersrated value="188" />
                <average value="7.48161" />
                <bayesaverage value="5.64442" />
                <stddev value="1.47946" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-03 09:07:21" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="175549" subtype="boardgame" collid="128901401">
        <name sortindex="1">Salem 1692</name>
        <yearpublished>2015</yearpublished>
        <image>https://cf.geekdo-images.com/xUurReSy2Amlx4hGj1fPvQ__original/img/XwLUot6yxSoz4j4yorfVSNVPqMw=/0x0/filters:format(jpeg)/pic4204062.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/xUurReSy2Amlx4hGj1fPvQ__thumb/img/IiiUFNDZKGNNDls_AhD0-DE7Ba0=/fit-in/200x150/filters:strip_icc()/pic4204062.jpg</thumbnail>
        <stats minplayers="4"																	maxplayers="12"																	minplaytime="25"																	maxplaytime="35"																	playingtime="35"																	numowned="9741" >
            <rating value="6">
                <usersrated value="2815" />
                <average value="7.10194" />
                <bayesaverage value="6.29748" />
                <stddev value="1.55837" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-03 08:06:59" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="230266" subtype="boardgame" collid="128901418">
        <name sortindex="1">Scare It!</name>
        <yearpublished>2018</yearpublished>
        <image>https://cf.geekdo-images.com/AvL4ja69FJNt6rhBbwoYUw__original/img/-c_oMPNvFGcnYdslR9m6tygOp88=/0x0/filters:format(jpeg)/pic3740391.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/AvL4ja69FJNt6rhBbwoYUw__thumb/img/LmdxhhCq3yjkN5bWrBseBNBIiqc=/fit-in/200x150/filters:strip_icc()/pic3740391.jpg</thumbnail>
        <stats minplayers="1"																	maxplayers="8"																	minplaytime="20"																	maxplaytime="20"																	playingtime="20"																	numowned="897" >
            <rating value="5">
                <usersrated value="365" />
                <average value="5.93164" />
                <bayesaverage value="5.5492" />
                <stddev value="1.37052" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:13:57" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="188834" subtype="boardgame" collid="128899445">
        <name sortindex="1">Secret Hitler</name>
        <yearpublished>2016</yearpublished>
        <image>https://cf.geekdo-images.com/rAQ3hIXoH6xDcj41v9iqCg__original/img/7oKwNUYakx3-vHUBLHWVuFNKfl4=/0x0/filters:format(jpeg)/pic5164305.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/rAQ3hIXoH6xDcj41v9iqCg__thumb/img/xA2T7PiwN3Z8pwAksicoCOA1tf0=/fit-in/200x150/filters:strip_icc()/pic5164305.jpg</thumbnail>
        <stats minplayers="5"																	maxplayers="10"																	minplaytime="45"																	maxplaytime="45"																	playingtime="45"																	numowned="45528" >
            <rating value="10">
                <usersrated value="31230" />
                <average value="7.49925" />
                <bayesaverage value="7.25871" />
                <stddev value="1.60919" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:10:35" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="92415" subtype="boardgame" collid="128899452">
        <name sortindex="1">Skull</name>
        <yearpublished>2011</yearpublished>
        <image>https://cf.geekdo-images.com/OPrd2iXm43dir7BwKAMOuQ__original/img/ygPnbmg8FCpA7jO5gXw38uyNQ10=/0x0/filters:format(jpeg)/pic6097488.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/OPrd2iXm43dir7BwKAMOuQ__thumb/img/yEnb4YWN-Cp41KWTQ2EeNkrqlZI=/fit-in/200x150/filters:strip_icc()/pic6097488.jpg</thumbnail>
        <stats minplayers="3"																	maxplayers="6"																	minplaytime="15"																	maxplaytime="45"																	playingtime="45"																	numowned="41489" >
            <rating value="7">
                <usersrated value="25718" />
                <average value="7.18534" />
                <bayesaverage value="7.01953" />
                <stddev value="1.39804" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:16:07" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="166384" subtype="boardgame" collid="128901379">
        <name sortindex="1">Spyfall</name>
        <yearpublished>2014</yearpublished>
        <image>https://cf.geekdo-images.com/Ehx72XRdSeQHISVXcZVnHg__original/img/bI3PgKtvAGiD59QYya-pqasF_tk=/0x0/filters:format(jpeg)/pic2453926.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/Ehx72XRdSeQHISVXcZVnHg__thumb/img/sPJVWjzGcEpiseZGdoD6HNR9nRI=/fit-in/200x150/filters:strip_icc()/pic2453926.jpg</thumbnail>
        <stats minplayers="3"																	maxplayers="8"																	minplaytime="15"																	maxplaytime="15"																	playingtime="15"																	numowned="30134" >
            <rating value="5">
                <usersrated value="21832" />
                <average value="6.75741" />
                <bayesaverage value="6.62011" />
                <stddev value="1.43814" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-03 08:05:46" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="296576" subtype="boardgame" collid="128899641">
        <name sortindex="1">There&#039;s Been A Murder</name>
        <yearpublished>2019</yearpublished>
        <image>https://cf.geekdo-images.com/ryvYEujSSAVz5EBTOoqi8A__original/img/8Wu7_4cKjVtyLxIrm8c-Q3cVqaQ=/0x0/filters:format(png)/pic5693269.png</image>
        <thumbnail>https://cf.geekdo-images.com/ryvYEujSSAVz5EBTOoqi8A__thumb/img/d5FN1ZHU3djQsugPFrDckNc85zA=/fit-in/200x150/filters:strip_icc()/pic5693269.png</thumbnail>
        <stats minplayers="3"																	maxplayers="8"																	minplaytime="5"																	maxplaytime="15"																	playingtime="15"																	numowned="990" >
            <rating value="6">
                <usersrated value="241" />
                <average value="5.57222" />
                <bayesaverage value="5.49067" />
                <stddev value="1.89942" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-03 08:07:18" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="340420" subtype="boardgame" collid="128899597">
        <name sortindex="1">Throw Throw Avocado</name>
        <yearpublished>2021</yearpublished>
        <image>https://cf.geekdo-images.com/_mGtR5kr2eMU1sIzauuLfw__original/img/rN-2_xDMxvJApCWsMmB7uhEjbNE=/0x0/filters:format(jpeg)/pic7073069.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/_mGtR5kr2eMU1sIzauuLfw__thumb/img/IMcOJmFc6NA53c1Nha9jnygrOOs=/fit-in/200x150/filters:strip_icc()/pic7073069.jpg</thumbnail>
        <stats minplayers="2"																	maxplayers="6"																	minplaytime="15"																	maxplaytime="15"																	playingtime="15"																	numowned="2428" >
            <rating value="6">
                <usersrated value="434" />
                <average value="6.37023" />
                <bayesaverage value="5.62389" />
                <stddev value="1.54441" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:12:39" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="274533" subtype="boardgame" collid="128899590">
        <name sortindex="1">Throw Throw Burrito</name>
        <yearpublished>2019</yearpublished>
        <image>https://cf.geekdo-images.com/5ClVKrQcLkzRdBGiEfjevQ__original/img/NDGN_eKZmO7uJD0l5JIKJkAX24o=/0x0/filters:format(jpeg)/pic7073068.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/5ClVKrQcLkzRdBGiEfjevQ__thumb/img/FJa46kpICy-6AF4n7W-v9ICP_yo=/fit-in/200x150/filters:strip_icc()/pic7073068.jpg</thumbnail>
        <stats minplayers="2"																	maxplayers="6"																	minplaytime="15"																	maxplaytime="15"																	playingtime="15"																	numowned="16418" >
            <rating value="6">
                <usersrated value="4314" />
                <average value="6.27038" />
                <bayesaverage value="5.92852" />
                <stddev value="1.63571" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:12:30" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="234190" subtype="boardgame" collid="128901508">
        <name sortindex="1">Unstable Unicorns</name>
        <yearpublished>2017</yearpublished>
        <image>https://cf.geekdo-images.com/8_5xvpsrrX5JVzO7eBLSgw__original/img/XkKaT-quh8xGl2uHD5zULSWTpuM=/0x0/filters:format(jpeg)/pic3912914.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/8_5xvpsrrX5JVzO7eBLSgw__thumb/img/fV4UWCHC1ImGFUN7lcJju9K8_zo=/fit-in/200x150/filters:strip_icc()/pic3912914.jpg</thumbnail>
        <stats minplayers="2"																	maxplayers="8"																	minplaytime="30"																	maxplaytime="60"																	playingtime="60"																	numowned="29529" >
            <rating value="4">
                <usersrated value="10247" />
                <average value="6.2378" />
                <bayesaverage value="5.94968" />
                <stddev value="1.72003" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-03 08:05:52" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="150312" subtype="boardgame" collid="128899688">
        <name sortindex="1">Welcome to the Dungeon</name>
        <yearpublished>2013</yearpublished>
        <image>https://cf.geekdo-images.com/6eQXDEMIWldaut9w7jXihg__original/img/E_d5wpS2jEaH7mdO6humOGULycA=/0x0/filters:format(jpeg)/pic6771265.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/6eQXDEMIWldaut9w7jXihg__thumb/img/CpRGL9nRUlwYERQzds6WyXRvJ4Y=/fit-in/200x150/filters:strip_icc()/pic6771265.jpg</thumbnail>
        <stats minplayers="2"																	maxplayers="4"																	minplaytime="30"																	maxplaytime="30"																	playingtime="30"																	numowned="26517" >
            <rating value="6">
                <usersrated value="14654" />
                <average value="6.53536" />
                <bayesaverage value="6.38302" />
                <stddev value="1.21365" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-03 08:06:55" />
        <numplays>0</numplays>
    </item>
    <item objecttype="thing" objectid="201054" subtype="boardgame" collid="128951848">
        <name sortindex="1">What&#039;s Up</name>
        <yearpublished>2016</yearpublished>
        <image>https://cf.geekdo-images.com/lpKc9CfkSyF5qyNfWG8XrA__original/img/ZCHY5Gr4WRnQ4fstb4EG0kbu3fQ=/0x0/filters:format(jpeg)/pic3042240.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/lpKc9CfkSyF5qyNfWG8XrA__thumb/img/SsUJzqPEJQ4Lx0K1d7G7o-D1uEQ=/fit-in/200x150/filters:strip_icc()/pic3042240.jpg</thumbnail>
        <stats minplayers="2"																	maxplayers="4"																	minplaytime="10"																	maxplaytime="20"																	playingtime="20"																	numowned="2102" >
            <rating value="5">
                <usersrated value="943" />
                <average value="5.77105" />
                <bayesaverage value="5.56449" />
                <stddev value="1.41175" />
                <median value="0" />
            </rating>
        </stats>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-02-02 22:08:55" />
        <numplays>0</numplays>
    </item>
    <!-- Manually added -->
    <item objecttype="thing" objectid="65244" subtype="boardgame" collid="142775051">
        <name sortindex="1">Forbidden Island</name>
        <yearpublished>2010</yearpublished>
        <image>https://cf.geekdo-images.com/JgAkEBUaiHOsOS94iRMs2w__original/img/H5d4I5z_HSpPEu7EAl0DqLt9_pM=/0x0/filters:format(jpeg)/pic646458.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/JgAkEBUaiHOsOS94iRMs2w__small/img/5aPR8-KMbgucI_XkPE2PJaMQQsg=/fit-in/200x150/filters:strip_icc()/pic646458.jpg</thumbnail>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2026-02-20 08:29:46" />
        <stats minplayers="2"																	maxplayers="4"																	minplaytime="10"																	maxplaytime="20"																	playingtime="20"																	numowned="2102" >
          <rating value="5">
                <usersrated value="943" />
                <average value="6.8" />
                <bayesaverage value="5.56449" />
                <stddev value="1.41175" />
                <median value="0" />
          </rating>
        </stats>
        <numplays>0</numplays>
    </item>

    <item objecttype="thing" objectid="403000" subtype="boardgame" collid="142101766">
        <name sortindex="1">Traitors Aboard</name>
        <yearpublished>2023</yearpublished>
        <image>https://cf.geekdo-images.com/opxtTe4Dn-mx0YS6ukrrsg__original/img/LGHRcPVetz5T99H9tu5o2xDmq2U=/0x0/filters:format(jpeg)/pic7914147.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/opxtTe4Dn-mx0YS6ukrrsg__small/img/VVoYGad1LcpRc6VSbsM4vz7PhTA=/fit-in/200x150/filters:strip_icc()/pic7914147.jpg</thumbnail>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2026-02-02 12:15:37" />
        <!-- MANUAL STATS -->
        <stats minplayers="3"																	maxplayers="8"																	minplaytime="10"																	maxplaytime="20"																	playingtime="20"																	numowned="2102" >
          <rating value="5">
                <usersrated value="943" />
                <average value="6.77105" />
                <bayesaverage value="5.56449" />
                <stddev value="1.41175" />
                <median value="0" />
          </rating>
        </stats>
        <numplays>0</numplays>
    </item>

    <item objecttype="thing" objectid="428058" subtype="boardgame" collid="142101708">
        <name sortindex="1">Up or Down?</name>
        <yearpublished>2024</yearpublished>
        <image>https://cf.geekdo-images.com/mDFmyVgBDbBISW60o5-u6A__original/img/yVJShSwlJPaAYCMWZwolAU_Gzog=/0x0/filters:format(png)/pic8794193.png</image>
        <thumbnail>https://cf.geekdo-images.com/mDFmyVgBDbBISW60o5-u6A__small/img/Izz6ZCTW_qEPqlx6gJ5gNku0PEA=/fit-in/200x150/filters:strip_icc()/pic8794193.png</thumbnail>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2026-02-02 12:14:29" />
        <!-- MANUAL STATS -->
        <stats minplayers="2"																	maxplayers="6"																	minplaytime="10"																	maxplaytime="20"																	playingtime="20"																	numowned="2102" >
          <rating value="5">
                <usersrated value="943" />
                <average value="6.7" />
                <bayesaverage value="5.56449" />
                <stddev value="1.41175" />
                <median value="0" />
          </rating>
        </stats>
        <numplays>0</numplays>
    </item>


    <item objecttype="thing" objectid="216497" subtype="boardgame" collid="142775095">
        <name sortindex="1">District Noir</name>
        <yearpublished>2016</yearpublished>
        <image>https://cf.geekdo-images.com/NyOyd9UXdzWAuLkrDPDUnA__original/img/sZ8hMZlwyasKwl3Rc0lqCehG1nw=/0x0/filters:format(jpeg)/pic6954556.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/NyOyd9UXdzWAuLkrDPDUnA__small/img/XIZUXR0d7oXGsaoVUe7S0AlbiiE=/fit-in/200x150/filters:strip_icc()/pic6954556.jpg</thumbnail>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2026-02-20 08:30:48" />
        <!-- MANUAL STATS -->
        <stats minplayers="2"																	maxplayers="2"																	minplaytime="10"																	maxplaytime="20"																	playingtime="20"																	numowned="2102" >
          <rating value="5">
                <usersrated value="943" />
                <average value="7.0" />
                <bayesaverage value="5.56449" />
                <stddev value="1.41175" />
                <median value="0" />
          </rating>
        </stats>
        <numplays>0</numplays>
    </item>


    <item objecttype="thing" objectid="367220" subtype="boardgame" collid="130895881">
        <name sortindex="1">Sea Salt &amp; Paper</name>
        <yearpublished>2022</yearpublished>
        <image>https://cf.geekdo-images.com/CIh_rXKoRw9z8K0PJxT8nQ__original/img/AX2wyHhWFgVh5OArXAjVHY-nFZg=/0x0/filters:format(jpeg)/pic6973911.jpg</image>
        <thumbnail>https://cf.geekdo-images.com/CIh_rXKoRw9z8K0PJxT8nQ__small/img/Jh6NjibuHeYrZtSsAUXq82B1fTQ=/fit-in/200x150/filters:strip_icc()/pic6973911.jpg</thumbnail>
        <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"  preordered="0" lastmodified="2025-03-31 07:42:58" />
        <!-- MANUAL STATS -->
        <stats minplayers="2"																	maxplayers="4"																	minplaytime="10"																	maxplaytime="20"																	playingtime="20"																	numowned="2102" >
          <rating value="5">
                <usersrated value="943" />
                <average value="7.5" />
                <bayesaverage value="5.56449" />
                <stddev value="1.41175" />
                <median value="0" />
          </rating>
        </stats>
        <numplays>0</numplays>
    </item>
</items>
`;var hc={};const L4={},B4=Object.freeze(Object.defineProperty({__proto__:null,default:L4},Symbol.toStringTag,{value:"Module"})),$0=l2(B4);var Z0;function H4(){return Z0||(Z0=1,function(a){(function(l){l.parser=function(E,p){return new r(E,p)},l.SAXParser=r,l.SAXStream=x,l.createStream=h,l.MAX_BUFFER_LENGTH=64*1024;var s=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];l.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function r(E,p){if(!(this instanceof r))return new r(E,p);var F=this;f(F),F.q=F.c="",F.bufferCheckPosition=l.MAX_BUFFER_LENGTH,F.opt=p||{},F.opt.lowercase=F.opt.lowercase||F.opt.lowercasetags,F.looseCase=F.opt.lowercase?"toLowerCase":"toUpperCase",F.tags=[],F.closed=F.closedRoot=F.sawRoot=!1,F.tag=F.error=null,F.strict=!!E,F.noscript=!!(E||F.opt.noscript),F.state=_.BEGIN,F.strictEntities=F.opt.strictEntities,F.ENTITIES=F.strictEntities?Object.create(l.XML_ENTITIES):Object.create(l.ENTITIES),F.attribList=[],F.opt.xmlns&&(F.ns=Object.create(G)),F.opt.unquotedAttributeValues===void 0&&(F.opt.unquotedAttributeValues=!E),F.trackPosition=F.opt.position!==!1,F.trackPosition&&(F.position=F.line=F.column=0),Et(F,"onready")}Object.create||(Object.create=function(E){function p(){}p.prototype=E;var F=new p;return F}),Object.keys||(Object.keys=function(E){var p=[];for(var F in E)E.hasOwnProperty(F)&&p.push(F);return p});function c(E){for(var p=Math.max(l.MAX_BUFFER_LENGTH,10),F=0,O=0,gt=s.length;O<gt;O++){var jt=E[s[O]].length;if(jt>p)switch(s[O]){case"textNode":Tt(E);break;case"cdata":ft(E,"oncdata",E.cdata),E.cdata="";break;case"script":ft(E,"onscript",E.script),E.script="";break;default:St(E,"Max buffer length exceeded: "+s[O])}F=Math.max(F,jt)}var Mt=l.MAX_BUFFER_LENGTH-F;E.bufferCheckPosition=Mt+E.position}function f(E){for(var p=0,F=s.length;p<F;p++)E[s[p]]=""}function m(E){Tt(E),E.cdata!==""&&(ft(E,"oncdata",E.cdata),E.cdata=""),E.script!==""&&(ft(E,"onscript",E.script),E.script="")}r.prototype={end:function(){W(this)},write:pt,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){m(this)}};var g;try{g=$0.Stream}catch{g=function(){}}g||(g=function(){});var b=l.EVENTS.filter(function(E){return E!=="error"&&E!=="end"});function h(E,p){return new x(E,p)}function x(E,p){if(!(this instanceof x))return new x(E,p);g.apply(this),this._parser=new r(E,p),this.writable=!0,this.readable=!0;var F=this;this._parser.onend=function(){F.emit("end")},this._parser.onerror=function(O){F.emit("error",O),F._parser.error=null},this._decoder=null,b.forEach(function(O){Object.defineProperty(F,"on"+O,{get:function(){return F._parser["on"+O]},set:function(gt){if(!gt)return F.removeAllListeners(O),F._parser["on"+O]=gt,gt;F.on(O,gt)},enumerable:!0,configurable:!1})})}x.prototype=Object.create(g.prototype,{constructor:{value:x}}),x.prototype.write=function(E){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(E)){if(!this._decoder){var p=$0.StringDecoder;this._decoder=new p("utf8")}E=this._decoder.write(E)}return this._parser.write(E.toString()),this.emit("data",E),!0},x.prototype.end=function(E){return E&&E.length&&this.write(E),this._parser.end(),!0},x.prototype.on=function(E,p){var F=this;return!F._parser["on"+E]&&b.indexOf(E)!==-1&&(F._parser["on"+E]=function(){var O=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);O.splice(0,0,E),F.emit.apply(F,O)}),g.prototype.on.call(F,E,p)};var T="[CDATA[",B="DOCTYPE",K="http://www.w3.org/XML/1998/namespace",z="http://www.w3.org/2000/xmlns/",G={xml:K,xmlns:z},U=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,R=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,M=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,S=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function v(E){return E===" "||E===`
`||E==="\r"||E==="	"}function D(E){return E==='"'||E==="'"}function X(E){return E===">"||v(E)}function Q(E,p){return E.test(p)}function et(E,p){return!Q(E,p)}var _=0;l.STATE={BEGIN:_++,BEGIN_WHITESPACE:_++,TEXT:_++,TEXT_ENTITY:_++,OPEN_WAKA:_++,SGML_DECL:_++,SGML_DECL_QUOTED:_++,DOCTYPE:_++,DOCTYPE_QUOTED:_++,DOCTYPE_DTD:_++,DOCTYPE_DTD_QUOTED:_++,COMMENT_STARTING:_++,COMMENT:_++,COMMENT_ENDING:_++,COMMENT_ENDED:_++,CDATA:_++,CDATA_ENDING:_++,CDATA_ENDING_2:_++,PROC_INST:_++,PROC_INST_BODY:_++,PROC_INST_ENDING:_++,OPEN_TAG:_++,OPEN_TAG_SLASH:_++,ATTRIB:_++,ATTRIB_NAME:_++,ATTRIB_NAME_SAW_WHITE:_++,ATTRIB_VALUE:_++,ATTRIB_VALUE_QUOTED:_++,ATTRIB_VALUE_CLOSED:_++,ATTRIB_VALUE_UNQUOTED:_++,ATTRIB_VALUE_ENTITY_Q:_++,ATTRIB_VALUE_ENTITY_U:_++,CLOSE_TAG:_++,CLOSE_TAG_SAW_WHITE:_++,SCRIPT:_++,SCRIPT_ENDING:_++},l.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},l.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(l.ENTITIES).forEach(function(E){var p=l.ENTITIES[E],F=typeof p=="number"?String.fromCharCode(p):p;l.ENTITIES[E]=F});for(var tt in l.STATE)l.STATE[l.STATE[tt]]=tt;_=l.STATE;function Et(E,p,F){E[p]&&E[p](F)}function ft(E,p,F){E.textNode&&Tt(E),Et(E,p,F)}function Tt(E){E.textNode=Dt(E.opt,E.textNode),E.textNode&&Et(E,"ontext",E.textNode),E.textNode=""}function Dt(E,p){return E.trim&&(p=p.trim()),E.normalize&&(p=p.replace(/\s+/g," ")),p}function St(E,p){return Tt(E),E.trackPosition&&(p+=`
Line: `+E.line+`
Column: `+E.column+`
Char: `+E.c),p=new Error(p),E.error=p,Et(E,"onerror",p),E}function W(E){return E.sawRoot&&!E.closedRoot&&nt(E,"Unclosed root tag"),E.state!==_.BEGIN&&E.state!==_.BEGIN_WHITESPACE&&E.state!==_.TEXT&&St(E,"Unexpected end"),Tt(E),E.c="",E.closed=!0,Et(E,"onend"),r.call(E,E.strict,E.opt),E}function nt(E,p){if(typeof E!="object"||!(E instanceof r))throw new Error("bad call to strictFail");E.strict&&St(E,p)}function rt(E){E.strict||(E.tagName=E.tagName[E.looseCase]());var p=E.tags[E.tags.length-1]||E,F=E.tag={name:E.tagName,attributes:{}};E.opt.xmlns&&(F.ns=p.ns),E.attribList.length=0,ft(E,"onopentagstart",F)}function bt(E,p){var F=E.indexOf(":"),O=F<0?["",E]:E.split(":"),gt=O[0],jt=O[1];return p&&E==="xmlns"&&(gt="xmlns",jt=""),{prefix:gt,local:jt}}function j(E){if(E.strict||(E.attribName=E.attribName[E.looseCase]()),E.attribList.indexOf(E.attribName)!==-1||E.tag.attributes.hasOwnProperty(E.attribName)){E.attribName=E.attribValue="";return}if(E.opt.xmlns){var p=bt(E.attribName,!0),F=p.prefix,O=p.local;if(F==="xmlns")if(O==="xml"&&E.attribValue!==K)nt(E,"xml: prefix must be bound to "+K+`
Actual: `+E.attribValue);else if(O==="xmlns"&&E.attribValue!==z)nt(E,"xmlns: prefix must be bound to "+z+`
Actual: `+E.attribValue);else{var gt=E.tag,jt=E.tags[E.tags.length-1]||E;gt.ns===jt.ns&&(gt.ns=Object.create(jt.ns)),gt.ns[O]=E.attribValue}E.attribList.push([E.attribName,E.attribValue])}else E.tag.attributes[E.attribName]=E.attribValue,ft(E,"onattribute",{name:E.attribName,value:E.attribValue});E.attribName=E.attribValue=""}function J(E,p){if(E.opt.xmlns){var F=E.tag,O=bt(E.tagName);F.prefix=O.prefix,F.local=O.local,F.uri=F.ns[O.prefix]||"",F.prefix&&!F.uri&&(nt(E,"Unbound namespace prefix: "+JSON.stringify(E.tagName)),F.uri=O.prefix);var gt=E.tags[E.tags.length-1]||E;F.ns&&gt.ns!==F.ns&&Object.keys(F.ns).forEach(function(Vl){ft(E,"onopennamespace",{prefix:Vl,uri:F.ns[Vl]})});for(var jt=0,Mt=E.attribList.length;jt<Mt;jt++){var te=E.attribList[jt],ee=te[0],Ae=te[1],Xt=bt(ee,!0),xe=Xt.prefix,Ni=Xt.local,Ba=xe===""?"":F.ns[xe]||"",ra={name:ee,value:Ae,prefix:xe,local:Ni,uri:Ba};xe&&xe!=="xmlns"&&!Ba&&(nt(E,"Unbound namespace prefix: "+JSON.stringify(xe)),ra.uri=xe),E.tag.attributes[ee]=ra,ft(E,"onattribute",ra)}E.attribList.length=0}E.tag.isSelfClosing=!!p,E.sawRoot=!0,E.tags.push(E.tag),ft(E,"onopentag",E.tag),p||(!E.noscript&&E.tagName.toLowerCase()==="script"?E.state=_.SCRIPT:E.state=_.TEXT,E.tag=null,E.tagName=""),E.attribName=E.attribValue="",E.attribList.length=0}function it(E){if(!E.tagName){nt(E,"Weird empty close tag."),E.textNode+="</>",E.state=_.TEXT;return}if(E.script){if(E.tagName!=="script"){E.script+="</"+E.tagName+">",E.tagName="",E.state=_.SCRIPT;return}ft(E,"onscript",E.script),E.script=""}var p=E.tags.length,F=E.tagName;E.strict||(F=F[E.looseCase]());for(var O=F;p--;){var gt=E.tags[p];if(gt.name!==O)nt(E,"Unexpected close tag");else break}if(p<0){nt(E,"Unmatched closing tag: "+E.tagName),E.textNode+="</"+E.tagName+">",E.state=_.TEXT;return}E.tagName=F;for(var jt=E.tags.length;jt-- >p;){var Mt=E.tag=E.tags.pop();E.tagName=E.tag.name,ft(E,"onclosetag",E.tagName);var te={};for(var ee in Mt.ns)te[ee]=Mt.ns[ee];var Ae=E.tags[E.tags.length-1]||E;E.opt.xmlns&&Mt.ns!==Ae.ns&&Object.keys(Mt.ns).forEach(function(Xt){var xe=Mt.ns[Xt];ft(E,"onclosenamespace",{prefix:Xt,uri:xe})})}p===0&&(E.closedRoot=!0),E.tagName=E.attribValue=E.attribName="",E.attribList.length=0,E.state=_.TEXT}function st(E){var p=E.entity,F=p.toLowerCase(),O,gt="";return E.ENTITIES[p]?E.ENTITIES[p]:E.ENTITIES[F]?E.ENTITIES[F]:(p=F,p.charAt(0)==="#"&&(p.charAt(1)==="x"?(p=p.slice(2),O=parseInt(p,16),gt=O.toString(16)):(p=p.slice(1),O=parseInt(p,10),gt=O.toString(10))),p=p.replace(/^0+/,""),isNaN(O)||gt.toLowerCase()!==p?(nt(E,"Invalid character entity"),"&"+E.entity+";"):String.fromCodePoint(O))}function at(E,p){p==="<"?(E.state=_.OPEN_WAKA,E.startTagPosition=E.position):v(p)||(nt(E,"Non-whitespace before first tag."),E.textNode=p,E.state=_.TEXT)}function ht(E,p){var F="";return p<E.length&&(F=E.charAt(p)),F}function pt(E){var p=this;if(this.error)throw this.error;if(p.closed)return St(p,"Cannot write after close. Assign an onready handler.");if(E===null)return W(p);typeof E=="object"&&(E=E.toString());for(var F=0,O="";O=ht(E,F++),p.c=O,!!O;)switch(p.trackPosition&&(p.position++,O===`
`?(p.line++,p.column=0):p.column++),p.state){case _.BEGIN:if(p.state=_.BEGIN_WHITESPACE,O==="\uFEFF")continue;at(p,O);continue;case _.BEGIN_WHITESPACE:at(p,O);continue;case _.TEXT:if(p.sawRoot&&!p.closedRoot){for(var gt=F-1;O&&O!=="<"&&O!=="&";)O=ht(E,F++),O&&p.trackPosition&&(p.position++,O===`
`?(p.line++,p.column=0):p.column++);p.textNode+=E.substring(gt,F-1)}O==="<"&&!(p.sawRoot&&p.closedRoot&&!p.strict)?(p.state=_.OPEN_WAKA,p.startTagPosition=p.position):(!v(O)&&(!p.sawRoot||p.closedRoot)&&nt(p,"Text data outside of root node."),O==="&"?p.state=_.TEXT_ENTITY:p.textNode+=O);continue;case _.SCRIPT:O==="<"?p.state=_.SCRIPT_ENDING:p.script+=O;continue;case _.SCRIPT_ENDING:O==="/"?p.state=_.CLOSE_TAG:(p.script+="<"+O,p.state=_.SCRIPT);continue;case _.OPEN_WAKA:if(O==="!")p.state=_.SGML_DECL,p.sgmlDecl="";else if(!v(O))if(Q(U,O))p.state=_.OPEN_TAG,p.tagName=O;else if(O==="/")p.state=_.CLOSE_TAG,p.tagName="";else if(O==="?")p.state=_.PROC_INST,p.procInstName=p.procInstBody="";else{if(nt(p,"Unencoded <"),p.startTagPosition+1<p.position){var jt=p.position-p.startTagPosition;O=new Array(jt).join(" ")+O}p.textNode+="<"+O,p.state=_.TEXT}continue;case _.SGML_DECL:if(p.sgmlDecl+O==="--"){p.state=_.COMMENT,p.comment="",p.sgmlDecl="";continue}p.doctype&&p.doctype!==!0&&p.sgmlDecl?(p.state=_.DOCTYPE_DTD,p.doctype+="<!"+p.sgmlDecl+O,p.sgmlDecl=""):(p.sgmlDecl+O).toUpperCase()===T?(ft(p,"onopencdata"),p.state=_.CDATA,p.sgmlDecl="",p.cdata=""):(p.sgmlDecl+O).toUpperCase()===B?(p.state=_.DOCTYPE,(p.doctype||p.sawRoot)&&nt(p,"Inappropriately located doctype declaration"),p.doctype="",p.sgmlDecl=""):O===">"?(ft(p,"onsgmldeclaration",p.sgmlDecl),p.sgmlDecl="",p.state=_.TEXT):(D(O)&&(p.state=_.SGML_DECL_QUOTED),p.sgmlDecl+=O);continue;case _.SGML_DECL_QUOTED:O===p.q&&(p.state=_.SGML_DECL,p.q=""),p.sgmlDecl+=O;continue;case _.DOCTYPE:O===">"?(p.state=_.TEXT,ft(p,"ondoctype",p.doctype),p.doctype=!0):(p.doctype+=O,O==="["?p.state=_.DOCTYPE_DTD:D(O)&&(p.state=_.DOCTYPE_QUOTED,p.q=O));continue;case _.DOCTYPE_QUOTED:p.doctype+=O,O===p.q&&(p.q="",p.state=_.DOCTYPE);continue;case _.DOCTYPE_DTD:O==="]"?(p.doctype+=O,p.state=_.DOCTYPE):O==="<"?(p.state=_.OPEN_WAKA,p.startTagPosition=p.position):D(O)?(p.doctype+=O,p.state=_.DOCTYPE_DTD_QUOTED,p.q=O):p.doctype+=O;continue;case _.DOCTYPE_DTD_QUOTED:p.doctype+=O,O===p.q&&(p.state=_.DOCTYPE_DTD,p.q="");continue;case _.COMMENT:O==="-"?p.state=_.COMMENT_ENDING:p.comment+=O;continue;case _.COMMENT_ENDING:O==="-"?(p.state=_.COMMENT_ENDED,p.comment=Dt(p.opt,p.comment),p.comment&&ft(p,"oncomment",p.comment),p.comment=""):(p.comment+="-"+O,p.state=_.COMMENT);continue;case _.COMMENT_ENDED:O!==">"?(nt(p,"Malformed comment"),p.comment+="--"+O,p.state=_.COMMENT):p.doctype&&p.doctype!==!0?p.state=_.DOCTYPE_DTD:p.state=_.TEXT;continue;case _.CDATA:O==="]"?p.state=_.CDATA_ENDING:p.cdata+=O;continue;case _.CDATA_ENDING:O==="]"?p.state=_.CDATA_ENDING_2:(p.cdata+="]"+O,p.state=_.CDATA);continue;case _.CDATA_ENDING_2:O===">"?(p.cdata&&ft(p,"oncdata",p.cdata),ft(p,"onclosecdata"),p.cdata="",p.state=_.TEXT):O==="]"?p.cdata+="]":(p.cdata+="]]"+O,p.state=_.CDATA);continue;case _.PROC_INST:O==="?"?p.state=_.PROC_INST_ENDING:v(O)?p.state=_.PROC_INST_BODY:p.procInstName+=O;continue;case _.PROC_INST_BODY:if(!p.procInstBody&&v(O))continue;O==="?"?p.state=_.PROC_INST_ENDING:p.procInstBody+=O;continue;case _.PROC_INST_ENDING:O===">"?(ft(p,"onprocessinginstruction",{name:p.procInstName,body:p.procInstBody}),p.procInstName=p.procInstBody="",p.state=_.TEXT):(p.procInstBody+="?"+O,p.state=_.PROC_INST_BODY);continue;case _.OPEN_TAG:Q(R,O)?p.tagName+=O:(rt(p),O===">"?J(p):O==="/"?p.state=_.OPEN_TAG_SLASH:(v(O)||nt(p,"Invalid character in tag name"),p.state=_.ATTRIB));continue;case _.OPEN_TAG_SLASH:O===">"?(J(p,!0),it(p)):(nt(p,"Forward-slash in opening tag not followed by >"),p.state=_.ATTRIB);continue;case _.ATTRIB:if(v(O))continue;O===">"?J(p):O==="/"?p.state=_.OPEN_TAG_SLASH:Q(U,O)?(p.attribName=O,p.attribValue="",p.state=_.ATTRIB_NAME):nt(p,"Invalid attribute name");continue;case _.ATTRIB_NAME:O==="="?p.state=_.ATTRIB_VALUE:O===">"?(nt(p,"Attribute without value"),p.attribValue=p.attribName,j(p),J(p)):v(O)?p.state=_.ATTRIB_NAME_SAW_WHITE:Q(R,O)?p.attribName+=O:nt(p,"Invalid attribute name");continue;case _.ATTRIB_NAME_SAW_WHITE:if(O==="=")p.state=_.ATTRIB_VALUE;else{if(v(O))continue;nt(p,"Attribute without value"),p.tag.attributes[p.attribName]="",p.attribValue="",ft(p,"onattribute",{name:p.attribName,value:""}),p.attribName="",O===">"?J(p):Q(U,O)?(p.attribName=O,p.state=_.ATTRIB_NAME):(nt(p,"Invalid attribute name"),p.state=_.ATTRIB)}continue;case _.ATTRIB_VALUE:if(v(O))continue;D(O)?(p.q=O,p.state=_.ATTRIB_VALUE_QUOTED):(p.opt.unquotedAttributeValues||St(p,"Unquoted attribute value"),p.state=_.ATTRIB_VALUE_UNQUOTED,p.attribValue=O);continue;case _.ATTRIB_VALUE_QUOTED:if(O!==p.q){O==="&"?p.state=_.ATTRIB_VALUE_ENTITY_Q:p.attribValue+=O;continue}j(p),p.q="",p.state=_.ATTRIB_VALUE_CLOSED;continue;case _.ATTRIB_VALUE_CLOSED:v(O)?p.state=_.ATTRIB:O===">"?J(p):O==="/"?p.state=_.OPEN_TAG_SLASH:Q(U,O)?(nt(p,"No whitespace between attributes"),p.attribName=O,p.attribValue="",p.state=_.ATTRIB_NAME):nt(p,"Invalid attribute name");continue;case _.ATTRIB_VALUE_UNQUOTED:if(!X(O)){O==="&"?p.state=_.ATTRIB_VALUE_ENTITY_U:p.attribValue+=O;continue}j(p),O===">"?J(p):p.state=_.ATTRIB;continue;case _.CLOSE_TAG:if(p.tagName)O===">"?it(p):Q(R,O)?p.tagName+=O:p.script?(p.script+="</"+p.tagName,p.tagName="",p.state=_.SCRIPT):(v(O)||nt(p,"Invalid tagname in closing tag"),p.state=_.CLOSE_TAG_SAW_WHITE);else{if(v(O))continue;et(U,O)?p.script?(p.script+="</"+O,p.state=_.SCRIPT):nt(p,"Invalid tagname in closing tag."):p.tagName=O}continue;case _.CLOSE_TAG_SAW_WHITE:if(v(O))continue;O===">"?it(p):nt(p,"Invalid characters in closing tag");continue;case _.TEXT_ENTITY:case _.ATTRIB_VALUE_ENTITY_Q:case _.ATTRIB_VALUE_ENTITY_U:var Mt,te;switch(p.state){case _.TEXT_ENTITY:Mt=_.TEXT,te="textNode";break;case _.ATTRIB_VALUE_ENTITY_Q:Mt=_.ATTRIB_VALUE_QUOTED,te="attribValue";break;case _.ATTRIB_VALUE_ENTITY_U:Mt=_.ATTRIB_VALUE_UNQUOTED,te="attribValue";break}if(O===";"){var ee=st(p);p.opt.unparsedEntities&&!Object.values(l.XML_ENTITIES).includes(ee)?(p.entity="",p.state=Mt,p.write(ee)):(p[te]+=ee,p.entity="",p.state=Mt)}else Q(p.entity.length?S:M,O)?p.entity+=O:(nt(p,"Invalid character in entity name"),p[te]+="&"+p.entity+O,p.entity="",p.state=Mt);continue;default:throw new Error(p,"Unknown state: "+p.state)}return p.position>=p.bufferCheckPosition&&c(p),p}/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */String.fromCodePoint||function(){var E=String.fromCharCode,p=Math.floor,F=function(){var O=16384,gt=[],jt,Mt,te=-1,ee=arguments.length;if(!ee)return"";for(var Ae="";++te<ee;){var Xt=Number(arguments[te]);if(!isFinite(Xt)||Xt<0||Xt>1114111||p(Xt)!==Xt)throw RangeError("Invalid code point: "+Xt);Xt<=65535?gt.push(Xt):(Xt-=65536,jt=(Xt>>10)+55296,Mt=Xt%1024+56320,gt.push(jt,Mt)),(te+1===ee||gt.length>O)&&(Ae+=E.apply(null,gt),gt.length=0)}return Ae};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:F,configurable:!0,writable:!0}):String.fromCodePoint=F}()})(a)}(hc)),hc}var gc,J0;function sf(){return J0||(J0=1,gc={isArray:function(a){return Array.isArray?Array.isArray(a):Object.prototype.toString.call(a)==="[object Array]"}}),gc}var yc,P0;function of(){if(P0)return yc;P0=1;var a=sf().isArray;return yc={copyOptions:function(l){var s,r={};for(s in l)l.hasOwnProperty(s)&&(r[s]=l[s]);return r},ensureFlagExists:function(l,s){(!(l in s)||typeof s[l]!="boolean")&&(s[l]=!1)},ensureSpacesExists:function(l){(!("spaces"in l)||typeof l.spaces!="number"&&typeof l.spaces!="string")&&(l.spaces=0)},ensureAlwaysArrayExists:function(l){(!("alwaysArray"in l)||typeof l.alwaysArray!="boolean"&&!a(l.alwaysArray))&&(l.alwaysArray=!1)},ensureKeyExists:function(l,s){(!(l+"Key"in s)||typeof s[l+"Key"]!="string")&&(s[l+"Key"]=s.compact?"_"+l:l)},checkFnExists:function(l,s){return l+"Fn"in s}},yc}var bc,I0;function Dg(){if(I0)return bc;I0=1;var a=H4(),l=of(),s=sf().isArray,r,c;function f(R){return r=l.copyOptions(R),l.ensureFlagExists("ignoreDeclaration",r),l.ensureFlagExists("ignoreInstruction",r),l.ensureFlagExists("ignoreAttributes",r),l.ensureFlagExists("ignoreText",r),l.ensureFlagExists("ignoreComment",r),l.ensureFlagExists("ignoreCdata",r),l.ensureFlagExists("ignoreDoctype",r),l.ensureFlagExists("compact",r),l.ensureFlagExists("alwaysChildren",r),l.ensureFlagExists("addParent",r),l.ensureFlagExists("trim",r),l.ensureFlagExists("nativeType",r),l.ensureFlagExists("nativeTypeAttributes",r),l.ensureFlagExists("sanitize",r),l.ensureFlagExists("instructionHasAttributes",r),l.ensureFlagExists("captureSpacesBetweenElements",r),l.ensureAlwaysArrayExists(r),l.ensureKeyExists("declaration",r),l.ensureKeyExists("instruction",r),l.ensureKeyExists("attributes",r),l.ensureKeyExists("text",r),l.ensureKeyExists("comment",r),l.ensureKeyExists("cdata",r),l.ensureKeyExists("doctype",r),l.ensureKeyExists("type",r),l.ensureKeyExists("name",r),l.ensureKeyExists("elements",r),l.ensureKeyExists("parent",r),l.checkFnExists("doctype",r),l.checkFnExists("instruction",r),l.checkFnExists("cdata",r),l.checkFnExists("comment",r),l.checkFnExists("text",r),l.checkFnExists("instructionName",r),l.checkFnExists("elementName",r),l.checkFnExists("attributeName",r),l.checkFnExists("attributeValue",r),l.checkFnExists("attributes",r),r}function m(R){var M=Number(R);if(!isNaN(M))return M;var S=R.toLowerCase();return S==="true"?!0:S==="false"?!1:R}function g(R,M){var S;if(r.compact){if(!c[r[R+"Key"]]&&(s(r.alwaysArray)?r.alwaysArray.indexOf(r[R+"Key"])!==-1:r.alwaysArray)&&(c[r[R+"Key"]]=[]),c[r[R+"Key"]]&&!s(c[r[R+"Key"]])&&(c[r[R+"Key"]]=[c[r[R+"Key"]]]),R+"Fn"in r&&typeof M=="string"&&(M=r[R+"Fn"](M,c)),R==="instruction"&&("instructionFn"in r||"instructionNameFn"in r)){for(S in M)if(M.hasOwnProperty(S))if("instructionFn"in r)M[S]=r.instructionFn(M[S],S,c);else{var v=M[S];delete M[S],M[r.instructionNameFn(S,v,c)]=v}}s(c[r[R+"Key"]])?c[r[R+"Key"]].push(M):c[r[R+"Key"]]=M}else{c[r.elementsKey]||(c[r.elementsKey]=[]);var D={};if(D[r.typeKey]=R,R==="instruction"){for(S in M)if(M.hasOwnProperty(S))break;D[r.nameKey]="instructionNameFn"in r?r.instructionNameFn(S,M,c):S,r.instructionHasAttributes?(D[r.attributesKey]=M[S][r.attributesKey],"instructionFn"in r&&(D[r.attributesKey]=r.instructionFn(D[r.attributesKey],S,c))):("instructionFn"in r&&(M[S]=r.instructionFn(M[S],S,c)),D[r.instructionKey]=M[S])}else R+"Fn"in r&&(M=r[R+"Fn"](M,c)),D[r[R+"Key"]]=M;r.addParent&&(D[r.parentKey]=c),c[r.elementsKey].push(D)}}function b(R){if("attributesFn"in r&&R&&(R=r.attributesFn(R,c)),(r.trim||"attributeValueFn"in r||"attributeNameFn"in r||r.nativeTypeAttributes)&&R){var M;for(M in R)if(R.hasOwnProperty(M)&&(r.trim&&(R[M]=R[M].trim()),r.nativeTypeAttributes&&(R[M]=m(R[M])),"attributeValueFn"in r&&(R[M]=r.attributeValueFn(R[M],M,c)),"attributeNameFn"in r)){var S=R[M];delete R[M],R[r.attributeNameFn(M,R[M],c)]=S}}return R}function h(R){var M={};if(R.body&&(R.name.toLowerCase()==="xml"||r.instructionHasAttributes)){for(var S=/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g,v;(v=S.exec(R.body))!==null;)M[v[1]]=v[2]||v[3]||v[4];M=b(M)}if(R.name.toLowerCase()==="xml"){if(r.ignoreDeclaration)return;c[r.declarationKey]={},Object.keys(M).length&&(c[r.declarationKey][r.attributesKey]=M),r.addParent&&(c[r.declarationKey][r.parentKey]=c)}else{if(r.ignoreInstruction)return;r.trim&&(R.body=R.body.trim());var D={};r.instructionHasAttributes&&Object.keys(M).length?(D[R.name]={},D[R.name][r.attributesKey]=M):D[R.name]=R.body,g("instruction",D)}}function x(R,M){var S;if(typeof R=="object"&&(M=R.attributes,R=R.name),M=b(M),"elementNameFn"in r&&(R=r.elementNameFn(R,c)),r.compact){if(S={},!r.ignoreAttributes&&M&&Object.keys(M).length){S[r.attributesKey]={};var v;for(v in M)M.hasOwnProperty(v)&&(S[r.attributesKey][v]=M[v])}!(R in c)&&(s(r.alwaysArray)?r.alwaysArray.indexOf(R)!==-1:r.alwaysArray)&&(c[R]=[]),c[R]&&!s(c[R])&&(c[R]=[c[R]]),s(c[R])?c[R].push(S):c[R]=S}else c[r.elementsKey]||(c[r.elementsKey]=[]),S={},S[r.typeKey]="element",S[r.nameKey]=R,!r.ignoreAttributes&&M&&Object.keys(M).length&&(S[r.attributesKey]=M),r.alwaysChildren&&(S[r.elementsKey]=[]),c[r.elementsKey].push(S);S[r.parentKey]=c,c=S}function T(R){r.ignoreText||!R.trim()&&!r.captureSpacesBetweenElements||(r.trim&&(R=R.trim()),r.nativeType&&(R=m(R)),r.sanitize&&(R=R.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),g("text",R))}function B(R){r.ignoreComment||(r.trim&&(R=R.trim()),g("comment",R))}function K(R){var M=c[r.parentKey];r.addParent||delete c[r.parentKey],c=M}function z(R){r.ignoreCdata||(r.trim&&(R=R.trim()),g("cdata",R))}function G(R){r.ignoreDoctype||(R=R.replace(/^ /,""),r.trim&&(R=R.trim()),g("doctype",R))}function U(R){R.note=R}return bc=function(R,M){var S=a.parser(!0,{}),v={};if(c=v,r=f(M),S.opt={strictEntities:!0},S.onopentag=x,S.ontext=T,S.oncomment=B,S.onclosetag=K,S.onerror=U,S.oncdata=z,S.ondoctype=G,S.onprocessinginstruction=h,S.write(R).close(),v[r.elementsKey]){var D=v[r.elementsKey];delete v[r.elementsKey],v[r.elementsKey]=D,delete v.text}return v},bc}var vc,W0;function k4(){if(W0)return vc;W0=1;var a=of(),l=Dg();function s(r){var c=a.copyOptions(r);return a.ensureSpacesExists(c),c}return vc=function(r,c){var f,m,g,b;return f=s(c),m=l(r,f),b="compact"in f&&f.compact?"_parent":"parent","addParent"in f&&f.addParent?g=JSON.stringify(m,function(h,x){return h===b?"_":x},f.spaces):g=JSON.stringify(m,null,f.spaces),g.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")},vc}var xc,th;function zg(){if(th)return xc;th=1;var a=of(),l=sf().isArray,s,r;function c(S){var v=a.copyOptions(S);return a.ensureFlagExists("ignoreDeclaration",v),a.ensureFlagExists("ignoreInstruction",v),a.ensureFlagExists("ignoreAttributes",v),a.ensureFlagExists("ignoreText",v),a.ensureFlagExists("ignoreComment",v),a.ensureFlagExists("ignoreCdata",v),a.ensureFlagExists("ignoreDoctype",v),a.ensureFlagExists("compact",v),a.ensureFlagExists("indentText",v),a.ensureFlagExists("indentCdata",v),a.ensureFlagExists("indentAttributes",v),a.ensureFlagExists("indentInstruction",v),a.ensureFlagExists("fullTagEmptyElement",v),a.ensureFlagExists("noQuotesForNativeAttributes",v),a.ensureSpacesExists(v),typeof v.spaces=="number"&&(v.spaces=Array(v.spaces+1).join(" ")),a.ensureKeyExists("declaration",v),a.ensureKeyExists("instruction",v),a.ensureKeyExists("attributes",v),a.ensureKeyExists("text",v),a.ensureKeyExists("comment",v),a.ensureKeyExists("cdata",v),a.ensureKeyExists("doctype",v),a.ensureKeyExists("type",v),a.ensureKeyExists("name",v),a.ensureKeyExists("elements",v),a.checkFnExists("doctype",v),a.checkFnExists("instruction",v),a.checkFnExists("cdata",v),a.checkFnExists("comment",v),a.checkFnExists("text",v),a.checkFnExists("instructionName",v),a.checkFnExists("elementName",v),a.checkFnExists("attributeName",v),a.checkFnExists("attributeValue",v),a.checkFnExists("attributes",v),a.checkFnExists("fullTagEmptyElement",v),v}function f(S,v,D){return(!D&&S.spaces?`
`:"")+Array(v+1).join(S.spaces)}function m(S,v,D){if(v.ignoreAttributes)return"";"attributesFn"in v&&(S=v.attributesFn(S,r,s));var X,Q,et,_,tt=[];for(X in S)S.hasOwnProperty(X)&&S[X]!==null&&S[X]!==void 0&&(_=v.noQuotesForNativeAttributes&&typeof S[X]!="string"?"":'"',Q=""+S[X],Q=Q.replace(/"/g,"&quot;"),et="attributeNameFn"in v?v.attributeNameFn(X,Q,r,s):X,tt.push(v.spaces&&v.indentAttributes?f(v,D+1,!1):" "),tt.push(et+"="+_+("attributeValueFn"in v?v.attributeValueFn(Q,X,r,s):Q)+_));return S&&Object.keys(S).length&&v.spaces&&v.indentAttributes&&tt.push(f(v,D,!1)),tt.join("")}function g(S,v,D){return s=S,r="xml",v.ignoreDeclaration?"":"<?xml"+m(S[v.attributesKey],v,D)+"?>"}function b(S,v,D){if(v.ignoreInstruction)return"";var X;for(X in S)if(S.hasOwnProperty(X))break;var Q="instructionNameFn"in v?v.instructionNameFn(X,S[X],r,s):X;if(typeof S[X]=="object")return s=S,r=Q,"<?"+Q+m(S[X][v.attributesKey],v,D)+"?>";var et=S[X]?S[X]:"";return"instructionFn"in v&&(et=v.instructionFn(et,X,r,s)),"<?"+Q+(et?" "+et:"")+"?>"}function h(S,v){return v.ignoreComment?"":"<!--"+("commentFn"in v?v.commentFn(S,r,s):S)+"-->"}function x(S,v){return v.ignoreCdata?"":"<![CDATA["+("cdataFn"in v?v.cdataFn(S,r,s):S.replace("]]>","]]]]><![CDATA[>"))+"]]>"}function T(S,v){return v.ignoreDoctype?"":"<!DOCTYPE "+("doctypeFn"in v?v.doctypeFn(S,r,s):S)+">"}function B(S,v){return v.ignoreText?"":(S=""+S,S=S.replace(/&amp;/g,"&"),S=S.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),"textFn"in v?v.textFn(S,r,s):S)}function K(S,v){var D;if(S.elements&&S.elements.length)for(D=0;D<S.elements.length;++D)switch(S.elements[D][v.typeKey]){case"text":if(v.indentText)return!0;break;case"cdata":if(v.indentCdata)return!0;break;case"instruction":if(v.indentInstruction)return!0;break;case"doctype":case"comment":case"element":return!0;default:return!0}return!1}function z(S,v,D){s=S,r=S.name;var X=[],Q="elementNameFn"in v?v.elementNameFn(S.name,S):S.name;X.push("<"+Q),S[v.attributesKey]&&X.push(m(S[v.attributesKey],v,D));var et=S[v.elementsKey]&&S[v.elementsKey].length||S[v.attributesKey]&&S[v.attributesKey]["xml:space"]==="preserve";return et||("fullTagEmptyElementFn"in v?et=v.fullTagEmptyElementFn(S.name,S):et=v.fullTagEmptyElement),et?(X.push(">"),S[v.elementsKey]&&S[v.elementsKey].length&&(X.push(G(S[v.elementsKey],v,D+1)),s=S,r=S.name),X.push(v.spaces&&K(S,v)?`
`+Array(D+1).join(v.spaces):""),X.push("</"+Q+">")):X.push("/>"),X.join("")}function G(S,v,D,X){return S.reduce(function(Q,et){var _=f(v,D,X&&!Q);switch(et.type){case"element":return Q+_+z(et,v,D);case"comment":return Q+_+h(et[v.commentKey],v);case"doctype":return Q+_+T(et[v.doctypeKey],v);case"cdata":return Q+(v.indentCdata?_:"")+x(et[v.cdataKey],v);case"text":return Q+(v.indentText?_:"")+B(et[v.textKey],v);case"instruction":var tt={};return tt[et[v.nameKey]]=et[v.attributesKey]?et:et[v.instructionKey],Q+(v.indentInstruction?_:"")+b(tt,v,D)}},"")}function U(S,v,D){var X;for(X in S)if(S.hasOwnProperty(X))switch(X){case v.parentKey:case v.attributesKey:break;case v.textKey:if(v.indentText||D)return!0;break;case v.cdataKey:if(v.indentCdata||D)return!0;break;case v.instructionKey:if(v.indentInstruction||D)return!0;break;case v.doctypeKey:case v.commentKey:return!0;default:return!0}return!1}function R(S,v,D,X,Q){s=S,r=v;var et="elementNameFn"in D?D.elementNameFn(v,S):v;if(typeof S>"u"||S===null||S==="")return"fullTagEmptyElementFn"in D&&D.fullTagEmptyElementFn(v,S)||D.fullTagEmptyElement?"<"+et+"></"+et+">":"<"+et+"/>";var _=[];if(v){if(_.push("<"+et),typeof S!="object")return _.push(">"+B(S,D)+"</"+et+">"),_.join("");S[D.attributesKey]&&_.push(m(S[D.attributesKey],D,X));var tt=U(S,D,!0)||S[D.attributesKey]&&S[D.attributesKey]["xml:space"]==="preserve";if(tt||("fullTagEmptyElementFn"in D?tt=D.fullTagEmptyElementFn(v,S):tt=D.fullTagEmptyElement),tt)_.push(">");else return _.push("/>"),_.join("")}return _.push(M(S,D,X+1,!1)),s=S,r=v,v&&_.push((Q?f(D,X,!1):"")+"</"+et+">"),_.join("")}function M(S,v,D,X){var Q,et,_,tt=[];for(et in S)if(S.hasOwnProperty(et))for(_=l(S[et])?S[et]:[S[et]],Q=0;Q<_.length;++Q){switch(et){case v.declarationKey:tt.push(g(_[Q],v,D));break;case v.instructionKey:tt.push((v.indentInstruction?f(v,D,X):"")+b(_[Q],v,D));break;case v.attributesKey:case v.parentKey:break;case v.textKey:tt.push((v.indentText?f(v,D,X):"")+B(_[Q],v));break;case v.cdataKey:tt.push((v.indentCdata?f(v,D,X):"")+x(_[Q],v));break;case v.doctypeKey:tt.push(f(v,D,X)+T(_[Q],v));break;case v.commentKey:tt.push(f(v,D,X)+h(_[Q],v));break;default:tt.push(f(v,D,X)+R(_[Q],et,v,D,U(_[Q],v)))}X=X&&!tt.length}return tt.join("")}return xc=function(S,v){v=c(v);var D=[];return s=S,r="_root_",v.compact?D.push(M(S,v,0,!0)):(S[v.declarationKey]&&D.push(g(S[v.declarationKey],v,0)),S[v.elementsKey]&&S[v.elementsKey].length&&D.push(G(S[v.elementsKey],v,0,!D.length))),D.join("")},xc}var Ec,eh;function G4(){if(eh)return Ec;eh=1;var a=zg();return Ec=function(l,s){l instanceof Buffer&&(l=l.toString());var r=null;if(typeof l=="string")try{r=JSON.parse(l)}catch{throw new Error("The JSON structure is invalid")}else r=l;return a(r,s)},Ec}var wc,nh;function q4(){if(nh)return wc;nh=1;var a=Dg(),l=k4(),s=zg(),r=G4();return wc={xml2js:a,xml2json:l,js2xml:s,json2xml:r},wc}var ah=q4();const Y4=a=>`https://corsproxy.io/?https://boardgamegeek.com/xmlapi/boardgame/${a}`,F4=3,K4=1e3;function V4(a){const[l,s]=k.useState([]),[r,c]=k.useState([]),[f,m]=k.useState(!0),[g,b]=k.useState(!1),[h,x]=k.useState(null),[T,B]=k.useState(!1),K=k.useRef({}),z=`www.boardgamegeek.com/xmlapi/collection/${a}?own=1`,G=async R=>{await Promise.allSettled(R.map(async S=>{const v=S.id;if(!K.current[v])try{const D=await Zt.get(Y4(v)),X=ah.xml2js(D.data,{compact:!0});K.current[v]=X.boardgames.boardgame}catch(D){console.error("Failed to prefetch:",D)}})),B(!0),m(!1);const M=new Set;Object.values(K.current).forEach(S=>{const v=S.boardgamecategory;Array.isArray(v)?v.forEach(D=>{D._text&&M.add(D._text)}):v!=null&&v._text&&M.add(v._text)}),c(Array.from(M).sort((S,v)=>S.localeCompare(v)))},U=async(R=0)=>{var M;try{const S=U4;if(typeof S=="string"&&S.includes("<message>")){R<F4?(console.warn(`BGG asked to retry, attempt ${R+1}`),setTimeout(()=>U(R+1),K4)):(x("BoardGameGeek is taking too long to process the request. Try again later."),m(!1));return}const D=((M=ah.xml2js(S,{compact:!0}).items)==null?void 0:M.item)||[],X=(Array.isArray(D)?D:[D]).map(Q=>{var et,_,tt,Et,ft,Tt,Dt,St,W,nt,rt;return{id:(et=Q._attributes)==null?void 0:et.objectid,name:((_=Q.name)==null?void 0:_._text)??"Unknown Game",image:((tt=Q.image)==null?void 0:tt._text)??"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KOdTJozEijfI8EIMywZoVREYn4ff9J04Wg&s",minPlayers:parseInt(((ft=(Et=Q.stats)==null?void 0:Et._attributes)==null?void 0:ft.minplayers)??"",10),maxPlayers:parseInt(((Dt=(Tt=Q.stats)==null?void 0:Tt._attributes)==null?void 0:Dt.maxplayers)??"",10),rating:((rt=(nt=(W=(St=Q.stats)==null?void 0:St.rating)==null?void 0:W.average)==null?void 0:nt._attributes)==null?void 0:rt.value)!==void 0?parseFloat(Q.stats.rating.average._attributes.value).toFixed(2):"No rating"}});s(X),await G(X)}catch(S){console.error("Fetch error:",S),m(!1),x("Failed to fetch data. Make sure your username is correct.")}};return k.useEffect(()=>{a&&(s([]),x(null),B(!1),m(!0),U())},[z,a]),{games:l,error:h,loadingGames:f,loadingDetails:g,detailsReady:T,gameDetailsCache:K,availableGameCategories:r,setLoadingDetails:b}}function Q4({games:a,gameDetailsCache:l,sortOption:s,sortDirection:r,playerCount:c,durationFilter:f,gameCategory:m,ready:g}){const[b,h]=k.useState([]),[x,T]=k.useState(""),[B,K]=k.useState([]),z=k.useCallback(G=>[...G].sort((U,R)=>{let M=0;if(s==="name"&&(M=U.name.localeCompare(R.name)),s==="minPlayers"&&(M=U.minPlayers-R.minPlayers),s==="maxPlayers"&&(M=U.maxPlayers-R.maxPlayers),s==="rating"){const S=parseFloat(U.rating)||0;M=(parseFloat(R.rating)||0)-S}return r==="asc"?M:-M}),[s,r]);return k.useEffect(()=>{var R;if(!g)return;let G=[...a];if(c){const M=parseInt(c,10);G=G.filter(S=>M>=S.minPlayers&&M<=S.maxPlayers)}f&&(G=G.filter(M=>{var D,X;const S=(X=(D=l.current[M.id])==null?void 0:D.playingtime)==null?void 0:X._text,v=S?parseInt(S,10):NaN;if(isNaN(v)||v<=0)return!1;switch(f){case"very-short":return v<=20;case"short":return v>20&&v<=30;case"medium":return v>30&&v<=45;case"long":return v>45&&v<=60;case"very-long":return v>60;default:return!0}}));const U=new Set;for(const M of G){const S=(R=l.current[M.id])==null?void 0:R.boardgamecategory;(Array.isArray(S)?S:S?[S]:[]).forEach(D=>{D._text&&U.add(D._text)})}K(Array.from(U).sort((M,S)=>M.localeCompare(S))),m.length>0&&(G=G.filter(M=>{var D;const S=(D=l.current[M.id])==null?void 0:D.boardgamecategory,v=Array.isArray(S)?S.map(X=>{var Q;return(Q=X._text)==null?void 0:Q.toLowerCase()}):S!=null&&S._text?[S._text.toLowerCase()]:[];return m.some(X=>v.includes(X.toLowerCase()))})),h(z(G)),T(c)},[a,c,f,m,s,r,z,g,l]),{filteredGames:b,playerCountApplied:x,availableCategories:B}}function X4(a,l,s){k.useEffect(()=>{const r=c=>{if(!a||s.length===0)return;const f=s.findIndex(b=>b.id===a.id);if(f===-1)return;const m=c.key==="ArrowRight"?1:c.key==="ArrowLeft"?-1:0;if(!m)return;const g=(f+m+s.length)%s.length;l(s[g])};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[a,l,s])}const $4=V.div`
  padding: 20px;
  position: relative;
  background-color: ${({theme:a})=>a.sectionOdd};
  min-height: 100vh;
`,Z4=V.div`
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  background-color: ${({theme:a})=>a.sectionEven};
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`,J4=V.h2`
  font-size: 36px;
  color: ${({theme:a})=>a.primaryColor};
  background-image: ${({theme:a})=>a.gradient};
  margin-bottom: 8px;
  margin-top: 10px;
  ${lt.mobile} {
    margin-top: 0;
  }
`,ih=V.p`
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 32px;
  color: ${({theme:a})=>a.primaryColor};
  ${lt.mobile} {
    margin-top: 0;
    margin-bottom: 0;
  }
`,P4=V.p`
  font-size: 16.5px;
  max-width: 600px;
  margin: 0 auto;
  color: ${({theme:a})=>a.textGray};
`,I4=V.p`
  color: ${a=>a.color??a.theme.text};

  &.not-found {
    color: ${({theme:a})=>a.textGray};
    text-align: center;
    font-size: 3rem;
    margin-bottom: 20px;
    color: ${({theme:a})=>a.text};

    ${lt.mobile} {
      font-size: 24px;
    }
  }
`,W4=V.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;

  ${lt.mobile} {
    grid-template-columns: 1fr;
  }
`,t3=V.div`
  background-color: ${({theme:a})=>a.sectionEven};
  padding: 20px;
  border-radius: 12px;

  ${lt.mobile} {
    display: none;
  }
`,e3=V.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,n3=V.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  ${lt.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`,a3=V.div`
  animation: ${xx} 0.8s ease;
`,i3=V.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`,l3=V.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`,r3=V.div`
  position: fixed;
  top: 3dvh;
  left: 0;
  right: 0;
  background: ${({theme:a})=>a.sectionOdd};
  border-radius: 20px;
  padding: 24px;
  z-index: 2001;
  max-height: 85dvh;
  overflow-y: auto;
  width: 80%;
  margin: 0 auto;
  animation: ${sg} 0.3s ease;
`,lh=V.button`
  background-color: ${({theme:a})=>a.primaryColor};
  color: ${({theme:a})=>a.textLight};
  padding: 10px 16px;
  border-radius: 999px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  svg {
    margin-left: 8px;
  }
`,u3=V.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  ${lt.mobile} {
    display: flex;
  }
`,s3=V.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 22px;
  color: #888;
  cursor: pointer;
  z-index: 2002;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }
`,o3=()=>{const[a]=Ub(),[l,s]=k.useState(null),[r,c]=k.useState(!1),f=window.innerWidth<=768,[m,g]=k.useState(null),[b,h]=k.useState(""),[x,T]=k.useState(""),[B,K]=k.useState([]),[z,G]=k.useState("name"),[U,R]=k.useState("asc");k.useEffect(()=>{const tt=a.get("username"),Et=a.get("players"),ft=a.get("duration"),Tt=a.get("sorting"),Dt=a.get("gameCategory");if(g(tt||"gmelgaba"),tt&&g(tt),Et&&h(Et),ft&&T(ft),Dt&&K(Dt.split(",")),Tt){const W=/(name|minPlayers|maxPlayers|rating)(asc|desc)/i.exec(Tt);W&&(G(W[1]),R(W[2].toLowerCase()))}},[a]);const{games:M,error:S,loadingGames:v,loadingDetails:D,detailsReady:X,gameDetailsCache:Q}=V4(m??""),{filteredGames:et,availableCategories:_}=Q4({games:M,gameDetailsCache:Q,sortOption:z,sortDirection:U,playerCount:b,durationFilter:x,gameCategory:B,ready:X});return X4(l,s,et),w.jsxs($4,{children:[w.jsxs(Z4,{children:[w.jsx(n5,{username:m??""}),w.jsx(J4,{className:"section-title",children:"🎲 Fit2Play"}),w.jsx(P4,{children:"Find the perfect board game for your group size, fast and easy."})]}),w.jsxs(W4,{children:[w.jsxs(t3,{children:[w.jsxs(ih,{children:[et.length," result",et.length!==1?"s":""]}),w.jsx(O0,{username:m??"",playerCount:b,durationFilter:x,gameCategoryFilter:B,sortOption:z,sortDirection:U}),w.jsx(T0,{playerCount:b,onPlayerCountChange:h,durationFilter:x,onDurationFilterChange:T,gameCategory:B,onGameCategoryChange:K,availableGameCategories:_})]}),w.jsxs(e3,{children:[f?w.jsxs(w.Fragment,{children:[w.jsxs(u3,{children:[w.jsxs(lh,{onClick:()=>c(!0),children:["Filters ",w.jsx(gx,{})]}),w.jsx(C0,{sortOption:z,sortDirection:U,onSortChange:G,onSortDirectionChange:R})]}),w.jsx(S0,{playerCount:b,durationFilter:x,gameCategory:B,onClearFilter:(tt,Et)=>{tt==="players"?h(""):tt==="duration"?T(""):tt==="category"?K(ft=>ft.filter(Tt=>Tt!==Et)):tt==="all"&&(h(""),T(""),K([]))}}),w.jsxs(ih,{children:[et.length," result",et.length!==1?"s":""]}),w.jsx(O0,{username:m??"",playerCount:b,durationFilter:x,gameCategoryFilter:B,sortOption:z,sortDirection:U})]}):w.jsxs(n3,{children:[w.jsx(S0,{playerCount:b,durationFilter:x,gameCategory:B,onClearFilter:(tt,Et)=>{tt==="players"?h(""):tt==="duration"?T(""):tt==="category"?K(ft=>ft.filter(Tt=>Tt!==Et)):tt==="all"&&(h(""),T(""),K([]))}}),w.jsx(C0,{sortOption:z,sortDirection:U,onSortChange:G,onSortDirectionChange:R})]}),v?w.jsx(t5,{}):et.length===0||S?w.jsx(I4,{className:"not-found",children:"No games found."}):w.jsx(a3,{children:w.jsx(i3,{children:et.map(tt=>w.jsx(Cx,{game:tt,onClick:()=>s(tt)},tt.id))})},`${b}-${x}-${z}-${U}-${B.join(",")}`)]})]}),l&&w.jsx(Vx,{game:l,details:Q.current[l.id],loading:D,onClose:()=>s(null),onNext:()=>{const Et=(et.findIndex(ft=>ft.id===l.id)+1)%et.length;s(et[Et])},onPrev:()=>{const Et=(et.findIndex(ft=>ft.id===l.id)-1+et.length)%et.length;s(et[Et])}}),f&&r&&w.jsxs(w.Fragment,{children:[w.jsx(l3,{onClick:()=>c(!1)}),w.jsxs(r3,{children:[w.jsx(s3,{onClick:()=>c(!1),"aria-label":"Close modal",children:"×"}),w.jsx(T0,{playerCount:b,onPlayerCountChange:h,durationFilter:x,onDurationFilterChange:T,gameCategory:B,onGameCategoryChange:K,availableGameCategories:_}),w.jsx("div",{style:{marginTop:"16px",textAlign:"center"},children:w.jsx(lh,{onClick:()=>c(!1),children:"Close"})})]})]})]})},Mg=[{url:"https://stackoverflow.com/users/12064160/gonzalo?tab=profile",icon:w.jsx(cx,{}),label:"StackOverflow"},{url:"https://www.linkedin.com/in/gmelgaba/",icon:w.jsx(sx,{}),label:"LinkedIn"},{url:"https://github.com/gmelgaba",icon:w.jsx(ux,{}),label:"GitHub"},{url:"https://open.spotify.com/user/0ny35jaa9ga0azi1smsg5h15s?si=WI9AQHRfS0usJCWcv1bENQ",icon:w.jsx(ox,{}),label:"Spotify"},{url:"https://www.youtube.com/@GonzaDIY/shorts",icon:w.jsx(fx,{}),label:"YouTube"}],c3=V.footer`
  background-color: ${({theme:a})=>a.sectionEven};
  padding: 40px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`,f3=V.div`
  ${lt.mobile} {
    text-align: center;
    display: grid;
    margin: 0 auto;
    row-gap: 24px;
  }

  ${lt.tabletAndGreater} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`,d3=V.div`
  .mail {
    font-size: 1rem;
    font-weight: normal;
    background-color: ${({theme:a})=>a.sectionEven};
    color: ${({theme:a})=>a.textGray};
    ${lt.mobile} {
      text-align: center;
    }
  }
`,m3=V.section`
  display: flex;
  gap: 15px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid ${({theme:a})=>a.primaryColor};
    color: ${({theme:a})=>a.primaryColor};
    font-size: 1.2rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({theme:a})=>a.primaryColor};
      color: ${({theme:a})=>a.textLight};
    }
  }
`,p3=V.div`
  height: 1px;
  background-color: ${({theme:a})=>a.textGray};
  width: 30%;
  opacity: 0.3;
  margin: 0 auto;
`,h3=V.div`
  text-align: center;
  font-size: 0.85rem;
  font-weight: normal;
  color: ${({theme:a})=>a.textGray};
`,rh={email:"gmelgaba@gmail.com",socialLinks:Mg},Ug=()=>{const a=new Date().getFullYear();return w.jsxs(c3,{children:[w.jsxs(f3,{children:[w.jsx(d3,{children:w.jsx("span",{className:"mail",children:rh.email})}),w.jsx(m3,{children:rh.socialLinks.map(l=>w.jsx("a",{href:l.url,target:"_blank","aria-label":l.label,children:l.icon},l.label))})]}),w.jsx(p3,{}),w.jsxs(h3,{children:["© ",a," · Gonzalo Melgar · ✨ Crafted with React "]})]})},g3=V.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 93%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  padding-left: 5%;
  background-color: ${({theme:a})=>a.sectionOdd};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`,y3=V.div`
  position: fixed;
  top: 16px;
  left: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2000;

  div {
    &:nth-child(1) {
      width: 35px;
      margin-bottom: 8px;
    }
    &:nth-child(2) {
      width: 40px;
      margin-bottom: 8px;
    }
    &:nth-child(3) {
      width: 30px;
    }
    height: 3px;
    background: ${({theme:a})=>a.primaryColor};
    border-radius: 5px;
    transform-origin: 1px;
  }

  ${lt.tabletAndGreater} {
    display: none;
  }
`,b3=V.nav`
  display: none;

  ${lt.tabletAndGreater} {
    display: flex;
    gap: 30px;
  }
`,uh=V.a`
  position: relative;
  ${lt.mobile} {
    font-size: 30px;
  }
  ${lt.tabletAndGreater} {
    font-size: 15px;
  }
  font-weight: 500;
  text-decoration: none;
  color: ${({theme:a})=>a.navText};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background-color: ${({theme:a})=>a.primaryColor};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-out;
  }

  &:hover {
    color: ${({theme:a})=>a.navText};
    &::after {
      transform: scaleX(1);
    }
  }
`,v3=V.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({theme:a})=>a.sectionOdd};
  color: ${({theme:a})=>a.text};
  width: 100vw;
  height: 100vh;
  z-index: 1500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  font-weight: 300;
  opacity: ${({show:a})=>a?.95:0};
  visibility: ${({show:a})=>a?"visible":"hidden"};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  pointer-events: ${({show:a})=>a?"auto":"none"};

  a {
    text-decoration: none;
    color: ${({theme:a})=>a.navText};
  }
`,x3=V.div`
  height: 60px;
`,Lg=()=>{const[a,l]=k.useState(!1),s=()=>l(!1),r=[{label:"About Me",href:"/#about-me"},{label:"Education",href:"/#education"},{label:"Experience",href:"/#experience"},{label:"Interests",href:"/#interests"},{label:"Tools",href:"/#tools"}];return w.jsxs(w.Fragment,{children:[w.jsxs(y3,{onClick:()=>l(!a),children:[w.jsx("div",{}),w.jsx("div",{}),w.jsx("div",{})]}),w.jsx(g3,{children:w.jsx(b3,{children:r.map(c=>w.jsx(uh,{href:c.href,children:c.label},c.href))})}),w.jsx(v3,{show:a,children:r.map(c=>w.jsx(uh,{href:c.href,onClick:s,children:c.label},c.href))}),w.jsx(x3,{})]})},E3=V.div`
  padding: 0 24px;
  background-color: ${({theme:a})=>a.sectionEven};
`;function w3(){return w.jsxs(w.Fragment,{children:[w.jsx(Lg,{}),w.jsx(o3,{}),w.jsx(E3,{children:w.jsx(Ug,{})})]})}const S3=()=>(k.useEffect(()=>{console.log("                  //,, ,             "),console.log("                 /        ` ',         "),console.log("                /               '/|_     "),console.log("               /                   /     "),console.log("              /                   /      "),console.log("             /                   ;       "),console.log('             ;-""-.  ____       ,      '),console.log("            /      )'    `.     '        "),console.log("           (    o |        )   ;         "),console.log(`            ),'"""    o   ;  :       `),console.log("            ;\\___  `._____/ ,-:          "),console.log("           ;                 @ )         "),console.log("          /                `;-'          "),console.log("       ,. `-.______________,|            "),console.log("  ,(`._||        \\__\\__\\__)|            "),console.log(" ,`.`-   \\        '.        |            "),console.log("  `._  ) :          )______,;\\_          "),console.log("     \\    \\_   _,--/       ,   `.       "),console.log("      \\     `--\\\\   :      /      `.    "),console.log("       \\        \\  ;     |         \\  "),console.log("        `-._____ ;|      |       _,'     "),console.log("                \\/'      `-.----' \\    "),console.log("                 /          \\      \\   "),console.log("              Do The Bartman!            "),console.log("https://www.youtube.com/watch?v=Q7ycjcQHoaw&t=183s")},[]),null),_3=V.div`
  margin: 0 auto;
  padding: 20px;
  display: flex;
  gap: 40px;
  font-weight: normal;

  p.section-subtitle {
    font-size: 1.1rem;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 40px;
    text-align: center;
  }
`,T3=V.div`
  display: grid;
  ${lt.mobile} {
    grid-template-columns: 1fr;
  }
  ${lt.tabletAndGreater} {
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
  }
`,A3=V.div`
  margin-bottom: 40px;
`,R3=V.div`
  background: ${({theme:a})=>a.sectionOdd};
  padding: 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.05);
    z-index: 10;
  }
`,j3=V.div`
  transition: transform 0.3s ease;
  transform: rotate(${a=>a.open?"180deg":"0deg"});
  color: ${({theme:a})=>a.primaryColor};
  font-size: 20px;
  margin-left: auto;

  ${lt.mobile} {
    margin-top: 10px;
  }
`,O3=V.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`,C3=V.div`
  width: 60px;
  height: 60px;
  margin-right: 20px;

  img {
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`,N3=V.div`
  flex: 1;
`,D3=V.span`
  font-size: 13px;
  color: ${({theme:a})=>a.primaryColor};
  font-weight: bold;
  display: block;
`,z3=V.h3`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 5px 0;
`,M3=V.h5`
  font-size: 14px;
  font-weight: normal;
  text-transform: uppercase;
  margin: 5px 0;
  color: ${({theme:a})=>a.textGray};
`,U3=V.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-in-out;
`,L3=V.div`
  font-size: 14px;
  margin-top: 5px;
  color: ${({theme:a})=>a.text};

  ul {
    margin-left: 16px;
    &.left-list {
      float: left;
      width: 270px;
    }
  }
`,B3=[{name:"Universidad de la República",imagePath:"/images/education/fing.jpg",url:"https://www.fing.edu.uy/",period:"2007 - 2017",title:"Software Engineer",description:"The Computer Engineer career aims at a broad and coherent coverage in the planning, development, maintenance and application of computerized systems, which together with the acquired experience, will be projected in a competent professional."},{name:"Instituto Tecnológico Superior",imagePath:"/images/education/its.jpg",url:"https://www.linkedin.com/school/arias-balparda/about/",period:"2004 - 2006",title:"Computer Technician",description:"The superior technological institute of the CETP - UTU specialized mainly in Computer Science. In it, courses are taught ranging from EMT Technological Middle Education (Level II), Tertiary Technical Course in Networks and Software to the career of Computer Technologist, in agreement with the University of the Republic."}],H3=()=>{const[a,l]=k.useState({}),s=r=>{l(c=>({...c,[r]:!c[r]})),console.log("open cards",a)};return w.jsx(_3,{children:w.jsxs(A3,{children:[w.jsx("h2",{className:"section-title",children:"My Education"}),w.jsx("p",{className:"section-subtitle",children:"My education has shaped my approach to problem-solving and continuous learning. It provided me with strong technical fundamentals while fostering curiosity and adaptability. Every course, project, and challenge helped build the skills I rely on today."}),w.jsx(T3,{children:B3.map(r=>w.jsxs(R3,{onClick:()=>s(r.name),children:[w.jsxs(O3,{children:[w.jsx(C3,{children:w.jsx("img",{src:r.imagePath,alt:r.name})}),w.jsxs(N3,{children:[w.jsx(D3,{children:r.period}),w.jsx(z3,{children:r.title}),w.jsx(M3,{children:r.name})]}),w.jsx(j3,{open:!!a[r.name],children:w.jsx(ug,{})})]}),w.jsx(U3,{style:{maxHeight:a[r.name]?"1100px":"0"},children:w.jsx(L3,{dangerouslySetInnerHTML:{__html:r.description}})})]},r.name))})]})})},k3=V.div`
  margin: 0 auto;
  padding: 20px;
  display: block;
  gap: 40px;
  font-weight: normal;

  p.section-subtitle {
    font-size: 1.1rem;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 40px;
    text-align: center;
  }
`,G3=V.div`
  ${lt.tabletAndGreater} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
  }
`,q3=V.div`
  flex: 1;
`,Y3=V.div`
  ${lt.tabletAndGreater} {
    margin-bottom: 40px;
  }
`,F3=V.div`
  background: ${({theme:a})=>a.background};
  padding: 30px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.05);
    z-index: 10;
  }
`,K3=V.div`
  transition: transform 0.3s ease;
  transform: rotate(${a=>a.open?"180deg":"0deg"});
  color: ${({theme:a})=>a.primaryColor};
  font-size: 20px;
  margin-left: auto;

  ${lt.mobile} {
    margin-top: 10px;
  }
`,V3=V.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`,Q3=V.div`
  width: 60px;
  height: 60px;
  margin-right: 20px;

  img {
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`,X3=V.div`
  flex: 1;
`,$3=V.span`
  font-size: 13px;
  color: ${({theme:a})=>a.primaryColor};
  font-weight: bold;
  display: block;
  text-transform: uppercase;
  span {
    color: ${({theme:a})=>a.textGray};
    text-transform: none;
    font-weight: 500;
    ${lt.mobile} {
      display: block;
      font-weight: 300;
      &.dot {
        display: none;
      }
    }
  }
`,Z3=V.h3`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 5px 0;

  ${lt.mobile} {
    font-size: 20px;
  }
`,J3=V.div`
  font-size: 14px;
  font-weight: normal;
  margin: 5px 0;
  color: ${({theme:a})=>a.textGray};
`,P3=V.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-in-out;

  ${lt.mobile} {
    padding-left: 0;
  }

  ${lt.tabletAndGreater} {
    padding-left: 77px;
  }
`,I3=V.div`
  font-size: 14px;
  margin-top: 5px;
  color: ${({theme:a})=>a.text};

  ul {
    list-style: disc;
    margin-left: -26px;
    &.left-list {
      float: left;
      width: 270px;
    }
  }
  li::marker {
    color: ${({theme:a})=>a.primaryColor};
  }
`,W3=[{company:"tarmac",imagePath:"/images/experience/tarmac.jpg",url:"https://tarmac.io/",duration:`${Xv(2020)} years`,position:"Team Leader",type:"Fulltime",period:"Sept 2020 - Current",description:`<p>Leading multiple teams of developers across different products trying to create an open communication culture.

Some of the responsibilities I had were:</p><div>
<ul>
  <li>Set clear team goals</li>
  <li>Client communication</li>
  <li>Oversee day-to-day operation</li>
  <li>Facilitating team needs in order to get aligned with the current objective</li>
  <li>Annual review and monthly performance meetings with all team members</li>
  <li>Running interviews with potential company candidates</li>
</ul></div>`},{company:"tarmac",imagePath:"/images/experience/tarmac.jpg",url:"https://tarmac.io/",duration:"2 years and 4 months",position:"Principal Engineer",type:"Fulltime",period:"Jun 2018 - Sept 2020",description:`The role involved being an official reference of a specific technology, Node.js in my case.
Some of the responsibilities I had were:
<ul>
  <li>Code audits</li>
  <li>Hiring Interviews</li>
  <li>Candidates assessment</li>
  <li>Onboarding meetings with new recruits</li>
  <li>Occasional Sales appearances</li>
  <li>Internal reviews</li>
</ul></div>`},{company:"tarmac",imagePath:"/images/experience/tarmac.jpg",url:"https://tarmac.io/",duration:"2 years and 6 months",position:"Senior Software Developer",type:"Fulltime",period:"Jan 2016 - Jun 2018",description:`Worked across different clients and was lucky enough to play with different technologies in the meantime, such as:
<ul class='left-list'>
  <li>express.js</li>
  <li>typescript</li>
  <li>node.js</li>
  <li>aws (s3, lambda, cloudwatch, glue)</li>
</ul>
<ul class='right-list'>
  <li>angular 7+</li>
  <li>Ruby</li>
  <li>insomnia</li>
</ul></div>`},{company:"tarmac",imagePath:"/images/experience/tarmac.jpg",url:"https://tarmac.io/",duration:"1 year and 7 months",position:"Semi Senior Software Developer",type:"Part-time",period:"Jun 2014 - Dec 2015",description:`Worked across different clients and was lucky enough to play with different technologies in the meantime, such as:
<ul class='left-list'>
  <li>node.js</li>
  <li>angular 1.x</li>
  <li>gulpjs</li>
  <li>aws (ec2, cloudfront, s3, lambda)</li>
</ul>
<ul class='right-list'>
  <li>Ruby on Rails</li>
  <li>Ionic</li>
  <li>Laravel</li>
  <li>RiotJS, CucumberJS</li>
</ul></div>`},{company:"Spiria SRL",imagePath:"/images/experience/spiria.jpg",url:"http://www.spiria.com.uy/",duration:"2 years and 9 months",position:"Junior Software Developer",type:"Part-time",period:"Oct 2011 - Jun 2014",description:`Collaborated in a team-focused environment providing creation, and support in different applications, mostly web and mobile hybrids. Some of the techs I used:<br>
<ul class='left-list'>
  <li>html, js, css</li>
  <li>php</li>
  <li>native android</li>
  <li>slim</li>
</ul>
<ul class='right-list'>
  <li>native android</li>
  <li>phonegap</li>
  <li>titanium app celerator</li>
  <li>webapps</li>
</ul>`},{company:"VTV Uruguay",imagePath:"/images/experience/vtv.jpg",url:"http://www.spiria.com.uy/",duration:"1 year and 8 months",position:"Graphics Operator",type:"Fulltime",period:"Mar 2010 - Oct 2011",description:`Responsible for producing suitable accurate graphic captions across a variety of live productions and different national events.
<ul>
  <li>Software: Photoshop CS10, CG5 multichannel.</li>
  <li>Daily Broadcasts: News Broadcast VTV Noticias Morning Edition, Dia a Dia, News Boardcast VTV Noticias Noon Edition, Sin limite.</li>
  <li>Weekly broadcasts/events: Rumbo a la Cancha, Mid-term elections, South American U-20 Championship, Uruguayan Championship, American Cup 2011, Basketball, among others.</li>
</ul>`}],tE=()=>{const[a,l]=k.useState({}),s=r=>{l(c=>({...c,[r]:!c[r]}))};return w.jsxs(k3,{children:[w.jsx("h2",{className:"section-title",children:"My Experience"}),w.jsx("p",{className:"section-subtitle",children:"Throughout my career, I've taken on different roles that have shaped my skills and perspective. Each position brought new challenges and learning experiences, allowing me to grow as a professional and a team player"}),w.jsx(G3,{children:W3.map(r=>w.jsx(q3,{children:w.jsx(Y3,{children:w.jsxs(F3,{onClick:()=>s(r.position),children:[w.jsxs(V3,{children:[w.jsx(Q3,{children:w.jsx("img",{src:r.imagePath,alt:r.company})}),w.jsxs(X3,{children:[w.jsxs($3,{children:[r.period," ",w.jsx("span",{className:"dot",children:"·"})," ",w.jsx("span",{children:r.duration})]}),w.jsx(Z3,{children:r.position}),w.jsxs(J3,{children:["@ ",r.company]})]}),w.jsx(K3,{open:!!a[r.position],children:w.jsx(ug,{})})]}),w.jsx(P3,{style:{maxHeight:a[r.position]?"1100px":"0"},children:w.jsx("div",{children:w.jsx(I3,{dangerouslySetInnerHTML:{__html:r.description}})})})]},r.position)})},r.position))})]})},eE=V.div`
  margin: 0 auto;
  padding: 32px 0;
  font-size: 1.1rem;
`,nE=V.h2``,aE=V.div`
  display: flex;
  gap: 20px;
  padding: 10px 20px;
  flex-wrap: wrap;
  justify-content: center;
`,iE=V.div`
  display: flex;
  cursor: default;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  background-color: ${({theme:a})=>a.sectionEven};
  transition: transform 0.3s ease-in-out;
  text-align: center;
  will-change: transform;

  ${lt.tabletAndGreater} {
    max-width: 180px;
  }

  &:hover {
    transform: scale(1.05);
    z-index: 10;
  }
`,lE=V.img`
  object-fit: cover;
  border-radius: 10%;
  margin-bottom: 10px;

  ${lt.mobile} {
    height: 130px;
    width: 130px;
  }

  ${lt.tabletAndGreater} {
    height: 120px;
    width: 120px;
  }
`,rE=V.h3`
  font-weight: bold;
  color: ${({theme:a})=>a.primaryColor};

  ${lt.mobile} {
    font-size: 22px;
    margin-bottom: 0;
    margin-top: 0;
  }

  ${lt.tabletAndGreater} {
    font-size: 1rem;
    margin-bottom: 5px;
  }
`,uE=V.p`
  margin: 0;
  font-size: 12px;
  font-weight: normal;

  ${lt.mobile} {
    font-size: 15px;
  }
`,sE=[{text:"Amateur crafter",imageUrl:"/images/interests/craft.jpg",description:"I love DIY projects and woodworking. It's a relaxing and satisfying creative outlet. I even share some of my builds on YouTube! feel free to check it out!"},{text:"Lifelong gamer",imageUrl:"/images/interests/gaming.jpg",description:"Proud owner of a PS5 and a dedicated PC gamer. Rocket League is my go-to, but I'm always exploring new games and genres."},{text:"Boardgame maniac",imageUrl:"/images/interests/boardgames.jpg",description:"I have a growing collection of 40+ board games. Whether it's strategy, co-op, or party games, I love getting people around the table.",link:"/boardgame-app"},{text:"Funko Pop collector",imageUrl:"/images/interests/funkos.jpg",description:"With over 30 Funko Pops on my shelf, collecting these little guys has become a fun hobby. They're a mix of nostalgia and style."},{text:"Amazon shopaholic",imageUrl:"/images/interests/amazon.jpg",description:"I'm a self-declared Amazon addict. From tools to tech, I enjoy discovering cool stuff and leveling up my workspace and hobbies."}],oE=a=>{a&&(window.location.href=a)},cE=()=>w.jsxs(eE,{children:[w.jsx(nE,{className:"section-title",children:"My Interests"}),w.jsx(aE,{children:sE.map(a=>w.jsxs(iE,{children:[w.jsx(lE,{src:a.imageUrl,alt:a.text}),w.jsx(rE,{onClick:()=>oE(a.link),children:a.text}),w.jsx(uE,{children:a.description})]},a.text))})]}),fE=V.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme:a})=>a.background};
  color: ${({theme:a})=>a.text};
  padding: 20px;
  text-align: center;
`,dE=V.div`
  max-width: 600px;
`,mE=V.h1`
  font-size: 5rem;
  margin-bottom: 20px;
  color: ${({theme:a})=>a.text};

  ${lt.mobile} {
    font-size: 3rem;
  }
`,pE=V.p`
  font-size: 1.25rem;
  margin-bottom: 32px;
  color: ${({theme:a})=>a.textGray};

  ${lt.mobile} {
    font-size: 1rem;
  }
`,hE=V($c)`
  display: inline-block;
  padding: 12px 24px;
  background: ${({theme:a})=>a.gradient};
  border-radius: 8px;
  color: white;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: ${({theme:a})=>a.gradientInverse};
  }
`,gE=()=>w.jsx(fE,{children:w.jsxs(dE,{children:[w.jsx(mE,{children:"404 — Whoops!"}),w.jsxs(pE,{children:["The page you're looking for doesn't exist.",w.jsx("br",{}),"Maybe try going back to the homepage?"]}),w.jsx(hE,{to:"/",children:"Return to Home"})]})}),yE=V.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  padding: 40px;
  padding-bottom: 0;

  ${lt.mobile} {
    grid-template-columns: 1fr;
  }
  ${lt.tabletAndGreater} {
    grid-template-columns: 1fr 1fr;
    align-items: end;
    justify-content: space-between;
  }
`,bE=V.div`
  flex: 1;
  margin-bottom: 40px;

  a {
    height: 20px;
    width: 100px;
  }

  ${lt.mobile} {
    max-width: 50%;
  }
  ${lt.tabletAndGreater} {
    max-width: 100%;
  }

  p {
    font-size: 24px;
    color: #555;
  }

  button {
    font-size: 18px;
  }
`,vE=V.h2`
  margin: 0;

  ${lt.mobile} {
    font-size: 50px;
    line-height: 50px;
  }
  ${lt.tabletAndGreater} {
    font-size: 80px;
    line-height: 80px;
  }
`,sh=V.label`
  font-size: 20px;
  color: ${({theme:a})=>a.textGray};
  margin: 20px 0;
  width: 100%;
  display: block;
`,xE=V.div`
  display: flex;
  gap: 15px;
  margin: 20px 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({theme:a})=>a.primaryColor};
    border-radius: 50%;
    background: transparent;
    color: ${({theme:a})=>a.primaryColor};
    font-size: 20px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: ${({theme:a})=>a.primaryColor};
      color: ${({theme:a})=>a.textLight};
    }

    ${lt.mobile} {
      width: 100px;
      height: 40px;
    }
    ${lt.tabletAndGreater} {
      width: 40px;
      height: 40px;
    }
  }
`,EE=V.img`
  ${lt.mobile} {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    margin-top: 24px;
    margin-left: -20px;
    border-radius: 40px;
    width: 100%;
    -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
  }
  ${lt.tabletAndGreater} {
    display: none;
  }
`,wE=V.img`
  ${lt.mobile} {
    display: none;
  }
  ${lt.tabletAndGreater} {
    max-width: 600px;
    max-height: 600px;
  }
  height: auto;
  object-fit: contain;
`,Oa={greeting:"Hello,",name:"I'm Gonzalo Melgar",title:"Software Engineer / Team Leader",buttonText:"Download CV   ",socialLinks:Mg,imagePath:"/images/me-transparent.png",imagePathSquare:"/images/me-transparent-square.png"},SE=()=>w.jsxs(yE,{children:[w.jsxs(bE,{children:[w.jsx(sh,{children:Oa.greeting}),w.jsx(vE,{children:Oa.name}),w.jsx(EE,{src:Oa.imagePathSquare,alt:"Gonzalo Melgar"}),w.jsx(sh,{children:Oa.title}),w.jsx(xE,{children:Oa.socialLinks.map(a=>w.jsx("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",children:a.icon},a.url))}),w.jsx(ag,{href:"/Gonzalo_Melgar_CV.pdf",download:!0,primary:!0,children:Oa.buttonText})]}),w.jsx(wE,{src:Oa.imagePath,alt:"Gonzalo Melgar"})]}),_E={primaryColor:"#f07794",secondaryColor:"#2a1454",background:"#ffffff",backgroundPrimary:"#f5f5f5",backgroundSecondary:"#e0e0e0",text:"#333",textLight:"white",textGray:"gray",textDark:"#000",navBackground:"transparent",navText:"#333",cardBackground:"#f5f5f5",borderColor:"#ddd",sectionOdd:"#f5f3fc",sectionEven:"#fefeff",gradient:"linear-gradient(to right, #f07794 0%,#701c3b 100%)",gradientInverse:"linear-gradient(to right, #701c3b 0%,#f07794 100%)"},TE={primaryColor:"#f07794",secondaryColor:"#2a1454",background:"#2d2e33",backgroundPrimary:"#1a1a1a",backgroundSecondary:"#222",text:"#f5f5f5",textLight:"white",textGray:"gray",textDark:"#fff",navBackground:"#1a1a1a",navText:"#f5f5f5",cardBackground:"#222",borderColor:"#333",sectionOdd:"#2a2b30",sectionEven:"#2d2e33",gradient:"linear-gradient(to right, #f07794 0%, #701c3b 100%)",gradientInverse:"linear-gradient(to right, #701c3b 0%, #f07794 100%)"},AE=k.createContext({theme:"light",toggleTheme:()=>{}}),RE=({children:a})=>{const[l,s]=k.useState("light"),r=()=>{s(c=>c==="light"?"dark":"light")};return w.jsx(AE.Provider,{value:{theme:l,toggleTheme:r},children:w.jsxs(Gv,{theme:l==="light"?_E:TE,children:[w.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Sora:wght@100..800&display=swap');"}),a]})})},jE=V.div`
  margin: 0 auto;
  padding: 32px 0;
  font-size: 1.1rem;
`,OE=V.h2``,CE=V.p`
  max-width: 70%;
  margin: 0 auto 40px;
  text-align: center;
`,NE=V.div`
  ${lt.mobile} {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
  ${lt.tabletAndGreater} {
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    overflow-x: auto;
    padding: 10px 20px;
    perspective: 1000px;
    display: grid;
  }
`,DE=V.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border-radius: 15px;
  background-color: ${({theme:a})=>a.sectionEven};
  transition: transform 0.3s ease-in-out;
  min-width: 180px;
  text-align: center;
  will-change: transform;
  ${lt.mobile} {
    width: 70%;
    margin: 0 auto;
  }

  &:hover {
    transform: scale(1.05);
    z-index: 10;
  }
`,zE=V.img`
  ${lt.mobile} {
    width: 100px;
  }
  width: 80px;
  height: auto;
`,ME=V.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 16px;
  color: ${({theme:a})=>a.primaryColor};
`,UE=V.p`
  margin: 0;
  font-size: 12px;
  font-weight: normal;

  ${lt.mobile} {
    font-size: 15px;
  }
`,LE=[{url:"https://code.visualstudio.com/",imagePath:"/images/tools/vscode.png",name:"VS Code",description:"I've been jumping a lot between editors and for me, VS Code is the best choice out there. It's a great editor with a great community and tons of useful extensions to add."},{url:"https://www.warp.dev/",imagePath:"/images/tools/warp.png",name:"Warp",description:"This is by far the best terminal option out there. Warp is a fully native, GPU-accelerated, Rust-based terminal, it's currently in beta and only has support for Mac, but you should try it if able."},{url:"https://www.gitkraken.com/",imagePath:"/images/tools/gitkraken.png",name:"GitKraken",description:"I used to live in the terminal for Git tasks, but GitKraken made me rethink that. It's clean, powerful, and great for visualizing branches when things start to get wild. Now I reach for it whenever I need clarity during chaotic merges."},{url:"https://dbeaver.io/",imagePath:"/images/tools/dbeaver.png",name:"DBeaver",description:"When it comes to databases, DBeaver is my go-to. It's lightweight, supports pretty much every DB under the sun, and has saved me countless hours when digging through messy data or writing quick queries."},{url:"https://www.postman.com/",imagePath:"/images/tools/postman.png",name:"Postman",description:"Postman has been my API wingman for years. Whether I'm poking a new endpoint or debugging weird edge cases, it's the fastest way to test and document APIs."}],BE=()=>{const a=l=>{window.open(l,"_blank")};return w.jsxs(jE,{children:[w.jsx(OE,{className:"section-title",children:"Developer Tools"}),w.jsx(CE,{children:"Over the years I've been trying different dev tools in order to make my life easier/prettier while working. Here is a list of the Developer tools I like the most."}),w.jsx(NE,{children:LE.map(l=>w.jsxs(DE,{onClick:()=>a(l.url),children:[w.jsx(zE,{src:l.imagePath,alt:l.name}),w.jsx(ME,{children:l.name}),w.jsx(UE,{children:l.description})]},l.name))})]})},HE=V.div`
  scroll-snap-type: y mandatory;
  height: 100vh;
  width: 100%;
`,aa=V.section`
  display: block;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  font-size: 2rem;
  font-weight: bold;
  padding: 0 5%;
`,kE=()=>w.jsxs(w.Fragment,{children:[w.jsx(aa,{id:"header",children:w.jsx(Lg,{})}),w.jsx(aa,{id:"presentation",children:w.jsx(SE,{})}),w.jsx(aa,{id:"about-me",children:w.jsx(Wv,{})}),w.jsx(aa,{id:"education",children:w.jsx(H3,{})}),w.jsx(aa,{id:"experience",children:w.jsx(tE,{})}),w.jsx(aa,{id:"interests",children:w.jsx(cE,{})}),w.jsx(aa,{id:"tools",children:w.jsx(BE,{})}),w.jsx(aa,{id:"footer",children:w.jsx(Ug,{})})]}),GE=()=>w.jsx(RE,{children:w.jsxs(Cb,{basename:"/",children:[w.jsx(Ex,{}),w.jsxs(HE,{children:[w.jsxs(lb,{children:[w.jsx(su,{path:"/boardgame-app",element:w.jsx(w3,{})}),w.jsx(su,{path:"/",element:w.jsx(kE,{})}),w.jsx(su,{path:"*",element:w.jsx(gE,{})})]}),w.jsx(vx,{}),w.jsx(S3,{})]})]})});var Sc={exports:{}},Nl={},_c={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function qE(){return oh||(oh=1,function(a){function l(W,nt){var rt=W.length;W.push(nt);t:for(;0<rt;){var bt=rt-1>>>1,j=W[bt];if(0<c(j,nt))W[bt]=nt,W[rt]=j,rt=bt;else break t}}function s(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var nt=W[0],rt=W.pop();if(rt!==nt){W[0]=rt;t:for(var bt=0,j=W.length,J=j>>>1;bt<J;){var it=2*(bt+1)-1,st=W[it],at=it+1,ht=W[at];if(0>c(st,rt))at<j&&0>c(ht,st)?(W[bt]=ht,W[at]=rt,bt=at):(W[bt]=st,W[it]=rt,bt=it);else if(at<j&&0>c(ht,rt))W[bt]=ht,W[at]=rt,bt=at;else break t}}return nt}function c(W,nt){var rt=W.sortIndex-nt.sortIndex;return rt!==0?rt:W.id-nt.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var m=Date,g=m.now();a.unstable_now=function(){return m.now()-g}}var b=[],h=[],x=1,T=null,B=3,K=!1,z=!1,G=!1,U=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function S(W){for(var nt=s(h);nt!==null;){if(nt.callback===null)r(h);else if(nt.startTime<=W)r(h),nt.sortIndex=nt.expirationTime,l(b,nt);else break;nt=s(h)}}function v(W){if(G=!1,S(W),!z)if(s(b)!==null)z=!0,Dt();else{var nt=s(h);nt!==null&&St(v,nt.startTime-W)}}var D=!1,X=-1,Q=5,et=-1;function _(){return!(a.unstable_now()-et<Q)}function tt(){if(D){var W=a.unstable_now();et=W;var nt=!0;try{t:{z=!1,G&&(G=!1,R(X),X=-1),K=!0;var rt=B;try{e:{for(S(W),T=s(b);T!==null&&!(T.expirationTime>W&&_());){var bt=T.callback;if(typeof bt=="function"){T.callback=null,B=T.priorityLevel;var j=bt(T.expirationTime<=W);if(W=a.unstable_now(),typeof j=="function"){T.callback=j,S(W),nt=!0;break e}T===s(b)&&r(b),S(W)}else r(b);T=s(b)}if(T!==null)nt=!0;else{var J=s(h);J!==null&&St(v,J.startTime-W),nt=!1}}break t}finally{T=null,B=rt,K=!1}nt=void 0}}finally{nt?Et():D=!1}}}var Et;if(typeof M=="function")Et=function(){M(tt)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,Tt=ft.port2;ft.port1.onmessage=tt,Et=function(){Tt.postMessage(null)}}else Et=function(){U(tt,0)};function Dt(){D||(D=!0,Et())}function St(W,nt){X=U(function(){W(a.unstable_now())},nt)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(W){W.callback=null},a.unstable_continueExecution=function(){z||K||(z=!0,Dt())},a.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<W?Math.floor(1e3/W):5},a.unstable_getCurrentPriorityLevel=function(){return B},a.unstable_getFirstCallbackNode=function(){return s(b)},a.unstable_next=function(W){switch(B){case 1:case 2:case 3:var nt=3;break;default:nt=B}var rt=B;B=nt;try{return W()}finally{B=rt}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(W,nt){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var rt=B;B=W;try{return nt()}finally{B=rt}},a.unstable_scheduleCallback=function(W,nt,rt){var bt=a.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?bt+rt:bt):rt=bt,W){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=rt+j,W={id:x++,callback:nt,priorityLevel:W,startTime:rt,expirationTime:j,sortIndex:-1},rt>bt?(W.sortIndex=rt,l(h,W),s(b)===null&&W===s(h)&&(G?(R(X),X=-1):G=!0,St(v,rt-bt))):(W.sortIndex=j,l(b,W),z||K||(z=!0,Dt())),W},a.unstable_shouldYield=_,a.unstable_wrapCallback=function(W){var nt=B;return function(){var rt=B;B=nt;try{return W.apply(this,arguments)}finally{B=rt}}}}(Tc)),Tc}var ch;function YE(){return ch||(ch=1,_c.exports=qE()),_c.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function FE(){if(fh)return Nl;fh=1;var a=YE(),l=qc(),s=Yb();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var f=Symbol.for("react.element"),m=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),K=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),S=Symbol.for("react.offscreen"),v=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=D&&t[D]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Symbol.for("react.client.reference");function et(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Q?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case g:return"Portal";case x:return"Profiler";case h:return"StrictMode";case G:return"Suspense";case U:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case K:return(t.displayName||"Context")+".Provider";case B:return(t._context.displayName||"Context")+".Consumer";case z:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case R:return e=t.displayName||null,e!==null?e:et(t.type)||"Memo";case M:e=t._payload,t=t._init;try{return et(t(e))}catch{}}return null}var _=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=Object.assign,Et,ft;function Tt(t){if(Et===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Et=e&&e[1]||"",ft=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Et+t+ft}var Dt=!1;function St(t,e){if(!t||Dt)return"";Dt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch($){var q=$}Reflect.construct(t,[],I)}else{try{I.call()}catch($){q=$}t.call(I.prototype)}}else{try{throw Error()}catch($){q=$}(I=t())&&typeof I.catch=="function"&&I.catch(function(){})}}catch($){if($&&q&&typeof $.stack=="string")return[$.stack,q.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=i.DetermineComponentFrameRoot(),d=o[0],y=o[1];if(d&&y){var A=d.split(`
`),N=y.split(`
`);for(u=i=0;i<A.length&&!A[i].includes("DetermineComponentFrameRoot");)i++;for(;u<N.length&&!N[u].includes("DetermineComponentFrameRoot");)u++;if(i===A.length||u===N.length)for(i=A.length-1,u=N.length-1;1<=i&&0<=u&&A[i]!==N[u];)u--;for(;1<=i&&0<=u;i--,u--)if(A[i]!==N[u]){if(i!==1||u!==1)do if(i--,u--,0>u||A[i]!==N[u]){var Z=`
`+A[i].replace(" at new "," at ");return t.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",t.displayName)),Z}while(1<=i&&0<=u);break}}}finally{Dt=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Tt(n):""}function W(t){switch(t.tag){case 26:case 27:case 5:return Tt(t.type);case 16:return Tt("Lazy");case 13:return Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 15:return t=St(t.type,!1),t;case 11:return t=St(t.type.render,!1),t;case 1:return t=St(t.type,!0),t;default:return""}}function nt(t){try{var e="";do e+=W(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function rt(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bt(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function j(t){if(rt(t)!==t)throw Error(r(188))}function J(t){var e=t.alternate;if(!e){if(e=rt(t),e===null)throw Error(r(188));return e!==t?null:t}for(var n=t,i=e;;){var u=n.return;if(u===null)break;var o=u.alternate;if(o===null){if(i=u.return,i!==null){n=i;continue}break}if(u.child===o.child){for(o=u.child;o;){if(o===n)return j(u),t;if(o===i)return j(u),e;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=u,i=o;else{for(var d=!1,y=u.child;y;){if(y===n){d=!0,n=u,i=o;break}if(y===i){d=!0,i=u,n=o;break}y=y.sibling}if(!d){for(y=o.child;y;){if(y===n){d=!0,n=o,i=u;break}if(y===i){d=!0,i=o,n=u;break}y=y.sibling}if(!d)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?t:e}function it(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=it(t),e!==null)return e;t=t.sibling}return null}var st=Array.isArray,at=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht={pending:!1,data:null,method:null,action:null},pt=[],E=-1;function p(t){return{current:t}}function F(t){0>E||(t.current=pt[E],pt[E]=null,E--)}function O(t,e){E++,pt[E]=t.current,t.current=e}var gt=p(null),jt=p(null),Mt=p(null),te=p(null);function ee(t,e){switch(O(Mt,e),O(jt,t),O(gt,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?Ep(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=Ep(t),e=wp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F(gt),O(gt,e)}function Ae(){F(gt),F(jt),F(Mt)}function Xt(t){t.memoizedState!==null&&O(te,t);var e=gt.current,n=wp(e,t.type);e!==n&&(O(jt,t),O(gt,n))}function xe(t){jt.current===t&&(F(gt),F(jt)),te.current===t&&(F(te),Sl._currentValue=ht)}var Ni=Object.prototype.hasOwnProperty,Ba=a.unstable_scheduleCallback,ra=a.unstable_cancelCallback,Vl=a.unstable_shouldYield,Bg=a.unstable_requestPaint,ln=a.unstable_now,Hg=a.unstable_getCurrentPriorityLevel,cf=a.unstable_ImmediatePriority,ff=a.unstable_UserBlockingPriority,Ql=a.unstable_NormalPriority,kg=a.unstable_LowPriority,df=a.unstable_IdlePriority,Gg=a.log,qg=a.unstable_setDisableYieldValue,Di=null,Re=null;function Yg(t){if(Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Di,t,void 0,(t.current.flags&128)===128)}catch{}}function Mn(t){if(typeof Gg=="function"&&qg(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Di,t)}catch{}}var je=Math.clz32?Math.clz32:Vg,Fg=Math.log,Kg=Math.LN2;function Vg(t){return t>>>=0,t===0?32:31-(Fg(t)/Kg|0)|0}var Xl=128,$l=4194304;function ua(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,u=t.suspendedLanes,o=t.pingedLanes,d=t.warmLanes;t=t.finishedLanes!==0;var y=n&134217727;return y!==0?(n=y&~u,n!==0?i=ua(n):(o&=y,o!==0?i=ua(o):t||(d=y&~d,d!==0&&(i=ua(d))))):(y=n&~u,y!==0?i=ua(y):o!==0?i=ua(o):t||(d=n&~d,d!==0&&(i=ua(d)))),i===0?0:e!==0&&e!==i&&(e&u)===0&&(u=i&-i,d=e&-e,u>=d||u===32&&(d&4194176)!==0)?e:i}function zi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Qg(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mf(){var t=Xl;return Xl<<=1,(Xl&4194176)===0&&(Xl=128),t}function pf(){var t=$l;return $l<<=1,($l&62914560)===0&&($l=4194304),t}function Yu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mi(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Xg(t,e,n,i,u,o){var d=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var y=t.entanglements,A=t.expirationTimes,N=t.hiddenUpdates;for(n=d&~n;0<n;){var Z=31-je(n),I=1<<Z;y[Z]=0,A[Z]=-1;var q=N[Z];if(q!==null)for(N[Z]=null,Z=0;Z<q.length;Z++){var $=q[Z];$!==null&&($.lane&=-536870913)}n&=~I}i!==0&&hf(t,i,0),o!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=o&~(d&~e))}function hf(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-je(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&4194218}function gf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-je(n),u=1<<i;u&e|t[i]&e&&(t[i]|=e),n&=~u}}function yf(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bf(){var t=at.p;return t!==0?t:(t=window.event,t===void 0?32:Gp(t.type))}function $g(t,e){var n=at.p;try{return at.p=t,e()}finally{at.p=n}}var Un=Math.random().toString(36).slice(2),pe="__reactFiber$"+Un,Ee="__reactProps$"+Un,Ha="__reactContainer$"+Un,Fu="__reactEvents$"+Un,Zg="__reactListeners$"+Un,Jg="__reactHandles$"+Un,vf="__reactResources$"+Un,Ui="__reactMarker$"+Un;function Ku(t){delete t[pe],delete t[Ee],delete t[Fu],delete t[Zg],delete t[Jg]}function sa(t){var e=t[pe];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ha]||n[pe]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tp(t);t!==null;){if(n=t[pe])return n;t=Tp(t)}return e}t=n,n=t.parentNode}return null}function ka(t){if(t=t[pe]||t[Ha]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Li(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function Ga(t){var e=t[vf];return e||(e=t[vf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ie(t){t[Ui]=!0}var xf=new Set,Ef={};function oa(t,e){qa(t,e),qa(t+"Capture",e)}function qa(t,e){for(Ef[t]=e,t=0;t<e.length;t++)xf.add(e[t])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wf={},Sf={};function Ig(t){return Ni.call(Sf,t)?!0:Ni.call(wf,t)?!1:Pg.test(t)?Sf[t]=!0:(wf[t]=!0,!1)}function Jl(t,e,n){if(Ig(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Pl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function pn(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function Le(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _f(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wg(t){var e=_f(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var u=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(d){i=""+d,o.call(this,d)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(d){i=""+d},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Il(t){t._valueTracker||(t._valueTracker=Wg(t))}function Tf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=_f(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ty=/[\n"\\]/g;function Be(t){return t.replace(ty,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Vu(t,e,n,i,u,o,d,y){t.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.type=d:t.removeAttribute("type"),e!=null?d==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Le(e)):t.value!==""+Le(e)&&(t.value=""+Le(e)):d!=="submit"&&d!=="reset"||t.removeAttribute("value"),e!=null?Qu(t,d,Le(e)):n!=null?Qu(t,d,Le(n)):i!=null&&t.removeAttribute("value"),u==null&&o!=null&&(t.defaultChecked=!!o),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.name=""+Le(y):t.removeAttribute("name")}function Af(t,e,n,i,u,o,d,y){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.type=o),e!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||e!=null))return;n=n!=null?""+Le(n):"",e=e!=null?""+Le(e):n,y||e===t.value||(t.value=e),t.defaultValue=e}i=i??u,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=y?t.checked:!!i,t.defaultChecked=!!i,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.name=d)}function Qu(t,e,n){e==="number"&&Wl(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Ya(t,e,n,i){if(t=t.options,e){e={};for(var u=0;u<n.length;u++)e["$"+n[u]]=!0;for(n=0;n<t.length;n++)u=e.hasOwnProperty("$"+t[n].value),t[n].selected!==u&&(t[n].selected=u),u&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Le(n),e=null,u=0;u<t.length;u++){if(t[u].value===n){t[u].selected=!0,i&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function Rf(t,e,n){if(e!=null&&(e=""+Le(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Le(n):""}function jf(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(r(92));if(st(i)){if(1<i.length)throw Error(r(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Le(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i)}function Fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ey=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Of(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||ey.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Cf(t,e,n){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var u in e)i=e[u],e.hasOwnProperty(u)&&n[u]!==i&&Of(t,u,i)}else for(var o in e)e.hasOwnProperty(o)&&Of(t,o,e[o])}function Xu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ny=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ay=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tr(t){return ay.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var $u=null;function Zu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ka=null,Va=null;function Nf(t){var e=ka(t);if(e&&(t=e.stateNode)){var n=t[Ee]||null;t:switch(t=e.stateNode,e.type){case"input":if(Vu(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Be(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var u=i[Ee]||null;if(!u)throw Error(r(90));Vu(i,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&Tf(i)}break t;case"textarea":Rf(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Ya(t,!!n.multiple,e,!1)}}}var Ju=!1;function Df(t,e,n){if(Ju)return t(e,n);Ju=!0;try{var i=t(e);return i}finally{if(Ju=!1,(Ka!==null||Va!==null)&&(Br(),Ka&&(e=Ka,t=Va,Va=Ka=null,Nf(e),t)))for(e=0;e<t.length;e++)Nf(t[e])}}function Bi(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Ee]||null;if(i===null)return null;n=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(r(231,e,typeof n));return n}var Pu=!1;if(mn)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){Pu=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{Pu=!1}var Ln=null,Iu=null,er=null;function zf(){if(er)return er;var t,e=Iu,n=e.length,i,u="value"in Ln?Ln.value:Ln.textContent,o=u.length;for(t=0;t<n&&e[t]===u[t];t++);var d=n-t;for(i=1;i<=d&&e[n-i]===u[o-i];i++);return er=u.slice(t,1<i?1-i:void 0)}function nr(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ar(){return!0}function Mf(){return!1}function we(t){function e(n,i,u,o,d){this._reactName=n,this._targetInst=u,this.type=i,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(n=t[y],this[y]=n?n(o):o[y]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ar:Mf,this.isPropagationStopped=Mf,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),e}var ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ir=we(ca),ki=tt({},ca,{view:0,detail:0}),iy=we(ki),Wu,ts,Gi,lr=tt({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ns,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gi&&(Gi&&t.type==="mousemove"?(Wu=t.screenX-Gi.screenX,ts=t.screenY-Gi.screenY):ts=Wu=0,Gi=t),Wu)},movementY:function(t){return"movementY"in t?t.movementY:ts}}),Uf=we(lr),ly=tt({},lr,{dataTransfer:0}),ry=we(ly),uy=tt({},ki,{relatedTarget:0}),es=we(uy),sy=tt({},ca,{animationName:0,elapsedTime:0,pseudoElement:0}),oy=we(sy),cy=tt({},ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fy=we(cy),dy=tt({},ca,{data:0}),Lf=we(dy),my={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},py={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hy[t])?!!e[t]:!1}function ns(){return gy}var yy=tt({},ki,{key:function(t){if(t.key){var e=my[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?py[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ns,charCode:function(t){return t.type==="keypress"?nr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),by=we(yy),vy=tt({},lr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bf=we(vy),xy=tt({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ns}),Ey=we(xy),wy=tt({},ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sy=we(wy),_y=tt({},lr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ty=we(_y),Ay=tt({},ca,{newState:0,oldState:0}),Ry=we(Ay),jy=[9,13,27,32],as=mn&&"CompositionEvent"in window,qi=null;mn&&"documentMode"in document&&(qi=document.documentMode);var Oy=mn&&"TextEvent"in window&&!qi,Hf=mn&&(!as||qi&&8<qi&&11>=qi),kf=" ",Gf=!1;function qf(t,e){switch(t){case"keyup":return jy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qa=!1;function Cy(t,e){switch(t){case"compositionend":return Yf(e);case"keypress":return e.which!==32?null:(Gf=!0,kf);case"textInput":return t=e.data,t===kf&&Gf?null:t;default:return null}}function Ny(t,e){if(Qa)return t==="compositionend"||!as&&qf(t,e)?(t=zf(),er=Iu=Ln=null,Qa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hf&&e.locale!=="ko"?null:e.data;default:return null}}var Dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Dy[t.type]:e==="textarea"}function Kf(t,e,n,i){Ka?Va?Va.push(i):Va=[i]:Ka=i,e=Yr(e,"onChange"),0<e.length&&(n=new ir("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Yi=null,Fi=null;function zy(t){gp(t,0)}function rr(t){var e=Li(t);if(Tf(e))return t}function Vf(t,e){if(t==="change")return e}var Qf=!1;if(mn){var is;if(mn){var ls="oninput"in document;if(!ls){var Xf=document.createElement("div");Xf.setAttribute("oninput","return;"),ls=typeof Xf.oninput=="function"}is=ls}else is=!1;Qf=is&&(!document.documentMode||9<document.documentMode)}function $f(){Yi&&(Yi.detachEvent("onpropertychange",Zf),Fi=Yi=null)}function Zf(t){if(t.propertyName==="value"&&rr(Fi)){var e=[];Kf(e,Fi,t,Zu(t)),Df(zy,e)}}function My(t,e,n){t==="focusin"?($f(),Yi=e,Fi=n,Yi.attachEvent("onpropertychange",Zf)):t==="focusout"&&$f()}function Uy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rr(Fi)}function Ly(t,e){if(t==="click")return rr(e)}function By(t,e){if(t==="input"||t==="change")return rr(e)}function Hy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Oe=typeof Object.is=="function"?Object.is:Hy;function Ki(t,e){if(Oe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var u=n[i];if(!Ni.call(e,u)||!Oe(t[u],e[u]))return!1}return!0}function Jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pf(t,e){var n=Jf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Jf(n)}}function If(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?If(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Wl(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function rs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ky(t,e){var n=Wf(e);e=t.focusedElem;var i=t.selectionRange;if(n!==e&&e&&e.ownerDocument&&If(e.ownerDocument.documentElement,e)){if(i!==null&&rs(e)){if(t=i.start,n=i.end,n===void 0&&(n=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(n,e.value.length);else if(n=(t=e.ownerDocument||document)&&t.defaultView||window,n.getSelection){n=n.getSelection();var u=e.textContent.length,o=Math.min(i.start,u);i=i.end===void 0?o:Math.min(i.end,u),!n.extend&&o>i&&(u=i,i=o,o=u),u=Pf(e,o);var d=Pf(e,i);u&&d&&(n.rangeCount!==1||n.anchorNode!==u.node||n.anchorOffset!==u.offset||n.focusNode!==d.node||n.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),n.removeAllRanges(),o>i?(n.addRange(t),n.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),n.addRange(t)))}}for(t=[],n=e;n=n.parentNode;)n.nodeType===1&&t.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)n=t[e],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Gy=mn&&"documentMode"in document&&11>=document.documentMode,Xa=null,us=null,Vi=null,ss=!1;function td(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ss||Xa==null||Xa!==Wl(i)||(i=Xa,"selectionStart"in i&&rs(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vi&&Ki(Vi,i)||(Vi=i,i=Yr(us,"onSelect"),0<i.length&&(e=new ir("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Xa)))}function fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $a={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionrun:fa("Transition","TransitionRun"),transitionstart:fa("Transition","TransitionStart"),transitioncancel:fa("Transition","TransitionCancel"),transitionend:fa("Transition","TransitionEnd")},os={},ed={};mn&&(ed=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function da(t){if(os[t])return os[t];if(!$a[t])return t;var e=$a[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ed)return os[t]=e[n];return t}var nd=da("animationend"),ad=da("animationiteration"),id=da("animationstart"),qy=da("transitionrun"),Yy=da("transitionstart"),Fy=da("transitioncancel"),ld=da("transitionend"),rd=new Map,ud="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Pe(t,e){rd.set(t,e),oa(e,[t])}var He=[],Za=0,cs=0;function ur(){for(var t=Za,e=cs=Za=0;e<t;){var n=He[e];He[e++]=null;var i=He[e];He[e++]=null;var u=He[e];He[e++]=null;var o=He[e];if(He[e++]=null,i!==null&&u!==null){var d=i.pending;d===null?u.next=u:(u.next=d.next,d.next=u),i.pending=u}o!==0&&sd(n,u,o)}}function sr(t,e,n,i){He[Za++]=t,He[Za++]=e,He[Za++]=n,He[Za++]=i,cs|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function fs(t,e,n,i){return sr(t,e,n,i),or(t)}function Bn(t,e){return sr(t,null,null,e),or(t)}function sd(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var u=!1,o=t.return;o!==null;)o.childLanes|=n,i=o.alternate,i!==null&&(i.childLanes|=n),o.tag===22&&(t=o.stateNode,t===null||t._visibility&1||(u=!0)),t=o,o=o.return;u&&e!==null&&t.tag===3&&(o=t.stateNode,u=31-je(n),o=o.hiddenUpdates,t=o[u],t===null?o[u]=[e]:t.push(e),e.lane=n|536870912)}function or(t){if(50<gl)throw gl=0,bo=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ja={},od=new WeakMap;function ke(t,e){if(typeof t=="object"&&t!==null){var n=od.get(t);return n!==void 0?n:(e={value:t,source:e,stack:nt(e)},od.set(t,e),e)}return{value:t,source:e,stack:nt(e)}}var Pa=[],Ia=0,cr=null,fr=0,Ge=[],qe=0,ma=null,hn=1,gn="";function pa(t,e){Pa[Ia++]=fr,Pa[Ia++]=cr,cr=t,fr=e}function cd(t,e,n){Ge[qe++]=hn,Ge[qe++]=gn,Ge[qe++]=ma,ma=t;var i=hn;t=gn;var u=32-je(i)-1;i&=~(1<<u),n+=1;var o=32-je(e)+u;if(30<o){var d=u-u%5;o=(i&(1<<d)-1).toString(32),i>>=d,u-=d,hn=1<<32-je(e)+u|n<<u|i,gn=o+t}else hn=1<<o|n<<u|i,gn=t}function ds(t){t.return!==null&&(pa(t,1),cd(t,1,0))}function ms(t){for(;t===cr;)cr=Pa[--Ia],Pa[Ia]=null,fr=Pa[--Ia],Pa[Ia]=null;for(;t===ma;)ma=Ge[--qe],Ge[qe]=null,gn=Ge[--qe],Ge[qe]=null,hn=Ge[--qe],Ge[qe]=null}var be=null,fe=null,Ct=!1,Ie=null,rn=!1,ps=Error(r(519));function ha(t){var e=Error(r(418,""));throw $i(ke(e,t)),ps}function fd(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[pe]=t,e[Ee]=i,n){case"dialog":Rt("cancel",e),Rt("close",e);break;case"iframe":case"object":case"embed":Rt("load",e);break;case"video":case"audio":for(n=0;n<bl.length;n++)Rt(bl[n],e);break;case"source":Rt("error",e);break;case"img":case"image":case"link":Rt("error",e),Rt("load",e);break;case"details":Rt("toggle",e);break;case"input":Rt("invalid",e),Af(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Il(e);break;case"select":Rt("invalid",e);break;case"textarea":Rt("invalid",e),jf(e,i.value,i.defaultValue,i.children),Il(e)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||xp(e.textContent,n)?(i.popover!=null&&(Rt("beforetoggle",e),Rt("toggle",e)),i.onScroll!=null&&Rt("scroll",e),i.onScrollEnd!=null&&Rt("scrollend",e),i.onClick!=null&&(e.onclick=Fr),e=!0):e=!1,e||ha(t)}function dd(t){for(be=t.return;be;)switch(be.tag){case 3:case 27:rn=!0;return;case 5:case 13:rn=!1;return;default:be=be.return}}function Qi(t){if(t!==be)return!1;if(!Ct)return dd(t),Ct=!0,!1;var e=!1,n;if((n=t.tag!==3&&t.tag!==27)&&((n=t.tag===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Uo(t.type,t.memoizedProps)),n=!n),n&&(e=!0),e&&fe&&ha(t),dd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){fe=tn(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}fe=null}}else fe=be?tn(t.stateNode.nextSibling):null;return!0}function Xi(){fe=be=null,Ct=!1}function $i(t){Ie===null?Ie=[t]:Ie.push(t)}var Zi=Error(r(460)),md=Error(r(474)),hs={then:function(){}};function pd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function dr(){}function hd(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(dr,dr),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Zi?Error(r(483)):t;default:if(typeof e.status=="string")e.then(dr,dr);else{if(t=Ht,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=i}},function(i){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Zi?Error(r(483)):t}throw Ji=e,Zi}}var Ji=null;function gd(){if(Ji===null)throw Error(r(459));var t=Ji;return Ji=null,t}var Wa=null,Pi=0;function mr(t){var e=Pi;return Pi+=1,Wa===null&&(Wa=[]),hd(Wa,t,e)}function Ii(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function pr(t,e){throw e.$$typeof===f?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function yd(t){var e=t._init;return e(t._payload)}function bd(t){function e(L,C){if(t){var H=L.deletions;H===null?(L.deletions=[C],L.flags|=16):H.push(C)}}function n(L,C){if(!t)return null;for(;C!==null;)e(L,C),C=C.sibling;return null}function i(L){for(var C=new Map;L!==null;)L.key!==null?C.set(L.key,L):C.set(L.index,L),L=L.sibling;return C}function u(L,C){return L=Zn(L,C),L.index=0,L.sibling=null,L}function o(L,C,H){return L.index=H,t?(H=L.alternate,H!==null?(H=H.index,H<C?(L.flags|=33554434,C):H):(L.flags|=33554434,C)):(L.flags|=1048576,C)}function d(L){return t&&L.alternate===null&&(L.flags|=33554434),L}function y(L,C,H,P){return C===null||C.tag!==6?(C=oo(H,L.mode,P),C.return=L,C):(C=u(C,H),C.return=L,C)}function A(L,C,H,P){var ut=H.type;return ut===b?Z(L,C,H.props.children,P,H.key):C!==null&&(C.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===M&&yd(ut)===C.type)?(C=u(C,H.props),Ii(C,H),C.return=L,C):(C=Dr(H.type,H.key,H.props,null,L.mode,P),Ii(C,H),C.return=L,C)}function N(L,C,H,P){return C===null||C.tag!==4||C.stateNode.containerInfo!==H.containerInfo||C.stateNode.implementation!==H.implementation?(C=co(H,L.mode,P),C.return=L,C):(C=u(C,H.children||[]),C.return=L,C)}function Z(L,C,H,P,ut){return C===null||C.tag!==7?(C=Ta(H,L.mode,P,ut),C.return=L,C):(C=u(C,H),C.return=L,C)}function I(L,C,H){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=oo(""+C,L.mode,H),C.return=L,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case m:return H=Dr(C.type,C.key,C.props,null,L.mode,H),Ii(H,C),H.return=L,H;case g:return C=co(C,L.mode,H),C.return=L,C;case M:var P=C._init;return C=P(C._payload),I(L,C,H)}if(st(C)||X(C))return C=Ta(C,L.mode,H,null),C.return=L,C;if(typeof C.then=="function")return I(L,mr(C),H);if(C.$$typeof===K)return I(L,Or(L,C),H);pr(L,C)}return null}function q(L,C,H,P){var ut=C!==null?C.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return ut!==null?null:y(L,C,""+H,P);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case m:return H.key===ut?A(L,C,H,P):null;case g:return H.key===ut?N(L,C,H,P):null;case M:return ut=H._init,H=ut(H._payload),q(L,C,H,P)}if(st(H)||X(H))return ut!==null?null:Z(L,C,H,P,null);if(typeof H.then=="function")return q(L,C,mr(H),P);if(H.$$typeof===K)return q(L,C,Or(L,H),P);pr(L,H)}return null}function $(L,C,H,P,ut){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return L=L.get(H)||null,y(C,L,""+P,ut);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case m:return L=L.get(P.key===null?H:P.key)||null,A(C,L,P,ut);case g:return L=L.get(P.key===null?H:P.key)||null,N(C,L,P,ut);case M:var _t=P._init;return P=_t(P._payload),$(L,C,H,P,ut)}if(st(P)||X(P))return L=L.get(H)||null,Z(C,L,P,ut,null);if(typeof P.then=="function")return $(L,C,H,mr(P),ut);if(P.$$typeof===K)return $(L,C,H,Or(C,P),ut);pr(C,P)}return null}function ot(L,C,H,P){for(var ut=null,_t=null,ct=C,dt=C=0,ue=null;ct!==null&&dt<H.length;dt++){ct.index>dt?(ue=ct,ct=null):ue=ct.sibling;var Nt=q(L,ct,H[dt],P);if(Nt===null){ct===null&&(ct=ue);break}t&&ct&&Nt.alternate===null&&e(L,ct),C=o(Nt,C,dt),_t===null?ut=Nt:_t.sibling=Nt,_t=Nt,ct=ue}if(dt===H.length)return n(L,ct),Ct&&pa(L,dt),ut;if(ct===null){for(;dt<H.length;dt++)ct=I(L,H[dt],P),ct!==null&&(C=o(ct,C,dt),_t===null?ut=ct:_t.sibling=ct,_t=ct);return Ct&&pa(L,dt),ut}for(ct=i(ct);dt<H.length;dt++)ue=$(ct,L,dt,H[dt],P),ue!==null&&(t&&ue.alternate!==null&&ct.delete(ue.key===null?dt:ue.key),C=o(ue,C,dt),_t===null?ut=ue:_t.sibling=ue,_t=ue);return t&&ct.forEach(function(na){return e(L,na)}),Ct&&pa(L,dt),ut}function yt(L,C,H,P){if(H==null)throw Error(r(151));for(var ut=null,_t=null,ct=C,dt=C=0,ue=null,Nt=H.next();ct!==null&&!Nt.done;dt++,Nt=H.next()){ct.index>dt?(ue=ct,ct=null):ue=ct.sibling;var na=q(L,ct,Nt.value,P);if(na===null){ct===null&&(ct=ue);break}t&&ct&&na.alternate===null&&e(L,ct),C=o(na,C,dt),_t===null?ut=na:_t.sibling=na,_t=na,ct=ue}if(Nt.done)return n(L,ct),Ct&&pa(L,dt),ut;if(ct===null){for(;!Nt.done;dt++,Nt=H.next())Nt=I(L,Nt.value,P),Nt!==null&&(C=o(Nt,C,dt),_t===null?ut=Nt:_t.sibling=Nt,_t=Nt);return Ct&&pa(L,dt),ut}for(ct=i(ct);!Nt.done;dt++,Nt=H.next())Nt=$(ct,L,dt,Nt.value,P),Nt!==null&&(t&&Nt.alternate!==null&&ct.delete(Nt.key===null?dt:Nt.key),C=o(Nt,C,dt),_t===null?ut=Nt:_t.sibling=Nt,_t=Nt);return t&&ct.forEach(function(a2){return e(L,a2)}),Ct&&pa(L,dt),ut}function Qt(L,C,H,P){if(typeof H=="object"&&H!==null&&H.type===b&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case m:t:{for(var ut=H.key;C!==null;){if(C.key===ut){if(ut=H.type,ut===b){if(C.tag===7){n(L,C.sibling),P=u(C,H.props.children),P.return=L,L=P;break t}}else if(C.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===M&&yd(ut)===C.type){n(L,C.sibling),P=u(C,H.props),Ii(P,H),P.return=L,L=P;break t}n(L,C);break}else e(L,C);C=C.sibling}H.type===b?(P=Ta(H.props.children,L.mode,P,H.key),P.return=L,L=P):(P=Dr(H.type,H.key,H.props,null,L.mode,P),Ii(P,H),P.return=L,L=P)}return d(L);case g:t:{for(ut=H.key;C!==null;){if(C.key===ut)if(C.tag===4&&C.stateNode.containerInfo===H.containerInfo&&C.stateNode.implementation===H.implementation){n(L,C.sibling),P=u(C,H.children||[]),P.return=L,L=P;break t}else{n(L,C);break}else e(L,C);C=C.sibling}P=co(H,L.mode,P),P.return=L,L=P}return d(L);case M:return ut=H._init,H=ut(H._payload),Qt(L,C,H,P)}if(st(H))return ot(L,C,H,P);if(X(H)){if(ut=X(H),typeof ut!="function")throw Error(r(150));return H=ut.call(H),yt(L,C,H,P)}if(typeof H.then=="function")return Qt(L,C,mr(H),P);if(H.$$typeof===K)return Qt(L,C,Or(L,H),P);pr(L,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,C!==null&&C.tag===6?(n(L,C.sibling),P=u(C,H),P.return=L,L=P):(n(L,C),P=oo(H,L.mode,P),P.return=L,L=P),d(L)):n(L,C)}return function(L,C,H,P){try{Pi=0;var ut=Qt(L,C,H,P);return Wa=null,ut}catch(ct){if(ct===Zi)throw ct;var _t=Ve(29,ct,null,L.mode);return _t.lanes=P,_t.return=L,_t}finally{}}}var ga=bd(!0),vd=bd(!1),ti=p(null),hr=p(0);function xd(t,e){t=Rn,O(hr,t),O(ti,e),Rn=t|e.baseLanes}function gs(){O(hr,Rn),O(ti,ti.current)}function ys(){Rn=hr.current,F(ti),F(hr)}var Ye=p(null),un=null;function Hn(t){var e=t.alternate;O(ne,ne.current&1),O(Ye,t),un===null&&(e===null||ti.current!==null||e.memoizedState!==null)&&(un=t)}function Ed(t){if(t.tag===22){if(O(ne,ne.current),O(Ye,t),un===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(un=t)}}else kn()}function kn(){O(ne,ne.current),O(Ye,Ye.current)}function yn(t){F(Ye),un===t&&(un=null),F(ne)}var ne=p(0);function gr(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ky=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Vy=a.unstable_scheduleCallback,Qy=a.unstable_NormalPriority,ae={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bs(){return{controller:new Ky,data:new Map,refCount:0}}function Wi(t){t.refCount--,t.refCount===0&&Vy(Qy,function(){t.controller.abort()})}var tl=null,vs=0,ei=0,ni=null;function Xy(t,e){if(tl===null){var n=tl=[];vs=0,ei=Ao(),ni={status:"pending",value:void 0,then:function(i){n.push(i)}}}return vs++,e.then(wd,wd),e}function wd(){if(--vs===0&&tl!==null){ni!==null&&(ni.status="fulfilled");var t=tl;tl=null,ei=0,ni=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function $y(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(u){n.push(u)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var u=0;u<n.length;u++)(0,n[u])(e)},function(u){for(i.status="rejected",i.reason=u,u=0;u<n.length;u++)(0,n[u])(void 0)}),i}var Sd=_.S;_.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Xy(t,e),Sd!==null&&Sd(t,e)};var ya=p(null);function xs(){var t=ya.current;return t!==null?t:Ht.pooledCache}function yr(t,e){e===null?O(ya,ya.current):O(ya,e.pool)}function _d(){var t=xs();return t===null?null:{parent:ae._currentValue,pool:t}}var Gn=0,wt=null,Ut=null,Jt=null,br=!1,ai=!1,ba=!1,vr=0,el=0,ii=null,Zy=0;function $t(){throw Error(r(321))}function Es(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Oe(t[n],e[n]))return!1;return!0}function ws(t,e,n,i,u,o){return Gn=o,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_.H=t===null||t.memoizedState===null?va:qn,ba=!1,o=n(i,u),ba=!1,ai&&(o=Ad(e,n,i,u)),Td(t),o}function Td(t){_.H=sn;var e=Ut!==null&&Ut.next!==null;if(Gn=0,Jt=Ut=wt=null,br=!1,el=0,ii=null,e)throw Error(r(300));t===null||le||(t=t.dependencies,t!==null&&jr(t)&&(le=!0))}function Ad(t,e,n,i){wt=t;var u=0;do{if(ai&&(ii=null),el=0,ai=!1,25<=u)throw Error(r(301));if(u+=1,Jt=Ut=null,t.updateQueue!=null){var o=t.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}_.H=xa,o=e(n,i)}while(ai);return o}function Jy(){var t=_.H,e=t.useState()[0];return e=typeof e.then=="function"?nl(e):e,t=t.useState()[0],(Ut!==null?Ut.memoizedState:null)!==t&&(wt.flags|=1024),e}function Ss(){var t=vr!==0;return vr=0,t}function _s(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Ts(t){if(br){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}br=!1}Gn=0,Jt=Ut=wt=null,ai=!1,el=vr=0,ii=null}function Se(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?wt.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function Pt(){if(Ut===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Jt===null?wt.memoizedState:Jt.next;if(e!==null)Jt=e,Ut=t;else{if(t===null)throw wt.alternate===null?Error(r(467)):Error(r(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Jt===null?wt.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}var xr;xr=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function nl(t){var e=el;return el+=1,ii===null&&(ii=[]),t=hd(ii,t,e),e=wt,(Jt===null?e.memoizedState:Jt.next)===null&&(e=e.alternate,_.H=e===null||e.memoizedState===null?va:qn),t}function Er(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return nl(t);if(t.$$typeof===K)return he(t)}throw Error(r(438,String(t)))}function As(t){var e=null,n=wt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=wt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=xr(),wt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=v;return e.index++,n}function bn(t,e){return typeof e=="function"?e(t):e}function wr(t){var e=Pt();return Rs(e,Ut,t)}function Rs(t,e,n){var i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=n;var u=t.baseQueue,o=i.pending;if(o!==null){if(u!==null){var d=u.next;u.next=o.next,o.next=d}e.baseQueue=u=o,i.pending=null}if(o=t.baseState,u===null)t.memoizedState=o;else{e=u.next;var y=d=null,A=null,N=e,Z=!1;do{var I=N.lane&-536870913;if(I!==N.lane?(Ot&I)===I:(Gn&I)===I){var q=N.revertLane;if(q===0)A!==null&&(A=A.next={lane:0,revertLane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),I===ei&&(Z=!0);else if((Gn&q)===q){N=N.next,q===ei&&(Z=!0);continue}else I={lane:0,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},A===null?(y=A=I,d=o):A=A.next=I,wt.lanes|=q,Jn|=q;I=N.action,ba&&n(o,I),o=N.hasEagerState?N.eagerState:n(o,I)}else q={lane:I,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},A===null?(y=A=q,d=o):A=A.next=q,wt.lanes|=I,Jn|=I;N=N.next}while(N!==null&&N!==e);if(A===null?d=o:A.next=y,!Oe(o,t.memoizedState)&&(le=!0,Z&&(n=ni,n!==null)))throw n;t.memoizedState=o,t.baseState=d,t.baseQueue=A,i.lastRenderedState=o}return u===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function js(t){var e=Pt(),n=e.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=t;var i=n.dispatch,u=n.pending,o=e.memoizedState;if(u!==null){n.pending=null;var d=u=u.next;do o=t(o,d.action),d=d.next;while(d!==u);Oe(o,e.memoizedState)||(le=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function Rd(t,e,n){var i=wt,u=Pt(),o=Ct;if(o){if(n===void 0)throw Error(r(407));n=n()}else n=e();var d=!Oe((Ut||u).memoizedState,n);if(d&&(u.memoizedState=n,le=!0),u=u.queue,Ns(Cd.bind(null,i,u,t),[t]),u.getSnapshot!==e||d||Jt!==null&&Jt.memoizedState.tag&1){if(i.flags|=2048,li(9,Od.bind(null,i,u,n,e),{destroy:void 0},null),Ht===null)throw Error(r(349));o||(Gn&60)!==0||jd(i,e,n)}return n}function jd(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e=xr(),wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Od(t,e,n,i){e.value=n,e.getSnapshot=i,Nd(e)&&Dd(t)}function Cd(t,e,n){return n(function(){Nd(e)&&Dd(t)})}function Nd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Oe(t,n)}catch{return!0}}function Dd(t){var e=Bn(t,2);e!==null&&ve(e,t,2)}function Os(t){var e=Se();if(typeof t=="function"){var n=t;if(t=n(),ba){Mn(!0);try{n()}finally{Mn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:t},e}function zd(t,e,n,i){return t.baseState=n,Rs(t,Ut,typeof i=="function"?i:bn)}function Py(t,e,n,i,u){if(Tr(t))throw Error(r(485));if(t=e.action,t!==null){var o={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){o.listeners.push(d)}};_.T!==null?n(!0):o.isTransition=!1,i(o),n=e.pending,n===null?(o.next=e.pending=o,Md(e,o)):(o.next=n.next,e.pending=n.next=o)}}function Md(t,e){var n=e.action,i=e.payload,u=t.state;if(e.isTransition){var o=_.T,d={};_.T=d;try{var y=n(u,i),A=_.S;A!==null&&A(d,y),Ud(t,e,y)}catch(N){Cs(t,e,N)}finally{_.T=o}}else try{o=n(u,i),Ud(t,e,o)}catch(N){Cs(t,e,N)}}function Ud(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Ld(t,e,i)},function(i){return Cs(t,e,i)}):Ld(t,e,n)}function Ld(t,e,n){e.status="fulfilled",e.value=n,Bd(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Md(t,n)))}function Cs(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,Bd(e),e=e.next;while(e!==i)}t.action=null}function Bd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Hd(t,e){return e}function kd(t,e){if(Ct){var n=Ht.formState;if(n!==null){t:{var i=wt;if(Ct){if(fe){e:{for(var u=fe,o=rn;u.nodeType!==8;){if(!o){u=null;break e}if(u=tn(u.nextSibling),u===null){u=null;break e}}o=u.data,u=o==="F!"||o==="F"?u:null}if(u){fe=tn(u.nextSibling),i=u.data==="F!";break t}}ha(i)}i=!1}i&&(e=n[0])}}return n=Se(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hd,lastRenderedState:e},n.queue=i,n=am.bind(null,wt,i),i.dispatch=n,i=Os(!1),o=Ls.bind(null,wt,!1,i.queue),i=Se(),u={state:e,dispatch:null,action:t,pending:null},i.queue=u,n=Py.bind(null,wt,u,o,n),u.dispatch=n,i.memoizedState=t,[e,n,!1]}function Gd(t){var e=Pt();return qd(e,Ut,t)}function qd(t,e,n){e=Rs(t,e,Hd)[0],t=wr(bn)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?nl(e):e;var i=Pt(),u=i.queue,o=u.dispatch;return n!==i.memoizedState&&(wt.flags|=2048,li(9,Iy.bind(null,u,n),{destroy:void 0},null)),[e,o,t]}function Iy(t,e){t.action=e}function Yd(t){var e=Pt(),n=Ut;if(n!==null)return qd(e,n,t);Pt(),e=e.memoizedState,n=Pt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function li(t,e,n,i){return t={tag:t,create:e,inst:n,deps:i,next:null},e=wt.updateQueue,e===null&&(e=xr(),wt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function Fd(){return Pt().memoizedState}function Sr(t,e,n,i){var u=Se();wt.flags|=t,u.memoizedState=li(1|e,n,{destroy:void 0},i===void 0?null:i)}function _r(t,e,n,i){var u=Pt();i=i===void 0?null:i;var o=u.memoizedState.inst;Ut!==null&&i!==null&&Es(i,Ut.memoizedState.deps)?u.memoizedState=li(e,n,o,i):(wt.flags|=t,u.memoizedState=li(1|e,n,o,i))}function Kd(t,e){Sr(8390656,8,t,e)}function Ns(t,e){_r(2048,8,t,e)}function Vd(t,e){return _r(4,2,t,e)}function Qd(t,e){return _r(4,4,t,e)}function Xd(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $d(t,e,n){n=n!=null?n.concat([t]):null,_r(4,4,Xd.bind(null,e,t),n)}function Ds(){}function Zd(t,e){var n=Pt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Es(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Jd(t,e){var n=Pt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Es(e,i[1]))return i[0];if(i=t(),ba){Mn(!0);try{t()}finally{Mn(!1)}}return n.memoizedState=[i,e],i}function zs(t,e,n){return n===void 0||(Gn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=Im(),wt.lanes|=t,Jn|=t,n)}function Pd(t,e,n,i){return Oe(n,e)?n:ti.current!==null?(t=zs(t,n,i),Oe(t,e)||(le=!0),t):(Gn&42)===0?(le=!0,t.memoizedState=n):(t=Im(),wt.lanes|=t,Jn|=t,e)}function Id(t,e,n,i,u){var o=at.p;at.p=o!==0&&8>o?o:8;var d=_.T,y={};_.T=y,Ls(t,!1,e,n);try{var A=u(),N=_.S;if(N!==null&&N(y,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var Z=$y(A,i);al(t,e,Z,ze(t))}else al(t,e,i,ze(t))}catch(I){al(t,e,{then:function(){},status:"rejected",reason:I},ze())}finally{at.p=o,_.T=d}}function Wy(){}function Ms(t,e,n,i){if(t.tag!==5)throw Error(r(476));var u=Wd(t).queue;Id(t,u,e,ht,n===null?Wy:function(){return tm(t),n(i)})}function Wd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ht,baseState:ht,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:ht},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function tm(t){var e=Wd(t).next.queue;al(t,e,{},ze())}function Us(){return he(Sl)}function em(){return Pt().memoizedState}function nm(){return Pt().memoizedState}function t1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=ze();t=Kn(n);var i=Vn(e,t,n);i!==null&&(ve(i,e,n),rl(i,e,n)),e={cache:bs()},t.payload=e;return}e=e.return}}function e1(t,e,n){var i=ze();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Tr(t)?im(e,n):(n=fs(t,e,n,i),n!==null&&(ve(n,t,i),lm(n,e,i)))}function am(t,e,n){var i=ze();al(t,e,n,i)}function al(t,e,n,i){var u={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tr(t))im(e,u);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var d=e.lastRenderedState,y=o(d,n);if(u.hasEagerState=!0,u.eagerState=y,Oe(y,d))return sr(t,e,u,0),Ht===null&&ur(),!1}catch{}finally{}if(n=fs(t,e,u,i),n!==null)return ve(n,t,i),lm(n,e,i),!0}return!1}function Ls(t,e,n,i){if(i={lane:2,revertLane:Ao(),action:i,hasEagerState:!1,eagerState:null,next:null},Tr(t)){if(e)throw Error(r(479))}else e=fs(t,n,i,2),e!==null&&ve(e,t,2)}function Tr(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function im(t,e){ai=br=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lm(t,e,n){if((n&4194176)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gf(t,n)}}var sn={readContext:he,use:Er,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t};sn.useCacheRefresh=$t,sn.useMemoCache=$t,sn.useHostTransitionStatus=$t,sn.useFormState=$t,sn.useActionState=$t,sn.useOptimistic=$t;var va={readContext:he,use:Er,useCallback:function(t,e){return Se().memoizedState=[t,e===void 0?null:e],t},useContext:he,useEffect:Kd,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Sr(4194308,4,Xd.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sr(4194308,4,t,e)},useInsertionEffect:function(t,e){Sr(4,2,t,e)},useMemo:function(t,e){var n=Se();e=e===void 0?null:e;var i=t();if(ba){Mn(!0);try{t()}finally{Mn(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=Se();if(n!==void 0){var u=n(e);if(ba){Mn(!0);try{n(e)}finally{Mn(!1)}}}else u=e;return i.memoizedState=i.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},i.queue=t,t=t.dispatch=e1.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=Se();return t={current:t},e.memoizedState=t},useState:function(t){t=Os(t);var e=t.queue,n=am.bind(null,wt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Ds,useDeferredValue:function(t,e){var n=Se();return zs(n,t,e)},useTransition:function(){var t=Os(!1);return t=Id.bind(null,wt,t.queue,!0,!1),Se().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=wt,u=Se();if(Ct){if(n===void 0)throw Error(r(407));n=n()}else{if(n=e(),Ht===null)throw Error(r(349));(Ot&60)!==0||jd(i,e,n)}u.memoizedState=n;var o={value:n,getSnapshot:e};return u.queue=o,Kd(Cd.bind(null,i,o,t),[t]),i.flags|=2048,li(9,Od.bind(null,i,o,n,e),{destroy:void 0},null),n},useId:function(){var t=Se(),e=Ht.identifierPrefix;if(Ct){var n=gn,i=hn;n=(i&~(1<<32-je(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=vr++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Zy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return Se().memoizedState=t1.bind(null,wt)}};va.useMemoCache=As,va.useHostTransitionStatus=Us,va.useFormState=kd,va.useActionState=kd,va.useOptimistic=function(t){var e=Se();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Ls.bind(null,wt,!0,n),n.dispatch=e,[t,e]};var qn={readContext:he,use:Er,useCallback:Zd,useContext:he,useEffect:Ns,useImperativeHandle:$d,useInsertionEffect:Vd,useLayoutEffect:Qd,useMemo:Jd,useReducer:wr,useRef:Fd,useState:function(){return wr(bn)},useDebugValue:Ds,useDeferredValue:function(t,e){var n=Pt();return Pd(n,Ut.memoizedState,t,e)},useTransition:function(){var t=wr(bn)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:nl(t),e]},useSyncExternalStore:Rd,useId:em};qn.useCacheRefresh=nm,qn.useMemoCache=As,qn.useHostTransitionStatus=Us,qn.useFormState=Gd,qn.useActionState=Gd,qn.useOptimistic=function(t,e){var n=Pt();return zd(n,Ut,t,e)};var xa={readContext:he,use:Er,useCallback:Zd,useContext:he,useEffect:Ns,useImperativeHandle:$d,useInsertionEffect:Vd,useLayoutEffect:Qd,useMemo:Jd,useReducer:js,useRef:Fd,useState:function(){return js(bn)},useDebugValue:Ds,useDeferredValue:function(t,e){var n=Pt();return Ut===null?zs(n,t,e):Pd(n,Ut.memoizedState,t,e)},useTransition:function(){var t=js(bn)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:nl(t),e]},useSyncExternalStore:Rd,useId:em};xa.useCacheRefresh=nm,xa.useMemoCache=As,xa.useHostTransitionStatus=Us,xa.useFormState=Yd,xa.useActionState=Yd,xa.useOptimistic=function(t,e){var n=Pt();return Ut!==null?zd(n,Ut,t,e):(n.baseState=t,[t,n.queue.dispatch])};function Bs(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hs={isMounted:function(t){return(t=t._reactInternals)?rt(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ze(),u=Kn(i);u.payload=e,n!=null&&(u.callback=n),e=Vn(t,u,i),e!==null&&(ve(e,t,i),rl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ze(),u=Kn(i);u.tag=1,u.payload=e,n!=null&&(u.callback=n),e=Vn(t,u,i),e!==null&&(ve(e,t,i),rl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ze(),i=Kn(n);i.tag=2,e!=null&&(i.callback=e),e=Vn(t,i,n),e!==null&&(ve(e,t,n),rl(e,t,n))}};function rm(t,e,n,i,u,o,d){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,d):e.prototype&&e.prototype.isPureReactComponent?!Ki(n,i)||!Ki(u,o):!0}function um(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Hs.enqueueReplaceState(e,e.state,null)}function Ea(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=tt({},n));for(var u in t)n[u]===void 0&&(n[u]=t[u])}return n}var Ar=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function sm(t){Ar(t)}function om(t){console.error(t)}function cm(t){Ar(t)}function Rr(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function fm(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ks(t,e,n){return n=Kn(n),n.tag=3,n.payload={element:null},n.callback=function(){Rr(t,e)},n}function dm(t){return t=Kn(t),t.tag=3,t}function mm(t,e,n,i){var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var o=i.value;t.payload=function(){return u(o)},t.callback=function(){fm(e,n,i)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(t.callback=function(){fm(e,n,i),typeof u!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var y=i.stack;this.componentDidCatch(i.value,{componentStack:y!==null?y:""})})}function n1(t,e,n,i,u){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&ll(e,n,u,!0),n=Ye.current,n!==null){switch(n.tag){case 13:return un===null?Eo():n.alternate===null&&Vt===0&&(Vt=3),n.flags&=-257,n.flags|=65536,n.lanes=u,i===hs?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),So(t,i,u)),!1;case 22:return n.flags|=65536,i===hs?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),So(t,i,u)),!1}throw Error(r(435,n.tag))}return So(t,i,u),Eo(),!1}if(Ct)return e=Ye.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,i!==ps&&(t=Error(r(422),{cause:i}),$i(ke(t,n)))):(i!==ps&&(e=Error(r(423),{cause:i}),$i(ke(e,n))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,i=ke(i,n),u=ks(t.stateNode,i,u),to(t,u),Vt!==4&&(Vt=2)),!1;var o=Error(r(520),{cause:i});if(o=ke(o,n),pl===null?pl=[o]:pl.push(o),Vt!==4&&(Vt=2),e===null)return!0;i=ke(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=u&-u,n.lanes|=t,t=ks(n.stateNode,i,t),to(n,t),!1;case 1:if(e=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Pn===null||!Pn.has(o))))return n.flags|=65536,u&=-u,n.lanes|=u,u=dm(u),mm(u,t,n,i),to(n,u),!1}n=n.return}while(n!==null);return!1}var pm=Error(r(461)),le=!1;function de(t,e,n,i){e.child=t===null?vd(e,null,n,i):ga(e,t.child,n,i)}function hm(t,e,n,i,u){n=n.render;var o=e.ref;if("ref"in i){var d={};for(var y in i)y!=="ref"&&(d[y]=i[y])}else d=i;return Sa(e),i=ws(t,e,n,d,o,u),y=Ss(),t!==null&&!le?(_s(t,e,u),vn(t,e,u)):(Ct&&y&&ds(e),e.flags|=1,de(t,e,i,u),e.child)}function gm(t,e,n,i,u){if(t===null){var o=n.type;return typeof o=="function"&&!so(o)&&o.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=o,ym(t,e,o,i,u)):(t=Dr(n.type,null,i,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!$s(t,u)){var d=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ki,n(d,i)&&t.ref===e.ref)return vn(t,e,u)}return e.flags|=1,t=Zn(o,i),t.ref=e.ref,t.return=e,e.child=t}function ym(t,e,n,i,u){if(t!==null){var o=t.memoizedProps;if(Ki(o,i)&&t.ref===e.ref)if(le=!1,e.pendingProps=i=o,$s(t,u))(t.flags&131072)!==0&&(le=!0);else return e.lanes=t.lanes,vn(t,e,u)}return Gs(t,e,n,i,u)}function bm(t,e,n){var i=e.pendingProps,u=i.children,o=(e.stateNode._pendingVisibility&2)!==0,d=t!==null?t.memoizedState:null;if(il(t,e),i.mode==="hidden"||o){if((e.flags&128)!==0){if(i=d!==null?d.baseLanes|n:n,t!==null){for(u=e.child=t.child,o=0;u!==null;)o=o|u.lanes|u.childLanes,u=u.sibling;e.childLanes=o&~i}else e.childLanes=0,e.child=null;return vm(t,e,i,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&yr(e,d!==null?d.cachePool:null),d!==null?xd(e,d):gs(),Ed(e);else return e.lanes=e.childLanes=536870912,vm(t,e,d!==null?d.baseLanes|n:n,n)}else d!==null?(yr(e,d.cachePool),xd(e,d),kn(),e.memoizedState=null):(t!==null&&yr(e,null),gs(),kn());return de(t,e,u,n),e.child}function vm(t,e,n,i){var u=xs();return u=u===null?null:{parent:ae._currentValue,pool:u},e.memoizedState={baseLanes:n,cachePool:u},t!==null&&yr(e,null),gs(),Ed(e),t!==null&&ll(t,e,i,!0),null}function il(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(t===null||t.ref!==n)&&(e.flags|=2097664)}}function Gs(t,e,n,i,u){return Sa(e),n=ws(t,e,n,i,void 0,u),i=Ss(),t!==null&&!le?(_s(t,e,u),vn(t,e,u)):(Ct&&i&&ds(e),e.flags|=1,de(t,e,n,u),e.child)}function xm(t,e,n,i,u,o){return Sa(e),e.updateQueue=null,n=Ad(e,i,n,u),Td(t),i=Ss(),t!==null&&!le?(_s(t,e,o),vn(t,e,o)):(Ct&&i&&ds(e),e.flags|=1,de(t,e,n,o),e.child)}function Em(t,e,n,i,u){if(Sa(e),e.stateNode===null){var o=Ja,d=n.contextType;typeof d=="object"&&d!==null&&(o=he(d)),o=new n(i,o),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Hs,e.stateNode=o,o._reactInternals=e,o=e.stateNode,o.props=i,o.state=e.memoizedState,o.refs={},Is(e),d=n.contextType,o.context=typeof d=="object"&&d!==null?he(d):Ja,o.state=e.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Bs(e,n,d,i),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(d=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),d!==o.state&&Hs.enqueueReplaceState(o,o.state,null),sl(e,i,o,u),ul(),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){o=e.stateNode;var y=e.memoizedProps,A=Ea(n,y);o.props=A;var N=o.context,Z=n.contextType;d=Ja,typeof Z=="object"&&Z!==null&&(d=he(Z));var I=n.getDerivedStateFromProps;Z=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function",y=e.pendingProps!==y,Z||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(y||N!==d)&&um(e,o,i,d),Fn=!1;var q=e.memoizedState;o.state=q,sl(e,i,o,u),ul(),N=e.memoizedState,y||q!==N||Fn?(typeof I=="function"&&(Bs(e,n,I,i),N=e.memoizedState),(A=Fn||rm(e,n,A,i,q,N,d))?(Z||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=N),o.props=i,o.state=N,o.context=d,i=A):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ws(t,e),d=e.memoizedProps,Z=Ea(n,d),o.props=Z,I=e.pendingProps,q=o.context,N=n.contextType,A=Ja,typeof N=="object"&&N!==null&&(A=he(N)),y=n.getDerivedStateFromProps,(N=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==I||q!==A)&&um(e,o,i,A),Fn=!1,q=e.memoizedState,o.state=q,sl(e,i,o,u),ul();var $=e.memoizedState;d!==I||q!==$||Fn||t!==null&&t.dependencies!==null&&jr(t.dependencies)?(typeof y=="function"&&(Bs(e,n,y,i),$=e.memoizedState),(Z=Fn||rm(e,n,Z,i,q,$,A)||t!==null&&t.dependencies!==null&&jr(t.dependencies))?(N||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,$,A),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,$,A)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||d===t.memoizedProps&&q===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&q===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=$),o.props=i,o.state=$,o.context=A,i=Z):(typeof o.componentDidUpdate!="function"||d===t.memoizedProps&&q===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&q===t.memoizedState||(e.flags|=1024),i=!1)}return o=i,il(t,e),i=(e.flags&128)!==0,o||i?(o=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:o.render(),e.flags|=1,t!==null&&i?(e.child=ga(e,t.child,null,u),e.child=ga(e,null,n,u)):de(t,e,n,u),e.memoizedState=o.state,t=e.child):t=vn(t,e,u),t}function wm(t,e,n,i){return Xi(),e.flags|=256,de(t,e,n,i),e.child}var qs={dehydrated:null,treeContext:null,retryLane:0};function Ys(t){return{baseLanes:t,cachePool:_d()}}function Fs(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Qe),t}function Sm(t,e,n){var i=e.pendingProps,u=!1,o=(e.flags&128)!==0,d;if((d=o)||(d=t!==null&&t.memoizedState===null?!1:(ne.current&2)!==0),d&&(u=!0,e.flags&=-129),d=(e.flags&32)!==0,e.flags&=-33,t===null){if(Ct){if(u?Hn(e):kn(),Ct){var y=fe,A;if(A=y){t:{for(A=y,y=rn;A.nodeType!==8;){if(!y){y=null;break t}if(A=tn(A.nextSibling),A===null){y=null;break t}}y=A}y!==null?(e.memoizedState={dehydrated:y,treeContext:ma!==null?{id:hn,overflow:gn}:null,retryLane:536870912},A=Ve(18,null,null,0),A.stateNode=y,A.return=e,e.child=A,be=e,fe=null,A=!0):A=!1}A||ha(e)}if(y=e.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return y.data==="$!"?e.lanes=16:e.lanes=536870912,null;yn(e)}return y=i.children,i=i.fallback,u?(kn(),u=e.mode,y=Vs({mode:"hidden",children:y},u),i=Ta(i,u,n,null),y.return=e,i.return=e,y.sibling=i,e.child=y,u=e.child,u.memoizedState=Ys(n),u.childLanes=Fs(t,d,n),e.memoizedState=qs,i):(Hn(e),Ks(e,y))}if(A=t.memoizedState,A!==null&&(y=A.dehydrated,y!==null)){if(o)e.flags&256?(Hn(e),e.flags&=-257,e=Qs(t,e,n)):e.memoizedState!==null?(kn(),e.child=t.child,e.flags|=128,e=null):(kn(),u=i.fallback,y=e.mode,i=Vs({mode:"visible",children:i.children},y),u=Ta(u,y,n,null),u.flags|=2,i.return=e,u.return=e,i.sibling=u,e.child=i,ga(e,t.child,null,n),i=e.child,i.memoizedState=Ys(n),i.childLanes=Fs(t,d,n),e.memoizedState=qs,e=u);else if(Hn(e),y.data==="$!"){if(d=y.nextSibling&&y.nextSibling.dataset,d)var N=d.dgst;d=N,i=Error(r(419)),i.stack="",i.digest=d,$i({value:i,source:null,stack:null}),e=Qs(t,e,n)}else if(le||ll(t,e,n,!1),d=(n&t.childLanes)!==0,le||d){if(d=Ht,d!==null){if(i=n&-n,(i&42)!==0)i=1;else switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=64;break;case 268435456:i=134217728;break;default:i=0}if(i=(i&(d.suspendedLanes|n))!==0?0:i,i!==0&&i!==A.retryLane)throw A.retryLane=i,Bn(t,i),ve(d,t,i),pm}y.data==="$?"||Eo(),e=Qs(t,e,n)}else y.data==="$?"?(e.flags|=128,e.child=t.child,e=y1.bind(null,t),y._reactRetry=e,e=null):(t=A.treeContext,fe=tn(y.nextSibling),be=e,Ct=!0,Ie=null,rn=!1,t!==null&&(Ge[qe++]=hn,Ge[qe++]=gn,Ge[qe++]=ma,hn=t.id,gn=t.overflow,ma=e),e=Ks(e,i.children),e.flags|=4096);return e}return u?(kn(),u=i.fallback,y=e.mode,A=t.child,N=A.sibling,i=Zn(A,{mode:"hidden",children:i.children}),i.subtreeFlags=A.subtreeFlags&31457280,N!==null?u=Zn(N,u):(u=Ta(u,y,n,null),u.flags|=2),u.return=e,i.return=e,i.sibling=u,e.child=i,i=u,u=e.child,y=t.child.memoizedState,y===null?y=Ys(n):(A=y.cachePool,A!==null?(N=ae._currentValue,A=A.parent!==N?{parent:N,pool:N}:A):A=_d(),y={baseLanes:y.baseLanes|n,cachePool:A}),u.memoizedState=y,u.childLanes=Fs(t,d,n),e.memoizedState=qs,i):(Hn(e),n=t.child,t=n.sibling,n=Zn(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(d=e.deletions,d===null?(e.deletions=[t],e.flags|=16):d.push(t)),e.child=n,e.memoizedState=null,n)}function Ks(t,e){return e=Vs({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Vs(t,e){return Zm(t,e,0,null)}function Qs(t,e,n){return ga(e,t.child,null,n),t=Ks(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _m(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Js(t.return,e,n)}function Xs(t,e,n,i,u){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:u}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=u)}function Tm(t,e,n){var i=e.pendingProps,u=i.revealOrder,o=i.tail;if(de(t,e,i.children,n),i=ne.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_m(t,n,e);else if(t.tag===19)_m(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}switch(O(ne,i),u){case"forwards":for(n=e.child,u=null;n!==null;)t=n.alternate,t!==null&&gr(t)===null&&(u=n),n=n.sibling;n=u,n===null?(u=e.child,e.child=null):(u=n.sibling,n.sibling=null),Xs(e,!1,u,n,o);break;case"backwards":for(n=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&gr(t)===null){e.child=u;break}t=u.sibling,u.sibling=n,n=u,u=t}Xs(e,!0,n,null,o);break;case"together":Xs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(ll(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,n=Zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $s(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&jr(t)))}function a1(t,e,n){switch(e.tag){case 3:ee(e,e.stateNode.containerInfo),Yn(e,ae,t.memoizedState.cache),Xi();break;case 27:case 5:Xt(e);break;case 4:ee(e,e.stateNode.containerInfo);break;case 10:Yn(e,e.type,e.memoizedProps.value);break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Hn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Sm(t,e,n):(Hn(e),t=vn(t,e,n),t!==null?t.sibling:null);Hn(e);break;case 19:var u=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(ll(t,e,n,!1),i=(n&e.childLanes)!==0),u){if(i)return Tm(t,e,n);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),O(ne,ne.current),i)break;return null;case 22:case 23:return e.lanes=0,bm(t,e,n);case 24:Yn(e,ae,t.memoizedState.cache)}return vn(t,e,n)}function Am(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)le=!0;else{if(!$s(t,n)&&(e.flags&128)===0)return le=!1,a1(t,e,n);le=(t.flags&131072)!==0}else le=!1,Ct&&(e.flags&1048576)!==0&&cd(e,fr,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var i=e.elementType,u=i._init;if(i=u(i._payload),e.type=i,typeof i=="function")so(i)?(t=Ea(i,t),e.tag=1,e=Em(null,e,i,t,n)):(e.tag=0,e=Gs(null,e,i,t,n));else{if(i!=null){if(u=i.$$typeof,u===z){e.tag=11,e=hm(null,e,i,t,n);break t}else if(u===R){e.tag=14,e=gm(null,e,i,t,n);break t}}throw e=et(i)||i,Error(r(306,e,""))}}return e;case 0:return Gs(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,u=Ea(i,e.pendingProps),Em(t,e,i,u,n);case 3:t:{if(ee(e,e.stateNode.containerInfo),t===null)throw Error(r(387));var o=e.pendingProps;u=e.memoizedState,i=u.element,Ws(t,e),sl(e,o,null,n);var d=e.memoizedState;if(o=d.cache,Yn(e,ae,o),o!==u.cache&&Ps(e,[ae],n,!0),ul(),o=d.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:d.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=wm(t,e,o,n);break t}else if(o!==i){i=ke(Error(r(424)),e),$i(i),e=wm(t,e,o,n);break t}else for(fe=tn(e.stateNode.containerInfo.firstChild),be=e,Ct=!0,Ie=null,rn=!0,n=vd(e,null,o,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xi(),o===i){e=vn(t,e,n);break t}de(t,e,o,n)}e=e.child}return e;case 26:return il(t,e),t===null?(n=Op(e.type,null,e.pendingProps,null))?e.memoizedState=n:Ct||(n=e.type,t=e.pendingProps,i=Kr(Mt.current).createElement(n),i[pe]=e,i[Ee]=t,me(i,n,t),ie(i),e.stateNode=i):e.memoizedState=Op(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Xt(e),t===null&&Ct&&(i=e.stateNode=Ap(e.type,e.pendingProps,Mt.current),be=e,rn=!0,fe=tn(i.firstChild)),i=e.pendingProps.children,t!==null||Ct?de(t,e,i,n):e.child=ga(e,null,i,n),il(t,e),e.child;case 5:return t===null&&Ct&&((u=i=fe)&&(i=z1(i,e.type,e.pendingProps,rn),i!==null?(e.stateNode=i,be=e,fe=tn(i.firstChild),rn=!1,u=!0):u=!1),u||ha(e)),Xt(e),u=e.type,o=e.pendingProps,d=t!==null?t.memoizedProps:null,i=o.children,Uo(u,o)?i=null:d!==null&&Uo(u,d)&&(e.flags|=32),e.memoizedState!==null&&(u=ws(t,e,Jy,null,null,n),Sl._currentValue=u),il(t,e),de(t,e,i,n),e.child;case 6:return t===null&&Ct&&((t=n=fe)&&(n=M1(n,e.pendingProps,rn),n!==null?(e.stateNode=n,be=e,fe=null,t=!0):t=!1),t||ha(e)),null;case 13:return Sm(t,e,n);case 4:return ee(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ga(e,null,i,n):de(t,e,i,n),e.child;case 11:return hm(t,e,e.type,e.pendingProps,n);case 7:return de(t,e,e.pendingProps,n),e.child;case 8:return de(t,e,e.pendingProps.children,n),e.child;case 12:return de(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,Yn(e,e.type,i.value),de(t,e,i.children,n),e.child;case 9:return u=e.type._context,i=e.pendingProps.children,Sa(e),u=he(u),i=i(u),e.flags|=1,de(t,e,i,n),e.child;case 14:return gm(t,e,e.type,e.pendingProps,n);case 15:return ym(t,e,e.type,e.pendingProps,n);case 19:return Tm(t,e,n);case 22:return bm(t,e,n);case 24:return Sa(e),i=he(ae),t===null?(u=xs(),u===null&&(u=Ht,o=bs(),u.pooledCache=o,o.refCount++,o!==null&&(u.pooledCacheLanes|=n),u=o),e.memoizedState={parent:i,cache:u},Is(e),Yn(e,ae,u)):((t.lanes&n)!==0&&(Ws(t,e),sl(e,null,null,n),ul()),u=t.memoizedState,o=e.memoizedState,u.parent!==i?(u={parent:i,cache:i},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),Yn(e,ae,i)):(i=o.cache,Yn(e,ae,i),i!==u.cache&&Ps(e,[ae],n,!0))),de(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}var Zs=p(null),wa=null,xn=null;function Yn(t,e,n){O(Zs,e._currentValue),e._currentValue=n}function En(t){t._currentValue=Zs.current,F(Zs)}function Js(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e,n,i){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var o=u.dependencies;if(o!==null){var d=u.child;o=o.firstContext;t:for(;o!==null;){var y=o;o=u;for(var A=0;A<e.length;A++)if(y.context===e[A]){o.lanes|=n,y=o.alternate,y!==null&&(y.lanes|=n),Js(o.return,n,t),i||(d=null);break t}o=y.next}}else if(u.tag===18){if(d=u.return,d===null)throw Error(r(341));d.lanes|=n,o=d.alternate,o!==null&&(o.lanes|=n),Js(d,n,t),d=null}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===t){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}}function ll(t,e,n,i){t=null;for(var u=e,o=!1;u!==null;){if(!o){if((u.flags&524288)!==0)o=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var d=u.alternate;if(d===null)throw Error(r(387));if(d=d.memoizedProps,d!==null){var y=u.type;Oe(u.pendingProps.value,d.value)||(t!==null?t.push(y):t=[y])}}else if(u===te.current){if(d=u.alternate,d===null)throw Error(r(387));d.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Sl):t=[Sl])}u=u.return}t!==null&&Ps(e,t,n,i),e.flags|=262144}function jr(t){for(t=t.firstContext;t!==null;){if(!Oe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sa(t){wa=t,xn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function he(t){return Rm(wa,t)}function Or(t,e){return wa===null&&Sa(t),Rm(t,e)}function Rm(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},xn===null){if(t===null)throw Error(r(308));xn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else xn=xn.next=e;return n}var Fn=!1;function Is(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ws(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Kn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Vn(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(Yt&2)!==0){var u=i.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),i.pending=e,e=or(t),sd(t,null,n),e}return sr(t,i,e,n),or(t)}function rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194176)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gf(t,n)}}function to(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var u=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?u=o=d:o=o.next=d,n=n.next}while(n!==null);o===null?u=o=e:o=o.next=e}else u=o=e;n={baseState:i.baseState,firstBaseUpdate:u,lastBaseUpdate:o,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var eo=!1;function ul(){if(eo){var t=ni;if(t!==null)throw t}}function sl(t,e,n,i){eo=!1;var u=t.updateQueue;Fn=!1;var o=u.firstBaseUpdate,d=u.lastBaseUpdate,y=u.shared.pending;if(y!==null){u.shared.pending=null;var A=y,N=A.next;A.next=null,d===null?o=N:d.next=N,d=A;var Z=t.alternate;Z!==null&&(Z=Z.updateQueue,y=Z.lastBaseUpdate,y!==d&&(y===null?Z.firstBaseUpdate=N:y.next=N,Z.lastBaseUpdate=A))}if(o!==null){var I=u.baseState;d=0,Z=N=A=null,y=o;do{var q=y.lane&-536870913,$=q!==y.lane;if($?(Ot&q)===q:(i&q)===q){q!==0&&q===ei&&(eo=!0),Z!==null&&(Z=Z.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});t:{var ot=t,yt=y;q=e;var Qt=n;switch(yt.tag){case 1:if(ot=yt.payload,typeof ot=="function"){I=ot.call(Qt,I,q);break t}I=ot;break t;case 3:ot.flags=ot.flags&-65537|128;case 0:if(ot=yt.payload,q=typeof ot=="function"?ot.call(Qt,I,q):ot,q==null)break t;I=tt({},I,q);break t;case 2:Fn=!0}}q=y.callback,q!==null&&(t.flags|=64,$&&(t.flags|=8192),$=u.callbacks,$===null?u.callbacks=[q]:$.push(q))}else $={lane:q,tag:y.tag,payload:y.payload,callback:y.callback,next:null},Z===null?(N=Z=$,A=I):Z=Z.next=$,d|=q;if(y=y.next,y===null){if(y=u.shared.pending,y===null)break;$=y,y=$.next,$.next=null,u.lastBaseUpdate=$,u.shared.pending=null}}while(!0);Z===null&&(A=I),u.baseState=A,u.firstBaseUpdate=N,u.lastBaseUpdate=Z,o===null&&(u.shared.lanes=0),Jn|=d,t.lanes=d,t.memoizedState=I}}function jm(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function Om(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)jm(n[t],e)}function ol(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var u=i.next;n=u;do{if((n.tag&t)===t){i=void 0;var o=n.create,d=n.inst;i=o(),d.destroy=i}n=n.next}while(n!==u)}}catch(y){Bt(e,e.return,y)}}function Qn(t,e,n){try{var i=e.updateQueue,u=i!==null?i.lastEffect:null;if(u!==null){var o=u.next;i=o;do{if((i.tag&t)===t){var d=i.inst,y=d.destroy;if(y!==void 0){d.destroy=void 0,u=e;var A=n;try{y()}catch(N){Bt(u,A,N)}}}i=i.next}while(i!==o)}}catch(N){Bt(e,e.return,N)}}function Cm(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Om(e,n)}catch(i){Bt(t,t.return,i)}}}function Nm(t,e,n){n.props=Ea(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){Bt(t,e,i)}}function _a(t,e){try{var n=t.ref;if(n!==null){var i=t.stateNode;switch(t.tag){case 26:case 27:case 5:var u=i;break;default:u=i}typeof n=="function"?t.refCleanup=n(u):n.current=u}}catch(o){Bt(t,e,o)}}function Ce(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(u){Bt(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(u){Bt(t,e,u)}else n.current=null}function Dm(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(u){Bt(t,t.return,u)}}function zm(t,e,n){try{var i=t.stateNode;j1(i,t.type,n,e),i[Ee]=e}catch(u){Bt(t,t.return,u)}}function Mm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function no(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Mm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ao(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fr));else if(i!==4&&i!==27&&(t=t.child,t!==null))for(ao(t,e,n),t=t.sibling;t!==null;)ao(t,e,n),t=t.sibling}function Cr(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&i!==27&&(t=t.child,t!==null))for(Cr(t,e,n),t=t.sibling;t!==null;)Cr(t,e,n),t=t.sibling}var wn=!1,Kt=!1,io=!1,Um=typeof WeakSet=="function"?WeakSet:Set,re=null,Lm=!1;function i1(t,e){if(t=t.containerInfo,zo=Jr,t=Wf(t),rs(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var u=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break t}var d=0,y=-1,A=-1,N=0,Z=0,I=t,q=null;e:for(;;){for(var $;I!==n||u!==0&&I.nodeType!==3||(y=d+u),I!==o||i!==0&&I.nodeType!==3||(A=d+i),I.nodeType===3&&(d+=I.nodeValue.length),($=I.firstChild)!==null;)q=I,I=$;for(;;){if(I===t)break e;if(q===n&&++N===u&&(y=d),q===o&&++Z===i&&(A=d),($=I.nextSibling)!==null)break;I=q,q=I.parentNode}I=$}n=y===-1||A===-1?null:{start:y,end:A}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mo={focusedElem:t,selectionRange:n},Jr=!1,re=e;re!==null;)if(e=re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,re=t;else for(;re!==null;){switch(e=re,o=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&o!==null){t=void 0,n=e,u=o.memoizedProps,o=o.memoizedState,i=n.stateNode;try{var ot=Ea(n.type,u,n.elementType===n.type);t=i.getSnapshotBeforeUpdate(ot,o),i.__reactInternalSnapshotBeforeUpdate=t}catch(yt){Bt(n,n.return,yt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Ho(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ho(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,re=t;break}re=e.return}return ot=Lm,Lm=!1,ot}function Bm(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:_n(t,n),i&4&&ol(5,n);break;case 1:if(_n(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(y){Bt(n,n.return,y)}else{var u=Ea(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Bt(n,n.return,y)}}i&64&&Cm(n),i&512&&_a(n,n.return);break;case 3:if(_n(t,n),i&64&&(i=n.updateQueue,i!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Om(i,t)}catch(y){Bt(n,n.return,y)}}break;case 26:_n(t,n),i&512&&_a(n,n.return);break;case 27:case 5:_n(t,n),e===null&&i&4&&Dm(n),i&512&&_a(n,n.return);break;case 12:_n(t,n);break;case 13:_n(t,n),i&4&&Gm(t,n);break;case 22:if(u=n.memoizedState!==null||wn,!u){e=e!==null&&e.memoizedState!==null||Kt;var o=wn,d=Kt;wn=u,(Kt=e)&&!d?Xn(t,n,(n.subtreeFlags&8772)!==0):_n(t,n),wn=o,Kt=d}i&512&&(n.memoizedProps.mode==="manual"?_a(n,n.return):Ce(n,n.return));break;default:_n(t,n)}}function Hm(t){var e=t.alternate;e!==null&&(t.alternate=null,Hm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ku(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var It=null,Ne=!1;function Sn(t,e,n){for(n=n.child;n!==null;)km(t,e,n),n=n.sibling}function km(t,e,n){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Di,n)}catch{}switch(n.tag){case 26:Kt||Ce(n,e),Sn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Kt||Ce(n,e);var i=It,u=Ne;for(It=n.stateNode,Sn(t,e,n),n=n.stateNode,e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Ku(n),It=i,Ne=u;break;case 5:Kt||Ce(n,e);case 6:u=It;var o=Ne;if(It=null,Sn(t,e,n),It=u,Ne=o,It!==null)if(Ne)try{t=It,i=n.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)}catch(d){Bt(n,e,d)}else try{It.removeChild(n.stateNode)}catch(d){Bt(n,e,d)}break;case 18:It!==null&&(Ne?(e=It,n=n.stateNode,e.nodeType===8?Bo(e.parentNode,n):e.nodeType===1&&Bo(e,n),Rl(e)):Bo(It,n.stateNode));break;case 4:i=It,u=Ne,It=n.stateNode.containerInfo,Ne=!0,Sn(t,e,n),It=i,Ne=u;break;case 0:case 11:case 14:case 15:Kt||Qn(2,n,e),Kt||Qn(4,n,e),Sn(t,e,n);break;case 1:Kt||(Ce(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Nm(n,e,i)),Sn(t,e,n);break;case 21:Sn(t,e,n);break;case 22:Kt||Ce(n,e),Kt=(i=Kt)||n.memoizedState!==null,Sn(t,e,n),Kt=i;break;default:Sn(t,e,n)}}function Gm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Rl(t)}catch(n){Bt(e,e.return,n)}}function l1(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Um),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Um),e;default:throw Error(r(435,t.tag))}}function lo(t,e){var n=l1(t);e.forEach(function(i){var u=b1.bind(null,t,i);n.has(i)||(n.add(i),i.then(u,u))})}function Fe(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var u=n[i],o=t,d=e,y=d;t:for(;y!==null;){switch(y.tag){case 27:case 5:It=y.stateNode,Ne=!1;break t;case 3:It=y.stateNode.containerInfo,Ne=!0;break t;case 4:It=y.stateNode.containerInfo,Ne=!0;break t}y=y.return}if(It===null)throw Error(r(160));km(o,d,u),It=null,Ne=!1,o=u.alternate,o!==null&&(o.return=null),u.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)qm(e,t),e=e.sibling}var We=null;function qm(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Fe(e,t),Ke(t),i&4&&(Qn(3,t,t.return),ol(3,t),Qn(5,t,t.return));break;case 1:Fe(e,t),Ke(t),i&512&&(Kt||n===null||Ce(n,n.return)),i&64&&wn&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var u=We;if(Fe(e,t),Ke(t),i&512&&(Kt||n===null||Ce(n,n.return)),i&4){var o=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){t:{i=t.type,n=t.memoizedProps,u=u.ownerDocument||u;e:switch(i){case"title":o=u.getElementsByTagName("title")[0],(!o||o[Ui]||o[pe]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=u.createElement(i),u.head.insertBefore(o,u.querySelector("head > title"))),me(o,i,n),o[pe]=t,ie(o),i=o;break t;case"link":var d=Dp("link","href",u).get(i+(n.href||""));if(d){for(var y=0;y<d.length;y++)if(o=d[y],o.getAttribute("href")===(n.href==null?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(y,1);break e}}o=u.createElement(i),me(o,i,n),u.head.appendChild(o);break;case"meta":if(d=Dp("meta","content",u).get(i+(n.content||""))){for(y=0;y<d.length;y++)if(o=d[y],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(y,1);break e}}o=u.createElement(i),me(o,i,n),u.head.appendChild(o);break;default:throw Error(r(468,i))}o[pe]=t,ie(o),i=o}t.stateNode=i}else zp(u,t.type,t.stateNode);else t.stateNode=Np(u,i,t.memoizedProps);else o!==i?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,i===null?zp(u,t.type,t.stateNode):Np(u,i,t.memoizedProps)):i===null&&t.stateNode!==null&&zm(t,t.memoizedProps,n.memoizedProps)}break;case 27:if(i&4&&t.alternate===null){u=t.stateNode,o=t.memoizedProps;try{for(var A=u.firstChild;A;){var N=A.nextSibling,Z=A.nodeName;A[Ui]||Z==="HEAD"||Z==="BODY"||Z==="SCRIPT"||Z==="STYLE"||Z==="LINK"&&A.rel.toLowerCase()==="stylesheet"||u.removeChild(A),A=N}for(var I=t.type,q=u.attributes;q.length;)u.removeAttributeNode(q[0]);me(u,I,o),u[pe]=t,u[Ee]=o}catch(ot){Bt(t,t.return,ot)}}case 5:if(Fe(e,t),Ke(t),i&512&&(Kt||n===null||Ce(n,n.return)),t.flags&32){u=t.stateNode;try{Fa(u,"")}catch(ot){Bt(t,t.return,ot)}}i&4&&t.stateNode!=null&&(u=t.memoizedProps,zm(t,u,n!==null?n.memoizedProps:u)),i&1024&&(io=!0);break;case 6:if(Fe(e,t),Ke(t),i&4){if(t.stateNode===null)throw Error(r(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(ot){Bt(t,t.return,ot)}}break;case 3:if(Xr=null,u=We,We=Vr(e.containerInfo),Fe(e,t),We=u,Ke(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Rl(e.containerInfo)}catch(ot){Bt(t,t.return,ot)}io&&(io=!1,Ym(t));break;case 4:i=We,We=Vr(t.stateNode.containerInfo),Fe(e,t),Ke(t),We=i;break;case 12:Fe(e,t),Ke(t);break;case 13:Fe(e,t),Ke(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ho=ln()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,lo(t,i)));break;case 22:if(i&512&&(Kt||n===null||Ce(n,n.return)),A=t.memoizedState!==null,N=n!==null&&n.memoizedState!==null,Z=wn,I=Kt,wn=Z||A,Kt=I||N,Fe(e,t),Kt=I,wn=Z,Ke(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,i&8192&&(e._visibility=A?e._visibility&-2:e._visibility|1,A&&(e=wn||Kt,n===null||N||e||ri(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(n=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(n===null){N=n=e;try{if(u=N.stateNode,A)o=u.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=N.stateNode,y=N.memoizedProps.style;var $=y!=null&&y.hasOwnProperty("display")?y.display:null;d.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(ot){Bt(N,N.return,ot)}}}else if(e.tag===6){if(n===null){N=e;try{N.stateNode.nodeValue=A?"":N.memoizedProps}catch(ot){Bt(N,N.return,ot)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,lo(t,n))));break;case 19:Fe(e,t),Ke(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,lo(t,i)));break;case 21:break;default:Fe(e,t),Ke(t)}}function Ke(t){var e=t.flags;if(e&2){try{if(t.tag!==27){t:{for(var n=t.return;n!==null;){if(Mm(n)){var i=n;break t}n=n.return}throw Error(r(160))}switch(i.tag){case 27:var u=i.stateNode,o=no(t);Cr(t,o,u);break;case 5:var d=i.stateNode;i.flags&32&&(Fa(d,""),i.flags&=-33);var y=no(t);Cr(t,y,d);break;case 3:case 4:var A=i.stateNode.containerInfo,N=no(t);ao(t,N,A);break;default:throw Error(r(161))}}}catch(Z){Bt(t,t.return,Z)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ym(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Ym(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function _n(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Bm(t,e.alternate,e),e=e.sibling}function ri(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Qn(4,e,e.return),ri(e);break;case 1:Ce(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Nm(e,e.return,n),ri(e);break;case 26:case 27:case 5:Ce(e,e.return),ri(e);break;case 22:Ce(e,e.return),e.memoizedState===null&&ri(e);break;default:ri(e)}t=t.sibling}}function Xn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,u=t,o=e,d=o.flags;switch(o.tag){case 0:case 11:case 15:Xn(u,o,n),ol(4,o);break;case 1:if(Xn(u,o,n),i=o,u=i.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(N){Bt(i,i.return,N)}if(i=o,u=i.updateQueue,u!==null){var y=i.stateNode;try{var A=u.shared.hiddenCallbacks;if(A!==null)for(u.shared.hiddenCallbacks=null,u=0;u<A.length;u++)jm(A[u],y)}catch(N){Bt(i,i.return,N)}}n&&d&64&&Cm(o),_a(o,o.return);break;case 26:case 27:case 5:Xn(u,o,n),n&&i===null&&d&4&&Dm(o),_a(o,o.return);break;case 12:Xn(u,o,n);break;case 13:Xn(u,o,n),n&&d&4&&Gm(u,o);break;case 22:o.memoizedState===null&&Xn(u,o,n),_a(o,o.return);break;default:Xn(u,o,n)}e=e.sibling}}function ro(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Wi(n))}function uo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Wi(t))}function $n(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fm(t,e,n,i),e=e.sibling}function Fm(t,e,n,i){var u=e.flags;switch(e.tag){case 0:case 11:case 15:$n(t,e,n,i),u&2048&&ol(9,e);break;case 3:$n(t,e,n,i),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Wi(t)));break;case 12:if(u&2048){$n(t,e,n,i),t=e.stateNode;try{var o=e.memoizedProps,d=o.id,y=o.onPostCommit;typeof y=="function"&&y(d,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(A){Bt(e,e.return,A)}}else $n(t,e,n,i);break;case 23:break;case 22:o=e.stateNode,e.memoizedState!==null?o._visibility&4?$n(t,e,n,i):cl(t,e):o._visibility&4?$n(t,e,n,i):(o._visibility|=4,ui(t,e,n,i,(e.subtreeFlags&10256)!==0)),u&2048&&ro(e.alternate,e);break;case 24:$n(t,e,n,i),u&2048&&uo(e.alternate,e);break;default:$n(t,e,n,i)}}function ui(t,e,n,i,u){for(u=u&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var o=t,d=e,y=n,A=i,N=d.flags;switch(d.tag){case 0:case 11:case 15:ui(o,d,y,A,u),ol(8,d);break;case 23:break;case 22:var Z=d.stateNode;d.memoizedState!==null?Z._visibility&4?ui(o,d,y,A,u):cl(o,d):(Z._visibility|=4,ui(o,d,y,A,u)),u&&N&2048&&ro(d.alternate,d);break;case 24:ui(o,d,y,A,u),u&&N&2048&&uo(d.alternate,d);break;default:ui(o,d,y,A,u)}e=e.sibling}}function cl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,u=i.flags;switch(i.tag){case 22:cl(n,i),u&2048&&ro(i.alternate,i);break;case 24:cl(n,i),u&2048&&uo(i.alternate,i);break;default:cl(n,i)}e=e.sibling}}var fl=8192;function si(t){if(t.subtreeFlags&fl)for(t=t.child;t!==null;)Km(t),t=t.sibling}function Km(t){switch(t.tag){case 26:si(t),t.flags&fl&&t.memoizedState!==null&&X1(We,t.memoizedState,t.memoizedProps);break;case 5:si(t);break;case 3:case 4:var e=We;We=Vr(t.stateNode.containerInfo),si(t),We=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=fl,fl=16777216,si(t),fl=e):si(t));break;default:si(t)}}function Vm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function dl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];re=i,Xm(i,t)}Vm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qm(t),t=t.sibling}function Qm(t){switch(t.tag){case 0:case 11:case 15:dl(t),t.flags&2048&&Qn(9,t,t.return);break;case 3:dl(t);break;case 12:dl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,Nr(t)):dl(t);break;default:dl(t)}}function Nr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];re=i,Xm(i,t)}Vm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Qn(8,e,e.return),Nr(e);break;case 22:n=e.stateNode,n._visibility&4&&(n._visibility&=-5,Nr(e));break;default:Nr(e)}t=t.sibling}}function Xm(t,e){for(;re!==null;){var n=re;switch(n.tag){case 0:case 11:case 15:Qn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Wi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,re=i;else t:for(n=t;re!==null;){i=re;var u=i.sibling,o=i.return;if(Hm(i),i===n){re=null;break t}if(u!==null){u.return=o,re=u;break t}re=o}}}function r1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(t,e,n,i){return new r1(t,e,n,i)}function so(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zn(t,e){var n=t.alternate;return n===null?(n=Ve(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&31457280,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function $m(t,e){t.flags&=31457282;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Dr(t,e,n,i,u,o){var d=0;if(i=t,typeof t=="function")so(t)&&(d=1);else if(typeof t=="string")d=V1(t,n,gt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case b:return Ta(n.children,u,o,e);case h:d=8,u|=24;break;case x:return t=Ve(12,n,e,u|2),t.elementType=x,t.lanes=o,t;case G:return t=Ve(13,n,e,u),t.elementType=G,t.lanes=o,t;case U:return t=Ve(19,n,e,u),t.elementType=U,t.lanes=o,t;case S:return Zm(n,u,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case T:case K:d=10;break t;case B:d=9;break t;case z:d=11;break t;case R:d=14;break t;case M:d=16,i=null;break t}d=29,n=Error(r(130,t===null?"null":typeof t,"")),i=null}return e=Ve(d,n,e,u),e.elementType=t,e.type=i,e.lanes=o,e}function Ta(t,e,n,i){return t=Ve(7,t,i,e),t.lanes=n,t}function Zm(t,e,n,i){t=Ve(22,t,i,e),t.elementType=S,t.lanes=n;var u={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var o=u._current;if(o===null)throw Error(r(456));if((u._pendingVisibility&2)===0){var d=Bn(o,2);d!==null&&(u._pendingVisibility|=2,ve(d,o,2))}},attach:function(){var o=u._current;if(o===null)throw Error(r(456));if((u._pendingVisibility&2)!==0){var d=Bn(o,2);d!==null&&(u._pendingVisibility&=-3,ve(d,o,2))}}};return t.stateNode=u,t}function oo(t,e,n){return t=Ve(6,t,null,e),t.lanes=n,t}function co(t,e,n){return e=Ve(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Tn(t){t.flags|=4}function Jm(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Mp(e)){if(e=Ye.current,e!==null&&((Ot&4194176)===Ot?un!==null:(Ot&62914560)!==Ot&&(Ot&536870912)===0||e!==un))throw Ji=hs,md;t.flags|=8192}}function zr(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?pf():536870912,t.lanes|=e,ci|=e)}function ml(t,e){if(!Ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var u=t.child;u!==null;)n|=u.lanes|u.childLanes,i|=u.subtreeFlags&31457280,i|=u.flags&31457280,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)n|=u.lanes|u.childLanes,i|=u.subtreeFlags,i|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function u1(t,e,n){var i=e.pendingProps;switch(ms(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return qt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),En(ae),Ae(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Qi(e)?Tn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ie!==null&&(vo(Ie),Ie=null))),qt(e),null;case 26:return n=e.memoizedState,t===null?(Tn(e),n!==null?(qt(e),Jm(e,n)):(qt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(Tn(e),qt(e),Jm(e,n)):(qt(e),e.flags&=-16777217):(t.memoizedProps!==i&&Tn(e),qt(e),e.flags&=-16777217),null;case 27:xe(e),n=Mt.current;var u=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Tn(e);else{if(!i){if(e.stateNode===null)throw Error(r(166));return qt(e),null}t=gt.current,Qi(e)?fd(e):(t=Ap(u,i,n),e.stateNode=t,Tn(e))}return qt(e),null;case 5:if(xe(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Tn(e);else{if(!i){if(e.stateNode===null)throw Error(r(166));return qt(e),null}if(t=gt.current,Qi(e))fd(e);else{switch(u=Kr(Mt.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof i.is=="string"?u.createElement("select",{is:i.is}):u.createElement("select"),i.multiple?t.multiple=!0:i.size&&(t.size=i.size);break;default:t=typeof i.is=="string"?u.createElement(n,{is:i.is}):u.createElement(n)}}t[pe]=e,t[Ee]=i;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=t;t:switch(me(t,n,i),n){case"button":case"input":case"select":case"textarea":t=!!i.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Tn(e)}}return qt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Tn(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(r(166));if(t=Mt.current,Qi(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,u=be,u!==null)switch(u.tag){case 27:case 5:i=u.memoizedProps}t[pe]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||xp(t.nodeValue,n)),t||ha(e)}else t=Kr(t).createTextNode(i),t[pe]=e,e.stateNode=t}return qt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Qi(e),i!==null&&i.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[pe]=e}else Xi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;qt(e),u=!1}else Ie!==null&&(vo(Ie),Ie=null),u=!0;if(!u)return e.flags&256?(yn(e),e):(yn(e),null)}if(yn(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=i!==null,t=t!==null&&t.memoizedState!==null,n){i=e.child,u=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(u=i.alternate.memoizedState.cachePool.pool);var o=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==u&&(i.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),zr(e,e.updateQueue),qt(e),null;case 4:return Ae(),t===null&&Co(e.stateNode.containerInfo),qt(e),null;case 10:return En(e.type),qt(e),null;case 19:if(F(ne),u=e.memoizedState,u===null)return qt(e),null;if(i=(e.flags&128)!==0,o=u.rendering,o===null)if(i)ml(u,!1);else{if(Vt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=gr(t),o!==null){for(e.flags|=128,ml(u,!1),t=o.updateQueue,e.updateQueue=t,zr(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)$m(n,t),n=n.sibling;return O(ne,ne.current&1|2),e.child}t=t.sibling}u.tail!==null&&ln()>Mr&&(e.flags|=128,i=!0,ml(u,!1),e.lanes=4194304)}else{if(!i)if(t=gr(o),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,zr(e,t),ml(u,!0),u.tail===null&&u.tailMode==="hidden"&&!o.alternate&&!Ct)return qt(e),null}else 2*ln()-u.renderingStartTime>Mr&&n!==536870912&&(e.flags|=128,i=!0,ml(u,!1),e.lanes=4194304);u.isBackwards?(o.sibling=e.child,e.child=o):(t=u.last,t!==null?t.sibling=o:e.child=o,u.last=o)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=ln(),e.sibling=null,t=ne.current,O(ne,i?t&1|2:t&1),e):(qt(e),null);case 22:case 23:return yn(e),ys(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(n&536870912)!==0&&(e.flags&128)===0&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),n=e.updateQueue,n!==null&&zr(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&F(ya),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),En(ae),qt(e),null;case 25:return null}throw Error(r(156,e.tag))}function s1(t,e){switch(ms(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return En(ae),Ae(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return xe(e),null;case 13:if(yn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));Xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return F(ne),null;case 4:return Ae(),null;case 10:return En(e.type),null;case 22:case 23:return yn(e),ys(),t!==null&&F(ya),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return En(ae),null;case 25:return null;default:return null}}function Pm(t,e){switch(ms(e),e.tag){case 3:En(ae),Ae();break;case 26:case 27:case 5:xe(e);break;case 4:Ae();break;case 13:yn(e);break;case 19:F(ne);break;case 10:En(e.type);break;case 22:case 23:yn(e),ys(),t!==null&&F(ya);break;case 24:En(ae)}}var o1={getCacheForType:function(t){var e=he(ae),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},c1=typeof WeakMap=="function"?WeakMap:Map,Yt=0,Ht=null,At=null,Ot=0,kt=0,De=null,An=!1,oi=!1,fo=!1,Rn=0,Vt=0,Jn=0,Aa=0,mo=0,Qe=0,ci=0,pl=null,on=null,po=!1,ho=0,Mr=1/0,Ur=null,Pn=null,Lr=!1,Ra=null,hl=0,go=0,yo=null,gl=0,bo=null;function ze(){if((Yt&2)!==0&&Ot!==0)return Ot&-Ot;if(_.T!==null){var t=ei;return t!==0?t:Ao()}return bf()}function Im(){Qe===0&&(Qe=(Ot&536870912)===0||Ct?mf():536870912);var t=Ye.current;return t!==null&&(t.flags|=32),Qe}function ve(t,e,n){(t===Ht&&kt===2||t.cancelPendingCommit!==null)&&(fi(t,0),jn(t,Ot,Qe,!1)),Mi(t,n),((Yt&2)===0||t!==Ht)&&(t===Ht&&((Yt&2)===0&&(Aa|=n),Vt===4&&jn(t,Ot,Qe,!1)),cn(t))}function Wm(t,e,n){if((Yt&6)!==0)throw Error(r(327));var i=!n&&(e&60)===0&&(e&t.expiredLanes)===0||zi(t,e),u=i?m1(t,e):wo(t,e,!0),o=i;do{if(u===0){oi&&!i&&jn(t,e,0,!1);break}else if(u===6)jn(t,e,0,!An);else{if(n=t.current.alternate,o&&!f1(n)){u=wo(t,e,!1),o=!1;continue}if(u===2){if(o=e,t.errorRecoveryDisabledLanes&o)var d=0;else d=t.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){e=d;t:{var y=t;u=pl;var A=y.current.memoizedState.isDehydrated;if(A&&(fi(y,d).flags|=256),d=wo(y,d,!1),d!==2){if(fo&&!A){y.errorRecoveryDisabledLanes|=o,Aa|=o,u=4;break t}o=on,on=u,o!==null&&vo(o)}u=d}if(o=!1,u!==2)continue}}if(u===1){fi(t,0),jn(t,e,0,!0);break}t:{switch(i=t,u){case 0:case 1:throw Error(r(345));case 4:if((e&4194176)===e){jn(i,e,Qe,!An);break t}break;case 2:on=null;break;case 3:case 5:break;default:throw Error(r(329))}if(i.finishedWork=n,i.finishedLanes=e,(e&62914560)===e&&(o=ho+300-ln(),10<o)){if(jn(i,e,Qe,!An),Zl(i,0)!==0)break t;i.timeoutHandle=Sp(tp.bind(null,i,n,on,Ur,po,e,Qe,Aa,ci,An,2,-0,0),o);break t}tp(i,n,on,Ur,po,e,Qe,Aa,ci,An,0,-0,0)}}break}while(!0);cn(t)}function vo(t){on===null?on=t:on.push.apply(on,t)}function tp(t,e,n,i,u,o,d,y,A,N,Z,I,q){var $=e.subtreeFlags;if(($&8192||($&16785408)===16785408)&&(wl={stylesheets:null,count:0,unsuspend:Q1},Km(e),e=$1(),e!==null)){t.cancelPendingCommit=e(up.bind(null,t,n,i,u,d,y,A,1,I,q)),jn(t,o,d,!N);return}up(t,n,i,u,d,y,A,Z,I,q)}function f1(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var u=n[i],o=u.getSnapshot;u=u.value;try{if(!Oe(o(),u))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jn(t,e,n,i){e&=~mo,e&=~Aa,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var u=e;0<u;){var o=31-je(u),d=1<<o;i[o]=-1,u&=~d}n!==0&&hf(t,n,e)}function Br(){return(Yt&6)===0?(yl(0),!1):!0}function xo(){if(At!==null){if(kt===0)var t=At.return;else t=At,xn=wa=null,Ts(t),Wa=null,Pi=0,t=At;for(;t!==null;)Pm(t.alternate,t),t=t.return;At=null}}function fi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,C1(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),xo(),Ht=t,At=n=Zn(t.current,null),Ot=e,kt=0,De=null,An=!1,oi=zi(t,e),fo=!1,ci=Qe=mo=Aa=Jn=Vt=0,on=pl=null,po=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var u=31-je(i),o=1<<u;e|=t[u],i&=~o}return Rn=e,ur(),n}function ep(t,e){wt=null,_.H=sn,e===Zi?(e=gd(),kt=3):e===md?(e=gd(),kt=4):kt=e===pm?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,De=e,At===null&&(Vt=1,Rr(t,ke(e,t.current)))}function np(){var t=_.H;return _.H=sn,t===null?sn:t}function ap(){var t=_.A;return _.A=o1,t}function Eo(){Vt=4,An||(Ot&4194176)!==Ot&&Ye.current!==null||(oi=!0),(Jn&134217727)===0&&(Aa&134217727)===0||Ht===null||jn(Ht,Ot,Qe,!1)}function wo(t,e,n){var i=Yt;Yt|=2;var u=np(),o=ap();(Ht!==t||Ot!==e)&&(Ur=null,fi(t,e)),e=!1;var d=Vt;t:do try{if(kt!==0&&At!==null){var y=At,A=De;switch(kt){case 8:xo(),d=6;break t;case 3:case 2:case 6:Ye.current===null&&(e=!0);var N=kt;if(kt=0,De=null,di(t,y,A,N),n&&oi){d=0;break t}break;default:N=kt,kt=0,De=null,di(t,y,A,N)}}d1(),d=Vt;break}catch(Z){ep(t,Z)}while(!0);return e&&t.shellSuspendCounter++,xn=wa=null,Yt=i,_.H=u,_.A=o,At===null&&(Ht=null,Ot=0,ur()),d}function d1(){for(;At!==null;)ip(At)}function m1(t,e){var n=Yt;Yt|=2;var i=np(),u=ap();Ht!==t||Ot!==e?(Ur=null,Mr=ln()+500,fi(t,e)):oi=zi(t,e);t:do try{if(kt!==0&&At!==null){e=At;var o=De;e:switch(kt){case 1:kt=0,De=null,di(t,e,o,1);break;case 2:if(pd(o)){kt=0,De=null,lp(e);break}e=function(){kt===2&&Ht===t&&(kt=7),cn(t)},o.then(e,e);break t;case 3:kt=7;break t;case 4:kt=5;break t;case 7:pd(o)?(kt=0,De=null,lp(e)):(kt=0,De=null,di(t,e,o,7));break;case 5:var d=null;switch(At.tag){case 26:d=At.memoizedState;case 5:case 27:var y=At;if(!d||Mp(d)){kt=0,De=null;var A=y.sibling;if(A!==null)At=A;else{var N=y.return;N!==null?(At=N,Hr(N)):At=null}break e}}kt=0,De=null,di(t,e,o,5);break;case 6:kt=0,De=null,di(t,e,o,6);break;case 8:xo(),Vt=6;break t;default:throw Error(r(462))}}p1();break}catch(Z){ep(t,Z)}while(!0);return xn=wa=null,_.H=i,_.A=u,Yt=n,At!==null?0:(Ht=null,Ot=0,ur(),Vt)}function p1(){for(;At!==null&&!Vl();)ip(At)}function ip(t){var e=Am(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,e===null?Hr(t):At=e}function lp(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=xm(n,e,e.pendingProps,e.type,void 0,Ot);break;case 11:e=xm(n,e,e.pendingProps,e.type.render,e.ref,Ot);break;case 5:Ts(e);default:Pm(n,e),e=At=$m(e,Rn),e=Am(n,e,Rn)}t.memoizedProps=t.pendingProps,e===null?Hr(t):At=e}function di(t,e,n,i){xn=wa=null,Ts(e),Wa=null,Pi=0;var u=e.return;try{if(n1(t,u,e,n,Ot)){Vt=1,Rr(t,ke(n,t.current)),At=null;return}}catch(o){if(u!==null)throw At=u,o;Vt=1,Rr(t,ke(n,t.current)),At=null;return}e.flags&32768?(Ct||i===1?t=!0:oi||(Ot&536870912)!==0?t=!1:(An=t=!0,(i===2||i===3||i===6)&&(i=Ye.current,i!==null&&i.tag===13&&(i.flags|=16384))),rp(e,t)):Hr(e)}function Hr(t){var e=t;do{if((e.flags&32768)!==0){rp(e,An);return}t=e.return;var n=u1(e.alternate,e,Rn);if(n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Vt===0&&(Vt=5)}function rp(t,e){do{var n=s1(t.alternate,t);if(n!==null){n.flags&=32767,At=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){At=t;return}At=t=n}while(t!==null);Vt=6,At=null}function up(t,e,n,i,u,o,d,y,A,N){var Z=_.T,I=at.p;try{at.p=2,_.T=null,h1(t,e,n,i,I,u,o,d,y,A,N)}finally{_.T=Z,at.p=I}}function h1(t,e,n,i,u,o,d,y){do mi();while(Ra!==null);if((Yt&6)!==0)throw Error(r(327));var A=t.finishedWork;if(i=t.finishedLanes,A===null)return null;if(t.finishedWork=null,t.finishedLanes=0,A===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var N=A.lanes|A.childLanes;if(N|=cs,Xg(t,i,N,o,d,y),t===Ht&&(At=Ht=null,Ot=0),(A.subtreeFlags&10256)===0&&(A.flags&10256)===0||Lr||(Lr=!0,go=N,yo=n,v1(Ql,function(){return mi(),null})),n=(A.flags&15990)!==0,(A.subtreeFlags&15990)!==0||n?(n=_.T,_.T=null,o=at.p,at.p=2,d=Yt,Yt|=4,i1(t,A),qm(A,t),ky(Mo,t.containerInfo),Jr=!!zo,Mo=zo=null,t.current=A,Bm(t,A.alternate,A),Bg(),Yt=d,at.p=o,_.T=n):t.current=A,Lr?(Lr=!1,Ra=t,hl=i):sp(t,N),N=t.pendingLanes,N===0&&(Pn=null),Yg(A.stateNode),cn(t),e!==null)for(u=t.onRecoverableError,A=0;A<e.length;A++)N=e[A],u(N.value,{componentStack:N.stack});return(hl&3)!==0&&mi(),N=t.pendingLanes,(i&4194218)!==0&&(N&42)!==0?t===bo?gl++:(gl=0,bo=t):gl=0,yl(0),null}function sp(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Wi(e)))}function mi(){if(Ra!==null){var t=Ra,e=go;go=0;var n=yf(hl),i=_.T,u=at.p;try{if(at.p=32>n?32:n,_.T=null,Ra===null)var o=!1;else{n=yo,yo=null;var d=Ra,y=hl;if(Ra=null,hl=0,(Yt&6)!==0)throw Error(r(331));var A=Yt;if(Yt|=4,Qm(d.current),Fm(d,d.current,y,n),Yt=A,yl(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Di,d)}catch{}o=!0}return o}finally{at.p=u,_.T=i,sp(t,e)}}return!1}function op(t,e,n){e=ke(n,e),e=ks(t.stateNode,e,2),t=Vn(t,e,2),t!==null&&(Mi(t,2),cn(t))}function Bt(t,e,n){if(t.tag===3)op(t,t,n);else for(;e!==null;){if(e.tag===3){op(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pn===null||!Pn.has(i))){t=ke(n,t),n=dm(2),i=Vn(e,n,2),i!==null&&(mm(n,i,e,t),Mi(i,2),cn(i));break}}e=e.return}}function So(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new c1;var u=new Set;i.set(e,u)}else u=i.get(e),u===void 0&&(u=new Set,i.set(e,u));u.has(n)||(fo=!0,u.add(n),t=g1.bind(null,t,e,n),e.then(t,t))}function g1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Ht===t&&(Ot&n)===n&&(Vt===4||Vt===3&&(Ot&62914560)===Ot&&300>ln()-ho?(Yt&2)===0&&fi(t,0):mo|=n,ci===Ot&&(ci=0)),cn(t)}function cp(t,e){e===0&&(e=pf()),t=Bn(t,e),t!==null&&(Mi(t,e),cn(t))}function y1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cp(t,n)}function b1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,u=t.memoizedState;u!==null&&(n=u.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(r(314))}i!==null&&i.delete(e),cp(t,n)}function v1(t,e){return Ba(t,e)}var kr=null,pi=null,_o=!1,Gr=!1,To=!1,ja=0;function cn(t){t!==pi&&t.next===null&&(pi===null?kr=pi=t:pi=pi.next=t),Gr=!0,_o||(_o=!0,E1(x1))}function yl(t,e){if(!To&&Gr){To=!0;do for(var n=!1,i=kr;i!==null;){if(t!==0){var u=i.pendingLanes;if(u===0)var o=0;else{var d=i.suspendedLanes,y=i.pingedLanes;o=(1<<31-je(42|t)+1)-1,o&=u&~(d&~y),o=o&201326677?o&201326677|1:o?o|2:0}o!==0&&(n=!0,mp(i,o))}else o=Ot,o=Zl(i,i===Ht?o:0),(o&3)===0||zi(i,o)||(n=!0,mp(i,o));i=i.next}while(n);To=!1}}function x1(){Gr=_o=!1;var t=0;ja!==0&&(O1()&&(t=ja),ja=0);for(var e=ln(),n=null,i=kr;i!==null;){var u=i.next,o=fp(i,e);o===0?(i.next=null,n===null?kr=u:n.next=u,u===null&&(pi=n)):(n=i,(t!==0||(o&3)!==0)&&(Gr=!0)),i=u}yl(t)}function fp(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,u=t.expirationTimes,o=t.pendingLanes&-62914561;0<o;){var d=31-je(o),y=1<<d,A=u[d];A===-1?((y&n)===0||(y&i)!==0)&&(u[d]=Qg(y,e)):A<=e&&(t.expiredLanes|=y),o&=~y}if(e=Ht,n=Ot,n=Zl(t,t===e?n:0),i=t.callbackNode,n===0||t===e&&kt===2||t.cancelPendingCommit!==null)return i!==null&&i!==null&&ra(i),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||zi(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&ra(i),yf(n)){case 2:case 8:n=ff;break;case 32:n=Ql;break;case 268435456:n=df;break;default:n=Ql}return i=dp.bind(null,t),n=Ba(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&ra(i),t.callbackPriority=2,t.callbackNode=null,2}function dp(t,e){var n=t.callbackNode;if(mi()&&t.callbackNode!==n)return null;var i=Ot;return i=Zl(t,t===Ht?i:0),i===0?null:(Wm(t,i,e),fp(t,ln()),t.callbackNode!=null&&t.callbackNode===n?dp.bind(null,t):null)}function mp(t,e){if(mi())return null;Wm(t,e,!0)}function E1(t){N1(function(){(Yt&6)!==0?Ba(cf,t):t()})}function Ao(){return ja===0&&(ja=mf()),ja}function pp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:tr(""+t)}function hp(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function w1(t,e,n,i,u){if(e==="submit"&&n&&n.stateNode===u){var o=pp((u[Ee]||null).action),d=i.submitter;d&&(e=(e=d[Ee]||null)?pp(e.formAction):d.getAttribute("formAction"),e!==null&&(o=e,d=null));var y=new ir("action","action",null,i,u);t.push({event:y,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ja!==0){var A=d?hp(u,d):new FormData(u);Ms(n,{pending:!0,data:A,method:u.method,action:o},null,A)}}else typeof o=="function"&&(y.preventDefault(),A=d?hp(u,d):new FormData(u),Ms(n,{pending:!0,data:A,method:u.method,action:o},o,A))},currentTarget:u}]})}}for(var Ro=0;Ro<ud.length;Ro++){var jo=ud[Ro],S1=jo.toLowerCase(),_1=jo[0].toUpperCase()+jo.slice(1);Pe(S1,"on"+_1)}Pe(nd,"onAnimationEnd"),Pe(ad,"onAnimationIteration"),Pe(id,"onAnimationStart"),Pe("dblclick","onDoubleClick"),Pe("focusin","onFocus"),Pe("focusout","onBlur"),Pe(qy,"onTransitionRun"),Pe(Yy,"onTransitionStart"),Pe(Fy,"onTransitionCancel"),Pe(ld,"onTransitionEnd"),qa("onMouseEnter",["mouseout","mouseover"]),qa("onMouseLeave",["mouseout","mouseover"]),qa("onPointerEnter",["pointerout","pointerover"]),qa("onPointerLeave",["pointerout","pointerover"]),oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bl));function gp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],u=i.event;i=i.listeners;t:{var o=void 0;if(e)for(var d=i.length-1;0<=d;d--){var y=i[d],A=y.instance,N=y.currentTarget;if(y=y.listener,A!==o&&u.isPropagationStopped())break t;o=y,u.currentTarget=N;try{o(u)}catch(Z){Ar(Z)}u.currentTarget=null,o=A}else for(d=0;d<i.length;d++){if(y=i[d],A=y.instance,N=y.currentTarget,y=y.listener,A!==o&&u.isPropagationStopped())break t;o=y,u.currentTarget=N;try{o(u)}catch(Z){Ar(Z)}u.currentTarget=null,o=A}}}}function Rt(t,e){var n=e[Fu];n===void 0&&(n=e[Fu]=new Set);var i=t+"__bubble";n.has(i)||(yp(e,t,2,!1),n.add(i))}function Oo(t,e,n){var i=0;e&&(i|=4),yp(n,t,i,e)}var qr="_reactListening"+Math.random().toString(36).slice(2);function Co(t){if(!t[qr]){t[qr]=!0,xf.forEach(function(n){n!=="selectionchange"&&(T1.has(n)||Oo(n,!1,t),Oo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qr]||(e[qr]=!0,Oo("selectionchange",!1,e))}}function yp(t,e,n,i){switch(Gp(e)){case 2:var u=P1;break;case 8:u=I1;break;default:u=Fo}n=u.bind(null,e,n,t),u=void 0,!Pu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),i?u!==void 0?t.addEventListener(e,n,{capture:!0,passive:u}):t.addEventListener(e,n,!0):u!==void 0?t.addEventListener(e,n,{passive:u}):t.addEventListener(e,n,!1)}function No(t,e,n,i,u){var o=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var y=i.stateNode.containerInfo;if(y===u||y.nodeType===8&&y.parentNode===u)break;if(d===4)for(d=i.return;d!==null;){var A=d.tag;if((A===3||A===4)&&(A=d.stateNode.containerInfo,A===u||A.nodeType===8&&A.parentNode===u))return;d=d.return}for(;y!==null;){if(d=sa(y),d===null)return;if(A=d.tag,A===5||A===6||A===26||A===27){i=o=d;continue t}y=y.parentNode}}i=i.return}Df(function(){var N=o,Z=Zu(n),I=[];t:{var q=rd.get(t);if(q!==void 0){var $=ir,ot=t;switch(t){case"keypress":if(nr(n)===0)break t;case"keydown":case"keyup":$=by;break;case"focusin":ot="focus",$=es;break;case"focusout":ot="blur",$=es;break;case"beforeblur":case"afterblur":$=es;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=Uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Ey;break;case nd:case ad:case id:$=oy;break;case ld:$=Sy;break;case"scroll":case"scrollend":$=iy;break;case"wheel":$=Ty;break;case"copy":case"cut":case"paste":$=fy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Bf;break;case"toggle":case"beforetoggle":$=Ry}var yt=(e&4)!==0,Qt=!yt&&(t==="scroll"||t==="scrollend"),L=yt?q!==null?q+"Capture":null:q;yt=[];for(var C=N,H;C!==null;){var P=C;if(H=P.stateNode,P=P.tag,P!==5&&P!==26&&P!==27||H===null||L===null||(P=Bi(C,L),P!=null&&yt.push(vl(C,P,H))),Qt)break;C=C.return}0<yt.length&&(q=new $(q,ot,null,n,Z),I.push({event:q,listeners:yt}))}}if((e&7)===0){t:{if(q=t==="mouseover"||t==="pointerover",$=t==="mouseout"||t==="pointerout",q&&n!==$u&&(ot=n.relatedTarget||n.fromElement)&&(sa(ot)||ot[Ha]))break t;if(($||q)&&(q=Z.window===Z?Z:(q=Z.ownerDocument)?q.defaultView||q.parentWindow:window,$?(ot=n.relatedTarget||n.toElement,$=N,ot=ot?sa(ot):null,ot!==null&&(Qt=rt(ot),yt=ot.tag,ot!==Qt||yt!==5&&yt!==27&&yt!==6)&&(ot=null)):($=null,ot=N),$!==ot)){if(yt=Uf,P="onMouseLeave",L="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&(yt=Bf,P="onPointerLeave",L="onPointerEnter",C="pointer"),Qt=$==null?q:Li($),H=ot==null?q:Li(ot),q=new yt(P,C+"leave",$,n,Z),q.target=Qt,q.relatedTarget=H,P=null,sa(Z)===N&&(yt=new yt(L,C+"enter",ot,n,Z),yt.target=H,yt.relatedTarget=Qt,P=yt),Qt=P,$&&ot)e:{for(yt=$,L=ot,C=0,H=yt;H;H=hi(H))C++;for(H=0,P=L;P;P=hi(P))H++;for(;0<C-H;)yt=hi(yt),C--;for(;0<H-C;)L=hi(L),H--;for(;C--;){if(yt===L||L!==null&&yt===L.alternate)break e;yt=hi(yt),L=hi(L)}yt=null}else yt=null;$!==null&&bp(I,q,$,yt,!1),ot!==null&&Qt!==null&&bp(I,Qt,ot,yt,!0)}}t:{if(q=N?Li(N):window,$=q.nodeName&&q.nodeName.toLowerCase(),$==="select"||$==="input"&&q.type==="file")var ut=Vf;else if(Ff(q))if(Qf)ut=By;else{ut=Uy;var _t=My}else $=q.nodeName,!$||$.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?N&&Xu(N.elementType)&&(ut=Vf):ut=Ly;if(ut&&(ut=ut(t,N))){Kf(I,ut,n,Z);break t}_t&&_t(t,q,N),t==="focusout"&&N&&q.type==="number"&&N.memoizedProps.value!=null&&Qu(q,"number",q.value)}switch(_t=N?Li(N):window,t){case"focusin":(Ff(_t)||_t.contentEditable==="true")&&(Xa=_t,us=N,Vi=null);break;case"focusout":Vi=us=Xa=null;break;case"mousedown":ss=!0;break;case"contextmenu":case"mouseup":case"dragend":ss=!1,td(I,n,Z);break;case"selectionchange":if(Gy)break;case"keydown":case"keyup":td(I,n,Z)}var ct;if(as)t:{switch(t){case"compositionstart":var dt="onCompositionStart";break t;case"compositionend":dt="onCompositionEnd";break t;case"compositionupdate":dt="onCompositionUpdate";break t}dt=void 0}else Qa?qf(t,n)&&(dt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(dt="onCompositionStart");dt&&(Hf&&n.locale!=="ko"&&(Qa||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&Qa&&(ct=zf()):(Ln=Z,Iu="value"in Ln?Ln.value:Ln.textContent,Qa=!0)),_t=Yr(N,dt),0<_t.length&&(dt=new Lf(dt,t,null,n,Z),I.push({event:dt,listeners:_t}),ct?dt.data=ct:(ct=Yf(n),ct!==null&&(dt.data=ct)))),(ct=Oy?Cy(t,n):Ny(t,n))&&(dt=Yr(N,"onBeforeInput"),0<dt.length&&(_t=new Lf("onBeforeInput","beforeinput",null,n,Z),I.push({event:_t,listeners:dt}),_t.data=ct)),w1(I,t,N,n,Z)}gp(I,e)})}function vl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yr(t,e){for(var n=e+"Capture",i=[];t!==null;){var u=t,o=u.stateNode;u=u.tag,u!==5&&u!==26&&u!==27||o===null||(u=Bi(t,n),u!=null&&i.unshift(vl(t,u,o)),u=Bi(t,e),u!=null&&i.push(vl(t,u,o))),t=t.return}return i}function hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function bp(t,e,n,i,u){for(var o=e._reactName,d=[];n!==null&&n!==i;){var y=n,A=y.alternate,N=y.stateNode;if(y=y.tag,A!==null&&A===i)break;y!==5&&y!==26&&y!==27||N===null||(A=N,u?(N=Bi(n,o),N!=null&&d.unshift(vl(n,N,A))):u||(N=Bi(n,o),N!=null&&d.push(vl(n,N,A)))),n=n.return}d.length!==0&&t.push({event:e,listeners:d})}var A1=/\r\n?/g,R1=/\u0000|\uFFFD/g;function vp(t){return(typeof t=="string"?t:""+t).replace(A1,`
`).replace(R1,"")}function xp(t,e){return e=vp(e),vp(t)===e}function Fr(){}function Lt(t,e,n,i,u,o){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Fa(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Fa(t,""+i);break;case"className":Pl(t,"class",i);break;case"tabIndex":Pl(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Pl(t,n,i);break;case"style":Cf(t,i,o);break;case"data":if(e!=="object"){Pl(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=tr(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(e!=="input"&&Lt(t,e,"name",u.name,u,null),Lt(t,e,"formEncType",u.formEncType,u,null),Lt(t,e,"formMethod",u.formMethod,u,null),Lt(t,e,"formTarget",u.formTarget,u,null)):(Lt(t,e,"encType",u.encType,u,null),Lt(t,e,"method",u.method,u,null),Lt(t,e,"target",u.target,u,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=tr(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Fr);break;case"onScroll":i!=null&&Rt("scroll",t);break;case"onScrollEnd":i!=null&&Rt("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(r(61));if(n=i.__html,n!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=tr(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":Rt("beforetoggle",t),Rt("toggle",t),Jl(t,"popover",i);break;case"xlinkActuate":pn(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":pn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":pn(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":pn(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":pn(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":pn(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":pn(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":pn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":pn(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Jl(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ny.get(n)||n,Jl(t,n,i))}}function Do(t,e,n,i,u,o){switch(n){case"style":Cf(t,i,o);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(r(61));if(n=i.__html,n!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=n}}break;case"children":typeof i=="string"?Fa(t,i):(typeof i=="number"||typeof i=="bigint")&&Fa(t,""+i);break;case"onScroll":i!=null&&Rt("scroll",t);break;case"onScrollEnd":i!=null&&Rt("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Fr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ef.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(u=n.endsWith("Capture"),e=n.slice(2,u?n.length-7:void 0),o=t[Ee]||null,o=o!=null?o[n]:null,typeof o=="function"&&t.removeEventListener(e,o,u),typeof i=="function")){typeof o!="function"&&o!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,u);break t}n in t?t[n]=i:i===!0?t.setAttribute(n,""):Jl(t,n,i)}}}function me(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Rt("error",t),Rt("load",t);var i=!1,u=!1,o;for(o in n)if(n.hasOwnProperty(o)){var d=n[o];if(d!=null)switch(o){case"src":i=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Lt(t,e,o,d,n,null)}}u&&Lt(t,e,"srcSet",n.srcSet,n,null),i&&Lt(t,e,"src",n.src,n,null);return;case"input":Rt("invalid",t);var y=o=d=u=null,A=null,N=null;for(i in n)if(n.hasOwnProperty(i)){var Z=n[i];if(Z!=null)switch(i){case"name":u=Z;break;case"type":d=Z;break;case"checked":A=Z;break;case"defaultChecked":N=Z;break;case"value":o=Z;break;case"defaultValue":y=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,e));break;default:Lt(t,e,i,Z,n,null)}}Af(t,o,y,A,N,d,u,!1),Il(t);return;case"select":Rt("invalid",t),i=d=o=null;for(u in n)if(n.hasOwnProperty(u)&&(y=n[u],y!=null))switch(u){case"value":o=y;break;case"defaultValue":d=y;break;case"multiple":i=y;default:Lt(t,e,u,y,n,null)}e=o,n=d,t.multiple=!!i,e!=null?Ya(t,!!i,e,!1):n!=null&&Ya(t,!!i,n,!0);return;case"textarea":Rt("invalid",t),o=u=i=null;for(d in n)if(n.hasOwnProperty(d)&&(y=n[d],y!=null))switch(d){case"value":i=y;break;case"defaultValue":u=y;break;case"children":o=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(r(91));break;default:Lt(t,e,d,y,n,null)}jf(t,i,u,o),Il(t);return;case"option":for(A in n)if(n.hasOwnProperty(A)&&(i=n[A],i!=null))switch(A){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Lt(t,e,A,i,n,null)}return;case"dialog":Rt("cancel",t),Rt("close",t);break;case"iframe":case"object":Rt("load",t);break;case"video":case"audio":for(i=0;i<bl.length;i++)Rt(bl[i],t);break;case"image":Rt("error",t),Rt("load",t);break;case"details":Rt("toggle",t);break;case"embed":case"source":case"link":Rt("error",t),Rt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in n)if(n.hasOwnProperty(N)&&(i=n[N],i!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Lt(t,e,N,i,n,null)}return;default:if(Xu(e)){for(Z in n)n.hasOwnProperty(Z)&&(i=n[Z],i!==void 0&&Do(t,e,Z,i,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(i=n[y],i!=null&&Lt(t,e,y,i,n,null))}function j1(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,o=null,d=null,y=null,A=null,N=null,Z=null;for($ in n){var I=n[$];if(n.hasOwnProperty($)&&I!=null)switch($){case"checked":break;case"value":break;case"defaultValue":A=I;default:i.hasOwnProperty($)||Lt(t,e,$,null,i,I)}}for(var q in i){var $=i[q];if(I=n[q],i.hasOwnProperty(q)&&($!=null||I!=null))switch(q){case"type":o=$;break;case"name":u=$;break;case"checked":N=$;break;case"defaultChecked":Z=$;break;case"value":d=$;break;case"defaultValue":y=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,e));break;default:$!==I&&Lt(t,e,q,$,i,I)}}Vu(t,d,y,A,N,Z,o,u);return;case"select":$=d=y=q=null;for(o in n)if(A=n[o],n.hasOwnProperty(o)&&A!=null)switch(o){case"value":break;case"multiple":$=A;default:i.hasOwnProperty(o)||Lt(t,e,o,null,i,A)}for(u in i)if(o=i[u],A=n[u],i.hasOwnProperty(u)&&(o!=null||A!=null))switch(u){case"value":q=o;break;case"defaultValue":y=o;break;case"multiple":d=o;default:o!==A&&Lt(t,e,u,o,i,A)}e=y,n=d,i=$,q!=null?Ya(t,!!n,q,!1):!!i!=!!n&&(e!=null?Ya(t,!!n,e,!0):Ya(t,!!n,n?[]:"",!1));return;case"textarea":$=q=null;for(y in n)if(u=n[y],n.hasOwnProperty(y)&&u!=null&&!i.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Lt(t,e,y,null,i,u)}for(d in i)if(u=i[d],o=n[d],i.hasOwnProperty(d)&&(u!=null||o!=null))switch(d){case"value":q=u;break;case"defaultValue":$=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==o&&Lt(t,e,d,u,i,o)}Rf(t,q,$);return;case"option":for(var ot in n)if(q=n[ot],n.hasOwnProperty(ot)&&q!=null&&!i.hasOwnProperty(ot))switch(ot){case"selected":t.selected=!1;break;default:Lt(t,e,ot,null,i,q)}for(A in i)if(q=i[A],$=n[A],i.hasOwnProperty(A)&&q!==$&&(q!=null||$!=null))switch(A){case"selected":t.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Lt(t,e,A,q,i,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var yt in n)q=n[yt],n.hasOwnProperty(yt)&&q!=null&&!i.hasOwnProperty(yt)&&Lt(t,e,yt,null,i,q);for(N in i)if(q=i[N],$=n[N],i.hasOwnProperty(N)&&q!==$&&(q!=null||$!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,e));break;default:Lt(t,e,N,q,i,$)}return;default:if(Xu(e)){for(var Qt in n)q=n[Qt],n.hasOwnProperty(Qt)&&q!==void 0&&!i.hasOwnProperty(Qt)&&Do(t,e,Qt,void 0,i,q);for(Z in i)q=i[Z],$=n[Z],!i.hasOwnProperty(Z)||q===$||q===void 0&&$===void 0||Do(t,e,Z,q,i,$);return}}for(var L in n)q=n[L],n.hasOwnProperty(L)&&q!=null&&!i.hasOwnProperty(L)&&Lt(t,e,L,null,i,q);for(I in i)q=i[I],$=n[I],!i.hasOwnProperty(I)||q===$||q==null&&$==null||Lt(t,e,I,q,i,$)}var zo=null,Mo=null;function Kr(t){return t.nodeType===9?t:t.ownerDocument}function Ep(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Uo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lo=null;function O1(){var t=window.event;return t&&t.type==="popstate"?t===Lo?!1:(Lo=t,!0):(Lo=null,!1)}var Sp=typeof setTimeout=="function"?setTimeout:void 0,C1=typeof clearTimeout=="function"?clearTimeout:void 0,_p=typeof Promise=="function"?Promise:void 0,N1=typeof queueMicrotask=="function"?queueMicrotask:typeof _p<"u"?function(t){return _p.resolve(null).then(t).catch(D1)}:Sp;function D1(t){setTimeout(function(){throw t})}function Bo(t,e){var n=e,i=0;do{var u=n.nextSibling;if(t.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(i===0){t.removeChild(u),Rl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=u}while(n);Rl(e)}function Ho(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ho(n),Ku(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function z1(t,e,n,i){for(;t.nodeType===1;){var u=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Ui])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(o=t.getAttribute("rel"),o==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(o!==u.rel||t.getAttribute("href")!==(u.href==null?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(o=t.getAttribute("src"),(o!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&o&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var o=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===o)return t}else return t;if(t=tn(t.nextSibling),t===null)break}return null}function M1(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=tn(t.nextSibling),t===null))return null;return t}function tn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function Tp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function Ap(t,e,n){switch(e=Kr(n),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var Xe=new Map,Rp=new Set;function Vr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var On=at.d;at.d={f:U1,r:L1,D:B1,C:H1,L:k1,m:G1,X:Y1,S:q1,M:F1};function U1(){var t=On.f(),e=Br();return t||e}function L1(t){var e=ka(t);e!==null&&e.tag===5&&e.type==="form"?tm(e):On.r(t)}var gi=typeof document>"u"?null:document;function jp(t,e,n){var i=gi;if(i&&typeof e=="string"&&e){var u=Be(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof n=="string"&&(u+='[crossorigin="'+n+'"]'),Rp.has(u)||(Rp.add(u),t={rel:t,crossOrigin:n,href:e},i.querySelector(u)===null&&(e=i.createElement("link"),me(e,"link",t),ie(e),i.head.appendChild(e)))}}function B1(t){On.D(t),jp("dns-prefetch",t,null)}function H1(t,e){On.C(t,e),jp("preconnect",t,e)}function k1(t,e,n){On.L(t,e,n);var i=gi;if(i&&t&&e){var u='link[rel="preload"][as="'+Be(e)+'"]';e==="image"&&n&&n.imageSrcSet?(u+='[imagesrcset="'+Be(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(u+='[imagesizes="'+Be(n.imageSizes)+'"]')):u+='[href="'+Be(t)+'"]';var o=u;switch(e){case"style":o=yi(t);break;case"script":o=bi(t)}Xe.has(o)||(t=tt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Xe.set(o,t),i.querySelector(u)!==null||e==="style"&&i.querySelector(xl(o))||e==="script"&&i.querySelector(El(o))||(e=i.createElement("link"),me(e,"link",t),ie(e),i.head.appendChild(e)))}}function G1(t,e){On.m(t,e);var n=gi;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+Be(i)+'"][href="'+Be(t)+'"]',o=u;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=bi(t)}if(!Xe.has(o)&&(t=tt({rel:"modulepreload",href:t},e),Xe.set(o,t),n.querySelector(u)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(El(o)))return}i=n.createElement("link"),me(i,"link",t),ie(i),n.head.appendChild(i)}}}function q1(t,e,n){On.S(t,e,n);var i=gi;if(i&&t){var u=Ga(i).hoistableStyles,o=yi(t);e=e||"default";var d=u.get(o);if(!d){var y={loading:0,preload:null};if(d=i.querySelector(xl(o)))y.loading=5;else{t=tt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Xe.get(o))&&ko(t,n);var A=d=i.createElement("link");ie(A),me(A,"link",t),A._p=new Promise(function(N,Z){A.onload=N,A.onerror=Z}),A.addEventListener("load",function(){y.loading|=1}),A.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Qr(d,e,i)}d={type:"stylesheet",instance:d,count:1,state:y},u.set(o,d)}}}function Y1(t,e){On.X(t,e);var n=gi;if(n&&t){var i=Ga(n).hoistableScripts,u=bi(t),o=i.get(u);o||(o=n.querySelector(El(u)),o||(t=tt({src:t,async:!0},e),(e=Xe.get(u))&&Go(t,e),o=n.createElement("script"),ie(o),me(o,"link",t),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(u,o))}}function F1(t,e){On.M(t,e);var n=gi;if(n&&t){var i=Ga(n).hoistableScripts,u=bi(t),o=i.get(u);o||(o=n.querySelector(El(u)),o||(t=tt({src:t,async:!0,type:"module"},e),(e=Xe.get(u))&&Go(t,e),o=n.createElement("script"),ie(o),me(o,"link",t),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(u,o))}}function Op(t,e,n,i){var u=(u=Mt.current)?Vr(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=yi(n.href),n=Ga(u).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=yi(n.href);var o=Ga(u).hoistableStyles,d=o.get(t);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(t,d),(o=u.querySelector(xl(t)))&&!o._p&&(d.instance=o,d.state.loading=5),Xe.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Xe.set(t,n),o||K1(u,t,n,d.state))),e&&i===null)throw Error(r(528,""));return d}if(e&&i!==null)throw Error(r(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=bi(n),n=Ga(u).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function yi(t){return'href="'+Be(t)+'"'}function xl(t){return'link[rel="stylesheet"]['+t+"]"}function Cp(t){return tt({},t,{"data-precedence":t.precedence,precedence:null})}function K1(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),me(e,"link",n),ie(e),t.head.appendChild(e))}function bi(t){return'[src="'+Be(t)+'"]'}function El(t){return"script[async]"+t}function Np(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Be(n.href)+'"]');if(i)return e.instance=i,ie(i),i;var u=tt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),ie(i),me(i,"style",u),Qr(i,n.precedence,t),e.instance=i;case"stylesheet":u=yi(n.href);var o=t.querySelector(xl(u));if(o)return e.state.loading|=4,e.instance=o,ie(o),o;i=Cp(n),(u=Xe.get(u))&&ko(i,u),o=(t.ownerDocument||t).createElement("link"),ie(o);var d=o;return d._p=new Promise(function(y,A){d.onload=y,d.onerror=A}),me(o,"link",i),e.state.loading|=4,Qr(o,n.precedence,t),e.instance=o;case"script":return o=bi(n.src),(u=t.querySelector(El(o)))?(e.instance=u,ie(u),u):(i=n,(u=Xe.get(o))&&(i=tt({},n),Go(i,u)),t=t.ownerDocument||t,u=t.createElement("script"),ie(u),me(u,"link",i),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,Qr(i,n.precedence,t));return e.instance}function Qr(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=i.length?i[i.length-1]:null,o=u,d=0;d<i.length;d++){var y=i[d];if(y.dataset.precedence===e)o=y;else if(o!==u)break}o?o.parentNode.insertBefore(t,o.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function ko(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Go(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Xr=null;function Dp(t,e,n){if(Xr===null){var i=new Map,u=Xr=new Map;u.set(n,i)}else u=Xr,i=u.get(n),i||(i=new Map,u.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),u=0;u<n.length;u++){var o=n[u];if(!(o[Ui]||o[pe]||t==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var d=o.getAttribute(e)||"";d=t+d;var y=i.get(d);y?y.push(o):i.set(d,[o])}}return i}function zp(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function V1(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Mp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var wl=null;function Q1(){}function X1(t,e,n){if(wl===null)throw Error(r(475));var i=wl;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=yi(n.href),o=t.querySelector(xl(u));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(i.count++,i=$r.bind(i),t.then(i,i)),e.state.loading|=4,e.instance=o,ie(o);return}o=t.ownerDocument||t,n=Cp(n),(u=Xe.get(u))&&ko(n,u),o=o.createElement("link"),ie(o);var d=o;d._p=new Promise(function(y,A){d.onload=y,d.onerror=A}),me(o,"link",n),e.instance=o}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(i.count++,e=$r.bind(i),t.addEventListener("load",e),t.addEventListener("error",e))}}function $1(){if(wl===null)throw Error(r(475));var t=wl;return t.stylesheets&&t.count===0&&qo(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&qo(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function $r(){if(this.count--,this.count===0){if(this.stylesheets)qo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Zr=null;function qo(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Zr=new Map,e.forEach(Z1,t),Zr=null,$r.call(t))}function Z1(t,e){if(!(e.state.loading&4)){var n=Zr.get(t);if(n)var i=n.get(null);else{n=new Map,Zr.set(t,n);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<u.length;o++){var d=u[o];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),i=d)}i&&n.set(null,i)}u=e.instance,d=u.getAttribute("data-precedence"),o=n.get(d)||i,o===i&&n.set(null,u),n.set(d,u),this.count++,i=$r.bind(this),u.addEventListener("load",i),u.addEventListener("error",i),o?o.parentNode.insertBefore(u,o.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var Sl={$$typeof:K,Provider:null,Consumer:null,_currentValue:ht,_currentValue2:ht,_threadCount:0};function J1(t,e,n,i,u,o,d,y){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yu(0),this.hiddenUpdates=Yu(null),this.identifierPrefix=i,this.onUncaughtError=u,this.onCaughtError=o,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function Up(t,e,n,i,u,o,d,y,A,N,Z,I){return t=new J1(t,e,n,d,y,A,N,I),e=1,o===!0&&(e|=24),o=Ve(3,null,null,e),t.current=o,o.stateNode=t,e=bs(),e.refCount++,t.pooledCache=e,e.refCount++,o.memoizedState={element:i,isDehydrated:n,cache:e},Is(o),t}function Lp(t){return t?(t=Ja,t):Ja}function Bp(t,e,n,i,u,o){u=Lp(u),i.context===null?i.context=u:i.pendingContext=u,i=Kn(e),i.payload={element:n},o=o===void 0?null:o,o!==null&&(i.callback=o),n=Vn(t,i,e),n!==null&&(ve(n,t,e),rl(n,t,e))}function Hp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yo(t,e){Hp(t,e),(t=t.alternate)&&Hp(t,e)}function kp(t){if(t.tag===13){var e=Bn(t,67108864);e!==null&&ve(e,t,67108864),Yo(t,67108864)}}var Jr=!0;function P1(t,e,n,i){var u=_.T;_.T=null;var o=at.p;try{at.p=2,Fo(t,e,n,i)}finally{at.p=o,_.T=u}}function I1(t,e,n,i){var u=_.T;_.T=null;var o=at.p;try{at.p=8,Fo(t,e,n,i)}finally{at.p=o,_.T=u}}function Fo(t,e,n,i){if(Jr){var u=Ko(i);if(u===null)No(t,e,i,Pr,n),qp(t,i);else if(t2(u,t,e,n,i))i.stopPropagation();else if(qp(t,i),e&4&&-1<W1.indexOf(t)){for(;u!==null;){var o=ka(u);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var d=ua(o.pendingLanes);if(d!==0){var y=o;for(y.pendingLanes|=2,y.entangledLanes|=2;d;){var A=1<<31-je(d);y.entanglements[1]|=A,d&=~A}cn(o),(Yt&6)===0&&(Mr=ln()+500,yl(0))}}break;case 13:y=Bn(o,2),y!==null&&ve(y,o,2),Br(),Yo(o,2)}if(o=Ko(i),o===null&&No(t,e,i,Pr,n),o===u)break;u=o}u!==null&&i.stopPropagation()}else No(t,e,i,null,n)}}function Ko(t){return t=Zu(t),Vo(t)}var Pr=null;function Vo(t){if(Pr=null,t=sa(t),t!==null){var e=rt(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=bt(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Pr=t,null}function Gp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hg()){case cf:return 2;case ff:return 8;case Ql:case kg:return 32;case df:return 268435456;default:return 32}default:return 32}}var Qo=!1,In=null,Wn=null,ta=null,_l=new Map,Tl=new Map,ea=[],W1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qp(t,e){switch(t){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":ta=null;break;case"pointerover":case"pointerout":_l.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tl.delete(e.pointerId)}}function Al(t,e,n,i,u,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[u]},e!==null&&(e=ka(e),e!==null&&kp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function t2(t,e,n,i,u){switch(e){case"focusin":return In=Al(In,t,e,n,i,u),!0;case"dragenter":return Wn=Al(Wn,t,e,n,i,u),!0;case"mouseover":return ta=Al(ta,t,e,n,i,u),!0;case"pointerover":var o=u.pointerId;return _l.set(o,Al(_l.get(o)||null,t,e,n,i,u)),!0;case"gotpointercapture":return o=u.pointerId,Tl.set(o,Al(Tl.get(o)||null,t,e,n,i,u)),!0}return!1}function Yp(t){var e=sa(t.target);if(e!==null){var n=rt(e);if(n!==null){if(e=n.tag,e===13){if(e=bt(n),e!==null){t.blockedOn=e,$g(t.priority,function(){if(n.tag===13){var i=ze(),u=Bn(n,i);u!==null&&ve(u,n,i),Yo(n,i)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ir(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ko(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$u=i,n.target.dispatchEvent(i),$u=null}else return e=ka(n),e!==null&&kp(e),t.blockedOn=n,!1;e.shift()}return!0}function Fp(t,e,n){Ir(t)&&n.delete(e)}function e2(){Qo=!1,In!==null&&Ir(In)&&(In=null),Wn!==null&&Ir(Wn)&&(Wn=null),ta!==null&&Ir(ta)&&(ta=null),_l.forEach(Fp),Tl.forEach(Fp)}function Wr(t,e){t.blockedOn===e&&(t.blockedOn=null,Qo||(Qo=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,e2)))}var tu=null;function Kp(t){tu!==t&&(tu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){tu===t&&(tu=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],u=t[e+2];if(typeof i!="function"){if(Vo(i||n)===null)continue;break}var o=ka(n);o!==null&&(t.splice(e,3),e-=3,Ms(o,{pending:!0,data:u,method:n.method,action:i},i,u))}}))}function Rl(t){function e(A){return Wr(A,t)}In!==null&&Wr(In,t),Wn!==null&&Wr(Wn,t),ta!==null&&Wr(ta,t),_l.forEach(e),Tl.forEach(e);for(var n=0;n<ea.length;n++){var i=ea[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<ea.length&&(n=ea[0],n.blockedOn===null);)Yp(n),n.blockedOn===null&&ea.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var u=n[i],o=n[i+1],d=u[Ee]||null;if(typeof o=="function")d||Kp(n);else if(d){var y=null;if(o&&o.hasAttribute("formAction")){if(u=o,d=o[Ee]||null)y=d.formAction;else if(Vo(u)!==null)continue}else y=d.action;typeof y=="function"?n[i+1]=y:(n.splice(i,3),i-=3),Kp(n)}}}function Xo(t){this._internalRoot=t}eu.prototype.render=Xo.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var n=e.current,i=ze();Bp(n,i,t,e,null,null)},eu.prototype.unmount=Xo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&mi(),Bp(t.current,2,null,t,null,null),Br(),e[Ha]=null}};function eu(t){this._internalRoot=t}eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=bf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ea.length&&e!==0&&e<ea[n].priority;n++);ea.splice(n,0,t),n===0&&Yp(t)}};var Vp=l.version;if(Vp!=="19.0.0")throw Error(r(527,Vp,"19.0.0"));at.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=J(e),t=t!==null?it(t):null,t=t===null?null:t.stateNode,t};var n2={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:_,findFiberByHostInstance:sa,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{Di=nu.inject(n2),Re=nu}catch{}}return Nl.createRoot=function(t,e){if(!c(t))throw Error(r(299));var n=!1,i="",u=sm,o=om,d=cm,y=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(o=e.onCaughtError),e.onRecoverableError!==void 0&&(d=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(y=e.unstable_transitionCallbacks)),e=Up(t,1,!1,null,null,n,i,u,o,d,y,null),t[Ha]=e.current,Co(t.nodeType===8?t.parentNode:t),new Xo(e)},Nl.hydrateRoot=function(t,e,n){if(!c(t))throw Error(r(299));var i=!1,u="",o=sm,d=om,y=cm,A=null,N=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks),n.formState!==void 0&&(N=n.formState)),e=Up(t,1,!0,e,n??null,i,u,o,d,y,A,N),e.context=Lp(null),n=e.current,i=ze(),u=Kn(i),u.callback=null,Vn(n,u,i),e.current.lanes=i,Mi(e,i),cn(e),t[Ha]=e.current,Co(t),new eu(e)},Nl.version="19.0.0",Nl}var dh;function KE(){if(dh)return Sc.exports;dh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Sc.exports=FE(),Sc.exports}var VE=KE();VE.createRoot(document.getElementById("root")).render(w.jsx(k.StrictMode,{children:w.jsx(GE,{})}));
