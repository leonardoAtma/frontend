"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[62336],{62336:function(t,i,e){e.d(i,{Q:function(){return L}});var a,n,o,d,s,l,r,h,c,u=e(53709),p=e(99312),g=e(81043),v=e(93359),f=e(88962),b=e(33368),y=e(71650),k=e(82390),_=e(69205),x=e(70906),C=e(91808),m=e(34541),w=e(47838),Z=(e(97393),e(76843),e(51358),e(46798),e(78399),e(5239),e(56086),e(47884),e(81912),e(64584),e(41483),e(12367),e(9454),e(98490),e(9849),e(50289),e(94167),e(46349),e(70320),e(91989),e(47084),e(85717),e(68144)),T=e(95260),U=e(83448),O=e(47501),D=e(50239),j=e(87744),z=e(38346),L=3e5;(0,C.Z)([(0,T.Mo)("ha-chart-base")],(function(t,i){var C,L=function(i){(0,_.Z)(a,i);var e=(0,x.Z)(a);function a(){var i;(0,y.Z)(this,a);for(var n=arguments.length,o=new Array(n),d=0;d<n;d++)o[d]=arguments[d];return i=e.call.apply(e,[this].concat(o)),t((0,k.Z)(i)),i}return(0,b.Z)(a)}(i);return{F:L,d:[{kind:"field",key:"chart",value:void 0},{kind:"field",decorators:[(0,T.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,T.Cb)({attribute:"chart-type",reflect:!0})],key:"chartType",value:function(){return"line"}},{kind:"field",decorators:[(0,T.Cb)({attribute:!1})],key:"data",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,T.Cb)({attribute:!1})],key:"options",value:void 0},{kind:"field",decorators:[(0,T.Cb)({attribute:!1})],key:"plugins",value:void 0},{kind:"field",decorators:[(0,T.Cb)({type:Number})],key:"height",value:void 0},{kind:"field",decorators:[(0,T.Cb)({type:Number})],key:"paddingYAxis",value:function(){return 0}},{kind:"field",decorators:[(0,T.SB)()],key:"_chartHeight",value:void 0},{kind:"field",decorators:[(0,T.SB)()],key:"_tooltip",value:void 0},{kind:"field",decorators:[(0,T.SB)()],key:"_hiddenDatasets",value:function(){return new Set}},{kind:"field",key:"_paddingUpdateCount",value:function(){return 0}},{kind:"field",key:"_paddingUpdateLock",value:function(){return!1}},{kind:"field",key:"_paddingYAxisInternal",value:function(){return 0}},{kind:"method",key:"disconnectedCallback",value:function(){(0,m.Z)((0,w.Z)(L.prototype),"disconnectedCallback",this).call(this),this._releaseCanvas()}},{kind:"method",key:"connectedCallback",value:function(){(0,m.Z)((0,w.Z)(L.prototype),"connectedCallback",this).call(this),this.hasUpdated&&(this._releaseCanvas(),this._setupChart())}},{kind:"field",key:"updateChart",value:function(){var t=this;return function(i){var e;null===(e=t.chart)||void 0===e||e.update(i)}}},{kind:"field",key:"resize",value:function(){var t=this;return function(i){var e,a,n,o;if(null!=i&&i.aspectRatio&&!i.height)i.height=Math.round((null!==(o=i.width)&&void 0!==o?o:t.clientWidth)/i.aspectRatio);else if(null!=i&&i.aspectRatio&&!i.width){var d;i.width=Math.round((null!==(d=i.height)&&void 0!==d?d:t.clientHeight)*i.aspectRatio)}null===(e=t.chart)||void 0===e||e.resize(null!==(a=null==i?void 0:i.width)&&void 0!==a?a:t.clientWidth,null!==(n=null==i?void 0:i.height)&&void 0!==n?n:t.clientHeight)}}},{kind:"method",key:"firstUpdated",value:function(){var t=this;this._setupChart(),this.data.datasets.forEach((function(i,e){i.hidden&&t._hiddenDatasets.add(e)}))}},{kind:"method",key:"shouldUpdate",value:function(t){return!this._paddingUpdateLock||1!==t.size||!t.has("paddingYAxis")}},{kind:"field",key:"_debouncedClearUpdates",value:function(){var t=this;return(0,z.D)((function(){t._paddingUpdateCount=0}),2e3,!1)}},{kind:"method",key:"willUpdate",value:function(t){var i=this;if((0,m.Z)((0,w.Z)(L.prototype),"willUpdate",this).call(this,t),this._paddingUpdateLock||(this._paddingYAxisInternal=this.paddingYAxis,1===t.size&&t.has("paddingYAxis")&&(this._paddingUpdateCount++,this._paddingUpdateCount>300?(this._paddingUpdateLock=!0,console.error("Detected excessive chart padding updates, possibly an infinite loop. Disabling axis padding.")):this._debouncedClearUpdates())),this.hasUpdated&&this.chart){if(t.has("plugins")||t.has("chartType"))return this._releaseCanvas(),void this._setupChart();t.has("data")&&(this._hiddenDatasets.size&&this.data.datasets.forEach((function(t,e){t.hidden=i._hiddenDatasets.has(e)})),this.chart.data=this.data),t.has("options")&&(this.chart.options=this._createOptions()),this.chart.update("none")}}},{kind:"method",key:"render",value:function(){var t,i,e,c=this;return(0,Z.dy)(a||(a=(0,f.Z)([" ",' <div class="animationContainer" style="','"> <div class="chartContainer" style="','"> <canvas></canvas> '," </div> </div> "])),!0===(null===(t=this.options)||void 0===t||null===(t=t.plugins)||void 0===t||null===(t=t.legend)||void 0===t?void 0:t.display)?(0,Z.dy)(n||(n=(0,f.Z)(['<div class="chartLegend"> <ul> '," </ul> </div>"])),this.data.datasets.map((function(t,i){return(0,Z.dy)(o||(o=(0,f.Z)(['<li .datasetIndex="','" @click="','" class="','" .title="','"> <div class="bullet" style="','"></div> <div class="label">',"</div> </li>"])),i,c._legendClick,(0,U.$)({hidden:c._hiddenDatasets.has(i)}),t.label,(0,O.V)({backgroundColor:t.backgroundColor,borderColor:t.borderColor}),t.label)}))):"",(0,O.V)({height:"".concat(this.height||this._chartHeight||0,"px"),overflow:this._chartHeight?"initial":"hidden"}),(0,O.V)({height:"".concat(null!==(i=null!==(e=this.height)&&void 0!==e?e:this._chartHeight)&&void 0!==i?i:this.clientWidth/2,"px"),"padding-left":"".concat((0,j.HE)(this.hass)?0:this._paddingYAxisInternal,"px"),"padding-right":"".concat((0,j.HE)(this.hass)?this._paddingYAxisInternal:0,"px")}),this._tooltip?(0,Z.dy)(d||(d=(0,f.Z)(['<div class="chartTooltip ','" style="','"> <div class="title">',"</div> "," <div> <ul> "," </ul> </div> "," </div>"])),(0,U.$)((0,v.Z)({},this._tooltip.yAlign,!0)),(0,O.V)({top:this._tooltip.top,left:this._tooltip.left}),this._tooltip.title,this._tooltip.beforeBody?(0,Z.dy)(s||(s=(0,f.Z)(['<div class="beforeBody"> '," </div>"])),this._tooltip.beforeBody):"",this._tooltip.body.map((function(t,i){return(0,Z.dy)(l||(l=(0,f.Z)(['<li> <div class="bullet" style="','"></div> '," </li>"])),(0,O.V)({backgroundColor:c._tooltip.labelColors[i].backgroundColor,borderColor:c._tooltip.labelColors[i].borderColor}),t.lines.join("\n"))})),this._tooltip.footer.length?(0,Z.dy)(r||(r=(0,f.Z)(['<div class="footer"> '," </div>"])),this._tooltip.footer.map((function(t){return(0,Z.dy)(h||(h=(0,f.Z)(["","<br>"])),t)}))):""):"")}},{kind:"method",key:"_setupChart",value:(C=(0,g.Z)((0,p.Z)().mark((function t(){var i,a,n;return(0,p.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=this.renderRoot.querySelector("canvas").getContext("2d"),t.next=3,Promise.all([e.e(23254),e.e(69519),e.e(67932),e.e(14804),e.e(48324)]).then(e.bind(e,48324));case 3:a=t.sent.Chart,n=getComputedStyle(this),a.defaults.borderColor=n.getPropertyValue("--divider-color"),a.defaults.color=n.getPropertyValue("--secondary-text-color"),a.defaults.font.family=n.getPropertyValue("--mdc-typography-body1-font-family")||n.getPropertyValue("--mdc-typography-font-family")||"Roboto, Noto, sans-serif",this.chart=new a(i,{type:this.chartType,data:this.data,options:this._createOptions(),plugins:this._createPlugins()});case 9:case"end":return t.stop()}}),t,this)}))),function(){return C.apply(this,arguments)})},{kind:"method",key:"_createOptions",value:function(){var t,i,e,a=this;return Object.assign(Object.assign({maintainAspectRatio:!1},this.options),{},{plugins:Object.assign(Object.assign({},null===(t=this.options)||void 0===t?void 0:t.plugins),{},{tooltip:Object.assign(Object.assign({},null===(i=this.options)||void 0===i||null===(i=i.plugins)||void 0===i?void 0:i.tooltip),{},{enabled:!1,external:function(t){return a._handleTooltip(t)}}),legend:Object.assign(Object.assign({},null===(e=this.options)||void 0===e||null===(e=e.plugins)||void 0===e?void 0:e.legend),{},{display:!1})})})}},{kind:"method",key:"_createPlugins",value:function(){var t,i=this;return[].concat((0,u.Z)(this.plugins||[]),[{id:"resizeHook",resize:function(t){var e,a=t.height-(null!==(e=i._chartHeight)&&void 0!==e?e:0);(!i._chartHeight||a>12||a<-12)&&(i._chartHeight=t.height)},legend:Object.assign(Object.assign({},null===(t=this.options)||void 0===t||null===(t=t.plugins)||void 0===t?void 0:t.legend),{},{display:!1})}])}},{kind:"method",key:"_legendClick",value:function(t){if(this.chart){var i=t.currentTarget.datasetIndex;this.chart.isDatasetVisible(i)?(this.chart.setDatasetVisibility(i,!1),this._hiddenDatasets.add(i)):(this.chart.setDatasetVisibility(i,!0),this._hiddenDatasets.delete(i)),this.chart.update("none"),this.requestUpdate("_hiddenDatasets")}}},{kind:"method",key:"_handleTooltip",value:function(t){0!==t.tooltip.opacity?this._tooltip=Object.assign(Object.assign({},t.tooltip),{},{top:this.chart.canvas.offsetTop+t.tooltip.caretY+12+"px",left:this.chart.canvas.offsetLeft+(0,D.u)(t.tooltip.caretX,100,this.clientWidth-100-this._paddingYAxisInternal)-100+"px"}):this._tooltip=void 0}},{kind:"method",key:"_releaseCanvas",value:function(){this.chart&&this.chart.destroy()}},{kind:"get",static:!0,key:"styles",value:function(){return(0,Z.iv)(c||(c=(0,f.Z)([":host{display:block;position:var(--chart-base-position,relative)}.animationContainer{overflow:hidden;height:0;transition:height .3s cubic-bezier(.4, 0, .2, 1)}canvas{max-height:var(--chart-max-height,400px)}.chartLegend{text-align:center}.chartLegend li{cursor:pointer;display:inline-grid;grid-auto-flow:column;padding:0 8px;box-sizing:border-box;align-items:center;color:var(--secondary-text-color)}.chartLegend .hidden{text-decoration:line-through}.chartLegend .label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chartLegend .bullet,.chartTooltip .bullet{border-width:1px;border-style:solid;border-radius:50%;display:inline-block;height:16px;margin-right:6px;width:16px;flex-shrink:0;box-sizing:border-box;margin-inline-end:6px;margin-inline-start:initial;direction:var(--direction)}.chartTooltip .bullet{align-self:baseline}:host([rtl]) .chartLegend .bullet,:host([rtl]) .chartTooltip .bullet{margin-right:inherit;margin-left:6px;margin-inline-end:inherit;margin-inline-start:6px;direction:var(--direction)}.chartTooltip{padding:8px;font-size:90%;position:absolute;background:rgba(80,80,80,.9);color:#fff;border-radius:4px;pointer-events:none;z-index:1000;width:200px;box-sizing:border-box}:host([rtl]) .chartTooltip{direction:rtl}.chartLegend ul,.chartTooltip ul{display:inline-block;padding:0 0px;margin:8px 0 0 0;width:100%}.chartTooltip ul{margin:0 4px}.chartTooltip li{display:flex;white-space:pre-line;word-break:break-word;align-items:center;line-height:16px;padding:4px 0}.chartTooltip .title{text-align:center;font-weight:500;word-break:break-word;direction:ltr}.chartTooltip .footer{font-weight:500}.chartTooltip .beforeBody{text-align:center;font-weight:300;word-break:break-all}"])))}}]}}),Z.oi)}}]);
//# sourceMappingURL=62336.jNvZmdF_-U0.js.map