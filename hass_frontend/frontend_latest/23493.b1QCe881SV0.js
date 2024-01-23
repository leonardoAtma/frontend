export const id=23493;export const ids=[23493];export const modules={7323:(e,i,t)=>{t.d(i,{p:()=>a});const a=(e,i)=>e&&e.config.components.includes(i)},74834:(e,i,t)=>{var a=t(17463),n=t(14271),o=t(68144),s=t(79932),d=t(3712);(0,a.Z)([(0,s.Mo)("ha-button")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[d.W,o.iv`::slotted([slot=icon]){margin-inline-start:0px;margin-inline-end:8px;direction:var(--direction);display:block}.mdc-button{height:var(--button-height,36px)}.trailing-icon{display:flex}.slot-container{overflow:var(--button-slot-container-overflow,visible)}`]}]}}),n.Button)},84431:(e,i,t)=>{var a=t(17463),n=t(34541),o=t(47838),s=t(68144),d=t(63335),l=t(21270),r=t(96762),c=t(79932),h=t(47181);(0,a.Z)([(0,c.Mo)("ha-check-list-item")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"method",key:"onChange",value:async function(e){(0,n.Z)((0,o.Z)(t.prototype),"onChange",this).call(this,e),(0,h.B)(this,e.type)}},{kind:"field",static:!0,key:"styles",value:()=>[r.W,l.W,s.iv`:host{--mdc-theme-secondary:var(--primary-color)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,16px);margin-inline-start:0px;direction:var(--direction)}.mdc-deprecated-list-item__meta{flex-shrink:0;direction:var(--direction);margin-inline-start:auto;margin-inline-end:0}.mdc-deprecated-list-item__graphic{margin-top:var(--check-list-item-graphic-margin-top)}`]}]}}),d.F)},61878:(e,i,t)=>{var a=t(17463),n=t(68144),o=t(79932);(0,a.Z)([(0,o.Mo)("ha-dialog-header")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"method",key:"render",value:function(){return n.dy` <header class="header"> <div class="header-bar"> <section class="header-navigation-icon"> <slot name="navigationIcon"></slot> </section> <section class="header-title"> <slot name="title"></slot> </section> <section class="header-action-items"> <slot name="actionItems"></slot> </section> </div> <slot></slot> </header> `}},{kind:"get",static:!0,key:"styles",value:function(){return[n.iv`:host{display:block}:host([show-border]){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.header-bar{display:flex;flex-direction:row;align-items:flex-start;padding:4px;box-sizing:border-box}.header-title{flex:1;font-size:22px;line-height:28px;font-weight:400;padding:10px 4px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media all and (min-width:450px) and (min-height:500px){.header-bar{padding:12px}}.header-navigation-icon{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}.header-action-items{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}`]}}]}}),n.oi)},34821:(e,i,t)=>{t.d(i,{i:()=>p});var a=t(17463),n=t(34541),o=t(47838),s=t(87762),d=t(91632),l=t(68144),r=t(79932),c=t(74265);t(10983);const h=["button","ha-list-item"],p=(e,i)=>{var t;return l.dy` <div class="header_title"> <span>${i}</span> <ha-icon-button .label="${null!==(t=null==e?void 0:e.localize("ui.dialogs.generic.close"))&&void 0!==t?t:"Close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> </div> `};(0,a.Z)([(0,r.Mo)("ha-dialog")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",key:c.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,i){var t;null===(t=this.contentElement)||void 0===t||t.scrollTo(e,i)}},{kind:"method",key:"renderHeading",value:function(){return l.dy`<slot name="heading"> ${(0,n.Z)((0,o.Z)(t.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,n.Z)((0,o.Z)(t.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,h].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,n.Z)((0,o.Z)(t.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[d.W,l.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter,none);backdrop-filter:var(--dialog-backdrop-filter,none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{position:relative;padding-right:40px;padding-inline-end:40px;padding-inline-start:initial;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}.header_button{position:absolute;right:-8px;top:-8px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-8px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),s.M)},37610:(e,i,t)=>{var a=t(17463),n=t(68144),o=t(79932);t(52039);(0,a.Z)([(0,o.Mo)("ha-tip")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"method",key:"render",value:function(){return this.hass?n.dy` <ha-svg-icon .path="${"M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z"}"></ha-svg-icon> <span class="prefix">${this.hass.localize("ui.panel.config.tips.tip")}</span> <span class="text"><slot></slot></span> `:n.Ld}},{kind:"field",static:!0,key:"styles",value:()=>n.iv`:host{display:block;text-align:center}.text{direction:var(--direction);margin-left:2px;margin-inline-start:2px;margin-inline-end:initial;color:var(--secondary-text-color)}.prefix{font-weight:500}`}]}}),n.oi)},23493:(e,i,t)=>{t.a(e,(async(e,a)=>{try{t.r(i);var n=t(17463),o=t(62434),s=(t(63436),t(44577),t(68144)),d=t(79932),l=t(18848),r=t(47181),c=t(87744),h=t(69371),p=t(72371),m=t(26765),g=t(11654),u=(t(74834),t(84431),t(31206),t(34821),t(61878),t(52039),t(37610),t(95397)),v=(t(73523),t(7323)),_=e([u]);u=(_.then?(await _)():_)[0];const f="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",y="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";(0,n.Z)([(0,d.Mo)("dialog-media-manage")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_currentItem",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_uploading",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_deleting",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_selected",value:()=>new Set},{kind:"field",key:"_filesChanged",value:()=>!1},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._refreshMedia()}},{kind:"method",key:"closeDialog",value:function(){this._filesChanged&&this._params.onClose&&this._params.onClose(),this._params=void 0,this._currentItem=void 0,this._uploading=!1,this._deleting=!1,this._filesChanged=!1,(0,r.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var e,i;if(!this._params)return s.Ld;const t=(null===(e=this._currentItem)||void 0===e||null===(e=e.children)||void 0===e?void 0:e.filter((e=>!e.can_expand)))||[];let a=0;return s.dy` <ha-dialog open scrimClickAction escapeKeyAction hideActions flexContent .heading="${this._params.currentItem.title}" @closed="${this.closeDialog}"> <ha-dialog-header slot="heading"> ${0===this._selected.size?s.dy` <span slot="title"> ${this.hass.localize("ui.components.media-browser.file_management.title")} </span> <ha-media-upload-button .disabled="${this._deleting}" .hass="${this.hass}" .currentItem="${this._params.currentItem}" @uploading="${this._startUploading}" @media-refresh="${this._doneUploading}" slot="actionItems"></ha-media-upload-button> ${this._uploading?"":s.dy` <ha-icon-button .label="${this.hass.localize("ui.dialogs.generic.close")}" .path="${f}" dialogAction="close" slot="navigationIcon" dir="${(0,c.Zu)(this.hass)}"></ha-icon-button> `} `:s.dy` <ha-button class="danger" slot="title" .disabled="${this._deleting}" .label="${this.hass.localize("ui.components.media-browser.file_management."+(this._deleting?"deleting":"delete"),{count:this._selected.size})}" @click="${this._handleDelete}"> <ha-svg-icon .path="${y}" slot="icon"></ha-svg-icon> </ha-button> ${this._deleting?"":s.dy` <ha-button slot="actionItems" .label="${"Deselect all"}" @click="${this._handleDeselectAll}"> <ha-svg-icon .path="${f}" slot="icon"></ha-svg-icon> </ha-button> `} `} </ha-dialog-header> ${this._currentItem?t.length?s.dy` <mwc-list multi @selected="${this._handleSelected}"> ${(0,l.r)(t,(e=>e.media_content_id),(e=>{const i=s.dy` <ha-svg-icon slot="graphic" .path="${h.Fn["directory"===e.media_class&&e.children_media_class||e.media_class].icon}"></ha-svg-icon> `;return s.dy` <ha-check-list-item ${(0,o.jt)({id:e.media_content_id,skipInitial:!0})} graphic="icon" .disabled="${this._uploading||this._deleting}" .selected="${this._selected.has(a++)}" .item="${e}"> ${i} ${e.title} </ha-check-list-item> `}))} </mwc-list> `:s.dy`<div class="no-items"> <p> ${this.hass.localize("ui.components.media-browser.file_management.no_items")} </p> ${null!==(i=this._currentItem)&&void 0!==i&&null!==(i=i.children)&&void 0!==i&&i.length?s.dy`<span class="folders">${this.hass.localize("ui.components.media-browser.file_management.folders_not_supported")}</span>`:""} </div>`:s.dy` <div class="refresh"> <ha-circular-progress indeterminate></ha-circular-progress> </div> `} ${(0,v.p)(this.hass,"hassio")?s.dy`<ha-tip .hass="${this.hass}"> ${this.hass.localize("ui.components.media-browser.file_management.tip_media_storage",{storage:s.dy`<a href="/config/storage" @click="${this.closeDialog}"> ${this.hass.localize("ui.components.media-browser.file_management.tip_storage_panel").toLowerCase()} </a>`})} </ha-tip>`:s.Ld} </ha-dialog> `}},{kind:"method",key:"_handleSelected",value:function(e){this._selected=e.detail.index}},{kind:"method",key:"_startUploading",value:function(){this._uploading=!0,this._filesChanged=!0}},{kind:"method",key:"_doneUploading",value:function(){this._uploading=!1,this._refreshMedia()}},{kind:"method",key:"_handleDeselectAll",value:function(){this._selected.size&&(this._selected=new Set)}},{kind:"method",key:"_handleDelete",value:async function(){if(!await(0,m.showConfirmationDialog)(this,{text:this.hass.localize("ui.components.media-browser.file_management.confirm_delete",{count:this._selected.size}),warning:!0}))return;this._filesChanged=!0,this._deleting=!0;const e=[];let i=0;this._currentItem.children.forEach((t=>{t.can_expand||this._selected.has(i++)&&e.push(t)}));try{await Promise.all(e.map((async e=>{await(0,p.Qr)(this.hass,e.media_content_id),this._currentItem={...this._currentItem,children:this._currentItem.children.filter((i=>i!==e))}})))}finally{this._deleting=!1,this._selected=new Set}}},{kind:"method",key:"_refreshMedia",value:async function(){this._selected=new Set,this._currentItem=void 0,this._currentItem=await(0,p.b)(this.hass,this._params.currentItem.media_content_id)}},{kind:"get",static:!0,key:"styles",value:function(){return[g.yu,s.iv`ha-dialog{--dialog-z-index:9;--dialog-content-padding:0}@media (min-width:800px){ha-dialog{--mdc-dialog-max-width:800px;--dialog-surface-position:fixed;--dialog-surface-top:40px;--mdc-dialog-max-height:calc(100vh - 72px)}}ha-dialog-header ha-button,ha-dialog-header ha-media-upload-button{--mdc-theme-primary:var(--primary-text-color);margin:6px;display:block}mwc-list{direction:ltr}.danger{--mdc-theme-primary:var(--error-color)}ha-svg-icon[slot=icon]{vertical-align:middle}ha-tip{margin:16px}ha-svg-icon[slot=icon]{margin-inline-start:0px!important;margin-inline-end:8px!important;direction:var(--direction)}.refresh{display:flex;height:200px;justify-content:center;align-items:center}.no-items{text-align:center;padding:16px}.folders{color:var(--secondary-text-color);font-style:italic}`]}}]}}),s.oi);a()}catch(e){a(e)}}))},73523:(e,i,t)=>{var a=t(17463),n=(t(14271),t(68144)),o=t(79932),s=t(47181),d=t(72371),l=t(26765);t(31206),t(52039);(0,a.Z)([(0,o.Mo)("ha-media-upload-button")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"currentItem",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_uploading",value:()=>0},{kind:"method",key:"render",value:function(){return this.currentItem&&(0,d.aV)(this.currentItem.media_content_id||"")?n.dy` <mwc-button .label="${this._uploading>0?this.hass.localize("ui.components.media-browser.file_management.uploading",{count:this._uploading}):this.hass.localize("ui.components.media-browser.file_management.add_media")}" .disabled="${this._uploading>0}" @click="${this._startUpload}"> ${this._uploading>0?n.dy` <ha-circular-progress size="small" indeterminate area-label="Uploading" slot="icon"></ha-circular-progress> `:n.dy` <ha-svg-icon .path="${"M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z"}" slot="icon"></ha-svg-icon> `} </mwc-button> `:n.Ld}},{kind:"method",key:"_startUpload",value:async function(){if(this._uploading>0)return;const e=document.createElement("input");e.type="file",e.accept="audio/*,video/*,image/*",e.multiple=!0,e.addEventListener("change",(async()=>{(0,s.B)(this,"uploading");const i=e.files;document.body.removeChild(e);const t=this.currentItem.media_content_id;for(let e=0;e<i.length;e++){this._uploading=i.length-e;try{await(0,d.oE)(this.hass,t,i[e])}catch(e){(0,l.showAlertDialog)(this,{text:this.hass.localize("ui.components.media-browser.file_management.upload_failed",{reason:e.message||e})});break}}this._uploading=0,(0,s.B)(this,"media-refresh")}),{once:!0}),e.style.display="none",document.body.append(e),e.click()}},{kind:"field",static:!0,key:"styles",value:()=>n.iv`mwc-button{--mdc-button-disabled-ink-color:--mdc-theme-primary}ha-circular-progress[slot=icon],ha-svg-icon[slot=icon]{vertical-align:middle}ha-svg-icon[slot=icon]{margin-inline-start:0px;margin-inline-end:8px;direction:var(--direction)}`}]}}),n.oi)}};
//# sourceMappingURL=23493.b1QCe881SV0.js.map