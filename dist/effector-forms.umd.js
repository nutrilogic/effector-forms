!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("effector"),require("effector-react")):"function"==typeof define&&define.amd?define(["exports","effector","effector-react"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).EffectorForm={},e.effector,e.effectorReact)}(this,(function(e,r,i){"use strict";const n={store:function({init:e,domain:i,existing:n},o){return n||(i?i.store(e,{and:o,sid:"-efg263"}):r.createStore(e,{and:o,sid:"-dyefrw"}))},event:function({domain:e,existing:i}){return i||(e?e.event({sid:"-y6riru"}):r.createEvent({sid:"-y6rhv4"}))}};function o(e,i,o,s){var t,a,d,u,l,c,m,f,v,h,g;const p="function"==typeof i.init?i.init():i.init,E=n.store({domain:o,existing:null===(t=i.units)||void 0===t?void 0:t.$value,init:p},{and:s,name:"$value",sid:"yg99i6"}),y=n.store({domain:o,existing:null===(a=i.units)||void 0===a?void 0:a.$errors,init:[]},{and:s,name:"$errors",sid:"-y2xdpq"}),x=y.map((e=>e[0]?e[0]:null)),b=E.map((e=>e!==p)),V=n.store({domain:o,existing:null===(d=i.units)||void 0===d?void 0:d.$isTouched,init:!1},{and:s,name:"$touched",sid:"sulkei"}),$=n.event({domain:o,existing:null===(u=i.units)||void 0===u?void 0:u.onChange},{name:"onChange",sid:"-bvxucw"}),w=n.event({domain:o,existing:null===(l=i.units)||void 0===l?void 0:l.onBlur},{name:"onBlur",sid:"mo0ar0"}),F=n.event({domain:o,existing:null===(c=i.units)||void 0===c?void 0:c.changed},{name:"changed",sid:"bcod8v"}),T=n.event({domain:o,existing:null===(m=i.units)||void 0===m?void 0:m.addError},{name:"addError",sid:"3cou8n"}),k=n.event({domain:o,existing:null===(f=i.units)||void 0===f?void 0:f.validate},{name:"validate",sid:"-s3sqr5"}),U=n.event({domain:o,existing:null===(v=i.units)||void 0===v?void 0:v.resetErrors},{name:"resetErrors",sid:"z8u2jo"}),j=n.event({domain:o,existing:null===(h=i.units)||void 0===h?void 0:h.resetValue},{name:"resetValue",sid:"-x0qhaf"}),D=n.event({domain:o,existing:null===(g=i.units)||void 0===g?void 0:g.reset},{name:"reset",sid:"ocz45p"}),S=x.map((e=>null===e));return{changed:F,name:e,$value:E,$errors:y,$firstError:x,$isValid:S,$isDirty:b,$isTouched:V,$touched:V,$field:r.combine({and:[{value:E,errors:y,firstError:x,isValid:S,isDirty:b,isTouched:V}],or:{name:"$field",sid:"-vj0i5c"}}),onChange:$,onBlur:w,addError:T,validate:k,set:$,reset:D,resetErrors:U,resetValue:j,filter:i.filter}}function s({$form:e,validateFormEvent:i,submitEvent:n,resetFormEvent:o,resetValues:s,field:t,rules:a,resetErrors:d,formValidationEvents:u,fieldValidationEvents:l},c){const{$value:m,$errors:f,onBlur:v,changed:h,addError:g,validate:p,resetErrors:E,resetValue:y,reset:x}=t,b="function"==typeof a?r.createStore([],{and:c,name:"rulesSources",sid:"-9d7qjb"}):r.combine({and:[a.map((({source:e})=>e||r.createStore(null,{and:c,name:"and",sid:"5j6y42"})))],or:{name:"rulesSources",sid:"-8w6454"}}),V=($=a,(e,r,i)=>{const n=[],o="function"==typeof $?$(e,r):$;for(let s=0;s<o.length;s++){const t=o[s],a=i?i[s]:null,d=t.validator(e,r,a);"boolean"!=typeof d||d||n.push({rule:t.name,errorText:t.errorText,value:e}),"object"!=typeof d||d.isValid||n.push({rule:t.name,errorText:d.errorText,value:e})}return n});var $;const w=[...u,...l],F=[];if(w.includes("submit")){const i=r.sample({and:[{source:r.combine({and:[{fieldValue:m,form:e,rulesSources:b}],or:{name:"source",sid:"-k8128n"}}),clock:n}],or:{name:"validationTrigger",sid:"-6xbmu5"}});F.push(i)}w.includes("blur")&&F.push(r.sample({and:[{source:r.combine({and:[{fieldValue:m,form:e,rulesSources:b}],or:{name:"source",sid:"pucwwk"}}),clock:v}],or:{sid:"-m25isl"}})),w.includes("change")&&F.push(r.sample({and:[{source:r.combine({and:[{fieldValue:m,form:e,rulesSources:b}],or:{name:"source",sid:"-uicuuj"}}),clock:r.merge([h,y,s],{name:"clock",sid:"wzy69w"})}],or:{sid:"-7dr8kk"}})),F.push(r.sample({and:[{source:r.combine({and:[{fieldValue:m,form:e,rulesSources:b}],or:{name:"source",sid:"-gb07m8"}}),clock:p}],or:{sid:"6tlenr"}})),F.push(r.sample({and:[{source:r.combine({and:[{fieldValue:m,form:e,rulesSources:b}],or:{name:"source",sid:"-2kp66l"}}),clock:i}],or:{sid:"kjwg3e"}}));const T=r.sample({and:[{source:m,clock:g,fn:(e,{rule:r,errorText:i})=>({rule:r,value:e,errorText:i})}],or:{name:"addErrorWithValue",sid:"-vn5aoo"}});f.on(F,((e,{form:r,fieldValue:i,rulesSources:n})=>V(i,r,n))).on(T,((e,r)=>[r,...e])).reset(E,o,x,d),w.includes("change")||f.reset(h)}function t({$value:e,$touched:i,onChange:n,changed:o,name:s,reset:t,resetValue:a,filter:d},u,l,c,m){i.on(o,(()=>!0)).reset(t,l,c),r.guard({and:[{source:n,filter:d||(()=>!0),target:o}],or:{sid:"-ylchks"}}),e.on(o,((e,r)=>r)).on(u,((e,r)=>r.hasOwnProperty(s)?r[s]:e)).reset(t,a,m,l)}function a(e){const{value:r,errors:n,firstError:o,isValid:s,isDirty:t,isTouched:a}=i.useUnit(e.$field);return{name:e.name,value:r,errors:n,firstError:o,isValid:s,isDirty:t,touched:a,isTouched:a,onChange:i.useUnit(e.onChange),onBlur:i.useUnit(e.onBlur),addError:i.useUnit(e.addError),validate:i.useUnit(e.validate),reset:i.useUnit(e.reset),set:i.useUnit(e.onChange),resetErrors:i.useUnit(e.resetErrors),hasError:()=>null!==o,errorText:e=>o?e&&e[o.rule]?e[o.rule]:o.errorText||"":""}}e.createForm=function(e){const{filter:i,domain:a,fields:d,validateOn:u,units:l}=e,c={},m=[],f=[];for(const e in d){if(!d.hasOwnProperty(e))continue;const i=d[e],n=r.withFactory({sid:"rtd41h",fn:()=>o(e,i,a,{sid:e}),name:"field",method:"createField"});c[e]=n,m.push(n.$isDirty),f.push(n.$touched)}const v=function(e){const i={};for(const r in e)e.hasOwnProperty(r)&&(i[r]=e[r].$value);return r.combine({and:[i],or:{sid:"39yu4w"}})}(c),h=function(e){const i=[];for(const r in e){if(!e.hasOwnProperty(r))continue;const{$firstError:n}=e[r];i.push(n)}return r.combine({and:[i],or:{name:"$firstErrors",sid:"-1vosn1"}}).map((e=>e.every((e=>null===e))))}(c),g=i?r.combine({and:[h,i,(e,r)=>e&&r],or:{name:"$isFormValid",sid:"-ovgxdl"}}):h,p=r.combine({and:[m],or:{name:"$isDirty",sid:"-pfy1ud"}}).map((e=>e.some(Boolean))),E=r.combine({and:[f],or:{name:"$touched",sid:"tnl99w"}}).map((e=>e.some(Boolean))),y=r.combine({and:[{isValid:h,isDirty:p,touched:E}],or:{name:"$meta",sid:"-9ioo9w"}}),x=n.event({domain:a,existing:null==l?void 0:l.validate},{name:"validate",sid:"wz51wd"}),b=n.event({domain:a,existing:null==l?void 0:l.submit},{name:"submitForm",sid:"-6yv0jz"}),V=n.event({domain:a,existing:null==l?void 0:l.formValidated},{name:"formValidated",sid:"o8v59j"}),$=n.event({domain:a,existing:null==l?void 0:l.setForm},{name:"setForm",sid:"-ov1sdv"}),w=n.event({domain:a,existing:null==l?void 0:l.reset},{name:"resetForm",sid:"-wbw2km"}),F=n.event({domain:a,existing:null==l?void 0:l.resetValues},{name:"resetValues",sid:"wkobmp"}),T=n.event({domain:a,existing:null==l?void 0:l.resetErrors},{name:"resetErrors",sid:"qq5hdg"}),k=n.event({domain:a,existing:null==l?void 0:l.resetTouched},{name:"resetTouched",sid:"v4r70l"}),U=r.sample({and:[{source:v,clock:b}],or:{name:"submitWithFormData",sid:"-8687cn"}}),j=r.sample({and:[{source:v,clock:x}],or:{name:"validateWithFormData",sid:"qsjkn9"}});for(const e in c){if(!c.hasOwnProperty(e))continue;const i=d[e],n=c[e];r.withFactory({sid:"o5cv6a",fn:()=>t(n,$,w,k,F),name:"none",method:"bindChangeEvent"}),i.rules&&r.withFactory({sid:"oijxey",fn:()=>s({$form:v,rules:i.rules,submitEvent:b,resetFormEvent:w,resetValues:F,resetErrors:T,validateFormEvent:x,field:n,formValidationEvents:u||["submit"],fieldValidationEvents:i.validateOn?i.validateOn:[]},{sid:e}),name:"none",method:"bindValidation"})}return r.guard({and:[{source:U,filter:g,target:V}],or:{sid:"2i4n6l"}}),r.guard({and:[{source:j,filter:g,target:V}],or:{sid:"2wz37c"}}),{fields:c,$values:v,$eachValid:h,$isValid:h,$isDirty:p,$touched:E,$meta:y,submit:b,validate:x,resetTouched:k,reset:w,resetValues:F,resetErrors:T,setForm:$,set:$,formValidated:V}},e.useField=a,e.useForm=function(e){const r={},n={};for(const i in e.fields){if(!e.fields.hasOwnProperty(i))continue;const o=a(e.fields[i]);r[i]=o,n[i]=o.value}const{isValid:o,isDirty:s,touched:t}=i.useUnit(e.$meta);return{fields:r,values:n,hasError:e=>e?!!r[e]&&Boolean(r[e].firstError):!o,eachValid:o,isValid:o,isDirty:s,isTouched:t,touched:t,errors:e=>r[e]?r[e].errors:[],error:e=>r[e]?r[e].firstError:null,errorText:(e,i)=>{const n=r[e];return n&&n.firstError?i&&i[n.firstError.rule]?i[n.firstError.rule]:n.firstError.errorText||"":""},reset:i.useUnit(e.reset),submit:i.useUnit(e.submit),setForm:i.useUnit(e.setForm),set:i.useUnit(e.setForm),formValidated:i.useUnit(e.formValidated)}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=effector-forms.umd.js.map
