import{O as r}from"./Orchestrator-Dv_5JbPe.js";import"./jsx-runtime-CVWdv3H2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CBqU2yxZ.js";import"./index-Dk74W0Oi.js";import"./index-BtM5VmRH.js";import"./i18n-WZ4hleam.js";import"./inheritsLoose-Cay3MKMD.js";const p={cleaning:{},components:[{id:"j4nw5cqz",page:"1",componentType:"Dropdown",mandatory:!1,label:{value:'"In which state do The Simpsons reside?"',type:"VTL|MD"},description:{value:'"The state is within the USA"',type:"VTL|MD"},response:{name:"STATE"},controls:[{id:"j4nw5cqz",typeOfControl:"CONSISTENCY",criticality:"WARN",control:{value:'not(nvl(STATE,"") = "")',type:"VTL"},errorMessage:{value:'"Please choose a state!"',type:"VTL|MD"},bindingDependencies:["STATE"]}],options:[{value:"1",label:{value:'"Washington"',type:"VTL|MD"}},{value:"2",label:{value:'"Kentucky"',type:"VTL"}},{value:"3",label:{value:'"Ohio"',type:"VTL"}},{value:"4",label:{value:'"Maine"',type:"VTL"}},{value:"5",label:{value:'"North Dakota"',type:"VTL"}},{value:"6",label:{value:'"Florida"',type:"VTL"}},{value:"7",label:{value:'"North Takoma"',type:"VTL"}},{value:"8",label:{value:'"California"',type:"VTL"}},{value:"9",label:{value:'"Texas"',type:"VTL"}},{value:"10",label:{value:'"Massachusetts"',type:"VTL"}},{value:"11",label:{value:'"Nevada"',type:"VTL"}},{value:"12",label:{value:'"Illinois"',type:"VTL"}},{value:"13",label:{value:'"Not in any state, you fool!"',type:"VTL"}}]}],variables:[{variableType:"COLLECTED",name:"STATE",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg",maxPage:"1"},u={cleaning:{},maxPage:"1",variables:[{variableType:"COLLECTED",name:"STATE",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],components:[{componentType:"Question",id:"idQuestion",page:"1",label:{type:"VTL|MD",value:'"Label de la Question"'},description:{type:"VTL|MD",value:'"Description de la question"'},declarations:[{declarationType:"HELP",id:"idQuestion-help1",label:{type:"VTL|MD",value:'"Label de la déclaration en position : `BEFORE_QUESTION_TEXT`"'},position:"BEFORE_QUESTION_TEXT"},{declarationType:"HELP",id:"idQuestion-help3",label:{type:"VTL|MD",value:'"Label de la déclaration en position  en position : `AFTER_QUESTION_TEXT`"'},position:"AFTER_QUESTION_TEXT"}],components:[{id:"j4nw5cqz",page:"1",componentType:"Dropdown",mandatory:!1,label:{value:'"Label du composant Dropdown"',type:"VTL|MD"},description:{value:'"Description du composant Dropdown"',type:"VTL|MD"},response:{name:"STATE"},options:[{value:"1",label:{value:`"Label de l'option 1"`,type:"VTL"}},{value:"2",label:{value:`"Label de l'option 2"`,type:"VTL"}},{value:"3",label:{value:`"Label de l'option 3"`,type:"VTL"}},{value:"4",label:{value:`"Label de l'option 4"`,type:"VTL"}}]}]}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg"},D={title:"Components/Dropdown",component:r,parameters:{docs:{description:{component:"This component should be used when you want the user to select an option in a list of more than 3 options."}}}},e={args:{source:p}},a={args:{source:u}};var l,o,t;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    source: source
  }
} satisfies Story`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var n,s,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    source: questionSource
  }
} satisfies Story`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const b=["Default","Question"];export{e as Default,a as Question,b as __namedExportsOrder,D as default};