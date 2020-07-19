(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],h=0,d=[];h<i.length;h++)s=i[h],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-toolbar-title",{staticClass:"headline"},[a("span",{staticClass:"font-weight-light"},[t._v("Out of Context")]),a("v-btn",{attrs:{icon:"",href:"https://github.com/TheTechdoodle/out-of-context"}},[a("v-icon",[t._v("mdi-github")])],1)],1),a("v-spacer"),a("dark-switch")],1),a("v-main",[a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[t.$store.state.url.length>0?[t.$store.state.loading?a("v-progress-circular",{attrs:{indeterminate:""}}):a("random-generator")]:[a("data-input")]],2)],1)],1)],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-switch",{attrs:{color:"accent","append-icon":t.icon,"hide-details":"",label:"Dark Mode"},model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}})},i=[],c=a("a002"),l=a.n(c),u={name:"DarkSwitch",computed:{icon(){return"mdi-"+(this.$vuetify.theme.dark?"weather-night":"white-balance-sunny")}},watch:{"$vuetify.theme.dark":function(t){l.a.setItem("theme",t?"dark":"light")}},mounted(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{this.$vuetify.theme.dark=t.matches})}},h=u,d=a("2877"),p=a("6544"),v=a.n(p),f=a("b73d"),m=Object(d["a"])(h,s,i,!1,null,"2a0612d5",null),y=m.exports;v()(m,{VSwitch:f["a"]});var b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-text",[a("p",{staticClass:"text-h4"},[t._v(t._s(t.statement))])]),a("v-card-actions",[a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",[a("v-btn",{attrs:{color:"success",large:""},on:{click:function(e){return t.regenerate()}}},[t._v(" Regenerate ")]),a("p",{staticClass:"text-caption font-weight-light"},[t._v("or press space")]),a("Keypress",{attrs:{"key-event":"keyup","key-code":32},on:{success:function(e){return t.regenerate()}}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"col-12 col-md-5"},[a("text-share",{attrs:{value:t.shareUrl,label:"Link"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"col-12 col-md-7"},[a("v-expansion-panels",[a("v-expansion-panel",[a("v-expansion-panel-header",[t._v("History")]),a("v-expansion-panel-content",[t.history.length>0?a("v-btn",{staticClass:"mb-3",attrs:{color:"error"},on:{click:t.clearHistory}},[t._v(" Clear History ")]):t._e(),a("v-list-item-group",t._l(t.history,(function(e){return a("v-list-item",{key:e.seed,on:{click:function(a){return t.regenerate(e.seed)}}},[a("v-list-item-content",[t._v(t._s(e.statement))]),a("v-list-item-icon",[a("v-icon",[t._v("mdi-backup-restore")])],1)],1)})),1)],1)],1)],1)],1)],1)],1)],1)],1)},g=[],w=a("e1bd"),x=a("365a"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",{attrs:{readonly:"",value:t.value,label:t.label}},[a("template",{slot:"append"},[a("v-btn",{attrs:{icon:"",title:"Copy to Clipboard",color:t.copyColor},on:{click:t.copy}},[a("v-icon",[t._v("mdi-clipboard-arrow-right-outline")])],1),t.canShare?a("v-btn",{attrs:{icon:"",title:"Share"},on:{click:t.share}},[a("v-icon",[t._v("mdi-share-variant")])],1):t._e()],1)],2)},_=[],V={name:"TextShare",props:{value:String,label:String,description:String},data:()=>({copyColor:""}),watch:{value(){this.copyColor=""}},methods:{copy(){window.navigator.clipboard.writeText((this.description?this.description+" - ":"")+this.value).then(()=>{this.copyColor="success"})},share(){window.navigator.share({url:this.value,text:this.description})}},computed:{canShare(){return window.navigator.hasOwnProperty("share")}}},k=V,C=a("8336"),O=a("132d"),T=a("8654"),$=Object(d["a"])(k,S,_,!1,null,"5b382968",null),j=$.exports;v()($,{VBtn:C["a"],VIcon:O["a"],VTextField:T["a"]});const E=a("ae97");function I(t,e){return t[Math.floor(e()*t.length)]}var P={name:"RandomGenerator",components:{TextShare:j,Keypress:x["a"]},data:()=>({statement:"",seedStr:"",history:[]}),methods:{regenerate(t){this.seedStr=t||Object(w["a"])(5);const e=E(this.seedStr);this.statement=I(this.$store.state.dataset,e),t||(this.history.unshift({statement:this.statement,seed:this.seedStr}),this.history.length>10&&this.history.pop(),l.a.setItem("history",this.history))},clearHistory(){this.history=[],l.a.setItem("history",[])}},computed:{hashData(){return{seed:this.seedStr,url:this.$store.state.url}},shareUrl(){let t=new URL(window.location);return t.hash=btoa(JSON.stringify(this.hashData)),t.toString()}},created(){l.a.getItem("history").then(t=>{this.history=t||[],this.regenerate(this.$store.state.startingSeed)})}},D=P,L=a("b0af"),A=a("99d9"),R=a("62ad"),M=a("a523"),U=a("cd55"),G=a("49e2"),H=a("c865"),J=a("0393"),N=a("da13"),B=a("5d23"),F=a("1baa"),K=a("34c3"),q=a("0fd9"),z=Object(d["a"])(D,b,g,!1,null,"2fcd05f4",null),Q=z.exports;v()(z,{VBtn:C["a"],VCard:L["a"],VCardActions:A["a"],VCardText:A["b"],VCol:R["a"],VContainer:M["a"],VExpansionPanel:U["a"],VExpansionPanelContent:G["a"],VExpansionPanelHeader:H["a"],VExpansionPanels:J["a"],VIcon:O["a"],VListItem:N["a"],VListItemContent:B["a"],VListItemGroup:F["a"],VListItemIcon:K["a"],VRow:q["a"]});const W="SET_DATASET",X="SET_URL",Y="SET_LOADING",Z="SET_STARTING_SEED",tt="LOAD_DATASET";var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[t._v("Data Input")]),a("v-card-text",[a("v-text-field",{attrs:{type:"url",label:"Plaintext URL"},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),a("text-share",{attrs:{label:"Out of Context URL",value:t.outOfContextUrl}})],1)],1)},at=[],rt={name:"DataInput",components:{TextShare:j},data:()=>({url:""}),computed:{outOfContextUrl(){let t=new URL(window.location);return t.hash=btoa(JSON.stringify({url:this.url})),t.toString()}}},nt=rt,ot=Object(d["a"])(nt,et,at,!1,null,"eae3ec24",null),st=ot.exports;v()(ot,{VCard:L["a"],VCardText:A["b"],VCardTitle:A["c"],VTextField:T["a"]});var it={name:"App",components:{DataInput:st,RandomGenerator:Q,DarkSwitch:y},mounted(){const t=window.location.hash.replace("#","");if(t.length>0){const e=JSON.parse(atob(t));e.seed&&this.$store.commit(Z,e.seed),this.$store.dispatch(tt,e.url)}}},ct=it,lt=a("7496"),ut=a("40dc"),ht=a("f6c4"),dt=a("490a"),pt=a("2fa4"),vt=a("2a7f"),ft=Object(d["a"])(ct,n,o,!1,null,null,null),mt=ft.exports;v()(ft,{VApp:lt["a"],VAppBar:ut["a"],VBtn:C["a"],VCol:R["a"],VContainer:M["a"],VIcon:O["a"],VMain:ht["a"],VProgressCircular:dt["a"],VRow:q["a"],VSpacer:pt["a"],VToolbarTitle:vt["a"]});var yt=a("f309"),bt=a("2f62");r["a"].use(bt["a"]);var gt=new bt["a"].Store({state:{dataset:[],url:"",loading:!1,startingSeed:""},mutations:{[W](t,e){t.dataset=e},[X](t,e){t.url=e},[Y](t,e){t.loading=e},[Z](t,e){t.startingSeed=e}},actions:{async[tt]({commit:t},e){t(Y,!0),t(X,e);try{t(W,(await fetch(e).then(t=>t.text())).split("\n").filter(t=>t.length>0))}catch(a){}t(Y,!1)}},modules:{}});l.a.config({name:"out-of-context"}),r["a"].config.productionTip=!1,r["a"].use(yt["a"]),(async()=>{let t=await l.a.getItem("theme");t||(t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),new r["a"]({vuetify:new yt["a"]({theme:{dark:"light"!==t}}),store:gt,render:function(t){return t(mt)}}).$mount("#app")})()}});
//# sourceMappingURL=app.24f98b95.js.map