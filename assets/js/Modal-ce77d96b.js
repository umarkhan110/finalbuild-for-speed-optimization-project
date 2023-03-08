import{r as s,j as e}from"./vendor-dc3232a5.js";import{F as a,a as l,l as i,m as r,p as c}from"./HomeDark-b6a72bb9.js";import{P as o}from"./Portfolio-c163e185.js";import{a as n,b as m}from"./index-3ff6b05e.js";import"./index-b398d490.js";class d extends s.PureComponent{render(){const{modalId:c,setGetModal:d}=this.props;return c>=1?e.jsx(s.Suspense,{fallback:e.jsx(a,{}),children:e.jsxs("div",{className:"modal_portfolio",children:[e.jsx("div",{className:"modal__outside",onClick:()=>d(!1)}),e.jsx("div",{className:"modal__content",children:e.jsx(s.Suspense,{fallback:e.jsx(a,{}),children:o.filter((s=>s.id===c)).map((s=>e.jsxs("div",{"data-aos":"fade",children:[e.jsx("h2",{className:"heading mb-2",children:s.type}),e.jsx("div",{className:"modal__details",children:s.modalDetails.map(((s,a)=>e.jsxs("div",{className:"row open-sans-font",children:[e.jsxs("div",{className:"col-12 col-sm-6 mb-2",children:[e.jsx(l,{className:"pr-2",icon:n}),"Projet :"," ",e.jsx("span",{className:"ft-wt-600 uppercase",children:s.projet})]}),e.jsxs("div",{className:"col-12 col-sm-6 mb-2",children:[e.jsx(l,{className:"pr-2",icon:m}),"Client :"," ",e.jsx("span",{className:"ft-wt-600 uppercase",children:s.client})]}),e.jsxs("div",{className:"col-12 col-sm-6 mb-2",children:[e.jsx(l,{className:"pr-2",icon:i}),"Langage :"," ",e.jsx("span",{className:"ft-wt-600 uppercase",children:s.langage})]}),e.jsxs("div",{className:"col-12 col-sm-6 mb-2",children:[e.jsx(l,{className:"pr-2",icon:r}),"Lien :"," ",e.jsx("a",{className:"preview-link",target:"_blank",rel:"noopener noreferrer nofollow",href:s.link,children:s.link})]})]},a)))}),e.jsx("figure",{className:"modal__img",children:e.jsx("img",{src:s.image,alt:s.type})}),e.jsx("button",{className:"close-modal",onClick:()=>d(!1),children:e.jsx("img",{src:"/assets/img/cancel-4220dad6.svg",alt:"fermer"})})]},s.id)))})})]})}):null}}d.propTypes={modalId:c.number.isRequired,setGetModal:c.func.isRequired};export{d as default};
