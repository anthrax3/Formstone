/*! formstone v1.4.1 [transition.js] 2017-10-25 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core"],t):t(jQuery,Formstone)}(function(t,e){"use strict";function r(e){e.stopPropagation(),e.preventDefault();var r=e.data,a=e.originalEvent,i=r.target?r.$target:r.$el;r.property&&a.propertyName!==r.property||!t(a.target).is(i)||n(r)}function n(t){t.always||t.$el[s.namespaceClean]("destroy"),t.callback.apply(t.$el)}function a(t){var e=i(t.$check);o(t.styles,e)||n(t),t.styles=e}function i(e){var r,n,a,i={};if(e instanceof t&&(e=e[0]),u.getComputedStyle)for(var o=0,s=(r=u.getComputedStyle(e,null)).length;o<s;o++)n=r[o],a=r.getPropertyValue(n),i[n]=a;else if(e.currentStyle){r=e.currentStyle;for(n in r)i[n]=r[n]}return i}function o(e,r){if(t.type(e)!==t.type(r))return!1;for(var n in e){if(!e.hasOwnProperty(n))return!1;if(!e.hasOwnProperty(n)||!r.hasOwnProperty(n)||e[n]!==r[n])return!1}return!0}var s=e.Plugin("transition",{widget:!0,defaults:{always:!1,property:null,target:null},methods:{_construct:function(t,n){if(n){t.$target=this.find(t.target),t.$check=t.target?t.$target:this,t.callback=n,t.styles=i(t.$check),t.timer=null;var o=t.$check.css(e.transition+"-duration"),s=parseFloat(o);e.support.transition&&o&&s?this.on(c.transitionEnd,t,r):t.timer=l.startTimer(t.timer,50,function(){a(t)},!0)}},_destruct:function(t){l.clearTimer(t.timer,!0),this.off(c.namespace)},resolve:n}}),c=s.events,l=s.functions,u=e.window});