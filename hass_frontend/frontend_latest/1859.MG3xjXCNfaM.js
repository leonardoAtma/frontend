/*! For license information please see 1859.MG3xjXCNfaM.js.LICENSE.txt */
export const id=1859;export const ids=[1859];export const modules={89833:(t,i,e)=>{e.d(i,{O:()=>d});var o=e(43204),s=e(42977),r=e(68144),n=e(79932),a=e(83448),l=e(30153),h=e(67004);const c={fromAttribute:t=>null!==t&&(""===t||t),toAttribute:t=>"boolean"==typeof t?t?"":null:t};class d extends s.P{constructor(){super(...arguments),this.rows=2,this.cols=20,this.charCounter=!1}render(){const t=this.charCounter&&-1!==this.maxLength,i=t&&"internal"===this.charCounter,e=t&&!i,o=!!this.helper||!!this.validationMessage||e,s={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":i};return r.dy` <label class="mdc-text-field mdc-text-field--textarea ${(0,a.$)(s)}"> ${this.renderRipple()} ${this.outlined?this.renderOutline():this.renderLabel()} ${this.renderInput()} ${this.renderCharCounter(i)} ${this.renderLineRipple()} </label> ${this.renderHelperText(o,e)} `}renderInput(){const t=this.label?"label":void 0,i=-1===this.minLength?void 0:this.minLength,e=-1===this.maxLength?void 0:this.maxLength,o=this.autocapitalize?this.autocapitalize:void 0;return r.dy` <textarea aria-labelledby="${(0,l.o)(t)}" class="mdc-text-field__input" .value="${(0,h.a)(this.value)}" rows="${this.rows}" cols="${this.cols}" ?disabled="${this.disabled}" placeholder="${this.placeholder}" ?required="${this.required}" ?readonly="${this.readOnly}" minlength="${(0,l.o)(i)}" maxlength="${(0,l.o)(e)}" name="${(0,l.o)(""===this.name?void 0:this.name)}" inputmode="${(0,l.o)(this.inputMode)}" autocapitalize="${(0,l.o)(o)}" @input="${this.handleInputChange}" @blur="${this.onInputBlur}">
      </textarea>`}}(0,o.__decorate)([(0,n.IO)("textarea")],d.prototype,"formElement",void 0),(0,o.__decorate)([(0,n.Cb)({type:Number})],d.prototype,"rows",void 0),(0,o.__decorate)([(0,n.Cb)({type:Number})],d.prototype,"cols",void 0),(0,o.__decorate)([(0,n.Cb)({converter:c})],d.prototype,"charCounter",void 0)},96791:(t,i,e)=>{e.d(i,{W:()=>o});const o=e(68144).iv`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`},26535:(t,i,e)=>{e.d(i,{e:()=>a});var o=e(15723);function s(t){return"horizontal"===t?"row":"column"}class r extends o.IE{constructor(){super(...arguments),this._itemSize={},this._gaps={},this._padding={}}_getDefaultConfig(){return Object.assign({},super._getDefaultConfig(),{itemSize:{width:"300px",height:"300px"},gap:"8px",padding:"match-gap"})}get _gap(){return this._gaps.row}get _idealSize(){return this._itemSize[(0,o.qF)(this.direction)]}get _idealSize1(){return this._itemSize[(0,o.qF)(this.direction)]}get _idealSize2(){return this._itemSize[(0,o.gu)(this.direction)]}get _gap1(){return this._gaps[(t=this.direction,"horizontal"===t?"column":"row")];var t}get _gap2(){return this._gaps[s(this.direction)]}get _padding1(){const t=this._padding,[i,e]="horizontal"===this.direction?["left","right"]:["top","bottom"];return[t[i],t[e]]}get _padding2(){const t=this._padding,[i,e]="horizontal"===this.direction?["top","bottom"]:["left","right"];return[t[i],t[e]]}set itemSize(t){const i=this._itemSize;"string"==typeof t&&(t={width:t,height:t});const e=parseInt(t.width),o=parseInt(t.height);e!==i.width&&(i.width=e,this._triggerReflow()),o!==i.height&&(i.height=o,this._triggerReflow())}set gap(t){this._setGap(t)}_setGap(t){const i=t.split(" ").map((t=>function(t){return"auto"===t?1/0:parseInt(t)}(t))),e=this._gaps;i[0]!==e.row&&(e.row=i[0],this._triggerReflow()),void 0===i[1]?i[0]!==e.column&&(e.column=i[0],this._triggerReflow()):i[1]!==e.column&&(e.column=i[1],this._triggerReflow())}set padding(t){const i=this._padding,e=t.split(" ").map((t=>function(t){return"match-gap"===t?1/0:parseInt(t)}(t)));1===e.length?(i.top=i.right=i.bottom=i.left=e[0],this._triggerReflow()):2===e.length?(i.top=i.bottom=e[0],i.right=i.left=e[1],this._triggerReflow()):3===e.length?(i.top=e[0],i.right=i.left=e[1],i.bottom=e[2],this._triggerReflow()):4===e.length&&(["top","right","bottom","left"].forEach(((t,o)=>i[t]=e[o])),this._triggerReflow())}}class n extends r{constructor(){super(...arguments),this._metrics=null,this.flex=null,this.justify=null}_getDefaultConfig(){return Object.assign({},super._getDefaultConfig(),{flex:!1,justify:"start"})}set gap(t){super._setGap(t)}_updateLayout(){const t=this.justify,[i,e]=this._padding1,[r,n]=this._padding2;["_gap1","_gap2"].forEach((i=>{const e=this[i];if(e===1/0&&!["space-between","space-around","space-evenly"].includes(t))throw new Error("grid layout: gap can only be set to 'auto' when justify is set to 'space-between', 'space-around' or 'space-evenly'");if(e===1/0&&"_gap2"===i)throw new Error(`grid layout: ${s(this.direction)}-gap cannot be set to 'auto' when direction is set to ${this.direction}`)}));const a=this.flex||["start","center","end"].includes(t),l={rolumns:-1,itemSize1:-1,itemSize2:-1,gap1:this._gap1===1/0?-1:this._gap1,gap2:a?this._gap2:0,padding1:{start:i===1/0?this._gap1:i,end:e===1/0?this._gap1:e},padding2:a?{start:r===1/0?this._gap2:r,end:n===1/0?this._gap2:n}:{start:0,end:0},positions:[]},h=this._viewDim2-l.padding2.start-l.padding2.end;if(h<=0)l.rolumns=0;else{const s=a?l.gap2:0;let r,n=0,c=0;if(h>=this._idealSize2&&(n=Math.floor((h-this._idealSize2)/(this._idealSize2+s))+1,c=n*this._idealSize2+(n-1)*s),this.flex){(h-c)/(this._idealSize2+s)>=.5&&(n+=1),l.rolumns=n,l.itemSize2=Math.round((h-s*(n-1))/n);switch(!0===this.flex?"area":this.flex.preserve){case"aspect-ratio":l.itemSize1=Math.round(this._idealSize1/this._idealSize2*l.itemSize2);break;case(0,o.qF)(this.direction):l.itemSize1=Math.round(this._idealSize1);break;default:l.itemSize1=Math.round(this._idealSize1*this._idealSize2/l.itemSize2)}}else l.itemSize1=this._idealSize1,l.itemSize2=this._idealSize2,l.rolumns=n;if(a){const i=l.rolumns*l.itemSize2+(l.rolumns-1)*l.gap2;r=this.flex||"start"===t?l.padding2.start:"end"===t?this._viewDim2-l.padding2.end-i:Math.round(this._viewDim2/2-i/2)}else{const o=h-l.rolumns*l.itemSize2;"space-between"===t?(l.gap2=Math.round(o/(l.rolumns-1)),r=0):"space-around"===t?(l.gap2=Math.round(o/l.rolumns),r=Math.round(l.gap2/2)):(l.gap2=Math.round(o/(l.rolumns+1)),r=l.gap2),this._gap1===1/0&&(l.gap1=l.gap2,i===1/0&&(l.padding1.start=r),e===1/0&&(l.padding1.end=r))}for(let t=0;t<l.rolumns;t++)l.positions.push(r),r+=l.itemSize2+l.gap2}this._metrics=l}}const a=t=>Object.assign({type:l},t);class l extends n{get _delta(){return this._metrics.itemSize1+this._metrics.gap1}_getItemSize(t){return{[this._sizeDim]:this._metrics.itemSize1,[this._secondarySizeDim]:this._metrics.itemSize2}}_getActiveItems(){const t=this._metrics,{rolumns:i}=t;if(0===i)this._first=-1,this._last=-1,this._physicalMin=0,this._physicalMax=0;else{const{padding1:e}=t,o=Math.max(0,this._scrollPosition-this._overhang),s=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang),r=Math.max(0,Math.floor((o-e.start)/this._delta)),n=Math.max(0,Math.ceil((s-e.start)/this._delta));this._first=r*i,this._last=Math.min(n*i-1,this.items.length-1),this._physicalMin=e.start+this._delta*r,this._physicalMax=e.start+this._delta*n}}_getItemPosition(t){const{rolumns:i,padding1:e,positions:s,itemSize1:r,itemSize2:n}=this._metrics;return{[this._positionDim]:e.start+Math.floor(t/i)*this._delta,[this._secondaryPositionDim]:s[t%i],[(0,o.qF)(this.direction)]:r,[(0,o.gu)(this.direction)]:n}}_updateScrollSize(){const{rolumns:t,gap1:i,padding1:e,itemSize1:o}=this._metrics;let s=1;if(t>0){const r=Math.ceil(this.items.length/t);s=e.start+r*o+(r-1)*i+e.end}this._scrollSize=s}}},15723:(t,i,e)=>{function o(t){return"horizontal"===t?"width":"height"}function s(t){return"horizontal"===t?"height":"width"}e.d(i,{IE:()=>r,gu:()=>s,qF:()=>o});class r{_getDefaultConfig(){return{direction:"vertical"}}constructor(t,i){this._latestCoords={left:0,top:0},this._direction=null,this._viewportSize={width:0,height:0},this.totalScrollSize={width:0,height:0},this.offsetWithinScroller={left:0,top:0},this._pendingReflow=!1,this._pendingLayoutUpdate=!1,this._pin=null,this._firstVisible=0,this._lastVisible=0,this._physicalMin=0,this._physicalMax=0,this._first=-1,this._last=-1,this._sizeDim="height",this._secondarySizeDim="width",this._positionDim="top",this._secondaryPositionDim="left",this._scrollPosition=0,this._scrollError=0,this._items=[],this._scrollSize=1,this._overhang=1e3,this._hostSink=t,Promise.resolve().then((()=>this.config=i||this._getDefaultConfig()))}set config(t){Object.assign(this,Object.assign({},this._getDefaultConfig(),t))}get config(){return{direction:this.direction}}get items(){return this._items}set items(t){this._setItems(t)}_setItems(t){t!==this._items&&(this._items=t,this._scheduleReflow())}get direction(){return this._direction}set direction(t){(t="horizontal"===t?t:"vertical")!==this._direction&&(this._direction=t,this._sizeDim="horizontal"===t?"width":"height",this._secondarySizeDim="horizontal"===t?"height":"width",this._positionDim="horizontal"===t?"left":"top",this._secondaryPositionDim="horizontal"===t?"top":"left",this._triggerReflow())}get viewportSize(){return this._viewportSize}set viewportSize(t){const{_viewDim1:i,_viewDim2:e}=this;Object.assign(this._viewportSize,t),e!==this._viewDim2?this._scheduleLayoutUpdate():i!==this._viewDim1&&this._checkThresholds()}get viewportScroll(){return this._latestCoords}set viewportScroll(t){Object.assign(this._latestCoords,t);const i=this._scrollPosition;this._scrollPosition=this._latestCoords[this._positionDim];Math.abs(i-this._scrollPosition)>=1&&this._checkThresholds()}reflowIfNeeded(t=!1){(t||this._pendingReflow)&&(this._pendingReflow=!1,this._reflow())}set pin(t){this._pin=t,this._triggerReflow()}get pin(){if(null!==this._pin){const{index:t,block:i}=this._pin;return{index:Math.max(0,Math.min(t,this.items.length-1)),block:i}}return null}_clampScrollPosition(t){return Math.max(-this.offsetWithinScroller[this._positionDim],Math.min(t,this.totalScrollSize[o(this.direction)]-this._viewDim1))}unpin(){null!==this._pin&&(this._sendUnpinnedMessage(),this._pin=null)}_updateLayout(){}get _viewDim1(){return this._viewportSize[this._sizeDim]}get _viewDim2(){return this._viewportSize[this._secondarySizeDim]}_scheduleReflow(){this._pendingReflow=!0}_scheduleLayoutUpdate(){this._pendingLayoutUpdate=!0,this._scheduleReflow()}_triggerReflow(){this._scheduleLayoutUpdate(),Promise.resolve().then((()=>this.reflowIfNeeded()))}_reflow(){this._pendingLayoutUpdate&&(this._updateLayout(),this._pendingLayoutUpdate=!1),this._updateScrollSize(),this._setPositionFromPin(),this._getActiveItems(),this._updateVisibleIndices(),this._sendStateChangedMessage()}_setPositionFromPin(){if(null!==this.pin){const t=this._scrollPosition,{index:i,block:e}=this.pin;this._scrollPosition=this._calculateScrollIntoViewPosition({index:i,block:e||"start"})-this.offsetWithinScroller[this._positionDim],this._scrollError=t-this._scrollPosition}}_calculateScrollIntoViewPosition(t){const{block:i}=t,e=Math.min(this.items.length,Math.max(0,t.index)),o=this._getItemPosition(e)[this._positionDim];let s=o;if("start"!==i){const t=this._getItemSize(e)[this._sizeDim];if("center"===i)s=o-.5*this._viewDim1+.5*t;else{const e=o-this._viewDim1+t;if("end"===i)s=e;else{const t=this._scrollPosition;s=Math.abs(t-o)<Math.abs(t-e)?o:e}}}return s+=this.offsetWithinScroller[this._positionDim],this._clampScrollPosition(s)}getScrollIntoViewCoordinates(t){return{[this._positionDim]:this._calculateScrollIntoViewPosition(t)}}_sendUnpinnedMessage(){this._hostSink({type:"unpinned"})}_sendVisibilityChangedMessage(){this._hostSink({type:"visibilityChanged",firstVisible:this._firstVisible,lastVisible:this._lastVisible})}_sendStateChangedMessage(){const t=new Map;if(-1!==this._first&&-1!==this._last)for(let i=this._first;i<=this._last;i++)t.set(i,this._getItemPosition(i));const i={type:"stateChanged",scrollSize:{[this._sizeDim]:this._scrollSize,[this._secondarySizeDim]:null},range:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible},childPositions:t};this._scrollError&&(i.scrollError={[this._positionDim]:this._scrollError,[this._secondaryPositionDim]:0},this._scrollError=0),this._hostSink(i)}get _num(){return-1===this._first||-1===this._last?0:this._last-this._first+1}_checkThresholds(){if(0===this._viewDim1&&this._num>0||null!==this._pin)this._scheduleReflow();else{const t=Math.max(0,this._scrollPosition-this._overhang),i=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang);this._physicalMin>t||this._physicalMax<i?this._scheduleReflow():this._updateVisibleIndices({emit:!0})}}_updateVisibleIndices(t){if(-1===this._first||-1===this._last)return;let i=this._first;for(;i<this._last&&Math.round(this._getItemPosition(i)[this._positionDim]+this._getItemSize(i)[this._sizeDim])<=Math.round(this._scrollPosition);)i++;let e=this._last;for(;e>this._first&&Math.round(this._getItemPosition(e)[this._positionDim])>=Math.round(this._scrollPosition+this._viewDim1);)e--;i===this._firstVisible&&e===this._lastVisible||(this._firstVisible=i,this._lastVisible=e,t&&t.emit&&this._sendVisibilityChangedMessage())}}},33829:(t,i,e)=>{var o=e(68144);class s extends o.oi{static get styles(){return[o.iv`:host{display:block;position:absolute;outline:0;z-index:1002;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:default;pointer-events:none}#tooltip{display:block;outline:0;font-size:var(--simple-tooltip-font-size, 10px);line-height:1;background-color:var(--simple-tooltip-background,#616161);color:var(--simple-tooltip-text-color,#fff);padding:8px;border-radius:var(--simple-tooltip-border-radius,2px);width:var(--simple-tooltip-width)}@keyframes keyFrameScaleUp{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes keyFrameScaleDown{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes keyFrameFadeInOpacity{0%{opacity:0}100%{opacity:var(--simple-tooltip-opacity, .9)}}@keyframes keyFrameFadeOutOpacity{0%{opacity:var(--simple-tooltip-opacity, .9)}100%{opacity:0}}@keyframes keyFrameSlideDownIn{0%{transform:translateY(-2000px);opacity:0}10%{opacity:.2}100%{transform:translateY(0);opacity:var(--simple-tooltip-opacity, .9)}}@keyframes keyFrameSlideDownOut{0%{transform:translateY(0);opacity:var(--simple-tooltip-opacity, .9)}10%{opacity:.2}100%{transform:translateY(-2000px);opacity:0}}.fade-in-animation{opacity:0;animation-delay:var(--simple-tooltip-delay-in, 500ms);animation-name:keyFrameFadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-in, 500ms);animation-fill-mode:forwards}.fade-out-animation{opacity:var(--simple-tooltip-opacity, .9);animation-delay:var(--simple-tooltip-delay-out, 0ms);animation-name:keyFrameFadeOutOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-out, 500ms);animation-fill-mode:forwards}.scale-up-animation{transform:scale(0);opacity:var(--simple-tooltip-opacity, .9);animation-delay:var(--simple-tooltip-delay-in, 500ms);animation-name:keyFrameScaleUp;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-in, 500ms);animation-fill-mode:forwards}.scale-down-animation{transform:scale(1);opacity:var(--simple-tooltip-opacity, .9);animation-delay:var(--simple-tooltip-delay-out, 500ms);animation-name:keyFrameScaleDown;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-out, 500ms);animation-fill-mode:forwards}.slide-down-animation{transform:translateY(-2000px);opacity:0;animation-delay:var(--simple-tooltip-delay-out, 500ms);animation-name:keyFrameSlideDownIn;animation-iteration-count:1;animation-timing-function:cubic-bezier(0,0,0.2,1);animation-duration:var(--simple-tooltip-duration-out, 500ms);animation-fill-mode:forwards}.slide-down-animation-out{transform:translateY(0);opacity:var(--simple-tooltip-opacity, .9);animation-delay:var(--simple-tooltip-delay-out, 500ms);animation-name:keyFrameSlideDownOut;animation-iteration-count:1;animation-timing-function:cubic-bezier(0.4,0,1,1);animation-duration:var(--simple-tooltip-duration-out, 500ms);animation-fill-mode:forwards}.cancel-animation{animation-delay:-30s!important}.hidden{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}`]}render(){return o.dy` <div id="tooltip" class="hidden" @animationend="${this._onAnimationEnd}"> <slot></slot> </div>`}static get properties(){return{...super.properties,for:{type:String},manualMode:{type:Boolean,attribute:"manual-mode"},position:{type:String},fitToVisibleBounds:{type:Boolean,attribute:"fit-to-visible-bounds"},offset:{type:Number},marginTop:{type:Number,attribute:"margin-top"},animationDelay:{type:Number,attribute:"animation-delay"},animationEntry:{type:String,attribute:"animation-entry"},animationExit:{type:String,attribute:"animation-exit"},_showing:{type:Boolean}}}static get tag(){return"simple-tooltip"}constructor(){super(),this.manualMode=!1,this.position="bottom",this.fitToVisibleBounds=!1,this.offset=14,this.marginTop=14,this.animationEntry="",this.animationExit="",this.animationConfig={entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]},setTimeout((()=>{this.addEventListener("webkitAnimationEnd",this._onAnimationEnd.bind(this)),this.addEventListener("mouseenter",this.hide.bind(this))}),0)}get target(){var t=this.parentNode,i=this.getRootNode();return this.for?i.querySelector("#"+this.for):t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?i.host:t}disconnectedCallback(){this.manualMode||this._removeListeners(),super.disconnectedCallback()}playAnimation(t){"entry"===t?this.show():"exit"===t&&this.hide()}cancelAnimation(){this.shadowRoot.querySelector("#tooltip").classList.add("cancel-animation")}show(){if(!this._showing){if(""===this.textContent.trim()){for(var t=!0,i=this.children,e=0;e<i.length;e++)if(""!==i[e].textContent.trim()){t=!1;break}if(t)return}this._showing=!0,this.shadowRoot.querySelector("#tooltip").classList.remove("hidden"),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("entry"))}}hide(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0,clearTimeout(this.__debounceCancel),this.__debounceCancel=setTimeout((()=>{this._cancelAnimation()}),5e3)}}updatePosition(){if(this._target&&this.offsetParent){var t=this.offset;14!=this.marginTop&&14==this.offset&&(t=this.marginTop);var i,e,o=this.offsetParent.getBoundingClientRect(),s=this._target.getBoundingClientRect(),r=this.getBoundingClientRect(),n=(s.width-r.width)/2,a=(s.height-r.height)/2,l=s.left-o.left,h=s.top-o.top;switch(this.position){case"top":i=l+n,e=h-r.height-t;break;case"bottom":i=l+n,e=h+s.height+t;break;case"left":i=l-r.width-t,e=h+a;break;case"right":i=l+s.width+t,e=h+a}this.fitToVisibleBounds?(o.left+i+r.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,i)+"px",this.style.right="auto"),o.top+e+r.height>window.innerHeight?(this.style.bottom=o.height-h+t+"px",this.style.top="auto"):(this.style.top=Math.max(-o.top,e)+"px",this.style.bottom="auto")):(this.style.left=i+"px",this.style.top=e+"px")}}_addListeners(){this._target&&(this._target.addEventListener("mouseenter",this.show.bind(this)),this._target.addEventListener("focus",this.show.bind(this)),this._target.addEventListener("mouseleave",this.hide.bind(this)),this._target.addEventListener("blur",this.hide.bind(this)),this._target.addEventListener("tap",this.hide.bind(this)))}_findTarget(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()}_manualModeChanged(){this.manualMode?this._removeListeners():this._addListeners()}_cancelAnimation(){this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add("hidden")}_onAnimationFinish(){this._showing&&(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("exit")))}_onAnimationEnd(){this._animationPlaying=!1,this._showing||(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.add("hidden"))}_getAnimationType(t){if("entry"===t&&""!==this.animationEntry)return this.animationEntry;if("exit"===t&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[t]&&"string"==typeof this.animationConfig[t][0].name){if(this.animationConfig[t][0].timing&&this.animationConfig[t][0].timing.delay&&0!==this.animationConfig[t][0].timing.delay){var i=this.animationConfig[t][0].timing.delay;"entry"===t?document.documentElement.style.setProperty("--simple-tooltip-delay-in",i+"ms"):"exit"===t&&document.documentElement.style.setProperty("--simple-tooltip-delay-out",i+"ms")}return this.animationConfig[t][0].name}}_removeListeners(){this._target&&(this._target.removeEventListener("mouseover",this.show.bind(this)),this._target.removeEventListener("focusin",this.show.bind(this)),this._target.removeEventListener("mouseout",this.hide.bind(this)),this._target.removeEventListener("focusout",this.hide.bind(this)),this._target.removeEventListener("click",this.hide.bind(this)))}firstUpdated(t){this.setAttribute("role","tooltip"),this.setAttribute("tabindex",-1),this._findTarget()}updated(t){t.forEach(((t,i)=>{"for"==i&&this._findTarget(this[i],t),"manualMode"==i&&this._manualModeChanged(this[i],t),"animationDelay"==i&&this._delayChange(this[i],t)}))}_delayChange(t){500!==t&&document.documentElement.style.setProperty("--simple-tooltip-delay-in",t+"ms")}}customElements.define(s.tag,s)},22129:(t,i,e)=>{e.d(i,{B:()=>d});var o=e(43204),s=e(79932),r=e(68144),n=e(83448),a=e(6157);class l extends r.oi{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:t}=this;return r.dy` <div class="progress ${(0,n.$)(this.getRenderClasses())}" role="progressbar" aria-label="${t||r.Ld}" aria-valuemin="0" aria-valuemax="${this.max}" aria-valuenow="${this.indeterminate?r.Ld:this.value}">${this.renderIndicator()}</div> `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}(0,a.d)(l),(0,o.__decorate)([(0,s.Cb)({type:Number})],l.prototype,"value",void 0),(0,o.__decorate)([(0,s.Cb)({type:Number})],l.prototype,"max",void 0),(0,o.__decorate)([(0,s.Cb)({type:Boolean})],l.prototype,"indeterminate",void 0),(0,o.__decorate)([(0,s.Cb)({type:Boolean,attribute:"four-color"})],l.prototype,"fourColor",void 0);class h extends l{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const t=100*(1-this.value/this.max);return r.dy` <svg viewBox="0 0 4800 4800"> <circle class="track" pathLength="100"></circle> <circle class="active-track" pathLength="100" stroke-dashoffset="${t}"></circle> </svg> `}renderIndeterminateContainer(){return r.dy` <div class="spinner"> <div class="left"> <div class="circle"></div> </div> <div class="right"> <div class="circle"></div> </div> </div>`}}const c=r.iv`:host{--_active-indicator-color:var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width:var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color:var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color:var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color:var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color:var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size:var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.active-track,.circle,.left,.progress,.right,.spinner,.track,svg{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/ 100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset .5s cubic-bezier(0, 0, .2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1.568s}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4,0,0.2,1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/ 100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) transparent transparent;animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4,0,0.2,1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-.666s,0s}@media(forced-colors:active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}`;let d=class extends h{};d.styles=[c],d=(0,o.__decorate)([(0,s.Mo)("md-circular-progress")],d)},82160:(t,i,e)=>{function o(t){return new Promise(((i,e)=>{t.oncomplete=t.onsuccess=()=>i(t.result),t.onabort=t.onerror=()=>e(t.error)}))}function s(t,i){const e=indexedDB.open(t);e.onupgradeneeded=()=>e.result.createObjectStore(i);const s=o(e);return(t,e)=>s.then((o=>e(o.transaction(i,t).objectStore(i))))}let r;function n(){return r||(r=s("keyval-store","keyval")),r}function a(t,i=n()){return i("readonly",(i=>o(i.get(t))))}function l(t,i,e=n()){return e("readwrite",(e=>(e.put(i,t),o(e.transaction))))}function h(t=n()){return t("readwrite",(t=>(t.clear(),o(t.transaction))))}e.d(i,{MT:()=>s,RV:()=>o,U2:()=>a,ZH:()=>h,t8:()=>l})},19596:(t,i,e)=>{e.d(i,{sR:()=>d});var o=e(81563),s=e(38941);const r=(t,i)=>{var e,o;const s=t._$AN;if(void 0===s)return!1;for(const t of s)null===(o=(e=t)._$AO)||void 0===o||o.call(e,i,!1),r(t,i);return!0},n=t=>{let i,e;do{if(void 0===(i=t._$AM))break;e=i._$AN,e.delete(t),t=i}while(0===(null==e?void 0:e.size))},a=t=>{for(let i;i=t._$AM;t=i){let e=i._$AN;if(void 0===e)i._$AN=e=new Set;else if(e.has(t))break;e.add(t),c(i)}};function l(t){void 0!==this._$AN?(n(this),this._$AM=t,a(this)):this._$AM=t}function h(t,i=!1,e=0){const o=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(i)if(Array.isArray(o))for(let t=e;t<o.length;t++)r(o[t],!1),n(o[t]);else null!=o&&(r(o,!1),n(o));else r(this,t)}const c=t=>{var i,e,o,r;t.type==s.pX.CHILD&&(null!==(i=(o=t)._$AP)&&void 0!==i||(o._$AP=h),null!==(e=(r=t)._$AQ)&&void 0!==e||(r._$AQ=l))};class d extends s.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,e){super._$AT(t,i,e),a(this),this.isConnected=t._$AU}_$AO(t,i=!0){var e,o;t!==this.isConnected&&(this.isConnected=t,t?null===(e=this.reconnected)||void 0===e||e.call(this):null===(o=this.disconnected)||void 0===o||o.call(this)),i&&(r(this,t),n(this))}setValue(t){if((0,o.OR)(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}},62601:(t,i,e)=>{e.d(i,{C:()=>m});var o=e(15304),s=e(81563),r=e(19596);class n{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class a{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.Z=t)))}resume(){var t;null===(t=this.Z)||void 0===t||t.call(this),this.Y=this.Z=void 0}}var l=e(38941);const h=t=>!(0,s.pt)(t)&&"function"==typeof t.then,c=1073741823;class d extends r.sR{constructor(){super(...arguments),this._$C_t=c,this._$Cwt=[],this._$Cq=new n(this),this._$CK=new a}render(...t){var i;return null!==(i=t.find((t=>!h(t))))&&void 0!==i?i:o.Jb}update(t,i){const e=this._$Cwt;let s=e.length;this._$Cwt=i;const r=this._$Cq,n=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<i.length&&!(t>this._$C_t);t++){const o=i[t];if(!h(o))return this._$C_t=t,o;t<s&&o===e[t]||(this._$C_t=c,s=0,Promise.resolve(o).then((async t=>{for(;n.get();)await n.get();const i=r.deref();if(void 0!==i){const e=i._$Cwt.indexOf(o);e>-1&&e<i._$C_t&&(i._$C_t=e,i.setValue(t))}})))}return o.Jb}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const m=(0,l.XM)(d)}};
//# sourceMappingURL=1859.MG3xjXCNfaM.js.map