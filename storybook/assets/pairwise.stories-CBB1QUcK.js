import{O as t}from"./Orchestrator-xlZDYZuH.js";import"./___vite-browser-external_commonjs-proxy-CbhpTJ3e.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./i18n-Dz2osCXP.js";import"./inheritsLoose-au4_wMgD.js";const o={maxPage:"3",cleaning:{},components:[{id:"seq",componentType:"Subsequence",label:{value:'"Description des individus de votre logement"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},page:"1"},{id:"loop-prenom",componentType:"RosterForLoop",label:{value:'"Ajouter un individu"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},bindingDependencies:["PRENOM"],lines:{min:{value:"1",type:"VTL"},max:{value:"10",type:"VTL"}},page:"1",components:[{componentType:"Input",label:{value:'"Prénom"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,bindingDependencies:["PRENOM"],id:"prenom",response:{name:"PRENOM"},page:"1"}],positioning:"HORIZONTAL"},{id:"pairwise-links",componentType:"PairwiseLinks",conditionFilter:{value:"true",type:"VTL"},xAxisIterations:{value:"count(PRENOM)",type:"VTL"},yAxisIterations:{value:"count(PRENOM)",type:"VTL"},page:"2",symLinks:{LINKS:{1:"1",2:"3",3:"2",4:"4",5:"6",6:"5",7:"8",8:"7",9:"10",10:"9",11:"13",12:"12",13:"11",14:null,15:"15",16:"16",17:"17",18:"18"}},components:[{componentType:"Dropdown",id:"dropdown-1",conditionFilter:{value:"xAxis <> yAxis",type:"VTL"},label:{value:'"Qui est " || yAxis || " pour " || xAxis || " ?"',type:"VTL"},response:{name:"LINKS"},options:[{value:"1",label:{value:'"Son conjoint, sa conjointe"',type:"VTL|MD"}},{value:"2",label:{value:'"Sa mère, son père"',type:"VTL|MD"}},{value:"3",label:{value:'"Sa fille, son fils"',type:"VTL|MD"}},{value:"4",label:{value:'"Sa soeur, son frère (y compris demi et quasi)"',type:"VTL|MD"}},{value:"5",label:{value:`"Sa belle-mère, son beau-père (conjoint.e d'un des parents)"`,type:"VTL|MD"}},{value:"6",label:{value:`"L'enfant du conjoint (belle-fille, beau-fils)"`,type:"VTL|MD"}},{value:"7",label:{value:'"Sa belle-mère, son beau-père (parent du conjoint)"',type:"VTL|MD"}},{value:"8",label:{value:`"Sa belle-fille, son beau-fils (conjoint.e d'un enfant)"`,type:"VTL|MD"}},{value:"9",label:{value:'"Sa grand-mère, son grand-père"',type:"VTL|MD"}},{value:"10",label:{value:'"Sa petite-fille, petit-fils"',type:"VTL|MD"}},{value:"11",label:{value:'"Sa tante, son oncle"',type:"VTL|MD"}},{value:"12",label:{value:'"Sa cousine, son cousin"',type:"VTL|MD"}},{value:"13",label:{value:'"Sa nièce, son neveu"',type:"VTL|MD"}},{value:"14",label:{value:`"Un enfant placé en famille d'accueil"`,type:"VTL|MD"}},{value:"15",label:{value:'"Sa belle-soeur, son beau-frère"',type:"VTL|MD"}},{value:"16",label:{value:'"Un autre lien familial"',type:"VTL|MD"}},{value:"17",label:{value:'"Un colocataire, sous-locataire"',type:"VTL|MD"}},{value:"18",label:{value:'"Autre lien (employé de maison, salarié logé, jeune au pair …)"',type:"VTL|MD"}}],page:"2"},{componentType:"Input",label:{value:'"Pouvez-vous décrire le lien entre " || xAxis || " et " || yAxis || " ?"',type:"VTL|MD"},conditionFilter:{value:'not(nvl(cast(LINKS, string), "") = "") and cast(LINKS, string) = "18"',type:"VTL"},id:"other",response:{name:"OTHER"},page:"2",maxLength:249}]},{id:"seq",componentType:"Subsequence",label:{value:'"Bye !"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},page:"3"}],variables:[{variableType:"COLLECTED",name:"PRENOM",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTTED:[null]}},{variableType:"COLLECTED",name:"LINKS",values:{PREVIOUS:[[null]],COLLECTED:[[null]],FORCED:[[null]],EDITED:[[null]],INPUTTED:[[null]]}},{variableType:"COLLECTED",name:"OTHER",values:{PREVIOUS:[[null]],COLLECTED:[[null]],FORCED:[[null]],EDITED:[[null]],INPUTTED:[[null]]}},{variableType:"CALCULATED",name:"xAxis",expression:{value:"PRENOM",type:"VTL"},bindingDependencies:["PRENOM"],shapeFrom:"PRENOM",inFilter:"false"},{variableType:"CALCULATED",name:"yAxis",expression:{value:"PRENOM",type:"VTL"},bindingDependencies:["PRENOM"],shapeFrom:"PRENOM",inFilter:"false"}],resizing:{PRENOM:{sizeForLinksVariables:["count(PRENOM)","count(PRENOM)"],linksVariables:["LINKS"]}},pagination:"question",label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg"},i={COLLECTED:{PRENOM:{COLLECTED:["Dad","Mom","Son"]},AGE:{COLLECTED:[30,29,5]},LINKS:{COLLECTED:[[null]]},OTHER:{COLLECTED:[[null]]}}},c={title:"Components/Pairwise",component:t,parameters:{docs:{description:{component:"This component allows you to pass symetric links."}}}},e={args:{source:o,data:i}};var l,a,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    source: source,
    data: data
  }
} satisfies Story`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,c as default};
