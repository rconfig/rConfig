import{a0 as m,E as d,Z as C,N as M,T as w,a2 as T,o as c,c as r,a as e,t as y,v,J as S,K as x,Y as k,d as L,i as E,r as j}from"./app-DPEN0t_k.js";function $(i){m({});const t=m({}),a=d(!0),l=d(i),o=C("create-notification");d("");const h="?page="+1+"&perPage="+1e4+"&filter="+""+"&sortCol="+""+"&sortOrd="+"";return M.get("/api/"+l.value+"/"+h,{}).then(f=>{Object.assign(t,f.data.data),a.value=!1}).catch(f=>{o({type:"danger",title:"Error",message:f.response.data.message})}),{results:t,isLoading:a}}const q={props:{modelOptions:{type:Object},options:{type:Object,required:!0},msLabel:{type:String,required:!0},msValue:{type:String,required:!0},fieldType:{type:String,required:!0},errors:!1,keepOpenOnSelect:!1},setup(i,{emit:t}){const a=d(!1),l=d(),o=m([]),u=m([]),s=d(null);l.value=i.options;function p(){a.value=!a.value}function g(n,_=!1){const b=o.indexOf(n);b>-1?(o.splice(b,1),u.splice(b,1)):(o.push(n),u.push(n)),i.keepOpenOnSelect&&!_&&(a.value=!0),t("optionsUpdated",o)}function O(){o.splice(0,o.length)}function h(){l.value=i.options,document.getElementById("select-multi-typeahead-expanded-typeahead").value=""}function f(n){a.value=!0,l.value=[],Object.keys(i.options).forEach(_=>{i.options[_][i.msLabel].toLowerCase().includes(n.target.value.toLowerCase())&&l.value.push(i.options[_])})}return T(s,n=>a.value=!1),i.modelOptions&&i.modelOptions.forEach(n=>{o.push(n),u.push(n.id)}),{clearSelected:O,clearText:h,clickOutsideMultiSelect:s,filteredOptions:l,getInput:f,selectedOptions:o,showMultiSelect:a,toggleMultiSelect:p,toggleSelectedOptions:g}}},N={class:"pf-c-form__group"},P={class:"pf-c-form__group-label"},B={class:"pf-c-form__label",for:"form-demo-basic-name"},I={class:"pf-c-form__label-text"},V={key:0,id:"select-multi-typeahead-label",ref:"clickOutsideMultiSelect"},R={class:"pf-c-select__toggle pf-m-typeahead",style:{cursor:"default"}},U={class:"pf-c-select__toggle-wrapper"},z={class:"pf-c-chip-group"},A={class:"pf-c-chip-group__main"},D={class:"pf-c-chip-group__list",role:"list","aria-label":"Chip group list"},F={class:"pf-c-chip"},G={class:"pf-c-chip__text"},J=["onClick"],K=["placeholder"],Y={key:1,class:"pf-c-select__menu multi-select-dropdown-overflow","aria-labelledby":"select-multi-typeahead-label ",role:"listbox"},Z=["onClick"],H={key:0,class:"pf-c-select__menu-item-icon"},Q={class:"pf-c-form__helper-text"};function W(i,t,a,l,o,u){return c(),r("div",N,[e("div",P,[e("label",B,[e("span",I,"Select "+y(a.fieldType),1),t[3]||(t[3]=e("span",{class:"pf-c-form__label-required","aria-hidden":"true"},"*",-1))])]),e("div",{class:E(["pf-c-select pf-m-expanded",a.errors?"pf-m-invalid":""])},[l.showMultiSelect||!1?(c(),r("span",V,null,512)):v("",!0),e("div",R,[e("div",U,[e("div",z,[e("div",A,[e("ul",D,[(c(!0),r(S,null,x(l.selectedOptions,s=>(c(),r("li",{class:"pf-c-chip-group__list-item",key:s},[e("div",F,[e("span",G,y(s[a.msLabel]),1),e("button",{class:"pf-c-button pf-m-plain",type:"button","aria-labelledby":"remove_select-multi-typeahead-expanded_chip_three select-multi-typeahead-expanded-chip_three","aria-label":"Remove",onClick:k(p=>l.toggleSelectedOptions(s,!0),["prevent"])},t[4]||(t[4]=[e("i",{class:"fas fa-times","aria-hidden":"true"},null,-1)]),8,J)])]))),128))])])]),e("input",{class:"pf-c-form-control pf-c-select__toggle-typeahead",type:"text",id:"select-multi-typeahead-expanded-typeahead","aria-label":"Type to filter",placeholder:"Choose "+a.fieldType,onInput:t[0]||(t[0]=s=>l.getInput(s)),autocomplete:"off"},null,40,K)]),e("button",{tabindex:"-1",class:"pf-c-button pf-m-plain pf-c-select__toggle-clear",type:"button","aria-label":"Clear all",onClick:t[1]||(t[1]=(...s)=>l.clearText&&l.clearText(...s))},t[5]||(t[5]=[e("i",{class:"fas fa-times-circle","aria-hidden":"true"},null,-1)])),e("button",{class:"pf-c-button pf-m-plain pf-c-select__toggle-button",type:"button",id:"select-multi-typeahead-toggle","aria-haspopup":"true","aria-expanded":"false","aria-labelledby":"select-multi-typeahead-label select-multi-typeahead-toggle","aria-label":"Select",onClick:t[2]||(t[2]=(...s)=>l.toggleMultiSelect&&l.toggleMultiSelect(...s))},t[6]||(t[6]=[e("i",{class:"fas fa-caret-down pf-c-select__toggle-arrow","aria-hidden":"true"},null,-1)]))]),l.showMultiSelect||!1?(c(),r("ul",Y,[(c(!0),r(S,null,x(l.filteredOptions,(s,p)=>(c(),r("li",{role:"presentation",key:p},[e("button",{class:"pf-c-select__menu-item",role:"option",onClick:k(g=>l.toggleSelectedOptions(s),["prevent"])},[L(y(s[a.msLabel])+" ",1),l.selectedOptions.includes(s)?(c(),r("span",H,t[7]||(t[7]=[e("i",{class:"fas fa-check","aria-hidden":"true"},null,-1)]))):v("",!0)],8,Z)]))),128))])):v("",!0)],2),e("div",Q,[j(i.$slots,"multi-select-subtext")])])}const ee=w(q,[["render",W]]);export{ee as M,$ as u};