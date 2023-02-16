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
"use strict";(self.webpackChunktopiam_console=self.webpackChunktopiam_console||[]).push([[455],{43637:function(Ge,se,s){var ee=s(5543),ne=s(79685),he=s(4820),ge=s(20165),M=function(B,H){return ne.createElement(ge.Z,(0,ee.Z)((0,ee.Z)({},B),{},{ref:H,icon:he.Z}))};M.displayName="PlusOutlined",se.Z=ne.forwardRef(M)},79938:function(Ge,se,s){s.d(se,{f:function(){return n}});var ee=s(16431),ne=s(69567),he=s(68591),ge=s.n(he),M=s(79685),Y=s(75465),B=s(5543),H=s(32788),R=function(V){return(0,ee.Z)({},V.componentCls,{width:"100%","&-wide":{maxWidth:1152,margin:"0 auto"}})};function $e(xe){return(0,H.Xj)("ProLayoutGridContent",function(V){var ye=(0,B.Z)((0,B.Z)({},V),{},{componentCls:".".concat(xe)});return[R(ye)]})}var ce=s(63342),n=function(V){var ye=(0,M.useContext)(Y.X),pe=V.children,ke=V.contentWidth,Ae=V.className,Ke=V.style,Xe=(0,M.useContext)(ne.ZP.ConfigContext),De=Xe.getPrefixCls,Se=V.prefixCls||De("pro"),de=ke||ye.contentWidth,Ce="".concat(Se,"-grid-content"),Te=$e(Ce),Ve=Te.wrapSSR,Ee=Te.hashId,Ue=de==="Fixed";return Ve((0,ce.jsx)("div",{className:ge()(Ce,Ee,Ae,(0,ee.Z)({},"".concat(Ce,"-wide"),Ue)),style:Ke,children:(0,ce.jsx)("div",{className:"".concat(Se,"-grid-content-children ").concat(Ee),children:pe})}))}},75465:function(Ge,se,s){s.d(se,{X:function(){return ne}});var ee=s(79685),ne=(0,ee.createContext)({})},52479:function(Ge,se,s){s.d(se,{Z:function(){return ya}});var ee=s(35632),ne=s(16535),he=s(43637),ge=s(68591),M=s.n(ge),Y=s(97446),B=s(16431),H=s(5543),R=s(88222),$e=s(56151),ce=s(66105),n=s(79685),xe=s(40993),V=s(73142),ye=s(33666),pe=(0,n.createContext)(null),ke=n.forwardRef(function(e,t){var a=e.prefixCls,r=e.className,o=e.style,i=e.id,l=e.active,c=e.tabKey,d=e.children;return n.createElement("div",{id:i&&"".concat(i,"-panel-").concat(c),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(c),"aria-hidden":!l,style:o,className:M()(a,l&&"".concat(a,"-active"),r),ref:t},d)}),Ae=ke,Ke=["key","forceRender","style","className"];function Xe(e){var t=e.id,a=e.activeKey,r=e.animated,o=e.tabPosition,i=e.destroyInactiveTabPane,l=n.useContext(pe),c=l.prefixCls,d=l.tabs,$=r.tabPane,C="".concat(c,"-tabpane");return n.createElement("div",{className:M()("".concat(c,"-content-holder"))},n.createElement("div",{className:M()("".concat(c,"-content"),"".concat(c,"-content-").concat(o),(0,B.Z)({},"".concat(c,"-content-animated"),$))},d.map(function(v){var x=v.key,Z=v.forceRender,w=v.style,L=v.className,A=(0,ce.Z)(v,Ke),N=x===a;return n.createElement(ye.Z,(0,Y.Z)({key:x,visible:N,forceRender:Z,removeOnLeave:!!i,leavedClassName:"".concat(C,"-hidden")},r.tabPaneMotion),function(O,y){var G=O.style,D=O.className;return n.createElement(Ae,(0,Y.Z)({},A,{prefixCls:C,id:t,tabKey:x,animated:$,active:N,style:(0,H.Z)((0,H.Z)({},w),G),className:M()(L,D),ref:y}))})})))}var De=s(23570),Se=s(34635),de=s(97534),Ce=s(13782),Te={width:0,height:0,left:0,top:0};function Ve(e,t,a){return(0,n.useMemo)(function(){for(var r,o=new Map,i=t.get((r=e[0])===null||r===void 0?void 0:r.key)||Te,l=i.left+i.width,c=0;c<e.length;c+=1){var d=e[c].key,$=t.get(d);if(!$){var C;$=t.get((C=e[c-1])===null||C===void 0?void 0:C.key)||Te}var v=o.get(d)||(0,H.Z)({},$);v.right=l-v.left-v.width,o.set(d,v)}return o},[e.map(function(r){return r.key}).join("_"),t,a])}function Ee(e){var t=(0,n.useRef)(),a=(0,n.useRef)(!1);function r(){for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];a.current||(de.Z.cancel(t.current),t.current=(0,de.Z)(function(){e.apply(void 0,i)}))}return(0,n.useEffect)(function(){return a.current=!1,function(){a.current=!0,de.Z.cancel(t.current)}},[]),r}function Ue(e){var t=(0,n.useRef)([]),a=(0,n.useState)({}),r=(0,R.Z)(a,2),o=r[1],i=(0,n.useRef)(typeof e=="function"?e():e),l=Ee(function(){var d=i.current;t.current.forEach(function($){d=$(d)}),t.current=[],i.current=d,o({})});function c(d){t.current.push(d),l()}return[i.current,c]}function it(e,t){var a=n.useRef(e),r=n.useState({}),o=(0,R.Z)(r,2),i=o[1];function l(c){var d=typeof c=="function"?c(a.current):c;d!==a.current&&t(d,a.current),a.current=d,i({})}return[a.current,l]}var Ot=.1,lt=.01,Be=20,st=Math.pow(.995,Be);function Mt(e,t){var a=(0,n.useState)(),r=(0,R.Z)(a,2),o=r[0],i=r[1],l=(0,n.useState)(0),c=(0,R.Z)(l,2),d=c[0],$=c[1],C=(0,n.useState)(0),v=(0,R.Z)(C,2),x=v[0],Z=v[1],w=(0,n.useState)(),L=(0,R.Z)(w,2),A=L[0],N=L[1],O=(0,n.useRef)();function y(h){var P=h.touches[0],u=P.screenX,S=P.screenY;i({x:u,y:S}),window.clearInterval(O.current)}function G(h){if(o){h.preventDefault();var P=h.touches[0],u=P.screenX,S=P.screenY;i({x:u,y:S});var p=u-o.x,m=S-o.y;t(p,m);var X=Date.now();$(X),Z(X-d),N({x:p,y:m})}}function D(){if(o&&(i(null),N(null),A)){var h=A.x/x,P=A.y/x,u=Math.abs(h),S=Math.abs(P);if(Math.max(u,S)<Ot)return;var p=h,m=P;O.current=window.setInterval(function(){if(Math.abs(p)<lt&&Math.abs(m)<lt){window.clearInterval(O.current);return}p*=st,m*=st,t(p*Be,m*Be)},Be)}}var T=(0,n.useRef)();function E(h){var P=h.deltaX,u=h.deltaY,S=0,p=Math.abs(P),m=Math.abs(u);p===m?S=T.current==="x"?P:u:p>m?(S=P,T.current="x"):(S=u,T.current="y"),t(-S,-S)&&h.preventDefault()}var z=(0,n.useRef)(null);z.current={onTouchStart:y,onTouchMove:G,onTouchEnd:D,onWheel:E},n.useEffect(function(){function h(p){z.current.onTouchStart(p)}function P(p){z.current.onTouchMove(p)}function u(p){z.current.onTouchEnd(p)}function S(p){z.current.onWheel(p)}return document.addEventListener("touchmove",P,{passive:!1}),document.addEventListener("touchend",u,{passive:!1}),e.current.addEventListener("touchstart",h,{passive:!1}),e.current.addEventListener("wheel",S),function(){document.removeEventListener("touchmove",P),document.removeEventListener("touchend",u)}},[])}var ct={width:0,height:0,left:0,top:0,right:0};function At(e,t,a,r,o,i,l){var c=l.tabs,d=l.tabPosition,$=l.rtl,C,v,x;return["top","bottom"].includes(d)?(C="width",v=$?"right":"left",x=Math.abs(a)):(C="height",v="top",x=-a),(0,n.useMemo)(function(){if(!c.length)return[0,0];for(var Z=c.length,w=Z,L=0;L<Z;L+=1){var A=e.get(c[L].key)||ct;if(A[v]+A[C]>x+t){w=L-1;break}}for(var N=0,O=Z-1;O>=0;O-=1){var y=e.get(c[O].key)||ct;if(y[v]<x){N=O+1;break}}return[N,w]},[e,t,r,o,i,x,d,c.map(function(Z){return Z.key}).join("_"),$])}function dt(e){var t;return e instanceof Map?(t={},e.forEach(function(a,r){t[r]=a})):t=e,JSON.stringify(t)}function Dt(e,t){var a=e.prefixCls,r=e.editable,o=e.locale,i=e.style;return!r||r.showAdd===!1?null:n.createElement("button",{ref:t,type:"button",className:"".concat(a,"-nav-add"),style:i,"aria-label":(o==null?void 0:o.addAriaLabel)||"Add tab",onClick:function(c){r.onEdit("add",{event:c})}},r.addIcon||"+")}var ut=n.forwardRef(Dt),Bt=n.forwardRef(function(e,t){var a=e.position,r=e.prefixCls,o=e.extra;if(!o)return null;var i,l={};return(0,$e.Z)(o)==="object"&&!n.isValidElement(o)?l=o:l.right=o,a==="right"&&(i=l.right),a==="left"&&(i=l.left),i?n.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},i):null}),vt=Bt,zt=s(73469),ft=s(88790),_=s(51681);function Wt(e,t){var a=e.prefixCls,r=e.id,o=e.tabs,i=e.locale,l=e.mobile,c=e.moreIcon,d=c===void 0?"More":c,$=e.moreTransitionName,C=e.style,v=e.className,x=e.editable,Z=e.tabBarGutter,w=e.rtl,L=e.removeAriaLabel,A=e.onTabClick,N=e.getPopupContainer,O=e.popupClassName,y=(0,n.useState)(!1),G=(0,R.Z)(y,2),D=G[0],T=G[1],E=(0,n.useState)(null),z=(0,R.Z)(E,2),h=z[0],P=z[1],u="".concat(r,"-more-popup"),S="".concat(a,"-dropdown"),p=h!==null?"".concat(u,"-").concat(h):null,m=i==null?void 0:i.dropdownAriaLabel;function X(f,W){f.preventDefault(),f.stopPropagation(),x.onEdit("remove",{key:W,event:f})}var Re=n.createElement(ft.ZP,{onClick:function(W){var Q=W.key,K=W.domEvent;A(Q,K),T(!1)},prefixCls:"".concat(S,"-menu"),id:u,tabIndex:-1,role:"listbox","aria-activedescendant":p,selectedKeys:[h],"aria-label":m!==void 0?m:"expanded dropdown"},o.map(function(f){var W=x&&f.closable!==!1&&!f.disabled;return n.createElement(ft.sN,{key:f.key,id:"".concat(u,"-").concat(f.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(f.key),disabled:f.disabled},n.createElement("span",null,f.label),W&&n.createElement("button",{type:"button","aria-label":L||"remove",tabIndex:0,className:"".concat(S,"-menu-item-remove"),onClick:function(K){K.stopPropagation(),X(K,f.key)}},f.closeIcon||x.removeIcon||"\xD7"))}));function re(f){for(var W=o.filter(function(ve){return!ve.disabled}),Q=W.findIndex(function(ve){return ve.key===h})||0,K=W.length,oe=0;oe<K;oe+=1){Q=(Q+f+K)%K;var me=W[Q];if(!me.disabled){P(me.key);return}}}function U(f){var W=f.which;if(!D){[_.Z.DOWN,_.Z.SPACE,_.Z.ENTER].includes(W)&&(T(!0),f.preventDefault());return}switch(W){case _.Z.UP:re(-1),f.preventDefault();break;case _.Z.DOWN:re(1),f.preventDefault();break;case _.Z.ESC:T(!1);break;case _.Z.SPACE:case _.Z.ENTER:h!==null&&A(h,f);break}}(0,n.useEffect)(function(){var f=document.getElementById(p);f&&f.scrollIntoView&&f.scrollIntoView(!1)},[h]),(0,n.useEffect)(function(){D||P(null)},[D]);var te=(0,B.Z)({},w?"marginRight":"marginLeft",Z);o.length||(te.visibility="hidden",te.order=1);var Ze=M()((0,B.Z)({},"".concat(S,"-rtl"),w)),ue=l?null:n.createElement(zt.Z,{prefixCls:S,overlay:Re,trigger:["hover"],visible:o.length?D:!1,transitionName:$,onVisibleChange:T,overlayClassName:M()(Ze,O),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:N},n.createElement("button",{type:"button",className:"".concat(a,"-nav-more"),style:te,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":u,id:"".concat(r,"-more"),"aria-expanded":D,onKeyDown:U},d));return n.createElement("div",{className:M()("".concat(a,"-nav-operations"),v),style:C,ref:t},ue,n.createElement(ut,{prefixCls:a,locale:i,editable:x}))}var jt=n.memo(n.forwardRef(Wt),function(e,t){return t.tabMoving});function Ht(e){var t,a=e.prefixCls,r=e.id,o=e.active,i=e.tab,l=i.key,c=i.label,d=i.disabled,$=i.closeIcon,C=e.closable,v=e.renderWrapper,x=e.removeAriaLabel,Z=e.editable,w=e.onClick,L=e.onFocus,A=e.style,N="".concat(a,"-tab"),O=Z&&C!==!1&&!d;function y(T){d||w(T)}function G(T){T.preventDefault(),T.stopPropagation(),Z.onEdit("remove",{key:l,event:T})}var D=n.createElement("div",{key:l,"data-node-key":l,className:M()(N,(t={},(0,B.Z)(t,"".concat(N,"-with-remove"),O),(0,B.Z)(t,"".concat(N,"-active"),o),(0,B.Z)(t,"".concat(N,"-disabled"),d),t)),style:A,onClick:y},n.createElement("div",{role:"tab","aria-selected":o,id:r&&"".concat(r,"-tab-").concat(l),className:"".concat(N,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(l),"aria-disabled":d,tabIndex:d?null:0,onClick:function(E){E.stopPropagation(),y(E)},onKeyDown:function(E){[_.Z.SPACE,_.Z.ENTER].includes(E.which)&&(E.preventDefault(),y(E))},onFocus:L},c),O&&n.createElement("button",{type:"button","aria-label":x||"remove",tabIndex:0,className:"".concat(N,"-remove"),onClick:function(E){E.stopPropagation(),G(E)}},$||Z.removeIcon||"\xD7"));return v?v(D):D}var Gt=Ht,be=function(t){var a=t.current||{},r=a.offsetWidth,o=r===void 0?0:r,i=a.offsetHeight,l=i===void 0?0:i;return[o,l]},ze=function(t,a){return t[a?0:1]};function kt(e,t){var a,r=n.useContext(pe),o=r.prefixCls,i=r.tabs,l=e.className,c=e.style,d=e.id,$=e.animated,C=e.activeKey,v=e.rtl,x=e.extra,Z=e.editable,w=e.locale,L=e.tabPosition,A=e.tabBarGutter,N=e.children,O=e.onTabClick,y=e.onTabScroll,G=(0,n.useRef)(),D=(0,n.useRef)(),T=(0,n.useRef)(),E=(0,n.useRef)(),z=(0,n.useRef)(),h=(0,n.useRef)(),P=(0,n.useRef)(),u=L==="top"||L==="bottom",S=it(0,function(g,k){u&&y&&y({direction:g>k?"left":"right"})}),p=(0,R.Z)(S,2),m=p[0],X=p[1],Re=it(0,function(g,k){!u&&y&&y({direction:g>k?"top":"bottom"})}),re=(0,R.Z)(Re,2),U=re[0],te=re[1],Ze=(0,n.useState)([0,0]),ue=(0,R.Z)(Ze,2),f=ue[0],W=ue[1],Q=(0,n.useState)([0,0]),K=(0,R.Z)(Q,2),oe=K[0],me=K[1],ve=(0,n.useState)([0,0]),we=(0,R.Z)(ve,2),Fe=we[0],Ye=we[1],_e=(0,n.useState)([0,0]),Ne=(0,R.Z)(_e,2),Qe=Ne[0],Je=Ne[1],I=Ue(new Map),ie=(0,R.Z)(I,2),Ie=ie[0],Sa=ie[1],We=Ve(i,Ie,oe[0]),fe=ze(f,u),ae=ze(oe,u),qe=ze(Fe,u),gt=ze(Qe,u),Ca=fe<ae+qe,J=Ca?fe-gt:fe-qe,Ta="".concat(o,"-nav-operations-hidden"),Le=0,Oe=0;u&&v?(Le=0,Oe=Math.max(0,ae-J)):(Le=Math.min(0,J-ae),Oe=0);function et(g){return g<Le?Le:g>Oe?Oe:g}var $t=(0,n.useRef)(),Ea=(0,n.useState)(),xt=(0,R.Z)(Ea,2),je=xt[0],yt=xt[1];function tt(){yt(Date.now())}function at(){window.clearTimeout($t.current)}Mt(E,function(g,k){function b(j,F){j(function(q){var Ma=et(q+F);return Ma})}return fe>=ae?!1:(u?b(X,g):b(te,k),at(),tt(),!0)}),(0,n.useEffect)(function(){return at(),je&&($t.current=window.setTimeout(function(){yt(0)},100)),at},[je]);var Pa=At(We,J,u?m:U,ae,qe,gt,(0,H.Z)((0,H.Z)({},e),{},{tabs:i})),St=(0,R.Z)(Pa,2),Ra=St[0],Za=St[1],Ct=function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:C,b=We.get(k)||{width:0,height:0,left:0,right:0,top:0};if(u){var j=m;v?b.right<m?j=b.right:b.right+b.width>m+J&&(j=b.right+b.width-J):b.left<-m?j=-b.left:b.left+b.width>-m+J&&(j=-(b.left+b.width-J)),te(0),X(et(j))}else{var F=U;b.top<-U?F=-b.top:b.top+b.height>-U+J&&(F=-(b.top+b.height-J)),X(0),te(et(F))}},He={};L==="top"||L==="bottom"?He[v?"marginRight":"marginLeft"]=A:He.marginTop=A;var Tt=i.map(function(g,k){var b=g.key;return n.createElement(Gt,{id:d,prefixCls:o,key:b,tab:g,style:k===0?void 0:He,closable:g.closable,editable:Z,active:b===C,renderWrapper:N,removeAriaLabel:w==null?void 0:w.removeAriaLabel,onClick:function(F){O(b,F)},onFocus:function(){Ct(b),tt(),E.current&&(v||(E.current.scrollLeft=0),E.current.scrollTop=0)}})}),Et=function(){return Sa(function(){var k=new Map;return i.forEach(function(b){var j,F=b.key,q=(j=z.current)===null||j===void 0?void 0:j.querySelector('[data-node-key="'.concat(F,'"]'));q&&k.set(F,{width:q.offsetWidth,height:q.offsetHeight,left:q.offsetLeft,top:q.offsetTop})}),k})};(0,n.useEffect)(function(){Et()},[i.map(function(g){return g.key}).join("_")]);var nt=Ee(function(){var g=be(G),k=be(D),b=be(T);W([g[0]-k[0]-b[0],g[1]-k[1]-b[1]]);var j=be(P);Ye(j);var F=be(h);Je(F);var q=be(z);me([q[0]-j[0],q[1]-j[1]]),Et()}),wa=i.slice(0,Ra),Na=i.slice(Za+1),Pt=[].concat((0,De.Z)(wa),(0,De.Z)(Na)),Ia=(0,n.useState)(),Rt=(0,R.Z)(Ia,2),La=Rt[0],Oa=Rt[1],le=We.get(C),Zt=(0,n.useRef)();function wt(){de.Z.cancel(Zt.current)}(0,n.useEffect)(function(){var g={};return le&&(u?(v?g.right=le.right:g.left=le.left,g.width=le.width):(g.top=le.top,g.height=le.height)),wt(),Zt.current=(0,de.Z)(function(){Oa(g)}),wt},[le,u,v]),(0,n.useEffect)(function(){Ct()},[C,dt(le),dt(We),u]),(0,n.useEffect)(function(){nt()},[v]);var Nt=!!Pt.length,Me="".concat(o,"-nav-wrap"),rt,ot,It,Lt;return u?v?(ot=m>0,rt=m+fe<ae):(rt=m<0,ot=-m+fe<ae):(It=U<0,Lt=-U+fe<ae),n.createElement(Se.Z,{onResize:nt},n.createElement("div",{ref:(0,Ce.x1)(t,G),role:"tablist",className:M()("".concat(o,"-nav"),l),style:c,onKeyDown:function(){tt()}},n.createElement(vt,{ref:D,position:"left",extra:x,prefixCls:o}),n.createElement("div",{className:M()(Me,(a={},(0,B.Z)(a,"".concat(Me,"-ping-left"),rt),(0,B.Z)(a,"".concat(Me,"-ping-right"),ot),(0,B.Z)(a,"".concat(Me,"-ping-top"),It),(0,B.Z)(a,"".concat(Me,"-ping-bottom"),Lt),a)),ref:E},n.createElement(Se.Z,{onResize:nt},n.createElement("div",{ref:z,className:"".concat(o,"-nav-list"),style:{transform:"translate(".concat(m,"px, ").concat(U,"px)"),transition:je?"none":void 0}},Tt,n.createElement(ut,{ref:P,prefixCls:o,locale:w,editable:Z,style:(0,H.Z)((0,H.Z)({},Tt.length===0?void 0:He),{},{visibility:Nt?"hidden":null})}),n.createElement("div",{className:M()("".concat(o,"-ink-bar"),(0,B.Z)({},"".concat(o,"-ink-bar-animated"),$.inkBar)),style:La})))),n.createElement(jt,(0,Y.Z)({},e,{removeAriaLabel:w==null?void 0:w.removeAriaLabel,ref:h,prefixCls:o,tabs:Pt,className:!Nt&&Ta,tabMoving:!!je})),n.createElement(vt,{ref:T,position:"right",extra:x,prefixCls:o})))}var pt=n.forwardRef(kt),Kt=["renderTabBar"],Xt=["label","key"];function Vt(e){var t=e.renderTabBar,a=(0,ce.Z)(e,Kt),r=n.useContext(pe),o=r.tabs;if(t){var i=(0,H.Z)((0,H.Z)({},a),{},{panes:o.map(function(l){var c=l.label,d=l.key,$=(0,ce.Z)(l,Xt);return n.createElement(Ae,(0,Y.Z)({tab:c,key:d,tabKey:d},$))})});return t(i,pt)}return n.createElement(pt,a)}var Aa=s(885);function Ut(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},t;return e===!1?t={inkBar:!1,tabPane:!1}:e===!0?t={inkBar:!0,tabPane:!1}:t=(0,H.Z)({inkBar:!0},(0,$e.Z)(e)==="object"?e:{}),t.tabPaneMotion&&t.tabPane===void 0&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}var Ft=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],bt=0;function Yt(e,t){var a,r=e.id,o=e.prefixCls,i=o===void 0?"rc-tabs":o,l=e.className,c=e.items,d=e.direction,$=e.activeKey,C=e.defaultActiveKey,v=e.editable,x=e.animated,Z=e.tabPosition,w=Z===void 0?"top":Z,L=e.tabBarGutter,A=e.tabBarStyle,N=e.tabBarExtraContent,O=e.locale,y=e.moreIcon,G=e.moreTransitionName,D=e.destroyInactiveTabPane,T=e.renderTabBar,E=e.onChange,z=e.onTabClick,h=e.onTabScroll,P=e.getPopupContainer,u=e.popupClassName,S=(0,ce.Z)(e,Ft),p=n.useMemo(function(){return(c||[]).filter(function(I){return I&&(0,$e.Z)(I)==="object"&&"key"in I})},[c]),m=d==="rtl",X=Ut(x),Re=(0,n.useState)(!1),re=(0,R.Z)(Re,2),U=re[0],te=re[1];(0,n.useEffect)(function(){te((0,xe.Z)())},[]);var Ze=(0,V.Z)(function(){var I;return(I=p[0])===null||I===void 0?void 0:I.key},{value:$,defaultValue:C}),ue=(0,R.Z)(Ze,2),f=ue[0],W=ue[1],Q=(0,n.useState)(function(){return p.findIndex(function(I){return I.key===f})}),K=(0,R.Z)(Q,2),oe=K[0],me=K[1];(0,n.useEffect)(function(){var I=p.findIndex(function(Ie){return Ie.key===f});if(I===-1){var ie;I=Math.max(0,Math.min(oe,p.length-1)),W((ie=p[I])===null||ie===void 0?void 0:ie.key)}me(I)},[p.map(function(I){return I.key}).join("_"),f,oe]);var ve=(0,V.Z)(null,{value:r}),we=(0,R.Z)(ve,2),Fe=we[0],Ye=we[1];(0,n.useEffect)(function(){r||(Ye("rc-tabs-".concat(bt)),bt+=1)},[]);function _e(I,ie){z==null||z(I,ie);var Ie=I!==f;W(I),Ie&&(E==null||E(I))}var Ne={id:Fe,activeKey:f,animated:X,tabPosition:w,rtl:m,mobile:U},Qe,Je=(0,H.Z)((0,H.Z)({},Ne),{},{editable:v,locale:O,moreIcon:y,moreTransitionName:G,tabBarGutter:L,onTabClick:_e,onTabScroll:h,extra:N,style:A,panes:null,getPopupContainer:P,popupClassName:u});return n.createElement(pe.Provider,{value:{tabs:p,prefixCls:i}},n.createElement("div",(0,Y.Z)({ref:t,id:r,className:M()(i,"".concat(i,"-").concat(w),(a={},(0,B.Z)(a,"".concat(i,"-mobile"),U),(0,B.Z)(a,"".concat(i,"-editable"),v),(0,B.Z)(a,"".concat(i,"-rtl"),m),a),l)},S),Qe,n.createElement(Vt,(0,Y.Z)({},Je,{renderTabBar:T})),n.createElement(Xe,(0,Y.Z)({destroyInactiveTabPane:D},Ne,{animated:X}))))}var _t=n.forwardRef(Yt),Qt=_t,Jt=Qt,qt=s(86787),ea=s(26102),ta=s(8119);const aa={motionAppear:!1,motionEnter:!0,motionLeave:!0};function na(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},a;return t===!1?a={inkBar:!1,tabPane:!1}:t===!0?a={inkBar:!0,tabPane:!0}:a=Object.assign({inkBar:!0},typeof t=="object"?t:{}),a.tabPane&&(a.tabPaneMotion=Object.assign(Object.assign({},aa),{motionName:(0,ta.mL)(e,"switch")})),a}var ra=s(9129),oa=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(a[r[o]]=e[r[o]]);return a};function ia(e){return e.filter(t=>t)}function la(e,t){if(e)return e;const a=(0,ra.Z)(t).map(r=>{if(n.isValidElement(r)){const{key:o,props:i}=r,l=i||{},{tab:c}=l,d=oa(l,["tab"]);return Object.assign(Object.assign({key:String(o)},d),{label:c})}return null});return ia(a)}var sa=()=>null,ca=s(83763),da=s(92232),Pe=s(62371),mt=s(22554),ua=e=>{const{componentCls:t,motionDurationSlow:a}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${a}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${a}`}}}}},[(0,mt.oN)(e,"slide-up"),(0,mt.oN)(e,"slide-down")]]};const va=e=>{const{componentCls:t,tabsCardHorizontalPadding:a,tabsCardHeadBackground:r,tabsCardGutter:o,colorSplit:i}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:a,background:r,border:`${e.lineWidth}px ${e.lineType} ${i}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:e.colorPrimary,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:`${o}px`}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:`${o}px`}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},fa=e=>{const{componentCls:t,tabsHoverColor:a,dropdownEdgeChildVerticalPadding:r}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},(0,Pe.Wf)(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${r}px 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},Pe.vS),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${e.paddingXXS}px ${e.paddingSM}px`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:a}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},pa=e=>{const{componentCls:t,margin:a,colorSplit:r}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:`0 0 ${a}px 0`,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${e.lineWidth}px ${e.lineType} ${r}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:`${a}px`,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:e.controlHeight*1.25,[`${t}-tab`]:{padding:`${e.paddingXS}px ${e.paddingLG}px`,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:`${e.margin}px 0 0 0`},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:`-${e.lineWidth}px`},borderLeft:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:-e.lineWidth},borderRight:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},ba=e=>{const{componentCls:t,padding:a}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXS}px 0`,fontSize:e.fontSize}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${a}px 0`,fontSize:e.fontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXXS*1.5}px ${a}px`}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${e.borderRadius}px ${e.borderRadius}px`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${e.borderRadius}px ${e.borderRadius}px 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadius}px ${e.borderRadius}px 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadius}px 0 0 ${e.borderRadius}px`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXS}px ${a}px ${e.paddingXXS*1.5}px`}}}}}},ma=e=>{const{componentCls:t,tabsActiveColor:a,tabsHoverColor:r,iconCls:o,tabsHorizontalGutter:i}=e,l=`${t}-tab`;return{[l]:{position:"relative",display:"inline-flex",alignItems:"center",padding:`${e.paddingSM}px 0`,fontSize:`${e.fontSize}px`,background:"transparent",border:0,outline:"none",cursor:"pointer","&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:a}},(0,Pe.Qy)(e)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-e.marginXXS},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:r},[`&${l}-active ${l}-btn`]:{color:e.colorPrimary,textShadow:e.tabsActiveTextShadow},[`&${l}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${l}-disabled ${l}-btn, &${l}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${l}-remove ${o}`]:{margin:0},[o]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${l} + ${l}`]:{margin:{_skip_check_:!0,value:`0 0 0 ${i}px`}}}},ha=e=>{const{componentCls:t,tabsHorizontalGutter:a,iconCls:r,tabsCardGutter:o}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:`0 0 0 ${a}px`},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[r]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:`${e.marginSM}px`}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:`${e.marginXS}px`},marginLeft:{_skip_check_:!0,value:`-${e.marginXXS}px`},[r]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:`${o}px`},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},ga=e=>{const{componentCls:t,tabsCardHorizontalPadding:a,tabsCardHeight:r,tabsCardGutter:o,tabsHoverColor:i,tabsActiveColor:l,colorSplit:c}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,Pe.Wf)(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:a,background:"transparent",border:0,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.controlHeightLG/8,transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:`${r}px`,marginLeft:{_skip_check_:!0,value:`${o}px`},padding:`0 ${e.paddingXS}px`,background:"transparent",border:`${e.lineWidth}px ${e.lineType} ${c}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:i},"&:active, &:focus:not(:focus-visible)":{color:l}},(0,Pe.Qy)(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.colorPrimary,pointerEvents:"none"}}),ma(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}};var $a=(0,ca.Z)("Tabs",e=>{const t=e.controlHeightLG,a=(0,da.TS)(e,{tabsHoverColor:e.colorPrimaryHover,tabsActiveColor:e.colorPrimaryActive,tabsCardHorizontalPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,tabsCardHeight:t,tabsCardGutter:e.marginXXS/2,tabsHorizontalGutter:32,tabsCardHeadBackground:e.colorFillAlter,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120});return[ba(a),ha(a),pa(a),fa(a),va(a),ga(a),ua(a)]},e=>({zIndexPopup:e.zIndexPopupBase+50})),xa=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(a[r[o]]=e[r[o]]);return a};function ht(e){var{type:t,className:a,rootClassName:r,size:o,onEdit:i,hideAdd:l,centered:c,addIcon:d,popupClassName:$,children:C,items:v,animated:x}=e,Z=xa(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","popupClassName","children","items","animated"]);const{prefixCls:w,moreIcon:L=n.createElement(ne.Z,null)}=Z,{direction:A,getPrefixCls:N,getPopupContainer:O}=n.useContext(qt.E_),y=N("tabs",w),[G,D]=$a(y);let T;t==="editable-card"&&(T={onEdit:(S,p)=>{let{key:m,event:X}=p;i==null||i(S==="add"?X:m,S)},removeIcon:n.createElement(ee.Z,null),addIcon:d||n.createElement(he.Z,null),showAdd:l!==!0});const E=N(),z=la(v,C),h=na(y,x),P=n.useContext(ea.Z),u=o!==void 0?o:P;return G(n.createElement(Jt,Object.assign({direction:A,getPopupContainer:O,moreTransitionName:`${E}-slide-up`},Z,{items:z,className:M()({[`${y}-${u}`]:u,[`${y}-card`]:["card","editable-card"].includes(t),[`${y}-editable-card`]:t==="editable-card",[`${y}-centered`]:c},a,r,D),popupClassName:M()($,D),editable:T,moreIcon:L,prefixCls:y,animated:h})))}ht.TabPane=sa;var ya=ht}}]);
