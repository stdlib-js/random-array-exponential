// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-exponential@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-ctors@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-unary@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-dtypes@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";var g="float64",v=f();function c(e,t){return h(t)?j(t,"dtype")&&(e.dtype=t.dtype,v.indexOf(e.dtype)<0)?new TypeError(u('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"dtype",v.join('", "'),e.dtype)):null:new TypeError(u("invalid argument. Options argument must be an object. Value: `%s`.",t))}function b(){var f,h,j,v,b,y;if(j={dtype:g},0===(h=arguments.length))b=o,v=w;else if(1===h)if(f=arguments[0],b=o.factory(f),n(f))v=x;else{if(y=c(j,f))throw y;v=w}else if(2===h){if(f=arguments[1],b=o.factory(arguments[0],f),y=c(j,f))throw y;v=x}return f&&f.prng?(e(v,"seed",null),e(v,"seedLength",null),r(v,"state",i(null),d),e(v,"stateLength",null),e(v,"byteLength",null)):(s(v,"seed",L),s(v,"seedLength",P),r(v,"state",R,E),s(v,"stateLength",G),s(v,"byteLength",N)),e(v,"PRNG",b.PRNG),v;function x(e,n){var s,r,i,d;if(!t(e))throw new TypeError(u("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",e));if(d={},arguments.length>1&&(r=c(d,n)))throw r;return"generic"===(i=d.dtype||j.dtype)?m(e,b):(s=new(l(i))(e),a([s],[e],[1],b),s)}function w(e,n,s){var r,i,d,o;if(!t(e))throw new TypeError(u("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",e));if(o={},arguments.length>2&&(i=c(o,s)))throw i;return"generic"===(d=o.dtype||j.dtype)?m(e,a):(r=new(l(d))(e),p([[n],r],[e],[0,1],b),r);function a(){return b(n)}}function L(){return v.PRNG.seed}function P(){return v.PRNG.seedLength}function G(){return v.PRNG.stateLength}function N(){return v.PRNG.byteLength}function R(){return v.PRNG.state}function E(e){v.PRNG.state=e}}v.push("generic");var y=b();e(y,"factory",b);export{y as default,b as factory};
//# sourceMappingURL=index.mjs.map
