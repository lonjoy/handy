define("#base/0.9.1/options",[],function(a,b){function d(a){var b=[],c=a.constructor.prototype;while(c)c.options&&b.unshift(c.options),c=c.constructor.superclass;var d={};for(var f=0,g=b.length;f<g;f++)d=e(d,b[f]);return d}function e(a,b){var c,d;for(c in b)d=b[c],h(d)?d=d.slice():i(d)&&(d=e(a[c]||{},d)),a[c]=d;return a}function f(a){return a.charAt(2).toLowerCase()+a.substring(3)}function i(a){return a&&g.call(a)==="[object Object]"&&"isPrototypeOf"in a}var c=/^on[A-Z]/;b.setOptions=function(a){this.hasOwnProperty("options")||(this.options={});var b=this.options;b.__defaults||e(b,b.__defaults=d(this)),e(b,a);if(this.on)for(var g in b){var h=b[g];typeof h=="function"&&c.test(g)&&(this.on(f(g),h),delete b[g])}return this};var g=Object.prototype.toString,h=Array.isArray||function(a){return g.call(a)==="[object Array]"}});