(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{202:function(t,e,r){var content=r(209);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("36dd68f7",content,!0,{sourceMap:!1})},203:function(t,e,r){"use strict";var n=r(8),o=r(4),c=r(79),l=r(12),f=r(10),v=r(34),x=r(152),d=r(55),h=r(5),w=r(57),m=r(56).f,_=r(23).f,I=r(11).f,N=r(204).trim,y="Number",E=o.Number,S=E.prototype,C=v(w(S))==y,F=function(t){var e,r,n,o,c,l,f,code,v=d(t,!1);if("string"==typeof v&&v.length>2)if(43===(e=(v=N(v)).charCodeAt(0))||45===e){if(88===(r=v.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+v}for(l=(c=v.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,n)}return+v};if(c(y,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var k,A=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof A&&(C?h((function(){S.valueOf.call(r)})):v(r)!=y)?x(new E(F(e)),r,A):F(e)},V=n?m(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;V.length>M;M++)f(E,k=V[M])&&!f(A,k)&&I(A,k,_(E,k));A.prototype=S,S.constructor=A,l(o,y,A)}},204:function(t,e,r){var n=r(15),o="["+r(205)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),f=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(l,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},205:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},206:function(t,e,r){"use strict";var n=r(2),o=r(35),c=r(207),l=r(153),f=r(5),v=1..toFixed,x=Math.floor,d=function(t,e,r){return 0===e?r:e%2==1?d(t,e-1,r*t):d(t*t,e/2,r)},h=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=x(n/1e7)},w=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=x(r/t),r=r%t*1e7},m=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+l.call("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:v&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!f((function(){v.call({})}))},{toFixed:function(t){var e,r,n,f,v=c(this),x=o(t),data=[0,0,0,0,0,0],_="",I="0";if(x<0||x>20)throw RangeError("Incorrect fraction digits");if(v!=v)return"NaN";if(v<=-1e21||v>=1e21)return String(v);if(v<0&&(_="-",v=-v),v>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(v*d(2,69,1))-69)<0?v*d(2,-e,1):v/d(2,e,1),r*=4503599627370496,(e=52-e)>0){for(h(data,0,r),n=x;n>=7;)h(data,1e7,0),n-=7;for(h(data,d(10,n,1),0),n=e-1;n>=23;)w(data,1<<23),n-=23;w(data,1<<n),h(data,1,1),w(data,2),I=m(data)}else h(data,0,r),h(data,1<<-e,0),I=m(data)+l.call("0",x);return I=x>0?_+((f=I.length)<=x?"0."+l.call("0",x-f)+I:I.slice(0,f-x)+"."+I.slice(f-x)):_+I}})},207:function(t,e,r){var n=r(34);t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},208:function(t,e,r){"use strict";r(202)},209:function(t,e,r){var n=r(43)((function(i){return i[1]}));n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap);"]),n.push([t.i,'#chart{position:relative}.background{fill:#27859c}.water{-webkit-clip-path:url(#SVGID_2_);clip-path:url(#SVGID_2_);fill:#6ec2c6}.value-text{color:#fff;position:absolute;top:53%;left:50%;transform:translateX(-50%);white-space:nowrap}.value-text .value{font-size:55px;font-family:"Raleway",sans-serif!important}@media(max-width:1200px){.value-text .value{font-size:40px}}@media(max-width:768px){.value-text .value{font-size:35px}}@media(max-width:576px){.value-text .value{font-size:30px}}.value-text .percentage{font-size:20px;font-family:"Raleway",sans-serif!important}@media(max-width:1200px){.value-text .percentage{font-size:18px}}@media(max-width:768px){.value-text .percentage{font-size:18px}}',""]),n.locals={},t.exports=n},219:function(t,e,r){"use strict";r.r(e);r(203),r(206);var n={props:{percentage:{type:Number,default:0}},computed:{value:function(){return this.percentage.toFixed(1)},waterValue:function(){return 137-137*this.value/100}}},o=(r(208),r(27)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"chart"}},[r("svg",{staticStyle:{"enable-background":"new 0 0 97.1 139.4"},attrs:{version:"1.1",id:"圖層_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 97.1 139.4","xml:space":"preserve"}},[r("path",{staticClass:"background",attrs:{d:"M48.5,136.2c15.5,0,30.2-7.7,39-20c9.5-13.4,10.1-29.9,4.2-44.8c-4.9-12.6-13-23.9-20-35.4\n\tC64.5,24,56.7,12.4,49.4,0.5c-0.4-0.6-1.3-0.6-1.7,0C40.4,12.4,32.6,24,25.3,35.9c-7,11.5-15,22.9-20,35.4\n\tc-5.9,14.9-5.3,31.5,4.2,44.8C18.3,128.5,33,136.2,48.5,136.2"}}),t._v(" "),r("g",[r("defs",[r("path",{attrs:{id:"SVGID_1_",d:"M48.5,136.2c15.5,0,30.2-7.7,39-20c9.5-13.4,10.1-29.9,4.2-44.8c-4.9-12.6-13-23.9-20-35.4\n\t\t\tC64.5,24,56.7,12.4,49.4,0.5c-0.4-0.6-1.3-0.6-1.7,0C40.4,12.4,32.6,24,25.3,35.9c-7,11.5-15,22.9-20,35.4\n\t\t\tc-5.9,14.9-5.3,31.5,4.2,44.8C18.3,128.5,33,136.2,48.5,136.2"}})]),t._v(" "),r("clipPath",{attrs:{id:"SVGID_2_"}},[r("use",{staticStyle:{overflow:"visible"},attrs:{"xlink:href":"#SVGID_1_"}})]),t._v(" "),r("g",[r("rect",{staticClass:"water",attrs:{y:"0",width:"97.1",height:"275"}},[r("animate",{attrs:{attributeName:"height",from:"137",to:t.waterValue,dur:"0.5s",fill:"freeze"}})])])])]),t._v(" "),r("p",{staticClass:"value-text"},[r("span",{staticClass:"value"},[t._v(t._s(t.value))]),t._v(" "),r("span",{staticClass:"percentage"},[t._v("%")])])])}),[],!1,null,null,null);e.default=component.exports}}]);