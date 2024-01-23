"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[89127],{73826:function(t,e,a){a.d(e,{f:function(){return f}});var i=a(40039),n=a(33368),s=a(71650),r=a(82390),o=a(69205),c=a(70906),d=a(91808),u=a(34541),l=a(47838),h=(a(97393),a(46798),a(47084),a(51358),a(98490),a(40271),a(60163),a(9849),a(13526),a(95260)),f=function(t){var e=(0,d.Z)(null,(function(t,e){var a=function(e){(0,o.Z)(i,e);var a=(0,c.Z)(i);function i(){var e;(0,s.Z)(this,i);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return e=a.call.apply(a,[this].concat(o)),t((0,r.Z)(e)),e}return(0,n.Z)(i)}(e);return{F:a,d:[{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,u.Z)((0,l.Z)(a.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,u.Z)((0,l.Z)(a.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){var t=this.__unsubs.pop();t instanceof Promise?t.then((function(t){return t()})):t()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(t){if((0,u.Z)((0,l.Z)(a.prototype),"updated",this).call(this,t),t.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps){var e,n=(0,i.Z)(t.keys());try{for(n.s();!(e=n.n()).done;){var s=e.value;if(this.hassSubscribeRequiredHostProps.includes(s))return void this.__checkSubscribed()}}catch(r){n.e(r)}finally{n.f()}}}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var t,e=this;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(t=this.hassSubscribeRequiredHostProps)&&void 0!==t&&t.some((function(t){return void 0===e[t]}))||(this.__unsubs=this.hassSubscribe())}}]}}),t);return e}},91965:function(t,e,a){a.d(e,{J:function(){return l}});a(97393),a(85717);var i=a(42722),n=a(24112),s=a(72277),r=a(59699),o=a(18457),c=a(12198),d=a(49684);function u(t,e){var a=new Date(e);return t>2&&0===a.getHours()&&(a=(0,i.Z)(a,1)),a.setMinutes(0,0,0),t>35&&a.setDate(1),t>2&&a.setHours(0),a.getTime()}function l(t,e,a,i,l,h,f){var p=(0,n.Z)(e,t),v=void 0!==h&&void 0!==f;if(v&&p<=35){var g=(0,s.Z)(e,t),y=(0,s.Z)(f,h);y>g?e=(0,r.Z)(e,y-g):g>y&&(f=(0,r.Z)(f,g-y))}var k={parsing:!1,animation:!1,interaction:{mode:"x"},scales:{x:{type:"time",suggestedMin:t.getTime(),max:u(p,e),adapters:{date:{locale:a,config:i}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,font:function(t){return t.tick&&t.tick.major?{weight:"bold"}:{}}},time:{tooltipFormat:p>35?"monthyear":p>7?"date":p>2?"weekday":p>0?"datetime":"hour",minUnit:p>35?"month":p>2?"day":"hour"}},y:{stacked:!0,type:"linear",title:{display:!0,text:l},ticks:{beginAtZero:!0,callback:function(t){return(0,o.uf)(Math.abs(t),a)}}}},plugins:{tooltip:{position:"nearest",filter:function(t){return"0"!==t.formattedValue},itemSort:function(t,e){return e.datasetIndex-t.datasetIndex},callbacks:{title:function(t){if(p>0)return t[0].label;var e=new Date(t[0].parsed.x);return"".concat(v?"".concat((0,c.ud)(e,a,i),": "):"").concat((0,d.mr)(e,a,i)," – ").concat((0,d.mr)((0,r.Z)(e,1),a,i))},label:function(t){return"".concat(t.dataset.label,": ").concat((0,o.uf)(t.parsed.y,a)," ").concat(l)}}},filler:{propagate:!1},legend:{display:!1,labels:{usePointStyle:!0}}},elements:{bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:50}},locale:(0,o.Hd)(a)};return v&&(k.scales.xAxisCompare=Object.assign(Object.assign({},k.scales.x),{},{suggestedMin:h.getTime(),max:u(p,f),display:!1})),k}},89127:function(t,e,a){a.r(e),a.d(e,{HuiEnergyWaterGraphCard:function(){return A}});var i,n,s,r,o=a(99312),c=a(53709),d=a(81043),u=a(40039),l=a(88962),h=a(33368),f=a(71650),p=a(82390),v=a(69205),g=a(70906),y=a(91808),k=(a(97393),a(85717),a(87438),a(46798),a(9849),a(22890),a(11451),a(36513),a(50289),a(94167),a(27088)),b=a(70390),_=a(53970),m=a(68144),Z=a(95260),S=a(83448),x=a(14516),C=a(15838),w=a(89525),D=a(18457),O=(a(62336),a(22098),a(55424)),j=a(38014),P=a(73826),R=a(53658),H=a(91965),A=(0,y.Z)([(0,Z.Mo)("hui-energy-water-graph-card")],(function(t,e){var a,y=function(e){(0,v.Z)(i,e);var a=(0,g.Z)(i);function i(){var e;(0,f.Z)(this,i);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return e=a.call.apply(a,[this].concat(s)),t((0,p.Z)(e)),e}return(0,h.Z)(i)}(e);return{F:y,d:[{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,Z.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,Z.SB)()],key:"_chartData",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,Z.SB)()],key:"_start",value:function(){return(0,k.Z)()}},{kind:"field",decorators:[(0,Z.SB)()],key:"_end",value:function(){return(0,b.Z)()}},{kind:"field",decorators:[(0,Z.SB)()],key:"_compareStart",value:void 0},{kind:"field",decorators:[(0,Z.SB)()],key:"_compareEnd",value:void 0},{kind:"field",decorators:[(0,Z.SB)()],key:"_unit",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:function(){return["_config"]}},{kind:"method",key:"hassSubscribe",value:function(){var t,e=this;return[(0,O.UB)(this.hass,{key:null===(t=this._config)||void 0===t?void 0:t.collection_key}).subscribe((function(t){return e._getStatistics(t)}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(t){this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,R.SN)(this,t)||t.size>1||!t.has("hass")}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?(0,m.dy)(i||(i=(0,l.Z)([" <ha-card> ",' <div class="content ','"> <ha-chart-base .hass="','" .data="','" .options="','" chart-type="bar"></ha-chart-base> '," </div> </ha-card> "])),this._config.title?(0,m.dy)(n||(n=(0,l.Z)(['<h1 class="card-header">',"</h1>"])),this._config.title):"",(0,S.$)({"has-header":!!this._config.title}),this.hass,this._chartData,this._createOptions(this._start,this._end,this.hass.locale,this.hass.config,this._unit,this._compareStart,this._compareEnd),this._chartData.datasets.length?"":(0,m.dy)(s||(s=(0,l.Z)(['<div class="no-data"> '," </div>"])),(0,_.Z)(this._start)?this.hass.localize("ui.panel.lovelace.cards.energy.no_data"):this.hass.localize("ui.panel.lovelace.cards.energy.no_data_period"))):m.Ld}},{kind:"field",key:"_createOptions",value:function(){var t=this;return(0,x.Z)((function(e,a,i,n,s,r,o){var c=(0,H.J)(e,a,i,n,s,r,o);return Object.assign(Object.assign({},c),{},{plugins:Object.assign(Object.assign({},c.plugins),{},{tooltip:Object.assign(Object.assign({},c.plugins.tooltip),{},{callbacks:Object.assign(Object.assign({},c.plugins.tooltip.callbacks),{},{footer:function(e){if(e.length<2)return[];var a,n=0,r=(0,u.Z)(e);try{for(r.s();!(a=r.n()).done;){var o=a.value;n+=o.dataset.data[o.dataIndex].y}}catch(c){r.e(c)}finally{r.f()}return 0===n?[]:[t.hass.localize("ui.panel.lovelace.cards.energy.energy_water_graph.total_consumed",{num:(0,D.uf)(n,i),unit:s})]}})})})})}))}},{kind:"method",key:"_getStatistics",value:(a=(0,d.Z)((0,o.Z)().mark((function t(e){var a,i,n,s;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.prefs.energy_sources.filter((function(t){return"water"===t.type})),this._unit=(0,O.b)(this.hass),i=[],n=getComputedStyle(this),s=n.getPropertyValue("--energy-water-color").trim(),i.push.apply(i,(0,c.Z)(this._processDataSet(e.stats,e.statsMetadata,a,s,n))),e.statsCompare&&(i.push({order:0,data:[]}),i.push({order:999,data:[],xAxisID:"xAxisCompare"}),i.push.apply(i,(0,c.Z)(this._processDataSet(e.statsCompare,e.statsMetadata,a,s,n,!0)))),this._start=e.start,this._end=e.end||(0,b.Z)(),this._compareStart=e.startCompare,this._compareEnd=e.endCompare,this._chartData={datasets:i};case 12:case"end":return t.stop()}}),t,this)}))),function(t){return a.apply(this,arguments)})},{kind:"method",key:"_processDataSet",value:function(t,e,a,i,n){var s=this,r=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=[];return a.forEach((function(a,c){var d=n.getPropertyValue("--energy-water-color-"+c).trim();if(0===d.length){var l=c>0?s.hass.themes.darkMode?(0,w.C)((0,C.Rw)((0,C.wK)(i)),c):(0,w.W)((0,C.Rw)((0,C.wK)(i)),c):void 0;d=l?(0,C.CO)((0,C.p3)(l)):i}var h=null,f=[];if(a.stat_energy_from in t){var p,v,g=t[a.stat_energy_from],y=(0,u.Z)(g);try{for(y.s();!(v=y.n()).done;){var k=v.value;if(null!==k.change&&void 0!==k.change&&h!==k.start){var b=new Date(k.start);f.push({x:b.getTime(),y:k.change}),h=k.start,p=k.end}}}catch(_){y.e(_)}finally{y.f()}1===f.length&&f.push({x:p,y:0})}o.push({label:(0,j.Kd)(s.hass,a.stat_energy_from,e[a.stat_energy_from]),borderColor:r?d+"7F":d,backgroundColor:r?d+"32":d+"7F",data:f,order:1,stack:"water",xAxisID:r?"xAxisCompare":void 0})})),o}},{kind:"get",static:!0,key:"styles",value:function(){return(0,m.iv)(r||(r=(0,l.Z)(["ha-card{height:100%}.card-header{padding-bottom:0}.content{padding:16px}.has-header{padding-top:0}.no-data{position:absolute;height:100%;top:0;left:0;right:0;display:flex;justify-content:center;align-items:center;padding:20%;margin-left:32px;box-sizing:border-box}"])))}}]}}),(0,P.f)(m.oi))}}]);
//# sourceMappingURL=89127.5U7SXnOJGTo.js.map