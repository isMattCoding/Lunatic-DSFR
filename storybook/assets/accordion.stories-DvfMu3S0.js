import{j as x}from"./jsx-runtime-Kowmy4gq.js";import{r as i,R as n}from"./index-CBqU2yxZ.js";import{a as P,b as k,c as p,f as s}from"./index-CAmJLBaW.js";import{s as w}from"./symToStr-B1SJCDhJ.js";import{u as T}from"./useAnalyticsId-CxjkFw7q.js";import{u as V,t as q}from"./themeStringToVariable-CtV1vixM.js";import"./_commonjsHelpers-BosuxZz1.js";var R=function(t,o){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&o.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)o.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(a[e[r]]=t[e[r]]);return a};const u=i.memo(i.forwardRef((t,o)=>{const{className:a,id:e,titleAs:r="h3",label:C,classes:f={},style:h,children:O,expanded:y,defaultExpanded:v=!1,onExpandedChange:c}=t,A=R(t,["className","id","titleAs","label","classes","style","children","expanded","defaultExpanded","onExpandedChange"]);P.assert();const b=`${T({defaultIdPrefix:"fr-accordion",explicitlyProvidedId:e})}-collapse`,[N,S]=i.useState(v),d=y||N,j=k(I=>{S(!d),c==null||c(!d,I)});return n.createElement("section",Object.assign({className:p(s.cx("fr-accordion"),a),style:h,ref:o},A),n.createElement(r,{className:p(s.cx("fr-accordion__title"),f.title)},n.createElement("button",{className:s.cx("fr-accordion__btn"),"aria-expanded":d,"aria-controls":b,onClick:j,type:"button"},C)),n.createElement("div",{className:p(s.cx("fr-collapse"),f.collapse),id:b},O))}));u.displayName=w({Accordion:u});function m({label:t,description:o,bgColor:a}){const e=V(),r=q(e,a,e.decisions.background.default.grey.default);return x("div",{style:{backgroundColor:r},children:x(u,{label:t,children:o})})}try{m.displayName="Accordion",m.__docgenInfo={description:"",displayName:"Accordion",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!0,type:{name:"string"}}}}}catch{}const K={title:"Components/Accordion",tags:["autodocs"],component:m},l={args:{label:"test",description:"test",bgColor:"purpleGlycine.default"}};var g,_,E;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "test",
    description: "test",
    bgColor: "purpleGlycine.default"
  }
} satisfies Story`,...(E=(_=l.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const L=["Default"];export{l as Default,L as __namedExportsOrder,K as default};