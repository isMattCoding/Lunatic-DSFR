import{u as c}from"./index-BU7te62H.js";import{f as i}from"./client-CITu49fz.js";function a(){const{isDark:r}=c();return{isDark:r,options:i.colors.options,decisions:i.colors.decisions}}function p(r,t,o){if(!t)return o;const s=t.split(".");if(s.length!==2)return o;const n=r.decisions.background.alt[s[0]];return n&&n[s[1]]||o}export{p as t,a as u};
