export const id=45338;export const ids=[45338];export const modules={69620:(t,i,e)=>{e.d(i,{U:()=>n});const n=t=>`/api/image_proxy/${t.entity_id}?token=${t.attributes.access_token}&state=${t.state}`},45338:(t,i,e)=>{e.r(i),e.d(i,{HuiPictureCard:()=>y});var n=e(17463),o=e(34541),s=e(47838),a=e(68144),c=e(79932),h=e(83448),d=e(30153),r=e(62877),_=(e(22098),e(69620)),g=e(93491),u=e(17616),f=e(22193),l=e(53658),m=e(75502);let y=(0,n.Z)([(0,c.Mo)("hui-picture-card")],(function(t,i){class n extends i{constructor(...i){super(...i),t(this)}}return{F:n,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([e.e(42850),e.e(78133),e.e(50731),e.e(3762),e.e(41985),e.e(77426),e.e(32741),e.e(48763),e.e(21625),e.e(91059),e.e(57662)]).then(e.bind(e,24026)),document.createElement("hui-picture-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"picture",image:"https://demo.home-assistant.io/stub_config/t-shirt-promo.png"}}},{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.Cb)()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 5}},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.image&&!t.image_entity)throw new Error("Image required");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){if(!this._config||(0,l.SN)(this,t))return!0;if(this._config.image_entity&&t.has("hass")){const i=t.get("hass");if(!i||i.states[this._config.image_entity]!==this.hass.states[this._config.image_entity])return!0}return!1}},{kind:"method",key:"updated",value:function(t){if((0,o.Z)((0,s.Z)(n.prototype),"updated",this).call(this,t),!this._config||!this.hass)return;const i=t.get("hass"),e=t.get("_config");i&&e&&i.themes===this.hass.themes&&e.theme===this._config.theme||(0,r.R)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"render",value:function(){var t;if(!this._config||!this.hass)return a.Ld;let i;return this._config.image_entity&&(i=this.hass.states[this._config.image_entity],!i)?a.dy`<hui-warning> ${(0,m.i)(this.hass,this._config.image_entity)} </hui-warning>`:a.dy` <ha-card @action="${this._handleAction}" .actionHandler="${(0,g.K)({hasHold:(0,f._)(this._config.hold_action),hasDoubleClick:(0,f._)(this._config.double_tap_action)})}" tabindex="${(0,d.o)((0,f._)(this._config.tap_action)||this._config.image_entity?"0":void 0)}" class="${(0,h.$)({clickable:Boolean(this._config.image_entity&&!this._config.tap_action||this._config.tap_action&&"none"!==this._config.tap_action.action||this._config.hold_action&&"none"!==this._config.hold_action.action||this._config.double_tap_action&&"none"!==this._config.double_tap_action.action)})}"> <img alt="${(0,d.o)(this._config.alt_text||(null===(t=i)||void 0===t?void 0:t.attributes.friendly_name))}" src="${this.hass.hassUrl(i?(0,_.U)(i):this._config.image)}"> </ha-card> `}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`ha-card{overflow:hidden;height:100%}ha-card.clickable{cursor:pointer}img{display:block;width:100%}`}},{kind:"method",key:"_handleAction",value:function(t){(0,u.G)(this,this.hass,this._config,t.detail.action)}}]}}),a.oi)}};
//# sourceMappingURL=45338.xPai1-fcJlU.js.map