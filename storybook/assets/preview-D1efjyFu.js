function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as f}from"./jsx-runtime-CVWdv3H2.js";import{e as u,f as C}from"./chunk-HLWAVYOI-B5Ebz8Si.js";import{_ as v}from"./iframe-C0YG1bIU.js";import{r as w,a as p,i as S,s as L,b as O,c as R,u as m}from"./i18n-CB0Zo_ka.js";import{u as g}from"./index-DCpzdOm0.js";import{r as c}from"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./react-18-D8cruF67.js";import"./index-BtM5VmRH.js";import"./inheritsLoose-Cay3MKMD.js";import"./index-BlN7QbS8.js";import"./index-CWLWFqC4.js";import"./index-DrFu-skq.js";import"../sb-preview/runtime.js";import"./isPlainObject-CqQ1Hhx9.js";const h="logo.png",F="@inseefr/lunatic-dsfr",k="https://github.com/inseefr/Lunatic-dsfr",E='"Marianne", arial, sans-serif',P="monospace",_=u({base:"dark",appBg:"#1E1E1E",appContentBg:"#161616",appPreviewBg:"#161616",barBg:"#1E1E1E",colorSecondary:"#8585F6",textColor:"#FFFFFF",brandImage:h,brandTitle:F,brandUrl:k,fontBase:E,fontCode:P}),b=u({base:"light",appBg:"#F6F6F6",appContentBg:"#FFFFFF",appPreviewBg:"#FFFFFF",barBg:"#FFFFFF",colorSecondary:"#000091",textColor:"#212121",brandImage:h,brandTitle:F,brandUrl:k,fontBase:E,fontCode:P});var d=w();class T{constructor(){this.isPending=!0;let r,t;this.pr=new Promise((e,s)=>{r=a=>{d.overwriteReadonlyProp(this,"isPending",!1),e(a)},t=a=>{d.overwriteReadonlyProp(this,"isPending",!1),s(a)}}),this.resolve=r,this.reject=t}}let l=!1;async function B(o){const{defaultColorScheme:r,verbose:t,nextParams:e,doCheckNonce:s,trustedTypesPolicyName:a}=o;if(p.assert(S),l)return;l=!0;const n=e===void 0?i=>i():e.registerEffectAction;L({colorSchemeExplicitlyProvidedAsParameter:r,doPersistDarkModePreferenceWithCookie:e===void 0?!1:e.doPersistDarkModePreferenceWithCookie,registerEffectAction:n,doCheckNonce:s,trustedTypesPolicyName:a}),window.dsfr={verbose:t,mode:"react"},await v(()=>import("./dsfr.module.min-BzfVCFNT.js"),__vite__mapDeps([]),import.meta.url),D.resolve(),n(()=>{window.dsfr.start()})}const D=new T;D.pr;function x(o){const{defaultColorScheme:r,verbose:t=!1,Link:e,useLang:s,nonce:a,trustedTypesPolicyName:n="react-dsfr"}=o;e!==void 0&&R({Link:e}),s!==void 0&&O({useLang:s}),p.assert(a!=="","nonce cannot be an empty string");const i=a!==void 0;i&&(window.ssrNonce=a),B({defaultColorScheme:r,verbose:t,doCheckNonce:i,trustedTypesPolicyName:n,nextParams:void 0})}function I(o,r){const t=c.useRef(!0);c.useEffect(()=>{if(t.current){t.current=!1;return}return o(...r)},r)}function M(o){const{children:r,context:t}=o,e=g(),{setIsDark:s}=m();return c.useEffect(()=>{s(e)},[e]),f(C,{context:t,theme:e?_:b,children:r})}const{UPDATE_STORY_ARGS:A}=__STORYBOOK_MODULE_CORE_EVENTS__,y="fr";x({defaultColorScheme:"system",useLang:()=>y});const Z={globalTypes:{locale:{description:"Internationalization locale",defaultValue:y,toolbar:{icon:"globe",items:[{value:"fr",right:"🇫🇷",title:"Français"},{value:"en",right:"🇺🇸",title:"English"}]}}},parameters:{backgrounds:{disable:!0},docs:{autodocs:!0,container:M},darkMode:{light:b,dark:_},controls:{exclude:["activeControls","initialPage","autoSuggesterLoading","shortcut","filterDescription"]}},argTypes:{darkMode:{control:{type:"boolean"},description:"Global color scheme enabled, light or dark, it change only the color scheme of the Canvas"}},decorators:[(o,r)=>{const t=g(),{setIsDark:e}=m(),s=window.__STORYBOOK_ADDONS_CHANNEL__;return c.useEffect(()=>{e(t),s.emit(A,{storyId:r.id,updatedArgs:{darkMode:t}})},[]),I(()=>{e(r.args.darkMode)},[r.args.darkMode]),f(o,{})}]};export{Z as default};
