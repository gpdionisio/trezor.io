/*
 Fuse.js v3.2.0 - Lightweight fuzzy-search (http://fusejs.io)

 Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 All Rights Reserved. Apache Software License 2.0

 http://www.apache.org/licenses/LICENSE-2.0
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,k){a!=Array.prototype&&a!=Object.prototype&&(a[b]=k.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return $jscomp.SYMBOL_PREFIX+(a||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var b=0;return $jscomp.iteratorPrototype(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.iteratorFromArray=function(a,b){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var k=0,e={next:function(){if(k<a.length){var q=k++;return{value:b(q,a[q]),done:!1}}e.next=function(){return{done:!0,value:void 0}};return e.next()}};e[Symbol.iterator]=function(){return e};return e};
$jscomp.polyfill=function(a,b,k,e){if(b){k=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var q=a[e];q in k||(k[q]={});k=k[q]}a=a[a.length-1];e=k[a];b=b(e);b!=e&&null!=b&&$jscomp.defineProperty(k,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6","es3");
!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define("Fuse",[],b):"object"==typeof exports?exports.Fuse=b():a.Fuse=b()}(this,function(){return function(a){function b(e){if(k[e])return k[e].exports;var q=k[e]={i:e,l:!1,exports:{}};return a[e].call(q.exports,q,q.exports,b),q.l=!0,q.exports}var k={};return b.m=a,b.c=k,b.i=function(a){return a},b.d=function(a,q,k){b.o(a,q)||Object.defineProperty(a,q,{configurable:!1,enumerable:!0,
get:k})},b.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(e,"a",e),e},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=8)}([function(a,b,k){a.exports=function(a){return"[object Array]"===Object.prototype.toString.call(a)}},function(a,b,k){var e=function(){function a(f,d){for(var a=0;a<d.length;a++){var t=d[a];t.enumerable=t.enumerable||!1;t.configurable=!0;"value"in t&&(t.writable=!0);Object.defineProperty(f,t.key,t)}}
return function(f,d,r){return d&&a(f.prototype,d),r&&a(f,r),f}}(),q=k(5),I=k(7),m=k(4);b=function(){function a(f,d){var r=d.location;r=void 0===r?0:r;var t=d.distance;t=void 0===t?100:t;var e=d.threshold;e=void 0===e?.6:e;var x=d.maxPatternLength;x=void 0===x?32:x;var g=d.isCaseSensitive;g=void 0!==g&&g;var h=d.tokenSeparator;h=void 0===h?/ +/g:h;var b=d.findAllMatches;b=void 0!==b&&b;d=d.minMatchCharLength;d=void 0===d?1:d;if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");
this.options={location:r,distance:t,threshold:e,maxPatternLength:x,isCaseSensitive:g,tokenSeparator:h,findAllMatches:b,minMatchCharLength:d};this.pattern=this.options.isCaseSensitive?f:f.toLowerCase();this.pattern.length<=x&&(this.patternAlphabet=m(this.pattern))}return e(a,[{key:"search",value:function(f){if(this.options.isCaseSensitive||(f=f.toLowerCase()),this.pattern===f)return{isMatch:!0,score:0,matchedIndices:[[0,f.length-1]]};var d=this.options,a=d.tokenSeparator;if(this.pattern.length>d.maxPatternLength)return q(f,
this.pattern,a);d=this.options;return I(f,this.pattern,this.patternAlphabet,{location:d.location,distance:d.distance,threshold:d.threshold,findAllMatches:d.findAllMatches,minMatchCharLength:d.minMatchCharLength})}}]),a}();a.exports=b},function(a,b,k){var e=k(0),q=function m(a,f,d){if(f){var r=f.indexOf("."),t=f,b=null;-1!==r&&(t=f.slice(0,r),b=f.slice(r+1));a=a[t];if(null!==a&&void 0!==a)if(b||"string"!=typeof a&&"number"!=typeof a)if(e(a))for(f=0,r=a.length;f<r;f+=1)m(a[f],b,d);else b&&m(a,b,d);
else d.push(a.toString())}else d.push(a);return d};a.exports=function(a,b){return q(a,b,[])}},function(a,b,k){a.exports=function(){for(var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,k=[],m=-1,w=-1,f=0,d=a.length;f<d;f+=1){var r=a[f];r&&-1===m?m=f:r||-1===m||(w=f-1,w-m+1>=b&&k.push([m,w]),m=-1)}return a[f-1]&&f-m>=b&&k.push([m,f-1]),k}},function(a,b,k){a.exports=function(a){for(var b={},e=a.length,m=0;m<e;m+=1)b[a.charAt(m)]=
0;for(m=0;m<e;m+=1)b[a.charAt(m)]|=1<<e-m-1;return b}},function(a,b,k){a.exports=function(a,b){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:/ +/g;e=new RegExp(b.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace(e,"|"));e=a.match(e);var m=!!e,k=[];if(m)for(var f=0,d=e.length;f<d;f+=1){var r=e[f];k.push([a.indexOf(r),r.length-1])}return{score:m?.5:1,isMatch:m,matchedIndices:k}}},function(a,b,k){a.exports=function(a,b){var e=b.errors,m=b.currentLocation,k=b.expectedLocation;
b=b.distance;b=void 0===b?100:b;a=(void 0===e?0:e)/a.length;m=Math.abs((void 0===k?0:k)-(void 0===m?0:m));return b?a+m/b:m?1:a}},function(a,b,k){var e=k(6),q=k(3);a.exports=function(a,b,k,f){var d=f.location,r=f.distance;r=void 0===r?100:r;var t=f.threshold,m=f.findAllMatches;m=void 0!==m&&m;f=f.minMatchCharLength;f=void 0===f?1:f;d=void 0===d?0:d;var x=a.length;t=void 0===t?.6:t;for(var g=a.indexOf(b,d),h=b.length,K=[],E=0;E<x;E+=1)K[E]=0;-1!==g&&(g=e(b,{errors:0,currentLocation:g,expectedLocation:d,
distance:r}),t=Math.min(g,t),-1!==(g=a.lastIndexOf(b,d+h)))&&(g=e(b,{errors:0,currentLocation:g,expectedLocation:d,distance:r}),t=Math.min(g,t));g=-1;E=[];for(var y=1,C=h+x,D=1<<h-1,F=0;F<h;F+=1){for(var G=0,z=C;G<z;)e(b,{errors:F,currentLocation:d+z,expectedLocation:d,distance:r})<=t?G=z:C=z,z=Math.floor((C-G)/2+G);C=z;G=Math.max(1,d-z+1);var B=m?x:Math.min(d+z,x)+h;z=Array(B+2);for(z[B+1]=(1<<F)-1;B>=G;--B){var A=B-1,w=k[a.charAt(A)];if(w&&(K[A]=1),z[B]=(z[B+1]<<1|1)&w,0!==F&&(z[B]=z[B]|(E[B+1]|
E[B])<<1|1|E[B+1]),z[B]&D&&(y=e(b,{errors:F,currentLocation:A,expectedLocation:d,distance:r}))<=t){if(t=y,(g=A)<=d)break;G=Math.max(1,2*d-g)}}if(e(b,{errors:F+1,currentLocation:d,expectedLocation:d,distance:r})>t)break;E=z}return{isMatch:0<=g,score:0===y?.001:y,matchedIndices:q(K,f)}}},function(a,b,k){var e=function(){function a(a,d){for(var f=0;f<d.length;f++){var b=d[f];b.enumerable=b.enumerable||!1;b.configurable=!0;"value"in b&&(b.writable=!0);Object.defineProperty(a,b.key,b)}}return function(f,
d,b){return d&&a(f.prototype,d),b&&a(f,b),f}}(),q=k(1),I=k(2),m=k(0);b=function(){function a(b,d){var f=d.location;f=void 0===f?0:f;var t=d.distance;t=void 0===t?100:t;var e=d.threshold;e=void 0===e?.6:e;var x=d.maxPatternLength;x=void 0===x?32:x;var g=d.caseSensitive;g=void 0!==g&&g;var h=d.tokenSeparator;h=void 0===h?/ +/g:h;var k=d.findAllMatches;k=void 0!==k&&k;var m=d.minMatchCharLength;m=void 0===m?1:m;var y=d.id;y=void 0===y?null:y;var C=d.keys;C=void 0===C?[]:C;var q=d.shouldSort;q=void 0===
q||q;var F=d.getFn;F=void 0===F?I:F;var G=d.sortFn;G=void 0===G?function(a,d){return a.score-d.score}:G;var z=d.tokenize;z=void 0!==z&&z;var B=d.matchAllTokens;B=void 0!==B&&B;var A=d.includeMatches;A=void 0!==A&&A;var w=d.includeScore;w=void 0!==w&&w;d=d.verbose;d=void 0!==d&&d;if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");this.options={location:f,distance:t,threshold:e,maxPatternLength:x,isCaseSensitive:g,tokenSeparator:h,findAllMatches:k,minMatchCharLength:m,
id:y,keys:C,includeMatches:A,includeScore:w,shouldSort:q,getFn:F,sortFn:G,verbose:d,tokenize:z,matchAllTokens:B};this.setCollection(b)}return e(a,[{key:"setCollection",value:function(a){return this.list=a,a}},{key:"search",value:function(a){this._log('---------\nSearch pattern: "'+a+'"');a=this._prepareSearchers(a);a=this._search(a.tokenSearchers,a.fullSearcher);var d=a.results;return this._computeScore(a.weights,d),this.options.shouldSort&&this._sort(d),this._format(d)}},{key:"_prepareSearchers",
value:function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",d=[];if(this.options.tokenize)for(var b=a.split(this.options.tokenSeparator),e=0,k=b.length;e<k;e+=1)d.push(new q(b[e],this.options));return{tokenSearchers:d,fullSearcher:new q(a,this.options)}}},{key:"_search",value:function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],d=arguments[1],b=this.list,e={},k=[];if("string"==typeof b[0]){for(var x=0,g=b.length;x<g;x+=1)this._analyze({key:"",value:b[x],
record:x,index:x},{resultMap:e,results:k,tokenSearchers:a,fullSearcher:d});return{weights:null,results:k}}x={};g=0;for(var h=b.length;g<h;g+=1)for(var m=b[g],E=0,y=this.options.keys.length;E<y;E+=1){var C=this.options.keys[E];if("string"!=typeof C){if(x[C.name]={weight:1-C.weight||1},0>=C.weight||1<C.weight)throw Error("Key weight has to be > 0 and <= 1");C=C.name}else x[C]={weight:1};this._analyze({key:C,value:this.options.getFn(m,C),record:m,index:g},{resultMap:e,results:k,tokenSearchers:a,fullSearcher:d})}return{weights:x,
results:k}}},{key:"_analyze",value:function(a,d){var b=a.key,f=a.arrayIndex,e=void 0===f?-1:f;f=a.value;var k=a.record;a=a.index;var g=d.tokenSearchers;g=void 0===g?[]:g;var h=d.fullSearcher,q=void 0===h?[]:h;h=d.resultMap;h=void 0===h?{}:h;d=d.results;d=void 0===d?[]:d;if(void 0!==f&&null!==f){var E=!1,y=-1,C=0;if("string"==typeof f){this._log("\nKey: "+(""===b?"-":b));q=q.search(f);if(this._log('Full text: "'+f+'", score: '+q.score),this.options.tokenize){y=f.split(this.options.tokenSeparator);
for(var D=[],F=0;F<g.length;F+=1){var G=g[F];this._log('\nPattern: "'+G.pattern+'"');for(var z=!1,B=0;B<y.length;B+=1){var A=y[B],w=G.search(A),L={};w.isMatch?(L[A]=w.score,E=!0,z=!0,D.push(w.score)):(L[A]=1,this.options.matchAllTokens||D.push(1));this._log('Token: "'+A+'", score: '+L[A])}z&&(C+=1)}y=D[0];F=D.length;for(G=1;G<F;G+=1)y+=D[G];y/=F;this._log("Token score average:",y)}D=q.score;-1<y&&(D=(D+y)/2);this._log("Score average:",D);g=!this.options.tokenize||!this.options.matchAllTokens||C>=
g.length;if(this._log("\nCheck Matches: "+g),(E||q.isMatch)&&g)(g=h[a])?g.output.push({key:b,arrayIndex:e,value:f,score:D,matchedIndices:q.matchedIndices}):(h[a]={item:k,output:[{key:b,arrayIndex:e,value:f,score:D,matchedIndices:q.matchedIndices}]},d.push(h[a]))}else if(m(f))for(e=0,E=f.length;e<E;e+=1)this._analyze({key:b,arrayIndex:e,value:f[e],record:k,index:a},{resultMap:h,results:d,tokenSearchers:g,fullSearcher:q})}}},{key:"_computeScore",value:function(a,b){this._log("\n\nComputing score:\n");
for(var d=0,f=b.length;d<f;d+=1){for(var e=b[d].output,k=e.length,g=0,h=1,m=0;m<k;m+=1){var q=a?a[e[m].key].weight:1,y=(1===q?e[m].score:e[m].score||.001)*q;1!==q?h=Math.min(h,y):(e[m].nScore=y,g+=y)}b[d].score=1===h?g/k:h;this._log(b[d])}}},{key:"_sort",value:function(a){this._log("\n\nSorting....");a.sort(this.options.sortFn)}},{key:"_format",value:function(a){var b=[];this._log("\n\nOutput:\n\n",JSON.stringify(a));var e=[];this.options.includeMatches&&e.push(function(a,b){a=a.output;b.matches=
[];for(var d=0,e=a.length;d<e;d+=1){var f=a[d];if(0!==f.matchedIndices.length){var k={indices:f.matchedIndices,value:f.value};f.key&&(k.key=f.key);f.hasOwnProperty("arrayIndex")&&-1<f.arrayIndex&&(k.arrayIndex=f.arrayIndex);b.matches.push(k)}}});this.options.includeScore&&e.push(function(a,b){b.score=a.score});for(var f=0,k=a.length;f<k;f+=1){var m=a[f];if(this.options.id&&(m.item=this.options.getFn(m.item,this.options.id)[0]),e.length){for(var g={item:m.item},h=0,q=e.length;h<q;h+=1)e[h](m,g);b.push(g)}else b.push(m.item)}return b}},
{key:"_log",value:function(){if(this.options.verbose){var a;(a=console).log.apply(a,arguments)}}}]),a}();a.exports=b}])});
$(document).ready(function(){function a(){try{b();var a=window.location.hash.split("#")[1]||0,d=w.querySelector("[id='"+a+"']").cloneNode(!0);$(".back-btn").hide();$(".back-btn").detach().appendTo("#scene");$(".current").remove();$("#content").append(d.content);setTimeout(function(){$("ul#content > .content-wrapper").addClass("current");$("html, body").animate({scrollTop:0},"fast");var b=$("ul#content > .content-wrapper > h4.header").html();q+=" > "+b;0!==a&&(ga("send","event","Troubleshooter","open",
b),setTimeout(function(){$(".back-btn").detach().appendTo(".content-wrapper > span.text");$(".back-btn").slideDown()},900))},10)}catch(h){throw h;}}function b(){$("#search-shadow").hide();$("#search-results").hide();$("#js-search").removeClass("active")}function k(){d.forEach(function(a){$("#cat"+a).html("")})}function e(a){m=a;a=$("#search").val();k();0===a.length?($(".no-res").hide(),$("#search-results").hide()):(0===m.length?($(".category").hide(),$(".no-res").show(),$("#search-results").show()):
($(".category").hide(),$("#search-results").show(),m.forEach(function(a){var b=a.item;a=b.category;var d=b.id,f=b.title;b=b.text;var e=$("#cat"+a).html();$("#cat"+a).parent().parent().show();$("#cat"+a).html(e+'<a href="./#'+d+'"  class="search-entry"><div class="res"><h6>'+f+"</h6><p>"+b+"</p></div></a>")})),$("#search-results").on("click",".search-entry",function(){b()}))}(function(){function a(a){return(a=String(a)).charAt(0).toUpperCase()+a.slice(1)}function b(a,b){var d=-1,e=a?a.length:0;if("number"==
typeof e&&-1<e&&e<=w)for(;++d<e;)b(a[d],d,a);else f(a,b)}function d(b){return b=String(b).replace(/^ +| +$/g,""),/^(?:webOS|i(?:OS|P))/.test(b)?b:a(b)}function f(a,b){for(var d in a)I.call(a,d)&&b(a[d],d,a)}function e(b){return null==b?a(b):N.call(b).slice(8,-1)}function k(a,b){var d=null!=a?typeof a[b]:"number";return!(/^(?:boolean|number|string|undefined)$/.test(d)||"object"==d&&!a[b])}function m(a){return String(a).replace(/([ -])(?!$)/g,"$1?")}function q(a,d){var e=null;return b(a,function(b,
f){e=d(e,b,f,a)}),e}function t(a){function b(b){return q(b,function(b,c){var e=c.pattern||m(c);return!b&&(b=RegExp("\\b"+e+" *\\d+[.\\w_]*","i").exec(a)||RegExp("\\b"+e+" *\\w+-[\\w]*","i").exec(a)||RegExp("\\b"+e+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(a))&&((b=String(c.label&&!RegExp(e,"i").test(c.label)?c.label:b).split("/"))[1]&&!/[\d.]+/.test(b[0])&&(b[0]+=" "+b[1]),c=c.label||c,b=d(b[0].replace(RegExp(e,"i"),c).replace(RegExp("; *(?:"+c+"[_-])?","i")," ").replace(RegExp("("+c+
")[-_.]?(\\w)","i"),"$1 $2"))),b})}var g=z,h=a&&"object"==typeof a&&"String"!=e(a);h&&(g=a,a=null);var r=g.navigator||{},p=r.userAgent||"";a||(a=p);var c,x,A=h?!!r.likeChrome:/\bChrome\b/.test(a)&&!/internal|\n/i.test(N.toString()),B=h?"Object":"ScriptBridgingProxyObject",y=h?"Object":"Environment",w=h&&g.java?"JavaPackage":e(g.java),C=h?"Object":"RuntimeObject";y=(w=/\bJava/.test(w)&&g.java)&&e(g.environment)==y;var F=w?"a":"\u03b1",G=w?"b":"\u03b2",E=g.document||{},D=g.operamini||g.opera,I=L.test(I=
h&&D?D["[[Class]]"]:e(D))?I:D=null,K=a;h=[];var J=null,M=a==p;p=M&&D&&"function"==typeof D.version&&D.version();var u=q([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],function(b,c){return b||RegExp("\\b"+(c.pattern||m(c))+"\\b","i").exec(a)&&(c.label||c)}),l=q(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror",
"Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Waterfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},
{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"],function(b,c){return b||RegExp("\\b"+(c.pattern||m(c))+"\\b","i").exec(a)&&(c.label||c)}),v=b([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",
pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),H=q({Apple:{iPad:1,iPhone:1,iPod:1},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},
Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1}},function(b,c,d){return b||(c[v]||c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(v)]||RegExp("\\b"+m(d)+"(?:\\b|\\w*\\d)","i").exec(a))&&d}),n=q(["Windows Phone","Android","CentOS",{label:"Chrome OS",
pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "],function(b,c){var e=c.pattern||m(c);if(!b&&(b=RegExp("\\b"+e+"(?:/[\\d.]+|[ \\w.]*)","i").exec(a))){var f=b;b=c.label||c;c={"10.0":"10","6.4":"10 Technical Preview","6.3":"8.1","6.2":"8","6.1":"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",
"5.2":"Server 2003 / XP 64-bit","5.1":"XP","5.01":"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};b=(e&&b&&/^Win/i.test(f)&&!/^Windows Phone /i.test(f)&&(c=c[/[\d.]+$/.exec(f)])&&(f="Windows "+c),f=String(f),e&&b&&(f=f.replace(RegExp(e,"i"),b)),d(f.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,
"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0]))}return b});if(u&&(u=[u]),H&&!v&&(v=b([H])),(c=/\bGoogle TV\b/.exec(v))&&(v=c[0]),/\bSimulator\b/i.test(a)&&(v=(v?v+" ":"")+"Simulator"),"Opera Mini"==l&&/\bOPiOS\b/.test(a)&&h.push("running in Turbo/Uncompressed mode"),"IE"==l&&/\blike iPhone OS\b/.test(a)?(H=(c=t(a.replace(/like iPhone OS/,""))).manufacturer,v=c.product):/^iP/.test(v)?(l||(l="Safari"),n="iOS"+
((c=/ OS ([\d_]+)/i.exec(a))?" "+c[1].replace(/_/g,"."):"")):"Konqueror"!=l||/buntu/i.test(n)?H&&"Google"!=H&&(/Chrome/.test(l)&&!/\bMobile Safari\b/i.test(a)||/\bVita\b/.test(v))||/\bAndroid\b/.test(n)&&/^Chrome/.test(l)&&/\bVersion\//i.test(a)?(l="Android Browser",n=/\bAndroid\b/.test(n)?n:"Android"):"Silk"==l?(/\bMobi/i.test(a)||(n="Android",h.unshift("desktop mode")),/Accelerated *= *true/i.test(a)&&h.unshift("accelerated")):"PaleMoon"==l&&(c=/\bFirefox\/([\d.]+)\b/.exec(a))?h.push("identifying as Firefox "+
c[1]):"Firefox"==l&&(c=/\b(Mobile|Tablet|TV)\b/i.exec(a))?(n||(n="Firefox OS"),v||(v=c[1])):!l||(c=!/\bMinefield\b/i.test(a)&&/\b(?:Firefox|Safari)\b/.exec(l))?(l&&!v&&/[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(c+"/")+8))&&(l=null),(c=v||H||n)&&(v||H||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(n))&&(l=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(n)?n:c)+" Browser")):"Electron"==l&&(c=(/\bChrome\/([\d.]+)\b/.exec(a)||0)[1])&&h.push("Chromium "+c):n="Kubuntu",p||(p=q(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))",
"Version",m(l),"(?:Firefox|Minefield|NetFront)"],function(b,c){return b||(RegExp(c+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(a)||0)[1]||null})),(c="iCab"==u&&3<parseFloat(p)&&"WebKit"||/\bOpera\b/.test(l)&&(/\bOPR\b/.test(a)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(a)&&!/^(?:Trident|EdgeHTML)$/.test(u)&&"WebKit"||!u&&/\bMSIE\b/i.test(a)&&("Mac OS"==n?"Tasman":"Trident")||"WebKit"==u&&/\bPlayStation\b(?! Vita\b)/i.test(l)&&"NetFront")&&(u=[c]),"IE"==l&&(c=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a)||
0)[1])?(l+=" Mobile",n="Windows Phone "+(/\+$/.test(c)?c:c+".x"),h.unshift("desktop mode")):/\bWPDesktop\b/i.test(a)?(l="IE Mobile",n="Windows Phone 8.x",h.unshift("desktop mode"),p||(p=(/\brv:([\d.]+)/.exec(a)||0)[1])):"IE"!=l&&"Trident"==u&&(c=/\brv:([\d.]+)/.exec(a))&&(l&&h.push("identifying as "+l+(p?" "+p:"")),l="IE",p=c[1]),M){if(k(g,"global"))if(w&&(K=(c=w.lang.System).getProperty("os.arch"),n=n||c.getProperty("os.name")+" "+c.getProperty("os.version")),y){try{p=g.require("ringo/engine").version.join("."),
l="RingoJS"}catch(P){(c=g.system)&&c.global.system==g.system&&(l="Narwhal",n||(n=c[0].os||null))}l||(l="Rhino")}else"object"==typeof g.process&&!g.process.browser&&(c=g.process)&&("object"==typeof c.versions&&("string"==typeof c.versions.electron?(h.push("Node "+c.versions.node),l="Electron",p=c.versions.electron):"string"==typeof c.versions.nw&&(h.push("Chromium "+p,"Node "+c.versions.node),l="NW.js",p=c.versions.nw)),l||(l="Node.js",K=c.arch,n=c.platform,p=(p=/[\d.]+/.exec(c.version))?p[0]:null));
else e(c=g.runtime)==B?(l="Adobe AIR",n=c.flash.system.Capabilities.os):e(c=g.phantom)==C?(l="PhantomJS",p=(c=c.version||null)&&c.major+"."+c.minor+"."+c.patch):"number"==typeof E.documentMode&&(c=/\bTrident\/(\d+)/i.exec(a))?(p=[p,E.documentMode],(c=+c[1]+4)!=p[1]&&(h.push("IE "+p[1]+" mode"),u&&(u[1]=""),p[1]=c),p="IE"==l?String(p[1].toFixed(1)):p[0]):"number"==typeof E.documentMode&&/^(?:Chrome|Firefox)\b/.test(l)&&(h.push("masking as "+l+" "+p),l="IE",p="11.0",u=["Trident"],n="Windows");n=n&&
d(n)}if(p&&(c=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(p)||/(?:alpha|beta)(?: ?\d)?/i.exec(a+";"+(M&&r.appMinorVersion))||/\bMinefield\b/i.test(a)&&"a")&&(J=/b/i.test(c)?"beta":"alpha",p=p.replace(RegExp(c+"\\+?$"),"")+("beta"==J?G:F)+(/\d+\+?/.exec(c)||"")),"Fennec"==l||"Firefox"==l&&/\b(?:Android|Firefox OS)\b/.test(n))l="Firefox Mobile";else if("Maxthon"==l&&p)p=p.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(v))"Xbox 360"==v&&(n=null),"Xbox 360"==v&&/\bIEMobile\b/.test(a)&&h.unshift("mobile mode");
else if(!/^(?:Chrome|IE|Opera)$/.test(l)&&(!l||v||/Browser|Mobi/.test(l))||"Windows CE"!=n&&!/Mobi/i.test(a))if("IE"==l&&M)try{null===g.external&&h.unshift("platform preview")}catch(P){h.unshift("embedded")}else(/\bBlackBerry\b/.test(v)||/\bBB10\b/.test(a))&&(c=(RegExp(v.replace(/ +/g," *")+"/([.\\d]+)","i").exec(a)||0)[1]||p)?(c=[c,/BB10/.test(a)],n=(c[1]?(v=null,H="BlackBerry"):"Device Software")+" "+c[0],p=null):this!=f&&"Wii"!=v&&(M&&D||/Opera/.test(l)&&/\b(?:MSIE|Firefox)\b/i.test(a)||"Firefox"==
l&&/\bOS X (?:\d+\.){2,}/.test(n)||"IE"==l&&(n&&!/^Win/.test(n)&&5.5<p||/\bWindows XP\b/.test(n)&&8<p||8==p&&!/\bTrident\b/.test(a)))&&!L.test(c=t.call(f,a.replace(L,"")+";"))&&c.name&&(c="ing as "+c.name+((c=c.version)?" "+c:""),L.test(l)?(/\bIE\b/.test(c)&&"Mac OS"==n&&(n=null),c="identify"+c):(c="mask"+c,l=I?d(I.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(c)&&(n=null),M||(p=null)),u=["Presto"],h.push(c));else l+=" Mobile";(c=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(a)||0)[1])&&(c=[parseFloat(c.replace(/\.(\d)$/,
".0$1")),c],"Safari"==l&&"+"==c[1].slice(-1)?(l="WebKit Nightly",J="alpha",p=c[1].slice(0,-1)):p!=c[1]&&p!=(c[2]=(/\bSafari\/([\d.]+\+?)/i.exec(a)||0)[1])||(p=null),c[1]=(/\bChrome\/([\d.]+)/i.exec(a)||0)[1],537.36==c[0]&&537.36==c[2]&&28<=parseFloat(c[1])&&"WebKit"==u&&(u=["Blink"]),M&&(A||c[1])?(u&&(u[1]="like Chrome"),c=c[1]||(c=c[0],530>c?1:532>c?2:532.05>c?3:533>c?4:534.03>c?5:534.07>c?6:534.1>c?7:534.13>c?8:534.16>c?9:534.24>c?10:534.3>c?11:535.01>c?12:535.02>c?"13+":535.07>c?15:535.11>c?16:
535.19>c?17:536.05>c?18:536.1>c?19:537.01>c?20:537.11>c?"21+":537.13>c?23:537.18>c?24:537.24>c?25:537.36>c?26:"Blink"!=u?"27":"28")):(u&&(u[1]="like Safari"),c=c[0],c=400>c?1:500>c?2:526>c?3:533>c?4:534>c?"4+":535>c?5:537>c?6:538>c?7:601>c?8:"8"),u&&(u[1]+=" "+(c+="number"==typeof c?".x":/[.+]/.test(c)?"":"+")),"Safari"==l&&(!p||45<parseInt(p))&&(p=c));"Opera"==l&&(c=/\bzbov|zvav$/.exec(n))?(l+=" ",h.unshift("desktop mode"),"zvav"==c?(l+="Mini",p=null):l+="Mobile",n=n.replace(RegExp(" *"+c+"$"),"")):
"Safari"==l&&/\bChrome\b/.exec(u&&u[1])&&(h.unshift("desktop mode"),l="Chrome Mobile",p=null,/\bOS X\b/.test(n)?(H="Apple",n="iOS 4.3+"):n=null);p&&0==p.indexOf(c=/[\d.]+$/.exec(n))&&-1<a.indexOf("/"+c+"-")&&(n=String(n.replace(c,"")).replace(/^ +| +$/g,""));u&&!/\b(?:Avant|Nook)\b/.test(l)&&(/Browser|Lunascape|Maxthon/.test(l)||"Safari"!=l&&/^iOS/.test(n)&&/\bSafari\b/.test(u[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(l)&&u[1])&&(c=u[u.length-
1])&&h.push(c);h.length&&(h=["("+h.join("; ")+")"]);H&&v&&0>v.indexOf(H)&&h.push("on "+H);v&&h.push((/^on /.test(h[h.length-1])?"":"on ")+v);n&&(c=/ ([\d.+]+)$/.exec(n),x=c&&"/"==n.charAt(n.length-c[0].length-1),n={architecture:32,family:c&&!x?n.replace(c[0],""):n,version:c?c[1]:null,toString:function(){var a=this.version;return this.family+(a&&!x?" "+a:"")+(64==this.architecture?" 64-bit":"")}});(c=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(K))&&!/\bi686\b/i.test(K)?(n&&(n.architecture=64,n.family=
n.family.replace(RegExp(" *"+c),"")),l&&(/\bWOW64\b/i.test(a)||M&&/\w(?:86|32)$/.test(r.cpuClass||r.platform)&&!/\bWin64; x64\b/i.test(a))&&h.unshift("32-bit")):n&&/^OS X/.test(n.family)&&"Chrome"==l&&39<=parseFloat(p)&&(n.architecture=64);a||(a=null);g={};return g.description=a,g.layout=u&&u[0],g.manufacturer=H,g.name=l,g.prerelease=J,g.product=v,g.ua=a,g.version=l&&p,g.os=n||{architecture:null,family:null,version:null,toString:function(){return"null"}},g.parse=t,g.toString=function(){return this.description||
""},g.version&&h.unshift(p),g.name&&h.unshift(l),n&&l&&(n!=String(n).split(" ")[0]||n!=l.split(" ")[0]&&!v)&&h.push(v?"("+n+")":"on "+n),h.length&&(g.description=h.join(" ")),g}var r={function:!0,object:!0},z=r[typeof window]&&window||this,B=r[typeof exports]&&exports;r=r[typeof module]&&module&&!module.nodeType&&module;var A=B&&r&&"object"==typeof global&&global;!A||A.global!==A&&A.window!==A&&A.self!==A||(z=A);var w=Math.pow(2,53)-1,L=/\bOpera/;A=Object.prototype;var I=A.hasOwnProperty,N=A.toString,
J=t();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(z.platform=J,define(function(){return J})):B&&r?f(J,function(a,b){B[b]=a}):z.platform=J}).call(this);var q=" Troubleshooter steps: ",I="OS : "+platform.os+" browser: "+platform.name+" version: "+platform.version+" description: "+platform.description;$("#js-search").on("keypress",function(a){return 13!==a.keyCode});$("#search").on("focus",function(){$("#search-shadow").show();$("#js-search").addClass("active");e(m)});$("#search-shadow").on("click",
function(){b()});$("#search").keyup(function(a){var d=$(this).val(),f=[];0!==d.length?f=r.search(d):27===a.keyCode&&($("#search").blur(),b());$.debounce(250,e(f))});var m=[],w=document.querySelector("#shadow"),f=w.querySelectorAll("template.entry"),d=[1,2,17,57],r={},t=[],O={shouldSort:!0,includeScore:!0,tokenize:!0,findAllMatches:!0,threshold:.45,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:["title","text"]};(function(){d.forEach(function(a){w.querySelector("[id='"+a+"']").content.querySelectorAll("div.content-wrapper > ul.option-list > li").forEach(function(b){b=
b.textContent.toString();var d=w.querySelector("[id='"+b+"']").content,e=d.querySelector("h4.header").textContent;d=d.querySelector("span.text").innerText.trim()||d.querySelector("span.text").textContent.trim();t.push({category:a,id:b,title:e,text:d})})});r=new Fuse(t,O)})();(function(){f.forEach(function(a){a.content.querySelectorAll("div.content-wrapper > ul.option-list > li").forEach(function(a){var b=a.textContent.toString(),d=w.querySelector("[id='"+b+"']").content.querySelector("h4.header").textContent;
a.innerHTML='<a href="./#'+b+'">'+d+"</a>"})})})();a();ga("send","event","Troubleshooter","visit","");window.onhashchange=a;window.gotoTroubleshooter=function(){location.href="https://satoshilabs.kayako.com/conversation/new/9?technical="+I+q;return!1}});