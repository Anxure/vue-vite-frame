import{d as D,a as f,L as q,F as V,x as X,M as P,Z as C,a2 as Y,am as Z,C as s,h as d,q as S,Y as $}from"./index.695c526f.js";import{u as G,f as J}from"./LeftOutlined.c74b7419.js";import{A as K,D as Q}from"./isSymbol.0751cb61.js";import{u as U}from"./_flatRest.eb7f8eaf.js";var ee=function(){return{prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:function(){return"default"}},src:String,srcset:String,icon:$.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}},ae=D({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:ee(),slots:["icon"],setup:function(e,A){var y=A.slots,g=A.attrs,m=f(!0),E=f(!1),h=f(1),p=f(null),x=f(null),O=q("avatar",e),_=O.prefixCls,R=U(),n=V(function(){return e.size==="default"?R.value:e.size}),T=G(),c=J(function(){if(X(e.size)==="object"){var r=K.find(function(t){return T.value[t]}),a=e.size[r];return a}}),W=function(a){return c.value?{width:"".concat(c.value,"px"),height:"".concat(c.value,"px"),lineHeight:"".concat(c.value,"px"),fontSize:"".concat(a?c.value/2:18,"px")}:{}},z=function(){if(!(!p.value||!x.value)){var a=p.value.offsetWidth,t=x.value.offsetWidth;if(a!==0&&t!==0){var l=e.gap,o=l===void 0?4:l;o*2<t&&(h.value=t-o*2<a?(t-o*2)/a:1)}}},k=function(){var a=e.loadError,t=a==null?void 0:a();t!==!1&&(m.value=!1)};return P(function(){return e.src},function(){C(function(){m.value=!0,h.value=1})}),P(function(){return e.gap},function(){C(function(){z()})}),Y(function(){C(function(){z(),E.value=!0})}),function(){var r,a,t=e.shape,l=e.src,o=e.alt,M=e.srcset,N=e.draggable,w=e.crossOrigin,u=Z(y,e,"icon"),i=_.value,B=(r={},s(r,"".concat(g.class),!!g.class),s(r,i,!0),s(r,"".concat(i,"-lg"),n.value==="large"),s(r,"".concat(i,"-sm"),n.value==="small"),s(r,"".concat(i,"-").concat(t),t),s(r,"".concat(i,"-image"),l&&m.value),s(r,"".concat(i,"-icon"),u),r),F=typeof n.value=="number"?{width:"".concat(n.value,"px"),height:"".concat(n.value,"px"),lineHeight:"".concat(n.value,"px"),fontSize:u?"".concat(n.value/2,"px"):"18px"}:{},I=(a=y.default)===null||a===void 0?void 0:a.call(y),v;if(l&&m.value)v=d("img",{draggable:N,src:l,srcset:M,onError:k,alt:o,crossorigin:w},null);else if(u)v=u;else if(E.value||h.value!==1){var b="scale(".concat(h.value,") translateX(-50%)"),H={msTransform:b,WebkitTransform:b,transform:b},L=typeof n.value=="number"?{lineHeight:"".concat(n.value,"px")}:{};v=d(Q,{onResize:z},{default:function(){return[d("span",{class:"".concat(i,"-string"),ref:p,style:S(S({},L),H)},[I])]}})}else v=d("span",{class:"".concat(i,"-string"),ref:p,style:{opacity:0}},[I]);return d("span",S(S({},g),{},{ref:x,class:B,style:[F,W(!!u),g.style]}),[v])}}});const le=ae;const ce="/vue-vite-frame/assets/avatar.fff7f996.png";export{le as A,ce as h};