import{b as c,o as i,c as a,i as r,d as l}from"./app-fY3sLAf_.js";const p={class:"flex items-center justify-center text-sm text-muted-foreground"},f={__name:"Loading",props:{},setup(o){return(n,t)=>{const e=c("Icon");return i(),a("div",p,[t[0]||(t[0]=r("span",null,"Loading",-1)),l(e,{icon:"eos-icons:three-dots-loading",class:"ml-2"})])}}};function u(o){return{all:o=o||new Map,on:function(n,t){var e=o.get(n);e?e.push(t):o.set(n,[t])},off:function(n,t){var e=o.get(n);e&&(t?e.splice(e.indexOf(t)>>>0,1):o.set(n,[]))},emit:function(n,t){var e=o.get(n);e&&e.slice().map(function(s){s(t)}),(e=o.get("*"))&&e.slice().map(function(s){s(n,t)})}}}const d=u();export{f as _,d as e};