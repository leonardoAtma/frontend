export const id=26675;export const ids=[26675,2315,99282];export const modules={63864:(t,e,o)=>{o.d(e,{I:()=>i,_:()=>a});const i=(t,e,o,i)=>{const[a,r,n]=t.split(".",3);return Number(a)>e||Number(a)===e&&(void 0===i?Number(r)>=o:Number(r)>o)||void 0!==i&&Number(a)===e&&Number(r)===o&&Number(n)>=i},a=t=>t.includes("dev")},25516:(t,e,o)=>{o.d(e,{i:()=>a});const i=(0,o(8330).P)((t=>{history.replaceState({scrollPosition:t},"")}),300),a=t=>e=>({kind:"method",placement:"prototype",key:e.key,descriptor:{set(t){i(t),this[`__${String(e.key)}`]=t},get(){var t;return this[`__${String(e.key)}`]||(null===(t=history.state)||void 0===t?void 0:t.scrollPosition)},enumerable:!0,configurable:!0},finisher(o){const i=o.prototype.connectedCallback;o.prototype.connectedCallback=function(){i.call(this);const o=this[e.key];o&&this.updateComplete.then((()=>{const e=this.renderRoot.querySelector(t);e&&setTimeout((()=>{e.scrollTop=o}),0)}))}}})},68307:(t,e,o)=>{o.d(e,{K:()=>i});const i=t=>{switch(null==t?void 0:t.language){case"cz":case"de":case"fi":case"fr":case"sk":case"sv":return" ";default:return""}}},8330:(t,e,o)=>{o.d(e,{P:()=>i});const i=(t,e,o=!0,i=!0)=>{let a,r=0;const n=(...n)=>{const s=()=>{r=!1===o?0:Date.now(),a=void 0,t(...n)},l=Date.now();r||!1!==o||(r=l);const d=e-(l-r);d<=0||d>e?(a&&(clearTimeout(a),a=void 0),r=l,t(...n)):a||!1===i||(a=window.setTimeout(s,d))};return n.cancel=()=>{clearTimeout(a),a=void 0,r=0},n}},22098:(t,e,o)=>{var i=o(17463),a=o(68144),r=o(79932);(0,i.Z)([(0,r.Mo)("ha-card")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,r.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"raised",value:()=>!1},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,none);box-sizing:border-box;border-radius:var(--ha-card-border-radius,12px);border-width:var(--ha-card-border-width,1px);border-style:solid;border-color:var(--ha-card-border-color,var(--divider-color,#e0e0e0));color:var(--primary-text-color);display:block;transition:all .3s ease-out;position:relative}:host([raised]){border:none;box-shadow:var(--ha-card-box-shadow,0px 2px 1px -1px rgba(0,0,0,.2),0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12))}.card-header,:host ::slotted(.card-header){color:var(--ha-card-header-color,--primary-text-color);font-family:var(--ha-card-header-font-family, inherit);font-size:var(--ha-card-header-font-size, 24px);letter-spacing:-.012em;line-height:48px;padding:12px 16px 16px;display:block;margin-block-start:0px;margin-block-end:0px;font-weight:400}:host ::slotted(.card-content:not(:first-child)),slot:not(:first-child)::slotted(.card-content){padding-top:0px;margin-top:-8px}:host ::slotted(.card-content){padding:16px}:host ::slotted(.card-actions){border-top:1px solid var(--divider-color,#e8e8e8);padding:5px 16px}`}},{kind:"method",key:"render",value:function(){return a.dy` ${this.header?a.dy`<h1 class="card-header">${this.header}</h1>`:a.Ld} <slot></slot> `}}]}}),a.oi)},2315:(t,e,o)=>{o.r(e),o.d(e,{HaIconButtonArrowPrev:()=>s});var i=o(17463),a=o(68144),r=o(79932),n=o(30418);o(10983);let s=(0,i.Z)([(0,r.Mo)("ha-icon-button-arrow-prev")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_icon",value:()=>"rtl"===n.E.document.dir?"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z":"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"},{kind:"method",key:"render",value:function(){var t;return a.dy` <ha-icon-button .disabled="${this.disabled}" .label="${this.label||(null===(t=this.hass)||void 0===t?void 0:t.localize("ui.common.back"))||"Back"}" .path="${this._icon}"></ha-icon-button> `}}]}}),a.oi)},10983:(t,e,o)=>{o.r(e),o.d(e,{HaIconButton:()=>s});var i=o(17463),a=(o(20210),o(68144)),r=o(79932),n=o(30153);o(52039);let s=(0,i.Z)([(0,r.Mo)("ha-icon-button")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:String})],key:"path",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:String})],key:"label",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:String,attribute:"aria-haspopup"})],key:"ariaHasPopup",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"hideTitle",value:()=>!1},{kind:"field",decorators:[(0,r.IO)("mwc-icon-button",!0)],key:"_button",value:void 0},{kind:"method",key:"focus",value:function(){var t;null===(t=this._button)||void 0===t||t.focus()}},{kind:"field",static:!0,key:"shadowRootOptions",value:()=>({mode:"open",delegatesFocus:!0})},{kind:"method",key:"render",value:function(){return a.dy` <mwc-icon-button aria-label="${(0,n.o)(this.label)}" title="${(0,n.o)(this.hideTitle?void 0:this.label)}" aria-haspopup="${(0,n.o)(this.ariaHasPopup)}" .disabled="${this.disabled}"> ${this.path?a.dy`<ha-svg-icon .path="${this.path}"></ha-svg-icon>`:a.dy`<slot></slot>`} </mwc-icon-button> `}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{display:inline-block;outline:0}:host([disabled]){pointer-events:none}mwc-icon-button{--mdc-theme-on-primary:currentColor;--mdc-theme-text-disabled-on-light:var(--disabled-text-color)}`}}]}}),a.oi)},99282:(t,e,o)=>{o.r(e),o.d(e,{HaIconNext:()=>s});var i=o(17463),a=o(79932),r=o(30418),n=o(52039);let s=(0,i.Z)([(0,a.Mo)("ha-icon-next")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,a.Cb)()],key:"path",value:()=>"rtl"===r.E.document.dir?"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z":"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}]}}),n.HaSvgIcon)},73366:(t,e,o)=>{o.d(e,{M:()=>c});var i=o(17463),a=o(34541),r=o(47838),n=o(61092),s=o(96762),l=o(68144),d=o(79932);let c=(0,i.Z)([(0,d.Mo)("ha-list-item")],(function(t,e){class o extends e{constructor(...e){super(...e),t(this)}}return{F:o,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,a.Z)((0,r.Z)(o.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[s.W,l.iv`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`,"rtl"===document.dir?l.iv`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important}`:l.iv``]}}]}}),n.K)},48932:(t,e,o)=>{var i=o(17463),a=o(34541),r=o(47838),n=o(68144),s=o(79932),l=o(47181),d=o(6936);o(10983);(0,i.Z)([(0,s.Mo)("ha-menu-button")],(function(t,e){class o extends e{constructor(...e){super(...e),t(this)}}return{F:o,d:[{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"hassio",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_hasNotifications",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_show",value:()=>!1},{kind:"field",key:"_alwaysVisible",value:()=>!1},{kind:"field",key:"_attachNotifOnConnect",value:()=>!1},{kind:"field",key:"_unsubNotifications",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,r.Z)(o.prototype),"connectedCallback",this).call(this),this._attachNotifOnConnect&&(this._attachNotifOnConnect=!1,this._subscribeNotifications())}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,r.Z)(o.prototype),"disconnectedCallback",this).call(this),this._unsubNotifications&&(this._attachNotifOnConnect=!0,this._unsubNotifications(),this._unsubNotifications=void 0)}},{kind:"method",key:"render",value:function(){if(!this._show)return n.Ld;const t=this._hasNotifications&&(this.narrow||"always_hidden"===this.hass.dockedSidebar);return n.dy` <ha-icon-button .label="${this.hass.localize("ui.sidebar.sidebar_toggle")}" .path="${"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"}" @click="${this._toggleMenu}"></ha-icon-button> ${t?n.dy`<div class="dot"></div>`:""} `}},{kind:"method",key:"firstUpdated",value:function(t){(0,a.Z)((0,r.Z)(o.prototype),"firstUpdated",this).call(this,t),this.hassio&&(this._alwaysVisible=(Number(window.parent.frontendVersion)||0)<20190710)}},{kind:"method",key:"willUpdate",value:function(t){if((0,a.Z)((0,r.Z)(o.prototype),"willUpdate",this).call(this,t),!t.has("narrow")&&!t.has("hass"))return;const e=t.has("hass")?t.get("hass"):this.hass,i=(t.has("narrow")?t.get("narrow"):this.narrow)||"always_hidden"===(null==e?void 0:e.dockedSidebar),n=this.narrow||"always_hidden"===this.hass.dockedSidebar;this.hasUpdated&&i===n||(this._show=n||this._alwaysVisible,n?this._subscribeNotifications():this._unsubNotifications&&(this._unsubNotifications(),this._unsubNotifications=void 0))}},{kind:"method",key:"_subscribeNotifications",value:function(){if(this._unsubNotifications)throw new Error("Already subscribed");this._unsubNotifications=(0,d.r)(this.hass.connection,(t=>{this._hasNotifications=t.length>0}))}},{kind:"method",key:"_toggleMenu",value:function(){(0,l.B)(this,"hass-toggle-menu")}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{position:relative}.dot{pointer-events:none;position:absolute;background-color:var(--accent-color);width:12px;height:12px;top:9px;right:7px;border-radius:50%;border:2px solid var(--app-header-background-color)}`}}]}}),n.oi)},52039:(t,e,o)=>{o.r(e),o.d(e,{HaSvgIcon:()=>n});var i=o(17463),a=o(68144),r=o(79932);let n=(0,i.Z)([(0,r.Mo)("ha-svg-icon")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,r.Cb)()],key:"path",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"secondaryPath",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"viewBox",value:void 0},{kind:"method",key:"render",value:function(){return a.YP` <svg viewBox="${this.viewBox||"0 0 24 24"}" preserveAspectRatio="xMidYMid meet" focusable="false" role="img" aria-hidden="true"> <g> ${this.path?a.YP`<path class="primary-path" d="${this.path}"></path>`:a.Ld} ${this.secondaryPath?a.YP`<path class="secondary-path" d="${this.secondaryPath}"></path>`:a.Ld} </g> </svg>`}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{display:var(--ha-icon-display,inline-flex);align-items:center;justify-content:center;position:relative;vertical-align:middle;fill:var(--icon-primary-color,currentcolor);width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)}svg{width:100%;height:100%;pointer-events:none;display:block}path.primary-path{opacity:var(--icon-primary-opactity, 1)}path.secondary-path{fill:var(--icon-secondary-color,currentcolor);opacity:var(--icon-secondary-opactity, .5)}`}}]}}),a.oi)},45355:(t,e,o)=>{o.d(e,{d:()=>i});const i={"odroid-n2":"Home Assistant Blue / ODROID-N2","odroid-xu4":"ODROID-XU4","odroid-c2":"ODROID-C2","odroid-c4":"ODROID-C4",rpi:"Raspberry Pi",rpi0:"Raspberry Pi Zero","rpi0-w":"Raspberry Pi Zero W",rpi2:"Raspberry Pi 2",rpi3:"Raspberry Pi 3 (32-bit)","rpi3-64":"Raspberry Pi 3",rpi4:"Raspberry Pi 4 (32-bit)","rpi4-64":"Raspberry Pi 4",tinker:"ASUS Tinker Board","khadas-vim3":"Khadas VIM3","generic-aarch64":"Generic AArch64",ova:"Virtual Machine","generic-x86-64":"Generic x86-64","intel-nuc":"Intel NUC",yellow:"Home Assistant Yellow"}},41682:(t,e,o)=>{o.d(e,{js:()=>r,rY:()=>a,yd:()=>l,yz:()=>s});var i=o(63864);const a=t=>t.data,r=t=>"object"==typeof t?"object"==typeof t.body?t.body.message||"Unknown error, see supervisor logs":t.body||t.message||"Unknown error, see supervisor logs":t,n=new Set([502,503,504]),s=t=>!!(t&&t.status_code&&n.has(t.status_code))||!(!t||!t.message||!t.message.includes("ERR_CONNECTION_CLOSED")&&!t.message.includes("ERR_CONNECTION_RESET")),l=async(t,e)=>(0,i.I)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:`/${e}/stats`,method:"get"}):a(await t.callApi("GET",`hassio/${e}/stats`))},35460:(t,e,o)=>{o.d(e,{AP:()=>n,MY:()=>s,Or:()=>l,Sj:()=>r,Sx:()=>c,oJ:()=>d,ou:()=>h});var i=o(63864),a=o(41682);const r=async t=>{if((0,i.I)(t.config.version,2021,2,4))return t.callWS({type:"supervisor/api",endpoint:"/host/info",method:"get"});const e=await t.callApi("GET","hassio/host/info");return(0,a.rY)(e)},n=async t=>(0,i.I)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/os/info",method:"get"}):(0,a.rY)(await t.callApi("GET","hassio/os/info")),s=async t=>(0,i.I)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/host/reboot",method:"post",timeout:null}):t.callApi("POST","hassio/host/reboot"),l=async t=>(0,i.I)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/host/shutdown",method:"post",timeout:null}):t.callApi("POST","hassio/host/shutdown"),d=async(t,e)=>(0,i.I)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/host/options",method:"post",data:e}):t.callApi("POST","hassio/host/options",e),c=async(t,e)=>(0,i.I)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/os/datadisk/move",method:"post",timeout:null,data:{device:e}}):t.callApi("POST","hassio/os/datadisk/move"),h=async t=>(0,i.I)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/os/datadisk/list",method:"get",timeout:null}):(0,a.rY)(await t.callApi("GET","/os/datadisk/list"))},6936:(t,e,o)=>{o.d(e,{r:()=>i});const i=(t,e)=>{const o=new a,i=t.subscribeMessage((t=>e(o.processMessage(t))),{type:"persistent_notification/subscribe"});return()=>{i.then((t=>null==t?void 0:t()))}};class a{constructor(){this.notifications=void 0,this.notifications={}}processMessage(t){if("removed"===t.type)for(const e of Object.keys(t.notifications))delete this.notifications[e];else this.notifications={...this.notifications,...t.notifications};return Object.values(this.notifications)}}},82494:(t,e,o)=>{o.d(e,{s:()=>r});var i=o(47181);const a=()=>Promise.all([o.e(28597),o.e(63436),o.e(66023),o.e(82234)]).then(o.bind(o,82234)),r=t=>{(0,i.B)(t,"show-dialog",{dialogTag:"dialog-restart",dialogImport:a,dialogParams:{}})}},60010:(t,e,o)=>{var i=o(17463),a=o(34541),r=o(47838),n=o(68144),s=o(79932),l=o(25516),d=o(70518),c=o(87744),h=(o(2315),o(48932),o(11654));(0,i.Z)([(0,s.Mo)("hass-subpage")],(function(t,e){class o extends e{constructor(...e){super(...e),t(this)}}return{F:o,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"main-page"})],key:"mainPage",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"backCallback",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"supervisor",value:()=>!1},{kind:"field",decorators:[(0,l.i)(".content")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"willUpdate",value:function(t){if((0,a.Z)((0,r.Z)(o.prototype),"willUpdate",this).call(this,t),!t.has("hass"))return;const e=t.get("hass");e&&e.locale===this.hass.locale||(0,d.X)(this,"rtl",(0,c.HE)(this.hass))}},{kind:"method",key:"render",value:function(){var t;return n.dy` <div class="toolbar"> ${this.mainPage||null!==(t=history.state)&&void 0!==t&&t.root?n.dy` <ha-menu-button .hassio="${this.supervisor}" .hass="${this.hass}" .narrow="${this.narrow}"></ha-menu-button> `:this.backPath?n.dy` <a href="${this.backPath}"> <ha-icon-button-arrow-prev .hass="${this.hass}"></ha-icon-button-arrow-prev> </a> `:n.dy` <ha-icon-button-arrow-prev .hass="${this.hass}" @click="${this._backTapped}"></ha-icon-button-arrow-prev> `} <div class="main-title"><slot name="header">${this.header}</slot></div> <slot name="toolbar-icon"></slot> </div> <div class="content ha-scrollbar" @scroll="${this._saveScrollPos}"> <slot></slot> </div> <div id="fab"> <slot name="fab"></slot> </div> `}},{kind:"method",decorators:[(0,s.hO)({passive:!0})],key:"_saveScrollPos",value:function(t){this._savedScrollPos=t.target.scrollTop}},{kind:"method",key:"_backTapped",value:function(){this.backCallback?this.backCallback():history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[h.$c,n.iv`:host{display:block;height:100%;background-color:var(--primary-background-color);overflow:hidden;position:relative}:host([narrow]){width:100%;position:fixed}.toolbar{display:flex;align-items:center;font-size:20px;height:var(--header-height);padding:8px 12px;pointer-events:none;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}@media (max-width:599px){.toolbar{padding:4px}}.toolbar a{color:var(--sidebar-text-color);text-decoration:none}::slotted([slot=toolbar-icon]),ha-icon-button-arrow-prev,ha-menu-button{pointer-events:auto;color:var(--sidebar-icon-color)}.main-title{margin:0 0 0 24px;line-height:20px;flex-grow:1}.content{position:relative;width:100%;height:calc(100% - 1px - var(--header-height));overflow-y:auto;overflow:auto;-webkit-overflow-scrolling:touch}#fab{position:absolute;right:calc(16px + env(safe-area-inset-right));bottom:calc(16px + env(safe-area-inset-bottom));z-index:1}:host([narrow]) #fab.tabs{bottom:calc(84px + env(safe-area-inset-bottom))}#fab[is-wide]{bottom:24px;right:24px}:host([rtl]) #fab{right:auto;left:calc(16px + env(safe-area-inset-left))}:host([rtl][is-wide]) #fab{bottom:24px;left:24px;right:auto}`]}}]}}),n.oi)},11654:(t,e,o)=>{o.d(e,{$c:()=>s,Qx:()=>r,k1:()=>a,yu:()=>n});var i=o(68144);const a=i.iv`button.link{background:0 0;color:inherit;border:none;padding:0;font:inherit;text-align:left;text-decoration:underline;cursor:pointer;outline:0}`,r=i.iv`:host{font-family:var(--paper-font-body1_-_font-family);-webkit-font-smoothing:var(--paper-font-body1_-_-webkit-font-smoothing);font-size:var(--paper-font-body1_-_font-size);font-weight:var(--paper-font-body1_-_font-weight);line-height:var(--paper-font-body1_-_line-height)}app-header div[sticky]{height:48px}app-toolbar [main-title]{margin-left:20px}h1{font-family:var(--paper-font-headline_-_font-family);-webkit-font-smoothing:var(--paper-font-headline_-_-webkit-font-smoothing);white-space:var(--paper-font-headline_-_white-space);overflow:var(--paper-font-headline_-_overflow);text-overflow:var(--paper-font-headline_-_text-overflow);font-size:var(--paper-font-headline_-_font-size);font-weight:var(--paper-font-headline_-_font-weight);line-height:var(--paper-font-headline_-_line-height)}h2{font-family:var(--paper-font-title_-_font-family);-webkit-font-smoothing:var(--paper-font-title_-_-webkit-font-smoothing);white-space:var(--paper-font-title_-_white-space);overflow:var(--paper-font-title_-_overflow);text-overflow:var(--paper-font-title_-_text-overflow);font-size:var(--paper-font-title_-_font-size);font-weight:var(--paper-font-title_-_font-weight);line-height:var(--paper-font-title_-_line-height)}h3{font-family:var(--paper-font-subhead_-_font-family);-webkit-font-smoothing:var(--paper-font-subhead_-_-webkit-font-smoothing);white-space:var(--paper-font-subhead_-_white-space);overflow:var(--paper-font-subhead_-_overflow);text-overflow:var(--paper-font-subhead_-_text-overflow);font-size:var(--paper-font-subhead_-_font-size);font-weight:var(--paper-font-subhead_-_font-weight);line-height:var(--paper-font-subhead_-_line-height)}a{color:var(--primary-color)}.secondary{color:var(--secondary-text-color)}.error{color:var(--error-color)}.warning{color:var(--error-color)}mwc-button.warning{--mdc-theme-primary:var(--error-color)}${a} .card-actions a{text-decoration:none}.card-actions .warning{--mdc-theme-primary:var(--error-color)}.layout.horizontal,.layout.vertical{display:flex}.layout.inline{display:inline-flex}.layout.horizontal{flex-direction:row}.layout.vertical{flex-direction:column}.layout.wrap{flex-wrap:wrap}.layout.no-wrap{flex-wrap:nowrap}.layout.center,.layout.center-center{align-items:center}.layout.bottom{align-items:flex-end}.layout.center-center,.layout.center-justified{justify-content:center}.flex{flex:1;flex-basis:0.000000001px}.flex-auto{flex:1 1 auto}.flex-none{flex:none}.layout.justified{justify-content:space-between}`,n=i.iv`ha-dialog{--mdc-dialog-min-width:400px;--mdc-dialog-max-width:600px;--mdc-dialog-max-width:min(600px, 95vw);--justify-action-buttons:space-between}ha-dialog .form{color:var(--primary-text-color)}a{color:var(--primary-color)}@media all and (max-width:450px),all and (max-height:500px){ha-dialog{--mdc-dialog-min-width:calc(
        100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
      );--mdc-dialog-max-width:calc(
        100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
      );--mdc-dialog-min-height:100%;--mdc-dialog-max-height:100%;--vertical-align-dialog:flex-end;--ha-dialog-border-radius:0}}ha-button.warning,mwc-button.warning{--mdc-theme-primary:var(--error-color)}.error{color:var(--error-color)}`,s=i.iv`.ha-scrollbar::-webkit-scrollbar{width:.4rem;height:.4rem}.ha-scrollbar::-webkit-scrollbar-thumb{-webkit-border-radius:4px;border-radius:4px;background:var(--scrollbar-thumb-color)}.ha-scrollbar{overflow-y:auto;scrollbar-color:var(--scrollbar-thumb-color) transparent;scrollbar-width:thin}`;i.iv`body{background-color:var(--primary-background-color);color:var(--primary-text-color);height:calc(100vh - 32px);width:100vw}`}};
//# sourceMappingURL=26675.XSXoOJq3Iu8.js.map