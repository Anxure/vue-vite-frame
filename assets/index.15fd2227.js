import{a as P,a1 as F,D as W,B as K,C as l,W as I,d as $,J as B,v as y,U as L,G as E,A as c,g as D,_}from"./index.0cbec4a4.js";import{R as O,A as G}from"./isSymbol.da7eedec.js";import{b as T}from"./debounce.18d3a9d6.js";const U=function(){var u=P(!1);return F(function(){u.value=T()}),u};var M=Symbol("rowContextKey"),V=function(r){W(M,r)},J=function(){return K(M,{gutter:l(function(){}),wrap:l(function(){}),supportFlexGap:l(function(){})})};const k=V;I("top","middle","bottom","stretch");I("start","end","center","space-around","space-between");var q=function(){return{align:String,justify:String,prefixCls:String,gutter:{type:[Number,Array,Object],default:0},wrap:{type:Boolean,default:void 0}}},H=$({compatConfig:{MODE:3},name:"ARow",props:q(),setup:function(r,N){var g=N.slots,v=B("row",r),d=v.prefixCls,h=v.direction,j,x=P({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0,xxxl:!0}),w=U();F(function(){j=O.subscribe(function(e){var t=r.gutter||0;(!Array.isArray(t)&&y(t)==="object"||Array.isArray(t)&&(y(t[0])==="object"||y(t[1])==="object"))&&(x.value=e)})}),L(function(){O.unsubscribe(j)});var S=l(function(){var e=[0,0],t=r.gutter,n=t===void 0?0:t,s=Array.isArray(n)?n:[n,0];return s.forEach(function(i,b){if(y(i)==="object")for(var a=0;a<G.length;a++){var p=G[a];if(x.value[p]&&i[p]!==void 0){e[b]=i[p];break}}else e[b]=i||0}),e});k({gutter:S,supportFlexGap:w,wrap:l(function(){return r.wrap})});var R=l(function(){var e;return E(d.value,(e={},c(e,"".concat(d.value,"-no-wrap"),r.wrap===!1),c(e,"".concat(d.value,"-").concat(r.justify),r.justify),c(e,"".concat(d.value,"-").concat(r.align),r.align),c(e,"".concat(d.value,"-rtl"),h.value==="rtl"),e))}),A=l(function(){var e=S.value,t={},n=e[0]>0?"".concat(e[0]/-2,"px"):void 0,s=e[1]>0?"".concat(e[1]/-2,"px"):void 0;return n&&(t.marginLeft=n,t.marginRight=n),w.value?t.rowGap="".concat(e[1],"px"):s&&(t.marginTop=s,t.marginBottom=s),t});return function(){var e;return D("div",{class:R.value,style:A.value},[(e=g.default)===null||e===void 0?void 0:e.call(g)])}}});const ee=H;function Q(u){return typeof u=="number"?"".concat(u," ").concat(u," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(u)?"0 0 ".concat(u):u}var X=function(){return{span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},xxxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]}};const te=$({compatConfig:{MODE:3},name:"ACol",props:X(),setup:function(r,N){var g=N.slots,v=J(),d=v.gutter,h=v.supportFlexGap,j=v.wrap,x=B("col",r),w=x.prefixCls,S=x.direction,R=l(function(){var e,t=r.span,n=r.order,s=r.offset,i=r.push,b=r.pull,a=w.value,p={};return["xs","sm","md","lg","xl","xxl","xxxl"].forEach(function(m){var f,o={},C=r[m];typeof C=="number"?o.span=C:y(C)==="object"&&(o=C||{}),p=_(_({},p),{},(f={},c(f,"".concat(a,"-").concat(m,"-").concat(o.span),o.span!==void 0),c(f,"".concat(a,"-").concat(m,"-order-").concat(o.order),o.order||o.order===0),c(f,"".concat(a,"-").concat(m,"-offset-").concat(o.offset),o.offset||o.offset===0),c(f,"".concat(a,"-").concat(m,"-push-").concat(o.push),o.push||o.push===0),c(f,"".concat(a,"-").concat(m,"-pull-").concat(o.pull),o.pull||o.pull===0),c(f,"".concat(a,"-rtl"),S.value==="rtl"),f))}),E(a,(e={},c(e,"".concat(a,"-").concat(t),t!==void 0),c(e,"".concat(a,"-order-").concat(n),n),c(e,"".concat(a,"-offset-").concat(s),s),c(e,"".concat(a,"-push-").concat(i),i),c(e,"".concat(a,"-pull-").concat(b),b),e),p)}),A=l(function(){var e=r.flex,t=d.value,n={};if(t&&t[0]>0){var s="".concat(t[0]/2,"px");n.paddingLeft=s,n.paddingRight=s}if(t&&t[1]>0&&!h.value){var i="".concat(t[1]/2,"px");n.paddingTop=i,n.paddingBottom=i}return e&&(n.flex=Q(e),j.value===!1&&!n.minWidth&&(n.minWidth=0)),n});return function(){var e;return D("div",{class:R.value,style:A.value},[(e=g.default)===null||e===void 0?void 0:e.call(g)])}}});export{te as C,ee as R};
