import{d as T,b as m,U as E,Q as q,y as A,f as M,g as p,o as c,x as L,w as s,l as n,h as t,u as r,n as b,V as U,j as g,t as h,c as v,F as k,D as I,T as D,G as H}from"./app-UL2vn8Ux.js";import{_ as F,a as P,b as G}from"./PopoverContent-B8K4jpxw.js";import{_ as Q}from"./ScrollArea-DxmefSu9.js";import{m as J,n as K,o as O,p as R,q as W,r as X,s as Y,t as Z}from"./SelectScrollDownButton-B2DThAfO.js";const ee={class:"relative items-center w-full"},te={class:"absolute inset-y-0 flex items-center justify-center px-2 start-0"},le={class:"py-1"},ae=["onClick"],oe={"data-size":"20"},se={class:"p-1 border-5"},ve=T({__name:"CategoryMultiSelect",props:{modelValue:{type:Array,required:!0},singleSelect:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(C,{emit:w}){const f=w,_=m([]);m([]);const y=m(!1),u=m(""),e=m([]),d=C,x=E(()=>_.value.filter(a=>a.categoryName.toLowerCase().includes(u.value.toLowerCase())&&!e.value.some(o=>o.id===a.id)));q(()=>d.modelValue,a=>{e.value=a}),A(()=>{z(),d.modelValue&&d.modelValue.length>0&&(e.value=d.modelValue)});function S(a){d.singleSelect?e.value=[a]:e.value.push(a),y.value=!1,u.value="",f("update:modelValue",e.value)}function B(a){const o=e.value.findIndex(i=>i.categoryName===a);o!==-1&&e.value.splice(o,1),f("update:modelValue",e.value)}function z(){M.get("/api/categories/?perPage=10000").then(a=>{_.value=a.data.data})}return(a,o)=>{const i=p("Icon"),V=p("Button"),N=p("Input"),$=p("Separator");return c(),L(r(G),null,{default:s(()=>[o[2]||(o[2]=n("div",{class:"hidden text-yellow-200 text-teal-100 bg-yellow-700 bg-teal-700 border-yellow-500 border-teal-500 bg-stone-700 text-stone-200 border-stone-500 bg-lime-700 text-lime-200 border-lime-500 bg-sky-700 text-sky-100 border-sky-500 bg-violet-700 text-violet-200 border-violet-500 bg-fuchsia-700 text-fuchsia-200 border-fuchsia-500"},null,-1)),t(r(F),{class:"col-span-3"},{default:s(()=>[t(V,{variant:"ghost",class:b(["flex flex-wrap items-start justify-start w-full pl-2 whitespace-normal border h-fit",e.value.length===0?"text-muted-foreground":" "]),style:U(e.value.length===0?"padding: 0.45rem":"padding: 0.2rem")},{default:s(()=>[g(h(e.value&&e.value.length===0?"Select categories":"")+" ",1),(c(!0),v(k,null,I(e.value,l=>(c(),v("span",{key:l.id,class:"relative my-1 group"},[n("span",{class:b([l.badgeColor?l.badgeColor:"bg-gray-600 text-gray-200 border-gray-500","flex items-center text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl border"])},[g(h(l.categoryName)+" ",1),t(i,{icon:"si:close-line",class:"ml-1 cursor-pointer hover:text-white",onClick:D(j=>B(l.categoryName),["stop"])},null,8,["onClick"])],2)]))),128))]),_:1},8,["class","style"])]),_:1}),t(r(P),{side:"bottom",align:"start",class:"col-span-3 p-0"},{default:s(()=>[n("div",ee,[t(N,{id:"search",type:"text",modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=l=>u.value=l),autocomplete:"off",placeholder:"Search...",class:"pl-10 border-none focus:outline-none focus-visible:ring-0 text-muted-foreground font-inter"},null,8,["modelValue"]),n("span",te,[t(i,{icon:"weui:search-outlined",class:"size-6 text-muted-foreground"})])]),t($),t(r(Q),{class:"h-64"},{default:s(()=>[n("div",le,[(c(!0),v(k,null,I(x.value,l=>(c(),v("div",{key:l.id,class:"w-full p-1 pl-2 my-1 text-sm rounded-lg hover:bg-rcgray-600",onClick:j=>S(l)},[n("span",{"data-size":"20",class:b(["cursor-default text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl border",l.badgeColor?l.badgeColor:"bg-gray-600 text-gray-200 border-gray-500"])},[n("span",oe,h(l.categoryName),1)],2)],8,ae))),128))])]),_:1}),t($),n("div",se,[t(V,{variant:"ghost",class:"justify-start w-full p-1"},{default:s(()=>[t(i,{icon:"octicon:plus-16",class:"w-3 h-3 mt-1 mr-2 text-muted-foreground"}),o[1]||(o[1]=n("span",null,"Create new record",-1))]),_:1})])]),_:1})]),_:1})}}}),_e={__name:"ConfirmCloseAlert",props:{showConfirmCloseAlert:{type:Boolean,required:!0}},emits:["handleConfirm","handleClose"],setup(C,{emit:w}){const f=w;A(()=>{window.addEventListener("keydown",u=>{u.key==="Escape"&&y()})}),H(()=>{window.removeEventListener("keydown",u=>{u.key==="Escape"&&y()})});function _(){f("handleConfirm")}function y(){f("handleClose")}return(u,e)=>(c(),L(r(Z),{open:C.showConfirmCloseAlert},{default:s(()=>[t(r(J),null,{default:s(()=>[t(r(K),null,{default:s(()=>[t(r(O),null,{default:s(()=>e[2]||(e[2]=[g("Are you absolutely sure?")])),_:1}),t(r(R),null,{default:s(()=>e[3]||(e[3]=[g("Confirming will close the previous dialog box and result in unsaved changes.")])),_:1})]),_:1}),t(r(W),null,{default:s(()=>[t(r(X),{onCancel:e[0]||(e[0]=d=>y())},{default:s(()=>e[4]||(e[4]=[g("Cancel")])),_:1}),t(r(Y),{onAction:e[1]||(e[1]=d=>_())},{default:s(()=>e[5]||(e[5]=[g("Continue")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"]))}},ne={class:"relative items-center w-full"},re={class:"absolute inset-y-0 flex items-center justify-center px-2 start-0"},ue={class:"py-1"},ie=["onClick"],de={"data-size":"20"},ce={class:"p-1 border-5"},ye=T({__name:"TagMultiSelect",props:{modelValue:{type:Array,required:!0}},emits:["update:modelValue"],setup(C,{emit:w}){const f=w,_=m([]);m([]);const y=m(!1),u=m(""),e=m([]),d=E(()=>_.value.filter(a=>a.tagname.toLowerCase().includes(u.value.toLowerCase())&&!e.value.some(o=>o.id===a.id))),x=C;q(()=>x.modelValue,a=>{e.value=a}),A(()=>{z(),x.modelValue&&x.modelValue.length>0&&e.value.push(...x.modelValue)});function S(a){e.value.push(a),y.value=!1,u.value="";const o=d.value.findIndex(i=>i.tagname===a.tagname);o!==-1&&d.value.splice(o,1),f("update:modelValue",e.value)}function B(a){const o=e.value.findIndex(i=>i.tagname===a);o!==-1&&e.value.splice(o,1),f("update:modelValue",e.value)}function z(){M.get("/api/tags/?perPage=10000").then(a=>{_.value=a.data.data})}return(a,o)=>{const i=p("Icon"),V=p("Button"),N=p("Input"),$=p("Separator");return c(),L(r(G),null,{default:s(()=>[t(r(F),{class:"col-span-3"},{default:s(()=>[t(V,{variant:"ghost",class:b(["flex flex-wrap items-start justify-start w-full pl-2 whitespace-normal border h-fit",e.value.length===0?"text-muted-foreground":" "]),style:U(e.value.length===0?"padding: 0.45rem":"padding: 0.2rem")},{default:s(()=>[g(h(e.value&&e.value.length===0?"Select tags":"")+" ",1),(c(!0),v(k,null,I(e.value,l=>(c(),v("span",{key:l.id,class:"relative my-1 group"},[n("span",{class:b([l.badgeColor?l.badgeColor:"bg-gray-600 text-gray-200 border-gray-500","flex items-center text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl border"])},[g(h(l.tagname)+" ",1),t(i,{icon:"si:close-line",class:"ml-1 cursor-pointer hover:text-white",onClick:D(j=>B(l.tagname),["stop"])},null,8,["onClick"])],2)]))),128))]),_:1},8,["class","style"])]),_:1}),t(r(P),{side:"bottom",align:"start",class:"col-span-3 p-0"},{default:s(()=>[n("div",ne,[t(N,{id:"search",type:"text",modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=l=>u.value=l),autocomplete:"off",placeholder:"Search...",class:"pl-10 border-none focus:outline-none focus-visible:ring-0 text-muted-foreground font-inter"},null,8,["modelValue"]),n("span",re,[t(i,{icon:"weui:search-outlined",class:"size-6 text-muted-foreground"})])]),t($),t(r(Q),{class:"h-64"},{default:s(()=>[n("div",ue,[(c(!0),v(k,null,I(d.value,l=>(c(),v("div",{key:l.id,class:"w-full p-1 pl-2 my-1 text-sm rounded-lg hover:bg-rcgray-600",onClick:j=>S(l)},[n("span",{"data-size":"20",class:b(["cursor-default text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl border",l.badgeColor?l.badgeColor:"bg-gray-600 text-gray-200 border-gray-500"])},[n("span",de,h(l.tagname),1)],2)],8,ie))),128))])]),_:1}),t($),n("div",ce,[t(V,{variant:"ghost",class:"justify-start w-full p-1"},{default:s(()=>[t(i,{icon:"octicon:plus-16",class:"w-3 h-3 mt-1 mr-2 text-muted-foreground"}),o[1]||(o[1]=n("span",null,"Create new record",-1))]),_:1})])]),_:1})]),_:1})}}});export{ve as _,ye as a,_e as b};