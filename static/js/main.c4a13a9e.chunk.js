(this["webpackJsonpwix-home-assignment"]=this["webpackJsonpwix-home-assignment"]||[]).push([[0],{127:function(e,n,t){e.exports=t(284)},132:function(e,n,t){},283:function(e,n,t){},284:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(24),i=t.n(c),o=(t(132),t(13)),l=t(14),u=t(15);function s(){var e=Object(l.a)(["\n  position: absolute;\n  width: ","px;\n  height: ","px;\n"]);return s=function(){return e},e}function d(){var e=Object(l.a)(["\n  width: 100%;\n  .game-status-container {\n    text-align: center;\n    justify-self: center;\n    align-self: center;\n    width: 100%;\n\n    font-size: 23px;\n    z-index: 10;\n\n    .game-status {\n      background-color: rgba(255, 255, 255, 0.4);\n      display: inline-flex;\n\n      .GAME_ON {\n        color: blue;\n      }\n\n      .WON {\n        color: green;\n      }\n\n      .LOSE {\n        color: red;\n      }\n    }\n  }\n  .board-page {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 40px;\n  }\n"]);return d=function(){return e},e}function g(){var e=Object(l.a)(["\n  max-width: ","px;\n  max-height: ","px;\n  box-shadow: 1px 1px 10px 2px;\n  overflow: auto;\n\n  @media (max-width: ","px) {\n    padding-bottom: 10px;\n    padding-right: 10px;\n  }\n"]);return g=function(){return e},e}function f(){var e=Object(l.a)(["\n          pointer-events: none;\n          opacity: 0.6;\n        "]);return f=function(){return e},e}function m(){var e=Object(l.a)(["\n  flex-direction: row;\n  display: flex;\n  flex-wrap: wrap;\n  justify-self:center;\n  overflow:auto;\n  width: ","px;\n  ","\n  }\n"]);return m=function(){return e},e}function p(){var e=Object(l.a)(["\n            cursor: pointer;\n          "]);return p=function(){return e},e}function b(){var e=Object(l.a)(["\n  width: ","px;\n  height: ","px;\n  line-height: ","px;\n  text-align: center;\n  border: solid thin black;\n  background-color: ",";\n  &:hover {\n    background-color: white;\n    ","\n  }\n  .fail-icon {\n    position: absolute;\n    left: -7px;\n    color: red;\n    width: 30px;\n    height: 30px;\n    font-weight: bold;\n  }\n"]);return b=function(){return e},e}function h(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  font-size: 18px;\n  line-height: 30px;\n  text-align: center;\n  align-items: center;\n  margin-left: 10px;\n  margin-right: 10px;\n"]);return h=function(){return e},e}function v(){var e=Object(l.a)(["\n  padding: 5px;\n  font-size: 15px;\n  width: 30px;\n  margin-left: 10px;\n"]);return v=function(){return e},e}function x(){var e=Object(l.a)(["\n  flex-row: column;\n  display: flex;\n  justify-content: center;\n  padding: 7px;\n  width: 100%;\n  height: 30px;\n  background-color: rgba(0, 0, 0, 0.2);\n"]);return x=function(){return e},e}var O=u.b.div(x()),j=u.b.input(v()),C=u.b.div(h()),w=u.b.div(b(),28,28,28,(function(e){var n=e.isCellClicked,t=e.superman;return n?"white":t?"rgba(0,40,40,0.1)":"rgba(0,10,10,0.2)"}),(function(e){return e.isCellClicked?"":Object(u.a)(p())})),y=u.b.div(m(),(function(e){return 30*e.countCols}),(function(e){return"GAME ON"!==e.status?Object(u.a)(f()):""})),k=u.b.div(g(),800,700,800),E=u.b.div(d()),M=(u.b.div(s(),(function(e){var n=e.countCols;return Math.min(30*n,800)}),(function(e){var n=e.countRows;return Math.min(30*n,700)})),t(17)),F=t.n(M),N=t(28),S=t(126),R=function(e){var n=e.label,t=Object(S.a)(e,["label"]);return r.a.createElement(C,null,r.a.createElement("text",null,n),r.a.createElement(j,t))},A=function(e){var n=e.state.superman,t=e.setLoading,c=e.setSuperman,i=e.createBoard,l=Object(a.useState)(20),u=Object(o.a)(l,2),s=u[0],d=u[1],g=Object(a.useState)(20),f=Object(o.a)(g,2),m=f[0],p=f[1],b=Object(a.useState)(12),h=Object(o.a)(b,2),v=h[0],x=h[1];return Object(a.useEffect)((function(){i(m,s,v)}),[]),r.a.createElement(O,null,r.a.createElement(R,{label:"Col Count",value:s,onChange:function(e){d(Number(e.target.value))}}),r.a.createElement(R,{label:"Row Count",value:m,onChange:function(e){p(Number(e.target.value))}}),r.a.createElement(R,{label:"Mines",value:v,onChange:function(e){x(Number(e.target.value))}}),r.a.createElement(R,{label:"SUPERMAN",checked:n,type:"checkbox",style:{transform:"scale(2)"},onChange:function(e){c(!n)}}),r.a.createElement("button",{onClick:Object(N.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(!0);case 2:setTimeout(Object(N.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(m,s,v);case 2:t(!1);case 3:case"end":return e.stop()}}),e)}))),0);case 3:case"end":return e.stop()}}),e)})))},"New Game"))},W=t(117),B=t.n(W);function G(){var e=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  align-items: center;\n  display: flex;\n  justify-content: center;\n"]);return G=function(){return e},e}var L=u.b.div(G()),z=function(){return r.a.createElement(L,null,r.a.createElement(B.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),r.a.createElement("div",{style:{fontSize:"60px",color:"white"}},"Creating new board ..."))},T=t(125),I=function(e,n){return"row:".concat(e,",col:").concat(n)},J=t(81),P=t(122),V=function(e){var n=e.indexes,t=e.superman,c=e.toggleFlag,i=e.clickCell,o=e.isCellMined,l=e.isCellClicked,u=e.isCellFlagged,s=e.countMinesAroundCell,d=Object(a.useMemo)((function(){return u?r.a.createElement(J.b,{color:"red"}):t||l?o?r.a.createElement("span",{style:{display:"inline-block",position:"relative"}},r.a.createElement(J.a,{textAnchor:"middle",alignmentBaseline:"middle"}),l&&o&&r.a.createElement(P.a,{textAnchor:"middle",className:"fail-icon",alignmentBaseline:"middle"})):s>0?s:"":void 0}),[l,t,o,s,u]),g=function(){var e=Object(N.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.altKey?c(n):l||u||i(n);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(w,{onClick:g,isCellClicked:l,indexes:n,superman:t},d)},_=function(e){var n=e.state,t=n.map,a=n.height,c=n.width,i=n.clicked,o=n.neighbors,l=n.flagged,u=n.superman,s=e.toggleFlag,d=e.clickCell,g=e.reveal;return r.a.createElement(T.a,{cellRenderer:function(e){var n=e.columnIndex,a=e.key,c=e.rowIndex,f=e.style,m=I(c,n),p={isCellClicked:i[m],isCellFlagged:l[m],isCellMined:t[m]};return r.a.createElement("div",{style:f,key:a},r.a.createElement(V,Object.assign({key:m,clickCell:d,reveal:g,toggleFlag:s,countMinesAroundCell:o[m],indexes:m,superman:u},p)))},columnCount:c,columnWidth:30,height:600,overscanColumnCount:20,overscanRowCount:20,rowCount:a,rowHeight:30,width:800})},D=function(e){var n=e.state,t=n.countMines,a=n.countFlags,c=n.board,i=n.status,o=e.loading,l=t-a;return r.a.createElement("div",{className:"board-page"},o&&r.a.createElement(z,null),r.a.createElement(k,null,0===l&&"WON"!==i&&r.a.createElement("div",{style:{color:"red"}},"No More Flags"),r.a.createElement(y,{status:i,countCols:c[0].length,countRows:c.length},r.a.createElement(_,e))))},H=t(29),K=t(10),Q=function(e,n,t){for(var a=e.match(/row:([0-9]+),col:([0-9]+)/),r=Number(a[1]),c=Number(a[2]),i=[],o=Math.max(0,r-1);o<=Math.min(n-1,r+1);o++)for(var l=Math.max(0,c-1);l<=Math.min(t-1,c+1);l++)i.push([o,l]);return i},U=(t(214),function(e,n,t){for(var a={},r={},c=[],i=t,l=e*n,u=0;u<e;u++){c.push([]);for(var s=0;s<n;s++)i/l>=Math.random()&&(r[I(u,s)]=1,i--),a[I(u,s)]=r[I(u,s)]||0,c[u].push(a[I(u,s)]),l--}var d={};return Object.keys(r).forEach((function(t){Q(t,e,n).forEach((function(e){var n=Object(o.a)(e,2),t=n[0],a=n[1];d[I(t,a)]=(d[I(t,a)]||0)+1}))})),{countMines:t,width:n,height:e,status:"GAME ON",clicked:{},board:c,mines:r,map:a,neighbors:d}}),Y=t(123),$=t.n(Y),q=t(124),X=t.n(q),Z={neighbors:{},flagged:{},map:{},mines:{},board:[],clicked:{},status:"NOT READY",superman:!1,flaggedMinesCount:0,countFlags:0},ee=function(e,n){var t=n.type,a=n.payload;switch(t){case"clickCell":var r=a.indexes;return Object(K.a)({},e,{clicked:Object(K.a)({},e.clicked,Object(H.a)({},r,1))});case"flagCell":var c=a.indexes;return Object(K.a)({},e,{countFlags:e.countFlags+1,flagged:Object(K.a)({},e.flagged,Object(H.a)({},c,1))});case"decFlaggedMinesCount":return Object(K.a)({},e,{flaggedMinesCount:e.flaggedMinesCount-1});case"incFlaggedMinesCount":return Object(K.a)({},e,{flaggedMinesCount:e.flaggedMinesCount+1});case"unFlagCell":var i=a.indexes;return Object(K.a)({},e,{countFlags:e.countFlags-1,flagged:X()(e.flagged,Object.keys(e.flagged).filter((function(e){return e!==i})))});case"reset":var o=a;return Object(K.a)({},Z,{},o);case"setSuperman":var l=a.isSuperman;return Object(K.a)({},e,{superman:l});case"reveal":var u=a.listOfCellsToReaveal;return Object(K.a)({},e,{clicked:Object(K.a)({},e.clicked,{},u)});case"endGame":var s=a.status;return Object(K.a)({},e,{superman:!0,status:s});case"gemeWon":return Object(K.a)({},e,{flagged:e.mines,status:"WON"});default:return e}},ne=function(){var e=Object(a.useReducer)(ee,Z),n=Object(o.a)(e,2),t=n[0],r=n[1],c=function(e){var n=e.additionalCells,a=e.addOrRemoveFromFlagsCount,c=Object(K.a)({},t.clicked,{},n),i=!1;if(t.height*t.width-Object.keys(c).length===t.countMines){var o=Object.keys(t.mines).filter((function(e){return!c[e]}));i=0===$()(o,Object.keys(t.mines)).length}(i||t.flaggedMinesCount+a===t.countMines)&&r({type:"gemeWon"})},i=function(e){r({type:"endGame",payload:{status:e}})},l=function(e){r({type:"flagCell",payload:{indexes:e}}),t.mines[e]&&(r({type:"incFlaggedMinesCount"}),c({addOrRemoveFromFlagsCount:1,additionalCells:{}}))},u=function(e){r({type:"unFlagCell",payload:{indexes:e}}),t.mines[e]&&r({type:"decFlaggedMinesCount"})},s=function(e,n){if(!t.mines[I(e,n)]){var a=function(e,n){var t=function(){var e=[],n={};return{pop:function(){return e.splice(0,1)[0]},push:function(t){n[t]||(e.push(t),n[t]=t)},peek:function(){return e[e.length-1]},getQueue:function(){return e},didVisit:function(e){return!!n[e]},getVisited:function(){return n},isEmpty:function(){return 0===e.length}}}(),a={},r=n.clicked,c=n.neighbors,i=n.width,l=n.height;for(t.push(e);!t.isEmpty();)for(var u=t.pop(),s=Q(u,l,i),d=0;d<s.length;d++){var g=Object(o.a)(s[d],2),f=g[0],m=g[1],p=I(f,m);a[p]=1,c[p]||r[p]||t.push(p)}return a}(I(e,n),t);r({type:"reveal",payload:{listOfCellsToReaveal:a}}),c({addOrRemoveFromFlagsCount:0,additionalCells:a})}};return{state:t,clickCell:function(e){t.map[e]&&i("LOSE"),t.neighbors[e]||s(e),r({type:"clickCell",payload:{indexes:e}}),c({addOrRemoveFromFlagsCount:0,additionalCells:Object(H.a)({},e,1)})},setSuperman:function(e){r({type:"setSuperman",payload:{isSuperman:e}})},endGame:i,toggleFlag:function(e){t.flagged[e]?u(e):Object.keys(t.flagged).length<t.countMines&&l(e)},reveal:s,createBoard:function(){var e=Object(N.a)(F.a.mark((function e(n,t,a){var c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=U(n,t,a),e.next=3,r({type:"reset",payload:Object(K.a)({},c)});case 3:case"end":return e.stop()}}),e)})));return function(n,t,a){return e.apply(this,arguments)}}()}},te=function(e){var n=e.status,t=e.flagged,a=e.countMines-(Object.keys(t).length||0);return r.a.createElement("div",{className:"game-status-container"},r.a.createElement("div",{className:"game-status"},"Flags Lefts : (".concat(a,") "),r.a.createElement("text",{className:n.replace(" ","_"),style:{marginLeft:10}},n)))},ae=function(){var e=ne(),n=Object(a.useState)(!1),t=Object(o.a)(n,2),c=t[0],i=t[1],l=e.state.board;return r.a.createElement(E,null,r.a.createElement(A,Object.assign({setLoading:i},e)),r.a.createElement(te,e.state),l.length>0&&r.a.createElement(D,Object.assign({loading:c},e)))};t(283);var re=function(){return r.a.createElement(ae,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[127,1,2]]]);
//# sourceMappingURL=main.c4a13a9e.chunk.js.map