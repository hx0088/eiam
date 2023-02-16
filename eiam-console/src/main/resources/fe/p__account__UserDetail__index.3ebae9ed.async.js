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
"use strict";(self.webpackChunktopiam_console=self.webpackChunktopiam_console||[]).push([[845],{23113:function(ue,$,a){a.d($,{Gh:function(){return Y},SC:function(){return N},Zw:function(){return S},gD:function(){return G},n6:function(){return g},o:function(){return X},pR:function(){return u},rD:function(){return Z}});var Z;(function(n){n.EX900005="EX900005",n.EX000102="EX000102",n.EX000202="EX000202",n.SUCCESS="200"})(Z||(Z={}));var S;(function(n){n.ALIYUN="aliyun",n.QI_NIU="qiniu",n.TENCENT="tencent",n.NET_EASE="netease",n.MAXMIND="maxmind"})(S||(S={}));var g;(function(n){n.ALIYUN="aliyun",n.TENCENT="tencent",n.GEE_TEST="geetest",n.HCAPTCHA="hcaptcha",n.RECAPTCHA="recaptcha"})(g||(g={}));var u;(function(n){n.STANDARD="standard",n.CUSTOM_MADE="custom_made"})(u||(u={}));var G;(function(n){n.SAML2="saml2",n.OIDC="oidc",n.CAS="cas",n.JWT="jwt",n.FORM="form",n.OAUTH2="oauth2"})(G||(G={}));var Y;(function(n){n.ALLOW="ALLOW",n.DENY="DENY"})(Y||(Y={}));var N;(function(n){n.ROLE="ROLE",n.RESOURCE="RESOURCE",n.USER="USER",n.ORGANIZATION="ORGANIZATION",n.USER_GROUP="USER_GROUP"})(N||(N={}));var X;(function(n){n.PHONE="PHONE",n.USERNAME="USERNAME",n.EMAIL="EMAIL"})(X||(X={}))},85050:function(ue,$,a){a.r($),a.d($,{default:function(){return ae}});var Z=a(7863),S=a.n(Z),g=a(75109),u=a(55222),G=a(78035),Y=a(46673),N=a(79685),X=a(27793),n=a(20645),de=a(55807),re=a(22715),ne=a(79494),j=a(9715),t=a(63342),Ae=function(f){var x=f.id;(0,N.useEffect)(function(){},[]);var H=[{title:"\u5E94\u7528\u540D\u79F0",ellipsis:!0,search:!1,dataIndex:"appName",fixed:"left"},{title:"\u5BA2\u6237\u7AEFIP",dataIndex:"clientIp",ellipsis:!0,valueType:"text",search:!1,render:function(M,b){return b.clientIp?(0,t.jsx)(n.Z,{status:"success",text:b.clientIp}):(0,t.jsx)(n.Z,{status:"error",text:"\u672A\u77E5"})}},{title:"\u6D4F\u89C8\u5668",dataIndex:"browser",search:!1},{title:"\u5730\u7406\u4F4D\u7F6E",dataIndex:"location",search:!1},{title:"\u767B\u5F55\u65F6\u95F4",dataIndex:"eventTime",sorter:!0,valueType:"dateTime",search:!1},{title:"\u767B\u5F55\u7ED3\u679C",dataIndex:"eventStatus",search:!1,align:"center",render:function(M,b){return(0,t.jsxs)(de.Z,{children:[b.eventStatus===ne.N.success&&(0,t.jsx)(re.Z,{color:"#87d068",children:"\u6210\u529F"}),b.eventStatus===ne.N.fail&&(0,t.jsx)(re.Z,{color:"#f50",children:"\u5931\u8D25"})]})}}];return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(X.Z,{columns:H,search:!1,request:j.lu,params:{id:x},pagination:{pageSize:10}})})},se=a(99759),ge=a(21654),Qe=function(f){return(0,t.jsx)(se.Z,{children:(0,t.jsx)(ge.Z,{style:{backgroundColor:"#f1f1f2",border:"1px solid #f1f1f2"},message:"\u6682\u672A\u5B9E\u73B0"})})},fe=a(84019),Q=a.n(fe),ve=a(32061),K=a.n(ve),le=a(98346),e=a(869),i=a(44659),l=a(37003),s=a(61327),r=a(81198),y=a(15457),E=a(80591),W=a(97207),P=a(68591),d=a.n(P),p=a(23113),q=a(11880),O=a(21722),ee=a(41653),me=a(39620),D=a.n(me),oe=a(69567),te=a(53010),Ee=oe.ZP.ConfigContext;function z(f){var x=(0,N.useContext)(Ee),H=x.getPrefixCls,A=".".concat(H()),M=(0,te.l)(function(b){var k,h,B,J=b.token;return B={},D()(B,".".concat(f,"-descriptions"),D()({},"".concat(A,"-descriptions-small ").concat(A,"-descriptions-row > th, ").concat(A,"-descriptions-small ").concat(A,"-descriptions-row > td"),{paddingBottom:"16px"})),D()(B,".".concat(f,"-content"),(h={width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},D()(h,"&-status",{width:"2%",height:"80px",borderRadius:"8px 0 0 8px",background:J.colorSuccess,marginRight:"10px"}),D()(h,"&-title",(k={width:"63%",display:"flex",flexDirection:"row",alignItems:"center"},D()(k,"&-avatar",{display:"inline-flex",alignItems:"center"}),D()(k,"&-text",{display:"inline-block",paddingLeft:"10px",textAlign:"center",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",fontWeight:"600"}),k)),D()(h,"&-operate",{width:"35%",textAlign:"center",marginRight:"10px"}),h)),B});return{className:M}}var L="user-detail-info",he=function(f){var x=f.userId,H=(0,N.useRef)(),A=z(L),M=A.className;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:M,children:(0,t.jsx)(O.Rs,{pagination:{defaultPageSize:10,showSizeChanger:!1},grid:{xs:1,sm:2,md:2,lg:3,xl:4,xxl:5},itemCardProps:{bodyStyle:{padding:0}},headerTitle:"\u5DF2\u6388\u6743\u5E94\u7528",request:q.Je,params:{subjectId:x,subjectType:p.SC.USER},rowKey:"id",metas:{content:{search:!1,dataIndex:"remark",render:function(k,h){return(0,t.jsxs)("div",{className:d()("".concat(L,"-content")),children:[(0,t.jsx)("div",{className:d()("".concat(L,"-content-status"))}),(0,t.jsxs)("div",{className:d()("".concat(L,"-content-title")),children:[(0,t.jsx)("div",{className:d()("".concat(L,"-content-title-avatar")),children:(0,t.jsx)(i.C,{src:"https://api.multiavatar.com/c41dd.svg"})}),(0,t.jsx)(ee.Z,{title:h.appName,children:(0,t.jsx)("div",{className:d()("".concat(L,"-content-title-text")),children:h.appName})})]}),(0,t.jsx)("div",{className:d()("".concat(L,"-content-operate")),children:(0,t.jsx)(le.Z,{title:"\u60A8\u786E\u5B9A\u8981\u53D6\u6D88\u5E94\u7528\u6388\u6743\uFF1F",placement:"bottomRight",icon:(0,t.jsx)(E.Z,{style:{color:"red"}}),onConfirm:K()(Q()().mark(function B(){var J,V,w;return Q()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,q.AY)(h.id);case 2:if(J=v.sent,V=J.success,!V){v.next=8;break}return Y.ZP.success("\u64CD\u4F5C\u6210\u529F"),(w=H.current)===null||w===void 0||w.reload(),v.abrupt("return");case 8:case"end":return v.stop()}},B)})),okText:"\u662F",cancelText:"\u5426",children:(0,t.jsx)("a",{target:"_blank",style:{color:"red"},children:"\u53D6\u6D88\u6388\u6743"},"remove")},"delete")})]},h.id)}}}})})})},pe=he,ie="user-detail-info",xe=function(f){var x=f.userId,H=(0,N.useState)(),A=S()(H,2),M=A[0],b=A[1],k=(0,N.useState)(),h=S()(k,2),B=h[0],J=h[1],V=(0,N.useRef)();(0,y.Z)(K()(Q()().mark(function v(){var F,c,C;return Q()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return b(!0),m.next=3,(0,j.PR)(x);case 3:F=m.sent,c=F.result,C=F.success,C&&J(c),b(!1);case 8:case"end":return m.stop()}},v)})),[]);var w=[{title:"\u663E\u793A\u540D",dataIndex:"openId",ellipsis:!0,fixed:"left"},{title:"\u8EAB\u4EFD\u63D0\u4F9B\u65B9",dataIndex:"idpName",copyable:!1,search:!1},{title:"\u7ED1\u5B9A\u65F6\u95F4",dataIndex:"bindTime",valueType:"dateTime",copyable:!1,search:!1},{title:"\u64CD\u4F5C",align:"center",valueType:"option",fixed:"right",width:100,render:function(F,c){return[(0,t.jsx)(le.Z,{title:"\u60A8\u786E\u5B9A\u8981\u89E3\u7ED1\u8BE5\u8D26\u6237\u5417\uFF1F",placement:"bottomRight",icon:(0,t.jsx)(E.Z,{style:{color:"red"}}),onConfirm:K()(Q()().mark(function C(){var T;return Q()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,(0,j.re)(c.id);case 2:(T=V.current)===null||T===void 0||T.reload();case 3:case"end":return U.stop()}},C)})),okText:"\u662F",cancelText:"\u5426",children:(0,t.jsx)("a",{target:"_blank",style:{color:"red"},children:"\u89E3\u7ED1"},"remove")},"delete")]}}],ye=function(){var v=K()(Q()().mark(function F(c,C){var T,m;return Q()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,(0,j.Nq)((0,W.omit)(C,"avatar","username","externalId","authTotal","lastAuthIp","lastAuthTime","createTime","updateTime"));case 2:if(T=I.sent,m=T.success,!m){I.next=9;break}return I.next=7,(0,j.PR)(x).then(function(Ie){var o=Ie.result;J(o)});case 7:return Y.ZP.success("\u4FEE\u6539\u6210\u529F"),I.abrupt("return",Promise.resolve(!0));case 9:return I.abrupt("return",Promise.resolve(!1));case 10:case"end":return I.stop()}},F)}));return function(c,C){return v.apply(this,arguments)}}();return(0,t.jsxs)("div",{children:[(0,t.jsx)(s.Z,{style:{height:"100%"},title:"\u8D26\u6237\u4FE1\u606F",children:(0,t.jsx)(e.Z,{loading:M,active:!0,paragraph:{rows:8},children:(0,t.jsx)("div",{className:d()("".concat(ie,"-descriptions")),children:(0,t.jsxs)(r.vY,{size:"small",column:2,dataSource:B,editable:{onSave:ye},children:[(0,t.jsx)(r.vY.Item,{dataIndex:"avatar",label:"\u5934\u50CF",editable:!1,render:function(F,c){var C;return c!=null&&c.avatar?(0,t.jsx)(i.C,{size:"small",src:(0,t.jsx)(l.Z,{src:c.avatar,fallback:"data:image/png;base64,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"})}):(0,t.jsx)(i.C,{style:{color:"#f56a00",backgroundColor:"#fde3cf",verticalAlign:"small"},size:"small",children:c==null||(C=c.fullName)===null||C===void 0?void 0:C.substring(0,1).toLocaleUpperCase()})}}),(0,t.jsx)(r.vY.Item,{dataIndex:"username",label:"\u7528\u6237\u540D",editable:!1,copyable:!0}),(0,t.jsx)(r.vY.Item,{dataIndex:"nickName",label:"\u6635\u79F0",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u6635\u79F0\u4E3A\u5FC5\u586B\u9879"}]}}),(0,t.jsx)(r.vY.Item,{dataIndex:"fullName",label:"\u59D3\u540D",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u59D3\u540D\u4E3A\u5FC5\u586B\u9879"}]}}),(0,t.jsx)(r.vY.Item,{dataIndex:"status",label:"\u7528\u6237\u72B6\u6001",valueEnum:{enabled:{text:"\u542F\u7528",status:"Success"},disabled:{text:"\u7981\u7528",status:"Error"},locked:{text:"\u9501\u5B9A",status:"Warning"},expired_locked:{text:"\u8FC7\u671F\u9501\u5B9A",status:"Warning",disabled:!0},password_expired_locked:{text:"\u5BC6\u7801\u8FC7\u671F\u9501\u5B9A",status:"Warning",disabled:!0}},formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u72B6\u6001\u4E3A\u5FC5\u9009\u9879"}]}}),(0,t.jsx)(r.vY.Item,{dataIndex:"dataOrigin",label:"\u6570\u636E\u6765\u6E90",valueType:"select",editable:!1,valueEnum:{input:{text:"\u81EA\u5EFA"},dingtalk:{text:"\u9489\u9489\u5BFC\u5165"},wechat:{text:"\u4F01\u4E1A\u5FAE\u4FE1\u5BFC\u5165"},feishu:{text:"\u98DE\u4E66\u5BFC\u5165"},ldap:{text:"LDAP\u5BFC\u5165"}}}),(0,t.jsx)(r.vY.Item,{dataIndex:"id",label:"\u8D26\u6237 ID	",editable:!1,copyable:!0}),(0,t.jsx)(r.vY.Item,{dataIndex:"externalId",label:"\u5916\u90E8 ID	",editable:!1,copyable:!0}),(0,t.jsx)(r.vY.Item,{dataIndex:"phone",label:"\u624B\u673A\u53F7",copyable:!0,formItemProps:{rules:[{pattern:new RegExp(/^1[3-9]\d{9}$/),message:"\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"},{validator:function(){var v=K()(Q()().mark(function c(C,T){var m,U,I;return Q()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(T){o.next=2;break}return o.abrupt("return",Promise.resolve());case 2:return o.next=4,(0,j.mz)(p.o.PHONE,T,x);case 4:if(m=o.sent,U=m.success,I=m.result,U){o.next=9;break}return o.abrupt("return",Promise.reject());case 9:if(I){o.next=11;break}return o.abrupt("return",Promise.reject(new Error("\u624B\u673A\u53F7\u5DF2\u5B58\u5728")));case 11:case"end":return o.stop()}},c)}));function F(c,C){return v.apply(this,arguments)}return F}(),validateTrigger:["onBlur"]}]}}),(0,t.jsx)(r.vY.Item,{dataIndex:"email",label:"\u90AE\u7BB1",copyable:!0,formItemProps:{rules:[{type:"email",message:"\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E"},{validator:function(){var v=K()(Q()().mark(function c(C,T){var m,U,I;return Q()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(T){o.next=2;break}return o.abrupt("return",Promise.resolve());case 2:return o.next=4,(0,j.mz)(p.o.EMAIL,T,x);case 4:if(m=o.sent,U=m.success,I=m.result,!(U&&!I)){o.next=9;break}return o.abrupt("return",Promise.reject(new Error("\u90AE\u7BB1\u5DF2\u5B58\u5728")));case 9:case"end":return o.stop()}},c)}));function F(c,C){return v.apply(this,arguments)}return F}(),validateTrigger:["onBlur"]}]}}),(0,t.jsx)(r.vY.Item,{dataIndex:"authTotal",label:"\u8BA4\u8BC1\u6B21\u6570",editable:!1}),(0,t.jsx)(r.vY.Item,{dataIndex:"lastAuthIp",label:"\u6700\u540E\u767B\u5F55 IP	",editable:!1}),(0,t.jsx)(r.vY.Item,{dataIndex:"lastAuthTime",label:"\u6700\u540E\u767B\u5F55\u65F6\u95F4",valueType:"dateTime",editable:!1}),(0,t.jsx)(r.vY.Item,{dataIndex:"expireDate",label:"\u8FC7\u671F\u65F6\u95F4",valueType:"date",formItemProps:{rules:[{required:!0,message:"\u8FC7\u671F\u65F6\u95F4\u4E3A\u5FC5\u586B\u9879"}]}}),(0,t.jsx)(r.vY.Item,{label:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",editable:!1,valueType:"dateTime"}),(0,t.jsx)(r.vY.Item,{label:"\u4FEE\u6539\u65F6\u95F4",editable:!1,dataIndex:"updateTime",valueType:"dateTime"}),(0,t.jsx)(r.vY.Item,{label:"\u5907\u6CE8",dataIndex:"remark",valueType:"textarea",fieldProps:{placeholder:"\u5907\u6CE8",rows:2,autoComplete:"off",showCount:!0,maxLength:20}})]})})})}),(0,t.jsx)("br",{}),(0,t.jsx)(s.Z,{style:{height:"100%"},title:"\u5DF2\u7ED1\u5B9A\u8D26\u6237",bodyStyle:{padding:20},children:(0,t.jsx)(X.Z,{rowKey:"id",cardProps:{bodyStyle:{margin:0,padding:0}},search:!1,actionRef:V,params:{userId:x},pagination:!1,columns:w,request:j.Zy,toolbar:{settings:[]}})}),(0,t.jsx)("br",{}),(0,t.jsx)(pe,{userId:x})]})},R;(function(f){f.user_info="user-info",f.permission_info="permission-info",f.login_audit="login-audit"})(R||(R={}));var _=a(30708),Ce=a(46022),ce=function(){var f=(0,Ce.useLocation)(),x=_.Z.parse(f.search),H=x,A=H.id,M=x,b=M.tab,k=(0,N.useState)(),h=S()(k,2),B=h[0],J=h[1];return(0,G.Z)(function(){if(!A){Y.ZP.warning("\u672A\u9009\u62E9\u7528\u6237").then(),g.m.push("/account/user");return}if(!b){J(R.user_info),g.m.replace({pathname:f.pathname,search:_.Z.stringify({tab:R.user_info,id:A})});return}J(b)}),(0,t.jsxs)(u._z,{onBack:function(){g.m.push("/account/user")},tabList:[{key:R.user_info,tab:"\u7528\u6237\u4FE1\u606F"},{key:R.permission_info,tab:"\u6743\u9650\u7BA1\u7406"},{key:R.login_audit,tab:"\u767B\u5F55\u65E5\u5FD7"}],tabActiveKey:B,onTabChange:function(w){J(w),g.m.replace({pathname:f.pathname,search:_.Z.stringify({tab:w,id:A})})},children:[R.user_info===B&&(0,t.jsx)(xe,{userId:A}),R.permission_info===B&&(0,t.jsx)(Qe,{id:A}),R.login_audit===B&&(0,t.jsx)(Ae,{id:A})]})},ae=ce},79494:function(ue,$,a){a.d($,{F:function(){return Z},N:function(){return S}});var Z;(function(g){g.admin="admin",g.user="user"})(Z||(Z={}));var S;(function(g){g.success="success",g.fail="fail"})(S||(S={}))},22715:function(ue,$,a){a.d($,{Z:function(){return le}});var Z=a(35632),S=a(68591),g=a.n(S),u=a(79685),G=a(86787),Y=a(88521),N=a(98154),X=a(83763),n=a(92232);function de(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}var re=a(17261),ne=a(62371);const j=(e,i,l)=>{const s=de(l);return{[`${e.componentCls}-${i}`]:{color:e[`color${l}`],background:e[`color${s}Bg`],borderColor:e[`color${s}Border`]}}},t=e=>(0,re.j)(e,(i,l)=>{let{textColor:s,lightBorderColor:r,lightColor:y,darkColor:E}=l;return{[`${e.componentCls}-${i}`]:{color:s,background:y,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:E,borderColor:E}}}}),Ae=e=>{const{paddingXXS:i,lineWidth:l,tagPaddingHorizontal:s,componentCls:r}=e,y=s-l,E=i-l;return{[r]:Object.assign(Object.assign({},(0,ne.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:y,fontSize:e.tagFontSize,lineHeight:`${e.tagLineHeight}px`,whiteSpace:"nowrap",background:e.tagDefaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.tagDefaultColor},[`${r}-close-icon`]:{marginInlineStart:E,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:y}})}};var se=(0,X.Z)("Tag",e=>{const{fontSize:i,lineHeight:l,lineWidth:s,fontSizeIcon:r}=e,y=Math.round(i*l),E=e.fontSizeSM,W=y-s*2,P=e.colorFillAlter,d=e.colorText,p=(0,n.TS)(e,{tagFontSize:E,tagLineHeight:W,tagDefaultBg:P,tagDefaultColor:d,tagIconSize:r-2*s,tagPaddingHorizontal:8});return[Ae(p),t(p),j(p,"success","Success"),j(p,"processing","Info"),j(p,"error","Error"),j(p,"warning","Warning")]}),ge=function(e,i){var l={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&i.indexOf(s)<0&&(l[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)i.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(l[s[r]]=e[s[r]]);return l},fe=e=>{var{prefixCls:i,className:l,checked:s,onChange:r,onClick:y}=e,E=ge(e,["prefixCls","className","checked","onChange","onClick"]);const{getPrefixCls:W}=u.useContext(G.E_),P=ee=>{r==null||r(!s),y==null||y(ee)},d=W("tag",i),[p,q]=se(d),O=g()(d,{[`${d}-checkable`]:!0,[`${d}-checkable-checked`]:s},l,q);return p(u.createElement("span",Object.assign({},E,{className:O,onClick:P})))},Q=function(e,i){var l={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&i.indexOf(s)<0&&(l[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)i.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(l[s[r]]=e[s[r]]);return l};const ve=(e,i)=>{var{prefixCls:l,className:s,rootClassName:r,style:y,children:E,icon:W,color:P,onClose:d,closeIcon:p,closable:q=!1}=e,O=Q(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable"]);const{getPrefixCls:ee,direction:me}=u.useContext(G.E_),[D,oe]=u.useState(!0);u.useEffect(()=>{"visible"in O&&oe(O.visible)},[O.visible]);const te=(0,Y.o2)(P)||(0,Y.yT)(P),Ee=Object.assign({backgroundColor:P&&!te?P:void 0},y),z=ee("tag",l),[L,he]=se(z),pe=g()(z,{[`${z}-${P}`]:te,[`${z}-has-color`]:P&&!te,[`${z}-hidden`]:!D,[`${z}-rtl`]:me==="rtl"},s,r,he),ie=ae=>{ae.stopPropagation(),d==null||d(ae),!ae.defaultPrevented&&oe(!1)},xe=()=>q?p?u.createElement("span",{className:`${z}-close-icon`,onClick:ie},p):u.createElement(Z.Z,{className:`${z}-close-icon`,onClick:ie}):null,R=typeof O.onClick=="function"||E&&E.type==="a",_=W||null,Ce=_?u.createElement(u.Fragment,null,_,u.createElement("span",null,E)):E,ce=u.createElement("span",Object.assign({},O,{ref:i,className:pe,style:Ee}),Ce,xe());return L(R?u.createElement(N.Z,null,ce):ce)},K=u.forwardRef(ve);K.CheckableTag=fe;var le=K}}]);
