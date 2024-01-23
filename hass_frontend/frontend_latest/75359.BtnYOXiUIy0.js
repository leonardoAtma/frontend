export const id=75359;export const ids=[75359,9381];export const modules={76680:(e,t,i)=>{function a(e){return void 0===e||Array.isArray(e)?e:[e]}i.d(t,{r:()=>a})},55642:(e,t,i)=>{i.d(t,{h:()=>s});var a=i(68144),o=i(57835);const s=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),this._element=void 0,e.type!==o.pX.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings")}update(e,[t,i]){return this._element&&this._element.localName===t?(i&&Object.entries(i).forEach((([e,t])=>{this._element[e]=t})),a.Jb):this.render(t,i)}render(e,t){return this._element=document.createElement(e),t&&Object.entries(t).forEach((([e,t])=>{this._element[e]=t})),this._element}})},22311:(e,t,i)=>{i.d(t,{N:()=>o});var a=i(58831);const o=e=>(0,a.M)(e.entity_id)},40095:(e,t,i)=>{i.d(t,{e:()=>a});const a=(e,t)=>o(e.attributes,t),o=(e,t)=>0!=(e.supported_features&t)},83447:(e,t,i)=>{i.d(t,{l:()=>a});const a=(e,t="_")=>{const i="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·",a=`aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz${t}`,o=new RegExp(i.split("").join("|"),"g");let s;return""===e?s="":(s=e.toString().toLowerCase().replace(o,(e=>a.charAt(i.indexOf(e)))).replace(/(\d),(?=\d)/g,"$1").replace(/[^a-z0-9]+/g,t).replace(new RegExp(`(${t})\\1+`,"g"),"$1").replace(new RegExp(`^${t}+`),"").replace(new RegExp(`${t}+$`),""),""===s&&(s="unknown")),s}},9381:(e,t,i)=>{i.r(t);var a=i(17463),o=i(68144),s=i(79932),l=i(83448),n=i(47181);i(10983),i(52039);const r={info:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",warning:"M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16",error:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",success:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"};(0,a.Z)([(0,s.Mo)("ha-alert")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)()],key:"title",value:()=>""},{kind:"field",decorators:[(0,s.Cb)({attribute:"alert-type"})],key:"alertType",value:()=>"info"},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"dismissable",value:()=>!1},{kind:"method",key:"render",value:function(){return o.dy` <div class="issue-type ${(0,l.$)({[this.alertType]:!0})}" role="alert"> <div class="icon ${this.title?"":"no-title"}"> <slot name="icon"> <ha-svg-icon .path="${r[this.alertType]}"></ha-svg-icon> </slot> </div> <div class="content"> <div class="main-content"> ${this.title?o.dy`<div class="title">${this.title}</div>`:""} <slot></slot> </div> <div class="action"> <slot name="action"> ${this.dismissable?o.dy`<ha-icon-button @click="${this._dismiss_clicked}" label="Dismiss alert" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button>`:""} </slot> </div> </div> </div> `}},{kind:"method",key:"_dismiss_clicked",value:function(){(0,n.B)(this,"alert-dismissed-clicked")}},{kind:"field",static:!0,key:"styles",value:()=>o.iv`.issue-type{position:relative;padding:8px;display:flex}.issue-type::after{position:absolute;top:0;right:0;bottom:0;left:0;opacity:.12;pointer-events:none;content:"";border-radius:4px}.icon{z-index:1}.icon.no-title{align-self:center}.content{display:flex;justify-content:space-between;align-items:center;width:100%;text-align:var(--float-start)}.action{z-index:1;width:min-content;--mdc-theme-primary:var(--primary-text-color)}.main-content{overflow-wrap:anywhere;word-break:break-word;margin-left:8px;margin-right:0;margin-inline-start:8px;margin-inline-end:0;direction:var(--direction)}.title{margin-top:2px;font-weight:700}.action ha-icon-button,.action mwc-button{--mdc-theme-primary:var(--primary-text-color);--mdc-icon-button-size:36px}.issue-type.info>.icon{color:var(--info-color)}.issue-type.info::after{background-color:var(--info-color)}.issue-type.warning>.icon{color:var(--warning-color)}.issue-type.warning::after{background-color:var(--warning-color)}.issue-type.error>.icon{color:var(--error-color)}.issue-type.error::after{background-color:var(--error-color)}.issue-type.success>.icon{color:var(--success-color)}.issue-type.success::after{background-color:var(--success-color)}`}]}}),o.oi)},34821:(e,t,i)=>{i.d(t,{i:()=>u});var a=i(17463),o=i(34541),s=i(47838),l=i(87762),n=i(91632),r=i(68144),d=i(79932),c=i(74265);i(10983);const h=["button","ha-list-item"],u=(e,t)=>{var i;return r.dy` <div class="header_title"> <span>${t}</span> <ha-icon-button .label="${null!==(i=null==e?void 0:e.localize("ui.dialogs.generic.close"))&&void 0!==i?i:"Close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> </div> `};(0,a.Z)([(0,d.Mo)("ha-dialog")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:c.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return r.dy`<slot name="heading"> ${(0,o.Z)((0,s.Z)(i.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,o.Z)((0,s.Z)(i.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,h].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)((0,s.Z)(i.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[n.W,r.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter,none);backdrop-filter:var(--dialog-backdrop-filter,none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{position:relative;padding-right:40px;padding-inline-end:40px;padding-inline-start:initial;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}.header_button{position:absolute;right:-8px;top:-8px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-8px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),l.M)},57630:(e,t,i)=>{i.r(t),i.d(t,{DialogLovelaceDashboardDetail:()=>u});var a=i(17463),o=(i(14271),i(68144)),s=i(79932),l=i(14516),n=i(47181),r=i(83447),d=i(34821),c=(i(68331),i(1887)),h=i(11654);let u=(0,a.Z)([(0,s.Mo)("dialog-lovelace-dashboard-detail")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_urlPathChanged",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_data",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_submitting",value:()=>!1},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._error=void 0,this._urlPathChanged=!1,this._params.dashboard?this._data=this._params.dashboard:this._data={show_in_sidebar:!0,icon:void 0,title:"",require_admin:!1,mode:"storage"}}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,this._data=void 0,(0,n.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var e,t;if(!this._params||!this._data)return o.Ld;const i=this.hass.defaultPanel,a=!this._data.title||!this._data.title.trim();return o.dy` <ha-dialog open @closed="${this.closeDialog}" scrimClickAction escapeKeyAction .heading="${(0,d.i)(this.hass,this._params.urlPath?this._data.title||this.hass.localize("ui.panel.config.lovelace.dashboards.detail.edit_dashboard"):this.hass.localize("ui.panel.config.lovelace.dashboards.detail.new_dashboard"))}"> <div> ${this._params.dashboard&&!this._params.dashboard.id?this.hass.localize("ui.panel.config.lovelace.dashboards.cant_edit_yaml"):"lovelace"===this._params.urlPath?this.hass.localize("ui.panel.config.lovelace.dashboards.cant_edit_default"):o.dy` <ha-form .schema="${this._schema(this._params,this.hass.userData)}" .data="${this._data}" .hass="${this.hass}" .error="${this._error}" .computeLabel="${this._computeLabel}" @value-changed="${this._valueChanged}"></ha-form> `} </div> ${this._params.urlPath?o.dy` ${null!==(e=this._params.dashboard)&&void 0!==e&&e.id?o.dy` <mwc-button slot="secondaryAction" class="warning" @click="${this._deleteDashboard}" .disabled="${this._submitting}"> ${this.hass.localize("ui.panel.config.lovelace.dashboards.detail.delete")} </mwc-button> `:""} <mwc-button slot="secondaryAction" @click="${this._toggleDefault}" .disabled="${"lovelace"===this._params.urlPath&&"lovelace"===i}"> ${this._params.urlPath===i?this.hass.localize("ui.panel.config.lovelace.dashboards.detail.remove_default"):this.hass.localize("ui.panel.config.lovelace.dashboards.detail.set_default")} </mwc-button> `:""} <mwc-button slot="primaryAction" @click="${this._updateDashboard}" .disabled="${this._error&&"url_path"in this._error||a||this._submitting}" dialogInitialFocus> ${this._params.urlPath?null!==(t=this._params.dashboard)&&void 0!==t&&t.id?this.hass.localize("ui.panel.config.lovelace.dashboards.detail.update"):this.hass.localize("ui.common.close"):this.hass.localize("ui.panel.config.lovelace.dashboards.detail.create")} </mwc-button> </ha-dialog> `}},{kind:"field",key:"_schema",value:()=>(0,l.Z)(((e,t)=>[{name:"title",required:!0,selector:{text:{}}},{name:"icon",required:!0,selector:{icon:{}}},...!e.dashboard&&null!=t&&t.showAdvanced?[{name:"url_path",required:!0,selector:{text:{}}}]:[],{name:"require_admin",required:!0,selector:{boolean:{}}},{name:"show_in_sidebar",required:!0,selector:{boolean:{}}}]))},{kind:"field",key:"_computeLabel",value(){return e=>this.hass.localize(`ui.panel.config.lovelace.dashboards.detail.${"show_in_sidebar"===e.name?"show_sidebar":"url_path"===e.name?"url":e.name}`)}},{kind:"method",key:"_valueChanged",value:function(e){var t,i;this._error=void 0;const a=e.detail.value;a.url_path!==(null===(t=this._data)||void 0===t?void 0:t.url_path)&&(this._urlPathChanged=!0,a.url_path&&"lovelace"!==a.url_path&&/^[a-zA-Z0-9_-]+-[a-zA-Z0-9_-]+$/.test(a.url_path)||(this._error={url_path:this.hass.localize("ui.panel.config.lovelace.dashboards.detail.url_error_msg")})),a.title!==(null===(i=this._data)||void 0===i?void 0:i.title)?(this._data=a,this._fillUrlPath(a.title)):this._data=a}},{kind:"method",key:"_fillUrlPath",value:function(e){var t;if(null!==(t=this.hass.userData)&&void 0!==t&&t.showAdvanced&&this._urlPathChanged||!e)return;const i=(0,r.l)(e,"-");this._data={...this._data,url_path:i.includes("-")?i:`dashboard-${i}`}}},{kind:"method",key:"_toggleDefault",value:function(){var e;const t=null===(e=this._params)||void 0===e?void 0:e.urlPath;t&&(0,c.CM)(this,t===this.hass.defaultPanel?c.te:t)}},{kind:"method",key:"_updateDashboard",value:async function(){var e,t;null===(e=this._params)||void 0===e||!e.urlPath||null!==(t=this._params.dashboard)&&void 0!==t&&t.id||this.closeDialog(),this._submitting=!0;try{if(this._params.dashboard){const e={require_admin:this._data.require_admin,show_in_sidebar:this._data.show_in_sidebar,icon:this._data.icon||void 0,title:this._data.title};await this._params.updateDashboard(e)}else await this._params.createDashboard(this._data);this.closeDialog()}catch(e){this._error={base:(null==e?void 0:e.message)||"Unknown error"}}finally{this._submitting=!1}}},{kind:"method",key:"_deleteDashboard",value:async function(){this._submitting=!0;try{await this._params.removeDashboard()&&this.closeDialog()}finally{this._submitting=!1}}},{kind:"get",static:!0,key:"styles",value:function(){return[h.yu,o.iv``]}}]}}),o.oi)}};
//# sourceMappingURL=75359.BtnYOXiUIy0.js.map