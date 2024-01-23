export const id=62575;export const ids=[62575];export const modules={34821:(i,s,e)=>{e.d(s,{i:()=>u});var t=e(17463),a=e(34541),o=e(47838),l=e(87762),n=e(91632),d=e(68144),c=e(79932),r=e(74265);e(10983);const h=["button","ha-list-item"],u=(i,s)=>{var e;return d.dy` <div class="header_title"> <span>${s}</span> <ha-icon-button .label="${null!==(e=null==i?void 0:i.localize("ui.dialogs.generic.close"))&&void 0!==e?e:"Close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> </div> `};(0,t.Z)([(0,c.Mo)("ha-dialog")],(function(i,s){class e extends s{constructor(...s){super(...s),i(this)}}return{F:e,d:[{kind:"field",key:r.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(i,s){var e;null===(e=this.contentElement)||void 0===e||e.scrollTo(i,s)}},{kind:"method",key:"renderHeading",value:function(){return d.dy`<slot name="heading"> ${(0,a.Z)((0,o.Z)(e.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){var i;(0,a.Z)((0,o.Z)(e.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,h].join(", "),this._updateScrolledAttribute(),null===(i=this.contentElement)||void 0===i||i.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,o.Z)(e.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[n.W,d.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter,none);backdrop-filter:var(--dialog-backdrop-filter,none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{position:relative;padding-right:40px;padding-inline-end:40px;padding-inline-start:initial;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}.header_button{position:absolute;right:-8px;top:-8px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-8px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),l.M)},62575:(i,s,e)=>{e.r(s);var t=e(17463),a=(e(14271),e(68144)),o=e(79932),l=e(47181),n=(e(31206),e(34821)),d=(e(52039),e(22383)),c=e(11654);const r="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",h="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z";(0,t.Z)([(0,o.Mo)("dialog-zha-reconfigure-device")],(function(i,s){return{F:class extends s{constructor(...s){super(...s),i(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_status",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_stages",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_clusterConfigurationStatuses",value:()=>new Map},{kind:"field",decorators:[(0,o.SB)()],key:"_params",value(){}},{kind:"field",decorators:[(0,o.SB)()],key:"_allSuccessful",value:()=>!0},{kind:"field",decorators:[(0,o.SB)()],key:"_showDetails",value:()=>!1},{kind:"field",key:"_subscribed",value:void 0},{kind:"method",key:"showDialog",value:function(i){this._params=i,this._stages=void 0}},{kind:"method",key:"closeDialog",value:function(){this._unsubscribe(),this._params=void 0,this._status=void 0,this._stages=void 0,this._clusterConfigurationStatuses=void 0,this._showDetails=!1,(0,l.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var i;return this._params?a.dy` <ha-dialog open @closed="${this.closeDialog}" .heading="${(0,n.i)(this.hass,this.hass.localize("ui.dialogs.zha_reconfigure_device.heading")+": "+(this._params.device.user_given_name||this._params.device.name))}"> ${this._status?"":a.dy` <p> ${this.hass.localize("ui.dialogs.zha_reconfigure_device.introduction")} </p> <p> <em> ${this.hass.localize("ui.dialogs.zha_reconfigure_device.battery_device_warning")} </em> </p> <mwc-button slot="primaryAction" @click="${this._startReconfiguration}"> ${this.hass.localize("ui.dialogs.zha_reconfigure_device.start_reconfiguration")} </mwc-button> `} ${"started"===this._status?a.dy` <div class="flex-container"> <ha-circular-progress indeterminate></ha-circular-progress> <div class="status"> <p> <b> ${this.hass.localize("ui.dialogs.zha_reconfigure_device.in_progress")} </b> </p> <p> ${this.hass.localize("ui.dialogs.zha_reconfigure_device.run_in_background")} </p> </div> </div> <mwc-button slot="primaryAction" @click="${this.closeDialog}"> ${this.hass.localize("ui.dialogs.generic.close")} </mwc-button> <mwc-button slot="secondaryAction" @click="${this._toggleDetails}"> ${this._showDetails?this.hass.localize("ui.dialogs.zha_reconfigure_device.button_hide"):this.hass.localize("ui.dialogs.zha_reconfigure_device.button_show")} </mwc-button> `:""} ${"failed"===this._status?a.dy` <div class="flex-container"> <ha-svg-icon .path="${h}" class="failed"></ha-svg-icon> <div class="status"> <p> ${this.hass.localize("ui.dialogs.zha_reconfigure_device.configuration_failed")} </p> </div> </div> <mwc-button slot="primaryAction" @click="${this.closeDialog}"> ${this.hass.localize("ui.dialogs.generic.close")} </mwc-button> <mwc-button slot="secondaryAction" @click="${this._toggleDetails}"> ${this._showDetails?this.hass.localize("ui.dialogs.zha_reconfigure_device.button_hide"):this.hass.localize("ui.dialogs.zha_reconfigure_device.button_show")} </mwc-button> `:""} ${"finished"===this._status?a.dy` <div class="flex-container"> <ha-svg-icon .path="${r}" class="success"></ha-svg-icon> <div class="status"> <p> ${this.hass.localize("ui.dialogs.zha_reconfigure_device.configuration_complete")} </p> </div> </div> <mwc-button slot="primaryAction" @click="${this.closeDialog}"> ${this.hass.localize("ui.dialogs.generic.close")} </mwc-button> <mwc-button slot="secondaryAction" @click="${this._toggleDetails}"> ${this._showDetails?this.hass.localize("ui.dialogs.zha_reconfigure_device.button_hide"):this.hass.localize("ui.dialogs.zha_reconfigure_device.button_show")} </mwc-button> `:""} ${this._stages?a.dy` <div class="stages"> ${this._stages.map((i=>a.dy` <span class="stage"> <ha-svg-icon .path="${r}" class="success"></ha-svg-icon> ${i} </span> `))} </div> `:""} ${this._showDetails?a.dy` <div class="wrapper"> <h2 class="grid-item"> ${this.hass.localize("ui.dialogs.zha_reconfigure_device.cluster_header")} </h2> <h2 class="grid-item"> ${this.hass.localize("ui.dialogs.zha_reconfigure_device.bind_header")} </h2> <h2 class="grid-item"> ${this.hass.localize("ui.dialogs.zha_reconfigure_device.reporting_header")} </h2> ${null!==(i=this._clusterConfigurationStatuses)&&void 0!==i&&i.size?a.dy` ${Array.from(this._clusterConfigurationStatuses.values()).map((i=>a.dy` <div class="grid-item"> ${i.cluster.name} </div> <div class="grid-item"> ${void 0!==i.bindSuccess?i.bindSuccess?a.dy` <span class="stage"> <ha-svg-icon .path="${r}" class="success"></ha-svg-icon> </span> `:a.dy` <span class="stage"> <ha-svg-icon .path="${h}" class="failed"></ha-svg-icon> </span> `:""} </div> <div class="grid-item"> ${i.attributes.size>0?a.dy` <div class="attributes"> <div class="grid-item"> ${this.hass.localize("ui.dialogs.zha_reconfigure_device.attribute")} </div> <div class="grid-item"> <div> ${this.hass.localize("ui.dialogs.zha_reconfigure_device.min_max_change")} </div> </div> ${Array.from(i.attributes.values()).map((i=>a.dy` <span class="grid-item"> ${i.name}: ${i.success?a.dy` <span class="stage"> <ha-svg-icon .path="${r}" class="success"></ha-svg-icon> </span> `:a.dy` <span class="stage"> <ha-svg-icon .path="${h}" class="failed"></ha-svg-icon> </span> `} </span> <div class="grid-item"> ${i.min}/${i.max}/${i.change} </div> `))} </div> `:""} </div> `))} `:""} </div> `:""} </ha-dialog> `:a.Ld}},{kind:"method",key:"_startReconfiguration",value:async function(){this.hass&&this._params&&(this._clusterConfigurationStatuses=new Map((await(0,d.ez)(this.hass,this._params.device.ieee)).map((i=>[i.id,{cluster:i,bindSuccess:void 0,attributes:new Map}]))),this._subscribe(this._params),this._status="started")}},{kind:"method",key:"_handleMessage",value:function(i){if(i.type===d.H4)this._unsubscribe(),this._status=this._allSuccessful?"finished":"failed";else{const s=this._clusterConfigurationStatuses.get(i.zha_channel_msg_data.cluster_id);if(i.type===d.mS){this._stages||(this._stages=["binding"]);const e=i.zha_channel_msg_data.success;s.bindSuccess=e,this._allSuccessful=this._allSuccessful&&e}if(i.type===d.lu){this._stages&&!this._stages.includes("reporting")&&this._stages.push("reporting");const e=i.zha_channel_msg_data.attributes;Object.keys(e).forEach((i=>{const t=e[i];s.attributes.set(t.id,t),this._allSuccessful=this._allSuccessful&&t.success}))}this.requestUpdate()}}},{kind:"method",key:"_unsubscribe",value:function(){this._subscribed&&(this._subscribed.then((i=>i())),this._subscribed=void 0)}},{kind:"method",key:"_subscribe",value:function(i){this.hass&&(this._subscribed=(0,d.$l)(this.hass,i.device.ieee,this._handleMessage.bind(this)))}},{kind:"method",key:"_toggleDetails",value:function(){this._showDetails=!this._showDetails}},{kind:"get",static:!0,key:"styles",value:function(){return[c.yu,a.iv`.wrapper{display:grid;grid-template-columns:3fr 1fr 2fr}.attributes{display:grid;grid-template-columns:1fr 1fr}.grid-item{border:1px solid;padding:7px}.success{color:var(--success-color)}.failed{color:var(--warning-color)}.flex-container{display:flex;align-items:center}.stages{margin-top:16px}.stage ha-svg-icon{width:16px;height:16px}.stage{padding:8px}ha-svg-icon{width:68px;height:48px}.flex-container ha-circular-progress,.flex-container ha-svg-icon{margin-right:20px}`]}}]}}),a.oi)}};
//# sourceMappingURL=62575.UUD1zzKwPjs.js.map