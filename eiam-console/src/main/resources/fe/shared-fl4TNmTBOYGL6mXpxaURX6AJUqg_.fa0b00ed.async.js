/*
 * eiam-console - Employee Identity and Access Management Program
 * Copyright © 2020-2023 TopIAM (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
"use strict";(self.webpackChunktopiam_console=self.webpackChunktopiam_console||[]).push([[80],{9137:function(He,Y,o){o.d(Y,{ZM:function(){return N},ZP:function(){return fe}});var Z=o(23570),Q=o(68591),O=o.n(Q),n=o(79685),M=o(86787),U=o(34491),k=o(93744),q=o(83497),_=o(30363),ee=o(82769),w=o(59979),te=o(97856),ne=o(23339),ie=o(28764),A=function(t,e){var i={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(i[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(i[a[r]]=t[a[r]]);return i};const ae=t=>{var{prefixCls:e,className:i,avatar:a,title:r,description:s}=t,u=A(t,["prefixCls","className","avatar","title","description"]);const{getPrefixCls:p}=(0,n.useContext)(M.E_),$=p("list",e),h=O()(`${$}-item-meta`,i),C=n.createElement("div",{className:`${$}-item-meta-content`},r&&n.createElement("h4",{className:`${$}-item-meta-title`},r),s&&n.createElement("div",{className:`${$}-item-meta-description`},s));return n.createElement("div",Object.assign({},u,{className:h}),a&&n.createElement("div",{className:`${$}-item-meta-avatar`},a),(r||s)&&C)},re=(t,e)=>{var{prefixCls:i,children:a,actions:r,extra:s,className:u,colStyle:p}=t,$=A(t,["prefixCls","children","actions","extra","className","colStyle"]);const{grid:h,itemLayout:C}=(0,n.useContext)(N),{getPrefixCls:c}=(0,n.useContext)(M.E_),E=()=>{let v;return n.Children.forEach(a,y=>{typeof y=="string"&&(v=!0)}),v&&n.Children.count(a)>1},P=()=>C==="vertical"?!!s:!E(),d=c("list",i),S=r&&r.length>0&&n.createElement("ul",{className:`${d}-item-action`,key:"actions"},r.map((v,y)=>n.createElement("li",{key:`${d}-item-action-${y}`},v,y!==r.length-1&&n.createElement("em",{className:`${d}-item-action-split`})))),z=h?"div":"li",b=n.createElement(z,Object.assign({},$,h?{}:{ref:e},{className:O()(`${d}-item`,{[`${d}-item-no-flex`]:!P()},u)}),C==="vertical"&&s?[n.createElement("div",{className:`${d}-item-main`,key:"content"},a,S),n.createElement("div",{className:`${d}-item-extra`,key:"extra"},s)]:[a,S,(0,ie.Tm)(s,{key:"extra"})]);return h?n.createElement(ne.Z,{ref:e,flex:1,style:p},b):b},R=(0,n.forwardRef)(re);R.Meta=ae;var le=R,oe=o(62371),se=o(83763),ce=o(92232);const de=t=>{const{listBorderedCls:e,componentCls:i,paddingLG:a,margin:r,padding:s,listItemPaddingSM:u,marginLG:p,borderRadiusLG:$}=t;return{[`${e}`]:{border:`${t.lineWidth}px ${t.lineType} ${t.colorBorder}`,borderRadius:$,[`${i}-header,${i}-footer,${i}-item`]:{paddingInline:a},[`${i}-pagination`]:{margin:`${r}px ${p}px`}},[`${e}${i}-sm`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:u}},[`${e}${i}-lg`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:`${s}px ${a}px`}}}},me=t=>{const{componentCls:e,screenSM:i,screenMD:a,marginLG:r,marginSM:s,margin:u}=t;return{[`@media screen and (max-width:${a})`]:{[`${e}`]:{[`${e}-item`]:{[`${e}-item-action`]:{marginInlineStart:r}}},[`${e}-vertical`]:{[`${e}-item`]:{[`${e}-item-extra`]:{marginInlineStart:r}}}},[`@media screen and (max-width: ${i})`]:{[`${e}`]:{[`${e}-item`]:{flexWrap:"wrap",[`${e}-action`]:{marginInlineStart:s}}},[`${e}-vertical`]:{[`${e}-item`]:{flexWrap:"wrap-reverse",[`${e}-item-main`]:{minWidth:t.contentWidth},[`${e}-item-extra`]:{margin:`auto auto ${u}px`}}}}}},ge=t=>{const{componentCls:e,antCls:i,controlHeight:a,minHeight:r,paddingSM:s,marginLG:u,padding:p,listItemPadding:$,colorPrimary:h,listItemPaddingSM:C,listItemPaddingLG:c,paddingXS:E,margin:P,colorText:d,colorTextDescription:S,motionDurationSlow:z,lineWidth:b}=t,v={};return["start","center","end"].forEach(y=>{v[`&-align-${y}`]={textAlign:y}}),{[`${e}`]:Object.assign(Object.assign({},(0,oe.Wf)(t)),{position:"relative","*":{outline:"none"},[`${e}-header, ${e}-footer`]:{background:"transparent",paddingBlock:s},[`${e}-pagination`]:Object.assign(Object.assign({marginBlockStart:u},v),{[`${i}-pagination-options`]:{textAlign:"start"}}),[`${e}-spin`]:{minHeight:r,textAlign:"center"},[`${e}-items`]:{margin:0,padding:0,listStyle:"none"},[`${e}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:$,color:d,[`${e}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${e}-item-meta-avatar`]:{marginInlineEnd:p},[`${e}-item-meta-content`]:{flex:"1 0",width:0,color:d},[`${e}-item-meta-title`]:{marginBottom:t.marginXXS,color:d,fontSize:t.fontSize,lineHeight:t.lineHeight,"> a":{color:d,transition:`all ${z}`,["&:hover"]:{color:h}}},[`${e}-item-meta-description`]:{color:S,fontSize:t.fontSize,lineHeight:t.lineHeight}},[`${e}-item-action`]:{flex:"0 0 auto",marginInlineStart:t.marginXXL,padding:0,fontSize:0,listStyle:"none",["& > li"]:{position:"relative",display:"inline-block",padding:`0 ${E}px`,color:S,fontSize:t.fontSize,lineHeight:t.lineHeight,textAlign:"center",["&:first-child"]:{paddingInlineStart:0}},[`${e}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:b,height:Math.ceil(t.fontSize*t.lineHeight)-t.marginXXS*2,transform:"translateY(-50%)",backgroundColor:t.colorSplit}}},[`${e}-empty`]:{padding:`${p}px 0`,color:S,fontSize:t.fontSizeSM,textAlign:"center"},[`${e}-empty-text`]:{padding:p,color:t.colorTextDisabled,fontSize:t.fontSize,textAlign:"center"},[`${e}-item-no-flex`]:{display:"block"}}),[`${e}-grid ${i}-col > ${e}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:P,paddingBlock:0,borderBlockEnd:"none"},[`${e}-vertical ${e}-item`]:{alignItems:"initial",[`${e}-item-main`]:{display:"block",flex:1},[`${e}-item-extra`]:{marginInlineStart:u},[`${e}-item-meta`]:{marginBlockEnd:p,[`${e}-item-meta-title`]:{marginBlockStart:0,marginBlockEnd:s,color:d,fontSize:t.fontSizeLG,lineHeight:t.lineHeightLG}},[`${e}-item-action`]:{marginBlockStart:p,marginInlineStart:"auto","> li":{padding:`0 ${p}px`,["&:first-child"]:{paddingInlineStart:0}}}},[`${e}-split ${e}-item`]:{borderBlockEnd:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`,["&:last-child"]:{borderBlockEnd:"none"}},[`${e}-split ${e}-header`]:{borderBlockEnd:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${e}-split${e}-empty ${e}-footer`]:{borderTop:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${e}-loading ${e}-spin-nested-loading`]:{minHeight:a},[`${e}-split${e}-something-after-last-item ${i}-spin-container > ${e}-items > ${e}-item:last-child`]:{borderBlockEnd:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${e}-lg ${e}-item`]:{padding:c},[`${e}-sm ${e}-item`]:{padding:C},[`${e}:not(${e}-vertical)`]:{[`${e}-item-no-flex`]:{[`${e}-item-action`]:{float:"right"}}}}};var pe=(0,se.Z)("List",t=>{const e=(0,ce.TS)(t,{listBorderedCls:`${t.componentCls}-bordered`,minHeight:t.controlHeightLG,listItemPadding:`${t.paddingContentVertical}px ${t.paddingContentHorizontalLG}px`,listItemPaddingSM:`${t.paddingContentVerticalSM}px ${t.paddingContentHorizontal}px`,listItemPaddingLG:`${t.paddingContentVerticalLG}px ${t.paddingContentHorizontalLG}px`});return[ge(e),de(e),me(e)]},{contentWidth:220}),$e=function(t,e){var i={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(i[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(i[a[r]]=t[a[r]]);return i};const N=n.createContext({}),We=N.Consumer;function X(t){var e,{pagination:i=!1,prefixCls:a,bordered:r=!1,split:s=!0,className:u,rootClassName:p,children:$,itemLayout:h,loadMore:C,grid:c,dataSource:E=[],size:P,header:d,footer:S,loading:z=!1,rowKey:b,renderItem:v,locale:y}=t,ue=$e(t,["pagination","prefixCls","bordered","split","className","rootClassName","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]);const D=i&&typeof i=="object"?i:{},[he,xe]=n.useState(D.defaultCurrent||1),[Se,ve]=n.useState(D.defaultPageSize||10),{getPrefixCls:ye,renderEmpty:H,direction:Ce}=n.useContext(M.E_),be={current:1,total:0},V=l=>(g,x)=>{xe(g),ve(x),i&&i[l]&&i[l](g,x)},Ee=V("onChange"),Ie=V("onShowSizeChange"),Pe=(l,g)=>{if(!v)return null;let x;return typeof b=="function"?x=b(l):b?x=l[b]:x=l.key,x||(x=`list-item-${g}`),n.createElement(n.Fragment,{key:x},v(l,g))},ze=()=>!!(C||i||S),m=ye("list",a),[Oe,Ne]=pe(m);let I=z;typeof I=="boolean"&&(I={spinning:I});const W=I&&I.spinning;let L="";switch(P){case"large":L="lg";break;case"small":L="sm";break;default:break}const Le=O()(m,{[`${m}-vertical`]:h==="vertical",[`${m}-${L}`]:L,[`${m}-split`]:s,[`${m}-bordered`]:r,[`${m}-loading`]:W,[`${m}-grid`]:!!c,[`${m}-something-after-last-item`]:ze(),[`${m}-rtl`]:Ce==="rtl"},u,p,Ne),f=(0,te.Z)(be,{total:E.length,current:he,pageSize:Se},i||{}),F=Math.ceil(f.total/f.pageSize);f.current>F&&(f.current=F);const K=i?n.createElement("div",{className:O()(`${m}-pagination`,`${m}-pagination-align-${(e=f==null?void 0:f.align)!==null&&e!==void 0?e:"end"}`)},n.createElement(_.Z,Object.assign({},f,{onChange:Ee,onShowSizeChange:Ie}))):null;let T=(0,Z.Z)(E);i&&E.length>(f.current-1)*f.pageSize&&(T=(0,Z.Z)(E).splice((f.current-1)*f.pageSize,f.pageSize));const je=Object.keys(c||{}).some(l=>["xs","sm","md","lg","xl","xxl"].includes(l)),J=(0,q.Z)(je),j=n.useMemo(()=>{for(let l=0;l<w.c.length;l+=1){const g=w.c[l];if(J[g])return g}},[J]),Be=n.useMemo(()=>{if(!c)return;const l=j&&c[j]?c[j]:c.column;if(l)return{width:`${100/l}%`,maxWidth:`${100/l}%`}},[c==null?void 0:c.column,j]);let G=W&&n.createElement("div",{style:{minHeight:53}});if(T.length>0){const l=T.map((g,x)=>Pe(g,x));G=c?n.createElement(k.Z,{gutter:c.gutter},n.Children.map(l,g=>n.createElement("div",{key:g==null?void 0:g.key,style:Be},g))):n.createElement("ul",{className:`${m}-items`},l)}else!$&&!W&&(G=n.createElement("div",{className:`${m}-empty-text`},y&&y.emptyText||(H==null?void 0:H("List"))||n.createElement(U.Z,{componentName:"List"})));const B=f.position||"bottom",Me=n.useMemo(()=>({grid:c,itemLayout:h}),[JSON.stringify(c),h]);return Oe(n.createElement(N.Provider,{value:Me},n.createElement("div",Object.assign({className:Le},ue),(B==="top"||B==="both")&&K,d&&n.createElement("div",{className:`${m}-header`},d),n.createElement(ee.Z,Object.assign({},I),G,$),S&&n.createElement("div",{className:`${m}-footer`},S),C||(B==="bottom"||B==="both")&&K)))}X.Item=le;var fe=X}}]);
