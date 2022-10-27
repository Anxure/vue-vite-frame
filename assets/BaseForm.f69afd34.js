import"./default.f8a0ebc6.js";import{_ as y,F as x}from"./index.9971a058.js";import"./index.6fa7139b.js";import"./index.fe15ec0b.js";import{B as D}from"./index.af6c39ae.js";import{I as k,a as A,C as w,b as U}from"./index.8f4e4163.js";import{R,_ as q}from"./index.84bd4409.js";import{R as Y}from"./index.2eec9536.js";import{d as h,a as F,r as N,o as T,e as V,f as j,h as e,w as u,k as r,i as I,at as M,_ as S}from"./index.695c526f.js";import"./isSymbol.0751cb61.js";import"./_flatRest.eb7f8eaf.js";import"./debounce.e9a3c26e.js";import"./shallowequal.3a414255.js";import"./useMemo.865adab1.js";const O={class:"w-full h-full background-f"},P={class:"form-content w-full p-t-5"},z=h({__name:"BaseForm",setup(G){const m=F(),d=F("YYYY-MM-DD"),t=N({name:"",date:[],standard:"",type:[],desc:"",inviter:"",sex:void 0,client:""}),v={name:[{required:!0,message:"\u8BF7\u7ED9\u76EE\u6807\u53D6\u4E2A\u540D\u5B57",trigger:"blur"},{min:3,max:5,message:"\u957F\u5EA6\u57283-5\u4E2A\u5B57\u7B26",trigger:"blur"}],date:[{required:!0,message:"\u8BF7\u9009\u62E9\u8D77\u6B62\u65F6\u95F4",trigger:"change",type:"array"}],standard:[{required:!0,message:"\u8BF7\u8F93\u5165\u8861\u91CF\u6807\u51C6",trigger:"blur"}],type:[{type:"array",required:!0,message:"\u8BF7\u9009\u62E9\u9080\u8BF7\u65B9\u5F0F",trigger:"change"}]},B=()=>{m.value.validate().then(s=>{const[a,l]=s.date,n=a.format(d.value),p=l.format(d.value);Object.assign(I(s),{date:[n,p]}),M.info("\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA\u503C")}).catch(s=>{})},g=()=>{m.value.resetFields()};return(s,a)=>{const l=k,n=y,p=Y,_=A,f=R,E=q,i=w,b=U,c=D,C=x;return T(),V("div",O,[j("div",P,[e(C,{ref_key:"formRef",ref:m,model:t,rules:v,"label-col":{span:4},"wrapper-col":{span:17}},{default:u(()=>[e(n,{ref:"name",label:"\u6807\u9898",name:"name"},{default:u(()=>[e(l,{value:t.name,"onUpdate:value":a[0]||(a[0]=o=>t.name=o),placeholder:"\u7ED9\u76EE\u6807\u8D77\u4E2A\u540D\u5B57"},null,8,["value"])]),_:1},512),e(n,{ref:"date",label:"\u8D77\u6B62\u65F6\u95F4",name:"date"},{default:u(()=>[e(p,{format:d.value,value:t.date,"onUpdate:value":a[1]||(a[1]=o=>t.date=o)},null,8,["format","value"])]),_:1},512),e(n,{ref:"desc",label:"\u76EE\u6807\u63CF\u8FF0",name:"desc"},{default:u(()=>[e(_,{rows:4,placeholder:"\u8BF7\u8F93\u5165\u76EE\u6807\u63CF\u8FF0",value:t.desc,"onUpdate:value":a[2]||(a[2]=o=>t.desc=o)},null,8,["value"])]),_:1},512),e(n,{ref:"standard",label:"\u8861\u91CF\u6807\u51C6",name:"standard"},{default:u(()=>[e(_,{rows:4,placeholder:"\u8BF7\u8F93\u5165\u8861\u91CF\u6807\u51C6",value:t.standard,"onUpdate:value":a[3]||(a[3]=o=>t.standard=o)},null,8,["value"])]),_:1},512),e(n,{ref:"client",label:"\u5BA2\u6237",name:"client"},{default:u(()=>[e(l,{value:t.client,"onUpdate:value":a[4]||(a[4]=o=>t.client=o),placeholder:"\u8BF7\u63CF\u8FF0\u4F60\u7684\u5BA2\u6237"},null,8,["value"])]),_:1},512),e(n,{ref:"inviter",label:"\u9080\u8BF7\u4EBA",name:"inviter"},{default:u(()=>[e(l,{value:t.inviter,"onUpdate:value":a[5]||(a[5]=o=>t.inviter=o),placeholder:"\u8BF7\u8F93\u5165\u9080\u8BF7\u4EBA"},null,8,["value"])]),_:1},512),e(n,{ref:"sex",label:"\u6027\u522B",name:"sex"},{default:u(()=>[e(E,{value:t.sex,"onUpdate:value":a[6]||(a[6]=o=>t.sex=o)},{default:u(()=>[e(f,{value:"1"},{default:u(()=>[r("\u7537")]),_:1}),e(f,{value:"2"},{default:u(()=>[r("\u5973")]),_:1})]),_:1},8,["value"])]),_:1},512),e(n,{ref:"type",label:"\u9080\u8BF7\u65B9\u5F0F",name:"type"},{default:u(()=>[e(b,{value:t.type,"onUpdate:value":a[7]||(a[7]=o=>t.type=o)},{default:u(()=>[e(i,{value:"1",name:"type"},{default:u(()=>[r("\u7EBF\u4E0A")]),_:1}),e(i,{value:"2",name:"type"},{default:u(()=>[r("\u7B2C\u4E09\u65B9")]),_:1}),e(i,{value:"3",name:"type"},{default:u(()=>[r("\u7EBF\u4E0B")]),_:1})]),_:1},8,["value"])]),_:1},512),e(n,{"wrapper-col":{span:14,offset:4}},{default:u(()=>[e(c,{type:"primary",onClick:B},{default:u(()=>[r("\u63D0\u4EA4")]),_:1}),e(c,{style:{"margin-left":"10px"},onClick:g},{default:u(()=>[r("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"])])])}}}),ne=S(z,[["__file","D:/project/github/vue-vite-frame/src/views/form/BaseForm.vue"]]);export{ne as default};
