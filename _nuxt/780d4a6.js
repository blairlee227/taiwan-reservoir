(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{212:function(t,e,r){var content=r(219);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("36dd68f7",content,!0,{sourceMap:!1})},213:function(t,e,r){"use strict";var n=r(9),o=r(5),l=r(84),c=r(13),f=r(10),d=r(36),v=r(161),x=r(62),h=r(4),w=r(47),m=r(63).f,N=r(24).f,I=r(12).f,_=r(214).trim,y="Number",E=o.Number,C=E.prototype,F=d(w(C))==y,S=function(t){var e,r,n,o,l,c,f,code,d=x(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=_(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(c=(l=d.slice(2)).length,f=0;f<c;f++)if((code=l.charCodeAt(f))<48||code>o)return NaN;return parseInt(l,n)}return+d};if(l(y,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var A,k=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof k&&(F?h((function(){C.valueOf.call(r)})):d(r)!=y)?v(new E(S(e)),r,k):S(e)},M=n?m(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),R=0;M.length>R;R++)f(E,A=M[R])&&!f(k,A)&&I(k,A,N(E,A));k.prototype=C,C.constructor=k,c(o,y,k)}},214:function(t,e,r){var n=r(17),o="["+r(215)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),f=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},215:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},216:function(t,e,r){"use strict";var n=r(2),o=r(37),l=r(217),c=r(162),f=r(4),d=1..toFixed,v=Math.floor,x=function(t,e,r){return 0===e?r:e%2==1?x(t,e-1,r*t):x(t*t,e/2,r)},h=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=v(n/1e7)},w=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=v(r/t),r=r%t*1e7},m=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+c.call("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:d&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!f((function(){d.call({})}))},{toFixed:function(t){var e,r,n,f,d=l(this),v=o(t),data=[0,0,0,0,0,0],N="",I="0";if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return String(d);if(d<0&&(N="-",d=-d),d>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(d*x(2,69,1))-69)<0?d*x(2,-e,1):d/x(2,e,1),r*=4503599627370496,(e=52-e)>0){for(h(data,0,r),n=v;n>=7;)h(data,1e7,0),n-=7;for(h(data,x(10,n,1),0),n=e-1;n>=23;)w(data,1<<23),n-=23;w(data,1<<n),h(data,1,1),w(data,2),I=m(data)}else h(data,0,r),h(data,1<<-e,0),I=m(data)+c.call("0",v);return I=v>0?N+((f=I.length)<=v?"0."+c.call("0",v-f)+I:I.slice(0,f-v)+"."+I.slice(f-v)):N+I}})},217:function(t,e,r){var n=r(36);t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},218:function(t,e,r){"use strict";r(212)},219:function(t,e,r){var n=r(44)((function(i){return i[1]}));n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap);"]),n.push([t.i,'#chart{position:relative}.water{clip-path:url(#clip-path);-webkit-clip-path:url(#clip-path)!important}.default .bg{fill:#27859c}.default .water{fill:#6ec2c6}.warning .bg{fill:#dd994c}.warning .water{fill:#edd6b3}.danger .bg{fill:#d26344}.danger .water{fill:#edd8c9}.value-text{color:#fff;position:absolute;top:53%;left:50%;transform:translateX(-50%);white-space:nowrap}.value-text .value{font-size:55px;font-family:"Raleway",sans-serif!important}@media(max-width:1200px){.value-text .value{font-size:40px}}@media(max-width:768px){.value-text .value{font-size:35px}}@media(max-width:576px){.value-text .value{font-size:30px}}.value-text .percentage{font-size:20px;font-family:"Raleway",sans-serif!important}@media(max-width:1200px){.value-text .percentage{font-size:18px}}@media(max-width:768px){.value-text .percentage{font-size:18px}}',""]),n.locals={},t.exports=n},229:function(t,e,r){"use strict";r.r(e);r(213),r(216),r(14),r(85),r(46);var n={props:{percentage:{type:Number,default:0}},computed:{value:function(){return this.percentage.toFixed(1)},waterValue:function(){return 137-137*this.value/100}},methods:{removeDecimalZero:function(t){var e=t.toString();return"0"===e.slice(-1)?e.slice(0,-2):t}}},o=(r(218),r(26)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"chart"}},[r("svg",{class:t.value<30?"danger":t.value<50?"warning":"default",staticStyle:{"enable-background":"new 0 0 97.1 139.4"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 97.1 139.4","xml:space":"preserve"}},[r("path",{staticClass:"bg",attrs:{d:"M48.5,136.2c15.5,0,30.2-7.7,39-20c9.5-13.4,10.1-29.9,4.2-44.8c-4.9-12.6-13-23.9-20-35.4\n\tC64.5,24,56.7,12.4,49.4,0.5c-0.4-0.6-1.3-0.6-1.7,0C40.4,12.4,32.6,24,25.3,35.9c-7,11.5-15,22.9-20,35.4\n\tc-5.9,14.9-5.3,31.5,4.2,44.8C18.3,128.5,33,136.2,48.5,136.2"}}),t._v(" "),r("g",[r("defs",[r("path",{attrs:{id:"clip-path-use",d:"M48.5,136.2c15.5,0,30.2-7.7,39-20c9.5-13.4,10.1-29.9,4.2-44.8c-4.9-12.6-13-23.9-20-35.4\n\t\t\tC64.5,24,56.7,12.4,49.4,0.5c-0.4-0.6-1.3-0.6-1.7,0C40.4,12.4,32.6,24,25.3,35.9c-7,11.5-15,22.9-20,35.4\n\t\t\tc-5.9,14.9-5.3,31.5,4.2,44.8C18.3,128.5,33,136.2,48.5,136.2"}})]),t._v(" "),r("clipPath",{attrs:{id:"clip-path"}},[r("use",{staticStyle:{overflow:"visible"},attrs:{"xlink:href":"#clip-path-use"}})]),t._v(" "),r("g",[r("rect",{ref:"waterRect",staticClass:"water",attrs:{y:"0",width:"97.1",height:t.waterValue}})])])]),t._v(" "),r("p",{staticClass:"value-text"},[r("span",{staticClass:"value"},[t._v(t._s(t.removeDecimalZero(t.value)))]),t._v(" "),r("span",{staticClass:"percentage"},[t._v("%")])])])}),[],!1,null,null,null);e.default=component.exports}}]);