/*! For license information please see 23901.GJ2KIYMr2IU.js.LICENSE.txt */
export const id=23901;export const ids=[23901];export const modules={53464:(e,t,i)=>{i.d(t,{H:()=>b});var c=i(43204),o=(i(27763),i(38103)),r=i(78220),s=i(14114),a=i(98734),d=i(72774),n={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},l={ARIA_CHECKED_ATTR:"aria-checked",NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"};const h=function(e){function t(i){return e.call(this,(0,c.__assign)((0,c.__assign)({},t.defaultAdapter),i))||this}return(0,c.__extends)(t,e),Object.defineProperty(t,"strings",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return n},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){},setNativeControlAttr:function(){}}},enumerable:!1,configurable:!0}),t.prototype.setChecked=function(e){this.adapter.setNativeControlChecked(e),this.updateAriaChecked(e),this.updateCheckedStyling(e)},t.prototype.setDisabled=function(e){this.adapter.setNativeControlDisabled(e),e?this.adapter.addClass(n.DISABLED):this.adapter.removeClass(n.DISABLED)},t.prototype.handleChange=function(e){var t=e.target;this.updateAriaChecked(t.checked),this.updateCheckedStyling(t.checked)},t.prototype.updateCheckedStyling=function(e){e?this.adapter.addClass(n.CHECKED):this.adapter.removeClass(n.CHECKED)},t.prototype.updateAriaChecked=function(e){this.adapter.setNativeControlAttr(l.ARIA_CHECKED_ATTR,""+!!e)},t}(d.K);var p=i(68144),u=i(79932),m=i(30153);class b extends r.H{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.shouldRenderRipple=!1,this.mdcFoundationClass=h,this.rippleHandlers=new a.A((()=>(this.shouldRenderRipple=!0,this.ripple)))}changeHandler(e){this.mdcFoundation.handleChange(e),this.checked=this.formElement.checked}createAdapter(){return Object.assign(Object.assign({},(0,r.q)(this.mdcRoot)),{setNativeControlChecked:e=>{this.formElement.checked=e},setNativeControlDisabled:e=>{this.formElement.disabled=e},setNativeControlAttr:(e,t)=>{this.formElement.setAttribute(e,t)}})}renderRipple(){return this.shouldRenderRipple?p.dy` <mwc-ripple .accent="${this.checked}" .disabled="${this.disabled}" unbounded> </mwc-ripple>`:""}focus(){const e=this.formElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.formElement;e&&(this.rippleHandlers.endFocus(),e.blur())}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(e=>{this.dispatchEvent(new Event("change",e))}))}render(){return p.dy` <div class="mdc-switch"> <div class="mdc-switch__track"></div> <div class="mdc-switch__thumb-underlay"> ${this.renderRipple()} <div class="mdc-switch__thumb"> <input type="checkbox" id="basic-switch" class="mdc-switch__native-control" role="switch" aria-label="${(0,m.o)(this.ariaLabel)}" aria-labelledby="${(0,m.o)(this.ariaLabelledBy)}" @change="${this.changeHandler}" @focus="${this.handleRippleFocus}" @blur="${this.handleRippleBlur}" @mousedown="${this.handleRippleMouseDown}" @mouseenter="${this.handleRippleMouseEnter}" @mouseleave="${this.handleRippleMouseLeave}" @touchstart="${this.handleRippleTouchStart}" @touchend="${this.handleRippleDeactivate}" @touchcancel="${this.handleRippleDeactivate}"> </div> </div> </div>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}(0,c.__decorate)([(0,u.Cb)({type:Boolean}),(0,s.P)((function(e){this.mdcFoundation.setChecked(e)}))],b.prototype,"checked",void 0),(0,c.__decorate)([(0,u.Cb)({type:Boolean}),(0,s.P)((function(e){this.mdcFoundation.setDisabled(e)}))],b.prototype,"disabled",void 0),(0,c.__decorate)([o.L,(0,u.Cb)({attribute:"aria-label"})],b.prototype,"ariaLabel",void 0),(0,c.__decorate)([o.L,(0,u.Cb)({attribute:"aria-labelledby"})],b.prototype,"ariaLabelledBy",void 0),(0,c.__decorate)([(0,u.IO)(".mdc-switch")],b.prototype,"mdcRoot",void 0),(0,c.__decorate)([(0,u.IO)("input")],b.prototype,"formElement",void 0),(0,c.__decorate)([(0,u.GC)("mwc-ripple")],b.prototype,"ripple",void 0),(0,c.__decorate)([(0,u.SB)()],b.prototype,"shouldRenderRipple",void 0),(0,c.__decorate)([(0,u.hO)({passive:!0})],b.prototype,"handleRippleMouseDown",null),(0,c.__decorate)([(0,u.hO)({passive:!0})],b.prototype,"handleRippleTouchStart",null)},4301:(e,t,i)=>{i.d(t,{W:()=>c});const c=i(68144).iv`.mdc-switch__thumb-underlay{left:-14px;right:initial;top:-17px;width:48px;height:48px}.mdc-switch__thumb-underlay[dir=rtl],[dir=rtl] .mdc-switch__thumb-underlay{left:initial;right:-14px}.mdc-switch__native-control{width:64px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:0;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary,#018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary,#018786);border-color:#018786;border-color:var(--mdc-theme-secondary,#018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface,#000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface,#fff);border-color:#fff;border-color:var(--mdc-theme-surface,#fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(.4, 0, .2, 1)}.mdc-switch__native-control[dir=rtl],[dir=rtl] .mdc-switch__native-control{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:36px;height:14px;border:1px solid transparent;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(.4, 0, .2, 1),background-color 90ms cubic-bezier(.4, 0, .2, 1),border-color 90ms cubic-bezier(.4, 0, .2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(.4, 0, .2, 1),background-color 90ms cubic-bezier(.4, 0, .2, 1),border-color 90ms cubic-bezier(.4, 0, .2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0,0,0,.2),0px 2px 2px 0px rgba(0,0,0,.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(16px)}.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl],[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control[dir=rtl],[dir=rtl] .mdc-switch--checked .mdc-switch__native-control{transform:translateX(16px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}:host{display:inline-flex;outline:0;-webkit-tap-highlight-color:transparent}`},43709:(e,t,i)=>{var c=i(17463),o=i(34541),r=i(47838),s=i(53464),a=i(4301),d=i(68144),n=i(79932),l=i(62359);(0,c.Z)([(0,n.Mo)("ha-switch")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"haptic",value:()=>!1},{kind:"method",key:"firstUpdated",value:function(){(0,o.Z)((0,r.Z)(i.prototype),"firstUpdated",this).call(this),this.addEventListener("change",(()=>{this.haptic&&(0,l.j)("light")}))}},{kind:"field",static:!0,key:"styles",value:()=>[a.W,d.iv`:host{--mdc-theme-secondary:var(--switch-checked-color)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:var(--switch-checked-button-color);border-color:var(--switch-checked-button-color)}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:var(--switch-checked-track-color);border-color:var(--switch-checked-track-color)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:var(--switch-unchecked-button-color);border-color:var(--switch-unchecked-button-color)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:var(--switch-unchecked-track-color);border-color:var(--switch-unchecked-track-color)}`]}]}}),s.H)},23901:(e,t,i)=>{i.r(t);var c=i(17463),o=(i(14271),i(68144)),r=i(79932),s=i(47181),a=(i(34821),i(52039),i(43709),i(51144));(0,c.Z)([(0,r.Mo)("confirm-event-dialog-box")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_params",value:void 0},{kind:"method",key:"showDialog",value:async function(e){this._params=e}},{kind:"method",key:"closeDialog",value:function(){return!0}},{kind:"method",key:"render",value:function(){return this._params?o.dy` <ha-dialog open scrimClickAction escapeKeyAction @closed="${this._dialogClosed}" defaultAction="ignore" .heading="${this._params.title}"> <div> <p>${this._params.text}</p> </div> <mwc-button @click="${this._dismiss}" slot="secondaryAction"> ${this.hass.localize("ui.dialogs.generic.cancel")} </mwc-button> <mwc-button slot="primaryAction" @click="${this._confirm}" dialogInitialFocus class="destructive"> ${this._params.confirmText} </mwc-button> ${this._params.confirmFutureText?o.dy` <mwc-button @click="${this._confirmFuture}" class="destructive" slot="primaryAction"> ${this._params.confirmFutureText} </mwc-button> `:""} </ha-dialog> `:o.Ld}},{kind:"method",key:"_dismiss",value:function(){this._params.cancel&&this._params.cancel(),this._close()}},{kind:"method",key:"_confirm",value:function(){this._params.confirm&&this._params.confirm(a.$5.THISEVENT),this._close()}},{kind:"method",key:"_confirmFuture",value:function(){this._params.confirm&&this._params.confirm(a.$5.THISANDFUTURE),this._close()}},{kind:"method",key:"_dialogClosed",value:function(e){"ignore"!==e.detail.action&&this._dismiss()}},{kind:"method",key:"_close",value:function(){this._params&&(this._params=void 0,(0,s.B)(this,"dialog-closed",{dialog:this.localName}))}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`:host([inert]){pointer-events:initial!important;cursor:initial!important}a{color:var(--primary-color)}p{margin:0;color:var(--primary-text-color)}.no-bottom-padding{padding-bottom:0}.secondary{color:var(--secondary-text-color)}.destructive{--mdc-theme-primary:var(--error-color)}ha-dialog{--dialog-z-index:104}@media all and (min-width:600px){ha-dialog{--mdc-dialog-min-width:400px}}ha-textfield{width:100%}`}}]}}),o.oi)}};
//# sourceMappingURL=23901.GJ2KIYMr2IU.js.map