import{B as rt,C as lt,x as _,D as Me,ao as xt,d as te,a as j,O as _t,z as st,m as D,y as ee,f,E as F,as as St,at as je,A as Ve,a5 as Ct,V as H,X as Ne,a9 as Pe,W as Re,q as se,P as Be,ak as Y,R as wt,U as Tt,aB as Pt,aC as $e,L as ye,S as Rt,ay as Bt,N as ct,G as It,au as Ce,aj as Et,ag as At,aD as Lt,aE as Dt,ah as Ot,aF as kt}from"./index-C9KpkboQ.js";import{e as Mt,f as Nt,h as Wt,j as Ht,P as zt,t as Gt,o as dt,_ as Kt,b as Xt,R as Ye,c as Ft}from"./collapseMotion-Yp2E69V-.js";import{a as Ue,i as We,w as xe,u as A,d as Oe}from"./compact-item-DkwYf7XX.js";import{K as Z,i as qe,u as Ze}from"./shallowequal-9U5DN-rv.js";import{c as jt,E as Vt,M as Yt,_ as Ut,d as qt,i as Zt}from"./LeftOutlined-B0isYnHm.js";import{c as ut,t as Jt,b as Qt,h as ea,f as ta}from"./hasIn-DH1zYR4Z.js";function aa(e,t,a,n){if(!Ue(e))return e;t=ut(t,e);for(var i=-1,r=t.length,o=r-1,c=e;c!=null&&++i<r;){var d=Jt(t[i]),u=a;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(i!=o){var v=c[d];u=n?n(v,d,c):void 0,u===void 0&&(u=Ue(v)?v:Mt(t[i+1])?[]:{})}Nt(c,d,u),c=c[d]}return e}function na(e,t,a){for(var n=-1,i=t.length,r={};++n<i;){var o=t[n],c=Qt(e,o);a(c,o)&&aa(r,ut(o,e),c)}return r}function oa(e,t){return na(e,t,function(a,n){return ea(e,n)})}var vt=ta(function(e,t){return e==null?{}:oa(e,t)});const ia=e=>{const{componentCls:t,popoverBg:a,popoverColor:n,width:i,fontWeightStrong:r,popoverPadding:o,boxShadowSecondary:c,colorTextHeading:d,borderRadiusLG:u,zIndexPopup:v,marginXS:$,colorBgElevated:s}=e;return[{[t]:_(_({},Me(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:v,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--antd-arrow-background-color":s,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:a,backgroundClip:"padding-box",borderRadius:u,boxShadow:c,padding:o},[`${t}-title`]:{minWidth:i,marginBottom:$,color:d,fontWeight:r},[`${t}-inner-content`]:{color:n}})},Ht(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${t}-pure`]:{position:"relative",maxWidth:"none",[`${t}-content`]:{display:"inline-block"}}}]},ra=e=>{const{componentCls:t}=e;return{[t]:zt.map(a=>{const n=e[`${a}-6`];return{[`&${t}-${a}`]:{"--antd-arrow-background-color":n,[`${t}-inner`]:{backgroundColor:n},[`${t}-arrow`]:{background:"transparent"}}}})}},la=e=>{const{componentCls:t,lineWidth:a,lineType:n,colorSplit:i,paddingSM:r,controlHeight:o,fontSize:c,lineHeight:d,padding:u}=e,v=o-Math.round(c*d),$=v/2,s=v/2-a,l=u;return{[t]:{[`${t}-inner`]:{padding:0},[`${t}-title`]:{margin:0,padding:`${$}px ${l}px ${s}px`,borderBottom:`${a}px ${n} ${i}`},[`${t}-inner-content`]:{padding:`${r}px ${l}px`}}}},sa=rt("Popover",e=>{const{colorBgElevated:t,colorText:a,wireframe:n}=e,i=lt(e,{popoverBg:t,popoverColor:a,popoverPadding:12});return[ia(i),ra(i),n&&la(i),Wt(i,"zoom-big")]},e=>{let{zIndexPopupBase:t}=e;return{zIndexPopup:t+30,width:177}}),ca=()=>_(_({},Xt()),{content:je(),title:je()}),da=te({compatConfig:{MODE:3},name:"APopover",inheritAttrs:!1,props:We(ca(),_(_({},Gt()),{trigger:"hover",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup(e,t){let{expose:a,slots:n,attrs:i}=t;const r=j();_t(e.visible===void 0),a({getPopupDomNode:()=>{var s,l;return(l=(s=r.value)===null||s===void 0?void 0:s.getPopupDomNode)===null||l===void 0?void 0:l.call(s)}});const{prefixCls:o,configProvider:c}=st("popover",e),[d,u]=sa(o),v=D(()=>c.getPrefixCls()),$=()=>{var s,l;const{title:m=Ve((s=n.title)===null||s===void 0?void 0:s.call(n)),content:x=Ve((l=n.content)===null||l===void 0?void 0:l.call(n))}=e,w=!!(Array.isArray(m)?m.length:m),C=!!(Array.isArray(x)?x.length:m);return!w&&!C?null:f(Ct,null,[w&&f("div",{class:`${o.value}-title`},[m]),f("div",{class:`${o.value}-inner-content`},[x])])};return()=>{const s=ee(e.overlayClassName,u.value);return d(f(Kt,F(F(F({},dt(e,["title","content"])),i),{},{prefixCls:o.value,ref:r,overlayClassName:s,transitionName:St(v.value,"zoom-big",e.transitionName),"data-popover-inject":!0}),{title:$,default:n.default}))}}}),Fa=xt(da);function ua(e){const t=H(),a=H(!1);function n(){for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];a.value||(xe.cancel(t.value),t.value=xe(()=>{e(...r)}))}return Ne(()=>{a.value=!0,xe.cancel(t.value)}),n}function va(e){const t=H([]),a=H(typeof e=="function"?e():e),n=ua(()=>{let r=a.value;t.value.forEach(o=>{r=o(r)}),t.value=[],a.value=r});function i(r){t.value.push(r),n()}return[a,i]}const pa=te({compatConfig:{MODE:3},name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup(e,t){let{expose:a,attrs:n}=t;const i=j();function r(d){var u;!((u=e.tab)===null||u===void 0)&&u.disabled||e.onClick(d)}a({domRef:i});function o(d){var u;d.preventDefault(),d.stopPropagation(),e.editable.onEdit("remove",{key:(u=e.tab)===null||u===void 0?void 0:u.key,event:d})}const c=D(()=>{var d;return e.editable&&e.closable!==!1&&!(!((d=e.tab)===null||d===void 0)&&d.disabled)});return()=>{var d;const{prefixCls:u,id:v,active:$,tab:{key:s,tab:l,disabled:m,closeIcon:x},renderWrapper:w,removeAriaLabel:C,editable:O,onFocus:G}=e,k=`${u}-tab`,p=f("div",{key:s,ref:i,class:ee(k,{[`${k}-with-remove`]:c.value,[`${k}-active`]:$,[`${k}-disabled`]:m}),style:n.style,onClick:r},[f("div",{role:"tab","aria-selected":$,id:v&&`${v}-tab-${s}`,class:`${k}-btn`,"aria-controls":v&&`${v}-panel-${s}`,"aria-disabled":m,tabindex:m?null:0,onClick:y=>{y.stopPropagation(),r(y)},onKeydown:y=>{[Z.SPACE,Z.ENTER].includes(y.which)&&(y.preventDefault(),r(y))},onFocus:G},[typeof l=="function"?l():l]),c.value&&f("button",{type:"button","aria-label":C||"remove",tabindex:0,class:`${k}-remove`,onClick:y=>{y.stopPropagation(),o(y)}},[(x==null?void 0:x())||((d=O.removeIcon)===null||d===void 0?void 0:d.call(O))||"×"])]);return w?w(p):p}}}),Je={width:0,height:0,left:0,top:0};function ba(e,t){const a=j(new Map);return Pe(()=>{var n,i;const r=new Map,o=e.value,c=t.value.get((n=o[0])===null||n===void 0?void 0:n.key)||Je,d=c.left+c.width;for(let u=0;u<o.length;u+=1){const{key:v}=o[u];let $=t.value.get(v);$||($=t.value.get((i=o[u-1])===null||i===void 0?void 0:i.key)||Je);const s=r.get(v)||_({},$);s.right=d-s.left-s.width,r.set(v,s)}a.value=new Map(r)}),a}const pt=te({compatConfig:{MODE:3},name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup(e,t){let{expose:a,attrs:n}=t;const i=j();return a({domRef:i}),()=>{const{prefixCls:r,editable:o,locale:c}=e;return!o||o.showAdd===!1?null:f("button",{ref:i,type:"button",class:`${r}-nav-add`,style:n.style,"aria-label":(c==null?void 0:c.addAriaLabel)||"Add tab",onClick:d=>{o.onEdit("add",{event:d})}},[o.addIcon?o.addIcon():"+"])}}}),fa={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:Be.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function},popupClassName:String,getPopupContainer:Y()},ga=te({compatConfig:{MODE:3},name:"OperationNode",inheritAttrs:!1,props:fa,emits:["tabClick"],slots:Object,setup(e,t){let{attrs:a,slots:n}=t;const[i,r]=A(!1),[o,c]=A(null),d=l=>{const m=e.tabs.filter(C=>!C.disabled);let x=m.findIndex(C=>C.key===o.value)||0;const w=m.length;for(let C=0;C<w;C+=1){x=(x+l+w)%w;const O=m[x];if(!O.disabled){c(O.key);return}}},u=l=>{const{which:m}=l;if(!i.value){[Z.DOWN,Z.SPACE,Z.ENTER].includes(m)&&(r(!0),l.preventDefault());return}switch(m){case Z.UP:d(-1),l.preventDefault();break;case Z.DOWN:d(1),l.preventDefault();break;case Z.ESC:r(!1);break;case Z.SPACE:case Z.ENTER:o.value!==null&&e.onTabClick(o.value,l);break}},v=D(()=>`${e.id}-more-popup`),$=D(()=>o.value!==null?`${v.value}-${o.value}`:null),s=(l,m)=>{l.preventDefault(),l.stopPropagation(),e.editable.onEdit("remove",{key:m,event:l})};return Re(()=>{se(o,()=>{const l=document.getElementById($.value);l&&l.scrollIntoView&&l.scrollIntoView(!1)},{flush:"post",immediate:!0})}),se(i,()=>{i.value||c(null)}),jt({}),()=>{var l;const{prefixCls:m,id:x,tabs:w,locale:C,mobile:O,moreIcon:G=((l=n.moreIcon)===null||l===void 0?void 0:l.call(n))||f(Vt,null,null),moreTransitionName:k,editable:p,tabBarGutter:y,rtl:b,onTabClick:S,popupClassName:I}=e;if(!w.length)return null;const P=`${m}-dropdown`,K=C==null?void 0:C.dropdownAriaLabel,re={[b?"marginRight":"marginLeft"]:y};w.length||(re.visibility="hidden",re.order=1);const ce=ee({[`${P}-rtl`]:b,[`${I}`]:!0}),pe=O?null:f(qt,{prefixCls:P,trigger:["hover"],visible:i.value,transitionName:k,onVisibleChange:r,overlayClassName:ce,mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:e.getPopupContainer},{overlay:()=>f(Yt,{onClick:R=>{let{key:J,domEvent:M}=R;S(J,M),r(!1)},id:v.value,tabindex:-1,role:"listbox","aria-activedescendant":$.value,selectedKeys:[o.value],"aria-label":K!==void 0?K:"expanded dropdown"},{default:()=>[w.map(R=>{var J,M;const U=p&&R.closable!==!1&&!R.disabled;return f(Ut,{key:R.key,id:`${v.value}-${R.key}`,role:"option","aria-controls":x&&`${x}-panel-${R.key}`,disabled:R.disabled},{default:()=>[f("span",null,[typeof R.tab=="function"?R.tab():R.tab]),U&&f("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:`${P}-menu-item-remove`,onClick:q=>{q.stopPropagation(),s(q,R.key)}},[((J=R.closeIcon)===null||J===void 0?void 0:J.call(R))||((M=p.removeIcon)===null||M===void 0?void 0:M.call(p))||"×"])]})})]}),default:()=>f("button",{type:"button",class:`${m}-nav-more`,style:re,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":v.value,id:`${x}-more`,"aria-expanded":i.value,onKeydown:u},[G])});return f("div",{class:ee(`${m}-nav-operations`,a.class),style:a.style},[pe,f(pt,{prefixCls:m,locale:C,editable:p},null)])}}}),bt=Symbol("tabsContextKey"),ma=e=>{wt(bt,e)},ft=()=>Tt(bt,{tabs:j([]),prefixCls:j()}),ha=.1,Qe=.01,we=20,et=Math.pow(.995,we);function $a(e,t){const[a,n]=A(),[i,r]=A(0),[o,c]=A(0),[d,u]=A(),v=j();function $(p){const{screenX:y,screenY:b}=p.touches[0];n({x:y,y:b}),clearInterval(v.value)}function s(p){if(!a.value)return;p.preventDefault();const{screenX:y,screenY:b}=p.touches[0],S=y-a.value.x,I=b-a.value.y;t(S,I),n({x:y,y:b});const P=Date.now();c(P-i.value),r(P),u({x:S,y:I})}function l(){if(!a.value)return;const p=d.value;if(n(null),u(null),p){const y=p.x/o.value,b=p.y/o.value,S=Math.abs(y),I=Math.abs(b);if(Math.max(S,I)<ha)return;let P=y,K=b;v.value=setInterval(()=>{if(Math.abs(P)<Qe&&Math.abs(K)<Qe){clearInterval(v.value);return}P*=et,K*=et,t(P*we,K*we)},we)}}const m=j();function x(p){const{deltaX:y,deltaY:b}=p;let S=0;const I=Math.abs(y),P=Math.abs(b);I===P?S=m.value==="x"?y:b:I>P?(S=y,m.value="x"):(S=b,m.value="y"),t(-S,-S)&&p.preventDefault()}const w=j({onTouchStart:$,onTouchMove:s,onTouchEnd:l,onWheel:x});function C(p){w.value.onTouchStart(p)}function O(p){w.value.onTouchMove(p)}function G(p){w.value.onTouchEnd(p)}function k(p){w.value.onWheel(p)}Re(()=>{var p,y;document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",G,{passive:!1}),(p=e.value)===null||p===void 0||p.addEventListener("touchstart",C,{passive:!1}),(y=e.value)===null||y===void 0||y.addEventListener("wheel",k,{passive:!1})}),Ne(()=>{document.removeEventListener("touchmove",O),document.removeEventListener("touchend",G)})}function tt(e,t){const a=j(e);function n(i){const r=typeof i=="function"?i(a.value):i;r!==a.value&&t(r,a.value),a.value=r}return[a,n]}const ya=()=>{const e=j(new Map),t=a=>n=>{e.value.set(a,n)};return Pt(()=>{e.value=new Map}),[t,e]},at={width:0,height:0,left:0,top:0,right:0},xa=()=>({id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:ye(),editable:ye(),moreIcon:Be.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:ye(),popupClassName:String,getPopupContainer:Y(),onTabClick:{type:Function},onTabScroll:{type:Function}}),nt=te({compatConfig:{MODE:3},name:"TabNavList",inheritAttrs:!1,props:xa(),slots:Object,emits:["tabClick","tabScroll"],setup(e,t){let{attrs:a,slots:n}=t;const{tabs:i,prefixCls:r}=ft(),o=H(),c=H(),d=H(),u=H(),[v,$]=ya(),s=D(()=>e.tabPosition==="top"||e.tabPosition==="bottom"),[l,m]=tt(0,(h,g)=>{s.value&&e.onTabScroll&&e.onTabScroll({direction:h>g?"left":"right"})}),[x,w]=tt(0,(h,g)=>{!s.value&&e.onTabScroll&&e.onTabScroll({direction:h>g?"top":"bottom"})}),[C,O]=A(0),[G,k]=A(0),[p,y]=A(null),[b,S]=A(null),[I,P]=A(0),[K,re]=A(0),[ce,pe]=va(new Map),R=ba(i,ce),J=D(()=>`${r.value}-nav-operations-hidden`),M=H(0),U=H(0);Pe(()=>{s.value?e.rtl?(M.value=0,U.value=Math.max(0,C.value-p.value)):(M.value=Math.min(0,p.value-C.value),U.value=0):(M.value=Math.min(0,b.value-G.value),U.value=0)});const q=h=>h<M.value?M.value:h>U.value?U.value:h,be=H(),[z,fe]=A(),ge=()=>{fe(Date.now())},me=()=>{clearTimeout(be.value)},_e=(h,g)=>{h(T=>q(T+g))};$a(o,(h,g)=>{if(s.value){if(p.value>=C.value)return!1;_e(m,h)}else{if(b.value>=G.value)return!1;_e(w,g)}return me(),ge(),!0}),se(z,()=>{me(),z.value&&(be.value=setTimeout(()=>{fe(0)},100))});const de=function(){let h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey;const g=R.value.get(h)||{width:0,height:0,left:0,right:0,top:0};if(s.value){let T=l.value;e.rtl?g.right<l.value?T=g.right:g.right+g.width>l.value+p.value&&(T=g.right+g.width-p.value):g.left<-l.value?T=-g.left:g.left+g.width>-l.value+p.value&&(T=-(g.left+g.width-p.value)),w(0),m(q(T))}else{let T=x.value;g.top<-x.value?T=-g.top:g.top+g.height>-x.value+b.value&&(T=-(g.top+g.height-b.value)),m(0),w(q(T))}},Ie=H(0),Ee=H(0);Pe(()=>{let h,g,T,B,N,W;const le=R.value;["top","bottom"].includes(e.tabPosition)?(h="width",B=p.value,N=C.value,W=I.value,g=e.rtl?"right":"left",T=Math.abs(l.value)):(h="height",B=b.value,N=C.value,W=K.value,g="top",T=-x.value);let X=B;N+W>B&&N<B&&(X=B-W);const Q=i.value;if(!Q.length)return[Ie.value,Ee.value]=[0,0];const ne=Q.length;let ue=ne;for(let L=0;L<ne;L+=1){const V=le.get(Q[L].key)||at;if(V[g]+V[h]>T+X){ue=L-1;break}}let E=0;for(let L=ne-1;L>=0;L-=1)if((le.get(Q[L].key)||at)[g]<T){E=L+1;break}return[Ie.value,Ee.value]=[E,ue]});const Ae=()=>{var h,g,T,B,N;const W=((h=o.value)===null||h===void 0?void 0:h.offsetWidth)||0,le=((g=o.value)===null||g===void 0?void 0:g.offsetHeight)||0,X=((T=u.value)===null||T===void 0?void 0:T.$el)||{},Q=X.offsetWidth||0,ne=X.offsetHeight||0;y(W),S(le),P(Q),re(ne);const ue=(((B=c.value)===null||B===void 0?void 0:B.offsetWidth)||0)-Q,E=(((N=c.value)===null||N===void 0?void 0:N.offsetHeight)||0)-ne;O(ue),k(E),pe(()=>{const L=new Map;return i.value.forEach(V=>{let{key:ve}=V;const oe=$.value.get(ve),ie=(oe==null?void 0:oe.$el)||oe;ie&&L.set(ve,{width:ie.offsetWidth,height:ie.offsetHeight,left:ie.offsetLeft,top:ie.offsetTop})}),L})},ze=D(()=>[...i.value.slice(0,Ie.value),...i.value.slice(Ee.value+1)]),[mt,ht]=A(),ae=D(()=>R.value.get(e.activeKey)),Ge=H(),Ke=()=>{xe.cancel(Ge.value)};se([ae,s,()=>e.rtl],()=>{const h={};ae.value&&(s.value?(e.rtl?h.right=$e(ae.value.right):h.left=$e(ae.value.left),h.width=$e(ae.value.width)):(h.top=$e(ae.value.top),h.height=$e(ae.value.height))),Ke(),Ge.value=xe(()=>{ht(h)})}),se([()=>e.activeKey,ae,R,s],()=>{de()},{flush:"post"}),se([()=>e.rtl,()=>e.tabBarGutter,()=>e.activeKey,()=>i.value],()=>{Ae()},{flush:"post"});const Le=h=>{let{position:g,prefixCls:T,extra:B}=h;if(!B)return null;const N=B==null?void 0:B({position:g});return N?f("div",{class:`${T}-extra-content`},[N]):null};return Ne(()=>{me(),Ke()}),()=>{const{id:h,animated:g,activeKey:T,rtl:B,editable:N,locale:W,tabPosition:le,tabBarGutter:X,onTabClick:Q}=e,{class:ne,style:ue}=a,E=r.value,L=!!ze.value.length,V=`${E}-nav-wrap`;let ve,oe,ie,Xe;s.value?B?(oe=l.value>0,ve=l.value+p.value<C.value):(ve=l.value<0,oe=-l.value+p.value<C.value):(ie=x.value<0,Xe=-x.value+b.value<G.value);const Se={};le==="top"||le==="bottom"?Se[B?"marginRight":"marginLeft"]=typeof X=="number"?`${X}px`:X:Se.marginTop=typeof X=="number"?`${X}px`:X;const Fe=i.value.map((De,$t)=>{const{key:he}=De;return f(pa,{id:h,prefixCls:E,key:he,tab:De,style:$t===0?void 0:Se,closable:De.closable,editable:N,active:he===T,removeAriaLabel:W==null?void 0:W.removeAriaLabel,ref:v(he),onClick:yt=>{Q(he,yt)},onFocus:()=>{de(he),ge(),o.value&&(B||(o.value.scrollLeft=0),o.value.scrollTop=0)}},n)});return f("div",{role:"tablist",class:ee(`${E}-nav`,ne),style:ue,onKeydown:()=>{ge()}},[f(Le,{position:"left",prefixCls:E,extra:n.leftExtra},null),f(Ye,{onResize:Ae},{default:()=>[f("div",{class:ee(V,{[`${V}-ping-left`]:ve,[`${V}-ping-right`]:oe,[`${V}-ping-top`]:ie,[`${V}-ping-bottom`]:Xe}),ref:o},[f(Ye,{onResize:Ae},{default:()=>[f("div",{ref:c,class:`${E}-nav-list`,style:{transform:`translate(${l.value}px, ${x.value}px)`,transition:z.value?"none":void 0}},[Fe,f(pt,{ref:u,prefixCls:E,locale:W,editable:N,style:_(_({},Fe.length===0?void 0:Se),{visibility:L?"hidden":null})},null),f("div",{class:ee(`${E}-ink-bar`,{[`${E}-ink-bar-animated`]:g.inkBar}),style:mt.value},null)])]})])]}),f(ga,F(F({},e),{},{removeAriaLabel:W==null?void 0:W.removeAriaLabel,ref:d,prefixCls:E,tabs:ze.value,class:!L&&J.value}),vt(n,["moreIcon"])),f(Le,{position:"right",prefixCls:E,extra:n.rightExtra},null),f(Le,{position:"right",prefixCls:E,extra:n.tabBarExtraContent},null)])}}}),_a=te({compatConfig:{MODE:3},name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup(e){const{tabs:t,prefixCls:a}=ft();return()=>{const{id:n,activeKey:i,animated:r,tabPosition:o,rtl:c,destroyInactiveTabPane:d}=e,u=r.tabPane,v=a.value,$=t.value.findIndex(s=>s.key===i);return f("div",{class:`${v}-content-holder`},[f("div",{class:[`${v}-content`,`${v}-content-${o}`,{[`${v}-content-animated`]:u}],style:$&&u?{[c?"marginRight":"marginLeft"]:`-${$}00%`}:null},[t.value.map(s=>Ft(s.node,{key:s.key,prefixCls:v,tabKey:s.key,id:n,animated:u,active:s.key===i,destroyInactiveTabPane:d}))])])}}});var Sa={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};const Ca=Sa;function ot(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable}))),n.forEach(function(i){wa(e,i,a[i])})}return e}function wa(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var He=function(t,a){var n=ot({},t,a.attrs);return f(Rt,ot({},n,{icon:Ca}),null)};He.displayName="PlusOutlined";He.inheritAttrs=!1;const Ta=He,Pa=e=>{const{componentCls:t,motionDurationSlow:a}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${a}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${a}`}}}}},[qe(e,"slide-up"),qe(e,"slide-down")]]},Ra=e=>{const{componentCls:t,tabsCardHorizontalPadding:a,tabsCardHeadBackground:n,tabsCardGutter:i,colorSplit:r}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:a,background:n,border:`${e.lineWidth}px ${e.lineType} ${r}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:e.colorPrimary,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:`${i}px`}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:`${i}px`}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},Ba=e=>{const{componentCls:t,tabsHoverColor:a,dropdownEdgeChildVerticalPadding:n}=e;return{[`${t}-dropdown`]:_(_({},Me(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${n}px 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":_(_({},Bt),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${e.paddingXXS}px ${e.paddingSM}px`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:a}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},Ia=e=>{const{componentCls:t,margin:a,colorSplit:n}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:`0 0 ${a}px 0`,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${e.lineWidth}px ${e.lineType} ${n}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:`${a}px`,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:e.controlHeight*1.25,[`${t}-tab`]:{padding:`${e.paddingXS}px ${e.paddingLG}px`,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:`${e.margin}px 0 0 0`},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:`-${e.lineWidth}px`},borderLeft:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:-e.lineWidth},borderRight:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},Ea=e=>{const{componentCls:t,padding:a}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXS}px 0`,fontSize:e.fontSize}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${a}px 0`,fontSize:e.fontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXXS*1.5}px ${a}px`}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${e.borderRadius}px ${e.borderRadius}px`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${e.borderRadius}px ${e.borderRadius}px 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadius}px ${e.borderRadius}px 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadius}px 0 0 ${e.borderRadius}px`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXS}px ${a}px ${e.paddingXXS*1.5}px`}}}}}},Aa=e=>{const{componentCls:t,tabsActiveColor:a,tabsHoverColor:n,iconCls:i,tabsHorizontalGutter:r}=e,o=`${t}-tab`;return{[o]:{position:"relative",display:"inline-flex",alignItems:"center",padding:`${e.paddingSM}px 0`,fontSize:`${e.fontSize}px`,background:"transparent",border:0,outline:"none",cursor:"pointer","&-btn, &-remove":_({"&:focus:not(:focus-visible), &:active":{color:a}},ct(e)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-e.marginXXS},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:n},[`&${o}-active ${o}-btn`]:{color:e.colorPrimary,textShadow:e.tabsActiveTextShadow},[`&${o}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${o}-disabled ${o}-btn, &${o}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${o}-remove ${i}`]:{margin:0},[i]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${o} + ${o}`]:{margin:{_skip_check_:!0,value:`0 0 0 ${r}px`}}}},La=e=>{const{componentCls:t,tabsHorizontalGutter:a,iconCls:n,tabsCardGutter:i}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:`0 0 0 ${a}px`},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[n]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:`${e.marginSM}px`}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:`${e.marginXS}px`},marginLeft:{_skip_check_:!0,value:`-${e.marginXXS}px`},[n]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:`${i}px`},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},Da=e=>{const{componentCls:t,tabsCardHorizontalPadding:a,tabsCardHeight:n,tabsCardGutter:i,tabsHoverColor:r,tabsActiveColor:o,colorSplit:c}=e;return{[t]:_(_(_(_({},Me(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:a,background:"transparent",border:0,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.controlHeightLG/8,transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:_({minWidth:`${n}px`,marginLeft:{_skip_check_:!0,value:`${i}px`},padding:`0 ${e.paddingXS}px`,background:"transparent",border:`${e.lineWidth}px ${e.lineType} ${c}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:r},"&:active, &:focus:not(:focus-visible)":{color:o}},ct(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.colorPrimary,pointerEvents:"none"}}),Aa(e)),{[`${t}-content`]:{position:"relative",display:"flex",width:"100%","&-animated":{transition:"margin 0.3s"}},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none",flex:"none",width:"100%"}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},Oa=rt("Tabs",e=>{const t=e.controlHeightLG,a=lt(e,{tabsHoverColor:e.colorPrimaryHover,tabsActiveColor:e.colorPrimaryActive,tabsCardHorizontalPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,tabsCardHeight:t,tabsCardGutter:e.marginXXS/2,tabsHorizontalGutter:32,tabsCardHeadBackground:e.colorFillAlter,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120});return[Ea(a),La(a),Ia(a),Ba(a),Ra(a),Da(a),Pa(a)]},e=>({zIndexPopup:e.zIndexPopupBase+50}));let it=0;const gt=()=>({prefixCls:{type:String},id:{type:String},popupClassName:String,getPopupContainer:Y(),activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:Ce(),animated:Et([Boolean,Object]),renderTabBar:Y(),tabBarGutter:{type:Number},tabBarStyle:ye(),tabPosition:Ce(),destroyInactiveTabPane:At(),hideAdd:Boolean,type:Ce(),size:Ce(),centered:Boolean,onEdit:Y(),onChange:Y(),onTabClick:Y(),onTabScroll:Y(),"onUpdate:activeKey":Y(),locale:ye(),onPrevClick:Y(),onNextClick:Y(),tabBarExtraContent:Be.any});function ka(e){return e.map(t=>{if(Lt(t)){const a=_({},t.props||{});for(const[s,l]of Object.entries(a))delete a[s],a[Dt(s)]=l;const n=t.children||{},i=t.key!==void 0?t.key:void 0,{tab:r=n.tab,disabled:o,forceRender:c,closable:d,animated:u,active:v,destroyInactiveTabPane:$}=a;return _(_({key:i},a),{node:t,closeIcon:n.closeIcon,tab:r,disabled:o===""||o,forceRender:c===""||c,closable:d===""||d,animated:u===""||u,active:v===""||v,destroyInactiveTabPane:$===""||$})}return null}).filter(t=>t)}const Ma=te({compatConfig:{MODE:3},name:"InternalTabs",inheritAttrs:!1,props:_(_({},We(gt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{tabs:Ot()}),slots:Object,setup(e,t){let{attrs:a,slots:n}=t;Oe(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),Oe(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),Oe(n.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");const{prefixCls:i,direction:r,size:o,rootPrefixCls:c,getPopupContainer:d}=st("tabs",e),[u,v]=Oa(i),$=D(()=>r.value==="rtl"),s=D(()=>{const{animated:b,tabPosition:S}=e;return b===!1||["left","right"].includes(S)?{inkBar:!1,tabPane:!1}:b===!0?{inkBar:!0,tabPane:!0}:_({inkBar:!0,tabPane:!1},typeof b=="object"?b:{})}),[l,m]=A(!1);Re(()=>{m(Zt())});const[x,w]=Ze(()=>{var b;return(b=e.tabs[0])===null||b===void 0?void 0:b.key},{value:D(()=>e.activeKey),defaultValue:e.defaultActiveKey}),[C,O]=A(()=>e.tabs.findIndex(b=>b.key===x.value));Pe(()=>{var b;let S=e.tabs.findIndex(I=>I.key===x.value);S===-1&&(S=Math.max(0,Math.min(C.value,e.tabs.length-1)),w((b=e.tabs[S])===null||b===void 0?void 0:b.key)),O(S)});const[G,k]=Ze(null,{value:D(()=>e.id)}),p=D(()=>l.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition);Re(()=>{e.id||(k(`rc-tabs-${it}`),it+=1)});const y=(b,S)=>{var I,P;(I=e.onTabClick)===null||I===void 0||I.call(e,b,S);const K=b!==x.value;w(b),K&&((P=e.onChange)===null||P===void 0||P.call(e,b))};return ma({tabs:D(()=>e.tabs),prefixCls:i}),()=>{const{id:b,type:S,tabBarGutter:I,tabBarStyle:P,locale:K,destroyInactiveTabPane:re,renderTabBar:ce=n.renderTabBar,onTabScroll:pe,hideAdd:R,centered:J}=e,M={id:G.value,activeKey:x.value,animated:s.value,tabPosition:p.value,rtl:$.value,mobile:l.value};let U;S==="editable-card"&&(U={onEdit:(fe,ge)=>{let{key:me,event:_e}=ge;var de;(de=e.onEdit)===null||de===void 0||de.call(e,fe==="add"?_e:me,fe)},removeIcon:()=>f(kt,null,null),addIcon:n.addIcon?n.addIcon:()=>f(Ta,null,null),showAdd:R!==!0});let q;const be=_(_({},M),{moreTransitionName:`${c.value}-slide-up`,editable:U,locale:K,tabBarGutter:I,onTabClick:y,onTabScroll:pe,style:P,getPopupContainer:d.value,popupClassName:ee(e.popupClassName,v.value)});ce?q=ce(_(_({},be),{DefaultTabBar:nt})):q=f(nt,be,vt(n,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));const z=i.value;return u(f("div",F(F({},a),{},{id:b,class:ee(z,`${z}-${p.value}`,{[v.value]:!0,[`${z}-${o.value}`]:o.value,[`${z}-card`]:["card","editable-card"].includes(S),[`${z}-editable-card`]:S==="editable-card",[`${z}-centered`]:J,[`${z}-mobile`]:l.value,[`${z}-editable`]:S==="editable-card",[`${z}-rtl`]:$.value},a.class)}),[q,f(_a,F(F({destroyInactiveTabPane:re},M),{},{animated:s.value}),null)]))}}}),Te=te({compatConfig:{MODE:3},name:"ATabs",inheritAttrs:!1,props:We(gt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:Object,setup(e,t){let{attrs:a,slots:n,emit:i}=t;const r=o=>{i("update:activeKey",o),i("change",o)};return()=>{var o;const c=ka(It((o=n.default)===null||o===void 0?void 0:o.call(n)));return f(Ma,F(F(F({},dt(e,["onUpdate:activeKey"])),a),{},{onChange:r,tabs:c}),n)}}}),Na=()=>({tab:Be.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}),ke=te({compatConfig:{MODE:3},name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:Na(),slots:Object,setup(e,t){let{attrs:a,slots:n}=t;const i=j(e.forceRender);se([()=>e.active,()=>e.destroyInactiveTabPane],()=>{e.active?i.value=!0:e.destroyInactiveTabPane&&(i.value=!1)},{immediate:!0});const r=D(()=>e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"});return()=>{var o;const{prefixCls:c,forceRender:d,id:u,active:v,tabKey:$}=e;return f("div",{id:u&&`${u}-panel-${$}`,role:"tabpanel",tabindex:v?0:-1,"aria-labelledby":u&&`${u}-tab-${$}`,"aria-hidden":!v,style:[r.value,a.style],class:[`${c}-tabpane`,v&&`${c}-tabpane-active`,a.class]},[(v||i.value||d)&&((o=n.default)===null||o===void 0?void 0:o.call(n))])}}});Te.TabPane=ke;Te.install=function(e){return e.component(Te.name,Te),e.component(ke.name,ke),e};export{Ta as P,Te as T,ke as _,Fa as a};