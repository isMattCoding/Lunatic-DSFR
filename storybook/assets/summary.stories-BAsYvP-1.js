import{O as u}from"./Orchestrator-CW96xv6y.js";import"./___vite-browser-external_commonjs-proxy-6_tRaeTL.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./index-D3ylJrlI.js";import"./i18n-WZ4hleam.js";import"./inheritsLoose-DMKMEUQT.js";const a={maxPage:"1",components:[{id:"Summary",componentType:"Summary",label:{value:'"Récapulatif des habitants "',type:"VTL"},sections:[{iterations:{value:"NB_HAB",type:"VTL"},title:{value:'PRENOMS || " " || NOMS',type:"VTL"},responses:[{label:{value:'(if(SEXES = "1") then ("Né") else ("Née")) || " le "',type:"VTL"},value:{value:'cast(DATENAISS,string, "DD-MM-YYYY")',type:"VTL"}},{label:{value:'"de sexe "',type:"VTL"},value:{value:'if(SEXES = "1") then "Masculin" else "Féminin"',type:"VTL"}}]}],conditionFilter:{value:"true",type:"VTL"},page:"1"}],variables:[{variableType:"COLLECTED",name:"NB_HAB",values:{PREVIOUS:null,COLLECTED:2,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"VIVEZVOUSDS",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTTED:[null]}},{variableType:"COLLECTED",name:"DATENAISS",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTTED:[null]}},{variableType:"COLLECTED",name:"SEXES",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTTED:[null]}},{variableType:"COLLECTED",name:"PRENOMS",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTTED:[null]}},{variableType:"COLLECTED",name:"NOMS",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTTED:[null]}}],resizing:{NB_HAB:{size:"NB_HAB",variables:["PRENOMS","SEXES","DATENAISS"]}}},D={COLLECTED:{NB_HAB:{EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null,COLLECTED:2},PRENOMS:{EDITED:[null],FORCED:[null],INPUTTED:[null],PREVIOUS:[null],COLLECTED:["John","Martin"]},NOMS:{EDITED:[null],FORCED:[null],INPUTTED:[null],PREVIOUS:[null],COLLECTED:["Doe","Dupont"]},DATENAISS:{EDITED:[null],FORCED:[null],INPUTTED:[null],PREVIOUS:[null],COLLECTED:["1993-01-18","1990-10-10"]},AGE:{EDITED:[null],FORCED:[null],INPUTTED:[null],PREVIOUS:[null],COLLECTED:[26,31]},SEXES:{EDITED:[null],FORCED:[null],INPUTTED:[null],PREVIOUS:[null],COLLECTED:["1","2"]}}},o={title:"Components/Summary",component:u},l={args:{source:a,data:D}};var E,e,n;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    source,
    data
  }
} satisfies Story`,...(n=(e=l.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const i=["Default"];export{l as Default,i as __namedExportsOrder,o as default};
