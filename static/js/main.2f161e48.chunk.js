(this["webpackJsonpgh-pages-test"]=this["webpackJsonpgh-pages-test"]||[]).push([[0],[,,,function(e,t,c){e.exports={filtersWrapper:"Filtres_filtersWrapper__330ol",filters:"Filtres_filters__35zow",item:"Filtres_item__3-XAR",active:"Filtres_active__vwpVO",none:"Filtres_none__3upG6",hidden:"Filtres_hidden__2zkD0",itemLeft:"Filtres_itemLeft__214xq",clearCompleted:"Filtres_clearCompleted__14lDz",filtersAfter1:"Filtres_filtersAfter1__2K5Vn",filtersAfter2:"Filtres_filtersAfter2__20doe"}},,function(e,t,c){e.exports={item:"Todo_item__3Sram",hidden:"Todo_hidden__3d-Du",checkButtonActive:"Todo_checkButtonActive__3yr1g",checkButtonCompleted:"Todo_checkButtonCompleted__16O5d",titleActive:"Todo_titleActive__3_pxP",titleCompleted:"Todo_titleCompleted__gL9F8",input:"Todo_input__lM_dO",deleteButton:"Todo_deleteButton__3eKVC",done:"Todo_done__jimiZ"}},,,function(e,t,c){e.exports={input:"InputTodo_input__BTjcb",label:"InputTodo_label__ZmwF4",hidden:"InputTodo_hidden__1lEHu"}},,,,,function(e,t,c){e.exports={header:"Header_header__1f6kd"}},function(e,t,c){e.exports={list:"Todos_list__fX0Zq"}},function(e,t,c){e.exports={info:"Footer_info__2DWLr"}},,,,,function(e,t,c){},,,,,,function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),i=c(7),r=c.n(i),a=(c(20),c(13)),d=c.n(a),l=c(1),s=function(){return Object(l.jsx)("header",{className:d.a.header,children:"todos"})},u=c(14),j=c.n(u),b=c(6),f=c(5),O=c.n(f),p=c(4),m="ADD_TODO",_="DELETE_TODO",v="CHECK_TODO",h="EDIT_TODO",x="CHECK_ALL_TODOS",T="CLEAR_COMPLETED",y="FILTERED_TODOS",C="CHANGE_FILTER",k="GET_CLICK",E=function(e){return{type:y}},N={deleteTodo:function(e){return function(e){return{type:_,payload:e}}(e)},checkTodo:function(e){return function(e){return{type:v,payload:e}}(e)},editTodo:function(e){return{type:h,payload:e}},filteredTodos:function(){return E()}},L=Object(p.b)((function(e){return{click:e.click,clickEvent:e.clickEvent}}),N)((function(e){var t=e.todo,c=e.deleteTodo,o=e.checkTodo,i=e.editTodo,r=e.click,a=e.clickEvent,d=e.filteredTodos,s=Object(n.useState)(t.title),u=Object(b.a)(s,2),j=u[0],f=u[1],p=13,m=27,_=Object(n.useRef)(null);return Object(n.useEffect)((function(){function e(e){r&&_.current&&!_.current.contains(e.target)&&(a.preventDefault(),t.edited=!1,t.title=j,i(t))}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}})),Object(l.jsxs)("li",{className:t.visibility?O.a.item:O.a.hidden,children:[Object(l.jsx)("div",{className:t.edited?O.a.hidden:t.completed?O.a.checkButtonCompleted:O.a.checkButtonActive,onClick:function(){o(t.id),d()}}),t.edited?Object(l.jsx)("form",{children:Object(l.jsx)("input",{type:"text",className:O.a.input,value:j,onChange:function(e){f(e.currentTarget.value)},onKeyDown:function(e){e.keyCode!==p&&e.keyCode!==m||(e.preventDefault(),t.edited=!1,t.title=j,i(t))},ref:_})}):Object(l.jsx)("div",{className:t.completed?O.a.titleCompleted:O.a.titleActive,onDoubleClick:function(){t.edited=!0,i(t)},children:t.title}),Object(l.jsx)("button",{className:t.edited?O.a.hidden:O.a.deleteButton,onClick:function(){return c(t.id)},children:"\xd7"})]})})),D=Object(p.b)((function(e){return{todos:e.todos}}),null)((function(e){var t=e.todos;return Object(l.jsx)("div",{className:j.a.list,children:t.map((function(e){return Object(l.jsx)(L,{todo:e},e.id)}))})})),g=c(8),F=c.n(g),A={addTodo:function(e){return function(e){return{type:m,payload:e}}(e)},checkAllTodos:function(){return{type:x}}},w=Object(p.b)((function(e){return{todos:e.todos}}),A)((function(e){var t=e.todos,c=e.addTodo,o=e.checkAllTodos,i=Object(n.useState)(""),r=Object(b.a)(i,2),a=r[0],d=r[1];return Object(l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),a.trim()){var t={title:a,id:Date.now().toString(),completed:!1,edited:!1,visibility:!0};c(t),d("")}},children:[Object(l.jsx)("label",{className:t.length>0?F.a.label:F.a.hidden,onClick:function(){return o()},children:"\u276f"}),Object(l.jsx)("input",{type:"text",placeholder:"What needs to be done?",className:F.a.input,value:a,onChange:function(e){d(e.currentTarget.value)}})]})})),S=c(3),B=c.n(S),I={filteredTodos:function(){return E()},changeFilter:function(e){return function(e){return{type:C,payload:e}}(e)}},R=Object(p.b)(null,I)((function(e){var t=e.filteredTodos,c=e.changeFilter,o=Object(n.useState)(!0),i=Object(b.a)(o,2),r=i[0],a=i[1],d=Object(n.useState)(!1),s=Object(b.a)(d,2),u=s[0],j=s[1],f=Object(n.useState)(!1),O=Object(b.a)(f,2),p=O[0],m=O[1];return Object(l.jsxs)("nav",{className:B.a.filters,children:[Object(l.jsx)("div",{className:B.a.item,children:Object(l.jsx)("a",{className:r?B.a.active:B.a.none,onClick:function(){a(!0),j(!1),m(!1),c("all"),t()},href:"#all",children:"All"})}),Object(l.jsx)("div",{className:B.a.item,children:Object(l.jsx)("a",{className:u?B.a.active:B.a.none,onClick:function(){a(!1),j(!0),m(!1),c("active"),t()},href:"#active",children:"Active"})}),Object(l.jsx)("div",{className:B.a.item,children:Object(l.jsx)("a",{className:p?B.a.active:B.a.none,onClick:function(){a(!1),j(!1),m(!0),c("completed"),t()},href:"#completed",children:"Completed"})})]})})),K={clearCompleted:function(){return{type:T}}},X=Object(p.b)((function(e){return{todos:e.todos,itemsLeft:e.itemsLeft}}),K)((function(e){var t=e.todos,c=e.itemsLeft,n=e.clearCompleted;return Object(l.jsxs)("div",{className:0===t.length?B.a.hidden:B.a.none,children:[Object(l.jsxs)("div",{className:B.a.filtersWrapper,children:[Object(l.jsxs)("div",{className:B.a.itemLeft,children:[c," items left"]}),Object(l.jsx)(R,{}),Object(l.jsx)("div",{className:B.a.clearCompleted,onClick:function(){return n()},children:"Clear completed"})]}),Object(l.jsx)("div",{className:B.a.filtersAfter1}),Object(l.jsx)("div",{className:B.a.filtersAfter2})]})})),H=c(15),V=c.n(H),W=function(){return Object(l.jsxs)("footer",{className:V.a.info,children:[Object(l.jsx)("p",{children:"Double-click to edit a todo"}),Object(l.jsx)("p",{children:"Created by Medvedeva Taisia"})]})},M={getClick:function(e){return function(e){return{type:k,payload:e}}(e)}},z=Object(p.b)(null,M)((function(e){var t=e.getClick;return Object(l.jsx)("div",{className:"body",onClick:function(e){return t(e)},children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(s,{}),Object(l.jsx)(w,{}),Object(l.jsx)(D,{}),Object(l.jsx)(X,{}),Object(l.jsx)(W,{})]})})})),G=c(12),Z=c(2),q="all",J="active",P="completed",U={todos:[],itemsLeft:0,currentFilter:q,click:!1,clickEvent:null},Q=Object(G.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return e.itemsLeft++,Object(Z.a)(Object(Z.a)({},e),{},{todos:e.todos.concat(t.payload)});case _:var c=e.todos.filter((function(e){return e.id!==t.payload}));return e.itemsLeft>0&&e.itemsLeft--,Object(Z.a)(Object(Z.a)({},e),{},{todos:c});case v:var n=e.todos.map((function(c){return c.id===t.payload?(c.completed?e.itemsLeft++:e.itemsLeft--,Object(Z.a)(Object(Z.a)({},c),{},{completed:!c.completed})):Object(Z.a)({},c)}));return Object(Z.a)(Object(Z.a)({},e),{},{todos:n});case T:var o=e.todos.filter((function(e){return!e.completed}));return e.itemsLeft=o.length,Object(Z.a)(Object(Z.a)({},e),{},{todos:o});case x:var i=e.todos[0].completed;if(i){var r=e.todos.map((function(e){return Object(Z.a)(Object(Z.a)({},e),{},{completed:!1})}));return e.itemsLeft=r.length,Object(Z.a)(Object(Z.a)({},e),{},{todos:r})}var a=e.todos.map((function(e){return Object(Z.a)(Object(Z.a)({},e),{},{completed:!0})}));return e.itemsLeft=0,Object(Z.a)(Object(Z.a)({},e),{},{todos:a});case C:return e.currentFilter=t.payload,e;case y:if(e.currentFilter===q){var d=e.todos.map((function(e){return Object(Z.a)(Object(Z.a)({},e),{},{visibility:!0})}));return Object(Z.a)(Object(Z.a)({},e),{},{todos:d})}if(e.currentFilter===J){var l=e.todos.map((function(e){return e.completed?Object(Z.a)(Object(Z.a)({},e),{},{visibility:!1}):Object(Z.a)(Object(Z.a)({},e),{},{visibility:!0})}));return Object(Z.a)(Object(Z.a)({},e),{},{todos:l})}if(e.currentFilter===P){var s=e.todos.map((function(e){return e.completed?Object(Z.a)(Object(Z.a)({},e),{},{visibility:!0}):Object(Z.a)(Object(Z.a)({},e),{},{visibility:!1})}));return Object(Z.a)(Object(Z.a)({},e),{},{todos:s})}return e;case h:if(t.payload.edited){var u=e.todos.map((function(e){return e.id===t.payload.id?Object(Z.a)(Object(Z.a)({},e),{},{edited:!0}):Object(Z.a)({},e)}));return Object(Z.a)(Object(Z.a)({},e),{},{todos:u})}var j=e.todos.map((function(e){return e.id===t.payload.id?Object(Z.a)(Object(Z.a)({},e),{},{edited:!1}):Object(Z.a)({},e)}));return Object(Z.a)(Object(Z.a)({},e),{},{todos:j});case k:return e.click=!0,e.clickEvent=t.payload,e;default:return e}}),Object(G.a)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));r.a.render(Object(l.jsx)(p.a,{store:Q,children:Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(z,{})})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.2f161e48.chunk.js.map