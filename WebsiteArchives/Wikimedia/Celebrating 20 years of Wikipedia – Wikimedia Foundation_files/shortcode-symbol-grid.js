jQuery(document).ready(function(e){"use strict";var t="#"+gridAtts.id,i=e(t),d=i.width(),n=i.find(".grid-item.grid-symbol"),r=[i.find(".grid-item.grid-text.grid-text-1"),i.find(".grid-item.grid-text.grid-text-2"),i.find(".grid-item.grid-text.grid-text-3")];function o(e,i,n){var r=n%2,t=0===n?6e3+1200*i:9e3;768<=d&&e.delay(t).animate({opacity:r},{duration:200,start:function(){e.find("h2").hide(),e.css("z-index",1)},complete:function(){var t=n+1;e.find("h2").fadeIn(),0==r&&e.css("z-index",-1),o(e,i,t)}})}function s(){var t=Math.floor(Math.random()*n.length);e(n[t]).toggleClass("reverse"),setTimeout(s,1200)}n.mouseenter(function(){e(this).toggleClass("reverse")}),setTimeout(function(){for(var t=0;t<r.length;t++)o(r[t],t,0);s()},4e3)});