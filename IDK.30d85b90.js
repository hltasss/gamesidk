parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var t=document.querySelector(".button"),e=document.querySelector("#placeRender");function n(t){var n='<div class="col col_m">\n    <div class="card" style="width: 18rem;">\n      <img src='.concat(t.url,' class="card-img-top" alt="...">\n      <div class="card-body">\n        <h5 class="card-title">').concat(t.title,'</h5>\n        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n        <a href="#" class="btn btn-primary">Go somewhere</a>\n      </div>\n    </div>\n  </div>');e.insertAdjacentHTML("beforeend",n)}function c(){return fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(function(t){return t.ok?t.json():t.json().then(Promise.reject.bind(Promise))}).catch(function(t){throw t})}console.log(t);var o=function(){c().then(function(t){return r(t)})};function r(t){for(var e=0,c=0;c<t.length&&++e<=6;c++)n(t[c])}t.addEventListener("click",o);
},{}]},{},["Focm"], null)
//# sourceMappingURL=IDK.30d85b90.js.map