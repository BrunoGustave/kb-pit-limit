(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},u={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},d=1e3,f=1001,p=1002,m=1003,h=1004,g=1005,_=1006,v=1007,y=1008,b=1009,x=1010,S=1011,C=1012,w=1013,T=1014,E=1015,D=1016,O=1017,k=1018,ee=1020,A=35902,te=35899,j=1021,ne=1022,re=1023,ie=1026,ae=1027,oe=1028,se=1029,ce=1030,le=1031,ue=1033,de=33776,fe=33777,pe=33778,me=33779,he=35840,ge=35841,_e=35842,ve=35843,ye=36196,be=37492,xe=37496,Se=37488,Ce=37489,we=37490,Te=37491,Ee=37808,De=37809,Oe=37810,ke=37811,Ae=37812,je=37813,Me=37814,Ne=37815,Pe=37816,Fe=37817,Ie=37818,M=37819,Le=37820,Re=37821,ze=36492,N=36494,Be=36495,Ve=36283,He=36284,Ue=36285,We=36286,Ge=2300,Ke=2301,qe=2302,Je=2303,Ye=2400,Xe=2401,Ze=2402,Qe=3200,$e=`srgb`,et=`srgb-linear`,tt=`linear`,nt=`srgb`,rt=7680,it=35044,at=2e3;function ot(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function st(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ct(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function lt(){let e=ct(`canvas`);return e.style.display=`block`,e}var ut={};function dt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ft(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function P(...e){e=ft(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function F(...e){e=ft(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function pt(...e){let t=e.join(` `);t in ut||(ut[t]=!0,P(...e))}function mt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ht={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},gt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},_t=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),vt=1234567,yt=Math.PI/180,bt=180/Math.PI;function xt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_t[e&255]+_t[e>>8&255]+_t[e>>16&255]+_t[e>>24&255]+`-`+_t[t&255]+_t[t>>8&255]+`-`+_t[t>>16&15|64]+_t[t>>24&255]+`-`+_t[n&63|128]+_t[n>>8&255]+`-`+_t[n>>16&255]+_t[n>>24&255]+_t[r&255]+_t[r>>8&255]+_t[r>>16&255]+_t[r>>24&255]).toLowerCase()}function St(e,t,n){return Math.max(t,Math.min(n,e))}function Ct(e,t){return(e%t+t)%t}function wt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Tt(e,t,n){return e===t?0:(n-e)/(t-e)}function Et(e,t,n){return(1-n)*e+n*t}function Dt(e,t,n,r){return Et(e,t,1-Math.exp(-n*r))}function Ot(e,t=1){return t-Math.abs(Ct(e,t*2)-t)}function kt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function At(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function jt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Mt(e,t){return e+Math.random()*(t-e)}function Nt(e){return e*(.5-Math.random())}function Pt(e){e!==void 0&&(vt=e);let t=vt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ft(e){return e*yt}function It(e){return e*bt}function Lt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Rt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function zt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Bt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:P(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Vt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Ht(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Ut={DEG2RAD:yt,RAD2DEG:bt,generateUUID:xt,clamp:St,euclideanModulo:Ct,mapLinear:wt,inverseLerp:Tt,lerp:Et,damp:Dt,pingpong:Ot,smoothstep:kt,smootherstep:At,randInt:jt,randFloat:Mt,randFloatSpread:Nt,seededRandom:Pt,degToRad:Ft,radToDeg:It,isPowerOfTwo:Lt,ceilPowerOfTwo:Rt,floorPowerOfTwo:zt,setQuaternionFromProperEuler:Bt,normalize:Ht,denormalize:Vt};o=Symbol.iterator;var I=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=I,e.prototype.isVector2=!0;var Wt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:P(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var L=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gt.copy(this).projectOnVector(e),this.sub(Gt)}reflect(e){return this.sub(Gt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=L,t.prototype.isVector3=!0;var Gt=new L,Kt=new Wt,qt=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return pt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Jt.makeScale(e,t)),this}rotate(e){return pt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Jt.makeRotation(-e)),this}translate(e,t){return pt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Jt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=qt,n.prototype.isMatrix3=!0;var Jt=new qt,Yt=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xt=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zt(){let e={enabled:!0,workingColorSpace:et,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=$t(e.r),e.g=$t(e.g),e.b=$t(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=en(e.r),e.g=en(e.g),e.b=en(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?tt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return pt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return pt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[et]:{primaries:t,whitePoint:r,transfer:tt,toXYZ:Yt,fromXYZ:Xt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:r,transfer:nt,toXYZ:Yt,fromXYZ:Xt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),e}var Qt=Zt();function $t(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function en(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var tn,nn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{tn===void 0&&(tn=ct(`canvas`)),tn.width=e.width,tn.height=e.height;let t=tn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=tn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ct(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=$t(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor($t(t[e]/255)*255):t[e]=$t(t[e]);return{data:t,width:e.width,height:e.height}}return P(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},rn=0,an=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rn++}),this.uuid=xt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(on(r[t].image)):e.push(on(r[t]))}else e=on(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function on(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?nn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(P(`Texture: Unable to serialize Texture.`),{})}var sn=0,cn=new L,ln=class e extends gt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=f,i=f,a=_,o=y,s=re,c=b,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sn++}),this.uuid=xt(),this.name=``,this.source=new an(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new I(0,0),this.repeat=new I(1,1),this.center=new I(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cn).x}get height(){return this.source.getSize(cn).y}get depth(){return this.source.getSize(cn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){P(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){P(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case d:e.x-=Math.floor(e.x);break;case f:e.x=e.x<0?0:1;break;case p:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case d:e.y-=Math.floor(e.y);break;case f:e.y=e.y<0?0:1;break;case p:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null,ln.DEFAULT_MAPPING=300,ln.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var un=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=un,r.prototype.isVector4=!0;var dn=class extends gt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new un(0,0,e,t),this.scissorTest=!1,this.viewport=new un(0,0,e,t),this.textures=[];let r=new ln({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:_,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new an(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},fn=class extends dn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},pn=class extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=m,this.minFilter=m,this.wrapR=f,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},mn=class extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=m,this.minFilter=m,this.wrapR=f,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},hn=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/gn.setFromMatrixColumn(e,0).length(),i=1/gn.setFromMatrixColumn(e,1).length(),a=1/gn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vn,e,yn)}lookAt(e,t,n){let r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),bn.crossVectors(n,Sn),bn.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),bn.crossVectors(n,Sn)),bn.normalize(),xn.crossVectors(Sn,bn),r[0]=bn.x,r[4]=xn.x,r[8]=Sn.x,r[1]=bn.y,r[5]=xn.y,r[9]=Sn.y,r[2]=bn.z,r[6]=xn.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],ee=r[6],A=r[10],te=r[14],j=r[3],ne=r[7],re=r[11],ie=r[15];return i[0]=a*x+o*T+s*k+c*j,i[4]=a*S+o*E+s*ee+c*ne,i[8]=a*C+o*D+s*A+c*re,i[12]=a*w+o*O+s*te+c*ie,i[1]=l*x+u*T+d*k+f*j,i[5]=l*S+u*E+d*ee+f*ne,i[9]=l*C+u*D+d*A+f*re,i[13]=l*w+u*O+d*te+f*ie,i[2]=p*x+m*T+h*k+g*j,i[6]=p*S+m*E+h*ee+g*ne,i[10]=p*C+m*D+h*A+g*re,i[14]=p*w+m*O+h*te+g*ie,i[3]=_*x+v*T+y*k+b*j,i[7]=_*S+v*E+y*ee+b*ne,i[11]=_*C+v*D+y*A+b*re,i[15]=_*w+v*O+y*te+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ee=1/k;return e[0]=(o*O-s*D+c*E)*ee,e[1]=(r*D-n*O-i*E)*ee,e[2]=(m*S-h*x+g*b)*ee,e[3]=(d*x-u*S-f*b)*ee,e[4]=(s*T-a*O-c*w)*ee,e[5]=(t*O-r*T+i*w)*ee,e[6]=(h*y-p*S-g*v)*ee,e[7]=(l*S-d*y+f*v)*ee,e[8]=(a*D-o*T+c*C)*ee,e[9]=(n*T-t*D-i*C)*ee,e[10]=(p*x-m*y+g*_)*ee,e[11]=(u*y-l*x-f*_)*ee,e[12]=(o*w-a*E-s*C)*ee,e[13]=(t*E-n*w+r*C)*ee,e[14]=(m*v-p*b-h*_)*ee,e[15]=(l*b-u*v+d*_)*ee,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=gn.set(r[0],r[1],r[2]).length(),o=gn.set(r[4],r[5],r[6]).length(),s=gn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),_n.copy(this);let c=1/a,l=1/o,u=1/s;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=l,_n.elements[5]*=l,_n.elements[6]*=l,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=at,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=at,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=hn,i.prototype.isMatrix4=!0;var gn=new L,_n=new hn,vn=new L(0,0,0),yn=new L(1,1,1),bn=new L,xn=new L,Sn=new L,Cn=new hn,wn=new Wt,Tn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-St(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(St(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:P(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wn.setFromEuler(this),this.setFromQuaternion(wn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER=`XYZ`;var En=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Dn=0,On=new L,kn=new Wt,An=new hn,jn=new L,Mn=new L,Nn=new L,Pn=new Wt,Fn=new L(1,0,0),In=new L(0,1,0),Ln=new L(0,0,1),Rn={type:`added`},zn={type:`removed`},Bn={type:`childadded`,child:null},Vn={type:`childremoved`,child:null},Hn=class e extends gt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dn++}),this.uuid=xt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new L,n=new Tn,r=new Wt,i=new L(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new hn},normalMatrix:{value:new qt}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new En,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return kn.setFromAxisAngle(e,t),this.quaternion.multiply(kn),this}rotateOnWorldAxis(e,t){return kn.setFromAxisAngle(e,t),this.quaternion.premultiply(kn),this}rotateX(e){return this.rotateOnAxis(Fn,e)}rotateY(e){return this.rotateOnAxis(In,e)}rotateZ(e){return this.rotateOnAxis(Ln,e)}translateOnAxis(e,t){return On.copy(e).applyQuaternion(this.quaternion),this.position.add(On.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fn,e)}translateY(e){return this.translateOnAxis(In,e)}translateZ(e){return this.translateOnAxis(Ln,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jn.copy(e):jn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Mn,jn,this.up):An.lookAt(jn,Mn,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),kn.setFromRotationMatrix(An),this.quaternion.premultiply(kn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(F(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rn),Bn.child=e,this.dispatchEvent(Bn),Bn.child=null):F(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zn),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rn),Bn.child=e,this.dispatchEvent(Bn),Bn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mn,e,Nn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mn,Pn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Hn.DEFAULT_UP=new L(0,1,0),Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=class extends Hn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Wn={type:`move`},Gn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Kn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Jn={h:0,s:0,l:0};function Yn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var R=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Qt.workingColorSpace){if(e=Ct(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Yn(i,r,e+1/3),this.g=Yn(i,r,e),this.b=Yn(i,r,e-1/3)}return Qt.colorSpaceToWorking(this,r),this}setStyle(e,t=$e){function n(t){t!==void 0&&parseFloat(t)<1&&P(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:P(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);P(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$e){let n=Kn[e.toLowerCase()];return n===void 0?P(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$t(e.r),this.g=$t(e.g),this.b=$t(e.b),this}copyLinearToSRGB(e){return this.r=en(e.r),this.g=en(e.g),this.b=en(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$e){return Qt.workingToColorSpace(Xn.copy(this),e),Math.round(St(Xn.r*255,0,255))*65536+Math.round(St(Xn.g*255,0,255))*256+Math.round(St(Xn.b*255,0,255))}getHexString(e=$e){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qt.workingColorSpace){Qt.workingToColorSpace(Xn.copy(this),t);let n=Xn.r,r=Xn.g,i=Xn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Qt.workingColorSpace){return Qt.workingToColorSpace(Xn.copy(this),t),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=$e){Qt.workingToColorSpace(Xn.copy(this),e);let t=Xn.r,n=Xn.g,r=Xn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Jn);let n=Et(qn.h,Jn.h,t),r=Et(qn.s,Jn.s,t),i=Et(qn.l,Jn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xn=new R;R.NAMES=Kn;var Zn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new R(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qn=class extends Hn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$n=new L,er=new L,tr=new L,nr=new L,rr=new L,ir=new L,ar=new L,or=new L,sr=new L,cr=new L,lr=new un,ur=new un,dr=new un,fr=class e{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),$n.subVectors(e,t),r.cross($n);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){$n.subVectors(r,t),er.subVectors(n,t),tr.subVectors(e,t);let a=$n.dot($n),o=$n.dot(er),s=$n.dot(tr),c=er.dot(er),l=er.dot(tr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,nr)!==null&&nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,nr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,nr.x),s.addScaledVector(a,nr.y),s.addScaledVector(o,nr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return lr.setScalar(0),ur.setScalar(0),dr.setScalar(0),lr.fromBufferAttribute(e,t),ur.fromBufferAttribute(e,n),dr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(lr,i.x),a.addScaledVector(ur,i.y),a.addScaledVector(dr,i.z),a}static isFrontFacing(e,t,n,r){return $n.subVectors(n,t),er.subVectors(e,t),$n.cross(er).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),er.subVectors(this.a,this.b),$n.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;rr.subVectors(r,n),ir.subVectors(i,n),or.subVectors(e,n);let s=rr.dot(or),c=ir.dot(or);if(s<=0&&c<=0)return t.copy(n);sr.subVectors(e,r);let l=rr.dot(sr),u=ir.dot(sr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(rr,a);cr.subVectors(e,i);let f=rr.dot(cr),p=ir.dot(cr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ir,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return ar.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(ar,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(rr,a).addScaledVector(ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pr=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,hr):hr.fromBufferAttribute(r,t),hr.applyMatrix4(e.matrixWorld),this.expandByPoint(hr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),gr.copy(e.boundingBox)),gr.applyMatrix4(e.matrixWorld),this.union(gr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hr),hr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),wr.subVectors(this.max,Cr),_r.subVectors(e.a,Cr),vr.subVectors(e.b,Cr),yr.subVectors(e.c,Cr),br.subVectors(vr,_r),xr.subVectors(yr,vr),Sr.subVectors(_r,yr);let t=[0,-br.z,br.y,0,-xr.z,xr.y,0,-Sr.z,Sr.y,br.z,0,-br.x,xr.z,0,-xr.x,Sr.z,0,-Sr.x,-br.y,br.x,0,-xr.y,xr.x,0,-Sr.y,Sr.x,0];return!Dr(t,_r,vr,yr,wr)||(t=[1,0,0,0,1,0,0,0,1],!Dr(t,_r,vr,yr,wr))?!1:(Tr.crossVectors(br,xr),t=[Tr.x,Tr.y,Tr.z],Dr(t,_r,vr,yr,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mr=[new L,new L,new L,new L,new L,new L,new L,new L],hr=new L,gr=new pr,_r=new L,vr=new L,yr=new L,br=new L,xr=new L,Sr=new L,Cr=new L,wr=new L,Tr=new L,Er=new L;function Dr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Er.fromArray(e,a);let o=i.x*Math.abs(Er.x)+i.y*Math.abs(Er.y)+i.z*Math.abs(Er.z),s=t.dot(Er),c=n.dot(Er),l=r.dot(Er);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Or=new L,kr=new I,Ar=0,jr=class extends gt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ar++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=it,this.updateRanges=[],this.gpuType=E,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXYZ(t,Or.x,Or.y,Or.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix4(e),this.setXYZ(t,Or.x,Or.y,Or.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyNormalMatrix(e),this.setXYZ(t,Or.x,Or.y,Or.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.transformDirection(e),this.setXYZ(t,Or.x,Or.y,Or.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Mr=class extends jr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Nr=class extends jr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Pr=class extends jr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Fr=new pr,Ir=new L,Lr=new L,Rr=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Fr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);let t=Ir.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Ir,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(Lr)),this.expandByPoint(Ir.copy(e.center).sub(Lr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zr=0,Br=new hn,Vr=new Hn,Hr=new L,Ur=new pr,Wr=new pr,Gr=new L,Kr=class e extends gt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zr++}),this.uuid=xt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(ot(e)?Nr:Mr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new qt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Br.makeRotationFromQuaternion(e),this.applyMatrix4(Br),this}rotateX(e){return Br.makeRotationX(e),this.applyMatrix4(Br),this}rotateY(e){return Br.makeRotationY(e),this.applyMatrix4(Br),this}rotateZ(e){return Br.makeRotationZ(e),this.applyMatrix4(Br),this}translate(e,t,n){return Br.makeTranslation(e,t,n),this.applyMatrix4(Br),this}scale(e,t,n){return Br.makeScale(e,t,n),this.applyMatrix4(Br),this}lookAt(e){return Vr.lookAt(e),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Pr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&P(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){F(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ur.setFromBufferAttribute(n),this.morphTargetsRelative?(Gr.addVectors(this.boundingBox.min,Ur.min),this.boundingBox.expandByPoint(Gr),Gr.addVectors(this.boundingBox.max,Ur.max),this.boundingBox.expandByPoint(Gr)):(this.boundingBox.expandByPoint(Ur.min),this.boundingBox.expandByPoint(Ur.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&F(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){F(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Ur.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Wr.setFromBufferAttribute(n),this.morphTargetsRelative?(Gr.addVectors(Ur.min,Wr.min),Ur.expandByPoint(Gr),Gr.addVectors(Ur.max,Wr.max),Ur.expandByPoint(Gr)):(Ur.expandByPoint(Wr.min),Ur.expandByPoint(Wr.max))}Ur.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Gr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Gr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Gr.fromBufferAttribute(a,t),o&&(Hr.fromBufferAttribute(e,t),Gr.add(Hr)),r=Math.max(r,n.distanceToSquared(Gr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&F(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){F(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new jr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new L,s[e]=new L;let c=new L,l=new L,u=new L,d=new I,f=new I,p=new I,m=new L,h=new L;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new L,y=new L,b=new L,x=new L;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new jr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new L,i=new L,a=new L,o=new L,s=new L,c=new L,l=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gr.fromBufferAttribute(e,t),Gr.normalize(),e.setXYZ(t,Gr.x,Gr.y,Gr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new jr(a,r,i)}if(this.index===null)return P(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},qr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=it,this.updateRanges=[],this.version=0,this.uuid=xt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Jr=new L,Yr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix4(e),this.setXYZ(t,Jr.x,Jr.y,Jr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyNormalMatrix(e),this.setXYZ(t,Jr.x,Jr.y,Jr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.transformDirection(e),this.setXYZ(t,Jr.x,Jr.y,Jr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array),i=Ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){dt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new jr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){dt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Xr=new L,Zr=new L,Qr=new qt,$r=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Xr.subVectors(n,t).cross(Zr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Xr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qr.getNormalMatrix(e),r=this.coplanarPoint(Xr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ei=0,ti=class extends gt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ei++}),this.uuid=xt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new R(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rt,this.stencilZFail=rt,this.stencilZPass=rt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){P(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){P(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new R().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new $r().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new I().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new I().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},ni=new L,ri=new L,ii=new L,ai=new L,oi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ri.copy(e).add(t).multiplyScalar(.5),ii.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(ri);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ii),o=ai.dot(this.direction),s=-ai.dot(ii),c=ai.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ri).addScaledVector(ii,d),f}intersectSphere(e,t){if(e.radius<0)return null;ni.subVectors(e.center,this.origin);let n=ni.dot(this.direction),r=ni.dot(ni)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,ee,A,te,j;if(y>=b&&y>=x?(w=s,D=u,ee=p,j=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,A=_,te=v):(S=l,C=c,T=f,E=d,O=h,k=m,A=v,te=_)):b>=x?(w=c,D=d,ee=m,j=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,A=v,te=g):(S=s,C=l,T=u,E=f,O=p,k=h,A=g,te=v)):(w=l,D=f,ee=h,j=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,A=g,te=_):(S=c,C=s,T=d,E=u,O=m,k=p,A=_,te=g)),w===0)return null;let ne=S/w,re=C/w,ie=1/w,ae=T-ne*D,oe=E-re*D,se=O-ne*ee,ce=k-re*ee,le=A-ne*j,ue=te-re*j,de=le*ce-ue*se,fe=ae*ue-oe*le,pe=se*oe-ce*ae;if(r){if(de<0||fe<0||pe<0)return null}else if((de<0||fe<0||pe<0)&&(de>0||fe>0||pe>0))return null;let me=de+fe+pe;if(me===0)return null;let he=ie*(de*D+fe*ee+pe*j);return(me>0?he<0:he>0)?null:this.at(he/me,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},si=class extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new R(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ci=new hn,li=new oi,ui=new Rr,di=new L,fi=new L,pi=new L,mi=new L,hi=new L,gi=new L,_i=new L,vi=new L,yi=class extends Hn{constructor(e=new Kr,t=new si){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){gi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(hi.fromBufferAttribute(s,e),a?gi.addScaledVector(hi,r):gi.addScaledVector(hi.sub(t),r))}t.add(gi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ui.copy(n.boundingSphere),ui.applyMatrix4(i),li.copy(e.ray).recast(e.near),!(ui.containsPoint(li.origin)===!1&&(li.intersectSphere(ui,di)===null||li.origin.distanceToSquared(di)>(e.far-e.near)**2))&&(ci.copy(i).invert(),li.copy(e.ray).applyMatrix4(ci),(n.boundingBox===null||li.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=xi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=xi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=xi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=xi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function bi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;vi.copy(s),vi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(vi);return l<n.near||l>n.far?null:{distance:l,point:vi.clone(),object:e}}function xi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,fi),e.getVertexPosition(c,pi),e.getVertexPosition(l,mi);let u=bi(e,t,n,r,fi,pi,mi,_i);if(u){let e=new L;fr.getBarycoord(_i,fi,pi,mi,e),i&&(u.uv=fr.getInterpolatedAttribute(i,s,c,l,e,new I)),a&&(u.uv1=fr.getInterpolatedAttribute(a,s,c,l,e,new I)),o&&(u.normal=fr.getInterpolatedAttribute(o,s,c,l,e,new L),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new L,materialIndex:0};fr.getNormal(fi,pi,mi,t.normal),u.face=t,u.barycoord=e}return u}var Si=class extends ln{constructor(e=null,t=1,n=1,r,i,a,o,s,c=m,l=m,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ci=new Rr,wi=new I(.5,.5),Ti=new L,Ei=class{constructor(e=new $r,t=new $r,n=new $r,r=new $r,i=new $r,a=new $r){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=at,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476+wi.distanceTo(e.center),Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ti.x=r.normal.x>0?e.max.x:e.min.x,Ti.y=r.normal.y>0?e.max.y:e.min.y,Ti.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ti)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Di=class extends ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new R(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Oi=new L,ki=new L,Ai=new hn,ji=new oi,Mi=new Rr,Ni=new L,Pi=new L,Fi=class extends Hn{constructor(e=new Kr,t=new Di){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Oi.fromBufferAttribute(t,e-1),ki.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Oi.distanceTo(ki);e.setAttribute(`lineDistance`,new Pr(n,1))}else P(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mi.copy(n.boundingSphere),Mi.applyMatrix4(r),Mi.radius+=i,e.ray.intersectsSphere(Mi)===!1)return;Ai.copy(r).invert(),ji.copy(e.ray).applyMatrix4(Ai);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ii(this,e,ji,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ii(this,e,ji,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ii(this,e,ji,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ii(this,e,ji,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ii(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Oi.fromBufferAttribute(s,i),ki.fromBufferAttribute(s,a),n.distanceSqToSegment(Oi,ki,Ni,Pi)>r)return;Ni.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ni);if(!(c<t.near||c>t.far))return{distance:c,point:Pi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Li=new L,Ri=new L,zi=class extends Fi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Li.fromBufferAttribute(t,e),Ri.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Li.distanceTo(Ri);e.setAttribute(`lineDistance`,new Pr(n,1))}else P(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Bi=class extends ti{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new R(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vi=new hn,Hi=new oi,Ui=new Rr,Wi=new L,Gi=class extends Hn{constructor(e=new Kr,t=new Bi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ui.copy(n.boundingSphere),Ui.applyMatrix4(r),Ui.radius+=i,e.ray.intersectsSphere(Ui)===!1)return;Vi.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(Vi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Wi.fromBufferAttribute(l,n),Ki(Wi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Wi.fromBufferAttribute(l,a),Ki(Wi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ki(e,t,n,r,i,a,o){let s=Hi.distanceSqToPoint(e);if(s<n){let n=new L;Hi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var qi=class extends ln{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ji=class extends ln{constructor(e,t,n=T,r,i,a,o=m,s=m,c,l=ie,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new an(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Yi=class extends Ji{constructor(e,t=T,n=301,r,i,a=m,o=m,s,c=ie){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xi=class extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Zi=class e extends Kr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Pr(c,3)),this.setAttribute(`normal`,new Pr(l,3)),this.setAttribute(`uv`,new Pr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new L;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Qi=class e extends Kr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new L,l=new I;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Pr(a,3)),this.setAttribute(`normal`,new Pr(o,3)),this.setAttribute(`uv`,new Pr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},$i=class e extends Kr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Pr(u,3)),this.setAttribute(`normal`,new Pr(d,3)),this.setAttribute(`uv`,new Pr(f,2));function _(){let a=new L,_=new L,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new I,m=new L,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ea=class e extends $i{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ta=new L,na=new L,ra=new L,ia=new fr,aa=class extends Kr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(yt*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=ia;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),ia.getNormal(ra),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=ia[c[e]],o=ia[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(ra.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:ra.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];ta.fromBufferAttribute(a,t),na.fromBufferAttribute(a,n),d.push(ta.x,ta.y,ta.z),d.push(na.x,na.y,na.z)}this.setAttribute(`position`,new Pr(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},oa=class e extends Kr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Pr(p,3)),this.setAttribute(`normal`,new Pr(m,3)),this.setAttribute(`uv`,new Pr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},sa=class e extends Kr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new L,p=new I;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Pr(s,3)),this.setAttribute(`normal`,new Pr(c,3)),this.setAttribute(`uv`,new Pr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ca=class e extends Kr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new L,d=new L,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Pr(p,3)),this.setAttribute(`normal`,new Pr(m,3)),this.setAttribute(`uv`,new Pr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},la=class extends Kr{constructor(e=null){if(super(),this.type=`WireframeGeometry`,this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new L,i=new L;if(e.index!==null){let a=e.attributes.position,o=e.index,s=e.groups;s.length===0&&(s=[{start:0,count:o.count,materialIndex:0}]);for(let e=0,c=s.length;e<c;++e){let c=s[e],l=c.start,u=c.count;for(let e=l,s=l+u;e<s;e+=3)for(let s=0;s<3;s++){let c=o.getX(e+s),l=o.getX(e+(s+1)%3);r.fromBufferAttribute(a,c),i.fromBufferAttribute(a,l),ua(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}}else{let a=e.attributes.position;for(let e=0,o=a.count/3;e<o;e++)for(let o=0;o<3;o++){let s=3*e+o,c=3*e+(o+1)%3;r.fromBufferAttribute(a,s),i.fromBufferAttribute(a,c),ua(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}this.setAttribute(`position`,new Pr(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function ua(e,t,n){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return n.has(r)===!0||n.has(i)===!0?!1:(n.add(r),n.add(i),!0)}function da(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(pa(i))i.isRenderTargetTexture?(P(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(pa(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function fa(e){let t={};for(let n=0;n<e.length;n++){let r=da(e[n]);for(let e in r)t[e]=r[e]}return t}function pa(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ma(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ha(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var ga={clone:da,merge:fa},_a=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,va=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ya=class extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_a,this.fragmentShader=va,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=da(e.uniforms),this.uniformsGroups=ma(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new R().setHex(r.value);break;case`v2`:this.uniforms[n].value=new I().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new L().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new un().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new qt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new hn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ba=class extends ya{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},xa=class extends ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new R(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new R(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new I(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sa=class extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Qe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ca=class extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function wa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ta(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ea=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Da=class extends Ea{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ye,endingEnd:Ye}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xe:i=e,o=2*t-n;break;case Ze:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Xe:a=e,s=2*n-t;break;case Ze:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Oa=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ka=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Aa=class extends Ea{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Na(n,t,g,y,r);i[p]=ja(x,o,_,b,m)}return i}};function ja(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ma(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Na(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ja(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ma(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Pa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=wa(t,this.TimeBufferType),this.values=wa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wa(e.times,Array),values:wa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ta(e.settings)&&(n.settings={inTangents:wa(e.settings.inTangents,Array),outTangents:wa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Aa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ge:t=this.InterpolantFactoryMethodDiscrete;break;case Ke:t=this.InterpolantFactoryMethodLinear;break;case qe:t=this.InterpolantFactoryMethodSmooth;break;case Je:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return P(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ge;case this.InterpolantFactoryMethodLinear:return Ke;case this.InterpolantFactoryMethodSmooth:return qe;case this.InterpolantFactoryMethodBezier:return Je}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ta(this.settings)&&(Fa(this.settings.inTangents,e),Fa(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(F(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(F(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){F(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){F(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&st(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){F(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===qe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ta(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Fa(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Pa.prototype.ValueTypeName=``,Pa.prototype.TimeBufferType=Float32Array,Pa.prototype.ValueBufferType=Float32Array,Pa.prototype.DefaultInterpolation=Ke;var Ia=class extends Pa{constructor(e,t,n){super(e,t,n)}};Ia.prototype.ValueTypeName=`bool`,Ia.prototype.ValueBufferType=Array,Ia.prototype.DefaultInterpolation=Ge,Ia.prototype.InterpolantFactoryMethodLinear=void 0,Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}};La.prototype.ValueTypeName=`color`;var Ra=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}};Ra.prototype.ValueTypeName=`number`;var za=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Wt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ba=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new za(this.times,this.values,this.getValueSize(),e)}};Ba.prototype.ValueTypeName=`quaternion`,Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends Pa{constructor(e,t,n){super(e,t,n)}};Va.prototype.ValueTypeName=`string`,Va.prototype.ValueBufferType=Array,Va.prototype.DefaultInterpolation=Ge,Va.prototype.InterpolantFactoryMethodLinear=void 0,Va.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}};Ha.prototype.ValueTypeName=`vector`;var Ua=class extends Hn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new R(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Wa=class extends Ua{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new R(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ga=new hn,Ka=new L,qa=new L,Ja=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new I(512,512),this.mapType=b,this.map=null,this.mapPass=null,this.matrix=new hn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ei,this._frameExtents=new I(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ka.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ka),qa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ga,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ya=new L,Xa=new Wt,Za=new L,Qa=class extends Hn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=at,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ya,Xa,Za),Za.x===1&&Za.y===1&&Za.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Xa,Za.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ya,Xa,Za),Za.x===1&&Za.y===1&&Za.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Xa,Za.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$a=new L,eo=new I,to=new I,no=class extends Qa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=bt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bt*2*Math.atan(Math.tan(yt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($a.x,$a.y).multiplyScalar(-e/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($a.x,$a.y).multiplyScalar(-e/$a.z)}getViewSize(e,t){return this.getViewBounds(e,eo,to),t.subVectors(to,eo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ro=class extends Qa{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},io=class extends Ja{constructor(){super(new ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ao=class extends Ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.target=new Hn,this.shadow=new io}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},oo=class extends Kr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},so=-90,co=1,lo=class extends Hn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new no(so,co,e,t);r.layers=this.layers,this.add(r);let i=new no(so,co,e,t);i.layers=this.layers,this.add(i);let a=new no(so,co,e,t);a.layers=this.layers,this.add(a);let o=new no(so,co,e,t);o.layers=this.layers,this.add(o);let s=new no(so,co,e,t);s.layers=this.layers,this.add(s);let c=new no(so,co,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},uo=class extends no{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},fo=`\\[\\]\\.:\\/`,po=RegExp(`[\\[\\]\\.:\\/]`,`g`),mo=`[^\\[\\]\\.:\\/]`,ho=`[^`+fo.replace(`\\.`,``)+`]`,go=`((?:WC+[\\/:])*)`.replace(`WC`,mo),_o=`(WCOD+)?`.replace(`WCOD`,ho),vo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,mo),yo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,mo),bo=RegExp(`^`+go+_o+vo+yo+`$`),xo=[`material`,`materials`,`bones`,`map`],So=class{constructor(e,t,n){let r=n||Co.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Co=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(po,``)}static parseTrackName(e){let t=bo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);xo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){P(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){F(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){F(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){F(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){F(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){F(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){F(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){F(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;F(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){F(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){F(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Co.Composite=So,Co.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Co.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Co.prototype.GetterByBindingType=[Co.prototype._getValue_direct,Co.prototype._getValue_array,Co.prototype._getValue_arrayElement,Co.prototype._getValue_toArray],Co.prototype.SetterByBindingTypeAndVersioning=[[Co.prototype._setValue_direct,Co.prototype._setValue_direct_setNeedsUpdate,Co.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Co.prototype._setValue_array,Co.prototype._setValue_array_setNeedsUpdate,Co.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Co.prototype._setValue_arrayElement,Co.prototype._setValue_arrayElement_setNeedsUpdate,Co.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Co.prototype._setValue_fromArray,Co.prototype._setValue_fromArray_setNeedsUpdate,Co.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wo=class extends qr{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},To=new hn,Eo=class{constructor(e,t,n=0,r=1/0){this.ray=new oi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new En,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):F(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return To.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(To),this}intersectObject(e,t=!0,n=[]){return Oo(e,this,n,t),n.sort(Do),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Oo(e[r],this,n,t);return n.sort(Do),n}};function Do(e,t){return e.distance-t.distance}function Oo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Oo(r[e],t,n,!0)}}var ko=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=St(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;var Ao=new L,jo=new L,Mo=new L,No=new L,Po=new L,Fo=new L,Io=new L,Lo=class{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ao.subVectors(e,this.start),jo.subVectors(this.end,this.start);let n=jo.dot(jo);if(n===0)return 0;let r=jo.dot(Ao)/n;return t&&(r=St(r,0,1)),r}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Fo,n=Io){let r=1e-8*1e-8,i,a,o=this.start,s=e.start,c=this.end,l=e.end;Mo.subVectors(c,o),No.subVectors(l,s),Po.subVectors(o,s);let u=Mo.dot(Mo),d=No.dot(No),f=No.dot(Po);if(u<=r&&d<=r)return t.copy(o),n.copy(s),t.sub(n),t.dot(t);if(u<=r)i=0,a=f/d,a=St(a,0,1);else{let e=Mo.dot(Po);if(d<=r)a=0,i=St(-e/u,0,1);else{let t=Mo.dot(No),n=u*d-t*t;i=n===0?0:St((t*f-e*d)/n,0,1),a=(t*i+f)/d,a<0?(a=0,i=St(-e/u,0,1)):a>1&&(a=1,i=St((t-e)/u,0,1))}}return t.copy(o).addScaledVector(Mo,i),n.copy(s).addScaledVector(No,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Ro=class extends gt{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function zo(e,t,n,r){let i=Bo(r);switch(n){case j:return e*t;case oe:return e*t/i.components*i.byteLength;case se:return e*t/i.components*i.byteLength;case ce:return e*t*2/i.components*i.byteLength;case le:return e*t*2/i.components*i.byteLength;case ne:return e*t*3/i.components*i.byteLength;case re:return e*t*4/i.components*i.byteLength;case ue:return e*t*4/i.components*i.byteLength;case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pe:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:case ve:return Math.max(e,16)*Math.max(t,8)/4;case he:case _e:return Math.max(e,8)*Math.max(t,8)/2;case ye:case be:case Se:case Ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case xe:case we:case Te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ee:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case De:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Oe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ke:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ae:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case je:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Me:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ne:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Pe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Fe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ie:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case M:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Le:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Re:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ze:case N:case Be:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ve:case He:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ue:case We:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Bo(e){switch(e){case b:case x:return{byteLength:1,components:1};case C:case S:case D:return{byteLength:2,components:1};case O:case k:return{byteLength:2,components:4};case T:case w:case E:return{byteLength:4,components:1};case A:case te:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?P(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Vo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ho(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Uo={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},z={common:{diffuse:{value:new R(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new I(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new R(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new R(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new R(16777215)},opacity:{value:1},center:{value:new I(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Wo={basic:{uniforms:fa([z.common,z.specularmap,z.envmap,z.aomap,z.lightmap,z.fog]),vertexShader:Uo.meshbasic_vert,fragmentShader:Uo.meshbasic_frag},lambert:{uniforms:fa([z.common,z.specularmap,z.envmap,z.aomap,z.lightmap,z.emissivemap,z.bumpmap,z.normalmap,z.displacementmap,z.fog,z.lights,{emissive:{value:new R(0)},envMapIntensity:{value:1}}]),vertexShader:Uo.meshlambert_vert,fragmentShader:Uo.meshlambert_frag},phong:{uniforms:fa([z.common,z.specularmap,z.envmap,z.aomap,z.lightmap,z.emissivemap,z.bumpmap,z.normalmap,z.displacementmap,z.fog,z.lights,{emissive:{value:new R(0)},specular:{value:new R(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Uo.meshphong_vert,fragmentShader:Uo.meshphong_frag},standard:{uniforms:fa([z.common,z.envmap,z.aomap,z.lightmap,z.emissivemap,z.bumpmap,z.normalmap,z.displacementmap,z.roughnessmap,z.metalnessmap,z.fog,z.lights,{emissive:{value:new R(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Uo.meshphysical_vert,fragmentShader:Uo.meshphysical_frag},toon:{uniforms:fa([z.common,z.aomap,z.lightmap,z.emissivemap,z.bumpmap,z.normalmap,z.displacementmap,z.gradientmap,z.fog,z.lights,{emissive:{value:new R(0)}}]),vertexShader:Uo.meshtoon_vert,fragmentShader:Uo.meshtoon_frag},matcap:{uniforms:fa([z.common,z.bumpmap,z.normalmap,z.displacementmap,z.fog,{matcap:{value:null}}]),vertexShader:Uo.meshmatcap_vert,fragmentShader:Uo.meshmatcap_frag},points:{uniforms:fa([z.points,z.fog]),vertexShader:Uo.points_vert,fragmentShader:Uo.points_frag},dashed:{uniforms:fa([z.common,z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Uo.linedashed_vert,fragmentShader:Uo.linedashed_frag},depth:{uniforms:fa([z.common,z.displacementmap]),vertexShader:Uo.depth_vert,fragmentShader:Uo.depth_frag},normal:{uniforms:fa([z.common,z.bumpmap,z.normalmap,z.displacementmap,{opacity:{value:1}}]),vertexShader:Uo.meshnormal_vert,fragmentShader:Uo.meshnormal_frag},sprite:{uniforms:fa([z.sprite,z.fog]),vertexShader:Uo.sprite_vert,fragmentShader:Uo.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Uo.background_vert,fragmentShader:Uo.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Uo.backgroundCube_vert,fragmentShader:Uo.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Uo.cube_vert,fragmentShader:Uo.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Uo.equirect_vert,fragmentShader:Uo.equirect_frag},distance:{uniforms:fa([z.common,z.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Uo.distance_vert,fragmentShader:Uo.distance_frag},shadow:{uniforms:fa([z.lights,z.fog,{color:{value:new R(0)},opacity:{value:1}}]),vertexShader:Uo.shadow_vert,fragmentShader:Uo.shadow_frag}};Wo.physical={uniforms:fa([Wo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new I(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new R(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new I},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new R(0)},specularColor:{value:new R(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new I},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Uo.meshphysical_vert,fragmentShader:Uo.meshphysical_frag};var Go={r:0,b:0,g:0},Ko=new hn,qo=new qt;qo.set(-1,0,0,0,1,0,0,0,1);function Jo(e,t,n,r,i,a){let o=new R(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new yi(new Zi(1,1,1),new ya({name:`BackgroundCubeMaterial`,uniforms:da(Wo.backgroundCube.uniforms),vertexShader:Wo.backgroundCube.vertexShader,fragmentShader:Wo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ko.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(qo),l.material.toneMapped=Qt.getTransfer(i.colorSpace)!==nt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new yi(new oa(2,2),new ya({name:`BackgroundMaterial`,uniforms:da(Wo.background.uniforms),vertexShader:Wo.background.vertexShader,fragmentShader:Wo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(i.colorSpace)!==nt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Go,ha(e)),n.buffers.color.setClear(Go.r,Go.g,Go.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Yo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Xo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Zo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(P(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&P(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Qo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new $r,s=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var $o=4,es=6,ts=20,ns=256,rs=new ro,is=new R,as=null,os=0,ss=0,cs=!1,ls=new L,us=new L,ds=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ls}=i;as=this._renderer.getRenderTarget(),os=this._renderer.getActiveCubeFace(),ss=this._renderer.getActiveMipmapLevel(),cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_s(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(as,os,ss),this._renderer.xr.enabled=cs,e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),as=this._renderer.getRenderTarget(),os=this._renderer.getActiveCubeFace(),ss=this._renderer.getActiveMipmapLevel(),cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_,minFilter:_,generateMipmaps:!1,type:D,format:re,colorSpace:et,depthBuffer:!1},r=ps(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ps(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fs(r)),this._blurMaterial=gs(r,e,t),this._ggxMaterial=hs(r,e,t)}return r}_compileMaterial(e){let t=new yi(new Kr,e);this._renderer.compile(t,rs)}_sceneToCubeUV(e,t,n,r,i){let a=new no(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(is),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yi(new Zi,new si({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(is),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;ms(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_s());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;ms(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,rs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-$o?n-d+$o:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,ms(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,rs),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,ms(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,rs)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];ms(t,3*l*(r>this._lodMax-$o?r-this._lodMax+$o:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,rs)}};function fs(e){let t=[],n=[],r=e,i=e-$o+1+es;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?us.set(1,r,n):e===1?us.set(-n,1,-r):e===2?us.set(-n,r,1):e===3?us.set(-1,r,-n):e===4?us.set(-n,-1,r):us.set(n,r,-1),us.toArray(l,(e*6+t)*3)}}let u=new Kr;u.setAttribute(`position`,new jr(c,3)),u.setAttribute(`outputDirection`,new jr(l,3)),n.push(new yi(u,null)),r>$o&&r--}return{lodMeshes:n,sizeLods:t}}function ps(e,t,n){let r=new fn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function ms(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function hs(e,t,n){return new ya({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ys(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function gs(e,t,n){return new ya({name:`SphericalGaussianBlur`,defines:{SAMPLES:ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ys(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function _s(){return new ya({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vs(){return new ya({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ys(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bs=class extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new qi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Zi(5,5,5),i=new ya({name:`CubemapFromEquirect`,uniforms:da(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new yi(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=_),new lo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function xs(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new bs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ds(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ds(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ss(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&pt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Cs(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Nr:Mr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ws(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ts(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:F(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Es(e,t,n){let r=new WeakMap,i=new un;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new pn(h,p,m,u);g.type=E,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new I(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ds(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Os={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ks(e,t,n,r,i,a){let o=new fn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Kr;l.setAttribute(`position`,new Pr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Pr([0,2,0,0,2,0],2));let u=new ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new yi(l,u),f=new ro(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new fn(t,n,{type:D,depthBuffer:!1,stencilBuffer:!1}),c=new fn(t,n,{type:D,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Qt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Os[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var As=new ln,js=new Ji(1,1),Ms=new pn,Ns=new mn,Ps=new qi,Fs=[],Is=[],Ls=new Float32Array(16),Rs=new Float32Array(9),zs=new Float32Array(4);function Bs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Fs[i];if(a===void 0&&(a=new Float32Array(i),Fs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Vs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Hs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Us(e,t){let n=Is[t];n===void 0&&(n=new Int32Array(t),Is[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ws(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Gs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Vs(n,t))return;e.uniform2fv(this.addr,t),Hs(n,t)}}function Ks(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Vs(n,t))return;e.uniform3fv(this.addr,t),Hs(n,t)}}function qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Vs(n,t))return;e.uniform4fv(this.addr,t),Hs(n,t)}}function Js(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Vs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Hs(n,t)}else{if(Vs(n,r))return;zs.set(r),e.uniformMatrix2fv(this.addr,!1,zs),Hs(n,r)}}function Ys(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Vs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Hs(n,t)}else{if(Vs(n,r))return;Rs.set(r),e.uniformMatrix3fv(this.addr,!1,Rs),Hs(n,r)}}function Xs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Vs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Hs(n,t)}else{if(Vs(n,r))return;Ls.set(r),e.uniformMatrix4fv(this.addr,!1,Ls),Hs(n,r)}}function Zs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Vs(n,t))return;e.uniform2iv(this.addr,t),Hs(n,t)}}function $s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Vs(n,t))return;e.uniform3iv(this.addr,t),Hs(n,t)}}function ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Vs(n,t))return;e.uniform4iv(this.addr,t),Hs(n,t)}}function tc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Vs(n,t))return;e.uniform2uiv(this.addr,t),Hs(n,t)}}function rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Vs(n,t))return;e.uniform3uiv(this.addr,t),Hs(n,t)}}function ic(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Vs(n,t))return;e.uniform4uiv(this.addr,t),Hs(n,t)}}function ac(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(js.compareFunction=n.isReversedDepthBuffer()?518:515,a=js):a=As,n.setTexture2D(t||a,i)}function oc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ns,i)}function sc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ps,i)}function cc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ms,i)}function lc(e){switch(e){case 5126:return Ws;case 35664:return Gs;case 35665:return Ks;case 35666:return qs;case 35674:return Js;case 35675:return Ys;case 35676:return Xs;case 5124:case 35670:return Zs;case 35667:case 35671:return Qs;case 35668:case 35672:return $s;case 35669:case 35673:return ec;case 5125:return tc;case 36294:return nc;case 36295:return rc;case 36296:return ic;case 35678:case 36198:case 36298:case 36306:case 35682:return ac;case 35679:case 36299:case 36307:return oc;case 35680:case 36300:case 36308:case 36293:return sc;case 36289:case 36303:case 36311:case 36292:return cc}}function uc(e,t){e.uniform1fv(this.addr,t)}function dc(e,t){let n=Bs(t,this.size,2);e.uniform2fv(this.addr,n)}function fc(e,t){let n=Bs(t,this.size,3);e.uniform3fv(this.addr,n)}function pc(e,t){let n=Bs(t,this.size,4);e.uniform4fv(this.addr,n)}function mc(e,t){let n=Bs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function hc(e,t){let n=Bs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function gc(e,t){let n=Bs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function _c(e,t){e.uniform1iv(this.addr,t)}function vc(e,t){e.uniform2iv(this.addr,t)}function yc(e,t){e.uniform3iv(this.addr,t)}function bc(e,t){e.uniform4iv(this.addr,t)}function xc(e,t){e.uniform1uiv(this.addr,t)}function Sc(e,t){e.uniform2uiv(this.addr,t)}function Cc(e,t){e.uniform3uiv(this.addr,t)}function wc(e,t){e.uniform4uiv(this.addr,t)}function Tc(e,t,n){let r=this.cache,i=t.length,a=Us(n,i);Vs(r,a)||(e.uniform1iv(this.addr,a),Hs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?js:As;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Ec(e,t,n){let r=this.cache,i=t.length,a=Us(n,i);Vs(r,a)||(e.uniform1iv(this.addr,a),Hs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ns,a[e])}function Dc(e,t,n){let r=this.cache,i=t.length,a=Us(n,i);Vs(r,a)||(e.uniform1iv(this.addr,a),Hs(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ps,a[e])}function Oc(e,t,n){let r=this.cache,i=t.length,a=Us(n,i);Vs(r,a)||(e.uniform1iv(this.addr,a),Hs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ms,a[e])}function kc(e){switch(e){case 5126:return uc;case 35664:return dc;case 35665:return fc;case 35666:return pc;case 35674:return mc;case 35675:return hc;case 35676:return gc;case 5124:case 35670:return _c;case 35667:case 35671:return vc;case 35668:case 35672:return yc;case 35669:case 35673:return bc;case 5125:return xc;case 36294:return Sc;case 36295:return Cc;case 36296:return wc;case 35678:case 36198:case 36298:case 36306:case 35682:return Tc;case 35679:case 36299:case 36307:return Ec;case 35680:case 36300:case 36308:case 36293:return Dc;case 36289:case 36303:case 36311:case 36292:return Oc}}var Ac=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lc(t.type)}},jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kc(t.type)}},Mc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Nc=/(\w+)(\])?(\[|\.)?/g;function Pc(e,t){e.seq.push(t),e.map[t.id]=t}function Fc(e,t,n){let r=e.name,i=r.length;for(Nc.lastIndex=0;;){let a=Nc.exec(r),o=Nc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Pc(n,l===void 0?new Ac(s,e,t):new jc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Mc(s),Pc(n,e)),n=e}}}var Ic=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Fc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Lc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Rc=37297,zc=0;function Bc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Vc=new qt;function Hc(e){Qt._getMatrix(Vc,Qt.workingColorSpace,e);let t=`mat3( ${Vc.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(e)){case tt:return[t,`LinearTransferOETF`];case nt:return[t,`sRGBTransferOETF`];default:return P(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Uc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Bc(e.getShaderSource(t),r)}return i}function Wc(e,t){let n=Hc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Gc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Kc(e,t){let n=Gc[t];return n===void 0?(P(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var qc=new L;function Jc(){return Qt.getLuminanceCoefficients(qc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${qc.x.toFixed(4)}, ${qc.y.toFixed(4)}, ${qc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Yc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Qc).join(`
`)}function Xc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Zc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Qc(e){return e!==``}function $c(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function el(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var tl=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(e){return e.replace(tl,il)}var rl=new Map;function il(e,t){let n=Uo[t];if(n===void 0){let e=rl.get(t);if(e!==void 0)n=Uo[e],P(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return nl(n)}var al=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(e){return e.replace(al,sl)}function sl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function cl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var ll={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ul(e){return ll[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var dl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function fl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:dl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var pl={302:`ENVMAP_MODE_REFRACTION`};function ml(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:pl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var hl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function gl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:hl[e.combine]||`ENVMAP_BLENDING_NONE`}function _l(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function vl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ul(n),l=fl(n),u=ml(n),d=gl(n),f=_l(n),p=Yc(n),m=Xc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Qc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Qc).join(`
`),_.length>0&&(_+=`
`)):(g=[cl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Qc).join(`
`),_=[cl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Uo.tonemapping_pars_fragment,n.toneMapping===0?``:Kc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Uo.colorspace_pars_fragment,Wc(`linearToOutputTexel`,n.outputColorSpace),Jc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Qc).join(`
`)),o=nl(o),o=$c(o,n),o=el(o,n),s=nl(s),s=$c(s,n),s=el(s,n),o=ol(o),s=ol(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Lc(i,i.VERTEX_SHADER,y),S=Lc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Uc(i,x,`vertex`),n=Uc(i,S,`fragment`);F(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):P(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Ic(i,h),T=Zc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Rc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var yl=0,bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xl(e),t.set(e,n)),n}},xl=class{constructor(e){this.id=yl++,this.code=e,this.usedTimes=0}};function Sl(e){return e===1030||e===37490||e===36285}function Cl(e,t,n,r,i,a){let o=new En,s=new bl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&P(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,ee;if(C){let e=Wo[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,ee=t.id}let A=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,ne=h.isBatchedMesh===!0,re=!!i.map,ie=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,fe=!!i.metalnessMap,pe=!!i.roughnessMap,me=i.anisotropy>0,he=i.clearcoat>0,ge=i.dispersion>0,_e=i.retroreflectivity>0,ve=i.iridescence>0,ye=i.sheen>0,be=i.transmission>0,xe=me&&!!i.anisotropyMap,Se=he&&!!i.clearcoatMap,Ce=he&&!!i.clearcoatNormalMap,we=he&&!!i.clearcoatRoughnessMap,Te=ve&&!!i.iridescenceMap,Ee=ve&&!!i.iridescenceThicknessMap,De=ye&&!!i.sheenColorMap,Oe=ye&&!!i.sheenRoughnessMap,ke=!!i.specularMap,Ae=!!i.specularColorMap,je=!!i.specularIntensityMap,Me=be&&!!i.transmissionMap,Ne=be&&!!i.thicknessMap,Pe=!!i.gradientMap,Fe=!!i.alphaMap,Ie=i.alphaTest>0,M=!!i.alphaHash,Le=!!i.extensions,Re=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Re=e.toneMapping);let ze={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:ee,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ne,batchingColor:ne&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:ie,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&Sl(i.normalMap.format),metalnessMap:fe,roughnessMap:pe,anisotropy:me,anisotropyMap:xe,clearcoat:he,clearcoatMap:Se,clearcoatNormalMap:Ce,clearcoatRoughnessMap:we,dispersion:ge,retroreflection:_e,iridescence:ve,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:ye,sheenColorMap:De,sheenRoughnessMap:Oe,specularMap:ke,specularColorMap:Ae,specularIntensityMap:je,transmission:be,transmissionMap:Me,thicknessMap:Ne,gradientMap:Pe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Ie,alphaHash:M,combine:i.combine,mapUv:re&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:fe&&m(i.metalnessMap.channel),roughnessMapUv:pe&&m(i.roughnessMap.channel),anisotropyMapUv:xe&&m(i.anisotropyMap.channel),clearcoatMapUv:Se&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:De&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&m(i.sheenRoughnessMap.channel),specularMapUv:ke&&m(i.specularMap.channel),specularColorMapUv:Ae&&m(i.specularColorMap.channel),specularIntensityMapUv:je&&m(i.specularIntensityMap.channel),transmissionMapUv:Me&&m(i.transmissionMap.channel),thicknessMapUv:Ne&&m(i.thicknessMap.channel),alphaMapUv:Fe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||me),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(re||Fe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&Qt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Le&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Wo[t];n=ga.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new vl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function wl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Tl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function El(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Dl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Tl),r.length>1&&r.sort(t||El),i.length>1&&i.sort(t||El)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ol(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Dl,e.set(t,[i])):n>=r.length?(i=new Dl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function kl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new L,color:new R};break;case`SpotLight`:n={position:new L,direction:new L,color:new R,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new L,color:new R,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new L,skyColor:new R,groundColor:new R};break;case`RectAreaLight`:n={color:new R,position:new L,halfWidth:new L,halfHeight:new L}}return e[t.id]=n,n}}}function Al(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var jl=0;function Ml(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Nl(e){let t=new kl,n=Al(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new L);let i=new L,a=new hn,o=new hn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Ml);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=z.LTC_FLOAT_1,r.rectAreaLTC2=z.LTC_FLOAT_2):(r.rectAreaLTC1=z.LTC_HALF_1,r.rectAreaLTC2=z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=jl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Pl(e){let t=new Nl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Fl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Pl(e),t.set(n,[a])):r>=i.length?(a=new Pl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Il=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ll=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Rl=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],zl=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Bl=new hn,Vl=new L,Hl=new L;function Ul(e,t,n){let r=new Ei,i=new I,a=new I,o=new un,s=new Sa,c=new Ca,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new I},radius:{value:4}},vertexShader:Il,fragmentShader:Ll}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let h=new Kr;h.setAttribute(`position`,new jr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new yi(h,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(P(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=y!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){P(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y));let g=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=g,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){P(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new fn(i.x,i.y,{format:ce,type:D,minFilter:_,magFilter:_,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Ji(i.x,i.y,E),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ie,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=m,d.map.depthTexture.magFilter=m}else l.isPointLight?(d.map=new bs(i.x),d.map.depthTexture=new Yi(i.x,T)):(d.map=new fn(i.x,i.y),d.map.depthTexture=new Ji(i.x,i.y,T)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ie,this.type===1?(d.map.depthTexture.compareFunction=g?518:515,d.map.depthTexture.minFilter=_,d.map.depthTexture.magFilter=_):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=m,d.map.depthTexture.magFilter=m);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Vl.setFromMatrixPosition(l.matrixWorld),e.position.copy(Vl),Hl.copy(e.position),Hl.add(Rl[t]),e.up.copy(zl[t]),e.lookAt(Hl),e.updateMatrixWorld(),n.makeTranslation(-Vl.x,-Vl.y,-Vl.z),Bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Bl,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(g);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new fn(i.x,i.y,{format:ce,type:D}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,g,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,g,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Wl(e,t){function n(){let t=!1,n=new un,r=null,i=new un(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?fe(e.DEPTH_TEST):pe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ht[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?fe(e.STENCIL_TEST):pe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new R(0,0,0),T=0,E=!1,D=null,O=null,k=null,ee=null,A=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),j=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),j=ne>=1);let ie=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new un().fromArray(oe),le=new un().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),fe(e.DEPTH_TEST),o.setFunc(3),xe(!1),Se(1),fe(e.CULL_FACE),ye(0);function fe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function pe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function me(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function he(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ge(t){return h!==t&&(e.useProgram(t),h=t,!0)}let _e={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};_e[103]=e.MIN,_e[104]=e.MAX;let ve={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ye(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(pe(e.BLEND),g=!1);return}if(g===!1&&(fe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:F(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:F(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:F(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:F(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(_e[n],_e[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ve[r],ve[i],ve[o],ve[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function be(t,n){t.side===2?pe(e.CULL_FACE):fe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),xe(r),t.blending===1&&t.transparent===!1?ye(0):ye(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),we(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function xe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function Se(t){t===0?pe(e.CULL_FACE):(fe(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Ce(t){t!==k&&(j&&e.lineWidth(t),k=t)}function we(t,n,r){t?(fe(e.POLYGON_OFFSET_FILL),(ee!==n||A!==r)&&(ee=n,A=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):pe(e.POLYGON_OFFSET_FILL)}function Te(t){t?fe(e.SCISSOR_TEST):pe(e.SCISSOR_TEST)}function Ee(t){t===void 0&&(t=e.TEXTURE0+te-1),ie!==t&&(e.activeTexture(t),ie=t)}function De(t,n,r){r===void 0&&(r=ie===null?e.TEXTURE0+te-1:ie);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(ie!==r&&(e.activeTexture(r),ie=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function Oe(){let t=ae[ie];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ke(){try{e.compressedTexImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Ae(){try{e.compressedTexImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function je(){try{e.texSubImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Me(){try{e.texSubImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Pe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Fe(){try{e.texStorage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Ie(){try{e.texStorage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function M(){try{e.texImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Le(){try{e.texImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Re(t){return d[t]===void 0?e.getParameter(t):d[t]}function ze(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function N(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function Be(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function Ve(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function He(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ie=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new R(0,0,0),T=0,E=!1,D=null,O=null,k=null,ee=null,A=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:fe,disable:pe,bindFramebuffer:me,drawBuffers:he,useProgram:ge,setBlending:ye,setMaterial:be,setFlipSided:xe,setCullFace:Se,setLineWidth:Ce,setPolygonOffset:we,setScissorTest:Te,activeTexture:Ee,bindTexture:De,unbindTexture:Oe,compressedTexImage2D:ke,compressedTexImage3D:Ae,texImage2D:M,texImage3D:Le,pixelStorei:ze,getParameter:Re,updateUBOMapping:Ve,uniformBlockBinding:He,texStorage2D:Fe,texStorage3D:Ie,texSubImage2D:je,texSubImage3D:Me,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Pe,scissor:N,viewport:Be,reset:Ue}}function Gl(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new I,u=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):ct(`canvas`)}function T(e,t,n){let r=1,i=Re(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),P(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&P(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];P(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||P(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?tt:Qt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function ee(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,P(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function A(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),ne(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&b.delete(t)}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),ie(t)}function ne(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&re(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function re(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function ie(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=i.maxTextures&&P(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function fe(t,i){let a=r.get(t);if(t.isVideoTexture&&M(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)P(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)P(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ce(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function pe(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){Ce(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function me(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){Ce(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function he(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){we(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ge={[d]:e.REPEAT,[f]:e.CLAMP_TO_EDGE,[p]:e.MIRRORED_REPEAT},_e={[m]:e.NEAREST,[h]:e.NEAREST_MIPMAP_NEAREST,[g]:e.NEAREST_MIPMAP_LINEAR,[_]:e.LINEAR,[v]:e.LINEAR_MIPMAP_NEAREST,[y]:e.LINEAR_MIPMAP_LINEAR},ve={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ye(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&P(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ge[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ge[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ge[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,_e[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,_e[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ve[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function be(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,te));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=de(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&re(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function xe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Se(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=xe(n.start,r.width,4),c=xe(t.start,r.width,4);n.start<=i+1&&a===c&&xe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Ce(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=be(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Qt.getPrimaries(Qt.workingColorSpace),r=o.colorSpace===``?null:Qt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Le(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);ye(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=A(o,t);if(o.isDepthTexture)p=ee(o.format===ae,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&Se(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=zo(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=zo(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Re(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Re(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);E(o)&&D(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function we(t,o,s){if(o.image.length!==6)return;let c=be(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Qt.getPrimaries(Qt.workingColorSpace),r=o.colorSpace===``?null:Qt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Le(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=k(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=A(o,h);ye(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Re(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Te(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ie(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Fe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=ee(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ie(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Fe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Fe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=k(o.internalFormat,c,l,o.normalized,o.colorSpace);Ie(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Fe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Fe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function De(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,te)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ye(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else fe(i.depthTexture,0);let u=l.__webglTexture,d=Fe(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ie(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ie(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Oe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)De(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?De(i.__webglFramebuffer[0],t,0):De(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ee(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ee(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(t,n,i){let a=r.get(t);n!==void 0&&Te(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Oe(t)}function Ae(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,j);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ie(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Fe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ee(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ye(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Te(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Te(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ye(c,a),Te(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ye(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Te(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Te(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&Oe(t)}function je(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let Me=[],Ne=[];function Pe(t){if(t.samples>0){if(Ie(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Me.length=0,Ne.length=0,Me.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Me.push(l),Ne.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ne)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Me))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Fe(e){return Math.min(i.maxSamples,e.samples)}function Ie(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function M(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Le(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Qt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&P(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):F(`WebGLTextures: Unsupported texture color space:`,n)),t}function Re(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=fe,this.setTexture2DArray=pe,this.setTexture3D=me,this.setTextureCube=he,this.rebindTextures=ke,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Kl(e,t){function n(n,r=``){let i,a=Qt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ql=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ya({vertexShader:ql,fragmentShader:Jl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yi(new oa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xl=class extends gt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Yl,g={},_=t.getContextAttributes(),v=null,y=null,x=[],S=[],C=new I,w=null,E=null,D=new no;D.viewport=new un;let O=new no;O.viewport=new un;let k=[D,O],A=new uo,te=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Gn,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Gn,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Gn,x[e]=t),t.getHandSpace()};function ne(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}te=null,j=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ae:ie,a=_.stencil?ee:T);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new fn(d.textureWidth,d.textureHeight,{format:re,type:b,depthTexture:new Ji(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new fn(f.framebufferWidth,f.framebufferHeight,{format:re,type:b,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ce=new L,le=new L;function ue(e,t,n){ce.setFromMatrixPosition(t.matrixWorld),le.setFromMatrixPosition(n.matrixWorld);let r=ce.distanceTo(le),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function de(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=O.near=D.near=t,A.far=O.far=D.far=n,(te!==A.near||j!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),te=A.near,j=A.far),A.layers.mask=e.layers.mask|6,D.layers.mask=A.layers.mask&-5,O.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;de(A,i);for(let e=0;e<a.length;e++)de(a[e],i);a.length===2?ue(A,D,O):A.projectionMatrix.copy(D.projectionMatrix),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),fe(e,A,i)};function fe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=bt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let pe=null;function me(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=k[n];o===void 0&&(o=new no,o.layers.enable(n),o.viewport=new un,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Xi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}pe&&pe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let he=new Vo;he.setAnimationLoop(me),this.setAnimationLoop=function(e){pe=e},this.dispose=function(){}}},Zl=new hn,Ql=new qt;Ql.set(-1,0,0,0,1,0,0,0,1);function $l(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ha(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Zl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Ql),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function eu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return F(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?P(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):P(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var tu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),nu=null;function ru(){return nu===null&&(nu=new Si(tu,16,16,ce,D),nu.name=`DFG_LUT`,nu.minFilter=_,nu.magFilter=_,nu.wrapS=f,nu.wrapT=f,nu.generateMipmaps=!1,nu.needsUpdate=!0),nu}var iu=class{constructor(e={}){let{canvas:t=lt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=b}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ue,le,se]),g=new Set([b,T,C,ee,O,k]),_=new Uint32Array(4),v=new Int32Array(4),x=new L,S=null,w=null,E=[],A=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ne=!1,re=null,ie=null,ae=null,oe=null;this._outputColorSpace=$e;let ce=0,de=0,fe=null,pe=-1,me=null,he=new un,ge=new un,_e=null,ve=new R(0),ye=0,be=t.width,xe=t.height,Se=1,Ce=null,we=null,Te=new un(0,0,be,xe),Ee=new un(0,0,be,xe),De=!1,Oe=new Ei,ke=!1,Ae=!1,je=new hn,Me=new L,Ne=new un,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Ie(){return fe===null?Se:1}let M=n;function Le(e,n){return t.getContext(e,n)}let Re,ze,N,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,et,tt,nt,rt,it,ot,st;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ft,!1),t.addEventListener(`webglcontextrestored`,pt,!1),t.addEventListener(`webglcontextcreationerror`,ht,!1),M===null){let t=`webgl2`;if(M=Le(t,e),M===null)throw Le(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ct()}catch(e){throw t.removeEventListener(`webglcontextlost`,ft,!1),t.removeEventListener(`webglcontextrestored`,pt,!1),t.removeEventListener(`webglcontextcreationerror`,ht,!1),F(`WebGLRenderer: `+e.message),e}function ct(){Re=new Ss(M),Re.init(),it=new Kl(M,Re),ze=new Zo(M,Re,e,it),N=new Wl(M,Re),ze.reversedDepthBuffer&&d&&N.buffers.depth.setReversed(!0),ie=M.createFramebuffer(),ae=M.createFramebuffer(),oe=M.createFramebuffer(),Be=new Ts(M),Ve=new wl,He=new Gl(M,Re,N,Ve,ze,it,Be),Ue=new xs(j),We=new Ho(M),ot=new Yo(M,We),Ge=new Cs(M,We,Be,ot),Ke=new Ds(M,Ge,We,ot,Be),tt=new Es(M,ze,He),Ze=new Qo(Ve),qe=new Cl(j,Ue,Re,ze,ot,Ze),Je=new $l(j,Ve),Ye=new Ol,Xe=new Fl(Re),et=new Jo(j,Ue,N,Ke,p,s),Qe=new Ul(j,Ke,ze),st=new eu(M,Be,ze,N),nt=new Xo(M,Re,Be),rt=new ws(M,Re,Be),Be.programs=qe.programs,j.capabilities=ze,j.extensions=Re,j.properties=Ve,j.renderLists=Ye,j.shadowMap=Qe,j.state=N,j.info=Be}m!==1009&&(te=new ks(m,t.width,t.height,o,r,i));let ut=new Xl(j,M);this.xr=ut,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(e){e!==void 0&&(Se=e,this.setSize(be,xe,!1))},this.getSize=function(e){return e.set(be,xe)},this.setSize=function(e,n,r=!0){if(ut.isPresenting){P(`WebGLRenderer: Can't change size while VR device is presenting.`);return}be=e,xe=n,t.width=Math.floor(e*Se),t.height=Math.floor(n*Se),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(be*Se,xe*Se).floor()},this.setDrawingBufferSize=function(e,n,r){be=e,xe=n,Se=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){F(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){P(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(he)},this.getViewport=function(e){return e.copy(Te)},this.setViewport=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),N.viewport(he.copy(Te).multiplyScalar(Se).round())},this.getScissor=function(e){return e.copy(Ee)},this.setScissor=function(e,t,n,r){e.isVector4?Ee.set(e.x,e.y,e.z,e.w):Ee.set(e,t,n,r),N.scissor(ge.copy(Ee).multiplyScalar(Se).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(e){N.setScissorTest(De=e)},this.setOpaqueSort=function(e){Ce=e},this.setTransparentSort=function(e){we=e},this.getClearColor=function(e){return e.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(fe!==null){let t=fe.texture.format;e=h.has(t)}if(e){let e=fe.texture.type,t=g.has(e),n=et.getClearColor(),r=et.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,M.clearBufferuiv(M.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,M.clearBufferiv(M.COLOR,0,v))}else r|=M.COLOR_BUFFER_BIT}t&&(r|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&M.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),re=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ft,!1),t.removeEventListener(`webglcontextrestored`,pt,!1),t.removeEventListener(`webglcontextcreationerror`,ht,!1),et.dispose(),Ye.dispose(),Xe.dispose(),Ve.dispose(),Ue.dispose(),Ke.dispose(),ot.dispose(),st.dispose(),qe.dispose(),ut.dispose(),ut.removeEventListener(`sessionstart`,St),ut.removeEventListener(`sessionend`,Ct),wt.stop()};function ft(e){e.preventDefault(),dt(`WebGLRenderer: Context Lost.`),ne=!0}function pt(){dt(`WebGLRenderer: Context Restored.`),ne=!1;let e=Be.autoReset,t=Qe.enabled,n=Qe.autoUpdate,r=Qe.needsUpdate,i=Qe.type;ct(),Be.autoReset=e,Qe.enabled=t,Qe.autoUpdate=n,Qe.needsUpdate=r,Qe.type=i}function ht(e){F(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function gt(e){let t=e.target;t.removeEventListener(`dispose`,gt),_t(t)}function _t(e){vt(e),Ve.remove(e)}function vt(e){let t=Ve.get(e).programs;t!==void 0&&(t.forEach(function(e){qe.releaseProgram(e)}),e.isShaderMaterial&&qe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Pe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Pt(e,t,n,r,i);N.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ge.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ot.setup(i,r,s,n,c);let h,g=nt;if(c!==null&&(h=We.get(c),g=rt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(N.setLineWidth(r.wireframeLinewidth*Ie()),g.setMode(M.LINES)):g.setMode(M.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),N.setLineWidth(e*Ie()),i.isLineSegments?g.setMode(M.LINES):i.isLineLoop?g.setMode(M.LINE_LOOP):g.setMode(M.LINE_STRIP)}else i.isPoints?g.setMode(M.POINTS):i.isSprite&&g.setMode(M.TRIANGLES);if(i.isBatchedMesh){if(Re.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?We.get(c).bytesPerElement:1,o=Ve.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(M,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function yt(e,t,n,r){re!==null&&e.isNodeMaterial&&re.setObject(r,e),ke===!0&&Ze.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,At(e,t,r),e.side=0,e.needsUpdate=!0,At(e,t,r),e.side=2):At(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),re!==null&&re.renderStart(e,t,n),w=Xe.get(n),w.init(t),A.push(w),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(w.pushLight(e),e.castShadow&&w.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(w.pushLight(e),e.castShadow&&w.pushShadow(e))}),w.setupLights(),re!==null&&re.updateLights(w.state.lightsArray),Ae=this.localClippingEnabled,ke=Ze.init(this.clippingPlanes,Ae),ke===!0&&Ze.setGlobalState(this.clippingPlanes,t),re!==null&&Qe.render(w.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];yt(o,n,t,e),r.add(o)}else yt(i,n,t,e),r.add(i)}}),w=A.pop(),re!==null&&re.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=Ve.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Re.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let bt=null;function xt(e){bt&&bt(e)}function St(){wt.stop()}function Ct(){wt.start()}let wt=new Vo;wt.setAnimationLoop(xt),typeof self<`u`&&wt.setContext(self),this.setAnimationLoop=function(e){bt=e,ut.setAnimationLoop(e),e===null?wt.stop():wt.start()},ut.addEventListener(`sessionstart`,St),ut.addEventListener(`sessionend`,Ct),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){F(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;re!==null&&re.renderStart(e,t);let n=ut.enabled===!0&&ut.isPresenting===!0,r=te!==null&&(fe===null||n)&&te.begin(j,fe);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(t),t=ut.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,fe),w=Xe.get(e,A.length),w.init(t),w.state.textureUnits=He.getTextureUnits(),A.push(w),je.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Oe.setFromProjectionMatrix(je,at,t.reversedDepth),Ae=this.localClippingEnabled,ke=Ze.init(this.clippingPlanes,Ae),S=Ye.get(e,E.length),S.init(),E.push(S),ut.enabled===!0&&ut.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&Tt(e,t,-1/0,j.sortObjects)}Tt(e,t,0,j.sortObjects),S.finish(),re!==null&&re.updateLights(w.state.lightsArray),j.sortObjects===!0&&S.sort(Ce,we),Fe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Fe&&et.addToRenderList(S,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ke===!0&&Ze.beginShadows();let i=w.state.shadowsArray;if(Qe.render(i,e,t),ke===!0&&Ze.endShadows(),(r&&te.hasRenderPass())===!1){let n=S.opaque,r=S.transmissive;if(w.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Dt(n,r,e,a)}Fe&&et.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Et(S,e,n,n.viewport)}}else r.length>0&&Dt(n,r,e,t),Fe&&et.render(e),Et(S,e,t)}fe!==null&&de===0&&(He.updateMultisampleRenderTarget(fe),He.updateRenderTargetMipmap(fe)),r&&te.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),ot.resetDefaultState(),pe=-1,me=null,A.pop(),A.length>0?(w=A[A.length-1],He.setTextureUnits(w.state.textureUnits),ke===!0&&Ze.setGlobalState(j.clippingPlanes,w.state.camera)):w=null,E.pop(),S=E.length>0?E[E.length-1]:null,re!==null&&re.renderEnd()};function Tt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)w.pushLightProbeGrid(e);else if(e.isLight)w.pushLight(e),e.castShadow&&w.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Oe)){r&&Ne.setFromMatrixPosition(e.matrixWorld).applyMatrix4(je);let i=Ke.update(e),a=e.material;a.visible&&S.push(e,i,a,n,Ne.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Oe))){let i=Ke.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ne.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ne.copy(e.boundingSphere.center)),Ne.applyMatrix4(e.matrixWorld).applyMatrix4(je)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&S.push(e,i,c,n,Ne.z,s,t)}}else a.visible&&S.push(e,i,a,n,Ne.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Tt(i[e],t,n,r)}function Et(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;w.setupLightsView(n),ke===!0&&Ze.setGlobalState(j.clippingPlanes,n),r&&N.viewport(he.copy(r)),i.length>0&&Ot(i,t,n),a.length>0&&Ot(a,t,n),o.length>0&&Ot(o,t,n),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Dt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[r.id]===void 0){let e=Re.has(`EXT_color_buffer_half_float`)||Re.has(`EXT_color_buffer_float`);w.state.transmissionRenderTarget[r.id]=new fn(1,1,{generateMipmaps:!0,type:e?D:b,minFilter:y,samples:Math.max(4,ze.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let a=w.state.transmissionRenderTarget[r.id],o=r.viewport||he;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(ve),ye=j.getClearAlpha(),ye<1&&j.setClearColor(16777215,.5),j.clear(),Fe&&et.render(n);let u=j.toneMapping;j.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),w.setupLightsView(r),ke===!0&&Ze.setGlobalState(j.clippingPlanes,r),Ot(e,n,r),He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a),Re.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,kt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,l),j.setClearColor(ve,ye),d!==void 0&&(r.viewport=d),j.toneMapping=u}function Ot(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&kt(o,t,n,s,l,c)}}function kt(e,t,n,r,i,a){re!==null&&i.isNodeMaterial&&re.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function At(e,t,n){t.isScene!==!0&&(t=Pe);let r=Ve.get(e),i=w.state.lights,a=w.state.shadowsArray,o=i.state.version,s=qe.getParameters(e,i.state,a,t,n,w.state.lightProbeGridArray),c=qe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ue.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,gt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Mt(e,s),d}else s.uniforms=qe.getUniforms(e),re!==null&&e.isNodeMaterial&&re.build(e,n,s),e.onBeforeCompile(s,j),d=qe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ze.uniform),Mt(e,s),r.needsLights=It(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=w.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function jt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ic.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Mt(e,t){let n=Ve.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Nt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];x.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(x))return n}return null}function Pt(e,t,n,r,i){t.isScene!==!0&&(t=Pe),He.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=fe===null?j.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Qt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ue.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Ve.get(r),y=w.state.lights;if(ke===!0&&(Ae===!0||e!==me)){let t=e===me&&r.id===pe;Ze.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ze.numPlanes||v.numIntersection!==Ze.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=w.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=At(r,t,i),re&&r.isNodeMaterial&&re.onUpdateProgram(r,x,v));let S=!1,C=!1,T=!1,E=x.getUniforms(),D=v.uniforms;if(N.useProgram(x.program)&&(S=!0,C=!0,T=!0),r.id!==pe&&(pe=r.id,C=!0),v.needsLights){let e=Nt(w.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||me!==e){N.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(M,`projectionMatrix`,e.projectionMatrix),E.setValue(M,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(M,Me.setFromMatrixPosition(e.matrixWorld)),ze.logarithmicDepthBuffer&&E.setValue(M,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(M,`isOrthographic`,e.isOrthographicCamera===!0),me!==e&&(me=e,C=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(M,`sunShadowMap`,y.state.sunShadowMap,He),y.state.directionalShadowMap.length>0&&E.setValue(M,`directionalShadowMap`,y.state.directionalShadowMap,He),y.state.spotShadowMap.length>0&&E.setValue(M,`spotShadowMap`,y.state.spotShadowMap,He),y.state.pointShadowMap.length>0&&E.setValue(M,`pointShadowMap`,y.state.pointShadowMap,He)),i.isSkinnedMesh){E.setOptional(M,i,`bindMatrix`),E.setOptional(M,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(M,`boneTexture`,e.boneTexture,He))}i.isBatchedMesh&&(E.setOptional(M,i,`batchingTexture`),E.setValue(M,`batchingTexture`,i._matricesTexture,He),E.setOptional(M,i,`batchingIdTexture`),E.setValue(M,`batchingIdTexture`,i._indirectTexture,He),E.setOptional(M,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(M,`batchingColorTexture`,i._colorsTexture,He));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&tt.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(M,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=ru()),C){if(E.setValue(M,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Ft(D,T),a&&r.fog===!0&&Je.refreshFogUniforms(D,a),Je.refreshMaterialUniforms(D,r,Se,xe,w.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}Ic.upload(M,jt(v),D,He)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ic.upload(M,jt(v),D,He),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(M,`center`,i.center),E.setValue(M,`modelViewMatrix`,i.modelViewMatrix),E.setValue(M,`normalMatrix`,i.normalMatrix),E.setValue(M,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];st.update(n,x),st.bind(n,x)}}return x}function Ft(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function It(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return fe},this.setRenderTargetTextures=function(e,t,n){let r=Ve.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Ve.get(e.texture).__webglTexture=t,Ve.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Ve.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){fe=e,ce=t,de=n;let r=null,i=!1,a=!1;if(e){let o=Ve.get(e);if(o.__useDefaultFramebuffer!==void 0){N.bindFramebuffer(M.FRAMEBUFFER,o.__webglFramebuffer),he.copy(e.viewport),ge.copy(e.scissor),_e=e.scissorTest,N.viewport(he),N.scissor(ge),N.setScissorTest(_e),pe=-1;return}if(o.__webglFramebuffer===void 0)He.setupRenderTarget(e);else if(o.__hasExternalTextures)He.rebindTextures(e,Ve.get(e.texture).__webglTexture,Ve.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Ve.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);He.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Ve.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&He.useMultisampledRTT(e)===!1?Ve.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,he.copy(e.viewport),ge.copy(e.scissor),_e=e.scissorTest}else he.copy(Te).multiplyScalar(Se).floor(),ge.copy(Ee).multiplyScalar(Se).floor(),_e=De;if(n!==0&&(r=ie),N.bindFramebuffer(M.FRAMEBUFFER,r)&&N.drawBuffers(e,r),N.viewport(he),N.scissor(ge),N.setScissorTest(_e),i){let r=Ve.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Ve.get(e.textures[t]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Ve.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,t.__webglTexture,n)}pe=-1};function Lt(e){let t=Ve.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=ze.textureFormatReadable(e.format),t.__typeReadable=ze.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){F(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Ve.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){N.bindFramebuffer(M.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let u=Lt(o);if(u.__formatReadable===!1){F(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){F(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&M.readPixels(t,n,r,i,it.convert(c),it.convert(l),a)}finally{let e=fe===null?null:Ve.get(fe).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Ve.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){N.bindFramebuffer(M.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let d=Lt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.bufferData(M.PIXEL_PACK_BUFFER,a.byteLength,M.STREAM_READ),M.readPixels(t,n,r,i,it.convert(l),it.convert(u),0),M.bindBuffer(M.PIXEL_PACK_BUFFER,null);let p=fe===null?null:Ve.get(fe).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,p);let m=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await mt(M,m,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,a),M.bindBuffer(M.PIXEL_PACK_BUFFER,null),M.deleteBuffer(f),M.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;He.setTexture2D(e,0),M.copyTexSubImage2D(M.TEXTURE_2D,n,0,0,o,s,i,a),N.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=it.convert(t.format),_=it.convert(t.type),v;t.isData3DTexture?(He.setTexture3D(t,0),v=M.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(He.setTexture2DArray(t,0),v=M.TEXTURE_2D_ARRAY):(He.setTexture2D(t,0),v=M.TEXTURE_2D),N.activeTexture(M.TEXTURE0),N.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,t.flipY),N.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),N.pixelStorei(M.UNPACK_ALIGNMENT,t.unpackAlignment);let y=N.getParameter(M.UNPACK_ROW_LENGTH),b=N.getParameter(M.UNPACK_IMAGE_HEIGHT),x=N.getParameter(M.UNPACK_SKIP_PIXELS),S=N.getParameter(M.UNPACK_SKIP_ROWS),C=N.getParameter(M.UNPACK_SKIP_IMAGES);N.pixelStorei(M.UNPACK_ROW_LENGTH,h.width),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,h.height),N.pixelStorei(M.UNPACK_SKIP_PIXELS,l),N.pixelStorei(M.UNPACK_SKIP_ROWS,u),N.pixelStorei(M.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Ve.get(e),r=Ve.get(t),h=Ve.get(n.__renderTarget),g=Ve.get(r.__renderTarget);N.bindFramebuffer(M.READ_FRAMEBUFFER,h.__webglFramebuffer),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ve.get(e).__webglTexture,i,d+n),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ve.get(t).__webglTexture,a,m+n)),M.blitFramebuffer(l,u,o,s,f,p,o,s,M.DEPTH_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Ve.has(e)){let n=Ve.get(e),r=Ve.get(t);N.bindFramebuffer(M.READ_FRAMEBUFFER,ae),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,n.__webglTexture,i),T?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,r.__webglTexture,a),i===0?T?M.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):M.copyTexSubImage2D(v,a,f,p,l,u,o,s):M.blitFramebuffer(l,u,o,s,f,p,o,s,M.COLOR_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?M.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h);N.pixelStorei(M.UNPACK_ROW_LENGTH,y),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,b),N.pixelStorei(M.UNPACK_SKIP_PIXELS,x),N.pixelStorei(M.UNPACK_SKIP_ROWS,S),N.pixelStorei(M.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&M.generateMipmap(v),N.unbindTexture()},this.initRenderTarget=function(e){Ve.get(e).__webglFramebuffer===void 0&&He.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?He.setTextureCube(e,0):e.isData3DTexture?He.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?He.setTexture2DArray(e,0):He.setTexture2D(e,0),N.unbindTexture()},this.resetState=function(){ce=0,de=0,fe=null,N.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return at}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qt._getUnpackColorSpace()}},au={type:`change`},ou={type:`start`},su={type:`end`},cu=new oi,lu=new $r,uu=Math.cos(70*Ut.DEG2RAD),du=new L,fu=2*Math.PI,pu={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},mu=1e-6,hu=class extends Ro{constructor(e,t=null){super(e,t),this.state=pu.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:l.ROTATE,MIDDLE:l.DOLLY,RIGHT:l.PAN},this.touches={ONE:u.ROTATE,TWO:u.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Wt,this._lastTargetPosition=new L,this._quat=new Wt().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ko,this._sphericalDelta=new ko,this._scale=1,this._panOffset=new L,this._rotateStart=new I,this._rotateEnd=new I,this._rotateDelta=new I,this._panStart=new I,this._panEnd=new I,this._panDelta=new I,this._dollyStart=new I,this._dollyEnd=new I,this._dollyDelta=new I,this._dollyDirection=new L,this._mouse=new I,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_u.bind(this),this._onPointerDown=gu.bind(this),this._onPointerUp=vu.bind(this),this._onContextMenu=Tu.bind(this),this._onMouseWheel=xu.bind(this),this._onKeyDown=Su.bind(this),this._onTouchStart=Cu.bind(this),this._onTouchMove=wu.bind(this),this._onMouseDown=yu.bind(this),this._onMouseMove=bu.bind(this),this._interceptControlDown=Eu.bind(this),this._interceptControlUp=Du.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=pu.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(au),this.update(),this.state=pu.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;du.copy(t).sub(this.target),du.applyQuaternion(this._quat),this._spherical.setFromVector3(du),this.autoRotate&&this.state===pu.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=fu:n>Math.PI&&(n-=fu),r<-Math.PI?r+=fu:r>Math.PI&&(r-=fu),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(du.setFromSpherical(this._spherical),du.applyQuaternion(this._quatInverse),t.copy(this.target).add(du),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=du.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new L(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new L(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=du.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(cu.origin.copy(this.object.position),cu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cu.direction))<uu?this.object.lookAt(this.target):(lu.setFromNormalAndCoplanarPoint(this.object.up,this.target),cu.intersectPlane(lu,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>mu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>mu||this._lastTargetPosition.distanceToSquared(this.target)>mu?(this.dispatchEvent(au),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?fu/60/60*this.autoRotateSpeed:fu/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){du.setFromMatrixColumn(t,0),du.multiplyScalar(-e),this._panOffset.add(du)}_panUp(e,t){this.screenSpacePanning===!0?du.setFromMatrixColumn(t,1):(du.setFromMatrixColumn(t,0),du.crossVectors(this.object.up,du)),du.multiplyScalar(e),this._panOffset.add(du)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;du.copy(r).sub(this.target);let i=du.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(fu*this._rotateDelta.x/t.clientHeight),this._rotateUp(fu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(fu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-fu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(fu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-fu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(fu*this._rotateDelta.x/t.clientHeight),this._rotateUp(fu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new I,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function gu(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function _u(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function vu(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(su),this.state=pu.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function yu(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case l.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=pu.DOLLY;break;case l.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=pu.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=pu.ROTATE}break;case l.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=pu.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=pu.PAN}break;default:this.state=pu.NONE}this.state!==pu.NONE&&this.dispatchEvent(ou)}function bu(e){switch(this.state){case pu.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case pu.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case pu.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function xu(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===pu.NONE&&(e.preventDefault(),this.dispatchEvent(ou),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(su))}function Su(e){this.enabled!==!1&&this._handleKeyDown(e)}function Cu(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case u.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=pu.TOUCH_ROTATE;break;case u.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=pu.TOUCH_PAN;break;default:this.state=pu.NONE}break;case 2:switch(this.touches.TWO){case u.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=pu.TOUCH_DOLLY_PAN;break;case u.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=pu.TOUCH_DOLLY_ROTATE;break;default:this.state=pu.NONE}break;default:this.state=pu.NONE}this.state!==pu.NONE&&this.dispatchEvent(ou)}function wu(e){switch(this._trackPointer(e),this.state){case pu.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case pu.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case pu.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case pu.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=pu.NONE}}function Tu(e){this.enabled!==!1&&e.preventDefault()}function Eu(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Du(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Ou=new pr,ku=new L,Au=class extends oo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new Pr([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new Pr([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new wo(t,6,1);return this.setAttribute(`instanceStart`,new Yr(n,3,0)),this.setAttribute(`instanceEnd`,new Yr(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new wo(t,6,1);return this.setAttribute(`instanceColorStart`,new Yr(n,3,0)),this.setAttribute(`instanceColorEnd`,new Yr(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new la(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Ou.setFromBufferAttribute(t),this.boundingBox.union(Ou))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rr),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)ku.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(ku)),ku.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(ku));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}};z.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new I},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},Wo.line={uniforms:ga.merge([z.common,z.fog,z.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

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

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

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

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

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

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

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
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

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

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

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

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var ju=class extends ya{constructor(e){super({type:`LineMaterial`,uniforms:ga.clone(Wo.line.uniforms),vertexShader:Wo.line.vertexShader,fragmentShader:Wo.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return`WORLD_UNITS`in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return`USE_DASH`in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return`USE_ALPHA_TO_COVERAGE`in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE=``:delete this.defines.USE_ALPHA_TO_COVERAGE)}},Mu=new un,Nu=new L,Pu=new L,Fu=new un,Iu=new un,Lu=new un,Ru=new L,zu=new hn,Bu=new Lo,Vu=new L,Hu=new pr,Uu=new Rr,Wu=new un,Gu,Ku;function qu(e,t,n){return Wu.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),Wu.multiplyScalar(1/Wu.w),Wu.x=Ku/n.width,Wu.y=Ku/n.height,Wu.applyMatrix4(e.projectionMatrixInverse),Wu.multiplyScalar(1/Wu.w),Math.abs(Math.max(Wu.x,Wu.y))}function Ju(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){Bu.start.fromBufferAttribute(i,r),Bu.end.fromBufferAttribute(a,r),Bu.applyMatrix4(n);let o=new L,s=new L;Gu.distanceSqToSegment(Bu.start,Bu.end,s,o),s.distanceTo(o)<Ku*.5&&t.push({point:s,pointOnLine:o,distance:Gu.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,uv1:null})}}function Yu(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;Gu.at(1,Lu),Lu.w=1,Lu.applyMatrix4(t.matrixWorldInverse),Lu.applyMatrix4(r),Lu.multiplyScalar(1/Lu.w),Lu.x*=i.x/2,Lu.y*=i.y/2,Lu.z=0,Ru.copy(Lu),zu.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(Fu.fromBufferAttribute(s,t),Iu.fromBufferAttribute(c,t),Fu.w=1,Iu.w=1,Fu.applyMatrix4(zu),Iu.applyMatrix4(zu),Fu.z>u&&Iu.z>u)continue;if(Fu.z>u){let e=Fu.z-Iu.z,t=(Fu.z-u)/e;Fu.lerp(Iu,t)}else if(Iu.z>u){let e=Iu.z-Fu.z,t=(Iu.z-u)/e;Iu.lerp(Fu,t)}Fu.applyMatrix4(r),Iu.applyMatrix4(r),Fu.multiplyScalar(1/Fu.w),Iu.multiplyScalar(1/Iu.w),Fu.x*=i.x/2,Fu.y*=i.y/2,Iu.x*=i.x/2,Iu.y*=i.y/2,Bu.start.copy(Fu),Bu.start.z=0,Bu.end.copy(Iu),Bu.end.z=0;let o=Bu.closestPointToPointParameter(Ru,!0);Bu.at(o,Vu);let l=Ut.lerp(Fu.z,Iu.z,o),d=l>=-1&&l<=1,f=Ru.distanceTo(Vu)<Ku*.5;if(d&&f){Bu.start.fromBufferAttribute(s,t),Bu.end.fromBufferAttribute(c,t),Bu.start.applyMatrix4(a),Bu.end.applyMatrix4(a);let r=new L,i=new L;Gu.distanceSqToSegment(Bu.start,Bu.end,i,r),n.push({point:i,pointOnLine:r,distance:Gu.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,uv1:null})}}}var Xu=class extends yi{constructor(e=new Au,t=new ju({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)Nu.fromBufferAttribute(t,e),Pu.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+Nu.distanceTo(Pu);let i=new wo(r,2,1);return e.setAttribute(`instanceDistanceStart`,new Yr(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new Yr(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;if(r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;Gu=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;Ku=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),Uu.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?Ku*.5:qu(r,Math.max(r.near,Uu.distanceToPoint(Gu.origin)),s.resolution),Uu.radius+=c,Gu.intersectsSphere(Uu)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Hu.copy(o.boundingBox).applyMatrix4(a);let l;l=n?Ku*.5:qu(r,Math.max(r.near,Hu.distanceToPoint(Gu.origin)),s.resolution),Hu.expandByScalar(l),Gu.intersectsBox(Hu)!==!1&&(n?Ju(this,t):Yu(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Mu),this.material.uniforms.resolution.value.set(Mu.z,Mu.w))}},Zu=[[.12,.29,.66],[.1,.62,.78],[.3,.74,.4],[.95,.83,.25],[.92,.45,.18],[.78,.2,.22]];function Qu(e){e=Math.max(0,Math.min(1,e))*(Zu.length-1);let t=Math.min(Zu.length-2,Math.floor(e)),n=e-t,r=Zu[t],i=Zu[t+1];return[r[0]+(i[0]-r[0])*n,r[1]+(i[1]-r[1])*n,r[2]+(i[2]-r[2])*n]}function $u(e,t){if(!Number.isFinite(e))return[.55,.55,.55];if(e<-t){let n=Math.min(1,(-e-t)/3);return[.25-.15*n,.55-.2*n,.95]}return e<=t?[.2,.78,.35]:[.98,.75-.55*Math.min(1,(e-t)/15),.15]}var ed=class{constructor(e){this.container=e,this.renderer=new iu({antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(2.5,window.devicePixelRatio||1)),e.appendChild(this.renderer.domElement),this.scene=new Qn,this.camera=new no(50,1,.5,2e5),this.camera.up.set(0,0,1),this.camera.position.set(300,-400,300),this.controls=new hu(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.screenSpacePanning=!0,this.controls.maxPolarAngle=Math.PI*.495,this.scene.add(new Wa(15660031,4866096,2.1)),this.sun=new ao(16777215,1.9),this.sun.position.set(-.5,.7,1.2),this.scene.add(this.sun),this.root=new Un,this.exag=new Un,this.exag.add(this.root),this.scene.add(this.exag),this.overlay=new Un,this.root.add(this.overlay),this.origin=null,this.objects=new Map,this.fatMats=new Set,this.vExag=1,this.mode=`3d`,this.follow=!1,this.onTap=null,this.dirty=!0,this.lastRender=0,this.lastT=performance.now(),this.fp={active:!1,x:0,y:0,eye:1.7,heading:0,pitch:-5,move:{f:0,r:0},speed:1.6},this.groundZ=null,this.blasts=new Un,this.root.add(this.blasts),this._makeSky(),this._makeMarker(),this._tapDetect(),this.resize(),window.addEventListener(`resize`,()=>this.resize()),this.controls.addEventListener(`change`,()=>{this.dirty=!0}),this.renderer.setAnimationLoop(()=>this._frame())}setTheme(e){this.bg=new R(e?725015:15331059),this.ar||(this.scene.background=this.fp.active?null:this.bg),this.dirty=!0}invalidate(){this.dirty=!0}resize(){let e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix();for(let n of this.fatMats)n.resolution.set(e,t);this.dirty=!0}setOrigin(e){this.origin||(this.origin={x:Math.round((e.x0+e.x1)/2),y:Math.round((e.y0+e.y1)/2),z:Math.round(e.z0)})}L(e,t,n){return new L(e-this.origin.x,t-this.origin.y,(n??this.origin.z)-this.origin.z)}W(e){return{x:e.x+this.origin.x,y:e.y+this.origin.y,z:e.z+this.origin.z}}setExaggeration(e){this.vExag=e,this.exag.scale.set(1,1,e),this.dirty=!0}removeLayer(e){let t=this.objects.get(e);t&&(this.root.remove(t),t.userData.dispose?.(),t.traverse(e=>{e.geometry?.dispose(),e.material&&[].concat(e.material).forEach(e=>{this.fatMats.delete(e),e.dispose()})}),this.objects.delete(e),this.dirty=!0)}setBlocks(e,t,n,r,i=!0){this.removeLayer(e);let a=new Un;a.userData.layerId=e;let o=this.origin,s=0,c=0;for(let e of t)s+=e.V.length/3,c+=e.T.length/3;if(!c)return;let l=new Float32Array(s*3),u=new Float32Array(s*3),d=new Uint32Array(c*3),f=new Uint32Array(t.length+1),p=0,h=0;t.forEach((e,t)=>{let n=new R(e.color),r=e.V.length/3;for(let t=0;t<r;t++)l[3*(p+t)]=e.V[3*t]-o.x,l[3*(p+t)+1]=e.V[3*t+1]-o.y,l[3*(p+t)+2]=e.V[3*t+2]-o.z,u[3*(p+t)]=n.r,u[3*(p+t)+1]=n.g,u[3*(p+t)+2]=n.b;for(let t=0;t<e.T.length;t++)d[3*h+t]=e.T[t]+p;f[t]=h,p+=r,h+=e.T.length/3}),f[t.length]=h;let g=new Kr;g.setAttribute(`position`,new jr(l,3)),g.setAttribute(`color`,new jr(u,3)),g.setIndex(new jr(d,1)),g.computeVertexNormals();let _=null,v=null;if(n&&r!==`all`){let e=new Float32Array(n.nx*n.ny);for(let t=0;t<e.length;t++)e[t]=Number.isFinite(n.Z[t])?n.Z[t]-o.z:1e9;_=new Si(e,n.nx,n.ny,oe,E),_.minFilter=_.magFilter=m,_.needsUpdate=!0,v={uH:{value:_},uO:{value:new I(n.x0-o.x,n.y0-o.y)},uS:{value:new I(n.nx*n.cs,n.ny*n.cs)}}}let y=(e,t)=>{let n=new xa({vertexColors:!0,side:2,transparent:t<1,opacity:t,depthWrite:t>=1});return v&&(n.onBeforeCompile=t=>{Object.assign(t.uniforms,v),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vLoc;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vLoc = position;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vLoc;
uniform sampler2D uH;
uniform vec2 uO;
uniform vec2 uS;`).replace(`void main() {`,`void main() {
  vec2 uvH = (vLoc.xy - uO) / uS;
  float hT = (uvH.x < 0.0 || uvH.y < 0.0 || uvH.x > 1.0 || uvH.y > 1.0) ? 1e9 : texture(uH, uvH).r;
  bool below = vLoc.z <= hT + 0.05;
  ${e===`below`?`if (!below) discard;`:`if (below) discard;`}`)},n.customProgramCacheKey=()=>`blocks-`+e),n},b=new yi(g,v?y(`below`,1):new xa({vertexColors:!0,side:2}));if(b.userData.pickable=!0,b.userData.triStart=f,b.userData.clipBelow=!!v,a.add(b),v&&r===`ghost`){let e=new yi(g,y(`above`,.18));e.renderOrder=2,a.add(e)}let x=new zi(new aa(g,30),new Di({color:0,transparent:!0,opacity:.35}));v?x.geometry.dispose():a.add(x),a.visible=i,a.userData.dispose=()=>_?.dispose(),this.root.add(a),this.objects.set(e,a),this.dirty=!0}blockAt(e,t){let n=e?.userData.triStart;if(!n||t===void 0)return-1;let r=0,i=n.length-2;for(;r<i;){let e=r+i+1>>1;n[e]<=t?r=e:i=e-1}return r}orient(e,t){let n=this.controls,r=this.camera.position.distanceTo(n.target),i=Math.max(-89,Math.min(-1,t))*Math.PI/180,a=e*Math.PI/180,o=new L(Math.sin(a)*Math.cos(i),Math.cos(a)*Math.cos(i),Math.sin(i)),s=n.target.clone().addScaledVector(o,-r);this.camera.position.lerp(s,.35),this.camera.lookAt(n.target),this.dirty=!0}setLayer(e,t){this.removeLayer(e.id);let n=new Un;n.userData.layerId=e.id;let r=this.origin;if(e.kind===`mesh`&&e.T?.length){let i=e.V.length/3,a=new Float32Array(i*3);for(let t=0;t<i;t++)a[3*t]=e.V[3*t]-r.x,a[3*t+1]=e.V[3*t+1]-r.y,a[3*t+2]=e.V[3*t+2]-r.z;let o=new Kr;o.setAttribute(`position`,new jr(a,3)),o.setIndex(new jr(i>65535?e.T:Uint16Array.from(e.T),1)),o.computeVertexNormals(),t&&o.setAttribute(`color`,new jr(t,3));let s=new yi(o,new xa({color:t?16777215:new R(e.color),vertexColors:!!t,side:2,transparent:e.opacity<1,opacity:e.opacity,depthWrite:e.opacity>=1,polygonOffset:!0,polygonOffsetFactor:e.role===`topo`?2:1,polygonOffsetUnits:1}));if(s.userData.pickable=!0,n.add(s),e.wire){let e=new la(o);n.add(new zi(e,new Di({color:0,transparent:!0,opacity:.25})))}if(e.edges&&e.T.length/3<9e5){let t=new zi(new aa(o,24),new Di({color:e.edgeColor||1054237,transparent:!0,opacity:.6}));t.userData.edges=!0,n.add(t)}}if(e.lines?.length){let t=0;for(let n of e.lines)t+=Math.max(0,n.P.length/3-1);let i=new Float32Array(t*6),a=0;for(let t of e.lines){let e=t.P;for(let t=3;t<e.length;t+=3)i[a++]=e[t-3]-r.x,i[a++]=e[t-2]-r.y,i[a++]=e[t-1]-r.z,i[a++]=e[t]-r.x,i[a++]=e[t+1]-r.y,i[a++]=e[t+2]-r.z}if(e.width>1){let t=new Au().setPositions(i),r=new ju({color:new R(e.color).getHex(),linewidth:e.width,depthTest:!e.onTop,transparent:!0,opacity:e.opacity});r.resolution.set(this.container.clientWidth,this.container.clientHeight),this.fatMats.add(r);let a=new Xu(t,r);a.renderOrder=5,n.add(a),n.visible=e.visible!==!1,this.root.add(n),this.objects.set(e.id,n),this.dirty=!0;return}let o=new Kr;o.setAttribute(`position`,new jr(i,3));let s=new zi(o,new Di({color:new R(e.lineColor||e.color),transparent:e.opacity<1||e.onTop,opacity:e.opacity,depthTest:!e.onTop}));e.onTop&&(s.renderOrder=5),n.add(s)}n.visible=e.visible!==!1,this.root.add(n),this.objects.set(e.id,n),this.dirty=!0}setVisible(e,t){let n=this.objects.get(e);n&&(n.visible=t),this.dirty=!0}fitTo(e){if(!e||!this.origin)return;let t=this.L((e.x0+e.x1)/2,(e.y0+e.y1)/2,(e.z0+e.z1)/2);t.z*=this.vExag;let n=Math.max(15,Math.max(e.x1-e.x0,e.y1-e.y0)/2),r=this.camera.fov*Math.PI/360,i=Math.min(1,this.camera.aspect),a=n/Math.tan(r)/i*(this.mode===`plan`?1.02:.85);this.controls.target.copy(t),this.mode===`plan`?this.camera.position.set(t.x,t.y-.001,t.z+a):this.camera.position.set(t.x,t.y-a*.72,t.z+a*.7),this.controls.update(),this.dirty=!0}setMode(e){this.mode=e;let t=this.controls;if(e===`plan`){t.minPolarAngle=0,t.maxPolarAngle=0,t.touches={ONE:u.PAN,TWO:u.DOLLY_ROTATE},t.mouseButtons={LEFT:l.PAN,MIDDLE:l.DOLLY,RIGHT:l.ROTATE};let e=this.camera.position.distanceTo(t.target);this.camera.position.set(t.target.x,t.target.y-.001,t.target.z+e)}else{t.minPolarAngle=0,t.maxPolarAngle=Math.PI*.495,t.touches={ONE:u.ROTATE,TWO:u.DOLLY_PAN},t.mouseButtons={LEFT:l.ROTATE,MIDDLE:l.DOLLY,RIGHT:l.PAN};let e=this.camera.position.distanceTo(t.target);this.camera.position.set(t.target.x-e*.35,t.target.y-e*.75,t.target.z+e*.55)}t.update(),this.dirty=!0}heading(){let e=new L().subVectors(this.controls.target,this.camera.position);if(Math.hypot(e.x,e.y)<1e-6){let e=new L(0,1,0).applyQuaternion(this.camera.quaternion);return Math.atan2(e.x,e.y)*180/Math.PI}return Math.atan2(e.x,e.y)*180/Math.PI}resetNorth(){let e=this.controls,t=this.camera.position.distanceTo(e.target);this.mode===`plan`?this.camera.position.set(e.target.x,e.target.y-.001,e.target.z+t):this.camera.position.set(e.target.x,e.target.y-t*.8,e.target.z+t*.6),e.update(),this.dirty=!0}_makeMarker(){let e=new Un,t=new yi(new ca(1,20,14),new si({color:2001151,depthTest:!1}));t.renderOrder=10;let n=new yi(new ca(1.7,20,14),new si({color:16777215,depthTest:!1,transparent:!0,opacity:.9}));n.renderOrder=9;let r=new yi(new ea(1.2,3.2,3),new si({color:2001151,depthTest:!1}));r.rotation.x=Math.PI/2,r.position.set(0,3.4,0),r.renderOrder=10;let i=new Un;i.add(r);let a=new yi(new sa(.93,1,48),new si({color:2001151,transparent:!0,opacity:.55,depthTest:!1,side:2}));a.renderOrder=8;let o=new yi(new Qi(1,48),new si({color:2001151,transparent:!0,opacity:.12,depthTest:!1,side:2}));o.renderOrder=7;let s=new Fi(new Kr().setAttribute(`position`,new jr(new Float32Array(6),3)),new Di({color:2001151,depthTest:!1}));s.renderOrder=8;let c=new Un;c.add(n,t,i),e.add(c,a,o,s),e.visible=!1,this.marker={group:e,icon:c,ring:a,disc:o,pin:s,heading:i,dot:t,halo:n},this.root.add(e),this.trail=new Fi(new Kr,new Di({color:2001151,transparent:!0,opacity:.7,depthTest:!1})),this.trail.renderOrder=6,this.root.add(this.trail),this.trailPts=[]}setPosition(e){if(this.dirty=!0,!this.origin||!e){this.marker.group.visible=!1;return}let t=this.marker;t.group.visible=!0;let n=this.L(e.x,e.y,e.z);t.icon.position.copy(n);let r=Math.max(.5,e.acc||1),i=Number.isFinite(e.zGround)?e.zGround-this.origin.z+.15:n.z;t.ring.position.set(n.x,n.y,i),t.ring.scale.setScalar(r),t.disc.position.set(n.x,n.y,i),t.disc.scale.setScalar(r);let a=t.pin.geometry.attributes.position;a.setXYZ(0,n.x,n.y,n.z),a.setXYZ(1,n.x,n.y,i),a.needsUpdate=!0,t.heading.visible=Number.isFinite(e.heading),t.heading.visible&&(t.heading.rotation.z=-e.heading*Math.PI/180);let o=new R(e.color||2001151);t.dot.material.color.copy(o),t.heading.children[0].material.color.copy(o),t.ring.material.color.copy(o),t.disc.material.color.copy(o),this.lastPos=n;let s=this.trailPts[this.trailPts.length-1];if((!s||s.distanceTo(n)>1)&&(this.trailPts.push(n.clone()),this.trailPts.length>2e3&&this.trailPts.shift(),this.trail.geometry.setFromPoints(this.trailPts)),this.follow){let e=n.clone();e.z*=this.vExag;let t=e.sub(this.controls.target);this.controls.target.add(t),this.camera.position.add(t)}}clearTrail(){this.trailPts=[],this.trail.geometry.setFromPoints([]),this.dirty=!0}centerOn(e,t){if(!this.origin)return;let n=this.L(e.x,e.y,e.z);n.z*=this.vExag;let r=new L().subVectors(this.camera.position,this.controls.target);t&&r.setLength(t),this.controls.target.copy(n),this.camera.position.copy(n).add(r),this.controls.update(),this.dirty=!0}clearOverlay(){for(let e of[...this.overlay.children])this.overlay.remove(e),e.geometry?.dispose(),e.material?.dispose();this.dirty=!0}drawPolyline(e,t={}){if(!this.origin||!e.length)return;this.dirty=!0;let n=e.map(e=>this.L(e.x,e.y,(e.z??this.origin.z)+.3));if(t.closed&&n.length>2&&n.push(n[0]),n.length>1){let e=new Fi(new Kr().setFromPoints(n),new Di({color:t.color||16765952,depthTest:!1}));e.renderOrder=11,this.overlay.add(e)}if(t.points!==!1){let e=this._screenScale()*.9;for(let r of n.slice(0,t.closed?-1:void 0)){let n=new yi(new ca(e,12,8),new si({color:t.color||16765952,depthTest:!1}));n.position.copy(r),n.renderOrder=12,n.userData.dot=!0,this.overlay.add(n)}}}drawFlag(e,t=16727409,n){if(!this.origin)return;this.dirty=!0;let r=this.L(e.x,e.y,e.z),i=this._screenScale()*8,a=new Fi(new Kr().setFromPoints([r,r.clone().add(new L(0,0,i))]),new Di({color:t,depthTest:!1}));a.renderOrder=11;let o=new yi(new ca(i*.12,12,8),new si({color:t,depthTest:!1}));o.position.copy(r).add(new L(0,0,i)),o.renderOrder=12,o.userData.dot=!0,this.overlay.add(a,o)}_screenScale(){if(this.fp.active)return .35;let e=this.camera.position.distanceTo(this.controls.target);return Math.max(.3,e/110)}_tapDetect(){let e=this.renderer.domElement,t=null;e.addEventListener(`pointerdown`,e=>{t={x:e.clientX,y:e.clientY,t:performance.now(),n:e.isPrimary}}),e.addEventListener(`pointerup`,e=>{if(t){if(Math.hypot(e.clientX-t.x,e.clientY-t.y)<8&&performance.now()-t.t<450&&this.onTap){let t=this.pick(e.clientX,e.clientY);this.onTap(t,e)}t=null}}),this.controls.addEventListener(`start`,()=>{this.follow&&this.onUserMove&&this.onUserMove()})}pick(e,t){let n=this.renderer.domElement.getBoundingClientRect(),r=new I((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),i=new Eo;i.setFromCamera(r,this.camera);let a=[];this.root.traverse(e=>{e.userData.pickable&&e.visible&&e.parent.visible&&a.push(e)});let o=i.intersectObjects(a,!1).filter(e=>{if(!e.object.userData.clipBelow||!this.groundZ)return!0;let t=this.W({x:e.point.x,y:e.point.y,z:e.point.z/this.vExag}),n=this.groundZ(t.x,t.y);return!Number.isFinite(n)||t.z<=n+.1}),s;if(o.length)s=o[0].point.clone();else{let e=new $r(new L(0,0,1),-this.controls.target.z);if(s=new L,!i.ray.intersectPlane(e,s))return null}return s.z/=this.vExag,{...this.W(s),layerId:o[0]?.object.parent.userData.layerId,onSurface:!!o.length,hitObj:o[0]?.object,faceIndex:o[0]?.faceIndex}}_frame(){let e=performance.now(),t=Math.min(.1,(e-this.lastT)/1e3);this.lastT=e;let n;if(n=this.fp.active?this._updateFP(t):this.controls.update(),!(n||this.dirty||e-this.lastRender>1e3))return;let r=this._screenScale();this.marker.icon.scale.set(r,r,r/this.vExag);for(let e of this.overlay.children)e.userData.dot&&e.scale.set(1,1,1/this.vExag);this.sky.visible&&this.sky.position.copy(this.camera.position),this.renderer.render(this.scene,this.camera),this.dirty=!1,this.lastRender=e,this.onFrame&&this.onFrame()}_makeSky(){let e=new ca(6e3,32,16),t=e.attributes.position,n=new Float32Array(t.count*3),r=new R(2912183),i=new R(13624306),a=new R(9075302);for(let e=0;e<t.count;e++){let o=t.getY(e)/6e3,s=o>=0?i.clone().lerp(r,o**.6):i.clone().lerp(a,Math.min(1,-o*4));n[3*e]=s.r,n[3*e+1]=s.g,n[3*e+2]=s.b}e.setAttribute(`color`,new jr(n,3)),e.rotateX(Math.PI/2),this.sky=new yi(e,new si({vertexColors:!0,side:1,depthWrite:!1,fog:!1})),this.sky.renderOrder=-10,this.sky.visible=!1,this.scene.add(this.sky)}enterFP(e,t,n={}){let r=this.fp;r.active||(r.saved={pos:this.camera.position.clone(),target:this.controls.target.clone(),exag:this.vExag,near:this.camera.near,fov:this.camera.fov,mode:this.mode},this.setExaggeration(1)),r.active=!0,r.x=e,r.y=t,Number.isFinite(n.heading)&&(r.heading=n.heading),Number.isFinite(n.pitch)&&(r.pitch=n.pitch),n.eye&&(r.eye=n.eye),this.controls.enabled=!1,this.camera.near=.1,this.camera.fov=n.fov||62,this.camera.updateProjectionMatrix(),this.sky.visible=!this.ar,this.scene.background=(this.ar,null),this.scene.fog=new Zn(13624306,600,5e3),this.marker.group.visible=!1,this.dirty=!0}exitFP(){let e=this.fp;e.active&&(e.active=!1,this.setAR(!1),this.sky.visible=!1,this.scene.fog=null,this.scene.background=this.bg||null,this.camera.near=e.saved.near,this.camera.fov=e.saved.fov,this.camera.updateProjectionMatrix(),this.setExaggeration(e.saved.exag),this.camera.position.copy(e.saved.pos),this.controls.target.copy(e.saved.target),this.camera.up.set(0,0,1),this.controls.enabled=!0,this.controls.update(),this.dirty=!0)}fpOrient(e,t){this.fp.heading=e,this.fp.pitch=Math.max(-85,Math.min(85,t)),this.dirty=!0}fpLook(e,t){this.fpOrient((this.fp.heading+e+360)%360,this.fp.pitch+t)}fpPlace(e,t){this.fp.x=e,this.fp.y=t,this.dirty=!0}_updateFP(e){let t=this.fp,n=!1;if(t.move.f||t.move.r){let r=t.heading*Math.PI/180,i=t.speed*e;t.x+=(Math.sin(r)*t.move.f+Math.cos(r)*t.move.r)*i,t.y+=(Math.cos(r)*t.move.f-Math.sin(r)*t.move.r)*i,n=!0}let r=this.groundZ?this.groundZ(t.x,t.y):NaN;if(t.z=(Number.isFinite(r)?r:(t.z??this.origin?.z??0)-t.eye)+t.eye,!this.origin)return n;let i=this.L(t.x,t.y,t.z),a=t.heading*Math.PI/180,o=t.pitch*Math.PI/180,s=new L(Math.sin(a)*Math.cos(o),Math.cos(a)*Math.cos(o),Math.sin(o)),c=n||!this.camera.position.equals(i)||!this._lastDir||!this._lastDir.equals(s);return this.camera.position.copy(i),this.camera.up.set(0,0,1),this.camera.lookAt(i.clone().add(s)),this._lastDir=s,n&&this.onFPMove&&this.onFPMove(t),c}setAR(e){this.ar!==e&&(this.ar=e,this.renderer.setClearColor(0,+!e),this.scene.background=e||this.fp.active?null:this.bg||null,this.sky.visible=this.fp.active&&!e,this.scene.fog&&(this.scene.fog.far=e?1e7:5e3),this.root.traverse(t=>{if(!t.isMesh||!t.userData.pickable)return;let n=t.material;e?(n.userData.ar={o:n.opacity,t:n.transparent,d:n.depthWrite},n.transparent=!0,n.opacity=Math.min(n.opacity,.28),n.depthWrite=!1):n.userData.ar&&(n.opacity=n.userData.ar.o,n.transparent=n.userData.ar.t,n.depthWrite=n.userData.ar.d,delete n.userData.ar),n.needsUpdate=!0}),this.dirty=!0)}pickCenter(){let e=this.renderer.domElement.getBoundingClientRect();return this.pick(e.left+e.width/2,e.top+e.height/2)}setBlasts(e,t){for(let e of[...this.blasts.children])this.blasts.remove(e),e.geometry?.dispose(),e.material?.dispose();if(this.origin){for(let n of e){let e=n.holes||[],r=Math.max(1,...e.map(e=>e.t||0)),i=new Float32Array(e.length*6),a=new Float32Array(e.length*6),o=new Float32Array(e.length*3),s=new Float32Array(e.length*3);e.forEach((e,t)=>{let n=this.L(e.x,e.y,e.zc),c=this.L(e.x,e.y,e.zt);i.set([n.x,n.y,n.z+.05,c.x,c.y,c.z],6*t);let l=new R().setHSL(.62-.62*((e.t||0)/r),.9,.55);a.set([l.r,l.g,l.b,l.r*.5,l.g*.5,l.b*.5],6*t),o.set([n.x,n.y,n.z+.15],3*t),s.set([l.r,l.g,l.b],3*t)});let c=new Kr;c.setAttribute(`position`,new jr(i,3)),c.setAttribute(`color`,new jr(a,3));let l=new zi(c,new Di({vertexColors:!0})),u=new Kr;u.setAttribute(`position`,new jr(o,3)),u.setAttribute(`color`,new jr(s,3));let d=new Gi(u,new Bi({vertexColors:!0,size:n.id===t?9:6,sizeAttenuation:!1,depthTest:!1}));if(d.renderOrder=9,this.blasts.add(l,d),n.poly){let e=[];for(let t=0;t<n.poly.length;t+=3)e.push(this.L(n.poly[t],n.poly[t+1],(n.poly[t+2]||this.origin.z)+.2));let r=new Fi(new Kr().setFromPoints(e),new Di({color:n.id===t?16765952:16747008,depthTest:!1}));r.renderOrder=8,this.blasts.add(r)}}this.dirty=!0}}snapshot(){return this.renderer.domElement.toDataURL(`image/png`)}},td=11102230246251565e-32,nd=134217729,rd=3.000000000000001*td;function id(e,t,n,r,i){let a,o,s,c,l=t[0],u=r[0],d=0,f=0;u>l==u>-l?(a=l,l=t[++d]):(a=u,u=r[++f]);let p=0;if(d<e&&f<n)for(u>l==u>-l?(o=l+a,s=a-(o-l),l=t[++d]):(o=u+a,s=a-(o-u),u=r[++f]),a=o,s!==0&&(i[p++]=s);d<e&&f<n;)u>l==u>-l?(o=a+l,c=o-a,s=a-(o-c)+(l-c),l=t[++d]):(o=a+u,c=o-a,s=a-(o-c)+(u-c),u=r[++f]),a=o,s!==0&&(i[p++]=s);for(;d<e;)o=a+l,c=o-a,s=a-(o-c)+(l-c),l=t[++d],a=o,s!==0&&(i[p++]=s);for(;f<n;)o=a+u,c=o-a,s=a-(o-c)+(u-c),u=r[++f],a=o,s!==0&&(i[p++]=s);return(a!==0||p===0)&&(i[p++]=a),p}function ad(e,t){let n=t[0];for(let r=1;r<e;r++)n+=t[r];return n}function B(e){return new Float64Array(e)}var od=(3+16*td)*td,sd=(2+12*td)*td,cd=(9+64*td)*td*td,ld=B(4),ud=B(8),dd=B(12),fd=B(16),pd=B(4);function md(e,t,n,r,i,a,o){let s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=e-i,E=n-i,D=t-a,O=r-a;b=T*O,f=nd*T,p=f-(f-T),m=T-p,f=nd*O,h=f-(f-O),g=O-h,x=m*g-(b-p*h-m*h-p*g),S=D*E,f=nd*D,p=f-(f-D),m=D-p,f=nd*E,h=f-(f-E),g=E-h,C=m*g-(S-p*h-m*h-p*g),_=x-C,d=x-_,ld[0]=x-(_+d)+(d-C),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,ld[1]=y-(_+d)+(d-S),w=v+_,d=w-v,ld[2]=v-(w-d)+(_-d),ld[3]=w;let k=ad(4,ld),ee=sd*o;if(k>=ee||-k>=ee||(d=e-T,s=e-(T+d)+(d-i),d=n-E,l=n-(E+d)+(d-i),d=t-D,c=t-(D+d)+(d-a),d=r-O,u=r-(O+d)+(d-a),s===0&&c===0&&l===0&&u===0)||(ee=cd*o+rd*Math.abs(k),k+=T*u+O*s-(D*l+E*c),k>=ee||-k>=ee))return k;b=s*O,f=nd*s,p=f-(f-s),m=s-p,f=nd*O,h=f-(f-O),g=O-h,x=m*g-(b-p*h-m*h-p*g),S=c*E,f=nd*c,p=f-(f-c),m=c-p,f=nd*E,h=f-(f-E),g=E-h,C=m*g-(S-p*h-m*h-p*g),_=x-C,d=x-_,pd[0]=x-(_+d)+(d-C),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,pd[1]=y-(_+d)+(d-S),w=v+_,d=w-v,pd[2]=v-(w-d)+(_-d),pd[3]=w;let A=id(4,ld,4,pd,ud);b=T*u,f=nd*T,p=f-(f-T),m=T-p,f=nd*u,h=f-(f-u),g=u-h,x=m*g-(b-p*h-m*h-p*g),S=D*l,f=nd*D,p=f-(f-D),m=D-p,f=nd*l,h=f-(f-l),g=l-h,C=m*g-(S-p*h-m*h-p*g),_=x-C,d=x-_,pd[0]=x-(_+d)+(d-C),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,pd[1]=y-(_+d)+(d-S),w=v+_,d=w-v,pd[2]=v-(w-d)+(_-d),pd[3]=w;let te=id(A,ud,4,pd,dd);return b=s*u,f=nd*s,p=f-(f-s),m=s-p,f=nd*u,h=f-(f-u),g=u-h,x=m*g-(b-p*h-m*h-p*g),S=c*l,f=nd*c,p=f-(f-c),m=c-p,f=nd*l,h=f-(f-l),g=l-h,C=m*g-(S-p*h-m*h-p*g),_=x-C,d=x-_,pd[0]=x-(_+d)+(d-C),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,pd[1]=y-(_+d)+(d-S),w=v+_,d=w-v,pd[2]=v-(w-d)+(_-d),pd[3]=w,fd[id(te,dd,4,pd,fd)-1]}function hd(e,t,n,r,i,a){let o=(t-a)*(n-i),s=(e-i)*(r-a),c=o-s,l=Math.abs(o+s);return Math.abs(c)>=od*l?c:-md(e,t,n,r,i,a,l)}(7+56*td)*td,(3+28*td)*td,(26+288*td)*td*td,B(4),B(4),B(4),B(4),B(4),B(4),B(4),B(4),B(4),B(8),B(8),B(8),B(4),B(8),B(8),B(16),B(12),B(192),B(192),(10+96*td)*td,(4+48*td)*td,(44+576*td)*td*td,B(4),B(4),B(4),B(4),B(4),B(4),B(4),B(4),B(8),B(8),B(8),B(8),B(8),B(8),B(8),B(8),B(8),B(4),B(4),B(4),B(8),B(16),B(16),B(16),B(32),B(32),B(48),B(64),B(1152),B(1152),(16+224*td)*td,(5+72*td)*td,(71+1408*td)*td*td,B(4),B(4),B(4),B(4),B(4),B(4),B(4),B(4),B(4),B(4),B(24),B(24),B(24),B(24),B(24),B(24),B(24),B(24),B(24),B(24),B(1152),B(1152),B(1152),B(1152),B(1152),B(2304),B(2304),B(3456),B(5760),B(8),B(8),B(8),B(16),B(24),B(48),B(48),B(96),B(192),B(384),B(384),B(384),B(768),B(96),B(96),B(96),B(1152);var gd=2**-52,_d=new Uint32Array(512),vd=class e{static from(t,n=Ed,r=Dd){let i=t.length,a=new Float64Array(i*2);for(let e=0;e<i;e++){let i=t[e];a[2*e]=n(i),a[2*e+1]=r(i)}return new e(a)}constructor(e){let t=e.length>>1;if(t>0&&typeof e[0]!=`number`)throw Error(`Expected coords to contain numbers.`);this.coords=e;let n=Math.max(2*t-5,0);this._triangles=new Uint32Array(n*3),this._halfedges=new Int32Array(n*3),this._hashSize=Math.ceil(Math.sqrt(t)),this._hullPrev=new Uint32Array(t),this._hullNext=new Uint32Array(t),this._hullTri=new Uint32Array(t),this._hullHash=new Int32Array(this._hashSize),this._ids=new Uint32Array(t),this._dists=new Float64Array(t),this.trianglesLen=0,this._cx=0,this._cy=0,this._hullStart=0,this.hull=this._triangles,this.triangles=this._triangles,this.halfedges=this._halfedges,this.update()}update(){let{coords:e,_hullPrev:t,_hullNext:n,_hullTri:r,_hullHash:i}=this,a=e.length>>1,o=1/0,s=1/0,c=-1/0,l=-1/0;for(let t=0;t<a;t++){let n=e[2*t],r=e[2*t+1];n<o&&(o=n),r<s&&(s=r),n>c&&(c=n),r>l&&(l=r),this._ids[t]=t}let u=(o+c)/2,d=(s+l)/2,f=0,p=0,m=0;for(let t=0,n=1/0;t<a;t++){let r=bd(u,d,e[2*t],e[2*t+1]);r<n&&(f=t,n=r)}let h=e[2*f],g=e[2*f+1];for(let t=0,n=1/0;t<a;t++){if(t===f)continue;let r=bd(h,g,e[2*t],e[2*t+1]);r<n&&r>0&&(p=t,n=r)}let _=e[2*p],v=e[2*p+1],y=1/0;for(let t=0;t<a;t++){if(t===f||t===p)continue;let n=Sd(h,g,_,v,e[2*t],e[2*t+1]);n<y&&(m=t,y=n)}let b=e[2*m],x=e[2*m+1];if(y===1/0){for(let t=0;t<a;t++)this._dists[t]=e[2*t]-e[0]||e[2*t+1]-e[1];wd(this._ids,this._dists,0,a-1);let t=new Uint32Array(a),n=0;for(let e=0,r=-1/0;e<a;e++){let i=this._ids[e],a=this._dists[i];a>r&&(t[n++]=i,r=a)}this.hull=t.subarray(0,n),this.triangles=new Uint32Array,this.halfedges=new Int32Array;return}if(hd(h,g,_,v,b,x)<0){let e=p,t=_,n=v;p=m,_=b,v=x,m=e,b=t,x=n}let S=Cd(h,g,_,v,b,x);this._cx=S.x,this._cy=S.y;for(let t=0;t<a;t++)this._dists[t]=bd(e[2*t],e[2*t+1],S.x,S.y);wd(this._ids,this._dists,0,a-1),this._hullStart=f;let C=3;n[f]=t[m]=p,n[p]=t[f]=m,n[m]=t[p]=f,r[f]=0,r[p]=1,r[m]=2,i.fill(-1),i[this._hashKey(h,g)]=f,i[this._hashKey(_,v)]=p,i[this._hashKey(b,x)]=m,this.trianglesLen=0,this._addTriangle(f,p,m,-1,-1,-1);for(let a=0,o=0,s=0;a<this._ids.length;a++){let c=this._ids[a],l=e[2*c],u=e[2*c+1];if(a>0&&Math.abs(l-o)<=gd&&Math.abs(u-s)<=gd||(o=l,s=u,c===f||c===p||c===m))continue;let d=0;for(let e=0,t=this._hashKey(l,u);e<this._hashSize&&(d=i[(t+e)%this._hashSize],d===-1||d===n[d]);e++);d=t[d];let h=d,g;for(;g=n[h],hd(l,u,e[2*h],e[2*h+1],e[2*g],e[2*g+1])>=0;)if(h=g,h===d){h=-1;break}if(h===-1)continue;let _=this._addTriangle(h,c,n[h],-1,-1,r[h]);r[c]=this._legalize(_+2),r[h]=_,C++;let v=n[h];for(;g=n[v],hd(l,u,e[2*v],e[2*v+1],e[2*g],e[2*g+1])<0;)_=this._addTriangle(v,c,g,r[c],-1,r[v]),r[c]=this._legalize(_+2),n[v]=v,C--,v=g;if(h===d)for(;g=t[h],hd(l,u,e[2*g],e[2*g+1],e[2*h],e[2*h+1])<0;)_=this._addTriangle(g,c,h,-1,r[h],r[g]),this._legalize(_+2),r[g]=_,n[h]=h,C--,h=g;this._hullStart=t[c]=h,n[h]=t[v]=c,n[c]=v,i[this._hashKey(l,u)]=c,i[this._hashKey(e[2*h],e[2*h+1])]=h}this.hull=new Uint32Array(C);for(let e=0,t=this._hullStart;e<C;e++)this.hull[e]=t,t=n[t];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(e,t){return Math.floor(yd(e-this._cx,t-this._cy)*this._hashSize)%this._hashSize}_legalize(e){let{_triangles:t,_halfedges:n,coords:r}=this,i=0,a=0;for(;;){let o=n[e],s=e-e%3;if(a=s+(e+2)%3,o===-1){if(i===0)break;e=_d[--i];continue}let c=o-o%3,l=s+(e+1)%3,u=c+(o+2)%3,d=t[a],f=t[e],p=t[l],m=t[u];if(xd(r[2*d],r[2*d+1],r[2*f],r[2*f+1],r[2*p],r[2*p+1],r[2*m],r[2*m+1])){t[e]=m,t[o]=d;let r=n[u];if(r===-1){let t=this._hullStart;do{if(this._hullTri[t]===u){this._hullTri[t]=e;break}t=this._hullPrev[t]}while(t!==this._hullStart)}this._link(e,r),this._link(o,n[a]),this._link(a,u);let s=c+(o+1)%3;i<_d.length&&(_d[i++]=s)}else{if(i===0)break;e=_d[--i]}}return a}_link(e,t){this._halfedges[e]=t,t!==-1&&(this._halfedges[t]=e)}_addTriangle(e,t,n,r,i,a){let o=this.trianglesLen;return this._triangles[o]=e,this._triangles[o+1]=t,this._triangles[o+2]=n,this._link(o,r),this._link(o+1,i),this._link(o+2,a),this.trianglesLen+=3,o}};function yd(e,t){let n=e/(Math.abs(e)+Math.abs(t));return(t>0?3-n:1+n)/4}function bd(e,t,n,r){let i=e-n,a=t-r;return i*i+a*a}function xd(e,t,n,r,i,a,o,s){let c=e-o,l=t-s,u=n-o,d=r-s,f=i-o,p=a-s,m=c*c+l*l,h=u*u+d*d,g=f*f+p*p;return c*(d*g-h*p)-l*(u*g-h*f)+m*(u*p-d*f)<0}function Sd(e,t,n,r,i,a){let o=n-e,s=r-t,c=i-e,l=a-t,u=o*o+s*s,d=c*c+l*l,f=.5/(o*l-s*c),p=(l*u-s*d)*f,m=(o*d-c*u)*f;return p*p+m*m}function Cd(e,t,n,r,i,a){let o=n-e,s=r-t,c=i-e,l=a-t,u=o*o+s*s,d=c*c+l*l,f=.5/(o*l-s*c);return{x:e+(l*u-s*d)*f,y:t+(o*d-c*u)*f}}function wd(e,t,n,r){if(r-n<=20)for(let i=n+1;i<=r;i++){let r=e[i],a=t[r],o=i-1;for(;o>=n&&t[e[o]]>a;)e[o+1]=e[o--];e[o+1]=r}else{let i=n+r>>1,a=n+1,o=r;Td(e,i,a),t[e[n]]>t[e[r]]&&Td(e,n,r),t[e[a]]>t[e[r]]&&Td(e,a,r),t[e[n]]>t[e[a]]&&Td(e,n,a);let s=e[a],c=t[s];for(;;){do a++;while(t[e[a]]<c);do o--;while(t[e[o]]>c);if(o<a)break;Td(e,a,o)}e[n+1]=e[o],e[o]=s,r-a+1>=o-n?(wd(e,t,a,r),wd(e,t,n,o-1)):(wd(e,t,n,o-1),wd(e,t,a,r))}}function Td(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function Ed(e){return e[0]}function Dd(e){return e[1]}var Od=(()=>{try{return new TextDecoder(`windows-1252`)}catch{return new TextDecoder(`latin1`)}})(),kd=e=>Od.decode(e instanceof Uint8Array?e:new Uint8Array(e)),Ad=e=>{let t=e.lastIndexOf(`.`);return t<0?``:e.slice(t).toLowerCase()},jd=e=>{let t=parseFloat(e);return Number.isFinite(t)?t:0},Md=class extends Error{};function Nd(e){return e.length>=8&&e[4]===118&&e[5]===117&&e[6]===108&&e[7]===90}function Pd(e,t,n,r){let i=t+n,a=r.length,o=0;for(;t<i;){let n=e[t++];if(n<32){let s=n+1;if(o+s>a&&(s=a-o),t+s>i&&(s=i-t),r.set(e.subarray(t,t+s),o),t+=s,o+=s,o>=a)break}else{let s=n>>5;if(s===7){if(t>=i)break;s+=e[t++]}if(t>=i)break;let c=o-((n&31)<<8)-1-e[t++];if(s+=2,c<0)throw new Md(`Flux LZF corrompu`);o+s>a&&(s=a-o);for(let e=0;e<s;e++)r[o++]=r[c++];if(o>=a)break}}return o}function Fd(e){let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=t.getInt32(12,!0),r=t.getInt32(20,!0),i=t.getUint32(24,!0),a=Number(t.getBigInt64(32,!0));if(n<1||n>8||r<=0||r>1<<26||a<=0||a>2**31||i<=0||i>=e.length)throw new Md(`En-tête vulZ incohérent`);let o=[],s=(n,r)=>{if(n+2048>e.length)throw new Md(`Page d'index hors fichier`);for(let i=0;i<256;i++){let a=Number(t.getBigInt64(n+8*i,!0));if(a!==0){if(a<0||a>=e.length)throw new Md(`Pointeur d'index invalide`);r===1?o.push(a):s(a,r-1)}}};s(i,n);let c=new Uint8Array(a),l=new Uint8Array(r+1024),u=0;for(let n of o){if(u>=a)break;if(n+8>e.length)throw new Md(`Bloc compressé hors fichier`);let i=t.getInt32(n,!0);if(i<0||n+8+i>e.length)throw new Md(`Longueur de bloc invalide`);let o=Pd(e,n+8,i,l);c.set(l.subarray(0,Math.min(o,a-u)),u),u+=r}if(u<a)throw new Md(`Données .00t tronquées`);return c}function Id(e,t){let n=new Uint8Array(e),r=Nd(n)?Fd(n):n;if(r.length<120)throw new Md(`Fichier .00t trop court`);let i=new DataView(r.buffer,r.byteOffset,r.byteLength),a=i.getInt32(72,!1),o=i.getInt32(96,!1);if(a<=0||o<=0||120+24*a+24*o>r.length)throw new Md(`Structure .00t non reconnue (sommets=${a}, faces=${o})`);let s=new Float64Array(a*3);for(let e=0,t=120;e<a*3;e++,t+=8)s[e]=i.getFloat64(t,!1);let c=new Uint32Array(o*3);for(let e=0;e<o;e++){let t=120+24*a+24*e;for(let n=0;n<3;n++){let r=i.getInt32(t+4*n,!1)-1;if(r<0||r>=a)throw new Md(`Index de sommet invalide dans la face `+e);c[3*e+n]=r}}return{meshes:[{name:t,format:`Vulcan .00t`,V:s,T:c}],lines:[],notes:[]}}function Ld(e){let t=kd(e).split(`
`),n=[],r=[],i=[],a=[],o=[];for(let e=2;e<t.length;e++){let s=t[e].replace(/\r$/,``);if(!s.trim())continue;let c=s.split(`,`);if(c.length<4)continue;let l=Number(c[0].trim());Number.isInteger(l)&&(r.push(jd(c[1])),n.push(jd(c[2])),i.push(jd(c[3])),a.push(l),o.push(c.length>=5?c.slice(4).join(`,`).trim():``))}return{X:n,Y:r,Z:i,S:a,D:o,count:n.length}}function Rd(e){let t=[],n=null,r=null,i=()=>{if(n&&n.pts.length>=6){let e=Float64Array.from(n.pts),r=e.length/3,i=r>2&&e[0]===e[3*r-3]&&e[1]===e[3*r-2]&&e[2]===e[3*r-1];t.push({name:n.name,P:e,closed:i,code:n.code})}n=null};for(let t=0;t<e.count;t++){if(e.S[t]===0){i(),r=null;continue}if(!n||r!==e.S[t]){i(),r=e.S[t];let a=e.D[t].split(`,`)[0].trim();n={name:`String `+e.S[t]+(a?` — `+a:``),pts:[],code:a}}n.pts.push(e.X[t],e.Y[t],e.Z[t])}return i(),t}function zd(e,t){let n=Ld(e);if(!n.count)throw new Md(`Aucun point lisible dans le .str`);let r=Rd(n);return{meshes:[],lines:r,notes:[`${n.count} points, ${r.length} chaîne(s)`],points:r.length?null:Bd(n)}}function Bd(e){let t=new Float64Array(e.count*3);for(let n=0;n<e.count;n++)t[3*n]=e.X[n],t[3*n+1]=e.Y[n],t[3*n+2]=e.Z[n];return t}function Vd(e,t,n){let r=kd(e).split(`
`),i=(r[0]||``).split(`,`)[0].trim(),a=t.replace(/\.[^.]+$/,``),o=[i.split(/[\\/]/).pop().toLowerCase(),(a+`.str`).toLowerCase()].filter(Boolean),s=null;for(let e of o)if(n&&n.has(e)){s=n.get(e);break}if(!s)throw new Md(`Fichier .str associé introuvable — sélectionnez-le avec le .dtm : `+(i||a+`.str`));let c=Ld(s),l=[],u=[],d=0,f=0,p=1;for(let e=1;e<r.length;e++){let t=r[e].replace(/\r$/,``).trim();if(!t)continue;let n=t.toUpperCase();if(d===0){if(n.startsWith(`OBJECT`)){d=1,p=parseInt(t.split(`,`)[1],10)||1;continue}if(n.startsWith(`TRISOLATION`)){d=1;continue}n.includes(`END`)&&(d=1);continue}if(n.startsWith(`OBJECT`)){p=parseInt(t.split(`,`)[1],10)||p+1;continue}if(n.startsWith(`TRISOLATION`)||n.startsWith(`END`))continue;let i=t.split(`,`);if(i.length<4)continue;let a=Number(i[1])-1,o=Number(i[2])-1,s=Number(i[3])-1;if(![a,o,s].every(e=>Number.isInteger(e)&&e>=0&&e<c.count)){f++;continue}l.push(a,o,s),u.push(p)}let m=Bd(c),h=Uint32Array.from(l),g=af({name:t,format:`Surpac .dtm`,V:m,T:h}),_=[`Points : `+(i||a+`.str`)];f&&_.push(f+` triangle(s) ignoré(s) (index hors du .str)`);let v=nf(m,h,u,e=>`${a} — objet ${e}`,a,`Surpac .dtm`);return v&&_.push(v.length+` objets`),{meshes:[g],lines:[],notes:_,parts:v}}function Hd(e){if(e.length<32)return!1;let t=e[0];if(![3,131,139,48,245].includes(t))return!1;let n=new DataView(e.buffer,e.byteOffset,e.byteLength),r=n.getInt32(4,!0),i=n.getUint16(8,!0),a=n.getUint16(10,!0);return i>32&&a>0&&r>=0&&i+r*a<=e.length+1}function Ud(e,t){let n=new Uint8Array(e),r=new DataView(e),i=r.getInt32(4,!0),a=r.getUint16(8,!0),o=r.getUint16(10,!0),s=[],c=[],l=[],u=1;for(let e=32;e+32<=a&&n[e]!==13;e+=32)s.push(kd(n.subarray(e,e+11)).replace(/[\0 ]+$/,``).toUpperCase()),c.push(n[e+16]),l.push(u),u+=n[e+16];let d=e=>{for(let t of e){let e=s.indexOf(t);if(e>=0)return e}return-1},f=d([`EAST`,`EASTING`,`X`]),p=d([`NORTH`,`NORTHING`,`Y`]),m=d([`RL`,`ELEV`,`Z`]),h=d([`JOIN`,`STRING`,`LINE`]),g=d([`NAME`,`NOM`,`BLOCK`,`ID`,`DESC`,`DESCRIPTION`]);if(f<0||p<0)throw new Md(`Fichier de chaînes Micromine sans champs EAST / NORTH`);let _=(e,t)=>kd(n.subarray(a+e*o+l[t],a+e*o+l[t]+c[t])).trim(),v=[],y=null,b=null,x=()=>{y&&y.pts.length>=6&&v.push({name:y.name,P:Float64Array.from(y.pts),closed:!1})};for(let e=0;e<i&&!(a+(e+1)*o>n.length);e++){if(n[a+e*o]===42)continue;let t=parseFloat(_(e,f)),r=parseFloat(_(e,p));if(!Number.isFinite(t)||!Number.isFinite(r))continue;let i=m>=0?jd(_(e,m)):0,s=h>=0?_(e,h):`1`,c=g>=0?_(e,g):``;(!y||s!==b)&&(x(),y={name:c||`JOIN `+s,pts:[]},b=s),y.pts.push(t,r,i)}return x(),{meshes:[],lines:v,notes:[`Micromine : ${v.length} chaîne(s)`]}}function Wd(e){let t=kd(e).split(/\r?\n/),n=[],r=[];for(let e=0;e+1<t.length;e+=2){let i=parseInt(t[e].trim(),10);if(Number.isNaN(i)){e--;continue}n.push(i),r.push(t[e+1].trim())}return{codes:n,vals:r}}function Gd(e,t){let{codes:n,vals:r}=Wd(e),i=n.length,a=[],o=[],s=[],c=[],l=[],u=new Map,d=e=>(u.has(e)||u.set(e,u.size),u.get(e)),f=(e,t,n,r)=>{o.push(e,t,n),l.push(d(r))},p=0,m=!1;for(;p<i;){if(n[p]!==0){p++;continue}let e=r[p];if(e===`SECTION`&&n[p+1]===2){m=r[p+1]===`ENTITIES`,p+=2;continue}if(e===`ENDSEC`){m=!1,p++;continue}if(!m){p++;continue}let t=p+1;if(e===`3DFACE`){let e=Array(12).fill(0),o=``;for(;t<i&&n[t]!==0;){let i=n[t],a=r[t];i===8?o=a:i>=10&&i<=13?e[(i-10)*3]=jd(a):i>=20&&i<=23?e[(i-20)*3+1]=jd(a):i>=30&&i<=33&&(e[(i-30)*3+2]=jd(a)),t++}let s=a.length/3;a.push(...e),f(s,s+1,s+2,o),(e[6]!==e[9]||e[7]!==e[10]||e[8]!==e[11])&&f(s,s+2,s+3,o),p=t;continue}if(e===`LINE`){let e=[0,0,0,0,0,0],a=``;for(;t<i&&n[t]!==0;){let i=n[t],o=r[t];i===8?a=o:i===10?e[0]=jd(o):i===20?e[1]=jd(o):i===30?e[2]=jd(o):i===11?e[3]=jd(o):i===21?e[4]=jd(o):i===31&&(e[5]=jd(o)),t++}s.push({name:a||`LINE`,P:Float64Array.from(e),closed:!1,layer:a}),p=t;continue}if(e===`POINT`){let e=[0,0,0];for(;t<i&&n[t]!==0;){let i=n[t];i===10?e[0]=jd(r[t]):i===20?e[1]=jd(r[t]):i===30&&(e[2]=jd(r[t])),t++}c.push(...e),p=t;continue}if(e===`LWPOLYLINE`){let e=0,a=!1,o=``,c=0,l=!1,u=[];for(;t<i&&n[t]!==0;){let i=n[t],s=r[t];i===8?o=s:i===38?e=jd(s):i===70?a=!!(parseInt(s,10)&1):i===10?(c=jd(s),l=!0):i===20&&l&&(u.push(c,jd(s)),l=!1),t++}let d=[];for(let t=0;t<u.length/2;t++)d.push(u[2*t],u[2*t+1],e);a&&d.length>3&&d.push(d[0],d[1],d[2]),d.length>=6&&s.push({name:o||`LWPOLYLINE`,P:Float64Array.from(d),closed:a,layer:o}),p=t;continue}if(e===`POLYLINE`){let e=0,o=``;for(;t<i&&n[t]!==0;)n[t]===8&&(o=r[t]),n[t]===70&&(e=parseInt(r[t],10)||0),t++;let c=!!(e&64),l=!!(e&16),u=a.length/3,d=[],m=0,h=0;for(;t<i&&n[t]===0&&r[t]===`VERTEX`;){let e=t+1,s=0,l=0,p=0,m=0,h=[0,0,0,0];for(;e<i&&n[e]!==0;){let t=n[e],i=r[e];t===10?s=jd(i):t===20?l=jd(i):t===30?p=jd(i):t===70?m=parseInt(i,10)||0:t>=71&&t<=74&&(h[t-71]=Math.abs(parseInt(i,10)||0)),e++}c?m&64?a.push(s,l,p):m&128&&h[0]>0&&h[1]>0&&h[2]>0&&(f(u+h[0]-1,u+h[1]-1,u+h[2]-1,o),h[3]>0&&h[3]!==h[2]&&f(u+h[0]-1,u+h[2]-1,u+h[3]-1,o)):d.push(s,l,p),t=e}if(l&&!c){let e=p+1;for(;e<i&&n[e]!==0;)n[e]===71&&(m=parseInt(r[e],10)),n[e]===72&&(h=parseInt(r[e],10)),e++;if(m>1&&h>1&&d.length/3===m*h){let e=a.length/3;a.push(...d);for(let t=0;t<m-1;t++)for(let n=0;n<h-1;n++){let r=e+t*h+n,i=r+1,a=r+h,s=a+1;f(r,i,s,o),f(r,s,a,o)}}}else if(!c){let t=!!(e&1);t&&d.length>3&&d.push(d[0],d[1],d[2]),d.length>=6&&s.push({name:o||`POLYLINE`,P:Float64Array.from(d),closed:t,layer:o})}for(;t<i&&(n[t]!==0||r[t]===`VERTEX`);)t++;p=t;continue}p++}let h=[];if(o.length){let e=a.length/3;for(let t of o)if(t>=e)throw new Md(`Index de face DXF invalide`);h.push(of({name:t,format:`DXF`,V:Float64Array.from(a),T:Uint32Array.from(o)},1e-4))}let g=null;if(u.size>1){let e=[...u.keys()];g=nf(Float64Array.from(a),Uint32Array.from(o),l,t=>e[t],t,`DXF`),g&&(g=g.map(e=>of(e,1e-4)))}let _=[];if(h.length&&_.push(`${h[0].T.length/3} triangle(s)`),s.length){let e=new Set(s.map(e=>e.layer||e.name));_.push(`${s.length} ligne(s) sur ${e.size} calque(s)`)}return g&&_.push(`${g.length} calques de triangles`),{meshes:h,lines:s,notes:_,parts:g,points:c.length?Float64Array.from(c):null}}function Kd(e,t){let n=[],r=[],i=[],a=[],o=-1;for(let t of kd(e).split(`
`)){let e=t.trim();if(e.startsWith(`v `)){let t=e.split(/\s+/);n.push(jd(t[1]),jd(t[2]),jd(t[3]))}else if(e.startsWith(`o `)||e.startsWith(`g `))a.push(e.slice(2).trim()),o=a.length-1;else if(e.startsWith(`f `)){let t=e.split(/\s+/).slice(1),a=n.length/3,s=t.map(e=>{let t=parseInt(e.split(`/`)[0],10);return t<0?a+t:t-1});for(let e=1;e+1<s.length;e++)r.push(s[0],s[e],s[e+1]),i.push(o)}}let s=Float64Array.from(n),c=Uint32Array.from(r),l=nf(s,c,i,e=>a[e],t,`OBJ`);return{meshes:[{name:t,format:`OBJ`,V:s,T:c}],lines:[],notes:l?[l.length+` groupes`]:[],parts:l}}function qd(e,t){let n=new Uint8Array(e),r=new DataView(e),i=null;if(n.length>=84){let e=r.getUint32(80,!0);if(84+50*e===n.length){i=new Float64Array(e*9);for(let t=0;t<e;t++)for(let e=0;e<9;e++)i[9*t+e]=r.getFloat32(84+50*t+12+4*e,!0)}}if(!i){let t=[];for(let n of kd(e).split(`
`)){let e=n.trim();if(e.startsWith(`vertex`)){let n=e.split(/\s+/);t.push(jd(n[1]),jd(n[2]),jd(n[3]))}}i=Float64Array.from(t)}let a=new Uint32Array(i.length/3);for(let e=0;e<a.length;e++)a[e]=e;return{meshes:[of({name:t,format:`STL`,V:i,T:a},1e-4)],lines:[],notes:[]}}function Jd(e,t){let n=new Uint8Array(e),r=new DataView(e),i=0,a=()=>{let e=i;for(;i<n.length&&n[i]!==10;)i++;let t=kd(n.subarray(e,i)).replace(/\r$/,``);return i++,t};if(a().trim()!==`ply`)throw new Md(`En-tête PLY invalide`);let o=`ascii`,s=[];for(;i<n.length;){let e=a().trim().split(/\s+/);if(e[0]===`format`)o=e[1];else if(e[0]===`element`)s.push({name:e[1],count:parseInt(e[2],10),props:[]});else if(e[0]===`property`&&s.length)s[s.length-1].props.push(e);else if(e[0]===`end_header`)break}let c=o===`ascii`,l=o!==`binary_big_endian`,u=null,d=0;c&&(u=kd(n.subarray(i)).split(/\s+/).filter(Boolean));let f={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4},p=e=>{if(c)return jd(u[d++]);let t;switch(e){case`char`:case`int8`:t=r.getInt8(i);break;case`uchar`:case`uint8`:t=r.getUint8(i);break;case`short`:case`int16`:t=r.getInt16(i,l);break;case`ushort`:case`uint16`:t=r.getUint16(i,l);break;case`int`:case`int32`:t=r.getInt32(i,l);break;case`uint`:case`uint32`:t=r.getUint32(i,l);break;case`float`:case`float32`:t=r.getFloat32(i,l);break;default:t=r.getFloat64(i,l)}return i+=f[e]||8,t},m=[],h=[];for(let e of s){let t=e.props.map(e=>e[e.length-1]),n=t.indexOf(`x`),r=t.indexOf(`y`),i=t.indexOf(`z`),a=Array(e.props.length);for(let t=0;t<e.count;t++){for(let t=0;t<e.props.length;t++){let n=e.props[t];if(n[1]===`list`){let t=p(n[2]),r=[];for(let e=0;e<t;e++)r.push(p(n[3]));if(e.name===`face`)for(let e=1;e+1<t;e++)h.push(r[0],r[e],r[e+1])}else a[t]=p(n[1])}e.name===`vertex`&&n>=0&&r>=0&&i>=0&&m.push(a[n],a[r],a[i])}}return!h.length&&m.length>=9?{meshes:[],lines:[],notes:[`Nuage de points PLY`],points:Float64Array.from(m)}:{meshes:[{name:t,format:`PLY`,V:Float64Array.from(m),T:Uint32Array.from(h)}],lines:[],notes:[]}}function Yd(e,t){let n=new DOMParser().parseFromString(kd(e),`application/xml`),r=[],i=[],a=e=>e.trim().split(/[\s,]+/).map(Number);for(let e of n.getElementsByTagNameNS(`*`,`Surface`)){let n=new Map,i=[],o=[];for(let t of e.getElementsByTagNameNS(`*`,`P`)){let e=a(t.textContent);e.length>=3&&(n.set(t.getAttribute(`id`)??String(i.length/3+1),i.length/3),i.push(e[1],e[0],e[2]))}for(let t of e.getElementsByTagNameNS(`*`,`F`)){if(t.getAttribute(`i`)===`1`)continue;let e=t.textContent.trim().split(/\s+/),r=n.get(e[0]),i=n.get(e[1]),a=n.get(e[2]);r!==void 0&&i!==void 0&&a!==void 0&&o.push(r,i,a)}o.length&&r.push({name:e.getAttribute(`name`)||t,format:`LandXML`,V:Float64Array.from(i),T:Uint32Array.from(o)})}for(let e of[`PntList3D`,`PntList2D`])for(let t of n.getElementsByTagNameNS(`*`,e)){let n=a(t.textContent),r=e===`PntList3D`?3:2,o=[];for(let e=0;e+r-1<n.length;e+=r)o.push(n[e+1],n[e],r===3?n[e+2]:0);let s=t.closest?t.closest(`[name]`):null;o.length>=6&&i.push({name:s?.getAttribute(`name`)||`Ligne `+(i.length+1),P:Float64Array.from(o),closed:!1})}return{meshes:r,lines:i,notes:[`${r.length} surface(s) LandXML`],parts:r.length>1?r:null}}function Xd(e,t){let n=[],r=kd(e).split(`
`);for(let e of r){let t=e.trim();if(!t)continue;let r=(t.includes(`;`)?t.split(/[;\s\t]+/).map(e=>e.replace(`,`,`.`)):t.split(/[,\s\t]+/)).filter(Boolean).map(Number),i=r.findIndex(e=>Number.isFinite(e));i<0||(r.length-i>=4&&Number.isInteger(r[i])&&Math.abs(r[i])<1e6&&Math.abs(r[i+1])>1e3&&i++,!(r.length-i<3||![r[i],r[i+1],r[i+2]].every(Number.isFinite))&&n.push(r[i],r[i+1],r[i+2]))}if(n.length<9)throw new Md(`Aucun point X Y Z lisible`);return{meshes:[],lines:[],notes:[`${n.length/3} points`],points:Float64Array.from(n)}}function Zd(e,t){let n=kd(e).split(/\s+/).filter(Boolean),r={},i=0;for(;i+1<n.length&&/^[a-z_]+$/i.test(n[i]);)r[n[i].toLowerCase()]=Number(n[i+1]),i+=2;let a=r.ncols,o=r.nrows,s=r.cellsize;if(!a||!o||!s)throw new Md(`En-tête de grille .asc incomplet`);let c=r.xllcorner??r.xllcenter-s/2,l=r.yllcorner??r.yllcenter-s/2,u=r.nodata_value??-9999,d=1;for(;Math.ceil(a/d)*Math.ceil(o/d)>15e5;)d++;let f=Math.ceil(a/d),p=Math.ceil(o/d),m=new Float64Array(f*p).fill(NaN);for(let e=0;e<o;e++)for(let t=0;t<a;t++){let r=Number(n[i++]);e%d||t%d||r===u||!Number.isFinite(r)||(m[((o-1-e)/d|0)*f+(t/d|0)]=r)}let h=Qd(m,f,p,c+s/2,l+s/2+(o-1)%d*s,s*d);return h.name=t,h.format=`Grille ESRI .asc`,{meshes:[h],lines:[],notes:[`Grille ${a}×${o}`+(d>1?`, sous-échantillonnée ×${d}`:``)]}}function Qd(e,t,n,r,i,a){let o=new Int32Array(t*n).fill(-1),s=[];for(let c=0;c<n;c++)for(let n=0;n<t;n++){let l=e[c*t+n];Number.isFinite(l)&&(o[c*t+n]=s.length/3,s.push(r+n*a,i+c*a,l))}let c=[];for(let e=0;e+1<n;e++)for(let n=0;n+1<t;n++){let r=o[e*t+n],i=o[e*t+n+1],a=o[(e+1)*t+n],s=o[(e+1)*t+n+1];r>=0&&i>=0&&s>=0&&c.push(r,i,s),r>=0&&s>=0&&a>=0&&c.push(r,s,a)}return{V:Float64Array.from(s),T:Uint32Array.from(c)}}function $d(e,t,n=0){let r=e.length/3;if(r<3)throw new Md(`Pas assez de points pour trianguler`);let i=0,a=0;for(let t=0;t<r;t++)i+=e[3*t],a+=e[3*t+1];i/=r,a/=r;let o=new Float64Array(r*2);for(let t=0;t<r;t++)o[2*t]=e[3*t]-i,o[2*t+1]=e[3*t+1]-a;let s=new vd(o).triangles,c=(e,t)=>Math.hypot(o[2*e]-o[2*t],o[2*e+1]-o[2*t+1]);if(!n){let e=[];for(let t=0;t<s.length;t+=Math.max(3,3*Math.floor(s.length/3/4e3)))e.push(c(s[t],s[t+1]));e.sort((e,t)=>e-t),n=Math.max(5,(e[e.length>>1]||1)*8)}let l=[];for(let e=0;e<s.length;e+=3){let t=s[e],r=s[e+1],i=s[e+2];c(t,r)<=n&&c(r,i)<=n&&c(i,t)<=n&&l.push(t,r,i)}return af({name:t,format:`Triangulation`,V:Float64Array.from(e),T:Uint32Array.from(l)})}function ef(e,t,n=2){let r=[];for(let t of e){let e=t.P,i=e.length/3;for(let t=0;t<i;t++){if(t>0){let i=e[3*t]-e[3*t-3],a=e[3*t+1]-e[3*t-2],o=e[3*t+2]-e[3*t-1],s=Math.floor(Math.hypot(i,a)/n);for(let n=1;n<s;n++){let c=n/s;r.push(e[3*t-3]+c*i,e[3*t-2]+c*a,e[3*t-1]+c*o)}}r.push(e[3*t],e[3*t+1],e[3*t+2])}}return $d(tf(r),t)}function tf(e){let t=new Set,n=[];for(let r=0;r<e.length;r+=3){let i=Math.round(e[r]*100)+`,`+Math.round(e[r+1]*100);t.has(i)||(t.add(i),n.push(e[r],e[r+1],e[r+2]))}return n}function nf(e,t,n,r,i,a){let o=new Map;for(let e=0;e<t.length/3;e++){let r=n[e];o.has(r)||o.set(r,[]),o.get(r).push(t[3*e],t[3*e+1],t[3*e+2])}return o.size<2?null:[...o].map(([t,n])=>af({name:r(t)||`${i} — ${t}`,format:a,V:e,T:Uint32Array.from(n)}))}function rf(e,t=4){let n=e.V.length/3,r=new Int32Array(n);for(let e=0;e<n;e++)r[e]=e;let i=e=>{for(;r[e]!==e;)r[e]=r[r[e]],e=r[e];return e},a=e.T;for(let e=0;e<a.length;e+=3){let t=i(a[e]),n=i(a[e+1]);t!==n&&(r[n]=t);let o=i(a[e]),s=i(a[e+2]);o!==s&&(r[s]=o)}let o=new Int32Array(a.length/3);for(let e=0;e<a.length/3;e++)o[e]=i(a[3*e]);let s=nf(e.V,a,o,()=>null,e.name,e.format);if(!s)return[e];let c=s.filter(e=>e.T.length/3>=t);return c.forEach((t,n)=>{t.name=`${e.name} #${n+1}`}),c.length?c:[e]}function af(e){let t=e.V.length/3,n=new Int32Array(t).fill(-1),r=0;for(let t of e.T)n[t]<0&&(n[t]=r++);if(r===t)return e;let i=new Float64Array(r*3);for(let r=0;r<t;r++)n[r]>=0&&(i[3*n[r]]=e.V[3*r],i[3*n[r]+1]=e.V[3*r+1],i[3*n[r]+2]=e.V[3*r+2]);let a=new Uint32Array(e.T.length);for(let t=0;t<a.length;t++)a[t]=n[e.T[t]];return{...e,V:i,T:a}}function of(e,t){let n=e.V.length/3,r=new Uint32Array(n),i=new Map,a=[],o=1/t;for(let t=0;t<n;t++){let n=Math.round(e.V[3*t]*o)+`:`+Math.round(e.V[3*t+1]*o)+`:`+Math.round(e.V[3*t+2]*o),s=i.get(n);s===void 0&&(s=a.length/3,i.set(n,s),a.push(e.V[3*t],e.V[3*t+1],e.V[3*t+2])),r[t]=s}let s=[];for(let t=0;t<e.T.length;t+=3){let n=r[e.T[t]],i=r[e.T[t+1]],a=r[e.T[t+2]];n!==i&&i!==a&&n!==a&&s.push(n,i,a)}return{...e,V:Float64Array.from(a),T:Uint32Array.from(s)}}var sf=[`.00t`,`.dtm`,`.str`,`.dxf`,`.obj`,`.stl`,`.ply`,`.xml`,`.landxml`,`.xyz`,`.csv`,`.txt`,`.pts`,`.asc`];function cf(e,t,n){let r=Ad(e),i=new Uint8Array(t);switch(r){case`.00t`:return Id(t,e);case`.dtm`:return Vd(t,e,n);case`.str`:return Hd(i)?Ud(t,e):zd(t,e);case`.dxf`:return Gd(t,e);case`.obj`:return Kd(t,e);case`.stl`:return qd(t,e);case`.ply`:return Jd(t,e);case`.xml`:case`.landxml`:return Yd(t,e);case`.xyz`:case`.csv`:case`.txt`:case`.pts`:return Xd(t,e);case`.asc`:return Zd(t,e);default:if(Nd(i))return Id(t,e);throw new Md(`Format non reconnu : `+(r||e))}}function lf(e){let t=1/0,n=1/0,r=1/0,i=-1/0,a=-1/0,o=-1/0;for(let s=0;s<e.length;s+=3){let c=e[s],l=e[s+1],u=e[s+2];c<t&&(t=c),c>i&&(i=c),l<n&&(n=l),l>a&&(a=l),u<r&&(r=u),u>o&&(o=u)}return{x0:t,y0:n,z0:r,x1:i,y1:a,z1:o}}function uf(e,t){return e?t?{x0:Math.min(e.x0,t.x0),y0:Math.min(e.y0,t.y0),z0:Math.min(e.z0,t.z0),x1:Math.max(e.x1,t.x1),y1:Math.max(e.y1,t.y1),z1:Math.max(e.z1,t.z1)}:e:t}var df=class{constructor(e,t){this.V=e,this.T=t,this.b=lf(e);let n=t.length/3,r=Math.max(1e-6,this.b.x1-this.b.x0),i=Math.max(1e-6,this.b.y1-this.b.y0),a=Math.max(1,Math.min(n/2,25e4));this.cs=Math.max(.5,Math.sqrt(r*i/a)),this.nx=Math.ceil(r/this.cs)+1,this.ny=Math.ceil(i/this.cs)+1;let o=new Uint32Array(this.nx*this.ny+1),s=(n,r)=>{let i=3*t[3*n],a=3*t[3*n+1],o=3*t[3*n+2],s=this.ix(Math.min(e[i],e[a],e[o])),c=this.ix(Math.max(e[i],e[a],e[o])),l=this.iy(Math.min(e[i+1],e[a+1],e[o+1])),u=this.iy(Math.max(e[i+1],e[a+1],e[o+1]));for(let e=l;e<=u;e++)for(let t=s;t<=c;t++)r(e*this.nx+t)};for(let e=0;e<n;e++)s(e,e=>o[e+1]++);for(let e=1;e<o.length;e++)o[e]+=o[e-1];this.start=o,this.items=new Uint32Array(o[o.length-1]);let c=o.slice(0,-1);for(let e=0;e<n;e++)s(e,t=>{this.items[c[t]++]=e})}ix(e){return Math.min(this.nx-1,Math.max(0,Math.floor((e-this.b.x0)/this.cs)))}iy(e){return Math.min(this.ny-1,Math.max(0,Math.floor((e-this.b.y0)/this.cs)))}zAt(e,t){if(e<this.b.x0||e>this.b.x1||t<this.b.y0||t>this.b.y1)return NaN;let n=this.iy(t)*this.nx+this.ix(e),r=this.V,i=this.T,a=NaN;for(let o=this.start[n];o<this.start[n+1];o++){let n=this.items[o],s=3*i[3*n],c=3*i[3*n+1],l=3*i[3*n+2],u=ff(r[s],r[s+1],r[s+2],r[c],r[c+1],r[c+2],r[l],r[l+1],r[l+2],e,t);u===u&&!(u<=a)&&(a=u)}return a}};function ff(e,t,n,r,i,a,o,s,c,l,u){let d=(i-s)*(e-o)+(o-r)*(t-s);if(Math.abs(d)<1e-12)return NaN;let f=((i-s)*(l-o)+(o-r)*(u-s))/d,p=((s-t)*(l-o)+(e-o)*(u-s))/d,m=1-f-p,h=-1e-9;return f<h||p<h||m<h?NaN:f*n+p*a+m*c}function pf(e,t,n,r){let{x0:i,y0:a,cs:o,nx:s,ny:c}=n,l=r||new Float32Array(s*c).fill(NaN);for(let n=0;n<t.length;n+=3){let r=3*t[n],u=3*t[n+1],d=3*t[n+2],f=e[r],p=e[r+1],m=e[r+2],h=e[u],g=e[u+1],_=e[u+2],v=e[d],y=e[d+1],b=e[d+2],x=(g-y)*(f-v)+(v-h)*(p-y);if(Math.abs(x)<1e-12)continue;let S=Math.max(0,Math.ceil((Math.min(f,h,v)-i)/o)),C=Math.min(s-1,Math.floor((Math.max(f,h,v)-i)/o)),w=Math.max(0,Math.ceil((Math.min(p,g,y)-a)/o)),T=Math.min(c-1,Math.floor((Math.max(p,g,y)-a)/o));for(let e=w;e<=T;e++){let t=a+e*o;for(let n=S;n<=C;n++){let r=i+n*o,a=((g-y)*(r-v)+(v-h)*(t-y))/x;if(a<-1e-9)continue;let c=((y-p)*(r-v)+(f-v)*(t-y))/x;if(c<-1e-9||a+c>1+1e-9)continue;let u=a*m+c*_+(1-a-c)*b,d=e*s+n;l[d]>=u||(l[d]=u)}}}return l}function mf(e,t){let n=new Map,r=(e,t)=>e<t?e*4294967296+t:t*4294967296+e;for(let e=0;e<t.length;e+=3)for(let i=0;i<3;i++){let a=t[e+i],o=t[e+(i+1)%3],s=r(a,o),c=n.get(s);c?c.n++:n.set(s,{a,b:o,n:1})}let i=new Map;for(let e of n.values())e.n===1&&(i.has(e.a)||i.set(e.a,[]),i.get(e.a).push(e.b),i.has(e.b)||i.set(e.b,[]),i.get(e.b).push(e.a));let a=new Set,o=[];for(let t of i.keys()){if(a.has(t))continue;let n=[t];a.add(t);let r=t,s=-1;for(;;){let e=i.get(r).find(e=>e!==s&&!a.has(e));if(e===void 0)break;n.push(e),a.add(e),s=r,r=e}if(n.length<3)continue;let c=new Float64Array((n.length+1)*3);n.forEach((t,n)=>{c[3*n]=e[3*t],c[3*n+1]=e[3*t+1],c[3*n+2]=e[3*t+2]}),c[3*n.length]=c[0],c[3*n.length+1]=c[1],c[3*n.length+2]=c[2],o.push({P:c,area:Math.abs(hf(c))})}return o.sort((e,t)=>t.area-e.area),o}function hf(e){let t=0,n=e.length/3;for(let r=0;r<n;r++){let i=(r+1)%n;t+=e[3*r]*e[3*i+1]-e[3*i]*e[3*r+1]}return t/2}function gf(e,t,n){let r=!1,i=n.length/3;for(let a=0,o=i-1;a<i;o=a++){let i=n[3*a],s=n[3*a+1],c=n[3*o],l=n[3*o+1];s>t!=l>t&&e<(c-i)*(t-s)/(l-s)+i&&(r=!r)}return r}function _f(e,t,n){let r={d:1/0,x:NaN,y:NaN,z:NaN,seg:-1};for(let i=0;i+5<n.length;i+=3){let a=n[i],o=n[i+1],s=n[i+3],c=n[i+4],l=s-a,u=c-o,d=l*l+u*u,f=d>0?((e-a)*l+(t-o)*u)/d:0;f=Math.max(0,Math.min(1,f));let p=a+f*l,m=o+f*u,h=Math.hypot(e-p,t-m);h<r.d&&(r={d:h,x:p,y:m,z:n[i+2]+f*(n[i+5]-n[i+2]),seg:i/3})}return r}function vf(e){let t=0;for(let n=3;n<e.length;n+=3)t+=Math.hypot(e[n]-e[n-3],e[n+1]-e[n-2]);return t}function yf(e,t,n,r,i,a=300){let o=Math.hypot(r-t,i-n),s=[];for(let c=0;c<=a;c++){let l=c/a;s.push({s:l*o,z:e.zAt(t+l*(r-t),n+l*(i-n))})}return s}function bf(e,t,n,r){return(Math.atan2(n-e,r-t)*180/Math.PI+360)%360}function xf(e){e(`EPSG:4326`,`+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees`),e(`EPSG:4269`,`+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees`),e(`EPSG:3857`,`+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs`);for(var t=1;t<=60;++t)e(`EPSG:`+(32600+t),`+proj=utm +zone=`+t+` +datum=WGS84 +units=m`),e(`EPSG:`+(32700+t),`+proj=utm +zone=`+t+` +south +datum=WGS84 +units=m`);e(`EPSG:5041`,`+title=WGS 84 / UPS North (E,N) +proj=stere +lat_0=90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m`),e(`EPSG:5042`,`+title=WGS 84 / UPS South (E,N) +proj=stere +lat_0=-90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m`),e.WGS84=e[`EPSG:4326`],e[`EPSG:3785`]=e[`EPSG:3857`],e.GOOGLE=e[`EPSG:3857`],e[`EPSG:900913`]=e[`EPSG:3857`],e[`EPSG:102113`]=e[`EPSG:3857`]}var Sf=6378137,Cf=6356752.314,wf=.0066943799901413165,Tf=484813681109536e-20,V=Math.PI/2,Ef=.16666666666666666,Df=.04722222222222222,Of=.022156084656084655,kf=1e-10,Af=.017453292519943295,jf=57.29577951308232,Mf=Math.PI/4,Nf=Math.PI*2,Pf=3.14159265359,Ff={};Ff.greenwich=0,Ff.lisbon=-9.131906111111,Ff.paris=2.337229166667,Ff.bogota=-74.080916666667,Ff.madrid=-3.687938888889,Ff.rome=12.452333333333,Ff.bern=7.439583333333,Ff.jakarta=106.807719444444,Ff.ferro=-17.666666666667,Ff.brussels=4.367975,Ff.stockholm=18.058277777778,Ff.athens=23.7163375,Ff.oslo=10.722916666667;var If={mm:{to_meter:.001},cm:{to_meter:.01},ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937},fath:{to_meter:1.8288},kmi:{to_meter:1852},"us-ch":{to_meter:20.1168402336805},"us-mi":{to_meter:1609.34721869444},km:{to_meter:1e3},"ind-ft":{to_meter:.30479841},"ind-yd":{to_meter:.91439523},mi:{to_meter:1609.344},yd:{to_meter:.9144},ch:{to_meter:20.1168},link:{to_meter:.201168},dm:{to_meter:.1},in:{to_meter:.0254},"ind-ch":{to_meter:20.11669506},"us-in":{to_meter:.025400050800101},"us-yd":{to_meter:.914401828803658}},Lf=/[\s_\-\/\(\)]/g;function Rf(e,t){if(e[t])return e[t];for(var n=Object.keys(e),r=t.toLowerCase().replace(Lf,``),i=-1,a,o;++i<n.length;)if(a=n[i],o=a.toLowerCase().replace(Lf,``),o===r)return e[a]}function zf(e){var t={},n=e.split(`+`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.split(`=`);return n.push(!0),e[n[0].toLowerCase()]=n[1],e},{}),r,i,a,o={proj:function(e){t.projName=[`lonlat`,`latlon`,`latlong`].includes(e)?`longlat`:e},datum:`datumCode`,rf:function(e){t.rf=parseFloat(e)},lat_0:function(e){t.lat0=e*Af},lat_1:function(e){t.lat1=e*Af},lat_2:function(e){t.lat2=e*Af},lat_ts:function(e){t.lat_ts=e*Af},lon_0:function(e){t.long0=e*Af},lon_wrap:function(e){t.long_wrap=parseFloat(e)*Af},lon_1:function(e){t.long1=e*Af},lon_2:function(e){t.long2=e*Af},alpha:function(e){t.alpha=parseFloat(e)*Af},gamma:function(e){t.rectified_grid_angle=parseFloat(e)*Af},lonc:function(e){t.longc=e*Af},x_0:function(e){t.x0=parseFloat(e)},y_0:function(e){t.y0=parseFloat(e)},k_0:function(e){t.k0=parseFloat(e)},k:function(e){t.k0=parseFloat(e)},a:function(e){t.a=parseFloat(e)},b:function(e){t.b=parseFloat(e)},r:function(e){t.a=t.b=parseFloat(e)},r_a:function(){t.R_A=!0},zone:function(e){t.zone=parseInt(e,10)},south:function(){t.utmSouth=!0},towgs84:function(e){t.datum_params=e.split(`,`).map(function(e){return parseFloat(e)})},to_meter:function(e){t.to_meter=parseFloat(e)},units:function(e){t.units=e;var n=Rf(If,e);n&&(t.to_meter=n.to_meter)},from_greenwich:function(e){t.from_greenwich=e*Af},pm:function(e){t.from_greenwich=(Rf(Ff,e)||parseFloat(e))*Af},nadgrids:function(e){e===`@null`?t.datumCode=`none`:t.nadgrids=e},axis:function(e){var n=`ewnsud`;e.length===3&&n.indexOf(e.substr(0,1))!==-1&&n.indexOf(e.substr(1,1))!==-1&&n.indexOf(e.substr(2,1))!==-1&&(t.axis=e)},approx:function(){t.approx=!0},over:function(){t.over=!0}};for(r in n)i=n[r],r in o?(a=o[r],typeof a==`function`?a(i):t[a]=i):t[r]=i;return typeof t.datumCode==`string`&&t.datumCode!==`WGS84`&&(t.datumCode=t.datumCode.toLowerCase()),t.projStr=e,t}var Bf=class{static getId(e){let t=e.find(e=>Array.isArray(e)&&e[0]===`ID`);return t&&t.length>=3?{authority:t[1],code:parseInt(t[2],10)}:null}static convertUnit(e,t=`unit`){if(!e||e.length<3)return{type:t,name:`unknown`,conversion_factor:null};let n=e[1],r=parseFloat(e[2])||null,i=e.find(e=>Array.isArray(e)&&e[0]===`ID`);return{type:t,name:n,conversion_factor:r,id:i?{authority:i[1],code:parseInt(i[2],10)}:null}}static convertAxis(e){let t=e[1]||`Unknown`,n,r=t.match(/^\((.)\)$/);if(r){let t=r[1].toUpperCase();if(t===`E`)n=`east`;else if(t===`N`)n=`north`;else if(t===`U`)n=`up`;else if(e[2])n=e[2];else throw Error(`Unknown axis abbreviation: ${t}`)}else n=e[2]||`unknown`;let i=e.find(e=>Array.isArray(e)&&e[0]===`ORDER`),a=i?parseInt(i[1],10):null,o=e.find(e=>Array.isArray(e)&&(e[0]===`LENGTHUNIT`||e[0]===`ANGLEUNIT`||e[0]===`SCALEUNIT`)),s=this.convertUnit(o);return{name:t,direction:n,unit:s,order:a}}static extractAxes(e){return e.filter(e=>Array.isArray(e)&&e[0]===`AXIS`).map(e=>this.convertAxis(e)).sort((e,t)=>(e.order||0)-(t.order||0))}static convert(e,t={}){switch(e[0]){case`PROJCRS`:t.type=`ProjectedCRS`,t.name=e[1],t.base_crs=e.find(e=>Array.isArray(e)&&e[0]===`BASEGEOGCRS`)?this.convert(e.find(e=>Array.isArray(e)&&e[0]===`BASEGEOGCRS`)):null,t.conversion=e.find(e=>Array.isArray(e)&&e[0]===`CONVERSION`)?this.convert(e.find(e=>Array.isArray(e)&&e[0]===`CONVERSION`)):null;let n=e.find(e=>Array.isArray(e)&&e[0]===`CS`);n&&(t.coordinate_system={subtype:n[1],axis:this.extractAxes(e)});let r=e.find(e=>Array.isArray(e)&&e[0]===`LENGTHUNIT`);if(r){let e=this.convertUnit(r);t.coordinate_system.unit=e}t.id=this.getId(e);break;case`BASEGEOGCRS`:case`GEOGCRS`:case`GEODCRS`:t.type=e[0]===`GEODCRS`?`GeodeticCRS`:`GeographicCRS`,t.name=e[1];let i=e.find(e=>Array.isArray(e)&&(e[0]===`DATUM`||e[0]===`ENSEMBLE`));if(i){let n=this.convert(i);i[0]===`ENSEMBLE`?t.datum_ensemble=n:t.datum=n;let r=e.find(e=>Array.isArray(e)&&e[0]===`PRIMEM`);r&&r[1]!==`Greenwich`&&(n.prime_meridian={name:r[1],longitude:parseFloat(r[2])})}let a=e.find(e=>Array.isArray(e)&&e[0]===`CS`);t.coordinate_system={subtype:a?a[1]:`ellipsoidal`,axis:this.extractAxes(e)},t.id=this.getId(e);break;case`DATUM`:t.type=`GeodeticReferenceFrame`,t.name=e[1],t.ellipsoid=e.find(e=>Array.isArray(e)&&e[0]===`ELLIPSOID`)?this.convert(e.find(e=>Array.isArray(e)&&e[0]===`ELLIPSOID`)):null;break;case`ENSEMBLE`:t.type=`DatumEnsemble`,t.name=e[1],t.members=e.filter(e=>Array.isArray(e)&&e[0]===`MEMBER`).map(e=>({type:`DatumEnsembleMember`,name:e[1],id:this.getId(e)}));let o=e.find(e=>Array.isArray(e)&&e[0]===`ENSEMBLEACCURACY`);o&&(t.accuracy=parseFloat(o[1]));let s=e.find(e=>Array.isArray(e)&&e[0]===`ELLIPSOID`);s&&(t.ellipsoid=this.convert(s)),t.id=this.getId(e);break;case`ELLIPSOID`:t.type=`Ellipsoid`,t.name=e[1],t.semi_major_axis=parseFloat(e[2]),t.inverse_flattening=parseFloat(e[3]),e.find(e=>Array.isArray(e)&&e[0]===`LENGTHUNIT`)&&this.convert(e.find(e=>Array.isArray(e)&&e[0]===`LENGTHUNIT`),t);break;case`CONVERSION`:t.type=`Conversion`,t.name=e[1],t.method=e.find(e=>Array.isArray(e)&&e[0]===`METHOD`)?this.convert(e.find(e=>Array.isArray(e)&&e[0]===`METHOD`)):null,t.parameters=e.filter(e=>Array.isArray(e)&&e[0]===`PARAMETER`).map(e=>this.convert(e));break;case`METHOD`:t.type=`Method`,t.name=e[1],t.id=this.getId(e);break;case`PARAMETER`:t.type=`Parameter`,t.name=e[1],t.value=parseFloat(e[2]),t.unit=this.convertUnit(e.find(e=>Array.isArray(e)&&(e[0]===`LENGTHUNIT`||e[0]===`ANGLEUNIT`||e[0]===`SCALEUNIT`))),t.id=this.getId(e);break;case`BOUNDCRS`:t.type=`BoundCRS`;let c=e.find(e=>Array.isArray(e)&&e[0]===`SOURCECRS`);if(c){let e=c.find(e=>Array.isArray(e));t.source_crs=e?this.convert(e):null}let l=e.find(e=>Array.isArray(e)&&e[0]===`TARGETCRS`);if(l){let e=l.find(e=>Array.isArray(e));t.target_crs=e?this.convert(e):null}let u=e.find(e=>Array.isArray(e)&&e[0]===`ABRIDGEDTRANSFORMATION`);t.transformation=u?this.convert(u):null;break;case`ABRIDGEDTRANSFORMATION`:if(t.type=`Transformation`,t.name=e[1],t.method=e.find(e=>Array.isArray(e)&&e[0]===`METHOD`)?this.convert(e.find(e=>Array.isArray(e)&&e[0]===`METHOD`)):null,t.parameters=e.filter(e=>Array.isArray(e)&&(e[0]===`PARAMETER`||e[0]===`PARAMETERFILE`)).map(e=>{if(e[0]===`PARAMETER`)return this.convert(e);if(e[0]===`PARAMETERFILE`)return{name:e[1],value:e[2],id:{authority:`EPSG`,code:8656}}}),t.parameters.length===7){let e=t.parameters[6];e.name===`Scale difference`&&(e.value=Math.round((e.value-1)*0xe8d4a51000)/1e6)}t.id=this.getId(e);break;case`AXIS`:t.coordinate_system||(t.coordinate_system={type:`unspecified`,axis:[]}),t.coordinate_system.axis.push(this.convertAxis(e));break;case`LENGTHUNIT`:let d=this.convertUnit(e,`LinearUnit`);t.coordinate_system&&t.coordinate_system.axis&&t.coordinate_system.axis.forEach(e=>{e.unit||(e.unit=d)}),d.conversion_factor&&d.conversion_factor!==1&&t.semi_major_axis&&(t.semi_major_axis={value:t.semi_major_axis,unit:d});break;default:t.keyword=e[0]}return t}};function Vf(e){return Bf.convert(e)}function Hf(e){let t=e.toUpperCase();return t.includes(`PROJCRS`)||t.includes(`GEOGCRS`)||t.includes(`BOUNDCRS`)||t.includes(`VERTCRS`)||t.includes(`LENGTHUNIT`)||t.includes(`ANGLEUNIT`)||t.includes(`SCALEUNIT`)?`WKT2`:(t.includes(`PROJCS`)||t.includes(`GEOGCS`)||t.includes(`LOCAL_CS`)||t.includes(`VERT_CS`)||t.includes(`UNIT`),`WKT1`)}var Uf=np,Wf=1,Gf=2,Kf=3,qf=4,Jf=5,Yf=-1,Xf=/\s/,Zf=/[A-Za-z]/,Qf=/[A-Za-z84_]/,$f=/[,\]]/,ep=/[\d\.E\-\+]/;function tp(e){if(typeof e!=`string`)throw Error(`not a string`);this.text=e.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=Wf}tp.prototype.readCharicter=function(){var e=this.text[this.place++];if(this.state!==qf)for(;Xf.test(e);){if(this.place>=this.text.length)return;e=this.text[this.place++]}switch(this.state){case Wf:return this.neutral(e);case Gf:return this.keyword(e);case qf:return this.quoted(e);case Jf:return this.afterquote(e);case Kf:return this.number(e);case Yf:return}},tp.prototype.afterquote=function(e){if(e===`"`){this.word+=`"`,this.state=qf;return}if($f.test(e)){this.word=this.word.trim(),this.afterItem(e);return}throw Error(`havn't handled "`+e+`" in afterquote yet, index `+this.place)},tp.prototype.afterItem=function(e){if(e===`,`){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=Wf;return}if(e===`]`){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=Wf,this.currentObject=this.stack.pop(),this.currentObject||(this.state=Yf);return}},tp.prototype.number=function(e){if(ep.test(e)){this.word+=e;return}if($f.test(e)){this.word=parseFloat(this.word),this.afterItem(e);return}throw Error(`havn't handled "`+e+`" in number yet, index `+this.place)},tp.prototype.quoted=function(e){if(e===`"`){this.state=Jf;return}this.word+=e},tp.prototype.keyword=function(e){if(Qf.test(e)){this.word+=e;return}if(e===`[`){var t=[];t.push(this.word),this.level++,this.root===null?this.root=t:this.currentObject.push(t),this.stack.push(this.currentObject),this.currentObject=t,this.state=Wf;return}if($f.test(e)){this.afterItem(e);return}throw Error(`havn't handled "`+e+`" in keyword yet, index `+this.place)},tp.prototype.neutral=function(e){if(Zf.test(e)){this.word=e,this.state=Gf;return}if(e===`"`){this.word=``,this.state=qf;return}if(ep.test(e)){this.word=e,this.state=Kf;return}if($f.test(e)){this.afterItem(e);return}throw Error(`havn't handled "`+e+`" in neutral yet, index `+this.place)},tp.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===Yf)return this.root;throw Error(`unable to parse string "`+this.text+`". State is `+this.state)};function np(e){return new tp(e).output()}function rp(e,t,n){Array.isArray(t)&&(n.unshift(t),t=null);var r=t?{}:e,i=n.reduce(function(e,t){return ip(t,e),e},r);t&&(e[t]=i)}function ip(e,t){if(!Array.isArray(e)){t[e]=!0;return}var n=e.shift();if(n===`PARAMETER`&&(n=e.shift()),e.length===1){if(Array.isArray(e[0])){t[n]={},ip(e[0],t[n]);return}t[n]=e[0];return}if(!e.length){t[n]=!0;return}if(n===`TOWGS84`){t[n]=e;return}if(n===`AXIS`){n in t||(t[n]=[]),t[n].push(e);return}Array.isArray(n)||(t[n]={});var r;switch(n){case`UNIT`:case`PRIMEM`:case`VERT_DATUM`:t[n]={name:e[0].toLowerCase(),convert:e[1]},e.length===3&&ip(e[2],t[n]);return;case`SPHEROID`:case`ELLIPSOID`:t[n]={name:e[0],a:e[1],rf:e[2]},e.length===4&&ip(e[3],t[n]);return;case`EDATUM`:case`ENGINEERINGDATUM`:case`LOCAL_DATUM`:case`DATUM`:case`VERT_CS`:case`VERTCRS`:case`VERTICALCRS`:e[0]=[`name`,e[0]],rp(t,n,e);return;case`COMPD_CS`:case`COMPOUNDCRS`:case`FITTED_CS`:case`PROJECTEDCRS`:case`PROJCRS`:case`GEOGCS`:case`GEOCCS`:case`PROJCS`:case`LOCAL_CS`:case`GEODCRS`:case`GEODETICCRS`:case`GEODETICDATUM`:case`ENGCRS`:case`ENGINEERINGCRS`:e[0]=[`name`,e[0]],rp(t,n,e),t[n].type=n;return;default:for(r=-1;++r<e.length;)if(!Array.isArray(e[r]))return ip(e,t[n]);return rp(t,n,e)}}var ap=.017453292519943295;function op(e){return e*ap}function sp(e){let t=(e.projName||``).toLowerCase().replace(/_/g,` `);e.long0===void 0&&e.longc!==void 0&&(e.long0=e.longc),!e.lat_ts&&e.lat1&&(t===`stereographic south pole`||t===`polar stereographic (variant b)`)?(e.lat0=op(e.lat1>0?90:-90),e.lat_ts=e.lat1,delete e.lat1):!e.lat_ts&&e.lat0&&(t===`polar stereographic`||t===`polar stereographic (variant a)`)&&(e.lat_ts=e.lat0,e.lat0=op(e.lat0>0?90:-90),delete e.lat1)}function cp(e){let t={units:null,to_meter:void 0};return typeof e==`string`?(t.units=e.toLowerCase(),t.units===`metre`&&(t.units=`meter`),t.units===`meter`&&(t.to_meter=1)):e&&e.name&&(t.units=e.name.toLowerCase(),t.units===`metre`&&(t.units=`meter`),t.to_meter=e.conversion_factor),t}function lp(e){return typeof e==`object`?e.value*e.unit.conversion_factor:e}function up(e,t){e.ellipsoid.radius?(t.a=e.ellipsoid.radius,t.rf=0):(t.a=lp(e.ellipsoid.semi_major_axis),e.ellipsoid.inverse_flattening===void 0?e.ellipsoid.semi_major_axis!==void 0&&e.ellipsoid.semi_minor_axis!==void 0&&(t.rf=t.a/(t.a-lp(e.ellipsoid.semi_minor_axis))):t.rf=e.ellipsoid.inverse_flattening)}function dp(e,t={}){return!e||typeof e!=`object`?e:e.type===`BoundCRS`?(dp(e.source_crs,t),e.transformation&&(e.transformation.method&&e.transformation.method.name===`NTv2`?t.nadgrids=e.transformation.parameters[0].value:t.datum_params=e.transformation.parameters.map(e=>e.value)),t):(Object.keys(e).forEach(n=>{let r=e[n];if(r!==null)switch(n){case`name`:if(t.srsCode)break;t.name=r,t.srsCode=r;break;case`type`:r===`GeographicCRS`?t.projName=`longlat`:r===`GeodeticCRS`?t.projName=e.coordinate_system&&e.coordinate_system.subtype===`Cartesian`?`geocent`:`longlat`:r===`ProjectedCRS`&&e.conversion&&e.conversion.method&&(t.projName=e.conversion.method.name);break;case`datum`:case`datum_ensemble`:r.ellipsoid&&(t.ellps=r.ellipsoid.name,up(r,t)),r.prime_meridian&&(t.from_greenwich=r.prime_meridian.longitude*Math.PI/180);break;case`ellipsoid`:t.ellps=r.name,up(r,t);break;case`prime_meridian`:t.long0=(r.longitude||0)*Math.PI/180;break;case`coordinate_system`:if(r.axis){let e={east:`e`,north:`n`,west:`w`,south:`s`,up:`u`,down:`d`,geocentricx:`e`,geocentricy:`n`,geocentricz:`u`},n=r.axis.map(t=>e[t.direction.toLowerCase()]);if(n.every(Boolean)&&(t.axis=n.join(``),t.axis.length===2&&(t.axis+=`u`)),r.unit){let{units:e,to_meter:n}=cp(r.unit);t.units=e,t.to_meter=n}else if(r.axis[0]&&r.axis[0].unit){let{units:e,to_meter:n}=cp(r.axis[0].unit);t.units=e,t.to_meter=n}}break;case`id`:r.authority&&r.code&&(t.title=r.authority+`:`+r.code);break;case`conversion`:r.method&&r.method.name&&(t.projName=r.method.name),r.parameters&&r.parameters.forEach(e=>{let n=e.name.toLowerCase().replace(/\s+/g,`_`),r=e.value;t[n]=e.unit&&e.unit.conversion_factor?r*e.unit.conversion_factor:e.unit===`degree`?r*Math.PI/180:r});break;case`unit`:r.name&&(t.units=r.name.toLowerCase(),t.units===`metre`&&(t.units=`meter`)),r.conversion_factor&&(t.to_meter=r.conversion_factor);break;case`base_crs`:dp(r,t),t.datumCode=r.id?r.id.authority+`_`+r.id.code:r.name}}),t.latitude_of_false_origin!==void 0&&(t.lat0=t.latitude_of_false_origin),t.longitude_of_false_origin!==void 0&&(t.long0=t.longitude_of_false_origin),t.latitude_of_standard_parallel!==void 0&&(t.lat0=t.latitude_of_standard_parallel,t.lat1=t.latitude_of_standard_parallel),t.latitude_of_1st_standard_parallel!==void 0&&(t.lat1=t.latitude_of_1st_standard_parallel),t.latitude_of_2nd_standard_parallel!==void 0&&(t.lat2=t.latitude_of_2nd_standard_parallel),t.latitude_of_projection_centre!==void 0&&(t.lat0=t.latitude_of_projection_centre),t.longitude_of_projection_centre!==void 0&&(t.longc=t.longitude_of_projection_centre),t.easting_at_false_origin!==void 0&&(t.x0=t.easting_at_false_origin),t.northing_at_false_origin!==void 0&&(t.y0=t.northing_at_false_origin),t.latitude_of_natural_origin!==void 0&&(t.lat0=t.latitude_of_natural_origin),t.longitude_of_natural_origin!==void 0&&(t.long0=t.longitude_of_natural_origin),t.longitude_of_origin!==void 0&&(t.long0=t.longitude_of_origin),t.false_easting!==void 0&&(t.x0=t.false_easting),t.easting_at_projection_centre&&(t.x0=t.easting_at_projection_centre),t.false_northing!==void 0&&(t.y0=t.false_northing),t.northing_at_projection_centre&&(t.y0=t.northing_at_projection_centre),t.standard_parallel_1!==void 0&&(t.lat1=t.standard_parallel_1),t.standard_parallel_2!==void 0&&(t.lat2=t.standard_parallel_2),t.scale_factor_at_natural_origin!==void 0&&(t.k0=t.scale_factor_at_natural_origin),t.scale_factor_at_projection_centre!==void 0&&(t.k0=t.scale_factor_at_projection_centre),t.scale_factor_on_pseudo_standard_parallel!==void 0&&(t.k0=t.scale_factor_on_pseudo_standard_parallel),t.azimuth!==void 0&&(t.alpha=t.azimuth),t.azimuth_at_projection_centre!==void 0&&(t.alpha=t.azimuth_at_projection_centre),t.angle_from_rectified_to_skew_grid&&(t.rectified_grid_angle=t.angle_from_rectified_to_skew_grid),sp(t),t)}var fp=[`PROJECTEDCRS`,`PROJCRS`,`GEOGCS`,`GEOCCS`,`PROJCS`,`LOCAL_CS`,`GEODCRS`,`GEODETICCRS`,`GEODETICDATUM`,`ENGCRS`,`ENGINEERINGCRS`];function pp(e,t){var n=t[0],r=t[1];!(n in e)&&r in e&&(e[n]=e[r],t.length===3&&(e[n]=t[2](e[n])))}function mp(e){for(var t=Object.keys(e),n=0,r=t.length;n<r;++n){var i=t[n];fp.indexOf(i)!==-1&&hp(e[i]),typeof e[i]==`object`&&mp(e[i])}}function hp(e){if(e.AUTHORITY){var t=Object.keys(e.AUTHORITY)[0];t&&t in e.AUTHORITY&&(e.title=t+`:`+e.AUTHORITY[t])}if(e.type===`GEOGCS`?e.projName=`longlat`:e.type===`LOCAL_CS`?(e.projName=`identity`,e.local=!0):e.projName=typeof e.PROJECTION==`object`?Object.keys(e.PROJECTION)[0]:e.PROJECTION,e.AXIS){for(var n=``,r=0,i=e.AXIS.length;r<i;++r){var a=[e.AXIS[r][0].toLowerCase(),e.AXIS[r][1].toLowerCase()];a[0].indexOf(`north`)!==-1||(a[0]===`y`||a[0]===`lat`)&&a[1]===`north`?n+=`n`:a[0].indexOf(`south`)!==-1||(a[0]===`y`||a[0]===`lat`)&&a[1]===`south`?n+=`s`:a[0].indexOf(`east`)!==-1||(a[0]===`x`||a[0]===`lon`)&&a[1]===`east`?n+=`e`:(a[0].indexOf(`west`)!==-1||(a[0]===`x`||a[0]===`lon`)&&a[1]===`west`)&&(n+=`w`)}n.length===2&&(n+=`u`),n.length===3&&(e.axis=n)}e.UNIT&&(e.units=e.UNIT.name.toLowerCase(),e.units===`metre`&&(e.units=`meter`),e.UNIT.convert&&(e.type===`GEOGCS`?e.DATUM&&e.DATUM.SPHEROID&&(e.to_meter=e.UNIT.convert*e.DATUM.SPHEROID.a):e.to_meter=e.UNIT.convert));var o=e.GEOGCS;e.type===`GEOGCS`&&(o=e),o&&(o.PRIMEM&&o.PRIMEM.convert&&(e.from_greenwich=op(o.PRIMEM.convert)),e.datumCode=o.DATUM?o.DATUM.name.toLowerCase():o.name.toLowerCase(),e.datumCode.slice(0,2)===`d_`&&(e.datumCode=e.datumCode.slice(2)),e.datumCode===`new_zealand_1949`&&(e.datumCode=`nzgd49`),(e.datumCode===`wgs_1984`||e.datumCode===`world_geodetic_system_1984`)&&(e.PROJECTION===`Mercator_Auxiliary_Sphere`&&(e.sphere=!0),e.datumCode=`wgs84`),e.datumCode===`belge_1972`&&(e.datumCode=`rnb72`),o.DATUM&&o.DATUM.SPHEROID&&(e.ellps=o.DATUM.SPHEROID.name.replace(`_19`,``).replace(/[Cc]larke\_18/,`clrk`),e.ellps.toLowerCase().slice(0,13)===`international`&&(e.ellps=`intl`),e.a=o.DATUM.SPHEROID.a,e.rf=parseFloat(o.DATUM.SPHEROID.rf)),o.DATUM&&o.DATUM.TOWGS84&&(e.datum_params=o.DATUM.TOWGS84),~e.datumCode.indexOf(`osgb_1936`)&&(e.datumCode=`osgb36`),~e.datumCode.indexOf(`osni_1952`)&&(e.datumCode=`osni52`),(~e.datumCode.indexOf(`tm65`)||~e.datumCode.indexOf(`geodetic_datum_of_1965`))&&(e.datumCode=`ire65`),e.datumCode===`ch1903+`&&(e.datumCode=`ch1903`),~e.datumCode.indexOf(`israel`)&&(e.datumCode=`isr93`)),e.b&&!isFinite(e.b)&&(e.b=e.a),e.rectified_grid_angle&&(e.rectified_grid_angle=op(e.rectified_grid_angle));function s(t){return t*(e.to_meter||1)}[[`standard_parallel_1`,`Standard_Parallel_1`],[`standard_parallel_1`,`Latitude of 1st standard parallel`],[`standard_parallel_2`,`Standard_Parallel_2`],[`standard_parallel_2`,`Latitude of 2nd standard parallel`],[`false_easting`,`False_Easting`],[`false_easting`,`False easting`],[`false-easting`,`Easting at false origin`],[`false_northing`,`False_Northing`],[`false_northing`,`False northing`],[`false_northing`,`Northing at false origin`],[`central_meridian`,`Central_Meridian`],[`central_meridian`,`Longitude of natural origin`],[`central_meridian`,`Longitude of false origin`],[`latitude_of_origin`,`Latitude_Of_Origin`],[`latitude_of_origin`,`Central_Parallel`],[`latitude_of_origin`,`Latitude of natural origin`],[`latitude_of_origin`,`Latitude of false origin`],[`scale_factor`,`Scale_Factor`],[`k0`,`scale_factor`],[`latitude_of_center`,`Latitude_Of_Center`],[`latitude_of_center`,`Latitude_of_center`],[`lat0`,`latitude_of_center`,op],[`longitude_of_center`,`Longitude_Of_Center`],[`longitude_of_center`,`Longitude_of_center`],[`longc`,`longitude_of_center`,op],[`x0`,`false_easting`,s],[`y0`,`false_northing`,s],[`long0`,`central_meridian`,op],[`lat0`,`latitude_of_origin`,op],[`lat0`,`standard_parallel_1`,op],[`lat1`,`standard_parallel_1`,op],[`lat2`,`standard_parallel_2`,op],[`azimuth`,`Azimuth`],[`alpha`,`azimuth`,op],[`srsCode`,`name`]].forEach(function(t){return pp(e,t)}),sp(e)}function gp(e){if(typeof e==`object`)return dp(e);let t=Hf(e);var n=Uf(e);if(t===`WKT2`)return dp(Vf(n));var r=n[0],i={};return ip(n,i),mp(i),i[r]}function _p(e){var t=this;if(arguments.length===2){var n=arguments[1];typeof n==`string`?_p[e]=n.charAt(0)===`+`?zf(arguments[1]):gp(arguments[1]):n&&typeof n==`object`&&!(`projName`in n)?_p[e]=gp(arguments[1]):(_p[e]=n,n||delete _p[e])}else if(arguments.length===1){if(Array.isArray(e))return e.map(function(e){return Array.isArray(e)?_p.apply(t,e):_p(e)});if(typeof e==`string`){if(e in _p)return _p[e]}else`EPSG`in e?_p[`EPSG:`+e.EPSG]=e:`ESRI`in e?_p[`ESRI:`+e.ESRI]=e:`IAU2000`in e?_p[`IAU2000:`+e.IAU2000]=e:console.log(e);return}}xf(_p);function vp(e){return typeof e==`string`}function yp(e){return e in _p}function bp(e){return e.indexOf(`+`)!==0&&e.indexOf(`[`)!==-1||typeof e==`object`&&!(`srsCode`in e)}var xp=[`3857`,`900913`,`3785`,`102113`];function Sp(e){if(e.title)return e.title.toLowerCase().indexOf(`epsg:`)===0&&xp.indexOf(e.title.substr(5))>-1;var t=Rf(e,`authority`);if(t){var n=Rf(t,`epsg`);return n&&xp.indexOf(n)>-1}}function Cp(e){var t=Rf(e,`extension`);if(t)return Rf(t,`proj4`)}function wp(e){return e[0]===`+`}function Tp(e){let t;if(vp(e)){if(yp(e))t=_p[e];else if(bp(e)){t=gp(e);var n=Cp(t);n&&(t=zf(n))}else wp(e)&&(t=zf(e))}else t=`projName`in e?e:gp(e);return t&&Sp(t)?_p[`EPSG:3857`]:t}function Ep(e,t){e=e||{};var n,r;if(!t)return e;for(r in t)n=t[r],n!==void 0&&(e[r]=n);return e}function Dp(e,t,n){var r=e*t;return n/Math.sqrt(1-r*r)}function Op(e){return e<0?-1:1}function H(e,t){return t||Math.abs(e)<=3.14159265359?e:e-Op(e)*Nf}function kp(e,t,n){var r=e*n,i=.5*e;return r=((1-r)/(1+r))**i,Math.tan(.5*(V-t))/r}function Ap(e,t){for(var n=.5*e,r,i,a=V-2*Math.atan(t),o=0;o<=15;o++)if(r=e*Math.sin(a),i=V-2*Math.atan(t*((1-r)/(1+r))**n)-a,a+=i,Math.abs(i)<=1e-10)return a;return-9999}function jp(){var e=this.b/this.a;this.es=1-e*e,`x0`in this||(this.x0=0),`y0`in this||(this.y0=0),this.long0=this.long0||0,this.e=Math.sqrt(this.es),this.lat_ts?this.k0=this.sphere?Math.cos(this.lat_ts):Dp(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k0=this.k?this.k:1)}function Mp(e){var t=e.x,n=e.y;if(n*57.29577951308232>90&&n*57.29577951308232<-90&&t*57.29577951308232>180&&t*57.29577951308232<-180)return null;var r,i;if(Math.abs(Math.abs(n)-V)<=1e-10)return null;if(this.sphere)r=this.x0+this.a*this.k0*H(t-this.long0,this.over),i=this.y0+this.a*this.k0*Math.log(Math.tan(Mf+.5*n));else{var a=Math.sin(n),o=kp(this.e,n,a);r=this.x0+this.a*this.k0*H(t-this.long0,this.over),i=this.y0-this.a*this.k0*Math.log(o)}return e.x=r,e.y=i,e}function Np(e){var t=e.x-this.x0,n=e.y-this.y0,r,i;if(this.sphere)i=V-2*Math.atan(Math.exp(-n/(this.a*this.k0)));else{var a=Math.exp(-n/(this.a*this.k0));if(i=Ap(this.e,a),i===-9999)return null}return r=H(this.long0+t/(this.a*this.k0),this.over),e.x=r,e.y=i,e}var Pp={init:jp,forward:Mp,inverse:Np,names:[`Mercator`,`Popular Visualisation Pseudo Mercator`,`Mercator_1SP`,`Mercator_Auxiliary_Sphere`,`Mercator_Variant_A`,`merc`]};function Fp(){}function Ip(e){return e}var Lp=[`longlat`,`identity`,`lonlat`,`latlon`,`latlong`],Rp=[Pp,{init:Fp,forward:Ip,inverse:Ip,names:Lp}],zp={},Bp=[];function Vp(e,t){var n=Bp.length;return e.names?(Bp[n]=e,e.names.forEach(function(e){zp[e.toLowerCase()]=n}),this):(console.log(t),!0)}function Hp(e){return e.replace(/[-\(\)\s]+/g,` `).trim().replace(/ /g,`_`)}function Up(e){if(!e)return!1;var t=e.toLowerCase();if(zp[t]!==void 0&&Bp[zp[t]]||(t=Hp(t),t in zp&&Bp[zp[t]]))return Bp[zp[t]]}function Wp(){Rp.forEach(Vp)}var Gp={start:Wp,add:Vp,get:Up},Kp={MERIT:{a:6378137,rf:298.257,ellipseName:`MERIT 1983`},SGS85:{a:6378136,rf:298.257,ellipseName:`Soviet Geodetic System 85`},GRS80:{a:6378137,rf:298.257222101,ellipseName:`GRS 1980(IUGG, 1980)`},IAU76:{a:6378140,rf:298.257,ellipseName:`IAU 1976`},airy:{a:6377563.396,b:6356256.91,ellipseName:`Airy 1830`},APL4:{a:6378137,rf:298.25,ellipseName:`Appl. Physics. 1965`},NWL9D:{a:6378145,rf:298.25,ellipseName:`Naval Weapons Lab., 1965`},mod_airy:{a:6377340.189,b:6356034.446,ellipseName:`Modified Airy`},andrae:{a:6377104.43,rf:300,ellipseName:`Andrae 1876 (Den., Iclnd.)`},aust_SA:{a:6378160,rf:298.25,ellipseName:`Australian Natl & S. Amer. 1969`},GRS67:{a:6378160,rf:298.247167427,ellipseName:`GRS 67(IUGG 1967)`},bessel:{a:6377397.155,rf:299.1528128,ellipseName:`Bessel 1841`},bess_nam:{a:6377483.865,rf:299.1528128,ellipseName:`Bessel 1841 (Namibia)`},clrk66:{a:6378206.4,b:6356583.8,ellipseName:`Clarke 1866`},clrk80:{a:6378249.145,rf:293.4663,ellipseName:`Clarke 1880 mod.`},clrk80ign:{a:6378249.2,b:6356515,rf:293.4660213,ellipseName:`Clarke 1880 (IGN)`},clrk58:{a:6378293.645208759,rf:294.2606763692654,ellipseName:`Clarke 1858`},CPM:{a:6375738.7,rf:334.29,ellipseName:`Comm. des Poids et Mesures 1799`},delmbr:{a:6376428,rf:311.5,ellipseName:`Delambre 1810 (Belgium)`},engelis:{a:6378136.05,rf:298.2566,ellipseName:`Engelis 1985`},evrst30:{a:6377276.345,rf:300.8017,ellipseName:`Everest 1830`},evrst48:{a:6377304.063,rf:300.8017,ellipseName:`Everest 1948`},evrst56:{a:6377301.243,rf:300.8017,ellipseName:`Everest 1956`},evrst69:{a:6377295.664,rf:300.8017,ellipseName:`Everest 1969`},evrstSS:{a:6377298.556,rf:300.8017,ellipseName:`Everest (Sabah & Sarawak)`},fschr60:{a:6378166,rf:298.3,ellipseName:`Fischer (Mercury Datum) 1960`},fschr60m:{a:6378155,rf:298.3,ellipseName:`Fischer 1960`},fschr68:{a:6378150,rf:298.3,ellipseName:`Fischer 1968`},helmert:{a:6378200,rf:298.3,ellipseName:`Helmert 1906`},hough:{a:6378270,rf:297,ellipseName:`Hough`},intl:{a:6378388,rf:297,ellipseName:`International 1909 (Hayford)`},kaula:{a:6378163,rf:298.24,ellipseName:`Kaula 1961`},lerch:{a:6378139,rf:298.257,ellipseName:`Lerch 1979`},mprts:{a:6397300,rf:191,ellipseName:`Maupertius 1738`},new_intl:{a:6378157.5,b:6356772.2,ellipseName:`New International 1967`},plessis:{a:6376523,b:6355863,ellipseName:`Plessis 1817 (France)`},krass:{a:6378245,rf:298.3,ellipseName:`Krassovsky, 1942`},SEasia:{a:6378155,b:6356773.3205,ellipseName:`Southeast Asia`},walbeck:{a:6376896,b:6355834.8467,ellipseName:`Walbeck`},WGS60:{a:6378165,rf:298.3,ellipseName:`WGS 60`},WGS66:{a:6378145,rf:298.25,ellipseName:`WGS 66`},WGS7:{a:6378135,rf:298.26,ellipseName:`WGS 72`},WGS84:{a:6378137,rf:298.257223563,ellipseName:`WGS 84`},sphere:{a:6370997,b:6370997,ellipseName:`Normal Sphere (r=6370997)`}},qp=Kp.WGS84;function Jp(e,t,n,r){var i=e*e,a=t*t,o=(i-a)/i,s=0;r?(e*=1-o*(Ef+o*(Df+o*Of)),i=e*e,o=0):s=Math.sqrt(o);var c=(i-a)/a;return{es:o,e:s,ep2:c}}function Yp(e,t,n,r,i){if(!e){var a=Rf(Kp,r);a||(a=qp),e=a.a,t=a.b,n=a.rf}return n&&!t&&(t=(1-1/n)*e),(n===0||Math.abs(e-t)<1e-10)&&(i=!0,t=e),{a:e,b:t,rf:n,sphere:i}}var Xp={wgs84:{towgs84:`0,0,0`,ellipse:`WGS84`,datumName:`WGS84`},ch1903:{towgs84:`674.374,15.056,405.346`,ellipse:`bessel`,datumName:`swiss`},ggrs87:{towgs84:`-199.87,74.79,246.62`,ellipse:`GRS80`,datumName:`Greek_Geodetic_Reference_System_1987`},nad83:{towgs84:`0,0,0`,ellipse:`GRS80`,datumName:`North_American_Datum_1983`},nad27:{nadgrids:`@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat`,ellipse:`clrk66`,datumName:`North_American_Datum_1927`},potsdam:{towgs84:`598.1,73.7,418.2,0.202,0.045,-2.455,6.7`,ellipse:`bessel`,datumName:`Potsdam Rauenberg 1950 DHDN`},carthage:{towgs84:`-263.0,6.0,431.0`,ellipse:`clrk80ign`,datumName:`Carthage 1934 Tunisia`},hermannskogel:{towgs84:`577.326,90.129,463.919,5.137,1.474,5.297,2.4232`,ellipse:`bessel`,datumName:`Hermannskogel`},mgi:{towgs84:`577.326,90.129,463.919,5.137,1.474,5.297,2.4232`,ellipse:`bessel`,datumName:`Militar-Geographische Institut`},osni52:{towgs84:`482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15`,ellipse:`airy`,datumName:`Irish National`},ire65:{towgs84:`482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15`,ellipse:`mod_airy`,datumName:`Ireland 1965`},rassadiran:{towgs84:`-133.63,-157.5,-158.62`,ellipse:`intl`,datumName:`Rassadiran`},nzgd49:{towgs84:`59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993`,ellipse:`intl`,datumName:`New Zealand Geodetic Datum 1949`},osgb36:{towgs84:`446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894`,ellipse:`airy`,datumName:`Ordnance Survey of Great Britain 1936`},s_jtsk:{towgs84:`589,76,480`,ellipse:`bessel`,datumName:`S-JTSK (Ferro)`},beduaram:{towgs84:`-106,-87,188`,ellipse:`clrk80`,datumName:`Beduaram`},gunung_segara:{towgs84:`-403,684,41`,ellipse:`bessel`,datumName:`Gunung Segara Jakarta`},rnb72:{towgs84:`106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1`,ellipse:`intl`,datumName:`Reseau National Belge 1972`},EPSG_5451:{towgs84:`6.41,-49.05,-11.28,1.5657,0.5242,6.9718,-5.7649`},IGNF_LURESG:{towgs84:`-192.986,13.673,-39.309,-0.4099,-2.9332,2.6881,0.43`},EPSG_4614:{towgs84:`-119.4248,-303.65872,-11.00061,1.164298,0.174458,1.096259,3.657065`},EPSG_4615:{towgs84:`-494.088,-312.129,279.877,-1.423,-1.013,1.59,-0.748`},ESRI_37241:{towgs84:`-76.822,257.457,-12.817,2.136,-0.033,-2.392,-0.031`},ESRI_37249:{towgs84:`-440.296,58.548,296.265,1.128,10.202,4.559,-0.438`},ESRI_37245:{towgs84:`-511.151,-181.269,139.609,1.05,2.703,1.798,3.071`},EPSG_4178:{towgs84:`24.9,-126.4,-93.2,-0.063,-0.247,-0.041,1.01`},EPSG_4622:{towgs84:`-472.29,-5.63,-304.12,0.4362,-0.8374,0.2563,1.8984`},EPSG_4625:{towgs84:`126.93,547.94,130.41,-2.7867,5.1612,-0.8584,13.8227`},EPSG_5252:{towgs84:`0.023,0.036,-0.068,0.00176,0.00912,-0.01136,0.00439`},EPSG_4314:{towgs84:`597.1,71.4,412.1,0.894,0.068,-1.563,7.58`},EPSG_4282:{towgs84:`-178.3,-316.7,-131.5,5.278,6.077,10.979,19.166`},EPSG_4231:{towgs84:`-83.11,-97.38,-117.22,0.005693,-0.044698,0.044285,0.1218`},EPSG_4274:{towgs84:`-230.994,102.591,25.199,0.633,-0.239,0.9,1.95`},EPSG_4134:{towgs84:`-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.71006`},EPSG_4254:{towgs84:`18.38,192.45,96.82,0.056,-0.142,-0.2,-0.0013`},EPSG_4159:{towgs84:`-194.513,-63.978,-25.759,-3.4027,3.756,-3.352,-0.9175`},EPSG_4687:{towgs84:`0.072,-0.507,-0.245,0.0183,-0.0003,0.007,-0.0093`},EPSG_4227:{towgs84:`-83.58,-397.54,458.78,-17.595,-2.847,4.256,3.225`},EPSG_4746:{towgs84:`599.4,72.4,419.2,-0.062,-0.022,-2.723,6.46`},EPSG_4745:{towgs84:`612.4,77,440.2,-0.054,0.057,-2.797,2.55`},EPSG_6311:{towgs84:`8.846,-4.394,-1.122,-0.00237,-0.146528,0.130428,0.783926`},EPSG_4289:{towgs84:`565.7381,50.4018,465.2904,-0.395026,0.330772,-1.876073,4.07244`},EPSG_4230:{towgs84:`-68.863,-134.888,-111.49,-0.53,-0.14,0.57,-3.4`},EPSG_4154:{towgs84:`-123.02,-158.95,-168.47`},EPSG_4156:{towgs84:`570.8,85.7,462.8,4.998,1.587,5.261,3.56`},EPSG_4299:{towgs84:`482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15`},EPSG_4179:{towgs84:`33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84`},EPSG_4313:{towgs84:`-106.8686,52.2978,-103.7239,0.3366,-0.457,1.8422,-1.2747`},EPSG_4194:{towgs84:`163.511,127.533,-159.789`},EPSG_4195:{towgs84:`105,326,-102.5`},EPSG_4196:{towgs84:`-45,417,-3.5`},EPSG_4611:{towgs84:`-162.619,-276.959,-161.764,0.067753,-2.243648,-1.158828,-1.094246`},EPSG_4633:{towgs84:`137.092,131.66,91.475,-1.9436,-11.5993,-4.3321,-7.4824`},EPSG_4641:{towgs84:`-408.809,366.856,-412.987,1.8842,-0.5308,2.1655,-121.0993`},EPSG_4643:{towgs84:`-480.26,-438.32,-643.429,16.3119,20.1721,-4.0349,-111.7002`},EPSG_4300:{towgs84:`482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15`},EPSG_4188:{towgs84:`482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15`},EPSG_4660:{towgs84:`982.6087,552.753,-540.873,6.681627,-31.611492,-19.848161,16.805`},EPSG_4662:{towgs84:`97.295,-263.247,310.882,-1.5999,0.8386,3.1409,13.3259`},EPSG_3906:{towgs84:`577.88891,165.22205,391.18289,4.9145,-0.94729,-13.05098,7.78664`},EPSG_4307:{towgs84:`-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547`},EPSG_6892:{towgs84:`-76.269,-16.683,68.562,-6.275,10.536,-4.286,-13.686`},EPSG_4690:{towgs84:`221.597,152.441,176.523,2.403,1.3893,0.884,11.4648`},EPSG_4691:{towgs84:`218.769,150.75,176.75,3.5231,2.0037,1.288,10.9817`},EPSG_4629:{towgs84:`72.51,345.411,79.241,-1.5862,-0.8826,-0.5495,1.3653`},EPSG_4630:{towgs84:`165.804,216.213,180.26,-0.6251,-0.4515,-0.0721,7.4111`},EPSG_4692:{towgs84:`217.109,86.452,23.711,0.0183,-0.0003,0.007,-0.0093`},EPSG_9333:{towgs84:`0,0,0,-0.008393,0.000749,-0.010276,0`},EPSG_9059:{towgs84:`0,0,0`},EPSG_4312:{towgs84:`601.705,84.263,485.227,4.7354,1.3145,5.393,-2.3887`},EPSG_4123:{towgs84:`-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496`},EPSG_4309:{towgs84:`-124.45,183.74,44.64,-0.4384,0.5446,-0.9706,-2.1365`},ESRI_104106:{towgs84:`-283.088,-70.693,117.445,-1.157,0.059,-0.652,-4.058`},EPSG_4281:{towgs84:`-219.247,-73.802,269.529`},EPSG_4322:{towgs84:`0,0,4.5`},EPSG_4324:{towgs84:`0,0,1.9`},EPSG_4284:{towgs84:`43.822,-108.842,-119.585,1.455,-0.761,0.737,0.549`},EPSG_4277:{towgs84:`446.448,-125.157,542.06,0.15,0.247,0.842,-20.489`},EPSG_4207:{towgs84:`-282.1,-72.2,120,-1.529,0.145,-0.89,-4.46`},EPSG_4688:{towgs84:`347.175,1077.618,2623.677,33.9058,-70.6776,9.4013,186.0647`},EPSG_4689:{towgs84:`410.793,54.542,80.501,-2.5596,-2.3517,-0.6594,17.3218`},EPSG_4720:{towgs84:`0,0,4.5`},EPSG_4273:{towgs84:`278.3,93,474.5,7.889,0.05,-6.61,6.21`},EPSG_4240:{towgs84:`204.64,834.74,293.8`},EPSG_4817:{towgs84:`278.3,93,474.5,7.889,0.05,-6.61,6.21`},ESRI_104131:{towgs84:`426.62,142.62,460.09,4.98,4.49,-12.42,-17.1`},EPSG_4265:{towgs84:`-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68`},EPSG_4263:{towgs84:`-111.92,-87.85,114.5,1.875,0.202,0.219,0.032`},EPSG_4298:{towgs84:`-689.5937,623.84046,-65.93566,-0.02331,1.17094,-0.80054,5.88536`},EPSG_4270:{towgs84:`-253.4392,-148.452,386.5267,0.15605,0.43,-0.1013,-0.0424`},EPSG_4229:{towgs84:`-121.8,98.1,-10.7`},EPSG_4220:{towgs84:`-55.5,-348,-229.2`},EPSG_4214:{towgs84:`12.646,-155.176,-80.863`},EPSG_4232:{towgs84:`-345,3,223`},EPSG_4238:{towgs84:`-1.977,-13.06,-9.993,0.364,0.254,0.689,-1.037`},EPSG_4168:{towgs84:`-170,33,326`},EPSG_4131:{towgs84:`199,931,318.9`},EPSG_4152:{towgs84:`-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0`},EPSG_5228:{towgs84:`572.213,85.334,461.94,4.9732,1.529,5.2484,3.5378`},EPSG_8351:{towgs84:`485.021,169.465,483.839,7.786342,4.397554,4.102655,0`},EPSG_4683:{towgs84:`-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06`},EPSG_4133:{towgs84:`0,0,0`},EPSG_7373:{towgs84:`0.819,-0.5762,-1.6446,-0.00378,-0.03317,0.00318,0.0693`},EPSG_9075:{towgs84:`-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0`},EPSG_9072:{towgs84:`-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0`},EPSG_9294:{towgs84:`1.16835,-1.42001,-2.24431,-0.00822,-0.05508,0.01818,0.23388`},EPSG_4212:{towgs84:`-267.434,173.496,181.814,-13.4704,8.7154,7.3926,14.7492`},EPSG_4191:{towgs84:`-44.183,-0.58,-38.489,2.3867,2.7072,-3.5196,-8.2703`},EPSG_4237:{towgs84:`52.684,-71.194,-13.975,-0.312,-0.1063,-0.3729,1.0191`},EPSG_4740:{towgs84:`-1.08,-0.27,-0.9`},EPSG_4124:{towgs84:`419.3836,99.3335,591.3451,0.850389,1.817277,-7.862238,-0.99496`},EPSG_5681:{towgs84:`584.9636,107.7175,413.8067,1.1155,0.2824,-3.1384,7.9922`},EPSG_4141:{towgs84:`23.772,17.49,17.859,-0.3132,-1.85274,1.67299,-5.4262`},EPSG_4204:{towgs84:`-85.645,-273.077,-79.708,2.289,-1.421,2.532,3.194`},EPSG_4319:{towgs84:`226.702,-193.337,-35.371,-2.229,-4.391,9.238,0.9798`},EPSG_4200:{towgs84:`24.82,-131.21,-82.66`},EPSG_4130:{towgs84:`0,0,0`},EPSG_4127:{towgs84:`-82.875,-57.097,-156.768,-2.158,1.524,-0.982,-0.359`},EPSG_4149:{towgs84:`674.374,15.056,405.346`},EPSG_4617:{towgs84:`-0.991,1.9072,0.5129,0.02579,0.00965,0.01166,0`},EPSG_4663:{towgs84:`-210.502,-66.902,-48.476,2.094,-15.067,-5.817,0.485`},EPSG_4664:{towgs84:`-211.939,137.626,58.3,-0.089,0.251,0.079,0.384`},EPSG_4665:{towgs84:`-105.854,165.589,-38.312,-0.003,-0.026,0.024,-0.048`},EPSG_4666:{towgs84:`631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43`},EPSG_4756:{towgs84:`-192.873,-39.382,-111.202,-0.00205,-0.0005,0.00335,0.0188`},EPSG_4723:{towgs84:`-179.483,-69.379,-27.584,-7.862,8.163,6.042,-13.925`},EPSG_4726:{towgs84:`8.853,-52.644,180.304,-0.393,-2.323,2.96,-24.081`},EPSG_4267:{towgs84:`-8.0,160.0,176.0`},EPSG_5365:{towgs84:`-0.16959,0.35312,0.51846,0.03385,-0.16325,0.03446,0.03693`},EPSG_4218:{towgs84:`304.5,306.5,-318.1`},EPSG_4242:{towgs84:`-33.722,153.789,94.959,-8.581,-4.478,4.54,8.95`},EPSG_4216:{towgs84:`-292.295,248.758,429.447,4.9971,2.99,6.6906,1.0289`},ESRI_104105:{towgs84:`631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43`},ESRI_104129:{towgs84:`0,0,0`},EPSG_4673:{towgs84:`174.05,-25.49,112.57`},EPSG_4202:{towgs84:`-124,-60,154`},EPSG_4203:{towgs84:`-117.763,-51.51,139.061,0.292,0.443,0.277,-0.191`},EPSG_3819:{towgs84:`595.48,121.69,515.35,4.115,-2.9383,0.853,-3.408`},EPSG_8694:{towgs84:`-93.799,-132.737,-219.073,-1.844,0.648,-6.37,-0.169`},EPSG_4145:{towgs84:`275.57,676.78,229.6`},EPSG_4283:{towgs84:`0.06155,-0.01087,-0.04019,0.039492,0.032722,0.032898,-0.009994`},EPSG_4317:{towgs84:`2.3287,-147.0425,-92.0802,-0.309248,0.324822,0.497299,5.689063`},EPSG_4272:{towgs84:`59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993`},EPSG_4248:{towgs84:`-307.7,265.3,-363.5`},EPSG_5561:{towgs84:`24,-121,-76`},EPSG_5233:{towgs84:`-0.293,766.95,87.713,0.195704,1.695068,3.473016,-0.039338`},ESRI_104130:{towgs84:`-86,-98,-119`},ESRI_104102:{towgs84:`682,-203,480`},ESRI_37207:{towgs84:`7,-10,-26`},EPSG_4675:{towgs84:`59.935,118.4,-10.871`},ESRI_104109:{towgs84:`-89.121,-348.182,260.871`},ESRI_104112:{towgs84:`-185.583,-230.096,281.361`},ESRI_104113:{towgs84:`25.1,-275.6,222.6`},IGNF_WGS72G:{towgs84:`0,12,6`},IGNF_NTFG:{towgs84:`-168,-60,320`},IGNF_EFATE57G:{towgs84:`-127,-769,472`},IGNF_PGP50G:{towgs84:`324.8,153.6,172.1`},IGNF_REUN47G:{towgs84:`94,-948,-1262`},IGNF_CSG67G:{towgs84:`-186,230,110`},IGNF_GUAD48G:{towgs84:`-467,-16,-300`},IGNF_TAHI51G:{towgs84:`162,117,154`},IGNF_TAHAAG:{towgs84:`65,342,77`},IGNF_NUKU72G:{towgs84:`84,274,65`},IGNF_PETRELS72G:{towgs84:`365,194,166`},IGNF_WALL78G:{towgs84:`253,-133,-127`},IGNF_MAYO50G:{towgs84:`-382,-59,-262`},IGNF_TANNAG:{towgs84:`-139,-967,436`},IGNF_IGN72G:{towgs84:`-13,-348,292`},IGNF_ATIGG:{towgs84:`1118,23,66`},IGNF_FANGA84G:{towgs84:`150.57,158.33,118.32`},IGNF_RUSAT84G:{towgs84:`202.13,174.6,-15.74`},IGNF_KAUE70G:{towgs84:`126.74,300.1,-75.49`},IGNF_MOP90G:{towgs84:`-10.8,-1.8,12.77`},IGNF_MHPF67G:{towgs84:`338.08,212.58,-296.17`},IGNF_TAHI79G:{towgs84:`160.61,116.05,153.69`},IGNF_ANAA92G:{towgs84:`1.5,3.84,4.81`},IGNF_MARQUI72G:{towgs84:`330.91,-13.92,58.56`},IGNF_APAT86G:{towgs84:`143.6,197.82,74.05`},IGNF_TUBU69G:{towgs84:`237.17,171.61,-77.84`},IGNF_STPM50G:{towgs84:`11.363,424.148,373.13`},EPSG_4150:{towgs84:`674.374,15.056,405.346`},EPSG_4754:{towgs84:`-208.4058,-109.8777,-2.5764`},ESRI_104101:{towgs84:`372.87,149.23,585.29`},EPSG_4693:{towgs84:`0,-0.15,0.68`},EPSG_6207:{towgs84:`293.17,726.18,245.36`},EPSG_4153:{towgs84:`-133.63,-157.5,-158.62`},EPSG_4132:{towgs84:`-241.54,-163.64,396.06`},EPSG_4221:{towgs84:`-154.5,150.7,100.4`},EPSG_4266:{towgs84:`-80.7,-132.5,41.1`},EPSG_4193:{towgs84:`-70.9,-151.8,-41.4`},EPSG_5340:{towgs84:`-0.41,0.46,-0.35`},EPSG_4246:{towgs84:`-294.7,-200.1,525.5`},EPSG_4318:{towgs84:`-3.2,-5.7,2.8`},EPSG_4121:{towgs84:`-199.87,74.79,246.62`},EPSG_4223:{towgs84:`-260.1,5.5,432.2`},EPSG_4158:{towgs84:`-0.465,372.095,171.736`},EPSG_4285:{towgs84:`-128.16,-282.42,21.93`},EPSG_4613:{towgs84:`-404.78,685.68,45.47`},EPSG_4607:{towgs84:`195.671,332.517,274.607`},EPSG_4475:{towgs84:`-381.788,-57.501,-256.673`},EPSG_4208:{towgs84:`-157.84,308.54,-146.6`},EPSG_4743:{towgs84:`70.995,-335.916,262.898`},EPSG_4710:{towgs84:`-323.65,551.39,-491.22`},EPSG_7881:{towgs84:`-0.077,0.079,0.086`},EPSG_4682:{towgs84:`283.729,735.942,261.143`},EPSG_4739:{towgs84:`-156,-271,-189`},EPSG_4679:{towgs84:`-80.01,253.26,291.19`},EPSG_4750:{towgs84:`-56.263,16.136,-22.856`},EPSG_4644:{towgs84:`-10.18,-350.43,291.37`},EPSG_4695:{towgs84:`-103.746,-9.614,-255.95`},EPSG_4292:{towgs84:`-355,21,72`},EPSG_4302:{towgs84:`-61.702,284.488,472.052`},EPSG_4143:{towgs84:`-124.76,53,466.79`},EPSG_4606:{towgs84:`-153,153,307`},EPSG_4699:{towgs84:`-770.1,158.4,-498.2`},EPSG_4247:{towgs84:`-273.5,110.6,-357.9`},EPSG_4160:{towgs84:`8.88,184.86,106.69`},EPSG_4161:{towgs84:`-233.43,6.65,173.64`},EPSG_9251:{towgs84:`-9.5,122.9,138.2`},EPSG_9253:{towgs84:`-78.1,101.6,133.3`},EPSG_4297:{towgs84:`-198.383,-240.517,-107.909`},EPSG_4269:{towgs84:`0,0,0`},EPSG_4301:{towgs84:`-147,506,687`},EPSG_4618:{towgs84:`-59,-11,-52`},EPSG_4612:{towgs84:`0,0,0`},EPSG_4678:{towgs84:`44.585,-131.212,-39.544`},EPSG_4250:{towgs84:`-130,29,364`},EPSG_4144:{towgs84:`214,804,268`},EPSG_4147:{towgs84:`-17.51,-108.32,-62.39`},EPSG_4259:{towgs84:`-254.1,-5.36,-100.29`},EPSG_4164:{towgs84:`-76,-138,67`},EPSG_4211:{towgs84:`-378.873,676.002,-46.255`},EPSG_4182:{towgs84:`-422.651,-172.995,84.02`},EPSG_4224:{towgs84:`-143.87,243.37,-33.52`},EPSG_4225:{towgs84:`-205.57,168.77,-4.12`},EPSG_5527:{towgs84:`-67.35,3.88,-38.22`},EPSG_4752:{towgs84:`98,390,-22`},EPSG_4310:{towgs84:`-30,190,89`},EPSG_9248:{towgs84:`-192.26,65.72,132.08`},EPSG_4680:{towgs84:`124.5,-63.5,-281`},EPSG_4701:{towgs84:`-79.9,-158,-168.9`},EPSG_4706:{towgs84:`-146.21,112.63,4.05`},EPSG_4805:{towgs84:`682,-203,480`},EPSG_4201:{towgs84:`-165,-11,206`},EPSG_4210:{towgs84:`-157,-2,-299`},EPSG_4183:{towgs84:`-104,167,-38`},EPSG_4139:{towgs84:`11,72,-101`},EPSG_4668:{towgs84:`-86,-98,-119`},EPSG_4717:{towgs84:`-2,151,181`},EPSG_4732:{towgs84:`102,52,-38`},EPSG_4280:{towgs84:`-377,681,-50`},EPSG_4209:{towgs84:`-138,-105,-289`},EPSG_4261:{towgs84:`31,146,47`},EPSG_4658:{towgs84:`-73,46,-86`},EPSG_4721:{towgs84:`265.025,384.929,-194.046`},EPSG_4222:{towgs84:`-136,-108,-292`},EPSG_4601:{towgs84:`-255,-15,71`},EPSG_4602:{towgs84:`725,685,536`},EPSG_4603:{towgs84:`72,213.7,93`},EPSG_4605:{towgs84:`9,183,236`},EPSG_4621:{towgs84:`137,248,-430`},EPSG_4657:{towgs84:`-28,199,5`},EPSG_4316:{towgs84:`103.25,-100.4,-307.19`},EPSG_4642:{towgs84:`-13,-348,292`},EPSG_4698:{towgs84:`145,-187,103`},EPSG_4192:{towgs84:`-206.1,-174.7,-87.7`},EPSG_4311:{towgs84:`-265,120,-358`},EPSG_4135:{towgs84:`58,-283,-182`},ESRI_104138:{towgs84:`198,-226,-347`},EPSG_4245:{towgs84:`-11,851,5`},EPSG_4142:{towgs84:`-125,53,467`},EPSG_4213:{towgs84:`-106,-87,188`},EPSG_4253:{towgs84:`-133,-77,-51`},EPSG_4129:{towgs84:`-132,-110,-335`},EPSG_4713:{towgs84:`-77,-128,142`},EPSG_4239:{towgs84:`217,823,299`},EPSG_4146:{towgs84:`295,736,257`},EPSG_4155:{towgs84:`-83,37,124`},EPSG_4165:{towgs84:`-173,253,27`},EPSG_4672:{towgs84:`175,-38,113`},EPSG_4236:{towgs84:`-637,-549,-203`},EPSG_4251:{towgs84:`-90,40,88`},EPSG_4271:{towgs84:`-2,374,172`},EPSG_4175:{towgs84:`-88,4,101`},EPSG_4716:{towgs84:`298,-304,-375`},EPSG_4315:{towgs84:`-23,259,-9`},EPSG_4744:{towgs84:`-242.2,-144.9,370.3`},EPSG_4244:{towgs84:`-97,787,86`},EPSG_4293:{towgs84:`616,97,-251`},EPSG_4714:{towgs84:`-127,-769,472`},EPSG_4736:{towgs84:`260,12,-147`},EPSG_6883:{towgs84:`-235,-110,393`},EPSG_6894:{towgs84:`-63,176,185`},EPSG_4205:{towgs84:`-43,-163,45`},EPSG_4256:{towgs84:`41,-220,-134`},EPSG_4262:{towgs84:`639,405,60`},EPSG_4604:{towgs84:`174,359,365`},EPSG_4169:{towgs84:`-115,118,426`},EPSG_4620:{towgs84:`-106,-129,165`},EPSG_4184:{towgs84:`-203,141,53`},EPSG_4616:{towgs84:`-289,-124,60`},EPSG_9403:{towgs84:`-307,-92,127`},EPSG_4684:{towgs84:`-133,-321,50`},EPSG_4708:{towgs84:`-491,-22,435`},EPSG_4707:{towgs84:`114,-116,-333`},EPSG_4709:{towgs84:`145,75,-272`},EPSG_4712:{towgs84:`-205,107,53`},EPSG_4711:{towgs84:`124,-234,-25`},EPSG_4718:{towgs84:`230,-199,-752`},EPSG_4719:{towgs84:`211,147,111`},EPSG_4724:{towgs84:`208,-435,-229`},EPSG_4725:{towgs84:`189,-79,-202`},EPSG_4735:{towgs84:`647,1777,-1124`},EPSG_4722:{towgs84:`-794,119,-298`},EPSG_4728:{towgs84:`-307,-92,127`},EPSG_4734:{towgs84:`-632,438,-609`},EPSG_4727:{towgs84:`912,-58,1227`},EPSG_4729:{towgs84:`185,165,42`},EPSG_4730:{towgs84:`170,42,84`},EPSG_4733:{towgs84:`276,-57,149`},ESRI_37218:{towgs84:`230,-199,-752`},ESRI_37240:{towgs84:`-7,215,225`},ESRI_37221:{towgs84:`252,-209,-751`},ESRI_4305:{towgs84:`-123,-206,219`},ESRI_104139:{towgs84:`-73,-247,227`},EPSG_4748:{towgs84:`51,391,-36`},EPSG_4219:{towgs84:`-384,664,-48`},EPSG_4255:{towgs84:`-333,-222,114`},EPSG_4257:{towgs84:`-587.8,519.75,145.76`},EPSG_4646:{towgs84:`-963,510,-359`},EPSG_6881:{towgs84:`-24,-203,268`},EPSG_6882:{towgs84:`-183,-15,273`},EPSG_4715:{towgs84:`-104,-129,239`},IGNF_RGF93GDD:{towgs84:`0,0,0`},IGNF_RGM04GDD:{towgs84:`0,0,0`},IGNF_RGSPM06GDD:{towgs84:`0,0,0`},IGNF_RGTAAF07GDD:{towgs84:`0,0,0`},IGNF_RGFG95GDD:{towgs84:`0,0,0`},IGNF_RGNCG:{towgs84:`0,0,0`},IGNF_RGPFGDD:{towgs84:`0,0,0`},IGNF_ETRS89G:{towgs84:`0,0,0`},IGNF_RGR92GDD:{towgs84:`0,0,0`},EPSG_4173:{towgs84:`0,0,0`},EPSG_4180:{towgs84:`0,0,0`},EPSG_4619:{towgs84:`0,0,0`},EPSG_4667:{towgs84:`0,0,0`},EPSG_4075:{towgs84:`0,0,0`},EPSG_6706:{towgs84:`0,0,0`},EPSG_7798:{towgs84:`0,0,0`},EPSG_4661:{towgs84:`0,0,0`},EPSG_4669:{towgs84:`0,0,0`},EPSG_8685:{towgs84:`0,0,0`},EPSG_4151:{towgs84:`0,0,0`},EPSG_9702:{towgs84:`0,0,0`},EPSG_4758:{towgs84:`0,0,0`},EPSG_4761:{towgs84:`0,0,0`},EPSG_4765:{towgs84:`0,0,0`},EPSG_8997:{towgs84:`0,0,0`},EPSG_4023:{towgs84:`0,0,0`},EPSG_4670:{towgs84:`0,0,0`},EPSG_4694:{towgs84:`0,0,0`},EPSG_4148:{towgs84:`0,0,0`},EPSG_4163:{towgs84:`0,0,0`},EPSG_4167:{towgs84:`0,0,0`},EPSG_4189:{towgs84:`0,0,0`},EPSG_4190:{towgs84:`0,0,0`},EPSG_4176:{towgs84:`0,0,0`},EPSG_4659:{towgs84:`0,0,0`},EPSG_3824:{towgs84:`0,0,0`},EPSG_3889:{towgs84:`0,0,0`},EPSG_4046:{towgs84:`0,0,0`},EPSG_4081:{towgs84:`0,0,0`},EPSG_4558:{towgs84:`0,0,0`},EPSG_4483:{towgs84:`0,0,0`},EPSG_5013:{towgs84:`0,0,0`},EPSG_5264:{towgs84:`0,0,0`},EPSG_5324:{towgs84:`0,0,0`},EPSG_5354:{towgs84:`0,0,0`},EPSG_5371:{towgs84:`0,0,0`},EPSG_5373:{towgs84:`0,0,0`},EPSG_5381:{towgs84:`0,0,0`},EPSG_5393:{towgs84:`0,0,0`},EPSG_5489:{towgs84:`0,0,0`},EPSG_5593:{towgs84:`0,0,0`},EPSG_6135:{towgs84:`0,0,0`},EPSG_6365:{towgs84:`0,0,0`},EPSG_5246:{towgs84:`0,0,0`},EPSG_7886:{towgs84:`0,0,0`},EPSG_8431:{towgs84:`0,0,0`},EPSG_8427:{towgs84:`0,0,0`},EPSG_8699:{towgs84:`0,0,0`},EPSG_8818:{towgs84:`0,0,0`},EPSG_4757:{towgs84:`0,0,0`},EPSG_9140:{towgs84:`0,0,0`},EPSG_8086:{towgs84:`0,0,0`},EPSG_4686:{towgs84:`0,0,0`},EPSG_4737:{towgs84:`0,0,0`},EPSG_4702:{towgs84:`0,0,0`},EPSG_4747:{towgs84:`0,0,0`},EPSG_4749:{towgs84:`0,0,0`},EPSG_4674:{towgs84:`0,0,0`},EPSG_4755:{towgs84:`0,0,0`},EPSG_4759:{towgs84:`0,0,0`},EPSG_4762:{towgs84:`0,0,0`},EPSG_4763:{towgs84:`0,0,0`},EPSG_4764:{towgs84:`0,0,0`},EPSG_4166:{towgs84:`0,0,0`},EPSG_4170:{towgs84:`0,0,0`},EPSG_5546:{towgs84:`0,0,0`},EPSG_7844:{towgs84:`0,0,0`},EPSG_4818:{towgs84:`589,76,480`},EPSG_10328:{towgs84:`0,0,0`},EPSG_9782:{towgs84:`0,0,0`},EPSG_9777:{towgs84:`0,0,0`},EPSG_10690:{towgs84:`0,0,0`},EPSG_10639:{towgs84:`0,0,0`},EPSG_10739:{towgs84:`0,0,0`},EPSG_7686:{towgs84:`0,0,0`},EPSG_8900:{towgs84:`0,0,0`},EPSG_5886:{towgs84:`0,0,0`},EPSG_7683:{towgs84:`0,0,0`},EPSG_6668:{towgs84:`0,0,0`},EPSG_20046:{towgs84:`0,0,0`},EPSG_10299:{towgs84:`0,0,0`},EPSG_10310:{towgs84:`0,0,0`},EPSG_10475:{towgs84:`0,0,0`},EPSG_4742:{towgs84:`0,0,0`},EPSG_10671:{towgs84:`0,0,0`},EPSG_10762:{towgs84:`0,0,0`},EPSG_10725:{towgs84:`0,0,0`},EPSG_10791:{towgs84:`0,0,0`},EPSG_10800:{towgs84:`0,0,0`},EPSG_10305:{towgs84:`0,0,0`},EPSG_10941:{towgs84:`0,0,0`},EPSG_10968:{towgs84:`0,0,0`},EPSG_10875:{towgs84:`0,0,0`},EPSG_6318:{towgs84:`0,0,0`},EPSG_10910:{towgs84:`0,0,0`}};for(var Zp in Xp){var Qp=Xp[Zp];Qp.datumName&&(Xp[Qp.datumName]=Qp)}function $p(e,t,n,r,i,a,o){var s={};return s.datum_type=5,t&&(s.datum_type=4,s.datum_params=t.map(parseFloat),(s.datum_params[0]!==0||s.datum_params[1]!==0||s.datum_params[2]!==0)&&(s.datum_type=1),s.datum_params.length>3&&(s.datum_params[3]!==0||s.datum_params[4]!==0||s.datum_params[5]!==0||s.datum_params[6]!==0)&&(s.datum_type=2,s.datum_params[3]*=Tf,s.datum_params[4]*=Tf,s.datum_params[5]*=Tf,s.datum_params[6]=s.datum_params[6]/1e6+1)),o&&(s.datum_type=3,s.grids=o),s.a=n,s.b=r,s.es=i,s.ep2=a,s}var em={};function tm(e,t,n){return t instanceof ArrayBuffer?nm(e,t,n):{ready:rm(e,t)}}function nm(e,t,n){var r=!0;n!==void 0&&n.includeErrorFields===!1&&(r=!1);var i=new DataView(t),a=cm(i),o=lm(i,a),s={header:o,subgrids:dm(i,o,a,r)};return em[e]=s,s}async function rm(e,t){for(var n=[],r=await t.getImageCount(),i=r-1;i>=0;i--){var a=await t.getImage(i),o=await a.readRasters(),s=[a.getWidth(),a.getHeight()],c=a.getBoundingBox().map(om),l=typeof a.fileDirectory.getValue==`function`?a.fileDirectory.getValue(`ModelPixelScale`):a.fileDirectory.ModelPixelScale,u=[l[0],l[1]].map(om),d=c[0]+(s[0]-1)*u[0],f=c[3]-(s[1]-1)*u[1],p=o[0],m=o[1],h=[];for(let e=s[1]-1;e>=0;e--)for(let t=s[0]-1;t>=0;t--){var g=e*s[0]+t;h.push([-sm(m[g]),sm(p[g])])}n.push({del:u,lim:s,ll:[-d,f],cvs:h})}var _={header:{nSubgrids:r},subgrids:n};return em[e]=_,_}function im(e){return e===void 0?null:e.split(`,`).map(am)}function am(e){if(e.length===0)return null;var t=e[0]===`@`;return t&&(e=e.slice(1)),e===`null`?{name:`null`,mandatory:!t,grid:null,isNull:!0}:{name:e,mandatory:!t,grid:em[e]||null,isNull:!1}}function om(e){return e*Math.PI/180}function sm(e){return e/3600*Math.PI/180}function cm(e){var t=e.getInt32(8,!1);return t!==11&&(t=e.getInt32(8,!0),t!==11&&console.warn(`Failed to detect nadgrid endian-ness, defaulting to little-endian`),!0)}function lm(e,t){return{nFields:e.getInt32(8,t),nSubgridFields:e.getInt32(24,t),nSubgrids:e.getInt32(40,t),shiftType:um(e,56,64).trim(),fromSemiMajorAxis:e.getFloat64(120,t),fromSemiMinorAxis:e.getFloat64(136,t),toSemiMajorAxis:e.getFloat64(152,t),toSemiMinorAxis:e.getFloat64(168,t)}}function um(e,t,n){return String.fromCharCode.apply(null,new Uint8Array(e.buffer.slice(t,n)))}function dm(e,t,n,r){for(var i=176,a=[],o=0;o<t.nSubgrids;o++){var s=pm(e,i,n),c=mm(e,i,s,n,r),l=Math.round(1+(s.upperLongitude-s.lowerLongitude)/s.longitudeInterval),u=Math.round(1+(s.upperLatitude-s.lowerLatitude)/s.latitudeInterval);a.push({ll:[sm(s.lowerLongitude),sm(s.lowerLatitude)],del:[sm(s.longitudeInterval),sm(s.latitudeInterval)],lim:[l,u],count:s.gridNodeCount,cvs:fm(c)});var d=16;r===!1&&(d=8),i+=176+s.gridNodeCount*d}return a}function fm(e){return e.map(function(e){return[sm(e.longitudeShift),sm(e.latitudeShift)]})}function pm(e,t,n){return{name:um(e,t+8,t+16).trim(),parent:um(e,t+24,t+24+8).trim(),lowerLatitude:e.getFloat64(t+72,n),upperLatitude:e.getFloat64(t+88,n),lowerLongitude:e.getFloat64(t+104,n),upperLongitude:e.getFloat64(t+120,n),latitudeInterval:e.getFloat64(t+136,n),longitudeInterval:e.getFloat64(t+152,n),gridNodeCount:e.getInt32(t+168,n)}}function mm(e,t,n,r,i){var a=t+176,o=16;i===!1&&(o=8);for(var s=[],c=0;c<n.gridNodeCount;c++){var l={latitudeShift:e.getFloat32(a+c*o,r),longitudeShift:e.getFloat32(a+c*o+4,r)};i!==!1&&(l.latitudeAccuracy=e.getFloat32(a+c*o+8,r),l.longitudeAccuracy=e.getFloat32(a+c*o+12,r)),s.push(l)}return s}function hm(e,t){if(!(this instanceof hm))return new hm(e);this.forward=null,this.inverse=null,this.init=null,this.name,this.axis,this.names=null,this.title,t=t||function(e){if(e)throw e};var n=Tp(e);if(typeof n!=`object`){t(`Could not parse to valid json: `+e);return}var r=hm.projections.get(n.projName);if(!r){t(`Could not get projection name from: `+e);return}if(n.datumCode&&n.datumCode!==`none`){var i=Rf(Xp,n.datumCode);i&&(n.datum_params=n.datum_params||(i.towgs84?i.towgs84.split(`,`):null),n.ellps=i.ellipse,n.datumName=i.datumName?i.datumName:n.datumCode)}n.axis=n.axis||`enu`,n.ellps=n.ellps||`wgs84`,n.lat1=n.lat1||n.lat0;var a=Yp(n.a,n.b,n.rf,n.ellps,n.sphere),o=Jp(a.a,a.b,a.rf,n.R_A),s=im(n.nadgrids),c=n.datum||$p(n.datumCode,n.datum_params,a.a,a.b,o.es,o.ep2,s);Ep(this,n),Ep(this,r),this.a=a.a,this.b=a.b,this.rf=a.rf,this.sphere=a.sphere,this.es=o.es,this.e=o.e,this.ep2=o.ep2,this.datum=c,`init`in this&&typeof this.init==`function`&&this.init(),this.k0||(this.k0=1),t(null,this)}hm.projections=Gp,hm.projections.start();function gm(e,t){return e.datum_type!==t.datum_type||e.a!==t.a||Math.abs(e.es-t.es)>5e-11?!1:e.datum_type===1?e.datum_params[0]===t.datum_params[0]&&e.datum_params[1]===t.datum_params[1]&&e.datum_params[2]===t.datum_params[2]:e.datum_type!==2||e.datum_params[0]===t.datum_params[0]&&e.datum_params[1]===t.datum_params[1]&&e.datum_params[2]===t.datum_params[2]&&e.datum_params[3]===t.datum_params[3]&&e.datum_params[4]===t.datum_params[4]&&e.datum_params[5]===t.datum_params[5]&&e.datum_params[6]===t.datum_params[6]}function _m(e,t,n){var r=e.x,i=e.y,a=e.z?e.z:0,o,s,c,l;if(i<-V&&i>-1.001*V)i=-V;else if(i>V&&i<1.001*V)i=V;else if(i<-V)return{x:-1/0,y:-1/0,z:e.z};else if(i>V)return{x:1/0,y:1/0,z:e.z};return r>Math.PI&&(r-=2*Math.PI),s=Math.sin(i),l=Math.cos(i),c=s*s,o=n/Math.sqrt(1-t*c),{x:(o+a)*l*Math.cos(r),y:(o+a)*l*Math.sin(r),z:(o*(1-t)+a)*s}}function vm(e,t,n,r){var i=1e-12,a=i*i,o=30,s,c,l,u,d,f,p,m,h,g,_,v,y,b=e.x,x=e.y,S=e.z?e.z:0,C,w,T;if(s=Math.sqrt(b*b+x*x),c=Math.sqrt(b*b+x*x+S*S),s/n<i){if(C=0,c/n<i)return w=V,T=-r,{x:e.x,y:e.y,z:e.z}}else C=Math.atan2(x,b);l=S/c,u=s/c,d=1/Math.sqrt(1-t*(2-t)*u*u),m=u*(1-t)*d,h=l*d,y=0;do y++,p=n/Math.sqrt(1-t*h*h),T=s*m+S*h-p*(1-t*h*h),f=t*p/(p+T),d=1/Math.sqrt(1-f*(2-f)*u*u),g=u*(1-f)*d,_=l*d,v=_*m-g*h,m=g,h=_;while(v*v>a&&y<o);return w=Math.atan(_/Math.abs(g)),{x:C,y:w,z:T}}function ym(e,t,n){if(t===1)return{x:e.x+n[0],y:e.y+n[1],z:e.z+n[2]};if(t===2){var r=n[0],i=n[1],a=n[2],o=n[3],s=n[4],c=n[5],l=n[6];return{x:l*(e.x-c*e.y+s*e.z)+r,y:l*(c*e.x+e.y-o*e.z)+i,z:l*(-s*e.x+o*e.y+e.z)+a}}}function bm(e,t,n){if(t===1)return{x:e.x-n[0],y:e.y-n[1],z:e.z-n[2]};if(t===2){var r=n[0],i=n[1],a=n[2],o=n[3],s=n[4],c=n[5],l=n[6],u=(e.x-r)/l,d=(e.y-i)/l,f=(e.z-a)/l;return{x:u+c*d-s*f,y:-c*u+d+o*f,z:s*u-o*d+f}}}function xm(e){return e===1||e===2}function Sm(e,t,n){if(gm(e,t)||e.datum_type===5||t.datum_type===5)return n;var r=e.a,i=e.es;if(e.datum_type===3){if(Cm(e,!1,n)!==0)return;r=Sf,i=wf}var a=t.a,o=t.b,s=t.es;if(t.datum_type===3&&(a=Sf,o=Cf,s=wf),i===s&&r===a&&!xm(e.datum_type)&&!xm(t.datum_type)||(n=_m(n,i,r),xm(e.datum_type)&&(n=ym(n,e.datum_type,e.datum_params)),xm(t.datum_type)&&(n=bm(n,t.datum_type,t.datum_params)),n=vm(n,s,a,o),t.datum_type!==3||Cm(t,!0,n)===0))return n}function Cm(e,t,n){if(e.grids===null||e.grids.length===0)return console.log(`Grid shift grids not found`),-1;var r={x:-n.x,y:n.y},i={x:NaN,y:NaN},a=[];outer:for(var o=0;o<e.grids.length;o++){var s=e.grids[o];if(a.push(s.name),s.isNull){i=r;break}if(s.grid===null){if(s.mandatory)return console.log(`Unable to find mandatory grid '`+s.name+`'`),-1;continue}for(var c=s.grid.subgrids,l=0,u=c.length;l<u;l++){var d=c[l],f=(Math.abs(d.del[1])+Math.abs(d.del[0]))/1e4,p=d.ll[0]-f,m=d.ll[1]-f,h=d.ll[0]+(d.lim[0]-1)*d.del[0]+f,g=d.ll[1]+(d.lim[1]-1)*d.del[1]+f;if(!(m>r.y||p>r.x||g<r.y||h<r.x)&&(i=wm(r,t,d),!isNaN(i.x)))break outer}}return isNaN(i.x)?(console.log(`Failed to find a grid shift table for location '`+-r.x*jf+` `+r.y*jf+` tried: '`+a+`'`),-1):(n.x=-i.x,n.y=i.y,0)}function wm(e,t,n){var r={x:NaN,y:NaN};if(isNaN(e.x))return r;var i={x:e.x,y:e.y};i.x-=n.ll[0],i.y-=n.ll[1],i.x=H(i.x-Math.PI)+Math.PI;var a=Tm(i,n);if(t){if(isNaN(a.x))return r;a.x=i.x-a.x,a.y=i.y-a.y;var o=9,s=1e-12,c,l;do{if(l=Tm(a,n),isNaN(l.x)){console.log(`Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.`);break}c={x:i.x-(l.x+a.x),y:i.y-(l.y+a.y)},a.x+=c.x,a.y+=c.y}while(o--&&Math.abs(c.x)>s&&Math.abs(c.y)>s);if(o<0)return console.log(`Inverse grid shift iterator failed to converge.`),r;r.x=H(a.x+n.ll[0]),r.y=a.y+n.ll[1]}else isNaN(a.x)||(r.x=e.x+a.x,r.y=e.y+a.y);return r}function Tm(e,t){var n={x:e.x/t.del[0],y:e.y/t.del[1]},r={x:Math.floor(n.x),y:Math.floor(n.y)},i={x:n.x-1*r.x,y:n.y-1*r.y},a={x:NaN,y:NaN},o;if(r.x<0||r.x>=t.lim[0]||r.y<0||r.y>=t.lim[1])return a;o=r.y*t.lim[0]+r.x;var s={x:t.cvs[o][0],y:t.cvs[o][1]};o++;var c={x:t.cvs[o][0],y:t.cvs[o][1]};o+=t.lim[0];var l={x:t.cvs[o][0],y:t.cvs[o][1]};o--;var u={x:t.cvs[o][0],y:t.cvs[o][1]},d=i.x*i.y,f=i.x*(1-i.y),p=(1-i.x)*(1-i.y),m=(1-i.x)*i.y;return a.x=p*s.x+f*c.x+m*u.x+d*l.x,a.y=p*s.y+f*c.y+m*u.y+d*l.y,a}var Em=[`x`,`y`,`z`];function Dm(e,t){let n={};for(let r=0,i=e.axis.length;r<i;r++){if(r===2&&t.z===void 0)continue;let i=t[Em[r]];switch(e.axis[r]){case`e`:n.x=i;break;case`w`:n.x=-i;break;case`n`:n.y=i;break;case`s`:n.y=-i;break;case`u`:n.z=i;break;case`d`:n.z=-i;break;default:return null}}return n}function Om(e,t){let n={};for(let r=0,i=e.axis.length;r<i;r++)if(r!==2||t.z!==void 0)switch(e.axis[r]){case`e`:n[Em[r]]=t.x;break;case`w`:n[Em[r]]=-t.x;break;case`n`:n[Em[r]]=t.y;break;case`s`:n[Em[r]]=-t.y;break;case`u`:n[Em[r]]=t.z;break;case`d`:n[Em[r]]=-t.z;break;default:return null}return n}function km(e){var t={x:e[0],y:e[1]};return e.length>2&&(t.z=e[2]),e.length>3&&(t.m=e[3]),t}function Am(e){jm(e.x),jm(e.y)}function jm(e){if(typeof Number.isFinite==`function`){if(Number.isFinite(e))return;throw TypeError(`coordinates must be finite numbers`)}if(typeof e!=`number`||e!==e||!isFinite(e))throw TypeError(`coordinates must be finite numbers`)}function Mm(e,t){return(e.datum.datum_type===1||e.datum.datum_type===2||e.datum.datum_type===3)&&t.datumCode!==`WGS84`||(t.datum.datum_type===1||t.datum.datum_type===2||t.datum.datum_type===3)&&e.datumCode!==`WGS84`}function Nm(e,t,n,r){var i,a=n.z!==void 0;if(Am(n),e.datum&&t.datum&&Mm(e,t)&&(i=new hm(`WGS84`),n=Nm(e,i,n,r),e=i),r&&e.axis!==`enu`&&(n=Dm(e,n)),e.projName===`longlat`)n={x:n.x*Af,y:n.y*Af,z:n.z||0};else if(e.to_meter&&(n={x:n.x*e.to_meter,y:n.y*e.to_meter,z:n.z||0}),n=e.inverse(n),!n)return;if(e.from_greenwich&&(n.x+=e.from_greenwich),n=Sm(e.datum,t.datum,n),n)return n=n,t.from_greenwich&&(n={x:n.x-t.from_greenwich,y:n.y,z:n.z||0}),t.projName===`longlat`?(t.long_wrap!==void 0&&(n.x=t.long_wrap+H(n.x-t.long_wrap)),n={x:n.x*jf,y:n.y*jf,z:n.z||0}):(n=t.forward(n),t.to_meter&&(n={x:n.x/t.to_meter,y:n.y/t.to_meter,z:n.z||0})),r&&t.axis!==`enu`?Om(t,n):(n&&!a&&t.projName!==`geocent`&&delete n.z,n)}function Pm(e,t,n,r){return Nm(e,t,Array.isArray(n)?km(n):{x:n.x,y:n.y,z:n.z,m:n.m},r)}var Fm=hm(`WGS84`);function Im(e,t,n,r){var i,a,o;return Array.isArray(n)?(i=Nm(e,t,km(n),r)||{x:NaN,y:NaN},n.length>2?(a=e.name!==void 0&&e.name===`geocent`||t.name!==void 0&&t.name===`geocent`,a?typeof i.z==`number`?[i.x,i.y,i.z].concat(n.slice(3)):[i.x,i.y,n[2]].concat(n.slice(3)):r&&typeof i.z==`number`?[i.x,i.y,i.z].concat(n.slice(3)):[i.x,i.y].concat(n.slice(2))):[i.x,i.y]):(i=Nm(e,t,{x:n.x,y:n.y,z:n.z,m:n.m},r)||{x:NaN,y:NaN},o=Object.keys(n),o.length===2?i:(a=e.name!==void 0&&e.name===`geocent`||t.name!==void 0&&t.name===`geocent`,o.forEach(function(e){e!==`x`&&e!==`y`&&(e!==`z`||!a&&!r)&&(i[e]=n[e])}),i))}function Lm(e){return e instanceof hm?e:typeof e==`object`&&`oProj`in e?e.oProj:hm(e)}function Rm(e,t,n){var r,i,a=!1,o;return t===void 0?(i=Lm(e),r=Fm,a=!0):(t.x!==void 0||Array.isArray(t))&&(n=t,i=Lm(e),r=Fm,a=!0),r||(r=Lm(e)),i||(i=Lm(t)),n?Im(r,i,n):(o={forward:function(e,t){return Im(r,i,e,t)},inverse:function(e,t){return Im(i,r,e,t)}},a&&(o.oProj=i),o)}var zm=6,Bm=`AJSAJS`,Vm=`AFAFAF`,Hm=65,Um=73,Wm=79,Gm=86,Km=90,qm={forward:Jm,inverse:Ym,toPoint:Xm};function Jm(e,t){return t=t||5,nh($m({lat:e[1],lon:e[0]}),t)}function Ym(e){var t=eh(oh(e.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat,t.lon,t.lat]:[t.left,t.bottom,t.right,t.top]}function Xm(e){var t=eh(oh(e.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat]:[(t.left+t.right)/2,(t.top+t.bottom)/2]}function Zm(e){return Math.PI/180*e}function Qm(e){return e/Math.PI*180}function $m(e){var t=e.lat,n=e.lon,r=6378137,i=.00669438,a=.9996,o,s,c,l,u,d,f,p=Zm(t),m=Zm(n),h,g=Math.floor((n+180)/6)+1;n===180&&(g=60),t>=56&&t<64&&n>=3&&n<12&&(g=32),t>=72&&t<84&&(n>=0&&n<9?g=31:n>=9&&n<21?g=33:n>=21&&n<33?g=35:n>=33&&n<42&&(g=37)),o=(g-1)*6-180+3,h=Zm(o),s=i/(1-i),c=r/Math.sqrt(1-i*Math.sin(p)*Math.sin(p)),l=Math.tan(p)*Math.tan(p),u=s*Math.cos(p)*Math.cos(p),d=Math.cos(p)*(m-h),f=r*((1-i/4-3*i*i/64-5*i*i*i/256)*p-(3*i/8+3*i*i/32+45*i*i*i/1024)*Math.sin(2*p)+(15*i*i/256+45*i*i*i/1024)*Math.sin(4*p)-35*i*i*i/3072*Math.sin(6*p));var _=a*c*(d+(1-l+u)*d*d*d/6+(5-18*l+l*l+72*u-58*s)*d*d*d*d*d/120)+5e5,v=a*(f+c*Math.tan(p)*(d*d/2+(5-l+9*u+4*u*u)*d*d*d*d/24+(61-58*l+l*l+600*u-330*s)*d*d*d*d*d*d/720));return t<0&&(v+=1e7),{northing:Math.round(v),easting:Math.round(_),zoneNumber:g,zoneLetter:th(t)}}function eh(e){var t=e.northing,n=e.easting,r=e.zoneLetter,i=e.zoneNumber;if(i<0||i>60)return null;var a=.9996,o=6378137,s=.00669438,c,l=(1-Math.sqrt(1-s))/(1+Math.sqrt(1-s)),u,d,f,p,m,h,g,_,v,y=n-5e5,b=t;r<`N`&&(b-=1e7),g=(i-1)*6-180+3,c=s/(1-s),h=b/a,_=h/(o*(1-s/4-3*s*s/64-5*s*s*s/256)),v=_+(3*l/2-27*l*l*l/32)*Math.sin(2*_)+(21*l*l/16-55*l*l*l*l/32)*Math.sin(4*_)+151*l*l*l/96*Math.sin(6*_),u=o/Math.sqrt(1-s*Math.sin(v)*Math.sin(v)),d=Math.tan(v)*Math.tan(v),f=c*Math.cos(v)*Math.cos(v),p=o*(1-s)/(1-s*Math.sin(v)*Math.sin(v))**1.5,m=y/(u*a);var x=v-u*Math.tan(v)/p*(m*m/2-(5+3*d+10*f-4*f*f-9*c)*m*m*m*m/24+(61+90*d+298*f+45*d*d-252*c-3*f*f)*m*m*m*m*m*m/720);x=Qm(x);var S=(m-(1+2*d+f)*m*m*m/6+(5-2*f+28*d-3*f*f+8*c+24*d*d)*m*m*m*m*m/120)/Math.cos(v);S=g+Qm(S);var C;if(e.accuracy){var w=eh({northing:e.northing+e.accuracy,easting:e.easting+e.accuracy,zoneLetter:e.zoneLetter,zoneNumber:e.zoneNumber});C={top:w.lat,right:w.lon,bottom:x,left:S}}else C={lat:x,lon:S};return C}function th(e){var t=`Z`;return 84>=e&&e>=72?t=`X`:72>e&&e>=64?t=`W`:64>e&&e>=56?t=`V`:56>e&&e>=48?t=`U`:48>e&&e>=40?t=`T`:40>e&&e>=32?t=`S`:32>e&&e>=24?t=`R`:24>e&&e>=16?t=`Q`:16>e&&e>=8?t=`P`:8>e&&e>=0?t=`N`:0>e&&e>=-8?t=`M`:-8>e&&e>=-16?t=`L`:-16>e&&e>=-24?t=`K`:-24>e&&e>=-32?t=`J`:-32>e&&e>=-40?t=`H`:-40>e&&e>=-48?t=`G`:-48>e&&e>=-56?t=`F`:-56>e&&e>=-64?t=`E`:-64>e&&e>=-72?t=`D`:-72>e&&e>=-80&&(t=`C`),t}function nh(e,t){var n=`00000`+e.easting,r=`00000`+e.northing;return e.zoneNumber+e.zoneLetter+rh(e.easting,e.northing,e.zoneNumber)+n.substr(n.length-5,t)+r.substr(r.length-5,t)}function rh(e,t,n){var r=ih(n);return ah(Math.floor(e/1e5),Math.floor(t/1e5)%20,r)}function ih(e){var t=e%zm;return t===0&&(t=zm),t}function ah(e,t,n){var r=n-1,i=Bm.charCodeAt(r),a=Vm.charCodeAt(r),o=i+e-1,s=a+t,c=!1;return o>Km&&(o=o-Km+Hm-1,c=!0),(o===Um||i<Um&&o>Um||(o>Um||i<Um)&&c)&&o++,(o===Wm||i<Wm&&o>Wm||(o>Wm||i<Wm)&&c)&&(o++,o===Um&&o++),o>Km&&(o=o-Km+Hm-1),s>Gm?(s=s-Gm+Hm-1,c=!0):c=!1,(s===Um||a<Um&&s>Um||(s>Um||a<Um)&&c)&&s++,(s===Wm||a<Wm&&s>Wm||(s>Wm||a<Wm)&&c)&&(s++,s===Um&&s++),s>Gm&&(s=s-Gm+Hm-1),String.fromCharCode(o)+String.fromCharCode(s)}function oh(e){if(e&&e.length===0)throw`MGRSPoint coverting from nothing`;for(var t=e.length,n=null,r=``,i,a=0;!/[A-Z]/.test(i=e.charAt(a));){if(a>=2)throw`MGRSPoint bad conversion from: `+e;r+=i,a++}var o=parseInt(r,10);if(a===0||a+3>t)throw`MGRSPoint bad conversion from: `+e;var s=e.charAt(a++);if(s<=`A`||s===`B`||s===`Y`||s>=`Z`||s===`I`||s===`O`)throw`MGRSPoint zone letter `+s+` not handled: `+e;n=e.substring(a,a+=2);for(var c=ih(o),l=sh(n.charAt(0),c),u=ch(n.charAt(1),c);u<lh(s);)u+=2e6;var d=t-a;if(d%2!=0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+e;var f=d/2,p=0,m=0,h,g,_,v,y;return f>0&&(h=1e5/10**f,g=e.substring(a,a+f),p=parseFloat(g)*h,_=e.substring(a+f),m=parseFloat(_)*h),v=p+l,y=m+u,{easting:v,northing:y,zoneLetter:s,zoneNumber:o,accuracy:h}}function sh(e,t){for(var n=Bm.charCodeAt(t-1),r=1e5,i=!1;n!==e.charCodeAt(0);){if(n++,n===Um&&n++,n===Wm&&n++,n>Km){if(i)throw`Bad character: `+e;n=Hm,i=!0}r+=1e5}return r}function ch(e,t){if(e>`V`)throw`MGRSPoint given invalid Northing `+e;for(var n=Vm.charCodeAt(t-1),r=0,i=!1;n!==e.charCodeAt(0);){if(n++,n===Um&&n++,n===Wm&&n++,n>Gm){if(i)throw`Bad character: `+e;n=Hm,i=!0}r+=1e5}return r}function lh(e){var t;switch(e){case`C`:t=11e5;break;case`D`:t=2e6;break;case`E`:t=28e5;break;case`F`:t=37e5;break;case`G`:t=46e5;break;case`H`:t=55e5;break;case`J`:t=64e5;break;case`K`:t=73e5;break;case`L`:t=82e5;break;case`M`:t=91e5;break;case`N`:t=0;break;case`P`:t=8e5;break;case`Q`:t=17e5;break;case`R`:t=26e5;break;case`S`:t=35e5;break;case`T`:t=44e5;break;case`U`:t=53e5;break;case`V`:t=62e5;break;case`W`:t=7e6;break;case`X`:t=79e5;break;default:t=-1}if(t>=0)return t;throw`Invalid zone letter: `+e}function uh(e,t,n){if(!(this instanceof uh))return new uh(e,t,n);if(Array.isArray(e))this.x=e[0],this.y=e[1],this.z=e[2]||0;else if(typeof e==`object`)this.x=e.x,this.y=e.y,this.z=e.z||0;else if(typeof e==`string`&&t===void 0){var r=e.split(`,`);this.x=parseFloat(r[0]),this.y=parseFloat(r[1]),this.z=parseFloat(r[2])||0}else this.x=e,this.y=t,this.z=n||0;console.warn(`proj4.Point will be removed in version 3, use proj4.toPoint`)}uh.fromMGRS=function(e){return new uh(Xm(e))},uh.prototype.toMGRS=function(e){return Jm([this.x,this.y],e)};var dh=1,fh=.25,ph=.046875,mh=.01953125,hh=.01068115234375,gh=.75,_h=.46875,vh=.013020833333333334,yh=.007120768229166667,bh=.3645833333333333,xh=.005696614583333333,Sh=.3076171875;function Ch(e){var t=[];t[0]=dh-e*(fh+e*(ph+e*(mh+e*hh))),t[1]=e*(gh-e*(ph+e*(mh+e*hh)));var n=e*e;return t[2]=n*(_h-e*(vh+e*yh)),n*=e,t[3]=n*(bh-e*xh),t[4]=n*e*Sh,t}function wh(e,t,n,r){return n*=t,t*=t,r[0]*e-n*(r[1]+t*(r[2]+t*(r[3]+t*r[4])))}var Th=20;function Eh(e,t,n){for(var r=1/(1-t),i=e,a=Th;a;--a){var o=Math.sin(i),s=1-t*o*o;if(s=(wh(i,o,Math.cos(i),n)-e)*(s*Math.sqrt(s))*r,i-=s,Math.abs(s)<1e-10)return i}return i}function Dh(){this.x0=this.x0===void 0?0:this.x0,this.y0=this.y0===void 0?0:this.y0,this.long0=this.long0===void 0?0:this.long0,this.lat0=this.lat0===void 0?0:this.lat0,this.es&&(this.en=Ch(this.es),this.ml0=wh(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function Oh(e){var t=e.x,n=e.y,r=H(t-this.long0,this.over),i,a,o,s=Math.sin(n),c=Math.cos(n);if(this.es){var l=c*r,u=l**2,d=this.ep2*c**2,f=d**2,p=(Math.abs(c)>1e-10?Math.tan(n):0)**2,m=p**2;i=1-this.es*s**2,l/=Math.sqrt(i);var h=wh(n,s,c,this.en);a=this.a*(this.k0*l*(1+u/6*(1-p+d+u/20*(5-18*p+m+14*d-58*p*d+u/42*(61+179*m-m*p-479*p)))))+this.x0,o=this.a*(this.k0*(h-this.ml0+s*r*l/2*(1+u/12*(5-p+9*d+4*f+u/30*(61+m-58*p+270*d-330*p*d+u/56*(1385+543*m-m*p-3111*p))))))+this.y0}else{var g=c*Math.sin(r);if(Math.abs(Math.abs(g)-1)<1e-10)return 93;if(a=.5*this.a*this.k0*Math.log((1+g)/(1-g))+this.x0,o=c*Math.cos(r)/Math.sqrt(1-g**2),g=Math.abs(o),g>=1){if(g-1>1e-10)return 93;o=0}else o=Math.acos(o);n<0&&(o=-o),o=this.a*this.k0*(o-this.lat0)+this.y0}return e.x=a,e.y=o,e}function kh(e){var t,n,r,i,a=(e.x-this.x0)*(1/this.a),o=(e.y-this.y0)*(1/this.a);if(!this.es){var s=Math.exp(a/this.k0),c=.5*(s-1/s),l=this.lat0+o/this.k0,u=Math.cos(l);t=Math.sqrt((1-u**2)/(1+c**2)),r=Math.asin(t),o<0&&(r=-r),i=c===0&&u===0?0:H(Math.atan2(c,u)+this.long0,this.over)}else if(t=this.ml0+o/this.k0,n=Eh(t,this.es,this.en),Math.abs(n)<V){var d=Math.sin(n),f=Math.cos(n),p=Math.abs(f)>1e-10?Math.tan(n):0,m=this.ep2*f**2,h=m**2,g=p**2,_=g**2;t=1-this.es*d**2;var v=a*Math.sqrt(t)/this.k0,y=v**2;t*=p,r=n-t*y/(1-this.es)*.5*(1-y/12*(5+3*g-9*m*g+m-4*h-y/30*(61+90*g-252*m*g+45*_+46*m-y/56*(1385+3633*g+4095*_+1574*_*g)))),i=H(this.long0+v*(1-y/6*(1+2*g+m-y/20*(5+28*g+24*_+8*m*g+6*m-y/42*(61+662*g+1320*_+720*_*g))))/f,this.over)}else r=V*Op(o),i=0;return e.x=i,e.y=r,e}var Ah={init:Dh,forward:Oh,inverse:kh,names:[`Fast_Transverse_Mercator`,`Fast Transverse Mercator`]};function jh(e){var t=Math.exp(e);return t=(t-1/t)/2,t}function Mh(e,t){e=Math.abs(e),t=Math.abs(t);var n=Math.max(e,t),r=Math.min(e,t)/(n||1);return n*Math.sqrt(1+r**2)}function Nh(e){var t=1+e,n=t-1;return n===0?e:e*Math.log(t)/n}function Ph(e){var t=Math.abs(e);return t=Nh(t*(1+t/(Mh(1,t)+1))),e<0?-t:t}function Fh(e,t){for(var n=2*Math.cos(2*t),r=e.length-1,i=e[r],a=0,o;--r>=0;)o=-a+n*i+e[r],a=i,i=o;return t+o*Math.sin(2*t)}function Ih(e,t){for(var n=2*Math.cos(t),r=e.length-1,i=e[r],a=0,o;--r>=0;)o=-a+n*i+e[r],a=i,i=o;return Math.sin(t)*o}function Lh(e){var t=Math.exp(e);return t=(t+1/t)/2,t}function Rh(e,t,n){for(var r=Math.sin(t),i=Math.cos(t),a=jh(n),o=Lh(n),s=2*i*o,c=-2*r*a,l=e.length-1,u=e[l],d=0,f=0,p=0,m,h;--l>=0;)m=f,h=d,f=u,d=p,u=-m+s*f-c*d+e[l],p=-h+c*f+s*d;return s=r*o,c=i*a,[s*u-c*p,s*p+c*u]}function zh(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw Error(`Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.`);this.approx&&(Ah.init.apply(this),this.forward=Ah.forward,this.inverse=Ah.inverse),this.x0=this.x0===void 0?0:this.x0,this.y0=this.y0===void 0?0:this.y0,this.long0=this.long0===void 0?0:this.long0,this.lat0=this.lat0===void 0?0:this.lat0,this.k0=this.k0===void 0?1:this.k0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var e=this.es/(1+Math.sqrt(1-this.es)),t=e/(2-e),n=t;this.cgb[0]=t*(2+t*(-2/3+t*(-2+t*(116/45+t*(26/45+-2854/675*t))))),this.cbg[0]=t*(-2+t*(2/3+t*(4/3+t*(-82/45+t*(32/45+4642/4725*t))))),n*=t,this.cgb[1]=n*(7/3+t*(-8/5+t*(-227/45+t*(2704/315+2323/945*t)))),this.cbg[1]=n*(5/3+t*(-16/15+t*(-13/9+t*(904/315+-1522/945*t)))),n*=t,this.cgb[2]=n*(56/15+t*(-136/35+t*(-1262/105+73814/2835*t))),this.cbg[2]=n*(-26/15+t*(34/21+t*(8/5+-12686/2835*t))),n*=t,this.cgb[3]=n*(4279/630+t*(-332/35+-399572/14175*t)),this.cbg[3]=n*(1237/630+t*(-12/5+-24832/14175*t)),n*=t,this.cgb[4]=n*(4174/315+-144838/6237*t),this.cbg[4]=n*(-734/315+109598/31185*t),n*=t,this.cgb[5]=601676/22275*n,this.cbg[5]=444337/155925*n,n=t**2,this.Qn=this.k0/(1+t)*(1+n*(1/4+n*(1/64+n/256))),this.utg[0]=t*(-.5+t*(2/3+t*(-37/96+t*(1/360+t*(81/512+-96199/604800*t))))),this.gtu[0]=t*(.5+t*(-2/3+t*(5/16+t*(41/180+t*(-127/288+7891/37800*t))))),this.utg[1]=n*(-1/48+t*(-1/15+t*(437/1440+t*(-46/105+1118711/3870720*t)))),this.gtu[1]=n*(13/48+t*(-3/5+t*(557/1440+t*(281/630+-1983433/1935360*t)))),n*=t,this.utg[2]=n*(-17/480+t*(37/840+t*(209/4480+-5569/90720*t))),this.gtu[2]=n*(61/240+t*(-103/140+t*(15061/26880+167603/181440*t))),n*=t,this.utg[3]=n*(-4397/161280+t*(11/504+830251/7257600*t)),this.gtu[3]=n*(49561/161280+t*(-179/168+6601661/7257600*t)),n*=t,this.utg[4]=n*(-4583/161280+108847/3991680*t),this.gtu[4]=n*(34729/80640+-3418889/1995840*t),n*=t,this.utg[5]=-20648693/638668800*n,this.gtu[5]=212378941/319334400*n;var r=Fh(this.cbg,this.lat0);this.Zb=-this.Qn*(r+Ih(this.gtu,2*r))}function Bh(e){var t=H(e.x-this.long0,this.over),n=e.y;n=Fh(this.cbg,n);var r=Math.sin(n),i=Math.cos(n),a=Math.sin(t),o=Math.cos(t);n=Math.atan2(r,o*i),t=Math.atan2(a*i,Mh(r,i*o)),t=Ph(Math.tan(t));var s=Rh(this.gtu,2*n,2*t);n+=s[0],t+=s[1];var c,l;return Math.abs(t)<=2.623395162778?(c=this.a*(this.Qn*t)+this.x0,l=this.a*(this.Qn*n+this.Zb)+this.y0):(c=1/0,l=1/0),e.x=c,e.y=l,e}function Vh(e){var t=(e.x-this.x0)*(1/this.a),n=(e.y-this.y0)*(1/this.a);n=(n-this.Zb)/this.Qn,t/=this.Qn;var r,i;if(Math.abs(t)<=2.623395162778){var a=Rh(this.utg,2*n,2*t);n+=a[0],t+=a[1],t=Math.atan(jh(t));var o=Math.sin(n),s=Math.cos(n),c=Math.sin(t),l=Math.cos(t);n=Math.atan2(o*l,Mh(c,l*s)),t=Math.atan2(c,l*s),r=H(t+this.long0,this.over),i=Fh(this.cgb,n)}else r=1/0,i=1/0;return e.x=r,e.y=i,e}var Hh={init:zh,forward:Bh,inverse:Vh,names:[`Extended_Transverse_Mercator`,`Extended Transverse Mercator`,`etmerc`,`Transverse_Mercator`,`Transverse Mercator`,`Gauss Kruger`,`Gauss_Kruger`,`tmerc`]};function Uh(e,t){if(e===void 0){if(e=Math.floor((H(t)+Math.PI)*30/Math.PI)+1,e<0)return 0;if(e>60)return 60}return e}var Wh=`etmerc`;function Gh(){var e=Uh(this.zone,this.long0);if(e===void 0)throw Error(`unknown utm zone`);this.lat0=0,this.long0=(6*Math.abs(e)-183)*Af,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,Hh.init.apply(this),this.forward=Hh.forward,this.inverse=Hh.inverse}var Kh={init:Gh,names:[`Universal Transverse Mercator System`,`utm`],dependsOn:Wh};function qh(e,t){return((1-e)/(1+e))**t}var Jh=20;function Yh(){var e=Math.sin(this.lat0),t=Math.cos(this.lat0);t*=t,this.rc=Math.sqrt(1-this.es)/(1-this.es*e*e),this.C=Math.sqrt(1+this.es*t*t/(1-this.es)),this.phic0=Math.asin(e/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+Mf)/(Math.tan(.5*this.lat0+Mf)**+this.C*qh(this.e*e,this.ratexp))}function Xh(e){var t=e.x,n=e.y;return e.y=2*Math.atan(this.K*Math.tan(.5*n+Mf)**+this.C*qh(this.e*Math.sin(n),this.ratexp))-V,e.x=this.C*t,e}function Zh(e){for(var t=1e-14,n=e.x/this.C,r=e.y,i=(Math.tan(.5*r+Mf)/this.K)**(1/this.C),a=Jh;a>0&&(r=2*Math.atan(i*qh(this.e*Math.sin(e.y),-.5*this.e))-V,!(Math.abs(r-e.y)<t));--a)e.y=r;return a?(e.x=n,e.y=r,e):null}var Qh={init:Yh,forward:Xh,inverse:Zh,names:[`gauss`]};function $h(){Qh.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title=`Oblique Stereographic Alternative`))}function eg(e){var t,n,r,i;return e.x=H(e.x-this.long0,this.over),Qh.forward.apply(this,[e]),t=Math.sin(e.y),n=Math.cos(e.y),r=Math.cos(e.x),i=this.k0*this.R2/(1+this.sinc0*t+this.cosc0*n*r),e.x=i*n*Math.sin(e.x),e.y=i*(this.cosc0*t-this.sinc0*n*r),e.x=this.a*e.x+this.x0,e.y=this.a*e.y+this.y0,e}function tg(e){var t,n,r,i,a;if(e.x=(e.x-this.x0)/this.a,e.y=(e.y-this.y0)/this.a,e.x/=this.k0,e.y/=this.k0,a=Mh(e.x,e.y)){var o=2*Math.atan2(a,this.R2);t=Math.sin(o),n=Math.cos(o),i=Math.asin(n*this.sinc0+e.y*t*this.cosc0/a),r=Math.atan2(e.x*t,a*this.cosc0*n-e.y*this.sinc0*t)}else i=this.phic0,r=0;return e.x=r,e.y=i,Qh.inverse.apply(this,[e]),e.x=H(e.x+this.long0,this.over),e}var ng={init:$h,forward:eg,inverse:tg,names:[`Stereographic_North_Pole`,`Oblique_Stereographic`,`sterea`,`Oblique Stereographic Alternative`,`Double_Stereographic`]};function rg(e,t,n){return t*=n,Math.tan(.5*(V+e))*((1-t)/(1+t))**(.5*n)}function ig(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=1e-10&&(this.k0=.5*(1+Op(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=1e-10&&(this.con=this.lat0>0?1:-1),this.cons=Math.sqrt((1+this.e)**+(1+this.e)*(1-this.e)**(1-this.e)),!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=1e-10&&Math.abs(Math.cos(this.lat_ts))>1e-10&&(this.k0=.5*this.cons*Dp(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/kp(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=Dp(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(rg(this.lat0,this.sinlat0,this.e))-V,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function ag(e){var t=e.x,n=e.y,r=Math.sin(n),i=Math.cos(n),a,o,s,c,l,u,d=H(t-this.long0,this.over);return Math.abs(Math.abs(t-this.long0)-Math.PI)<=1e-10&&Math.abs(n+this.lat0)<=1e-10?(e.x=NaN,e.y=NaN,e):this.sphere?(a=2*this.k0/(1+this.sinlat0*r+this.coslat0*i*Math.cos(d)),e.x=this.a*a*i*Math.sin(d)+this.x0,e.y=this.a*a*(this.coslat0*r-this.sinlat0*i*Math.cos(d))+this.y0,e):(o=2*Math.atan(rg(n,r,this.e))-V,c=Math.cos(o),s=Math.sin(o),Math.abs(this.coslat0)<=1e-10?(l=kp(this.e,n*this.con,this.con*r),u=2*this.a*this.k0*l/this.cons,e.x=this.x0+u*Math.sin(t-this.long0),e.y=this.y0-this.con*u*Math.cos(t-this.long0),e):(Math.abs(this.sinlat0)<1e-10?(a=2*this.a*this.k0/(1+c*Math.cos(d)),e.y=a*s):(a=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*s+this.cosX0*c*Math.cos(d))),e.y=a*(this.cosX0*s-this.sinX0*c*Math.cos(d))+this.y0),e.x=a*c*Math.sin(d)+this.x0,e))}function og(e){e.x-=this.x0,e.y-=this.y0;var t,n,r,i,a,o=Math.sqrt(e.x*e.x+e.y*e.y);if(this.sphere){var s=2*Math.atan(o/(2*this.a*this.k0));return t=this.long0,n=this.lat0,o<=1e-10?(e.x=t,e.y=n,e):(n=Math.asin(Math.cos(s)*this.sinlat0+e.y*Math.sin(s)*this.coslat0/o),t=Math.abs(this.coslat0)<1e-10?this.lat0>0?H(this.long0+Math.atan2(e.x,-1*e.y),this.over):H(this.long0+Math.atan2(e.x,e.y),this.over):H(this.long0+Math.atan2(e.x*Math.sin(s),o*this.coslat0*Math.cos(s)-e.y*this.sinlat0*Math.sin(s)),this.over),e.x=t,e.y=n,e)}if(Math.abs(this.coslat0)<=1e-10){if(o<=1e-10)return n=this.lat0,t=this.long0,e.x=t,e.y=n,e;e.x*=this.con,e.y*=this.con,r=o*this.cons/(2*this.a*this.k0),n=this.con*Ap(this.e,r),t=this.con*H(this.con*this.long0+Math.atan2(e.x,-1*e.y),this.over)}else i=2*Math.atan(o*this.cosX0/(2*this.a*this.k0*this.ms1)),t=this.long0,o<=1e-10?a=this.X0:(a=Math.asin(Math.cos(i)*this.sinX0+e.y*Math.sin(i)*this.cosX0/o),t=H(this.long0+Math.atan2(e.x*Math.sin(i),o*this.cosX0*Math.cos(i)-e.y*this.sinX0*Math.sin(i)),this.over)),n=-1*Ap(this.e,Math.tan(.5*(V+a)));return e.x=t,e.y=n,e}var sg={init:ig,forward:ag,inverse:og,names:[`stere`,`Stereographic_South_Pole`,`Polar_Stereographic_variant_A`,`Polar_Stereographic_variant_B`,`Polar_Stereographic`],ssfn_:rg};function cg(){this.k0||(this.k0=1);var e=this.lat0;this.lambda0=this.long0;var t=Math.sin(e),n=this.a,r=1/this.rf,i=2*r-r**2,a=this.e=Math.sqrt(i);this.R=this.k0*n*Math.sqrt(1-i)/(1-i*t**2),this.alpha=Math.sqrt(1+i/(1-i)*Math.cos(e)**4),this.b0=Math.asin(t/this.alpha);var o=Math.log(Math.tan(Math.PI/4+this.b0/2)),s=Math.log(Math.tan(Math.PI/4+e/2)),c=Math.log((1+a*t)/(1-a*t));this.K=o-this.alpha*s+this.alpha*a/2*c}function lg(e){var t=Math.log(Math.tan(Math.PI/4-e.y/2)),n=this.e/2*Math.log((1+this.e*Math.sin(e.y))/(1-this.e*Math.sin(e.y))),r=-this.alpha*(t+n)+this.K,i=2*(Math.atan(Math.exp(r))-Math.PI/4),a=this.alpha*(e.x-this.lambda0),o=Math.atan(Math.sin(a)/(Math.sin(this.b0)*Math.tan(i)+Math.cos(this.b0)*Math.cos(a))),s=Math.asin(Math.cos(this.b0)*Math.sin(i)-Math.sin(this.b0)*Math.cos(i)*Math.cos(a));return e.y=this.R/2*Math.log((1+Math.sin(s))/(1-Math.sin(s)))+this.y0,e.x=this.R*o+this.x0,e}function ug(e){for(var t=e.x-this.x0,n=e.y-this.y0,r=t/this.R,i=2*(Math.atan(Math.exp(n/this.R))-Math.PI/4),a=Math.asin(Math.cos(this.b0)*Math.sin(i)+Math.sin(this.b0)*Math.cos(i)*Math.cos(r)),o=Math.atan(Math.sin(r)/(Math.cos(this.b0)*Math.cos(r)-Math.sin(this.b0)*Math.tan(i))),s=this.lambda0+o/this.alpha,c=0,l=a,u=-1e3,d=0;Math.abs(l-u)>1e-7;){if(++d>20)return;c=1/this.alpha*(Math.log(Math.tan(Math.PI/4+a/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(l))/2)),u=l,l=2*Math.atan(Math.exp(c))-Math.PI/2}return e.x=s,e.y=l,e}var dg={init:cg,forward:lg,inverse:ug,names:[`somerc`]},fg=1e-7;function pg(e){var t=[`Hotine_Oblique_Mercator`,`Hotine_Oblique_Mercator_variant_A`,`Hotine_Oblique_Mercator_Azimuth_Natural_Origin`],n=typeof e.projName==`object`?Object.keys(e.projName)[0]:e.projName;return`no_uoff`in e||`no_off`in e||t.indexOf(n)!==-1||t.indexOf(Hp(n))!==-1}function mg(){var e,t,n,r,i,a,o,s,c,l,u=0,d,f=0,p=0,m=0,h=0,g=0,_=0;this.k0||(this.k0=1),this.no_off=pg(this),this.no_rot=`no_rot`in this;var v=!1;`alpha`in this&&(v=!0);var y=!1;if(`rectified_grid_angle`in this&&(y=!0),v&&(_=this.alpha),y&&(u=this.rectified_grid_angle,v||(_=0,v=!0)),v||y)f=this.longc;else if(p=this.long1,h=this.lat1,m=this.long2,g=this.lat2,Math.abs(h-g)<=fg||(e=Math.abs(h))<=fg||Math.abs(e-V)<=fg||Math.abs(Math.abs(this.lat0)-V)<=fg||Math.abs(Math.abs(g)-V)<=fg)throw Error();var b=1-this.es;t=Math.sqrt(b),Math.abs(this.lat0)>1e-10?(s=Math.sin(this.lat0),n=Math.cos(this.lat0),e=1-this.es*s*s,this.B=n*n,this.B=Math.sqrt(1+this.es*this.B*this.B/b),this.A=this.B*this.k0*t/e,r=this.B*t/(n*Math.sqrt(e)),i=r*r-1,i<=0?i=0:(i=Math.sqrt(i),this.lat0<0&&(i=-i)),this.E=i+=r,this.E*=kp(this.e,this.lat0,s)**+this.B):(this.B=1/t,this.A=this.k0,this.E=r=i=1),v||y?(v?(d=Math.asin(Math.sin(_)/r),y||(u=_)):(d=u,_=Math.asin(r*Math.sin(d))),this.lam0=f-Math.asin(.5*(i-1/i)*Math.tan(d))/this.B):(a=kp(this.e,h,Math.sin(h))**+this.B,o=kp(this.e,g,Math.sin(g))**+this.B,i=this.E/a,c=(o-a)/(o+a),l=this.E*this.E,l=(l-o*a)/(l+o*a),e=p-m,e<-Math.PI?m-=Nf:e>Math.PI&&(m+=Nf),this.lam0=H(.5*(p+m)-Math.atan(l*Math.tan(.5*this.B*(p-m))/c)/this.B,this.over),d=Math.atan(2*Math.sin(this.B*H(p-this.lam0,this.over))/(i-1/i)),u=_=Math.asin(r*Math.sin(d))),this.singam=Math.sin(d),this.cosgam=Math.cos(d),this.sinrot=Math.sin(u),this.cosrot=Math.cos(u),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(r*r-1)/Math.cos(_))),this.lat0<0&&(this.u_0=-this.u_0)),i=.5*d,this.v_pole_n=this.ArB*Math.log(Math.tan(Mf-i)),this.v_pole_s=this.ArB*Math.log(Math.tan(Mf+i))}function hg(e){var t={},n,r,i,a,o,s,c,l;if(e.x-=this.lam0,Math.abs(Math.abs(e.y)-V)>1e-10){if(o=this.E/kp(this.e,e.y,Math.sin(e.y))**+this.B,s=1/o,n=.5*(o-s),r=.5*(o+s),a=Math.sin(this.B*e.x),i=(n*this.singam-a*this.cosgam)/r,Math.abs(Math.abs(i)-1)<1e-10)throw Error();l=.5*this.ArB*Math.log((1-i)/(1+i)),s=Math.cos(this.B*e.x),c=Math.abs(s)<fg?this.A*e.x:this.ArB*Math.atan2(n*this.cosgam+a*this.singam,s)}else l=e.y>0?this.v_pole_n:this.v_pole_s,c=this.ArB*e.y;return this.no_rot?(t.x=c,t.y=l):(c-=this.u_0,t.x=l*this.cosrot+c*this.sinrot,t.y=c*this.cosrot-l*this.sinrot),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,e.z!==void 0&&(t.z=e.z),e.m!==void 0&&(t.m=e.m),t}function gg(e){var t,n,r,i,a,o,s,c={};if(e.x=(e.x-this.x0)*(1/this.a),e.y=(e.y-this.y0)*(1/this.a),this.no_rot?(n=e.y,t=e.x):(n=e.x*this.cosrot-e.y*this.sinrot,t=e.y*this.cosrot+e.x*this.sinrot+this.u_0),r=Math.exp(-this.BrA*n),i=.5*(r-1/r),a=.5*(r+1/r),o=Math.sin(this.BrA*t),s=(o*this.cosgam+i*this.singam)/a,Math.abs(Math.abs(s)-1)<1e-10)c.x=0,c.y=s<0?-V:V;else{if(c.y=this.E/Math.sqrt((1+s)/(1-s)),c.y=Ap(this.e,c.y**(1/this.B)),c.y===1/0)throw Error();c.x=-this.rB*Math.atan2(i*this.cosgam-o*this.singam,Math.cos(this.BrA*t))}return c.x+=this.lam0,e.z!==void 0&&(c.z=e.z),e.m!==void 0&&(c.m=e.m),c}var _g={init:mg,forward:hg,inverse:gg,names:[`Hotine_Oblique_Mercator`,`Hotine Oblique Mercator`,`Hotine_Oblique_Mercator_variant_A`,`Hotine_Oblique_Mercator_Variant_B`,`Hotine_Oblique_Mercator_Azimuth_Natural_Origin`,`Hotine_Oblique_Mercator_Two_Point_Natural_Origin`,`Hotine_Oblique_Mercator_Azimuth_Center`,`Oblique_Mercator`,`omerc`]};function vg(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,!(Math.abs(this.lat1+this.lat2)<1e-10)){var e=this.b/this.a;this.e=Math.sqrt(1-e*e);var t=Math.sin(this.lat1),n=Math.cos(this.lat1),r=Dp(this.e,t,n),i=kp(this.e,this.lat1,t),a=Math.sin(this.lat2),o=Math.cos(this.lat2),s=Dp(this.e,a,o),c=kp(this.e,this.lat2,a),l=kp(this.e,this.lat0,Math.sin(this.lat0));this.ns=Math.abs(this.lat1-this.lat2)>1e-10?Math.log(r/s)/Math.log(i/c):t,isNaN(this.ns)&&(this.ns=t),this.f0=r/(this.ns*i**+this.ns),this.rh=Math.abs(Math.abs(this.lat0)-V)<1e-10?0:this.a*this.f0*l**+this.ns,this.title||(this.title=`Lambert Conformal Conic`)}}function yg(e){var t=e.x,n=e.y;Math.abs(2*Math.abs(n)-Math.PI)<=1e-10&&(n=Op(n)*(V-2*kf));var r=Math.abs(Math.abs(n)-V),i,a;if(r>1e-10)i=kp(this.e,n,Math.sin(n)),a=this.a*this.f0*i**+this.ns;else{if(r=n*this.ns,r<=0)return null;a=0}var o=this.ns*H(t-this.long0,this.over);return e.x=this.k0*(a*Math.sin(o))+this.x0,e.y=this.k0*(this.rh-a*Math.cos(o))+this.y0,e}function bg(e){var t,n,r,i,a,o=(e.x-this.x0)/this.k0,s=this.rh-(e.y-this.y0)/this.k0;this.ns>0?(t=Math.sqrt(o*o+s*s),n=1):(t=-Math.sqrt(o*o+s*s),n=-1);var c=0;if(t!==0&&(c=Math.atan2(n*o,n*s)),t!==0||this.ns>0){if(n=1/this.ns,r=(t/(this.a*this.f0))**+n,i=Ap(this.e,r),i===-9999)return null}else i=-V;return a=H(c/this.ns+this.long0,this.over),e.x=a,e.y=i,e}var xg={init:vg,forward:yg,inverse:bg,names:[`Lambert Tangential Conformal Conic Projection`,`Lambert_Conformal_Conic`,`Lambert_Conformal_Conic_1SP`,`Lambert_Conformal_Conic_2SP`,`lcc`,`Lambert Conic Conformal (1SP)`,`Lambert Conic Conformal (2SP)`]};function Sg(){this.a=6377397.155,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.4334234309119251),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.cos(this.fi0)**4/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)))**(this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.tan(this.fi0/2+this.s45)**+this.alfa*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.sin(this.fi0)**2),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function Cg(e){var t,n,r,i,a,o,s,c=e.x,l=e.y,u=H(c-this.long0,this.over);return t=((1+this.e*Math.sin(l))/(1-this.e*Math.sin(l)))**(this.alfa*this.e/2),n=2*(Math.atan(this.k*Math.tan(l/2+this.s45)**+this.alfa/t)-this.s45),r=-u*this.alfa,i=Math.asin(Math.cos(this.ad)*Math.sin(n)+Math.sin(this.ad)*Math.cos(n)*Math.cos(r)),a=Math.asin(Math.cos(n)*Math.sin(r)/Math.cos(i)),o=this.n*a,s=this.ro0*Math.tan(this.s0/2+this.s45)**+this.n/Math.tan(i/2+this.s45)**+this.n,e.y=s*Math.cos(o)/1,e.x=s*Math.sin(o)/1,this.czech||(e.y*=-1,e.x*=-1),e}function wg(e){var t,n,r,i,a,o,s,c,l=e.x;e.x=e.y,e.y=l,this.czech||(e.y*=-1,e.x*=-1),o=Math.sqrt(e.x*e.x+e.y*e.y),a=Math.atan2(e.y,e.x),i=a/Math.sin(this.s0),r=2*(Math.atan((this.ro0/o)**(1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),t=Math.asin(Math.cos(this.ad)*Math.sin(r)-Math.sin(this.ad)*Math.cos(r)*Math.cos(i)),n=Math.asin(Math.cos(r)*Math.sin(i)/Math.cos(t)),e.x=this.long0-n/this.alfa,s=t,c=0;var u=0;do e.y=2*(Math.atan(this.k**(-1/this.alfa)*Math.tan(t/2+this.s45)**(1/this.alfa)*((1+this.e*Math.sin(s))/(1-this.e*Math.sin(s)))**(this.e/2))-this.s45),Math.abs(s-e.y)<1e-10&&(c=1),s=e.y,u+=1;while(c===0&&u<15);return u>=15?null:e}var Tg={init:Sg,forward:Cg,inverse:wg,names:[`Krovak`,`Krovak Modified`,`Krovak (North Orientated)`,`Krovak Modified (North Orientated)`,`krovak`]};function Eg(e,t,n,r,i){return e*i-t*Math.sin(2*i)+n*Math.sin(4*i)-r*Math.sin(6*i)}function Dg(e){return 1-.25*e*(1+e/16*(3+1.25*e))}function Og(e){return .375*e*(1+.25*e*(1+.46875*e))}function kg(e){return .05859375*e*e*(1+.75*e)}function Ag(e){return e*e*e*(35/3072)}function jg(e,t,n){var r=t*n;return e/Math.sqrt(1-r*r)}function Mg(e){return Math.abs(e)<V?e:e-Op(e)*Math.PI}function Ng(e,t,n,r,i){for(var a=e/t,o,s=0;s<15;s++)if(o=(e-(t*a-n*Math.sin(2*a)+r*Math.sin(4*a)-i*Math.sin(6*a)))/(t-2*n*Math.cos(2*a)+4*r*Math.cos(4*a)-6*i*Math.cos(6*a)),a+=o,Math.abs(o)<=1e-10)return a;return NaN}function Pg(){this.sphere||(this.e0=Dg(this.es),this.e1=Og(this.es),this.e2=kg(this.es),this.e3=Ag(this.es),this.ml0=this.a*Eg(this.e0,this.e1,this.e2,this.e3,this.lat0))}function Fg(e){var t,n,r=e.x,i=e.y;if(r=H(r-this.long0,this.over),this.sphere)t=this.a*Math.asin(Math.cos(i)*Math.sin(r)),n=this.a*(Math.atan2(Math.tan(i),Math.cos(r))-this.lat0);else{var a=Math.sin(i),o=Math.cos(i),s=jg(this.a,this.e,a),c=Math.tan(i)*Math.tan(i),l=r*Math.cos(i),u=l*l,d=this.es*o*o/(1-this.es),f=this.a*Eg(this.e0,this.e1,this.e2,this.e3,i);t=s*l*(1-u*c*(1/6-(8-c+8*d)*u/120)),n=f-this.ml0+s*a/o*u*(.5+(5-c+6*d)*u/24)}return e.x=t+this.x0,e.y=n+this.y0,e}function Ig(e){e.x-=this.x0,e.y-=this.y0;var t=e.x/this.a,n=e.y/this.a,r,i;if(this.sphere){var a=n+this.lat0;r=Math.asin(Math.sin(a)*Math.cos(t)),i=Math.atan2(Math.tan(t),Math.cos(a))}else{var o=Ng(this.ml0/this.a+n,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(o)-V)<=1e-10)return e.x=this.long0,e.y=V,n<0&&(e.y*=-1),e;var s=jg(this.a,this.e,Math.sin(o)),c=s*s*s/this.a/this.a*(1-this.es),l=Math.tan(o)**2,u=t*this.a/s,d=u*u;r=o-s*Math.tan(o)/c*u*u*(.5-(1+3*l)*u*u/24),i=u*(1-d*(l/3+(1+3*l)*l*d/15))/Math.cos(o)}return e.x=H(i+this.long0,this.over),e.y=Mg(r),e}var Lg={init:Pg,forward:Fg,inverse:Ig,names:[`Cassini`,`Cassini_Soldner`,`cass`]};function Rg(e,t){var n;return e>1e-7?(n=e*t,(1-e*e)*(t/(1-n*n)-.5/e*Math.log((1-n)/(1+n)))):2*t}var zg=.3333333333333333,Bg=.17222222222222222,Vg=.10257936507936508,Hg=.06388888888888888,Ug=.0664021164021164,Wg=.016415012942191543;function Gg(e){var t,n=[];return n[0]=e*zg,t=e*e,n[0]+=t*Bg,n[1]=t*Hg,t*=e,n[0]+=t*Vg,n[1]+=t*Ug,n[2]=t*Wg,n}function Kg(e,t){var n=e+e;return e+t[0]*Math.sin(n)+t[1]*Math.sin(n+n)+t[2]*Math.sin(n+n+n)}function qg(){var e=Math.abs(this.lat0);if(this.mode=Math.abs(e-V)<1e-10?this.lat0<0?1:2:Math.abs(e)<1e-10?3:4,this.es>0){var t;switch(this.qp=Rg(this.e,1),this.mmf=.5/(1-this.es),this.apa=Gg(this.es),this.mode){case 2:this.dd=1;break;case 1:this.dd=1;break;case 3:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case 4:this.rq=Math.sqrt(.5*this.qp),t=Math.sin(this.lat0),this.sinb1=Rg(this.e,t)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*t*t)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd}}else this.mode===4&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function Jg(e){var t,n,r,i,a,o,s,c,l,u,d=e.x,f=e.y;if(d=H(d-this.long0,this.over),this.sphere){if(a=Math.sin(f),u=Math.cos(f),r=Math.cos(d),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(n=this.mode===this.EQUIT?1+u*r:1+this.sinph0*a+this.cosph0*u*r,n<=1e-10)return null;n=Math.sqrt(2/n),t=n*u*Math.sin(d),n*=this.mode===this.EQUIT?a:this.cosph0*a-this.sinph0*u*r}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(r=-r),Math.abs(f+this.lat0)<1e-10)return null;n=Mf-f*.5,n=2*(this.mode===this.S_POLE?Math.cos(n):Math.sin(n)),t=n*Math.sin(d),n*=r}}else{switch(s=0,c=0,l=0,r=Math.cos(d),i=Math.sin(d),a=Math.sin(f),o=Rg(this.e,a),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(s=o/this.qp,c=Math.sqrt(1-s*s)),this.mode){case this.OBLIQ:l=1+this.sinb1*s+this.cosb1*c*r;break;case this.EQUIT:l=1+c*r;break;case this.N_POLE:l=V+f,o=this.qp-o;break;case this.S_POLE:l=f-V,o=this.qp+o}if(Math.abs(l)<1e-10)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:l=Math.sqrt(2/l),n=this.mode===this.OBLIQ?this.ymf*l*(this.cosb1*s-this.sinb1*c*r):(l=Math.sqrt(2/(1+c*r)))*s*this.ymf,t=this.xmf*l*c*i;break;case this.N_POLE:case this.S_POLE:o>=0?(t=(l=Math.sqrt(o))*i,n=r*(this.mode===this.S_POLE?l:-l)):t=n=0}}return e.x=this.a*t+this.x0,e.y=this.a*n+this.y0,e}function Yg(e){e.x-=this.x0,e.y-=this.y0;var t=e.x/this.a,n=e.y/this.a,r,i,a,o,s,c,l;if(this.sphere){var u=0,d,f=0;if(d=Math.sqrt(t*t+n*n),i=d*.5,i>1)return null;switch(i=2*Math.asin(i),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(f=Math.sin(i),u=Math.cos(i)),this.mode){case this.EQUIT:i=Math.abs(d)<=1e-10?0:Math.asin(n*f/d),t*=f,n=u*d;break;case this.OBLIQ:i=Math.abs(d)<=1e-10?this.lat0:Math.asin(u*this.sinph0+n*f*this.cosph0/d),t*=f*this.cosph0,n=(u-Math.sin(i)*this.sinph0)*d;break;case this.N_POLE:n=-n,i=V-i;break;case this.S_POLE:i-=V}r=n===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(t,n)}else{if(l=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(t/=this.dd,n*=this.dd,c=Math.sqrt(t*t+n*n),c<1e-10)return e.x=this.long0,e.y=this.lat0,e;o=2*Math.asin(.5*c/this.rq),a=Math.cos(o),t*=o=Math.sin(o),this.mode===this.OBLIQ?(l=a*this.sinb1+n*o*this.cosb1/c,s=this.qp*l,n=c*this.cosb1*a-n*this.sinb1*o):(l=n*o/c,s=this.qp*l,n=c*a)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(n=-n),s=t*t+n*n,!s)return e.x=this.long0,e.y=this.lat0,e;l=1-s/this.qp,this.mode===this.S_POLE&&(l=-l)}r=Math.atan2(t,n),i=Kg(Math.asin(l),this.apa)}return e.x=H(this.long0+r,this.over),e.y=i,e}var Xg={init:qg,forward:Jg,inverse:Yg,names:[`Lambert Azimuthal Equal Area`,`Lambert_Azimuthal_Equal_Area`,`laea`],S_POLE:1,N_POLE:2,EQUIT:3,OBLIQ:4};function Zg(e){return Math.abs(e)>1&&(e=e>1?1:-1),Math.asin(e)}function Qg(){Math.abs(this.lat1+this.lat2)<1e-10||(this.temp=this.b/this.a,this.es=1-this.temp**2,this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=Dp(this.e3,this.sin_po,this.cos_po),this.qs1=Rg(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=Dp(this.e3,this.sin_po,this.cos_po),this.qs2=Rg(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=Rg(this.e3,this.sin_po),this.ns0=Math.abs(this.lat1-this.lat2)>1e-10?(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function $g(e){var t=e.x,n=e.y;this.sin_phi=Math.sin(n),this.cos_phi=Math.cos(n);var r=Rg(this.e3,this.sin_phi),i=this.a*Math.sqrt(this.c-this.ns0*r)/this.ns0,a=this.ns0*H(t-this.long0,this.over),o=i*Math.sin(a)+this.x0,s=this.rh-i*Math.cos(a)+this.y0;return e.x=o,e.y=s,e}function e_(e){var t,n,r,i,a,o;return e.x-=this.x0,e.y=this.rh-e.y+this.y0,this.ns0>=0?(t=Math.sqrt(e.x*e.x+e.y*e.y),r=1):(t=-Math.sqrt(e.x*e.x+e.y*e.y),r=-1),i=0,t!==0&&(i=Math.atan2(r*e.x,r*e.y)),r=t*this.ns0/this.a,this.sphere?o=Math.asin((this.c-r*r)/(2*this.ns0)):(n=(this.c-r*r)/this.ns0,o=this.phi1z(this.e3,n)),a=H(i/this.ns0+this.long0,this.over),e.x=a,e.y=o,e}function t_(e,t){var n,r,i,a,o,s=Zg(.5*t);if(e<1e-10)return s;for(var c=e*e,l=1;l<=25;l++)if(n=Math.sin(s),r=Math.cos(s),i=e*n,a=1-i*i,o=.5*a*a/r*(t/(1-c)-n/a+.5/e*Math.log((1-i)/(1+i))),s+=o,Math.abs(o)<=1e-7)return s;return null}var n_={init:Qg,forward:$g,inverse:e_,names:[`Albers_Conic_Equal_Area`,`Albers_Equal_Area`,`Albers`,`aea`],phi1z:t_};function r_(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function i_(e){var t,n,r,i,a,o,s,c,l=e.x,u=e.y;return r=H(l-this.long0,this.over),t=Math.sin(u),n=Math.cos(u),i=Math.cos(r),o=this.sin_p14*t+this.cos_p14*n*i,a=1,o>0||Math.abs(o)<=1e-10?(s=this.x0+this.a*a*n*Math.sin(r)/o,c=this.y0+this.a*a*(this.cos_p14*t-this.sin_p14*n*i)/o):(s=this.x0+this.infinity_dist*n*Math.sin(r),c=this.y0+this.infinity_dist*(this.cos_p14*t-this.sin_p14*n*i)),e.x=s,e.y=c,e}function a_(e){var t,n,r,i,a,o;return e.x=(e.x-this.x0)/this.a,e.y=(e.y-this.y0)/this.a,e.x/=this.k0,e.y/=this.k0,(t=Math.sqrt(e.x*e.x+e.y*e.y))?(i=Math.atan2(t,this.rc),n=Math.sin(i),r=Math.cos(i),o=Zg(r*this.sin_p14+e.y*n*this.cos_p14/t),a=Math.atan2(e.x*n,t*this.cos_p14*r-e.y*this.sin_p14*n),a=H(this.long0+a,this.over)):(o=this.phic0,a=0),e.x=a,e.y=o,e}var o_={init:r_,forward:i_,inverse:a_,names:[`gnom`]};function s_(e,t){var n=1-(1-e*e)/(2*e)*Math.log((1-e)/(1+e));if(Math.abs(Math.abs(t)-n)<1e-6)return t<0?-1*V:V;for(var r=Math.asin(.5*t),i,a,o,s,c=0;c<30;c++)if(a=Math.sin(r),o=Math.cos(r),s=e*a,i=(1-s*s)**2/(2*o)*(t/(1-e*e)-a/(1-s*s)+.5/e*Math.log((1-s)/(1+s))),r+=i,Math.abs(i)<=1e-10)return r;return NaN}function c_(){this.sphere||(this.k0=Dp(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function l_(e){var t=e.x,n=e.y,r,i,a=H(t-this.long0,this.over);if(this.sphere)r=this.x0+this.a*a*Math.cos(this.lat_ts),i=this.y0+this.a*Math.sin(n)/Math.cos(this.lat_ts);else{var o=Rg(this.e,Math.sin(n));r=this.x0+this.a*this.k0*a,i=this.y0+this.a*o*.5/this.k0}return e.x=r,e.y=i,e}function u_(e){e.x-=this.x0,e.y-=this.y0;var t,n;return this.sphere?(t=H(this.long0+e.x/this.a/Math.cos(this.lat_ts),this.over),n=Math.asin(e.y/this.a*Math.cos(this.lat_ts))):(n=s_(this.e,2*e.y*this.k0/this.a),t=H(this.long0+e.x/(this.a*this.k0),this.over)),e.x=t,e.y=n,e}var d_={init:c_,forward:l_,inverse:u_,names:[`cea`]};function f_(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||`Equidistant Cylindrical (Plate Carre)`,this.rc=Math.cos(this.lat_ts)}function p_(e){var t=e.x,n=e.y,r=H(t-this.long0,this.over),i=Mg(n-this.lat0);return e.x=this.x0+this.a*r*this.rc,e.y=this.y0+this.a*i,e}function m_(e){var t=e.x,n=e.y;return e.x=H(this.long0+(t-this.x0)/(this.a*this.rc),this.over),e.y=Mg(this.lat0+(n-this.y0)/this.a),e}var h_={init:f_,forward:p_,inverse:m_,names:[`Equirectangular`,`Equidistant_Cylindrical`,`Equidistant_Cylindrical_Spherical`,`eqc`]},g_=20;function __(){this.temp=this.b/this.a,this.es=1-this.temp**2,this.e=Math.sqrt(this.es),this.e0=Dg(this.es),this.e1=Og(this.es),this.e2=kg(this.es),this.e3=Ag(this.es),this.ml0=this.a*Eg(this.e0,this.e1,this.e2,this.e3,this.lat0)}function v_(e){var t=e.x,n=e.y,r,i,a,o=H(t-this.long0,this.over);if(a=o*Math.sin(n),this.sphere)Math.abs(n)<=1e-10?(r=this.a*o,i=-1*this.a*this.lat0):(r=this.a*Math.sin(a)/Math.tan(n),i=this.a*(Mg(n-this.lat0)+(1-Math.cos(a))/Math.tan(n)));else if(Math.abs(n)<=1e-10)r=this.a*o,i=-1*this.ml0;else{var s=jg(this.a,this.e,Math.sin(n))/Math.tan(n);r=s*Math.sin(a),i=this.a*Eg(this.e0,this.e1,this.e2,this.e3,n)-this.ml0+s*(1-Math.cos(a))}return e.x=r+this.x0,e.y=i+this.y0,e}function y_(e){var t,n,r=e.x-this.x0,i=e.y-this.y0,a,o,s,c,l;if(this.sphere){if(Math.abs(i+this.a*this.lat0)<=1e-10)t=H(r/this.a+this.long0,this.over),n=0;else{o=this.lat0+i/this.a,s=r*r/this.a/this.a+o*o,c=o;var u;for(a=g_;a;--a)if(u=Math.tan(c),l=-1*(o*(c*u+1)-c-.5*(c*c+s)*u)/((c-o)/u-1),c+=l,Math.abs(l)<=1e-10){n=c;break}t=H(this.long0+Math.asin(r*Math.tan(c)/this.a)/Math.sin(n),this.over)}}else if(Math.abs(i+this.ml0)<=1e-10)n=0,t=H(this.long0+r/this.a,this.over);else{o=(this.ml0+i)/this.a,s=r*r/this.a/this.a+o*o,c=o;var d,f,p,m,h;for(a=g_;a;--a)if(h=this.e*Math.sin(c),d=Math.sqrt(1-h*h)*Math.tan(c),f=this.a*Eg(this.e0,this.e1,this.e2,this.e3,c),p=this.e0-2*this.e1*Math.cos(2*c)+4*this.e2*Math.cos(4*c)-6*this.e3*Math.cos(6*c),m=f/this.a,l=(o*(d*m+1)-m-.5*d*(m*m+s))/(this.es*Math.sin(2*c)*(m*m+s-2*o*m)/(4*d)+(o-m)*(d*p-2/Math.sin(2*c))-p),c-=l,Math.abs(l)<=1e-10){n=c;break}d=Math.sqrt(1-this.es*Math.sin(n)**2)*Math.tan(n),t=H(this.long0+Math.asin(r*d/this.a)/Math.sin(n),this.over)}return e.x=t,e.y=n,e}var b_={init:__,forward:v_,inverse:y_,names:[`Polyconic`,`American_Polyconic`,`poly`]};function x_(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function S_(e){var t,n=e.x,r=e.y-this.lat0,i=n-this.long0,a=r/Tf*1e-5,o=i,s=1,c=0;for(t=1;t<=10;t++)s*=a,c+=this.A[t]*s;var l=c,u=o,d=1,f=0,p,m,h=0,g=0;for(t=1;t<=6;t++)p=d*l-f*u,m=f*l+d*u,d=p,f=m,h=h+this.B_re[t]*d-this.B_im[t]*f,g=g+this.B_im[t]*d+this.B_re[t]*f;return e.x=g*this.a+this.x0,e.y=h*this.a+this.y0,e}function C_(e){var t,n=e.x,r=e.y,i=n-this.x0,a=(r-this.y0)/this.a,o=i/this.a,s=1,c=0,l,u,d=0,f=0;for(t=1;t<=6;t++)l=s*a-c*o,u=c*a+s*o,s=l,c=u,d=d+this.C_re[t]*s-this.C_im[t]*c,f=f+this.C_im[t]*s+this.C_re[t]*c;for(var p=0;p<this.iterations;p++){var m=d,h=f,g,_,v=a,y=o;for(t=2;t<=6;t++)g=m*d-h*f,_=h*d+m*f,m=g,h=_,v+=(t-1)*(this.B_re[t]*m-this.B_im[t]*h),y+=(t-1)*(this.B_im[t]*m+this.B_re[t]*h);m=1,h=0;var b=this.B_re[1],x=this.B_im[1];for(t=2;t<=6;t++)g=m*d-h*f,_=h*d+m*f,m=g,h=_,b+=t*(this.B_re[t]*m-this.B_im[t]*h),x+=t*(this.B_im[t]*m+this.B_re[t]*h);var S=b*b+x*x;d=(v*b+y*x)/S,f=(y*b-v*x)/S}var C=d,w=f,T=1,E=0;for(t=1;t<=9;t++)T*=C,E+=this.D[t]*T;var D=this.lat0+E*Tf*1e5;return e.x=this.long0+w,e.y=D,e}var w_={init:x_,forward:S_,inverse:C_,names:[`New_Zealand_Map_Grid`,`nzmg`],iterations:1};function T_(){}function E_(e){var t=e.x,n=e.y,r=H(t-this.long0,this.over),i=this.x0+this.a*r,a=this.y0+this.a*Math.log(Math.tan(Math.PI/4+n/2.5))*1.25;return e.x=i,e.y=a,e}function D_(e){e.x-=this.x0,e.y-=this.y0;var t=H(this.long0+e.x/this.a,this.over),n=2.5*(Math.atan(Math.exp(.8*e.y/this.a))-Math.PI/4);return e.x=t,e.y=n,e}var O_={init:T_,forward:E_,inverse:D_,names:[`Miller_Cylindrical`,`mill`]},k_=20;function A_(){this.long0=this.long0||0,this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=Ch(this.es)}function j_(e){var t,n,r=e.x,i=e.y;if(r=H(r-this.long0,this.over),this.sphere){if(!this.m)i=this.n===1?i:Math.asin(this.n*Math.sin(i));else for(var a=this.n*Math.sin(i),o=k_;o;--o){var s=(this.m*i+Math.sin(i)-a)/(this.m+Math.cos(i));if(i-=s,Math.abs(s)<1e-10)break}t=this.a*this.C_x*r*(this.m+Math.cos(i)),n=this.a*this.C_y*i}else{var c=Math.sin(i),l=Math.cos(i);n=this.a*wh(i,c,l,this.en),t=this.a*r*l/Math.sqrt(1-this.es*c*c)}return e.x=t,e.y=n,e}function M_(e){var t,n,r,i;return e.x-=this.x0,r=e.x/this.a,e.y-=this.y0,t=e.y/this.a,this.sphere?(t/=this.C_y,r/=this.C_x*(this.m+Math.cos(t)),this.m?t=Zg((this.m*t+Math.sin(t))/this.n):this.n!==1&&(t=Zg(Math.sin(t)/this.n)),r=H(r+this.long0,this.over),t=Mg(t)):(t=Eh(e.y/this.a,this.es,this.en),i=Math.abs(t),i<V?(i=Math.sin(t),n=this.long0+e.x*Math.sqrt(1-this.es*i*i)/(this.a*Math.cos(t)),r=H(n,this.over)):i-1e-10<V&&(r=this.long0)),e.x=r,e.y=t,e}var N_={init:A_,forward:j_,inverse:M_,names:[`Sinusoidal`,`sinu`]};function P_(){this.sphere=!0,this.b=this.a,this.m=1,this.n=2.5707963267948966,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)}var F_={init:P_,forward:j_,inverse:M_,names:[`Eckert_VI`,`eck6`]};function I_(){this.x0=this.x0===void 0?0:this.x0,this.y0=this.y0===void 0?0:this.y0,this.long0=this.long0===void 0?0:this.long0}function L_(e){for(var t=e.x,n=e.y,r=H(t-this.long0,this.over),i=n,a=Math.PI*Math.sin(n);;){var o=-(i+Math.sin(i)-a)/(1+Math.cos(i));if(i+=o,Math.abs(o)<1e-10)break}i/=2,Math.PI/2-Math.abs(n)<1e-10&&(r=0);var s=.900316316158*this.a*r*Math.cos(i)+this.x0,c=1.4142135623731*this.a*Math.sin(i)+this.y0;return e.x=s,e.y=c,e}function R_(e){var t,n;e.x-=this.x0,e.y-=this.y0,n=e.y/(1.4142135623731*this.a),Math.abs(n)>.999999999999&&(n=.999999999999),t=Math.asin(n);var r=H(this.long0+e.x/(.900316316158*this.a*Math.cos(t)),this.over);r<-Math.PI&&(r=-Math.PI),r>Math.PI&&(r=Math.PI),n=(2*t+Math.sin(2*t))/Math.PI,Math.abs(n)>1&&(n=1);var i=Math.asin(n);return e.x=r,e.y=i,e}var z_={init:I_,forward:L_,inverse:R_,names:[`Mollweide`,`moll`]};function B_(){Math.abs(this.lat1+this.lat2)<1e-10||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-this.temp**2,this.e=Math.sqrt(this.es),this.e0=Dg(this.es),this.e1=Og(this.es),this.e2=kg(this.es),this.e3=Ag(this.es),this.sin_phi=Math.sin(this.lat1),this.cos_phi=Math.cos(this.lat1),this.ms1=Dp(this.e,this.sin_phi,this.cos_phi),this.ml1=Eg(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<1e-10?this.ns=this.sin_phi:(this.sin_phi=Math.sin(this.lat2),this.cos_phi=Math.cos(this.lat2),this.ms2=Dp(this.e,this.sin_phi,this.cos_phi),this.ml2=Eg(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=Eg(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function V_(e){var t=e.x,n=e.y,r;if(this.sphere)r=this.a*(this.g-n);else{var i=Eg(this.e0,this.e1,this.e2,this.e3,n);r=this.a*(this.g-i)}var a=this.ns*H(t-this.long0,this.over),o=this.x0+r*Math.sin(a),s=this.y0+this.rh-r*Math.cos(a);return e.x=o,e.y=s,e}function H_(e){e.x-=this.x0,e.y=this.rh-e.y+this.y0;var t,n,r,i;this.ns>=0?(n=Math.sqrt(e.x*e.x+e.y*e.y),t=1):(n=-Math.sqrt(e.x*e.x+e.y*e.y),t=-1);var a=0;return n!==0&&(a=Math.atan2(t*e.x,t*e.y)),this.sphere?(i=H(this.long0+a/this.ns,this.over),r=Mg(this.g-n/this.a),e.x=i,e.y=r,e):(r=Ng(this.g-n/this.a,this.e0,this.e1,this.e2,this.e3),i=H(this.long0+a/this.ns,this.over),e.x=i,e.y=r,e)}var U_={init:B_,forward:V_,inverse:H_,names:[`Equidistant_Conic`,`eqdc`]};function W_(){this.R=this.a}function G_(e){var t=e.x,n=e.y,r=H(t-this.long0,this.over),i,a;if(Math.abs(n)<=1e-10)return i=this.x0+this.R*r,a=this.y0,e.x=i,e.y=a,e;var o=Zg(2*Math.abs(n/Math.PI));if(Math.abs(r)<=1e-10||Math.abs(Math.abs(n)-V)<=1e-10)return i=this.x0,a=n>=0?this.y0+Math.PI*this.R*Math.tan(.5*o):this.y0+Math.PI*this.R*-Math.tan(.5*o),e.x=i,e.y=a,e;var s=.5*Math.abs(Math.PI/r-r/Math.PI),c=s*s,l=Math.sin(o),u=Math.cos(o),d=u/(l+u-1),f=d*d,p=d*(2/l-1),m=p*p,h=Math.PI*this.R*(s*(d-m)+Math.sqrt(c*(d-m)*(d-m)-(m+c)*(f-m)))/(m+c);r<0&&(h=-h),i=this.x0+h;var g=c+d;return h=Math.PI*this.R*(p*g-s*Math.sqrt((m+c)*(c+1)-g*g))/(m+c),a=n>=0?this.y0+h:this.y0-h,e.x=i,e.y=a,e}function K_(e){var t,n,r,i,a,o,s,c,l,u,d,f,p;return e.x-=this.x0,e.y-=this.y0,d=Math.PI*this.R,r=e.x/d,i=e.y/d,a=r*r+i*i,o=-Math.abs(i)*(1+a),s=o-2*i*i+r*r,c=-2*o+1+2*i*i+a*a,p=i*i/c+(2*s*s*s/c/c/c-9*o*s/c/c)/27,l=(o-s*s/3/c)/c,u=2*Math.sqrt(-l/3),d=3*p/l/u,Math.abs(d)>1&&(d=d>=0?1:-1),f=Math.acos(d)/3,n=e.y>=0?(-u*Math.cos(f+Math.PI/3)-s/3/c)*Math.PI:-(-u*Math.cos(f+Math.PI/3)-s/3/c)*Math.PI,t=Math.abs(r)<1e-10?this.long0:H(this.long0+Math.PI*(a-1+Math.sqrt(1+2*(r*r-i*i)+a*a))/2/r,this.over),e.x=t,e.y=n,e}var q_={init:W_,forward:G_,inverse:K_,names:[`Van_der_Grinten_I`,`VanDerGrinten`,`Van_der_Grinten`,`vandg`]};function J_(e,t,n,r,i,a){let o=r-t,s=Math.atan((1-a)*Math.tan(e)),c=Math.atan((1-a)*Math.tan(n)),l=Math.sin(s),u=Math.cos(s),d=Math.sin(c),f=Math.cos(c),p=o,m,h=100,g,_,v,y,b,x,S,C,w,T,E,D,O,k;do{if(g=Math.sin(p),_=Math.cos(p),v=Math.sqrt(f*g*(f*g)+(u*d-l*f*_)*(u*d-l*f*_)),v===0)return{azi1:0,s12:0};y=l*d+u*f*_,b=Math.atan2(v,y),x=u*f*g/v,S=1-x*x,C=S===0?0:y-2*l*d/S,w=a/16*S*(4+a*(4-3*S)),m=p,p=o+(1-w)*a*x*(b+w*v*(C+w*y*(-1+2*C*C)))}while(Math.abs(p-m)>1e-12&&--h>0);return h===0?{azi1:NaN,s12:NaN}:(T=S*(i*i-i*(1-a)*(i*(1-a)))/(i*(1-a)*(i*(1-a))),E=1+T/16384*(4096+T*(-768+T*(320-175*T))),D=T/1024*(256+T*(-128+T*(74-47*T))),O=D*v*(C+D/4*(y*(-1+2*C*C)-D/6*C*(-3+4*v*v)*(-3+4*C*C))),k=i*(1-a)*E*(b-O),{azi1:Math.atan2(f*g,u*d-l*f*_),s12:k})}function Y_(e,t,n,r,i,a){let o=Math.atan((1-a)*Math.tan(e)),s=Math.sin(o),c=Math.cos(o),l=Math.sin(n),u=Math.cos(n),d=Math.atan2(s,c*u),f=c*l,p=1-f*f,m=p*(i*i-i*(1-a)*(i*(1-a)))/(i*(1-a)*(i*(1-a))),h=1+m/16384*(4096+m*(-768+m*(320-175*m))),g=m/1024*(256+m*(-128+m*(74-47*m))),_=r/(i*(1-a)*h),v,y=100,b,x,S,C;do b=Math.cos(2*d+_),x=Math.sin(_),S=Math.cos(_),C=g*x*(b+g/4*(S*(-1+2*b*b)-g/6*b*(-3+4*x*x)*(-3+4*b*b))),v=_,_=r/(i*(1-a)*h)+C;while(Math.abs(_-v)>1e-12&&--y>0);if(y===0)return{lat2:NaN,lon2:NaN};let w=s*x-c*S*u,T=Math.atan2(s*S+c*x*u,(1-a)*Math.sqrt(f*f+w*w)),E=Math.atan2(x*l,c*S-s*x*u),D=a/16*p*(4+a*(4-3*p));return{lat2:T,lon2:t+(E-(1-D)*a*f*(_+D*x*(b+D*S*(-1+2*b*b))))}}function X_(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0),this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.f=this.es/(1+Math.sqrt(1-this.es))}function Z_(e){var t=e.x,n=e.y,r=Math.sin(e.y),i=Math.cos(e.y),a=H(t-this.long0,this.over),o,s,c,l,u,d,f,p,m,h,g;return this.sphere?Math.abs(this.sin_p12-1)<=1e-10?(e.x=this.x0+this.a*(V-n)*Math.sin(a),e.y=this.y0-this.a*(V-n)*Math.cos(a),e):Math.abs(this.sin_p12+1)<=1e-10?(e.x=this.x0+this.a*(V+n)*Math.sin(a),e.y=this.y0+this.a*(V+n)*Math.cos(a),e):(m=this.sin_p12*r+this.cos_p12*i*Math.cos(a),f=Math.acos(m),p=f?f/Math.sin(f):1,e.x=this.x0+this.a*p*i*Math.sin(a),e.y=this.y0+this.a*p*(this.cos_p12*r-this.sin_p12*i*Math.cos(a)),e):(o=Dg(this.es),s=Og(this.es),c=kg(this.es),l=Ag(this.es),Math.abs(this.sin_p12-1)<=1e-10?(u=this.a*Eg(o,s,c,l,V),d=this.a*Eg(o,s,c,l,n),e.x=this.x0+(u-d)*Math.sin(a),e.y=this.y0-(u-d)*Math.cos(a),e):Math.abs(this.sin_p12+1)<=1e-10?(u=this.a*Eg(o,s,c,l,V),d=this.a*Eg(o,s,c,l,n),e.x=this.x0+(u+d)*Math.sin(a),e.y=this.y0+(u+d)*Math.cos(a),e):Math.abs(t)<1e-10&&Math.abs(n-this.lat0)<1e-10?(e.x=this.x0,e.y=this.y0,e):(h=J_(this.lat0,this.long0,n,t,this.a,this.f),g=h.azi1,e.x=this.x0+h.s12*Math.sin(g),e.y=this.y0+h.s12*Math.cos(g),e))}function Q_(e){e.x-=this.x0,e.y-=this.y0;var t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g;return this.sphere?(t=Math.sqrt(e.x*e.x+e.y*e.y),t>2*V*this.a?void 0:(n=t/this.a,r=Math.sin(n),i=Math.cos(n),a=this.long0,Math.abs(t)<=1e-10?o=this.lat0:(o=Zg(i*this.sin_p12+e.y*r*this.cos_p12/t),s=Math.abs(this.lat0)-V,a=Math.abs(s)<=1e-10?this.lat0>=0?H(this.long0+Math.atan2(e.x,-e.y),this.over):H(this.long0-Math.atan2(-e.x,e.y),this.over):H(this.long0+Math.atan2(e.x*r,t*this.cos_p12*i-e.y*this.sin_p12*r),this.over)),e.x=a,e.y=o,e)):(c=Dg(this.es),l=Og(this.es),u=kg(this.es),d=Ag(this.es),Math.abs(this.sin_p12-1)<=1e-10?(f=this.a*Eg(c,l,u,d,V),t=Math.sqrt(e.x*e.x+e.y*e.y),p=f-t,o=Ng(p/this.a,c,l,u,d),a=H(this.long0+Math.atan2(e.x,-1*e.y),this.over),e.x=a,e.y=o,e):Math.abs(this.sin_p12+1)<=1e-10?(f=this.a*Eg(c,l,u,d,V),t=Math.sqrt(e.x*e.x+e.y*e.y),p=t-f,o=Ng(p/this.a,c,l,u,d),a=H(this.long0+Math.atan2(e.x,e.y),this.over),e.x=a,e.y=o,e):(m=Math.atan2(e.x,e.y),h=Math.sqrt(e.x*e.x+e.y*e.y),g=Y_(this.lat0,this.long0,m,h,this.a,this.f),e.x=g.lon2,e.y=g.lat2,e))}var $_={init:X_,forward:Z_,inverse:Q_,names:[`Azimuthal_Equidistant`,`aeqd`]};function ev(){this.sin_p14=Math.sin(this.lat0||0),this.cos_p14=Math.cos(this.lat0||0)}function tv(e){var t,n,r,i,a,o,s,c,l=e.x,u=e.y;return r=H(l-(this.long0||0),this.over),t=Math.sin(u),n=Math.cos(u),i=Math.cos(r),o=this.sin_p14*t+this.cos_p14*n*i,a=1,(o>0||Math.abs(o)<=1e-10)&&(s=(this.x0||0)+this.a*a*n*Math.sin(r),c=(this.y0||0)+this.a*a*(this.cos_p14*t-this.sin_p14*n*i)),e.x=s,e.y=c,e}function nv(e){var t,n,r,i,a,o,s,c,l;return e.x-=this.x0||0,e.y-=this.y0||0,t=Math.sqrt(e.x*e.x+e.y*e.y),n=Zg(t/this.a),r=Math.sin(n),i=Math.cos(n),c=this.long0||0,l=this.lat0||0,o=c,Math.abs(t)<=1e-10?(s=l,e.x=o,e.y=s,e):(s=Zg(i*this.sin_p14+e.y*r*this.cos_p14/t),a=Math.abs(l)-V,Math.abs(a)<=1e-10?(o=H(l>=0?c+Math.atan2(e.x,-e.y):c-Math.atan2(-e.x,e.y),this.over),e.x=o,e.y=s,e):(o=H(c+Math.atan2(e.x*r,t*this.cos_p14*i-e.y*this.sin_p14*r),this.over),e.x=o,e.y=s,e))}var rv={init:ev,forward:tv,inverse:nv,names:[`ortho`]},iv={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},av={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function ov(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||`Quadrilateralized Spherical Cube`,this.face=this.lat0>=V-Mf/2?iv.TOP:this.lat0<=-(V-Mf/2)?iv.BOTTOM:Math.abs(this.long0)<=Mf?iv.FRONT:Math.abs(this.long0)<=V+Mf?this.long0>0?iv.RIGHT:iv.LEFT:iv.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function sv(e){var t={x:0,y:0},n,r,i,a,o,s,c={value:0};if(e.x-=this.long0,n=this.es===0?e.y:Math.atan(this.one_minus_f_squared*Math.tan(e.y)),r=e.x,this.face===iv.TOP)a=V-n,r>=Mf&&r<=V+Mf?(c.value=av.AREA_0,i=r-V):r>V+Mf||r<=-(V+Mf)?(c.value=av.AREA_1,i=r>0?r-Pf:r+Pf):r>-(V+Mf)&&r<=-Mf?(c.value=av.AREA_2,i=r+V):(c.value=av.AREA_3,i=r);else if(this.face===iv.BOTTOM)a=V+n,r>=Mf&&r<=V+Mf?(c.value=av.AREA_0,i=-r+V):r<Mf&&r>=-Mf?(c.value=av.AREA_1,i=-r):r<-Mf&&r>=-(V+Mf)?(c.value=av.AREA_2,i=-r-V):(c.value=av.AREA_3,i=r>0?-r+Pf:-r-Pf);else{var l,u,d,f,p,m,h;this.face===iv.RIGHT?r=uv(r,+V):this.face===iv.BACK?r=uv(r,+Pf):this.face===iv.LEFT&&(r=uv(r,-V)),f=Math.sin(n),p=Math.cos(n),m=Math.sin(r),h=Math.cos(r),l=p*h,u=p*m,d=f,this.face===iv.FRONT?(a=Math.acos(l),i=lv(a,d,u,c)):this.face===iv.RIGHT?(a=Math.acos(u),i=lv(a,d,-l,c)):this.face===iv.BACK?(a=Math.acos(-l),i=lv(a,d,-u,c)):this.face===iv.LEFT?(a=Math.acos(-u),i=lv(a,d,l,c)):(a=i=0,c.value=av.AREA_0)}return s=Math.atan(12/Pf*(i+Math.acos(Math.sin(i)*Math.cos(Mf))-V)),o=Math.sqrt((1-Math.cos(a))/(Math.cos(s)*Math.cos(s))/(1-Math.cos(Math.atan(1/Math.cos(i))))),c.value===av.AREA_1?s+=V:c.value===av.AREA_2?s+=Pf:c.value===av.AREA_3&&(s+=1.5*Pf),t.x=o*Math.cos(s),t.y=o*Math.sin(s),t.x=t.x*this.a+this.x0,t.y=t.y*this.a+this.y0,e.x=t.x,e.y=t.y,e}function cv(e){var t={lam:0,phi:0},n,r,i,a,o,s,c,l,u,d={value:0};if(e.x=(e.x-this.x0)/this.a,e.y=(e.y-this.y0)/this.a,r=Math.atan(Math.sqrt(e.x*e.x+e.y*e.y)),n=Math.atan2(e.y,e.x),e.x>=0&&e.x>=Math.abs(e.y)?d.value=av.AREA_0:e.y>=0&&e.y>=Math.abs(e.x)?(d.value=av.AREA_1,n-=V):e.x<0&&-e.x>=Math.abs(e.y)?(d.value=av.AREA_2,n=n<0?n+Pf:n-Pf):(d.value=av.AREA_3,n+=V),u=Pf/12*Math.tan(n),o=Math.sin(u)/(Math.cos(u)-1/Math.sqrt(2)),s=Math.atan(o),i=Math.cos(n),a=Math.tan(r),c=1-i*i*a*a*(1-Math.cos(Math.atan(1/Math.cos(s)))),c<-1?c=-1:c>1&&(c=1),this.face===iv.TOP)l=Math.acos(c),t.phi=V-l,t.lam=d.value===av.AREA_0?s+V:d.value===av.AREA_1?s<0?s+Pf:s-Pf:d.value===av.AREA_2?s-V:s;else if(this.face===iv.BOTTOM)l=Math.acos(c),t.phi=l-V,t.lam=d.value===av.AREA_0?-s+V:d.value===av.AREA_1?-s:d.value===av.AREA_2?-s-V:s<0?-s-Pf:-s+Pf;else{var f=c,p,m;u=f*f,m=u>=1?0:Math.sqrt(1-u)*Math.sin(s),u+=m*m,p=u>=1?0:Math.sqrt(1-u),d.value===av.AREA_1?(u=p,p=-m,m=u):d.value===av.AREA_2?(p=-p,m=-m):d.value===av.AREA_3&&(u=p,p=m,m=-u),this.face===iv.RIGHT?(u=f,f=-p,p=u):this.face===iv.BACK?(f=-f,p=-p):this.face===iv.LEFT&&(u=f,f=p,p=-u),t.phi=Math.acos(-m)-V,t.lam=Math.atan2(p,f),this.face===iv.RIGHT?t.lam=uv(t.lam,-V):this.face===iv.BACK?t.lam=uv(t.lam,-Pf):this.face===iv.LEFT&&(t.lam=uv(t.lam,+V))}if(this.es!==0){var h=+(t.phi<0),g=Math.tan(t.phi),_=this.b/Math.sqrt(g*g+this.one_minus_f_squared);t.phi=Math.atan(Math.sqrt(this.a*this.a-_*_)/(this.one_minus_f*_)),h&&(t.phi=-t.phi)}return t.lam+=this.long0,e.x=t.lam,e.y=t.phi,e}function lv(e,t,n,r){var i;return e<1e-10?(r.value=av.AREA_0,i=0):(i=Math.atan2(t,n),Math.abs(i)<=Mf?r.value=av.AREA_0:i>Mf&&i<=V+Mf?(r.value=av.AREA_1,i-=V):i>V+Mf||i<=-(V+Mf)?(r.value=av.AREA_2,i=i>=0?i-Pf:i+Pf):(r.value=av.AREA_3,i+=V)),i}function uv(e,t){var n=e+t;return n<-3.14159265359?n+=Nf:n>3.14159265359&&(n-=Nf),n}var dv={init:ov,forward:sv,inverse:cv,names:[`Quadrilateralized Spherical Cube`,`Quadrilateralized_Spherical_Cube`,`qsc`]},fv=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-9.86701e-7],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,1.8736e-8],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,9.34959e-7],[.7986,-.00755338,-500009e-10,9.35324e-7],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],pv=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-1.26793e-9,422642e-15],[.124,.0124,5.07171e-9,-1.60604e-9],[.186,.0123999,-1.90189e-8,6.00152e-9],[.248,.0124002,7.10039e-8,-2.24e-8],[.31,.0123992,-2.64997e-7,8.35986e-8],[.372,.0124029,9.88983e-7,-3.11994e-7],[.434,.0123893,-369093e-11,-4.35621e-7],[.4958,.0123198,-102252e-10,-3.45523e-7],[.5571,.0121916,-154081e-10,-5.82288e-7],[.6176,.0119938,-241424e-10,-5.25327e-7],[.6769,.011713,-320223e-10,-5.16405e-7],[.7346,.0113541,-397684e-10,-6.09052e-7],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-1.40374e-9],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],mv=.8487,hv=1.3523,gv=jf/5,_v=1/gv,vv=18,yv=function(e,t){return e[0]+t*(e[1]+t*(e[2]+t*e[3]))},bv=function(e,t){return e[1]+t*(2*e[2]+t*3*e[3])};function xv(e,t,n,r){for(var i=t;r;--r){var a=e(i);if(i-=a,Math.abs(a)<n)break}return i}function Sv(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||`Robinson`}function Cv(e){var t=H(e.x-this.long0,this.over),n=Math.abs(e.y),r=Math.floor(n*gv);r<0?r=0:r>=vv&&(r=vv-1),n=jf*(n-_v*r);var i={x:yv(fv[r],n)*t,y:yv(pv[r],n)};return e.y<0&&(i.y=-i.y),i.x=i.x*this.a*mv+this.x0,i.y=i.y*this.a*hv+this.y0,e.z!==void 0&&(i.z=e.z),e.m!==void 0&&(i.m=e.m),i}function wv(e){var t={x:(e.x-this.x0)/(this.a*mv),y:Math.abs(e.y-this.y0)/(this.a*hv)};if(t.y>=1)t.x/=fv[vv][0],t.y=e.y<0?-V:V;else{var n=Math.floor(t.y*vv);for(n<0?n=0:n>=vv&&(n=vv-1);;)if(pv[n][0]>t.y)--n;else if(pv[n+1][0]<=t.y)++n;else break;var r=pv[n],i=5*(t.y-r[0])/(pv[n+1][0]-r[0]);i=xv(function(e){return(yv(r,e)-t.y)/bv(r,e)},i,kf,100),t.x/=yv(fv[n],i),t.y=(5*n+i)*Af,e.y<0&&(t.y=-t.y)}return t.x=H(t.x+this.long0,this.over),e.z!==void 0&&(t.z=e.z),e.m!==void 0&&(t.m=e.m),t}var Tv={init:Sv,forward:Cv,inverse:wv,names:[`Robinson`,`robin`]};function Ev(){this.name=`geocent`}function Dv(e){return _m(e,this.es,this.a)}function Ov(e){return vm(e,this.es,this.a,this.b)}var kv={init:Ev,forward:Dv,inverse:Ov,names:[`Geocentric`,`geocentric`,`geocent`,`Geocent`]},Av={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},jv={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function Mv(){if(Object.keys(jv).forEach(function(e){if(this[e]===void 0)this[e]=jv[e].def;else if(jv[e].num&&isNaN(this[e]))throw Error(`Invalid parameter value, must be numeric `+e+` = `+this[e]);else jv[e].num&&(this[e]=parseFloat(this[e]));jv[e].degrees&&(this[e]=this[e]*Af)}.bind(this)),Math.abs(Math.abs(this.lat0)-V)<1e-10?this.mode=this.lat0<0?Av.S_POLE:Av.N_POLE:Math.abs(this.lat0)<1e-10?this.mode=Av.EQUIT:(this.mode=Av.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw Error(`Invalid height`);this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var e=this.tilt,t=this.azi;this.cg=Math.cos(t),this.sg=Math.sin(t),this.cw=Math.cos(e),this.sw=Math.sin(e)}function Nv(e){e.x-=this.long0;var t=Math.sin(e.y),n=Math.cos(e.y),r=Math.cos(e.x),i,a;switch(this.mode){case Av.OBLIQ:a=this.sinph0*t+this.cosph0*n*r;break;case Av.EQUIT:a=n*r;break;case Av.S_POLE:a=-t;break;case Av.N_POLE:a=t}switch(a=this.pn1/(this.p-a),i=a*n*Math.sin(e.x),this.mode){case Av.OBLIQ:a*=this.cosph0*t-this.sinph0*n*r;break;case Av.EQUIT:a*=t;break;case Av.N_POLE:a*=-(n*r);break;case Av.S_POLE:a*=n*r}var o=a*this.cg+i*this.sg,s=1/(o*this.sw*this.h1+this.cw);return i=(i*this.cg-a*this.sg)*this.cw*s,a=o*s,e.x=i*this.a,e.y=a*this.a,e}function Pv(e){e.x/=this.a,e.y/=this.a;var t={x:e.x,y:e.y},n,r,i=1/(this.pn1-e.y*this.sw);n=this.pn1*e.x*i,r=this.pn1*e.y*this.cw*i,e.x=n*this.cg+r*this.sg,e.y=r*this.cg-n*this.sg;var a=Mh(e.x,e.y);if(Math.abs(a)<1e-10)t.x=0,t.y=e.y;else{var o,s=1-a*a*this.pfact;switch(s=(this.p-Math.sqrt(s))/(this.pn1/a+a/this.pn1),o=Math.sqrt(1-s*s),this.mode){case Av.OBLIQ:t.y=Math.asin(o*this.sinph0+e.y*s*this.cosph0/a),e.y=(o-this.sinph0*Math.sin(t.y))*a,e.x*=s*this.cosph0;break;case Av.EQUIT:t.y=Math.asin(e.y*s/a),e.y=o*a,e.x*=s;break;case Av.N_POLE:t.y=Math.asin(o),e.y=-e.y;break;case Av.S_POLE:t.y=-Math.asin(o)}t.x=Math.atan2(e.x,e.y)}return e.x=t.x+this.long0,e.y=t.y,e}var Fv={init:Mv,forward:Nv,inverse:Pv,names:[`Tilted_Perspective`,`tpers`]};function Iv(){if(this.flip_axis=+(this.sweep===`x`),this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw Error();if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var e=1-this.es,t=1/e;this.radius_p=Math.sqrt(e),this.radius_p2=e,this.radius_p_inv2=t,this.shape=`ellipse`}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape=`sphere`;this.title||(this.title=`Geostationary Satellite View`)}function Lv(e){var t=e.x,n=e.y,r,i,a,o;if(t-=this.long0,this.shape===`ellipse`){n=Math.atan(this.radius_p2*Math.tan(n));var s=this.radius_p/Mh(this.radius_p*Math.cos(n),Math.sin(n));if(i=s*Math.cos(t)*Math.cos(n),a=s*Math.sin(t)*Math.cos(n),o=s*Math.sin(n),(this.radius_g-i)*i-a*a-o*o*this.radius_p_inv2<0)return e.x=NaN,e.y=NaN,e;r=this.radius_g-i,this.flip_axis?(e.x=this.radius_g_1*Math.atan(a/Mh(o,r)),e.y=this.radius_g_1*Math.atan(o/r)):(e.x=this.radius_g_1*Math.atan(a/r),e.y=this.radius_g_1*Math.atan(o/Mh(a,r)))}else this.shape===`sphere`&&(r=Math.cos(n),i=Math.cos(t)*r,a=Math.sin(t)*r,o=Math.sin(n),r=this.radius_g-i,this.flip_axis?(e.x=this.radius_g_1*Math.atan(a/Mh(o,r)),e.y=this.radius_g_1*Math.atan(o/r)):(e.x=this.radius_g_1*Math.atan(a/r),e.y=this.radius_g_1*Math.atan(o/Mh(a,r))));return e.x*=this.a,e.y*=this.a,e}function Rv(e){var t=-1,n=0,r=0,i,a,o,s;if(e.x/=this.a,e.y/=this.a,this.shape===`ellipse`){this.flip_axis?(r=Math.tan(e.y/this.radius_g_1),n=Math.tan(e.x/this.radius_g_1)*Mh(1,r)):(n=Math.tan(e.x/this.radius_g_1),r=Math.tan(e.y/this.radius_g_1)*Mh(1,n));var c=r/this.radius_p;if(i=n*n+c*c+t*t,a=2*this.radius_g*t,o=a*a-4*i*this.C,o<0)return e.x=NaN,e.y=NaN,e;s=(-a-Math.sqrt(o))/(2*i),t=this.radius_g+s*t,n*=s,r*=s,e.x=Math.atan2(n,t),e.y=Math.atan(r*Math.cos(e.x)/t),e.y=Math.atan(this.radius_p_inv2*Math.tan(e.y))}else if(this.shape===`sphere`){if(this.flip_axis?(r=Math.tan(e.y/this.radius_g_1),n=Math.tan(e.x/this.radius_g_1)*Math.sqrt(1+r*r)):(n=Math.tan(e.x/this.radius_g_1),r=Math.tan(e.y/this.radius_g_1)*Math.sqrt(1+n*n)),i=n*n+r*r+t*t,a=2*this.radius_g*t,o=a*a-4*i*this.C,o<0)return e.x=NaN,e.y=NaN,e;s=(-a-Math.sqrt(o))/(2*i),t=this.radius_g+s*t,n*=s,r*=s,e.x=Math.atan2(n,t),e.y=Math.atan(r*Math.cos(e.x)/t)}return e.x+=this.long0,e}var zv={init:Iv,forward:Lv,inverse:Rv,names:[`Geostationary Satellite View`,`Geostationary_Satellite`,`geos`]},Bv=1.340264,Vv=-.081106,Hv=893e-6,Uv=.003796,Wv=Math.sqrt(3)/2;function Gv(){this.long0=this.long0===void 0?0:this.long0,this.x0=this.x0===void 0?0:this.x0,this.y0=this.y0===void 0?0:this.y0,this.es!==0&&(this.apa=Gg(this.es),this.qp=Rg(this.e,1),this.rqda=Math.sqrt(.5*this.qp))}function Kv(e){var t=H(e.x-this.long0,this.over),n=e.y,r=Math.sin(n);this.es!==0&&(r=Rg(this.e,r)/this.qp);var i=Math.asin(Wv*r),a=i*i,o=a*a*a;return e.x=t*Math.cos(i)/(Wv*(Bv+3*Vv*a+o*(7*Hv+9*Uv*a))),e.y=i*(Bv+Vv*a+o*(Hv+Uv*a)),this.es!==0&&(e.x*=this.rqda,e.y*=this.rqda),e.x=this.a*e.x+this.x0,e.y=this.a*e.y+this.y0,e}function qv(e){e.x=(e.x-this.x0)/this.a,e.y=(e.y-this.y0)/this.a,this.es!==0&&(e.x/=this.rqda,e.y/=this.rqda);for(var t=1e-9,n=12,r=e.y,i,a,o,s,c,l=0;l<n&&(i=r*r,a=i*i*i,o=r*(Bv+Vv*i+a*(Hv+Uv*i))-e.y,s=Bv+3*Vv*i+a*(7*Hv+9*Uv*i),r-=c=o/s,!(Math.abs(c)<t));++l);return i=r*r,a=i*i*i,e.x=Wv*e.x*(Bv+3*Vv*i+a*(7*Hv+9*Uv*i))/Math.cos(r),e.y=Math.asin(Math.sin(r)/Wv),this.es!==0&&(e.y=Kg(e.y,this.apa)),e.x=H(e.x+this.long0,this.over),e}var Jv={init:Gv,forward:Kv,inverse:qv,names:[`eqearth`,`Equal Earth`,`Equal_Earth`]},Yv=1e-10;function Xv(){var e;if(this.phi1=this.lat1,Math.abs(this.phi1)<Yv)throw Error();this.es?(this.en=Ch(this.es),this.m1=wh(this.phi1,this.am1=Math.sin(this.phi1),e=Math.cos(this.phi1),this.en),this.am1=e/(Math.sqrt(1-this.es*this.am1*this.am1)*this.am1),this.inverse=Qv,this.forward=Zv):(this.cphi1=Math.abs(this.phi1)+Yv>=V?0:1/Math.tan(this.phi1),this.inverse=ey,this.forward=$v)}function Zv(e){var t=H(e.x-(this.long0||0),this.over),n=e.y,r=this.am1+this.m1-wh(n,i=Math.sin(n),a=Math.cos(n),this.en),i=a*t/(r*Math.sqrt(1-this.es*i*i)),a;return e.x=r*Math.sin(i),e.y=this.am1-r*Math.cos(i),e.x=this.a*e.x+(this.x0||0),e.y=this.a*e.y+(this.y0||0),e}function Qv(e){e.x=(e.x-(this.x0||0))/this.a,e.y=(e.y-(this.y0||0))/this.a;var t,n=Mh(e.x,e.y=this.am1-e.y),r,i=Eh(this.am1+this.m1-n,this.es,this.en);if((t=Math.abs(i))<V)t=Math.sin(i),r=n*Math.atan2(e.x,e.y)*Math.sqrt(1-this.es*t*t)/Math.cos(i);else if(Math.abs(t-V)<=Yv)r=0;else throw Error();return e.x=H(r+(this.long0||0),this.over),e.y=Mg(i),e}function $v(e){var t=H(e.x-(this.long0||0),this.over),n=e.y,r,i=this.cphi1+this.phi1-n;return Math.abs(i)>Yv?(e.x=i*Math.sin(r=t*Math.cos(n)/i),e.y=this.cphi1-i*Math.cos(r)):e.x=e.y=0,e.x=this.a*e.x+(this.x0||0),e.y=this.a*e.y+(this.y0||0),e}function ey(e){e.x=(e.x-(this.x0||0))/this.a,e.y=(e.y-(this.y0||0))/this.a;var t,n,r=Mh(e.x,e.y=this.cphi1-e.y);if(n=this.cphi1+this.phi1-r,Math.abs(n)>V)throw Error();return t=Math.abs(Math.abs(n)-V)<=Yv?0:r*Math.atan2(e.x,e.y)/Math.cos(n),e.x=H(t+(this.long0||0),this.over),e.y=Mg(n),e}var ty={init:Xv,names:[`bonne`,`Bonne (Werner lat_1=90)`]},ny={OBLIQUE:{forward:cy,inverse:uy},TRANSVERSE:{forward:ly,inverse:dy}},ry={ROTATE:{o_alpha:`oAlpha`,o_lon_c:`oLongC`,o_lat_c:`oLatC`},NEW_POLE:{o_lat_p:`oLatP`,o_lon_p:`oLongP`},NEW_EQUATOR:{o_lon_1:`oLong1`,o_lat_1:`oLat1`,o_lon_2:`oLong2`,o_lat_2:`oLat2`}};function iy(){if(this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.title=this.title||`General Oblique Transformation`,this.isIdentity=Lp.includes(this.o_proj),!this.o_proj)throw Error(`Missing parameter: o_proj`);if(this.o_proj===`ob_tran`)throw Error(`Invalid value for o_proj: `+this.o_proj);let e=hm(this.projStr.replace(`+proj=ob_tran`,``).replace(`+o_proj=`,`+proj=`).trim());if(!e)throw Error(`Invalid parameter: o_proj. Unknown projection `+this.o_proj);e.long0=0,this.obliqueProjection=e;let t,n=Object.keys(ry),r=e=>{if(this[e]===void 0)return;let t=parseFloat(this[e])*Af;if(isNaN(t))throw Error(`Invalid value for `+e+`: `+this[e]);return t};for(let e=0;e<n.length;e++){let i=ry[n[e]],a=Object.entries(i);if(a.some(([e])=>this[e]!==void 0)){t=i;for(let e=0;e<a.length;e++){let[t,n]=a[e],i=r(t);if(i===void 0)throw Error(`Missing parameter: `+t+`.`);this[n]=i}break}}if(!t)throw Error(`No valid parameters provided for ob_tran projection.`);let{lamp:i,phip:a}=sy(this,t);this.lamp=i,Math.abs(a)>1e-10?(this.cphip=Math.cos(a),this.sphip=Math.sin(a),this.projectionType=ny.OBLIQUE):this.projectionType=ny.TRANSVERSE}function ay(e){return this.projectionType.forward(this,e)}function oy(e){return this.projectionType.inverse(this,e)}function sy(e,t){let n,r;if(t===ry.ROTATE){let t=e.oLongC,i=e.oLatC,a=e.oAlpha;if(Math.abs(Math.abs(i)-V)<=1e-10)throw Error(`Invalid value for o_lat_c: `+e.o_lat_c+` should be < 90°`);r=t+Math.atan2(-1*Math.cos(a),-1*Math.sin(a)*Math.sin(i)),n=Math.asin(Math.cos(i)*Math.sin(a))}else if(t===ry.NEW_POLE)r=e.oLongP,n=e.oLatP;else{let t=e.oLong1,i=e.oLat1,a=e.oLong2,o=e.oLat2,s=Math.abs(i);if(Math.abs(i)>V-1e-10)throw Error(`Invalid value for o_lat_1: `+e.o_lat_1+` should be < 90°`);if(Math.abs(o)>V-1e-10)throw Error(`Invalid value for o_lat_2: `+e.o_lat_2+` should be < 90°`);if(Math.abs(i-o)<1e-10)throw Error(`Invalid value for o_lat_1 and o_lat_2: o_lat_1 should be different from o_lat_2`);if(s<1e-10)throw Error(`Invalid value for o_lat_1: o_lat_1 should be different from zero`);r=Math.atan2(Math.cos(i)*Math.sin(o)*Math.cos(t)-Math.sin(i)*Math.cos(o)*Math.cos(a),Math.sin(i)*Math.cos(o)*Math.sin(a)-Math.cos(i)*Math.sin(o)*Math.sin(t)),n=Math.atan(-1*Math.cos(r-t)/Math.tan(i))}return{lamp:r,phip:n}}function cy(e,t){let{x:n,y:r}=t;n=H(n-e.long0,e.over);let i=Math.cos(n),a=Math.sin(r),o=Math.cos(r);t.x=H(Math.atan2(o*Math.sin(n),e.sphip*o*i+e.cphip*a)+e.lamp),t.y=Math.asin(e.sphip*a-e.cphip*o*i);let s=e.obliqueProjection.forward(t);return e.isIdentity&&(s.x*=jf,s.y*=jf),s}function ly(e,t){let{x:n,y:r}=t;n=H(n-e.long0,e.over);let i=Math.cos(r),a=Math.cos(n);t.x=H(Math.atan2(i*Math.sin(n),Math.sin(r))+e.lamp),t.y=Math.asin(-1*i*a);let o=e.obliqueProjection.forward(t);return e.isIdentity&&(o.x*=jf,o.y*=jf),o}function uy(e,t){e.isIdentity&&(t.x*=Af,t.y*=Af);let{x:n,y:r}=e.obliqueProjection.inverse(t);if(n<Number.MAX_VALUE){n-=e.lamp;let i=Math.cos(n),a=Math.sin(r),o=Math.cos(r);t.x=Math.atan2(o*Math.sin(n),e.sphip*o*i-e.cphip*a),t.y=Math.asin(e.sphip*a+e.cphip*o*i)}return t.x=H(t.x+e.long0),t}function dy(e,t){e.isIdentity&&(t.x*=Af,t.y*=Af);let{x:n,y:r}=e.obliqueProjection.inverse(t);if(n<Number.MAX_VALUE){let i=Math.cos(r);n-=e.lamp,t.x=Math.atan2(i*Math.sin(n),-1*Math.sin(r)),t.y=Math.asin(i*Math.cos(n))}return t.x=H(t.x+e.long0),t}var fy={init:iy,forward:ay,inverse:oy,names:[`General Oblique Transformation`,`General_Oblique_Transformation`,`ob_tran`]};function py(e){e.Proj.projections.add(Ah),e.Proj.projections.add(Hh),e.Proj.projections.add(Kh),e.Proj.projections.add(ng),e.Proj.projections.add(sg),e.Proj.projections.add(dg),e.Proj.projections.add(_g),e.Proj.projections.add(xg),e.Proj.projections.add(Tg),e.Proj.projections.add(Lg),e.Proj.projections.add(Xg),e.Proj.projections.add(n_),e.Proj.projections.add(o_),e.Proj.projections.add(d_),e.Proj.projections.add(h_),e.Proj.projections.add(b_),e.Proj.projections.add(w_),e.Proj.projections.add(O_),e.Proj.projections.add(N_),e.Proj.projections.add(F_),e.Proj.projections.add(z_),e.Proj.projections.add(U_),e.Proj.projections.add(q_),e.Proj.projections.add($_),e.Proj.projections.add(rv),e.Proj.projections.add(dv),e.Proj.projections.add(Tv),e.Proj.projections.add(kv),e.Proj.projections.add(Fv),e.Proj.projections.add(zv),e.Proj.projections.add(Jv),e.Proj.projections.add(ty),e.Proj.projections.add(fy)}var my=Object.assign(Rm,{defaultDatum:`WGS84`,Proj:hm,WGS84:new hm(`WGS84`),Point:uh,toPoint:km,defs:_p,nadgrid:tm,transform:Pm,mgrs:qm,version:`__VERSION__`});py(my);var hy=[{id:`utm-auto`,label:`WGS84 / UTM — fuseau automatique`,proj:null},{id:`EPSG:32628`,label:`WGS84 / UTM 28N`,proj:`+proj=utm +zone=28 +datum=WGS84 +units=m +no_defs`},{id:`EPSG:32629`,label:`WGS84 / UTM 29N`,proj:`+proj=utm +zone=29 +datum=WGS84 +units=m +no_defs`},{id:`EPSG:32630`,label:`WGS84 / UTM 30N`,proj:`+proj=utm +zone=30 +datum=WGS84 +units=m +no_defs`},{id:`EPSG:32631`,label:`WGS84 / UTM 31N`,proj:`+proj=utm +zone=31 +datum=WGS84 +units=m +no_defs`},{id:`EPSG:32632`,label:`WGS84 / UTM 32N`,proj:`+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs`},{id:`EPSG:32733`,label:`WGS84 / UTM 33S`,proj:`+proj=utm +zone=33 +south +datum=WGS84 +units=m +no_defs`},{id:`EPSG:32735`,label:`WGS84 / UTM 35S`,proj:`+proj=utm +zone=35 +south +datum=WGS84 +units=m +no_defs`},{id:`EPSG:32750`,label:`WGS84 / UTM 50S`,proj:`+proj=utm +zone=50 +south +datum=WGS84 +units=m +no_defs`},{id:`EPSG:2041`,label:`Abidjan 1987 / UTM 29N`,proj:`+proj=utm +zone=29 +ellps=clrk80 +towgs84=-124.76,53,466.79,0,0,0,0 +units=m +no_defs`},{id:`EPSG:2043`,label:`Abidjan 1987 / UTM 30N`,proj:`+proj=utm +zone=30 +ellps=clrk80 +towgs84=-124.76,53,466.79,0,0,0,0 +units=m +no_defs`},{id:`EPSG:2136`,label:`Accra / Ghana National Grid`,proj:`+proj=tmerc +lat_0=4.666666666666667 +lon_0=-1 +k=0.99975 +x_0=274319.7391633579 +y_0=0 +a=6378300 +rf=296 +towgs84=-199,32,322,0,0,0,0 +to_meter=0.3047997101815088 +no_defs`},{id:`custom`,label:`Autre système — définition proj4`,proj:`custom`}];function gy(e,t){return`+proj=utm +zone=${e}${t?` +south`:``} +datum=WGS84 +units=m +no_defs`}function _y(e){return Math.min(60,Math.max(1,Math.floor((e+180)/6)+1))}function vy(e){let t,n=hy.find(t=>t.id===e.crs)||hy[0];t=n.id===`utm-auto`?e.zone?gy(e.zone,e.south):null:n.proj===`custom`?e.custom||null:n.proj;let r=null;if(t)try{r=my(`EPSG:4326`,t)}catch{r=null}let i=(e,t)=>{r||(r=my(`EPSG:4326`,gy(_y(t),e<0)));let[n,i]=r.forward([t,e]);return{x:n,y:i}},a=e.calib&&e.calib.enabled?yy(e.calib.points||[],i):null;return{def:t,calib:a,toProject(t,n,r){let o=i(t,n),s=o.x,c=o.y,l=Number.isFinite(r)?r:NaN;if(a){let e=o.x-a.pcx,t=o.y-a.pcy;s=a.mcx+a.a*e-a.b*t,c=a.mcy+a.b*e+a.a*t,Number.isFinite(l)&&(l+=a.dz)}else Number.isFinite(l)&&(l+=e.zOffset||0);return{x:s,y:c,z:l}},project:i}}function yy(e,t){let n=e.filter(e=>[e.E,e.N,e.lat,e.lon].every(Number.isFinite));if(!n.length)return null;let r=n.map(e=>({...t(e.lat,e.lon),E:e.E,N:e.N,Z:e.Z,h:e.h})),i=r.length,a=r.reduce((e,t)=>e+t.x,0)/i,o=r.reduce((e,t)=>e+t.y,0)/i,s=r.reduce((e,t)=>e+t.E,0)/i,c=r.reduce((e,t)=>e+t.N,0)/i,l=1,u=0;if(i>=2){let e=0,t=0,n=0;for(let i of r){let r=i.x-a,l=i.y-o,u=i.E-s,d=i.N-c;e+=r*r+l*l,t+=r*u+l*d,n+=r*d-l*u}e>1e-9&&(l=t/e,u=n/e)}let d=r.filter(e=>Number.isFinite(e.Z)&&Number.isFinite(e.h)),f=d.length?d.reduce((e,t)=>e+(t.Z-t.h),0)/d.length:0,p=r.map(e=>{let t=e.x-a,n=e.y-o,r=s+l*t-u*n,i=c+u*t+l*n;return Math.hypot(r-e.E,i-e.N)});return{pcx:a,pcy:o,mcx:s,mcy:c,a:l,b:u,dz:f,scale:Math.hypot(l,u),rotation:Math.atan2(u,l)*180/Math.PI,rms:Math.sqrt(p.reduce((e,t)=>e+t*t,0)/i),residuals:p,n:i}}var by=[{key:`ore`,name:`Minerai`,color:`#e8473b`,density:2.75},{key:`hg`,name:`Minerai haute teneur`,color:`#b0124f`,density:2.8},{key:`lg`,name:`Minerai basse teneur`,color:`#ff8a3d`,density:2.7},{key:`marginal`,name:`Marginal`,color:`#f2c94c`,density:2.7},{key:`waste`,name:`Stérile`,color:`#8d99a6`,density:2.6},{key:`oxide`,name:`Oxyde`,color:`#c38a4b`,density:2.2},{key:`other`,name:`Autre`,color:`#5aa9e6`,density:2.6}],xy=[[`hg`,/(\bhg\b|high[ _-]?grade|haute[ _-]?teneur|_hg|hg_)/i],[`lg`,/(\blg\b|low[ _-]?grade|basse[ _-]?teneur|_lg|lg_)/i],[`marginal`,/(marg|\bmg\b|_mg|mg_|\bmw\b)/i],[`oxide`,/(oxide|oxyde|\box\b|_ox|ox_|saprol|latérit|laterit)/i],[`waste`,/(waste|st[ée]rile|\bwst\b|_w\b|_wst|wst_|overburden|\bob\b|recouvrement)/i],[`ore`,/(ore|minerai|\bmin\b|_ore|ore_|\bmz\b|mineral)/i]];function Sy(e){for(let[t,n]of xy)if(n.test(e||``))return t;return`other`}function Cy(e){let t=e.length/2;if(t<3)return[];let n=0;for(let r=0,i=t-1;r<t;i=r++)n+=e[2*i]*e[2*r+1]-e[2*r]*e[2*i+1];let r=[...Array(t).keys()];n<0&&r.reverse();let i=[],a=(t,n,r)=>(e[2*n]-e[2*t])*(e[2*r+1]-e[2*t+1])-(e[2*n+1]-e[2*t+1])*(e[2*r]-e[2*t]),o=(e,t,n,r)=>a(t,n,e)>=0&&a(n,r,e)>=0&&a(r,t,e)>=0,s=0;for(;r.length>3&&s++<t*t;){let e=!1;for(let t=0;t<r.length;t++){let n=r[(t+r.length-1)%r.length],s=r[t],c=r[(t+1)%r.length];if(a(n,s,c)<=1e-12)continue;let l=!0;for(let e of r)if(e!==n&&e!==s&&e!==c&&o(e,n,s,c)){l=!1;break}if(l){i.push(n,s,c),r.splice(t,1),e=!0;break}}if(!e)break}return r.length===3&&i.push(r[0],r[1],r[2]),i}function wy(e,t,n){let r=e.length/3;r>3&&e[0]===e[3*r-3]&&e[1]===e[3*r-2]&&r--;let i=new Float64Array(2*r);for(let t=0;t<r;t++)i[2*t]=e[3*t],i[2*t+1]=e[3*t+1];let a=Cy(i),o=new Float64Array(r*6);for(let e=0;e<r;e++)o[3*e]=i[2*e],o[3*e+1]=i[2*e+1],o[3*e+2]=t,o[3*(r+e)]=i[2*e],o[3*(r+e)+1]=i[2*e+1],o[3*(r+e)+2]=n;let s=[];for(let e=0;e<a.length;e+=3)s.push(a[e],a[e+1],a[e+2]),s.push(r+a[e],r+a[e+2],r+a[e+1]);for(let e=0;e<r;e++){let t=(e+1)%r;s.push(e,t,r+t,e,r+t,r+e)}return{V:o,T:Uint32Array.from(s)}}function Ty(e,t,n=10){let r=[],i=t.replace(/\.[^.]+$/,``),a=(e,n,i)=>r.push({id:Math.random().toString(36).slice(2,10),name:e,material:Sy(e+` `+t),V:n.V,T:n.T,src:i});if(e.parts&&e.parts.length)for(let t of e.parts)a(t.name,t,`objet`);else for(let t of e.meshes){let n=rf(t);n.length>1?n.forEach((e,t)=>a(`${i} #${t+1}`,e,`solide`)):a(e.meshes.length>1?t.name:i,t,`solide`)}for(let t of e.lines||[]){let e=t.P.length/3;if(!(t.closed||e>3&&Math.hypot(t.P[0]-t.P[3*e-3],t.P[1]-t.P[3*e-2])<.001)||e<4)continue;let o=0;for(let n=0;n<e;n++)o+=t.P[3*n+2];o/=e;let s=wy(t.P,o,o-n);s.T.length&&a(t.layer||t.code||t.name||`${i} ${r.length+1}`,s,`contour`)}return r}var U={cx:196400,cy:1104600,floor:300,top:400,bench:10,berm:7,face:70,L:90,R:35};function Ey(e,t,n,r){let i=Math.PI/7,a=e-U.cx,o=t-U.cy,s=a*Math.cos(i)+o*Math.sin(i),c=-a*Math.sin(i)+o*Math.cos(i),l=Math.max(-n,Math.min(n,s));return Math.hypot(s-l,c)-r}var Dy=(e,t)=>U.top+6*Math.sin((e-U.cx)/140)+4*Math.cos((t-U.cy)/110);function Oy(e,t){if(e<=0)return t;let n=U.bench/Math.tan(U.face*Math.PI/180),r=n+U.berm,i=Math.floor(e/r),a=e-i*r;return t+i*U.bench+(a<n?a/n*U.bench:U.bench)}function ky(e,t,n,r,i,a){let o=new Float64Array(i*a);for(let s=0;s<a;s++)for(let a=0;a<i;a++)o[s*i+a]=e(t+a*r,n+s*r);return o}function Ay(){let e=U.cx-260,t=U.cy-220,n=(e,t)=>Oy(Ey(e,t,U.L,U.R),U.floor),r=ky((e,t)=>{let r=n(e,t);return r<=Dy(e,t)+.01?r:NaN},e,t,2,260,220);for(let e=0;e<220;e++)for(let t=0;t<260;t++){let n=e*260+t;Number.isFinite(r[n])||[n-1,n+1,n-260,n+260].some(e=>e>=0&&e<r.length&&Number.isFinite(r[e])&&r[e]<1e9)&&(r[n]=1/0)}for(let n=0;n<r.length;n++)r[n]===1/0&&(r[n]=Dy(e+n%260*2,t+Math.floor(n/260)*2));let i=Qd(r,260,220,e,t,2),a=Math.PI/7,o=(e,t)=>{let n=e-U.cx,r=t-U.cy;return[n*Math.cos(a)+r*Math.sin(a),-n*Math.sin(a)+r*Math.cos(a)]},s=(e,t)=>[U.cx+e*Math.cos(a)-t*Math.sin(a),U.cy+e*Math.sin(a)+t*Math.cos(a)],c=U.bench/Math.tan(U.face*Math.PI/180)+U.berm,[l,u]=s(-40,U.R+6.5*c),d=Qd(ky((e,t)=>{let[r]=o(e,t),i=n(e,t),[a,c]=s(-22.5,0),d=Oy(Ey(e-(a-U.cx),t-(c-U.cy),U.L-22.5,U.R),U.floor),f=Math.min(Dy(e,t),Math.max(i,350,d)),p=e-l,m=t-u;return p*p+m*m<81&&i<Dy(e,t)&&(f=Math.min(f,i-1.2)),f},e-60,t-60,2,320,280),320,280,e-60,t-60,2),f=Qd(ky(Dy,e-60,t-60,4,160,140),160,140,e-60,t-60,4),p=U.bench/Math.tan(U.face*Math.PI/180),m=p+U.berm,h=[],g=Math.PI/7;for(let e=0;e<(U.top-U.floor)/U.bench;e++)for(let[t,n,r]of[[`Pied`,e*m,U.floor+e*U.bench],[`Crête`,e*m+p,U.floor+(e+1)*U.bench]]){let e=[],i=U.R+n;for(let n=0;n<=72;n++){let a=n/72*2*Math.PI,o=(Math.cos(a)>=0?U.L:-U.L)+i*Math.cos(a),s=i*Math.sin(a),c=U.cx+o*Math.cos(g)-s*Math.sin(g),l=U.cy+o*Math.sin(g)+s*Math.cos(g);if(r>Dy(c,l)+.5){e.length>=6&&h.push({name:`${t} RL${r}`,P:Float64Array.from(e),closed:!1}),e.length=0;continue}e.push(c,l,r)}e.length>=6&&h.push({name:`${t} RL${r}`,P:Float64Array.from(e),closed:e.length===219})}let _=[];for(let e=U.floor;e<380;e+=U.bench)for(let t=-150;t<=150;t+=25)for(let r=-90;r<=90;r+=25){let[i,a]=s(t,r),o=[[0,0],[25,0],[25,25],[0,25]].map(([e,n])=>s(t+e,r+n));if(!o.every(([t,r])=>n(t,r)<=e+.01))continue;let c=[];for(let[t,n]of o)c.push(t,n,e+U.bench);let l=wy(Float64Array.from(c),e+U.bench,e),u=(t+25/2)/120,d=(r+25/2-10)/38,f=u*u+d*d,p=f<.35?`hg`:f<1?`ore`:f<1.5?`marginal`:`waste`,m={hg:`HG`,ore:`ORE`,marginal:`MRG`,waste:`WST`}[p];_.push({id:`b${e}_${t}_${r}`,name:`RL${e}_${m}_${(t+150)/25}${String.fromCharCode(65+(r+90)/25)}`,material:p,grade:p===`waste`?0:Math.round({hg:3.4,ore:1.7,marginal:.6}[p]*(.85+.3*Math.abs(Math.sin(t*.37+r*.91+e)))*100)/100,V:l.V,T:l.T,src:`démo`})}return{blocks:_,design:{name:`DEMO_pit_design`,format:`Démo`,...i},topo:{name:`DEMO_topo_actuelle`,format:`Démo`,...d},initial:{name:`DEMO_terrain_naturel`,format:`Démo`,...f},lines:h}}var jy=`kb-pit-limit`,My=1,Ny=null;function Py(){return Ny||(Ny=new Promise((e,t)=>{let n=indexedDB.open(jy,My);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(`projects`)||e.createObjectStore(`projects`,{keyPath:`id`}),e.objectStoreNames.contains(`layers`)||e.createObjectStore(`layers`,{keyPath:`id`}).createIndex(`project`,`projectId`),e.objectStoreNames.contains(`kv`)||e.createObjectStore(`kv`)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)}),Ny)}function Fy(e,t,n){return Py().then(r=>new Promise((i,a)=>{let o=r.transaction(e,t),s=o.objectStore(e),c;Promise.resolve(n(s)).then(e=>{c=e}),o.oncomplete=()=>i(c),o.onerror=()=>a(o.error),o.onabort=()=>a(o.error||Error(`Transaction annulée (espace insuffisant ?)`))}))}var Iy=e=>new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error)}),Ly=()=>Fy(`projects`,`readonly`,e=>Iy(e.getAll())),Ry=e=>Fy(`projects`,`readonly`,t=>Iy(t.get(e))),zy=e=>Fy(`projects`,`readwrite`,t=>t.put(e)),By=e=>Fy(`layers`,`readwrite`,t=>t.put(e)),Vy=e=>Fy(`layers`,`readwrite`,t=>t.delete(e)),Hy=e=>Fy(`layers`,`readonly`,t=>Iy(t.index(`project`).getAll(e)));async function Uy(e){let t=await Hy(e);await Fy(`layers`,`readwrite`,e=>t.forEach(t=>e.delete(t.id))),await Fy(`projects`,`readwrite`,t=>t.delete(e))}var Wy=e=>Fy(`kv`,`readonly`,t=>Iy(t.get(e))),Gy=(e,t)=>Fy(`kv`,`readwrite`,n=>n.put(t,e));async function Ky(){try{navigator.storage?.persist&&await navigator.storage.persist()}catch{}try{return await navigator.storage.estimate()}catch{return null}}var qy;(function(e){e.Unimplemented=`UNIMPLEMENTED`,e.Unavailable=`UNAVAILABLE`})(qy||(qy={}));var Jy=class extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}},Yy=e=>e?.androidBridge?`android`:e?.webkit?.messageHandlers?.bridge?`ios`:`web`,Xy=e=>{let t=e.CapacitorCustomPlatform||null,n=e.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>t===null?Yy(e):t.name,a=()=>i()!==`web`,o=e=>!!(l.get(e)?.platforms.has(i())||s(e)),s=e=>n.PluginHeaders?.find(t=>t.name===e),c=t=>e.console.error(t),l=new Map;return n.convertFileSrc||(n.convertFileSrc=e=>e),n.getPlatform=i,n.handleError=c,n.isNativePlatform=a,n.isPluginAvailable=o,n.registerPlugin=(e,a={})=>{let o=l.get(e);if(o)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),o.proxy;let c=i(),u=s(e),d,f=async()=>(!d&&c in a?d=d=typeof a[c]==`function`?await a[c]():a[c]:t!==null&&!d&&`web`in a&&(d=d=typeof a.web==`function`?await a.web():a.web),d),p=(t,r)=>{if(u){let i=u?.methods.find(e=>r===e.name);if(i)return i.rtype===`promise`?t=>n.nativePromise(e,r.toString(),t):(t,i)=>n.nativeCallback(e,r.toString(),t,i);if(t)return t[r]?.bind(t)}else if(t)return t[r]?.bind(t);else throw new Jy(`"${e}" plugin is not implemented on ${c}`,qy.Unimplemented)},m=t=>{let n,r=(...r)=>{let i=f().then(i=>{let a=p(i,t);if(a){let e=a(...r);return n=e?.remove,e}throw new Jy(`"${e}.${t}()" is not implemented on ${c}`,qy.Unimplemented)});return t===`addListener`&&(i.remove=async()=>n()),i};return r.toString=()=>`${t.toString()}() { [capacitor code] }`,Object.defineProperty(r,"name",{value:t,writable:!1,configurable:!1}),r},h=m(`addListener`),g=m(`removeListener`),_=(e,t)=>{let n=h({eventName:e},t),r=async()=>{let r=await n;g({eventName:e,callbackId:r},t)},i=new Promise(e=>n.then(()=>e({remove:r})));return i.remove=async()=>{console.warn(`Using addListener() without 'await' is deprecated.`),await r()},i},v=new Proxy({},{get(e,t){switch(t){case`$$typeof`:return;case`toJSON`:return()=>({});case`addListener`:return u?_:h;case`removeListener`:return g;default:return m(t)}}});return r[e]=v,l.set(e,{name:e,proxy:v,platforms:new Set([...Object.keys(a),...u?[c]:[]])}),v},n.Exception=Jy,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},Zy=(e=>e.Capacitor=Xy(e))(typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}),Qy=Zy.registerPlugin,$y=class{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);let r=this.windowListeners[e];return r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e),Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){let r=this.listeners[e];if(!r){if(n){let n=this.retainedEventArguments[e];n||(n=[]),n.push(t),this.retainedEventArguments[e]=n}return}r.forEach(e=>e(t))}hasListeners(e){return!!this.listeners[e]?.length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e=`not implemented`){return new Zy.Exception(e,qy.Unimplemented)}unavailable(e=`not available`){return new Zy.Exception(e,qy.Unavailable)}async removeListener(e,t){let n=this.listeners[e];if(!n)return;let r=n.indexOf(t);r!==-1&&this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(t=>{this.notifyListeners(e,t)}))}},eb=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),tb=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),nb=class extends $y{async getCookies(){let e=document.cookie,t={};return e.split(`;`).forEach(e=>{if(e.length<=0)return;let[n,r]=e.replace(/=/,`CAP_COOKIE`).split(`CAP_COOKIE`);n=tb(n).trim(),r=tb(r).trim(),t[n]=r}),t}async setCookie(e){try{let t=eb(e.key),n=eb(e.value),r=e.expires?`; expires=${e.expires.replace(`expires=`,``)}`:``,i=(e.path||`/`).replace(`path=`,``),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:``;document.cookie=`${t}=${n||``}${r}; path=${i}; ${a};`}catch(e){return Promise.reject(e)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{let e=document.cookie.split(`;`)||[];for(let t of e)document.cookie=t.replace(/^ +/,``).replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}};Qy(`CapacitorCookies`,{web:()=>new nb});var rb=async e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=r.result;t(e.indexOf(`,`)>=0?e.split(`,`)[1]:e)},r.onerror=e=>n(e),r.readAsDataURL(e)}),ib=(e={})=>{let t=Object.keys(e);return Object.keys(e).map(e=>e.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=e[t[i]],n),{})},ab=(e,t=!0)=>e?Object.entries(e).reduce((e,n)=>{let[r,i]=n,a,o;return Array.isArray(i)?(o=``,i.forEach(e=>{a=t?encodeURIComponent(e):e,o+=`${r}=${a}&`}),o.slice(0,-1)):(a=t?encodeURIComponent(i):i,o=`${r}=${a}`),`${e}&${o}`},``).substr(1):null,ob=(e,t={})=>{let n=Object.assign({method:e.method||`GET`,headers:e.headers},t),r=ib(e.headers)[`content-type`]||``;if(typeof e.data==`string`)n.body=e.data;else if(r.includes(`application/x-www-form-urlencoded`)){let t=new URLSearchParams;for(let[n,r]of Object.entries(e.data||{}))t.set(n,r);n.body=t.toString()}else if(r.includes(`multipart/form-data`)||e.data instanceof FormData){let t=new FormData;if(e.data instanceof FormData)e.data.forEach((e,n)=>{t.append(n,e)});else for(let n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;let r=new Headers(n.headers);r.delete(`content-type`),n.headers=r}else(r.includes(`application/json`)||typeof e.data==`object`)&&(n.body=JSON.stringify(e.data));return n},sb=class extends $y{async request(e){let t=ob(e,e.webFetchExtra),n=ab(e.params,e.shouldEncodeUrlParams),r=n?`${e.url}?${n}`:e.url,i=await fetch(r,t),a=i.headers.get(`content-type`)||``,{responseType:o=`text`}=i.ok?e:{};a.includes(`application/json`)&&(o=`json`);let s,c;switch(o){case`arraybuffer`:case`blob`:c=await i.blob(),s=await rb(c);break;case`json`:s=await i.json();break;default:s=await i.text()}let l={};return i.headers.forEach((e,t)=>{l[t]=e}),{data:s,headers:l,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:`GET`}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:`POST`}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:`PUT`}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:`PATCH`}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:`DELETE`}))}};Qy(`CapacitorHttp`,{web:()=>new sb});var cb;(function(e){e.Dark=`DARK`,e.Light=`LIGHT`,e.Default=`DEFAULT`})(cb||(cb={}));var lb;(function(e){e.StatusBar=`StatusBar`,e.NavigationBar=`NavigationBar`})(lb||(lb={}));var ub=class extends $y{async setStyle(){this.unavailable(`not available for web`)}async setAnimation(){this.unavailable(`not available for web`)}async show(){this.unavailable(`not available for web`)}async hide(){this.unavailable(`not available for web`)}};Qy(`SystemBars`,{web:()=>new ub});function db(e){e.CapacitorUtils.Synapse=new Proxy({},{get(t,n){return new Proxy({},{get(t,r){return(t,i,a)=>{let o=e.Capacitor.Plugins[n];if(o===void 0){a(Error(`Capacitor plugin ${n} not found`));return}if(typeof o[r]!=`function`){a(Error(`Method ${r} not found in Capacitor plugin ${n}`));return}(async()=>{try{i(await o[r](t))}catch(e){a(e)}})()}}})}})}function fb(e){e.CapacitorUtils.Synapse=new Proxy({},{get(t,n){return e.cordova.plugins[n]}})}function pb(e=!1){typeof window>`u`||(window.CapacitorUtils=window.CapacitorUtils||{},window.Capacitor!==void 0&&!e?db(window):window.cordova!==void 0&&fb(window))}var mb=`modulepreload`,hb=function(e,t){return new URL(e,t).href},gb={},_b=function(e){return e.pathname.endsWith(`.css`)},vb=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=hb(t,n);let r=s(t);if(r.href in gb)return;gb[r.href]=!0;let i=_b(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:mb,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},yb=Qy(`Geolocation`,{web:()=>vb(()=>import(`./web-BbOkbM_H.js`).then(e=>new e.GeolocationWeb),[],import.meta.url)});pb();var bb=Zy.isNativePlatform(),xb=null,Sb=null;async function Cb(e,t){wb();let n={enableHighAccuracy:!0,timeout:2e4,maximumAge:0},r=t=>e({lat:t.coords.latitude,lon:t.coords.longitude,alt:t.coords.altitude??NaN,acc:t.coords.accuracy,altAcc:t.coords.altitudeAccuracy??NaN,heading:t.coords.heading??NaN,speed:t.coords.speed??NaN,time:t.timestamp});if(bb)try{return(await yb.checkPermissions()).location!==`granted`&&(await yb.requestPermissions({permissions:[`location`]})).location!==`granted`?(t(`Autorisation de localisation refusée`),!1):(xb=await yb.watchPosition(n,(e,n)=>{n?t(n.message||String(n)):e&&r(e)}),!0)}catch(e){return t(e.message||String(e)),!1}return navigator.geolocation?(Sb=navigator.geolocation.watchPosition(r,e=>t(e.message),n),!0):(t(`GPS non disponible sur cet appareil`),!1)}function wb(){xb!==null&&(yb.clearWatch({id:xb}),xb=null),Sb!==null&&(navigator.geolocation.clearWatch(Sb),Sb=null)}async function Tb(){let e=window.DeviceOrientationEvent;if(e&&typeof e.requestPermission==`function`)try{return await e.requestPermission()===`granted`}catch{return!1}return!!e}var Eb=Math.PI/180;function Db(e,t,n){let r=Math.cos(e*Eb),i=Math.sin(e*Eb),a=Math.cos(t*Eb),o=Math.sin(t*Eb),s=Math.cos(n*Eb),c=Math.sin(n*Eb);return{top:[-i*a,r*a,o],back:[-r*c-i*o*s,-i*c+r*o*s,-a*s]}}function Ob(e){let t=null,n=!1,r=(r,i)=>{if(typeof r.alpha!=`number`||typeof r.beta!=`number`||typeof r.gamma!=`number`||!i&&n)return;let{top:a,back:o}=Db(r.alpha,r.beta,r.gamma),s=Math.hypot(o[0],o[1]);Math.hypot(a[0],a[1]);let c=s<.5,l=c?a:o,u=(Math.atan2(l[0],l[1])/Eb+360)%360,d=Math.asin(Math.max(-1,Math.min(1,o[2])))/Eb,f=i||r.absolute?`absolu`:`relatif`;if(typeof r.webkitCompassHeading==`number`&&r.webkitCompassAccuracy!==-1){if(Math.abs(r.beta)<50||t===null){let e=(Math.atan2(a[0],a[1])/Eb+360)%360,n=(r.webkitCompassHeading-e+540)%360-180;t=t===null?n:t+.2*((n-t+540)%360-180)}u=(u+t+360)%360,f=`iOS`}else if(c){let e=screen.orientation&&screen.orientation.angle||0;u=(u+e)%360}e({heading:u,pitch:d,flat:c,source:f})},i=e=>{n=!0,r(e,!0)},a=e=>r(e,!1);return window.addEventListener(`deviceorientationabsolute`,i),window.addEventListener(`deviceorientation`,a),()=>{window.removeEventListener(`deviceorientationabsolute`,i),window.removeEventListener(`deviceorientation`,a)}}function kb(e,t,n=.25){return Number.isFinite(e)?(e+n*((t-e+540)%360-180)+360)%360:t}var Ab=bb,jb={fr:[`N`,`NNE`,`NE`,`ENE`,`E`,`ESE`,`SE`,`SSE`,`S`,`SSO`,`SO`,`OSO`,`O`,`ONO`,`NO`,`NNO`],en:[`N`,`NNE`,`NE`,`ENE`,`E`,`ESE`,`SE`,`SSE`,`S`,`SSW`,`SW`,`WSW`,`W`,`WNW`,`NW`,`NNW`]},Mb=e=>(e%360+360)%360;async function Nb(e){let{t,fmt:n}=e,r=t=>jb[e.lang===`en`?`en`:`fr`][Math.round(Mb(t)/22.5)%16],i=lf((e.design||e.topo).V);if(e.topo&&e.design){let t=lf(e.topo.V),n=.12*Math.max(i.x1-i.x0,i.y1-i.y0);i={x0:Math.max(t.x0,i.x0-n),y0:Math.max(t.y0,i.y0-n),x1:Math.min(t.x1,i.x1+n),y1:Math.min(t.y1,i.y1+n),z0:i.z0,z1:i.z1}}let a=Math.max(.5,Math.max(i.x1-i.x0,i.y1-i.y0)/320),o=Math.max(2,Math.ceil((i.x1-i.x0)/a)),s=Math.max(2,Math.ceil((i.y1-i.y0)/a)),c={x0:i.x0+a/2,y0:i.y0+a/2,cs:a,nx:o,ny:s},l={};for(let t of[`topo`,`design`,`initial`])e[t]&&(l[t]=pf(e[t].V,e[t].T,c));let u=(i.x0+i.x1)/2,d=(i.y0+i.y1)/2,f=Math.hypot(i.x1-i.x0,i.y1-i.y0)/2,p=(e,t,n)=>{let r=Math.round((t-c.x0)/a),i=Math.round((n-c.y0)/a);return r<0||i<0||r>=o||i>=s?NaN:e[i*o+r]},m=document.createElement(`div`);m.className=`profile`,m.innerHTML=`
    <div class="pf-head">
      <div class="pf-title"><b id="pfHead">—</b><small id="pfSub">${t(`Pointez le téléphone vers la fosse`)}</small></div>
      <button class="icon-btn" id="pfClose">✕</button>
    </div>
    <div class="pf-canvas"><canvas id="pfCv"></canvas><canvas id="pfMini" class="pf-mini"></canvas><div id="pfRead" class="pf-read"></div></div>
    <div class="pf-bar">
      <div class="seg" id="pfMode"><button data-v="sil" class="on">${t(`Silhouette`)}</button><button data-v="cut">${t(`Coupe`)}</button></div>
      <div class="seg" id="pfPlane"><button data-v="face" class="on">${t(`De face`)}</button><button data-v="axis">${t(`Dans l'axe`)}</button></div>
      <div class="seg" id="pfPivot"><button data-v="center" class="on">${t(`Centre fosse`)}</button><button data-v="me">${t(`Ma position`)}</button></div>
      <div class="seg" id="pfScale"><button data-v="auto" class="on">${t(`Auto`)}</button><button data-v="true">1:1</button></div>
      <button class="btn" id="pfLock">🔓 ${t(`Figer`)}</button>
    </div>
    <div class="pf-slider hidden" id="pfSlideWrap"><input type="range" id="pfSlide" min="0" max="359" value="0"><span id="pfSlideTxt"></span></div>`,document.getElementById(`app`).appendChild(m);let h=e=>m.querySelector(`#`+e),g={heading:0,mode:`sil`,plane:`face`,pivot:e.pos()?`me`:`center`,scale:`auto`,locked:!1,sensor:!1,dirty:!0,cursor:null};g.pivot===`me`&&h(`pfPivot`).querySelectorAll(`button`).forEach(e=>e.classList.toggle(`on`,e.dataset.v===`me`));let _=(e,t)=>{h(e).onclick=n=>{let r=n.target.closest(`[data-v]`);r&&(g[t]=r.dataset.v,g.dirty=!0,h(e).querySelectorAll(`button`).forEach(e=>e.classList.toggle(`on`,e===r)))}};_(`pfMode`,`mode`),_(`pfPlane`,`plane`),_(`pfPivot`,`pivot`),_(`pfScale`,`scale`),h(`pfLock`).onclick=()=>{g.locked=!g.locked,h(`pfLock`).innerHTML=g.locked?`🔒 ${t(`Figé`)}`:`🔓 ${t(`Figer`)}`,h(`pfSlideWrap`).classList.toggle(`hidden`,!g.locked&&g.sensor),h(`pfSlide`).value=Math.round(g.heading)},h(`pfSlide`).oninput=e=>{g.heading=Number(e.target.value),g.dirty=!0},await Tb();let v=setTimeout(()=>{g.sensor||(h(`pfSlideWrap`).classList.remove(`hidden`),h(`pfSub`).textContent=t(`Pas de boussole détectée : faites glisser le curseur pour orienter le profil.`))},1500),y=Ob(e=>{if(g.sensor||(g.sensor=!0,h(`pfSlideWrap`).classList.toggle(`hidden`,!g.locked)),g.locked)return;let t=kb(g.heading,e.heading,.2);Math.abs((t-g.heading+540)%360-180)>.15&&(g.heading=t,g.dirty=!0)}),b=h(`pfCv`),x=h(`pfMini`),S=0,C=!0,w=getComputedStyle(document.documentElement),T=e=>w.getPropertyValue(e).trim();function E(){let t=e.pos(),n=g.pivot===`me`&&t?{x:t.x,y:t.y}:{x:u,y:d},r=g.plane===`face`?g.heading+90:g.heading,i=g.plane===`face`?g.heading:g.heading-90,a=e=>e*Math.PI/180;return{piv:n,ax:Math.sin(a(r)),ay:Math.cos(a(r)),vx:Math.sin(a(i)),vy:Math.cos(a(i)),ha:r,hv:i}}function D(e,t,n,r=360){let i=new Float32Array(r+1);for(let a=0;a<=r;a++){let o=-f+2*f*a/r;i[a]=p(e,t.piv.x+o*t.ax+n*t.vx,t.piv.y+o*t.ay+n*t.vy)}return i}function O(e,t,n=360){let r=new Float32Array(n+1).fill(NaN),i=new Float32Array(n+1).fill(NaN);for(let l=0;l<s;l++)for(let s=0;s<o;s++){let u=e[l*o+s];if(u!==u)continue;let d=c.x0+s*a-t.piv.x,p=c.y0+l*a-t.piv.y,m=Math.round((d*t.ax+p*t.ay+f)/(2*f)*n);m<0||m>n||(r[m]<=u||(r[m]=u),i[m]>=u||(i[m]=u))}return{lo:r,hi:i}}function k(){let i=Math.min(2,window.devicePixelRatio||1),a=b.clientWidth,o=b.clientHeight;(b.width!==Math.round(a*i)||b.height!==Math.round(o*i))&&(b.width=Math.round(a*i),b.height=Math.round(o*i));let s=b.getContext(`2d`);s.setTransform(i,0,0,i,0,0),s.clearRect(0,0,a,o);let c=E(),u={};if(g.mode===`sil`)for(let e of Object.keys(l))u[e]=O(l[e],c,360);else for(let e of Object.keys(l)){let t=D(l[e],c,0,360);u[e]={lo:t,hi:t}}let d=1/0,p=-1/0;for(let e of Object.keys(u))for(let t of[u[e].lo,u[e].hi])for(let e of t)e===e&&(e<d&&(d=e),e>p&&(p=e));let m=e.pos();m&&Number.isFinite(m.z)&&(d=Math.min(d,m.z),p=Math.max(p,m.z)),Number.isFinite(d)||(d=0,p=1);let _={l:46,r:12,t:16,b:30},v=a-_.l-_.r,y=o-_.t-_.b,x=v/(2*f),S=y/Math.max(1,(p-d)*1.1),C=(d+p)/2;g.scale===`true`&&(S=x);let w=e=>_.l+e/360*v,k=e=>_.t+y/2-(e-C)*S,A=e=>_.l+(e+f)*x;s.strokeStyle=T(`--line`),s.fillStyle=T(`--muted`),s.lineWidth=1,s.font=`11px system-ui`;let te=y/S,j=[1,2,5,10,20,25,50,100,200,500].find(e=>te/e<=7)||1e3;for(let e=Math.ceil((C-te/2)/j)*j;e<=C+te/2;e+=j){let t=k(e);t<_.t||t>o-_.b||(s.beginPath(),s.moveTo(_.l,t),s.lineTo(a-_.r,t),s.stroke(),s.fillText(n(e,0),4,t+4))}if(g.mode===`sil`&&l.topo)for(let e=7;e>=1;e--)for(let t of[1]){let n=t*(f*.9*(e-4))/3,r=D(l.topo,c,n,360);s.strokeStyle=`rgba(160,170,180,${.12+.25*(1-e/7)})`,s.lineWidth=1,s.beginPath();let i=!1;for(let e=0;e<=360;e++){let t=r[e];if(t!==t){i=!1;continue}i?s.lineTo(w(e),k(t)):s.moveTo(w(e),k(t)),i=!0}s.stroke()}if(u.topo){let{lo:e,hi:t}=u.topo;s.fillStyle=g.mode===`sil`?`rgba(176,137,96,.35)`:`rgba(176,137,96,.55)`,s.beginPath();let n=!1;for(let r=0;r<=360;r++)t[r]===t[r]&&(n||(s.moveTo(w(r),o-_.b),n=!0),s.lineTo(w(r),k(g.mode===`sil`?t[r]:e[r])));if(n){for(let e=360;e>=0;e--)if(t[e]===t[e]){s.lineTo(w(e),o-_.b);break}s.closePath(),s.fill()}if(g.mode===`sil`){s.fillStyle=T(`--bg`),s.beginPath(),n=!1;for(let r=0;r<=360;r++)e[r]===e[r]&&(n||(s.moveTo(w(r),k(t[r])),n=!0),s.lineTo(w(r),k(t[r])));for(let t=360;t>=0;t--)e[t]===e[t]&&s.lineTo(w(t),k(e[t]));n&&(s.closePath(),s.globalAlpha=.55,s.fill(),s.globalAlpha=1)}}if(g.mode===`cut`&&u.topo&&u.design){s.fillStyle=`rgba(255,176,32,.45)`;let e=u.topo.lo,t=u.design.lo;for(let n=1;n<=360;n++)![e[n-1],e[n],t[n-1],t[n]].every(e=>e===e)||e[n-1]<=t[n-1]&&e[n]<=t[n]||(s.beginPath(),s.moveTo(w(n-1),k(Math.max(e[n-1],t[n-1]))),s.lineTo(w(n)+.6,k(Math.max(e[n],t[n]))),s.lineTo(w(n)+.6,k(t[n])),s.lineTo(w(n-1),k(t[n-1])),s.fill())}let ne=(e,t,n,r)=>{s.strokeStyle=t,s.lineWidth=n,s.setLineDash(r||[]),s.beginPath();let i=!1;for(let t=0;t<=360;t++){let n=e[t];if(n!==n){i=!1;continue}i?s.lineTo(w(t),k(n)):s.moveTo(w(t),k(n)),i=!0}s.stroke(),s.setLineDash([])};if(u.initial&&ne(u.initial.hi,`#a68bff`,1.5,[5,4]),u.design&&ne(u.design.lo,`#ff5a52`,2.2,g.mode===`sil`?[7,4]:null),u.topo&&(ne(u.topo.lo,`#3ddc84`,2.6),g.mode===`sil`&&ne(u.topo.hi,`#c9a27a`,1.5)),m&&Number.isFinite(m.z)){let e=(m.x-c.piv.x)*c.ax+(m.y-c.piv.y)*c.ay,t=(m.x-c.piv.x)*c.vx+(m.y-c.piv.y)*c.vy;Math.abs(e)<=f&&(g.mode===`sil`||Math.abs(t)<40)&&(s.fillStyle=`#1e88ff`,s.strokeStyle=`#fff`,s.lineWidth=2,s.beginPath(),s.arc(A(e),k(m.z),7,0,7),s.fill(),s.stroke())}s.fillStyle=T(`--text`),s.font=`600 13px system-ui`,s.fillText(`◀ `+r(c.ha+180),_.l,o-9);let re=r(c.ha)+` ▶`;s.fillText(re,a-_.r-s.measureText(re).width,o-9),s.fillStyle=T(`--muted`),s.font=`11px system-ui`;let ie=`${n(2*f,0)} m`;if(s.fillText(ie,a/2-s.measureText(ie).width/2,o-9),g.cursor!==null){let e=Math.round((g.cursor-_.l)/v*360);if(e>=0&&e<=360){s.strokeStyle=T(`--text`),s.setLineDash([4,4]),s.beginPath(),s.moveTo(w(e),_.t),s.lineTo(w(e),o-_.b),s.stroke(),s.setLineDash([]);let r=[];u.topo&&r.push(`<b style="color:#3ddc84">${t(`Topo`)} ${n(u.topo.lo[e],1)}</b>`),u.design&&r.push(`<b style="color:#ff5a52">${t(`Design`)} ${n(u.design.lo[e],1)}</b>`),g.mode===`sil`&&u.topo&&r.push(`${t(`bord`)} ${n(u.topo.hi[e],1)}`),h(`pfRead`).innerHTML=`${n(-f+2*f*e/360,0)} m · `+r.join(` · `)}}else h(`pfRead`).innerHTML=g.mode===`sil`?t(`Silhouette : toute la fosse vue de côté (vert = fond, brun = bord, rouge = design)`):t(`Coupe verticale : orange = reste à miner`);h(`pfHead`).textContent=`${t(`Visée`)} ${r(g.heading)} ${n(Mb(g.heading),0)}°`,g.sensor&&!g.locked&&(h(`pfSub`).textContent=g.plane===`face`?t(`Profil vu de face, dans la direction pointée`):t(`Profil dans l'axe de visée (gauche = derrière vous)`)),h(`pfSlideTxt`).textContent=`${n(Mb(g.heading),0)}°`,ee(c)}function ee(t){let n=Math.min(2,window.devicePixelRatio||1);x.width=112*n,x.height=112*n;let r=x.getContext(`2d`);r.setTransform(n,0,0,n,0,0),r.fillStyle=`rgba(13,17,23,.75)`,r.beginPath(),r.arc(56,56,55,0,7),r.fill();let i=48/f,a=(e,t)=>[56+(e-u)*i,56-(t-d)*i];if(e.limitP){r.strokeStyle=`#ff4d4f`,r.lineWidth=1.5,r.beginPath();for(let t=0;t<e.limitP.length;t+=3){let[n,i]=a(e.limitP[t],e.limitP[t+1]);t?r.lineTo(n,i):r.moveTo(n,i)}r.stroke()}let[o,s]=a(t.piv.x,t.piv.y);r.strokeStyle=`#f5a623`,r.lineWidth=2,r.beginPath(),r.moveTo(o-t.ax*f*i,s+t.ay*f*i),r.lineTo(o+t.ax*f*i,s-t.ay*f*i),r.stroke(),r.fillStyle=`#1e88ff`,r.beginPath(),r.moveTo(o+t.vx*18,s-t.vy*18),r.lineTo(o-t.vy*6,s-t.vx*6),r.lineTo(o+t.vy*6,s+t.vx*6),r.fill(),r.fillStyle=`#fff`,r.font=`700 10px system-ui`,r.fillText(`N`,53,11)}let A=()=>{C&&(g.dirty&&(g.dirty=!1,k()),S=requestAnimationFrame(A))},te=setInterval(()=>{e.pos()&&(g.dirty=!0)},1e3);b.onpointerdown=b.onpointermove=e=>{(e.type!==`pointermove`||e.buttons)&&(g.cursor=e.clientX-b.getBoundingClientRect().left,g.dirty=!0)};let j=()=>{g.dirty=!0};window.addEventListener(`resize`,j);let ne=()=>{C=!1,cancelAnimationFrame(S),clearInterval(te),clearTimeout(v),y(),window.removeEventListener(`resize`,j),m.remove(),e.onClose?.()};return h(`pfClose`).onclick=ne,A(),ne}var Pb=180/Math.PI;function Fb(e,t,n){let r=[],i=0;for(let a=0;a<t.length;a+=3){let o=[];for(let r=0;r<3;r++){let i=3*t[a+r],s=3*t[a+(r+1)%3],c=e[i+2]-n,l=e[s+2]-n;if(c<0&&l>=0||c>=0&&l<0){let t=c/(c-l);o.push(e[i]+t*(e[s]-e[i]),e[i+1]+t*(e[s+1]-e[i+1]))}}o.length===4&&(r.push(o[0],o[1],o[2],o[3]),i+=Math.hypot(o[2]-o[0],o[3]-o[1]))}return{seg:r,len:i}}function Ib(e,t,n=.001){let r=(e,t)=>Math.round(e/n)+`:`+Math.round(t/n),i=new Map,a=new Uint8Array(e.length/4);for(let t=0;t<e.length/4;t++)for(let n of[0,1]){let a=r(e[4*t+2*n],e[4*t+2*n+1]);i.has(a)||i.set(a,[]),i.get(a).push([t,n])}let o=[];for(let n=0;n<e.length/4;n++){if(a[n])continue;a[n]=1;let s=[[e[4*n],e[4*n+1]],[e[4*n+2],e[4*n+3]]];for(let t of[1,0])for(;;){let n=t?s[s.length-1]:s[0],o=(i.get(r(n[0],n[1]))||[]).find(([e])=>!a[e]);if(!o)break;let[c,l]=o;a[c]=1;let u=[e[4*c+2*(1-l)],e[4*c+2*(1-l)+1]];t?s.push(u):s.unshift(u)}if(s.length>=3){let e=new Float64Array(s.length*3);s.forEach(([n,r],i)=>{e[3*i]=n,e[3*i+1]=r,e[3*i+2]=t}),o.push(e)}}return o}function Lb(e,t,n={}){let r=lf(e),i=t.length/3,a=new Float64Array(19),o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=new Map;for(let n=0;n<i;n++){let r=3*t[3*n],i=3*t[3*n+1],m=3*t[3*n+2],h=e[i]-e[r],g=e[i+1]-e[r+1],_=e[i+2]-e[r+2],v=e[m]-e[r],y=e[m+1]-e[r+1],b=e[m+2]-e[r+2],x=g*b-_*y,S=_*v-h*b,C=h*y-g*v,w=Math.hypot(x,S,C)/2;if(!(w>0))continue;let T=Math.acos(Math.min(1,Math.abs(C)/(2*w)))*Pb;if(o+=w,s+=Math.abs(C)/2,a[Math.min(18,Math.floor(T/5))]+=w,T>=40)c+=w,l+=w*T;else if(T>=3&&T<15)u+=w,d+=w*T;else if(T<3){f+=w;let t=(e[r+2]+e[i+2]+e[m+2])/3,n=Math.round(t*2)/2;p.set(n,(p.get(n)||0)+Math.abs(C)/2)}}let m=[...p.entries()].sort((e,t)=>e[0]-t[0]),h=[];for(let[e,t]of m){let n=h[h.length-1];n&&e-n.z1<=1?(n.a+=t,n.zw+=e*t,n.z1=e):h.push({a:t,zw:e*t,z1:e})}let g=Math.max(20,f*.002),_=h.filter(e=>e.a>=g).map(e=>({rl:e.zw/e.a,area:e.a})),v=[];for(let e=1;e<_.length;e++)v.push(_[e].rl-_[e-1].rl);v.sort((e,t)=>e-t);let y=n.benchH>0?n.benchH:v.length?v[v.length>>1]:NaN,b=mf(e,t),x=b[0]?.P,S=r.z1;if(x){let e=0;for(let t=2;t<x.length;t+=3)e+=x[t];S=e/(x.length/3)}let C=b[0]?b[0].area:(r.x1-r.x0)*(r.y1-r.y0),w=_[0],T=w?w.area:0,E=S-r.z0,D=Math.sqrt(C/Math.PI),O=Math.sqrt(Math.max(0,T)/Math.PI),k=Math.atan2(E,Math.max(1e-6,D-O))*Pb,ee=r.x1-r.x0,A=r.y1-r.y0,te=90;if(x){let e=x.length/3,t=0,n=0;for(let r=0;r<e;r++)t+=x[3*r],n+=x[3*r+1];t/=e,n/=e;let r=0,i=0,a=0;for(let o=0;o<e;o++){let e=x[3*o]-t,s=x[3*o+1]-n;r+=e*e,i+=s*s,a+=e*s}let o=.5*Math.atan2(2*a,r-i),s=Math.cos(o),c=Math.sin(o),l=1/0,u=-1/0,d=1/0,f=-1/0;for(let r=0;r<e;r++){let e=x[3*r]-t,i=x[3*r+1]-n,a=e*s+i*c,o=-e*c+i*s;l=Math.min(l,a),u=Math.max(u,a),d=Math.min(d,o),f=Math.max(f,o)}ee=u-l,A=f-d,te=((90-o*Pb)%180+180)%180}let j=_.map((n,r)=>{let i=Fb(e,t,n.rl+.3),a=_[r+1];return{rl:n.rl,bermArea:n.area,toeLength:i.len,bermWidth:i.len>0?n.area/i.len:NaN,height:a?a.rl-n.rl:NaN}});return{bounds:r,rimZ:S,floorZ:r.z0,depth:E,length:ee,width:A,azimuth:te,pitArea:C,floorArea:T,area3d:o,areaPlan:s,triangles:i,faceAngle:c?l/c:NaN,rampGrade:u?Math.tan(d/u/Pb)*100:NaN,rampArea:u,overallSlope:k,benchH:y,benches:j,dipHistogram:[...a].map(e=>e/Math.max(1e-9,o)),rimPerimeter:x?Rb(x):NaN}}function Rb(e){let t=0;for(let n=3;n<e.length;n+=3)t+=Math.hypot(e[n]-e[n-3],e[n+1]-e[n-2]);return t}function zb(e,t,n){let r=[];for(let i of n.benches)for(let[a,o]of[[`Pied`,i.rl+.2],[`Crête`,i.rl-.2]]){if(a===`Crête`&&i===n.benches[0])continue;let s=Fb(e,t,o);for(let e of Ib(s.seg,Math.round(i.rl*10)/10))r.push({name:`${a} RL${Math.round(i.rl)}`,P:e,closed:!1})}return r}var Bb={burden:4,spacing:4.5,pattern:`staggered`,angle:NaN,diameter:115,benchH:5,subdrill:.5,stemming:2.5,explosiveDensity:1.15,rockDensity:2.7,explosive:`ANFO / émulsion`,interHole:25,interRow:42,k:1140,beta:1.6,edgeOffset:.5};function Vb(e){let t=0,n=0;for(let r=3;r<e.length;r+=3){let i=e[r]-e[r-3],a=e[r+1]-e[r-2],o=Math.hypot(i,a);o>t&&(t=o,n=Math.atan2(a,i))}return n}function Hb(e,t,n={}){let r={...Bb,...n},i=Number.isFinite(r.angle)?r.angle*Math.PI/180:Vb(e),a=Math.cos(i),o=Math.sin(i),s=lf(e),c=(s.x0+s.x1)/2,l=(s.y0+s.y1)/2,u=Math.hypot(s.x1-s.x0,s.y1-s.y0),d=[],f=Math.ceil(2*u/r.burden)+1,p=(t,n)=>{if(!gf(t,n,e))return!1;if(r.edgeOffset<=0)return!0;for(let i=3;i<e.length;i+=3){let a=e[i-3],o=e[i-2],s=e[i],c=e[i+1],l=s-a,u=c-o,d=l*l+u*u,f=d>0?Math.max(0,Math.min(1,((t-a)*l+(n-o)*u)/d)):0;if(Math.hypot(t-a-f*l,n-o-f*u)<r.edgeOffset)return!1}return!0},m=0;for(let e=0;e<f;e++){let n=-u+e*r.burden,i=r.pattern===`staggered`&&e%2?r.spacing/2:0,s=[];for(let e=-u+i;e<=u;e+=r.spacing){let r=c+e*a-n*o,i=l+e*o+n*a;if(!p(r,i))continue;let u=t(r,i);Number.isFinite(u)&&s.push({x:r,y:i,zc:u,u:e})}s.length&&(m++,s.forEach((e,t)=>d.push({...e,row:m,col:t+1,id:`${String.fromCharCode(64+(m-1)%26+1)}${m>26?Math.ceil(m/26):``}-${String(t+1).padStart(2,`0`)}`})))}let h=r.diameter/1e3,g=Math.PI*h*h/4*r.explosiveDensity*1e3,_=0,v=0;for(let e of d)e.zt=(Number.isFinite(r.floorRL)?r.floorRL:e.zc-r.benchH)-r.subdrill,e.depth=Math.max(0,e.zc-e.zt),e.charge=Math.max(0,e.depth-r.stemming),e.kg=e.charge*g,_+=e.depth,v+=e.kg;let y=Math.abs(hf(e)),b=y*(d.length?d.reduce((e,t)=>e+(t.depth-r.subdrill),0)/d.length:r.benchH),x=b*r.rockDensity,S={params:r,angle:i*180/Math.PI,holes:d,area:y,volume:b,tonnes:x,drillMeters:_,explosiveKg:v,kgPerMeter:g,powderFactor:b>0?v/b:NaN,powderFactorT:x>0?v/x:NaN,yieldPerMeter:_>0?b/_:NaN,rows:m};return Ub(S,d[0]?{x:d[0].x,y:d[0].y}:null),S}function Ub(e,t){let n=e.params,r=e.holes;if(!r.length)return e.mic=0,e;t=t||r[0];let i=new Map;for(let e of r)i.has(e.row)||i.set(e.row,[]),i.get(e.row).push(e);[...i.entries()].map(([e,n])=>({r:e,hs:n,d:Math.min(...n.map(e=>Math.hypot(e.x-t.x,e.y-t.y)))})).sort((e,t)=>e.d-t.d).forEach((e,r)=>{[...e.hs].sort((e,n)=>Math.hypot(e.x-t.x,e.y-t.y)-Math.hypot(n.x-t.x,n.y-t.y)).forEach((e,t)=>{e.t=r*n.interRow+t*n.interHole})});let a=r.map(e=>({t:e.t,kg:e.kg})).sort((e,t)=>e.t-t.t),o=0,s=0,c=0;for(let e=0;e<a.length;e++){for(c+=a[e].kg;a[e].t-a[s].t>=8;)c-=a[s].kg,s++;o=Math.max(o,c)}return e.mic=o,e.duration=Math.max(...r.map(e=>e.t)),e.init=t,e}function Wb(e,t,n=1140,r=1.6){return!(e>0)||!(t>0)?NaN:n*(e/Math.sqrt(t))**+-r}function Gb(e,t,n=1140,r=1.6){return Math.sqrt(t)*(n/e)**(1/r)}var Kb={loaders:[{name:`Pelle 1`,count:1,bucket:12,fill:.9,cycle:30,avail:.85,util:.8}],trucks:{name:`Tombereau`,count:6,payload:90,speedLoaded:18,speedEmpty:30,spot:1,dump:1,queue:1,avail:.85,util:.8},haul:1800,swell:1.3,density:2.6,daysPerMonth:30};function qb(e={}){let t={...Kb,...e,trucks:{...Kb.trucks,...e.trucks||{}}},n=t.density/t.swell,r=t.trucks,i=(t.loaders&&t.loaders.length?t.loaders:Kb.loaders).map(e=>{let t=e.bucket*e.fill*n,i=Math.max(1,Math.ceil(r.payload/Math.max(.01,t))),a=i*e.cycle/60,o=t*3600/e.cycle,s=24*e.avail*e.util;return{...e,perPass:t,passes:i,loadMin:a,tph:o,hours:s,daily:o*s*e.count,truckLoad:Math.min(r.payload,i*t)}}),a=i[0],o=(t.haul/1e3/r.speedLoaded+t.haul/1e3/r.speedEmpty)*60,s=a.loadMin+o+r.spot+r.dump+r.queue,c=24*r.avail*r.util,l=a.truckLoad*60/s,u=l*c,d=i.reduce((e,t)=>e+t.count,0),f=s/a.loadMin*d,p=r.count*a.loadMin/(d*s),m=i.reduce((e,t)=>e+t.daily,0),h=u*r.count,g=Math.min(m,h);return{f:t,loaders:i,travel:o,cycle:s,truckHours:c,truckTph:l,truckDaily:u,trucksNeeded:f,match:p,loaderCap:m,truckCap:h,daily:g,monthly:g*t.daysPerMonth,limiting:m<=h?`chargement`:`transport`,bcmDaily:g/t.density}}var Jb=(e,t)=>t>0?e/t:NaN,Yb=31.1035,Xb=[`ore`,`hg`,`lg`,`marginal`,`oxide`],Zb={hg:3,ore:1.6,lg:.8,marginal:.5,oxide:1.2},Qb={price:2400,recovery:.92,miningCost:3.2,processCost:18,gaCost:4,discount:.08,millRate:35e4};function $b(e,t){let n=[];for(let r of e)for(let e of r.blocks){let i=r.stats?.byId?.[e.id],a=t(e.material),o=Xb.includes(a.key)||a.ore===!0,s=Number.isFinite(e.grade)?e.grade:o?Number.isFinite(a.grade)?a.grade:Zb[a.key]??1:0,c=i?.volume??0,l=i?.remaining??0,u=e._b||(e._b=lf(e.V));n.push({id:e.id,name:e.name,mat:a,isOre:o,density:a.density,grade:s,tTot:c*a.density,tRem:l*a.density,vRem:l,vTot:c,zMin:i?.zMin??u?.z0,zMax:i?.zMax??u?.z1,cx:u?(u.x0+u.x1)/2:NaN,cy:u?(u.y0+u.y1)/2:NaN})}return n}function ex(e,t=Qb){let n=0,r=0,i=0,a=0,o=0,s=0;for(let t of e)t.isOre?(n+=t.tRem,i+=t.tRem*t.grade,a+=t.tTot,s+=t.tTot*t.grade):(r+=t.tRem,o+=t.tTot);let c=n>0?i/n:0,l=i/Yb;return{ore:n,waste:r,total:n+r,sr:n>0?r/n:NaN,grade:c,oz:l,ozRec:l*t.recovery,oreTot:a,wasteTot:o,ozTot:s/Yb,minedPct:a+o>0?1-(n+r)/(a+o):NaN}}function tx(e,t){let n=0,r=0,i=0;for(let a of e){if(!a.isOre||a.tRem<=1)continue;let e=t&&Number.isFinite(a.cx)?t(a.cx,a.cy):NaN;(a.tRem<a.tTot*.995||Number.isFinite(e)&&e<=a.zMax+.5)&&(n+=a.tRem,r+=a.tRem*a.grade,i++)}return{tonnes:n,grade:n>0?r/n:0,oz:r/Yb,blocks:i}}function nx(e,t,n=120,r=1/0){let i=e.filter(e=>e.tRem>1).map(e=>({...e,left:e.tRem})).sort((e,t)=>t.zMax-e.zMax||(e.name<t.name?-1:1)),a=[],o=0;for(;o<i.length&&a.length<n&&t>0;){let e={ore:0,waste:0,gt:0,benches:new Set,blocks:0},n=t,s=r;for(;n>1&&o<i.length;){let t=i[o],r=Math.min(t.left,n);if(t.isOre&&(r=Math.min(r,s)),r<=1||(t.left-=r,n-=r,t.isOre?(e.ore+=r,e.gt+=r*t.grade,s-=r):e.waste+=r,e.benches.add(Math.round(t.zMin)),t.left<=1&&(o++,e.blocks++),t.isOre&&s<=1))break}if(e.ore+e.waste<=1)break;e.grade=e.ore>0?e.gt/e.ore:0,e.oz=e.gt/Yb,e.sr=e.ore>0?e.waste/e.ore:NaN,e.benches=[...e.benches].sort((e,t)=>t-e),a.push(e)}return a}function rx(e,t={}){let n={...Qb,...t},r=0,i=0,a=0,o=0,s=e.map((e,t)=>{let s=e.oz*n.recovery*n.price,c=(e.ore+e.waste)*n.miningCost+e.ore*(n.processCost+n.gaCost),l=s-c;return i+=l,a+=s,o+=c,r+=l/(1+n.discount)**((t+1)/12),{rev:s,cost:c,cash:l,cum:i}}),c=(n.processCost+n.gaCost)/(n.price/Yb*n.recovery);return{rows:s,npv:r,revenue:a,cost:o,cash:a-o,cutoff:c,e:n}}function ix(e,t,n,r,i=new Date().toISOString().slice(0,10)){let a=e.filter(e=>e.date>=t&&e.date<=n&&e.date<=i),o=e=>a.reduce((t,n)=>t+(Number(n[e])||0),0),s=o(`oreT`),c=o(`wasteT`),l=o(`drillM`),u=o(`millT`),d=a.reduce((e,t)=>e+(Number(t.oreT)||0)*(Number(t.grade)||0),0),f=Math.max(1,Math.round((Date.parse(n)-Date.parse(t))/864e5)+1),p=Math.max(0,Math.min(f,Math.round((Date.parse(i)-Date.parse(t))/864e5)+1)),m=p/f,h=r||{},g=(e,t)=>t>0?e/(t*m):NaN;return{days:f,elapsed:p,records:a.length,ore:s,waste:c,total:s+c,drill:l,milled:u,grade:s>0?d/s:0,oz:d/Yb,sr:s>0?c/s:NaN,oreVs:g(s,h.oreT),wasteVs:g(c,h.wasteT),totalVs:g(s+c,(h.oreT||0)+(h.wasteT||0)),drillVs:g(l,h.drillM),dailyNeeded:f>p?Math.max(0,((h.oreT||0)+(h.wasteT||0)-s-c)/(f-p)):0,oreDailyNeeded:f>p?Math.max(0,(h.oreT||0)-s)/(f-p):0}}function ax(e=new Date){let t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),n=(t.getUTCDay()+6)%7,r=new Date(t-n*864e5),i=new Date(+r+5184e5),a=new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),1)),o=new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth()+1,0)),s=new Date(Date.UTC(t.getUTCFullYear(),Math.floor(t.getUTCMonth()/3)*3,1)),c=new Date(Date.UTC(t.getUTCFullYear(),Math.floor(t.getUTCMonth()/3)*3+3,0)),l=new Date(Date.UTC(t.getUTCFullYear(),0,1)),u=new Date(Date.UTC(t.getUTCFullYear(),11,31)),d=e=>e.toISOString().slice(0,10);return{today:d(t),week:[d(r),d(i)],month:[d(a),d(o)],quarter:[d(s),d(c)],year:[d(l),d(u)]}}function ox(e,t,n,r){let i=(Date.parse(r)-Date.parse(t))/864e5;return i>0?(e-n)/i*30:NaN}function sx(e){let t=e.split(/\r?\n/).filter(e=>e.trim());if(!t.length)return[];let n=[`;`,`	`,`,`].find(e=>t[0].includes(e))||`;`,r=t[0].split(n).map(e=>e.trim().toLowerCase()),i=(...e)=>r.findIndex(t=>e.some(e=>t.includes(e))),a=i(`date`,`jour`,`day`),o=i(`minerai`,`ore`),s=i(`stérile`,`sterile`,`waste`),c=i(`teneur`,`grade`,`g/t`),l=i(`forage`,`drill`,`métr`),u=i(`usine`,`mill`,`broy`),d=e=>{let t=parseFloat(String(e??``).replace(/\s/g,``).replace(`,`,`.`));return Number.isFinite(t)?t:0},f=e=>{e=String(e||``).trim();let t=e.match(/^(\d{4})-(\d{2})-(\d{2})/);return t?`${t[1]}-${t[2]}-${t[3]}`:(t=e.match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{2,4})/),t?`${t[3].length===2?`20`+t[3]:t[3]}-${t[2].padStart(2,`0`)}-${t[1].padStart(2,`0`)}`:null)},p=[];for(let e of t.slice(1)){let t=e.split(n),r=f(t[a>=0?a:0]);r&&p.push({date:r,oreT:o>=0?d(t[o]):0,wasteT:s>=0?d(t[s]):0,grade:c>=0?d(t[c]):0,drillM:l>=0?d(t[l]):0,millT:u>=0?d(t[u]):0})}return p}var cx=e=>getComputedStyle(document.documentElement).getPropertyValue(e).trim();function lx(e){let t=Math.min(2.5,window.devicePixelRatio||1),n=e.clientWidth||320,r=e.clientHeight||200;e.width=Math.round(n*t),e.height=Math.round(r*t);let i=e.getContext(`2d`);return i.setTransform(t,0,0,t,0,0),i.clearRect(0,0,n,r),i.font=`11px system-ui`,{g:i,W:n,H:r}}var ux=(e,t=5)=>{let n=e/t,r=10**Math.floor(Math.log10(n||1));return[1,2,2.5,5,10].map(e=>e*r).find(e=>e>=n)||r*10},dx=e=>Math.abs(e)>=1e6?(e/1e6).toFixed(1)+`M`:Math.abs(e)>=1e3?(e/1e3).toFixed(0)+`k`:e.toFixed(+(e<10));function fx(e,t,n,r={}){let{g:i,W:a,H:o}=lx(e),s={l:40,r:r.line?38:10,t:18,b:26},c=t.length;if(!c)return;let l=t.map((e,t)=>n.reduce((e,n)=>e+(n.values[t]||0),0)),u=Math.max(1,...l,...r.target?[r.target]:[]),d=ux(u),f=Math.ceil(u/d)*d,p=e=>o-s.b-e/f*(o-s.t-s.b),m=(a-s.l-s.r)/c;i.strokeStyle=cx(`--line`),i.fillStyle=cx(`--muted`),i.lineWidth=1;for(let e=0;e<=f+1e-9;e+=d)i.beginPath(),i.moveTo(s.l,p(e)),i.lineTo(a-s.r,p(e)),i.stroke(),i.fillText(dx(e),2,p(e)+4);if(t.forEach((e,t)=>{let r=0;for(let e of n){let n=e.values[t]||0;i.fillStyle=e.color;let a=s.l+t*m+m*.15,o=m*.7;i.fillRect(a,p(r+n),o,p(r)-p(r+n)),r+=n}(c<=16||t%Math.ceil(c/12)===0)&&(i.fillStyle=cx(`--muted`),i.save(),i.translate(s.l+t*m+m/2,o-s.b+13),i.textAlign=`center`,i.fillText(e,0,0),i.restore())}),r.target&&(i.strokeStyle=`#ff4d4f`,i.setLineDash([5,4]),i.beginPath(),i.moveTo(s.l,p(r.target)),i.lineTo(a-s.r,p(r.target)),i.stroke(),i.setLineDash([])),r.line){let e=r.line,t=Math.max(1e-9,...e.values.filter(Number.isFinite))*1.15,n=e=>o-s.b-e/t*(o-s.t-s.b);i.strokeStyle=e.color,i.lineWidth=2,i.beginPath(),e.values.forEach((e,t)=>{if(!Number.isFinite(e))return;let r=s.l+t*m+m/2;t?i.lineTo(r,n(e)):i.moveTo(r,n(e))}),i.stroke(),i.fillStyle=e.color,i.textAlign=`right`;for(let e=0;e<=4;e++){let r=t/4*e;i.fillText(r.toFixed(+(r<10)),a-2,n(r)+4)}i.textAlign=`left`}let h=s.l;i.font=`11px system-ui`;for(let e of[...n,...r.line?[r.line]:[]])i.fillStyle=e.color,i.fillRect(h,4,10,10),i.fillStyle=cx(`--text`),i.fillText(e.name,h+14,13),h+=i.measureText(e.name).width+28}function px(e,t,n){let{g:r,W:i,H:a}=lx(e),o=i/2,s=a*.62,c=Math.min(i/2,a*.62)-8;r.lineWidth=12,r.lineCap=`round`,r.strokeStyle=cx(`--line`),r.beginPath(),r.arc(o,s,c,Math.PI,2*Math.PI),r.stroke();let l=Number.isFinite(t)?Math.max(0,Math.min(1.3,t)):0;r.strokeStyle=Number.isFinite(t)?t>=.97?`#2fbf5b`:t>=.85?`#ffb020`:`#ff4d4f`:cx(`--muted`),r.beginPath(),r.arc(o,s,c,Math.PI,Math.PI+Math.PI*Math.min(1,l/1.3)),r.stroke(),r.fillStyle=cx(`--text`),r.textAlign=`center`,r.font=`800 20px system-ui`,r.fillText(Number.isFinite(t)?Math.round(t*100)+` %`:`—`,o,s-4),r.font=`11px system-ui`,r.fillStyle=cx(`--muted`),r.fillText(n||``,o,s+14)}var mx=(e,t)=>{let n=parseFloat(String(e??``).replace(/\s/g,``).replace(`,`,`.`));return Number.isFinite(n)?n:t},hx={fr:[`janv`,`févr`,`mars`,`avr`,`mai`,`juin`,`juil`,`août`,`sept`,`oct`,`nov`,`déc`],en:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`]};function W(e,t,n=``,r=``){return`<div class="kpi ${n}"><small>${e}</small><b>${t}</b>${r?`<em>${r}</em>`:``}</div>`}function G(e,t,n,r,i=`any`){return`<label class="f">${e.t(n)}<input id="${t}" type="number" inputmode="decimal" step="${i}" value="${r??``}"></label>`}function gx(e){let t=e.byRole(`design`);if(!t)return e.open(e.t(`Design`),`<div class="card small">${e.t(`Importez d'abord un pit design (.00t, .dtm, .dxf…).`)}</div>`);t._an||(t._an=Lb(t.V,t.T,{benchH:e.P.benchH}));let n=t._an,r=e.fmt,i=e.S.lastVol;e.open(e.t(`Design`),`
    <div class="kpis">
      ${W(e.t(`Profondeur`),r(n.depth,1)+` m`,`hi`)}
      ${W(e.t(`Pente globale`),r(n.overallSlope,1)+`°`,`hi`)}
      ${W(e.t(`RL du bord`),`RL `+r(n.rimZ,1))}
      ${W(e.t(`RL du fond`),`RL `+r(n.floorZ,1))}
      ${W(e.t(`Longueur × largeur`),`${r(n.length,0)} × ${r(n.width,0)} m`,``,`${e.t(`axe`)} ${r(n.azimuth,0)}°`)}
      ${W(e.t(`Emprise`),r(n.pitArea/1e4,2)+` ha`,``,`${e.t(`périmètre`)} ${r(n.rimPerimeter,0)} m`)}
      ${W(e.t(`Angle de talus moyen`),r(n.faceAngle,1)+`°`)}
      ${W(e.t(`Hauteur de banc`),r(n.benchH,1)+` m`,``,`${n.benches.length} ${e.t(`gradins`)}`)}
      ${W(e.t(`Pente des rampes`),Number.isFinite(n.rampGrade)?r(n.rampGrade,1)+` %`:`—`,``,`${r(n.rampArea/1e4,2)} ha`)}
      ${W(e.t(`Surface du fond`),r(n.floorArea/1e4,2)+` ha`)}
    </div>
    ${i?`<p class="small muted">${e.t(`Reste à miner (dernier calcul)`)} : <b>${e.fmtVol(i.remaining)}m³</b> · ${e.fmtVol(i.remainingTonnes)}t</p>`:``}
    <h3>${e.t(`Répartition des pendages`)}</h3>
    <canvas class="chart" id="dHist" style="height:160px"></canvas>
    <h3>${e.t(`Gradins`)}</h3>
    <table class="t"><tr><th>RL</th><th class="n">${e.t(`Haut.`)}</th><th class="n">${e.t(`Berme`)}</th><th class="n">${e.t(`Pied`)}</th><th class="n">${e.t(`Surface`)}</th></tr>
      ${[...n.benches].reverse().map(e=>`<tr><td>RL ${r(e.rl,1)}</td><td class="n">${r(e.height,1)}</td><td class="n">${r(e.bermWidth,1)} m</td><td class="n">${r(e.toeLength,0)} m</td><td class="n">${r(e.bermArea,0)} m²</td></tr>`).join(``)}
    </table>
    <p class="small muted">${e.t(`Berme = surface plane du gradin / longueur du pied. Pente globale = profondeur / (rayon du bord − rayon du fond).`)}</p>
    <div class="stack" style="margin-top:10px">
      <button class="btn primary block" id="dLines">${e.I.layers} ${e.t(`Générer crêtes et pieds`)}</button>
      <button class="btn block" id="dFloor">${e.I.compass3d} ${e.t(`Vue terrain depuis le fond de fosse`)}</button>
      <button class="btn block" id="dCsv">${e.I.download} ${e.t(`Exporter les gradins (CSV)`)}</button>
    </div>`,()=>{let r=n.dipHistogram.map((e,t)=>`${t*5}`);fx(document.getElementById(`dHist`),r,[{name:e.t(`% de surface par pendage (°)`),color:`#5fe3ff`,values:n.dipHistogram.map(e=>e*100)}]),document.getElementById(`dLines`).onclick=async()=>{let r=zb(t.V,t.T,n);await e.addLines(e.t(`Crêtes et pieds — {0}`,t.name),r,`#ffe066`),e.toast(e.t(`{0} ligne(s) créée(s)`,r.length))},document.getElementById(`dFloor`).onclick=()=>{let n=e.layerBounds(t);e.closeSheet(),e.enterTerrain({x:(n.x0+n.x1)/2,y:(n.y0+n.y1)/2,virtual:!0})},document.getElementById(`dCsv`).onclick=()=>e.exportFile(`${e.P.name}_gradins.csv`,e.csv([[`RL`,e.t(`Hauteur (m)`),e.t(`Berme (m)`),e.t(`Longueur du pied (m)`),e.t(`Surface de berme (m²)`)],...n.benches.map(e=>[e.rl,e.height,e.bermWidth,e.toeLength,e.bermArea])]),`text/csv`)})}function _x(e){return $b(e.blockLayers(),e.matOf)}function vx(e){let t=e.P;return t.targets=t.targets||{oreT:3e5,wasteT:9e5,grade:1.6,drillM:25e3,millT:3e5},t.actuals=t.actuals||[],t.econ={...Qb,...t.econ||{}},t.fleet=t.fleet||JSON.parse(JSON.stringify(Kb)),t.blasts=t.blasts||[],t}function yx(e,t,n=new Date){let r=new Date(n.getFullYear(),n.getMonth()+t,1);return`${hx[e.lang()===`en`?`en`:`fr`][r.getMonth()]} ${String(r.getFullYear()).slice(2)}`}function bx(e,t=e.S.stPeriod||`month`){let n=vx(e),r=e.fmt;e.S.stPeriod=t;let i=ax(),[a,o]=i[t],s=Math.round((Date.parse(o)-Date.parse(a))/864e5)+1,c=t===`week`?7/30.4:t===`quarter`?3:t===`year`?12:1,l={oreT:n.targets.oreT*c,wasteT:n.targets.wasteT*c,drillM:n.targets.drillM*c},u=ix(n.actuals,a,o,l),d=_x(e),f=e.byRole(`topo`),p=tx(d,f?(t,n)=>e.surf(f).zAt(t,n):null),m=n.targets.oreT/30.4,h=e.layers.filter(e=>e.kind===`mesh`&&(e.role===`topo`||e.role===`survey`)&&e.date).sort((e,t)=>String(t.date).localeCompare(String(e.date))),g=h.length>=2?ox(e.layerBounds(h[1]).z0,h[1].date,e.layerBounds(h[0]).z0,h[0].date):NaN,_=e.S.lastVol,v=_&&_.onGradeArea!==void 0?_.onGradeArea/Math.max(1,_.onGradeArea+_.overbreakArea):NaN,y=n.actuals.filter(e=>e.date>=a&&e.date<=o).sort((e,t)=>e.date.localeCompare(t.date));e.open(e.t(`Court terme`),`
    <div class="seg" id="stPer">${[[`week`,`Semaine`],[`month`,`Mois`],[`quarter`,`Trimestre`],[`year`,`Année`]].map(([n,r])=>`<button data-v="${n}" class="${n===t?`on`:``}">${e.t(r)}</button>`).join(``)}</div>
    <p class="small muted">${a} → ${o} · ${e.t(`jour {0} / {1}`,u.elapsed,s)} · ${u.records} ${e.t(`rapport(s)`)}</p>
    <div class="gauges"><canvas id="gOre"></canvas><canvas id="gTot"></canvas><canvas id="gDrill"></canvas></div>
    <div class="kpis">
      ${W(e.t(`Minerai réalisé`),e.fmtVol(u.ore)+`t`,`hi`,`${e.t(`objectif`)} ${e.fmtVol(l.oreT)}t`)}
      ${W(e.t(`Stérile réalisé`),e.fmtVol(u.waste)+`t`,``,`${e.t(`objectif`)} ${e.fmtVol(l.wasteT)}t`)}
      ${W(e.t(`Teneur`),r(u.grade,2)+` g/t`,``,`${e.t(`objectif`)} ${r(n.targets.grade,2)}`)}
      ${W(e.t(`Onces contenues`),r(u.oz,0)+` oz`)}
      ${W(e.t(`Ratio stérile / minerai`),r(u.sr,2))}
      ${W(e.t(`Forage`),r(u.drill,0)+` m`,``,`${e.t(`objectif`)} ${r(l.drillM,0)} m`)}
      ${W(e.t(`Cadence requise`),e.fmtVol(u.dailyNeeded)+`t/j`,u.dailyNeeded>(n.targets.oreT+n.targets.wasteT)/30.4*1.1?`warn`:``,e.t(`pour atteindre l'objectif`))}
      ${W(e.t(`Minerai exposé`),e.fmtVol(p.tonnes)+`t`,`hi`,`${r(p.grade,2)} g/t · ${p.blocks} ${e.t(`blocs`)}`)}
      ${W(e.t(`Jours de minerai exposé`),r(p.tonnes/Math.max(1,m),1)+` j`,p.tonnes/Math.max(1,m)<7?`warn`:``,e.t(`au rythme objectif`))}
      ${W(e.t(`Approfondissement`),Number.isFinite(g)?r(g,1)+` m/mois`:`—`,``,h.length>=2?`${h[1].date} → ${h[0].date}`:e.t(`2 levés datés requis`))}
      ${W(e.t(`Conformité plancher`),Number.isFinite(v)?r(v*100,0)+` %`:`—`,``,e.t(`surfaces au design / atteintes`))}
    </div>
    <h3>${e.t(`Réalisé journalier`)}</h3>
    <canvas class="chart" id="stChart"></canvas>
    <h3>${e.t(`Saisir une journée`)}</h3>
    <div class="fields three">
      <label class="f">${e.t(`Date`)}<input id="aD" type="date" value="${i.today}"></label>
      ${G(e,`aO`,`Minerai (t)`,``)}${G(e,`aW`,`Stérile (t)`,``)}
      ${G(e,`aG`,`Teneur (g/t)`,``)}${G(e,`aR`,`Forage (m)`,``)}${G(e,`aM`,`Usine (t)`,``)}
    </div>
    <div class="row" style="margin-top:8px"><button class="btn primary grow" id="aAdd">${e.I.plus} ${e.t(`Enregistrer`)}</button>${e.importBtn(`actuals`,`btn`,`${e.I.upload} CSV`)}<button class="btn" id="aExp">${e.I.download}</button></div>
    <p class="small muted">${e.t(`Import CSV : colonnes Date ; Minerai ; Stérile ; Teneur ; Forage ; Usine (séparateur ; ou ,).`)}</p>
    <div>${y.slice(-10).reverse().map(t=>`<div class="list-item"><div class="grow"><b>${t.date}</b><small class="muted">${e.t(`Minerai`)} ${r(t.oreT,0)} t · ${e.t(`Stérile`)} ${r(t.wasteT,0)} t · ${r(t.grade,2)} g/t · ${r(t.drillM,0)} m</small></div><button class="btn ghost danger" data-del="${t.date}">${e.I.trash}</button></div>`).join(``)}</div>
    <h3>${e.t(`Objectifs mensuels`)}</h3>
    <div class="fields three">${G(e,`tO`,`Minerai (t)`,n.targets.oreT)}${G(e,`tW`,`Stérile (t)`,n.targets.wasteT)}${G(e,`tG`,`Teneur (g/t)`,n.targets.grade)}${G(e,`tR`,`Forage (m)`,n.targets.drillM)}${G(e,`tM`,`Usine (t)`,n.targets.millT)}</div>`,r=>{px(document.getElementById(`gOre`),u.oreVs,e.t(`Minerai`)),px(document.getElementById(`gTot`),u.totalVs,e.t(`Total déplacé`)),px(document.getElementById(`gDrill`),u.drillVs,e.t(`Forage`));let s=[];for(let e=Date.parse(a);e<=Math.min(Date.parse(o),Date.parse(i.today));e+=864e5)s.push(new Date(e).toISOString().slice(0,10));let c=e=>s.map(t=>n.actuals.filter(e=>e.date===t).reduce((t,n)=>t+(Number(n[e])||0),0));fx(document.getElementById(`stChart`),s.map(e=>e.slice(8)),[{name:e.t(`Minerai`),color:`#e8473b`,values:c(`oreT`)},{name:e.t(`Stérile`),color:`#8d99a6`,values:c(`wasteT`)}],{target:(n.targets.oreT+n.targets.wasteT)/30.4}),document.getElementById(`stPer`).onclick=t=>{let n=t.target.closest(`[data-v]`);n&&bx(e,n.dataset.v)},document.getElementById(`aAdd`).onclick=()=>{let r={date:document.getElementById(`aD`).value,oreT:mx(document.getElementById(`aO`).value,0),wasteT:mx(document.getElementById(`aW`).value,0),grade:mx(document.getElementById(`aG`).value,0),drillM:mx(document.getElementById(`aR`).value,0),millT:mx(document.getElementById(`aM`).value,0)};if(!r.date)return e.toast(e.t(`Date requise`));n.actuals=n.actuals.filter(e=>e.date!==r.date).concat(r),e.saveP(),e.toast(e.t(`Journée enregistrée`)),bx(e,t)},document.getElementById(`aExp`).onclick=()=>e.exportFile(`${n.name}_realise.csv`,e.csv([[`Date`,e.t(`Minerai (t)`),e.t(`Stérile (t)`),e.t(`Teneur (g/t)`),e.t(`Forage (m)`),e.t(`Usine (t)`)],...[...n.actuals].sort((e,t)=>e.date.localeCompare(t.date)).map(e=>[e.date,e.oreT,e.wasteT,e.grade,e.drillM,e.millT])]),`text/csv`),r.onclick=r=>{let i=r.target.closest(`[data-del]`);i&&(n.actuals=n.actuals.filter(e=>e.date!==i.dataset.del),e.saveP(),bx(e,t))};let l=(r,i)=>{document.getElementById(r).onchange=r=>{n.targets[i]=mx(r.target.value,n.targets[i]),e.saveP(),bx(e,t)}};l(`tO`,`oreT`),l(`tW`,`wasteT`),l(`tG`,`grade`),l(`tR`,`drillM`),l(`tM`,`millT`)})}function xx(e){let t=vx(e),n=e.fmt,r=_x(e);if(!r.length)return e.open(e.t(`Moyen terme`),`<div class="card small">${e.t(`Le moyen terme s'appuie sur les blocs de matériaux : importez-les dans Mine → Blocs (ou chargez la démo).`)}</div>`);let i=qb(t.fleet);t.mtCap=t.mtCap||Math.round(t.targets.oreT+t.targets.wasteT||i.monthly);let a=Math.min(36,t.mtMonths||12),o=nx(r,t.mtCap,a,t.econ.millRate||1/0),s=new Map;for(let e of r){if(e.tRem<=1)continue;let t=Math.round(e.zMin),n=s.get(t)||{ore:0,waste:0,gt:0};e.isOre?(n.ore+=e.tRem,n.gt+=e.tRem*e.grade):n.waste+=e.tRem,s.set(t,n)}let c=[...s.entries()].sort((e,t)=>t[0]-e[0]);e.open(e.t(`Moyen terme`),`
    <div class="fields three">${G(e,`mCap`,`Capacité (t/mois)`,t.mtCap)}${G(e,`mMill`,`Usine (t/mois)`,t.econ.millRate)}${G(e,`mN`,`Horizon (mois)`,a,1)}</div>
    <p class="small muted">${e.t(`Capacité flotte calculée : {0} t/mois (module Production).`,e.fmtVol(i.monthly))} <button class="btn ghost" id="mUseFleet" style="padding:4px 8px">${e.t(`Utiliser`)}</button></p>
    <canvas class="chart" id="mChart" style="height:240px"></canvas>
    <table class="t"><tr><th>${e.t(`Mois`)}</th><th class="n">${e.t(`Minerai`)}</th><th class="n">${e.t(`Stérile`)}</th><th class="n">SR</th><th class="n">g/t</th><th class="n">oz</th><th>${e.t(`Bancs`)}</th></tr>
      ${o.map((t,r)=>`<tr><td>${yx(e,r+1)}</td><td class="n">${e.fmtVol(t.ore)}</td><td class="n">${e.fmtVol(t.waste)}</td><td class="n">${n(t.sr,1)}</td><td class="n">${n(t.grade,2)}</td><td class="n">${n(t.oz,0)}</td><td class="small">${t.benches.slice(0,3).map(e=>`RL`+e).join(` `)}</td></tr>`).join(``)}
    </table>
    <p class="small muted">${e.t(`Ordre de minage : banc par banc, du haut vers le bas, minerai plafonné par la capacité de l'usine.`)}</p>
    <h3>${e.t(`Réserves restantes par banc`)}</h3>
    <table class="t"><tr><th>${e.t(`Banc`)}</th><th class="n">${e.t(`Minerai (t)`)}</th><th class="n">${e.t(`Stérile (t)`)}</th><th class="n">g/t</th><th class="n">oz</th></tr>
      ${c.map(([e,t])=>`<tr><td>RL ${e}</td><td class="n">${n(t.ore,0)}</td><td class="n">${n(t.waste,0)}</td><td class="n">${n(t.ore>0?t.gt/t.ore:0,2)}</td><td class="n">${n(t.gt/Yb,0)}</td></tr>`).join(``)}
    </table>
    <button class="btn block" id="mCsv" style="margin-top:10px">${e.I.download} ${e.t(`Exporter le plan (CSV)`)}</button>`,()=>{fx(document.getElementById(`mChart`),o.map((t,n)=>yx(e,n+1)),[{name:e.t(`Minerai`),color:`#e8473b`,values:o.map(e=>e.ore)},{name:e.t(`Stérile`),color:`#8d99a6`,values:o.map(e=>e.waste)}],{line:{name:`g/t`,color:`#ffd400`,values:o.map(e=>e.grade)}}),document.getElementById(`mCap`).onchange=n=>{t.mtCap=mx(n.target.value,t.mtCap),e.saveP(),xx(e)},document.getElementById(`mMill`).onchange=n=>{t.econ.millRate=mx(n.target.value,t.econ.millRate),e.saveP(),xx(e)},document.getElementById(`mN`).onchange=n=>{t.mtMonths=Math.max(1,Math.round(mx(n.target.value,12))),e.saveP(),xx(e)},document.getElementById(`mUseFleet`).onclick=()=>{t.mtCap=Math.round(i.monthly),e.saveP(),xx(e)},document.getElementById(`mCsv`).onclick=()=>e.exportFile(`${t.name}_plan_moyen_terme.csv`,e.csv([[e.t(`Mois`),e.t(`Minerai (t)`),e.t(`Stérile (t)`),`SR`,`g/t`,`oz`,e.t(`Bancs`)],...o.map((t,n)=>[yx(e,n+1),t.ore,t.waste,t.sr,t.grade,t.oz,t.benches.join(` `)])]),`text/csv`)})}function Sx(e){let t=vx(e),n=e.fmt,r=t.econ,i=_x(e);if(!i.length)return e.open(e.t(`Long terme`),`<div class="card small">${e.t(`Le long terme s'appuie sur les blocs de matériaux : importez-les dans Mine → Blocs (ou chargez la démo).`)}</div>`);let a=ex(i,r),o=t.mtCap||t.targets.oreT+t.targets.wasteT,s=nx(i,o,600,r.millRate||1/0),c=rx(s,r),l=s.length,u=i.filter(e=>e.isOre&&e.tRem>1),d=Math.max(.5,...u.map(e=>e.grade)),f=Array.from({length:11},(e,t)=>d*t/10).map(e=>{let t=u.filter(t=>t.grade>=e),n=t.reduce((e,t)=>e+t.tRem,0);return{cg:e,t:n,g:n>0?t.reduce((e,t)=>e+t.tRem*t.grade,0)/n:0}});e.open(e.t(`Long terme`),`
    <div class="kpis">
      ${W(e.t(`Minerai restant`),e.fmtVol(a.ore)+`t`,`hi`,`${n(a.grade,2)} g/t`)}
      ${W(e.t(`Stérile restant`),e.fmtVol(a.waste)+`t`)}
      ${W(e.t(`Ratio stérile / minerai`),n(a.sr,2))}
      ${W(e.t(`Onces contenues`),n(a.oz,0)+` oz`,`hi`,`${n(a.ozRec,0)} oz ${e.t(`récupérables`)}`)}
      ${W(e.t(`Durée de vie restante`),n(l,0)+` `+e.t(`mois`),``,`${n(l/12,1)} ${e.t(`ans`)} · ${e.fmtVol(o)}t/${e.t(`mois`)}`)}
      ${W(e.t(`Déjà miné`),Number.isFinite(a.minedPct)?n(a.minedPct*100,1)+` %`:`—`)}
      ${W(e.t(`VAN`),n(c.npv/1e6,1)+` M$`,`hi`,`${e.t(`taux`)} ${n(r.discount*100,0)} %`)}
      ${W(e.t(`Flux de trésorerie`),n(c.cash/1e6,1)+` M$`,``,`${e.t(`revenu`)} ${n(c.revenue/1e6,0)} M$`)}
      ${W(e.t(`Teneur de coupure`),n(c.cutoff,2)+` g/t`,``,e.t(`marginale (usine + G&A)`))}
      ${W(e.t(`Coût par once`),a.ozRec>0?n(c.cost/a.ozRec,0)+` $/oz`:`—`)}
    </div>
    <h3>${e.t(`Trésorerie cumulée (M$)`)}</h3>
    <canvas class="chart" id="lCash"></canvas>
    <h3>${e.t(`Courbe teneur – tonnage`)}</h3>
    <canvas class="chart" id="lGT"></canvas>
    <h3>${e.t(`Hypothèses économiques`)}</h3>
    <div class="fields three">
      ${G(e,`ePrice`,`Prix ($/oz)`,r.price)}${G(e,`eRec`,`Récupération (%)`,r.recovery*100)}${G(e,`eMine`,`Minage ($/t)`,r.miningCost)}
      ${G(e,`eProc`,`Traitement ($/t)`,r.processCost)}${G(e,`eGA`,`G&A ($/t minerai)`,r.gaCost)}${G(e,`eDisc`,`Actualisation (%)`,r.discount*100)}
    </div>
    <p class="small muted">${e.t(`Teneurs : saisies par bloc (Blocs → fiche du bloc) ou par défaut selon le matériau. Ordonnancement banc par banc à la capacité du moyen terme.`)}</p>`,()=>{let n=Math.max(1,Math.ceil(s.length/24)),i=s.map((e,t)=>t).filter(e=>e%n===0||e===s.length-1);fx(document.getElementById(`lCash`),i.map(e=>`M${e+1}`),[{name:e.t(`Flux mensuel`),color:`#3ddc84`,values:i.map(e=>Math.max(0,c.rows[e].cash/1e6))}],{line:{name:e.t(`Cumul`),color:`#ffd400`,values:i.map(e=>c.rows[e].cum/1e6)}}),fx(document.getElementById(`lGT`),f.map(e=>e.cg.toFixed(1)),[{name:e.t(`Minerai au-dessus de la coupure (t)`),color:`#e8473b`,values:f.map(e=>e.t)}],{line:{name:e.t(`Teneur moyenne (g/t)`),color:`#ffd400`,values:f.map(e=>e.g)}});let a=(n,i,a=1)=>{document.getElementById(n).onchange=n=>{r[i]=mx(n.target.value,r[i]*a)/a,t.econ=r,e.saveP(),Sx(e)}};a(`ePrice`,`price`),a(`eRec`,`recovery`,100),a(`eMine`,`miningCost`),a(`eProc`,`processCost`),a(`eGA`,`gaCost`),a(`eDisc`,`discount`,100)})}function Cx(e){let t=vx(e),n=e.fmt,r=t.fleet,i=r.loaders[0],a=r.trucks,o=qb(r),s=o.loaders[0],c=_x(e).reduce((e,t)=>e+t.tRem,0)||(e.S.lastVol?.remainingTonnes??0);e.open(e.t(`Production`),`
    <div class="kpis">
      ${W(e.t(`Capacité journalière`),e.fmtVol(o.daily)+`t`,`hi`,`${e.fmtVol(o.bcmDaily)}m³ · ${e.t(`limité par le`)} ${e.t(o.limiting)}`)}
      ${W(e.t(`Camions nécessaires`),n(o.trucksNeeded,1),o.trucksNeeded>a.count?`warn`:`hi`,`${a.count} ${e.t(`affectés`)}`)}
      ${W(e.t(`Facteur d'adéquation`),n(o.match,2),Math.abs(o.match-1)>.15?`warn`:``,o.match<1?e.t(`pelle en attente`):e.t(`camions en file`))}
      ${W(e.t(`Cycle camion`),n(o.cycle,1)+` min`,``,`${e.t(`trajet`)} ${n(o.travel,1)} · ${e.t(`chargement`)} ${n(s.loadMin,1)}`)}
      ${W(e.t(`Passes par camion`),s.passes,``,`${n(s.perPass,1)} t/${e.t(`passe`)} · ${n(s.truckLoad,0)} t`)}
      ${W(e.t(`Productivité pelle`),n(s.tph,0)+` t/h`,``,`${n(s.hours,1)} h/j ${e.t(`opératoires`)}`)}
      ${W(e.t(`Productivité camion`),n(o.truckTph,0)+` t/h`,``,`${n(o.truckHours,1)} h/j`)}
      ${W(e.t(`Capacité mensuelle`),e.fmtVol(o.monthly)+`t`)}
      ${W(e.t(`Jours pour le reste`),n(Jb(c,o.daily),0)+` j`,``,`${e.fmtVol(c)}t ${e.t(`restantes`)}`)}
    </div>
    <p class="small muted">${e.t(`Heures opératoires = 24 × disponibilité × utilisation. Capacité = min(chargement, transport).`)}</p>
    <h3>${e.t(`Engin de chargement`)}</h3>
    <div class="fields three">
      ${G(e,`lN`,`Nombre`,i.count,1)}${G(e,`lB`,`Godet (m³)`,i.bucket)}${G(e,`lF`,`Remplissage`,i.fill)}
      ${G(e,`lC`,`Cycle (s)`,i.cycle)}${G(e,`lA`,`Disponibilité`,i.avail)}${G(e,`lU`,`Utilisation`,i.util)}
    </div>
    <h3>${e.t(`Camions`)}</h3>
    <div class="fields three">
      ${G(e,`tN`,`Nombre`,a.count,1)}${G(e,`tP`,`Charge utile (t)`,a.payload)}${G(e,`tL`,`Vitesse chargé (km/h)`,a.speedLoaded)}
      ${G(e,`tE`,`Vitesse à vide (km/h)`,a.speedEmpty)}${G(e,`tS`,`Mise à quai (min)`,a.spot)}${G(e,`tD`,`Vidage (min)`,a.dump)}
      ${G(e,`tQ`,`Attente (min)`,a.queue)}${G(e,`tA`,`Disponibilité`,a.avail)}${G(e,`tU`,`Utilisation`,a.util)}
    </div>
    <h3>${e.t(`Matériau et transport`)}</h3>
    <div class="fields three">${G(e,`fH`,`Distance (m, aller)`,r.haul)}${G(e,`fD`,`Densité (t/m³)`,r.density)}${G(e,`fS`,`Foisonnement`,r.swell)}</div>
    <button class="btn block" id="fMeasure" style="margin-top:8px">${e.I.ruler} ${e.t(`Mesurer la distance de transport sur la carte`)}</button>`,()=>{let t=(t,n,r)=>{document.getElementById(t).onchange=t=>{n[r]=mx(t.target.value,n[r]),e.saveP(),Cx(e)}};t(`lN`,i,`count`),t(`lB`,i,`bucket`),t(`lF`,i,`fill`),t(`lC`,i,`cycle`),t(`lA`,i,`avail`),t(`lU`,i,`util`),t(`tN`,a,`count`),t(`tP`,a,`payload`),t(`tL`,a,`speedLoaded`),t(`tE`,a,`speedEmpty`),t(`tS`,a,`spot`),t(`tD`,a,`dump`),t(`tQ`,a,`queue`),t(`tA`,a,`avail`),t(`tU`,a,`util`),t(`fH`,r,`haul`),t(`fD`,r,`density`),t(`fS`,r,`swell`),document.getElementById(`fMeasure`).onclick=()=>e.startTool(`haul`)})}function wx(e){let t=vx(e),n=e.fmt,r=t.blasts,i=r.reduce((e,t)=>({n:e.n+t.holes.length,m:e.m+t.stats.drillMeters,kg:e.kg+t.stats.explosiveKg,t:e.t+t.stats.tonnes}),{n:0,m:0,kg:0,t:0}),a={designed:e.t(`Conçu`),drilled:e.t(`Foré`),charged:e.t(`Chargé`),fired:e.t(`Tiré`)};e.open(e.t(`Forage et tir`),`
    <div class="kpis">
      ${W(e.t(`Tirs`),r.length,`hi`)}${W(e.t(`Trous`),n(i.n,0))}
      ${W(e.t(`Mètres forés`),n(i.m,0)+` m`)}${W(e.t(`Explosif`),e.fmtVol(i.kg)+`kg`)}
      ${W(e.t(`Tonnage abattu`),e.fmtVol(i.t)+`t`)}${W(e.t(`Facteur de poudre moyen`),i.t>0?n(i.kg/i.t,3)+` kg/t`:`—`)}
    </div>
    <button class="btn primary block" id="bNew">${e.I.polygon} ${e.t(`Nouveau tir : dessiner le polygone`)}</button>
    <p class="small muted">${e.t(`Astuce : depuis la fiche d'un bloc, « Concevoir un tir sur ce bloc » reprend son contour et ses niveaux.`)}</p>
    <h3>${e.t(`Tirs du projet`)}</h3>
    ${r.length?r.map(t=>`<div class="list-item"><div class="grow"><b>${e.esc(t.name)}</b><small class="muted">${a[t.status]||t.status} · ${t.holes.length} ${e.t(`trous`)} · ${n(t.stats.drillMeters,0)} m · PF ${n(t.stats.powderFactor,2)} kg/m³ · ${e.fmtVol(t.stats.tonnes)}t</small></div><button class="btn" data-open="${t.id}">${e.t(`Ouvrir`)}</button></div>`).join(``):`<p class="muted">${e.t(`Aucun tir conçu.`)}</p>`}`,t=>{document.getElementById(`bNew`).onclick=()=>e.startTool(`blastpoly`),t.onclick=t=>{let n=t.target.closest(`[data-open]`);n&&Dx(e,r.find(e=>e.id===n.dataset.open))}})}function Tx(e,t,n={}){let r=vx(e),i={...Bb,benchH:e.P.blastBenchH||Bb.benchH,...e.P.blastParams||{},...n.params||{}},a={id:e.uid(),name:n.name||`${e.t(`Tir`)} ${String(r.blasts.length+1).padStart(3,`0`)}`,poly:Array.from(t),params:i,status:`designed`,date:new Date().toISOString().slice(0,10),holes:[],stats:{}};Ex(e,a),r.blasts.push(a),e.saveP(),e.drawBlasts(a.id),Dx(e,a)}function Ex(e,t){let n=e.byRole(`topo`)||e.byRole(`design`),r=n?(t,r)=>e.surf(n).zAt(t,r):()=>NaN,i=Hb(Float64Array.from(t.poly),r,t.params);return t.init&&Ub(i,t.init),t.holes=i.holes.map(e=>({id:e.id,x:e.x,y:e.y,zc:e.zc,zt:e.zt,depth:e.depth,kg:e.kg,t:e.t,row:e.row})),t.stats={area:i.area,volume:i.volume,tonnes:i.tonnes,drillMeters:i.drillMeters,explosiveKg:i.explosiveKg,kgPerMeter:i.kgPerMeter,powderFactor:i.powderFactor,powderFactorT:i.powderFactorT,yieldPerMeter:i.yieldPerMeter,rows:i.rows,mic:i.mic,duration:i.duration,angle:i.angle},t}function Dx(e,t){let n=e.fmt,r=t.params,i=t.stats,a=lf(Float64Array.from(t.poly)),o=(a.x0+a.x1)/2,s=(a.y0+a.y1)/2,c=e.S.pos,l=c?Math.hypot(c.x-o,c.y-s):NaN;e.P.ppvDist=e.P.ppvDist||500,e.open(t.name,`
    <div class="seg" id="bSt">${[[`designed`,`Conçu`],[`drilled`,`Foré`],[`charged`,`Chargé`],[`fired`,`Tiré`]].map(([n,r])=>`<button data-v="${n}" class="${t.status===n?`on`:``}">${e.t(r)}</button>`).join(``)}</div>
    <div class="kpis" style="margin-top:10px">
      ${W(e.t(`Trous`),t.holes.length,`hi`,`${i.rows} ${e.t(`rangées`)} · ${e.t(`orientation`)} ${n(i.angle,0)}°`)}
      ${W(e.t(`Mètres forés`),n(i.drillMeters,0)+` m`,`hi`,`${n(i.yieldPerMeter,1)} m³/m`)}
      ${W(e.t(`Explosif`),n(i.explosiveKg,0)+` kg`,``,`${n(i.kgPerMeter,2)} kg/m · ${n(t.holes.length?i.explosiveKg/t.holes.length:0,1)} kg/${e.t(`trou`)}`)}
      ${W(e.t(`Facteur de poudre`),n(i.powderFactor,2)+` kg/m³`,i.powderFactor>1||i.powderFactor<.2?`warn`:``,`${n(i.powderFactorT,3)} kg/t`)}
      ${W(e.t(`Volume abattu`),e.fmtVol(i.volume)+`m³`,``,`${e.fmtVol(i.tonnes)}t · ${n(i.area,0)} m²`)}
      ${W(e.t(`Charge max. / 8 ms`),n(i.mic,1)+` kg`,``,`${e.t(`durée`)} ${n(i.duration,0)} ms`)}
      ${W(e.t(`Vibration estimée`),n(Wb(e.P.ppvDist,i.mic,r.k,r.beta),2)+` mm/s`,``,`${e.t(`à`)} ${n(e.P.ppvDist,0)} m`)}
      ${W(e.t(`Distance 5 mm/s`),n(Gb(5,i.mic,r.k,r.beta),0)+` m`,``,Number.isFinite(l)?`${e.t(`vous êtes à`)} ${n(l,0)} m · ${n(Wb(l,i.mic,r.k,r.beta),1)} mm/s`:``)}
    </div>
    <h3>${e.t(`Maille`)}</h3>
    <div class="seg" id="bPat"><button data-v="square" class="${r.pattern===`square`?`on`:``}">${e.t(`Carrée`)}</button><button data-v="staggered" class="${r.pattern===`staggered`?`on`:``}">${e.t(`Quinconce`)}</button></div>
    <div class="fields three" style="margin-top:8px">
      ${G(e,`pB`,`Banquette (m)`,r.burden)}${G(e,`pS`,`Espacement (m)`,r.spacing)}${G(e,`pA`,`Orientation (°)`,Number.isFinite(r.angle)?r.angle:``)}
      ${G(e,`pH`,`Hauteur de banc (m)`,r.benchH)}${G(e,`pJ`,`Sous-foration (m)`,r.subdrill)}${G(e,`pT`,`Bourrage (m)`,r.stemming)}
      ${G(e,`pD`,`Diamètre (mm)`,r.diameter)}${G(e,`pE`,`Densité explosif`,r.explosiveDensity)}${G(e,`pR`,`Densité roche`,r.rockDensity)}
      ${G(e,`pF`,`Plancher (RL, vide = auto)`,Number.isFinite(r.floorRL)?r.floorRL:``)}${G(e,`pIH`,`Retard trous (ms)`,r.interHole)}${G(e,`pIR`,`Retard rangées (ms)`,r.interRow)}
      ${G(e,`pK`,`Vibration K`,r.k)}${G(e,`pBe`,`Vibration β`,r.beta)}${G(e,`pPD`,`Distance PPV (m)`,e.P.ppvDist)}
    </div>
    <div class="stack" style="margin-top:10px">
      <button class="btn primary block" id="bNav">${e.I.nav} ${e.t(`Implanter : aller au trou le plus proche`)}</button>
      <div class="row"><button class="btn grow" id="bInit">${e.I.target} ${e.t(`Point d'amorçage`)}</button><button class="btn grow" id="bZoom">${e.I.fit} ${e.t(`Zoom`)}</button></div>
      <div class="row"><button class="btn grow" id="bCsv">${e.I.download} ${e.t(`Trous (CSV)`)}</button><button class="btn grow" id="bRen">${e.t(`Renommer`)}</button><button class="btn danger" id="bDel">${e.I.trash}</button></div>
      <button class="btn block" id="bBack">← ${e.t(`Tous les tirs`)}</button>
    </div>
    <h3>${e.t(`Trous`)}</h3>
    <table class="t"><tr><th>${e.t(`Trou`)}</th><th class="n">${e.t(`Prof.`)}</th><th class="n">kg</th><th class="n">ms</th></tr>
      ${t.holes.slice(0,200).map(e=>`<tr><td>${e.id}</td><td class="n">${n(e.depth,1)}</td><td class="n">${n(e.kg,0)}</td><td class="n">${e.t??``}</td></tr>`).join(``)}</table>`,()=>{let n=()=>{Ex(e,t),e.P.blastParams={burden:r.burden,spacing:r.spacing,diameter:r.diameter,subdrill:r.subdrill,stemming:r.stemming,explosiveDensity:r.explosiveDensity,pattern:r.pattern},e.saveP(),e.drawBlasts(t.id),Dx(e,t)},i=(e,t,i)=>{document.getElementById(e).onchange=e=>{let a=mx(e.target.value,NaN);r[t]=Number.isFinite(a)?a:i?NaN:r[t],n()}};i(`pB`,`burden`),i(`pS`,`spacing`),i(`pA`,`angle`,!0),i(`pH`,`benchH`),i(`pJ`,`subdrill`),i(`pT`,`stemming`),i(`pD`,`diameter`),i(`pE`,`explosiveDensity`),i(`pR`,`rockDensity`),i(`pF`,`floorRL`,!0),i(`pIH`,`interHole`),i(`pIR`,`interRow`),i(`pK`,`k`),i(`pBe`,`beta`),document.getElementById(`pPD`).onchange=n=>{e.P.ppvDist=mx(n.target.value,500),e.saveP(),Dx(e,t)},document.getElementById(`bPat`).onclick=e=>{let t=e.target.closest(`[data-v]`);t&&(r.pattern=t.dataset.v,n())},document.getElementById(`bSt`).onclick=n=>{let r=n.target.closest(`[data-v]`);r&&(t.status=r.dataset.v,e.saveP(),Dx(e,t))},document.getElementById(`bNav`).onclick=()=>{let n=e.S.pos||{x:o,y:s},r=[...t.holes].sort((e,t)=>Math.hypot(e.x-n.x,e.y-n.y)-Math.hypot(t.x-n.x,t.y-n.y))[0];r&&(e.S.target={id:`hole`,name:`${t.name} · ${r.id}`,x:r.x,y:r.y,z:r.zc},e.closeSheet(),e.refreshOverlay(),e.renderHud())},document.getElementById(`bInit`).onclick=()=>{e.S.pendingInit=t,e.startTool(`blastinit`)},document.getElementById(`bZoom`).onclick=()=>{e.closeSheet(),e.viewer.fitTo({...a,z0:Math.min(...t.holes.map(e=>e.zt),a.z0||0),z1:Math.max(...t.holes.map(e=>e.zc),a.z1||0)})},document.getElementById(`bCsv`).onclick=()=>e.exportFile(`${t.name.replace(/\W+/g,`_`)}_trous.csv`,e.csv([[e.t(`Trou`),`X`,`Y`,e.t(`Z collet`),e.t(`Z pied`),e.t(`Profondeur (m)`),e.t(`Charge (kg)`),e.t(`Retard (ms)`)],...t.holes.map(e=>[e.id,e.x,e.y,e.zc,e.zt,e.depth,e.kg,e.t])]),`text/csv`),document.getElementById(`bRen`).onclick=()=>{let n=prompt(e.t(`Nom du tir`),t.name);n&&(t.name=n,e.saveP(),Dx(e,t))},document.getElementById(`bDel`).onclick=()=>{confirm(e.t(`Supprimer le tir « {0} » ?`,t.name))&&(e.P.blasts=e.P.blasts.filter(e=>e!==t),e.saveP(),e.drawBlasts(),wx(e))},document.getElementById(`bBack`).onclick=()=>wx(e)})}function Ox(e,t,n){t.init={x:n.x,y:n.y},Ex(e,t),e.saveP(),e.drawBlasts(t.id),Dx(e,t)}function kx(e){let t=[];for(let n=0;n<e.length;n+=3)t.push([e[n],e[n+1]]);t.sort((e,t)=>e[0]-t[0]||e[1]-t[1]);let n=(e,t,n)=>(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]),r=[],i=[];for(let e of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],e)<=0;)r.pop();r.push(e)}for(let e of t.reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],e)<=0;)i.pop();i.push(e)}let a=r.slice(0,-1).concat(i.slice(0,-1)),o=[];for(let[e,t]of a)o.push(e,t,0);return o.push(a[0][0],a[0][1],0),Float64Array.from(o)}var Ax={fr:[`N`,`NE`,`E`,`SE`,`S`,`SO`,`O`,`NO`],en:[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`]},jx=[[1.7,`À pied`],[4.5,`Cabine camion`],[8,`Pelle`],[40,`Drone`]],Mx=null;function Nx(){return!!Mx}async function Px(e,t={}){if(Mx)return;await Tb();let n=e.viewer,r=e.S.pos,i=e.byRole(`design`)||e.byRole(`topo`);if(!i&&!r){e.toast(e.t(`Importez d'abord un pit design ou une topo`));return}let a=i?e.layerBounds(i):null,o=t.x,s=t.y;if(!Number.isFinite(o)){if(r&&!t.virtual)o=r.x,s=r.y;else if(e.limitP&&a){let t=(a.x0+a.x1)/2,n=(a.y0+a.y1)/2,r=e.limitP[0],i=e.limitP[1],c=Math.hypot(t-r,n-i)||1;o=r+(t-r)/c*20,s=i+(n-i)/c*20}else o=(a.x0+a.x1)/2,s=(a.y0+a.y1)/2}let c={mode:r&&!t.virtual&&e.S.mode===`gps`?`gps`:`libre`,sensors:!0,ar:!1,eye:0,speed:1,heading:NaN,pitch:-8,yawOffset:0,got:!1,stream:null,info:null,look:null,timer:0};Mx=c;let l=a?(a.x0+a.x1)/2:o,u=a?(a.y0+a.y1)/2:s,d=Math.atan2(l-o,u-s)*180/Math.PI;e.terrainStyle(!0),n.enterFP(o,s,{heading:Number.isFinite(d)?(d+360)%360:0,pitch:-12,eye:jx[0][0]}),n.fp.speed=1.6;let f=document.createElement(`div`);f.className=`terrain`,f.innerHTML=`
    <canvas id="trTape" class="tr-tape"></canvas>
    <div class="tr-top">
      <div class="tr-badge" id="trMode"></div>
      <div class="tr-alert hidden" id="trAlert"></div>
    </div>
    <div class="tr-cross"><i></i></div>
    <div class="tr-aim" id="trAim"></div>
    <div class="tr-stick" id="trStick"><div class="tr-knob" id="trKnob"></div></div>
    <div class="tr-panel">
      <div class="tr-pos" id="trPos"></div>
      <div class="tr-btns">
        <button class="tr-btn" id="trSrc"></button>
        <button class="tr-btn" id="trSens"></button>
        <button class="tr-btn" id="trAR">${e.I.camera}<span>${e.t(`Réalité augm.`)}</span></button>
        <button class="tr-btn" id="trEye"></button>
        <button class="tr-btn" id="trSpd"></button>
        <button class="tr-btn exit" id="trExit">✕<span>${e.t(`Quitter`)}</span></button>
      </div>
    </div>`,document.getElementById(`app`).appendChild(f);let p=document.createElement(`video`);p.className=`tr-video hidden`,p.setAttribute(`playsinline`,``),p.muted=!0,p.autoplay=!0,document.getElementById(`app`).insertBefore(p,document.getElementById(`view`)),document.getElementById(`app`).classList.add(`in-terrain`);let m=e=>f.querySelector(`#`+e),h=()=>{m(`trSrc`).innerHTML=`${e.I.locate}<span>${c.mode===`gps`?`GPS`:e.t(`Libre`)}</span>`,m(`trSens`).innerHTML=`${e.I.compass3d}<span>${c.sensors?e.t(`Capteurs`):e.t(`Doigt`)}</span>`,m(`trEye`).innerHTML=`<b>${jx[c.eye][0]} m</b><span>${e.t(jx[c.eye][1])}</span>`,m(`trSpd`).innerHTML=`<b>×${c.speed}</b><span>${e.t(`Vitesse`)}</span>`,m(`trSens`).classList.toggle(`on`,c.sensors),m(`trAR`).classList.toggle(`on`,c.ar),m(`trSrc`).classList.toggle(`on`,c.mode===`gps`),m(`trStick`).classList.toggle(`hidden`,c.mode===`gps`),m(`trMode`).textContent=`${c.mode===`gps`?e.t(`Sur site · GPS`):e.t(`Visite virtuelle`)}${c.ar?` · `+e.t(`RA`):``}`};h(),c.stopOrient=Ob(e=>{c.got=!0,c.sensors&&(c.heading=kb(c.heading,e.heading,.22),c.pitch+=.22*(e.pitch-c.pitch),n.fpOrient((c.heading+c.yawOffset+360)%360,c.pitch))}),setTimeout(()=>{Mx===c&&!c.got&&c.sensors&&(c.sensors=!1,h(),e.toast(e.t(`Pas de capteur d'orientation : regardez autour en glissant le doigt.`),3500))},1800);let g=n.renderer.domElement,_=e=>{e.target===g&&(c.look={x:e.clientX,y:e.clientY})},v=e=>{if(!c.look)return;let t=e.clientX-c.look.x,r=e.clientY-c.look.y;c.look={x:e.clientX,y:e.clientY},c.sensors?(c.yawOffset=(c.yawOffset-t*.15+360)%360,n.fpOrient((c.heading+c.yawOffset+360)%360,n.fp.pitch)):n.fpLook(-t*.25,r*.2)},y=()=>{c.look=null};window.addEventListener(`pointerdown`,_),window.addEventListener(`pointermove`,v),window.addEventListener(`pointerup`,y);let b=m(`trStick`),x=m(`trKnob`),S=null,C=e=>{let t=b.getBoundingClientRect(),r=t.width/2,i=e.clientX-(t.left+r),a=e.clientY-(t.top+r),o=Math.hypot(i,a);o>r&&(i*=r/o,a*=r/o),x.style.transform=`translate(${i}px, ${a}px)`,n.fp.move.f=-a/r,n.fp.move.r=i/r};b.addEventListener(`pointerdown`,e=>{S=e.pointerId,b.setPointerCapture(S),C(e),e.stopPropagation()}),b.addEventListener(`pointermove`,e=>{e.pointerId===S&&C(e)});let w=()=>{S=null,x.style.transform=``,n.fp.move.f=0,n.fp.move.r=0};b.addEventListener(`pointerup`,w),b.addEventListener(`pointercancel`,w),m(`trSrc`).onclick=()=>{c.mode===`gps`?c.mode=`libre`:e.S.pos?(c.mode=`gps`,n.fpPlace(e.S.pos.x,e.S.pos.y)):e.toast(e.t(`Pas encore de position GPS : restez en visite virtuelle.`)),h()},m(`trSens`).onclick=async()=>{c.sensors||await Tb(),c.sensors=!c.sensors,c.yawOffset=0,h()},m(`trEye`).onclick=()=>{c.eye=(c.eye+1)%jx.length,n.fp.eye=jx[c.eye][0],n.invalidate(),h()},m(`trSpd`).onclick=()=>{c.speed=c.speed===1?5:c.speed===5?15:1,n.fp.speed=1.6*c.speed,h()},m(`trAR`).onclick=async()=>{if(c.ar){T(),c.ar=!1,n.setAR(!1),h();return}try{c.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:`environment`},width:{ideal:1280}},audio:!1}),p.srcObject=c.stream,p.classList.remove(`hidden`),await p.play().catch(()=>{}),c.ar=!0,n.setAR(!0),document.getElementById(`app`).classList.add(`ar-on`),e.toast(e.t(`Réalité augmentée : le design est superposé à la caméra (précision du GPS et de la boussole du téléphone).`),4500)}catch(t){e.toast(e.t(`Caméra indisponible : {0}`,t.message||t.name),4e3)}h()};let T=()=>{c.stream&&c.stream.getTracks().forEach(e=>e.stop()),c.stream=null,p.classList.add(`hidden`),p.srcObject=null,document.getElementById(`app`).classList.remove(`ar-on`)};m(`trExit`).onclick=()=>Fx(e),c.onPos=e=>{c.mode===`gps`&&e&&n.fpPlace(e.x,e.y)},e.S.onPosHooks.add(c.onPos);let E=m(`trTape`),D=Ax[e.lang()===`en`?`en`:`fr`],O=()=>{let e=Math.min(2,window.devicePixelRatio||1),t=E.clientWidth,r=E.clientHeight;E.width!==Math.round(t*e)&&(E.width=Math.round(t*e),E.height=Math.round(r*e));let i=E.getContext(`2d`);i.setTransform(e,0,0,e,0,0),i.clearRect(0,0,t,r);let a=n.fp.heading,o=t/90;i.strokeStyle=`rgba(95,227,255,.85)`,i.fillStyle=`#e8fbff`,i.textAlign=`center`,i.font=`600 12px system-ui`;for(let e=Math.floor((a-45)/5)*5;e<=a+45;e+=5){let n=t/2+(e-a)*o,s=(e%360+360)%360,c=s%45==0;i.beginPath(),i.moveTo(n,r-4),i.lineTo(n,r-(c?16:s%15==0?11:7)),i.stroke(),c?(i.fillStyle=s===0?`#ff5a52`:`#e8fbff`,i.fillText(D[s/45],n,13)):s%15==0&&(i.fillStyle=`rgba(232,251,255,.7)`,i.font=`10px system-ui`,i.fillText(String(s),n,13),i.font=`600 12px system-ui`)}i.fillStyle=`#ffd400`,i.beginPath(),i.moveTo(t/2-6,r),i.lineTo(t/2+6,r),i.lineTo(t/2,r-8),i.fill()},k=e.fmt,ee=()=>{if(Mx!==c)return;O();let t=n.fp,r=e.groundZ(t.x,t.y),i=e.zDesign(t.x,t.y),a=``;if(e.limitP){let n=gf(t.x,t.y,e.limitP),r=_f(t.x,t.y,e.limitP).d;a=`${n?``:`⛔ `}${e.t(`Limite`)} ${k(r,1)} m`,m(`trAlert`).classList.toggle(`hidden`,n&&r>e.P.alertDist),m(`trAlert`).textContent=n?e.t(`Limite de fosse à {0} m`,k(r,1)):e.t(`HORS LIMITE DE FOSSE — {0} m au-delà`,k(r,1)),m(`trAlert`).className=`tr-alert `+(n?r>e.P.alertDist?`hidden`:`warn`:`bad`)}let o=Number.isFinite(i)&&e.P.benchH>0?Math.floor((i-e.P.benchRef+1e-6)/e.P.benchH)*e.P.benchH+e.P.benchRef:NaN;m(`trPos`).innerHTML=`<span>E <b>${k(t.x,1)}</b></span><span>N <b>${k(t.y,1)}</b></span><span>Z <b>${k(r,1)}</b></span>
      <span>${e.t(`Cap`)} <b>${k((t.heading+360)%360,0)}°</b></span><span>${e.t(`Visée`)} <b>${k(t.pitch,0)}°</b></span>
      ${Number.isFinite(o)?`<span>${e.t(`Banc`)} <b>RL ${k(o,0)}</b></span>`:``}${Number.isFinite(i)&&Number.isFinite(r)?`<span>${r-i>e.P.tol?e.t(`À miner`)+` <b>${k(r-i,1)} m</b>`:e.t(`Au design`)}</span>`:``}${a?`<span>${a}</span>`:``}`;let s=n.pickCenter(),l=``;if(s&&s.onSurface){let i=Math.hypot(s.x-t.x,s.y-t.y,s.z-(r+t.eye)),a=e.layers.find(e=>e.id===s.layerId);if(l=`<b>${e.esc(a?a.name:``)}</b><span>${e.t(`Distance`)} ${k(i,1)} m · RL ${k(s.z,1)}</span>`,a?.kind===`blocks`){let t=n.blockAt(s.hitObj,s.faceIndex),r=t>=0?a.blocks[t]:null;if(r){let t=a.stats?.byId?.[r.id],n=e.matOf(r.material);l=`<b style="color:${n.color}">${e.esc(r.name)}</b><span>${e.esc(e.t(n.name))}${Number.isFinite(r.grade)?` · ${k(r.grade,2)} g/t`:``}</span>
            ${t?`<span>${e.t(`Reste`)} ${e.fmtVol(t.remaining*n.density)}t / ${e.fmtVol(t.volume*n.density)}t</span>`:``}<span>${e.t(`Distance`)} ${k(i,1)} m</span>`}}else{let t=e.blockAtPoint(s.x,s.y,s.z-.3);if(t){let n=t.l.stats?.byId?.[t.b.id],r=e.matOf(t.b.material);l+=`<span>${e.t(`Sous la surface`)} : <b style="color:${r.color}">${e.esc(t.b.name)}</b> · ${e.esc(e.t(r.name))}${Number.isFinite(t.b.grade)&&t.b.grade>0?` · ${k(t.b.grade,2)} g/t`:``}${n?` · ${e.t(`reste`)} ${e.fmtVol(n.remaining*r.density)}t`:``}</span>`}let n=e.zDesign(s.x,s.y),r=e.groundZ(s.x,s.y);Number.isFinite(n)&&Number.isFinite(r)&&(l+=`<span>${e.t(`Design`)} RL ${k(n,1)} · ${r-n>e.P.tol?e.t(`À miner`)+` `+k(r-n,1)+` m`:r-n<-e.P.tol?e.t(`Sous design`)+` `+k(n-r,1)+` m`:e.t(`Au design`)}</span>`)}}else l=`<span>${e.t(`Visez la fosse pour lire ses informations`)}</span>`;m(`trAim`).innerHTML=l};c.timer=setInterval(ee,200),c.cleanup=()=>{clearInterval(c.timer),c.stopOrient?.(),T(),window.removeEventListener(`pointerdown`,_),window.removeEventListener(`pointermove`,v),window.removeEventListener(`pointerup`,y),e.S.onPosHooks.delete(c.onPos),f.remove(),p.remove(),document.getElementById(`app`).classList.remove(`in-terrain`,`ar-on`)},ee()}function Fx(e){if(!Mx)return;let t=Mx;Mx=null,t.cleanup(),e.viewer.exitFP(),e.afterTerrain?.()}var Ix=[{id:`demarrer`,title:`Démarrer`,html:`
<p><b>KB Pit Limit</b> est une application de terrain pour fosse à ciel ouvert : la fosse en 3D, votre position GPS sur le pit design, la limite de fosse, les blocs de matériaux, les KPI de planification, la production et le forage-tir. <b>Tout fonctionne sans réseau</b> : les fichiers sont lus dans le téléphone, les données restent dans le téléphone, le GPS n'a pas besoin d'internet.</p>
<ol>
<li><b>Installer</b> — Android : ouvrir le fichier <code>KB_Pit_Limit.apk</code>. iPhone : ouvrir le lien dans <b>Safari</b> → <b>Partager</b> → <b>Sur l'écran d'accueil</b>, puis lancer l'icône une fois avec réseau.</li>
<li><b>Essayer</b> — Mine → Projets (bouton en haut à gauche) → « Charger la fosse de démonstration » : design, topo, terrain naturel, 413 blocs, réalisé et un tir d'exemple.</li>
<li><b>Importer vos fichiers</b> — Calques → Importer. Formats : <code>.00t</code> Vulcan, <code>.dtm</code> + <code>.str</code> Surpac (à sélectionner ensemble), <code>.str</code>, <code>.dxf</code>, LandXML, <code>.obj</code>, <code>.stl</code>, <code>.ply</code>, points XYZ/CSV, grille <code>.asc</code>.</li>
<li><b>Vérifier les rôles</b> — Calques : « Pit design », « Topo actuelle », « Levé antérieur », « Terrain initial », « Lignes », « Limite de fosse ». Le rôle est deviné d'après le nom du fichier (design, topo, survey, pickup…) et modifiable.</li>
<li><b>Système de coordonnées</b> — Réglages : UTM automatique, Abidjan 1987 / UTM 30N, etc. Pour une grille locale, faire un calage sur une ou plusieurs bornes.</li>
</ol>`},{id:`carte`,title:`Carte 3D et position`,html:`
<ul>
<li><b>Gestes</b> : un doigt pour tourner (3D) ou déplacer (plan), deux doigts pour zoomer. Boutons à droite : boussole (remet le nord en haut), ma position / suivi, 3D ↔ plan, tout voir, calques, vue orientée.</li>
<li><b>Carte de position</b> (bas de l'écran) : Est, Nord, Z, précision, Z design et Z topo sous vous, banc, « À miner » (topo − design) ou « Sous design », distance à la limite de fosse, ligne la plus proche (crête / pied).</li>
<li><b>Alertes</b> : bandeau orange à moins de la distance d'alerte de la limite, rouge clignotant hors limite, avec son et vibration (Réglages).</li>
<li><b>Couleurs</b> : le design est coloré par banc ; la topo par écart au design (orange = reste à miner, vert = au design, bleu = sous le design).</li>
<li><b>Vue 3D orientée</b> (bouton boussole) : la 3D tourne avec le téléphone ; tenu debout vous voyez la fosse de côté, à plat vous la voyez de dessus.</li>
</ul>`},{id:`terrain`,title:`Vue terrain (comme sur place)`,html:`
<p>Onglet <b>Terrain</b> : vous êtes <b>debout dans la fosse</b>, à hauteur d'homme. Le ciel, les gradins, les blocs et les tirs sont autour de vous.</p>
<ul>
<li><b>Sur site</b> (bouton GPS) : votre position réelle déplace la vue ; tournez et inclinez le téléphone pour regarder (boussole + capteurs).</li>
<li><b>Visite virtuelle</b> (bouton Libre) : le joystick en bas à gauche vous fait marcher ; le bouton Vitesse passe de la marche (×1) au véhicule (×5, ×15).</li>
<li><b>Hauteur des yeux</b> : à pied 1,7 m, cabine de camion 4,5 m, pelle 8 m, drone 40 m.</li>
<li><b>Réticule</b> : visez un point — l'application indique ce que c'est : bloc (matériau, teneur, tonnage restant), distance, RL, écart au design.</li>
<li><b>Réalité augmentée</b> : la caméra s'affiche derrière le design (lignes et surfaces transparentes). La superposition dépend de la précision du GPS (3 à 5 m) et de la boussole du téléphone (quelques degrés) ; corrigez le cap en glissant le doigt.</li>
<li>Sans boussole (ordinateur), regardez autour en glissant le doigt.</li>
</ul>`},{id:`design`,title:`Design`,html:`
<p>Mine → <b>Design</b> analyse le pit design : profondeur, RL du bord et du fond, longueur × largeur et axe, emprise, angle de talus moyen, pente globale, hauteur de banc, pente des rampes, surface du fond, répartition des pendages et tableau des gradins (RL, hauteur, largeur de berme, longueur de pied).</p>
<ul><li><b>Générer crêtes et pieds</b> : crée un calque de lignes à partir du design (utile pour l'implantation et la RA).</li><li><b>Vue terrain depuis le fond</b> : se placer au fond de la fosse.</li></ul>`},{id:`volumes`,title:`Volumes, blocs, pit actuel`,html:`
<ul>
<li><b>Volumes</b> : reste à miner entre topo et design (m³, t), déjà miné et avancement (avec terrain initial), sur-excavation, détail par banc, zone dessinée, export CSV.</li>
<li><b>Blocs</b> : importer les blocs (solides <code>.00t</code>, objets <code>.dtm</code>, calques <code>.dxf</code>, contours fermés extrudés sur la hauteur de banc). Reste à miner de chaque bloc = partie sous la topo actuelle. Synthèse par matériau, ratio, affichage 3D « reste + miné », fiche de bloc (matériau, <b>teneur</b>), import des attributs (CSV : Bloc ; Matériau ; Teneur ; Densité).</li>
<li><b>Pit actuel</b> : levés datés, choix du levé actuel, fond actuel / fond design, volume miné entre deux levés par banc.</li>
<li><b>Profil</b> : silhouette ou coupe de toute la fosse dans la direction où vous pointez le téléphone.</li>
</ul>`},{id:`planif`,title:`Planification court, moyen, long terme`,html:`
<ul>
<li><b>Court terme</b> : semaine / mois / trimestre / année. Saisie journalière (minerai, stérile, teneur, forage, usine) ou import CSV. Jauges réalisé / objectif au prorata des jours, teneur, onces, ratio, cadence requise pour finir la période, <b>minerai exposé</b> et jours d'exposition, vitesse d'approfondissement entre deux levés, conformité du plancher.</li>
<li><b>Moyen terme</b> : ordonnancement mensuel des blocs restants, banc par banc du haut vers le bas, à la capacité choisie (ou celle de la flotte), minerai plafonné par l'usine ; tableau et graphique minerai / stérile / teneur ; réserves par banc.</li>
<li><b>Long terme</b> : réserves restantes, ratio, teneur, onces contenues et récupérables, durée de vie, trésorerie cumulée, <b>VAN</b>, teneur de coupure marginale, coût par once, courbe teneur-tonnage. Hypothèses modifiables (prix, récupération, coûts, actualisation).</li>
</ul>
<p>Les teneurs viennent de la fiche de chaque bloc (ou de l'import CSV d'attributs) ; sinon une teneur par défaut selon le matériau.</p>`},{id:`prod`,title:`Production`,html:`
<p>Mine → <b>Production</b> : engin de chargement (godet, remplissage, cycle, disponibilité, utilisation), camions (charge utile, vitesses, temps fixes), distance de transport (mesurable sur la carte), densité et foisonnement.</p>
<p>Résultats : passes par camion, temps de chargement, cycle camion, productivités, <b>nombre de camions nécessaires</b>, facteur d'adéquation, capacité journalière et mensuelle (limitée par le chargement ou le transport), jours pour miner le reste. Heures opératoires = 24 × disponibilité × utilisation.</p>`},{id:`dnb`,title:`Forage et tir`,html:`
<ol>
<li>Mine → <b>Forage et tir</b> → « Nouveau tir » : dessinez le polygone sur la carte (ou depuis la fiche d'un bloc : « Concevoir un tir sur ce bloc »).</li>
<li>Réglez la maille (carrée / quinconce), banquette, espacement, orientation, hauteur de banc, sous-foration, bourrage, diamètre, densités, plancher.</li>
<li>Les trous sont posés sur la topo et visibles en 3D (couleur = retard). L'application calcule : trous, mètres forés, explosif, kg/m, kg/trou, <b>facteur de poudre</b> (kg/m³ et kg/t), volume et tonnage abattus, rendement de foration.</li>
<li>Séquence : point d'amorçage, retards trous / rangées, <b>charge maximale par 8 ms</b>, durée, <b>vibration estimée</b> (PPV = K (D/√Q)^−β) et distance pour 5 mm/s.</li>
<li><b>Implanter</b> : « aller au trou le plus proche » guide votre GPS de trou en trou. Statuts : conçu, foré, chargé, tiré. Export CSV des trous pour la foreuse.</li>
</ol>`},{id:`outils`,title:`Outils, points, export`,html:`
<ul><li><b>Mesurer</b> : distances, pentes, azimuts. <b>Coupe</b> : profil design / topo / terrain initial entre deux points. <b>Zone de volume</b>.</li>
<li><b>Points</b> : enregistrer sa position GPS, poser un point, saisir des coordonnées, naviguer vers un point, export CSV.</li>
<li><b>Simulation</b> : fait bouger une position fictive pour tester les alertes au bureau. <b>Me placer sur la carte</b> : position manuelle.</li>
<li>Captures d'écran et exports CSV : partagés par le menu Partager du téléphone (WhatsApp, e-mail, Fichiers…).</li></ul>`},{id:`precision`,title:`Précision et bonnes pratiques`,html:`
<ul><li>Téléphone : 3 à 5 m en plan, 5 à 15 m en altitude. Par défaut le marqueur est posé sur la topo. Pour du centimétrique : récepteur RTK externe déclaré comme position fictive (Android), puis « Altitude GPS (RTK) » dans Réglages.</li>
<li>Calage : placez-vous sur une borne, saisissez ses coordonnées mine puis « Capturer le GPS » ; 2 bornes ou plus corrigent aussi la rotation et l'échelle.</li>
<li>Gardez la topo à jour : importez chaque nouveau levé (rôle « Topo actuelle », l'ancien passe en « Levé antérieur ») puis recalculez les blocs.</li>
<li>Sauvegarde : les données sont dans le téléphone. Exportez régulièrement les CSV (réalisé, blocs, tirs).</li></ul>`}];function Lx(e){return`<div class="guide">${Ix.map(t=>`<details ${t.id===`demarrer`?`open`:``}><summary>${e.t(t.title)}</summary><div class="guide-body">${t.html}</div></details>`).join(``)}</div>`}var Rx;(function(e){e.Documents=`DOCUMENTS`,e.Data=`DATA`,e.Library=`LIBRARY`,e.Cache=`CACHE`,e.External=`EXTERNAL`,e.ExternalStorage=`EXTERNAL_STORAGE`,e.ExternalCache=`EXTERNAL_CACHE`,e.LibraryNoCloud=`LIBRARY_NO_CLOUD`,e.Temporary=`TEMPORARY`})(Rx||(Rx={}));var zx;(function(e){e.UTF8=`utf8`,e.ASCII=`ascii`,e.UTF16=`utf16`})(zx||(zx={}));var Bx=Qy(`Filesystem`,{web:()=>vb(()=>import(`./web-pSxNhl6B.js`).then(e=>new e.FilesystemWeb),[],import.meta.url)});pb();var Vx=Qy(`Share`,{web:()=>vb(()=>import(`./web-BDSkR-zl.js`).then(e=>new e.ShareWeb),[],import.meta.url)});async function Hx(e,t,n=`text/plain`){if(Zy.isNativePlatform()){let n=typeof t==`string`&&t.startsWith(`data:`),r=await Bx.writeFile({path:e,directory:Rx.Cache,data:n?t.split(`,`)[1]:t,encoding:n?void 0:zx.UTF8});await Vx.share({title:e,files:[r.uri],dialogTitle:e});return}let r=document.createElement(`a`);r.href=typeof t==`string`&&t.startsWith(`data:`)?t:URL.createObjectURL(new Blob([t],{type:n})),r.download=e,document.body.appendChild(r),r.click(),r.remove()}function Ux(e,t=`;`){return`﻿`+e.map(e=>e.map(e=>{let n=typeof e==`number`?String(Math.round(e*1e3)/1e3).replace(`.`,t===`;`?`,`:`.`):String(e??``);return/[;"\n,]/.test(n)&&typeof e!=`number`?`"`+n.replace(/"/g,`""`)+`"`:n}).join(t)).join(`\r
`)}var Wx=e=>`<svg viewBox="0 0 24 24">${e}</svg>`,K={map:Wx(`<path d="M3 7l6-3 6 3 6-3v13l-6 3-6-3-6 3z"/><path d="M9 4v13M15 7v13"/>`),layers:Wx(`<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>`),tools:Wx(`<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.6-.6-.6-2.6z"/>`),volume:Wx(`<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>`),settings:Wx(`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>`),locate:Wx(`<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>`),follow:Wx(`<path d="M12 2l7 19-7-4-7 4z"/>`),fit:Wx(`<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>`),eye:Wx(`<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>`),eyeOff:Wx(`<path d="M3 3l18 18M10.6 5.1A10.9 10.9 0 0 1 12 5c7 0 11 7 11 7a18 18 0 0 1-3.2 4M6.6 6.6C3.4 8.4 1 12 1 12s4 7 11 7a10 10 0 0 0 5.4-1.6"/>`),ruler:Wx(`<path d="M3 17L17 3l4 4L7 21z"/><path d="M7 13l2 2M10 10l2 2M13 7l2 2"/>`),section:Wx(`<path d="M3 20h18"/><path d="M3 16l4-6 3 3 4-7 3 4 4-3"/>`),polygon:Wx(`<path d="M5 4l13 3 3 11-12 3-6-9z"/>`),pin:Wx(`<path d="M12 22s7-7.4 7-12a7 7 0 0 0-14 0c0 4.6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>`),nav:Wx(`<path d="M3 11l18-8-8 18-2-8z"/>`),hand:Wx(`<path d="M12 3v10M8 6v8M16 6v7M4 11v3a8 8 0 0 0 16 0V9"/>`),play:Wx(`<path d="M6 4l14 8-14 8z"/>`),trash:Wx(`<path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15"/>`),camera:Wx(`<path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/>`),upload:Wx(`<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v4h16v-4"/>`),download:Wx(`<path d="M12 4v12M7 11l5 5 5-5"/><path d="M4 18v2h16v-2"/>`),plus:Wx(`<path d="M12 5v14M5 12h14"/>`),folder:Wx(`<path d="M3 6h7l2 2h9v11H3z"/>`),target:Wx(`<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>`),limit:Wx(`<path d="M4 4h16v16H4z" stroke-dasharray="3 3"/><path d="M12 8v5M12 16v.5"/>`),grid:Wx(`<path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"/>`),compass3d:Wx(`<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/><path d="M12 1v2M12 21v2M1 12h2M21 12h2"/>`),truck:Wx(`<path d="M2 15V7h11v8M13 10h4l3 3v2h-7"/><circle cx="6" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>`),drill:Wx(`<path d="M12 2v6M9 8h6l-1 6h-4zM12 14v8M8 22h8"/><path d="M5 4l3 3M19 4l-3 3"/>`),calendar:Wx(`<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M7 14h3v3H7z"/>`),chart:Wx(`<path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/>`),book:Wx(`<path d="M4 4h7a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H4zM20 4h-5a3 3 0 0 0-3 3"/><path d="M20 4v15h-6"/>`),cube:Wx(`<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 12l9-5M12 12v10M12 12L3 7"/>`),eye3d:Wx(`<circle cx="12" cy="12" r="3"/><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><path d="M12 2v3M12 19v3"/>`),more:Wx(`<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>`)},Gx={"Mon projet":`My project`,PLAN:`PLAN`,Terminer:`Finish`,Annuler:`Cancel`,Projets:`Projects`,ouvert:`open`,Ouvrir:`Open`,"Nom du nouveau projet (fosse, phase…)":`New project name (pit, stage…)`,"Charger la fosse de démonstration":`Load the demo pit`,"Chaque projet garde ses calques, son système de coordonnées, son calage et ses points. Tout reste stocké sur l'appareil.":`Each project keeps its layers, coordinate system, calibration and points. Everything stays stored on the device.`,"Ouverture…":`Opening…`,"Supprimer le projet « {0} » et tous ses calques de l'appareil ?":`Delete project “{0}” and all its layers from the device?`,"Projet {0}":`Project {0}`,"Votre fosse en 3D, votre position sur le pit design, le volume restant à miner — sans internet.":`Your pit in 3D, your position on the pit design, the volume left to mine — no internet needed.`,"Importer le pit design et la topo":`Import pit design and survey`,"Essayer avec la fosse de démonstration":`Try the demo pit`,"Astuce : pour un DTM Surpac, sélectionnez ensemble le .dtm et son .str. Vous pouvez choisir plusieurs fichiers à la fois.":`Tip: for a Surpac DTM, select the .dtm together with its .str. You can pick several files at once.`,"Création de la fosse de démonstration…":`Building the demo pit…`,"Démo — fosse synthétique":`Demo — synthetic pit`,"Démo chargée. Utilisez Outils → Simulation pour voir une position se déplacer.":`Demo loaded. Use Tools → Simulation to see a moving position.`,"Lecture de {0} fichier(s)…":`Reading {0} file(s)…`,"Lecture de {0}…":`Reading {0}…`,"Triangulation de {0} points…":`Triangulating {0} points…`,"Points triangulés":`Triangulated points`,"aucune géométrie trouvée":`no geometry found`,"Enregistrement de {0}…":`Saving {0}…`,"stockage impossible":`cannot be stored`,"Certains fichiers n'ont pas pu être lus :":`Some files could not be read:`,"{0} calque(s) importé(s)":`{0} layer(s) imported`,"{0} triangles":`{0} triangles`,"{0} ligne(s)":`{0} line(s)`,"Importer des fichiers":`Import files`,"Aucun calque. Importez un pit design (.00t, .dtm, .dxf, .str…) et une topo.":`No layers. Import a pit design (.00t, .dtm, .dxf, .str…) and a survey.`,"Formats : {0}. Le rôle « Pit design » sert au calcul de position, de limite et de volume ; « Topo actuelle » au reste à miner.":`Formats: {0}. The “Pit design” role drives position, limit and volume checks; “Current survey” drives the volume left to mine.`,Calques:`Layers`,Rôle:`Role`,Couleur:`Colour`,"Par banc / altitude":`By bench / elevation`,"Écart au design":`Deviation from design`,Unie:`Solid`,Opacité:`Opacity`,"Arêtes des triangles":`Triangle edges`,Zoom:`Zoom`,Trianguler:`Triangulate`,Renommer:`Rename`,"Nom du calque":`Layer name`,"Retirer « {0} » du projet ?":`Remove “{0}” from the project?`,"Triangulation des lignes…":`Triangulating lines…`,surface:`surface`,"Lignes triangulées":`Triangulated lines`,"Surface approchée depuis les chaînes (densifiées tous les 2 m)":`Approximate surface from strings (densified every 2 m)`,"Surface créée : {0} triangles":`Surface created: {0} triangles`,"GPS…":`GPS…`,"GPS indisponible":`GPS unavailable`,"GPS : {0}":`GPS: {0}`,"En attente de position… (ou Outils → Me placer sur la carte)":`Waiting for a position… (or Tools → Place me on the map)`,"Suivi de position activé":`Follow mode on`,"Position GPS":`GPS position`,"Latitude / longitude":`Latitude / longitude`,"Altitude GPS (ellipsoïde)":`GPS height (ellipsoid)`,"Précision horizontale":`Horizontal accuracy`,"Précision verticale":`Vertical accuracy`,Vitesse:`Speed`,Système:`System`,Calage:`Calibration`,"{0} point(s), écart {1} m":`{0} point(s), residual {1} m`,non:`no`,"Dernier point":`Last fix`,"En attente du premier point GPS. Placez-vous à ciel ouvert ; le GPS fonctionne sans internet.":`Waiting for the first GPS fix. Stand under open sky; GPS works without internet.`,"Précision typique d'un téléphone : 3 à 5 m en plan, 5 à 15 m en altitude. Avec « Z sur la topo » (Réglages), le marqueur est posé sur la surface levée. Pour du centimétrique, utilisez un récepteur RTK externe déclaré comme position fictive dans Android.":`Typical phone accuracy: 3–5 m horizontally, 5–15 m vertically. With “on the survey” elevation (Settings), the marker sits on the surveyed surface. For centimetre accuracy, use an external RTK receiver set as the mock location provider in Android.`,Manuel:`Manual`,"Importez d'abord un pit design":`Import a pit design first`,Simulation:`Simulation`,"HORS LIMITE DE FOSSE — {0} m au-delà":`OUTSIDE PIT LIMIT — {0} m beyond`,"Limite de fosse à {0} m":`Pit limit {0} m away`,"Sous le design de {0} m":`{0} m below design`,"Aucun pit design chargé.":`No pit design loaded.`,Importer:`Import`,"GPS indisponible : {0}":`GPS unavailable: {0}`,"Recherche de la position GPS…":`Searching for GPS position…`,"Me placer sur la carte":`Place me on the map`,"À miner":`To mine`,"Sous design":`Below design`,"Au design":`On design`,"Hors design":`Outside design`,Est:`East`,Nord:`North`,"Limite fosse":`Pit limit`,"Z design":`Design Z`,"Z topo":`Survey Z`,"Banc design":`Design bench`,"Z GPS":`GPS Z`,Cap:`Heading`,"Ligne proche":`Nearest line`,"Horiz.":`Horiz.`,Pente:`Slope`,Inclinaison:`Grade`,Azimut:`Bearing`,"Longueur totale":`Total length`,Surface:`Area`,sommets:`vertices`,"point(s)":`point(s)`,Destination:`Destination`,"Nom du point":`Point name`,"Point « {0} » enregistré":`Point “{0}” saved`,Points:`Points`,"Enregistrer ma position":`Save my position`,"Sur la carte":`On the map`,"Aucun point enregistré.":`No saved points.`,"Exporter les points (CSV)":`Export points (CSV)`,"Saisissez Est et Nord":`Enter East and North`,Nom:`Name`,Source:`Source`,Date:`Date`,Outils:`Tools`,"Mesurer : distances, pentes et azimuts. Coupe : profil design / topo. Zone de volume : volume restant dans un polygone. Simulation : déplace une position fictive pour tester les alertes au bureau.":`Measure: distances, slopes and bearings. Section: design / survey profile. Volume zone: volume left inside a polygon. Simulation: moves a fake position to test alerts in the office.`,"Trace effacée":`Track cleared`,"Tracés effacés":`Drawings cleared`,"Aucune surface pour la coupe":`No surface for the section`,Coupe:`Section`,Longueur:`Length`,"touchez le graphique pour lire les valeurs":`tap the chart to read values`,Distance:`Distance`,"écart topo − design":`survey − design`,"Zone orange : reste à miner entre la topo et le design.":`Orange area: left to mine between survey and design.`,"— aucun —":`— none —`,"Volumes restant à miner":`Volume left to mine`,"Il faut au moins deux surfaces : le pit design et la topo actuelle (levé). Ajoutez le terrain initial pour obtenir l'avancement.":`You need at least two surfaces: the pit design and the current survey. Add the original ground to get progress.`,"Pit design (fond à atteindre)":`Pit design (target floor)`,"Topo actuelle (dernier levé)":`Current survey (latest pickup)`,"Terrain initial (facultatif, pour l'avancement)":`Original ground (optional, for progress)`,"Hauteur de banc (m)":`Bench height (m)`,"RL de référence":`Reference RL`,"Densité (t/m³)":`Density (t/m³)`,"Maille (m, 0 = auto)":`Cell size (m, 0 = auto)`,"Tolérance (m)":`Tolerance (m)`,"Toute la fosse":`Whole pit`,"Zone dessinée ✓":`Drawn zone ✓`,"Dessiner une zone":`Draw a zone`,Calculer:`Calculate`,"Choisissez deux surfaces différentes":`Choose two different surfaces`,"Calcul des volumes…":`Computing volumes…`,"Zone dessinée":`Drawn zone`,Résultat:`Result`,"Reste à miner":`Left to mine`,"Tonnage restant":`Tonnes left`,"Déjà miné":`Already mined`,Avancement:`Progress`,"Sur-excavation":`Overbreak`,"Surface restant à miner":`Area left to mine`,maille:`cell`,densité:`density`,"surface comparée":`compared area`,"{0} ha du design sans topo":`{0} ha of design without survey`,"Reste à miner par banc":`Left to mine by bench`,Banc:`Bench`,Total:`Total`,"Colorer la topo":`Colour the survey`,"Topo :":`Survey:`,"Design :":`Design:`,"Initial :":`Original:`,Design:`Design`,Topo:`Survey`,Initial:`Original`,Zone:`Zone`,"Maille (m)":`Cell size (m)`,Densité:`Density`,"Reste à miner (m³)":`Left to mine (m³)`,"Tonnage restant (t)":`Tonnes left (t)`,"Sur-excavation (m³)":`Overbreak (m³)`,"Déjà miné (m³)":`Already mined (m³)`,"Avancement (%)":`Progress (%)`,"Banc de":`Bench from`,"Banc à":`Bench to`,"Orange : reste à miner · Vert : au design · Bleu : sous le design":`Orange: left to mine · Green: on design · Blue: below design`,Réglages:`Settings`,Projet:`Project`,"Nom du projet":`Project name`,"Système de coordonnées":`Coordinate system`,"Coordonnées du pit design":`Pit design coordinates`,"Fuseau UTM":`UTM zone`,auto:`auto`,Hémisphère:`Hemisphere`,Sud:`South`,"Définition proj4":`proj4 definition`,"Altitude du marqueur":`Marker elevation`,"Posé sur la topo / le design (recommandé)":`On the survey / design (recommended)`,"Altitude GPS (RTK)":`GPS height (RTK)`,"Décalage Z GPS → RL mine (m), sans calage":`GPS Z → mine RL offset (m), without calibration`,"Calage sur points connus (grille locale de la mine)":`Calibration on known points (mine grid)`,"Utiliser le calage":`Use calibration`,"Placez-vous sur une borne / un point topo connu, saisissez ses coordonnées mine puis appuyez sur « Capturer le GPS ». 1 point = translation, 2 points ou plus = translation + rotation + échelle.":`Stand on a known survey mark, enter its mine coordinates, then tap “Capture GPS”. 1 point = shift, 2 or more points = shift + rotation + scale.`,écart:`residual`,"Capturer le GPS et ajouter le point":`Capture GPS and add the point`,Échelle:`Scale`,rotation:`rotation`,"écart moyen":`RMS`,"Fosse et alertes":`Pit and alerts`,"Alerte limite à (m)":`Limit alert at (m)`,"Tolérance design (m)":`Design tolerance (m)`,"Son des alertes":`Alert sound`,Vibration:`Vibration`,"Limite de fosse : contour extérieur du pit design, ou un calque de lignes au rôle « Limite de fosse ».":`Pit limit: outer boundary of the pit design, or a line layer with the “Pit limit” role.`,Affichage:`Display`,"Exagération verticale":`Vertical exaggeration`,Sombre:`Dark`,Clair:`Light`,"À propos":`About`,"fonctionne entièrement hors ligne : fichiers lus sur l'appareil, données stockées localement, GPS sans internet.":`works fully offline: files read on the device, data stored locally, GPS without internet.`,"Saisissez au moins Est et Nord du point connu":`Enter at least East and North of the known point`,"Point de calage ajouté":`Calibration point added`,"Stockage utilisé : {0} Mo.":`Storage used: {0} MB.`,Carte:`Map`,Volumes:`Volumes`,topo:`survey`,"Pit design":`Pit design`,"Topo actuelle":`Current survey`,"Terrain initial":`Original ground`,"Autre surface":`Other surface`,"Lignes (crêtes, pieds…)":`Lines (crests, toes…)`,"Limite de fosse":`Pit limit`,GPS:`GPS`,Manuelle:`Manual`,Mesurer:`Measure`,"Zone de volume":`Volume zone`,"Aller à…":`Go to…`,"Revenir au GPS":`Back to GPS`,"Capture d'écran":`Screenshot`,"Effacer la trace":`Clear track`,"Effacer les tracés":`Clear drawings`,"Arrêter la simulation":`Stop simulation`,"Afficher la limite":`Show pit limit`,"Masquer la limite":`Hide pit limit`,"Touchez des points pour mesurer (distance, pente, azimut).":`Tap points to measure (distance, slope, bearing).`,"Touchez 2 points : début et fin de la coupe.":`Tap 2 points: start and end of the section.`,"Touchez les sommets de la zone de calcul de volume.":`Tap the vertices of the volume zone.`,"Touchez la carte pour poser un point.":`Tap the map to drop a point.`,"Touchez la destination à atteindre.":`Tap the destination.`,"Touchez la carte à l'endroit où vous êtes.":`Tap the map where you are.`,"Autorisation de localisation refusée":`Location permission denied`,"GPS non disponible sur cet appareil":`GPS not available on this device`,"WGS84 / UTM — fuseau automatique":`WGS84 / UTM — automatic zone`,"Autre système — définition proj4":`Other system — proj4 definition`,"Flux LZF corrompu":`Corrupt LZF stream`,"En-tête vulZ incohérent":`Inconsistent vulZ header`,"Bloc compressé hors fichier":`Compressed block outside file`,"Longueur de bloc invalide":`Invalid block length`,"Données .00t tronquées":`Truncated .00t data`,"Fichier .00t trop court":`.00t file too short`,"Index de sommet invalide dans la face ":`Invalid vertex index in face `,"Aucun point lisible dans le .str":`No readable point in the .str`,"Fichier de chaînes Micromine sans champs EAST / NORTH":`Micromine string file without EAST / NORTH fields`,"Index de face DXF invalide":`Invalid DXF face index`,"En-tête PLY invalide":`Invalid PLY header`,"Aucun point X Y Z lisible":`No readable X Y Z point`,"En-tête de grille .asc incomplet":`Incomplete .asc grid header`,"Pas assez de points pour trianguler":`Not enough points to triangulate`,"Format non reconnu : ":`Unrecognised format: `,"Le design et la topo ne se recouvrent pas en plan":`The design and the survey do not overlap in plan`,"Structure .00t non reconnue ":`Unrecognised .00t structure `,"Fichier .str associé introuvable — sélectionnez-le avec le .dtm : ":`Companion .str file not found — select it together with the .dtm: `,"User denied Geolocation":`Location permission denied`,Fosse:`Pit`,Blocs:`Blocks`,"Pit actuel":`Actual pit`,Profil:`Profile`,"Blocs de matériaux":`Material blocks`,"{0} bloc(s)":`{0} block(s)`,"aucun bloc (solide fermé ou contour fermé) trouvé":`no block found (closed solid or closed outline)`,"Blocs ({0} fichiers)":`Blocks ({0} files)`,"{0} bloc(s) importé(s)":`{0} block(s) imported`,"Calcul du reste à miner de {0} bloc(s)…":`Computing material left in {0} block(s)…`,"Calcul du reste à miner… {0} %":`Computing material left… {0} %`,"Blocs de matériaux restant à miner":`Material blocks left to mine`,"Importez vos blocs : solides .00t Vulcan (un fichier par bloc ou plusieurs solides dans une triangulation), DTM Surpac multi-objets (.dtm + .str), DXF (un calque par bloc), OBJ, LandXML, ou contours fermés (.str, .dxf) extrudés sur la hauteur de banc. Le matériau est deviné d'après le nom (ORE, HG, LG, WASTE, STERILE…) et modifiable.":`Import your blocks: Vulcan .00t solids (one file per block or several solids in one triangulation), multi-object Surpac DTM (.dtm + .str), DXF (one layer per block), OBJ, LandXML, or closed outlines (.str, .dxf) extruded over the bench height. The material is guessed from the name (ORE, HG, LG, WASTE…) and can be edited.`,"Importer des blocs":`Import blocks`,"Le reste à miner de chaque bloc est la partie du bloc située sous la topo actuelle (rôle « Topo actuelle »).":`The material left in each block is the part of the block below the current survey (“Current survey” role).`,"solide non fermé":`open solid`,reste:`left`,"Minerai restant":`Ore left`,"Ratio stérile / minerai":`Strip ratio (waste / ore)`,Matériau:`Material`,"Reste (t)":`Left (t)`,"Total (t)":`Total (t)`,"Calculé avec la topo « {0} » le {1}.":`Computed with survey “{0}” on {1}.`,aucune:`none`,"Pas encore calculé.":`Not computed yet.`,"La topo actuelle a changé : recalculez.":`The current survey changed: recompute.`,"Recalculer avec la topo actuelle":`Recompute with the current survey`,"Affichage 3D":`3D display`,"Matériaux et densités":`Materials and densities`,"Tri : nom":`Sort: name`,"Tri : reste":`Sort: left`,"Liste limitée aux 400 premiers blocs.":`List limited to the first 400 blocks.`,Bloc:`Block`,"Volume total (m³)":`Total volume (m³)`,"Reste (m³)":`Left (m³)`,"Reste (%)":`Left (%)`,Fichier:`File`,"Volume du bloc":`Block volume`,"Solide non fermé : volume approximatif.":`Open solid: approximate volume.`,"Aller au bloc":`Go to block`,"Tous les blocs":`All blocks`,"Nom du bloc":`Block name`,"Retirer le bloc « {0} » ?":`Remove block “{0}”?`,"Ajouter un matériau":`Add a material`,"Densité en t/m³ (en place). Les tonnages des blocs sont recalculés aussitôt.":`In-situ density in t/m³. Block tonnages update immediately.`,"Matériau {0}":`Material {0}`,Minerai:`Ore`,"Minerai haute teneur":`High-grade ore`,"Minerai basse teneur":`Low-grade ore`,Marginal:`Marginal`,Stérile:`Waste`,Oxyde:`Oxide`,Autre:`Other`,"Blocs entiers":`Whole blocks`,"Reste + miné":`Left + mined`,"Couleur matériau":`Material colour`,"Couleur % restant":`% left colour`,"Fond actuel (Z min)":`Current floor (Z min)`,"Z max":`Z max`,"Fond du design":`Design floor`,"Reste à descendre":`Depth still to go`,Levé:`Survey`,emprise:`extent`,"Pit actuel (levés topo)":`Actual pit (surveys)`,"Aucune topo actuelle. Importez le dernier levé (.00t, .dtm, .dxf, points XYZ/CSV, LandXML…).":`No current survey. Import the latest pickup (.00t, .dtm, .dxf, XYZ/CSV points, LandXML…).`,Altitude:`Elevation`,"Voir seulement le pit actuel":`Show only the actual pit`,"Tout afficher":`Show all`,"Importer un levé":`Import a survey`,Levés:`Surveys`,actuel:`current`,antérieur:`previous`,"Aucun levé.":`No survey.`,"Volume miné entre deux levés":`Volume mined between two surveys`,"Levé ancien":`Older survey`,"Levé récent":`Newer survey`,Comparer:`Compare`,"Choisissez deux levés différents":`Choose two different surveys`,"Comparaison des levés…":`Comparing surveys…`,"Volume miné":`Volume mined`,"Tonnage miné":`Tonnes mined`,"Remblai / dépôt":`Fill / dump`,"Surface travaillée":`Worked area`,"Levé antérieur":`Previous survey`,"Voir la fosse de profil en orientant le téléphone":`See the pit in profile by pointing the phone`,"Profil orienté":`Pointed profile`,"Pointez le téléphone : la coupe ou la silhouette de toute la fosse s'affiche dans cette direction, en direct.":`Point the phone: the section or silhouette of the whole pit is shown in that direction, live.`,"Arrêter la vue 3D orientée":`Stop the pointed 3D view`,"Vue 3D orientée":`Pointed 3D view`,"La vue 3D tourne avec le téléphone : tenu debout = vue de côté (profil), à plat = vue de dessus.":`The 3D view follows the phone: held upright = side view (profile), flat = plan view.`,"Silhouette = la fosse entière vue de côté (fond en vert, bord en brun, design en rouge). Coupe = plan vertical passant par vous ou par le centre de la fosse ; l'orange est le reste à miner. Sur iPhone, autorisez l'accès « Mouvement et orientation » quand il est demandé.":`Silhouette = the whole pit seen from the side (floor in green, rim in brown, design in red). Section = vertical plane through you or the pit centre; orange is the material left to mine. On iPhone, allow “Motion & Orientation” access when asked.`,"Importez d'abord un pit design ou une topo":`Import a pit design or a survey first`,"Vue orientée arrêtée":`Pointed view stopped`,"Vue orientée : tournez et inclinez le téléphone":`Pointed view: turn and tilt the phone`,"Aucun capteur d'orientation sur cet appareil":`No orientation sensor on this device`,"Arrêter la vue orientée":`Stop pointed view`,"Pointez le téléphone vers la fosse":`Point the phone towards the pit`,Silhouette:`Silhouette`,"De face":`Facing`,"Dans l'axe":`Along sight`,"Centre fosse":`Pit centre`,"Ma position":`My position`,Auto:`Auto`,Figer:`Freeze`,Figé:`Frozen`,"Pas de boussole détectée : faites glisser le curseur pour orienter le profil.":`No compass detected: drag the slider to orient the profile.`,bord:`rim`,"Silhouette : toute la fosse vue de côté (vert = fond, brun = bord, rouge = design)":`Silhouette: the whole pit seen from the side (green = floor, brown = rim, red = design)`,"Coupe verticale : orange = reste à miner":`Vertical section: orange = left to mine`,Visée:`Pointing`,"Profil vu de face, dans la direction pointée":`Profile facing the pointed direction`,"Profil dans l'axe de visée (gauche = derrière vous)":`Profile along the line of sight (left = behind you)`,Tir:`Blast`,"Démo chargée. Essayez l'onglet Terrain, ou Mine → Outils → Simulation.":`Demo loaded. Try the Field tab, or Mine → Tools → Simulation.`,"Aucune ligne lisible : il faut une colonne Date et des colonnes Minerai / Stérile.":`No readable row: a Date column and Ore / Waste columns are needed.`,"{0} journée(s) importée(s)":`{0} day(s) imported`,"{0} bloc(s) mis à jour":`{0} block(s) updated`,"Matériau affleurant":`Exposed material`,"Distance de transport : {0} m":`Haul distance: {0} m`,Mine:`Mine`,"Attributs (CSV)":`Attributes (CSV)`,"Teneur (g/t)":`Grade (g/t)`,"par défaut":`default`,"Concevoir un tir sur ce bloc":`Design a blast on this block`,"Minerai du mois":`Ore this month`,Guide:`Guide`,"Guide complet, consultable sans réseau. Le manuel PDF est fourni avec l'application.":`Full guide, available offline. The PDF manual comes with the app.`,Généré:`Generated`,Terrain:`Field`,"Court terme":`Short term`,"Moyen terme":`Medium term`,"Long terme":`Long term`,Production:`Production`,"Forage et tir":`Drill & blast`,"Vue terrain":`Field view`,Ingénierie:`Engineering`,Planification:`Planning`,Opérations:`Operations`,Données:`Data`,"Touchez les sommets du polygone du tir.":`Tap the vertices of the blast polygon.`,"Touchez le trajet du camion, du front au déversement.":`Tap the truck route, from face to dump.`,"Touchez le point d'amorçage du tir.":`Tap the blast initiation point.`,"Importez d'abord un pit design (.00t, .dtm, .dxf…).":`Import a pit design first (.00t, .dtm, .dxf…).`,Profondeur:`Depth`,"Pente globale":`Overall slope`,"RL du bord":`Rim RL`,"RL du fond":`Floor RL`,"Longueur × largeur":`Length × width`,axe:`axis`,Emprise:`Footprint`,périmètre:`perimeter`,"Angle de talus moyen":`Mean batter angle`,"Hauteur de banc":`Bench height`,gradins:`benches`,"Pente des rampes":`Ramp grade`,"Surface du fond":`Floor area`,"Reste à miner (dernier calcul)":`Left to mine (last run)`,"Répartition des pendages":`Dip distribution`,Gradins:`Benches`,"Haut.":`Height`,Berme:`Berm`,Pied:`Toe`,"Berme = surface plane du gradin / longueur du pied. Pente globale = profondeur / (rayon du bord − rayon du fond).":`Berm = flat bench area / toe length. Overall slope = depth / (rim radius − floor radius).`,"Générer crêtes et pieds":`Generate crests and toes`,"Vue terrain depuis le fond de fosse":`Field view from the pit floor`,"Exporter les gradins (CSV)":`Export benches (CSV)`,"% de surface par pendage (°)":`% of area by dip (°)`,"Crêtes et pieds — {0}":`Crests and toes — {0}`,"{0} ligne(s) créée(s)":`{0} line(s) created`,"Hauteur (m)":`Height (m)`,"Berme (m)":`Berm (m)`,"Longueur du pied (m)":`Toe length (m)`,"Surface de berme (m²)":`Berm area (m²)`,"jour {0} / {1}":`day {0} / {1}`,"rapport(s)":`report(s)`,"Minerai réalisé":`Ore mined`,objectif:`target`,"Stérile réalisé":`Waste mined`,Teneur:`Grade`,"Onces contenues":`Contained ounces`,Forage:`Drilling`,"Cadence requise":`Required rate`,"pour atteindre l'objectif":`to reach the target`,"Minerai exposé":`Exposed ore`,blocs:`blocks`,"Jours de minerai exposé":`Days of exposed ore`,"au rythme objectif":`at target rate`,Approfondissement:`Sinking rate`,"2 levés datés requis":`2 dated surveys needed`,"Conformité plancher":`Floor compliance`,"surfaces au design / atteintes":`on-design / reached areas`,"Réalisé journalier":`Daily actuals`,"Saisir une journée":`Enter a day`,Enregistrer:`Save`,"Import CSV : colonnes Date ; Minerai ; Stérile ; Teneur ; Forage ; Usine (séparateur ; ou ,).":`CSV import: columns Date; Ore; Waste; Grade; Drill; Mill (separator ; or ,).`,"Objectifs mensuels":`Monthly targets`,"Total déplacé":`Total moved`,"Date requise":`Date required`,"Journée enregistrée":`Day saved`,"Minerai (t)":`Ore (t)`,"Stérile (t)":`Waste (t)`,"Forage (m)":`Drilling (m)`,"Usine (t)":`Mill (t)`,"Le moyen terme s'appuie sur les blocs de matériaux : importez-les dans Mine → Blocs (ou chargez la démo).":`Medium-term planning uses material blocks: import them in Mine → Blocks (or load the demo).`,"Capacité flotte calculée : {0} t/mois (module Production).":`Computed fleet capacity: {0} t/month (Production module).`,Utiliser:`Use`,Mois:`Month`,Bancs:`Benches`,"Ordre de minage : banc par banc, du haut vers le bas, minerai plafonné par la capacité de l'usine.":`Mining order: bench by bench, top down, ore capped by mill capacity.`,"Réserves restantes par banc":`Remaining reserves by bench`,"Exporter le plan (CSV)":`Export the plan (CSV)`,"Le long terme s'appuie sur les blocs de matériaux : importez-les dans Mine → Blocs (ou chargez la démo).":`Long-term planning uses material blocks: import them in Mine → Blocks (or load the demo).`,"Stérile restant":`Waste left`,récupérables:`recoverable`,"Durée de vie restante":`Remaining life`,mois:`months`,ans:`years`,VAN:`NPV`,taux:`rate`,"Flux de trésorerie":`Cash flow`,revenu:`revenue`,"Teneur de coupure":`Cut-off grade`,"marginale (usine + G&A)":`marginal (mill + G&A)`,"Coût par once":`Cost per ounce`,"Trésorerie cumulée (M$)":`Cumulative cash (M$)`,"Courbe teneur – tonnage":`Grade–tonnage curve`,"Hypothèses économiques":`Economic assumptions`,"Teneurs : saisies par bloc (Blocs → fiche du bloc) ou par défaut selon le matériau. Ordonnancement banc par banc à la capacité du moyen terme.":`Grades: entered per block (Blocks → block card) or default by material. Bench-by-bench schedule at the medium-term capacity.`,"Flux mensuel":`Monthly cash flow`,Cumul:`Cumulative`,"Minerai au-dessus de la coupure (t)":`Ore above cut-off (t)`,"Teneur moyenne (g/t)":`Average grade (g/t)`,"Capacité journalière":`Daily capacity`,"limité par le":`limited by`,transport:`hauling`,chargement:`loading`,"Camions nécessaires":`Trucks required`,affectés:`assigned`,"Facteur d'adéquation":`Match factor`,"pelle en attente":`loader waiting`,"camions en file":`trucks queuing`,"Cycle camion":`Truck cycle`,trajet:`travel`,"Passes par camion":`Passes per truck`,passe:`pass`,"Productivité pelle":`Loader productivity`,opératoires:`operating`,"Productivité camion":`Truck productivity`,"Capacité mensuelle":`Monthly capacity`,"Jours pour le reste":`Days for the remainder`,restantes:`left`,"Heures opératoires = 24 × disponibilité × utilisation. Capacité = min(chargement, transport).":`Operating hours = 24 × availability × utilisation. Capacity = min(loading, hauling).`,"Engin de chargement":`Loading unit`,Camions:`Trucks`,"Matériau et transport":`Material and haulage`,"Mesurer la distance de transport sur la carte":`Measure the haul distance on the map`,Conçu:`Designed`,Foré:`Drilled`,Chargé:`Charged`,Tiré:`Fired`,Tirs:`Blasts`,Trous:`Holes`,"Mètres forés":`Metres drilled`,Explosif:`Explosive`,"Tonnage abattu":`Tonnes blasted`,"Facteur de poudre moyen":`Average powder factor`,"Nouveau tir : dessiner le polygone":`New blast: draw the polygon`,"Astuce : depuis la fiche d'un bloc, « Concevoir un tir sur ce bloc » reprend son contour et ses niveaux.":`Tip: from a block card, “Design a blast on this block” uses its outline and levels.`,"Tirs du projet":`Project blasts`,trous:`holes`,"Aucun tir conçu.":`No blast designed.`,rangées:`rows`,orientation:`orientation`,trou:`hole`,"Facteur de poudre":`Powder factor`,"Volume abattu":`Volume blasted`,"Charge max. / 8 ms":`Max charge / 8 ms`,durée:`duration`,"Vibration estimée":`Estimated vibration`,"Distance 5 mm/s":`5 mm/s distance`,"vous êtes à":`you are`,Maille:`Pattern`,Carrée:`Square`,Quinconce:`Staggered`,"Implanter : aller au trou le plus proche":`Stake out: go to the nearest hole`,"Point d'amorçage":`Initiation point`,"Trous (CSV)":`Holes (CSV)`,"Tous les tirs":`All blasts`,Trou:`Hole`,"Prof.":`Depth`,"Z collet":`Collar Z`,"Z pied":`Toe Z`,"Profondeur (m)":`Depth (m)`,"Charge (kg)":`Charge (kg)`,"Retard (ms)":`Delay (ms)`,"Nom du tir":`Blast name`,"Supprimer le tir « {0} » ?":`Delete blast “{0}”?`,Semaine:`Week`,Trimestre:`Quarter`,Année:`Year`,"Réalité augm.":`Augm. reality`,Quitter:`Exit`,Libre:`Free`,Capteurs:`Sensors`,Doigt:`Finger`,"Sur site · GPS":`On site · GPS`,"Visite virtuelle":`Virtual tour`,RA:`AR`,"Pas de capteur d'orientation : regardez autour en glissant le doigt.":`No orientation sensor: look around by dragging your finger.`,"Pas encore de position GPS : restez en visite virtuelle.":`No GPS position yet: stay in virtual tour.`,"Réalité augmentée : le design est superposé à la caméra (précision du GPS et de la boussole du téléphone).":`Augmented reality: the design is overlaid on the camera (phone GPS and compass accuracy).`,"Caméra indisponible : {0}":`Camera unavailable: {0}`,Limite:`Limit`,Reste:`Left`,"Sous la surface":`Below the surface`,"Visez la fosse pour lire ses informations":`Aim at the pit to read its information`,"À pied":`On foot`,"Cabine camion":`Truck cab`,Pelle:`Excavator`,Drone:`Drone`,Vitesse:`Speed`,"Capacité (t/mois)":`Capacity (t/month)`,"Usine (t/mois)":`Mill (t/month)`,"Horizon (mois)":`Horizon (months)`,"Prix ($/oz)":`Price ($/oz)`,"Récupération (%)":`Recovery (%)`,"Minage ($/t)":`Mining ($/t)`,"Traitement ($/t)":`Processing ($/t)`,"G&A ($/t minerai)":`G&A ($/t ore)`,"Actualisation (%)":`Discount rate (%)`,Nombre:`Number`,"Godet (m³)":`Bucket (m³)`,Remplissage:`Fill factor`,"Cycle (s)":`Cycle (s)`,Disponibilité:`Availability`,Utilisation:`Utilisation`,"Charge utile (t)":`Payload (t)`,"Vitesse chargé (km/h)":`Loaded speed (km/h)`,"Vitesse à vide (km/h)":`Empty speed (km/h)`,"Mise à quai (min)":`Spotting (min)`,"Vidage (min)":`Dumping (min)`,"Attente (min)":`Queuing (min)`,"Distance (m, aller)":`Distance (m, one way)`,Foisonnement:`Swell factor`,"Banquette (m)":`Burden (m)`,"Espacement (m)":`Spacing (m)`,"Orientation (°)":`Orientation (°)`,"Sous-foration (m)":`Subdrill (m)`,"Bourrage (m)":`Stemming (m)`,"Diamètre (mm)":`Diameter (mm)`,"Densité explosif":`Explosive density`,"Densité roche":`Rock density`,"Plancher (RL, vide = auto)":`Floor (RL, empty = auto)`,"Retard trous (ms)":`Hole delay (ms)`,"Retard rangées (ms)":`Row delay (ms)`,"Vibration K":`Vibration K`,"Vibration β":`Vibration β`,"Distance PPV (m)":`PPV distance (m)`,Démarrer:`Getting started`,"Carte 3D et position":`3D map and position`,"Vue terrain (comme sur place)":`Field view (as if on site)`,"Volumes, blocs, pit actuel":`Volumes, blocks, actual pit`,"Planification court, moyen, long terme":`Short, medium, long-term planning`,"Outils, points, export":`Tools, points, export`,"Précision et bonnes pratiques":`Accuracy and good practice`},Kx=`fr`,qx=Object.keys(Gx).filter(e=>/[ :]$/.test(e)),Jx=e=>{Kx=e===`en`?`en`:`fr`,document.documentElement.lang=Kx},Yx=()=>Kx;function q(e,...t){let n=e;if(Kx===`en`){if(Gx[e])n=Gx[e];else for(let t of qx)if(e.startsWith(t)){n=Gx[t]+e.slice(t.length);break}}return t.forEach((e,t)=>{n=n.replace(`{`+t+`}`,e)}),n}function J(e,t=0){return e==null||!Number.isFinite(e)?`—`:new Intl.NumberFormat(Kx===`en`?`en-US`:`fr-FR`,{minimumFractionDigits:t,maximumFractionDigits:t}).format(e)}function Xx(e){return Number.isFinite(e)?Math.abs(e)>=1e8?J(e/1e6,1)+` M`:J(e,0)+` `:`— `}var Zx=`2.0.0`,Qx=`Koffi Bruno`,Y=e=>document.getElementById(e),$x=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),eS=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7),X=null,Z=[],tS=null,nS=null,Q={pos:null,fix:null,compass:NaN,mode:`gps`,gpsOn:!1,gpsErr:``,orient:null,orient3d:!1,stopOrient3d:null,importMode:`layers`,blockSort:`remaining`,onPosHooks:new Set,stPeriod:`month`,pendingInit:null,tool:null,target:null,alertLevel:``,simT:0,simTimer:null,volPoly:null,lastVol:null,hudOpen:!1,sheet:null},rS={lang:`fr`,theme:`dark`,sound:!0,vibrate:!0,lastProject:null};function iS(e){return{id:eS(),name:e,created:Date.now(),crs:`utm-auto`,zone:null,south:!1,custom:``,zOffset:0,zSource:`topo`,calib:{enabled:!1,points:[]},benchH:10,benchRef:0,density:2.6,tol:.3,alertDist:15,vExag:1,limitSource:`auto`,cell:0,waypoints:[],materials:by.map(e=>({...e})),blockMode:`ghost`,blockColor:`material`}}var $=new ed(Y(`view`));$.groundZ=(e,t)=>tw(e,t);async function aS(){Object.assign(rS,await Wy(`prefs`).catch(()=>null)||{}),oS(),uS();let e=await Ly().catch(()=>[]),t=rS.lastProject&&e.find(e=>e.id===rS.lastProject)?rS.lastProject:e[0]?.id;if(t?await _S(t):(X=iS(q(`Mon projet`)),await zy(X),await _S(X.id)),Ob(e=>{Q.orient=e,Q.compass=kb(Q.compass,e.heading,.3),Q.pos&&Q.mode===`gps`&&!(Q.fix?.speed>.5)&&(Q.pos.heading=Q.compass,$.setPosition(YS()))}),!Ab&&`serviceWorker`in navigator&&(location.protocol===`https:`||location.hostname===`localhost`)){let e=!!navigator.serviceWorker.controller,t=!1;navigator.serviceWorker.addEventListener(`controllerchange`,()=>{e&&!t&&(t=!0,location.reload())}),navigator.serviceWorker.register(`./sw.js`).then(e=>e.update()).catch(()=>{})}Z.length?WS():yS(),Ky(),setTimeout(()=>{let e=document.getElementById(`splash`);e&&(e.classList.add(`out`),setTimeout(()=>e.remove(),600))},700)}function oS(){Jx(rS.lang),document.documentElement.dataset.theme=rS.theme,$.setTheme(rS.theme!==`light`),document.querySelector(`meta[name=theme-color]`).content=rS.theme===`light`?`#e9eef3`:`#0d1117`}var sS=()=>Gy(`prefs`,{...rS}),cS=()=>zy(X),lS=[[`map`,`Carte`,K.map],[`layers`,`Calques`,K.layers],[`mine`,`Mine`,K.cube],[`terrain`,`Terrain`,K.eye3d],[`settings`,`Réglages`,K.settings]];function uS(){Y(`tabs`).innerHTML=lS.map(([e,t,n])=>`<button data-tab="${e}" class="${e===`map`?`on`:``}">${n}<span>${q(t)}</span></button>`).join(``),Y(`tabs`).onclick=e=>{let t=e.target.closest(`button`);t&&dS(t.dataset.tab)},Y(`fabLocate`).innerHTML=K.locate,Y(`fabFit`).innerHTML=K.fit,Y(`fabLayers`).innerHTML=K.layers,Y(`fabMode`).innerHTML=`<span class="lbl">${$.mode===`plan`?`3D`:q(`PLAN`)}</span>`,Y(`fabLocate`).onclick=()=>{Tb(),XS()},Y(`fabFit`).onclick=()=>$.fitTo(jS()),Y(`fabLayers`).onclick=()=>dS(`layers`),Y(`fabOrient`).innerHTML=K.compass3d,Y(`fabOrient`).onclick=WC,Y(`fabMode`).onclick=()=>{$.setMode($.mode===`plan`?`3d`:`plan`),Y(`fabMode`).innerHTML=`<span class="lbl">${$.mode===`plan`?`3D`:q(`PLAN`)}</span>`},Y(`compass`).onclick=()=>$.resetNorth(),Y(`btnProject`).onclick=vS,Y(`gpsPill`).onclick=()=>Q.gpsOn?ZS():WS(!0),Y(`sheetClose`).onclick=pS,Y(`toolUndo`).onclick=()=>{Q.tool&&(Q.tool.pts.pop(),cC())},Y(`toolDone`).onclick=uC,Y(`toolCancel`).onclick=dC,Y(`toolDone`).textContent=q(`Terminer`),Y(`toolCancel`).textContent=q(`Annuler`),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-import]`);t&&(Q.importMode=t.dataset.import)},!0),Y(`fileInput`).onchange=e=>{let t=[...e.target.files];e.target.value=``,t.length&&TS(t)},$.onTap=lC,$.onUserMove=()=>{$.follow=!1,Y(`fabLocate`).classList.remove(`on`)};let e=999;$.onFrame=()=>{let t=$.heading();Math.abs(t-e)>.2&&(Y(`compass`).firstChild.style.transform=`rotate(${-t}deg)`,e=t)},iC()}function dS(e){if(document.querySelectorAll(`#tabs button`).forEach(t=>t.classList.toggle(`on`,t.dataset.tab===e)),e!==`terrain`&&Nx()&&Fx(iw),e===`map`)return pS();if(e===`terrain`){pS(),Px(iw);return}({layers:BS,tools:hC,mine:qC,volume:qC,settings:GC})[e]()}function fS(e,t,n,r){Q.sheet=r||e,Y(`sheetTitle`).textContent=e,Y(`sheetBody`).innerHTML=t,Y(`sheet`).classList.remove(`hidden`),Y(`hud`).classList.add(`hidden`),n&&n(Y(`sheetBody`))}function pS(){Q.sheet=null,Y(`sheet`).classList.add(`hidden`),Q.tool||Y(`hud`).classList.remove(`hidden`),document.querySelectorAll(`#tabs button`).forEach(e=>e.classList.toggle(`on`,e.dataset.tab===`map`))}var mS=0;function hS(e,t=2600){let n=Y(`toast`);n.textContent=e,n.classList.add(`show`),clearTimeout(mS),mS=setTimeout(()=>n.classList.remove(`show`),t)}function gS(e){return Y(`busyMsg`).textContent=e||``,Y(`busy`).classList.toggle(`hidden`,!e),new Promise(e=>setTimeout(e,40))}async function _S(e){eC();for(let e of Z)$.removeLayer(e.id);$.removeLayer(`__limit`),$.origin=null,$.clearTrail(),X={...iS(``),...await Ry(e)},Z=(await Hy(e)).sort((e,t)=>e.created-t.created),rS.lastProject=e,sS(),Y(`projName`).textContent=X.name,Nx()&&Fx(iw),tS=null,Q.pos=null,Q.target=null,Q.volPoly=null,Q.lastVol=X.lastVol||null,$.setExaggeration(X.vExag||1);let t=MS();t&&$.setOrigin(t);for(let e of Z)e.role===`design`&&e.kind===`mesh`&&e.edges===void 0&&(e.edges=!0),PS(e);HS(),fC(),ZC(),t&&$.fitTo(jS()),iC()}function vS(){Ly().then(e=>{e.sort((e,t)=>t.created-e.created),fS(q(`Projets`),`
      <div class="stack">
        ${e.map(e=>`<div class="list-item"><div class="grow"><b>${$x(e.name)}</b><small class="muted">${new Date(e.created).toLocaleDateString()}</small></div>
          ${e.id===X.id?`<span class="tag">${q(`ouvert`)}</span>`:`<button class="btn" data-open="${e.id}">${q(`Ouvrir`)}</button>`}
          <button class="btn ghost danger" data-del="${e.id}">${K.trash}</button></div>`).join(``)}
        <div class="row"><input class="inp grow" id="npName" placeholder="${q(`Nom du nouveau projet (fosse, phase…)`)}"><button class="btn primary" id="npAdd">${K.plus}</button></div>
        <button class="btn block" id="npDemo">${K.play} ${q(`Charger la fosse de démonstration`)}</button>
        <p class="small muted">${q(`Chaque projet garde ses calques, son système de coordonnées, son calage et ses points. Tout reste stocké sur l'appareil.`)}</p>
      </div>`,t=>{t.onclick=async t=>{let n=t.target.closest(`[data-open]`),r=t.target.closest(`[data-del]`);if(n&&(pS(),await gS(q(`Ouverture…`)),await _S(n.dataset.open),gS()),r){let t=e.find(e=>e.id===r.dataset.del);if(!confirm(q(`Supprimer le projet « {0} » et tous ses calques de l'appareil ?`,t.name)))return;if(await Uy(t.id),t.id===X.id){let n=e.filter(e=>e.id!==t.id);n.length?await _S(n[0].id):(X=iS(q(`Mon projet`)),await cS(),await _S(X.id))}vS()}},Y(`npAdd`).onclick=async()=>{let t=iS(Y(`npName`).value.trim()||q(`Projet {0}`,e.length+1));await zy(t),pS(),await _S(t.id),yS()},Y(`npDemo`).onclick=bS},`projects`)})}function yS(){fS(`KB Pit Limit`,`
    <div class="welcome">
      <div class="logo-big"></div>
      <p class="small" style="color:var(--cyan);letter-spacing:3px;margin:-4px 0 8px">KOFFI BRUNO</p>
      <p><b>${q(`Votre fosse en 3D, votre position sur le pit design, le volume restant à miner — sans internet.`)}</b></p>
      <div class="formats">${[`.00t Vulcan`,`.dtm + .str Surpac`,`.str`,`.dxf`,`LandXML`,`.obj`,`.stl`,`.ply`,`XYZ / CSV`,`.asc`].map(e=>`<span>${e}</span>`).join(``)}</div>
      <div class="stack">
        ${xS(`layers`,`btn primary block`,`${K.upload} ${q(`Importer le pit design et la topo`)}`)}
        <button class="btn block" id="wDemo">${K.play} ${q(`Essayer avec la fosse de démonstration`)}</button>
      </div>
      <p class="small muted" style="margin-top:14px">${q(`Astuce : pour un DTM Surpac, sélectionnez ensemble le .dtm et son .str. Vous pouvez choisir plusieurs fichiers à la fois.`)}</p>
    </div>`,()=>{Y(`wDemo`).onclick=bS},`welcome`)}async function bS(){pS(),await gS(q(`Création de la fosse de démonstration…`));let e=Ay(),t=iS(q(`Démo — fosse synthétique`));t.crs=`EPSG:32630`,t.benchH=10,t.benchRef=0,t.density=2.7,await zy(t);let n=(e,n,r={})=>({id:eS(),projectId:t.id,name:e.name,kind:`mesh`,role:n,format:e.format,V:e.V,T:e.T,created:Date.now()+Z.length,visible:!0,opacity:1,wire:!1,notes:[],...wS(n,!0),...r}),r=new Date().toISOString().slice(0,10),i=[n(e.design,`design`),n(e.topo,`topo`,{date:r}),n(e.initial,`initial`,{visible:!1,date:`2025-01-01`}),{id:eS(),projectId:t.id,name:`DEMO_blocs.00t`,kind:`blocks`,role:`blocks`,format:q(`Blocs de matériaux`),blocks:e.blocks,stats:null,visible:!0,notes:[q(`{0} bloc(s)`,e.blocks.length)]},{id:eS(),projectId:t.id,name:`DEMO_cretes_pieds.str`,kind:`lines`,role:`lines`,format:`Démo`,lines:e.lines,created:Date.now()+9,visible:!0,opacity:1,color:`#ffe066`,notes:[]}];i.forEach((e,t)=>{e.created=Date.now()+t});for(let e of i)await By(e);await _S(t.id),await FC();let a=(e,t)=>{let n=Math.sin(e*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)};X.targets={oreT:31e4,wasteT:95e4,grade:1.7,drillM:25e3,millT:3e5},X.actuals=[];for(let e=25;e>=1;e--){let t=new Date(Date.now()-e*864e5).toISOString().slice(0,10);X.actuals.push({date:t,oreT:Math.round(8500+3500*a(e,1)),wasteT:Math.round(26e3+9e3*a(e,2)),grade:Math.round((1.4+.6*a(e,3))*100)/100,drillM:Math.round(650+300*a(e,4)),millT:Math.round(9e3+1500*a(e,5))})}await cS();let o=OS(`design`),s=OS(`topo`),c=Z.find(e=>e.role===`initial`),l=await yC({design:{V:o.V,T:o.T},topo:{V:s.V,T:s.T},initial:c?{V:c.V,T:c.T}:null,benchHeight:X.benchH,benchRef:X.benchRef,density:X.density,tol:X.tol});l.ok&&(Q.lastVol=X.lastVol={...l.res,design:o.name,topo:s.name,initial:c?.name,zone:q(`Toute la fosse`),date:Date.now()},await cS());let u=Z.find(e=>e.kind===`blocks`),d=u&&u.blocks.find(e=>{if(![`hg`,`ore`].includes(e.material))return!1;let t=lf(e.V),n=tw((t.x0+t.x1)/2,(t.y0+t.y1)/2);return Math.abs(n-t.z1)<.6});if(d){let e=lf(d.V);Tx(iw,kx(d.V),{name:`${q(`Tir`)} ${d.name}`,params:{floorRL:e.z0,benchH:e.z1-e.z0}}),pS()}gS(),hS(q(`Démo chargée. Essayez l'onglet Terrain, ou Mine → Outils → Simulation.`),4500)}var xS=(e,t,n,r=``)=>`<label for="fileInput" role="button" class="${t}" data-import="${e}" ${r}>${n}</label>`,SS={initial:/(natural|initial|ogl|original|terrain[_ ]?nat|\btn\b|\bng\b|pre[_-]?min)/i,topo:/(topo|survey|lev[eé]|pick ?up|actual|as[_-]?built|drone|lidar|uav|_ton\b|_ton_|mined|current|ftp|eom|eow)/i,design:/(design|pit|final|ultimate|stage|phase|shell|ramp|dsgn|limit|pushback|cutback)/i};function CS(e){for(let t of[`initial`,`topo`,`design`])if(SS[t].test(e))return t;return null}function wS(e,t){switch(e){case`design`:return{color:`#c0504d`,colorMode:`elev`,edges:!0};case`topo`:return{color:`#a3a9ae`,colorMode:t?`diff`:`solid`,opacity:1};case`initial`:return{color:`#8c7ae6`,colorMode:`solid`,opacity:.45};case`survey`:return{color:`#c9a27a`,colorMode:`solid`,opacity:.6};default:return{color:`#9fb3c8`,colorMode:`solid`}}}async function TS(e){if(Q.importMode===`actuals`||Q.importMode===`attrs`){let t=Q.importMode;Q.importMode=`layers`;let n=await e[0].text();if(t===`actuals`){let e=sx(n);if(!e.length)return alert(q(`Aucune ligne lisible : il faut une colonne Date et des colonnes Minerai / Stérile.`));let t=new Map((X.actuals||[]).map(e=>[e.date,e]));for(let n of e)t.set(n.date,n);X.actuals=[...t.values()].sort((e,t)=>e.date.localeCompare(t.date)),await cS(),hS(q(`{0} journée(s) importée(s)`,e.length)),bx(iw);return}hS(q(`{0} bloc(s) mis à jour`,rw(n))),LC();return}pS(),await gS(q(`Lecture de {0} fichier(s)…`,e.length));let t=new Map;for(let n of e)t.set(n.name.toLowerCase(),{name:n.name,buf:await n.arrayBuffer()});let n=new Set,r=new TextDecoder(`latin1`);for(let{name:e,buf:i}of t.values()){if(!/\.dtm$/i.test(e))continue;let t=r.decode(new Uint8Array(i,0,Math.min(400,i.byteLength))).split(`
`)[0].split(`,`)[0].trim().split(/[\\/]/).pop().toLowerCase();n.add(t),n.add(e.toLowerCase().replace(/\.dtm$/,`.str`))}let i=new Map([...t].map(([e,t])=>[e,t.buf])),a=[],o=[],s=Q.importMode===`blocks`;Q.importMode=`layers`;let c=[],l=Z.some(e=>e.role===`design`);for(let[e,{name:r,buf:u}]of t)if(!(n.has(e)&&/\.str$/i.test(r)&&[...t.keys()].some(e=>e.endsWith(`.dtm`))))try{await gS(q(`Lecture de {0}…`,r));let e=cf(r,u,i);if(s){let t=Ty(e,r,X.benchH||10);t.length||o.push(`${r} : ${q(`aucun bloc (solide fermé ou contour fermé) trouvé`)}`),c.push(...t);continue}for(let t of e.meshes){if(!t.T.length)continue;let n=CS(r)||(l?`other`:`design`);n===`design`&&(l=!0),n===`topo`&&Z.some(e=>e.role===`topo`)&&(n=`survey`),a.push({id:eS(),projectId:X.id,name:e.meshes.length>1?t.name:r,kind:`mesh`,role:n,format:t.format,V:t.V,T:t.T,notes:e.notes,visible:n!==`survey`,opacity:1,wire:!1,date:ES(r),...wS(n,l)})}if(e.lines.length){let t=/limit|boundary|limite|perimet/i.test(r)?`limit`:`lines`;a.push({id:eS(),projectId:X.id,name:r,kind:`lines`,role:t,format:r.split(`.`).pop().toUpperCase(),lines:e.lines,notes:e.notes,visible:!0,opacity:1,color:t===`limit`?`#ff4d4f`:`#ffe066`})}if(!e.meshes.length&&!e.lines.length&&e.points){await gS(q(`Triangulation de {0} points…`,J(e.points.length/3)));let t=$d(e.points,r),n=CS(r)||`topo`;a.push({id:eS(),projectId:X.id,name:r,kind:`mesh`,role:n,format:q(`Points triangulés`),V:t.V,T:t.T,notes:e.notes,visible:!0,opacity:1,wire:!1,...wS(n,l)})}!e.meshes.length&&!e.lines.length&&!e.points&&o.push(`${r} : ${q(`aucune géométrie trouvée`)}`)}catch(e){console.error(e),o.push(`${r} : ${q(e.message)}`)}c.length&&a.push({id:eS(),projectId:X.id,name:e.length===1?e[0].name:q(`Blocs ({0} fichiers)`,e.length),kind:`blocks`,role:`blocks`,format:q(`Blocs de matériaux`),blocks:c,stats:null,visible:!0,notes:[q(`{0} bloc(s)`,c.length)]});let u=Date.now();a.forEach((e,t)=>{e.created=u+t});for(let e of a){await gS(q(`Enregistrement de {0}…`,e.name));try{await By(e)}catch(t){o.push(`${e.name} : ${q(`stockage impossible`)} (${t.message})`);continue}Z.push(e)}let d=MS(),f=!$.origin;d&&$.setOrigin(d);for(let e of Z)(a.includes(e)||e.colorMode===`diff`)&&PS(e);HS(),fC(),f&&d&&$.fitTo(jS()),gS(),JS(),o.length&&alert(q(`Certains fichiers n'ont pas pu être lus :`)+`

`+o.join(`
`)),a.length&&(c.length?(hS(q(`{0} bloc(s) importé(s)`,c.length)),await FC(),TC(`blocks`)):(hS(q(`{0} calque(s) importé(s)`,a.length)),BS()),WS())}function ES(e){let t=e.match(/(20\d{2})[-_.]?([01]\d)[-_.]?([0-3]\d)/);return t?`${t[1]}-${t[2]}-${t[3]}`:(t=e.match(/([0-3]\d)[-_.]([01]\d)[-_.](20\d{2})/),t?`${t[3]}-${t[2]}-${t[1]}`:(t=e.match(/(?:^|[^\d])(2\d)([01]\d)([0-3]\d)(?:[^\d]|$)/),t?`20${t[1]}-${t[2]}-${t[3]}`:new Date().toISOString().slice(0,10)))}var DS=()=>Z.filter(e=>e.kind===`mesh`),OS=e=>Z.find(t=>t.kind===`mesh`&&t.role===e&&t.visible!==!1)||Z.find(t=>t.kind===`mesh`&&t.role===e),kS=e=>e?(e._surf||(e._surf=new df(e.V,e.T)),e._surf):null,AS=e=>{if(e._b)return e._b;if(e.kind===`mesh`)e._b=lf(e.V);else if(e.kind===`blocks`){let t=null;for(let n of e.blocks)t=uf(t,n._b||(n._b=lf(n.V)));e._b=t}else{let t=null;for(let n of e.lines||[])t=uf(t,lf(n.P));e._b=t}return e._b};function jS(){let e=OS(`design`);return e?AS(e):MS()}function MS(){let e=null;for(let t of Z)t.visible!==!1&&(e=uf(e,AS(t)));if(!e)for(let t of Z)e=uf(e,AS(t));return e}function NS(e){if(e.kind!==`mesh`)return null;let t=e.V.length/3;if(e.colorMode===`elev`){let n=AS(e),r=new Float32Array(t*3),i=Math.max(1e-6,n.z1-n.z0),a=X.benchH>0?X.benchH:0;for(let o=0;o<t;o++){let t=e.V[3*o+2];a&&(t=Math.floor((t-X.benchRef+1e-6)/a)*a+X.benchRef+a/2);let[s,c,l]=Qu((t-n.z0)/i);r[3*o]=s,r[3*o+1]=c,r[3*o+2]=l}return r}if(e.colorMode===`mat`){if(!DC().length)return null;let n=new Float32Array(t*3),r=new Map;for(let i=0;i<t;i++){let t=$C(e.V[3*i],e.V[3*i+1],e.V[3*i+2]-.3),a=[.5,.5,.52];if(t){let e=t.b.material;if(!r.has(e)){let t=OC(e).color.replace(`#`,``);r.set(e,[0,2,4].map(e=>parseInt(t.slice(e,e+2),16)/255))}a=r.get(e)}n[3*i]=a[0],n[3*i+1]=a[1],n[3*i+2]=a[2]}return n}if(e.colorMode===`diff`){let n=OS(`design`);if(!n||n===e)return null;let r=kS(n),i=new Float32Array(t*3);for(let n=0;n<t;n++){let t=r.zAt(e.V[3*n],e.V[3*n+1]),[a,o,s]=Number.isFinite(t)?$u(e.V[3*n+2]-t,X.tol):[.62,.64,.66];i[3*n]=a,i[3*n+1]=o,i[3*n+2]=s}return i}return null}function PS(e){if($.origin){if(e.kind===`blocks`)return PC(e);$.setLayer(e,NS(e))}}async function FS(e){let t={};for(let n of Object.keys(e))n.startsWith(`_`)||(t[n]=e[n]);t.blocks&&(t.blocks=t.blocks.map(e=>{let t={};for(let n of Object.keys(e))n.startsWith(`_`)||(t[n]=e[n]);return t})),await By(t)}function IS(e){let t=AS(e),n=[];return e.kind===`mesh`?n.push(q(`{0} triangles`,J(e.T.length/3))):e.kind===`blocks`?n.push(q(`{0} bloc(s)`,J(e.blocks.length))):n.push(q(`{0} ligne(s)`,J(e.lines.length))),t&&n.push(`Z ${J(t.z0,1)} → ${J(t.z1,1)}`),n.join(` · `)}var LS=[[`design`,`Pit design`],[`topo`,`Topo actuelle`],[`survey`,`Levé antérieur`],[`initial`,`Terrain initial`],[`other`,`Autre surface`]],RS=[[`blocks`,`Blocs de matériaux`]],zS=[[`lines`,`Lignes (crêtes, pieds…)`],[`limit`,`Limite de fosse`]];function BS(){let e=`
    <div class="stack">
      ${xS(`layers`,`btn primary block`,`${K.upload} ${q(`Importer des fichiers`)}`)}
      <div id="lList">${Z.length?``:`<p class="muted">${q(`Aucun calque. Importez un pit design (.00t, .dtm, .dxf, .str…) et une topo.`)}</p>`}</div>
      <p class="small muted">${q(`Formats : {0}. Le rôle « Pit design » sert au calcul de position, de limite et de volume ; « Topo actuelle » au reste à miner.`,sf.join(` `))}</p>
    </div>`;fS(q(`Calques`),e,e=>{let t=Y(`lList`),n=()=>{Z.length&&(t.innerHTML=Z.map(e=>{let t=e.kind===`mesh`?LS:e.kind===`blocks`?RS:zS,n=t.find(t=>t[0]===e.role);return`<div class="layer ${e.visible===!1?`off`:``}" data-id="${e.id}">
          <label class="sw" style="background:${e.kind===`blocks`?`linear-gradient(135deg,#e8473b 50%,#8d99a6 50%)`:e.colorMode===`elev`?`linear-gradient(135deg,#1f4aa8,#4cbd66,#f2d33f,#c73338)`:e.colorMode===`diff`?`linear-gradient(135deg,#3f8cf2,#33c75a,#fbbf26,#f97316)`:e.color}"><input type="color" value="${e.color}" data-act="color"></label>
          <div class="nm" data-act="open"><b>${$x(e.name)}</b><small><span class="role ${e.role}">${q(n?n[1]:e.role)}</span>${IS(e)}</small></div>
          <button class="eye" data-act="vis">${e.visible===!1?K.eyeOff:K.eye}</button>
          <div class="more">
            <div class="fields" style="margin-top:6px">
              <label class="f">${q(`Rôle`)}<select data-act="role">${t.map(([t,n])=>`<option value="${t}" ${t===e.role?`selected`:``}>${q(n)}</option>`).join(``)}</select></label>
              ${e.kind===`mesh`?`<label class="f">${q(`Couleur`)}<select data-act="cmode">
                <option value="elev" ${e.colorMode===`elev`?`selected`:``}>${q(`Par banc / altitude`)}</option>
                <option value="diff" ${e.colorMode===`diff`?`selected`:``}>${q(`Écart au design`)}</option>
                <option value="mat" ${e.colorMode===`mat`?`selected`:``}>${q(`Matériau affleurant`)}</option>
                <option value="solid" ${e.colorMode===`solid`?`selected`:``}>${q(`Unie`)}</option></select></label>`:`<div></div>`}
            </div>
            <label class="f" style="margin-top:8px">${q(`Opacité`)} <input type="range" min="0.1" max="1" step="0.05" value="${e.opacity??1}" data-act="opacity"></label>
            ${e.kind===`mesh`?`<div class="switch"><span>${q(`Arêtes des triangles`)}</span><input type="checkbox" data-act="wire" ${e.wire?`checked`:``}></div>`:``}
            <p class="small muted">${$x(e.format||``)}${e.notes?.length?` — `+$x(e.notes.join(` · `)):``}</p>
            <div class="row" style="flex-wrap:wrap">
              <button class="btn" data-act="zoom">${K.fit} ${q(`Zoom`)}</button>
              ${e.kind===`lines`?`<button class="btn" data-act="tri">${K.grid} ${q(`Trianguler`)}</button>`:``}
              ${e.kind===`blocks`?`<button class="btn" data-act="blocks">${K.volume} ${q(`Blocs`)}</button>`:``}
              <button class="btn" data-act="rename">${q(`Renommer`)}</button>
              <button class="btn danger" data-act="del">${K.trash}</button>
            </div>
          </div>
        </div>`}).join(``))};n();let r=e=>Z.find(t=>t.id===e.target.closest(`.layer`)?.dataset.id);t.onclick=async e=>{let t=r(e),i=e.target.closest(`[data-act]`)?.dataset.act;if(t&&i){if(i===`open`&&e.target.closest(`.layer`).classList.toggle(`open`),i===`vis`&&(t.visible=t.visible===!1,$.setVisible(t.id,t.visible),FS(t),n(),HS(),JS()),i===`zoom`&&(pS(),$.fitTo(AS(t))),i===`blocks`){TC(`blocks`);return}if(i===`rename`){let e=prompt(q(`Nom du calque`),t.name);e&&(t.name=e,FS(t),n())}if(i===`del`){if(!confirm(q(`Retirer « {0} » du projet ?`,t.name)))return;$.removeLayer(t.id),Z=Z.filter(e=>e!==t),await Vy(t.id),VS(),HS(),n(),JS()}if(i===`tri`){await gS(q(`Triangulation des lignes…`));try{let e=ef(t.lines,t.name+` (surface)`),n=Z.some(e=>e.role===`design`)?`other`:`design`,r={id:eS(),projectId:X.id,name:t.name+` — `+q(`surface`),kind:`mesh`,role:n,format:q(`Lignes triangulées`),V:e.V,T:e.T,notes:[q(`Surface approchée depuis les chaînes (densifiées tous les 2 m)`)],visible:!0,opacity:1,wire:!1,created:Date.now(),...wS(n,!0)};await By(r),Z.push(r),PS(r),VS(),HS(),hS(q(`Surface créée : {0} triangles`,J(e.T.length/3)))}catch(e){alert(q(e.message))}gS(),n()}}},t.onchange=t=>{let i=r(t),a=t.target.dataset.act;if(i){if(a===`color`&&(i.color=t.target.value,i.kind===`mesh`&&i.colorMode!==`solid`&&(i.colorMode=`solid`),PS(i)),a===`role`){if(t.target.value===`design`||t.target.value===`topo`||t.target.value===`initial`)for(let e of Z)e!==i&&e.role===t.target.value&&e.kind===`mesh`&&(e.role=t.target.value===`topo`?`survey`:`other`,Object.assign(e,wS(e.role,!0)),PS(e),FS(e));t.target.value===`topo`&&(MC=null),i.role=t.target.value,i.kind===`mesh`&&Object.assign(i,wS(i.role,!!OS(`design`))),PS(i),VS(),HS(),JS()}a===`cmode`&&(i.colorMode=t.target.value,PS(i)),a===`opacity`&&(i.opacity=Number(t.target.value),PS(i)),a===`wire`&&(i.wire=t.target.checked,PS(i)),FS(i),n(),e.querySelector(`.layer[data-id="${i.id}"]`)?.classList.add(`open`)}}},`layers`)}function VS(){MC=null;for(let e of Z)(e.kind===`mesh`&&(e.colorMode===`diff`||e.colorMode===`elev`)||e.kind===`blocks`)&&PS(e)}function HS(){$.removeLayer(`__limit`),nS=null;let e=Z.find(e=>e.kind===`lines`&&e.role===`limit`&&e.visible!==!1);if(e)nS=e.lines.reduce((e,t)=>vf(t.P)>vf(e.P)?t:e).P,(nS[0]!==nS[nS.length-3]||nS[1]!==nS[nS.length-2])&&(nS=Float64Array.from([...nS,nS[0],nS[1],nS[2]]));else{let e=OS(`design`);e&&(e._loops||(e._loops=mf(e.V,e.T)),nS=e._loops[0]?.P||null)}nS&&$.origin&&$.setLayer({id:`__limit`,kind:`lines`,lines:[{P:nS}],color:`#ff3b3b`,opacity:.95,onTop:!0,width:3,visible:X.showLimit!==!1})}function US(){return tS||(tS=vy(X)),tS}function WS(e){Q.gpsOn||Q.mode!==`gps`||(e||Z.length)&&(Q.gpsOn=!0,GS(`mid`,q(`GPS…`)),Cb(KS,t=>{Q.gpsErr=t,Q.mode===`gps`&&(GS(`bad`,q(`GPS indisponible`)),iC()),e&&hS(q(`GPS : {0}`,q(t)),4e3)}).then(e=>{e||(Q.gpsOn=!1)}))}function GS(e,t){let n=Y(`gpsPill`);n.className=`pill `+e,n.querySelector(`span`).textContent=t}function KS(e){if(Q.fix=e,Q.gpsErr=``,Q.mode!==`gps`)return;X.crs===`utm-auto`&&!X.zone&&(X.zone=_y(e.lon),X.south=e.lat<0,tS=null,cS());let t=US().toProject(e.lat,e.lon,e.alt),n=e.acc;GS(n<=3?`ok`:n<=10?`mid`:`bad`,`± ${J(n,+(n<10))} m`),qS({x:t.x,y:t.y,zGps:t.z,acc:n,heading:Number.isFinite(e.heading)&&e.speed>.5?e.heading:Q.compass,src:`gps`})}function qS(e){let t=OS(`design`),n=OS(`topo`),r=n?kS(n).zAt(e.x,e.y):NaN,i=t?kS(t).zAt(e.x,e.y):NaN;e.zTopo=r,e.zDesign=i,e.zGround=Number.isFinite(r)?r:i,e.z=X.zSource===`gps`&&Number.isFinite(e.zGps)?e.zGps:Number.isFinite(e.zGround)?e.zGround:Number.isFinite(e.zGps)?e.zGps:$.origin?.z??0,Q.pos=e;for(let t of Q.onPosHooks)t(e);$.setPosition(YS()),iC(),rC(),Q.target&&fC()}var JS=()=>{Q.pos?qS({...Q.pos}):iC()};function YS(){let e=Q.pos;if(!e)return null;let t=Q.alertLevel===`bad`?16726843:e.src===`gps`?2001151:10972159;return{x:e.x,y:e.y,z:e.z,zGround:e.zGround,acc:e.acc,heading:e.heading,color:t}}function XS(){if(!Q.pos){Q.gpsOn||WS(!0),hS(q(`En attente de position… (ou Outils → Me placer sur la carte)`));return}$.follow?($.follow=!1,Y(`fabLocate`).classList.remove(`on`),Y(`fabLocate`).innerHTML=K.locate):($.follow=!0,Y(`fabLocate`).classList.add(`on`),Y(`fabLocate`).innerHTML=K.follow,$.centerOn(Q.pos,160),hS(q(`Suivi de position activé`)))}function ZS(){let e=Q.fix,t=US();fS(q(`Position GPS`),`
    <div class="stack">
      <div class="seg" id="gMode">
        ${[[`gps`,`GPS`],[`manual`,`Manuelle`],[`sim`,`Simulation`]].map(([e,t])=>`<button data-m="${e}" class="${Q.mode===e?`on`:``}">${q(t)}</button>`).join(``)}
      </div>
      ${e?`<table class="t">
        <tr><td>${q(`Latitude / longitude`)}</td><td class="n">${e.lat.toFixed(7)} / ${e.lon.toFixed(7)}</td></tr>
        <tr><td>${q(`Altitude GPS (ellipsoïde)`)}</td><td class="n">${J(e.alt,2)} m</td></tr>
        <tr><td>${q(`Précision horizontale`)}</td><td class="n">± ${J(e.acc,1)} m</td></tr>
        <tr><td>${q(`Précision verticale`)}</td><td class="n">± ${J(e.altAcc,1)} m</td></tr>
        <tr><td>${q(`Vitesse`)}</td><td class="n">${J((e.speed||0)*3.6,1)} km/h</td></tr>
        <tr><td>${q(`Système`)}</td><td class="n small">${$x(t.def||`UTM auto`)}</td></tr>
        <tr><td>${q(`Calage`)}</td><td class="n">${t.calib?q(`{0} point(s), écart {1} m`,t.calib.n,J(t.calib.rms,3)):q(`non`)}</td></tr>
        <tr><td>${q(`Dernier point`)}</td><td class="n">${new Date(e.time).toLocaleTimeString()}</td></tr>
      </table>`:`<p class="muted">${Q.gpsErr?$x(q(Q.gpsErr)):q(`En attente du premier point GPS. Placez-vous à ciel ouvert ; le GPS fonctionne sans internet.`)}</p>`}
      <p class="small muted">${q(`Précision typique d'un téléphone : 3 à 5 m en plan, 5 à 15 m en altitude. Avec « Z sur la topo » (Réglages), le marqueur est posé sur la surface levée. Pour du centimétrique, utilisez un récepteur RTK externe déclaré comme position fictive dans Android.`)}</p>
    </div>`,()=>{Y(`gMode`).onclick=e=>{let t=e.target.closest(`[data-m]`);t&&(QS(t.dataset.m),pS())}},`gps`)}function QS(e){eC(),Q.mode=e,e===`gps`&&(WS(!0),Q.fix&&KS(Q.fix)),e===`manual`&&(GS(`sim`,q(`Manuel`)),sC(`place`)),e===`sim`&&$S()}function $S(){if(!nS&&!MS()){hS(q(`Importez d'abord un pit design`)),Q.mode=`gps`;return}GS(`sim`,q(`Simulation`));let e=nS?lf(nS):MS(),t=(e.x0+e.x1)/2,n=(e.y0+e.y1)/2,r=null;Q.simTimer=setInterval(()=>{Q.simT+=1;let i=Q.simT%300/300,a=i*2*Math.PI*2,o=.25+.95*Math.abs(Math.sin(i*Math.PI)),s,c;if(nS){let e=nS.length/3-1,r=3*Math.floor(a/(2*Math.PI)%1*e);s=t+(nS[r]-t)*o,c=n+(nS[r+1]-n)*o}else s=t+(e.x1-e.x0)*.4*o*Math.cos(a),c=n+(e.y1-e.y0)*.4*o*Math.sin(a);let l=r?bf(r.x,r.y,s,c):NaN;r={x:s,y:c},qS({x:s,y:c,zGps:NaN,acc:2.5,heading:l,src:`sim`})},500)}function eC(){Q.simTimer&&(clearInterval(Q.simTimer),Q.simTimer=null)}var tC=null;function nC(e=880,t=.18,n=2){if(rS.sound)try{tC=tC||new(window.AudioContext||window.webkitAudioContext);for(let r=0;r<n;r++){let n=tC.createOscillator(),i=tC.createGain(),a=tC.currentTime+r*(t+.08);n.frequency.value=e,n.type=`square`,i.gain.value=.12,n.connect(i),i.connect(tC.destination),n.start(a),n.stop(a+t)}}catch{}}function rC(){let e=Q.pos,t=Y(`alert`),n=``,r=``;if(e&&nS){let t=gf(e.x,e.y,nS),i=_f(e.x,e.y,nS).d;t?i<=X.alertDist&&(n=`warn`,r=q(`Limite de fosse à {0} m`,J(i,1))):(n=`bad`,r=q(`HORS LIMITE DE FOSSE — {0} m au-delà`,J(i,1)))}e&&!n&&X.zSource===`gps`&&Number.isFinite(e.zGps)&&Number.isFinite(e.zDesign)&&e.zGps<e.zDesign-Math.max(X.tol,.5)&&(n=`warn`,r=q(`Sous le design de {0} m`,J(e.zDesign-e.zGps,1))),n!==Q.alertLevel&&(n===`bad`?(nC(980,.2,3),rS.vibrate&&navigator.vibrate?.([400,120,400,120,400])):n===`warn`&&(nC(660,.15,1),rS.vibrate&&navigator.vibrate?.(250)),Q.alertLevel=n,Q.pos&&$.setPosition(YS())),t.className=`alert `+(n||`hidden`),t.innerHTML=n?`<span>${n===`bad`?`⛔`:`⚠️`}</span><span>${r}</span>`:``}function iC(){let e=Y(`hud`),t=Q.pos;if(!Z.length){e.innerHTML=`<div class="empty">${q(`Aucun pit design chargé.`)} ${xS(`layers`,`btn primary`,`${K.upload} ${q(`Importer`)}`,`style="margin-left:6px"`)}</div>`;return}if(!t){e.innerHTML=`<div class="h-top"><div class="empty">${Q.gpsErr?q(`GPS indisponible : {0}`,$x(q(Q.gpsErr))):q(`Recherche de la position GPS…`)}</div></div>
      <div class="row" style="margin-top:8px"><button class="btn grow" id="hPlace">${K.hand} ${q(`Me placer sur la carte`)}</button><button class="btn" id="hSim">${K.play} ${q(`Simulation`)}</button></div>`,Y(`hPlace`).onclick=()=>QS(`manual`),Y(`hSim`).onclick=()=>QS(`sim`);return}let n=t.zGround-t.zDesign,r=``;Number.isFinite(t.zDesign)&&Number.isFinite(t.zTopo)?r=n>X.tol?`<span class="tag cut">${q(`À miner`)} ${J(n,1)} m</span>`:n<-X.tol?`<span class="tag fill">${q(`Sous design`)} ${J(-n,1)} m</span>`:`<span class="tag ok">${q(`Au design`)}</span>`:Number.isFinite(t.zDesign)||(r=`<span class="tag">${q(`Hors design`)}</span>`);let i=`—`,a=``;if(nS){let e=gf(t.x,t.y,nS),n=_f(t.x,t.y,nS).d;i=(e?``:`⛔ `)+J(n,1)+` m`,a=e?n<=X.alertDist?`style="color:var(--warn)"`:``:`style="color:var(--bad)"`}let o=Number.isFinite(t.zDesign)&&X.benchH>0?Math.floor((t.zDesign-X.benchRef+1e-6)/X.benchH)*X.benchH+X.benchRef:NaN,s=aC(t),c={gps:`GPS`,manual:q(`Manuel`),sim:q(`Simulation`)}[t.src],l=``;if(Q.target){let e=Q.target,n=Math.hypot(e.x-t.x,e.y-t.y),r=bf(t.x,t.y,e.x,e.y),i=Number.isFinite(t.heading)?r-t.heading:r,a=Number.isFinite(e.z)&&Number.isFinite(t.z)?e.z-t.z:NaN;l=`<div class="nav"><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="none" stroke="var(--line)"/><path d="M20 4l7 26-7-5-7 5z" fill="var(--accent)" transform="rotate(${i} 20 20)"/></svg>
      <div class="grow"><b>${$x(e.name)}</b> — ${J(n,+(n<100))} m · ${J(r,0)}°${Number.isFinite(a)?` · ΔZ ${a>0?`+`:``}${J(a,1)} m`:``}</div>
      <button class="icon-btn" id="hNavX">✕</button></div>`}e.innerHTML=`
    <div class="h-top"><div class="big">Z ${J(t.z,1)}</div>${r}<span class="tag">${c}${t.acc?` ±`+J(t.acc,+(t.acc<10)):``}</span><button class="toggle" id="hTog">${Q.hudOpen?`▾`:`▴`}</button></div>
    <div class="grid">
      <div><small>${q(`Est`)}</small><b>${J(t.x,1)}</b></div>
      <div><small>${q(`Nord`)}</small><b>${J(t.y,1)}</b></div>
      <div><small>${q(`Limite fosse`)}</small><b ${a}>${i}</b></div>
    </div>
    <div class="grid more">
      <div><small>${q(`Z design`)}</small><b>${J(t.zDesign,2)}</b></div>
      <div><small>${q(`Z topo`)}</small><b>${J(t.zTopo,2)}</b></div>
      <div><small>${q(`Banc design`)}</small><b>${Number.isFinite(o)?`RL ${J(o,0)}`:`—`}</b></div>
      <div><small>${q(`Z GPS`)}</small><b>${J(t.zGps,1)}</b></div>
      <div><small>${q(`Cap`)}</small><b>${Number.isFinite(t.heading)?J(t.heading,0)+`°`:`—`}</b></div>
      <div><small>${q(`Ligne proche`)}</small><b>${s?`${J(s.d,1)} m`:`—`}</b></div>
    </div>
    ${s&&Q.hudOpen?`<div class="small muted" style="margin-top:4px">${$x(s.name)}</div>`:``}
    ${l}`,e.classList.toggle(`collapsed`,!Q.hudOpen),Y(`hTog`).onclick=()=>{Q.hudOpen=!Q.hudOpen,iC()},Q.target&&(Y(`hNavX`).onclick=()=>{Q.target=null,fC(),iC()})}function aC(e){let t=null;for(let n of Z)if(n.kind===`lines`&&n.visible!==!1)for(let r of n.lines){let i=r._b||(r._b=lf(r.P));if(t&&(e.x<i.x0-t.d||e.x>i.x1+t.d||e.y<i.y0-t.d||e.y>i.y1+t.d))continue;let a=_f(e.x,e.y,r.P);(!t||a.d<t.d)&&(t={d:a.d,name:r.name||n.name})}return t}var oC={measure:{hint:`Touchez des points pour mesurer (distance, pente, azimut).`,min:2},section:{hint:`Touchez 2 points : début et fin de la coupe.`,min:2,max:2},polygon:{hint:`Touchez les sommets de la zone de calcul de volume.`,min:3},waypoint:{hint:`Touchez la carte pour poser un point.`,min:1,max:1},goto:{hint:`Touchez la destination à atteindre.`,min:1,max:1},place:{hint:`Touchez la carte à l'endroit où vous êtes.`,min:1,max:1},blastpoly:{hint:`Touchez les sommets du polygone du tir.`,min:3},haul:{hint:`Touchez le trajet du camion, du front au déversement.`,min:2},blastinit:{hint:`Touchez le point d'amorçage du tir.`,min:1,max:1}};function sC(e){pS(),Q.tool={type:e,pts:[]},Y(`toolbar`).classList.remove(`hidden`),Y(`hud`).classList.add(`hidden`),e!==`measure`&&$.mode!==`plan`&&($.setMode(`plan`),Y(`fabMode`).innerHTML=`<span class="lbl">3D</span>`),cC()}function cC(){let e=Q.tool;if(!e)return;let t=oC[e.type],n=``,r=e.pts;if(e.type===`measure`&&r.length>=2){let e=r[r.length-2],t=r[r.length-1],i=Math.hypot(t.x-e.x,t.y-e.y),a=t.z-e.z,o=Math.hypot(i,a),s=0;for(let e=1;e<r.length;e++)s+=Math.hypot(r[e].x-r[e-1].x,r[e].y-r[e-1].y);n=`${q(`Horiz.`)} <b>${J(i,2)} m</b> · ${q(`Pente`)} ${J(o,2)} m · ΔZ ${J(a,2)} m<br>${q(`Inclinaison`)} ${J(Math.atan2(Math.abs(a),i)*180/Math.PI,1)}° (${J(100*a/Math.max(i,1e-9),1)} %) · ${q(`Azimut`)} ${J(bf(e.x,e.y,t.x,t.y),1)}°${r.length>2?`<br>${q(`Longueur totale`)} ${J(s,1)} m`:``}`}else if((e.type===`polygon`||e.type===`blastpoly`)&&r.length>=3){let e=Float64Array.from(r.flatMap(e=>[e.x,e.y,e.z]));n=`${q(`Surface`)} <b>${J(Math.abs(hf(e)),0)} m²</b> · ${r.length} ${q(`sommets`)}`}else n=r.length?`${r.length} ${q(`point(s)`)}`:``;Y(`toolHint`).innerHTML=`${q(t.hint)}${n?`<div class="res" style="margin-top:6px;font-weight:500">${n}</div>`:``}`,Y(`toolDone`).disabled=r.length<t.min,Y(`toolUndo`).disabled=!r.length,Y(`toolDone`).classList.toggle(`hidden`,!!t.max&&t.max===1),fC()}function lC(e){if(!e)return;let t=Q.tool;if(!t){let t=Z.find(t=>t.id===e.layerId&&t.kind===`blocks`);if(t){let n=$.blockAt(e.hitObj,e.faceIndex);n>=0&&RC(t,kC(t)[n])}return}let n=oC[t.type];if(t.pts.push(e),n.max&&t.pts.length>=n.max)return uC();cC()}function uC(){let e=Q.tool;if(!e)return;let t=e.pts;if(Q.tool=null,Y(`toolbar`).classList.add(`hidden`),Y(`hud`).classList.remove(`hidden`),e.type===`section`&&t.length===2&&gC(t[0],t[1]),e.type===`polygon`&&t.length>=3&&(Q.volPoly=Float64Array.from([...t.flatMap(e=>[e.x,e.y,e.z]),t[0].x,t[0].y,t[0].z]),_C()),e.type===`waypoint`&&t.length&&pC(t[0],`carte`),e.type===`goto`&&t.length&&(Q.target={name:q(`Destination`),...t[0]},iC()),e.type===`place`&&t.length&&(eC(),Q.mode=`manual`,GS(`sim`,q(`Manuel`)),qS({x:t[0].x,y:t[0].y,zGps:NaN,acc:0,heading:NaN,src:`manual`})),e.type===`measure`&&t.length>=2&&(Q.keepMeasure=t),e.type===`blastpoly`&&t.length>=3&&Tx(iw,Float64Array.from([...t.flatMap(e=>[e.x,e.y,e.z]),t[0].x,t[0].y,t[0].z])),e.type===`haul`&&t.length>=2){let e=0;for(let n=1;n<t.length;n++)e+=Math.hypot(t[n].x-t[n-1].x,t[n].y-t[n-1].y,t[n].z-t[n-1].z);X.fleet=X.fleet||{},X.fleet.haul=Math.round(e),cS(),Q.keepMeasure=t,hS(q(`Distance de transport : {0} m`,J(e,0))),Cx(iw)}e.type===`blastinit`&&t.length&&Q.pendingInit&&(Ox(iw,Q.pendingInit,t[0]),Q.pendingInit=null),fC()}function dC(){let e=Q.tool?.type;Q.tool=null,Y(`toolbar`).classList.add(`hidden`),Y(`hud`).classList.remove(`hidden`),e===`place`&&!Q.pos&&(Q.mode=`gps`),fC()}function fC(){if($.clearOverlay(),$.origin){for(let e of X.waypoints||[])$.drawFlag(e,Q.target?.id===e.id?16098851:16727409);Q.volPoly&&$.drawPolyline([...Array(Q.volPoly.length/3-1)].map((e,t)=>({x:Q.volPoly[3*t],y:Q.volPoly[3*t+1],z:Q.volPoly[3*t+2]})),{color:53503,closed:!0}),Q.keepMeasure&&!Q.tool&&$.drawPolyline(Q.keepMeasure,{color:16765952}),Q.tool&&$.drawPolyline(Q.tool.pts,{color:Q.tool.type===`polygon`?53503:Q.tool.type===`blastpoly`?16747008:16765952,closed:Q.tool.type===`polygon`||Q.tool.type===`blastpoly`}),Q.target&&Q.pos&&($.drawFlag(Q.target,16098851),$.drawPolyline([{x:Q.pos.x,y:Q.pos.y,z:Q.pos.z},Q.target],{color:16098851,points:!1}))}}function pC(e,t){let n=(X.waypoints||[]).length+1,r=prompt(q(`Nom du point`),`P${n}`);r!==null&&(X.waypoints=[...X.waypoints||[],{id:eS(),name:r||`P${n}`,x:e.x,y:e.y,z:e.z,time:Date.now(),src:t}],cS(),fC(),hS(q(`Point « {0} » enregistré`,r||`P${n}`)))}function mC(){let e=X.waypoints||[];fS(q(`Points`),`${CC()}
    <div class="stack">
      <div class="row"><button class="btn primary grow" id="wGps" ${Q.pos?``:`disabled`}>${K.pin} ${q(`Enregistrer ma position`)}</button><button class="btn" id="wMap">${K.plus} ${q(`Sur la carte`)}</button></div>
      <div class="row"><input class="inp grow" id="wE" placeholder="${q(`Est`)}" inputmode="decimal"><input class="inp grow" id="wN" placeholder="${q(`Nord`)}" inputmode="decimal"><input class="inp grow" id="wZ" placeholder="Z" inputmode="decimal"><button class="btn" id="wAdd">${K.plus}</button></div>
      <div>${e.length?e.map(e=>`<div class="list-item"><div class="grow"><b>${$x(e.name)}</b><small class="muted">E ${J(e.x,2)} · N ${J(e.y,2)} · Z ${J(e.z,2)}</small></div>
        <button class="btn" data-go="${e.id}">${K.nav}</button><button class="btn ghost danger" data-del="${e.id}">${K.trash}</button></div>`).join(``):`<p class="muted">${q(`Aucun point enregistré.`)}</p>`}</div>
      ${e.length?`<button class="btn block" id="wExp">${K.download} ${q(`Exporter les points (CSV)`)}</button>`:``}
    </div>`,t=>{Y(`wGps`).onclick=()=>{pS(),pC(Q.pos,Q.pos.src)},Y(`wMap`).onclick=()=>sC(`waypoint`),Y(`wAdd`).onclick=()=>{let e=parseFloat(Y(`wE`).value.replace(`,`,`.`)),t=parseFloat(Y(`wN`).value.replace(`,`,`.`)),n=parseFloat(Y(`wZ`).value.replace(`,`,`.`));if(!Number.isFinite(e)||!Number.isFinite(t))return hS(q(`Saisissez Est et Nord`));if(!Number.isFinite(n)){let r=OS(`design`);n=r?kS(r).zAt(e,t):NaN}pS(),pC({x:e,y:t,z:n},`saisie`)},t.onclick=t=>{let n=t.target.closest(`[data-go]`),r=t.target.closest(`[data-del]`);n&&(Q.target=e.find(e=>e.id===n.dataset.go),pS(),fC(),iC(),Q.pos&&$.centerOn(Q.pos)),r&&(X.waypoints=e.filter(e=>e.id!==r.dataset.del),Q.target?.id===r.dataset.del&&(Q.target=null),cS(),fC(),mC())},wC(),Y(`wExp`)&&(Y(`wExp`).onclick=()=>Hx(`${X.name}_points.csv`,Ux([[q(`Nom`),`X`,`Y`,`Z`,q(`Source`),q(`Date`)],...e.map(e=>[e.name,e.x,e.y,e.z,e.src,new Date(e.time).toISOString()])]),`text/csv`))},`waypoints`)}function hC(){let e=[[`measure`,K.ruler,`Mesurer`],[`section`,K.section,`Coupe`],[`polygon`,K.polygon,`Zone de volume`],[`points`,K.pin,`Points`],[`goto`,K.nav,`Aller à…`],[`place`,K.hand,`Me placer sur la carte`],[`profile`,K.section,`Profil orienté`],[`orient`,K.compass3d,Q.orient3d?`Arrêter la vue orientée`:`Vue 3D orientée`],[`blocks`,K.volume,`Blocs de matériaux`],[`sim`,K.play,Q.mode===`sim`?`Arrêter la simulation`:`Simulation`],[`gpsmode`,K.locate,`Revenir au GPS`],[`shot`,K.camera,`Capture d'écran`],[`limit`,K.limit,X.showLimit===!1?`Afficher la limite`:`Masquer la limite`],[`trail`,K.trash,`Effacer la trace`],[`clear`,K.trash,`Effacer les tracés`]];fS(q(`Outils`),`${CC()}<div class="tools">${e.map(([e,t,n])=>`<button class="tool" data-t="${e}">${t}<span>${q(n)}</span></button>`).join(``)}</div>
    <p class="small muted" style="margin-top:12px">${q(`Mesurer : distances, pentes et azimuts. Coupe : profil design / topo. Zone de volume : volume restant dans un polygone. Simulation : déplace une position fictive pour tester les alertes au bureau.`)}</p>`,e=>{e.onclick=e=>{let t=e.target.closest(`[data-t]`);if(!t)return;let n=t.dataset.t;[`measure`,`section`,`polygon`,`goto`,`place`].includes(n)&&(n===`measure`&&(Q.keepMeasure=null),sC(n)),n===`points`&&mC(),n===`profile`&&UC(),n===`orient`&&(pS(),WC()),n===`blocks`&&TC(`blocks`),n===`sim`&&(Q.mode===`sim`?QS(`gps`):QS(`sim`),pS()),n===`gpsmode`&&(QS(`gps`),pS()),n===`shot`&&(pS(),setTimeout(()=>Hx(`${X.name}_${new Date().toISOString().slice(0,16).replace(/[:T]/g,`-`)}.png`,$.snapshot(),`image/png`),100)),n===`limit`&&(X.showLimit=X.showLimit===!1,$.setVisible(`__limit`,X.showLimit!==!1),cS(),hC()),n===`trail`&&($.clearTrail(),hS(q(`Trace effacée`))),n===`clear`&&(Q.keepMeasure=null,Q.volPoly=null,fC(),hS(q(`Tracés effacés`)))},wC()},`tools`)}function gC(e,t){let n=[[`design`,`#ff5a52`],[`topo`,`#3ddc84`],[`initial`,`#a68bff`]].map(([e,t])=>[OS(e),t,e]).filter(([e])=>e);if(!n.length)return hS(q(`Aucune surface pour la coupe`));let r=n.map(([n,r,i])=>({c:r,r:i,name:n.name,pts:yf(kS(n),e.x,e.y,t.x,t.y,400)})),i=Math.hypot(t.x-e.x,t.y-e.y);fS(q(`Coupe`),`
    <canvas class="chart" id="cv"></canvas>
    <div class="row small" style="flex-wrap:wrap;gap:12px;margin-top:8px">${r.map(e=>`<span><b style="color:${e.c}">━</b> ${$x(q({design:`Pit design`,topo:`Topo actuelle`,initial:`Terrain initial`}[e.r]))}</span>`).join(``)}</div>
    <p class="small muted">${q(`Longueur`)} ${J(i,1)} m · ${q(`Azimut`)} ${J(bf(e.x,e.y,t.x,t.y),1)}° — ${q(`touchez le graphique pour lire les valeurs`)}</p>
    <div id="cvInfo" class="card small"></div>`,()=>{let n=Y(`cv`),a=window.devicePixelRatio||1,o=o=>{let s=n.clientWidth,c=n.clientHeight;n.width=s*a,n.height=c*a;let l=n.getContext(`2d`);l.scale(a,a);let u=1/0,d=-1/0;for(let e of r)for(let t of e.pts)Number.isFinite(t.z)&&(u=Math.min(u,t.z),d=Math.max(d,t.z));if(!Number.isFinite(u))return;let f=Math.max(2,(d-u)*.08);u-=f,d+=f;let p={l:44,r:10,t:10,b:24},m=e=>p.l+e/i*(s-p.l-p.r),h=e=>c-p.b-(e-u)/(d-u)*(c-p.t-p.b),g=getComputedStyle(document.documentElement);l.strokeStyle=g.getPropertyValue(`--line`),l.fillStyle=g.getPropertyValue(`--muted`),l.font=`11px system-ui`,l.lineWidth=1;let _=[1,2,5,10,20,25,50,100].find(e=>(d-u)/e<=6)||200;for(let e=Math.ceil(u/_)*_;e<=d;e+=_)l.beginPath(),l.moveTo(p.l,h(e)),l.lineTo(s-p.r,h(e)),l.stroke(),l.fillText(J(e,0),4,h(e)+4);l.fillText(`0`,p.l,c-6),l.fillText(J(i,0)+` m`,s-p.r-40,c-6);let v=r.find(e=>e.r===`design`),y=r.find(e=>e.r===`topo`);if(v&&y){l.fillStyle=`rgba(255,176,32,.35)`;for(let e=1;e<v.pts.length;e++){let t=v.pts[e-1].z,n=v.pts[e].z,r=y.pts[e-1].z,i=y.pts[e].z;if(![t,n,r,i].every(Number.isFinite)||r<=t&&i<=n)continue;let a=m(v.pts[e-1].s),o=m(v.pts[e].s)+.6;l.beginPath(),l.moveTo(a,h(Math.max(r,t))),l.lineTo(o,h(Math.max(i,n))),l.lineTo(o,h(n)),l.lineTo(a,h(t)),l.fill()}}for(let e of r){l.strokeStyle=e.c,l.lineWidth=2,l.beginPath();let t=!1;for(let n of e.pts){if(!Number.isFinite(n.z)){t=!1;continue}t?l.lineTo(m(n.s),h(n.z)):l.moveTo(m(n.s),h(n.z)),t=!0}l.stroke()}if(Q.pos){let n=t.x-e.x,r=t.y-e.y,a=((Q.pos.x-e.x)*n+(Q.pos.y-e.y)*r)/(i*i)*i,o=Math.abs((Q.pos.x-e.x)*r-(Q.pos.y-e.y)*n)/i;a>=0&&a<=i&&o<30&&(l.fillStyle=`#1e88ff`,l.beginPath(),l.arc(m(a),h(Q.pos.z),5,0,7),l.fill())}if(o!==void 0){l.strokeStyle=`#fff`,l.setLineDash([4,4]),l.beginPath(),l.moveTo(m(o),p.t),l.lineTo(m(o),c-p.b),l.stroke(),l.setLineDash([]);let e=Math.round(o/i*400);Y(`cvInfo`).innerHTML=`${q(`Distance`)} ${J(o,1)} m — `+r.map(t=>`<b style="color:${t.c}">${J(t.pts[e].z,2)}</b>`).join(` · `)+(v&&y&&Number.isFinite(y.pts[e].z-v.pts[e].z)?` — ${q(`écart topo − design`)} <b>${J(y.pts[e].z-v.pts[e].z,2)} m</b>`:``)}return{X:m,m:p,W:s}},s=o();Y(`cvInfo`).textContent=q(`Zone orange : reste à miner entre la topo et le design.`),n.onpointerdown=n.onpointermove=e=>{if(e.type===`pointermove`&&!e.buttons)return;let t=n.getBoundingClientRect(),r=e.clientX-t.left,a=Math.max(0,Math.min(i,(r-s.m.l)/(s.W-s.m.l-s.m.r)*i));s=o(a)}},`section`),Q.keepMeasure=[e,t],fC()}function _C(){let e=DS(),t=OS(`design`),n=OS(`topo`),r=OS(`initial`),i=(t,n)=>(n?`<option value="">${q(`— aucun —`)}</option>`:``)+e.map(e=>`<option value="${e.id}" ${t===e?`selected`:``}>${$x(e.name)}</option>`).join(``),a=Q.lastVol;Q.pitTab=`volumes`,fS(q(`Volumes`),`
    ${CC(`volumes`)}
    <div class="stack">
      <h3 style="margin-top:0">${q(`Volumes restant à miner`)}</h3>
      ${e.length<2?`<div class="card small">${q(`Il faut au moins deux surfaces : le pit design et la topo actuelle (levé). Ajoutez le terrain initial pour obtenir l'avancement.`)}</div>`:``}
      <label class="f">${q(`Pit design (fond à atteindre)`)}<select id="vD">${i(t)}</select></label>
      <label class="f">${q(`Topo actuelle (dernier levé)`)}<select id="vT">${i(n)}</select></label>
      <label class="f">${q(`Terrain initial (facultatif, pour l'avancement)`)}<select id="vI">${i(r,!0)}</select></label>
      <div class="fields three">
        <label class="f">${q(`Hauteur de banc (m)`)}<input id="vH" type="number" inputmode="decimal" value="${X.benchH}"></label>
        <label class="f">${q(`RL de référence`)}<input id="vR" type="number" inputmode="decimal" value="${X.benchRef}"></label>
        <label class="f">${q(`Densité (t/m³)`)}<input id="vDen" type="number" inputmode="decimal" step="0.01" value="${X.density}"></label>
      </div>
      <div class="fields">
        <label class="f">${q(`Maille (m, 0 = auto)`)}<input id="vC" type="number" inputmode="decimal" value="${X.cell||0}"></label>
        <label class="f">${q(`Tolérance (m)`)}<input id="vTol" type="number" inputmode="decimal" step="0.05" value="${X.tol}"></label>
      </div>
      <div class="seg" id="vZone"><button data-z="all" class="${Q.volPoly?``:`on`}">${q(`Toute la fosse`)}</button><button data-z="poly" class="${Q.volPoly?`on`:``}">${Q.volPoly?q(`Zone dessinée ✓`):q(`Dessiner une zone`)}</button></div>
      <button class="btn primary block" id="vGo" ${e.length<2?`disabled`:``}>${K.volume} ${q(`Calculer`)}</button>
      <div id="vRes">${a?xC(a):``}</div>
    </div>`,()=>{Y(`vZone`).onclick=e=>{let t=e.target.closest(`[data-z]`);t&&(t.dataset.z===`all`?(Q.volPoly=null,fC(),_C()):sC(`polygon`))},Y(`vGo`).onclick=bC,SC(),wC()},`volume`)}var vC=null;function yC(e,t){return vC=vC||new Worker(new URL(new URL(`compute.worker-U1J1PA-j.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),new Promise(n=>{vC.onmessage=e=>{if(e.data.progress!==void 0){t?.(e.data.progress);return}n(e.data)},vC.onerror=e=>n({ok:!1,error:e.message||`worker`}),vC.postMessage(e)})}async function bC(){let e=Z.find(e=>e.id===Y(`vD`).value),t=Z.find(e=>e.id===Y(`vT`).value),n=Z.find(e=>e.id===Y(`vI`).value);if(!e||!t||e===t)return hS(q(`Choisissez deux surfaces différentes`));let r=(e,t)=>{let n=parseFloat(String(Y(e).value).replace(`,`,`.`));return Number.isFinite(n)?n:t};X.benchH=r(`vH`,10),X.benchRef=r(`vR`,0),X.density=r(`vDen`,2.6),X.cell=r(`vC`,0),X.tol=r(`vTol`,.3),cS(),await gS(q(`Calcul des volumes…`));let i=await yC({design:{V:e.V,T:e.T},topo:{V:t.V,T:t.T},initial:n?{V:n.V,T:n.T}:null,polygon:Q.volPoly,cell:X.cell,benchHeight:X.benchH,benchRef:X.benchRef,density:X.density,tol:X.tol});if(gS(),!i.ok)return alert(q(i.error));let a={...i.res,design:e.name,topo:t.name,initial:n?.name,zone:Q.volPoly?q(`Zone dessinée`):q(`Toute la fosse`),date:Date.now()};Q.lastVol=a,X.lastVol=a,cS(),Y(`vRes`).innerHTML=xC(a),SC(),Y(`vRes`).scrollIntoView({behavior:`smooth`})}function xC(e){let t=Math.max(1,...e.perBench.map(e=>e.volume));return`
    <h3>${q(`Résultat`)} — ${new Date(e.date).toLocaleString()}</h3>
    <div class="kpis">
      <div class="kpi hi"><small>${q(`Reste à miner`)}</small><b>${Xx(e.remaining)}m³</b></div>
      <div class="kpi hi"><small>${q(`Tonnage restant`)}</small><b>${Xx(e.remainingTonnes)}t</b></div>
      ${e.progress===void 0?``:`<div class="kpi"><small>${q(`Déjà miné`)}</small><b>${Xx(e.mined)}m³</b></div><div class="kpi"><small>${q(`Avancement`)}</small><b>${J(e.progress*100,1)} %</b></div>`}
      <div class="kpi"><small>${q(`Sur-excavation`)}</small><b>${Xx(e.overbreak)}m³</b></div>
      <div class="kpi"><small>${q(`Surface restant à miner`)}</small><b>${J(e.remainingArea/1e4,2)} ha</b></div>
    </div>
    <p class="small muted">${$x(e.zone)} · ${q(`maille`)} ${J(e.cell,2)} m · ${q(`densité`)} ${J(e.density,2)} · ${q(`surface comparée`)} ${J(e.coveredArea/1e4,2)} ha${e.uncoveredArea>1?` · <span style="color:var(--warn)">${q(`{0} ha du design sans topo`,J(e.uncoveredArea/1e4,2))}</span>`:``}</p>
    <h3>${q(`Reste à miner par banc`)}</h3>
    <table class="t"><tr><th>${q(`Banc`)}</th><th class="n">m³</th><th class="n">t</th><th style="width:30%"></th></tr>
      ${e.perBench.map(e=>`<tr><td>RL ${J(e.from,0)} → ${J(e.to,0)}</td><td class="n">${J(e.volume,0)}</td><td class="n">${J(e.tonnes,0)}</td><td><div class="bar" style="width:${100*e.volume/t}%"></div></td></tr>`).join(``)}
      <tr><td><b>${q(`Total`)}</b></td><td class="n"><b>${J(e.remaining,0)}</b></td><td class="n"><b>${J(e.remainingTonnes,0)}</b></td><td></td></tr>
    </table>
    <div class="row" style="margin-top:10px"><button class="btn grow" id="vCsv">${K.download} CSV</button><button class="btn grow" id="vColor">${q(`Colorer la topo`)}</button></div>
    <p class="small muted">${q(`Topo :`)} ${$x(e.topo)} · ${q(`Design :`)} ${$x(e.design)}${e.initial?` · `+q(`Initial :`)+` `+$x(e.initial):``}</p>`}function SC(){let e=Q.lastVol;e&&Y(`vCsv`)&&(Y(`vCsv`).onclick=()=>Hx(`${X.name}_volumes_${new Date(e.date).toISOString().slice(0,10)}.csv`,Ux([[`KB Pit Limit`,X.name],[q(`Date`),new Date(e.date).toLocaleString()],[q(`Design`),e.design],[q(`Topo`),e.topo],[q(`Initial`),e.initial||``],[q(`Zone`),e.zone],[q(`Maille (m)`),e.cell],[q(`Densité`),e.density],[],[q(`Reste à miner (m³)`),e.remaining],[q(`Tonnage restant (t)`),e.remainingTonnes],[q(`Sur-excavation (m³)`),e.overbreak],...e.progress===void 0?[]:[[q(`Déjà miné (m³)`),e.mined],[q(`Avancement (%)`),e.progress*100]],[],[q(`Banc de`),q(`Banc à`),`m³`,`t`],...e.perBench.map(e=>[e.from,e.to,e.volume,e.tonnes])]),`text/csv`),Y(`vColor`).onclick=()=>{let t=Z.find(t=>t.name===e.topo&&t.kind===`mesh`);t&&(t.colorMode=`diff`,PS(t),FS(t),pS(),hS(q(`Orange : reste à miner · Vert : au design · Bleu : sous le design`),4500))})}function CC(){return`<div class="modnav"><button class="btn ghost" id="modBack">‹ ${q(`Mine`)}</button></div>`}function wC(){let e=Y(`modBack`);e&&(e.onclick=qC)}function TC(e){Q.pitTab=e,document.querySelectorAll(`#tabs button`).forEach(e=>e.classList.toggle(`on`,e.dataset.tab===`mine`)),{volumes:_C,blocks:LC,actual:BC,profile:VC}[e]()}var EC=[`ore`,`hg`,`lg`,`marginal`,`oxide`],DC=()=>Z.filter(e=>e.kind===`blocks`),OC=e=>(X.materials||by).find(t=>t.key===e)||(X.materials||by).find(e=>e.key===`other`)||by[6],kC=e=>e.blocks,AC=(e,t)=>e.stats?.byId?.[t.id]||null;function jC(e,t){let n=OC(t.material);if(X.blockColor===`remaining`){let r=AC(e,t);if(!r||!(r.volume>0))return n.color;let i=Math.max(0,Math.min(1,r.remaining/r.volume)),[a,o,s]=i<.02?[.35,.75,.4]:Qu(.35+.65*i);return`rgb(${Math.round(a*255)},${Math.round(o*255)},${Math.round(s*255)})`}return n.color}var MC=null;function NC(){let e=OS(`topo`);if(!e)return null;let t=null;for(let e of DC())t=uf(t,AS(e));if(!t)return null;let n=e.id+`:`+[t.x0,t.y0,t.x1,t.y1].map(Math.round).join(`,`);if(MC?.key===n)return MC;let r=Math.max(.5,Math.max(t.x1-t.x0,t.y1-t.y0)/1024),i=Math.max(2,Math.ceil((t.x1-t.x0)/r)+1),a=Math.max(2,Math.ceil((t.y1-t.y0)/r)+1);return MC={key:n,Z:pf(e.V,e.T,{x0:t.x0+r/2,y0:t.y0+r/2,cs:r,nx:i,ny:a}),nx:i,ny:a,x0:t.x0,y0:t.y0,cs:r},MC}function PC(e){if(!$.origin)return;let t=kC(e);$.setBlocks(e.id,t.map(t=>({V:t.V,T:t.T,color:jC(e,t)})),NC(),X.blockMode||`ghost`,e.visible!==!1)}async function FC(){let e=OS(`topo`);for(let t of DC()){await gS(q(`Calcul du reste à miner de {0} bloc(s)…`,t.blocks.length));let n=await yC({type:`blocks`,blocks:t.blocks.map(e=>({id:e.id,V:e.V,T:e.T})),topo:e?{V:e.V,T:e.T}:null},e=>{Y(`busyMsg`).textContent=q(`Calcul du reste à miner… {0} %`,J(e*100,0))});if(!n.ok){gS(),alert(q(n.error));return}let r={};for(let e of n.res)r[e.id]=e;t.stats={byId:r,topo:e?.name||null,topoDate:e?.date||null,date:Date.now()},await FS(t),PS(t)}gS()}function IC(){let e=new Map,t=0,n=0;for(let t of DC())for(let n of t.blocks){let r=AC(t,n),i=OC(n.material),a=e.get(i.key)||{m:i,n:0,vol:0,rem:0};a.n++,r&&(a.vol+=r.volume,a.rem+=r.remaining),e.set(i.key,a)}for(let r of e.values())r.t=r.vol*r.m.density,r.tr=r.rem*r.m.density,EC.includes(r.m.key)?t+=r.tr:r.m.key===`waste`&&(n+=r.tr);return{mats:[...e.values()].sort((e,t)=>t.tr-e.tr),ore:t,waste:n}}function LC(){Q.pitTab=`blocks`;let e=DC(),t=OS(`topo`);if(!e.length){fS(q(`Blocs`),`${CC(`blocks`)}
      <div class="stack">
        <h3 style="margin-top:0">${q(`Blocs de matériaux restant à miner`)}</h3>
        <div class="card small">${q(`Importez vos blocs : solides .00t Vulcan (un fichier par bloc ou plusieurs solides dans une triangulation), DTM Surpac multi-objets (.dtm + .str), DXF (un calque par bloc), OBJ, LandXML, ou contours fermés (.str, .dxf) extrudés sur la hauteur de banc. Le matériau est deviné d'après le nom (ORE, HG, LG, WASTE, STERILE…) et modifiable.`)}</div>
        ${xS(`blocks`,`btn primary block`,`${K.upload} ${q(`Importer des blocs`)}`)}
        <p class="small muted">${q(`Le reste à miner de chaque bloc est la partie du bloc située sous la topo actuelle (rôle « Topo actuelle »).`)}</p>
      </div>`,()=>{wC()},`volume`);return}let n=IC(),r=n.mats.reduce((e,t)=>e+t.t,0),i=n.mats.reduce((e,t)=>e+t.tr,0),a=e.find(e=>e.stats)?.stats,o=[];for(let t of e)for(let e of t.blocks)o.push({l:t,b:e,s:AC(t,e)});let s=e=>OC(e.material).density;o.sort((e,t)=>Q.blockSort===`name`?e.b.name.localeCompare(t.b.name):(t.s?.remaining||0)*s(t.b)-(e.s?.remaining||0)*s(e.b));let c=o.slice(0,400).map(({l:e,b:t,s:n},r)=>{let i=OC(t.material),a=n&&n.volume>0?n.remaining/n.volume:NaN;return`<div class="blk" data-i="${r}"><i style="background:${jC(e,t)}"></i>
      <div><b>${$x(t.name)}</b><small>${$x(q(i.name))}${n?` · ${J(n.remaining*i.density,0)} / ${J(n.volume*i.density,0)} t`:``}${n&&!n.closed?` · ⚠ `+q(`solide non fermé`):``}</small>
        <div class="mbar"><div style="width:${Number.isFinite(a)?100*a:0}%;background:${i.color}"></div></div></div>
      <div class="pct">${Number.isFinite(a)?J(100*a,0)+` %`:`—`}<br><small>${q(`reste`)}</small></div></div>`}).join(``);fS(q(`Blocs`),`${CC(`blocks`)}
    <div class="stack">
      <h3 style="margin-top:0">${q(`Blocs de matériaux restant à miner`)}</h3>
      <div class="kpis">
        <div class="kpi hi"><small>${q(`Reste à miner`)}</small><b>${Xx(i)}t</b></div>
        <div class="kpi"><small>${q(`Déjà miné`)}</small><b>${r>0?J(100*(1-i/r),1)+` %`:`—`}</b></div>
        <div class="kpi"><small>${q(`Minerai restant`)}</small><b>${Xx(n.ore)}t</b></div>
        <div class="kpi"><small>${q(`Ratio stérile / minerai`)}</small><b>${n.ore>0?J(n.waste/n.ore,2):`—`}</b></div>
      </div>
      <table class="t"><tr><th>${q(`Matériau`)}</th><th class="n">${q(`Reste (t)`)}</th><th class="n">${q(`Total (t)`)}</th><th class="n">${q(`Blocs`)}</th></tr>
        ${n.mats.map(e=>`<tr><td><i style="display:inline-block;width:10px;height:10px;border-radius:3px;background:${e.m.color};margin-right:6px"></i>${$x(q(e.m.name))}</td><td class="n">${J(e.tr,0)}</td><td class="n">${J(e.t,0)}</td><td class="n">${e.n}</td></tr>`).join(``)}
      </table>
      <p class="small muted" style="margin:0">${a?q(`Calculé avec la topo « {0} » le {1}.`,$x(a.topo||q(`aucune`)),new Date(a.date).toLocaleString()):q(`Pas encore calculé.`)} ${t&&a&&a.topo!==t.name?`<b style="color:var(--warn)">${q(`La topo actuelle a changé : recalculez.`)}</b>`:``}</p>
      <div class="row"><button class="btn primary grow" id="bCalc">${K.volume} ${q(`Recalculer avec la topo actuelle`)}</button></div>
      <label class="f">${q(`Affichage 3D`)}</label>
      <div class="seg" id="bMode">${[[`all`,`Blocs entiers`],[`remaining`,`Reste à miner`],[`ghost`,`Reste + miné`]].map(([e,t])=>`<button data-v="${e}" class="${(X.blockMode||`ghost`)===e?`on`:``}">${q(t)}</button>`).join(``)}</div>
      <div class="seg" id="bColor">${[[`material`,`Couleur matériau`],[`remaining`,`Couleur % restant`]].map(([e,t])=>`<button data-v="${e}" class="${(X.blockColor||`material`)===e?`on`:``}">${q(t)}</button>`).join(``)}</div>
      <div class="row">${xS(`attrs`,`btn grow`,`${K.upload} ${q(`Attributs (CSV)`)}`)}</div>
      <div class="row"><button class="btn grow" id="bMat">${q(`Matériaux et densités`)}</button><button class="btn grow" id="bCsv">${K.download} CSV</button></div>
      <div class="row">${xS(`blocks`,`btn grow`,`${K.upload} ${q(`Importer des blocs`)}`)}<button class="btn" id="bSort">${Q.blockSort===`name`?q(`Tri : nom`):q(`Tri : reste`)}</button></div>
      <h3>${q(`{0} bloc(s)`,o.length)}</h3>
      <div id="bList">${c}</div>
      ${o.length>400?`<p class="small muted">${q(`Liste limitée aux 400 premiers blocs.`)}</p>`:``}
    </div>`,()=>{wC(),Y(`bCalc`).onclick=async()=>{await FC(),LC()},Y(`bSort`).onclick=()=>{Q.blockSort=Q.blockSort===`name`?`remaining`:`name`,LC()},Y(`bMode`).onclick=t=>{let n=t.target.closest(`[data-v]`);n&&(X.blockMode=n.dataset.v,cS(),e.forEach(PS),LC())},Y(`bColor`).onclick=t=>{let n=t.target.closest(`[data-v]`);n&&(X.blockColor=n.dataset.v,cS(),e.forEach(PS),LC())},Y(`bMat`).onclick=zC,Y(`bCsv`).onclick=()=>Hx(`${X.name}_blocs_${new Date().toISOString().slice(0,10)}.csv`,Ux([[q(`Bloc`),q(`Matériau`),q(`Densité`),q(`Volume total (m³)`),q(`Reste (m³)`),q(`Total (t)`),q(`Reste (t)`),q(`Reste (%)`),`Z min`,`Z max`,q(`Fichier`)],...o.map(({l:e,b:t,s:n})=>{let r=OC(t.material);return[t.name,q(r.name),r.density,n?.volume??``,n?.remaining??``,n?n.volume*r.density:``,n?n.remaining*r.density:``,n&&n.volume>0?100*n.remaining/n.volume:``,n?.zMin??``,n?.zMax??``,e.name]})]),`text/csv`),Y(`bList`).onclick=e=>{let t=e.target.closest(`[data-i]`);if(t){let e=o[+t.dataset.i];RC(e.l,e.b)}}},`volume`)}function RC(e,t){let n=AC(e,t),r=OC(t.material),i=t._b||(t._b=lf(t.V));fS(t.name,`
    <div class="stack">
      <div class="fields"><label class="f">${q(`Teneur (g/t)`)}<input id="kGrade" type="number" inputmode="decimal" step="0.01" value="${Number.isFinite(t.grade)?t.grade:``}" placeholder="${q(`par défaut`)}"></label><div></div></div>
      <label class="f">${q(`Matériau`)}<select id="kMat">${(X.materials||by).map(e=>`<option value="${e.key}" ${e.key===r.key?`selected`:``}>${$x(q(e.name))} (${J(e.density,2)} t/m³)</option>`).join(``)}</select></label>
      <div class="kpis">
        <div class="kpi hi"><small>${q(`Reste à miner`)}</small><b>${n?Xx(n.remaining)+`m³`:`—`}</b></div>
        <div class="kpi hi"><small>${q(`Tonnage restant`)}</small><b>${n?Xx(n.remaining*r.density)+`t`:`—`}</b></div>
        <div class="kpi"><small>${q(`Volume du bloc`)}</small><b>${n?Xx(n.volume)+`m³`:`—`}</b></div>
        <div class="kpi"><small>${q(`Déjà miné`)}</small><b>${n&&n.volume>0?J(100*(1-n.remaining/n.volume),1)+` %`:`—`}</b></div>
      </div>
      <p class="small muted">Z ${J(i.z0,1)} → ${J(i.z1,1)} · E ${J((i.x0+i.x1)/2,1)} · N ${J((i.y0+i.y1)/2,1)} · ${$x(e.name)}${n&&!n.closed?`<br><b style="color:var(--warn)">${q(`Solide non fermé : volume approximatif.`)}</b>`:``}</p>
      <div class="row" style="flex-wrap:wrap">
        <button class="btn" id="kZoom">${K.fit} ${q(`Zoom`)}</button>
        <button class="btn" id="kGo">${K.nav} ${q(`Aller au bloc`)}</button>
        <button class="btn" id="kBlast">${K.drill} ${q(`Concevoir un tir sur ce bloc`)}</button>
        <button class="btn" id="kRen">${q(`Renommer`)}</button>
        <button class="btn danger" id="kDel">${K.trash}</button>
      </div>
      <button class="btn block" id="kBack">← ${q(`Tous les blocs`)}</button>
    </div>`,()=>{Y(`kMat`).onchange=async n=>{t.material=n.target.value,await FS(e),PS(e),RC(e,t)},Y(`kZoom`).onclick=()=>{pS(),$.fitTo(i)},Y(`kGrade`).onchange=async n=>{let r=parseFloat(String(n.target.value).replace(`,`,`.`));t.grade=Number.isFinite(r)?r:void 0,await FS(e)},Y(`kBlast`).onclick=()=>Tx(iw,kx(t.V),{name:`${q(`Tir`)} ${t.name}`,params:{floorRL:i.z0,benchH:i.z1-i.z0}}),Y(`kGo`).onclick=()=>{Q.target={id:`blk-`+t.id,name:t.name,x:(i.x0+i.x1)/2,y:(i.y0+i.y1)/2,z:i.z1},pS(),fC(),iC()},Y(`kRen`).onclick=async()=>{let n=prompt(q(`Nom du bloc`),t.name);n&&(t.name=n,await FS(e),RC(e,t))},Y(`kDel`).onclick=async()=>{confirm(q(`Retirer le bloc « {0} » ?`,t.name))&&(e.blocks=e.blocks.filter(e=>e!==t),e.blocks.length?(await FS(e),PS(e)):($.removeLayer(e.id),Z=Z.filter(t=>t!==e),await Vy(e.id)),LC())},Y(`kBack`).onclick=LC},`block`)}function zC(){let e=X.materials||(X.materials=by.map(e=>({...e})));fS(q(`Matériaux et densités`),`
    <div id="mList">${e.map((e,t)=>`<div class="mat-row" data-i="${t}"><input type="color" value="${e.color}" data-k="color"><input class="inp" value="${$x(q(e.name))}" data-k="name"><input class="inp" type="number" step="0.01" inputmode="decimal" value="${e.density}" data-k="density"></div>`).join(``)}</div>
    <div class="row"><button class="btn grow" id="mAdd">${K.plus} ${q(`Ajouter un matériau`)}</button><button class="btn primary grow" id="mOk">${q(`Terminer`)}</button></div>
    <p class="small muted">${q(`Densité en t/m³ (en place). Les tonnages des blocs sont recalculés aussitôt.`)}</p>`,t=>{t.onchange=t=>{let n=t.target.closest(`[data-i]`);if(!n)return;let r=e[+n.dataset.i],i=t.target.dataset.k;r[i]=i===`density`?parseFloat(String(t.target.value).replace(`,`,`.`))||r.density:t.target.value,cS(),DC().forEach(PS)},Y(`mAdd`).onclick=()=>{e.push({key:`m`+eS(),name:q(`Matériau {0}`,e.length+1),color:`#`+Math.floor(Math.random()*16777215).toString(16).padStart(6,`0`),density:2.6}),cS(),zC()},Y(`mOk`).onclick=LC},`materials`)}function BC(){Q.pitTab=`actual`;let e=e=>e.date||new Date(e.created||0).toISOString().slice(0,10),t=Z.filter(e=>e.kind===`mesh`&&(e.role===`topo`||e.role===`survey`)).sort((t,n)=>e(n).localeCompare(e(t))||n.created-t.created),n=OS(`topo`),r=OS(`design`),i=``;if(n){let e=AS(n),t=-1/0;if(nS)for(let e=2;e<nS.length;e+=3)t=Math.max(t,nS[e]);i=`<div class="kpis">
      <div class="kpi hi"><small>${q(`Fond actuel (Z min)`)}</small><b>RL ${J(e.z0,1)}</b></div>
      <div class="kpi"><small>${q(`Z max`)}</small><b>RL ${J(e.z1,1)}</b></div>
      <div class="kpi"><small>${q(`Fond du design`)}</small><b>${r?`RL `+J(AS(r).z0,1):`—`}</b></div>
      <div class="kpi"><small>${q(`Reste à descendre`)}</small><b>${r?J(Math.max(0,e.z0-AS(r).z0),1)+` m`:`—`}</b></div>
    </div>
    <p class="small muted">${q(`Levé`)} : <b>${$x(n.name)}</b> · ${$x(n.date||new Date(n.created||0).toISOString().slice(0,10))} · ${q(`{0} triangles`,J(n.T.length/3))} · ${q(`emprise`)} ${J((e.x1-e.x0)*(e.y1-e.y0)/1e4,1)} ha</p>`}let a=n=>t.map(t=>`<option value="${t.id}" ${t===n?`selected`:``}>${$x(e(t))} — ${$x(t.name)}</option>`).join(``);fS(q(`Pit actuel`),`${CC(`actual`)}
    <div class="stack">
      <h3 style="margin-top:0">${q(`Pit actuel (levés topo)`)}</h3>
      ${n?i:`<div class="card small">${q(`Aucune topo actuelle. Importez le dernier levé (.00t, .dtm, .dxf, points XYZ/CSV, LandXML…).`)}</div>`}
      ${n?`<div class="seg" id="aColor">${[[`diff`,`Écart au design`],[`mat`,`Matériau`],[`elev`,`Altitude`],[`solid`,`Unie`]].map(([e,t])=>`<button data-v="${e}" class="${n.colorMode===e?`on`:``}">${q(t)}</button>`).join(``)}</div>
      <div class="row"><button class="btn grow" id="aOnly">${q(`Voir seulement le pit actuel`)}</button><button class="btn grow" id="aAll">${q(`Tout afficher`)}</button></div>`:``}
      ${xS(`layers`,`btn primary block`,`${K.upload} ${q(`Importer un levé`)}`)}
      <h3>${q(`Levés`)}</h3>
      <div id="aList">${t.map(t=>`<div class="list-item" data-id="${t.id}">
        <input type="radio" name="cur" ${t.role===`topo`?`checked`:``} data-act="cur" style="width:22px;height:22px">
        <div class="grow"><b>${$x(t.name)}</b><small class="muted">${t.role===`topo`?q(`actuel`):q(`antérieur`)} · ${$x(e(t))} · ${q(`{0} triangles`,J(t.T.length/3))}</small></div>
        <input type="date" class="inp" style="width:150px" value="${$x(e(t))}" data-act="date">
      </div>`).join(``)||`<p class="muted">${q(`Aucun levé.`)}</p>`}</div>
      ${t.length>=2?`<h3>${q(`Volume miné entre deux levés`)}</h3>
      <div class="fields"><label class="f">${q(`Levé ancien`)}<select id="aA">${a(t[1])}</select></label><label class="f">${q(`Levé récent`)}<select id="aB">${a(t[0])}</select></label></div>
      <button class="btn block" id="aCmp">${K.volume} ${q(`Comparer`)}</button><div id="aRes"></div>`:``}
    </div>`,t=>{wC(),n&&(Y(`aColor`).onclick=e=>{let t=e.target.closest(`[data-v]`);t&&(n.colorMode=t.dataset.v,PS(n),FS(n),BC())},Y(`aOnly`).onclick=()=>{for(let e of Z){let t=e===n||e.role===`limit`;e.visible!==t&&(e.visible=t,$.setVisible(e.id,t),FS(e))}pS(),$.fitTo(AS(n))},Y(`aAll`).onclick=()=>{for(let e of Z)e.visible===!1&&e.role!==`survey`&&e.role!==`initial`&&(e.visible=!0,$.setVisible(e.id,!0),FS(e));pS()}),Y(`aList`).onchange=async e=>{let t=Z.find(t=>t.id===e.target.closest(`[data-id]`)?.dataset.id);if(t){if(e.target.dataset.act===`date`){t.date=e.target.value,await FS(t);return}if(e.target.dataset.act===`cur`){for(let e of Z)e!==t&&e.role===`topo`&&(e.role=`survey`,Object.assign(e,wS(`survey`,!0)),e.visible=!1,$.setVisible(e.id,!1),PS(e),await FS(e));t.role=`topo`,Object.assign(t,wS(`topo`,!!OS(`design`))),t.visible=!0,PS(t),await FS(t),VS(),JS(),DC().length&&await FC(),BC()}}},Y(`aCmp`)&&(Y(`aCmp`).onclick=async()=>{let t=Z.find(e=>e.id===Y(`aA`).value),n=Z.find(e=>e.id===Y(`aB`).value);if(!t||!n||t===n)return hS(q(`Choisissez deux levés différents`));e(t)>e(n)&&([t,n]=[n,t]),await gS(q(`Comparaison des levés…`));let r=await yC({design:{V:n.V,T:n.T},topo:{V:t.V,T:t.T},benchHeight:X.benchH,benchRef:X.benchRef,density:X.density,tol:X.tol});if(gS(),!r.ok)return alert(q(r.error));let i=r.res,a=Math.max(1,...i.perBench.map(e=>e.volume));Y(`aRes`).innerHTML=`<div class="kpis" style="margin-top:10px">
          <div class="kpi hi"><small>${q(`Volume miné`)}</small><b>${Xx(i.remaining)}m³</b></div>
          <div class="kpi hi"><small>${q(`Tonnage miné`)}</small><b>${Xx(i.remainingTonnes)}t</b></div>
          <div class="kpi"><small>${q(`Remblai / dépôt`)}</small><b>${Xx(i.overbreak)}m³</b></div>
          <div class="kpi"><small>${q(`Surface travaillée`)}</small><b>${J(i.remainingArea/1e4,2)} ha</b></div></div>
        <table class="t" style="margin-top:8px"><tr><th>${q(`Banc`)}</th><th class="n">m³</th><th style="width:35%"></th></tr>
        ${i.perBench.map(e=>`<tr><td>RL ${J(e.from,0)} → ${J(e.to,0)}</td><td class="n">${J(e.volume,0)}</td><td><div class="bar" style="width:${100*e.volume/a}%"></div></td></tr>`).join(``)}</table>
        <p class="small muted">${$x(t.date||t.name)} → ${$x(n.date||n.name)} · ${q(`densité`)} ${J(X.density,2)}</p>`})},`volume`)}function VC(){Q.pitTab=`profile`,fS(q(`Profil`),`${CC(`profile`)}
    <div class="stack">
      <h3 style="margin-top:0">${q(`Voir la fosse de profil en orientant le téléphone`)}</h3>
      <button class="tool" id="prOpen" style="flex-direction:row;justify-content:flex-start;gap:14px;padding:14px">${K.section}<span style="text-align:left"><b>${q(`Profil orienté`)}</b><br><small class="muted">${q(`Pointez le téléphone : la coupe ou la silhouette de toute la fosse s'affiche dans cette direction, en direct.`)}</small></span></button>
      <button class="tool" id="prOrient" style="flex-direction:row;justify-content:flex-start;gap:14px;padding:14px">${K.compass3d}<span style="text-align:left"><b>${Q.orient3d?q(`Arrêter la vue 3D orientée`):q(`Vue 3D orientée`)}</b><br><small class="muted">${q(`La vue 3D tourne avec le téléphone : tenu debout = vue de côté (profil), à plat = vue de dessus.`)}</small></span></button>
      <p class="small muted">${q(`Silhouette = la fosse entière vue de côté (fond en vert, bord en brun, design en rouge). Coupe = plan vertical passant par vous ou par le centre de la fosse ; l'orange est le reste à miner. Sur iPhone, autorisez l'accès « Mouvement et orientation » quand il est demandé.`)}</p>
    </div>`,()=>{wC(),Y(`prOpen`).onclick=UC,Y(`prOrient`).onclick=()=>{pS(),WC()}},`volume`)}var HC=!1;async function UC(){let e=OS(`design`),t=OS(`topo`);if(!e&&!t)return hS(q(`Importez d'abord un pit design ou une topo`));HC||(HC=!0,pS(),await Nb({design:e,topo:t,initial:OS(`initial`),limitP:nS,pos:()=>Q.pos,t:q,fmt:J,lang:Yx(),onClose:()=>{HC=!1}}))}async function WC(){let e=Y(`fabOrient`);if(Q.orient3d){Q.orient3d=!1,Q.stopOrient3d?.(),Q.stopOrient3d=null,$.controls.enableRotate=!0,e.classList.remove(`on`),hS(q(`Vue orientée arrêtée`));return}await Tb(),$.mode===`plan`&&($.setMode(`3d`),Y(`fabMode`).innerHTML=`<span class="lbl">${q(`PLAN`)}</span>`),Q.orient3d=!0,e.classList.add(`on`),$.controls.enableRotate=!1;let t=NaN,n=-35,r=!1;Q.stopOrient3d=Ob(e=>{r=!0,t=kb(t,e.heading,.18),n+=.18*(e.pitch-n),$.orient(t,n)}),hS(q(`Vue orientée : tournez et inclinez le téléphone`),3500),setTimeout(()=>{Q.orient3d&&!r&&(hS(q(`Aucun capteur d'orientation sur cet appareil`),4e3),WC())},2e3)}function GC(){let e=X.calib||{enabled:!1,points:[]},t=US().calib;fS(q(`Réglages`),`
    <h3>${q(`Projet`)}</h3>
    <label class="f">${q(`Nom du projet`)}<input id="sName" class="inp" value="${$x(X.name)}"></label>

    <h3>${q(`Système de coordonnées`)}</h3>
    <div class="stack">
      <label class="f">${q(`Coordonnées du pit design`)}<select id="sCrs">${hy.map(e=>`<option value="${e.id}" ${e.id===X.crs?`selected`:``}>${q(e.label)}</option>`).join(``)}</select></label>
      <div id="sAuto" class="${X.crs===`utm-auto`?``:`hidden`} fields">
        <label class="f">${q(`Fuseau UTM`)}<input id="sZone" type="number" min="1" max="60" value="${X.zone||``}" placeholder="${q(`auto`)}"></label>
        <label class="f">${q(`Hémisphère`)}<select id="sSouth"><option value="0">${q(`Nord`)}</option><option value="1" ${X.south?`selected`:``}>${q(`Sud`)}</option></select></label>
      </div>
      <label id="sCustomL" class="f ${X.crs===`custom`?``:`hidden`}">${q(`Définition proj4`)}<input id="sCustom" class="inp" value="${$x(X.custom)}" placeholder="+proj=utm +zone=30 +datum=WGS84 +units=m"></label>
      <label class="f">${q(`Altitude du marqueur`)}<select id="sZsrc"><option value="topo" ${X.zSource===`gps`?``:`selected`}>${q(`Posé sur la topo / le design (recommandé)`)}</option><option value="gps" ${X.zSource===`gps`?`selected`:``}>${q(`Altitude GPS (RTK)`)}</option></select></label>
      <label class="f">${q(`Décalage Z GPS → RL mine (m), sans calage`)}<input id="sZoff" type="number" inputmode="decimal" step="0.01" value="${X.zOffset||0}"></label>
    </div>

    <h3>${q(`Calage sur points connus (grille locale de la mine)`)}</h3>
    <div class="card stack">
      <div class="switch"><span>${q(`Utiliser le calage`)}</span><input type="checkbox" id="sCal" ${e.enabled?`checked`:``}></div>
      <p class="small muted" style="margin:0">${q(`Placez-vous sur une borne / un point topo connu, saisissez ses coordonnées mine puis appuyez sur « Capturer le GPS ». 1 point = translation, 2 points ou plus = translation + rotation + échelle.`)}</p>
      ${(e.points||[]).map((e,n)=>`<div class="list-item"><div class="grow"><b>${$x(e.name||`B`+(n+1))}</b><small class="muted">E ${J(e.E,3)} N ${J(e.N,3)} Z ${J(e.Z,2)} · GPS ${e.lat?.toFixed(6)}, ${e.lon?.toFixed(6)}${t&&t.residuals[n]!==void 0?` · ${q(`écart`)} ${J(t.residuals[n],3)} m`:``}</small></div><button class="btn ghost danger" data-cdel="${n}">${K.trash}</button></div>`).join(``)}
      <div class="fields three">
        <label class="f">${q(`Est`)}<input id="cE" inputmode="decimal"></label>
        <label class="f">${q(`Nord`)}<input id="cN" inputmode="decimal"></label>
        <label class="f">Z<input id="cZ" inputmode="decimal"></label>
      </div>
      <button class="btn" id="cAdd" ${Q.fix?``:`disabled`}>${K.target} ${q(`Capturer le GPS et ajouter le point`)}</button>
      ${t?`<p class="small" style="margin:0">${q(`Échelle`)} ${t.scale.toFixed(6)} · ${q(`rotation`)} ${J(t.rotation,4)}° · ΔZ ${J(t.dz,2)} m · ${q(`écart moyen`)} ${J(t.rms,3)} m</p>`:``}
    </div>

    <h3>${q(`Fosse et alertes`)}</h3>
    <div class="fields">
      <label class="f">${q(`Alerte limite à (m)`)}<input id="sAlert" type="number" inputmode="decimal" value="${X.alertDist}"></label>
      <label class="f">${q(`Tolérance design (m)`)}<input id="sTol" type="number" inputmode="decimal" step="0.05" value="${X.tol}"></label>
      <label class="f">${q(`Hauteur de banc (m)`)}<input id="sBH" type="number" inputmode="decimal" value="${X.benchH}"></label>
      <label class="f">${q(`RL de référence`)}<input id="sBR" type="number" inputmode="decimal" value="${X.benchRef}"></label>
    </div>
    <div class="switch"><span>${q(`Son des alertes`)}</span><input type="checkbox" id="sSound" ${rS.sound?`checked`:``}></div>
    <div class="switch"><span>${q(`Vibration`)}</span><input type="checkbox" id="sVib" ${rS.vibrate?`checked`:``}></div>
    <p class="small muted">${q(`Limite de fosse : contour extérieur du pit design, ou un calque de lignes au rôle « Limite de fosse ».`)}</p>

    <h3>${q(`Affichage`)}</h3>
    <label class="f">${q(`Exagération verticale`)} <b id="sExV">×${X.vExag}</b><input id="sExag" type="range" min="1" max="5" step="0.5" value="${X.vExag}"></label>
    <div class="fields" style="margin-top:10px">
      <div class="seg" id="sTheme"><button data-v="dark" class="${rS.theme===`light`?``:`on`}">${q(`Sombre`)}</button><button data-v="light" class="${rS.theme===`light`?`on`:``}">${q(`Clair`)}</button></div>
      <div class="seg" id="sLang"><button data-v="fr" class="${Yx()===`fr`?`on`:``}">FR</button><button data-v="en" class="${Yx()===`en`?`on`:``}">EN</button></div>
    </div>

    <h3>${q(`À propos`)}</h3>
    <p class="small muted">KB Pit Limit ${Zx} — ${q(`fonctionne entièrement hors ligne : fichiers lus sur l'appareil, données stockées localement, GPS sans internet.`)} <span id="sStore"></span></p>`,t=>{let n=(e,t)=>{let n=parseFloat(String(e).replace(`,`,`.`));return Number.isFinite(n)?n:t},r=()=>{tS=null,cS(),JS(),Q.fix&&Q.mode===`gps`&&KS(Q.fix)};Y(`sName`).onchange=e=>{X.name=e.target.value.trim()||X.name,Y(`projName`).textContent=X.name,cS()},Y(`sCrs`).onchange=e=>{X.crs=e.target.value,X.crs===`utm-auto`&&(X.zone=null),r(),GC()},Y(`sZone`).onchange=e=>{X.zone=parseInt(e.target.value,10)||null,r()},Y(`sSouth`).onchange=e=>{X.south=e.target.value===`1`,r()},Y(`sCustom`).onchange=e=>{X.custom=e.target.value.trim(),r()},Y(`sZsrc`).onchange=e=>{X.zSource=e.target.value,r()},Y(`sZoff`).onchange=e=>{X.zOffset=n(e.target.value,0),r()},Y(`sCal`).onchange=t=>{X.calib={...e,enabled:t.target.checked},r(),GC()},Y(`cAdd`).onclick=()=>{let t=n(Y(`cE`).value,NaN),i=n(Y(`cN`).value,NaN),a=n(Y(`cZ`).value,NaN);if(!Number.isFinite(t)||!Number.isFinite(i))return hS(q(`Saisissez au moins Est et Nord du point connu`));let o=Q.fix;X.calib={enabled:!0,points:[...e.points||[],{name:`B`+((e.points||[]).length+1),E:t,N:i,Z:a,lat:o.lat,lon:o.lon,h:o.alt,acc:o.acc,time:Date.now()}]},r(),GC(),hS(q(`Point de calage ajouté`))},t.onclick=t=>{let n=t.target.closest(`[data-cdel]`);if(n){let t=[...e.points];t.splice(+n.dataset.cdel,1),X.calib={...e,points:t},r(),GC()}},Y(`sAlert`).onchange=e=>{X.alertDist=n(e.target.value,15),cS(),rC()},Y(`sTol`).onchange=e=>{X.tol=n(e.target.value,.3),cS(),VS(),JS()},Y(`sBH`).onchange=e=>{X.benchH=n(e.target.value,10),cS(),VS(),JS()},Y(`sBR`).onchange=e=>{X.benchRef=n(e.target.value,0),cS(),VS(),JS()},Y(`sSound`).onchange=e=>{rS.sound=e.target.checked,sS(),rS.sound&&nC(880,.1,1)},Y(`sVib`).onchange=e=>{rS.vibrate=e.target.checked,sS()},Y(`sExag`).oninput=e=>{X.vExag=Number(e.target.value),Y(`sExV`).textContent=`×`+X.vExag,$.setExaggeration(X.vExag),fC()},Y(`sExag`).onchange=()=>cS(),Y(`sTheme`).onclick=e=>{let t=e.target.closest(`[data-v]`);t&&(rS.theme=t.dataset.v,sS(),oS(),GC())},Y(`sLang`).onclick=e=>{let t=e.target.closest(`[data-v]`);t&&(rS.lang=t.dataset.v,sS(),oS(),uS(),GC())},Ky().then(e=>{e&&Y(`sStore`)&&(Y(`sStore`).textContent=q(`Stockage utilisé : {0} Mo.`,J((e.usage||0)/1048576,1)))})},`settings`)}var KC=[[`Ingénierie`,[[`design`,`Design`,`polygon`],[`volumes`,`Volumes`,`volume`],[`actual`,`Pit actuel`,`layers`],[`profile`,`Profil`,`section`]]],[`Planification`,[[`short`,`Court terme`,`calendar`],[`medium`,`Moyen terme`,`chart`],[`long`,`Long terme`,`target`],[`blocks`,`Blocs`,`cube`]]],[`Opérations`,[[`prod`,`Production`,`truck`],[`dnb`,`Forage et tir`,`drill`],[`terrain`,`Vue terrain`,`eye3d`],[`tools`,`Outils`,`tools`]]],[`Données`,[[`points`,`Points`,`pin`],[`projects`,`Projets`,`folder`],[`guide`,`Guide`,`book`],[`settings`,`Réglages`,`settings`]]]];function qC(){document.querySelectorAll(`#tabs button`).forEach(e=>e.classList.toggle(`on`,e.dataset.tab===`mine`));let e=Q.lastVol,t=NaN;for(let e of DC())for(let n of e.blocks){let r=AC(e,n),i=OC(n.material);r&&[`ore`,`hg`,`lg`,`marginal`,`oxide`].includes(i.key)&&(t=(Number.isFinite(t)?t:0)+r.remaining*i.density)}let n=new Date().toISOString().slice(0,7),r=(X.actuals||[]).filter(e=>e.date.startsWith(n)).reduce((e,t)=>e+(Number(t.oreT)||0),0);fS(q(`Mine`),`
    <div class="hub-head"><img src="./avatar.png" alt=""><div><b>${$x(X.name)}</b><small>${Qx} · KB Pit Limit ${Zx}</small></div></div>
    <div class="hub-strip">
      <div><small>${q(`Reste à miner`)}</small><b>${e?Xx(e.remainingTonnes)+`t`:`—`}</b></div>
      <div><small>${q(`Minerai restant`)}</small><b>${Number.isFinite(t)?Xx(t)+`t`:`—`}</b></div>
      <div><small>${q(`Minerai du mois`)}</small><b>${r?Xx(r)+`t`:`—`}</b></div>
    </div>
    ${KC.map(([e,t])=>`<h3>${q(e)}</h3><div class="hub-grid">${t.map(([e,t,n])=>`<button class="hub-card" data-m="${e}">${K[n]}<span>${q(t)}</span></button>`).join(``)}</div>`).join(``)}`,e=>{e.onclick=e=>{let t=e.target.closest(`[data-m]`);if(!t)return;let n=t.dataset.m;({design:()=>gx(iw),volumes:_C,actual:BC,profile:VC,short:()=>bx(iw),medium:()=>xx(iw),long:()=>Sx(iw),blocks:LC,prod:()=>Cx(iw),dnb:()=>wx(iw),terrain:()=>{pS(),Px(iw)},tools:hC,points:mC,projects:vS,guide:YC,settings:GC})[n]()}},`hub`)}function JC(e,t,n){fS(e,`${CC()}${t}`,e=>{wC(),n&&n(e)},`module`)}function YC(){JC(q(`Guide`),`<p class="small muted">${q(`Guide complet, consultable sans réseau. Le manuel PDF est fourni avec l'application.`)}</p>${Lx(iw)}`)}async function XC(e,t,n=`#ffe066`){let r={id:eS(),projectId:X.id,name:e,kind:`lines`,role:`lines`,format:q(`Généré`),lines:t,notes:[],visible:!0,opacity:1,color:n,created:Date.now()};return await By(r),Z.push(r),PS(r),r}function ZC(e){$.setBlasts((X.blasts||[]).map(e=>({id:e.id,holes:e.holes,poly:e.poly})),e)}var QC=null;function $C(e,t,n){let r=DC();if(!r.length)return null;let i=r.map(e=>e.id+`:`+e.blocks.length).join(`|`);if(!QC||QC.key!==i){let e=null;for(let t of r)e=uf(e,AS(t));let t=Math.max(5,Math.max(e.x1-e.x0,e.y1-e.y0)/200),n=new Map;for(let i of r)for(let r of i.blocks){let a=r._b||(r._b=lf(r.V));for(let o=Math.floor((a.x0-e.x0)/t);o<=Math.floor((a.x1-e.x0)/t);o++)for(let s=Math.floor((a.y0-e.y0)/t);s<=Math.floor((a.y1-e.y0)/t);s++){let e=o*100003+s;n.has(e)||n.set(e,[]),n.get(e).push([i,r])}}QC={key:i,b0:e,cs:t,cells:n}}let{b0:a,cs:o,cells:s}=QC,c=s.get(Math.floor((e-a.x0)/o)*100003+Math.floor((t-a.y0)/o));if(!c)return null;for(let[r,i]of c){let a=i._b;if(!(e<a.x0||e>a.x1||t<a.y0||t>a.y1||n<a.z0-.01||n>a.z1+.01)&&(i._hull||(i._hull=kx(i.V)),gf(e,t,i._hull)))return{l:r,b:i}}return null}function ew(e){let t=OS(`topo`);e?(Q.savedStyle={topo:t?.colorMode,blockMode:X.blockMode},t&&DC().length&&(t.colorMode=`mat`,PS(t)),DC().length&&(X.blockMode=`remaining`,DC().forEach(PS))):Q.savedStyle&&(t&&Q.savedStyle.topo&&(t.colorMode=Q.savedStyle.topo,PS(t)),X.blockMode=Q.savedStyle.blockMode,DC().forEach(PS),Q.savedStyle=null)}function tw(e,t){let n=OS(`topo`),r=OS(`design`),i=n?kS(n).zAt(e,t):NaN;return!Number.isFinite(i)&&r&&(i=kS(r).zAt(e,t)),i}function nw(e,t){let n=OS(`design`);return n?kS(n).zAt(e,t):NaN}function rw(e){let t=e.split(/\r?\n/).filter(e=>e.trim());if(t.length<2)return 0;let n=[`;`,`	`,`,`].find(e=>t[0].includes(e))||`;`,r=t[0].split(n).map(e=>e.trim().toLowerCase()),i=(...e)=>r.findIndex(t=>e.some(e=>t.includes(e))),a=i(`bloc`,`block`,`nom`,`name`,`id`),o=i(`mat`,`type`,`rock`),s=i(`teneur`,`grade`,`au`,`g/t`),c=i(`dens`,`sg`),l=new Map;for(let e of DC())for(let t of e.blocks)l.set(t.name.trim().toLowerCase(),[e,t]);let u=X.materials||by,d=0,f=new Set;for(let e of t.slice(1)){let t=e.split(n),r=l.get(String(t[a>=0?a:0]||``).trim().toLowerCase());if(!r)continue;let[i,p]=r;if(o>=0&&t[o]){let e=t[o].trim().toLowerCase(),n=u.find(t=>t.key===e||q(t.name).toLowerCase()===e||t.name.toLowerCase()===e);p.material=n?n.key:Sy(e)}if(s>=0){let e=parseFloat(String(t[s]).replace(`,`,`.`));Number.isFinite(e)&&(p.grade=e)}if(c>=0){let e=parseFloat(String(t[c]).replace(`,`,`.`));Number.isFinite(e)&&(p.density=e)}f.add(i),d++}for(let e of f)FS(e),PS(e);return d}var iw={get P(){return X},get layers(){return Z},get limitP(){return nS},S:Q,viewer:$,t:q,fmt:J,fmtVol:Xx,esc:$x,I:K,uid:eS,csv:Ux,exportFile:Hx,lang:Yx,open:JC,closeSheet:pS,toast:hS,busy:gS,saveP:cS,byRole:OS,surf:kS,layerBounds:AS,blockLayers:DC,matOf:OC,runJob:yC,persistLayer:FS,drawLayer:PS,refreshOverlay:fC,renderHud:iC,startTool:sC,importBtn:xS,addLines:XC,drawBlasts:ZC,groundZ:tw,zDesign:nw,enterTerrain:e=>Px(iw,e),blockAtPoint:$C,terrainStyle:ew,afterTerrain:()=>{ew(!1),document.querySelectorAll(`#tabs button`).forEach(e=>e.classList.toggle(`on`,e.dataset.tab===`map`)),iC()}};window.addEventListener(`error`,e=>console.error(e.error||e.message)),aS().catch(e=>{console.error(e),alert(`KB Pit Limit : `+e.message)});export{$y as n,ob as r,zx as t};