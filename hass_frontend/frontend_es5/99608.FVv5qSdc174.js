/*! For license information please see 99608.FVv5qSdc174.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[99608],{45253:function(t,e,i){i.d(e,{HX:function(){return n},KT:function(){return a},Ns:function(){return o},UX:function(){return s},j2:function(){return r}});i(91989);var n,o,s={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},r={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",OPENING_EVENT:"MDCMenuSurface:opening",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},a={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30};!function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"}(n||(n={})),function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"}(o||(o={}))},6945:function(t,e,i){i.d(e,{k:function(){return r}});i(51467),i(65974);var n=i(43204),o=i(72774),s=i(45253),r=function(t){function e(i){var o=t.call(this,(0,n.__assign)((0,n.__assign)({},e.defaultAdapter),i))||this;return o.isSurfaceOpen=!1,o.isQuickOpen=!1,o.isHoistedElement=!1,o.isFixedPosition=!1,o.isHorizontallyCenteredOnViewport=!1,o.maxHeight=0,o.openBottomBias=0,o.openAnimationEndTimerId=0,o.closeAnimationEndTimerId=0,o.animationRequestId=0,o.anchorCorner=s.Ns.TOP_START,o.originCorner=s.Ns.TOP_START,o.anchorMargin={top:0,right:0,bottom:0,left:0},o.position={x:0,y:0},o}return(0,n.__extends)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return s.UX},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return s.j2},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return s.KT},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return s.Ns},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyClosing:function(){},notifyOpen:function(){},notifyOpening:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,i=t.ROOT,n=t.OPEN;if(!this.adapter.hasClass(i))throw new Error(i+" class required in root element.");this.adapter.hasClass(n)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(t){this.anchorCorner=t},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^s.HX.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition=t},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(t,e){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(e)?e:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},e.prototype.setQuickOpen=function(t){this.isQuickOpen=t},e.prototype.setMaxHeight=function(t){this.maxHeight=t},e.prototype.setOpenBottomBias=function(t){this.openBottomBias=t},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.notifyOpening(),this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame((function(){t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.adapter.addClass(e.cssClasses.OPEN),t.openAnimationEndTimerId=setTimeout((function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()}),s.KT.TRANSITION_OPEN_DURATION)})),this.isSurfaceOpen=!0))},e.prototype.close=function(t){var i=this;if(void 0===t&&(t=!1),this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen)return this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),void this.adapter.notifyClose();this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){i.adapter.removeClass(e.cssClasses.OPEN),i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId=setTimeout((function(){i.closeAnimationEndTimerId=0,i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),i.adapter.notifyClose()}),s.KT.TRANSITION_CLOSE_DURATION)})),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(t){var e=t.target;this.adapter.isElementInContainer(e)||this.close()},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var i=this.getoriginCorner(),n=this.getMenuSurfaceMaxHeight(i),o=this.hasBit(i,s.HX.BOTTOM)?"bottom":"top",r=this.hasBit(i,s.HX.RIGHT)?"right":"left",a=this.getHorizontalOriginOffset(i),c=this.getVerticalOriginOffset(i),u=this.measurements,h=u.anchorSize,d=u.surfaceSize,p=((t={})[r]=a,t[o]=c,t);h.width/d.width>s.KT.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(r="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(p),this.adapter.setTransformOrigin(r+" "+o),this.adapter.setPosition(p),this.adapter.setMaxHeight(n?n+"px":""),this.hasBit(i,s.HX.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),e=this.adapter.getBodyDimensions(),i=this.adapter.getWindowDimensions(),n=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:e,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:i.width-t.right,bottom:i.height-t.bottom,left:t.left},viewportSize:i,windowScroll:n}},e.prototype.getoriginCorner=function(){var t,i,n=this.originCorner,o=this.measurements,r=o.viewportDistance,a=o.anchorSize,c=o.surfaceSize,u=e.numbers.MARGIN_TO_EDGE;this.hasBit(this.anchorCorner,s.HX.BOTTOM)?(t=r.top-u+this.anchorMargin.bottom,i=r.bottom-u-this.anchorMargin.bottom):(t=r.top-u+this.anchorMargin.top,i=r.bottom-u+a.height-this.anchorMargin.top),!(i-c.height>0)&&t>i+this.openBottomBias&&(n=this.setBit(n,s.HX.BOTTOM));var h,d,p=this.adapter.isRtl(),l=this.hasBit(this.anchorCorner,s.HX.FLIP_RTL),f=this.hasBit(this.anchorCorner,s.HX.RIGHT)||this.hasBit(n,s.HX.RIGHT),m=!1;(m=p&&l?!f:f)?(h=r.left+a.width+this.anchorMargin.right,d=r.right-this.anchorMargin.right):(h=r.left+this.anchorMargin.left,d=r.right+a.width-this.anchorMargin.left);var y=h-c.width>0,g=d-c.width>0,T=this.hasBit(n,s.HX.FLIP_RTL)&&this.hasBit(n,s.HX.RIGHT);return g&&T&&p||!y&&T?n=this.unsetBit(n,s.HX.RIGHT):(y&&m&&p||y&&!m&&f||!g&&h>=d)&&(n=this.setBit(n,s.HX.RIGHT)),n},e.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var i=this.measurements.viewportDistance,n=0,o=this.hasBit(t,s.HX.BOTTOM),r=this.hasBit(this.anchorCorner,s.HX.BOTTOM),a=e.numbers.MARGIN_TO_EDGE;return o?(n=i.top+this.anchorMargin.top-a,r||(n+=this.measurements.anchorSize.height)):(n=i.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-a,r&&(n-=this.measurements.anchorSize.height)),n},e.prototype.getHorizontalOriginOffset=function(t){var e=this.measurements.anchorSize,i=this.hasBit(t,s.HX.RIGHT),n=this.hasBit(this.anchorCorner,s.HX.RIGHT);if(i){var o=n?e.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?o-(this.measurements.viewportSize.width-this.measurements.bodySize.width):o}return n?e.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(t){var e=this.measurements.anchorSize,i=this.hasBit(t,s.HX.BOTTOM),n=this.hasBit(this.anchorCorner,s.HX.BOTTOM);return i?n?e.height-this.anchorMargin.top:-this.anchorMargin.bottom:n?e.height+this.anchorMargin.bottom:this.anchorMargin.top},e.prototype.adjustPositionForHoistedElement=function(t){var e,i,o=this.measurements,s=o.windowScroll,r=o.viewportDistance,a=o.surfaceSize,c=o.viewportSize,u=Object.keys(t);try{for(var h=(0,n.__values)(u),d=h.next();!d.done;d=h.next()){var p=d.value,l=t[p]||0;!this.isHorizontallyCenteredOnViewport||"left"!==p&&"right"!==p?(l+=r[p],this.isFixedPosition||("top"===p?l+=s.y:"bottom"===p?l-=s.y:"left"===p?l+=s.x:l-=s.x),t[p]=l):t[p]=(c.width-a.width)/2}}catch(f){e={error:f}}finally{try{d&&!d.done&&(i=h.return)&&i.call(h)}finally{if(e)throw e.error}}},e.prototype.maybeRestoreFocus=function(){var t=this,e=this.adapter.isFocused(),i=this.adapter.getOwnerDocument?this.adapter.getOwnerDocument():document,n=i.activeElement&&this.adapter.isElementInContainer(i.activeElement);(e||n)&&setTimeout((function(){t.adapter.restoreFocus()}),s.KT.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(t,e){return Boolean(t&e)},e.prototype.setBit=function(t,e){return t|e},e.prototype.unsetBit=function(t,e){return t^e},e.prototype.isFinite=function(t){return"number"==typeof t&&isFinite(t)},e}(o.K);e.Z=r},99608:function(t,e,i){var n,o,s,r=i(33368),a=i(71650),c=i(69205),u=i(70906),h=i(43204),d=i(95260),p=i(99312),l=i(81043),f=i(88962),m=(i(73855),i(80641),i(85717),i(56308),i(76843),i(45253)),y=i(6945),g=i(78220),T=i(14114),O=i(82612),v=i(68144),_=i(83448),C=i(47501),b={TOP_LEFT:m.Ns.TOP_LEFT,TOP_RIGHT:m.Ns.TOP_RIGHT,BOTTOM_LEFT:m.Ns.BOTTOM_LEFT,BOTTOM_RIGHT:m.Ns.BOTTOM_RIGHT,TOP_START:m.Ns.TOP_START,TOP_END:m.Ns.TOP_END,BOTTOM_START:m.Ns.BOTTOM_START,BOTTOM_END:m.Ns.BOTTOM_END},E=function(t){(0,c.Z)(i,t);var e=(0,u.Z)(i);function i(){var t;return(0,a.Z)(this,i),(t=e.apply(this,arguments)).mdcFoundationClass=y.Z,t.absolute=!1,t.fullwidth=!1,t.fixed=!1,t.x=null,t.y=null,t.quick=!1,t.open=!1,t.stayOpenOnBodyClick=!1,t.bitwiseCorner=m.Ns.TOP_START,t.previousMenuCorner=null,t.menuCorner="START",t.corner="TOP_START",t.styleTop="",t.styleLeft="",t.styleRight="",t.styleBottom="",t.styleMaxHeight="",t.styleTransformOrigin="",t.anchor=null,t.previouslyFocused=null,t.previousAnchor=null,t.onBodyClickBound=function(){},t}return(0,r.Z)(i,[{key:"render",value:function(){return this.renderSurface()}},{key:"renderSurface",value:function(){var t=this.getRootClasses(),e=this.getRootStyles();return(0,v.dy)(n||(n=(0,f.Z)([' <div class="','" style="','" @keydown="','" @opened="','" @closed="','"> '," </div>"])),(0,_.$)(t),(0,C.V)(e),this.onKeydown,this.registerBodyClick,this.deregisterBodyClick,this.renderContent())}},{key:"getRootClasses",value:function(){return{"mdc-menu-surface":!0,"mdc-menu-surface--fixed":this.fixed,"mdc-menu-surface--fullwidth":this.fullwidth}}},{key:"getRootStyles",value:function(){return{top:this.styleTop,left:this.styleLeft,right:this.styleRight,bottom:this.styleBottom,"max-height":this.styleMaxHeight,"transform-origin":this.styleTransformOrigin}}},{key:"renderContent",value:function(){return(0,v.dy)(o||(o=(0,f.Z)(["<slot></slot>"])))}},{key:"createAdapter",value:function(){var t,e=this;return Object.assign(Object.assign({},(0,g.q)(this.mdcRoot)),{hasAnchor:function(){return!!e.anchor},notifyClose:function(){var t=new CustomEvent("closed",{bubbles:!0,composed:!0});e.open=!1,e.mdcRoot.dispatchEvent(t)},notifyClosing:function(){var t=new CustomEvent("closing",{bubbles:!0,composed:!0});e.mdcRoot.dispatchEvent(t)},notifyOpen:function(){var t=new CustomEvent("opened",{bubbles:!0,composed:!0});e.open=!0,e.mdcRoot.dispatchEvent(t)},notifyOpening:function(){var t=new CustomEvent("opening",{bubbles:!0,composed:!0});e.mdcRoot.dispatchEvent(t)},isElementInContainer:function(){return!1},isRtl:function(){return!!e.mdcRoot&&"rtl"===getComputedStyle(e.mdcRoot).direction},setTransformOrigin:function(t){e.mdcRoot&&(e.styleTransformOrigin=t)},isFocused:function(){return(0,O.WU)(e)},saveFocus:function(){var t=(0,O.Mh)(),i=t.length;i||(e.previouslyFocused=null),e.previouslyFocused=t[i-1]},restoreFocus:function(){e.previouslyFocused&&"focus"in e.previouslyFocused&&e.previouslyFocused.focus()},getInnerDimensions:function(){var t=e.mdcRoot;return t?{width:t.offsetWidth,height:t.offsetHeight}:{width:0,height:0}},getAnchorDimensions:function(){var t=e.anchor;return t?t.getBoundingClientRect():null},getBodyDimensions:function(){return{width:document.body.clientWidth,height:document.body.clientHeight}},getWindowDimensions:function(){return{width:window.innerWidth,height:window.innerHeight}},getWindowScroll:function(){return{x:window.pageXOffset,y:window.pageYOffset}},setPosition:function(t){e.mdcRoot&&(e.styleLeft="left"in t?"".concat(t.left,"px"):"",e.styleRight="right"in t?"".concat(t.right,"px"):"",e.styleTop="top"in t?"".concat(t.top,"px"):"",e.styleBottom="bottom"in t?"".concat(t.bottom,"px"):"")},setMaxHeight:(t=(0,l.Z)((0,p.Z)().mark((function t(i){return(0,p.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.mdcRoot){t.next=3;break}return t.abrupt("return");case 3:return e.styleMaxHeight=i,t.next=6,e.updateComplete;case 6:e.styleMaxHeight="var(--mdc-menu-max-height, ".concat(i,")");case 7:case"end":return t.stop()}}),t)}))),function(e){return t.apply(this,arguments)})})}},{key:"onKeydown",value:function(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}},{key:"onBodyClick",value:function(t){this.stayOpenOnBodyClick||-1===t.composedPath().indexOf(this)&&this.close()}},{key:"registerBodyClick",value:function(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound,{passive:!0,capture:!0})}},{key:"deregisterBodyClick",value:function(){document.body.removeEventListener("click",this.onBodyClickBound,{capture:!0})}},{key:"onOpenChanged",value:function(t,e){this.mdcFoundation&&(t?this.mdcFoundation.open():void 0!==e&&this.mdcFoundation.close())}},{key:"close",value:function(){this.open=!1}},{key:"show",value:function(){this.open=!0}}]),i}(g.H);(0,h.__decorate)([(0,d.IO)(".mdc-menu-surface")],E.prototype,"mdcRoot",void 0),(0,h.__decorate)([(0,d.IO)("slot")],E.prototype,"slotElement",void 0),(0,h.__decorate)([(0,d.Cb)({type:Boolean}),(0,T.P)((function(t){this.mdcFoundation&&!this.fixed&&this.mdcFoundation.setIsHoisted(t)}))],E.prototype,"absolute",void 0),(0,h.__decorate)([(0,d.Cb)({type:Boolean})],E.prototype,"fullwidth",void 0),(0,h.__decorate)([(0,d.Cb)({type:Boolean}),(0,T.P)((function(t){this.mdcFoundation&&!this.absolute&&this.mdcFoundation.setFixedPosition(t)}))],E.prototype,"fixed",void 0),(0,h.__decorate)([(0,d.Cb)({type:Number}),(0,T.P)((function(t){this.mdcFoundation&&null!==this.y&&null!==t&&(this.mdcFoundation.setAbsolutePosition(t,this.y),this.mdcFoundation.setAnchorMargin({left:t,top:this.y,right:-t,bottom:this.y}))}))],E.prototype,"x",void 0),(0,h.__decorate)([(0,d.Cb)({type:Number}),(0,T.P)((function(t){this.mdcFoundation&&null!==this.x&&null!==t&&(this.mdcFoundation.setAbsolutePosition(this.x,t),this.mdcFoundation.setAnchorMargin({left:this.x,top:t,right:-this.x,bottom:t}))}))],E.prototype,"y",void 0),(0,h.__decorate)([(0,d.Cb)({type:Boolean}),(0,T.P)((function(t){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(t)}))],E.prototype,"quick",void 0),(0,h.__decorate)([(0,d.Cb)({type:Boolean,reflect:!0}),(0,T.P)((function(t,e){this.onOpenChanged(t,e)}))],E.prototype,"open",void 0),(0,h.__decorate)([(0,d.Cb)({type:Boolean})],E.prototype,"stayOpenOnBodyClick",void 0),(0,h.__decorate)([(0,d.SB)(),(0,T.P)((function(t){this.mdcFoundation&&this.mdcFoundation.setAnchorCorner(t)}))],E.prototype,"bitwiseCorner",void 0),(0,h.__decorate)([(0,d.Cb)({type:String}),(0,T.P)((function(t){if(this.mdcFoundation){var e="START"===t||"END"===t,i=null===this.previousMenuCorner,n=!i&&t!==this.previousMenuCorner;e&&(n||i&&"END"===t)&&(this.bitwiseCorner=this.bitwiseCorner^m.HX.RIGHT,this.mdcFoundation.flipCornerHorizontally(),this.previousMenuCorner=t)}}))],E.prototype,"menuCorner",void 0),(0,h.__decorate)([(0,d.Cb)({type:String}),(0,T.P)((function(t){if(this.mdcFoundation&&t){var e=b[t];"END"===this.menuCorner&&(e^=m.HX.RIGHT),this.bitwiseCorner=e}}))],E.prototype,"corner",void 0),(0,h.__decorate)([(0,d.SB)()],E.prototype,"styleTop",void 0),(0,h.__decorate)([(0,d.SB)()],E.prototype,"styleLeft",void 0),(0,h.__decorate)([(0,d.SB)()],E.prototype,"styleRight",void 0),(0,h.__decorate)([(0,d.SB)()],E.prototype,"styleBottom",void 0),(0,h.__decorate)([(0,d.SB)()],E.prototype,"styleMaxHeight",void 0),(0,h.__decorate)([(0,d.SB)()],E.prototype,"styleTransformOrigin",void 0);var x=(0,v.iv)(s||(s=(0,f.Z)([".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width,calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height,calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, .2, 1),height 250ms cubic-bezier(0, 0, .2, 1);box-shadow:0px 5px 5px -3px rgba(0,0,0,.2),0px 8px 10px 1px rgba(0,0,0,.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface,#fff);color:#000;color:var(--mdc-theme-on-surface,#000);border-radius:4px;border-radius:var(--mdc-shape-medium,4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:0}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity 75ms linear}.mdc-menu-surface[dir=rtl],[dir=rtl] .mdc-menu-surface{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index,8);min-width:112px;min-width:var(--mdc-menu-min-width,112px)}"]))),B=function(t){(0,c.Z)(i,t);var e=(0,u.Z)(i);function i(){return(0,a.Z)(this,i),e.apply(this,arguments)}return(0,r.Z)(i)}(E);B.styles=[x],B=(0,h.__decorate)([(0,d.Mo)("mwc-menu-surface")],B)},14265:function(t,e,i){var n=i(55418),o=i(43313),s=i(11336),r=/"/g,a=n("".replace);t.exports=function(t,e,i,n){var c=s(o(t)),u="<"+e;return""!==i&&(u+=" "+i+'="'+a(s(n),r,"&quot;")+'"'),u+">"+c+"</"+e+">"}},24089:function(t,e,i){var n=i(18431);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},80641:function(t,e,i){var n=i(68077),o=i(14265);n({target:"String",proto:!0,forced:i(24089)("anchor")},{anchor:function(t){return o(this,"a","name",t)}})},73855:function(t,e,i){var n=i(68077),o=i(14265);n({target:"String",proto:!0,forced:i(24089)("fixed")},{fixed:function(){return o(this,"tt","","")}})}}]);
//# sourceMappingURL=99608.FVv5qSdc174.js.map