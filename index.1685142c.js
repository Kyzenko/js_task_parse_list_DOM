function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}var t,e,n=function(t){if(Array.isArray(t))return r(t)}(t=document.querySelectorAll("li"))||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();e=document.querySelector("ul"),n.sort(function(r,t){return+t.dataset.salary.slice(1).replace(",","")-+r.dataset.salary.slice(1).replace(",","")}),n.forEach(function(r){return e.append(r)}),n.map(function(r){var t=r.dataset,e=t.position,n=t.salary,a=t.age;return{name:r.textContent.trim(),position:e,salary:n,age:a}});
//# sourceMappingURL=index.1685142c.js.map
