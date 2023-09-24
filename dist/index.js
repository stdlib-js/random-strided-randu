"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=i(function(O,d){
var q=require('@stdlib/strided-base-nullary/dist'),s=require('@stdlib/random-base-randu/dist');function f(e,r,n,t){var a;return arguments.length>3?a=s.factory(t):a=s,q([r],[e],[n],a),r}d.exports=f
});var c=i(function(R,y){
var m=require('@stdlib/strided-base-nullary/dist').ndarray,v=require('@stdlib/random-base-randu/dist');function g(e,r,n,t,a){var u;return arguments.length>4?u=v.factory(a):u=v,m([r],[e],[n],[t],u),r}y.exports=g
});var p=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=l(),x=c();p(o,"ndarray",x);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
