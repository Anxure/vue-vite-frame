import"./default.343494e9.js";import{F as n,_ as E}from"./index.9004008d.js";import"./index.bd1b2a12.js";import"./index.5f2916d0.js";import{B as T}from"./index.6cf923aa.js";import{I as R,_ as j,C as z}from"./index.57ca2ea2.js";import{d as M,r as v,a as U,u as V,b as N,c as q,e as L,f as e,t as P,g as _,h as a,w as r,l as $,i as G,s as h,o as H,n as b,j as F,k as x,p as J,m as K,_ as O}from"./index.3b4d1eab.js";import{u as Q}from"./useBackToIndex.7d9205b1.js";import{u as W,F as d}from"./debounce.7f60d596.js";import"./isSymbol.1593ef30.js";import"./_flatRest.cb846e8a.js";n.useInjectFormItemContext=W;n.ItemRest=d;n.install=function(s){return s.component(n.name,n),s.component(n.Item.name,n.Item),s.component(d.name,d),s};const X="/vue-vite-frame/assets/login-box-bg.9027741f.svg",l=s=>(J("data-v-77f4788f"),s=s(),K(),s),Y={class:"login-container"},Z={class:"login-form-box flex h-full p-p-3"},ee={class:"w-5 flex column flex-center relative align-item-center"},te={class:"title-container absolute font-bold color-f"},oe={class:"center"},se=["src","alt"],ae=l(()=>e("div",{class:"t-4 login-info color-f"},"\u57FA\u4E8Evue3.0\u3001TypeScript\u3001Vite\u3001pinia\u3001ant-design-vue\u5F00\u53D1\u7684\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",-1)),ne=l(()=>e("div",{class:"t-4 login-info color-f"},[x(" @github: "),e("a",{class:"color-f",target:"_blank",href:"https://github.com/Anxure/vue-base-frame"},"https://github.com/Anxure/vue-vite-frame")],-1)),re=l(()=>e("div",{class:"t-4 login-info color-f"},"@author: Anxure",-1)),ue={class:"w-5 flex flex-center align-item-center"},le=l(()=>e("div",{class:"font-bold color-f form-title b-3"},"\u767B\u5F55\uFF1A",-1)),ie={class:"flex space-between"},ce=l(()=>e("span",{class:"color-f"},"\u8BB0\u4F4F\u6211",-1)),me=l(()=>e("a",{class:"color-f"},"\u5FD8\u8BB0\u5BC6\u7801\uFF1F",-1)),fe=M({__name:"Index",setup(s){const t=v({formTitle:"vue-base-frame",rememberMe:!1,formData:{username:"",password:""}}),c=U(!1),I=V(),m=N(),w=q();t.formTitle=w.title;const B=n.useForm,{validate:D,validateInfos:p}=B(t.formData,v({username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]})),k=g=>{c.value=!0,g.preventDefault(),D().then(async()=>{const{result:o,code:f}=await $(G(t.formData));if(c.value=!1,f===0){h("userInfo",o),h("admin_token","dwafewfwefwgergergergergergerg"),m.userInfo=o,m.$patch({userInfo:o}),await m.getMenu({id:o.id});const u=Q();I.push({path:u})}}).catch(o=>{c.value=!1})};return(g,o)=>{const f=R,u=E,A=j,S=z,C=T,y=n;return H(),L("div",Y,[e("div",Z,[e("div",ee,[e("div",te,P(t.formTitle),1),e("div",oe,[e("img",{class:"w-5",src:_(X),alt:t.formTitle},null,8,se)]),ae,ne,re]),e("div",ue,[a(y,{"label-col":{span:4},"wrapper-col":{span:20},model:t.formData,class:"login-form",onSubmit:k},{default:r(()=>[le,a(u,b(F(_(p).username)),{default:r(()=>[a(f,{size:"large",value:t.formData.username,"onUpdate:value":o[0]||(o[0]=i=>t.formData.username=i),placeholder:"\u9ED8\u8BA4\u8D26\u53F7\u4E3Aadmin/test"},null,8,["value"])]),_:1},16),a(u,b(F(_(p).password)),{default:r(()=>[a(A,{size:"large",value:t.formData.password,"onUpdate:value":o[1]||(o[1]=i=>t.formData.password=i),placeholder:"\u9ED8\u8BA4\u5BC6\u7801\u4E3A123456",visibilityToggle:!1},null,8,["value"])]),_:1},16),a(u,null,{default:r(()=>[e("div",ie,[a(S,{checked:t.rememberMe,"onUpdate:checked":o[2]||(o[2]=i=>t.rememberMe=i)},{default:r(()=>[ce]),_:1},8,["checked"]),me])]),_:1}),a(u,{"wrapper-col":{span:20,offset:0}},{default:r(()=>[a(C,{type:"primary",size:"large",class:"submit-btn","html-type":"submit",loading:c.value},{default:r(()=>[x("\u767B\u5F55")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])])])}}});const Be=O(fe,[["__scopeId","data-v-77f4788f"],["__file","D:/project/github/vue-vite-frame/src/views/login/Index.vue"]]);export{Be as default};
