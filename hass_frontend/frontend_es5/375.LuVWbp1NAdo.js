"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[375],{36125:function(e,t,i){var r,n,a,o=i(88962),s=i(33368),l=i(71650),c=i(82390),d=i(69205),u=i(70906),h=i(91808),f=i(34541),p=i(47838),v=(i(97393),i(48095)),b=i(72477),y=i(95260),k=i(68144),m=i(30418);(0,h.Z)([(0,y.Mo)("ha-fab")],(function(e,t){var i=function(t){(0,d.Z)(r,t);var i=(0,u.Z)(r);function r(){var t;(0,l.Z)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=i.call.apply(i,[this].concat(a)),e((0,c.Z)(t)),t}return(0,s.Z)(r)}(t);return{F:i,d:[{kind:"method",key:"firstUpdated",value:function(e){(0,f.Z)((0,p.Z)(i.prototype),"firstUpdated",this).call(this,e),this.style.setProperty("--mdc-theme-secondary","var(--primary-color)")}},{kind:"field",static:!0,key:"styles",value:function(){return[b.W,(0,k.iv)(r||(r=(0,o.Z)([":host .mdc-fab--extended .mdc-fab__icon{margin-inline-start:-8px;margin-inline-end:12px;direction:var(--direction)}"]))),"rtl"===m.E.document.dir?(0,k.iv)(n||(n=(0,o.Z)([":host .mdc-fab--extended .mdc-fab__icon{direction:rtl}"]))):(0,k.iv)(a||(a=(0,o.Z)([""])))]}}]}}),v._)},76865:function(e,t,i){var r,n,a=i(88962),o=i(33368),s=i(71650),l=i(82390),c=i(69205),d=i(70906),u=i(91808),h=(i(97393),i(33829),i(68144)),f=i(95260);i(52039),(0,u.Z)([(0,f.Mo)("ha-help-tooltip")],(function(e,t){var i=function(t){(0,c.Z)(r,t);var i=(0,d.Z)(r);function r(){var t;(0,s.Z)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=i.call.apply(i,[this].concat(a)),e((0,l.Z)(t)),t}return(0,o.Z)(r)}(t);return{F:i,d:[{kind:"field",decorators:[(0,f.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"position",value:function(){return"top"}},{kind:"method",key:"render",value:function(){return(0,h.dy)(r||(r=(0,a.Z)([' <ha-svg-icon .path="','"></ha-svg-icon> <simple-tooltip offset="4" .position="','" .fitToVisibleBounds="','">',"</simple-tooltip> "])),"M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",this.position,!0,this.label)}},{kind:"get",static:!0,key:"styles",value:function(){return(0,h.iv)(n||(n=(0,a.Z)(["ha-svg-icon{--mdc-icon-size:var(--ha-help-tooltip-size, 14px);color:var(--ha-help-tooltip-color,var(--disabled-text-color))}"])))}}]}}),h.oi)},65253:function(e,t,i){i.d(t,{CE:function(){return o},FH:function(){return h},Nq:function(){return c},Pb:function(){return a},fm:function(){return u},h8:function(){return d},r4:function(){return l},uh:function(){return s}});var r=i(99312),n=i(81043),a=(i(85717),i(91989),i(46349),i(70320),i(17692),i(11451),i(36513),"system-admin"),o="system-users",s=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth/list"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(t,i,n,a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth/create",name:i,group_ids:n,local_only:a}));case 1:case"end":return e.stop()}}),e)})));return function(t,i,r,n){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(t,i,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS(Object.assign(Object.assign({},n),{},{type:"config/auth/update",user_id:i})));case 1:case"end":return e.stop()}}),e)})));return function(t,i,r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(t,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth/delete",user_id:i}));case 1:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),u=function(e){return e?e.trim().split(" ").slice(0,3).map((function(e){return e.substring(0,1)})).join(""):"?"},h=function(e,t,i){var r=[],n=function(t){return e.localize("ui.panel.config.users.".concat(t))};return t.is_owner&&r.push(["M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20M8 14L7 8L10 10L12 7L14 10L17 8L16 14H8M8.56 16C8.22 16 8 15.78 8 15.44V15H16V15.44C16 15.78 15.78 16 15.44 16H8.56Z",n("is_owner")]),i&&t.system_generated&&r.push(["M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z",n("is_system")]),t.local_only&&r.push(["M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14",n("is_local")]),t.is_active||r.push(["M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z",n("is_not_active")]),r}},96551:function(e,t,i){var r,n,a,o,s,l,c,d,u,h,f,p,v,b,y=i(88962),k=i(33368),m=i(71650),g=i(82390),Z=i(69205),x=i(70906),_=i(91808),w=(i(97393),i(76843),i(91989),i(87438),i(46798),i(9849),i(22890),i(47704),i(33829),i(68144)),C=i(95260),H=i(47181),z=i(87744);i(37168),i(49703),(0,_.Z)([(0,C.Mo)("hass-tabs-subpage-data-table")],(function(e,t){var i=function(t){(0,Z.Z)(r,t);var i=(0,x.Z)(r);function r(){var t;(0,m.Z)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=i.call.apply(i,[this].concat(a)),e((0,g.Z)(t)),t}return(0,k.Z)(r)}(t);return{F:i,d:[{kind:"field",decorators:[(0,C.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,C.Cb)({attribute:!1})],key:"localizeFunc",value:void 0},{kind:"field",decorators:[(0,C.Cb)({type:Boolean})],key:"isWide",value:function(){return!1}},{kind:"field",decorators:[(0,C.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,C.Cb)({type:Boolean})],key:"supervisor",value:function(){return!1}},{kind:"field",decorators:[(0,C.Cb)({type:Boolean,attribute:"main-page"})],key:"mainPage",value:function(){return!1}},{kind:"field",decorators:[(0,C.Cb)({type:Object})],key:"columns",value:function(){return{}}},{kind:"field",decorators:[(0,C.Cb)({type:Array})],key:"data",value:function(){return[]}},{kind:"field",decorators:[(0,C.Cb)({type:Boolean})],key:"selectable",value:function(){return!1}},{kind:"field",decorators:[(0,C.Cb)({type:Boolean})],key:"clickable",value:function(){return!1}},{kind:"field",decorators:[(0,C.Cb)({type:Boolean})],key:"hasFab",value:function(){return!1}},{kind:"field",decorators:[(0,C.Cb)({attribute:!1})],key:"appendRow",value:void 0},{kind:"field",decorators:[(0,C.Cb)({type:String})],key:"id",value:function(){return"id"}},{kind:"field",decorators:[(0,C.Cb)({type:String})],key:"filter",value:function(){return""}},{kind:"field",decorators:[(0,C.Cb)()],key:"searchLabel",value:void 0},{kind:"field",decorators:[(0,C.Cb)({type:Array})],key:"activeFilters",value:void 0},{kind:"field",decorators:[(0,C.Cb)()],key:"hiddenLabel",value:void 0},{kind:"field",decorators:[(0,C.Cb)({type:Number})],key:"numHidden",value:function(){return 0}},{kind:"field",decorators:[(0,C.Cb)({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[(0,C.Cb)()],key:"backCallback",value:void 0},{kind:"field",decorators:[(0,C.Cb)({type:String})],key:"noDataText",value:void 0},{kind:"field",decorators:[(0,C.Cb)({type:Boolean})],key:"empty",value:function(){return!1}},{kind:"field",decorators:[(0,C.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,C.Cb)()],key:"tabs",value:function(){return[]}},{kind:"field",decorators:[(0,C.Cb)({type:Boolean})],key:"hideFilterMenu",value:function(){return!1}},{kind:"field",decorators:[(0,C.IO)("ha-data-table",!0)],key:"_dataTable",value:void 0},{kind:"method",key:"clearSelection",value:function(){this._dataTable.clearSelection()}},{kind:"method",key:"render",value:function(){var e=this.numHidden?this.hiddenLabel||this.hass.localize("ui.components.data-table.hidden",{number:this.numHidden})||this.numHidden:void 0,t=this.activeFilters?(0,w.dy)(r||(r=(0,y.Z)([""," "," ",""])),this.hass.localize("ui.components.data-table.filtering_by"),this.activeFilters.join(", "),e?"(".concat(e,")"):""):e,i=(0,w.dy)(n||(n=(0,y.Z)(['<search-input .hass="','" .filter="','" .suffix="','" @value-changed="','" .label="','"> '," </search-input>"])),this.hass,this.filter,!this.narrow,this._handleSearchChange,this.searchLabel,this.narrow?"":(0,w.dy)(a||(a=(0,y.Z)(['<div class="filters" slot="suffix" @click="','"> ',' <slot name="filter-menu"></slot> </div>'])),this._preventDefault,t?(0,w.dy)(o||(o=(0,y.Z)(['<div class="active-filters"> ',' <mwc-button @click="','"> '," </mwc-button> </div>"])),t,this._clearFilter,this.hass.localize("ui.components.data-table.clear")):""));return(0,w.dy)(s||(s=(0,y.Z)([' <hass-tabs-subpage .hass="','" .localizeFunc="','" .narrow="','" .isWide="','" .backPath="','" .backCallback="','" .route="','" .tabs="','" .mainPage="','" .supervisor="','"> ',' <div slot="fab"><slot name="fab"></slot></div> </hass-tabs-subpage> '])),this.hass,this.localizeFunc,this.narrow,this.isWide,this.backPath,this.backCallback,this.route,this.tabs,this.mainPage,this.supervisor,this.empty?(0,w.dy)(l||(l=(0,y.Z)(['<div class="center"> <slot name="empty">',"</slot> </div>"])),this.noDataText):(0,w.dy)(c||(c=(0,y.Z)([""," ",' <ha-data-table .hass="','" .columns="','" .data="','" .noDataText="','" .filter="','" .selectable="','" .hasFab="','" .id="','" .dir="','" .clickable="','" .appendRow="','"> '," </ha-data-table>"])),this.hideFilterMenu?"":(0,w.dy)(d||(d=(0,y.Z)([' <div slot="toolbar-icon"> ','<slot name="toolbar-icon"></slot> </div> '])),this.narrow?(0,w.dy)(u||(u=(0,y.Z)([' <div class="filter-menu"> ',' <slot name="filter-menu"></slot> </div> '])),this.numHidden||this.activeFilters?(0,w.dy)(h||(h=(0,y.Z)(['<span class="badge">',"</span>"])),this.numHidden||"!"):""):""),this.narrow?(0,w.dy)(f||(f=(0,y.Z)([' <div slot="header"> <slot name="header"> <div class="search-toolbar">',"</div> </slot> </div> "])),i):"",this.hass,this.columns,this.data,this.noDataText,this.filter,this.selectable,this.hasFab,this.id,(0,z.Zu)(this.hass),this.clickable,this.appendRow,this.narrow?(0,w.dy)(v||(v=(0,y.Z)([' <div slot="header"></div> ']))):(0,w.dy)(p||(p=(0,y.Z)([' <div slot="header"> <slot name="header"> <div class="table-header">',"</div> </slot> </div> "])),i)))}},{kind:"method",key:"_preventDefault",value:function(e){e.preventDefault()}},{kind:"method",key:"_handleSearchChange",value:function(e){this.filter!==e.detail.value&&(this.filter=e.detail.value,(0,H.B)(this,"search-changed",{value:this.filter}))}},{kind:"method",key:"_clearFilter",value:function(){(0,H.B)(this,"clear-filter")}},{kind:"get",static:!0,key:"styles",value:function(){return(0,w.iv)(b||(b=(0,y.Z)(['ha-data-table{width:100%;height:100%;--data-table-border-width:0}:host(:not([narrow])) ha-data-table{height:calc(100vh - 1px - var(--header-height));display:block}:host([narrow]) hass-tabs-subpage{--main-title-margin:0}.table-header{display:flex;align-items:center;--mdc-shape-small:0;height:56px}.search-toolbar{display:flex;align-items:center;color:var(--secondary-text-color)}search-input{--mdc-text-field-fill-color:var(--sidebar-background-color);--mdc-text-field-idle-line-color:var(--divider-color);--text-field-overflow:visible;z-index:5}.table-header search-input{display:block;position:absolute;top:0;right:0;left:0}.search-toolbar search-input{display:block;width:100%;color:var(--secondary-text-color);--mdc-ripple-color:transparant}.filters{--mdc-text-field-fill-color:var(--input-fill-color);--mdc-text-field-idle-line-color:var(--input-idle-line-color);--mdc-shape-small:4px;--text-field-overflow:initial;display:flex;justify-content:flex-end;color:var(--primary-text-color)}.active-filters{color:var(--primary-text-color);position:relative;display:flex;align-items:center;padding:2px 2px 2px 8px;margin-left:4px;margin-inline-start:4px;margin-inline-end:initial;font-size:14px;width:max-content;cursor:initial;direction:var(--direction)}.active-filters ha-svg-icon{color:var(--primary-color)}.active-filters mwc-button{margin-left:8px;margin-inline-start:8px;margin-inline-end:initial;direction:var(--direction)}.active-filters::before{background-color:var(--primary-color);opacity:.12;border-radius:4px;position:absolute;top:0;right:0;bottom:0;left:0;content:""}.badge{min-width:20px;box-sizing:border-box;border-radius:50%;font-weight:400;background-color:var(--primary-color);line-height:20px;text-align:center;padding:0px 4px;color:var(--text-primary-color);position:absolute;right:0;top:4px;font-size:.65em}.filter-menu{position:relative}.center{display:flex;align-items:center;justify-content:center;text-align:center;box-sizing:border-box;height:100%;width:100%;padding:16px}'])))}}]}}),w.oi)},99712:function(e,t,i){i.r(t),i.d(t,{HaConfigUsers:function(){return W}});var r,n,a,o,s,l,c,d,u,h,f,p,v,b=i(53709),y=i(99312),k=i(81043),m=i(68990),g=i(88962),Z=i(33368),x=i(71650),_=i(82390),w=i(69205),C=i(70906),H=i(91808),z=i(34541),L=i(47838),A=(i(97393),i(22859),i(46349),i(70320),i(46798),i(9849),i(50289),i(94167),i(80628),i(85472),i(90126),i(87438),i(22890),i(68144)),M=i(95260),F=i(14516),V=(i(52039),(0,H.Z)([(0,M.Mo)("ha-data-table-icon")],(function(e,t){var i=function(t){(0,w.Z)(r,t);var i=(0,C.Z)(r);function r(){var t;(0,x.Z)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=i.call.apply(i,[this].concat(a)),e((0,_.Z)(t)),t}return(0,Z.Z)(r)}(t);return{F:i,d:[{kind:"field",decorators:[(0,M.Cb)()],key:"tooltip",value:void 0},{kind:"field",decorators:[(0,M.Cb)()],key:"path",value:void 0},{kind:"field",decorators:[(0,M.SB)()],key:"_hovered",value:function(){return!1}},{kind:"method",key:"render",value:function(){return(0,A.dy)(r||(r=(0,g.Z)([" ",' <ha-svg-icon .path="','"></ha-svg-icon> '])),this._hovered?(0,A.dy)(n||(n=(0,g.Z)(["<div>","</div>"])),this.tooltip):"",this.path)}},{kind:"method",key:"firstUpdated",value:function(e){var t=this;(0,z.Z)((0,L.Z)(i.prototype),"firstUpdated",this).call(this,e);var r=function(){t._hovered=!0},n=function(){t._hovered=!1};this.addEventListener("mouseenter",r),this.addEventListener("focus",r),this.addEventListener("mouseleave",n),this.addEventListener("blur",n),this.addEventListener("tap",n)}},{kind:"get",static:!0,key:"styles",value:function(){return(0,A.iv)(a||(a=(0,g.Z)([":host{display:inline-block;position:relative}ha-svg-icon{color:var(--secondary-text-color)}div{position:absolute;right:28px;z-index:1002;outline:0;font-size:10px;line-height:1;background-color:var(--simple-tooltip-background,#616161);color:var(--simple-tooltip-text-color,#fff);padding:8px;border-radius:2px}"])))}}]}}),A.oi),i(36125),i(76865),i(65253)),S=i(26765),B=(i(96551),i(29311)),P=i(91188),U=(i(51358),i(47084),i(5239),i(98490),i(47181)),T=function(){return Promise.all([i.e(28597),i.e(76969),i.e(4503)]).then(i.bind(i,4503))},E="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",W=(0,H.Z)([(0,M.Mo)("ha-config-users")],(function(e,t){var i,r=function(t){(0,w.Z)(r,t);var i=(0,C.Z)(r);function r(){var t;(0,x.Z)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=i.call.apply(i,[this].concat(a)),e((0,_.Z)(t)),t}return(0,Z.Z)(r)}(t);return{F:r,d:[{kind:"field",decorators:[(0,M.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,M.Cb)({attribute:!1})],key:"_users",value:function(){return[]}},{kind:"field",decorators:[(0,M.Cb)({type:Boolean})],key:"isWide",value:void 0},{kind:"field",decorators:[(0,M.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,M.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",key:"_columns",value:function(){var e=this;return(0,F.Z)((function(t,i){return{name:{title:i("ui.panel.config.users.picker.headers.name"),main:!0,sortable:!0,filterable:!0,width:"25%",direction:"asc",grows:!0,template:function(r){return t?(0,A.dy)(o||(o=(0,g.Z)([" ",'<br> <div class="secondary"> '," "," </div>"])),r.name,r.username?"".concat(r.username," |"):"",i("groups.".concat(r.group_ids[0]))):(0,A.dy)(s||(s=(0,g.Z)([" ",""])),r.name||e.hass.localize("ui.panel.config.users.editor.unnamed_user"))}},username:{title:i("ui.panel.config.users.picker.headers.username"),sortable:!0,filterable:!0,width:"20%",direction:"asc",hidden:t,template:function(e){return(0,A.dy)(l||(l=(0,g.Z)(["",""])),e.username||"—")}},group_ids:{title:i("ui.panel.config.users.picker.headers.group"),sortable:!0,filterable:!0,width:"20%",direction:"asc",hidden:t,template:function(e){return(0,A.dy)(c||(c=(0,g.Z)([" "," "])),i("groups.".concat(e.group_ids[0])))}},is_active:{title:e.hass.localize("ui.panel.config.users.picker.headers.is_active"),type:"icon",sortable:!0,filterable:!0,width:"80px",hidden:t,template:function(e){return e.is_active?(0,A.dy)(d||(d=(0,g.Z)(['<ha-svg-icon .path="','"></ha-svg-icon>'])),E):""}},system_generated:{title:e.hass.localize("ui.panel.config.users.picker.headers.system"),type:"icon",sortable:!0,filterable:!0,width:"80px",hidden:t,template:function(e){return e.system_generated?(0,A.dy)(u||(u=(0,g.Z)(['<ha-svg-icon .path="','"></ha-svg-icon>'])),E):""}},local_only:{title:e.hass.localize("ui.panel.config.users.picker.headers.local"),type:"icon",sortable:!0,filterable:!0,width:"80px",hidden:t,template:function(e){return e.local_only?(0,A.dy)(h||(h=(0,g.Z)(['<ha-svg-icon .path="','"></ha-svg-icon>'])),E):""}},icons:{title:"",label:e.hass.localize("ui.panel.config.users.picker.headers.icon"),type:"icon",sortable:!1,filterable:!1,width:"104px",hidden:!t,template:function(t){var i=(0,V.FH)(e.hass,t,!1);return(0,A.dy)(f||(f=(0,g.Z)(["",""])),i.map((function(e){var t=(0,m.Z)(e,2),i=t[0],r=t[1];return(0,A.dy)(p||(p=(0,g.Z)(['<ha-data-table-icon .path="','" .tooltip="','"></ha-data-table-icon>'])),i,r)})))}}}}))}},{kind:"method",key:"firstUpdated",value:function(e){(0,z.Z)((0,L.Z)(r.prototype),"firstUpdated",this).call(this,e),this._fetchUsers()}},{kind:"method",key:"render",value:function(){return(0,A.dy)(v||(v=(0,g.Z)([' <hass-tabs-subpage-data-table .hass="','" .narrow="','" .route="','" backPath="/config" .tabs="','" .columns="','" .data="','" @row-click="','" hasFab clickable> <ha-fab slot="fab" .label="','" extended @click="','"> <ha-svg-icon slot="icon" .path="','"></ha-svg-icon> </ha-fab> </hass-tabs-subpage-data-table> '])),this.hass,this.narrow,this.route,B.configSections.persons,this._columns(this.narrow,this.hass.localize),this._users,this._editUser,this.hass.localize("ui.panel.config.users.picker.add_user"),this._addUser,"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z")}},{kind:"method",key:"_fetchUsers",value:(i=(0,k.Z)((0,y.Z)().mark((function e(){return(0,y.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,V.uh)(this.hass);case 2:this._users=e.sent,this._users.forEach((function(e){e.is_owner&&e.group_ids.unshift("owner")}));case 4:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{kind:"method",key:"_editUser",value:function(e){var t,i,r,n,a=this,o=e.detail.id,s=this._users.find((function(e){return e.id===o}));s&&(t=this,i={entry:s,updateEntry:(n=(0,k.Z)((0,y.Z)().mark((function e(t){var i;return(0,y.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,V.Nq)(a.hass,s.id,t);case 2:i=e.sent,a._users=a._users.map((function(e){return e===s?i.user:e}));case 4:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)}),removeEntry:(r=(0,k.Z)((0,y.Z)().mark((function e(){return(0,y.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,S.showConfirmationDialog)(a,{title:a.hass.localize("ui.panel.config.users.editor.confirm_user_deletion_title",{name:s.name}),text:a.hass.localize("ui.panel.config.users.editor.confirm_user_deletion_text"),dismissText:a.hass.localize("ui.common.cancel"),confirmText:a.hass.localize("ui.common.delete"),destructive:!0});case 2:if(e.sent){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,(0,V.h8)(a.hass,s.id);case 7:return a._users=a._users.filter((function(e){return e!==s})),e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e.catch(4),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[4,11]])}))),function(){return r.apply(this,arguments)})},(0,U.B)(t,"show-dialog",{dialogTag:"dialog-user-detail",dialogImport:T,dialogParams:i}))}},{kind:"method",key:"_addUser",value:function(){var e,t=this;(0,P.G)(this,{userAddedCallback:(e=(0,k.Z)((0,y.Z)().mark((function e(i){return(0,y.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i&&(t._users=[].concat((0,b.Z)(t._users),[i]));case 1:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)})})}}]}}),A.oi)},91188:function(e,t,i){i.d(t,{G:function(){return a}});i(51358),i(46798),i(47084),i(5239),i(98490);var r=i(47181),n=function(){return Promise.all([i.e(28597),i.e(66023),i.e(52562),i.e(74898)]).then(i.bind(i,74898))},a=function(e,t){(0,r.B)(e,"show-dialog",{dialogTag:"dialog-add-user",dialogImport:n,dialogParams:t})}},44281:function(e,t,i){i.d(t,{j:function(){return a}});var r=i(99312),n=i(81043),a=(i(51358),i(46798),i(47084),i(5239),i(98490),function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,new ResizeObserver((function(){})),e.next=9;break;case 4:return e.prev=4,e.t0=e.catch(0),e.next=8,Promise.resolve().then(i.bind(i,5442));case 8:window.ResizeObserver=e.sent.default;case 9:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(){return e.apply(this,arguments)}}())}}]);
//# sourceMappingURL=375.LuVWbp1NAdo.js.map