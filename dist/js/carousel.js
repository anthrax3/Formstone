/*! formstone v1.4.1 [carousel.js] 2017-10-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./touch"],e):e(jQuery,Formstone)}(function(e,t){"use strict";function i(){z=e(L.base)}function n(e){e.enabled&&(N.clearTimer(e.autoTimer),e.enabled=!1,e.$subordinate.off(H.update),this.removeClass([X.enabled,X.animated].join(" ")).off(H.namespace),e.$canister.fsTouch("destroy").off(H.namespace).attr("style","").css(A,"none"),e.$items.css({width:"",height:""}).removeClass([X.visible,L.item_previous,L.item_next].join(" ")),e.$images.off(H.namespace),e.$controlItems.off(H.namespace),e.$pagination.html("").off(H.namespace),h(e),e.useMargin?e.$canister.css({marginLeft:""}):e.$canister.css(E,""),e.index=0)}function a(e){e.enabled||(e.enabled=!0,this.addClass(X.enabled),e.$controlItems.on(H.click,e,p),e.$pagination.on(H.click,L.page,e,g),e.$items.on(H.click,e,I),e.$subordinate.on(H.update,e,W),W({data:e},0),e.$canister.fsTouch({axis:"x",pan:!0,swipe:!0}).on(H.panStart,e,C).on(H.pan,e,x).on(H.panEnd,e,w).on(H.swipe,e,P).on(H.focusIn,e,M).css(A,""),o(e),e.$images.on(H.load,e,u),e.autoAdvance&&(e.autoTimer=N.startTimer(e.autoTimer,e.autoTime,function(){m(e)},!0)),s.call(this,e))}function s(e){if(e.enabled){var t,i,n,a,s,o,r;if(e.count=e.$items.length,e.count<1)return h(e),void e.$canister.css({height:""});for(this.removeClass(X.animated),e.containerWidth=e.$container.outerWidth(!1),e.visible=b(e),e.perPage=e.paged?1:e.visible,e.itemMarginLeft=parseInt(e.$items.eq(0).css("marginLeft")),e.itemMarginRight=parseInt(e.$items.eq(0).css("marginRight")),e.itemMargin=e.itemMarginLeft+e.itemMarginRight,isNaN(e.itemMargin)&&(e.itemMargin=0),e.itemWidth=(e.containerWidth-e.itemMargin*(e.visible-1))/e.visible,e.itemHeight=0,e.pageWidth=e.paged?e.itemWidth:e.containerWidth,e.pageCount=Math.ceil(e.count/e.perPage),e.canisterWidth=e.single?e.containerWidth:(e.pageWidth+e.itemMargin)*e.pageCount,e.$canister.css({width:e.matchWidth?e.canisterWidth:1e6,height:""}),e.$items.css({width:e.matchWidth?e.itemWidth:"",height:""}).removeClass([X.visible,X.item_previous,X.item_next].join(" ")),e.pages=[],i=0,0;i<e.count;i+=e.perPage){for(s=0,o=0,(a=e.$items.slice(i,i+e.perPage)).length<e.perPage&&(a=0===i?e.$items:e.$items.slice(e.$items.length-e.perPage)),r=(e.rtl?a.eq(a.length-1):a.eq(0)).position().left,n=0;n<a.length;n++)s+=a.eq(n).outerWidth(!0),(t=a.eq(n).outerHeight())>o&&(o=t);e.pages.push({left:e.rtl?r-(e.canisterWidth-s):r,height:o,width:s,$items:a}),o>e.itemHeight&&(e.itemHeight=o),0}e.paged&&(e.pageCount-=e.count%e.visible),e.pageCount<=0&&(e.pageCount=1),e.maxMove=-e.pages[e.pageCount-1].left,e.autoHeight?e.$canister.css({height:e.pages[0].height}):e.matchHeight&&e.$items.css({height:e.itemHeight});var l="";for(i=0;i<e.pageCount;i++)l+='<button type="button" class="'+X.page+'">'+(i+1)+"</button>";e.$pagination.html(l),e.pageCount<=1?h(e):v(e),e.$paginationItems=e.$pagination.find(L.page),f(e,e.index,!1),setTimeout(function(){e.$el.addClass(X.animated)},5)}}function o(e){e.$items=e.$canister.children().not(":hidden").addClass(X.item),e.$images=e.$canister.find("img"),e.totalImages=e.$images.length}function r(e,t){e.$images.off(H.namespace),!1!==t&&e.$canister.html(t),e.index=0,o(e),s.call(this,e)}function l(e,t,i,n,a){e.enabled&&(N.clearTimer(e.autoTimer),void 0===a&&(a=!0),f(e,t-1,a,i,n))}function c(e){var t=e.index-1;e.infinite&&t<0&&(t=e.pageCount-1),f(e,t)}function d(e){var t=e.index+1;e.infinite&&t>=e.pageCount&&(t=0),f(e,t)}function u(e){var t=e.data;t.resizeTimer=N.startTimer(t.resizeTimer,1,function(){s.call(t.$el,t)})}function m(e){var t=e.index+1;t>=e.pageCount&&(t=0),f(e,t)}function p(t){N.killEvent(t);var i=t.data,n=i.index+(e(t.currentTarget).hasClass(X.control_next)?1:-1);N.clearTimer(i.autoTimer),f(i,n)}function g(t){N.killEvent(t);var i=t.data,n=i.$paginationItems.index(e(t.currentTarget));N.clearTimer(i.autoTimer),f(i,n)}function f(t,i,n,a,s){if(i<0&&(i=t.infinite?t.pageCount-1:0),i>=t.pageCount&&(i=t.infinite?0:t.pageCount-1),!(t.count<1)){t.pages[i]&&(t.leftPosition=-t.pages[i].left),t.leftPosition=_(t,t.leftPosition),t.useMargin?t.$canister.css({marginLeft:t.leftPosition}):!1===n?(t.$canister.css(A,"none").css(E,"translateX("+t.leftPosition+"px)"),setTimeout(function(){t.$canister.css(A,"")},5)):t.$canister.css(E,"translateX("+t.leftPosition+"px)"),t.$items.removeClass([X.visible,X.item_previous,X.item_next].join(" "));for(var o=0,r=t.pages.length;o<r;o++)o===i?t.pages[o].$items.addClass(X.visible).attr("aria-hidden","false"):t.pages[o].$items.not(t.pages[i].$items).addClass(o<i?X.item_previous:X.item_next).attr("aria-hidden","true");t.autoHeight&&t.$canister.css({height:t.pages[i].height}),!1!==n&&!0!==a&&i!==t.index&&(t.infinite||i>-1&&i<t.pageCount)&&t.$el.trigger(H.update,[i]),t.index=i,t.linked&&!0!==s&&e(t.linked).not(t.$el)[y]("jumpPage",t.index+1,!0,!0),$(t)}}function h(e){e.$controls.removeClass(X.visible),e.$controlItems.removeClass(X.visible),e.$pagination.removeClass(X.visible)}function v(e){e.$controls.addClass(X.visible),e.$controlItems.addClass(X.visible),e.$pagination.addClass(X.visible)}function $(e){e.$paginationItems.removeClass(X.active).eq(e.index).addClass(X.active),e.infinite?e.$controlItems.addClass(X.visible):e.pageCount<1?e.$controlItems.removeClass(X.visible):(e.$controlItems.addClass(X.visible),e.index<=0?e.$controlPrevious.removeClass(X.visible):(e.index>=e.pageCount-1||!e.single&&e.leftPosition===e.maxMove)&&e.$controlNext.removeClass(X.visible))}function b(i){var n=1;if(i.single)return n;if("array"===e.type(i.show))for(var a in i.show)i.show.hasOwnProperty(a)&&(t.support.matchMedia?i.show[a].mq.matches&&(n=i.show[a].count):i.show[a].width<t.fallbackWidth&&(n=i.show[a].count));else n=i.show;return i.fill&&i.count<n?i.count:n}function C(t,i){var n=t.data;if(N.clearTimer(n.autoTimer),!n.single){if(n.useMargin)n.leftPosition=parseInt(n.$canister.css("marginLeft"));else{var a=n.$canister.css(E).split(",");n.leftPosition=parseInt(a[4])}if(n.$canister.css(A,"none").css("will-change","transform"),x(t),n.linked&&!0!==i){var s=t.deltaX/n.pageWidth;n.rtl&&(s*=-1),e(n.linked).not(n.$el)[y]("panStart",s)}}n.isTouching=!0}function x(t,i){var n=t.data;if(!n.single&&(n.touchLeft=_(n,n.leftPosition+t.deltaX),n.useMargin?n.$canister.css({marginLeft:n.touchLeft}):n.$canister.css(E,"translateX("+n.touchLeft+"px)"),n.linked&&!0!==i)){var a=t.deltaX/n.pageWidth;n.rtl&&(a*=-1),e(n.linked).not(n.$el)[y]("pan",a)}}function w(t,i){var n=t.data,a=Math.abs(t.deltaX),s=k(n,t),o=!1;if(n.didPan=!1,!n.single){var r,l,c=Math.abs(n.touchLeft),d=!1,u=n.rtl?"right":"left";if(t.directionX===u)for(r=0,l=n.pages.length;r<l;r++)d=n.pages[r],c>Math.abs(d.left)+20&&(o=r+1);else for(r=n.pages.length-1,l=0;r>=l;r--)d=n.pages[r],c<Math.abs(d.left)&&(o=r-1)}!1===o&&(o=a<50?n.index:n.index+s),o!==n.index&&(n.didPan=!0),n.linked&&!0!==i&&e(n.linked).not(n.$el)[y]("panEnd",o),T(n,o)}function P(t,i){var n=t.data,a=k(n,t),s=n.index+a;n.linked&&!0!==i&&e(n.linked).not(n.$el)[y]("swipe",t.directionX),T(n,s)}function T(e,t){e.$canister.css(A,"").css("will-change",""),f(e,t),e.isTouching=!1}function I(t){var i=t.data,n=e(t.currentTarget);if(!i.didPan&&(n.trigger(H.itemClick),i.controller)){var a=i.$items.index(n);W(t,a),i.$subordinate[y]("jumpPage",a+1,!0)}}function M(t){var i=t.data;if(i.enabled&&!i.isTouching){N.clearTimer(i.autoTimer),i.$container.scrollLeft(0);var n,a=e(t.target);a.hasClass(X.item)?n=a:a.parents(L.item).length&&(n=a.parents(L.item).eq(0));for(var s=0;s<i.pageCount;s++)if(i.pages[s].$items.is(n)){f(i,s);break}}}function W(e,t){var i=e.data;if(i.controller){var n=i.$items.eq(t);i.$items.removeClass(X.active),n.addClass(X.active);for(var a=0;a<i.pageCount;a++)if(i.pages[a].$items.is(n)){f(i,a,!0,!0);break}}}function _(e,t){return isNaN(t)?t=0:e.rtl?(t>e.maxMove&&(t=e.maxMove),t<0&&(t=0)):(t<e.maxMove&&(t=e.maxMove),t>0&&(t=0)),t}function k(e,t){return e.rtl?"right"===t.directionX?1:-1:"left"===t.directionX?1:-1}var q=t.Plugin("carousel",{widget:!0,defaults:{autoAdvance:!1,autoHeight:!1,autoTime:8e3,contained:!0,controls:!0,customClass:"",fill:!1,infinite:!1,labels:{next:"Next",previous:"Previous"},matchHeight:!1,matchWidth:!0,maxWidth:1/0,minWidth:"0px",paged:!1,pagination:!0,rtl:!1,show:1,single:!1,theme:"fs-light",useMargin:!1},classes:["ltr","rtl","viewport","wrapper","container","canister","item","item_previous","item_next","controls","controls_custom","control","control_previous","control_next","pagination","page","animated","enabled","visible","active","auto_height","contained","single"],events:{itemClick:"itemClick",update:"update"},methods:{_construct:function(s){var r;s.didPan=!1,s.carouselClasses=[X.base,s.theme,s.customClass,s.rtl?X.rtl:X.ltr],s.maxWidth=s.maxWidth===1/0?"100000px":s.maxWidth,s.mq="(min-width:"+s.minWidth+") and (max-width:"+s.maxWidth+")",s.customControls="object"===e.type(s.controls)&&s.controls.previous&&s.controls.next,s.customPagination="string"===e.type(s.pagination),s.id=this.attr("id"),s.id?s.ariaId=s.id:(s.ariaId=s.rawGuid,this.attr("id",s.ariaId)),t.support.transform||(s.useMargin=!0);var l="",c="",d=[X.control,X.control_previous].join(" "),u=[X.control,X.control_next].join(" ");s.controls&&!s.customControls&&(l+='<div class="'+X.controls+'" aria-label="carousel controls" aria-controls="'+s.ariaId+'">',l+='<button type="button" class="'+d+'" aria-label="'+s.labels.previous+'">'+s.labels.previous+"</button>",l+='<button type="button" class="'+u+'" aria-label="'+s.labels.next+'">'+s.labels.next+"</button>",l+="</div>"),s.pagination&&!s.customPagination&&(c+='<div class="'+X.pagination+'" aria-label="carousel pagination" aria-controls="'+s.ariaId+'" role="navigation">',c+="</div>"),s.autoHeight&&s.carouselClasses.push(X.auto_height),s.contained&&s.carouselClasses.push(X.contained),s.single&&s.carouselClasses.push(X.single),this.addClass(s.carouselClasses.join(" ")).wrapInner('<div class="'+X.wrapper+'" aria-live="polite"><div class="'+X.container+'"><div class="'+X.canister+'"></div></div></div>').append(l).wrapInner('<div class="'+X.viewport+'"></div>').append(c),s.$viewport=this.find(L.viewport).eq(0),s.$container=this.find(L.container).eq(0),s.$canister=this.find(L.canister).eq(0),s.$pagination=this.find(L.pagination).eq(0),s.$controlPrevious=s.$controlNext=e(""),s.customControls?(s.$controls=e(s.controls.container).addClass([X.controls,X.controls_custom].join(" ")),s.$controlPrevious=e(s.controls.previous).addClass(d),s.$controlNext=e(s.controls.next).addClass(u)):(s.$controls=this.find(L.controls).eq(0),s.$controlPrevious=s.$controls.find(L.control_previous),s.$controlNext=s.$controls.find(L.control_next)),s.$controlItems=s.$controlPrevious.add(s.$controlNext),s.customPagination&&(s.$pagination=e(s.pagination).addClass([X.pagination])),s.$paginationItems=s.$pagination.find(L.page),s.index=0,s.enabled=!1,s.leftPosition=0,s.autoTimer=null,s.resizeTimer=null;var m=this.data(j+"-linked");s.linked=!!m&&"[data-"+j+'-linked="'+m+'"]',s.linked&&(s.paged=!0);var p=this.data(j+"-controller-for")||"";if(s.$subordinate=e(p),s.$subordinate.length&&(s.controller=!0),"object"===e.type(s.show)){var g=s.show,f=[],h=[];for(r in g)g.hasOwnProperty(r)&&h.push(r);h.sort(N.sortAsc);for(r in h)h.hasOwnProperty(r)&&f.push({width:parseInt(h[r]),count:g[h[r]],mq:window.matchMedia("(min-width: "+parseInt(h[r])+"px)")});s.show=f}o(s),e.fsMediaquery("bind",s.rawGuid,s.mq,{enter:function(){a.call(s.$el,s)},leave:function(){n.call(s.$el,s)}}),i(),s.carouselClasses.push(X.enabled),s.carouselClasses.push(X.animated)},_destruct:function(t){N.clearTimer(t.autoTimer),N.clearTimer(t.resizeTimer),n.call(this,t),e.fsMediaquery("unbind",t.rawGuid),t.id!==t.ariaId&&this.removeAttr("id"),t.$controlItems.removeClass([L.control,X.control_previous,L.control_next,L.visible].join(" ")).off(H.namespace),t.$images.off(H.namespace),t.$canister.fsTouch("destroy"),t.$items.removeClass([X.item,X.visible,L.item_previous,L.item_next].join(" ")).unwrap().unwrap().unwrap().unwrap(),t.controls&&!t.customControls&&t.$controls.remove(),t.customControls&&t.$controls.removeClass([X.controls,X.controls_custom,X.visible].join(" ")),t.pagination&&!t.customPagination&&t.$pagination.remove(),t.customPagination&&t.$pagination.html("").removeClass([X.pagination,X.visible].join(" ")),this.removeClass(t.carouselClasses.join(" ")),i()},_resize:function(e){N.iterate.call(z,s)},disable:n,enable:a,jump:l,previous:c,next:d,jumpPage:l,previousPage:c,nextPage:d,jumpItem:function(e,t,i,n,a){if(e.enabled){N.clearTimer(e.autoTimer);var s=e.$items.eq(t-1);void 0===a&&(a=!0);for(var o=0;o<e.pageCount;o++)if(e.pages[o].$items.is(s)){f(e,o,a,i,n);break}}},reset:function(e){e.enabled&&r.call(this,e,!1)},resize:s,update:r,panStart:function(e,t){if(N.clearTimer(e.autoTimer),!e.single){if(e.rtl&&(t*=-1),e.useMargin)e.leftPosition=parseInt(e.$canister.css("marginLeft"));else{var i=e.$canister.css(E).split(",");e.leftPosition=parseInt(i[4])}e.$canister.css(A,"none"),x({data:e,deltaX:e.pageWidth*t},!0)}e.isTouching=!0},pan:function(e,t){if(!e.single){e.rtl&&(t*=-1);var i=e.pageWidth*t;e.touchLeft=_(e,e.leftPosition+i),e.useMargin?e.$canister.css({marginLeft:e.touchLeft}):e.$canister.css(E,"translateX("+e.touchLeft+"px)")}},panEnd:function(e,t){T(e,t)},swipe:function(e,t){P({data:e,directionX:t},!0)}}}),j=q.namespace,y=q.namespaceClean,L=q.classes,X=L.raw,H=q.events,N=q.functions,z=[],E=t.transform,A=t.transition});