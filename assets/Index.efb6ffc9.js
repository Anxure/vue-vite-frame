import{i as be}from"./default.691b2434.js";import{C as S}from"./index.caa00a1a.js";import"./index.b384fd64.js";import{C as Be,R as ke}from"./index.d2355735.js";import{h as we,A as Me}from"./avatar.5e2adead.js";import{d as E,J as W,A as x,al as oe,g as u,X as y,C as M,B as Pe,a as H,a9 as je,a2 as Fe,_ as j,G as ze,aR as Le,aS as Oe,D as Ne,aG as pe,v as ge,K as Te,q as he,o as g,ao as L,w as p,e as n,f as J,p as re,k as le,c as K,H as se,av as ce,t as z}from"./index.f9a9aa89.js";import{_ as Z}from"./_plugin-vue_export-helper.cdc0426e.js";import{_ as Ke,S as Ge}from"./index.61ce969f.js";import{u as Re,f as qe}from"./LeftOutlined.283add70.js";import{C as He,A as Ce}from"./isSymbol.f9ab199c.js";import"./debounce.a9659b74.js";import"./shallowequal.e8bcdcac.js";import"./_flatRest.fc655eef.js";import"./useMemo.d81054a7.js";var Ve=function(){return{prefixCls:String,title:y.any,description:y.any,avatar:y.any}};const ie=E({compatConfig:{MODE:3},name:"ACardMeta",props:Ve(),slots:["title","description","avatar"],setup:function(e,f){var a=f.slots,s=W("card",e),t=s.prefixCls;return function(){var m=x({},"".concat(t.value,"-meta"),!0),r=oe(a,e,"avatar"),l=oe(a,e,"title"),I=oe(a,e,"description"),w=r?u("div",{class:"".concat(t.value,"-meta-avatar")},[r]):null,v=l?u("div",{class:"".concat(t.value,"-meta-title")},[l]):null,h=I?u("div",{class:"".concat(t.value,"-meta-description")},[I]):null,c=v||h?u("div",{class:"".concat(t.value,"-meta-detail")},[v,h]):null;return u("div",{class:m},[w,c])}}});var We=function(){return{prefixCls:String,hoverable:{type:Boolean,default:!0}}};const V=E({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:We(),setup:function(e,f){var a=f.slots,s=W("card",e),t=s.prefixCls,m=M(function(){var r;return r={},x(r,"".concat(t.value,"-grid"),!0),x(r,"".concat(t.value,"-grid-hoverable"),e.hoverable),r});return function(){var r;return u("div",{class:m.value},[(r=a.default)===null||r===void 0?void 0:r.call(a)])}}});S.Meta=ie;S.Grid=V;S.install=function(o){return o.component(S.name,S),o.component(ie.name,ie),o.component(V.name,V),o};var Je=function(){return{avatar:y.any,description:y.any,prefixCls:String,title:y.any}};const xe=E({compatConfig:{MODE:3},name:"AListItemMeta",props:Je(),displayName:"AListItemMeta",__ANT_LIST_ITEM_META:!0,slots:["avatar","description","title"],setup:function(e,f){var a=f.slots,s=W("list",e),t=s.prefixCls;return function(){var m,r,l,I,w,v,h="".concat(t.value,"-item-meta"),c=(m=e.title)!==null&&m!==void 0?m:(r=a.title)===null||r===void 0?void 0:r.call(a),_=(l=e.description)!==null&&l!==void 0?l:(I=a.description)===null||I===void 0?void 0:I.call(a),C=(w=e.avatar)!==null&&w!==void 0?w:(v=a.avatar)===null||v===void 0?void 0:v.call(a),D=u("div",{class:"".concat(t.value,"-item-meta-content")},[c&&u("h4",{class:"".concat(t.value,"-item-meta-title")},[c]),_&&u("div",{class:"".concat(t.value,"-item-meta-description")},[_])]);return u("div",{class:h},[C&&u("div",{class:"".concat(t.value,"-item-meta-avatar")},[C]),(c||_)&&D])}}});var ye=Symbol("ListContextKey"),Xe=["class"],Qe=function(){return{prefixCls:String,extra:y.any,actions:y.array,grid:Object,colStyle:{type:Object,default:void 0}}};const Ee=E({compatConfig:{MODE:3},name:"AListItem",inheritAttrs:!1,Meta:xe,props:Qe(),slots:["actions","extra"],setup:function(e,f){var a=f.slots,s=f.attrs,t=Pe(ye,{grid:H(),itemLayout:H()}),m=t.itemLayout,r=t.grid,l=W("list",e),I=l.prefixCls,w=function(){var c,_=((c=a.default)===null||c===void 0?void 0:c.call(a))||[],C;return _.forEach(function(D){Le(D)&&!Oe(D)&&(C=!0)}),C&&_.length>1},v=function(){var c,_,C=(c=e.extra)!==null&&c!==void 0?c:(_=a.extra)===null||_===void 0?void 0:_.call(a);return m.value==="vertical"?!!C:!w()};return function(){var h,c,_,C,D,ee=s.class,te=je(s,Xe),A=I.value,O=(h=e.extra)!==null&&h!==void 0?h:(c=a.extra)===null||c===void 0?void 0:c.call(a),R=(_=a.default)===null||_===void 0?void 0:_.call(a),$=(C=e.actions)!==null&&C!==void 0?C:Fe((D=a.actions)===null||D===void 0?void 0:D.call(a));$=$&&!Array.isArray($)?[$]:$;var b=$&&$.length>0&&u("ul",{class:"".concat(A,"-item-action"),key:"actions"},[$.map(function(N,U){return u("li",{key:"".concat(A,"-item-action-").concat(U)},[N,U!==$.length-1&&u("em",{class:"".concat(A,"-item-action-split")},null)])})]),X=r.value?"div":"li",Q=u(X,j(j({},te),{},{class:ze("".concat(A,"-item"),x({},"".concat(A,"-item-no-flex"),!v()),ee)}),{default:function(){return[m.value==="vertical"&&O?[u("div",{class:"".concat(A,"-item-main"),key:"content"},[R,b]),u("div",{class:"".concat(A,"-item-extra"),key:"extra"},[O])]:[R,b,He(O,{key:"extra"})]]}});return r.value?u(Be,{flex:1,style:e.colStyle},{default:function(){return[Q]}}):Q}}});var Ue=function(){return{bordered:{type:Boolean,default:void 0},dataSource:y.array,extra:y.any,grid:{type:Object,default:void 0},itemLayout:String,loading:{type:[Boolean,Object],default:void 0},loadMore:y.any,pagination:{type:[Boolean,Object],default:void 0},prefixCls:String,rowKey:[String,Number,Function],renderItem:Function,size:String,split:{type:Boolean,default:void 0},header:y.any,footer:y.any,locale:{type:Object}}},P=E({compatConfig:{MODE:3},name:"AList",Item:Ee,props:be(Ue(),{dataSource:[],bordered:!1,split:!0,loading:!1,pagination:!1}),slots:["extra","loadMore","renderItem","header","footer"],setup:function(e,f){var a,s,t=f.slots;Ne(ye,{grid:pe(e,"grid"),itemLayout:pe(e,"itemLayout")});var m={current:1,total:0},r=W("list",e),l=r.prefixCls,I=r.direction,w=r.renderEmpty,v=M(function(){return e.pagination&&ge(e.pagination)==="object"?e.pagination:{}}),h=H((a=v.value.defaultCurrent)!==null&&a!==void 0?a:1),c=H((s=v.value.defaultPageSize)!==null&&s!==void 0?s:10);Te(v,function(){"current"in v.value&&(h.value=v.value.current),"pageSize"in v.value&&(c.value=v.value.pageSize)});var _=[],C=function(d){return function(F,B){h.value=F,c.value=B,v.value[d]&&v.value[d](F,B)}},D=C("onChange"),ee=C("onShowSizeChange"),te=function(d){var F;return u("div",{class:"".concat(l.value,"-empty-text")},[((F=e.locale)===null||F===void 0?void 0:F.emptyText)||d("List")])},A=M(function(){return typeof e.loading=="boolean"?{spinning:e.loading}:e.loading}),O=M(function(){return A.value&&A.value.spinning}),R=M(function(){var i="";switch(e.size){case"large":i="lg";break;case"small":i="sm";break}return i}),$=M(function(){var i;return i={},x(i,"".concat(l.value),!0),x(i,"".concat(l.value,"-vertical"),e.itemLayout==="vertical"),x(i,"".concat(l.value,"-").concat(R.value),R.value),x(i,"".concat(l.value,"-split"),e.split),x(i,"".concat(l.value,"-bordered"),e.bordered),x(i,"".concat(l.value,"-loading"),O.value),x(i,"".concat(l.value,"-grid"),!!e.grid),x(i,"".concat(l.value,"-rtl"),I.value==="rtl"),i}),b=M(function(){var i=j(j({},m),{},{total:e.dataSource.length,current:h.value,pageSize:c.value},e.pagination||{}),d=Math.ceil(i.total/i.pageSize);return i.current>d&&(i.current=d),i}),X=M(function(){var i=he(e.dataSource);return e.pagination&&e.dataSource.length>(b.value.current-1)*b.value.pageSize&&(i=he(e.dataSource).splice((b.value.current-1)*b.value.pageSize,b.value.pageSize)),i}),Q=Re(),N=qe(function(){for(var i=0;i<Ce.length;i+=1){var d=Ce[i];if(Q.value[d])return d}}),U=M(function(){if(!!e.grid){var i=N.value&&e.grid[N.value]?e.grid[N.value]:e.grid.column;if(i)return{width:"".concat(100/i,"%"),maxWidth:"".concat(100/i,"%")}}}),$e=function(d,F){var B,G=(B=e.renderItem)!==null&&B!==void 0?B:t.renderItem;if(!G)return null;var k,T=ge(e.rowKey);return T==="function"?k=e.rowKey(d):T==="string"||T==="number"?k=d[e.rowKey]:k=d.key,k||(k="list-item-".concat(F)),_[F]=k,G({item:d,index:F})};return function(){var i,d,F,B,G,k,T,de=(i=e.loadMore)!==null&&i!==void 0?i:(d=t.loadMore)===null||d===void 0?void 0:d.call(t),ae=(F=e.footer)!==null&&F!==void 0?F:(B=t.footer)===null||B===void 0?void 0:B.call(t),ve=(G=e.header)!==null&&G!==void 0?G:(k=t.header)===null||k===void 0?void 0:k.call(t),_e=Fe((T=t.default)===null||T===void 0?void 0:T.call(t)),Se=!!(de||e.pagination||ae),Ie=j(j({},$.value),{},x({},"".concat(l.value,"-something-after-last-item"),Se)),fe=e.pagination?u("div",{class:"".concat(l.value,"-pagination")},[u(Ke,j(j({},b.value),{},{onChange:D,onShowSizeChange:ee}),null)]):null,ne=O.value&&u("div",{style:{minHeight:"53px"}},null);if(X.value.length>0){_.length=0;var me=X.value.map(function(q,ue){return $e(q,ue)}),De=me.map(function(q,ue){return u("div",{key:_[ue],style:U.value},[q])});ne=e.grid?u(ke,{gutter:e.grid.gutter},{default:function(){return[De]}}):u("ul",{class:"".concat(l.value,"-items")},[me])}else!_e.length&&!O.value&&(ne=te(w.value));var Y=b.value.position||"bottom";return u("div",{class:Ie},[(Y==="top"||Y==="both")&&fe,ve&&u("div",{class:"".concat(l.value,"-header")},[ve]),u(Ge,A.value,{default:function(){return[ne,_e]}}),ae&&u("div",{class:"".concat(l.value,"-footer")},[ae]),de||(Y==="bottom"||Y==="both")&&fe])}}});P.install=function(o){return o.component(P.name,P),o.component(P.Item.name,P.Item),o.component(P.Item.Meta.name,P.Item.Meta),o};const Ye=P,Ae=o=>(re("data-v-0bd74029"),o=o(),le(),o),Ze={class:"flex align-item-center"},et=Ae(()=>n("div",{class:"user-text"},[n("h3",null,"\u65E9\u5B89\uFF0CAnxure\uFF0C\u5F00\u59CB\u60A8\u4E00\u5929\u7684\u5DE5\u4F5C\u5427\uFF01"),n("span",{class:"text-gray"},"\u4ECA\u65E5\u5929\u6C14\uFF1A\u591A\u4E91\uFF0C \u6E29\u5EA6\uFF1A19\u2103 - 35\u2103")],-1)),tt=Ae(()=>n("div",{class:"user-work flex flex-end flex-1"},[n("div",{class:"work-item flex column"},[n("span",{class:"text-gray"},"\u5F85\u529E"),n("span",null,"6/10")]),n("div",{class:"work-item flex column r-12 l-12"},[n("span",{class:"text-gray"},"\u9879\u76EE"),n("span",null,"18")]),n("div",{class:"work-item flex column r-4"},[n("span",{class:"text-gray"},"\u56E2\u961F"),n("span",null,"300")])],-1)),at=E({__name:"Aheader",setup(o){return(e,f)=>{const a=Me,s=S;return g(),L(s,null,{default:p(()=>[n("div",Ze,[u(a,{class:"user-avatar",size:72,src:J(we)},null,8,["src"]),et,tt])]),_:1})}}});const nt=Z(at,[["__scopeId","data-v-0bd74029"]]),ut=[{icon:"icon-huaban88",title:"Github",content:"\u4F60\u4E0D\u52AA\u529B\uFF0C\u6C38\u8FDC\u5230\u8FBE\u4E0D\u4E86\u81EA\u5DF1\u60F3\u8981\u5230\u8FBE\u7684\u5730\u65B9\u4F60\u4E0D\u52AA\u529B\uFF0C\u6C38\u8FDC\u5230\u8FBE\u4E0D\u4E86\u81EA\u5DF1\u60F3\u8981\u5230\u8FBE\u7684\u5730\u65B9",user:"Anxure",date:"9\u5C0F\u65F6\u524D"},{icon:"icon-vue",title:"Vue",content:"\u5927\u4F6C\uFF0C\u4E0D\u8981\u66F4\u65B0\u4E86\uFF0C\u5B66\u4E0D\u52A8\u4E86",user:"\u6478\u9C7C\u7EC4",date:"2021-05-21"},{icon:"icon-react",title:"React",content:"\u6210\u957F\u4E0D\u662F\u8D70\u659C\u5761\uFF0C\u800C\u662F\u4E0A\u53F0\u9636",user:"\u8EBA\u5E73\u7EC4",date:"2021-06-07"},{icon:"icon-angular",title:"Angular",content:"\u8BB0\u7740\u4F60\u7684\u8138\u8272\uFF0C\u662F\u6211\u7B49\u4F60\u7684\u6267\u7740",user:"\u75F4\u60C5\u7EC4",date:"2021-06-08"},{icon:"icon-css",title:"Css",content:"\u4E00\u9635\u98CE\u3001\u4E00\u573A\u68A6\uFF0C\u7231\u662F\u751F\u547D\u7684\u83AB\u6D4B",user:"\u5F00\u53D1\u7EC4",date:"2021-06-08"},{icon:"icon-html5-dark",title:"Html5",content:"\u4E24\u76F8\u5FD8\u4ECE\u6765\u672A\u5FD8\uFF0C\u53EA\u662F\u8BB0\u7740\uFF0C\u53EA\u662F\u5FF5\u7740\uFF0C\u53EA\u662F\u73CD\u85CF",user:"\u67B6\u6784\u7EC4",date:"2021-06-08"}],ot=[{icon:"#icon-avatar",user:"Anxure",title:"\u5728 <a>github</a> \u521B\u5EFA\u4E86\u9879\u76EE <a>vue3-base-frame </a>",date:"2021-05-25"},{icon:"#icon-touxiangnvhai1",user:"\u5C0F\u7EA2",title:"\u5728 <a>\u5F00\u6E90\u7EC4</a> \u63D0\u4EA4\u4E86request",date:"2021-05-15"},{icon:"#icon-icon-test",user:"\u5F20\u5927\u4F1F",title:"\u5728 <a>vue3-base-frame</a> \u63D0\u4E86\u4E00\u4E2Abug",date:"9\u5C0F\u65F6\u524D"},{icon:"#icon-qiatongxingxiang",user:"\u4E91\u68A6\u70DF",title:"\u5728 <a>vue3-base-frame</a> \u521B\u5EFA\u4E86\u5206\u652Fdevelop",date:"6\u5C0F\u65F6\u524D"},{icon:"#icon-touxiangnvhai",user:"\u5B59\u6653\u6708",title:"\u5728 <a>vue3-base-frame</a> release\u4E86\u4E00\u4E2A\u65B0\u7684\u7248\u672C",date:"1\u5C0F\u65F6\u524D"}],it=[{icon:"#icon-gongzuotai1",title:"\u5DE5\u4F5C\u53F0"},{icon:"#icon-biaodan1",title:"\u57FA\u7840\u8868\u5355"},{icon:"#icon-zu23631",title:"\u9AD8\u7EA7\u8868\u5355"},{icon:"#icon-biaoge",title:"\u8868\u683C"},{icon:"#icon-icon-test2",title:"404\u9875\u9762"},{icon:"#icon-icon-test1",title:"403\u9875\u9762"}],rt=o=>(re("data-v-add19f13"),o=o(),le(),o),lt=rt(()=>n("a",{href:"#"},"\u66F4\u591A",-1)),st={class:"card-title flex"},ct={class:"icon","aria-hidden":"true",style:{"font-size":"18px"}},dt=["xlink:href"],vt={class:"card-content t-3"},_t={class:"text-gray overflow-hidden-one"},ft={class:"card-info flex space-between t-3 text-gray"},mt=E({__name:"Aproject",setup(o){return(e,f)=>{const a=V,s=S;return g(),L(s,{title:"\u9879\u76EE"},{extra:p(()=>[lt]),default:p(()=>[(g(!0),K(se,null,ce(J(ut),t=>(g(),L(a,{key:t.title,style:{width:"33.33%"}},{default:p(()=>[n("div",st,[(g(),K("svg",ct,[n("use",{"xlink:href":`#${t.icon}`},null,8,dt)])),n("a",null,z(t.title),1)]),n("div",vt,[n("div",_t,z(t.content),1)]),n("div",ft,[n("span",null,z(t.user),1),n("span",null,z(t.date),1)])]),_:2},1024))),128))]),_:1})}}});const pt=Z(mt,[["__scopeId","data-v-add19f13"]]);const gt=o=>(re("data-v-ee26a419"),o=o(),le(),o),ht=gt(()=>n("a",{href:"#"},"\u66F4\u591A",-1)),Ct={class:"icon","aria-hidden":"true",style:{"font-size":"18px"}},Ft=["xlink:href"],xt=["innerHTML"],yt=E({__name:"Adynamic",setup(o){return(e,f)=>{const a=xe,s=Ee,t=Ye,m=S;return g(),L(m,{title:"\u52A8\u6001",class:"dynamic-list t-4"},{extra:p(()=>[ht]),default:p(()=>[u(t,{"item-layout":"horizontal","data-source":J(ot)},{renderItem:p(({item:r})=>[u(s,null,{default:p(()=>[u(a,null,{avatar:p(()=>[(g(),K("svg",Ct,[n("use",{"xlink:href":`${r.icon}`},null,8,Ft)]))]),title:p(()=>[n("a",null,z(r.user),1),n("span",{innerHTML:r.title},null,8,xt)]),description:p(()=>[n("p",null,z(r.date),1)]),_:2},1024)]),_:2},1024)]),_:1},8,["data-source"])]),_:1})}}});const Et=Z(yt,[["__scopeId","data-v-ee26a419"]]),At={class:"quick-nav-title flex column center"},$t={class:"icon auto","aria-hidden":"true",style:{"font-size":"18px"}},St=["xlink:href"],It={class:"t-1 text-gray"},Dt=E({__name:"AquickNav",setup(o){return(e,f)=>{const a=V,s=S;return g(),L(s,{title:"\u5FEB\u6377\u5BFC\u822A"},{default:p(()=>[(g(!0),K(se,null,ce(J(it),t=>(g(),L(a,{key:t.title,style:{width:"33.33%"}},{default:p(()=>[n("div",At,[(g(),K("svg",$t,[n("use",{"xlink:href":`${t.icon}`},null,8,St)])),n("a",It,z(t.title),1)])]),_:2},1024))),128))]),_:1})}}}),bt={class:"flex"},Bt=E({__name:"Agroup",setup(o){const e=["Anxure","\u6478\u9C7C\u7EC4","\u8EBA\u5E73\u7EC4","\u5F00\u53D1\u7EC4","\u67B6\u6784\u7EC4"];return(f,a)=>{const s=S;return g(),L(s,{title:"\u56E2\u961F",class:"t-4"},{default:p(()=>[n("ul",bt,[(g(),K(se,null,ce(e,(t,m)=>n("li",{style:{width:"25%"},key:m},[n("a",null,z(t),1)])),64))])]),_:1})}}}),kt="/vue-vite-frame/assets/workplace.e7254475.jpg",wt=["src"],Mt=E({__name:"Aimg",setup(o){return(e,f)=>{const a=S;return g(),L(a,{class:"img-list t-4 center"},{default:p(()=>[n("img",{style:{"max-height":"367px"},src:J(kt),alt:"\u5C11\u58EE\u4E0D\u52AA\u529B\u8001\u5927\u5F92\u4F24\u60B2"},null,8,wt)]),_:1})}}});const Pt=Z(Mt,[["__scopeId","data-v-6acd58ae"]]),jt={class:"workplace"},zt={class:"workplace-header"},Lt={class:"workplace-content overflow-hidden t-b-3"},Ot={class:"flex"},Nt={class:"w-7 r-4"},Tt={class:"w-3"},ta=E({__name:"Index",setup(o){const e=H(!0);return setTimeout(()=>{e.value=!1},1e3),(f,a)=>(g(),K("div",jt,[n("div",zt,[u(nt)]),n("div",Lt,[n("div",Ot,[n("div",Nt,[u(pt,{loading:e.value},null,8,["loading"]),u(Et,{loading:e.value},null,8,["loading"])]),n("div",Tt,[u(Dt,{loading:e.value},null,8,["loading"]),u(Pt,{loading:e.value},null,8,["loading"]),u(Bt,{loading:e.value},null,8,["loading"])])])])]))}});export{ta as default};