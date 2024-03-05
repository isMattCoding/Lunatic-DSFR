import{O as l}from"./Orchestrator-K3TdHXhC.js";import{d as p}from"./dsfr-BqGaM3Aq.js";import"./jsx-runtime-Kowmy4gq.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./i18n-CBtZ6Qo0.js";import"./index-CAmJLBaW.js";import"./InputNumber-Dxj0GBtI.js";import"./Input-C9dXSV5z.js";import"./symToStr-B1SJCDhJ.js";import"./getErrorStates-C-Ngk_mI.js";import"./index-BtM5VmRH.js";import"./useAnalyticsId-CxjkFw7q.js";import"./extends-CCbyfPlC.js";import"./Button-DmdRMydj.js";import"./link-CBxWA4Rh.js";import"./CheckboxGroup-C5njMFKl.js";import"./Fieldset-r1EXLwzM.js";import"./Dropdown-Oh--umW9.js";import"./Input-DxJigrav.js";import"./Radio-DCx0FNOn.js";import"./themeStringToVariable-CtV1vixM.js";const m="3",u=[{id:"kze792d8",componentType:"InputNumber",mandatory:!1,page:"1",min:0,max:10,decimals:0,label:{value:'"➡ 1. " || "Number of habitants"',type:"VTL|MD"},description:{value:'"The number of habitants who live permanently with you."',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"COUNT_PERSONS"}},{id:"modaltoto",componentType:"ConfirmationModal",conditionFilter:{value:"true",type:"VTL"},page:"2",label:{value:`"Vous avez indiqué " || (if (COUNT_PERSONS = 0 or isnull(COUNT_PERSONS)) then "que personne ne vit" else if COUNT_PERSONS = 1 then "qu'une personne vivait" else "que " || cast(COUNT_PERSONS, string) || " personnes vivait") || " dans ce logement. Êtes-vous sur de n’avoir oublié personne, y compris: "`,type:"VTL"},description:{value:`"* vous-même 
 * les nourrissons encore à la maternité  
 * les personnes temporairement absentes (vacances, voyage d'affaires, hospitalisation de moins d'un mois, etc.) 
 * les personnes qui vivent également une partie du temps ailleurs (enfants ou étudiants scolarisés ailleurs, conjoints éloignés pour raisons professionnelles, enfants en résidence alternée, personnes âgées en institution, etc.) 
 * les colocataires et les sous-locataires 
"`,type:"VTL|MD"}},{id:"kze792d8",componentType:"InputNumber",mandatory:!1,page:"3",min:0,max:10,decimals:0,label:{value:'"➡ 3. " || "Page trois"',type:"VTL|MD"},description:{value:'"The number of habitants who live permanently with you."',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"COUNT_PERSONS"}}],c=[{variableType:"COLLECTED",name:"COUNT_PERSONS",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],d={maxPage:m,components:u,variables:c},T="2",v=[{id:"kze792d8",componentType:"InputNumber",mandatory:!1,page:"1",min:0,max:10,decimals:0,label:{value:'"InputNumber label"',type:"VTL|MD"},description:{value:'"InputNumber description"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"COUNT_PERSONS"}},{id:"modaltoto",componentType:"ConfirmationModal",conditionFilter:{value:"true",type:"VTL"},page:"2",label:{value:'"Modal label"',type:"VTL"},description:{value:'"Modal description (non mandatory)"',type:"VTL|MD"}}],y=[{variableType:"COLLECTED",name:"COUNT_PERSONS",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],O={maxPage:T,components:v,variables:y},$={title:"Orchestrated Components/Modal",component:l,argTypes:p,parameters:{docs:{description:{story:"This component should be used when you want to interrupt the user's journey and bring his attention to something."}}}},e={args:{source:d}},o={args:{source:O}};var n,t,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    source: source
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var s,r,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    source: sourceSkeleton
  }
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const j=["Default","Skeleton"];export{e as Default,o as Skeleton,j as __namedExportsOrder,$ as default};