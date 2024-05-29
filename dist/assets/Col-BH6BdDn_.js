import{V,W as E,R as X,U as _,m as $,B as k,C as D,x as g,d as F,z as W,a as M,X as P,y as B,f as L,E as C,aj as N}from"./index-C9KpkboQ.js";import{C as H,r as j}from"./collapseMotion-Yp2E69V-.js";import{m as K}from"./styleChecker-hs9ODizI.js";const U=()=>{const e=V(!1);return E(()=>{e.value=K()}),e},T=Symbol("rowContextKey"),J=e=>{X(T,e)},q=()=>_(T,{gutter:$(()=>{}),wrap:$(()=>{}),supportFlexGap:$(()=>{})}),Q=J,Y=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around ":{justifyContent:"space-around"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},Z=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},z=(e,t)=>{const{componentCls:a,gridColumns:u}=e,o={};for(let s=u;s>=0;s--)s===0?(o[`${a}${t}-${s}`]={display:"none"},o[`${a}-push-${s}`]={insetInlineStart:"auto"},o[`${a}-pull-${s}`]={insetInlineEnd:"auto"},o[`${a}${t}-push-${s}`]={insetInlineStart:"auto"},o[`${a}${t}-pull-${s}`]={insetInlineEnd:"auto"},o[`${a}${t}-offset-${s}`]={marginInlineEnd:0},o[`${a}${t}-order-${s}`]={order:0}):(o[`${a}${t}-${s}`]={display:"block",flex:`0 0 ${s/u*100}%`,maxWidth:`${s/u*100}%`},o[`${a}${t}-push-${s}`]={insetInlineStart:`${s/u*100}%`},o[`${a}${t}-pull-${s}`]={insetInlineEnd:`${s/u*100}%`},o[`${a}${t}-offset-${s}`]={marginInlineStart:`${s/u*100}%`},o[`${a}${t}-order-${s}`]={order:s});return o},O=(e,t)=>z(e,t),ee=(e,t,a)=>({[`@media (min-width: ${t}px)`]:g({},O(e,a))}),te=k("Grid",e=>[Y(e)]),ne=k("Grid",e=>{const t=D(e,{gridColumns:24}),a={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[Z(t),O(t,""),O(t,"-xs"),Object.keys(a).map(u=>ee(t,a[u],u)).reduce((u,o)=>g(g({},u),o),{})]}),re=()=>({align:N([String,Object]),justify:N([String,Object]),prefixCls:String,gutter:N([Number,Array,Object],0),wrap:{type:Boolean,default:void 0}}),se=F({compatConfig:{MODE:3},name:"ARow",inheritAttrs:!1,props:re(),setup(e,t){let{slots:a,attrs:u}=t;const{prefixCls:o,direction:s}=W("row",e),[G,y]=te(o);let x;const b=H(),v=M({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),S=M({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),h=n=>$(()=>{if(typeof e[n]=="string")return e[n];if(typeof e[n]!="object")return"";for(let r=0;r<j.length;r++){const l=j[r];if(!S.value[l])continue;const i=e[n][l];if(i!==void 0)return i}return""}),f=h("align"),p=h("justify"),d=U();E(()=>{x=b.value.subscribe(n=>{S.value=n;const r=e.gutter||0;(!Array.isArray(r)&&typeof r=="object"||Array.isArray(r)&&(typeof r[0]=="object"||typeof r[1]=="object"))&&(v.value=n)})}),P(()=>{b.value.unsubscribe(x)});const m=$(()=>{const n=[void 0,void 0],{gutter:r=0}=e;return(Array.isArray(r)?r:[r,void 0]).forEach((i,A)=>{if(typeof i=="object")for(let R=0;R<j.length;R++){const I=j[R];if(v.value[I]&&i[I]!==void 0){n[A]=i[I];break}}else n[A]=i}),n});Q({gutter:m,supportFlexGap:d,wrap:$(()=>e.wrap)});const w=$(()=>B(o.value,{[`${o.value}-no-wrap`]:e.wrap===!1,[`${o.value}-${p.value}`]:p.value,[`${o.value}-${f.value}`]:f.value,[`${o.value}-rtl`]:s.value==="rtl"},u.class,y.value)),c=$(()=>{const n=m.value,r={},l=n[0]!=null&&n[0]>0?`${n[0]/-2}px`:void 0,i=n[1]!=null&&n[1]>0?`${n[1]/-2}px`:void 0;return l&&(r.marginLeft=l,r.marginRight=l),d.value?r.rowGap=`${n[1]}px`:i&&(r.marginTop=i,r.marginBottom=i),r});return()=>{var n;return G(L("div",C(C({},u),{},{class:w.value,style:g(g({},c.value),u.style)}),[(n=a.default)===null||n===void 0?void 0:n.call(a)]))}}}),ce=se;function oe(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const le=()=>({span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]}),ae=["xs","sm","md","lg","xl","xxl"],fe=F({compatConfig:{MODE:3},name:"ACol",inheritAttrs:!1,props:le(),setup(e,t){let{slots:a,attrs:u}=t;const{gutter:o,supportFlexGap:s,wrap:G}=q(),{prefixCls:y,direction:x}=W("col",e),[b,v]=ne(y),S=$(()=>{const{span:f,order:p,offset:d,push:m,pull:w}=e,c=y.value;let n={};return ae.forEach(r=>{let l={};const i=e[r];typeof i=="number"?l.span=i:typeof i=="object"&&(l=i||{}),n=g(g({},n),{[`${c}-${r}-${l.span}`]:l.span!==void 0,[`${c}-${r}-order-${l.order}`]:l.order||l.order===0,[`${c}-${r}-offset-${l.offset}`]:l.offset||l.offset===0,[`${c}-${r}-push-${l.push}`]:l.push||l.push===0,[`${c}-${r}-pull-${l.pull}`]:l.pull||l.pull===0,[`${c}-rtl`]:x.value==="rtl"})}),B(c,{[`${c}-${f}`]:f!==void 0,[`${c}-order-${p}`]:p,[`${c}-offset-${d}`]:d,[`${c}-push-${m}`]:m,[`${c}-pull-${w}`]:w},n,u.class,v.value)}),h=$(()=>{const{flex:f}=e,p=o.value,d={};if(p&&p[0]>0){const m=`${p[0]/2}px`;d.paddingLeft=m,d.paddingRight=m}if(p&&p[1]>0&&!s.value){const m=`${p[1]/2}px`;d.paddingTop=m,d.paddingBottom=m}return f&&(d.flex=oe(f),G.value===!1&&!d.minWidth&&(d.minWidth=0)),d});return()=>{var f;return b(L("div",C(C({},u),{},{class:S.value,style:[h.value,u.style]}),[(f=a.default)===null||f===void 0?void 0:f.call(a)]))}}});export{fe as C,ce as R};