import{d as z,o as m,c as p,r as B,n as L,u as t,a as H,b as $,e as Q,f as j,g as O,h as e,w as a,_ as C,i as V,j as g,k as I,l as s,t as x,m as w,p as q,q as D,I as b,x as R,s as N,v as E,y as F,z as U,A,B as G,C as J,D as K,E as W,F as X,G as Y}from"./app-DPKr8MT5.js";import{u as Z}from"./index-Buh-P7wo.js";/* empty css               */const T=z({__name:"CardFooter",props:{class:{}},setup(n){const f=n;return(l,i)=>(m(),p("div",{class:L(t(H)("flex items-center p-6 pt-0",f.class))},[B(l.$slots,"default")],2))}});function ee(){const n=$([]),f=$([]),l=$([]),i=$([]),u=$(!1),d=$(!1),y=$(!1),{toastSuccess:v,toastError:h}=Q();async function M(c=!1,S={}){u.value=!0;try{const P=await j.get("/api/dashboard/sysinfo?clearcache="+c);n.value=P.data}catch(P){console.error("Error fetching sysinfo:",P),h("Error","Failed to fetch sysinfo.")}finally{u.value=!1}}async function _(c={}){d.value=!0;try{const S=await j.get("/api/dashboard/configinfo");f.value=S.data}catch(S){console.error("Error fetching configinfo:",S),h("Error","Failed to fetch configinfo.")}finally{d.value=!1}}async function o(c={}){y.value=!0;try{const S=await j.get("/api/dashboard/health-latest");l.value=S.data}catch(S){console.error("Error fetching healthLatest:",S),h("Error","Failed to fetch healthLatest.")}finally{y.value=!1}}async function k(){try{const c=await j.get("/api/license-info");i.value=c.data}catch(c){console.error("Error fetching license info:",c),h("Error","Failed to fetch license info.")}}return{fetchSysinfo:M,fetchConfiginfo:_,fetchHealth:o,fetchLicenseInfo:k,sysinfo:n,configinfo:f,healthLatest:l,licenseInfo:i,isLoadingSysinfo:u,isLoadingConfiginfo:d,isLoadingHealth:y,toastSuccess:v,toastError:h}}const r={__name:"Skeleton",props:{class:{type:null,required:!1}},setup(n){const f=n;return(l,i)=>(m(),p("div",{class:L(t(H)("animate-pulse rounded-md bg-primary/10",f.class))},null,2))}},te={class:"grid gap-2 p-8 sm:gap-4 md:grid-cols-2 xl:gap-8 lg:grid-cols-4"},se={key:0},oe={class:"text-2xl font-bold"},ne={key:1,class:"flex items-center space-x-4"},le={class:"space-y-2"},ae={key:0},ie={class:"text-2xl font-bold"},re={key:1,class:"flex items-center space-x-4"},de={class:"space-y-2"},ce={key:0},ue={class:"text-2xl font-bold"},fe={key:1,class:"flex items-center space-x-4"},me={class:"space-y-2"},ge={key:0},xe={class:"text-2xl font-bold"},ye={key:1,class:"flex items-center space-x-4"},pe={class:"space-y-2"},ve={__name:"ConfigInfoCards",props:{configinfo:{type:Object,required:!0},isLoadingConfiginfo:{type:Boolean,required:!0}},setup(n){return $(!1),(f,l)=>{const i=O("Icon");return m(),p("div",te,[e(t(q),{class:"border shadow rounded-xl bg-card text-card-foreground"},{default:a(()=>[e(t(C),{class:"flex flex-row items-center justify-between pb-2 space-y-0"},{default:a(()=>[e(t(V),{class:"text-sm font-medium"},{default:a(()=>l[0]||(l[0]=[g("Device count")])),_:1}),e(i,{icon:"devicon:networkx",class:"w-4 h-4 text-muted-foreground"})]),_:1}),e(t(I),null,{default:a(()=>[n.configinfo.data?(m(),p("div",se,[s("div",oe,x(n.configinfo.data.deviceCount),1),l[1]||(l[1]=s("p",{class:"text-xs text-muted-foreground"},"Total count of devices",-1))])):w("",!0),n.isLoadingConfiginfo?(m(),p("div",ne,[e(t(r),{class:"w-12 h-12 rounded-full"}),s("div",le,[e(t(r),{class:"h-4 w-[250px]"}),e(t(r),{class:"h-4 w-[200px]"})])])):w("",!0)]),_:1})]),_:1}),e(t(q),null,{default:a(()=>[e(t(C),{class:"flex flex-row items-center justify-between pb-2 space-y-0"},{default:a(()=>[e(t(V),{class:"text-sm font-medium"},{default:a(()=>l[2]||(l[2]=[g("Devices down")])),_:1}),e(i,{icon:"fluent-color:cloud-dismiss-24",class:"w-4 h-4 text-muted-foreground"})]),_:1}),e(t(I),null,{default:a(()=>[n.configinfo.data?(m(),p("div",ae,[s("div",ie,x(n.configinfo.data.deviceDownCount),1),l[3]||(l[3]=s("p",{class:"text-xs text-muted-foreground"},"Total number of devices unreachable",-1))])):w("",!0),n.isLoadingConfiginfo?(m(),p("div",re,[e(t(r),{class:"w-12 h-12 rounded-full"}),s("div",de,[e(t(r),{class:"h-4 w-[250px]"}),e(t(r),{class:"h-4 w-[200px]"})])])):w("",!0)]),_:1})]),_:1}),e(t(q),null,{default:a(()=>[e(t(C),{class:"flex flex-row items-center justify-between pb-2 space-y-0"},{default:a(()=>[e(t(V),{class:"text-sm font-medium"},{default:a(()=>l[4]||(l[4]=[g("Total configs")])),_:1}),e(i,{icon:"fluent-color:checkbox-24",class:"w-4 h-4 text-muted-foreground"})]),_:1}),e(t(I),null,{default:a(()=>[n.configinfo.data?(m(),p("div",ce,[s("div",ue,x(n.configinfo.data.configTotalCount),1),l[5]||(l[5]=s("p",{class:"text-xs text-muted-foreground"},"Total number of configs downloaded",-1))])):w("",!0),n.isLoadingConfiginfo?(m(),p("div",fe,[e(t(r),{class:"w-12 h-12 rounded-full"}),s("div",me,[e(t(r),{class:"h-4 w-[250px]"}),e(t(r),{class:"h-4 w-[200px]"})])])):w("",!0)]),_:1})]),_:1}),e(t(q),null,{default:a(()=>[e(t(C),{class:"flex flex-row items-center justify-between pb-2 space-y-0"},{default:a(()=>[e(t(V),{class:"text-sm font-medium"},{default:a(()=>l[6]||(l[6]=[g("Failed configs")])),_:1}),e(i,{icon:"fluent-color:calendar-cancel-24",class:"w-4 h-4 text-muted-foreground"})]),_:1}),e(t(I),null,{default:a(()=>[n.configinfo.data?(m(),p("div",ge,[s("div",xe,x(n.configinfo.data.configDownCount),1),l[7]||(l[7]=s("p",{class:"text-xs text-muted-foreground"},"Number of configuration download failures",-1))])):w("",!0),n.isLoadingConfiginfo?(m(),p("div",ye,[e(t(r),{class:"w-12 h-12 rounded-full"}),s("div",pe,[e(t(r),{class:"h-4 w-[250px]"}),e(t(r),{class:"h-4 w-[200px]"})])])):w("",!0)]),_:1})]),_:1})])}}},he={class:"grid gap-0.5"},be={class:"flex items-center gap-1 ml-auto"},we={key:0,class:"flex items-start w-full space-x-4"},$e={class:"space-y-2"},_e={key:1},Le={key:2,class:"grid gap-3"},Se={class:"grid gap-3"},ke={class:"flex items-center justify-between"},Pe={class:"text-muted-foreground"},Ce={class:"flex items-center gap-2"},Ve={class:"flex items-center justify-between"},Ie={class:"text-muted-foreground"},qe={class:"flex items-center gap-2"},Me={class:"flex items-center justify-between"},Oe={class:"text-muted-foreground"},je={class:"flex items-center gap-2"},Be={class:"flex items-center justify-between"},Ne={class:"text-muted-foreground"},He={class:"flex items-center gap-2"},De={class:"flex items-center justify-between"},Re={class:"text-muted-foreground"},Ee={class:"flex items-center gap-2"},Fe={class:"flex items-center justify-between"},Te={class:"text-muted-foreground"},ze={class:"flex items-center gap-2"},Qe={class:"flex items-center justify-between"},Ue={class:"text-muted-foreground"},Ae={class:"flex items-center gap-2"},Ge={class:"text-xs text-muted-foreground"},Je={dateTime:"2023-11-23"},Ke={__name:"HealthLatestCards",props:{healthLatest:{type:Object,required:!0},isLoadingHealth:{type:Boolean,required:!0},SystemUptime:{type:String}},emits:["refresh"],setup(n,{emit:f}){$({}),$({});const l=f;function i(){l("refresh")}return(u,d)=>{const y=O("Button");return m(),p("div",null,[e(t(q),{class:"overflow-hidden"},{default:a(()=>[e(t(C),{class:"flex flex-row items-start bg-muted/50"},{default:a(()=>[s("div",he,[e(t(V),{class:"flex items-center gap-2 text-lg group"},{default:a(()=>d[1]||(d[1]=[g("Latest Health")])),_:1}),e(t(D),null,{default:a(()=>d[2]||(d[2]=[g("Server health information")])),_:1})]),s("div",be,[e(y,{onClick:d[0]||(d[0]=v=>i()),size:"sm",variant:"outline",class:"gap-1 hover:bg-rcgray-800"},{default:a(()=>[e(t(b),{icon:"flat-color-icons:refresh",class:"hover:animate-pulse"})]),_:1})])]),_:1}),e(t(I),{class:"text-sm"},{default:a(()=>[n.isLoadingHealth?(m(),p("div",we,[e(t(r),{class:"w-12 h-12 rounded-full"}),s("div",$e,[e(t(r),{class:"h-4 w-[250px]"}),e(t(r),{class:"w-[400px] h-4"}),e(t(r),{class:"w-[400px] h-4"}),e(t(r),{class:"w-[400px] h-4"}),e(t(r),{class:"w-[400px] h-4"}),e(t(r),{class:"w-[400px] h-4"}),e(t(r),{class:"w-[400px] h-4"}),e(t(r),{class:"w-[400px] h-4"}),e(t(r),{class:"w-[400px] h-4"})])])):w("",!0),n.healthLatest?w("",!0):(m(),p("div",_e,"asd")),n.healthLatest.data?(m(),p("div",Le,[s("dl",Se,[s("div",ke,[s("dt",Pe,x(n.healthLatest.data[0].label),1),s("dd",Ce,[e(t(b),{icon:n.healthLatest.data[0].status==="Ok"?"fluent-color:checkmark-circle-32":"fluent-color:dismiss-circle-32"},null,8,["icon"])])]),s("div",Ve,[s("dt",Ie,x(n.healthLatest.data[1].label),1),s("dd",qe,[e(t(b),{icon:n.healthLatest.data[1].status==="Ok"?"fluent-color:checkmark-circle-32":"fluent-color:dismiss-circle-32"},null,8,["icon"])])]),s("div",Me,[s("dt",Oe,x(n.healthLatest.data[3].label),1),s("dd",je,[e(t(b),{icon:n.healthLatest.data[3].status==="Running"?"fluent-color:checkmark-circle-32":"fluent-color:dismiss-circle-32"},null,8,["icon"])])]),s("div",Be,[s("dt",Ne,x(n.healthLatest.data[4].label),1),s("dd",He,[e(t(b),{icon:n.healthLatest.data[4].status==="Reachable"?"fluent-color:checkmark-circle-32":"fluent-color:dismiss-circle-32"},null,8,["icon"])])]),s("div",De,[s("dt",Re,x(n.healthLatest.data[6].label),1),s("dd",Ee,[e(t(b),{icon:n.healthLatest.data[6].status==="Ok"?"fluent-color:checkmark-circle-32":"fluent-color:dismiss-circle-32"},null,8,["icon"])])]),s("div",Fe,[s("dt",Te,x(n.healthLatest.data[7].label),1),s("dd",ze,x(n.healthLatest.data[7].status),1)]),s("div",Qe,[s("dt",Ue,x(n.healthLatest.data[2].label),1),s("dd",Ae,x(n.healthLatest.data[2].status),1)])])])):w("",!0)]),_:1}),e(t(T),{class:"flex flex-row items-center px-6 py-3 border-t bg-muted/50"},{default:a(()=>[s("div",Ge,[d[3]||(d[3]=g(" System Uptime: ")),s("time",Je,x(n.SystemUptime),1)])]),_:1})]),_:1})])}}},We={class:"grid gap-0.5"},Xe={class:"flex items-center gap-1 ml-auto"},Ye={key:0,class:"flex items-start w-full space-x-4"},Ze={class:"space-y-2"},et={key:1,class:"grid gap-3"},tt={class:"grid gap-3"},st={class:"flex items-center justify-between"},ot={class:"flex items-center gap-2"},nt={class:"flex items-center justify-between"},lt={class:"flex items-center gap-2"},at={class:"flex items-center justify-between"},it={class:"flex items-center gap-2"},rt={class:"flex items-center justify-between"},dt={class:"flex items-center gap-2"},ct={class:"flex items-center justify-between"},ut={class:"flex items-center gap-2"},ft={class:"flex items-center justify-between"},mt={class:"flex items-center gap-2"},gt={class:"flex items-center justify-between"},xt={class:"flex items-center gap-2"},yt={class:"flex items-center gap-2 text-xs text-muted-foreground"},pt={__name:"SysinfoCards",props:{sysinfo:{type:Object,required:!0},isLoadingSysinfo:{type:Boolean,required:!0}},emits:["refresh"],setup(n,{emit:f}){const l=$({}),i=$({}),{toClipboard:u}=Z(),d=f,y=async(_,o)=>{try{await u(JSON.stringify(o)),i.value[_]=!0,setTimeout(()=>{i.value[_]=!1},1500)}catch(k){console.error("Failed to copy:",k)}},v=_=>{l.value[_]=!0},h=_=>{l.value[_]=!1};function M(){d("refresh")}return(_,o)=>{const k=O("Button");return m(),p("div",null,[e(t(q),{class:"overflow-hidden"},{default:a(()=>[e(t(C),{class:"flex flex-row items-start bg-muted/50"},{default:a(()=>[s("div",We,[e(t(V),{class:"flex items-center gap-2 text-lg group"},{default:a(()=>o[22]||(o[22]=[g("System Details")])),_:1}),e(t(D),null,{default:a(()=>o[23]||(o[23]=[g("Useful system information for support")])),_:1})]),s("div",Xe,[e(k,{onClick:o[0]||(o[0]=c=>M()),size:"sm",variant:"outline",class:"gap-1 hover:bg-rcgray-800"},{default:a(()=>[e(t(b),{icon:"flat-color-icons:refresh",class:"hover:animate-pulse"})]),_:1})])]),_:1}),e(t(I),{class:"text-sm"},{default:a(()=>[n.isLoadingSysinfo?(m(),p("div",Ye,[e(t(r),{class:"w-12 h-12 rounded-full"}),s("div",Ze,[e(t(r),{class:"h-4 w-[250px]"}),e(t(r),{class:"w-[400px] h-4"}),e(t(r),{class:"w-[400px] h-4"}),e(t(r),{class:"w-[400px] h-4"}),e(t(r),{class:"w-[400px] h-4"}),e(t(r),{class:"w-[400px] h-4"}),e(t(r),{class:"w-[400px] h-4"}),e(t(r),{class:"w-[400px] h-4"}),e(t(r),{class:"w-[400px] h-4"})])])):w("",!0),n.isLoadingSysinfo?w("",!0):(m(),p("div",et,[s("dl",tt,[s("div",st,[o[24]||(o[24]=s("dt",{class:"text-muted-foreground"},"OSVersion",-1)),s("dd",ot,[g(x(n.sysinfo.OSVersion)+" ",1),e(t(b),{icon:i.value.OSVersion?"material-symbols:check-circle-outline":l.value.OSVersion?"material-symbols:content-copy":"material-symbols:content-copy-outline",class:L([i.value.OSVersion?"text-green-500":"text-gray-500","cursor-pointer hover:text-gray-700"]),onClick:o[1]||(o[1]=c=>y("OSVersion",n.sysinfo.OSVersion)),onMouseover:o[2]||(o[2]=c=>v("OSVersion")),onMouseleave:o[3]||(o[3]=c=>h("OSVersion"))},null,8,["icon","class"])])]),s("div",nt,[o[25]||(o[25]=s("dt",{class:"text-muted-foreground"},"localIp",-1)),s("dd",lt,[g(x(n.sysinfo.localIp)+" ",1),e(t(b),{icon:i.value.localIp?"material-symbols:check-circle-outline":l.value.localIp?"material-symbols:content-copy":"material-symbols:content-copy-outline",class:L([i.value.localIp?"text-green-500":"text-gray-500","cursor-pointer hover:text-gray-700"]),onClick:o[4]||(o[4]=c=>y("localIp",n.sysinfo.localIp)),onMouseover:o[5]||(o[5]=c=>v("localIp")),onMouseleave:o[6]||(o[6]=c=>h("localIp"))},null,8,["icon","class"])])]),s("div",at,[o[26]||(o[26]=s("dt",{class:"text-muted-foreground"},"PublicIP",-1)),s("dd",it,[g(x(n.sysinfo.PublicIP)+" ",1),e(t(b),{icon:i.value.PublicIP?"material-symbols:check-circle-outline":l.value.PublicIP?"material-symbols:content-copy":"material-symbols:content-copy-outline",class:L([i.value.PublicIP?"text-green-500":"text-gray-500","cursor-pointer hover:text-gray-700"]),onClick:o[7]||(o[7]=c=>y("PublicIP",n.sysinfo.PublicIP)),onMouseover:o[8]||(o[8]=c=>v("PublicIP")),onMouseleave:o[9]||(o[9]=c=>h("PublicIP"))},null,8,["icon","class"])])]),s("div",rt,[o[27]||(o[27]=s("dt",{class:"text-muted-foreground"},"ServerName",-1)),s("dd",dt,[g(x(n.sysinfo.ServerName)+" ",1),e(t(b),{icon:i.value.ServerName?"material-symbols:check-circle-outline":l.value.ServerName?"material-symbols:content-copy":"material-symbols:content-copy-outline",class:L([i.value.ServerName?"text-green-500":"text-gray-500","cursor-pointer hover:text-gray-700"]),onClick:o[10]||(o[10]=c=>y("ServerName",n.sysinfo.ServerName)),onMouseover:o[11]||(o[11]=c=>v("ServerName")),onMouseleave:o[12]||(o[12]=c=>h("ServerName"))},null,8,["icon","class"])])]),s("div",ct,[o[28]||(o[28]=s("dt",{class:"text-muted-foreground"},"PHPVersion",-1)),s("dd",ut,[g(x(n.sysinfo.PHPVersion)+" ",1),e(t(b),{icon:i.value.PHPVersion?"material-symbols:check-circle-outline":l.value.PHPVersion?"material-symbols:content-copy":"material-symbols:content-copy-outline",class:L([i.value.PHPVersion?"text-green-500":"text-gray-500","cursor-pointer hover:text-gray-700"]),onClick:o[13]||(o[13]=c=>y("PHPVersion",n.sysinfo.PHPVersion)),onMouseover:o[14]||(o[14]=c=>v("PHPVersion")),onMouseleave:o[15]||(o[15]=c=>h("PHPVersion"))},null,8,["icon","class"])])]),s("div",ft,[o[29]||(o[29]=s("dt",{class:"text-muted-foreground"},"RedisVersion",-1)),s("dd",mt,[g(x(n.sysinfo.RedisVersion)+" ",1),e(t(b),{icon:i.value.RedisVersion?"material-symbols:check-circle-outline":l.value.RedisVersion?"material-symbols:content-copy":"material-symbols:content-copy-outline",class:L([i.value.RedisVersion?"text-green-500":"text-gray-500","cursor-pointer hover:text-gray-700"]),onClick:o[16]||(o[16]=c=>y("RedisVersion",n.sysinfo.RedisVersion)),onMouseover:o[17]||(o[17]=c=>v("RedisVersion")),onMouseleave:o[18]||(o[18]=c=>h("RedisVersion"))},null,8,["icon","class"])])]),s("div",gt,[o[30]||(o[30]=s("dt",{class:"text-muted-foreground"},"MySQLVersion",-1)),s("dd",xt,[g(x(n.sysinfo.MySQLVersion)+" ",1),e(t(b),{icon:i.value.MySQLVersion?"material-symbols:check-circle-outline":l.value.MySQLVersion?"material-symbols:content-copy":"material-symbols:content-copy-outline",class:L([i.value.MySQLVersion?"text-green-500":"text-gray-500","cursor-pointer hover:text-gray-700"]),onClick:o[19]||(o[19]=c=>y("MySQLVersion",n.sysinfo.MySQLVersion)),onMouseover:o[20]||(o[20]=c=>v("MySQLVersion")),onMouseleave:o[21]||(o[21]=c=>h("MySQLVersion"))},null,8,["icon","class"])])])])]))]),_:1}),e(t(T),{class:"flex flex-row items-center px-6 py-3 border-t bg-muted/50"},{default:a(()=>[s("div",yt,[e(t(b),{icon:"logos:laravel"}),g(" Laravel Version: "+x(n.sysinfo.LaravelVersion),1)])]),_:1})]),_:1})])}}},vt={__name:"Popover",props:{defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1},modal:{type:Boolean,required:!1}},emits:["update:open"],setup(n,{emit:f}){const u=R(n,f);return(d,y)=>(m(),N(t(U),E(F(t(u))),{default:a(()=>[B(d.$slots,"default")]),_:3},16))}},ht={__name:"PopoverTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const f=n;return(l,i)=>(m(),N(t(A),E(F(f)),{default:a(()=>[B(l.$slots,"default")]),_:3},16))}},bt=Object.assign({inheritAttrs:!1},{__name:"PopoverContent",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1,default:4},align:{type:null,required:!1,default:"center"},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},updatePositionStrategy:{type:String,required:!1},prioritizePosition:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},class:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:f}){const l=n,i=f,u=G(()=>{const{class:y,...v}=l;return v}),d=R(u,i);return(y,v)=>(m(),N(t(W),null,{default:a(()=>[e(t(J),K({...t(d),...y.$attrs},{class:t(H)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",l.class)}),{default:a(()=>[B(y.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),wt={class:"border-t border-b topRow"},$t={class:"sticky top-0 flex items-center h-12 gap-4 px-8"},_t={class:"grid gap-4"},Lt={class:"flex-col text-sm font-medium md:flex md:flex-row md:items-center md:text-sm"},St={href:"#",class:"flex items-center gap-2 px-4 py-2 font-semibold rounded-md text-md hover:bg-rcgray-800"},kt={href:"#",class:"flex items-center gap-2 px-4 py-2 font-semibold rounded-md text-md hover:bg-rcgray-800"},Pt={href:"#",class:"flex items-center gap-2 px-4 py-2 font-semibold rounded-md text-md hover:bg-rcgray-800"},Ct={href:"#",class:"flex items-center gap-2 px-4 py-2 font-semibold rounded-md text-md hover:bg-rcgray-800"},Vt={class:"flex justify-between w-full"},It={href:"#",class:"flex items-center gap-2 px-4 py-2 font-semibold rounded-md text-md hover:bg-rcgray-800"},qt={href:"#",class:"flex items-center gap-2 px-4 py-2 font-semibold rounded-md text-md hover:bg-rcgray-800"},Mt={href:"#",class:"flex items-center gap-2 px-4 py-2 font-semibold rounded-md text-md hover:bg-rcgray-800"},Ot={key:1,class:"flex items-center ml-auto"},jt={class:"ml-2 text-muted-foreground"},Bt={__name:"DashboardActions",props:{licenseInfo:Object},setup(n){const f=$(!1),l=()=>{f.value=!f.value};return(i,u)=>{const d=O("Icon"),y=O("router-link");return m(),p("div",wt,[s("header",$t,[e(t(vt),null,{default:a(()=>[e(t(ht),{"as-child":""},{default:a(()=>[s("button",{onClick:l,variant:"outline",class:"md:hidden"},[e(d,{icon:f.value?"material-symbols-light:menu-open":"material-symbols-light:menu",class:"w-6 h-6"},null,8,["icon"])])]),_:1}),e(t(bt),{class:"p-2 w-80",align:"start"},{default:a(()=>[s("div",_t,[s("nav",Lt,[s("a",St,[e(d,{icon:"fluent-color:add-circle-28",class:""}),u[0]||(u[0]=s("span",null,"Create New Device",-1))]),s("a",kt,[e(d,{icon:"fluent-color:apps-24",class:""}),u[1]||(u[1]=g(" View Devices "))]),s("a",Pt,[e(d,{icon:"fluent-color:search-visual-16",class:""}),u[2]||(u[2]=g(" Search Configs "))]),s("a",Ct,[e(d,{icon:"flat-color-icons:delete-database",class:""}),u[3]||(u[3]=g(" Purge Failed Configs "))])])])]),_:1})]),_:1}),s("div",Vt,[s("nav",{class:L([{hidden:!f.value,flex:f.value},"flex-col hidden font-medium text-md md:flex md:flex-row md:items-center md:text-sm"])},[s("a",It,[e(d,{icon:"fluent-color:add-circle-28",class:""}),u[4]||(u[4]=s("span",null,"Create New Device",-1))]),e(y,{to:{name:"inventory",params:{view:"devices"}},class:"flex items-center gap-2 px-4 py-2 font-semibold rounded-md text-md hover:bg-rcgray-800"},{default:a(()=>[e(d,{icon:"fluent-color:apps-24",class:""}),u[5]||(u[5]=g(" View Devices "))]),_:1}),s("a",qt,[e(d,{icon:"fluent-color:search-visual-16",class:""}),u[6]||(u[6]=g(" Search Configs "))]),s("a",Mt,[e(d,{icon:"flat-color-icons:delete-database",class:""}),u[7]||(u[7]=g(" Purge Failed Configs "))])],2),n.licenseInfo.data?w("",!0):(m(),N(t(r),{key:0,class:"flex items-center ml-auto h-4 w-[50px]"})),n.licenseInfo.data?(m(),p("div",Ot,[e(d,{icon:"ph:code-duotone",class:"text-muted-foreground"}),s("span",jt,x(n.licenseInfo.data.version)+"-Core",1)])):w("",!0)])])])}}},Nt=X(Bt,[["__scopeId","data-v-c10ec258"]]),Ht={class:"flex flex-col flex-1 gap-2 dark:bg-rcgray-900"},Dt={class:"grid grid-cols-1 gap-2 px-8 lg:grid-cols-2 md:gap-4 xl:gap-8"},Rt={class:"flex-1"},Et={class:"flex-1"},Ut={__name:"Main",props:{},setup(n){const{fetchSysinfo:f,fetchConfiginfo:l,fetchHealth:i,fetchLicenseInfo:u,sysinfo:d,configinfo:y,healthLatest:v,licenseInfo:h,isLoadingSysinfo:M,isLoadingConfiginfo:_,isLoadingHealth:o,toastSuccess:k,toastError:c}=ee();return Y(()=>{f(),l(),i(),u()}),(S,P)=>(m(),p("main",Ht,[e(Nt,{licenseInfo:t(h)},null,8,["licenseInfo"]),e(ve,{configinfo:t(y),isLoadingConfiginfo:t(_)},null,8,["configinfo","isLoadingConfiginfo"]),s("div",Dt,[s("div",Rt,[e(Ke,{healthLatest:t(v),isLoadingHealth:t(o),SystemUptime:t(d).SystemUptime},null,8,["healthLatest","isLoadingHealth","SystemUptime"])]),s("div",Et,[e(pt,{onRefresh:P[0]||(P[0]=Ft=>t(f)(!0)),sysinfo:t(d),isLoadingSysinfo:t(M)},null,8,["sysinfo","isLoadingSysinfo"])])])]))}};export{Ut as default};