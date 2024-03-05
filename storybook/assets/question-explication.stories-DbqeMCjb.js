import{O as p}from"./Orchestrator-K3TdHXhC.js";import{d as s}from"./dsfr-BqGaM3Aq.js";import"./jsx-runtime-Kowmy4gq.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./i18n-CBtZ6Qo0.js";import"./index-CAmJLBaW.js";import"./InputNumber-Dxj0GBtI.js";import"./Input-C9dXSV5z.js";import"./symToStr-B1SJCDhJ.js";import"./getErrorStates-C-Ngk_mI.js";import"./index-BtM5VmRH.js";import"./useAnalyticsId-CxjkFw7q.js";import"./extends-CCbyfPlC.js";import"./Button-DmdRMydj.js";import"./link-CBxWA4Rh.js";import"./CheckboxGroup-C5njMFKl.js";import"./Fieldset-r1EXLwzM.js";import"./Dropdown-Oh--umW9.js";import"./Input-DxJigrav.js";import"./Radio-DCx0FNOn.js";import"./themeStringToVariable-CtV1vixM.js";const u="2",m=[{page:"1",id:"wine",componentType:"InputNumber",label:{value:'"How many bottle of wine do you drink per week ?"',type:"VTL"},description:{value:'"Enter a number"',type:"VTL"},response:{name:"WINE"}},{page:"1",id:"question-explication",componentType:"QuestionExplication",label:{value:'"Why are you asking me this question ?"',type:"VTL"},description:{value:'"We are counting the number of bottle of wine people drink per week."',type:"VTL"},bgColor:"purpleGlycine.default"},{page:"2",componentType:"InputNumber",label:{value:'"How many can of beers do you drink per week ?"',type:"VTL"},description:{value:'"Enter a number"',type:"VTL"},response:{name:"BEERS"}}],c=[{variableType:"COLLECTED",name:"WINE",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"BEERS",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],E={maxPage:u,components:m,variables:c},d="2",T=[{page:"1",id:"wine",componentType:"InputNumber",label:{value:'"InputNumber label"',type:"VTL"},description:{value:'"InputNumber description (non mandatory)"',type:"VTL"},response:{name:"WINE"}},{page:"1",id:"question-explication",componentType:"QuestionExplication",label:{value:'"QuestionExplication label"',type:"VTL"},description:{value:'"QuestionExplication description"',type:"VTL"},bgColor:"purpleGlycine.default"},{page:"2",componentType:"InputNumber",label:{value:'"InputNumber label"',type:"VTL"},description:{value:'"InputNumber description"',type:"VTL"},response:{name:"BEERS"}}],y=[{variableType:"COLLECTED",name:"WINE",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"BEERS",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],b={maxPage:d,components:T,variables:y},$={title:"Orchestrated Components/QuestionExplication",component:p,argTypes:s,parameters:{docs:{description:{story:"This component allows you to give additional information to the user on why we are asking him a question. Users like to know why they should give an information and how it will be used. In an orchestrator, it would be displayed after the continue button and before the footer so it doesn't interfer with the form if the user doesn't want to read it."}}}},e={args:{source:E}},o={args:{source:b}};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    source: source
  }
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var a,l,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    source: sourceSkeleton
  }
}`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const G=["Default","Skeleton"];export{e as Default,o as Skeleton,G as __namedExportsOrder,$ as default};