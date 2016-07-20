toggleInit=function(t){var e=$(t),a=$(e).attr("data-toggle"),o=$('[data-toggle-target="'+a+'"]').length?$('[data-toggle-target="'+a+'"]'):$(e).next("."+a);$(e).addClass("init"),$(o).addClass("init"),$(o).is(":visible")&&($(e).addClass("active"),$(o).addClass("active"),$(o).hasClass("dropdown-menu")&&dropdownXpos(e,o)),$(e).on("click",function(t){if($("[data-toggle]").not($(e)).removeClass("active"),$("[data-toggle-target], .dropdown-menu").not($(o)).removeClass("active").removeAttr("style"),$(o).is(":hidden")){if($(e).addClass("active"),$(o)[0].hasAttribute("data-toggle-animate")){var a=$(o).attr("data-toggle-animate"),s=""==a?"block":a;$(o).css("display",s).animate({opacity:1},150)}$(o).addClass("active"),$(o).hasClass("dropdown-menu")&&(dropdownXpos(e,o),$(o).oneClickOutside({callback:function(){$(e).removeClass("active"),$(o).removeClass("active").removeAttr("style")},calledFromClickInsideHandler:!0}))}else $(e).removeClass("active"),$(o)[0].hasAttribute("data-toggle-animate")?$(o).animate({opacity:0},150,function(){$(this).css("display","none")}):$(o).css({top:"",left:""}),$(o).removeClass("active"),$("body").removeClass("noscroll"),$(o).hasClass("dropdown-menu")&&$(o).oneClickOutside("off");t.preventDefault()})},dropdownXpos=function(t,e){var a=$(t).offset();"rtl"==$(t).css("direction")||a.left>=$(window).width()-200?$(e).css("right",$(window).width()-(a.left+$(t).outerWidth())):$(e).css("left",a.left),$(e).css("top",a.top+$(t).outerHeight()),$(e).find(".dropdown-menu-body").length&&$(e).find(".dropdown-menu-body").css("max-height",.5*$(window).height())},$("[data-toggle]").each(function(){toggleInit(this)});
$(".survey-filter-checkbox").each(function(){var e=$(this),c=$(e).find('input[type="checkbox"]');$(e).addClass("init"),$(c).is(":checked")&&$(e).addClass("checked"),$(c).on("change",function(d){$(c).is(":checked")?$(e).addClass("checked"):$(e).removeClass("checked")})});
$(".map").each(function(){function t(t,o,e){var n=session.deployment.surveys[t.properties.survey].color;return L.divIcon({className:"custom-map-marker "+e,html:'<svg class="iconic" style="fill:#'+n+';"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../../img/iconic-sprite.svg#map-marker"></use></svg><span class="iconic-bg" style="background-color:#'+n+';""></span>',iconSize:o,iconAnchor:o,popupAnchor:[-16,-32]})}function o(t,o){Array.isArray(e)&&o.bindPopup(s).on("click",function(o){var e=o.target.getPopup();e.setContent(Handlebars.partials.Postcard(t)).update(),toggleInit($(e._container).find("[data-toggle]"))})}var e=$(this)[0].hasAttribute("data-post-index")?session.deployment.posts[$(this).attr("data-post-index")]:session.deployment.posts,n=L.map(this,{scrollWheelZoom:!1});L.tileLayer("http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(n);var s=L.popup({minWidth:"300",maxWidth:"300",className:"pl-popup",offset:L.Point(0,0)}),i=new L.geoJson(e,{pointToLayer:function(o,e){return L.marker(e,{icon:t(o,[32,32])})},onEachFeature:o}).addTo(n);n.zoomControl.setPosition("bottomleft"),n.fitBounds(i.getBounds(),[24,24]),n.on("popupopen",function(t){toggleInit($(t.popup._contentNode.firstChild).find("[data-toggle]"))})});
var modalToggle=function(o){var a="undefined"!=typeof o?o:".modal";$(a).is(":visible")?($("body").removeClass("modal-visible"),setTimeout(function(){$(".modal").fadeOut("fast")},400)):($(".modal").not($(a)).fadeOut("fast"),modalYpos(),$(a).fadeIn("fast",function(){$("body").addClass("modal-visible")}))},modalYpos=function(){var o=$(window).scrollTop();o>0&&$(".modal-window").css("top",o+40),$(".modal-body").css("max-height",.66*$(window).height())};$("[data-modal], .modal-trigger").click(function(o){modalToggle($(this)[0].hasAttribute("data-modal")?"#"+$(this).attr("data-modal"):$(this).closest(".modal")),o.preventDefault()});
var tiersInit=function(e,t){var i="undefined"!=typeof e?e:$(".tiers"),s="undefined"!=typeof t?t:i.find(".tier.selected"),n=i.siblings(".tier.lite"),a=i.find(".payment"),d=$("#selected-tier");i.hasClass("show-payment")?($(document).trigger("tiers:deselect",{selected:null}),a.fadeOut(500),i.find(".tier").removeClass("selected"),i.removeClass("show-payment"),d.val(""),setTimeout(function(){n.slideDown(500).animate({opacity:1},500)},500)):($(document).trigger("tiers:select",{selected:$(s).attr("id")}),a.fadeIn(500),s.addClass("selected"),i.addClass("show-payment"),d.val($(s).attr("id")),setTimeout(function(){n.animate({opacity:0},500).slideUp(500)},500)),i.parent().animate({scrollTop:0},500)};$(document).ready(function(){$("[data-payment]").on("click",function(e){tiersInit($(this).closest(".tiers"),$(this).closest(".tier")),e.preventDefault()})});
var tourPin=function(t,o,e,n){var s=$(e).offset(),i=$(e).outerWidth(),a=$(e).outerHeight();$("#"+t).removeClass("active"),$("#"+t).hasClass("tour-modal")?$(".tour-pin").removeClass(function(t,o){return(o.match(/(^|\s)pin-\S+/g)||[]).join(" ")}).addClass("pin-enter"):!$("#"+t).hasClass("tour-modal")&&$("#"+o).hasClass("tour-modal")?$(".tour-pin").removeClass(function(t,o){return(o.match(/(^|\s)pin-\S+/g)||[]).join(" ")}).css("top","-100%"):$(".tour-pin").removeClass("pin-enter").toggleClass("pin-move"),"undefined"!=typeof e?("undefined"==typeof n?$(".tour-pin").css({top:"-100%",left:"50%"}):"top-left"===n?$(".tour-pin").css({top:s.top-10,left:s.left-10}):"top-right"===n?$(".tour-pin").css({top:s.top,left:s.left+i-10}):"bottom-left"===n?$(".tour-pin").css({top:s.top+a-10,left:s.left}):"bottom-right"===n?$(".tour-pin").css({top:s.top+a-10,left:s.left+i-10}):"center"===n?$(".tour-pin").css({top:s.top+a/2-10,left:s.left+i/2-10}):"top-center"===n?$(".tour-pin").css({top:s.top,left:s.left+i/2-10}):"bottom-center"===n&&$(".tour-pin").css({top:s.top+a-10,left:s.left+i/2-10}),$("#"+o).addClass("active").css({top:s.top+a+40}),$(window).width()>767&&(s.left+i/2>$(window).width()/2?$("#"+o).css({left:"65%"}):s.left+i/2<$(window).width()/2?$("#"+o).css({left:"35%"}):$("#"+o).css({left:"50%"})),s.top+a>$(window).height()/1.5&&$("html, body").animate({scrollTop:s.top-70},1e3)):($("html, body").animate({scrollTop:0},1e3),$("#"+o).addClass("active"))},tourStep=function(t,o){var e="undefined"==typeof t,n=$("body").attr("data-step"),s="undefined"!=typeof t?t:"start";$("body").attr("data-step",s),$("#"+s).hasClass("tour-modal")?($(".tour-mask").fadeIn(1e3),tourPin(n,s)):($(".tour-mask").fadeOut(500),tourPin(n,s,'[data-message="'+s+'"]',"bottom-center")),0!=e||o||(history.pushState?history.pushState(null,null,"#"+s):window.location.hash=s)},tourStepLookup=function(t){return window.location.hash?window.location.hash.substr(1):"undefined"!=typeof t?t:void 0},tourInit=function(t){$("*").not("[data-cue], [data-payment], .tour-link").on("click",function(t){t.preventDefault()}).off("click"),$("[data-cue]").on("click",function(){tourStep($(this).attr("data-cue"))}),setTimeout(function(){tourStep(tourStepLookup(t),!0)},500),window.onpopstate=function(t){tourStep(tourStepLookup())}};