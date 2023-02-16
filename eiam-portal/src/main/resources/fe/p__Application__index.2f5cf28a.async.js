/*
 * eiam-portal - Employee Identity and Access Management Program
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
"use strict";(self.webpackChunktopiam_portal=self.webpackChunktopiam_portal||[]).push([[396],{78020:function(xt,se,o){o.r(se),o.d(se,{default:function(){return It}});var ve=o(84019),L=o.n(ve),_=o(32061),p=o.n(_),J=o(7863),Fe=o.n(J),Xe=o(65352),n=o(16431),y=o(5543),Pe=o(66105),Re=o(87370),Ye=Re.Z,l=o(69567),v=o(68591),s=o.n(v),g=o(79685),R=o(23570),O=o(88222),V=o(86068),ee=o(9137),ce=o(18713),Ue=o(17292),Ie=o(10431),ie=o(51642),Je=["title","subTitle","avatar","description","extra","content","actions","type"],Qe=Je.reduce(function(t,a){return t.set(a,!0),t},new Map),ge=o(6407),ht=o(6404),yt=o(869),Ct=o(58817),c=o(63342),bt=["title","subTitle","content","itemTitleRender","prefixCls","actions","item","recordKey","avatar","cardProps","description","isEditable","checkbox","index","selected","loading","expand","onExpand","expandable","rowSupportExpand","showActions","showExtra","type","style","className","record","onRow","onItem","itemHeaderRender","cardActionProps","extra"];function e(t){var a,h=t.prefixCls,b=t.expandIcon,C=b===void 0?(0,c.jsx)(ge.Z,{}):b,x=t.onExpand,d=t.expanded,B=t.record,P=t.hashId,$=C,u="".concat(h,"-row-expand-icon"),I=function(F){x(!d),F.stopPropagation()};return typeof C=="function"&&($=C({expanded:d,onExpand:x,record:B})),(0,c.jsx)("span",{className:s()(u,P,(a={},(0,n.Z)(a,"".concat(h,"-row-expanded"),d),(0,n.Z)(a,"".concat(h,"-row-collapsed"),!d),a)),onClick:I,children:$})}function r(t){var a,h,b,C,x,d=t.prefixCls,B=(0,g.useContext)(l.ZP.ConfigContext),P=B.getPrefixCls,$=(0,g.useContext)(V.L_),u=$.hashId,I=P("pro-list",d),E="".concat(I,"-row"),F=t.title,K=t.subTitle,ue=t.content,M=t.itemTitleRender,Oe=t.prefixCls,D=t.actions,ut=t.item,mt=t.recordKey,ae=t.avatar,Q=t.cardProps,W=t.description,_e=t.isEditable,be=t.checkbox,H=t.index,et=t.selected,me=t.loading,G=t.expand,Be=t.onExpand,Se=t.expandable,Ae=t.rowSupportExpand,de=t.showActions,$e=t.showExtra,Ze=t.type,ne=t.style,we=t.className,X=we===void 0?E:we,S=t.record,A=t.onRow,j=t.onItem,re=t.itemHeaderRender,q=t.cardActionProps,Le=t.extra,ze=(0,Pe.Z)(t,bt),fe=Se||{},tt=fe.expandedRowRender,pe=fe.expandIcon,Et=fe.expandRowByClick,He=fe.indentSize,Y=He===void 0?8:He,Z=fe.expandedRowClassName,N=(0,Ct.Z)(!!G,{value:G,onChange:Be}),U=(0,O.Z)(N,2),oe=U[0],Ke=U[1],T=s()((a={},(0,n.Z)(a,"".concat(E,"-selected"),!Q&&et),(0,n.Z)(a,"".concat(E,"-show-action-hover"),de==="hover"),(0,n.Z)(a,"".concat(E,"-type-").concat(Ze),!!Ze),(0,n.Z)(a,"".concat(E,"-editable"),_e),(0,n.Z)(a,"".concat(E,"-show-extra-hover"),$e==="hover"),a),u,E),Me=s()(u,(0,n.Z)({},"".concat(X,"-extra"),$e==="hover")),at=oe||Object.values(Se||{}).length===0,ft=tt&&tt(S,H,Y,oe),De=(0,g.useMemo)(function(){if(!(!D||q==="actions"))return[(0,c.jsx)("div",{onClick:function(Ve){return Ve.stopPropagation()},children:D},"action")]},[D,q]),jt=(0,g.useMemo)(function(){if(!(!D||!q||q==="extra"))return[(0,c.jsx)("div",{className:"".concat(T,"-actions ").concat(u),onClick:function(Ve){return Ve.stopPropagation()},children:D},"action")]},[D,q,T,u]),We=F||K?(0,c.jsxs)("div",{className:"".concat(T,"-header-title ").concat(u),children:[F&&(0,c.jsx)("div",{className:"".concat(T,"-title ").concat(u),children:F}),K&&(0,c.jsx)("div",{className:"".concat(T,"-subTitle ").concat(u),children:K})]}):null,k=(h=M&&(M==null?void 0:M(S,H,We)))!==null&&h!==void 0?h:We,Ge=k||ae||K||W?(0,c.jsx)(ee.ZP.Item.Meta,{avatar:ae,title:k,description:W&&at&&(0,c.jsx)("div",{className:"".concat(T,"-description ").concat(u),children:W})}):null,pt=s()(u,(b={},(0,n.Z)(b,"".concat(T,"-item-has-checkbox"),be),(0,n.Z)(b,"".concat(T,"-item-has-avatar"),ae),(0,n.Z)(b,T,T),b)),nt=(0,g.useMemo)(function(){return ae||F?(0,c.jsxs)(c.Fragment,{children:[ae,(0,c.jsx)("span",{className:"".concat(P("list-item-meta-title")," ").concat(u),children:F})]}):null},[ae,P,u,F]),rt=Q?(0,c.jsx)(ht.ZP,(0,y.Z)((0,y.Z)((0,y.Z)({bordered:!0,loading:me,hoverable:!0},Q),{},{title:nt,subTitle:K,extra:De,actions:jt,bodyStyle:(0,y.Z)({padding:24},Q.bodyStyle)},j==null?void 0:j(S,H)),{},{children:(0,c.jsx)(yt.Z,{avatar:!0,title:!1,loading:me,active:!0,children:(0,c.jsxs)("div",{className:"".concat(T,"-header ").concat(u),children:[M&&(M==null?void 0:M(S,H,We)),ue]})})})):(0,c.jsx)(ee.ZP.Item,(0,y.Z)((0,y.Z)((0,y.Z)((0,y.Z)({className:s()(pt,u,(0,n.Z)({},X,X!==E))},ze),{},{actions:De,extra:!!Le&&(0,c.jsx)("div",{className:Me,children:Le})},A==null?void 0:A(S,H)),j==null?void 0:j(S,H)),{},{onClick:function(Ve){var vt,Tt,gt,Nt;A==null||(vt=A(S,H))===null||vt===void 0||(Tt=vt.onClick)===null||Tt===void 0||Tt.call(vt,Ve),j==null||(gt=j(S,H))===null||gt===void 0||(Nt=gt.onClick)===null||Nt===void 0||Nt.call(gt,Ve),Et&&Ke(!oe)},children:(0,c.jsxs)(yt.Z,{avatar:!0,title:!1,loading:me,active:!0,children:[(0,c.jsxs)("div",{className:"".concat(T,"-header ").concat(u),children:[(0,c.jsxs)("div",{className:"".concat(T,"-header-option ").concat(u),children:[!!be&&(0,c.jsx)("div",{className:"".concat(T,"-checkbox ").concat(u),children:be}),Object.values(Se||{}).length>0&&Ae&&e({prefixCls:I,hashId:u,expandIcon:pe,onExpand:Ke,expanded:oe,record:S})]}),(C=re&&(re==null?void 0:re(S,H,Ge)))!==null&&C!==void 0?C:Ge]}),at&&(ue||ft)&&(0,c.jsxs)("div",{className:"".concat(T,"-content ").concat(u),children:[ue,tt&&Ae&&(0,c.jsx)("div",{className:Z&&Z(S,H,Y),children:ft})]})]})}));return Q?(0,c.jsx)("div",{className:s()(u,(x={},(0,n.Z)(x,"".concat(T,"-card"),Q),(0,n.Z)(x,X,X!==E),x)),style:ne,children:rt}):rt}var f=r,i=["dataSource","columns","rowKey","showActions","showExtra","prefixCls","actionRef","itemTitleRender","renderItem","itemCardProps","itemHeaderRender","expandable","rowSelection","pagination","onRow","onItem","rowClassName"];function m(t){var a=t.dataSource,h=t.columns,b=t.rowKey,C=t.showActions,x=t.showExtra,d=t.prefixCls,B=t.actionRef,P=t.itemTitleRender,$=t.renderItem,u=t.itemCardProps,I=t.itemHeaderRender,E=t.expandable,F=t.rowSelection,K=t.pagination,ue=t.onRow,M=t.onItem,Oe=t.rowClassName,D=(0,Pe.Z)(t,i),ut=(0,g.useContext)(V.L_),mt=ut.hashId,ae=(0,g.useContext)(l.ZP.ConfigContext),Q=ae.getPrefixCls,W=g.useMemo(function(){return typeof b=="function"?b:function(Y,Z){return Y[b]||Z}},[b]),_e=(0,ce.Z)(a,"children",W),be=(0,O.Z)(_e,1),H=be[0],et=(0,Ue.ZP)(a.length,(0,y.Z)({responsive:!0},K),function(){}),me=(0,O.Z)(et,1),G=me[0],Be=g.useMemo(function(){if(K===!1||!G.pageSize||a.length<G.total)return a;var Y=G.current,Z=Y===void 0?1:Y,N=G.pageSize,U=N===void 0?10:N,oe=a.slice((Z-1)*U,Z*U);return oe},[a,G,K]),Se=Q("pro-list",d),Ae=(0,Ie.ZP)(F,{getRowKey:W,getRecordByKey:H,prefixCls:Se,data:a,pageData:Be,expandType:"row",childrenColumnName:"children",locale:{}}),de=(0,O.Z)(Ae,2),$e=de[0],Ze=de[1],ne=E||{},we=ne.expandedRowKeys,X=ne.defaultExpandedRowKeys,S=ne.defaultExpandAllRows,A=S===void 0?!0:S,j=ne.onExpand,re=ne.onExpandedRowsChange,q=ne.rowExpandable,Le=g.useState(function(){return X||(A!==!1?a.map(W):[])}),ze=(0,O.Z)(Le,2),fe=ze[0],tt=ze[1],pe=g.useMemo(function(){return new Set(we||fe||[])},[we,fe]),Et=g.useCallback(function(Y){var Z=W(Y,a.indexOf(Y)),N,U=pe.has(Z);U?(pe.delete(Z),N=(0,R.Z)(pe)):N=[].concat((0,R.Z)(pe),[Z]),tt(N),j&&j(!U,Y),re&&re(N)},[W,pe,a,j,re]),He=$e([])[0];return(0,c.jsx)(ee.ZP,(0,y.Z)((0,y.Z)({},D),{},{className:s()(Q("pro-list-container",d),mt,D.className),dataSource:Be,pagination:K&&G,renderItem:function(Z,N){var U,oe,Ke,T={className:typeof Oe=="function"?Oe(Z,N):Oe};h==null||h.forEach(function(k){var Ge=k.listKey,pt=k.cardActionProps;if(Qe.has(Ge)){var nt=k.dataIndex||Ge||k.key,rt=Array.isArray(nt)?(0,ie.Z)(Z,nt):Z[nt];pt==="actions"&&Ge==="actions"&&(T.cardActionProps=pt);var ot=k.render?k.render(rt,Z,N):rt;ot!=="-"&&(T[k.listKey]=ot)}});var Me;He&&He.render&&(Me=He.render(Z,Z,N)||void 0);var at=((U=B.current)===null||U===void 0?void 0:U.isEditable((0,y.Z)((0,y.Z)({},Z),{},{index:N})))||{},ft=at.isEditable,De=at.recordKey,jt=Ze.has(De||N),We=(0,c.jsx)(f,(0,y.Z)((0,y.Z)({cardProps:D.grid?(0,y.Z)((0,y.Z)((0,y.Z)({},u),D.grid),{},{checked:jt,onChecked:g.isValidElement(Me)?(oe=Me)===null||oe===void 0||(Ke=oe.props)===null||Ke===void 0?void 0:Ke.onChange:void 0}):void 0},T),{},{recordKey:De,isEditable:ft||!1,expandable:E,expand:pe.has(W(Z,N)),onExpand:function(){Et(Z)},index:N,record:Z,item:Z,showActions:C,showExtra:x,itemTitleRender:P,itemHeaderRender:I,rowSupportExpand:!q||q&&q(Z),selected:Ze.has(W(Z,N)),checkbox:Me,onRow:ue,onItem:M}),De);return $?$(Z,N,We):We}}))}var z=m,te=o(25646),xe=o(32788),le=new te.Keyframes("techUiListActive",{"0%":{backgroundColor:"unset"},"30%":{background:"#fefbe6"},"100%":{backgroundColor:"unset"}}),qe=function(a){var h,b,C,x,d,B;return(0,n.Z)({},a.componentCls,(B={backgroundColor:"transparent"},(0,n.Z)(B,"".concat(a.proComponentsCls,"-table-alert"),{marginBlockEnd:"16px"}),(0,n.Z)(B,"&-row",(d={borderBlockEnd:"1px solid ".concat(a.colorSplit)},(0,n.Z)(d,"".concat(a.antCls,"-list-item-meta-title"),{borderBlockEnd:"none",margin:0}),(0,n.Z)(d,"&:last-child",(0,n.Z)({borderBlockEnd:"none"},"".concat(a.antCls,"-list-item"),{borderBlockEnd:"none"})),(0,n.Z)(d,"&:hover",(h={backgroundColor:"rgba(0, 0, 0, 0.02)",transition:"background-color 0.3s"},(0,n.Z)(h,"".concat(a.antCls,"-list-item-action"),{display:"block"}),(0,n.Z)(h,"".concat(a.antCls,"-list-item-extra"),{display:"flex"}),(0,n.Z)(h,"".concat(a.componentCls,"-row-extra"),{display:"block"}),(0,n.Z)(h,"".concat(a.componentCls,"-row-subheader-actions"),{display:"block"}),h)),(0,n.Z)(d,"&-card",(0,n.Z)({marginBlock:8,marginInline:0,paddingBlock:0,paddingInline:8,"&:hover":{backgroundColor:"transparent"}},"".concat(a.antCls,"-list-item-meta-title"),{flexShrink:9,marginBlock:0,marginInline:0,lineHeight:"22px"})),(0,n.Z)(d,"&".concat(a.componentCls,"-row-editable"),(0,n.Z)({},"".concat(a.componentCls,"-list-item"),{"&-meta":{"&-avatar,&-description,&-title":{paddingBlock:6,paddingInline:0}},"&-action":{display:"block"}})),(0,n.Z)(d,"&".concat(a.componentCls,"-row-selected"),{backgroundColor:a.colorPrimaryBgHover,"&:hover":{backgroundColor:a.colorPrimaryBgHover}}),(0,n.Z)(d,"&".concat(a.componentCls,"-row-type-new"),{animationName:le,animationDuration:"3s"}),(0,n.Z)(d,"&".concat(a.componentCls,"-row-type-inline"),(0,n.Z)({},"".concat(a.componentCls,"-row-title"),{fontWeight:"normal"})),(0,n.Z)(d,"&".concat(a.componentCls,"-row-type-top"),{backgroundImage:"url('https://gw.alipayobjects.com/zos/antfincdn/DehQfMbOJb/icon.svg')",backgroundRepeat:"no-repeat",backgroundPosition:"left top",backgroundSize:"12px 12px"}),(0,n.Z)(d,"&-show-action-hover",(0,n.Z)({},"".concat(a.antCls,`-list-item-action,
            `).concat(a.proComponentsCls,`-card-extra,
            `).concat(a.proComponentsCls,"-card-actions"),{display:"flex"})),(0,n.Z)(d,"&-show-extra-hover",(0,n.Z)({},"".concat(a.antCls,"-list-item-extra"),{display:"none"})),(0,n.Z)(d,"&-extra",{display:"none"}),(0,n.Z)(d,"&-subheader",{display:"flex",alignItems:"center",justifyContent:"space-between",height:"44px",paddingInline:24,paddingBlock:0,color:a.colorTextSecondary,lineHeight:"44px",background:"rgba(0, 0, 0, 0.02)","&-actions":{display:"none"},"&-actions *":{marginInlineEnd:8,"&:last-child":{marginInlineEnd:0}}}),(0,n.Z)(d,"&-expand-icon",{marginInlineEnd:8,display:"flex",fontSize:12,cursor:"pointer",height:"24px",marginRight:4,color:a.colorTextSecondary,"> .anticon > svg":{transition:"0.3s"}}),(0,n.Z)(d,"&-expanded",{" > .anticon > svg":{transform:"rotate(90deg)"}}),(0,n.Z)(d,"&-title",{marginInlineEnd:"16px",wordBreak:"break-all",cursor:"pointer","&:hover":{color:a.colorPrimary}}),(0,n.Z)(d,"&-content",{position:"relative",display:"flex",flex:"1",flexDirection:"column",marginBlock:0,marginInline:32}),(0,n.Z)(d,"&-subTitle",{color:"rgba(0, 0, 0, 0.45)"}),(0,n.Z)(d,"&-description",{marginBlockStart:"4px",wordBreak:"break-all"}),(0,n.Z)(d,"&-avatar",{display:"flex"}),(0,n.Z)(d,"&-header",{display:"flex",flex:"1",justifyContent:"flex-start",h4:{margin:0,padding:0}}),(0,n.Z)(d,"&-header-title",{display:"flex",alignItems:"center",justifyContent:"flex-start"}),(0,n.Z)(d,"&-header-option",{display:"flex"}),(0,n.Z)(d,"&-checkbox",{width:"16px",marginInlineEnd:"12px"}),(0,n.Z)(d,"&-no-split",(b={},(0,n.Z)(b,"".concat(a.componentCls,"-row"),{borderBlockEnd:"none"}),(0,n.Z)(b,"".concat(a.antCls,"-list ").concat(a.antCls,"-list-item"),{borderBlockEnd:"none"}),b)),(0,n.Z)(d,"&-bordered",(0,n.Z)({},"".concat(a.componentCls,"-toolbar"),{borderBlockEnd:"1px solid ".concat(a.colorSplit)})),(0,n.Z)(d,"".concat(a.antCls,"-list-vertical"),(C={},(0,n.Z)(C,"".concat(a.componentCls,"-row"),{borderBlockEnd:"12px 18px 12px 24px"}),(0,n.Z)(C,"&-header-title",{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}),(0,n.Z)(C,"&-content",{marginBlock:0,marginInline:0}),(0,n.Z)(C,"&-subTitle",{marginBlockStart:8}),(0,n.Z)(C,"".concat(a.antCls,"-list-item-extra"),(0,n.Z)({display:"flex",alignItems:"center",marginInlineStart:"32px"},"".concat(a.componentCls,"-row-description"),{marginBlockStart:16})),(0,n.Z)(C,"".concat(a.antCls,"-list-bordered ").concat(a.antCls,"-list-item"),{paddingInline:0}),(0,n.Z)(C,"".concat(a.componentCls,"-row-show-extra-hover"),(0,n.Z)({},"".concat(a.antCls,"-list-item-extra "),{display:"none"})),C)),(0,n.Z)(d,"".concat(a.antCls,"-list-pagination"),{marginBlockStart:a.margin,marginBlockEnd:a.margin}),(0,n.Z)(d,"".concat(a.antCls,"-list-list"),{"&-item":{cursor:"pointer",paddingBlock:12,paddingInline:12}}),(0,n.Z)(d,"".concat(a.antCls,"-list-vertical ").concat(a.proComponentsCls,"-list-row"),(0,n.Z)({"&-header":{paddingBlock:0,paddingInline:0,borderBlockEnd:"none"}},"".concat(a.antCls,"-list-item"),(x={width:"100%",paddingBlock:12,paddingInlineStart:24,paddingInlineEnd:18},(0,n.Z)(x,"".concat(a.antCls,"-list-item-meta-avatar"),{display:"flex",alignItems:"center",marginInlineEnd:8}),(0,n.Z)(x,"".concat(a.antCls,"-list-item-action-split"),{display:"none"}),(0,n.Z)(x,"".concat(a.antCls,"-list-item-meta-title"),{marginBlock:0,marginInline:0}),x))),d)),B))};function he(t){return(0,xe.Xj)("ProList",function(a){var h=(0,y.Z)((0,y.Z)({},a),{},{componentCls:".".concat(t)});return[qe(h)]})}var Ee=["metas","split","footer","rowKey","tooltip","className","options","search","expandable","showActions","showExtra","rowSelection","pagination","itemLayout","renderItem","grid","itemCardProps","onRow","onItem","rowClassName","locale","itemHeaderRender","itemTitleRender"];function ye(t){var a=t.metas,h=t.split,b=t.footer,C=t.rowKey,x=t.tooltip,d=t.className,B=t.options,P=B===void 0?!1:B,$=t.search,u=$===void 0?!1:$,I=t.expandable,E=t.showActions,F=t.showExtra,K=t.rowSelection,ue=K===void 0?!1:K,M=t.pagination,Oe=M===void 0?!1:M,D=t.itemLayout,ut=t.renderItem,mt=t.grid,ae=t.itemCardProps,Q=t.onRow,W=t.onItem,_e=t.rowClassName,be=t.locale,H=t.itemHeaderRender,et=t.itemTitleRender,me=(0,Pe.Z)(t,Ee),G=(0,g.useRef)();(0,g.useImperativeHandle)(me.actionRef,function(){return G.current});var Be=(0,g.useContext)(l.ZP.ConfigContext),Se=Be.getPrefixCls,Ae=(0,g.useMemo)(function(){var X=[];return Object.keys(a||{}).forEach(function(S){var A=a[S]||{},j=A.valueType;j||(S==="avatar"&&(j="avatar"),S==="actions"&&(j="option"),S==="description"&&(j="textarea")),X.push((0,y.Z)((0,y.Z)({listKey:S,dataIndex:(A==null?void 0:A.dataIndex)||S},A),{},{valueType:j}))}),X},[a]),de=Se("pro-list",t.prefixCls),$e=he(de),Ze=$e.wrapSSR,ne=$e.hashId,we=s()(de,ne,(0,n.Z)({},"".concat(de,"-no-split"),!h));return Ze((0,c.jsx)(Ye,(0,y.Z)((0,y.Z)({tooltip:x},me),{},{actionRef:G,pagination:Oe,type:"list",rowSelection:ue,search:u,options:P,className:s()(de,d,we),columns:Ae,rowKey:C,tableViewRender:function(S){var A=S.columns,j=S.size,re=S.pagination,q=S.rowSelection,Le=S.dataSource,ze=S.loading;return(0,c.jsx)(z,{grid:mt,itemCardProps:ae,itemTitleRender:et,prefixCls:t.prefixCls,columns:A,renderItem:ut,actionRef:G,dataSource:Le||[],size:j,footer:b,split:h,rowKey:C,expandable:I,rowSelection:ue===!1?void 0:q,showActions:E,showExtra:F,pagination:re,itemLayout:D,loading:ze,itemHeaderRender:H,onRow:Q,onItem:W,rowClassName:_e,locale:be})}})))}function je(t){return _jsx(ProConfigProvider,{needDeps:!0,children:_jsx(ye,_objectSpread({cardProps:!1,search:!1,toolBarRender:!1},t))})}function it(t){return(0,c.jsx)(V._Y,{needDeps:!0,children:(0,c.jsx)(ye,(0,y.Z)({},t))})}var Ot=null,St=o(95926),lt=o(15482),dt=o(21654),Te=o(99759),Ce=o(46673),st=o(44659),Ne;(function(t){t.ONLY_APP_INIT_SSO="only_app_init_sso",t.PORTAL_OR_APP_INIT_SSO="portal_or_app_init_sso"})(Ne||(Ne={}));var $t=o(76091),ke=o.n($t),ct=o(65173),Zt=o(46022);function wt(t,a,h){return w.apply(this,arguments)}function w(){return w=p()(L()().mark(function t(a,h,b){var C,x,d;return L()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,Zt.request)("/api/app/list",{params:ke()(ke()(ke()({},a),(0,ct.YE)(h)),(0,ct.oH)(b))});case 2:return C=P.sent,x=C.result,d=C.success,P.abrupt("return",{data:x!=null&&x.list?x==null?void 0:x.list:[],success:d,total:x!=null&&x.pagination?x==null?void 0:x.pagination.total:0});case 6:case"end":return P.stop()}},t)})),w.apply(this,arguments)}var Pt=St.Z.Paragraph,Rt=function(){var a=(0,g.useRef)(),h=(0,g.useState)(),b=Fe()(h,2),C=b[0],x=b[1],d=(0,c.jsx)("div",{style:{textAlign:"center"},children:(0,c.jsx)(lt.Z.Search,{placeholder:"\u8BF7\u8F93\u5165",enterButton:"\u641C\u7D22",size:"large",style:{maxWidth:522,width:"100%"},onSearch:function($){var u;x({name:$}),(u=a.current)===null||u===void 0||u.reload()}})}),B=function($){var u=window.document.createElement("div");u.innerHTML="<form action='"+$+"' method='POST' name='auto_submit_form' style='display:none'>",document.body.appendChild(u),document.forms.auto_submit_form.setAttribute("target","_blank"),document.forms.auto_submit_form.submit(),document.body.removeChild(u)};return(0,c.jsxs)(Xe._z,{content:d,children:[(0,c.jsx)(dt.Z,{message:"\u8BF7\u70B9\u51FB\u4E0B\u65B9\u7684\u5E94\u7528\u8FDB\u884C\u5355\u70B9\u767B\u5F55\u3002\u82E5\u5E0C\u671B\u4FEE\u6539\u5E94\u7528\u5185\u5BB9\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u3002",showIcon:!0}),(0,c.jsx)("br",{}),(0,c.jsx)(it,{rowKey:"id",ghost:!0,grid:{xs:1,sm:2,md:2,lg:3,xl:4,xxl:5},request:wt,pagination:{},params:C,actionRef:a,renderItem:function($){return $&&$.id&&(0,c.jsx)(Te.Z,{style:{margin:5},hoverable:!0,onClick:p()(L()().mark(function u(){return L()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:if($.initLoginType!==Ne.PORTAL_OR_APP_INIT_SSO){E.next=3;break}return B($.initLoginUrl),E.abrupt("return");case 3:Ce.ZP.warning("".concat($.name,"\u4EC5\u5141\u8BB8\u5E94\u7528\u53D1\u8D77"));case 4:case"end":return E.stop()}},u)})),children:(0,c.jsx)(Te.Z.Meta,{avatar:(0,c.jsx)(st.C,{shape:"square",size:50,src:$.icon},$.id),title:$.name,description:(0,c.jsx)(Pt,{ellipsis:{rows:2,tooltip:!0},children:$.description})})})}})]})},It=Rt},99759:function(xt,se,o){o.d(se,{Z:function(){return bt}});var ve=o(68591),L=o.n(ve),_=o(8779),p=o(79685),J=o(86787),Fe=o(26102),Xe=o(869),n=o(72611),y=function(e,r){var f={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&r.indexOf(i)<0&&(f[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,i=Object.getOwnPropertySymbols(e);m<i.length;m++)r.indexOf(i[m])<0&&Object.prototype.propertyIsEnumerable.call(e,i[m])&&(f[i[m]]=e[i[m]]);return f},Re=e=>{var{prefixCls:r,className:f,hoverable:i=!0}=e,m=y(e,["prefixCls","className","hoverable"]);const{getPrefixCls:z}=p.useContext(J.E_),te=z("card",r),xe=L()(`${te}-grid`,f,{[`${te}-grid-hoverable`]:i});return p.createElement("div",Object.assign({},m,{className:xe}))},Ye=o(83763),l=o(92232),v=o(62371);const s=e=>{const{antCls:r,componentCls:f,cardHeadHeight:i,cardPaddingBase:m,cardHeadTabsMarginBottom:z}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:i,marginBottom:-1,padding:`0 ${m}px`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,background:"transparent",borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},(0,v.dF)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},v.vS),{[`
          > ${f}-typography,
          > ${f}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${r}-tabs-top`]:{clear:"both",marginBottom:z,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`}}})},g=e=>{const{cardPaddingBase:r,colorBorderSecondary:f,cardShadow:i,lineWidth:m}=e;return{width:"33.33%",padding:r,border:0,borderRadius:0,boxShadow:`
      ${m}px 0 0 0 ${f},
      0 ${m}px 0 0 ${f},
      ${m}px ${m}px 0 0 ${f},
      ${m}px 0 0 0 ${f} inset,
      0 ${m}px 0 0 ${f} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:i}}},R=e=>{const{componentCls:r,iconCls:f,cardActionsLiMargin:i,cardActionsIconSize:m,colorBorderSecondary:z}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:e.colorBgContainer,borderTop:`${e.lineWidth}px ${e.lineType} ${z}`,display:"flex",borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px `},(0,v.dF)()),{"& > li":{margin:i,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.cardActionsIconSize*2,fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${r}-btn), > ${f}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:`${e.fontSize*e.lineHeight}px`,transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${f}`]:{fontSize:m,lineHeight:`${m*e.lineHeight}px`}},"&:not(:last-child)":{borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${z}`}}})},O=e=>Object.assign(Object.assign({margin:`-${e.marginXXS}px 0`,display:"flex"},(0,v.dF)()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},v.vS),"&-description":{color:e.colorTextDescription}}),V=e=>{const{componentCls:r,cardPaddingBase:f,colorFillAlter:i}=e;return{[`${r}-head`]:{padding:`0 ${f}px`,background:i,"&-title":{fontSize:e.fontSize}},[`${r}-body`]:{padding:`${e.padding}px ${f}px`}}},ee=e=>{const{componentCls:r}=e;return{overflow:"hidden",[`${r}-body`]:{userSelect:"none"}}},ce=e=>{const{componentCls:r,cardShadow:f,cardHeadPadding:i,colorBorderSecondary:m,boxShadowTertiary:z,cardPaddingBase:te}=e;return{[r]:Object.assign(Object.assign({},(0,v.Wf)(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${r}-bordered)`]:{boxShadow:z},[`${r}-head`]:s(e),[`${r}-extra`]:{marginInlineStart:"auto",color:"",fontWeight:"normal",fontSize:e.fontSize},[`${r}-body`]:Object.assign({padding:te,borderRadius:` 0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},(0,v.dF)()),[`${r}-grid`]:g(e),[`${r}-cover`]:{"> *":{display:"block",width:"100%"},img:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`}},[`${r}-actions`]:R(e),[`${r}-meta`]:O(e)}),[`${r}-bordered`]:{border:`${e.lineWidth}px ${e.lineType} ${m}`,[`${r}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${r}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:f}},[`${r}-contain-grid`]:{[`${r}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${r}-loading) ${r}-body`]:{marginBlockStart:-e.lineWidth,marginInlineStart:-e.lineWidth,padding:0}},[`${r}-contain-tabs`]:{[`> ${r}-head`]:{[`${r}-head-title, ${r}-extra`]:{paddingTop:i}}},[`${r}-type-inner`]:V(e),[`${r}-loading`]:ee(e),[`${r}-rtl`]:{direction:"rtl"}}},Ue=e=>{const{componentCls:r,cardPaddingSM:f,cardHeadHeightSM:i}=e;return{[`${r}-small`]:{[`> ${r}-head`]:{minHeight:i,padding:`0 ${f}px`,fontSize:e.fontSize,[`> ${r}-head-wrapper`]:{[`> ${r}-extra`]:{fontSize:e.fontSize}}},[`> ${r}-body`]:{padding:f}},[`${r}-small${r}-contain-tabs`]:{[`> ${r}-head`]:{[`${r}-head-title, ${r}-extra`]:{minHeight:i,paddingTop:0,display:"flex",alignItems:"center"}}}}};var Ie=(0,Ye.Z)("Card",e=>{const r=(0,l.TS)(e,{cardShadow:e.boxShadowCard,cardHeadHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,cardHeadHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardHeadTabsMarginBottom:-e.padding-e.lineWidth,cardActionsLiMargin:`${e.paddingSM}px 0`,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[ce(r),Ue(r)]}),ie=function(e,r){var f={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&r.indexOf(i)<0&&(f[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,i=Object.getOwnPropertySymbols(e);m<i.length;m++)r.indexOf(i[m])<0&&Object.prototype.propertyIsEnumerable.call(e,i[m])&&(f[i[m]]=e[i[m]]);return f};function Je(e){return e.map((f,i)=>p.createElement("li",{style:{width:`${100/e.length}%`},key:`action-${i}`},p.createElement("span",null,f)))}var ge=p.forwardRef((e,r)=>{const{getPrefixCls:f,direction:i}=p.useContext(J.E_),m=p.useContext(Fe.Z),z=u=>{var I;(I=e.onTabChange)===null||I===void 0||I.call(e,u)},te=()=>{let u;return p.Children.forEach(e.children,I=>{I&&I.type&&I.type===Re&&(u=!0)}),u},{prefixCls:xe,className:le,rootClassName:qe,extra:he,headStyle:Ee={},bodyStyle:ye={},title:je,loading:it,bordered:Ot=!0,size:St,type:lt,cover:dt,actions:Te,tabList:Ce,children:st,activeTabKey:Ne,defaultActiveTabKey:$t,tabBarExtraContent:ke,hoverable:ct,tabProps:Zt={}}=e,wt=ie(e,["prefixCls","className","rootClassName","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),w=f("card",xe),[Pt,Rt]=Ie(w),It=p.createElement(Xe.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},st),t=Ne!==void 0,a=Object.assign(Object.assign({},Zt),{[t?"activeKey":"defaultActiveKey"]:t?Ne:$t,tabBarExtraContent:ke});let h;const b=Ce&&Ce.length?p.createElement(n.Z,Object.assign({size:"large"},a,{className:`${w}-head-tabs`,onChange:z,items:Ce.map(u=>{var I;return{label:u.tab,key:u.key,disabled:(I=u.disabled)!==null&&I!==void 0?I:!1}})})):null;(je||he||b)&&(h=p.createElement("div",{className:`${w}-head`,style:Ee},p.createElement("div",{className:`${w}-head-wrapper`},je&&p.createElement("div",{className:`${w}-head-title`},je),he&&p.createElement("div",{className:`${w}-extra`},he)),b));const C=dt?p.createElement("div",{className:`${w}-cover`},dt):null,x=p.createElement("div",{className:`${w}-body`,style:ye},it?It:st),d=Te&&Te.length?p.createElement("ul",{className:`${w}-actions`},Je(Te)):null,B=(0,_.Z)(wt,["onTabChange"]),P=St||m,$=L()(w,{[`${w}-loading`]:it,[`${w}-bordered`]:Ot,[`${w}-hoverable`]:ct,[`${w}-contain-grid`]:te(),[`${w}-contain-tabs`]:Ce&&Ce.length,[`${w}-${P}`]:P,[`${w}-type-${lt}`]:!!lt,[`${w}-rtl`]:i==="rtl"},le,qe,Rt);return Pt(p.createElement("div",Object.assign({ref:r},B,{className:$}),h,C,x,d))}),ht=function(e,r){var f={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&r.indexOf(i)<0&&(f[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,i=Object.getOwnPropertySymbols(e);m<i.length;m++)r.indexOf(i[m])<0&&Object.prototype.propertyIsEnumerable.call(e,i[m])&&(f[i[m]]=e[i[m]]);return f},Ct=e=>{const{prefixCls:r,className:f,avatar:i,title:m,description:z}=e,te=ht(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:xe}=p.useContext(J.E_),le=xe("card",r),qe=L()(`${le}-meta`,f),he=i?p.createElement("div",{className:`${le}-meta-avatar`},i):null,Ee=m?p.createElement("div",{className:`${le}-meta-title`},m):null,ye=z?p.createElement("div",{className:`${le}-meta-description`},z):null,je=Ee||ye?p.createElement("div",{className:`${le}-meta-detail`},Ee,ye):null;return p.createElement("div",Object.assign({},te,{className:qe}),he,je)};const c=ge;c.Grid=Re,c.Meta=Ct;var bt=c},58817:function(xt,se,o){var ve;function L(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?L=function(s){return typeof s}:L=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},L(l)}ve={value:!0},se.Z=Ye;var _=J(o(79685));function p(){if(typeof WeakMap!="function")return null;var l=new WeakMap;return p=function(){return l},l}function J(l){if(l&&l.__esModule)return l;if(l===null||L(l)!=="object"&&typeof l!="function")return{default:l};var v=p();if(v&&v.has(l))return v.get(l);var s={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var R in l)if(Object.prototype.hasOwnProperty.call(l,R)){var O=g?Object.getOwnPropertyDescriptor(l,R):null;O&&(O.get||O.set)?Object.defineProperty(s,R,O):s[R]=l[R]}return s.default=l,v&&v.set(l,s),s}function Fe(l,v){return Re(l)||Pe(l,v)||n(l,v)||Xe()}function Xe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(l,v){if(l){if(typeof l=="string")return y(l,v);var s=Object.prototype.toString.call(l).slice(8,-1);if(s==="Object"&&l.constructor&&(s=l.constructor.name),s==="Map"||s==="Set")return Array.from(l);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return y(l,v)}}function y(l,v){(v==null||v>l.length)&&(v=l.length);for(var s=0,g=new Array(v);s<v;s++)g[s]=l[s];return g}function Pe(l,v){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(l)))){var s=[],g=!0,R=!1,O=void 0;try{for(var V=l[Symbol.iterator](),ee;!(g=(ee=V.next()).done)&&(s.push(ee.value),!(v&&s.length===v));g=!0);}catch(ce){R=!0,O=ce}finally{try{!g&&V.return!=null&&V.return()}finally{if(R)throw O}}return s}}function Re(l){if(Array.isArray(l))return l}function Ye(l,v){var s=v||{},g=s.defaultValue,R=s.value,O=s.onChange,V=s.postState,ee=_.useState(function(){return R!==void 0?R:g!==void 0?typeof g=="function"?g():g:typeof l=="function"?l():l}),ce=Fe(ee,2),Ue=ce[0],Ie=ce[1],ie=R!==void 0?R:Ue;V&&(ie=V(ie));function Je(ge){Ie(ge),ie!==ge&&O&&O(ge,ie)}var Qe=_.useRef(!0);return _.useEffect(function(){if(Qe.current){Qe.current=!1;return}R===void 0&&Ie(R)},[R]),[ie,Je]}},51642:function(xt,se){var o;o={value:!0},se.Z=ve;function ve(L,_){for(var p=L,J=0;J<_.length;J+=1){if(p==null)return;p=p[_[J]]}return p}}}]);
