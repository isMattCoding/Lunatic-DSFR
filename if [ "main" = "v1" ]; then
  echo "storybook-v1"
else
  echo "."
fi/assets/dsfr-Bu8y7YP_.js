import{u as De}from"./index-dZF2CjUm.js";import{r as P}from"./index-CBqU2yxZ.js";const $e=Object.fromEntries?Object.fromEntries:e=>{if(!e||!e[Symbol.iterator])throw new Error("Object.fromEntries() requires a single iterable argument");const t={};return Object.keys(e).forEach(n=>{const[r,s]=e[n];t[r]=s}),t};function V(e){return Object.keys(e)}function ue(e,t){if(!e)throw new Error(t)}function de(e,t){return t}const le=e=>{const t=e.length;let n=0,r="";for(;n<t;n++){const s=e[n];if(s==null)continue;let c;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))c=le(s);else{ue(!de(s,!1)),c="";for(const i in s)s[i]&&i&&(c&&(c+=" "),c+=i)}break}default:c=s}c&&(r&&(r+=" "),r+=c)}return r};function Le(e){for(var t=0,n,r=0,s=e.length;s>=4;++r,s-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(s){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var We={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Fe(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var qe=/[A-Z]|^ms/g,Ve=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ee=function(t){return t.charCodeAt(1)===45},xe=function(t){return t!=null&&typeof t!="boolean"},ie=Fe(function(e){return Ee(e)?e:e.replace(qe,"-$&").toLowerCase()}),ve=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Ve,function(r,s,c){return U={name:s,styles:c,next:U},s})}return We[t]!==1&&!Ee(t)&&typeof n=="number"&&n!==0?n+"px":n};function N(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return U={name:n.name,styles:n.styles,next:U},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)U={name:r.name,styles:r.styles,next:U},r=r.next;var s=n.styles+";";return s}return Ge(e,t,n)}case"function":{if(e!==void 0){var c=U,i=n(e);return U=c,N(e,t,i)}break}}if(t==null)return n;var o=t[n];return o!==void 0?o:n}function Ge(e,t,n){var r="";if(Array.isArray(n))for(var s=0;s<n.length;s++)r+=N(e,t,n[s])+";";else for(var c in n){var i=n[c];if(typeof i!="object")t!=null&&t[i]!==void 0?r+=c+"{"+t[i]+"}":xe(i)&&(r+=ie(c)+":"+ve(c,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var o=0;o<i.length;o++)xe(i[o])&&(r+=ie(c)+":"+ve(c,i[o])+";");else{var a=N(e,t,i);switch(c){case"animation":case"animationName":{r+=ie(c)+":"+a+";";break}default:r+=c+"{"+a+"}"}}}return r}var we=/label:\s*([^\s;\n{]+)\s*(;|$)/g,U,ze=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var s=!0,c="";U=void 0;var i=t[0];i==null||i.raw===void 0?(s=!1,c+=N(r,n,i)):c+=i[0];for(var o=1;o<t.length;o++)c+=N(r,n,t[o]),s&&(c+=i[o]);we.lastIndex=0;for(var a="",p;(p=we.exec(c))!==null;)a+="-"+p[1];var f=Le(c)+a;return{name:f,styles:c,next:U}},Be=!0;function He(e,t,n){var r="";return n.split(" ").forEach(function(s){e[s]!==void 0?t.push(e[s]+";"):r+=s+" "}),r}var Ne=function(t,n,r){var s=t.key+"-"+n.name;(r===!1||Be===!1)&&t.registered[s]===void 0&&(t.registered[s]=n.styles)},Je=function(t,n,r){Ne(t,n,r);var s=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var c=n;do t.insert(n===c?"."+s:"",c,t.sheet,!0),c=c.next;while(c!==void 0)}};function Ke(e,t){const n=P.useRef();return(!n.current||t.length!==n.current.prevDeps.length||n.current.prevDeps.map((r,s)=>r===t[s]).indexOf(!1)>=0)&&(n.current={v:e(),prevDeps:[...t]}),n.current.v}function Qe(e){return e instanceof Object&&!("styles"in e)&&!("length"in e)&&!("__emotion_styles"in e)}const{createCssAndCx:Ye}=(()=>{function e(n,r,s){const c=[],i=He(n,c,s);return c.length<2?s:i+r(c)}function t(n){const{cache:r}=n,s=(...i)=>{const o=ze(i,r.registered);Je(r,o,!1);const a=`${r.key}-${o.name}`;e:{const p=i[0];if(!Qe(p))break e;me.saveClassNameCSSObjectMapping(r,a,p)}return a};return{css:s,cx:(...i)=>{const o=le(i),a=me.fixClassName(r,o,s);return e(r.registered,s,a)}}}return{createCssAndCx:t}})();function Ae(e){const{useCache:t}=e;function n(){const r=t(),{css:s,cx:c}=Ke(()=>Ye({cache:r}),[r]);return{css:s,cx:c}}return{useCssAndCx:n}}const me=(()=>{const e=new WeakMap;return{saveClassNameCSSObjectMapping:(t,n,r)=>{let s=e.get(t);s===void 0&&(s=new Map,e.set(t,s)),s.set(n,r)},fixClassName:(()=>{function t(n){let r=!1;return n.map(([s,c])=>{if(c===void 0)return s;let i;if(r)i={"&&":c};else{i=s;for(const o in c)if(o.startsWith("@media")){r=!0;break}}return i})}return(n,r,s)=>{const c=e.get(n);return le(t(r.split(" ").map(i=>[i,c==null?void 0:c.get(i)])).map(i=>typeof i=="string"?i:s(i)))}})()}})();function G(e){if(!(e instanceof Object)||typeof e=="function")return e;const t=[];for(const n in e){const r=e[n],s=typeof r;if(!(s==="string"||s==="number"&&!isNaN(r)||s==="boolean"||r===void 0||r===null))return e;t.push(`${n}:${s}_${r}`)}return"xSqLiJdLMd9s"+t.join("|")}function he(e,t,n){if(!(t instanceof Object))return e;const r={};return V(e).forEach(s=>r[s]=n(e[s],t[s])),V(t).forEach(s=>{if(s in e)return;const c=t[s];typeof c=="string"&&(r[s]=c)}),r}const Ze=({classes:e,theme:t,muiStyleOverridesParams:n,css:r,cx:s,name:c})=>{var i,o;e:{if(c==="makeStyle no name"){c=void 0;break e}if(n!==void 0&&c===void 0)throw new Error("To use muiStyleOverridesParams, you must specify a name using .withName('MyComponent')")}let a;try{a=c===void 0?void 0:((o=(i=t.components)===null||i===void 0?void 0:i[c])===null||o===void 0?void 0:o.styleOverrides)||void 0}catch{}const p=P.useMemo(()=>{if(a===void 0)return;const f={};for(const b in a){const w=a[b];w instanceof Object&&(f[b]=r(typeof w=="function"?w(Object.assign({theme:t,ownerState:n==null?void 0:n.ownerState},n==null?void 0:n.props)):w))}return f},[a,G(n==null?void 0:n.props),G(n==null?void 0:n.ownerState),r]);return e=P.useMemo(()=>he(e,p,s),[e,p,s]),{classes:e}};function Xe(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function et(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var tt=function(){function e(n){var r=this;this._insertTag=function(s){var c;r.tags.length===0?r.insertionPoint?c=r.insertionPoint.nextSibling:r.prepend?c=r.container.firstChild:c=r.before:c=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(s,c),r.tags.push(s)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(et(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var c=Xe(s);try{c.insertRule(r,c.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),A="-ms-",ne="-moz-",d="-webkit-",Oe="comm",pe="rule",be="decl",nt="@import",Me="@keyframes",rt="@layer",st=Math.abs,re=String.fromCharCode,ct=Object.assign;function it(e,t){return E(e,0)^45?(((t<<2^E(e,0))<<2^E(e,1))<<2^E(e,2))<<2^E(e,3):0}function je(e){return e.trim()}function ot(e,t){return(e=t.exec(e))?e[0]:e}function l(e,t,n){return e.replace(t,n)}function ae(e,t){return e.indexOf(t)}function E(e,t){return e.charCodeAt(t)|0}function J(e,t,n){return e.slice(t,n)}function D(e){return e.length}function ye(e){return e.length}function Y(e,t){return t.push(e),e}function at(e,t){return e.map(t).join("")}var se=1,z=1,Re=0,M=0,C=0,B="";function ce(e,t,n,r,s,c,i){return{value:e,root:t,parent:n,type:r,props:s,children:c,line:se,column:z,length:i,return:""}}function H(e,t){return ct(ce("",null,null,"",null,null,0),e,{length:-e.length},t)}function ft(){return C}function ut(){return C=M>0?E(B,--M):0,z--,C===10&&(z=1,se--),C}function R(){return C=M<Re?E(B,M++):0,z++,C===10&&(z=1,se++),C}function L(){return E(B,M)}function Z(){return M}function Q(e,t){return J(B,e,t)}function K(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Te(e){return se=z=1,Re=D(B=e),M=0,[]}function _e(e){return B="",e}function X(e){return je(Q(M-1,fe(e===91?e+2:e===40?e+1:e)))}function dt(e){for(;(C=L())&&C<33;)R();return K(e)>2||K(C)>3?"":" "}function lt(e,t){for(;--t&&R()&&!(C<48||C>102||C>57&&C<65||C>70&&C<97););return Q(e,Z()+(t<6&&L()==32&&R()==32))}function fe(e){for(;R();)switch(C){case e:return M;case 34:case 39:e!==34&&e!==39&&fe(C);break;case 40:e===41&&fe(e);break;case 92:R();break}return M}function ht(e,t){for(;R()&&e+C!==57;)if(e+C===84&&L()===47)break;return"/*"+Q(t,M-1)+"*"+re(e===47?e:R())}function pt(e){for(;!K(L());)R();return Q(e,M)}function bt(e){return _e(ee("",null,null,null,[""],e=Te(e),0,[0],e))}function ee(e,t,n,r,s,c,i,o,a){for(var p=0,f=0,b=i,w=0,j=0,m=0,h=1,v=1,y=1,g=0,S="",$=s,x=c,k=r,u=S;v;)switch(m=g,g=R()){case 40:if(m!=108&&E(u,b-1)==58){ae(u+=l(X(g),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:u+=X(g);break;case 9:case 10:case 13:case 32:u+=dt(m);break;case 92:u+=lt(Z()-1,7);continue;case 47:switch(L()){case 42:case 47:Y(yt(ht(R(),Z()),t,n),a);break;default:u+="/"}break;case 123*h:o[p++]=D(u)*y;case 125*h:case 59:case 0:switch(g){case 0:case 125:v=0;case 59+f:y==-1&&(u=l(u,/\f/g,"")),j>0&&D(u)-b&&Y(j>32?Se(u+";",r,n,b-1):Se(l(u," ","")+";",r,n,b-2),a);break;case 59:u+=";";default:if(Y(k=Ce(u,t,n,p,f,s,o,S,$=[],x=[],b),c),g===123)if(f===0)ee(u,t,k,k,$,c,b,o,x);else switch(w===99&&E(u,3)===110?100:w){case 100:case 108:case 109:case 115:ee(e,k,k,r&&Y(Ce(e,k,k,0,0,s,o,S,s,$=[],b),x),s,x,b,o,r?$:x);break;default:ee(u,k,k,k,[""],x,0,o,x)}}p=f=j=0,h=y=1,S=u="",b=i;break;case 58:b=1+D(u),j=m;default:if(h<1){if(g==123)--h;else if(g==125&&h++==0&&ut()==125)continue}switch(u+=re(g),g*h){case 38:y=f>0?1:(u+="\f",-1);break;case 44:o[p++]=(D(u)-1)*y,y=1;break;case 64:L()===45&&(u+=X(R())),w=L(),f=b=D(S=u+=pt(Z())),g++;break;case 45:m===45&&D(u)==2&&(h=0)}}return c}function Ce(e,t,n,r,s,c,i,o,a,p,f){for(var b=s-1,w=s===0?c:[""],j=ye(w),m=0,h=0,v=0;m<r;++m)for(var y=0,g=J(e,b+1,b=st(h=i[m])),S=e;y<j;++y)(S=je(h>0?w[y]+" "+g:l(g,/&\f/g,w[y])))&&(a[v++]=S);return ce(e,t,n,s===0?pe:o,a,p,f)}function yt(e,t,n){return ce(e,t,n,Oe,re(ft()),J(e,2,-2),0)}function Se(e,t,n,r){return ce(e,t,n,be,J(e,0,r),J(e,r+1,-1),r)}function q(e,t){for(var n="",r=ye(e),s=0;s<r;s++)n+=t(e[s],s,e,t)||"";return n}function gt(e,t,n,r){switch(e.type){case rt:if(e.children.length)break;case nt:case be:return e.return=e.return||e.value;case Oe:return"";case Me:return e.return=e.value+"{"+q(e.children,r)+"}";case pe:e.value=e.props.join(",")}return D(n=q(e.children,r))?e.return=e.value+"{"+n+"}":""}function xt(e){var t=ye(e);return function(n,r,s,c){for(var i="",o=0;o<t;o++)i+=e[o](n,r,s,c)||"";return i}}function vt(e){return function(t){t.root||(t=t.return)&&e(t)}}var wt=function(t,n,r){for(var s=0,c=0;s=c,c=L(),s===38&&c===12&&(n[r]=1),!K(c);)R();return Q(t,M)},mt=function(t,n){var r=-1,s=44;do switch(K(s)){case 0:s===38&&L()===12&&(n[r]=1),t[r]+=wt(M-1,n,r);break;case 2:t[r]+=X(s);break;case 4:if(s===44){t[++r]=L()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=re(s)}while(s=R());return t},Ct=function(t,n){return _e(mt(Te(t),n))},ke=new WeakMap,St=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,s=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!ke.get(r))&&!s){ke.set(t,!0);for(var c=[],i=Ct(n,c),o=r.props,a=0,p=0;a<i.length;a++)for(var f=0;f<o.length;f++,p++)t.props[p]=c[a]?i[a].replace(/&\f/g,o[f]):o[f]+" "+i[a]}}},kt=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Pe(e,t){switch(it(e,t)){case 5103:return d+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return d+e+ne+e+A+e+e;case 6828:case 4268:return d+e+A+e+e;case 6165:return d+e+A+"flex-"+e+e;case 5187:return d+e+l(e,/(\w+).+(:[^]+)/,d+"box-$1$2"+A+"flex-$1$2")+e;case 5443:return d+e+A+"flex-item-"+l(e,/flex-|-self/,"")+e;case 4675:return d+e+A+"flex-line-pack"+l(e,/align-content|flex-|-self/,"")+e;case 5548:return d+e+A+l(e,"shrink","negative")+e;case 5292:return d+e+A+l(e,"basis","preferred-size")+e;case 6060:return d+"box-"+l(e,"-grow","")+d+e+A+l(e,"grow","positive")+e;case 4554:return d+l(e,/([^-])(transform)/g,"$1"+d+"$2")+e;case 6187:return l(l(l(e,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),e,"")+e;case 5495:case 3959:return l(e,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return l(l(e,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+e+e;case 4095:case 3583:case 4068:case 2532:return l(e,/(.+)-inline(.+)/,d+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(D(e)-1-t>6)switch(E(e,t+1)){case 109:if(E(e,t+4)!==45)break;case 102:return l(e,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+ne+(E(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ae(e,"stretch")?Pe(l(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(E(e,t+1)!==115)break;case 6444:switch(E(e,D(e)-3-(~ae(e,"!important")&&10))){case 107:return l(e,":",":"+d)+e;case 101:return l(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+d+(E(e,14)===45?"inline-":"")+"box$3$1"+d+"$2$3$1"+A+"$2box$3")+e}break;case 5936:switch(E(e,t+11)){case 114:return d+e+A+l(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return d+e+A+l(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return d+e+A+l(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return d+e+A+e+e}return e}var $t=function(t,n,r,s){if(t.length>-1&&!t.return)switch(t.type){case be:t.return=Pe(t.value,t.length);break;case Me:return q([H(t,{value:l(t.value,"@","@"+d)})],s);case pe:if(t.length)return at(t.props,function(c){switch(ot(c,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return q([H(t,{props:[l(c,/:(read-\w+)/,":"+ne+"$1")]})],s);case"::placeholder":return q([H(t,{props:[l(c,/:(plac\w+)/,":"+d+"input-$1")]}),H(t,{props:[l(c,/:(plac\w+)/,":"+ne+"$1")]}),H(t,{props:[l(c,/:(plac\w+)/,A+"input-$1")]})],s)}return""})}},Et=[$t],At=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(h){var v=h.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var s=t.stylisPlugins||Et,c={},i,o=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(h){for(var v=h.getAttribute("data-emotion").split(" "),y=1;y<v.length;y++)c[v[y]]=!0;o.push(h)});var a,p=[St,kt];{var f,b=[gt,vt(function(h){f.insert(h)})],w=xt(p.concat(s,b)),j=function(v){return q(bt(v),w)};a=function(v,y,g,S){f=g,j(v?v+"{"+y.styles+"}":y.styles),S&&(m.inserted[y.name]=!0)}}var m={key:n,sheet:new tt({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:c,registered:{},insert:a};return m.sheet.hydrate(o),m},Ie=P.createContext(typeof HTMLElement<"u"?At({key:"css"}):null);Ie.Provider;var Ot=function(){return P.useContext(Ie)};let Mt=0;function Lt(e){const{useTheme:t,cache:n}=e,{useCache:r}=Ue({cacheProvidedAtInception:n}),{useCssAndCx:s}=Ae({useCache:r});function c(o){const{name:a,uniqId:p=`${Mt++}`}=o??{},f=typeof a!="object"?a:Object.keys(a)[0];return function(b){const w=typeof b=="function"?b:()=>b;return function(m,h){const v=t();let{css:y,cx:g}=s();const S=r();let $=P.useMemo(()=>{const x={},k=typeof Proxy<"u"&&new Proxy({},{get:(O,T)=>(typeof T=="symbol"&&ue(!1),x[T]=`${S.key}-${p}${f!==void 0?`-${f}`:""}-${T}-ref`)}),u=w(v,m,k||{}),W=$e(V(u).map(O=>{const T=u[O];return T.label||(T.label=`${f!==void 0?`${f}-`:""}${O}`),[O,`${y(T)}${de(O,O in x)?` ${x[O]}`:""}`]}));return V(x).forEach(O=>{O in W||(W[O]=x[O])}),W},[S,y,g,v,G(m)]);{const x=h==null?void 0:h.props.classes;$=P.useMemo(()=>he($,x,g),[$,G(x),g])}{const x=Ze({classes:$,css:y,cx:g,name:f??"makeStyle no name",idOfUseStyles:p,muiStyleOverridesParams:h,theme:v});x.classes!==void 0&&($=x.classes),x.css!==void 0&&(y=x.css),x.cx!==void 0&&(g=x.cx)}return{classes:$,theme:v,css:y,cx:g}}}}function i(){const o=t(),{css:a,cx:p}=s();return{theme:o,css:a,cx:p}}return{makeStyles:c,useStyles:i}}const jt=P.createContext(void 0),{createUseCache:Ue}=(()=>{function e(){return P.useContext(jt)}function t(n){const{cacheProvidedAtInception:r}=n;function s(){var c;const i=Ot(),o=e(),a=(c=r??o)!==null&&c!==void 0?c:i;if(a===null)throw new Error(["In order to get SSR working with tss-react you need to explicitly provide an Emotion cache.","MUI users be aware: This is not an error strictly related to tss-react, with or without tss-react,","MUI needs an Emotion cache to be provided for SSR to work.","Here is the MUI documentation related to SSR setup: https://mui.com/material-ui/guides/server-rendering/","TSS provides helper that makes the process of setting up SSR easier: https://docs.tss-react.dev/ssr"].join(`
`));return a}return{useCache:s}}return{createUseCache:t}})(),Rt=!(typeof document=="object"&&typeof(document==null?void 0:document.getElementById)=="function")&&!(typeof jest<"u")&&!(typeof mocha<"u")&&!(typeof __vitest_worker__<"u");var Tt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n};function _t(e){const{useContext:t,usePlugin:n,cache:r}=e,{useCache:s}=Ue({cacheProvidedAtInception:r}),{useCssAndCx:c}=Ae({useCache:s});return{tss:te({useContext:t,useCache:s,useCssAndCx:c,usePlugin:n??(({classes:a,cx:p,css:f})=>({classes:a,cx:p,css:f})),name:void 0,doesUseNestedSelectors:!1})}}let Pt=0;const oe=[];function te(e){const{useContext:t,useCache:n,useCssAndCx:r,usePlugin:s,name:c,doesUseNestedSelectors:i}=e;return{withParams:()=>te(Object.assign({},e)),withName:o=>te(Object.assign(Object.assign({},e),{name:typeof o!="object"?o:Object.keys(o)[0]})),withNestedSelectors:()=>te(Object.assign(Object.assign({},e),{doesUseNestedSelectors:!0})),create:o=>{const a=`x${Pt++}`,p=typeof o=="function"?o:()=>o;return function(b){var w,j,m;const h=b??{},{classesOverrides:v}=h,y=Tt(h,["classesOverrides"]),g=t(),{css:S,cx:$}=r(),x=n();let k=P.useMemo(()=>{const W={},O=p(Object.assign(Object.assign(Object.assign({},b),g),i?{classes:typeof Proxy>"u"?{}:new Proxy({},{get:(_,I)=>{if(typeof I=="symbol"&&ue(!1),Rt){{let F=oe.find(ge=>ge.name===c&&ge.idOfUseStyles===a);F===void 0&&(F={name:c,idOfUseStyles:a,nestedSelectorRuleNames:new Set},oe.push(F)),F.nestedSelectorRuleNames.add(I)}if(oe.find(F=>F.name===c&&F.idOfUseStyles!==a&&F.nestedSelectorRuleNames.has(I))!==void 0)throw new Error([`tss-react: Duplicate nested selector "${I}" detected in ${c===void 0?`useStyles named "${c}"`:"anonymous useStyles function"}.`,"In SSR setups, this may lead to CSS class name collisions, causing nested selectors to target elements outside of the intended scope.",'Solution: Ensure each useStyles using nested selectors has a unique name. Use tss.withName("UniqueName").withNestedSelectors<...>()... to set a name.'].join(`
`))}return W[I]=`${x.key}-${a}${c!==void 0?`-${c}`:""}-${I}-ref`}})}:{})),T=$e(V(O).map(_=>{const I=O[_];return I.label||(I.label=`${c!==void 0?`${c}-`:""}${_}`),[_,`${S(I)}${de(_,_ in W)?` ${W[_]}`:""}`]}));return V(W).forEach(_=>{_ in T||(T[_]=W[_])}),T},[x,S,$,G(b),...Object.values(g)]);k=P.useMemo(()=>he(k,v,$),[k,G(v),$]);const u=s(Object.assign(Object.assign({classes:k,css:S,cx:$,idOfUseStyles:a,name:c},g),y));return Object.assign({classes:(w=u.classes)!==null&&w!==void 0?w:k,css:(j=u.css)!==null&&j!==void 0?j:S,cx:(m=u.cx)!==null&&m!==void 0?m:$},g)}}}}const{tss:It}=_t({useContext:function(){const{isDark:t}=De();return{isDark:t}}}),Wt=It.create({});export{_t as a,Lt as c,It as t,Wt as u};
