jQuery(document).ready(function(u){"use strict";var e,n,i,t=eggsAtts,o=u(t.target_search),r=[1,o.length-1],l=u(".easter-egg-container");function s(e,t){var n=u(e),i=l.find(".easter-egg-content"),o=u(i.slice(t,t+1));if(i.hide(),o.show(),0<o.text().length){var r=n.offset().top,s=l.outerHeight(),a=l.outerWidth(),f=s<window.innerHeight-(r-u(window).scrollTop()),g=f?r:r-s,h=n.offset().left,c=f?1.5*n.height():.5*-n.height(),d=a>window.innerWidth-h?window.innerWidth-a-10-h:0;l.css("top",g+"px").css("left",h+"px").css("transform","translate("+d+"px,"+c+"px)").fadeIn()}}function a(){0===u(".easter-egg-container:hover").length&&l.hide()}n=(e=o).filter(function(e){return-1<r.indexOf(e)}),i=e.filter(function(e){return-1===r.indexOf(e)}),n.addClass("active egg-highlight"),n.mouseover(function(e){i.addClass("active"),n.off("mouseover");var t=u(".easter-egg");s(e.target,t.index(this)),t.mouseover(function(e){s(e.target,t.index(this))}),t.mouseleave(function(){setTimeout(a,200)}),l.mouseleave(function(){l.hide()})})});