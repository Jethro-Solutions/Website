"use strict";exports.id=137,exports.ids=[137],exports.modules={33240:(e,t,n)=>{n.d(t,{q:()=>c});var i=n(80828),a=n(4546),o=n(43210);let r=parseInt(a.sPf.replace(/\D+/g,"")),s=r>=154?"opaque_fragment":"output_fragment";class l extends a.BH${constructor(e){super(e),this.onBeforeCompile=(e,t)=>{let{isWebGL2:n}=t.capabilities;e.fragmentShader=e.fragmentShader.replace(`#include <${s}>`,`
        ${n?`#include <${s}>`:`#extension GL_OES_standard_derivatives : enable
#include <${s}>`}
      vec2 cxy = 2.0 * gl_PointCoord - 1.0;
      float r = dot(cxy, cxy);
      float delta = fwidth(r);     
      float mask = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
      gl_FragColor = vec4(gl_FragColor.rgb, mask * gl_FragColor.a );
      #include <tonemapping_fragment>
      #include <${r>=154?"colorspace_fragment":"encodings_fragment"}>
      `)}}}let c=o.forwardRef((e,t)=>{let[n]=o.useState(()=>new l(null));return o.createElement("primitive",(0,i.A)({},e,{object:n,ref:t,attach:"material"}))})},50473:(e,t,n)=>{n.d(t,{N:()=>y});var i=n(80828),a=n(53524),o=n(43210),r=n(4546),s=Object.defineProperty,l=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t,n)=>(l(e,"symbol"!=typeof t?t+"":t,n),n);class d{constructor(){c(this,"_listeners")}addEventListener(e,t){void 0===this._listeners&&(this._listeners={});let n=this._listeners;void 0===n[e]&&(n[e]=[]),-1===n[e].indexOf(t)&&n[e].push(t)}hasEventListener(e,t){if(void 0===this._listeners)return!1;let n=this._listeners;return void 0!==n[e]&&-1!==n[e].indexOf(t)}removeEventListener(e,t){if(void 0===this._listeners)return;let n=this._listeners[e];if(void 0!==n){let e=n.indexOf(t);-1!==e&&n.splice(e,1)}}dispatchEvent(e){if(void 0===this._listeners)return;let t=this._listeners[e.type];if(void 0!==t){e.target=this;let n=t.slice(0);for(let t=0,i=n.length;t<i;t++)n[t].call(this,e);e.target=null}}}var u=Object.defineProperty,f=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t,n)=>(f(e,"symbol"!=typeof t?t+"":t,n),n);let m=new r.RlV,h=new r.Zcv,v=Math.cos(Math.PI/180*70),g=(e,t)=>(e%t+t)%t;class b extends d{constructor(e,t){super(),p(this,"object"),p(this,"domElement"),p(this,"enabled",!0),p(this,"target",new r.Pq0),p(this,"minDistance",0),p(this,"maxDistance",1/0),p(this,"minZoom",0),p(this,"maxZoom",1/0),p(this,"minPolarAngle",0),p(this,"maxPolarAngle",Math.PI),p(this,"minAzimuthAngle",-1/0),p(this,"maxAzimuthAngle",1/0),p(this,"enableDamping",!1),p(this,"dampingFactor",.05),p(this,"enableZoom",!0),p(this,"zoomSpeed",1),p(this,"enableRotate",!0),p(this,"rotateSpeed",1),p(this,"enablePan",!0),p(this,"panSpeed",1),p(this,"screenSpacePanning",!0),p(this,"keyPanSpeed",7),p(this,"zoomToCursor",!1),p(this,"autoRotate",!1),p(this,"autoRotateSpeed",2),p(this,"reverseOrbit",!1),p(this,"reverseHorizontalOrbit",!1),p(this,"reverseVerticalOrbit",!1),p(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),p(this,"mouseButtons",{LEFT:r.kBv.ROTATE,MIDDLE:r.kBv.DOLLY,RIGHT:r.kBv.PAN}),p(this,"touches",{ONE:r.wtR.ROTATE,TWO:r.wtR.DOLLY_PAN}),p(this,"target0"),p(this,"position0"),p(this,"zoom0"),p(this,"_domElementKeyEvents",null),p(this,"getPolarAngle"),p(this,"getAzimuthalAngle"),p(this,"setPolarAngle"),p(this,"setAzimuthalAngle"),p(this,"getDistance"),p(this,"getZoomScale"),p(this,"listenToKeyEvents"),p(this,"stopListenToKeyEvents"),p(this,"saveState"),p(this,"reset"),p(this,"update"),p(this,"connect"),p(this,"dispose"),p(this,"dollyIn"),p(this,"dollyOut"),p(this,"getScale"),p(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>d.phi,this.getAzimuthalAngle=()=>d.theta,this.setPolarAngle=e=>{let t=g(e,2*Math.PI),i=d.phi;i<0&&(i+=2*Math.PI),t<0&&(t+=2*Math.PI);let a=Math.abs(t-i);2*Math.PI-a<a&&(t<i?t+=2*Math.PI:i+=2*Math.PI),u.phi=t-i,n.update()},this.setAzimuthalAngle=e=>{let t=g(e,2*Math.PI),i=d.theta;i<0&&(i+=2*Math.PI),t<0&&(t+=2*Math.PI);let a=Math.abs(t-i);2*Math.PI-a<a&&(t<i?t+=2*Math.PI:i+=2*Math.PI),u.theta=t-i,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",ee),this._domElementKeyEvents=e},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),l=s.NONE},this.update=(()=>{let t=new r.Pq0,a=new r.Pq0(0,1,0),o=new r.PTz().setFromUnitVectors(e.up,a),p=o.clone().invert(),g=new r.Pq0,y=new r.PTz,E=2*Math.PI;return function(){let w=n.object.position;o.setFromUnitVectors(e.up,a),p.copy(o).invert(),t.copy(w).sub(n.target),t.applyQuaternion(o),d.setFromVector3(t),n.autoRotate&&l===s.NONE&&C(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(d.theta+=u.theta*n.dampingFactor,d.phi+=u.phi*n.dampingFactor):(d.theta+=u.theta,d.phi+=u.phi);let S=n.minAzimuthAngle,x=n.maxAzimuthAngle;isFinite(S)&&isFinite(x)&&(S<-Math.PI?S+=E:S>Math.PI&&(S-=E),x<-Math.PI?x+=E:x>Math.PI&&(x-=E),S<=x?d.theta=Math.max(S,Math.min(x,d.theta)):d.theta=d.theta>(S+x)/2?Math.max(S,d.theta):Math.min(x,d.theta)),d.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,d.phi)),d.makeSafe(),!0===n.enableDamping?n.target.addScaledVector(b,n.dampingFactor):n.target.add(b),n.zoomToCursor&&T||n.object.isOrthographicCamera?d.radius=k(d.radius):d.radius=k(d.radius*f),t.setFromSpherical(d),t.applyQuaternion(p),w.copy(n.target).add(t),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),!0===n.enableDamping?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,b.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),b.set(0,0,0));let A=!1;if(n.zoomToCursor&&T){let i=null;if(n.object instanceof r.ubm&&n.object.isPerspectiveCamera){let e=t.length();i=k(e*f);let a=e-i;n.object.position.addScaledVector(_,a),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let e=new r.Pq0(M.x,M.y,0);e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),A=!0;let a=new r.Pq0(M.x,M.y,0);a.unproject(n.object),n.object.position.sub(a).add(e),n.object.updateMatrixWorld(),i=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;null!==i&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(i).add(n.object.position):(m.origin.copy(n.object.position),m.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(m.direction))<v?e.lookAt(n.target):(h.setFromNormalAndCoplanarPoint(n.object.up,n.target),m.intersectPlane(h,n.target))))}else n.object instanceof r.qUd&&n.object.isOrthographicCamera&&(A=1!==f)&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix());return f=1,T=!1,!!(A||g.distanceToSquared(n.object.position)>c||8*(1-y.dot(n.object.quaternion))>c)&&(n.dispatchEvent(i),g.copy(n.object.position),y.copy(n.object.quaternion),A=!1,!0)}})(),this.connect=e=>{n.domElement=e,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",et),n.domElement.addEventListener("pointerdown",K),n.domElement.addEventListener("pointercancel",$),n.domElement.addEventListener("wheel",J)},this.dispose=()=>{var e,t,i,a,o,r;n.domElement&&(n.domElement.style.touchAction="auto"),null==(e=n.domElement)||e.removeEventListener("contextmenu",et),null==(t=n.domElement)||t.removeEventListener("pointerdown",K),null==(i=n.domElement)||i.removeEventListener("pointercancel",$),null==(a=n.domElement)||a.removeEventListener("wheel",J),null==(o=n.domElement)||o.ownerDocument.removeEventListener("pointermove",Q),null==(r=n.domElement)||r.ownerDocument.removeEventListener("pointerup",$),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",ee)};let n=this,i={type:"change"},a={type:"start"},o={type:"end"},s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},l=s.NONE,c=1e-6,d=new r.YHV,u=new r.YHV,f=1,b=new r.Pq0,y=new r.I9Y,E=new r.I9Y,w=new r.I9Y,S=new r.I9Y,x=new r.I9Y,A=new r.I9Y,P=new r.I9Y,L=new r.I9Y,O=new r.I9Y,_=new r.Pq0,M=new r.I9Y,T=!1,j=[],z={};function U(){return Math.pow(.95,n.zoomSpeed)}function C(e){n.reverseOrbit||n.reverseHorizontalOrbit?u.theta+=e:u.theta-=e}function I(e){n.reverseOrbit||n.reverseVerticalOrbit?u.phi+=e:u.phi-=e}let D=(()=>{let e=new r.Pq0;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),b.add(e)}})(),R=(()=>{let e=new r.Pq0;return function(t,i){!0===n.screenSpacePanning?e.setFromMatrixColumn(i,1):(e.setFromMatrixColumn(i,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),b.add(e)}})(),N=(()=>{let e=new r.Pq0;return function(t,i){let a=n.domElement;if(a&&n.object instanceof r.ubm&&n.object.isPerspectiveCamera){let o=n.object.position;e.copy(o).sub(n.target);let r=e.length();D(2*t*(r*=Math.tan(n.object.fov/2*Math.PI/180))/a.clientHeight,n.object.matrix),R(2*i*r/a.clientHeight,n.object.matrix)}else a&&n.object instanceof r.qUd&&n.object.isOrthographicCamera?(D(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),R(i*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function H(e){n.object instanceof r.ubm&&n.object.isPerspectiveCamera||n.object instanceof r.qUd&&n.object.isOrthographicCamera?f=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(e){if(!n.zoomToCursor||!n.domElement)return;T=!0;let t=n.domElement.getBoundingClientRect(),i=e.clientX-t.left,a=e.clientY-t.top,o=t.width,r=t.height;M.x=i/o*2-1,M.y=-(a/r*2)+1,_.set(M.x,M.y,1).unproject(n.object).sub(n.object.position).normalize()}function k(e){return Math.max(n.minDistance,Math.min(n.maxDistance,e))}function Y(e){y.set(e.clientX,e.clientY)}function F(e){S.set(e.clientX,e.clientY)}function q(){if(1==j.length)y.set(j[0].pageX,j[0].pageY);else{let e=.5*(j[0].pageX+j[1].pageX),t=.5*(j[0].pageY+j[1].pageY);y.set(e,t)}}function V(){if(1==j.length)S.set(j[0].pageX,j[0].pageY);else{let e=.5*(j[0].pageX+j[1].pageX),t=.5*(j[0].pageY+j[1].pageY);S.set(e,t)}}function W(){let e=j[0].pageX-j[1].pageX,t=j[0].pageY-j[1].pageY,n=Math.sqrt(e*e+t*t);P.set(0,n)}function G(e){if(1==j.length)E.set(e.pageX,e.pageY);else{let t=ei(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);E.set(n,i)}w.subVectors(E,y).multiplyScalar(n.rotateSpeed);let t=n.domElement;t&&(C(2*Math.PI*w.x/t.clientHeight),I(2*Math.PI*w.y/t.clientHeight)),y.copy(E)}function X(e){if(1==j.length)x.set(e.pageX,e.pageY);else{let t=ei(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);x.set(n,i)}A.subVectors(x,S).multiplyScalar(n.panSpeed),N(A.x,A.y),S.copy(x)}function Z(e){var t;let i=ei(e),a=e.pageX-i.x,o=e.pageY-i.y,r=Math.sqrt(a*a+o*o);L.set(0,r),O.set(0,Math.pow(L.y/P.y,n.zoomSpeed)),t=O.y,H(f/t),P.copy(L)}function K(e){var t,i,o;!1!==n.enabled&&(0===j.length&&(null==(t=n.domElement)||t.ownerDocument.addEventListener("pointermove",Q),null==(i=n.domElement)||i.ownerDocument.addEventListener("pointerup",$)),o=e,j.push(o),"touch"===e.pointerType?function(e){switch(en(e),j.length){case 1:switch(n.touches.ONE){case r.wtR.ROTATE:if(!1===n.enableRotate)return;q(),l=s.TOUCH_ROTATE;break;case r.wtR.PAN:if(!1===n.enablePan)return;V(),l=s.TOUCH_PAN;break;default:l=s.NONE}break;case 2:switch(n.touches.TWO){case r.wtR.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&W(),n.enablePan&&V(),l=s.TOUCH_DOLLY_PAN;break;case r.wtR.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&W(),n.enableRotate&&q(),l=s.TOUCH_DOLLY_ROTATE;break;default:l=s.NONE}break;default:l=s.NONE}l!==s.NONE&&n.dispatchEvent(a)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case r.kBv.DOLLY:if(!1===n.enableZoom)return;B(e),P.set(e.clientX,e.clientY),l=s.DOLLY;break;case r.kBv.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;F(e),l=s.PAN}else{if(!1===n.enableRotate)return;Y(e),l=s.ROTATE}break;case r.kBv.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;Y(e),l=s.ROTATE}else{if(!1===n.enablePan)return;F(e),l=s.PAN}break;default:l=s.NONE}l!==s.NONE&&n.dispatchEvent(a)}(e))}function Q(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(en(e),l){case s.TOUCH_ROTATE:if(!1===n.enableRotate)return;G(e),n.update();break;case s.TOUCH_PAN:if(!1===n.enablePan)return;X(e),n.update();break;case s.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&Z(e),n.enablePan&&X(e),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&Z(e),n.enableRotate&&G(e),n.update();break;default:l=s.NONE}}(e):function(e){if(!1!==n.enabled)switch(l){case s.ROTATE:if(!1===n.enableRotate)return;!function(e){E.set(e.clientX,e.clientY),w.subVectors(E,y).multiplyScalar(n.rotateSpeed);let t=n.domElement;t&&(C(2*Math.PI*w.x/t.clientHeight),I(2*Math.PI*w.y/t.clientHeight)),y.copy(E),n.update()}(e);break;case s.DOLLY:var t,i,a;if(!1===n.enableZoom)return;t=e,(L.set(t.clientX,t.clientY),O.subVectors(L,P),O.y>0)?(i=U(),H(f/i)):O.y<0&&(a=U(),H(f*a)),P.copy(L),n.update();break;case s.PAN:if(!1===n.enablePan)return;x.set(e.clientX,e.clientY),A.subVectors(x,S).multiplyScalar(n.panSpeed),N(A.x,A.y),S.copy(x),n.update()}}(e))}function $(e){var t,i,a;(function(e){delete z[e.pointerId];for(let t=0;t<j.length;t++)if(j[t].pointerId==e.pointerId){j.splice(t,1);return}})(e),0===j.length&&(null==(t=n.domElement)||t.releasePointerCapture(e.pointerId),null==(i=n.domElement)||i.ownerDocument.removeEventListener("pointermove",Q),null==(a=n.domElement)||a.ownerDocument.removeEventListener("pointerup",$)),n.dispatchEvent(o),l=s.NONE}function J(e){if(!1!==n.enabled&&!1!==n.enableZoom&&(l===s.NONE||l===s.ROTATE)){var t,i,r;e.preventDefault(),n.dispatchEvent(a),(B(t=e),t.deltaY<0)?(i=U(),H(f*i)):t.deltaY>0&&(r=U(),H(f/r)),n.update(),n.dispatchEvent(o)}}function ee(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:N(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:N(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:N(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:N(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function et(e){!1!==n.enabled&&e.preventDefault()}function en(e){let t=z[e.pointerId];void 0===t&&(t=new r.I9Y,z[e.pointerId]=t),t.set(e.pageX,e.pageY)}function ei(e){return z[(e.pointerId===j[0].pointerId?j[1]:j[0]).pointerId]}this.dollyIn=(e=U())=>{H(f*e),n.update()},this.dollyOut=(e=U())=>{H(f/e),n.update()},this.getScale=()=>f,this.setScale=e=>{H(e),n.update()},this.getZoomScale=()=>U(),void 0!==t&&this.connect(t),this.update()}}let y=o.forwardRef(({makeDefault:e,camera:t,regress:n,domElement:r,enableDamping:s=!0,keyEvents:l=!1,onChange:c,onStart:d,onEnd:u,...f},p)=>{let m=(0,a.A)(e=>e.invalidate),h=(0,a.A)(e=>e.camera),v=(0,a.A)(e=>e.gl),g=(0,a.A)(e=>e.events),y=(0,a.A)(e=>e.setEvents),E=(0,a.A)(e=>e.set),w=(0,a.A)(e=>e.get),S=(0,a.A)(e=>e.performance),x=t||h,A=r||g.connected||v.domElement,P=o.useMemo(()=>new b(x),[x]);return(0,a.C)(()=>{P.enabled&&P.update()},-1),o.useEffect(()=>(l&&P.connect(!0===l?A:l),P.connect(A),()=>void P.dispose()),[l,A,n,P,m]),o.useEffect(()=>{let e=e=>{m(),n&&S.regress(),c&&c(e)},t=e=>{d&&d(e)},i=e=>{u&&u(e)};return P.addEventListener("change",e),P.addEventListener("start",t),P.addEventListener("end",i),()=>{P.removeEventListener("start",t),P.removeEventListener("end",i),P.removeEventListener("change",e)}},[c,d,u,P,m,y]),o.useEffect(()=>{if(e){let e=w().controls;return E({controls:P}),()=>E({controls:e})}},[e,P]),o.createElement("primitive",(0,i.A)({ref:p,object:P,enableDamping:s},f))})},98698:(e,t,n)=>{let i,a;n.d(t,{ON:()=>m});var o=n(80828),r=n(4546),s=n(43210),l=n(53524);r.YJl;let c=s.createContext(null),d=new r.kn4,u=new r.Pq0,f=s.forwardRef(({children:e,range:t,limit:n=1e3,...f},p)=>{let m=s.useRef(null);s.useImperativeHandle(p,()=>m.current,[]);let[h,v]=s.useState([]),[[g,b,y]]=s.useState(()=>[new Float32Array(3*n),Float32Array.from({length:3*n},()=>1),Float32Array.from({length:n},()=>1)]);s.useEffect(()=>{m.current.geometry.attributes.position.needsUpdate=!0}),(0,l.C)(()=>{for(m.current.updateMatrix(),m.current.updateMatrixWorld(),d.copy(m.current.matrixWorld).invert(),m.current.geometry.drawRange.count=Math.min(n,void 0!==t?t:n,h.length),i=0;i<h.length;i++)(a=h[i].current).getWorldPosition(u).applyMatrix4(d),u.toArray(g,3*i),m.current.geometry.attributes.position.needsUpdate=!0,a.matrixWorldNeedsUpdate=!0,a.color.toArray(b,3*i),m.current.geometry.attributes.color.needsUpdate=!0,y.set([a.size],i),m.current.geometry.attributes.size.needsUpdate=!0});let E=s.useMemo(()=>({getParent:()=>m,subscribe:e=>(v(t=>[...t,e]),()=>v(t=>t.filter(t=>t.current!==e.current)))}),[]);return s.createElement("points",(0,o.A)({userData:{instances:h},matrixAutoUpdate:!1,ref:m,raycast:()=>null},f),s.createElement("bufferGeometry",null,s.createElement("bufferAttribute",{attach:"attributes-position",args:[g,3],usage:r.Vnu}),s.createElement("bufferAttribute",{attach:"attributes-color",args:[b,3],usage:r.Vnu}),s.createElement("bufferAttribute",{attach:"attributes-size",args:[y,1],usage:r.Vnu})),s.createElement(c.Provider,{value:E},e))}),p=s.forwardRef(({children:e,positions:t,colors:n,sizes:i,stride:a=3,...c},d)=>{let u=s.useRef(null);return s.useImperativeHandle(d,()=>u.current,[]),(0,l.C)(()=>{let e=u.current.geometry.attributes;e.position.needsUpdate=!0,n&&(e.color.needsUpdate=!0),i&&(e.size.needsUpdate=!0)}),s.createElement("points",(0,o.A)({ref:u},c),s.createElement("bufferGeometry",null,s.createElement("bufferAttribute",{attach:"attributes-position",args:[t,a],usage:r.Vnu}),n&&s.createElement("bufferAttribute",{attach:"attributes-color",args:[n,a],count:n.length/a,usage:r.Vnu}),i&&s.createElement("bufferAttribute",{attach:"attributes-size",args:[i,1],count:i.length/a,usage:r.Vnu})),e)}),m=s.forwardRef((e,t)=>e.positions instanceof Float32Array?s.createElement(p,(0,o.A)({},e,{ref:t})):s.createElement(f,(0,o.A)({},e,{ref:t})))},99589:(e,t,n)=>{let i,a;n.d(t,{N:()=>U});var o=n(80828),r=n(43210),s=n(4546),l=n(53524);let c=new s.NRn,d=new s.Pq0;class u extends s.CmU{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new s.qtW([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new s.qtW([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new s.LuO(t,6,1);return this.setAttribute("instanceStart",new s.eHs(n,3,0)),this.setAttribute("instanceEnd",new s.eHs(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let i=new s.LuO(n,2*t,1);return this.setAttribute("instanceColorStart",new s.eHs(i,t,0)),this.setAttribute("instanceColorEnd",new s.eHs(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new s.XJ7(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new s.NRn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),c.setFromBufferAttribute(t),this.boundingBox.union(c))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new s.iyt),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let a=0,o=e.count;a<o;a++)d.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(d)),d.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(d));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var f=n(52905);let p=parseInt(s.sPf.replace(/\D+/g,""));class m extends s.BKk{constructor(e){super({type:"LineMaterial",uniforms:s.LlO.clone(s.LlO.merge([f.UniformsLib.common,f.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new s.I9Y(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
					#include <${p>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let h=p>=125?"uv1":"uv2",v=new s.IUQ,g=new s.Pq0,b=new s.Pq0,y=new s.IUQ,E=new s.IUQ,w=new s.IUQ,S=new s.Pq0,x=new s.kn4,A=new s.cZY,P=new s.Pq0,L=new s.NRn,O=new s.iyt,_=new s.IUQ;function M(e,t,n){return _.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),_.multiplyScalar(1/_.w),_.x=a/n.width,_.y=a/n.height,_.applyMatrix4(e.projectionMatrixInverse),_.multiplyScalar(1/_.w),Math.abs(Math.max(_.x,_.y))}class T extends s.eaF{constructor(e=new u,t=new m({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let e=0,a=0,o=t.count;e<o;e++,a+=2)g.fromBufferAttribute(t,e),b.fromBufferAttribute(n,e),i[a]=0===a?0:i[a-1],i[a+1]=i[a]+g.distanceTo(b);let a=new s.LuO(i,2,1);return e.setAttribute("instanceDistanceStart",new s.eHs(a,1,0)),e.setAttribute("instanceDistanceEnd",new s.eHs(a,1,1)),this}raycast(e,t){let n,o;let r=this.material.worldUnits,l=e.camera;null!==l||r||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let c=void 0!==e.params.Line2&&e.params.Line2.threshold||0;i=e.ray;let d=this.matrixWorld,u=this.geometry,f=this.material;if(a=f.linewidth+c,null===u.boundingSphere&&u.computeBoundingSphere(),O.copy(u.boundingSphere).applyMatrix4(d),r)n=.5*a;else{let e=Math.max(l.near,O.distanceToPoint(i.origin));n=M(l,e,f.resolution)}if(O.radius+=n,!1!==i.intersectsSphere(O)){if(null===u.boundingBox&&u.computeBoundingBox(),L.copy(u.boundingBox).applyMatrix4(d),r)o=.5*a;else{let e=Math.max(l.near,L.distanceToPoint(i.origin));o=M(l,e,f.resolution)}L.expandByScalar(o),!1!==i.intersectsBox(L)&&(r?function(e,t){let n=e.matrixWorld,o=e.geometry,r=o.attributes.instanceStart,l=o.attributes.instanceEnd,c=Math.min(o.instanceCount,r.count);for(let o=0;o<c;o++){A.start.fromBufferAttribute(r,o),A.end.fromBufferAttribute(l,o),A.applyMatrix4(n);let c=new s.Pq0,d=new s.Pq0;i.distanceSqToSegment(A.start,A.end,d,c),d.distanceTo(c)<.5*a&&t.push({point:d,pointOnLine:c,distance:i.origin.distanceTo(d),object:e,face:null,faceIndex:o,uv:null,[h]:null})}}(this,t):function(e,t,n){let o=t.projectionMatrix,r=e.material.resolution,l=e.matrixWorld,c=e.geometry,d=c.attributes.instanceStart,u=c.attributes.instanceEnd,f=Math.min(c.instanceCount,d.count),p=-t.near;i.at(1,w),w.w=1,w.applyMatrix4(t.matrixWorldInverse),w.applyMatrix4(o),w.multiplyScalar(1/w.w),w.x*=r.x/2,w.y*=r.y/2,w.z=0,S.copy(w),x.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0;t<f;t++){if(y.fromBufferAttribute(d,t),E.fromBufferAttribute(u,t),y.w=1,E.w=1,y.applyMatrix4(x),E.applyMatrix4(x),y.z>p&&E.z>p)continue;if(y.z>p){let e=y.z-E.z,t=(y.z-p)/e;y.lerp(E,t)}else if(E.z>p){let e=E.z-y.z,t=(E.z-p)/e;E.lerp(y,t)}y.applyMatrix4(o),E.applyMatrix4(o),y.multiplyScalar(1/y.w),E.multiplyScalar(1/E.w),y.x*=r.x/2,y.y*=r.y/2,E.x*=r.x/2,E.y*=r.y/2,A.start.copy(y),A.start.z=0,A.end.copy(E),A.end.z=0;let c=A.closestPointToPointParameter(S,!0);A.at(c,P);let f=s.cj9.lerp(y.z,E.z,c),m=f>=-1&&f<=1,v=S.distanceTo(P)<.5*a;if(m&&v){A.start.fromBufferAttribute(d,t),A.end.fromBufferAttribute(u,t),A.start.applyMatrix4(l),A.end.applyMatrix4(l);let a=new s.Pq0,o=new s.Pq0;i.distanceSqToSegment(A.start,A.end,o,a),n.push({point:o,pointOnLine:a,distance:i.origin.distanceTo(o),object:e,face:null,faceIndex:t,uv:null,[h]:null})}}}(this,l,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(v),this.material.uniforms.resolution.value.set(v.z,v.w))}}class j extends u{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,i=new Float32Array(2*n);if(3===t)for(let a=0;a<n;a+=t)i[2*a]=e[a],i[2*a+1]=e[a+1],i[2*a+2]=e[a+2],i[2*a+3]=e[a+3],i[2*a+4]=e[a+4],i[2*a+5]=e[a+5];else for(let a=0;a<n;a+=t)i[2*a]=e[a],i[2*a+1]=e[a+1],i[2*a+2]=e[a+2],i[2*a+3]=e[a+3],i[2*a+4]=e[a+4],i[2*a+5]=e[a+5],i[2*a+6]=e[a+6],i[2*a+7]=e[a+7];return super.setColors(i,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class z extends T{constructor(e=new j,t=new m({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let U=r.forwardRef(function({points:e,color:t=0xffffff,vertexColors:n,linewidth:i,lineWidth:a,segments:c,dashed:d,...f},p){var h,v;let g=(0,l.A)(e=>e.size),b=r.useMemo(()=>c?new T:new z,[c]),[y]=r.useState(()=>new m),E=(null==n||null==(h=n[0])?void 0:h.length)===4?4:3,w=r.useMemo(()=>{let i=c?new u:new j,a=e.map(e=>{let t=Array.isArray(e);return e instanceof s.Pq0||e instanceof s.IUQ?[e.x,e.y,e.z]:e instanceof s.I9Y?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(i.setPositions(a.flat()),n){t=0xffffff;let e=n.map(e=>e instanceof s.Q1f?e.toArray():e);i.setColors(e.flat(),E)}return i},[e,c,n,E]);return r.useLayoutEffect(()=>{b.computeLineDistances()},[e,b]),r.useLayoutEffect(()=>{d?y.defines.USE_DASH="":delete y.defines.USE_DASH,y.needsUpdate=!0},[d,y]),r.useEffect(()=>()=>{w.dispose(),y.dispose()},[w]),r.createElement("primitive",(0,o.A)({object:b,ref:p},f),r.createElement("primitive",{object:w,attach:"geometry"}),r.createElement("primitive",(0,o.A)({object:y,attach:"material",color:t,vertexColors:!!n,resolution:[g.width,g.height],linewidth:null!==(v=null!=i?i:a)&&void 0!==v?v:1,dashed:d,transparent:4===E},f)))})}};