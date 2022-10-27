import{Y as G,q as v,d as Y,L as q,h as c,aa as ue,I as E,F as M,a9 as R,$ as de,C as z,x as pe,A as U,ad as ce}from"./index.695c526f.js";import{E as ve,g as fe,e as me,R as ye}from"./LeftOutlined.c74b7419.js";import"./index.fe15ec0b.js";import{i as J}from"./default.f8a0ebc6.js";import{b as ge,B as V}from"./index.af6c39ae.js";import{C as k,B as be}from"./isSymbol.0751cb61.js";var Q=function(){return{arrow:{type:[Boolean,Object],default:void 0},trigger:{type:[Array,String]},overlay:G.any,visible:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},align:{type:Object},getPopupContainer:Function,prefixCls:String,transitionName:String,placement:String,overlayClassName:String,overlayStyle:{type:Object,default:void 0},forceRender:{type:Boolean,default:void 0},mouseEnterDelay:Number,mouseLeaveDelay:Number,openClassName:String,minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},destroyPopupOnHide:{type:Boolean,default:void 0},onVisibleChange:{type:Function},"onUpdate:visible":{type:Function}}},j=ge(),he=function(){return v(v({},Q()),{},{type:j.type,size:String,htmlType:j.htmlType,href:String,disabled:{type:Boolean,default:void 0},prefixCls:String,icon:G.any,title:String,loading:j.loading,onClick:{type:Function}})},Ce=["type","disabled","loading","htmlType","class","overlay","trigger","align","visible","onVisibleChange","placement","href","title","icon","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","onClick","onUpdate:visible"],Pe=V.Group;const S=Y({compatConfig:{MODE:3},name:"ADropdownButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:J(he(),{trigger:"hover",placement:"bottomRight",type:"default"}),slots:["icon","leftButton","rightButton","overlay"],setup:function(e,r){var n=r.slots,f=r.attrs,w=r.emit,h=function(m){w("update:visible",m),w("visibleChange",m)},u=q("dropdown-button",e),N=u.prefixCls,_=u.direction,A=u.getPopupContainer;return function(){var C,m,t=v(v({},e),f),$=t.type,o=$===void 0?"default":$,a=t.disabled,i=t.loading,b=t.htmlType,d=t.class,p=d===void 0?"":d,s=t.overlay,P=s===void 0?(C=n.overlay)===null||C===void 0?void 0:C.call(n):s,x=t.trigger,y=t.align,g=t.visible;t.onVisibleChange;var O=t.placement,B=O===void 0?_.value==="rtl"?"bottomLeft":"bottomRight":O,T=t.href,Z=t.title,I=t.icon,K=I===void 0?((m=n.icon)===null||m===void 0?void 0:m.call(n))||c(ve,null,null):I,ee=t.mouseEnterDelay,te=t.mouseLeaveDelay,ne=t.overlayClassName,oe=t.overlayStyle,ae=t.destroyPopupOnHide,re=t.onClick;t["onUpdate:visible"];var le=ue(t,Ce),ie={align:y,disabled:a,trigger:a?[]:x,placement:B,getPopupContainer:A.value,onVisibleChange:h,mouseEnterDelay:ee,mouseLeaveDelay:te,visible:g,overlayClassName:ne,overlayStyle:oe,destroyPopupOnHide:ae},L=c(V,{type:o,disabled:a,loading:i,onClick:re,htmlType:b,href:T,title:Z},{default:n.default}),H=c(V,{type:o,icon:K},null);return c(Pe,v(v({},le),{},{class:E(N.value,p)}),{default:function(){return[n.leftButton?n.leftButton({button:L}):L,c(D,ie,{default:function(){return[n.rightButton?n.rightButton({button:H}):H]},overlay:function(){return P}})]}})}}});var X=Y({compatConfig:{MODE:3},name:"ADropdown",inheritAttrs:!1,props:J(Q(),{mouseEnterDelay:.15,mouseLeaveDelay:.1,placement:"bottomLeft",trigger:"hover"}),slots:["overlay"],setup:function(e,r){var n=r.slots,f=r.attrs,w=r.emit,h=q("dropdown",e),u=h.prefixCls,N=h.rootPrefixCls,_=h.direction,A=h.getPopupContainer,C=M(function(){var o=e.placement,a=o===void 0?"":o,i=e.transitionName;return i!==void 0?i:a.indexOf("top")>=0?"".concat(N.value,"-slide-down"):"".concat(N.value,"-slide-up")}),m=function(){var a,i,b,d=e.overlay||((a=n.overlay)===null||a===void 0?void 0:a.call(n)),p=Array.isArray(d)?d[0]:d;if(!p)return null;var s=p.props||{};R(!s.mode||s.mode==="vertical","Dropdown",'mode="'.concat(s.mode,`" is not supported for Dropdown's Menu.`));var P=s.selectable,x=P===void 0?!1:P,y=s.expandIcon,g=y===void 0?(i=p.children)===null||i===void 0||(b=i.expandIcon)===null||b===void 0?void 0:b.call(i):y,O=typeof g<"u"&&U(g)?g:c("span",{class:"".concat(u.value,"-menu-submenu-arrow")},[c(ye,{class:"".concat(u.value,"-menu-submenu-arrow-icon")},null)]),B=U(p)?k(p,{mode:"vertical",selectable:x,expandIcon:function(){return O}}):p;return B},t=M(function(){var o=e.placement;if(!o)return _.value==="rtl"?"bottomRight":"bottomLeft";if(o.includes("Center")){var a=o.slice(0,o.indexOf("Center"));return R(!o.includes("Center"),"Dropdown","You are using '".concat(o,"' placement in Dropdown, which is deprecated. Try to use '").concat(a,"' instead.")),a}return o}),$=function(a){w("update:visible",a),w("visibleChange",a)};return function(){var o,a,i=e.arrow,b=e.trigger,d=e.disabled,p=e.overlayClassName,s=(o=n.default)===null||o===void 0?void 0:o.call(n)[0],P=k(s,de({class:E(s==null||(a=s.props)===null||a===void 0?void 0:a.class,z({},"".concat(u.value,"-rtl"),_.value==="rtl"),"".concat(u.value,"-trigger"))},d?{disabled:d}:{})),x=E(p,z({},"".concat(u.value,"-rtl"),_.value==="rtl")),y=d?[]:b,g;y&&y.indexOf("contextmenu")!==-1&&(g=!0);var O=fe({arrowPointAtCenter:pe(i)==="object"&&i.pointAtCenter,autoAdjustOverflow:!0}),B=be(v(v(v({},e),f),{},{builtinPlacements:O,overlayClassName:x,arrow:i,alignPoint:g,prefixCls:u.value,getPopupContainer:A.value,transitionName:C.value,trigger:y,onVisibleChange:$,placement:t.value}),["overlay","onUpdate:visible"]);return c(me,B,{default:function(){return[P]},overlay:m})}}});X.Button=S;const D=X;D.Button=S;D.install=function(l){return l.component(D.name,D),l.component(S.name,S),l};var Oe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"}}]},name:"file",theme:"outlined"};const we=Oe;function W(l){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable}))),n.forEach(function(f){_e(l,f,r[f])})}return l}function _e(l,e,r){return e in l?Object.defineProperty(l,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):l[e]=r,l}var F=function(e,r){var n=W({},e,r.attrs);return c(ce,W({},n,{icon:we}),null)};F.displayName="FileOutlined";F.inheritAttrs=!1;const Te=F;export{D,Te as F};