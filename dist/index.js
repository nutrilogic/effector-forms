import{combine as e,createStore as r,createEvent as o,sample as t,guard as i}from"effector";import{useStore as n}from"effector-react";const s={store:function({init:e,domain:o,existing:t}){return t||(o?o.store(e):r(e))},event:function({domain:e,existing:r}){return r||(e?e.event():o())}};function l(e,r,o){var t,i,n,l,u,a,d,c,v,f;const m="function"==typeof r.init?r.init():r.init,h=s.store({domain:o,existing:null===(t=r.units)||void 0===t?void 0:t.$value,init:m}),$=s.store({domain:o,existing:null===(i=r.units)||void 0===i?void 0:i.$errors,init:[]}),g=$.map(e=>e[0]?e[0]:null),E=h.map(e=>e!==m),p=s.store({domain:o,existing:null===(n=r.units)||void 0===n?void 0:n.$isTouched,init:!1}),x=s.event({domain:o,existing:null===(l=r.units)||void 0===l?void 0:l.onChange}),V=s.event({domain:o,existing:null===(u=r.units)||void 0===u?void 0:u.onBlur}),y=s.event({domain:o,existing:null===(a=r.units)||void 0===a?void 0:a.changed}),T=s.event({domain:o,existing:null===(d=r.units)||void 0===d?void 0:d.addError}),b=s.event({domain:o,existing:null===(c=r.units)||void 0===c?void 0:c.validate}),F=s.event({domain:o,existing:null===(v=r.units)||void 0===v?void 0:v.resetErrors}),O=s.event({domain:o,existing:null===(f=r.units)||void 0===f?void 0:f.reset});return{changed:y,name:e,$value:h,$errors:$,$firstError:g,$isValid:g.map(e=>null===e),$isDirty:E,$isTouched:p,$touched:p,onChange:x,onBlur:V,addError:T,validate:b,set:x,reset:O,resetErrors:F,filter:r.filter}}function u({$form:o,validateFormEvent:i,submitEvent:n,resetFormEvent:s,field:l,rules:u,formValidationEvents:a,fieldValidationEvents:d}){const{$value:c,$errors:v,onBlur:f,changed:m,addError:h,validate:$,resetErrors:g,reset:E}=l,p=e(u.map(({source:e})=>e||r(null))),x=function(e){return(r,o,t)=>{const i=[];for(let n=0;n<e.length;n++){const s=e[n],l=t?t[n]:null,u=s.validator(r,o,l);"boolean"!=typeof u||u||i.push({rule:s.name,errorText:s.errorText,value:r}),"object"!=typeof u||u.isValid||i.push({rule:s.name,errorText:u.errorText,value:r})}return i}}(u),V=[...a,...d],y=[];V.includes("submit")&&y.push(t({source:e({fieldValue:c,form:o,rulesSources:p}),clock:n})),V.includes("blur")&&y.push(t({source:e({fieldValue:c,form:o,rulesSources:p}),clock:f})),V.includes("change")&&y.push(t({source:e({fieldValue:c,form:o,rulesSources:p}),clock:m})),y.push(t({source:e({fieldValue:c,form:o,rulesSources:p}),clock:$})),y.push(t({source:e({fieldValue:c,form:o,rulesSources:p}),clock:i}));const T=t({source:c,clock:h,fn:(e,{rule:r,errorText:o})=>({rule:r,value:e,errorText:o})});v.on(y,(e,{form:r,fieldValue:o,rulesSources:t})=>x(o,r,t)).on(T,(e,r)=>[r,...e]).reset(g,s,E),V.includes("change")||v.reset(m)}function a({$value:e,$touched:r,onChange:o,changed:t,name:n,reset:s,filter:l},u,a,d){r.on(t,()=>!0).reset(s,a,d),i({source:o,filter:l||(()=>!0),target:t}),e.on(t,(e,r)=>r).on(u,(e,r)=>r.hasOwnProperty(n)?r[n]:e).reset(s,a)}function d(r){const{filter:o,domain:n,fields:d,validateOn:c,units:v}=r,f={},m=[],h=[];for(const e in d){if(!d.hasOwnProperty(e))continue;const r=l(e,d[e],n);f[e]=r,m.push(r.$isDirty),h.push(r.$touched)}const $=function(r){const o={};for(const e in r)r.hasOwnProperty(e)&&(o[e]=r[e].$value);return e(o)}(f),g=function(r){const o=[];for(const e in r){if(!r.hasOwnProperty(e))continue;const{$firstError:t}=r[e];o.push(t)}return e(o).map(e=>e.every(e=>null===e))}(f),E=o?e(g,o,(e,r)=>e&&r):g,p=e(m).map(e=>e.some(Boolean)),x=e(h).map(e=>e.some(Boolean)),V=s.event({domain:n,existing:null==v?void 0:v.validate}),y=s.event({domain:n,existing:null==v?void 0:v.submit}),T=s.event({domain:n,existing:null==v?void 0:v.formValidated}),b=s.event({domain:n,existing:null==v?void 0:v.setForm}),F=s.event({domain:n,existing:null==v?void 0:v.reset}),O=s.event({domain:n,existing:null==v?void 0:v.resetTouched}),B=t($,y);for(const e in f){if(!f.hasOwnProperty(e))continue;const r=d[e],o=f[e];a(o,b,F,O),r.rules&&u({$form:$,rules:r.rules,submitEvent:y,resetFormEvent:F,validateFormEvent:V,field:o,formValidationEvents:c||["submit"],fieldValidationEvents:r.validateOn?r.validateOn:[]})}return i({source:B,filter:E,target:T}),{fields:f,$values:$,$eachValid:g,$isValid:g,$isDirty:p,$touched:x,submit:y,validate:V,resetTouched:O,reset:F,setForm:b,set:b,formValidated:T}}function c(e){const r=n(e.$value),o=n(e.$errors),t=n(e.$firstError),i=n(e.$isValid),s=n(e.$isDirty),l=n(e.$touched);return{name:e.name,value:r,errors:o,firstError:t,isValid:i,isDirty:s,touched:l,isTouched:l,onChange:e.onChange,onBlur:e.onBlur,addError:e.addError,validate:e.validate,reset:e.reset,set:e.onChange,resetErrors:e.resetErrors,hasError:()=>null!==t,errorText:e=>t?e&&e[t.rule]?e[t.rule]:t.errorText||"":""}}function v(e){const r={};for(const o in e.fields){if(!e.fields.hasOwnProperty(o))continue;const t=e.fields[o];r[o]=c(t)}const o=n(e.$values),t=n(e.$eachValid),i=n(e.$isDirty),s=n(e.$touched);return{fields:r,values:o,hasError:e=>e?!!r[e]&&Boolean(r[e].firstError):!t,eachValid:t,isValid:t,isDirty:i,isTouched:s,touched:s,errors:e=>r[e]?r[e].errors:[],error:e=>r[e]?r[e].firstError:null,reset:e.reset,errorText:(e,o)=>{const t=r[e];return t&&t.firstError?o&&o[t.firstError.rule]?o[t.firstError.rule]:t.firstError.errorText||"":""},submit:e.submit,setForm:e.setForm,set:e.setForm,formValidated:e.formValidated}}export{d as createForm,c as useField,v as useForm};
//# sourceMappingURL=index.js.map