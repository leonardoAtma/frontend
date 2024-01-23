"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[21625],{87927:function(e,t,i){i.d(t,{Q:function(){return o}});i(63789),i(24074);var o=function(e){return e.replace(/^_*(.)|_+(.)/g,(function(e,t,i){return t?t.toUpperCase():" "+i.toUpperCase()}))}},77576:function(e,t,i){var o,a,n,r,l,d,s=i(99312),u=i(81043),c=i(33368),v=i(71650),h=i(82390),p=i(69205),f=i(70906),b=i(91808),m=i(34541),k=i(47838),y=i(88962),g=(i(97393),i(46798),i(9849),i(50289),i(94167),i(29530)),_=(i(93584),i(53947)),x=i(68144),C=i(95260),w=i(30153),O=i(47181);i(10983),i(73366),i(3555);(0,_.hC)("vaadin-combo-box-item",(0,x.iv)(o||(o=(0,y.Z)([':host{padding:0!important}:host([focused]:not([disabled])){background-color:rgba(var(--rgb-primary-text-color,0,0,0),.12)}:host([selected]:not([disabled])){background-color:transparent;color:var(--mdc-theme-primary);--mdc-ripple-color:var(--mdc-theme-primary);--mdc-theme-text-primary-on-background:var(--mdc-theme-primary)}:host([selected]:not([disabled])):before{background-color:var(--mdc-theme-primary);opacity:.12;content:"";position:absolute;top:0;left:0;width:100%;height:100%}:host([selected][focused]:not([disabled])):before{opacity:.24}:host(:hover:not([disabled])){background-color:transparent}[part=content]{width:100%}[part=checkmark]{display:none}']))));(0,b.Z)([(0,C.Mo)("ha-combo-box")],(function(e,t){var i,o,b=function(t){(0,p.Z)(o,t);var i=(0,f.Z)(o);function o(){var t;(0,v.Z)(this,o);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return t=i.call.apply(i,[this].concat(n)),e((0,h.Z)(t)),t}return(0,c.Z)(o)}(t);return{F:b,d:[{kind:"field",decorators:[(0,C.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,C.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,C.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,C.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,C.Cb)()],key:"validationMessage",value:void 0},{kind:"field",decorators:[(0,C.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,C.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,C.Cb)({type:Boolean})],key:"invalid",value:function(){return!1}},{kind:"field",decorators:[(0,C.Cb)({type:Boolean})],key:"icon",value:function(){return!1}},{kind:"field",decorators:[(0,C.Cb)({attribute:!1})],key:"items",value:void 0},{kind:"field",decorators:[(0,C.Cb)({attribute:!1})],key:"filteredItems",value:void 0},{kind:"field",decorators:[(0,C.Cb)({attribute:!1})],key:"dataProvider",value:void 0},{kind:"field",decorators:[(0,C.Cb)({attribute:"allow-custom-value",type:Boolean})],key:"allowCustomValue",value:function(){return!1}},{kind:"field",decorators:[(0,C.Cb)({attribute:"item-value-path"})],key:"itemValuePath",value:function(){return"value"}},{kind:"field",decorators:[(0,C.Cb)({attribute:"item-label-path"})],key:"itemLabelPath",value:function(){return"label"}},{kind:"field",decorators:[(0,C.Cb)({attribute:"item-id-path"})],key:"itemIdPath",value:void 0},{kind:"field",decorators:[(0,C.Cb)()],key:"renderer",value:void 0},{kind:"field",decorators:[(0,C.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,C.Cb)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"field",decorators:[(0,C.Cb)({type:Boolean,reflect:!0,attribute:"opened"})],key:"opened",value:void 0},{kind:"field",decorators:[(0,C.IO)("vaadin-combo-box-light",!0)],key:"_comboBox",value:void 0},{kind:"field",decorators:[(0,C.IO)("ha-textfield",!0)],key:"_inputElement",value:void 0},{kind:"field",key:"_overlayMutationObserver",value:void 0},{kind:"field",key:"_bodyMutationObserver",value:void 0},{kind:"method",key:"open",value:(o=(0,u.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:null===(t=this._comboBox)||void 0===t||t.open();case 3:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{kind:"method",key:"focus",value:(i=(0,u.Z)((0,s.Z)().mark((function e(){var t,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:return e.next=4,null===(t=this._inputElement)||void 0===t?void 0:t.updateComplete;case 4:null===(i=this._inputElement)||void 0===i||i.focus();case 5:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{kind:"method",key:"disconnectedCallback",value:function(){(0,m.Z)((0,k.Z)(b.prototype),"disconnectedCallback",this).call(this),this._overlayMutationObserver&&(this._overlayMutationObserver.disconnect(),this._overlayMutationObserver=void 0),this._bodyMutationObserver&&(this._bodyMutationObserver.disconnect(),this._bodyMutationObserver=void 0)}},{kind:"get",key:"selectedItem",value:function(){return this._comboBox.selectedItem}},{kind:"method",key:"setInputValue",value:function(e){this._comboBox.value=e}},{kind:"method",key:"render",value:function(){var e;return(0,x.dy)(a||(a=(0,y.Z)([' <vaadin-combo-box-light .itemValuePath="','" .itemIdPath="','" .itemLabelPath="','" .items="','" .value="','" .filteredItems="','" .dataProvider="','" .allowCustomValue="','" .disabled="','" .required="','" ',' @opened-changed="','" @filter-changed="','" @value-changed="','" attr-for-value="value"> <ha-textfield label="','" placeholder="','" ?disabled="','" ?required="','" validationMessage="','" .errorMessage="','" class="input" autocapitalize="none" autocomplete="off" autocorrect="off" input-spellcheck="false" .suffix="','" .icon="','" .invalid="','" .helper="','" helperPersistent> <slot name="icon" slot="leadingIcon"></slot> </ha-textfield> ',' <ha-svg-icon role="button" tabindex="-1" aria-label="','" aria-expanded="','" class="toggle-button" .path="','" @click="','"></ha-svg-icon> </vaadin-combo-box-light> '])),this.itemValuePath,this.itemIdPath,this.itemLabelPath,this.items,this.value||"",this.filteredItems,this.dataProvider,this.allowCustomValue,this.disabled,this.required,(0,g.t)(this.renderer||this._defaultRowRenderer),this._openedChanged,this._filterChanged,this._valueChanged,(0,w.o)(this.label),(0,w.o)(this.placeholder),this.disabled,this.required,(0,w.o)(this.validationMessage),this.errorMessage,(0,x.dy)(n||(n=(0,y.Z)(['<div style="width:28px" role="none presentation"></div>']))),this.icon,this.invalid,this.helper,this.value?(0,x.dy)(r||(r=(0,y.Z)(['<ha-svg-icon role="button" tabindex="-1" aria-label="','" class="clear-button" .path="','" @click="','"></ha-svg-icon>'])),(0,w.o)(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.clear")),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",this._clearValue):"",(0,w.o)(this.label),this.opened?"true":"false",this.opened?"M7,15L12,10L17,15H7Z":"M7,10L12,15L17,10H7Z",this._toggleOpen)}},{kind:"field",key:"_defaultRowRenderer",value:function(){var e=this;return function(t){return(0,x.dy)(l||(l=(0,y.Z)(["<ha-list-item> "," </ha-list-item>"])),e.itemLabelPath?t[e.itemLabelPath]:t)}}},{kind:"method",key:"_clearValue",value:function(e){e.stopPropagation(),(0,O.B)(this,"value-changed",{value:void 0})}},{kind:"method",key:"_toggleOpen",value:function(e){var t,i;this.opened?(null===(t=this._comboBox)||void 0===t||t.close(),e.stopPropagation()):null===(i=this._comboBox)||void 0===i||i.inputElement.focus()}},{kind:"method",key:"_openedChanged",value:function(e){var t=this;e.stopPropagation();var i=e.detail.value;if(setTimeout((function(){t.opened=i}),0),(0,O.B)(this,"opened-changed",{value:e.detail.value}),i){var o=document.querySelector("vaadin-combo-box-overlay");o&&this._removeInert(o),this._observeBody()}else{var a;null===(a=this._bodyMutationObserver)||void 0===a||a.disconnect(),this._bodyMutationObserver=void 0}}},{kind:"method",key:"_observeBody",value:function(){var e=this;"MutationObserver"in window&&!this._bodyMutationObserver&&(this._bodyMutationObserver=new MutationObserver((function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){"VAADIN-COMBO-BOX-OVERLAY"===t.nodeName&&e._removeInert(t)})),t.removedNodes.forEach((function(t){var i;"VAADIN-COMBO-BOX-OVERLAY"===t.nodeName&&(null===(i=e._overlayMutationObserver)||void 0===i||i.disconnect(),e._overlayMutationObserver=void 0)}))}))})),this._bodyMutationObserver.observe(document.body,{childList:!0}))}},{kind:"method",key:"_removeInert",value:function(e){var t,i=this;if(e.inert)return e.inert=!1,null===(t=this._overlayMutationObserver)||void 0===t||t.disconnect(),void(this._overlayMutationObserver=void 0);"MutationObserver"in window&&!this._overlayMutationObserver&&(this._overlayMutationObserver=new MutationObserver((function(e){e.forEach((function(e){if("inert"===e.attributeName){var t,o=e.target;if(o.inert)null===(t=i._overlayMutationObserver)||void 0===t||t.disconnect(),i._overlayMutationObserver=void 0,o.inert=!1}}))})),this._overlayMutationObserver.observe(e,{attributes:!0}))}},{kind:"method",key:"_filterChanged",value:function(e){e.stopPropagation(),(0,O.B)(this,"filter-changed",{value:e.detail.value})}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation(),this.allowCustomValue||(this._comboBox._closeOnBlurIsPrevented=!0);var t=e.detail.value;t!==this.value&&(0,O.B)(this,"value-changed",{value:t||void 0})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,x.iv)(d||(d=(0,y.Z)([":host{display:block;width:100%}vaadin-combo-box-light{position:relative;--vaadin-combo-box-overlay-max-height:calc(45vh - 56px)}ha-textfield{width:100%}ha-textfield>ha-icon-button{--mdc-icon-button-size:24px;padding:2px;color:var(--secondary-text-color)}ha-svg-icon{color:var(--input-dropdown-icon-color);position:absolute;cursor:pointer}.toggle-button{right:12px;top:-10px;inset-inline-start:initial;inset-inline-end:12px;direction:var(--direction)}:host([opened]) .toggle-button{color:var(--primary-color)}.clear-button{--mdc-icon-size:20px;top:-7px;right:36px;inset-inline-start:initial;inset-inline-end:36px;direction:var(--direction)}"])))}}]}}),x.oi)},21625:function(e,t,i){var o,a,n,r=i(40039),l=i(68990),d=i(99312),s=i(81043),u=i(33368),c=i(71650),v=i(82390),h=i(69205),p=i(70906),f=i(91808),b=i(88962),m=(i(97393),i(46349),i(70320),i(82073),i(85717),i(87438),i(46798),i(9849),i(22890),i(51358),i(47084),i(5239),i(98490),i(96043),i(36513),i(50289),i(94167),i(40271),i(60163),i(68144)),k=i(95260),y=i(47181),g=i(87927),_=i(36877),x=(i(77576),i(81312),[]),C=function(e){return(0,m.dy)(o||(o=(0,b.Z)([' <mwc-list-item graphic="icon" .twoline="','"> <ha-icon .icon="','" slot="graphic"></ha-icon> <span>','</span> <span slot="secondary">',"</span> </mwc-list-item> "])),!!e.title,e.icon,e.title||e.path,e.path)},w=function(e,t,i){var o,a,n;return{path:"/".concat(e,"/").concat(null!==(o=t.path)&&void 0!==o?o:i),icon:null!==(a=t.icon)&&void 0!==a?a:"mdi:view-compact",title:null!==(n=t.title)&&void 0!==n?n:t.path?(0,g.Q)(t.path):"".concat(i)}},O=function(e,t){var i;return{path:"/".concat(t.url_path),icon:null!==(i=t.icon)&&void 0!==i?i:"mdi:view-dashboard",title:t.url_path===e.defaultPanel?e.localize("panel.states"):e.localize("panel.".concat(t.title))||t.title||(t.url_path?(0,g.Q)(t.url_path):"")}};(0,f.Z)([(0,k.Mo)("ha-navigation-picker")],(function(e,t){var i,o,f=function(t){(0,h.Z)(o,t);var i=(0,p.Z)(o);function o(){var t;(0,c.Z)(this,o);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return t=i.call.apply(i,[this].concat(n)),e((0,v.Z)(t)),t}return(0,u.Z)(o)}(t);return{F:f,d:[{kind:"field",decorators:[(0,k.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,k.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,k.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,k.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,k.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,k.Cb)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"field",decorators:[(0,k.SB)()],key:"_opened",value:function(){return!1}},{kind:"field",key:"navigationItemsLoaded",value:function(){return!1}},{kind:"field",key:"navigationItems",value:function(){return x}},{kind:"field",decorators:[(0,k.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"method",key:"render",value:function(){return(0,m.dy)(a||(a=(0,b.Z)([' <ha-combo-box .hass="','" item-value-path="path" item-label-path="path" .value="','" allow-custom-value .filteredItems="','" .label="','" .helper="','" .disabled="','" .required="','" .renderer="','" @opened-changed="','" @value-changed="','" @filter-changed="','"> </ha-combo-box> '])),this.hass,this._value,this.navigationItems,this.label,this.helper,this.disabled,this.required,C,this._openedChanged,this._valueChanged,this._filterChanged)}},{kind:"method",key:"_openedChanged",value:(o=(0,s.Z)((0,d.Z)().mark((function e(t){return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._opened=t.detail.value,this._opened&&!this.navigationItemsLoaded&&this._loadNavigationItems();case 2:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{kind:"method",key:"_loadNavigationItems",value:(i=(0,s.Z)((0,d.Z)().mark((function e(){var t,i,o,a,n,s,u,c=this;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.navigationItemsLoaded=!0,t=Object.entries(this.hass.panels).map((function(e){var t=(0,l.Z)(e,2),i=t[0],o=t[1];return Object.assign({id:i},o)})),i=t.filter((function(e){return"lovelace"===e.component_name})),e.next=5,Promise.all(i.map((function(e){return(0,_.Q2)(c.hass.connection,"lovelace"===e.url_path?null:e.url_path,!0).then((function(t){return[e.id,t]})).catch((function(t){return[e.id,void 0]}))})));case 5:o=e.sent,a=new Map(o),this.navigationItems=[],n=(0,r.Z)(t),e.prev=9,u=(0,d.Z)().mark((function e(){var t,i;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.value,c.navigationItems.push(O(c.hass,t)),(i=a.get(t.id))&&"views"in i){e.next=5;break}return e.abrupt("return",1);case 5:i.views.forEach((function(e,i){return c.navigationItems.push(w(t.url_path,e,i))}));case 6:case"end":return e.stop()}}),e)})),n.s();case 12:if((s=n.n()).done){e.next=18;break}return e.delegateYield(u(),"t0",14);case 14:if(!e.t0){e.next=16;break}return e.abrupt("continue",16);case 16:e.next=12;break;case 18:e.next=23;break;case 20:e.prev=20,e.t1=e.catch(9),n.e(e.t1);case 23:return e.prev=23,n.f(),e.finish(23);case 26:this.comboBox.filteredItems=this.navigationItems;case 27:case"end":return e.stop()}}),e,this,[[9,20,23,26]])}))),function(){return i.apply(this,arguments)})},{kind:"method",key:"shouldUpdate",value:function(e){return!this._opened||e.has("_opened")}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation(),this._setValue(e.detail.value)}},{kind:"method",key:"_setValue",value:function(e){this.value=e,(0,y.B)(this,"value-changed",{value:this._value},{bubbles:!1,composed:!1})}},{kind:"method",key:"_filterChanged",value:function(e){var t=e.detail.value.toLowerCase();if(t.length>=2){var i=[];this.navigationItems.forEach((function(e){(e.path.toLowerCase().includes(t)||e.title.toLowerCase().includes(t))&&i.push(e)})),i.length>0?this.comboBox.filteredItems=i:this.comboBox.filteredItems=[]}else this.comboBox.filteredItems=this.navigationItems}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"get",static:!0,key:"styles",value:function(){return(0,m.iv)(n||(n=(0,b.Z)(["ha-icon,ha-svg-icon{color:var(--primary-text-color);position:relative;bottom:0px}[slot=prefix]{margin-right:8px}"])))}}]}}),m.oi)},36877:function(e,t,i){function o(e){return"strategy"in e}i.d(t,{Oh:function(){return n},Q2:function(){return a},Tx:function(){return o},vj:function(){return r}});var a=function(e,t,i){return e.sendMessagePromise({type:"lovelace/config",url_path:t,force:i})},n=function(e,t,i){return e.callWS({type:"lovelace/config/save",url_path:t,config:i})},r=function(e,t){return e.callWS({type:"lovelace/config/delete",url_path:t})}}}]);
//# sourceMappingURL=21625.7PvJmGOP83A.js.map