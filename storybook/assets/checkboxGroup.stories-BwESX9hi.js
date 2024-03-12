import{j as l}from"./jsx-runtime-Kowmy4gq.js";import{O as r}from"./Orchestrator-BISOcpxz.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./index-BtM5VmRH.js";import"./i18n-Cg-UD1N1.js";import"./inheritsLoose-Cay3MKMD.js";const s={cleaning:{},components:[{id:"checkboxgroup",componentType:"CheckboxGroup",mandatory:!1,page:"1",label:{value:'"Which of these cities are in France?"',type:"VTL|MD"},description:{value:'"If you select a city that is not in France, an error will appear!"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},controls:[{id:"checkboxgroup",typeOfControl:"CONSISTENCY",criticality:"WARN",control:{value:"OPT3 = false or isnull(OPT3)",type:"VTL"},errorMessage:{value:'"Take another guess"',type:"VTL|MD"},bindingDependencies:["OPT3"]}],responses:[{id:"opt1",description:{value:'"Paris is the capital city!"',type:"VTL|MD"},label:{value:'"Paris"',type:"VTL|MD"},response:{name:"OPT1"}},{id:"opt2",description:{value:'"Bordeaux is where you can find great wine!"',type:"VTL|MD"},label:{value:'"Bordeaux"',type:"VTL|MD"},response:{name:"OPT2"}},{id:"opt3",description:{value:'"There is great Swiss chocolate in Geneva"',type:"VTL|MD"},label:{value:'"Geneva"',type:"VTL|MD"},response:{name:"OPT3"}}]},{id:"seq",componentType:"Sequence",label:{value:'"Bye!"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"2"}],variables:[{variableType:"COLLECTED",name:"OPT1",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"OPT2",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"OPT3",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg",maxPage:"2"},y={title:"Components/CheckboxGroup",component:r,args:{source:s}},e={render:n=>(console.log(n),l(r,{...n})),parameters:{docs:{description:{story:"This component should be used when you want the user to be able to select one or multiple answers."}}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    console.log(args);
    return <Orchestrator {...args} />;
  },
  parameters: {
    docs: {
      description: {
        story: "This component should be used when you want the user to be able to select one or multiple answers."
      }
    }
  }
} satisfies Story`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const E=["Default"];export{e as Default,E as __namedExportsOrder,y as default};
