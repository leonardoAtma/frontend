/*! For license information please see 95912.Zuy8c8qWZJs.js.LICENSE.txt */
export const id=95912;export const ids=[95912];export const modules={67625:(e,t,o)=>{o.d(t,{s:()=>v});var i=o(43204),r=o(96908),s=o(79932),a=o(78220),d=o(82612),n=o(443),l=o(68144),c=o(83448);const h=d.Vq?{passive:!0}:void 0;class u extends a.H{constructor(){super(...arguments),this.centerTitle=!1,this.handleTargetScroll=()=>{this.mdcFoundation.handleTargetScroll()},this.handleNavigationClick=()=>{this.mdcFoundation.handleNavigationClick()}}get scrollTarget(){return this._scrollTarget||window}set scrollTarget(e){this.unregisterScrollListener();const t=this.scrollTarget;this._scrollTarget=e,this.updateRootPosition(),this.requestUpdate("scrollTarget",t),this.registerScrollListener()}updateRootPosition(){if(this.mdcRoot){const e=this.scrollTarget===window;this.mdcRoot.style.position=e?"":"absolute"}}render(){let e=l.dy`<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>`;return this.centerTitle&&(e=l.dy`<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">${e}</section>`),l.dy` <header class="mdc-top-app-bar ${(0,c.$)(this.barClasses())}"> <div class="mdc-top-app-bar__row"> <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="navigation"> <slot name="navigationIcon" @click="${this.handleNavigationClick}"></slot> ${this.centerTitle?null:e} </section> ${this.centerTitle?e:null} <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar"> <slot name="actionItems"></slot> </section> </div> </header> <div class="${(0,c.$)(this.contentClasses())}"> <slot></slot> </div> `}createAdapter(){return Object.assign(Object.assign({},(0,a.q)(this.mdcRoot)),{setStyle:(e,t)=>this.mdcRoot.style.setProperty(e,t),getTopAppBarHeight:()=>this.mdcRoot.clientHeight,notifyNavigationIconClicked:()=>{this.dispatchEvent(new Event(n.j2.NAVIGATION_EVENT,{bubbles:!0,cancelable:!0}))},getViewportScrollY:()=>this.scrollTarget instanceof Window?this.scrollTarget.pageYOffset:this.scrollTarget.scrollTop,getTotalActionItems:()=>this._actionItemsSlot.assignedNodes({flatten:!0}).length})}registerListeners(){this.registerScrollListener()}unregisterListeners(){this.unregisterScrollListener()}registerScrollListener(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,h)}unregisterScrollListener(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}firstUpdated(){super.firstUpdated(),this.updateRootPosition(),this.registerListeners()}disconnectedCallback(){super.disconnectedCallback(),this.unregisterListeners()}}(0,i.__decorate)([(0,s.IO)(".mdc-top-app-bar")],u.prototype,"mdcRoot",void 0),(0,i.__decorate)([(0,s.IO)('slot[name="actionItems"]')],u.prototype,"_actionItemsSlot",void 0),(0,i.__decorate)([(0,s.Cb)({type:Boolean})],u.prototype,"centerTitle",void 0),(0,i.__decorate)([(0,s.Cb)({type:Object})],u.prototype,"scrollTarget",null);class p extends u{constructor(){super(...arguments),this.mdcFoundationClass=r.Z,this.prominent=!1,this.dense=!1,this.handleResize=()=>{this.mdcFoundation.handleWindowResize()}}barClasses(){return{"mdc-top-app-bar--dense":this.dense,"mdc-top-app-bar--prominent":this.prominent,"center-title":this.centerTitle}}contentClasses(){return{"mdc-top-app-bar--fixed-adjust":!this.dense&&!this.prominent,"mdc-top-app-bar--dense-fixed-adjust":this.dense&&!this.prominent,"mdc-top-app-bar--prominent-fixed-adjust":!this.dense&&this.prominent,"mdc-top-app-bar--dense-prominent-fixed-adjust":this.dense&&this.prominent}}registerListeners(){super.registerListeners(),window.addEventListener("resize",this.handleResize,h)}unregisterListeners(){super.unregisterListeners(),window.removeEventListener("resize",this.handleResize)}}(0,i.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0})],p.prototype,"prominent",void 0),(0,i.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0})],p.prototype,"dense",void 0);var m=o(43419);class v extends p{constructor(){super(...arguments),this.mdcFoundationClass=m.Z}barClasses(){return Object.assign(Object.assign({},super.barClasses()),{"mdc-top-app-bar--fixed":!0})}registerListeners(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,h)}unregisterListeners(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}}},33753:(e,t,o)=>{var i=o(17463),r=o(34541),s=o(47838),a=o(68144),d=o(79932),n=o(14516),l=o(47181),c=o(32594);o(81312);const h={key:"Mod-s",run:e=>((0,l.B)(e.dom,"editor-save"),!0)},u=e=>{const t=document.createElement("ha-icon");return t.icon=e.label,t};(0,i.Z)([(0,d.Mo)("ha-code-editor")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:"codemirror",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"mode",value:()=>"yaml"},{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,attribute:"autocomplete-entities"})],key:"autocompleteEntities",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,attribute:"autocomplete-icons"})],key:"autocompleteIcons",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"error",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_value",value:()=>""},{kind:"field",key:"_loadedCodeMirror",value:void 0},{kind:"field",key:"_iconList",value:void 0},{kind:"set",key:"value",value:function(e){this._value=e}},{kind:"get",key:"value",value:function(){return this.codemirror?this.codemirror.state.doc.toString():this._value}},{kind:"get",key:"hasComments",value:function(){if(!this.codemirror||!this._loadedCodeMirror)return!1;const e=this._loadedCodeMirror.highlightingFor(this.codemirror.state,[this._loadedCodeMirror.tags.comment]);return!!this.renderRoot.querySelector(`span.${e}`)}},{kind:"method",key:"connectedCallback",value:function(){(0,r.Z)((0,s.Z)(i.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this.requestUpdate(),this.addEventListener("keydown",c.U),this.codemirror&&!1!==this.autofocus&&this.codemirror.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,r.Z)((0,s.Z)(i.prototype),"disconnectedCallback",this).call(this),this.removeEventListener("keydown",c.U),this.updateComplete.then((()=>{this.codemirror.destroy(),delete this.codemirror}))}},{kind:"method",key:"scheduleUpdate",value:async function(){var e;null!==(e=this._loadedCodeMirror)&&void 0!==e||(this._loadedCodeMirror=await Promise.all([o.e(43642),o.e(74561),o.e(92914)]).then(o.bind(o,92914))),(0,r.Z)((0,s.Z)(i.prototype),"scheduleUpdate",this).call(this)}},{kind:"method",key:"update",value:function(e){if((0,r.Z)((0,s.Z)(i.prototype),"update",this).call(this,e),!this.codemirror)return void this._createCodeMirror();const t=[];e.has("mode")&&t.push({effects:this._loadedCodeMirror.langCompartment.reconfigure(this._mode)}),e.has("readOnly")&&t.push({effects:this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))}),e.has("_value")&&this._value!==this.value&&t.push({changes:{from:0,to:this.codemirror.state.doc.length,insert:this._value}}),t.length>0&&this.codemirror.dispatch(...t),e.has("error")&&this.classList.toggle("error-state",this.error)}},{kind:"get",key:"_mode",value:function(){return this._loadedCodeMirror.langs[this.mode]}},{kind:"method",key:"_createCodeMirror",value:function(){if(!this._loadedCodeMirror)throw new Error("Cannot create editor before CodeMirror is loaded");const e=[this._loadedCodeMirror.lineNumbers(),this._loadedCodeMirror.history(),this._loadedCodeMirror.drawSelection(),this._loadedCodeMirror.EditorState.allowMultipleSelections.of(!0),this._loadedCodeMirror.rectangularSelection(),this._loadedCodeMirror.crosshairCursor(),this._loadedCodeMirror.highlightSelectionMatches(),this._loadedCodeMirror.highlightActiveLine(),this._loadedCodeMirror.keymap.of([...this._loadedCodeMirror.defaultKeymap,...this._loadedCodeMirror.searchKeymap,...this._loadedCodeMirror.historyKeymap,...this._loadedCodeMirror.tabKeyBindings,h]),this._loadedCodeMirror.langCompartment.of(this._mode),this._loadedCodeMirror.haTheme,this._loadedCodeMirror.haSyntaxHighlighting,this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)),this._loadedCodeMirror.EditorView.updateListener.of(this._onUpdate)];if(!this.readOnly){const t=[];this.autocompleteEntities&&this.hass&&t.push(this._entityCompletions.bind(this)),this.autocompleteIcons&&t.push(this._mdiCompletions.bind(this)),t.length>0&&e.push(this._loadedCodeMirror.autocompletion({override:t,maxRenderedOptions:10}))}this.codemirror=new this._loadedCodeMirror.EditorView({state:this._loadedCodeMirror.EditorState.create({doc:this._value,extensions:e}),parent:this.renderRoot})}},{kind:"field",key:"_getStates",value:()=>(0,n.Z)((e=>{if(!e)return[];return Object.keys(e).map((t=>({type:"variable",label:t,detail:e[t].attributes.friendly_name,info:`State: ${e[t].state}`})))}))},{kind:"method",key:"_entityCompletions",value:function(e){const t=e.matchBefore(/[a-z_]{3,}\.\w*/);if(!t||t.from===t.to&&!e.explicit)return null;const o=this._getStates(this.hass.states);return o&&o.length?{from:Number(t.from),options:o,validFor:/^[a-z_]{3,}\.\w*$/}:null}},{kind:"field",key:"_getIconItems",value(){return async()=>{if(!this._iconList){let e;e=(await o.e(71639).then(o.t.bind(o,71639,19))).default,this._iconList=e.map((e=>({type:"variable",label:`mdi:${e.name}`,detail:e.keywords.join(", "),info:u})))}return this._iconList}}},{kind:"method",key:"_mdiCompletions",value:async function(e){const t=e.matchBefore(/mdi:\S*/);if(!t||t.from===t.to&&!e.explicit)return null;const o=await this._getIconItems();return{from:Number(t.from),options:o,validFor:/^mdi:\S*$/}}},{kind:"field",key:"_onUpdate",value(){return e=>{e.docChanged&&(this._value=e.state.doc.toString(),(0,l.B)(this,"value-changed",{value:this._value}))}}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host(.error-state) .cm-gutters{border-color:var(--error-state-color,red)}`}}]}}),a.fl)},36226:(e,t,o)=>{var i=o(17463),r=o(67625),s=o(71711),a=o(68144),d=o(79932);(0,i.Z)([(0,d.Mo)("ha-top-app-bar-fixed")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[s.W,a.iv`.mdc-top-app-bar__row{height:var(--header-height);border-bottom:var(--app-header-border-bottom)}.mdc-top-app-bar--fixed-adjust{padding-top:var(--header-height)}.mdc-top-app-bar{--mdc-typography-headline6-font-weight:400;color:var(--app-header-text-color,var(--mdc-theme-on-primary,#fff));background-color:var(--app-header-background-color,var(--mdc-theme-primary))}`]}]}}),r.s)},95912:(e,t,o)=>{o.r(t);var i=o(17463),r=o(34541),s=o(47838),a=o(43642),d=(o(14271),o(77426)),n=o(68144),l=o(79932),c=o(83448),h=o(38768),u=o(36639),p=(o(31206),o(33753),o(10983),o(26765)),m=o(11654),v=o(81796),_=(o(36226),o(36877));const g=(0,h.dt)({title:(0,h.jt)((0,h.Z_)()),views:(0,h.IX)((0,h.Ry)())}),f=(0,h.dt)({strategy:(0,h.dt)({type:(0,h.Z_)()})});(0,i.Z)([(0,l.Mo)("hui-editor")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"closeEditor",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_saving",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_changed",value:void 0},{kind:"method",key:"render",value:function(){return n.dy` <ha-top-app-bar-fixed> <ha-icon-button slot="navigationIcon" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" @click="${this._closeEditor}" .label="${this.hass.localize("ui.common.close")}"></ha-icon-button> <div slot="title"> ${this.hass.localize("ui.panel.lovelace.editor.raw_editor.header")} </div> <div slot="actionItems" class="save-button ${(0,c.$)({saved:!1===this._saving||!0===this._changed})}"> ${this._changed?this.hass.localize("ui.panel.lovelace.editor.raw_editor.unsaved_changes"):this.hass.localize("ui.panel.lovelace.editor.raw_editor.saved")} </div> <mwc-button raised slot="actionItems" @click="${this._handleSave}" .disabled="${!this._changed}">${this.hass.localize("ui.panel.lovelace.editor.raw_editor.save")}</mwc-button> <div class="content"> <ha-code-editor mode="yaml" autofocus autocomplete-entities autocomplete-icons .hass="${this.hass}" @value-changed="${this._yamlChanged}" @editor-save="${this._handleSave}" dir="ltr"> </ha-code-editor> </div> </ha-top-app-bar-fixed> `}},{kind:"method",key:"firstUpdated",value:function(e){(0,r.Z)((0,s.Z)(o.prototype),"firstUpdated",this).call(this,e),this.yamlEditor.value=(0,d.dump)(this.lovelace.rawConfig)}},{kind:"method",key:"updated",value:function(e){const t=e.get("lovelace");!this._saving&&t&&this.lovelace&&t.rawConfig!==this.lovelace.rawConfig&&!(0,u.v)(t.rawConfig,this.lovelace.rawConfig)&&(0,v.C)(this,{message:this.hass.localize("ui.panel.lovelace.editor.raw_editor.lovelace_changed"),action:{action:()=>{this.yamlEditor.value=(0,d.dump)(this.lovelace.rawConfig)},text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.reload")},duration:0,dismissable:!1})}},{kind:"get",static:!0,key:"styles",value:function(){return[m.Qx,n.iv`:host{--code-mirror-height:100%;--app-header-background-color:var(
            --app-header-edit-background-color,
            #455a64
          );--app-header-text-color:var(--app-header-edit-text-color, #fff)}mwc-button[disabled]{background-color:var(--mdc-theme-on-primary);border-radius:4px}.content{height:calc(100vh - var(--header-height))}.comments{font-size:16px}.save-button{opacity:0;font-size:14px;padding:0px 10px}.saved{opacity:1}`]}},{kind:"method",key:"_yamlChanged",value:function(){this._changed=(0,a.of)(this.yamlEditor.codemirror.state)>0,this._changed&&!window.onbeforeunload?window.onbeforeunload=()=>!0:!this._changed&&window.onbeforeunload&&(window.onbeforeunload=null)}},{kind:"method",key:"_closeEditor",value:async function(){this._changed&&!await(0,p.showConfirmationDialog)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_unsaved_changes"),dismissText:this.hass.localize("ui.common.stay"),confirmText:this.hass.localize("ui.common.leave")})||(window.onbeforeunload=null,this.closeEditor&&this.closeEditor())}},{kind:"method",key:"_removeConfig",value:async function(){try{await this.lovelace.deleteConfig()}catch(e){(0,p.showAlertDialog)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_remove",{error:e})})}window.onbeforeunload=null,this.closeEditor&&this.closeEditor()}},{kind:"method",key:"_handleSave",value:async function(){this._saving=!0;const e=this.yamlEditor.value;if(!e)return void(0,p.showConfirmationDialog)(this,{title:this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_remove_config_title"),text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_remove_config_text"),confirmText:this.hass.localize("ui.common.remove"),dismissText:this.hass.localize("ui.common.cancel"),confirm:()=>this._removeConfig()});if(this.yamlEditor.hasComments&&!confirm(this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_unsaved_comments")))return;let t;try{t=(0,d.load)(e)}catch(e){return(0,p.showAlertDialog)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_parse_yaml",{error:e})}),void(this._saving=!1)}try{(0,_.Tx)(t)?(0,h.hu)(t,f):(0,h.hu)(t,g)}catch(e){return void(0,p.showAlertDialog)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_invalid_config",{error:e})})}t.resources&&(0,p.showAlertDialog)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.resources_moved")});try{await this.lovelace.saveConfig(t)}catch(e){(0,p.showAlertDialog)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_save_yaml",{error:e})})}window.onbeforeunload=null,this._changed=!1,this._saving=!1}},{kind:"get",key:"yamlEditor",value:function(){return this.shadowRoot.querySelector("ha-code-editor")}}]}}),n.oi)}};
//# sourceMappingURL=95912.Zuy8c8qWZJs.js.map