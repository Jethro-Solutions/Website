"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39],{1780:(e,t,r)=>{let n,i;r.d(t,{L:()=>C});var a=r(4438),o=r(4331),s=r(2115);function l(e,t){let r;let n=()=>{let{currentTime:n}=t,i=(null===n?0:n.value)/100;r!==i&&e(i),r=i};return a.Gt.update(n,!0),()=>(0,a.WG)(n)}let f=new WeakMap;function c({target:e,contentRect:t,borderBoxSize:r}){f.get(e)?.forEach(n=>{n({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:r}=t[0];return{width:e,height:r}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,r)}})})}function u(e){e.forEach(c)}let d=new Set,v=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),p=()=>({time:0,x:v(),y:v()}),h={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function g(e,t,r,n){let i=r[t],{length:a,position:s}=h[t],l=i.current,f=r.time;i.current=e[`scroll${s}`],i.scrollLength=e[`scroll${a}`]-e[`client${a}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,o.qB)(0,i.scrollLength,i.current);let c=n-f;i.velocity=c>50?0:(0,o.fj)(i.current-l,c)}var m=r(7782),y=r(7846),b=r(7345);let w={start:0,center:.5,end:1};function x(e,t,r=0){let n=0;if(e in w&&(e=w[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?n=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?n=t/100*document.documentElement.clientWidth:e.endsWith("vh")?n=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(n=t*e),r+n}let E=[0,0],_={All:[[0,0],[1,1]]},S={x:0,y:0},A=new WeakMap,L=new WeakMap,M=new WeakMap,D=e=>e===document.documentElement?window:e;function T(e,{container:t=document.documentElement,...r}={}){let o=M.get(t);o||(o=new Set,M.set(t,o));let s=function(e,t,r,n={}){return{measure:()=>(function(e,t=e,r){if(r.x.targetOffset=0,r.y.targetOffset=0,t!==e){let n=t;for(;n&&n!==e;)r.x.targetOffset+=n.offsetLeft,r.y.targetOffset+=n.offsetTop,n=n.offsetParent}r.x.targetLength=t===e?t.scrollWidth:t.clientWidth,r.y.targetLength=t===e?t.scrollHeight:t.clientHeight,r.x.containerLength=e.clientWidth,r.y.containerLength=e.clientHeight})(e,n.target,r),update:t=>{g(e,"x",r,t),g(e,"y",r,t),r.time=t,(n.offset||n.target)&&function(e,t,r){let{offset:n=_.All}=r,{target:i=e,axis:a="y"}=r,o="y"===a?"height":"width",s=i!==e?function(e,t){let r={x:0,y:0},n=e;for(;n&&n!==t;)if(n instanceof HTMLElement)r.x+=n.offsetLeft,r.y+=n.offsetTop,n=n.offsetParent;else if("svg"===n.tagName){let e=n.getBoundingClientRect(),t=(n=n.parentElement).getBoundingClientRect();r.x+=e.left-t.left,r.y+=e.top-t.top}else if(n instanceof SVGGraphicsElement){let{x:e,y:t}=n.getBBox();r.x+=e,r.y+=t;let i=null,a=n.parentNode;for(;!i;)"svg"===a.tagName&&(i=a),a=n.parentNode;n=i}else break;return r}(i,e):S,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in i&&"svg"!==i.tagName?i.getBBox():{width:i.clientWidth,height:i.clientHeight},f={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let c=!t[a].interpolate,u=n.length;for(let e=0;e<u;e++){let r=function(e,t,r,n){let i=Array.isArray(e)?e:E,a=0,o=0;return"number"==typeof e?i=[e,e]:"string"==typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,w[e]?e:"0"]),(a=x(i[0],r,n))-x(i[1],t)}(n[e],f[o],l[o],s[a]);c||r===t[a].interpolatorOffsets[e]||(c=!0),t[a].offset[e]=r}c&&(t[a].interpolate=(0,y.G)(t[a].offset,(0,b.Z)(n),{clamp:!1}),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=(0,m.q)(0,1,t[a].interpolate(t[a].current))}(e,r,n)},notify:()=>t(r)}}(t,e,p(),r);if(o.add(s),!A.has(t)){let e=()=>{for(let e of o)e.measure()},r=()=>{for(let e of o)e.update(a.uv.timestamp)},s=()=>{for(let e of o)e.notify()},l=()=>{a.Gt.read(e,!1,!0),a.Gt.read(r,!1,!0),a.Gt.update(s,!1,!0)};A.set(t,l);let c=D(t);if(window.addEventListener("resize",l,{passive:!0}),t!==document.documentElement)L.set(t,"function"==typeof t?(d.add(t),i||(i=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};d.forEach(e=>e(t))},window.addEventListener("resize",i)),()=>{d.delete(t),!d.size&&i&&(i=void 0)}):function(e,t){n||"undefined"==typeof ResizeObserver||(n=new ResizeObserver(u));let r=(0,a.KJ)(e);return r.forEach(e=>{let r=f.get(e);r||(r=new Set,f.set(e,r)),r.add(t),n?.observe(e)}),()=>{r.forEach(e=>{let r=f.get(e);r?.delete(t),r?.size||n?.unobserve(e)})}}(t,l));c.addEventListener("scroll",l,{passive:!0})}let l=A.get(t);return a.Gt.read(l,!1,!0),()=>{(0,a.WG)(l);let e=M.get(t);if(!e||(e.delete(s),e.size))return;let r=A.get(t);A.delete(t),r&&(D(t).removeEventListener("scroll",r),L.get(t)?.(),window.removeEventListener("resize",r))}}let U=new Map;function R({source:e,container:t=document.documentElement,axis:r="y"}={}){e&&(t=e),U.has(t)||U.set(t,{});let n=U.get(t);return n[r]||(n[r]=(0,a.Jb)()?new ScrollTimeline({source:t,axis:r}):function({source:e,container:t,axis:r="y"}){e&&(t=e);let n={value:0},i=T(e=>{n.value=100*e[r].progress},{container:t,axis:r});return{currentTime:n,cancel:i}}({source:t,axis:r})),n[r]}function k(e){return e&&(e.target||e.offset)}var B=r(2885),z=r(7494);function I(e,t){(0,o.$e)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let O=()=>({scrollX:(0,a.OQ)(0),scrollY:(0,a.OQ)(0),scrollXProgress:(0,a.OQ)(0),scrollYProgress:(0,a.OQ)(0)});function C({container:e,target:t,layoutEffect:r=!0,...n}={}){let i=(0,B.M)(O);return(r?z.E:s.useEffect)(()=>(I("target",t),I("container",e),function(e,{axis:t="y",...r}={}){var n,i;let a={axis:t,...r};return"function"==typeof e?(n=e,i=a,2===n.length||k(i)?T(e=>{n(e[i.axis].progress,e)},i):l(n,R(i))):function(e,t){if(e.flatten(),k(t))return e.pause(),T(r=>{e.time=e.duration*r[t.axis].progress},t);{let r=R(t);return e.attachTimeline?e.attachTimeline(r,e=>(e.pause(),l(t=>{e.time=e.duration*t},r))):o.lQ}}(e,a)}((e,{x:t,y:r})=>{i.scrollX.set(t.current),i.scrollXProgress.set(t.progress),i.scrollY.set(r.current),i.scrollYProgress.set(r.progress)},{...n,container:e?.current||void 0,target:t?.current||void 0})),[e,t,JSON.stringify(n.offset)]),i}},3064:(e,t,r)=>{r.d(t,{Do:()=>a,Fh:()=>v});var n=r(7431),i=r(3264);let a=/\bvoid\s+main\s*\(\s*\)\s*{/g;function o(e){return e.replace(/^[ \t]*#include +<([\w\d./]+)>/gm,function(e,t){let r=n.ShaderChunk[t];return r?o(r):e})}let s=[];for(let e=0;e<256;e++)s[e]=(e<16?"0":"")+e.toString(16);let l=Object.assign||function(){let e=arguments[0];for(let t=1,r=arguments.length;t<r;t++){let r=arguments[t];if(r)for(let t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},f=Date.now(),c=new WeakMap,u=new Map,d=1e10;function v(e,t){let r=function(e){let t=JSON.stringify(e,h),r=m.get(t);return null==r&&m.set(t,r=++g),r}(t),n=c.get(e);if(n||c.set(e,n=Object.create(null)),n[r])return new n[r];let a=`_onBeforeCompile${r}`,y=function(n,i){e.onBeforeCompile.call(this,n,i);let s=this.customProgramCacheKey()+"|"+n.vertexShader+"|"+n.fragmentShader,c=u[s];if(!c){let e=function(e,{vertexShader:t,fragmentShader:r},n,i){let{vertexDefs:a,vertexMainIntro:s,vertexMainOutro:l,vertexTransform:f,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:d,fragmentColorTransform:v,customRewriter:h,timeUniform:g}=n;if(a=a||"",s=s||"",l=l||"",c=c||"",u=u||"",d=d||"",(f||h)&&(t=o(t)),(v||h)&&(r=o(r=r.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,"\n//!BEGIN_POST_CHUNK $1\n$&\n//!END_POST_CHUNK\n"))),h){let e=h({vertexShader:t,fragmentShader:r});t=e.vertexShader,r=e.fragmentShader}if(v){let e=[];r=r.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,t=>(e.push(t),"")),d=`${v}
${e.join("\n")}
${d}`}if(g){let e=`
uniform float ${g};
`;a=e+a,c=e+c}return f&&(t=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${t}
`,a=`${a}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${f}
}
`,s=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${s}
`,t=t.replace(/\b(position|normal|uv)\b/g,(e,t,r,n)=>/\battribute\s+vec[23]\s+$/.test(n.substr(0,r))?t:`troika_${t}_${i}`),e.map&&e.map.channel>0||(t=t.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),{vertexShader:t=p(t,i,a,s,l),fragmentShader:r=p(r,i,c,u,d)}}(this,n,t,r);c=u[s]=e}n.vertexShader=c.vertexShader,n.fragmentShader=c.fragmentShader,l(n.uniforms,this.uniforms),t.timeUniform&&(n.uniforms[t.timeUniform]={get value(){return Date.now()-f}}),this[a]&&this[a](n)},b=function(){return w(t.chained?e:e.clone())},w=function(n){let i=Object.create(n,x);return Object.defineProperty(i,"baseMaterial",{value:e}),Object.defineProperty(i,"id",{value:d++}),i.uuid=function(){let e=0xffffffff*Math.random()|0,t=0xffffffff*Math.random()|0,r=0xffffffff*Math.random()|0,n=0xffffffff*Math.random()|0;return(s[255&e]+s[e>>8&255]+s[e>>16&255]+s[e>>24&255]+"-"+s[255&t]+s[t>>8&255]+"-"+s[t>>16&15|64]+s[t>>24&255]+"-"+s[63&r|128]+s[r>>8&255]+"-"+s[r>>16&255]+s[r>>24&255]+s[255&n]+s[n>>8&255]+s[n>>16&255]+s[n>>24&255]).toUpperCase()}(),i.uniforms=l({},n.uniforms,t.uniforms),i.defines=l({},n.defines,t.defines),i.defines[`TROIKA_DERIVED_MATERIAL_${r}`]="",i.extensions=l({},n.extensions,t.extensions),i._listeners=void 0,i},x={constructor:{value:b},isDerivedMaterial:{value:!0},type:{get:()=>e.type,set:t=>{e.type=t}},isDerivedFrom:{writable:!0,configurable:!0,value:function(e){let t=this.baseMaterial;return e===t||t.isDerivedMaterial&&t.isDerivedFrom(e)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return e.customProgramCacheKey()+"|"+r}},onBeforeCompile:{get:()=>y,set(e){this[a]=e}},copy:{writable:!0,configurable:!0,value:function(t){return e.copy.call(this,t),e.isShaderMaterial||e.isDerivedMaterial||(l(this.extensions,t.extensions),l(this.defines,t.defines),l(this.uniforms,i.LlO.clone(t.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){return w(new e.constructor).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let r=this._depthMaterial;return r||((r=this._depthMaterial=v(e.isDerivedMaterial?e.getDepthMaterial():new i.CSG({depthPacking:i.N5j}),t)).defines.IS_DEPTH_MATERIAL="",r.uniforms=this.uniforms),r}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let r=this._distanceMaterial;return r||((r=this._distanceMaterial=v(e.isDerivedMaterial?e.getDistanceMaterial():new i.aVO,t)).defines.IS_DISTANCE_MATERIAL="",r.uniforms=this.uniforms),r}},dispose:{writable:!0,configurable:!0,value(){let{_depthMaterial:t,_distanceMaterial:r}=this;t&&t.dispose(),r&&r.dispose(),e.dispose.call(this)}}};return n[r]=b,new b}function p(e,t,r,n,i){return(n||i||r)&&(e=e.replace(a,`
${r}
void troikaOrigMain${t}() {`)+`
void main() {
  ${n}
  troikaOrigMain${t}();
  ${i}
}`),e}function h(e,t){return"uniforms"===e?void 0:"function"==typeof t?t.toString():t}let g=0,m=new Map,y=`
uniform vec3 pointA;
uniform vec3 controlA;
uniform vec3 controlB;
uniform vec3 pointB;
uniform float radius;
varying float bezierT;

vec3 cubicBezier(vec3 p1, vec3 c1, vec3 c2, vec3 p2, float t) {
  float t2 = 1.0 - t;
  float b0 = t2 * t2 * t2;
  float b1 = 3.0 * t * t2 * t2;
  float b2 = 3.0 * t * t * t2;
  float b3 = t * t * t;
  return b0 * p1 + b1 * c1 + b2 * c2 + b3 * p2;
}

vec3 cubicBezierDerivative(vec3 p1, vec3 c1, vec3 c2, vec3 p2, float t) {
  float t2 = 1.0 - t;
  return -3.0 * p1 * t2 * t2 +
    c1 * (3.0 * t2 * t2 - 6.0 * t2 * t) +
    c2 * (6.0 * t2 * t - 3.0 * t * t) +
    3.0 * p2 * t * t;
}
`,b=`
float t = position.y;
bezierT = t;
vec3 bezierCenterPos = cubicBezier(pointA, controlA, controlB, pointB, t);
vec3 bezierDir = normalize(cubicBezierDerivative(pointA, controlA, controlB, pointB, t));

// Make "sideways" always perpendicular to the camera ray; this ensures that any twists
// in the cylinder occur where you won't see them: 
vec3 viewDirection = normalMatrix * vec3(0.0, 0.0, 1.0);
if (bezierDir == viewDirection) {
  bezierDir = normalize(cubicBezierDerivative(pointA, controlA, controlB, pointB, t == 1.0 ? t - 0.0001 : t + 0.0001));
}
vec3 sideways = normalize(cross(bezierDir, viewDirection));
vec3 upish = normalize(cross(sideways, bezierDir));

// Build a matrix for transforming this disc in the cylinder:
mat4 discTx;
discTx[0].xyz = sideways * radius;
discTx[1].xyz = bezierDir * radius;
discTx[2].xyz = upish * radius;
discTx[3].xyz = bezierCenterPos;
discTx[3][3] = 1.0;

// Apply transform, ignoring original y
position = (discTx * vec4(position.x, 0.0, position.z, 1.0)).xyz;
normal = normalize(mat3(discTx) * normal);
`,w=`
uniform vec3 dashing;
varying float bezierT;
`,x=`
if (dashing.x + dashing.y > 0.0) {
  float dashFrac = mod(bezierT - dashing.z, dashing.x + dashing.y);
  if (dashFrac > dashing.x) {
    discard;
  }
}
`,E=null,_=new i._4j({color:0xffffff,side:i.$EB});class S extends i.eaF{static getGeometry(){return E||(E=new i.Ho_(1,1,1,6,64).translate(0,.5,0))}constructor(){super(S.getGeometry(),_),this.pointA=new i.Pq0,this.controlA=new i.Pq0,this.controlB=new i.Pq0,this.pointB=new i.Pq0,this.radius=.01,this.dashArray=new i.I9Y,this.dashOffset=0,this.frustumCulled=!1}get material(){let e=this._derivedMaterial,t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=_.clone());return(!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=v(t,{chained:!0,uniforms:{pointA:{value:new i.Pq0},controlA:{value:new i.Pq0},controlB:{value:new i.Pq0},pointB:{value:new i.Pq0},radius:{value:.01},dashing:{value:new i.Pq0}},vertexDefs:y,vertexTransform:b,fragmentDefs:w,fragmentMainIntro:x}),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),e}set material(e){this._baseMaterial=e}get customDepthMaterial(){return this.material.getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return this.material.getDistanceMaterial()}set customDistanceMaterial(e){}onBeforeRender(){let{uniforms:e}=this.material,{pointA:t,controlA:r,controlB:n,pointB:i,radius:a,dashArray:o,dashOffset:s}=this;e.pointA.value.copy(t),e.controlA.value.copy(r),e.controlB.value.copy(n),e.pointB.value.copy(i),e.radius.value=a,e.dashing.value.set(o.x,o.y,s||0)}raycast(){}}},5202:(e,t,r)=>{function n(){var e=Object.create(null);function t(e,t){var r=void 0;self.troikaDefine=function(e){return r=e};var n=URL.createObjectURL(new Blob(["/** "+e.replace(/\*/g,"")+" **/\n\ntroikaDefine(\n"+t+"\n)"],{type:"application/javascript"}));try{importScripts(n)}catch(e){console.error(e)}return URL.revokeObjectURL(n),delete self.troikaDefine,r}self.addEventListener("message",function(r){var n=r.data,i=n.messageId,a=n.action,o=n.data;try{"registerModule"===a&&function r(n,i){var a=n.id,o=n.name,s=n.dependencies;void 0===s&&(s=[]);var l=n.init;void 0===l&&(l=function(){});var f=n.getTransferables;if(void 0===f&&(f=null),!e[a])try{s=s.map(function(t){return t&&t.isWorkerModule&&(r(t,function(e){if(e instanceof Error)throw e}),t=e[t.id].value),t}),l=t("<"+o+">.init",l),f&&(f=t("<"+o+">.getTransferables",f));var c=null;"function"==typeof l?c=l.apply(void 0,s):console.error("worker module init function failed to rehydrate"),e[a]={id:a,value:c,getTransferables:f},i(c)}catch(e){e&&e.noLog||console.error(e),i(e)}}(o,function(e){e instanceof Error?postMessage({messageId:i,success:!1,error:e.message}):postMessage({messageId:i,success:!0,result:{isCallable:"function"==typeof e}})}),"callModule"===a&&function(t,r){var n,i=t.id,a=t.args;e[i]&&"function"==typeof e[i].value||r(Error("Worker module "+i+": not found or its 'init' did not return a function"));try{var o=(n=e[i]).value.apply(n,a);o&&"function"==typeof o.then?o.then(s,function(e){return r(e instanceof Error?e:Error(""+e))}):s(o)}catch(e){r(e)}function s(t){try{var n=e[i].getTransferables&&e[i].getTransferables(t);n&&Array.isArray(n)&&n.length||(n=void 0),r(t,n)}catch(e){console.error(e),r(e)}}}(o,function(e,t){e instanceof Error?postMessage({messageId:i,success:!1,error:e.message}):postMessage({messageId:i,success:!0,result:e},t||void 0)})}catch(e){postMessage({messageId:i,success:!1,error:e.stack})}})}r.d(t,{Qw:()=>u,kl:()=>function e(t){if((!t||"function"!=typeof t.init)&&!s)throw Error("requires `options.init` function");var r,n=t.dependencies,o=t.init,l=t.getTransferables,c=t.workerId,u=((r=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return r._getInitResult().then(function(t){if("function"==typeof t)return t.apply(void 0,e);throw Error("Worker module function was called but `init` did not return a callable function")})})._getInitResult=function(){var e=t.dependencies,n=t.init,i=Promise.all(e=Array.isArray(e)?e.map(function(e){return e&&(e=e.onMainThread||e)._getInitResult&&(e=e._getInitResult()),e}):[]).then(function(e){return n.apply(null,e)});return r._getInitResult=function(){return i},i},r);null==c&&(c="#default");var p="workerModule"+ ++a,h=t.name||p,g=null;function m(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(!i())return u.apply(void 0,e);if(!g){g=v(c,"registerModule",m.workerModuleData);var r=function(){g=null,f[c].delete(r)};(f[c]||(f[c]=new Set)).add(r)}return g.then(function(t){if(t.isCallable)return v(c,"callModule",{id:p,args:e});throw Error("Worker module function was called but `init` did not return a callable function")})}return n=n&&n.map(function(t){return"function"!=typeof t||t.workerModuleData||(s=!0,t=e({workerId:c,name:"<"+h+"> function dependency: "+t.name,init:"function(){return (\n"+d(t)+"\n)}"}),s=!1),t&&t.workerModuleData&&(t=t.workerModuleData),t}),m.workerModuleData={isWorkerModule:!0,id:p,name:h,dependencies:n,init:d(o),getTransferables:l&&d(l)},m.onMainThread=u,m}}),r(9509);var i=function(){var e=!1;if("undefined"!=typeof window&&void 0!==window.document)try{new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"}))).terminate(),e=!0}catch(e){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+e.message+"]")}return i=function(){return e},e},a=0,o=0,s=!1,l=Object.create(null),f=Object.create(null),c=Object.create(null);function u(e){f[e]&&f[e].forEach(function(e){e()}),l[e]&&(l[e].terminate(),delete l[e])}function d(e){var t=e.toString();return!/^function/.test(t)&&/^\w+\s*\(/.test(t)&&(t="function "+t),t}function v(e,t,r){return new Promise(function(i,a){var s=++o;c[s]=function(e){e.success?i(e.result):a(Error("Error in worker "+t+" call: "+e.error))},(function(e){var t=l[e];if(!t){var r=d(n);(t=l[e]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+e.replace(/\*/g,"")+" **/\n\n;("+r+")()"],{type:"application/javascript"})))).onmessage=function(e){var t=e.data,r=t.messageId,n=c[r];if(!n)throw Error("WorkerModule response with empty or unknown messageId");delete c[r],n(t)}}return t})(e).postMessage({messageId:s,action:t,data:r})})}},5454:(e,t,r)=>{r.d(t,{A:()=>n});let n=function(){return function(e){var t,r,n,i,a={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},o={},s={};o.L=1,s[1]="L",Object.keys(a).forEach(function(e,t){o[e]=1<<t+1,s[o[e]]=e}),Object.freeze(o);var l=o.LRI|o.RLI|o.FSI,f=o.L|o.R|o.AL,c=o.B|o.S|o.WS|o.ON|o.FSI|o.LRI|o.RLI|o.PDI,u=o.BN|o.RLE|o.LRE|o.RLO|o.LRO|o.PDF,d=o.S|o.WS|o.B|l|o.PDI|u,v=null;function p(e){return!function(){if(!v){v=new Map;var e=function(e){if(a.hasOwnProperty(e)){var t=0;a[e].split(",").forEach(function(r){var n=r.split("+"),i=n[0],a=n[1];i=parseInt(i,36),a=a?parseInt(a,36):0,v.set(t+=i,o[e]);for(var s=0;s<a;s++)v.set(++t,o[e])})}};for(var t in a)e(t)}}(),v.get(e.codePointAt(0))||o.L}var h={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function g(e,t){var r,n=0,i=new Map,a=t&&new Map;return e.split(",").forEach(function e(o){if(-1!==o.indexOf("+"))for(var s=+o;s--;)e(r);else{r=o;var l=o.split(">"),f=l[0],c=l[1];f=String.fromCodePoint(n+=parseInt(f,36)),c=String.fromCodePoint(n+=parseInt(c,36)),i.set(f,c),t&&a.set(c,f)}}),{map:i,reverseMap:a}}function m(){if(!t){var e=g(h.pairs,!0),i=e.map,a=e.reverseMap;t=i,r=a,n=g(h.canonical,!1).map}}function y(e){return m(),t.get(e)||null}function b(e){return m(),r.get(e)||null}function w(e){return m(),n.get(e)||null}var x=o.L,E=o.R,_=o.EN,S=o.ES,A=o.ET,L=o.AN,M=o.CS,D=o.B,T=o.S,U=o.ON,R=o.BN,k=o.NSM,B=o.AL,z=o.LRO,I=o.RLO,O=o.LRE,C=o.RLE,P=o.PDF,j=o.LRI,N=o.RLI,W=o.FSI,F=o.PDI;function G(e){return!function(){if(!i){var e=g("14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",!0),t=e.map;e.reverseMap.forEach(function(e,r){t.set(r,e)}),i=t}}(),i.get(e)||null}function q(e,t,r,n){var i=e.length;r=Math.max(0,null==r?0:+r),n=Math.min(i-1,null==n?i-1:+n);var a=[];return t.paragraphs.forEach(function(i){var o=Math.max(r,i.start),s=Math.min(n,i.end);if(o<s){for(var l=t.levels.slice(o,s+1),f=s;f>=o&&p(e[f])&d;f--)l[f]=i.level;for(var c=i.level,u=1/0,v=0;v<l.length;v++){var h=l[v];h>c&&(c=h),h<u&&(u=1|h)}for(var g=c;g>=u;g--)for(var m=0;m<l.length;m++)if(l[m]>=g){for(var y=m;m+1<l.length&&l[m+1]>=g;)m++;m>y&&a.push([y+o,m+o])}}}),a}function H(e,t,r,n){for(var i=q(e,t,r,n),a=[],o=0;o<e.length;o++)a[o]=o;return i.forEach(function(e){for(var t=e[0],r=e[1],n=a.slice(t,r+1),i=n.length;i--;)a[r-i]=n[i]}),a}return e.closingToOpeningBracket=b,e.getBidiCharType=p,e.getBidiCharTypeName=function(e){return s[p(e)]},e.getCanonicalBracket=w,e.getEmbeddingLevels=function(e,t){for(var r=new Uint32Array(e.length),n=0;n<e.length;n++)r[n]=p(e[n]);var i=new Map;function a(e,t){var n=r[e];r[e]=t,i.set(n,i.get(n)-1),n&c&&i.set(c,i.get(c)-1),i.set(t,(i.get(t)||0)+1),t&c&&i.set(c,(i.get(c)||0)+1)}for(var o=new Uint8Array(e.length),s=new Map,v=[],h=null,g=0;g<e.length;g++)h||v.push(h={start:g,end:e.length-1,level:"rtl"===t?1:"ltr"===t?0:tU(g,!1)}),r[g]&D&&(h.end=g,h=null);for(var m=C|O|I|z|l|F|P|D,G=function(e){return e+(1&e?1:2)},q=function(e){return e+(1&e?2:1)},H=0;H<v.length;H++){var $=[{_level:(h=v[H]).level,_override:0,_isolate:0}],V=void 0,X=0,Y=0,Q=0;i.clear();for(var K=h.start;K<=h.end;K++){var J=r[K];if(V=$[$.length-1],i.set(J,(i.get(J)||0)+1),J&c&&i.set(c,(i.get(c)||0)+1),J&m){if(J&(C|O)){o[K]=V._level;var Z=(J===C?q:G)(V._level);!(Z<=125)||X||Y?!X&&Y++:$.push({_level:Z,_override:0,_isolate:0})}else if(J&(I|z)){o[K]=V._level;var ee=(J===I?q:G)(V._level);!(ee<=125)||X||Y?!X&&Y++:$.push({_level:ee,_override:J&I?E:x,_isolate:0})}else if(J&l){J&W&&(J=1===tU(K+1,!0)?N:j),o[K]=V._level,V._override&&a(K,V._override);var et=(J===N?q:G)(V._level);et<=125&&0===X&&0===Y?(Q++,$.push({_level:et,_override:0,_isolate:1,_isolInitIndex:K})):X++}else if(J&F){if(X>0)X--;else if(Q>0){for(Y=0;!$[$.length-1]._isolate;)$.pop();var er=$[$.length-1]._isolInitIndex;null!=er&&(s.set(er,K),s.set(K,er)),$.pop(),Q--}V=$[$.length-1],o[K]=V._level,V._override&&a(K,V._override)}else J&P?(0===X&&(Y>0?Y--:!V._isolate&&$.length>1&&($.pop(),V=$[$.length-1])),o[K]=V._level):J&D&&(o[K]=h.level)}else o[K]=V._level,V._override&&J!==R&&a(K,V._override)}for(var en=[],ei=null,ea=h.start;ea<=h.end;ea++){var eo=r[ea];if(!(eo&u)){var es=o[ea],el=eo&l,ef=eo===F;ei&&es===ei._level?(ei._end=ea,ei._endsWithIsolInit=el):en.push(ei={_start:ea,_end:ea,_level:es,_startsWithPDI:ef,_endsWithIsolInit:el})}}for(var ec=[],eu=0;eu<en.length;eu++){var ed=en[eu];if(!ed._startsWithPDI||ed._startsWithPDI&&!s.has(ed._start)){for(var ev=[ei=ed],ep=void 0;ei&&ei._endsWithIsolInit&&null!=(ep=s.get(ei._end));)for(var eh=eu+1;eh<en.length;eh++)if(en[eh]._start===ep){ev.push(ei=en[eh]);break}for(var eg=[],em=0;em<ev.length;em++)for(var ey=ev[em],eb=ey._start;eb<=ey._end;eb++)eg.push(eb);for(var ew=o[eg[0]],ex=h.level,eE=eg[0]-1;eE>=0;eE--)if(!(r[eE]&u)){ex=o[eE];break}var e_=eg[eg.length-1],eS=o[e_],eA=h.level;if(!(r[e_]&l)){for(var eL=e_+1;eL<=h.end;eL++)if(!(r[eL]&u)){eA=o[eL];break}}ec.push({_seqIndices:eg,_sosType:Math.max(ex,ew)%2?E:x,_eosType:Math.max(eA,eS)%2?E:x})}}for(var eM=0;eM<ec.length;eM++){var eD=ec[eM],eT=eD._seqIndices,eU=eD._sosType,eR=eD._eosType,ek=1&o[eT[0]]?E:x;if(i.get(k))for(var eB=0;eB<eT.length;eB++){var ez=eT[eB];if(r[ez]&k){for(var eI=eU,eO=eB-1;eO>=0;eO--)if(!(r[eT[eO]]&u)){eI=r[eT[eO]];break}a(ez,eI&(l|F)?U:eI)}}if(i.get(_))for(var eC=0;eC<eT.length;eC++){var eP=eT[eC];if(r[eP]&_)for(var ej=eC-1;ej>=-1;ej--){var eN=-1===ej?eU:r[eT[ej]];if(eN&f){eN===B&&a(eP,L);break}}}if(i.get(B))for(var eW=0;eW<eT.length;eW++){var eF=eT[eW];r[eF]&B&&a(eF,E)}if(i.get(S)||i.get(M))for(var eG=1;eG<eT.length-1;eG++){var eq=eT[eG];if(r[eq]&(S|M)){for(var eH=0,e$=0,eV=eG-1;eV>=0&&(eH=r[eT[eV]])&u;eV--);for(var eX=eG+1;eX<eT.length&&(e$=r[eT[eX]])&u;eX++);eH===e$&&(r[eq]===S?eH===_:eH&(_|L))&&a(eq,eH)}}if(i.get(_)){for(var eY=0;eY<eT.length;eY++)if(r[eT[eY]]&_){for(var eQ=eY-1;eQ>=0&&r[eT[eQ]]&(A|u);eQ--)a(eT[eQ],_);for(eY++;eY<eT.length&&r[eT[eY]]&(A|u|_);eY++)r[eT[eY]]!==_&&a(eT[eY],_)}}if(i.get(A)||i.get(S)||i.get(M))for(var eK=0;eK<eT.length;eK++){var eJ=eT[eK];if(r[eJ]&(A|S|M)){a(eJ,U);for(var eZ=eK-1;eZ>=0&&r[eT[eZ]]&u;eZ--)a(eT[eZ],U);for(var e1=eK+1;e1<eT.length&&r[eT[e1]]&u;e1++)a(eT[e1],U)}}if(i.get(_))for(var e0=0,e2=eU;e0<eT.length;e0++){var e3=eT[e0],e4=r[e3];e4&_?e2===x&&a(e3,x):e4&f&&(e2=e4)}if(i.get(c)){for(var e5=E|_|L,e6=e5|x,e7=[],e8=[],e9=0;e9<eT.length;e9++)if(r[eT[e9]]&c){var te=e[eT[e9]],tt=void 0;if(null!==y(te)){if(e8.length<63)e8.push({char:te,seqIndex:e9});else break}else if(null!==(tt=b(te)))for(var tr=e8.length-1;tr>=0;tr--){var tn=e8[tr].char;if(tn===tt||tn===b(w(te))||y(w(tn))===te){e7.push([e8[tr].seqIndex,e9]),e8.length=tr;break}}}e7.sort(function(e,t){return e[0]-t[0]});for(var ti=0;ti<e7.length;ti++){for(var ta=e7[ti],to=ta[0],ts=ta[1],tl=!1,tf=0,tc=to+1;tc<ts;tc++){var tu=eT[tc];if(r[tu]&e6){tl=!0;var td=r[tu]&e5?E:x;if(td===ek){tf=td;break}}}if(tl&&!tf){tf=eU;for(var tv=to-1;tv>=0;tv--){var tp=eT[tv];if(r[tp]&e6){var th=r[tp]&e5?E:x;tf=th!==ek?th:ek;break}}}if(tf){if(r[eT[to]]=r[eT[ts]]=tf,tf!==ek){for(var tg=to+1;tg<eT.length;tg++)if(!(r[eT[tg]]&u)){p(e[eT[tg]])&k&&(r[eT[tg]]=tf);break}}if(tf!==ek){for(var tm=ts+1;tm<eT.length;tm++)if(!(r[eT[tm]]&u)){p(e[eT[tm]])&k&&(r[eT[tm]]=tf);break}}}}for(var ty=0;ty<eT.length;ty++)if(r[eT[ty]]&c){for(var tb=ty,tw=ty,tx=eU,tE=ty-1;tE>=0;tE--)if(r[eT[tE]]&u)tb=tE;else{tx=r[eT[tE]]&e5?E:x;break}for(var t_=eR,tS=ty+1;tS<eT.length;tS++)if(r[eT[tS]]&(c|u))tw=tS;else{t_=r[eT[tS]]&e5?E:x;break}for(var tA=tb;tA<=tw;tA++)r[eT[tA]]=tx===t_?tx:ek;ty=tw}}}for(var tL=h.start;tL<=h.end;tL++){var tM=o[tL],tD=r[tL];if(1&tM?tD&(x|_|L)&&o[tL]++:tD&E?o[tL]++:tD&(L|_)&&(o[tL]+=2),tD&u&&(o[tL]=0===tL?h.level:o[tL-1]),tL===h.end||p(e[tL])&(T|D))for(var tT=tL;tT>=0&&p(e[tT])&d;tT--)o[tT]=h.level}}return{levels:o,paragraphs:v};function tU(t,n){for(var i=t;i<e.length;i++){var a=r[i];if(a&(E|B))return 1;if(a&(D|x)||n&&a===F)break;if(a&l){var o=function(t){for(var n=1,i=t+1;i<e.length;i++){var a=r[i];if(a&D)break;if(a&F){if(0==--n)return i}else a&l&&n++}return -1}(i);i=-1===o?e.length:o}}return 0}},e.getMirroredCharacter=G,e.getMirroredCharactersMap=function(e,t,r,n){var i=e.length;r=Math.max(0,null==r?0:+r),n=Math.min(i-1,null==n?i-1:+n);for(var a=new Map,o=r;o<=n;o++)if(1&t[o]){var s=G(e[o]);null!==s&&a.set(o,s)}return a},e.getReorderSegments=q,e.getReorderedIndices=H,e.getReorderedString=function(e,t,r,n){var i=H(e,t,r,n),a=[].concat(e);return i.forEach(function(r,n){a[n]=(1&t.levels[r]?G(e[r]):null)||e[r]}),a.join("")},e.openingToClosingBracket=y,Object.defineProperty(e,"__esModule",{value:!0}),e}({})}},5830:(e,t,r)=>{let n,i;r.d(t,{ON:()=>p});var a=r(9630),o=r(3264),s=r(2115),l=r(544);o.YJl;let f=s.createContext(null),c=new o.kn4,u=new o.Pq0,d=s.forwardRef(({children:e,range:t,limit:r=1e3,...d},v)=>{let p=s.useRef(null);s.useImperativeHandle(v,()=>p.current,[]);let[h,g]=s.useState([]),[[m,y,b]]=s.useState(()=>[new Float32Array(3*r),Float32Array.from({length:3*r},()=>1),Float32Array.from({length:r},()=>1)]);s.useEffect(()=>{p.current.geometry.attributes.position.needsUpdate=!0}),(0,l.C)(()=>{for(p.current.updateMatrix(),p.current.updateMatrixWorld(),c.copy(p.current.matrixWorld).invert(),p.current.geometry.drawRange.count=Math.min(r,void 0!==t?t:r,h.length),n=0;n<h.length;n++)(i=h[n].current).getWorldPosition(u).applyMatrix4(c),u.toArray(m,3*n),p.current.geometry.attributes.position.needsUpdate=!0,i.matrixWorldNeedsUpdate=!0,i.color.toArray(y,3*n),p.current.geometry.attributes.color.needsUpdate=!0,b.set([i.size],n),p.current.geometry.attributes.size.needsUpdate=!0});let w=s.useMemo(()=>({getParent:()=>p,subscribe:e=>(g(t=>[...t,e]),()=>g(t=>t.filter(t=>t.current!==e.current)))}),[]);return s.createElement("points",(0,a.A)({userData:{instances:h},matrixAutoUpdate:!1,ref:p,raycast:()=>null},d),s.createElement("bufferGeometry",null,s.createElement("bufferAttribute",{attach:"attributes-position",args:[m,3],usage:o.Vnu}),s.createElement("bufferAttribute",{attach:"attributes-color",args:[y,3],usage:o.Vnu}),s.createElement("bufferAttribute",{attach:"attributes-size",args:[b,1],usage:o.Vnu})),s.createElement(f.Provider,{value:w},e))}),v=s.forwardRef(({children:e,positions:t,colors:r,sizes:n,stride:i=3,...f},c)=>{let u=s.useRef(null);return s.useImperativeHandle(c,()=>u.current,[]),(0,l.C)(()=>{let e=u.current.geometry.attributes;e.position.needsUpdate=!0,r&&(e.color.needsUpdate=!0),n&&(e.size.needsUpdate=!0)}),s.createElement("points",(0,a.A)({ref:u},f),s.createElement("bufferGeometry",null,s.createElement("bufferAttribute",{attach:"attributes-position",args:[t,i],usage:o.Vnu}),r&&s.createElement("bufferAttribute",{attach:"attributes-color",args:[r,i],count:r.length/i,usage:o.Vnu}),n&&s.createElement("bufferAttribute",{attach:"attributes-size",args:[n,1],count:n.length/i,usage:o.Vnu})),e)}),p=s.forwardRef((e,t)=>e.positions instanceof Float32Array?s.createElement(v,(0,a.A)({},e,{ref:t})):s.createElement(d,(0,a.A)({},e,{ref:t})))},6604:(e,t,r)=>{r.d(t,{W:()=>o});var n=r(2115),i=r(4438);let a={some:0,all:1};function o(e,{root:t,margin:r,amount:s,once:l=!1,initial:f=!1}={}){let[c,u]=(0,n.useState)(f);return(0,n.useEffect)(()=>{if(!e.current||l&&c)return;let n={root:t&&t.current||void 0,margin:r,amount:s};return function(e,t,{root:r,margin:n,amount:o="some"}={}){let s=(0,i.KJ)(e),l=new WeakMap,f=new IntersectionObserver(e=>{e.forEach(e=>{let r=l.get(e.target);if(!!r!==e.isIntersecting){if(e.isIntersecting){let r=t(e.target,e);"function"==typeof r?l.set(e.target,r):f.unobserve(e.target)}else"function"==typeof r&&(r(e),l.delete(e.target))}})},{root:r,rootMargin:n,threshold:"number"==typeof o?o:a[o]});return s.forEach(e=>f.observe(e)),()=>f.disconnect()}(e.current,()=>(u(!0),l?void 0:()=>u(!1)),n)},[t,e,r,l,s]),c}},6634:(e,t,r)=>{r.d(t,{A:()=>n});function n(){return function(e){function t(e,t){for(var r,n,i,a,o,s=/([MLQCZ])([^MLQCZ]*)/g;r=s.exec(e);){var l=r[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(e){return parseFloat(e)});switch(r[1]){case"M":a=n=l[0],o=i=l[1];break;case"L":(l[0]!==a||l[1]!==o)&&t("L",a,o,a=l[0],o=l[1]);break;case"Q":t("Q",a,o,a=l[2],o=l[3],l[0],l[1]);break;case"C":t("C",a,o,a=l[4],o=l[5],l[0],l[1],l[2],l[3]);break;case"Z":(a!==n||o!==i)&&t("L",a,o,n,i)}}}function r(e,r,n){void 0===n&&(n=16);var i={x:0,y:0};t(e,function(e,t,a,o,s,l,f,c,u){switch(e){case"L":r(t,a,o,s);break;case"Q":for(var d=t,v=a,p=1;p<n;p++)!function(e,t,r,n,i,a,o,s){var l=1-o;s.x=l*l*e+2*l*o*r+o*o*i,s.y=l*l*t+2*l*o*n+o*o*a}(t,a,l,f,o,s,p/(n-1),i),r(d,v,i.x,i.y),d=i.x,v=i.y;break;case"C":for(var h=t,g=a,m=1;m<n;m++)!function(e,t,r,n,i,a,o,s,l,f){var c=1-l;f.x=c*c*c*e+3*c*c*l*r+3*c*l*l*i+l*l*l*o,f.y=c*c*c*t+3*c*c*l*n+3*c*l*l*a+l*l*l*s}(t,a,l,f,c,u,o,s,m/(n-1),i),r(h,g,i.x,i.y),h=i.x,g=i.y}})}var n="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",i=new WeakMap,a={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function o(e,t){var r=e.getContext?e.getContext("webgl",a):e,n=i.get(r);if(!n){var o="undefined"!=typeof WebGL2RenderingContext&&r instanceof WebGL2RenderingContext,s={},l={},f={},c=-1,u=[];function d(e){var t=s[e];if(!t&&!(t=s[e]=r.getExtension(e)))throw Error(e+" not supported");return t}function v(e,t){var n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}function p(){s={},l={},f={},c=-1,u.length=0}r.canvas.addEventListener("webglcontextlost",function(e){p(),e.preventDefault()},!1),i.set(r,n={gl:r,isWebGL2:o,getExtension:d,withProgram:function(e,t,n,i){if(!l[e]){var a={},s={},f=r.createProgram();r.attachShader(f,v(t,r.VERTEX_SHADER)),r.attachShader(f,v(n,r.FRAGMENT_SHADER)),r.linkProgram(f),l[e]={program:f,transaction:function(e){r.useProgram(f),e({setUniform:function(e,t){for(var n=[],i=arguments.length-2;i-- >0;)n[i]=arguments[i+2];var a=s[t]||(s[t]=r.getUniformLocation(f,t));r["uniform"+e].apply(r,[a].concat(n))},setAttribute:function(e,t,n,i,s){var l=a[e];l||(l=a[e]={buf:r.createBuffer(),loc:r.getAttribLocation(f,e),data:null}),r.bindBuffer(r.ARRAY_BUFFER,l.buf),r.vertexAttribPointer(l.loc,t,r.FLOAT,!1,0,0),r.enableVertexAttribArray(l.loc),o?r.vertexAttribDivisor(l.loc,i):d("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(l.loc,i),s!==l.data&&(r.bufferData(r.ARRAY_BUFFER,s,n),l.data=s)}})}}}l[e].transaction(i)},withTexture:function(e,t){c++;try{r.activeTexture(r.TEXTURE0+c);var n=f[e];n||(n=f[e]=r.createTexture(),r.bindTexture(r.TEXTURE_2D,n),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST)),r.bindTexture(r.TEXTURE_2D,n),t(n,c)}finally{c--}},withTextureFramebuffer:function(e,t,n){var i=r.createFramebuffer();u.push(i),r.bindFramebuffer(r.FRAMEBUFFER,i),r.activeTexture(r.TEXTURE0+t),r.bindTexture(r.TEXTURE_2D,e),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);try{n(i)}finally{r.deleteFramebuffer(i),r.bindFramebuffer(r.FRAMEBUFFER,u[--u.length-1]||null)}},handleContextLoss:p})}t(n)}function s(e,t,r,i,a,s,l,f){void 0===l&&(l=15),void 0===f&&(f=null),o(e,function(e){var o=e.gl,c=e.withProgram;(0,e.withTexture)("copy",function(e,u){o.texImage2D(o.TEXTURE_2D,0,o.RGBA,a,s,0,o.RGBA,o.UNSIGNED_BYTE,t),c("copy",n,"precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",function(e){var t=e.setUniform;(0,e.setAttribute)("aUV",2,o.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),t("1i","image",u),o.bindFramebuffer(o.FRAMEBUFFER,f||null),o.disable(o.BLEND),o.colorMask(8&l,4&l,2&l,1&l),o.viewport(r,i,a,s),o.scissor(r,i,a,s),o.drawArrays(o.TRIANGLES,0,3)})})})}var l=Object.freeze({__proto__:null,withWebGLContext:o,renderImageData:s,resizeWebGLCanvasWithoutClearing:function(e,t,r){var n=e.width,i=e.height;o(e,function(a){var o=a.gl,l=new Uint8Array(n*i*4);o.readPixels(0,0,n,i,o.RGBA,o.UNSIGNED_BYTE,l),e.width=t,e.height=r,s(o,l,0,0,n,i)})}});function f(e,t,n,i,a,o){void 0===o&&(o=1);var s=new Uint8Array(e*t),l=i[2]-i[0],f=i[3]-i[1],c=[];r(n,function(e,t,r,n){c.push({x1:e,y1:t,x2:r,y2:n,minX:Math.min(e,r),minY:Math.min(t,n),maxX:Math.max(e,r),maxY:Math.max(t,n)})}),c.sort(function(e,t){return e.maxX-t.maxX});for(var u=0;u<e;u++)for(var d=0;d<t;d++){var v=function(e,t){for(var r=1/0,n=1/0,i=c.length;i--;){var a=c[i];if(a.maxX+n<=e)break;if(e+n>a.minX&&t-n<a.maxY&&t+n>a.minY){var o=function(e,t,r,n,i,a){var o=i-r,s=a-n,l=o*o+s*s,f=l?Math.max(0,Math.min(1,((e-r)*o+(t-n)*s)/l)):0,c=e-(r+f*o),u=t-(n+f*s);return c*c+u*u}(e,t,a.x1,a.y1,a.x2,a.y2);o<r&&(n=Math.sqrt(r=o))}}return function(e,t){for(var r=0,n=c.length;n--;){var i=c[n];if(i.maxX<=e)break;i.y1>t!=i.y2>t&&e<(i.x2-i.x1)*(t-i.y1)/(i.y2-i.y1)+i.x1&&(r+=i.y1<i.y2?1:-1)}return 0!==r}(e,t)&&(n=-n),n}(i[0]+l*(u+.5)/e,i[1]+f*(d+.5)/t),p=Math.pow(1-Math.abs(v)/a,o)/2;v<0&&(p=1-p),p=Math.max(0,Math.min(255,Math.round(255*p))),s[d*e+u]=p}return s}function c(e,t,r,n,i,a,o,s,l,f){void 0===a&&(a=1),void 0===s&&(s=0),void 0===l&&(l=0),void 0===f&&(f=0),u(e,t,r,n,i,a,o,null,s,l,f)}function u(e,t,r,n,i,a,o,l,c,u,d){void 0===a&&(a=1),void 0===c&&(c=0),void 0===u&&(u=0),void 0===d&&(d=0);for(var v=f(e,t,r,n,i,a),p=new Uint8Array(4*v.length),h=0;h<v.length;h++)p[4*h+d]=v[h];s(o,p,c,u,e,t,1<<3-d,l)}var d=Object.freeze({__proto__:null,generate:f,generateIntoCanvas:c,generateIntoFramebuffer:u}),v=new Float32Array([0,0,2,0,0,2]),p=null,h=!1,g={},m=new WeakMap;function y(e){if(!h&&!E(e))throw Error("WebGL generation not supported")}function b(e,t,r,n,i,a,s){if(void 0===a&&(a=1),void 0===s&&(s=null),!s&&!(s=p)){var l="function"==typeof OffscreenCanvas?new OffscreenCanvas(1,1):"undefined"!=typeof document?document.createElement("canvas"):null;if(!l)throw Error("OffscreenCanvas or DOM canvas not supported");s=p=l.getContext("webgl",{depth:!1})}y(s);var f=new Uint8Array(e*t*4);o(s,function(o){var s=o.gl,l=o.withTexture,c=o.withTextureFramebuffer;l("readable",function(o,l){s.texImage2D(s.TEXTURE_2D,0,s.RGBA,e,t,0,s.RGBA,s.UNSIGNED_BYTE,null),c(o,l,function(o){x(e,t,r,n,i,a,s,o,0,0,0),s.readPixels(0,0,e,t,s.RGBA,s.UNSIGNED_BYTE,f)})})});for(var c=new Uint8Array(e*t),u=0,d=0;u<f.length;u+=4)c[d++]=f[u];return c}function w(e,t,r,n,i,a,o,s,l,f){void 0===a&&(a=1),void 0===s&&(s=0),void 0===l&&(l=0),void 0===f&&(f=0),x(e,t,r,n,i,a,o,null,s,l,f)}function x(e,t,i,a,s,l,f,c,u,d,p){void 0===l&&(l=1),void 0===u&&(u=0),void 0===d&&(d=0),void 0===p&&(p=0),y(f);var h=[];r(i,function(e,t,r,n){h.push(e,t,r,n)}),h=new Float32Array(h),o(f,function(r){var i=r.gl,o=r.isWebGL2,f=r.getExtension,g=r.withProgram,m=r.withTexture,y=r.withTextureFramebuffer,b=r.handleContextLoss;if(m("rawDistances",function(r,m){(e!==r._lastWidth||t!==r._lastHeight)&&i.texImage2D(i.TEXTURE_2D,0,i.RGBA,r._lastWidth=e,r._lastHeight=t,0,i.RGBA,i.UNSIGNED_BYTE,null),g("main","precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}","precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",function(n){var c=n.setAttribute,u=n.setUniform,d=!o&&f("ANGLE_instanced_arrays"),p=!o&&f("EXT_blend_minmax");c("aUV",2,i.STATIC_DRAW,0,v),c("aLineSegment",4,i.DYNAMIC_DRAW,1,h),u.apply(void 0,["4f","uGlyphBounds"].concat(a)),u("1f","uMaxDistance",s),u("1f","uExponent",l),y(r,m,function(r){i.enable(i.BLEND),i.colorMask(!0,!0,!0,!0),i.viewport(0,0,e,t),i.scissor(0,0,e,t),i.blendFunc(i.ONE,i.ONE),i.blendEquationSeparate(i.FUNC_ADD,o?i.MAX:p.MAX_EXT),i.clear(i.COLOR_BUFFER_BIT),o?i.drawArraysInstanced(i.TRIANGLES,0,3,h.length/4):d.drawArraysInstancedANGLE(i.TRIANGLES,0,3,h.length/4)})}),g("post",n,"precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",function(r){r.setAttribute("aUV",2,i.STATIC_DRAW,0,v),r.setUniform("1i","tex",m),i.bindFramebuffer(i.FRAMEBUFFER,c),i.disable(i.BLEND),i.colorMask(0===p,1===p,2===p,3===p),i.viewport(u,d,e,t),i.scissor(u,d,e,t),i.drawArrays(i.TRIANGLES,0,3)})}),i.isContextLost())throw b(),Error("webgl context lost")})}function E(e){var t=e&&e!==p?e.canvas||e:g,r=m.get(t);if(void 0===r){h=!0;var n=null;try{var i=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],a=b(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,e);(r=a&&i.length===a.length&&a.every(function(e,t){return e===i[t]}))||(n="bad trial run results",console.info(i,a))}catch(e){r=!1,n=e.message}n&&console.warn("WebGL SDF generation not supported:",n),h=!1,m.set(t,r)}return r}var _=Object.freeze({__proto__:null,generate:b,generateIntoCanvas:w,generateIntoFramebuffer:x,isSupported:E});return e.forEachPathCommand=t,e.generate=function(e,t,r,n,i,a){void 0===i&&(i=Math.max(n[2]-n[0],n[3]-n[1])/2),void 0===a&&(a=1);try{return b.apply(_,arguments)}catch(e){return console.info("WebGL SDF generation failed, falling back to JS",e),f.apply(d,arguments)}},e.generateIntoCanvas=function(e,t,r,n,i,a,o,s,l,f){void 0===i&&(i=Math.max(n[2]-n[0],n[3]-n[1])/2),void 0===a&&(a=1),void 0===s&&(s=0),void 0===l&&(l=0),void 0===f&&(f=0);try{return w.apply(_,arguments)}catch(e){return console.info("WebGL SDF generation failed, falling back to JS",e),c.apply(d,arguments)}},e.javascript=d,e.pathToLineSegments=r,e.webgl=_,e.webglUtils=l,Object.defineProperty(e,"__esModule",{value:!0}),e}({})}},8413:(e,t,r)=>{let n,i;r.d(t,{N:()=>B});var a=r(9630),o=r(2115),s=r(3264),l=r(544);let f=new s.NRn,c=new s.Pq0;class u extends s.CmU{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new s.qtW([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new s.qtW([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),r.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let r=new s.LuO(t,6,1);return this.setAttribute("instanceStart",new s.eHs(r,3,0)),this.setAttribute("instanceEnd",new s.eHs(r,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let r;e instanceof Float32Array?r=e:Array.isArray(e)&&(r=new Float32Array(e));let n=new s.LuO(r,2*t,1);return this.setAttribute("instanceColorStart",new s.eHs(n,t,0)),this.setAttribute("instanceColorEnd",new s.eHs(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new s.XJ7(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new s.NRn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),f.setFromBufferAttribute(t),this.boundingBox.union(f))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new s.iyt),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let r=this.boundingSphere.center;this.boundingBox.getCenter(r);let n=0;for(let i=0,a=e.count;i<a;i++)c.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(c)),c.fromBufferAttribute(t,i),n=Math.max(n,r.distanceToSquared(c));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var d=r(7431),v=r(3625);class p extends s.BKk{constructor(e){super({type:"LineMaterial",uniforms:s.LlO.clone(s.LlO.merge([d.UniformsLib.common,d.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new s.I9Y(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${v.r>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let h=v.r>=125?"uv1":"uv2",g=new s.IUQ,m=new s.Pq0,y=new s.Pq0,b=new s.IUQ,w=new s.IUQ,x=new s.IUQ,E=new s.Pq0,_=new s.kn4,S=new s.cZY,A=new s.Pq0,L=new s.NRn,M=new s.iyt,D=new s.IUQ;function T(e,t,r){return D.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),D.multiplyScalar(1/D.w),D.x=i/r.width,D.y=i/r.height,D.applyMatrix4(e.projectionMatrixInverse),D.multiplyScalar(1/D.w),Math.abs(Math.max(D.x,D.y))}class U extends s.eaF{constructor(e=new u,t=new p({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)m.fromBufferAttribute(t,e),y.fromBufferAttribute(r,e),n[i]=0===i?0:n[i-1],n[i+1]=n[i]+m.distanceTo(y);let i=new s.LuO(n,2,1);return e.setAttribute("instanceDistanceStart",new s.eHs(i,1,0)),e.setAttribute("instanceDistanceEnd",new s.eHs(i,1,1)),this}raycast(e,t){let r,a;let o=this.material.worldUnits,l=e.camera;null!==l||o||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let f=void 0!==e.params.Line2&&e.params.Line2.threshold||0;n=e.ray;let c=this.matrixWorld,u=this.geometry,d=this.material;if(i=d.linewidth+f,null===u.boundingSphere&&u.computeBoundingSphere(),M.copy(u.boundingSphere).applyMatrix4(c),o)r=.5*i;else{let e=Math.max(l.near,M.distanceToPoint(n.origin));r=T(l,e,d.resolution)}if(M.radius+=r,!1!==n.intersectsSphere(M)){if(null===u.boundingBox&&u.computeBoundingBox(),L.copy(u.boundingBox).applyMatrix4(c),o)a=.5*i;else{let e=Math.max(l.near,L.distanceToPoint(n.origin));a=T(l,e,d.resolution)}L.expandByScalar(a),!1!==n.intersectsBox(L)&&(o?function(e,t){let r=e.matrixWorld,a=e.geometry,o=a.attributes.instanceStart,l=a.attributes.instanceEnd,f=Math.min(a.instanceCount,o.count);for(let a=0;a<f;a++){S.start.fromBufferAttribute(o,a),S.end.fromBufferAttribute(l,a),S.applyMatrix4(r);let f=new s.Pq0,c=new s.Pq0;n.distanceSqToSegment(S.start,S.end,c,f),c.distanceTo(f)<.5*i&&t.push({point:c,pointOnLine:f,distance:n.origin.distanceTo(c),object:e,face:null,faceIndex:a,uv:null,[h]:null})}}(this,t):function(e,t,r){let a=t.projectionMatrix,o=e.material.resolution,l=e.matrixWorld,f=e.geometry,c=f.attributes.instanceStart,u=f.attributes.instanceEnd,d=Math.min(f.instanceCount,c.count),v=-t.near;n.at(1,x),x.w=1,x.applyMatrix4(t.matrixWorldInverse),x.applyMatrix4(a),x.multiplyScalar(1/x.w),x.x*=o.x/2,x.y*=o.y/2,x.z=0,E.copy(x),_.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0;t<d;t++){if(b.fromBufferAttribute(c,t),w.fromBufferAttribute(u,t),b.w=1,w.w=1,b.applyMatrix4(_),w.applyMatrix4(_),b.z>v&&w.z>v)continue;if(b.z>v){let e=b.z-w.z,t=(b.z-v)/e;b.lerp(w,t)}else if(w.z>v){let e=w.z-b.z,t=(w.z-v)/e;w.lerp(b,t)}b.applyMatrix4(a),w.applyMatrix4(a),b.multiplyScalar(1/b.w),w.multiplyScalar(1/w.w),b.x*=o.x/2,b.y*=o.y/2,w.x*=o.x/2,w.y*=o.y/2,S.start.copy(b),S.start.z=0,S.end.copy(w),S.end.z=0;let f=S.closestPointToPointParameter(E,!0);S.at(f,A);let d=s.cj9.lerp(b.z,w.z,f),p=d>=-1&&d<=1,g=E.distanceTo(A)<.5*i;if(p&&g){S.start.fromBufferAttribute(c,t),S.end.fromBufferAttribute(u,t),S.start.applyMatrix4(l),S.end.applyMatrix4(l);let i=new s.Pq0,a=new s.Pq0;n.distanceSqToSegment(S.start,S.end,a,i),r.push({point:a,pointOnLine:i,distance:n.origin.distanceTo(a),object:e,face:null,faceIndex:t,uv:null,[h]:null})}}}(this,l,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(g),this.material.uniforms.resolution.value.set(g.z,g.w))}}class R extends u{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,r=new Float32Array(2*t);for(let n=0;n<t;n+=3)r[2*n]=e[n],r[2*n+1]=e[n+1],r[2*n+2]=e[n+2],r[2*n+3]=e[n+3],r[2*n+4]=e[n+4],r[2*n+5]=e[n+5];return super.setPositions(r),this}setColors(e,t=3){let r=e.length-t,n=new Float32Array(2*r);if(3===t)for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];else for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5],n[2*i+6]=e[i+6],n[2*i+7]=e[i+7];return super.setColors(n,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class k extends U{constructor(e=new R,t=new p({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let B=o.forwardRef(function({points:e,color:t=0xffffff,vertexColors:r,linewidth:n,lineWidth:i,segments:f,dashed:c,...d},v){var h,g;let m=(0,l.A)(e=>e.size),y=o.useMemo(()=>f?new U:new k,[f]),[b]=o.useState(()=>new p),w=(null==r||null==(h=r[0])?void 0:h.length)===4?4:3,x=o.useMemo(()=>{let n=f?new u:new R,i=e.map(e=>{let t=Array.isArray(e);return e instanceof s.Pq0||e instanceof s.IUQ?[e.x,e.y,e.z]:e instanceof s.I9Y?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(n.setPositions(i.flat()),r){t=0xffffff;let e=r.map(e=>e instanceof s.Q1f?e.toArray():e);n.setColors(e.flat(),w)}return n},[e,f,r,w]);return o.useLayoutEffect(()=>{y.computeLineDistances()},[e,y]),o.useLayoutEffect(()=>{c?b.defines.USE_DASH="":delete b.defines.USE_DASH,b.needsUpdate=!0},[c,b]),o.useEffect(()=>()=>{x.dispose(),b.dispose()},[x]),o.createElement("primitive",(0,a.A)({object:y,ref:v},d),o.createElement("primitive",{object:x,attach:"geometry"}),o.createElement("primitive",(0,a.A)({object:b,attach:"material",color:t,vertexColors:!!r,resolution:[m.width,m.height],linewidth:null!==(g=null!=n?n:i)&&void 0!==g?g:1,dashed:c,transparent:4===w},d)))})},8842:(e,t,r)=>{r.d(t,{E:()=>l});var n=r(9630),i=r(2115),a=r(1966),o=r(544),s=r(228);let l=i.forwardRef(({sdfGlyphSize:e=64,anchorX:t="center",anchorY:r="middle",font:l,fontSize:f=1,children:c,characters:u,onSync:d,...v},p)=>{let h=(0,o.A)(({invalidate:e})=>e),[g]=i.useState(()=>new a.EY),[m,y]=i.useMemo(()=>{let e=[],t="";return i.Children.forEach(c,r=>{"string"==typeof r||"number"==typeof r?t+=r:e.push(r)}),[e,t]},[c]);return(0,s.DY)(()=>new Promise(e=>(0,a.PY)({font:l,characters:u},e)),["troika-text",l,u]),i.useLayoutEffect(()=>void g.sync(()=>{h(),d&&d(g)})),i.useEffect(()=>()=>g.dispose(),[g]),i.createElement("primitive",(0,n.A)({object:g,ref:p,font:l,text:y,anchorX:t,anchorY:r,fontSize:f,sdfGlyphSize:e},v),m)})},9107:(e,t,r)=>{r.d(t,{q:()=>f});var n=r(9630),i=r(3264),a=r(2115);let o=parseInt(i.sPf.replace(/\D+/g,"")),s=o>=154?"opaque_fragment":"output_fragment";class l extends i.BH${constructor(e){super(e),this.onBeforeCompile=(e,t)=>{let{isWebGL2:r}=t.capabilities;e.fragmentShader=e.fragmentShader.replace(`#include <${s}>`,`
        ${r?`#include <${s}>`:`#extension GL_OES_standard_derivatives : enable
#include <${s}>`}
      vec2 cxy = 2.0 * gl_PointCoord - 1.0;
      float r = dot(cxy, cxy);
      float delta = fwidth(r);     
      float mask = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
      gl_FragColor = vec4(gl_FragColor.rgb, mask * gl_FragColor.a );
      #include <tonemapping_fragment>
      #include <${o>=154?"colorspace_fragment":"encodings_fragment"}>
      `)}}}let f=a.forwardRef((e,t)=>{let[r]=a.useState(()=>new l(null));return a.createElement("primitive",(0,n.A)({},e,{object:r,ref:t,attach:"material"}))})}}]);