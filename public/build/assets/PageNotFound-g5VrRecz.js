import{c as l,l as t,h as o,t as c,w as d,g as s,o as i,j as x}from"./app-mnwEC-E7.js";/* empty css               */const p={class:"flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6"},_={class:"flex items-center justify-center flex-1 border border-dashed rounded-lg shadow-sm"},m={class:"flex flex-col items-center gap-1 text-center"},f={class:"text-2xl font-bold tracking-tight"},g={class:"text-sm text-muted-foreground"},k={__name:"PageNotFound",props:{},setup(h){return(r,e)=>{const a=s("Icon"),n=s("router-link");return i(),l("main",p,[e[1]||(e[1]=t("div",{class:"flex items-center"},[t("h1",{class:"text-lg font-semibold md:text-2xl"},"404, that's an error!")],-1)),t("div",_,[t("div",m,[t("h3",f,[o(a,{icon:"carbon:strategy-play",class:"w-24 h-24 dark:text-rcgray-400 text-rcgray-900"})]),t("p",g,"The url "+c(r.$route.path)+" does not exist on this server.",1),o(n,{to:"/dashboard",class:"alink"},{default:d(()=>e[0]||(e[0]=[x(" Go to Dashboard ")])),_:1})])])])}}};export{k as default};