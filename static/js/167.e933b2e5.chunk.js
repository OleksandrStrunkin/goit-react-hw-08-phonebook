"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[167],{167:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(439),r=n(791),s="ContactForm_form__dhl+T",c="ContactForm_button__eSwX9",i="ContactForm_name__ZqciK",o="ContactForm_number__RyoZN",u=n(702),l=n(434),m=function(e){var t=e.contacts,n=void 0===t?[]:t,a=e.filter.toLowerCase();return n.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},d=n(184);function f(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],f=t[1],h=(0,r.useState)(""),_=(0,a.Z)(h,2),p=_[0],v=_[1],x=(0,l.v9)(m),C=(0,l.I0)();return(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?alert("User with name ".concat(n," is already in contacts")):(C((0,u.xe)({name:n,number:p})),f(""),v(""))},className:s,children:[(0,d.jsxs)("label",{className:i,children:["\u0406\u043c'\u044f",(0,d.jsx)("input",{type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){f(e.currentTarget.value)}})]}),(0,d.jsxs)("label",{className:o,children:["\u041d\u043e\u043c\u0435\u0440",(0,d.jsx)("input",{type:"tel",name:"number",value:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(e){v(e.currentTarget.value)}})]}),(0,d.jsx)("button",{type:"submit",className:c,children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"})]})}var h="ContactList_list__csErn",_="ContactList_listItem__SptUx",p=function(){var e=(0,l.I0)(),t=(0,l.v9)(m);(0,r.useEffect)((function(){e((0,u.yF)())}),[e]);return(0,d.jsx)("ul",{className:h,children:t.map((function(t){return(0,d.jsxs)("li",{className:_,children:[t.name,(0,d.jsx)("p",{children:t.number}),(0,d.jsx)("button",{onClick:function(){return n=t.id,void e((0,u.ze)(n));var n},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]},t.id)}))})},v="Filter_filter__vxThR",x=n(653),C=function(e){return e.filter},b=function(){var e=(0,l.I0)(),t=(0,l.v9)(C);return(0,d.jsxs)("label",{className:v,children:["\u041f\u043e\u0448\u0443\u043a",(0,d.jsx)("input",{type:"text",value:t,onChange:function(t){var n;n=t.target.value,e((0,x.T)(n))}})]})};var j=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,{}),(0,d.jsx)(b,{}),(0,d.jsx)(p,{})]})}}}]);
//# sourceMappingURL=167.e933b2e5.chunk.js.map