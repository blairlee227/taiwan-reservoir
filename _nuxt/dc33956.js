(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{209:function(t,e,r){var content=r(216);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("36dd68f7",content,!0,{sourceMap:!1})},210:function(t,e,r){"use strict";var n=r(9),o=r(5),l=r(81),c=r(13),f=r(10),d=r(36),v=r(158),x=r(62),w=r(4),h=r(46),m=r(63).f,_=r(24).f,C=r(12).f,y=r(211).trim,I="Number",N=o.Number,E=N.prototype,S=d(h(E))==I,A=function(t){var e,r,n,o,l,c,f,code,d=x(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=y(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(c=(l=d.slice(2)).length,f=0;f<c;f++)if((code=l.charCodeAt(f))<48||code>o)return NaN;return parseInt(l,n)}return+d};if(l(I,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var D,F=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof F&&(S?w((function(){E.valueOf.call(r)})):d(r)!=I)?v(new N(A(e)),r,F):A(e)},k=n?m(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;k.length>M;M++)f(N,D=k[M])&&!f(F,D)&&C(F,D,_(N,D));F.prototype=E,E.constructor=F,c(o,I,F)}},211:function(t,e,r){var n=r(17),o="["+r(212)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),f=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},212:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},213:function(t,e,r){"use strict";var n=r(2),o=r(37),l=r(214),c=r(159),f=r(4),d=1..toFixed,v=Math.floor,x=function(t,e,r){return 0===e?r:e%2==1?x(t,e-1,r*t):x(t*t,e/2,r)},w=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=v(n/1e7)},h=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=v(r/t),r=r%t*1e7},m=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+c.call("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:d&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!f((function(){d.call({})}))},{toFixed:function(t){var e,r,n,f,d=l(this),v=o(t),data=[0,0,0,0,0,0],_="",C="0";if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return String(d);if(d<0&&(_="-",d=-d),d>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(d*x(2,69,1))-69)<0?d*x(2,-e,1):d/x(2,e,1),r*=4503599627370496,(e=52-e)>0){for(w(data,0,r),n=v;n>=7;)w(data,1e7,0),n-=7;for(w(data,x(10,n,1),0),n=e-1;n>=23;)h(data,1<<23),n-=23;h(data,1<<n),w(data,1,1),h(data,2),C=m(data)}else w(data,0,r),w(data,1<<-e,0),C=m(data)+c.call("0",v);return C=v>0?_+((f=C.length)<=v?"0."+c.call("0",v-f)+C:C.slice(0,f-v)+"."+C.slice(f-v)):_+C}})},214:function(t,e,r){var n=r(36);t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},215:function(t,e,r){"use strict";r(209)},216:function(t,e,r){var n=r(44)((function(i){return i[1]}));n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap);"]),n.push([t.i,'#chart{position:relative}.background{fill:#27859c}.water{-webkit-clip-path:url(#SVGID_2_);clip-path:url(#SVGID_2_);fill:#6ec2c6}.value-text{color:#fff;position:absolute;top:53%;left:50%;transform:translateX(-50%);white-space:nowrap}.value-text .value{font-size:55px;font-family:"Raleway",sans-serif!important}@media(max-width:1200px){.value-text .value{font-size:40px}}@media(max-width:768px){.value-text .value{font-size:35px}}@media(max-width:576px){.value-text .value{font-size:30px}}.value-text .percentage{font-size:20px;font-family:"Raleway",sans-serif!important}@media(max-width:1200px){.value-text .percentage{font-size:18px}}@media(max-width:768px){.value-text .percentage{font-size:18px}}',""]),n.locals={},t.exports=n},225:function(t,e,r){var content=r(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("384bbc24",content,!0,{sourceMap:!1})},226:function(t,e,r){"use strict";r.r(e);r(210),r(213);var n={props:{percentage:{type:Number,default:0}},computed:{value:function(){return this.percentage.toFixed(1)},waterValue:function(){return 137-137*this.value/100}}},o=(r(215),r(28)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"chart"}},[r("svg",{staticStyle:{"enable-background":"new 0 0 97.1 139.4"},attrs:{version:"1.1",id:"圖層_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 97.1 139.4","xml:space":"preserve"}},[r("path",{staticClass:"background",attrs:{d:"M48.5,136.2c15.5,0,30.2-7.7,39-20c9.5-13.4,10.1-29.9,4.2-44.8c-4.9-12.6-13-23.9-20-35.4\n\tC64.5,24,56.7,12.4,49.4,0.5c-0.4-0.6-1.3-0.6-1.7,0C40.4,12.4,32.6,24,25.3,35.9c-7,11.5-15,22.9-20,35.4\n\tc-5.9,14.9-5.3,31.5,4.2,44.8C18.3,128.5,33,136.2,48.5,136.2"}}),t._v(" "),r("g",[r("defs",[r("path",{attrs:{id:"SVGID_1_",d:"M48.5,136.2c15.5,0,30.2-7.7,39-20c9.5-13.4,10.1-29.9,4.2-44.8c-4.9-12.6-13-23.9-20-35.4\n\t\t\tC64.5,24,56.7,12.4,49.4,0.5c-0.4-0.6-1.3-0.6-1.7,0C40.4,12.4,32.6,24,25.3,35.9c-7,11.5-15,22.9-20,35.4\n\t\t\tc-5.9,14.9-5.3,31.5,4.2,44.8C18.3,128.5,33,136.2,48.5,136.2"}})]),t._v(" "),r("clipPath",{attrs:{id:"SVGID_2_"}},[r("use",{staticStyle:{overflow:"visible"},attrs:{"xlink:href":"#SVGID_1_"}})]),t._v(" "),r("g",[r("rect",{staticClass:"water",attrs:{y:"0",width:"97.1",height:"275"}},[r("animate",{attrs:{attributeName:"height",from:"137",to:t.waterValue,dur:"0.5s",fill:"freeze"}})])])])]),t._v(" "),r("p",{staticClass:"value-text"},[r("span",{staticClass:"value"},[t._v(t._s(t.value))]),t._v(" "),r("span",{staticClass:"percentage"},[t._v("%")])])])}),[],!1,null,null,null);e.default=component.exports},253:function(t,e,r){"use strict";r(225)},254:function(t,e,r){var n=r(44)((function(i){return i[1]}));n.push([t.i,".chart[data-v-a15b8ffa]{width:150px}@media(max-width:1200px){.chart[data-v-a15b8ffa]{width:120px}}@media(max-width:768px){.chart[data-v-a15b8ffa]{width:100px}}@media(max-width:576px){.chart[data-v-a15b8ffa]{width:100px}}",""]),n.locals={},t.exports=n},256:function(t,e,r){"use strict";r.r(e);var n={props:{rowData:{type:Object,default:function(){return{}}}}},o=(r(253),r(28)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"flex justify-center"},[r("div",{staticClass:"flex-initial xl:mr-10 lg:mr-5 md:mr-12 mr-5"},[r("chart",{staticClass:"chart",attrs:{percentage:t.rowData.percentage}})],1),t._v(" "),r("div",{staticClass:"\n        flex-initial\n        divide-y-2 divide-brown divide-dotted divide-opacity-50\n      "},[r("div",{staticClass:"mb-3"},[r("div",{staticClass:"text-brown text-2xl font-bold mb-3"},[t._v("\n          "+t._s(t.rowData.name)+"\n        ")]),t._v(" "),t._l(t.rowData.area,(function(area){return r("span",{key:area,staticClass:"\n            bg-grass\n            text-white text-md\n            rounded-md\n            mr-2\n            py-1\n            px-2\n            align-middle\n          "},[t._v("\n          "+t._s(area)+"\n        ")])})),t._v(" "),r("p",{staticClass:"mt-5 text-brown"},[t._v("\n          有效蓄水量："+t._s(t.rowData.baseAvailable)+"萬立方公尺\n        ")]),t._v(" "),r("p",{staticClass:"mt-2 text-brown"},[t._v("\n          今日進水量："+t._s(t.rowData.daliyInflow)+"萬立方公尺\n        ")]),t._v(" "),r("p",{staticClass:"mt-2 text-brown"},[t._v("\n          今日出水量："+t._s(t.rowData.daliyOverflow)+"萬立方公尺\n        ")])],2),t._v(" "),r("div",[r("p",{staticClass:"mt-2 text-brown"},[t._v("更新時間："+t._s(t.rowData.updateAt))])])])])])}),[],!1,null,"a15b8ffa",null);e.default=component.exports;installComponents(component,{Chart:r(226).default})}}]);