export const id=80363;export const ids=[80363];export const modules={80363:(t,e,s)=>{s.r(e),s.d(e,{CastManager:()=>h,getCastManager:()=>d});var n=s(69470);let a;var i=s(54049),r=s(66628),o=s(91794);let c;class h{constructor(t){this.auth=void 0,this.status=void 0,this._eventListeners={},this._sessionStateChanged=t=>{"SESSION_STARTED"===t.sessionState||"SESSION_RESUMED"===t.sessionState?(this.auth?(0,o.Ni)(this,this.auth):this.sendMessage({type:"get_status"}),this._attachMessageListener()):"SESSION_ENDED"===t.sessionState&&(this.status=void 0,this._fireEvent("connection-changed"))},this._castStateChanged=t=>{this._fireEvent("state-changed")},this.auth=t;const e=this.castContext;e.setOptions({receiverApplicationId:i.$Q,autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED}),e.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED,this._sessionStateChanged),e.addEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED,this._castStateChanged)}addEventListener(t,e){return t in this._eventListeners||(this._eventListeners[t]=[]),this._eventListeners[t].push(e),()=>{this._eventListeners[t].splice(this._eventListeners[t].indexOf(e))}}get castConnectedToOurHass(){return void 0!==this.status&&void 0!==this.auth&&this.status.connected&&(this.status.hassUrl===this.auth.data.hassUrl||i.Hq&&this.status.hassUrl===r.M)}sendMessage(t){this.castSession.sendMessage(i.py,t)}get castState(){return this.castContext.getCastState()}get castContext(){return cast.framework.CastContext.getInstance()}get castSession(){return this.castContext.getCurrentSession()}requestSession(){return this.castContext.requestSession()}_fireEvent(t){for(const e of this._eventListeners[t]||[])e()}_receiveMessage(t){"receiver_status"===t.type&&(this.status=t,this._fireEvent("connection-changed"))}_attachMessageListener(){this.castSession.addMessageListener(i.py,((t,e)=>this._receiveMessage(JSON.parse(e))))}}const d=t=>(c||(c=(()=>{if(a)return a;a=new Promise((t=>{window.__onGCastApiAvailable=t}));const t=document.createElement("div");return t.id="cast",document.body.append(t),(0,n.fs)("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),a})().then((e=>{if(!e)throw new Error("No Cast API available");return new h(t)}))),c)},69470:(t,e,s)=>{s.d(e,{$y:()=>r,fs:()=>i,j:()=>a});const n=(t,e,s)=>new Promise(((n,a)=>{const i=document.createElement(t);let r="src",o="body";switch(i.onload=()=>n(e),i.onerror=()=>a(e),t){case"script":i.async=!0,s&&(i.type=s);break;case"link":i.type="text/css",i.rel="stylesheet",r="href",o="head"}i[r]=e,document[o].appendChild(i)})),a=t=>n("link",t),i=t=>n("script",t),r=t=>n("script",t,"module")}};
//# sourceMappingURL=80363.M87r6hQ2ae0.js.map