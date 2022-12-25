var EffectorForm=function(e,i,r){"use strict";const n={store:function({init:e,domain:r,existing:n},s){return n||(r?r.store(e,{and:s,sid:"-efg263"}):i.createStore(e,{and:s,sid:"-dyefrw"}))},event:function({domain:e,existing:r}){return r||(e?e.event({sid:"-y6riru"}):i.createEvent({sid:"-y6rhv4"}))}};function s(e,r,s){var o,t,a,d,l,u,m,c,v,f,h,g;const p="function"==typeof r.init?r.init():r.init,$=n.store({domain:s,existing:null===(o=r.units)||void 0===o?void 0:o.$initialValue,init:p},{and:{sid:`${e}-initialValue`},name:"$initialValue",sid:"-5pu9ga"}),E=n.store({domain:s,existing:null===(t=r.units)||void 0===t?void 0:t.$value,init:p},{and:{sid:`${e}-value`},name:"$value",sid:"-porq6u"}),V=n.store({domain:s,existing:null===(a=r.units)||void 0===a?void 0:a.$errors,init:[]},{and:{sid:`${e}-errors`},name:"$errors",sid:"-vpp9qr"}),y=V.map((e=>e[0]?e[0]:null)),x=i.combine({and:[$,E,(e,i)=>i!==e],or:{name:"$isDirty",sid:"-ezp144"}}),b=n.store({domain:s,existing:null===(d=r.units)||void 0===d?void 0:d.$isTouched,init:!1},{and:`${e}-initialValue`,name:"$touched",sid:"v7todh"}),F=n.event({domain:s,existing:null===(l=r.units)||void 0===l?void 0:l.onChange},{name:"onChange",sid:"f8bw6"}),w=n.event({domain:s,existing:null===(u=r.units)||void 0===u?void 0:u.onBlur},{name:"onBlur",sid:"yz6h02"}),k=n.event({domain:s,existing:null===(m=r.units)||void 0===m?void 0:m.changed},{name:"changed",sid:"dpwh7u"}),T=n.event({domain:s,existing:null===(c=r.units)||void 0===c?void 0:c.addError},{name:"addError",sid:"fnv0hp"}),U=n.event({domain:s,existing:null===(v=r.units)||void 0===v?void 0:v.validate},{name:"validate",sid:"-pqkms6"}),D=n.event({domain:s,existing:null===(f=r.units)||void 0===f?void 0:f.resetErrors},{name:"resetErrors",sid:"-nh3t6e"}),O=n.event({domain:s,existing:null===(h=r.units)||void 0===h?void 0:h.resetValue},{name:"resetValue",sid:"-kpkb1d"}),S=n.event({domain:s,existing:null===(g=r.units)||void 0===g?void 0:g.reset},{name:"reset",sid:"qq784o"}),q=y.map((e=>null===e));return{changed:k,name:e,$initialValue:$,$value:E,$errors:V,$firstError:y,$isValid:q,$isDirty:x,$isTouched:b,$touched:b,$field:i.combine({and:[{value:E,errors:V,firstError:y,isValid:q,isDirty:x,isTouched:b}],or:{name:"$field",sid:"-j7ubwa"}}),onChange:F,onBlur:w,addError:T,validate:U,set:F,reset:S,resetErrors:D,resetValue:O,filter:r.filter}}function o({$form:e,validateFormEvent:r,submitEvent:n,resetFormEvent:s,resetValues:o,field:t,rules:a,resetErrors:d,formValidationEvents:l,fieldValidationEvents:u},m){const{$value:c,$errors:v,onBlur:f,changed:h,addError:g,validate:p,resetErrors:$,resetValue:E,reset:V}=t,y="function"==typeof a?i.createStore([],{and:m,name:"rulesSources",sid:"-6iy065"}):i.combine({and:[a.map((({source:e})=>e||i.createStore(null,{and:m,name:"and",sid:"8dgoh8"})))],or:{name:"rulesSources",sid:"-61wdry"}}),x=(b=a,(e,i,r)=>{const n=[],s="function"==typeof b?b(e,i):b;for(let o=0;o<s.length;o++){const t=s[o],a=r?r[o]:null,d=t.validator(e,i,a);"boolean"!=typeof d||d||n.push({rule:t.name,errorText:t.errorText,value:e}),"object"!=typeof d||d.isValid||n.push({rule:t.name,errorText:d.errorText,value:e})}return n});var b;const F=[...l,...u],w=[];if(F.includes("submit")){const r=i.sample({and:[{source:i.combine({and:[{fieldValue:c,form:e,rulesSources:y}],or:{name:"source",sid:"nh4sxl"}}),clock:n}],or:{name:"validationTrigger",sid:"npopa3"}});w.push(r)}F.includes("blur")&&w.push(i.sample({and:[{source:i.combine({and:[{fieldValue:c,form:e,rulesSources:y}],or:{name:"source",sid:"-wejcfb"}}),clock:f}],or:{sid:"-99xq5c"}})),F.includes("change")&&w.push(i.sample({and:[{source:i.combine({and:[{fieldValue:c,form:e,rulesSources:y}],or:{name:"source",sid:"-hq527a"}}),clock:i.merge([h,E,o],{name:"clock",sid:"-p8y31z"})}],or:{sid:"5egk2p"}})),w.push(i.sample({and:[{source:i.combine({and:[{fieldValue:c,form:e,rulesSources:y}],or:{name:"source",sid:"-3iseyz"}}),clock:p}],or:{sid:"jlt7b0"}})),w.push(i.sample({and:[{source:i.combine({and:[{fieldValue:c,form:e,rulesSources:y}],or:{name:"source",sid:"a7imgo"}}),clock:r}],or:{sid:"xc48qn"}}));const k=i.sample({and:[{source:c,clock:g,fn:(e,{rule:i,errorText:r})=>({rule:i,value:e,errorText:r})}],or:{name:"addErrorWithValue",sid:"-ssvkbi"}});v.on(w,((e,{form:i,fieldValue:r,rulesSources:n})=>x(r,i,n))).on(k,((e,i)=>[i,...e])).reset($,s,V,d),F.includes("change")||v.reset(h)}function t({$initialValue:e,$value:r,$touched:n,onChange:s,changed:o,name:t,reset:a,resetValue:d,filter:l},u,m,c,v,f){n.on(o,(()=>!0)).reset(a,m,c),i.guard({and:[{source:s,filter:l||(()=>!0),target:o}],or:{sid:"-y6i1k1"}}),e.on(f,((e,i)=>i.hasOwnProperty(t)?i[t]:e)),i.sample({and:[{clock:[a,d,v,m],source:e,target:r}],or:{sid:"-y23ot5"}}),r.on(o,((e,i)=>i)).on(u,((e,i)=>i.hasOwnProperty(t)?i[t]:e))}function a(e){const{value:i,errors:n,firstError:s,isValid:o,isDirty:t,isTouched:a}=r.useUnit(e.$field);return{name:e.name,value:i,errors:n,firstError:s,isValid:o,isDirty:t,touched:a,isTouched:a,onChange:r.useUnit(e.onChange),onBlur:r.useUnit(e.onBlur),addError:r.useUnit(e.addError),validate:r.useUnit(e.validate),reset:r.useUnit(e.reset),set:r.useUnit(e.onChange),resetErrors:r.useUnit(e.resetErrors),hasError:()=>null!==s,errorText:e=>s?e&&e[s.rule]?e[s.rule]:s.errorText||"":""}}return e.createForm=function(e){const{filter:r,domain:a,fields:d,validateOn:l,units:u}=e,m={},c=[],v=[];for(const e in d){if(!d.hasOwnProperty(e))continue;const r=d[e],n=i.withFactory({sid:"rtd41h",fn:()=>s(e,r,a),name:"field",method:"createField"});m[e]=n,c.push(n.$isDirty),v.push(n.$touched)}const f=function(e){const r={};for(const i in e)e.hasOwnProperty(i)&&(r[i]=e[i].$value);return i.combine({and:[r],or:{sid:"39yu4w"}})}(m),h=function(e){const r=[];for(const i in e){if(!e.hasOwnProperty(i))continue;const{$firstError:n}=e[i];r.push(n)}return i.combine({and:[r],or:{name:"$firstErrors",sid:"-1vosn1"}}).map((e=>e.every((e=>null===e))))}(m),g=r?i.combine({and:[h,r,(e,i)=>e&&i],or:{name:"$isFormValid",sid:"-ptk65z"}}):h,p=i.combine({and:[c],or:{name:"$isDirty",sid:"-qe1amr"}}).map((e=>e.some(Boolean))),$=i.combine({and:[v],or:{name:"$touched",sid:"spi0hi"}}).map((e=>e.some(Boolean))),E=i.combine({and:[{isValid:h,isDirty:p,touched:$}],or:{name:"$meta",sid:"-agrx2a"}}),V=n.event({domain:a,existing:null==u?void 0:u.validate},{name:"validate",sid:"w11t3z"}),y=n.event({domain:a,existing:null==u?void 0:u.submit},{name:"submitForm",sid:"-7wy9cd"}),x=n.event({domain:a,existing:null==u?void 0:u.formValidated},{name:"formValidated",sid:"dctu72"}),b=n.event({domain:a,existing:null==u?void 0:u.setInitial},{name:"setInitial",sid:"lk7ots"}),F=n.event({domain:a,existing:null==u?void 0:u.setForm},{name:"setForm",sid:"-nwyjlh"}),w=n.event({domain:a,existing:null==u?void 0:u.reset},{name:"resetForm",sid:"-lfuri5"}),k=n.event({domain:a,existing:null==u?void 0:u.resetValues},{name:"resetValues",sid:"xirkf3"}),T=n.event({domain:a,existing:null==u?void 0:u.resetErrors},{name:"resetErrors",sid:"ro8q5u"}),U=n.event({domain:a,existing:null==u?void 0:u.resetTouched},{name:"resetTouched",sid:"w2ufsz"}),D=i.sample({and:[{source:f,clock:y}],or:{name:"submitWithFormData",sid:"-784yk9"}}),O=i.sample({and:[{source:f,clock:V}],or:{name:"validateWithFormData",sid:"-xcj69e"}});for(const e in m){if(!m.hasOwnProperty(e))continue;const r=d[e],n=m[e];i.withFactory({sid:"oi04tl",fn:()=>t(n,F,w,U,k,b),name:"none",method:"bindChangeEvent"}),r.rules&&i.withFactory({sid:"ojnilo",fn:()=>o({$form:f,rules:r.rules,submitEvent:y,resetFormEvent:w,resetValues:k,resetErrors:T,validateFormEvent:V,field:n,formValidationEvents:l||["submit"],fieldValidationEvents:r.validateOn?r.validateOn:[]},{sid:e}),name:"none",method:"bindValidation"})}return i.guard({and:[{source:D,filter:g,target:x}],or:{sid:"2j88db"}}),i.guard({and:[{source:O,filter:g,target:x}],or:{sid:"2y2oe2"}}),{fields:m,$values:f,$eachValid:h,$isValid:h,$isDirty:p,$touched:$,$meta:E,submit:y,validate:V,resetTouched:U,reset:w,resetValues:k,resetErrors:T,setInitial:b,setForm:F,set:F,formValidated:x}},e.useField=a,e.useForm=function(e){const i={},n={};for(const r in e.fields){if(!e.fields.hasOwnProperty(r))continue;const s=a(e.fields[r]);i[r]=s,n[r]=s.value}const{isValid:s,isDirty:o,touched:t}=r.useUnit(e.$meta);return{fields:i,values:n,hasError:e=>e?!!i[e]&&Boolean(i[e].firstError):!s,eachValid:s,isValid:s,isDirty:o,isTouched:t,touched:t,errors:e=>i[e]?i[e].errors:[],error:e=>i[e]?i[e].firstError:null,errorText:(e,r)=>{const n=i[e];return n&&n.firstError?r&&r[n.firstError.rule]?r[n.firstError.rule]:n.firstError.errorText||"":""},reset:r.useUnit(e.reset),setInitial:r.useUnit(e.setInitial),submit:r.useUnit(e.submit),setForm:r.useUnit(e.setForm),set:r.useUnit(e.setForm),formValidated:r.useUnit(e.formValidated)}},Object.defineProperty(e,"__esModule",{value:!0}),e}({},effector,effectorReact);
//# sourceMappingURL=effector-forms.iife.js.map
