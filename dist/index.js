"use strict";var l=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var L=l(function(ue,C){C.exports={dtype:"float64"}});var x=l(function(se,b){
var H=require('@stdlib/array-typed-real-float-dtypes/dist'),J=require('@stdlib/assert-is-plain-object/dist'),K=require('@stdlib/assert-has-own-property/dist'),N=require('@stdlib/error-tools-fmtprodmsg/dist'),q=H();q.push("generic");function M(r,t){return J(t)?K(t,"dtype")&&(r.dtype=t.dtype,q.indexOf(r.dtype)<0)?new TypeError(N('1e54S',"dtype",q.join('", "'),r.dtype)):null:new TypeError(N('1e52V',t));}b.exports=M
});var w=l(function(oe,j){
var G=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,Q=require('@stdlib/assert-is-number/dist').isPrimitive,f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),O=require('@stdlib/utils-define-nonenumerable-read-write-accessor/dist'),U=require('@stdlib/utils-constant-function/dist'),X=require('@stdlib/utils-noop/dist'),m=require('@stdlib/random-base-exponential/dist'),S=require('@stdlib/array-typed-real-float-ctors/dist'),E=require('@stdlib/array-base-filled-by/dist'),Z=require('@stdlib/strided-base-nullary/dist'),_=require('@stdlib/strided-base-unary/dist'),T=require('@stdlib/error-tools-fmtprodmsg/dist'),$=L(),y=x();function ee(){var r,t,g,e,a,o;if(g={dtype:$.dtype},t=arguments.length,t===0)a=m,e=R;else if(t===1)if(r=arguments[0],a=m.factory(r),Q(r))e=P;else{if(o=y(g,r),o)throw o;e=R}else if(t===2){if(r=arguments[1],a=m.factory(arguments[0],r),o=y(g,r),o)throw o;e=P}return r&&r.prng?(f(e,"seed",null),f(e,"seedLength",null),O(e,"state",U(null),X),f(e,"stateLength",null),f(e,"byteLength",null)):(p(e,"seed",z),p(e,"seedLength",B),O(e,"state",W,Y),p(e,"stateLength",D),p(e,"byteLength",I)),f(e,"PRNG",a.PRNG),e;function P(n,d){var c,v,i,u,s;if(!G(n))throw new TypeError(T('1e52d',n));if(s={},arguments.length>1&&(i=y(s,d),i))throw i;return u=s.dtype||g.dtype,u==="generic"?E(n,a):(c=S(u),v=new c(n),Z([v],[n],[1],a),v)}function R(n,d,c){var v,i,u,s,h;if(!G(n))throw new TypeError(T('1e52d',n));if(h={},arguments.length>2&&(u=y(h,c),u))throw u;if(s=h.dtype||g.dtype,s==="generic")return E(n,k);return v=S(s),i=new v(n),_([[d],i],[n],[0,1],a),i;function k(){return a(d)}}function z(){return e.PRNG.seed}function B(){return e.PRNG.seedLength}function D(){return e.PRNG.stateLength}function I(){return e.PRNG.byteLength}function W(){return e.PRNG.state}function Y(n){e.PRNG.state=n}}j.exports=ee
});var V=l(function(ve,F){
var re=w(),te=re();F.exports=te
});var ne=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=V(),ae=w();ne(A,"factory",ae);module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
