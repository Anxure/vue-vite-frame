import{X as W,_ as v,d as J,J as X,g as p,a9 as ue,G as E,C as M,a8 as R,Z as de,A as z,v as ce,y as U,ac as pe}from"./index.f9a9aa89.js";import{E as ve,g as fe,e as me,R as ye}from"./LeftOutlined.283add70.js";import"./index.a9f9fa29.js";import{i as Y}from"./default.691b2434.js";import{b as ge,B as V}from"./index.34fb9200.js";import{C as k,B as be}from"./isSymbol.f9ab199c.js";var Z=function(){return{arrow:{type:[Boolean,Object],default:void 0},trigger:{type:[Array,String]},overlay:W.any,visible:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},align:{type:Object},getPopupContainer:Function,prefixCls:String,transitionName:String,placement:String,overlayClassName:String,overlayStyle:{type:Object,default:void 0},forceRender:{type:Boolean,default:void 0},mouseEnterDelay:Number,mouseLeaveDelay:Number,openClassName:String,minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},destroyPopupOnHide:{type:Boolean,default:void 0},onVisibleChange:{type:Function},"onUpdate:visible":{type:Function}}},j=ge(),he=function(){return v(v({},Z()),{},{type:j.type,size:String,htmlType:j.htmlType,href:String,disabled:{type:Boolean,default:void 0},prefixCls:String,icon:W.any,title:String,loading:j.loading,onClick:{type:Function}})},Ce=["type","disabled","loading","htmlType","class","overlay","trigger","align","visible","onVisibleChange","placement","href","title","icon","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","onClick","onUpdate:visible"],Pe=V.Group;const S=J({compatConfig:{MODE:3},name:"ADropdownButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:Y(he(),{trigger:"hover",placement:"bottomRight",type:"default"}),slots:["icon","leftButton","rightButton","overlay"],setup:function(e,r){var n=r.slots,f=r.attrs,w=r.emit,h=function(m){w("update:visible",m),w("visibleChange",m)},u=X("dropdown-button",e),x=u.prefixCls,_=u.direction,A=u.getPopupContainer;return function(){var C,m,t=v(v({},e),f),$=t.type,o=$===void 0?"default":$,a=t.disabled,i=t.loading,b=t.htmlType,d=t.class,c=d===void 0?"":d,s=t.overlay,P=s===void 0?(C=n.overlay)===null||C===void 0?void 0:C.call(n):s,B=t.trigger,y=t.align,g=t.visible;t.onVisibleChange;var O=t.placement,D=O===void 0?_.value==="rtl"?"bottomLeft":"bottomRight":O,T=t.href,Q=t.title,I=t.icon,K=I===void 0?((m=n.icon)===null||m===void 0?void 0:m.call(n))||p(ve,null,null):I,ee=t.mouseEnterDelay,te=t.mouseLeaveDelay,ne=t.overlayClassName,oe=t.overlayStyle,ae=t.destroyPopupOnHide,re=t.onClick;t["onUpdate:visible"];var le=ue(t,Ce),ie={align:y,disabled:a,trigger:a?[]:B,placement:D,getPopupContainer:A.value,onVisibleChange:h,mouseEnterDelay:ee,mouseLeaveDelay:te,visible:g,overlayClassName:ne,overlayStyle:oe,destroyPopupOnHide:ae},L=p(V,{type:o,disabled:a,loading:i,onClick:re,htmlType:b,href:T,title:Q},{default:n.default}),H=p(V,{type:o,icon:K},null);return p(Pe,v(v({},le),{},{class:E(x.value,c)}),{default:function(){return[n.leftButton?n.leftButton({button:L}):L,p(N,ie,{default:function(){return[n.rightButton?n.rightButton({button:H}):H]},overlay:function(){return P}})]}})}}});var q=J({compatConfig:{MODE:3},name:"ADropdown",inheritAttrs:!1,props:Y(Z(),{mouseEnterDelay:.15,mouseLeaveDelay:.1,placement:"bottomLeft",trigger:"hover"}),slots:["overlay"],setup:function(e,r){var n=r.slots,f=r.attrs,w=r.emit,h=X("dropdown",e),u=h.prefixCls,x=h.rootPrefixCls,_=h.direction,A=h.getPopupContainer,C=M(function(){var o=e.placement,a=o===void 0?"":o,i=e.transitionName;return i!==void 0?i:a.indexOf("top")>=0?"".concat(x.value,"-slide-down"):"".concat(x.value,"-slide-up")}),m=function(){var a,i,b,d=e.overlay||((a=n.overlay)===null||a===void 0?void 0:a.call(n)),c=Array.isArray(d)?d[0]:d;if(!c)return null;var s=c.props||{};R(!s.mode||s.mode==="vertical","Dropdown",'mode="'.concat(s.mode,`" is not supported for Dropdown's Menu.`));var P=s.selectable,B=P===void 0?!1:P,y=s.expandIcon,g=y===void 0?(i=c.children)===null||i===void 0||(b=i.expandIcon)===null||b===void 0?void 0:b.call(i):y,O=typeof g<"u"&&U(g)?g:p("span",{class:"".concat(u.value,"-menu-submenu-arrow")},[p(ye,{class:"".concat(u.value,"-menu-submenu-arrow-icon")},null)]),D=U(c)?k(c,{mode:"vertical",selectable:B,expandIcon:function(){return O}}):c;return D},t=M(function(){var o=e.placement;if(!o)return _.value==="rtl"?"bottomRight":"bottomLeft";if(o.includes("Center")){var a=o.slice(0,o.indexOf("Center"));return R(!o.includes("Center"),"Dropdown","You are using '".concat(o,"' placement in Dropdown, which is deprecated. Try to use '").concat(a,"' instead.")),a}return o}),$=function(a){w("update:visible",a),w("visibleChange",a)};return function(){var o,a,i=e.arrow,b=e.trigger,d=e.disabled,c=e.overlayClassName,s=(o=n.default)===null||o===void 0?void 0:o.call(n)[0],P=k(s,de({class:E(s==null||(a=s.props)===null||a===void 0?void 0:a.class,z({},"".concat(u.value,"-rtl"),_.value==="rtl"),"".concat(u.value,"-trigger"))},d?{disabled:d}:{})),B=E(c,z({},"".concat(u.value,"-rtl"),_.value==="rtl")),y=d?[]:b,g;y&&y.indexOf("contextmenu")!==-1&&(g=!0);var O=fe({arrowPointAtCenter:ce(i)==="object"&&i.pointAtCenter,autoAdjustOverflow:!0}),D=be(v(v(v({},e),f),{},{builtinPlacements:O,overlayClassName:B,arrow:i,alignPoint:g,prefixCls:u.value,getPopupContainer:A.value,transitionName:C.value,trigger:y,onVisibleChange:$,placement:t.value}),["overlay","onUpdate:visible"]);return p(me,D,{default:function(){return[P]},overlay:m})}}});q.Button=S;const N=q;N.Button=S;N.install=function(l){return l.component(N.name,N),l.component(S.name,S),l};var Oe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"}}]},name:"file",theme:"outlined"};const we=Oe;function G(l){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable}))),n.forEach(function(f){_e(l,f,r[f])})}return l}function _e(l,e,r){return e in l?Object.defineProperty(l,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):l[e]=r,l}var F=function(e,r){var n=G({},e,r.attrs);return p(pe,G({},n,{icon:we}),null)};F.displayName="FileOutlined";F.inheritAttrs=!1;const Te=F;export{N as D,Te as F};
