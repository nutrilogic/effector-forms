var EffectorForm=function(e,r,i){"use strict";const n={store:function({init:e,domain:i,existing:n},o){return n||(i?i.store(e,{and:o,sid:"-efg263"}):r.createStore(e,{and:o,sid:"-dyefrw"}))},event:function({domain:e,existing:i}){return i||(e?e.event({sid:"-y6riru"}):r.createEvent({sid:"-y6rhv4"}))}};function o(e,i,o,s){var t,a,d,u,l,m,c,v,f,h,g,p;const E="function"==typeof i.init?i.init():i.init,y=n.store({domain:o,existing:null===(t=i.units)||void 0===t?void 0:t.$initialValue,init:E},{and:s,name:"$initialValue",sid:"-5pu9ga"}),V=n.store({domain:o,existing:null===(a=i.units)||void 0===a?void 0:a.$value,init:E},{and:s,name:"$value",sid:"-porq6u"}),$=n.store({domain:o,existing:null===(d=i.units)||void 0===d?void 0:d.$errors,init:[]},{and:s,name:"$errors",sid:"-vpp9qr"}),x=$.map((e=>e[0]?e[0]:null)),b=r.combine({and:[y,V,(e,r)=>r!==e],or:{name:"$isDirty",sid:"-ezp144"}}),w=n.store({domain:o,existing:null===(u=i.units)||void 0===u?void 0:u.$isTouched,init:!1},{and:s,name:"$touched",sid:"v7todh"}),F=n.event({domain:o,existing:null===(l=i.units)||void 0===l?void 0:l.onChange},{name:"onChange",sid:"f8bw6"}),T=n.event({domain:o,existing:null===(m=i.units)||void 0===m?void 0:m.onBlur},{name:"onBlur",sid:"yz6h02"}),k=n.event({domain:o,existing:null===(c=i.units)||void 0===c?void 0:c.changed},{name:"changed",sid:"dpwh7u"}),U=n.event({domain:o,existing:null===(v=i.units)||void 0===v?void 0:v.addError},{name:"addError",sid:"fnv0hp"}),D=n.event({domain:o,existing:null===(f=i.units)||void 0===f?void 0:f.validate},{name:"validate",sid:"-pqkms6"}),O=n.event({domain:o,existing:null===(h=i.units)||void 0===h?void 0:h.resetErrors},{name:"resetErrors",sid:"-nh3t6e"}),S=n.event({domain:o,existing:null===(g=i.units)||void 0===g?void 0:g.resetValue},{name:"resetValue",sid:"-kpkb1d"}),q=n.event({domain:o,existing:null===(p=i.units)||void 0===p?void 0:p.reset},{name:"reset",sid:"qq784o"}),B=x.map((e=>null===e));return{changed:k,name:e,$initialValue:y,$value:V,$errors:$,$firstError:x,$isValid:B,$isDirty:b,$isTouched:w,$touched:w,$field:r.combine({and:[{value:V,errors:$,firstError:x,isValid:B,isDirty:b,isTouched:w}],or:{name:"$field",sid:"-j7ubwa"}}),onChange:F,onBlur:T,addError:U,validate:D,set:F,reset:q,resetErrors:O,resetValue:S,filter:i.filter}}function s({$form:e,validateFormEvent:i,submitEvent:n,resetFormEvent:o,resetValues:s,field:t,rules:a,resetErrors:d,formValidationEvents:u,fieldValidationEvents:l},m){const{$value:c,$errors:v,onBlur:f,changed:h,addError:g,validate:p,resetErrors:E,resetValue:y,reset:V}=t,$="function"==typeof a?r.createStore([],{and:m,name:"rulesSources",sid:"-6iy065"}):r.combine({and:[a.map((({source:e})=>e||r.createStore(null,{and:m,name:"and",sid:"8dgoh8"})))],or:{name:"rulesSources",sid:"-61wdry"}}),x=(b=a,(e,r,i)=>{const n=[],o="function"==typeof b?b(e,r):b;for(let s=0;s<o.length;s++){const t=o[s],a=i?i[s]:null,d=t.validator(e,r,a);"boolean"!=typeof d||d||n.push({rule:t.name,errorText:t.errorText,value:e}),"object"!=typeof d||d.isValid||n.push({rule:t.name,errorText:d.errorText,value:e})}return n});var b;const w=[...u,...l],F=[];if(w.includes("submit")){const i=r.sample({and:[{source:r.combine({and:[{fieldValue:c,form:e,rulesSources:$}],or:{name:"source",sid:"nh4sxl"}}),clock:n}],or:{name:"validationTrigger",sid:"npopa3"}});F.push(i)}w.includes("blur")&&F.push(r.sample({and:[{source:r.combine({and:[{fieldValue:c,form:e,rulesSources:$}],or:{name:"source",sid:"-wejcfb"}}),clock:f}],or:{sid:"-99xq5c"}})),w.includes("change")&&F.push(r.sample({and:[{source:r.combine({and:[{fieldValue:c,form:e,rulesSources:$}],or:{name:"source",sid:"-hq527a"}}),clock:r.merge([h,y,s],{name:"clock",sid:"-p8y31z"})}],or:{sid:"5egk2p"}})),F.push(r.sample({and:[{source:r.combine({and:[{fieldValue:c,form:e,rulesSources:$}],or:{name:"source",sid:"-3iseyz"}}),clock:p}],or:{sid:"jlt7b0"}})),F.push(r.sample({and:[{source:r.combine({and:[{fieldValue:c,form:e,rulesSources:$}],or:{name:"source",sid:"a7imgo"}}),clock:i}],or:{sid:"xc48qn"}}));const T=r.sample({and:[{source:c,clock:g,fn:(e,{rule:r,errorText:i})=>({rule:r,value:e,errorText:i})}],or:{name:"addErrorWithValue",sid:"-ssvkbi"}});v.on(F,((e,{form:r,fieldValue:i,rulesSources:n})=>x(i,r,n))).on(T,((e,r)=>[r,...e])).reset(E,o,V,d),w.includes("change")||v.reset(h)}function t({$initialValue:e,$value:i,$touched:n,onChange:o,changed:s,name:t,reset:a,resetValue:d,filter:u},l,m,c,v,f){n.on(s,(()=>!0)).reset(a,m,c),r.guard({and:[{source:o,filter:u||(()=>!0),target:s}],or:{sid:"-y6i1k1"}}),e.on(f,((e,r)=>r.hasOwnProperty(t)?r[t]:e)),r.sample({and:[{clock:[a,d,v,m],source:e,target:i}],or:{sid:"-y23ot5"}}),i.on(s,((e,r)=>r)).on(l,((e,r)=>r.hasOwnProperty(t)?r[t]:e))}function a(e){const{value:r,errors:n,firstError:o,isValid:s,isDirty:t,isTouched:a}=i.useUnit(e.$field);return{name:e.name,value:r,errors:n,firstError:o,isValid:s,isDirty:t,touched:a,isTouched:a,onChange:i.useUnit(e.onChange),onBlur:i.useUnit(e.onBlur),addError:i.useUnit(e.addError),validate:i.useUnit(e.validate),reset:i.useUnit(e.reset),set:i.useUnit(e.onChange),resetErrors:i.useUnit(e.resetErrors),hasError:()=>null!==o,errorText:e=>o?e&&e[o.rule]?e[o.rule]:o.errorText||"":""}}return e.createForm=function(e){const{filter:i,domain:a,fields:d,validateOn:u,units:l}=e,m={},c=[],v=[];for(const e in d){if(!d.hasOwnProperty(e))continue;const i=d[e],n=r.withFactory({sid:"rtd41h",fn:()=>o(e,i,a,{sid:e}),name:"field",method:"createField"});m[e]=n,c.push(n.$isDirty),v.push(n.$touched)}const f=function(e){const i={};for(const r in e)e.hasOwnProperty(r)&&(i[r]=e[r].$value);return r.combine({and:[i],or:{sid:"39yu4w"}})}(m),h=function(e){const i=[];for(const r in e){if(!e.hasOwnProperty(r))continue;const{$firstError:n}=e[r];i.push(n)}return r.combine({and:[i],or:{name:"$firstErrors",sid:"-1vosn1"}}).map((e=>e.every((e=>null===e))))}(m),g=i?r.combine({and:[h,i,(e,r)=>e&&r],or:{name:"$isFormValid",sid:"-ovgxdl"}}):h,p=r.combine({and:[c],or:{name:"$isDirty",sid:"-pfy1ud"}}).map((e=>e.some(Boolean))),E=r.combine({and:[v],or:{name:"$touched",sid:"tnl99w"}}).map((e=>e.some(Boolean))),y=r.combine({and:[{isValid:h,isDirty:p,touched:E}],or:{name:"$meta",sid:"-9ioo9w"}}),V=n.event({domain:a,existing:null==l?void 0:l.validate},{name:"validate",sid:"wz51wd"}),$=n.event({domain:a,existing:null==l?void 0:l.submit},{name:"submitForm",sid:"-6yv0jz"}),x=n.event({domain:a,existing:null==l?void 0:l.formValidated},{name:"formValidated",sid:"o8v59j"}),b=n.event({domain:a,existing:null==l?void 0:l.setInitial},{name:"setInitial",sid:"miaxm6"}),w=n.event({domain:a,existing:null==l?void 0:l.setForm},{name:"setForm",sid:"-myvat3"}),F=n.event({domain:a,existing:null==l?void 0:l.reset},{name:"resetForm",sid:"-khripr"}),T=n.event({domain:a,existing:null==l?void 0:l.resetValues},{name:"resetValues",sid:"ygut7h"}),k=n.event({domain:a,existing:null==l?void 0:l.resetErrors},{name:"resetErrors",sid:"-wgu0qt"}),U=n.event({domain:a,existing:null==l?void 0:l.resetTouched},{name:"resetTouched",sid:"x0xold"}),D=r.sample({and:[{source:f,clock:$}],or:{name:"submitWithFormData",sid:"-6a1prv"}}),O=r.sample({and:[{source:f,clock:V}],or:{name:"validateWithFormData",sid:"-wefxh0"}});for(const e in m){if(!m.hasOwnProperty(e))continue;const i=d[e],n=m[e];r.withFactory({sid:"oj3q0b",fn:()=>t(n,w,F,U,T,b),name:"none",method:"bindChangeEvent"}),i.rules&&r.withFactory({sid:"okr3se",fn:()=>s({$form:f,rules:i.rules,submitEvent:$,resetFormEvent:F,resetValues:T,resetErrors:k,validateFormEvent:V,field:n,formValidationEvents:u||["submit"],fieldValidationEvents:i.validateOn?i.validateOn:[]},{sid:e}),name:"none",method:"bindValidation"})}return r.guard({and:[{source:D,filter:g,target:x}],or:{sid:"2vvi0m"}}),r.guard({and:[{source:O,filter:g,target:x}],or:{sid:"2z69ks"}}),{fields:m,$values:f,$eachValid:h,$isValid:h,$isDirty:p,$touched:E,$meta:y,submit:$,validate:V,resetTouched:U,reset:F,resetValues:T,resetErrors:k,setInitial:b,setForm:w,set:w,formValidated:x}},e.useField=a,e.useForm=function(e){const r={},n={};for(const i in e.fields){if(!e.fields.hasOwnProperty(i))continue;const o=a(e.fields[i]);r[i]=o,n[i]=o.value}const{isValid:o,isDirty:s,touched:t}=i.useUnit(e.$meta);return{fields:r,values:n,hasError:e=>e?!!r[e]&&Boolean(r[e].firstError):!o,eachValid:o,isValid:o,isDirty:s,isTouched:t,touched:t,errors:e=>r[e]?r[e].errors:[],error:e=>r[e]?r[e].firstError:null,errorText:(e,i)=>{const n=r[e];return n&&n.firstError?i&&i[n.firstError.rule]?i[n.firstError.rule]:n.firstError.errorText||"":""},reset:i.useUnit(e.reset),setInitial:i.useUnit(e.setInitial),submit:i.useUnit(e.submit),setForm:i.useUnit(e.setForm),set:i.useUnit(e.setForm),formValidated:i.useUnit(e.formValidated)}},Object.defineProperty(e,"__esModule",{value:!0}),e}({},effector,effectorReact);
//# sourceMappingURL=effector-forms.iife.js.map
