export const id=31585;export const ids=[31585,9381,99282];export const modules={63864:(t,e,o)=>{o.d(e,{I:()=>i,_:()=>s});const i=(t,e,o,i)=>{const[s,a,n]=t.split(".",3);return Number(s)>e||Number(s)===e&&(void 0===i?Number(a)>=o:Number(a)>o)||void 0!==i&&Number(s)===e&&Number(a)===o&&Number(n)>=i},s=t=>t.includes("dev")},9381:(t,e,o)=>{o.r(e);var i=o(17463),s=o(68144),a=o(79932),n=o(83448),r=o(47181);o(10983),o(52039);const l={info:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",warning:"M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16",error:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",success:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"};(0,i.Z)([(0,a.Mo)("ha-alert")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,a.Cb)()],key:"title",value:()=>""},{kind:"field",decorators:[(0,a.Cb)({attribute:"alert-type"})],key:"alertType",value:()=>"info"},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"dismissable",value:()=>!1},{kind:"method",key:"render",value:function(){return s.dy` <div class="issue-type ${(0,n.$)({[this.alertType]:!0})}" role="alert"> <div class="icon ${this.title?"":"no-title"}"> <slot name="icon"> <ha-svg-icon .path="${l[this.alertType]}"></ha-svg-icon> </slot> </div> <div class="content"> <div class="main-content"> ${this.title?s.dy`<div class="title">${this.title}</div>`:""} <slot></slot> </div> <div class="action"> <slot name="action"> ${this.dismissable?s.dy`<ha-icon-button @click="${this._dismiss_clicked}" label="Dismiss alert" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button>`:""} </slot> </div> </div> </div> `}},{kind:"method",key:"_dismiss_clicked",value:function(){(0,r.B)(this,"alert-dismissed-clicked")}},{kind:"field",static:!0,key:"styles",value:()=>s.iv`.issue-type{position:relative;padding:8px;display:flex}.issue-type::after{position:absolute;top:0;right:0;bottom:0;left:0;opacity:.12;pointer-events:none;content:"";border-radius:4px}.icon{z-index:1}.icon.no-title{align-self:center}.content{display:flex;justify-content:space-between;align-items:center;width:100%;text-align:var(--float-start)}.action{z-index:1;width:min-content;--mdc-theme-primary:var(--primary-text-color)}.main-content{overflow-wrap:anywhere;word-break:break-word;margin-left:8px;margin-right:0;margin-inline-start:8px;margin-inline-end:0;direction:var(--direction)}.title{margin-top:2px;font-weight:700}.action ha-icon-button,.action mwc-button{--mdc-theme-primary:var(--primary-text-color);--mdc-icon-button-size:36px}.issue-type.info>.icon{color:var(--info-color)}.issue-type.info::after{background-color:var(--info-color)}.issue-type.warning>.icon{color:var(--warning-color)}.issue-type.warning::after{background-color:var(--warning-color)}.issue-type.error>.icon{color:var(--error-color)}.issue-type.error::after{background-color:var(--error-color)}.issue-type.success>.icon{color:var(--success-color)}.issue-type.success::after{background-color:var(--success-color)}`}]}}),s.oi)},12373:(t,e,o)=>{var i=o(17463),s=o(68144),a=o(79932),n=o(88027);(0,i.Z)([(0,a.Mo)("ha-bar")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({type:Number})],key:"min",value:()=>0},{kind:"field",decorators:[(0,a.Cb)({type:Number})],key:"max",value:()=>100},{kind:"field",decorators:[(0,a.Cb)({type:Number})],key:"value",value:void 0},{kind:"method",key:"render",value:function(){const t=(0,n.IU)((0,n.Ff)((0,n.Fv)(this.value,this.min,this.max),this.min,this.max));return s.YP` <svg> <g> <rect/> <rect width="${t}%"/> </g> </svg> `}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`rect{height:100%}rect:first-child{width:100%;fill:var(--ha-bar-background-color,var(--secondary-background-color))}rect:last-child{fill:var(--ha-bar-primary-color,var(--primary-color))}svg{border-radius:var(--ha-bar-border-radius,4px);height:12px;width:100%}`}}]}}),s.oi)},81545:(t,e,o)=>{var i=o(17463),s=o(34541),a=o(47838),n=(o(65666),o(68144)),r=o(79932),l=o(30418),d=o(74265);(0,i.Z)([(0,r.Mo)("ha-button-menu")],(function(t,e){class o extends e{constructor(...e){super(...e),t(this)}}return{F:o,d:[{kind:"field",key:d.gA,value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"corner",value:()=>"BOTTOM_START"},{kind:"field",decorators:[(0,r.Cb)()],key:"menuCorner",value:()=>"START"},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"x",value:()=>null},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"y",value:()=>null},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"multi",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"activatable",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"fixed",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,attribute:"no-anchor"})],key:"noAnchor",value:()=>!1},{kind:"field",decorators:[(0,r.IO)("mwc-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){var t;return null===(t=this._menu)||void 0===t?void 0:t.items}},{kind:"get",key:"selected",value:function(){var t;return null===(t=this._menu)||void 0===t?void 0:t.selected}},{kind:"method",key:"focus",value:function(){var t,e;null!==(t=this._menu)&&void 0!==t&&t.open?this._menu.focusItemAtIndex(0):null===(e=this._triggerButton)||void 0===e||e.focus()}},{kind:"method",key:"render",value:function(){return n.dy` <div @click="${this._handleClick}"> <slot name="trigger" @slotchange="${this._setTriggerAria}"></slot> </div> <mwc-menu .corner="${this.corner}" .menuCorner="${this.menuCorner}" .fixed="${this.fixed}" .multi="${this.multi}" .activatable="${this.activatable}" .y="${this.y}" .x="${this.x}"> <slot></slot> </mwc-menu> `}},{kind:"method",key:"firstUpdated",value:function(t){(0,s.Z)((0,a.Z)(o.prototype),"firstUpdated",this).call(this,t),"rtl"===l.E.document.dir&&this.updateComplete.then((()=>{this.querySelectorAll("mwc-list-item").forEach((t=>{const e=document.createElement("style");e.innerHTML="span.material-icons:first-of-type { margin-left: var(--mdc-list-item-graphic-margin, 32px) !important; margin-right: 0px !important;}",t.shadowRoot.appendChild(e)}))}))}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchor=this.noAnchor?null:this,this._menu.show())}},{kind:"get",key:"_triggerButton",value:function(){return this.querySelector('ha-icon-button[slot="trigger"], mwc-button[slot="trigger"]')}},{kind:"method",key:"_setTriggerAria",value:function(){this._triggerButton&&(this._triggerButton.ariaHasPopup="menu")}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{display:inline-block;position:relative}::slotted([disabled]){color:var(--disabled-text-color)}`}}]}}),n.oi)},99282:(t,e,o)=>{o.r(e),o.d(e,{HaIconNext:()=>r});var i=o(17463),s=o(79932),a=o(30418),n=o(52039);let r=(0,i.Z)([(0,s.Mo)("ha-icon-next")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,s.Cb)()],key:"path",value:()=>"rtl"===a.E.document.dir?"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z":"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}]}}),n.HaSvgIcon)},2130:(t,e,o)=>{var i=o(17463),s=o(68144),a=o(79932),n=o(83448),r=o(88027);o(12373),o(14089);(0,i.Z)([(0,a.Mo)("ha-metric")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({type:Number})],key:"value",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:String})],key:"heading",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:String})],key:"tooltip",value:void 0},{kind:"method",key:"render",value:function(){var t;const e=(0,r.IU)(this.value);return s.dy` <ha-settings-row> <span slot="heading"> ${this.heading} </span> <div slot="description" .title="${null!==(t=this.tooltip)&&void 0!==t?t:""}"> <span class="value"> ${e} % </span> <ha-bar class="${(0,n.$)({"target-warning":e>50,"target-critical":e>85})}" .value="${this.value}"></ha-bar> </div> </ha-settings-row> `}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`ha-settings-row{padding:0;height:54px;width:100%}ha-settings-row>div[slot=description]{white-space:normal;color:var(--secondary-text-color);display:flex;justify-content:space-between}ha-bar{--ha-bar-primary-color:var(
          --metric-bar-ok-color,
          var(--success-color)
        )}.target-warning{--ha-bar-primary-color:var(
          --metric-bar-warning-color,
          var(--warning-color)
        )}.target-critical{--ha-bar-primary-color:var(
          --metric-bar-critical-color,
          var(--error-color)
        )}.value{width:48px;padding-right:4px;flex-shrink:0}`}}]}}),s.oi)},41682:(t,e,o)=>{o.d(e,{js:()=>a,rY:()=>s,yd:()=>l,yz:()=>r});var i=o(63864);const s=t=>t.data,a=t=>"object"==typeof t?"object"==typeof t.body?t.body.message||"Unknown error, see supervisor logs":t.body||t.message||"Unknown error, see supervisor logs":t,n=new Set([502,503,504]),r=t=>!!(t&&t.status_code&&n.has(t.status_code))||!(!t||!t.message||!t.message.includes("ERR_CONNECTION_CLOSED")&&!t.message.includes("ERR_CONNECTION_RESET")),l=async(t,e)=>(0,i.I)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:`/${e}/stats`,method:"get"}):s(await t.callApi("GET",`hassio/${e}/stats`))},35460:(t,e,o)=>{o.d(e,{AP:()=>n,MY:()=>r,Or:()=>l,Sj:()=>a,Sx:()=>c,oJ:()=>d,ou:()=>u});var i=o(63864),s=o(41682);const a=async t=>{if((0,i.I)(t.config.version,2021,2,4))return t.callWS({type:"supervisor/api",endpoint:"/host/info",method:"get"});const e=await t.callApi("GET","hassio/host/info");return(0,s.rY)(e)},n=async t=>(0,i.I)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/os/info",method:"get"}):(0,s.rY)(await t.callApi("GET","hassio/os/info")),r=async t=>(0,i.I)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/host/reboot",method:"post",timeout:null}):t.callApi("POST","hassio/host/reboot"),l=async t=>(0,i.I)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/host/shutdown",method:"post",timeout:null}):t.callApi("POST","hassio/host/shutdown"),d=async(t,e)=>(0,i.I)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/host/options",method:"post",data:e}):t.callApi("POST","hassio/host/options",e),c=async(t,e)=>(0,i.I)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/os/datadisk/move",method:"post",timeout:null,data:{device:e}}):t.callApi("POST","hassio/os/datadisk/move"),u=async t=>(0,i.I)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/os/datadisk/list",method:"get",timeout:null}):(0,s.rY)(await t.callApi("GET","/os/datadisk/list"))},29748:(t,e,o)=>{o.d(e,{TF:()=>l,ap:()=>d,eX:()=>s,gp:()=>c,mw:()=>i,rE:()=>n,wc:()=>a,xM:()=>r});let i=function(t){return t.BIND="bind",t.CIFS="cifs",t.NFS="nfs",t}({}),s=function(t){return t.BACKUP="backup",t.MEDIA="media",t.SHARE="share",t}({}),a=function(t){return t.ACTIVE="active",t.FAILED="failed",t.UNKNOWN="unknown",t}({});const n=async t=>t.callWS({type:"supervisor/api",endpoint:"/mounts",method:"get",timeout:null}),r=async(t,e)=>t.callWS({type:"supervisor/api",endpoint:"/mounts",method:"post",timeout:null,data:e}),l=async(t,e)=>t.callWS({type:"supervisor/api",endpoint:`/mounts/${e.name}`,method:"put",timeout:null,data:e}),d=async(t,e)=>t.callWS({type:"supervisor/api",endpoint:`/mounts/${e}`,method:"delete",timeout:null}),c=async(t,e)=>t.callWS({type:"supervisor/api",endpoint:`/mounts/${e.name}/reload`,method:"post",timeout:null})},31585:(t,e,o)=>{o.r(e);var i=o(17463),s=o(34541),a=o(47838),n=(o(63436),o(68144)),r=o(79932),l=o(7323),d=(o(9381),o(81545),o(10983),o(2130),o(52039),o(99282),o(41682)),c=o(35460),u=o(29748),h=o(26765),p=(o(60010),o(88027)),m=(o(16499),o(47181));const v=(t,e)=>{(0,m.B)(t,"show-dialog",{dialogTag:"dialog-mount-view",dialogImport:()=>Promise.all([o.e(66023),o.e(68331),o.e(78521)]).then(o.bind(o,77794)),dialogParams:e})};var g=o(83849);(0,i.Z)([(0,r.Mo)("ha-config-section-storage")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_hostInfo",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_mountsInfo",value:void 0},{kind:"method",key:"firstUpdated",value:function(t){(0,s.Z)((0,a.Z)(i.prototype),"firstUpdated",this).call(this,t),(0,l.p)(this.hass,"hassio")&&this._load()}},{kind:"method",key:"render",value:function(){var t,e,o,i;if(void 0===this._mountsInfo)return n.Ld;const s=null===(t=this._mountsInfo)||void 0===t?void 0:t.mounts.filter((t=>[u.mw.CIFS,u.mw.NFS].includes(t.type))),a=null===(e=this._hostInfo)||void 0===e?void 0:e.features.includes("haos");return n.dy` <hass-subpage back-path="/config/system" .hass="${this.hass}" .narrow="${this.narrow}" .header="${this.hass.localize("ui.panel.config.storage.caption")}"> <div class="content"> ${this._error?n.dy` <ha-alert alert-type="error">${this._error.message||this._error.code}</ha-alert> `:""} ${this._hostInfo?n.dy` <ha-card outlined .header="${this.hass.localize("ui.panel.config.storage.disk_metrics")}"> <div class="card-content"> <ha-metric .heading="${this.hass.localize("ui.panel.config.storage.used_space")}" .value="${this._getUsedSpace(null===(o=this._hostInfo)||void 0===o?void 0:o.disk_used,null===(i=this._hostInfo)||void 0===i?void 0:i.disk_total)}" .tooltip="${`${this._hostInfo.disk_used} GB/${this._hostInfo.disk_total} GB`}"></ha-metric> ${""!==this._hostInfo.disk_life_time&&this._hostInfo.disk_life_time>=10?n.dy` <ha-metric .heading="${this.hass.localize("ui.panel.config.storage.emmc_lifetime_used")}" .value="${this._hostInfo.disk_life_time}" .tooltip="${`${this._hostInfo.disk_life_time-10}% - ${this._hostInfo.disk_life_time}%`}" class="emmc"></ha-metric> `:""} </div> ${this._hostInfo?n.dy`<div class="card-actions"> <mwc-button @click="${this._moveDatadisk}"> ${this.hass.localize("ui.panel.config.storage.datadisk.title")} </mwc-button> </div>`:n.Ld} </ha-card> `:""} <ha-card outlined .header="${this.hass.localize("ui.panel.config.storage.network_mounts.title")}"> ${null===this._mountsInfo?n.dy`<ha-alert class="mounts-not-supported" alert-type="warning" .title="${this.hass.localize("ui.panel.config.storage.network_mounts.not_supported.title")}"> ${a?n.dy`${this.hass.localize("ui.panel.config.storage.network_mounts.not_supported.os",{version:"10.2"})} <mwc-button slot="action" @click="${this._navigateToUpdates}"> ${this.hass.localize("ui.panel.config.storage.network_mounts.not_supported.navigate_to_updates")} </mwc-button>`:this.hass.localize("ui.panel.config.storage.network_mounts.not_supported.supervised")} </ha-alert>`:null!=s&&s.length?n.dy`<mwc-list> ${s.map((t=>n.dy` <ha-list-item graphic="avatar" .mount="${t}" twoline hasMeta @click="${this._changeMount}"> <div slot="graphic"> <ha-svg-icon .path="${t.usage===u.eX.MEDIA?"M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3M10 16V8L15 12":t.usage===u.eX.SHARE?"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z":"M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z"}"></ha-svg-icon> </div> <span class="mount-state-${t.state||"unknown"}"> ${t.name} </span> <span slot="secondary"> ${t.server}${t.port?`:${t.port}`:n.Ld}${t.type===u.mw.NFS?t.path:`:${t.share}`} </span> ${t.state!==u.wc.ACTIVE?n.dy`<ha-icon-button class="reload-btn" slot="meta" .mount="${t}" @click="${this._reloadMount}" .path="${"M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z"}"></ha-icon-button>`:n.dy`<ha-icon-next slot="meta"></ha-icon-next>`} </ha-list-item> `))} </mwc-list>`:n.dy`<div class="no-mounts"> <ha-svg-icon .path="${"M4,5C2.89,5 2,5.89 2,7V17C2,18.11 2.89,19 4,19H20C21.11,19 22,18.11 22,17V7C22,5.89 21.11,5 20,5H4M4.5,7A1,1 0 0,1 5.5,8A1,1 0 0,1 4.5,9A1,1 0 0,1 3.5,8A1,1 0 0,1 4.5,7M7,7H20V17H7V7M8,8V16H11V8H8M12,8V16H15V8H12M16,8V16H19V8H16M9,9H10V10H9V9M13,9H14V10H13V9M17,9H18V10H17V9Z"}"></ha-svg-icon> <p> ${this.hass.localize("ui.panel.config.storage.network_mounts.no_mounts")} </p> </div>`} ${null!==this._mountsInfo?n.dy`<div class="card-actions"> <mwc-button @click="${this._addMount}"> ${this.hass.localize("ui.panel.config.storage.network_mounts.add_title")} </mwc-button> </div>`:n.Ld} </ha-card> </div> </hass-subpage> `}},{kind:"method",key:"_load",value:async function(){var t;try{this._hostInfo=await(0,c.Sj)(this.hass)}catch(t){this._error=t.message||t}null!==(t=this._hostInfo)&&void 0!==t&&t.features.includes("mount")?await this._reloadMounts():this._mountsInfo=null}},{kind:"method",key:"_moveDatadisk",value:function(){var t,e;t=this,e={hostInfo:this._hostInfo},(0,m.B)(t,"show-dialog",{dialogTag:"dialog-move-datadisk",dialogImport:()=>Promise.all([o.e(46992),o.e(3762),o.e(66023),o.e(49412),o.e(24833)]).then(o.bind(o,59891)),dialogParams:e})}},{kind:"method",key:"_navigateToUpdates",value:async function(){(0,g.c)("/config/updates")}},{kind:"method",key:"_reloadMount",value:async function(t){t.stopPropagation();const e=t.currentTarget.mount;try{await(0,u.gp)(this.hass,e)}catch(t){return void(0,h.showAlertDialog)(this,{title:this.hass.localize("ui.panel.config.storage.network_mounts.errors.reload",{mount:e.name}),text:(0,d.js)(t)})}await this._reloadMounts()}},{kind:"method",key:"_addMount",value:function(){v(this,{reloadMounts:()=>this._reloadMounts()})}},{kind:"method",key:"_changeMount",value:function(t){t.stopPropagation(),v(this,{mount:t.currentTarget.mount,reloadMounts:()=>this._reloadMounts()})}},{kind:"method",key:"_reloadMounts",value:async function(){try{this._mountsInfo=await(0,u.rE)(this.hass)}catch(t){this._error=t.message||t,this._mountsInfo=null}}},{kind:"field",key:"_getUsedSpace",value:()=>(t,e)=>(0,p.IU)((0,p.Ff)(t,0,e))},{kind:"field",static:!0,key:"styles",value:()=>n.iv`.content{padding:28px 20px 0;max-width:1040px;margin:0 auto}ha-card{max-width:600px;margin:0 auto 12px;justify-content:space-between;flex-direction:column;display:flex}.card-content{display:flex;justify-content:space-between;flex-direction:column}.mount-state-failed{color:var(--error-color)}.mount-state-unknown{color:var(--warning-color)}.mounts-not-supported{padding:0 16px 16px}.reload-btn{float:right;position:relative;top:-10px;right:10px}.no-mounts{display:flex;flex-direction:column;align-items:center;text-align:center}.no-mounts ha-svg-icon{background-color:var(--light-primary-color);color:var(--secondary-text-color);padding:16px;border-radius:50%;margin-bottom:8px}ha-list-item{--mdc-list-item-meta-size:auto;--mdc-list-item-meta-display:flex}ha-icon-next,ha-svg-icon{width:24px}`}]}}),n.oi)},88027:(t,e,o)=>{o.d(e,{Ff:()=>s,Fv:()=>i,IU:()=>a});const i=(t,e,o)=>isNaN(t)||isNaN(e)||isNaN(o)?0:t>o?o:t<e?e:t,s=(t,e,o)=>100*(t-e)/(o-e),a=t=>Math.round(10*t)/10}};
//# sourceMappingURL=31585.UdYn5pfsyqU.js.map