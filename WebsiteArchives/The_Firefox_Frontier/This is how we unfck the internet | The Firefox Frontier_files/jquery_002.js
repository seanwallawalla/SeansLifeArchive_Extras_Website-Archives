/*!
 * @preserve
 * jquery.scrolldepth.js | v1.0-rx
 * Copyright (c) 2016 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 * This incorporates the gtag modifications from jwahdatehagh
 * https://github.com/robflaherty/jquery-scrolldepth/commit/794fc523df040be6ee2fb1e80a7ffc54e8906be2
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var n,t,o,r,i,l={minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0,nonInteraction:!0,gaGlobal:!1,gtmOverride:!1,trackerName:!1,dataLayer:"dataLayer"},a=e(window),c=[],p=!1,u=0;return e.scrollDepth=function(h){var g=+new Date;function s(e,l,a,c){var p=h.trackerName?h.trackerName+".send":"send";i?(i({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:e,eventLabel:l,eventValue:1,eventNonInteraction:h.nonInteraction}),h.pixelDepth&&arguments.length>2&&a>u&&(u=a,i({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:"Pixel Depth",eventLabel:f(a),eventValue:1,eventNonInteraction:h.nonInteraction})),h.userTiming&&arguments.length>3&&i({event:"ScrollTiming",eventCategory:"Scroll Depth",eventAction:e,eventLabel:l,eventTiming:c}),r&&gtag("event","scroll_depth",{event_category:"Scroll Depth",event_label:l,value:a})):(n&&(window[o](p,"event","Scroll Depth",e,l,1,{nonInteraction:h.nonInteraction}),h.pixelDepth&&arguments.length>2&&a>u&&(u=a,window[o](p,"event","Scroll Depth","Pixel Depth",f(a),1,{nonInteraction:h.nonInteraction})),h.userTiming&&arguments.length>3&&window[o](p,"timing","Scroll Depth",e,c,l)),t&&(_gaq.push(["_trackEvent","Scroll Depth",e,l,1,h.nonInteraction]),h.pixelDepth&&arguments.length>2&&a>u&&(u=a,_gaq.push(["_trackEvent","Scroll Depth","Pixel Depth",f(a),1,h.nonInteraction])),h.userTiming&&arguments.length>3&&_gaq.push(["_trackTiming","Scroll Depth",e,c,l,100])))}function f(e){return(250*Math.floor(e/250)).toString()}function v(){var n,t,o,r,i,l,u,f;p=!0,a.on("scroll.scrollDepth",(n=function(){var n=e(document).height(),t=window.innerHeight?window.innerHeight:a.height(),o=a.scrollTop()+t,r=function(e){return{"25%":parseInt(.25*e,10),"50%":parseInt(.5*e,10),"75%":parseInt(.75*e,10),"100%":e-5}}(n),i=+new Date-g;if(c.length>=h.elements.length+(h.percentage?4:0))return a.off("scroll.scrollDepth"),void(p=!1);h.elements&&function(n,t,o){e.each(n,function(n,r){-1===e.inArray(r,c)&&e(r).length&&t>=e(r).offset().top&&(s("Elements",r,t,o),c.push(r))})}(h.elements,o,i),h.percentage&&function(n,t,o){e.each(n,function(n,r){-1===e.inArray(n,c)&&t>=r&&(s("Percentage",n,t,o),c.push(n))})}(r,o,i)},t=500,l=null,u=0,f=function(){u=new Date,l=null,i=n.apply(o,r)},function(){var e=new Date;u||(u=e);var a=t-(e-u);return o=this,r=arguments,a<=0?(clearTimeout(l),l=null,u=e,i=n.apply(o,r)):l||(l=setTimeout(f,a)),i}))}h=e.extend({},l,h),e(document).height()<h.minHeight||(h.gaGlobal?(n=!0,o=h.gaGlobal):"function"==typeof gtag?(r=!0,o="gtag"):"function"==typeof ga?(n=!0,o="ga"):"function"==typeof __gaTracker&&(n=!0,o="__gaTracker"),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(t=!0),"function"==typeof h.eventHandler?i=h.eventHandler:void 0===window[h.dataLayer]||"function"!=typeof window[h.dataLayer].push||h.gtmOverride||(i=function(e){window[h.dataLayer].push(e)}),e.scrollDepth.reset=function(){c=[],u=0,a.off("scroll.scrollDepth"),v()},e.scrollDepth.addElements=function(n){void 0!==n&&e.isArray(n)&&(e.merge(h.elements,n),p||v())},e.scrollDepth.removeElements=function(n){void 0!==n&&e.isArray(n)&&e.each(n,function(n,t){var o=e.inArray(t,h.elements),r=e.inArray(t,c);-1!=o&&h.elements.splice(o,1),-1!=r&&c.splice(r,1)})},v())},e.scrollDepth});