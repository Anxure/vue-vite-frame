import{a as I,U as Je,d as ce,C as Z,g as f,G as ye,A as W,R as Le,_ as A,F as B,a1 as De,K as me,X as Ke,D as Wt,B as Ft,aA as $t,aB as jt,q as dt,aC as ke,ac as zt,a2 as Ht,y as Gt,aD as Ut,a8 as Ye,J as qt,v as Vt,aE as Xt}from"./index.48f34db1.js";import{w as _e,i as Pt}from"./default.57ea6491.js";import{K as ie,u as U,a as ft}from"./shallowequal.640c6808.js";import{E as Yt,M as Zt,c as Jt,e as Qt,i as ea}from"./LeftOutlined.88a3cf4d.js";import{i as bt,K as ta,D as mt,C as aa,B as na}from"./isSymbol.1794dcce.js";import{f as It,t as ia,a as ra,c as la,h as oa,g as ua}from"./_flatRest.a86c6e06.js";function ca(n){var e=I(),t=I(!1);function r(){for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];t.value||(_e.cancel(e.value),e.value=_e(function(){n.apply(void 0,i)}))}return Je(function(){t.value=!0,_e.cancel(e.value)}),r}function sa(n){var e=I([]),t=I(typeof n=="function"?n():n),r=ca(function(){var i=t.value;e.value.forEach(function(u){i=u(i)}),e.value=[],t.value=i});function a(i){e.value.push(i),r()}return[t,a]}const va=ce({compatConfig:{MODE:3},name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup:function(e,t){var r=t.expose,a=t.attrs,i=I();function u(s){var v;(v=e.tab)!==null&&v!==void 0&&v.disabled||e.onClick(s)}r({domRef:i});function c(s){var v;s.preventDefault(),s.stopPropagation(),e.editable.onEdit("remove",{key:(v=e.tab)===null||v===void 0?void 0:v.key,event:s})}var l=Z(function(){var s;return e.editable&&e.closable!==!1&&!((s=e.tab)!==null&&s!==void 0&&s.disabled)});return function(){var s,v,b=e.prefixCls,g=e.id,M=e.active,E=e.tab,F=E.key,k=E.tab,z=E.disabled,x=E.closeIcon,d=e.renderWrapper,R=e.removeAriaLabel,H=e.editable,N=e.onFocus,_="".concat(b,"-tab"),L=f("div",{key:F,ref:i,class:ye(_,(s={},W(s,"".concat(_,"-with-remove"),l.value),W(s,"".concat(_,"-active"),M),W(s,"".concat(_,"-disabled"),z),s)),style:a.style,onClick:u},[f("div",{role:"tab","aria-selected":M,id:g&&"".concat(g,"-tab-").concat(F),class:"".concat(_,"-btn"),"aria-controls":g&&"".concat(g,"-panel-").concat(F),"aria-disabled":z,tabindex:z?null:0,onClick:function(D){D.stopPropagation(),u(D)},onKeydown:function(D){[ie.SPACE,ie.ENTER].includes(D.which)&&(D.preventDefault(),u(D))},onFocus:N},[typeof k=="function"?k():k]),l.value&&f("button",{type:"button","aria-label":R||"remove",tabindex:0,class:"".concat(_,"-remove"),onClick:function(D){D.stopPropagation(),c(D)}},[(x==null?void 0:x())||((v=H.removeIcon)===null||v===void 0?void 0:v.call(H))||"\xD7"])]);return d?d(L):L}}});var yt={width:0,height:0,left:0,top:0};function da(n,e){var t=I(new Map);return Le(function(){for(var r,a=new Map,i=n.value,u=e.value.get((r=i[0])===null||r===void 0?void 0:r.key)||yt,c=u.left+u.width,l=0;l<i.length;l+=1){var s=i[l].key,v=e.value.get(s);if(!v){var b;v=e.value.get((b=i[l-1])===null||b===void 0?void 0:b.key)||yt}var g=a.get(s)||A({},v);g.right=c-g.left-g.width,a.set(s,g)}t.value=new Map(a)}),t}const Et=ce({compatConfig:{MODE:3},name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup:function(e,t){var r=t.expose,a=t.attrs,i=I();return r({domRef:i}),function(){var u=e.prefixCls,c=e.editable,l=e.locale;return!c||c.showAdd===!1?null:f("button",{ref:i,type:"button",class:"".concat(u,"-nav-add"),style:a.style,"aria-label":(l==null?void 0:l.addAriaLabel)||"Add tab",onClick:function(v){c.onEdit("add",{event:v})}},[c.addIcon?c.addIcon():"+"])}}});var fa={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:Ke.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function}};const ba=ce({compatConfig:{MODE:3},name:"OperationNode",inheritAttrs:!1,props:fa,emits:["tabClick"],slots:["moreIcon"],setup:function(e,t){var r=t.attrs,a=t.slots,i=U(!1),u=B(i,2),c=u[0],l=u[1],s=U(null),v=B(s,2),b=v[0],g=v[1],M=function(d){for(var R=e.tabs.filter(function(q){return!q.disabled}),H=R.findIndex(function(q){return q.key===b.value})||0,N=R.length,_=0;_<N;_+=1){H=(H+d+N)%N;var L=R[H];if(!L.disabled){g(L.key);return}}},E=function(d){var R=d.which;if(!c.value){[ie.DOWN,ie.SPACE,ie.ENTER].includes(R)&&(l(!0),d.preventDefault());return}switch(R){case ie.UP:M(-1),d.preventDefault();break;case ie.DOWN:M(1),d.preventDefault();break;case ie.ESC:l(!1);break;case ie.SPACE:case ie.ENTER:b.value!==null&&e.onTabClick(b.value,d);break}},F=Z(function(){return"".concat(e.id,"-more-popup")}),k=Z(function(){return b.value!==null?"".concat(F.value,"-").concat(b.value):null}),z=function(d,R){d.preventDefault(),d.stopPropagation(),e.editable.onEdit("remove",{key:R,event:d})};return De(function(){me(b,function(){var x=document.getElementById(k.value);x&&x.scrollIntoView&&x.scrollIntoView(!1)},{flush:"post",immediate:!0})}),me(c,function(){c.value||g(null)}),function(){var x,d=e.prefixCls,R=e.id,H=e.tabs,N=e.locale,_=e.mobile,L=e.moreIcon,q=L===void 0?((x=a.moreIcon)===null||x===void 0?void 0:x.call(a))||f(Yt,null,null):L,D=e.moreTransitionName,j=e.editable,se=e.tabBarGutter,p=e.rtl,o=e.onTabClick,y="".concat(d,"-dropdown"),T=N==null?void 0:N.dropdownAriaLabel,K=W({},p?"marginRight":"marginLeft",se);H.length||(K.visibility="hidden",K.order=1);var $=ye(W({},"".concat(y,"-rtl"),p)),C=_?null:f(Qt,{prefixCls:y,trigger:["hover"],visible:c.value,transitionName:D,onVisibleChange:l,overlayClassName:$,mouseEnterDelay:.1,mouseLeaveDelay:.1},{overlay:function(){return f(Zt,{onClick:function(w){var V=w.key,re=w.domEvent;o(V,re),l(!1)},id:F.value,tabindex:-1,role:"listbox","aria-activedescendant":k.value,selectedKeys:[b.value],"aria-label":T!==void 0?T:"expanded dropdown"},{default:function(){return[H.map(function(w){var V,re,xe=j&&w.closable!==!1&&!w.disabled;return f(Jt,{key:w.key,id:"".concat(F.value,"-").concat(w.key),role:"option","aria-controls":R&&"".concat(R,"-panel-").concat(w.key),disabled:w.disabled},{default:function(){return[f("span",null,[typeof w.tab=="function"?w.tab():w.tab]),xe&&f("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:"".concat(y,"-menu-item-remove"),onClick:function(ve){ve.stopPropagation(),z(ve,w.key)}},[((V=w.closeIcon)===null||V===void 0?void 0:V.call(w))||((re=j.removeIcon)===null||re===void 0?void 0:re.call(j))||"\xD7"])]}})})]}})},default:function(){return f("button",{type:"button",class:"".concat(d,"-nav-more"),style:K,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":F.value,id:"".concat(R,"-more"),"aria-expanded":c.value,onKeydown:E},[q])}});return f("div",{class:ye("".concat(d,"-nav-operations"),r.class),style:r.style},[C,f(Et,{prefixCls:d,locale:N,editable:j},null)])}}});var kt=Symbol("tabsContextKey"),_t=function(e){Wt(kt,e)},Bt=function(){return Ft(kt,{tabs:I([]),prefixCls:I()})};ce({compatConfig:{MODE:3},name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup:function(e,t){var r=t.slots;return _t($t(e)),function(){var a;return(a=r.default)===null||a===void 0?void 0:a.call(r)}}});var ma=.1,ht=.01,Me=20,gt=Math.pow(.995,Me);function ya(n,e){var t=U(),r=B(t,2),a=r[0],i=r[1],u=U(0),c=B(u,2),l=c[0],s=c[1],v=U(0),b=B(v,2),g=b[0],M=b[1],E=U(),F=B(E,2),k=F[0],z=F[1],x=I();function d(p){var o=p.touches[0],y=o.screenX,T=o.screenY;i({x:y,y:T}),clearInterval(x.value)}function R(p){if(!!a.value){p.preventDefault();var o=p.touches[0],y=o.screenX,T=o.screenY,K=y-a.value.x,$=T-a.value.y;e(K,$),i({x:y,y:T});var C=Date.now();M(C-l.value),s(C),z({x:K,y:$})}}function H(){if(!!a.value){var p=k.value;if(i(null),z(null),p){var o=p.x/g.value,y=p.y/g.value,T=Math.abs(o),K=Math.abs(y);if(Math.max(T,K)<ma)return;var $=o,C=y;x.value=setInterval(function(){if(Math.abs($)<ht&&Math.abs(C)<ht){clearInterval(x.value);return}$*=gt,C*=gt,e($*Me,C*Me)},Me)}}}var N=I();function _(p){var o=p.deltaX,y=p.deltaY,T=0,K=Math.abs(o),$=Math.abs(y);K===$?T=N.value==="x"?o:y:K>$?(T=o,N.value="x"):(T=y,N.value="y"),e(-T,-T)&&p.preventDefault()}var L=I({onTouchStart:d,onTouchMove:R,onTouchEnd:H,onWheel:_});function q(p){L.value.onTouchStart(p)}function D(p){L.value.onTouchMove(p)}function j(p){L.value.onTouchEnd(p)}function se(p){L.value.onWheel(p)}De(function(){var p,o;document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",j,{passive:!1}),(p=n.value)===null||p===void 0||p.addEventListener("touchstart",q,{passive:!1}),(o=n.value)===null||o===void 0||o.addEventListener("wheel",se,{passive:!1})}),Je(function(){document.removeEventListener("touchmove",D),document.removeEventListener("touchend",j)})}function pt(n,e){var t=I(n);function r(a){var i=typeof a=="function"?a(t.value):a;i!==t.value&&e(i,t.value),t.value=i}return[t,r]}var ha=function(){var e=I(new Map),t=function(a){return function(i){e.value.set(a,i)}};return jt(function(){e.value=new Map}),[t,e]};const ga=ha;function pa(n,e,t,r){if(!bt(n))return n;e=It(e,n);for(var a=-1,i=e.length,u=i-1,c=n;c!=null&&++a<i;){var l=ia(e[a]),s=t;if(l==="__proto__"||l==="constructor"||l==="prototype")return n;if(a!=u){var v=c[l];s=r?r(v,l,c):void 0,s===void 0&&(s=bt(v)?v:ta(e[a+1])?[]:{})}ra(c,l,s),c=c[l]}return n}function Sa(n,e,t){for(var r=-1,a=e.length,i={};++r<a;){var u=e[r],c=la(n,u);t(c,u)&&pa(i,It(u,n),c)}return i}function xa(n,e){return Sa(n,e,function(t,r){return oa(n,r)})}var Ta=ua(function(n,e){return n==null?{}:xa(n,e)});const Rt=Ta;var St={width:0,height:0,left:0,top:0,right:0},Ca=function(){return{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:{type:Object,default:void 0},editable:{type:Object},moreIcon:Ke.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:{type:Object,default:void 0},onTabClick:{type:Function},onTabScroll:{type:Function}}};const xt=ce({compatConfig:{MODE:3},name:"TabNavList",inheritAttrs:!1,props:Ca(),slots:["moreIcon","leftExtra","rightExtra","tabBarExtraContent"],emits:["tabClick","tabScroll"],setup:function(e,t){var r=t.attrs,a=t.slots,i=Bt(),u=i.tabs,c=i.prefixCls,l=I(),s=I(),v=I(),b=I(),g=ga(),M=B(g,2),E=M[0],F=M[1],k=Z(function(){return e.tabPosition==="top"||e.tabPosition==="bottom"}),z=pt(0,function(h,S){k.value&&e.onTabScroll&&e.onTabScroll({direction:h>S?"left":"right"})}),x=B(z,2),d=x[0],R=x[1],H=pt(0,function(h,S){!k.value&&e.onTabScroll&&e.onTabScroll({direction:h>S?"top":"bottom"})}),N=B(H,2),_=N[0],L=N[1],q=U(0),D=B(q,2),j=D[0],se=D[1],p=U(0),o=B(p,2),y=o[0],T=o[1],K=U(null),$=B(K,2),C=$[0],Se=$[1],he=U(null),w=B(he,2),V=w[0],re=w[1],xe=U(0),ge=B(xe,2),Te=ge[0],ve=ge[1],Be=U(0),Q=B(Be,2),We=Q[0],Re=Q[1],Ae=sa(new Map),pe=B(Ae,2),Fe=pe[0],$e=pe[1],we=da(u,Fe),wt=Z(function(){return"".concat(c.value,"-nav-operations-hidden")}),Ce=I(0),Pe=I(0);Le(function(){k.value?e.rtl?(Ce.value=0,Pe.value=Math.max(0,j.value-C.value)):(Ce.value=Math.min(0,C.value-j.value),Pe.value=0):(Ce.value=Math.min(0,V.value-y.value),Pe.value=0)});var je=function(S){return S<Ce.value?Ce.value:S>Pe.value?Pe.value:S},et=I(),Ot=U(),tt=B(Ot,2),ze=tt[0],at=tt[1],He=function(){at(Date.now())},Ge=function(){clearTimeout(et.value)},nt=function(S,m){S(function(O){var P=je(O+m);return P})};ya(l,function(h,S){if(k.value){if(C.value>=j.value)return!1;nt(R,h)}else{if(V.value>=y.value)return!1;nt(L,S)}return Ge(),He(),!0}),me(ze,function(){Ge(),ze.value&&(et.value=setTimeout(function(){at(0)},100))});var it=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey,m=we.value.get(S)||{width:0,height:0,left:0,right:0,top:0};if(k.value){var O=d.value;e.rtl?m.right<d.value?O=m.right:m.right+m.width>d.value+C.value&&(O=m.right+m.width-C.value):m.left<-d.value?O=-m.left:m.left+m.width>-d.value+C.value&&(O=-(m.left+m.width-C.value)),L(0),R(je(O))}else{var P=_.value;m.top<-_.value?P=-m.top:m.top+m.height>-_.value+V.value&&(P=-(m.top+m.height-V.value)),R(0),L(je(P))}},Ue=I(0),qe=I(0);Le(function(){var h,S,m,O,P,X,Y,fe=we.value;["top","bottom"].includes(e.tabPosition)?(S="width",P=C.value,X=j.value,Y=Te.value,m=e.rtl?"right":"left",O=Math.abs(d.value)):(S="height",P=V.value,X=j.value,Y=We.value,m="top",O=-_.value);var ee=P;X+Y>P&&X<P&&(ee=P-Y);var le=u.value;if(!le.length){var oe;return oe=[0,0],Ue.value=oe[0],qe.value=oe[1],oe}for(var be=le.length,G=be,te=0;te<be;te+=1){var ae=fe.get(le[te].key)||St;if(ae[m]+ae[S]>O+ee){G=te-1;break}}for(var ue=0,J=be-1;J>=0;J-=1){var ne=fe.get(le[J].key)||St;if(ne[m]<O){ue=J+1;break}}return h=[ue,G],Ue.value=h[0],qe.value=h[1],h});var Ve=function(){var S,m,O,P,X,Y=((S=l.value)===null||S===void 0?void 0:S.offsetWidth)||0,fe=((m=l.value)===null||m===void 0?void 0:m.offsetHeight)||0,ee=((O=b.value)===null||O===void 0?void 0:O.$el)||{},le=ee.offsetWidth||0,oe=ee.offsetHeight||0;Se(Y),re(fe),ve(le),Re(oe);var be=(((P=s.value)===null||P===void 0?void 0:P.offsetWidth)||0)-le,G=(((X=s.value)===null||X===void 0?void 0:X.offsetHeight)||0)-oe;se(be),T(G),$e(function(){var te=new Map;return u.value.forEach(function(ae){var ue=ae.key,J=F.value.get(ue),ne=(J==null?void 0:J.$el)||J;ne&&te.set(ue,{width:ne.offsetWidth,height:ne.offsetHeight,left:ne.offsetLeft,top:ne.offsetTop})}),te})},rt=Z(function(){return[].concat(dt(u.value.slice(0,Ue.value)),dt(u.value.slice(qe.value+1)))}),Mt=U(),lt=B(Mt,2),Nt=lt[0],Lt=lt[1],de=Z(function(){return we.value.get(e.activeKey)}),ot=I(),ut=function(){_e.cancel(ot.value)};me([de,k,function(){return e.rtl}],function(){var h={};de.value&&(k.value?(e.rtl?h.right=ke(de.value.right):h.left=ke(de.value.left),h.width=ke(de.value.width)):(h.top=ke(de.value.top),h.height=ke(de.value.height))),ut(),ot.value=_e(function(){Lt(h)})}),me([function(){return e.activeKey},de,we,k],function(){it()},{flush:"post"}),me([function(){return e.rtl},function(){return e.tabBarGutter},function(){return e.activeKey},function(){return u.value}],function(){Ve()},{flush:"post"});var Xe=function(S){var m=S.position,O=S.prefixCls,P=S.extra;if(!P)return null;var X=P==null?void 0:P({position:m});return X?f("div",{class:"".concat(O,"-extra-content")},[X]):null};return Je(function(){Ge(),ut()}),function(){var h,S=e.id,m=e.animated,O=e.activeKey,P=e.rtl,X=e.editable,Y=e.locale,fe=e.tabPosition,ee=e.tabBarGutter,le=e.onTabClick,oe=r.class,be=r.style,G=c.value,te=!!rt.value.length,ae="".concat(G,"-nav-wrap"),ue,J,ne,ct;k.value?P?(J=d.value>0,ue=d.value+C.value<j.value):(ue=d.value<0,J=-d.value+C.value<j.value):(ne=_.value<0,ct=-_.value+V.value<y.value);var Oe={};fe==="top"||fe==="bottom"?Oe[P?"marginRight":"marginLeft"]=typeof ee=="number"?"".concat(ee,"px"):ee:Oe.marginTop=typeof ee=="number"?"".concat(ee,"px"):ee;var st=u.value.map(function(Ie,vt){var Ee=Ie.key;return f(va,{id:S,prefixCls:G,key:Ee,tab:Ie,style:vt===0?void 0:Oe,closable:Ie.closable,editable:X,active:Ee===O,removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:E(Ee),onClick:function(Kt){le(Ee,Kt)},onFocus:function(){it(Ee),He(),l.value&&(P||(l.value.scrollLeft=0),l.value.scrollTop=0)}},a)});return f("div",{role:"tablist",class:ye("".concat(G,"-nav"),oe),style:be,onKeydown:function(){He()}},[f(Xe,{position:"left",prefixCls:G,extra:a.leftExtra},null),f(mt,{onResize:Ve},{default:function(){return[f("div",{class:ye(ae,(h={},W(h,"".concat(ae,"-ping-left"),ue),W(h,"".concat(ae,"-ping-right"),J),W(h,"".concat(ae,"-ping-top"),ne),W(h,"".concat(ae,"-ping-bottom"),ct),h)),ref:l},[f(mt,{onResize:Ve},{default:function(){return[f("div",{ref:s,class:"".concat(G,"-nav-list"),style:{transform:"translate(".concat(d.value,"px, ").concat(_.value,"px)"),transition:ze.value?"none":void 0}},[st,f(Et,{ref:b,prefixCls:G,locale:Y,editable:X,style:A(A({},st.length===0?void 0:Oe),{},{visibility:te?"hidden":null})},null),f("div",{class:ye("".concat(G,"-ink-bar"),W({},"".concat(G,"-ink-bar-animated"),m.inkBar)),style:Nt.value},null)])]}})])]}}),f(ba,A(A({},e),{},{removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:v,prefixCls:G,tabs:rt.value,class:!te&&wt.value}),Rt(a,["moreIcon"])),f(Xe,{position:"right",prefixCls:G,extra:a.rightExtra},null),f(Xe,{position:"right",prefixCls:G,extra:a.tabBarExtraContent},null)])}}}),Pa=ce({compatConfig:{MODE:3},name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup:function(e){var t=Bt(),r=t.tabs,a=t.prefixCls;return function(){var i=e.id,u=e.activeKey,c=e.animated,l=e.tabPosition,s=e.rtl,v=e.destroyInactiveTabPane,b=c.tabPane,g=a.value,M=r.value.findIndex(function(E){return E.key===u});return f("div",{class:"".concat(g,"-content-holder")},[f("div",{class:["".concat(g,"-content"),"".concat(g,"-content-").concat(l),W({},"".concat(g,"-content-animated"),b)],style:M&&b?W({},s?"marginRight":"marginLeft","-".concat(M,"00%")):null},[r.value.map(function(E){return aa(E.node,{key:E.key,prefixCls:g,tabKey:E.key,id:i,animated:b,active:E.key===u,destroyInactiveTabPane:v})})])])}}});var Ia={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};const Ea=Ia;function Tt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){ka(n,a,t[a])})}return n}function ka(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Qe=function(e,t){var r=Tt({},e,t.attrs);return f(zt,Tt({},r,{icon:Ea}),null)};Qe.displayName="PlusOutlined";Qe.inheritAttrs=!1;const _a=Qe;var Ct=0,At=function(){return{prefixCls:{type:String},id:{type:String},activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:{type:String},animated:{type:[Boolean,Object]},renderTabBar:{type:Function},tabBarGutter:{type:Number},tabBarStyle:{type:Object},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean},hideAdd:Boolean,type:{type:String},size:{type:String},centered:Boolean,onEdit:{type:Function},onChange:{type:Function},onTabClick:{type:Function},onTabScroll:{type:Function},"onUpdate:activeKey":{type:Function},locale:{type:Object,default:void 0},onPrevClick:Function,onNextClick:Function,tabBarExtraContent:Ke.any}};function Ba(n){return n.map(function(e){if(Gt(e)){for(var t=A({},e.props||{}),r=0,a=Object.entries(t);r<a.length;r++){var i=B(a[r],2),u=i[0],c=i[1];delete t[u],t[Ut(u)]=c}var l=e.children||{},s=e.key!==void 0?e.key:void 0,v=t.tab,b=v===void 0?l.tab:v,g=t.disabled,M=t.forceRender,E=t.closable,F=t.animated,k=t.active,z=t.destroyInactiveTabPane;return A(A({key:s},t),{},{node:e,closeIcon:l.closeIcon,tab:b,disabled:g===""||g,forceRender:M===""||M,closable:E===""||E,animated:F===""||F,active:k===""||k,destroyInactiveTabPane:z===""||z})}return null}).filter(function(e){return e})}var Ra=ce({compatConfig:{MODE:3},name:"InternalTabs",inheritAttrs:!1,props:A(A({},Pt(At(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{},{tabs:{type:Array}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var r=t.attrs,a=t.slots;Ye(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),Ye(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),Ye(a.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");var i=qt("tabs",e),u=i.prefixCls,c=i.direction,l=i.size,s=i.rootPrefixCls,v=Z(function(){return c.value==="rtl"}),b=Z(function(){var o=e.animated,y=e.tabPosition;return o===!1||["left","right"].includes(y)?{inkBar:!1,tabPane:!1}:o===!0?{inkBar:!0,tabPane:!0}:A({inkBar:!0,tabPane:!1},Vt(o)==="object"?o:{})}),g=U(!1),M=B(g,2),E=M[0],F=M[1];De(function(){F(ea())});var k=ft(function(){var o;return(o=e.tabs[0])===null||o===void 0?void 0:o.key},{value:Z(function(){return e.activeKey}),defaultValue:e.defaultActiveKey}),z=B(k,2),x=z[0],d=z[1],R=U(function(){return e.tabs.findIndex(function(o){return o.key===x.value})}),H=B(R,2),N=H[0],_=H[1];Le(function(){var o=e.tabs.findIndex(function(T){return T.key===x.value});if(o===-1){var y;o=Math.max(0,Math.min(N.value,e.tabs.length-1)),d((y=e.tabs[o])===null||y===void 0?void 0:y.key)}_(o)});var L=ft(null,{value:Z(function(){return e.id})}),q=B(L,2),D=q[0],j=q[1],se=Z(function(){return E.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition});De(function(){e.id||(j("rc-tabs-".concat(Ct)),Ct+=1)});var p=function(y,T){var K;(K=e.onTabClick)===null||K===void 0||K.call(e,y,T);var $=y!==x.value;if(d(y),$){var C;(C=e.onChange)===null||C===void 0||C.call(e,y)}};return _t({tabs:Z(function(){return e.tabs}),prefixCls:u}),function(){var o,y=e.id,T=e.type,K=e.tabBarGutter,$=e.tabBarStyle,C=e.locale,Se=e.destroyInactiveTabPane,he=e.renderTabBar,w=he===void 0?a.renderTabBar:he,V=e.onTabScroll,re=e.hideAdd,xe=e.centered,ge={id:D.value,activeKey:x.value,animated:b.value,tabPosition:se.value,rtl:v.value,mobile:E.value},Te;T==="editable-card"&&(Te={onEdit:function(Re,Ae){var pe,Fe=Ae.key,$e=Ae.event;(pe=e.onEdit)===null||pe===void 0||pe.call(e,Re==="add"?$e:Fe,Re)},removeIcon:function(){return f(Xt,null,null)},addIcon:a.addIcon?a.addIcon:function(){return f(_a,null,null)},showAdd:re!==!0});var ve,Be=A(A({},ge),{},{moreTransitionName:"".concat(s.value,"-slide-up"),editable:Te,locale:C,tabBarGutter:K,onTabClick:p,onTabScroll:V,style:$});w?ve=w(A(A({},Be),{},{DefaultTabBar:xt})):ve=f(xt,Be,Rt(a,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));var Q=u.value;return f("div",A(A({},r),{},{id:y,class:ye(Q,"".concat(Q,"-").concat(se.value),(o={},W(o,"".concat(Q,"-").concat(l.value),l.value),W(o,"".concat(Q,"-card"),["card","editable-card"].includes(T)),W(o,"".concat(Q,"-editable-card"),T==="editable-card"),W(o,"".concat(Q,"-centered"),xe),W(o,"".concat(Q,"-mobile"),E.value),W(o,"".concat(Q,"-editable"),T==="editable-card"),W(o,"".concat(Q,"-rtl"),v.value),o),r.class)}),[ve,f(Pa,A(A({destroyInactiveTabPane:Se},ge),{},{animated:b.value}),null)])}}});const Ne=ce({compatConfig:{MODE:3},name:"ATabs",inheritAttrs:!1,props:Pt(At(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var r=t.attrs,a=t.slots,i=t.emit,u=function(l){i("update:activeKey",l),i("change",l)};return function(){var c,l=Ba(Ht((c=a.default)===null||c===void 0?void 0:c.call(a)));return f(Ra,A(A(A({},na(e,["onUpdate:activeKey"])),r),{},{onChange:u,tabs:l}),a)}}});var Aa=function(){return{tab:Ke.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}};const Ze=ce({compatConfig:{MODE:3},name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:Aa(),slots:["closeIcon","tab"],setup:function(e,t){var r=t.attrs,a=t.slots,i=I(e.forceRender);me([function(){return e.active},function(){return e.destroyInactiveTabPane}],function(){e.active?i.value=!0:e.destroyInactiveTabPane&&(i.value=!1)},{immediate:!0});var u=Z(function(){return e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"}});return function(){var c,l=e.prefixCls,s=e.forceRender,v=e.id,b=e.active,g=e.tabKey;return f("div",{id:v&&"".concat(v,"-panel-").concat(g),role:"tabpanel",tabindex:b?0:-1,"aria-labelledby":v&&"".concat(v,"-tab-").concat(g),"aria-hidden":!b,style:[u.value,r.style],class:["".concat(l,"-tabpane"),b&&"".concat(l,"-tabpane-active"),r.class]},[(b||i.value||s)&&((c=a.default)===null||c===void 0?void 0:c.call(a))])}}});Ne.TabPane=Ze;Ne.install=function(n){return n.component(Ne.name,Ne),n.component(Ze.name,Ze),n};export{_a as P,Ne as T,Ze as _};
