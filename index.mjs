// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.14-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-exponential@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-ctors@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-unary@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-dtypes@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";var c="float64",g=f();function y(e,t){return j(t)?u(t,"dtype")&&(e.dtype=t.dtype,g.indexOf(e.dtype)<0)?new TypeError(h("null3t","dtype",g.join('", "'),e.dtype)):null:new TypeError(h("null2h",t))}function b(){var f,j,u,g,b,v;if(u={dtype:c},0===(j=arguments.length))b=o,g=w;else if(1===j)if(f=arguments[0],b=o.factory(f),s(f))g=x;else{if(v=y(u,f))throw v;g=w}else if(2===j){if(f=arguments[1],b=o.factory(arguments[0],f),v=y(u,f))throw v;g=x}return f&&f.prng?(e(g,"seed",null),e(g,"seedLength",null),r(g,"state",i(null),d),e(g,"stateLength",null),e(g,"byteLength",null)):(n(g,"seed",L),n(g,"seedLength",P),r(g,"state",R,E),n(g,"stateLength",G),n(g,"byteLength",N)),e(g,"PRNG",b.PRNG),g;function x(e,s){var n,r,i,d;if(!t(e))throw new TypeError(h("null2p",e));if(d={},arguments.length>1&&(r=y(d,s)))throw r;return"generic"===(i=d.dtype||u.dtype)?m(e,b):(n=new(l(i))(e),p([n],[e],[1],b),n)}function w(e,s,n){var r,i,d,o;if(!t(e))throw new TypeError(h("null2p",e));if(o={},arguments.length>2&&(i=y(o,n)))throw i;return"generic"===(d=o.dtype||u.dtype)?m(e,p):(r=new(l(d))(e),a([[s],r],[e],[0,1],b),r);function p(){return b(s)}}function L(){return g.PRNG.seed}function P(){return g.PRNG.seedLength}function G(){return g.PRNG.stateLength}function N(){return g.PRNG.byteLength}function R(){return g.PRNG.state}function E(e){g.PRNG.state=e}}g.push("generic");var v=b();e(v,"factory",b);export{v as default,b as factory};
//# sourceMappingURL=index.mjs.map
