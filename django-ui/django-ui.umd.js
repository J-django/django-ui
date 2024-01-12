(function(o,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],i):(o=typeof globalThis<"u"?globalThis:o||self,i(o["django-ui"]={},o.Vue))})(this,function(o,i){"use strict";var h=typeof global=="object"&&global&&global.Object===Object&&global,U=typeof self=="object"&&self&&self.Object===Object&&self,O=h||U||Function("return this")(),d=O.Symbol,A=Object.prototype,C=A.hasOwnProperty,D=A.toString,l=d?d.toStringTag:void 0;function N(t){var e=C.call(t,l),r=t[l];try{t[l]=void 0;var a=!0}catch{}var u=D.call(t);return a&&(e?t[l]=r:delete t[l]),u}var G=Object.prototype,L=G.toString;function V(t){return L.call(t)}var K="[object Null]",k="[object Undefined]",v=d?d.toStringTag:void 0;function p(t){return t==null?t===void 0?k:K:v&&v in Object(t)?N(t):V(t)}function j(t){return t!=null&&typeof t=="object"}var S=Array.isArray;function q(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function z(t){return t}var R="[object AsyncFunction]",J="[object Function]",X="[object GeneratorFunction]",W="[object Proxy]";function H(t){if(!q(t))return!1;var e=p(t);return e==J||e==X||e==R||e==W}function Q(t,e){for(var r=-1,a=t==null?0:t.length;++r<a&&e(t[r],r,t)!==!1;);return t}var Y=9007199254740991,Z=/^(?:0|[1-9]\d*)$/;function tt(t,e){var r=typeof t;return e=e??Y,!!e&&(r=="number"||r!="symbol"&&Z.test(t))&&t>-1&&t%1==0&&t<e}var et=9007199254740991;function $(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=et}function E(t){return t!=null&&$(t.length)&&!H(t)}var rt=Object.prototype;function nt(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||rt;return t===r}function ot(t,e){for(var r=-1,a=Array(t);++r<t;)a[r]=e(r);return a}var at="[object Arguments]";function w(t){return j(t)&&p(t)==at}var P=Object.prototype,it=P.hasOwnProperty,ct=P.propertyIsEnumerable,ut=w(function(){return arguments}())?w:function(t){return j(t)&&it.call(t,"callee")&&!ct.call(t,"callee")};function ft(){return!1}var F=typeof o=="object"&&o&&!o.nodeType&&o,B=F&&typeof module=="object"&&module&&!module.nodeType&&module,st=B&&B.exports===F,I=st?O.Buffer:void 0,bt=I?I.isBuffer:void 0,lt=bt||ft,gt="[object Arguments]",dt="[object Array]",yt="[object Boolean]",pt="[object Date]",jt="[object Error]",Tt="[object Function]",mt="[object Map]",ht="[object Number]",Ot="[object Object]",At="[object RegExp]",vt="[object Set]",St="[object String]",$t="[object WeakMap]",Et="[object ArrayBuffer]",wt="[object DataView]",Pt="[object Float32Array]",Ft="[object Float64Array]",Bt="[object Int8Array]",It="[object Int16Array]",_t="[object Int32Array]",xt="[object Uint8Array]",Mt="[object Uint8ClampedArray]",Ut="[object Uint16Array]",Ct="[object Uint32Array]",n={};n[Pt]=n[Ft]=n[Bt]=n[It]=n[_t]=n[xt]=n[Mt]=n[Ut]=n[Ct]=!0,n[gt]=n[dt]=n[Et]=n[yt]=n[wt]=n[pt]=n[jt]=n[Tt]=n[mt]=n[ht]=n[Ot]=n[At]=n[vt]=n[St]=n[$t]=!1;function Dt(t){return j(t)&&$(t.length)&&!!n[p(t)]}function Nt(t){return function(e){return t(e)}}var _=typeof o=="object"&&o&&!o.nodeType&&o,g=_&&typeof module=="object"&&module&&!module.nodeType&&module,Gt=g&&g.exports===_,T=Gt&&h.process,x=function(){try{var t=g&&g.require&&g.require("util").types;return t||T&&T.binding&&T.binding("util")}catch{}}(),M=x&&x.isTypedArray,Lt=M?Nt(M):Dt,Vt=Object.prototype,Kt=Vt.hasOwnProperty;function kt(t,e){var r=S(t),a=!r&&ut(t),u=!r&&!a&&lt(t),c=!r&&!a&&!u&&Lt(t),s=r||a||u||c,b=s?ot(t.length,String):[],y=b.length;for(var f in t)(e||Kt.call(t,f))&&!(s&&(f=="length"||u&&(f=="offset"||f=="parent")||c&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||tt(f,y)))&&b.push(f);return b}function qt(t,e){return function(r){return t(e(r))}}var zt=qt(Object.keys,Object);const Rt=zt;var Jt=Object.prototype,Xt=Jt.hasOwnProperty;function Wt(t){if(!nt(t))return Rt(t);var e=[];for(var r in Object(t))Xt.call(t,r)&&r!="constructor"&&e.push(r);return e}function Ht(t){return E(t)?kt(t):Wt(t)}function Qt(t){return function(e,r,a){for(var u=-1,c=Object(e),s=a(e),b=s.length;b--;){var y=s[t?b:++u];if(r(c[y],y,c)===!1)break}return e}}var Yt=Qt();const Zt=Yt;function te(t,e){return t&&Zt(t,e,Ht)}function ee(t,e){return function(r,a){if(r==null)return r;if(!E(r))return t(r,a);for(var u=r.length,c=e?u:-1,s=Object(r);(e?c--:++c<u)&&a(s[c],c,s)!==!1;);return r}}var re=ee(te);const ne=re;function oe(t){return typeof t=="function"?t:z}function ae(t,e){var r=S(t)?Q:ne;return r(t,oe(e))}const ie={class:"dj-button-inner"},ce=i.defineComponent({name:"dj-button"}),m=i.defineComponent({...ce,props:{type:{type:String,default:"",validate:t=>["primary","success","warning","danger"].includes(t)},text:{type:String,default:""},color:{type:String,default:""}},setup(t){return(e,r)=>(i.openBlock(),i.createElementBlock("button",{class:i.normalizeClass(["dj-button",[t.type]]),style:i.normalizeStyle({"--custom-background-color":t.color})},[i.createElementVNode("span",ie,[i.renderSlot(e.$slots,"default",{},()=>[i.createTextVNode(i.toDisplayString(t.text),1)])])],6))}}),ue=Object.freeze(Object.defineProperty({__proto__:null,DJButton:m},Symbol.toStringTag,{value:"Module"})),fe={install(t){ae(ue,e=>{t.component(e.name,m)})}};o.DJButton=m,o.default=fe,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
