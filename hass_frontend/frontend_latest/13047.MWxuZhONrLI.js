export const id=13047;export const ids=[13047];export const modules={13047:(t,e,i)=>{i.r(e);var s=i(17463),n=(i(14271),i(68144)),o=i(79932),a=i(87744),d=i(34541),c=i(47838);i(45661);const l=customElements.get("paper-toast");(0,s.Z)([(0,o.Mo)("ha-toast")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",key:"_resizeListener",value:void 0},{kind:"field",key:"_mediaq",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,d.Z)((0,c.Z)(i.prototype),"connectedCallback",this).call(this),this._resizeListener||(this._resizeListener=t=>this.classList.toggle("fit-bottom",t.matches),this._mediaq=window.matchMedia("(max-width: 599px")),this._mediaq.addListener(this._resizeListener),this._resizeListener(this._mediaq)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,d.Z)((0,c.Z)(i.prototype),"disconnectedCallback",this).call(this),this._mediaq.removeListener(this._resizeListener)}}]}}),l);let r=(0,s.Z)(null,(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_action",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_noCancelOnOutsideClick",value:()=>!1},{kind:"field",decorators:[(0,o.IO)("ha-toast")],key:"_toast",value:void 0},{kind:"method",key:"showDialog",value:async function({message:t,action:e,duration:i,dismissable:s}){let n=this._toast;n||(await this.updateComplete,n=this._toast),n.setAttribute("dir",(0,a.HE)(this.hass)?"rtl":"ltr"),this._action=e||void 0,this._noCancelOnOutsideClick=void 0!==s&&!s,n.hide(),n.show({text:t,duration:void 0===i?3e3:i})}},{kind:"method",key:"render",value:function(){return n.dy` <ha-toast .noCancelOnOutsideClick="${this._noCancelOnOutsideClick}"> ${this._action?n.dy` <mwc-button .label="${this._action.text}" @click="${this.buttonClicked}"></mwc-button> `:""} </ha-toast> `}},{kind:"method",key:"buttonClicked",value:function(){this._toast.hide(),this._action&&this._action.action()}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`ha-toast{display:flex;align-items:center;justify-content:space-between;padding:8px 12px}mwc-button{color:var(--primary-color);font-weight:700;margin-left:8px}`}}]}}),n.oi);customElements.define("notification-manager",r)}};
//# sourceMappingURL=13047.MWxuZhONrLI.js.map