import{d as G,J as st,a1 as ut,Y as ct,a3 as q,U as dt,a4 as mt,X as gt,g as E,P as Q,a5 as Et,a as z,C as F,v as yt,K as bt,A as g,R as pt,a6 as ht,a2 as Tt,_ as N,a7 as Ct,a8 as St}from"./index.785d3d63.js";import{w as Z,i as xt}from"./default.b6ba57f2.js";var V={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},H={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},w=[],L=[];function kt(){var a=document.createElement("div"),t=a.style;"AnimationEvent"in window||(delete V.animationstart.animation,delete H.animationend.animation),"TransitionEvent"in window||(delete V.transitionstart.transition,delete H.transitionend.transition);function i(r,b){for(var y in r)if(r.hasOwnProperty(y)){var d=r[y];for(var f in d)if(f in t){b.push(d[f]);break}}}i(V,w),i(H,L)}typeof window<"u"&&typeof document<"u"&&kt();function tt(a,t,i){a.addEventListener(t,i,!1)}function nt(a,t,i){a.removeEventListener(t,i,!1)}var At={startEvents:w,addStartEventListener:function(t,i){if(w.length===0){setTimeout(i,0);return}w.forEach(function(r){tt(t,r,i)})},removeStartEventListener:function(t,i){w.length!==0&&w.forEach(function(r){nt(t,r,i)})},endEvents:L,addEndEventListener:function(t,i){if(L.length===0){setTimeout(i,0);return}L.forEach(function(r){tt(t,r,i)})},removeEndEventListener:function(t,i){L.length!==0&&L.forEach(function(r){nt(t,r,i)})}};const W=At;var C;function et(a){return!a||a.offsetParent===null}function Nt(a){var t=(a||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}const wt=G({compatConfig:{MODE:3},name:"Wave",props:{insertExtraNode:Boolean,disabled:Boolean},setup:function(t,i){var r=i.slots,b=i.expose,y=mt(),d=st("",t),f=d.csp,p=d.prefixCls;b({csp:f});var B=null,M=null,x=null,h=!1,v=null,m=!1,T=function(n){if(!m){var e=q(y);!n||n.target!==e||h||A(e)}},I=function(n){!n||n.animationName!=="fadeEffect"||A(n.target)},k=function(){var n=t.insertExtraNode;return n?"".concat(p.value,"-click-animating"):"".concat(p.value,"-click-animating-without-extra-node")},D=function(n,e){var l=t.insertExtraNode,o=t.disabled;if(!(o||!n||et(n)||n.className.indexOf("-leave")>=0)){v=document.createElement("div"),v.className="".concat(p.value,"-click-animating-node");var s=k();if(n.removeAttribute(s),n.setAttribute(s,"true"),C=C||document.createElement("style"),e&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&Nt(e)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(e)&&e!=="transparent"){var S;(S=f.value)!==null&&S!==void 0&&S.nonce&&(C.nonce=f.value.nonce),v.style.borderColor=e,C.innerHTML=`
        [`.concat(p.value,"-click-animating-without-extra-node='true']::after, .").concat(p.value,`-click-animating-node {
          --antd-wave-shadow-color: `).concat(e,`;
        }`),document.body.contains(C)||document.body.appendChild(C)}l&&n.appendChild(v),W.addStartEventListener(n,T),W.addEndEventListener(n,I)}},A=function(n){if(!(!n||n===v||!(n instanceof Element))){var e=t.insertExtraNode,l=k();n.setAttribute(l,"false"),C&&(C.innerHTML=""),e&&v&&n.contains(v)&&n.removeChild(v),W.removeStartEventListener(n,T),W.removeEndEventListener(n,I)}},R=function(n){if(!(!n||!n.getAttribute||n.getAttribute("disabled")||n.className.indexOf("disabled")>=0)){var e=function(o){if(!(o.target.tagName==="INPUT"||et(o.target))){A(n);var s=getComputedStyle(n).getPropertyValue("border-top-color")||getComputedStyle(n).getPropertyValue("border-color")||getComputedStyle(n).getPropertyValue("background-color");M=setTimeout(function(){return D(n,s)},0),Z.cancel(x),h=!0,x=Z(function(){h=!1},10)}};return n.addEventListener("click",e,!0),{cancel:function(){n.removeEventListener("click",e,!0)}}}};return ut(function(){ct(function(){var u=q(y);u.nodeType===1&&(B=R(u))})}),dt(function(){B&&B.cancel(),clearTimeout(M),m=!0}),function(){var u;return(u=r.default)===null||u===void 0?void 0:u.call(r)[0]}}});function Pt(a){return a==="danger"?{danger:!0}:{type:a}}var Lt=function(){return{prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:function(){return!1}},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:gt.any,href:String,target:String,title:String,onClick:{type:Function},onMousedown:{type:Function}}};const Bt=Lt;var at=function(t){t&&(t.style.width="0px",t.style.opacity="0",t.style.transform="scale(0)")},it=function(t){ct(function(){t&&(t.style.width="".concat(t.scrollWidth,"px"),t.style.opacity="1",t.style.transform="scale(1)")})},rt=function(t){t&&t.style&&(t.style.width=null,t.style.opacity=null,t.style.transform=null)};const It=G({compatConfig:{MODE:3},name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup:function(t){return function(){var i=t.existIcon,r=t.prefixCls,b=t.loading;if(i)return E("span",{class:"".concat(r,"-loading-icon")},[E(Q,null,null)]);var y=!!b;return E(Et,{name:"".concat(r,"-loading-icon-motion"),onBeforeEnter:at,onEnter:it,onAfterEnter:rt,onBeforeLeave:it,onLeave:function(f){setTimeout(function(){at(f)})},onAfterLeave:rt},{default:function(){return[y?E("span",{class:"".concat(r,"-loading-icon")},[E(Q,null,null)]):null]}})}}});var ot=/^[\u4e00-\u9fa5]{2}$/,lt=ot.test.bind(ot);function j(a){return a==="text"||a==="link"}const _t=G({compatConfig:{MODE:3},name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:xt(Bt(),{type:"default"}),slots:["icon"],setup:function(t,i){var r=i.slots,b=i.attrs,y=i.emit,d=st("btn",t),f=d.prefixCls,p=d.autoInsertSpaceInButton,B=d.direction,M=d.size,x=z(null),h=z(void 0),v=!1,m=z(!1),T=z(!1),I=F(function(){return p.value!==!1}),k=F(function(){return yt(t.loading)==="object"&&t.loading.delay?t.loading.delay||!0:!!t.loading});bt(k,function(n){clearTimeout(h.value),typeof k.value=="number"?h.value=setTimeout(function(){m.value=n},k.value):m.value=n},{immediate:!0});var D=F(function(){var n,e=t.type,l=t.shape,o=l===void 0?"default":l,s=t.ghost,S=t.block,U=t.danger,c=f.value,O={large:"lg",small:"sm",middle:void 0},P=M.value,_=P&&O[P]||"";return n={},g(n,"".concat(c),!0),g(n,"".concat(c,"-").concat(e),e),g(n,"".concat(c,"-").concat(o),o!=="default"&&o),g(n,"".concat(c,"-").concat(_),_),g(n,"".concat(c,"-loading"),m.value),g(n,"".concat(c,"-background-ghost"),s&&!j(e)),g(n,"".concat(c,"-two-chinese-chars"),T.value&&I.value),g(n,"".concat(c,"-block"),S),g(n,"".concat(c,"-dangerous"),!!U),g(n,"".concat(c,"-rtl"),B.value==="rtl"),n}),A=function(){var e=x.value;if(!(!e||p.value===!1)){var l=e.textContent;v&&lt(l)?T.value||(T.value=!0):T.value&&(T.value=!1)}},R=function(e){if(m.value||t.disabled){e.preventDefault();return}y("click",e)},u=function(e,l){var o=l?" ":"";if(e.type===Ct){var s=e.children.trim();return lt(s)&&(s=s.split("").join(o)),E("span",null,[s])}return e};return pt(function(){St(!(t.ghost&&j(t.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),ut(A),ht(A),dt(function(){h.value&&clearTimeout(h.value)}),function(){var n,e,l=t.icon,o=l===void 0?(n=r.icon)===null||n===void 0?void 0:n.call(r):l,s=Tt((e=r.default)===null||e===void 0?void 0:e.call(r));v=s.length===1&&!o&&!j(t.type);var S=t.type,U=t.htmlType,c=t.disabled,O=t.href,P=t.title,_=t.target,ft=t.onMousedown,vt=m.value?"loading":o,$=N(N({},b),{},{title:P,disabled:c,class:[D.value,b.class,g({},"".concat(f.value,"-icon-only"),s.length===0&&!!vt)],onClick:R,onMousedown:ft});c||delete $.disabled;var J=o&&!m.value?o:E(It,{existIcon:!!o,prefixCls:f.value,loading:!!m.value},null),K=s.map(function(Y){return u(Y,v&&I.value)});if(O!==void 0)return E("a",N(N({},$),{},{href:O,target:_,ref:x}),[J,K]);var X=E("button",N(N({},$),{},{ref:x,type:U}),[J,K]);return j(S)?X:E(wt,{ref:"wave",disabled:!!m.value},{default:function(){return[X]}})}}});export{_t as B,wt as W,Bt as b,Pt as c};
