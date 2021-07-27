(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{45:function(t,n,e){},65:function(t,n,e){"use strict";e.r(n);var r,a,o,i,c,s,p,d,l,u,x,h,b,f,g,m=e(1),j=e.n(m),w=e(15),k=e.n(w),O=e(5),v=e(3),y=e(4),C=y.b.div(r||(r=Object(v.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: var(--clr-red-dark);\n\tpadding: 0.3rem 0;\n\toverflow-y: auto;\n\tuser-select: none;\n"]))),S=(e(45),Object(y.a)(a||(a=Object(v.a)(['\n    :root {\n        --clr-yellow: #FFDE00;\n        --clr-yellow-dark: #B3A125;\n        --clr-yellow-shadow: #8C7D1D;\n        --clr-blue: #3B4CCA;\n        --clr-red: #FF0000;\n        --clr-red-dark: #CC0000;\n    }\n    \n    *,\n    *:before,\n    *:after {\n        box-sizing: inherit;\n    }\n\n    html {\n        box-sizing: border-box;\n        width: 100vw;\n        height: 100vh;\n        margin: 0px;\n        padding: 0px;\n        overflow: hidden;\n        scroll-behavior: smooth\n    }\n\n    body {\n        font-family: "Pixel Art", Arial, Helvetica, sans-serif;\n        width: 100%;\n        height: 100%;\n        margin: 0px;\n        padding: 0px;\n        overflow: hidden;\n    }\n\n    #root {\n        width: 100%;\n        height: 100%;\n    }\n\n    h1, \n    h2, \n    h3, \n    h4, \n    h5, \n    h6 {\n        margin: 0;\n    }\n    \n    //? the background-color is to know that the element is in fact there\n    input,\n    textarea,\n    button {\n        all: unset;\n        background-color: lightgray;\n    }\n\n    img {\n        width: 100%;\n        height: auto;\n    }\n'])))),A=y.b.h1(o||(o=Object(v.a)(["\n\twidth: 95%;\n\tdisplay: block;\n\tmargin: auto;\n\tfont-family: 'Pok\xe9mon Solid', Arial, Helvetica, sans-serif;\n\tfont-size: 4.5em;\n\ttext-align: center;\n\ttext-shadow: 4px 4px 3px black, 4px 4px 15px black;\n\tcolor: var(--clr-yellow);\n\t-webkit-text-stroke: 3px var(--clr-blue);\n\tposition: relative;\n\tuser-select: none;\n\tcursor: pointer;\n\n\t& .title-character {\n\t\tdisplay: inline-block;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tmargin-block-start: 0;\n\t\tmargin-block-end: 0;\n\t\tmargin-inline-start: 0;\n\t\tmargin-inline-end: 0;\n\t}\n\n\t& .title-character__on-top {\n\t\tposition: relative;\n\t}\n\n\t& .title-character-4,\n\t.title-character-6 {\n\t\ttransform: rotate(-2deg);\n\t}\n"]))),N=e(10),D=e(36),U=e(8),E=e(7),L=e.n(E),_=e(13),B=e(9),I=e.n(B),P=e(33),R=Object(U.b)("pokeList/getpokeList",function(){var t=Object(_.a)(L.a.mark((function t(n){var e,r,a,o,i,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(P.setupCache)({maxAge:6048e5}),r=I.a.create({adapter:e.adapter}),t.next=4,r({url:n,method:"get"});case 4:return a=t.sent.data,o=a.next,i=a.results,c=i.map((function(t){return t.name})),t.abrupt("return",{nextUrl:o,pokeList:c});case 9:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()),T=Object(U.b)("singlePoke/getSinglePoke",function(){var t=Object(_.a)(L.a.mark((function t(n){var e,r,a,o,i,c,s;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://pokeapi.co/api/v2/pokemon/",r="https://pokeapi.co/api/v2/pokemon-species/",i=function(){var t=n;if("number"!==typeof n){var e=t.replaceAll(" ","-");return(t=e).split("-").map((function(t){return"galarian"===t?"galar":"alolan"===t?"alola":t})).join("-")}return n}(),c=function(){var t=Object(_.a)(L.a.mark((function t(n){var i,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I()("".concat(r).concat(n));case 2:return i=t.sent,t.next=5,I()("".concat(e).concat(i.data.id));case 5:return c=t.sent,t.next=8,i.data;case 8:return o=t.sent,t.next=11,c.data;case 11:a=t.sent;case 12:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),s=function(){var t=Object(_.a)(L.a.mark((function t(n){var i,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I()("".concat(e).concat(n));case 2:return i=t.sent,t.next=5,I()("".concat(r).concat(i.data.species.name));case 5:return c=t.sent,t.next=8,i.data;case 8:return a=t.sent,t.next=11,c.data;case 11:o=t.sent;case 12:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),t.prev=6,t.next=9,c(i);case 9:t.next=31;break;case 11:return t.prev=11,t.t0=t.catch(6),t.prev=13,t.next=16,s(i);case 16:t.next=31;break;case 18:return t.prev=18,t.t1=t.catch(13),(i=i.split("-")).unshift(i.pop()),i=i.join("-"),t.prev=23,t.next=26,s(i);case 26:t.next=31;break;case 28:throw t.prev=28,t.t2=t.catch(23),new Error(t.t2);case 31:return t.abrupt("return",{pokeData:a,speciesData:o});case 32:case"end":return t.stop()}}),t,null,[[6,11],[13,18],[23,28]])})));return function(n){return t.apply(this,arguments)}}()),F=Object(U.c)({name:"pokeCards",initialState:{currentUrl:"https://pokeapi.co/api/v2/pokemon?offset=0&limit=12",nextUrl:"",fetchMore:!0,showSingle:!1,isLoading:!1,isError:!1,pokeCards:[],singleCard:{}},reducers:{changeCurrentUrl:function(t,n){var e=n.payload;t.currentUrl=e,t.fetchMore=!0},setShowSingle:function(t,n){var e=n.payload;t.showSingle=e,!1===e&&(t.isError=!1)}},extraReducers:(i={},Object(N.a)(i,R.pending,(function(t){t.fetchMore=!1,t.isLoading=!0,t.isError=!1})),Object(N.a)(i,R.fulfilled,(function(t,n){var e,r=n.payload;t.fetchMore=!1,t.isLoading=!1,(e=t.pokeCards).push.apply(e,Object(D.a)(r.pokeList)),t.nextUrl=r.nextUrl})),Object(N.a)(i,R.rejected,(function(t){t.isLoading=!1,t.isError=!0})),Object(N.a)(i,T.pending,(function(t){t.isLoading=!0,t.showSingle=!0,t.isError=!1})),Object(N.a)(i,T.fulfilled,(function(t,n){var e=n.payload;t.isLoading=!1,t.singleCard=e})),Object(N.a)(i,T.rejected,(function(t){t.isLoading=!1,t.isError=!0})),i)}),W=F.actions,z=W.changeCurrentUrl,H=W.setShowSingle,J=F.reducer,M=e(2),Q=function(){var t=Object(O.b)();return Object(M.jsxs)(A,{onClick:function(){return t(H(!1))},"data-testid":"app-title",children:[Object(M.jsx)("p",{className:"title-character title-character-1",children:"P"}),Object(M.jsx)("p",{className:"title-character title-character-2 title-character__on-top",children:"o"}),Object(M.jsx)("p",{className:"title-character title-character-3",children:"k"}),Object(M.jsx)("p",{className:"title-character title-character-4 title-character__on-top",children:"\xe9"}),Object(M.jsx)("p",{className:"title-character title-character-5",children:"d"}),Object(M.jsx)("p",{className:"title-character title-character-6 title-character__on-top",children:"e"}),Object(M.jsx)("p",{className:"title-character title-character-7",children:"x"})]})},Z=e(17),G=e(34),V=y.b.button(c||(c=Object(v.a)(["\n\twidth: ",";\n\tmax-width: ",";\n\tmin-height: ",";\n\tpadding: ",";\n\tmargin: ",";\n\tdisplay: flex;\n\t-webkit-box-shadow: inset 0px 0px 10px 1px var(--clr-yellow-shadow),\n\t\t4px 4px 3px -1px black;\n\tbox-shadow: inset 0px 0px 10px 1px var(--clr-yellow-shadow),\n\t\t4px 4px 3px -1px black;\n\tborder: 3px solid var(--clr-blue);\n\tborder-radius: 7px;\n\tbackground-color: var(--clr-yellow);\n\ttransition: all 0.1s ease;\n\n\t:active {\n\t\ttransform: translate(1px, 1px);\n\t\t-webkit-box-shadow: inset 0px 0px 10px 1px var(--clr-yellow-shadow),\n\t\t\t3px 3px 2px -2px black;\n\t\tbox-shadow: inset 0px 0px 10px 1px var(--clr-yellow-shadow),\n\t\t\t3px 3px 2px -2px black;\n\t}\n\n\t:hover {\n\t\tcursor: pointer;\n\t}\n\n\t& :first-child {\n\t\tmargin: auto;\n\t\tcolor: var(--clr-blue);\n\t\ttext-align: center;\n\t\ttext-transform: uppercase;\n\t}\n\n\t:disabled {\n\t\tbackground-color: var(--clr-red);\n\t\tpointer-events: none;\n\t}\n"])),(function(t){return t.props.width?t.props.width:""}),(function(t){return t.props.maxWidth?t.props.maxWidth:""}),(function(t){return t.props.minHeight?t.props.minHeight:""}),(function(t){return t.props.padding?t.props.padding:""}),(function(t){return t.props.margin?t.props.margin:"0 auto"})),Y=function(t){var n=t.testid,e=t.aria,r=t.type,a=t.btnStyles,o=t.onClick,i=t.content,c=t.disabled;return Object(M.jsx)(V,{type:r,"aria-label":e,"data-testid":n,onClick:o,props:a,disabled:c,children:i})},q=y.b.form(s||(s=Object(v.a)(["\n\twidth: 100%;\n\tmargin: 0 auto;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tpadding-right: 0.2rem;\n\n\t& input {\n\t\tmargin: 0 0.5rem 0 0;\n\t\tborder: 3px solid var(--clr-blue);\n\t\tborder-radius: 7px;\n\t\tbackground-color: var(--clr-yellow);\n\t\twidth: 75%;\n\t\t-webkit-box-shadow: inset 1px 1px 2px 2px var(--clr-yellow-shadow),\n\t\t\t4px 4px 3px -1px black;\n\t\tbox-shadow: inset 1px 1px 2px 2px var(--clr-yellow-shadow),\n\t\t\t4px 4px 3px -1px black;\n\t\tpadding: 5px 10px;\n\n\t\t::placeholder {\n\t\t\tcolor: var(--clr-blue);\n\t\t}\n\t}\n\n\t& button {\n\t\tmargin: 0 0 0 auto;\n\t}\n"]))),K=function(){var t=Object(O.b)(),n=Object(m.useState)(""),e=Object(Z.a)(n,2),r=e[0],a=e[1];return Object(M.jsxs)(q,{onSubmit:function(n){n.preventDefault(),r&&t(T(r)),a("")},children:[Object(M.jsx)("input",{value:r,onChange:function(t){a(t.target.value)},type:"text",placeholder:"Search..."}),Object(M.jsx)(Y,{aria:"search pok\xe9mon from the searchbar",type:"submit",testid:"search-more-btn",btnStyles:{width:"18%",maxWidth:"auto",padding:"0.5rem"},content:Object(M.jsx)(G.a,{})})]})},X=e(35),$=e(19),tt=function(t,n){return{addDefaultSrc:function(e){e.target.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png"),t(!0)}}},nt=y.b.img(p||(p=Object(v.a)(["\n\twidth: 110px;\n\theight: 110px;\n"]))),et=function(t){var n=t.sprite,e=t.pokeName,r=t.id,a=Object(m.useState)(!1),o=Object(Z.a)(a,2),i=o[0],c=o[1],s=tt(c,r).addDefaultSrc;return Object(M.jsx)(nt,{src:n,onError:function(t){return s(t)},alt:"sprite of ".concat(e),broken:i})},rt=y.b.div(d||(d=Object(v.a)(["\n\twidth: ",";\n\theight: ",";\n\tmargin: ",";\n\tborder: 1px solid black;\n\tborder-radius: 12px;\n\tletter-spacing: 3px;\n\tbackground-color: white;\n\tdisplay: grid;\n\tgrid-template-rows: ",";\n\n\t:hover {\n\t\tcursor: ",";\n\t}\n\n\t@media (min-width: 576px) {\n\t\tgrid-template-columns: ",";\n\t\tgrid-template-rows: ",";\n\t}\n"])),(function(t){return t.showSingle?"100%":"220px"}),(function(t){return t.showSingle?"95%":"240px"}),(function(t){return t.showSingle?"auto":"0rem auto 1.5rem auto"}),(function(t){return t.showSingle?"auto":"10% 80% 10%"}),(function(t){return!t.showSingle&&"pointer"}),(function(t){return t.showSingle?"36% 32% 32%":"auto"}),(function(t){return t.showSingle?"10% 10% 10% 10% 10% 50%":"10% 80% 10%"})),at=y.b.div(l||(l=Object(v.a)(["\n\toverflow: auto;\n\tdisplay: flex;\n\tborder: 1px solid black;\n\tpadding: ",";\n\tbackground-color: ",";\n\tcolor: white;\n\tborder-radius: ",";\n\tbackground-image: ",";\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\n\t@media (min-width: 576px) {\n\t\tgrid-column: ",";\n\t\tgrid-row: ",";\n\t\tborder-left: ",";\n\t\tborder-right: ",";\n\t\tborder-radius: ",";\n\t\tbackground-image: ",";\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: center;\n\t}\n"])),(function(t){return t.showSingle&&"sprite"!==t.typeOfContent&&"flavor-text"!==t.typeOfContent&&"0.3rem 0"}),(function(t){return"sprite"===t.typeOfContent?"white":"var(--clr-blue)"}),(function(t){var n=t.typeOfContent;return t.showSingle?"number"===n?"10px 10px 0px 0px":"flavor-text"===n&&"0px 0px 10px 10px":"number"===n?"10px 10px 0px 0px":"name"===n&&"0px 0px 10px 10px"}),(function(t){return"sprite"===t.typeOfContent&&!t.showSingle&&"url('https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg')"}),(function(t){var n=t.typeOfContent;return t.showSingle?"sprite"===n?"1/2":"number"===n?"2/3":"name"===n?"3/4":"flavor-text"===n?"1/4":"2/4":"auto"}),(function(t){var n=t.typeOfContent;return t.showSingle?"sprite"===n?"1/6":"number"===n||"name"===n?"1/2":"category"===n?"2/3":"types"===n?"3/4":"height"===n?"4/5":"weight"===n?"5/6":"6/7":"auto"}),(function(t){return t.showSingle&&"name"===t.typeOfContent&&"none"}),(function(t){return t.showSingle&&"number"===t.typeOfContent&&"none"}),(function(t){var n=t.typeOfContent;return t.showSingle?"name"===n?"0px 10px 0px 0px":"flavor-text"===n?"0px 0px 10px 10px":"sprite"===n?"10px 0px 0px 0px":"0px":"number"===n?"10px 10px 0px 0px":"name"===n&&"0px 0px 10px 10px"}),(function(t){return"sprite"===t.typeOfContent&&"url('https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg')"})),ot=y.b.div(u||(u=Object(v.a)(["\n\tdisplay: flex;\n\tjustify-content: ",";\n\twidth: 100%;\n\tmargin: ",";\n\tpadding: ",";\n\tborder-radius: ",";\n\t-webkit-box-shadow: ",";\n\tbox-shadow: ",";\n\tbackground-color: ",";\n\tcolor: ",";\n\toverflow: hidden;\n\n\t& {\n\t\ttext-transform: ",";\n\t}\n\n\t& * {\n\t\toverflow-y: auto;\n\t\toverflow-x: hidden;\n\t}\n\n\t@media (min-width: 576px) {\n\t\tjustify-content: ","\n"])),(function(t){return"sprite"!==t.typeOfContent&&t.showSingle?"space-between":"center"}),(function(t){return"flavor-text"!==t.typeOfContent?"auto 0":"1rem"}),(function(t){return"sprite"===t.typeOfContent?"0":"flavor-text"===t.typeOfContent?"0.4rem 1rem":"0 0.5rem"}),(function(t){return"flavor-text"===t.typeOfContent&&"10px"}),(function(t){return"flavor-text"===t.typeOfContent&&"inset 0.5rem 0px 0px 0.2rem #C72424, inset -0.5rem 0px 0px 0.2rem #C72424"}),(function(t){return"flavor-text"===t.typeOfContent&&"inset 0.5rem 0px 0px 0.2rem #C72424, inset -0.5rem 0px 0px 0.2rem #C72424"}),(function(t){return"flavor-text"===t.typeOfContent&&"white"}),(function(t){return"flavor-text"===t.typeOfContent&&"black"}),(function(t){return"flavor-text"===t.typeOfContent?"none":"capitalize"}),(function(t){return"sprite"!==t.typeOfContent&&t.showSingle?"name"===t.typeOfContent?"flex-end":"space-between":"center"})),it={normal:"#bdbdae",fire:"#f95442",fighting:"#707070",water:"#55aeff",flying:"#79a4ff",grass:"#8bd650",poison:"#aa5da1",electric:"#fee93f",ground:"#edcb56",psychic:"#fa65b5",rock:"#cdbc72",ice:"#96f1ff",bug:"#c2d21f",dragon:"#8975ff",ghost:"#7874d4",dark:"#8e6956",steel:"#c4c2db",fairy:"#f9adff"},ct=y.b.div(x||(x=Object(v.a)(["\n\tbackground-color: ",";\n\tborder-radius: 5px;\n\twidth: 125px;\n\tpadding: 2px;\n\ttext-align: center;\n\tborder: 2px solid black;\n\ttext-shadow: 2px 2px 0px black;\n\t-webkit-box-shadow: inset 0px -0.5rem 0px 0px rgba(0, 0, 0, 0.3);\n\tbox-shadow: inset 0px -0.5rem 0px 0px rgba(0, 0, 0, 0.3);\n"])),(function(t){return it[t.pokeType]})),st=function(t){var n=t.pokeName,e=t.id,r=t.content;if("number"===e)return{contentToShow:"#".concat(r.toString().padStart(3,"0"))};if("category"===e)return{contentToShow:r.filter((function(t){return"en"===t.language.name}))[0].genus};if("types"===e)return{contentToShow:r.map((function(t,e){return Object(M.jsx)(ct,{pokeType:t.type.name,className:"card-poke-type",children:t.type.name},"".concat(n," type n\xba ").concat(e+1))}))};if("height"===e||"weight"===e){var a=[e,(.1*r).toFixed(1)],o=function(t,n){return 0===n?t:"".concat(t,"height"===e?"m":"kg")};return{contentToShow:a.map((function(t,r){return Object(M.jsx)("div",{children:o(t,r)},"".concat(e," of ").concat(n," - item ").concat(r+1))}))}}if("flavor-text"===e){var i=r.filter((function(t){return"en"===t.language.name}));return{contentToShow:Object(M.jsx)("div",{children:i[i.length-1].flavor_text})}}return{contentToShow:r}},pt=function(t){var n=t.pokeName,e=t.id,r=t.content,a=st({pokeName:n,id:e,content:r}).contentToShow,o=Object(O.c)((function(t){return t.pokeCards})).showSingle;return Object(M.jsx)(at,{showSingle:o,typeOfContent:e,className:"".concat(e,"-container"),children:Object(M.jsx)(ot,{showSingle:o,typeOfContent:e,id:"".concat(e,"-of-").concat(n),className:"".concat(e,"-item"),children:a})})},dt=function(t){var n=t.pokeName,e=t.id,r=Object(O.c)((function(t){return t.pokeCards})),a=r.showSingle,o=r.singleCard,i=o.pokeData,c=o.speciesData,s=Object(O.b)();return Object(M.jsxs)(rt,{id:"".concat(n,"-pokemon-card"),onClick:function(){!a&&s(T(n)),s(H(!0))},showSingle:a,children:[Object(M.jsx)(pt,{pokeName:n,id:"number",content:e}),Object(M.jsx)(pt,{pokeName:n,id:"sprite",content:Object(M.jsx)(et,{sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(e,".svg"),pokeName:n,id:e})}),Object(M.jsx)(pt,{pokeName:n,id:"name",content:n}),a&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(pt,{pokeName:n,id:"category",content:c.genera}),Object(M.jsx)(pt,{pokeName:n,id:"types",content:i.types}),Object(M.jsx)(pt,{pokeName:n,id:"height",content:i.height}),Object(M.jsx)(pt,{pokeName:n,id:"weight",content:i.weight}),Object(M.jsx)(pt,{pokeName:n,id:"flavor-text",content:c.flavor_text_entries})]})]})},lt=y.b.div(h||(h=Object(v.a)(["\n\twidth: 100%;\n\theight: 65vh;\n\tmin-height: 500px;\n\tmax-height: 700px;\n\toverflow-y: auto;\n\toverflow-x: hidden;\n\tmargin: 1rem 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding-bottom: 0.3rem;\n\n\t& .cards-holder-nav-bar {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n        padding-right: 0.2rem;\n\n\t\t& > :nth-child(2) {\n\t\t\tmargin: auto 2rem auto auto;\n\t\t}\n        & \n\t}\n\n\t& .container {\n\t\twidth: 100%;\n\t}\n\n\t& .cards {\n\t\twidth: 100%;\n\t\theight: ",";\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}\n\n\t& .ldn-ring-container {\n\t\tdisplay: flex;\n\t\tmargin: auto;\n\n\t\t& .ldn-ring {\n\t\t\tmargin: auto;\n\t\t}\n\t}\n"])),(function(t){return t.showSingle&&!t.isLoading?"100%":"fit-content"})),ut=y.b.div(b||(b=Object(v.a)(["\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 80px;\n\theight: 80px;\n\tmargin: auto;\n\n\t& div {\n\t\tbox-sizing: border-box;\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\twidth: 64px;\n\t\theight: 64px;\n\t\tmargin: 8px;\n\t\tborder: 8px solid var(--clr-blue);\n\t\tborder-radius: 50%;\n\t\tanimation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n\t\tborder-color: var(--clr-blue) transparent transparent transparent;\n\t}\n\t& div:nth-child(1) {\n\t\tanimation-delay: -0.45s;\n\t}\n\t& div:nth-child(2) {\n\t\tanimation-delay: -0.3s;\n\t}\n\t& div:nth-child(3) {\n\t\tanimation-delay: -0.15s;\n\t}\n\t@keyframes lds-ring {\n\t\t0% {\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t\t100% {\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n"]))),xt=function(){return Object(M.jsxs)(ut,{className:"ldn-ring",children:[Object(M.jsx)("div",{}),Object(M.jsx)("div",{}),Object(M.jsx)("div",{}),Object(M.jsx)("div",{})]})},ht=y.b.div(f||(f=Object(v.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\n\t& .error-message {\n\t\twidth: fit-content;\n\t\theight: fit-content;\n\t\tmargin: auto;\n\t\tbackground-color: gray;\n\t}\n"]))),bt=function(){return Object(M.jsx)(ht,{children:Object(M.jsx)("div",{className:"error-message",children:"Sorry, we couldn't find what you're looking for \u2639"})})},ft=function(){var t=Object(O.c)((function(t){return t.pokeCards})),n=t.currentUrl,e=t.nextUrl,r=t.fetchMore,a=t.showSingle,o=t.isLoading,i=t.isError,c=t.pokeCards,s=t.singleCard,p=Object(O.b)();Object(m.useEffect)((function(){r&&!o&&p(R(n))}),[p,r,o,n]);var d={width:"40px",minHeight:"25px",margin:"0px"};return Object(M.jsxs)(lt,{isLoading:o,showSingle:a,"data-testid":"cards-holder",children:[a&&!o&&!i&&Object(M.jsxs)("div",{className:"cards-holder-nav-bar",children:[Object(M.jsx)(Y,{aria:"button to close the pokemon card and go back to showcase all cards",type:"button",btnStyles:d,onClick:function(){return p(H(!1))},content:Object(M.jsx)(X.a,{})}),Object(M.jsx)(Y,{aria:"button to go to the previous pokemon",type:"button",btnStyles:d,onClick:function(){return p(T(s.pokeData.id-1))},content:Object(M.jsx)($.a,{}),disabled:1===s.pokeData.id}),Object(M.jsx)(Y,{aria:"button to go to the next pokemon",type:"button",btnStyles:d,onClick:function(){return p(T(s.pokeData.id+1))},content:Object(M.jsx)($.b,{}),disabled:898===s.pokeData.id})]}),i&&Object(M.jsx)(bt,{}),Object(M.jsx)("div",{"data-testid":"cards-container",className:"container cards",children:a||i?!o&&!i&&Object(M.jsx)(dt,{pokeName:s.pokeData.name,id:s.pokeData.id}):c.map((function(t,n){return Object(M.jsx)(dt,{pokeName:t,id:n+1},t)}))}),Object(M.jsx)("div",{className:"container ldn-ring-container",children:o&&Object(M.jsx)(xt,{"data-testid":"ldn-ring"})}),Object(M.jsx)("div",{className:"container button-container",children:!o&&0!==c.length&&!a&&!i&&Object(M.jsx)(Y,{aria:"search more pok\xe9mon button",type:"button",testid:"search-more-btn",btnStyles:{width:"100%",maxWidth:"150px",padding:"0.5rem 0"},onClick:function(){return p(z(e))},content:Object(M.jsx)("p",{children:"more+"})})})]})},gt=y.b.div(g||(g=Object(v.a)(["\n\tposition: relative;\n\twidth: 97%;\n\tmax-width: 768px;\n\tmargin: 0 auto 2rem auto;\n\tpadding: ",";\n\tborder-radius: 15px;\n\tbackground-image: url(",");\n\t-webkit-box-shadow: inset 5px 5px 2px 2px #6f6f6f, 5px 5px 2px 2px #5b0000;\n\tbox-shadow: inset 5px 5px 2px 2px #6f6f6f, 5px 5px 2px 2px #5b0000;\n\n\t:before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tborder-radius: inherit;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tpointer-events: none;\n\t\t-webkit-box-shadow: inset 0px 0px 39px -9px #000000;\n\t\tbox-shadow: inset 0px 0px 39px -9px #000000;\n\t}\n"])),(function(t){return t.padding||0}),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAABoSURBVGhD7dpBCoAwDADB6sfbnyuI+oZVZi6FnLrkmm3OeYwf2O/3896NrLWuwdc8//7NRoTUCKkRUiOkRkiNkBohNUJqhNQIqRFSI6RGSI2QGiE1QmqE1AipEVIjpEZIjZAa91otY5yWWArWN84H5wAAAABJRU5ErkJggg=="),mt=function(){return Object(M.jsxs)(C,{children:[Object(M.jsx)(S,{}),Object(M.jsx)("header",{children:Object(M.jsx)(gt,{children:Object(M.jsx)(Q,{})})}),Object(M.jsx)("main",{children:Object(M.jsxs)(gt,{padding:"1rem 2rem",children:[Object(M.jsx)(K,{}),Object(M.jsx)(ft,{})]})}),Object(M.jsx)("footer",{})]})},jt=Object(U.a)({reducer:{pokeCards:J}});k.a.render(Object(M.jsx)(j.a.StrictMode,{children:Object(M.jsx)(O.a,{store:jt,children:Object(M.jsx)(mt,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.85a6b0da.chunk.js.map