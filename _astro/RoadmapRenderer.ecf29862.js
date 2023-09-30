import{j as o}from"./jsx-runtime.6940b965.js";import{r as i}from"./index.070054a4.js";import{r as C}from"./renderer.d407ef8a.js";import{r as E,u as j,a as L,b}from"./resource-progress.9335d95d.js";import{p as y}from"./page.c1a8a472.js";import{u as S}from"./use-toast.fb52de5d.js";import{c as T}from"./createLucideIcon.3c9fdece.js";import"./jwt.ab9b7b25.js";const I=T("CircleSlash",[["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),N=i.forwardRef((d,t)=>{const{roadmap:e,onRendered:a}=d;return i.useEffect(()=>{(async()=>{const u=document.getElementById("resource-svg-wrap");if(!u)return;const p=await C(e);u?.replaceChildren(p),a?.()})()},[e]),o.jsx("div",{ref:t,id:"resource-svg-wrap"})});function D(){return o.jsx("div",{className:"flex h-full items-center justify-center",children:o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx(I,{className:"mx-auto h-20 w-20 text-gray-400"}),o.jsx("h3",{className:"mt-4",children:"This roadmap is currently empty."})]})})}function k(d){const t=d?.closest("g")||{},e=t?.dataset?.nodeId,a=t?.dataset?.type;return!e||!a?null:{nodeId:e,nodeType:a,targetGroup:t}}const v=["topic","subtopic","button","link-item"];function O(d){const{roadmap:t}=d,e=i.useRef(null),a=t._id,u=S(),[p,R]=i.useState(!1);async function m(r,c){y.set("Updating progress"),j({resourceId:a,resourceType:"roadmap",topicId:r},c).then(()=>{L(r,c)}).catch(n=>{u.error("Something went wrong, please try again."),console.error(n)}).finally(()=>{y.set(""),b()})}const h=i.useCallback(r=>{const c=r.target,{nodeId:n,nodeType:s,targetGroup:l}=k(c)||{};if(!n||!s||!v.includes(s))return;if(s==="button"||s==="link-item"){const g=l?.dataset?.link||"";g.startsWith("http")?window.open(g,"_blank"):window.location.href=g;return}const f=l?.classList.contains("learning"),w=l?.classList.contains("skipped");if(r.shiftKey){r.preventDefault(),m(n,f?"pending":"learning");return}else if(r.altKey){r.preventDefault(),m(n,w?"pending":"skipped");return}window.dispatchEvent(new CustomEvent("roadmap.node.click",{detail:{topicId:n,resourceId:t?._id,resourceType:"roadmap",isCustomResource:!0}}))},[]),x=i.useCallback(r=>{r.preventDefault();const c=r.target,{nodeId:n,nodeType:s,targetGroup:l}=k(c)||{};if(!n||!s||!v.includes(s)||s==="button"||s==="link-item")return;const f=l?.classList.contains("done");m(n,f?"pending":"done")},[]);return i.useEffect(()=>{if(e?.current)return e?.current?.addEventListener("click",h),e?.current?.addEventListener("contextmenu",x),()=>{e?.current?.removeEventListener("click",h),e?.current?.removeEventListener("contextmenu",x)}},[]),o.jsx("div",{className:"flex grow bg-gray-50 pb-8 pt-4 sm:pt-12",children:o.jsxs("div",{className:"container !max-w-[1000px]",children:[o.jsx(N,{ref:e,roadmap:{nodes:t?.nodes,edges:t?.edges},onRendered:()=>{E("roadmap",a).then(()=>{t?.nodes?.length===0&&(R(!0),e?.current?.classList.add("hidden"))})}}),p&&o.jsx(D,{})]})})}export{O as R,v as a,k as g};
