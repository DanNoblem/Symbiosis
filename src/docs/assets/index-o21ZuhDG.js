var lg=Object.defineProperty;var ug=(s,t,e)=>t in s?lg(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Kn=(s,t,e)=>(ug(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();function pp(s){let t=s.x,e=s.y,n=s.z;return Math.sqrt(t*t+e*e+n*n)}function hg(s,t){return pp(s)>t&&(s.normalize(),s.multiplyScalar(t)),s}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vu="161",mr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dg=0,Jh=1,fg=2,mp=1,pg=2,Oi=3,gs=0,yn=1,fi=2,Hi=0,Gr=1,Qh=2,td=3,ed=4,_p=5,as=100,mg=101,_g=102,nd=103,id=104,gg=200,vg=201,xg=202,yg=203,sc=204,rc=205,Sg=206,Mg=207,Tg=208,bg=209,Eg=210,wg=211,Ag=212,Cg=213,Rg=214,Pg=0,Dg=1,Lg=2,oc=3,Ng=4,Ig=5,Og=6,Fg=7,gp=0,Ug=1,kg=2,ds=0,Vg=1,Bg=2,zg=3,Gg=4,Hg=5,Wg=6,vp=300,$r=301,Zr=302,iu=303,su=304,Gc=306,ru=1e3,ni=1001,ou=1002,hn=1003,sd=1004,So=1005,vn=1006,pl=1007,zs=1008,fs=1009,Xg=1010,qg=1011,Bu=1012,xp=1013,cs=1014,Bi=1015,Kr=1016,yp=1017,Sp=1018,Ws=1020,Yg=1021,ii=1023,jg=1024,$g=1025,Xs=1026,Jr=1027,Zg=1028,Mp=1029,Kg=1030,Tp=1031,bp=1033,ml=33776,_l=33777,gl=33778,vl=33779,rd=35840,od=35841,ad=35842,cd=35843,Ep=36196,ld=37492,ud=37496,hd=37808,dd=37809,fd=37810,pd=37811,md=37812,_d=37813,gd=37814,vd=37815,xd=37816,yd=37817,Sd=37818,Md=37819,Td=37820,bd=37821,xl=36492,Ed=36494,wd=36495,Jg=36283,Ad=36284,Cd=36285,Rd=36286,wp=3e3,qs=3001,Qg=3200,t0=3201,zu=0,e0=1,Wn="",Ze="srgb",Xi="srgb-linear",Gu="display-p3",Hc="display-p3-linear",ac="linear",he="srgb",cc="rec709",lc="p3",gr=7680,Pd=519,n0=512,i0=513,s0=514,Ap=515,r0=516,o0=517,a0=518,c0=519,Dd=35044,Ld="300 es",au=1035,zi=2e3,uc=2001;class lr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nd=1234567;const Po=Math.PI/180,Fo=180/Math.PI;function uo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[s&255]+Qe[s>>8&255]+Qe[s>>16&255]+Qe[s>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function en(s,t,e){return Math.max(t,Math.min(e,s))}function Hu(s,t){return(s%t+t)%t}function l0(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function u0(s,t,e){return s!==t?(e-s)/(t-s):0}function Do(s,t,e){return(1-e)*s+e*t}function h0(s,t,e,n){return Do(s,t,1-Math.exp(-e*n))}function d0(s,t=1){return t-Math.abs(Hu(s,t*2)-t)}function f0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function p0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function m0(s,t){return s+Math.floor(Math.random()*(t-s+1))}function _0(s,t){return s+Math.random()*(t-s)}function g0(s){return s*(.5-Math.random())}function v0(s){s!==void 0&&(Nd=s);let t=Nd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function x0(s){return s*Po}function y0(s){return s*Fo}function cu(s){return(s&s-1)===0&&s!==0}function S0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function hc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function M0(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),d=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*u,c*h,c*d,o*l);break;case"YZY":s.set(c*d,o*u,c*h,o*l);break;case"ZXZ":s.set(c*h,c*d,o*u,o*l);break;case"XZX":s.set(o*u,c*g,c*m,o*l);break;case"YXY":s.set(c*m,o*u,c*g,o*l);break;case"ZYZ":s.set(c*g,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Or(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ln(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const T0={DEG2RAD:Po,RAD2DEG:Fo,generateUUID:uo,clamp:en,euclideanModulo:Hu,mapLinear:l0,inverseLerp:u0,lerp:Do,damp:h0,pingpong:d0,smoothstep:f0,smootherstep:p0,randInt:m0,randFloat:_0,randFloatSpread:g0,seededRandom:v0,degToRad:x0,radToDeg:y0,isPowerOfTwo:cu,ceilPowerOfTwo:S0,floorPowerOfTwo:hc,setQuaternionFromProperEuler:M0,normalize:ln,denormalize:Or};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,i,r,a,o,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],_=i[0],f=i[3],p=i[6],x=i[1],v=i[4],M=i[7],S=i[2],b=i[5],T=i[8];return r[0]=a*_+o*x+c*S,r[3]=a*f+o*v+c*b,r[6]=a*p+o*M+c*T,r[1]=l*_+u*x+h*S,r[4]=l*f+u*v+h*b,r[7]=l*p+u*M+h*T,r[2]=d*_+m*x+g*S,r[5]=d*f+m*v+g*b,r[8]=d*p+m*M+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,d=o*c-u*r,m=l*r-a*c,g=e*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*l-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(u*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(yl.makeScale(t,e)),this}rotate(t){return this.premultiply(yl.makeRotation(-t)),this}translate(t,e){return this.premultiply(yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yl=new Xt;function Cp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function dc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function b0(){const s=dc("canvas");return s.style.display="block",s}const Id={};function Hr(s){s in Id||(Id[s]=!0,console.warn(s))}const Od=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fd=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ma={[Xi]:{transfer:ac,primaries:cc,toReference:s=>s,fromReference:s=>s},[Ze]:{transfer:he,primaries:cc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Hc]:{transfer:ac,primaries:lc,toReference:s=>s.applyMatrix3(Fd),fromReference:s=>s.applyMatrix3(Od)},[Gu]:{transfer:he,primaries:lc,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Fd),fromReference:s=>s.applyMatrix3(Od).convertLinearToSRGB()}},E0=new Set([Xi,Hc]),ie={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!E0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Ma[t].toReference,i=Ma[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Ma[s].primaries},getTransfer:function(s){return s===Wn?ac:Ma[s].transfer}};function Wr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Sl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vr;class Rp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vr===void 0&&(vr=dc("canvas")),vr.width=t.width,vr.height=t.height;const n=vr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=dc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Wr(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wr(e[n]/255)*255):e[n]=Wr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let w0=0,Pp=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=uo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ml(i[a].image)):r.push(Ml(i[a]))}else r=Ml(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ml(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let A0=0;class Sn extends lr{constructor(t=Sn.DEFAULT_IMAGE,e=Sn.DEFAULT_MAPPING,n=ni,i=ni,r=vn,a=zs,o=ii,c=fs,l=Sn.DEFAULT_ANISOTROPY,u=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=uo(),this.name="",this.source=new Pp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===qs?Ze:Wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ru:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case ou:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ru:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case ou:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ze?qs:wp}set encoding(t){Hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===qs?Ze:Wn}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=vp;Sn.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,e=0,n=0,i=1){Ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],_=c[2],f=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,M=(m+1)/2,S=(p+1)/2,b=(u+d)/4,T=(h+_)/4,A=(g+f)/4;return v>M&&v>S?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=T/n):M>S?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=b/i,r=A/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=T/r,i=A/r),this.set(n,i,r,e),this}let x=Math.sqrt((f-g)*(f-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((l+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C0 extends lr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Hr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qs?Ze:Wn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Sn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Pp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends C0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Dp extends Sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class R0 extends Sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==d||l!==m||u!==g){let f=1-o;const p=c*d+l*m+u*g+h*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const S=Math.sqrt(v),b=Math.atan2(S,p*x);f=Math.sin(f*b)/S,o=Math.sin(o*b)/S}const M=o*x;if(c=c*f+d*M,l=l*f+m*M,u=u*f+g*M,h=h*f+_*M,f===1-o){const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+u*h+c*m-l*d,t[e+1]=c*g+u*d+l*h-o*m,t[e+2]=l*g+u*m+o*d-c*h,t[e+3]=u*g-o*h-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),d=c(n/2),m=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ud.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ud.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),u=2*(o*e-r*i),h=2*(r*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=i+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Tl.copy(this).projectOnVector(t),this.sub(Tl)}reflect(t){return this.sub(Tl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tl=new U,Ud=new qi;class aa{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Jn):Jn.fromBufferAttribute(r,a),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ta.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox)),Ta.applyMatrix4(t.matrixWorld),this.union(Ta)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mo),ba.subVectors(this.max,Mo),xr.subVectors(t.a,Mo),yr.subVectors(t.b,Mo),Sr.subVectors(t.c,Mo),Qi.subVectors(yr,xr),ts.subVectors(Sr,yr),Rs.subVectors(xr,Sr);let e=[0,-Qi.z,Qi.y,0,-ts.z,ts.y,0,-Rs.z,Rs.y,Qi.z,0,-Qi.x,ts.z,0,-ts.x,Rs.z,0,-Rs.x,-Qi.y,Qi.x,0,-ts.y,ts.x,0,-Rs.y,Rs.x,0];return!bl(e,xr,yr,Sr,ba)||(e=[1,0,0,0,1,0,0,0,1],!bl(e,xr,yr,Sr,ba))?!1:(Ea.crossVectors(Qi,ts),e=[Ea.x,Ea.y,Ea.z],bl(e,xr,yr,Sr,ba))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pi=[new U,new U,new U,new U,new U,new U,new U,new U],Jn=new U,Ta=new aa,xr=new U,yr=new U,Sr=new U,Qi=new U,ts=new U,Rs=new U,Mo=new U,ba=new U,Ea=new U,Ps=new U;function bl(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ps.fromArray(s,r);const o=i.x*Math.abs(Ps.x)+i.y*Math.abs(Ps.y)+i.z*Math.abs(Ps.z),c=t.dot(Ps),l=e.dot(Ps),u=n.dot(Ps);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const P0=new aa,To=new U,El=new U;class Wu{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):P0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;To.subVectors(t,this.center);const e=To.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(To,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(El.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(To.copy(t.center).add(El)),this.expandByPoint(To.copy(t.center).sub(El))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new U,wl=new U,wa=new U,es=new U,Al=new U,Aa=new U,Cl=new U;class Xu{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wl.copy(t).add(e).multiplyScalar(.5),wa.copy(e).sub(t).normalize(),es.copy(this.origin).sub(wl);const r=t.distanceTo(e)*.5,a=-this.direction.dot(wa),o=es.dot(this.direction),c=-es.dot(wa),l=es.lengthSq(),u=Math.abs(1-a*a);let h,d,m,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,m=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(wl).addScaledVector(wa,d),m}intersectSphere(t,e){Di.subVectors(t.center,this.origin);const n=Di.dot(this.direction),i=Di.dot(Di)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,n,i,r){Al.subVectors(e,t),Aa.subVectors(n,t),Cl.crossVectors(Al,Aa);let a=this.direction.dot(Cl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;es.subVectors(this.origin,t);const c=o*this.direction.dot(Aa.crossVectors(es,Aa));if(c<0)return null;const l=o*this.direction.dot(Al.cross(es));if(l<0||c+l>a)return null;const u=-o*es.dot(Cl);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(t,e,n,i,r,a,o,c,l,u,h,d,m,g,_,f){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,u,h,d,m,g,_,f)}set(t,e,n,i,r,a,o,c,l,u,h,d,m,g,_,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Mr.setFromMatrixColumn(t,0).length(),r=1/Mr.setFromMatrixColumn(t,1).length(),a=1/Mr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,m=a*h,g=o*u,_=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=m+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,m=c*h,g=l*u,_=l*h;e[0]=d+_*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,m=c*h,g=l*u,_=l*h;e[0]=d-_*o,e[4]=-a*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,m=a*h,g=o*u,_=o*h;e[0]=c*u,e[4]=g*l-m,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,m=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=_-d*h,e[8]=g*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=m*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*c,m=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=a*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(D0,t,L0)}lookAt(t,e,n){const i=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),ns.crossVectors(n,Rn),ns.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),ns.crossVectors(n,Rn)),ns.normalize(),Ca.crossVectors(Rn,ns),i[0]=ns.x,i[4]=Ca.x,i[8]=Rn.x,i[1]=ns.y,i[5]=Ca.y,i[9]=Rn.y,i[2]=ns.z,i[6]=Ca.z,i[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],x=n[3],v=n[7],M=n[11],S=n[15],b=i[0],T=i[4],A=i[8],N=i[12],y=i[1],E=i[5],L=i[9],k=i[13],P=i[2],F=i[6],O=i[10],V=i[14],z=i[3],H=i[7],q=i[11],j=i[15];return r[0]=a*b+o*y+c*P+l*z,r[4]=a*T+o*E+c*F+l*H,r[8]=a*A+o*L+c*O+l*q,r[12]=a*N+o*k+c*V+l*j,r[1]=u*b+h*y+d*P+m*z,r[5]=u*T+h*E+d*F+m*H,r[9]=u*A+h*L+d*O+m*q,r[13]=u*N+h*k+d*V+m*j,r[2]=g*b+_*y+f*P+p*z,r[6]=g*T+_*E+f*F+p*H,r[10]=g*A+_*L+f*O+p*q,r[14]=g*N+_*k+f*V+p*j,r[3]=x*b+v*y+M*P+S*z,r[7]=x*T+v*E+M*F+S*H,r[11]=x*A+v*L+M*O+S*q,r[15]=x*N+v*k+M*V+S*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+r*c*h-i*l*h-r*o*d+n*l*d+i*o*m-n*c*m)+_*(+e*c*m-e*l*d+r*a*d-i*a*m+i*l*u-r*c*u)+f*(+e*l*h-e*o*m-r*a*h+n*a*m+r*o*u-n*l*u)+p*(-i*o*u-e*c*h+e*o*d+i*a*h-n*a*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],x=h*f*l-_*d*l+_*c*m-o*f*m-h*c*p+o*d*p,v=g*d*l-u*f*l-g*c*m+a*f*m+u*c*p-a*d*p,M=u*_*l-g*h*l+g*o*m-a*_*m-u*o*p+a*h*p,S=g*h*c-u*_*c-g*o*d+a*_*d+u*o*f-a*h*f,b=e*x+n*v+i*M+r*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=x*T,t[1]=(_*d*r-h*f*r-_*i*m+n*f*m+h*i*p-n*d*p)*T,t[2]=(o*f*r-_*c*r+_*i*l-n*f*l-o*i*p+n*c*p)*T,t[3]=(h*c*r-o*d*r-h*i*l+n*d*l+o*i*m-n*c*m)*T,t[4]=v*T,t[5]=(u*f*r-g*d*r+g*i*m-e*f*m-u*i*p+e*d*p)*T,t[6]=(g*c*r-a*f*r-g*i*l+e*f*l+a*i*p-e*c*p)*T,t[7]=(a*d*r-u*c*r+u*i*l-e*d*l-a*i*m+e*c*m)*T,t[8]=M*T,t[9]=(g*h*r-u*_*r-g*n*m+e*_*m+u*n*p-e*h*p)*T,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*p+e*o*p)*T,t[11]=(u*o*r-a*h*r-u*n*l+e*h*l+a*n*m-e*o*m)*T,t[12]=S*T,t[13]=(u*_*i-g*h*i+g*n*d-e*_*d-u*n*f+e*h*f)*T,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*f-e*o*f)*T,t[15]=(a*h*i-u*o*i+u*n*c-e*h*c-a*n*d+e*o*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,d=r*l,m=r*u,g=r*h,_=a*u,f=a*h,p=o*h,x=c*l,v=c*u,M=c*h,S=n.x,b=n.y,T=n.z;return i[0]=(1-(_+p))*S,i[1]=(m+M)*S,i[2]=(g-v)*S,i[3]=0,i[4]=(m-M)*b,i[5]=(1-(d+p))*b,i[6]=(f+x)*b,i[7]=0,i[8]=(g+v)*T,i[9]=(f-x)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Mr.set(i[0],i[1],i[2]).length();const a=Mr.set(i[4],i[5],i[6]).length(),o=Mr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Qn.copy(this);const l=1/r,u=1/a,h=1/o;return Qn.elements[0]*=l,Qn.elements[1]*=l,Qn.elements[2]*=l,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=h,Qn.elements[9]*=h,Qn.elements[10]*=h,e.setFromRotationMatrix(Qn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=zi){const c=this.elements,l=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let m,g;if(o===zi)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===uc)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=zi){const c=this.elements,l=1/(e-t),u=1/(n-i),h=1/(a-r),d=(e+t)*l,m=(n+i)*u;let g,_;if(o===zi)g=(a+r)*h,_=-2*h;else if(o===uc)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Mr=new U,Qn=new Pe,D0=new U(0,0,0),L0=new U(1,1,1),ns=new U,Ca=new U,Rn=new U,kd=new Pe,Vd=new qi;class Wc{constructor(t=0,e=0,n=0,i=Wc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wc.DEFAULT_ORDER="XYZ";class qu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let N0=0;const Bd=new U,Tr=new qi,Li=new Pe,Ra=new U,bo=new U,I0=new U,O0=new qi,zd=new U(1,0,0),Gd=new U(0,1,0),Hd=new U(0,0,1),F0={type:"added"},U0={type:"removed"};class We extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new U,e=new Wc,n=new qi,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Xt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Tr.setFromAxisAngle(t,e),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(t,e){return Tr.setFromAxisAngle(t,e),this.quaternion.premultiply(Tr),this}rotateX(t){return this.rotateOnAxis(zd,t)}rotateY(t){return this.rotateOnAxis(Gd,t)}rotateZ(t){return this.rotateOnAxis(Hd,t)}translateOnAxis(t,e){return Bd.copy(t).applyQuaternion(this.quaternion),this.position.add(Bd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zd,t)}translateY(t){return this.translateOnAxis(Gd,t)}translateZ(t){return this.translateOnAxis(Hd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ra.copy(t):Ra.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(bo,Ra,this.up):Li.lookAt(Ra,bo,this.up),this.quaternion.setFromRotationMatrix(Li),i&&(Li.extractRotation(i.matrixWorld),Tr.setFromRotationMatrix(Li),this.quaternion.premultiply(Tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(F0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(U0)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,t,I0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,O0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}We.DEFAULT_UP=new U(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new U,Ni=new U,Rl=new U,Ii=new U,br=new U,Er=new U,Wd=new U,Pl=new U,Dl=new U,Ll=new U;class pi{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ti.subVectors(t,e),i.cross(ti);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ti.subVectors(i,e),Ni.subVectors(n,e),Rl.subVectors(t,e);const a=ti.dot(ti),o=ti.dot(Ni),c=ti.dot(Rl),l=Ni.dot(Ni),u=Ni.dot(Rl),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,Ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ii.x),c.addScaledVector(a,Ii.y),c.addScaledVector(o,Ii.z),c)}static isFrontFacing(t,e,n,i){return ti.subVectors(n,e),Ni.subVectors(t,e),ti.cross(Ni).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ti.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return pi.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;br.subVectors(i,n),Er.subVectors(r,n),Pl.subVectors(t,n);const c=br.dot(Pl),l=Er.dot(Pl);if(c<=0&&l<=0)return e.copy(n);Dl.subVectors(t,i);const u=br.dot(Dl),h=Er.dot(Dl);if(u>=0&&h<=u)return e.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(br,a);Ll.subVectors(t,r);const m=br.dot(Ll),g=Er.dot(Ll);if(g>=0&&m<=g)return e.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Er,o);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return Wd.subVectors(r,i),o=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(Wd,o);const p=1/(f+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(br,a).addScaledVector(Er,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function Nl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=Hu(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Nl(a,r,t+1/3),this.g=Nl(a,r,t),this.b=Nl(a,r,t-1/3)}return ie.toWorkingColorSpace(this,i),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=Lp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}copyLinearToSRGB(t){return this.r=Sl(t.r),this.g=Sl(t.g),this.b=Sl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return ie.fromWorkingColorSpace(tn.copy(this),t),Math.round(en(tn.r*255,0,255))*65536+Math.round(en(tn.g*255,0,255))*256+Math.round(en(tn.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Ze){ie.fromWorkingColorSpace(tn.copy(this),t);const e=tn.r,n=tn.g,i=tn.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(is),this.setHSL(is.h+t,is.s+e,is.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(is),t.getHSL(Pa);const n=Do(is.h,Pa.h,e),i=Do(is.s,Pa.s,e),r=Do(is.l,Pa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Kt;Kt.NAMES=Lp;let k0=0;class ho extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=uo(),this.name="",this.type="Material",this.blending=Gr,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=oc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(n.blending=this.blending),this.side!==gs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sc&&(n.blendSrc=this.blendSrc),this.blendDst!==rc&&(n.blendDst=this.blendDst),this.blendEquation!==as&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Np extends ho{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new U,Da=new Lt;class nn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Hr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Da.fromBufferAttribute(this,e),Da.applyMatrix3(t),this.setXY(e,Da.x,Da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Or(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Or(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Or(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Or(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Or(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),i=ln(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dd&&(t.usage=this.usage),t}}class Ip extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Op extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yn extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let V0=0;const zn=new Pe,Il=new We,wr=new U,Pn=new aa,Eo=new aa,ze=new U;class bi extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=uo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cp(t)?Op:Ip)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,n){return zn.makeTranslation(t,e,n),this.applyMatrix4(zn),this}scale(t,e,n){return zn.makeScale(t,e,n),this.applyMatrix4(zn),this}lookAt(t){return Il.lookAt(t),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Yn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Eo.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(Pn.min,Eo.min),Pn.expandByPoint(ze),ze.addVectors(Pn.max,Eo.max),Pn.expandByPoint(ze)):(Pn.expandByPoint(Eo.min),Pn.expandByPoint(Eo.max))}Pn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ze.fromBufferAttribute(o,l),c&&(wr.fromBufferAttribute(t,l),ze.add(wr)),i=Math.max(i,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let y=0;y<o;y++)l[y]=new U,u[y]=new U;const h=new U,d=new U,m=new U,g=new Lt,_=new Lt,f=new Lt,p=new U,x=new U;function v(y,E,L){h.fromArray(i,y*3),d.fromArray(i,E*3),m.fromArray(i,L*3),g.fromArray(a,y*2),_.fromArray(a,E*2),f.fromArray(a,L*2),d.sub(h),m.sub(h),_.sub(g),f.sub(g);const k=1/(_.x*f.y-f.x*_.y);isFinite(k)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-_.y).multiplyScalar(k),x.copy(m).multiplyScalar(_.x).addScaledVector(d,-f.x).multiplyScalar(k),l[y].add(p),l[E].add(p),l[L].add(p),u[y].add(x),u[E].add(x),u[L].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let y=0,E=M.length;y<E;++y){const L=M[y],k=L.start,P=L.count;for(let F=k,O=k+P;F<O;F+=3)v(n[F+0],n[F+1],n[F+2])}const S=new U,b=new U,T=new U,A=new U;function N(y){T.fromArray(r,y*3),A.copy(T);const E=l[y];S.copy(E),S.sub(T.multiplyScalar(T.dot(E))).normalize(),b.crossVectors(A,E);const k=b.dot(u[y])<0?-1:1;c[y*4]=S.x,c[y*4+1]=S.y,c[y*4+2]=S.z,c[y*4+3]=k}for(let y=0,E=M.length;y<E;++y){const L=M[y],k=L.start,P=L.count;for(let F=k,O=k+P;F<O;F+=3)N(n[F+0]),N(n[F+1]),N(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new U,r=new U,a=new U,o=new U,c=new U,l=new U,u=new U,h=new U;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,f),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let _=0,f=c.length;_<f;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[m++]}return new nn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new bi,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=t(d,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xd=new Pe,Ds=new Xu,La=new Wu,qd=new U,Ar=new U,Cr=new U,Rr=new U,Ol=new U,Na=new U,Ia=new Lt,Oa=new Lt,Fa=new Lt,Yd=new U,jd=new U,$d=new U,Ua=new U,ka=new U;class Nn extends We{constructor(t=new bi,e=new Np){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Na.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Ol.fromBufferAttribute(h,t),a?Na.addScaledVector(Ol,u):Na.addScaledVector(Ol.sub(e),u))}e.add(Na)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),Ds.copy(t.ray).recast(t.near),!(La.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(La,qd)===null||Ds.origin.distanceToSquared(qd)>(t.far-t.near)**2))&&(Xd.copy(r).invert(),Ds.copy(t.ray).applyMatrix4(Xd),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ds)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=a[f.materialIndex],x=Math.max(f.start,m.start),v=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let M=x,S=v;M<S;M+=3){const b=o.getX(M),T=o.getX(M+1),A=o.getX(M+2);i=Va(this,p,t,n,l,u,h,b,T,A),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const x=o.getX(f),v=o.getX(f+1),M=o.getX(f+2);i=Va(this,a,t,n,l,u,h,x,v,M),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=a[f.materialIndex],x=Math.max(f.start,m.start),v=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let M=x,S=v;M<S;M+=3){const b=M,T=M+1,A=M+2;i=Va(this,p,t,n,l,u,h,b,T,A),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const x=f,v=f+1,M=f+2;i=Va(this,a,t,n,l,u,h,x,v,M),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function B0(s,t,e,n,i,r,a,o){let c;if(t.side===yn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===gs,o),c===null)return null;ka.copy(o),ka.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ka);return l<e.near||l>e.far?null:{distance:l,point:ka.clone(),object:s}}function Va(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,Ar),s.getVertexPosition(c,Cr),s.getVertexPosition(l,Rr);const u=B0(s,t,e,n,Ar,Cr,Rr,Ua);if(u){i&&(Ia.fromBufferAttribute(i,o),Oa.fromBufferAttribute(i,c),Fa.fromBufferAttribute(i,l),u.uv=pi.getInterpolation(Ua,Ar,Cr,Rr,Ia,Oa,Fa,new Lt)),r&&(Ia.fromBufferAttribute(r,o),Oa.fromBufferAttribute(r,c),Fa.fromBufferAttribute(r,l),u.uv1=pi.getInterpolation(Ua,Ar,Cr,Rr,Ia,Oa,Fa,new Lt),u.uv2=u.uv1),a&&(Yd.fromBufferAttribute(a,o),jd.fromBufferAttribute(a,c),$d.fromBufferAttribute(a,l),u.normal=pi.getInterpolation(Ua,Ar,Cr,Rr,Yd,jd,$d,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new U,materialIndex:0};pi.getNormal(Ar,Cr,Rr,h.normal),u.face=h}return u}class ca extends bi{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Yn(l,3)),this.setAttribute("normal",new Yn(u,3)),this.setAttribute("uv",new Yn(h,2));function g(_,f,p,x,v,M,S,b,T,A,N){const y=M/T,E=S/A,L=M/2,k=S/2,P=b/2,F=T+1,O=A+1;let V=0,z=0;const H=new U;for(let q=0;q<O;q++){const j=q*E-k;for(let Q=0;Q<F;Q++){const xt=Q*y-L;H[_]=xt*x,H[f]=j*v,H[p]=P,l.push(H.x,H.y,H.z),H[_]=0,H[f]=0,H[p]=b>0?1:-1,u.push(H.x,H.y,H.z),h.push(Q/T),h.push(1-q/A),V+=1}}for(let q=0;q<A;q++)for(let j=0;j<T;j++){const Q=d+j+F*q,xt=d+j+F*(q+1),X=d+(j+1)+F*(q+1),Y=d+(j+1)+F*q;c.push(Q,xt,Y),c.push(xt,X,Y),z+=6}o.addGroup(m,z,N),m+=z,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function un(s){const t={};for(let e=0;e<s.length;e++){const n=Qr(s[e]);for(const i in n)t[i]=n[i]}return t}function z0(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Fp(s){return s.getRenderTarget()===null?s.outputColorSpace:ie.workingColorSpace}const Up={clone:Qr,merge:un};var G0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends ho{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qr(t.uniforms),this.uniformsGroups=z0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class kp extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ss=new U,Zd=new Lt,Kd=new Lt;class Hn extends kp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ss.x,ss.y).multiplyScalar(-t/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ss.x,ss.y).multiplyScalar(-t/ss.z)}getViewSize(t,e){return this.getViewBounds(t,Zd,Kd),e.subVectors(Kd,Zd)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Po*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pr=-90,Dr=1;class W0 extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Hn(Pr,Dr,t,e);i.layers=this.layers,this.add(i);const r=new Hn(Pr,Dr,t,e);r.layers=this.layers,this.add(r);const a=new Hn(Pr,Dr,t,e);a.layers=this.layers,this.add(a);const o=new Hn(Pr,Dr,t,e);o.layers=this.layers,this.add(o);const c=new Hn(Pr,Dr,t,e);c.layers=this.layers,this.add(c);const l=new Hn(Pr,Dr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===zi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===uc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vp extends Sn{constructor(t,e,n,i,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:$r,super(t,e,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class X0 extends vs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Hr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===qs?Ze:Wn),this.texture=new Vp(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ca(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:Qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Hi});r.uniforms.tEquirect.value=e;const a=new Nn(i,r),o=e.minFilter;return e.minFilter===zs&&(e.minFilter=vn),new W0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Fl=new U,q0=new U,Y0=new Xt;class ki{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Fl.subVectors(n,e).cross(q0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Y0.getNormalMatrix(t),i=this.coplanarPoint(Fl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new Wu,Ba=new U;class Yu{constructor(t=new ki,e=new ki,n=new ki,i=new ki,r=new ki,a=new ki){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zi){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],m=i[8],g=i[9],_=i[10],f=i[11],p=i[12],x=i[13],v=i[14],M=i[15];if(n[0].setComponents(c-r,d-l,f-m,M-p).normalize(),n[1].setComponents(c+r,d+l,f+m,M+p).normalize(),n[2].setComponents(c+a,d+u,f+g,M+x).normalize(),n[3].setComponents(c-a,d-u,f-g,M-x).normalize(),n[4].setComponents(c-o,d-h,f-_,M-v).normalize(),e===zi)n[5].setComponents(c+o,d+h,f+_,M+v).normalize();else if(e===uc)n[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(t){return Ls.center.set(0,0,0),Ls.radius=.7071067811865476,Ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ba.x=i.normal.x>0?t.max.x:t.min.x,Ba.y=i.normal.y>0?t.max.y:t.min.y,Ba.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bp(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function j0(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,m=h.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,h,d),l.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,u,h){const d=u.array,m=u._updateRange,g=u.updateRanges;if(s.bindBuffer(h,l),m.count===-1&&g.length===0&&s.bufferSubData(h,0,d),g.length!==0){for(let _=0,f=g.length;_<f;_++){const p=g[_];e?s.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,i(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}class Xc extends bi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=t/o,d=e/c,m=[],g=[],_=[],f=[];for(let p=0;p<u;p++){const x=p*d-a;for(let v=0;v<l;v++){const M=v*h-r;g.push(M,-x,0),_.push(0,0,1),f.push(v/o),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const v=x+l*p,M=x+l*(p+1),S=x+1+l*(p+1),b=x+1+l*p;m.push(v,M,b),m.push(M,S,b)}this.setIndex(m),this.setAttribute("position",new Yn(g,3)),this.setAttribute("normal",new Yn(_,3)),this.setAttribute("uv",new Yn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.width,t.height,t.widthSegments,t.heightSegments)}}var $0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z0=`#ifdef USE_ALPHAHASH
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
#endif`,K0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ev=`#ifdef USE_AOMAP
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
#endif`,nv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iv=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,sv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,rv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ov=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,av=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cv=`#ifdef USE_IRIDESCENCE
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
#endif`,lv=`#ifdef USE_BUMPMAP
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
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vv=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,xv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yv=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ev="gl_FragColor = linearToOutputTexel( gl_FragColor );",wv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Av=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ov=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fv=`#ifdef USE_GRADIENTMAP
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
}`,Uv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zv=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,Gv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Hv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,jv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$v=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rx=`#if defined( USE_POINTS_UV )
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
#endif`,ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ux=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gx=`#ifdef USE_NORMALMAP
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
#endif`,vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Nx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
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
#endif`,Fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ux=`#ifdef USE_SKINNING
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
#endif`,kx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zx=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gx=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hx=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$x=`uniform sampler2D t2D;
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
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ty=`#include <common>
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
}`,ey=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ny=`#define DISTANCE
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
}`,iy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oy=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 diffuse;
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
}`,cy=`#include <common>
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
}`,ly=`uniform vec3 diffuse;
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
}`,uy=`#define LAMBERT
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
}`,hy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,dy=`#define MATCAP
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
}`,fy=`#define MATCAP
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
}`,py=`#define NORMAL
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
}`,my=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_y=`#define PHONG
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
}`,gy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,vy=`#define STANDARD
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
}`,xy=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,yy=`#define TOON
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
}`,Sy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,My=`uniform float size;
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
}`,Ty=`uniform vec3 diffuse;
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
}`,by=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Ey=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,wy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:$0,alphahash_pars_fragment:Z0,alphamap_fragment:K0,alphamap_pars_fragment:J0,alphatest_fragment:Q0,alphatest_pars_fragment:tv,aomap_fragment:ev,aomap_pars_fragment:nv,batching_pars_vertex:iv,batching_vertex:sv,begin_vertex:rv,beginnormal_vertex:ov,bsdfs:av,iridescence_fragment:cv,bumpmap_pars_fragment:lv,clipping_planes_fragment:uv,clipping_planes_pars_fragment:hv,clipping_planes_pars_vertex:dv,clipping_planes_vertex:fv,color_fragment:pv,color_pars_fragment:mv,color_pars_vertex:_v,color_vertex:gv,common:vv,cube_uv_reflection_fragment:xv,defaultnormal_vertex:yv,displacementmap_pars_vertex:Sv,displacementmap_vertex:Mv,emissivemap_fragment:Tv,emissivemap_pars_fragment:bv,colorspace_fragment:Ev,colorspace_pars_fragment:wv,envmap_fragment:Av,envmap_common_pars_fragment:Cv,envmap_pars_fragment:Rv,envmap_pars_vertex:Pv,envmap_physical_pars_fragment:Gv,envmap_vertex:Dv,fog_vertex:Lv,fog_pars_vertex:Nv,fog_fragment:Iv,fog_pars_fragment:Ov,gradientmap_pars_fragment:Fv,lightmap_fragment:Uv,lightmap_pars_fragment:kv,lights_lambert_fragment:Vv,lights_lambert_pars_fragment:Bv,lights_pars_begin:zv,lights_toon_fragment:Hv,lights_toon_pars_fragment:Wv,lights_phong_fragment:Xv,lights_phong_pars_fragment:qv,lights_physical_fragment:Yv,lights_physical_pars_fragment:jv,lights_fragment_begin:$v,lights_fragment_maps:Zv,lights_fragment_end:Kv,logdepthbuf_fragment:Jv,logdepthbuf_pars_fragment:Qv,logdepthbuf_pars_vertex:tx,logdepthbuf_vertex:ex,map_fragment:nx,map_pars_fragment:ix,map_particle_fragment:sx,map_particle_pars_fragment:rx,metalnessmap_fragment:ox,metalnessmap_pars_fragment:ax,morphcolor_vertex:cx,morphnormal_vertex:lx,morphtarget_pars_vertex:ux,morphtarget_vertex:hx,normal_fragment_begin:dx,normal_fragment_maps:fx,normal_pars_fragment:px,normal_pars_vertex:mx,normal_vertex:_x,normalmap_pars_fragment:gx,clearcoat_normal_fragment_begin:vx,clearcoat_normal_fragment_maps:xx,clearcoat_pars_fragment:yx,iridescence_pars_fragment:Sx,opaque_fragment:Mx,packing:Tx,premultiplied_alpha_fragment:bx,project_vertex:Ex,dithering_fragment:wx,dithering_pars_fragment:Ax,roughnessmap_fragment:Cx,roughnessmap_pars_fragment:Rx,shadowmap_pars_fragment:Px,shadowmap_pars_vertex:Dx,shadowmap_vertex:Lx,shadowmask_pars_fragment:Nx,skinbase_vertex:Ix,skinning_pars_vertex:Ox,skinning_vertex:Fx,skinnormal_vertex:Ux,specularmap_fragment:kx,specularmap_pars_fragment:Vx,tonemapping_fragment:Bx,tonemapping_pars_fragment:zx,transmission_fragment:Gx,transmission_pars_fragment:Hx,uv_pars_fragment:Wx,uv_pars_vertex:Xx,uv_vertex:qx,worldpos_vertex:Yx,background_vert:jx,background_frag:$x,backgroundCube_vert:Zx,backgroundCube_frag:Kx,cube_vert:Jx,cube_frag:Qx,depth_vert:ty,depth_frag:ey,distanceRGBA_vert:ny,distanceRGBA_frag:iy,equirect_vert:sy,equirect_frag:ry,linedashed_vert:oy,linedashed_frag:ay,meshbasic_vert:cy,meshbasic_frag:ly,meshlambert_vert:uy,meshlambert_frag:hy,meshmatcap_vert:dy,meshmatcap_frag:fy,meshnormal_vert:py,meshnormal_frag:my,meshphong_vert:_y,meshphong_frag:gy,meshphysical_vert:vy,meshphysical_frag:xy,meshtoon_vert:yy,meshtoon_frag:Sy,points_vert:My,points_frag:Ty,shadow_vert:by,shadow_frag:Ey,sprite_vert:wy,sprite_frag:Ay},dt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},di={basic:{uniforms:un([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:un([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:un([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:un([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:un([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:un([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:un([dt.points,dt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:un([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:un([dt.common,dt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:un([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:un([dt.sprite,dt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:un([dt.common,dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:un([dt.lights,dt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};di.physical={uniforms:un([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const za={r:0,b:0,g:0};function Cy(s,t,e,n,i,r,a){const o=new Kt(0);let c=r===!0?0:1,l,u,h=null,d=0,m=null;function g(f,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?_(o,c):v&&v.isColor&&(_(v,1),x=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Gc)?(u===void 0&&(u=new Nn(new ca(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Qr(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=ie.getTransfer(v.colorSpace)!==he,(h!==v||d!==v.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=s.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Nn(new Xc(2,2),new oi({name:"BackgroundMaterial",uniforms:Qr(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ie.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,m=s.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function _(f,p){f.getRGB(za,Fp(s)),n.buffers.color.setClear(za.r,za.g,za.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(f,p=1){o.set(f),c=p,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,_(o,c)},render:g}}function Ry(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=f(null);let l=c,u=!1;function h(P,F,O,V,z){let H=!1;if(a){const q=_(V,O,F);l!==q&&(l=q,m(l.object)),H=p(P,V,O,z),H&&x(P,V,O,z)}else{const q=F.wireframe===!0;(l.geometry!==V.id||l.program!==O.id||l.wireframe!==q)&&(l.geometry=V.id,l.program=O.id,l.wireframe=q,H=!0)}z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(H||u)&&(u=!1,A(P,F,O,V),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,F,O){const V=O.wireframe===!0;let z=o[P.id];z===void 0&&(z={},o[P.id]=z);let H=z[F.id];H===void 0&&(H={},z[F.id]=H);let q=H[V];return q===void 0&&(q=f(d()),H[V]=q),q}function f(P){const F=[],O=[],V=[];for(let z=0;z<i;z++)F[z]=0,O[z]=0,V[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:V,object:P,attributes:{},index:null}}function p(P,F,O,V){const z=l.attributes,H=F.attributes;let q=0;const j=O.getAttributes();for(const Q in j)if(j[Q].location>=0){const X=z[Q];let Y=H[Q];if(Y===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),X===void 0||X.attribute!==Y||Y&&X.data!==Y.data)return!0;q++}return l.attributesNum!==q||l.index!==V}function x(P,F,O,V){const z={},H=F.attributes;let q=0;const j=O.getAttributes();for(const Q in j)if(j[Q].location>=0){let X=H[Q];X===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(X=P.instanceColor));const Y={};Y.attribute=X,X&&X.data&&(Y.data=X.data),z[Q]=Y,q++}l.attributes=z,l.attributesNum=q,l.index=V}function v(){const P=l.newAttributes;for(let F=0,O=P.length;F<O;F++)P[F]=0}function M(P){S(P,0)}function S(P,F){const O=l.newAttributes,V=l.enabledAttributes,z=l.attributeDivisors;O[P]=1,V[P]===0&&(s.enableVertexAttribArray(P),V[P]=1),z[P]!==F&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),z[P]=F)}function b(){const P=l.newAttributes,F=l.enabledAttributes;for(let O=0,V=F.length;O<V;O++)F[O]!==P[O]&&(s.disableVertexAttribArray(O),F[O]=0)}function T(P,F,O,V,z,H,q){q===!0?s.vertexAttribIPointer(P,F,O,z,H):s.vertexAttribPointer(P,F,O,V,z,H)}function A(P,F,O,V){if(n.isWebGL2===!1&&(P.isInstancedMesh||V.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const z=V.attributes,H=O.getAttributes(),q=F.defaultAttributeValues;for(const j in H){const Q=H[j];if(Q.location>=0){let xt=z[j];if(xt===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(xt=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(xt=P.instanceColor)),xt!==void 0){const X=xt.normalized,Y=xt.itemSize,ct=e.get(xt);if(ct===void 0)continue;const _t=ct.buffer,et=ct.type,mt=ct.bytesPerElement,Ot=n.isWebGL2===!0&&(et===s.INT||et===s.UNSIGNED_INT||xt.gpuType===xp);if(xt.isInterleavedBufferAttribute){const wt=xt.data,B=wt.stride,ue=xt.offset;if(wt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<Q.locationSize;Tt++)S(Q.location+Tt,wt.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Tt=0;Tt<Q.locationSize;Tt++)M(Q.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let Tt=0;Tt<Q.locationSize;Tt++)T(Q.location+Tt,Y/Q.locationSize,et,X,B*mt,(ue+Y/Q.locationSize*Tt)*mt,Ot)}else{if(xt.isInstancedBufferAttribute){for(let wt=0;wt<Q.locationSize;wt++)S(Q.location+wt,xt.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let wt=0;wt<Q.locationSize;wt++)M(Q.location+wt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let wt=0;wt<Q.locationSize;wt++)T(Q.location+wt,Y/Q.locationSize,et,X,Y*mt,Y/Q.locationSize*wt*mt,Ot)}}else if(q!==void 0){const X=q[j];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(Q.location,X);break;case 3:s.vertexAttrib3fv(Q.location,X);break;case 4:s.vertexAttrib4fv(Q.location,X);break;default:s.vertexAttrib1fv(Q.location,X)}}}}b()}function N(){L();for(const P in o){const F=o[P];for(const O in F){const V=F[O];for(const z in V)g(V[z].object),delete V[z];delete F[O]}delete o[P]}}function y(P){if(o[P.id]===void 0)return;const F=o[P.id];for(const O in F){const V=F[O];for(const z in V)g(V[z].object),delete V[z];delete F[O]}delete o[P.id]}function E(P){for(const F in o){const O=o[F];if(O[P.id]===void 0)continue;const V=O[P.id];for(const z in V)g(V[z].object),delete V[z];delete O[P.id]}}function L(){k(),u=!0,l!==c&&(l=c,m(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:L,resetDefaultState:k,dispose:N,releaseStatesOfGeometry:y,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:M,disableUnusedAttributes:b}}function Py(s,t,e,n){const i=n.isWebGL2;let r;function a(u){r=u}function o(u,h){s.drawArrays(r,u,h),e.update(h,r,1)}function c(u,h,d){if(d===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,h,d),e.update(h,r,d)}function l(u,h,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Dy(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,M=a||t.has("OES_texture_float"),S=v&&M,b=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:b}}function Ly(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new ki,o=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,f=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!f)r?u(null):l();else{const x=r?0:n,v=x*4;let M=p.clippingState||null;c.value=M,M=u(g,d,v,m);for(let S=0;S!==v;++S)M[S]=e[S];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,m,g){const _=h!==null?h.length:0;let f=null;if(_!==0){if(f=c.value,g!==!0||f===null){const p=m+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(f===null||f.length<p)&&(f=new Float32Array(p));for(let v=0,M=m;v!==_;++v,M+=4)a.copy(h[v]).applyMatrix4(x,o),a.normal.toArray(f,M),f[M+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function Ny(s){let t=new WeakMap;function e(a,o){return o===iu?a.mapping=$r:o===su&&(a.mapping=Zr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===iu||o===su)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new X0(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ju extends kp{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ur=4,Jd=[.125,.215,.35,.446,.526,.582],Vs=20,Ul=new ju,Qd=new Kt;let kl=null,Vl=0,Bl=0;const Os=(1+Math.sqrt(5))/2,Lr=1/Os,tf=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Os,Lr),new U(0,Os,-Lr),new U(Lr,0,Os),new U(-Lr,0,Os),new U(Os,Lr,0),new U(-Os,Lr,0)];class ef{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){kl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kl,Vl,Bl),t.scissorTest=!1,Ga(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$r||t.mapping===Zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Kr,format:ii,colorSpace:Xi,depthBuffer:!1},i=nf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nf(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iy(r)),this._blurMaterial=Oy(r,t,e)}return i}_compileMaterial(t){const e=new Nn(this._lodPlanes[0],t);this._renderer.compile(e,Ul)}_sceneToCubeUV(t,e,n,i){const o=new Hn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Qd),u.toneMapping=ds,u.autoClear=!1;const m=new Np({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new Nn(new ca,m);let _=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(Qd),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const v=this._cubeSize;Ga(i,x*v,p>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===$r||t.mapping===Zr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sf());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Nn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Ga(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ul)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=tf[(i-1)%tf.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Nn(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Vs-1),_=r/g,f=isFinite(r)?1+Math.floor(u*_):Vs;f>Vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Vs}`);const p=[];let x=0;for(let T=0;T<Vs;++T){const A=T/_,N=Math.exp(-A*A/2);p.push(N),T===0?x+=N:T<f&&(x+=2*N)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const M=this._sizeLods[i],S=3*M*(i>v-Ur?i-v+Ur:0),b=4*(this._cubeSize-M);Ga(e,S,b,3*M,2*M),c.setRenderTarget(e),c.render(h,Ul)}}function Iy(s){const t=[],e=[],n=[];let i=s;const r=s-Ur+1+Jd.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Ur?c=Jd[a-s+Ur-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,f=2,p=1,x=new Float32Array(_*g*m),v=new Float32Array(f*g*m),M=new Float32Array(p*g*m);for(let b=0;b<m;b++){const T=b%3*2/3-1,A=b>2?0:-1,N=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];x.set(N,_*g*b),v.set(d,f*g*b);const y=[b,b,b,b,b,b];M.set(y,p*g*b)}const S=new bi;S.setAttribute("position",new nn(x,_)),S.setAttribute("uv",new nn(v,f)),S.setAttribute("faceIndex",new nn(M,p)),t.push(S),i>Ur&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nf(s,t,e){const n=new vs(s,t,e);return n.texture.mapping=Gc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ga(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Oy(s,t,e){const n=new Float32Array(Vs),i=new U(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function sf(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function rf(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function $u(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fy(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===iu||c===su,u=c===$r||c===Zr;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new ef(s)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new ef(s));const d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Uy(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ky(s,t,e,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",a),delete i[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],s.ARRAY_BUFFER)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let v=0,M=x.length;v<M;v+=3){const S=x[v+0],b=x[v+1],T=x[v+2];d.push(S,b,b,T,T,S)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const S=v+0,b=v+1,T=v+2;d.push(S,b,b,T,T,S)}}else return;const f=new(Cp(d)?Op:Ip)(d,1);f.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,f)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Vy(s,t,e,n){const i=n.isWebGL2;let r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function u(m,g){s.drawElements(r,g,o,m*c),e.update(g,r,1)}function h(m,g,_){if(_===0)return;let f,p;if(i)f=s,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,g,o,m*c,_),e.update(g,r,_)}function d(m,g,_){if(_===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<_;p++)this.render(m[p]/c,g[p]);else{f.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let p=0;for(let x=0;x<_;x++)p+=g[x];e.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function By(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function zy(s,t){return s[0]-t[0]}function Gy(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Hy(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new Ie,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let f=r.get(u);if(f===void 0||f.count!==_){let F=function(){k.dispose(),r.delete(u),u.removeEventListener("dispose",F)};var m=F;f!==void 0&&f.texture.dispose();const v=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let N=0;v===!0&&(N=1),M===!0&&(N=2),S===!0&&(N=3);let y=u.attributes.position.count*N,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const L=new Float32Array(y*E*4*_),k=new Dp(L,y,E,_);k.type=Bi,k.needsUpdate=!0;const P=N*4;for(let O=0;O<_;O++){const V=b[O],z=T[O],H=A[O],q=y*E*4*O;for(let j=0;j<V.count;j++){const Q=j*P;v===!0&&(a.fromBufferAttribute(V,j),L[q+Q+0]=a.x,L[q+Q+1]=a.y,L[q+Q+2]=a.z,L[q+Q+3]=0),M===!0&&(a.fromBufferAttribute(z,j),L[q+Q+4]=a.x,L[q+Q+5]=a.y,L[q+Q+6]=a.z,L[q+Q+7]=0),S===!0&&(a.fromBufferAttribute(H,j),L[q+Q+8]=a.x,L[q+Q+9]=a.y,L[q+Q+10]=a.z,L[q+Q+11]=H.itemSize===4?a.w:1)}}f={count:_,texture:k,size:new Lt(y,E)},r.set(u,f),u.addEventListener("dispose",F)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];const x=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[u.id]=_}for(let M=0;M<g;M++){const S=_[M];S[0]=M,S[1]=d[M]}_.sort(Gy);for(let M=0;M<8;M++)M<g&&_[M][1]?(o[M][0]=_[M][0],o[M][1]=_[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(zy);const f=u.morphAttributes.position,p=u.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const S=o[M],b=S[0],T=S[1];b!==Number.MAX_SAFE_INTEGER&&T?(f&&u.getAttribute("morphTarget"+M)!==f[b]&&u.setAttribute("morphTarget"+M,f[b]),p&&u.getAttribute("morphNormal"+M)!==p[b]&&u.setAttribute("morphNormal"+M,p[b]),i[M]=T,x+=T):(f&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),p&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const v=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(s,"morphTargetBaseInfluence",v),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Wy(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class zp extends Sn{constructor(t,e,n,i,r,a,o,c,l,u){if(u=u!==void 0?u:Xs,u!==Xs&&u!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xs&&(n=cs),n===void 0&&u===Jr&&(n=Ws),super(null,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:hn,this.minFilter=c!==void 0?c:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gp=new Sn,Hp=new zp(1,1);Hp.compareFunction=Ap;const Wp=new Dp,Xp=new R0,qp=new Vp,of=[],af=[],cf=new Float32Array(16),lf=new Float32Array(9),uf=new Float32Array(4);function fo(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=of[i];if(r===void 0&&(r=new Float32Array(i),of[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ue(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function qc(s,t){let e=af[t];e===void 0&&(e=new Int32Array(t),af[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Xy(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function qy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2fv(this.addr,t),Ue(e,t)}}function Yy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;s.uniform3fv(this.addr,t),Ue(e,t)}}function jy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4fv(this.addr,t),Ue(e,t)}}function $y(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Fe(e,n))return;uf.set(n),s.uniformMatrix2fv(this.addr,!1,uf),Ue(e,n)}}function Zy(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Fe(e,n))return;lf.set(n),s.uniformMatrix3fv(this.addr,!1,lf),Ue(e,n)}}function Ky(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Fe(e,n))return;cf.set(n),s.uniformMatrix4fv(this.addr,!1,cf),Ue(e,n)}}function Jy(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Qy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2iv(this.addr,t),Ue(e,t)}}function tS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3iv(this.addr,t),Ue(e,t)}}function eS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4iv(this.addr,t),Ue(e,t)}}function nS(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function iS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2uiv(this.addr,t),Ue(e,t)}}function sS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3uiv(this.addr,t),Ue(e,t)}}function rS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4uiv(this.addr,t),Ue(e,t)}}function oS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Hp:Gp;e.setTexture2D(t||r,i)}function aS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Xp,i)}function cS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||qp,i)}function lS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Wp,i)}function uS(s){switch(s){case 5126:return Xy;case 35664:return qy;case 35665:return Yy;case 35666:return jy;case 35674:return $y;case 35675:return Zy;case 35676:return Ky;case 5124:case 35670:return Jy;case 35667:case 35671:return Qy;case 35668:case 35672:return tS;case 35669:case 35673:return eS;case 5125:return nS;case 36294:return iS;case 36295:return sS;case 36296:return rS;case 35678:case 36198:case 36298:case 36306:case 35682:return oS;case 35679:case 36299:case 36307:return aS;case 35680:case 36300:case 36308:case 36293:return cS;case 36289:case 36303:case 36311:case 36292:return lS}}function hS(s,t){s.uniform1fv(this.addr,t)}function dS(s,t){const e=fo(t,this.size,2);s.uniform2fv(this.addr,e)}function fS(s,t){const e=fo(t,this.size,3);s.uniform3fv(this.addr,e)}function pS(s,t){const e=fo(t,this.size,4);s.uniform4fv(this.addr,e)}function mS(s,t){const e=fo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function _S(s,t){const e=fo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function gS(s,t){const e=fo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function vS(s,t){s.uniform1iv(this.addr,t)}function xS(s,t){s.uniform2iv(this.addr,t)}function yS(s,t){s.uniform3iv(this.addr,t)}function SS(s,t){s.uniform4iv(this.addr,t)}function MS(s,t){s.uniform1uiv(this.addr,t)}function TS(s,t){s.uniform2uiv(this.addr,t)}function bS(s,t){s.uniform3uiv(this.addr,t)}function ES(s,t){s.uniform4uiv(this.addr,t)}function wS(s,t,e){const n=this.cache,i=t.length,r=qc(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Gp,r[a])}function AS(s,t,e){const n=this.cache,i=t.length,r=qc(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Xp,r[a])}function CS(s,t,e){const n=this.cache,i=t.length,r=qc(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||qp,r[a])}function RS(s,t,e){const n=this.cache,i=t.length,r=qc(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Wp,r[a])}function PS(s){switch(s){case 5126:return hS;case 35664:return dS;case 35665:return fS;case 35666:return pS;case 35674:return mS;case 35675:return _S;case 35676:return gS;case 5124:case 35670:return vS;case 35667:case 35671:return xS;case 35668:case 35672:return yS;case 35669:case 35673:return SS;case 5125:return MS;case 36294:return TS;case 36295:return bS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return wS;case 35679:case 36299:case 36307:return AS;case 35680:case 36300:case 36308:case 36293:return CS;case 36289:case 36303:case 36311:case 36292:return RS}}class DS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=uS(e.type)}}class LS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=PS(e.type)}}class NS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const zl=/(\w+)(\])?(\[|\.)?/g;function hf(s,t){s.seq.push(t),s.map[t.id]=t}function IS(s,t,e){const n=s.name,i=n.length;for(zl.lastIndex=0;;){const r=zl.exec(n),a=zl.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){hf(e,l===void 0?new DS(o,s,t):new LS(o,s,t));break}else{let h=e.map[o];h===void 0&&(h=new NS(o),hf(e,h)),e=h}}}class Ja{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);IS(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function df(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const OS=37297;let FS=0;function US(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function kS(s){const t=ie.getPrimaries(ie.workingColorSpace),e=ie.getPrimaries(s);let n;switch(t===e?n="":t===lc&&e===cc?n="LinearDisplayP3ToLinearSRGB":t===cc&&e===lc&&(n="LinearSRGBToLinearDisplayP3"),s){case Xi:case Hc:return[n,"LinearTransferOETF"];case Ze:case Gu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ff(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+US(s.getShaderSource(t),a)}else return i}function VS(s,t){const e=kS(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function BS(s,t){let e;switch(t){case Vg:e="Linear";break;case Bg:e="Reinhard";break;case zg:e="OptimizedCineon";break;case Gg:e="ACESFilmic";break;case Wg:e="AgX";break;case Hg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function zS(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(kr).join(`
`)}function GS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function HS(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function WS(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function kr(s){return s!==""}function pf(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const XS=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(s){return s.replace(XS,YS)}const qS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function YS(s,t){let e=Gt[t];if(e===void 0){const n=qS.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lu(e)}const jS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(s){return s.replace(jS,$S)}function $S(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(t+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ZS(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===mp?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===pg?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(t="SHADOWMAP_TYPE_VSM"),t}function KS(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $r:case Zr:t="ENVMAP_TYPE_CUBE";break;case Gc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function JS(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zr:t="ENVMAP_MODE_REFRACTION";break}return t}function QS(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case gp:t="ENVMAP_BLENDING_MULTIPLY";break;case Ug:t="ENVMAP_BLENDING_MIX";break;case kg:t="ENVMAP_BLENDING_ADD";break}return t}function tM(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function eM(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=ZS(e),l=KS(e),u=JS(e),h=QS(e),d=tM(e),m=e.isWebGL2?"":zS(e),g=GS(e),_=HS(r),f=i.createProgram();let p,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(kr).join(`
`),p.length>0&&(p+=`
`),x=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(kr).join(`
`),x.length>0&&(x+=`
`)):(p=[gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),x=[m,gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ds?"#define TONE_MAPPING":"",e.toneMapping!==ds?Gt.tonemapping_pars_fragment:"",e.toneMapping!==ds?BS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,VS("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(kr).join(`
`)),a=lu(a),a=pf(a,e),a=mf(a,e),o=lu(o),o=pf(o,e),o=mf(o,e),a=_f(a),o=_f(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const M=v+p+a,S=v+x+o,b=df(i,i.VERTEX_SHADER,M),T=df(i,i.FRAGMENT_SHADER,S);i.attachShader(f,b),i.attachShader(f,T),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function A(L){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(f).trim(),P=i.getShaderInfoLog(b).trim(),F=i.getShaderInfoLog(T).trim();let O=!0,V=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,b,T);else{const z=ff(i,b,"vertex"),H=ff(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+z+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(P===""||F==="")&&(V=!1);V&&(L.diagnostics={runnable:O,programLog:k,vertexShader:{log:P,prefix:p},fragmentShader:{log:F,prefix:x}})}i.deleteShader(b),i.deleteShader(T),N=new Ja(i,f),y=WS(i,f)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(f,OS)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=FS++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=T,this}let nM=0;class iM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new sM(t),e.set(t,n)),n}}class sM{constructor(t){this.id=nM++,this.code=t,this.usedTimes=0}}function rM(s,t,e,n,i,r,a){const o=new qu,c=new iM,l=new Set,u=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,m=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,E,L,k,P){const F=k.fog,O=P.geometry,V=y.isMeshStandardMaterial?k.environment:null,z=(y.isMeshStandardMaterial?e:t).get(y.envMap||V),H=z&&z.mapping===Gc?z.image.height:null,q=_[y.type];y.precision!==null&&(g=i.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Q=j!==void 0?j.length:0;let xt=0;O.morphAttributes.position!==void 0&&(xt=1),O.morphAttributes.normal!==void 0&&(xt=2),O.morphAttributes.color!==void 0&&(xt=3);let X,Y,ct,_t;if(q){const $t=di[q];X=$t.vertexShader,Y=$t.fragmentShader}else X=y.vertexShader,Y=y.fragmentShader,c.update(y),ct=c.getVertexShaderID(y),_t=c.getFragmentShaderID(y);const et=s.getRenderTarget(),mt=P.isInstancedMesh===!0,Ot=P.isBatchedMesh===!0,wt=!!y.map,B=!!y.matcap,ue=!!z,Tt=!!y.aoMap,J=!!y.lightMap,tt=!!y.bumpMap,Dt=!!y.normalMap,gt=!!y.displacementMap,C=!!y.emissiveMap,w=!!y.metalnessMap,G=!!y.roughnessMap,it=y.anisotropy>0,nt=y.clearcoat>0,rt=y.iridescence>0,St=y.sheen>0,ht=y.transmission>0,vt=it&&!!y.anisotropyMap,Et=nt&&!!y.clearcoatMap,Nt=nt&&!!y.clearcoatNormalMap,st=nt&&!!y.clearcoatRoughnessMap,Yt=rt&&!!y.iridescenceMap,Ft=rt&&!!y.iridescenceThicknessMap,Pt=St&&!!y.sheenColorMap,Mt=St&&!!y.sheenRoughnessMap,at=!!y.specularMap,Bt=!!y.specularColorMap,I=!!y.specularIntensityMap,ut=ht&&!!y.transmissionMap,pt=ht&&!!y.thicknessMap,Ct=!!y.gradientMap,D=!!y.alphaMap,lt=y.alphaTest>0,ot=!!y.alphaHash,bt=!!y.extensions;let Rt=ds;y.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Rt=s.toneMapping);const Qt={isWebGL2:h,shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:Y,defines:y.defines,customVertexShaderID:ct,customFragmentShaderID:_t,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ot,instancing:mt,instancingColor:mt&&P.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Xi,alphaToCoverage:!!y.alphaToCoverage,map:wt,matcap:B,envMap:ue,envMapMode:ue&&z.mapping,envMapCubeUVHeight:H,aoMap:Tt,lightMap:J,bumpMap:tt,normalMap:Dt,displacementMap:m&&gt,emissiveMap:C,normalMapObjectSpace:Dt&&y.normalMapType===e0,normalMapTangentSpace:Dt&&y.normalMapType===zu,metalnessMap:w,roughnessMap:G,anisotropy:it,anisotropyMap:vt,clearcoat:nt,clearcoatMap:Et,clearcoatNormalMap:Nt,clearcoatRoughnessMap:st,iridescence:rt,iridescenceMap:Yt,iridescenceThicknessMap:Ft,sheen:St,sheenColorMap:Pt,sheenRoughnessMap:Mt,specularMap:at,specularColorMap:Bt,specularIntensityMap:I,transmission:ht,transmissionMap:ut,thicknessMap:pt,gradientMap:Ct,opaque:y.transparent===!1&&y.blending===Gr&&y.alphaToCoverage===!1,alphaMap:D,alphaTest:lt,alphaHash:ot,combine:y.combine,mapUv:wt&&f(y.map.channel),aoMapUv:Tt&&f(y.aoMap.channel),lightMapUv:J&&f(y.lightMap.channel),bumpMapUv:tt&&f(y.bumpMap.channel),normalMapUv:Dt&&f(y.normalMap.channel),displacementMapUv:gt&&f(y.displacementMap.channel),emissiveMapUv:C&&f(y.emissiveMap.channel),metalnessMapUv:w&&f(y.metalnessMap.channel),roughnessMapUv:G&&f(y.roughnessMap.channel),anisotropyMapUv:vt&&f(y.anisotropyMap.channel),clearcoatMapUv:Et&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&f(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&f(y.sheenRoughnessMap.channel),specularMapUv:at&&f(y.specularMap.channel),specularColorMapUv:Bt&&f(y.specularColorMap.channel),specularIntensityMapUv:I&&f(y.specularIntensityMap.channel),transmissionMapUv:ut&&f(y.transmissionMap.channel),thicknessMapUv:pt&&f(y.thicknessMap.channel),alphaMapUv:D&&f(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Dt||it),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!O.attributes.uv&&(wt||D),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:xt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Rt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:wt&&y.map.isVideoTexture===!0&&ie.getTransfer(y.map.colorSpace)===he,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fi,flipSided:y.side===yn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:bt&&y.extensions.derivatives===!0,extensionFragDepth:bt&&y.extensions.fragDepth===!0,extensionDrawBuffers:bt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:bt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:bt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:bt&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Qt.vertexUv1s=l.has(1),Qt.vertexUv2s=l.has(2),Qt.vertexUv3s=l.has(3),l.clear(),Qt}function x(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)E.push(L),E.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(v(E,y),M(E,y),E.push(s.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function v(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function M(y,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),y.push(o.mask)}function S(y){const E=_[y.type];let L;if(E){const k=di[E];L=Up.clone(k.uniforms)}else L=y.uniforms;return L}function b(y,E){let L;for(let k=0,P=u.length;k<P;k++){const F=u[k];if(F.cacheKey===E){L=F,++L.usedTimes;break}}return L===void 0&&(L=new eM(s,E,y,r),u.push(L)),L}function T(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),y.destroy()}}function A(y){c.remove(y)}function N(){c.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:S,acquireProgram:b,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:N}}function oM(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function aM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function vf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function xf(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(h,d,m,g,_,f){let p=s[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:f},s[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=f),t++,p}function o(h,d,m,g,_,f){const p=a(h,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):e.push(p)}function c(h,d,m,g,_,f){const p=a(h,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||aM),n.length>1&&n.sort(d||vf),i.length>1&&i.sort(d||vf)}function u(){for(let h=t,d=s.length;h<d;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function cM(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new xf,s.set(n,[a])):i>=r.length?(a=new xf,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function lM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Kt};break;case"SpotLight":e={position:new U,direction:new U,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function uM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let hM=0;function dM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function fM(s,t){const e=new lM,n=uM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,a=new Pe,o=new Pe;function c(u,h){let d=0,m=0,g=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let _=0,f=0,p=0,x=0,v=0,M=0,S=0,b=0,T=0,A=0,N=0;u.sort(dM);const y=h===!0?Math.PI:1;for(let L=0,k=u.length;L<k;L++){const P=u[L],F=P.color,O=P.intensity,V=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=F.r*O*y,m+=F.g*O*y,g+=F.b*O*y;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],O);N++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){const q=P.shadow,j=n.get(P);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,i.directionalShadow[_]=j,i.directionalShadowMap[_]=z,i.directionalShadowMatrix[_]=P.shadow.matrix,M++}i.directional[_]=H,_++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(F).multiplyScalar(O*y),H.distance=V,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[p]=H;const q=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,q.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[p]=q.matrix,P.castShadow){const j=n.get(P);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,i.spotShadow[p]=j,i.spotShadowMap[p]=z,b++}p++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(F).multiplyScalar(O),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=H,x++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*y),H.distance=P.distance,H.decay=P.decay,P.castShadow){const q=P.shadow,j=n.get(P);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,i.pointShadow[f]=j,i.pointShadowMap[f]=z,i.pointShadowMatrix[f]=P.shadow.matrix,S++}i.point[f]=H,f++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(O*y),H.groundColor.copy(P.groundColor).multiplyScalar(O*y),i.hemi[v]=H,v++}}x>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const E=i.hash;(E.directionalLength!==_||E.pointLength!==f||E.spotLength!==p||E.rectAreaLength!==x||E.hemiLength!==v||E.numDirectionalShadows!==M||E.numPointShadows!==S||E.numSpotShadows!==b||E.numSpotMaps!==T||E.numLightProbes!==N)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=x,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=b+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=N,E.directionalLength=_,E.pointLength=f,E.spotLength=p,E.rectAreaLength=x,E.hemiLength=v,E.numDirectionalShadows=M,E.numPointShadows=S,E.numSpotShadows=b,E.numSpotMaps=T,E.numLightProbes=N,i.version=hM++)}function l(u,h){let d=0,m=0,g=0,_=0,f=0;const p=h.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const M=u[x];if(M.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(M.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),m++}else if(M.isHemisphereLight){const S=i.hemi[f];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),f++}}}return{setup:c,setupView:l,state:i}}function yf(s,t){const e=new fM(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function pM(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new yf(s,t),e.set(r,[c])):a>=o.length?(c=new yf(s,t),o.push(c)):c=o[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class mM extends ho{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _M extends ho{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const gM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xM(s,t,e){let n=new Yu;const i=new Lt,r=new Lt,a=new Ie,o=new mM({depthPacking:t0}),c=new _M,l={},u=e.maxTextureSize,h={[gs]:yn,[yn]:gs,[fi]:fi},d=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:gM,fragmentShader:vM}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new bi;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nn(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mp;let p=this.type;this.render=function(b,T,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const N=s.getRenderTarget(),y=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Hi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const k=p!==Oi&&this.type===Oi,P=p===Oi&&this.type!==Oi;for(let F=0,O=b.length;F<O;F++){const V=b[F],z=V.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const H=z.getFrameExtents();if(i.multiply(H),r.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/H.x),i.x=r.x*H.x,z.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/H.y),i.y=r.y*H.y,z.mapSize.y=r.y)),z.map===null||k===!0||P===!0){const j=this.type!==Oi?{minFilter:hn,magFilter:hn}:{};z.map!==null&&z.map.dispose(),z.map=new vs(i.x,i.y,j),z.map.texture.name=V.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const q=z.getViewportCount();for(let j=0;j<q;j++){const Q=z.getViewport(j);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),L.viewport(a),z.updateMatrices(V,j),n=z.getFrustum(),M(T,A,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===Oi&&x(z,A),z.needsUpdate=!1}p=this.type,f.needsUpdate=!1,s.setRenderTarget(N,y,E)};function x(b,T){const A=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new vs(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(T,null,A,d,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(T,null,A,m,_,null)}function v(b,T,A,N){let y=null;const E=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)y=E;else if(y=A.isPointLight===!0?c:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const L=y.uuid,k=T.uuid;let P=l[L];P===void 0&&(P={},l[L]=P);let F=P[k];F===void 0&&(F=y.clone(),P[k]=F,T.addEventListener("dispose",S)),y=F}if(y.visible=T.visible,y.wireframe=T.wireframe,N===Oi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const L=s.properties.get(y);L.light=A}return y}function M(b,T,A,N,y){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Oi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const k=t.update(b),P=b.material;if(Array.isArray(P)){const F=k.groups;for(let O=0,V=F.length;O<V;O++){const z=F[O],H=P[z.materialIndex];if(H&&H.visible){const q=v(b,H,N,y);b.onBeforeShadow(s,b,T,A,k,q,z),s.renderBufferDirect(A,null,k,q,b,z),b.onAfterShadow(s,b,T,A,k,q,z)}}}else if(P.visible){const F=v(b,P,N,y);b.onBeforeShadow(s,b,T,A,k,F,null),s.renderBufferDirect(A,null,k,F,b,null),b.onAfterShadow(s,b,T,A,k,F,null)}}const L=b.children;for(let k=0,P=L.length;k<P;k++)M(L[k],T,A,N,y)}function S(b){b.target.removeEventListener("dispose",S);for(const A in l){const N=l[A],y=b.target.uuid;y in N&&(N[y].dispose(),delete N[y])}}}function yM(s,t,e){const n=e.isWebGL2;function i(){let D=!1;const lt=new Ie;let ot=null;const bt=new Ie(0,0,0,0);return{setMask:function(Rt){ot!==Rt&&!D&&(s.colorMask(Rt,Rt,Rt,Rt),ot=Rt)},setLocked:function(Rt){D=Rt},setClear:function(Rt,Qt,$t,re,je){je===!0&&(Rt*=re,Qt*=re,$t*=re),lt.set(Rt,Qt,$t,re),bt.equals(lt)===!1&&(s.clearColor(Rt,Qt,$t,re),bt.copy(lt))},reset:function(){D=!1,ot=null,bt.set(-1,0,0,0)}}}function r(){let D=!1,lt=null,ot=null,bt=null;return{setTest:function(Rt){Rt?mt(s.DEPTH_TEST):Ot(s.DEPTH_TEST)},setMask:function(Rt){lt!==Rt&&!D&&(s.depthMask(Rt),lt=Rt)},setFunc:function(Rt){if(ot!==Rt){switch(Rt){case Pg:s.depthFunc(s.NEVER);break;case Dg:s.depthFunc(s.ALWAYS);break;case Lg:s.depthFunc(s.LESS);break;case oc:s.depthFunc(s.LEQUAL);break;case Ng:s.depthFunc(s.EQUAL);break;case Ig:s.depthFunc(s.GEQUAL);break;case Og:s.depthFunc(s.GREATER);break;case Fg:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ot=Rt}},setLocked:function(Rt){D=Rt},setClear:function(Rt){bt!==Rt&&(s.clearDepth(Rt),bt=Rt)},reset:function(){D=!1,lt=null,ot=null,bt=null}}}function a(){let D=!1,lt=null,ot=null,bt=null,Rt=null,Qt=null,$t=null,re=null,je=null;return{setTest:function(te){D||(te?mt(s.STENCIL_TEST):Ot(s.STENCIL_TEST))},setMask:function(te){lt!==te&&!D&&(s.stencilMask(te),lt=te)},setFunc:function(te,be,cn){(ot!==te||bt!==be||Rt!==cn)&&(s.stencilFunc(te,be,cn),ot=te,bt=be,Rt=cn)},setOp:function(te,be,cn){(Qt!==te||$t!==be||re!==cn)&&(s.stencilOp(te,be,cn),Qt=te,$t=be,re=cn)},setLocked:function(te){D=te},setClear:function(te){je!==te&&(s.clearStencil(te),je=te)},reset:function(){D=!1,lt=null,ot=null,bt=null,Rt=null,Qt=null,$t=null,re=null,je=null}}}const o=new i,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,_=[],f=null,p=!1,x=null,v=null,M=null,S=null,b=null,T=null,A=null,N=new Kt(0,0,0),y=0,E=!1,L=null,k=null,P=null,F=null,O=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=H>=1):q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=H>=2);let j=null,Q={};const xt=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),Y=new Ie().fromArray(xt),ct=new Ie().fromArray(X);function _t(D,lt,ot,bt){const Rt=new Uint8Array(4),Qt=s.createTexture();s.bindTexture(D,Qt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $t=0;$t<ot;$t++)n&&(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)?s.texImage3D(lt,0,s.RGBA,1,1,bt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(lt+$t,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return Qt}const et={};et[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(et[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),mt(s.DEPTH_TEST),c.setFunc(oc),gt(!1),C(Jh),mt(s.CULL_FACE),tt(Hi);function mt(D){d[D]!==!0&&(s.enable(D),d[D]=!0)}function Ot(D){d[D]!==!1&&(s.disable(D),d[D]=!1)}function wt(D,lt){return m[D]!==lt?(s.bindFramebuffer(D,lt),m[D]=lt,n&&(D===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=lt),D===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=lt)),!0):!1}function B(D,lt){let ot=_,bt=!1;if(D)if(ot=g.get(lt),ot===void 0&&(ot=[],g.set(lt,ot)),D.isWebGLMultipleRenderTargets){const Rt=D.texture;if(ot.length!==Rt.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let Qt=0,$t=Rt.length;Qt<$t;Qt++)ot[Qt]=s.COLOR_ATTACHMENT0+Qt;ot.length=Rt.length,bt=!0}}else ot[0]!==s.COLOR_ATTACHMENT0&&(ot[0]=s.COLOR_ATTACHMENT0,bt=!0);else ot[0]!==s.BACK&&(ot[0]=s.BACK,bt=!0);bt&&(e.isWebGL2?s.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function ue(D){return f!==D?(s.useProgram(D),f=D,!0):!1}const Tt={[as]:s.FUNC_ADD,[mg]:s.FUNC_SUBTRACT,[_g]:s.FUNC_REVERSE_SUBTRACT};if(n)Tt[nd]=s.MIN,Tt[id]=s.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(Tt[nd]=D.MIN_EXT,Tt[id]=D.MAX_EXT)}const J={[gg]:s.ZERO,[vg]:s.ONE,[xg]:s.SRC_COLOR,[sc]:s.SRC_ALPHA,[Eg]:s.SRC_ALPHA_SATURATE,[Tg]:s.DST_COLOR,[Sg]:s.DST_ALPHA,[yg]:s.ONE_MINUS_SRC_COLOR,[rc]:s.ONE_MINUS_SRC_ALPHA,[bg]:s.ONE_MINUS_DST_COLOR,[Mg]:s.ONE_MINUS_DST_ALPHA,[wg]:s.CONSTANT_COLOR,[Ag]:s.ONE_MINUS_CONSTANT_COLOR,[Cg]:s.CONSTANT_ALPHA,[Rg]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(D,lt,ot,bt,Rt,Qt,$t,re,je,te){if(D===Hi){p===!0&&(Ot(s.BLEND),p=!1);return}if(p===!1&&(mt(s.BLEND),p=!0),D!==_p){if(D!==x||te!==E){if((v!==as||b!==as)&&(s.blendEquation(s.FUNC_ADD),v=as,b=as),te)switch(D){case Gr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qh:s.blendFunc(s.ONE,s.ONE);break;case td:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ed:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Gr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case td:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ed:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,S=null,T=null,A=null,N.set(0,0,0),y=0,x=D,E=te}return}Rt=Rt||lt,Qt=Qt||ot,$t=$t||bt,(lt!==v||Rt!==b)&&(s.blendEquationSeparate(Tt[lt],Tt[Rt]),v=lt,b=Rt),(ot!==M||bt!==S||Qt!==T||$t!==A)&&(s.blendFuncSeparate(J[ot],J[bt],J[Qt],J[$t]),M=ot,S=bt,T=Qt,A=$t),(re.equals(N)===!1||je!==y)&&(s.blendColor(re.r,re.g,re.b,je),N.copy(re),y=je),x=D,E=!1}function Dt(D,lt){D.side===fi?Ot(s.CULL_FACE):mt(s.CULL_FACE);let ot=D.side===yn;lt&&(ot=!ot),gt(ot),D.blending===Gr&&D.transparent===!1?tt(Hi):tt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);const bt=D.stencilWrite;l.setTest(bt),bt&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),G(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?mt(s.SAMPLE_ALPHA_TO_COVERAGE):Ot(s.SAMPLE_ALPHA_TO_COVERAGE)}function gt(D){L!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),L=D)}function C(D){D!==dg?(mt(s.CULL_FACE),D!==k&&(D===Jh?s.cullFace(s.BACK):D===fg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ot(s.CULL_FACE),k=D}function w(D){D!==P&&(z&&s.lineWidth(D),P=D)}function G(D,lt,ot){D?(mt(s.POLYGON_OFFSET_FILL),(F!==lt||O!==ot)&&(s.polygonOffset(lt,ot),F=lt,O=ot)):Ot(s.POLYGON_OFFSET_FILL)}function it(D){D?mt(s.SCISSOR_TEST):Ot(s.SCISSOR_TEST)}function nt(D){D===void 0&&(D=s.TEXTURE0+V-1),j!==D&&(s.activeTexture(D),j=D)}function rt(D,lt,ot){ot===void 0&&(j===null?ot=s.TEXTURE0+V-1:ot=j);let bt=Q[ot];bt===void 0&&(bt={type:void 0,texture:void 0},Q[ot]=bt),(bt.type!==D||bt.texture!==lt)&&(j!==ot&&(s.activeTexture(ot),j=ot),s.bindTexture(D,lt||et[D]),bt.type=D,bt.texture=lt)}function St(){const D=Q[j];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ht(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Bt(D){Y.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Y.copy(D))}function I(D){ct.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),ct.copy(D))}function ut(D,lt){let ot=h.get(lt);ot===void 0&&(ot=new WeakMap,h.set(lt,ot));let bt=ot.get(D);bt===void 0&&(bt=s.getUniformBlockIndex(lt,D.name),ot.set(D,bt))}function pt(D,lt){const bt=h.get(lt).get(D);u.get(lt)!==bt&&(s.uniformBlockBinding(lt,bt,D.__bindingPointIndex),u.set(lt,bt))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},j=null,Q={},m={},g=new WeakMap,_=[],f=null,p=!1,x=null,v=null,M=null,S=null,b=null,T=null,A=null,N=new Kt(0,0,0),y=0,E=!1,L=null,k=null,P=null,F=null,O=null,Y.set(0,0,s.canvas.width,s.canvas.height),ct.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:mt,disable:Ot,bindFramebuffer:wt,drawBuffers:B,useProgram:ue,setBlending:tt,setMaterial:Dt,setFlipSided:gt,setCullFace:C,setLineWidth:w,setPolygonOffset:G,setScissorTest:it,activeTexture:nt,bindTexture:rt,unbindTexture:St,compressedTexImage2D:ht,compressedTexImage3D:vt,texImage2D:Mt,texImage3D:at,updateUBOMapping:ut,uniformBlockBinding:pt,texStorage2D:Ft,texStorage3D:Pt,texSubImage2D:Et,texSubImage3D:Nt,compressedTexSubImage2D:st,compressedTexSubImage3D:Yt,scissor:Bt,viewport:I,reset:Ct}}function SM(s,t,e,n,i,r,a){const o=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return m?new OffscreenCanvas(C,w):dc("canvas")}function _(C,w,G,it){let nt=1;if((C.width>it||C.height>it)&&(nt=it/Math.max(C.width,C.height)),nt<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const rt=w?hc:Math.floor,St=rt(nt*C.width),ht=rt(nt*C.height);h===void 0&&(h=g(St,ht));const vt=G?g(St,ht):h;return vt.width=St,vt.height=ht,vt.getContext("2d").drawImage(C,0,0,St,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+St+"x"+ht+")."),vt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function f(C){return cu(C.width)&&cu(C.height)}function p(C){return o?!1:C.wrapS!==ni||C.wrapT!==ni||C.minFilter!==hn&&C.minFilter!==vn}function x(C,w){return C.generateMipmaps&&w&&C.minFilter!==hn&&C.minFilter!==vn}function v(C){s.generateMipmap(C)}function M(C,w,G,it,nt=!1){if(o===!1)return w;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt=w;if(w===s.RED&&(G===s.FLOAT&&(rt=s.R32F),G===s.HALF_FLOAT&&(rt=s.R16F),G===s.UNSIGNED_BYTE&&(rt=s.R8)),w===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(rt=s.R8UI),G===s.UNSIGNED_SHORT&&(rt=s.R16UI),G===s.UNSIGNED_INT&&(rt=s.R32UI),G===s.BYTE&&(rt=s.R8I),G===s.SHORT&&(rt=s.R16I),G===s.INT&&(rt=s.R32I)),w===s.RG&&(G===s.FLOAT&&(rt=s.RG32F),G===s.HALF_FLOAT&&(rt=s.RG16F),G===s.UNSIGNED_BYTE&&(rt=s.RG8)),w===s.RGBA){const St=nt?ac:ie.getTransfer(it);G===s.FLOAT&&(rt=s.RGBA32F),G===s.HALF_FLOAT&&(rt=s.RGBA16F),G===s.UNSIGNED_BYTE&&(rt=St===he?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(rt=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(rt=s.RGB5_A1)}return(rt===s.R16F||rt===s.R32F||rt===s.RG16F||rt===s.RG32F||rt===s.RGBA16F||rt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function S(C,w,G){return x(C,G)===!0||C.isFramebufferTexture&&C.minFilter!==hn&&C.minFilter!==vn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function b(C){return C===hn||C===sd||C===So?s.NEAREST:s.LINEAR}function T(C){const w=C.target;w.removeEventListener("dispose",T),N(w),w.isVideoTexture&&u.delete(w)}function A(C){const w=C.target;w.removeEventListener("dispose",A),E(w)}function N(C){const w=n.get(C);if(w.__webglInit===void 0)return;const G=C.source,it=d.get(G);if(it){const nt=it[w.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&y(C),Object.keys(it).length===0&&d.delete(G)}n.remove(C)}function y(C){const w=n.get(C);s.deleteTexture(w.__webglTexture);const G=C.source,it=d.get(G);delete it[w.__cacheKey],a.memory.textures--}function E(C){const w=C.texture,G=n.get(C),it=n.get(w);if(it.__webglTexture!==void 0&&(s.deleteTexture(it.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(G.__webglFramebuffer[nt]))for(let rt=0;rt<G.__webglFramebuffer[nt].length;rt++)s.deleteFramebuffer(G.__webglFramebuffer[nt][rt]);else s.deleteFramebuffer(G.__webglFramebuffer[nt]);G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[nt])}else{if(Array.isArray(G.__webglFramebuffer))for(let nt=0;nt<G.__webglFramebuffer.length;nt++)s.deleteFramebuffer(G.__webglFramebuffer[nt]);else s.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let nt=0;nt<G.__webglColorRenderbuffer.length;nt++)G.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[nt]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let nt=0,rt=w.length;nt<rt;nt++){const St=n.get(w[nt]);St.__webglTexture&&(s.deleteTexture(St.__webglTexture),a.memory.textures--),n.remove(w[nt])}n.remove(w),n.remove(C)}let L=0;function k(){L=0}function P(){const C=L;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function F(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function O(C,w){const G=n.get(C);if(C.isVideoTexture&&Dt(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const it=C.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,C,w);return}}e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+w)}function V(C,w){const G=n.get(C);if(C.version>0&&G.__version!==C.version){Y(G,C,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+w)}function z(C,w){const G=n.get(C);if(C.version>0&&G.__version!==C.version){Y(G,C,w);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+w)}function H(C,w){const G=n.get(C);if(C.version>0&&G.__version!==C.version){ct(G,C,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+w)}const q={[ru]:s.REPEAT,[ni]:s.CLAMP_TO_EDGE,[ou]:s.MIRRORED_REPEAT},j={[hn]:s.NEAREST,[sd]:s.NEAREST_MIPMAP_NEAREST,[So]:s.NEAREST_MIPMAP_LINEAR,[vn]:s.LINEAR,[pl]:s.LINEAR_MIPMAP_NEAREST,[zs]:s.LINEAR_MIPMAP_LINEAR},Q={[n0]:s.NEVER,[c0]:s.ALWAYS,[i0]:s.LESS,[Ap]:s.LEQUAL,[s0]:s.EQUAL,[a0]:s.GEQUAL,[r0]:s.GREATER,[o0]:s.NOTEQUAL};function xt(C,w,G){if(w.type===Bi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===vn||w.magFilter===pl||w.magFilter===So||w.magFilter===zs||w.minFilter===vn||w.minFilter===pl||w.minFilter===So||w.minFilter===zs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),G?(s.texParameteri(C,s.TEXTURE_WRAP_S,q[w.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,q[w.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,q[w.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,j[w.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,j[w.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==ni||w.wrapT!==ni)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,b(w.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,b(w.minFilter)),w.minFilter!==hn&&w.minFilter!==vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===hn||w.minFilter!==So&&w.minFilter!==zs||w.type===Bi&&t.has("OES_texture_float_linear")===!1||o===!1&&w.type===Kr&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(C,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function X(C,w){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",T));const it=w.source;let nt=d.get(it);nt===void 0&&(nt={},d.set(it,nt));const rt=F(w);if(rt!==C.__cacheKey){nt[rt]===void 0&&(nt[rt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),nt[rt].usedTimes++;const St=nt[C.__cacheKey];St!==void 0&&(nt[C.__cacheKey].usedTimes--,St.usedTimes===0&&y(w)),C.__cacheKey=rt,C.__webglTexture=nt[rt].texture}return G}function Y(C,w,G){let it=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(it=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(it=s.TEXTURE_3D);const nt=X(C,w),rt=w.source;e.bindTexture(it,C.__webglTexture,s.TEXTURE0+G);const St=n.get(rt);if(rt.version!==St.__version||nt===!0){e.activeTexture(s.TEXTURE0+G);const ht=ie.getPrimaries(ie.workingColorSpace),vt=w.colorSpace===Wn?null:ie.getPrimaries(w.colorSpace),Et=w.colorSpace===Wn||ht===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Nt=p(w)&&f(w.image)===!1;let st=_(w.image,Nt,!1,i.maxTextureSize);st=gt(w,st);const Yt=f(st)||o,Ft=r.convert(w.format,w.colorSpace);let Pt=r.convert(w.type),Mt=M(w.internalFormat,Ft,Pt,w.colorSpace,w.isVideoTexture);xt(it,w,Yt);let at;const Bt=w.mipmaps,I=o&&w.isVideoTexture!==!0&&Mt!==Ep,ut=St.__version===void 0||nt===!0,pt=rt.dataReady,Ct=S(w,st,Yt);if(w.isDepthTexture)Mt=s.DEPTH_COMPONENT,o?w.type===Bi?Mt=s.DEPTH_COMPONENT32F:w.type===cs?Mt=s.DEPTH_COMPONENT24:w.type===Ws?Mt=s.DEPTH24_STENCIL8:Mt=s.DEPTH_COMPONENT16:w.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Xs&&Mt===s.DEPTH_COMPONENT&&w.type!==Bu&&w.type!==cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=cs,Pt=r.convert(w.type)),w.format===Jr&&Mt===s.DEPTH_COMPONENT&&(Mt=s.DEPTH_STENCIL,w.type!==Ws&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ws,Pt=r.convert(w.type))),ut&&(I?e.texStorage2D(s.TEXTURE_2D,1,Mt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Mt,st.width,st.height,0,Ft,Pt,null));else if(w.isDataTexture)if(Bt.length>0&&Yt){I&&ut&&e.texStorage2D(s.TEXTURE_2D,Ct,Mt,Bt[0].width,Bt[0].height);for(let D=0,lt=Bt.length;D<lt;D++)at=Bt[D],I?pt&&e.texSubImage2D(s.TEXTURE_2D,D,0,0,at.width,at.height,Ft,Pt,at.data):e.texImage2D(s.TEXTURE_2D,D,Mt,at.width,at.height,0,Ft,Pt,at.data);w.generateMipmaps=!1}else I?(ut&&e.texStorage2D(s.TEXTURE_2D,Ct,Mt,st.width,st.height),pt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,Ft,Pt,st.data)):e.texImage2D(s.TEXTURE_2D,0,Mt,st.width,st.height,0,Ft,Pt,st.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){I&&ut&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Mt,Bt[0].width,Bt[0].height,st.depth);for(let D=0,lt=Bt.length;D<lt;D++)at=Bt[D],w.format!==ii?Ft!==null?I?pt&&e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,D,0,0,0,at.width,at.height,st.depth,Ft,at.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,D,Mt,at.width,at.height,st.depth,0,at.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?pt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,D,0,0,0,at.width,at.height,st.depth,Ft,Pt,at.data):e.texImage3D(s.TEXTURE_2D_ARRAY,D,Mt,at.width,at.height,st.depth,0,Ft,Pt,at.data)}else{I&&ut&&e.texStorage2D(s.TEXTURE_2D,Ct,Mt,Bt[0].width,Bt[0].height);for(let D=0,lt=Bt.length;D<lt;D++)at=Bt[D],w.format!==ii?Ft!==null?I?pt&&e.compressedTexSubImage2D(s.TEXTURE_2D,D,0,0,at.width,at.height,Ft,at.data):e.compressedTexImage2D(s.TEXTURE_2D,D,Mt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?pt&&e.texSubImage2D(s.TEXTURE_2D,D,0,0,at.width,at.height,Ft,Pt,at.data):e.texImage2D(s.TEXTURE_2D,D,Mt,at.width,at.height,0,Ft,Pt,at.data)}else if(w.isDataArrayTexture)I?(ut&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Mt,st.width,st.height,st.depth),pt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Ft,Pt,st.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Mt,st.width,st.height,st.depth,0,Ft,Pt,st.data);else if(w.isData3DTexture)I?(ut&&e.texStorage3D(s.TEXTURE_3D,Ct,Mt,st.width,st.height,st.depth),pt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Ft,Pt,st.data)):e.texImage3D(s.TEXTURE_3D,0,Mt,st.width,st.height,st.depth,0,Ft,Pt,st.data);else if(w.isFramebufferTexture){if(ut)if(I)e.texStorage2D(s.TEXTURE_2D,Ct,Mt,st.width,st.height);else{let D=st.width,lt=st.height;for(let ot=0;ot<Ct;ot++)e.texImage2D(s.TEXTURE_2D,ot,Mt,D,lt,0,Ft,Pt,null),D>>=1,lt>>=1}}else if(Bt.length>0&&Yt){I&&ut&&e.texStorage2D(s.TEXTURE_2D,Ct,Mt,Bt[0].width,Bt[0].height);for(let D=0,lt=Bt.length;D<lt;D++)at=Bt[D],I?pt&&e.texSubImage2D(s.TEXTURE_2D,D,0,0,Ft,Pt,at):e.texImage2D(s.TEXTURE_2D,D,Mt,Ft,Pt,at);w.generateMipmaps=!1}else I?(ut&&e.texStorage2D(s.TEXTURE_2D,Ct,Mt,st.width,st.height),pt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ft,Pt,st)):e.texImage2D(s.TEXTURE_2D,0,Mt,Ft,Pt,st);x(w,Yt)&&v(it),St.__version=rt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ct(C,w,G){if(w.image.length!==6)return;const it=X(C,w),nt=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+G);const rt=n.get(nt);if(nt.version!==rt.__version||it===!0){e.activeTexture(s.TEXTURE0+G);const St=ie.getPrimaries(ie.workingColorSpace),ht=w.colorSpace===Wn?null:ie.getPrimaries(w.colorSpace),vt=w.colorSpace===Wn||St===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Et=w.isCompressedTexture||w.image[0].isCompressedTexture,Nt=w.image[0]&&w.image[0].isDataTexture,st=[];for(let D=0;D<6;D++)!Et&&!Nt?st[D]=_(w.image[D],!1,!0,i.maxCubemapSize):st[D]=Nt?w.image[D].image:w.image[D],st[D]=gt(w,st[D]);const Yt=st[0],Ft=f(Yt)||o,Pt=r.convert(w.format,w.colorSpace),Mt=r.convert(w.type),at=M(w.internalFormat,Pt,Mt,w.colorSpace),Bt=o&&w.isVideoTexture!==!0,I=rt.__version===void 0||it===!0,ut=nt.dataReady;let pt=S(w,Yt,Ft);xt(s.TEXTURE_CUBE_MAP,w,Ft);let Ct;if(Et){Bt&&I&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,at,Yt.width,Yt.height);for(let D=0;D<6;D++){Ct=st[D].mipmaps;for(let lt=0;lt<Ct.length;lt++){const ot=Ct[lt];w.format!==ii?Pt!==null?Bt?ut&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,lt,0,0,ot.width,ot.height,Pt,ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,lt,at,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,lt,0,0,ot.width,ot.height,Pt,Mt,ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,lt,at,ot.width,ot.height,0,Pt,Mt,ot.data)}}}else{Ct=w.mipmaps,Bt&&I&&(Ct.length>0&&pt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,at,st[0].width,st[0].height));for(let D=0;D<6;D++)if(Nt){Bt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,st[D].width,st[D].height,Pt,Mt,st[D].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,at,st[D].width,st[D].height,0,Pt,Mt,st[D].data);for(let lt=0;lt<Ct.length;lt++){const bt=Ct[lt].image[D].image;Bt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,lt+1,0,0,bt.width,bt.height,Pt,Mt,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,lt+1,at,bt.width,bt.height,0,Pt,Mt,bt.data)}}else{Bt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Pt,Mt,st[D]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,at,Pt,Mt,st[D]);for(let lt=0;lt<Ct.length;lt++){const ot=Ct[lt];Bt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,lt+1,0,0,Pt,Mt,ot.image[D]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,lt+1,at,Pt,Mt,ot.image[D])}}}x(w,Ft)&&v(s.TEXTURE_CUBE_MAP),rt.__version=nt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function _t(C,w,G,it,nt,rt){const St=r.convert(G.format,G.colorSpace),ht=r.convert(G.type),vt=M(G.internalFormat,St,ht,G.colorSpace);if(!n.get(w).__hasExternalTextures){const Nt=Math.max(1,w.width>>rt),st=Math.max(1,w.height>>rt);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,rt,vt,Nt,st,w.depth,0,St,ht,null):e.texImage2D(nt,rt,vt,Nt,st,0,St,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),tt(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,nt,n.get(G).__webglTexture,0,J(w)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,it,nt,n.get(G).__webglTexture,rt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function et(C,w,G){if(s.bindRenderbuffer(s.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let it=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(G||tt(w)){const nt=w.depthTexture;nt&&nt.isDepthTexture&&(nt.type===Bi?it=s.DEPTH_COMPONENT32F:nt.type===cs&&(it=s.DEPTH_COMPONENT24));const rt=J(w);tt(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,it,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,it,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,it,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){const it=J(w);G&&tt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,it,s.DEPTH24_STENCIL8,w.width,w.height):tt(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const it=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let nt=0;nt<it.length;nt++){const rt=it[nt],St=r.convert(rt.format,rt.colorSpace),ht=r.convert(rt.type),vt=M(rt.internalFormat,St,ht,rt.colorSpace),Et=J(w);G&&tt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,vt,w.width,w.height):tt(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Et,vt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,vt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function mt(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);const it=n.get(w.depthTexture).__webglTexture,nt=J(w);if(w.depthTexture.format===Xs)tt(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0);else if(w.depthTexture.format===Jr)tt(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Ot(C){const w=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");mt(w.__webglFramebuffer,C)}else if(G){w.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[it]),w.__webglDepthbuffer[it]=s.createRenderbuffer(),et(w.__webglDepthbuffer[it],C,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),et(w.__webglDepthbuffer,C,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(C,w,G){const it=n.get(C);w!==void 0&&_t(it.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Ot(C)}function B(C){const w=C.texture,G=n.get(C),it=n.get(w);C.addEventListener("dispose",A),C.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=w.version,a.memory.textures++);const nt=C.isWebGLCubeRenderTarget===!0,rt=C.isWebGLMultipleRenderTargets===!0,St=f(C)||o;if(nt){G.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(o&&w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[ht]=[];for(let vt=0;vt<w.mipmaps.length;vt++)G.__webglFramebuffer[ht][vt]=s.createFramebuffer()}else G.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let ht=0;ht<w.mipmaps.length;ht++)G.__webglFramebuffer[ht]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(rt)if(i.drawBuffers){const ht=C.texture;for(let vt=0,Et=ht.length;vt<Et;vt++){const Nt=n.get(ht[vt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&tt(C)===!1){const ht=rt?w:[w];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let vt=0;vt<ht.length;vt++){const Et=ht[vt];G.__webglColorRenderbuffer[vt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[vt]);const Nt=r.convert(Et.format,Et.colorSpace),st=r.convert(Et.type),Yt=M(Et.internalFormat,Nt,st,Et.colorSpace,C.isXRRenderTarget===!0),Ft=J(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,Yt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,G.__webglColorRenderbuffer[vt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),et(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(nt){e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),xt(s.TEXTURE_CUBE_MAP,w,St);for(let ht=0;ht<6;ht++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let vt=0;vt<w.mipmaps.length;vt++)_t(G.__webglFramebuffer[ht][vt],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt);else _t(G.__webglFramebuffer[ht],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);x(w,St)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){const ht=C.texture;for(let vt=0,Et=ht.length;vt<Et;vt++){const Nt=ht[vt],st=n.get(Nt);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),xt(s.TEXTURE_2D,Nt,St),_t(G.__webglFramebuffer,C,Nt,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,0),x(Nt,St)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ht=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,it.__webglTexture),xt(ht,w,St),o&&w.mipmaps&&w.mipmaps.length>0)for(let vt=0;vt<w.mipmaps.length;vt++)_t(G.__webglFramebuffer[vt],C,w,s.COLOR_ATTACHMENT0,ht,vt);else _t(G.__webglFramebuffer,C,w,s.COLOR_ATTACHMENT0,ht,0);x(w,St)&&v(ht),e.unbindTexture()}C.depthBuffer&&Ot(C)}function ue(C){const w=f(C)||o,G=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let it=0,nt=G.length;it<nt;it++){const rt=G[it];if(x(rt,w)){const St=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ht=n.get(rt).__webglTexture;e.bindTexture(St,ht),v(St),e.unbindTexture()}}}function Tt(C){if(o&&C.samples>0&&tt(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],G=C.width,it=C.height;let nt=s.COLOR_BUFFER_BIT;const rt=[],St=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=n.get(C),vt=C.isWebGLMultipleRenderTargets===!0;if(vt)for(let Et=0;Et<w.length;Et++)e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Et=0;Et<w.length;Et++){rt.push(s.COLOR_ATTACHMENT0+Et),C.depthBuffer&&rt.push(St);const Nt=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Nt===!1&&(C.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),vt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ht.__webglColorRenderbuffer[Et]),Nt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[St]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[St])),vt){const st=n.get(w[Et]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,st,0)}s.blitFramebuffer(0,0,G,it,0,0,G,it,nt,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),vt)for(let Et=0;Et<w.length;Et++){e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,ht.__webglColorRenderbuffer[Et]);const Nt=n.get(w[Et]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function J(C){return Math.min(i.maxSamples,C.samples)}function tt(C){const w=n.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Dt(C){const w=a.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function gt(C,w){const G=C.colorSpace,it=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===au||G!==Xi&&G!==Wn&&(ie.getTransfer(G)===he?o===!1?t.has("EXT_sRGB")===!0&&it===ii?(C.format=au,C.minFilter=vn,C.generateMipmaps=!1):w=Rp.sRGBToLinear(w):(it!==ii||nt!==fs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}this.allocateTextureUnit=P,this.resetTextureUnits=k,this.setTexture2D=O,this.setTexture2DArray=V,this.setTexture3D=z,this.setTextureCube=H,this.rebindTextures=wt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=tt}function MM(s,t,e){const n=e.isWebGL2;function i(r,a=Wn){let o;const c=ie.getTransfer(a);if(r===fs)return s.UNSIGNED_BYTE;if(r===yp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Sp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Xg)return s.BYTE;if(r===qg)return s.SHORT;if(r===Bu)return s.UNSIGNED_SHORT;if(r===xp)return s.INT;if(r===cs)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===Kr)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Yg)return s.ALPHA;if(r===ii)return s.RGBA;if(r===jg)return s.LUMINANCE;if(r===$g)return s.LUMINANCE_ALPHA;if(r===Xs)return s.DEPTH_COMPONENT;if(r===Jr)return s.DEPTH_STENCIL;if(r===au)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Zg)return s.RED;if(r===Mp)return s.RED_INTEGER;if(r===Kg)return s.RG;if(r===Tp)return s.RG_INTEGER;if(r===bp)return s.RGBA_INTEGER;if(r===ml||r===_l||r===gl||r===vl)if(c===he)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ml)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_l)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ml)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_l)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rd||r===od||r===ad||r===cd)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===rd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===od)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ad)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ep)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ld||r===ud)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ld)return c===he?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ud)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hd||r===dd||r===fd||r===pd||r===md||r===_d||r===gd||r===vd||r===xd||r===yd||r===Sd||r===Md||r===Td||r===bd)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===hd)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dd)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fd)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pd)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===md)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_d)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gd)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vd)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xd)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yd)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sd)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Md)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Td)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bd)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xl||r===Ed||r===wd)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===xl)return c===he?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ed)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jg||r===Ad||r===Cd||r===Rd)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===xl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ad)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ws?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class TM extends Hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ha extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bM={type:"move"};class Gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),p=this._getHandJoint(l,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bM)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ha;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const EM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class AM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Sn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new oi({extensions:{fragDepth:!0},vertexShader:EM,fragmentShader:wM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Nn(new Xc(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class CM extends lr{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null;const _=new AM,f=e.getContextAttributes();let p=null,x=null;const v=[],M=[],S=new Lt;let b=null;const T=new Hn;T.layers.enable(1),T.viewport=new Ie;const A=new Hn;A.layers.enable(2),A.viewport=new Ie;const N=[T,A],y=new TM;y.layers.enable(1),y.layers.enable(2);let E=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Y=v[X];return Y===void 0&&(Y=new Gl,v[X]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(X){let Y=v[X];return Y===void 0&&(Y=new Gl,v[X]=Y),Y.getGripSpace()},this.getHand=function(X){let Y=v[X];return Y===void 0&&(Y=new Gl,v[X]=Y),Y.getHandSpace()};function k(X){const Y=M.indexOf(X.inputSource);if(Y===-1)return;const ct=v[Y];ct!==void 0&&(ct.update(X.inputSource,X.frame,l||a),ct.dispatchEvent({type:X.type,data:X.inputSource}))}function P(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",F);for(let X=0;X<v.length;X++){const Y=M[X];Y!==null&&(M[X]=null,v[X].disconnect(Y))}E=null,L=null,_.reset(),t.setRenderTarget(p),m=null,d=null,h=null,i=null,x=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",P),i.addEventListener("inputsourceschange",F),f.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,Y),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new vs(m.framebufferWidth,m.framebufferHeight,{format:ii,type:fs,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let Y=null,ct=null,_t=null;f.depth&&(_t=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=f.stencil?Jr:Xs,ct=f.stencil?Ws:cs);const et={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(et),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new vs(d.textureWidth,d.textureHeight,{format:ii,type:fs,depthTexture:new zp(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0});const mt=t.properties.get(x);mt.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),xt.setContext(i),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(X){for(let Y=0;Y<X.removed.length;Y++){const ct=X.removed[Y],_t=M.indexOf(ct);_t>=0&&(M[_t]=null,v[_t].disconnect(ct))}for(let Y=0;Y<X.added.length;Y++){const ct=X.added[Y];let _t=M.indexOf(ct);if(_t===-1){for(let mt=0;mt<v.length;mt++)if(mt>=M.length){M.push(ct),_t=mt;break}else if(M[mt]===null){M[mt]=ct,_t=mt;break}if(_t===-1)break}const et=v[_t];et&&et.connect(ct)}}const O=new U,V=new U;function z(X,Y,ct){O.setFromMatrixPosition(Y.matrixWorld),V.setFromMatrixPosition(ct.matrixWorld);const _t=O.distanceTo(V),et=Y.projectionMatrix.elements,mt=ct.projectionMatrix.elements,Ot=et[14]/(et[10]-1),wt=et[14]/(et[10]+1),B=(et[9]+1)/et[5],ue=(et[9]-1)/et[5],Tt=(et[8]-1)/et[0],J=(mt[8]+1)/mt[0],tt=Ot*Tt,Dt=Ot*J,gt=_t/(-Tt+J),C=gt*-Tt;Y.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(C),X.translateZ(gt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const w=Ot+gt,G=wt+gt,it=tt-C,nt=Dt+(_t-C),rt=B*wt/G*w,St=ue*wt/G*w;X.projectionMatrix.makePerspective(it,nt,rt,St,w,G),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function H(X,Y){Y===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Y.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;_.texture!==null&&(X.near=_.depthNear,X.far=_.depthFar),y.near=A.near=T.near=X.near,y.far=A.far=T.far=X.far,(E!==y.near||L!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,L=y.far,T.near=E,T.far=L,A.near=E,A.far=L,T.updateProjectionMatrix(),A.updateProjectionMatrix(),X.updateProjectionMatrix());const Y=X.parent,ct=y.cameras;H(y,Y);for(let _t=0;_t<ct.length;_t++)H(ct[_t],Y);ct.length===2?z(y,T,A):y.projectionMatrix.copy(T.projectionMatrix),q(X,y,Y)};function q(X,Y,ct){ct===null?X.matrix.copy(Y.matrixWorld):(X.matrix.copy(ct.matrixWorld),X.matrix.invert(),X.matrix.multiply(Y.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Fo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null};let j=null;function Q(X,Y){if(u=Y.getViewerPose(l||a),g=Y,u!==null){const ct=u.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let _t=!1;ct.length!==y.cameras.length&&(y.cameras.length=0,_t=!0);for(let mt=0;mt<ct.length;mt++){const Ot=ct[mt];let wt=null;if(m!==null)wt=m.getViewport(Ot);else{const ue=h.getViewSubImage(d,Ot);wt=ue.viewport,mt===0&&(t.setRenderTargetTextures(x,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(x))}let B=N[mt];B===void 0&&(B=new Hn,B.layers.enable(mt),B.viewport=new Ie,N[mt]=B),B.matrix.fromArray(Ot.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(Ot.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(wt.x,wt.y,wt.width,wt.height),mt===0&&(y.matrix.copy(B.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_t===!0&&y.cameras.push(B)}const et=i.enabledFeatures;if(et&&et.includes("depth-sensing")){const mt=h.getDepthInformation(ct[0]);mt&&mt.isValid&&mt.texture&&_.init(t,mt,i.renderState)}}for(let ct=0;ct<v.length;ct++){const _t=M[ct],et=v[ct];_t!==null&&et!==void 0&&et.update(_t,Y,l||a)}_.render(t,y),j&&j(X,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const xt=new Bp;xt.setAnimationLoop(Q),this.setAnimationLoop=function(X){j=X},this.dispose=function(){}}}function RM(s,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Fp(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,x,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),h(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,M)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),_(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?c(f,p,x,v):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===yn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===yn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(f.envMap.value=x,f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,x,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*x,f.scale.value=v*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,x){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const x=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function PM(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function l(x,v){let M=i[x.id];M===void 0&&(g(x),M=u(x),i[x.id]=M,x.addEventListener("dispose",f));const S=v.program;n.updateUBOMapping(x,S);const b=t.render.frame;r[x.id]!==b&&(d(x),r[x.id]=b)}function u(x){const v=h();x.__bindingPointIndex=v;const M=s.createBuffer(),S=x.__size,b=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,S,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],M=x.uniforms,S=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,T=M.length;b<T;b++){const A=Array.isArray(M[b])?M[b]:[M[b]];for(let N=0,y=A.length;N<y;N++){const E=A[N];if(m(E,b,N,S)===!0){const L=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let P=0;for(let F=0;F<k.length;F++){const O=k[F],V=_(O);typeof O=="number"||typeof O=="boolean"?(E.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,L+P,E.__data)):O.isMatrix3?(E.__data[0]=O.elements[0],E.__data[1]=O.elements[1],E.__data[2]=O.elements[2],E.__data[3]=0,E.__data[4]=O.elements[3],E.__data[5]=O.elements[4],E.__data[6]=O.elements[5],E.__data[7]=0,E.__data[8]=O.elements[6],E.__data[9]=O.elements[7],E.__data[10]=O.elements[8],E.__data[11]=0):(O.toArray(E.__data,P),P+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(x,v,M,S){const b=x.value,T=v+"_"+M;if(S[T]===void 0)return typeof b=="number"||typeof b=="boolean"?S[T]=b:S[T]=b.clone(),!0;{const A=S[T];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return S[T]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function g(x){const v=x.uniforms;let M=0;const S=16;for(let T=0,A=v.length;T<A;T++){const N=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,E=N.length;y<E;y++){const L=N[y],k=Array.isArray(L.value)?L.value:[L.value];for(let P=0,F=k.length;P<F;P++){const O=k[P],V=_(O),z=M%S;z!==0&&S-z<V.boundary&&(M+=S-z),L.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=V.storage}}}const b=M%S;return b>0&&(M+=S-b),x.__size=M,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function f(x){const v=x.target;v.removeEventListener("dispose",f);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class Yp{constructor(t={}){const{canvas:e=b0(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this._useLegacyLights=!1,this.toneMapping=ds,this.toneMappingExposure=1;const v=this;let M=!1,S=0,b=0,T=null,A=-1,N=null;const y=new Ie,E=new Ie;let L=null;const k=new Kt(0);let P=0,F=e.width,O=e.height,V=1,z=null,H=null;const q=new Ie(0,0,F,O),j=new Ie(0,0,F,O);let Q=!1;const xt=new Yu;let X=!1,Y=!1,ct=null;const _t=new Pe,et=new Lt,mt=new U,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function wt(){return T===null?V:1}let B=n;function ue(R,W){for(let Z=0;Z<R.length;Z++){const K=R[Z],$=e.getContext(K,W);if($!==null)return $}return null}try{const R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vu}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",lt,!1),B===null){const W=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&W.shift(),B=ue(W,R),B===null)throw ue(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Tt,J,tt,Dt,gt,C,w,G,it,nt,rt,St,ht,vt,Et,Nt,st,Yt,Ft,Pt,Mt,at,Bt,I;function ut(){Tt=new Uy(B),J=new Dy(B,Tt,t),Tt.init(J),at=new MM(B,Tt,J),tt=new yM(B,Tt,J),Dt=new By(B),gt=new oM,C=new SM(B,Tt,tt,gt,J,at,Dt),w=new Ny(v),G=new Fy(v),it=new j0(B,J),Bt=new Ry(B,Tt,it,J),nt=new ky(B,it,Dt,Bt),rt=new Wy(B,nt,it,Dt),Ft=new Hy(B,J,C),Nt=new Ly(gt),St=new rM(v,w,G,Tt,J,Bt,Nt),ht=new RM(v,gt),vt=new cM,Et=new pM(Tt,J),Yt=new Cy(v,w,G,tt,rt,d,c),st=new xM(v,rt,J),I=new PM(B,Dt,J,tt),Pt=new Py(B,Tt,Dt,J),Mt=new Vy(B,Tt,Dt,J),Dt.programs=St.programs,v.capabilities=J,v.extensions=Tt,v.properties=gt,v.renderLists=vt,v.shadowMap=st,v.state=tt,v.info=Dt}ut();const pt=new CM(v,B);this.xr=pt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=Tt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Tt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(F,O,!1))},this.getSize=function(R){return R.set(F,O)},this.setSize=function(R,W,Z=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,O=W,e.width=Math.floor(R*V),e.height=Math.floor(W*V),Z===!0&&(e.style.width=R+"px",e.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(F*V,O*V).floor()},this.setDrawingBufferSize=function(R,W,Z){F=R,O=W,V=Z,e.width=Math.floor(R*Z),e.height=Math.floor(W*Z),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(y)},this.getViewport=function(R){return R.copy(q)},this.setViewport=function(R,W,Z,K){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,W,Z,K),tt.viewport(y.copy(q).multiplyScalar(V).floor())},this.getScissor=function(R){return R.copy(j)},this.setScissor=function(R,W,Z,K){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,W,Z,K),tt.scissor(E.copy(j).multiplyScalar(V).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(R){tt.setScissorTest(Q=R)},this.setOpaqueSort=function(R){z=R},this.setTransparentSort=function(R){H=R},this.getClearColor=function(R){return R.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(R=!0,W=!0,Z=!0){let K=0;if(R){let $=!1;if(T!==null){const yt=T.texture.format;$=yt===bp||yt===Tp||yt===Mp}if($){const yt=T.texture.type,At=yt===fs||yt===cs||yt===Bu||yt===Ws||yt===yp||yt===Sp,It=Yt.getClearColor(),Ut=Yt.getClearAlpha(),Ht=It.r,Vt=It.g,zt=It.b;At?(m[0]=Ht,m[1]=Vt,m[2]=zt,m[3]=Ut,B.clearBufferuiv(B.COLOR,0,m)):(g[0]=Ht,g[1]=Vt,g[2]=zt,g[3]=Ut,B.clearBufferiv(B.COLOR,0,g))}else K|=B.COLOR_BUFFER_BIT}W&&(K|=B.DEPTH_BUFFER_BIT),Z&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),vt.dispose(),Et.dispose(),gt.dispose(),w.dispose(),G.dispose(),rt.dispose(),Bt.dispose(),I.dispose(),St.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",je),pt.removeEventListener("sessionend",te),ct&&(ct.dispose(),ct=null),be.stop()};function Ct(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=Dt.autoReset,W=st.enabled,Z=st.autoUpdate,K=st.needsUpdate,$=st.type;ut(),Dt.autoReset=R,st.enabled=W,st.autoUpdate=Z,st.needsUpdate=K,st.type=$}function lt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ot(R){const W=R.target;W.removeEventListener("dispose",ot),bt(W)}function bt(R){Rt(R),gt.remove(R)}function Rt(R){const W=gt.get(R).programs;W!==void 0&&(W.forEach(function(Z){St.releaseProgram(Z)}),R.isShaderMaterial&&St.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,Z,K,$,yt){W===null&&(W=Ot);const At=$.isMesh&&$.matrixWorld.determinant()<0,It=rg(R,W,Z,K,$);tt.setMaterial(K,At);let Ut=Z.index,Ht=1;if(K.wireframe===!0){if(Ut=nt.getWireframeAttribute(Z),Ut===void 0)return;Ht=2}const Vt=Z.drawRange,zt=Z.attributes.position;let Ee=Vt.start*Ht,Cn=(Vt.start+Vt.count)*Ht;yt!==null&&(Ee=Math.max(Ee,yt.start*Ht),Cn=Math.min(Cn,(yt.start+yt.count)*Ht)),Ut!==null?(Ee=Math.max(Ee,0),Cn=Math.min(Cn,Ut.count)):zt!=null&&(Ee=Math.max(Ee,0),Cn=Math.min(Cn,zt.count));const Be=Cn-Ee;if(Be<0||Be===1/0)return;Bt.setup($,K,It,Z,Ut);let Ri,ge=Pt;if(Ut!==null&&(Ri=it.get(Ut),ge=Mt,ge.setIndex(Ri)),$.isMesh)K.wireframe===!0?(tt.setLineWidth(K.wireframeLinewidth*wt()),ge.setMode(B.LINES)):ge.setMode(B.TRIANGLES);else if($.isLine){let qt=K.linewidth;qt===void 0&&(qt=1),tt.setLineWidth(qt*wt()),$.isLineSegments?ge.setMode(B.LINES):$.isLineLoop?ge.setMode(B.LINE_LOOP):ge.setMode(B.LINE_STRIP)}else $.isPoints?ge.setMode(B.POINTS):$.isSprite&&ge.setMode(B.TRIANGLES);if($.isBatchedMesh)ge.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)ge.renderInstances(Ee,Be,$.count);else if(Z.isInstancedBufferGeometry){const qt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ul=Math.min(Z.instanceCount,qt);ge.renderInstances(Ee,Be,ul)}else ge.render(Ee,Be)};function Qt(R,W,Z){R.transparent===!0&&R.side===fi&&R.forceSinglePass===!1?(R.side=yn,R.needsUpdate=!0,Sa(R,W,Z),R.side=gs,R.needsUpdate=!0,Sa(R,W,Z),R.side=fi):Sa(R,W,Z)}this.compile=function(R,W,Z=null){Z===null&&(Z=R),f=Et.get(Z),f.init(),x.push(f),Z.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),R!==Z&&R.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),f.setupLights(v._useLegacyLights);const K=new Set;return R.traverse(function($){const yt=$.material;if(yt)if(Array.isArray(yt))for(let At=0;At<yt.length;At++){const It=yt[At];Qt(It,Z,$),K.add(It)}else Qt(yt,Z,$),K.add(yt)}),x.pop(),f=null,K},this.compileAsync=function(R,W,Z=null){const K=this.compile(R,W,Z);return new Promise($=>{function yt(){if(K.forEach(function(At){gt.get(At).currentProgram.isReady()&&K.delete(At)}),K.size===0){$(R);return}setTimeout(yt,10)}Tt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let $t=null;function re(R){$t&&$t(R)}function je(){be.stop()}function te(){be.start()}const be=new Bp;be.setAnimationLoop(re),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(R){$t=R,pt.setAnimationLoop(R),R===null?be.stop():be.start()},pt.addEventListener("sessionstart",je),pt.addEventListener("sessionend",te),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(W),W=pt.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,W,T),f=Et.get(R,x.length),f.init(),x.push(f),_t.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),xt.setFromProjectionMatrix(_t),Y=this.localClippingEnabled,X=Nt.init(this.clippingPlanes,Y),_=vt.get(R,p.length),_.init(),p.push(_),cn(R,W,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(z,H),this.info.render.frame++,X===!0&&Nt.beginShadows();const Z=f.state.shadowsArray;if(st.render(Z,R,W),X===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1)&&Yt.render(_,R),f.setupLights(v._useLegacyLights),W.isArrayCamera){const K=W.cameras;for(let $=0,yt=K.length;$<yt;$++){const At=K[$];qh(_,R,At,At.viewport)}}else qh(_,R,W);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(v,R,W),Bt.resetDefaultState(),A=-1,N=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function cn(R,W,Z,K){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||xt.intersectsSprite(R)){K&&mt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(_t);const At=rt.update(R),It=R.material;It.visible&&_.push(R,At,It,Z,mt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||xt.intersectsObject(R))){const At=rt.update(R),It=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),mt.copy(R.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),mt.copy(At.boundingSphere.center)),mt.applyMatrix4(R.matrixWorld).applyMatrix4(_t)),Array.isArray(It)){const Ut=At.groups;for(let Ht=0,Vt=Ut.length;Ht<Vt;Ht++){const zt=Ut[Ht],Ee=It[zt.materialIndex];Ee&&Ee.visible&&_.push(R,At,Ee,Z,mt.z,zt)}}else It.visible&&_.push(R,At,It,Z,mt.z,null)}}const yt=R.children;for(let At=0,It=yt.length;At<It;At++)cn(yt[At],W,Z,K)}function qh(R,W,Z,K){const $=R.opaque,yt=R.transmissive,At=R.transparent;f.setupLightsView(Z),X===!0&&Nt.setGlobalState(v.clippingPlanes,Z),yt.length>0&&sg($,yt,W,Z),K&&tt.viewport(y.copy(K)),$.length>0&&ya($,W,Z),yt.length>0&&ya(yt,W,Z),At.length>0&&ya(At,W,Z),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function sg(R,W,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const yt=J.isWebGL2;ct===null&&(ct=new vs(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")?Kr:fs,minFilter:zs,samples:yt?4:0})),v.getDrawingBufferSize(et),yt?ct.setSize(et.x,et.y):ct.setSize(hc(et.x),hc(et.y));const At=v.getRenderTarget();v.setRenderTarget(ct),v.getClearColor(k),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const It=v.toneMapping;v.toneMapping=ds,ya(R,Z,K),C.updateMultisampleRenderTarget(ct),C.updateRenderTargetMipmap(ct);let Ut=!1;for(let Ht=0,Vt=W.length;Ht<Vt;Ht++){const zt=W[Ht],Ee=zt.object,Cn=zt.geometry,Be=zt.material,Ri=zt.group;if(Be.side===fi&&Ee.layers.test(K.layers)){const ge=Be.side;Be.side=yn,Be.needsUpdate=!0,Yh(Ee,Z,K,Cn,Be,Ri),Be.side=ge,Be.needsUpdate=!0,Ut=!0}}Ut===!0&&(C.updateMultisampleRenderTarget(ct),C.updateRenderTargetMipmap(ct)),v.setRenderTarget(At),v.setClearColor(k,P),v.toneMapping=It}function ya(R,W,Z){const K=W.isScene===!0?W.overrideMaterial:null;for(let $=0,yt=R.length;$<yt;$++){const At=R[$],It=At.object,Ut=At.geometry,Ht=K===null?At.material:K,Vt=At.group;It.layers.test(Z.layers)&&Yh(It,W,Z,Ut,Ht,Vt)}}function Yh(R,W,Z,K,$,yt){R.onBeforeRender(v,W,Z,K,$,yt),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(v,W,Z,K,R,yt),$.transparent===!0&&$.side===fi&&$.forceSinglePass===!1?($.side=yn,$.needsUpdate=!0,v.renderBufferDirect(Z,W,K,$,R,yt),$.side=gs,$.needsUpdate=!0,v.renderBufferDirect(Z,W,K,$,R,yt),$.side=fi):v.renderBufferDirect(Z,W,K,$,R,yt),R.onAfterRender(v,W,Z,K,$,yt)}function Sa(R,W,Z){W.isScene!==!0&&(W=Ot);const K=gt.get(R),$=f.state.lights,yt=f.state.shadowsArray,At=$.state.version,It=St.getParameters(R,$.state,yt,W,Z),Ut=St.getProgramCacheKey(It);let Ht=K.programs;K.environment=R.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(R.isMeshStandardMaterial?G:w).get(R.envMap||K.environment),Ht===void 0&&(R.addEventListener("dispose",ot),Ht=new Map,K.programs=Ht);let Vt=Ht.get(Ut);if(Vt!==void 0){if(K.currentProgram===Vt&&K.lightsStateVersion===At)return $h(R,It),Vt}else It.uniforms=St.getUniforms(R),R.onBuild(Z,It,v),R.onBeforeCompile(It,v),Vt=St.acquireProgram(It,Ut),Ht.set(Ut,Vt),K.uniforms=It.uniforms;const zt=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(zt.clippingPlanes=Nt.uniform),$h(R,It),K.needsLights=ag(R),K.lightsStateVersion=At,K.needsLights&&(zt.ambientLightColor.value=$.state.ambient,zt.lightProbe.value=$.state.probe,zt.directionalLights.value=$.state.directional,zt.directionalLightShadows.value=$.state.directionalShadow,zt.spotLights.value=$.state.spot,zt.spotLightShadows.value=$.state.spotShadow,zt.rectAreaLights.value=$.state.rectArea,zt.ltc_1.value=$.state.rectAreaLTC1,zt.ltc_2.value=$.state.rectAreaLTC2,zt.pointLights.value=$.state.point,zt.pointLightShadows.value=$.state.pointShadow,zt.hemisphereLights.value=$.state.hemi,zt.directionalShadowMap.value=$.state.directionalShadowMap,zt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,zt.spotShadowMap.value=$.state.spotShadowMap,zt.spotLightMatrix.value=$.state.spotLightMatrix,zt.spotLightMap.value=$.state.spotLightMap,zt.pointShadowMap.value=$.state.pointShadowMap,zt.pointShadowMatrix.value=$.state.pointShadowMatrix),K.currentProgram=Vt,K.uniformsList=null,Vt}function jh(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Ja.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function $h(R,W){const Z=gt.get(R);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function rg(R,W,Z,K,$){W.isScene!==!0&&(W=Ot),C.resetTextureUnits();const yt=W.fog,At=K.isMeshStandardMaterial?W.environment:null,It=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Xi,Ut=(K.isMeshStandardMaterial?G:w).get(K.envMap||At),Ht=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Vt=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),zt=!!Z.morphAttributes.position,Ee=!!Z.morphAttributes.normal,Cn=!!Z.morphAttributes.color;let Be=ds;K.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Be=v.toneMapping);const Ri=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ge=Ri!==void 0?Ri.length:0,qt=gt.get(K),ul=f.state.lights;if(X===!0&&(Y===!0||R!==N)){const Bn=R===N&&K.id===A;Nt.setState(K,R,Bn)}let ye=!1;K.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==ul.state.version||qt.outputColorSpace!==It||$.isBatchedMesh&&qt.batching===!1||!$.isBatchedMesh&&qt.batching===!0||$.isInstancedMesh&&qt.instancing===!1||!$.isInstancedMesh&&qt.instancing===!0||$.isSkinnedMesh&&qt.skinning===!1||!$.isSkinnedMesh&&qt.skinning===!0||$.isInstancedMesh&&qt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&qt.instancingColor===!1&&$.instanceColor!==null||qt.envMap!==Ut||K.fog===!0&&qt.fog!==yt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Nt.numPlanes||qt.numIntersection!==Nt.numIntersection)||qt.vertexAlphas!==Ht||qt.vertexTangents!==Vt||qt.morphTargets!==zt||qt.morphNormals!==Ee||qt.morphColors!==Cn||qt.toneMapping!==Be||J.isWebGL2===!0&&qt.morphTargetsCount!==ge)&&(ye=!0):(ye=!0,qt.__version=K.version);let As=qt.currentProgram;ye===!0&&(As=Sa(K,W,$));let Zh=!1,yo=!1,hl=!1;const Je=As.getUniforms(),Cs=qt.uniforms;if(tt.useProgram(As.program)&&(Zh=!0,yo=!0,hl=!0),K.id!==A&&(A=K.id,yo=!0),Zh||N!==R){Je.setValue(B,"projectionMatrix",R.projectionMatrix),Je.setValue(B,"viewMatrix",R.matrixWorldInverse);const Bn=Je.map.cameraPosition;Bn!==void 0&&Bn.setValue(B,mt.setFromMatrixPosition(R.matrixWorld)),J.logarithmicDepthBuffer&&Je.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Je.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),N!==R&&(N=R,yo=!0,hl=!0)}if($.isSkinnedMesh){Je.setOptional(B,$,"bindMatrix"),Je.setOptional(B,$,"bindMatrixInverse");const Bn=$.skeleton;Bn&&(J.floatVertexTextures?(Bn.boneTexture===null&&Bn.computeBoneTexture(),Je.setValue(B,"boneTexture",Bn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Je.setOptional(B,$,"batchingTexture"),Je.setValue(B,"batchingTexture",$._matricesTexture,C));const dl=Z.morphAttributes;if((dl.position!==void 0||dl.normal!==void 0||dl.color!==void 0&&J.isWebGL2===!0)&&Ft.update($,Z,As),(yo||qt.receiveShadow!==$.receiveShadow)&&(qt.receiveShadow=$.receiveShadow,Je.setValue(B,"receiveShadow",$.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Cs.envMap.value=Ut,Cs.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),yo&&(Je.setValue(B,"toneMappingExposure",v.toneMappingExposure),qt.needsLights&&og(Cs,hl),yt&&K.fog===!0&&ht.refreshFogUniforms(Cs,yt),ht.refreshMaterialUniforms(Cs,K,V,O,ct),Ja.upload(B,jh(qt),Cs,C)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ja.upload(B,jh(qt),Cs,C),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Je.setValue(B,"center",$.center),Je.setValue(B,"modelViewMatrix",$.modelViewMatrix),Je.setValue(B,"normalMatrix",$.normalMatrix),Je.setValue(B,"modelMatrix",$.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Bn=K.uniformsGroups;for(let fl=0,cg=Bn.length;fl<cg;fl++)if(J.isWebGL2){const Kh=Bn[fl];I.update(Kh,As),I.bind(Kh,As)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return As}function og(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function ag(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,W,Z){gt.get(R.texture).__webglTexture=W,gt.get(R.depthTexture).__webglTexture=Z;const K=gt.get(R);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,W){const Z=gt.get(R);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,Z=0){T=R,S=W,b=Z;let K=!0,$=null,yt=!1,At=!1;if(R){const Ut=gt.get(R);Ut.__useDefaultFramebuffer!==void 0?(tt.bindFramebuffer(B.FRAMEBUFFER,null),K=!1):Ut.__webglFramebuffer===void 0?C.setupRenderTarget(R):Ut.__hasExternalTextures&&C.rebindTextures(R,gt.get(R.texture).__webglTexture,gt.get(R.depthTexture).__webglTexture);const Ht=R.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(At=!0);const Vt=gt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Vt[W])?$=Vt[W][Z]:$=Vt[W],yt=!0):J.isWebGL2&&R.samples>0&&C.useMultisampledRTT(R)===!1?$=gt.get(R).__webglMultisampledFramebuffer:Array.isArray(Vt)?$=Vt[Z]:$=Vt,y.copy(R.viewport),E.copy(R.scissor),L=R.scissorTest}else y.copy(q).multiplyScalar(V).floor(),E.copy(j).multiplyScalar(V).floor(),L=Q;if(tt.bindFramebuffer(B.FRAMEBUFFER,$)&&J.drawBuffers&&K&&tt.drawBuffers(R,$),tt.viewport(y),tt.scissor(E),tt.setScissorTest(L),yt){const Ut=gt.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut.__webglTexture,Z)}else if(At){const Ut=gt.get(R.texture),Ht=W||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ut.__webglTexture,Z||0,Ht)}A=-1},this.readRenderTargetPixels=function(R,W,Z,K,$,yt,At){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){tt.bindFramebuffer(B.FRAMEBUFFER,It);try{const Ut=R.texture,Ht=Ut.format,Vt=Ut.type;if(Ht!==ii&&at.convert(Ht)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=Vt===Kr&&(Tt.has("EXT_color_buffer_half_float")||J.isWebGL2&&Tt.has("EXT_color_buffer_float"));if(Vt!==fs&&at.convert(Vt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===Bi&&(J.isWebGL2||Tt.has("OES_texture_float")||Tt.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-K&&Z>=0&&Z<=R.height-$&&B.readPixels(W,Z,K,$,at.convert(Ht),at.convert(Vt),yt)}finally{const Ut=T!==null?gt.get(T).__webglFramebuffer:null;tt.bindFramebuffer(B.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(R,W,Z=0){const K=Math.pow(2,-Z),$=Math.floor(W.image.width*K),yt=Math.floor(W.image.height*K);C.setTexture2D(W,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,R.x,R.y,$,yt),tt.unbindTexture()},this.copyTextureToTexture=function(R,W,Z,K=0){const $=W.image.width,yt=W.image.height,At=at.convert(Z.format),It=at.convert(Z.type);C.setTexture2D(Z,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Z.unpackAlignment),W.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,K,R.x,R.y,$,yt,At,It,W.image.data):W.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,K,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,At,W.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,K,R.x,R.y,At,It,W.image),K===0&&Z.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),tt.unbindTexture()},this.copyTextureToTexture3D=function(R,W,Z,K,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=R.max.x-R.min.x+1,At=R.max.y-R.min.y+1,It=R.max.z-R.min.z+1,Ut=at.convert(K.format),Ht=at.convert(K.type);let Vt;if(K.isData3DTexture)C.setTexture3D(K,0),Vt=B.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)C.setTexture2DArray(K,0),Vt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);const zt=B.getParameter(B.UNPACK_ROW_LENGTH),Ee=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Cn=B.getParameter(B.UNPACK_SKIP_PIXELS),Be=B.getParameter(B.UNPACK_SKIP_ROWS),Ri=B.getParameter(B.UNPACK_SKIP_IMAGES),ge=Z.isCompressedTexture?Z.mipmaps[$]:Z.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ge.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ge.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,R.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,R.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,R.min.z),Z.isDataTexture||Z.isData3DTexture?B.texSubImage3D(Vt,$,W.x,W.y,W.z,yt,At,It,Ut,Ht,ge.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Vt,$,W.x,W.y,W.z,yt,At,It,Ut,ge.data)):B.texSubImage3D(Vt,$,W.x,W.y,W.z,yt,At,It,Ut,Ht,ge),B.pixelStorei(B.UNPACK_ROW_LENGTH,zt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ee),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Cn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Be),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ri),$===0&&K.generateMipmaps&&B.generateMipmap(Vt),tt.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),tt.unbindTexture()},this.resetState=function(){S=0,b=0,T=null,tt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Gu?"display-p3":"srgb",e.unpackColorSpace=ie.workingColorSpace===Hc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ze?qs:wp}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===qs?Ze:Xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class DM extends Yp{}DM.prototype.isWebGL1Renderer=!0;class LM extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Yc extends bi{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new U,d=new U,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let M=0;p===0&&a===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let S=0;S<=e;S++){const b=S/e;h.x=-t*Math.cos(i+b*r)*Math.sin(a+v*o),h.y=t*Math.cos(a+v*o),h.z=t*Math.sin(i+b*r)*Math.sin(a+v*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),f.push(b+M,1-v),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const v=u[p][x+1],M=u[p][x],S=u[p+1][x],b=u[p+1][x+1];(p!==0||a>0)&&m.push(v,M,b),(p!==n-1||c<Math.PI)&&m.push(M,S,b)}this.setIndex(m),this.setAttribute("position",new Yn(g,3)),this.setAttribute("normal",new Yn(_,3)),this.setAttribute("uv",new Yn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class NM extends ho{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class IM extends ho{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Kt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Zu extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class OM extends Zu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Hl=new Pe,Sf=new U,Mf=new U;class FM{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yu,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sf),Mf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mf),e.updateMatrixWorld(),Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class UM extends FM{constructor(){super(new ju(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kM extends Zu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new UM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class VM extends Zu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}let BM=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Tf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Tf(){return(typeof performance>"u"?Date:performance).now()}class zM{constructor(t,e,n=0,i=1/0){this.ray=new Xu(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new qu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return uu(t,this,n,e),n.sort(bf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)uu(t[i],this,n,e);return n.sort(bf),n}}function bf(s,t){return s.distance-t.distance}function uu(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)uu(i[r],t,e,!0)}}class Ef{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(en(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vu);function Fi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function jp(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},to={duration:.5,overwrite:!1,delay:0},Ku,rn,_e,Xn=1e8,ce=1/Xn,hu=Math.PI*2,GM=hu/4,HM=0,$p=Math.sqrt,WM=Math.cos,XM=Math.sin,Ye=function(t){return typeof t=="string"},Me=function(t){return typeof t=="function"},Yi=function(t){return typeof t=="number"},Ju=function(t){return typeof t>"u"},xi=function(t){return typeof t=="object"},Mn=function(t){return t!==!1},Qu=function(){return typeof window<"u"},Wa=function(t){return Me(t)||Ye(t)},Zp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,du=/(?:-?\.?\d|\.)+/gi,Kp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Wl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Jp=/[+-]=-?[.\d]+/,Qp=/[^,'"\[\]\s]+/gi,qM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ve,hi,fu,th,kn={},fc={},tm,em=function(t){return(fc=er(t,kn))&&wn},eh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Uo=function(t,e){return!e&&console.warn(t)},nm=function(t,e){return t&&(kn[t]=e)&&fc&&(fc[t]=e)||kn},ko=function(){return 0},YM={suppressEvents:!0,isStart:!0,kill:!1},Qa={suppressEvents:!0,kill:!1},jM={suppressEvents:!0},nh={},ps=[],pu={},im,Dn={},Xl={},wf=30,tc=[],ih="",sh=function(t){var e=t[0],n,i;if(xi(e)||Me(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=tc.length;i--&&!tc[i].targetTest(e););n=tc[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Am(t[i],n)))||t.splice(i,1);return t},Ys=function(t){return t._gsap||sh(qn(t))[0]._gsap},sm=function(t,e,n){return(n=t[e])&&Me(n)?t[e]():Ju(n)&&t.getAttribute&&t.getAttribute(e)||n},Tn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ce=function(t){return Math.round(t*1e5)/1e5||0},He=function(t){return Math.round(t*1e7)/1e7||0},Xr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},$M=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},pc=function(){var t=ps.length,e=ps.slice(0),n,i;for(pu={},ps.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},rm=function(t,e,n,i){ps.length&&!rn&&pc(),t.render(e,n,i||rn&&e<0&&(t._initted||t._startAt)),ps.length&&!rn&&pc()},om=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Qp).length<2?e:Ye(t)?t.trim():t},am=function(t){return t},$n=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ZM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},er=function(t,e){for(var n in e)t[n]=e[n];return t},Af=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=xi(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},mc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Lo=function(t){var e=t.parent||ve,n=t.keyframes?ZM(on(t.keyframes)):$n;if(Mn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},KM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},cm=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},jc=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},xs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},js=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},JM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},mu=function(t,e,n,i){return t._startAt&&(rn?t._startAt.revert(Qa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},QM=function s(t){return!t||t._ts&&s(t.parent)},Cf=function(t){return t._repeat?eo(t._tTime,t=t.duration()+t._rDelay)*t:0},eo=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},_c=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},$c=function(t){return t._end=He(t._start+(t._tDur/Math.abs(t._ts||t._rts||ce)||0))},Zc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=He(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),$c(t),n._dirty||js(n,t)),t},lm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=_c(t.rawTime(),e),(!e._dur||la(0,e.totalDuration(),n)-e._tTime>ce)&&e.render(n,!0)),js(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ce}},mi=function(t,e,n,i){return e.parent&&xs(e),e._start=He((Yi(n)?n:n||t!==ve?Gn(t,n,e):t._time)+e._delay),e._end=He(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),cm(t,e,"_first","_last",t._sort?"_start":0),_u(e)||(t._recent=e),i||lm(t,e),t._ts<0&&Zc(t,t._tTime),t},um=function(t,e){return(kn.ScrollTrigger||eh("scrollTrigger",e))&&kn.ScrollTrigger.create(e,t)},hm=function(t,e,n,i,r){if(oh(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!rn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&im!==Ln.frame)return ps.push(t),t._lazy=[r,i],1},tT=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},_u=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},eT=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&tT(t)&&!(!t._initted&&_u(t))||(t._ts<0||t._dp._ts<0)&&!_u(t))?0:1,o=t._rDelay,c=0,l,u,h;if(o&&t._repeat&&(c=la(0,t._tDur,e),u=eo(c,o),t._yoyo&&u&1&&(a=1-a),u!==eo(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||rn||i||t._zTime===ce||!e&&t._zTime){if(!t._initted&&hm(t,e,i,n,c))return;for(h=t._zTime,t._zTime=e||(n?ce:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,l=t._pt;l;)l.r(a,l.d),l=l._next;e<0&&mu(t,e,n,!0),t._onUpdate&&!n&&In(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&In(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&xs(t,1),!n&&!rn&&(In(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},nT=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},no=function(t,e,n,i){var r=t._repeat,a=He(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:He(a*(r+1)+t._rDelay*r):a,o>0&&!i&&Zc(t,t._tTime=t._tDur*o),t.parent&&$c(t),n||js(t.parent,t),t},Rf=function(t){return t instanceof pn?js(t):no(t,t._dur)},iT={_start:0,endTime:ko,totalDuration:ko},Gn=function s(t,e,n){var i=t.labels,r=t._recent||iT,a=t.duration()>=Xn?r.endTime(!1):t._dur,o,c,l;return Ye(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",o=e.indexOf("="),c==="<"||c===">"?(o>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(c=parseFloat(e.charAt(o-1)+e.substr(o+1)),l&&n&&(c=c/100*(on(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+c:a+c)):e==null?a:+e},No=function(t,e,n){var i=Yi(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,c;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Mn(c.vars.inherit)&&c.parent;a.immediateRender=Mn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Ne(e[0],a,e[r+1])},bs=function(t,e){return t||t===0?e(t):e},la=function(t,e,n){return n<t?t:n>e?e:n},sn=function(t,e){return!Ye(t)||!(e=qM.exec(t))?"":e[1]},sT=function(t,e,n){return bs(n,function(i){return la(t,e,i)})},gu=[].slice,dm=function(t,e){return t&&xi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&xi(t[0]))&&!t.nodeType&&t!==hi},rT=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Ye(i)&&!e||dm(i,1)?(r=n).push.apply(r,qn(i)):n.push(i)})||n},qn=function(t,e,n){return _e&&!e&&_e.selector?_e.selector(t):Ye(t)&&!n&&(fu||!io())?gu.call((e||th).querySelectorAll(t),0):on(t)?rT(t,n):dm(t)?gu.call(t,0):t?[t]:[]},vu=function(t){return t=qn(t)[0]||Uo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return qn(e,n.querySelectorAll?n:n===t?Uo("Invalid scope")||th.createElement("div"):t)}},fm=function(t){return t.sort(function(){return .5-Math.random()})},pm=function(t){if(Me(t))return t;var e=xi(t)?t:{each:t},n=$s(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=e.axis,u=i,h=i;return Ye(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(u=i[0],h=i[1]),function(d,m,g){var _=(g||e).length,f=a[_],p,x,v,M,S,b,T,A,N;if(!f){if(N=e.grid==="auto"?0:(e.grid||[1,Xn])[1],!N){for(T=-Xn;T<(T=g[N++].getBoundingClientRect().left)&&N<_;);N<_&&N--}for(f=a[_]=[],p=c?Math.min(N,_)*u-.5:i%N,x=N===Xn?0:c?_*h/N-.5:i/N|0,T=0,A=Xn,b=0;b<_;b++)v=b%N-p,M=x-(b/N|0),f[b]=S=l?Math.abs(l==="y"?M:v):$p(v*v+M*M),S>T&&(T=S),S<A&&(A=S);i==="random"&&fm(f),f.max=T-A,f.min=A,f.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(N>_?_-1:l?l==="y"?_/N:N:Math.max(N,_/N))||0)*(i==="edges"?-1:1),f.b=_<0?r-_:r,f.u=sn(e.amount||e.each)||0,n=n&&_<0?bm(n):n}return _=(f[d]-f.min)/f.max||0,He(f.b+(n?n(_):_)*f.v)+f.u}},xu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=He(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Yi(n)?0:sn(n))}},mm=function(t,e){var n=on(t),i,r;return!n&&xi(t)&&(i=n=t.radius||Xn,t.values?(t=qn(t.values),(r=!Yi(t[0]))&&(i*=i)):t=xu(t.increment)),bs(e,n?Me(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),l=Xn,u=0,h=t.length,d,m;h--;)r?(d=t[h].x-o,m=t[h].y-c,d=d*d+m*m):d=Math.abs(t[h]-o),d<l&&(l=d,u=h);return u=!i||l<=i?t[u]:a,r||u===a||Yi(a)?u:u+sn(a)}:xu(t))},_m=function(t,e,n,i){return bs(on(t)?!e:n===!0?!!(n=0):!i,function(){return on(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},oT=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},aT=function(t,e){return function(n){return t(parseFloat(n))+(e||sn(n))}},cT=function(t,e,n){return vm(t,e,0,1,n)},gm=function(t,e,n){return bs(n,function(i){return t[~~e(i)]})},lT=function s(t,e,n){var i=e-t;return on(t)?gm(t,s(0,t.length),e):bs(n,function(r){return(i+(r-t)%i)%i+t})},uT=function s(t,e,n){var i=e-t,r=i*2;return on(t)?gm(t,s(0,t.length-1),e):bs(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},Vo=function(t){for(var e=0,n="",i,r,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(o?Qp:du),n+=t.substr(e,i-e)+_m(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},vm=function(t,e,n,i,r){var a=e-t,o=i-n;return bs(r,function(c){return n+((c-t)/a*o||0)})},hT=function s(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var a=Ye(t),o={},c,l,u,h,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(on(t)&&!on(e)){for(u=[],h=t.length,d=h-2,l=1;l<h;l++)u.push(s(t[l-1],t[l]));h--,r=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=e}else i||(t=er(on(t)?[]:{},t));if(!u){for(c in e)rh.call(o,t,c,"get",e[c]);r=function(g){return lh(g,o)||(a?t.p:t)}}}return bs(n,r)},Pf=function(t,e,n){var i=t.labels,r=Xn,a,o,c;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(c=a,r=o);return c},In=function(t,e,n){var i=t.vars,r=i[e],a=_e,o=t._ctx,c,l,u;if(r)return c=i[e+"Params"],l=i.callbackScope||t,n&&ps.length&&pc(),o&&(_e=o),u=c?r.apply(l,c):r.call(l),_e=a,u},Co=function(t){return xs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!rn),t.progress()<1&&In(t,"onInterrupt"),t},Br,xm=[],ym=function(t){if(t)if(t=!t.name&&t.default||t,Qu()||t.headless){var e=t.name,n=Me(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:ko,render:lh,add:rh,kill:AT,modifier:wT,rawVars:0},a={targetTest:0,get:0,getSetter:ch,aliases:{},register:0};if(io(),t!==i){if(Dn[e])return;$n(i,$n(mc(t,r),a)),er(i.prototype,er(r,mc(t,a))),Dn[i.prop=e]=i,t.targetTest&&(tc.push(i),nh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}nm(e,i),t.register&&t.register(wn,i,bn)}else xm.push(t)},oe=255,Ro={aqua:[0,oe,oe],lime:[0,oe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,oe],navy:[0,0,128],white:[oe,oe,oe],olive:[128,128,0],yellow:[oe,oe,0],orange:[oe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[oe,0,0],pink:[oe,192,203],cyan:[0,oe,oe],transparent:[oe,oe,oe,0]},ql=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*oe+.5|0},Sm=function(t,e,n){var i=t?Yi(t)?[t>>16,t>>8&oe,t&oe]:0:Ro.black,r,a,o,c,l,u,h,d,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ro[t])i=Ro[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&oe,i&oe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&oe,t&oe]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(du),!e)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=ql(c+1/3,r,a),i[1]=ql(c,r,a),i[2]=ql(c-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Kp),n&&i.length<4&&(i[3]=1),i}else i=t.match(du)||Ro.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/oe,a=i[1]/oe,o=i[2]/oe,h=Math.max(r,a,o),d=Math.min(r,a,o),u=(h+d)/2,h===d?c=l=0:(m=h-d,l=u>.5?m/(2-h-d):m/(h+d),c=h===r?(a-o)/m+(a<o?6:0):h===a?(o-r)/m+2:(r-a)/m+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Mm=function(t){var e=[],n=[],i=-1;return t.split(ms).forEach(function(r){var a=r.match(Vr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Df=function(t,e,n){var i="",r=(t+i).match(ms),a=e?"hsla(":"rgba(",o=0,c,l,u,h;if(!r)return t;if(r=r.map(function(d){return(d=Sm(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Mm(t),c=n.c,c.join(i)!==u.c.join(i)))for(l=t.replace(ms,"1").split(Vr),h=l.length-1;o<h;o++)i+=l[o]+(~c.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=t.split(ms),h=l.length-1;o<h;o++)i+=l[o]+r[o];return i+l[h]},ms=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ro)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),dT=/hsl[a]?\(/,Tm=function(t){var e=t.join(" "),n;if(ms.lastIndex=0,ms.test(e))return n=dT.test(e),t[1]=Df(t[1],n),t[0]=Df(t[0],n,Mm(t[1])),!0},Bo,Ln=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],c,l,u,h,d,m,g=function _(f){var p=s()-i,x=f===!0,v,M,S,b;if((p>t||p<0)&&(n+=p-e),i+=p,S=i-n,v=S-a,(v>0||x)&&(b=++h.frame,d=S-h.time*1e3,h.time=S=S/1e3,a+=v+(v>=r?4:r-v),M=1),x||(c=l(_)),M)for(m=0;m<o.length;m++)o[m](S,d,b,f)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(f){return d/(1e3/(f||60))},wake:function(){tm&&(!fu&&Qu()&&(hi=fu=window,th=hi.document||{},kn.gsap=wn,(hi.gsapVersions||(hi.gsapVersions=[])).push(wn.version),em(fc||hi.GreenSockGlobals||!hi.gsap&&hi||{}),xm.forEach(ym)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(f){return setTimeout(f,a-h.time*1e3+1|0)},Bo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Bo=0,l=ko},lagSmoothing:function(f,p){t=f||1/0,e=Math.min(p||33,t)},fps:function(f){r=1e3/(f||240),a=h.time*1e3+r},add:function(f,p,x){var v=p?function(M,S,b,T){f(M,S,b,T),h.remove(v)}:f;return h.remove(f),o[x?"unshift":"push"](v),io(),v},remove:function(f,p){~(p=o.indexOf(f))&&o.splice(p,1)&&m>=p&&m--},_listeners:o},h}(),io=function(){return!Bo&&Ln.wake()},Jt={},fT=/^[\d.\-M][\d.\-,\s]/,pT=/["']/g,mT=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,c,l;r<a;r++)c=n[r],o=r!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),e[i]=isNaN(l)?l.replace(pT,"").trim():+l,i=c.substr(o+1).trim();return e},_T=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},gT=function(t){var e=(t+"").split("("),n=Jt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[mT(e[1])]:_T(t).split(",").map(om)):Jt._CE&&fT.test(t)?Jt._CE("",t):n},bm=function(t){return function(e){return 1-t(1-e)}},Em=function s(t,e){for(var n=t._first,i;n;)n instanceof pn?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},$s=function(t,e){return t&&(Me(t)?t:Jt[t]||gT(t))||e},ur=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return Tn(t,function(o){Jt[o]=kn[o]=r,Jt[a=o.toLowerCase()]=n;for(var c in r)Jt[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Jt[o+"."+c]=r[c]}),r},wm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Yl=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/hu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*XM((u-a)*r)+1},c=t==="out"?o:t==="in"?function(l){return 1-o(1-l)}:wm(o);return r=hu/r,c.config=function(l,u){return s(t,l,u)},c},jl=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:wm(n);return i.config=function(r){return s(t,r)},i};Tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;ur(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Jt.Linear.easeNone=Jt.none=Jt.Linear.easeIn;ur("Elastic",Yl("in"),Yl("out"),Yl());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};ur("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);ur("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});ur("Circ",function(s){return-($p(1-s*s)-1)});ur("Sine",function(s){return s===1?1:-WM(s*GM)+1});ur("Back",jl("in"),jl("out"),jl());Jt.SteppedEase=Jt.steps=kn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-ce;return function(o){return((i*la(0,a,o)|0)+r)*n}}};to.ease=Jt["quad.out"];Tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return ih+=s+","+s+"Params,"});var Am=function(t,e){this.id=HM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:sm,this.set=e?e.getSetter:ch},zo=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,no(this,+e.duration,1,1),this.data=e.data,_e&&(this._ctx=_e,_e.data.push(this)),Bo||Ln.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,no(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(io(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Zc(this,n),!r._dp||r.parent||lm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ce||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),rm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Cf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Cf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?eo(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ce?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?_c(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ce?0:this._rts,this.totalTime(la(-Math.abs(this._delay),this._tDur,r),i!==!1),$c(this),JM(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(io(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ce&&(this._tTime-=ce)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mi(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_c(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=jM);var i=rn;return rn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),rn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Rf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Rf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Gn(this,n),Mn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Mn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ce:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ce,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ce)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=Me(n)?n:am,o=function(){var l=i.then;i.then=null,Me(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=l),r(a),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){Co(this)},s}();$n(zo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ce,_prom:0,_ps:!1,_rts:1});var pn=function(s){jp(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Mn(n.sortChildren),ve&&mi(n.parent||ve,Fi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&um(Fi(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return No(0,arguments,this),this},e.from=function(i,r,a){return No(1,arguments,this),this},e.fromTo=function(i,r,a,o){return No(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,Lo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ne(i,r,Gn(this,a),1),this},e.call=function(i,r,a){return mi(this,Ne.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,c,l,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new Ne(i,a,Gn(this,c)),this},e.staggerFrom=function(i,r,a,o,c,l,u){return a.runBackwards=1,Lo(a).immediateRender=Mn(a.immediateRender),this.staggerTo(i,r,a,o,c,l,u)},e.staggerFromTo=function(i,r,a,o,c,l,u,h){return o.startAt=a,Lo(o).immediateRender=Mn(o.immediateRender),this.staggerTo(i,r,o,c,l,u,h)},e.render=function(i,r,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:He(i),h=this._zTime<0!=i<0&&(this._initted||!l),d,m,g,_,f,p,x,v,M,S,b,T;if(this!==ve&&u>c&&i>=0&&(u=c),u!==this._tTime||a||h){if(o!==this._time&&l&&(u+=this._time-o,i+=this._time-o),d=u,M=this._start,v=this._ts,p=!v,h&&(l||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,f=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(f*100+i,r,a);if(d=He(u%f),u===c?(_=this._repeat,d=l):(_=~~(u/f),_&&_===u/f&&(d=l,_--),d>l&&(d=l)),S=eo(this._tTime,f),!o&&this._tTime&&S!==_&&this._tTime-S*f-this._dur<=0&&(S=_),b&&_&1&&(d=l-d,T=1),_!==S&&!this._lock){var A=b&&S&1,N=A===(b&&_&1);if(_<S&&(A=!A),o=A?0:u%l?l:u,this._lock=1,this.render(o||(T?0:He(_*f)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&In(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,N&&(this._lock=2,o=A?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Em(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=nT(this,He(o),He(d)),x&&(u-=d-(d=x._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!r&&!_&&(In(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||d>=m._start)&&m._ts&&x!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,r,a),d!==this._time||!this._ts&&!p){x=0,g&&(u+=this._zTime=-ce);break}}m=g}else{m=this._last;for(var y=i<0?i:d;m;){if(g=m._prev,(m._act||y<=m._end)&&m._ts&&x!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(y-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(y-m._start)*m._ts,r,a||rn&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!p){x=0,g&&(u+=this._zTime=y?-ce:ce);break}}m=g}}if(x&&!r&&(this.pause(),x.render(d>=o?0:-ce)._zTime=d>=o?1:-1,this._ts))return this._start=M,$c(this),this.render(i,r,a);this._onUpdate&&!r&&In(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&xs(this,1),!r&&!(i<0&&!o)&&(u||o||!c)&&(In(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(Yi(r)||(r=Gn(this,r,i)),!(i instanceof zo)){if(on(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Ye(i))return this.addLabel(i,r);if(Me(i))i=Ne.delayedCall(0,i);else return this}return this!==i?mi(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Xn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Ne?r&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,a)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return Ye(i)?this.removeLabel(i):Me(i)?this.killTweensOf(i):(jc(this,i),i===this._recent&&(this._recent=this._last),js(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=He(Ln.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Gn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=Ne.delayedCall(0,r||ko,a);return o.data="isPause",this._hasPause=1,mi(this,o,Gn(this,i))},e.removePause=function(i){var r=this._first;for(i=Gn(this,i);r;)r._start===i&&r.data==="isPause"&&xs(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)ls!==o[c]&&o[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=qn(i),c=this._first,l=Yi(r),u;c;)c instanceof Ne?$M(c._targets,o)&&(l?(!ls||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(u=c.getTweensOf(o,r)).length&&a.push.apply(a,u),c=c._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=Gn(a,i),c=r,l=c.startAt,u=c.onStart,h=c.onStartParams,d=c.immediateRender,m,g=Ne.to(a,$n({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||ce,onStart:function(){if(a.pause(),!m){var f=r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==f&&no(g,f,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},r));return d?g.render(0):g},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,$n({startAt:{time:Gn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Pf(this,Gn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Pf(this,Gn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ce)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,l;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(l in c)c[l]>=a&&(c[l]+=i);return js(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),js(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,c=Xn,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,mi(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>r&&o._ts&&(r=o._end),o=l;no(a,a===ve&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ve._ts&&(rm(ve,_c(i,ve)),im=Ln.frame),Ln.frame>=wf){wf+=Fn.autoSleep||120;var r=ve._first;if((!r||!r._ts)&&Fn.autoSleep&&Ln._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ln.sleep()}}},t}(zo);$n(pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var vT=function(t,e,n,i,r,a,o){var c=new bn(this._pt,t,e,0,1,Nm,null,r),l=0,u=0,h,d,m,g,_,f,p,x;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Vo(i)),a&&(x=[n,i],a(x,t,e),n=x[0],i=x[1]),d=n.match(Wl)||[];h=Wl.exec(i);)g=h[0],_=i.substring(l,h.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==d[u++]&&(f=parseFloat(d[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:f,c:g.charAt(1)==="="?Xr(f,g)-f:parseFloat(g)-f,m:m&&m<4?Math.round:0},l=Wl.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(Jp.test(i)||p)&&(c.e=0),this._pt=c,c},rh=function(t,e,n,i,r,a,o,c,l,u){Me(i)&&(i=i(r||0,t,a));var h=t[e],d=n!=="get"?n:Me(h)?l?t[e.indexOf("set")||!Me(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():h,m=Me(h)?l?TT:Dm:ah,g;if(Ye(i)&&(~i.indexOf("random(")&&(i=Vo(i)),i.charAt(1)==="="&&(g=Xr(d,i)+(sn(d)||0),(g||g===0)&&(i=g))),!u||d!==i||yu)return!isNaN(d*i)&&i!==""?(g=new bn(this._pt,t,e,+d||0,i-(d||0),typeof h=="boolean"?ET:Lm,0,m),l&&(g.fp=l),o&&g.modifier(o,this,t),this._pt=g):(!h&&!(e in t)&&eh(e,i),vT.call(this,t,e,d,i,m,c||Fn.stringFilter,l))},xT=function(t,e,n,i,r){if(Me(t)&&(t=Io(t,r,e,n,i)),!xi(t)||t.style&&t.nodeType||on(t)||Zp(t))return Ye(t)?Io(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=Io(t[o],r,e,n,i);return a},Cm=function(t,e,n,i,r,a){var o,c,l,u;if(Dn[t]&&(o=new Dn[t]).init(r,o.rawVars?e[t]:xT(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new bn(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==Br))for(l=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)l[o._props[u]]=c;return o},ls,yu,oh=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,m=i.autoRevert,g=t._dur,_=t._startAt,f=t._targets,p=t.parent,x=p&&p.data==="nested"?p.vars.targets:f,v=t._overwrite==="auto"&&!Ku,M=t.timeline,S,b,T,A,N,y,E,L,k,P,F,O,V;if(M&&(!d||!r)&&(r="none"),t._ease=$s(r,to.ease),t._yEase=h?bm($s(h===!0?r:h,to.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!M&&!!i.runBackwards,!M||d&&!i.stagger){if(L=f[0]?Ys(f[0]).harness:0,O=L&&i[L.prop],S=mc(i,nh),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!m?_.render(-1,!0):_.revert(u&&g?Qa:YM),_._lazy=0),a){if(xs(t._startAt=Ne.set(f,$n({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Mn(c),startAt:null,delay:0,onUpdate:l&&function(){return In(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(rn||!o&&!m)&&t._startAt.revert(Qa),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),T=$n({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Mn(c),immediateRender:o,stagger:0,parent:p},S),O&&(T[L.prop]=O),xs(t._startAt=Ne.set(f,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(rn?t._startAt.revert(Qa):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,ce,ce);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&Mn(c)||c&&!g,b=0;b<f.length;b++){if(N=f[b],E=N._gsap||sh(f)[b]._gsap,t._ptLookup[b]=P={},pu[E.id]&&ps.length&&pc(),F=x===f?b:x.indexOf(N),L&&(k=new L).init(N,O||S,t,F,x)!==!1&&(t._pt=A=new bn(t._pt,N,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(z){P[z]=A}),k.priority&&(y=1)),!L||O)for(T in S)Dn[T]&&(k=Cm(T,S,t,F,N,x))?k.priority&&(y=1):P[T]=A=rh.call(t,N,T,"get",S[T],F,x,0,i.stringFilter);t._op&&t._op[b]&&t.kill(N,t._op[b]),v&&t._pt&&(ls=t,ve.killTweensOf(N,P,t.globalTime(e)),V=!t.parent,ls=0),t._pt&&c&&(pu[E.id]=1)}y&&Im(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!V,d&&e<=0&&M.render(Xn,!0,!0)},yT=function(t,e,n,i,r,a,o,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,d,m;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,m=t._targets.length;m--;){if(u=d[m][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return yu=1,t.vars[e]="+=0",oh(t,o),yu=0,c?Uo(e+" not eligible for reset"):1;l.push(u)}for(m=l.length;m--;)h=l[m],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Ce(n)+sn(h.e)),h.b&&(h.b=u.s+sn(h.b))},ST=function(t,e){var n=t[0]?Ys(t[0]).harness:0,i=n&&n.aliases,r,a,o,c;if(!i)return e;r=er({},e);for(a in i)if(a in r)for(c=i[a].split(","),o=c.length;o--;)r[c[o]]=r[a];return r},MT=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(on(e))o=n[t]||(n[t]=[]),e.forEach(function(c,l){return o.push({t:l/(e.length-1)*100,v:c,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},Io=function(t,e,n,i,r){return Me(t)?t.call(e,n,i,r):Ye(t)&&~t.indexOf("random(")?Vo(t):t},Rm=ih+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Pm={};Tn(Rm+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Pm[s]=1});var Ne=function(s){jp(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Lo(i))||this;var c=o.vars,l=c.duration,u=c.delay,h=c.immediateRender,d=c.stagger,m=c.overwrite,g=c.keyframes,_=c.defaults,f=c.scrollTrigger,p=c.yoyoEase,x=i.parent||ve,v=(on(n)||Zp(n)?Yi(n[0]):"length"in i)?[n]:qn(n),M,S,b,T,A,N,y,E;if(o._targets=v.length?sh(v):Uo("GSAP target "+n+" not found. https://gsap.com",!Fn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||d||Wa(l)||Wa(u)){if(i=o.vars,M=o.timeline=new pn({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:v}),M.kill(),M.parent=M._dp=Fi(o),M._start=0,d||Wa(l)||Wa(u)){if(T=v.length,y=d&&pm(d),xi(d))for(A in d)~Rm.indexOf(A)&&(E||(E={}),E[A]=d[A]);for(S=0;S<T;S++)b=mc(i,Pm),b.stagger=0,p&&(b.yoyoEase=p),E&&er(b,E),N=v[S],b.duration=+Io(l,Fi(o),S,N,v),b.delay=(+Io(u,Fi(o),S,N,v)||0)-o._delay,!d&&T===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),M.to(N,b,y?y(S,N,v):0),M._ease=Jt.none;M.duration()?l=u=0:o.timeline=0}else if(g){Lo($n(M.vars.defaults,{ease:"none"})),M._ease=$s(g.ease||i.ease||"none");var L=0,k,P,F;if(on(g))g.forEach(function(O){return M.to(v,O,">")}),M.duration();else{b={};for(A in g)A==="ease"||A==="easeEach"||MT(A,g[A],b,g.easeEach);for(A in b)for(k=b[A].sort(function(O,V){return O.t-V.t}),L=0,S=0;S<k.length;S++)P=k[S],F={ease:P.e,duration:(P.t-(S?k[S-1].t:0))/100*l},F[A]=P.v,M.to(v,F,L),L+=F.duration;M.duration()<l&&M.to({},{duration:l-M.duration()})}}l||o.duration(l=M.duration())}else o.timeline=0;return m===!0&&!Ku&&(ls=Fi(o),ve.killTweensOf(v),ls=0),mi(x,Fi(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!l&&!g&&o._start===He(x._time)&&Mn(h)&&QM(Fi(o))&&x.data!=="nested")&&(o._tTime=-ce,o.render(Math.max(0,-u)||0)),f&&um(Fi(o),f),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-ce&&!u?c:i<ce?0:i,d,m,g,_,f,p,x,v,M;if(!l)eT(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,v=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,a);if(d=He(h%_),h===c?(g=this._repeat,d=l):(g=~~(h/_),g&&g===He(h/_)&&(d=l,g--),d>l&&(d=l)),p=this._yoyo&&g&1,p&&(M=this._yEase,d=l-d),f=eo(this._tTime,_),d===o&&!a&&this._initted&&g===f)return this._tTime=h,this;g!==f&&(v&&this._yEase&&Em(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(He(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(hm(this,u?i:d,a,r,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==f))return this;if(l!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(M||this._ease)(d/l),this._from&&(this.ratio=x=1-x),d&&!o&&!r&&!g&&(In(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(x,m.d),m=m._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&mu(this,i,r,a),In(this,"onUpdate")),this._repeat&&g!==f&&this.vars.onRepeat&&!r&&this.parent&&In(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&mu(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&xs(this,1),!r&&!(u&&!o)&&(h||o||p)&&(In(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,c){Bo||Ln.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||oh(this,l),u=this._ease(l/this._dur),yT(this,i,r,a,o,u,l,c)?this.resetTo(i,r,a,o,1):(Zc(this,0),this.parent||cm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Co(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ls&&ls.vars.overwrite!==!0)._first||Co(this),this.parent&&a!==this.timeline.totalDuration()&&no(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?qn(i):o,l=this._ptLookup,u=this._pt,h,d,m,g,_,f,p;if((!r||r==="all")&&KM(o,c))return r==="all"&&(this._pt=0),Co(this);for(h=this._op=this._op||[],r!=="all"&&(Ye(r)&&(_={},Tn(r,function(x){return _[x]=1}),r=_),r=ST(o,r)),p=o.length;p--;)if(~c.indexOf(o[p])){d=l[p],r==="all"?(h[p]=r,g=d,m={}):(m=h[p]=h[p]||{},g=r);for(_ in g)f=d&&d[_],f&&((!("kill"in f.d)||f.d.kill(_)===!0)&&jc(this,f,"_pt"),delete d[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&u&&Co(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return No(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return No(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return ve.killTweensOf(i,r,a)},t}(zo);$n(Ne.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Tn("staggerTo,staggerFrom,staggerFromTo",function(s){Ne[s]=function(){var t=new pn,e=gu.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var ah=function(t,e,n){return t[e]=n},Dm=function(t,e,n){return t[e](n)},TT=function(t,e,n,i){return t[e](i.fp,n)},bT=function(t,e,n){return t.setAttribute(e,n)},ch=function(t,e){return Me(t[e])?Dm:Ju(t[e])&&t.setAttribute?bT:ah},Lm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ET=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Nm=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},lh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},wT=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},AT=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?jc(this,e,"_pt"):e.dep||(n=1),e=i;return!n},CT=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Im=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},bn=function(){function s(e,n,i,r,a,o,c,l,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Lm,this.d=c||this,this.set=l||ah,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=CT,this.m=n,this.mt=r,this.tween=i},s}();Tn(ih+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return nh[s]=1});kn.TweenMax=kn.TweenLite=Ne;kn.TimelineLite=kn.TimelineMax=pn;ve=new pn({sortChildren:!1,defaults:to,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fn.stringFilter=Tm;var Zs=[],ec={},RT=[],Lf=0,PT=0,$l=function(t){return(ec[t]||RT).map(function(e){return e()})},Su=function(){var t=Date.now(),e=[];t-Lf>2&&($l("matchMediaInit"),Zs.forEach(function(n){var i=n.queries,r=n.conditions,a,o,c,l;for(o in i)a=hi.matchMedia(i[o]).matches,a&&(c=1),a!==r[o]&&(r[o]=a,l=1);l&&(n.revert(),c&&e.push(n))}),$l("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Lf=t,$l("matchMedia"))},Om=function(){function s(e,n){this.selector=n&&vu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=PT++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Me(n)&&(r=i,i=n,n=Me);var a=this,o=function(){var l=_e,u=a.selector,h;return l&&l!==a&&l.data.push(a),r&&(a.selector=vu(r)),_e=a,h=i.apply(a,arguments),Me(h)&&a._r.push(h),_e=l,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Me?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},t.ignore=function(n){var i=_e;_e=null,n(this),_e=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ne&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof pn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Ne)&&l.revert&&l.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Zs.length;a--;)Zs[a].id===this.id&&Zs.splice(a,1)},t.revert=function(n){this.kill(n||{})},s}(),DT=function(){function s(e){this.contexts=[],this.scope=e,_e&&_e.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){xi(n)||(n={matches:n});var a=new Om(0,r||this.scope),o=a.conditions={},c,l,u;_e&&!a.selector&&(a.selector=_e.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?u=1:(c=hi.matchMedia(n[l]),c&&(Zs.indexOf(a)<0&&Zs.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener(Su):c.addEventListener("change",Su)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),gc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return ym(i)})},timeline:function(t){return new pn(t)},getTweensOf:function(t,e){return ve.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ye(t)&&(t=qn(t)[0]);var r=Ys(t||{}).get,a=n?am:om;return n==="native"&&(n=""),t&&(e?a((Dn[e]&&Dn[e].get||r)(t,e,n,i)):function(o,c,l){return a((Dn[o]&&Dn[o].get||r)(t,o,c,l))})},quickSetter:function(t,e,n){if(t=qn(t),t.length>1){var i=t.map(function(u){return wn.quickSetter(u,e,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}t=t[0]||{};var a=Dn[e],o=Ys(t),c=o.harness&&(o.harness.aliases||{})[e]||e,l=a?function(u){var h=new a;Br._pt=0,h.init(t,n?u+n:u,Br,0,[t]),h.render(1,h),Br._pt&&lh(1,Br)}:o.set(t,c);return a?l:function(u){return l(t,c,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,r=wn.to(t,er((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(c,l,u){return r.resetTo(e,c,l,u)};return a.tween=r,a},isTweening:function(t){return ve.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=$s(t.ease,to.ease)),Af(to,t||{})},config:function(t){return Af(Fn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Dn[o]&&!kn[o]&&Uo(e+" effect requires "+o+" plugin.")}),Xl[e]=function(o,c,l){return n(qn(o),$n(c||{},r),l)},a&&(pn.prototype[e]=function(o,c,l){return this.add(Xl[e](o,xi(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Jt[t]=$s(e)},parseEase:function(t,e){return arguments.length?$s(t,e):Jt},getById:function(t){return ve.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new pn(t),i,r;for(n.smoothChildTiming=Mn(t.smoothChildTiming),ve.remove(n),n._dp=0,n._time=n._tTime=ve._time,i=ve._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ne&&i.vars.onComplete===i._targets[0]))&&mi(n,i,i._start-i._delay),i=r;return mi(ve,n,0),n},context:function(t,e){return t?new Om(t,e):_e},matchMedia:function(t){return new DT(t)},matchMediaRefresh:function(){return Zs.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Su()},addEventListener:function(t,e){var n=ec[t]||(ec[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ec[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:lT,wrapYoyo:uT,distribute:pm,random:_m,snap:mm,normalize:cT,getUnit:sn,clamp:sT,splitColor:Sm,toArray:qn,selector:vu,mapRange:vm,pipe:oT,unitize:aT,interpolate:hT,shuffle:fm},install:em,effects:Xl,ticker:Ln,updateRoot:pn.updateRoot,plugins:Dn,globalTimeline:ve,core:{PropTween:bn,globals:nm,Tween:Ne,Timeline:pn,Animation:zo,getCache:Ys,_removeLinkedListItem:jc,reverting:function(){return rn},context:function(t){return t&&_e&&(_e.data.push(t),t._ctx=_e),_e},suppressOverwrites:function(t){return Ku=t}}};Tn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return gc[s]=Ne[s]});Ln.add(pn.updateRoot);Br=gc.to({},{duration:0});var LT=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},NT=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=LT(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},Zl=function(t,e){return{name:t,rawVars:1,init:function(i,r,a){a._onInit=function(o){var c,l;if(Ye(r)&&(c={},Tn(r,function(u){return c[u]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}NT(o,r)}}}},wn=gc.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,c;this.tween=n;for(a in e)c=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(c||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)rn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Zl("roundProps",xu),Zl("modifiers"),Zl("snap",mm))||gc;Ne.version=pn.version=wn.version="3.12.5";tm=1;Qu()&&io();Jt.Power0;Jt.Power1;Jt.Power2;Jt.Power3;Jt.Power4;Jt.Linear;Jt.Quad;Jt.Cubic;Jt.Quart;Jt.Quint;Jt.Strong;Jt.Elastic;Jt.Back;Jt.SteppedEase;Jt.Bounce;Jt.Sine;Jt.Expo;Jt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nf,us,qr,uh,Gs,If,hh,IT=function(){return typeof window<"u"},ji={},Fs=180/Math.PI,Yr=Math.PI/180,Nr=Math.atan2,Of=1e8,dh=/([A-Z])/g,OT=/(left|right|width|margin|padding|x)/i,FT=/[\s,\(]\S/,_i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Mu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},UT=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},kT=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},VT=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Fm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Um=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},BT=function(t,e,n){return t.style[e]=n},zT=function(t,e,n){return t.style.setProperty(e,n)},GT=function(t,e,n){return t._gsap[e]=n},HT=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},WT=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},XT=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},xe="transform",En=xe+"Origin",qT=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in ji&&r){if(this.tfm=this.tfm||{},t!=="transform")t=_i[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Vi(i,o)}):this.tfm[t]=a.x?a[t]:Vi(i,t),t===En&&(this.tfm.zOrigin=a.zOrigin);else return _i.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(xe)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(En,e,"")),t=xe}(r||e)&&this.props.push(t,e,r[t])},km=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},YT=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(dh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=hh(),(!r||!r.isStart)&&!n[xe]&&(km(n),i.zOrigin&&n[En]&&(n[En]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Vm=function(t,e){var n={target:t,props:[],revert:YT,save:qT};return t._gsap||wn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Bm,Tu=function(t,e){var n=us.createElementNS?us.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):us.createElement(t);return n&&n.style?n:us.createElement(t)},gi=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(dh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,so(e)||e,1)||""},Ff="O,Moz,ms,Ms,Webkit".split(","),so=function(t,e,n){var i=e||Gs,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Ff[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Ff[a]:"")+t},bu=function(){IT()&&window.document&&(Nf=window,us=Nf.document,qr=us.documentElement,Gs=Tu("div")||{style:{}},Tu("div"),xe=so(xe),En=xe+"Origin",Gs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Bm=!!so("perspective"),hh=wn.core.reverting,uh=1)},Kl=function s(t){var e=Tu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(qr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),qr.removeChild(e),this.style.cssText=r,a},Uf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},zm=function(t){var e;try{e=t.getBBox()}catch{e=Kl.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Kl||(e=Kl.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Uf(t,["x","cx","x1"])||0,y:+Uf(t,["y","cy","y1"])||0,width:0,height:0}:e},Gm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&zm(t))},nr=function(t,e){if(e){var n=t.style,i;e in ji&&e!==En&&(e=xe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(dh,"-$1").toLowerCase())):n.removeAttribute(e)}},hs=function(t,e,n,i,r,a){var o=new bn(t._pt,e,n,0,1,a?Um:Fm);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},kf={deg:1,rad:1,turn:1},jT={grid:1,flex:1},ys=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Gs.style,c=OT.test(e),l=t.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,d=i==="px",m=i==="%",g,_,f,p;if(i===a||!r||kf[i]||kf[a])return r;if(a!=="px"&&!d&&(r=s(t,e,n,"px")),p=t.getCTM&&Gm(t),(m||a==="%")&&(ji[e]||~e.indexOf("adius")))return g=p?t.getBBox()[c?"width":"height"]:t[u],Ce(m?r/g*h:r/100*g);if(o[c?"width":"height"]=h+(d?a:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===us||!_.appendChild)&&(_=us.body),f=_._gsap,f&&m&&f.width&&c&&f.time===Ln.time&&!f.uncache)return Ce(r/f.width*h);if(m&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=h+i,g=t[u],x?t.style[e]=x:nr(t,e)}else(m||a==="%")&&!jT[gi(_,"display")]&&(o.position=gi(t,"position")),_===t&&(o.position="static"),_.appendChild(Gs),g=Gs[u],_.removeChild(Gs),o.position="absolute";return c&&m&&(f=Ys(_),f.time=Ln.time,f.width=_[u]),Ce(d?g*r/h:g&&r?h/g*r:0)},Vi=function(t,e,n,i){var r;return uh||bu(),e in _i&&e!=="transform"&&(e=_i[e],~e.indexOf(",")&&(e=e.split(",")[0])),ji[e]&&e!=="transform"?(r=Ho(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:xc(gi(t,En))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=vc[e]&&vc[e](t,e,n)||gi(t,e)||sm(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ys(t,e,r,n)+n:r},$T=function(t,e,n,i){if(!n||n==="none"){var r=so(e,t,1),a=r&&gi(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=gi(t,"borderTopColor"))}var o=new bn(this._pt,t.style,e,0,1,Nm),c=0,l=0,u,h,d,m,g,_,f,p,x,v,M,S;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=gi(t,e)||i,_?t.style[e]=_:nr(t,e)),u=[n,i],Tm(u),n=u[0],i=u[1],d=n.match(Vr)||[],S=i.match(Vr)||[],S.length){for(;h=Vr.exec(i);)f=h[0],x=i.substring(c,h.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),f!==(_=d[l++]||"")&&(m=parseFloat(_)||0,M=_.substr((m+"").length),f.charAt(1)==="="&&(f=Xr(m,f)+M),p=parseFloat(f),v=f.substr((p+"").length),c=Vr.lastIndex-v.length,v||(v=v||Fn.units[e]||M,c===i.length&&(i+=v,o.e+=v)),M!==v&&(m=ys(t,e,_,v)||0),o._pt={_next:o._pt,p:x||l===1?x:",",s:m,c:p-m,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=e==="display"&&i==="none"?Um:Fm;return Jp.test(i)&&(o.e=0),this._pt=o,o},Vf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ZT=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Vf[n]||n,e[1]=Vf[i]||i,e.join(" ")},KT=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)o=r[l],ji[o]&&(c=1,o=o==="transformOrigin"?En:xe),nr(n,o);c&&(nr(n,xe),a&&(a.svg&&n.removeAttribute("transform"),Ho(n,1),a.uncache=1,km(i)))}},vc={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new bn(t._pt,e,n,0,0,KT);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Go=[1,0,0,1,0,0],Hm={},Wm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Bf=function(t){var e=gi(t,xe);return Wm(e)?Go:e.substr(7).match(Kp).map(Ce)},fh=function(t,e){var n=t._gsap||Ys(t),i=t.style,r=Bf(t),a,o,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Go:r):(r===Go&&!t.offsetParent&&t!==qr&&!n.svg&&(c=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(l=1,o=t.nextElementSibling,qr.appendChild(t)),r=Bf(t),c?i.display=c:nr(t,"display"),l&&(o?a.insertBefore(t,o):a?a.appendChild(t):qr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Eu=function(t,e,n,i,r,a){var o=t._gsap,c=r||fh(t,!0),l=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,m=c[0],g=c[1],_=c[2],f=c[3],p=c[4],x=c[5],v=e.split(" "),M=parseFloat(v[0])||0,S=parseFloat(v[1])||0,b,T,A,N;n?c!==Go&&(T=m*f-g*_)&&(A=M*(f/T)+S*(-_/T)+(_*x-f*p)/T,N=M*(-g/T)+S*(m/T)-(m*x-g*p)/T,M=A,S=N):(b=zm(t),M=b.x+(~v[0].indexOf("%")?M/100*b.width:M),S=b.y+(~(v[1]||v[0]).indexOf("%")?S/100*b.height:S)),i||i!==!1&&o.smooth?(p=M-l,x=S-u,o.xOffset=h+(p*m+x*_)-p,o.yOffset=d+(p*g+x*f)-x):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=S,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[En]="0px 0px",a&&(hs(a,o,"xOrigin",l,M),hs(a,o,"yOrigin",u,S),hs(a,o,"xOffset",h,o.xOffset),hs(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",M+" "+S)},Ho=function(t,e){var n=t._gsap||new Am(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",c=getComputedStyle(t),l=gi(t,En)||"0",u,h,d,m,g,_,f,p,x,v,M,S,b,T,A,N,y,E,L,k,P,F,O,V,z,H,q,j,Q,xt,X,Y;return u=h=d=_=f=p=x=v=M=0,m=g=1,n.svg=!!(t.getCTM&&Gm(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[xe]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[xe]!=="none"?c[xe]:"")),i.scale=i.rotate=i.translate="none"),T=fh(t,n.svg),n.svg&&(n.uncache?(z=t.getBBox(),l=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",V=""):V=!e&&t.getAttribute("data-svg-origin"),Eu(t,V||l,!!V||n.originIsAbsolute,n.smooth!==!1,T)),S=n.xOrigin||0,b=n.yOrigin||0,T!==Go&&(E=T[0],L=T[1],k=T[2],P=T[3],u=F=T[4],h=O=T[5],T.length===6?(m=Math.sqrt(E*E+L*L),g=Math.sqrt(P*P+k*k),_=E||L?Nr(L,E)*Fs:0,x=k||P?Nr(k,P)*Fs+_:0,x&&(g*=Math.abs(Math.cos(x*Yr))),n.svg&&(u-=S-(S*E+b*k),h-=b-(S*L+b*P))):(Y=T[6],xt=T[7],q=T[8],j=T[9],Q=T[10],X=T[11],u=T[12],h=T[13],d=T[14],A=Nr(Y,Q),f=A*Fs,A&&(N=Math.cos(-A),y=Math.sin(-A),V=F*N+q*y,z=O*N+j*y,H=Y*N+Q*y,q=F*-y+q*N,j=O*-y+j*N,Q=Y*-y+Q*N,X=xt*-y+X*N,F=V,O=z,Y=H),A=Nr(-k,Q),p=A*Fs,A&&(N=Math.cos(-A),y=Math.sin(-A),V=E*N-q*y,z=L*N-j*y,H=k*N-Q*y,X=P*y+X*N,E=V,L=z,k=H),A=Nr(L,E),_=A*Fs,A&&(N=Math.cos(A),y=Math.sin(A),V=E*N+L*y,z=F*N+O*y,L=L*N-E*y,O=O*N-F*y,E=V,F=z),f&&Math.abs(f)+Math.abs(_)>359.9&&(f=_=0,p=180-p),m=Ce(Math.sqrt(E*E+L*L+k*k)),g=Ce(Math.sqrt(O*O+Y*Y)),A=Nr(F,O),x=Math.abs(A)>2e-4?A*Fs:0,M=X?1/(X<0?-X:X):0),n.svg&&(V=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Wm(gi(t,xe)),V&&t.setAttribute("transform",V))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(m*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Ce(m),n.scaleY=Ce(g),n.rotation=Ce(_)+o,n.rotationX=Ce(f)+o,n.rotationY=Ce(p)+o,n.skewX=x+o,n.skewY=v+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[En]=xc(l)),n.xOffset=n.yOffset=0,n.force3D=Fn.force3D,n.renderTransform=n.svg?QT:Bm?Xm:JT,n.uncache=0,n},xc=function(t){return(t=t.split(" "))[0]+" "+t[1]},Jl=function(t,e,n){var i=sn(e);return Ce(parseFloat(e)+parseFloat(ys(t,"x",n+"px",i)))+i},JT=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Xm(t,e)},Ns="0deg",wo="0px",Is=") ",Xm=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,f=n.transformPerspective,p=n.force3D,x=n.target,v=n.zOrigin,M="",S=p==="auto"&&t&&t!==1||p===!0;if(v&&(h!==Ns||u!==Ns)){var b=parseFloat(u)*Yr,T=Math.sin(b),A=Math.cos(b),N;b=parseFloat(h)*Yr,N=Math.cos(b),a=Jl(x,a,T*N*-v),o=Jl(x,o,-Math.sin(b)*-v),c=Jl(x,c,A*N*-v+v)}f!==wo&&(M+="perspective("+f+Is),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(S||a!==wo||o!==wo||c!==wo)&&(M+=c!==wo||S?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Is),l!==Ns&&(M+="rotate("+l+Is),u!==Ns&&(M+="rotateY("+u+Is),h!==Ns&&(M+="rotateX("+h+Is),(d!==Ns||m!==Ns)&&(M+="skew("+d+", "+m+Is),(g!==1||_!==1)&&(M+="scale("+g+", "+_+Is),x.style[xe]=M||"translate(0, 0)"},QT=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,f=n.xOffset,p=n.yOffset,x=n.forceCSS,v=parseFloat(a),M=parseFloat(o),S,b,T,A,N;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Yr,l*=Yr,S=Math.cos(c)*h,b=Math.sin(c)*h,T=Math.sin(c-l)*-d,A=Math.cos(c-l)*d,l&&(u*=Yr,N=Math.tan(l-u),N=Math.sqrt(1+N*N),T*=N,A*=N,u&&(N=Math.tan(u),N=Math.sqrt(1+N*N),S*=N,b*=N)),S=Ce(S),b=Ce(b),T=Ce(T),A=Ce(A)):(S=h,A=d,b=T=0),(v&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(v=ys(m,"x",a,"px"),M=ys(m,"y",o,"px")),(g||_||f||p)&&(v=Ce(v+g-(g*S+_*T)+f),M=Ce(M+_-(g*b+_*A)+p)),(i||r)&&(N=m.getBBox(),v=Ce(v+i/100*N.width),M=Ce(M+r/100*N.height)),N="matrix("+S+","+b+","+T+","+A+","+v+","+M+")",m.setAttribute("transform",N),x&&(m.style[xe]=N)},tb=function(t,e,n,i,r){var a=360,o=Ye(r),c=parseFloat(r)*(o&&~r.indexOf("rad")?Fs:1),l=c-i,u=i+l+"deg",h,d;return o&&(h=r.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*Of)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*Of)%a-~~(l/a)*a)),t._pt=d=new bn(t._pt,e,n,i,l,UT),d.e=u,d.u="deg",t._props.push(n),d},zf=function(t,e){for(var n in e)t[n]=e[n];return t},eb=function(t,e,n){var i=zf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,u,h,d,m,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[xe]=e,o=Ho(n,1),nr(n,xe),n.setAttribute("transform",l)):(l=getComputedStyle(n)[xe],a[xe]=e,o=Ho(n,1),a[xe]=l);for(c in ji)l=i[c],u=o[c],l!==u&&r.indexOf(c)<0&&(m=sn(l),g=sn(u),h=m!==g?ys(n,c,l,g):parseFloat(l),d=parseFloat(u),t._pt=new bn(t._pt,o,c,h,d-h,Mu),t._pt.u=g||0,t._props.push(c));zf(o,i)};Tn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});vc[t>1?"border"+s:s]=function(o,c,l,u,h){var d,m;if(arguments.length<4)return d=a.map(function(g){return Vi(o,g,l)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},a.forEach(function(g,_){return m[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(c,m,h)}});var qm={name:"css",register:bu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,c=n.vars.startAt,l,u,h,d,m,g,_,f,p,x,v,M,S,b,T,A;uh||bu(),this.styles=this.styles||Vm(t),A=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Dn[_]&&Cm(_,e,n,i,t,r)))){if(m=typeof u,g=vc[_],m==="function"&&(u=u.call(n,i,t,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Vo(u)),g)g(this,t,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",ms.lastIndex=0,ms.test(l)||(f=sn(l),p=sn(u)),p?f!==p&&(l=ys(t,_,l,p)+p):f&&(u+=f),this.add(o,"setProperty",l,u,i,r,0,0,_),a.push(_),A.push(_,0,o[_]);else if(m!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,t,r):c[_],Ye(l)&&~l.indexOf("random(")&&(l=Vo(l)),sn(l+"")||l==="auto"||(l+=Fn.units[_]||sn(Vi(t,_))||""),(l+"").charAt(1)==="="&&(l=Vi(t,_))):l=Vi(t,_),d=parseFloat(l),x=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),_ in _i&&(_==="autoAlpha"&&(d===1&&Vi(t,"visibility")==="hidden"&&h&&(d=0),A.push("visibility",0,o.visibility),hs(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=_i[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in ji,v){if(this.styles.save(_),M||(S=t._gsap,S.renderTransform&&!e.parseTransform||Ho(t,e.parseTransform),b=e.smoothOrigin!==!1&&S.smooth,M=this._pt=new bn(this._pt,o,xe,0,1,S.renderTransform,S,0,-1),M.dep=1),_==="scale")this._pt=new bn(this._pt,S,"scaleY",S.scaleY,(x?Xr(S.scaleY,x+h):h)-S.scaleY||0,Mu),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){A.push(En,0,o[En]),u=ZT(u),S.svg?Eu(t,u,0,b,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==S.zOrigin&&hs(this,S,"zOrigin",S.zOrigin,p),hs(this,o,_,xc(l),xc(u)));continue}else if(_==="svgOrigin"){Eu(t,u,1,b,0,this);continue}else if(_ in Hm){tb(this,S,_,d,x?Xr(d,x+u):u);continue}else if(_==="smoothOrigin"){hs(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){eb(this,u,t);continue}}else _ in o||(_=so(_)||_);if(v||(h||h===0)&&(d||d===0)&&!FT.test(u)&&_ in o)f=(l+"").substr((d+"").length),h||(h=0),p=sn(u)||(_ in Fn.units?Fn.units[_]:f),f!==p&&(d=ys(t,_,l,p)),this._pt=new bn(this._pt,v?S:o,_,d,(x?Xr(d,x+h):h)-d,!v&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?VT:Mu),this._pt.u=p||0,f!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=kT);else if(_ in o)$T.call(this,t,_,l,x?x+u:u);else if(_ in t)this.add(t,_,l||t[_],x?x+u:u,i,r);else if(_!=="parseTransform"){eh(_,u);continue}v||(_ in o?A.push(_,0,o[_]):A.push(_,1,l||t[_])),a.push(_)}}T&&Im(this)},render:function(t,e){if(e.tween._time||!hh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Vi,aliases:_i,getSetter:function(t,e,n){var i=_i[e];return i&&i.indexOf(",")<0&&(e=i),e in ji&&e!==En&&(t._gsap.x||Vi(t,"x"))?n&&If===n?e==="scale"?HT:GT:(If=n||{})&&(e==="scale"?WT:XT):t.style&&!Ju(t.style[e])?BT:~e.indexOf("-")?zT:ch(t,e)},core:{_removeProperty:nr,_getMatrix:fh}};wn.utils.checkPrefix=so;wn.core.getStyleSaver=Vm;(function(s,t,e,n){var i=Tn(s+","+t+","+e,function(r){ji[r]=1});Tn(t,function(r){Fn.units[r]="deg",Hm[r]=1}),_i[i[13]]=s+","+t,Tn(n,function(r){var a=r.split(":");_i[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Fn.units[s]="px"});wn.registerPlugin(qm);var Gi=wn.registerPlugin(qm)||wn;Gi.core.Tween;const nb=(Math.sqrt(5)-1)/4,$e=(5-Math.sqrt(5))/20,Xa=s=>Math.floor(s)|0,qa=new Float64Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);function ib(s=Math.random){const t=sb(s),e=new Float64Array(t).map(a=>qa[a%32*4]),n=new Float64Array(t).map(a=>qa[a%32*4+1]),i=new Float64Array(t).map(a=>qa[a%32*4+2]),r=new Float64Array(t).map(a=>qa[a%32*4+3]);return function(o,c,l,u){let h,d,m,g,_;const f=(o+c+l+u)*nb,p=Xa(o+f),x=Xa(c+f),v=Xa(l+f),M=Xa(u+f),S=(p+x+v+M)*$e,b=p-S,T=x-S,A=v-S,N=M-S,y=o-b,E=c-T,L=l-A,k=u-N;let P=0,F=0,O=0,V=0;y>E?P++:F++,y>L?P++:O++,y>k?P++:V++,E>L?F++:O++,E>k?F++:V++,L>k?O++:V++;const z=P>=3?1:0,H=F>=3?1:0,q=O>=3?1:0,j=V>=3?1:0,Q=P>=2?1:0,xt=F>=2?1:0,X=O>=2?1:0,Y=V>=2?1:0,ct=P>=1?1:0,_t=F>=1?1:0,et=O>=1?1:0,mt=V>=1?1:0,Ot=y-z+$e,wt=E-H+$e,B=L-q+$e,ue=k-j+$e,Tt=y-Q+2*$e,J=E-xt+2*$e,tt=L-X+2*$e,Dt=k-Y+2*$e,gt=y-ct+3*$e,C=E-_t+3*$e,w=L-et+3*$e,G=k-mt+3*$e,it=y-1+4*$e,nt=E-1+4*$e,rt=L-1+4*$e,St=k-1+4*$e,ht=p&255,vt=x&255,Et=v&255,Nt=M&255;let st=.6-y*y-E*E-L*L-k*k;if(st<0)h=0;else{const at=ht+t[vt+t[Et+t[Nt]]];st*=st,h=st*st*(e[at]*y+n[at]*E+i[at]*L+r[at]*k)}let Yt=.6-Ot*Ot-wt*wt-B*B-ue*ue;if(Yt<0)d=0;else{const at=ht+z+t[vt+H+t[Et+q+t[Nt+j]]];Yt*=Yt,d=Yt*Yt*(e[at]*Ot+n[at]*wt+i[at]*B+r[at]*ue)}let Ft=.6-Tt*Tt-J*J-tt*tt-Dt*Dt;if(Ft<0)m=0;else{const at=ht+Q+t[vt+xt+t[Et+X+t[Nt+Y]]];Ft*=Ft,m=Ft*Ft*(e[at]*Tt+n[at]*J+i[at]*tt+r[at]*Dt)}let Pt=.6-gt*gt-C*C-w*w-G*G;if(Pt<0)g=0;else{const at=ht+ct+t[vt+_t+t[Et+et+t[Nt+mt]]];Pt*=Pt,g=Pt*Pt*(e[at]*gt+n[at]*C+i[at]*w+r[at]*G)}let Mt=.6-it*it-nt*nt-rt*rt-St*St;if(Mt<0)_=0;else{const at=ht+1+t[vt+1+t[Et+1+t[Nt+1]]];Mt*=Mt,_=Mt*Mt*(e[at]*it+n[at]*nt+i[at]*rt+r[at]*St)}return 27*(h+d+m+g+_)}}function sb(s){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(s()*(256-n)),r=e[n];e[n]=e[i],e[i]=r}for(let n=256;n<512;n++)e[n]=e[n-256];return e}var rb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ob={exports:{}};(function(s,t){(function(e,n){s.exports=n()})(rb,function(){return e.importState=function(i){var r=new e;return r.importState(i),r},e;function e(){return function(i){var r=0,a=0,o=0,c=1;i.length==0&&(i=[+new Date]);var l=n();r=l(" "),a=l(" "),o=l(" ");for(var u=0;u<i.length;u++)r-=l(i[u]),r<0&&(r+=1),a-=l(i[u]),a<0&&(a+=1),o-=l(i[u]),o<0&&(o+=1);l=null;var h=function(){var d=2091639*r+c*23283064365386963e-26;return r=a,a=o,o=d-(c=d|0)};return h.next=h,h.uint32=function(){return h()*4294967296},h.fract53=function(){return h()+(h()*2097152|0)*11102230246251565e-32},h.version="Alea 0.9",h.args=i,h.exportState=function(){return[r,a,o,c]},h.importState=function(d){r=+d[0]||0,a=+d[1]||0,o=+d[2]||0,c=+d[3]||0},h}(Array.prototype.slice.call(arguments))}function n(){var i=4022871197,r=function(a){a=a.toString();for(var o=0;o<a.length;o++){i+=a.charCodeAt(o);var c=.02519603282416938*i;i=c>>>0,c-=i,c*=i,i=c>>>0,c-=i,i+=c*4294967296}return(i>>>0)*23283064365386963e-26};return r.version="Mash 0.9",r}})})(ob);class Ir{constructor(t){this.v=new U,this.v.copy(t),this.value=0}sense(t,e){new U().addVectors(t,this.v).distanceTo(e.pos)<50&&(this.value=1)}}class ph{constructor(t,e,n,i,r,a,o){this.pos=new U(t,e,n),this.vel=new U,this.acc=new U,this.mass=i,this.maxSpeed=r,this.maxForce=3,this.sensors=[],this.fitness=0,this.life=a;let c=15;for(let l=0;l<c;l++)Gi.utils.mapRange(0,c,0,Math.TWO_PI,l);this.sensors.push(new Ir(new U(this.pos.x+10,this.pos.y,this.pos.z))),this.sensors.push(new Ir(new U(this.pos.x-10,this.pos.y,this.pos.z))),this.sensors.push(new Ir(new U(this.pos.x,this.pos.y+10,this.pos.z))),this.sensors.push(new Ir(new U(this.pos.x,this.pos.y-10,this.pos.z))),this.sensors.push(new Ir(new U(this.pos.x,this.pos.y,this.pos.z+10))),this.sensors.push(new Ir(new U(this.pos.x,this.pos.y,this.pos.z-10))),o&&(this.brain=o)}reproduce(){let t=this.brain.copy();return t.mutate(.1),new ph(this.pos.x,this.pos.y,this.pos.z,this.mass,this.maxSpeed,this.life,t)}eat(){for(let t=0;t<Foods.length;t++)this.pos.distanceTo(Foods[t].pos)<50&&(this.life+=.5,Foods[t].life-=.05,Foods[t].life<0&&(Foods.splice(t,1),scene.remove(objects[t]),objects.splice(t,1)))}think(t,e){let n=new U().subVectors(t.pos,this.pos),r=pp(n)/e;n.normalize();let a=[n.x,n.y,n.z,r,this.vel.x/this.maxSpeed,this.vel.y/this.maxSpeed];const o=this.brain.predictSync(a);let c=new U(o[0].value*2-1,o[1].value*2-1,o[2].value*2-1);c.multiplyScalar(o[3].value),this.pos.distanceTo(t)<100&&this.fitness++,this.steer(c)}steer(t){let e=new U().subVectors(t,this.pos);e.normalize(),e.multiplyScalar(this.maxSpeed/2),new U().subVectors(e,this.vel),this.applyForce(t)}applyForce(t){t.divideScalar(this.mass),this.acc.add(t)}update(){this.vel.add(this.acc),this.pos.add(this.vel),this.acc=new U(0,0,0)}follow(t){var e=this.pos.x*10,n=this.pos.y*10,i=this.pos.z*10,r=t(e,n,i,1),a=t(e,n,i,2);let o=new U(Math.cos(r*Math.PI)*Math.sin(a*Math.PI),Math.sin(r*Math.PI)*Math.cos(a*Math.PI),Math.cos(r*Math.PI));o.normalize(),o.divideScalar(20),this.applyForce(o)}attract(t,e,n){let i=new U(t,e,n),r=new U().subVectors(i,this.pos),a=this.pos.distanceTo(i);a<100&&(a=100),a>1e3&&(a=500);let c=10*(this.mass*20)/(a*a);r.normalize(),r.multiplyScalar(c),this.steer(r)}repel(t,e,n){let i=new U(t,e,n),r=new U().subVectors(this.pos,i),a=this.pos.distanceTo(i);a<100&&(a=100),a>1e3&&(a=500);let c=10*(this.mass*20)/(a*a);r.normalize(),r.multiplyScalar(c),this.steer(r)}boundaries(t){let e=new U;this.pos.x>t&&e.set(-this.maxSpeed,this.vel.y,this.vel.z),this.pos.y>t&&e.set(this.vel.x,-this.maxSpeed,this.vel.z),this.pos.z>t&&e.set(this.vel.x,this.vel.y,-this.maxSpeed),this.pos.x<0&&e.set(this.maxSpeed,this.vel.y,this.vel.z),this.pos.y<0&&e.set(this.vel.x,this.maxSpeed,this.vel.z),this.pos.z<0&&e.set(this.vel.x,this.vel.y,this.maxSpeed),this.applyForce(e)}}class ab{constructor(t,e,n,i,r){this.pos=new U(t,e,n),this.type=i,this.life=r}}const Gf={type:"change"},Ql={type:"start"},Hf={type:"end"},Ya=new Xu,Wf=new ki,cb=Math.cos(70*T0.DEG2RAD);class lb extends lr{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mr.ROTATE,MIDDLE:mr.DOLLY,RIGHT:mr.PAN},this.touches={ONE:_r.ROTATE,TWO:_r.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",Et),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Et),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Gf),n.update(),r=i.NONE},this.update=function(){const I=new U,ut=new qi().setFromUnitVectors(t.up,new U(0,1,0)),pt=ut.clone().invert(),Ct=new U,D=new qi,lt=new U,ot=2*Math.PI;return function(Rt=null){const Qt=n.object.position;I.copy(Qt).sub(n.target),I.applyQuaternion(ut),o.setFromVector3(I),n.autoRotate&&r===i.NONE&&L(y(Rt)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let $t=n.minAzimuthAngle,re=n.maxAzimuthAngle;isFinite($t)&&isFinite(re)&&($t<-Math.PI?$t+=ot:$t>Math.PI&&($t-=ot),re<-Math.PI?re+=ot:re>Math.PI&&(re-=ot),$t<=re?o.theta=Math.max($t,Math.min(re,o.theta)):o.theta=o.theta>($t+re)/2?Math.max($t,o.theta):Math.min(re,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&b||n.object.isOrthographicCamera?o.radius=q(o.radius):o.radius=q(o.radius*l),I.setFromSpherical(o),I.applyQuaternion(pt),Qt.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let je=!1;if(n.zoomToCursor&&b){let te=null;if(n.object.isPerspectiveCamera){const be=I.length();te=q(be*l);const cn=be-te;n.object.position.addScaledVector(M,cn),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const be=new U(S.x,S.y,0);be.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),je=!0;const cn=new U(S.x,S.y,0);cn.unproject(n.object),n.object.position.sub(cn).add(be),n.object.updateMatrixWorld(),te=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;te!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(te).add(n.object.position):(Ya.origin.copy(n.object.position),Ya.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ya.direction))<cb?t.lookAt(n.target):(Wf.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ya.intersectPlane(Wf,n.target))))}else n.object.isOrthographicCamera&&(je=l!==1,je&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix()));return l=1,b=!1,je||Ct.distanceToSquared(n.object.position)>a||8*(1-D.dot(n.object.quaternion))>a||lt.distanceToSquared(n.target)>0?(n.dispatchEvent(Gf),Ct.copy(n.object.position),D.copy(n.object.quaternion),lt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Yt),n.domElement.removeEventListener("pointerdown",C),n.domElement.removeEventListener("pointercancel",G),n.domElement.removeEventListener("wheel",rt),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",G),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Et),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new Ef,c=new Ef;let l=1;const u=new U,h=new Lt,d=new Lt,m=new Lt,g=new Lt,_=new Lt,f=new Lt,p=new Lt,x=new Lt,v=new Lt,M=new U,S=new Lt;let b=!1;const T=[],A={};let N=!1;function y(I){return I!==null?2*Math.PI/60*n.autoRotateSpeed*I:2*Math.PI/60/60*n.autoRotateSpeed}function E(I){const ut=Math.abs(I*.01);return Math.pow(.95,n.zoomSpeed*ut)}function L(I){c.theta-=I}function k(I){c.phi-=I}const P=function(){const I=new U;return function(pt,Ct){I.setFromMatrixColumn(Ct,0),I.multiplyScalar(-pt),u.add(I)}}(),F=function(){const I=new U;return function(pt,Ct){n.screenSpacePanning===!0?I.setFromMatrixColumn(Ct,1):(I.setFromMatrixColumn(Ct,0),I.crossVectors(n.object.up,I)),I.multiplyScalar(pt),u.add(I)}}(),O=function(){const I=new U;return function(pt,Ct){const D=n.domElement;if(n.object.isPerspectiveCamera){const lt=n.object.position;I.copy(lt).sub(n.target);let ot=I.length();ot*=Math.tan(n.object.fov/2*Math.PI/180),P(2*pt*ot/D.clientHeight,n.object.matrix),F(2*Ct*ot/D.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(pt*(n.object.right-n.object.left)/n.object.zoom/D.clientWidth,n.object.matrix),F(Ct*(n.object.top-n.object.bottom)/n.object.zoom/D.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(I,ut){if(!n.zoomToCursor)return;b=!0;const pt=n.domElement.getBoundingClientRect(),Ct=I-pt.left,D=ut-pt.top,lt=pt.width,ot=pt.height;S.x=Ct/lt*2-1,S.y=-(D/ot)*2+1,M.set(S.x,S.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(I){return Math.max(n.minDistance,Math.min(n.maxDistance,I))}function j(I){h.set(I.clientX,I.clientY)}function Q(I){H(I.clientX,I.clientX),p.set(I.clientX,I.clientY)}function xt(I){g.set(I.clientX,I.clientY)}function X(I){d.set(I.clientX,I.clientY),m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ut=n.domElement;L(2*Math.PI*m.x/ut.clientHeight),k(2*Math.PI*m.y/ut.clientHeight),h.copy(d),n.update()}function Y(I){x.set(I.clientX,I.clientY),v.subVectors(x,p),v.y>0?V(E(v.y)):v.y<0&&z(E(v.y)),p.copy(x),n.update()}function ct(I){_.set(I.clientX,I.clientY),f.subVectors(_,g).multiplyScalar(n.panSpeed),O(f.x,f.y),g.copy(_),n.update()}function _t(I){H(I.clientX,I.clientY),I.deltaY<0?z(E(I.deltaY)):I.deltaY>0&&V(E(I.deltaY)),n.update()}function et(I){let ut=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),ut=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),ut=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),ut=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),ut=!0;break}ut&&(I.preventDefault(),n.update())}function mt(I){if(T.length===1)h.set(I.pageX,I.pageY);else{const ut=at(I),pt=.5*(I.pageX+ut.x),Ct=.5*(I.pageY+ut.y);h.set(pt,Ct)}}function Ot(I){if(T.length===1)g.set(I.pageX,I.pageY);else{const ut=at(I),pt=.5*(I.pageX+ut.x),Ct=.5*(I.pageY+ut.y);g.set(pt,Ct)}}function wt(I){const ut=at(I),pt=I.pageX-ut.x,Ct=I.pageY-ut.y,D=Math.sqrt(pt*pt+Ct*Ct);p.set(0,D)}function B(I){n.enableZoom&&wt(I),n.enablePan&&Ot(I)}function ue(I){n.enableZoom&&wt(I),n.enableRotate&&mt(I)}function Tt(I){if(T.length==1)d.set(I.pageX,I.pageY);else{const pt=at(I),Ct=.5*(I.pageX+pt.x),D=.5*(I.pageY+pt.y);d.set(Ct,D)}m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ut=n.domElement;L(2*Math.PI*m.x/ut.clientHeight),k(2*Math.PI*m.y/ut.clientHeight),h.copy(d)}function J(I){if(T.length===1)_.set(I.pageX,I.pageY);else{const ut=at(I),pt=.5*(I.pageX+ut.x),Ct=.5*(I.pageY+ut.y);_.set(pt,Ct)}f.subVectors(_,g).multiplyScalar(n.panSpeed),O(f.x,f.y),g.copy(_)}function tt(I){const ut=at(I),pt=I.pageX-ut.x,Ct=I.pageY-ut.y,D=Math.sqrt(pt*pt+Ct*Ct);x.set(0,D),v.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),V(v.y),p.copy(x);const lt=(I.pageX+ut.x)*.5,ot=(I.pageY+ut.y)*.5;H(lt,ot)}function Dt(I){n.enableZoom&&tt(I),n.enablePan&&J(I)}function gt(I){n.enableZoom&&tt(I),n.enableRotate&&Tt(I)}function C(I){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",w),n.domElement.addEventListener("pointerup",G)),Ft(I),I.pointerType==="touch"?Nt(I):it(I))}function w(I){n.enabled!==!1&&(I.pointerType==="touch"?st(I):nt(I))}function G(I){switch(Pt(I),T.length){case 0:n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",G),n.dispatchEvent(Hf),r=i.NONE;break;case 1:const ut=T[0],pt=A[ut];Nt({pointerId:ut,pageX:pt.x,pageY:pt.y});break}}function it(I){let ut;switch(I.button){case 0:ut=n.mouseButtons.LEFT;break;case 1:ut=n.mouseButtons.MIDDLE;break;case 2:ut=n.mouseButtons.RIGHT;break;default:ut=-1}switch(ut){case mr.DOLLY:if(n.enableZoom===!1)return;Q(I),r=i.DOLLY;break;case mr.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;xt(I),r=i.PAN}else{if(n.enableRotate===!1)return;j(I),r=i.ROTATE}break;case mr.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;j(I),r=i.ROTATE}else{if(n.enablePan===!1)return;xt(I),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ql)}function nt(I){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;X(I);break;case i.DOLLY:if(n.enableZoom===!1)return;Y(I);break;case i.PAN:if(n.enablePan===!1)return;ct(I);break}}function rt(I){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(I.preventDefault(),n.dispatchEvent(Ql),_t(St(I)),n.dispatchEvent(Hf))}function St(I){const ut=I.deltaMode,pt={clientX:I.clientX,clientY:I.clientY,deltaY:I.deltaY};switch(ut){case 1:pt.deltaY*=16;break;case 2:pt.deltaY*=100;break}return I.ctrlKey&&!N&&(pt.deltaY*=10),pt}function ht(I){I.key==="Control"&&(N=!0,n.domElement.getRootNode().addEventListener("keyup",vt,{passive:!0,capture:!0}))}function vt(I){I.key==="Control"&&(N=!1,n.domElement.getRootNode().removeEventListener("keyup",vt,{passive:!0,capture:!0}))}function Et(I){n.enabled===!1||n.enablePan===!1||et(I)}function Nt(I){switch(Mt(I),T.length){case 1:switch(n.touches.ONE){case _r.ROTATE:if(n.enableRotate===!1)return;mt(I),r=i.TOUCH_ROTATE;break;case _r.PAN:if(n.enablePan===!1)return;Ot(I),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case _r.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(I),r=i.TOUCH_DOLLY_PAN;break;case _r.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ue(I),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ql)}function st(I){switch(Mt(I),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Tt(I),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;J(I),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Dt(I),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;gt(I),n.update();break;default:r=i.NONE}}function Yt(I){n.enabled!==!1&&I.preventDefault()}function Ft(I){T.push(I.pointerId)}function Pt(I){delete A[I.pointerId];for(let ut=0;ut<T.length;ut++)if(T[ut]==I.pointerId){T.splice(ut,1);return}}function Mt(I){let ut=A[I.pointerId];ut===void 0&&(ut=new Lt,A[I.pointerId]=ut),ut.set(I.pageX,I.pageY)}function at(I){const ut=I.pointerId===T[0]?T[1]:T[0];return A[ut]}n.domElement.addEventListener("contextmenu",Yt),n.domElement.addEventListener("pointerdown",C),n.domElement.addEventListener("pointercancel",G),n.domElement.addEventListener("wheel",rt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ht,{passive:!0,capture:!0}),this.update()}}const ub={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Kc{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const hb=new ju(-1,1,1,-1,0,1);class db extends bi{constructor(){super(),this.setAttribute("position",new Yn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yn([0,2,0,0,2,0],2))}}const fb=new db;class pb{constructor(t){this._mesh=new Nn(fb,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,hb)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class mb extends Kc{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof oi?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Up.clone(t.uniforms),this.material=new oi({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new pb(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xf extends Kc{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class _b extends Kc{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class gb{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Lt);this._width=n.width,this._height=n.height,e=new vs(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kr}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mb(ub),this.copyPass.material.blending=Hi,this.clock=new BM}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Xf!==void 0&&(a instanceof Xf?n=!0:a instanceof _b&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class vb extends Kc{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Kt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const Wt=class Wt extends We{constructor(e,n){super();Kn(this,"advance",function(){const e=new Pe;return function(){this.targetObject.updateMatrixWorld(),e.copy(this.targetObject.matrixWorld),this.advanceWithTransform(e),this.updateUniforms()}}());Kn(this,"advanceGeometry",function(){return function(n,i){const r=this.currentEnd+1>=this.length?0:this.currentEnd+1;if(i?this.updateNodePositionsFromTransformMatrix(r,i):this.updateNodePositionsFromOrientationTangent(r,n.position,n.tangent),this.currentLength>=1&&(this.connectNodes(this.currentEnd,r),this.currentLength>=this.length)){const a=this.currentEnd+1>=this.length?0:this.currentEnd+1;this.disconnectNodes(a)}this.currentLength<this.length&&this.currentLength++,this.currentEnd++,this.currentEnd>=this.length&&(this.currentEnd=0),this.currentLength>=1&&(this.currentLength<this.length?this.geometry.setDrawRange(0,(this.currentLength-1)*this.FaceIndicesPerNode):this.geometry.setDrawRange(0,this.currentLength*this.FaceIndicesPerNode)),this.updateNodeID(this.currentEnd,this.currentNodeID),this.currentNodeID++}}());Kn(this,"updateHead",function(){const e=new Pe;return function(){this.currentEnd<0||(this.targetObject.updateMatrixWorld(),e.copy(this.targetObject.matrixWorld),this.updateNodePositionsFromTransformMatrix(this.currentEnd,e))}}());Kn(this,"updateNodePositionsFromOrientationTangent",function(){const e=new qi,n=new U,i=[];for(let r=0;r<Wt.MaxHeadVertices;r++){const a=new U;i.push(a)}return function(a,o,c){const l=this.geometry.getAttribute("position");this.updateNodeCenter(a,o),n.copy(o),n.sub(Wt.LocalHeadOrigin),e.setFromUnitVectors(Wt.LocalOrientationTangent,c);for(let u=0;u<this.localHeadGeometry.length;u++){const h=i[u];h.copy(this.localHeadGeometry[u]),h.applyQuaternion(e),h.add(n)}for(let u=0;u<this.localHeadGeometry.length;u++){const h=(this.VerticesPerNode*a+u)*Wt.PositionComponentCount,d=i[u];l.array[h]=d.x,l.array[h+1]=d.y,l.array[h+2]=d.z}l.needsUpdate=!0}}());Kn(this,"updateNodePositionsFromTransformMatrix",function(){const e=new Xt,n=new qi,i=new U,r=new U,a=new U,o=new U,c=[];for(let u=0;u<Wt.MaxHeadVertices;u++){const h=new U;c.push(h)}function l(u,h){const d=h.elements;u.set(d[0],d[1],d[2],d[4],d[5],d[6],d[8],d[9],d[10])}return function(h,d){const m=this.geometry.getAttribute("position");i.set(0,0,0),i.applyMatrix4(d),this.updateNodeCenter(h,i);for(let g=0;g<this.localHeadGeometry.length;g++)c[g].copy(this.localHeadGeometry[g]);for(let g=0;g<this.localHeadGeometry.length;g++)c[g].applyMatrix4(d);if(this.lastNodeCenter&&this.orientToMovement&&(l(e,d),a.set(0,0,-1),a.applyMatrix3(e),o.copy(this.currentNodeCenter),o.sub(this.lastNodeCenter),o.normalize(),o.lengthSq()<=1e-4&&this.lastOrientationDir&&o.copy(this.lastOrientationDir),o.lengthSq()>1e-4)){this.lastOrientationDir||(this.lastOrientationDir=new U),n.setFromUnitVectors(a,o),r.copy(this.currentNodeCenter);for(let g=0;g<this.localHeadGeometry.length;g++){const _=c[g];_.sub(r),_.applyQuaternion(n),_.add(r)}}for(let g=0;g<this.localHeadGeometry.length;g++){const _=(this.VerticesPerNode*h+g)*Wt.PositionComponentCount,f=c[g];m.array[_]=f.x,m.array[_+1]=f.y,m.array[_+2]=f.z}m.needsUpdate=!0,m.updateRange.offset=h*this.VerticesPerNode*Wt.PositionComponentCount,m.updateRange.count=this.VerticesPerNode*Wt.PositionComponentCount}}());Kn(this,"connectNodes",function(){const e={attribute:null,offset:0,count:-1};return function(i,r){const a=this.geometry.getIndex();for(let o=0;o<this.localHeadGeometry.length-1;o++){const c=this.VerticesPerNode*i+o,l=this.VerticesPerNode*r+o,u=(i*this.FacesPerNode+o*Wt.FacesPerQuad)*Wt.IndicesPerFace;a.array[u]=c,a.array[u+1]=l,a.array[u+2]=c+1,a.array[u+3]=l,a.array[u+4]=l+1,a.array[u+5]=c+1}return a.needsUpdate=!0,a.updateRange.count=-1,e.attribute=a,e.offset=i*this.FacesPerNode*Wt.IndicesPerFace,e.count=this.FacesPerNode*Wt.IndicesPerFace,e}}());Kn(this,"disconnectNodes",function(){const e={attribute:null,offset:0,count:-1};return function(i){const r=this.geometry.getIndex();for(let a=0;a<this.localHeadGeometry.length-1;a++){const o=(i*this.FacesPerNode+a*Wt.FacesPerQuad)*Wt.IndicesPerFace;r.array[o]=0,r.array[o+1]=0,r.array[o+2]=0,r.array[o+3]=0,r.array[o+4]=0,r.array[o+5]=0}return r.needsUpdate=!0,r.updateRange.count=-1,e.attribute=r,e.offset=i*this.FacesPerNode*Wt.IndicesPerFace,e.count=this.FacesPerNode*Wt.IndicesPerFace,e}}());this.active=!1,this.orientToMovement=!1,n&&(this.orientToMovement=!0),this.scene=e,this.geometry=null,this.mesh=null,this.nodeCenters=null,this.lastNodeCenter=null,this.currentNodeCenter=null,this.lastOrientationDir=null,this.nodeIDs=null,this.currentLength=0,this.currentEnd=0,this.currentNodeID=0,this.advanceFrequency=60,this.advancePeriod=1/this.advanceFrequency,this.lastAdvanceTime=0,this.paused=!1,this.pauseAdvanceUpdateTimeDiff=0}setAdvanceFrequency(e){this.advanceFrequency=e,this.advancePeriod=1/this.advanceFrequency}initialize(e,n,i,r,a,o){this.deactivate(),this.destroyMesh(),this.length=n>0?n+1:0,this.dragTexture=i?1:0,this.targetObject=o,this.initializeLocalHeadGeometry(r,a),this.nodeIDs=[],this.nodeCenters=[];for(let c=0;c<this.length;c++)this.nodeIDs[c]=-1,this.nodeCenters[c]=new U;this.material=e,this.initializeGeometry(),this.initializeMesh(),this.material.uniforms.trailLength.value=0,this.material.uniforms.minID.value=0,this.material.uniforms.maxID.value=0,this.material.uniforms.dragTexture.value=this.dragTexture,this.material.uniforms.maxTrailLength.value=this.length,this.material.uniforms.verticesPerNode.value=this.VerticesPerNode,this.material.uniforms.textureTileFactor.value=new Lt(1,1),this.reset()}initializeLocalHeadGeometry(e,n){if(this.localHeadGeometry=[],!n)halfWidth=e||1,halfWidth=halfWidth/2,this.localHeadGeometry.push(new U(-halfWidth,0,0)),this.localHeadGeometry.push(new U(halfWidth,0,0)),this.VerticesPerNode=2;else{this.VerticesPerNode=0;for(let i=0;i<n.length&&i<Wt.MaxHeadVertices;i++){const r=n[i];if(r&&r instanceof U){const a=new U;a.copy(r),this.localHeadGeometry.push(a),this.VerticesPerNode++}}}this.FacesPerNode=(this.VerticesPerNode-1)*2,this.FaceIndicesPerNode=this.FacesPerNode*3}initializeGeometry(){this.vertexCount=this.length*this.VerticesPerNode,this.faceCount=this.length*this.FacesPerNode;const e=new bi,n=new Float32Array(this.vertexCount),i=new Float32Array(this.vertexCount*this.VerticesPerNode),r=new Float32Array(this.vertexCount*Wt.PositionComponentCount),a=new Float32Array(this.vertexCount*Wt.PositionComponentCount),o=new Float32Array(this.vertexCount*Wt.UVComponentCount),c=new Uint32Array(this.faceCount*Wt.IndicesPerFace),l=new nn(n,1);l.dynamic=!0,e.setAttribute("nodeID",l);const u=new nn(i,1);u.dynamic=!0,e.setAttribute("nodeVertexID",u);const h=new nn(a,Wt.PositionComponentCount);h.dynamic=!0,e.setAttribute("nodeCenter",h);const d=new nn(r,Wt.PositionComponentCount);d.dynamic=!0,e.setAttribute("position",d);const m=new nn(o,Wt.UVComponentCount);m.dynamic=!0,e.setAttribute("uv",m);const g=new nn(c,1);g.dynamic=!0,e.setIndex(g),this.geometry=e}zeroVertices(){const e=this.geometry.getAttribute("position");for(let n=0;n<this.vertexCount;n++){const i=n*3;e.array[i]=0,e.array[i+1]=0,e.array[i+2]=0}e.needsUpdate=!0,e.updateRange.count=-1}zeroIndices(){const e=this.geometry.getIndex();for(let n=0;n<this.faceCount;n++){const i=n*3;e.array[i]=0,e.array[i+1]=0,e.array[i+2]=0}e.needsUpdate=!0,e.updateRange.count=-1}formInitialFaces(){this.zeroIndices();const e=this.geometry.getIndex();for(let n=0;n<this.length-1;n++)this.connectNodes(n,n+1);e.needsUpdate=!0,e.updateRange.count=-1}initializeMesh(){this.mesh=new Nn(this.geometry,this.material),this.mesh.dynamic=!0,this.mesh.matrixAutoUpdate=!1}destroyMesh(){this.mesh&&(this.scene.remove(this.mesh),this.mesh=null)}reset(){this.currentLength=0,this.currentEnd=-1,this.lastNodeCenter=null,this.currentNodeCenter=null,this.lastOrientationDir=null,this.currentNodeID=0,this.formInitialFaces(),this.zeroVertices(),this.geometry.setDrawRange(0,0)}updateUniforms(){this.currentLength<this.length?this.material.uniforms.minID.value=0:this.material.uniforms.minID.value=this.currentNodeID-this.length,this.material.uniforms.maxID.value=this.currentNodeID,this.material.uniforms.trailLength.value=this.currentLength,this.material.uniforms.maxTrailLength.value=this.length,this.material.uniforms.verticesPerNode.value=this.VerticesPerNode}advanceWithPositionAndOrientation(e,n){this.advanceGeometry({position:e,tangent:n},null)}advanceWithTransform(e){this.advanceGeometry(null,e)}currentTime(){return performance.now()/1e3}pause(){this.paused||(this.paused=!0,this.pauseAdvanceUpdateTimeDiff=this.currentTime()-this.lastAdvanceTime)}resume(){this.paused&&(this.paused=!1,this.lastAdvanceTime=this.currentTime()-this.pauseAdvanceUpdateTimeDiff)}update(){if(!this.paused){const e=this.currentTime();this.lastAdvanceTime||(this.lastAdvanceTime=e),e-this.lastAdvanceTime>this.advancePeriod?(this.advance(),this.lastAdvanceTime=e):this.updateHead()}}updateNodeID(e,n){this.nodeIDs[e]=n;const i=this.geometry.getAttribute("nodeID"),r=this.geometry.getAttribute("nodeVertexID");for(let a=0;a<this.VerticesPerNode;a++){const o=e*this.VerticesPerNode+a;i.array[o]=n,r.array[o]=a}i.needsUpdate=!0,r.needsUpdate=!0,i.updateRange.offset=e*this.VerticesPerNode,i.updateRange.count=this.VerticesPerNode,r.updateRange.offset=e*this.VerticesPerNode,r.updateRange.count=this.VerticesPerNode}updateNodeCenter(e,n){this.lastNodeCenter=this.currentNodeCenter,this.currentNodeCenter=this.nodeCenters[e],this.currentNodeCenter.copy(n);const i=this.geometry.getAttribute("nodeCenter");for(let r=0;r<this.VerticesPerNode;r++){const a=(e*this.VerticesPerNode+r)*3;i.array[a]=n.x,i.array[a+1]=n.y,i.array[a+2]=n.z}i.needsUpdate=!0,i.updateRange.offset=e*this.VerticesPerNode*Wt.PositionComponentCount,i.updateRange.count=this.VerticesPerNode*Wt.PositionComponentCount}deactivate(){this.isActive&&(this.scene.remove(this.mesh),this.isActive=!1)}activate(){this.isActive||(this.scene.add(this.mesh),this.isActive=!0)}static createMaterial(e,n,i){return i=i||{},i.trailLength={type:"f",value:null},i.verticesPerNode={type:"f",value:null},i.minID={type:"f",value:null},i.maxID={type:"f",value:null},i.dragTexture={type:"f",value:null},i.maxTrailLength={type:"f",value:null},i.textureTileFactor={type:"v2",value:null},i.headColor={type:"v4",value:new Ie},i.tailColor={type:"v4",value:new Ie},e=e||Wt.Shader.BaseVertexShader,n=n||Wt.Shader.BaseFragmentShader,new oi({uniforms:i,vertexShader:e,fragmentShader:n,transparent:!0,alphaTest:.5,blending:_p,blendSrc:sc,blendDst:rc,blendEquation:as,depthTest:!0,depthWrite:!1,side:fi})}static createBaseMaterial(e){return Wt.createMaterial(Wt.Shader.BaseVertexShader,Wt.Shader.BaseFragmentShader,e)}static createTexturedMaterial(e){return e={},e.trailTexture={type:"t",value:null},Wt.createMaterial(Wt.Shader.TexturedVertexShader,Wt.Shader.TexturedFragmentShader,e)}static get MaxHeadVertices(){return 128}static get LocalOrientationTangent(){return _LocalOrientationTangent}static get LocalHeadOrigin(){return _LocalHeadOrigin}static get PositionComponentCount(){return 3}static get UVComponentCount(){return 2}static get IndicesPerFace(){return 3}static get FacesPerQuad(){return 2}};Kn(Wt,"_LocalOrientationTangent",new U(1,0,0)),Kn(Wt,"_LocalHeadOrigin",new U(0,0,0)),Kn(Wt,"Shader",{get BaseVertexVars(){return["attribute float nodeID;","attribute float nodeVertexID;","attribute vec3 nodeCenter;","uniform float minID;","uniform float maxID;","uniform float trailLength;","uniform float maxTrailLength;","uniform float verticesPerNode;","uniform vec2 textureTileFactor;","uniform vec4 headColor;","uniform vec4 tailColor;","varying vec4 vColor;"].join(`
`)},get TexturedVertexVars(){return[this.BaseVertexVars,"varying vec2 vUV;","uniform float dragTexture;"].join(`
`)},BaseFragmentVars:["varying vec4 vColor;","uniform sampler2D trailTexture;"].join(`
`),get TexturedFragmentVars(){return[this.BaseFragmentVars,"varying vec2 vUV;"].join(`
`)},get VertexShaderCore(){return["float fraction = (maxID - nodeID) / (maxID - minID);","vColor = (1.0 - fraction) * headColor + fraction * tailColor;","vec4 realPosition = vec4((1.0 - fraction) * position.xyz + fraction * nodeCenter.xyz, 1.0); "].join(`
`)},get BaseVertexShader(){return[this.BaseVertexVars,"void main() { ",this.VertexShaderCore,"gl_Position = projectionMatrix * viewMatrix * realPosition;","}"].join(`
`)},get BaseFragmentShader(){return[this.BaseFragmentVars,"void main() { ","gl_FragColor = vColor;","}"].join(`
`)},get TexturedVertexShader(){return[this.TexturedVertexVars,"void main() { ",this.VertexShaderCore,"float s = 0.0;","float t = 0.0;","if (dragTexture == 1.0) { ","   s = fraction *  textureTileFactor.s; ","     t = (nodeVertexID / verticesPerNode) * textureTileFactor.t;","} else { ","    s = nodeID / maxTrailLength * textureTileFactor.s;","     t = (nodeVertexID / verticesPerNode) * textureTileFactor.t;","}","vUV = vec2(s, t); ","gl_Position = projectionMatrix * viewMatrix * realPosition;","}"].join(`
`)},get TexturedFragmentShader(){return[this.TexturedFragmentVars,"void main() { ","vec4 textureColor = texture2D(trailTexture, vUV);","gl_FragColor = vColor * textureColor;","}"].join(`
`)}});let yc=Wt;const Ym="14.7.77",qf=(s,t,e)=>({endTime:t,insertTime:e,type:"exponentialRampToValue",value:s}),Yf=(s,t,e)=>({endTime:t,insertTime:e,type:"linearRampToValue",value:s}),wu=(s,t)=>({startTime:t,type:"setValue",value:s}),jm=(s,t,e)=>({duration:e,startTime:t,type:"setValueCurve",values:s}),$m=(s,t,{startTime:e,target:n,timeConstant:i})=>n+(t-n)*Math.exp((e-s)/i),zr=s=>s.type==="exponentialRampToValue",Sc=s=>s.type==="linearRampToValue",os=s=>zr(s)||Sc(s),mh=s=>s.type==="setValue",Ui=s=>s.type==="setValueCurve",Mc=(s,t,e,n)=>{const i=s[t];return i===void 0?n:os(i)||mh(i)?i.value:Ui(i)?i.values[i.values.length-1]:$m(e,Mc(s,t-1,i.startTime,n),i)},jf=(s,t,e,n,i)=>e===void 0?[n.insertTime,i]:os(e)?[e.endTime,e.value]:mh(e)?[e.startTime,e.value]:Ui(e)?[e.startTime+e.duration,e.values[e.values.length-1]]:[e.startTime,Mc(s,t-1,e.startTime,i)],Au=s=>s.type==="cancelAndHold",Cu=s=>s.type==="cancelScheduledValues",rs=s=>Au(s)||Cu(s)?s.cancelTime:zr(s)||Sc(s)?s.endTime:s.startTime,$f=(s,t,e,{endTime:n,value:i})=>e===i?i:0<e&&0<i||e<0&&i<0?e*(i/e)**((s-t)/(n-t)):0,Zf=(s,t,e,{endTime:n,value:i})=>e+(s-t)/(n-t)*(i-e),xb=(s,t)=>{const e=Math.floor(t),n=Math.ceil(t);return e===n?s[e]:(1-(t-e))*s[e]+(1-(n-t))*s[n]},yb=(s,{duration:t,startTime:e,values:n})=>{const i=(s-e)/t*(n.length-1);return xb(n,i)},ja=s=>s.type==="setTarget";class Sb{constructor(t){this._automationEvents=[],this._currenTime=0,this._defaultValue=t}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(t){const e=rs(t);if(Au(t)||Cu(t)){const n=this._automationEvents.findIndex(r=>Cu(t)&&Ui(r)?r.startTime+r.duration>=e:rs(r)>=e),i=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),Au(t)){const r=this._automationEvents[this._automationEvents.length-1];if(i!==void 0&&os(i)){if(r!==void 0&&ja(r))throw new Error("The internal list is malformed.");const a=r===void 0?i.insertTime:Ui(r)?r.startTime+r.duration:rs(r),o=r===void 0?this._defaultValue:Ui(r)?r.values[r.values.length-1]:r.value,c=zr(i)?$f(e,a,o,i):Zf(e,a,o,i),l=zr(i)?qf(c,e,this._currenTime):Yf(c,e,this._currenTime);this._automationEvents.push(l)}if(r!==void 0&&ja(r)&&this._automationEvents.push(wu(this.getValue(e),e)),r!==void 0&&Ui(r)&&r.startTime+r.duration>e){const a=e-r.startTime,o=(r.values.length-1)/r.duration,c=Math.max(2,1+Math.ceil(a*o)),l=a/(c-1)*o,u=r.values.slice(0,c);if(l<1)for(let h=1;h<c;h+=1){const d=l*h%1;u[h]=r.values[h-1]*(1-d)+r.values[h]*d}this._automationEvents[this._automationEvents.length-1]=jm(u,r.startTime,a)}}}else{const n=this._automationEvents.findIndex(a=>rs(a)>e),i=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(i!==void 0&&Ui(i)&&rs(i)+i.duration>e)return!1;const r=zr(t)?qf(t.value,t.endTime,this._currenTime):Sc(t)?Yf(t.value,e,this._currenTime):t;if(n===-1)this._automationEvents.push(r);else{if(Ui(t)&&e+t.duration>rs(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,r)}}return!0}flush(t){const e=this._automationEvents.findIndex(n=>rs(n)>t);if(e>1){const n=this._automationEvents.slice(e-1),i=n[0];ja(i)&&n.unshift(wu(Mc(this._automationEvents,e-2,i.startTime,this._defaultValue),i.startTime)),this._automationEvents=n}}getValue(t){if(this._automationEvents.length===0)return this._defaultValue;const e=this._automationEvents.findIndex(a=>rs(a)>t),n=this._automationEvents[e],i=(e===-1?this._automationEvents.length:e)-1,r=this._automationEvents[i];if(r!==void 0&&ja(r)&&(n===void 0||!os(n)||n.insertTime>t))return $m(t,Mc(this._automationEvents,i-1,r.startTime,this._defaultValue),r);if(r!==void 0&&mh(r)&&(n===void 0||!os(n)))return r.value;if(r!==void 0&&Ui(r)&&(n===void 0||!os(n)||r.startTime+r.duration>t))return t<r.startTime+r.duration?yb(t,r):r.values[r.values.length-1];if(r!==void 0&&os(r)&&(n===void 0||!os(n)))return r.value;if(n!==void 0&&zr(n)){const[a,o]=jf(this._automationEvents,i,r,n,this._defaultValue);return $f(t,a,o,n)}if(n!==void 0&&Sc(n)){const[a,o]=jf(this._automationEvents,i,r,n,this._defaultValue);return Zf(t,a,o,n)}return this._defaultValue}}const Mb=s=>({cancelTime:s,type:"cancelAndHold"}),Tb=s=>({cancelTime:s,type:"cancelScheduledValues"}),bb=(s,t)=>({endTime:t,type:"exponentialRampToValue",value:s}),Eb=(s,t)=>({endTime:t,type:"linearRampToValue",value:s}),wb=(s,t,e)=>({startTime:t,target:s,timeConstant:e,type:"setTarget"}),Ab=()=>new DOMException("","AbortError"),Cb=s=>(t,e,[n,i,r],a)=>{s(t[i],[e,n,r],o=>o[0]===e&&o[1]===n,a)},Rb=s=>(t,e,n)=>{const i=[];for(let r=0;r<n.numberOfInputs;r+=1)i.push(new Set);s.set(t,{activeInputs:i,outputs:new Set,passiveInputs:new WeakMap,renderer:e})},Pb=s=>(t,e)=>{s.set(t,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:e})},ro=new WeakSet,Zm=new WeakMap,_h=new WeakMap,Km=new WeakMap,gh=new WeakMap,Jc=new WeakMap,Jm=new WeakMap,Ru=new WeakMap,Pu=new WeakMap,Du=new WeakMap,Qm={construct(){return Qm}},Db=s=>{try{const t=new Proxy(s,Qm);new t}catch{return!1}return!0},Kf=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,Jf=(s,t)=>{const e=[];let n=s.replace(/^[\s]+/,""),i=n.match(Kf);for(;i!==null;){const r=i[1].slice(1,-1),a=i[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,t).toString());e.push(a),n=n.slice(i[0].length).replace(/^[\s]+/,""),i=n.match(Kf)}return[e.join(";"),n]},Qf=s=>{if(s!==void 0&&!Array.isArray(s))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},tp=s=>{if(!Db(s))throw new TypeError("The given value for processorCtor should be a constructor.");if(s.prototype===null||typeof s.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},Lb=(s,t,e,n,i,r,a,o,c,l,u,h,d)=>{let m=0;return(g,_,f={credentials:"omit"})=>{const p=u.get(g);if(p!==void 0&&p.has(_))return Promise.resolve();const x=l.get(g);if(x!==void 0){const S=x.get(_);if(S!==void 0)return S}const v=r(g),M=v.audioWorklet===void 0?i(_).then(([S,b])=>{const[T,A]=Jf(S,b),N=`${T};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${A}
})})(window,'_AWGS')`;return e(N)}).then(()=>{const S=d._AWGS.pop();if(S===void 0)throw new SyntaxError;n(v.currentTime,v.sampleRate,()=>S(class{},void 0,(b,T)=>{if(b.trim()==="")throw t();const A=Pu.get(v);if(A!==void 0){if(A.has(b))throw t();tp(T),Qf(T.parameterDescriptors),A.set(b,T)}else tp(T),Qf(T.parameterDescriptors),Pu.set(v,new Map([[b,T]]))},v.sampleRate,void 0,void 0))}):Promise.all([i(_),Promise.resolve(s(h,h))]).then(([[S,b],T])=>{const A=m+1;m=A;const[N,y]=Jf(S,b),P=`${N};((AudioWorkletProcessor,registerProcessor)=>{${y}
})(${T?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${T?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${T?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${A}',class extends AudioWorkletProcessor{process(){return !1}})`,F=new Blob([P],{type:"application/javascript; charset=utf-8"}),O=URL.createObjectURL(F);return v.audioWorklet.addModule(O,f).then(()=>{if(o(v))return v;const V=a(v);return V.audioWorklet.addModule(O,f).then(()=>V)}).then(V=>{if(c===null)throw new SyntaxError;try{new c(V,`__sac${A}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(O))});return x===void 0?l.set(g,new Map([[_,M]])):x.set(_,M),M.then(()=>{const S=u.get(g);S===void 0?u.set(g,new Set([_])):S.add(_)}).finally(()=>{const S=l.get(g);S!==void 0&&S.delete(_)}),M}},ai=(s,t)=>{const e=s.get(t);if(e===void 0)throw new Error("A value with the given key could not be found.");return e},Qc=(s,t)=>{const e=Array.from(s).filter(t);if(e.length>1)throw Error("More than one element was found.");if(e.length===0)throw Error("No element was found.");const[n]=e;return s.delete(n),n},t_=(s,t,e,n)=>{const i=ai(s,t),r=Qc(i,a=>a[0]===e&&a[1]===n);return i.size===0&&s.delete(t),r},ua=s=>ai(Jm,s),oo=s=>{if(ro.has(s))throw new Error("The AudioNode is already stored.");ro.add(s),ua(s).forEach(t=>t(!0))},e_=s=>"port"in s,ha=s=>{if(!ro.has(s))throw new Error("The AudioNode is not stored.");ro.delete(s),ua(s).forEach(t=>t(!1))},Lu=(s,t)=>{!e_(s)&&t.every(e=>e.size===0)&&ha(s)},Nb=(s,t,e,n,i,r,a,o,c,l,u,h,d)=>{const m=new WeakMap;return(g,_,f,p,x)=>{const{activeInputs:v,passiveInputs:M}=r(_),{outputs:S}=r(g),b=o(g),T=A=>{const N=c(_),y=c(g);if(A){const E=t_(M,g,f,p);s(v,g,E,!1),!x&&!h(g)&&e(y,N,f,p),d(_)&&oo(_)}else{const E=n(v,g,f,p);t(M,p,E,!1),!x&&!h(g)&&i(y,N,f,p);const L=a(_);if(L===0)u(_)&&Lu(_,v);else{const k=m.get(_);k!==void 0&&clearTimeout(k),m.set(_,setTimeout(()=>{u(_)&&Lu(_,v)},L*1e3))}}};return l(S,[_,f,p],A=>A[0]===_&&A[1]===f&&A[2]===p,!0)?(b.add(T),u(g)?s(v,g,[f,p,T],!0):t(M,p,[g,f,T],!0),!0):!1}},Ib=s=>(t,e,[n,i,r],a)=>{const o=t.get(n);o===void 0?t.set(n,new Set([[i,e,r]])):s(o,[i,e,r],c=>c[0]===i&&c[1]===e,a)},Ob=s=>(t,e)=>{const n=s(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});e.connect(n).connect(t.destination);const i=()=>{e.removeEventListener("ended",i),e.disconnect(n),n.disconnect()};e.addEventListener("ended",i)},Fb=s=>(t,e)=>{s(t).add(e)},Ub={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},kb=(s,t,e,n,i,r)=>class extends s{constructor(o,c){const l=i(o),u={...Ub,...c},h=n(l,u),d=r(l)?t():null;super(o,!1,h,d),this._nativeAnalyserNode=h}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(o){this._nativeAnalyserNode.fftSize=o}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(o){const c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=o,!(o>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,e()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(o){const c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=o,!(this._nativeAnalyserNode.maxDecibels>o))throw this._nativeAnalyserNode.minDecibels=c,e()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(o){this._nativeAnalyserNode.smoothingTimeConstant=o}getByteFrequencyData(o){this._nativeAnalyserNode.getByteFrequencyData(o)}getByteTimeDomainData(o){this._nativeAnalyserNode.getByteTimeDomainData(o)}getFloatFrequencyData(o){this._nativeAnalyserNode.getFloatFrequencyData(o)}getFloatTimeDomainData(o){this._nativeAnalyserNode.getFloatTimeDomainData(o)}},an=(s,t)=>s.context===t,Vb=(s,t,e)=>()=>{const n=new WeakMap,i=async(r,a)=>{let o=t(r);if(!an(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,fftSize:o.fftSize,maxDecibels:o.maxDecibels,minDecibels:o.minDecibels,smoothingTimeConstant:o.smoothingTimeConstant};o=s(a,l)}return n.set(a,o),await e(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):i(r,a)}}},Tc=s=>{try{s.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},Ei=()=>new DOMException("","IndexSizeError"),vh=s=>{s.getChannelData=(t=>e=>{try{return t.call(s,e)}catch(n){throw n.code===12?Ei():n}})(s.getChannelData)},Bb={numberOfChannels:1},zb=(s,t,e,n,i,r,a,o)=>{let c=null;return class n_{constructor(u){if(i===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:h,numberOfChannels:d,sampleRate:m}={...Bb,...u};c===null&&(c=new i(1,1,44100));const g=n!==null&&t(r,r)?new n({length:h,numberOfChannels:d,sampleRate:m}):c.createBuffer(d,h,m);if(g.numberOfChannels===0)throw e();return typeof g.copyFromChannel!="function"?(a(g),vh(g)):t(Tc,()=>Tc(g))||o(g),s.add(g),g}static[Symbol.hasInstance](u){return u!==null&&typeof u=="object"&&Object.getPrototypeOf(u)===n_.prototype||s.has(u)}}},xn=-34028234663852886e22,dn=-xn,Wi=s=>ro.has(s),Gb={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},Hb=(s,t,e,n,i,r,a,o)=>class extends s{constructor(l,u){const h=r(l),d={...Gb,...u},m=i(h,d),g=a(h),_=g?t():null;super(l,!1,m,_),this._audioBufferSourceNodeRenderer=_,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=m,this._onended=null,this._playbackRate=e(this,g,m.playbackRate,dn,xn)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const u=typeof l=="function"?o(this,l):null;this._nativeAudioBufferSourceNode.onended=u;const h=this._nativeAudioBufferSourceNode.onended;this._onended=h!==null&&h===u?l:h}get playbackRate(){return this._playbackRate}start(l=0,u=0,h){if(this._nativeAudioBufferSourceNode.start(l,u,h),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=h===void 0?[l,u]:[l,u,h]),this.context.state!=="closed"){oo(this);const d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),Wi(this)&&ha(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},Wb=(s,t,e,n,i)=>()=>{const r=new WeakMap;let a=null,o=null;const c=async(l,u)=>{let h=e(l);const d=an(h,u);if(!d){const m={buffer:h.buffer,channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,loop:h.loop,loopEnd:h.loopEnd,loopStart:h.loopStart,playbackRate:h.playbackRate.value};h=t(u,m),a!==null&&h.start(...a),o!==null&&h.stop(o)}return r.set(u,h),d?await s(u,l.playbackRate,h.playbackRate):await n(u,l.playbackRate,h.playbackRate),await i(l,u,h),h};return{set start(l){a=l},set stop(l){o=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},Xb=s=>"playbackRate"in s,qb=s=>"frequency"in s&&"gain"in s,Yb=s=>"offset"in s,jb=s=>!("frequency"in s)&&"gain"in s,$b=s=>"detune"in s&&"frequency"in s,Zb=s=>"pan"in s,mn=s=>ai(Zm,s),da=s=>ai(Km,s),Nu=(s,t)=>{const{activeInputs:e}=mn(s);e.forEach(i=>i.forEach(([r])=>{t.includes(s)||Nu(r,[...t,s])}));const n=Xb(s)?[s.playbackRate]:e_(s)?Array.from(s.parameters.values()):qb(s)?[s.Q,s.detune,s.frequency,s.gain]:Yb(s)?[s.offset]:jb(s)?[s.gain]:$b(s)?[s.detune,s.frequency]:Zb(s)?[s.pan]:[];for(const i of n){const r=da(i);r!==void 0&&r.activeInputs.forEach(([a])=>Nu(a,t))}Wi(s)&&ha(s)},i_=s=>{Nu(s.destination,[])},Kb=s=>s===void 0||typeof s=="number"||typeof s=="string"&&(s==="balanced"||s==="interactive"||s==="playback"),Jb=(s,t,e,n,i,r,a,o,c)=>class extends s{constructor(u={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let h;try{h=new c(u)}catch(g){throw g.code===12&&g.message==="sampleRate is not in range"?e():g}if(h===null)throw n();if(!Kb(u.latencyHint))throw new TypeError(`The provided value '${u.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(u.sampleRate!==void 0&&h.sampleRate!==u.sampleRate)throw e();super(h,2);const{latencyHint:d}=u,{sampleRate:m}=h;if(this._baseLatency=typeof h.baseLatency=="number"?h.baseLatency:d==="balanced"?512/m:d==="interactive"||d===void 0?256/m:d==="playback"?1024/m:Math.max(2,Math.min(128,Math.round(d*m/128)))*128/m,this._nativeAudioContext=h,c.name==="webkitAudioContext"?(this._nativeGainNode=h.createGain(),this._nativeOscillatorNode=h.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(h.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,h.state==="running"){this._state="suspended";const g=()=>{this._state==="suspended"&&(this._state=null),h.removeEventListener("statechange",g)};h.addEventListener("statechange",g)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw t()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),i_(this)}))}createMediaElementSource(u){return new i(this,{mediaElement:u})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(u){return new a(this,{mediaStream:u})}createMediaStreamTrackSource(u){return new o(this,{mediaStreamTrack:u})}resume(){return this._state==="suspended"?new Promise((u,h)=>{const d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?u():this.resume().then(u,h)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(u=>{throw u===void 0||u.code===15?t():u})}suspend(){return this._nativeAudioContext.suspend().catch(u=>{throw u===void 0?t():u})}},Qb=(s,t,e,n,i,r,a,o)=>class extends s{constructor(l,u){const h=r(l),d=a(h),m=i(h,u,d),g=d?t(o):null;super(l,!1,m,g),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=m}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw e();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},tE=s=>{const t=new WeakMap,e=async(n,i)=>{const r=i.destination;return t.set(i,r),await s(n,i,r),r};return{render(n,i){const r=t.get(i);return r!==void 0?Promise.resolve(r):e(n,i)}}},eE=(s,t,e,n,i,r,a,o)=>(c,l)=>{const u=l.listener,h=()=>{const S=new Float32Array(1),b=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),T=a(l);let A=!1,N=[0,0,-1,0,1,0],y=[0,0,0];const E=()=>{if(A)return;A=!0;const F=n(l,256,9,0);F.onaudioprocess=({inputBuffer:O})=>{const V=[r(O,S,0),r(O,S,1),r(O,S,2),r(O,S,3),r(O,S,4),r(O,S,5)];V.some((H,q)=>H!==N[q])&&(u.setOrientation(...V),N=V);const z=[r(O,S,6),r(O,S,7),r(O,S,8)];z.some((H,q)=>H!==y[q])&&(u.setPosition(...z),y=z)},b.connect(F)},L=F=>O=>{O!==N[F]&&(N[F]=O,u.setOrientation(...N))},k=F=>O=>{O!==y[F]&&(y[F]=O,u.setPosition(...y))},P=(F,O,V)=>{const z=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:O});z.connect(b,0,F),z.start(),Object.defineProperty(z.offset,"defaultValue",{get(){return O}});const H=s({context:c},T,z.offset,dn,xn);return o(H,"value",q=>()=>q.call(H),q=>j=>{try{q.call(H,j)}catch(Q){if(Q.code!==9)throw Q}E(),T&&V(j)}),H.cancelAndHoldAtTime=(q=>T?()=>{throw i()}:(...j)=>{const Q=q.apply(H,j);return E(),Q})(H.cancelAndHoldAtTime),H.cancelScheduledValues=(q=>T?()=>{throw i()}:(...j)=>{const Q=q.apply(H,j);return E(),Q})(H.cancelScheduledValues),H.exponentialRampToValueAtTime=(q=>T?()=>{throw i()}:(...j)=>{const Q=q.apply(H,j);return E(),Q})(H.exponentialRampToValueAtTime),H.linearRampToValueAtTime=(q=>T?()=>{throw i()}:(...j)=>{const Q=q.apply(H,j);return E(),Q})(H.linearRampToValueAtTime),H.setTargetAtTime=(q=>T?()=>{throw i()}:(...j)=>{const Q=q.apply(H,j);return E(),Q})(H.setTargetAtTime),H.setValueAtTime=(q=>T?()=>{throw i()}:(...j)=>{const Q=q.apply(H,j);return E(),Q})(H.setValueAtTime),H.setValueCurveAtTime=(q=>T?()=>{throw i()}:(...j)=>{const Q=q.apply(H,j);return E(),Q})(H.setValueCurveAtTime),H};return{forwardX:P(0,0,L(0)),forwardY:P(1,0,L(1)),forwardZ:P(2,-1,L(2)),positionX:P(6,0,k(0)),positionY:P(7,0,k(1)),positionZ:P(8,0,k(2)),upX:P(3,0,L(3)),upY:P(4,1,L(4)),upZ:P(5,0,L(5))}},{forwardX:d,forwardY:m,forwardZ:g,positionX:_,positionY:f,positionZ:p,upX:x,upY:v,upZ:M}=u.forwardX===void 0?h():u;return{get forwardX(){return d},get forwardY(){return m},get forwardZ(){return g},get positionX(){return _},get positionY(){return f},get positionZ(){return p},get upX(){return x},get upY(){return v},get upZ(){return M}}},bc=s=>"context"in s,fa=s=>bc(s[0]),hr=(s,t,e,n)=>{for(const i of s)if(e(i)){if(n)return!1;throw Error("The set contains at least one similar element.")}return s.add(t),!0},ep=(s,t,[e,n],i)=>{hr(s,[t,e,n],r=>r[0]===t&&r[1]===e,i)},np=(s,[t,e,n],i)=>{const r=s.get(t);r===void 0?s.set(t,new Set([[e,n]])):hr(r,[e,n],a=>a[0]===e,i)},po=s=>"inputs"in s,Ec=(s,t,e,n)=>{if(po(t)){const i=t.inputs[n];return s.connect(i,e,0),[i,e,0]}return s.connect(t,e,n),[t,e,n]},s_=(s,t,e)=>{for(const n of s)if(n[0]===t&&n[1]===e)return s.delete(n),n;return null},nE=(s,t,e)=>Qc(s,n=>n[0]===t&&n[1]===e),r_=(s,t)=>{if(!ua(s).delete(t))throw new Error("Missing the expected event listener.")},o_=(s,t,e)=>{const n=ai(s,t),i=Qc(n,r=>r[0]===e);return n.size===0&&s.delete(t),i},wc=(s,t,e,n)=>{po(t)?s.disconnect(t.inputs[n],e,0):s.disconnect(t,e,n)},de=s=>ai(_h,s),Wo=s=>ai(gh,s),ir=s=>Ru.has(s),nc=s=>!ro.has(s),ip=(s,t)=>new Promise(e=>{if(t!==null)e(!0);else{const n=s.createScriptProcessor(256,1,1),i=s.createGain(),r=s.createBuffer(1,2,44100),a=r.getChannelData(0);a[0]=1,a[1]=1;const o=s.createBufferSource();o.buffer=r,o.loop=!0,o.connect(n).connect(s.destination),o.connect(i),o.disconnect(i),n.onaudioprocess=c=>{const l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,u=>u===1)?e(!0):e(!1),o.stop(),n.onaudioprocess=null,o.disconnect(n),n.disconnect(s.destination)},o.start()}}),tu=(s,t)=>{const e=new Map;for(const n of s)for(const i of n){const r=e.get(i);e.set(i,r===void 0?1:r+1)}e.forEach((n,i)=>t(i,n))},Ac=s=>"context"in s,iE=s=>{const t=new Map;s.connect=(e=>(n,i=0,r=0)=>{const a=Ac(n)?e(n,i,r):e(n,i),o=t.get(n);return o===void 0?t.set(n,[{input:r,output:i}]):o.every(c=>c.input!==r||c.output!==i)&&o.push({input:r,output:i}),a})(s.connect.bind(s)),s.disconnect=(e=>(n,i,r)=>{if(e.apply(s),n===void 0)t.clear();else if(typeof n=="number")for(const[a,o]of t){const c=o.filter(l=>l.output!==n);c.length===0?t.delete(a):t.set(a,c)}else if(t.has(n))if(i===void 0)t.delete(n);else{const a=t.get(n);if(a!==void 0){const o=a.filter(c=>c.output!==i&&(c.input!==r||r===void 0));o.length===0?t.delete(n):t.set(n,o)}}for(const[a,o]of t)o.forEach(c=>{Ac(a)?s.connect(a,c.output,c.input):s.connect(a,c.output)})})(s.disconnect)},sE=(s,t,e,n)=>{const{activeInputs:i,passiveInputs:r}=da(t),{outputs:a}=mn(s),o=ua(s),c=l=>{const u=de(s),h=Wo(t);if(l){const d=o_(r,s,e);ep(i,s,d,!1),!n&&!ir(s)&&u.connect(h,e)}else{const d=nE(i,s,e);np(r,d,!1),!n&&!ir(s)&&u.disconnect(h,e)}};return hr(a,[t,e],l=>l[0]===t&&l[1]===e,!0)?(o.add(c),Wi(s)?ep(i,s,[e,c],!0):np(r,[s,e,c],!0),!0):!1},rE=(s,t,e,n)=>{const{activeInputs:i,passiveInputs:r}=mn(t),a=s_(i[n],s,e);return a===null?[t_(r,s,e,n)[2],!1]:[a[2],!0]},oE=(s,t,e)=>{const{activeInputs:n,passiveInputs:i}=da(t),r=s_(n,s,e);return r===null?[o_(i,s,e)[1],!1]:[r[2],!0]},xh=(s,t,e,n,i)=>{const[r,a]=rE(s,e,n,i);if(r!==null&&(r_(s,r),a&&!t&&!ir(s)&&wc(de(s),de(e),n,i)),Wi(e)){const{activeInputs:o}=mn(e);Lu(e,o)}},yh=(s,t,e,n)=>{const[i,r]=oE(s,e,n);i!==null&&(r_(s,i),r&&!t&&!ir(s)&&de(s).disconnect(Wo(e),n))},aE=(s,t)=>{const e=mn(s),n=[];for(const i of e.outputs)fa(i)?xh(s,t,...i):yh(s,t,...i),n.push(i[0]);return e.outputs.clear(),n},cE=(s,t,e)=>{const n=mn(s),i=[];for(const r of n.outputs)r[1]===e&&(fa(r)?xh(s,t,...r):yh(s,t,...r),i.push(r[0]),n.outputs.delete(r));return i},lE=(s,t,e,n,i)=>{const r=mn(s);return Array.from(r.outputs).filter(a=>a[0]===e&&(n===void 0||a[1]===n)&&(i===void 0||a[2]===i)).map(a=>(fa(a)?xh(s,t,...a):yh(s,t,...a),r.outputs.delete(a),a[0]))},uE=(s,t,e,n,i,r,a,o,c,l,u,h,d,m,g,_)=>class extends l{constructor(p,x,v,M){super(v),this._context=p,this._nativeAudioNode=v;const S=u(p);h(S)&&e(ip,()=>ip(S,_))!==!0&&iE(v),_h.set(this,v),Jm.set(this,new Set),p.state!=="closed"&&x&&oo(this),s(this,M,v)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(p){this._nativeAudioNode.channelCount=p}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(p){this._nativeAudioNode.channelCountMode=p}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(p){this._nativeAudioNode.channelInterpretation=p}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(p,x=0,v=0){if(x<0||x>=this._nativeAudioNode.numberOfOutputs)throw i();const M=u(this._context),S=g(M);if(d(p)||m(p))throw r();if(bc(p)){const A=de(p);try{const y=Ec(this._nativeAudioNode,A,x,v),E=nc(this);(S||E)&&this._nativeAudioNode.disconnect(...y),this.context.state!=="closed"&&!E&&nc(p)&&oo(p)}catch(y){throw y.code===12?r():y}if(t(this,p,x,v,S)){const y=c([this],p);tu(y,n(S))}return p}const b=Wo(p);if(b.name==="playbackRate"&&b.maxValue===1024)throw a();try{this._nativeAudioNode.connect(b,x),(S||nc(this))&&this._nativeAudioNode.disconnect(b,x)}catch(A){throw A.code===12?r():A}if(sE(this,p,x,S)){const A=c([this],p);tu(A,n(S))}}disconnect(p,x,v){let M;const S=u(this._context),b=g(S);if(p===void 0)M=aE(this,b);else if(typeof p=="number"){if(p<0||p>=this.numberOfOutputs)throw i();M=cE(this,b,p)}else{if(x!==void 0&&(x<0||x>=this.numberOfOutputs)||bc(p)&&v!==void 0&&(v<0||v>=p.numberOfInputs))throw i();if(M=lE(this,b,p,x,v),M.length===0)throw r()}for(const T of M){const A=c([this],T);tu(A,o)}}},hE=(s,t,e,n,i,r,a,o,c,l,u,h,d)=>(m,g,_,f=null,p=null)=>{const x=_.value,v=new Sb(x),M=g?n(v):null,S={get defaultValue(){return x},get maxValue(){return f===null?_.maxValue:f},get minValue(){return p===null?_.minValue:p},get value(){return _.value},set value(b){_.value=b,S.setValueAtTime(b,m.context.currentTime)},cancelAndHoldAtTime(b){if(typeof _.cancelAndHoldAtTime=="function")M===null&&v.flush(m.context.currentTime),v.add(i(b)),_.cancelAndHoldAtTime(b);else{const T=Array.from(v).pop();M===null&&v.flush(m.context.currentTime),v.add(i(b));const A=Array.from(v).pop();_.cancelScheduledValues(b),T!==A&&A!==void 0&&(A.type==="exponentialRampToValue"?_.exponentialRampToValueAtTime(A.value,A.endTime):A.type==="linearRampToValue"?_.linearRampToValueAtTime(A.value,A.endTime):A.type==="setValue"?_.setValueAtTime(A.value,A.startTime):A.type==="setValueCurve"&&_.setValueCurveAtTime(A.values,A.startTime,A.duration))}return S},cancelScheduledValues(b){return M===null&&v.flush(m.context.currentTime),v.add(r(b)),_.cancelScheduledValues(b),S},exponentialRampToValueAtTime(b,T){if(b===0)throw new RangeError;if(!Number.isFinite(T)||T<0)throw new RangeError;const A=m.context.currentTime;return M===null&&v.flush(A),Array.from(v).length===0&&(v.add(l(x,A)),_.setValueAtTime(x,A)),v.add(a(b,T)),_.exponentialRampToValueAtTime(b,T),S},linearRampToValueAtTime(b,T){const A=m.context.currentTime;return M===null&&v.flush(A),Array.from(v).length===0&&(v.add(l(x,A)),_.setValueAtTime(x,A)),v.add(o(b,T)),_.linearRampToValueAtTime(b,T),S},setTargetAtTime(b,T,A){return M===null&&v.flush(m.context.currentTime),v.add(c(b,T,A)),_.setTargetAtTime(b,T,A),S},setValueAtTime(b,T){return M===null&&v.flush(m.context.currentTime),v.add(l(b,T)),_.setValueAtTime(b,T),S},setValueCurveAtTime(b,T,A){const N=b instanceof Float32Array?b:new Float32Array(b);if(h!==null&&h.name==="webkitAudioContext"){const y=T+A,E=m.context.sampleRate,L=Math.ceil(T*E),k=Math.floor(y*E),P=k-L,F=new Float32Array(P);for(let V=0;V<P;V+=1){const z=(N.length-1)/A*((L+V)/E-T),H=Math.floor(z),q=Math.ceil(z);F[V]=H===q?N[H]:(1-(z-H))*N[H]+(1-(q-z))*N[q]}M===null&&v.flush(m.context.currentTime),v.add(u(F,T,A)),_.setValueCurveAtTime(F,T,A);const O=k/E;O<y&&d(S,F[F.length-1],O),d(S,N[N.length-1],y)}else M===null&&v.flush(m.context.currentTime),v.add(u(N,T,A)),_.setValueCurveAtTime(N,T,A);return S}};return e.set(S,_),t.set(S,m),s(S,M),S},dE=s=>({replay(t){for(const e of s)if(e.type==="exponentialRampToValue"){const{endTime:n,value:i}=e;t.exponentialRampToValueAtTime(i,n)}else if(e.type==="linearRampToValue"){const{endTime:n,value:i}=e;t.linearRampToValueAtTime(i,n)}else if(e.type==="setTarget"){const{startTime:n,target:i,timeConstant:r}=e;t.setTargetAtTime(i,n,r)}else if(e.type==="setValue"){const{startTime:n,value:i}=e;t.setValueAtTime(i,n)}else if(e.type==="setValueCurve"){const{duration:n,startTime:i,values:r}=e;t.setValueCurveAtTime(r,i,n)}else throw new Error("Can't apply an unknown automation.")}});class a_{constructor(t){this._map=new Map(t)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(t,e=null){return this._map.forEach((n,i)=>t.call(e,n,i,this))}get(t){return this._map.get(t)}has(t){return this._map.has(t)}keys(){return this._map.keys()}values(){return this._map.values()}}const fE={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},pE=(s,t,e,n,i,r,a,o,c,l,u,h,d,m)=>class extends t{constructor(_,f,p){var x;const v=o(_),M=c(v),S=u({...fE,...p});d(S);const b=Pu.get(v),T=b==null?void 0:b.get(f),A=M||v.state!=="closed"?v:(x=a(v))!==null&&x!==void 0?x:v,N=i(A,M?null:_.baseLatency,l,f,T,S),y=M?n(f,S,T):null;super(_,!0,N,y);const E=[];N.parameters.forEach((k,P)=>{const F=e(this,M,k);E.push([P,F])}),this._nativeAudioWorkletNode=N,this._onprocessorerror=null,this._parameters=new a_(E),M&&s(v,this);const{activeInputs:L}=r(this);h(N,L)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(_){const f=typeof _=="function"?m(this,_):null;this._nativeAudioWorkletNode.onprocessorerror=f;const p=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=p!==null&&p===f?_:p}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function Cc(s,t,e,n,i){if(typeof s.copyFromChannel=="function")t[e].byteLength===0&&(t[e]=new Float32Array(128)),s.copyFromChannel(t[e],n,i);else{const r=s.getChannelData(n);if(t[e].byteLength===0)t[e]=r.slice(i,i+128);else{const a=new Float32Array(r.buffer,i*Float32Array.BYTES_PER_ELEMENT,128);t[e].set(a)}}}const c_=(s,t,e,n,i)=>{typeof s.copyToChannel=="function"?t[e].byteLength!==0&&s.copyToChannel(t[e],n,i):t[e].byteLength!==0&&s.getChannelData(n).set(t[e],i)},Rc=(s,t)=>{const e=[];for(let n=0;n<s;n+=1){const i=[],r=typeof t=="number"?t:t[n];for(let a=0;a<r;a+=1)i.push(new Float32Array(128));e.push(i)}return e},mE=(s,t)=>{const e=ai(Du,s),n=de(t);return ai(e,n)},_E=async(s,t,e,n,i,r,a)=>{const o=t===null?Math.ceil(s.context.length/128)*128:t.length,c=n.channelCount*n.numberOfInputs,l=i.reduce((f,p)=>f+p,0),u=l===0?null:e.createBuffer(l,o,e.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");const h=mn(s),d=await mE(e,s),m=Rc(n.numberOfInputs,n.channelCount),g=Rc(n.numberOfOutputs,i),_=Array.from(s.parameters.keys()).reduce((f,p)=>({...f,[p]:new Float32Array(128)}),{});for(let f=0;f<o;f+=128){if(n.numberOfInputs>0&&t!==null)for(let p=0;p<n.numberOfInputs;p+=1)for(let x=0;x<n.channelCount;x+=1)Cc(t,m[p],x,x,f);r.parameterDescriptors!==void 0&&t!==null&&r.parameterDescriptors.forEach(({name:p},x)=>{Cc(t,_,p,c+x,f)});for(let p=0;p<n.numberOfInputs;p+=1)for(let x=0;x<i[p];x+=1)g[p][x].byteLength===0&&(g[p][x]=new Float32Array(128));try{const p=m.map((v,M)=>h.activeInputs[M].size===0?[]:v),x=a(f/e.sampleRate,e.sampleRate,()=>d.process(p,g,_));if(u!==null)for(let v=0,M=0;v<n.numberOfOutputs;v+=1){for(let S=0;S<i[v];S+=1)c_(u,g[v],S,M+S,f);M+=i[v]}if(!x)break}catch(p){s.dispatchEvent(new ErrorEvent("processorerror",{colno:p.colno,filename:p.filename,lineno:p.lineno,message:p.message}));break}}return u},gE=(s,t,e,n,i,r,a,o,c,l,u,h,d,m,g,_)=>(f,p,x)=>{const v=new WeakMap;let M=null;const S=async(b,T)=>{let A=u(b),N=null;const y=an(A,T),E=Array.isArray(p.outputChannelCount)?p.outputChannelCount:Array.from(p.outputChannelCount);if(h===null){const L=E.reduce((O,V)=>O+V,0),k=i(T,{channelCount:Math.max(1,L),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,L)}),P=[];for(let O=0;O<b.numberOfOutputs;O+=1)P.push(n(T,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:E[O]}));const F=a(T,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1});F.connect=t.bind(null,P),F.disconnect=c.bind(null,P),N=[k,P,F]}else y||(A=new h(T,f));if(v.set(T,N===null?A:N[2]),N!==null){if(M===null){if(x===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");const V=b.channelCount*b.numberOfInputs,z=x.parameterDescriptors===void 0?0:x.parameterDescriptors.length,H=V+z;M=_E(b,H===0?null:await(async()=>{const j=new d(H,Math.ceil(b.context.length/128)*128,T.sampleRate),Q=[],xt=[];for(let ct=0;ct<p.numberOfInputs;ct+=1)Q.push(a(j,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1})),xt.push(i(j,{channelCount:p.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:p.channelCount}));const X=await Promise.all(Array.from(b.parameters.values()).map(async ct=>{const _t=r(j,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:ct.value});return await m(j,ct,_t.offset),_t})),Y=n(j,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,V+z)});for(let ct=0;ct<p.numberOfInputs;ct+=1){Q[ct].connect(xt[ct]);for(let _t=0;_t<p.channelCount;_t+=1)xt[ct].connect(Y,_t,ct*p.channelCount+_t)}for(const[ct,_t]of X.entries())_t.connect(Y,0,V+ct),_t.start(0);return Y.connect(j.destination),await Promise.all(Q.map(ct=>g(b,j,ct))),_(j)})(),T,p,E,x,l)}const L=await M,k=e(T,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[P,F,O]=N;L!==null&&(k.buffer=L,k.start(0)),k.connect(P);for(let V=0,z=0;V<b.numberOfOutputs;V+=1){const H=F[V];for(let q=0;q<E[V];q+=1)P.connect(H,z+q,q);z+=E[V]}return O}if(y)for(const[L,k]of b.parameters.entries())await s(T,k,A.parameters.get(L));else for(const[L,k]of b.parameters.entries())await m(T,k,A.parameters.get(L));return await g(b,T,A),A};return{render(b,T){o(T,b);const A=v.get(T);return A!==void 0?Promise.resolve(A):S(b,T)}}},vE=(s,t,e,n,i,r,a,o,c,l,u,h,d,m,g,_,f,p,x,v)=>class extends g{constructor(S,b){super(S,b),this._nativeContext=S,this._audioWorklet=s===void 0?void 0:{addModule:(T,A)=>s(this,T,A)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new t(this)}createBiquadFilter(){return new i(this)}createBuffer(S,b,T){return new e({length:b,numberOfChannels:S,sampleRate:T})}createBufferSource(){return new n(this)}createChannelMerger(S=6){return new r(this,{numberOfInputs:S})}createChannelSplitter(S=6){return new a(this,{numberOfOutputs:S})}createConstantSource(){return new o(this)}createConvolver(){return new c(this)}createDelay(S=1){return new u(this,{maxDelayTime:S})}createDynamicsCompressor(){return new h(this)}createGain(){return new d(this)}createIIRFilter(S,b){return new m(this,{feedback:b,feedforward:S})}createOscillator(){return new _(this)}createPanner(){return new f(this)}createPeriodicWave(S,b,T={disableNormalization:!1}){return new p(this,{...T,imag:b,real:S})}createStereoPanner(){return new x(this)}createWaveShaper(){return new v(this)}decodeAudioData(S,b,T){return l(this._nativeContext,S).then(A=>(typeof b=="function"&&b(A),A),A=>{throw typeof T=="function"&&T(A),A})}},xE={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},yE=(s,t,e,n,i,r,a,o)=>class extends s{constructor(l,u){const h=r(l),d={...xE,...u},m=i(h,d),g=a(h),_=g?e():null;super(l,!1,m,_),this._Q=t(this,g,m.Q,dn,xn),this._detune=t(this,g,m.detune,1200*Math.log2(dn),-1200*Math.log2(dn)),this._frequency=t(this,g,m.frequency,l.sampleRate/2,0),this._gain=t(this,g,m.gain,40*Math.log10(dn),xn),this._nativeBiquadFilterNode=m,o(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,u,h){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,u,h)}catch(d){throw d.code===11?n():d}if(l.length!==u.length||u.length!==h.length)throw n()}},SE=(s,t,e,n,i)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=e(o);const u=an(l,c);if(!u){const h={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=t(c,h)}return r.set(c,l),u?(await s(c,o.Q,l.Q),await s(c,o.detune,l.detune),await s(c,o.frequency,l.frequency),await s(c,o.gain,l.gain)):(await n(c,o.Q,l.Q),await n(c,o.detune,l.detune),await n(c,o.frequency,l.frequency),await n(c,o.gain,l.gain)),await i(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},ME=(s,t)=>(e,n)=>{const i=t.get(e);if(i!==void 0)return i;const r=s.get(e);if(r!==void 0)return r;try{const a=n();return a instanceof Promise?(s.set(e,a),a.catch(()=>!1).then(o=>(s.delete(e),t.set(e,o),o))):(t.set(e,a),a)}catch{return t.set(e,!1),!1}},TE={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},bE=(s,t,e,n,i)=>class extends s{constructor(a,o){const c=n(a),l={...TE,...o},u=e(c,l),h=i(c)?t():null;super(a,!1,u,h)}},EE=(s,t,e)=>()=>{const n=new WeakMap,i=async(r,a)=>{let o=t(r);if(!an(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,numberOfInputs:o.numberOfInputs};o=s(a,l)}return n.set(a,o),await e(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):i(r,a)}}},wE={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},AE=(s,t,e,n,i,r)=>class extends s{constructor(o,c){const l=n(o),u=r({...wE,...c}),h=e(l,u),d=i(l)?t():null;super(o,!1,h,d)}},CE=(s,t,e)=>()=>{const n=new WeakMap,i=async(r,a)=>{let o=t(r);if(!an(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,numberOfOutputs:o.numberOfOutputs};o=s(a,l)}return n.set(a,o),await e(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):i(r,a)}}},RE=s=>(t,e,n)=>s(e,t,n),PE=s=>(t,e,n=0,i=0)=>{const r=t[n];if(r===void 0)throw s();return Ac(e)?r.connect(e,0,i):r.connect(e,0)},DE=s=>(t,e)=>{const n=s(t,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),i=t.createBuffer(1,2,44100);return n.buffer=i,n.loop=!0,n.connect(e),n.start(),()=>{n.stop(),n.disconnect(e)}},LE={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},NE=(s,t,e,n,i,r,a)=>class extends s{constructor(c,l){const u=i(c),h={...LE,...l},d=n(u,h),m=r(u),g=m?e():null;super(c,!1,d,g),this._constantSourceNodeRenderer=g,this._nativeConstantSourceNode=d,this._offset=t(this,m,d.offset,dn,xn),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?a(this,c):null;this._nativeConstantSourceNode.onended=l;const u=this._nativeConstantSourceNode.onended;this._onended=u!==null&&u===l?c:u}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){oo(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),Wi(this)&&ha(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},IE=(s,t,e,n,i)=>()=>{const r=new WeakMap;let a=null,o=null;const c=async(l,u)=>{let h=e(l);const d=an(h,u);if(!d){const m={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,offset:h.offset.value};h=t(u,m),a!==null&&h.start(a),o!==null&&h.stop(o)}return r.set(u,h),d?await s(u,l.offset,h.offset):await n(u,l.offset,h.offset),await i(l,u,h),h};return{set start(l){a=l},set stop(l){o=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},OE=s=>t=>(s[0]=t,s[0]),FE={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},UE=(s,t,e,n,i,r)=>class extends s{constructor(o,c){const l=n(o),u={...FE,...c},h=e(l,u),m=i(l)?t():null;super(o,!1,h,m),this._isBufferNullified=!1,this._nativeConvolverNode=h,u.buffer!==null&&r(this,u.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(o){if(this._nativeConvolverNode.buffer=o,o===null&&this._nativeConvolverNode.buffer!==null){const c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(o){this._nativeConvolverNode.normalize=o}},kE=(s,t,e)=>()=>{const n=new WeakMap,i=async(r,a)=>{let o=t(r);if(!an(o,a)){const l={buffer:o.buffer,channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,disableNormalization:!o.normalize};o=s(a,l)}return n.set(a,o),po(o)?await e(r,a,o.inputs[0]):await e(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):i(r,a)}}},VE=(s,t)=>(e,n,i)=>{if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new t(e,n,i)}catch(r){throw r.name==="SyntaxError"?s():r}},BE=()=>new DOMException("","DataCloneError"),sp=s=>{const{port1:t,port2:e}=new MessageChannel;return new Promise(n=>{const i=()=>{e.onmessage=null,t.close(),e.close(),n()};e.onmessage=()=>i();try{t.postMessage(s,[s])}catch{}finally{i()}})},zE=(s,t,e,n,i,r,a,o,c,l,u)=>(h,d)=>{const m=a(h)?h:r(h);if(i.has(d)){const g=e();return Promise.reject(g)}try{i.add(d)}catch{}return t(c,()=>c(m))?m.decodeAudioData(d).then(g=>(sp(d).catch(()=>{}),t(o,()=>o(g))||u(g),s.add(g),g)):new Promise((g,_)=>{const f=async()=>{try{await sp(d)}catch{}},p=x=>{_(x),f()};try{m.decodeAudioData(d,x=>{typeof x.copyFromChannel!="function"&&(l(x),vh(x)),s.add(x),f().then(()=>g(x))},x=>{p(x===null?n():x)})}catch(x){p(x)}})},GE=(s,t,e,n,i,r,a,o)=>(c,l)=>{const u=t.get(c);if(u===void 0)throw new Error("Missing the expected cycle count.");const h=r(c.context),d=o(h);if(u===l){if(t.delete(c),!d&&a(c)){const m=n(c),{outputs:g}=e(c);for(const _ of g)if(fa(_)){const f=n(_[0]);s(m,f,_[1],_[2])}else{const f=i(_[0]);m.connect(f,_[1])}}}else t.set(c,u-l)},HE={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},WE=(s,t,e,n,i,r,a)=>class extends s{constructor(c,l){const u=i(c),h={...HE,...l},d=n(u,h),m=r(u),g=m?e(h.maxDelayTime):null;super(c,!1,d,g),this._delayTime=t(this,m,d.delayTime),a(this,h.maxDelayTime)}get delayTime(){return this._delayTime}},XE=(s,t,e,n,i)=>r=>{const a=new WeakMap,o=async(c,l)=>{let u=e(c);const h=an(u,l);if(!h){const d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,delayTime:u.delayTime.value,maxDelayTime:r};u=t(l,d)}return a.set(l,u),h?await s(l,c.delayTime,u.delayTime):await n(l,c.delayTime,u.delayTime),await i(c,l,u),u};return{render(c,l){const u=a.get(l);return u!==void 0?Promise.resolve(u):o(c,l)}}},qE=s=>(t,e,n,i)=>s(t[i],r=>r[0]===e&&r[1]===n),YE=s=>(t,e)=>{s(t).delete(e)},jE=s=>"delayTime"in s,$E=(s,t,e)=>function n(i,r){const a=bc(r)?r:e(s,r);if(jE(a))return[];if(i[0]===a)return[i];if(i.includes(a))return[];const{outputs:o}=t(a);return Array.from(o).map(c=>n([...i,a],c[0])).reduce((c,l)=>c.concat(l),[])},$a=(s,t,e)=>{const n=t[e];if(n===void 0)throw s();return n},ZE=s=>(t,e=void 0,n=void 0,i=0)=>e===void 0?t.forEach(r=>r.disconnect()):typeof e=="number"?$a(s,t,e).disconnect():Ac(e)?n===void 0?t.forEach(r=>r.disconnect(e)):i===void 0?$a(s,t,n).disconnect(e,0):$a(s,t,n).disconnect(e,0,i):n===void 0?t.forEach(r=>r.disconnect(e)):$a(s,t,n).disconnect(e,0),KE={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},JE=(s,t,e,n,i,r,a,o)=>class extends s{constructor(l,u){const h=r(l),d={...KE,...u},m=n(h,d),g=a(h),_=g?e():null;super(l,!1,m,_),this._attack=t(this,g,m.attack),this._knee=t(this,g,m.knee),this._nativeDynamicsCompressorNode=m,this._ratio=t(this,g,m.ratio),this._release=t(this,g,m.release),this._threshold=t(this,g,m.threshold),o(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const u=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=u,i()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const u=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=u,i()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},QE=(s,t,e,n,i)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=e(o);const u=an(l,c);if(!u){const h={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=t(c,h)}return r.set(c,l),u?(await s(c,o.attack,l.attack),await s(c,o.knee,l.knee),await s(c,o.ratio,l.ratio),await s(c,o.release,l.release),await s(c,o.threshold,l.threshold)):(await n(c,o.attack,l.attack),await n(c,o.knee,l.knee),await n(c,o.ratio,l.ratio),await n(c,o.release,l.release),await n(c,o.threshold,l.threshold)),await i(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},tw=()=>new DOMException("","EncodingError"),ew=s=>t=>new Promise((e,n)=>{if(s===null){n(new SyntaxError);return}const i=s.document.head;if(i===null)n(new SyntaxError);else{const r=s.document.createElement("script"),a=new Blob([t],{type:"application/javascript"}),o=URL.createObjectURL(a),c=s.onerror,l=()=>{s.onerror=c,URL.revokeObjectURL(o)};s.onerror=(u,h,d,m,g)=>{if(h===o||h===s.location.href&&d===1&&m===1)return l(),n(g),!1;if(c!==null)return c(u,h,d,m,g)},r.onerror=()=>{l(),n(new SyntaxError)},r.onload=()=>{l(),e()},r.src=o,r.type="module",i.appendChild(r)}}),nw=s=>class{constructor(e){this._nativeEventTarget=e,this._listeners=new WeakMap}addEventListener(e,n,i){if(n!==null){let r=this._listeners.get(n);r===void 0&&(r=s(this,n),typeof n=="function"&&this._listeners.set(n,r)),this._nativeEventTarget.addEventListener(e,r,i)}}dispatchEvent(e){return this._nativeEventTarget.dispatchEvent(e)}removeEventListener(e,n,i){const r=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(e,r===void 0?null:r,i)}},iw=s=>(t,e,n)=>{Object.defineProperties(s,{currentFrame:{configurable:!0,get(){return Math.round(t*e)}},currentTime:{configurable:!0,get(){return t}}});try{return n()}finally{s!==null&&(delete s.currentFrame,delete s.currentTime)}},sw=s=>async t=>{try{const e=await fetch(t);if(e.ok)return[await e.text(),e.url]}catch{}throw s()},rw={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},ow=(s,t,e,n,i,r)=>class extends s{constructor(o,c){const l=i(o),u={...rw,...c},h=n(l,u),d=r(l),m=d?e():null;super(o,!1,h,m),this._gain=t(this,d,h.gain,dn,xn)}get gain(){return this._gain}},aw=(s,t,e,n,i)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=e(o);const u=an(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=t(c,h)}return r.set(c,l),u?await s(c,o.gain,l.gain):await n(c,o.gain,l.gain),await i(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},cw=(s,t)=>e=>t(s,e),lw=s=>t=>{const e=s(t);if(e.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return e.renderer},uw=s=>t=>{var e;return(e=s.get(t))!==null&&e!==void 0?e:0},hw=s=>t=>{const e=s(t);if(e.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return e.renderer},dw=s=>t=>s.get(t),Xe=()=>new DOMException("","InvalidStateError"),fw=s=>t=>{const e=s.get(t);if(e===void 0)throw Xe();return e},pw=(s,t)=>e=>{let n=s.get(e);if(n!==void 0)return n;if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new t(1,1,44100),s.set(e,n),n},mw=s=>t=>{const e=s.get(t);if(e===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return e},tl=()=>new DOMException("","InvalidAccessError"),_w=s=>{s.getFrequencyResponse=(t=>(e,n,i)=>{if(e.length!==n.length||n.length!==i.length)throw tl();return t.call(s,e,n,i)})(s.getFrequencyResponse)},gw={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},vw=(s,t,e,n,i,r)=>class extends s{constructor(o,c){const l=n(o),u=i(l),h={...gw,...c},d=t(l,u?null:o.baseLatency,h),m=u?e(h.feedback,h.feedforward):null;super(o,!1,d,m),_w(d),this._nativeIIRFilterNode=d,r(this,1)}getFrequencyResponse(o,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(o,c,l)}},l_=(s,t,e,n,i,r,a,o,c,l,u)=>{const h=l.length;let d=o;for(let m=0;m<h;m+=1){let g=e[0]*l[m];for(let _=1;_<i;_+=1){const f=d-_&c-1;g+=e[_]*r[f],g-=s[_]*a[f]}for(let _=i;_<n;_+=1)g+=e[_]*r[d-_&c-1];for(let _=i;_<t;_+=1)g-=s[_]*a[d-_&c-1];r[d]=l[m],a[d]=g,d=d+1&c-1,u[m]=g}return d},xw=(s,t,e,n)=>{const i=e instanceof Float64Array?e:new Float64Array(e),r=n instanceof Float64Array?n:new Float64Array(n),a=i.length,o=r.length,c=Math.min(a,o);if(i[0]!==1){for(let g=0;g<a;g+=1)r[g]/=i[0];for(let g=1;g<o;g+=1)i[g]/=i[0]}const l=32,u=new Float32Array(l),h=new Float32Array(l),d=t.createBuffer(s.numberOfChannels,s.length,s.sampleRate),m=s.numberOfChannels;for(let g=0;g<m;g+=1){const _=s.getChannelData(g),f=d.getChannelData(g);u.fill(0),h.fill(0),l_(i,a,r,o,c,u,h,0,l,_,f)}return d},yw=(s,t,e,n,i)=>(r,a)=>{const o=new WeakMap;let c=null;const l=async(u,h)=>{let d=null,m=t(u);const g=an(m,h);if(h.createIIRFilter===void 0?d=s(h,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):g||(m=h.createIIRFilter(a,r)),o.set(h,d===null?m:d),d!==null){if(c===null){if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");const f=new e(u.context.destination.channelCount,u.context.length,h.sampleRate);c=(async()=>{await n(u,f,f.destination);const p=await i(f);return xw(p,h,r,a)})()}const _=await c;return d.buffer=_,d.start(0),d}return await n(u,h,m),m};return{render(u,h){const d=o.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},Sw=(s,t,e,n,i,r)=>a=>(o,c)=>{const l=s.get(o);if(l===void 0){if(!a&&r(o)){const u=n(o),{outputs:h}=e(o);for(const d of h)if(fa(d)){const m=n(d[0]);t(u,m,d[1],d[2])}else{const m=i(d[0]);u.disconnect(m,d[1])}}s.set(o,c)}else s.set(o,l+c)},Mw=(s,t)=>e=>{const n=s.get(e);return t(n)||t(e)},Tw=(s,t)=>e=>s.has(e)||t(e),bw=(s,t)=>e=>s.has(e)||t(e),Ew=(s,t)=>e=>{const n=s.get(e);return t(n)||t(e)},ww=s=>t=>s!==null&&t instanceof s,Aw=s=>t=>s!==null&&typeof s.AudioNode=="function"&&t instanceof s.AudioNode,Cw=s=>t=>s!==null&&typeof s.AudioParam=="function"&&t instanceof s.AudioParam,Rw=(s,t)=>e=>s(e)||t(e),Pw=s=>t=>s!==null&&t instanceof s,Dw=s=>s!==null&&s.isSecureContext,Lw=(s,t,e,n)=>class extends s{constructor(r,a){const o=e(r),c=t(o,a);if(n(o))throw TypeError();super(r,!0,c,null),this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},Nw={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},Iw=(s,t,e,n)=>class extends s{constructor(r,a){const o=e(r);if(n(o))throw new TypeError;const c={...Nw,...a},l=t(o,c);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},Ow=(s,t,e,n)=>class extends s{constructor(r,a){const o=e(r),c=t(o,a);if(n(o))throw new TypeError;super(r,!0,c,null),this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},Fw=(s,t,e)=>class extends s{constructor(i,r){const a=e(i),o=t(a,r);super(i,!0,o,null)}},Uw=(s,t,e,n,i,r)=>class extends e{constructor(o,c){super(o),this._nativeContext=o,Jc.set(this,o),n(o)&&i.set(o,new Set),this._destination=new s(this,c),this._listener=t(this,o),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(o){const c=typeof o=="function"?r(this,o):null;this._nativeContext.onstatechange=c;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?o:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},Xo=s=>{const t=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const e=s.decodeAudioData(t.buffer,()=>{});return e===void 0?!1:(e.catch(()=>{}),!0)}catch{}return!1},kw=(s,t)=>(e,n,i)=>{const r=new Set;return e.connect=(a=>(o,c=0,l=0)=>{const u=r.size===0;if(t(o))return a.call(e,o,c,l),s(r,[o,c,l],h=>h[0]===o&&h[1]===c&&h[2]===l,!0),u&&n(),o;a.call(e,o,c),s(r,[o,c],h=>h[0]===o&&h[1]===c,!0),u&&n()})(e.connect),e.disconnect=(a=>(o,c,l)=>{const u=r.size>0;if(o===void 0)a.apply(e),r.clear();else if(typeof o=="number"){a.call(e,o);for(const d of r)d[1]===o&&r.delete(d)}else{t(o)?a.call(e,o,c,l):a.call(e,o,c);for(const d of r)d[0]===o&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&r.delete(d)}const h=r.size===0;u&&h&&i()})(e.disconnect),e},me=(s,t,e)=>{const n=t[e];n!==void 0&&n!==s[e]&&(s[e]=n)},ke=(s,t)=>{me(s,t,"channelCount"),me(s,t,"channelCountMode"),me(s,t,"channelInterpretation")},rp=s=>typeof s.getFloatTimeDomainData=="function",Vw=s=>{s.getFloatTimeDomainData=t=>{const e=new Uint8Array(t.length);s.getByteTimeDomainData(e);const n=Math.max(e.length,s.fftSize);for(let i=0;i<n;i+=1)t[i]=(e[i]-128)*.0078125;return t}},Bw=(s,t)=>(e,n)=>{const i=e.createAnalyser();if(ke(i,n),!(n.maxDecibels>n.minDecibels))throw t();return me(i,n,"fftSize"),me(i,n,"maxDecibels"),me(i,n,"minDecibels"),me(i,n,"smoothingTimeConstant"),s(rp,()=>rp(i))||Vw(i),i},zw=s=>s===null?null:s.hasOwnProperty("AudioBuffer")?s.AudioBuffer:null,Se=(s,t,e)=>{const n=t[e];n!==void 0&&n!==s[e].value&&(s[e].value=n)},Gw=s=>{s.start=(t=>{let e=!1;return(n=0,i=0,r)=>{if(e)throw Xe();t.call(s,n,i,r),e=!0}})(s.start)},Sh=s=>{s.start=(t=>(e=0,n=0,i)=>{if(typeof i=="number"&&i<0||n<0||e<0)throw new RangeError("The parameters can't be negative.");t.call(s,e,n,i)})(s.start)},Mh=s=>{s.stop=(t=>(e=0)=>{if(e<0)throw new RangeError("The parameter can't be negative.");t.call(s,e)})(s.stop)},Hw=(s,t,e,n,i,r,a,o,c,l,u)=>(h,d)=>{const m=h.createBufferSource();return ke(m,d),Se(m,d,"playbackRate"),me(m,d,"buffer"),me(m,d,"loop"),me(m,d,"loopEnd"),me(m,d,"loopStart"),t(e,()=>e(h))||Gw(m),t(n,()=>n(h))||c(m),t(i,()=>i(h))||l(m,h),t(r,()=>r(h))||Sh(m),t(a,()=>a(h))||u(m,h),t(o,()=>o(h))||Mh(m),s(h,m),m},Ww=s=>s===null?null:s.hasOwnProperty("AudioContext")?s.AudioContext:s.hasOwnProperty("webkitAudioContext")?s.webkitAudioContext:null,Xw=(s,t)=>(e,n,i)=>{const r=e.destination;if(r.channelCount!==n)try{r.channelCount=n}catch{}i&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:n});const a=s(e,{channelCount:n,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return t(a,"channelCount",o=>()=>o.call(a),o=>c=>{o.call(a,c);try{r.channelCount=c}catch(l){if(c>r.maxChannelCount)throw l}}),t(a,"channelCountMode",o=>()=>o.call(a),o=>c=>{o.call(a,c),r.channelCountMode=c}),t(a,"channelInterpretation",o=>()=>o.call(a),o=>c=>{o.call(a,c),r.channelInterpretation=c}),Object.defineProperty(a,"maxChannelCount",{get:()=>r.maxChannelCount}),a.connect(r),a},qw=s=>s===null?null:s.hasOwnProperty("AudioWorkletNode")?s.AudioWorkletNode:null,Yw=s=>{const{port1:t}=new MessageChannel;try{t.postMessage(s)}finally{t.close()}},jw=(s,t,e,n,i)=>(r,a,o,c,l,u)=>{if(o!==null)try{const h=new o(r,c,u),d=new Map;let m=null;if(Object.defineProperties(h,{channelCount:{get:()=>u.channelCount,set:()=>{throw s()}},channelCountMode:{get:()=>"explicit",set:()=>{throw s()}},onprocessorerror:{get:()=>m,set:g=>{typeof m=="function"&&h.removeEventListener("processorerror",m),m=typeof g=="function"?g:null,typeof m=="function"&&h.addEventListener("processorerror",m)}}}),h.addEventListener=(g=>(..._)=>{if(_[0]==="processorerror"){const f=typeof _[1]=="function"?_[1]:typeof _[1]=="object"&&_[1]!==null&&typeof _[1].handleEvent=="function"?_[1].handleEvent:null;if(f!==null){const p=d.get(_[1]);p!==void 0?_[1]=p:(_[1]=x=>{x.type==="error"?(Object.defineProperties(x,{type:{value:"processorerror"}}),f(x)):f(new ErrorEvent(_[0],{...x}))},d.set(f,_[1]))}}return g.call(h,"error",_[1],_[2]),g.call(h,..._)})(h.addEventListener),h.removeEventListener=(g=>(..._)=>{if(_[0]==="processorerror"){const f=d.get(_[1]);f!==void 0&&(d.delete(_[1]),_[1]=f)}return g.call(h,"error",_[1],_[2]),g.call(h,_[0],_[1],_[2])})(h.removeEventListener),u.numberOfOutputs!==0){const g=e(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return h.connect(g).connect(r.destination),i(h,()=>g.disconnect(),()=>g.connect(r.destination))}return h}catch(h){throw h.code===11?n():h}if(l===void 0)throw n();return Yw(u),t(r,a,l,u)},u_=(s,t)=>s===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(s*t))))),$w=s=>new Promise((t,e)=>{const{port1:n,port2:i}=new MessageChannel;n.onmessage=({data:r})=>{n.close(),i.close(),t(r)},n.onmessageerror=({data:r})=>{n.close(),i.close(),e(r)},i.postMessage(s)}),Zw=async(s,t)=>{const e=await $w(t);return new s(e)},Kw=(s,t,e,n)=>{let i=Du.get(s);i===void 0&&(i=new WeakMap,Du.set(s,i));const r=Zw(e,n);return i.set(t,r),r},Jw=(s,t,e,n,i,r,a,o,c,l,u,h,d)=>(m,g,_,f)=>{if(f.numberOfInputs===0&&f.numberOfOutputs===0)throw c();const p=Array.isArray(f.outputChannelCount)?f.outputChannelCount:Array.from(f.outputChannelCount);if(p.some(J=>J<1))throw c();if(p.length!==f.numberOfOutputs)throw t();if(f.channelCountMode!=="explicit")throw c();const x=f.channelCount*f.numberOfInputs,v=p.reduce((J,tt)=>J+tt,0),M=_.parameterDescriptors===void 0?0:_.parameterDescriptors.length;if(x+M>6||v>6)throw c();const S=new MessageChannel,b=[],T=[];for(let J=0;J<f.numberOfInputs;J+=1)b.push(a(m,{channelCount:f.channelCount,channelCountMode:f.channelCountMode,channelInterpretation:f.channelInterpretation,gain:1})),T.push(i(m,{channelCount:f.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:f.channelCount}));const A=[];if(_.parameterDescriptors!==void 0)for(const{defaultValue:J,maxValue:tt,minValue:Dt,name:gt}of _.parameterDescriptors){const C=r(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:f.parameterData[gt]!==void 0?f.parameterData[gt]:J===void 0?0:J});Object.defineProperties(C.offset,{defaultValue:{get:()=>J===void 0?0:J},maxValue:{get:()=>tt===void 0?dn:tt},minValue:{get:()=>Dt===void 0?xn:Dt}}),A.push(C)}const N=n(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,x+M)}),y=u_(g,m.sampleRate),E=o(m,y,x+M,Math.max(1,v)),L=i(m,{channelCount:Math.max(1,v),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,v)}),k=[];for(let J=0;J<f.numberOfOutputs;J+=1)k.push(n(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:p[J]}));for(let J=0;J<f.numberOfInputs;J+=1){b[J].connect(T[J]);for(let tt=0;tt<f.channelCount;tt+=1)T[J].connect(N,tt,J*f.channelCount+tt)}const P=new a_(_.parameterDescriptors===void 0?[]:_.parameterDescriptors.map(({name:J},tt)=>{const Dt=A[tt];return Dt.connect(N,0,x+tt),Dt.start(0),[J,Dt.offset]}));N.connect(E);let F=f.channelInterpretation,O=null;const V=f.numberOfOutputs===0?[E]:k,z={get bufferSize(){return y},get channelCount(){return f.channelCount},set channelCount(J){throw e()},get channelCountMode(){return f.channelCountMode},set channelCountMode(J){throw e()},get channelInterpretation(){return F},set channelInterpretation(J){for(const tt of b)tt.channelInterpretation=J;F=J},get context(){return E.context},get inputs(){return b},get numberOfInputs(){return f.numberOfInputs},get numberOfOutputs(){return f.numberOfOutputs},get onprocessorerror(){return O},set onprocessorerror(J){typeof O=="function"&&z.removeEventListener("processorerror",O),O=typeof J=="function"?J:null,typeof O=="function"&&z.addEventListener("processorerror",O)},get parameters(){return P},get port(){return S.port2},addEventListener(...J){return E.addEventListener(J[0],J[1],J[2])},connect:s.bind(null,V),disconnect:l.bind(null,V),dispatchEvent(...J){return E.dispatchEvent(J[0])},removeEventListener(...J){return E.removeEventListener(J[0],J[1],J[2])}},H=new Map;S.port1.addEventListener=(J=>(...tt)=>{if(tt[0]==="message"){const Dt=typeof tt[1]=="function"?tt[1]:typeof tt[1]=="object"&&tt[1]!==null&&typeof tt[1].handleEvent=="function"?tt[1].handleEvent:null;if(Dt!==null){const gt=H.get(tt[1]);gt!==void 0?tt[1]=gt:(tt[1]=C=>{u(m.currentTime,m.sampleRate,()=>Dt(C))},H.set(Dt,tt[1]))}}return J.call(S.port1,tt[0],tt[1],tt[2])})(S.port1.addEventListener),S.port1.removeEventListener=(J=>(...tt)=>{if(tt[0]==="message"){const Dt=H.get(tt[1]);Dt!==void 0&&(H.delete(tt[1]),tt[1]=Dt)}return J.call(S.port1,tt[0],tt[1],tt[2])})(S.port1.removeEventListener);let q=null;Object.defineProperty(S.port1,"onmessage",{get:()=>q,set:J=>{typeof q=="function"&&S.port1.removeEventListener("message",q),q=typeof J=="function"?J:null,typeof q=="function"&&(S.port1.addEventListener("message",q),S.port1.start())}}),_.prototype.port=S.port1;let j=null;Kw(m,z,_,f).then(J=>j=J);const xt=Rc(f.numberOfInputs,f.channelCount),X=Rc(f.numberOfOutputs,p),Y=_.parameterDescriptors===void 0?[]:_.parameterDescriptors.reduce((J,{name:tt})=>({...J,[tt]:new Float32Array(128)}),{});let ct=!0;const _t=()=>{f.numberOfOutputs>0&&E.disconnect(L);for(let J=0,tt=0;J<f.numberOfOutputs;J+=1){const Dt=k[J];for(let gt=0;gt<p[J];gt+=1)L.disconnect(Dt,tt+gt,gt);tt+=p[J]}},et=new Map;E.onaudioprocess=({inputBuffer:J,outputBuffer:tt})=>{if(j!==null){const Dt=h(z);for(let gt=0;gt<y;gt+=128){for(let C=0;C<f.numberOfInputs;C+=1)for(let w=0;w<f.channelCount;w+=1)Cc(J,xt[C],w,w,gt);_.parameterDescriptors!==void 0&&_.parameterDescriptors.forEach(({name:C},w)=>{Cc(J,Y,C,x+w,gt)});for(let C=0;C<f.numberOfInputs;C+=1)for(let w=0;w<p[C];w+=1)X[C][w].byteLength===0&&(X[C][w]=new Float32Array(128));try{const C=xt.map((G,it)=>{if(Dt[it].size>0)return et.set(it,y/128),G;const rt=et.get(it);return rt===void 0?[]:(G.every(St=>St.every(ht=>ht===0))&&(rt===1?et.delete(it):et.set(it,rt-1)),G)});ct=u(m.currentTime+gt/m.sampleRate,m.sampleRate,()=>j.process(C,X,Y));for(let G=0,it=0;G<f.numberOfOutputs;G+=1){for(let nt=0;nt<p[G];nt+=1)c_(tt,X[G],nt,it+nt,gt);it+=p[G]}}catch(C){ct=!1,z.dispatchEvent(new ErrorEvent("processorerror",{colno:C.colno,filename:C.filename,lineno:C.lineno,message:C.message}))}if(!ct){for(let C=0;C<f.numberOfInputs;C+=1){b[C].disconnect(T[C]);for(let w=0;w<f.channelCount;w+=1)T[gt].disconnect(N,w,C*f.channelCount+w)}if(_.parameterDescriptors!==void 0){const C=_.parameterDescriptors.length;for(let w=0;w<C;w+=1){const G=A[w];G.disconnect(N,0,x+w),G.stop()}}N.disconnect(E),E.onaudioprocess=null,mt?_t():B();break}}}};let mt=!1;const Ot=a(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),wt=()=>E.connect(Ot).connect(m.destination),B=()=>{E.disconnect(Ot),Ot.disconnect()},ue=()=>{if(ct){B(),f.numberOfOutputs>0&&E.connect(L);for(let J=0,tt=0;J<f.numberOfOutputs;J+=1){const Dt=k[J];for(let gt=0;gt<p[J];gt+=1)L.connect(Dt,tt+gt,gt);tt+=p[J]}}mt=!0},Tt=()=>{ct&&(wt(),_t()),mt=!1};return wt(),d(z,ue,Tt)},h_=(s,t)=>{const e=s.createBiquadFilter();return ke(e,t),Se(e,t,"Q"),Se(e,t,"detune"),Se(e,t,"frequency"),Se(e,t,"gain"),me(e,t,"type"),e},Qw=(s,t)=>(e,n)=>{const i=e.createChannelMerger(n.numberOfInputs);return s!==null&&s.name==="webkitAudioContext"&&t(e,i),ke(i,n),i},tA=s=>{const t=s.numberOfOutputs;Object.defineProperty(s,"channelCount",{get:()=>t,set:e=>{if(e!==t)throw Xe()}}),Object.defineProperty(s,"channelCountMode",{get:()=>"explicit",set:e=>{if(e!=="explicit")throw Xe()}}),Object.defineProperty(s,"channelInterpretation",{get:()=>"discrete",set:e=>{if(e!=="discrete")throw Xe()}})},pa=(s,t)=>{const e=s.createChannelSplitter(t.numberOfOutputs);return ke(e,t),tA(e),e},eA=(s,t,e,n,i)=>(r,a)=>{if(r.createConstantSource===void 0)return e(r,a);const o=r.createConstantSource();return ke(o,a),Se(o,a,"offset"),t(n,()=>n(r))||Sh(o),t(i,()=>i(r))||Mh(o),s(r,o),o},mo=(s,t)=>(s.connect=t.connect.bind(t),s.disconnect=t.disconnect.bind(t),s),nA=(s,t,e,n)=>(i,{offset:r,...a})=>{const o=i.createBuffer(1,2,44100),c=t(i,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=e(i,{...a,gain:r}),u=o.getChannelData(0);u[0]=1,u[1]=1,c.buffer=o,c.loop=!0;const h={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(g){l.channelCount=g},get channelCountMode(){return l.channelCountMode},set channelCountMode(g){l.channelCountMode=g},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(g){l.channelInterpretation=g},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(g){c.onended=g},addEventListener(...g){return c.addEventListener(g[0],g[1],g[2])},dispatchEvent(...g){return c.dispatchEvent(g[0])},removeEventListener(...g){return c.removeEventListener(g[0],g[1],g[2])},start(g=0){c.start.call(c,g)},stop(g=0){c.stop.call(c,g)}},d=()=>c.connect(l),m=()=>c.disconnect(l);return s(i,c),n(mo(h,l),d,m)},iA=(s,t)=>(e,n)=>{const i=e.createConvolver();if(ke(i,n),n.disableNormalization===i.normalize&&(i.normalize=!n.disableNormalization),me(i,n,"buffer"),n.channelCount>2||(t(i,"channelCount",r=>()=>r.call(i),r=>a=>{if(a>2)throw s();return r.call(i,a)}),n.channelCountMode==="max"))throw s();return t(i,"channelCountMode",r=>()=>r.call(i),r=>a=>{if(a==="max")throw s();return r.call(i,a)}),i},d_=(s,t)=>{const e=s.createDelay(t.maxDelayTime);return ke(e,t),Se(e,t,"delayTime"),e},sA=s=>(t,e)=>{const n=t.createDynamicsCompressor();if(ke(n,e),e.channelCount>2||e.channelCountMode==="max")throw s();return Se(n,e,"attack"),Se(n,e,"knee"),Se(n,e,"ratio"),Se(n,e,"release"),Se(n,e,"threshold"),n},An=(s,t)=>{const e=s.createGain();return ke(e,t),Se(e,t,"gain"),e},rA=s=>(t,e,n)=>{if(t.createIIRFilter===void 0)return s(t,e,n);const i=t.createIIRFilter(n.feedforward,n.feedback);return ke(i,n),i};function oA(s,t){const e=t[0]*t[0]+t[1]*t[1];return[(s[0]*t[0]+s[1]*t[1])/e,(s[1]*t[0]-s[0]*t[1])/e]}function aA(s,t){return[s[0]*t[0]-s[1]*t[1],s[0]*t[1]+s[1]*t[0]]}function op(s,t){let e=[0,0];for(let n=s.length-1;n>=0;n-=1)e=aA(e,t),e[0]+=s[n];return e}const cA=(s,t,e,n)=>(i,r,{channelCount:a,channelCountMode:o,channelInterpretation:c,feedback:l,feedforward:u})=>{const h=u_(r,i.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),m=u instanceof Float64Array?u:new Float64Array(u),g=d.length,_=m.length,f=Math.min(g,_);if(g===0||g>20)throw n();if(d[0]===0)throw t();if(_===0||_>20)throw n();if(m[0]===0)throw t();if(d[0]!==1){for(let A=0;A<_;A+=1)m[A]/=d[0];for(let A=1;A<g;A+=1)d[A]/=d[0]}const p=e(i,h,a,a);p.channelCount=a,p.channelCountMode=o,p.channelInterpretation=c;const x=32,v=[],M=[],S=[];for(let A=0;A<a;A+=1){v.push(0);const N=new Float32Array(x),y=new Float32Array(x);N.fill(0),y.fill(0),M.push(N),S.push(y)}p.onaudioprocess=A=>{const N=A.inputBuffer,y=A.outputBuffer,E=N.numberOfChannels;for(let L=0;L<E;L+=1){const k=N.getChannelData(L),P=y.getChannelData(L);v[L]=l_(d,g,m,_,f,M[L],S[L],v[L],x,k,P)}};const b=i.sampleRate/2;return mo({get bufferSize(){return h},get channelCount(){return p.channelCount},set channelCount(A){p.channelCount=A},get channelCountMode(){return p.channelCountMode},set channelCountMode(A){p.channelCountMode=A},get channelInterpretation(){return p.channelInterpretation},set channelInterpretation(A){p.channelInterpretation=A},get context(){return p.context},get inputs(){return[p]},get numberOfInputs(){return p.numberOfInputs},get numberOfOutputs(){return p.numberOfOutputs},addEventListener(...A){return p.addEventListener(A[0],A[1],A[2])},dispatchEvent(...A){return p.dispatchEvent(A[0])},getFrequencyResponse(A,N,y){if(A.length!==N.length||N.length!==y.length)throw s();const E=A.length;for(let L=0;L<E;L+=1){const k=-Math.PI*(A[L]/b),P=[Math.cos(k),Math.sin(k)],F=op(m,P),O=op(d,P),V=oA(F,O);N[L]=Math.sqrt(V[0]*V[0]+V[1]*V[1]),y[L]=Math.atan2(V[1],V[0])}},removeEventListener(...A){return p.removeEventListener(A[0],A[1],A[2])}},p)},lA=(s,t)=>s.createMediaElementSource(t.mediaElement),uA=(s,t)=>{const e=s.createMediaStreamDestination();return ke(e,t),e.numberOfOutputs===1&&Object.defineProperty(e,"numberOfOutputs",{get:()=>0}),e},hA=(s,{mediaStream:t})=>{const e=t.getAudioTracks();e.sort((r,a)=>r.id<a.id?-1:r.id>a.id?1:0);const n=e.slice(0,1),i=s.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(i,"mediaStream",{value:t}),i},dA=(s,t)=>(e,{mediaStreamTrack:n})=>{if(typeof e.createMediaStreamTrackSource=="function")return e.createMediaStreamTrackSource(n);const i=new MediaStream([n]),r=e.createMediaStreamSource(i);if(n.kind!=="audio")throw s();if(t(e))throw new TypeError;return r},fA=s=>s===null?null:s.hasOwnProperty("OfflineAudioContext")?s.OfflineAudioContext:s.hasOwnProperty("webkitOfflineAudioContext")?s.webkitOfflineAudioContext:null,pA=(s,t,e,n,i,r)=>(a,o)=>{const c=a.createOscillator();return ke(c,o),Se(c,o,"detune"),Se(c,o,"frequency"),o.periodicWave!==void 0?c.setPeriodicWave(o.periodicWave):me(c,o,"type"),t(e,()=>e(a))||Sh(c),t(n,()=>n(a))||r(c,a),t(i,()=>i(a))||Mh(c),s(a,c),c},mA=s=>(t,e)=>{const n=t.createPanner();return n.orientationX===void 0?s(t,e):(ke(n,e),Se(n,e,"orientationX"),Se(n,e,"orientationY"),Se(n,e,"orientationZ"),Se(n,e,"positionX"),Se(n,e,"positionY"),Se(n,e,"positionZ"),me(n,e,"coneInnerAngle"),me(n,e,"coneOuterAngle"),me(n,e,"coneOuterGain"),me(n,e,"distanceModel"),me(n,e,"maxDistance"),me(n,e,"panningModel"),me(n,e,"refDistance"),me(n,e,"rolloffFactor"),n)},_A=(s,t,e,n,i,r,a,o,c,l)=>(u,{coneInnerAngle:h,coneOuterAngle:d,coneOuterGain:m,distanceModel:g,maxDistance:_,orientationX:f,orientationY:p,orientationZ:x,panningModel:v,positionX:M,positionY:S,positionZ:b,refDistance:T,rolloffFactor:A,...N})=>{const y=u.createPanner();if(N.channelCount>2||N.channelCountMode==="max")throw a();ke(y,N);const E={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},L=e(u,{...E,channelInterpretation:"speakers",numberOfInputs:6}),k=n(u,{...N,gain:1}),P=n(u,{...E,gain:1}),F=n(u,{...E,gain:0}),O=n(u,{...E,gain:0}),V=n(u,{...E,gain:0}),z=n(u,{...E,gain:0}),H=n(u,{...E,gain:0}),q=i(u,256,6,1),j=r(u,{...E,curve:new Float32Array([1,1]),oversample:"none"});let Q=[f,p,x],xt=[M,S,b];const X=new Float32Array(1);q.onaudioprocess=({inputBuffer:et})=>{const mt=[c(et,X,0),c(et,X,1),c(et,X,2)];mt.some((wt,B)=>wt!==Q[B])&&(y.setOrientation(...mt),Q=mt);const Ot=[c(et,X,3),c(et,X,4),c(et,X,5)];Ot.some((wt,B)=>wt!==xt[B])&&(y.setPosition(...Ot),xt=Ot)},Object.defineProperty(F.gain,"defaultValue",{get:()=>0}),Object.defineProperty(O.gain,"defaultValue",{get:()=>0}),Object.defineProperty(V.gain,"defaultValue",{get:()=>0}),Object.defineProperty(z.gain,"defaultValue",{get:()=>0}),Object.defineProperty(H.gain,"defaultValue",{get:()=>0});const Y={get bufferSize(){},get channelCount(){return y.channelCount},set channelCount(et){if(et>2)throw a();k.channelCount=et,y.channelCount=et},get channelCountMode(){return y.channelCountMode},set channelCountMode(et){if(et==="max")throw a();k.channelCountMode=et,y.channelCountMode=et},get channelInterpretation(){return y.channelInterpretation},set channelInterpretation(et){k.channelInterpretation=et,y.channelInterpretation=et},get coneInnerAngle(){return y.coneInnerAngle},set coneInnerAngle(et){y.coneInnerAngle=et},get coneOuterAngle(){return y.coneOuterAngle},set coneOuterAngle(et){y.coneOuterAngle=et},get coneOuterGain(){return y.coneOuterGain},set coneOuterGain(et){if(et<0||et>1)throw t();y.coneOuterGain=et},get context(){return y.context},get distanceModel(){return y.distanceModel},set distanceModel(et){y.distanceModel=et},get inputs(){return[k]},get maxDistance(){return y.maxDistance},set maxDistance(et){if(et<0)throw new RangeError;y.maxDistance=et},get numberOfInputs(){return y.numberOfInputs},get numberOfOutputs(){return y.numberOfOutputs},get orientationX(){return P.gain},get orientationY(){return F.gain},get orientationZ(){return O.gain},get panningModel(){return y.panningModel},set panningModel(et){y.panningModel=et},get positionX(){return V.gain},get positionY(){return z.gain},get positionZ(){return H.gain},get refDistance(){return y.refDistance},set refDistance(et){if(et<0)throw new RangeError;y.refDistance=et},get rolloffFactor(){return y.rolloffFactor},set rolloffFactor(et){if(et<0)throw new RangeError;y.rolloffFactor=et},addEventListener(...et){return k.addEventListener(et[0],et[1],et[2])},dispatchEvent(...et){return k.dispatchEvent(et[0])},removeEventListener(...et){return k.removeEventListener(et[0],et[1],et[2])}};h!==Y.coneInnerAngle&&(Y.coneInnerAngle=h),d!==Y.coneOuterAngle&&(Y.coneOuterAngle=d),m!==Y.coneOuterGain&&(Y.coneOuterGain=m),g!==Y.distanceModel&&(Y.distanceModel=g),_!==Y.maxDistance&&(Y.maxDistance=_),f!==Y.orientationX.value&&(Y.orientationX.value=f),p!==Y.orientationY.value&&(Y.orientationY.value=p),x!==Y.orientationZ.value&&(Y.orientationZ.value=x),v!==Y.panningModel&&(Y.panningModel=v),M!==Y.positionX.value&&(Y.positionX.value=M),S!==Y.positionY.value&&(Y.positionY.value=S),b!==Y.positionZ.value&&(Y.positionZ.value=b),T!==Y.refDistance&&(Y.refDistance=T),A!==Y.rolloffFactor&&(Y.rolloffFactor=A),(Q[0]!==1||Q[1]!==0||Q[2]!==0)&&y.setOrientation(...Q),(xt[0]!==0||xt[1]!==0||xt[2]!==0)&&y.setPosition(...xt);const ct=()=>{k.connect(y),s(k,j,0,0),j.connect(P).connect(L,0,0),j.connect(F).connect(L,0,1),j.connect(O).connect(L,0,2),j.connect(V).connect(L,0,3),j.connect(z).connect(L,0,4),j.connect(H).connect(L,0,5),L.connect(q).connect(u.destination)},_t=()=>{k.disconnect(y),o(k,j,0,0),j.disconnect(P),P.disconnect(L),j.disconnect(F),F.disconnect(L),j.disconnect(O),O.disconnect(L),j.disconnect(V),V.disconnect(L),j.disconnect(z),z.disconnect(L),j.disconnect(H),H.disconnect(L),L.disconnect(q),q.disconnect(u.destination)};return l(mo(Y,y),ct,_t)},gA=s=>(t,{disableNormalization:e,imag:n,real:i})=>{const r=n instanceof Float32Array?n:new Float32Array(n),a=i instanceof Float32Array?i:new Float32Array(i),o=t.createPeriodicWave(a,r,{disableNormalization:e});if(Array.from(n).length<2)throw s();return o},ma=(s,t,e,n)=>s.createScriptProcessor(t,e,n),vA=(s,t)=>(e,n)=>{const i=n.channelCountMode;if(i==="clamped-max")throw t();if(e.createStereoPanner===void 0)return s(e,n);const r=e.createStereoPanner();return ke(r,n),Se(r,n,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>i,set:a=>{if(a!==i)throw t()}}),r},xA=(s,t,e,n,i,r)=>{const o=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},u={...l,oversample:"none"},h=(g,_,f,p)=>{const x=new Float32Array(16385),v=new Float32Array(16385);for(let N=0;N<16385;N+=1){const y=N/16384*c;x[N]=Math.cos(y),v[N]=Math.sin(y)}const M=e(g,{...l,gain:0}),S=n(g,{...u,curve:x}),b=n(g,{...u,curve:o}),T=e(g,{...l,gain:0}),A=n(g,{...u,curve:v});return{connectGraph(){_.connect(M),_.connect(b.inputs===void 0?b:b.inputs[0]),_.connect(T),b.connect(f),f.connect(S.inputs===void 0?S:S.inputs[0]),f.connect(A.inputs===void 0?A:A.inputs[0]),S.connect(M.gain),A.connect(T.gain),M.connect(p,0,0),T.connect(p,0,1)},disconnectGraph(){_.disconnect(M),_.disconnect(b.inputs===void 0?b:b.inputs[0]),_.disconnect(T),b.disconnect(f),f.disconnect(S.inputs===void 0?S:S.inputs[0]),f.disconnect(A.inputs===void 0?A:A.inputs[0]),S.disconnect(M.gain),A.disconnect(T.gain),M.disconnect(p,0,0),T.disconnect(p,0,1)}}},d=(g,_,f,p)=>{const x=new Float32Array(16385),v=new Float32Array(16385),M=new Float32Array(16385),S=new Float32Array(16385),b=Math.floor(16385/2);for(let V=0;V<16385;V+=1)if(V>b){const z=(V-b)/(16384-b)*c;x[V]=Math.cos(z),v[V]=Math.sin(z),M[V]=0,S[V]=1}else{const z=V/(16384-b)*c;x[V]=1,v[V]=0,M[V]=Math.cos(z),S[V]=Math.sin(z)}const T=t(g,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),A=e(g,{...l,gain:0}),N=n(g,{...u,curve:x}),y=e(g,{...l,gain:0}),E=n(g,{...u,curve:v}),L=n(g,{...u,curve:o}),k=e(g,{...l,gain:0}),P=n(g,{...u,curve:M}),F=e(g,{...l,gain:0}),O=n(g,{...u,curve:S});return{connectGraph(){_.connect(T),_.connect(L.inputs===void 0?L:L.inputs[0]),T.connect(A,0),T.connect(y,0),T.connect(k,1),T.connect(F,1),L.connect(f),f.connect(N.inputs===void 0?N:N.inputs[0]),f.connect(E.inputs===void 0?E:E.inputs[0]),f.connect(P.inputs===void 0?P:P.inputs[0]),f.connect(O.inputs===void 0?O:O.inputs[0]),N.connect(A.gain),E.connect(y.gain),P.connect(k.gain),O.connect(F.gain),A.connect(p,0,0),k.connect(p,0,0),y.connect(p,0,1),F.connect(p,0,1)},disconnectGraph(){_.disconnect(T),_.disconnect(L.inputs===void 0?L:L.inputs[0]),T.disconnect(A,0),T.disconnect(y,0),T.disconnect(k,1),T.disconnect(F,1),L.disconnect(f),f.disconnect(N.inputs===void 0?N:N.inputs[0]),f.disconnect(E.inputs===void 0?E:E.inputs[0]),f.disconnect(P.inputs===void 0?P:P.inputs[0]),f.disconnect(O.inputs===void 0?O:O.inputs[0]),N.disconnect(A.gain),E.disconnect(y.gain),P.disconnect(k.gain),O.disconnect(F.gain),A.disconnect(p,0,0),k.disconnect(p,0,0),y.disconnect(p,0,1),F.disconnect(p,0,1)}}},m=(g,_,f,p,x)=>{if(_===1)return h(g,f,p,x);if(_===2)return d(g,f,p,x);throw i()};return(g,{channelCount:_,channelCountMode:f,pan:p,...x})=>{if(f==="max")throw i();const v=s(g,{...x,channelCount:1,channelCountMode:f,numberOfInputs:2}),M=e(g,{...x,channelCount:_,channelCountMode:f,gain:1}),S=e(g,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:p});let{connectGraph:b,disconnectGraph:T}=m(g,_,M,S,v);Object.defineProperty(S.gain,"defaultValue",{get:()=>0}),Object.defineProperty(S.gain,"maxValue",{get:()=>1}),Object.defineProperty(S.gain,"minValue",{get:()=>-1});const A={get bufferSize(){},get channelCount(){return M.channelCount},set channelCount(L){M.channelCount!==L&&(N&&T(),{connectGraph:b,disconnectGraph:T}=m(g,L,M,S,v),N&&b()),M.channelCount=L},get channelCountMode(){return M.channelCountMode},set channelCountMode(L){if(L==="clamped-max"||L==="max")throw i();M.channelCountMode=L},get channelInterpretation(){return M.channelInterpretation},set channelInterpretation(L){M.channelInterpretation=L},get context(){return M.context},get inputs(){return[M]},get numberOfInputs(){return M.numberOfInputs},get numberOfOutputs(){return M.numberOfOutputs},get pan(){return S.gain},addEventListener(...L){return M.addEventListener(L[0],L[1],L[2])},dispatchEvent(...L){return M.dispatchEvent(L[0])},removeEventListener(...L){return M.removeEventListener(L[0],L[1],L[2])}};let N=!1;const y=()=>{b(),N=!0},E=()=>{T(),N=!1};return r(mo(A,v),y,E)}},yA=(s,t,e,n,i,r,a)=>(o,c)=>{const l=o.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&o.createGain().gain.automationRate===void 0)return e(o,c);ke(l,c);const u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw t();me(l,{curve:u},"curve"),me(l,c,"oversample");let h=null,d=!1;return a(l,"curve",_=>()=>_.call(l),_=>f=>(_.call(l,f),d&&(n(f)&&h===null?h=s(o,l):!n(f)&&h!==null&&(h(),h=null)),f)),i(l,()=>{d=!0,n(l.curve)&&(h=s(o,l))},()=>{d=!1,h!==null&&(h(),h=null)})},SA=(s,t,e,n,i)=>(r,{curve:a,oversample:o,...c})=>{const l=r.createWaveShaper(),u=r.createWaveShaper();ke(l,c),ke(u,c);const h=e(r,{...c,gain:1}),d=e(r,{...c,gain:-1}),m=e(r,{...c,gain:1}),g=e(r,{...c,gain:-1});let _=null,f=!1,p=null;const x={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(S){h.channelCount=S,d.channelCount=S,l.channelCount=S,m.channelCount=S,u.channelCount=S,g.channelCount=S},get channelCountMode(){return l.channelCountMode},set channelCountMode(S){h.channelCountMode=S,d.channelCountMode=S,l.channelCountMode=S,m.channelCountMode=S,u.channelCountMode=S,g.channelCountMode=S},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(S){h.channelInterpretation=S,d.channelInterpretation=S,l.channelInterpretation=S,m.channelInterpretation=S,u.channelInterpretation=S,g.channelInterpretation=S},get context(){return l.context},get curve(){return p},set curve(S){if(S!==null&&S.length<2)throw t();if(S===null)l.curve=S,u.curve=S;else{const b=S.length,T=new Float32Array(b+2-b%2),A=new Float32Array(b+2-b%2);T[0]=S[0],A[0]=-S[b-1];const N=Math.ceil((b+1)/2),y=(b+1)/2-1;for(let E=1;E<N;E+=1){const L=E/N*y,k=Math.floor(L),P=Math.ceil(L);T[E]=k===P?S[k]:(1-(L-k))*S[k]+(1-(P-L))*S[P],A[E]=k===P?-S[b-1-k]:-((1-(L-k))*S[b-1-k])-(1-(P-L))*S[b-1-P]}T[N]=b%2===1?S[N-1]:(S[N-2]+S[N-1])/2,l.curve=T,u.curve=A}p=S,f&&(n(p)&&_===null?_=s(r,h):_!==null&&(_(),_=null))},get inputs(){return[h]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(S){l.oversample=S,u.oversample=S},addEventListener(...S){return h.addEventListener(S[0],S[1],S[2])},dispatchEvent(...S){return h.dispatchEvent(S[0])},removeEventListener(...S){return h.removeEventListener(S[0],S[1],S[2])}};a!==null&&(x.curve=a instanceof Float32Array?a:new Float32Array(a)),o!==x.oversample&&(x.oversample=o);const v=()=>{h.connect(l).connect(m),h.connect(d).connect(u).connect(g).connect(m),f=!0,n(p)&&(_=s(r,h))},M=()=>{h.disconnect(l),l.disconnect(m),h.disconnect(d),d.disconnect(u),u.disconnect(g),g.disconnect(m),f=!1,_!==null&&(_(),_=null)};return i(mo(x,m),v,M)},gn=()=>new DOMException("","NotSupportedError"),MA={numberOfChannels:1},TA=(s,t,e,n,i)=>class extends s{constructor(a,o,c){let l;if(typeof a=="number"&&o!==void 0&&c!==void 0)l={length:o,numberOfChannels:a,sampleRate:c};else if(typeof a=="object")l=a;else throw new Error("The given parameters are not valid.");const{length:u,numberOfChannels:h,sampleRate:d}={...MA,...l},m=n(h,u,d);t(Xo,()=>Xo(m))||m.addEventListener("statechange",(()=>{let g=0;const _=f=>{this._state==="running"&&(g>0?(m.removeEventListener("statechange",_),f.stopImmediatePropagation(),this._waitForThePromiseToSettle(f)):g+=1)};return _})()),super(m,h),this._length=u,this._nativeOfflineAudioContext=m,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(e()):(this._state="running",i(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,i_(this)}))}_waitForThePromiseToSettle(a){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(a):setTimeout(()=>this._waitForThePromiseToSettle(a))}},bA={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},EA=(s,t,e,n,i,r,a)=>class extends s{constructor(c,l){const u=i(c),h={...bA,...l},d=e(u,h),m=r(u),g=m?n():null,_=c.sampleRate/2;super(c,!1,d,g),this._detune=t(this,m,d.detune,153600,-153600),this._frequency=t(this,m,d.frequency,_,-_),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=g,this._oscillatorNodeRenderer!==null&&h.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=h.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?a(this,c):null;this._nativeOscillatorNode.onended=l;const u=this._nativeOscillatorNode.onended;this._onended=u!==null&&u===l?c:u}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){oo(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),Wi(this)&&ha(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},wA=(s,t,e,n,i)=>()=>{const r=new WeakMap;let a=null,o=null,c=null;const l=async(u,h)=>{let d=e(u);const m=an(d,h);if(!m){const g={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:a===null?void 0:a,type:d.type};d=t(h,g),o!==null&&d.start(o),c!==null&&d.stop(c)}return r.set(h,d),m?(await s(h,u.detune,d.detune),await s(h,u.frequency,d.frequency)):(await n(h,u.detune,d.detune),await n(h,u.frequency,d.frequency)),await i(u,h,d),d};return{set periodicWave(u){a=u},set start(u){o=u},set stop(u){c=u},render(u,h){const d=r.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},AA={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},CA=(s,t,e,n,i,r,a)=>class extends s{constructor(c,l){const u=i(c),h={...AA,...l},d=e(u,h),m=r(u),g=m?n():null;super(c,!1,d,g),this._nativePannerNode=d,this._orientationX=t(this,m,d.orientationX,dn,xn),this._orientationY=t(this,m,d.orientationY,dn,xn),this._orientationZ=t(this,m,d.orientationZ,dn,xn),this._positionX=t(this,m,d.positionX,dn,xn),this._positionY=t(this,m,d.positionY,dn,xn),this._positionZ=t(this,m,d.positionZ,dn,xn),a(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},RA=(s,t,e,n,i,r,a,o,c,l)=>()=>{const u=new WeakMap;let h=null;const d=async(m,g)=>{let _=null,f=r(m);const p={channelCount:f.channelCount,channelCountMode:f.channelCountMode,channelInterpretation:f.channelInterpretation},x={...p,coneInnerAngle:f.coneInnerAngle,coneOuterAngle:f.coneOuterAngle,coneOuterGain:f.coneOuterGain,distanceModel:f.distanceModel,maxDistance:f.maxDistance,panningModel:f.panningModel,refDistance:f.refDistance,rolloffFactor:f.rolloffFactor},v=an(f,g);if("bufferSize"in f)_=n(g,{...p,gain:1});else if(!v){const M={...x,orientationX:f.orientationX.value,orientationY:f.orientationY.value,orientationZ:f.orientationZ.value,positionX:f.positionX.value,positionY:f.positionY.value,positionZ:f.positionZ.value};f=i(g,M)}if(u.set(g,_===null?f:_),_!==null){if(h===null){if(a===null)throw new Error("Missing the native OfflineAudioContext constructor.");const E=new a(6,m.context.length,g.sampleRate),L=t(E,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});L.connect(E.destination),h=(async()=>{const k=await Promise.all([m.orientationX,m.orientationY,m.orientationZ,m.positionX,m.positionY,m.positionZ].map(async(P,F)=>{const O=e(E,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:F===0?1:0});return await o(E,P,O.offset),O}));for(let P=0;P<6;P+=1)k[P].connect(L,0,P),k[P].start(0);return l(E)})()}const M=await h,S=n(g,{...p,gain:1});await c(m,g,S);const b=[];for(let E=0;E<M.numberOfChannels;E+=1)b.push(M.getChannelData(E));let T=[b[0][0],b[1][0],b[2][0]],A=[b[3][0],b[4][0],b[5][0]],N=n(g,{...p,gain:1}),y=i(g,{...x,orientationX:T[0],orientationY:T[1],orientationZ:T[2],positionX:A[0],positionY:A[1],positionZ:A[2]});S.connect(N).connect(y.inputs[0]),y.connect(_);for(let E=128;E<M.length;E+=128){const L=[b[0][E],b[1][E],b[2][E]],k=[b[3][E],b[4][E],b[5][E]];if(L.some((P,F)=>P!==T[F])||k.some((P,F)=>P!==A[F])){T=L,A=k;const P=E/g.sampleRate;N.gain.setValueAtTime(0,P),N=n(g,{...p,gain:0}),y=i(g,{...x,orientationX:T[0],orientationY:T[1],orientationZ:T[2],positionX:A[0],positionY:A[1],positionZ:A[2]}),N.gain.setValueAtTime(1,P),S.connect(N).connect(y.inputs[0]),y.connect(_)}}return _}return v?(await s(g,m.orientationX,f.orientationX),await s(g,m.orientationY,f.orientationY),await s(g,m.orientationZ,f.orientationZ),await s(g,m.positionX,f.positionX),await s(g,m.positionY,f.positionY),await s(g,m.positionZ,f.positionZ)):(await o(g,m.orientationX,f.orientationX),await o(g,m.orientationY,f.orientationY),await o(g,m.orientationZ,f.orientationZ),await o(g,m.positionX,f.positionX),await o(g,m.positionY,f.positionY),await o(g,m.positionZ,f.positionZ)),po(f)?await c(m,g,f.inputs[0]):await c(m,g,f),f};return{render(m,g){const _=u.get(g);return _!==void 0?Promise.resolve(_):d(m,g)}}},PA={disableNormalization:!1},DA=(s,t,e,n)=>class f_{constructor(r,a){const o=t(r),c=n({...PA,...a}),l=s(o,c);return e.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===f_.prototype||e.has(r)}},LA=(s,t)=>(e,n,i)=>(s(n).replay(i),t(n,e,i)),NA=(s,t,e)=>async(n,i,r)=>{const a=s(n);await Promise.all(a.activeInputs.map((o,c)=>Array.from(o).map(async([l,u])=>{const d=await t(l).render(l,i),m=n.context.destination;!e(l)&&(n!==m||!e(n))&&d.connect(r,u,c)})).reduce((o,c)=>[...o,...c],[]))},IA=(s,t,e)=>async(n,i,r)=>{const a=t(n);await Promise.all(Array.from(a.activeInputs).map(async([o,c])=>{const u=await s(o).render(o,i);e(o)||u.connect(r,c)}))},OA=(s,t,e,n)=>i=>s(Xo,()=>Xo(i))?Promise.resolve(s(n,n)).then(r=>{if(!r){const a=e(i,512,0,1);i.oncomplete=()=>{a.onaudioprocess=null,a.disconnect()},a.onaudioprocess=()=>i.currentTime,a.connect(i.destination)}return i.startRendering()}):new Promise(r=>{const a=t(i,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});i.oncomplete=o=>{a.disconnect(),r(o.renderedBuffer)},a.connect(i.destination),i.startRendering()}),FA=s=>(t,e)=>{s.set(t,e)},UA=s=>(t,e)=>s.set(t,e),kA=(s,t,e,n,i,r,a,o)=>(c,l)=>e(c).render(c,l).then(()=>Promise.all(Array.from(n(l)).map(u=>e(u).render(u,l)))).then(()=>i(l)).then(u=>(typeof u.copyFromChannel!="function"?(a(u),vh(u)):t(r,()=>r(u))||o(u),s.add(u),u)),VA={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},BA=(s,t,e,n,i,r)=>class extends s{constructor(o,c){const l=i(o),u={...VA,...c},h=e(l,u),d=r(l),m=d?n():null;super(o,!1,h,m),this._pan=t(this,d,h.pan)}get pan(){return this._pan}},zA=(s,t,e,n,i)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=e(o);const u=an(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=t(c,h)}return r.set(c,l),u?await s(c,o.pan,l.pan):await n(c,o.pan,l.pan),po(l)?await i(o,c,l.inputs[0]):await i(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},GA=s=>()=>{if(s===null)return!1;try{new s({length:1,sampleRate:44100})}catch{return!1}return!0},HA=(s,t)=>async()=>{if(s===null)return!0;if(t===null)return!1;const e=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new t(1,128,44100),i=URL.createObjectURL(e);let r=!1,a=!1;try{await n.audioWorklet.addModule(i);const o=new s(n,"a",{numberOfOutputs:0}),c=n.createOscillator();o.port.onmessage=()=>r=!0,o.onprocessorerror=()=>a=!0,c.connect(o),c.start(0),await n.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(i)}return r&&!a},WA=(s,t)=>()=>{if(t===null)return Promise.resolve(!1);const e=new t(1,1,44100),n=s(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(i=>{e.oncomplete=()=>{n.disconnect(),i(e.currentTime!==0)},e.startRendering()})},XA=()=>new DOMException("","UnknownError"),qA={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},YA=(s,t,e,n,i,r,a)=>class extends s{constructor(c,l){const u=i(c),h={...qA,...l},d=e(u,h),g=r(u)?n():null;super(c,!0,d,g),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,a(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw t();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},jA=(s,t,e)=>()=>{const n=new WeakMap,i=async(r,a)=>{let o=t(r);if(!an(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,curve:o.curve,oversample:o.oversample};o=s(a,l)}return n.set(a,o),po(o)?await e(r,a,o.inputs[0]):await e(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):i(r,a)}}},$A=()=>typeof window>"u"?null:window,ZA=(s,t)=>e=>{e.copyFromChannel=(n,i,r=0)=>{const a=s(r),o=s(i);if(o>=e.numberOfChannels)throw t();const c=e.length,l=e.getChannelData(o),u=n.length;for(let h=a<0?-a:0;h+a<c&&h<u;h+=1)n[h]=l[h+a]},e.copyToChannel=(n,i,r=0)=>{const a=s(r),o=s(i);if(o>=e.numberOfChannels)throw t();const c=e.length,l=e.getChannelData(o),u=n.length;for(let h=a<0?-a:0;h+a<c&&h<u;h+=1)l[h+a]=n[h]}},KA=s=>t=>{t.copyFromChannel=(e=>(n,i,r=0)=>{const a=s(r),o=s(i);if(a<t.length)return e.call(t,n,o,a)})(t.copyFromChannel),t.copyToChannel=(e=>(n,i,r=0)=>{const a=s(r),o=s(i);if(a<t.length)return e.call(t,n,o,a)})(t.copyToChannel)},JA=s=>(t,e)=>{const n=e.createBuffer(1,1,44100);t.buffer===null&&(t.buffer=n),s(t,"buffer",i=>()=>{const r=i.call(t);return r===n?null:r},i=>r=>i.call(t,r===null?n:r))},QA=(s,t)=>(e,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw s()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw s()}});const i=e.createBufferSource();t(n,()=>{const o=n.numberOfInputs;for(let c=0;c<o;c+=1)i.connect(n,0,c)},()=>i.disconnect(n))},p_=(s,t,e)=>s.copyFromChannel===void 0?s.getChannelData(e)[0]:(s.copyFromChannel(t,e),t[0]),m_=s=>{if(s===null)return!1;const t=s.length;return t%2!==0?s[Math.floor(t/2)]!==0:s[t/2-1]+s[t/2]!==0},_a=(s,t,e,n)=>{let i=s;for(;!i.hasOwnProperty(t);)i=Object.getPrototypeOf(i);const{get:r,set:a}=Object.getOwnPropertyDescriptor(i,t);Object.defineProperty(s,t,{get:e(r),set:n(a)})},t1=s=>({...s,outputChannelCount:s.outputChannelCount!==void 0?s.outputChannelCount:s.numberOfInputs===1&&s.numberOfOutputs===1?[s.channelCount]:Array.from({length:s.numberOfOutputs},()=>1)}),e1=s=>({...s,channelCount:s.numberOfOutputs}),n1=s=>{const{imag:t,real:e}=s;return t===void 0?e===void 0?{...s,imag:[0,0],real:[0,0]}:{...s,imag:Array.from(e,()=>0),real:e}:e===void 0?{...s,imag:t,real:Array.from(t,()=>0)}:{...s,imag:t,real:e}},__=(s,t,e)=>{try{s.setValueAtTime(t,e)}catch(n){if(n.code!==9)throw n;__(s,t,e+1e-7)}},i1=s=>{const t=s.createBufferSource();t.start();try{t.start()}catch{return!0}return!1},s1=s=>{const t=s.createBufferSource(),e=s.createBuffer(1,1,44100);t.buffer=e;try{t.start(0,1)}catch{return!1}return!0},r1=s=>{const t=s.createBufferSource();t.start();try{t.stop()}catch{return!1}return!0},Th=s=>{const t=s.createOscillator();try{t.start(-1)}catch(e){return e instanceof RangeError}return!1},g_=s=>{const t=s.createBuffer(1,1,44100),e=s.createBufferSource();e.buffer=t,e.start(),e.stop();try{return e.stop(),!0}catch{return!1}},bh=s=>{const t=s.createOscillator();try{t.stop(-1)}catch(e){return e instanceof RangeError}return!1},o1=s=>{const{port1:t,port2:e}=new MessageChannel;try{t.postMessage(s)}finally{t.close(),e.close()}},a1=s=>{s.start=(t=>(e=0,n=0,i)=>{const r=s.buffer,a=r===null?n:Math.min(r.duration,n);r!==null&&a>r.duration-.5/s.context.sampleRate?t.call(s,e,0,0):t.call(s,e,a,i)})(s.start)},v_=(s,t)=>{const e=t.createGain();s.connect(e);const n=(i=>()=>{i.call(s,e),s.removeEventListener("ended",n)})(s.disconnect);s.addEventListener("ended",n),mo(s,e),s.stop=(i=>{let r=!1;return(a=0)=>{if(r)try{i.call(s,a)}catch{e.gain.setValueAtTime(0,a)}else i.call(s,a),r=!0}})(s.stop)},_o=(s,t)=>e=>{const n={value:s};return Object.defineProperties(e,{currentTarget:n,target:n}),typeof t=="function"?t.call(s,e):t.handleEvent.call(s,e)},c1=Cb(hr),l1=Ib(hr),u1=qE(Qc),x_=new WeakMap,h1=uw(x_),ci=ME(new Map,new WeakMap),yi=$A(),y_=Bw(ci,Ei),Eh=lw(mn),Ke=NA(mn,Eh,ir),d1=Vb(y_,de,Ke),le=fw(Jc),Zi=fA(yi),se=Pw(Zi),S_=new WeakMap,M_=nw(_o),ga=Ww(yi),wh=ww(ga),Ah=Aw(yi),T_=Cw(yi),qo=qw(yi),De=uE(Rb(Zm),Nb(c1,l1,Ec,u1,wc,mn,h1,ua,de,hr,Wi,ir,nc),ci,Sw(Ru,wc,mn,de,Wo,Wi),Ei,tl,gn,GE(Ec,Ru,mn,de,Wo,le,Wi,se),$E(S_,mn,ai),M_,le,wh,Ah,T_,se,qo),f1=kb(De,d1,Ei,y_,le,se),Ch=new WeakSet,ap=zw(yi),b_=OE(new Uint32Array(1)),Rh=ZA(b_,Ei),Ph=KA(b_),p1=zb(Ch,ci,gn,ap,Zi,GA(ap),Rh,Ph),el=Ob(An),E_=IA(Eh,da,ir),wi=RE(E_),go=Hw(el,ci,i1,s1,r1,Th,g_,bh,a1,JA(_a),v_),Ai=LA(hw(da),E_),m1=Wb(wi,go,de,Ai,Ke),li=hE(Pb(Km),S_,gh,dE,Mb,Tb,bb,Eb,wb,wu,jm,ga,__),_1=Hb(De,m1,li,Xe,go,le,se,_o),g1=Qb(De,tE,Ei,Xe,Xw(An,_a),le,se,Ke),v1=SE(wi,h_,de,Ai,Ke),dr=UA(x_),x1=yE(De,li,v1,tl,h_,le,se,dr),Es=kw(hr,Ah),y1=QA(Xe,Es),ws=Qw(ga,y1),S1=EE(ws,de,Ke),M1=bE(De,S1,ws,le,se),T1=CE(pa,de,Ke),b1=AE(De,T1,pa,le,se,e1),E1=nA(el,go,An,Es),vo=eA(el,ci,E1,Th,bh),w1=IE(wi,vo,de,Ai,Ke),A1=NE(De,li,w1,vo,le,se,_o),w_=iA(gn,_a),C1=kE(w_,de,Ke),R1=UE(De,C1,w_,le,se,dr),P1=XE(wi,d_,de,Ai,Ke),D1=WE(De,li,P1,d_,le,se,dr),A_=sA(gn),L1=QE(wi,A_,de,Ai,Ke),N1=JE(De,li,L1,A_,gn,le,se,dr),I1=aw(wi,An,de,Ai,Ke),O1=ow(De,li,I1,An,le,se),F1=cA(tl,Xe,ma,gn),nl=OA(ci,An,ma,WA(An,Zi)),U1=yw(go,de,Zi,Ke,nl),k1=rA(F1),V1=vw(De,k1,U1,le,se,dr),B1=eE(li,ws,vo,ma,gn,p_,se,_a),C_=new WeakMap,z1=Uw(g1,B1,M_,se,C_,_o),R_=pA(el,ci,Th,g_,bh,v_),G1=wA(wi,R_,de,Ai,Ke),H1=EA(De,li,R_,G1,le,se,_o),P_=DE(go),W1=SA(P_,Xe,An,m_,Es),il=yA(P_,Xe,W1,m_,Es,ga,_a),X1=_A(Ec,Xe,ws,An,ma,il,gn,wc,p_,Es),D_=mA(X1),q1=RA(wi,ws,vo,An,D_,de,Zi,Ai,Ke,nl),Y1=CA(De,li,D_,q1,le,se,dr),j1=gA(Ei),$1=DA(j1,le,new WeakSet,n1),Z1=xA(ws,pa,An,il,gn,Es),L_=vA(Z1,gn),K1=zA(wi,L_,de,Ai,Ke),J1=BA(De,li,L_,K1,le,se),Q1=jA(il,de,Ke),tC=YA(De,Xe,il,Q1,le,se,dr),N_=Dw(yi),Dh=iw(yi),I_=new WeakMap,eC=pw(I_,Zi),nC=N_?Lb(ci,gn,ew(yi),Dh,sw(Ab),le,eC,se,qo,new WeakMap,new WeakMap,HA(qo,Zi),yi):void 0,iC=Rw(wh,se),sC=zE(Ch,ci,BE,tw,new WeakSet,le,iC,Tc,Xo,Rh,Ph),O_=vE(nC,f1,p1,_1,x1,M1,b1,A1,R1,sC,D1,N1,O1,V1,z1,H1,Y1,$1,J1,tC),rC=Lw(De,lA,le,se),oC=Iw(De,uA,le,se),aC=Ow(De,hA,le,se),cC=dA(Xe,se),lC=Fw(De,cC,le),uC=Jb(O_,Xe,gn,XA,rC,oC,aC,lC,ga),Lh=mw(C_),hC=Fb(Lh),F_=PE(Ei),dC=YE(Lh),U_=ZE(Ei),k_=new WeakMap,fC=cw(k_,ai),pC=Jw(F_,Ei,Xe,ws,pa,vo,An,ma,gn,U_,Dh,fC,Es),mC=jw(Xe,pC,An,gn,Es),_C=gE(wi,F_,go,ws,pa,vo,An,dC,U_,Dh,de,qo,Zi,Ai,Ke,nl),gC=dw(I_),vC=FA(k_),cp=N_?pE(hC,De,li,_C,mC,mn,gC,le,se,qo,t1,vC,o1,_o):void 0,xC=VE(gn,Zi),yC=kA(Ch,ci,Eh,Lh,nl,Tc,Rh,Ph),SC=TA(O_,ci,Xe,xC,yC),MC=Mw(Jc,wh),TC=Tw(_h,Ah),bC=bw(gh,T_),EC=Ew(Jc,se);function kt(s,t){if(!s)throw new Error(t)}function Ss(s,t,e=1/0){if(!(t<=s&&s<=e))throw new RangeError(`Value must be within [${t}, ${e}], got: ${s}`)}function V_(s){!s.isOffline&&s.state!=="running"&&Nh('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let B_=console;function wC(...s){B_.log(...s)}function Nh(...s){B_.warn(...s)}function jn(s){return typeof s>"u"}function Zt(s){return!jn(s)}function AC(s){return typeof s=="function"}function Si(s){return typeof s=="number"}function Ks(s){return Object.prototype.toString.call(s)==="[object Object]"&&s.constructor===Object}function z_(s){return typeof s=="boolean"}function Un(s){return Array.isArray(s)}function Mi(s){return typeof s=="string"}function Za(s){return Mi(s)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(s)}function CC(s){return new uC(s)}function RC(s,t,e){return new SC(s,t,e)}const Js=typeof self=="object"?self:null,PC=Js&&(Js.hasOwnProperty("AudioContext")||Js.hasOwnProperty("webkitAudioContext"));function DC(s,t,e){return kt(Zt(cp),"This node only works in a secure context (https or localhost)"),new cp(s,t,e)}function ui(s,t,e,n){var i=arguments.length,r=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,n);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(r=(i<3?a(r):i>3?a(t,e,r):a(t,e))||r);return i>3&&r&&Object.defineProperty(t,e,r),r}function Oe(s,t,e,n){function i(r){return r instanceof e?r:new e(function(a){a(r)})}return new(e||(e=Promise))(function(r,a){function o(u){try{l(n.next(u))}catch(h){a(h)}}function c(u){try{l(n.throw(u))}catch(h){a(h)}}function l(u){u.done?r(u.value):i(u.value).then(o,c)}l((n=n.apply(s,t||[])).next())})}class LC{constructor(t,e,n){this._callback=t,this._type=e,this._updateInterval=n,this._createClock()}_createWorker(){const t=new Blob([`
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval*1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`],{type:"text/javascript"}),e=URL.createObjectURL(t),n=new Worker(e);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&(clearTimeout(this._timeout),this._timeout=0),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(t){this._updateInterval=Math.max(t,128/44100),this._type==="worker"&&this._worker.postMessage(Math.max(t*1e3,1))}get type(){return this._type}set type(t){this._disposeClock(),this._type=t,this._createClock()}dispose(){this._disposeClock()}}function sr(s){return bC(s)}function _s(s){return TC(s)}function ic(s){return EC(s)}function Fr(s){return MC(s)}function G_(s){return s instanceof AudioBuffer}function NC(s,t){return s==="value"||sr(t)||_s(t)||G_(t)}function Qs(s,...t){if(!t.length)return s;const e=t.shift();if(Ks(s)&&Ks(e))for(const n in e)NC(n,e[n])?s[n]=e[n]:Ks(e[n])?(s[n]||Object.assign(s,{[n]:{}}),Qs(s[n],e[n])):Object.assign(s,{[n]:e[n]});return Qs(s,...t)}function IC(s,t){return s.length===t.length&&s.every((e,n)=>t[n]===e)}function ft(s,t,e=[],n){const i={},r=Array.from(t);if(Ks(r[0])&&n&&!Reflect.has(r[0],n)&&(Object.keys(r[0]).some(o=>Reflect.has(s,o))||(Qs(i,{[n]:r[0]}),e.splice(e.indexOf(n),1),r.shift())),r.length===1&&Ks(r[0]))Qs(i,r[0]);else for(let a=0;a<e.length;a++)Zt(r[a])&&(i[e[a]]=r[a]);return Qs(s,i)}function OC(s){return s.constructor.getDefaults()}function tr(s,t){return jn(s)?t:s}function Iu(s,t){return t.forEach(e=>{Reflect.has(s,e)&&delete s[e]}),s}/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2019 Yotam Mann
 */class Ki{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...t){(this.debug||Js&&this.toString()===Js.TONE_DEBUG_CLASS)&&wC(this,...t)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}}Ki.version=Ym;const Ih=1e-6;function Pc(s,t){return s>t+Ih}function Ou(s,t){return Pc(s,t)||ei(s,t)}function H_(s,t){return s+Ih<t}function ei(s,t){return Math.abs(s-t)<Ih}function FC(s,t,e){return Math.max(Math.min(s,e),t)}class Ci extends Ki{constructor(){super(),this.name="Timeline",this._timeline=[];const t=ft(Ci.getDefaults(),arguments,["memory"]);this.memory=t.memory,this.increasing=t.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(t){if(kt(Reflect.has(t,"time"),"Timeline: events must have a time attribute"),t.time=t.time.valueOf(),this.increasing&&this.length){const e=this._timeline[this.length-1];kt(Ou(t.time,e.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(t)}else{const e=this._search(t.time);this._timeline.splice(e+1,0,t)}if(this.length>this.memory){const e=this.length-this.memory;this._timeline.splice(0,e)}return this}remove(t){const e=this._timeline.indexOf(t);return e!==-1&&this._timeline.splice(e,1),this}get(t,e="time"){const n=this._search(t,e);return n!==-1?this._timeline[n]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(t,e="time"){const n=this._search(t,e);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(t){const e=this._timeline.length;if(e>0&&this._timeline[e-1].time<t)return this._timeline[e-1];const n=this._search(t);return n-1>=0?this._timeline[n-1]:null}cancel(t){if(this._timeline.length>1){let e=this._search(t);if(e>=0)if(ei(this._timeline[e].time,t)){for(let n=e;n>=0&&ei(this._timeline[n].time,t);n--)e=n;this._timeline=this._timeline.slice(0,e)}else this._timeline=this._timeline.slice(0,e+1);else this._timeline=[]}else this._timeline.length===1&&Ou(this._timeline[0].time,t)&&(this._timeline=[]);return this}cancelBefore(t){const e=this._search(t);return e>=0&&(this._timeline=this._timeline.slice(e+1)),this}previousEvent(t){const e=this._timeline.indexOf(t);return e>0?this._timeline[e-1]:null}_search(t,e="time"){if(this._timeline.length===0)return-1;let n=0;const i=this._timeline.length;let r=i;if(i>0&&this._timeline[i-1][e]<=t)return i-1;for(;n<r;){let a=Math.floor(n+(r-n)/2);const o=this._timeline[a],c=this._timeline[a+1];if(ei(o[e],t)){for(let l=a;l<this._timeline.length;l++){const u=this._timeline[l];if(ei(u[e],t))a=l;else break}return a}else{if(H_(o[e],t)&&Pc(c[e],t))return a;Pc(o[e],t)?r=a:n=a+1}}return-1}_iterate(t,e=0,n=this._timeline.length-1){this._timeline.slice(e,n+1).forEach(t)}forEach(t){return this._iterate(t),this}forEachBefore(t,e){const n=this._search(t);return n!==-1&&this._iterate(e,0,n),this}forEachAfter(t,e){const n=this._search(t);return this._iterate(e,n+1),this}forEachBetween(t,e,n){let i=this._search(t),r=this._search(e);return i!==-1&&r!==-1?(this._timeline[i].time!==t&&(i+=1),this._timeline[r].time===e&&(r-=1),this._iterate(n,i,r)):i===-1&&this._iterate(n,0,r),this}forEachFrom(t,e){let n=this._search(t);for(;n>=0&&this._timeline[n].time>=t;)n--;return this._iterate(e,n+1),this}forEachAtTime(t,e){const n=this._search(t);if(n!==-1&&ei(this._timeline[n].time,t)){let i=n;for(let r=n;r>=0&&ei(this._timeline[r].time,t);r--)i=r;this._iterate(r=>{e(r)},i,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}}const W_=[];function sl(s){W_.push(s)}function UC(s){W_.forEach(t=>t(s))}const X_=[];function rl(s){X_.push(s)}function kC(s){X_.forEach(t=>t(s))}class va extends Ki{constructor(){super(...arguments),this.name="Emitter"}on(t,e){return t.split(/\W+/).forEach(i=>{jn(this._events)&&(this._events={}),this._events.hasOwnProperty(i)||(this._events[i]=[]),this._events[i].push(e)}),this}once(t,e){const n=(...i)=>{e(...i),this.off(t,n)};return this.on(t,n),this}off(t,e){return t.split(/\W+/).forEach(i=>{if(jn(this._events)&&(this._events={}),this._events.hasOwnProperty(t))if(jn(e))this._events[t]=[];else{const r=this._events[t];for(let a=r.length-1;a>=0;a--)r[a]===e&&r.splice(a,1)}}),this}emit(t,...e){if(this._events&&this._events.hasOwnProperty(t)){const n=this._events[t].slice(0);for(let i=0,r=n.length;i<r;i++)n[i].apply(this,e)}return this}static mixin(t){["on","once","off","emit"].forEach(e=>{const n=Object.getOwnPropertyDescriptor(va.prototype,e);Object.defineProperty(t.prototype,e,n)})}dispose(){return super.dispose(),this._events=void 0,this}}class q_ extends va{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}}class xa extends q_{constructor(){super(),this.name="Context",this._constants=new Map,this._timeouts=new Ci,this._timeoutIds=0,this._initialized=!1,this.isOffline=!1,this._workletModules=new Map;const t=ft(xa.getDefaults(),arguments,["context"]);t.context?this._context=t.context:this._context=CC({latencyHint:t.latencyHint}),this._ticker=new LC(this.emit.bind(this,"tick"),t.clockSource,t.updateInterval),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this._setLatencyHint(t.latencyHint),this.lookAhead=t.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(UC(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(t,e,n){return this._context.createBuffer(t,e,n)}createChannelMerger(t){return this._context.createChannelMerger(t)}createChannelSplitter(t){return this._context.createChannelSplitter(t)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(t){return this._context.createDelay(t)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(t,e){return this._context.createIIRFilter(t,e)}createPanner(){return this._context.createPanner()}createPeriodicWave(t,e,n){return this._context.createPeriodicWave(t,e,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(t){return kt(Fr(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(t)}createMediaElementSource(t){return kt(Fr(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(t)}createMediaStreamDestination(){return kt(Fr(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(t){return this._context.decodeAudioData(t)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(t){kt(!this._initialized,"The listener cannot be set after initialization."),this._listener=t}get transport(){return this.initialize(),this._transport}set transport(t){kt(!this._initialized,"The transport cannot be set after initialization."),this._transport=t}get draw(){return this.initialize(),this._draw}set draw(t){kt(!this._initialized,"Draw cannot be set after initialization."),this._draw=t}get destination(){return this.initialize(),this._destination}set destination(t){kt(!this._initialized,"The destination cannot be set after initialization."),this._destination=t}createAudioWorkletNode(t,e){return DC(this.rawContext,t,e)}addAudioWorkletModule(t,e){return Oe(this,void 0,void 0,function*(){kt(Zt(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletModules.has(e)||this._workletModules.set(e,this.rawContext.audioWorklet.addModule(t)),yield this._workletModules.get(e)})}workletsAreReady(){return Oe(this,void 0,void 0,function*(){const t=[];this._workletModules.forEach(e=>t.push(e)),yield Promise.all(t)})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(t){this._ticker.updateInterval=t}get clockSource(){return this._ticker.type}set clockSource(t){this._ticker.type=t}get latencyHint(){return this._latencyHint}_setLatencyHint(t){let e=0;if(this._latencyHint=t,Mi(t))switch(t){case"interactive":e=.1;break;case"playback":e=.5;break;case"balanced":e=.25;break}this.lookAhead=e,this.updateInterval=e/2}get rawContext(){return this._context}now(){return this._context.currentTime+this.lookAhead}immediate(){return this._context.currentTime}resume(){return Fr(this._context)?this._context.resume():Promise.resolve()}close(){return Oe(this,void 0,void 0,function*(){Fr(this._context)&&(yield this._context.close()),this._initialized&&kC(this)})}getConstant(t){if(this._constants.has(t))return this._constants.get(t);{const e=this._context.createBuffer(1,128,this._context.sampleRate),n=e.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=t;const i=this._context.createBufferSource();return i.channelCount=1,i.channelCountMode="explicit",i.buffer=e,i.loop=!0,i.start(0),this._constants.set(t,i),i}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(t=>this._constants[t].disconnect()),this}_timeoutLoop(){const t=this.now();let e=this._timeouts.peek();for(;this._timeouts.length&&e&&e.time<=t;)e.callback(),this._timeouts.shift(),e=this._timeouts.peek()}setTimeout(t,e){this._timeoutIds++;const n=this.now();return this._timeouts.add({callback:t,id:this._timeoutIds,time:n+e}),this._timeoutIds}clearTimeout(t){return this._timeouts.forEach(e=>{e.id===t&&this._timeouts.remove(e)}),this}clearInterval(t){return this.clearTimeout(t)}setInterval(t,e){const n=++this._timeoutIds,i=()=>{const r=this.now();this._timeouts.add({callback:()=>{t(),i()},id:n,time:r+e})};return i(),n}}class VC extends q_{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(t,e,n){return{}}createChannelMerger(t){return{}}createChannelSplitter(t){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(t){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(t,e){return{}}createPanner(){return{}}createPeriodicWave(t,e,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(t){return{}}createMediaElementSource(t){return{}}createMediaStreamDestination(){return{}}decodeAudioData(t){return Promise.resolve({})}createAudioWorkletNode(t,e){return{}}get rawContext(){return{}}addAudioWorkletModule(t,e){return Oe(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(t,e){return 0}clearTimeout(t){return this}setInterval(t,e){return 0}clearInterval(t){return this}getConstant(t){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(t){}get destination(){return{}}set destination(t){}now(){return 0}immediate(){return 0}}function Te(s,t){Un(t)?t.forEach(e=>Te(s,e)):Object.defineProperty(s,t,{enumerable:!0,writable:!1})}function Y_(s,t){Un(t)?t.forEach(e=>Y_(s,e)):Object.defineProperty(s,t,{writable:!0})}const ee=()=>{};class ae extends Ki{constructor(){super(),this.name="ToneAudioBuffer",this.onload=ee;const t=ft(ae.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=t.reverse,this.onload=t.onload,t.url&&G_(t.url)||t.url instanceof ae?this.set(t.url):Mi(t.url)&&this.load(t.url).catch(t.onerror)}static getDefaults(){return{onerror:ee,onload:ee,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:si().sampleRate}set(t){return t instanceof ae?t.loaded?this._buffer=t.get():t.onload=()=>{this.set(t),this.onload(this)}:this._buffer=t,this._reversed&&this._reverse(),this}get(){return this._buffer}load(t){return Oe(this,void 0,void 0,function*(){const e=ae.load(t).then(n=>{this.set(n),this.onload(this)});ae.downloads.push(e);try{yield e}finally{const n=ae.downloads.indexOf(e);ae.downloads.splice(n,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(t){const e=Un(t)&&t[0].length>0,n=e?t.length:1,i=e?t[0].length:t.length,r=si(),a=r.createBuffer(n,i,r.sampleRate),o=!e&&n===1?[t]:t;for(let c=0;c<n;c++)a.copyToChannel(o[c],c);return this._buffer=a,this}toMono(t){if(Si(t))this.fromArray(this.toArray(t));else{let e=new Float32Array(this.length);const n=this.numberOfChannels;for(let i=0;i<n;i++){const r=this.toArray(i);for(let a=0;a<r.length;a++)e[a]+=r[a]}e=e.map(i=>i/n),this.fromArray(e)}return this}toArray(t){if(Si(t))return this.getChannelData(t);if(this.numberOfChannels===1)return this.toArray(0);{const e=[];for(let n=0;n<this.numberOfChannels;n++)e[n]=this.getChannelData(n);return e}}getChannelData(t){return this._buffer?this._buffer.getChannelData(t):new Float32Array(0)}slice(t,e=this.duration){const n=Math.floor(t*this.sampleRate),i=Math.floor(e*this.sampleRate);kt(n<i,"The start time must be less than the end time");const r=i-n,a=si().createBuffer(this.numberOfChannels,r,this.sampleRate);for(let o=0;o<this.numberOfChannels;o++)a.copyToChannel(this.getChannelData(o).subarray(n,i),o);return new ae(a)}_reverse(){if(this.loaded)for(let t=0;t<this.numberOfChannels;t++)this.getChannelData(t).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(t){this._reversed!==t&&(this._reversed=t,this._reverse())}static fromArray(t){return new ae().fromArray(t)}static fromUrl(t){return Oe(this,void 0,void 0,function*(){return yield new ae().load(t)})}static load(t){return Oe(this,void 0,void 0,function*(){const e=t.match(/\[([^\]\[]+\|.+)\]$/);if(e){const o=e[1].split("|");let c=o[0];for(const l of o)if(ae.supportsType(l)){c=l;break}t=t.replace(e[0],c)}const n=ae.baseUrl===""||ae.baseUrl.endsWith("/")?ae.baseUrl:ae.baseUrl+"/",i=yield fetch(n+t);if(!i.ok)throw new Error(`could not load url: ${t}`);const r=yield i.arrayBuffer();return yield si().decodeAudioData(r)})}static supportsType(t){const e=t.split("."),n=e[e.length-1];return document.createElement("audio").canPlayType("audio/"+n)!==""}static loaded(){return Oe(this,void 0,void 0,function*(){for(yield Promise.resolve();ae.downloads.length;)yield ae.downloads[0]})}}ae.baseUrl="";ae.downloads=[];class Oh extends xa{constructor(){super({clockSource:"offline",context:ic(arguments[0])?arguments[0]:RC(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:ic(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=ic(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(t){return Oe(this,void 0,void 0,function*(){let e=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,e++;const n=Math.floor(this.sampleRate/128);t&&e%n===0&&(yield new Promise(i=>setTimeout(i,1)))}})}render(t=!0){return Oe(this,void 0,void 0,function*(){yield this.workletsAreReady(),yield this._renderClock(t);const e=yield this._context.startRendering();return new ae(e)})}close(){return Promise.resolve()}}const j_=new VC;let jr=j_;function si(){return jr===j_&&PC&&BC(new xa),jr}function BC(s){Fr(s)?jr=new xa(s):ic(s)?jr=new Oh(s):jr=s}function zC(){return jr.resume()}if(Js&&!Js.TONE_SILENCE_LOGGING){const t=` * Tone.js v${Ym} * `;console.log(`%c${t}`,"background: #000; color: #fff")}function GC(s){return Math.pow(10,s/20)}function HC(s){return 20*(Math.log(s)/Math.LN10)}function $_(s){return Math.pow(2,s/12)}let ol=440;function WC(){return ol}function XC(s){ol=s}function Hs(s){return Math.round(Z_(s))}function Z_(s){return 69+12*Math.log2(s/ol)}function K_(s){return ol*Math.pow(2,(s-69)/12)}class Fh extends Ki{constructor(t,e,n){super(),this.defaultUnits="s",this._val=e,this._units=n,this.context=t,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:t=>this._frequencyToUnits(parseFloat(t)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:t=>this._ticksToUnits(parseInt(t,10)),regexp:/^(\d+)i$/i},m:{method:t=>this._beatsToUnits(parseInt(t,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(t,e)=>{const n=parseInt(t,10),i=e==="."?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*i:this._beatsToUnits(4/n)*i},regexp:/^(\d+)n(\.?)$/i},number:{method:t=>this._expressions[this.defaultUnits].method.call(this,t),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:t=>this._secondsToUnits(parseFloat(t)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:t=>parseInt(t,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:t=>{const e=parseInt(t,10);return this._beatsToUnits(8/(Math.floor(e)*3))},regexp:/^(\d+)t$/i},tr:{method:(t,e,n)=>{let i=0;return t&&t!=="0"&&(i+=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&e!=="0"&&(i+=this._beatsToUnits(parseFloat(e))),n&&n!=="0"&&(i+=this._beatsToUnits(parseFloat(n)/4)),i},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof Fh&&this.fromType(this._val),jn(this._val))return this._noArg();if(Mi(this._val)&&jn(this._units)){for(const t in this._expressions)if(this._expressions[t].regexp.test(this._val.trim())){this._units=t;break}}else if(Ks(this._val)){let t=0;for(const e in this._val)if(Zt(this._val[e])){const n=this._val[e],i=new this.constructor(this.context,e).valueOf()*n;t+=i}return t}if(Zt(this._units)){const t=this._expressions[this._units],e=this._val.toString().trim().match(t.regexp);return e?t.method.apply(this,e.slice(1)):t.method.call(this,this._val)}else return Mi(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(t){return 1/t}_beatsToUnits(t){return 60/this._getBpm()*t}_secondsToUnits(t){return t}_ticksToUnits(t){return t*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(t){switch(this._units=void 0,this.defaultUnits){case"s":this._val=t.toSeconds();break;case"i":this._val=t.toTicks();break;case"hz":this._val=t.toFrequency();break;case"midi":this._val=t.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}}class ri extends Fh{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:t=>this._now()+new this.constructor(this.context,t).valueOf(),regexp:/^\+(.+)/},quantize:{method:t=>{const e=new ri(this.context,t).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(e))},regexp:/^@(.+)/}})}quantize(t,e=1){const n=new this.constructor(this.context,t).valueOf(),i=this.valueOf(),o=Math.round(i/n)*n-i;return i+o*e}toNotation(){const t=this.toSeconds(),e=["1m"];for(let r=1;r<9;r++){const a=Math.pow(2,r);e.push(a+"n."),e.push(a+"n"),e.push(a+"t")}e.push("0");let n=e[0],i=new ri(this.context,e[0]).toSeconds();return e.forEach(r=>{const a=new ri(this.context,r).toSeconds();Math.abs(a-t)<Math.abs(i-t)&&(n=r,i=a)}),n}toBarsBeatsSixteenths(){const t=this._beatsToUnits(1);let e=this.valueOf()/t;e=parseFloat(e.toFixed(4));const n=Math.floor(e/this._getTimeSignature());let i=e%1*4;e=Math.floor(e)%this._getTimeSignature();const r=i.toString();return r.length>3&&(i=parseFloat(parseFloat(r).toFixed(3))),[n,e,i].join(":")}toTicks(){const t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.round(e*this._getPPQ())}toSeconds(){return this.valueOf()}toMidi(){return Hs(this.toFrequency())}_now(){return this.context.now()}}class On extends ri{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return WC()}static set A4(t){XC(t)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(t){return this.defaultUnits==="midi"?t:On.mtof(t)}},note:{regexp:/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,method(t,e){const i=qC[t.toLowerCase()]+(parseInt(e,10)+1)*12;return this.defaultUnits==="midi"?i:On.mtof(i)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(t,e,n){let i=1;return t&&t!=="0"&&(i*=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&e!=="0"&&(i*=this._beatsToUnits(parseFloat(e))),n&&n!=="0"&&(i*=this._beatsToUnits(parseFloat(n)/4)),i}}})}transpose(t){return new On(this.context,this.valueOf()*$_(t))}harmonize(t){return t.map(e=>this.transpose(e))}toMidi(){return Hs(this.valueOf())}toNote(){const t=this.toFrequency(),e=Math.log2(t/On.A4);let n=Math.round(12*e)+57;const i=Math.floor(n/12);return i<0&&(n+=-12*i),YC[n%12]+i.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){const t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.floor(e*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(t){return t}_ticksToUnits(t){return 1/(t*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(t){return 1/super._beatsToUnits(t)}_secondsToUnits(t){return 1/t}static mtof(t){return K_(t)}static ftom(t){return Hs(t)}}const qC={cbb:-2,cb:-1,c:0,"c#":1,cx:2,dbb:0,db:1,d:2,"d#":3,dx:4,ebb:2,eb:3,e:4,"e#":5,ex:6,fbb:3,fb:4,f:5,"f#":6,fx:7,gbb:5,gb:6,g:7,"g#":8,gx:9,abb:7,ab:8,a:9,"a#":10,ax:11,bbb:9,bb:10,b:11,"b#":12,bx:13},YC=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];class Oo extends ri{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}}class qe extends Ki{constructor(){super();const t=ft(qe.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=t.context}static getDefaults(){return{context:si()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(t){return new ri(this.context,t).toSeconds()}toFrequency(t){return new On(this.context,t).toFrequency()}toTicks(t){return new Oo(this.context,t).toTicks()}_getPartialProperties(t){const e=this.get();return Object.keys(e).forEach(n=>{jn(t[n])&&delete e[n]}),e}get(){const t=OC(this);return Object.keys(t).forEach(e=>{if(Reflect.has(this,e)){const n=this[e];Zt(n)&&Zt(n.value)&&Zt(n.setValueAtTime)?t[e]=n.value:n instanceof qe?t[e]=n._getPartialProperties(t[e]):Un(n)||Si(n)||Mi(n)||z_(n)?t[e]=n:delete t[e]}}),t}set(t){return Object.keys(t).forEach(e=>{Reflect.has(this,e)&&Zt(this[e])&&(this[e]&&Zt(this[e].value)&&Zt(this[e].setValueAtTime)?this[e].value!==t[e]&&(this[e].value=t[e]):this[e]instanceof qe?this[e].set(t[e]):this[e]=t[e])}),this}}class al extends Ci{constructor(t="stopped"){super(),this.name="StateTimeline",this._initial=t,this.setStateAtTime(this._initial,0)}getValueAtTime(t){const e=this.get(t);return e!==null?e.state:this._initial}setStateAtTime(t,e,n){return Ss(e,0),this.add(Object.assign({},n,{state:t,time:e})),this}getLastState(t,e){const n=this._search(e);for(let i=n;i>=0;i--){const r=this._timeline[i];if(r.state===t)return r}}getNextState(t,e){const n=this._search(e);if(n!==-1)for(let i=n;i<this._timeline.length;i++){const r=this._timeline[i];if(r.state===t)return r}}}class pe extends qe{constructor(){super(ft(pe.getDefaults(),arguments,["param","units","convert"])),this.name="Param",this.overridden=!1,this._minOutput=1e-7;const t=ft(pe.getDefaults(),arguments,["param","units","convert"]);for(kt(Zt(t.param)&&(sr(t.param)||t.param instanceof pe),"param must be an AudioParam");!sr(t.param);)t.param=t.param._param;this._swappable=Zt(t.swappable)?t.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=t.param,this.input.connect(this._param)):this._param=this.input=t.param,this._events=new Ci(1e3),this._initialValue=this._param.defaultValue,this.units=t.units,this.convert=t.convert,this._minValue=t.minValue,this._maxValue=t.maxValue,Zt(t.value)&&t.value!==this._toType(this._initialValue)&&this.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(qe.getDefaults(),{convert:!0,units:"number"})}get value(){const t=this.now();return this.getValueAtTime(t)}set value(t){this.cancelScheduledValues(this.now()),this.setValueAtTime(t,this.now())}get minValue(){return Zt(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-1/0:this._param.minValue}get maxValue(){return Zt(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(t,e){return this.units===e}_assertRange(t){return Zt(this.maxValue)&&Zt(this.minValue)&&Ss(t,this._fromType(this.minValue),this._fromType(this.maxValue)),t}_fromType(t){return this.convert&&!this.overridden?this._is(t,"time")?this.toSeconds(t):this._is(t,"decibels")?GC(t):this._is(t,"frequency")?this.toFrequency(t):t:this.overridden?0:t}_toType(t){return this.convert&&this.units==="decibels"?HC(t):t}setValueAtTime(t,e){const n=this.toSeconds(e),i=this._fromType(t);return kt(isFinite(i)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._assertRange(i),this.log(this.units,"setValueAtTime",t,n),this._events.add({time:n,type:"setValueAtTime",value:i}),this._param.setValueAtTime(i,n),this}getValueAtTime(t){const e=Math.max(this.toSeconds(t),0),n=this._events.getAfter(e),i=this._events.get(e);let r=this._initialValue;if(i===null)r=this._initialValue;else if(i.type==="setTargetAtTime"&&(n===null||n.type==="setValueAtTime")){const a=this._events.getBefore(i.time);let o;a===null?o=this._initialValue:o=a.value,i.type==="setTargetAtTime"&&(r=this._exponentialApproach(i.time,o,i.value,i.constant,e))}else if(n===null)r=i.value;else if(n.type==="linearRampToValueAtTime"||n.type==="exponentialRampToValueAtTime"){let a=i.value;if(i.type==="setTargetAtTime"){const o=this._events.getBefore(i.time);o===null?a=this._initialValue:a=o.value}n.type==="linearRampToValueAtTime"?r=this._linearInterpolate(i.time,a,n.time,n.value,e):r=this._exponentialInterpolate(i.time,a,n.time,n.value,e)}else r=i.value;return this._toType(r)}setRampPoint(t){t=this.toSeconds(t);let e=this.getValueAtTime(t);return this.cancelAndHoldAtTime(t),this._fromType(e)===0&&(e=this._toType(this._minOutput)),this.setValueAtTime(e,t),this}linearRampToValueAtTime(t,e){const n=this._fromType(t),i=this.toSeconds(e);return kt(isFinite(n)&&isFinite(i),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._assertRange(n),this._events.add({time:i,type:"linearRampToValueAtTime",value:n}),this.log(this.units,"linearRampToValueAtTime",t,i),this._param.linearRampToValueAtTime(n,i),this}exponentialRampToValueAtTime(t,e){let n=this._fromType(t);n=ei(n,0)?this._minOutput:n,this._assertRange(n);const i=this.toSeconds(e);return kt(isFinite(n)&&isFinite(i),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._events.add({time:i,type:"exponentialRampToValueAtTime",value:n}),this.log(this.units,"exponentialRampToValueAtTime",t,i),this._param.exponentialRampToValueAtTime(n,i),this}exponentialRampTo(t,e,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(t,n+this.toSeconds(e)),this}linearRampTo(t,e,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(t,n+this.toSeconds(e)),this}targetRampTo(t,e,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(t,n,e),this}exponentialApproachValueAtTime(t,e,n){e=this.toSeconds(e),n=this.toSeconds(n);const i=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(t,e,i),this.cancelAndHoldAtTime(e+n*.9),this.linearRampToValueAtTime(t,e+n),this}setTargetAtTime(t,e,n){const i=this._fromType(t);kt(isFinite(n)&&n>0,"timeConstant must be a number greater than 0");const r=this.toSeconds(e);return this._assertRange(i),kt(isFinite(i)&&isFinite(r),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._events.add({constant:n,time:r,type:"setTargetAtTime",value:i}),this.log(this.units,"setTargetAtTime",t,r,n),this._param.setTargetAtTime(i,r,n),this}setValueCurveAtTime(t,e,n,i=1){n=this.toSeconds(n),e=this.toSeconds(e);const r=this._fromType(t[0])*i;this.setValueAtTime(this._toType(r),e);const a=n/(t.length-1);for(let o=1;o<t.length;o++){const c=this._fromType(t[o])*i;this.linearRampToValueAtTime(this._toType(c),e+o*a)}return this}cancelScheduledValues(t){const e=this.toSeconds(t);return kt(isFinite(e),`Invalid argument to cancelScheduledValues: ${JSON.stringify(t)}`),this._events.cancel(e),this._param.cancelScheduledValues(e),this.log(this.units,"cancelScheduledValues",e),this}cancelAndHoldAtTime(t){const e=this.toSeconds(t),n=this._fromType(this.getValueAtTime(e));kt(isFinite(e),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(t)}`),this.log(this.units,"cancelAndHoldAtTime",e,"value="+n);const i=this._events.get(e),r=this._events.getAfter(e);return i&&ei(i.time,e)?r?(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time)):(this._param.cancelAndHoldAtTime(e),this._events.cancel(e+this.sampleTime)):r&&(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time),r.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(n),e):r.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(n),e)),this._events.add({time:e,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,e),this}rampTo(t,e=.1,n){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(t,e,n):this.linearRampTo(t,e,n),this}apply(t){const e=this.context.currentTime;t.setValueAtTime(this.getValueAtTime(e),e);const n=this._events.get(e);if(n&&n.type==="setTargetAtTime"){const i=this._events.getAfter(n.time),r=i?i.time:e+2,a=(r-e)/10;for(let o=e;o<r;o+=a)t.linearRampToValueAtTime(this.getValueAtTime(o),o)}return this._events.forEachAfter(this.context.currentTime,i=>{i.type==="cancelScheduledValues"?t.cancelScheduledValues(i.time):i.type==="setTargetAtTime"?t.setTargetAtTime(i.value,i.time,i.constant):t[i.type](i.value,i.time)}),this}setParam(t){kt(this._swappable,"The Param must be assigned as 'swappable' in the constructor");const e=this.input;return e.disconnect(this._param),this.apply(t),this._param=t,e.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(t,e,n,i,r){return n+(e-n)*Math.exp(-(r-t)/i)}_linearInterpolate(t,e,n,i,r){return e+(i-e)*((r-t)/(n-t))}_exponentialInterpolate(t,e,n,i,r){return e*Math.pow(i/e,(r-t)/(n-t))}}class jt extends qe{constructor(){super(...arguments),this.name="ToneAudioNode",this._internalChannels=[]}get numberOfInputs(){return Zt(this.input)?sr(this.input)||this.input instanceof pe?1:this.input.numberOfInputs:0}get numberOfOutputs(){return Zt(this.output)?this.output.numberOfOutputs:0}_isAudioNode(t){return Zt(t)&&(t instanceof jt||_s(t))}_getInternalNodes(){const t=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&t.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&t.push(this.output),t}_setChannelProperties(t){this._getInternalNodes().forEach(n=>{n.channelCount=t.channelCount,n.channelCountMode=t.channelCountMode,n.channelInterpretation=t.channelInterpretation})}_getChannelProperties(){const t=this._getInternalNodes();kt(t.length>0,"ToneAudioNode does not have any internal nodes");const e=t[0];return{channelCount:e.channelCount,channelCountMode:e.channelCountMode,channelInterpretation:e.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(t){const e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelCount:t}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(t){const e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelCountMode:t}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(t){const e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelInterpretation:t}))}connect(t,e=0,n=0){return xo(this,t,e,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return Nh("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(t,e=0,n=0){return jC(this,t,e,n),this}chain(...t){return Fu(this,...t),this}fan(...t){return t.forEach(e=>this.connect(e)),this}dispose(){return super.dispose(),Zt(this.input)&&(this.input instanceof jt?this.input.dispose():_s(this.input)&&this.input.disconnect()),Zt(this.output)&&(this.output instanceof jt?this.output.dispose():_s(this.output)&&this.output.disconnect()),this._internalChannels=[],this}}function Fu(...s){const t=s.shift();s.reduce((e,n)=>(e instanceof jt?e.connect(n):_s(e)&&xo(e,n),n),t)}function xo(s,t,e=0,n=0){for(kt(Zt(s),"Cannot connect from undefined node"),kt(Zt(t),"Cannot connect to undefined node"),(t instanceof jt||_s(t))&&kt(t.numberOfInputs>0,"Cannot connect to node with no inputs"),kt(s.numberOfOutputs>0,"Cannot connect from node with no outputs");t instanceof jt||t instanceof pe;)Zt(t.input)&&(t=t.input);for(;s instanceof jt;)Zt(s.output)&&(s=s.output);sr(t)?s.connect(t,e):s.connect(t,e,n)}function jC(s,t,e=0,n=0){if(Zt(t))for(;t instanceof jt;)t=t.input;for(;!_s(s);)Zt(s.output)&&(s=s.output);sr(t)?s.disconnect(t,e):_s(t)?s.disconnect(t,e,n):s.disconnect()}class _n extends jt{constructor(){super(ft(_n.getDefaults(),arguments,["gain","units"])),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode;const t=ft(_n.getDefaults(),arguments,["gain","units"]);this.gain=new pe({context:this.context,convert:t.convert,param:this._gainNode.gain,units:t.units,value:t.gain,minValue:t.minValue,maxValue:t.maxValue}),Te(this,"gain")}static getDefaults(){return Object.assign(jt.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}}class ao extends jt{constructor(t){super(t),this.onended=ee,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new _n({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(e){const n=this.toSeconds(e);return this._startTime!==-1&&n>=this._startTime&&(this._stopTime===-1||n<=this._stopTime)?"started":"stopped"},this._fadeIn=t.fadeIn,this._fadeOut=t.fadeOut,this._curve=t.curve,this.onended=t.onended}static getDefaults(){return Object.assign(jt.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:ee})}_startGain(t,e=1){kt(this._startTime===-1,"Source cannot be started more than once");const n=this.toSeconds(this._fadeIn);return this._startTime=t+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,t),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(e,t+n):this._gainNode.gain.exponentialApproachValueAtTime(e,t,n)):this._gainNode.gain.setValueAtTime(e,t),this}stop(t){return this.log("stop",t),this._stopGain(this.toSeconds(t)),this}_stopGain(t){kt(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();const e=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(t)+e,this._stopTime=Math.max(this._stopTime,this.context.currentTime),e>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,e,t):this._gainNode.gain.targetRampTo(0,e,t):(this._gainNode.gain.cancelAndHoldAtTime(t),this._gainNode.gain.setValueAtTime(0,t)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{const n=this._curve==="exponential"?e*2:0;this._stopSource(this.now()+n),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==ee&&(this.onended(this),this.onended=ee,!this.context.isOffline)){const t=()=>this.dispose();typeof window.requestIdleCallback<"u"?window.requestIdleCallback(t):setTimeout(t,1e3)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),kt(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.disconnect(),this}}class Dc extends ao{constructor(){super(ft(Dc.getDefaults(),arguments,["offset"])),this.name="ToneConstantSource",this._source=this.context.createConstantSource();const t=ft(Dc.getDefaults(),arguments,["offset"]);xo(this._source,this._gainNode),this.offset=new pe({context:this.context,convert:t.convert,param:this._source.offset,units:t.units,value:t.offset,minValue:t.minValue,maxValue:t.maxValue})}static getDefaults(){return Object.assign(ao.getDefaults(),{convert:!0,offset:1,units:"number"})}start(t){const e=this.toSeconds(t);return this.log("start",e),this._startGain(e),this._source.start(e),this}_stopSource(t){this._source.stop(t)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}}class Ve extends jt{constructor(){super(ft(Ve.getDefaults(),arguments,["value","units"])),this.name="Signal",this.override=!0;const t=ft(Ve.getDefaults(),arguments,["value","units"]);this.output=this._constantSource=new Dc({context:this.context,convert:t.convert,offset:t.value,units:t.units,minValue:t.minValue,maxValue:t.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(jt.getDefaults(),{convert:!0,units:"number",value:0})}connect(t,e=0,n=0){return Uh(this,t,e,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(t,e){return this._param.setValueAtTime(t,e),this}getValueAtTime(t){return this._param.getValueAtTime(t)}setRampPoint(t){return this._param.setRampPoint(t),this}linearRampToValueAtTime(t,e){return this._param.linearRampToValueAtTime(t,e),this}exponentialRampToValueAtTime(t,e){return this._param.exponentialRampToValueAtTime(t,e),this}exponentialRampTo(t,e,n){return this._param.exponentialRampTo(t,e,n),this}linearRampTo(t,e,n){return this._param.linearRampTo(t,e,n),this}targetRampTo(t,e,n){return this._param.targetRampTo(t,e,n),this}exponentialApproachValueAtTime(t,e,n){return this._param.exponentialApproachValueAtTime(t,e,n),this}setTargetAtTime(t,e,n){return this._param.setTargetAtTime(t,e,n),this}setValueCurveAtTime(t,e,n,i){return this._param.setValueCurveAtTime(t,e,n,i),this}cancelScheduledValues(t){return this._param.cancelScheduledValues(t),this}cancelAndHoldAtTime(t){return this._param.cancelAndHoldAtTime(t),this}rampTo(t,e,n){return this._param.rampTo(t,e,n),this}get value(){return this._param.value}set value(t){this._param.value=t}get convert(){return this._param.convert}set convert(t){this._param.convert=t}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(t){this._param.overridden=t}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(t){return this._param.apply(t),this}}function Uh(s,t,e,n){(t instanceof pe||sr(t)||t instanceof Ve&&t.override)&&(t.cancelScheduledValues(0),t.setValueAtTime(0,0),t instanceof Ve&&(t.overridden=!0)),xo(s,t,e,n)}class Lc extends pe{constructor(){super(ft(Lc.getDefaults(),arguments,["value"])),this.name="TickParam",this._events=new Ci(1/0),this._multiplier=1;const t=ft(Lc.getDefaults(),arguments,["value"]);this._multiplier=t.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(t.value)}),this.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(pe.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(t,e,n){e=this.toSeconds(e),this.setRampPoint(e);const i=this._fromType(t),r=this._events.get(e),a=Math.round(Math.max(1/n,1));for(let o=0;o<=a;o++){const c=n*o+e,l=this._exponentialApproach(r.time,r.value,i,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}setValueAtTime(t,e){const n=this.toSeconds(e);super.setValueAtTime(t,e);const i=this._events.get(n),r=this._events.previousEvent(i),a=this._getTicksUntilEvent(r,n);return i.ticks=Math.max(a,0),this}linearRampToValueAtTime(t,e){const n=this.toSeconds(e);super.linearRampToValueAtTime(t,e);const i=this._events.get(n),r=this._events.previousEvent(i),a=this._getTicksUntilEvent(r,n);return i.ticks=Math.max(a,0),this}exponentialRampToValueAtTime(t,e){e=this.toSeconds(e);const n=this._fromType(t),i=this._events.get(e),r=Math.round(Math.max((e-i.time)*10,1)),a=(e-i.time)/r;for(let o=0;o<=r;o++){const c=a*o+i.time,l=this._exponentialInterpolate(i.time,i.value,e,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}_getTicksUntilEvent(t,e){if(t===null)t={ticks:0,time:0,type:"setValueAtTime",value:0};else if(jn(t.ticks)){const a=this._events.previousEvent(t);t.ticks=this._getTicksUntilEvent(a,t.time)}const n=this._fromType(this.getValueAtTime(t.time));let i=this._fromType(this.getValueAtTime(e));const r=this._events.get(e);return r&&r.time===e&&r.type==="setValueAtTime"&&(i=this._fromType(this.getValueAtTime(e-this.sampleTime))),.5*(e-t.time)*(n+i)+t.ticks}getTicksAtTime(t){const e=this.toSeconds(t),n=this._events.get(e);return Math.max(this._getTicksUntilEvent(n,e),0)}getDurationOfTicks(t,e){const n=this.toSeconds(e),i=this.getTicksAtTime(e);return this.getTimeOfTick(i+t)-n}getTimeOfTick(t){const e=this._events.get(t,"ticks"),n=this._events.getAfter(t,"ticks");if(e&&e.ticks===t)return e.time;if(e&&n&&n.type==="linearRampToValueAtTime"&&e.value!==n.value){const i=this._fromType(this.getValueAtTime(e.time)),a=(this._fromType(this.getValueAtTime(n.time))-i)/(n.time-e.time),o=Math.sqrt(Math.pow(i,2)-2*a*(e.ticks-t)),c=(-i+o)/a,l=(-i-o)/a;return(c>0?c:l)+e.time}else return e?e.value===0?1/0:e.time+(t-e.ticks)/e.value:t/this._initialValue}ticksToTime(t,e){return this.getDurationOfTicks(t,e)}timeToTicks(t,e){const n=this.toSeconds(e),i=this.toSeconds(t),r=this.getTicksAtTime(n);return this.getTicksAtTime(n+i)-r}_fromType(t){return this.units==="bpm"&&this.multiplier?1/(60/t/this.multiplier):super._fromType(t)}_toType(t){return this.units==="bpm"&&this.multiplier?t/this.multiplier*60:super._toType(t)}get multiplier(){return this._multiplier}set multiplier(t){const e=this.value;this._multiplier=t,this.cancelScheduledValues(0),this.setValueAtTime(e,0)}}class Nc extends Ve{constructor(){super(ft(Nc.getDefaults(),arguments,["value"])),this.name="TickSignal";const t=ft(Nc.getDefaults(),arguments,["value"]);this.input=this._param=new Lc({context:this.context,convert:t.convert,multiplier:t.multiplier,param:this._constantSource.offset,units:t.units,value:t.value})}static getDefaults(){return Object.assign(Ve.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(t,e){return this._param.ticksToTime(t,e)}timeToTicks(t,e){return this._param.timeToTicks(t,e)}getTimeOfTick(t){return this._param.getTimeOfTick(t)}getDurationOfTicks(t,e){return this._param.getDurationOfTicks(t,e)}getTicksAtTime(t){return this._param.getTicksAtTime(t)}get multiplier(){return this._param.multiplier}set multiplier(t){this._param.multiplier=t}dispose(){return super.dispose(),this._param.dispose(),this}}class Ic extends qe{constructor(){super(ft(Ic.getDefaults(),arguments,["frequency"])),this.name="TickSource",this._state=new al,this._tickOffset=new Ci;const t=ft(Ic.getDefaults(),arguments,["frequency"]);this.frequency=new Nc({context:this.context,units:t.units,value:t.frequency}),Te(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},qe.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(t,e){const n=this.toSeconds(t);return this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),Zt(e)&&this.setTicksAtTime(e,n)),this}stop(t){const e=this.toSeconds(t);if(this._state.getValueAtTime(e)==="stopped"){const n=this._state.get(e);n&&n.time>0&&(this._tickOffset.cancel(n.time),this._state.cancel(n.time))}return this._state.cancel(e),this._state.setStateAtTime("stopped",e),this.setTicksAtTime(0,e),this}pause(t){const e=this.toSeconds(t);return this._state.getValueAtTime(e)==="started"&&this._state.setStateAtTime("paused",e),this}cancel(t){return t=this.toSeconds(t),this._state.cancel(t),this._tickOffset.cancel(t),this}getTicksAtTime(t){const e=this.toSeconds(t),n=this._state.getLastState("stopped",e),i={state:"paused",time:e};this._state.add(i);let r=n,a=0;return this._state.forEachBetween(n.time,e+this.sampleTime,o=>{let c=r.time;const l=this._tickOffset.get(o.time);l&&l.time>=r.time&&(a=l.ticks,c=l.time),r.state==="started"&&o.state!=="started"&&(a+=this.frequency.getTicksAtTime(o.time)-this.frequency.getTicksAtTime(c)),r=o}),this._state.remove(i),a}get ticks(){return this.getTicksAtTime(this.now())}set ticks(t){this.setTicksAtTime(t,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(t){const e=this.now(),n=this.frequency.timeToTicks(t,e);this.setTicksAtTime(n,e)}getSecondsAtTime(t){t=this.toSeconds(t);const e=this._state.getLastState("stopped",t),n={state:"paused",time:t};this._state.add(n);let i=e,r=0;return this._state.forEachBetween(e.time,t+this.sampleTime,a=>{let o=i.time;const c=this._tickOffset.get(a.time);c&&c.time>=i.time&&(r=c.seconds,o=c.time),i.state==="started"&&a.state!=="started"&&(r+=a.time-o),i=a}),this._state.remove(n),r}setTicksAtTime(t,e){return e=this.toSeconds(e),this._tickOffset.cancel(e),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(t,e),ticks:t,time:e}),this}getStateAtTime(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)}getTimeOfTick(t,e=this.now()){const n=this._tickOffset.get(e),i=this._state.get(e),r=Math.max(n.time,i.time),a=this.frequency.getTicksAtTime(r)+t-n.ticks;return this.frequency.getTimeOfTick(a)}forEachTickBetween(t,e,n){let i=this._state.get(t);this._state.forEachBetween(t,e,a=>{i&&i.state==="started"&&a.state!=="started"&&this.forEachTickBetween(Math.max(i.time,t),a.time-this.sampleTime,n),i=a});let r=null;if(i&&i.state==="started"){const a=Math.max(i.time,t),o=this.frequency.getTicksAtTime(a),c=this.frequency.getTicksAtTime(i.time),l=o-c;let u=Math.ceil(l)-l;u=ei(u,1)?0:u;let h=this.frequency.getTimeOfTick(o+u);for(;h<e;){try{n(h,Math.round(this.getTicksAtTime(h)))}catch(d){r=d;break}h+=this.frequency.getDurationOfTicks(1,h)}}if(r)throw r;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this.frequency.dispose(),this}}class Yo extends qe{constructor(){super(ft(Yo.getDefaults(),arguments,["callback","frequency"])),this.name="Clock",this.callback=ee,this._lastUpdate=0,this._state=new al("stopped"),this._boundLoop=this._loop.bind(this);const t=ft(Yo.getDefaults(),arguments,["callback","frequency"]);this.callback=t.callback,this._tickSource=new Ic({context:this.context,frequency:t.frequency,units:t.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,Te(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(qe.getDefaults(),{callback:ee,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(t,e){V_(this.context);const n=this.toSeconds(t);return this.log("start",n),this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),this._tickSource.start(n,e),n<this._lastUpdate&&this.emit("start",n,e)),this}stop(t){const e=this.toSeconds(t);return this.log("stop",e),this._state.cancel(e),this._state.setStateAtTime("stopped",e),this._tickSource.stop(e),e<this._lastUpdate&&this.emit("stop",e),this}pause(t){const e=this.toSeconds(t);return this._state.getValueAtTime(e)==="started"&&(this._state.setStateAtTime("paused",e),this._tickSource.pause(e),e<this._lastUpdate&&this.emit("pause",e)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(t){this._tickSource.ticks=t}get seconds(){return this._tickSource.seconds}set seconds(t){this._tickSource.seconds=t}getSecondsAtTime(t){return this._tickSource.getSecondsAtTime(t)}setTicksAtTime(t,e){return this._tickSource.setTicksAtTime(t,e),this}getTimeOfTick(t,e=this.now()){return this._tickSource.getTimeOfTick(t,e)}getTicksAtTime(t){return this._tickSource.getTicksAtTime(t)}nextTickTime(t,e){const n=this.toSeconds(e),i=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(i+t,n)}_loop(){const t=this._lastUpdate,e=this.now();this._lastUpdate=e,this.log("loop",t,e),t!==e&&(this._state.forEachBetween(t,e,n=>{switch(n.state){case"started":const i=this._tickSource.getTicksAtTime(n.time);this.emit("start",n.time,i);break;case"stopped":n.time!==0&&this.emit("stop",n.time);break;case"paused":this.emit("pause",n.time);break}}),this._tickSource.forEachTickBetween(t,e,(n,i)=>{this.callback(n,i)}))}getStateAtTime(t){const e=this.toSeconds(t);return this._state.getValueAtTime(e)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}}va.mixin(Yo);class kh extends Ki{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;const t=ft(kh.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=t.baseUrl,Object.keys(t.urls).forEach(e=>{this._loadingCount++;const n=t.urls[e];this.add(e,n,this._bufferLoaded.bind(this,t.onload),t.onerror)})}static getDefaults(){return{baseUrl:"",onerror:ee,onload:ee,urls:{}}}has(t){return this._buffers.has(t.toString())}get(t){return kt(this.has(t),`ToneAudioBuffers has no buffer named: ${t}`),this._buffers.get(t.toString())}_bufferLoaded(t){this._loadingCount--,this._loadingCount===0&&t&&t()}get loaded(){return Array.from(this._buffers).every(([t,e])=>e.loaded)}add(t,e,n=ee,i=ee){return Mi(e)?this._buffers.set(t.toString(),new ae(this.baseUrl+e,n,i)):this._buffers.set(t.toString(),new ae(e,n,i)),this}dispose(){return super.dispose(),this._buffers.forEach(t=>t.dispose()),this._buffers.clear(),this}}class Oc extends On{constructor(){super(...arguments),this.name="MidiClass",this.defaultUnits="midi"}_frequencyToUnits(t){return Hs(super._frequencyToUnits(t))}_ticksToUnits(t){return Hs(super._ticksToUnits(t))}_beatsToUnits(t){return Hs(super._beatsToUnits(t))}_secondsToUnits(t){return Hs(super._secondsToUnits(t))}toMidi(){return this.valueOf()}toFrequency(){return K_(this.toMidi())}transpose(t){return new Oc(this.context,this.toMidi()+t)}}class fn extends Oo{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(t){return this._getPPQ()*t}_secondsToUnits(t){return Math.floor(t/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(t){return t}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}}class $C extends qe{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new Ci,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(t,e){return this._events.add({callback:t,time:this.toSeconds(e)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(t){return this._events.cancel(this.toSeconds(t)),this}_drawLoop(){const t=this.context.currentTime;for(;this._events.length&&this._events.peek().time-this.anticipation<=t;){const e=this._events.shift();e&&t-e.time<=this.expiration&&e.callback()}this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}}sl(s=>{s.draw=new $C({context:s})});rl(s=>{s.draw.dispose()});class ZC extends Ki{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(t){kt(Zt(t.time),"Events must have a time property"),kt(Zt(t.duration),"Events must have a duration parameter"),t.time=t.time.valueOf();let e=new KC(t.time,t.time+t.duration,t);for(this._root===null?this._root=e:this._root.insert(e),this._length++;e!==null;)e.updateHeight(),e.updateMax(),this._rebalance(e),e=e.parent;return this}remove(t){if(this._root!==null){const e=[];this._root.search(t.time,e);for(const n of e)if(n.event===t){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(t){return this.forEachFrom(t,e=>this.remove(e)),this}_setRoot(t){this._root=t,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(t,e){t.parent!==null?(t.isLeftChild()?t.parent.left=e:t.parent.right=e,this._rebalance(t.parent)):this._setRoot(e)}_removeNode(t){if(t.left===null&&t.right===null)this._replaceNodeInParent(t,null);else if(t.right===null)this._replaceNodeInParent(t,t.left);else if(t.left===null)this._replaceNodeInParent(t,t.right);else{const e=t.getBalance();let n,i=null;if(e>0)if(t.left.right===null)n=t.left,n.right=t.right,i=n;else{for(n=t.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,i=n.parent,n.left=t.left,n.right=t.right)}else if(t.right.left===null)n=t.right,n.left=t.left,i=n;else{for(n=t.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,i=n.parent,n.left=t.left,n.right=t.right)}t.parent!==null?t.isLeftChild()?t.parent.left=n:t.parent.right=n:this._setRoot(n),i&&this._rebalance(i)}t.dispose()}_rotateLeft(t){const e=t.parent,n=t.isLeftChild(),i=t.right;i&&(t.right=i.left,i.left=t),e!==null?n?e.left=i:e.right=i:this._setRoot(i)}_rotateRight(t){const e=t.parent,n=t.isLeftChild(),i=t.left;i&&(t.left=i.right,i.right=t),e!==null?n?e.left=i:e.right=i:this._setRoot(i)}_rebalance(t){const e=t.getBalance();e>1&&t.left?t.left.getBalance()<0?this._rotateLeft(t.left):this._rotateRight(t):e<-1&&t.right&&(t.right.getBalance()>0?this._rotateRight(t.right):this._rotateLeft(t))}get(t){if(this._root!==null){const e=[];if(this._root.search(t,e),e.length>0){let n=e[0];for(let i=1;i<e.length;i++)e[i].low>n.low&&(n=e[i]);return n.event}}return null}forEach(t){if(this._root!==null){const e=[];this._root.traverse(n=>e.push(n)),e.forEach(n=>{n.event&&t(n.event)})}return this}forEachAtTime(t,e){if(this._root!==null){const n=[];this._root.search(t,n),n.forEach(i=>{i.event&&e(i.event)})}return this}forEachFrom(t,e){if(this._root!==null){const n=[];this._root.searchAfter(t,n),n.forEach(i=>{i.event&&e(i.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(t=>t.dispose()),this._root=null,this}}class KC{constructor(t,e,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=t,this.high=e,this.max=this.high}insert(t){t.low<=this.low?this.left===null?this.left=t:this.left.insert(t):this.right===null?this.right=t:this.right.insert(t)}search(t,e){t>this.max||(this.left!==null&&this.left.search(t,e),this.low<=t&&this.high>t&&e.push(this),!(this.low>t)&&this.right!==null&&this.right.search(t,e))}searchAfter(t,e){this.low>=t&&(e.push(this),this.left!==null&&this.left.searchAfter(t,e)),this.right!==null&&this.right.searchAfter(t,e)}traverse(t){t(this),this.left!==null&&this.left.traverse(t),this.right!==null&&this.right.traverse(t)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let t=0;return this.left!==null&&this.right!==null?t=this.left.height-this.right.height:this.left!==null?t=this.left.height+1:this.right!==null&&(t=-(this.right.height+1)),t}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(t){this._left=t,t!==null&&(t.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(t){this._right=t,t!==null&&(t.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}}class rr extends jt{constructor(){super(ft(rr.getDefaults(),arguments,["volume"])),this.name="Volume";const t=ft(rr.getDefaults(),arguments,["volume"]);this.input=this.output=new _n({context:this.context,gain:t.volume,units:"decibels"}),this.volume=this.output.gain,Te(this,"volume"),this._unmutedVolume=t.volume,this.mute=t.mute}static getDefaults(){return Object.assign(jt.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(t){!this.mute&&t?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!t&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}}class Fc extends jt{constructor(){super(ft(Fc.getDefaults(),arguments)),this.name="Destination",this.input=new rr({context:this.context}),this.output=new _n({context:this.context}),this.volume=this.input.volume;const t=ft(Fc.getDefaults(),arguments);Fu(this.input,this.output,this.context.rawContext.destination),this.mute=t.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(jt.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(t){this.input.mute=t}chain(...t){return this.input.disconnect(),t.unshift(this.input),t.push(this.output),Fu(...t),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}}sl(s=>{s.destination=new Fc({context:s})});rl(s=>{s.destination.dispose()});class JC extends Ki{constructor(t){super(),this.name="TimelineValue",this._timeline=new Ci({memory:10}),this._initialValue=t}set(t,e){return this._timeline.add({value:t,time:e}),this}get(t){const e=this._timeline.get(t);return e?e.value:this._initialValue}}class Ms{constructor(t,e){this.id=Ms._eventId++;const n=Object.assign(Ms.getDefaults(),e);this.transport=t,this.callback=n.callback,this._once=n.once,this.time=n.time}static getDefaults(){return{callback:ee,once:!1,time:0}}invoke(t){this.callback&&(this.callback(t),this._once&&this.transport.clear(this.id))}dispose(){return this.callback=void 0,this}}Ms._eventId=0;class Vh extends Ms{constructor(t,e){super(t,e),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);const n=Object.assign(Vh.getDefaults(),e);this.duration=new fn(t.context,n.duration).valueOf(),this._interval=new fn(t.context,n.interval).valueOf(),this._nextTick=n.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},Ms.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(t){this._createEvents(t),super.invoke(t)}_createEvents(t){const e=this.transport.getTicksAtTime(t);e>=this.time&&e>=this._nextTick&&this._nextTick+this._interval<this.time+this.duration&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new fn(this.context,this._nextTick).toSeconds()))}_restart(t){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.time;const e=this.transport.getTicksAtTime(t);e>this.time&&(this._nextTick=this.time+Math.ceil((e-this.time)/this._interval)*this._interval),this._currentId=this.transport.scheduleOnce(this.invoke.bind(this),new fn(this.context,this._nextTick).toSeconds()),this._nextTick+=this._interval,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new fn(this.context,this._nextTick).toSeconds())}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this}}class jo extends qe{constructor(){super(ft(jo.getDefaults(),arguments)),this.name="Transport",this._loop=new JC(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new Ci,this._repeatedEvents=new ZC,this._syncedSignals=[],this._swingAmount=0;const t=ft(jo.getDefaults(),arguments);this._ppq=t.ppq,this._clock=new Yo({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=t.ppq,this.bpm.setValueAtTime(t.bpm,0),Te(this,"bpm"),this._timeSignature=t.timeSignature,this._swingTicks=t.ppq/2}static getDefaults(){return Object.assign(qe.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(t,e){if(this._loop.get(t)&&e>=this._loopEnd&&(this.emit("loopEnd",t),this._clock.setTicksAtTime(this._loopStart,t),e=this._loopStart,this.emit("loopStart",t,this._clock.getSecondsAtTime(t)),this.emit("loop",t)),this._swingAmount>0&&e%this._ppq!==0&&e%(this._swingTicks*2)!==0){const n=e%(this._swingTicks*2)/(this._swingTicks*2),i=Math.sin(n*Math.PI)*this._swingAmount;t+=new fn(this.context,this._swingTicks*2/3).toSeconds()*i}this._timeline.forEachAtTime(e,n=>n.invoke(t))}schedule(t,e){const n=new Ms(this,{callback:t,time:new Oo(this.context,e).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(t,e,n,i=1/0){const r=new Vh(this,{callback:t,duration:new ri(this.context,i).toTicks(),interval:new ri(this.context,e).toTicks(),time:new Oo(this.context,n).toTicks()});return this._addEvent(r,this._repeatedEvents)}scheduleOnce(t,e){const n=new Ms(this,{callback:t,once:!0,time:new Oo(this.context,e).toTicks()});return this._addEvent(n,this._timeline)}clear(t){if(this._scheduledEvents.hasOwnProperty(t)){const e=this._scheduledEvents[t.toString()];e.timeline.remove(e.event),e.event.dispose(),delete this._scheduledEvents[t.toString()]}return this}_addEvent(t,e){return this._scheduledEvents[t.id.toString()]={event:t,timeline:e},e.add(t),t.id}cancel(t=0){const e=this.toTicks(t);return this._timeline.forEachFrom(e,n=>this.clear(n.id)),this._repeatedEvents.forEachFrom(e,n=>this.clear(n.id)),this}_bindClockEvents(){this._clock.on("start",(t,e)=>{e=new fn(this.context,e).toSeconds(),this.emit("start",t,e)}),this._clock.on("stop",t=>{this.emit("stop",t)}),this._clock.on("pause",t=>{this.emit("pause",t)})}get state(){return this._clock.getStateAtTime(this.now())}start(t,e){let n;return Zt(e)&&(n=this.toTicks(e)),this._clock.start(t,n),this}stop(t){return this._clock.stop(t),this}pause(t){return this._clock.pause(t),this}toggle(t){return t=this.toSeconds(t),this._clock.getStateAtTime(t)!=="started"?this.start(t):this.stop(t),this}get timeSignature(){return this._timeSignature}set timeSignature(t){Un(t)&&(t=t[0]/t[1]*4),this._timeSignature=t}get loopStart(){return new ri(this.context,this._loopStart,"i").toSeconds()}set loopStart(t){this._loopStart=this.toTicks(t)}get loopEnd(){return new ri(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(t){this._loopEnd=this.toTicks(t)}get loop(){return this._loop.get(this.now())}set loop(t){this._loop.set(t,this.now())}setLoopPoints(t,e){return this.loopStart=t,this.loopEnd=e,this}get swing(){return this._swingAmount}set swing(t){this._swingAmount=t}get swingSubdivision(){return new fn(this.context,this._swingTicks).toNotation()}set swingSubdivision(t){this._swingTicks=this.toTicks(t)}get position(){const t=this.now(),e=this._clock.getTicksAtTime(t);return new fn(this.context,e).toBarsBeatsSixteenths()}set position(t){const e=this.toTicks(t);this.ticks=e}get seconds(){return this._clock.seconds}set seconds(t){const e=this.now(),n=this._clock.frequency.timeToTicks(t,e);this.ticks=n}get progress(){if(this.loop){const t=this.now();return(this._clock.getTicksAtTime(t)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(t){if(this._clock.ticks!==t){const e=this.now();if(this.state==="started"){const n=this._clock.getTicksAtTime(e),i=this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,e),r=e+i;this.emit("stop",r),this._clock.setTicksAtTime(t,r),this.emit("start",r,this._clock.getSecondsAtTime(r))}else this._clock.setTicksAtTime(t,e)}}getTicksAtTime(t){return Math.round(this._clock.getTicksAtTime(t))}getSecondsAtTime(t){return this._clock.getSecondsAtTime(t)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(t){this._clock.frequency.multiplier=t}nextSubdivision(t){if(t=this.toTicks(t),this.state!=="started")return 0;{const e=this.now(),n=this.getTicksAtTime(e),i=t-n%t;return this._clock.nextTickTime(i,e)}}syncSignal(t,e){if(!e){const i=this.now();if(t.getValueAtTime(i)!==0){const a=1/(60/this.bpm.getValueAtTime(i)/this.PPQ);e=t.getValueAtTime(i)/a}else e=0}const n=new _n(e);return this.bpm.connect(n),n.connect(t._param),this._syncedSignals.push({initial:t.value,ratio:n,signal:t}),t.value=0,this}unsyncSignal(t){for(let e=this._syncedSignals.length-1;e>=0;e--){const n=this._syncedSignals[e];n.signal===t&&(n.ratio.dispose(),n.signal.value=n.initial,this._syncedSignals.splice(e,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),Y_(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}}va.mixin(jo);sl(s=>{s.transport=new jo({context:s})});rl(s=>{s.transport.dispose()});class Vn extends jt{constructor(t){super(t),this.input=void 0,this._state=new al("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=ee,this._syncedStop=ee,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new rr({context:this.context,mute:t.mute,volume:t.volume}),this.volume=this._volume.volume,Te(this,"volume"),this.onstop=t.onstop}static getDefaults(){return Object.assign(jt.getDefaults(),{mute:!1,onstop:ee,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(t){this._volume.mute=t}_clampToCurrentTime(t){return this._synced?t:Math.max(t,this.context.currentTime)}start(t,e,n){let i=jn(t)&&this._synced?this.context.transport.seconds:this.toSeconds(t);if(i=this._clampToCurrentTime(i),!this._synced&&this._state.getValueAtTime(i)==="started")kt(Pc(i,this._state.get(i).time),"Start time must be strictly greater than previous start time"),this._state.cancel(i),this._state.setStateAtTime("started",i),this.log("restart",i),this.restart(i,e,n);else if(this.log("start",i),this._state.setStateAtTime("started",i),this._synced){const r=this._state.get(i);r&&(r.offset=this.toSeconds(tr(e,0)),r.duration=n?this.toSeconds(n):void 0);const a=this.context.transport.schedule(o=>{this._start(o,e,n)},i);this._scheduled.push(a),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>i&&this._syncedStart(this.now(),this.context.transport.seconds)}else V_(this.context),this._start(i,e,n);return this}stop(t){let e=jn(t)&&this._synced?this.context.transport.seconds:this.toSeconds(t);if(e=this._clampToCurrentTime(e),this._state.getValueAtTime(e)==="started"||Zt(this._state.getNextState("started",e))){if(this.log("stop",e),!this._synced)this._stop(e);else{const n=this.context.transport.schedule(this._stop.bind(this),e);this._scheduled.push(n)}this._state.cancel(e),this._state.setStateAtTime("stopped",e)}return this}restart(t,e,n){return t=this.toSeconds(t),this._state.getValueAtTime(t)==="started"&&(this._state.cancel(t),this._restart(t,e,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(t,e)=>{if(e>0){const n=this._state.get(e);if(n&&n.state==="started"&&n.time!==e){const i=e-this.toSeconds(n.time);let r;n.duration&&(r=this.toSeconds(n.duration)-i),this._start(t,this.toSeconds(n.offset)+i,r)}}},this._syncedStop=t=>{const e=this.context.transport.getSecondsAtTime(Math.max(t-this.sampleTime,0));this._state.getValueAtTime(e)==="started"&&this._stop(t)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(t=>this.context.transport.clear(t)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=ee,this.unsync(),this._volume.dispose(),this._state.dispose(),this}}class $o extends ao{constructor(){super(ft($o.getDefaults(),arguments,["url","onload"])),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1;const t=ft($o.getDefaults(),arguments,["url","onload"]);xo(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new pe({context:this.context,param:this._source.playbackRate,units:"positive",value:t.playbackRate}),this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this._buffer=new ae(t.url,t.onload,t.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(ao.getDefaults(),{url:new ae,loop:!1,loopEnd:0,loopStart:0,onload:ee,onerror:ee,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(t){this._fadeIn=t}get fadeOut(){return this._fadeOut}set fadeOut(t){this._fadeOut=t}get curve(){return this._curve}set curve(t){this._curve=t}start(t,e,n,i=1){kt(this.buffer.loaded,"buffer is either not set or not loaded");const r=this.toSeconds(t);this._startGain(r,i),this.loop?e=tr(e,this.loopStart):e=tr(e,0);let a=Math.max(this.toSeconds(e),0);if(this.loop){const o=this.toSeconds(this.loopEnd)||this.buffer.duration,c=this.toSeconds(this.loopStart),l=o-c;Ou(a,o)&&(a=(a-c)%l+c),ei(a,this.buffer.duration)&&(a=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,H_(a,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(r,a)),Zt(n)){let o=this.toSeconds(n);o=Math.max(o,0),this.stop(r+o)}return this}_stopSource(t){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(t)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(t){this._source.loopStart=this.toSeconds(t)}get loopEnd(){return this._source.loopEnd}set loopEnd(t){this._source.loopEnd=this.toSeconds(t)}get buffer(){return this._buffer}set buffer(t){this._buffer.set(t)}get loop(){return this._source.loop}set loop(t){this._source.loop=t,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}}function fr(s,t){return Oe(this,void 0,void 0,function*(){const e=t/s.context.sampleRate,n=new Oh(1,e,s.context.sampleRate);return new s.constructor(Object.assign(s.get(),{frequency:2/e,detune:0,context:n})).toDestination().start(0),(yield n.render()).getChannelData(0)})}class Uc extends ao{constructor(){super(ft(Uc.getDefaults(),arguments,["frequency","type"])),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator];const t=ft(Uc.getDefaults(),arguments,["frequency","type"]);xo(this._oscillator,this._gainNode),this.type=t.type,this.frequency=new pe({context:this.context,param:this._oscillator.frequency,units:"frequency",value:t.frequency}),this.detune=new pe({context:this.context,param:this._oscillator.detune,units:"cents",value:t.detune}),Te(this,["frequency","detune"])}static getDefaults(){return Object.assign(ao.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(t){const e=this.toSeconds(t);return this.log("start",e),this._startGain(e),this._oscillator.start(e),this}_stopSource(t){this._oscillator.stop(t)}setPeriodicWave(t){return this._oscillator.setPeriodicWave(t),this}get type(){return this._oscillator.type}set type(t){this._oscillator.type=t}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}}class Re extends Vn{constructor(){super(ft(Re.getDefaults(),arguments,["frequency","type"])),this.name="Oscillator",this._oscillator=null;const t=ft(Re.getDefaults(),arguments,["frequency","type"]);this.frequency=new Ve({context:this.context,units:"frequency",value:t.frequency}),Te(this,"frequency"),this.detune=new Ve({context:this.context,units:"cents",value:t.detune}),Te(this,"detune"),this._partials=t.partials,this._partialCount=t.partialCount,this._type=t.type,t.partialCount&&t.type!=="custom"&&(this._type=this.baseType+t.partialCount.toString()),this.phase=t.phase}static getDefaults(){return Object.assign(Vn.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(t){const e=this.toSeconds(t),n=new Uc({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(e)}_stop(t){const e=this.toSeconds(t);this._oscillator&&this._oscillator.stop(e)}_restart(t){const e=this.toSeconds(t);return this.log("restart",e),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(e),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return Re._periodicWaveCache.find(e=>e.phase===this._phase&&IC(e.partials,this._partials));{const t=Re._periodicWaveCache.find(e=>e.type===this._type&&e.phase===this._phase);return this._partialCount=t?t.partialCount:this._partialCount,t}}get type(){return this._type}set type(t){this._type=t;const e=["sine","square","sawtooth","triangle"].indexOf(t)!==-1;if(this._phase===0&&e)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=t);else{const n=this._getCachedPeriodicWave();if(Zt(n)){const{partials:i,wave:r}=n;this._wave=r,this._partials=i,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{const[i,r]=this._getRealImaginary(t,this._phase),a=this.context.createPeriodicWave(i,r);this._wave=a,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),Re._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:i,type:this._type,wave:this._wave}),Re._periodicWaveCache.length>100&&Re._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(t){this.partialCount&&this._type!=="custom"&&t!=="custom"?this.type=t+this.partialCount:this.type=t}get partialCount(){return this._partialCount}set partialCount(t){Ss(t,0);let e=this._type;const n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(e=n[1]),this._type!=="custom")t===0?this.type=e:this.type=e+t.toString();else{const i=new Float32Array(t);this._partials.forEach((r,a)=>i[a]=r),this._partials=Array.from(i),this.type=this._type}}_getRealImaginary(t,e){let i=2048;const r=new Float32Array(i),a=new Float32Array(i);let o=1;if(t==="custom"){if(o=this._partials.length+1,this._partialCount=this._partials.length,i=o,this._partials.length===0)return[r,a]}else{const c=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);c?(o=parseInt(c[2],10)+1,this._partialCount=parseInt(c[2],10),t=c[1],o=Math.max(o,2),i=o):this._partialCount=0,this._partials=[]}for(let c=1;c<i;++c){const l=2/(c*Math.PI);let u;switch(t){case"sine":u=c<=o?1:0,this._partials[c-1]=u;break;case"square":u=c&1?2*l:0,this._partials[c-1]=u;break;case"sawtooth":u=l*(c&1?1:-1),this._partials[c-1]=u;break;case"triangle":c&1?u=2*(l*l)*(c-1>>1&1?-1:1):u=0,this._partials[c-1]=u;break;case"custom":u=this._partials[c-1];break;default:throw new TypeError("Oscillator: invalid type: "+t)}u!==0?(r[c]=-u*Math.sin(e*c),a[c]=u*Math.cos(e*c)):(r[c]=0,a[c]=0)}return[r,a]}_inverseFFT(t,e,n){let i=0;const r=t.length;for(let a=0;a<r;a++)i+=t[a]*Math.cos(a*n)+e[a]*Math.sin(a*n);return i}getInitialValue(){const[t,e]=this._getRealImaginary(this._type,0);let n=0;const i=Math.PI*2,r=32;for(let a=0;a<r;a++)n=Math.max(this._inverseFFT(t,e,a/r*i),n);return FC(-this._inverseFFT(t,e,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(t){this._partials=t,this._partialCount=this._partials.length,t.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(t){this._phase=t*Math.PI/180,this.type=this._type}asArray(t=1024){return Oe(this,void 0,void 0,function*(){return fr(this,t)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}}Re._periodicWaveCache=[];class cl extends jt{constructor(){super(Object.assign(ft(cl.getDefaults(),arguments,["context"])))}connect(t,e=0,n=0){return Uh(this,t,e,n),this}}class Zo extends cl{constructor(){super(Object.assign(ft(Zo.getDefaults(),arguments,["mapping","length"]))),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper;const t=ft(Zo.getDefaults(),arguments,["mapping","length"]);Un(t.mapping)||t.mapping instanceof Float32Array?this.curve=Float32Array.from(t.mapping):AC(t.mapping)&&this.setMap(t.mapping,t.length)}static getDefaults(){return Object.assign(Ve.getDefaults(),{length:1024})}setMap(t,e=1024){const n=new Float32Array(e);for(let i=0,r=e;i<r;i++){const a=i/(r-1)*2-1;n[i]=t(a,i)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(t){this._shaper.curve=t}get oversample(){return this._shaper.oversample}set oversample(t){const e=["none","2x","4x"].some(n=>n.includes(t));kt(e,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=t}dispose(){return super.dispose(),this._shaper.disconnect(),this}}class QC extends cl{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new Zo({context:this.context,mapping:t=>(t+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class or extends Ve{constructor(){super(Object.assign(ft(or.getDefaults(),arguments,["value"]))),this.name="Multiply",this.override=!1;const t=ft(or.getDefaults(),arguments,["value"]);this._mult=this.input=this.output=new _n({context:this.context,minValue:t.minValue,maxValue:t.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(Ve.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}}class Ko extends Vn{constructor(){super(ft(Ko.getDefaults(),arguments,["frequency","type","modulationType"])),this.name="AMOscillator",this._modulationScale=new QC({context:this.context}),this._modulationNode=new _n({context:this.context});const t=ft(Ko.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new Re({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase,type:t.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new Re({context:this.context,phase:t.phase,type:t.modulationType}),this.harmonicity=new or({context:this.context,units:"positive",value:t.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),Te(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(Re.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(t){this._modulator.start(t),this._carrier.start(t)}_stop(t){this._modulator.stop(t),this._carrier.stop(t)}_restart(t){this._modulator.restart(t),this._carrier.restart(t)}get type(){return this._carrier.type}set type(t){this._carrier.type=t}get baseType(){return this._carrier.baseType}set baseType(t){this._carrier.baseType=t}get partialCount(){return this._carrier.partialCount}set partialCount(t){this._carrier.partialCount=t}get modulationType(){return this._modulator.type}set modulationType(t){this._modulator.type=t}get phase(){return this._carrier.phase}set phase(t){this._carrier.phase=t,this._modulator.phase=t}get partials(){return this._carrier.partials}set partials(t){this._carrier.partials=t}asArray(t=1024){return Oe(this,void 0,void 0,function*(){return fr(this,t)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}}class Jo extends Vn{constructor(){super(ft(Jo.getDefaults(),arguments,["frequency","type","modulationType"])),this.name="FMOscillator",this._modulationNode=new _n({context:this.context,gain:0});const t=ft(Jo.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new Re({context:this.context,detune:t.detune,frequency:0,onstop:()=>this.onstop(this),phase:t.phase,type:t.type}),this.detune=this._carrier.detune,this.frequency=new Ve({context:this.context,units:"frequency",value:t.frequency}),this._modulator=new Re({context:this.context,phase:t.phase,type:t.modulationType}),this.harmonicity=new or({context:this.context,units:"positive",value:t.harmonicity}),this.modulationIndex=new or({context:this.context,units:"positive",value:t.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),Te(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(Re.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(t){this._modulator.start(t),this._carrier.start(t)}_stop(t){this._modulator.stop(t),this._carrier.stop(t)}_restart(t){return this._modulator.restart(t),this._carrier.restart(t),this}get type(){return this._carrier.type}set type(t){this._carrier.type=t}get baseType(){return this._carrier.baseType}set baseType(t){this._carrier.baseType=t}get partialCount(){return this._carrier.partialCount}set partialCount(t){this._carrier.partialCount=t}get modulationType(){return this._modulator.type}set modulationType(t){this._modulator.type=t}get phase(){return this._carrier.phase}set phase(t){this._carrier.phase=t,this._modulator.phase=t}get partials(){return this._carrier.partials}set partials(t){this._carrier.partials=t}asArray(t=1024){return Oe(this,void 0,void 0,function*(){return fr(this,t)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}}class co extends Vn{constructor(){super(ft(co.getDefaults(),arguments,["frequency","width"])),this.name="PulseOscillator",this._widthGate=new _n({context:this.context,gain:0}),this._thresh=new Zo({context:this.context,mapping:e=>e<=0?-1:1});const t=ft(co.getDefaults(),arguments,["frequency","width"]);this.width=new Ve({context:this.context,units:"audioRange",value:t.width}),this._triangle=new Re({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),Te(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(Vn.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(t){t=this.toSeconds(t),this._triangle.start(t),this._widthGate.gain.setValueAtTime(1,t)}_stop(t){t=this.toSeconds(t),this._triangle.stop(t),this._widthGate.gain.cancelScheduledValues(t),this._widthGate.gain.setValueAtTime(0,t)}_restart(t){this._triangle.restart(t),this._widthGate.gain.cancelScheduledValues(t),this._widthGate.gain.setValueAtTime(1,t)}get phase(){return this._triangle.phase}set phase(t){this._triangle.phase=t}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(t){this._triangle.type=t}asArray(t=1024){return Oe(this,void 0,void 0,function*(){return fr(this,t)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}}class Qo extends Vn{constructor(){super(ft(Qo.getDefaults(),arguments,["frequency","type","spread"])),this.name="FatOscillator",this._oscillators=[];const t=ft(Qo.getDefaults(),arguments,["frequency","type","spread"]);this.frequency=new Ve({context:this.context,units:"frequency",value:t.frequency}),this.detune=new Ve({context:this.context,units:"cents",value:t.detune}),this._spread=t.spread,this._type=t.type,this._phase=t.phase,this._partials=t.partials,this._partialCount=t.partialCount,this.count=t.count,Te(this,["frequency","detune"])}static getDefaults(){return Object.assign(Re.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(t){t=this.toSeconds(t),this._forEach(e=>e.start(t))}_stop(t){t=this.toSeconds(t),this._forEach(e=>e.stop(t))}_restart(t){this._forEach(e=>e.restart(t))}_forEach(t){for(let e=0;e<this._oscillators.length;e++)t(this._oscillators[e],e)}get type(){return this._type}set type(t){this._type=t,this._forEach(e=>e.type=t)}get spread(){return this._spread}set spread(t){if(this._spread=t,this._oscillators.length>1){const e=-t/2,n=t/(this._oscillators.length-1);this._forEach((i,r)=>i.detune.value=e+n*r)}}get count(){return this._oscillators.length}set count(t){if(Ss(t,1),this._oscillators.length!==t){this._forEach(e=>e.dispose()),this._oscillators=[];for(let e=0;e<t;e++){const n=new Re({context:this.context,volume:-6-t*1.1,type:this._type,phase:this._phase+e/t*360,partialCount:this._partialCount,onstop:e===0?()=>this.onstop(this):ee});this.type==="custom"&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[e]=n}this.spread=this._spread,this.state==="started"&&this._forEach(e=>e.start())}}get phase(){return this._phase}set phase(t){this._phase=t,this._forEach((e,n)=>e.phase=this._phase+n/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(t){this._forEach(e=>e.baseType=t),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(t){this._partials=t,this._partialCount=this._partials.length,t.length&&(this._type="custom",this._forEach(e=>e.partials=t))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(t){this._partialCount=t,this._forEach(e=>e.partialCount=t),this._type=this._oscillators[0].type}asArray(t=1024){return Oe(this,void 0,void 0,function*(){return fr(this,t)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(t=>t.dispose()),this}}class ta extends Vn{constructor(){super(ft(ta.getDefaults(),arguments,["frequency","modulationFrequency"])),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new or({context:this.context,value:2});const t=ft(ta.getDefaults(),arguments,["frequency","modulationFrequency"]);this._pulse=new co({context:this.context,frequency:t.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new Re({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),Te(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(Vn.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(t){t=this.toSeconds(t),this._modulator.start(t),this._pulse.start(t)}_stop(t){t=this.toSeconds(t),this._modulator.stop(t),this._pulse.stop(t)}_restart(t){this._modulator.restart(t),this._pulse.restart(t)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(t){this._modulator.phase=t}asArray(t=1024){return Oe(this,void 0,void 0,function*(){return fr(this,t)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}}const lp={am:Ko,fat:Qo,fm:Jo,oscillator:Re,pulse:co,pwm:ta};class ea extends Vn{constructor(){super(ft(ea.getDefaults(),arguments,["frequency","type"])),this.name="OmniOscillator";const t=ft(ea.getDefaults(),arguments,["frequency","type"]);this.frequency=new Ve({context:this.context,units:"frequency",value:t.frequency}),this.detune=new Ve({context:this.context,units:"cents",value:t.detune}),Te(this,["frequency","detune"]),this.set(t)}static getDefaults(){return Object.assign(Re.getDefaults(),Jo.getDefaults(),Ko.getDefaults(),Qo.getDefaults(),co.getDefaults(),ta.getDefaults())}_start(t){this._oscillator.start(t)}_stop(t){this._oscillator.stop(t)}_restart(t){return this._oscillator.restart(t),this}get type(){let t="";return["am","fm","fat"].some(e=>this._sourceType===e)&&(t=this._sourceType),t+this._oscillator.type}set type(t){t.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(2)):t.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(2)):t.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(3)):t==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):t==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=t)}get partials(){return this._oscillator.partials}set partials(t){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=t)}get partialCount(){return this._oscillator.partialCount}set partialCount(t){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=t)}set(t){return Reflect.has(t,"type")&&t.type&&(this.type=t.type),super.set(t),this}_createNewOscillator(t){if(t!==this._sourceType){this._sourceType=t;const e=lp[t],n=this.now();if(this._oscillator){const i=this._oscillator;i.stop(n),this.context.setTimeout(()=>i.dispose(),this.blockTime)}this._oscillator=new e({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(t){this._oscillator.phase=t}get sourceType(){return this._sourceType}set sourceType(t){let e="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(e=this._oscillator.type),t==="fm"?this.type="fm"+e:t==="am"?this.type="am"+e:t==="fat"?this.type="fat"+e:t==="oscillator"?this.type=e:t==="pulse"?this.type="pulse":t==="pwm"&&(this.type="pwm")}_getOscType(t,e){return t instanceof lp[e]}get baseType(){return this._oscillator.baseType}set baseType(t){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&t!=="pulse"&&t!=="pwm"&&(this._oscillator.baseType=t)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(t){this._getOscType(this._oscillator,"fat")&&Si(t)&&(this._oscillator.count=t)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(t){this._getOscType(this._oscillator,"fat")&&Si(t)&&(this._oscillator.spread=t)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(t){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&Mi(t)&&(this._oscillator.modulationType=t)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(t=1024){return Oe(this,void 0,void 0,function*(){return fr(this,t)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}}function J_(s,t=1/0){const e=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return e.get(this)},set:function(r){Ss(r,s,t),e.set(this,r)}})}}function Ji(s,t=1/0){const e=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return e.get(this)},set:function(r){Ss(this.toSeconds(r),s,t),e.set(this,r)}})}}class na extends Vn{constructor(){super(ft(na.getDefaults(),arguments,["url","onload"])),this.name="Player",this._activeSources=new Set;const t=ft(na.getDefaults(),arguments,["url","onload"]);this._buffer=new ae({onload:this._onload.bind(this,t.onload),onerror:t.onerror,reverse:t.reverse,url:t.url}),this.autostart=t.autostart,this._loop=t.loop,this._loopStart=t.loopStart,this._loopEnd=t.loopEnd,this._playbackRate=t.playbackRate,this.fadeIn=t.fadeIn,this.fadeOut=t.fadeOut}static getDefaults(){return Object.assign(Vn.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:ee,onerror:ee,playbackRate:1,reverse:!1})}load(t){return Oe(this,void 0,void 0,function*(){return yield this._buffer.load(t),this._onload(),this})}_onload(t=ee){t(),this.autostart&&this.start()}_onSourceEnd(t){this.onstop(this),this._activeSources.delete(t),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(t,e,n){return super.start(t,e,n),this}_start(t,e,n){this._loop?e=tr(e,this._loopStart):e=tr(e,0);const i=this.toSeconds(e),r=n;n=tr(n,Math.max(this._buffer.duration-i,0));let a=this.toSeconds(n);a=a/this._playbackRate,t=this.toSeconds(t);const o=new $o({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(t+a),this._state.setStateAtTime("stopped",t+a,{implicitEnd:!0})),this._activeSources.add(o),this._loop&&jn(r)?o.start(t,i):o.start(t,i,a-this.toSeconds(this.fadeOut))}_stop(t){const e=this.toSeconds(t);this._activeSources.forEach(n=>n.stop(e))}restart(t,e,n){return super.restart(t,e,n),this}_restart(t,e,n){this._stop(t),this._start(t,e,n)}seek(t,e){const n=this.toSeconds(e);if(this._state.getValueAtTime(n)==="started"){const i=this.toSeconds(t);this._stop(n),this._start(n,i)}return this}setLoopPoints(t,e){return this.loopStart=t,this.loopEnd=e,this}get loopStart(){return this._loopStart}set loopStart(t){this._loopStart=t,this.buffer.loaded&&Ss(this.toSeconds(t),0,this.buffer.duration),this._activeSources.forEach(e=>{e.loopStart=t})}get loopEnd(){return this._loopEnd}set loopEnd(t){this._loopEnd=t,this.buffer.loaded&&Ss(this.toSeconds(t),0,this.buffer.duration),this._activeSources.forEach(e=>{e.loopEnd=t})}get buffer(){return this._buffer}set buffer(t){this._buffer.set(t)}get loop(){return this._loop}set loop(t){if(this._loop!==t&&(this._loop=t,this._activeSources.forEach(e=>{e.loop=t}),t)){const e=this._state.getNextState("stopped",this.now());e&&this._state.cancel(e.time)}}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t;const e=this.now(),n=this._state.getNextState("stopped",e);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(i=>i.cancelStop())),this._activeSources.forEach(i=>{i.playbackRate.setValueAtTime(t,e)})}get reverse(){return this._buffer.reverse}set reverse(t){this._buffer.reverse=t}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(t=>t.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}}ui([Ji(0)],na.prototype,"fadeIn",void 0);ui([Ji(0)],na.prototype,"fadeOut",void 0);class Ti extends jt{constructor(){super(ft(Ti.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="Envelope",this._sig=new Ve({context:this.context,value:0}),this.output=this._sig,this.input=void 0;const t=ft(Ti.getDefaults(),arguments,["attack","decay","sustain","release"]);this.attack=t.attack,this.decay=t.decay,this.sustain=t.sustain,this.release=t.release,this.attackCurve=t.attackCurve,this.releaseCurve=t.releaseCurve,this.decayCurve=t.decayCurve}static getDefaults(){return Object.assign(jt.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(t,e){if(Mi(t))return t;{let n;for(n in Ka)if(Ka[n][e]===t)return n;return t}}_setCurve(t,e,n){if(Mi(n)&&Reflect.has(Ka,n)){const i=Ka[n];Ks(i)?t!=="_decayCurve"&&(this[t]=i[e]):this[t]=i}else if(Un(n)&&t!=="_decayCurve")this[t]=n;else throw new Error("Envelope: invalid curve: "+n)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(t){this._setCurve("_attackCurve","In",t)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(t){this._setCurve("_releaseCurve","Out",t)}get decayCurve(){return this._decayCurve}set decayCurve(t){kt(["linear","exponential"].some(e=>e===t),`Invalid envelope curve: ${t}`),this._decayCurve=t}triggerAttack(t,e=1){this.log("triggerAttack",t,e),t=this.toSeconds(t);let i=this.toSeconds(this.attack);const r=this.toSeconds(this.decay),a=this.getValueAtTime(t);if(a>0){const o=1/i;i=(1-a)/o}if(i<this.sampleTime)this._sig.cancelScheduledValues(t),this._sig.setValueAtTime(e,t);else if(this._attackCurve==="linear")this._sig.linearRampTo(e,i,t);else if(this._attackCurve==="exponential")this._sig.targetRampTo(e,i,t);else{this._sig.cancelAndHoldAtTime(t);let o=this._attackCurve;for(let c=1;c<o.length;c++)if(o[c-1]<=a&&a<=o[c]){o=this._attackCurve.slice(c),o[0]=a;break}this._sig.setValueCurveAtTime(o,t,i,e)}if(r&&this.sustain<1){const o=e*this.sustain,c=t+i;this.log("decay",c),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(o,r+c):this._sig.exponentialApproachValueAtTime(o,c,r)}return this}triggerRelease(t){this.log("triggerRelease",t),t=this.toSeconds(t);const e=this.getValueAtTime(t);if(e>0){const n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,t):this._releaseCurve==="linear"?this._sig.linearRampTo(0,n,t):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,n,t):(kt(Un(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(t),this._sig.setValueCurveAtTime(this._releaseCurve,t,n,e))}return this}getValueAtTime(t){return this._sig.getValueAtTime(t)}triggerAttackRelease(t,e,n=1){return e=this.toSeconds(e),this.triggerAttack(e,n),this.triggerRelease(e+this.toSeconds(t)),this}cancel(t){return this._sig.cancelScheduledValues(this.toSeconds(t)),this}connect(t,e=0,n=0){return Uh(this,t,e,n),this}asArray(t=1024){return Oe(this,void 0,void 0,function*(){const e=t/this.context.sampleRate,n=new Oh(1,e,this.context.sampleRate),i=this.toSeconds(this.attack)+this.toSeconds(this.decay),r=i+this.toSeconds(this.release),a=r*.1,o=r+a,c=new this.constructor(Object.assign(this.get(),{attack:e*this.toSeconds(this.attack)/o,decay:e*this.toSeconds(this.decay)/o,release:e*this.toSeconds(this.release)/o,context:n}));return c._sig.toDestination(),c.triggerAttackRelease(e*(i+a)/o,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}}ui([Ji(0)],Ti.prototype,"attack",void 0);ui([Ji(0)],Ti.prototype,"decay",void 0);ui([J_(0,1)],Ti.prototype,"sustain",void 0);ui([Ji(0)],Ti.prototype,"release",void 0);const Ka=(()=>{let t,e;const n=[];for(t=0;t<128;t++)n[t]=Math.sin(t/127*(Math.PI/2));const i=[],r=6.4;for(t=0;t<127;t++){e=t/127;const d=Math.sin(e*(Math.PI*2)*r-Math.PI/2)+1;i[t]=d/10+e*.83}i[127]=1;const a=[],o=5;for(t=0;t<128;t++)a[t]=Math.ceil(t/127*o)/o;const c=[];for(t=0;t<128;t++)e=t/127,c[t]=.5*(1-Math.cos(Math.PI*e));const l=[];for(t=0;t<128;t++){e=t/127;const d=Math.pow(e,3)*4+.2,m=Math.cos(d*Math.PI*2*e);l[t]=Math.abs(m*(1-e))}function u(d){const m=new Array(d.length);for(let g=0;g<d.length;g++)m[g]=1-d[g];return m}function h(d){return d.slice(0).reverse()}return{bounce:{In:u(l),Out:l},cosine:{In:n,Out:h(n)},exponential:"exponential",linear:"linear",ripple:{In:i,Out:u(i)},sine:{In:c,Out:u(c)},step:{In:a,Out:u(a)}}})();class $i extends jt{constructor(){super(ft($i.getDefaults(),arguments)),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease;const t=ft($i.getDefaults(),arguments);this._volume=this.output=new rr({context:this.context,volume:t.volume}),this.volume=this._volume.volume,Te(this,"volume")}static getDefaults(){return Object.assign(jt.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0)),this}_syncState(){let t=!1;return this._synced||(this._synced=!0,t=!0),t}_syncMethod(t,e){const n=this["_original_"+t]=this[t];this[t]=(...i)=>{const r=i[e],a=this.context.transport.schedule(o=>{i[e]=o,n.apply(this,i)},r);this._scheduledEvents.push(a)}}unsync(){return this._scheduledEvents.forEach(t=>this.context.transport.clear(t)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease),this}triggerAttackRelease(t,e,n,i){const r=this.toSeconds(n),a=this.toSeconds(e);return this.triggerAttack(t,r,i),this.triggerRelease(r+a),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}}class ar extends $i{constructor(){super(ft(ar.getDefaults(),arguments));const t=ft(ar.getDefaults(),arguments);this.portamento=t.portamento,this.onsilence=t.onsilence}static getDefaults(){return Object.assign($i.getDefaults(),{detune:0,onsilence:ee,portamento:0})}triggerAttack(t,e,n=1){this.log("triggerAttack",t,e,n);const i=this.toSeconds(e);return this._triggerEnvelopeAttack(i,n),this.setNote(t,i),this}triggerRelease(t){this.log("triggerRelease",t);const e=this.toSeconds(t);return this._triggerEnvelopeRelease(e),this}setNote(t,e){const n=this.toSeconds(e),i=t instanceof On?t.toFrequency():t;if(this.portamento>0&&this.getLevelAtTime(n)>.05){const r=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(i,r,n)}else this.frequency.setValueAtTime(i,n);return this}}ui([Ji(0)],ar.prototype,"portamento",void 0);class ll extends Ti{constructor(){super(ft(ll.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new _n({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}}class lo extends ar{constructor(){super(ft(lo.getDefaults(),arguments)),this.name="Synth";const t=ft(lo.getDefaults(),arguments);this.oscillator=new ea(Object.assign({context:this.context,detune:t.detune,onstop:()=>this.onsilence(this)},t.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new ll(Object.assign({context:this.context},t.envelope)),this.oscillator.chain(this.envelope,this.output),Te(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(ar.getDefaults(),{envelope:Object.assign(Iu(Ti.getDefaults(),Object.keys(jt.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(Iu(ea.getDefaults(),[...Object.keys(Vn.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(t,e){if(this.envelope.triggerAttack(t,e),this.oscillator.start(t),this.envelope.sustain===0){const n=this.toSeconds(this.envelope.attack),i=this.toSeconds(this.envelope.decay);this.oscillator.stop(t+n+i)}}_triggerEnvelopeRelease(t){this.envelope.triggerRelease(t),this.oscillator.stop(t+this.toSeconds(this.envelope.release))}getLevelAtTime(t){return t=this.toSeconds(t),this.envelope.getValueAtTime(t)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}}class ia extends lo{constructor(){super(ft(ia.getDefaults(),arguments)),this.name="MembraneSynth",this.portamento=0;const t=ft(ia.getDefaults(),arguments);this.pitchDecay=t.pitchDecay,this.octaves=t.octaves,Te(this,["oscillator","envelope"])}static getDefaults(){return Qs(ar.getDefaults(),lo.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(t,e){const n=this.toSeconds(e),i=this.toFrequency(t instanceof On?t.toFrequency():t),r=i*this.octaves;return this.oscillator.frequency.setValueAtTime(r,n),this.oscillator.frequency.exponentialRampToValueAtTime(i,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}}ui([J_(0)],ia.prototype,"octaves",void 0);ui([Ji(0)],ia.prototype,"pitchDecay",void 0);const Q_=new Set;function Bh(s){Q_.add(s)}function tg(s,t){const e=`registerProcessor("${s}", ${t})`;Q_.add(e)}const tR=`
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;Bh(tR);const eR=`
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;Bh(eR);const nR=`
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;Bh(nR);const iR="feedback-comb-filter",sR=`
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;tg(iR,sR);class sa extends $i{constructor(){super(ft(sa.getDefaults(),arguments,["voice","options"])),this.name="PolySynth",this._availableVoices=[],this._activeVoices=[],this._voices=[],this._gcTimeout=-1,this._averageActiveVoices=0;const t=ft(sa.getDefaults(),arguments,["voice","options"]);kt(!Si(t.voice),"DEPRECATED: The polyphony count is no longer the first argument.");const e=t.voice.getDefaults();this.options=Object.assign(e,t.options),this.voice=t.voice,this.maxPolyphony=t.maxPolyphony,this._dummyVoice=this._getNextAvailableVoice();const n=this._voices.indexOf(this._dummyVoice);this._voices.splice(n,1),this._gcTimeout=this.context.setInterval(this._collectGarbage.bind(this),1)}static getDefaults(){return Object.assign($i.getDefaults(),{maxPolyphony:32,options:{},voice:lo})}get activeVoices(){return this._activeVoices.length}_makeVoiceAvailable(t){this._availableVoices.push(t);const e=this._activeVoices.findIndex(n=>n.voice===t);this._activeVoices.splice(e,1)}_getNextAvailableVoice(){if(this._availableVoices.length)return this._availableVoices.shift();if(this._voices.length<this.maxPolyphony){const t=new this.voice(Object.assign(this.options,{context:this.context,onsilence:this._makeVoiceAvailable.bind(this)}));return t.connect(this.output),this._voices.push(t),t}else Nh("Max polyphony exceeded. Note dropped.")}_collectGarbage(){if(this._averageActiveVoices=Math.max(this._averageActiveVoices*.95,this.activeVoices),this._availableVoices.length&&this._voices.length>Math.ceil(this._averageActiveVoices+1)){const t=this._availableVoices.shift(),e=this._voices.indexOf(t);this._voices.splice(e,1),this.context.isOffline||t.dispose()}}_triggerAttack(t,e,n){t.forEach(i=>{const r=new Oc(this.context,i).toMidi(),a=this._getNextAvailableVoice();a&&(a.triggerAttack(i,e,n),this._activeVoices.push({midi:r,voice:a,released:!1}),this.log("triggerAttack",i,e))})}_triggerRelease(t,e){t.forEach(n=>{const i=new Oc(this.context,n).toMidi(),r=this._activeVoices.find(({midi:a,released:o})=>a===i&&!o);r&&(r.voice.triggerRelease(e),r.released=!0,this.log("triggerRelease",n,e))})}_scheduleEvent(t,e,n,i){kt(!this.disposed,"Synth was already disposed"),n<=this.now()?t==="attack"?this._triggerAttack(e,n,i):this._triggerRelease(e,n):this.context.setTimeout(()=>{this._scheduleEvent(t,e,n,i)},n-this.now())}triggerAttack(t,e,n){Array.isArray(t)||(t=[t]);const i=this.toSeconds(e);return this._scheduleEvent("attack",t,i,n),this}triggerRelease(t,e){Array.isArray(t)||(t=[t]);const n=this.toSeconds(e);return this._scheduleEvent("release",t,n),this}triggerAttackRelease(t,e,n,i){const r=this.toSeconds(n);if(this.triggerAttack(t,r,i),Un(e)){kt(Un(t),"If the duration is an array, the notes must also be an array"),t=t;for(let a=0;a<t.length;a++){const o=e[Math.min(a,e.length-1)],c=this.toSeconds(o);kt(c>0,"The duration must be greater than 0"),this.triggerRelease(t[a],r+c)}}else{const a=this.toSeconds(e);kt(a>0,"The duration must be greater than 0"),this.triggerRelease(t,r+a)}return this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}set(t){const e=Iu(t,["onsilence","context"]);return this.options=Qs(this.options,e),this._voices.forEach(n=>n.set(e)),this._dummyVoice.set(e),this}get(){return this._dummyVoice.get()}releaseAll(t){const e=this.toSeconds(t);return this._activeVoices.forEach(({voice:n})=>{n.triggerRelease(e)}),this}dispose(){return super.dispose(),this._dummyVoice.dispose(),this._voices.forEach(t=>t.dispose()),this._activeVoices=[],this._availableVoices=[],this.context.clearInterval(this._gcTimeout),this}}class ra extends $i{constructor(){super(ft(ra.getDefaults(),arguments,["urls","onload","baseUrl"],"urls")),this.name="Sampler",this._activeSources=new Map;const t=ft(ra.getDefaults(),arguments,["urls","onload","baseUrl"],"urls"),e={};Object.keys(t.urls).forEach(n=>{const i=parseInt(n,10);if(kt(Za(n)||Si(i)&&isFinite(i),`url key is neither a note or midi pitch: ${n}`),Za(n)){const r=new On(this.context,n).toMidi();e[r]=t.urls[n]}else Si(i)&&isFinite(i)&&(e[i]=t.urls[i])}),this._buffers=new kh({urls:e,onload:t.onload,baseUrl:t.baseUrl,onerror:t.onerror}),this.attack=t.attack,this.release=t.release,this.curve=t.curve,this._buffers.loaded&&Promise.resolve().then(t.onload)}static getDefaults(){return Object.assign($i.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:ee,onerror:ee,release:.1,urls:{}})}_findClosest(t){let n=0;for(;n<96;){if(this._buffers.has(t+n))return-n;if(this._buffers.has(t-n))return n;n++}throw new Error(`No available buffers for note: ${t}`)}triggerAttack(t,e,n=1){return this.log("triggerAttack",t,e,n),Array.isArray(t)||(t=[t]),t.forEach(i=>{const r=Z_(new On(this.context,i).toFrequency()),a=Math.round(r),o=r-a,c=this._findClosest(a),l=a-c,u=this._buffers.get(l),h=$_(c+o),d=new $o({url:u,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:h}).connect(this.output);d.start(e,0,u.duration/h,n),Un(this._activeSources.get(a))||this._activeSources.set(a,[]),this._activeSources.get(a).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(a)){const m=this._activeSources.get(a),g=m.indexOf(d);g!==-1&&m.splice(g,1)}}}),this}triggerRelease(t,e){return this.log("triggerRelease",t,e),Array.isArray(t)||(t=[t]),t.forEach(n=>{const i=new On(this.context,n).toMidi();if(this._activeSources.has(i)&&this._activeSources.get(i).length){const r=this._activeSources.get(i);e=this.toSeconds(e),r.forEach(a=>{a.stop(e)}),this._activeSources.set(i,[])}}),this}releaseAll(t){const e=this.toSeconds(t);return this._activeSources.forEach(n=>{for(;n.length;)n.shift().stop(e)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(t,e,n,i=1){const r=this.toSeconds(n);return this.triggerAttack(t,r,i),Un(e)?(kt(Un(t),"notes must be an array when duration is array"),t.forEach((a,o)=>{const c=e[Math.min(o,e.length-1)];this.triggerRelease(a,r+this.toSeconds(c))})):this.triggerRelease(t,r+this.toSeconds(e)),this}add(t,e,n){if(kt(Za(t)||isFinite(t),`note must be a pitch or midi: ${t}`),Za(t)){const i=new On(this.context,t).toMidi();this._buffers.add(i,e,n)}else this._buffers.add(t,e,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(t=>{t.forEach(e=>e.dispose())}),this._activeSources.clear(),this}}ui([Ji(0)],ra.prototype,"attack",void 0);ui([Ji(0)],ra.prototype,"release",void 0);class kc extends qe{constructor(){super(ft(kc.getDefaults(),arguments,["callback","value"])),this.name="ToneEvent",this._state=new al("stopped"),this._startOffset=0;const t=ft(kc.getDefaults(),arguments,["callback","value"]);this._loop=t.loop,this.callback=t.callback,this.value=t.value,this._loopStart=this.toTicks(t.loopStart),this._loopEnd=this.toTicks(t.loopEnd),this._playbackRate=t.playbackRate,this._probability=t.probability,this._humanize=t.humanize,this.mute=t.mute,this._playbackRate=t.playbackRate,this._state.increasing=!0,this._rescheduleEvents()}static getDefaults(){return Object.assign(qe.getDefaults(),{callback:ee,humanize:!1,loop:!1,loopEnd:"1m",loopStart:0,mute:!1,playbackRate:1,probability:1,value:null})}_rescheduleEvents(t=-1){this._state.forEachFrom(t,e=>{let n;if(e.state==="started"){e.id!==-1&&this.context.transport.clear(e.id);const i=e.time+Math.round(this.startOffset/this._playbackRate);if(this._loop===!0||Si(this._loop)&&this._loop>1){n=1/0,Si(this._loop)&&(n=this._loop*this._getLoopDuration());const r=this._state.getAfter(i);r!==null&&(n=Math.min(n,r.time-i)),n!==1/0&&(this._state.setStateAtTime("stopped",i+n+1,{id:-1}),n=new fn(this.context,n));const a=new fn(this.context,this._getLoopDuration());e.id=this.context.transport.scheduleRepeat(this._tick.bind(this),a,new fn(this.context,i),n)}else e.id=this.context.transport.schedule(this._tick.bind(this),new fn(this.context,i))}})}get state(){return this._state.getValueAtTime(this.context.transport.ticks)}get startOffset(){return this._startOffset}set startOffset(t){this._startOffset=t}get probability(){return this._probability}set probability(t){this._probability=t}get humanize(){return this._humanize}set humanize(t){this._humanize=t}start(t){const e=this.toTicks(t);return this._state.getValueAtTime(e)==="stopped"&&(this._state.add({id:-1,state:"started",time:e}),this._rescheduleEvents(e)),this}stop(t){this.cancel(t);const e=this.toTicks(t);if(this._state.getValueAtTime(e)==="started"){this._state.setStateAtTime("stopped",e,{id:-1});const n=this._state.getBefore(e);let i=e;n!==null&&(i=n.time),this._rescheduleEvents(i)}return this}cancel(t){t=tr(t,-1/0);const e=this.toTicks(t);return this._state.forEachFrom(e,n=>{this.context.transport.clear(n.id)}),this._state.cancel(e),this}_tick(t){const e=this.context.transport.getTicksAtTime(t);if(!this.mute&&this._state.getValueAtTime(e)==="started"){if(this.probability<1&&Math.random()>this.probability)return;if(this.humanize){let n=.02;z_(this.humanize)||(n=this.toSeconds(this.humanize)),t+=(Math.random()*2-1)*n}this.callback(t,this.value)}}_getLoopDuration(){return Math.round((this._loopEnd-this._loopStart)/this._playbackRate)}get loop(){return this._loop}set loop(t){this._loop=t,this._rescheduleEvents()}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this._rescheduleEvents()}get loopEnd(){return new fn(this.context,this._loopEnd).toSeconds()}set loopEnd(t){this._loopEnd=this.toTicks(t),this._loop&&this._rescheduleEvents()}get loopStart(){return new fn(this.context,this._loopStart).toSeconds()}set loopStart(t){this._loopStart=this.toTicks(t),this._loop&&this._rescheduleEvents()}get progress(){if(this._loop){const t=this.context.transport.ticks,e=this._state.get(t);if(e!==null&&e.state==="started"){const n=this._getLoopDuration();return(t-e.time)%n/n}else return 0}else return 0}dispose(){return super.dispose(),this.cancel(),this._state.dispose(),this}}class Vc extends qe{constructor(){super(ft(Vc.getDefaults(),arguments,["callback","interval"])),this.name="Loop";const t=ft(Vc.getDefaults(),arguments,["callback","interval"]);this._event=new kc({context:this.context,callback:this._tick.bind(this),loop:!0,loopEnd:t.interval,playbackRate:t.playbackRate,probability:t.probability}),this.callback=t.callback,this.iterations=t.iterations}static getDefaults(){return Object.assign(qe.getDefaults(),{interval:"4n",callback:ee,playbackRate:1,iterations:1/0,probability:1,mute:!1,humanize:!1})}start(t){return this._event.start(t),this}stop(t){return this._event.stop(t),this}cancel(t){return this._event.cancel(t),this}_tick(t){this.callback(t)}get state(){return this._event.state}get progress(){return this._event.progress}get interval(){return this._event.loopEnd}set interval(t){this._event.loopEnd=t}get playbackRate(){return this._event.playbackRate}set playbackRate(t){this._event.playbackRate=t}get humanize(){return this._event.humanize}set humanize(t){this._event.humanize=t}get probability(){return this._event.probability}set probability(t){this._event.probability=t}get mute(){return this._event.mute}set mute(t){this._event.mute=t}get iterations(){return this._event.loop===!0?1/0:this._event.loop}set iterations(t){t===1/0?this._event.loop=!0:this._event.loop=t}dispose(){return super.dispose(),this._event.dispose(),this}}class Bc extends jt{constructor(){super(Object.assign(ft(Bc.getDefaults(),arguments,["pan"]))),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner;const t=ft(Bc.getDefaults(),arguments,["pan"]);this.pan=new pe({context:this.context,param:this._panner.pan,value:t.pan,minValue:-1,maxValue:1}),this._panner.channelCount=t.channelCount,this._panner.channelCountMode="explicit",Te(this,"pan")}static getDefaults(){return Object.assign(jt.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const rR="bit-crusher",oR=`
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;tg(rR,oR);class we extends jt{constructor(){super(ft(we.getDefaults(),arguments,["solo"])),this.name="Solo";const t=ft(we.getDefaults(),arguments,["solo"]);this.input=this.output=new _n({context:this.context}),we._allSolos.has(this.context)||we._allSolos.set(this.context,new Set),we._allSolos.get(this.context).add(this),this.solo=t.solo}static getDefaults(){return Object.assign(jt.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(t){t?this._addSolo():this._removeSolo(),we._allSolos.get(this.context).forEach(e=>e._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){we._soloed.has(this.context)||we._soloed.set(this.context,new Set),we._soloed.get(this.context).add(this)}_removeSolo(){we._soloed.has(this.context)&&we._soloed.get(this.context).delete(this)}_isSoloed(){return we._soloed.has(this.context)&&we._soloed.get(this.context).has(this)}_noSolos(){return!we._soloed.has(this.context)||we._soloed.has(this.context)&&we._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),we._allSolos.get(this.context).delete(this),this._removeSolo(),this}}we._allSolos=new Map;we._soloed=new Map;class zc extends jt{constructor(){super(ft(zc.getDefaults(),arguments,["pan","volume"])),this.name="PanVol";const t=ft(zc.getDefaults(),arguments,["pan","volume"]);this._panner=this.input=new Bc({context:this.context,pan:t.pan,channelCount:t.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new rr({context:this.context,volume:t.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=t.mute,Te(this,["pan","volume"])}static getDefaults(){return Object.assign(jt.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(t){this._volume.mute=t}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class Bs extends jt{constructor(){super(ft(Bs.getDefaults(),arguments,["volume","pan"])),this.name="Channel";const t=ft(Bs.getDefaults(),arguments,["volume","pan"]);this._solo=this.input=new we({solo:t.solo,context:this.context}),this._panVol=this.output=new zc({context:this.context,pan:t.pan,volume:t.volume,mute:t.mute,channelCount:t.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),Te(this,["pan","volume"])}static getDefaults(){return Object.assign(jt.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(t){this._solo.solo=t}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(t){this._panVol.mute=t}_getBus(t){return Bs.buses.has(t)||Bs.buses.set(t,new _n({context:this.context})),Bs.buses.get(t)}send(t,e=0){const n=this._getBus(t),i=new _n({context:this.context,units:"decibels",gain:e});return this.connect(i),i.connect(n),i}receive(t){return this._getBus(t).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}Bs.buses=new Map;class aR extends jt{constructor(){super(...arguments),this.name="Listener",this.positionX=new pe({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new pe({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new pe({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new pe({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new pe({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new pe({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new pe({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new pe({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new pe({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(jt.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}sl(s=>{s.listener=new aR({context:s})});rl(s=>{s.listener.dispose()});si().transport;si().destination;si().destination;si().listener;si().draw;si();/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class vi{constructor(t,e,n,i,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),vi.nextNameID=vi.nextNameID||0,this.$name.id=`lil-gui-name-${++vi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class cR extends vi{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Uu(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const lR={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Uu,toHexString:Uu},oa={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},uR={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,t,e=1){const n=oa.fromHexString(s);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([s,t,e],n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return oa.toHexString(i)}},hR={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){const n=oa.fromHexString(s);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:s,g:t,b:e},n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return oa.toHexString(i)}},dR=[lR,oa,uR,hR];function fR(s){return dR.find(t=>t.match(s))}class pR extends vi{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=fR(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Uu(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class eu extends vi{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class mR extends vi{constructor(t,e,n,i,r,a){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+x),this.$input.value=this.getValue())},i=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},r=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let a=!1,o,c,l,u,h;const d=5,m=x=>{o=x.clientX,c=l=x.clientY,a=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=x=>{if(a){const v=x.clientX-o,M=x.clientY-c;Math.abs(M)>d?(x.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>d&&_()}if(!a){const v=x.clientY-l;h-=v*this._step*this._arrowKeyMultiplier(x),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}l=x.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},f=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",f),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(p,x,v,M,S)=>(p-x)/(v-x)*(S-M)+M,e=p=>{const x=this.$slider.getBoundingClientRect();let v=t(p,x.left,x.right,this._min,this._max);this._snapClampSetValue(v)},n=p=>{this._setDraggingStyle(!0),e(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=p=>{e(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let a=!1,o,c;const l=p=>{p.preventDefault(),this._setDraggingStyle(!0),e(p.touches[0].clientX),a=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(o=p.touches[0].clientX,c=p.touches[0].clientY,a=!0):l(p),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=p=>{if(a){const x=p.touches[0].clientX-o,v=p.touches[0].clientY-c;Math.abs(x)>Math.abs(v)?l(p):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else p.preventDefault(),e(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},m=this._callOnFinishChange.bind(this),g=400;let _;const f=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const v=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(m,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class _R extends vi{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class gR extends vi{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const vR=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function xR(s){const t=document.createElement("style");t.innerHTML=s;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let up=!1;class zh{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!up&&o&&(xR(vR),up=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=a}add(t,e,n,i,r){if(Object(n)===n)return new _R(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new mR(this,t,e,n,i,r);case"boolean":return new cR(this,t,e);case"string":return new gR(this,t,e);case"function":return new eu(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new pR(this,t,e,n)}addFolder(t){const e=new zh({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof eu||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof eu)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}let Us=[],Ae=500;const yR=document.querySelector("#app"),pr=new Yp({antialias:!0});pr.setPixelRatio(window.devicePixelRatio);pr.setSize(window.innerWidth,window.innerHeight);yR.appendChild(pr.domElement);document.body.appendChild(pr.domElement);const Ts=new LM;Ts.background=new Kt("#5BB2F0");const cr=new Hn(35,window.innerWidth/window.innerHeight,1,1e3);cr.position.set(200,150,200);const SR=new VM("white",.2),MR=new OM("#ffffff","#ff00ff",.8),TR=new kM("white",.8);TR.position.set(-1,1,1);Ts.add(SR,MR);const Zn=new lb(cr,pr.domElement);Zn.enableDamping=!0;Zn.dampingFactor=.05;Zn.screenSpacePanning=!1;Zn.enableRotate=!0;Zn.rotateSpeed=.5;Zn.enableZoom=!0;Zn.zoomSpeed=.5;Zn.minDistance=100;Zn.maxDistance=1e4;Zn.target=new U(0,0,0);Zn.autoRotate=!0;const bR=()=>{cr.aspect=window.innerWidth/window.innerHeight,cr.updateProjectionMatrix(),pr.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",bR);window.addEventListener("keydown",async()=>{await zC(),console.log("audio is ready")});new ll({attack:.1,decay:.1,sustain:.1,release:.2}).toDestination();const Gh=new sa({oscillator:{type:"fatsawtooth"},envelope:{attack:.1,decay:.1,sustain:.1,release:.2}}).toDestination();Gh.volume.value=-6;const Hh=new sa({oscillator:{type:"sine"},envelope:{attack:.1,decay:.1,sustain:.1,release:.2}});Hh.volume.value=-6;new Ti({attack:0,decay:.2,decayCurve:"exponential",sustain:.1,release:.2}).toDestination();new Vc(s=>{Gh.triggerAttackRelease(["D3","F#3","A3","C#4","E4"],"8n",s),Hh.triggerAttackRelease(["D3","F#3","A3","C#4","E4"],"8t",s+2)},"4n").start(0);const ER=new zh;let ku={type:1};ER.add(ku,"type",{Attract:1,Repel:2,Spawn:3});ml5.tf.setBackend("cpu");const nu=new Lt,Ao=new U,hp=new U,dp=new ki,fp=new zM;let fe=[];window.addEventListener("click",function(s){Gh.triggerAttackRelease(["D4","F#4","A4","C#5","E5"],"8t"),Hh.triggerAttackRelease(["D4","F#4","A4","C#5","E5"],"8t"),nu.x=s.clientX/window.innerWidth*2-1,nu.y=-(s.clientY/window.innerHeight)*2+1,hp.copy(cr.position).normalize(),dp.setFromNormalAndCoplanarPoint(hp,Ts.position),fp.setFromCamera(nu,cr),fp.ray.intersectPlane(dp,Ao);let t,e;e=200,t=6613382,ku.type==2&&(t=16711680,e=500);const n=new Nn(new Yc(2,30,30),new NM({color:t,metalness:0,roughness:0}));Us.push(n),Ts.add(n);let i=new ab(Ao.x,Ao.y,Ao.z,ku.type,e);fe.push(i),n.position.copy(Ao)});const wR=new IM({color:"#FF9843"}),AR=new Yc(.5,64,64);let Wh=[],ne=[],Ge=[];const eg=[];function ng(s,t,e,n,i){ne[s]=new ph(Gi.utils.mapRange(0,1,t-10,t+10,Math.random()),Gi.utils.mapRange(0,1,e-10,e+10,Math.random()),Gi.utils.mapRange(0,1,n-10,n+10,Math.random()),Math.random()*5,1,2e3+Gi.utils.mapRange(0,1,50,500,Math.random()),i),Wh[s]=new Nn(AR,wR),eg.push(new U(-1,0,0),new U(1,0,0),new U(1,0,0)),ks(s)}function ks(s){Ge[s]=new yc(Ts,!1),Ge[s].setAdvanceFrequency(200);const t=yc.createBaseMaterial();Ge[s].initialize(t,30,!1,2,eg,Wh[s]),t.uniforms.headColor.value.set(1,.596078431372549,.2627450980392157,1),t.uniforms.tailColor.value.set(1,.8666666666666667,.5843137254901961,1),Ge[s].activate()}const Xh=new gb(pr);Xh.setSize(window.innerWidth,window.innerHeight);const CR=new vb(Ts,cr);Xh.addPass(CR);let RR=ib();new U(Ae,Ae,Ae);for(let s=0;s<200;s++)ng(s,Gi.utils.mapRange(0,1,Ae/2,-Ae/2,Math.random()),Gi.utils.mapRange(0,1,Ae/2,-Ae/2,Math.random()),Gi.utils.mapRange(0,1,Ae/2,-Ae/2,Math.random()),ml5.neuralNetwork({inputs:1,outputs:4,task:"regression",noTraining:!0}));const ig=()=>{requestAnimationFrame(ig);for(let s=0;s<fe.length;s++)if(fe[s].type==3){console.log("spawn!");let t=ne.length;for(let e=0;e<10;e++)ng(t+e,fe[s].pos.x,fe[s].pos.y,fe[s].pos.z,ml5.neuralNetwork({inputs:6,outputs:4,task:"regression",noTraining:!0}));fe.splice(s,1),Ts.remove(Us[s]),Us.splice(s,1)}for(let s=0;s<ne.length;s++){if(fe.length>0)for(let t=0;t<fe.length;t++)fe[t].type==1&&(ne[s].attract(fe[t].pos.x,fe[t].pos.y,fe[t].pos.z),fe[t].pos=Us[t].position,ne[s].pos.distanceTo(fe[t].pos)<100&&(ne[s].life+=.5,fe[t].life-=.01,fe[t].life<0&&(fe.splice(t,1),Ts.remove(Us[t]),Us.splice(t,1)))),fe[t].type==2&&(ne[s].repel(fe[t].pos.x,fe[t].pos.y,fe[t].pos.z),fe[t].pos=Us[t].position,fe[t].life-=.05);else ne[s].follow(RR);ne[s].pos.x>Ae/2&&(ne[s].pos.x=-Ae/2,Ge[s].deactivate(),Ge[s].destroyMesh(),ks(s)),ne[s].pos.y>Ae/2&&(ne[s].pos.y=-Ae/2,Ge[s].deactivate(),Ge[s].destroyMesh(),ks(s)),ne[s].pos.z>Ae/2&&(ne[s].pos.z=-Ae/2,Ge[s].deactivate(),Ge[s].destroyMesh(),ks(s)),ne[s].pos.x<-Ae/2&&(ne[s].pos.x=Ae/2,Ge[s].deactivate(),Ge[s].destroyMesh(),ks(s)),ne[s].pos.y<-Ae/2&&(ne[s].pos.y=Ae/2,Ge[s].deactivate(),Ge[s].destroyMesh(),ks(s)),ne[s].pos.z<-Ae/2&&(ne[s].pos.z=Ae/2,Ge[s].deactivate(),Ge[s].destroyMesh(),ks(s)),ne[s].vel=hg(ne[s].vel,ne[s].maxSpeed),ne[s].update(),Wh[s].position.set(ne[s].pos.x,ne[s].pos.y,ne[s].pos.z),Ge[s].activate(),Ge[s].update(),ne[s].life--}Xh.render(),Zn.update()};ig();
