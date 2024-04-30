var xg=Object.defineProperty;var yg=(s,t,e)=>t in s?xg(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Jn=(s,t,e)=>(yg(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();function Mp(s){let t=s.x,e=s.y,n=s.z;return Math.sqrt(t*t+e*e+n*n)}function Sg(s,t){return Mp(s)>t&&(s.normalize(),s.multiplyScalar(t)),s}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qu="161",gr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mg=0,sd=1,Tg=2,Tp=1,bg=2,Oi=3,xs=0,Mn=1,fi=2,Hi=0,Xr=1,rd=2,od=3,ad=4,bp=5,cs=100,Eg=101,wg=102,cd=103,ld=104,Ag=200,Cg=201,Rg=202,Pg=203,hc=204,dc=205,Dg=206,Lg=207,Ng=208,Ig=209,Og=210,Fg=211,Ug=212,kg=213,Bg=214,Vg=0,zg=1,Gg=2,fc=3,Hg=4,Wg=5,Xg=6,qg=7,Ep=0,Yg=1,jg=2,ps=0,$g=1,Zg=2,Kg=3,Jg=4,Qg=5,t0=6,wp=300,Jr=301,Qr=302,lu=303,uu=304,$c=306,hu=1e3,ii=1001,du=1002,Ze=1003,ud=1004,bo=1005,yn=1006,yl=1007,Gs=1008,ms=1009,e0=1010,n0=1011,Yu=1012,Ap=1013,ls=1014,Vi=1015,to=1016,Cp=1017,Rp=1018,Xs=1020,i0=1021,si=1023,s0=1024,r0=1025,qs=1026,eo=1027,o0=1028,Pp=1029,a0=1030,Dp=1031,Lp=1033,Sl=33776,Ml=33777,Tl=33778,bl=33779,hd=35840,dd=35841,fd=35842,pd=35843,Np=36196,md=37492,_d=37496,gd=37808,vd=37809,xd=37810,yd=37811,Sd=37812,Md=37813,Td=37814,bd=37815,Ed=37816,wd=37817,Ad=37818,Cd=37819,Rd=37820,Pd=37821,El=36492,Dd=36494,Ld=36495,c0=36283,Nd=36284,Id=36285,Od=36286,Ip=3e3,Ys=3001,l0=3200,u0=3201,ju=0,h0=1,Wn="",Ke="srgb",Xi="srgb-linear",$u="display-p3",Zc="display-p3-linear",pc="linear",he="srgb",mc="rec709",_c="p3",xr=7680,Fd=519,d0=512,f0=513,p0=514,Op=515,m0=516,_0=517,g0=518,v0=519,Ud=35044,kd="300 es",fu=1035,zi=2e3,gc=2001;class ur{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bd=1234567;const Oo=Math.PI/180,zo=180/Math.PI;function po(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function sn(s,t,e){return Math.max(t,Math.min(e,s))}function Zu(s,t){return(s%t+t)%t}function x0(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function y0(s,t,e){return s!==t?(e-s)/(t-s):0}function Fo(s,t,e){return(1-e)*s+e*t}function S0(s,t,e,n){return Fo(s,t,1-Math.exp(-e*n))}function M0(s,t=1){return t-Math.abs(Zu(s,t*2)-t)}function T0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function b0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function E0(s,t){return s+Math.floor(Math.random()*(t-s+1))}function w0(s,t){return s+Math.random()*(t-s)}function A0(s){return s*(.5-Math.random())}function C0(s){s!==void 0&&(Bd=s);let t=Bd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function R0(s){return s*Oo}function P0(s){return s*zo}function pu(s){return(s&s-1)===0&&s!==0}function D0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function L0(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),m=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*g,c*m,a*l);break;case"YXY":s.set(c*m,a*u,c*g,a*l);break;case"ZYZ":s.set(c*g,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function kr(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function un(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const N0={DEG2RAD:Oo,RAD2DEG:zo,generateUUID:po,clamp:sn,euclideanModulo:Zu,mapLinear:x0,inverseLerp:y0,lerp:Fo,damp:S0,pingpong:M0,smoothstep:T0,smootherstep:b0,randInt:E0,randFloat:w0,randFloatSpread:A0,seededRandom:C0,degToRad:R0,radToDeg:P0,isPowerOfTwo:pu,ceilPowerOfTwo:D0,floorPowerOfTwo:vc,setQuaternionFromProperEuler:L0,normalize:un,denormalize:kr};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,i,r,o,a,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],_=i[0],f=i[3],p=i[6],x=i[1],v=i[4],M=i[7],S=i[2],b=i[5],T=i[8];return r[0]=o*_+a*x+c*S,r[3]=o*f+a*v+c*b,r[6]=o*p+a*M+c*T,r[1]=l*_+u*x+h*S,r[4]=l*f+u*v+h*b,r[7]=l*p+u*M+h*T,r[2]=d*_+m*x+g*S,r[5]=d*f+m*v+g*b,r[8]=d*p+m*M+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,m=l*r-o*c,g=e*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*l-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(u*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wl.makeScale(t,e)),this}rotate(t){return this.premultiply(wl.makeRotation(-t)),this}translate(t,e){return this.premultiply(wl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wl=new Xt;function Fp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function xc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function I0(){const s=xc("canvas");return s.style.display="block",s}const Vd={};function qr(s){s in Vd||(Vd[s]=!0,console.warn(s))}const zd=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gd=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ca={[Xi]:{transfer:pc,primaries:mc,toReference:s=>s,fromReference:s=>s},[Ke]:{transfer:he,primaries:mc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Zc]:{transfer:pc,primaries:_c,toReference:s=>s.applyMatrix3(Gd),fromReference:s=>s.applyMatrix3(zd)},[$u]:{transfer:he,primaries:_c,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Gd),fromReference:s=>s.applyMatrix3(zd).convertLinearToSRGB()}},O0=new Set([Xi,Zc]),ie={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!O0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Ca[t].toReference,i=Ca[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Ca[s].primaries},getTransfer:function(s){return s===Wn?pc:Ca[s].transfer}};function Yr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Al(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let yr;class Up{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yr===void 0&&(yr=xc("canvas")),yr.width=t.width,yr.height=t.height;const n=yr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=yr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Yr(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yr(e[n]/255)*255):e[n]=Yr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let F0=0,kp=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=po(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Cl(i[o].image)):r.push(Cl(i[o]))}else r=Cl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Cl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Up.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let U0=0;class gn extends ur{constructor(t=gn.DEFAULT_IMAGE,e=gn.DEFAULT_MAPPING,n=ii,i=ii,r=yn,o=Gs,a=si,c=ms,l=gn.DEFAULT_ANISOTROPY,u=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=po(),this.name="",this.source=new kp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ys?Ke:Wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hu:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case du:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hu:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case du:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ke?Ys:Ip}set encoding(t){qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ys?Ke:Wn}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=wp;gn.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,e=0,n=0,i=1){Ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],_=c[2],f=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,M=(m+1)/2,S=(p+1)/2,b=(u+d)/4,T=(h+_)/4,A=(g+f)/4;return v>M&&v>S?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=T/n):M>S?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=b/i,r=A/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=T/r,i=A/r),this.set(n,i,r,e),this}let x=Math.sqrt((f-g)*(f-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((l+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class k0 extends ur{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(qr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ys?Ke:Wn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new gn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new kp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends k0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bp extends gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class B0 extends gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==d||l!==m||u!==g){let f=1-a;const p=c*d+l*m+u*g+h*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const S=Math.sqrt(v),b=Math.atan2(S,p*x);f=Math.sin(f*b)/S,a=Math.sin(a*b)/S}const M=a*x;if(c=c*f+d*M,l=l*f+m*M,u=u*f+g*M,h=h*f+_*M,f===1-a){const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*m-l*d,t[e+1]=c*g+u*d+l*h-a*m,t[e+2]=l*g+u*m+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),m=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(sn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),u=2*(a*e-r*i),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rl.copy(this).projectOnVector(t),this.sub(Rl)}reflect(t){return this.sub(Rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rl=new U,Hd=new qi;class hr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ra.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ra.copy(n.boundingBox)),Ra.applyMatrix4(t.matrixWorld),this.union(Ra)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Eo),Pa.subVectors(this.max,Eo),Sr.subVectors(t.a,Eo),Mr.subVectors(t.b,Eo),Tr.subVectors(t.c,Eo),ts.subVectors(Mr,Sr),es.subVectors(Tr,Mr),Ps.subVectors(Sr,Tr);let e=[0,-ts.z,ts.y,0,-es.z,es.y,0,-Ps.z,Ps.y,ts.z,0,-ts.x,es.z,0,-es.x,Ps.z,0,-Ps.x,-ts.y,ts.x,0,-es.y,es.x,0,-Ps.y,Ps.x,0];return!Pl(e,Sr,Mr,Tr,Pa)||(e=[1,0,0,0,1,0,0,0,1],!Pl(e,Sr,Mr,Tr,Pa))?!1:(Da.crossVectors(ts,es),e=[Da.x,Da.y,Da.z],Pl(e,Sr,Mr,Tr,Pa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pi=[new U,new U,new U,new U,new U,new U,new U,new U],Qn=new U,Ra=new hr,Sr=new U,Mr=new U,Tr=new U,ts=new U,es=new U,Ps=new U,Eo=new U,Pa=new U,Da=new U,Ds=new U;function Pl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ds.fromArray(s,r);const a=i.x*Math.abs(Ds.x)+i.y*Math.abs(Ds.y)+i.z*Math.abs(Ds.z),c=t.dot(Ds),l=e.dot(Ds),u=n.dot(Ds);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const V0=new hr,wo=new U,Dl=new U;class da{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):V0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);const e=wo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(wo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(Dl)),this.expandByPoint(wo.copy(t.center).sub(Dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new U,Ll=new U,La=new U,ns=new U,Nl=new U,Na=new U,Il=new U;class Ku{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ll.copy(t).add(e).multiplyScalar(.5),La.copy(e).sub(t).normalize(),ns.copy(this.origin).sub(Ll);const r=t.distanceTo(e)*.5,o=-this.direction.dot(La),a=ns.dot(this.direction),c=-ns.dot(La),l=ns.lengthSq(),u=Math.abs(1-o*o);let h,d,m,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,m=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ll).addScaledVector(La,d),m}intersectSphere(t,e){Di.subVectors(t.center,this.origin);const n=Di.dot(this.direction),i=Di.dot(Di)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,n,i,r){Nl.subVectors(e,t),Na.subVectors(n,t),Il.crossVectors(Nl,Na);let o=this.direction.dot(Il),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,t);const c=a*this.direction.dot(Na.crossVectors(ns,Na));if(c<0)return null;const l=a*this.direction.dot(Nl.cross(ns));if(l<0||c+l>o)return null;const u=-a*ns.dot(Il);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,n,i,r,o,a,c,l,u,h,d,m,g,_,f){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,u,h,d,m,g,_,f)}set(t,e,n,i,r,o,a,c,l,u,h,d,m,g,_,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/br.setFromMatrixColumn(t,0).length(),r=1/br.setFromMatrixColumn(t,1).length(),o=1/br.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,m=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=m+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,m=c*h,g=l*u,_=l*h;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,m=c*h,g=l*u,_=l*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,m=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-m,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-d*h,e[8]=g*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=o*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(z0,t,G0)}lookAt(t,e,n){const i=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),is.crossVectors(n,Pn),is.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),is.crossVectors(n,Pn)),is.normalize(),Ia.crossVectors(Pn,is),i[0]=is.x,i[4]=Ia.x,i[8]=Pn.x,i[1]=is.y,i[5]=Ia.y,i[9]=Pn.y,i[2]=is.z,i[6]=Ia.z,i[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],x=n[3],v=n[7],M=n[11],S=n[15],b=i[0],T=i[4],A=i[8],N=i[12],y=i[1],E=i[5],L=i[9],k=i[13],P=i[2],F=i[6],O=i[10],B=i[14],z=i[3],H=i[7],q=i[11],j=i[15];return r[0]=o*b+a*y+c*P+l*z,r[4]=o*T+a*E+c*F+l*H,r[8]=o*A+a*L+c*O+l*q,r[12]=o*N+a*k+c*B+l*j,r[1]=u*b+h*y+d*P+m*z,r[5]=u*T+h*E+d*F+m*H,r[9]=u*A+h*L+d*O+m*q,r[13]=u*N+h*k+d*B+m*j,r[2]=g*b+_*y+f*P+p*z,r[6]=g*T+_*E+f*F+p*H,r[10]=g*A+_*L+f*O+p*q,r[14]=g*N+_*k+f*B+p*j,r[3]=x*b+v*y+M*P+S*z,r[7]=x*T+v*E+M*F+S*H,r[11]=x*A+v*L+M*O+S*q,r[15]=x*N+v*k+M*B+S*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*m-n*c*m)+_*(+e*c*m-e*l*d+r*o*d-i*o*m+i*l*u-r*c*u)+f*(+e*l*h-e*a*m-r*o*h+n*o*m+r*a*u-n*l*u)+p*(-i*a*u-e*c*h+e*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],x=h*f*l-_*d*l+_*c*m-a*f*m-h*c*p+a*d*p,v=g*d*l-u*f*l-g*c*m+o*f*m+u*c*p-o*d*p,M=u*_*l-g*h*l+g*a*m-o*_*m-u*a*p+o*h*p,S=g*h*c-u*_*c-g*a*d+o*_*d+u*a*f-o*h*f,b=e*x+n*v+i*M+r*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=x*T,t[1]=(_*d*r-h*f*r-_*i*m+n*f*m+h*i*p-n*d*p)*T,t[2]=(a*f*r-_*c*r+_*i*l-n*f*l-a*i*p+n*c*p)*T,t[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*m-n*c*m)*T,t[4]=v*T,t[5]=(u*f*r-g*d*r+g*i*m-e*f*m-u*i*p+e*d*p)*T,t[6]=(g*c*r-o*f*r-g*i*l+e*f*l+o*i*p-e*c*p)*T,t[7]=(o*d*r-u*c*r+u*i*l-e*d*l-o*i*m+e*c*m)*T,t[8]=M*T,t[9]=(g*h*r-u*_*r-g*n*m+e*_*m+u*n*p-e*h*p)*T,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*T,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*m-e*a*m)*T,t[12]=S*T,t[13]=(u*_*i-g*h*i+g*n*d-e*_*d-u*n*f+e*h*f)*T,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*f-e*a*f)*T,t[15]=(o*h*i-u*a*i+u*n*c-e*h*c-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,m=r*u,g=r*h,_=o*u,f=o*h,p=a*h,x=c*l,v=c*u,M=c*h,S=n.x,b=n.y,T=n.z;return i[0]=(1-(_+p))*S,i[1]=(m+M)*S,i[2]=(g-v)*S,i[3]=0,i[4]=(m-M)*b,i[5]=(1-(d+p))*b,i[6]=(f+x)*b,i[7]=0,i[8]=(g+v)*T,i[9]=(f-x)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=br.set(i[0],i[1],i[2]).length();const o=br.set(i[4],i[5],i[6]).length(),a=br.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],ti.copy(this);const l=1/r,u=1/o,h=1/a;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,e.setFromRotationMatrix(ti),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=zi){const c=this.elements,l=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let m,g;if(a===zi)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===gc)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=zi){const c=this.elements,l=1/(e-t),u=1/(n-i),h=1/(o-r),d=(e+t)*l,m=(n+i)*u;let g,_;if(a===zi)g=(o+r)*h,_=-2*h;else if(a===gc)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const br=new U,ti=new ge,z0=new U(0,0,0),G0=new U(1,1,1),is=new U,Ia=new U,Pn=new U,Wd=new ge,Xd=new qi;class Kc{constructor(t=0,e=0,n=0,i=Kc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kc.DEFAULT_ORDER="XYZ";class Ju{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let H0=0;const qd=new U,Er=new qi,Li=new ge,Oa=new U,Ao=new U,W0=new U,X0=new qi,Yd=new U(1,0,0),jd=new U(0,1,0),$d=new U(0,0,1),q0={type:"added"},Y0={type:"removed"};class We extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new U,e=new Kc,n=new qi,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ge},normalMatrix:{value:new Xt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ju,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(Yd,t)}rotateY(t){return this.rotateOnAxis(jd,t)}rotateZ(t){return this.rotateOnAxis($d,t)}translateOnAxis(t,e){return qd.copy(t).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yd,t)}translateY(t){return this.translateOnAxis(jd,t)}translateZ(t){return this.translateOnAxis($d,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Oa.copy(t):Oa.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Ao,Oa,this.up):Li.lookAt(Oa,Ao,this.up),this.quaternion.setFromRotationMatrix(Li),i&&(Li.extractRotation(i.matrixWorld),Er.setFromRotationMatrix(Li),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(q0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Y0)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,t,W0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,X0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}We.DEFAULT_UP=new U(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new U,Ni=new U,Ol=new U,Ii=new U,wr=new U,Ar=new U,Zd=new U,Fl=new U,Ul=new U,kl=new U;class pi{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ei.subVectors(t,e),i.cross(ei);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ei.subVectors(i,e),Ni.subVectors(n,e),Ol.subVectors(t,e);const o=ei.dot(ei),a=ei.dot(Ni),c=ei.dot(Ol),l=Ni.dot(Ni),u=Ni.dot(Ol),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ii.x),c.addScaledVector(o,Ii.y),c.addScaledVector(a,Ii.z),c)}static isFrontFacing(t,e,n,i){return ei.subVectors(n,e),Ni.subVectors(t,e),ei.cross(Ni).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ei.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return pi.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;wr.subVectors(i,n),Ar.subVectors(r,n),Fl.subVectors(t,n);const c=wr.dot(Fl),l=Ar.dot(Fl);if(c<=0&&l<=0)return e.copy(n);Ul.subVectors(t,i);const u=wr.dot(Ul),h=Ar.dot(Ul);if(u>=0&&h<=u)return e.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(wr,o);kl.subVectors(t,r);const m=wr.dot(kl),g=Ar.dot(kl);if(g>=0&&m<=g)return e.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ar,a);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return Zd.subVectors(r,i),a=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(Zd,a);const p=1/(f+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(wr,o).addScaledVector(Ar,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function Bl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=Zu(t,1),e=sn(e,0,1),n=sn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Bl(o,r,t+1/3),this.g=Bl(o,r,t),this.b=Bl(o,r,t-1/3)}return ie.toWorkingColorSpace(this,i),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=Vp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yr(t.r),this.g=Yr(t.g),this.b=Yr(t.b),this}copyLinearToSRGB(t){return this.r=Al(t.r),this.g=Al(t.g),this.b=Al(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return ie.fromWorkingColorSpace(nn.copy(this),t),Math.round(sn(nn.r*255,0,255))*65536+Math.round(sn(nn.g*255,0,255))*256+Math.round(sn(nn.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=Ke){ie.fromWorkingColorSpace(nn.copy(this),t);const e=nn.r,n=nn.g,i=nn.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ss),this.setHSL(ss.h+t,ss.s+e,ss.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ss),t.getHSL(Fa);const n=Fo(ss.h,Fa.h,e),i=Fo(ss.s,Fa.s,e),r=Fo(ss.l,Fa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Kt;Kt.NAMES=Vp;let j0=0;class mo extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=po(),this.name="",this.type="Material",this.blending=Xr,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=dc,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=fc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(n.blending=this.blending),this.side!==xs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hc&&(n.blendSrc=this.blendSrc),this.blendDst!==dc&&(n.blendDst=this.blendDst),this.blendEquation!==cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zp extends mo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new U,Ua=new Lt;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ud,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return qr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ua.fromBufferAttribute(this,e),Ua.applyMatrix3(t),this.setXY(e,Ua.x,Ua.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=kr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=kr(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=kr(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=kr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=kr(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),i=un(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ud&&(t.usage=this.usage),t}}class Gp extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hp extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yn extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $0=0;const zn=new ge,Vl=new We,Cr=new U,Dn=new hr,Co=new hr,ze=new U;class bi extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=po(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fp(t)?Hp:Gp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,n){return zn.makeTranslation(t,e,n),this.applyMatrix4(zn),this}scale(t,e,n){return zn.makeScale(t,e,n),this.applyMatrix4(zn),this}lookAt(t){return Vl.lookAt(t),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Yn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new da);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Co.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(Dn.min,Co.min),Dn.expandByPoint(ze),ze.addVectors(Dn.max,Co.max),Dn.expandByPoint(ze)):(Dn.expandByPoint(Co.min),Dn.expandByPoint(Co.max))}Dn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ze.fromBufferAttribute(a,l),c&&(Cr.fromBufferAttribute(t,l),ze.add(Cr)),i=Math.max(i,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let y=0;y<a;y++)l[y]=new U,u[y]=new U;const h=new U,d=new U,m=new U,g=new Lt,_=new Lt,f=new Lt,p=new U,x=new U;function v(y,E,L){h.fromArray(i,y*3),d.fromArray(i,E*3),m.fromArray(i,L*3),g.fromArray(o,y*2),_.fromArray(o,E*2),f.fromArray(o,L*2),d.sub(h),m.sub(h),_.sub(g),f.sub(g);const k=1/(_.x*f.y-f.x*_.y);isFinite(k)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-_.y).multiplyScalar(k),x.copy(m).multiplyScalar(_.x).addScaledVector(d,-f.x).multiplyScalar(k),l[y].add(p),l[E].add(p),l[L].add(p),u[y].add(x),u[E].add(x),u[L].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let y=0,E=M.length;y<E;++y){const L=M[y],k=L.start,P=L.count;for(let F=k,O=k+P;F<O;F+=3)v(n[F+0],n[F+1],n[F+2])}const S=new U,b=new U,T=new U,A=new U;function N(y){T.fromArray(r,y*3),A.copy(T);const E=l[y];S.copy(E),S.sub(T.multiplyScalar(T.dot(E))).normalize(),b.crossVectors(A,E);const k=b.dot(u[y])<0?-1:1;c[y*4]=S.x,c[y*4+1]=S.y,c[y*4+2]=S.z,c[y*4+3]=k}for(let y=0,E=M.length;y<E;++y){const L=M[y],k=L.start,P=L.count;for(let F=k,O=k+P;F<O;F+=3)N(n[F+0]),N(n[F+1]),N(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,h=new U;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let _=0,f=c.length;_<f;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[m++]}return new Je(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new bi,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kd=new ge,Ls=new Ku,ka=new da,Jd=new U,Rr=new U,Pr=new U,Dr=new U,zl=new U,Ba=new U,Va=new Lt,za=new Lt,Ga=new Lt,Qd=new U,tf=new U,ef=new U,Ha=new U,Wa=new U;class mn extends We{constructor(t=new bi,e=new zp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ba.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(zl.fromBufferAttribute(h,t),o?Ba.addScaledVector(zl,u):Ba.addScaledVector(zl.sub(e),u))}e.add(Ba)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(r),Ls.copy(t.ray).recast(t.near),!(ka.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(ka,Jd)===null||Ls.origin.distanceToSquared(Jd)>(t.far-t.near)**2))&&(Kd.copy(r).invert(),Ls.copy(t.ray).applyMatrix4(Kd),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ls)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=o[f.materialIndex],x=Math.max(f.start,m.start),v=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let M=x,S=v;M<S;M+=3){const b=a.getX(M),T=a.getX(M+1),A=a.getX(M+2);i=Xa(this,p,t,n,l,u,h,b,T,A),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const x=a.getX(f),v=a.getX(f+1),M=a.getX(f+2);i=Xa(this,o,t,n,l,u,h,x,v,M),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=o[f.materialIndex],x=Math.max(f.start,m.start),v=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let M=x,S=v;M<S;M+=3){const b=M,T=M+1,A=M+2;i=Xa(this,p,t,n,l,u,h,b,T,A),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const x=f,v=f+1,M=f+2;i=Xa(this,o,t,n,l,u,h,x,v,M),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function Z0(s,t,e,n,i,r,o,a){let c;if(t.side===Mn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===xs,a),c===null)return null;Wa.copy(a),Wa.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Wa);return l<e.near||l>e.far?null:{distance:l,point:Wa.clone(),object:s}}function Xa(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Rr),s.getVertexPosition(c,Pr),s.getVertexPosition(l,Dr);const u=Z0(s,t,e,n,Rr,Pr,Dr,Ha);if(u){i&&(Va.fromBufferAttribute(i,a),za.fromBufferAttribute(i,c),Ga.fromBufferAttribute(i,l),u.uv=pi.getInterpolation(Ha,Rr,Pr,Dr,Va,za,Ga,new Lt)),r&&(Va.fromBufferAttribute(r,a),za.fromBufferAttribute(r,c),Ga.fromBufferAttribute(r,l),u.uv1=pi.getInterpolation(Ha,Rr,Pr,Dr,Va,za,Ga,new Lt),u.uv2=u.uv1),o&&(Qd.fromBufferAttribute(o,a),tf.fromBufferAttribute(o,c),ef.fromBufferAttribute(o,l),u.normal=pi.getInterpolation(Ha,Rr,Pr,Dr,Qd,tf,ef,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new U,materialIndex:0};pi.getNormal(Rr,Pr,Dr,h.normal),u.face=h}return u}class fa extends bi{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Yn(l,3)),this.setAttribute("normal",new Yn(u,3)),this.setAttribute("uv",new Yn(h,2));function g(_,f,p,x,v,M,S,b,T,A,N){const y=M/T,E=S/A,L=M/2,k=S/2,P=b/2,F=T+1,O=A+1;let B=0,z=0;const H=new U;for(let q=0;q<O;q++){const j=q*E-k;for(let Q=0;Q<F;Q++){const xt=Q*y-L;H[_]=xt*x,H[f]=j*v,H[p]=P,l.push(H.x,H.y,H.z),H[_]=0,H[f]=0,H[p]=b>0?1:-1,u.push(H.x,H.y,H.z),h.push(Q/T),h.push(1-q/A),B+=1}}for(let q=0;q<A;q++)for(let j=0;j<T;j++){const Q=d+j+F*q,xt=d+j+F*(q+1),X=d+(j+1)+F*(q+1),Y=d+(j+1)+F*q;c.push(Q,xt,Y),c.push(xt,X,Y),z+=6}a.addGroup(m,z,N),m+=z,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function no(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function hn(s){const t={};for(let e=0;e<s.length;e++){const n=no(s[e]);for(const i in n)t[i]=n[i]}return t}function K0(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Wp(s){return s.getRenderTarget()===null?s.outputColorSpace:ie.workingColorSpace}const Xp={clone:no,merge:hn};var J0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends mo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J0,this.fragmentShader=Q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=no(t.uniforms),this.uniformsGroups=K0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class qp extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rs=new U,nf=new Lt,sf=new Lt;class Hn extends qp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,nf,sf),e.subVectors(sf,nf)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Oo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Lr=-90,Nr=1;class tv extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Hn(Lr,Nr,t,e);i.layers=this.layers,this.add(i);const r=new Hn(Lr,Nr,t,e);r.layers=this.layers,this.add(r);const o=new Hn(Lr,Nr,t,e);o.layers=this.layers,this.add(o);const a=new Hn(Lr,Nr,t,e);a.layers=this.layers,this.add(a);const c=new Hn(Lr,Nr,t,e);c.layers=this.layers,this.add(c);const l=new Hn(Lr,Nr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===zi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===gc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yp extends gn{constructor(t,e,n,i,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Jr,super(t,e,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ev extends ys{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(qr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ys?Ke:Wn),this.texture=new Yp(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fa(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:no(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Hi});r.uniforms.tEquirect.value=e;const o=new mn(i,r),a=e.minFilter;return e.minFilter===Gs&&(e.minFilter=yn),new tv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Gl=new U,nv=new U,iv=new Xt;class ki{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Gl.subVectors(n,e).cross(nv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Gl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||iv.getNormalMatrix(t),i=this.coplanarPoint(Gl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new da,qa=new U;class Qu{constructor(t=new ki,e=new ki,n=new ki,i=new ki,r=new ki,o=new ki){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zi){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],m=i[8],g=i[9],_=i[10],f=i[11],p=i[12],x=i[13],v=i[14],M=i[15];if(n[0].setComponents(c-r,d-l,f-m,M-p).normalize(),n[1].setComponents(c+r,d+l,f+m,M+p).normalize(),n[2].setComponents(c+o,d+u,f+g,M+x).normalize(),n[3].setComponents(c-o,d-u,f-g,M-x).normalize(),n[4].setComponents(c-a,d-h,f-_,M-v).normalize(),e===zi)n[5].setComponents(c+a,d+h,f+_,M+v).normalize();else if(e===gc)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(t){return Ns.center.set(0,0,0),Ns.radius=.7071067811865476,Ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(qa.x=i.normal.x>0?t.max.x:t.min.x,qa.y=i.normal.y>0?t.max.y:t.min.y,qa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(qa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jp(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function sv(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,m=h.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,h,d),l.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,u,h){const d=u.array,m=u._updateRange,g=u.updateRanges;if(s.bindBuffer(h,l),m.count===-1&&g.length===0&&s.bufferSubData(h,0,d),g.length!==0){for(let _=0,f=g.length;_<f;_++){const p=g[_];e?s.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,i(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}class Jc extends bi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=t/a,d=e/c,m=[],g=[],_=[],f=[];for(let p=0;p<u;p++){const x=p*d-o;for(let v=0;v<l;v++){const M=v*h-r;g.push(M,-x,0),_.push(0,0,1),f.push(v/a),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const v=x+l*p,M=x+l*(p+1),S=x+1+l*(p+1),b=x+1+l*p;m.push(v,M,b),m.push(M,S,b)}this.setIndex(m),this.setAttribute("position",new Yn(g,3)),this.setAttribute("normal",new Yn(_,3)),this.setAttribute("uv",new Yn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.width,t.height,t.widthSegments,t.heightSegments)}}var rv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ov=`#ifdef USE_ALPHAHASH
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
#endif`,av=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hv=`#ifdef USE_AOMAP
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
#endif`,dv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fv=`#ifdef USE_BATCHING
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
#endif`,pv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,mv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_v=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vv=`#ifdef USE_IRIDESCENCE
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
#endif`,xv=`#ifdef USE_BUMPMAP
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
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Av=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cv=`#define PI 3.141592653589793
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
} // validated`,Rv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pv=`vec3 transformedNormal = objectNormal;
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
#endif`,Dv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fv=`
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
}`,Uv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bv=`#ifdef USE_ENVMAP
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
#endif`,Vv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qv=`#ifdef USE_GRADIENTMAP
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
}`,Yv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$v=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kv=`uniform bool receiveShadow;
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
#endif`,Jv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ex=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ix=`PhysicalMaterial material;
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
#endif`,sx=`struct PhysicalMaterial {
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
}`,rx=`
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
#endif`,ox=`#if defined( RE_IndirectDiffuse )
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
#endif`,ax=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ux=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mx=`#if defined( USE_POINTS_UV )
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
#endif`,_x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xx=`#ifdef USE_MORPHNORMALS
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
#endif`,yx=`#ifdef USE_MORPHTARGETS
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
#endif`,Sx=`#ifdef USE_MORPHTARGETS
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
#endif`,Mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ax=`#ifdef USE_NORMALMAP
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
#endif`,Cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Px=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hx=`float getShadowMask() {
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
}`,Wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xx=`#ifdef USE_SKINNING
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
#endif`,qx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yx=`#ifdef USE_SKINNING
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
#endif`,jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$x=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jx=`#ifdef USE_TRANSMISSION
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
#endif`,Qx=`#ifdef USE_TRANSMISSION
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
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ry=`uniform sampler2D t2D;
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
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ay=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`#include <common>
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
}`,hy=`#if DEPTH_PACKING == 3200
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
}`,dy=`#define DISTANCE
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
}`,fy=`#define DISTANCE
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
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,my=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`uniform float scale;
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
}`,gy=`uniform vec3 diffuse;
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
}`,vy=`#include <common>
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
}`,xy=`uniform vec3 diffuse;
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
}`,yy=`#define LAMBERT
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
}`,Sy=`#define LAMBERT
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
}`,My=`#define MATCAP
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
}`,Ty=`#define MATCAP
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
}`,by=`#define NORMAL
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
}`,Ey=`#define NORMAL
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
}`,wy=`#define PHONG
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
}`,Ay=`#define PHONG
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
}`,Cy=`#define STANDARD
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
}`,Ry=`#define STANDARD
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
}`,Py=`#define TOON
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
}`,Dy=`#define TOON
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
}`,Ly=`uniform float size;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Iy=`#include <common>
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
}`,Oy=`uniform vec3 color;
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
}`,Fy=`uniform float rotation;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:rv,alphahash_pars_fragment:ov,alphamap_fragment:av,alphamap_pars_fragment:cv,alphatest_fragment:lv,alphatest_pars_fragment:uv,aomap_fragment:hv,aomap_pars_fragment:dv,batching_pars_vertex:fv,batching_vertex:pv,begin_vertex:mv,beginnormal_vertex:_v,bsdfs:gv,iridescence_fragment:vv,bumpmap_pars_fragment:xv,clipping_planes_fragment:yv,clipping_planes_pars_fragment:Sv,clipping_planes_pars_vertex:Mv,clipping_planes_vertex:Tv,color_fragment:bv,color_pars_fragment:Ev,color_pars_vertex:wv,color_vertex:Av,common:Cv,cube_uv_reflection_fragment:Rv,defaultnormal_vertex:Pv,displacementmap_pars_vertex:Dv,displacementmap_vertex:Lv,emissivemap_fragment:Nv,emissivemap_pars_fragment:Iv,colorspace_fragment:Ov,colorspace_pars_fragment:Fv,envmap_fragment:Uv,envmap_common_pars_fragment:kv,envmap_pars_fragment:Bv,envmap_pars_vertex:Vv,envmap_physical_pars_fragment:Jv,envmap_vertex:zv,fog_vertex:Gv,fog_pars_vertex:Hv,fog_fragment:Wv,fog_pars_fragment:Xv,gradientmap_pars_fragment:qv,lightmap_fragment:Yv,lightmap_pars_fragment:jv,lights_lambert_fragment:$v,lights_lambert_pars_fragment:Zv,lights_pars_begin:Kv,lights_toon_fragment:Qv,lights_toon_pars_fragment:tx,lights_phong_fragment:ex,lights_phong_pars_fragment:nx,lights_physical_fragment:ix,lights_physical_pars_fragment:sx,lights_fragment_begin:rx,lights_fragment_maps:ox,lights_fragment_end:ax,logdepthbuf_fragment:cx,logdepthbuf_pars_fragment:lx,logdepthbuf_pars_vertex:ux,logdepthbuf_vertex:hx,map_fragment:dx,map_pars_fragment:fx,map_particle_fragment:px,map_particle_pars_fragment:mx,metalnessmap_fragment:_x,metalnessmap_pars_fragment:gx,morphcolor_vertex:vx,morphnormal_vertex:xx,morphtarget_pars_vertex:yx,morphtarget_vertex:Sx,normal_fragment_begin:Mx,normal_fragment_maps:Tx,normal_pars_fragment:bx,normal_pars_vertex:Ex,normal_vertex:wx,normalmap_pars_fragment:Ax,clearcoat_normal_fragment_begin:Cx,clearcoat_normal_fragment_maps:Rx,clearcoat_pars_fragment:Px,iridescence_pars_fragment:Dx,opaque_fragment:Lx,packing:Nx,premultiplied_alpha_fragment:Ix,project_vertex:Ox,dithering_fragment:Fx,dithering_pars_fragment:Ux,roughnessmap_fragment:kx,roughnessmap_pars_fragment:Bx,shadowmap_pars_fragment:Vx,shadowmap_pars_vertex:zx,shadowmap_vertex:Gx,shadowmask_pars_fragment:Hx,skinbase_vertex:Wx,skinning_pars_vertex:Xx,skinning_vertex:qx,skinnormal_vertex:Yx,specularmap_fragment:jx,specularmap_pars_fragment:$x,tonemapping_fragment:Zx,tonemapping_pars_fragment:Kx,transmission_fragment:Jx,transmission_pars_fragment:Qx,uv_pars_fragment:ty,uv_pars_vertex:ey,uv_vertex:ny,worldpos_vertex:iy,background_vert:sy,background_frag:ry,backgroundCube_vert:oy,backgroundCube_frag:ay,cube_vert:cy,cube_frag:ly,depth_vert:uy,depth_frag:hy,distanceRGBA_vert:dy,distanceRGBA_frag:fy,equirect_vert:py,equirect_frag:my,linedashed_vert:_y,linedashed_frag:gy,meshbasic_vert:vy,meshbasic_frag:xy,meshlambert_vert:yy,meshlambert_frag:Sy,meshmatcap_vert:My,meshmatcap_frag:Ty,meshnormal_vert:by,meshnormal_frag:Ey,meshphong_vert:wy,meshphong_frag:Ay,meshphysical_vert:Cy,meshphysical_frag:Ry,meshtoon_vert:Py,meshtoon_frag:Dy,points_vert:Ly,points_frag:Ny,shadow_vert:Iy,shadow_frag:Oy,sprite_vert:Fy,sprite_frag:Uy},dt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},di={basic:{uniforms:hn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:hn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:hn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:hn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:hn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:hn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:hn([dt.points,dt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:hn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:hn([dt.common,dt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:hn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:hn([dt.sprite,dt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:hn([dt.common,dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:hn([dt.lights,dt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};di.physical={uniforms:hn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Ya={r:0,b:0,g:0};function ky(s,t,e,n,i,r,o){const a=new Kt(0);let c=r===!0?0:1,l,u,h=null,d=0,m=null;function g(f,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,c):v&&v.isColor&&(_(v,1),x=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===$c)?(u===void 0&&(u=new mn(new fa(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:no(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=ie.getTransfer(v.colorSpace)!==he,(h!==v||d!==v.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=s.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new mn(new Jc(2,2),new $n({name:"BackgroundMaterial",uniforms:no(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ie.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,m=s.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function _(f,p){f.getRGB(Ya,Wp(s)),n.buffers.color.setClear(Ya.r,Ya.g,Ya.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,_(a,c)},render:g}}function By(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=f(null);let l=c,u=!1;function h(P,F,O,B,z){let H=!1;if(o){const q=_(B,O,F);l!==q&&(l=q,m(l.object)),H=p(P,B,O,z),H&&x(P,B,O,z)}else{const q=F.wireframe===!0;(l.geometry!==B.id||l.program!==O.id||l.wireframe!==q)&&(l.geometry=B.id,l.program=O.id,l.wireframe=q,H=!0)}z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(H||u)&&(u=!1,A(P,F,O,B),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,F,O){const B=O.wireframe===!0;let z=a[P.id];z===void 0&&(z={},a[P.id]=z);let H=z[F.id];H===void 0&&(H={},z[F.id]=H);let q=H[B];return q===void 0&&(q=f(d()),H[B]=q),q}function f(P){const F=[],O=[],B=[];for(let z=0;z<i;z++)F[z]=0,O[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:B,object:P,attributes:{},index:null}}function p(P,F,O,B){const z=l.attributes,H=F.attributes;let q=0;const j=O.getAttributes();for(const Q in j)if(j[Q].location>=0){const X=z[Q];let Y=H[Q];if(Y===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),X===void 0||X.attribute!==Y||Y&&X.data!==Y.data)return!0;q++}return l.attributesNum!==q||l.index!==B}function x(P,F,O,B){const z={},H=F.attributes;let q=0;const j=O.getAttributes();for(const Q in j)if(j[Q].location>=0){let X=H[Q];X===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(X=P.instanceColor));const Y={};Y.attribute=X,X&&X.data&&(Y.data=X.data),z[Q]=Y,q++}l.attributes=z,l.attributesNum=q,l.index=B}function v(){const P=l.newAttributes;for(let F=0,O=P.length;F<O;F++)P[F]=0}function M(P){S(P,0)}function S(P,F){const O=l.newAttributes,B=l.enabledAttributes,z=l.attributeDivisors;O[P]=1,B[P]===0&&(s.enableVertexAttribArray(P),B[P]=1),z[P]!==F&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),z[P]=F)}function b(){const P=l.newAttributes,F=l.enabledAttributes;for(let O=0,B=F.length;O<B;O++)F[O]!==P[O]&&(s.disableVertexAttribArray(O),F[O]=0)}function T(P,F,O,B,z,H,q){q===!0?s.vertexAttribIPointer(P,F,O,z,H):s.vertexAttribPointer(P,F,O,B,z,H)}function A(P,F,O,B){if(n.isWebGL2===!1&&(P.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const z=B.attributes,H=O.getAttributes(),q=F.defaultAttributeValues;for(const j in H){const Q=H[j];if(Q.location>=0){let xt=z[j];if(xt===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(xt=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(xt=P.instanceColor)),xt!==void 0){const X=xt.normalized,Y=xt.itemSize,ct=e.get(xt);if(ct===void 0)continue;const _t=ct.buffer,et=ct.type,mt=ct.bytesPerElement,Ot=n.isWebGL2===!0&&(et===s.INT||et===s.UNSIGNED_INT||xt.gpuType===Ap);if(xt.isInterleavedBufferAttribute){const wt=xt.data,V=wt.stride,ue=xt.offset;if(wt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<Q.locationSize;Tt++)S(Q.location+Tt,wt.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Tt=0;Tt<Q.locationSize;Tt++)M(Q.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let Tt=0;Tt<Q.locationSize;Tt++)T(Q.location+Tt,Y/Q.locationSize,et,X,V*mt,(ue+Y/Q.locationSize*Tt)*mt,Ot)}else{if(xt.isInstancedBufferAttribute){for(let wt=0;wt<Q.locationSize;wt++)S(Q.location+wt,xt.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let wt=0;wt<Q.locationSize;wt++)M(Q.location+wt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let wt=0;wt<Q.locationSize;wt++)T(Q.location+wt,Y/Q.locationSize,et,X,Y*mt,Y/Q.locationSize*wt*mt,Ot)}}else if(q!==void 0){const X=q[j];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(Q.location,X);break;case 3:s.vertexAttrib3fv(Q.location,X);break;case 4:s.vertexAttrib4fv(Q.location,X);break;default:s.vertexAttrib1fv(Q.location,X)}}}}b()}function N(){L();for(const P in a){const F=a[P];for(const O in F){const B=F[O];for(const z in B)g(B[z].object),delete B[z];delete F[O]}delete a[P]}}function y(P){if(a[P.id]===void 0)return;const F=a[P.id];for(const O in F){const B=F[O];for(const z in B)g(B[z].object),delete B[z];delete F[O]}delete a[P.id]}function E(P){for(const F in a){const O=a[F];if(O[P.id]===void 0)continue;const B=O[P.id];for(const z in B)g(B[z].object),delete B[z];delete O[P.id]}}function L(){k(),u=!0,l!==c&&(l=c,m(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:L,resetDefaultState:k,dispose:N,releaseStatesOfGeometry:y,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:M,disableUnusedAttributes:b}}function Vy(s,t,e,n){const i=n.isWebGL2;let r;function o(u){r=u}function a(u,h){s.drawArrays(r,u,h),e.update(h,r,1)}function c(u,h,d){if(d===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,h,d),e.update(h,r,d)}function l(u,h,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function zy(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,M=o||t.has("OES_texture_float"),S=v&&M,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:b}}function Gy(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ki,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,f=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!f)r?u(null):l();else{const x=r?0:n,v=x*4;let M=p.clippingState||null;c.value=M,M=u(g,d,v,m);for(let S=0;S!==v;++S)M[S]=e[S];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,m,g){const _=h!==null?h.length:0;let f=null;if(_!==0){if(f=c.value,g!==!0||f===null){const p=m+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(f===null||f.length<p)&&(f=new Float32Array(p));for(let v=0,M=m;v!==_;++v,M+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(f,M),f[M+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function Hy(s){let t=new WeakMap;function e(o,a){return a===lu?o.mapping=Jr:a===uu&&(o.mapping=Qr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===lu||a===uu)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ev(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class th extends qp{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vr=4,rf=[.125,.215,.35,.446,.526,.582],Vs=20,Hl=new th,of=new Kt;let Wl=null,Xl=0,ql=0;const Fs=(1+Math.sqrt(5))/2,Ir=1/Fs,af=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Fs,Ir),new U(0,Fs,-Ir),new U(Ir,0,Fs),new U(-Ir,0,Fs),new U(Fs,Ir,0),new U(-Fs,Ir,0)];class cf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wl,Xl,ql),t.scissorTest=!1,ja(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Jr||t.mapping===Qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:to,format:si,colorSpace:Xi,depthBuffer:!1},i=lf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lf(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wy(r)),this._blurMaterial=Xy(r,t,e)}return i}_compileMaterial(t){const e=new mn(this._lodPlanes[0],t);this._renderer.compile(e,Hl)}_sceneToCubeUV(t,e,n,i){const a=new Hn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(of),u.toneMapping=ps,u.autoClear=!1;const m=new zp({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),g=new mn(new fa,m);let _=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(of),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const v=this._cubeSize;ja(i,x*v,p>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Jr||t.mapping===Qr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new mn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ja(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Hl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=af[(i-1)%af.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new mn(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Vs-1),_=r/g,f=isFinite(r)?1+Math.floor(u*_):Vs;f>Vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Vs}`);const p=[];let x=0;for(let T=0;T<Vs;++T){const A=T/_,N=Math.exp(-A*A/2);p.push(N),T===0?x+=N:T<f&&(x+=2*N)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const M=this._sizeLods[i],S=3*M*(i>v-Vr?i-v+Vr:0),b=4*(this._cubeSize-M);ja(e,S,b,3*M,2*M),c.setRenderTarget(e),c.render(h,Hl)}}function Wy(s){const t=[],e=[],n=[];let i=s;const r=s-Vr+1+rf.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Vr?c=rf[o-s+Vr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,f=2,p=1,x=new Float32Array(_*g*m),v=new Float32Array(f*g*m),M=new Float32Array(p*g*m);for(let b=0;b<m;b++){const T=b%3*2/3-1,A=b>2?0:-1,N=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];x.set(N,_*g*b),v.set(d,f*g*b);const y=[b,b,b,b,b,b];M.set(y,p*g*b)}const S=new bi;S.setAttribute("position",new Je(x,_)),S.setAttribute("uv",new Je(v,f)),S.setAttribute("faceIndex",new Je(M,p)),t.push(S),i>Vr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lf(s,t,e){const n=new ys(s,t,e);return n.texture.mapping=$c,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ja(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Xy(s,t,e){const n=new Float32Array(Vs),i=new U(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:eh(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function uf(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function hf(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function eh(){return`

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
	`}function qy(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===lu||c===uu,u=c===Jr||c===Qr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new cf(s)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new cf(s));const d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Yy(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jy(s,t,e,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],s.ARRAY_BUFFER)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let v=0,M=x.length;v<M;v+=3){const S=x[v+0],b=x[v+1],T=x[v+2];d.push(S,b,b,T,T,S)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const S=v+0,b=v+1,T=v+2;d.push(S,b,b,T,T,S)}}else return;const f=new(Fp(d)?Hp:Gp)(d,1);f.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,f)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function $y(s,t,e,n){const i=n.isWebGL2;let r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function u(m,g){s.drawElements(r,g,a,m*c),e.update(g,r,1)}function h(m,g,_){if(_===0)return;let f,p;if(i)f=s,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,g,a,m*c,_),e.update(g,r,_)}function d(m,g,_){if(_===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<_;p++)this.render(m[p]/c,g[p]);else{f.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let p=0;for(let x=0;x<_;x++)p+=g[x];e.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Zy(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ky(s,t){return s[0]-t[0]}function Jy(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Qy(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new Ie,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let f=r.get(u);if(f===void 0||f.count!==_){let F=function(){k.dispose(),r.delete(u),u.removeEventListener("dispose",F)};var m=F;f!==void 0&&f.texture.dispose();const v=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let N=0;v===!0&&(N=1),M===!0&&(N=2),S===!0&&(N=3);let y=u.attributes.position.count*N,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const L=new Float32Array(y*E*4*_),k=new Bp(L,y,E,_);k.type=Vi,k.needsUpdate=!0;const P=N*4;for(let O=0;O<_;O++){const B=b[O],z=T[O],H=A[O],q=y*E*4*O;for(let j=0;j<B.count;j++){const Q=j*P;v===!0&&(o.fromBufferAttribute(B,j),L[q+Q+0]=o.x,L[q+Q+1]=o.y,L[q+Q+2]=o.z,L[q+Q+3]=0),M===!0&&(o.fromBufferAttribute(z,j),L[q+Q+4]=o.x,L[q+Q+5]=o.y,L[q+Q+6]=o.z,L[q+Q+7]=0),S===!0&&(o.fromBufferAttribute(H,j),L[q+Q+8]=o.x,L[q+Q+9]=o.y,L[q+Q+10]=o.z,L[q+Q+11]=H.itemSize===4?o.w:1)}}f={count:_,texture:k,size:new Lt(y,E)},r.set(u,f),u.addEventListener("dispose",F)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];const x=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[u.id]=_}for(let M=0;M<g;M++){const S=_[M];S[0]=M,S[1]=d[M]}_.sort(Jy);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Ky);const f=u.morphAttributes.position,p=u.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const S=a[M],b=S[0],T=S[1];b!==Number.MAX_SAFE_INTEGER&&T?(f&&u.getAttribute("morphTarget"+M)!==f[b]&&u.setAttribute("morphTarget"+M,f[b]),p&&u.getAttribute("morphNormal"+M)!==p[b]&&u.setAttribute("morphNormal"+M,p[b]),i[M]=T,x+=T):(f&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),p&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const v=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(s,"morphTargetBaseInfluence",v),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function tS(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class $p extends gn{constructor(t,e,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:qs,u!==qs&&u!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qs&&(n=ls),n===void 0&&u===eo&&(n=Xs),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ze,this.minFilter=c!==void 0?c:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zp=new gn,Kp=new $p(1,1);Kp.compareFunction=Op;const Jp=new Bp,Qp=new B0,tm=new Yp,df=[],ff=[],pf=new Float32Array(16),mf=new Float32Array(9),_f=new Float32Array(4);function _o(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=df[i];if(r===void 0&&(r=new Float32Array(i),df[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ue(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Qc(s,t){let e=ff[t];e===void 0&&(e=new Int32Array(t),ff[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function eS(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function nS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2fv(this.addr,t),Ue(e,t)}}function iS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;s.uniform3fv(this.addr,t),Ue(e,t)}}function sS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4fv(this.addr,t),Ue(e,t)}}function rS(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Fe(e,n))return;_f.set(n),s.uniformMatrix2fv(this.addr,!1,_f),Ue(e,n)}}function oS(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Fe(e,n))return;mf.set(n),s.uniformMatrix3fv(this.addr,!1,mf),Ue(e,n)}}function aS(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Fe(e,n))return;pf.set(n),s.uniformMatrix4fv(this.addr,!1,pf),Ue(e,n)}}function cS(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function lS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2iv(this.addr,t),Ue(e,t)}}function uS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3iv(this.addr,t),Ue(e,t)}}function hS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4iv(this.addr,t),Ue(e,t)}}function dS(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function fS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2uiv(this.addr,t),Ue(e,t)}}function pS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3uiv(this.addr,t),Ue(e,t)}}function mS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4uiv(this.addr,t),Ue(e,t)}}function _S(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Kp:Zp;e.setTexture2D(t||r,i)}function gS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qp,i)}function vS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||tm,i)}function xS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jp,i)}function yS(s){switch(s){case 5126:return eS;case 35664:return nS;case 35665:return iS;case 35666:return sS;case 35674:return rS;case 35675:return oS;case 35676:return aS;case 5124:case 35670:return cS;case 35667:case 35671:return lS;case 35668:case 35672:return uS;case 35669:case 35673:return hS;case 5125:return dS;case 36294:return fS;case 36295:return pS;case 36296:return mS;case 35678:case 36198:case 36298:case 36306:case 35682:return _S;case 35679:case 36299:case 36307:return gS;case 35680:case 36300:case 36308:case 36293:return vS;case 36289:case 36303:case 36311:case 36292:return xS}}function SS(s,t){s.uniform1fv(this.addr,t)}function MS(s,t){const e=_o(t,this.size,2);s.uniform2fv(this.addr,e)}function TS(s,t){const e=_o(t,this.size,3);s.uniform3fv(this.addr,e)}function bS(s,t){const e=_o(t,this.size,4);s.uniform4fv(this.addr,e)}function ES(s,t){const e=_o(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function wS(s,t){const e=_o(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function AS(s,t){const e=_o(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function CS(s,t){s.uniform1iv(this.addr,t)}function RS(s,t){s.uniform2iv(this.addr,t)}function PS(s,t){s.uniform3iv(this.addr,t)}function DS(s,t){s.uniform4iv(this.addr,t)}function LS(s,t){s.uniform1uiv(this.addr,t)}function NS(s,t){s.uniform2uiv(this.addr,t)}function IS(s,t){s.uniform3uiv(this.addr,t)}function OS(s,t){s.uniform4uiv(this.addr,t)}function FS(s,t,e){const n=this.cache,i=t.length,r=Qc(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Zp,r[o])}function US(s,t,e){const n=this.cache,i=t.length,r=Qc(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Qp,r[o])}function kS(s,t,e){const n=this.cache,i=t.length,r=Qc(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||tm,r[o])}function BS(s,t,e){const n=this.cache,i=t.length,r=Qc(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Jp,r[o])}function VS(s){switch(s){case 5126:return SS;case 35664:return MS;case 35665:return TS;case 35666:return bS;case 35674:return ES;case 35675:return wS;case 35676:return AS;case 5124:case 35670:return CS;case 35667:case 35671:return RS;case 35668:case 35672:return PS;case 35669:case 35673:return DS;case 5125:return LS;case 36294:return NS;case 36295:return IS;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return FS;case 35679:case 36299:case 36307:return US;case 35680:case 36300:case 36308:case 36293:return kS;case 36289:case 36303:case 36311:case 36292:return BS}}class zS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yS(e.type)}}class GS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=VS(e.type)}}class HS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Yl=/(\w+)(\])?(\[|\.)?/g;function gf(s,t){s.seq.push(t),s.map[t.id]=t}function WS(s,t,e){const n=s.name,i=n.length;for(Yl.lastIndex=0;;){const r=Yl.exec(n),o=Yl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){gf(e,l===void 0?new zS(a,s,t):new GS(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new HS(a),gf(e,h)),e=h}}}class rc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);WS(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function vf(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const XS=37297;let qS=0;function YS(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function jS(s){const t=ie.getPrimaries(ie.workingColorSpace),e=ie.getPrimaries(s);let n;switch(t===e?n="":t===_c&&e===mc?n="LinearDisplayP3ToLinearSRGB":t===mc&&e===_c&&(n="LinearSRGBToLinearDisplayP3"),s){case Xi:case Zc:return[n,"LinearTransferOETF"];case Ke:case $u:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function xf(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+YS(s.getShaderSource(t),o)}else return i}function $S(s,t){const e=jS(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ZS(s,t){let e;switch(t){case $g:e="Linear";break;case Zg:e="Reinhard";break;case Kg:e="OptimizedCineon";break;case Jg:e="ACESFilmic";break;case t0:e="AgX";break;case Qg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function KS(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zr).join(`
`)}function JS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function QS(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tM(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function zr(s){return s!==""}function yf(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const eM=/^[ \t]*#include +<([\w\d./]+)>/gm;function mu(s){return s.replace(eM,iM)}const nM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function iM(s,t){let e=Gt[t];if(e===void 0){const n=nM.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return mu(e)}const sM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mf(s){return s.replace(sM,rM)}function rM(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Tf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function oM(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Tp?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===bg?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(t="SHADOWMAP_TYPE_VSM"),t}function aM(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Jr:case Qr:t="ENVMAP_TYPE_CUBE";break;case $c:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cM(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Qr:t="ENVMAP_MODE_REFRACTION";break}return t}function lM(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ep:t="ENVMAP_BLENDING_MULTIPLY";break;case Yg:t="ENVMAP_BLENDING_MIX";break;case jg:t="ENVMAP_BLENDING_ADD";break}return t}function uM(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function hM(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=oM(e),l=aM(e),u=cM(e),h=lM(e),d=uM(e),m=e.isWebGL2?"":KS(e),g=JS(e),_=QS(r),f=i.createProgram();let p,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(zr).join(`
`),p.length>0&&(p+=`
`),x=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(zr).join(`
`),x.length>0&&(x+=`
`)):(p=[Tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),x=[m,Tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ps?"#define TONE_MAPPING":"",e.toneMapping!==ps?Gt.tonemapping_pars_fragment:"",e.toneMapping!==ps?ZS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,$S("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zr).join(`
`)),o=mu(o),o=yf(o,e),o=Sf(o,e),a=mu(a),a=yf(a,e),a=Sf(a,e),o=Mf(o),a=Mf(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===kd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const M=v+p+o,S=v+x+a,b=vf(i,i.VERTEX_SHADER,M),T=vf(i,i.FRAGMENT_SHADER,S);i.attachShader(f,b),i.attachShader(f,T),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function A(L){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(f).trim(),P=i.getShaderInfoLog(b).trim(),F=i.getShaderInfoLog(T).trim();let O=!0,B=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,b,T);else{const z=xf(i,b,"vertex"),H=xf(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+z+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(P===""||F==="")&&(B=!1);B&&(L.diagnostics={runnable:O,programLog:k,vertexShader:{log:P,prefix:p},fragmentShader:{log:F,prefix:x}})}i.deleteShader(b),i.deleteShader(T),N=new rc(i,f),y=tM(i,f)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(f,XS)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qS++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=T,this}let dM=0;class fM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pM(t),e.set(t,n)),n}}class pM{constructor(t){this.id=dM++,this.code=t,this.usedTimes=0}}function mM(s,t,e,n,i,r,o){const a=new Ju,c=new fM,l=new Set,u=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,m=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,E,L,k,P){const F=k.fog,O=P.geometry,B=y.isMeshStandardMaterial?k.environment:null,z=(y.isMeshStandardMaterial?e:t).get(y.envMap||B),H=z&&z.mapping===$c?z.image.height:null,q=_[y.type];y.precision!==null&&(g=i.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Q=j!==void 0?j.length:0;let xt=0;O.morphAttributes.position!==void 0&&(xt=1),O.morphAttributes.normal!==void 0&&(xt=2),O.morphAttributes.color!==void 0&&(xt=3);let X,Y,ct,_t;if(q){const $t=di[q];X=$t.vertexShader,Y=$t.fragmentShader}else X=y.vertexShader,Y=y.fragmentShader,c.update(y),ct=c.getVertexShaderID(y),_t=c.getFragmentShaderID(y);const et=s.getRenderTarget(),mt=P.isInstancedMesh===!0,Ot=P.isBatchedMesh===!0,wt=!!y.map,V=!!y.matcap,ue=!!z,Tt=!!y.aoMap,J=!!y.lightMap,tt=!!y.bumpMap,Dt=!!y.normalMap,gt=!!y.displacementMap,C=!!y.emissiveMap,w=!!y.metalnessMap,G=!!y.roughnessMap,it=y.anisotropy>0,nt=y.clearcoat>0,rt=y.iridescence>0,St=y.sheen>0,ht=y.transmission>0,vt=it&&!!y.anisotropyMap,Et=nt&&!!y.clearcoatMap,Nt=nt&&!!y.clearcoatNormalMap,st=nt&&!!y.clearcoatRoughnessMap,Yt=rt&&!!y.iridescenceMap,Ft=rt&&!!y.iridescenceThicknessMap,Pt=St&&!!y.sheenColorMap,Mt=St&&!!y.sheenRoughnessMap,at=!!y.specularMap,Vt=!!y.specularColorMap,I=!!y.specularIntensityMap,ut=ht&&!!y.transmissionMap,pt=ht&&!!y.thicknessMap,Ct=!!y.gradientMap,D=!!y.alphaMap,lt=y.alphaTest>0,ot=!!y.alphaHash,bt=!!y.extensions;let Rt=ps;y.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Rt=s.toneMapping);const te={isWebGL2:h,shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:Y,defines:y.defines,customVertexShaderID:ct,customFragmentShaderID:_t,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ot,instancing:mt,instancingColor:mt&&P.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Xi,alphaToCoverage:!!y.alphaToCoverage,map:wt,matcap:V,envMap:ue,envMapMode:ue&&z.mapping,envMapCubeUVHeight:H,aoMap:Tt,lightMap:J,bumpMap:tt,normalMap:Dt,displacementMap:m&&gt,emissiveMap:C,normalMapObjectSpace:Dt&&y.normalMapType===h0,normalMapTangentSpace:Dt&&y.normalMapType===ju,metalnessMap:w,roughnessMap:G,anisotropy:it,anisotropyMap:vt,clearcoat:nt,clearcoatMap:Et,clearcoatNormalMap:Nt,clearcoatRoughnessMap:st,iridescence:rt,iridescenceMap:Yt,iridescenceThicknessMap:Ft,sheen:St,sheenColorMap:Pt,sheenRoughnessMap:Mt,specularMap:at,specularColorMap:Vt,specularIntensityMap:I,transmission:ht,transmissionMap:ut,thicknessMap:pt,gradientMap:Ct,opaque:y.transparent===!1&&y.blending===Xr&&y.alphaToCoverage===!1,alphaMap:D,alphaTest:lt,alphaHash:ot,combine:y.combine,mapUv:wt&&f(y.map.channel),aoMapUv:Tt&&f(y.aoMap.channel),lightMapUv:J&&f(y.lightMap.channel),bumpMapUv:tt&&f(y.bumpMap.channel),normalMapUv:Dt&&f(y.normalMap.channel),displacementMapUv:gt&&f(y.displacementMap.channel),emissiveMapUv:C&&f(y.emissiveMap.channel),metalnessMapUv:w&&f(y.metalnessMap.channel),roughnessMapUv:G&&f(y.roughnessMap.channel),anisotropyMapUv:vt&&f(y.anisotropyMap.channel),clearcoatMapUv:Et&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&f(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&f(y.sheenRoughnessMap.channel),specularMapUv:at&&f(y.specularMap.channel),specularColorMapUv:Vt&&f(y.specularColorMap.channel),specularIntensityMapUv:I&&f(y.specularIntensityMap.channel),transmissionMapUv:ut&&f(y.transmissionMap.channel),thicknessMapUv:pt&&f(y.thicknessMap.channel),alphaMapUv:D&&f(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Dt||it),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!O.attributes.uv&&(wt||D),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:xt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Rt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:wt&&y.map.isVideoTexture===!0&&ie.getTransfer(y.map.colorSpace)===he,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fi,flipSided:y.side===Mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:bt&&y.extensions.derivatives===!0,extensionFragDepth:bt&&y.extensions.fragDepth===!0,extensionDrawBuffers:bt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:bt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:bt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:bt&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return te.vertexUv1s=l.has(1),te.vertexUv2s=l.has(2),te.vertexUv3s=l.has(3),l.clear(),te}function x(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)E.push(L),E.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(v(E,y),M(E,y),E.push(s.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function v(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function M(y,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function S(y){const E=_[y.type];let L;if(E){const k=di[E];L=Xp.clone(k.uniforms)}else L=y.uniforms;return L}function b(y,E){let L;for(let k=0,P=u.length;k<P;k++){const F=u[k];if(F.cacheKey===E){L=F,++L.usedTimes;break}}return L===void 0&&(L=new hM(s,E,y,r),u.push(L)),L}function T(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),y.destroy()}}function A(y){c.remove(y)}function N(){c.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:S,acquireProgram:b,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:N}}function _M(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function gM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function bf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ef(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,d,m,g,_,f){let p=s[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:f},s[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=f),t++,p}function a(h,d,m,g,_,f){const p=o(h,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):e.push(p)}function c(h,d,m,g,_,f){const p=o(h,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||gM),n.length>1&&n.sort(d||bf),i.length>1&&i.sort(d||bf)}function u(){for(let h=t,d=s.length;h<d;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function vM(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ef,s.set(n,[o])):i>=r.length?(o=new Ef,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function xM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Kt};break;case"SpotLight":e={position:new U,direction:new U,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function yM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let SM=0;function MM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function TM(s,t){const e=new xM,n=yM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,o=new ge,a=new ge;function c(u,h){let d=0,m=0,g=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let _=0,f=0,p=0,x=0,v=0,M=0,S=0,b=0,T=0,A=0,N=0;u.sort(MM);const y=h===!0?Math.PI:1;for(let L=0,k=u.length;L<k;L++){const P=u[L],F=P.color,O=P.intensity,B=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=F.r*O*y,m+=F.g*O*y,g+=F.b*O*y;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],O);N++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){const q=P.shadow,j=n.get(P);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,i.directionalShadow[_]=j,i.directionalShadowMap[_]=z,i.directionalShadowMatrix[_]=P.shadow.matrix,M++}i.directional[_]=H,_++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(F).multiplyScalar(O*y),H.distance=B,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[p]=H;const q=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,q.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[p]=q.matrix,P.castShadow){const j=n.get(P);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,i.spotShadow[p]=j,i.spotShadowMap[p]=z,b++}p++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(F).multiplyScalar(O),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=H,x++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*y),H.distance=P.distance,H.decay=P.decay,P.castShadow){const q=P.shadow,j=n.get(P);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,i.pointShadow[f]=j,i.pointShadowMap[f]=z,i.pointShadowMatrix[f]=P.shadow.matrix,S++}i.point[f]=H,f++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(O*y),H.groundColor.copy(P.groundColor).multiplyScalar(O*y),i.hemi[v]=H,v++}}x>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const E=i.hash;(E.directionalLength!==_||E.pointLength!==f||E.spotLength!==p||E.rectAreaLength!==x||E.hemiLength!==v||E.numDirectionalShadows!==M||E.numPointShadows!==S||E.numSpotShadows!==b||E.numSpotMaps!==T||E.numLightProbes!==N)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=x,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=b+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=N,E.directionalLength=_,E.pointLength=f,E.spotLength=p,E.rectAreaLength=x,E.hemiLength=v,E.numDirectionalShadows=M,E.numPointShadows=S,E.numSpotShadows=b,E.numSpotMaps=T,E.numLightProbes=N,i.version=SM++)}function l(u,h){let d=0,m=0,g=0,_=0,f=0;const p=h.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const M=u[x];if(M.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(M.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),m++}else if(M.isHemisphereLight){const S=i.hemi[f];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),f++}}}return{setup:c,setupView:l,state:i}}function wf(s,t){const e=new TM(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function bM(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new wf(s,t),e.set(r,[c])):o>=a.length?(c=new wf(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class EM extends mo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wM extends mo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const AM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CM=`uniform sampler2D shadow_pass;
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
}`;function RM(s,t,e){let n=new Qu;const i=new Lt,r=new Lt,o=new Ie,a=new EM({depthPacking:u0}),c=new wM,l={},u=e.maxTextureSize,h={[xs]:Mn,[Mn]:xs,[fi]:fi},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:AM,fragmentShader:CM}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new bi;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new mn(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tp;let p=this.type;this.render=function(b,T,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const N=s.getRenderTarget(),y=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Hi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const k=p!==Oi&&this.type===Oi,P=p===Oi&&this.type!==Oi;for(let F=0,O=b.length;F<O;F++){const B=b[F],z=B.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const H=z.getFrameExtents();if(i.multiply(H),r.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/H.x),i.x=r.x*H.x,z.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/H.y),i.y=r.y*H.y,z.mapSize.y=r.y)),z.map===null||k===!0||P===!0){const j=this.type!==Oi?{minFilter:Ze,magFilter:Ze}:{};z.map!==null&&z.map.dispose(),z.map=new ys(i.x,i.y,j),z.map.texture.name=B.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const q=z.getViewportCount();for(let j=0;j<q;j++){const Q=z.getViewport(j);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),L.viewport(o),z.updateMatrices(B,j),n=z.getFrustum(),M(T,A,z.camera,B,this.type)}z.isPointLightShadow!==!0&&this.type===Oi&&x(z,A),z.needsUpdate=!1}p=this.type,f.needsUpdate=!1,s.setRenderTarget(N,y,E)};function x(b,T){const A=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ys(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(T,null,A,d,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(T,null,A,m,_,null)}function v(b,T,A,N){let y=null;const E=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)y=E;else if(y=A.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const L=y.uuid,k=T.uuid;let P=l[L];P===void 0&&(P={},l[L]=P);let F=P[k];F===void 0&&(F=y.clone(),P[k]=F,T.addEventListener("dispose",S)),y=F}if(y.visible=T.visible,y.wireframe=T.wireframe,N===Oi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const L=s.properties.get(y);L.light=A}return y}function M(b,T,A,N,y){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Oi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const k=t.update(b),P=b.material;if(Array.isArray(P)){const F=k.groups;for(let O=0,B=F.length;O<B;O++){const z=F[O],H=P[z.materialIndex];if(H&&H.visible){const q=v(b,H,N,y);b.onBeforeShadow(s,b,T,A,k,q,z),s.renderBufferDirect(A,null,k,q,b,z),b.onAfterShadow(s,b,T,A,k,q,z)}}}else if(P.visible){const F=v(b,P,N,y);b.onBeforeShadow(s,b,T,A,k,F,null),s.renderBufferDirect(A,null,k,F,b,null),b.onAfterShadow(s,b,T,A,k,F,null)}}const L=b.children;for(let k=0,P=L.length;k<P;k++)M(L[k],T,A,N,y)}function S(b){b.target.removeEventListener("dispose",S);for(const A in l){const N=l[A],y=b.target.uuid;y in N&&(N[y].dispose(),delete N[y])}}}function PM(s,t,e){const n=e.isWebGL2;function i(){let D=!1;const lt=new Ie;let ot=null;const bt=new Ie(0,0,0,0);return{setMask:function(Rt){ot!==Rt&&!D&&(s.colorMask(Rt,Rt,Rt,Rt),ot=Rt)},setLocked:function(Rt){D=Rt},setClear:function(Rt,te,$t,re,je){je===!0&&(Rt*=re,te*=re,$t*=re),lt.set(Rt,te,$t,re),bt.equals(lt)===!1&&(s.clearColor(Rt,te,$t,re),bt.copy(lt))},reset:function(){D=!1,ot=null,bt.set(-1,0,0,0)}}}function r(){let D=!1,lt=null,ot=null,bt=null;return{setTest:function(Rt){Rt?mt(s.DEPTH_TEST):Ot(s.DEPTH_TEST)},setMask:function(Rt){lt!==Rt&&!D&&(s.depthMask(Rt),lt=Rt)},setFunc:function(Rt){if(ot!==Rt){switch(Rt){case Vg:s.depthFunc(s.NEVER);break;case zg:s.depthFunc(s.ALWAYS);break;case Gg:s.depthFunc(s.LESS);break;case fc:s.depthFunc(s.LEQUAL);break;case Hg:s.depthFunc(s.EQUAL);break;case Wg:s.depthFunc(s.GEQUAL);break;case Xg:s.depthFunc(s.GREATER);break;case qg:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ot=Rt}},setLocked:function(Rt){D=Rt},setClear:function(Rt){bt!==Rt&&(s.clearDepth(Rt),bt=Rt)},reset:function(){D=!1,lt=null,ot=null,bt=null}}}function o(){let D=!1,lt=null,ot=null,bt=null,Rt=null,te=null,$t=null,re=null,je=null;return{setTest:function(ee){D||(ee?mt(s.STENCIL_TEST):Ot(s.STENCIL_TEST))},setMask:function(ee){lt!==ee&&!D&&(s.stencilMask(ee),lt=ee)},setFunc:function(ee,Ee,ln){(ot!==ee||bt!==Ee||Rt!==ln)&&(s.stencilFunc(ee,Ee,ln),ot=ee,bt=Ee,Rt=ln)},setOp:function(ee,Ee,ln){(te!==ee||$t!==Ee||re!==ln)&&(s.stencilOp(ee,Ee,ln),te=ee,$t=Ee,re=ln)},setLocked:function(ee){D=ee},setClear:function(ee){je!==ee&&(s.clearStencil(ee),je=ee)},reset:function(){D=!1,lt=null,ot=null,bt=null,Rt=null,te=null,$t=null,re=null,je=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,_=[],f=null,p=!1,x=null,v=null,M=null,S=null,b=null,T=null,A=null,N=new Kt(0,0,0),y=0,E=!1,L=null,k=null,P=null,F=null,O=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=H>=1):q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=H>=2);let j=null,Q={};const xt=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),Y=new Ie().fromArray(xt),ct=new Ie().fromArray(X);function _t(D,lt,ot,bt){const Rt=new Uint8Array(4),te=s.createTexture();s.bindTexture(D,te),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $t=0;$t<ot;$t++)n&&(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)?s.texImage3D(lt,0,s.RGBA,1,1,bt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(lt+$t,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return te}const et={};et[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(et[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),mt(s.DEPTH_TEST),c.setFunc(fc),gt(!1),C(sd),mt(s.CULL_FACE),tt(Hi);function mt(D){d[D]!==!0&&(s.enable(D),d[D]=!0)}function Ot(D){d[D]!==!1&&(s.disable(D),d[D]=!1)}function wt(D,lt){return m[D]!==lt?(s.bindFramebuffer(D,lt),m[D]=lt,n&&(D===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=lt),D===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=lt)),!0):!1}function V(D,lt){let ot=_,bt=!1;if(D)if(ot=g.get(lt),ot===void 0&&(ot=[],g.set(lt,ot)),D.isWebGLMultipleRenderTargets){const Rt=D.texture;if(ot.length!==Rt.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let te=0,$t=Rt.length;te<$t;te++)ot[te]=s.COLOR_ATTACHMENT0+te;ot.length=Rt.length,bt=!0}}else ot[0]!==s.COLOR_ATTACHMENT0&&(ot[0]=s.COLOR_ATTACHMENT0,bt=!0);else ot[0]!==s.BACK&&(ot[0]=s.BACK,bt=!0);bt&&(e.isWebGL2?s.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function ue(D){return f!==D?(s.useProgram(D),f=D,!0):!1}const Tt={[cs]:s.FUNC_ADD,[Eg]:s.FUNC_SUBTRACT,[wg]:s.FUNC_REVERSE_SUBTRACT};if(n)Tt[cd]=s.MIN,Tt[ld]=s.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(Tt[cd]=D.MIN_EXT,Tt[ld]=D.MAX_EXT)}const J={[Ag]:s.ZERO,[Cg]:s.ONE,[Rg]:s.SRC_COLOR,[hc]:s.SRC_ALPHA,[Og]:s.SRC_ALPHA_SATURATE,[Ng]:s.DST_COLOR,[Dg]:s.DST_ALPHA,[Pg]:s.ONE_MINUS_SRC_COLOR,[dc]:s.ONE_MINUS_SRC_ALPHA,[Ig]:s.ONE_MINUS_DST_COLOR,[Lg]:s.ONE_MINUS_DST_ALPHA,[Fg]:s.CONSTANT_COLOR,[Ug]:s.ONE_MINUS_CONSTANT_COLOR,[kg]:s.CONSTANT_ALPHA,[Bg]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(D,lt,ot,bt,Rt,te,$t,re,je,ee){if(D===Hi){p===!0&&(Ot(s.BLEND),p=!1);return}if(p===!1&&(mt(s.BLEND),p=!0),D!==bp){if(D!==x||ee!==E){if((v!==cs||b!==cs)&&(s.blendEquation(s.FUNC_ADD),v=cs,b=cs),ee)switch(D){case Xr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rd:s.blendFunc(s.ONE,s.ONE);break;case od:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ad:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Xr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rd:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case od:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ad:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,S=null,T=null,A=null,N.set(0,0,0),y=0,x=D,E=ee}return}Rt=Rt||lt,te=te||ot,$t=$t||bt,(lt!==v||Rt!==b)&&(s.blendEquationSeparate(Tt[lt],Tt[Rt]),v=lt,b=Rt),(ot!==M||bt!==S||te!==T||$t!==A)&&(s.blendFuncSeparate(J[ot],J[bt],J[te],J[$t]),M=ot,S=bt,T=te,A=$t),(re.equals(N)===!1||je!==y)&&(s.blendColor(re.r,re.g,re.b,je),N.copy(re),y=je),x=D,E=!1}function Dt(D,lt){D.side===fi?Ot(s.CULL_FACE):mt(s.CULL_FACE);let ot=D.side===Mn;lt&&(ot=!ot),gt(ot),D.blending===Xr&&D.transparent===!1?tt(Hi):tt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);const bt=D.stencilWrite;l.setTest(bt),bt&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),G(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?mt(s.SAMPLE_ALPHA_TO_COVERAGE):Ot(s.SAMPLE_ALPHA_TO_COVERAGE)}function gt(D){L!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),L=D)}function C(D){D!==Mg?(mt(s.CULL_FACE),D!==k&&(D===sd?s.cullFace(s.BACK):D===Tg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ot(s.CULL_FACE),k=D}function w(D){D!==P&&(z&&s.lineWidth(D),P=D)}function G(D,lt,ot){D?(mt(s.POLYGON_OFFSET_FILL),(F!==lt||O!==ot)&&(s.polygonOffset(lt,ot),F=lt,O=ot)):Ot(s.POLYGON_OFFSET_FILL)}function it(D){D?mt(s.SCISSOR_TEST):Ot(s.SCISSOR_TEST)}function nt(D){D===void 0&&(D=s.TEXTURE0+B-1),j!==D&&(s.activeTexture(D),j=D)}function rt(D,lt,ot){ot===void 0&&(j===null?ot=s.TEXTURE0+B-1:ot=j);let bt=Q[ot];bt===void 0&&(bt={type:void 0,texture:void 0},Q[ot]=bt),(bt.type!==D||bt.texture!==lt)&&(j!==ot&&(s.activeTexture(ot),j=ot),s.bindTexture(D,lt||et[D]),bt.type=D,bt.texture=lt)}function St(){const D=Q[j];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ht(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(D){Y.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Y.copy(D))}function I(D){ct.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),ct.copy(D))}function ut(D,lt){let ot=h.get(lt);ot===void 0&&(ot=new WeakMap,h.set(lt,ot));let bt=ot.get(D);bt===void 0&&(bt=s.getUniformBlockIndex(lt,D.name),ot.set(D,bt))}function pt(D,lt){const bt=h.get(lt).get(D);u.get(lt)!==bt&&(s.uniformBlockBinding(lt,bt,D.__bindingPointIndex),u.set(lt,bt))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},j=null,Q={},m={},g=new WeakMap,_=[],f=null,p=!1,x=null,v=null,M=null,S=null,b=null,T=null,A=null,N=new Kt(0,0,0),y=0,E=!1,L=null,k=null,P=null,F=null,O=null,Y.set(0,0,s.canvas.width,s.canvas.height),ct.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:mt,disable:Ot,bindFramebuffer:wt,drawBuffers:V,useProgram:ue,setBlending:tt,setMaterial:Dt,setFlipSided:gt,setCullFace:C,setLineWidth:w,setPolygonOffset:G,setScissorTest:it,activeTexture:nt,bindTexture:rt,unbindTexture:St,compressedTexImage2D:ht,compressedTexImage3D:vt,texImage2D:Mt,texImage3D:at,updateUBOMapping:ut,uniformBlockBinding:pt,texStorage2D:Ft,texStorage3D:Pt,texSubImage2D:Et,texSubImage3D:Nt,compressedTexSubImage2D:st,compressedTexSubImage3D:Yt,scissor:Vt,viewport:I,reset:Ct}}function DM(s,t,e,n,i,r,o){const a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return m?new OffscreenCanvas(C,w):xc("canvas")}function _(C,w,G,it){let nt=1;if((C.width>it||C.height>it)&&(nt=it/Math.max(C.width,C.height)),nt<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const rt=w?vc:Math.floor,St=rt(nt*C.width),ht=rt(nt*C.height);h===void 0&&(h=g(St,ht));const vt=G?g(St,ht):h;return vt.width=St,vt.height=ht,vt.getContext("2d").drawImage(C,0,0,St,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+St+"x"+ht+")."),vt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function f(C){return pu(C.width)&&pu(C.height)}function p(C){return a?!1:C.wrapS!==ii||C.wrapT!==ii||C.minFilter!==Ze&&C.minFilter!==yn}function x(C,w){return C.generateMipmaps&&w&&C.minFilter!==Ze&&C.minFilter!==yn}function v(C){s.generateMipmap(C)}function M(C,w,G,it,nt=!1){if(a===!1)return w;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt=w;if(w===s.RED&&(G===s.FLOAT&&(rt=s.R32F),G===s.HALF_FLOAT&&(rt=s.R16F),G===s.UNSIGNED_BYTE&&(rt=s.R8)),w===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(rt=s.R8UI),G===s.UNSIGNED_SHORT&&(rt=s.R16UI),G===s.UNSIGNED_INT&&(rt=s.R32UI),G===s.BYTE&&(rt=s.R8I),G===s.SHORT&&(rt=s.R16I),G===s.INT&&(rt=s.R32I)),w===s.RG&&(G===s.FLOAT&&(rt=s.RG32F),G===s.HALF_FLOAT&&(rt=s.RG16F),G===s.UNSIGNED_BYTE&&(rt=s.RG8)),w===s.RGBA){const St=nt?pc:ie.getTransfer(it);G===s.FLOAT&&(rt=s.RGBA32F),G===s.HALF_FLOAT&&(rt=s.RGBA16F),G===s.UNSIGNED_BYTE&&(rt=St===he?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(rt=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(rt=s.RGB5_A1)}return(rt===s.R16F||rt===s.R32F||rt===s.RG16F||rt===s.RG32F||rt===s.RGBA16F||rt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function S(C,w,G){return x(C,G)===!0||C.isFramebufferTexture&&C.minFilter!==Ze&&C.minFilter!==yn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function b(C){return C===Ze||C===ud||C===bo?s.NEAREST:s.LINEAR}function T(C){const w=C.target;w.removeEventListener("dispose",T),N(w),w.isVideoTexture&&u.delete(w)}function A(C){const w=C.target;w.removeEventListener("dispose",A),E(w)}function N(C){const w=n.get(C);if(w.__webglInit===void 0)return;const G=C.source,it=d.get(G);if(it){const nt=it[w.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&y(C),Object.keys(it).length===0&&d.delete(G)}n.remove(C)}function y(C){const w=n.get(C);s.deleteTexture(w.__webglTexture);const G=C.source,it=d.get(G);delete it[w.__cacheKey],o.memory.textures--}function E(C){const w=C.texture,G=n.get(C),it=n.get(w);if(it.__webglTexture!==void 0&&(s.deleteTexture(it.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(G.__webglFramebuffer[nt]))for(let rt=0;rt<G.__webglFramebuffer[nt].length;rt++)s.deleteFramebuffer(G.__webglFramebuffer[nt][rt]);else s.deleteFramebuffer(G.__webglFramebuffer[nt]);G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[nt])}else{if(Array.isArray(G.__webglFramebuffer))for(let nt=0;nt<G.__webglFramebuffer.length;nt++)s.deleteFramebuffer(G.__webglFramebuffer[nt]);else s.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let nt=0;nt<G.__webglColorRenderbuffer.length;nt++)G.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[nt]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let nt=0,rt=w.length;nt<rt;nt++){const St=n.get(w[nt]);St.__webglTexture&&(s.deleteTexture(St.__webglTexture),o.memory.textures--),n.remove(w[nt])}n.remove(w),n.remove(C)}let L=0;function k(){L=0}function P(){const C=L;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function F(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function O(C,w){const G=n.get(C);if(C.isVideoTexture&&Dt(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const it=C.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,C,w);return}}e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+w)}function B(C,w){const G=n.get(C);if(C.version>0&&G.__version!==C.version){Y(G,C,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+w)}function z(C,w){const G=n.get(C);if(C.version>0&&G.__version!==C.version){Y(G,C,w);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+w)}function H(C,w){const G=n.get(C);if(C.version>0&&G.__version!==C.version){ct(G,C,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+w)}const q={[hu]:s.REPEAT,[ii]:s.CLAMP_TO_EDGE,[du]:s.MIRRORED_REPEAT},j={[Ze]:s.NEAREST,[ud]:s.NEAREST_MIPMAP_NEAREST,[bo]:s.NEAREST_MIPMAP_LINEAR,[yn]:s.LINEAR,[yl]:s.LINEAR_MIPMAP_NEAREST,[Gs]:s.LINEAR_MIPMAP_LINEAR},Q={[d0]:s.NEVER,[v0]:s.ALWAYS,[f0]:s.LESS,[Op]:s.LEQUAL,[p0]:s.EQUAL,[g0]:s.GEQUAL,[m0]:s.GREATER,[_0]:s.NOTEQUAL};function xt(C,w,G){if(w.type===Vi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===yn||w.magFilter===yl||w.magFilter===bo||w.magFilter===Gs||w.minFilter===yn||w.minFilter===yl||w.minFilter===bo||w.minFilter===Gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),G?(s.texParameteri(C,s.TEXTURE_WRAP_S,q[w.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,q[w.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,q[w.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,j[w.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,j[w.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==ii||w.wrapT!==ii)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,b(w.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,b(w.minFilter)),w.minFilter!==Ze&&w.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ze||w.minFilter!==bo&&w.minFilter!==Gs||w.type===Vi&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===to&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(C,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function X(C,w){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",T));const it=w.source;let nt=d.get(it);nt===void 0&&(nt={},d.set(it,nt));const rt=F(w);if(rt!==C.__cacheKey){nt[rt]===void 0&&(nt[rt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),nt[rt].usedTimes++;const St=nt[C.__cacheKey];St!==void 0&&(nt[C.__cacheKey].usedTimes--,St.usedTimes===0&&y(w)),C.__cacheKey=rt,C.__webglTexture=nt[rt].texture}return G}function Y(C,w,G){let it=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(it=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(it=s.TEXTURE_3D);const nt=X(C,w),rt=w.source;e.bindTexture(it,C.__webglTexture,s.TEXTURE0+G);const St=n.get(rt);if(rt.version!==St.__version||nt===!0){e.activeTexture(s.TEXTURE0+G);const ht=ie.getPrimaries(ie.workingColorSpace),vt=w.colorSpace===Wn?null:ie.getPrimaries(w.colorSpace),Et=w.colorSpace===Wn||ht===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Nt=p(w)&&f(w.image)===!1;let st=_(w.image,Nt,!1,i.maxTextureSize);st=gt(w,st);const Yt=f(st)||a,Ft=r.convert(w.format,w.colorSpace);let Pt=r.convert(w.type),Mt=M(w.internalFormat,Ft,Pt,w.colorSpace,w.isVideoTexture);xt(it,w,Yt);let at;const Vt=w.mipmaps,I=a&&w.isVideoTexture!==!0&&Mt!==Np,ut=St.__version===void 0||nt===!0,pt=rt.dataReady,Ct=S(w,st,Yt);if(w.isDepthTexture)Mt=s.DEPTH_COMPONENT,a?w.type===Vi?Mt=s.DEPTH_COMPONENT32F:w.type===ls?Mt=s.DEPTH_COMPONENT24:w.type===Xs?Mt=s.DEPTH24_STENCIL8:Mt=s.DEPTH_COMPONENT16:w.type===Vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===qs&&Mt===s.DEPTH_COMPONENT&&w.type!==Yu&&w.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ls,Pt=r.convert(w.type)),w.format===eo&&Mt===s.DEPTH_COMPONENT&&(Mt=s.DEPTH_STENCIL,w.type!==Xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Xs,Pt=r.convert(w.type))),ut&&(I?e.texStorage2D(s.TEXTURE_2D,1,Mt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Mt,st.width,st.height,0,Ft,Pt,null));else if(w.isDataTexture)if(Vt.length>0&&Yt){I&&ut&&e.texStorage2D(s.TEXTURE_2D,Ct,Mt,Vt[0].width,Vt[0].height);for(let D=0,lt=Vt.length;D<lt;D++)at=Vt[D],I?pt&&e.texSubImage2D(s.TEXTURE_2D,D,0,0,at.width,at.height,Ft,Pt,at.data):e.texImage2D(s.TEXTURE_2D,D,Mt,at.width,at.height,0,Ft,Pt,at.data);w.generateMipmaps=!1}else I?(ut&&e.texStorage2D(s.TEXTURE_2D,Ct,Mt,st.width,st.height),pt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,Ft,Pt,st.data)):e.texImage2D(s.TEXTURE_2D,0,Mt,st.width,st.height,0,Ft,Pt,st.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){I&&ut&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Mt,Vt[0].width,Vt[0].height,st.depth);for(let D=0,lt=Vt.length;D<lt;D++)at=Vt[D],w.format!==si?Ft!==null?I?pt&&e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,D,0,0,0,at.width,at.height,st.depth,Ft,at.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,D,Mt,at.width,at.height,st.depth,0,at.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?pt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,D,0,0,0,at.width,at.height,st.depth,Ft,Pt,at.data):e.texImage3D(s.TEXTURE_2D_ARRAY,D,Mt,at.width,at.height,st.depth,0,Ft,Pt,at.data)}else{I&&ut&&e.texStorage2D(s.TEXTURE_2D,Ct,Mt,Vt[0].width,Vt[0].height);for(let D=0,lt=Vt.length;D<lt;D++)at=Vt[D],w.format!==si?Ft!==null?I?pt&&e.compressedTexSubImage2D(s.TEXTURE_2D,D,0,0,at.width,at.height,Ft,at.data):e.compressedTexImage2D(s.TEXTURE_2D,D,Mt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?pt&&e.texSubImage2D(s.TEXTURE_2D,D,0,0,at.width,at.height,Ft,Pt,at.data):e.texImage2D(s.TEXTURE_2D,D,Mt,at.width,at.height,0,Ft,Pt,at.data)}else if(w.isDataArrayTexture)I?(ut&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Mt,st.width,st.height,st.depth),pt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Ft,Pt,st.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Mt,st.width,st.height,st.depth,0,Ft,Pt,st.data);else if(w.isData3DTexture)I?(ut&&e.texStorage3D(s.TEXTURE_3D,Ct,Mt,st.width,st.height,st.depth),pt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Ft,Pt,st.data)):e.texImage3D(s.TEXTURE_3D,0,Mt,st.width,st.height,st.depth,0,Ft,Pt,st.data);else if(w.isFramebufferTexture){if(ut)if(I)e.texStorage2D(s.TEXTURE_2D,Ct,Mt,st.width,st.height);else{let D=st.width,lt=st.height;for(let ot=0;ot<Ct;ot++)e.texImage2D(s.TEXTURE_2D,ot,Mt,D,lt,0,Ft,Pt,null),D>>=1,lt>>=1}}else if(Vt.length>0&&Yt){I&&ut&&e.texStorage2D(s.TEXTURE_2D,Ct,Mt,Vt[0].width,Vt[0].height);for(let D=0,lt=Vt.length;D<lt;D++)at=Vt[D],I?pt&&e.texSubImage2D(s.TEXTURE_2D,D,0,0,Ft,Pt,at):e.texImage2D(s.TEXTURE_2D,D,Mt,Ft,Pt,at);w.generateMipmaps=!1}else I?(ut&&e.texStorage2D(s.TEXTURE_2D,Ct,Mt,st.width,st.height),pt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ft,Pt,st)):e.texImage2D(s.TEXTURE_2D,0,Mt,Ft,Pt,st);x(w,Yt)&&v(it),St.__version=rt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ct(C,w,G){if(w.image.length!==6)return;const it=X(C,w),nt=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+G);const rt=n.get(nt);if(nt.version!==rt.__version||it===!0){e.activeTexture(s.TEXTURE0+G);const St=ie.getPrimaries(ie.workingColorSpace),ht=w.colorSpace===Wn?null:ie.getPrimaries(w.colorSpace),vt=w.colorSpace===Wn||St===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Et=w.isCompressedTexture||w.image[0].isCompressedTexture,Nt=w.image[0]&&w.image[0].isDataTexture,st=[];for(let D=0;D<6;D++)!Et&&!Nt?st[D]=_(w.image[D],!1,!0,i.maxCubemapSize):st[D]=Nt?w.image[D].image:w.image[D],st[D]=gt(w,st[D]);const Yt=st[0],Ft=f(Yt)||a,Pt=r.convert(w.format,w.colorSpace),Mt=r.convert(w.type),at=M(w.internalFormat,Pt,Mt,w.colorSpace),Vt=a&&w.isVideoTexture!==!0,I=rt.__version===void 0||it===!0,ut=nt.dataReady;let pt=S(w,Yt,Ft);xt(s.TEXTURE_CUBE_MAP,w,Ft);let Ct;if(Et){Vt&&I&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,at,Yt.width,Yt.height);for(let D=0;D<6;D++){Ct=st[D].mipmaps;for(let lt=0;lt<Ct.length;lt++){const ot=Ct[lt];w.format!==si?Pt!==null?Vt?ut&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,lt,0,0,ot.width,ot.height,Pt,ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,lt,at,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,lt,0,0,ot.width,ot.height,Pt,Mt,ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,lt,at,ot.width,ot.height,0,Pt,Mt,ot.data)}}}else{Ct=w.mipmaps,Vt&&I&&(Ct.length>0&&pt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,at,st[0].width,st[0].height));for(let D=0;D<6;D++)if(Nt){Vt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,st[D].width,st[D].height,Pt,Mt,st[D].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,at,st[D].width,st[D].height,0,Pt,Mt,st[D].data);for(let lt=0;lt<Ct.length;lt++){const bt=Ct[lt].image[D].image;Vt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,lt+1,0,0,bt.width,bt.height,Pt,Mt,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,lt+1,at,bt.width,bt.height,0,Pt,Mt,bt.data)}}else{Vt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Pt,Mt,st[D]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,at,Pt,Mt,st[D]);for(let lt=0;lt<Ct.length;lt++){const ot=Ct[lt];Vt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,lt+1,0,0,Pt,Mt,ot.image[D]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,lt+1,at,Pt,Mt,ot.image[D])}}}x(w,Ft)&&v(s.TEXTURE_CUBE_MAP),rt.__version=nt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function _t(C,w,G,it,nt,rt){const St=r.convert(G.format,G.colorSpace),ht=r.convert(G.type),vt=M(G.internalFormat,St,ht,G.colorSpace);if(!n.get(w).__hasExternalTextures){const Nt=Math.max(1,w.width>>rt),st=Math.max(1,w.height>>rt);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,rt,vt,Nt,st,w.depth,0,St,ht,null):e.texImage2D(nt,rt,vt,Nt,st,0,St,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),tt(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,nt,n.get(G).__webglTexture,0,J(w)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,it,nt,n.get(G).__webglTexture,rt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function et(C,w,G){if(s.bindRenderbuffer(s.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let it=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(G||tt(w)){const nt=w.depthTexture;nt&&nt.isDepthTexture&&(nt.type===Vi?it=s.DEPTH_COMPONENT32F:nt.type===ls&&(it=s.DEPTH_COMPONENT24));const rt=J(w);tt(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,it,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,it,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,it,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){const it=J(w);G&&tt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,it,s.DEPTH24_STENCIL8,w.width,w.height):tt(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const it=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let nt=0;nt<it.length;nt++){const rt=it[nt],St=r.convert(rt.format,rt.colorSpace),ht=r.convert(rt.type),vt=M(rt.internalFormat,St,ht,rt.colorSpace),Et=J(w);G&&tt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,vt,w.width,w.height):tt(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Et,vt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,vt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function mt(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);const it=n.get(w.depthTexture).__webglTexture,nt=J(w);if(w.depthTexture.format===qs)tt(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0);else if(w.depthTexture.format===eo)tt(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Ot(C){const w=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");mt(w.__webglFramebuffer,C)}else if(G){w.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[it]),w.__webglDepthbuffer[it]=s.createRenderbuffer(),et(w.__webglDepthbuffer[it],C,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),et(w.__webglDepthbuffer,C,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(C,w,G){const it=n.get(C);w!==void 0&&_t(it.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Ot(C)}function V(C){const w=C.texture,G=n.get(C),it=n.get(w);C.addEventListener("dispose",A),C.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=w.version,o.memory.textures++);const nt=C.isWebGLCubeRenderTarget===!0,rt=C.isWebGLMultipleRenderTargets===!0,St=f(C)||a;if(nt){G.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(a&&w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[ht]=[];for(let vt=0;vt<w.mipmaps.length;vt++)G.__webglFramebuffer[ht][vt]=s.createFramebuffer()}else G.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let ht=0;ht<w.mipmaps.length;ht++)G.__webglFramebuffer[ht]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(rt)if(i.drawBuffers){const ht=C.texture;for(let vt=0,Et=ht.length;vt<Et;vt++){const Nt=n.get(ht[vt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&tt(C)===!1){const ht=rt?w:[w];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let vt=0;vt<ht.length;vt++){const Et=ht[vt];G.__webglColorRenderbuffer[vt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[vt]);const Nt=r.convert(Et.format,Et.colorSpace),st=r.convert(Et.type),Yt=M(Et.internalFormat,Nt,st,Et.colorSpace,C.isXRRenderTarget===!0),Ft=J(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,Yt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,G.__webglColorRenderbuffer[vt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),et(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(nt){e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),xt(s.TEXTURE_CUBE_MAP,w,St);for(let ht=0;ht<6;ht++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let vt=0;vt<w.mipmaps.length;vt++)_t(G.__webglFramebuffer[ht][vt],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt);else _t(G.__webglFramebuffer[ht],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);x(w,St)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){const ht=C.texture;for(let vt=0,Et=ht.length;vt<Et;vt++){const Nt=ht[vt],st=n.get(Nt);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),xt(s.TEXTURE_2D,Nt,St),_t(G.__webglFramebuffer,C,Nt,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,0),x(Nt,St)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ht=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,it.__webglTexture),xt(ht,w,St),a&&w.mipmaps&&w.mipmaps.length>0)for(let vt=0;vt<w.mipmaps.length;vt++)_t(G.__webglFramebuffer[vt],C,w,s.COLOR_ATTACHMENT0,ht,vt);else _t(G.__webglFramebuffer,C,w,s.COLOR_ATTACHMENT0,ht,0);x(w,St)&&v(ht),e.unbindTexture()}C.depthBuffer&&Ot(C)}function ue(C){const w=f(C)||a,G=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let it=0,nt=G.length;it<nt;it++){const rt=G[it];if(x(rt,w)){const St=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ht=n.get(rt).__webglTexture;e.bindTexture(St,ht),v(St),e.unbindTexture()}}}function Tt(C){if(a&&C.samples>0&&tt(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],G=C.width,it=C.height;let nt=s.COLOR_BUFFER_BIT;const rt=[],St=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=n.get(C),vt=C.isWebGLMultipleRenderTargets===!0;if(vt)for(let Et=0;Et<w.length;Et++)e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Et=0;Et<w.length;Et++){rt.push(s.COLOR_ATTACHMENT0+Et),C.depthBuffer&&rt.push(St);const Nt=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Nt===!1&&(C.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),vt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ht.__webglColorRenderbuffer[Et]),Nt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[St]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[St])),vt){const st=n.get(w[Et]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,st,0)}s.blitFramebuffer(0,0,G,it,0,0,G,it,nt,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),vt)for(let Et=0;Et<w.length;Et++){e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,ht.__webglColorRenderbuffer[Et]);const Nt=n.get(w[Et]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function J(C){return Math.min(i.maxSamples,C.samples)}function tt(C){const w=n.get(C);return a&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Dt(C){const w=o.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function gt(C,w){const G=C.colorSpace,it=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===fu||G!==Xi&&G!==Wn&&(ie.getTransfer(G)===he?a===!1?t.has("EXT_sRGB")===!0&&it===si?(C.format=fu,C.minFilter=yn,C.generateMipmaps=!1):w=Up.sRGBToLinear(w):(it!==si||nt!==ms)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}this.allocateTextureUnit=P,this.resetTextureUnits=k,this.setTexture2D=O,this.setTexture2DArray=B,this.setTexture3D=z,this.setTextureCube=H,this.rebindTextures=wt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=tt}function LM(s,t,e){const n=e.isWebGL2;function i(r,o=Wn){let a;const c=ie.getTransfer(o);if(r===ms)return s.UNSIGNED_BYTE;if(r===Cp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Rp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===e0)return s.BYTE;if(r===n0)return s.SHORT;if(r===Yu)return s.UNSIGNED_SHORT;if(r===Ap)return s.INT;if(r===ls)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===to)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===i0)return s.ALPHA;if(r===si)return s.RGBA;if(r===s0)return s.LUMINANCE;if(r===r0)return s.LUMINANCE_ALPHA;if(r===qs)return s.DEPTH_COMPONENT;if(r===eo)return s.DEPTH_STENCIL;if(r===fu)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===o0)return s.RED;if(r===Pp)return s.RED_INTEGER;if(r===a0)return s.RG;if(r===Dp)return s.RG_INTEGER;if(r===Lp)return s.RGBA_INTEGER;if(r===Sl||r===Ml||r===Tl||r===bl)if(c===he)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Sl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ml)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Sl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ml)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hd||r===dd||r===fd||r===pd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===hd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===dd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Np)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===md||r===_d)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===md)return c===he?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===_d)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gd||r===vd||r===xd||r===yd||r===Sd||r===Md||r===Td||r===bd||r===Ed||r===wd||r===Ad||r===Cd||r===Rd||r===Pd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===gd)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vd)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xd)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yd)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sd)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Md)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Td)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bd)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ed)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wd)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ad)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cd)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rd)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Pd)return c===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===El||r===Dd||r===Ld)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===El)return c===he?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Dd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ld)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===c0||r===Nd||r===Id||r===Od)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===El)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Nd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Id)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Od)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xs?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class NM extends Hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $a extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IM={type:"move"};class jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $a,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $a,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $a,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),p=this._getHandJoint(l,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(IM)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $a;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const OM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FM=`
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

}`;class UM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new gn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new $n({extensions:{fragDepth:!0},vertexShader:OM,fragmentShader:FM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new mn(new Jc(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class kM extends ur{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null;const _=new UM,f=e.getContextAttributes();let p=null,x=null;const v=[],M=[],S=new Lt;let b=null;const T=new Hn;T.layers.enable(1),T.viewport=new Ie;const A=new Hn;A.layers.enable(2),A.viewport=new Ie;const N=[T,A],y=new NM;y.layers.enable(1),y.layers.enable(2);let E=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Y=v[X];return Y===void 0&&(Y=new jl,v[X]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(X){let Y=v[X];return Y===void 0&&(Y=new jl,v[X]=Y),Y.getGripSpace()},this.getHand=function(X){let Y=v[X];return Y===void 0&&(Y=new jl,v[X]=Y),Y.getHandSpace()};function k(X){const Y=M.indexOf(X.inputSource);if(Y===-1)return;const ct=v[Y];ct!==void 0&&(ct.update(X.inputSource,X.frame,l||o),ct.dispatchEvent({type:X.type,data:X.inputSource}))}function P(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",F);for(let X=0;X<v.length;X++){const Y=M[X];Y!==null&&(M[X]=null,v[X].disconnect(Y))}E=null,L=null,_.reset(),t.setRenderTarget(p),m=null,d=null,h=null,i=null,x=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",P),i.addEventListener("inputsourceschange",F),f.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,Y),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new ys(m.framebufferWidth,m.framebufferHeight,{format:si,type:ms,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let Y=null,ct=null,_t=null;f.depth&&(_t=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=f.stencil?eo:qs,ct=f.stencil?Xs:ls);const et={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(et),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new ys(d.textureWidth,d.textureHeight,{format:si,type:ms,depthTexture:new $p(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0});const mt=t.properties.get(x);mt.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),xt.setContext(i),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(X){for(let Y=0;Y<X.removed.length;Y++){const ct=X.removed[Y],_t=M.indexOf(ct);_t>=0&&(M[_t]=null,v[_t].disconnect(ct))}for(let Y=0;Y<X.added.length;Y++){const ct=X.added[Y];let _t=M.indexOf(ct);if(_t===-1){for(let mt=0;mt<v.length;mt++)if(mt>=M.length){M.push(ct),_t=mt;break}else if(M[mt]===null){M[mt]=ct,_t=mt;break}if(_t===-1)break}const et=v[_t];et&&et.connect(ct)}}const O=new U,B=new U;function z(X,Y,ct){O.setFromMatrixPosition(Y.matrixWorld),B.setFromMatrixPosition(ct.matrixWorld);const _t=O.distanceTo(B),et=Y.projectionMatrix.elements,mt=ct.projectionMatrix.elements,Ot=et[14]/(et[10]-1),wt=et[14]/(et[10]+1),V=(et[9]+1)/et[5],ue=(et[9]-1)/et[5],Tt=(et[8]-1)/et[0],J=(mt[8]+1)/mt[0],tt=Ot*Tt,Dt=Ot*J,gt=_t/(-Tt+J),C=gt*-Tt;Y.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(C),X.translateZ(gt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const w=Ot+gt,G=wt+gt,it=tt-C,nt=Dt+(_t-C),rt=V*wt/G*w,St=ue*wt/G*w;X.projectionMatrix.makePerspective(it,nt,rt,St,w,G),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function H(X,Y){Y===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Y.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;_.texture!==null&&(X.near=_.depthNear,X.far=_.depthFar),y.near=A.near=T.near=X.near,y.far=A.far=T.far=X.far,(E!==y.near||L!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,L=y.far,T.near=E,T.far=L,A.near=E,A.far=L,T.updateProjectionMatrix(),A.updateProjectionMatrix(),X.updateProjectionMatrix());const Y=X.parent,ct=y.cameras;H(y,Y);for(let _t=0;_t<ct.length;_t++)H(ct[_t],Y);ct.length===2?z(y,T,A):y.projectionMatrix.copy(T.projectionMatrix),q(X,y,Y)};function q(X,Y,ct){ct===null?X.matrix.copy(Y.matrixWorld):(X.matrix.copy(ct.matrixWorld),X.matrix.invert(),X.matrix.multiply(Y.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=zo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null};let j=null;function Q(X,Y){if(u=Y.getViewerPose(l||o),g=Y,u!==null){const ct=u.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let _t=!1;ct.length!==y.cameras.length&&(y.cameras.length=0,_t=!0);for(let mt=0;mt<ct.length;mt++){const Ot=ct[mt];let wt=null;if(m!==null)wt=m.getViewport(Ot);else{const ue=h.getViewSubImage(d,Ot);wt=ue.viewport,mt===0&&(t.setRenderTargetTextures(x,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(x))}let V=N[mt];V===void 0&&(V=new Hn,V.layers.enable(mt),V.viewport=new Ie,N[mt]=V),V.matrix.fromArray(Ot.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Ot.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(wt.x,wt.y,wt.width,wt.height),mt===0&&(y.matrix.copy(V.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_t===!0&&y.cameras.push(V)}const et=i.enabledFeatures;if(et&&et.includes("depth-sensing")){const mt=h.getDepthInformation(ct[0]);mt&&mt.isValid&&mt.texture&&_.init(t,mt,i.renderState)}}for(let ct=0;ct<v.length;ct++){const _t=M[ct],et=v[ct];_t!==null&&et!==void 0&&et.update(_t,Y,l||o)}_.render(t,y),j&&j(X,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const xt=new jp;xt.setAnimationLoop(Q),this.setAnimationLoop=function(X){j=X},this.dispose=function(){}}}function BM(s,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Wp(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,x,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),h(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,M)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),_(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?c(f,p,x,v):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Mn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Mn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(f.envMap.value=x,f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,x,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*x,f.scale.value=v*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,x){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const x=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function VM(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function l(x,v){let M=i[x.id];M===void 0&&(g(x),M=u(x),i[x.id]=M,x.addEventListener("dispose",f));const S=v.program;n.updateUBOMapping(x,S);const b=t.render.frame;r[x.id]!==b&&(d(x),r[x.id]=b)}function u(x){const v=h();x.__bindingPointIndex=v;const M=s.createBuffer(),S=x.__size,b=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,S,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],M=x.uniforms,S=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,T=M.length;b<T;b++){const A=Array.isArray(M[b])?M[b]:[M[b]];for(let N=0,y=A.length;N<y;N++){const E=A[N];if(m(E,b,N,S)===!0){const L=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let P=0;for(let F=0;F<k.length;F++){const O=k[F],B=_(O);typeof O=="number"||typeof O=="boolean"?(E.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,L+P,E.__data)):O.isMatrix3?(E.__data[0]=O.elements[0],E.__data[1]=O.elements[1],E.__data[2]=O.elements[2],E.__data[3]=0,E.__data[4]=O.elements[3],E.__data[5]=O.elements[4],E.__data[6]=O.elements[5],E.__data[7]=0,E.__data[8]=O.elements[6],E.__data[9]=O.elements[7],E.__data[10]=O.elements[8],E.__data[11]=0):(O.toArray(E.__data,P),P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(x,v,M,S){const b=x.value,T=v+"_"+M;if(S[T]===void 0)return typeof b=="number"||typeof b=="boolean"?S[T]=b:S[T]=b.clone(),!0;{const A=S[T];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return S[T]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function g(x){const v=x.uniforms;let M=0;const S=16;for(let T=0,A=v.length;T<A;T++){const N=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,E=N.length;y<E;y++){const L=N[y],k=Array.isArray(L.value)?L.value:[L.value];for(let P=0,F=k.length;P<F;P++){const O=k[P],B=_(O),z=M%S;z!==0&&S-z<B.boundary&&(M+=S-z),L.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=B.storage}}}const b=M%S;return b>0&&(M+=S-b),x.__size=M,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function f(x){const v=x.target;v.removeEventListener("dispose",f);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class em{constructor(t={}){const{canvas:e=I0(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this._useLegacyLights=!1,this.toneMapping=ps,this.toneMappingExposure=1;const v=this;let M=!1,S=0,b=0,T=null,A=-1,N=null;const y=new Ie,E=new Ie;let L=null;const k=new Kt(0);let P=0,F=e.width,O=e.height,B=1,z=null,H=null;const q=new Ie(0,0,F,O),j=new Ie(0,0,F,O);let Q=!1;const xt=new Qu;let X=!1,Y=!1,ct=null;const _t=new ge,et=new Lt,mt=new U,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function wt(){return T===null?B:1}let V=n;function ue(R,W){for(let Z=0;Z<R.length;Z++){const K=R[Z],$=e.getContext(K,W);if($!==null)return $}return null}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qu}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",lt,!1),V===null){const W=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&W.shift(),V=ue(W,R),V===null)throw ue(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Tt,J,tt,Dt,gt,C,w,G,it,nt,rt,St,ht,vt,Et,Nt,st,Yt,Ft,Pt,Mt,at,Vt,I;function ut(){Tt=new Yy(V),J=new zy(V,Tt,t),Tt.init(J),at=new LM(V,Tt,J),tt=new PM(V,Tt,J),Dt=new Zy(V),gt=new _M,C=new DM(V,Tt,tt,gt,J,at,Dt),w=new Hy(v),G=new qy(v),it=new sv(V,J),Vt=new By(V,Tt,it,J),nt=new jy(V,it,Dt,Vt),rt=new tS(V,nt,it,Dt),Ft=new Qy(V,J,C),Nt=new Gy(gt),St=new mM(v,w,G,Tt,J,Vt,Nt),ht=new BM(v,gt),vt=new vM,Et=new bM(Tt,J),Yt=new ky(v,w,G,tt,rt,d,c),st=new RM(v,rt,J),I=new VM(V,Dt,J,tt),Pt=new Vy(V,Tt,Dt,J),Mt=new $y(V,Tt,Dt,J),Dt.programs=St.programs,v.capabilities=J,v.extensions=Tt,v.properties=gt,v.renderLists=vt,v.shadowMap=st,v.state=tt,v.info=Dt}ut();const pt=new kM(v,V);this.xr=pt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Tt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Tt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(F,O,!1))},this.getSize=function(R){return R.set(F,O)},this.setSize=function(R,W,Z=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,O=W,e.width=Math.floor(R*B),e.height=Math.floor(W*B),Z===!0&&(e.style.width=R+"px",e.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(F*B,O*B).floor()},this.setDrawingBufferSize=function(R,W,Z){F=R,O=W,B=Z,e.width=Math.floor(R*Z),e.height=Math.floor(W*Z),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(y)},this.getViewport=function(R){return R.copy(q)},this.setViewport=function(R,W,Z,K){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,W,Z,K),tt.viewport(y.copy(q).multiplyScalar(B).floor())},this.getScissor=function(R){return R.copy(j)},this.setScissor=function(R,W,Z,K){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,W,Z,K),tt.scissor(E.copy(j).multiplyScalar(B).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(R){tt.setScissorTest(Q=R)},this.setOpaqueSort=function(R){z=R},this.setTransparentSort=function(R){H=R},this.getClearColor=function(R){return R.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(R=!0,W=!0,Z=!0){let K=0;if(R){let $=!1;if(T!==null){const yt=T.texture.format;$=yt===Lp||yt===Dp||yt===Pp}if($){const yt=T.texture.type,At=yt===ms||yt===ls||yt===Yu||yt===Xs||yt===Cp||yt===Rp,It=Yt.getClearColor(),Ut=Yt.getClearAlpha(),Ht=It.r,Bt=It.g,zt=It.b;At?(m[0]=Ht,m[1]=Bt,m[2]=zt,m[3]=Ut,V.clearBufferuiv(V.COLOR,0,m)):(g[0]=Ht,g[1]=Bt,g[2]=zt,g[3]=Ut,V.clearBufferiv(V.COLOR,0,g))}else K|=V.COLOR_BUFFER_BIT}W&&(K|=V.DEPTH_BUFFER_BIT),Z&&(K|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),vt.dispose(),Et.dispose(),gt.dispose(),w.dispose(),G.dispose(),rt.dispose(),Vt.dispose(),I.dispose(),St.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",je),pt.removeEventListener("sessionend",ee),ct&&(ct.dispose(),ct=null),Ee.stop()};function Ct(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=Dt.autoReset,W=st.enabled,Z=st.autoUpdate,K=st.needsUpdate,$=st.type;ut(),Dt.autoReset=R,st.enabled=W,st.autoUpdate=Z,st.needsUpdate=K,st.type=$}function lt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ot(R){const W=R.target;W.removeEventListener("dispose",ot),bt(W)}function bt(R){Rt(R),gt.remove(R)}function Rt(R){const W=gt.get(R).programs;W!==void 0&&(W.forEach(function(Z){St.releaseProgram(Z)}),R.isShaderMaterial&&St.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,Z,K,$,yt){W===null&&(W=Ot);const At=$.isMesh&&$.matrixWorld.determinant()<0,It=mg(R,W,Z,K,$);tt.setMaterial(K,At);let Ut=Z.index,Ht=1;if(K.wireframe===!0){if(Ut=nt.getWireframeAttribute(Z),Ut===void 0)return;Ht=2}const Bt=Z.drawRange,zt=Z.attributes.position;let we=Bt.start*Ht,Rn=(Bt.start+Bt.count)*Ht;yt!==null&&(we=Math.max(we,yt.start*Ht),Rn=Math.min(Rn,(yt.start+yt.count)*Ht)),Ut!==null?(we=Math.max(we,0),Rn=Math.min(Rn,Ut.count)):zt!=null&&(we=Math.max(we,0),Rn=Math.min(Rn,zt.count));const Ve=Rn-we;if(Ve<0||Ve===1/0)return;Vt.setup($,K,It,Z,Ut);let Ri,ve=Pt;if(Ut!==null&&(Ri=it.get(Ut),ve=Mt,ve.setIndex(Ri)),$.isMesh)K.wireframe===!0?(tt.setLineWidth(K.wireframeLinewidth*wt()),ve.setMode(V.LINES)):ve.setMode(V.TRIANGLES);else if($.isLine){let qt=K.linewidth;qt===void 0&&(qt=1),tt.setLineWidth(qt*wt()),$.isLineSegments?ve.setMode(V.LINES):$.isLineLoop?ve.setMode(V.LINE_LOOP):ve.setMode(V.LINE_STRIP)}else $.isPoints?ve.setMode(V.POINTS):$.isSprite&&ve.setMode(V.TRIANGLES);if($.isBatchedMesh)ve.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)ve.renderInstances(we,Ve,$.count);else if(Z.isInstancedBufferGeometry){const qt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,_l=Math.min(Z.instanceCount,qt);ve.renderInstances(we,Ve,_l)}else ve.render(we,Ve)};function te(R,W,Z){R.transparent===!0&&R.side===fi&&R.forceSinglePass===!1?(R.side=Mn,R.needsUpdate=!0,Aa(R,W,Z),R.side=xs,R.needsUpdate=!0,Aa(R,W,Z),R.side=fi):Aa(R,W,Z)}this.compile=function(R,W,Z=null){Z===null&&(Z=R),f=Et.get(Z),f.init(),x.push(f),Z.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),R!==Z&&R.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),f.setupLights(v._useLegacyLights);const K=new Set;return R.traverse(function($){const yt=$.material;if(yt)if(Array.isArray(yt))for(let At=0;At<yt.length;At++){const It=yt[At];te(It,Z,$),K.add(It)}else te(yt,Z,$),K.add(yt)}),x.pop(),f=null,K},this.compileAsync=function(R,W,Z=null){const K=this.compile(R,W,Z);return new Promise($=>{function yt(){if(K.forEach(function(At){gt.get(At).currentProgram.isReady()&&K.delete(At)}),K.size===0){$(R);return}setTimeout(yt,10)}Tt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let $t=null;function re(R){$t&&$t(R)}function je(){Ee.stop()}function ee(){Ee.start()}const Ee=new jp;Ee.setAnimationLoop(re),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(R){$t=R,pt.setAnimationLoop(R),R===null?Ee.stop():Ee.start()},pt.addEventListener("sessionstart",je),pt.addEventListener("sessionend",ee),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(W),W=pt.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,W,T),f=Et.get(R,x.length),f.init(),x.push(f),_t.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),xt.setFromProjectionMatrix(_t),Y=this.localClippingEnabled,X=Nt.init(this.clippingPlanes,Y),_=vt.get(R,p.length),_.init(),p.push(_),ln(R,W,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(z,H),this.info.render.frame++,X===!0&&Nt.beginShadows();const Z=f.state.shadowsArray;if(st.render(Z,R,W),X===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1)&&Yt.render(_,R),f.setupLights(v._useLegacyLights),W.isArrayCamera){const K=W.cameras;for(let $=0,yt=K.length;$<yt;$++){const At=K[$];Jh(_,R,At,At.viewport)}}else Jh(_,R,W);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(v,R,W),Vt.resetDefaultState(),A=-1,N=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ln(R,W,Z,K){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||xt.intersectsSprite(R)){K&&mt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(_t);const At=rt.update(R),It=R.material;It.visible&&_.push(R,At,It,Z,mt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||xt.intersectsObject(R))){const At=rt.update(R),It=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),mt.copy(R.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),mt.copy(At.boundingSphere.center)),mt.applyMatrix4(R.matrixWorld).applyMatrix4(_t)),Array.isArray(It)){const Ut=At.groups;for(let Ht=0,Bt=Ut.length;Ht<Bt;Ht++){const zt=Ut[Ht],we=It[zt.materialIndex];we&&we.visible&&_.push(R,At,we,Z,mt.z,zt)}}else It.visible&&_.push(R,At,It,Z,mt.z,null)}}const yt=R.children;for(let At=0,It=yt.length;At<It;At++)ln(yt[At],W,Z,K)}function Jh(R,W,Z,K){const $=R.opaque,yt=R.transmissive,At=R.transparent;f.setupLightsView(Z),X===!0&&Nt.setGlobalState(v.clippingPlanes,Z),yt.length>0&&pg($,yt,W,Z),K&&tt.viewport(y.copy(K)),$.length>0&&wa($,W,Z),yt.length>0&&wa(yt,W,Z),At.length>0&&wa(At,W,Z),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function pg(R,W,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const yt=J.isWebGL2;ct===null&&(ct=new ys(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")?to:ms,minFilter:Gs,samples:yt?4:0})),v.getDrawingBufferSize(et),yt?ct.setSize(et.x,et.y):ct.setSize(vc(et.x),vc(et.y));const At=v.getRenderTarget();v.setRenderTarget(ct),v.getClearColor(k),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const It=v.toneMapping;v.toneMapping=ps,wa(R,Z,K),C.updateMultisampleRenderTarget(ct),C.updateRenderTargetMipmap(ct);let Ut=!1;for(let Ht=0,Bt=W.length;Ht<Bt;Ht++){const zt=W[Ht],we=zt.object,Rn=zt.geometry,Ve=zt.material,Ri=zt.group;if(Ve.side===fi&&we.layers.test(K.layers)){const ve=Ve.side;Ve.side=Mn,Ve.needsUpdate=!0,Qh(we,Z,K,Rn,Ve,Ri),Ve.side=ve,Ve.needsUpdate=!0,Ut=!0}}Ut===!0&&(C.updateMultisampleRenderTarget(ct),C.updateRenderTargetMipmap(ct)),v.setRenderTarget(At),v.setClearColor(k,P),v.toneMapping=It}function wa(R,W,Z){const K=W.isScene===!0?W.overrideMaterial:null;for(let $=0,yt=R.length;$<yt;$++){const At=R[$],It=At.object,Ut=At.geometry,Ht=K===null?At.material:K,Bt=At.group;It.layers.test(Z.layers)&&Qh(It,W,Z,Ut,Ht,Bt)}}function Qh(R,W,Z,K,$,yt){R.onBeforeRender(v,W,Z,K,$,yt),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(v,W,Z,K,R,yt),$.transparent===!0&&$.side===fi&&$.forceSinglePass===!1?($.side=Mn,$.needsUpdate=!0,v.renderBufferDirect(Z,W,K,$,R,yt),$.side=xs,$.needsUpdate=!0,v.renderBufferDirect(Z,W,K,$,R,yt),$.side=fi):v.renderBufferDirect(Z,W,K,$,R,yt),R.onAfterRender(v,W,Z,K,$,yt)}function Aa(R,W,Z){W.isScene!==!0&&(W=Ot);const K=gt.get(R),$=f.state.lights,yt=f.state.shadowsArray,At=$.state.version,It=St.getParameters(R,$.state,yt,W,Z),Ut=St.getProgramCacheKey(It);let Ht=K.programs;K.environment=R.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(R.isMeshStandardMaterial?G:w).get(R.envMap||K.environment),Ht===void 0&&(R.addEventListener("dispose",ot),Ht=new Map,K.programs=Ht);let Bt=Ht.get(Ut);if(Bt!==void 0){if(K.currentProgram===Bt&&K.lightsStateVersion===At)return ed(R,It),Bt}else It.uniforms=St.getUniforms(R),R.onBuild(Z,It,v),R.onBeforeCompile(It,v),Bt=St.acquireProgram(It,Ut),Ht.set(Ut,Bt),K.uniforms=It.uniforms;const zt=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(zt.clippingPlanes=Nt.uniform),ed(R,It),K.needsLights=gg(R),K.lightsStateVersion=At,K.needsLights&&(zt.ambientLightColor.value=$.state.ambient,zt.lightProbe.value=$.state.probe,zt.directionalLights.value=$.state.directional,zt.directionalLightShadows.value=$.state.directionalShadow,zt.spotLights.value=$.state.spot,zt.spotLightShadows.value=$.state.spotShadow,zt.rectAreaLights.value=$.state.rectArea,zt.ltc_1.value=$.state.rectAreaLTC1,zt.ltc_2.value=$.state.rectAreaLTC2,zt.pointLights.value=$.state.point,zt.pointLightShadows.value=$.state.pointShadow,zt.hemisphereLights.value=$.state.hemi,zt.directionalShadowMap.value=$.state.directionalShadowMap,zt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,zt.spotShadowMap.value=$.state.spotShadowMap,zt.spotLightMatrix.value=$.state.spotLightMatrix,zt.spotLightMap.value=$.state.spotLightMap,zt.pointShadowMap.value=$.state.pointShadowMap,zt.pointShadowMatrix.value=$.state.pointShadowMatrix),K.currentProgram=Bt,K.uniformsList=null,Bt}function td(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=rc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function ed(R,W){const Z=gt.get(R);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function mg(R,W,Z,K,$){W.isScene!==!0&&(W=Ot),C.resetTextureUnits();const yt=W.fog,At=K.isMeshStandardMaterial?W.environment:null,It=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Xi,Ut=(K.isMeshStandardMaterial?G:w).get(K.envMap||At),Ht=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Bt=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),zt=!!Z.morphAttributes.position,we=!!Z.morphAttributes.normal,Rn=!!Z.morphAttributes.color;let Ve=ps;K.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ve=v.toneMapping);const Ri=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ve=Ri!==void 0?Ri.length:0,qt=gt.get(K),_l=f.state.lights;if(X===!0&&(Y===!0||R!==N)){const Vn=R===N&&K.id===A;Nt.setState(K,R,Vn)}let Se=!1;K.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==_l.state.version||qt.outputColorSpace!==It||$.isBatchedMesh&&qt.batching===!1||!$.isBatchedMesh&&qt.batching===!0||$.isInstancedMesh&&qt.instancing===!1||!$.isInstancedMesh&&qt.instancing===!0||$.isSkinnedMesh&&qt.skinning===!1||!$.isSkinnedMesh&&qt.skinning===!0||$.isInstancedMesh&&qt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&qt.instancingColor===!1&&$.instanceColor!==null||qt.envMap!==Ut||K.fog===!0&&qt.fog!==yt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Nt.numPlanes||qt.numIntersection!==Nt.numIntersection)||qt.vertexAlphas!==Ht||qt.vertexTangents!==Bt||qt.morphTargets!==zt||qt.morphNormals!==we||qt.morphColors!==Rn||qt.toneMapping!==Ve||J.isWebGL2===!0&&qt.morphTargetsCount!==ve)&&(Se=!0):(Se=!0,qt.__version=K.version);let Cs=qt.currentProgram;Se===!0&&(Cs=Aa(K,W,$));let nd=!1,To=!1,gl=!1;const tn=Cs.getUniforms(),Rs=qt.uniforms;if(tt.useProgram(Cs.program)&&(nd=!0,To=!0,gl=!0),K.id!==A&&(A=K.id,To=!0),nd||N!==R){tn.setValue(V,"projectionMatrix",R.projectionMatrix),tn.setValue(V,"viewMatrix",R.matrixWorldInverse);const Vn=tn.map.cameraPosition;Vn!==void 0&&Vn.setValue(V,mt.setFromMatrixPosition(R.matrixWorld)),J.logarithmicDepthBuffer&&tn.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&tn.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),N!==R&&(N=R,To=!0,gl=!0)}if($.isSkinnedMesh){tn.setOptional(V,$,"bindMatrix"),tn.setOptional(V,$,"bindMatrixInverse");const Vn=$.skeleton;Vn&&(J.floatVertexTextures?(Vn.boneTexture===null&&Vn.computeBoneTexture(),tn.setValue(V,"boneTexture",Vn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(tn.setOptional(V,$,"batchingTexture"),tn.setValue(V,"batchingTexture",$._matricesTexture,C));const vl=Z.morphAttributes;if((vl.position!==void 0||vl.normal!==void 0||vl.color!==void 0&&J.isWebGL2===!0)&&Ft.update($,Z,Cs),(To||qt.receiveShadow!==$.receiveShadow)&&(qt.receiveShadow=$.receiveShadow,tn.setValue(V,"receiveShadow",$.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Rs.envMap.value=Ut,Rs.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),To&&(tn.setValue(V,"toneMappingExposure",v.toneMappingExposure),qt.needsLights&&_g(Rs,gl),yt&&K.fog===!0&&ht.refreshFogUniforms(Rs,yt),ht.refreshMaterialUniforms(Rs,K,B,O,ct),rc.upload(V,td(qt),Rs,C)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(rc.upload(V,td(qt),Rs,C),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&tn.setValue(V,"center",$.center),tn.setValue(V,"modelViewMatrix",$.modelViewMatrix),tn.setValue(V,"normalMatrix",$.normalMatrix),tn.setValue(V,"modelMatrix",$.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Vn=K.uniformsGroups;for(let xl=0,vg=Vn.length;xl<vg;xl++)if(J.isWebGL2){const id=Vn[xl];I.update(id,Cs),I.bind(id,Cs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cs}function _g(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function gg(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,W,Z){gt.get(R.texture).__webglTexture=W,gt.get(R.depthTexture).__webglTexture=Z;const K=gt.get(R);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,W){const Z=gt.get(R);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,Z=0){T=R,S=W,b=Z;let K=!0,$=null,yt=!1,At=!1;if(R){const Ut=gt.get(R);Ut.__useDefaultFramebuffer!==void 0?(tt.bindFramebuffer(V.FRAMEBUFFER,null),K=!1):Ut.__webglFramebuffer===void 0?C.setupRenderTarget(R):Ut.__hasExternalTextures&&C.rebindTextures(R,gt.get(R.texture).__webglTexture,gt.get(R.depthTexture).__webglTexture);const Ht=R.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(At=!0);const Bt=gt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Bt[W])?$=Bt[W][Z]:$=Bt[W],yt=!0):J.isWebGL2&&R.samples>0&&C.useMultisampledRTT(R)===!1?$=gt.get(R).__webglMultisampledFramebuffer:Array.isArray(Bt)?$=Bt[Z]:$=Bt,y.copy(R.viewport),E.copy(R.scissor),L=R.scissorTest}else y.copy(q).multiplyScalar(B).floor(),E.copy(j).multiplyScalar(B).floor(),L=Q;if(tt.bindFramebuffer(V.FRAMEBUFFER,$)&&J.drawBuffers&&K&&tt.drawBuffers(R,$),tt.viewport(y),tt.scissor(E),tt.setScissorTest(L),yt){const Ut=gt.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut.__webglTexture,Z)}else if(At){const Ut=gt.get(R.texture),Ht=W||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ut.__webglTexture,Z||0,Ht)}A=-1},this.readRenderTargetPixels=function(R,W,Z,K,$,yt,At){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){tt.bindFramebuffer(V.FRAMEBUFFER,It);try{const Ut=R.texture,Ht=Ut.format,Bt=Ut.type;if(Ht!==si&&at.convert(Ht)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=Bt===to&&(Tt.has("EXT_color_buffer_half_float")||J.isWebGL2&&Tt.has("EXT_color_buffer_float"));if(Bt!==ms&&at.convert(Bt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===Vi&&(J.isWebGL2||Tt.has("OES_texture_float")||Tt.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-K&&Z>=0&&Z<=R.height-$&&V.readPixels(W,Z,K,$,at.convert(Ht),at.convert(Bt),yt)}finally{const Ut=T!==null?gt.get(T).__webglFramebuffer:null;tt.bindFramebuffer(V.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(R,W,Z=0){const K=Math.pow(2,-Z),$=Math.floor(W.image.width*K),yt=Math.floor(W.image.height*K);C.setTexture2D(W,0),V.copyTexSubImage2D(V.TEXTURE_2D,Z,0,0,R.x,R.y,$,yt),tt.unbindTexture()},this.copyTextureToTexture=function(R,W,Z,K=0){const $=W.image.width,yt=W.image.height,At=at.convert(Z.format),It=at.convert(Z.type);C.setTexture2D(Z,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment),W.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,K,R.x,R.y,$,yt,At,It,W.image.data):W.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,K,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,At,W.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,K,R.x,R.y,At,It,W.image),K===0&&Z.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),tt.unbindTexture()},this.copyTextureToTexture3D=function(R,W,Z,K,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=R.max.x-R.min.x+1,At=R.max.y-R.min.y+1,It=R.max.z-R.min.z+1,Ut=at.convert(K.format),Ht=at.convert(K.type);let Bt;if(K.isData3DTexture)C.setTexture3D(K,0),Bt=V.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)C.setTexture2DArray(K,0),Bt=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const zt=V.getParameter(V.UNPACK_ROW_LENGTH),we=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Rn=V.getParameter(V.UNPACK_SKIP_PIXELS),Ve=V.getParameter(V.UNPACK_SKIP_ROWS),Ri=V.getParameter(V.UNPACK_SKIP_IMAGES),ve=Z.isCompressedTexture?Z.mipmaps[$]:Z.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,ve.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ve.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,R.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,R.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,R.min.z),Z.isDataTexture||Z.isData3DTexture?V.texSubImage3D(Bt,$,W.x,W.y,W.z,yt,At,It,Ut,Ht,ve.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Bt,$,W.x,W.y,W.z,yt,At,It,Ut,ve.data)):V.texSubImage3D(Bt,$,W.x,W.y,W.z,yt,At,It,Ut,Ht,ve),V.pixelStorei(V.UNPACK_ROW_LENGTH,zt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,we),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Rn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ve),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ri),$===0&&K.generateMipmaps&&V.generateMipmap(Bt),tt.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),tt.unbindTexture()},this.resetState=function(){S=0,b=0,T=null,tt.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===$u?"display-p3":"srgb",e.unpackColorSpace=ie.workingColorSpace===Zc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ke?Ys:Ip}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ys?Ke:Xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class zM extends em{}zM.prototype.isWebGL1Renderer=!0;class GM extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class HM extends gn{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Ze,u=Ze,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _u extends Je{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Or=new ge,Af=new ge,Za=[],Cf=new hr,WM=new ge,Ro=new mn,Po=new da;class XM extends mn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _u(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,WM)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Or),Cf.copy(t.boundingBox).applyMatrix4(Or),this.boundingBox.union(Cf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new da),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Or),Po.copy(t.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(Po)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ro.geometry=this.geometry,Ro.material=this.material,Ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Po.copy(this.boundingSphere),Po.applyMatrix4(n),t.ray.intersectsSphere(Po)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Or),Af.multiplyMatrices(n,Or),Ro.matrixWorld=Af,Ro.raycast(t,Za);for(let o=0,a=Za.length;o<a;o++){const c=Za[o];c.instanceId=r,c.object=this,e.push(c)}Za.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _u(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class pa extends bi{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new U,d=new U,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let M=0;p===0&&o===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let S=0;S<=e;S++){const b=S/e;h.x=-t*Math.cos(i+b*r)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(i+b*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),f.push(b+M,1-v),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const v=u[p][x+1],M=u[p][x],S=u[p+1][x],b=u[p+1][x+1];(p!==0||o>0)&&m.push(v,M,b),(p!==n-1||c<Math.PI)&&m.push(M,S,b)}this.setIndex(m),this.setAttribute("position",new Yn(g,3)),this.setAttribute("normal",new Yn(_,3)),this.setAttribute("uv",new Yn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qM extends $n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class YM extends mo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ju,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jM extends mo{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Kt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ju,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class nh extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class $M extends nh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $l=new ge,Rf=new U,Pf=new U;class ZM{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qu,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Rf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rf),Pf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pf),e.updateMatrixWorld(),$l.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($l),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($l)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class KM extends ZM{constructor(){super(new th(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class JM extends nh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new KM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class QM extends nh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}let tT=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Df(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Df();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Df(){return(typeof performance>"u"?Date:performance).now()}class eT{constructor(t,e,n=0,i=1/0){this.ray=new Ku(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ju,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return gu(t,this,n,e),n.sort(Lf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)gu(t[i],this,n,e);return n.sort(Lf),n}}function Lf(s,t){return s.distance-t.distance}function gu(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)gu(i[r],t,e,!0)}}class Nf{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(sn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qu);function Fi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function nm(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},io={duration:.5,overwrite:!1,delay:0},ih,on,_e,Xn=1e8,ce=1/Xn,vu=Math.PI*2,nT=vu/4,iT=0,im=Math.sqrt,sT=Math.cos,rT=Math.sin,Ye=function(t){return typeof t=="string"},Te=function(t){return typeof t=="function"},Yi=function(t){return typeof t=="number"},sh=function(t){return typeof t>"u"},xi=function(t){return typeof t=="object"},Tn=function(t){return t!==!1},rh=function(){return typeof window<"u"},Ka=function(t){return Te(t)||Ye(t)},sm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},an=Array.isArray,xu=/(?:-?\.?\d|\.)+/gi,rm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Gr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,om=/[+-]=-?[.\d]+/,am=/[^,'"\[\]\s]+/gi,oT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xe,hi,yu,oh,kn={},yc={},cm,lm=function(t){return(yc=nr(t,kn))&&An},ah=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Go=function(t,e){return!e&&console.warn(t)},um=function(t,e){return t&&(kn[t]=e)&&yc&&(yc[t]=e)||kn},Ho=function(){return 0},aT={suppressEvents:!0,isStart:!0,kill:!1},oc={suppressEvents:!0,kill:!1},cT={suppressEvents:!0},ch={},_s=[],Su={},hm,Ln={},Kl={},If=30,ac=[],lh="",uh=function(t){var e=t[0],n,i;if(xi(e)||Te(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ac.length;i--&&!ac[i].targetTest(e););n=ac[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Om(t[i],n)))||t.splice(i,1);return t},js=function(t){return t._gsap||uh(qn(t))[0]._gsap},dm=function(t,e,n){return(n=t[e])&&Te(n)?t[e]():sh(n)&&t.getAttribute&&t.getAttribute(e)||n},bn=function(t,e){return(t=t.split(",")).forEach(e)||t},Re=function(t){return Math.round(t*1e5)/1e5||0},He=function(t){return Math.round(t*1e7)/1e7||0},jr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},lT=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Sc=function(){var t=_s.length,e=_s.slice(0),n,i;for(Su={},_s.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},fm=function(t,e,n,i){_s.length&&!on&&Sc(),t.render(e,n,i||on&&e<0&&(t._initted||t._startAt)),_s.length&&!on&&Sc()},pm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(am).length<2?e:Ye(t)?t.trim():t},mm=function(t){return t},Zn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},uT=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},nr=function(t,e){for(var n in e)t[n]=e[n];return t},Of=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=xi(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Mc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Uo=function(t){var e=t.parent||xe,n=t.keyframes?uT(an(t.keyframes)):Zn;if(Tn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},hT=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},_m=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},tl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Ss=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},$s=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},dT=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Mu=function(t,e,n,i){return t._startAt&&(on?t._startAt.revert(oc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},fT=function s(t){return!t||t._ts&&s(t.parent)},Ff=function(t){return t._repeat?so(t._tTime,t=t.duration()+t._rDelay)*t:0},so=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Tc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},el=function(t){return t._end=He(t._start+(t._tDur/Math.abs(t._ts||t._rts||ce)||0))},nl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=He(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),el(t),n._dirty||$s(n,t)),t},gm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Tc(t.rawTime(),e),(!e._dur||ma(0,e.totalDuration(),n)-e._tTime>ce)&&e.render(n,!0)),$s(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ce}},mi=function(t,e,n,i){return e.parent&&Ss(e),e._start=He((Yi(n)?n:n||t!==xe?Gn(t,n,e):t._time)+e._delay),e._end=He(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),_m(t,e,"_first","_last",t._sort?"_start":0),Tu(e)||(t._recent=e),i||gm(t,e),t._ts<0&&nl(t,t._tTime),t},vm=function(t,e){return(kn.ScrollTrigger||ah("scrollTrigger",e))&&kn.ScrollTrigger.create(e,t)},xm=function(t,e,n,i,r){if(dh(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!on&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&hm!==Nn.frame)return _s.push(t),t._lazy=[r,i],1},pT=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Tu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},mT=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&pT(t)&&!(!t._initted&&Tu(t))||(t._ts<0||t._dp._ts<0)&&!Tu(t))?0:1,a=t._rDelay,c=0,l,u,h;if(a&&t._repeat&&(c=ma(0,t._tDur,e),u=so(c,a),t._yoyo&&u&1&&(o=1-o),u!==so(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||on||i||t._zTime===ce||!e&&t._zTime){if(!t._initted&&xm(t,e,i,n,c))return;for(h=t._zTime,t._zTime=e||(n?ce:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,l=t._pt;l;)l.r(o,l.d),l=l._next;e<0&&Mu(t,e,n,!0),t._onUpdate&&!n&&In(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&In(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Ss(t,1),!n&&!on&&(In(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},_T=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ro=function(t,e,n,i){var r=t._repeat,o=He(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:He(o*(r+1)+t._rDelay*r):o,a>0&&!i&&nl(t,t._tTime=t._tDur*a),t.parent&&el(t),n||$s(t.parent,t),t},Uf=function(t){return t instanceof pn?$s(t):ro(t,t._dur)},gT={_start:0,endTime:Ho,totalDuration:Ho},Gn=function s(t,e,n){var i=t.labels,r=t._recent||gT,o=t.duration()>=Xn?r.endTime(!1):t._dur,a,c,l;return Ye(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(an(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},ko=function(t,e,n){var i=Yi(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,c;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Tn(c.vars.inherit)&&c.parent;o.immediateRender=Tn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Ne(e[0],o,e[r+1])},Es=function(t,e){return t||t===0?e(t):e},ma=function(t,e,n){return n<t?t:n>e?e:n},rn=function(t,e){return!Ye(t)||!(e=oT.exec(t))?"":e[1]},vT=function(t,e,n){return Es(n,function(i){return ma(t,e,i)})},bu=[].slice,ym=function(t,e){return t&&xi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&xi(t[0]))&&!t.nodeType&&t!==hi},xT=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Ye(i)&&!e||ym(i,1)?(r=n).push.apply(r,qn(i)):n.push(i)})||n},qn=function(t,e,n){return _e&&!e&&_e.selector?_e.selector(t):Ye(t)&&!n&&(yu||!oo())?bu.call((e||oh).querySelectorAll(t),0):an(t)?xT(t,n):ym(t)?bu.call(t,0):t?[t]:[]},Eu=function(t){return t=qn(t)[0]||Go("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return qn(e,n.querySelectorAll?n:n===t?Go("Invalid scope")||oh.createElement("div"):t)}},Sm=function(t){return t.sort(function(){return .5-Math.random()})},Mm=function(t){if(Te(t))return t;var e=xi(t)?t:{each:t},n=Zs(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,u=i,h=i;return Ye(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(u=i[0],h=i[1]),function(d,m,g){var _=(g||e).length,f=o[_],p,x,v,M,S,b,T,A,N;if(!f){if(N=e.grid==="auto"?0:(e.grid||[1,Xn])[1],!N){for(T=-Xn;T<(T=g[N++].getBoundingClientRect().left)&&N<_;);N<_&&N--}for(f=o[_]=[],p=c?Math.min(N,_)*u-.5:i%N,x=N===Xn?0:c?_*h/N-.5:i/N|0,T=0,A=Xn,b=0;b<_;b++)v=b%N-p,M=x-(b/N|0),f[b]=S=l?Math.abs(l==="y"?M:v):im(v*v+M*M),S>T&&(T=S),S<A&&(A=S);i==="random"&&Sm(f),f.max=T-A,f.min=A,f.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(N>_?_-1:l?l==="y"?_/N:N:Math.max(N,_/N))||0)*(i==="edges"?-1:1),f.b=_<0?r-_:r,f.u=rn(e.amount||e.each)||0,n=n&&_<0?Lm(n):n}return _=(f[d]-f.min)/f.max||0,He(f.b+(n?n(_):_)*f.v)+f.u}},wu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=He(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Yi(n)?0:rn(n))}},Tm=function(t,e){var n=an(t),i,r;return!n&&xi(t)&&(i=n=t.radius||Xn,t.values?(t=qn(t.values),(r=!Yi(t[0]))&&(i*=i)):t=wu(t.increment)),Es(e,n?Te(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=Xn,u=0,h=t.length,d,m;h--;)r?(d=t[h].x-a,m=t[h].y-c,d=d*d+m*m):d=Math.abs(t[h]-a),d<l&&(l=d,u=h);return u=!i||l<=i?t[u]:o,r||u===o||Yi(o)?u:u+rn(o)}:wu(t))},bm=function(t,e,n,i){return Es(an(t)?!e:n===!0?!!(n=0):!i,function(){return an(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},yT=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},ST=function(t,e){return function(n){return t(parseFloat(n))+(e||rn(n))}},MT=function(t,e,n){return wm(t,e,0,1,n)},Em=function(t,e,n){return Es(n,function(i){return t[~~e(i)]})},TT=function s(t,e,n){var i=e-t;return an(t)?Em(t,s(0,t.length),e):Es(n,function(r){return(i+(r-t)%i)%i+t})},bT=function s(t,e,n){var i=e-t,r=i*2;return an(t)?Em(t,s(0,t.length-1),e):Es(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Wo=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?am:xu),n+=t.substr(e,i-e)+bm(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},wm=function(t,e,n,i,r){var o=e-t,a=i-n;return Es(r,function(c){return n+((c-t)/o*a||0)})},ET=function s(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var o=Ye(t),a={},c,l,u,h,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(an(t)&&!an(e)){for(u=[],h=t.length,d=h-2,l=1;l<h;l++)u.push(s(t[l-1],t[l]));h--,r=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=e}else i||(t=nr(an(t)?[]:{},t));if(!u){for(c in e)hh.call(a,t,c,"get",e[c]);r=function(g){return mh(g,a)||(o?t.p:t)}}}return Es(n,r)},kf=function(t,e,n){var i=t.labels,r=Xn,o,a,c;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},In=function(t,e,n){var i=t.vars,r=i[e],o=_e,a=t._ctx,c,l,u;if(r)return c=i[e+"Params"],l=i.callbackScope||t,n&&_s.length&&Sc(),a&&(_e=a),u=c?r.apply(l,c):r.call(l),_e=o,u},No=function(t){return Ss(t),t.scrollTrigger&&t.scrollTrigger.kill(!!on),t.progress()<1&&In(t,"onInterrupt"),t},Hr,Am=[],Cm=function(t){if(t)if(t=!t.name&&t.default||t,rh()||t.headless){var e=t.name,n=Te(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Ho,render:mh,add:hh,kill:zT,modifier:VT,rawVars:0},o={targetTest:0,get:0,getSetter:ph,aliases:{},register:0};if(oo(),t!==i){if(Ln[e])return;Zn(i,Zn(Mc(t,r),o)),nr(i.prototype,nr(r,Mc(t,o))),Ln[i.prop=e]=i,t.targetTest&&(ac.push(i),ch[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}um(e,i),t.register&&t.register(An,i,En)}else Am.push(t)},oe=255,Io={aqua:[0,oe,oe],lime:[0,oe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,oe],navy:[0,0,128],white:[oe,oe,oe],olive:[128,128,0],yellow:[oe,oe,0],orange:[oe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[oe,0,0],pink:[oe,192,203],cyan:[0,oe,oe],transparent:[oe,oe,oe,0]},Jl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*oe+.5|0},Rm=function(t,e,n){var i=t?Yi(t)?[t>>16,t>>8&oe,t&oe]:0:Io.black,r,o,a,c,l,u,h,d,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Io[t])i=Io[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&oe,i&oe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&oe,t&oe]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(xu),!e)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(l+1):u+l-u*l,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Jl(c+1/3,r,o),i[1]=Jl(c,r,o),i[2]=Jl(c-1/3,r,o);else if(~t.indexOf("="))return i=t.match(rm),n&&i.length<4&&(i[3]=1),i}else i=t.match(xu)||Io.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/oe,o=i[1]/oe,a=i[2]/oe,h=Math.max(r,o,a),d=Math.min(r,o,a),u=(h+d)/2,h===d?c=l=0:(m=h-d,l=u>.5?m/(2-h-d):m/(h+d),c=h===r?(o-a)/m+(o<a?6:0):h===o?(a-r)/m+2:(r-o)/m+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Pm=function(t){var e=[],n=[],i=-1;return t.split(gs).forEach(function(r){var o=r.match(Gr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Bf=function(t,e,n){var i="",r=(t+i).match(gs),o=e?"hsla(":"rgba(",a=0,c,l,u,h;if(!r)return t;if(r=r.map(function(d){return(d=Rm(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Pm(t),c=n.c,c.join(i)!==u.c.join(i)))for(l=t.replace(gs,"1").split(Gr),h=l.length-1;a<h;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=t.split(gs),h=l.length-1;a<h;a++)i+=l[a]+r[a];return i+l[h]},gs=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Io)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),wT=/hsl[a]?\(/,Dm=function(t){var e=t.join(" "),n;if(gs.lastIndex=0,gs.test(e))return n=wT.test(e),t[1]=Bf(t[1],n),t[0]=Bf(t[0],n,Pm(t[1])),!0},Xo,Nn=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,u,h,d,m,g=function _(f){var p=s()-i,x=f===!0,v,M,S,b;if((p>t||p<0)&&(n+=p-e),i+=p,S=i-n,v=S-o,(v>0||x)&&(b=++h.frame,d=S-h.time*1e3,h.time=S=S/1e3,o+=v+(v>=r?4:r-v),M=1),x||(c=l(_)),M)for(m=0;m<a.length;m++)a[m](S,d,b,f)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(f){return d/(1e3/(f||60))},wake:function(){cm&&(!yu&&rh()&&(hi=yu=window,oh=hi.document||{},kn.gsap=An,(hi.gsapVersions||(hi.gsapVersions=[])).push(An.version),lm(yc||hi.GreenSockGlobals||!hi.gsap&&hi||{}),Am.forEach(Cm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(f){return setTimeout(f,o-h.time*1e3+1|0)},Xo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Xo=0,l=Ho},lagSmoothing:function(f,p){t=f||1/0,e=Math.min(p||33,t)},fps:function(f){r=1e3/(f||240),o=h.time*1e3+r},add:function(f,p,x){var v=p?function(M,S,b,T){f(M,S,b,T),h.remove(v)}:f;return h.remove(f),a[x?"unshift":"push"](v),oo(),v},remove:function(f,p){~(p=a.indexOf(f))&&a.splice(p,1)&&m>=p&&m--},_listeners:a},h}(),oo=function(){return!Xo&&Nn.wake()},Jt={},AT=/^[\d.\-M][\d.\-,\s]/,CT=/["']/g,RT=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(CT,"").trim():+l,i=c.substr(a+1).trim();return e},PT=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},DT=function(t){var e=(t+"").split("("),n=Jt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[RT(e[1])]:PT(t).split(",").map(pm)):Jt._CE&&AT.test(t)?Jt._CE("",t):n},Lm=function(t){return function(e){return 1-t(1-e)}},Nm=function s(t,e){for(var n=t._first,i;n;)n instanceof pn?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Zs=function(t,e){return t&&(Te(t)?t:Jt[t]||DT(t))||e},dr=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return bn(t,function(a){Jt[a]=kn[a]=r,Jt[o=a.toLowerCase()]=n;for(var c in r)Jt[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Jt[a+"."+c]=r[c]}),r},Im=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ql=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/vu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*rT((u-o)*r)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:Im(a);return r=vu/r,c.config=function(l,u){return s(t,l,u)},c},tu=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Im(n);return i.config=function(r){return s(t,r)},i};bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;dr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Jt.Linear.easeNone=Jt.none=Jt.Linear.easeIn;dr("Elastic",Ql("in"),Ql("out"),Ql());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};dr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);dr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});dr("Circ",function(s){return-(im(1-s*s)-1)});dr("Sine",function(s){return s===1?1:-sT(s*nT)+1});dr("Back",tu("in"),tu("out"),tu());Jt.SteppedEase=Jt.steps=kn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-ce;return function(a){return((i*ma(0,o,a)|0)+r)*n}}};io.ease=Jt["quad.out"];bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return lh+=s+","+s+"Params,"});var Om=function(t,e){this.id=iT++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:dm,this.set=e?e.getSetter:ph},qo=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ro(this,+e.duration,1,1),this.data=e.data,_e&&(this._ctx=_e,_e.data.push(this)),Xo||Nn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ro(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(oo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(nl(this,n),!r._dp||r.parent||gm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ce||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),fm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ff(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ff(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?so(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ce?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Tc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ce?0:this._rts,this.totalTime(ma(-Math.abs(this._delay),this._tDur,r),i!==!1),el(this),dT(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(oo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ce&&(this._tTime-=ce)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mi(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Tc(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=cT);var i=on;return on=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),on=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Uf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Uf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Gn(this,n),Tn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Tn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ce:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ce,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ce)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=Te(n)?n:mm,a=function(){var l=i.then;i.then=null,Te(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),r(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){No(this)},s}();Zn(qo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ce,_prom:0,_ps:!1,_rts:1});var pn=function(s){nm(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Tn(n.sortChildren),xe&&mi(n.parent||xe,Fi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&vm(Fi(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return ko(0,arguments,this),this},e.from=function(i,r,o){return ko(1,arguments,this),this},e.fromTo=function(i,r,o,a){return ko(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Uo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ne(i,r,Gn(this,o),1),this},e.call=function(i,r,o){return mi(this,Ne.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,c,l,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new Ne(i,o,Gn(this,c)),this},e.staggerFrom=function(i,r,o,a,c,l,u){return o.runBackwards=1,Uo(o).immediateRender=Tn(o.immediateRender),this.staggerTo(i,r,o,a,c,l,u)},e.staggerFromTo=function(i,r,o,a,c,l,u,h){return a.startAt=o,Uo(a).immediateRender=Tn(a.immediateRender),this.staggerTo(i,r,a,c,l,u,h)},e.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:He(i),h=this._zTime<0!=i<0&&(this._initted||!l),d,m,g,_,f,p,x,v,M,S,b,T;if(this!==xe&&u>c&&i>=0&&(u=c),u!==this._tTime||o||h){if(a!==this._time&&l&&(u+=this._time-a,i+=this._time-a),d=u,M=this._start,v=this._ts,p=!v,h&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,f=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(f*100+i,r,o);if(d=He(u%f),u===c?(_=this._repeat,d=l):(_=~~(u/f),_&&_===u/f&&(d=l,_--),d>l&&(d=l)),S=so(this._tTime,f),!a&&this._tTime&&S!==_&&this._tTime-S*f-this._dur<=0&&(S=_),b&&_&1&&(d=l-d,T=1),_!==S&&!this._lock){var A=b&&S&1,N=A===(b&&_&1);if(_<S&&(A=!A),a=A?0:u%l?l:u,this._lock=1,this.render(a||(T?0:He(_*f)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&In(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,N&&(this._lock=2,a=A?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Nm(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=_T(this,He(a),He(d)),x&&(u-=d-(d=x._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!_&&(In(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||d>=m._start)&&m._ts&&x!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,r,o),d!==this._time||!this._ts&&!p){x=0,g&&(u+=this._zTime=-ce);break}}m=g}else{m=this._last;for(var y=i<0?i:d;m;){if(g=m._prev,(m._act||y<=m._end)&&m._ts&&x!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(y-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(y-m._start)*m._ts,r,o||on&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!p){x=0,g&&(u+=this._zTime=y?-ce:ce);break}}m=g}}if(x&&!r&&(this.pause(),x.render(d>=a?0:-ce)._zTime=d>=a?1:-1,this._ts))return this._start=M,el(this),this.render(i,r,o);this._onUpdate&&!r&&In(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Ss(this,1),!r&&!(i<0&&!a)&&(u||a||!c)&&(In(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Yi(r)||(r=Gn(this,r,i)),!(i instanceof qo)){if(an(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Ye(i))return this.addLabel(i,r);if(Te(i))i=Ne.delayedCall(0,i);else return this}return this!==i?mi(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Xn);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Ne?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return Ye(i)?this.removeLabel(i):Te(i)?this.killTweensOf(i):(tl(this,i),i===this._recent&&(this._recent=this._last),$s(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=He(Nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Gn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Ne.delayedCall(0,r||Ho,o);return a.data="isPause",this._hasPause=1,mi(this,a,Gn(this,i))},e.removePause=function(i){var r=this._first;for(i=Gn(this,i);r;)r._start===i&&r.data==="isPause"&&Ss(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)us!==a[c]&&a[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=qn(i),c=this._first,l=Yi(r),u;c;)c instanceof Ne?lT(c._targets,a)&&(l?(!us||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(u=c.getTweensOf(a,r)).length&&o.push.apply(o,u),c=c._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Gn(o,i),c=r,l=c.startAt,u=c.onStart,h=c.onStartParams,d=c.immediateRender,m,g=Ne.to(o,Zn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||ce,onStart:function(){if(o.pause(),!m){var f=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());g._dur!==f&&ro(g,f,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},r));return d?g.render(0):g},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,Zn({startAt:{time:Gn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),kf(this,Gn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),kf(this,Gn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ce)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return $s(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),$s(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,c=Xn,l,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,mi(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;ro(o,o===xe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(xe._ts&&(fm(xe,Tc(i,xe)),hm=Nn.frame),Nn.frame>=If){If+=Fn.autoSleep||120;var r=xe._first;if((!r||!r._ts)&&Fn.autoSleep&&Nn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Nn.sleep()}}},t}(qo);Zn(pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var LT=function(t,e,n,i,r,o,a){var c=new En(this._pt,t,e,0,1,zm,null,r),l=0,u=0,h,d,m,g,_,f,p,x;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Wo(i)),o&&(x=[n,i],o(x,t,e),n=x[0],i=x[1]),d=n.match(Zl)||[];h=Zl.exec(i);)g=h[0],_=i.substring(l,h.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==d[u++]&&(f=parseFloat(d[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:f,c:g.charAt(1)==="="?jr(f,g)-f:parseFloat(g)-f,m:m&&m<4?Math.round:0},l=Zl.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(om.test(i)||p)&&(c.e=0),this._pt=c,c},hh=function(t,e,n,i,r,o,a,c,l,u){Te(i)&&(i=i(r||0,t,o));var h=t[e],d=n!=="get"?n:Te(h)?l?t[e.indexOf("set")||!Te(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():h,m=Te(h)?l?UT:Bm:fh,g;if(Ye(i)&&(~i.indexOf("random(")&&(i=Wo(i)),i.charAt(1)==="="&&(g=jr(d,i)+(rn(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Au)return!isNaN(d*i)&&i!==""?(g=new En(this._pt,t,e,+d||0,i-(d||0),typeof h=="boolean"?BT:Vm,0,m),l&&(g.fp=l),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&ah(e,i),LT.call(this,t,e,d,i,m,c||Fn.stringFilter,l))},NT=function(t,e,n,i,r){if(Te(t)&&(t=Bo(t,r,e,n,i)),!xi(t)||t.style&&t.nodeType||an(t)||sm(t))return Ye(t)?Bo(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Bo(t[a],r,e,n,i);return o},Fm=function(t,e,n,i,r,o){var a,c,l,u;if(Ln[t]&&(a=new Ln[t]).init(r,a.rawVars?e[t]:NT(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new En(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Hr))for(l=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)l[a._props[u]]=c;return a},us,Au,dh=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,m=i.autoRevert,g=t._dur,_=t._startAt,f=t._targets,p=t.parent,x=p&&p.data==="nested"?p.vars.targets:f,v=t._overwrite==="auto"&&!ih,M=t.timeline,S,b,T,A,N,y,E,L,k,P,F,O,B;if(M&&(!d||!r)&&(r="none"),t._ease=Zs(r,io.ease),t._yEase=h?Lm(Zs(h===!0?r:h,io.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!M&&!!i.runBackwards,!M||d&&!i.stagger){if(L=f[0]?js(f[0]).harness:0,O=L&&i[L.prop],S=Mc(i,ch),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!m?_.render(-1,!0):_.revert(u&&g?oc:aT),_._lazy=0),o){if(Ss(t._startAt=Ne.set(f,Zn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Tn(c),startAt:null,delay:0,onUpdate:l&&function(){return In(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(on||!a&&!m)&&t._startAt.revert(oc),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),T=Zn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Tn(c),immediateRender:a,stagger:0,parent:p},S),O&&(T[L.prop]=O),Ss(t._startAt=Ne.set(f,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(on?t._startAt.revert(oc):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,ce,ce);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&Tn(c)||c&&!g,b=0;b<f.length;b++){if(N=f[b],E=N._gsap||uh(f)[b]._gsap,t._ptLookup[b]=P={},Su[E.id]&&_s.length&&Sc(),F=x===f?b:x.indexOf(N),L&&(k=new L).init(N,O||S,t,F,x)!==!1&&(t._pt=A=new En(t._pt,N,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(z){P[z]=A}),k.priority&&(y=1)),!L||O)for(T in S)Ln[T]&&(k=Fm(T,S,t,F,N,x))?k.priority&&(y=1):P[T]=A=hh.call(t,N,T,"get",S[T],F,x,0,i.stringFilter);t._op&&t._op[b]&&t.kill(N,t._op[b]),v&&t._pt&&(us=t,xe.killTweensOf(N,P,t.globalTime(e)),B=!t.parent,us=0),t._pt&&c&&(Su[E.id]=1)}y&&Gm(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!B,d&&e<=0&&M.render(Xn,!0,!0)},IT=function(t,e,n,i,r,o,a,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,d,m;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,m=t._targets.length;m--;){if(u=d[m][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Au=1,t.vars[e]="+=0",dh(t,a),Au=0,c?Go(e+" not eligible for reset"):1;l.push(u)}for(m=l.length;m--;)h=l[m],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Re(n)+rn(h.e)),h.b&&(h.b=u.s+rn(h.b))},OT=function(t,e){var n=t[0]?js(t[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return e;r=nr({},e);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},FT=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(an(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Bo=function(t,e,n,i,r){return Te(t)?t.call(e,n,i,r):Ye(t)&&~t.indexOf("random(")?Wo(t):t},Um=lh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",km={};bn(Um+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return km[s]=1});var Ne=function(s){nm(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Uo(i))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,d=c.stagger,m=c.overwrite,g=c.keyframes,_=c.defaults,f=c.scrollTrigger,p=c.yoyoEase,x=i.parent||xe,v=(an(n)||sm(n)?Yi(n[0]):"length"in i)?[n]:qn(n),M,S,b,T,A,N,y,E;if(a._targets=v.length?uh(v):Go("GSAP target "+n+" not found. https://gsap.com",!Fn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||d||Ka(l)||Ka(u)){if(i=a.vars,M=a.timeline=new pn({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:v}),M.kill(),M.parent=M._dp=Fi(a),M._start=0,d||Ka(l)||Ka(u)){if(T=v.length,y=d&&Mm(d),xi(d))for(A in d)~Um.indexOf(A)&&(E||(E={}),E[A]=d[A]);for(S=0;S<T;S++)b=Mc(i,km),b.stagger=0,p&&(b.yoyoEase=p),E&&nr(b,E),N=v[S],b.duration=+Bo(l,Fi(a),S,N,v),b.delay=(+Bo(u,Fi(a),S,N,v)||0)-a._delay,!d&&T===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),M.to(N,b,y?y(S,N,v):0),M._ease=Jt.none;M.duration()?l=u=0:a.timeline=0}else if(g){Uo(Zn(M.vars.defaults,{ease:"none"})),M._ease=Zs(g.ease||i.ease||"none");var L=0,k,P,F;if(an(g))g.forEach(function(O){return M.to(v,O,">")}),M.duration();else{b={};for(A in g)A==="ease"||A==="easeEach"||FT(A,g[A],b,g.easeEach);for(A in b)for(k=b[A].sort(function(O,B){return O.t-B.t}),L=0,S=0;S<k.length;S++)P=k[S],F={ease:P.e,duration:(P.t-(S?k[S-1].t:0))/100*l},F[A]=P.v,M.to(v,F,L),L+=F.duration;M.duration()<l&&M.to({},{duration:l-M.duration()})}}l||a.duration(l=M.duration())}else a.timeline=0;return m===!0&&!ih&&(us=Fi(a),xe.killTweensOf(v),us=0),mi(x,Fi(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!l&&!g&&a._start===He(x._time)&&Tn(h)&&fT(Fi(a))&&x.data!=="nested")&&(a._tTime=-ce,a.render(Math.max(0,-u)||0)),f&&vm(Fi(a),f),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-ce&&!u?c:i<ce?0:i,d,m,g,_,f,p,x,v,M;if(!l)mT(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,v=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,o);if(d=He(h%_),h===c?(g=this._repeat,d=l):(g=~~(h/_),g&&g===He(h/_)&&(d=l,g--),d>l&&(d=l)),p=this._yoyo&&g&1,p&&(M=this._yEase,d=l-d),f=so(this._tTime,_),d===a&&!o&&this._initted&&g===f)return this._tTime=h,this;g!==f&&(v&&this._yEase&&Nm(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(He(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(xm(this,u?i:d,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==f))return this;if(l!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(M||this._ease)(d/l),this._from&&(this.ratio=x=1-x),d&&!a&&!r&&!g&&(In(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(x,m.d),m=m._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Mu(this,i,r,o),In(this,"onUpdate")),this._repeat&&g!==f&&this.vars.onRepeat&&!r&&this.parent&&In(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Mu(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ss(this,1),!r&&!(u&&!a)&&(h||a||p)&&(In(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,c){Xo||Nn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||dh(this,l),u=this._ease(l/this._dur),IT(this,i,r,o,a,u,l,c)?this.resetTo(i,r,o,a,1):(nl(this,0),this.parent||_m(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?No(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,us&&us.vars.overwrite!==!0)._first||No(this),this.parent&&o!==this.timeline.totalDuration()&&ro(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?qn(i):a,l=this._ptLookup,u=this._pt,h,d,m,g,_,f,p;if((!r||r==="all")&&hT(a,c))return r==="all"&&(this._pt=0),No(this);for(h=this._op=this._op||[],r!=="all"&&(Ye(r)&&(_={},bn(r,function(x){return _[x]=1}),r=_),r=OT(a,r)),p=a.length;p--;)if(~c.indexOf(a[p])){d=l[p],r==="all"?(h[p]=r,g=d,m={}):(m=h[p]=h[p]||{},g=r);for(_ in g)f=d&&d[_],f&&((!("kill"in f.d)||f.d.kill(_)===!0)&&tl(this,f,"_pt"),delete d[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&u&&No(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return ko(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return ko(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return xe.killTweensOf(i,r,o)},t}(qo);Zn(Ne.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bn("staggerTo,staggerFrom,staggerFromTo",function(s){Ne[s]=function(){var t=new pn,e=bu.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var fh=function(t,e,n){return t[e]=n},Bm=function(t,e,n){return t[e](n)},UT=function(t,e,n,i){return t[e](i.fp,n)},kT=function(t,e,n){return t.setAttribute(e,n)},ph=function(t,e){return Te(t[e])?Bm:sh(t[e])&&t.setAttribute?kT:fh},Vm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},BT=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},zm=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},mh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},VT=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},zT=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?tl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},GT=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Gm=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},En=function(){function s(e,n,i,r,o,a,c,l,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Vm,this.d=c||this,this.set=l||fh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=GT,this.m=n,this.mt=r,this.tween=i},s}();bn(lh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return ch[s]=1});kn.TweenMax=kn.TweenLite=Ne;kn.TimelineLite=kn.TimelineMax=pn;xe=new pn({sortChildren:!1,defaults:io,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fn.stringFilter=Dm;var Ks=[],cc={},HT=[],Vf=0,WT=0,eu=function(t){return(cc[t]||HT).map(function(e){return e()})},Cu=function(){var t=Date.now(),e=[];t-Vf>2&&(eu("matchMediaInit"),Ks.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=hi.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&e.push(n))}),eu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Vf=t,eu("matchMedia"))},Hm=function(){function s(e,n){this.selector=n&&Eu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=WT++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Te(n)&&(r=i,i=n,n=Te);var o=this,a=function(){var l=_e,u=o.selector,h;return l&&l!==o&&l.data.push(o),r&&(o.selector=Eu(r)),_e=o,h=i.apply(o,arguments),Te(h)&&o._r.push(h),_e=l,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Te?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},t.ignore=function(n){var i=_e;_e=null,n(this),_e=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ne&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof pn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Ne)&&l.revert&&l.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ks.length;o--;)Ks[o].id===this.id&&Ks.splice(o,1)},t.revert=function(n){this.kill(n||{})},s}(),XT=function(){function s(e){this.contexts=[],this.scope=e,_e&&_e.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){xi(n)||(n={matches:n});var o=new Hm(0,r||this.scope),a=o.conditions={},c,l,u;_e&&!o.selector&&(o.selector=_e.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?u=1:(c=hi.matchMedia(n[l]),c&&(Ks.indexOf(o)<0&&Ks.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(Cu):c.addEventListener("change",Cu)));return u&&i(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),bc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Cm(i)})},timeline:function(t){return new pn(t)},getTweensOf:function(t,e){return xe.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ye(t)&&(t=qn(t)[0]);var r=js(t||{}).get,o=n?mm:pm;return n==="native"&&(n=""),t&&(e?o((Ln[e]&&Ln[e].get||r)(t,e,n,i)):function(a,c,l){return o((Ln[a]&&Ln[a].get||r)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=qn(t),t.length>1){var i=t.map(function(u){return An.quickSetter(u,e,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}t=t[0]||{};var o=Ln[e],a=js(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=o?function(u){var h=new o;Hr._pt=0,h.init(t,n?u+n:u,Hr,0,[t]),h.render(1,h),Hr._pt&&mh(1,Hr)}:a.set(t,c);return o?l:function(u){return l(t,c,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,r=An.to(t,nr((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(c,l,u){return r.resetTo(e,c,l,u)};return o.tween=r,o},isTweening:function(t){return xe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Zs(t.ease,io.ease)),Of(io,t||{})},config:function(t){return Of(Fn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Ln[a]&&!kn[a]&&Go(e+" effect requires "+a+" plugin.")}),Kl[e]=function(a,c,l){return n(qn(a),Zn(c||{},r),l)},o&&(pn.prototype[e]=function(a,c,l){return this.add(Kl[e](a,xi(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Jt[t]=Zs(e)},parseEase:function(t,e){return arguments.length?Zs(t,e):Jt},getById:function(t){return xe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new pn(t),i,r;for(n.smoothChildTiming=Tn(t.smoothChildTiming),xe.remove(n),n._dp=0,n._time=n._tTime=xe._time,i=xe._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ne&&i.vars.onComplete===i._targets[0]))&&mi(n,i,i._start-i._delay),i=r;return mi(xe,n,0),n},context:function(t,e){return t?new Hm(t,e):_e},matchMedia:function(t){return new XT(t)},matchMediaRefresh:function(){return Ks.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Cu()},addEventListener:function(t,e){var n=cc[t]||(cc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=cc[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:TT,wrapYoyo:bT,distribute:Mm,random:bm,snap:Tm,normalize:MT,getUnit:rn,clamp:vT,splitColor:Rm,toArray:qn,selector:Eu,mapRange:wm,pipe:yT,unitize:ST,interpolate:ET,shuffle:Sm},install:lm,effects:Kl,ticker:Nn,updateRoot:pn.updateRoot,plugins:Ln,globalTimeline:xe,core:{PropTween:En,globals:um,Tween:Ne,Timeline:pn,Animation:qo,getCache:js,_removeLinkedListItem:tl,reverting:function(){return on},context:function(t){return t&&_e&&(_e.data.push(t),t._ctx=_e),_e},suppressOverwrites:function(t){return ih=t}}};bn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return bc[s]=Ne[s]});Nn.add(pn.updateRoot);Hr=bc.to({},{duration:0});var qT=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},YT=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=qT(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},nu=function(t,e){return{name:t,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(Ye(r)&&(c={},bn(r,function(u){return c[u]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}YT(a,r)}}}},An=bc.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,c;this.tween=n;for(o in e)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)on?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},nu("roundProps",wu),nu("modifiers"),nu("snap",Tm))||bc;Ne.version=pn.version=An.version="3.12.5";cm=1;rh()&&oo();Jt.Power0;Jt.Power1;Jt.Power2;Jt.Power3;Jt.Power4;Jt.Linear;Jt.Quad;Jt.Cubic;Jt.Quart;Jt.Quint;Jt.Strong;Jt.Elastic;Jt.Back;Jt.SteppedEase;Jt.Bounce;Jt.Sine;Jt.Expo;Jt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zf,hs,$r,_h,Hs,Gf,gh,jT=function(){return typeof window<"u"},ji={},Us=180/Math.PI,Zr=Math.PI/180,Fr=Math.atan2,Hf=1e8,vh=/([A-Z])/g,$T=/(left|right|width|margin|padding|x)/i,ZT=/[\s,\(]\S/,_i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ru=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},KT=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},JT=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},QT=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Wm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Xm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},tb=function(t,e,n){return t.style[e]=n},eb=function(t,e,n){return t.style.setProperty(e,n)},nb=function(t,e,n){return t._gsap[e]=n},ib=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},sb=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},rb=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},ye="transform",wn=ye+"Origin",ob=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in ji&&r){if(this.tfm=this.tfm||{},t!=="transform")t=_i[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Bi(i,a)}):this.tfm[t]=o.x?o[t]:Bi(i,t),t===wn&&(this.tfm.zOrigin=o.zOrigin);else return _i.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(ye)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wn,e,"")),t=ye}(r||e)&&this.props.push(t,e,r[t])},qm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ab=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(vh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=gh(),(!r||!r.isStart)&&!n[ye]&&(qm(n),i.zOrigin&&n[wn]&&(n[wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ym=function(t,e){var n={target:t,props:[],revert:ab,save:ob};return t._gsap||An.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},jm,Pu=function(t,e){var n=hs.createElementNS?hs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):hs.createElement(t);return n&&n.style?n:hs.createElement(t)},gi=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(vh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,ao(e)||e,1)||""},Wf="O,Moz,ms,Ms,Webkit".split(","),ao=function(t,e,n){var i=e||Hs,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Wf[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Wf[o]:"")+t},Du=function(){jT()&&window.document&&(zf=window,hs=zf.document,$r=hs.documentElement,Hs=Pu("div")||{style:{}},Pu("div"),ye=ao(ye),wn=ye+"Origin",Hs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",jm=!!ao("perspective"),gh=An.core.reverting,_h=1)},iu=function s(t){var e=Pu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if($r.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),$r.removeChild(e),this.style.cssText=r,o},Xf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},$m=function(t){var e;try{e=t.getBBox()}catch{e=iu.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===iu||(e=iu.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Xf(t,["x","cx","x1"])||0,y:+Xf(t,["y","cy","y1"])||0,width:0,height:0}:e},Zm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&$m(t))},ir=function(t,e){if(e){var n=t.style,i;e in ji&&e!==wn&&(e=ye),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(vh,"-$1").toLowerCase())):n.removeAttribute(e)}},ds=function(t,e,n,i,r,o){var a=new En(t._pt,e,n,0,1,o?Xm:Wm);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},qf={deg:1,rad:1,turn:1},cb={grid:1,flex:1},Ms=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Hs.style,c=$T.test(e),l=t.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,d=i==="px",m=i==="%",g,_,f,p;if(i===o||!r||qf[i]||qf[o])return r;if(o!=="px"&&!d&&(r=s(t,e,n,"px")),p=t.getCTM&&Zm(t),(m||o==="%")&&(ji[e]||~e.indexOf("adius")))return g=p?t.getBBox()[c?"width":"height"]:t[u],Re(m?r/g*h:r/100*g);if(a[c?"width":"height"]=h+(d?o:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===hs||!_.appendChild)&&(_=hs.body),f=_._gsap,f&&m&&f.width&&c&&f.time===Nn.time&&!f.uncache)return Re(r/f.width*h);if(m&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=h+i,g=t[u],x?t.style[e]=x:ir(t,e)}else(m||o==="%")&&!cb[gi(_,"display")]&&(a.position=gi(t,"position")),_===t&&(a.position="static"),_.appendChild(Hs),g=Hs[u],_.removeChild(Hs),a.position="absolute";return c&&m&&(f=js(_),f.time=Nn.time,f.width=_[u]),Re(d?g*r/h:g&&r?h/g*r:0)},Bi=function(t,e,n,i){var r;return _h||Du(),e in _i&&e!=="transform"&&(e=_i[e],~e.indexOf(",")&&(e=e.split(",")[0])),ji[e]&&e!=="transform"?(r=jo(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:wc(gi(t,wn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ec[e]&&Ec[e](t,e,n)||gi(t,e)||dm(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ms(t,e,r,n)+n:r},lb=function(t,e,n,i){if(!n||n==="none"){var r=ao(e,t,1),o=r&&gi(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=gi(t,"borderTopColor"))}var a=new En(this._pt,t.style,e,0,1,zm),c=0,l=0,u,h,d,m,g,_,f,p,x,v,M,S;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=gi(t,e)||i,_?t.style[e]=_:ir(t,e)),u=[n,i],Dm(u),n=u[0],i=u[1],d=n.match(Gr)||[],S=i.match(Gr)||[],S.length){for(;h=Gr.exec(i);)f=h[0],x=i.substring(c,h.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),f!==(_=d[l++]||"")&&(m=parseFloat(_)||0,M=_.substr((m+"").length),f.charAt(1)==="="&&(f=jr(m,f)+M),p=parseFloat(f),v=f.substr((p+"").length),c=Gr.lastIndex-v.length,v||(v=v||Fn.units[e]||M,c===i.length&&(i+=v,a.e+=v)),M!==v&&(m=Ms(t,e,_,v)||0),a._pt={_next:a._pt,p:x||l===1?x:",",s:m,c:p-m,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?Xm:Wm;return om.test(i)&&(a.e=0),this._pt=a,a},Yf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ub=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Yf[n]||n,e[1]=Yf[i]||i,e.join(" ")},hb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],ji[a]&&(c=1,a=a==="transformOrigin"?wn:ye),ir(n,a);c&&(ir(n,ye),o&&(o.svg&&n.removeAttribute("transform"),jo(n,1),o.uncache=1,qm(i)))}},Ec={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new En(t._pt,e,n,0,0,hb);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Yo=[1,0,0,1,0,0],Km={},Jm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},jf=function(t){var e=gi(t,ye);return Jm(e)?Yo:e.substr(7).match(rm).map(Re)},xh=function(t,e){var n=t._gsap||js(t),i=t.style,r=jf(t),o,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Yo:r):(r===Yo&&!t.offsetParent&&t!==$r&&!n.svg&&(c=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(l=1,a=t.nextElementSibling,$r.appendChild(t)),r=jf(t),c?i.display=c:ir(t,"display"),l&&(a?o.insertBefore(t,a):o?o.appendChild(t):$r.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Lu=function(t,e,n,i,r,o){var a=t._gsap,c=r||xh(t,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,m=c[0],g=c[1],_=c[2],f=c[3],p=c[4],x=c[5],v=e.split(" "),M=parseFloat(v[0])||0,S=parseFloat(v[1])||0,b,T,A,N;n?c!==Yo&&(T=m*f-g*_)&&(A=M*(f/T)+S*(-_/T)+(_*x-f*p)/T,N=M*(-g/T)+S*(m/T)-(m*x-g*p)/T,M=A,S=N):(b=$m(t),M=b.x+(~v[0].indexOf("%")?M/100*b.width:M),S=b.y+(~(v[1]||v[0]).indexOf("%")?S/100*b.height:S)),i||i!==!1&&a.smooth?(p=M-l,x=S-u,a.xOffset=h+(p*m+x*_)-p,a.yOffset=d+(p*g+x*f)-x):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=S,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[wn]="0px 0px",o&&(ds(o,a,"xOrigin",l,M),ds(o,a,"yOrigin",u,S),ds(o,a,"xOffset",h,a.xOffset),ds(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+S)},jo=function(t,e){var n=t._gsap||new Om(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(t),l=gi(t,wn)||"0",u,h,d,m,g,_,f,p,x,v,M,S,b,T,A,N,y,E,L,k,P,F,O,B,z,H,q,j,Q,xt,X,Y;return u=h=d=_=f=p=x=v=M=0,m=g=1,n.svg=!!(t.getCTM&&Zm(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[ye]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[ye]!=="none"?c[ye]:"")),i.scale=i.rotate=i.translate="none"),T=xh(t,n.svg),n.svg&&(n.uncache?(z=t.getBBox(),l=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),Lu(t,B||l,!!B||n.originIsAbsolute,n.smooth!==!1,T)),S=n.xOrigin||0,b=n.yOrigin||0,T!==Yo&&(E=T[0],L=T[1],k=T[2],P=T[3],u=F=T[4],h=O=T[5],T.length===6?(m=Math.sqrt(E*E+L*L),g=Math.sqrt(P*P+k*k),_=E||L?Fr(L,E)*Us:0,x=k||P?Fr(k,P)*Us+_:0,x&&(g*=Math.abs(Math.cos(x*Zr))),n.svg&&(u-=S-(S*E+b*k),h-=b-(S*L+b*P))):(Y=T[6],xt=T[7],q=T[8],j=T[9],Q=T[10],X=T[11],u=T[12],h=T[13],d=T[14],A=Fr(Y,Q),f=A*Us,A&&(N=Math.cos(-A),y=Math.sin(-A),B=F*N+q*y,z=O*N+j*y,H=Y*N+Q*y,q=F*-y+q*N,j=O*-y+j*N,Q=Y*-y+Q*N,X=xt*-y+X*N,F=B,O=z,Y=H),A=Fr(-k,Q),p=A*Us,A&&(N=Math.cos(-A),y=Math.sin(-A),B=E*N-q*y,z=L*N-j*y,H=k*N-Q*y,X=P*y+X*N,E=B,L=z,k=H),A=Fr(L,E),_=A*Us,A&&(N=Math.cos(A),y=Math.sin(A),B=E*N+L*y,z=F*N+O*y,L=L*N-E*y,O=O*N-F*y,E=B,F=z),f&&Math.abs(f)+Math.abs(_)>359.9&&(f=_=0,p=180-p),m=Re(Math.sqrt(E*E+L*L+k*k)),g=Re(Math.sqrt(O*O+Y*Y)),A=Fr(F,O),x=Math.abs(A)>2e-4?A*Us:0,M=X?1/(X<0?-X:X):0),n.svg&&(B=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Jm(gi(t,ye)),B&&t.setAttribute("transform",B))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(m*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Re(m),n.scaleY=Re(g),n.rotation=Re(_)+a,n.rotationX=Re(f)+a,n.rotationY=Re(p)+a,n.skewX=x+a,n.skewY=v+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[wn]=wc(l)),n.xOffset=n.yOffset=0,n.force3D=Fn.force3D,n.renderTransform=n.svg?fb:jm?Qm:db,n.uncache=0,n},wc=function(t){return(t=t.split(" "))[0]+" "+t[1]},su=function(t,e,n){var i=rn(e);return Re(parseFloat(e)+parseFloat(Ms(t,"x",n+"px",i)))+i},db=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Qm(t,e)},Is="0deg",Do="0px",Os=") ",Qm=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,f=n.transformPerspective,p=n.force3D,x=n.target,v=n.zOrigin,M="",S=p==="auto"&&t&&t!==1||p===!0;if(v&&(h!==Is||u!==Is)){var b=parseFloat(u)*Zr,T=Math.sin(b),A=Math.cos(b),N;b=parseFloat(h)*Zr,N=Math.cos(b),o=su(x,o,T*N*-v),a=su(x,a,-Math.sin(b)*-v),c=su(x,c,A*N*-v+v)}f!==Do&&(M+="perspective("+f+Os),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(S||o!==Do||a!==Do||c!==Do)&&(M+=c!==Do||S?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Os),l!==Is&&(M+="rotate("+l+Os),u!==Is&&(M+="rotateY("+u+Os),h!==Is&&(M+="rotateX("+h+Os),(d!==Is||m!==Is)&&(M+="skew("+d+", "+m+Os),(g!==1||_!==1)&&(M+="scale("+g+", "+_+Os),x.style[ye]=M||"translate(0, 0)"},fb=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,f=n.xOffset,p=n.yOffset,x=n.forceCSS,v=parseFloat(o),M=parseFloat(a),S,b,T,A,N;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Zr,l*=Zr,S=Math.cos(c)*h,b=Math.sin(c)*h,T=Math.sin(c-l)*-d,A=Math.cos(c-l)*d,l&&(u*=Zr,N=Math.tan(l-u),N=Math.sqrt(1+N*N),T*=N,A*=N,u&&(N=Math.tan(u),N=Math.sqrt(1+N*N),S*=N,b*=N)),S=Re(S),b=Re(b),T=Re(T),A=Re(A)):(S=h,A=d,b=T=0),(v&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(v=Ms(m,"x",o,"px"),M=Ms(m,"y",a,"px")),(g||_||f||p)&&(v=Re(v+g-(g*S+_*T)+f),M=Re(M+_-(g*b+_*A)+p)),(i||r)&&(N=m.getBBox(),v=Re(v+i/100*N.width),M=Re(M+r/100*N.height)),N="matrix("+S+","+b+","+T+","+A+","+v+","+M+")",m.setAttribute("transform",N),x&&(m.style[ye]=N)},pb=function(t,e,n,i,r){var o=360,a=Ye(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?Us:1),l=c-i,u=i+l+"deg",h,d;return a&&(h=r.split("_")[1],h==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),h==="cw"&&l<0?l=(l+o*Hf)%o-~~(l/o)*o:h==="ccw"&&l>0&&(l=(l-o*Hf)%o-~~(l/o)*o)),t._pt=d=new En(t._pt,e,n,i,l,KT),d.e=u,d.u="deg",t._props.push(n),d},$f=function(t,e){for(var n in e)t[n]=e[n];return t},mb=function(t,e,n){var i=$f({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,h,d,m,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[ye]=e,a=jo(n,1),ir(n,ye),n.setAttribute("transform",l)):(l=getComputedStyle(n)[ye],o[ye]=e,a=jo(n,1),o[ye]=l);for(c in ji)l=i[c],u=a[c],l!==u&&r.indexOf(c)<0&&(m=rn(l),g=rn(u),h=m!==g?Ms(n,c,l,g):parseFloat(l),d=parseFloat(u),t._pt=new En(t._pt,a,c,h,d-h,Ru),t._pt.u=g||0,t._props.push(c));$f(a,i)};bn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Ec[t>1?"border"+s:s]=function(a,c,l,u,h){var d,m;if(arguments.length<4)return d=o.map(function(g){return Bi(a,g,l)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},o.forEach(function(g,_){return m[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(c,m,h)}});var t_={name:"css",register:Du,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,c=n.vars.startAt,l,u,h,d,m,g,_,f,p,x,v,M,S,b,T,A;_h||Du(),this.styles=this.styles||Ym(t),A=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Ln[_]&&Fm(_,e,n,i,t,r)))){if(m=typeof u,g=Ec[_],m==="function"&&(u=u.call(n,i,t,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Wo(u)),g)g(this,t,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",gs.lastIndex=0,gs.test(l)||(f=rn(l),p=rn(u)),p?f!==p&&(l=Ms(t,_,l,p)+p):f&&(u+=f),this.add(a,"setProperty",l,u,i,r,0,0,_),o.push(_),A.push(_,0,a[_]);else if(m!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,t,r):c[_],Ye(l)&&~l.indexOf("random(")&&(l=Wo(l)),rn(l+"")||l==="auto"||(l+=Fn.units[_]||rn(Bi(t,_))||""),(l+"").charAt(1)==="="&&(l=Bi(t,_))):l=Bi(t,_),d=parseFloat(l),x=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),_ in _i&&(_==="autoAlpha"&&(d===1&&Bi(t,"visibility")==="hidden"&&h&&(d=0),A.push("visibility",0,a.visibility),ds(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=_i[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in ji,v){if(this.styles.save(_),M||(S=t._gsap,S.renderTransform&&!e.parseTransform||jo(t,e.parseTransform),b=e.smoothOrigin!==!1&&S.smooth,M=this._pt=new En(this._pt,a,ye,0,1,S.renderTransform,S,0,-1),M.dep=1),_==="scale")this._pt=new En(this._pt,S,"scaleY",S.scaleY,(x?jr(S.scaleY,x+h):h)-S.scaleY||0,Ru),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){A.push(wn,0,a[wn]),u=ub(u),S.svg?Lu(t,u,0,b,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==S.zOrigin&&ds(this,S,"zOrigin",S.zOrigin,p),ds(this,a,_,wc(l),wc(u)));continue}else if(_==="svgOrigin"){Lu(t,u,1,b,0,this);continue}else if(_ in Km){pb(this,S,_,d,x?jr(d,x+u):u);continue}else if(_==="smoothOrigin"){ds(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){mb(this,u,t);continue}}else _ in a||(_=ao(_)||_);if(v||(h||h===0)&&(d||d===0)&&!ZT.test(u)&&_ in a)f=(l+"").substr((d+"").length),h||(h=0),p=rn(u)||(_ in Fn.units?Fn.units[_]:f),f!==p&&(d=Ms(t,_,l,p)),this._pt=new En(this._pt,v?S:a,_,d,(x?jr(d,x+h):h)-d,!v&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?QT:Ru),this._pt.u=p||0,f!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=JT);else if(_ in a)lb.call(this,t,_,l,x?x+u:u);else if(_ in t)this.add(t,_,l||t[_],x?x+u:u,i,r);else if(_!=="parseTransform"){ah(_,u);continue}v||(_ in a?A.push(_,0,a[_]):A.push(_,1,l||t[_])),o.push(_)}}T&&Gm(this)},render:function(t,e){if(e.tween._time||!gh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Bi,aliases:_i,getSetter:function(t,e,n){var i=_i[e];return i&&i.indexOf(",")<0&&(e=i),e in ji&&e!==wn&&(t._gsap.x||Bi(t,"x"))?n&&Gf===n?e==="scale"?ib:nb:(Gf=n||{})&&(e==="scale"?sb:rb):t.style&&!sh(t.style[e])?tb:~e.indexOf("-")?eb:ph(t,e)},core:{_removeProperty:ir,_getMatrix:xh}};An.utils.checkPrefix=ao;An.core.getStyleSaver=Ym;(function(s,t,e,n){var i=bn(s+","+t+","+e,function(r){ji[r]=1});bn(t,function(r){Fn.units[r]="deg",Km[r]=1}),_i[i[13]]=s+","+t,bn(n,function(r){var o=r.split(":");_i[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Fn.units[s]="px"});An.registerPlugin(t_);var Gi=An.registerPlugin(t_)||An;Gi.core.Tween;const _b=(Math.sqrt(5)-1)/4,$e=(5-Math.sqrt(5))/20,Ja=s=>Math.floor(s)|0,Qa=new Float64Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);function gb(s=Math.random){const t=vb(s),e=new Float64Array(t).map(o=>Qa[o%32*4]),n=new Float64Array(t).map(o=>Qa[o%32*4+1]),i=new Float64Array(t).map(o=>Qa[o%32*4+2]),r=new Float64Array(t).map(o=>Qa[o%32*4+3]);return function(a,c,l,u){let h,d,m,g,_;const f=(a+c+l+u)*_b,p=Ja(a+f),x=Ja(c+f),v=Ja(l+f),M=Ja(u+f),S=(p+x+v+M)*$e,b=p-S,T=x-S,A=v-S,N=M-S,y=a-b,E=c-T,L=l-A,k=u-N;let P=0,F=0,O=0,B=0;y>E?P++:F++,y>L?P++:O++,y>k?P++:B++,E>L?F++:O++,E>k?F++:B++,L>k?O++:B++;const z=P>=3?1:0,H=F>=3?1:0,q=O>=3?1:0,j=B>=3?1:0,Q=P>=2?1:0,xt=F>=2?1:0,X=O>=2?1:0,Y=B>=2?1:0,ct=P>=1?1:0,_t=F>=1?1:0,et=O>=1?1:0,mt=B>=1?1:0,Ot=y-z+$e,wt=E-H+$e,V=L-q+$e,ue=k-j+$e,Tt=y-Q+2*$e,J=E-xt+2*$e,tt=L-X+2*$e,Dt=k-Y+2*$e,gt=y-ct+3*$e,C=E-_t+3*$e,w=L-et+3*$e,G=k-mt+3*$e,it=y-1+4*$e,nt=E-1+4*$e,rt=L-1+4*$e,St=k-1+4*$e,ht=p&255,vt=x&255,Et=v&255,Nt=M&255;let st=.6-y*y-E*E-L*L-k*k;if(st<0)h=0;else{const at=ht+t[vt+t[Et+t[Nt]]];st*=st,h=st*st*(e[at]*y+n[at]*E+i[at]*L+r[at]*k)}let Yt=.6-Ot*Ot-wt*wt-V*V-ue*ue;if(Yt<0)d=0;else{const at=ht+z+t[vt+H+t[Et+q+t[Nt+j]]];Yt*=Yt,d=Yt*Yt*(e[at]*Ot+n[at]*wt+i[at]*V+r[at]*ue)}let Ft=.6-Tt*Tt-J*J-tt*tt-Dt*Dt;if(Ft<0)m=0;else{const at=ht+Q+t[vt+xt+t[Et+X+t[Nt+Y]]];Ft*=Ft,m=Ft*Ft*(e[at]*Tt+n[at]*J+i[at]*tt+r[at]*Dt)}let Pt=.6-gt*gt-C*C-w*w-G*G;if(Pt<0)g=0;else{const at=ht+ct+t[vt+_t+t[Et+et+t[Nt+mt]]];Pt*=Pt,g=Pt*Pt*(e[at]*gt+n[at]*C+i[at]*w+r[at]*G)}let Mt=.6-it*it-nt*nt-rt*rt-St*St;if(Mt<0)_=0;else{const at=ht+1+t[vt+1+t[Et+1+t[Nt+1]]];Mt*=Mt,_=Mt*Mt*(e[at]*it+n[at]*nt+i[at]*rt+r[at]*St)}return 27*(h+d+m+g+_)}}function vb(s){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(s()*(256-n)),r=e[n];e[n]=e[i],e[i]=r}for(let n=256;n<512;n++)e[n]=e[n-256];return e}var xb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},yb={exports:{}};(function(s,t){(function(e,n){s.exports=n()})(xb,function(){return e.importState=function(i){var r=new e;return r.importState(i),r},e;function e(){return function(i){var r=0,o=0,a=0,c=1;i.length==0&&(i=[+new Date]);var l=n();r=l(" "),o=l(" "),a=l(" ");for(var u=0;u<i.length;u++)r-=l(i[u]),r<0&&(r+=1),o-=l(i[u]),o<0&&(o+=1),a-=l(i[u]),a<0&&(a+=1);l=null;var h=function(){var d=2091639*r+c*23283064365386963e-26;return r=o,o=a,a=d-(c=d|0)};return h.next=h,h.uint32=function(){return h()*4294967296},h.fract53=function(){return h()+(h()*2097152|0)*11102230246251565e-32},h.version="Alea 0.9",h.args=i,h.exportState=function(){return[r,o,a,c]},h.importState=function(d){r=+d[0]||0,o=+d[1]||0,a=+d[2]||0,c=+d[3]||0},h}(Array.prototype.slice.call(arguments))}function n(){var i=4022871197,r=function(o){o=o.toString();for(var a=0;a<o.length;a++){i+=o.charCodeAt(a);var c=.02519603282416938*i;i=c>>>0,c-=i,c*=i,i=c>>>0,c-=i,i+=c*4294967296}return(i>>>0)*23283064365386963e-26};return r.version="Mash 0.9",r}})})(yb);class Ur{constructor(t){this.v=new U,this.v.copy(t),this.value=0}sense(t,e){new U().addVectors(t,this.v).distanceTo(e.pos)<50&&(this.value=1)}}class yh{constructor(t,e,n,i,r,o,a){this.pos=new U(t,e,n),this.vel=new U,this.acc=new U,this.mass=i,this.maxSpeed=r,this.maxForce=3,this.sensors=[],this.fitness=0,this.life=o;let c=15;for(let l=0;l<c;l++)Gi.utils.mapRange(0,c,0,Math.TWO_PI,l);this.sensors.push(new Ur(new U(this.pos.x+10,this.pos.y,this.pos.z))),this.sensors.push(new Ur(new U(this.pos.x-10,this.pos.y,this.pos.z))),this.sensors.push(new Ur(new U(this.pos.x,this.pos.y+10,this.pos.z))),this.sensors.push(new Ur(new U(this.pos.x,this.pos.y-10,this.pos.z))),this.sensors.push(new Ur(new U(this.pos.x,this.pos.y,this.pos.z+10))),this.sensors.push(new Ur(new U(this.pos.x,this.pos.y,this.pos.z-10))),a&&(this.brain=a)}reproduce(){let t=this.brain.copy();return t.mutate(.1),new yh(this.pos.x,this.pos.y,this.pos.z,this.mass,this.maxSpeed,this.life,t)}eat(){for(let t=0;t<Foods.length;t++)this.pos.distanceTo(Foods[t].pos)<50&&(this.life+=.5,Foods[t].life-=.05,Foods[t].life<0&&(Foods.splice(t,1),scene.remove(objects[t]),objects.splice(t,1)))}think(t,e){let n=new U().subVectors(t.pos,this.pos),r=Mp(n)/e;n.normalize();let o=[n.x,n.y,n.z,r,this.vel.x/this.maxSpeed,this.vel.y/this.maxSpeed];const a=this.brain.predictSync(o);let c=new U(a[0].value*2-1,a[1].value*2-1,a[2].value*2-1);c.multiplyScalar(a[3].value),this.pos.distanceTo(t)<100&&this.fitness++,this.steer(c)}steer(t){let e=new U().subVectors(t,this.pos);e.normalize(),e.multiplyScalar(this.maxSpeed/2),new U().subVectors(e,this.vel),this.applyForce(t)}applyForce(t){t.divideScalar(this.mass),this.acc.add(t)}update(){this.vel.add(this.acc),this.pos.add(this.vel),this.acc=new U(0,0,0)}follow(t){var e=this.pos.x*10,n=this.pos.y*10,i=this.pos.z*10,r=t(e,n,i,1),o=t(e,n,i,2);let a=new U(Math.cos(r*Math.PI)*Math.sin(o*Math.PI),Math.sin(r*Math.PI)*Math.cos(o*Math.PI),Math.cos(r*Math.PI));a.normalize(),a.divideScalar(20),this.applyForce(a)}attract(t,e,n){let i=new U(t,e,n),r=new U().subVectors(i,this.pos),o=this.pos.distanceTo(i);o<100&&(o=100),o>1e3&&(o=500);let c=10*(this.mass*20)/(o*o);r.normalize(),r.multiplyScalar(c),this.steer(r)}repel(t,e,n){let i=new U(t,e,n),r=new U().subVectors(this.pos,i),o=this.pos.distanceTo(i);o<100&&(o=100),o>1e3&&(o=500);let c=10*(this.mass*20)/(o*o);r.normalize(),r.multiplyScalar(c),this.steer(r)}boundaries(t){let e=new U;this.pos.x>t&&e.set(-this.maxSpeed,this.vel.y,this.vel.z),this.pos.y>t&&e.set(this.vel.x,-this.maxSpeed,this.vel.z),this.pos.z>t&&e.set(this.vel.x,this.vel.y,-this.maxSpeed),this.pos.x<0&&e.set(this.maxSpeed,this.vel.y,this.vel.z),this.pos.y<0&&e.set(this.vel.x,this.maxSpeed,this.vel.z),this.pos.z<0&&e.set(this.vel.x,this.vel.y,this.maxSpeed),this.applyForce(e)}}class Sb{constructor(t,e,n,i,r){this.pos=new U(t,e,n),this.type=i,this.life=r}}const Zf={type:"change"},ru={type:"start"},Kf={type:"end"},tc=new Ku,Jf=new ki,Mb=Math.cos(70*N0.DEG2RAD);class Tb extends ur{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gr.ROTATE,MIDDLE:gr.DOLLY,RIGHT:gr.PAN},this.touches={ONE:vr.ROTATE,TWO:vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",Et),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Et),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Zf),n.update(),r=i.NONE},this.update=function(){const I=new U,ut=new qi().setFromUnitVectors(t.up,new U(0,1,0)),pt=ut.clone().invert(),Ct=new U,D=new qi,lt=new U,ot=2*Math.PI;return function(Rt=null){const te=n.object.position;I.copy(te).sub(n.target),I.applyQuaternion(ut),a.setFromVector3(I),n.autoRotate&&r===i.NONE&&L(y(Rt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let $t=n.minAzimuthAngle,re=n.maxAzimuthAngle;isFinite($t)&&isFinite(re)&&($t<-Math.PI?$t+=ot:$t>Math.PI&&($t-=ot),re<-Math.PI?re+=ot:re>Math.PI&&(re-=ot),$t<=re?a.theta=Math.max($t,Math.min(re,a.theta)):a.theta=a.theta>($t+re)/2?Math.max($t,a.theta):Math.min(re,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&b||n.object.isOrthographicCamera?a.radius=q(a.radius):a.radius=q(a.radius*l),I.setFromSpherical(a),I.applyQuaternion(pt),te.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let je=!1;if(n.zoomToCursor&&b){let ee=null;if(n.object.isPerspectiveCamera){const Ee=I.length();ee=q(Ee*l);const ln=Ee-ee;n.object.position.addScaledVector(M,ln),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ee=new U(S.x,S.y,0);Ee.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),je=!0;const ln=new U(S.x,S.y,0);ln.unproject(n.object),n.object.position.sub(ln).add(Ee),n.object.updateMatrixWorld(),ee=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ee!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ee).add(n.object.position):(tc.origin.copy(n.object.position),tc.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(tc.direction))<Mb?t.lookAt(n.target):(Jf.setFromNormalAndCoplanarPoint(n.object.up,n.target),tc.intersectPlane(Jf,n.target))))}else n.object.isOrthographicCamera&&(je=l!==1,je&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix()));return l=1,b=!1,je||Ct.distanceToSquared(n.object.position)>o||8*(1-D.dot(n.object.quaternion))>o||lt.distanceToSquared(n.target)>0?(n.dispatchEvent(Zf),Ct.copy(n.object.position),D.copy(n.object.quaternion),lt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Yt),n.domElement.removeEventListener("pointerdown",C),n.domElement.removeEventListener("pointercancel",G),n.domElement.removeEventListener("wheel",rt),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",G),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Et),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Nf,c=new Nf;let l=1;const u=new U,h=new Lt,d=new Lt,m=new Lt,g=new Lt,_=new Lt,f=new Lt,p=new Lt,x=new Lt,v=new Lt,M=new U,S=new Lt;let b=!1;const T=[],A={};let N=!1;function y(I){return I!==null?2*Math.PI/60*n.autoRotateSpeed*I:2*Math.PI/60/60*n.autoRotateSpeed}function E(I){const ut=Math.abs(I*.01);return Math.pow(.95,n.zoomSpeed*ut)}function L(I){c.theta-=I}function k(I){c.phi-=I}const P=function(){const I=new U;return function(pt,Ct){I.setFromMatrixColumn(Ct,0),I.multiplyScalar(-pt),u.add(I)}}(),F=function(){const I=new U;return function(pt,Ct){n.screenSpacePanning===!0?I.setFromMatrixColumn(Ct,1):(I.setFromMatrixColumn(Ct,0),I.crossVectors(n.object.up,I)),I.multiplyScalar(pt),u.add(I)}}(),O=function(){const I=new U;return function(pt,Ct){const D=n.domElement;if(n.object.isPerspectiveCamera){const lt=n.object.position;I.copy(lt).sub(n.target);let ot=I.length();ot*=Math.tan(n.object.fov/2*Math.PI/180),P(2*pt*ot/D.clientHeight,n.object.matrix),F(2*Ct*ot/D.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(pt*(n.object.right-n.object.left)/n.object.zoom/D.clientWidth,n.object.matrix),F(Ct*(n.object.top-n.object.bottom)/n.object.zoom/D.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function B(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(I,ut){if(!n.zoomToCursor)return;b=!0;const pt=n.domElement.getBoundingClientRect(),Ct=I-pt.left,D=ut-pt.top,lt=pt.width,ot=pt.height;S.x=Ct/lt*2-1,S.y=-(D/ot)*2+1,M.set(S.x,S.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(I){return Math.max(n.minDistance,Math.min(n.maxDistance,I))}function j(I){h.set(I.clientX,I.clientY)}function Q(I){H(I.clientX,I.clientX),p.set(I.clientX,I.clientY)}function xt(I){g.set(I.clientX,I.clientY)}function X(I){d.set(I.clientX,I.clientY),m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ut=n.domElement;L(2*Math.PI*m.x/ut.clientHeight),k(2*Math.PI*m.y/ut.clientHeight),h.copy(d),n.update()}function Y(I){x.set(I.clientX,I.clientY),v.subVectors(x,p),v.y>0?B(E(v.y)):v.y<0&&z(E(v.y)),p.copy(x),n.update()}function ct(I){_.set(I.clientX,I.clientY),f.subVectors(_,g).multiplyScalar(n.panSpeed),O(f.x,f.y),g.copy(_),n.update()}function _t(I){H(I.clientX,I.clientY),I.deltaY<0?z(E(I.deltaY)):I.deltaY>0&&B(E(I.deltaY)),n.update()}function et(I){let ut=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),ut=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),ut=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),ut=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),ut=!0;break}ut&&(I.preventDefault(),n.update())}function mt(I){if(T.length===1)h.set(I.pageX,I.pageY);else{const ut=at(I),pt=.5*(I.pageX+ut.x),Ct=.5*(I.pageY+ut.y);h.set(pt,Ct)}}function Ot(I){if(T.length===1)g.set(I.pageX,I.pageY);else{const ut=at(I),pt=.5*(I.pageX+ut.x),Ct=.5*(I.pageY+ut.y);g.set(pt,Ct)}}function wt(I){const ut=at(I),pt=I.pageX-ut.x,Ct=I.pageY-ut.y,D=Math.sqrt(pt*pt+Ct*Ct);p.set(0,D)}function V(I){n.enableZoom&&wt(I),n.enablePan&&Ot(I)}function ue(I){n.enableZoom&&wt(I),n.enableRotate&&mt(I)}function Tt(I){if(T.length==1)d.set(I.pageX,I.pageY);else{const pt=at(I),Ct=.5*(I.pageX+pt.x),D=.5*(I.pageY+pt.y);d.set(Ct,D)}m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ut=n.domElement;L(2*Math.PI*m.x/ut.clientHeight),k(2*Math.PI*m.y/ut.clientHeight),h.copy(d)}function J(I){if(T.length===1)_.set(I.pageX,I.pageY);else{const ut=at(I),pt=.5*(I.pageX+ut.x),Ct=.5*(I.pageY+ut.y);_.set(pt,Ct)}f.subVectors(_,g).multiplyScalar(n.panSpeed),O(f.x,f.y),g.copy(_)}function tt(I){const ut=at(I),pt=I.pageX-ut.x,Ct=I.pageY-ut.y,D=Math.sqrt(pt*pt+Ct*Ct);x.set(0,D),v.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),B(v.y),p.copy(x);const lt=(I.pageX+ut.x)*.5,ot=(I.pageY+ut.y)*.5;H(lt,ot)}function Dt(I){n.enableZoom&&tt(I),n.enablePan&&J(I)}function gt(I){n.enableZoom&&tt(I),n.enableRotate&&Tt(I)}function C(I){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",w),n.domElement.addEventListener("pointerup",G)),Ft(I),I.pointerType==="touch"?Nt(I):it(I))}function w(I){n.enabled!==!1&&(I.pointerType==="touch"?st(I):nt(I))}function G(I){switch(Pt(I),T.length){case 0:n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",G),n.dispatchEvent(Kf),r=i.NONE;break;case 1:const ut=T[0],pt=A[ut];Nt({pointerId:ut,pageX:pt.x,pageY:pt.y});break}}function it(I){let ut;switch(I.button){case 0:ut=n.mouseButtons.LEFT;break;case 1:ut=n.mouseButtons.MIDDLE;break;case 2:ut=n.mouseButtons.RIGHT;break;default:ut=-1}switch(ut){case gr.DOLLY:if(n.enableZoom===!1)return;Q(I),r=i.DOLLY;break;case gr.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;xt(I),r=i.PAN}else{if(n.enableRotate===!1)return;j(I),r=i.ROTATE}break;case gr.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;j(I),r=i.ROTATE}else{if(n.enablePan===!1)return;xt(I),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ru)}function nt(I){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;X(I);break;case i.DOLLY:if(n.enableZoom===!1)return;Y(I);break;case i.PAN:if(n.enablePan===!1)return;ct(I);break}}function rt(I){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(I.preventDefault(),n.dispatchEvent(ru),_t(St(I)),n.dispatchEvent(Kf))}function St(I){const ut=I.deltaMode,pt={clientX:I.clientX,clientY:I.clientY,deltaY:I.deltaY};switch(ut){case 1:pt.deltaY*=16;break;case 2:pt.deltaY*=100;break}return I.ctrlKey&&!N&&(pt.deltaY*=10),pt}function ht(I){I.key==="Control"&&(N=!0,n.domElement.getRootNode().addEventListener("keyup",vt,{passive:!0,capture:!0}))}function vt(I){I.key==="Control"&&(N=!1,n.domElement.getRootNode().removeEventListener("keyup",vt,{passive:!0,capture:!0}))}function Et(I){n.enabled===!1||n.enablePan===!1||et(I)}function Nt(I){switch(Mt(I),T.length){case 1:switch(n.touches.ONE){case vr.ROTATE:if(n.enableRotate===!1)return;mt(I),r=i.TOUCH_ROTATE;break;case vr.PAN:if(n.enablePan===!1)return;Ot(I),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case vr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;V(I),r=i.TOUCH_DOLLY_PAN;break;case vr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ue(I),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ru)}function st(I){switch(Mt(I),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Tt(I),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;J(I),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Dt(I),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;gt(I),n.update();break;default:r=i.NONE}}function Yt(I){n.enabled!==!1&&I.preventDefault()}function Ft(I){T.push(I.pointerId)}function Pt(I){delete A[I.pointerId];for(let ut=0;ut<T.length;ut++)if(T[ut]==I.pointerId){T.splice(ut,1);return}}function Mt(I){let ut=A[I.pointerId];ut===void 0&&(ut=new Lt,A[I.pointerId]=ut),ut.set(I.pageX,I.pageY)}function at(I){const ut=I.pointerId===T[0]?T[1]:T[0];return A[ut]}n.domElement.addEventListener("contextmenu",Yt),n.domElement.addEventListener("pointerdown",C),n.domElement.addEventListener("pointercancel",G),n.domElement.addEventListener("wheel",rt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ht,{passive:!0,capture:!0}),this.update()}}const bb={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class il{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Eb=new th(-1,1,1,-1,0,1);class wb extends bi{constructor(){super(),this.setAttribute("position",new Yn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yn([0,2,0,0,2,0],2))}}const Ab=new wb;class Cb{constructor(t){this._mesh=new mn(Ab,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Eb)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Rb extends il{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof $n?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Xp.clone(t.uniforms),this.material=new $n({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Cb(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Qf extends il{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Pb extends il{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Db{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Lt);this._width=n.width,this._height=n.height,e=new ys(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:to}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rb(bb),this.copyPass.material.blending=Hi,this.clock=new tT}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Qf!==void 0&&(o instanceof Qf?n=!0:o instanceof Pb&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Lb extends il{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Kt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const Wt=class Wt extends We{constructor(e,n){super();Jn(this,"advance",function(){const e=new ge;return function(){this.targetObject.updateMatrixWorld(),e.copy(this.targetObject.matrixWorld),this.advanceWithTransform(e),this.updateUniforms()}}());Jn(this,"advanceGeometry",function(){return function(n,i){const r=this.currentEnd+1>=this.length?0:this.currentEnd+1;if(i?this.updateNodePositionsFromTransformMatrix(r,i):this.updateNodePositionsFromOrientationTangent(r,n.position,n.tangent),this.currentLength>=1&&(this.connectNodes(this.currentEnd,r),this.currentLength>=this.length)){const o=this.currentEnd+1>=this.length?0:this.currentEnd+1;this.disconnectNodes(o)}this.currentLength<this.length&&this.currentLength++,this.currentEnd++,this.currentEnd>=this.length&&(this.currentEnd=0),this.currentLength>=1&&(this.currentLength<this.length?this.geometry.setDrawRange(0,(this.currentLength-1)*this.FaceIndicesPerNode):this.geometry.setDrawRange(0,this.currentLength*this.FaceIndicesPerNode)),this.updateNodeID(this.currentEnd,this.currentNodeID),this.currentNodeID++}}());Jn(this,"updateHead",function(){const e=new ge;return function(){this.currentEnd<0||(this.targetObject.updateMatrixWorld(),e.copy(this.targetObject.matrixWorld),this.updateNodePositionsFromTransformMatrix(this.currentEnd,e))}}());Jn(this,"updateNodePositionsFromOrientationTangent",function(){const e=new qi,n=new U,i=[];for(let r=0;r<Wt.MaxHeadVertices;r++){const o=new U;i.push(o)}return function(o,a,c){const l=this.geometry.getAttribute("position");this.updateNodeCenter(o,a),n.copy(a),n.sub(Wt.LocalHeadOrigin),e.setFromUnitVectors(Wt.LocalOrientationTangent,c);for(let u=0;u<this.localHeadGeometry.length;u++){const h=i[u];h.copy(this.localHeadGeometry[u]),h.applyQuaternion(e),h.add(n)}for(let u=0;u<this.localHeadGeometry.length;u++){const h=(this.VerticesPerNode*o+u)*Wt.PositionComponentCount,d=i[u];l.array[h]=d.x,l.array[h+1]=d.y,l.array[h+2]=d.z}l.needsUpdate=!0}}());Jn(this,"updateNodePositionsFromTransformMatrix",function(){const e=new Xt,n=new qi,i=new U,r=new U,o=new U,a=new U,c=[];for(let u=0;u<Wt.MaxHeadVertices;u++){const h=new U;c.push(h)}function l(u,h){const d=h.elements;u.set(d[0],d[1],d[2],d[4],d[5],d[6],d[8],d[9],d[10])}return function(h,d){const m=this.geometry.getAttribute("position");i.set(0,0,0),i.applyMatrix4(d),this.updateNodeCenter(h,i);for(let g=0;g<this.localHeadGeometry.length;g++)c[g].copy(this.localHeadGeometry[g]);for(let g=0;g<this.localHeadGeometry.length;g++)c[g].applyMatrix4(d);if(this.lastNodeCenter&&this.orientToMovement&&(l(e,d),o.set(0,0,-1),o.applyMatrix3(e),a.copy(this.currentNodeCenter),a.sub(this.lastNodeCenter),a.normalize(),a.lengthSq()<=1e-4&&this.lastOrientationDir&&a.copy(this.lastOrientationDir),a.lengthSq()>1e-4)){this.lastOrientationDir||(this.lastOrientationDir=new U),n.setFromUnitVectors(o,a),r.copy(this.currentNodeCenter);for(let g=0;g<this.localHeadGeometry.length;g++){const _=c[g];_.sub(r),_.applyQuaternion(n),_.add(r)}}for(let g=0;g<this.localHeadGeometry.length;g++){const _=(this.VerticesPerNode*h+g)*Wt.PositionComponentCount,f=c[g];m.array[_]=f.x,m.array[_+1]=f.y,m.array[_+2]=f.z}m.needsUpdate=!0,m.updateRange.offset=h*this.VerticesPerNode*Wt.PositionComponentCount,m.updateRange.count=this.VerticesPerNode*Wt.PositionComponentCount}}());Jn(this,"connectNodes",function(){const e={attribute:null,offset:0,count:-1};return function(i,r){const o=this.geometry.getIndex();for(let a=0;a<this.localHeadGeometry.length-1;a++){const c=this.VerticesPerNode*i+a,l=this.VerticesPerNode*r+a,u=(i*this.FacesPerNode+a*Wt.FacesPerQuad)*Wt.IndicesPerFace;o.array[u]=c,o.array[u+1]=l,o.array[u+2]=c+1,o.array[u+3]=l,o.array[u+4]=l+1,o.array[u+5]=c+1}return o.needsUpdate=!0,o.updateRange.count=-1,e.attribute=o,e.offset=i*this.FacesPerNode*Wt.IndicesPerFace,e.count=this.FacesPerNode*Wt.IndicesPerFace,e}}());Jn(this,"disconnectNodes",function(){const e={attribute:null,offset:0,count:-1};return function(i){const r=this.geometry.getIndex();for(let o=0;o<this.localHeadGeometry.length-1;o++){const a=(i*this.FacesPerNode+o*Wt.FacesPerQuad)*Wt.IndicesPerFace;r.array[a]=0,r.array[a+1]=0,r.array[a+2]=0,r.array[a+3]=0,r.array[a+4]=0,r.array[a+5]=0}return r.needsUpdate=!0,r.updateRange.count=-1,e.attribute=r,e.offset=i*this.FacesPerNode*Wt.IndicesPerFace,e.count=this.FacesPerNode*Wt.IndicesPerFace,e}}());this.active=!1,this.orientToMovement=!1,n&&(this.orientToMovement=!0),this.scene=e,this.geometry=null,this.mesh=null,this.nodeCenters=null,this.lastNodeCenter=null,this.currentNodeCenter=null,this.lastOrientationDir=null,this.nodeIDs=null,this.currentLength=0,this.currentEnd=0,this.currentNodeID=0,this.advanceFrequency=60,this.advancePeriod=1/this.advanceFrequency,this.lastAdvanceTime=0,this.paused=!1,this.pauseAdvanceUpdateTimeDiff=0}setAdvanceFrequency(e){this.advanceFrequency=e,this.advancePeriod=1/this.advanceFrequency}initialize(e,n,i,r,o,a){this.deactivate(),this.destroyMesh(),this.length=n>0?n+1:0,this.dragTexture=i?1:0,this.targetObject=a,this.initializeLocalHeadGeometry(r,o),this.nodeIDs=[],this.nodeCenters=[];for(let c=0;c<this.length;c++)this.nodeIDs[c]=-1,this.nodeCenters[c]=new U;this.material=e,this.initializeGeometry(),this.initializeMesh(),this.material.uniforms.trailLength.value=0,this.material.uniforms.minID.value=0,this.material.uniforms.maxID.value=0,this.material.uniforms.dragTexture.value=this.dragTexture,this.material.uniforms.maxTrailLength.value=this.length,this.material.uniforms.verticesPerNode.value=this.VerticesPerNode,this.material.uniforms.textureTileFactor.value=new Lt(1,1),this.reset()}initializeLocalHeadGeometry(e,n){if(this.localHeadGeometry=[],!n)halfWidth=e||1,halfWidth=halfWidth/2,this.localHeadGeometry.push(new U(-halfWidth,0,0)),this.localHeadGeometry.push(new U(halfWidth,0,0)),this.VerticesPerNode=2;else{this.VerticesPerNode=0;for(let i=0;i<n.length&&i<Wt.MaxHeadVertices;i++){const r=n[i];if(r&&r instanceof U){const o=new U;o.copy(r),this.localHeadGeometry.push(o),this.VerticesPerNode++}}}this.FacesPerNode=(this.VerticesPerNode-1)*2,this.FaceIndicesPerNode=this.FacesPerNode*3}initializeGeometry(){this.vertexCount=this.length*this.VerticesPerNode,this.faceCount=this.length*this.FacesPerNode;const e=new bi,n=new Float32Array(this.vertexCount),i=new Float32Array(this.vertexCount*this.VerticesPerNode),r=new Float32Array(this.vertexCount*Wt.PositionComponentCount),o=new Float32Array(this.vertexCount*Wt.PositionComponentCount),a=new Float32Array(this.vertexCount*Wt.UVComponentCount),c=new Uint32Array(this.faceCount*Wt.IndicesPerFace),l=new Je(n,1);l.dynamic=!0,e.setAttribute("nodeID",l);const u=new Je(i,1);u.dynamic=!0,e.setAttribute("nodeVertexID",u);const h=new Je(o,Wt.PositionComponentCount);h.dynamic=!0,e.setAttribute("nodeCenter",h);const d=new Je(r,Wt.PositionComponentCount);d.dynamic=!0,e.setAttribute("position",d);const m=new Je(a,Wt.UVComponentCount);m.dynamic=!0,e.setAttribute("uv",m);const g=new Je(c,1);g.dynamic=!0,e.setIndex(g),this.geometry=e}zeroVertices(){const e=this.geometry.getAttribute("position");for(let n=0;n<this.vertexCount;n++){const i=n*3;e.array[i]=0,e.array[i+1]=0,e.array[i+2]=0}e.needsUpdate=!0,e.updateRange.count=-1}zeroIndices(){const e=this.geometry.getIndex();for(let n=0;n<this.faceCount;n++){const i=n*3;e.array[i]=0,e.array[i+1]=0,e.array[i+2]=0}e.needsUpdate=!0,e.updateRange.count=-1}formInitialFaces(){this.zeroIndices();const e=this.geometry.getIndex();for(let n=0;n<this.length-1;n++)this.connectNodes(n,n+1);e.needsUpdate=!0,e.updateRange.count=-1}initializeMesh(){this.mesh=new mn(this.geometry,this.material),this.mesh.dynamic=!0,this.mesh.matrixAutoUpdate=!1}destroyMesh(){this.mesh&&(this.scene.remove(this.mesh),this.mesh=null)}reset(){this.currentLength=0,this.currentEnd=-1,this.lastNodeCenter=null,this.currentNodeCenter=null,this.lastOrientationDir=null,this.currentNodeID=0,this.formInitialFaces(),this.zeroVertices(),this.geometry.setDrawRange(0,0)}updateUniforms(){this.currentLength<this.length?this.material.uniforms.minID.value=0:this.material.uniforms.minID.value=this.currentNodeID-this.length,this.material.uniforms.maxID.value=this.currentNodeID,this.material.uniforms.trailLength.value=this.currentLength,this.material.uniforms.maxTrailLength.value=this.length,this.material.uniforms.verticesPerNode.value=this.VerticesPerNode}advanceWithPositionAndOrientation(e,n){this.advanceGeometry({position:e,tangent:n},null)}advanceWithTransform(e){this.advanceGeometry(null,e)}currentTime(){return performance.now()/1e3}pause(){this.paused||(this.paused=!0,this.pauseAdvanceUpdateTimeDiff=this.currentTime()-this.lastAdvanceTime)}resume(){this.paused&&(this.paused=!1,this.lastAdvanceTime=this.currentTime()-this.pauseAdvanceUpdateTimeDiff)}update(){if(!this.paused){const e=this.currentTime();this.lastAdvanceTime||(this.lastAdvanceTime=e),e-this.lastAdvanceTime>this.advancePeriod?(this.advance(),this.lastAdvanceTime=e):this.updateHead()}}updateNodeID(e,n){this.nodeIDs[e]=n;const i=this.geometry.getAttribute("nodeID"),r=this.geometry.getAttribute("nodeVertexID");for(let o=0;o<this.VerticesPerNode;o++){const a=e*this.VerticesPerNode+o;i.array[a]=n,r.array[a]=o}i.needsUpdate=!0,r.needsUpdate=!0,i.updateRange.offset=e*this.VerticesPerNode,i.updateRange.count=this.VerticesPerNode,r.updateRange.offset=e*this.VerticesPerNode,r.updateRange.count=this.VerticesPerNode}updateNodeCenter(e,n){this.lastNodeCenter=this.currentNodeCenter,this.currentNodeCenter=this.nodeCenters[e],this.currentNodeCenter.copy(n);const i=this.geometry.getAttribute("nodeCenter");for(let r=0;r<this.VerticesPerNode;r++){const o=(e*this.VerticesPerNode+r)*3;i.array[o]=n.x,i.array[o+1]=n.y,i.array[o+2]=n.z}i.needsUpdate=!0,i.updateRange.offset=e*this.VerticesPerNode*Wt.PositionComponentCount,i.updateRange.count=this.VerticesPerNode*Wt.PositionComponentCount}deactivate(){this.isActive&&(this.scene.remove(this.mesh),this.isActive=!1)}activate(){this.isActive||(this.scene.add(this.mesh),this.isActive=!0)}static createMaterial(e,n,i){return i=i||{},i.trailLength={type:"f",value:null},i.verticesPerNode={type:"f",value:null},i.minID={type:"f",value:null},i.maxID={type:"f",value:null},i.dragTexture={type:"f",value:null},i.maxTrailLength={type:"f",value:null},i.textureTileFactor={type:"v2",value:null},i.headColor={type:"v4",value:new Ie},i.tailColor={type:"v4",value:new Ie},e=e||Wt.Shader.BaseVertexShader,n=n||Wt.Shader.BaseFragmentShader,new $n({uniforms:i,vertexShader:e,fragmentShader:n,transparent:!0,alphaTest:.5,blending:bp,blendSrc:hc,blendDst:dc,blendEquation:cs,depthTest:!0,depthWrite:!1,side:fi})}static createBaseMaterial(e){return Wt.createMaterial(Wt.Shader.BaseVertexShader,Wt.Shader.BaseFragmentShader,e)}static createTexturedMaterial(e){return e={},e.trailTexture={type:"t",value:null},Wt.createMaterial(Wt.Shader.TexturedVertexShader,Wt.Shader.TexturedFragmentShader,e)}static get MaxHeadVertices(){return 128}static get LocalOrientationTangent(){return _LocalOrientationTangent}static get LocalHeadOrigin(){return _LocalHeadOrigin}static get PositionComponentCount(){return 3}static get UVComponentCount(){return 2}static get IndicesPerFace(){return 3}static get FacesPerQuad(){return 2}};Jn(Wt,"_LocalOrientationTangent",new U(1,0,0)),Jn(Wt,"_LocalHeadOrigin",new U(0,0,0)),Jn(Wt,"Shader",{get BaseVertexVars(){return["attribute float nodeID;","attribute float nodeVertexID;","attribute vec3 nodeCenter;","uniform float minID;","uniform float maxID;","uniform float trailLength;","uniform float maxTrailLength;","uniform float verticesPerNode;","uniform vec2 textureTileFactor;","uniform vec4 headColor;","uniform vec4 tailColor;","varying vec4 vColor;"].join(`
`)},get TexturedVertexVars(){return[this.BaseVertexVars,"varying vec2 vUV;","uniform float dragTexture;"].join(`
`)},BaseFragmentVars:["varying vec4 vColor;","uniform sampler2D trailTexture;"].join(`
`),get TexturedFragmentVars(){return[this.BaseFragmentVars,"varying vec2 vUV;"].join(`
`)},get VertexShaderCore(){return["float fraction = (maxID - nodeID) / (maxID - minID);","vColor = (1.0 - fraction) * headColor + fraction * tailColor;","vec4 realPosition = vec4((1.0 - fraction) * position.xyz + fraction * nodeCenter.xyz, 1.0); "].join(`
`)},get BaseVertexShader(){return[this.BaseVertexVars,"void main() { ",this.VertexShaderCore,"gl_Position = projectionMatrix * viewMatrix * realPosition;","}"].join(`
`)},get BaseFragmentShader(){return[this.BaseFragmentVars,"void main() { ","gl_FragColor = vColor;","}"].join(`
`)},get TexturedVertexShader(){return[this.TexturedVertexVars,"void main() { ",this.VertexShaderCore,"float s = 0.0;","float t = 0.0;","if (dragTexture == 1.0) { ","   s = fraction *  textureTileFactor.s; ","     t = (nodeVertexID / verticesPerNode) * textureTileFactor.t;","} else { ","    s = nodeID / maxTrailLength * textureTileFactor.s;","     t = (nodeVertexID / verticesPerNode) * textureTileFactor.t;","}","vUV = vec2(s, t); ","gl_Position = projectionMatrix * viewMatrix * realPosition;","}"].join(`
`)},get TexturedFragmentShader(){return[this.TexturedFragmentVars,"void main() { ","vec4 textureColor = texture2D(trailTexture, vUV);","gl_FragColor = vColor * textureColor;","}"].join(`
`)}});let Ac=Wt;const e_="14.7.77",tp=(s,t,e)=>({endTime:t,insertTime:e,type:"exponentialRampToValue",value:s}),ep=(s,t,e)=>({endTime:t,insertTime:e,type:"linearRampToValue",value:s}),Nu=(s,t)=>({startTime:t,type:"setValue",value:s}),n_=(s,t,e)=>({duration:e,startTime:t,type:"setValueCurve",values:s}),i_=(s,t,{startTime:e,target:n,timeConstant:i})=>n+(t-n)*Math.exp((e-s)/i),Wr=s=>s.type==="exponentialRampToValue",Cc=s=>s.type==="linearRampToValue",as=s=>Wr(s)||Cc(s),Sh=s=>s.type==="setValue",Ui=s=>s.type==="setValueCurve",Rc=(s,t,e,n)=>{const i=s[t];return i===void 0?n:as(i)||Sh(i)?i.value:Ui(i)?i.values[i.values.length-1]:i_(e,Rc(s,t-1,i.startTime,n),i)},np=(s,t,e,n,i)=>e===void 0?[n.insertTime,i]:as(e)?[e.endTime,e.value]:Sh(e)?[e.startTime,e.value]:Ui(e)?[e.startTime+e.duration,e.values[e.values.length-1]]:[e.startTime,Rc(s,t-1,e.startTime,i)],Iu=s=>s.type==="cancelAndHold",Ou=s=>s.type==="cancelScheduledValues",os=s=>Iu(s)||Ou(s)?s.cancelTime:Wr(s)||Cc(s)?s.endTime:s.startTime,ip=(s,t,e,{endTime:n,value:i})=>e===i?i:0<e&&0<i||e<0&&i<0?e*(i/e)**((s-t)/(n-t)):0,sp=(s,t,e,{endTime:n,value:i})=>e+(s-t)/(n-t)*(i-e),Nb=(s,t)=>{const e=Math.floor(t),n=Math.ceil(t);return e===n?s[e]:(1-(t-e))*s[e]+(1-(n-t))*s[n]},Ib=(s,{duration:t,startTime:e,values:n})=>{const i=(s-e)/t*(n.length-1);return Nb(n,i)},ec=s=>s.type==="setTarget";class Ob{constructor(t){this._automationEvents=[],this._currenTime=0,this._defaultValue=t}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(t){const e=os(t);if(Iu(t)||Ou(t)){const n=this._automationEvents.findIndex(r=>Ou(t)&&Ui(r)?r.startTime+r.duration>=e:os(r)>=e),i=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),Iu(t)){const r=this._automationEvents[this._automationEvents.length-1];if(i!==void 0&&as(i)){if(r!==void 0&&ec(r))throw new Error("The internal list is malformed.");const o=r===void 0?i.insertTime:Ui(r)?r.startTime+r.duration:os(r),a=r===void 0?this._defaultValue:Ui(r)?r.values[r.values.length-1]:r.value,c=Wr(i)?ip(e,o,a,i):sp(e,o,a,i),l=Wr(i)?tp(c,e,this._currenTime):ep(c,e,this._currenTime);this._automationEvents.push(l)}if(r!==void 0&&ec(r)&&this._automationEvents.push(Nu(this.getValue(e),e)),r!==void 0&&Ui(r)&&r.startTime+r.duration>e){const o=e-r.startTime,a=(r.values.length-1)/r.duration,c=Math.max(2,1+Math.ceil(o*a)),l=o/(c-1)*a,u=r.values.slice(0,c);if(l<1)for(let h=1;h<c;h+=1){const d=l*h%1;u[h]=r.values[h-1]*(1-d)+r.values[h]*d}this._automationEvents[this._automationEvents.length-1]=n_(u,r.startTime,o)}}}else{const n=this._automationEvents.findIndex(o=>os(o)>e),i=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(i!==void 0&&Ui(i)&&os(i)+i.duration>e)return!1;const r=Wr(t)?tp(t.value,t.endTime,this._currenTime):Cc(t)?ep(t.value,e,this._currenTime):t;if(n===-1)this._automationEvents.push(r);else{if(Ui(t)&&e+t.duration>os(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,r)}}return!0}flush(t){const e=this._automationEvents.findIndex(n=>os(n)>t);if(e>1){const n=this._automationEvents.slice(e-1),i=n[0];ec(i)&&n.unshift(Nu(Rc(this._automationEvents,e-2,i.startTime,this._defaultValue),i.startTime)),this._automationEvents=n}}getValue(t){if(this._automationEvents.length===0)return this._defaultValue;const e=this._automationEvents.findIndex(o=>os(o)>t),n=this._automationEvents[e],i=(e===-1?this._automationEvents.length:e)-1,r=this._automationEvents[i];if(r!==void 0&&ec(r)&&(n===void 0||!as(n)||n.insertTime>t))return i_(t,Rc(this._automationEvents,i-1,r.startTime,this._defaultValue),r);if(r!==void 0&&Sh(r)&&(n===void 0||!as(n)))return r.value;if(r!==void 0&&Ui(r)&&(n===void 0||!as(n)||r.startTime+r.duration>t))return t<r.startTime+r.duration?Ib(t,r):r.values[r.values.length-1];if(r!==void 0&&as(r)&&(n===void 0||!as(n)))return r.value;if(n!==void 0&&Wr(n)){const[o,a]=np(this._automationEvents,i,r,n,this._defaultValue);return ip(t,o,a,n)}if(n!==void 0&&Cc(n)){const[o,a]=np(this._automationEvents,i,r,n,this._defaultValue);return sp(t,o,a,n)}return this._defaultValue}}const Fb=s=>({cancelTime:s,type:"cancelAndHold"}),Ub=s=>({cancelTime:s,type:"cancelScheduledValues"}),kb=(s,t)=>({endTime:t,type:"exponentialRampToValue",value:s}),Bb=(s,t)=>({endTime:t,type:"linearRampToValue",value:s}),Vb=(s,t,e)=>({startTime:t,target:s,timeConstant:e,type:"setTarget"}),zb=()=>new DOMException("","AbortError"),Gb=s=>(t,e,[n,i,r],o)=>{s(t[i],[e,n,r],a=>a[0]===e&&a[1]===n,o)},Hb=s=>(t,e,n)=>{const i=[];for(let r=0;r<n.numberOfInputs;r+=1)i.push(new Set);s.set(t,{activeInputs:i,outputs:new Set,passiveInputs:new WeakMap,renderer:e})},Wb=s=>(t,e)=>{s.set(t,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:e})},co=new WeakSet,s_=new WeakMap,Mh=new WeakMap,r_=new WeakMap,Th=new WeakMap,sl=new WeakMap,o_=new WeakMap,Fu=new WeakMap,Uu=new WeakMap,ku=new WeakMap,a_={construct(){return a_}},Xb=s=>{try{const t=new Proxy(s,a_);new t}catch{return!1}return!0},rp=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,op=(s,t)=>{const e=[];let n=s.replace(/^[\s]+/,""),i=n.match(rp);for(;i!==null;){const r=i[1].slice(1,-1),o=i[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,t).toString());e.push(o),n=n.slice(i[0].length).replace(/^[\s]+/,""),i=n.match(rp)}return[e.join(";"),n]},ap=s=>{if(s!==void 0&&!Array.isArray(s))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},cp=s=>{if(!Xb(s))throw new TypeError("The given value for processorCtor should be a constructor.");if(s.prototype===null||typeof s.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},qb=(s,t,e,n,i,r,o,a,c,l,u,h,d)=>{let m=0;return(g,_,f={credentials:"omit"})=>{const p=u.get(g);if(p!==void 0&&p.has(_))return Promise.resolve();const x=l.get(g);if(x!==void 0){const S=x.get(_);if(S!==void 0)return S}const v=r(g),M=v.audioWorklet===void 0?i(_).then(([S,b])=>{const[T,A]=op(S,b),N=`${T};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${A}
})})(window,'_AWGS')`;return e(N)}).then(()=>{const S=d._AWGS.pop();if(S===void 0)throw new SyntaxError;n(v.currentTime,v.sampleRate,()=>S(class{},void 0,(b,T)=>{if(b.trim()==="")throw t();const A=Uu.get(v);if(A!==void 0){if(A.has(b))throw t();cp(T),ap(T.parameterDescriptors),A.set(b,T)}else cp(T),ap(T.parameterDescriptors),Uu.set(v,new Map([[b,T]]))},v.sampleRate,void 0,void 0))}):Promise.all([i(_),Promise.resolve(s(h,h))]).then(([[S,b],T])=>{const A=m+1;m=A;const[N,y]=op(S,b),P=`${N};((AudioWorkletProcessor,registerProcessor)=>{${y}
})(${T?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${T?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${T?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${A}',class extends AudioWorkletProcessor{process(){return !1}})`,F=new Blob([P],{type:"application/javascript; charset=utf-8"}),O=URL.createObjectURL(F);return v.audioWorklet.addModule(O,f).then(()=>{if(a(v))return v;const B=o(v);return B.audioWorklet.addModule(O,f).then(()=>B)}).then(B=>{if(c===null)throw new SyntaxError;try{new c(B,`__sac${A}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(O))});return x===void 0?l.set(g,new Map([[_,M]])):x.set(_,M),M.then(()=>{const S=u.get(g);S===void 0?u.set(g,new Set([_])):S.add(_)}).finally(()=>{const S=l.get(g);S!==void 0&&S.delete(_)}),M}},ai=(s,t)=>{const e=s.get(t);if(e===void 0)throw new Error("A value with the given key could not be found.");return e},rl=(s,t)=>{const e=Array.from(s).filter(t);if(e.length>1)throw Error("More than one element was found.");if(e.length===0)throw Error("No element was found.");const[n]=e;return s.delete(n),n},c_=(s,t,e,n)=>{const i=ai(s,t),r=rl(i,o=>o[0]===e&&o[1]===n);return i.size===0&&s.delete(t),r},_a=s=>ai(o_,s),lo=s=>{if(co.has(s))throw new Error("The AudioNode is already stored.");co.add(s),_a(s).forEach(t=>t(!0))},l_=s=>"port"in s,ga=s=>{if(!co.has(s))throw new Error("The AudioNode is not stored.");co.delete(s),_a(s).forEach(t=>t(!1))},Bu=(s,t)=>{!l_(s)&&t.every(e=>e.size===0)&&ga(s)},Yb=(s,t,e,n,i,r,o,a,c,l,u,h,d)=>{const m=new WeakMap;return(g,_,f,p,x)=>{const{activeInputs:v,passiveInputs:M}=r(_),{outputs:S}=r(g),b=a(g),T=A=>{const N=c(_),y=c(g);if(A){const E=c_(M,g,f,p);s(v,g,E,!1),!x&&!h(g)&&e(y,N,f,p),d(_)&&lo(_)}else{const E=n(v,g,f,p);t(M,p,E,!1),!x&&!h(g)&&i(y,N,f,p);const L=o(_);if(L===0)u(_)&&Bu(_,v);else{const k=m.get(_);k!==void 0&&clearTimeout(k),m.set(_,setTimeout(()=>{u(_)&&Bu(_,v)},L*1e3))}}};return l(S,[_,f,p],A=>A[0]===_&&A[1]===f&&A[2]===p,!0)?(b.add(T),u(g)?s(v,g,[f,p,T],!0):t(M,p,[g,f,T],!0),!0):!1}},jb=s=>(t,e,[n,i,r],o)=>{const a=t.get(n);a===void 0?t.set(n,new Set([[i,e,r]])):s(a,[i,e,r],c=>c[0]===i&&c[1]===e,o)},$b=s=>(t,e)=>{const n=s(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});e.connect(n).connect(t.destination);const i=()=>{e.removeEventListener("ended",i),e.disconnect(n),n.disconnect()};e.addEventListener("ended",i)},Zb=s=>(t,e)=>{s(t).add(e)},Kb={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},Jb=(s,t,e,n,i,r)=>class extends s{constructor(a,c){const l=i(a),u={...Kb,...c},h=n(l,u),d=r(l)?t():null;super(a,!1,h,d),this._nativeAnalyserNode=h}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(a){this._nativeAnalyserNode.fftSize=a}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(a){const c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=a,!(a>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,e()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(a){const c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=a,!(this._nativeAnalyserNode.maxDecibels>a))throw this._nativeAnalyserNode.minDecibels=c,e()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(a){this._nativeAnalyserNode.smoothingTimeConstant=a}getByteFrequencyData(a){this._nativeAnalyserNode.getByteFrequencyData(a)}getByteTimeDomainData(a){this._nativeAnalyserNode.getByteTimeDomainData(a)}getFloatFrequencyData(a){this._nativeAnalyserNode.getFloatFrequencyData(a)}getFloatTimeDomainData(a){this._nativeAnalyserNode.getFloatTimeDomainData(a)}},cn=(s,t)=>s.context===t,Qb=(s,t,e)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=t(r);if(!cn(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,fftSize:a.fftSize,maxDecibels:a.maxDecibels,minDecibels:a.minDecibels,smoothingTimeConstant:a.smoothingTimeConstant};a=s(o,l)}return n.set(o,a),await e(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},Pc=s=>{try{s.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},Ei=()=>new DOMException("","IndexSizeError"),bh=s=>{s.getChannelData=(t=>e=>{try{return t.call(s,e)}catch(n){throw n.code===12?Ei():n}})(s.getChannelData)},tE={numberOfChannels:1},eE=(s,t,e,n,i,r,o,a)=>{let c=null;return class u_{constructor(u){if(i===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:h,numberOfChannels:d,sampleRate:m}={...tE,...u};c===null&&(c=new i(1,1,44100));const g=n!==null&&t(r,r)?new n({length:h,numberOfChannels:d,sampleRate:m}):c.createBuffer(d,h,m);if(g.numberOfChannels===0)throw e();return typeof g.copyFromChannel!="function"?(o(g),bh(g)):t(Pc,()=>Pc(g))||a(g),s.add(g),g}static[Symbol.hasInstance](u){return u!==null&&typeof u=="object"&&Object.getPrototypeOf(u)===u_.prototype||s.has(u)}}},Sn=-34028234663852886e22,dn=-Sn,Wi=s=>co.has(s),nE={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},iE=(s,t,e,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d={...nE,...u},m=i(h,d),g=o(h),_=g?t():null;super(l,!1,m,_),this._audioBufferSourceNodeRenderer=_,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=m,this._onended=null,this._playbackRate=e(this,g,m.playbackRate,dn,Sn)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const u=typeof l=="function"?a(this,l):null;this._nativeAudioBufferSourceNode.onended=u;const h=this._nativeAudioBufferSourceNode.onended;this._onended=h!==null&&h===u?l:h}get playbackRate(){return this._playbackRate}start(l=0,u=0,h){if(this._nativeAudioBufferSourceNode.start(l,u,h),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=h===void 0?[l,u]:[l,u,h]),this.context.state!=="closed"){lo(this);const d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),Wi(this)&&ga(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},sE=(s,t,e,n,i)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,u)=>{let h=e(l);const d=cn(h,u);if(!d){const m={buffer:h.buffer,channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,loop:h.loop,loopEnd:h.loopEnd,loopStart:h.loopStart,playbackRate:h.playbackRate.value};h=t(u,m),o!==null&&h.start(...o),a!==null&&h.stop(a)}return r.set(u,h),d?await s(u,l.playbackRate,h.playbackRate):await n(u,l.playbackRate,h.playbackRate),await i(l,u,h),h};return{set start(l){o=l},set stop(l){a=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},rE=s=>"playbackRate"in s,oE=s=>"frequency"in s&&"gain"in s,aE=s=>"offset"in s,cE=s=>!("frequency"in s)&&"gain"in s,lE=s=>"detune"in s&&"frequency"in s,uE=s=>"pan"in s,_n=s=>ai(s_,s),va=s=>ai(r_,s),Vu=(s,t)=>{const{activeInputs:e}=_n(s);e.forEach(i=>i.forEach(([r])=>{t.includes(s)||Vu(r,[...t,s])}));const n=rE(s)?[s.playbackRate]:l_(s)?Array.from(s.parameters.values()):oE(s)?[s.Q,s.detune,s.frequency,s.gain]:aE(s)?[s.offset]:cE(s)?[s.gain]:lE(s)?[s.detune,s.frequency]:uE(s)?[s.pan]:[];for(const i of n){const r=va(i);r!==void 0&&r.activeInputs.forEach(([o])=>Vu(o,t))}Wi(s)&&ga(s)},h_=s=>{Vu(s.destination,[])},hE=s=>s===void 0||typeof s=="number"||typeof s=="string"&&(s==="balanced"||s==="interactive"||s==="playback"),dE=(s,t,e,n,i,r,o,a,c)=>class extends s{constructor(u={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let h;try{h=new c(u)}catch(g){throw g.code===12&&g.message==="sampleRate is not in range"?e():g}if(h===null)throw n();if(!hE(u.latencyHint))throw new TypeError(`The provided value '${u.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(u.sampleRate!==void 0&&h.sampleRate!==u.sampleRate)throw e();super(h,2);const{latencyHint:d}=u,{sampleRate:m}=h;if(this._baseLatency=typeof h.baseLatency=="number"?h.baseLatency:d==="balanced"?512/m:d==="interactive"||d===void 0?256/m:d==="playback"?1024/m:Math.max(2,Math.min(128,Math.round(d*m/128)))*128/m,this._nativeAudioContext=h,c.name==="webkitAudioContext"?(this._nativeGainNode=h.createGain(),this._nativeOscillatorNode=h.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(h.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,h.state==="running"){this._state="suspended";const g=()=>{this._state==="suspended"&&(this._state=null),h.removeEventListener("statechange",g)};h.addEventListener("statechange",g)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw t()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),h_(this)}))}createMediaElementSource(u){return new i(this,{mediaElement:u})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(u){return new o(this,{mediaStream:u})}createMediaStreamTrackSource(u){return new a(this,{mediaStreamTrack:u})}resume(){return this._state==="suspended"?new Promise((u,h)=>{const d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?u():this.resume().then(u,h)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(u=>{throw u===void 0||u.code===15?t():u})}suspend(){return this._nativeAudioContext.suspend().catch(u=>{throw u===void 0?t():u})}},fE=(s,t,e,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d=o(h),m=i(h,u,d),g=d?t(a):null;super(l,!1,m,g),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=m}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw e();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},pE=s=>{const t=new WeakMap,e=async(n,i)=>{const r=i.destination;return t.set(i,r),await s(n,i,r),r};return{render(n,i){const r=t.get(i);return r!==void 0?Promise.resolve(r):e(n,i)}}},mE=(s,t,e,n,i,r,o,a)=>(c,l)=>{const u=l.listener,h=()=>{const S=new Float32Array(1),b=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),T=o(l);let A=!1,N=[0,0,-1,0,1,0],y=[0,0,0];const E=()=>{if(A)return;A=!0;const F=n(l,256,9,0);F.onaudioprocess=({inputBuffer:O})=>{const B=[r(O,S,0),r(O,S,1),r(O,S,2),r(O,S,3),r(O,S,4),r(O,S,5)];B.some((H,q)=>H!==N[q])&&(u.setOrientation(...B),N=B);const z=[r(O,S,6),r(O,S,7),r(O,S,8)];z.some((H,q)=>H!==y[q])&&(u.setPosition(...z),y=z)},b.connect(F)},L=F=>O=>{O!==N[F]&&(N[F]=O,u.setOrientation(...N))},k=F=>O=>{O!==y[F]&&(y[F]=O,u.setPosition(...y))},P=(F,O,B)=>{const z=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:O});z.connect(b,0,F),z.start(),Object.defineProperty(z.offset,"defaultValue",{get(){return O}});const H=s({context:c},T,z.offset,dn,Sn);return a(H,"value",q=>()=>q.call(H),q=>j=>{try{q.call(H,j)}catch(Q){if(Q.code!==9)throw Q}E(),T&&B(j)}),H.cancelAndHoldAtTime=(q=>T?()=>{throw i()}:(...j)=>{const Q=q.apply(H,j);return E(),Q})(H.cancelAndHoldAtTime),H.cancelScheduledValues=(q=>T?()=>{throw i()}:(...j)=>{const Q=q.apply(H,j);return E(),Q})(H.cancelScheduledValues),H.exponentialRampToValueAtTime=(q=>T?()=>{throw i()}:(...j)=>{const Q=q.apply(H,j);return E(),Q})(H.exponentialRampToValueAtTime),H.linearRampToValueAtTime=(q=>T?()=>{throw i()}:(...j)=>{const Q=q.apply(H,j);return E(),Q})(H.linearRampToValueAtTime),H.setTargetAtTime=(q=>T?()=>{throw i()}:(...j)=>{const Q=q.apply(H,j);return E(),Q})(H.setTargetAtTime),H.setValueAtTime=(q=>T?()=>{throw i()}:(...j)=>{const Q=q.apply(H,j);return E(),Q})(H.setValueAtTime),H.setValueCurveAtTime=(q=>T?()=>{throw i()}:(...j)=>{const Q=q.apply(H,j);return E(),Q})(H.setValueCurveAtTime),H};return{forwardX:P(0,0,L(0)),forwardY:P(1,0,L(1)),forwardZ:P(2,-1,L(2)),positionX:P(6,0,k(0)),positionY:P(7,0,k(1)),positionZ:P(8,0,k(2)),upX:P(3,0,L(3)),upY:P(4,1,L(4)),upZ:P(5,0,L(5))}},{forwardX:d,forwardY:m,forwardZ:g,positionX:_,positionY:f,positionZ:p,upX:x,upY:v,upZ:M}=u.forwardX===void 0?h():u;return{get forwardX(){return d},get forwardY(){return m},get forwardZ(){return g},get positionX(){return _},get positionY(){return f},get positionZ(){return p},get upX(){return x},get upY(){return v},get upZ(){return M}}},Dc=s=>"context"in s,xa=s=>Dc(s[0]),fr=(s,t,e,n)=>{for(const i of s)if(e(i)){if(n)return!1;throw Error("The set contains at least one similar element.")}return s.add(t),!0},lp=(s,t,[e,n],i)=>{fr(s,[t,e,n],r=>r[0]===t&&r[1]===e,i)},up=(s,[t,e,n],i)=>{const r=s.get(t);r===void 0?s.set(t,new Set([[e,n]])):fr(r,[e,n],o=>o[0]===e,i)},go=s=>"inputs"in s,Lc=(s,t,e,n)=>{if(go(t)){const i=t.inputs[n];return s.connect(i,e,0),[i,e,0]}return s.connect(t,e,n),[t,e,n]},d_=(s,t,e)=>{for(const n of s)if(n[0]===t&&n[1]===e)return s.delete(n),n;return null},_E=(s,t,e)=>rl(s,n=>n[0]===t&&n[1]===e),f_=(s,t)=>{if(!_a(s).delete(t))throw new Error("Missing the expected event listener.")},p_=(s,t,e)=>{const n=ai(s,t),i=rl(n,r=>r[0]===e);return n.size===0&&s.delete(t),i},Nc=(s,t,e,n)=>{go(t)?s.disconnect(t.inputs[n],e,0):s.disconnect(t,e,n)},de=s=>ai(Mh,s),$o=s=>ai(Th,s),sr=s=>Fu.has(s),lc=s=>!co.has(s),hp=(s,t)=>new Promise(e=>{if(t!==null)e(!0);else{const n=s.createScriptProcessor(256,1,1),i=s.createGain(),r=s.createBuffer(1,2,44100),o=r.getChannelData(0);o[0]=1,o[1]=1;const a=s.createBufferSource();a.buffer=r,a.loop=!0,a.connect(n).connect(s.destination),a.connect(i),a.disconnect(i),n.onaudioprocess=c=>{const l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,u=>u===1)?e(!0):e(!1),a.stop(),n.onaudioprocess=null,a.disconnect(n),n.disconnect(s.destination)},a.start()}}),ou=(s,t)=>{const e=new Map;for(const n of s)for(const i of n){const r=e.get(i);e.set(i,r===void 0?1:r+1)}e.forEach((n,i)=>t(i,n))},Ic=s=>"context"in s,gE=s=>{const t=new Map;s.connect=(e=>(n,i=0,r=0)=>{const o=Ic(n)?e(n,i,r):e(n,i),a=t.get(n);return a===void 0?t.set(n,[{input:r,output:i}]):a.every(c=>c.input!==r||c.output!==i)&&a.push({input:r,output:i}),o})(s.connect.bind(s)),s.disconnect=(e=>(n,i,r)=>{if(e.apply(s),n===void 0)t.clear();else if(typeof n=="number")for(const[o,a]of t){const c=a.filter(l=>l.output!==n);c.length===0?t.delete(o):t.set(o,c)}else if(t.has(n))if(i===void 0)t.delete(n);else{const o=t.get(n);if(o!==void 0){const a=o.filter(c=>c.output!==i&&(c.input!==r||r===void 0));a.length===0?t.delete(n):t.set(n,a)}}for(const[o,a]of t)a.forEach(c=>{Ic(o)?s.connect(o,c.output,c.input):s.connect(o,c.output)})})(s.disconnect)},vE=(s,t,e,n)=>{const{activeInputs:i,passiveInputs:r}=va(t),{outputs:o}=_n(s),a=_a(s),c=l=>{const u=de(s),h=$o(t);if(l){const d=p_(r,s,e);lp(i,s,d,!1),!n&&!sr(s)&&u.connect(h,e)}else{const d=_E(i,s,e);up(r,d,!1),!n&&!sr(s)&&u.disconnect(h,e)}};return fr(o,[t,e],l=>l[0]===t&&l[1]===e,!0)?(a.add(c),Wi(s)?lp(i,s,[e,c],!0):up(r,[s,e,c],!0),!0):!1},xE=(s,t,e,n)=>{const{activeInputs:i,passiveInputs:r}=_n(t),o=d_(i[n],s,e);return o===null?[c_(r,s,e,n)[2],!1]:[o[2],!0]},yE=(s,t,e)=>{const{activeInputs:n,passiveInputs:i}=va(t),r=d_(n,s,e);return r===null?[p_(i,s,e)[1],!1]:[r[2],!0]},Eh=(s,t,e,n,i)=>{const[r,o]=xE(s,e,n,i);if(r!==null&&(f_(s,r),o&&!t&&!sr(s)&&Nc(de(s),de(e),n,i)),Wi(e)){const{activeInputs:a}=_n(e);Bu(e,a)}},wh=(s,t,e,n)=>{const[i,r]=yE(s,e,n);i!==null&&(f_(s,i),r&&!t&&!sr(s)&&de(s).disconnect($o(e),n))},SE=(s,t)=>{const e=_n(s),n=[];for(const i of e.outputs)xa(i)?Eh(s,t,...i):wh(s,t,...i),n.push(i[0]);return e.outputs.clear(),n},ME=(s,t,e)=>{const n=_n(s),i=[];for(const r of n.outputs)r[1]===e&&(xa(r)?Eh(s,t,...r):wh(s,t,...r),i.push(r[0]),n.outputs.delete(r));return i},TE=(s,t,e,n,i)=>{const r=_n(s);return Array.from(r.outputs).filter(o=>o[0]===e&&(n===void 0||o[1]===n)&&(i===void 0||o[2]===i)).map(o=>(xa(o)?Eh(s,t,...o):wh(s,t,...o),r.outputs.delete(o),o[0]))},bE=(s,t,e,n,i,r,o,a,c,l,u,h,d,m,g,_)=>class extends l{constructor(p,x,v,M){super(v),this._context=p,this._nativeAudioNode=v;const S=u(p);h(S)&&e(hp,()=>hp(S,_))!==!0&&gE(v),Mh.set(this,v),o_.set(this,new Set),p.state!=="closed"&&x&&lo(this),s(this,M,v)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(p){this._nativeAudioNode.channelCount=p}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(p){this._nativeAudioNode.channelCountMode=p}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(p){this._nativeAudioNode.channelInterpretation=p}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(p,x=0,v=0){if(x<0||x>=this._nativeAudioNode.numberOfOutputs)throw i();const M=u(this._context),S=g(M);if(d(p)||m(p))throw r();if(Dc(p)){const A=de(p);try{const y=Lc(this._nativeAudioNode,A,x,v),E=lc(this);(S||E)&&this._nativeAudioNode.disconnect(...y),this.context.state!=="closed"&&!E&&lc(p)&&lo(p)}catch(y){throw y.code===12?r():y}if(t(this,p,x,v,S)){const y=c([this],p);ou(y,n(S))}return p}const b=$o(p);if(b.name==="playbackRate"&&b.maxValue===1024)throw o();try{this._nativeAudioNode.connect(b,x),(S||lc(this))&&this._nativeAudioNode.disconnect(b,x)}catch(A){throw A.code===12?r():A}if(vE(this,p,x,S)){const A=c([this],p);ou(A,n(S))}}disconnect(p,x,v){let M;const S=u(this._context),b=g(S);if(p===void 0)M=SE(this,b);else if(typeof p=="number"){if(p<0||p>=this.numberOfOutputs)throw i();M=ME(this,b,p)}else{if(x!==void 0&&(x<0||x>=this.numberOfOutputs)||Dc(p)&&v!==void 0&&(v<0||v>=p.numberOfInputs))throw i();if(M=TE(this,b,p,x,v),M.length===0)throw r()}for(const T of M){const A=c([this],T);ou(A,a)}}},EE=(s,t,e,n,i,r,o,a,c,l,u,h,d)=>(m,g,_,f=null,p=null)=>{const x=_.value,v=new Ob(x),M=g?n(v):null,S={get defaultValue(){return x},get maxValue(){return f===null?_.maxValue:f},get minValue(){return p===null?_.minValue:p},get value(){return _.value},set value(b){_.value=b,S.setValueAtTime(b,m.context.currentTime)},cancelAndHoldAtTime(b){if(typeof _.cancelAndHoldAtTime=="function")M===null&&v.flush(m.context.currentTime),v.add(i(b)),_.cancelAndHoldAtTime(b);else{const T=Array.from(v).pop();M===null&&v.flush(m.context.currentTime),v.add(i(b));const A=Array.from(v).pop();_.cancelScheduledValues(b),T!==A&&A!==void 0&&(A.type==="exponentialRampToValue"?_.exponentialRampToValueAtTime(A.value,A.endTime):A.type==="linearRampToValue"?_.linearRampToValueAtTime(A.value,A.endTime):A.type==="setValue"?_.setValueAtTime(A.value,A.startTime):A.type==="setValueCurve"&&_.setValueCurveAtTime(A.values,A.startTime,A.duration))}return S},cancelScheduledValues(b){return M===null&&v.flush(m.context.currentTime),v.add(r(b)),_.cancelScheduledValues(b),S},exponentialRampToValueAtTime(b,T){if(b===0)throw new RangeError;if(!Number.isFinite(T)||T<0)throw new RangeError;const A=m.context.currentTime;return M===null&&v.flush(A),Array.from(v).length===0&&(v.add(l(x,A)),_.setValueAtTime(x,A)),v.add(o(b,T)),_.exponentialRampToValueAtTime(b,T),S},linearRampToValueAtTime(b,T){const A=m.context.currentTime;return M===null&&v.flush(A),Array.from(v).length===0&&(v.add(l(x,A)),_.setValueAtTime(x,A)),v.add(a(b,T)),_.linearRampToValueAtTime(b,T),S},setTargetAtTime(b,T,A){return M===null&&v.flush(m.context.currentTime),v.add(c(b,T,A)),_.setTargetAtTime(b,T,A),S},setValueAtTime(b,T){return M===null&&v.flush(m.context.currentTime),v.add(l(b,T)),_.setValueAtTime(b,T),S},setValueCurveAtTime(b,T,A){const N=b instanceof Float32Array?b:new Float32Array(b);if(h!==null&&h.name==="webkitAudioContext"){const y=T+A,E=m.context.sampleRate,L=Math.ceil(T*E),k=Math.floor(y*E),P=k-L,F=new Float32Array(P);for(let B=0;B<P;B+=1){const z=(N.length-1)/A*((L+B)/E-T),H=Math.floor(z),q=Math.ceil(z);F[B]=H===q?N[H]:(1-(z-H))*N[H]+(1-(q-z))*N[q]}M===null&&v.flush(m.context.currentTime),v.add(u(F,T,A)),_.setValueCurveAtTime(F,T,A);const O=k/E;O<y&&d(S,F[F.length-1],O),d(S,N[N.length-1],y)}else M===null&&v.flush(m.context.currentTime),v.add(u(N,T,A)),_.setValueCurveAtTime(N,T,A);return S}};return e.set(S,_),t.set(S,m),s(S,M),S},wE=s=>({replay(t){for(const e of s)if(e.type==="exponentialRampToValue"){const{endTime:n,value:i}=e;t.exponentialRampToValueAtTime(i,n)}else if(e.type==="linearRampToValue"){const{endTime:n,value:i}=e;t.linearRampToValueAtTime(i,n)}else if(e.type==="setTarget"){const{startTime:n,target:i,timeConstant:r}=e;t.setTargetAtTime(i,n,r)}else if(e.type==="setValue"){const{startTime:n,value:i}=e;t.setValueAtTime(i,n)}else if(e.type==="setValueCurve"){const{duration:n,startTime:i,values:r}=e;t.setValueCurveAtTime(r,i,n)}else throw new Error("Can't apply an unknown automation.")}});class m_{constructor(t){this._map=new Map(t)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(t,e=null){return this._map.forEach((n,i)=>t.call(e,n,i,this))}get(t){return this._map.get(t)}has(t){return this._map.has(t)}keys(){return this._map.keys()}values(){return this._map.values()}}const AE={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},CE=(s,t,e,n,i,r,o,a,c,l,u,h,d,m)=>class extends t{constructor(_,f,p){var x;const v=a(_),M=c(v),S=u({...AE,...p});d(S);const b=Uu.get(v),T=b==null?void 0:b.get(f),A=M||v.state!=="closed"?v:(x=o(v))!==null&&x!==void 0?x:v,N=i(A,M?null:_.baseLatency,l,f,T,S),y=M?n(f,S,T):null;super(_,!0,N,y);const E=[];N.parameters.forEach((k,P)=>{const F=e(this,M,k);E.push([P,F])}),this._nativeAudioWorkletNode=N,this._onprocessorerror=null,this._parameters=new m_(E),M&&s(v,this);const{activeInputs:L}=r(this);h(N,L)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(_){const f=typeof _=="function"?m(this,_):null;this._nativeAudioWorkletNode.onprocessorerror=f;const p=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=p!==null&&p===f?_:p}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function Oc(s,t,e,n,i){if(typeof s.copyFromChannel=="function")t[e].byteLength===0&&(t[e]=new Float32Array(128)),s.copyFromChannel(t[e],n,i);else{const r=s.getChannelData(n);if(t[e].byteLength===0)t[e]=r.slice(i,i+128);else{const o=new Float32Array(r.buffer,i*Float32Array.BYTES_PER_ELEMENT,128);t[e].set(o)}}}const __=(s,t,e,n,i)=>{typeof s.copyToChannel=="function"?t[e].byteLength!==0&&s.copyToChannel(t[e],n,i):t[e].byteLength!==0&&s.getChannelData(n).set(t[e],i)},Fc=(s,t)=>{const e=[];for(let n=0;n<s;n+=1){const i=[],r=typeof t=="number"?t:t[n];for(let o=0;o<r;o+=1)i.push(new Float32Array(128));e.push(i)}return e},RE=(s,t)=>{const e=ai(ku,s),n=de(t);return ai(e,n)},PE=async(s,t,e,n,i,r,o)=>{const a=t===null?Math.ceil(s.context.length/128)*128:t.length,c=n.channelCount*n.numberOfInputs,l=i.reduce((f,p)=>f+p,0),u=l===0?null:e.createBuffer(l,a,e.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");const h=_n(s),d=await RE(e,s),m=Fc(n.numberOfInputs,n.channelCount),g=Fc(n.numberOfOutputs,i),_=Array.from(s.parameters.keys()).reduce((f,p)=>({...f,[p]:new Float32Array(128)}),{});for(let f=0;f<a;f+=128){if(n.numberOfInputs>0&&t!==null)for(let p=0;p<n.numberOfInputs;p+=1)for(let x=0;x<n.channelCount;x+=1)Oc(t,m[p],x,x,f);r.parameterDescriptors!==void 0&&t!==null&&r.parameterDescriptors.forEach(({name:p},x)=>{Oc(t,_,p,c+x,f)});for(let p=0;p<n.numberOfInputs;p+=1)for(let x=0;x<i[p];x+=1)g[p][x].byteLength===0&&(g[p][x]=new Float32Array(128));try{const p=m.map((v,M)=>h.activeInputs[M].size===0?[]:v),x=o(f/e.sampleRate,e.sampleRate,()=>d.process(p,g,_));if(u!==null)for(let v=0,M=0;v<n.numberOfOutputs;v+=1){for(let S=0;S<i[v];S+=1)__(u,g[v],S,M+S,f);M+=i[v]}if(!x)break}catch(p){s.dispatchEvent(new ErrorEvent("processorerror",{colno:p.colno,filename:p.filename,lineno:p.lineno,message:p.message}));break}}return u},DE=(s,t,e,n,i,r,o,a,c,l,u,h,d,m,g,_)=>(f,p,x)=>{const v=new WeakMap;let M=null;const S=async(b,T)=>{let A=u(b),N=null;const y=cn(A,T),E=Array.isArray(p.outputChannelCount)?p.outputChannelCount:Array.from(p.outputChannelCount);if(h===null){const L=E.reduce((O,B)=>O+B,0),k=i(T,{channelCount:Math.max(1,L),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,L)}),P=[];for(let O=0;O<b.numberOfOutputs;O+=1)P.push(n(T,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:E[O]}));const F=o(T,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1});F.connect=t.bind(null,P),F.disconnect=c.bind(null,P),N=[k,P,F]}else y||(A=new h(T,f));if(v.set(T,N===null?A:N[2]),N!==null){if(M===null){if(x===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");const B=b.channelCount*b.numberOfInputs,z=x.parameterDescriptors===void 0?0:x.parameterDescriptors.length,H=B+z;M=PE(b,H===0?null:await(async()=>{const j=new d(H,Math.ceil(b.context.length/128)*128,T.sampleRate),Q=[],xt=[];for(let ct=0;ct<p.numberOfInputs;ct+=1)Q.push(o(j,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1})),xt.push(i(j,{channelCount:p.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:p.channelCount}));const X=await Promise.all(Array.from(b.parameters.values()).map(async ct=>{const _t=r(j,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:ct.value});return await m(j,ct,_t.offset),_t})),Y=n(j,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,B+z)});for(let ct=0;ct<p.numberOfInputs;ct+=1){Q[ct].connect(xt[ct]);for(let _t=0;_t<p.channelCount;_t+=1)xt[ct].connect(Y,_t,ct*p.channelCount+_t)}for(const[ct,_t]of X.entries())_t.connect(Y,0,B+ct),_t.start(0);return Y.connect(j.destination),await Promise.all(Q.map(ct=>g(b,j,ct))),_(j)})(),T,p,E,x,l)}const L=await M,k=e(T,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[P,F,O]=N;L!==null&&(k.buffer=L,k.start(0)),k.connect(P);for(let B=0,z=0;B<b.numberOfOutputs;B+=1){const H=F[B];for(let q=0;q<E[B];q+=1)P.connect(H,z+q,q);z+=E[B]}return O}if(y)for(const[L,k]of b.parameters.entries())await s(T,k,A.parameters.get(L));else for(const[L,k]of b.parameters.entries())await m(T,k,A.parameters.get(L));return await g(b,T,A),A};return{render(b,T){a(T,b);const A=v.get(T);return A!==void 0?Promise.resolve(A):S(b,T)}}},LE=(s,t,e,n,i,r,o,a,c,l,u,h,d,m,g,_,f,p,x,v)=>class extends g{constructor(S,b){super(S,b),this._nativeContext=S,this._audioWorklet=s===void 0?void 0:{addModule:(T,A)=>s(this,T,A)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new t(this)}createBiquadFilter(){return new i(this)}createBuffer(S,b,T){return new e({length:b,numberOfChannels:S,sampleRate:T})}createBufferSource(){return new n(this)}createChannelMerger(S=6){return new r(this,{numberOfInputs:S})}createChannelSplitter(S=6){return new o(this,{numberOfOutputs:S})}createConstantSource(){return new a(this)}createConvolver(){return new c(this)}createDelay(S=1){return new u(this,{maxDelayTime:S})}createDynamicsCompressor(){return new h(this)}createGain(){return new d(this)}createIIRFilter(S,b){return new m(this,{feedback:b,feedforward:S})}createOscillator(){return new _(this)}createPanner(){return new f(this)}createPeriodicWave(S,b,T={disableNormalization:!1}){return new p(this,{...T,imag:b,real:S})}createStereoPanner(){return new x(this)}createWaveShaper(){return new v(this)}decodeAudioData(S,b,T){return l(this._nativeContext,S).then(A=>(typeof b=="function"&&b(A),A),A=>{throw typeof T=="function"&&T(A),A})}},NE={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},IE=(s,t,e,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d={...NE,...u},m=i(h,d),g=o(h),_=g?e():null;super(l,!1,m,_),this._Q=t(this,g,m.Q,dn,Sn),this._detune=t(this,g,m.detune,1200*Math.log2(dn),-1200*Math.log2(dn)),this._frequency=t(this,g,m.frequency,l.sampleRate/2,0),this._gain=t(this,g,m.gain,40*Math.log10(dn),Sn),this._nativeBiquadFilterNode=m,a(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,u,h){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,u,h)}catch(d){throw d.code===11?n():d}if(l.length!==u.length||u.length!==h.length)throw n()}},OE=(s,t,e,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=e(a);const u=cn(l,c);if(!u){const h={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=t(c,h)}return r.set(c,l),u?(await s(c,a.Q,l.Q),await s(c,a.detune,l.detune),await s(c,a.frequency,l.frequency),await s(c,a.gain,l.gain)):(await n(c,a.Q,l.Q),await n(c,a.detune,l.detune),await n(c,a.frequency,l.frequency),await n(c,a.gain,l.gain)),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},FE=(s,t)=>(e,n)=>{const i=t.get(e);if(i!==void 0)return i;const r=s.get(e);if(r!==void 0)return r;try{const o=n();return o instanceof Promise?(s.set(e,o),o.catch(()=>!1).then(a=>(s.delete(e),t.set(e,a),a))):(t.set(e,o),o)}catch{return t.set(e,!1),!1}},UE={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},kE=(s,t,e,n,i)=>class extends s{constructor(o,a){const c=n(o),l={...UE,...a},u=e(c,l),h=i(c)?t():null;super(o,!1,u,h)}},BE=(s,t,e)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=t(r);if(!cn(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfInputs:a.numberOfInputs};a=s(o,l)}return n.set(o,a),await e(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},VE={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},zE=(s,t,e,n,i,r)=>class extends s{constructor(a,c){const l=n(a),u=r({...VE,...c}),h=e(l,u),d=i(l)?t():null;super(a,!1,h,d)}},GE=(s,t,e)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=t(r);if(!cn(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfOutputs:a.numberOfOutputs};a=s(o,l)}return n.set(o,a),await e(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},HE=s=>(t,e,n)=>s(e,t,n),WE=s=>(t,e,n=0,i=0)=>{const r=t[n];if(r===void 0)throw s();return Ic(e)?r.connect(e,0,i):r.connect(e,0)},XE=s=>(t,e)=>{const n=s(t,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),i=t.createBuffer(1,2,44100);return n.buffer=i,n.loop=!0,n.connect(e),n.start(),()=>{n.stop(),n.disconnect(e)}},qE={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},YE=(s,t,e,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...qE,...l},d=n(u,h),m=r(u),g=m?e():null;super(c,!1,d,g),this._constantSourceNodeRenderer=g,this._nativeConstantSourceNode=d,this._offset=t(this,m,d.offset,dn,Sn),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeConstantSourceNode.onended=l;const u=this._nativeConstantSourceNode.onended;this._onended=u!==null&&u===l?c:u}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){lo(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),Wi(this)&&ga(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},jE=(s,t,e,n,i)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,u)=>{let h=e(l);const d=cn(h,u);if(!d){const m={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,offset:h.offset.value};h=t(u,m),o!==null&&h.start(o),a!==null&&h.stop(a)}return r.set(u,h),d?await s(u,l.offset,h.offset):await n(u,l.offset,h.offset),await i(l,u,h),h};return{set start(l){o=l},set stop(l){a=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},$E=s=>t=>(s[0]=t,s[0]),ZE={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},KE=(s,t,e,n,i,r)=>class extends s{constructor(a,c){const l=n(a),u={...ZE,...c},h=e(l,u),m=i(l)?t():null;super(a,!1,h,m),this._isBufferNullified=!1,this._nativeConvolverNode=h,u.buffer!==null&&r(this,u.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(a){if(this._nativeConvolverNode.buffer=a,a===null&&this._nativeConvolverNode.buffer!==null){const c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(a){this._nativeConvolverNode.normalize=a}},JE=(s,t,e)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=t(r);if(!cn(a,o)){const l={buffer:a.buffer,channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,disableNormalization:!a.normalize};a=s(o,l)}return n.set(o,a),go(a)?await e(r,o,a.inputs[0]):await e(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},QE=(s,t)=>(e,n,i)=>{if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new t(e,n,i)}catch(r){throw r.name==="SyntaxError"?s():r}},tw=()=>new DOMException("","DataCloneError"),dp=s=>{const{port1:t,port2:e}=new MessageChannel;return new Promise(n=>{const i=()=>{e.onmessage=null,t.close(),e.close(),n()};e.onmessage=()=>i();try{t.postMessage(s,[s])}catch{}finally{i()}})},ew=(s,t,e,n,i,r,o,a,c,l,u)=>(h,d)=>{const m=o(h)?h:r(h);if(i.has(d)){const g=e();return Promise.reject(g)}try{i.add(d)}catch{}return t(c,()=>c(m))?m.decodeAudioData(d).then(g=>(dp(d).catch(()=>{}),t(a,()=>a(g))||u(g),s.add(g),g)):new Promise((g,_)=>{const f=async()=>{try{await dp(d)}catch{}},p=x=>{_(x),f()};try{m.decodeAudioData(d,x=>{typeof x.copyFromChannel!="function"&&(l(x),bh(x)),s.add(x),f().then(()=>g(x))},x=>{p(x===null?n():x)})}catch(x){p(x)}})},nw=(s,t,e,n,i,r,o,a)=>(c,l)=>{const u=t.get(c);if(u===void 0)throw new Error("Missing the expected cycle count.");const h=r(c.context),d=a(h);if(u===l){if(t.delete(c),!d&&o(c)){const m=n(c),{outputs:g}=e(c);for(const _ of g)if(xa(_)){const f=n(_[0]);s(m,f,_[1],_[2])}else{const f=i(_[0]);m.connect(f,_[1])}}}else t.set(c,u-l)},iw={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},sw=(s,t,e,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...iw,...l},d=n(u,h),m=r(u),g=m?e(h.maxDelayTime):null;super(c,!1,d,g),this._delayTime=t(this,m,d.delayTime),o(this,h.maxDelayTime)}get delayTime(){return this._delayTime}},rw=(s,t,e,n,i)=>r=>{const o=new WeakMap,a=async(c,l)=>{let u=e(c);const h=cn(u,l);if(!h){const d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,delayTime:u.delayTime.value,maxDelayTime:r};u=t(l,d)}return o.set(l,u),h?await s(l,c.delayTime,u.delayTime):await n(l,c.delayTime,u.delayTime),await i(c,l,u),u};return{render(c,l){const u=o.get(l);return u!==void 0?Promise.resolve(u):a(c,l)}}},ow=s=>(t,e,n,i)=>s(t[i],r=>r[0]===e&&r[1]===n),aw=s=>(t,e)=>{s(t).delete(e)},cw=s=>"delayTime"in s,lw=(s,t,e)=>function n(i,r){const o=Dc(r)?r:e(s,r);if(cw(o))return[];if(i[0]===o)return[i];if(i.includes(o))return[];const{outputs:a}=t(o);return Array.from(a).map(c=>n([...i,o],c[0])).reduce((c,l)=>c.concat(l),[])},nc=(s,t,e)=>{const n=t[e];if(n===void 0)throw s();return n},uw=s=>(t,e=void 0,n=void 0,i=0)=>e===void 0?t.forEach(r=>r.disconnect()):typeof e=="number"?nc(s,t,e).disconnect():Ic(e)?n===void 0?t.forEach(r=>r.disconnect(e)):i===void 0?nc(s,t,n).disconnect(e,0):nc(s,t,n).disconnect(e,0,i):n===void 0?t.forEach(r=>r.disconnect(e)):nc(s,t,n).disconnect(e,0),hw={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},dw=(s,t,e,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d={...hw,...u},m=n(h,d),g=o(h),_=g?e():null;super(l,!1,m,_),this._attack=t(this,g,m.attack),this._knee=t(this,g,m.knee),this._nativeDynamicsCompressorNode=m,this._ratio=t(this,g,m.ratio),this._release=t(this,g,m.release),this._threshold=t(this,g,m.threshold),a(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const u=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=u,i()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const u=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=u,i()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},fw=(s,t,e,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=e(a);const u=cn(l,c);if(!u){const h={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=t(c,h)}return r.set(c,l),u?(await s(c,a.attack,l.attack),await s(c,a.knee,l.knee),await s(c,a.ratio,l.ratio),await s(c,a.release,l.release),await s(c,a.threshold,l.threshold)):(await n(c,a.attack,l.attack),await n(c,a.knee,l.knee),await n(c,a.ratio,l.ratio),await n(c,a.release,l.release),await n(c,a.threshold,l.threshold)),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},pw=()=>new DOMException("","EncodingError"),mw=s=>t=>new Promise((e,n)=>{if(s===null){n(new SyntaxError);return}const i=s.document.head;if(i===null)n(new SyntaxError);else{const r=s.document.createElement("script"),o=new Blob([t],{type:"application/javascript"}),a=URL.createObjectURL(o),c=s.onerror,l=()=>{s.onerror=c,URL.revokeObjectURL(a)};s.onerror=(u,h,d,m,g)=>{if(h===a||h===s.location.href&&d===1&&m===1)return l(),n(g),!1;if(c!==null)return c(u,h,d,m,g)},r.onerror=()=>{l(),n(new SyntaxError)},r.onload=()=>{l(),e()},r.src=a,r.type="module",i.appendChild(r)}}),_w=s=>class{constructor(e){this._nativeEventTarget=e,this._listeners=new WeakMap}addEventListener(e,n,i){if(n!==null){let r=this._listeners.get(n);r===void 0&&(r=s(this,n),typeof n=="function"&&this._listeners.set(n,r)),this._nativeEventTarget.addEventListener(e,r,i)}}dispatchEvent(e){return this._nativeEventTarget.dispatchEvent(e)}removeEventListener(e,n,i){const r=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(e,r===void 0?null:r,i)}},gw=s=>(t,e,n)=>{Object.defineProperties(s,{currentFrame:{configurable:!0,get(){return Math.round(t*e)}},currentTime:{configurable:!0,get(){return t}}});try{return n()}finally{s!==null&&(delete s.currentFrame,delete s.currentTime)}},vw=s=>async t=>{try{const e=await fetch(t);if(e.ok)return[await e.text(),e.url]}catch{}throw s()},xw={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},yw=(s,t,e,n,i,r)=>class extends s{constructor(a,c){const l=i(a),u={...xw,...c},h=n(l,u),d=r(l),m=d?e():null;super(a,!1,h,m),this._gain=t(this,d,h.gain,dn,Sn)}get gain(){return this._gain}},Sw=(s,t,e,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=e(a);const u=cn(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=t(c,h)}return r.set(c,l),u?await s(c,a.gain,l.gain):await n(c,a.gain,l.gain),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},Mw=(s,t)=>e=>t(s,e),Tw=s=>t=>{const e=s(t);if(e.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return e.renderer},bw=s=>t=>{var e;return(e=s.get(t))!==null&&e!==void 0?e:0},Ew=s=>t=>{const e=s(t);if(e.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return e.renderer},ww=s=>t=>s.get(t),Xe=()=>new DOMException("","InvalidStateError"),Aw=s=>t=>{const e=s.get(t);if(e===void 0)throw Xe();return e},Cw=(s,t)=>e=>{let n=s.get(e);if(n!==void 0)return n;if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new t(1,1,44100),s.set(e,n),n},Rw=s=>t=>{const e=s.get(t);if(e===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return e},ol=()=>new DOMException("","InvalidAccessError"),Pw=s=>{s.getFrequencyResponse=(t=>(e,n,i)=>{if(e.length!==n.length||n.length!==i.length)throw ol();return t.call(s,e,n,i)})(s.getFrequencyResponse)},Dw={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},Lw=(s,t,e,n,i,r)=>class extends s{constructor(a,c){const l=n(a),u=i(l),h={...Dw,...c},d=t(l,u?null:a.baseLatency,h),m=u?e(h.feedback,h.feedforward):null;super(a,!1,d,m),Pw(d),this._nativeIIRFilterNode=d,r(this,1)}getFrequencyResponse(a,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(a,c,l)}},g_=(s,t,e,n,i,r,o,a,c,l,u)=>{const h=l.length;let d=a;for(let m=0;m<h;m+=1){let g=e[0]*l[m];for(let _=1;_<i;_+=1){const f=d-_&c-1;g+=e[_]*r[f],g-=s[_]*o[f]}for(let _=i;_<n;_+=1)g+=e[_]*r[d-_&c-1];for(let _=i;_<t;_+=1)g-=s[_]*o[d-_&c-1];r[d]=l[m],o[d]=g,d=d+1&c-1,u[m]=g}return d},Nw=(s,t,e,n)=>{const i=e instanceof Float64Array?e:new Float64Array(e),r=n instanceof Float64Array?n:new Float64Array(n),o=i.length,a=r.length,c=Math.min(o,a);if(i[0]!==1){for(let g=0;g<o;g+=1)r[g]/=i[0];for(let g=1;g<a;g+=1)i[g]/=i[0]}const l=32,u=new Float32Array(l),h=new Float32Array(l),d=t.createBuffer(s.numberOfChannels,s.length,s.sampleRate),m=s.numberOfChannels;for(let g=0;g<m;g+=1){const _=s.getChannelData(g),f=d.getChannelData(g);u.fill(0),h.fill(0),g_(i,o,r,a,c,u,h,0,l,_,f)}return d},Iw=(s,t,e,n,i)=>(r,o)=>{const a=new WeakMap;let c=null;const l=async(u,h)=>{let d=null,m=t(u);const g=cn(m,h);if(h.createIIRFilter===void 0?d=s(h,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):g||(m=h.createIIRFilter(o,r)),a.set(h,d===null?m:d),d!==null){if(c===null){if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");const f=new e(u.context.destination.channelCount,u.context.length,h.sampleRate);c=(async()=>{await n(u,f,f.destination);const p=await i(f);return Nw(p,h,r,o)})()}const _=await c;return d.buffer=_,d.start(0),d}return await n(u,h,m),m};return{render(u,h){const d=a.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},Ow=(s,t,e,n,i,r)=>o=>(a,c)=>{const l=s.get(a);if(l===void 0){if(!o&&r(a)){const u=n(a),{outputs:h}=e(a);for(const d of h)if(xa(d)){const m=n(d[0]);t(u,m,d[1],d[2])}else{const m=i(d[0]);u.disconnect(m,d[1])}}s.set(a,c)}else s.set(a,l+c)},Fw=(s,t)=>e=>{const n=s.get(e);return t(n)||t(e)},Uw=(s,t)=>e=>s.has(e)||t(e),kw=(s,t)=>e=>s.has(e)||t(e),Bw=(s,t)=>e=>{const n=s.get(e);return t(n)||t(e)},Vw=s=>t=>s!==null&&t instanceof s,zw=s=>t=>s!==null&&typeof s.AudioNode=="function"&&t instanceof s.AudioNode,Gw=s=>t=>s!==null&&typeof s.AudioParam=="function"&&t instanceof s.AudioParam,Hw=(s,t)=>e=>s(e)||t(e),Ww=s=>t=>s!==null&&t instanceof s,Xw=s=>s!==null&&s.isSecureContext,qw=(s,t,e,n)=>class extends s{constructor(r,o){const a=e(r),c=t(a,o);if(n(a))throw TypeError();super(r,!0,c,null),this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},Yw={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},jw=(s,t,e,n)=>class extends s{constructor(r,o){const a=e(r);if(n(a))throw new TypeError;const c={...Yw,...o},l=t(a,c);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},$w=(s,t,e,n)=>class extends s{constructor(r,o){const a=e(r),c=t(a,o);if(n(a))throw new TypeError;super(r,!0,c,null),this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},Zw=(s,t,e)=>class extends s{constructor(i,r){const o=e(i),a=t(o,r);super(i,!0,a,null)}},Kw=(s,t,e,n,i,r)=>class extends e{constructor(a,c){super(a),this._nativeContext=a,sl.set(this,a),n(a)&&i.set(a,new Set),this._destination=new s(this,c),this._listener=t(this,a),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(a){const c=typeof a=="function"?r(this,a):null;this._nativeContext.onstatechange=c;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?a:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},Zo=s=>{const t=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const e=s.decodeAudioData(t.buffer,()=>{});return e===void 0?!1:(e.catch(()=>{}),!0)}catch{}return!1},Jw=(s,t)=>(e,n,i)=>{const r=new Set;return e.connect=(o=>(a,c=0,l=0)=>{const u=r.size===0;if(t(a))return o.call(e,a,c,l),s(r,[a,c,l],h=>h[0]===a&&h[1]===c&&h[2]===l,!0),u&&n(),a;o.call(e,a,c),s(r,[a,c],h=>h[0]===a&&h[1]===c,!0),u&&n()})(e.connect),e.disconnect=(o=>(a,c,l)=>{const u=r.size>0;if(a===void 0)o.apply(e),r.clear();else if(typeof a=="number"){o.call(e,a);for(const d of r)d[1]===a&&r.delete(d)}else{t(a)?o.call(e,a,c,l):o.call(e,a,c);for(const d of r)d[0]===a&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&r.delete(d)}const h=r.size===0;u&&h&&i()})(e.disconnect),e},me=(s,t,e)=>{const n=t[e];n!==void 0&&n!==s[e]&&(s[e]=n)},ke=(s,t)=>{me(s,t,"channelCount"),me(s,t,"channelCountMode"),me(s,t,"channelInterpretation")},fp=s=>typeof s.getFloatTimeDomainData=="function",Qw=s=>{s.getFloatTimeDomainData=t=>{const e=new Uint8Array(t.length);s.getByteTimeDomainData(e);const n=Math.max(e.length,s.fftSize);for(let i=0;i<n;i+=1)t[i]=(e[i]-128)*.0078125;return t}},tA=(s,t)=>(e,n)=>{const i=e.createAnalyser();if(ke(i,n),!(n.maxDecibels>n.minDecibels))throw t();return me(i,n,"fftSize"),me(i,n,"maxDecibels"),me(i,n,"minDecibels"),me(i,n,"smoothingTimeConstant"),s(fp,()=>fp(i))||Qw(i),i},eA=s=>s===null?null:s.hasOwnProperty("AudioBuffer")?s.AudioBuffer:null,Me=(s,t,e)=>{const n=t[e];n!==void 0&&n!==s[e].value&&(s[e].value=n)},nA=s=>{s.start=(t=>{let e=!1;return(n=0,i=0,r)=>{if(e)throw Xe();t.call(s,n,i,r),e=!0}})(s.start)},Ah=s=>{s.start=(t=>(e=0,n=0,i)=>{if(typeof i=="number"&&i<0||n<0||e<0)throw new RangeError("The parameters can't be negative.");t.call(s,e,n,i)})(s.start)},Ch=s=>{s.stop=(t=>(e=0)=>{if(e<0)throw new RangeError("The parameter can't be negative.");t.call(s,e)})(s.stop)},iA=(s,t,e,n,i,r,o,a,c,l,u)=>(h,d)=>{const m=h.createBufferSource();return ke(m,d),Me(m,d,"playbackRate"),me(m,d,"buffer"),me(m,d,"loop"),me(m,d,"loopEnd"),me(m,d,"loopStart"),t(e,()=>e(h))||nA(m),t(n,()=>n(h))||c(m),t(i,()=>i(h))||l(m,h),t(r,()=>r(h))||Ah(m),t(o,()=>o(h))||u(m,h),t(a,()=>a(h))||Ch(m),s(h,m),m},sA=s=>s===null?null:s.hasOwnProperty("AudioContext")?s.AudioContext:s.hasOwnProperty("webkitAudioContext")?s.webkitAudioContext:null,rA=(s,t)=>(e,n,i)=>{const r=e.destination;if(r.channelCount!==n)try{r.channelCount=n}catch{}i&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:n});const o=s(e,{channelCount:n,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return t(o,"channelCount",a=>()=>a.call(o),a=>c=>{a.call(o,c);try{r.channelCount=c}catch(l){if(c>r.maxChannelCount)throw l}}),t(o,"channelCountMode",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelCountMode=c}),t(o,"channelInterpretation",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelInterpretation=c}),Object.defineProperty(o,"maxChannelCount",{get:()=>r.maxChannelCount}),o.connect(r),o},oA=s=>s===null?null:s.hasOwnProperty("AudioWorkletNode")?s.AudioWorkletNode:null,aA=s=>{const{port1:t}=new MessageChannel;try{t.postMessage(s)}finally{t.close()}},cA=(s,t,e,n,i)=>(r,o,a,c,l,u)=>{if(a!==null)try{const h=new a(r,c,u),d=new Map;let m=null;if(Object.defineProperties(h,{channelCount:{get:()=>u.channelCount,set:()=>{throw s()}},channelCountMode:{get:()=>"explicit",set:()=>{throw s()}},onprocessorerror:{get:()=>m,set:g=>{typeof m=="function"&&h.removeEventListener("processorerror",m),m=typeof g=="function"?g:null,typeof m=="function"&&h.addEventListener("processorerror",m)}}}),h.addEventListener=(g=>(..._)=>{if(_[0]==="processorerror"){const f=typeof _[1]=="function"?_[1]:typeof _[1]=="object"&&_[1]!==null&&typeof _[1].handleEvent=="function"?_[1].handleEvent:null;if(f!==null){const p=d.get(_[1]);p!==void 0?_[1]=p:(_[1]=x=>{x.type==="error"?(Object.defineProperties(x,{type:{value:"processorerror"}}),f(x)):f(new ErrorEvent(_[0],{...x}))},d.set(f,_[1]))}}return g.call(h,"error",_[1],_[2]),g.call(h,..._)})(h.addEventListener),h.removeEventListener=(g=>(..._)=>{if(_[0]==="processorerror"){const f=d.get(_[1]);f!==void 0&&(d.delete(_[1]),_[1]=f)}return g.call(h,"error",_[1],_[2]),g.call(h,_[0],_[1],_[2])})(h.removeEventListener),u.numberOfOutputs!==0){const g=e(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return h.connect(g).connect(r.destination),i(h,()=>g.disconnect(),()=>g.connect(r.destination))}return h}catch(h){throw h.code===11?n():h}if(l===void 0)throw n();return aA(u),t(r,o,l,u)},v_=(s,t)=>s===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(s*t))))),lA=s=>new Promise((t,e)=>{const{port1:n,port2:i}=new MessageChannel;n.onmessage=({data:r})=>{n.close(),i.close(),t(r)},n.onmessageerror=({data:r})=>{n.close(),i.close(),e(r)},i.postMessage(s)}),uA=async(s,t)=>{const e=await lA(t);return new s(e)},hA=(s,t,e,n)=>{let i=ku.get(s);i===void 0&&(i=new WeakMap,ku.set(s,i));const r=uA(e,n);return i.set(t,r),r},dA=(s,t,e,n,i,r,o,a,c,l,u,h,d)=>(m,g,_,f)=>{if(f.numberOfInputs===0&&f.numberOfOutputs===0)throw c();const p=Array.isArray(f.outputChannelCount)?f.outputChannelCount:Array.from(f.outputChannelCount);if(p.some(J=>J<1))throw c();if(p.length!==f.numberOfOutputs)throw t();if(f.channelCountMode!=="explicit")throw c();const x=f.channelCount*f.numberOfInputs,v=p.reduce((J,tt)=>J+tt,0),M=_.parameterDescriptors===void 0?0:_.parameterDescriptors.length;if(x+M>6||v>6)throw c();const S=new MessageChannel,b=[],T=[];for(let J=0;J<f.numberOfInputs;J+=1)b.push(o(m,{channelCount:f.channelCount,channelCountMode:f.channelCountMode,channelInterpretation:f.channelInterpretation,gain:1})),T.push(i(m,{channelCount:f.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:f.channelCount}));const A=[];if(_.parameterDescriptors!==void 0)for(const{defaultValue:J,maxValue:tt,minValue:Dt,name:gt}of _.parameterDescriptors){const C=r(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:f.parameterData[gt]!==void 0?f.parameterData[gt]:J===void 0?0:J});Object.defineProperties(C.offset,{defaultValue:{get:()=>J===void 0?0:J},maxValue:{get:()=>tt===void 0?dn:tt},minValue:{get:()=>Dt===void 0?Sn:Dt}}),A.push(C)}const N=n(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,x+M)}),y=v_(g,m.sampleRate),E=a(m,y,x+M,Math.max(1,v)),L=i(m,{channelCount:Math.max(1,v),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,v)}),k=[];for(let J=0;J<f.numberOfOutputs;J+=1)k.push(n(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:p[J]}));for(let J=0;J<f.numberOfInputs;J+=1){b[J].connect(T[J]);for(let tt=0;tt<f.channelCount;tt+=1)T[J].connect(N,tt,J*f.channelCount+tt)}const P=new m_(_.parameterDescriptors===void 0?[]:_.parameterDescriptors.map(({name:J},tt)=>{const Dt=A[tt];return Dt.connect(N,0,x+tt),Dt.start(0),[J,Dt.offset]}));N.connect(E);let F=f.channelInterpretation,O=null;const B=f.numberOfOutputs===0?[E]:k,z={get bufferSize(){return y},get channelCount(){return f.channelCount},set channelCount(J){throw e()},get channelCountMode(){return f.channelCountMode},set channelCountMode(J){throw e()},get channelInterpretation(){return F},set channelInterpretation(J){for(const tt of b)tt.channelInterpretation=J;F=J},get context(){return E.context},get inputs(){return b},get numberOfInputs(){return f.numberOfInputs},get numberOfOutputs(){return f.numberOfOutputs},get onprocessorerror(){return O},set onprocessorerror(J){typeof O=="function"&&z.removeEventListener("processorerror",O),O=typeof J=="function"?J:null,typeof O=="function"&&z.addEventListener("processorerror",O)},get parameters(){return P},get port(){return S.port2},addEventListener(...J){return E.addEventListener(J[0],J[1],J[2])},connect:s.bind(null,B),disconnect:l.bind(null,B),dispatchEvent(...J){return E.dispatchEvent(J[0])},removeEventListener(...J){return E.removeEventListener(J[0],J[1],J[2])}},H=new Map;S.port1.addEventListener=(J=>(...tt)=>{if(tt[0]==="message"){const Dt=typeof tt[1]=="function"?tt[1]:typeof tt[1]=="object"&&tt[1]!==null&&typeof tt[1].handleEvent=="function"?tt[1].handleEvent:null;if(Dt!==null){const gt=H.get(tt[1]);gt!==void 0?tt[1]=gt:(tt[1]=C=>{u(m.currentTime,m.sampleRate,()=>Dt(C))},H.set(Dt,tt[1]))}}return J.call(S.port1,tt[0],tt[1],tt[2])})(S.port1.addEventListener),S.port1.removeEventListener=(J=>(...tt)=>{if(tt[0]==="message"){const Dt=H.get(tt[1]);Dt!==void 0&&(H.delete(tt[1]),tt[1]=Dt)}return J.call(S.port1,tt[0],tt[1],tt[2])})(S.port1.removeEventListener);let q=null;Object.defineProperty(S.port1,"onmessage",{get:()=>q,set:J=>{typeof q=="function"&&S.port1.removeEventListener("message",q),q=typeof J=="function"?J:null,typeof q=="function"&&(S.port1.addEventListener("message",q),S.port1.start())}}),_.prototype.port=S.port1;let j=null;hA(m,z,_,f).then(J=>j=J);const xt=Fc(f.numberOfInputs,f.channelCount),X=Fc(f.numberOfOutputs,p),Y=_.parameterDescriptors===void 0?[]:_.parameterDescriptors.reduce((J,{name:tt})=>({...J,[tt]:new Float32Array(128)}),{});let ct=!0;const _t=()=>{f.numberOfOutputs>0&&E.disconnect(L);for(let J=0,tt=0;J<f.numberOfOutputs;J+=1){const Dt=k[J];for(let gt=0;gt<p[J];gt+=1)L.disconnect(Dt,tt+gt,gt);tt+=p[J]}},et=new Map;E.onaudioprocess=({inputBuffer:J,outputBuffer:tt})=>{if(j!==null){const Dt=h(z);for(let gt=0;gt<y;gt+=128){for(let C=0;C<f.numberOfInputs;C+=1)for(let w=0;w<f.channelCount;w+=1)Oc(J,xt[C],w,w,gt);_.parameterDescriptors!==void 0&&_.parameterDescriptors.forEach(({name:C},w)=>{Oc(J,Y,C,x+w,gt)});for(let C=0;C<f.numberOfInputs;C+=1)for(let w=0;w<p[C];w+=1)X[C][w].byteLength===0&&(X[C][w]=new Float32Array(128));try{const C=xt.map((G,it)=>{if(Dt[it].size>0)return et.set(it,y/128),G;const rt=et.get(it);return rt===void 0?[]:(G.every(St=>St.every(ht=>ht===0))&&(rt===1?et.delete(it):et.set(it,rt-1)),G)});ct=u(m.currentTime+gt/m.sampleRate,m.sampleRate,()=>j.process(C,X,Y));for(let G=0,it=0;G<f.numberOfOutputs;G+=1){for(let nt=0;nt<p[G];nt+=1)__(tt,X[G],nt,it+nt,gt);it+=p[G]}}catch(C){ct=!1,z.dispatchEvent(new ErrorEvent("processorerror",{colno:C.colno,filename:C.filename,lineno:C.lineno,message:C.message}))}if(!ct){for(let C=0;C<f.numberOfInputs;C+=1){b[C].disconnect(T[C]);for(let w=0;w<f.channelCount;w+=1)T[gt].disconnect(N,w,C*f.channelCount+w)}if(_.parameterDescriptors!==void 0){const C=_.parameterDescriptors.length;for(let w=0;w<C;w+=1){const G=A[w];G.disconnect(N,0,x+w),G.stop()}}N.disconnect(E),E.onaudioprocess=null,mt?_t():V();break}}}};let mt=!1;const Ot=o(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),wt=()=>E.connect(Ot).connect(m.destination),V=()=>{E.disconnect(Ot),Ot.disconnect()},ue=()=>{if(ct){V(),f.numberOfOutputs>0&&E.connect(L);for(let J=0,tt=0;J<f.numberOfOutputs;J+=1){const Dt=k[J];for(let gt=0;gt<p[J];gt+=1)L.connect(Dt,tt+gt,gt);tt+=p[J]}}mt=!0},Tt=()=>{ct&&(wt(),_t()),mt=!1};return wt(),d(z,ue,Tt)},x_=(s,t)=>{const e=s.createBiquadFilter();return ke(e,t),Me(e,t,"Q"),Me(e,t,"detune"),Me(e,t,"frequency"),Me(e,t,"gain"),me(e,t,"type"),e},fA=(s,t)=>(e,n)=>{const i=e.createChannelMerger(n.numberOfInputs);return s!==null&&s.name==="webkitAudioContext"&&t(e,i),ke(i,n),i},pA=s=>{const t=s.numberOfOutputs;Object.defineProperty(s,"channelCount",{get:()=>t,set:e=>{if(e!==t)throw Xe()}}),Object.defineProperty(s,"channelCountMode",{get:()=>"explicit",set:e=>{if(e!=="explicit")throw Xe()}}),Object.defineProperty(s,"channelInterpretation",{get:()=>"discrete",set:e=>{if(e!=="discrete")throw Xe()}})},ya=(s,t)=>{const e=s.createChannelSplitter(t.numberOfOutputs);return ke(e,t),pA(e),e},mA=(s,t,e,n,i)=>(r,o)=>{if(r.createConstantSource===void 0)return e(r,o);const a=r.createConstantSource();return ke(a,o),Me(a,o,"offset"),t(n,()=>n(r))||Ah(a),t(i,()=>i(r))||Ch(a),s(r,a),a},vo=(s,t)=>(s.connect=t.connect.bind(t),s.disconnect=t.disconnect.bind(t),s),_A=(s,t,e,n)=>(i,{offset:r,...o})=>{const a=i.createBuffer(1,2,44100),c=t(i,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=e(i,{...o,gain:r}),u=a.getChannelData(0);u[0]=1,u[1]=1,c.buffer=a,c.loop=!0;const h={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(g){l.channelCount=g},get channelCountMode(){return l.channelCountMode},set channelCountMode(g){l.channelCountMode=g},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(g){l.channelInterpretation=g},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(g){c.onended=g},addEventListener(...g){return c.addEventListener(g[0],g[1],g[2])},dispatchEvent(...g){return c.dispatchEvent(g[0])},removeEventListener(...g){return c.removeEventListener(g[0],g[1],g[2])},start(g=0){c.start.call(c,g)},stop(g=0){c.stop.call(c,g)}},d=()=>c.connect(l),m=()=>c.disconnect(l);return s(i,c),n(vo(h,l),d,m)},gA=(s,t)=>(e,n)=>{const i=e.createConvolver();if(ke(i,n),n.disableNormalization===i.normalize&&(i.normalize=!n.disableNormalization),me(i,n,"buffer"),n.channelCount>2||(t(i,"channelCount",r=>()=>r.call(i),r=>o=>{if(o>2)throw s();return r.call(i,o)}),n.channelCountMode==="max"))throw s();return t(i,"channelCountMode",r=>()=>r.call(i),r=>o=>{if(o==="max")throw s();return r.call(i,o)}),i},y_=(s,t)=>{const e=s.createDelay(t.maxDelayTime);return ke(e,t),Me(e,t,"delayTime"),e},vA=s=>(t,e)=>{const n=t.createDynamicsCompressor();if(ke(n,e),e.channelCount>2||e.channelCountMode==="max")throw s();return Me(n,e,"attack"),Me(n,e,"knee"),Me(n,e,"ratio"),Me(n,e,"release"),Me(n,e,"threshold"),n},Cn=(s,t)=>{const e=s.createGain();return ke(e,t),Me(e,t,"gain"),e},xA=s=>(t,e,n)=>{if(t.createIIRFilter===void 0)return s(t,e,n);const i=t.createIIRFilter(n.feedforward,n.feedback);return ke(i,n),i};function yA(s,t){const e=t[0]*t[0]+t[1]*t[1];return[(s[0]*t[0]+s[1]*t[1])/e,(s[1]*t[0]-s[0]*t[1])/e]}function SA(s,t){return[s[0]*t[0]-s[1]*t[1],s[0]*t[1]+s[1]*t[0]]}function pp(s,t){let e=[0,0];for(let n=s.length-1;n>=0;n-=1)e=SA(e,t),e[0]+=s[n];return e}const MA=(s,t,e,n)=>(i,r,{channelCount:o,channelCountMode:a,channelInterpretation:c,feedback:l,feedforward:u})=>{const h=v_(r,i.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),m=u instanceof Float64Array?u:new Float64Array(u),g=d.length,_=m.length,f=Math.min(g,_);if(g===0||g>20)throw n();if(d[0]===0)throw t();if(_===0||_>20)throw n();if(m[0]===0)throw t();if(d[0]!==1){for(let A=0;A<_;A+=1)m[A]/=d[0];for(let A=1;A<g;A+=1)d[A]/=d[0]}const p=e(i,h,o,o);p.channelCount=o,p.channelCountMode=a,p.channelInterpretation=c;const x=32,v=[],M=[],S=[];for(let A=0;A<o;A+=1){v.push(0);const N=new Float32Array(x),y=new Float32Array(x);N.fill(0),y.fill(0),M.push(N),S.push(y)}p.onaudioprocess=A=>{const N=A.inputBuffer,y=A.outputBuffer,E=N.numberOfChannels;for(let L=0;L<E;L+=1){const k=N.getChannelData(L),P=y.getChannelData(L);v[L]=g_(d,g,m,_,f,M[L],S[L],v[L],x,k,P)}};const b=i.sampleRate/2;return vo({get bufferSize(){return h},get channelCount(){return p.channelCount},set channelCount(A){p.channelCount=A},get channelCountMode(){return p.channelCountMode},set channelCountMode(A){p.channelCountMode=A},get channelInterpretation(){return p.channelInterpretation},set channelInterpretation(A){p.channelInterpretation=A},get context(){return p.context},get inputs(){return[p]},get numberOfInputs(){return p.numberOfInputs},get numberOfOutputs(){return p.numberOfOutputs},addEventListener(...A){return p.addEventListener(A[0],A[1],A[2])},dispatchEvent(...A){return p.dispatchEvent(A[0])},getFrequencyResponse(A,N,y){if(A.length!==N.length||N.length!==y.length)throw s();const E=A.length;for(let L=0;L<E;L+=1){const k=-Math.PI*(A[L]/b),P=[Math.cos(k),Math.sin(k)],F=pp(m,P),O=pp(d,P),B=yA(F,O);N[L]=Math.sqrt(B[0]*B[0]+B[1]*B[1]),y[L]=Math.atan2(B[1],B[0])}},removeEventListener(...A){return p.removeEventListener(A[0],A[1],A[2])}},p)},TA=(s,t)=>s.createMediaElementSource(t.mediaElement),bA=(s,t)=>{const e=s.createMediaStreamDestination();return ke(e,t),e.numberOfOutputs===1&&Object.defineProperty(e,"numberOfOutputs",{get:()=>0}),e},EA=(s,{mediaStream:t})=>{const e=t.getAudioTracks();e.sort((r,o)=>r.id<o.id?-1:r.id>o.id?1:0);const n=e.slice(0,1),i=s.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(i,"mediaStream",{value:t}),i},wA=(s,t)=>(e,{mediaStreamTrack:n})=>{if(typeof e.createMediaStreamTrackSource=="function")return e.createMediaStreamTrackSource(n);const i=new MediaStream([n]),r=e.createMediaStreamSource(i);if(n.kind!=="audio")throw s();if(t(e))throw new TypeError;return r},AA=s=>s===null?null:s.hasOwnProperty("OfflineAudioContext")?s.OfflineAudioContext:s.hasOwnProperty("webkitOfflineAudioContext")?s.webkitOfflineAudioContext:null,CA=(s,t,e,n,i,r)=>(o,a)=>{const c=o.createOscillator();return ke(c,a),Me(c,a,"detune"),Me(c,a,"frequency"),a.periodicWave!==void 0?c.setPeriodicWave(a.periodicWave):me(c,a,"type"),t(e,()=>e(o))||Ah(c),t(n,()=>n(o))||r(c,o),t(i,()=>i(o))||Ch(c),s(o,c),c},RA=s=>(t,e)=>{const n=t.createPanner();return n.orientationX===void 0?s(t,e):(ke(n,e),Me(n,e,"orientationX"),Me(n,e,"orientationY"),Me(n,e,"orientationZ"),Me(n,e,"positionX"),Me(n,e,"positionY"),Me(n,e,"positionZ"),me(n,e,"coneInnerAngle"),me(n,e,"coneOuterAngle"),me(n,e,"coneOuterGain"),me(n,e,"distanceModel"),me(n,e,"maxDistance"),me(n,e,"panningModel"),me(n,e,"refDistance"),me(n,e,"rolloffFactor"),n)},PA=(s,t,e,n,i,r,o,a,c,l)=>(u,{coneInnerAngle:h,coneOuterAngle:d,coneOuterGain:m,distanceModel:g,maxDistance:_,orientationX:f,orientationY:p,orientationZ:x,panningModel:v,positionX:M,positionY:S,positionZ:b,refDistance:T,rolloffFactor:A,...N})=>{const y=u.createPanner();if(N.channelCount>2||N.channelCountMode==="max")throw o();ke(y,N);const E={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},L=e(u,{...E,channelInterpretation:"speakers",numberOfInputs:6}),k=n(u,{...N,gain:1}),P=n(u,{...E,gain:1}),F=n(u,{...E,gain:0}),O=n(u,{...E,gain:0}),B=n(u,{...E,gain:0}),z=n(u,{...E,gain:0}),H=n(u,{...E,gain:0}),q=i(u,256,6,1),j=r(u,{...E,curve:new Float32Array([1,1]),oversample:"none"});let Q=[f,p,x],xt=[M,S,b];const X=new Float32Array(1);q.onaudioprocess=({inputBuffer:et})=>{const mt=[c(et,X,0),c(et,X,1),c(et,X,2)];mt.some((wt,V)=>wt!==Q[V])&&(y.setOrientation(...mt),Q=mt);const Ot=[c(et,X,3),c(et,X,4),c(et,X,5)];Ot.some((wt,V)=>wt!==xt[V])&&(y.setPosition(...Ot),xt=Ot)},Object.defineProperty(F.gain,"defaultValue",{get:()=>0}),Object.defineProperty(O.gain,"defaultValue",{get:()=>0}),Object.defineProperty(B.gain,"defaultValue",{get:()=>0}),Object.defineProperty(z.gain,"defaultValue",{get:()=>0}),Object.defineProperty(H.gain,"defaultValue",{get:()=>0});const Y={get bufferSize(){},get channelCount(){return y.channelCount},set channelCount(et){if(et>2)throw o();k.channelCount=et,y.channelCount=et},get channelCountMode(){return y.channelCountMode},set channelCountMode(et){if(et==="max")throw o();k.channelCountMode=et,y.channelCountMode=et},get channelInterpretation(){return y.channelInterpretation},set channelInterpretation(et){k.channelInterpretation=et,y.channelInterpretation=et},get coneInnerAngle(){return y.coneInnerAngle},set coneInnerAngle(et){y.coneInnerAngle=et},get coneOuterAngle(){return y.coneOuterAngle},set coneOuterAngle(et){y.coneOuterAngle=et},get coneOuterGain(){return y.coneOuterGain},set coneOuterGain(et){if(et<0||et>1)throw t();y.coneOuterGain=et},get context(){return y.context},get distanceModel(){return y.distanceModel},set distanceModel(et){y.distanceModel=et},get inputs(){return[k]},get maxDistance(){return y.maxDistance},set maxDistance(et){if(et<0)throw new RangeError;y.maxDistance=et},get numberOfInputs(){return y.numberOfInputs},get numberOfOutputs(){return y.numberOfOutputs},get orientationX(){return P.gain},get orientationY(){return F.gain},get orientationZ(){return O.gain},get panningModel(){return y.panningModel},set panningModel(et){y.panningModel=et},get positionX(){return B.gain},get positionY(){return z.gain},get positionZ(){return H.gain},get refDistance(){return y.refDistance},set refDistance(et){if(et<0)throw new RangeError;y.refDistance=et},get rolloffFactor(){return y.rolloffFactor},set rolloffFactor(et){if(et<0)throw new RangeError;y.rolloffFactor=et},addEventListener(...et){return k.addEventListener(et[0],et[1],et[2])},dispatchEvent(...et){return k.dispatchEvent(et[0])},removeEventListener(...et){return k.removeEventListener(et[0],et[1],et[2])}};h!==Y.coneInnerAngle&&(Y.coneInnerAngle=h),d!==Y.coneOuterAngle&&(Y.coneOuterAngle=d),m!==Y.coneOuterGain&&(Y.coneOuterGain=m),g!==Y.distanceModel&&(Y.distanceModel=g),_!==Y.maxDistance&&(Y.maxDistance=_),f!==Y.orientationX.value&&(Y.orientationX.value=f),p!==Y.orientationY.value&&(Y.orientationY.value=p),x!==Y.orientationZ.value&&(Y.orientationZ.value=x),v!==Y.panningModel&&(Y.panningModel=v),M!==Y.positionX.value&&(Y.positionX.value=M),S!==Y.positionY.value&&(Y.positionY.value=S),b!==Y.positionZ.value&&(Y.positionZ.value=b),T!==Y.refDistance&&(Y.refDistance=T),A!==Y.rolloffFactor&&(Y.rolloffFactor=A),(Q[0]!==1||Q[1]!==0||Q[2]!==0)&&y.setOrientation(...Q),(xt[0]!==0||xt[1]!==0||xt[2]!==0)&&y.setPosition(...xt);const ct=()=>{k.connect(y),s(k,j,0,0),j.connect(P).connect(L,0,0),j.connect(F).connect(L,0,1),j.connect(O).connect(L,0,2),j.connect(B).connect(L,0,3),j.connect(z).connect(L,0,4),j.connect(H).connect(L,0,5),L.connect(q).connect(u.destination)},_t=()=>{k.disconnect(y),a(k,j,0,0),j.disconnect(P),P.disconnect(L),j.disconnect(F),F.disconnect(L),j.disconnect(O),O.disconnect(L),j.disconnect(B),B.disconnect(L),j.disconnect(z),z.disconnect(L),j.disconnect(H),H.disconnect(L),L.disconnect(q),q.disconnect(u.destination)};return l(vo(Y,y),ct,_t)},DA=s=>(t,{disableNormalization:e,imag:n,real:i})=>{const r=n instanceof Float32Array?n:new Float32Array(n),o=i instanceof Float32Array?i:new Float32Array(i),a=t.createPeriodicWave(o,r,{disableNormalization:e});if(Array.from(n).length<2)throw s();return a},Sa=(s,t,e,n)=>s.createScriptProcessor(t,e,n),LA=(s,t)=>(e,n)=>{const i=n.channelCountMode;if(i==="clamped-max")throw t();if(e.createStereoPanner===void 0)return s(e,n);const r=e.createStereoPanner();return ke(r,n),Me(r,n,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>i,set:o=>{if(o!==i)throw t()}}),r},NA=(s,t,e,n,i,r)=>{const a=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},u={...l,oversample:"none"},h=(g,_,f,p)=>{const x=new Float32Array(16385),v=new Float32Array(16385);for(let N=0;N<16385;N+=1){const y=N/16384*c;x[N]=Math.cos(y),v[N]=Math.sin(y)}const M=e(g,{...l,gain:0}),S=n(g,{...u,curve:x}),b=n(g,{...u,curve:a}),T=e(g,{...l,gain:0}),A=n(g,{...u,curve:v});return{connectGraph(){_.connect(M),_.connect(b.inputs===void 0?b:b.inputs[0]),_.connect(T),b.connect(f),f.connect(S.inputs===void 0?S:S.inputs[0]),f.connect(A.inputs===void 0?A:A.inputs[0]),S.connect(M.gain),A.connect(T.gain),M.connect(p,0,0),T.connect(p,0,1)},disconnectGraph(){_.disconnect(M),_.disconnect(b.inputs===void 0?b:b.inputs[0]),_.disconnect(T),b.disconnect(f),f.disconnect(S.inputs===void 0?S:S.inputs[0]),f.disconnect(A.inputs===void 0?A:A.inputs[0]),S.disconnect(M.gain),A.disconnect(T.gain),M.disconnect(p,0,0),T.disconnect(p,0,1)}}},d=(g,_,f,p)=>{const x=new Float32Array(16385),v=new Float32Array(16385),M=new Float32Array(16385),S=new Float32Array(16385),b=Math.floor(16385/2);for(let B=0;B<16385;B+=1)if(B>b){const z=(B-b)/(16384-b)*c;x[B]=Math.cos(z),v[B]=Math.sin(z),M[B]=0,S[B]=1}else{const z=B/(16384-b)*c;x[B]=1,v[B]=0,M[B]=Math.cos(z),S[B]=Math.sin(z)}const T=t(g,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),A=e(g,{...l,gain:0}),N=n(g,{...u,curve:x}),y=e(g,{...l,gain:0}),E=n(g,{...u,curve:v}),L=n(g,{...u,curve:a}),k=e(g,{...l,gain:0}),P=n(g,{...u,curve:M}),F=e(g,{...l,gain:0}),O=n(g,{...u,curve:S});return{connectGraph(){_.connect(T),_.connect(L.inputs===void 0?L:L.inputs[0]),T.connect(A,0),T.connect(y,0),T.connect(k,1),T.connect(F,1),L.connect(f),f.connect(N.inputs===void 0?N:N.inputs[0]),f.connect(E.inputs===void 0?E:E.inputs[0]),f.connect(P.inputs===void 0?P:P.inputs[0]),f.connect(O.inputs===void 0?O:O.inputs[0]),N.connect(A.gain),E.connect(y.gain),P.connect(k.gain),O.connect(F.gain),A.connect(p,0,0),k.connect(p,0,0),y.connect(p,0,1),F.connect(p,0,1)},disconnectGraph(){_.disconnect(T),_.disconnect(L.inputs===void 0?L:L.inputs[0]),T.disconnect(A,0),T.disconnect(y,0),T.disconnect(k,1),T.disconnect(F,1),L.disconnect(f),f.disconnect(N.inputs===void 0?N:N.inputs[0]),f.disconnect(E.inputs===void 0?E:E.inputs[0]),f.disconnect(P.inputs===void 0?P:P.inputs[0]),f.disconnect(O.inputs===void 0?O:O.inputs[0]),N.disconnect(A.gain),E.disconnect(y.gain),P.disconnect(k.gain),O.disconnect(F.gain),A.disconnect(p,0,0),k.disconnect(p,0,0),y.disconnect(p,0,1),F.disconnect(p,0,1)}}},m=(g,_,f,p,x)=>{if(_===1)return h(g,f,p,x);if(_===2)return d(g,f,p,x);throw i()};return(g,{channelCount:_,channelCountMode:f,pan:p,...x})=>{if(f==="max")throw i();const v=s(g,{...x,channelCount:1,channelCountMode:f,numberOfInputs:2}),M=e(g,{...x,channelCount:_,channelCountMode:f,gain:1}),S=e(g,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:p});let{connectGraph:b,disconnectGraph:T}=m(g,_,M,S,v);Object.defineProperty(S.gain,"defaultValue",{get:()=>0}),Object.defineProperty(S.gain,"maxValue",{get:()=>1}),Object.defineProperty(S.gain,"minValue",{get:()=>-1});const A={get bufferSize(){},get channelCount(){return M.channelCount},set channelCount(L){M.channelCount!==L&&(N&&T(),{connectGraph:b,disconnectGraph:T}=m(g,L,M,S,v),N&&b()),M.channelCount=L},get channelCountMode(){return M.channelCountMode},set channelCountMode(L){if(L==="clamped-max"||L==="max")throw i();M.channelCountMode=L},get channelInterpretation(){return M.channelInterpretation},set channelInterpretation(L){M.channelInterpretation=L},get context(){return M.context},get inputs(){return[M]},get numberOfInputs(){return M.numberOfInputs},get numberOfOutputs(){return M.numberOfOutputs},get pan(){return S.gain},addEventListener(...L){return M.addEventListener(L[0],L[1],L[2])},dispatchEvent(...L){return M.dispatchEvent(L[0])},removeEventListener(...L){return M.removeEventListener(L[0],L[1],L[2])}};let N=!1;const y=()=>{b(),N=!0},E=()=>{T(),N=!1};return r(vo(A,v),y,E)}},IA=(s,t,e,n,i,r,o)=>(a,c)=>{const l=a.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&a.createGain().gain.automationRate===void 0)return e(a,c);ke(l,c);const u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw t();me(l,{curve:u},"curve"),me(l,c,"oversample");let h=null,d=!1;return o(l,"curve",_=>()=>_.call(l),_=>f=>(_.call(l,f),d&&(n(f)&&h===null?h=s(a,l):!n(f)&&h!==null&&(h(),h=null)),f)),i(l,()=>{d=!0,n(l.curve)&&(h=s(a,l))},()=>{d=!1,h!==null&&(h(),h=null)})},OA=(s,t,e,n,i)=>(r,{curve:o,oversample:a,...c})=>{const l=r.createWaveShaper(),u=r.createWaveShaper();ke(l,c),ke(u,c);const h=e(r,{...c,gain:1}),d=e(r,{...c,gain:-1}),m=e(r,{...c,gain:1}),g=e(r,{...c,gain:-1});let _=null,f=!1,p=null;const x={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(S){h.channelCount=S,d.channelCount=S,l.channelCount=S,m.channelCount=S,u.channelCount=S,g.channelCount=S},get channelCountMode(){return l.channelCountMode},set channelCountMode(S){h.channelCountMode=S,d.channelCountMode=S,l.channelCountMode=S,m.channelCountMode=S,u.channelCountMode=S,g.channelCountMode=S},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(S){h.channelInterpretation=S,d.channelInterpretation=S,l.channelInterpretation=S,m.channelInterpretation=S,u.channelInterpretation=S,g.channelInterpretation=S},get context(){return l.context},get curve(){return p},set curve(S){if(S!==null&&S.length<2)throw t();if(S===null)l.curve=S,u.curve=S;else{const b=S.length,T=new Float32Array(b+2-b%2),A=new Float32Array(b+2-b%2);T[0]=S[0],A[0]=-S[b-1];const N=Math.ceil((b+1)/2),y=(b+1)/2-1;for(let E=1;E<N;E+=1){const L=E/N*y,k=Math.floor(L),P=Math.ceil(L);T[E]=k===P?S[k]:(1-(L-k))*S[k]+(1-(P-L))*S[P],A[E]=k===P?-S[b-1-k]:-((1-(L-k))*S[b-1-k])-(1-(P-L))*S[b-1-P]}T[N]=b%2===1?S[N-1]:(S[N-2]+S[N-1])/2,l.curve=T,u.curve=A}p=S,f&&(n(p)&&_===null?_=s(r,h):_!==null&&(_(),_=null))},get inputs(){return[h]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(S){l.oversample=S,u.oversample=S},addEventListener(...S){return h.addEventListener(S[0],S[1],S[2])},dispatchEvent(...S){return h.dispatchEvent(S[0])},removeEventListener(...S){return h.removeEventListener(S[0],S[1],S[2])}};o!==null&&(x.curve=o instanceof Float32Array?o:new Float32Array(o)),a!==x.oversample&&(x.oversample=a);const v=()=>{h.connect(l).connect(m),h.connect(d).connect(u).connect(g).connect(m),f=!0,n(p)&&(_=s(r,h))},M=()=>{h.disconnect(l),l.disconnect(m),h.disconnect(d),d.disconnect(u),u.disconnect(g),g.disconnect(m),f=!1,_!==null&&(_(),_=null)};return i(vo(x,m),v,M)},xn=()=>new DOMException("","NotSupportedError"),FA={numberOfChannels:1},UA=(s,t,e,n,i)=>class extends s{constructor(o,a,c){let l;if(typeof o=="number"&&a!==void 0&&c!==void 0)l={length:a,numberOfChannels:o,sampleRate:c};else if(typeof o=="object")l=o;else throw new Error("The given parameters are not valid.");const{length:u,numberOfChannels:h,sampleRate:d}={...FA,...l},m=n(h,u,d);t(Zo,()=>Zo(m))||m.addEventListener("statechange",(()=>{let g=0;const _=f=>{this._state==="running"&&(g>0?(m.removeEventListener("statechange",_),f.stopImmediatePropagation(),this._waitForThePromiseToSettle(f)):g+=1)};return _})()),super(m,h),this._length=u,this._nativeOfflineAudioContext=m,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(e()):(this._state="running",i(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,h_(this)}))}_waitForThePromiseToSettle(o){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(o):setTimeout(()=>this._waitForThePromiseToSettle(o))}},kA={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},BA=(s,t,e,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...kA,...l},d=e(u,h),m=r(u),g=m?n():null,_=c.sampleRate/2;super(c,!1,d,g),this._detune=t(this,m,d.detune,153600,-153600),this._frequency=t(this,m,d.frequency,_,-_),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=g,this._oscillatorNodeRenderer!==null&&h.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=h.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeOscillatorNode.onended=l;const u=this._nativeOscillatorNode.onended;this._onended=u!==null&&u===l?c:u}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){lo(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),Wi(this)&&ga(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},VA=(s,t,e,n,i)=>()=>{const r=new WeakMap;let o=null,a=null,c=null;const l=async(u,h)=>{let d=e(u);const m=cn(d,h);if(!m){const g={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:o===null?void 0:o,type:d.type};d=t(h,g),a!==null&&d.start(a),c!==null&&d.stop(c)}return r.set(h,d),m?(await s(h,u.detune,d.detune),await s(h,u.frequency,d.frequency)):(await n(h,u.detune,d.detune),await n(h,u.frequency,d.frequency)),await i(u,h,d),d};return{set periodicWave(u){o=u},set start(u){a=u},set stop(u){c=u},render(u,h){const d=r.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},zA={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},GA=(s,t,e,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...zA,...l},d=e(u,h),m=r(u),g=m?n():null;super(c,!1,d,g),this._nativePannerNode=d,this._orientationX=t(this,m,d.orientationX,dn,Sn),this._orientationY=t(this,m,d.orientationY,dn,Sn),this._orientationZ=t(this,m,d.orientationZ,dn,Sn),this._positionX=t(this,m,d.positionX,dn,Sn),this._positionY=t(this,m,d.positionY,dn,Sn),this._positionZ=t(this,m,d.positionZ,dn,Sn),o(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},HA=(s,t,e,n,i,r,o,a,c,l)=>()=>{const u=new WeakMap;let h=null;const d=async(m,g)=>{let _=null,f=r(m);const p={channelCount:f.channelCount,channelCountMode:f.channelCountMode,channelInterpretation:f.channelInterpretation},x={...p,coneInnerAngle:f.coneInnerAngle,coneOuterAngle:f.coneOuterAngle,coneOuterGain:f.coneOuterGain,distanceModel:f.distanceModel,maxDistance:f.maxDistance,panningModel:f.panningModel,refDistance:f.refDistance,rolloffFactor:f.rolloffFactor},v=cn(f,g);if("bufferSize"in f)_=n(g,{...p,gain:1});else if(!v){const M={...x,orientationX:f.orientationX.value,orientationY:f.orientationY.value,orientationZ:f.orientationZ.value,positionX:f.positionX.value,positionY:f.positionY.value,positionZ:f.positionZ.value};f=i(g,M)}if(u.set(g,_===null?f:_),_!==null){if(h===null){if(o===null)throw new Error("Missing the native OfflineAudioContext constructor.");const E=new o(6,m.context.length,g.sampleRate),L=t(E,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});L.connect(E.destination),h=(async()=>{const k=await Promise.all([m.orientationX,m.orientationY,m.orientationZ,m.positionX,m.positionY,m.positionZ].map(async(P,F)=>{const O=e(E,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:F===0?1:0});return await a(E,P,O.offset),O}));for(let P=0;P<6;P+=1)k[P].connect(L,0,P),k[P].start(0);return l(E)})()}const M=await h,S=n(g,{...p,gain:1});await c(m,g,S);const b=[];for(let E=0;E<M.numberOfChannels;E+=1)b.push(M.getChannelData(E));let T=[b[0][0],b[1][0],b[2][0]],A=[b[3][0],b[4][0],b[5][0]],N=n(g,{...p,gain:1}),y=i(g,{...x,orientationX:T[0],orientationY:T[1],orientationZ:T[2],positionX:A[0],positionY:A[1],positionZ:A[2]});S.connect(N).connect(y.inputs[0]),y.connect(_);for(let E=128;E<M.length;E+=128){const L=[b[0][E],b[1][E],b[2][E]],k=[b[3][E],b[4][E],b[5][E]];if(L.some((P,F)=>P!==T[F])||k.some((P,F)=>P!==A[F])){T=L,A=k;const P=E/g.sampleRate;N.gain.setValueAtTime(0,P),N=n(g,{...p,gain:0}),y=i(g,{...x,orientationX:T[0],orientationY:T[1],orientationZ:T[2],positionX:A[0],positionY:A[1],positionZ:A[2]}),N.gain.setValueAtTime(1,P),S.connect(N).connect(y.inputs[0]),y.connect(_)}}return _}return v?(await s(g,m.orientationX,f.orientationX),await s(g,m.orientationY,f.orientationY),await s(g,m.orientationZ,f.orientationZ),await s(g,m.positionX,f.positionX),await s(g,m.positionY,f.positionY),await s(g,m.positionZ,f.positionZ)):(await a(g,m.orientationX,f.orientationX),await a(g,m.orientationY,f.orientationY),await a(g,m.orientationZ,f.orientationZ),await a(g,m.positionX,f.positionX),await a(g,m.positionY,f.positionY),await a(g,m.positionZ,f.positionZ)),go(f)?await c(m,g,f.inputs[0]):await c(m,g,f),f};return{render(m,g){const _=u.get(g);return _!==void 0?Promise.resolve(_):d(m,g)}}},WA={disableNormalization:!1},XA=(s,t,e,n)=>class S_{constructor(r,o){const a=t(r),c=n({...WA,...o}),l=s(a,c);return e.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===S_.prototype||e.has(r)}},qA=(s,t)=>(e,n,i)=>(s(n).replay(i),t(n,e,i)),YA=(s,t,e)=>async(n,i,r)=>{const o=s(n);await Promise.all(o.activeInputs.map((a,c)=>Array.from(a).map(async([l,u])=>{const d=await t(l).render(l,i),m=n.context.destination;!e(l)&&(n!==m||!e(n))&&d.connect(r,u,c)})).reduce((a,c)=>[...a,...c],[]))},jA=(s,t,e)=>async(n,i,r)=>{const o=t(n);await Promise.all(Array.from(o.activeInputs).map(async([a,c])=>{const u=await s(a).render(a,i);e(a)||u.connect(r,c)}))},$A=(s,t,e,n)=>i=>s(Zo,()=>Zo(i))?Promise.resolve(s(n,n)).then(r=>{if(!r){const o=e(i,512,0,1);i.oncomplete=()=>{o.onaudioprocess=null,o.disconnect()},o.onaudioprocess=()=>i.currentTime,o.connect(i.destination)}return i.startRendering()}):new Promise(r=>{const o=t(i,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});i.oncomplete=a=>{o.disconnect(),r(a.renderedBuffer)},o.connect(i.destination),i.startRendering()}),ZA=s=>(t,e)=>{s.set(t,e)},KA=s=>(t,e)=>s.set(t,e),JA=(s,t,e,n,i,r,o,a)=>(c,l)=>e(c).render(c,l).then(()=>Promise.all(Array.from(n(l)).map(u=>e(u).render(u,l)))).then(()=>i(l)).then(u=>(typeof u.copyFromChannel!="function"?(o(u),bh(u)):t(r,()=>r(u))||a(u),s.add(u),u)),QA={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},t1=(s,t,e,n,i,r)=>class extends s{constructor(a,c){const l=i(a),u={...QA,...c},h=e(l,u),d=r(l),m=d?n():null;super(a,!1,h,m),this._pan=t(this,d,h.pan)}get pan(){return this._pan}},e1=(s,t,e,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=e(a);const u=cn(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=t(c,h)}return r.set(c,l),u?await s(c,a.pan,l.pan):await n(c,a.pan,l.pan),go(l)?await i(a,c,l.inputs[0]):await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},n1=s=>()=>{if(s===null)return!1;try{new s({length:1,sampleRate:44100})}catch{return!1}return!0},i1=(s,t)=>async()=>{if(s===null)return!0;if(t===null)return!1;const e=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new t(1,128,44100),i=URL.createObjectURL(e);let r=!1,o=!1;try{await n.audioWorklet.addModule(i);const a=new s(n,"a",{numberOfOutputs:0}),c=n.createOscillator();a.port.onmessage=()=>r=!0,a.onprocessorerror=()=>o=!0,c.connect(a),c.start(0),await n.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(i)}return r&&!o},s1=(s,t)=>()=>{if(t===null)return Promise.resolve(!1);const e=new t(1,1,44100),n=s(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(i=>{e.oncomplete=()=>{n.disconnect(),i(e.currentTime!==0)},e.startRendering()})},r1=()=>new DOMException("","UnknownError"),o1={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},a1=(s,t,e,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...o1,...l},d=e(u,h),g=r(u)?n():null;super(c,!0,d,g),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,o(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw t();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},c1=(s,t,e)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=t(r);if(!cn(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,curve:a.curve,oversample:a.oversample};a=s(o,l)}return n.set(o,a),go(a)?await e(r,o,a.inputs[0]):await e(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},l1=()=>typeof window>"u"?null:window,u1=(s,t)=>e=>{e.copyFromChannel=(n,i,r=0)=>{const o=s(r),a=s(i);if(a>=e.numberOfChannels)throw t();const c=e.length,l=e.getChannelData(a),u=n.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)n[h]=l[h+o]},e.copyToChannel=(n,i,r=0)=>{const o=s(r),a=s(i);if(a>=e.numberOfChannels)throw t();const c=e.length,l=e.getChannelData(a),u=n.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)l[h+o]=n[h]}},h1=s=>t=>{t.copyFromChannel=(e=>(n,i,r=0)=>{const o=s(r),a=s(i);if(o<t.length)return e.call(t,n,a,o)})(t.copyFromChannel),t.copyToChannel=(e=>(n,i,r=0)=>{const o=s(r),a=s(i);if(o<t.length)return e.call(t,n,a,o)})(t.copyToChannel)},d1=s=>(t,e)=>{const n=e.createBuffer(1,1,44100);t.buffer===null&&(t.buffer=n),s(t,"buffer",i=>()=>{const r=i.call(t);return r===n?null:r},i=>r=>i.call(t,r===null?n:r))},f1=(s,t)=>(e,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw s()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw s()}});const i=e.createBufferSource();t(n,()=>{const a=n.numberOfInputs;for(let c=0;c<a;c+=1)i.connect(n,0,c)},()=>i.disconnect(n))},M_=(s,t,e)=>s.copyFromChannel===void 0?s.getChannelData(e)[0]:(s.copyFromChannel(t,e),t[0]),T_=s=>{if(s===null)return!1;const t=s.length;return t%2!==0?s[Math.floor(t/2)]!==0:s[t/2-1]+s[t/2]!==0},Ma=(s,t,e,n)=>{let i=s;for(;!i.hasOwnProperty(t);)i=Object.getPrototypeOf(i);const{get:r,set:o}=Object.getOwnPropertyDescriptor(i,t);Object.defineProperty(s,t,{get:e(r),set:n(o)})},p1=s=>({...s,outputChannelCount:s.outputChannelCount!==void 0?s.outputChannelCount:s.numberOfInputs===1&&s.numberOfOutputs===1?[s.channelCount]:Array.from({length:s.numberOfOutputs},()=>1)}),m1=s=>({...s,channelCount:s.numberOfOutputs}),_1=s=>{const{imag:t,real:e}=s;return t===void 0?e===void 0?{...s,imag:[0,0],real:[0,0]}:{...s,imag:Array.from(e,()=>0),real:e}:e===void 0?{...s,imag:t,real:Array.from(t,()=>0)}:{...s,imag:t,real:e}},b_=(s,t,e)=>{try{s.setValueAtTime(t,e)}catch(n){if(n.code!==9)throw n;b_(s,t,e+1e-7)}},g1=s=>{const t=s.createBufferSource();t.start();try{t.start()}catch{return!0}return!1},v1=s=>{const t=s.createBufferSource(),e=s.createBuffer(1,1,44100);t.buffer=e;try{t.start(0,1)}catch{return!1}return!0},x1=s=>{const t=s.createBufferSource();t.start();try{t.stop()}catch{return!1}return!0},Rh=s=>{const t=s.createOscillator();try{t.start(-1)}catch(e){return e instanceof RangeError}return!1},E_=s=>{const t=s.createBuffer(1,1,44100),e=s.createBufferSource();e.buffer=t,e.start(),e.stop();try{return e.stop(),!0}catch{return!1}},Ph=s=>{const t=s.createOscillator();try{t.stop(-1)}catch(e){return e instanceof RangeError}return!1},y1=s=>{const{port1:t,port2:e}=new MessageChannel;try{t.postMessage(s)}finally{t.close(),e.close()}},S1=s=>{s.start=(t=>(e=0,n=0,i)=>{const r=s.buffer,o=r===null?n:Math.min(r.duration,n);r!==null&&o>r.duration-.5/s.context.sampleRate?t.call(s,e,0,0):t.call(s,e,o,i)})(s.start)},w_=(s,t)=>{const e=t.createGain();s.connect(e);const n=(i=>()=>{i.call(s,e),s.removeEventListener("ended",n)})(s.disconnect);s.addEventListener("ended",n),vo(s,e),s.stop=(i=>{let r=!1;return(o=0)=>{if(r)try{i.call(s,o)}catch{e.gain.setValueAtTime(0,o)}else i.call(s,o),r=!0}})(s.stop)},xo=(s,t)=>e=>{const n={value:s};return Object.defineProperties(e,{currentTarget:n,target:n}),typeof t=="function"?t.call(s,e):t.handleEvent.call(s,e)},M1=Gb(fr),T1=jb(fr),b1=ow(rl),A_=new WeakMap,E1=bw(A_),ci=FE(new Map,new WeakMap),yi=l1(),C_=tA(ci,Ei),Dh=Tw(_n),Qe=YA(_n,Dh,sr),w1=Qb(C_,de,Qe),le=Aw(sl),Ki=AA(yi),se=Ww(Ki),R_=new WeakMap,P_=_w(xo),Ta=sA(yi),Lh=Vw(Ta),Nh=zw(yi),D_=Gw(yi),Ko=oA(yi),De=bE(Hb(s_),Yb(M1,T1,Lc,b1,Nc,_n,E1,_a,de,fr,Wi,sr,lc),ci,Ow(Fu,Nc,_n,de,$o,Wi),Ei,ol,xn,nw(Lc,Fu,_n,de,$o,le,Wi,se),lw(R_,_n,ai),P_,le,Lh,Nh,D_,se,Ko),A1=Jb(De,w1,Ei,C_,le,se),Ih=new WeakSet,mp=eA(yi),L_=$E(new Uint32Array(1)),Oh=u1(L_,Ei),Fh=h1(L_),C1=eE(Ih,ci,xn,mp,Ki,n1(mp),Oh,Fh),al=$b(Cn),N_=jA(Dh,va,sr),wi=HE(N_),yo=iA(al,ci,g1,v1,x1,Rh,E_,Ph,S1,d1(Ma),w_),Ai=qA(Ew(va),N_),R1=sE(wi,yo,de,Ai,Qe),li=EE(Wb(r_),R_,Th,wE,Fb,Ub,kb,Bb,Vb,Nu,n_,Ta,b_),P1=iE(De,R1,li,Xe,yo,le,se,xo),D1=fE(De,pE,Ei,Xe,rA(Cn,Ma),le,se,Qe),L1=OE(wi,x_,de,Ai,Qe),pr=KA(A_),N1=IE(De,li,L1,ol,x_,le,se,pr),ws=Jw(fr,Nh),I1=f1(Xe,ws),As=fA(Ta,I1),O1=BE(As,de,Qe),F1=kE(De,O1,As,le,se),U1=GE(ya,de,Qe),k1=zE(De,U1,ya,le,se,m1),B1=_A(al,yo,Cn,ws),So=mA(al,ci,B1,Rh,Ph),V1=jE(wi,So,de,Ai,Qe),z1=YE(De,li,V1,So,le,se,xo),I_=gA(xn,Ma),G1=JE(I_,de,Qe),H1=KE(De,G1,I_,le,se,pr),W1=rw(wi,y_,de,Ai,Qe),X1=sw(De,li,W1,y_,le,se,pr),O_=vA(xn),q1=fw(wi,O_,de,Ai,Qe),Y1=dw(De,li,q1,O_,xn,le,se,pr),j1=Sw(wi,Cn,de,Ai,Qe),$1=yw(De,li,j1,Cn,le,se),Z1=MA(ol,Xe,Sa,xn),cl=$A(ci,Cn,Sa,s1(Cn,Ki)),K1=Iw(yo,de,Ki,Qe,cl),J1=xA(Z1),Q1=Lw(De,J1,K1,le,se,pr),tC=mE(li,As,So,Sa,xn,M_,se,Ma),F_=new WeakMap,eC=Kw(D1,tC,P_,se,F_,xo),U_=CA(al,ci,Rh,E_,Ph,w_),nC=VA(wi,U_,de,Ai,Qe),iC=BA(De,li,U_,nC,le,se,xo),k_=XE(yo),sC=OA(k_,Xe,Cn,T_,ws),ll=IA(k_,Xe,sC,T_,ws,Ta,Ma),rC=PA(Lc,Xe,As,Cn,Sa,ll,xn,Nc,M_,ws),B_=RA(rC),oC=HA(wi,As,So,Cn,B_,de,Ki,Ai,Qe,cl),aC=GA(De,li,B_,oC,le,se,pr),cC=DA(Ei),lC=XA(cC,le,new WeakSet,_1),uC=NA(As,ya,Cn,ll,xn,ws),V_=LA(uC,xn),hC=e1(wi,V_,de,Ai,Qe),dC=t1(De,li,V_,hC,le,se),fC=c1(ll,de,Qe),pC=a1(De,Xe,ll,fC,le,se,pr),z_=Xw(yi),Uh=gw(yi),G_=new WeakMap,mC=Cw(G_,Ki),_C=z_?qb(ci,xn,mw(yi),Uh,vw(zb),le,mC,se,Ko,new WeakMap,new WeakMap,i1(Ko,Ki),yi):void 0,gC=Hw(Lh,se),vC=ew(Ih,ci,tw,pw,new WeakSet,le,gC,Pc,Zo,Oh,Fh),H_=LE(_C,A1,C1,P1,N1,F1,k1,z1,H1,vC,X1,Y1,$1,Q1,eC,iC,aC,lC,dC,pC),xC=qw(De,TA,le,se),yC=jw(De,bA,le,se),SC=$w(De,EA,le,se),MC=wA(Xe,se),TC=Zw(De,MC,le),bC=dE(H_,Xe,xn,r1,xC,yC,SC,TC,Ta),kh=Rw(F_),EC=Zb(kh),W_=WE(Ei),wC=aw(kh),X_=uw(Ei),q_=new WeakMap,AC=Mw(q_,ai),CC=dA(W_,Ei,Xe,As,ya,So,Cn,Sa,xn,X_,Uh,AC,ws),RC=cA(Xe,CC,Cn,xn,ws),PC=DE(wi,W_,yo,As,ya,So,Cn,wC,X_,Uh,de,Ko,Ki,Ai,Qe,cl),DC=ww(G_),LC=ZA(q_),_p=z_?CE(EC,De,li,PC,RC,_n,DC,le,se,Ko,p1,LC,y1,xo):void 0,NC=QE(xn,Ki),IC=JA(Ih,ci,Dh,kh,cl,Pc,Oh,Fh),OC=UA(H_,ci,Xe,NC,IC),FC=Fw(sl,Lh),UC=Uw(Mh,Nh),kC=kw(Th,D_),BC=Bw(sl,se);function kt(s,t){if(!s)throw new Error(t)}function Ts(s,t,e=1/0){if(!(t<=s&&s<=e))throw new RangeError(`Value must be within [${t}, ${e}], got: ${s}`)}function Y_(s){!s.isOffline&&s.state!=="running"&&Bh('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let j_=console;function VC(...s){j_.log(...s)}function Bh(...s){j_.warn(...s)}function jn(s){return typeof s>"u"}function Zt(s){return!jn(s)}function zC(s){return typeof s=="function"}function Si(s){return typeof s=="number"}function Js(s){return Object.prototype.toString.call(s)==="[object Object]"&&s.constructor===Object}function $_(s){return typeof s=="boolean"}function Un(s){return Array.isArray(s)}function Mi(s){return typeof s=="string"}function ic(s){return Mi(s)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(s)}function GC(s){return new bC(s)}function HC(s,t,e){return new OC(s,t,e)}const Qs=typeof self=="object"?self:null,WC=Qs&&(Qs.hasOwnProperty("AudioContext")||Qs.hasOwnProperty("webkitAudioContext"));function XC(s,t,e){return kt(Zt(_p),"This node only works in a secure context (https or localhost)"),new _p(s,t,e)}function ui(s,t,e,n){var i=arguments.length,r=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(i<3?o(r):i>3?o(t,e,r):o(t,e))||r);return i>3&&r&&Object.defineProperty(t,e,r),r}function Oe(s,t,e,n){function i(r){return r instanceof e?r:new e(function(o){o(r)})}return new(e||(e=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,t||[])).next())})}class qC{constructor(t,e,n){this._callback=t,this._type=e,this._updateInterval=n,this._createClock()}_createWorker(){const t=new Blob([`
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
			`],{type:"text/javascript"}),e=URL.createObjectURL(t),n=new Worker(e);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&(clearTimeout(this._timeout),this._timeout=0),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(t){this._updateInterval=Math.max(t,128/44100),this._type==="worker"&&this._worker.postMessage(Math.max(t*1e3,1))}get type(){return this._type}set type(t){this._disposeClock(),this._type=t,this._createClock()}dispose(){this._disposeClock()}}function rr(s){return kC(s)}function vs(s){return UC(s)}function uc(s){return BC(s)}function Br(s){return FC(s)}function Z_(s){return s instanceof AudioBuffer}function YC(s,t){return s==="value"||rr(t)||vs(t)||Z_(t)}function tr(s,...t){if(!t.length)return s;const e=t.shift();if(Js(s)&&Js(e))for(const n in e)YC(n,e[n])?s[n]=e[n]:Js(e[n])?(s[n]||Object.assign(s,{[n]:{}}),tr(s[n],e[n])):Object.assign(s,{[n]:e[n]});return tr(s,...t)}function jC(s,t){return s.length===t.length&&s.every((e,n)=>t[n]===e)}function ft(s,t,e=[],n){const i={},r=Array.from(t);if(Js(r[0])&&n&&!Reflect.has(r[0],n)&&(Object.keys(r[0]).some(a=>Reflect.has(s,a))||(tr(i,{[n]:r[0]}),e.splice(e.indexOf(n),1),r.shift())),r.length===1&&Js(r[0]))tr(i,r[0]);else for(let o=0;o<e.length;o++)Zt(r[o])&&(i[e[o]]=r[o]);return tr(s,i)}function $C(s){return s.constructor.getDefaults()}function er(s,t){return jn(s)?t:s}function zu(s,t){return t.forEach(e=>{Reflect.has(s,e)&&delete s[e]}),s}/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2019 Yotam Mann
 */class Ji{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...t){(this.debug||Qs&&this.toString()===Qs.TONE_DEBUG_CLASS)&&VC(this,...t)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}}Ji.version=e_;const Vh=1e-6;function Uc(s,t){return s>t+Vh}function Gu(s,t){return Uc(s,t)||ni(s,t)}function K_(s,t){return s+Vh<t}function ni(s,t){return Math.abs(s-t)<Vh}function ZC(s,t,e){return Math.max(Math.min(s,e),t)}class Ci extends Ji{constructor(){super(),this.name="Timeline",this._timeline=[];const t=ft(Ci.getDefaults(),arguments,["memory"]);this.memory=t.memory,this.increasing=t.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(t){if(kt(Reflect.has(t,"time"),"Timeline: events must have a time attribute"),t.time=t.time.valueOf(),this.increasing&&this.length){const e=this._timeline[this.length-1];kt(Gu(t.time,e.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(t)}else{const e=this._search(t.time);this._timeline.splice(e+1,0,t)}if(this.length>this.memory){const e=this.length-this.memory;this._timeline.splice(0,e)}return this}remove(t){const e=this._timeline.indexOf(t);return e!==-1&&this._timeline.splice(e,1),this}get(t,e="time"){const n=this._search(t,e);return n!==-1?this._timeline[n]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(t,e="time"){const n=this._search(t,e);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(t){const e=this._timeline.length;if(e>0&&this._timeline[e-1].time<t)return this._timeline[e-1];const n=this._search(t);return n-1>=0?this._timeline[n-1]:null}cancel(t){if(this._timeline.length>1){let e=this._search(t);if(e>=0)if(ni(this._timeline[e].time,t)){for(let n=e;n>=0&&ni(this._timeline[n].time,t);n--)e=n;this._timeline=this._timeline.slice(0,e)}else this._timeline=this._timeline.slice(0,e+1);else this._timeline=[]}else this._timeline.length===1&&Gu(this._timeline[0].time,t)&&(this._timeline=[]);return this}cancelBefore(t){const e=this._search(t);return e>=0&&(this._timeline=this._timeline.slice(e+1)),this}previousEvent(t){const e=this._timeline.indexOf(t);return e>0?this._timeline[e-1]:null}_search(t,e="time"){if(this._timeline.length===0)return-1;let n=0;const i=this._timeline.length;let r=i;if(i>0&&this._timeline[i-1][e]<=t)return i-1;for(;n<r;){let o=Math.floor(n+(r-n)/2);const a=this._timeline[o],c=this._timeline[o+1];if(ni(a[e],t)){for(let l=o;l<this._timeline.length;l++){const u=this._timeline[l];if(ni(u[e],t))o=l;else break}return o}else{if(K_(a[e],t)&&Uc(c[e],t))return o;Uc(a[e],t)?r=o:n=o+1}}return-1}_iterate(t,e=0,n=this._timeline.length-1){this._timeline.slice(e,n+1).forEach(t)}forEach(t){return this._iterate(t),this}forEachBefore(t,e){const n=this._search(t);return n!==-1&&this._iterate(e,0,n),this}forEachAfter(t,e){const n=this._search(t);return this._iterate(e,n+1),this}forEachBetween(t,e,n){let i=this._search(t),r=this._search(e);return i!==-1&&r!==-1?(this._timeline[i].time!==t&&(i+=1),this._timeline[r].time===e&&(r-=1),this._iterate(n,i,r)):i===-1&&this._iterate(n,0,r),this}forEachFrom(t,e){let n=this._search(t);for(;n>=0&&this._timeline[n].time>=t;)n--;return this._iterate(e,n+1),this}forEachAtTime(t,e){const n=this._search(t);if(n!==-1&&ni(this._timeline[n].time,t)){let i=n;for(let r=n;r>=0&&ni(this._timeline[r].time,t);r--)i=r;this._iterate(r=>{e(r)},i,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}}const J_=[];function ul(s){J_.push(s)}function KC(s){J_.forEach(t=>t(s))}const Q_=[];function hl(s){Q_.push(s)}function JC(s){Q_.forEach(t=>t(s))}class ba extends Ji{constructor(){super(...arguments),this.name="Emitter"}on(t,e){return t.split(/\W+/).forEach(i=>{jn(this._events)&&(this._events={}),this._events.hasOwnProperty(i)||(this._events[i]=[]),this._events[i].push(e)}),this}once(t,e){const n=(...i)=>{e(...i),this.off(t,n)};return this.on(t,n),this}off(t,e){return t.split(/\W+/).forEach(i=>{if(jn(this._events)&&(this._events={}),this._events.hasOwnProperty(t))if(jn(e))this._events[t]=[];else{const r=this._events[t];for(let o=r.length-1;o>=0;o--)r[o]===e&&r.splice(o,1)}}),this}emit(t,...e){if(this._events&&this._events.hasOwnProperty(t)){const n=this._events[t].slice(0);for(let i=0,r=n.length;i<r;i++)n[i].apply(this,e)}return this}static mixin(t){["on","once","off","emit"].forEach(e=>{const n=Object.getOwnPropertyDescriptor(ba.prototype,e);Object.defineProperty(t.prototype,e,n)})}dispose(){return super.dispose(),this._events=void 0,this}}class tg extends ba{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}}class Ea extends tg{constructor(){super(),this.name="Context",this._constants=new Map,this._timeouts=new Ci,this._timeoutIds=0,this._initialized=!1,this.isOffline=!1,this._workletModules=new Map;const t=ft(Ea.getDefaults(),arguments,["context"]);t.context?this._context=t.context:this._context=GC({latencyHint:t.latencyHint}),this._ticker=new qC(this.emit.bind(this,"tick"),t.clockSource,t.updateInterval),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this._setLatencyHint(t.latencyHint),this.lookAhead=t.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(KC(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(t,e,n){return this._context.createBuffer(t,e,n)}createChannelMerger(t){return this._context.createChannelMerger(t)}createChannelSplitter(t){return this._context.createChannelSplitter(t)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(t){return this._context.createDelay(t)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(t,e){return this._context.createIIRFilter(t,e)}createPanner(){return this._context.createPanner()}createPeriodicWave(t,e,n){return this._context.createPeriodicWave(t,e,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(t){return kt(Br(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(t)}createMediaElementSource(t){return kt(Br(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(t)}createMediaStreamDestination(){return kt(Br(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(t){return this._context.decodeAudioData(t)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(t){kt(!this._initialized,"The listener cannot be set after initialization."),this._listener=t}get transport(){return this.initialize(),this._transport}set transport(t){kt(!this._initialized,"The transport cannot be set after initialization."),this._transport=t}get draw(){return this.initialize(),this._draw}set draw(t){kt(!this._initialized,"Draw cannot be set after initialization."),this._draw=t}get destination(){return this.initialize(),this._destination}set destination(t){kt(!this._initialized,"The destination cannot be set after initialization."),this._destination=t}createAudioWorkletNode(t,e){return XC(this.rawContext,t,e)}addAudioWorkletModule(t,e){return Oe(this,void 0,void 0,function*(){kt(Zt(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletModules.has(e)||this._workletModules.set(e,this.rawContext.audioWorklet.addModule(t)),yield this._workletModules.get(e)})}workletsAreReady(){return Oe(this,void 0,void 0,function*(){const t=[];this._workletModules.forEach(e=>t.push(e)),yield Promise.all(t)})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(t){this._ticker.updateInterval=t}get clockSource(){return this._ticker.type}set clockSource(t){this._ticker.type=t}get latencyHint(){return this._latencyHint}_setLatencyHint(t){let e=0;if(this._latencyHint=t,Mi(t))switch(t){case"interactive":e=.1;break;case"playback":e=.5;break;case"balanced":e=.25;break}this.lookAhead=e,this.updateInterval=e/2}get rawContext(){return this._context}now(){return this._context.currentTime+this.lookAhead}immediate(){return this._context.currentTime}resume(){return Br(this._context)?this._context.resume():Promise.resolve()}close(){return Oe(this,void 0,void 0,function*(){Br(this._context)&&(yield this._context.close()),this._initialized&&JC(this)})}getConstant(t){if(this._constants.has(t))return this._constants.get(t);{const e=this._context.createBuffer(1,128,this._context.sampleRate),n=e.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=t;const i=this._context.createBufferSource();return i.channelCount=1,i.channelCountMode="explicit",i.buffer=e,i.loop=!0,i.start(0),this._constants.set(t,i),i}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(t=>this._constants[t].disconnect()),this}_timeoutLoop(){const t=this.now();let e=this._timeouts.peek();for(;this._timeouts.length&&e&&e.time<=t;)e.callback(),this._timeouts.shift(),e=this._timeouts.peek()}setTimeout(t,e){this._timeoutIds++;const n=this.now();return this._timeouts.add({callback:t,id:this._timeoutIds,time:n+e}),this._timeoutIds}clearTimeout(t){return this._timeouts.forEach(e=>{e.id===t&&this._timeouts.remove(e)}),this}clearInterval(t){return this.clearTimeout(t)}setInterval(t,e){const n=++this._timeoutIds,i=()=>{const r=this.now();this._timeouts.add({callback:()=>{t(),i()},id:n,time:r+e})};return i(),n}}class QC extends tg{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(t,e,n){return{}}createChannelMerger(t){return{}}createChannelSplitter(t){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(t){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(t,e){return{}}createPanner(){return{}}createPeriodicWave(t,e,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(t){return{}}createMediaElementSource(t){return{}}createMediaStreamDestination(){return{}}decodeAudioData(t){return Promise.resolve({})}createAudioWorkletNode(t,e){return{}}get rawContext(){return{}}addAudioWorkletModule(t,e){return Oe(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(t,e){return 0}clearTimeout(t){return this}setInterval(t,e){return 0}clearInterval(t){return this}getConstant(t){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(t){}get destination(){return{}}set destination(t){}now(){return 0}immediate(){return 0}}function be(s,t){Un(t)?t.forEach(e=>be(s,e)):Object.defineProperty(s,t,{enumerable:!0,writable:!1})}function eg(s,t){Un(t)?t.forEach(e=>eg(s,e)):Object.defineProperty(s,t,{writable:!0})}const ne=()=>{};class ae extends Ji{constructor(){super(),this.name="ToneAudioBuffer",this.onload=ne;const t=ft(ae.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=t.reverse,this.onload=t.onload,t.url&&Z_(t.url)||t.url instanceof ae?this.set(t.url):Mi(t.url)&&this.load(t.url).catch(t.onerror)}static getDefaults(){return{onerror:ne,onload:ne,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:ri().sampleRate}set(t){return t instanceof ae?t.loaded?this._buffer=t.get():t.onload=()=>{this.set(t),this.onload(this)}:this._buffer=t,this._reversed&&this._reverse(),this}get(){return this._buffer}load(t){return Oe(this,void 0,void 0,function*(){const e=ae.load(t).then(n=>{this.set(n),this.onload(this)});ae.downloads.push(e);try{yield e}finally{const n=ae.downloads.indexOf(e);ae.downloads.splice(n,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(t){const e=Un(t)&&t[0].length>0,n=e?t.length:1,i=e?t[0].length:t.length,r=ri(),o=r.createBuffer(n,i,r.sampleRate),a=!e&&n===1?[t]:t;for(let c=0;c<n;c++)o.copyToChannel(a[c],c);return this._buffer=o,this}toMono(t){if(Si(t))this.fromArray(this.toArray(t));else{let e=new Float32Array(this.length);const n=this.numberOfChannels;for(let i=0;i<n;i++){const r=this.toArray(i);for(let o=0;o<r.length;o++)e[o]+=r[o]}e=e.map(i=>i/n),this.fromArray(e)}return this}toArray(t){if(Si(t))return this.getChannelData(t);if(this.numberOfChannels===1)return this.toArray(0);{const e=[];for(let n=0;n<this.numberOfChannels;n++)e[n]=this.getChannelData(n);return e}}getChannelData(t){return this._buffer?this._buffer.getChannelData(t):new Float32Array(0)}slice(t,e=this.duration){const n=Math.floor(t*this.sampleRate),i=Math.floor(e*this.sampleRate);kt(n<i,"The start time must be less than the end time");const r=i-n,o=ri().createBuffer(this.numberOfChannels,r,this.sampleRate);for(let a=0;a<this.numberOfChannels;a++)o.copyToChannel(this.getChannelData(a).subarray(n,i),a);return new ae(o)}_reverse(){if(this.loaded)for(let t=0;t<this.numberOfChannels;t++)this.getChannelData(t).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(t){this._reversed!==t&&(this._reversed=t,this._reverse())}static fromArray(t){return new ae().fromArray(t)}static fromUrl(t){return Oe(this,void 0,void 0,function*(){return yield new ae().load(t)})}static load(t){return Oe(this,void 0,void 0,function*(){const e=t.match(/\[([^\]\[]+\|.+)\]$/);if(e){const a=e[1].split("|");let c=a[0];for(const l of a)if(ae.supportsType(l)){c=l;break}t=t.replace(e[0],c)}const n=ae.baseUrl===""||ae.baseUrl.endsWith("/")?ae.baseUrl:ae.baseUrl+"/",i=yield fetch(n+t);if(!i.ok)throw new Error(`could not load url: ${t}`);const r=yield i.arrayBuffer();return yield ri().decodeAudioData(r)})}static supportsType(t){const e=t.split("."),n=e[e.length-1];return document.createElement("audio").canPlayType("audio/"+n)!==""}static loaded(){return Oe(this,void 0,void 0,function*(){for(yield Promise.resolve();ae.downloads.length;)yield ae.downloads[0]})}}ae.baseUrl="";ae.downloads=[];class zh extends Ea{constructor(){super({clockSource:"offline",context:uc(arguments[0])?arguments[0]:HC(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:uc(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=uc(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(t){return Oe(this,void 0,void 0,function*(){let e=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,e++;const n=Math.floor(this.sampleRate/128);t&&e%n===0&&(yield new Promise(i=>setTimeout(i,1)))}})}render(t=!0){return Oe(this,void 0,void 0,function*(){yield this.workletsAreReady(),yield this._renderClock(t);const e=yield this._context.startRendering();return new ae(e)})}close(){return Promise.resolve()}}const ng=new QC;let Kr=ng;function ri(){return Kr===ng&&WC&&tR(new Ea),Kr}function tR(s){Br(s)?Kr=new Ea(s):uc(s)?Kr=new zh(s):Kr=s}function eR(){return Kr.resume()}if(Qs&&!Qs.TONE_SILENCE_LOGGING){const t=` * Tone.js v${e_} * `;console.log(`%c${t}`,"background: #000; color: #fff")}function nR(s){return Math.pow(10,s/20)}function iR(s){return 20*(Math.log(s)/Math.LN10)}function ig(s){return Math.pow(2,s/12)}let dl=440;function sR(){return dl}function rR(s){dl=s}function Ws(s){return Math.round(sg(s))}function sg(s){return 69+12*Math.log2(s/dl)}function rg(s){return dl*Math.pow(2,(s-69)/12)}class Gh extends Ji{constructor(t,e,n){super(),this.defaultUnits="s",this._val=e,this._units=n,this.context=t,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:t=>this._frequencyToUnits(parseFloat(t)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:t=>this._ticksToUnits(parseInt(t,10)),regexp:/^(\d+)i$/i},m:{method:t=>this._beatsToUnits(parseInt(t,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(t,e)=>{const n=parseInt(t,10),i=e==="."?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*i:this._beatsToUnits(4/n)*i},regexp:/^(\d+)n(\.?)$/i},number:{method:t=>this._expressions[this.defaultUnits].method.call(this,t),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:t=>this._secondsToUnits(parseFloat(t)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:t=>parseInt(t,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:t=>{const e=parseInt(t,10);return this._beatsToUnits(8/(Math.floor(e)*3))},regexp:/^(\d+)t$/i},tr:{method:(t,e,n)=>{let i=0;return t&&t!=="0"&&(i+=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&e!=="0"&&(i+=this._beatsToUnits(parseFloat(e))),n&&n!=="0"&&(i+=this._beatsToUnits(parseFloat(n)/4)),i},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof Gh&&this.fromType(this._val),jn(this._val))return this._noArg();if(Mi(this._val)&&jn(this._units)){for(const t in this._expressions)if(this._expressions[t].regexp.test(this._val.trim())){this._units=t;break}}else if(Js(this._val)){let t=0;for(const e in this._val)if(Zt(this._val[e])){const n=this._val[e],i=new this.constructor(this.context,e).valueOf()*n;t+=i}return t}if(Zt(this._units)){const t=this._expressions[this._units],e=this._val.toString().trim().match(t.regexp);return e?t.method.apply(this,e.slice(1)):t.method.call(this,this._val)}else return Mi(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(t){return 1/t}_beatsToUnits(t){return 60/this._getBpm()*t}_secondsToUnits(t){return t}_ticksToUnits(t){return t*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(t){switch(this._units=void 0,this.defaultUnits){case"s":this._val=t.toSeconds();break;case"i":this._val=t.toTicks();break;case"hz":this._val=t.toFrequency();break;case"midi":this._val=t.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}}class oi extends Gh{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:t=>this._now()+new this.constructor(this.context,t).valueOf(),regexp:/^\+(.+)/},quantize:{method:t=>{const e=new oi(this.context,t).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(e))},regexp:/^@(.+)/}})}quantize(t,e=1){const n=new this.constructor(this.context,t).valueOf(),i=this.valueOf(),a=Math.round(i/n)*n-i;return i+a*e}toNotation(){const t=this.toSeconds(),e=["1m"];for(let r=1;r<9;r++){const o=Math.pow(2,r);e.push(o+"n."),e.push(o+"n"),e.push(o+"t")}e.push("0");let n=e[0],i=new oi(this.context,e[0]).toSeconds();return e.forEach(r=>{const o=new oi(this.context,r).toSeconds();Math.abs(o-t)<Math.abs(i-t)&&(n=r,i=o)}),n}toBarsBeatsSixteenths(){const t=this._beatsToUnits(1);let e=this.valueOf()/t;e=parseFloat(e.toFixed(4));const n=Math.floor(e/this._getTimeSignature());let i=e%1*4;e=Math.floor(e)%this._getTimeSignature();const r=i.toString();return r.length>3&&(i=parseFloat(parseFloat(r).toFixed(3))),[n,e,i].join(":")}toTicks(){const t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.round(e*this._getPPQ())}toSeconds(){return this.valueOf()}toMidi(){return Ws(this.toFrequency())}_now(){return this.context.now()}}class On extends oi{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return sR()}static set A4(t){rR(t)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(t){return this.defaultUnits==="midi"?t:On.mtof(t)}},note:{regexp:/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,method(t,e){const i=oR[t.toLowerCase()]+(parseInt(e,10)+1)*12;return this.defaultUnits==="midi"?i:On.mtof(i)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(t,e,n){let i=1;return t&&t!=="0"&&(i*=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&e!=="0"&&(i*=this._beatsToUnits(parseFloat(e))),n&&n!=="0"&&(i*=this._beatsToUnits(parseFloat(n)/4)),i}}})}transpose(t){return new On(this.context,this.valueOf()*ig(t))}harmonize(t){return t.map(e=>this.transpose(e))}toMidi(){return Ws(this.valueOf())}toNote(){const t=this.toFrequency(),e=Math.log2(t/On.A4);let n=Math.round(12*e)+57;const i=Math.floor(n/12);return i<0&&(n+=-12*i),aR[n%12]+i.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){const t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.floor(e*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(t){return t}_ticksToUnits(t){return 1/(t*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(t){return 1/super._beatsToUnits(t)}_secondsToUnits(t){return 1/t}static mtof(t){return rg(t)}static ftom(t){return Ws(t)}}const oR={cbb:-2,cb:-1,c:0,"c#":1,cx:2,dbb:0,db:1,d:2,"d#":3,dx:4,ebb:2,eb:3,e:4,"e#":5,ex:6,fbb:3,fb:4,f:5,"f#":6,fx:7,gbb:5,gb:6,g:7,"g#":8,gx:9,abb:7,ab:8,a:9,"a#":10,ax:11,bbb:9,bb:10,b:11,"b#":12,bx:13},aR=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];class Vo extends oi{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}}class qe extends Ji{constructor(){super();const t=ft(qe.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=t.context}static getDefaults(){return{context:ri()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(t){return new oi(this.context,t).toSeconds()}toFrequency(t){return new On(this.context,t).toFrequency()}toTicks(t){return new Vo(this.context,t).toTicks()}_getPartialProperties(t){const e=this.get();return Object.keys(e).forEach(n=>{jn(t[n])&&delete e[n]}),e}get(){const t=$C(this);return Object.keys(t).forEach(e=>{if(Reflect.has(this,e)){const n=this[e];Zt(n)&&Zt(n.value)&&Zt(n.setValueAtTime)?t[e]=n.value:n instanceof qe?t[e]=n._getPartialProperties(t[e]):Un(n)||Si(n)||Mi(n)||$_(n)?t[e]=n:delete t[e]}}),t}set(t){return Object.keys(t).forEach(e=>{Reflect.has(this,e)&&Zt(this[e])&&(this[e]&&Zt(this[e].value)&&Zt(this[e].setValueAtTime)?this[e].value!==t[e]&&(this[e].value=t[e]):this[e]instanceof qe?this[e].set(t[e]):this[e]=t[e])}),this}}class fl extends Ci{constructor(t="stopped"){super(),this.name="StateTimeline",this._initial=t,this.setStateAtTime(this._initial,0)}getValueAtTime(t){const e=this.get(t);return e!==null?e.state:this._initial}setStateAtTime(t,e,n){return Ts(e,0),this.add(Object.assign({},n,{state:t,time:e})),this}getLastState(t,e){const n=this._search(e);for(let i=n;i>=0;i--){const r=this._timeline[i];if(r.state===t)return r}}getNextState(t,e){const n=this._search(e);if(n!==-1)for(let i=n;i<this._timeline.length;i++){const r=this._timeline[i];if(r.state===t)return r}}}class pe extends qe{constructor(){super(ft(pe.getDefaults(),arguments,["param","units","convert"])),this.name="Param",this.overridden=!1,this._minOutput=1e-7;const t=ft(pe.getDefaults(),arguments,["param","units","convert"]);for(kt(Zt(t.param)&&(rr(t.param)||t.param instanceof pe),"param must be an AudioParam");!rr(t.param);)t.param=t.param._param;this._swappable=Zt(t.swappable)?t.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=t.param,this.input.connect(this._param)):this._param=this.input=t.param,this._events=new Ci(1e3),this._initialValue=this._param.defaultValue,this.units=t.units,this.convert=t.convert,this._minValue=t.minValue,this._maxValue=t.maxValue,Zt(t.value)&&t.value!==this._toType(this._initialValue)&&this.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(qe.getDefaults(),{convert:!0,units:"number"})}get value(){const t=this.now();return this.getValueAtTime(t)}set value(t){this.cancelScheduledValues(this.now()),this.setValueAtTime(t,this.now())}get minValue(){return Zt(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-1/0:this._param.minValue}get maxValue(){return Zt(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(t,e){return this.units===e}_assertRange(t){return Zt(this.maxValue)&&Zt(this.minValue)&&Ts(t,this._fromType(this.minValue),this._fromType(this.maxValue)),t}_fromType(t){return this.convert&&!this.overridden?this._is(t,"time")?this.toSeconds(t):this._is(t,"decibels")?nR(t):this._is(t,"frequency")?this.toFrequency(t):t:this.overridden?0:t}_toType(t){return this.convert&&this.units==="decibels"?iR(t):t}setValueAtTime(t,e){const n=this.toSeconds(e),i=this._fromType(t);return kt(isFinite(i)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._assertRange(i),this.log(this.units,"setValueAtTime",t,n),this._events.add({time:n,type:"setValueAtTime",value:i}),this._param.setValueAtTime(i,n),this}getValueAtTime(t){const e=Math.max(this.toSeconds(t),0),n=this._events.getAfter(e),i=this._events.get(e);let r=this._initialValue;if(i===null)r=this._initialValue;else if(i.type==="setTargetAtTime"&&(n===null||n.type==="setValueAtTime")){const o=this._events.getBefore(i.time);let a;o===null?a=this._initialValue:a=o.value,i.type==="setTargetAtTime"&&(r=this._exponentialApproach(i.time,a,i.value,i.constant,e))}else if(n===null)r=i.value;else if(n.type==="linearRampToValueAtTime"||n.type==="exponentialRampToValueAtTime"){let o=i.value;if(i.type==="setTargetAtTime"){const a=this._events.getBefore(i.time);a===null?o=this._initialValue:o=a.value}n.type==="linearRampToValueAtTime"?r=this._linearInterpolate(i.time,o,n.time,n.value,e):r=this._exponentialInterpolate(i.time,o,n.time,n.value,e)}else r=i.value;return this._toType(r)}setRampPoint(t){t=this.toSeconds(t);let e=this.getValueAtTime(t);return this.cancelAndHoldAtTime(t),this._fromType(e)===0&&(e=this._toType(this._minOutput)),this.setValueAtTime(e,t),this}linearRampToValueAtTime(t,e){const n=this._fromType(t),i=this.toSeconds(e);return kt(isFinite(n)&&isFinite(i),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._assertRange(n),this._events.add({time:i,type:"linearRampToValueAtTime",value:n}),this.log(this.units,"linearRampToValueAtTime",t,i),this._param.linearRampToValueAtTime(n,i),this}exponentialRampToValueAtTime(t,e){let n=this._fromType(t);n=ni(n,0)?this._minOutput:n,this._assertRange(n);const i=this.toSeconds(e);return kt(isFinite(n)&&isFinite(i),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._events.add({time:i,type:"exponentialRampToValueAtTime",value:n}),this.log(this.units,"exponentialRampToValueAtTime",t,i),this._param.exponentialRampToValueAtTime(n,i),this}exponentialRampTo(t,e,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(t,n+this.toSeconds(e)),this}linearRampTo(t,e,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(t,n+this.toSeconds(e)),this}targetRampTo(t,e,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(t,n,e),this}exponentialApproachValueAtTime(t,e,n){e=this.toSeconds(e),n=this.toSeconds(n);const i=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(t,e,i),this.cancelAndHoldAtTime(e+n*.9),this.linearRampToValueAtTime(t,e+n),this}setTargetAtTime(t,e,n){const i=this._fromType(t);kt(isFinite(n)&&n>0,"timeConstant must be a number greater than 0");const r=this.toSeconds(e);return this._assertRange(i),kt(isFinite(i)&&isFinite(r),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._events.add({constant:n,time:r,type:"setTargetAtTime",value:i}),this.log(this.units,"setTargetAtTime",t,r,n),this._param.setTargetAtTime(i,r,n),this}setValueCurveAtTime(t,e,n,i=1){n=this.toSeconds(n),e=this.toSeconds(e);const r=this._fromType(t[0])*i;this.setValueAtTime(this._toType(r),e);const o=n/(t.length-1);for(let a=1;a<t.length;a++){const c=this._fromType(t[a])*i;this.linearRampToValueAtTime(this._toType(c),e+a*o)}return this}cancelScheduledValues(t){const e=this.toSeconds(t);return kt(isFinite(e),`Invalid argument to cancelScheduledValues: ${JSON.stringify(t)}`),this._events.cancel(e),this._param.cancelScheduledValues(e),this.log(this.units,"cancelScheduledValues",e),this}cancelAndHoldAtTime(t){const e=this.toSeconds(t),n=this._fromType(this.getValueAtTime(e));kt(isFinite(e),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(t)}`),this.log(this.units,"cancelAndHoldAtTime",e,"value="+n);const i=this._events.get(e),r=this._events.getAfter(e);return i&&ni(i.time,e)?r?(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time)):(this._param.cancelAndHoldAtTime(e),this._events.cancel(e+this.sampleTime)):r&&(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time),r.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(n),e):r.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(n),e)),this._events.add({time:e,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,e),this}rampTo(t,e=.1,n){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(t,e,n):this.linearRampTo(t,e,n),this}apply(t){const e=this.context.currentTime;t.setValueAtTime(this.getValueAtTime(e),e);const n=this._events.get(e);if(n&&n.type==="setTargetAtTime"){const i=this._events.getAfter(n.time),r=i?i.time:e+2,o=(r-e)/10;for(let a=e;a<r;a+=o)t.linearRampToValueAtTime(this.getValueAtTime(a),a)}return this._events.forEachAfter(this.context.currentTime,i=>{i.type==="cancelScheduledValues"?t.cancelScheduledValues(i.time):i.type==="setTargetAtTime"?t.setTargetAtTime(i.value,i.time,i.constant):t[i.type](i.value,i.time)}),this}setParam(t){kt(this._swappable,"The Param must be assigned as 'swappable' in the constructor");const e=this.input;return e.disconnect(this._param),this.apply(t),this._param=t,e.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(t,e,n,i,r){return n+(e-n)*Math.exp(-(r-t)/i)}_linearInterpolate(t,e,n,i,r){return e+(i-e)*((r-t)/(n-t))}_exponentialInterpolate(t,e,n,i,r){return e*Math.pow(i/e,(r-t)/(n-t))}}class jt extends qe{constructor(){super(...arguments),this.name="ToneAudioNode",this._internalChannels=[]}get numberOfInputs(){return Zt(this.input)?rr(this.input)||this.input instanceof pe?1:this.input.numberOfInputs:0}get numberOfOutputs(){return Zt(this.output)?this.output.numberOfOutputs:0}_isAudioNode(t){return Zt(t)&&(t instanceof jt||vs(t))}_getInternalNodes(){const t=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&t.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&t.push(this.output),t}_setChannelProperties(t){this._getInternalNodes().forEach(n=>{n.channelCount=t.channelCount,n.channelCountMode=t.channelCountMode,n.channelInterpretation=t.channelInterpretation})}_getChannelProperties(){const t=this._getInternalNodes();kt(t.length>0,"ToneAudioNode does not have any internal nodes");const e=t[0];return{channelCount:e.channelCount,channelCountMode:e.channelCountMode,channelInterpretation:e.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(t){const e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelCount:t}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(t){const e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelCountMode:t}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(t){const e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelInterpretation:t}))}connect(t,e=0,n=0){return Mo(this,t,e,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return Bh("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(t,e=0,n=0){return cR(this,t,e,n),this}chain(...t){return Hu(this,...t),this}fan(...t){return t.forEach(e=>this.connect(e)),this}dispose(){return super.dispose(),Zt(this.input)&&(this.input instanceof jt?this.input.dispose():vs(this.input)&&this.input.disconnect()),Zt(this.output)&&(this.output instanceof jt?this.output.dispose():vs(this.output)&&this.output.disconnect()),this._internalChannels=[],this}}function Hu(...s){const t=s.shift();s.reduce((e,n)=>(e instanceof jt?e.connect(n):vs(e)&&Mo(e,n),n),t)}function Mo(s,t,e=0,n=0){for(kt(Zt(s),"Cannot connect from undefined node"),kt(Zt(t),"Cannot connect to undefined node"),(t instanceof jt||vs(t))&&kt(t.numberOfInputs>0,"Cannot connect to node with no inputs"),kt(s.numberOfOutputs>0,"Cannot connect from node with no outputs");t instanceof jt||t instanceof pe;)Zt(t.input)&&(t=t.input);for(;s instanceof jt;)Zt(s.output)&&(s=s.output);rr(t)?s.connect(t,e):s.connect(t,e,n)}function cR(s,t,e=0,n=0){if(Zt(t))for(;t instanceof jt;)t=t.input;for(;!vs(s);)Zt(s.output)&&(s=s.output);rr(t)?s.disconnect(t,e):vs(t)?s.disconnect(t,e,n):s.disconnect()}class vn extends jt{constructor(){super(ft(vn.getDefaults(),arguments,["gain","units"])),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode;const t=ft(vn.getDefaults(),arguments,["gain","units"]);this.gain=new pe({context:this.context,convert:t.convert,param:this._gainNode.gain,units:t.units,value:t.gain,minValue:t.minValue,maxValue:t.maxValue}),be(this,"gain")}static getDefaults(){return Object.assign(jt.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}}class uo extends jt{constructor(t){super(t),this.onended=ne,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new vn({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(e){const n=this.toSeconds(e);return this._startTime!==-1&&n>=this._startTime&&(this._stopTime===-1||n<=this._stopTime)?"started":"stopped"},this._fadeIn=t.fadeIn,this._fadeOut=t.fadeOut,this._curve=t.curve,this.onended=t.onended}static getDefaults(){return Object.assign(jt.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:ne})}_startGain(t,e=1){kt(this._startTime===-1,"Source cannot be started more than once");const n=this.toSeconds(this._fadeIn);return this._startTime=t+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,t),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(e,t+n):this._gainNode.gain.exponentialApproachValueAtTime(e,t,n)):this._gainNode.gain.setValueAtTime(e,t),this}stop(t){return this.log("stop",t),this._stopGain(this.toSeconds(t)),this}_stopGain(t){kt(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();const e=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(t)+e,this._stopTime=Math.max(this._stopTime,this.context.currentTime),e>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,e,t):this._gainNode.gain.targetRampTo(0,e,t):(this._gainNode.gain.cancelAndHoldAtTime(t),this._gainNode.gain.setValueAtTime(0,t)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{const n=this._curve==="exponential"?e*2:0;this._stopSource(this.now()+n),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==ne&&(this.onended(this),this.onended=ne,!this.context.isOffline)){const t=()=>this.dispose();typeof window.requestIdleCallback<"u"?window.requestIdleCallback(t):setTimeout(t,1e3)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),kt(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.disconnect(),this}}class kc extends uo{constructor(){super(ft(kc.getDefaults(),arguments,["offset"])),this.name="ToneConstantSource",this._source=this.context.createConstantSource();const t=ft(kc.getDefaults(),arguments,["offset"]);Mo(this._source,this._gainNode),this.offset=new pe({context:this.context,convert:t.convert,param:this._source.offset,units:t.units,value:t.offset,minValue:t.minValue,maxValue:t.maxValue})}static getDefaults(){return Object.assign(uo.getDefaults(),{convert:!0,offset:1,units:"number"})}start(t){const e=this.toSeconds(t);return this.log("start",e),this._startGain(e),this._source.start(e),this}_stopSource(t){this._source.stop(t)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}}class Be extends jt{constructor(){super(ft(Be.getDefaults(),arguments,["value","units"])),this.name="Signal",this.override=!0;const t=ft(Be.getDefaults(),arguments,["value","units"]);this.output=this._constantSource=new kc({context:this.context,convert:t.convert,offset:t.value,units:t.units,minValue:t.minValue,maxValue:t.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(jt.getDefaults(),{convert:!0,units:"number",value:0})}connect(t,e=0,n=0){return Hh(this,t,e,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(t,e){return this._param.setValueAtTime(t,e),this}getValueAtTime(t){return this._param.getValueAtTime(t)}setRampPoint(t){return this._param.setRampPoint(t),this}linearRampToValueAtTime(t,e){return this._param.linearRampToValueAtTime(t,e),this}exponentialRampToValueAtTime(t,e){return this._param.exponentialRampToValueAtTime(t,e),this}exponentialRampTo(t,e,n){return this._param.exponentialRampTo(t,e,n),this}linearRampTo(t,e,n){return this._param.linearRampTo(t,e,n),this}targetRampTo(t,e,n){return this._param.targetRampTo(t,e,n),this}exponentialApproachValueAtTime(t,e,n){return this._param.exponentialApproachValueAtTime(t,e,n),this}setTargetAtTime(t,e,n){return this._param.setTargetAtTime(t,e,n),this}setValueCurveAtTime(t,e,n,i){return this._param.setValueCurveAtTime(t,e,n,i),this}cancelScheduledValues(t){return this._param.cancelScheduledValues(t),this}cancelAndHoldAtTime(t){return this._param.cancelAndHoldAtTime(t),this}rampTo(t,e,n){return this._param.rampTo(t,e,n),this}get value(){return this._param.value}set value(t){this._param.value=t}get convert(){return this._param.convert}set convert(t){this._param.convert=t}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(t){this._param.overridden=t}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(t){return this._param.apply(t),this}}function Hh(s,t,e,n){(t instanceof pe||rr(t)||t instanceof Be&&t.override)&&(t.cancelScheduledValues(0),t.setValueAtTime(0,0),t instanceof Be&&(t.overridden=!0)),Mo(s,t,e,n)}class Bc extends pe{constructor(){super(ft(Bc.getDefaults(),arguments,["value"])),this.name="TickParam",this._events=new Ci(1/0),this._multiplier=1;const t=ft(Bc.getDefaults(),arguments,["value"]);this._multiplier=t.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(t.value)}),this.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(pe.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(t,e,n){e=this.toSeconds(e),this.setRampPoint(e);const i=this._fromType(t),r=this._events.get(e),o=Math.round(Math.max(1/n,1));for(let a=0;a<=o;a++){const c=n*a+e,l=this._exponentialApproach(r.time,r.value,i,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}setValueAtTime(t,e){const n=this.toSeconds(e);super.setValueAtTime(t,e);const i=this._events.get(n),r=this._events.previousEvent(i),o=this._getTicksUntilEvent(r,n);return i.ticks=Math.max(o,0),this}linearRampToValueAtTime(t,e){const n=this.toSeconds(e);super.linearRampToValueAtTime(t,e);const i=this._events.get(n),r=this._events.previousEvent(i),o=this._getTicksUntilEvent(r,n);return i.ticks=Math.max(o,0),this}exponentialRampToValueAtTime(t,e){e=this.toSeconds(e);const n=this._fromType(t),i=this._events.get(e),r=Math.round(Math.max((e-i.time)*10,1)),o=(e-i.time)/r;for(let a=0;a<=r;a++){const c=o*a+i.time,l=this._exponentialInterpolate(i.time,i.value,e,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}_getTicksUntilEvent(t,e){if(t===null)t={ticks:0,time:0,type:"setValueAtTime",value:0};else if(jn(t.ticks)){const o=this._events.previousEvent(t);t.ticks=this._getTicksUntilEvent(o,t.time)}const n=this._fromType(this.getValueAtTime(t.time));let i=this._fromType(this.getValueAtTime(e));const r=this._events.get(e);return r&&r.time===e&&r.type==="setValueAtTime"&&(i=this._fromType(this.getValueAtTime(e-this.sampleTime))),.5*(e-t.time)*(n+i)+t.ticks}getTicksAtTime(t){const e=this.toSeconds(t),n=this._events.get(e);return Math.max(this._getTicksUntilEvent(n,e),0)}getDurationOfTicks(t,e){const n=this.toSeconds(e),i=this.getTicksAtTime(e);return this.getTimeOfTick(i+t)-n}getTimeOfTick(t){const e=this._events.get(t,"ticks"),n=this._events.getAfter(t,"ticks");if(e&&e.ticks===t)return e.time;if(e&&n&&n.type==="linearRampToValueAtTime"&&e.value!==n.value){const i=this._fromType(this.getValueAtTime(e.time)),o=(this._fromType(this.getValueAtTime(n.time))-i)/(n.time-e.time),a=Math.sqrt(Math.pow(i,2)-2*o*(e.ticks-t)),c=(-i+a)/o,l=(-i-a)/o;return(c>0?c:l)+e.time}else return e?e.value===0?1/0:e.time+(t-e.ticks)/e.value:t/this._initialValue}ticksToTime(t,e){return this.getDurationOfTicks(t,e)}timeToTicks(t,e){const n=this.toSeconds(e),i=this.toSeconds(t),r=this.getTicksAtTime(n);return this.getTicksAtTime(n+i)-r}_fromType(t){return this.units==="bpm"&&this.multiplier?1/(60/t/this.multiplier):super._fromType(t)}_toType(t){return this.units==="bpm"&&this.multiplier?t/this.multiplier*60:super._toType(t)}get multiplier(){return this._multiplier}set multiplier(t){const e=this.value;this._multiplier=t,this.cancelScheduledValues(0),this.setValueAtTime(e,0)}}class Vc extends Be{constructor(){super(ft(Vc.getDefaults(),arguments,["value"])),this.name="TickSignal";const t=ft(Vc.getDefaults(),arguments,["value"]);this.input=this._param=new Bc({context:this.context,convert:t.convert,multiplier:t.multiplier,param:this._constantSource.offset,units:t.units,value:t.value})}static getDefaults(){return Object.assign(Be.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(t,e){return this._param.ticksToTime(t,e)}timeToTicks(t,e){return this._param.timeToTicks(t,e)}getTimeOfTick(t){return this._param.getTimeOfTick(t)}getDurationOfTicks(t,e){return this._param.getDurationOfTicks(t,e)}getTicksAtTime(t){return this._param.getTicksAtTime(t)}get multiplier(){return this._param.multiplier}set multiplier(t){this._param.multiplier=t}dispose(){return super.dispose(),this._param.dispose(),this}}class zc extends qe{constructor(){super(ft(zc.getDefaults(),arguments,["frequency"])),this.name="TickSource",this._state=new fl,this._tickOffset=new Ci;const t=ft(zc.getDefaults(),arguments,["frequency"]);this.frequency=new Vc({context:this.context,units:t.units,value:t.frequency}),be(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},qe.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(t,e){const n=this.toSeconds(t);return this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),Zt(e)&&this.setTicksAtTime(e,n)),this}stop(t){const e=this.toSeconds(t);if(this._state.getValueAtTime(e)==="stopped"){const n=this._state.get(e);n&&n.time>0&&(this._tickOffset.cancel(n.time),this._state.cancel(n.time))}return this._state.cancel(e),this._state.setStateAtTime("stopped",e),this.setTicksAtTime(0,e),this}pause(t){const e=this.toSeconds(t);return this._state.getValueAtTime(e)==="started"&&this._state.setStateAtTime("paused",e),this}cancel(t){return t=this.toSeconds(t),this._state.cancel(t),this._tickOffset.cancel(t),this}getTicksAtTime(t){const e=this.toSeconds(t),n=this._state.getLastState("stopped",e),i={state:"paused",time:e};this._state.add(i);let r=n,o=0;return this._state.forEachBetween(n.time,e+this.sampleTime,a=>{let c=r.time;const l=this._tickOffset.get(a.time);l&&l.time>=r.time&&(o=l.ticks,c=l.time),r.state==="started"&&a.state!=="started"&&(o+=this.frequency.getTicksAtTime(a.time)-this.frequency.getTicksAtTime(c)),r=a}),this._state.remove(i),o}get ticks(){return this.getTicksAtTime(this.now())}set ticks(t){this.setTicksAtTime(t,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(t){const e=this.now(),n=this.frequency.timeToTicks(t,e);this.setTicksAtTime(n,e)}getSecondsAtTime(t){t=this.toSeconds(t);const e=this._state.getLastState("stopped",t),n={state:"paused",time:t};this._state.add(n);let i=e,r=0;return this._state.forEachBetween(e.time,t+this.sampleTime,o=>{let a=i.time;const c=this._tickOffset.get(o.time);c&&c.time>=i.time&&(r=c.seconds,a=c.time),i.state==="started"&&o.state!=="started"&&(r+=o.time-a),i=o}),this._state.remove(n),r}setTicksAtTime(t,e){return e=this.toSeconds(e),this._tickOffset.cancel(e),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(t,e),ticks:t,time:e}),this}getStateAtTime(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)}getTimeOfTick(t,e=this.now()){const n=this._tickOffset.get(e),i=this._state.get(e),r=Math.max(n.time,i.time),o=this.frequency.getTicksAtTime(r)+t-n.ticks;return this.frequency.getTimeOfTick(o)}forEachTickBetween(t,e,n){let i=this._state.get(t);this._state.forEachBetween(t,e,o=>{i&&i.state==="started"&&o.state!=="started"&&this.forEachTickBetween(Math.max(i.time,t),o.time-this.sampleTime,n),i=o});let r=null;if(i&&i.state==="started"){const o=Math.max(i.time,t),a=this.frequency.getTicksAtTime(o),c=this.frequency.getTicksAtTime(i.time),l=a-c;let u=Math.ceil(l)-l;u=ni(u,1)?0:u;let h=this.frequency.getTimeOfTick(a+u);for(;h<e;){try{n(h,Math.round(this.getTicksAtTime(h)))}catch(d){r=d;break}h+=this.frequency.getDurationOfTicks(1,h)}}if(r)throw r;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this.frequency.dispose(),this}}class Jo extends qe{constructor(){super(ft(Jo.getDefaults(),arguments,["callback","frequency"])),this.name="Clock",this.callback=ne,this._lastUpdate=0,this._state=new fl("stopped"),this._boundLoop=this._loop.bind(this);const t=ft(Jo.getDefaults(),arguments,["callback","frequency"]);this.callback=t.callback,this._tickSource=new zc({context:this.context,frequency:t.frequency,units:t.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,be(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(qe.getDefaults(),{callback:ne,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(t,e){Y_(this.context);const n=this.toSeconds(t);return this.log("start",n),this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),this._tickSource.start(n,e),n<this._lastUpdate&&this.emit("start",n,e)),this}stop(t){const e=this.toSeconds(t);return this.log("stop",e),this._state.cancel(e),this._state.setStateAtTime("stopped",e),this._tickSource.stop(e),e<this._lastUpdate&&this.emit("stop",e),this}pause(t){const e=this.toSeconds(t);return this._state.getValueAtTime(e)==="started"&&(this._state.setStateAtTime("paused",e),this._tickSource.pause(e),e<this._lastUpdate&&this.emit("pause",e)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(t){this._tickSource.ticks=t}get seconds(){return this._tickSource.seconds}set seconds(t){this._tickSource.seconds=t}getSecondsAtTime(t){return this._tickSource.getSecondsAtTime(t)}setTicksAtTime(t,e){return this._tickSource.setTicksAtTime(t,e),this}getTimeOfTick(t,e=this.now()){return this._tickSource.getTimeOfTick(t,e)}getTicksAtTime(t){return this._tickSource.getTicksAtTime(t)}nextTickTime(t,e){const n=this.toSeconds(e),i=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(i+t,n)}_loop(){const t=this._lastUpdate,e=this.now();this._lastUpdate=e,this.log("loop",t,e),t!==e&&(this._state.forEachBetween(t,e,n=>{switch(n.state){case"started":const i=this._tickSource.getTicksAtTime(n.time);this.emit("start",n.time,i);break;case"stopped":n.time!==0&&this.emit("stop",n.time);break;case"paused":this.emit("pause",n.time);break}}),this._tickSource.forEachTickBetween(t,e,(n,i)=>{this.callback(n,i)}))}getStateAtTime(t){const e=this.toSeconds(t);return this._state.getValueAtTime(e)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}}ba.mixin(Jo);class Wh extends Ji{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;const t=ft(Wh.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=t.baseUrl,Object.keys(t.urls).forEach(e=>{this._loadingCount++;const n=t.urls[e];this.add(e,n,this._bufferLoaded.bind(this,t.onload),t.onerror)})}static getDefaults(){return{baseUrl:"",onerror:ne,onload:ne,urls:{}}}has(t){return this._buffers.has(t.toString())}get(t){return kt(this.has(t),`ToneAudioBuffers has no buffer named: ${t}`),this._buffers.get(t.toString())}_bufferLoaded(t){this._loadingCount--,this._loadingCount===0&&t&&t()}get loaded(){return Array.from(this._buffers).every(([t,e])=>e.loaded)}add(t,e,n=ne,i=ne){return Mi(e)?this._buffers.set(t.toString(),new ae(this.baseUrl+e,n,i)):this._buffers.set(t.toString(),new ae(e,n,i)),this}dispose(){return super.dispose(),this._buffers.forEach(t=>t.dispose()),this._buffers.clear(),this}}class Gc extends On{constructor(){super(...arguments),this.name="MidiClass",this.defaultUnits="midi"}_frequencyToUnits(t){return Ws(super._frequencyToUnits(t))}_ticksToUnits(t){return Ws(super._ticksToUnits(t))}_beatsToUnits(t){return Ws(super._beatsToUnits(t))}_secondsToUnits(t){return Ws(super._secondsToUnits(t))}toMidi(){return this.valueOf()}toFrequency(){return rg(this.toMidi())}transpose(t){return new Gc(this.context,this.toMidi()+t)}}class fn extends Vo{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(t){return this._getPPQ()*t}_secondsToUnits(t){return Math.floor(t/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(t){return t}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}}class lR extends qe{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new Ci,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(t,e){return this._events.add({callback:t,time:this.toSeconds(e)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(t){return this._events.cancel(this.toSeconds(t)),this}_drawLoop(){const t=this.context.currentTime;for(;this._events.length&&this._events.peek().time-this.anticipation<=t;){const e=this._events.shift();e&&t-e.time<=this.expiration&&e.callback()}this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}}ul(s=>{s.draw=new lR({context:s})});hl(s=>{s.draw.dispose()});class uR extends Ji{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(t){kt(Zt(t.time),"Events must have a time property"),kt(Zt(t.duration),"Events must have a duration parameter"),t.time=t.time.valueOf();let e=new hR(t.time,t.time+t.duration,t);for(this._root===null?this._root=e:this._root.insert(e),this._length++;e!==null;)e.updateHeight(),e.updateMax(),this._rebalance(e),e=e.parent;return this}remove(t){if(this._root!==null){const e=[];this._root.search(t.time,e);for(const n of e)if(n.event===t){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(t){return this.forEachFrom(t,e=>this.remove(e)),this}_setRoot(t){this._root=t,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(t,e){t.parent!==null?(t.isLeftChild()?t.parent.left=e:t.parent.right=e,this._rebalance(t.parent)):this._setRoot(e)}_removeNode(t){if(t.left===null&&t.right===null)this._replaceNodeInParent(t,null);else if(t.right===null)this._replaceNodeInParent(t,t.left);else if(t.left===null)this._replaceNodeInParent(t,t.right);else{const e=t.getBalance();let n,i=null;if(e>0)if(t.left.right===null)n=t.left,n.right=t.right,i=n;else{for(n=t.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,i=n.parent,n.left=t.left,n.right=t.right)}else if(t.right.left===null)n=t.right,n.left=t.left,i=n;else{for(n=t.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,i=n.parent,n.left=t.left,n.right=t.right)}t.parent!==null?t.isLeftChild()?t.parent.left=n:t.parent.right=n:this._setRoot(n),i&&this._rebalance(i)}t.dispose()}_rotateLeft(t){const e=t.parent,n=t.isLeftChild(),i=t.right;i&&(t.right=i.left,i.left=t),e!==null?n?e.left=i:e.right=i:this._setRoot(i)}_rotateRight(t){const e=t.parent,n=t.isLeftChild(),i=t.left;i&&(t.left=i.right,i.right=t),e!==null?n?e.left=i:e.right=i:this._setRoot(i)}_rebalance(t){const e=t.getBalance();e>1&&t.left?t.left.getBalance()<0?this._rotateLeft(t.left):this._rotateRight(t):e<-1&&t.right&&(t.right.getBalance()>0?this._rotateRight(t.right):this._rotateLeft(t))}get(t){if(this._root!==null){const e=[];if(this._root.search(t,e),e.length>0){let n=e[0];for(let i=1;i<e.length;i++)e[i].low>n.low&&(n=e[i]);return n.event}}return null}forEach(t){if(this._root!==null){const e=[];this._root.traverse(n=>e.push(n)),e.forEach(n=>{n.event&&t(n.event)})}return this}forEachAtTime(t,e){if(this._root!==null){const n=[];this._root.search(t,n),n.forEach(i=>{i.event&&e(i.event)})}return this}forEachFrom(t,e){if(this._root!==null){const n=[];this._root.searchAfter(t,n),n.forEach(i=>{i.event&&e(i.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(t=>t.dispose()),this._root=null,this}}class hR{constructor(t,e,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=t,this.high=e,this.max=this.high}insert(t){t.low<=this.low?this.left===null?this.left=t:this.left.insert(t):this.right===null?this.right=t:this.right.insert(t)}search(t,e){t>this.max||(this.left!==null&&this.left.search(t,e),this.low<=t&&this.high>t&&e.push(this),!(this.low>t)&&this.right!==null&&this.right.search(t,e))}searchAfter(t,e){this.low>=t&&(e.push(this),this.left!==null&&this.left.searchAfter(t,e)),this.right!==null&&this.right.searchAfter(t,e)}traverse(t){t(this),this.left!==null&&this.left.traverse(t),this.right!==null&&this.right.traverse(t)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let t=0;return this.left!==null&&this.right!==null?t=this.left.height-this.right.height:this.left!==null?t=this.left.height+1:this.right!==null&&(t=-(this.right.height+1)),t}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(t){this._left=t,t!==null&&(t.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(t){this._right=t,t!==null&&(t.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}}class or extends jt{constructor(){super(ft(or.getDefaults(),arguments,["volume"])),this.name="Volume";const t=ft(or.getDefaults(),arguments,["volume"]);this.input=this.output=new vn({context:this.context,gain:t.volume,units:"decibels"}),this.volume=this.output.gain,be(this,"volume"),this._unmutedVolume=t.volume,this.mute=t.mute}static getDefaults(){return Object.assign(jt.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(t){!this.mute&&t?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!t&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}}class Hc extends jt{constructor(){super(ft(Hc.getDefaults(),arguments)),this.name="Destination",this.input=new or({context:this.context}),this.output=new vn({context:this.context}),this.volume=this.input.volume;const t=ft(Hc.getDefaults(),arguments);Hu(this.input,this.output,this.context.rawContext.destination),this.mute=t.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(jt.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(t){this.input.mute=t}chain(...t){return this.input.disconnect(),t.unshift(this.input),t.push(this.output),Hu(...t),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}}ul(s=>{s.destination=new Hc({context:s})});hl(s=>{s.destination.dispose()});class dR extends Ji{constructor(t){super(),this.name="TimelineValue",this._timeline=new Ci({memory:10}),this._initialValue=t}set(t,e){return this._timeline.add({value:t,time:e}),this}get(t){const e=this._timeline.get(t);return e?e.value:this._initialValue}}class bs{constructor(t,e){this.id=bs._eventId++;const n=Object.assign(bs.getDefaults(),e);this.transport=t,this.callback=n.callback,this._once=n.once,this.time=n.time}static getDefaults(){return{callback:ne,once:!1,time:0}}invoke(t){this.callback&&(this.callback(t),this._once&&this.transport.clear(this.id))}dispose(){return this.callback=void 0,this}}bs._eventId=0;class Xh extends bs{constructor(t,e){super(t,e),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);const n=Object.assign(Xh.getDefaults(),e);this.duration=new fn(t.context,n.duration).valueOf(),this._interval=new fn(t.context,n.interval).valueOf(),this._nextTick=n.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},bs.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(t){this._createEvents(t),super.invoke(t)}_createEvents(t){const e=this.transport.getTicksAtTime(t);e>=this.time&&e>=this._nextTick&&this._nextTick+this._interval<this.time+this.duration&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new fn(this.context,this._nextTick).toSeconds()))}_restart(t){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.time;const e=this.transport.getTicksAtTime(t);e>this.time&&(this._nextTick=this.time+Math.ceil((e-this.time)/this._interval)*this._interval),this._currentId=this.transport.scheduleOnce(this.invoke.bind(this),new fn(this.context,this._nextTick).toSeconds()),this._nextTick+=this._interval,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new fn(this.context,this._nextTick).toSeconds())}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this}}class Qo extends qe{constructor(){super(ft(Qo.getDefaults(),arguments)),this.name="Transport",this._loop=new dR(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new Ci,this._repeatedEvents=new uR,this._syncedSignals=[],this._swingAmount=0;const t=ft(Qo.getDefaults(),arguments);this._ppq=t.ppq,this._clock=new Jo({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=t.ppq,this.bpm.setValueAtTime(t.bpm,0),be(this,"bpm"),this._timeSignature=t.timeSignature,this._swingTicks=t.ppq/2}static getDefaults(){return Object.assign(qe.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(t,e){if(this._loop.get(t)&&e>=this._loopEnd&&(this.emit("loopEnd",t),this._clock.setTicksAtTime(this._loopStart,t),e=this._loopStart,this.emit("loopStart",t,this._clock.getSecondsAtTime(t)),this.emit("loop",t)),this._swingAmount>0&&e%this._ppq!==0&&e%(this._swingTicks*2)!==0){const n=e%(this._swingTicks*2)/(this._swingTicks*2),i=Math.sin(n*Math.PI)*this._swingAmount;t+=new fn(this.context,this._swingTicks*2/3).toSeconds()*i}this._timeline.forEachAtTime(e,n=>n.invoke(t))}schedule(t,e){const n=new bs(this,{callback:t,time:new Vo(this.context,e).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(t,e,n,i=1/0){const r=new Xh(this,{callback:t,duration:new oi(this.context,i).toTicks(),interval:new oi(this.context,e).toTicks(),time:new Vo(this.context,n).toTicks()});return this._addEvent(r,this._repeatedEvents)}scheduleOnce(t,e){const n=new bs(this,{callback:t,once:!0,time:new Vo(this.context,e).toTicks()});return this._addEvent(n,this._timeline)}clear(t){if(this._scheduledEvents.hasOwnProperty(t)){const e=this._scheduledEvents[t.toString()];e.timeline.remove(e.event),e.event.dispose(),delete this._scheduledEvents[t.toString()]}return this}_addEvent(t,e){return this._scheduledEvents[t.id.toString()]={event:t,timeline:e},e.add(t),t.id}cancel(t=0){const e=this.toTicks(t);return this._timeline.forEachFrom(e,n=>this.clear(n.id)),this._repeatedEvents.forEachFrom(e,n=>this.clear(n.id)),this}_bindClockEvents(){this._clock.on("start",(t,e)=>{e=new fn(this.context,e).toSeconds(),this.emit("start",t,e)}),this._clock.on("stop",t=>{this.emit("stop",t)}),this._clock.on("pause",t=>{this.emit("pause",t)})}get state(){return this._clock.getStateAtTime(this.now())}start(t,e){let n;return Zt(e)&&(n=this.toTicks(e)),this._clock.start(t,n),this}stop(t){return this._clock.stop(t),this}pause(t){return this._clock.pause(t),this}toggle(t){return t=this.toSeconds(t),this._clock.getStateAtTime(t)!=="started"?this.start(t):this.stop(t),this}get timeSignature(){return this._timeSignature}set timeSignature(t){Un(t)&&(t=t[0]/t[1]*4),this._timeSignature=t}get loopStart(){return new oi(this.context,this._loopStart,"i").toSeconds()}set loopStart(t){this._loopStart=this.toTicks(t)}get loopEnd(){return new oi(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(t){this._loopEnd=this.toTicks(t)}get loop(){return this._loop.get(this.now())}set loop(t){this._loop.set(t,this.now())}setLoopPoints(t,e){return this.loopStart=t,this.loopEnd=e,this}get swing(){return this._swingAmount}set swing(t){this._swingAmount=t}get swingSubdivision(){return new fn(this.context,this._swingTicks).toNotation()}set swingSubdivision(t){this._swingTicks=this.toTicks(t)}get position(){const t=this.now(),e=this._clock.getTicksAtTime(t);return new fn(this.context,e).toBarsBeatsSixteenths()}set position(t){const e=this.toTicks(t);this.ticks=e}get seconds(){return this._clock.seconds}set seconds(t){const e=this.now(),n=this._clock.frequency.timeToTicks(t,e);this.ticks=n}get progress(){if(this.loop){const t=this.now();return(this._clock.getTicksAtTime(t)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(t){if(this._clock.ticks!==t){const e=this.now();if(this.state==="started"){const n=this._clock.getTicksAtTime(e),i=this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,e),r=e+i;this.emit("stop",r),this._clock.setTicksAtTime(t,r),this.emit("start",r,this._clock.getSecondsAtTime(r))}else this._clock.setTicksAtTime(t,e)}}getTicksAtTime(t){return Math.round(this._clock.getTicksAtTime(t))}getSecondsAtTime(t){return this._clock.getSecondsAtTime(t)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(t){this._clock.frequency.multiplier=t}nextSubdivision(t){if(t=this.toTicks(t),this.state!=="started")return 0;{const e=this.now(),n=this.getTicksAtTime(e),i=t-n%t;return this._clock.nextTickTime(i,e)}}syncSignal(t,e){if(!e){const i=this.now();if(t.getValueAtTime(i)!==0){const o=1/(60/this.bpm.getValueAtTime(i)/this.PPQ);e=t.getValueAtTime(i)/o}else e=0}const n=new vn(e);return this.bpm.connect(n),n.connect(t._param),this._syncedSignals.push({initial:t.value,ratio:n,signal:t}),t.value=0,this}unsyncSignal(t){for(let e=this._syncedSignals.length-1;e>=0;e--){const n=this._syncedSignals[e];n.signal===t&&(n.ratio.dispose(),n.signal.value=n.initial,this._syncedSignals.splice(e,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),eg(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}}ba.mixin(Qo);ul(s=>{s.transport=new Qo({context:s})});hl(s=>{s.transport.dispose()});class Bn extends jt{constructor(t){super(t),this.input=void 0,this._state=new fl("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=ne,this._syncedStop=ne,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new or({context:this.context,mute:t.mute,volume:t.volume}),this.volume=this._volume.volume,be(this,"volume"),this.onstop=t.onstop}static getDefaults(){return Object.assign(jt.getDefaults(),{mute:!1,onstop:ne,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(t){this._volume.mute=t}_clampToCurrentTime(t){return this._synced?t:Math.max(t,this.context.currentTime)}start(t,e,n){let i=jn(t)&&this._synced?this.context.transport.seconds:this.toSeconds(t);if(i=this._clampToCurrentTime(i),!this._synced&&this._state.getValueAtTime(i)==="started")kt(Uc(i,this._state.get(i).time),"Start time must be strictly greater than previous start time"),this._state.cancel(i),this._state.setStateAtTime("started",i),this.log("restart",i),this.restart(i,e,n);else if(this.log("start",i),this._state.setStateAtTime("started",i),this._synced){const r=this._state.get(i);r&&(r.offset=this.toSeconds(er(e,0)),r.duration=n?this.toSeconds(n):void 0);const o=this.context.transport.schedule(a=>{this._start(a,e,n)},i);this._scheduled.push(o),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>i&&this._syncedStart(this.now(),this.context.transport.seconds)}else Y_(this.context),this._start(i,e,n);return this}stop(t){let e=jn(t)&&this._synced?this.context.transport.seconds:this.toSeconds(t);if(e=this._clampToCurrentTime(e),this._state.getValueAtTime(e)==="started"||Zt(this._state.getNextState("started",e))){if(this.log("stop",e),!this._synced)this._stop(e);else{const n=this.context.transport.schedule(this._stop.bind(this),e);this._scheduled.push(n)}this._state.cancel(e),this._state.setStateAtTime("stopped",e)}return this}restart(t,e,n){return t=this.toSeconds(t),this._state.getValueAtTime(t)==="started"&&(this._state.cancel(t),this._restart(t,e,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(t,e)=>{if(e>0){const n=this._state.get(e);if(n&&n.state==="started"&&n.time!==e){const i=e-this.toSeconds(n.time);let r;n.duration&&(r=this.toSeconds(n.duration)-i),this._start(t,this.toSeconds(n.offset)+i,r)}}},this._syncedStop=t=>{const e=this.context.transport.getSecondsAtTime(Math.max(t-this.sampleTime,0));this._state.getValueAtTime(e)==="started"&&this._stop(t)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(t=>this.context.transport.clear(t)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=ne,this.unsync(),this._volume.dispose(),this._state.dispose(),this}}class ta extends uo{constructor(){super(ft(ta.getDefaults(),arguments,["url","onload"])),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1;const t=ft(ta.getDefaults(),arguments,["url","onload"]);Mo(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new pe({context:this.context,param:this._source.playbackRate,units:"positive",value:t.playbackRate}),this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this._buffer=new ae(t.url,t.onload,t.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(uo.getDefaults(),{url:new ae,loop:!1,loopEnd:0,loopStart:0,onload:ne,onerror:ne,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(t){this._fadeIn=t}get fadeOut(){return this._fadeOut}set fadeOut(t){this._fadeOut=t}get curve(){return this._curve}set curve(t){this._curve=t}start(t,e,n,i=1){kt(this.buffer.loaded,"buffer is either not set or not loaded");const r=this.toSeconds(t);this._startGain(r,i),this.loop?e=er(e,this.loopStart):e=er(e,0);let o=Math.max(this.toSeconds(e),0);if(this.loop){const a=this.toSeconds(this.loopEnd)||this.buffer.duration,c=this.toSeconds(this.loopStart),l=a-c;Gu(o,a)&&(o=(o-c)%l+c),ni(o,this.buffer.duration)&&(o=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,K_(o,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(r,o)),Zt(n)){let a=this.toSeconds(n);a=Math.max(a,0),this.stop(r+a)}return this}_stopSource(t){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(t)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(t){this._source.loopStart=this.toSeconds(t)}get loopEnd(){return this._source.loopEnd}set loopEnd(t){this._source.loopEnd=this.toSeconds(t)}get buffer(){return this._buffer}set buffer(t){this._buffer.set(t)}get loop(){return this._source.loop}set loop(t){this._source.loop=t,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}}function mr(s,t){return Oe(this,void 0,void 0,function*(){const e=t/s.context.sampleRate,n=new zh(1,e,s.context.sampleRate);return new s.constructor(Object.assign(s.get(),{frequency:2/e,detune:0,context:n})).toDestination().start(0),(yield n.render()).getChannelData(0)})}class Wc extends uo{constructor(){super(ft(Wc.getDefaults(),arguments,["frequency","type"])),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator];const t=ft(Wc.getDefaults(),arguments,["frequency","type"]);Mo(this._oscillator,this._gainNode),this.type=t.type,this.frequency=new pe({context:this.context,param:this._oscillator.frequency,units:"frequency",value:t.frequency}),this.detune=new pe({context:this.context,param:this._oscillator.detune,units:"cents",value:t.detune}),be(this,["frequency","detune"])}static getDefaults(){return Object.assign(uo.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(t){const e=this.toSeconds(t);return this.log("start",e),this._startGain(e),this._oscillator.start(e),this}_stopSource(t){this._oscillator.stop(t)}setPeriodicWave(t){return this._oscillator.setPeriodicWave(t),this}get type(){return this._oscillator.type}set type(t){this._oscillator.type=t}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}}class Pe extends Bn{constructor(){super(ft(Pe.getDefaults(),arguments,["frequency","type"])),this.name="Oscillator",this._oscillator=null;const t=ft(Pe.getDefaults(),arguments,["frequency","type"]);this.frequency=new Be({context:this.context,units:"frequency",value:t.frequency}),be(this,"frequency"),this.detune=new Be({context:this.context,units:"cents",value:t.detune}),be(this,"detune"),this._partials=t.partials,this._partialCount=t.partialCount,this._type=t.type,t.partialCount&&t.type!=="custom"&&(this._type=this.baseType+t.partialCount.toString()),this.phase=t.phase}static getDefaults(){return Object.assign(Bn.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(t){const e=this.toSeconds(t),n=new Wc({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(e)}_stop(t){const e=this.toSeconds(t);this._oscillator&&this._oscillator.stop(e)}_restart(t){const e=this.toSeconds(t);return this.log("restart",e),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(e),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return Pe._periodicWaveCache.find(e=>e.phase===this._phase&&jC(e.partials,this._partials));{const t=Pe._periodicWaveCache.find(e=>e.type===this._type&&e.phase===this._phase);return this._partialCount=t?t.partialCount:this._partialCount,t}}get type(){return this._type}set type(t){this._type=t;const e=["sine","square","sawtooth","triangle"].indexOf(t)!==-1;if(this._phase===0&&e)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=t);else{const n=this._getCachedPeriodicWave();if(Zt(n)){const{partials:i,wave:r}=n;this._wave=r,this._partials=i,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{const[i,r]=this._getRealImaginary(t,this._phase),o=this.context.createPeriodicWave(i,r);this._wave=o,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),Pe._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:i,type:this._type,wave:this._wave}),Pe._periodicWaveCache.length>100&&Pe._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(t){this.partialCount&&this._type!=="custom"&&t!=="custom"?this.type=t+this.partialCount:this.type=t}get partialCount(){return this._partialCount}set partialCount(t){Ts(t,0);let e=this._type;const n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(e=n[1]),this._type!=="custom")t===0?this.type=e:this.type=e+t.toString();else{const i=new Float32Array(t);this._partials.forEach((r,o)=>i[o]=r),this._partials=Array.from(i),this.type=this._type}}_getRealImaginary(t,e){let i=2048;const r=new Float32Array(i),o=new Float32Array(i);let a=1;if(t==="custom"){if(a=this._partials.length+1,this._partialCount=this._partials.length,i=a,this._partials.length===0)return[r,o]}else{const c=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);c?(a=parseInt(c[2],10)+1,this._partialCount=parseInt(c[2],10),t=c[1],a=Math.max(a,2),i=a):this._partialCount=0,this._partials=[]}for(let c=1;c<i;++c){const l=2/(c*Math.PI);let u;switch(t){case"sine":u=c<=a?1:0,this._partials[c-1]=u;break;case"square":u=c&1?2*l:0,this._partials[c-1]=u;break;case"sawtooth":u=l*(c&1?1:-1),this._partials[c-1]=u;break;case"triangle":c&1?u=2*(l*l)*(c-1>>1&1?-1:1):u=0,this._partials[c-1]=u;break;case"custom":u=this._partials[c-1];break;default:throw new TypeError("Oscillator: invalid type: "+t)}u!==0?(r[c]=-u*Math.sin(e*c),o[c]=u*Math.cos(e*c)):(r[c]=0,o[c]=0)}return[r,o]}_inverseFFT(t,e,n){let i=0;const r=t.length;for(let o=0;o<r;o++)i+=t[o]*Math.cos(o*n)+e[o]*Math.sin(o*n);return i}getInitialValue(){const[t,e]=this._getRealImaginary(this._type,0);let n=0;const i=Math.PI*2,r=32;for(let o=0;o<r;o++)n=Math.max(this._inverseFFT(t,e,o/r*i),n);return ZC(-this._inverseFFT(t,e,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(t){this._partials=t,this._partialCount=this._partials.length,t.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(t){this._phase=t*Math.PI/180,this.type=this._type}asArray(t=1024){return Oe(this,void 0,void 0,function*(){return mr(this,t)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}}Pe._periodicWaveCache=[];class pl extends jt{constructor(){super(Object.assign(ft(pl.getDefaults(),arguments,["context"])))}connect(t,e=0,n=0){return Hh(this,t,e,n),this}}class ea extends pl{constructor(){super(Object.assign(ft(ea.getDefaults(),arguments,["mapping","length"]))),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper;const t=ft(ea.getDefaults(),arguments,["mapping","length"]);Un(t.mapping)||t.mapping instanceof Float32Array?this.curve=Float32Array.from(t.mapping):zC(t.mapping)&&this.setMap(t.mapping,t.length)}static getDefaults(){return Object.assign(Be.getDefaults(),{length:1024})}setMap(t,e=1024){const n=new Float32Array(e);for(let i=0,r=e;i<r;i++){const o=i/(r-1)*2-1;n[i]=t(o,i)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(t){this._shaper.curve=t}get oversample(){return this._shaper.oversample}set oversample(t){const e=["none","2x","4x"].some(n=>n.includes(t));kt(e,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=t}dispose(){return super.dispose(),this._shaper.disconnect(),this}}class fR extends pl{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new ea({context:this.context,mapping:t=>(t+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class ar extends Be{constructor(){super(Object.assign(ft(ar.getDefaults(),arguments,["value"]))),this.name="Multiply",this.override=!1;const t=ft(ar.getDefaults(),arguments,["value"]);this._mult=this.input=this.output=new vn({context:this.context,minValue:t.minValue,maxValue:t.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(Be.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}}class na extends Bn{constructor(){super(ft(na.getDefaults(),arguments,["frequency","type","modulationType"])),this.name="AMOscillator",this._modulationScale=new fR({context:this.context}),this._modulationNode=new vn({context:this.context});const t=ft(na.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new Pe({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase,type:t.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new Pe({context:this.context,phase:t.phase,type:t.modulationType}),this.harmonicity=new ar({context:this.context,units:"positive",value:t.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),be(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(Pe.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(t){this._modulator.start(t),this._carrier.start(t)}_stop(t){this._modulator.stop(t),this._carrier.stop(t)}_restart(t){this._modulator.restart(t),this._carrier.restart(t)}get type(){return this._carrier.type}set type(t){this._carrier.type=t}get baseType(){return this._carrier.baseType}set baseType(t){this._carrier.baseType=t}get partialCount(){return this._carrier.partialCount}set partialCount(t){this._carrier.partialCount=t}get modulationType(){return this._modulator.type}set modulationType(t){this._modulator.type=t}get phase(){return this._carrier.phase}set phase(t){this._carrier.phase=t,this._modulator.phase=t}get partials(){return this._carrier.partials}set partials(t){this._carrier.partials=t}asArray(t=1024){return Oe(this,void 0,void 0,function*(){return mr(this,t)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}}class ia extends Bn{constructor(){super(ft(ia.getDefaults(),arguments,["frequency","type","modulationType"])),this.name="FMOscillator",this._modulationNode=new vn({context:this.context,gain:0});const t=ft(ia.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new Pe({context:this.context,detune:t.detune,frequency:0,onstop:()=>this.onstop(this),phase:t.phase,type:t.type}),this.detune=this._carrier.detune,this.frequency=new Be({context:this.context,units:"frequency",value:t.frequency}),this._modulator=new Pe({context:this.context,phase:t.phase,type:t.modulationType}),this.harmonicity=new ar({context:this.context,units:"positive",value:t.harmonicity}),this.modulationIndex=new ar({context:this.context,units:"positive",value:t.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),be(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(Pe.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(t){this._modulator.start(t),this._carrier.start(t)}_stop(t){this._modulator.stop(t),this._carrier.stop(t)}_restart(t){return this._modulator.restart(t),this._carrier.restart(t),this}get type(){return this._carrier.type}set type(t){this._carrier.type=t}get baseType(){return this._carrier.baseType}set baseType(t){this._carrier.baseType=t}get partialCount(){return this._carrier.partialCount}set partialCount(t){this._carrier.partialCount=t}get modulationType(){return this._modulator.type}set modulationType(t){this._modulator.type=t}get phase(){return this._carrier.phase}set phase(t){this._carrier.phase=t,this._modulator.phase=t}get partials(){return this._carrier.partials}set partials(t){this._carrier.partials=t}asArray(t=1024){return Oe(this,void 0,void 0,function*(){return mr(this,t)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}}class ho extends Bn{constructor(){super(ft(ho.getDefaults(),arguments,["frequency","width"])),this.name="PulseOscillator",this._widthGate=new vn({context:this.context,gain:0}),this._thresh=new ea({context:this.context,mapping:e=>e<=0?-1:1});const t=ft(ho.getDefaults(),arguments,["frequency","width"]);this.width=new Be({context:this.context,units:"audioRange",value:t.width}),this._triangle=new Pe({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),be(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(Bn.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(t){t=this.toSeconds(t),this._triangle.start(t),this._widthGate.gain.setValueAtTime(1,t)}_stop(t){t=this.toSeconds(t),this._triangle.stop(t),this._widthGate.gain.cancelScheduledValues(t),this._widthGate.gain.setValueAtTime(0,t)}_restart(t){this._triangle.restart(t),this._widthGate.gain.cancelScheduledValues(t),this._widthGate.gain.setValueAtTime(1,t)}get phase(){return this._triangle.phase}set phase(t){this._triangle.phase=t}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(t){this._triangle.type=t}asArray(t=1024){return Oe(this,void 0,void 0,function*(){return mr(this,t)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}}class sa extends Bn{constructor(){super(ft(sa.getDefaults(),arguments,["frequency","type","spread"])),this.name="FatOscillator",this._oscillators=[];const t=ft(sa.getDefaults(),arguments,["frequency","type","spread"]);this.frequency=new Be({context:this.context,units:"frequency",value:t.frequency}),this.detune=new Be({context:this.context,units:"cents",value:t.detune}),this._spread=t.spread,this._type=t.type,this._phase=t.phase,this._partials=t.partials,this._partialCount=t.partialCount,this.count=t.count,be(this,["frequency","detune"])}static getDefaults(){return Object.assign(Pe.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(t){t=this.toSeconds(t),this._forEach(e=>e.start(t))}_stop(t){t=this.toSeconds(t),this._forEach(e=>e.stop(t))}_restart(t){this._forEach(e=>e.restart(t))}_forEach(t){for(let e=0;e<this._oscillators.length;e++)t(this._oscillators[e],e)}get type(){return this._type}set type(t){this._type=t,this._forEach(e=>e.type=t)}get spread(){return this._spread}set spread(t){if(this._spread=t,this._oscillators.length>1){const e=-t/2,n=t/(this._oscillators.length-1);this._forEach((i,r)=>i.detune.value=e+n*r)}}get count(){return this._oscillators.length}set count(t){if(Ts(t,1),this._oscillators.length!==t){this._forEach(e=>e.dispose()),this._oscillators=[];for(let e=0;e<t;e++){const n=new Pe({context:this.context,volume:-6-t*1.1,type:this._type,phase:this._phase+e/t*360,partialCount:this._partialCount,onstop:e===0?()=>this.onstop(this):ne});this.type==="custom"&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[e]=n}this.spread=this._spread,this.state==="started"&&this._forEach(e=>e.start())}}get phase(){return this._phase}set phase(t){this._phase=t,this._forEach((e,n)=>e.phase=this._phase+n/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(t){this._forEach(e=>e.baseType=t),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(t){this._partials=t,this._partialCount=this._partials.length,t.length&&(this._type="custom",this._forEach(e=>e.partials=t))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(t){this._partialCount=t,this._forEach(e=>e.partialCount=t),this._type=this._oscillators[0].type}asArray(t=1024){return Oe(this,void 0,void 0,function*(){return mr(this,t)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(t=>t.dispose()),this}}class ra extends Bn{constructor(){super(ft(ra.getDefaults(),arguments,["frequency","modulationFrequency"])),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new ar({context:this.context,value:2});const t=ft(ra.getDefaults(),arguments,["frequency","modulationFrequency"]);this._pulse=new ho({context:this.context,frequency:t.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new Pe({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),be(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(Bn.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(t){t=this.toSeconds(t),this._modulator.start(t),this._pulse.start(t)}_stop(t){t=this.toSeconds(t),this._modulator.stop(t),this._pulse.stop(t)}_restart(t){this._modulator.restart(t),this._pulse.restart(t)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(t){this._modulator.phase=t}asArray(t=1024){return Oe(this,void 0,void 0,function*(){return mr(this,t)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}}const gp={am:na,fat:sa,fm:ia,oscillator:Pe,pulse:ho,pwm:ra};class oa extends Bn{constructor(){super(ft(oa.getDefaults(),arguments,["frequency","type"])),this.name="OmniOscillator";const t=ft(oa.getDefaults(),arguments,["frequency","type"]);this.frequency=new Be({context:this.context,units:"frequency",value:t.frequency}),this.detune=new Be({context:this.context,units:"cents",value:t.detune}),be(this,["frequency","detune"]),this.set(t)}static getDefaults(){return Object.assign(Pe.getDefaults(),ia.getDefaults(),na.getDefaults(),sa.getDefaults(),ho.getDefaults(),ra.getDefaults())}_start(t){this._oscillator.start(t)}_stop(t){this._oscillator.stop(t)}_restart(t){return this._oscillator.restart(t),this}get type(){let t="";return["am","fm","fat"].some(e=>this._sourceType===e)&&(t=this._sourceType),t+this._oscillator.type}set type(t){t.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(2)):t.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(2)):t.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(3)):t==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):t==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=t)}get partials(){return this._oscillator.partials}set partials(t){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=t)}get partialCount(){return this._oscillator.partialCount}set partialCount(t){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=t)}set(t){return Reflect.has(t,"type")&&t.type&&(this.type=t.type),super.set(t),this}_createNewOscillator(t){if(t!==this._sourceType){this._sourceType=t;const e=gp[t],n=this.now();if(this._oscillator){const i=this._oscillator;i.stop(n),this.context.setTimeout(()=>i.dispose(),this.blockTime)}this._oscillator=new e({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(t){this._oscillator.phase=t}get sourceType(){return this._sourceType}set sourceType(t){let e="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(e=this._oscillator.type),t==="fm"?this.type="fm"+e:t==="am"?this.type="am"+e:t==="fat"?this.type="fat"+e:t==="oscillator"?this.type=e:t==="pulse"?this.type="pulse":t==="pwm"&&(this.type="pwm")}_getOscType(t,e){return t instanceof gp[e]}get baseType(){return this._oscillator.baseType}set baseType(t){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&t!=="pulse"&&t!=="pwm"&&(this._oscillator.baseType=t)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(t){this._getOscType(this._oscillator,"fat")&&Si(t)&&(this._oscillator.count=t)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(t){this._getOscType(this._oscillator,"fat")&&Si(t)&&(this._oscillator.spread=t)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(t){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&Mi(t)&&(this._oscillator.modulationType=t)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(t=1024){return Oe(this,void 0,void 0,function*(){return mr(this,t)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}}function og(s,t=1/0){const e=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return e.get(this)},set:function(r){Ts(r,s,t),e.set(this,r)}})}}function Qi(s,t=1/0){const e=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return e.get(this)},set:function(r){Ts(this.toSeconds(r),s,t),e.set(this,r)}})}}class aa extends Bn{constructor(){super(ft(aa.getDefaults(),arguments,["url","onload"])),this.name="Player",this._activeSources=new Set;const t=ft(aa.getDefaults(),arguments,["url","onload"]);this._buffer=new ae({onload:this._onload.bind(this,t.onload),onerror:t.onerror,reverse:t.reverse,url:t.url}),this.autostart=t.autostart,this._loop=t.loop,this._loopStart=t.loopStart,this._loopEnd=t.loopEnd,this._playbackRate=t.playbackRate,this.fadeIn=t.fadeIn,this.fadeOut=t.fadeOut}static getDefaults(){return Object.assign(Bn.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:ne,onerror:ne,playbackRate:1,reverse:!1})}load(t){return Oe(this,void 0,void 0,function*(){return yield this._buffer.load(t),this._onload(),this})}_onload(t=ne){t(),this.autostart&&this.start()}_onSourceEnd(t){this.onstop(this),this._activeSources.delete(t),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(t,e,n){return super.start(t,e,n),this}_start(t,e,n){this._loop?e=er(e,this._loopStart):e=er(e,0);const i=this.toSeconds(e),r=n;n=er(n,Math.max(this._buffer.duration-i,0));let o=this.toSeconds(n);o=o/this._playbackRate,t=this.toSeconds(t);const a=new ta({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(t+o),this._state.setStateAtTime("stopped",t+o,{implicitEnd:!0})),this._activeSources.add(a),this._loop&&jn(r)?a.start(t,i):a.start(t,i,o-this.toSeconds(this.fadeOut))}_stop(t){const e=this.toSeconds(t);this._activeSources.forEach(n=>n.stop(e))}restart(t,e,n){return super.restart(t,e,n),this}_restart(t,e,n){this._stop(t),this._start(t,e,n)}seek(t,e){const n=this.toSeconds(e);if(this._state.getValueAtTime(n)==="started"){const i=this.toSeconds(t);this._stop(n),this._start(n,i)}return this}setLoopPoints(t,e){return this.loopStart=t,this.loopEnd=e,this}get loopStart(){return this._loopStart}set loopStart(t){this._loopStart=t,this.buffer.loaded&&Ts(this.toSeconds(t),0,this.buffer.duration),this._activeSources.forEach(e=>{e.loopStart=t})}get loopEnd(){return this._loopEnd}set loopEnd(t){this._loopEnd=t,this.buffer.loaded&&Ts(this.toSeconds(t),0,this.buffer.duration),this._activeSources.forEach(e=>{e.loopEnd=t})}get buffer(){return this._buffer}set buffer(t){this._buffer.set(t)}get loop(){return this._loop}set loop(t){if(this._loop!==t&&(this._loop=t,this._activeSources.forEach(e=>{e.loop=t}),t)){const e=this._state.getNextState("stopped",this.now());e&&this._state.cancel(e.time)}}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t;const e=this.now(),n=this._state.getNextState("stopped",e);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(i=>i.cancelStop())),this._activeSources.forEach(i=>{i.playbackRate.setValueAtTime(t,e)})}get reverse(){return this._buffer.reverse}set reverse(t){this._buffer.reverse=t}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(t=>t.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}}ui([Qi(0)],aa.prototype,"fadeIn",void 0);ui([Qi(0)],aa.prototype,"fadeOut",void 0);class Ti extends jt{constructor(){super(ft(Ti.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="Envelope",this._sig=new Be({context:this.context,value:0}),this.output=this._sig,this.input=void 0;const t=ft(Ti.getDefaults(),arguments,["attack","decay","sustain","release"]);this.attack=t.attack,this.decay=t.decay,this.sustain=t.sustain,this.release=t.release,this.attackCurve=t.attackCurve,this.releaseCurve=t.releaseCurve,this.decayCurve=t.decayCurve}static getDefaults(){return Object.assign(jt.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(t,e){if(Mi(t))return t;{let n;for(n in sc)if(sc[n][e]===t)return n;return t}}_setCurve(t,e,n){if(Mi(n)&&Reflect.has(sc,n)){const i=sc[n];Js(i)?t!=="_decayCurve"&&(this[t]=i[e]):this[t]=i}else if(Un(n)&&t!=="_decayCurve")this[t]=n;else throw new Error("Envelope: invalid curve: "+n)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(t){this._setCurve("_attackCurve","In",t)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(t){this._setCurve("_releaseCurve","Out",t)}get decayCurve(){return this._decayCurve}set decayCurve(t){kt(["linear","exponential"].some(e=>e===t),`Invalid envelope curve: ${t}`),this._decayCurve=t}triggerAttack(t,e=1){this.log("triggerAttack",t,e),t=this.toSeconds(t);let i=this.toSeconds(this.attack);const r=this.toSeconds(this.decay),o=this.getValueAtTime(t);if(o>0){const a=1/i;i=(1-o)/a}if(i<this.sampleTime)this._sig.cancelScheduledValues(t),this._sig.setValueAtTime(e,t);else if(this._attackCurve==="linear")this._sig.linearRampTo(e,i,t);else if(this._attackCurve==="exponential")this._sig.targetRampTo(e,i,t);else{this._sig.cancelAndHoldAtTime(t);let a=this._attackCurve;for(let c=1;c<a.length;c++)if(a[c-1]<=o&&o<=a[c]){a=this._attackCurve.slice(c),a[0]=o;break}this._sig.setValueCurveAtTime(a,t,i,e)}if(r&&this.sustain<1){const a=e*this.sustain,c=t+i;this.log("decay",c),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(a,r+c):this._sig.exponentialApproachValueAtTime(a,c,r)}return this}triggerRelease(t){this.log("triggerRelease",t),t=this.toSeconds(t);const e=this.getValueAtTime(t);if(e>0){const n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,t):this._releaseCurve==="linear"?this._sig.linearRampTo(0,n,t):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,n,t):(kt(Un(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(t),this._sig.setValueCurveAtTime(this._releaseCurve,t,n,e))}return this}getValueAtTime(t){return this._sig.getValueAtTime(t)}triggerAttackRelease(t,e,n=1){return e=this.toSeconds(e),this.triggerAttack(e,n),this.triggerRelease(e+this.toSeconds(t)),this}cancel(t){return this._sig.cancelScheduledValues(this.toSeconds(t)),this}connect(t,e=0,n=0){return Hh(this,t,e,n),this}asArray(t=1024){return Oe(this,void 0,void 0,function*(){const e=t/this.context.sampleRate,n=new zh(1,e,this.context.sampleRate),i=this.toSeconds(this.attack)+this.toSeconds(this.decay),r=i+this.toSeconds(this.release),o=r*.1,a=r+o,c=new this.constructor(Object.assign(this.get(),{attack:e*this.toSeconds(this.attack)/a,decay:e*this.toSeconds(this.decay)/a,release:e*this.toSeconds(this.release)/a,context:n}));return c._sig.toDestination(),c.triggerAttackRelease(e*(i+o)/a,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}}ui([Qi(0)],Ti.prototype,"attack",void 0);ui([Qi(0)],Ti.prototype,"decay",void 0);ui([og(0,1)],Ti.prototype,"sustain",void 0);ui([Qi(0)],Ti.prototype,"release",void 0);const sc=(()=>{let t,e;const n=[];for(t=0;t<128;t++)n[t]=Math.sin(t/127*(Math.PI/2));const i=[],r=6.4;for(t=0;t<127;t++){e=t/127;const d=Math.sin(e*(Math.PI*2)*r-Math.PI/2)+1;i[t]=d/10+e*.83}i[127]=1;const o=[],a=5;for(t=0;t<128;t++)o[t]=Math.ceil(t/127*a)/a;const c=[];for(t=0;t<128;t++)e=t/127,c[t]=.5*(1-Math.cos(Math.PI*e));const l=[];for(t=0;t<128;t++){e=t/127;const d=Math.pow(e,3)*4+.2,m=Math.cos(d*Math.PI*2*e);l[t]=Math.abs(m*(1-e))}function u(d){const m=new Array(d.length);for(let g=0;g<d.length;g++)m[g]=1-d[g];return m}function h(d){return d.slice(0).reverse()}return{bounce:{In:u(l),Out:l},cosine:{In:n,Out:h(n)},exponential:"exponential",linear:"linear",ripple:{In:i,Out:u(i)},sine:{In:c,Out:u(c)},step:{In:o,Out:u(o)}}})();class $i extends jt{constructor(){super(ft($i.getDefaults(),arguments)),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease;const t=ft($i.getDefaults(),arguments);this._volume=this.output=new or({context:this.context,volume:t.volume}),this.volume=this._volume.volume,be(this,"volume")}static getDefaults(){return Object.assign(jt.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0)),this}_syncState(){let t=!1;return this._synced||(this._synced=!0,t=!0),t}_syncMethod(t,e){const n=this["_original_"+t]=this[t];this[t]=(...i)=>{const r=i[e],o=this.context.transport.schedule(a=>{i[e]=a,n.apply(this,i)},r);this._scheduledEvents.push(o)}}unsync(){return this._scheduledEvents.forEach(t=>this.context.transport.clear(t)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease),this}triggerAttackRelease(t,e,n,i){const r=this.toSeconds(n),o=this.toSeconds(e);return this.triggerAttack(t,r,i),this.triggerRelease(r+o),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}}class cr extends $i{constructor(){super(ft(cr.getDefaults(),arguments));const t=ft(cr.getDefaults(),arguments);this.portamento=t.portamento,this.onsilence=t.onsilence}static getDefaults(){return Object.assign($i.getDefaults(),{detune:0,onsilence:ne,portamento:0})}triggerAttack(t,e,n=1){this.log("triggerAttack",t,e,n);const i=this.toSeconds(e);return this._triggerEnvelopeAttack(i,n),this.setNote(t,i),this}triggerRelease(t){this.log("triggerRelease",t);const e=this.toSeconds(t);return this._triggerEnvelopeRelease(e),this}setNote(t,e){const n=this.toSeconds(e),i=t instanceof On?t.toFrequency():t;if(this.portamento>0&&this.getLevelAtTime(n)>.05){const r=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(i,r,n)}else this.frequency.setValueAtTime(i,n);return this}}ui([Qi(0)],cr.prototype,"portamento",void 0);class ml extends Ti{constructor(){super(ft(ml.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new vn({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}}class fo extends cr{constructor(){super(ft(fo.getDefaults(),arguments)),this.name="Synth";const t=ft(fo.getDefaults(),arguments);this.oscillator=new oa(Object.assign({context:this.context,detune:t.detune,onstop:()=>this.onsilence(this)},t.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new ml(Object.assign({context:this.context},t.envelope)),this.oscillator.chain(this.envelope,this.output),be(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(cr.getDefaults(),{envelope:Object.assign(zu(Ti.getDefaults(),Object.keys(jt.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(zu(oa.getDefaults(),[...Object.keys(Bn.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(t,e){if(this.envelope.triggerAttack(t,e),this.oscillator.start(t),this.envelope.sustain===0){const n=this.toSeconds(this.envelope.attack),i=this.toSeconds(this.envelope.decay);this.oscillator.stop(t+n+i)}}_triggerEnvelopeRelease(t){this.envelope.triggerRelease(t),this.oscillator.stop(t+this.toSeconds(this.envelope.release))}getLevelAtTime(t){return t=this.toSeconds(t),this.envelope.getValueAtTime(t)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}}class ca extends fo{constructor(){super(ft(ca.getDefaults(),arguments)),this.name="MembraneSynth",this.portamento=0;const t=ft(ca.getDefaults(),arguments);this.pitchDecay=t.pitchDecay,this.octaves=t.octaves,be(this,["oscillator","envelope"])}static getDefaults(){return tr(cr.getDefaults(),fo.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(t,e){const n=this.toSeconds(e),i=this.toFrequency(t instanceof On?t.toFrequency():t),r=i*this.octaves;return this.oscillator.frequency.setValueAtTime(r,n),this.oscillator.frequency.exponentialRampToValueAtTime(i,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}}ui([og(0)],ca.prototype,"octaves",void 0);ui([Qi(0)],ca.prototype,"pitchDecay",void 0);const ag=new Set;function qh(s){ag.add(s)}function cg(s,t){const e=`registerProcessor("${s}", ${t})`;ag.add(e)}const pR=`
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
`;qh(pR);const mR=`
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
`;qh(mR);const _R=`
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
`;qh(_R);const gR="feedback-comb-filter",vR=`
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
`;cg(gR,vR);class la extends $i{constructor(){super(ft(la.getDefaults(),arguments,["voice","options"])),this.name="PolySynth",this._availableVoices=[],this._activeVoices=[],this._voices=[],this._gcTimeout=-1,this._averageActiveVoices=0;const t=ft(la.getDefaults(),arguments,["voice","options"]);kt(!Si(t.voice),"DEPRECATED: The polyphony count is no longer the first argument.");const e=t.voice.getDefaults();this.options=Object.assign(e,t.options),this.voice=t.voice,this.maxPolyphony=t.maxPolyphony,this._dummyVoice=this._getNextAvailableVoice();const n=this._voices.indexOf(this._dummyVoice);this._voices.splice(n,1),this._gcTimeout=this.context.setInterval(this._collectGarbage.bind(this),1)}static getDefaults(){return Object.assign($i.getDefaults(),{maxPolyphony:32,options:{},voice:fo})}get activeVoices(){return this._activeVoices.length}_makeVoiceAvailable(t){this._availableVoices.push(t);const e=this._activeVoices.findIndex(n=>n.voice===t);this._activeVoices.splice(e,1)}_getNextAvailableVoice(){if(this._availableVoices.length)return this._availableVoices.shift();if(this._voices.length<this.maxPolyphony){const t=new this.voice(Object.assign(this.options,{context:this.context,onsilence:this._makeVoiceAvailable.bind(this)}));return t.connect(this.output),this._voices.push(t),t}else Bh("Max polyphony exceeded. Note dropped.")}_collectGarbage(){if(this._averageActiveVoices=Math.max(this._averageActiveVoices*.95,this.activeVoices),this._availableVoices.length&&this._voices.length>Math.ceil(this._averageActiveVoices+1)){const t=this._availableVoices.shift(),e=this._voices.indexOf(t);this._voices.splice(e,1),this.context.isOffline||t.dispose()}}_triggerAttack(t,e,n){t.forEach(i=>{const r=new Gc(this.context,i).toMidi(),o=this._getNextAvailableVoice();o&&(o.triggerAttack(i,e,n),this._activeVoices.push({midi:r,voice:o,released:!1}),this.log("triggerAttack",i,e))})}_triggerRelease(t,e){t.forEach(n=>{const i=new Gc(this.context,n).toMidi(),r=this._activeVoices.find(({midi:o,released:a})=>o===i&&!a);r&&(r.voice.triggerRelease(e),r.released=!0,this.log("triggerRelease",n,e))})}_scheduleEvent(t,e,n,i){kt(!this.disposed,"Synth was already disposed"),n<=this.now()?t==="attack"?this._triggerAttack(e,n,i):this._triggerRelease(e,n):this.context.setTimeout(()=>{this._scheduleEvent(t,e,n,i)},n-this.now())}triggerAttack(t,e,n){Array.isArray(t)||(t=[t]);const i=this.toSeconds(e);return this._scheduleEvent("attack",t,i,n),this}triggerRelease(t,e){Array.isArray(t)||(t=[t]);const n=this.toSeconds(e);return this._scheduleEvent("release",t,n),this}triggerAttackRelease(t,e,n,i){const r=this.toSeconds(n);if(this.triggerAttack(t,r,i),Un(e)){kt(Un(t),"If the duration is an array, the notes must also be an array"),t=t;for(let o=0;o<t.length;o++){const a=e[Math.min(o,e.length-1)],c=this.toSeconds(a);kt(c>0,"The duration must be greater than 0"),this.triggerRelease(t[o],r+c)}}else{const o=this.toSeconds(e);kt(o>0,"The duration must be greater than 0"),this.triggerRelease(t,r+o)}return this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}set(t){const e=zu(t,["onsilence","context"]);return this.options=tr(this.options,e),this._voices.forEach(n=>n.set(e)),this._dummyVoice.set(e),this}get(){return this._dummyVoice.get()}releaseAll(t){const e=this.toSeconds(t);return this._activeVoices.forEach(({voice:n})=>{n.triggerRelease(e)}),this}dispose(){return super.dispose(),this._dummyVoice.dispose(),this._voices.forEach(t=>t.dispose()),this._activeVoices=[],this._availableVoices=[],this.context.clearInterval(this._gcTimeout),this}}class ua extends $i{constructor(){super(ft(ua.getDefaults(),arguments,["urls","onload","baseUrl"],"urls")),this.name="Sampler",this._activeSources=new Map;const t=ft(ua.getDefaults(),arguments,["urls","onload","baseUrl"],"urls"),e={};Object.keys(t.urls).forEach(n=>{const i=parseInt(n,10);if(kt(ic(n)||Si(i)&&isFinite(i),`url key is neither a note or midi pitch: ${n}`),ic(n)){const r=new On(this.context,n).toMidi();e[r]=t.urls[n]}else Si(i)&&isFinite(i)&&(e[i]=t.urls[i])}),this._buffers=new Wh({urls:e,onload:t.onload,baseUrl:t.baseUrl,onerror:t.onerror}),this.attack=t.attack,this.release=t.release,this.curve=t.curve,this._buffers.loaded&&Promise.resolve().then(t.onload)}static getDefaults(){return Object.assign($i.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:ne,onerror:ne,release:.1,urls:{}})}_findClosest(t){let n=0;for(;n<96;){if(this._buffers.has(t+n))return-n;if(this._buffers.has(t-n))return n;n++}throw new Error(`No available buffers for note: ${t}`)}triggerAttack(t,e,n=1){return this.log("triggerAttack",t,e,n),Array.isArray(t)||(t=[t]),t.forEach(i=>{const r=sg(new On(this.context,i).toFrequency()),o=Math.round(r),a=r-o,c=this._findClosest(o),l=o-c,u=this._buffers.get(l),h=ig(c+a),d=new ta({url:u,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:h}).connect(this.output);d.start(e,0,u.duration/h,n),Un(this._activeSources.get(o))||this._activeSources.set(o,[]),this._activeSources.get(o).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(o)){const m=this._activeSources.get(o),g=m.indexOf(d);g!==-1&&m.splice(g,1)}}}),this}triggerRelease(t,e){return this.log("triggerRelease",t,e),Array.isArray(t)||(t=[t]),t.forEach(n=>{const i=new On(this.context,n).toMidi();if(this._activeSources.has(i)&&this._activeSources.get(i).length){const r=this._activeSources.get(i);e=this.toSeconds(e),r.forEach(o=>{o.stop(e)}),this._activeSources.set(i,[])}}),this}releaseAll(t){const e=this.toSeconds(t);return this._activeSources.forEach(n=>{for(;n.length;)n.shift().stop(e)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(t,e,n,i=1){const r=this.toSeconds(n);return this.triggerAttack(t,r,i),Un(e)?(kt(Un(t),"notes must be an array when duration is array"),t.forEach((o,a)=>{const c=e[Math.min(a,e.length-1)];this.triggerRelease(o,r+this.toSeconds(c))})):this.triggerRelease(t,r+this.toSeconds(e)),this}add(t,e,n){if(kt(ic(t)||isFinite(t),`note must be a pitch or midi: ${t}`),ic(t)){const i=new On(this.context,t).toMidi();this._buffers.add(i,e,n)}else this._buffers.add(t,e,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(t=>{t.forEach(e=>e.dispose())}),this._activeSources.clear(),this}}ui([Qi(0)],ua.prototype,"attack",void 0);ui([Qi(0)],ua.prototype,"release",void 0);class Xc extends qe{constructor(){super(ft(Xc.getDefaults(),arguments,["callback","value"])),this.name="ToneEvent",this._state=new fl("stopped"),this._startOffset=0;const t=ft(Xc.getDefaults(),arguments,["callback","value"]);this._loop=t.loop,this.callback=t.callback,this.value=t.value,this._loopStart=this.toTicks(t.loopStart),this._loopEnd=this.toTicks(t.loopEnd),this._playbackRate=t.playbackRate,this._probability=t.probability,this._humanize=t.humanize,this.mute=t.mute,this._playbackRate=t.playbackRate,this._state.increasing=!0,this._rescheduleEvents()}static getDefaults(){return Object.assign(qe.getDefaults(),{callback:ne,humanize:!1,loop:!1,loopEnd:"1m",loopStart:0,mute:!1,playbackRate:1,probability:1,value:null})}_rescheduleEvents(t=-1){this._state.forEachFrom(t,e=>{let n;if(e.state==="started"){e.id!==-1&&this.context.transport.clear(e.id);const i=e.time+Math.round(this.startOffset/this._playbackRate);if(this._loop===!0||Si(this._loop)&&this._loop>1){n=1/0,Si(this._loop)&&(n=this._loop*this._getLoopDuration());const r=this._state.getAfter(i);r!==null&&(n=Math.min(n,r.time-i)),n!==1/0&&(this._state.setStateAtTime("stopped",i+n+1,{id:-1}),n=new fn(this.context,n));const o=new fn(this.context,this._getLoopDuration());e.id=this.context.transport.scheduleRepeat(this._tick.bind(this),o,new fn(this.context,i),n)}else e.id=this.context.transport.schedule(this._tick.bind(this),new fn(this.context,i))}})}get state(){return this._state.getValueAtTime(this.context.transport.ticks)}get startOffset(){return this._startOffset}set startOffset(t){this._startOffset=t}get probability(){return this._probability}set probability(t){this._probability=t}get humanize(){return this._humanize}set humanize(t){this._humanize=t}start(t){const e=this.toTicks(t);return this._state.getValueAtTime(e)==="stopped"&&(this._state.add({id:-1,state:"started",time:e}),this._rescheduleEvents(e)),this}stop(t){this.cancel(t);const e=this.toTicks(t);if(this._state.getValueAtTime(e)==="started"){this._state.setStateAtTime("stopped",e,{id:-1});const n=this._state.getBefore(e);let i=e;n!==null&&(i=n.time),this._rescheduleEvents(i)}return this}cancel(t){t=er(t,-1/0);const e=this.toTicks(t);return this._state.forEachFrom(e,n=>{this.context.transport.clear(n.id)}),this._state.cancel(e),this}_tick(t){const e=this.context.transport.getTicksAtTime(t);if(!this.mute&&this._state.getValueAtTime(e)==="started"){if(this.probability<1&&Math.random()>this.probability)return;if(this.humanize){let n=.02;$_(this.humanize)||(n=this.toSeconds(this.humanize)),t+=(Math.random()*2-1)*n}this.callback(t,this.value)}}_getLoopDuration(){return Math.round((this._loopEnd-this._loopStart)/this._playbackRate)}get loop(){return this._loop}set loop(t){this._loop=t,this._rescheduleEvents()}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this._rescheduleEvents()}get loopEnd(){return new fn(this.context,this._loopEnd).toSeconds()}set loopEnd(t){this._loopEnd=this.toTicks(t),this._loop&&this._rescheduleEvents()}get loopStart(){return new fn(this.context,this._loopStart).toSeconds()}set loopStart(t){this._loopStart=this.toTicks(t),this._loop&&this._rescheduleEvents()}get progress(){if(this._loop){const t=this.context.transport.ticks,e=this._state.get(t);if(e!==null&&e.state==="started"){const n=this._getLoopDuration();return(t-e.time)%n/n}else return 0}else return 0}dispose(){return super.dispose(),this.cancel(),this._state.dispose(),this}}class qc extends qe{constructor(){super(ft(qc.getDefaults(),arguments,["callback","interval"])),this.name="Loop";const t=ft(qc.getDefaults(),arguments,["callback","interval"]);this._event=new Xc({context:this.context,callback:this._tick.bind(this),loop:!0,loopEnd:t.interval,playbackRate:t.playbackRate,probability:t.probability}),this.callback=t.callback,this.iterations=t.iterations}static getDefaults(){return Object.assign(qe.getDefaults(),{interval:"4n",callback:ne,playbackRate:1,iterations:1/0,probability:1,mute:!1,humanize:!1})}start(t){return this._event.start(t),this}stop(t){return this._event.stop(t),this}cancel(t){return this._event.cancel(t),this}_tick(t){this.callback(t)}get state(){return this._event.state}get progress(){return this._event.progress}get interval(){return this._event.loopEnd}set interval(t){this._event.loopEnd=t}get playbackRate(){return this._event.playbackRate}set playbackRate(t){this._event.playbackRate=t}get humanize(){return this._event.humanize}set humanize(t){this._event.humanize=t}get probability(){return this._event.probability}set probability(t){this._event.probability=t}get mute(){return this._event.mute}set mute(t){this._event.mute=t}get iterations(){return this._event.loop===!0?1/0:this._event.loop}set iterations(t){t===1/0?this._event.loop=!0:this._event.loop=t}dispose(){return super.dispose(),this._event.dispose(),this}}class Yc extends jt{constructor(){super(Object.assign(ft(Yc.getDefaults(),arguments,["pan"]))),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner;const t=ft(Yc.getDefaults(),arguments,["pan"]);this.pan=new pe({context:this.context,param:this._panner.pan,value:t.pan,minValue:-1,maxValue:1}),this._panner.channelCount=t.channelCount,this._panner.channelCountMode="explicit",be(this,"pan")}static getDefaults(){return Object.assign(jt.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const xR="bit-crusher",yR=`
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
`;cg(xR,yR);class Ae extends jt{constructor(){super(ft(Ae.getDefaults(),arguments,["solo"])),this.name="Solo";const t=ft(Ae.getDefaults(),arguments,["solo"]);this.input=this.output=new vn({context:this.context}),Ae._allSolos.has(this.context)||Ae._allSolos.set(this.context,new Set),Ae._allSolos.get(this.context).add(this),this.solo=t.solo}static getDefaults(){return Object.assign(jt.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(t){t?this._addSolo():this._removeSolo(),Ae._allSolos.get(this.context).forEach(e=>e._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){Ae._soloed.has(this.context)||Ae._soloed.set(this.context,new Set),Ae._soloed.get(this.context).add(this)}_removeSolo(){Ae._soloed.has(this.context)&&Ae._soloed.get(this.context).delete(this)}_isSoloed(){return Ae._soloed.has(this.context)&&Ae._soloed.get(this.context).has(this)}_noSolos(){return!Ae._soloed.has(this.context)||Ae._soloed.has(this.context)&&Ae._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),Ae._allSolos.get(this.context).delete(this),this._removeSolo(),this}}Ae._allSolos=new Map;Ae._soloed=new Map;class jc extends jt{constructor(){super(ft(jc.getDefaults(),arguments,["pan","volume"])),this.name="PanVol";const t=ft(jc.getDefaults(),arguments,["pan","volume"]);this._panner=this.input=new Yc({context:this.context,pan:t.pan,channelCount:t.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new or({context:this.context,volume:t.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=t.mute,be(this,["pan","volume"])}static getDefaults(){return Object.assign(jt.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(t){this._volume.mute=t}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class zs extends jt{constructor(){super(ft(zs.getDefaults(),arguments,["volume","pan"])),this.name="Channel";const t=ft(zs.getDefaults(),arguments,["volume","pan"]);this._solo=this.input=new Ae({solo:t.solo,context:this.context}),this._panVol=this.output=new jc({context:this.context,pan:t.pan,volume:t.volume,mute:t.mute,channelCount:t.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),be(this,["pan","volume"])}static getDefaults(){return Object.assign(jt.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(t){this._solo.solo=t}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(t){this._panVol.mute=t}_getBus(t){return zs.buses.has(t)||zs.buses.set(t,new vn({context:this.context})),zs.buses.get(t)}send(t,e=0){const n=this._getBus(t),i=new vn({context:this.context,units:"decibels",gain:e});return this.connect(i),i.connect(n),i}receive(t){return this._getBus(t).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}zs.buses=new Map;class SR extends jt{constructor(){super(...arguments),this.name="Listener",this.positionX=new pe({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new pe({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new pe({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new pe({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new pe({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new pe({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new pe({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new pe({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new pe({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(jt.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}ul(s=>{s.listener=new SR({context:s})});hl(s=>{s.listener.dispose()});ri().transport;ri().destination;ri().destination;ri().listener;ri().draw;ri();/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class vi{constructor(t,e,n,i,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),vi.nextNameID=vi.nextNameID||0,this.$name.id=`lil-gui-name-${++vi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class MR extends vi{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Wu(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const TR={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Wu,toHexString:Wu},ha={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},bR={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,t,e=1){const n=ha.fromHexString(s);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([s,t,e],n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return ha.toHexString(i)}},ER={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){const n=ha.fromHexString(s);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:s,g:t,b:e},n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return ha.toHexString(i)}},wR=[TR,ha,bR,ER];function AR(s){return wR.find(t=>t.match(s))}class CR extends vi{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=AR(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Wu(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class au extends vi{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class RR extends vi{constructor(t,e,n,i,r,o){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+x),this.$input.value=this.getValue())},i=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},r=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let o=!1,a,c,l,u,h;const d=5,m=x=>{a=x.clientX,c=l=x.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=x=>{if(o){const v=x.clientX-a,M=x.clientY-c;Math.abs(M)>d?(x.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>d&&_()}if(!o){const v=x.clientY-l;h-=v*this._step*this._arrowKeyMultiplier(x),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}l=x.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},f=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",f),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(p,x,v,M,S)=>(p-x)/(v-x)*(S-M)+M,e=p=>{const x=this.$slider.getBoundingClientRect();let v=t(p,x.left,x.right,this._min,this._max);this._snapClampSetValue(v)},n=p=>{this._setDraggingStyle(!0),e(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=p=>{e(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let o=!1,a,c;const l=p=>{p.preventDefault(),this._setDraggingStyle(!0),e(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,c=p.touches[0].clientY,o=!0):l(p),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=p=>{if(o){const x=p.touches[0].clientX-a,v=p.touches[0].clientY-c;Math.abs(x)>Math.abs(v)?l(p):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else p.preventDefault(),e(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},m=this._callOnFinishChange.bind(this),g=400;let _;const f=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const v=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(m,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class PR extends vi{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class DR extends vi{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const LR=`.lil-gui {
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
}`;function NR(s){const t=document.createElement("style");t.innerHTML=s;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let vp=!1;class Yh{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!vp&&a&&(NR(LR),vp=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(t,e,n,i,r){if(Object(n)===n)return new PR(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new RR(this,t,e,n,i,r);case"boolean":return new MR(this,t,e);case"string":return new DR(this,t,e);case"function":return new au(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new CR(this,t,e,n)}addFolder(t){const e=new Yh({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof au||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof au)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}var IR=`uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

uniform sampler2D uTexPositions;
uniform sampler2D uTexVelocities;

uniform float uColorBoost;

attribute vec3 position;
attribute vec2 instanceUv;

varying vec4 vColor;

void main()
{
    vec4 modelPos = vec4(position, 1.0);
    vec4 offsetPos = texture2D(uTexPositions, instanceUv);
    modelPos.xyz += offsetPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * modelPos;

    vColor = vec4(255.0,255.0,255.0, 1.0);
}`,OR=`precision mediump float;

varying vec4 vColor;

void main()
{
    gl_FragColor = vColor;
}`;let ks=[],Ce=500;const FR=document.querySelector("#app"),_r=new em({antialias:!0});_r.setPixelRatio(window.devicePixelRatio);_r.setSize(window.innerWidth,window.innerHeight);FR.appendChild(_r.domElement);document.body.appendChild(_r.domElement);const Zi=new GM;Zi.background=new Kt("#5BB2F0");const lr=new Hn(35,window.innerWidth/window.innerHeight,1,1e3);lr.position.set(200,150,200);const UR=new QM("white",.2),kR=new $M("#ffffff","#ff00ff",.8),BR=new JM("white",.8);BR.position.set(-1,1,1);Zi.add(UR,kR);const Kn=new Tb(lr,_r.domElement);Kn.enableDamping=!0;Kn.dampingFactor=.05;Kn.screenSpacePanning=!1;Kn.enableRotate=!0;Kn.rotateSpeed=.5;Kn.enableZoom=!0;Kn.zoomSpeed=.5;Kn.minDistance=100;Kn.maxDistance=1e4;Kn.target=new U(0,0,0);Kn.autoRotate=!0;const VR=()=>{lr.aspect=window.innerWidth/window.innerHeight,lr.updateProjectionMatrix(),_r.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",VR);window.addEventListener("keydown",async()=>{await eR(),console.log("audio is ready")});new ml({attack:.1,decay:.1,sustain:.1,release:.2}).toDestination();const jh=new la({oscillator:{type:"fatsawtooth"},envelope:{attack:.1,decay:.1,sustain:.1,release:.2}}).toDestination();jh.volume.value=-6;const $h=new la({oscillator:{type:"sine"},envelope:{attack:.1,decay:.1,sustain:.1,release:.2}});$h.volume.value=-6;new Ti({attack:0,decay:.2,decayCurve:"exponential",sustain:.1,release:.2}).toDestination();new qc(s=>{jh.triggerAttackRelease(["D3","F#3","A3","C#4","E4"],"8n",s),$h.triggerAttackRelease(["D3","F#3","A3","C#4","E4"],"8t",s+2)},"4n").start(0);const zR=new Yh;let Xu={type:1};zR.add(Xu,"type",{Attract:1,Repel:2,Spawn:3});ml5.tf.setBackend("cpu");const cu=new Lt,Lo=new U,xp=new U,yp=new ki,Sp=new eT;let fe=[];window.addEventListener("click",function(s){jh.triggerAttackRelease(["D4","F#4","A4","C#5","E5"],"8t"),$h.triggerAttackRelease(["D4","F#4","A4","C#5","E5"],"8t"),cu.x=s.clientX/window.innerWidth*2-1,cu.y=-(s.clientY/window.innerHeight)*2+1,xp.copy(lr.position).normalize(),yp.setFromNormalAndCoplanarPoint(xp,Zi.position),Sp.setFromCamera(cu,lr),Sp.ray.intersectPlane(yp,Lo);let t,e;e=200,t=6613382,Xu.type==2&&(t=16711680,e=500);const n=new mn(new pa(2,30,30),new YM({color:t,metalness:0,roughness:0}));ks.push(n),Zi.add(n);let i=new Sb(Lo.x,Lo.y,Lo.z,Xu.type,e);fe.push(i),n.position.copy(Lo)});const GR=new jM({color:"#FF9843"}),HR=new pa(.5,64,64);let Zh=[],Qt=[],Ge=[];const lg=[];function ug(s,t,e,n,i){Qt[s]=new yh(Gi.utils.mapRange(0,1,t-10,t+10,Math.random()),Gi.utils.mapRange(0,1,e-10,e+10,Math.random()),Gi.utils.mapRange(0,1,n-10,n+10,Math.random()),Math.random()*5,1,2e3+Gi.utils.mapRange(0,1,50,500,Math.random()),i),Zh[s]=new mn(HR,GR),lg.push(new U(-1,0,0),new U(1,0,0),new U(1,0,0)),Bs(s)}function Bs(s){Ge[s]=new Ac(Zi,!1),Ge[s].setAdvanceFrequency(200);const t=Ac.createBaseMaterial();Ge[s].initialize(t,30,!1,2,lg,Zh[s]),t.uniforms.headColor.value.set(1,.596078431372549,.2627450980392157,1),t.uniforms.tailColor.value.set(1,.8666666666666667,.5843137254901961,1),Ge[s].activate()}const Kh=new Db(_r);Kh.setSize(window.innerWidth,window.innerHeight);const WR=new Lb(Zi,lr);Kh.addPass(WR);let XR=gb();new U(Ce,Ce,Ce);for(let s=0;s<200;s++)ug(s,Gi.utils.mapRange(0,1,Ce/2,-Ce/2,Math.random()),Gi.utils.mapRange(0,1,Ce/2,-Ce/2,Math.random()),Gi.utils.mapRange(0,1,Ce/2,-Ce/2,Math.random()),ml5.neuralNetwork({inputs:1,outputs:4,task:"regression",noTraining:!0}));let fs=Qt.length;const qR=new Float32Array(fs*fs*4);for(let s=0;s<Qt.length;s++)Qt[s].pos.x,Qt[s].pos.y,Qt[s].pos.z;const YR=new HM(qR),hg=[];for(let s=0;s<fs;s++)for(let t=0;t<fs;t++)hg.push(t/fs,s/fs);const dg=new pa(.05);dg.setAttribute("instanceUv",new _u(new Float32Array(hg),2));const jR=new qM({vertexShader:IR,fragmentShader:OR,uniforms:{uTexPositions:{value:YR}}}),$R=new XM(dg,jR,fs*fs);Zi.add($R);const fg=()=>{requestAnimationFrame(fg);for(let s=0;s<fe.length;s++)if(fe[s].type==3){console.log("spawn!");let t=Qt.length;for(let e=0;e<10;e++)ug(t+e,fe[s].pos.x,fe[s].pos.y,fe[s].pos.z,ml5.neuralNetwork({inputs:6,outputs:4,task:"regression",noTraining:!0}));fe.splice(s,1),Zi.remove(ks[s]),ks.splice(s,1)}for(let s=0;s<Qt.length;s++){if(fe.length>0)for(let t=0;t<fe.length;t++)fe[t].type==1&&(Qt[s].attract(fe[t].pos.x,fe[t].pos.y,fe[t].pos.z),fe[t].pos=ks[t].position,Qt[s].pos.distanceTo(fe[t].pos)<100&&(Qt[s].life+=.5,fe[t].life-=.01,fe[t].life<0&&(fe.splice(t,1),Zi.remove(ks[t]),ks.splice(t,1)))),fe[t].type==2&&(Qt[s].repel(fe[t].pos.x,fe[t].pos.y,fe[t].pos.z),fe[t].pos=ks[t].position,fe[t].life-=.05);else Qt[s].follow(XR);Qt[s].pos.x>Ce/2&&(Qt[s].pos.x=-Ce/2,Ge[s].deactivate(),Ge[s].destroyMesh(),Bs(s)),Qt[s].pos.y>Ce/2&&(Qt[s].pos.y=-Ce/2,Ge[s].deactivate(),Ge[s].destroyMesh(),Bs(s)),Qt[s].pos.z>Ce/2&&(Qt[s].pos.z=-Ce/2,Ge[s].deactivate(),Ge[s].destroyMesh(),Bs(s)),Qt[s].pos.x<-Ce/2&&(Qt[s].pos.x=Ce/2,Ge[s].deactivate(),Ge[s].destroyMesh(),Bs(s)),Qt[s].pos.y<-Ce/2&&(Qt[s].pos.y=Ce/2,Ge[s].deactivate(),Ge[s].destroyMesh(),Bs(s)),Qt[s].pos.z<-Ce/2&&(Qt[s].pos.z=Ce/2,Ge[s].deactivate(),Ge[s].destroyMesh(),Bs(s)),Qt[s].vel=Sg(Qt[s].vel,Qt[s].maxSpeed),Qt[s].update(),Zh[s].position.set(Qt[s].pos.x,Qt[s].pos.y,Qt[s].pos.z),Ge[s].activate(),Ge[s].update(),Qt[s].life--}Kh.render(),Kn.update()};fg();
