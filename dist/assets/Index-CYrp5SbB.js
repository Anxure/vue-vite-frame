import{r as _,m as x,ab as L,a2 as K,am as k,an as C,d as z,W as N,o as E,c as v,f as b,e as n,b as F}from"./index-C9KpkboQ.js";import{c as P}from"./index-BSTwqJKf.js";import{_ as j}from"./index-DtnPxBxz.js";import{_ as B}from"./index-kw55o-Ek.js";import"./collapseMotion-Yp2E69V-.js";import"./compact-item-DkwYf7XX.js";import"./styleChecker-hs9ODizI.js";import"./index-CMDgY9D-.js";import"./LeftOutlined-B0isYnHm.js";import"./shallowequal-9U5DN-rv.js";import"./FileOutlined-ClqVPlLG.js";import"./index-BuIjfHSI.js";import"./useMemo-OMhPJlgs.js";const I=(e,r="")=>{const a=new Blob([e]);if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(a,r);else{const o=document.createElement("a");o.download=r,o.style.display="none",o.href=URL.createObjectURL(a),document.body.appendChild(o),o.click(),document.body.removeChild(o)}},R=()=>{const e=_({rowSelectionType:"checkbox",extraParams:{},loading:!1,batchExportLoading:!1,dataList:[],pageNum:1,pageSize:10,rowKey:"id",totalLength:0,totalPages:0,curSelectKeys:[],curSelectRows:[],totalSelectedKeys:[],searchParams:{},getListCallback:void 0});function r(t){e.rowKey=t}let a=null;function o(t){a=t}let i=null;function d(t){i=t}const g=x(()=>({fixed:!0,selectedRowKeys:e.curSelectKeys,onChange:(t,s)=>{e.curSelectKeys=[...t],e.curSelectRows=s,e.totalSelectedKeys=[...t]},type:e.rowSelectionType}));x(()=>e.dataList.map(t=>t[e.rowKey])||[]);async function l(t=!0,s=!0,c){if(c=c||e.getListCallback,t&&(e.pageNum=1),s&&p(),!a||typeof a!="function")throw new Error("请在使用的组件data中声明数据请求方法");if(!e.searchParams)throw new Error("请在使用的组件data中声明searchParams字段");const y=P(e.searchParams);e.loading=!0;try{const u=await a({...y,pageNum:e.pageNum,pageSize:e.pageSize});e.loading=!1;const{total:w,items:S}=u.result;if(S.length===0&&e.pageNum!==1){e.pageNum--,l(t);return}e.dataList=S,e.totalLength=w,c&&typeof c=="function"&&c(_(u))}finally{e.loading=!1}}async function m(){if(e.totalSelectedKeys.length===0){K.warning("请至少选择一条数据");return}if(e.batchExportLoading=!0,!i||typeof i!="function")throw new Error("请在使用的组件data中声明数据请求方法");try{const t=await i({ids:e.totalSelectedKeys,type:1}),s=k().format("YYYY-MM-DD HH:mm");I(t,s+".xlsx"),p()}catch{}finally{e.batchExportLoading=!1}}function p(){e.curSelectKeys=[],e.totalSelectedKeys=[]}function f(t){e.pageNum=t,l(!1,!1)}function h(t,s){e.pageSize=s,l(!1)}return{...L(e),rowSelection:g,setRowKey:r,ajaxFunc:a,setAjaxFunc:o,batchExport:m,setExportFile:d,getNewsList:l,pageChange:f,pageSizeChange:h}};function M(e){return C.get("/tableList",{params:e})}const O={class:"w-full background-f"},T={class:"center t-4 p-t-3"},Z=z({__name:"Index",setup(e){const r=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"},{title:"电话号码",dataIndex:"phone",key:"phone"},{title:"职业",dataIndex:"profession",key:"profession"}],{dataList:a,pageNum:o,pageSize:i,totalLength:d,pageChange:g,pageSizeChange:l,setAjaxFunc:m,getNewsList:p,loading:f,rowSelection:h,rowKey:t}=R();return m(M),N(()=>{p()}),(s,c)=>{const y=j,u=B;return E(),v("div",O,[b(y,{dataSource:n(a),columns:r,loading:n(f),pagination:!1,"row-selection":n(h),rowKey:n(t)},null,8,["dataSource","loading","row-selection","rowKey"]),F("div",T,[b(u,{ref:"paginationElem","show-quick-jumper":"","show-size-changer":"",current:n(o),"show-total":w=>`共 ${w} 条`,pageSize:n(i),pageSizeOptions:["10","20","30","40","50"],total:n(d),onChange:n(g),onShowSizeChange:n(l)},null,8,["current","show-total","pageSize","total","onChange","onShowSizeChange"])])])}}});export{Z as default};
