"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[74365],{34821:function(i,e,t){t.d(e,{i:function(){return y}});var a,o,n,l=t(33368),d=t(71650),r=t(82390),s=t(69205),c=t(70906),h=t(91808),u=t(34541),p=t(47838),g=t(88962),m=(t(97393),t(91989),t(87762)),v=t(91632),f=t(68144),_=t(95260),k=t(74265),b=(t(10983),["button","ha-list-item"]),y=function(i,e){var t;return(0,f.dy)(a||(a=(0,g.Z)([' <div class="header_title"> <span>','</span> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> </div> '])),e,null!==(t=null==i?void 0:i.localize("ui.dialogs.generic.close"))&&void 0!==t?t:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,h.Z)([(0,_.Mo)("ha-dialog")],(function(i,e){var t=function(e){(0,s.Z)(a,e);var t=(0,c.Z)(a);function a(){var e;(0,d.Z)(this,a);for(var o=arguments.length,n=new Array(o),l=0;l<o;l++)n[l]=arguments[l];return e=t.call.apply(t,[this].concat(n)),i((0,r.Z)(e)),e}return(0,l.Z)(a)}(e);return{F:t,d:[{kind:"field",key:k.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(i,e){var t;null===(t=this.contentElement)||void 0===t||t.scrollTo(i,e)}},{kind:"method",key:"renderHeading",value:function(){return(0,f.dy)(o||(o=(0,g.Z)(['<slot name="heading"> '," </slot>"])),(0,u.Z)((0,p.Z)(t.prototype),"renderHeading",this).call(this))}},{kind:"method",key:"firstUpdated",value:function(){var i;(0,u.Z)((0,p.Z)(t.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,b].join(", "),this._updateScrolledAttribute(),null===(i=this.contentElement)||void 0===i||i.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,u.Z)((0,p.Z)(t.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var i=this;return function(){i._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[v.W,(0,f.iv)(n||(n=(0,g.Z)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter,none);backdrop-filter:var(--dialog-backdrop-filter,none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{position:relative;padding-right:40px;padding-inline-end:40px;padding-inline-start:initial;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}.header_button{position:absolute;right:-8px;top:-8px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-8px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),m.M)},74365:function(i,e,t){t.r(e);var a,o,n,l=t(88962),d=t(33368),r=t(71650),s=t(82390),c=t(69205),h=t(70906),u=t(91808),p=(t(97393),t(94738),t(98214),t(22859),t(85717),t(47704),t(68144)),g=t(95260),m=t(47181),v=(t(9381),t(34821)),f=(t(53297),t(3555),t(11654));(0,u.Z)([(0,g.Mo)("ha-dialog-automation-rename")],(function(i,e){var t=function(e){(0,c.Z)(a,e);var t=(0,h.Z)(a);function a(){var e;(0,r.Z)(this,a);for(var o=arguments.length,n=new Array(o),l=0;l<o;l++)n[l]=arguments[l];return e=t.call.apply(t,[this].concat(n)),i((0,s.Z)(e)),e}return(0,d.Z)(a)}(e);return{F:t,d:[{kind:"field",decorators:[(0,g.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_opened",value:function(){return!1}},{kind:"field",decorators:[(0,g.SB)()],key:"_error",value:void 0},{kind:"field",key:"_params",value:void 0},{kind:"field",key:"_newName",value:void 0},{kind:"field",key:"_newDescription",value:void 0},{kind:"method",key:"showDialog",value:function(i){this._opened=!0,this._params=i,this._newName=i.config.alias||this.hass.localize("ui.panel.config.automation.editor.default_name"),this._newDescription=i.config.description||""}},{kind:"method",key:"closeDialog",value:function(){this._params.onClose(),this._opened&&(0,m.B)(this,"dialog-closed",{dialog:this.localName}),this._opened=!1}},{kind:"method",key:"render",value:function(){return this._opened?(0,p.dy)(a||(a=(0,l.Z)([' <ha-dialog open scrimClickAction @closed="','" .heading="','"> ',' <ha-textfield dialogInitialFocus .value="','" .placeholder="','" .label="','" required type="string" @input="','"></ha-textfield> <ha-textarea .label="','" .placeholder="','" name="description" autogrow .value="','" @input="','"></ha-textarea> <mwc-button @click="','" slot="secondaryAction"> ',' </mwc-button> <mwc-button @click="','" slot="primaryAction"> '," </mwc-button> </ha-dialog> "])),this.closeDialog,(0,v.i)(this.hass,this.hass.localize(this._params.config.alias?"ui.panel.config.automation.editor.rename":"ui.panel.config.automation.editor.save")),this._error?(0,p.dy)(o||(o=(0,l.Z)(['<ha-alert alert-type="error">',"</ha-alert>"])),this.hass.localize("ui.panel.config.automation.editor.missing_name")):"",this._newName,this.hass.localize("ui.panel.config.automation.editor.default_name"),this.hass.localize("ui.panel.config.automation.editor.alias"),this._valueChanged,this.hass.localize("ui.panel.config.automation.editor.description.label"),this.hass.localize("ui.panel.config.automation.editor.description.placeholder"),this._newDescription,this._valueChanged,this.closeDialog,this.hass.localize("ui.dialogs.generic.cancel"),this._save,this.hass.localize(this._params.config.alias?"ui.panel.config.automation.editor.rename":"ui.panel.config.automation.editor.save")):p.Ld}},{kind:"method",key:"_valueChanged",value:function(i){i.stopPropagation();var e=i.target;"description"===e.name?this._newDescription=e.value:this._newName=e.value}},{kind:"method",key:"_save",value:function(){this._newName?(this._params.updateAutomation(Object.assign(Object.assign({},this._params.config),{},{alias:this._newName,description:this._newDescription})),this.closeDialog()):this._error="Name is required"}},{kind:"get",static:!0,key:"styles",value:function(){return[f.Qx,f.yu,(0,p.iv)(n||(n=(0,l.Z)(["ha-textarea,ha-textfield{display:block}ha-alert{display:block;margin-bottom:16px}"])))]}}]}}),p.oi)}}]);
//# sourceMappingURL=74365.uKrtNbA2fxo.js.map