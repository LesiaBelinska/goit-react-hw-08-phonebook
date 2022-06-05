"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[476],{5476:function(e,n,t){t.r(n),t.d(n,{default:function(){return J}});var r=t(5861),a=t(885),s=t(7757),c=t.n(s),o=t(6140),i=t(4903),u=t(5705),l=t(1089),d=t(1889),m=t(8551),f=t(3715),h=t(2791),x=t(184),v=l.Ry().shape({name:l.Z_().required("enter a name, this is a required field"),number:l.Z_().min(8).max(13).required("enter a phone number, this is a required field")}),b=function(e){var n=e.initialValues,t=void 0===n?{name:"",number:""}:n,a=e.onSubmit,s=e.buttonText,l=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.resetForm,!_.find((function(e){return e.name.toLocaleLowerCase()===n.name.toLocaleLowerCase()}))){e.next=4;break}return o.ZP.error("".concat(n.name," is already in contacts")),e.abrupt("return");case 4:return e.next=6,a(n);case 6:r();case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),b=(0,u.TA)({initialValues:t,validationSchema:v,onSubmit:l}),p=(0,h.useId)(),_=(0,i.wY)().data;return(0,x.jsx)("div",{children:(0,x.jsxs)("form",{onSubmit:b.handleSubmit,autoComplete:"off",children:[(0,x.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,x.jsx)(d.ZP,{item:!0,xs:12,children:(0,x.jsx)(f.Z,{fullWidth:!0,id:"".concat(p,"-name"),type:"text",name:"name",label:"Name",value:b.values.name,onChange:b.handleChange,error:b.touched.name&&Boolean(b.errors.name),helperText:b.touched.name&&b.errors.name})}),(0,x.jsx)(d.ZP,{item:!0,xs:12,children:(0,x.jsx)(f.Z,{fullWidth:!0,id:"".concat(p,"-number"),type:"tel",name:"number",label:"Number",value:b.values.number,onChange:b.handleChange,error:b.touched.number&&Boolean(b.errors.number),helperText:b.touched.number&&b.errors.number})})]}),(0,x.jsx)(m.Z,{color:"primary",variant:"contained",fullWidth:!0,sx:{mt:3,mb:2},type:"submit",children:s})]})})},p=function(){var e=(0,i.Tn)(),n=(0,a.Z)(e,1)[0],t=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(t);case 3:o.ZP.success('contact "'.concat(t.name,'" was saved')),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),o.ZP.error("error, contact was not saved"),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(b,{onSubmit:t,buttonText:"Add contact"})})},_=t(5048),j=t(4554),w=t(1286),C=t(503),Z=t(1413),y=t(4164),g=t(6856),k="Modal_Overlay__yoxbg",L="Modal_Modal__I1UYJ",N="Modal_btnClose__oHdcJ",S="Modal_icon__2UpwH",P=document.querySelector("#modal-root"),T=function(e){var n=e.onClose,t=e.id,s=(0,i.wY)().data,u=(0,i.wv)(),l=(0,a.Z)(u,2),d=l[0],m=l[1],f=s.find((function(e){return e.id===t}));(0,h.useEffect)((function(){return window.addEventListener("keydown",v),function(){window.removeEventListener("keydown",v)}}));var v=function(e){"Escape"===e.code&&n()},p=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d((0,Z.Z)({id:f.id},t));case 3:n(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}();return(0,h.useEffect)((function(){m.isSuccess&&o.ZP.success("changes was saved")}),[m.isSuccess]),(0,y.createPortal)((0,x.jsx)("div",{className:k,onClick:function(e){e.currentTarget===e.target&&n()},children:(0,x.jsxs)("div",{className:L,children:[s&&(0,x.jsx)("button",{onClick:n,type:"button",className:N,children:(0,x.jsx)(g.FU5,{className:S})}),s&&(0,x.jsx)(b,{initialValues:{name:f.name,number:f.number},onSubmit:p,buttonText:"Save"})]})}),P)},E="ContactListItem_item__UAAix",F="ContactListItem_button__SG6H2",M=function(e){var n=e.id,t=e.name,r=e.number,s=(0,i.Nt)(),c=(0,a.Z)(s,2),u=c[0],l=c[1],d=(0,h.useState)(!1),f=(0,a.Z)(d,2),v=f[0],b=f[1],p=function(){b(!v)};return(0,h.useEffect)((function(){l.isSuccess&&o.ZP.success("contact was deleted")}),[l.isSuccess]),(0,x.jsxs)("li",{className:E,children:[t,": ",r,(0,x.jsxs)(j.Z,{sx:{"& > :not(style)":{m:1}},children:[(0,x.jsx)(m.Z,{type:"button",color:"primary","aria-label":"edit",onClick:function(){return u(n)},disabled:l.isLoading,variant:"contained",size:"small",className:F,children:(0,x.jsx)(C.Z,{})}),(0,x.jsx)(m.Z,{type:"button",color:"primary","aria-label":"delete",className:F,onClick:p,variant:"contained",size:"small",children:(0,x.jsx)(w.Z,{})})]}),v&&(0,x.jsx)(T,{onClose:p,id:n})]})},q="ContactList_list__csErn",I="ContactList_loading__QJfkF",A=function(){var e=(0,i.wY)(),n=e.data,t=e.isFetching,r=(0,_.v9)((function(e){return e.filter})),a=null===n||void 0===n?void 0:n.filter((function(e){return e.name.toLocaleLowerCase().includes(r.toLocaleLowerCase())}));return(0,x.jsxs)(x.Fragment,{children:[n?t:(0,x.jsx)("p",{className:I,children:"Loading..."}),(0,x.jsx)("ul",{className:q,children:n&&a.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,x.jsx)(M,{id:n,name:t,number:r},n)}))})]})},B=t(4808),U=function(){var e=(0,h.useId)(),n=(0,_.v9)((function(e){return e.filter})),t=(0,_.I0)();return(0,x.jsx)(j.Z,{component:"form",sx:{"& > :not(style)":{m:1,width:"100%"}},noValidate:!0,autoComplete:"off",children:(0,x.jsx)(f.Z,{id:"".concat(e,"-filter"),label:"Find contacts by name",variant:"outlined",type:"search",value:n,onChange:function(e){return t((0,B.M)(e.currentTarget.value))}})})},V="ContactsPage_container__BnqXB",Y="ContactsPage_title__P3MkR",H="ContactsPage_subtitle__jdL5x";function J(){return(0,x.jsxs)("div",{className:V,children:[(0,x.jsx)("h1",{className:Y,children:"Create contact"}),(0,x.jsx)(p,{}),(0,x.jsx)("h2",{className:H,children:"Contacts"}),(0,x.jsx)(U,{}),(0,x.jsx)(A,{})]})}}}]);
//# sourceMappingURL=476.305e32de.chunk.js.map