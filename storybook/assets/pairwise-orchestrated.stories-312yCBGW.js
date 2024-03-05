import{O as p}from"./Orchestrator-K3TdHXhC.js";import{d as u}from"./dsfr-BqGaM3Aq.js";import"./jsx-runtime-Kowmy4gq.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./i18n-CBtZ6Qo0.js";import"./index-CAmJLBaW.js";import"./InputNumber-Dxj0GBtI.js";import"./Input-C9dXSV5z.js";import"./symToStr-B1SJCDhJ.js";import"./getErrorStates-C-Ngk_mI.js";import"./index-BtM5VmRH.js";import"./useAnalyticsId-CxjkFw7q.js";import"./extends-CCbyfPlC.js";import"./Button-DmdRMydj.js";import"./link-CBxWA4Rh.js";import"./CheckboxGroup-C5njMFKl.js";import"./Fieldset-r1EXLwzM.js";import"./Dropdown-Oh--umW9.js";import"./Input-DxJigrav.js";import"./Radio-DCx0FNOn.js";import"./themeStringToVariable-CtV1vixM.js";const c="3",m=[{id:"seq",componentType:"Subsequence",label:{value:'"Description des individus de votre logement"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},page:"1"},{id:"loop-prenom",componentType:"RosterForLoop",label:{value:'"Ajouter un individu"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},bindingDependencies:["PRENOM"],lines:{min:{value:1,type:"VTL"},max:{value:"10",type:"VTL"}},page:"1",components:[{componentType:"Input",label:{value:'"Prénom"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,bindingDependencies:["PRENOM"],id:"prenom",response:{name:"PRENOM"}}]},{id:"pairwise-links",componentType:"PairwiseLinks",conditionFilter:{value:"true"},xAxisIterations:{value:"count(PRENOM)",type:"VTL"},yAxisIterations:{value:"count(PRENOM)",type:"VTL"},page:"2",symLinks:{LINKS:{1:"1",2:"3",3:"2",4:"4",5:"6",6:"5",7:"8",8:"7",9:"10",10:"9",11:"13",12:"12",13:"11",14:null,15:"15",16:"16",17:"17",18:"18"}},components:[{className:"pairwise-link",componentType:"Dropdown",id:"dropdown-1",conditionFilter:{value:"xAxis <> yAxis",type:"VTL"},label:{value:'"Qui est " || yAxis || " pour " || xAxis || " ?"',type:"VTL"},response:{name:"LINKS"},options:[{value:"1",label:'"Son conjoint, sa conjointe"'},{value:"2",label:'"Sa mère, son père"'},{value:"3",label:'"Sa fille, son fils"'},{value:"4",label:'"Sa soeur, son frère (y compris demi et quasi)"'},{value:"5",label:`"Sa belle-mère, son beau-père (conjoint.e d'un des parents)"`},{value:"6",label:`"L'enfant du conjoint (belle-fille, beau-fils)"`},{value:"7",label:'"Sa belle-mère, son beau-père (parent du conjoint)"'},{value:"8",label:`"Sa belle-fille, son beau-fils (conjoint.e d'un enfant)"`},{value:"9",label:'"Sa grand-mère, son grand-père"'},{value:"10",label:'"Sa petite-fille, petit-fils"'},{value:"11",label:'"Sa tante, son oncle"'},{value:"12",label:'"Sa cousine, son cousin"'},{value:"13",label:'"Sa nièce, son neveu"'},{value:"14",label:`"Un enfant placé en famille d'accueil"`},{value:"15",label:'"Sa belle-soeur, son beau-frère"'},{value:"16",label:'"Un autre lien familial"'},{value:"17",label:'"Un colocataire, sous-locataire"'},{value:"18",label:'"Autre lien (employé de maison, salarié logé, jeune au pair …)"'}]},{className:"pairwise-link-input",componentType:"Input",label:{value:'"Pouvez-vous décrire le lien entre " || xAxis || " et " || yAxis || " ?"',type:"VTL|MD"},conditionFilter:{value:'not(nvl(cast(LINKS, string), "") = "") and cast(LINKS, string) = "18"',type:"VTL"},id:"other",response:{name:"OTHER"}}]},{id:"seq",componentType:"Subsequence",label:{value:'"Bye !"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},page:"3"}],E=[{variableType:"COLLECTED",name:"PRENOM",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"LINKS",values:{PREVIOUS:[[null]],COLLECTED:[[null]],FORCED:[[null]],EDITED:[[null]],INPUTED:[[null]]}},{variableType:"COLLECTED",name:"OTHER",values:{PREVIOUS:[[null]],COLLECTED:[[null]],FORCED:[[null]],EDITED:[[null]],INPUTED:[[null]]}},{variableType:"CALCULATED",name:"xAxis",expression:{value:"PRENOM",type:"VTL"},bindingDependencies:["PRENOM"],shapeFrom:"PRENOM",inFilter:"false"},{variableType:"CALCULATED",name:"yAxis",expression:{value:"PRENOM",type:"VTL"},bindingDependencies:["PRENOM"],shapeFrom:"PRENOM",inFilter:"false"}],L={PRENOM:{sizeForLinksVariables:["count(PRENOM)","count(PRENOM)"],linksVariables:["LINKS"]}},T={maxPage:c,components:m,variables:E,resizing:L},d="3",v=[{id:"seq",componentType:"Subsequence",label:{value:'"Subsequence label"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},page:"1"},{id:"loop-prenom",componentType:"RosterForLoop",label:{value:'"RosterForLoop label"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},bindingDependencies:["PRENOM"],lines:{min:{value:1,type:"VTL"},max:{value:"10",type:"VTL"}},page:"1",components:[{componentType:"Input",label:{value:'"Input label"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,bindingDependencies:["PRENOM"],id:"prenom",response:{name:"PRENOM"}}]},{id:"pairwise-links",componentType:"PairwiseLinks",conditionFilter:{value:"true"},xAxisIterations:{value:"count(PRENOM)",type:"VTL"},yAxisIterations:{value:"count(PRENOM)",type:"VTL"},page:"2",symLinks:{LINKS:{1:"1",2:"3",3:"2"}},components:[{className:"pairwise-link",componentType:"Dropdown",id:"dropdown-1",conditionFilter:{value:"xAxis <> yAxis",type:"VTL"},label:{value:'"Dropdown label"',type:"VTL"},description:{value:'"Dropdown description (non mandatory)"',type:"VTL"},response:{name:"LINKS"},options:[{value:"1",label:'"Dropdown option1 label"'},{value:"2",label:'"Dropdown option2 label"'},{value:"3",label:'"Dropdown option3 label"'}]},{className:"pairwise-link-input",componentType:"Input",label:{value:'"Input label"',type:"VTL|MD"},description:{value:'"Input description (non mandatory)"',type:"VTL|MD"},conditionFilter:{value:'not(nvl(cast(LINKS, string), "") = "") and cast(LINKS, string) = "18"',type:"VTL"},id:"other",response:{name:"OTHER"}}]},{id:"seq",componentType:"Subsequence",label:{value:'"Bye !"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},page:"3"}],y=[{variableType:"COLLECTED",name:"PRENOM",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"LINKS",values:{PREVIOUS:[[null]],COLLECTED:[[null]],FORCED:[[null]],EDITED:[[null]],INPUTED:[[null]]}},{variableType:"COLLECTED",name:"OTHER",values:{PREVIOUS:[[null]],COLLECTED:[[null]],FORCED:[[null]],EDITED:[[null]],INPUTED:[[null]]}},{variableType:"CALCULATED",name:"xAxis",expression:{value:"PRENOM",type:"VTL"},bindingDependencies:["PRENOM"],shapeFrom:"PRENOM",inFilter:"false"},{variableType:"CALCULATED",name:"yAxis",expression:{value:"PRENOM",type:"VTL"},bindingDependencies:["PRENOM"],shapeFrom:"PRENOM",inFilter:"false"}],b={PRENOM:{sizeForLinksVariables:["count(PRENOM)","count(PRENOM)"],linksVariables:["LINKS"]}},D={maxPage:d,components:v,variables:y,resizing:b},O={PRENOM:{COLLECTED:["Dad","Mom","Son"]},AGE:{COLLECTED:[30,29,5]},LINKS:{COLLECTED:[[null]]},OTHER:{COLLECTED:[[null]]}},r={COLLECTED:O},B={title:"Orchestrated Components/Pairwise",component:p,argTypes:u,parameters:{docs:{description:{story:"This component allows you to pass symetric links."}}}},e={args:{source:T,data:r}},n={args:{source:D,data:r}};var l,a,o;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    source: source,
    data: data
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var i,t,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    source: sourceSkeleton,
    data: data
  }
}`,...(s=(t=n.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const _=["Default","Skeleton"];export{e as Default,n as Skeleton,_ as __namedExportsOrder,B as default};