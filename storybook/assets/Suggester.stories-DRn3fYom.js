import{O as r}from"./Orchestrator-BISOcpxz.js";import"./jsx-runtime-Kowmy4gq.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./index-BtM5VmRH.js";import"./i18n-Cg-UD1N1.js";import"./inheritsLoose-Cay3MKMD.js";const l={cleaning:{},suggesters:[{name:"L_PAYS-1-2-0",fields:[{name:"label",rules:["[\\w]+"],language:"French",min:3,stemmer:!1}],queryParser:{type:"tokenized",params:{language:"French",pattern:"[\\w.]+",min:3}},version:1}],components:[{componentType:"Suggester",response:{name:"VARIABLEPA"},optionResponses:[{name:"SUGGESTER_VARIABLEPA_LABEL",attribute:"label"}],storeName:"L_PAYS-1-2-0",conditionFilter:{type:"VTL",value:"true"},id:"lt4fjoev",page:"1",label:{type:"VTL|MD",value:'"➡ 2. " || "Variable Pays"'},mandatory:!1},{id:"seq",componentType:"Sequence",label:{value:'"Bye!"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"2"}],variables:[{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTED:null,FORCED:null,PREVIOUS:null},name:"SUGGESTER_VARIABLEPA_LABEL"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTED:null,FORCED:null,PREVIOUS:null},name:"VARIABLEPA"}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg",maxPage:"2"},L={title:"Components/Suggester",component:r,args:{autoSuggesterLoading:!0}},e={args:{source:l}};var a,n,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    source
  }
} satisfies Story`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,L as default};
