import{r as i,a3 as f,ak as h,ag as g,d as y,u as k,b as u,c as v,F as b,al as x,n as p,e as B,t as C,K as H,am as S,Y as A,f as T,l as q}from"./entry.ef481a57.js";const D=()=>{const c=i(),t=i([]),a=i([]),l=e=>e.forEach(o=>{const s=o.target.id;o.isIntersecting?t.value.push(s):t.value=t.value.filter(r=>r!==s)}),d=e=>e.forEach(o=>{c.value.observe(o)});return f(t,(e,o)=>{e.length===0?a.value=o:a.value=e},{deep:!0}),h(()=>c.value=new IntersectionObserver(l)),g(()=>{var e;return(e=c.value)==null?void 0:e.disconnect()}),{visibleHeadings:t,activeHeadings:a,updateHeadings:d}},L={class:"docs-toc-links"},M=["href","onClick"],$=y({__name:"DocsTocLinks",props:{links:{type:Array,default:()=>[]}},emits:["move"],setup(c,{emit:t}){const a=k(),{activeHeadings:l,updateHeadings:d}=D();setTimeout(()=>{d([...document.querySelectorAll(".document-driven-page h1, .docus-content h1"),...document.querySelectorAll(".document-driven-page h2, .docus-content h2"),...document.querySelectorAll(".document-driven-page h3, .docus-content h3"),...document.querySelectorAll(".document-driven-page h4, .docus-content h4")])},300);function e(s){a.push(`#${s}`),t("move",s)}function o(s){t("move",s)}return(s,r)=>{const m=w;return u(),v("ul",L,[(u(!0),v(b,null,x(c.links,n=>(u(),v("li",{key:n.text,class:p([`depth-${n.depth}`])},[B("a",{href:`#${n.id}`,class:p([H(l).includes(n.id)&&"active"]),onClick:S(_=>e(n.id),["prevent"])},C(n.text),11,M),n.children?(u(),A(m,{key:0,links:n.children,onMove:r[0]||(r[0]=_=>o(_))},null,8,["links"])):T("",!0)],2))),128))])}}});const w=q($,[["__scopeId","data-v-9dc741f5"]]);export{w as default};
