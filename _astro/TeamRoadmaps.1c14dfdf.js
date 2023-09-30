import{j as e}from"./jsx-runtime.6940b965.js";import{g as W}from"./browser.6245b9a5.js";import{r as l}from"./index.070054a4.js";import{a as k,d as E}from"./http.387f5009.js";import{p}from"./page.c1a8a472.js";import{R as X}from"./roadmap.98480e4e.js";import{u as Y}from"./index.2d760e66.js";import{c as ee}from"./team.f4809964.js";import{u as se}from"./use-toast.fb52de5d.js";import{U as ae,S as te}from"./UpdateTeamResourceModal.4a69a8a6.js";import{M as re}from"./roadmap.9c1903ec.js";import{M as oe}from"./map.07b8754f.js";import{S as M}from"./shapes.18fdadc5.js";import{C as ne}from"./CreateRoadmapModal.4f9f6a65.js";import{M as le}from"./more-vertical.fd1e64f8.js";import{u as ie}from"./use-outside-click.d7ce4a3d.js";import{M as de,L as _,T as me,S as ce}from"./ShareOptionsModal.15b95307.js";import{c as S}from"./createLucideIcon.3c9fdece.js";import{E as L,G as pe}from"./globe.097e40a9.js";import{U}from"./users.9673a18c.js";import"./jwt.ab9b7b25.js";import"./index.a98c85f5.js";import"./index.3e34842a.js";import"./toast.1fe7142d.js";import"./use-keydown.bb1f91bb.js";import"./close.bb7a0ac2.js";import"./index.es.ebad3893.js";import"./Spinner.799b0955.js";import"./resource-progress.9335d95d.js";/* empty css                       */import"./classname.585fc13a.js";import"./use-copy-text.77785bb1.js";import"./check-circle.045c0bed.js";const ue=S("PackageMinus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]),xe=S("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]),he=S("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);function fe(r){const{onClose:o,showDefaultRoadmapsModal:n,showCreateCustomRoadmapModal:d}=r;return e.jsxs(re,{onClose:o,bodyClassName:"p-4",children:[e.jsx("h2",{className:"mb-0.5 text-left text-2xl font-semibold",children:"Pick an Option"}),e.jsx("p",{className:"text-left text-sm text-gray-500 mb-4",children:"Choose from default roadmaps or create from scratch."}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("button",{className:"text-base flex items-center rounded-md border border-gray-300 p-2 px-4 text-left font-medium hover:bg-gray-100",onClick:n,children:[e.jsx(oe,{className:"mr-2 inline-block",size:20}),"Use a Default Roadmap"]}),e.jsxs("button",{className:"text-base flex items-center rounded-md border border-gray-300 p-2 px-4 text-left font-medium hover:bg-gray-100",onClick:d,children:[e.jsx(M,{className:"mr-2 inline-block",size:20}),"Create from Scratch"]})]})]})}function I(r){const{onDelete:o,onUpdateSharing:n,onCustomize:d}=r,m=l.useRef(null),[c,i]=l.useState(!1);return ie(m,()=>{i(!1)}),e.jsxs("div",{className:"relative",children:[e.jsx("button",{disabled:!1,onClick:()=>i(!c),className:"hidden items-center opacity-60 transition-opacity hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-30 sm:flex",children:e.jsx("img",{alt:"menu",src:le.src,className:"h-4 w-4"})}),e.jsxs("button",{disabled:!1,onClick:()=>i(!c),className:"flex items-center gap-1 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs hover:bg-gray-50 focus:outline-none sm:hidden",children:[e.jsx(de,{size:14}),"Options"]}),c&&e.jsx("div",{ref:m,className:"align-right absolute right-auto top-full z-50 mt-1 w-[140px] rounded-md bg-slate-800 px-2 py-2 text-white shadow-md sm:right-0",children:e.jsxs("ul",{children:[n&&e.jsx("li",{children:e.jsxs("button",{onClick:()=>{i(!1),n()},className:"flex w-full cursor-pointer items-center rounded p-2 text-sm font-medium text-slate-100 hover:bg-slate-700",children:[e.jsx(_,{size:14,className:"mr-2"}),"Sharing"]})}),d&&e.jsx("li",{children:e.jsxs("button",{onClick:()=>{i(!1),d()},className:"flex w-full cursor-pointer items-center rounded p-2 text-sm font-medium text-slate-100 hover:bg-slate-700",children:[e.jsx(M,{size:14,className:"mr-2"}),"Customize"]})}),o&&e.jsx("li",{children:e.jsxs("button",{onClick:()=>{i(!1),o()},className:"flex w-full cursor-pointer items-center rounded p-2 text-sm font-medium text-slate-100 hover:bg-slate-700",children:[e.jsx(me,{size:14,className:"mr-2"}),"Delete"]})})]})})]})}function Ye(){const{t:r}=W(),o=Y(ee),n=se(),[d,m]=l.useState(!0),[c,i]=l.useState(!1),[F,C]=l.useState(!1),[V,N]=l.useState(!1),[w,T]=l.useState(""),[f,q]=l.useState(),[g,x]=l.useState([]),[G,Z]=l.useState([]),[u,R]=l.useState(null);async function A(){const{error:s,response:a}=await k("/pages.json");if(s){n.error(s.message||"Something went wrong");return}if(!a)return[];const t=a.filter(v=>v.group==="Roadmaps").sort((v,Q)=>v.title==="Android"?1:v.title.localeCompare(Q.title));return Z(t),a}async function B(s){const{response:a,error:t}=await k(`https://api.roadmap.sh/v1-get-team/${s}`);if(t||!a){n.error("Error loading team"),window.location.href="/account";return}q(a)}async function P(s){const{error:a,response:t}=await k(`https://api.roadmap.sh/v1-get-team-resource-config/${s}`);if(a||!Array.isArray(t)){console.error(a);return}x(t)}l.useEffect(()=>{r&&(m(!0),Promise.all([B(r),P(r),A()]).finally(()=>{p.set(""),m(!1)}))},[r]);async function H(s){if(!f?._id)return;n.loading("Deleting roadmap"),p.set("Deleting roadmap from team");const{error:a,response:t}=await E(`https://api.roadmap.sh/v1-delete-team-resource-config/${f._id}`,{resourceId:s,resourceType:"roadmap"});if(a||!t){n.error(a?.message||"Something went wrong");return}n.success("Roadmap removed"),x(t)}async function z(s){if(!r)return;n.loading("Adding roadmap"),p.set("Adding roadmap"),m(!0);const{error:a,response:t}=await E(`https://api.roadmap.sh/v1-update-team-resource-config/${r}`,{teamId:r,resourceId:s,resourceType:"roadmap",removed:[]});if(a||!t){n.error(a?.message||"Error adding roadmap");return}x(t),n.success("Roadmap added")}async function b(s){p.set("Removing roadmap"),H(s).finally(()=>{p.set("")})}if(l.useEffect(()=>{function s(a){const{roadmapId:t}=a?.detail;t&&(A().finally(()=>{}),z(t).finally(()=>{p.set("")}))}return window.addEventListener("custom-roadmap-created",s),()=>{window.removeEventListener("custom-roadmap-created",s)}},[]),!f)return null;const $=c&&e.jsx(fe,{onClose:()=>i(!1),showDefaultRoadmapsModal:()=>{C(!0),i(!1)},showCreateCustomRoadmapModal:()=>{N(!0),i(!1)}}),D=F&&e.jsx(te,{onClose:()=>C(!1),teamResourceConfig:g,allRoadmaps:G,teamId:r,onRoadmapAdd:s=>{z(s).finally(()=>{p.set("")})},onRoadmapRemove:s=>{confirm("Are you sure you want to remove this roadmap?")&&b(s).finally(()=>{})}}),O=V&&e.jsx(ne,{teamId:r,onClose:()=>{N(!1)},onCreated:()=>{P(r).finally(()=>null),N(!1)}}),y=g.filter(s=>s.isCustomResource&&!s.topics),j=g.filter(s=>s.isCustomResource&&s.topics),h=g.filter(s=>!s.isCustomResource);if(!(j.length>0||h.length>0||y.length>0&&o)&&!d)return e.jsxs("div",{className:"flex flex-col items-center p-4 py-20",children:[$,D,O,e.jsx("img",{alt:"roadmap",src:X.src,className:"mb-4 h-24 w-24 opacity-10"}),e.jsx("h3",{className:"mb-1 text-2xl font-bold text-gray-900",children:"No roadmaps"}),e.jsx("p",{className:"text-base text-gray-500",children:o?"Add a roadmap to start tracking your team":"Ask your team admin to add some roadmaps"}),o&&e.jsx("button",{className:"mt-4 rounded-lg bg-black px-4 py-2 font-medium text-white hover:bg-gray-900",onClick:()=>i(!0),children:"Add roadmap"})]});const J=w&&e.jsx(ae,{onClose:()=>T(""),resourceId:w,resourceType:"roadmap",teamId:f?._id,setTeamResourceConfig:x,defaultRemovedItems:h.find(s=>s.resourceId===w)?.removed||[]}),K=u&&e.jsx(ce,{visibility:u.visibility,sharedTeamMemberIds:u.sharedTeamMemberIds,sharedFriendIds:u.sharedFriendIds,teamId:r,roadmapId:u.resourceId,onShareSettingsUpdate:s=>{x(a=>a.map(t=>t.resourceId!==u.resourceId?t:{...t,...s}))},onClose:()=>R(null)});return e.jsxs("div",{children:[$,D,O,J,K,o&&y.length>0&&e.jsxs("div",{className:"mb-5",children:[e.jsx("div",{className:"mb-2 flex items-center justify-between",children:e.jsxs("h3",{className:"flex w-full items-center justify-between text-xs uppercase text-gray-400",children:[e.jsx("span",{className:"flex",children:"Placeholder Roadmaps"}),e.jsxs("span",{className:"normal-case",children:["Total ",y.length," roadmap(s)"]})]})}),e.jsx("div",{className:"flex flex-col divide-y rounded-md border",children:y.map(s=>e.jsxs("div",{className:"grid grid-cols-1 p-2.5 sm:grid-cols-[auto_173px]",children:[e.jsxs("div",{className:"mb-3 grid sm:mb-0",children:[e.jsx("p",{className:"mb-1.5 truncate text-base font-medium leading-tight text-black",children:s.title}),e.jsx("span",{className:"text-xs italic leading-none text-gray-400/60",children:"Placeholder roadmap"})]}),o&&e.jsxs("div",{className:"flex items-center justify-start gap-2 sm:justify-end",children:[e.jsx(I,{onUpdateSharing:()=>{R(s)},onDelete:()=>{confirm("Are you sure you want to remove this roadmap?")&&b(s.resourceId).finally(()=>{})}}),e.jsxs("a",{href:`https://draw.roadmap.sh/${s.resourceId}`,className:"flex gap-2 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs hover:bg-gray-50 focus:outline-none",target:"_blank",children:[e.jsx(he,{className:"inline-block h-4 w-4"}),"Create Roadmap"]})]})]},s.resourceId))})]}),j.length>0&&e.jsxs("div",{className:"mb-5",children:[e.jsx("div",{className:"mb-2 flex items-center justify-between",children:e.jsxs("h3",{className:"flex w-full items-center justify-between text-xs uppercase text-gray-400",children:[e.jsx("span",{className:"flex",children:"Custom Roadmaps"}),e.jsxs("span",{className:"normal-case",children:["Total ",j.length," roadmap(s)"]})]})}),e.jsx("div",{className:"flex flex-col divide-y rounded-md border",children:j.map(s=>{const a=`https://draw.roadmap.sh/${s.resourceId}`;return e.jsxs("div",{className:"grid grid-cols-1 p-2.5 sm:grid-cols-[auto_110px]",children:[e.jsxs("div",{className:"mb-3 grid grid-cols-1 sm:mb-0",children:[e.jsx("p",{className:"mb-1.5 truncate text-base font-medium leading-tight text-black",children:s.title}),e.jsxs("span",{className:"flex items-center text-xs leading-none text-gray-400",children:[e.jsx(be,{visibility:s.visibility,sharedTeamMemberIds:s.sharedTeamMemberIds,sharedFriendIds:s.sharedFriendIds}),e.jsx("span",{className:"mx-2 font-semibold",children:"·"}),e.jsx(M,{size:16,className:"mr-1 inline-block h-4 w-4"}),s.topics," topic"]})]}),e.jsxs("div",{className:"mr-1 flex items-center justify-start sm:justify-end",children:[o&&e.jsx(I,{onUpdateSharing:()=>{R(s)},onCustomize:()=>{window.open(a,"_blank")},onDelete:()=>{confirm("Are you sure you want to remove this roadmap?")&&b(s.resourceId).finally(()=>{})}}),e.jsxs("a",{href:`/r?id=${s.resourceId}`,className:"ml-2 flex items-center gap-2 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs hover:bg-gray-50 focus:outline-none",target:"_blank",children:[e.jsx(L,{className:"inline-block h-4 w-4"}),"Visit"]})]})]},s.resourceId)})})]}),h.length>0&&e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 flex items-center justify-between",children:e.jsxs("h3",{className:"flex w-full items-center justify-between text-xs uppercase text-gray-400",children:[e.jsx("span",{className:"flex",children:"Default Roadmaps"}),e.jsxs("span",{className:"normal-case",children:["Total ",h.length," roadmap(s)"]})]})}),e.jsx("div",{className:"flex flex-col divide-y rounded-md border",children:h.map(s=>e.jsxs("div",{className:"grid grid-cols-1 p-3 sm:grid-cols-[auto_110px]",children:[e.jsxs("div",{className:"mb-3 grid grid-cols-1 sm:mb-0",children:[e.jsx("p",{className:"mb-1.5 truncate text-base font-medium leading-tight text-black",children:s.title}),e.jsxs("span",{className:"flex items-center text-xs leading-none text-gray-400",children:[s?.removed?.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(ue,{size:16,className:"mr-1 inline-block h-4 w-4"}),s.removed.length," topics removed"]}),!s?.removed?.length&&e.jsxs(e.Fragment,{children:[e.jsx(xe,{size:16,className:"mr-1 inline-block h-4 w-4"}),"No changes made"]})]})]}),e.jsxs("div",{className:"mr-1 flex items-center justify-start sm:justify-end",children:[o&&e.jsx(I,{onCustomize:()=>{T(s.resourceId)},onDelete:()=>{confirm("Are you sure you want to remove this roadmap?")&&b(s.resourceId).finally(()=>{})}}),e.jsxs("a",{href:`/${s.resourceId}`,className:"ml-2 flex items-center gap-2 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs hover:bg-gray-50 focus:outline-none",target:"_blank",children:[e.jsx(L,{className:"inline-block h-4 w-4"}),"Visit"]})]})]},s.resourceId))})]}),o&&e.jsx("div",{className:"mt-5",children:e.jsx("button",{className:"block w-full rounded-md border border-dashed border-gray-300 py-2 text-sm transition-colors hover:border-gray-600 hover:bg-gray-50 focus:outline-0",onClick:()=>i(!0),children:"+ Add new Roadmap"})})]})}const ge={public:{icon:pe,label:"Public"},me:{icon:_,label:"Only me"},team:{icon:U,label:"Team Member(s)"},friends:{icon:U,label:"Friend(s)"}};function be(r){const{visibility:o,sharedTeamMemberIds:n=[],sharedFriendIds:d=[]}=r,{label:m,icon:c}=ge[o];return e.jsxs("span",{className:"inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-normal",children:[e.jsx(c,{className:"inline-block h-3 w-3"}),e.jsxs("div",{className:"flex items-center",children:[o==="team"&&n?.length>0&&e.jsx("span",{className:"mr-1",children:n.length}),o==="friends"&&d?.length>0&&e.jsx("span",{className:"mr-1",children:d.length}),m]})]})}export{Ye as TeamRoadmaps};
