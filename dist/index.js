"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var l=i(function(O,d){
var q=require('@stdlib/strided-base-nullary/dist'),s=require('@stdlib/random-base-randu/dist');function f(e,r,a,t){var n;return arguments.length>3?n=s.factory(t):n=s,q([r],[e],[a],n),r}d.exports=f
});var c=i(function(R,y){
var m=require('@stdlib/strided-base-nullary/dist').ndarray,v=require('@stdlib/random-base-randu/dist');function g(e,r,a,t,n){var u;return arguments.length>4?u=v.factory(n):u=v,m([r],[e],[a],[t],u),r}y.exports=g
});var p=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=l(),x=c();p(o,"ndarray",x);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
