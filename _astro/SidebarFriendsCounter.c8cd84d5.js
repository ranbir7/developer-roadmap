import{j as u}from"./jsx-runtime.6940b965.js";import{a}from"./http.387f5009.js";import{r as n}from"./index.070054a4.js";import"./jwt.ab9b7b25.js";function m(){const[r,s]=n.useState();async function o(){const{response:e,error:i}=await a("https://api.roadmap.sh/v1-get-friend-counts");i||!e||s(e)}n.useEffect(()=>{o().finally(()=>null)},[]);const t=r?.receivedCount||0;return t?u.jsx("span",{className:"flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white",children:t}):null}export{m as SidebarFriendsCounter};
