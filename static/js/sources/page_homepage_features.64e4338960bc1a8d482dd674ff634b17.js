var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,f){if(f.get||f.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=f.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return $jscomp.SYMBOL_PREFIX+(a||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var b=0;return $jscomp.iteratorPrototype(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(a,b){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var f=0,e={next:function(){if(f<a.length){var d=f++;return{value:b(d,a[d]),done:!1}}e.next=function(){return{done:!0,value:void 0}};return e.next()}};e[Symbol.iterator]=function(){return e};return e};
$jscomp.polyfill=function(a,b,f,e){if(b){f=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var d=a[e];d in f||(f[d]={});f=f[d]}a=a[a.length-1];e=f[a];b=b(e);b!=e&&null!=b&&$jscomp.defineProperty(f,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6-impl","es3");
$(document).ready(function(){var a,b;function f(a,b,f,h,e){a=a.split("\n");for(var g=0;g<a.length;g++){for(var k="",m=a[g].split(" "),d=0;d<m.length;d++){var u=k+m[d]+" ";c.measureText(u).width>h?(c.fillText(k,b,f),k=m[d]+" ",f+=e):k=u}c.fillText(k,b,f);f+=e}}function e(e){p=d.width=d.scrollWidth;q=d.height=d.scrollHeight;a=p/2;b=q/2;l={display:{coor_text:{x:20,y:80},coor_target:{x:a-12,y:b-60}},"case":{coor_text:{x:p-20,y:80},coor_target:{x:a+30,y:b-145}},buttons:{coor_text:{x:20,y:b-20},coor_target:{x:a-
10,y:b+33}},inside:{coor_text:{x:p-20,y:b+20},coor_target:{x:a+5,y:b+120}},usb:{coor_text:{x:20,y:q-200},coor_target:{x:a-10,y:b+205}}};c.beginPath();c.drawImage(r,a-182,(q-558)/2,364,568);null==e&&$("#g").hide();Object.keys(l).map(function(a){var b=e==a;c.beginPath();c.lineWidth=1;c.strokeStyle="#ddd";var h=l[a].coor_target.x,d=l[a].coor_target.y,g=l[a].coor_text.x,k=l[a].coor_text.y;a=document.getElementById(a);var m=a.getElementsByTagName("h3")[0].innerHTML;c.beginPath();c.arc(g<h?h+6:h-6,d,6,
0,2*Math.PI);var t=d-k;c.moveTo(h,d);if(g<h){var n=h-120;c.lineTo(n,d);c.lineTo(n-t,k)}else n=h+120,c.lineTo(n,d),c.lineTo(n+t,k);c.lineTo(g,k);c.stroke();c.fillStyle="#111111";g<h?c.fillRect(g,k-1,265,4):c.fillRect(g-250-15,k-1,265,4);b&&$("#g").css({top:d-3,left:g<h?h+18:h+6});c.fillStyle="#ddd";c.font="23px 'Open Sans', sans-serif";c.fillText(m,g<h?g:g-250,k-12);c.fillStyle="#99979c";c.font="400 15px/1.75 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif";
b=$(a.getElementsByTagName("p")[0]).text().replace(/\s+/g," ");c.textAlign="left";g<h?f(b,g,k+10,250,17):f(b,g-250,k+10,250,17)});null!=e&&$("#g").show()}var d=document.getElementById("featureCanvas"),c=d.getContext("2d");document.getElementById("features-list").getElementsByClassName("entry");var p,q,l=0,r=new Image;r.onload=function(){e(null)};r.src=function(){var a=document.createElement("canvas");return a.getContext&&a.getContext("2d")?0===a.toDataURL("image/webp").indexOf("data:image/webp"):
!1}()?"./static/images/trezor-black-select.webp":"./static/images/trezor-black-select.png";$(window).resize(function(){e(null)});d.addEventListener("mousemove",function(a){var b=a.offsetX,c=a.offsetY,d=null;Object.keys(l).map(function(a){var e=l[a].coor_text.x,f=l[a].coor_text.y;e<l[a].coor_target.x?e<b&&b<e+250&&f-20<c&&c<f+70&&(d=a):e-250<b&&b<e&&f-20<c&&c<f+70&&(d=a)});e(d);d=null},!0)});