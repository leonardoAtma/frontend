"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[96339],{25516:function(t,e,s){s.d(e,{i:function(){return a}});var i=(0,s(8330).P)((function(t){history.replaceState({scrollPosition:t},"")}),300),a=function(t){return function(e){return{kind:"method",placement:"prototype",key:e.key,descriptor:{set:function(t){i(t),this["__".concat(String(e.key))]=t},get:function(){var t;return this["__".concat(String(e.key))]||(null===(t=history.state)||void 0===t?void 0:t.scrollPosition)},enumerable:!0,configurable:!0},finisher:function(s){var i=s.prototype.connectedCallback;s.prototype.connectedCallback=function(){var s=this;i.call(this);var a=this[e.key];a&&this.updateComplete.then((function(){var e=s.renderRoot.querySelector(t);e&&setTimeout((function(){e.scrollTop=a}),0)}))}}}}}},8330:function(t,e,s){s.d(e,{P:function(){return i}});var i=function(t,e){var s,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=0,o=function(){for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];var c=Date.now();n||!1!==i||(n=c);var u=e-(c-n);u<=0||u>e?(s&&(clearTimeout(s),s=void 0),n=c,t.apply(void 0,r)):s||!1===a||(s=window.setTimeout((function(){n=!1===i?0:Date.now(),s=void 0,t.apply(void 0,r)}),u))};return o.cancel=function(){clearTimeout(s),s=void 0,n=0},o}},73826:function(t,e,s){s.d(e,{f:function(){return f}});var i=s(40039),a=s(33368),n=s(71650),o=s(82390),r=s(69205),l=s(70906),c=s(91808),u=s(34541),d=s(47838),_=(s(97393),s(46798),s(47084),s(51358),s(98490),s(40271),s(60163),s(9849),s(13526),s(95260)),f=function(t){var e=(0,c.Z)(null,(function(t,e){var s=function(e){(0,r.Z)(i,e);var s=(0,l.Z)(i);function i(){var e;(0,n.Z)(this,i);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return e=s.call.apply(s,[this].concat(r)),t((0,o.Z)(e)),e}return(0,a.Z)(i)}(e);return{F:s,d:[{kind:"field",decorators:[(0,_.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,u.Z)((0,d.Z)(s.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,u.Z)((0,d.Z)(s.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){var t=this.__unsubs.pop();t instanceof Promise?t.then((function(t){return t()})):t()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(t){if((0,u.Z)((0,d.Z)(s.prototype),"updated",this).call(this,t),t.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps){var e,a=(0,i.Z)(t.keys());try{for(a.s();!(e=a.n()).done;){var n=e.value;if(this.hassSubscribeRequiredHostProps.includes(n))return void this.__checkSubscribed()}}catch(o){a.e(o)}finally{a.f()}}}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var t,e=this;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(t=this.hassSubscribeRequiredHostProps)&&void 0!==t&&t.some((function(t){return void 0===e[t]}))||(this.__unsubs=this.hassSubscribe())}}]}}),t);return e}},4643:function(t,e,s){s.r(e);var i,a,n,o,r,l,c,u,d,_,f=s(99312),h=s(68990),p=s(81043),v=s(40039),b=s(88962),k=s(33368),y=s(71650),m=s(82390),x=s(69205),g=s(70906),w=s(91808),Z=(s(97393),s(51358),s(46798),s(78399),s(5239),s(56086),s(47884),s(81912),s(64584),s(41483),s(12367),s(9454),s(98490),s(46349),s(70320),s(85717),s(22859),s(91989),s(47084),s(87438),s(9849),s(22890),s(50289),s(94167),s(65974),s(36513),s(37313),s(47704),s(68144)),S=s(95260),z=s(14516),C=s(47181),P=s(91741),T=(s(37168),s(74186)),j=s(38014),D=s(26765),R=s(73826),L=s(11654),A=function(){return Promise.all([s.e(28597),s.e(3762),s.e(66023),s.e(49412),s.e(23254),s.e(92488),s.e(78113),s.e(29722),s.e(68331),s.e(12545),s.e(14510),s.e(139)]).then(s.bind(s,211))},O=function(){return Promise.all([s.e(28597),s.e(70632),s.e(5553)]).then(s.bind(s,24054))},E=s(87744),q=s(27322),B={no_state:0,entity_no_longer_recorded:1,entity_not_recorded:1,unsupported_state_class:2,units_changed:3};(0,w.Z)([(0,S.Mo)("developer-tools-statistics")],(function(t,e){var s,w=function(e){(0,x.Z)(i,e);var s=(0,g.Z)(i);function i(){var e;(0,y.Z)(this,i);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return e=s.call.apply(s,[this].concat(n)),t((0,m.Z)(e)),e}return(0,k.Z)(i)}(e);return{F:w,d:[{kind:"field",decorators:[(0,S.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,S.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,S.SB)()],key:"_data",value:function(){return[]}},{kind:"field",key:"_disabledEntities",value:function(){return new Set}},{kind:"field",key:"_deletedStatistics",value:function(){return new Set}},{kind:"method",key:"firstUpdated",value:function(){this._validateStatistics()}},{kind:"field",key:"_displayData",value:function(){return(0,z.Z)((function(t,e){return t.map((function(t){var s;return Object.assign(Object.assign({},t),{},{displayName:t.state?(0,P.C)(t.state):t.name||t.statistic_id,issues_string:null===(s=t.issues)||void 0===s?void 0:s.map((function(t){return e("ui.panel.developer-tools.tabs.statistics.issues.".concat(t.type),t.data)||t.type})).join(" ")})}))}))}},{kind:"field",key:"_columns",value:function(){var t=this;return(0,z.Z)((function(e){return{displayName:{title:e("ui.panel.developer-tools.tabs.statistics.data_table.name"),sortable:!0,filterable:!0,grows:!0},statistic_id:{title:e("ui.panel.developer-tools.tabs.statistics.data_table.statistic_id"),sortable:!0,filterable:!0,hidden:t.narrow,width:"20%"},statistics_unit_of_measurement:{title:e("ui.panel.developer-tools.tabs.statistics.data_table.statistics_unit"),sortable:!0,filterable:!0,width:"10%",forceLTR:!0},source:{title:e("ui.panel.developer-tools.tabs.statistics.data_table.source"),sortable:!0,filterable:!0,width:"10%"},issues_string:{title:e("ui.panel.developer-tools.tabs.statistics.data_table.issue"),sortable:!0,filterable:!0,direction:"asc",width:"30%",template:function(t){var s;return(0,Z.dy)(i||(i=(0,b.Z)(["",""])),null!==(s=t.issues_string)&&void 0!==s?s:e("ui.panel.developer-tools.tabs.statistics.no_issue"))}},fix:{title:"",label:t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.fix"),template:function(s){return(0,Z.dy)(a||(a=(0,b.Z)(["",""])),s.issues?(0,Z.dy)(n||(n=(0,b.Z)(['<mwc-button @click="','" .data="','"> '," </mwc-button>"])),t._fixIssue,s.issues,e("ui.panel.developer-tools.tabs.statistics.fix_issue.fix")):"—")},width:"113px"},actions:{title:"",label:e("ui.panel.developer-tools.tabs.statistics.adjust_sum"),type:"icon-button",template:function(s){return s.has_sum?(0,Z.dy)(o||(o=(0,b.Z)([' <ha-icon-button .label="','" .path="','" .statistic="','" @click="','"></ha-icon-button> '])),e("ui.panel.developer-tools.tabs.statistics.adjust_sum"),"M22,13V22H2V19L22,13M21.68,7.06L16.86,4.46L17.7,7.24L7.58,10.24C6.63,8.95 4.82,8.67 3.53,9.62C2.24,10.57 1.96,12.38 2.91,13.67C3.85,14.97 5.67,15.24 6.96,14.29C7.67,13.78 8.1,12.97 8.14,12.09L18.26,9.09L19.1,11.87L21.68,7.06Z",s,t._showStatisticsAdjustSumDialog):""}}}}))}},{kind:"method",key:"render",value:function(){return(0,Z.dy)(r||(r=(0,b.Z)([' <ha-data-table .hass="','" .columns="','" .data="','" noDataText="No statistics" id="statistic_id" clickable @row-click="','" .dir="','"></ha-data-table> '])),this.hass,this._columns(this.hass.localize),this._displayData(this._data,this.hass.localize),this._rowClicked,(0,E.Zu)(this.hass))}},{kind:"method",key:"_showStatisticsAdjustSumDialog",value:function(t){var e,s;t.stopPropagation(),e=this,s={statistic:t.currentTarget.statistic},(0,C.B)(e,"show-dialog",{dialogTag:"dialog-statistics-adjust-sum",dialogImport:A,dialogParams:s})}},{kind:"method",key:"_rowClicked",value:function(t){var e=t.detail.id;e in this.hass.states&&(0,C.B)(this,"hass-more-info",{entityId:e})}},{kind:"method",key:"hassSubscribe",value:function(){var t=this;return[(0,T.LM)(this.hass.connection,(function(e){var s,i=new Set,a=(0,v.Z)(e);try{for(a.s();!(s=a.n()).done;){var n=s.value;n.disabled_by&&i.add(n.entity_id)}}catch(o){a.e(o)}finally{a.f()}i!==t._disabledEntities&&(t._disabledEntities=i,t._validateStatistics())}))]}},{kind:"method",key:"_validateStatistics",value:(s=(0,p.Z)((0,f.Z)().mark((function t(){var e,s,i,a,n,o=this;return(0,f.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([(0,j.uR)(this.hass),(0,j.h_)(this.hass)]);case 2:e=t.sent,s=(0,h.Z)(e,2),i=s[0],a=s[1],n=new Set,this._data=i.filter((function(t){return!o._disabledEntities.has(t.statistic_id)&&!o._deletedStatistics.has(t.statistic_id)})).map((function(t){return n.add(t.statistic_id),Object.assign(Object.assign({},t),{},{state:o.hass.states[t.statistic_id],issues:a[t.statistic_id]})})),Object.keys(a).forEach((function(t){n.has(t)||o._disabledEntities.has(t)||o._deletedStatistics.has(t)||o._data.push({statistic_id:t,statistics_unit_of_measurement:"",source:"",state:o.hass.states[t],issues:a[t],has_mean:!1,has_sum:!1,unit_class:null})}));case 9:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)})},{kind:"field",key:"_fixIssue",value:function(){var t=this;return function(e){var s,i,a,n,o=e.currentTarget.data.sort((function(t,e){var s,i;return(null!==(s=B[t.type])&&void 0!==s?s:99)-(null!==(i=B[e.type])&&void 0!==i?i:99)}))[0];switch(o.type){case"no_state":(0,D.showConfirmationDialog)(t,{title:t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.no_state.title"),text:(0,Z.dy)(l||(l=(0,b.Z)(["","<br><br>",""])),t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.no_state.info_text_1"),t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.no_state.info_text_2",{statistic_id:o.data.statistic_id})),confirmText:t.hass.localize("ui.common.delete"),confirm:(n=(0,p.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.hN)(t.hass,[o.data.statistic_id]);case 2:t._deletedStatistics.add(o.data.statistic_id),t._validateStatistics();case 4:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})});break;case"entity_not_recorded":(0,D.showAlertDialog)(t,{title:t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.entity_not_recorded.title"),text:(0,Z.dy)(c||(c=(0,b.Z)(["","<br><br>",'<br><br> <a href="','" target="_blank" rel="noreferrer noopener"> ',"</a>"])),t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.entity_not_recorded.info_text_1"),t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.entity_not_recorded.info_text_2"),(0,q.R)(t.hass,"/integrations/recorder/#configure-filter"),t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.entity_not_recorded.info_text_3_link"))});break;case"entity_no_longer_recorded":(0,D.showAlertDialog)(t,{title:t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.entity_no_longer_recorded.title"),text:(0,Z.dy)(u||(u=(0,b.Z)([""," ",' <a href="','" target="_blank" rel="noreferrer noopener"> ',"</a>"])),t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.entity_no_longer_recorded.info_text_1"),t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.entity_no_longer_recorded.info_text_2"),(0,q.R)(t.hass,"/integrations/recorder/#configure-filter"),t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.entity_no_longer_recorded.info_text_3_link"))});break;case"unsupported_state_class":(0,D.showConfirmationDialog)(t,{title:t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.unsupported_state_class.title"),text:(0,Z.dy)(d||(d=(0,b.Z)(["","<br><br> "," <ul> <li> "," </li> <li> ",' <a href="https://developers.home-assistant.io/docs/core/entity/sensor/#long-term-statistics" target="_blank" rel="noreferrer noopener"> ',"</a> </li> <li> "," </li> </ul> ",""])),t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.unsupported_state_class.info_text_1",{state_class:o.data.state_class}),t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.unsupported_state_class.info_text_2"),t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.unsupported_state_class.info_text_3"),t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.unsupported_state_class.info_text_4"),t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.unsupported_state_class.info_text_4_link"),t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.unsupported_state_class.info_text_5"),t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.unsupported_state_class.info_text_6",{statistic_id:o.data.statistic_id})),confirmText:t.hass.localize("ui.common.delete"),confirm:(a=(0,p.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.hN)(t.hass,[o.data.statistic_id]);case 2:t._deletedStatistics.add(o.data.statistic_id),t._validateStatistics();case 4:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})});break;case"units_changed":s=t,i={issue:o,fixedCallback:function(){t._validateStatistics()}},(0,C.B)(s,"show-dialog",{dialogTag:"dialog-statistics-fix-units-changed",dialogImport:O,dialogParams:i});break;default:(0,D.showAlertDialog)(t,{title:t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.no_support.title"),text:t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.no_support.info_text_1")})}}}},{kind:"get",static:!0,key:"styles",value:function(){return[L.Qx,(0,Z.iv)(_||(_=(0,b.Z)([".content{padding:16px;padding:max(16px,env(safe-area-inset-top)) max(16px,env(safe-area-inset-right)) max(16px,env(safe-area-inset-bottom)) max(16px,env(safe-area-inset-left))}th{padding:0 8px;text-align:left}:host([rtl]) th{text-align:right}tr{vertical-align:top;direction:ltr}tr:nth-child(odd){background-color:var(--table-row-background-color,#fff)}tr:nth-child(2n){background-color:var(--table-row-alternative-background-color,#eee)}td{padding:4px;min-width:200px;word-break:break-word}"])))]}}]}}),(0,R.f)(Z.oi))},44281:function(t,e,s){s.d(e,{j:function(){return n}});var i=s(99312),a=s(81043),n=(s(51358),s(46798),s(47084),s(5239),s(98490),function(){var t=(0,a.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,new ResizeObserver((function(){})),t.next=9;break;case 4:return t.prev=4,t.t0=t.catch(0),t.next=8,Promise.resolve().then(s.bind(s,5442));case 8:window.ResizeObserver=t.sent.default;case 9:case"end":return t.stop()}}),t,null,[[0,4]])})));return function(){return t.apply(this,arguments)}}())},27322:function(t,e,s){s.d(e,{R:function(){return i}});s(97393),s(40271),s(60163);var i=function(t,e){return"https://".concat(t.config.version.includes("b")?"rc":t.config.version.includes("dev")?"next":"www",".home-assistant.io").concat(e)}}}]);
//# sourceMappingURL=96339.4XsJp17xolc.js.map