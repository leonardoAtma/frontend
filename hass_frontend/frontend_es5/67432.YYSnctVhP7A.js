"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[67432],{26410:function(e,n,t){t.d(n,{Bt:function(){return r},T8:function(){return s}});t(40271),t(56308);var o=t(22075),a=t(66477),i=(t(4631),["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]),r=function(e){return e.first_weekday===a.FS.language?"weekInfo"in Intl.Locale.prototype?new Intl.Locale(e.language).weekInfo.firstDay%7:(0,o.L)(e.language)%7:i.includes(e.first_weekday)?i.indexOf(e.first_weekday):1},s=function(e){var n=r(e);return i[n]}},80596:function(e,n,t){t.d(n,{G:function(){return d}});var o=t(14516),a=(t(4631),t(85717),t(24112)),i=t(59401),r=t(35040),s=t(26410);var c={second:45,minute:45,hour:22,day:5,week:4,month:11},l=(0,o.Z)((function(e){return new Intl.RelativeTimeFormat(e.language,{numeric:"auto"})})),d=function(e,n,t){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],d=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),t=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},l=Object.assign(Object.assign({},c),o||{}),d=(+e-+n)/1e3;if(Math.abs(d)<l.second)return{value:Math.round(d),unit:"second"};var u=d/60;if(Math.abs(u)<l.minute)return{value:Math.round(u),unit:"minute"};var p=d/3600;if(Math.abs(p)<l.hour)return{value:Math.round(p),unit:"hour"};var f=new Date(e),m=new Date(n);f.setHours(0,0,0,0),m.setHours(0,0,0,0);var h=(0,a.Z)(f,m);if(0===h)return{value:Math.round(p),unit:"hour"};if(Math.abs(h)<l.day)return{value:h,unit:"day"};var g=(0,s.Bt)(t),w=(0,i.Z)(f,{weekStartsOn:g}),_=(0,i.Z)(m,{weekStartsOn:g}),v=(0,r.Z)(w,_);if(0===v)return{value:h,unit:"day"};if(Math.abs(v)<l.week)return{value:v,unit:"week"};var y=f.getFullYear()-m.getFullYear(),k=12*y+f.getMonth()-m.getMonth();return 0===k?{value:v,unit:"week"}:Math.abs(k)<l.month||0===y?{value:k,unit:"month"}:{value:Math.round(y),unit:"year"}}(e,t,n);return o?l(n).format(d.value,d.unit):Intl.NumberFormat(n.language,{style:"unit",unit:d.unit,unitDisplay:"long"}).format(Math.abs(d.value))}},21780:function(e,n,t){t.d(n,{f:function(){return o}});t(17692);var o=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},52871:function(e,n,t){t.d(n,{w:function(){return i}});t(51358),t(46798),t(47084),t(5239),t(98490),t(85717);var o=t(47181),a=function(){return Promise.all([t.e(42850),t.e(46992),t.e(79071),t.e(3298),t.e(28597),t.e(78133),t.e(50731),t.e(66023),t.e(33829),t.e(52154),t.e(51857),t.e(40163),t.e(68101),t.e(49338)]).then(t.bind(t,59159))},i=function(e,n,t){(0,o.B)(e,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:a,dialogParams:Object.assign(Object.assign({},n),{},{flowConfig:t,dialogParentElement:e})})}},67432:function(e,n,t){var o,a,i,r,s,c,l,d,u,p,f,m=t(88962),h=t(33368),g=t(71650),w=t(82390),_=t(69205),v=t(70906),y=t(91808),k=(t(97393),t(76843),t(46349),t(70320),t(61641),t(68144)),b=t(95260),z=t(80596),x=t(21780),Z=(t(9381),t(22098),t(73366),t(52039),t(5986)),F=t(11254),S=t(99312),M=t(68990),D=t(81043),C=(t(51358),t(46798),t(47084),t(5239),t(98490),t(22859),t(45339)),I=t(52871),B=t(47181),O=function(){return Promise.all([t.e(3298),t.e(28597),t.e(14921)]).then(t.bind(t,14921))};(0,y.Z)([(0,b.Mo)("ha-config-repairs")],(function(e,n){var t=function(n){(0,_.Z)(o,n);var t=(0,v.Z)(o);function o(){var n;(0,g.Z)(this,o);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return n=t.call.apply(t,[this].concat(i)),e((0,w.Z)(n)),n}return(0,h.Z)(o)}(n);return{F:t,d:[{kind:"field",decorators:[(0,b.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,b.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,b.Cb)({attribute:!1})],key:"repairsIssues",value:void 0},{kind:"field",decorators:[(0,b.Cb)({type:Number})],key:"total",value:void 0},{kind:"method",key:"render",value:function(){var e,n=this;if(null===(e=this.repairsIssues)||void 0===e||!e.length)return k.Ld;var t=this.repairsIssues;return(0,k.dy)(l||(l=(0,m.Z)([' <div class="title"> '," </div> <mwc-list> "," </mwc-list> "])),this.hass.localize("ui.panel.config.repairs.title",{count:this.total||this.repairsIssues.length}),t.map((function(e){var t;return(0,k.dy)(d||(d=(0,m.Z)([' <ha-list-item twoline graphic="medium" .hasMeta="','" .issue="','" class="','" @click="','"> <img alt="','" loading="lazy" src="','" .title="','" crossorigin="anonymous" referrerpolicy="no-referrer" slot="graphic"> <span>','</span> <span slot="secondary" class="secondary"> '," "," "," "," </span> "," </ha-list-item> "])),!n.narrow,e,e.ignored?"ignored":"",n._openShowMoreDialog,(0,Z.Lh)(n.hass.localize,e.domain),(0,F.X1)({domain:e.issue_domain||e.domain,type:"icon",useFallback:!0,darkOptimized:null===(t=n.hass.themes)||void 0===t?void 0:t.darkMode}),(0,Z.Lh)(n.hass.localize,e.domain),n.hass.localize("component.".concat(e.domain,".issues.").concat(e.translation_key||e.issue_id,".title"),e.translation_placeholders||{}),"critical"===e.severity||"error"===e.severity?(0,k.dy)(u||(u=(0,m.Z)(['<span class="error">',"</span>"])),n.hass.localize("ui.panel.config.repairs.".concat(e.severity))):"","critical"!==e.severity&&"error"!==e.severity||!e.created?"":" - ",e.created?(0,x.f)((0,z.G)(new Date(e.created),n.hass.locale)):"",e.ignored?" - ".concat(n.hass.localize("ui.panel.config.repairs.dialog.ignored_in_version_short",{version:e.dismissed_version})):"",n.narrow?"":(0,k.dy)(p||(p=(0,m.Z)(['<ha-icon-next slot="meta"></ha-icon-next>']))))})))}},{kind:"method",key:"_openShowMoreDialog",value:function(e){var n,t,l=e.currentTarget.issue;l.is_fixable?function(e,n,t){return(0,I.w)(e,{startFlowHandler:n.domain,domain:n.domain,dialogClosedCallback:t},{flowType:"repair_flow",loadDevicesAndAreas:!1,createFlow:(d=(0,D.Z)((0,S.Z)().mark((function e(t,o){var a,i,r;return(0,S.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([(0,C.F$)(t,o,n.issue_id),t.loadBackendTranslation("issues",n.domain),t.loadBackendTranslation("selector",n.domain)]);case 2:return a=e.sent,i=(0,M.Z)(a,1),r=i[0],e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)}))),function(e,n){return d.apply(this,arguments)}),fetchFlow:(l=(0,D.Z)((0,S.Z)().mark((function e(t,o){var a,i,r;return(0,S.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([(0,C.iU)(t,o),t.loadBackendTranslation("issues",n.domain),t.loadBackendTranslation("selector",n.domain)]);case 2:return a=e.sent,i=(0,M.Z)(a,1),r=i[0],e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)}))),function(e,n){return l.apply(this,arguments)}),handleFlowStep:C.eJ,deleteFlow:C.EB,renderAbortDescription:function(e,t){var a=e.localize("component.".concat(n.domain,".issues.").concat(n.translation_key||n.issue_id,".fix_flow.abort.").concat(t.reason),t.description_placeholders);return a?(0,k.dy)(o||(o=(0,m.Z)([' <ha-markdown breaks allowsvg .content="','"></ha-markdown> '])),a):""},renderShowFormStepHeader:function(e,t){return e.localize("component.".concat(n.domain,".issues.").concat(n.translation_key||n.issue_id,".fix_flow.step.").concat(t.step_id,".title"),t.description_placeholders)||e.localize("ui.dialogs.repair_flow.form.header")},renderShowFormStepDescription:function(e,t){var o=e.localize("component.".concat(n.domain,".issues.").concat(n.translation_key||n.issue_id,".fix_flow.step.").concat(t.step_id,".description"),t.description_placeholders);return o?(0,k.dy)(a||(a=(0,m.Z)([' <ha-markdown allowsvg breaks .content="','"></ha-markdown> '])),o):""},renderShowFormStepFieldLabel:function(e,t,o){return e.localize("component.".concat(n.domain,".issues.").concat(n.translation_key||n.issue_id,".fix_flow.step.").concat(t.step_id,".data.").concat(o.name))},renderShowFormStepFieldHelper:function(e,t,o){var a=e.localize("component.".concat(n.domain,".issues.").concat(n.translation_key||n.issue_id,".fix_flow.step.").concat(t.step_id,".data_description.").concat(o.name),t.description_placeholders);return a?(0,k.dy)(i||(i=(0,m.Z)(['<ha-markdown breaks .content="','"></ha-markdown>'])),a):""},renderShowFormStepFieldError:function(e,t,o){return e.localize("component.".concat(n.domain,".issues.").concat(n.translation_key||n.issue_id,".fix_flow.error.").concat(o),t.description_placeholders)},renderShowFormStepFieldLocalizeValue:function(e,t,o){return e.localize("component.".concat(n.domain,".selector.").concat(o))},renderShowFormStepSubmitButton:function(e,t){return e.localize("component.".concat(n.domain,".issues.").concat(n.translation_key||n.issue_id,".fix_flow.step.").concat(t.step_id,".submit"))||e.localize("ui.panel.config.integrations.config_flow.".concat(!1===t.last_step?"next":"submit"))},renderExternalStepHeader:function(e,n){return""},renderExternalStepDescription:function(e,n){return""},renderCreateEntryDescription:function(e,n){return(0,k.dy)(r||(r=(0,m.Z)([" <p>","</p> "])),e.localize("ui.dialogs.repair_flow.success.description"))},renderShowFormProgressHeader:function(e,t){return e.localize("component.".concat(n.domain,".issues.step.").concat(n.translation_key||n.issue_id,".fix_flow.").concat(t.step_id,".title"))||e.localize("component.".concat(n.domain,".title"))},renderShowFormProgressDescription:function(e,t){var o=e.localize("component.".concat(n.domain,".issues.").concat(n.translation_key||n.issue_id,".fix_flow.progress.").concat(t.progress_action),t.description_placeholders);return o?(0,k.dy)(s||(s=(0,m.Z)([' <ha-markdown allowsvg breaks .content="','"></ha-markdown> '])),o):""},renderMenuHeader:function(e,t){return e.localize("component.".concat(n.domain,".issues.").concat(n.translation_key||n.issue_id,".fix_flow.step.").concat(t.step_id,".title"))||e.localize("component.".concat(n.domain,".title"))},renderMenuDescription:function(e,t){var o=e.localize("component.".concat(n.domain,".issues.").concat(n.translation_key||n.issue_id,".fix_flow.step.").concat(t.step_id,".description"),t.description_placeholders);return o?(0,k.dy)(c||(c=(0,m.Z)([' <ha-markdown allowsvg breaks .content="','"></ha-markdown> '])),o):""},renderMenuOption:function(e,t,o){return e.localize("component.".concat(n.domain,".issues.").concat(n.translation_key||n.issue_id,".fix_flow.step.").concat(t.step_id,".menu_options.").concat(o),t.description_placeholders)},renderLoadingDescription:function(e,t){return e.localize("component.".concat(n.domain,".issues.").concat(n.translation_key||n.issue_id,".fix_flow.loading"))||("loading_flow"===t||"loading_step"===t?e.localize("ui.dialogs.repair_flow.loading.".concat(t),{integration:(0,Z.Lh)(e.localize,n.domain)}):"")}});var l,d}(this,l):(n=this,t={issue:l},(0,B.B)(n,"show-dialog",{dialogTag:"dialog-repairs-issue",dialogImport:O,dialogParams:t}))}},{kind:"field",static:!0,key:"styles",value:function(){return(0,k.iv)(f||(f=(0,m.Z)([":host{--mdc-list-vertical-padding:0}.title{font-size:16px;padding:16px;padding-bottom:0}.ignored{opacity:var(--light-secondary-opacity)}ha-list-item{--mdc-list-item-graphic-size:40px}button.show-more{color:var(--primary-color);text-align:left;cursor:pointer;background:0 0;border-width:initial;border-style:none;border-color:initial;border-image:initial;padding:16px;font:inherit}button.show-more:focus{outline:0;text-decoration:underline}ha-list-item{cursor:pointer;font-size:16px}.error{color:var(--error-color)}"])))}}]}}),k.oi)},4631:function(e,n,t){t.r(n);t(7151),t(33633),t(25534),t(64827),t(23044),t(1437),t(87520),t(42661),t(78337),t(87065),t(6042),t(19440),t(50897),t(30056),t(12679)},11254:function(e,n,t){t.d(n,{RU:function(){return a},X1:function(){return o},u4:function(){return i},zC:function(){return r}});t(97393),t(88640);var o=function(e){return"https://brands.home-assistant.io/".concat(e.brand?"brands/":"").concat(e.useFallback?"_/":"").concat(e.domain,"/").concat(e.darkOptimized?"dark_":"").concat(e.type,".png")},a=function(e){return"https://brands.home-assistant.io/hardware/".concat(e.category,"/").concat(e.darkOptimized?"dark_":"").concat(e.manufacturer).concat(e.model?"_".concat(e.model):"",".png")},i=function(e){return e.split("/")[4]},r=function(e){return e.startsWith("https://brands.home-assistant.io/")}}}]);
//# sourceMappingURL=67432.YYSnctVhP7A.js.map