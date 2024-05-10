(function(e,m){typeof exports=="object"&&typeof module<"u"?module.exports=m(require("vue")):typeof define=="function"&&define.amd?define(["vue"],m):(e=typeof globalThis<"u"?globalThis:e||self,e["django-ui"]=m(e.Vue))})(this,function(e){"use strict";var m=typeof global=="object"&&global&&global.Object===Object&&global,J=typeof self=="object"&&self&&self.Object===Object&&self,C=m||J||Function("return this")(),h=C.Symbol,V=Object.prototype,K=V.hasOwnProperty,G=V.toString,y=h?h.toStringTag:void 0;function R(t){var o=K.call(t,y),n=t[y];try{t[y]=void 0;var r=!0}catch{}var a=G.call(t);return r&&(o?t[y]=n:delete t[y]),a}var v=Object.prototype,q=v.toString;function H(t){return q.call(t)}var X="[object Null]",W="[object Undefined]",x=h?h.toStringTag:void 0;function T(t){return t==null?t===void 0?W:X:x&&x in Object(t)?R(t):H(t)}function w(t){return t!=null&&typeof t=="object"}var B=Array.isArray;function Z(t){var o=typeof t;return t!=null&&(o=="object"||o=="function")}function Q(t){return t}var Y="[object AsyncFunction]",ee="[object Function]",te="[object GeneratorFunction]",ne="[object Proxy]";function oe(t){if(!Z(t))return!1;var o=T(t);return o==ee||o==te||o==Y||o==ne}function re(t,o){for(var n=-1,r=t==null?0:t.length;++n<r&&o(t[n],n,t)!==!1;);return t}var ae=9007199254740991,se=/^(?:0|[1-9]\d*)$/;function ie(t,o){var n=typeof t;return o=o??ae,!!o&&(n=="number"||n!="symbol"&&se.test(t))&&t>-1&&t%1==0&&t<o}var ce=9007199254740991;function N(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=ce}function A(t){return t!=null&&N(t.length)&&!oe(t)}var le=Object.prototype;function de(t){var o=t&&t.constructor,n=typeof o=="function"&&o.prototype||le;return t===n}function pe(t,o){for(var n=-1,r=Array(t);++n<t;)r[n]=o(n);return r}var ue="[object Arguments]";function O(t){return w(t)&&T(t)==ue}var D=Object.prototype,fe=D.hasOwnProperty,ge=D.propertyIsEnumerable,me=O(function(){return arguments}())?O:function(t){return w(t)&&fe.call(t,"callee")&&!ge.call(t,"callee")};function ye(){return!1}var P=typeof exports=="object"&&exports&&!exports.nodeType&&exports,I=P&&typeof module=="object"&&module&&!module.nodeType&&module,_e=I&&I.exports===P,F=_e?C.Buffer:void 0,he=F?F.isBuffer:void 0,be=he||ye,je="[object Arguments]",Te="[object Array]",we="[object Boolean]",Se="[object Date]",Ee="[object Error]",ke="[object Function]",$e="[object Map]",Ce="[object Number]",Ve="[object Object]",xe="[object RegExp]",Be="[object Set]",Ne="[object String]",Ae="[object WeakMap]",Oe="[object ArrayBuffer]",De="[object DataView]",Pe="[object Float32Array]",Ie="[object Float64Array]",Fe="[object Int8Array]",Me="[object Int16Array]",ze="[object Int32Array]",Le="[object Uint8Array]",Ue="[object Uint8ClampedArray]",Je="[object Uint16Array]",Ke="[object Uint32Array]",i={};i[Pe]=i[Ie]=i[Fe]=i[Me]=i[ze]=i[Le]=i[Ue]=i[Je]=i[Ke]=!0,i[je]=i[Te]=i[Oe]=i[we]=i[De]=i[Se]=i[Ee]=i[ke]=i[$e]=i[Ce]=i[Ve]=i[xe]=i[Be]=i[Ne]=i[Ae]=!1;function Ge(t){return w(t)&&N(t.length)&&!!i[T(t)]}function Re(t){return function(o){return t(o)}}var M=typeof exports=="object"&&exports&&!exports.nodeType&&exports,_=M&&typeof module=="object"&&module&&!module.nodeType&&module,ve=_&&_.exports===M,S=ve&&m.process,z=function(){try{var t=_&&_.require&&_.require("util").types;return t||S&&S.binding&&S.binding("util")}catch{}}(),L=z&&z.isTypedArray,qe=L?Re(L):Ge,He=Object.prototype,Xe=He.hasOwnProperty;function We(t,o){var n=B(t),r=!n&&me(t),a=!n&&!r&&be(t),s=!n&&!r&&!a&&qe(t),d=n||r||a||s,u=d?pe(t.length,String):[],f=u.length;for(var l in t)(o||Xe.call(t,l))&&!(d&&(l=="length"||a&&(l=="offset"||l=="parent")||s&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||ie(l,f)))&&u.push(l);return u}function Ze(t,o){return function(n){return t(o(n))}}var Qe=Ze(Object.keys,Object);const Ye=Qe;var et=Object.prototype,tt=et.hasOwnProperty;function nt(t){if(!de(t))return Ye(t);var o=[];for(var n in Object(t))tt.call(t,n)&&n!="constructor"&&o.push(n);return o}function ot(t){return A(t)?We(t):nt(t)}function rt(t){return function(o,n,r){for(var a=-1,s=Object(o),d=r(o),u=d.length;u--;){var f=d[t?u:++a];if(n(s[f],f,s)===!1)break}return o}}var at=rt();const st=at;function it(t,o){return t&&st(t,o,ot)}function ct(t,o){return function(n,r){if(n==null)return n;if(!A(n))return t(n,r);for(var a=n.length,s=o?a:-1,d=Object(n);(o?s--:++s<a)&&r(d[s],s,d)!==!1;);return n}}var lt=ct(it);const dt=lt;function pt(t){return typeof t=="function"?t:Q}function ut(t,o){var n=B(t)?re:dt;return n(t,pt(o))}const ft={class:"dj-accordion"},gt={class:"dj-accordion__header-label"},mt=e.createElementVNode("span",{class:"dj-accordion__header-icon"},[e.createElementVNode("svg",{class:"button-icon",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor","fill-rule":"evenodd","clip-rule":"evenodd"})])],-1),yt={class:"dj-accordion__inner-content"},_t=e.defineComponent({name:"dj-accordion"}),ht=e.defineComponent({..._t,props:{title:{type:String,default:""},content:{type:String,default:""},modelValue:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(t,{emit:o}){const n=t;e.watch(()=>n.modelValue,l=>{l?(s.wrapperStyle={transition:"background-color .25s"},a.value.style.display="block",s.contentStyle={overflow:"hidden",height:`${a.value.scrollHeight}px`,willChange:"height",transition:"height .25s"}):(s.wrapperStyle={transition:"background-color .25s"},a.value.style.height=`${a.value.scrollHeight}px`,setTimeout(()=>{s.contentStyle={transition:"height .25s",willChange:"height",height:"0px",overflow:"hidden"}},0)),r("change",l)});const r=o,a=e.ref(),s=e.reactive({wrapperStyle:{},contentStyle:{}}),d=()=>{r("update:modelValue",!n.modelValue)},u=()=>{n.modelValue?(s.wrapperStyle={},a.value.style.display="",s.contentStyle={}):(s.wrapperStyle={},s.contentStyle={height:"0px",overflow:"hidden",display:"none"})},f=()=>{n.modelValue||(a.value.style.display="none",a.value.style.height="0",a.value.style.overflow="hidden")};return e.onMounted(()=>{f()}),(l,b)=>(e.openBlock(),e.createElementBlock("div",ft,[e.createElementVNode("div",{class:e.normalizeClass(["dj-accordion__wrapper",[n.modelValue?"is-active":""]]),style:e.normalizeStyle(s.wrapperStyle)},[e.createElementVNode("button",{class:"dj-accordion__header",onClick:d},[e.createElementVNode("span",gt,[e.renderSlot(l.$slots,"title",{},()=>[e.createTextVNode(e.toDisplayString(n.title),1)])]),mt]),e.createElementVNode("div",{class:"dj-accordion__inner",style:e.normalizeStyle(s.contentStyle),ref_key:"DJAccordionInner",ref:a,onTransitionend:u},[e.createElementVNode("div",yt,[e.renderSlot(l.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(n.content),1)])])],36)],6)]))}}),bt={class:"dj-audio"},jt={class:"dj-audio__wrapper"},Tt={class:"dj-audio-button__wrapper"},wt={key:0,class:"icon",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},St=[e.createElementVNode("path",{fill:"currentColor",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M6.906 4.537A.6.6 0 0 0 6 5.053v13.894a.6.6 0 0 0 .906.516l11.723-6.947a.6.6 0 0 0 0-1.032z"},null,-1)],Et={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"icon",viewBox:"0 0 32 32"},kt=[e.createElementVNode("path",{fill:"currentColor",d:"M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"},null,-1)],$t={class:"dj-audio-progress__wrapper"},Ct={class:"dj-audio-progress__start-time"},Vt={class:"dj-audio-progress__inner"},xt=["src"],Bt=["src"],Nt={class:"dj-audio-progress__end-time"},At={key:0,xmlns:"http://www.w3.org/2000/svg",class:"icon",viewBox:"0 0 24 24"},Ot=[e.createStaticVNode('<circle cx="18" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx="12" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx="6" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle>',3)],Dt={key:1},Pt=e.defineComponent({name:"dj-audio"}),It=e.defineComponent({...Pt,props:{src:{type:String,default:""}},emits:[],setup(t,{emit:o}){const n=e.ref(),r=e.reactive({loading:!0,state:!1,isDragProgress:!1,progress:0,buffered:0,currentTime:"00:00",duration:"00:00"}),a=c=>{var p=Math.floor(c%3600/60),g=Math.floor(c%3600%60),U=p>0?p<10?"0"+p:p:"00",pn=g>0?g<10?"0"+g:g:"00";return U+":"+pn},s=()=>{n.value.play()},d=()=>{n.value.pause()},u=()=>{r.state=!r.state,r.state?s():d()},f=()=>{r.duration=a(n.value.duration),r.loading=!1},l=(c,p)=>p/c*100,b=()=>{n.value.volume=.3},E=()=>{var c=n.value.buffered;r.buffered=c.end(c.length-1)/n.value.duration*100},k=()=>{r.currentTime=a(n.value.currentTime),r.isDragProgress||(r.progress=l(n.value.duration,n.value.currentTime))},j=()=>{r.state=!1},$=()=>{n.value.currentTime=r.progress/100*n.value.duration,console.log(n.value.currentTime),r.isDragProgress=!1};return(c,p)=>(e.openBlock(),e.createElementBlock("div",bt,[e.createElementVNode("div",jt,[e.createElementVNode("div",Tt,[e.createElementVNode("button",{class:"dj-audio-button__play",onClick:u},[r.state?(e.openBlock(),e.createElementBlock("svg",Et,kt)):(e.openBlock(),e.createElementBlock("svg",wt,St))])]),e.createElementVNode("div",$t,[e.createElementVNode("span",Ct,e.toDisplayString(r.currentTime),1),e.createElementVNode("div",Vt,[e.createElementVNode("audio",{class:"dj-audio-process__audio",ref_key:"audioRef",ref:n,preload:"auto",onLoadedmetadata:f,onProgress:E,onPlaying:b,onTimeupdate:k,onEnded:j},[e.createElementVNode("source",{type:"audio/ogg",src:t.src},null,8,xt),e.createElementVNode("source",{type:"audio/mpeg",src:t.src},null,8,Bt)],544),e.createElementVNode("div",{class:"dj-audio-buffered__bar",style:e.normalizeStyle({"--buffer-value":`${r.buffered}%`})},null,4),e.withDirectives(e.createElementVNode("input",{type:"range",style:e.normalizeStyle({"--progress-value":`${r.progress}%`}),"onUpdate:modelValue":p[0]||(p[0]=g=>r.progress=g),onMousedown:p[1]||(p[1]=g=>r.isDragProgress=!0),onMouseup:$},null,36),[[e.vModelText,r.progress]])]),e.createElementVNode("span",Nt,[r.loading?(e.openBlock(),e.createElementBlock("svg",At,Ot)):(e.openBlock(),e.createElementBlock("span",Dt,e.toDisplayString(r.duration),1))])])])]))}}),Ft=t=>{t=t.replace("#","");const o=[parseInt(t.substr(0,2),16),parseInt(t.substr(2,2),16),parseInt(t.substr(4,2),16)];return(.299*o[0]+.587*o[1]+.114*o[2])/255<=.5},Mt={class:"dj-button-inner"},zt=e.defineComponent({name:"dj-button"}),Lt=e.defineComponent({...zt,props:{type:{type:String,default:"",validate:t=>["primary","success","warning","danger"].includes(t)},text:{type:String,default:""},color:{type:String,default:""}},setup(t){return(o,n)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["dj-button",[t.type]]),style:e.normalizeStyle({"--custom-background-color":t.color,"--custom-text-color":t.color?e.unref(Ft)(t.color)?"var(--white)":"var(--black)":""})},[e.createElementVNode("span",Mt,[e.renderSlot(o.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(t.text),1)])])],6))}}),Ut={class:"dj-button-group"},Jt=e.defineComponent({name:"dj-button-group"}),Kt=e.defineComponent({...Jt,setup(t){return(o,n)=>(e.openBlock(),e.createElementBlock("div",Ut,[e.renderSlot(o.$slots,"default")]))}}),Gt={key:0,class:"dj-card-header"},Rt={class:"dj-card-body"},vt={key:1,class:"dj-card-footer"},qt=e.defineComponent({name:"dj-card"}),Ht=e.defineComponent({...qt,props:{align:{type:String,default:"left"},title:{type:String,default:void 0},footer:{type:String,default:void 0}},setup(t){const o=t,n=e.useSlots(),r=e.reactive({showTitle:!0,showFooter:!0});return e.onMounted(()=>{r.showTitle=(o.title||n.header)!==void 0,r.showFooter=(o.footer||n.footer)!==void 0}),(a,s)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["dj-card",[t.align]])},[r.showTitle?(e.openBlock(),e.createElementBlock("div",Gt,[e.renderSlot(a.$slots,"header",{},()=>[e.createTextVNode(e.toDisplayString(t.title),1)])])):e.createCommentVNode("",!0),e.createElementVNode("div",Rt,[e.renderSlot(a.$slots,"default")]),r.showFooter?(e.openBlock(),e.createElementBlock("div",vt,[e.renderSlot(a.$slots,"footer",{},()=>[e.createTextVNode(e.toDisplayString(t.footer),1)])])):e.createCommentVNode("",!0)],2))}}),Xt={class:"dj-divider"},Wt=e.defineComponent({name:"dj-divider"}),Zt=e.defineComponent({...Wt,props:{text:{type:String,default:""},type:{type:String,default:"solid",validator:t=>["solid","dashed","dotted"].includes(t)}},setup(t){const o=e.useSlots();return(n,r)=>(e.openBlock(),e.createElementBlock("div",Xt,[e.createElementVNode("div",{class:e.normalizeClass(["dj-divider-inner",["dj-divider-inner--"+t.type]])},[e.unref(o).default?e.renderSlot(n.$slots,"default",{key:0}):(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.createTextVNode(e.toDisplayString(t.text),1)],64))],2)]))}}),Qt="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Yt=(t=21)=>{let o="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)o+=Qt[n[t]&63];return o};const en=["id"],tn={key:0,class:"dj-input__prefix"},nn={class:"dj-input__prefix__inner"},on=["id","placeholder","enterkeyhint","disabled","value"],rn=[e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-circle-fill icon",viewBox:"0 0 16 16"},[e.createElementVNode("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})],-1)],an={key:2,class:"dj-input__suffix"},sn={class:"dj-input__suffix__inner"},cn=e.defineComponent({name:"dj-input"}),ln=e.defineComponent({...cn,props:{id:{type:String,default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},clear:{type:Boolean,default:!1},modelValue:{type:String,default:""},enterkeyhint:{type:String,default:""}},emits:["update:modelValue","keyup.enter","change","input","focus","blur","clear"],setup(t,{expose:o,emit:n}){const r=n,a=e.useSlots(),s=e.ref(Yt()),d=e.reactive({focus:!1,active:!1}),u=()=>{const c=document.getElementById(s.value);c==null||c.focus()},f=c=>{const p=document.getElementById(c);p==null||p.blur()},l=c=>{r("change",c.target.value)},b=c=>{r("input",c.target.value),r("update:modelValue",c.target.value)},E=()=>{d.focus=!0,r("focus")},k=()=>{d.focus=!1,r("blur")},j=()=>{r("clear",void 0),r("update:modelValue",void 0)},$=()=>{r("keyup.enter")};return o({focus:u,blur:f,clear:j}),(c,p)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["dj-input",[t.disabled?"is-disabled":""]])},[e.createElementVNode("div",{id:s.value,class:e.normalizeClass(["dj-input__wrapper",[d.focus?"is-focus":""]]),onClick:u},[e.unref(a)["prefix-icon"]?(e.openBlock(),e.createElementBlock("span",tn,[e.createElementVNode("span",nn,[e.renderSlot(c.$slots,"prefix-icon")])])):e.createCommentVNode("",!0),e.createElementVNode("input",{id:t.id,class:"dj-input__inner",placeholder:t.placeholder,enterkeyhint:t.enterkeyhint,disabled:t.disabled,value:t.modelValue,onChange:l,onInput:b,onFocus:E,onFocusout:k,onKeyup:e.withKeys($,["enter","native"])},null,40,on),t.clear&&t.modelValue?(e.openBlock(),e.createElementBlock("div",{key:1,class:"dj-input__clear",onClick:j},rn)):e.createCommentVNode("",!0),e.unref(a)["suffix-icon"]?(e.openBlock(),e.createElementBlock("span",an,[e.createElementVNode("span",sn,[e.renderSlot(c.$slots,"suffix-icon")])])):e.createCommentVNode("",!0)],10,en)],2))}}),dn=Object.freeze(Object.defineProperty({__proto__:null,DJAccordion:ht,DJAudio:It,DJButton:Lt,DJButtonGroup:Kt,DJCard:Ht,DJDivider:Zt,DJInput:ln},Symbol.toStringTag,{value:"Module"}));return{install(t){ut(dn,o=>{t.component(o.name,o)})}}});
