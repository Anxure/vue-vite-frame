import"./default.498f109b.js";import{_ as y,F as x}from"./index.ecc74398.js";import"./index.c75affed.js";import"./index.9bc7c702.js";import{B as D}from"./index.d37dcd94.js";import{I as A,a as k,C as w,b as U}from"./index.1509a928.js";import{R,_ as q}from"./index.e8be1b82.js";import{R as Y}from"./index.6ae4dbb3.js";import{d as j,a as F,r as N,o as T,c as V,e as h,g as e,w as u,j as l,h as I,as as M}from"./index.af90269b.js";import"./isSymbol.157819f3.js";import"./_flatRest.8952629a.js";import"./debounce.27230c1f.js";import"./shallowequal.41d7e95b.js";import"./useMemo.5d3aee41.js";const S={class:"w-full h-full background-f"},O={class:"form-content w-full p-t-5"},te=j({__name:"BaseForm",setup(P){const d=F(),p=F("YYYY-MM-DD"),t=N({name:"",date:[],standard:"",type:[],desc:"",inviter:"",sex:void 0,client:""}),v={name:[{required:!0,message:"\u8BF7\u7ED9\u76EE\u6807\u53D6\u4E2A\u540D\u5B57",trigger:"blur"},{min:3,max:5,message:"\u957F\u5EA6\u57283-5\u4E2A\u5B57\u7B26",trigger:"blur"}],date:[{required:!0,message:"\u8BF7\u9009\u62E9\u8D77\u6B62\u65F6\u95F4",trigger:"change",type:"array"}],standard:[{required:!0,message:"\u8BF7\u8F93\u5165\u8861\u91CF\u6807\u51C6",trigger:"blur"}],type:[{type:"array",required:!0,message:"\u8BF7\u9009\u62E9\u9080\u8BF7\u65B9\u5F0F",trigger:"change"}]},B=()=>{d.value.validate().then(r=>{const[a,s]=r.date,n=a.format(p.value),i=s.format(p.value),m=Object.assign(I(r),{date:[n,i]});console.log("%cBaseForm.vue line:109 object","color: #007acc;",m),M.info("\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA\u503C")}).catch(r=>{console.log("error",r)})},g=()=>{d.value.resetFields()};return(r,a)=>{const s=A,n=y,i=Y,m=k,c=R,E=q,_=w,b=U,f=D,C=x;return T(),V("div",S,[h("div",O,[e(C,{ref_key:"formRef",ref:d,model:t,rules:v,"label-col":{span:4},"wrapper-col":{span:17}},{default:u(()=>[e(n,{ref:"name",label:"\u6807\u9898",name:"name"},{default:u(()=>[e(s,{value:t.name,"onUpdate:value":a[0]||(a[0]=o=>t.name=o),placeholder:"\u7ED9\u76EE\u6807\u8D77\u4E2A\u540D\u5B57"},null,8,["value"])]),_:1},512),e(n,{ref:"date",label:"\u8D77\u6B62\u65F6\u95F4",name:"date"},{default:u(()=>[e(i,{format:p.value,value:t.date,"onUpdate:value":a[1]||(a[1]=o=>t.date=o)},null,8,["format","value"])]),_:1},512),e(n,{ref:"desc",label:"\u76EE\u6807\u63CF\u8FF0",name:"desc"},{default:u(()=>[e(m,{rows:4,placeholder:"\u8BF7\u8F93\u5165\u76EE\u6807\u63CF\u8FF0",value:t.desc,"onUpdate:value":a[2]||(a[2]=o=>t.desc=o)},null,8,["value"])]),_:1},512),e(n,{ref:"standard",label:"\u8861\u91CF\u6807\u51C6",name:"standard"},{default:u(()=>[e(m,{rows:4,placeholder:"\u8BF7\u8F93\u5165\u8861\u91CF\u6807\u51C6",value:t.standard,"onUpdate:value":a[3]||(a[3]=o=>t.standard=o)},null,8,["value"])]),_:1},512),e(n,{ref:"client",label:"\u5BA2\u6237",name:"client"},{default:u(()=>[e(s,{value:t.client,"onUpdate:value":a[4]||(a[4]=o=>t.client=o),placeholder:"\u8BF7\u63CF\u8FF0\u4F60\u7684\u5BA2\u6237"},null,8,["value"])]),_:1},512),e(n,{ref:"inviter",label:"\u9080\u8BF7\u4EBA",name:"inviter"},{default:u(()=>[e(s,{value:t.inviter,"onUpdate:value":a[5]||(a[5]=o=>t.inviter=o),placeholder:"\u8BF7\u8F93\u5165\u9080\u8BF7\u4EBA"},null,8,["value"])]),_:1},512),e(n,{ref:"sex",label:"\u6027\u522B",name:"sex"},{default:u(()=>[e(E,{value:t.sex,"onUpdate:value":a[6]||(a[6]=o=>t.sex=o)},{default:u(()=>[e(c,{value:"1"},{default:u(()=>[l("\u7537")]),_:1}),e(c,{value:"2"},{default:u(()=>[l("\u5973")]),_:1})]),_:1},8,["value"])]),_:1},512),e(n,{ref:"type",label:"\u9080\u8BF7\u65B9\u5F0F",name:"type"},{default:u(()=>[e(b,{value:t.type,"onUpdate:value":a[7]||(a[7]=o=>t.type=o)},{default:u(()=>[e(_,{value:"1",name:"type"},{default:u(()=>[l("\u7EBF\u4E0A")]),_:1}),e(_,{value:"2",name:"type"},{default:u(()=>[l("\u7B2C\u4E09\u65B9")]),_:1}),e(_,{value:"3",name:"type"},{default:u(()=>[l("\u7EBF\u4E0B")]),_:1})]),_:1},8,["value"])]),_:1},512),e(n,{"wrapper-col":{span:14,offset:4}},{default:u(()=>[e(f,{type:"primary",onClick:B},{default:u(()=>[l("\u63D0\u4EA4")]),_:1}),e(f,{style:{"margin-left":"10px"},onClick:g},{default:u(()=>[l("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"])])])}}});export{te as default};
