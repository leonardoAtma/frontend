"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[52777,9381,99282],{9381:function(t,e,n){n.r(e);var r,o,i,a,s=n(93359),u=n(88962),c=n(33368),l=n(71650),d=n(82390),p=n(69205),h=n(70906),f=n(91808),v=(n(97393),n(68144)),m=n(95260),g=n(83448),k=n(47181),y=(n(10983),n(52039),{info:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",warning:"M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16",error:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",success:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"});(0,f.Z)([(0,m.Mo)("ha-alert")],(function(t,e){var n=function(e){(0,p.Z)(r,e);var n=(0,h.Z)(r);function r(){var e;(0,l.Z)(this,r);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=n.call.apply(n,[this].concat(i)),t((0,d.Z)(e)),e}return(0,c.Z)(r)}(e);return{F:n,d:[{kind:"field",decorators:[(0,m.Cb)()],key:"title",value:function(){return""}},{kind:"field",decorators:[(0,m.Cb)({attribute:"alert-type"})],key:"alertType",value:function(){return"info"}},{kind:"field",decorators:[(0,m.Cb)({type:Boolean})],key:"dismissable",value:function(){return!1}},{kind:"method",key:"render",value:function(){return(0,v.dy)(r||(r=(0,u.Z)([' <div class="issue-type ','" role="alert"> <div class="icon ','"> <slot name="icon"> <ha-svg-icon .path="','"></ha-svg-icon> </slot> </div> <div class="content"> <div class="main-content"> ',' <slot></slot> </div> <div class="action"> <slot name="action"> '," </slot> </div> </div> </div> "])),(0,g.$)((0,s.Z)({},this.alertType,!0)),this.title?"":"no-title",y[this.alertType],this.title?(0,v.dy)(o||(o=(0,u.Z)(['<div class="title">',"</div>"])),this.title):"",this.dismissable?(0,v.dy)(i||(i=(0,u.Z)(['<ha-icon-button @click="','" label="Dismiss alert" .path="','"></ha-icon-button>'])),this._dismiss_clicked,"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"):"")}},{kind:"method",key:"_dismiss_clicked",value:function(){(0,k.B)(this,"alert-dismissed-clicked")}},{kind:"field",static:!0,key:"styles",value:function(){return(0,v.iv)(a||(a=(0,u.Z)(['.issue-type{position:relative;padding:8px;display:flex}.issue-type::after{position:absolute;top:0;right:0;bottom:0;left:0;opacity:.12;pointer-events:none;content:"";border-radius:4px}.icon{z-index:1}.icon.no-title{align-self:center}.content{display:flex;justify-content:space-between;align-items:center;width:100%;text-align:var(--float-start)}.action{z-index:1;width:min-content;--mdc-theme-primary:var(--primary-text-color)}.main-content{overflow-wrap:anywhere;word-break:break-word;margin-left:8px;margin-right:0;margin-inline-start:8px;margin-inline-end:0;direction:var(--direction)}.title{margin-top:2px;font-weight:700}.action ha-icon-button,.action mwc-button{--mdc-theme-primary:var(--primary-text-color);--mdc-icon-button-size:36px}.issue-type.info>.icon{color:var(--info-color)}.issue-type.info::after{background-color:var(--info-color)}.issue-type.warning>.icon{color:var(--warning-color)}.issue-type.warning::after{background-color:var(--warning-color)}.issue-type.error>.icon{color:var(--error-color)}.issue-type.error::after{background-color:var(--error-color)}.issue-type.success>.icon{color:var(--success-color)}.issue-type.success::after{background-color:var(--success-color)}'])))}}]}}),v.oi)},12373:function(t,e,n){var r,o,i=n(88962),a=n(33368),s=n(71650),u=n(82390),c=n(69205),l=n(70906),d=n(91808),p=(n(97393),n(76843),n(68144)),h=n(95260),f=n(88027);(0,d.Z)([(0,h.Mo)("ha-bar")],(function(t,e){var n=function(e){(0,c.Z)(r,e);var n=(0,l.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=n.call.apply(n,[this].concat(i)),t((0,u.Z)(e)),e}return(0,a.Z)(r)}(e);return{F:n,d:[{kind:"field",decorators:[(0,h.Cb)({type:Number})],key:"min",value:function(){return 0}},{kind:"field",decorators:[(0,h.Cb)({type:Number})],key:"max",value:function(){return 100}},{kind:"field",decorators:[(0,h.Cb)({type:Number})],key:"value",value:void 0},{kind:"method",key:"render",value:function(){var t=(0,f.IU)((0,f.Ff)((0,f.Fv)(this.value,this.min,this.max),this.min,this.max));return(0,p.YP)(r||(r=(0,i.Z)([' <svg> <g> <rect/> <rect width="','%"/> </g> </svg> '])),t)}},{kind:"get",static:!0,key:"styles",value:function(){return(0,p.iv)(o||(o=(0,i.Z)(["rect{height:100%}rect:first-child{width:100%;fill:var(--ha-bar-background-color,var(--secondary-background-color))}rect:last-child{fill:var(--ha-bar-primary-color,var(--primary-color))}svg{border-radius:var(--ha-bar-border-radius,4px);height:12px;width:100%}"])))}}]}}),p.oi)},81545:function(t,e,n){var r,o,i=n(88962),a=n(33368),s=n(71650),u=n(82390),c=n(69205),l=n(70906),d=n(91808),p=n(34541),h=n(47838),f=(n(97393),n(76843),n(73855),n(46798),n(9849),n(50289),n(94167),n(80641),n(65666),n(68144)),v=n(95260),m=n(30418),g=n(74265);(0,d.Z)([(0,v.Mo)("ha-button-menu")],(function(t,e){var n=function(e){(0,c.Z)(r,e);var n=(0,l.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=n.call.apply(n,[this].concat(i)),t((0,u.Z)(e)),e}return(0,a.Z)(r)}(e);return{F:n,d:[{kind:"field",key:g.gA,value:void 0},{kind:"field",decorators:[(0,v.Cb)()],key:"corner",value:function(){return"BOTTOM_START"}},{kind:"field",decorators:[(0,v.Cb)()],key:"menuCorner",value:function(){return"START"}},{kind:"field",decorators:[(0,v.Cb)({type:Number})],key:"x",value:function(){return null}},{kind:"field",decorators:[(0,v.Cb)({type:Number})],key:"y",value:function(){return null}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"multi",value:function(){return!1}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"activatable",value:function(){return!1}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"fixed",value:function(){return!1}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean,attribute:"no-anchor"})],key:"noAnchor",value:function(){return!1}},{kind:"field",decorators:[(0,v.IO)("mwc-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){var t;return null===(t=this._menu)||void 0===t?void 0:t.items}},{kind:"get",key:"selected",value:function(){var t;return null===(t=this._menu)||void 0===t?void 0:t.selected}},{kind:"method",key:"focus",value:function(){var t,e;null!==(t=this._menu)&&void 0!==t&&t.open?this._menu.focusItemAtIndex(0):null===(e=this._triggerButton)||void 0===e||e.focus()}},{kind:"method",key:"render",value:function(){return(0,f.dy)(r||(r=(0,i.Z)([' <div @click="','"> <slot name="trigger" @slotchange="','"></slot> </div> <mwc-menu .corner="','" .menuCorner="','" .fixed="','" .multi="','" .activatable="','" .y="','" .x="','"> <slot></slot> </mwc-menu> '])),this._handleClick,this._setTriggerAria,this.corner,this.menuCorner,this.fixed,this.multi,this.activatable,this.y,this.x)}},{kind:"method",key:"firstUpdated",value:function(t){var e=this;(0,p.Z)((0,h.Z)(n.prototype),"firstUpdated",this).call(this,t),"rtl"===m.E.document.dir&&this.updateComplete.then((function(){e.querySelectorAll("mwc-list-item").forEach((function(t){var e=document.createElement("style");e.innerHTML="span.material-icons:first-of-type { margin-left: var(--mdc-list-item-graphic-margin, 32px) !important; margin-right: 0px !important;}",t.shadowRoot.appendChild(e)}))}))}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchor=this.noAnchor?null:this,this._menu.show())}},{kind:"get",key:"_triggerButton",value:function(){return this.querySelector('ha-icon-button[slot="trigger"], mwc-button[slot="trigger"]')}},{kind:"method",key:"_setTriggerAria",value:function(){this._triggerButton&&(this._triggerButton.ariaHasPopup="menu")}},{kind:"get",static:!0,key:"styles",value:function(){return(0,f.iv)(o||(o=(0,i.Z)([":host{display:inline-block;position:relative}::slotted([disabled]){color:var(--disabled-text-color)}"])))}}]}}),f.oi)},99282:function(t,e,n){n.r(e),n.d(e,{HaIconNext:function(){return p}});var r=n(33368),o=n(71650),i=n(82390),a=n(69205),s=n(70906),u=n(91808),c=(n(97393),n(95260)),l=n(30418),d=n(52039),p=(0,u.Z)([(0,c.Mo)("ha-icon-next")],(function(t,e){var n=function(e){(0,a.Z)(u,e);var n=(0,s.Z)(u);function u(){var e;(0,o.Z)(this,u);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return e=n.call.apply(n,[this].concat(a)),t((0,i.Z)(e)),e}return(0,r.Z)(u)}(e);return{F:n,d:[{kind:"field",decorators:[(0,c.Cb)()],key:"path",value:function(){return"rtl"===l.E.document.dir?"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z":"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}}]}}),d.HaSvgIcon)},2130:function(t,e,n){var r,o,i=n(88962),a=n(33368),s=n(71650),u=n(82390),c=n(69205),l=n(70906),d=n(91808),p=(n(97393),n(76843),n(68144)),h=n(95260),f=n(83448),v=n(88027);n(12373),n(14089),(0,d.Z)([(0,h.Mo)("ha-metric")],(function(t,e){var n=function(e){(0,c.Z)(r,e);var n=(0,l.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=n.call.apply(n,[this].concat(i)),t((0,u.Z)(e)),e}return(0,a.Z)(r)}(e);return{F:n,d:[{kind:"field",decorators:[(0,h.Cb)({type:Number})],key:"value",value:void 0},{kind:"field",decorators:[(0,h.Cb)({type:String})],key:"heading",value:void 0},{kind:"field",decorators:[(0,h.Cb)({type:String})],key:"tooltip",value:void 0},{kind:"method",key:"render",value:function(){var t,e=(0,v.IU)(this.value);return(0,p.dy)(r||(r=(0,i.Z)([' <ha-settings-row> <span slot="heading"> ',' </span> <div slot="description" .title="','"> <span class="value"> ',' % </span> <ha-bar class="','" .value="','"></ha-bar> </div> </ha-settings-row> '])),this.heading,null!==(t=this.tooltip)&&void 0!==t?t:"",e,(0,f.$)({"target-warning":e>50,"target-critical":e>85}),this.value)}},{kind:"get",static:!0,key:"styles",value:function(){return(0,p.iv)(o||(o=(0,i.Z)(["ha-settings-row{padding:0;height:54px;width:100%}ha-settings-row>div[slot=description]{white-space:normal;color:var(--secondary-text-color);display:flex;justify-content:space-between}ha-bar{--ha-bar-primary-color:var(\n          --metric-bar-ok-color,\n          var(--success-color)\n        )}.target-warning{--ha-bar-primary-color:var(\n          --metric-bar-warning-color,\n          var(--warning-color)\n        )}.target-critical{--ha-bar-primary-color:var(\n          --metric-bar-critical-color,\n          var(--error-color)\n        )}.value{width:48px;padding-right:4px;flex-shrink:0}"])))}}]}}),p.oi)},41682:function(t,e,n){n.d(e,{js:function(){return u},rY:function(){return s},yd:function(){return d},yz:function(){return l}});var r=n(99312),o=n(81043),i=n(76775),a=(n(51358),n(46798),n(78399),n(5239),n(56086),n(47884),n(81912),n(64584),n(41483),n(12367),n(9454),n(98490),n(40271),n(60163),n(63864)),s=function(t){return t.data},u=function(t){return"object"===(0,i.Z)(t)?"object"===(0,i.Z)(t.body)?t.body.message||"Unknown error, see supervisor logs":t.body||t.message||"Unknown error, see supervisor logs":t},c=new Set([502,503,504]),l=function(t){return!!(t&&t.status_code&&c.has(t.status_code))||!(!t||!t.message||!t.message.includes("ERR_CONNECTION_CLOSED")&&!t.message.includes("ERR_CONNECTION_RESET"))},d=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e,n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,a.I)(e.config.version,2021,2,4)){t.next=2;break}return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/".concat(n,"/stats"),method:"get"}));case 2:return t.t0=s,t.next=5,e.callApi("GET","hassio/".concat(n,"/stats"));case 5:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},35460:function(t,e,n){n.d(e,{AP:function(){return u},MY:function(){return c},Or:function(){return l},Sj:function(){return s},Sx:function(){return p},oJ:function(){return d},ou:function(){return h}});var r=n(99312),o=n(81043),i=n(63864),a=n(41682),s=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,i.I)(e.config.version,2021,2,4)){t.next=2;break}return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/host/info",method:"get"}));case 2:return t.next=4,e.callApi("GET","hassio/host/info");case 4:return n=t.sent,t.abrupt("return",(0,a.rY)(n));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,i.I)(e.config.version,2021,2,4)){t.next=2;break}return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/os/info",method:"get"}));case 2:return t.t0=a.rY,t.next=5,e.callApi("GET","hassio/os/info");case 5:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,i.I)(e.config.version,2021,2,4)){t.next=2;break}return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/host/reboot",method:"post",timeout:null}));case 2:return t.abrupt("return",e.callApi("POST","hassio/host/reboot"));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,i.I)(e.config.version,2021,2,4)){t.next=2;break}return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/host/shutdown",method:"post",timeout:null}));case 2:return t.abrupt("return",e.callApi("POST","hassio/host/shutdown"));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e,n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,i.I)(e.config.version,2021,2,4)){t.next=2;break}return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/host/options",method:"post",data:n}));case 2:return t.abrupt("return",e.callApi("POST","hassio/host/options",n));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),p=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e,n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,i.I)(e.config.version,2021,2,4)){t.next=2;break}return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/os/datadisk/move",method:"post",timeout:null,data:{device:n}}));case 2:return t.abrupt("return",e.callApi("POST","hassio/os/datadisk/move"));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,i.I)(e.config.version,2021,2,4)){t.next=2;break}return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/os/datadisk/list",method:"get",timeout:null}));case 2:return t.t0=a.rY,t.next=5,e.callApi("GET","/os/datadisk/list");case 5:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},29748:function(t,e,n){n.d(e,{TF:function(){return l},ap:function(){return d},eX:function(){return a},gp:function(){return p},mw:function(){return i},rE:function(){return u},wc:function(){return s},xM:function(){return c}});var r=n(99312),o=n(81043),i=(n(22859),function(t){return t.BIND="bind",t.CIFS="cifs",t.NFS="nfs",t}({})),a=function(t){return t.BACKUP="backup",t.MEDIA="media",t.SHARE="share",t}({}),s=function(t){return t.ACTIVE="active",t.FAILED="failed",t.UNKNOWN="unknown",t}({}),u=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/mounts",method:"get",timeout:null}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e,n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/mounts",method:"post",timeout:null,data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),l=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e,n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/mounts/".concat(n.name),method:"put",timeout:null,data:n}));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),d=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e,n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/mounts/".concat(n),method:"delete",timeout:null}));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),p=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e,n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/mounts/".concat(n.name,"/reload"),method:"post",timeout:null}));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},31585:function(t,e,n){n.r(e);var r,o,i,a,s,u,c,l,d,p,h,f,v,m,g=n(99312),k=n(81043),y=n(88962),b=n(33368),Z=n(71650),w=n(82390),_=n(69205),x=n(70906),A=n(91808),C=n(34541),M=n(47838),I=(n(97393),n(87438),n(46798),n(9849),n(22890),n(40271),n(60163),n(46349),n(70320),n(22859),n(61641),n(68144)),L=n(95260),H=n(7323),S=(n(9381),n(81545),n(10983),n(2130),n(52039),n(99282),n(41682)),V=n(35460),T=n(29748),N=n(26765),E=(n(60010),n(88027)),B=(n(16499),n(51358),n(47084),n(5239),n(98490),n(47181)),z=function(t,e){(0,B.B)(t,"show-dialog",{dialogTag:"dialog-mount-view",dialogImport:function(){return Promise.all([n.e(66023),n.e(68331),n.e(78521)]).then(n.bind(n,77794))},dialogParams:e})},F=n(83849);(0,A.Z)([(0,L.Mo)("ha-config-section-storage")],(function(t,e){var A,U,O,P,W=function(e){(0,_.Z)(r,e);var n=(0,x.Z)(r);function r(){var e;(0,Z.Z)(this,r);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=n.call.apply(n,[this].concat(i)),t((0,w.Z)(e)),e}return(0,b.Z)(r)}(e);return{F:W,d:[{kind:"field",decorators:[(0,L.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,L.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,L.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,L.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,L.SB)()],key:"_hostInfo",value:void 0},{kind:"field",decorators:[(0,L.SB)()],key:"_mountsInfo",value:void 0},{kind:"method",key:"firstUpdated",value:function(t){(0,C.Z)((0,M.Z)(W.prototype),"firstUpdated",this).call(this,t),(0,H.p)(this.hass,"hassio")&&this._load()}},{kind:"method",key:"render",value:function(){var t,e,n,m,g=this;if(void 0===this._mountsInfo)return I.Ld;var k=null===(t=this._mountsInfo)||void 0===t?void 0:t.mounts.filter((function(t){return[T.mw.CIFS,T.mw.NFS].includes(t.type)})),b=null===(e=this._hostInfo)||void 0===e?void 0:e.features.includes("haos");return(0,I.dy)(r||(r=(0,y.Z)([' <hass-subpage back-path="/config/system" .hass="','" .narrow="','" .header="','"> <div class="content"> '," ",' <ha-card outlined .header="','"> '," "," </ha-card> </div> </hass-subpage> "])),this.hass,this.narrow,this.hass.localize("ui.panel.config.storage.caption"),this._error?(0,I.dy)(o||(o=(0,y.Z)([' <ha-alert alert-type="error">',"</ha-alert> "])),this._error.message||this._error.code):"",this._hostInfo?(0,I.dy)(i||(i=(0,y.Z)([' <ha-card outlined .header="','"> <div class="card-content"> <ha-metric .heading="','" .value="','" .tooltip="','"></ha-metric> '," </div> "," </ha-card> "])),this.hass.localize("ui.panel.config.storage.disk_metrics"),this.hass.localize("ui.panel.config.storage.used_space"),this._getUsedSpace(null===(n=this._hostInfo)||void 0===n?void 0:n.disk_used,null===(m=this._hostInfo)||void 0===m?void 0:m.disk_total),"".concat(this._hostInfo.disk_used," GB/").concat(this._hostInfo.disk_total," GB"),""!==this._hostInfo.disk_life_time&&this._hostInfo.disk_life_time>=10?(0,I.dy)(a||(a=(0,y.Z)([' <ha-metric .heading="','" .value="','" .tooltip="','" class="emmc"></ha-metric> '])),this.hass.localize("ui.panel.config.storage.emmc_lifetime_used"),this._hostInfo.disk_life_time,"".concat(this._hostInfo.disk_life_time-10,"% - ").concat(this._hostInfo.disk_life_time,"%")):"",this._hostInfo?(0,I.dy)(s||(s=(0,y.Z)(['<div class="card-actions"> <mwc-button @click="','"> '," </mwc-button> </div>"])),this._moveDatadisk,this.hass.localize("ui.panel.config.storage.datadisk.title")):I.Ld):"",this.hass.localize("ui.panel.config.storage.network_mounts.title"),null===this._mountsInfo?(0,I.dy)(u||(u=(0,y.Z)(['<ha-alert class="mounts-not-supported" alert-type="warning" .title="','"> '," </ha-alert>"])),this.hass.localize("ui.panel.config.storage.network_mounts.not_supported.title"),b?(0,I.dy)(c||(c=(0,y.Z)(["",' <mwc-button slot="action" @click="','"> '," </mwc-button>"])),this.hass.localize("ui.panel.config.storage.network_mounts.not_supported.os",{version:"10.2"}),this._navigateToUpdates,this.hass.localize("ui.panel.config.storage.network_mounts.not_supported.navigate_to_updates")):this.hass.localize("ui.panel.config.storage.network_mounts.not_supported.supervised")):null!=k&&k.length?(0,I.dy)(l||(l=(0,y.Z)(["<mwc-list> "," </mwc-list>"])),k.map((function(t){return(0,I.dy)(d||(d=(0,y.Z)([' <ha-list-item graphic="avatar" .mount="','" twoline hasMeta @click="','"> <div slot="graphic"> <ha-svg-icon .path="','"></ha-svg-icon> </div> <span class="mount-state-','"> ',' </span> <span slot="secondary"> ',"",""," </span> "," </ha-list-item> "])),t,g._changeMount,t.usage===T.eX.MEDIA?"M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3M10 16V8L15 12":t.usage===T.eX.SHARE?"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z":"M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z",t.state||"unknown",t.name,t.server,t.port?":".concat(t.port):I.Ld,t.type===T.mw.NFS?t.path:":".concat(t.share),t.state!==T.wc.ACTIVE?(0,I.dy)(p||(p=(0,y.Z)(['<ha-icon-button class="reload-btn" slot="meta" .mount="','" @click="','" .path="','"></ha-icon-button>'])),t,g._reloadMount,"M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z"):(0,I.dy)(h||(h=(0,y.Z)(['<ha-icon-next slot="meta"></ha-icon-next>']))))}))):(0,I.dy)(f||(f=(0,y.Z)(['<div class="no-mounts"> <ha-svg-icon .path="','"></ha-svg-icon> <p> '," </p> </div>"])),"M4,5C2.89,5 2,5.89 2,7V17C2,18.11 2.89,19 4,19H20C21.11,19 22,18.11 22,17V7C22,5.89 21.11,5 20,5H4M4.5,7A1,1 0 0,1 5.5,8A1,1 0 0,1 4.5,9A1,1 0 0,1 3.5,8A1,1 0 0,1 4.5,7M7,7H20V17H7V7M8,8V16H11V8H8M12,8V16H15V8H12M16,8V16H19V8H16M9,9H10V10H9V9M13,9H14V10H13V9M17,9H18V10H17V9Z",this.hass.localize("ui.panel.config.storage.network_mounts.no_mounts")),null!==this._mountsInfo?(0,I.dy)(v||(v=(0,y.Z)(['<div class="card-actions"> <mwc-button @click="','"> '," </mwc-button> </div>"])),this._addMount,this.hass.localize("ui.panel.config.storage.network_mounts.add_title")):I.Ld)}},{kind:"method",key:"_load",value:(P=(0,k.Z)((0,g.Z)().mark((function t(){var e;return(0,g.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,V.Sj)(this.hass);case 3:this._hostInfo=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this._error=t.t0.message||t.t0;case 9:if(null===(e=this._hostInfo)||void 0===e||!e.features.includes("mount")){t.next=14;break}return t.next=12,this._reloadMounts();case 12:t.next=15;break;case 14:this._mountsInfo=null;case 15:case"end":return t.stop()}}),t,this,[[0,6]])}))),function(){return P.apply(this,arguments)})},{kind:"method",key:"_moveDatadisk",value:function(){var t,e;t=this,e={hostInfo:this._hostInfo},(0,B.B)(t,"show-dialog",{dialogTag:"dialog-move-datadisk",dialogImport:function(){return Promise.all([n.e(46992),n.e(3762),n.e(66023),n.e(49412),n.e(79895)]).then(n.bind(n,59891))},dialogParams:e})}},{kind:"method",key:"_navigateToUpdates",value:(O=(0,k.Z)((0,g.Z)().mark((function t(){return(0,g.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,F.c)("/config/updates");case 1:case"end":return t.stop()}}),t)}))),function(){return O.apply(this,arguments)})},{kind:"method",key:"_reloadMount",value:(U=(0,k.Z)((0,g.Z)().mark((function t(e){var n;return(0,g.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.stopPropagation(),n=e.currentTarget.mount,t.prev=2,t.next=5,(0,T.gp)(this.hass,n);case 5:t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(2),(0,N.showAlertDialog)(this,{title:this.hass.localize("ui.panel.config.storage.network_mounts.errors.reload",{mount:n.name}),text:(0,S.js)(t.t0)}),t.abrupt("return");case 11:return t.next=13,this._reloadMounts();case 13:case"end":return t.stop()}}),t,this,[[2,7]])}))),function(t){return U.apply(this,arguments)})},{kind:"method",key:"_addMount",value:function(){var t=this;z(this,{reloadMounts:function(){return t._reloadMounts()}})}},{kind:"method",key:"_changeMount",value:function(t){var e=this;t.stopPropagation(),z(this,{mount:t.currentTarget.mount,reloadMounts:function(){return e._reloadMounts()}})}},{kind:"method",key:"_reloadMounts",value:(A=(0,k.Z)((0,g.Z)().mark((function t(){return(0,g.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,T.rE)(this.hass);case 3:this._mountsInfo=t.sent,t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),this._error=t.t0.message||t.t0,this._mountsInfo=null;case 10:case"end":return t.stop()}}),t,this,[[0,6]])}))),function(){return A.apply(this,arguments)})},{kind:"field",key:"_getUsedSpace",value:function(){return function(t,e){return(0,E.IU)((0,E.Ff)(t,0,e))}}},{kind:"field",static:!0,key:"styles",value:function(){return(0,I.iv)(m||(m=(0,y.Z)([".content{padding:28px 20px 0;max-width:1040px;margin:0 auto}ha-card{max-width:600px;margin:0 auto 12px;justify-content:space-between;flex-direction:column;display:flex}.card-content{display:flex;justify-content:space-between;flex-direction:column}.mount-state-failed{color:var(--error-color)}.mount-state-unknown{color:var(--warning-color)}.mounts-not-supported{padding:0 16px 16px}.reload-btn{float:right;position:relative;top:-10px;right:10px}.no-mounts{display:flex;flex-direction:column;align-items:center;text-align:center}.no-mounts ha-svg-icon{background-color:var(--light-primary-color);color:var(--secondary-text-color);padding:16px;border-radius:50%;margin-bottom:8px}ha-list-item{--mdc-list-item-meta-size:auto;--mdc-list-item-meta-display:flex}ha-icon-next,ha-svg-icon{width:24px}"])))}}]}}),I.oi)},88027:function(t,e,n){n.d(e,{Ff:function(){return o},Fv:function(){return r},IU:function(){return i}});var r=function(t,e,n){return isNaN(t)||isNaN(e)||isNaN(n)?0:t>n?n:t<e?e:t},o=function(t,e,n){return 100*(t-e)/(n-e)},i=function(t){return Math.round(10*t)/10}},78799:function(t,e,n){var r=n(10228);t.exports=function(t,e,n){for(var o=0,i=arguments.length>2?n:r(e),a=new t(i);i>o;)a[o]=e[o++];return a}},9941:function(t,e,n){var r=n(76902),o=n(55418),i=n(70814),a=n(19480),s=n(84297),u=n(10228),c=n(9885),l=n(78799),d=Array,p=o([].push);t.exports=function(t,e,n,o){for(var h,f,v,m=a(t),g=i(m),k=r(e,n),y=c(null),b=u(g),Z=0;b>Z;Z++)v=g[Z],(f=s(k(v,Z,m)))in y?p(y[f],v):y[f]=[v];if(o&&(h=o(m))!==d)for(f in y)y[f]=l(h,y[f]);return y}},22481:function(t,e,n){var r=n(68077),o=n(9941),i=n(90476);r({target:"Array",proto:!0},{group:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("group")}}]);
//# sourceMappingURL=52777.D3G6_89-2uU.js.map