var FSS;FSS=function(){function e(e,t){this.element=e;"[object Object]"===Object.prototype.toString.call(t)?this.options=t:this.options={};this.init();this.gotoslide(0);this.autoplay&&this.play()}var t,n,r,i,s,o;e.prototype.pause=function(){clearTimeout(this.interval)};e.prototype.play=function(){clearTimeout(this.interval);this.interval=setTimeout(t,this.duration,this)};e.prototype.next=function(){this.gotoslide(this.currentIndex<this.slides.length-1?this.currentIndex+1:0)};e.prototype.gotoslide=function(e){var t;this.currentIndex!==e&&((t=this.element.parentNode.querySelector(".visible"))&&t===this.slideA?(this.slideB.style.backgroundPosition="0px "+ -1*this.options.height*e+"px",this.slideA.className=this.slideA.className.replace(/(\s|^)visible(\s|$)/,""),this.slideB.className+=" visible"):(this.slideA.style.backgroundPosition="0px "+ -1*this.options.height*e+"px",this.slideB.className=this.slideB.className.replace(/(\s|^)visible(\s|$)/,""),this.slideA.className+=" visible"),(t=this.navigation.querySelector(".active"))&&t.removeAttribute("class"),t=document.createAttribute("class"),t.nodeValue="active",this.navigation.childNodes.item(e).setAttributeNode(t),t=-1===this.currentIndex?0:this.currentIndex,this.slides[t].el.className=this.slides[t].el.className.replace(/(\s|^)active(\s|$)/,""),this.slides[e].el.className+=" active",this.currentIndex=e)};e.prototype.init=function(){var e,t,r,u,a;t=this;this.options.width||(this.options.width=this.element.offsetWidth);this.options.height||(this.options.height=this.element.offsetHeight);this.autoplay=!0;this.duration=5e3;this.currentIndex=-1;this.element.className.match(/(\s|^)fss(\s|$)/)||(this.element.className+=" fss");if(this.caption=this.element.querySelector(".captions")){e=this.caption.firstChild;u=0;for(this.slides=[];e;)e&&3!==e.nodeType&&this.slides.push({ndx:u++,el:e}),e=e.nextSibling;this.container=n("div","slide-container");this.slideA=n("div","slide-a visible");this.slideB=n("div","slide-b");this.element.insertBefore(this.container,this.caption);this.container.appendChild(this.slideA);this.container.appendChild(this.slideB);this.slideA.style.width=this.slideB.style.width=this.options.width+"px";this.slideA.style.height=this.slideB.style.height=this.options.height+"px";this.navigation=n("ul","fss-nav");r=this.slides;e=u=0;for(a=r.length;u<a;e=++u)r=n("li"),r.appendChild(document.createTextNode(""+(e+1))),this.navigation.appendChild(r),r.onclick=o(r,this);this.container.appendChild(this.navigation);this.container.onmouseover=function(e){return s(e,t)};this.container.onmouseout=function(e){return i(e,t)}}};n=function(e,t){var n,r;r=document.createElement(e);if(!t)return r;n=document.createAttribute("class");n.nodeValue=t;r.setAttributeNode(n);return r};r=function(e,t){if(e===t)return!1;for(;e&&e!==t;)e=e.parentNode;return e===t};t=function(e){e&&(e.next(),e.play())};o=function(e,t){return function(){var n;t.pause();for(n=0;t.navigation.childNodes.item(n);){if(t.navigation.childNodes.item(n)===e){t.gotoslide(n);break}n++}}};s=function(e,t){if(e){if(!r(e.target,t.container))return e.cancelBubble=!0,e.stopPropagation(),!1;t.pause();t.navigation.className.match(/(\s|^)active(\s|$)/)||(t.navigation.className+=" active")}};i=function(e,t){if(r(e.relatedTarget,t.container))return e.cancelBubble=!0,e.stopPropagation(),!1;t.play();t.navigation.className.match(/(\s|^)active(\s|$)/)&&(t.navigation.className=t.navigation.className.replace(/(\s|^)active(\s|$)/,""))};return e}();var FLB;FLB=function(){function e(e,t){this.element=e;"[object Object]"===Object.prototype.toString.call(t)?this.options=t:this.options={};this.options.resizeImage=!1;this.init()}var t,n,r,i;e.prototype.init=function(){var e;e=this;this.element.onclick=function(n){return t(n,e)}};e.prototype.createOverlay=function(e){var t;t=this;this.overlay=document.createElement("div");this.overlay.setAttribute("id","flb-overlay");this.overlay.innerHTML='<div id="flb-container"><a href="#" title="Close" class="closingElement">&nbsp;</a></div><div id="flb-content"><a id="flb-image" class="closingElement" href="#" title="Close"></a><a id="flb-close" class="closingElement" href="#" title="Close">&nbsp;</a></div>';document.getElementsByTagName("body")[0].appendChild(this.overlay);this.container=document.getElementById("flb-content");this.container.style.width="100px";this.container.style.height="100px";this.container.style.margin="-50px 0 0 -50px";this.container.onclick=this.overlay.onclick=function(e){return n(e,t)};this.imgContainer=document.getElementById("flb-image");this.imgContainer.style.background="url("+e+") no-repeat 50% 50%";this.image=new Image;this.image.onload=function(e){return r(e,t)};this.image.src=e};r=function(e,t){var n,r,s;t.options.resizeImage?(s=document.documentElement.clientHeight-40,t.image.height<s?(n=t.image.height,r=t.image.width):(n=s,r=Math.round(s*t.image.width/t.image.height),t.image.height=n,t.image.width=r)):(n=t.image.height,r=t.image.width);setTimeout(function(){return i(t.container,r,n)},600)};i=function(e,t,n){e.style.width=t+"px";e.style.height=n+"px";e.style.margin="-"+(n+28)/2+"px 0 0 -"+t/2+"px";e.setAttribute("class","active")};t=function(e,t){t.createOverlay(e.target.getAttribute("href"));e.cancelBubble=!0;e.stopPropagation();return!1};n=function(e,t){t.container.setAttribute("class","");document.getElementsByTagName("body")[0].removeChild(t.overlay)};return e}();window.onload=function(){var e,t,n,r,i,s,o,u;if(document.querySelector){r=function(e,t){return function(){var n,r,i,s,o;n=e.getAttribute("rel");e.className+=" active";i=0;for(s=t.length;i<s;i++)r=t[i],r.className.match(/(\s|^)active(\s|$)/)&&(r.className=r.className.replace(/(\s|^)active(\s|$)/,""));i=document.querySelectorAll("#projects_list li");s=0;for(o=i.length;s<o;s++)r=i[s],r.className.match(/(\s|^)deselected(\s|$)/)&&(r.className=r.className.replace(/(\s|^)deselected(\s|$)/,"")),"all"!==n&&!r.className.match(RegExp("(\\s|^)"+n+"(\\s|$)"))&&(r.className.match(/(\s|^)deselected(\s|$)/)||(r.className+=" deselected"))}};i=function(t,n,r,i){var s;s=r?t.querySelector(r).firstChild.nodeValue:t.firstChild.nodeValue;return function(){e(n,s,i);t.getAttribute("target")?window.open(this.href,this.getAttribute("target")):setTimeout('document.location = "'+t.href+'"',100);return!1}};s=function(e,t,n,r){var s,o,u;if(e){o=0;for(u=e.length;o<u;o++)s=e[o],s.onclick=i(s,t,n,r);return!1}};e=function(e,t,n,r){try{_gaq.push(["_trackEvent",e,t,n,r])}catch(i){print(i)}};n=document.querySelectorAll("#hero_slideshow .slideshow");if(n.length){o=0;for(u=n.length;o<u;o++)t=n[o],new FSS(t,{width:725,height:210})}n=document.querySelectorAll("a[rel=simplebox]");if(n.length){o=0;for(u=n.length;o<u;o++)t=n[o],new FLB(t,{})}if(document.querySelector("#p72")){n=document.querySelectorAll("#projects_navigation dd");o=0;for(u=n.length;o<u;o++)t=n[o],t.onclick=r(t,n)}(r=document.querySelector("#post-tweet"))&&(r.onclick=function(){var t,n;e("Tweet Post",this.firstChild.nodeValue,document.title);t=window.screen.width/2-275;n=window.screen.height/2-235;window.open(this.href,this.getAttribute("target"),"width=550, height=470, location=0, left="+t+", top="+n);return!1});s(document.querySelectorAll("#menu-primary li a"),"Top Nav",null,document.title);s(document.querySelectorAll("#bio_pic"),"Bio Pic",null,document.title);s(document.querySelectorAll("#previous-post a"),"Previous Post",".arrow",document.title);s(document.querySelectorAll("#download_follow a.twitter, #download_follow a.rss"),"Projects Follow",null,document.title);s(document.querySelectorAll("#other_projects #projects_list li a"),"Other Projects","small",document.title);s(document.querySelectorAll("#footer_main_promo"),"Footer Promo",".header",document.title);s(document.querySelectorAll("#text-12 .recommended a"),"Recommended",null,document.title);s(document.querySelectorAll("#page-footer #twitter-follow a.button"),"Footer Twitter",null,document.title)}};window.error=function(e,t,n){_gaq.push(["_trackEvent","Exceptions","Application","["+t+" ("+n+")] "+e,null,!0])};