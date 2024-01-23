/*! For license information please see 40220.FfppifkXeDA.js.LICENSE.txt */
export const id=40220;export const ids=[40220];export const modules={21384:(e,t,i)=>{i.d(t,{t:()=>d});i(56646);var o=i(42687),a=i(74460);let r={},s={};function n(e,t){r[e]=s[e.toLowerCase()]=t}function l(e){return r[e]||s[e.toLowerCase()]}class d extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let i=l(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,o){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=(0,o.Kk)(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=(0,o.iY)(t)}return this.__assetpath}register(e){if(e=e||this.id){if(a.strictTemplatePolicy&&void 0!==l(e))throw n(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,n(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}d.prototype.modules=r,customElements.define("dom-module",d)},77576:(e,t,i)=>{var o=i(17463),a=i(34541),r=i(47838),s=i(29530),n=(i(93584),i(53947)),l=i(68144),d=i(79932),c=i(30153),u=i(47181);i(10983),i(73366),i(3555);(0,n.hC)("vaadin-combo-box-item",l.iv`:host{padding:0!important}:host([focused]:not([disabled])){background-color:rgba(var(--rgb-primary-text-color,0,0,0),.12)}:host([selected]:not([disabled])){background-color:transparent;color:var(--mdc-theme-primary);--mdc-ripple-color:var(--mdc-theme-primary);--mdc-theme-text-primary-on-background:var(--mdc-theme-primary)}:host([selected]:not([disabled])):before{background-color:var(--mdc-theme-primary);opacity:.12;content:"";position:absolute;top:0;left:0;width:100%;height:100%}:host([selected][focused]:not([disabled])):before{opacity:.24}:host(:hover:not([disabled])){background-color:transparent}[part=content]{width:100%}[part=checkmark]{display:none}`);(0,o.Z)([(0,d.Mo)("ha-combo-box")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"validationMessage",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"invalid",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"icon",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"items",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"filteredItems",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"dataProvider",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:"allow-custom-value",type:Boolean})],key:"allowCustomValue",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({attribute:"item-value-path"})],key:"itemValuePath",value:()=>"value"},{kind:"field",decorators:[(0,d.Cb)({attribute:"item-label-path"})],key:"itemLabelPath",value:()=>"label"},{kind:"field",decorators:[(0,d.Cb)({attribute:"item-id-path"})],key:"itemIdPath",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"renderer",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0,attribute:"opened"})],key:"opened",value:void 0},{kind:"field",decorators:[(0,d.IO)("vaadin-combo-box-light",!0)],key:"_comboBox",value:void 0},{kind:"field",decorators:[(0,d.IO)("ha-textfield",!0)],key:"_inputElement",value:void 0},{kind:"field",key:"_overlayMutationObserver",value:void 0},{kind:"field",key:"_bodyMutationObserver",value:void 0},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,null===(e=this._comboBox)||void 0===e||e.open()}},{kind:"method",key:"focus",value:async function(){var e,t;await this.updateComplete,await(null===(e=this._inputElement)||void 0===e?void 0:e.updateComplete),null===(t=this._inputElement)||void 0===t||t.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,r.Z)(i.prototype),"disconnectedCallback",this).call(this),this._overlayMutationObserver&&(this._overlayMutationObserver.disconnect(),this._overlayMutationObserver=void 0),this._bodyMutationObserver&&(this._bodyMutationObserver.disconnect(),this._bodyMutationObserver=void 0)}},{kind:"get",key:"selectedItem",value:function(){return this._comboBox.selectedItem}},{kind:"method",key:"setInputValue",value:function(e){this._comboBox.value=e}},{kind:"method",key:"render",value:function(){var e;return l.dy` <vaadin-combo-box-light .itemValuePath="${this.itemValuePath}" .itemIdPath="${this.itemIdPath}" .itemLabelPath="${this.itemLabelPath}" .items="${this.items}" .value="${this.value||""}" .filteredItems="${this.filteredItems}" .dataProvider="${this.dataProvider}" .allowCustomValue="${this.allowCustomValue}" .disabled="${this.disabled}" .required="${this.required}" ${(0,s.t)(this.renderer||this._defaultRowRenderer)} @opened-changed="${this._openedChanged}" @filter-changed="${this._filterChanged}" @value-changed="${this._valueChanged}" attr-for-value="value"> <ha-textfield label="${(0,c.o)(this.label)}" placeholder="${(0,c.o)(this.placeholder)}" ?disabled="${this.disabled}" ?required="${this.required}" validationMessage="${(0,c.o)(this.validationMessage)}" .errorMessage="${this.errorMessage}" class="input" autocapitalize="none" autocomplete="off" autocorrect="off" input-spellcheck="false" .suffix="${l.dy`<div style="width:28px" role="none presentation"></div>`}" .icon="${this.icon}" .invalid="${this.invalid}" .helper="${this.helper}" helperPersistent> <slot name="icon" slot="leadingIcon"></slot> </ha-textfield> ${this.value?l.dy`<ha-svg-icon role="button" tabindex="-1" aria-label="${(0,c.o)(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.clear"))}" class="clear-button" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" @click="${this._clearValue}"></ha-svg-icon>`:""} <ha-svg-icon role="button" tabindex="-1" aria-label="${(0,c.o)(this.label)}" aria-expanded="${this.opened?"true":"false"}" class="toggle-button" .path="${this.opened?"M7,15L12,10L17,15H7Z":"M7,10L12,15L17,10H7Z"}" @click="${this._toggleOpen}"></ha-svg-icon> </vaadin-combo-box-light> `}},{kind:"field",key:"_defaultRowRenderer",value(){return e=>l.dy`<ha-list-item> ${this.itemLabelPath?e[this.itemLabelPath]:e} </ha-list-item>`}},{kind:"method",key:"_clearValue",value:function(e){e.stopPropagation(),(0,u.B)(this,"value-changed",{value:void 0})}},{kind:"method",key:"_toggleOpen",value:function(e){var t,i;this.opened?(null===(t=this._comboBox)||void 0===t||t.close(),e.stopPropagation()):null===(i=this._comboBox)||void 0===i||i.inputElement.focus()}},{kind:"method",key:"_openedChanged",value:function(e){e.stopPropagation();const t=e.detail.value;if(setTimeout((()=>{this.opened=t}),0),(0,u.B)(this,"opened-changed",{value:e.detail.value}),t){const e=document.querySelector("vaadin-combo-box-overlay");e&&this._removeInert(e),this._observeBody()}else{var i;null===(i=this._bodyMutationObserver)||void 0===i||i.disconnect(),this._bodyMutationObserver=void 0}}},{kind:"method",key:"_observeBody",value:function(){"MutationObserver"in window&&!this._bodyMutationObserver&&(this._bodyMutationObserver=new MutationObserver((e=>{e.forEach((e=>{e.addedNodes.forEach((e=>{"VAADIN-COMBO-BOX-OVERLAY"===e.nodeName&&this._removeInert(e)})),e.removedNodes.forEach((e=>{var t;"VAADIN-COMBO-BOX-OVERLAY"===e.nodeName&&(null===(t=this._overlayMutationObserver)||void 0===t||t.disconnect(),this._overlayMutationObserver=void 0)}))}))})),this._bodyMutationObserver.observe(document.body,{childList:!0}))}},{kind:"method",key:"_removeInert",value:function(e){var t;if(e.inert)return e.inert=!1,null===(t=this._overlayMutationObserver)||void 0===t||t.disconnect(),void(this._overlayMutationObserver=void 0);"MutationObserver"in window&&!this._overlayMutationObserver&&(this._overlayMutationObserver=new MutationObserver((e=>{e.forEach((e=>{if("inert"===e.attributeName){const i=e.target;var t;if(i.inert)null===(t=this._overlayMutationObserver)||void 0===t||t.disconnect(),this._overlayMutationObserver=void 0,i.inert=!1}}))})),this._overlayMutationObserver.observe(e,{attributes:!0}))}},{kind:"method",key:"_filterChanged",value:function(e){e.stopPropagation(),(0,u.B)(this,"filter-changed",{value:e.detail.value})}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation(),this.allowCustomValue||(this._comboBox._closeOnBlurIsPrevented=!0);const t=e.detail.value;t!==this.value&&(0,u.B)(this,"value-changed",{value:t||void 0})}},{kind:"get",static:!0,key:"styles",value:function(){return l.iv`:host{display:block;width:100%}vaadin-combo-box-light{position:relative;--vaadin-combo-box-overlay-max-height:calc(45vh - 56px)}ha-textfield{width:100%}ha-textfield>ha-icon-button{--mdc-icon-button-size:24px;padding:2px;color:var(--secondary-text-color)}ha-svg-icon{color:var(--input-dropdown-icon-color);position:absolute;cursor:pointer}.toggle-button{right:12px;top:-10px;inset-inline-start:initial;inset-inline-end:12px;direction:var(--direction)}:host([opened]) .toggle-button{color:var(--primary-color)}.clear-button{--mdc-icon-size:20px;top:-7px;right:36px;inset-inline-start:initial;inset-inline-end:36px;direction:var(--direction)}`}}]}}),l.oi)},640:(e,t,i)=>{i.r(t),i.d(t,{HaIconPicker:()=>v});var o=i(17463),a=i(68144),r=i(79932),s=i(14516),n=i(47181),l=i(49594);i(77576),i(81312);let d=[],c=!1;const u=async e=>{try{const t=l.g[e].getIconList;if("function"!=typeof t)return[];const i=await t();return i.map((t=>{var i;return{icon:`${e}:${t.name}`,parts:new Set(t.name.split("-")),keywords:null!==(i=t.keywords)&&void 0!==i?i:[]}}))}catch(t){return console.warn(`Unable to load icon list for ${e} iconset`),[]}},h=e=>a.dy`<mwc-list-item graphic="avatar"> <ha-icon .icon="${e.icon}" slot="graphic"></ha-icon> ${e.icon} </mwc-list-item>`;let v=(0,o.Z)([(0,r.Mo)("ha-icon-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"fallbackPath",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"invalid",value:()=>!1},{kind:"method",key:"render",value:function(){return a.dy` <ha-combo-box .hass="${this.hass}" item-value-path="icon" item-label-path="icon" .value="${this._value}" allow-custom-value .dataProvider="${c?this._iconProvider:void 0}" .label="${this.label}" .helper="${this.helper}" .disabled="${this.disabled}" .required="${this.required}" .placeholder="${this.placeholder}" .errorMessage="${this.errorMessage}" .invalid="${this.invalid}" .renderer="${h}" icon @opened-changed="${this._openedChanged}" @value-changed="${this._valueChanged}"> ${this._value||this.placeholder?a.dy` <ha-icon .icon="${this._value||this.placeholder}" slot="icon"> </ha-icon> `:this.fallbackPath?a.dy`<ha-svg-icon .path="${this.fallbackPath}" slot="icon"></ha-svg-icon>`:""} </ha-combo-box> `}},{kind:"field",key:"_filterIcons",value:()=>(0,s.Z)(((e,t=d)=>{if(!e)return t;const i=[],o=(e,t)=>i.push({icon:e,rank:t});for(const i of t)i.parts.has(e)?o(i.icon,1):i.keywords.includes(e)?o(i.icon,2):i.icon.includes(e)?o(i.icon,3):i.keywords.some((t=>t.includes(e)))&&o(i.icon,4);return 0===i.length&&o(e,0),i.sort(((e,t)=>e.rank-t.rank))}))},{kind:"field",key:"_iconProvider",value(){return(e,t)=>{const i=this._filterIcons(e.filter.toLowerCase(),d),o=e.page*e.pageSize,a=o+e.pageSize;t(i.slice(o,a),i.length)}}},{kind:"method",key:"_openedChanged",value:async function(e){e.detail.value&&!c&&(await(async()=>{c=!0;const e=await i.e(71639).then(i.t.bind(i,71639,19));d=e.default.map((e=>({icon:`mdi:${e.name}`,parts:new Set(e.name.split("-")),keywords:e.keywords})));const t=[];Object.keys(l.g).forEach((e=>{t.push(u(e))})),(await Promise.all(t)).forEach((e=>{d.push(...e)}))})(),this.requestUpdate())}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation(),this._setValue(e.detail.value)}},{kind:"method",key:"_setValue",value:function(e){this.value=e,(0,n.B)(this,"value-changed",{value:this._value},{bubbles:!1,composed:!1})}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`ha-icon,ha-svg-icon{color:var(--primary-text-color);position:relative;bottom:2px}[slot=prefix]{margin-right:8px}`}}]}}),a.oi)},48003:(e,t,i)=>{i.r(t);var o=i(17463),a=i(68144),r=i(79932),s=i(47181),n=(i(640),i(3555),i(11654));(0,o.Z)([(0,r.Mo)("ha-timer-form")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"new",value:void 0},{kind:"field",key:"_item",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_icon",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_duration",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_restore",value:void 0},{kind:"set",key:"item",value:function(e){this._item=e,e?(this._name=e.name||"",this._icon=e.icon||"",this._duration=e.duration||"00:00:00",this._restore=e.restore||!1):(this._name="",this._icon="",this._duration="00:00:00",this._restore=!1)}},{kind:"method",key:"focus",value:function(){this.updateComplete.then((()=>{var e;return null===(e=this.shadowRoot)||void 0===e||null===(e=e.querySelector("[dialogInitialFocus]"))||void 0===e?void 0:e.focus()}))}},{kind:"method",key:"render",value:function(){return this.hass?a.dy` <div class="form"> <ha-textfield .value="${this._name}" .configValue="${"name"}" @input="${this._valueChanged}" .label="${this.hass.localize("ui.dialogs.helper_settings.generic.name")}" autoValidate required .validationMessage="${this.hass.localize("ui.dialogs.helper_settings.required_error_msg")}" dialogInitialFocus></ha-textfield> <ha-icon-picker .hass="${this.hass}" .value="${this._icon}" .configValue="${"icon"}" @value-changed="${this._valueChanged}" .label="${this.hass.localize("ui.dialogs.helper_settings.generic.icon")}"></ha-icon-picker> <ha-textfield .configValue="${"duration"}" .value="${this._duration}" @input="${this._valueChanged}" .label="${this.hass.localize("ui.dialogs.helper_settings.timer.duration")}"></ha-textfield> <ha-formfield .label="${this.hass.localize("ui.dialogs.helper_settings.timer.restore")}"> <ha-checkbox .configValue="${"restore"}" .checked="${this._restore}" @click="${this._toggleRestore}"> </ha-checkbox> </ha-formfield> </div> `:a.Ld}},{kind:"method",key:"_valueChanged",value:function(e){var t;if(!this.new&&!this._item)return;e.stopPropagation();const i=e.target.configValue,o=(null===(t=e.detail)||void 0===t?void 0:t.value)||e.target.value;if(this[`_${i}`]===o)return;const a={...this._item};o?a[i]=o:delete a[i],(0,s.B)(this,"value-changed",{value:a})}},{kind:"method",key:"_toggleRestore",value:function(){this._restore=!this._restore,(0,s.B)(this,"value-changed",{value:{...this._item,restore:this._restore}})}},{kind:"get",static:!0,key:"styles",value:function(){return[n.Qx,a.iv`.form{color:var(--primary-text-color)}ha-textfield{display:block;margin:8px 0}`]}}]}}),a.oi)},19596:(e,t,i)=>{i.d(t,{sR:()=>u});var o=i(81563),a=i(38941);const r=(e,t)=>{var i,o;const a=e._$AN;if(void 0===a)return!1;for(const e of a)null===(o=(i=e)._$AO)||void 0===o||o.call(i,t,!1),r(e,t);return!0},s=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===(null==i?void 0:i.size))},n=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),c(t)}};function l(e){void 0!==this._$AN?(s(this),this._$AM=e,n(this)):this._$AM=e}function d(e,t=!1,i=0){const o=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)r(o[e],!1),s(o[e]);else null!=o&&(r(o,!1),s(o));else r(this,e)}const c=e=>{var t,i,o,r;e.type==a.pX.CHILD&&(null!==(t=(o=e)._$AP)&&void 0!==t||(o._$AP=d),null!==(i=(r=e)._$AQ)&&void 0!==i||(r._$AQ=l))};class u extends a.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),n(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,o;e!==this.isConnected&&(this.isConnected=e,e?null===(i=this.reconnected)||void 0===i||i.call(this):null===(o=this.disconnected)||void 0===o||o.call(this)),t&&(r(this,e),s(this))}setValue(e){if((0,o.OR)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}};
//# sourceMappingURL=40220.FfppifkXeDA.js.map