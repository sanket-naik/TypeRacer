(this.webpackJsonpsocketfun=this.webpackJsonpsocketfun||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(44),c=a.n(r),m=(a(52),a(3)),i=(a(53),a(1)),s=a(7);a(54),a(26);function o(e){return l.a.createElement("div",null,l.a.createElement("button",{style:Object(s.a)({},e.style),className:"btn shadow "+e.className,onClick:e.onClick},e.children))}a(55);var u=Object(i.g)((function(e){return l.a.createElement("div",{className:"GameMenu"},l.a.createElement("div",{className:"ManuDiv"},l.a.createElement("div",{className:"Headings HeadMain",style:{marginBottom:"70px"}},l.a.createElement("img",{height:"150px",style:{borderRadius:"15px"},src:"https://res.cloudinary.com/dlmozkbdc/image/upload/v1598109581/Socket/method-draw-image_8_w1twnd.svg"})),l.a.createElement("div",{className:"InnerBrnMain"},l.a.createElement(o,{className:"ManuflexItem",onClick:function(){return e.history.push("/typer/create")}},"Create Game"),l.a.createElement(o,{className:"ManuflexItem",onClick:function(){return e.history.push("/typer/join")}},"Join Game"))))})),d=a(46),E=a.n(d)()("localhost:3500");a(92);function p(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"InputStyle in "+e.className,style:Object(s.a)({},e.style)},l.a.createElement("div",{className:"IconInput"},l.a.createElement("img",{className:"IconInp",width:"iconSize"in e?e.iconSize:"25px",src:e.icon})),l.a.createElement("div",null,l.a.createElement("input",{type:"text",value:e.value,name:e.name,placeholder:e.placeholder,className:"InputMain",onChange:e.onChange}))))}a(93);function v(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"GameMenu ManuDiv"},l.a.createElement("div",{className:"Headings HeadMain",style:{marginBottom:"50px"}},l.a.createElement("img",{height:"150px",src:"https://res.cloudinary.com/dlmozkbdc/image/upload/v1598109026/Socket/method-draw-image_7_hotoo2.svg"})),l.a.createElement("div",{className:""},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E.emit("create-game",a)}},l.a.createElement("div",null,l.a.createElement(p,{iconSize:"15px",placeholder:"Please Enter name..",icon:"https://res.cloudinary.com/dlmozkbdc/image/upload/v1596797560/Socket/Group_5_1_uay1gg.svg",className:"CreateGameInput",value:a,onChange:function(e){r(e.target.value)}})),l.a.createElement(o,{style:{marginTop:"20px"}},"Submit")))))}var g=a(15);function f(){var e=Object(n.useState)({gameID:"",nickName:""}),t=Object(m.a)(e,2),a=t[0],r=t[1],c=function(e){var t=e.target,n=t.name,l=t.value;r(Object(s.a)(Object(s.a)({},a),{},Object(g.a)({},n,l)))};return l.a.createElement("div",null,l.a.createElement("div",{className:"GameMenu ManuDiv"},l.a.createElement("div",{className:"Headings HeadMain",style:{marginBottom:"50px"}},l.a.createElement("img",{height:"150px",src:"https://res.cloudinary.com/dlmozkbdc/image/upload/v1598106800/Socket/method-draw-image_3_zqcrea.svg"})),l.a.createElement("div",{className:""},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E.emit("join-game",a)}},l.a.createElement("div",null,l.a.createElement(p,{icon:"https://res.cloudinary.com/dlmozkbdc/image/upload/v1596807995/Socket/Group_5_2_ew8t5m.svg",className:"CreateGameInput",iconSize:"22px",name:"gameID",placeholder:"Enter game ID",value:a.gameID,onChange:c})),l.a.createElement("div",null,l.a.createElement(p,{icon:"https://res.cloudinary.com/dlmozkbdc/image/upload/v1596797560/Socket/Group_5_1_uay1gg.svg",name:"nickName",iconSize:"15px",placeholder:"Enter name",className:"CreateGameInput",value:a.nickName,onChange:c})),l.a.createElement(o,{style:{marginTop:"20px"}},"Submit")))))}a(94),a(95);function y(e){return l.a.createElement("div",{className:"out HowToPlay "+e.className},l.a.createElement("div",{className:"HowWorksHeading"},"How to play"),l.a.createElement("ul",{className:"HowWorksSubHeading"},l.a.createElement("li",null,"Invite players with the inviate code"),l.a.createElement("li",null,"Ask them to join the game and enter name and code"),l.a.createElement("li",null,"Player Joined will be updated as players joins"),l.a.createElement("li",null,"Players will be waiting in lobby"),l.a.createElement("li",null,"You should start the game"),l.a.createElement("li",null,"If staretd 5 second countdown starts and game begins")))}a(96);function N(e){var t=Object(n.useRef)(null);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"PlaceholdInvite"},"Invite Your friends with this code"),l.a.createElement("div",{className:"InviateTotalFlex"},l.a.createElement("input",{style:{display:"none"},type:"text",value:e.code,ref:t}),l.a.createElement("div",{className:"in InviteInput",id:"ClipId"},e.code),l.a.createElement("div",null,l.a.createElement(o,{className:"CopyBtn",onClick:function(){t.current.select(),document.execCommand("copy"),document.getElementById("ClipId").style.color="blue",setTimeout((function(){document.getElementById("ClipId").style.color="#696969"}),1e3)}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("img",{height:"20px",src:"https://res.cloudinary.com/dlmozkbdc/image/upload/v1596871380/Socket/Group_6_rtaonx.svg"})," \xa0 ",l.a.createElement("div",{style:{paddingTop:"3px"}},"Copy"))))))}a(97);function h(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"out LobbyPlayers",style:Object(s.a)({},e.style)},l.a.createElement("div",{style:{padding:"0px 20px"}},e.Heading),e.players.length>0?e.players.map((function(t){return l.a.createElement("div",{className:"lineFex"},l.a.createElement("div",{className:"lonefr"}," ",l.a.createElement("div",{className:"inLine",style:{backgroundColor:e.color}})," "),l.a.createElement("div",null,t.nickName))})):l.a.createElement("div",{className:"lineFex"},l.a.createElement("div",null,"-"))))}a(98);function b(e){return l.a.createElement("div",{className:"".concat(e.shadow||"out"," AquareBlock ").concat(e.className),style:Object(s.a)({},e.style)},e.children)}var x=function(e){var t=e.player,a=e.gameID,r=e.players;Object(n.useEffect)((function(){var e=window.location.pathname.split("/"),t=e[e.length-1];f(t)}),[]);var c=Object(n.useState)(!0),i=Object(m.a)(c,2),s=i[0],u=i[1],d=t.isPartyLeader,p=Object(n.useState)(""),v=Object(m.a)(p,2),g=v[0],f=v[1];return Object(n.useEffect)((function(){s&&E.on("timer",(function(e){u(!1)}))}),[]),s&&l.a.createElement("div",{className:"MainFlexSTartBtn"},l.a.createElement("div",{className:"FlexStartItem1start"},l.a.createElement(y,{className:"HowPadding"})),l.a.createElement("div",{className:"FlexStartItem2start"},l.a.createElement("div",{className:"in HRLine"})),l.a.createElement("div",{className:"FlexStartItem3start"},l.a.createElement("div",{className:"SecondSytartFlec"},l.a.createElement(N,{code:g}),l.a.createElement("div",{style:{marginTop:"30px"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",null,l.a.createElement(h,{style:{marginRight:"20px"},color:"green",Heading:"Lobby",players:r.filter((function(e){return!e.isPartyLeader}))})),l.a.createElement("div",null,l.a.createElement(h,{color:"red",Heading:"Admin",players:r.filter((function(e){return e.isPartyLeader}))})))),d?l.a.createElement("div",{className:"startbn"},l.a.createElement(o,{onClick:function(e){E.emit("timer",{playerID:t._id,gameID:a})}},"Start Game")):l.a.createElement("div",{className:"startbn"},l.a.createElement(b,{shadow:"out",style:{marginBottom:"20px"}},"Hello ",t.nickName," please wait while admin starts the game...")))))};a(99);var S=function(e){var t=Object(n.useState)({countdown:"",msg:""}),a=Object(m.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)((function(){E.on("timer",(function(e){c(e),console.log(e)})),E.on("done",(function(){E.removeListener("timer")}))}),[]);var i=r.countDown,s=r.msg,o=r.started;return console.log(i,s,o),!1===o&&1==e.pattern?l.a.createElement("div",{className:"SquarePosTimer"},l.a.createElement(b,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"StartrsIn"},s),l.a.createElement("div",{className:"timerstartstart"},i)))):!0===o&&2==e.pattern&&l.a.createElement("div",null,l.a.createElement(b,{className:!0===o&&"GameStartedType"},l.a.createElement("div",{className:"Squarestarttimer"},l.a.createElement("div",{className:"StartrsIn SquareTimer1"},s),l.a.createElement("div",{className:"timerstartstart SquareTimer2"},i))))};a(100);function I(e){var t=e.words,a=e.player;return l.a.createElement("div",null,l.a.createElement("div",{className:"WordsTypedBlock out"},function(e,t){var a=e.slice(0,t.currentWordIndex);return a=a.join(" "),l.a.createElement("span",{className:"typdalrdy paddeds"}," ",a)}(t,a),function(e,t){return l.a.createElement("span",{className:"paddeds",style:{textDecoration:"underline"}},e[t.currentWordIndex])}(t,a),function(e,t){var a=e.slice(t.currentWordIndex+1,e.length);return a=a.join(" "),l.a.createElement("span",{className:"paddeds"}," ",a)}(t,a)))}a(101);function k(e){var t=e.isOpen,a=e.isOver,r=e.gameID,c=Object(n.useState)(""),i=Object(m.a)(c,2),s=i[0],o=i[1],u=Object(n.useRef)(null);Object(n.useEffect)((function(){t||u.current.focus()}),[t]);return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("input",{style:{textAlign:"center"},className:"WordInputBox in ".concat((t||a)&&"DisalowtoType"),type:"text",disabled:t||a,ref:u,onChange:function(e){var t=e.target.value;" "===t.charAt(t.length-1)?(E.emit("userInput",{userInput:s,gameID:r}),o("")):o(t)},value:s}))}a(102);function w(e){return l.a.createElement("div",{className:"loaderContnr"},l.a.createElement("div",{className:"out FirdtLoao"},l.a.createElement("div",{className:"loadepEr"},l.a.createElement("div",{style:{marginTop:"4px"}})),l.a.createElement("div",{className:"NameLaoder"},e.name)),l.a.createElement("div",{className:"in Loadeingindcte"},l.a.createElement("div",{className:"Howcmchnalk",style:{width:e.percentage}})))}var j=function(e,t){return 0!==e.currentWordIndex?(e.currentWordIndex/t*100).toFixed(2)+"%":0};function O(e){var t=e.players,a=e.player,n=e.wordsLength,r=j(a,n);return l.a.createElement(l.a.Fragment,null,l.a.createElement(w,{percentage:r,name:a.nickName}),t.map((function(e){var t=j(e,n);return e._id!==a._id&&l.a.createElement(w,{percentage:t,name:e.nickName})})))}a(103);function _(e){var t=e.scoreBoard;return l.a.createElement("div",{className:"FlexWinnerrs"},l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("img",{className:"SueWinner",src:"https://res.cloudinary.com/dlmozkbdc/image/upload/v1598153333/Socket/source_q8ozu3.gif"})),l.a.createElement("div",{style:{width:"fit-content"}},l.a.createElement("div",{className:"Headings HeadMain",style:{marginBottom:"70px",marginTop:"50px"}},l.a.createElement("img",{height:"160px",style:{borderRadius:"15px"},src:"https://res.cloudinary.com/dlmozkbdc/image/upload/v1598110619/Socket/undraw_awards_fieb_ltxxwo.svg"})),l.a.createElement("div",null,l.a.createElement("div",{className:"ScoreTable out",style:{marginTop:"50px"}},l.a.createElement("table",{className:"TableScolr"},l.a.createElement("tr",null,l.a.createElement("th",null,"Rank"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"WPM")),t.map((function(e,t){return l.a.createElement("tr",null,l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.nickName),l.a.createElement("td",null,e.WPM))})))))),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("img",{className:"SueWinner",src:"https://res.cloudinary.com/dlmozkbdc/image/upload/v1598153333/Socket/source_q8ozu3.gif"})))}var M=function(e){var t=e.gameState,a=t._id,n=t.players,r=t.words,c=t.isOpen,m=t.isOver,s=function(e){return e.find((function(e){return e.socketID===E.id}))}(n);if(""===a)return l.a.createElement(i.a,{to:"/"});var o=function(e){return e.filter((function(e){return-1!==e.WPM})).sort((function(e,t){return e.WPM>t.WPM?-1:t.WPM>e.WPM?1:0}))}(n);return 0===o.length?l.a.createElement("div",null,l.a.createElement(S,{pattern:1}),!c&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"MainFlexSTartBtn"},l.a.createElement("div",{className:"FlexStartItem1"},l.a.createElement(S,{pattern:2}),l.a.createElement("div",{className:"out MainTyperBlock"},l.a.createElement("div",{className:"ededede"},l.a.createElement(I,{words:r,player:s}),l.a.createElement("div",{className:"typeAbove"},"Type the above words"),l.a.createElement(k,{isOpen:c,isOver:m,gameID:a})))),l.a.createElement("div",{className:"FlexStartItem2"},l.a.createElement("div",{className:"in HRLineStart"})),l.a.createElement("div",{className:"FlexStartItem3"},l.a.createElement(O,{players:n,player:s,wordsLength:r.length})))),l.a.createElement(x,{player:s,gameID:a,players:n})):l.a.createElement(_,{scoreBoard:o})};var C=function(e){return l.a.createElement(i.d,null,l.a.createElement(i.b,{exact:!0,path:"/",component:u}),l.a.createElement(i.b,{exact:!0,path:"/typer/create",component:v}),l.a.createElement(i.b,{exact:!0,path:"/typer/join",component:f}),l.a.createElement(i.b,{exact:!0,path:"/typer/game/:gameID",render:function(){return l.a.createElement(M,{gameState:e.gameState})}}))};var H=Object(i.g)((function(e){var t=Object(n.useState)({_id:"",idOpen:!1,players:[],words:[]}),a=Object(m.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){return E.on("updateGame",(function(e){console.log(e),c(e)})),function(){E.removeAllListeners()}}),[]),Object(n.useEffect)((function(){""!==r._id&&e.history.push("/typer/game/"+r._id)}),[r._id]),l.a.createElement("div",{className:"App"},l.a.createElement(C,Object.assign({},e,{gameState:r})))})),T=a(11);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T.a,null,l.a.createElement(H,null))),document.getElementById("root"))},26:function(e,t,a){},47:function(e,t,a){e.exports=a(104)},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},89:function(e,t){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[47,1,2]]]);
//# sourceMappingURL=main.27729dd1.chunk.js.map