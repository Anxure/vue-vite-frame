import{B as l}from"./index.6744f811.js";import{d as b,J as d,C as g,A as u,g as C,a2 as h}from"./index.a876c650.js";function v(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,n,r){return n&&v(e.prototype,n),r&&v(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function w(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _=y(function e(n){w(this,e),this.error=new Error("unreachable case: ".concat(JSON.stringify(n)))}),x=function(){return{prefixCls:String,size:{type:String}}};const c=b({compatConfig:{MODE:3},name:"AButtonGroup",props:x(),setup:function(n,r){var a=r.slots,s=d("btn-group",n),i=s.prefixCls,m=s.direction,p=g(function(){var t,f=n.size,o="";switch(f){case"large":o="lg";break;case"small":o="sm";break;case"middle":case void 0:break;default:console.warn(new _(f).error)}return t={},u(t,"".concat(i.value),!0),u(t,"".concat(i.value,"-").concat(o),o),u(t,"".concat(i.value,"-rtl"),m.value==="rtl"),t});return function(){var t;return C("div",{class:p.value},[h((t=a.default)===null||t===void 0?void 0:t.call(a))])}}});l.Group=c;l.install=function(e){return e.component(l.name,l),e.component(c.name,c),e};
