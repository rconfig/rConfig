import{a as O,u as L}from"./ViewFunctions-DwBLl11m.js";import{P}from"./PageHeader-C6NCWsA1.js";import{D as V}from"./DataTable-DybiaaLA.js";import{S as q}from"./SideDrawer-DQBQIuzk.js";import{b as F}from"./DeleteModal-DhRlCK46.js";import{_ as x,f as D,g as M,r as c,o as i,c as _,b,a as o,n as u,v as C,t as S,h as v,p as T,F as N,e as h,q as j,l as w,w as k}from"./app-jAvOudJp.js";import{L as B}from"./LoadingSpinner-BUiGzFl7.js";import"./DataTableToolbar-BuDfiQlS.js";import"./DataTableSpinner-D390i41d.js";/* empty css            */const R={props:{viewstate:{type:Object}},emits:["closeDrawer","formsubmitted"],components:{LoadingSpinner:B},setup(t,{emit:a}){const d=D(!1),e=D(t.viewstate.editid===0?"add":"edit"),{errors:m,model:n,clearModel:l,updateModel:r,getModel:p,storeModel:f,isLoading:g}=O(t.viewstate.modelName,t.viewstate.modelObject);M(()=>{p(t.viewstate.editid)});const s=async()=>{t.viewstate.editid!=0?await r(n):await f(n),m.value===""&&(a("formsubmitted",t.viewstate.pagenamesingle+" "+e.value+"ed!"),y())};function y(){a("closeDrawer")}return{showRoleOptions:d,close:y,errors:m,model:n,saveModels:s,clearModel:l,isLoading:g}}},K={key:0,novalidate:"",class:"pf-c-form"},U=["value"],z={class:"pf-c-form__group"},E={class:"pf-c-form__group-control"},H=["aria-invalid"],I={key:0,class:"pf-c-form__helper-text pf-m-error",id:"form-help-text-address-helper","aria-live":"polite"},A={class:"pf-c-form__group"},G={class:"pf-c-form__group-control"},J=["aria-invalid"],Q={key:0,class:"pf-c-form__helper-text pf-m-error",id:"form-help-text-address-helper","aria-live":"polite"},W={class:"pf-c-form__group pf-m-action"},X={class:"pf-c-form__group-control"},Y={class:"pf-c-form__actions"};function Z(t,a,d,e,m,n){const l=c("loading-spinner");return i(),_(N,null,[b(l,{showSpinner:e.isLoading},null,8,["showSpinner"]),e.isLoading?v("",!0):(i(),_("form",K,[o("input",{id:"editid",name:"editid",type:"hidden",value:d.viewstate.editid},null,8,U),o("div",z,[a[4]||(a[4]=o("div",{class:"pf-c-form__group-label"},[o("label",{class:"pf-c-form__label",for:"form-demo-basic-name"},[o("span",{class:"pf-c-form__label-text"},"Category Name"),o("span",{class:"pf-c-form__label-required","aria-hidden":"true"},"*")])],-1)),o("div",E,[u(o("input",{class:"pf-c-form-control",required:"",type:"text",id:"categoryName",name:"categoryName","onUpdate:modelValue":a[0]||(a[0]=r=>e.model.categoryName=r),"aria-invalid":!!e.errors.categoryName,autocomplete:"off"},null,8,H),[[C,e.model.categoryName]]),e.errors.categoryName?(i(),_("p",I,S(e.errors.categoryName[0]),1)):v("",!0)])]),o("div",A,[a[5]||(a[5]=o("div",{class:"pf-c-form__group-label"},[o("label",{class:"pf-c-form__label",for:"form-demo-basic-name"},[o("span",{class:"pf-c-form__label-text"},"Description"),o("span",{class:"pf-c-form__label-required","aria-hidden":"true"},"*")])],-1)),o("div",G,[u(o("input",{class:"pf-c-form-control",required:"",type:"text",id:"categoryDescription",name:"categoryDescription","onUpdate:modelValue":a[1]||(a[1]=r=>e.model.categoryDescription=r),"aria-invalid":!!e.errors.categoryDescription,autocomplete:"off"},null,8,J),[[C,e.model.categoryDescription]]),e.errors.categoryDescription?(i(),_("p",Q,S(e.errors.categoryDescription[0]),1)):v("",!0)])]),o("div",W,[o("div",X,[o("div",Y,[o("button",{class:"pf-c-button pf-m-primary",type:"submit",onClick:a[2]||(a[2]=T((...r)=>e.saveModels&&e.saveModels(...r),["prevent"]))},"Save"),o("button",{class:"pf-c-button pf-m-link",type:"button",onClick:a[3]||(a[3]=(...r)=>e.close&&e.close(...r))},"Cancel")])])])]))],64)}const $=x(R,[["render",Z]]),ee={components:{CategorysForm:$,PageHeader:P,DataTable:V,SideDrawer:q,DeleteModal:F},setup(){const t=h({editid:0,pagename:"Categorys",pagedesc:"rConfig system categorys",pagenamesingle:"Category",modelName:"categories",openDrawerState:!1,showDeleteModal:!1,sideDrawerComponentKey:1,pageOptionsState:{page:1,per_page:10},modelObject:{tagname:"",tagDescription:""}}),{models:a,isLoading:d,dataTablePageChanged:e,openDrawer:m,closeDrawerState:n,deleteRow:l,formSubmitted:r,confirmDelete:p,destroyModel:f}=L(t,t.modelName,t.modelObject);M(()=>{e(t.pageOptionsState)});const g=h({headers:[{key:"id",label:"ID",sortable:!0,error:"Can't be blank"},{key:"categoryName",label:"Category Name",sortable:!0,error:"Can't be blank"},{key:"categoryDescription",label:"Description",sortable:!1},{key:"device_count",label:"Devices Count",sortable:!1,deviceCountType:"category"}],data:a,isLoading:d});return{viewstate:t,dataTablePageChanged:e,openDrawer:m,closeDrawerState:n,deleteRow:l,confirmDelete:p,table:g,destroyModel:f,formSubmitted:r}}},ae={class:"pf-c-page__main",tabindex:"-1"},oe={class:"pf-c-page__main-section pf-m-no-padding"},te={class:"pf-c-drawer__main"};function re(t,a,d,e,m,n){const l=c("page-header"),r=c("data-table"),p=c("categorys-form"),f=c("side-drawer"),g=c("delete-modal");return i(),_(N,null,[o("main",ae,[b(l,{pagename:e.viewstate.pagename,desc:e.viewstate.pagedesc},null,8,["pagename","desc"]),a[6]||(a[6]=o("div",{class:"pf-c-divider",role:"separator"},null,-1)),o("section",oe,[o("div",{class:j(["pf-c-drawer",{"pf-m-expanded":e.viewstate.openDrawerState}])},[o("div",te,[b(r,{pagename:e.viewstate.pagenamesingle,tabledata:e.table,onPagechanged:e.dataTablePageChanged,onOpenDrawer:a[0]||(a[0]=s=>e.openDrawer(s)),onDeleteRow:a[1]||(a[1]=s=>e.deleteRow(s))},null,8,["pagename","tabledata","onPagechanged"]),(i(),w(f,{pagename:e.viewstate.pagenamesingle,drawerState:e.viewstate.openDrawerState,editid:e.viewstate.editid,onCloseDrawer:a[3]||(a[3]=s=>e.viewstate.openDrawerState=!1),key:e.viewstate.sideDrawerComponentKey},{subtext:k(()=>a[5]||(a[5]=[o("div",{class:"pf-l-flex__item"},"Please complete all fields",-1)])),form:k(()=>[(i(),w(p,{viewstate:e.viewstate,onCloseDrawer:e.closeDrawerState,onFormsubmitted:a[2]||(a[2]=s=>e.formSubmitted(s)),key:e.viewstate.editid},null,8,["viewstate","onCloseDrawer"]))]),_:1},8,["pagename","drawerState","editid"]))])],2)])]),e.viewstate.showDeleteModal?(i(),w(g,{key:0,editid:e.viewstate.editid,onCloseModal:a[4]||(a[4]=s=>e.viewstate.showDeleteModal=!1),onConfirmDelete:e.confirmDelete},null,8,["editid","onConfirmDelete"])):v("",!0)],64)}const _e=x(ee,[["render",re]]);export{_e as default};