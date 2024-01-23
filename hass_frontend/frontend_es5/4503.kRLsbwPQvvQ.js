"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4503],{34821:function(e,i,t){t.d(i,{i:function(){return b}});var n,a,o,r=t(33368),s=t(71650),l=t(82390),d=t(69205),c=t(70906),h=t(91808),u=t(34541),p=t(47838),v=t(88962),m=(t(97393),t(91989),t(87762)),g=t(91632),f=t(68144),_=t(95260),k=t(74265),y=(t(10983),["button","ha-list-item"]),b=function(e,i){var t;return(0,f.dy)(n||(n=(0,v.Z)([' <div class="header_title"> <span>','</span> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> </div> '])),i,null!==(t=null==e?void 0:e.localize("ui.dialogs.generic.close"))&&void 0!==t?t:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,h.Z)([(0,_.Mo)("ha-dialog")],(function(e,i){var t=function(i){(0,d.Z)(n,i);var t=(0,c.Z)(n);function n(){var i;(0,s.Z)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return i=t.call.apply(t,[this].concat(o)),e((0,l.Z)(i)),i}return(0,r.Z)(n)}(i);return{F:t,d:[{kind:"field",key:k.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,i){var t;null===(t=this.contentElement)||void 0===t||t.scrollTo(e,i)}},{kind:"method",key:"renderHeading",value:function(){return(0,f.dy)(a||(a=(0,v.Z)(['<slot name="heading"> '," </slot>"])),(0,u.Z)((0,p.Z)(t.prototype),"renderHeading",this).call(this))}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,u.Z)((0,p.Z)(t.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,y].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,u.Z)((0,p.Z)(t.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var e=this;return function(){e._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[g.W,(0,f.iv)(o||(o=(0,v.Z)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter,none);backdrop-filter:var(--dialog-backdrop-filter,none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{position:relative;padding-right:40px;padding-inline-end:40px;padding-inline-start:initial;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}.header_button{position:absolute;right:-8px;top:-8px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-8px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),m.M)},83927:function(e,i,t){var n,a=t(88962),o=t(33368),r=t(71650),s=t(82390),l=t(69205),d=t(70906),c=t(91808),h=(t(97393),t(8485)),u=t(92038),p=t(68144),v=t(95260),m=t(47181);(0,c.Z)([(0,v.Mo)("ha-formfield")],(function(e,i){var t=function(i){(0,l.Z)(n,i);var t=(0,d.Z)(n);function n(){var i;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return i=t.call.apply(t,[this].concat(o)),e((0,s.Z)(i)),i}return(0,o.Z)(n)}(i);return{F:t,d:[{kind:"method",key:"_labelClick",value:function(){var e=this.input;if(e&&(e.focus(),!e.disabled))switch(e.tagName){case"HA-CHECKBOX":e.checked=!e.checked,(0,m.B)(e,"change");break;case"HA-RADIO":e.checked=!0,(0,m.B)(e,"change");break;default:e.click()}}},{kind:"field",static:!0,key:"styles",value:function(){return[u.W,(0,p.iv)(n||(n=(0,a.Z)([":host(:not([alignEnd])) ::slotted(ha-switch){margin-right:10px;margin-inline-end:10px;margin-inline-start:inline}.mdc-form-field>label{direction:var(--direction);margin-inline-start:0;margin-inline-end:auto;padding-inline-start:4px;padding-inline-end:0}"])))]}}]}}),h.a)},73548:function(e,i,t){var n,a,o=t(88962),r=t(33368),s=t(71650),l=t(82390),d=t(69205),c=t(70906),h=t(91808),u=(t(97393),t(68144)),p=t(95260);(0,h.Z)([(0,p.Mo)("ha-label")],(function(e,i){var t=function(i){(0,d.Z)(n,i);var t=(0,c.Z)(n);function n(){var i;(0,s.Z)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return i=t.call.apply(t,[this].concat(o)),e((0,l.Z)(i)),i}return(0,r.Z)(n)}(i);return{F:t,d:[{kind:"method",key:"render",value:function(){return(0,u.dy)(n||(n=(0,o.Z)([' <span class="label"> <slot name="icon"></slot> <slot></slot>  </span>'])))}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,u.iv)(a||(a=(0,o.Z)([":host{--ha-label-text-color:var(--primary-text-color);--ha-label-icon-color:var(--primary-text-color);--ha-label-background-color:rgba(\n            var(--rgb-primary-text-color),\n            0.15\n          )}.label{display:inline-flex;flex-direction:row;align-items:center;font-size:12px;font-weight:500;line-height:16px;letter-spacing:.1px;vertical-align:middle;height:32px;padding:0 16px;border-radius:18px;background-color:var(--ha-label-background-color);color:var(--ha-label-text-color);--mdc-icon-size:18px}::slotted([slot=icon]){margin-right:8px;margin-left:-8px;display:flex;color:var(--ha-label-icon-color)}span{display:inline-flex}"])))]}}]}}),u.oi)},43709:function(e,i,t){var n,a=t(88962),o=t(33368),r=t(71650),s=t(82390),l=t(69205),d=t(70906),c=t(91808),h=t(34541),u=t(47838),p=(t(97393),t(53464)),v=t(4301),m=t(68144),g=t(95260),f=t(62359);(0,c.Z)([(0,g.Mo)("ha-switch")],(function(e,i){var t=function(i){(0,l.Z)(n,i);var t=(0,d.Z)(n);function n(){var i;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return i=t.call.apply(t,[this].concat(o)),e((0,s.Z)(i)),i}return(0,o.Z)(n)}(i);return{F:t,d:[{kind:"field",decorators:[(0,g.Cb)({type:Boolean})],key:"haptic",value:function(){return!1}},{kind:"method",key:"firstUpdated",value:function(){var e=this;(0,h.Z)((0,u.Z)(t.prototype),"firstUpdated",this).call(this),this.addEventListener("change",(function(){e.haptic&&(0,f.j)("light")}))}},{kind:"field",static:!0,key:"styles",value:function(){return[v.W,(0,m.iv)(n||(n=(0,a.Z)([":host{--mdc-theme-secondary:var(--switch-checked-color)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:var(--switch-checked-button-color);border-color:var(--switch-checked-button-color)}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:var(--switch-checked-track-color);border-color:var(--switch-checked-track-color)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:var(--switch-unchecked-button-color);border-color:var(--switch-unchecked-button-color)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:var(--switch-unchecked-track-color);border-color:var(--switch-unchecked-track-color)}"])))]}}]}}),p.H)},4503:function(e,i,t){t.r(i);var n,a,o,r,s,l,d,c,h,u=t(68990),p=t(88962),v=t(99312),m=t(81043),g=t(33368),f=t(71650),_=t(82390),k=t(69205),y=t(70906),b=t(91808),x=(t(97393),t(22859),t(40271),t(60163),t(46349),t(70320),t(11451),t(85472),t(46798),t(9849),t(90126),t(33829),t(47704),t(68144)),w=t(95260),Z=t(87744),A=t(34821),C=(t(83927),t(76865),t(73548),t(52039),t(43709),t(3555),t(65253)),z=t(26765),E=t(11654),L=t(45917);(0,b.Z)([(0,w.Mo)("dialog-user-detail")],(function(e,i){var t,b,S,B,O=function(i){(0,k.Z)(n,i);var t=(0,y.Z)(n);function n(){var i;(0,f.Z)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return i=t.call.apply(t,[this].concat(o)),e((0,_.Z)(i)),i}return(0,g.Z)(n)}(i);return{F:O,d:[{kind:"field",decorators:[(0,w.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_isAdmin",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_localOnly",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_isActive",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_submitting",value:function(){return!1}},{kind:"method",key:"showDialog",value:(B=(0,m.Z)((0,v.Z)().mark((function e(i){return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._params=i,this._error=void 0,this._name=i.entry.name||"",this._isAdmin=i.entry.group_ids.includes(C.Pb),this._localOnly=i.entry.local_only,this._isActive=i.entry.is_active,e.next=8,this.updateComplete;case 8:case"end":return e.stop()}}),e,this)}))),function(e){return B.apply(this,arguments)})},{kind:"method",key:"render",value:function(){var e;if(!this._params)return x.Ld;var i=this._params.entry,t=(0,C.FH)(this.hass,i,!0);return(0,x.dy)(n||(n=(0,p.Z)([' <ha-dialog open @closed="','" scrimClickAction escapeKeyAction .heading="','"> <div> ',' <div class="secondary"> ',": ","<br> ",": "," </div> ",' <div class="form"> <ha-textfield dialogInitialFocus .value="','" .disabled="','" @input="','" .label="','"></ha-textfield> <div class="row"> <ha-formfield .label="','" .dir="','"> <ha-switch .disabled="','" .checked="','" @change="','"> </ha-switch> </ha-formfield> </div> <div class="row"> <ha-formfield .label="','" .dir="','"> <ha-switch .disabled="','" .checked="','" @change="','"> </ha-switch> </ha-formfield> </div> ',' <div class="row"> <ha-formfield .label="','" .dir="','"> <ha-switch .disabled="','" .checked="','" @change="','"> </ha-switch> </ha-formfield> <ha-help-tooltip .label="','"> </ha-help-tooltip> </div> </div> </div> <div slot="secondaryAction"> <mwc-button class="warning" @click="','" .disabled="','"> '," </mwc-button> "," ",' </div> <div slot="primaryAction"> <mwc-button @click="','" .disabled="','"> '," </mwc-button> "," </div> </ha-dialog> "])),this._close,(0,A.i)(this.hass,i.name),this._error?(0,x.dy)(a||(a=(0,p.Z)([' <div class="error">',"</div> "])),this._error):"",this.hass.localize("ui.panel.config.users.editor.id"),i.id,this.hass.localize("ui.panel.config.users.editor.username"),i.username,0===t.length?"":(0,x.dy)(o||(o=(0,p.Z)([' <div class="badge-container"> '," </div> "])),t.map((function(e){var i=(0,u.Z)(e,2),t=i[0],n=i[1];return(0,x.dy)(r||(r=(0,p.Z)([' <ha-label> <ha-svg-icon slot="icon" .path="','"></ha-svg-icon> '," </ha-label> "])),t,n)}))),this._name,i.system_generated,this._nameChanged,this.hass.localize("ui.panel.config.users.editor.name"),this.hass.localize("ui.panel.config.users.editor.local_only"),(0,Z.Zu)(this.hass),i.system_generated,this._localOnly,this._localOnlyChanged,this.hass.localize("ui.panel.config.users.editor.admin"),(0,Z.Zu)(this.hass),i.system_generated||i.is_owner,this._isAdmin,this._adminChanged,this._isAdmin?"":(0,x.dy)(s||(s=(0,p.Z)([" <br> "," "])),this.hass.localize("ui.panel.config.users.users_privileges_note")),this.hass.localize("ui.panel.config.users.editor.active"),(0,Z.Zu)(this.hass),i.system_generated||i.is_owner,this._isActive,this._activeChanged,this.hass.localize("ui.panel.config.users.editor.active_tooltip"),this._deleteEntry,this._submitting||i.system_generated||i.is_owner,this.hass.localize("ui.panel.config.users.editor.delete_user"),i.system_generated?(0,x.dy)(l||(l=(0,p.Z)([' <simple-tooltip animation-delay="0" position="right"> '," </simple-tooltip> "])),this.hass.localize("ui.panel.config.users.editor.system_generated_users_not_removable")):"",!i.system_generated&&null!==(e=this.hass.user)&&void 0!==e&&e.is_owner?(0,x.dy)(d||(d=(0,p.Z)(['<mwc-button @click="','"> '," </mwc-button>"])),this._changePassword,this.hass.localize("ui.panel.config.users.editor.change_password")):"",this._updateEntry,!this._name||this._submitting||i.system_generated,this.hass.localize("ui.panel.config.users.editor.update_user"),i.system_generated?(0,x.dy)(c||(c=(0,p.Z)([' <simple-tooltip animation-delay="0" position="left"> '," </simple-tooltip> "])),this.hass.localize("ui.panel.config.users.editor.system_generated_users_not_editable")):"")}},{kind:"method",key:"_nameChanged",value:function(e){this._error=void 0,this._name=e.target.value}},{kind:"method",key:"_adminChanged",value:function(e){this._isAdmin=e.target.checked}},{kind:"method",key:"_localOnlyChanged",value:function(e){this._localOnly=e.target.checked}},{kind:"method",key:"_activeChanged",value:function(e){this._isActive=e.target.checked}},{kind:"method",key:"_updateEntry",value:(S=(0,m.Z)((0,v.Z)().mark((function e(){return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._submitting=!0,e.prev=1,e.next=4,this._params.updateEntry({name:this._name.trim(),is_active:this._isActive,group_ids:[this._isAdmin?C.Pb:C.CE],local_only:this._localOnly});case 4:this._close(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),this._error=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||"Unknown error";case 10:return e.prev=10,this._submitting=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,this,[[1,7,10,13]])}))),function(){return S.apply(this,arguments)})},{kind:"method",key:"_deleteEntry",value:(b=(0,m.Z)((0,v.Z)().mark((function e(){return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._submitting=!0,e.prev=1,e.next=4,this._params.removeEntry();case 4:if(!e.sent){e.next=6;break}this._params=void 0;case 6:return e.prev=6,this._submitting=!1,e.finish(6);case 9:case"end":return e.stop()}}),e,this,[[1,,6,9]])}))),function(){return b.apply(this,arguments)})},{kind:"method",key:"_changePassword",value:(t=(0,m.Z)((0,v.Z)().mark((function e(){var i;return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(i=this._params)||void 0===i?void 0:i.entry.credentials.find((function(e){return"homeassistant"===e.type}))){e.next=4;break}return(0,z.showAlertDialog)(this,{title:"No Home Assistant credentials found."}),e.abrupt("return");case 4:(0,L.o)(this,{userId:this._params.entry.id});case 5:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{kind:"method",key:"_close",value:function(){this._params=void 0}},{kind:"get",static:!0,key:"styles",value:function(){return[E.yu,(0,x.iv)(h||(h=(0,p.Z)(["ha-dialog{--mdc-dialog-max-width:500px}.form{padding-top:16px}.secondary{color:var(--secondary-text-color)}ha-textfield{display:block}.badge-container{margin-top:4px}.badge-container>*{margin:4px 4px 4px 0}.state{background-color:rgba(var(--rgb-primary-text-color),.15);border-radius:16px;padding:4px 8px;margin-top:8px;display:inline-block}.state:not(:first-child){margin-left:8px}.row{display:flex;padding:8px 0}ha-help-tooltip{margin-left:4px;position:relative}"])))]}}]}}),x.oi)},45917:function(e,i,t){t.d(i,{o:function(){return o}});t(51358),t(46798),t(47084),t(5239),t(98490);var n=t(47181),a=function(){return Promise.all([t.e(68331),t.e(39285)]).then(t.bind(t,52431))},o=function(e,i){(0,n.B)(e,"show-dialog",{dialogTag:"dialog-admin-change-password",dialogImport:a,dialogParams:i})}}}]);
//# sourceMappingURL=4503.kRLsbwPQvvQ.js.map