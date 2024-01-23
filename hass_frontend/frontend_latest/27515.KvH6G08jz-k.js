export const id=27515;export const ids=[27515,9381];export const modules={50239:(e,t,i)=>{i.d(t,{Y:()=>a,u:()=>o});const o=(e,t,i)=>Math.min(Math.max(e,t),i),a=(e,t,i)=>{let o;return o=null!=t?Math.max(e,t):e,o=null!=i?Math.min(o,i):o,o}},18457:(e,t,i)=>{i.d(t,{Hd:()=>r,SL:()=>s,l4:()=>l,sJ:()=>n,uf:()=>d});var o=i(66477),a=i(27593);const s=e=>n(e.attributes),n=e=>!!e.unit_of_measurement||!!e.state_class,r=e=>{switch(e.number_format){case o.y4.comma_decimal:return["en-US","en"];case o.y4.decimal_comma:return["de","es","it"];case o.y4.space_comma:return["fr","sv","cs"];case o.y4.system:return;default:return e.language}},d=(e,t,i)=>{const s=t?r(t):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)!==o.y4.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(s,c(e,i)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,c(e,i)).format(Number(e))}return!Number.isNaN(Number(e))&&""!==e&&(null==t?void 0:t.number_format)===o.y4.none&&Intl?new Intl.NumberFormat("en-US",c(e,{...i,useGrouping:!1})).format(Number(e)):"string"==typeof e?e:`${(0,a.N)(e,null==i?void 0:i.maximumFractionDigits).toString()}${"currency"===(null==i?void 0:i.style)?` ${i.currency}`:""}`},l=(e,t)=>{var i;const o=null==t?void 0:t.display_precision;return null!=o?{maximumFractionDigits:o,minimumFractionDigits:o}:Number.isInteger(Number(null==e||null===(i=e.attributes)||void 0===i?void 0:i.step))&&Number.isInteger(Number(null==e?void 0:e.state))?{maximumFractionDigits:0}:void 0},c=(e,t)=>{const i={maximumFractionDigits:2,...t};if("string"!=typeof e)return i;if(!t||void 0===t.minimumFractionDigits&&void 0===t.maximumFractionDigits){const t=e.indexOf(".")>-1?e.split(".")[1].length:0;i.minimumFractionDigits=t,i.maximumFractionDigits=t}return i}},27593:(e,t,i)=>{i.d(t,{N:()=>o});const o=(e,t=2)=>Math.round(e*10**t)/10**t},98762:(e,t,i)=>{var o=i(17463),a=(i(14271),i(68144)),s=i(79932);i(31206),i(52039);(0,o.Z)([(0,s.Mo)("ha-progress-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"progress",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"raised",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_result",value:void 0},{kind:"method",key:"render",value:function(){const e=this._result||this.progress;return a.dy` <mwc-button ?raised="${this.raised}" .disabled="${this.disabled||this.progress}" @click="${this._buttonTapped}" class="${this._result||""}"> <slot></slot> </mwc-button> ${e?a.dy` <div class="progress"> ${"success"===this._result?a.dy`<ha-svg-icon .path="${"M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"}"></ha-svg-icon>`:"error"===this._result?a.dy`<ha-svg-icon .path="${"M2.2,16.06L3.88,12L2.2,7.94L6.26,6.26L7.94,2.2L12,3.88L16.06,2.2L17.74,6.26L21.8,7.94L20.12,12L21.8,16.06L17.74,17.74L16.06,21.8L12,20.12L7.94,21.8L6.26,17.74L2.2,16.06M13,17V15H11V17H13M13,13V7H11V13H13Z"}"></ha-svg-icon>`:this.progress?a.dy` <ha-circular-progress size="small" indeterminate></ha-circular-progress> `:""} </div> `:a.Ld} `}},{kind:"method",key:"actionSuccess",value:function(){this._setResult("success")}},{kind:"method",key:"actionError",value:function(){this._setResult("error")}},{kind:"method",key:"_setResult",value:function(e){this._result=e,setTimeout((()=>{this._result=void 0}),2e3)}},{kind:"method",key:"_buttonTapped",value:function(e){this.progress&&e.stopPropagation()}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{outline:0;display:inline-block;position:relative}mwc-button{transition:all 1s}mwc-button.success{--mdc-theme-primary:white;background-color:var(--success-color);transition:none;border-radius:4px;pointer-events:none}mwc-button[raised].success{--mdc-theme-primary:var(--success-color);--mdc-theme-on-primary:white}mwc-button.error{--mdc-theme-primary:white;background-color:var(--error-color);transition:none;border-radius:4px;pointer-events:none}mwc-button[raised].error{--mdc-theme-primary:var(--error-color);--mdc-theme-on-primary:white}.progress{bottom:4px;position:absolute;text-align:center;top:4px;width:100%}ha-svg-icon{color:#fff}mwc-button.error slot,mwc-button.success slot{visibility:hidden}`}}]}}),a.oi)},62336:(e,t,i)=>{i.d(t,{Q:()=>u});var o=i(17463),a=i(34541),s=i(47838),n=i(68144),r=i(79932),d=i(83448),l=i(47501),c=i(50239),h=i(87744),p=i(38346);const u=3e5;(0,o.Z)([(0,r.Mo)("ha-chart-base")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",key:"chart",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"chart-type",reflect:!0})],key:"chartType",value:()=>"line"},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"data",value:()=>({datasets:[]})},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"options",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"plugins",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"height",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"paddingYAxis",value:()=>0},{kind:"field",decorators:[(0,r.SB)()],key:"_chartHeight",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_tooltip",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_hiddenDatasets",value:()=>new Set},{kind:"field",key:"_paddingUpdateCount",value:()=>0},{kind:"field",key:"_paddingUpdateLock",value:()=>!1},{kind:"field",key:"_paddingYAxisInternal",value:()=>0},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,s.Z)(o.prototype),"disconnectedCallback",this).call(this),this._releaseCanvas()}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,s.Z)(o.prototype),"connectedCallback",this).call(this),this.hasUpdated&&(this._releaseCanvas(),this._setupChart())}},{kind:"field",key:"updateChart",value(){return e=>{var t;null===(t=this.chart)||void 0===t||t.update(e)}}},{kind:"field",key:"resize",value(){return e=>{var t,i,o,a;if(null!=e&&e.aspectRatio&&!e.height)e.height=Math.round((null!==(a=e.width)&&void 0!==a?a:this.clientWidth)/e.aspectRatio);else if(null!=e&&e.aspectRatio&&!e.width){var s;e.width=Math.round((null!==(s=e.height)&&void 0!==s?s:this.clientHeight)*e.aspectRatio)}null===(t=this.chart)||void 0===t||t.resize(null!==(i=null==e?void 0:e.width)&&void 0!==i?i:this.clientWidth,null!==(o=null==e?void 0:e.height)&&void 0!==o?o:this.clientHeight)}}},{kind:"method",key:"firstUpdated",value:function(){this._setupChart(),this.data.datasets.forEach(((e,t)=>{e.hidden&&this._hiddenDatasets.add(t)}))}},{kind:"method",key:"shouldUpdate",value:function(e){return!this._paddingUpdateLock||1!==e.size||!e.has("paddingYAxis")}},{kind:"field",key:"_debouncedClearUpdates",value(){return(0,p.D)((()=>{this._paddingUpdateCount=0}),2e3,!1)}},{kind:"method",key:"willUpdate",value:function(e){if((0,a.Z)((0,s.Z)(o.prototype),"willUpdate",this).call(this,e),this._paddingUpdateLock||(this._paddingYAxisInternal=this.paddingYAxis,1===e.size&&e.has("paddingYAxis")&&(this._paddingUpdateCount++,this._paddingUpdateCount>300?(this._paddingUpdateLock=!0,console.error("Detected excessive chart padding updates, possibly an infinite loop. Disabling axis padding.")):this._debouncedClearUpdates())),this.hasUpdated&&this.chart){if(e.has("plugins")||e.has("chartType"))return this._releaseCanvas(),void this._setupChart();e.has("data")&&(this._hiddenDatasets.size&&this.data.datasets.forEach(((e,t)=>{e.hidden=this._hiddenDatasets.has(t)})),this.chart.data=this.data),e.has("options")&&(this.chart.options=this._createOptions()),this.chart.update("none")}}},{kind:"method",key:"render",value:function(){var e,t,i;return n.dy` ${!0===(null===(e=this.options)||void 0===e||null===(e=e.plugins)||void 0===e||null===(e=e.legend)||void 0===e?void 0:e.display)?n.dy`<div class="chartLegend"> <ul> ${this.data.datasets.map(((e,t)=>n.dy`<li .datasetIndex="${t}" @click="${this._legendClick}" class="${(0,d.$)({hidden:this._hiddenDatasets.has(t)})}" .title="${e.label}"> <div class="bullet" style="${(0,l.V)({backgroundColor:e.backgroundColor,borderColor:e.borderColor})}"></div> <div class="label">${e.label}</div> </li>`))} </ul> </div>`:""} <div class="animationContainer" style="${(0,l.V)({height:`${this.height||this._chartHeight||0}px`,overflow:this._chartHeight?"initial":"hidden"})}"> <div class="chartContainer" style="${(0,l.V)({height:`${null!==(t=null!==(i=this.height)&&void 0!==i?i:this._chartHeight)&&void 0!==t?t:this.clientWidth/2}px`,"padding-left":`${(0,h.HE)(this.hass)?0:this._paddingYAxisInternal}px`,"padding-right":`${(0,h.HE)(this.hass)?this._paddingYAxisInternal:0}px`})}"> <canvas></canvas> ${this._tooltip?n.dy`<div class="chartTooltip ${(0,d.$)({[this._tooltip.yAlign]:!0})}" style="${(0,l.V)({top:this._tooltip.top,left:this._tooltip.left})}"> <div class="title">${this._tooltip.title}</div> ${this._tooltip.beforeBody?n.dy`<div class="beforeBody"> ${this._tooltip.beforeBody} </div>`:""} <div> <ul> ${this._tooltip.body.map(((e,t)=>n.dy`<li> <div class="bullet" style="${(0,l.V)({backgroundColor:this._tooltip.labelColors[t].backgroundColor,borderColor:this._tooltip.labelColors[t].borderColor})}"></div> ${e.lines.join("\n")} </li>`))} </ul> </div> ${this._tooltip.footer.length?n.dy`<div class="footer"> ${this._tooltip.footer.map((e=>n.dy`${e}<br>`))} </div>`:""} </div>`:""} </div> </div> `}},{kind:"method",key:"_setupChart",value:async function(){const e=this.renderRoot.querySelector("canvas").getContext("2d"),t=(await Promise.all([i.e(81866),i.e(69519),i.e(25843),i.e(21161),i.e(55928)]).then(i.bind(i,55928))).Chart,o=getComputedStyle(this);t.defaults.borderColor=o.getPropertyValue("--divider-color"),t.defaults.color=o.getPropertyValue("--secondary-text-color"),t.defaults.font.family=o.getPropertyValue("--mdc-typography-body1-font-family")||o.getPropertyValue("--mdc-typography-font-family")||"Roboto, Noto, sans-serif",this.chart=new t(e,{type:this.chartType,data:this.data,options:this._createOptions(),plugins:this._createPlugins()})}},{kind:"method",key:"_createOptions",value:function(){var e,t,i;return{maintainAspectRatio:!1,...this.options,plugins:{...null===(e=this.options)||void 0===e?void 0:e.plugins,tooltip:{...null===(t=this.options)||void 0===t||null===(t=t.plugins)||void 0===t?void 0:t.tooltip,enabled:!1,external:e=>this._handleTooltip(e)},legend:{...null===(i=this.options)||void 0===i||null===(i=i.plugins)||void 0===i?void 0:i.legend,display:!1}}}}},{kind:"method",key:"_createPlugins",value:function(){var e;return[...this.plugins||[],{id:"resizeHook",resize:e=>{var t;const i=e.height-(null!==(t=this._chartHeight)&&void 0!==t?t:0);(!this._chartHeight||i>12||i<-12)&&(this._chartHeight=e.height)},legend:{...null===(e=this.options)||void 0===e||null===(e=e.plugins)||void 0===e?void 0:e.legend,display:!1}}]}},{kind:"method",key:"_legendClick",value:function(e){if(!this.chart)return;const t=e.currentTarget.datasetIndex;this.chart.isDatasetVisible(t)?(this.chart.setDatasetVisibility(t,!1),this._hiddenDatasets.add(t)):(this.chart.setDatasetVisibility(t,!0),this._hiddenDatasets.delete(t)),this.chart.update("none"),this.requestUpdate("_hiddenDatasets")}},{kind:"method",key:"_handleTooltip",value:function(e){0!==e.tooltip.opacity?this._tooltip={...e.tooltip,top:this.chart.canvas.offsetTop+e.tooltip.caretY+12+"px",left:this.chart.canvas.offsetLeft+(0,c.u)(e.tooltip.caretX,100,this.clientWidth-100-this._paddingYAxisInternal)-100+"px"}:this._tooltip=void 0}},{kind:"method",key:"_releaseCanvas",value:function(){this.chart&&this.chart.destroy()}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{display:block;position:var(--chart-base-position,relative)}.animationContainer{overflow:hidden;height:0;transition:height .3s cubic-bezier(.4, 0, .2, 1)}canvas{max-height:var(--chart-max-height,400px)}.chartLegend{text-align:center}.chartLegend li{cursor:pointer;display:inline-grid;grid-auto-flow:column;padding:0 8px;box-sizing:border-box;align-items:center;color:var(--secondary-text-color)}.chartLegend .hidden{text-decoration:line-through}.chartLegend .label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chartLegend .bullet,.chartTooltip .bullet{border-width:1px;border-style:solid;border-radius:50%;display:inline-block;height:16px;margin-right:6px;width:16px;flex-shrink:0;box-sizing:border-box;margin-inline-end:6px;margin-inline-start:initial;direction:var(--direction)}.chartTooltip .bullet{align-self:baseline}:host([rtl]) .chartLegend .bullet,:host([rtl]) .chartTooltip .bullet{margin-right:inherit;margin-left:6px;margin-inline-end:inherit;margin-inline-start:6px;direction:var(--direction)}.chartTooltip{padding:8px;font-size:90%;position:absolute;background:rgba(80,80,80,.9);color:#fff;border-radius:4px;pointer-events:none;z-index:1000;width:200px;box-sizing:border-box}:host([rtl]) .chartTooltip{direction:rtl}.chartLegend ul,.chartTooltip ul{display:inline-block;padding:0 0px;margin:8px 0 0 0;width:100%}.chartTooltip ul{margin:0 4px}.chartTooltip li{display:flex;white-space:pre-line;word-break:break-word;align-items:center;line-height:16px;padding:4px 0}.chartTooltip .title{text-align:center;font-weight:500;word-break:break-word;direction:ltr}.chartTooltip .footer{font-weight:500}.chartTooltip .beforeBody{text-align:center;font-weight:300;word-break:break-all}`}}]}}),n.oi)},9381:(e,t,i)=>{i.r(t);var o=i(17463),a=i(68144),s=i(79932),n=i(83448),r=i(47181);i(10983),i(52039);const d={info:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",warning:"M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16",error:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",success:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"};(0,o.Z)([(0,s.Mo)("ha-alert")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)()],key:"title",value:()=>""},{kind:"field",decorators:[(0,s.Cb)({attribute:"alert-type"})],key:"alertType",value:()=>"info"},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"dismissable",value:()=>!1},{kind:"method",key:"render",value:function(){return a.dy` <div class="issue-type ${(0,n.$)({[this.alertType]:!0})}" role="alert"> <div class="icon ${this.title?"":"no-title"}"> <slot name="icon"> <ha-svg-icon .path="${d[this.alertType]}"></ha-svg-icon> </slot> </div> <div class="content"> <div class="main-content"> ${this.title?a.dy`<div class="title">${this.title}</div>`:""} <slot></slot> </div> <div class="action"> <slot name="action"> ${this.dismissable?a.dy`<ha-icon-button @click="${this._dismiss_clicked}" label="Dismiss alert" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button>`:""} </slot> </div> </div> </div> `}},{kind:"method",key:"_dismiss_clicked",value:function(){(0,r.B)(this,"alert-dismissed-clicked")}},{kind:"field",static:!0,key:"styles",value:()=>a.iv`.issue-type{position:relative;padding:8px;display:flex}.issue-type::after{position:absolute;top:0;right:0;bottom:0;left:0;opacity:.12;pointer-events:none;content:"";border-radius:4px}.icon{z-index:1}.icon.no-title{align-self:center}.content{display:flex;justify-content:space-between;align-items:center;width:100%;text-align:var(--float-start)}.action{z-index:1;width:min-content;--mdc-theme-primary:var(--primary-text-color)}.main-content{overflow-wrap:anywhere;word-break:break-word;margin-left:8px;margin-right:0;margin-inline-start:8px;margin-inline-end:0;direction:var(--direction)}.title{margin-top:2px;font-weight:700}.action ha-icon-button,.action mwc-button{--mdc-theme-primary:var(--primary-text-color);--mdc-icon-button-size:36px}.issue-type.info>.icon{color:var(--info-color)}.issue-type.info::after{background-color:var(--info-color)}.issue-type.warning>.icon{color:var(--warning-color)}.issue-type.warning::after{background-color:var(--warning-color)}.issue-type.error>.icon{color:var(--error-color)}.issue-type.error::after{background-color:var(--error-color)}.issue-type.success>.icon{color:var(--success-color)}.issue-type.success::after{background-color:var(--success-color)}`}]}}),a.oi)},31206:(e,t,i)=>{i.r(t),i.d(t,{HaCircularProgress:()=>l});var o=i(17463),a=i(34541),s=i(47838),n=(i(34131),i(22129)),r=i(68144),d=i(79932);let l=(0,o.Z)([(0,d.Mo)("ha-circular-progress")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:"aria-label",type:String})],key:"ariaLabel",value:()=>"Loading"},{kind:"field",decorators:[(0,d.Cb)()],key:"size",value:()=>"medium"},{kind:"method",key:"updated",value:function(e){if((0,a.Z)((0,s.Z)(i.prototype),"updated",this).call(this,e),e.has("size"))switch(this.size){case"tiny":this.style.setProperty("--md-circular-progress-size","16px");break;case"small":this.style.setProperty("--md-circular-progress-size","28px");break;case"medium":this.style.setProperty("--md-circular-progress-size","48px");break;case"large":this.style.setProperty("--md-circular-progress-size","68px")}}},{kind:"get",static:!0,key:"styles",value:function(){return[...(0,a.Z)((0,s.Z)(i),"styles",this),r.iv`:host{--md-sys-color-primary:var(--primary-color);--md-circular-progress-size:48px}`]}}]}}),n.B)},45036:(e,t,i)=>{var o=i(17463),a=i(34541),s=i(47838),n=i(68144),r=i(79932),d=i(73366);(0,o.Z)([(0,r.Mo)("ha-clickable-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)()],key:"href",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disableHref",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"openNewTab",value:()=>!1},{kind:"field",decorators:[(0,r.IO)("a")],key:"_anchor",value:void 0},{kind:"method",key:"render",value:function(){const e=(0,a.Z)((0,s.Z)(i.prototype),"render",this).call(this),t=this.href||"";return n.dy`${this.disableHref?n.dy`<a>${e}</a>`:n.dy`<a target="${this.openNewTab?"_blank":""}" href="${t}">${e}</a>`}`}},{kind:"method",key:"firstUpdated",value:function(){(0,a.Z)((0,s.Z)(i.prototype),"firstUpdated",this).call(this),this.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||this._anchor.click()}))}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,a.Z)((0,s.Z)(i),"styles",this),n.iv`a{width:100%;height:100%;display:flex;align-items:center;overflow:hidden}`]}}]}}),d.M)},14089:(e,t,i)=>{var o=i(17463),a=i(68144),s=i(79932);(0,o.Z)([(0,s.Mo)("ha-settings-row")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"three-line"})],key:"threeLine",value:()=>!1},{kind:"method",key:"render",value:function(){return a.dy` <div class="prefix-wrap"> <slot name="prefix"></slot> <div class="body" ?two-line="${!this.threeLine}" ?three-line="${this.threeLine}"> <slot name="heading"></slot> <div class="secondary"><slot name="description"></slot></div> </div> </div> <div class="content"><slot></slot></div> `}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{display:flex;padding:0 16px;align-content:normal;align-self:auto;align-items:center}.body{padding-top:8px;padding-bottom:8px;padding-left:0;padding-inline-start:0;padding-right:16x;padding-inline-end:16px;overflow:hidden;display:var(--layout-vertical_-_display);flex-direction:var(--layout-vertical_-_flex-direction);justify-content:var(--layout-center-justified_-_justify-content);flex:var(--layout-flex_-_flex);flex-basis:var(--layout-flex_-_flex-basis)}.body[three-line]{min-height:var(--paper-item-body-three-line-min-height,88px)}.body>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.body>.secondary{display:block;padding-top:4px;font-family:var(
          --mdc-typography-body2-font-family,
          var(--mdc-typography-font-family, Roboto, sans-serif)
        );-webkit-font-smoothing:antialiased;font-size:var(--mdc-typography-body2-font-size, .875rem);font-weight:var(--mdc-typography-body2-font-weight,400);line-height:normal;color:var(--secondary-text-color)}.body[two-line]{min-height:calc(var(--paper-item-body-two-line-min-height,72px) - 16px);flex:1}.content{display:contents}:host(:not([narrow])) .content{display:var(--settings-row-content-display,flex);justify-content:flex-end;flex:1;padding:16px 0}.content ::slotted(*){width:var(--settings-row-content-width)}:host([narrow]){align-items:normal;flex-direction:column;border-top:1px solid var(--divider-color);padding-bottom:8px}::slotted(ha-switch){padding:16px 0}.secondary{white-space:normal}.prefix-wrap{display:var(--settings-row-prefix-display)}:host([narrow]) .prefix-wrap{display:flex;align-items:center}`}}]}}),a.oi)},81582:(e,t,i)=>{i.d(t,{DJ:()=>s,LZ:()=>o,Nn:()=>c,Ny:()=>h,Pk:()=>u,Q4:()=>a,RQ:()=>r,SO:()=>d,T0:()=>p,iJ:()=>l,pB:()=>n});const o=32143==i.j?["migration_error","setup_error","setup_retry"]:null,a=32143==i.j?["not_loaded","loaded","setup_error","setup_retry"]:null,s=(e,t,i)=>{const o={type:"config_entries/subscribe"};return i&&i.type&&(o.type_filter=i.type),e.connection.subscribeMessage((e=>t(e)),o)},n=(e,t)=>{const i={};return t&&(t.type&&(i.type_filter=t.type),t.domain&&(i.domain=t.domain)),e.callWS({type:"config_entries/get",...i})},r=(e,t)=>e.callWS({type:"config_entries/get_single",entry_id:t}),d=(e,t,i)=>e.callWS({type:"config_entries/update",entry_id:t,...i}),l=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),c=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),h=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),p=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null}),u=(e,t)=>{const i=[...e],o=e=>{const i=t[e.domain];return"helper"===(null==i?void 0:i.integration_type)?-1:1};return i.sort(((e,t)=>o(t)-o(e)))}},75667:(e,t,i)=>{i.d(t,{k:()=>o});const o=e=>e.callWS({type:"usb/scan"})},52871:(e,t,i)=>{i.d(t,{w:()=>s});var o=i(47181);const a=()=>Promise.all([i.e(42850),i.e(46992),i.e(28597),i.e(78133),i.e(50731),i.e(66023),i.e(52154),i.e(45607),i.e(40163),i.e(59159)]).then(i.bind(i,59159)),s=(e,t,i)=>{(0,o.B)(e,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:a,dialogParams:{...t,flowConfig:i,dialogParentElement:e}})}},18532:(e,t,i)=>{i.d(t,{c:()=>c});var o=i(68144),a=i(5986);const s=(e,t)=>{var i;return e.callApi("POST","config/config_entries/options/flow",{handler:t,show_advanced_options:Boolean(null===(i=e.userData)||void 0===i?void 0:i.showAdvanced)})},n=(e,t)=>e.callApi("GET",`config/config_entries/options/flow/${t}`),r=(e,t,i)=>e.callApi("POST",`config/config_entries/options/flow/${t}`,i),d=(e,t)=>e.callApi("DELETE",`config/config_entries/options/flow/${t}`);var l=i(52871);const c=(e,t,i)=>(0,l.w)(e,{startFlowHandler:t.entry_id,domain:t.domain,...i},{flowType:"options_flow",loadDevicesAndAreas:!1,createFlow:async(e,i)=>{const[o]=await Promise.all([s(e,i),e.loadFragmentTranslation("config"),e.loadBackendTranslation("options",t.domain),e.loadBackendTranslation("selector",t.domain)]);return o},fetchFlow:async(e,i)=>{const[o]=await Promise.all([n(e,i),e.loadFragmentTranslation("config"),e.loadBackendTranslation("options",t.domain),e.loadBackendTranslation("selector",t.domain)]);return o},handleFlowStep:r,deleteFlow:d,renderAbortDescription(e,i){const a=e.localize(`component.${t.domain}.options.abort.${i.reason}`,i.description_placeholders);return a?o.dy` <ha-markdown breaks allowsvg .content="${a}"></ha-markdown> `:""},renderShowFormStepHeader:(e,i)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.title`,i.description_placeholders)||e.localize("ui.dialogs.options_flow.form.header"),renderShowFormStepDescription(e,i){const a=e.localize(`component.${t.domain}.options.step.${i.step_id}.description`,i.description_placeholders);return a?o.dy` <ha-markdown allowsvg breaks .content="${a}"></ha-markdown> `:""},renderShowFormStepFieldLabel:(e,i,o)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.data.${o.name}`),renderShowFormStepFieldHelper(e,i,a){const s=e.localize(`component.${t.domain}.options.step.${i.step_id}.data_description.${a.name}`,i.description_placeholders);return s?o.dy`<ha-markdown breaks .content="${s}"></ha-markdown>`:""},renderShowFormStepFieldError:(e,i,o)=>e.localize(`component.${t.domain}.options.error.${o}`,i.description_placeholders),renderShowFormStepFieldLocalizeValue:(e,i,o)=>e.localize(`component.${t.domain}.selector.${o}`),renderShowFormStepSubmitButton:(e,i)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.submit`)||e.localize("ui.panel.config.integrations.config_flow."+(!1===i.last_step?"next":"submit")),renderExternalStepHeader:(e,t)=>"",renderExternalStepDescription:(e,t)=>"",renderCreateEntryDescription:(e,t)=>o.dy` <p>${e.localize("ui.dialogs.options_flow.success.description")}</p> `,renderShowFormProgressHeader:(e,i)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.title`)||e.localize(`component.${t.domain}.title`),renderShowFormProgressDescription(e,i){const a=e.localize(`component.${t.domain}.options.progress.${i.progress_action}`,i.description_placeholders);return a?o.dy` <ha-markdown allowsvg breaks .content="${a}"></ha-markdown> `:""},renderMenuHeader:(e,i)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.title`)||e.localize(`component.${t.domain}.title`),renderMenuDescription(e,i){const a=e.localize(`component.${t.domain}.options.step.${i.step_id}.description`,i.description_placeholders);return a?o.dy` <ha-markdown allowsvg breaks .content="${a}"></ha-markdown> `:""},renderMenuOption:(e,i,o)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.menu_options.${o}`,i.description_placeholders),renderLoadingDescription:(e,i)=>e.localize(`component.${t.domain}.options.loading`)||("loading_flow"===i||"loading_step"===i?e.localize(`ui.dialogs.options_flow.loading.${i}`,{integration:(0,a.Lh)(e.localize,t.domain)}):"")})},27515:(e,t,i)=>{i.r(t);var o=i(17463),a=i(34541),s=i(47838),n=(i(63436),i(44577),i(68144)),r=i(79932),d=i(7323),l=i(18457),c=i(27593),h=i(68307),p=(i(98762),i(62336),i(9381),i(22098),i(45036),i(10983),i(99282),i(14089),i(81582)),u=i(45355),m=i(35460),y=i(75667),g=i(18532),v=i(82494),f=(i(60010),i(73826)),b=i(59657),k=i(11654),_=i(11254),w=i(47181);const x=()=>Promise.all([i.e(42850),i.e(46992),i.e(28597),i.e(77426),i.e(39643)]).then(i.bind(i,526)),$={fill:"origin",borderColor:b.QF,backgroundColor:b.QF+"2B",pointRadius:0,lineTension:.2,borderWidth:1};(0,o.Z)([(0,r.Mo)("ha-config-hardware")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_OSData",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_hardwareInfo",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_chartOptions",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_systemStatusData",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_configEntries",value:void 0},{kind:"field",key:"_memoryEntries",value:()=>[]},{kind:"field",key:"_cpuEntries",value:()=>[]},{kind:"method",key:"hassSubscribe",value:function(){const e=[(0,p.DJ)(this.hass,(e=>{let t=!1;const i=[];if(e.forEach((e=>{if(null===e.type||"added"===e.type)i.push(e.entry),null===e.type&&(t=!0);else if("removed"===e.type)this._configEntries&&delete this._configEntries[e.entry.entry_id];else if("updated"===e.type&&this._configEntries){const t=e.entry;this._configEntries[e.entry.entry_id]=t}})),!i.length&&!t)return;const o=[...t?[]:Object.values(this._configEntries||{}),...i],a={};for(const e of o)a[e.entry_id]=e;this._configEntries=a}),{type:["hardware"]})];return(0,d.p)(this.hass,"hardware")&&e.push(this.hass.connection.subscribeMessage((e=>{this._memoryEntries.shift(),this._cpuEntries.shift(),this._memoryEntries.push({x:new Date(e.timestamp).getTime(),y:e.memory_used_percent}),this._cpuEntries.push({x:new Date(e.timestamp).getTime(),y:e.cpu_percent}),this._systemStatusData=e}),{type:"hardware/subscribe_system_status"})),e}},{kind:"method",key:"willUpdate",value:function(){this.hasUpdated||(this._chartOptions={animation:!1,responsive:!0,scales:{y:{gridLines:{drawTicks:!1},ticks:{maxTicksLimit:7,fontSize:10,max:100,min:0,stepSize:1,callback:e=>e+(0,h.K)(this.hass.locale)+"%"}},x:{type:"time",adapters:{date:{locale:this.hass.locale,config:this.hass.config}},gridLines:{display:!0,drawTicks:!1},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},fontSize:10,autoSkip:!0,maxTicksLimit:5}}},locale:(0,l.Hd)(this.hass.locale)})}},{kind:"method",key:"firstUpdated",value:function(e){(0,a.Z)((0,s.Z)(i.prototype),"firstUpdated",this).call(this,e),this._load();const t=new Date;for(let e=0;e<60;e++){const i=new Date(t);i.setSeconds(i.getSeconds()-5*(60-e)),this._memoryEntries.push({x:i.getTime(),y:null}),this._cpuEntries.push({x:i.getTime(),y:null})}}},{kind:"method",key:"render",value:function(){var e,t,i;let o,a,s,r,l=[];const p=null===(e=this._hardwareInfo)||void 0===e?void 0:e.hardware.find((e=>null!==e.board)),m=null===(t=this._hardwareInfo)||void 0===t?void 0:t.hardware.filter((e=>null!==e.dongle&&(!e.config_entries.length||e.config_entries.some((e=>{var t;return(null===(t=this._configEntries)||void 0===t?void 0:t[e])&&!this._configEntries[e].disabled_by})))));var y;p?(l=p.config_entries.map((e=>{var t;return null===(t=this._configEntries)||void 0===t?void 0:t[e]})).filter((e=>(null==e?void 0:e.supports_options)&&!e.disabled_by)),o=p.board.hassio_board_id,a=p.name,r=p.url,s=(0,_.RU)({category:"boards",manufacturer:p.board.manufacturer,model:p.board.model,darkOptimized:null===(y=this.hass.themes)||void 0===y?void 0:y.darkMode})):null!==(i=this._OSData)&&void 0!==i&&i.board&&(o=this._OSData.board,a=u.d[this._OSData.board]);return n.dy` <hass-subpage back-path="/config/system" .hass="${this.hass}" .narrow="${this.narrow}" .header="${this.hass.localize("ui.panel.config.hardware.caption")}"> ${(0,d.p)(this.hass,"hassio")?n.dy` <ha-icon-button slot="toolbar-icon" .path="${"M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13"}" .label="${this.hass.localize("ui.panel.config.hardware.restart_homeassistant")}" @click="${this._showRestartDialog}"></ha-icon-button> `:""} ${this._error?n.dy` <ha-alert alert-type="error">${this._error.message||this._error.code}</ha-alert> `:""} <div class="content"> ${a||(0,d.p)(this.hass,"hassio")?n.dy` <ha-card outlined> <div class="card-content"> ${s?n.dy`<img alt="" src="${s}" crossorigin="anonymous" referrerpolicy="no-referrer">`:""} <div class="board-info"> <p class="primary-text"> ${a||this.hass.localize("ui.panel.config.hardware.generic_hardware")} </p> ${o?n.dy`<p class="secondary-text">${o}</p>`:""} </div> </div> ${r?n.dy` <mwc-list> <ha-clickable-list-item .href="${r}" openNewTab twoline hasMeta> <span>${this.hass.localize("ui.panel.config.hardware.documentation")}</span> <span slot="secondary">${this.hass.localize("ui.panel.config.hardware.documentation_description")}</span> <ha-icon-next slot="meta"></ha-icon-next> </ha-clickable-list-item> </mwc-list> `:""} ${l.length||(0,d.p)(this.hass,"hassio")?n.dy`<div class="card-actions"> ${l.length?n.dy` <mwc-button .entry="${l[0]}" @click="${this._openOptionsFlow}"> ${this.hass.localize("ui.panel.config.hardware.configure")} </mwc-button> `:n.Ld} ${(0,d.p)(this.hass,"hassio")?n.dy` <mwc-button @click="${this._openHardware}"> ${this.hass.localize("ui.panel.config.hardware.available_hardware.title")} </mwc-button> `:n.Ld} </div>`:""} </ha-card> `:""} ${null!=m&&m.length?n.dy`<ha-card outlined> ${m.map((e=>{const t=e.config_entries.map((e=>{var t;return null===(t=this._configEntries)||void 0===t?void 0:t[e]})).filter((e=>(null==e?void 0:e.supports_options)&&!e.disabled_by))[0];return n.dy`<div class="row"> ${e.name}${t?n.dy`<mwc-button .entry="${t}" @click="${this._openOptionsFlow}"> ${this.hass.localize("ui.panel.config.hardware.configure")} </mwc-button>`:""} </div>`}))} </ha-card>`:""} ${this._systemStatusData?n.dy`<ha-card outlined> <div class="header"> <div class="title"> ${this.hass.localize("ui.panel.config.hardware.processor")} </div> <div class="value"> ${this._systemStatusData.cpu_percent||"-"}${(0,h.K)(this.hass.locale)}% </div> </div> <div class="card-content"> <ha-chart-base .hass="${this.hass}" .data="${{datasets:[{...$,data:this._cpuEntries}]}}" .options="${this._chartOptions}"></ha-chart-base> </div> </ha-card> <ha-card outlined> <div class="header"> <div class="title"> ${this.hass.localize("ui.panel.config.hardware.memory")} </div> <div class="value"> ${(0,c.N)(this._systemStatusData.memory_used_mb/1024,1)} GB / ${(0,c.N)((this._systemStatusData.memory_used_mb+this._systemStatusData.memory_free_mb)/1024,0)} GB </div> </div> <div class="card-content"> <ha-chart-base .hass="${this.hass}" .data="${{datasets:[{...$,data:this._memoryEntries}]}}" .options="${this._chartOptions}"></ha-chart-base> </div> </ha-card>`:(0,d.p)(this.hass,"hardware")?n.dy`<ha-card outlined> <div class="card-content"> <div class="value"> ${this.hass.localize("ui.panel.config.hardware.loading_system_data")} </div> </div> </ha-card>`:""} </div> </hass-subpage> `}},{kind:"method",key:"_load",value:async function(){(0,d.p)(this.hass,"usb")&&await(0,y.k)(this.hass);const e=(0,d.p)(this.hass,"hassio");try{var t;(0,d.p)(this.hass,"hardware")&&(this._hardwareInfo=await this.hass.callWS({type:"hardware/info"})),!e||null!==(t=this._hardwareInfo)&&void 0!==t&&t.hardware.length||(this._OSData=await(0,m.AP)(this.hass))}catch(e){this._error=e.message||e}}},{kind:"method",key:"_openOptionsFlow",value:async function(e){const t=e.currentTarget.entry;t&&(0,g.c)(this,t)}},{kind:"method",key:"_openHardware",value:async function(){var e;e=this,(0,w.B)(e,"show-dialog",{dialogTag:"ha-dialog-hardware-available",dialogImport:x,dialogParams:{}})}},{kind:"method",key:"_showRestartDialog",value:async function(){(0,v.s)(this)}},{kind:"field",static:!0,key:"styles",value:()=>[k.Qx,n.iv`.content{padding:28px 20px 0;max-width:1040px;margin:0 auto;--mdc-list-side-padding:24px;--mdc-list-vertical-padding:0}ha-card{max-width:600px;margin:0 auto;height:100%;justify-content:space-between;flex-direction:column;display:flex;margin-bottom:16px}.card-content{display:flex;justify-content:space-between;flex-direction:column;padding:16px}.card-content img{max-width:300px;margin:auto}.board-info{text-align:center}.primary-text{font-size:16px;margin:0}.secondary-text{font-size:14px;margin-bottom:0;color:var(--secondary-text-color)}.header{padding:16px;display:flex;justify-content:space-between}.header .title{color:var(--secondary-text-color);font-size:18px}.header .value{font-size:16px}.row{display:flex;justify-content:space-between;align-items:center;height:48px;padding:8px 16px}.card-actions{display:flex;justify-content:space-between}`]}]}}),(0,f.f)(n.oi))},11254:(e,t,i)=>{i.d(t,{RU:()=>a,X1:()=>o,u4:()=>s,zC:()=>n});const o=e=>`https://brands.home-assistant.io/${e.brand?"brands/":""}${e.useFallback?"_/":""}${e.domain}/${e.darkOptimized?"dark_":""}${e.type}.png`,a=e=>`https://brands.home-assistant.io/hardware/${e.category}/${e.darkOptimized?"dark_":""}${e.manufacturer}${e.model?`_${e.model}`:""}.png`,s=e=>e.split("/")[4],n=e=>e.startsWith("https://brands.home-assistant.io/")}};
//# sourceMappingURL=27515.KvH6G08jz-k.js.map