import{r as n,ab as R,s as T,c as S,i as d,d as e,w as o,e as s,V as D,ac as M,b as u,o as r,O as N,g as p,q as f,ad as h,t as g,P as E,F as G,v as U,R as j,Q as q,ae as A,af as L,ag as O,M as P,j as w,ah as Q}from"./app-DPMw5Toc.js";import{_ as z}from"./ConfigsTable-cioCn7fU.js";import{t as H,s as J}from"./useRowSelection-Ca5EeGo9.js";/* empty css               */import"./eventBus-Bq7NWSom.js";import"./index-DIA8joZ0.js";import"./SelectScrollDownButton-BjZDgZQM.js";import"./ClearFilters.vue_vue_type_script_setup_true_lang-IJYmLfE1.js";import"./PopoverContent-DoXUcHNJ.js";import"./ScrollArea-RxY08dDH.js";const K={class:"flex flex-col flex-1 gap-2 dark:bg-rcgray-900"},W={class:"border-t border-b topRow"},X={class:"flex items-center gap-2"},Y={class:"flex items-center gap-2 mr-4"},Z={class:"flex items-center gap-2"},me={__name:"Main",props:{},setup(ee){n(null);const F=R(),_=n(localStorage.getItem("inventorySelectedView")||"devices"),$=D(),i=M(),C=n(parseInt(i.params.id)||0),c=[{id:"devices",label:"Devices",icon:"DeviceIcon",isFavorite:n(!1),route:"/devices"},{id:"commandgroups",label:"Command Groups",icon:"CommandGroupIcon",isFavorite:n(!1),route:"/commandgroups"},{id:"commands",label:"Commands",icon:"CommandsIcon",isFavorite:n(!1),route:"/commands"},{id:"templates",label:"Templates",icon:"TemplateIcon",isFavorite:n(!1),route:"/templates"},{id:"vendors",label:"Vendors",icon:"VendorIcon",isFavorite:n(!1),route:"/vendors"},{id:"tags",label:"Tags",icon:"TagIcon",isFavorite:n(!1),route:"/tags"}];T(()=>{i.params.view?m(i.params.view):i.name==="devicesview"?m(i.name):i.path.includes("inventory")||m(i.name),c.forEach(t=>{t.isFavorite.value=F.isFavorite(t.id)})});function m(t){localStorage.setItem("inventorySelectedView",t),_.value=t,$.push({name:t})}function V(t){const l=c.find(v=>v.id===t);l&&(l.isFavorite.value=!l.isFavorite.value,F.toggleFavorite(l))}return(t,l)=>{const v=u("Icon"),k=u("Button"),x=u("StarUnselected"),y=u("StarSelected");return r(),S("main",K,[d("div",W,[e(s(j),null,{default:o(()=>{var I,b;return[e(s(N),{"as-child":"",class:"p-4 ml-2"},{default:o(()=>[e(k,{variant:"outline"},{default:o(()=>[d("span",X,[e(v,{icon:"fluent-color:pin-16"}),l[0]||(l[0]=p(" Select View "))])]),_:1})]),_:1}),d("div",Y,[(r(),f(h(((I=c.find(a=>a.id===_.value))==null?void 0:I.icon)||""))),p(" "+g(((b=c.find(a=>a.id===_.value))==null?void 0:b.label)||""),1)]),e(s(E),{class:"w-56",align:"start"},{default:o(()=>[e(s(H),null,{default:o(()=>[(r(),S(G,null,U(c,a=>e(s(q),{key:a.id,onClick:B=>m(a.id)},{default:o(()=>[d("span",Z,[(r(),f(h(a.icon))),p(" "+g(a.label),1)]),e(s(A),null,{default:o(()=>[e(s(L),null,{default:o(()=>[e(s(O),{"as-child":""},{default:o(()=>[e(s(J),{onClick:P(B=>V(a.id),["stop","prevent"])},{default:o(()=>[a.isFavorite.value?w("",!0):(r(),f(x,{key:0})),a.isFavorite.value?(r(),f(y,{key:1})):w("",!0)]),_:2},1032,["onClick"])]),_:2},1024),e(s(Q),null,{default:o(()=>[d("p",null,g(a.isFavorite.value?"Remove from favorites":"Add to favorites"),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})]}),_:1})]),e(z,{configsId:C.value},null,8,["configsId"])])}}};export{me as default};