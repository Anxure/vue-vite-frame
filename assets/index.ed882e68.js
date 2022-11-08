import{d as I,a as V,B as T,J as w,a9 as E,_ as G,G as A,A as k,g as m,X as j,K as M,D as W,W as J,Y as K}from"./index.2c979cb5.js";import{V as X}from"./index.f17b5f4b.js";import{u as U}from"./debounce.3ba3ae5c.js";import{B as Y}from"./isSymbol.f1e75343.js";var $=["prefixCls","id"],z=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:j.any,name:String,id:String,autofocus:{type:Boolean,default:void 0},onChange:Function,onFocus:Function,onBlur:Function,onClick:Function,"onUpdate:checked":Function,"onUpdate:value":Function}};const r=I({compatConfig:{MODE:3},name:"ARadio",props:z(),setup:function(e,f){var d=f.emit,h=f.expose,C=f.slots,i=U(),l=V(),n=T("radioGroupContext",void 0),b=w("radio",e),o=b.prefixCls,x=b.direction,B=function(){l.value.focus()},s=function(){l.value.blur()};h({focus:B,blur:s});var p=function(t){var g=t.target.checked;d("update:checked",g),d("update:value",g),d("change",t),i.onFieldChange()},_=function(t){d("change",t),n&&n.onRadioChange&&n.onRadioChange(t)};return function(){var a,t=n;e.prefixCls;var g=e.id,y=g===void 0?i.id.value:g,F=E(e,$),u=G({prefixCls:o.value,id:y},Y(F,["onUpdate:checked","onUpdate:value"]));t?(u.name=t.props.name,u.onChange=_,u.checked=e.value===t.stateValue.value,u.disabled=e.disabled||t.props.disabled):u.onChange=p;var S=A((a={},k(a,"".concat(o.value,"-wrapper"),!0),k(a,"".concat(o.value,"-wrapper-checked"),u.checked),k(a,"".concat(o.value,"-wrapper-disabled"),u.disabled),k(a,"".concat(o.value,"-wrapper-rtl"),x.value==="rtl"),a));return m("label",{class:S},[m(X,G(G({},u),{},{type:"radio",ref:l}),null),C.default&&m("span",null,[C.default()])])}}});var q=J("large","default","small"),H=function(){return{prefixCls:String,value:j.any,size:j.oneOf(q),options:{type:Array},disabled:{type:Boolean,default:void 0},name:String,buttonStyle:{type:String,default:"outline"},id:String,optionType:{type:String,default:"default"},onChange:Function,"onUpdate:value":Function}};const L=I({compatConfig:{MODE:3},name:"ARadioGroup",props:H(),setup:function(e,f){var d=f.slots,h=f.emit,C=U(),i=w("radio",e),l=i.prefixCls,n=i.direction,b=i.size,o=V(e.value),x=V(!1);M(function(){return e.value},function(s){o.value=s,x.value=!1});var B=function(p){var _=o.value,a=p.target.value;"value"in e||(o.value=a),!x.value&&a!==_&&(x.value=!0,h("update:value",a),h("change",p),C.onFieldChange()),K(function(){x.value=!1})};return W("radioGroupContext",{onRadioChange:B,stateValue:o,props:e}),function(){var s,p=e.options,_=e.optionType,a=e.buttonStyle,t=e.id,g=t===void 0?C.id.value:t,y="".concat(l.value,"-group"),F=A(y,"".concat(y,"-").concat(a),(s={},k(s,"".concat(y,"-").concat(b.value),b.value),k(s,"".concat(y,"-rtl"),n.value==="rtl"),s)),u=null;if(p&&p.length>0){var S=_==="button"?"".concat(l.value,"-button"):l.value;u=p.map(function(v){if(typeof v=="string"||typeof v=="number")return m(r,{key:v,prefixCls:S,disabled:e.disabled,value:v,checked:o.value===v},{default:function(){return[v]}});var P=v.value,D=v.disabled,N=v.label;return m(r,{key:"radio-group-value-options-".concat(P),prefixCls:S,disabled:D||e.disabled,value:P,checked:o.value===P},{default:function(){return[N]}})})}else{var R;u=(R=d.default)===null||R===void 0?void 0:R.call(d)}return m("div",{class:F,id:g},[u])}}}),Q=I({compatConfig:{MODE:3},name:"ARadioButton",props:z(),setup:function(e,f){var d=f.slots,h=w("radio-button",e),C=h.prefixCls,i=T("radioGroupContext",void 0);return function(){var l,n=G(G({},e),{},{prefixCls:C.value});return i&&(n.onChange=i.onRadioChange,n.checked=n.value===i.stateValue.value,n.disabled=n.disabled||i.props.disabled),m(r,n,{default:function(){return[(l=d.default)===null||l===void 0?void 0:l.call(d)]}})}}});r.Group=L;r.Button=Q;r.install=function(c){return c.component(r.name,r),c.component(r.Group.name,r.Group),c.component(r.Button.name,r.Button),c};export{r as R,L as _};
