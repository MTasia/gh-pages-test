(this["webpackJsonpgh-pages-test"]=this["webpackJsonpgh-pages-test"]||[]).push([[0],[,,,function(e,t,o){e.exports={filtersWrapper:"Filtres_filtersWrapper__3lycx",filters:"Filtres_filters__1xntt",item:"Filtres_item__2dwu6",active:"Filtres_active__Osn4H",none:"Filtres_none__1CPRt",hidden:"Filtres_hidden__23Uj7",itemLeft:"Filtres_itemLeft__1jlr7",clearCompleted:"Filtres_clearCompleted__33nzi",filtersAfter1:"Filtres_filtersAfter1___mKQO",filtersAfter2:"Filtres_filtersAfter2__3DZF4"}},,function(e,t,o){e.exports={item:"Todo_item__1dDa6",hidden:"Todo_hidden__11Xsj",checkButtonActive:"Todo_checkButtonActive__19PSt",checkButtonCompleted:"Todo_checkButtonCompleted__HtDpE",titleActive:"Todo_titleActive__KTfYe",titleCompleted:"Todo_titleCompleted__3NTsR",input:"Todo_input__2Sf65",deleteButton:"Todo_deleteButton__3c-N5",done:"Todo_done__1tOzF"}},,,,,function(e,t,o){e.exports={input:"InputTodo_input__2Q0hR",label:"InputTodo_label__19MOY",hidden:"InputTodo_hidden__JiJgS"}},,,,function(e,t,o){e.exports={header:"Header_header__1x_n9"}},function(e,t,o){e.exports={list:"Todos_list__2jP6D"}},function(e,t,o){e.exports={info:"Footer_info__3rPH6"}},,,,,,,,,,function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(0),c=o.n(n),i=o(8),r=o.n(i),a=o(4),d=o(14),l=o.n(d),s=o(1),u=function(){return Object(s.jsx)("header",{className:l.a.header,children:"todos"})},j=o(7),f=o(2),b=o(9),O="all",m="active",p="completed",_={todos:[],currentFilter:O,editTodoTitle:""},h=Object(b.b)({name:"todos",initialState:_,reducers:{addTodo:function(e,t){return Object(f.a)(Object(f.a)({},e),{},{todos:e.todos.concat(t.payload)})},deleteTodo:function(e,t){var o=e.todos.filter((function(e){return e.id!==t.payload}));return Object(f.a)(Object(f.a)({},e),{},{todos:o})},checkTodo:function(e,t){var o=e.todos.map((function(e){return e.id===t.payload&&e.completed?Object(f.a)(Object(f.a)({},e),{},{completed:!e.completed}):e.id!==t.payload||e.completed?Object(f.a)({},e):Object(f.a)(Object(f.a)({},e),{},{completed:!e.completed})}));return Object(f.a)(Object(f.a)({},e),{},{todos:o})},clearCompleted:function(e){var t=e.todos.filter((function(e){return!e.completed}));return Object(f.a)(Object(f.a)({},e),{},{todos:t})},editTitle:function(e,t){return Object(f.a)(Object(f.a)({},e),{},{editTodoTitle:t.payload})},editTodo:function(e,t){var o=t.payload,n=o.id;if(!o.edited){var c=e.todos.map((function(e){return e.id===n?Object(f.a)(Object(f.a)({},e),{},{edited:!0}):Object(f.a)({},e)}));return Object(f.a)(Object(f.a)({},e),{},{todos:c})}var i=e.todos.map((function(t){return t.id===n?Object(f.a)(Object(f.a)({},t),{},{edited:!1,title:e.editTodoTitle}):Object(f.a)({},t)}));return Object(f.a)(Object(f.a)({},e),{},{todos:i})},checkAllTodos:function(e){if(e.todos[0].completed){var t=e.todos.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{completed:!1})}));return Object(f.a)(Object(f.a)({},e),{},{todos:t})}var o=e.todos.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{completed:!0})}));return Object(f.a)(Object(f.a)({},e),{},{todos:o})},changeFilter:function(e,t){return Object(f.a)(Object(f.a)({},e),{},{currentFilter:t.payload})}}}),v=h.actions,T=h.reducer,x=v.addTodo,N=v.deleteTodo,C=v.checkTodo,k=v.clearCompleted,g=v.editTitle,y=v.editTodo,F=v.checkAllTodos,S=v.changeFilter,A=T,D=o(5),I=o.n(D),B={deleteTodoTodo:function(e){return N(e)},checkTodoTodo:function(e){return C(e)},editTitleTodo:function(e){return g(e)},editTodoTodo:function(e){return y(e)}},R=Object(a.b)(null,B)((function(e){var t=e.todo,o=e.deleteTodoTodo,c=e.checkTodoTodo,i=e.editTitleTodo,r=e.editTodoTodo,a=Object(n.useState)(t.title),d=Object(j.a)(a,2),l=d[0],u=d[1],f=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&(i(l),r(t))};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}})),Object(s.jsxs)("li",{className:t.visibility?I.a.item:I.a.hidden,children:[Object(s.jsx)("div",{className:t.edited?I.a.hidden:I.a.checkButtonActive,onClick:function(){c(t.id)}}),t.edited?Object(s.jsx)("form",{children:Object(s.jsx)("input",{type:"text",className:I.a.input,value:l,onChange:function(e){u(e.currentTarget.value)},onKeyDown:function(e){13!==e.keyCode&&27!==e.keyCode||(e.preventDefault(),i(l),r(t))},ref:f})}):Object(s.jsx)("div",{className:t.completed?I.a.titleCompleted:I.a.titleActive,onDoubleClick:function(){r(t)},children:t.title}),Object(s.jsx)("button",{className:t.edited?I.a.hidden:I.a.deleteButton,onClick:function(){return o(t.id)},type:"submit",children:"\xd7"})]})})),w=o(15),L=o.n(w),J=o(6),E=function(e){return e.todosReducer.todos},H=function(e){return e.todosReducer.currentFilter},P=function(){return Object(J.a)([H,E],(function(e,t){return e===O?t:e===m?t.filter((function(e){return!e.completed})):e===p?t.filter((function(e){return e.completed})):t}))},W=Object(a.b)((function(){var e=P();return function(t){return{todos:e(t)}}}),null)((function(e){var t=e.todos;return Object(s.jsx)("div",{className:L.a.list,children:t.map((function(e){return Object(s.jsx)(R,{todo:e},e.id)}))})})),K=o(10),M=o.n(K),z={addTodoInput:function(e){return x(e)},checkAllTodosInput:F},Q=Object(a.b)((function(){var e=P();return function(t){return{todos:e(t)}}}),z)((function(e){var t=e.todos,o=e.addTodoInput,c=e.checkAllTodosInput,i=Object(n.useState)(""),r=Object(j.a)(i,2),a=r[0],d=r[1];return Object(s.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),a.trim()){var t={title:a,id:Date.now().toString(),completed:!1,edited:!1,visibility:!0};o(t),d("")}},children:[Object(s.jsx)("label",{className:t.length>0?M.a.label:M.a.hidden,onClick:c,children:"\u276f"}),Object(s.jsx)("input",{type:"text",placeholder:"What needs to be done?",className:M.a.input,value:a,onChange:function(e){d(e.currentTarget.value)}})]})})),Y=o(3),U=o.n(Y),X={changeFilterNav:function(e){return S(e)}},Z=Object(a.b)((function(){var e=Object(J.a)([H],(function(e){var t={};return e===O&&(t={all:!0,active:!1,completed:!1}),e===m&&(t={all:!1,active:!0,completed:!1}),e===p&&(t={all:!1,active:!1,completed:!0}),t}));return function(t){return{filterStatus:e(t)}}}),X)((function(e){var t=e.filterStatus,o=e.changeFilterNav,c=Object(n.useState)(t.all),i=Object(j.a)(c,2),r=i[0],a=i[1],d=Object(n.useState)(t.active),l=Object(j.a)(d,2),u=l[0],f=l[1],b=Object(n.useState)(t.completed),O=Object(j.a)(b,2),m=O[0],p=O[1];return Object(s.jsxs)("nav",{className:U.a.filters,children:[Object(s.jsx)("div",{className:U.a.item,children:Object(s.jsx)("a",{className:r?U.a.active:U.a.none,onClick:function(){a(!0),f(!1),p(!1),o("all")},href:"#all",children:"All"})}),Object(s.jsx)("div",{className:U.a.item,children:Object(s.jsx)("a",{className:u?U.a.active:U.a.none,onClick:function(){a(!1),f(!0),p(!1),o("active")},href:"#active",children:"Active"})}),Object(s.jsx)("div",{className:U.a.item,children:Object(s.jsx)("a",{className:m?U.a.active:U.a.none,onClick:function(){a(!1),f(!1),p(!0),o("completed")},href:"#completed",children:"Completed"})})]})})),q={clearCompletedFilters:k},G=Object(a.b)((function(){var e=P(),t=Object(J.a)([E],(function(e){var t=0;return e.map((function(e){return e.completed||(t+=1),t})),t}));return function(o){return{todos:e(o),itemsLeft:t(o)}}}),q)((function(e){var t=e.todos,o=e.itemsLeft,n=e.clearCompletedFilters;return Object(s.jsxs)("div",{className:0===t.length?U.a.hidden:U.a.none,children:[Object(s.jsxs)("div",{className:U.a.filtersWrapper,children:[Object(s.jsxs)("div",{className:U.a.itemLeft,children:[o," items left"]}),Object(s.jsx)(Z,{}),Object(s.jsx)("div",{className:U.a.clearCompleted,onClick:n,children:"Clear completed"})]}),Object(s.jsx)("div",{className:U.a.filtersAfter1}),Object(s.jsx)("div",{className:U.a.filtersAfter2})]})})),V=o(16),$=o.n(V),ee=function(){return Object(s.jsxs)("footer",{className:$.a.info,children:[Object(s.jsx)("p",{children:"Double-click to edit a todo"}),Object(s.jsx)("p",{children:"Created by Medvedeva Taisia"})]})},te=Object(a.b)(null,null)((function(){return Object(s.jsx)("div",{className:"body",children:Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)(u,{}),Object(s.jsx)(Q,{}),Object(s.jsx)(W,{}),Object(s.jsx)(G,{}),Object(s.jsx)(ee,{})]})})})),oe=(o(26),{todosReducer:A}),ne=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),ce=Object(b.a)({reducer:oe,preloadedState:ne});ce.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(o){}}({todosReducer:ce.getState().todosReducer})})),r.a.render(Object(s.jsx)(a.a,{store:ce,children:Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(te,{})})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.5d50e326.chunk.js.map