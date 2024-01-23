"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[78529],{61878:function(e,i,t){var a,n,s=t(88962),r=t(33368),o=t(71650),l=t(82390),d=t(69205),c=t(70906),h=t(91808),u=(t(97393),t(68144)),v=t(95260);(0,h.Z)([(0,v.Mo)("ha-dialog-header")],(function(e,i){var t=function(i){(0,d.Z)(a,i);var t=(0,c.Z)(a);function a(){var i;(0,o.Z)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return i=t.call.apply(t,[this].concat(s)),e((0,l.Z)(i)),i}return(0,r.Z)(a)}(i);return{F:t,d:[{kind:"method",key:"render",value:function(){return(0,u.dy)(a||(a=(0,s.Z)([' <header class="header"> <div class="header-bar"> <section class="header-navigation-icon"> <slot name="navigationIcon"></slot> </section> <section class="header-title"> <slot name="title"></slot> </section> <section class="header-action-items"> <slot name="actionItems"></slot> </section> </div> <slot></slot> </header> '])))}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,u.iv)(n||(n=(0,s.Z)([":host{display:block}:host([show-border]){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.header-bar{display:flex;flex-direction:row;align-items:flex-start;padding:4px;box-sizing:border-box}.header-title{flex:1;font-size:22px;line-height:28px;font-weight:400;padding:10px 4px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media all and (min-width:450px) and (min-height:500px){.header-bar{padding:12px}}.header-navigation-icon{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}.header-action-items{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}"])))]}}]}}),u.oi)},34821:function(e,i,t){t.d(i,{i:function(){return k}});var a,n,s,r=t(33368),o=t(71650),l=t(82390),d=t(69205),c=t(70906),h=t(91808),u=t(34541),v=t(47838),p=t(88962),g=(t(97393),t(91989),t(87762)),f=t(91632),_=t(68144),m=t(95260),y=t(74265),b=(t(10983),["button","ha-list-item"]),k=function(e,i){var t;return(0,_.dy)(a||(a=(0,p.Z)([' <div class="header_title"> <span>','</span> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> </div> '])),i,null!==(t=null==e?void 0:e.localize("ui.dialogs.generic.close"))&&void 0!==t?t:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,h.Z)([(0,m.Mo)("ha-dialog")],(function(e,i){var t=function(i){(0,d.Z)(a,i);var t=(0,c.Z)(a);function a(){var i;(0,o.Z)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return i=t.call.apply(t,[this].concat(s)),e((0,l.Z)(i)),i}return(0,r.Z)(a)}(i);return{F:t,d:[{kind:"field",key:y.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,i){var t;null===(t=this.contentElement)||void 0===t||t.scrollTo(e,i)}},{kind:"method",key:"renderHeading",value:function(){return(0,_.dy)(n||(n=(0,p.Z)(['<slot name="heading"> '," </slot>"])),(0,u.Z)((0,v.Z)(t.prototype),"renderHeading",this).call(this))}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,u.Z)((0,v.Z)(t.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,b].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,u.Z)((0,v.Z)(t.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var e=this;return function(){e._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[f.W,(0,_.iv)(s||(s=(0,p.Z)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter,none);backdrop-filter:var(--dialog-backdrop-filter,none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{position:relative;padding-right:40px;padding-inline-end:40px;padding-inline-start:initial;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}.header_button{position:absolute;right:-8px;top:-8px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-8px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),g.M)},10174:function(e,i,t){var a,n,s,r=t(88962),o=t(33368),l=t(71650),d=t(82390),c=t(69205),h=t(70906),u=t(91808),v=t(34541),p=t(47838),g=(t(97393),t(22859),t(10733),t(68144)),f=t(95260),_=t(83448),m=t(47501),y=t(22311),b=t(65253);(0,u.Z)([(0,f.Mo)("ha-user-badge")],(function(e,i){var t=function(i){(0,c.Z)(a,i);var t=(0,h.Z)(a);function a(){var i;(0,l.Z)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return i=t.call.apply(t,[this].concat(s)),e((0,d.Z)(i)),i}return(0,o.Z)(a)}(i);return{F:t,d:[{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"user",value:void 0},{kind:"field",decorators:[(0,f.SB)()],key:"_personPicture",value:void 0},{kind:"field",key:"_personEntityId",value:void 0},{kind:"method",key:"willUpdate",value:function(e){if((0,v.Z)((0,p.Z)(t.prototype),"willUpdate",this).call(this,e),e.has("user"))this._getPersonPicture();else{var i=e.get("hass");if(this._personEntityId&&i&&this.hass.states[this._personEntityId]!==i.states[this._personEntityId]){var a=this.hass.states[this._personEntityId];a?this._personPicture=a.attributes.entity_picture:this._getPersonPicture()}else!this._personEntityId&&i&&this._getPersonPicture()}}},{kind:"method",key:"render",value:function(){if(!this.hass||!this.user)return g.Ld;var e=this._personPicture;if(e)return(0,g.dy)(a||(a=(0,r.Z)(['<div style="','" class="picture"></div>'])),(0,m.V)({backgroundImage:"url(".concat(e,")")}));var i=(0,b.fm)(this.user.name);return(0,g.dy)(n||(n=(0,r.Z)(['<div class="initials ','"> '," </div>"])),(0,_.$)({long:i.length>2}),i)}},{kind:"method",key:"_getPersonPicture",value:function(){if(this._personEntityId=void 0,this._personPicture=void 0,this.hass&&this.user)for(var e=0,i=Object.values(this.hass.states);e<i.length;e++){var t=i[e];if(t.attributes.user_id===this.user.id&&"person"===(0,y.N)(t)){this._personEntityId=t.entity_id,this._personPicture=t.attributes.entity_picture;break}}}},{kind:"get",static:!0,key:"styles",value:function(){return(0,g.iv)(s||(s=(0,r.Z)([":host{display:contents}.picture{width:40px;height:40px;background-size:cover;border-radius:50%}.initials{display:inline-block;box-sizing:border-box;width:40px;line-height:40px;border-radius:50%;text-align:center;background-color:var(--light-primary-color);text-decoration:none;color:var(--text-light-primary-color,var(--primary-text-color));overflow:hidden}.initials.long{font-size:80%}"])))}}]}}),g.oi)},65253:function(e,i,t){t.d(i,{CE:function(){return r},FH:function(){return u},Nq:function(){return d},Pb:function(){return s},fm:function(){return h},h8:function(){return c},r4:function(){return l},uh:function(){return o}});var a=t(99312),n=t(81043),s=(t(85717),t(91989),t(46349),t(70320),t(17692),t(11451),t(36513),"system-admin"),r="system-users",o=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(i){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.callWS({type:"config/auth/list"}));case 1:case"end":return e.stop()}}),e)})));return function(i){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(i,t,n,s){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.callWS({type:"config/auth/create",name:t,group_ids:n,local_only:s}));case 1:case"end":return e.stop()}}),e)})));return function(i,t,a,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(i,t,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.callWS(Object.assign(Object.assign({},n),{},{type:"config/auth/update",user_id:t})));case 1:case"end":return e.stop()}}),e)})));return function(i,t,a){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(i,t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.callWS({type:"config/auth/delete",user_id:t}));case 1:case"end":return e.stop()}}),e)})));return function(i,t){return e.apply(this,arguments)}}(),h=function(e){return e?e.trim().split(" ").slice(0,3).map((function(e){return e.substring(0,1)})).join(""):"?"},u=function(e,i,t){var a=[],n=function(i){return e.localize("ui.panel.config.users.".concat(i))};return i.is_owner&&a.push(["M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20M8 14L7 8L10 10L12 7L14 10L17 8L16 14H8M8.56 16C8.22 16 8 15.78 8 15.44V15H16V15.44C16 15.78 15.78 16 15.44 16H8.56Z",n("is_owner")]),t&&i.system_generated&&a.push(["M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z",n("is_system")]),i.local_only&&a.push(["M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14",n("is_local")]),i.is_active||a.push(["M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z",n("is_not_active")]),a}},78529:function(e,i,t){t.r(i),t.d(i,{HuiDialogEditView:function(){return oe}});var a=t(99312),n=t(81043),s=t(88962),r=t(23370),o=t(33368),l=t(71650),d=t(82390),c=t(69205),h=t(70906),u=t(91808),v=(t(97393),t(85717),t(40271),t(60163),t(46349),t(70320),t(88770),t(47704),t(91441),t(6491),t(68144)),p=t(95260),g=t(83448),f=t(47181),_=t(32594),m=t(83849),y=t(36639),b=(t(9381),t(31206),t(34821),t(61878),t(18900),t(26765)),k=t(11654),w=(t(1528),t(13192)),x=t(54324),Z=t(75140),C=t(87744),L=(t(6315),t(4289)),A=t(73953),M=function(e){(0,c.Z)(t,e);var i=(0,h.Z)(t);function t(){var e;return(0,l.Z)(this,t),(e=i.call(this))._hass=void 0,e._element=void 0,e._config=void 0,e.addEventListener("ll-rebuild",(function(){e._cleanup(),e._config&&(e.config=e._config)})),e}return(0,o.Z)(t,[{key:"_error",get:function(){var e;return"HUI-ERROR-CARD"===(null===(e=this._element)||void 0===e?void 0:e.tagName)}},{key:"hass",set:function(e){this._hass&&this._hass.language===e.language||(this.style.direction=(0,C.HE)(e)?"rtl":"ltr"),this._hass=e,this._element&&(this._element.hass=e)}},{key:"error",set:function(e){this._createBadge((0,L.Fr)("".concat(e.type,": ").concat(e.message)))}},{key:"config",set:function(e){var i=this._config;this._config=e,e?this._element&&!this._error&&i&&e.type===i.type?this._element.setConfig(e):this._createBadge(e):this._cleanup()}},{key:"_createBadge",value:function(e){this._cleanup(),this._element=(0,A.J)(e),this._hass&&(this._element.hass=this._hass),this.appendChild(this._element)}},{key:"_cleanup",value:function(){this._element&&(this.removeChild(this._element),this._element=void 0)}}]),t}((0,Z.Z)(HTMLElement));customElements.define("hui-badge-preview",M);var z,S,I,E,H,P,V,B,T,D,O,j,U,N,F,J,W,R,Q,Y=t(14748),$=(t(22859),t(14516)),q=t(83447),K=(t(68331),(0,u.Z)([(0,p.Mo)("hui-view-editor")],(function(e,i){var t=function(i){(0,c.Z)(a,i);var t=(0,h.Z)(a);function a(){var i;(0,l.Z)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return i=t.call.apply(t,[this].concat(s)),e((0,d.Z)(i)),i}return(0,o.Z)(a)}(i);return{F:t,d:[{kind:"field",decorators:[(0,p.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,p.Cb)({type:Boolean})],key:"isNew",value:void 0},{kind:"field",decorators:[(0,p.SB)()],key:"_config",value:void 0},{kind:"field",key:"_suggestedPath",value:function(){return!1}},{kind:"field",key:"_schema",value:function(){return(0,$.Z)((function(e){return[{name:"title",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"path",selector:{text:{}}},{name:"theme",selector:{theme:{}}},{name:"type",selector:{select:{options:[w.Zx,w.rQ,w.Jh].map((function(i){return{value:i,label:e("ui.panel.lovelace.editor.edit_view.types.".concat(i))}}))}}},{name:"subview",selector:{boolean:{}}}]}))}},{kind:"set",key:"config",value:function(e){this._config=e}},{kind:"get",key:"_type",value:function(){return this._config?this._config.panel?w.Jh:this._config.type||w.Zx:w.Zx}},{kind:"method",key:"render",value:function(){if(!this.hass)return v.Ld;var e=this._schema(this.hass.localize),i=Object.assign(Object.assign({},this._config),{},{type:this._type});return(0,v.dy)(z||(z=(0,s.Z)([' <ha-form .hass="','" .data="','" .schema="','" .computeLabel="','" .computeHelper="','" @value-changed="','"></ha-form> '])),this.hass,i,e,this._computeLabel,this._computeHelper,this._valueChanged)}},{kind:"method",key:"_valueChanged",value:function(e){var i=e.detail.value;"masonry"===i.type&&delete i.type,!this.isNew||this._suggestedPath||!i.title||this._config.path&&i.path!==(0,q.l)(this._config.title||"","-")||(i.path=(0,q.l)(i.title,"-")),(0,f.B)(this,"view-config-changed",{config:i})}},{kind:"field",key:"_computeLabel",value:function(){var e=this;return function(i){switch(i.name){case"path":return e.hass.localize("ui.panel.lovelace.editor.card.generic.url");case"type":return e.hass.localize("ui.panel.lovelace.editor.edit_view.type");case"subview":return e.hass.localize("ui.panel.lovelace.editor.edit_view.subview");default:return e.hass.localize("ui.panel.lovelace.editor.card.generic.".concat(i.name))}}}},{kind:"field",key:"_computeHelper",value:function(){var e=this;return function(i){if("subview"===i.name)return e.hass.localize("ui.panel.lovelace.editor.edit_view.subview_helper")}}}]}}),v.oi),t(53709)),G=t(34541),X=t(47838),ee=(t(37313),t(87438),t(46798),t(9849),t(22890),t(13526),t(36513),t(44577),t(85415)),ie=(t(10174),t(65253)),te=((0,u.Z)([(0,p.Mo)("hui-view-visibility-editor")],(function(e,i){var t=function(i){(0,c.Z)(a,i);var t=(0,h.Z)(a);function a(){var i;(0,l.Z)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return i=t.call.apply(t,[this].concat(s)),e((0,d.Z)(i)),i}return(0,o.Z)(a)}(i);return{F:t,d:[{kind:"set",key:"config",value:function(e){this._config=e,this._visible=void 0===this._config.visible||this._config.visible}},{kind:"field",decorators:[(0,p.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,p.Cb)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,p.SB)()],key:"_users",value:void 0},{kind:"field",decorators:[(0,p.SB)()],key:"_visible",value:void 0},{kind:"field",key:"_sortedUsers",value:function(){var e=this;return(0,$.Z)((function(i){return i.sort((function(i,t){return(0,ee.$)(i.name,t.name,e.hass.locale.language)}))}))}},{kind:"method",key:"firstUpdated",value:function(e){var i=this;(0,G.Z)((0,X.Z)(t.prototype),"firstUpdated",this).call(this,e),(0,ie.uh)(this.hass).then((function(e){i._users=e.filter((function(e){return!e.system_generated}))}))}},{kind:"method",key:"render",value:function(){var e=this;return this.hass&&this._users?(0,v.dy)(S||(S=(0,s.Z)([" <p> "," </p> "," "])),this.hass.localize("ui.panel.lovelace.editor.edit_view.visibility.select_users"),this._sortedUsers(this._users).map((function(i){return(0,v.dy)(I||(I=(0,s.Z)([' <mwc-list-item graphic="avatar" hasMeta> <ha-user-badge slot="graphic" .hass="','" .user="','"></ha-user-badge> <span>','</span> <ha-switch slot="meta" .userId="','" @change="','" .checked="','"></ha-switch> </mwc-list-item> '])),e.hass,i,i.name,i.id,e.valChange,e.checkUser(i.id))}))):v.Ld}},{kind:"method",key:"checkUser",value:function(e){return void 0===this._visible||("boolean"==typeof this._visible?this._visible:this._visible.some((function(i){return i.user===e})))}},{kind:"method",key:"valChange",value:function(e){var i=this,t=e.currentTarget.userId,a=e.currentTarget.checked,n=[];"boolean"==typeof this._visible?this._visible&&(n=this._users.map((function(e){return{user:e.id}}))):n=(0,K.Z)(this._visible);if(!0===a){var s={user:t};n.push(s)}else n=n.filter((function(e){return e.user!==t}));this._visible=n.filter((function(e){return i._users.some((function(i){return i.id===e.user}))})),(0,f.B)(this,"view-visibility-changed",{visible:this._visible})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,v.iv)(E||(E=(0,s.Z)([":host{display:block}"])))}}]}}),v.oi),t(33464)),ae=["strategy"],ne=["cards","badges"],se=["badges"],re="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",oe=(0,u.Z)([(0,p.Mo)("hui-dialog-edit-view")],(function(e,i){var t,u,Z,C=function(i){(0,c.Z)(a,i);var t=(0,h.Z)(a);function a(){var i;(0,l.Z)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return i=t.call.apply(t,[this].concat(s)),e((0,d.Z)(i)),i}return(0,o.Z)(a)}(i);return{F:C,d:[{kind:"field",decorators:[(0,p.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,p.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,p.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,p.SB)()],key:"_badges",value:void 0},{kind:"field",decorators:[(0,p.SB)()],key:"_cards",value:void 0},{kind:"field",decorators:[(0,p.SB)()],key:"_saving",value:function(){return!1}},{kind:"field",decorators:[(0,p.SB)()],key:"_curTab",value:void 0},{kind:"field",decorators:[(0,p.SB)()],key:"_dirty",value:function(){return!1}},{kind:"field",decorators:[(0,p.SB)()],key:"_yamlMode",value:function(){return!1}},{kind:"field",decorators:[(0,p.IO)("ha-yaml-editor")],key:"_editor",value:void 0},{kind:"field",key:"_curTabIndex",value:function(){return 0}},{kind:"get",key:"_type",value:function(){return this._config?this._config.panel?w.Jh:this._config.type||w.Zx:w.Zx}},{kind:"method",key:"updated",value:function(e){if(this._yamlMode&&e.has("_yamlMode")){var i,t=Object.assign(Object.assign({},this._config),{},{badges:this._badges});null===(i=this._editor)||void 0===i||i.setValue(t)}}},{kind:"method",key:"showDialog",value:function(e){if(this._params=e,void 0===this._params.viewIndex)return this._config={},this._badges=[],this._cards=[],void(this._dirty=!1);var i=this._params.lovelace.config.views[this._params.viewIndex];if((0,te.s)(i)){i.strategy;var t=(0,r.Z)(i,ae);return this._config=t,this._badges=[],void(this._cards=[])}var a=i.cards,n=i.badges,s=(0,r.Z)(i,ne);this._config=s,this._badges=n?(0,Y.Q)(n):[],this._cards=a}},{kind:"method",key:"closeDialog",value:function(){this._curTabIndex=0,this._params=void 0,this._config={},this._badges=[],this._yamlMode=!1,this._dirty=!1,(0,f.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"get",key:"_viewConfigTitle",value:function(){return this._config&&this._config.title?this.hass.localize("ui.panel.lovelace.editor.edit_view.header_name",{name:this._config.title}):this.hass.localize("ui.panel.lovelace.editor.edit_view.header")}},{kind:"method",key:"render",value:function(){var e,i,t=this;if(!this._params)return v.Ld;if(this._yamlMode)i=(0,v.dy)(H||(H=(0,s.Z)([' <ha-yaml-editor .hass="','" dialogInitialFocus @value-changed="','"></ha-yaml-editor> '])),this.hass,this._viewYamlChanged);else switch(this._curTab){case"tab-settings":i=(0,v.dy)(P||(P=(0,s.Z)([' <hui-view-editor .isNew="','" .hass="','" .config="','" @view-config-changed="','"></hui-view-editor> '])),void 0===this._params.viewIndex,this.hass,this._config,this._viewConfigChanged);break;case"tab-badges":i=(0,v.dy)(V||(V=(0,s.Z)([" ",' <hui-entity-editor .hass="','" .entities="','" @entities-changed="','"></hui-entity-editor> '])),null!==(e=this._badges)&&void 0!==e&&e.length?(0,v.dy)(B||(B=(0,s.Z)([" ",' <div class="preview-badges"> '," </div> "])),w.cW.includes(this._type)?(0,v.dy)(T||(T=(0,s.Z)([' <ha-alert alert-type="warning"> '," </ha-alert> "])),this.hass.localize("ui.panel.lovelace.editor.edit_badges.view_no_badges")):"",this._badges.map((function(e){return(0,v.dy)(D||(D=(0,s.Z)([' <hui-badge-preview .hass="','" .config="','"></hui-badge-preview> '])),t.hass,e)}))):"",this.hass,this._badges,this._badgesChanged);break;case"tab-visibility":i=(0,v.dy)(O||(O=(0,s.Z)([' <hui-view-visibility-editor .hass="','" .config="','" @view-visibility-changed="','"></hui-view-visibility-editor> '])),this.hass,this._config,this._viewVisibilityChanged);break;case"tab-cards":i=(0,v.dy)(j||(j=(0,s.Z)([" Cards "])))}return(0,v.dy)(U||(U=(0,s.Z)([' <ha-dialog open scrimClickAction escapeKeyAction @closed="','" .heading="','" class="','"> <ha-dialog-header show-border slot="heading"> <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label="','" .path="','"></ha-icon-button> <h2 slot="title">','</h2> <ha-button-menu slot="actionItems" fixed corner="BOTTOM_END" menuCorner="END" @action="','" @closed="','"> <ha-icon-button slot="trigger" .label="','" .path="','"></ha-icon-button> <mwc-list-item graphic="icon"> '," ",' </mwc-list-item> <mwc-list-item graphic="icon"> '," "," </mwc-list-item> </ha-button-menu> "," </ha-dialog-header> "," ",' <mwc-button @click="','" slot="primaryAction">','</mwc-button> <mwc-button slot="primaryAction" ?disabled="','" @click="','"> '," ","</mwc-button> </ha-dialog> "])),this.closeDialog,this._viewConfigTitle,(0,g.$)({"yaml-mode":this._yamlMode}),this.hass.localize("ui.common.close"),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",this._viewConfigTitle,this._handleAction,_.U,this.hass.localize("ui.common.menu"),"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",this.hass.localize("ui.panel.lovelace.editor.edit_view.edit_ui"),this._yamlMode?"":(0,v.dy)(N||(N=(0,s.Z)(['<ha-svg-icon class="selected_menu_item" slot="graphic" .path="','"></ha-svg-icon>'])),re),this.hass.localize("ui.panel.lovelace.editor.edit_view.edit_yaml"),this._yamlMode?(0,v.dy)(F||(F=(0,s.Z)(['<ha-svg-icon class="selected_menu_item" slot="graphic" .path="','"></ha-svg-icon>'])),re):"",this._yamlMode?"":(0,v.dy)(J||(J=(0,s.Z)(['<paper-tabs scrollable hide-scroll-buttons .selected="','" @selected-item-changed="','"> <paper-tab id="tab-settings" dialogInitialFocus>','</paper-tab> <paper-tab id="tab-badges">','</paper-tab> <paper-tab id="tab-visibility">',"</paper-tab> </paper-tabs>"])),this._curTabIndex,this._handleTabSelected,this.hass.localize("ui.panel.lovelace.editor.edit_view.tab_settings"),this.hass.localize("ui.panel.lovelace.editor.edit_view.tab_badges"),this.hass.localize("ui.panel.lovelace.editor.edit_view.tab_visibility")),i,void 0!==this._params.viewIndex?(0,v.dy)(W||(W=(0,s.Z)([' <mwc-button class="warning" slot="secondaryAction" @click="','"> '," </mwc-button> "])),this._deleteConfirm,this.hass.localize("ui.panel.lovelace.editor.edit_view.delete")):"",this.closeDialog,this.hass.localize("ui.common.cancel"),!this._config||this._saving||!this._dirty,this._save,this._saving?(0,v.dy)(R||(R=(0,s.Z)(['<ha-circular-progress indeterminate size="small" aria-label="Saving"></ha-circular-progress>']))):"",this.hass.localize("ui.common.save"))}},{kind:"method",key:"_handleAction",value:(Z=(0,n.Z)((0,a.Z)().mark((function e(i){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.stopPropagation(),i.preventDefault(),e.t0=i.detail.index,e.next=0===e.t0?5:1===e.t0?7:9;break;case 5:return this._yamlMode=!1,e.abrupt("break",9);case 7:return this._yamlMode=!0,e.abrupt("break",9);case 9:case"end":return e.stop()}}),e,this)}))),function(e){return Z.apply(this,arguments)})},{kind:"method",key:"_delete",value:(u=(0,n.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._params){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,this._params.lovelace.saveConfig((0,x.PT)(this._params.lovelace.config,this._params.viewIndex));case 5:this.closeDialog(),(0,m.c)("/".concat(window.location.pathname.split("/")[1])),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),(0,b.showAlertDialog)(this,{text:"Deleting failed: ".concat(e.t0.message)});case 12:case"end":return e.stop()}}),e,this,[[2,9]])}))),function(){return u.apply(this,arguments)})},{kind:"method",key:"_deleteConfirm",value:function(){var e,i,t,a,n=this;(0,b.showConfirmationDialog)(this,{title:this.hass.localize("ui.panel.lovelace.views.confirm_delete".concat(null!==(e=this._cards)&&void 0!==e&&e.length?"_existing_cards":"")),text:this.hass.localize("ui.panel.lovelace.views.confirm_delete".concat(null!==(i=this._cards)&&void 0!==i&&i.length?"_existing_cards":"","_text"),{name:(null===(t=this._config)||void 0===t?void 0:t.title)||"Unnamed view",number:(null===(a=this._cards)||void 0===a?void 0:a.length)||0}),confirm:function(){return n._delete()}})}},{kind:"method",key:"_handleTabSelected",value:function(e){e.detail.value&&(this._curTab=e.detail.value.id)}},{kind:"method",key:"_save",value:(t=(0,n.Z)((0,a.Z)().mark((function e(){var i,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._params&&this._config){e.next=2;break}return e.abrupt("return");case 2:if(this._isConfigChanged()){e.next=5;break}return this.closeDialog(),e.abrupt("return");case 5:return this._saving=!0,i=Object.assign(Object.assign({},this._config),{},{badges:this._badges,cards:this._cards}),t=this._params.lovelace,e.prev=8,e.next=11,t.saveConfig(this._creatingView?(0,x.Uo)(this.hass,t.config,i):(0,x.YI)(this.hass,t.config,this._params.viewIndex,i));case 11:this._params.saveCallback&&this._params.saveCallback(this._params.viewIndex||t.config.views.length,i),this.closeDialog(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),(0,b.showAlertDialog)(this,{text:"".concat(this.hass.localize("ui.panel.lovelace.editor.edit_view.saving_failed"),": ").concat(e.t0.message)});case 18:return e.prev=18,this._saving=!1,e.finish(18);case 21:case"end":return e.stop()}}),e,this,[[8,15,18,21]])}))),function(){return t.apply(this,arguments)})},{kind:"method",key:"_viewConfigChanged",value:function(e){e.detail&&e.detail.config&&!(0,y.v)(this._config,e.detail.config)&&(this._config=e.detail.config,this._dirty=!0)}},{kind:"method",key:"_viewVisibilityChanged",value:function(e){e.detail.visible&&this._config&&(this._config.visible=e.detail.visible),this._dirty=!0}},{kind:"method",key:"_badgesChanged",value:function(e){this._badges&&this.hass&&e.detail&&e.detail.entities&&(this._badges=(0,Y.Q)(e.detail.entities),this._dirty=!0)}},{kind:"method",key:"_viewYamlChanged",value:function(e){if(e.stopPropagation(),e.detail.isValid){var i=e.detail.value,t=i.badges,a=void 0===t?[]:t,n=(0,r.Z)(i,se);this._config=n,this._badges=a,this._dirty=!0}}},{kind:"method",key:"_isConfigChanged",value:function(){return this._creatingView||JSON.stringify(this._config)!==JSON.stringify(this._params.lovelace.config.views[this._params.viewIndex])}},{kind:"get",key:"_creatingView",value:function(){return void 0===this._params.viewIndex}},{kind:"get",static:!0,key:"styles",value:function(){return[k.yu,(0,v.iv)(Q||(Q=(0,s.Z)(["ha-dialog{--vertical-align-dialog:flex-start;--dialog-surface-margin-top:40px}@media all and (max-width:450px),all and (max-height:500px){ha-dialog{--dialog-surface-margin-top:0px}}ha-dialog.yaml-mode{--dialog-content-padding:0}h2{margin:0;font-size:inherit;font-weight:inherit}paper-tabs{--paper-tabs-selection-bar-color:var(--primary-color);color:var(--primary-text-color);text-transform:uppercase;padding:0 20px}mwc-button.warning{margin-right:auto}ha-circular-progress{display:none}ha-circular-progress[indeterminate]{display:block}.selected_menu_item{color:var(--primary-color)}.hidden{display:none}.error{color:var(--error-color);border-bottom:1px solid var(--error-color)}.preview-badges{display:flex;justify-content:center;margin:12px 16px;flex-wrap:wrap}@media all and (min-width:600px){ha-dialog{--mdc-dialog-min-width:600px}}"])))]}}]}}),v.oi)}}]);
//# sourceMappingURL=78529.ZvKGHiK020s.js.map