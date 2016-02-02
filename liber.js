/**
 * @author soyoes 
 * @Copywrite (c) 2013, Liberhood, http://liberhood.com 
 * @URL : https://github.com/soyoes/liberjs
 * @license : MIT License
 */

function $id(e){var t="loaded"===$app.status&&$this&&$this.layer;return t?$this.layer.find("#"+e):document.getElementById(e)}var $conf=$conf||{},$ui={},$browser=function(){var e,t=navigator.userAgent,n=navigator.platform,r={},i=t.match(/(MSIE|Trident|Firefox|Chrome|Safari|Opera)[\/\s](\d+\.*\d*)/i);if(r.name=i?i[1].toLowerCase():"unknown",r.ver=i?parseFloat(i[2]):0,"trident"==r.name&&(r.name="msie",i=t.match(/rv:(\d+\.?\d*)/),i&&(r.ver=parseFloat(i[1]))),"safari"==r.name&&(i=t.match(/Version\/(\d+\.*\d*)/),i&&(r.ver=parseFloat(i[1]))),e=t.match(/(iphone|ipad|ipod|android|iemobile|blackberry)/i)){r.os=e?e[0].toLowerCase():"Unknown";var o={iphone:/^iphone/i,ipad:/^ipad/i,ipod:/^ipod/i,android:/^linux\s(arm|i)/i,iemobile:/win/i};r.simulator=!n.match(o[r.os]),(e=t.match(/(iPhone|iPad|iPod)\sOS\s([\d_]+)/i))&&(r.osver=e[2].split("_").join(".")),(e=t.match(/(Android|BlackBerry|Windows\sPhone\sOS)\s([\d\.]+)/i))&&(r.osver=e[2]),r.name="unknown"==r.name?r.os:r.name,r.mobile=!0}else e=n.match(/(x11|linux|mac|win)/i),r.os=e?"x11"==e[0].toLowerCase()?"linux":e[0].toLowerCase():"unknown",(e=t.match(/Mac\sOS\sX\s([\d_]+)/i))&&(r.osver=e[1].split("_").join(".")),(e=t.match(/Windows\sNT\s([\d\.]+)/i))&&(r.osver=e[1],r.osname={5.1:"WinXP",5.2:"WinXP","6.0":"Vista",6.1:"Win7",6.2:"Win8",6.3:"Win8.1","10.0":"Win10"}[r.osver]);return"Unknown"!=r.name&&"Unknown"!=r.os||!$app.onError||$app.onError("unsupported_error"),r}(),$=function(e,t){var n="loaded"===$app.status&&$this&&$this.layer,r=n?$this.layer.find(e,t):document.querySelectorAll(e);if(!n&&r){t&&r.each(t);var i=e.split(" "),o=i[i.length-1];r=0==o.indexOf("#")?r[0]:r}return r};$.args=null,$.__events={HTMLEvents:/^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,MouseEvents:/^(?:click|dblclick|touch(start|end|up|cancel)|mouse(?:down|up|over|move|out))$/},$.__eventOpts={pointerX:0,pointerY:0,button:0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,bubbles:!0,cancelable:!0},$.__HTML_ESC={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"},$.__HTML_UESC={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#x27;":"'"};var __={},__set=function(e,t,n){__[e]=t,n=n||300,setTimeout(function(e){delete __[e]},n,e)},__clear=function(){__={}},$this;$.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},$.isFunc=function(e){var t={};return e&&"[object Function]"===t.toString.call(e)},$.isBool=function(e){return e===!0||e===!1},$.isElement=function(e){try{return e instanceof HTMLElement||e instanceof SVGElement}catch(t){return"object"==typeof e&&1===e.nodeType&&"object"==typeof e.style&&"object"==typeof e.ownerDocument}},$.isNumber=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},$.isString=function(e){return"string"==typeof e||e instanceof String},$.isObject=function(e){return"object"==typeof e},$.keys=function(e){var t=[];if($.isObject(e))for(var n in e)t.push(n);return t},$.values=function(e){var t=[];for(var n in e)t.push(e[n]);return t},$.unique=function(e){var t=[];for(var n in e)t.indexOf(e[n])<0&&t.push(e[n]);return t},$.trim=function(e,t){for(var n=[],r=0;r<e.length;r++){var i=e[r];t?t(i)&&n.push(i):(0===i||null!=i&&void 0!=i&&""!=i)&&n.push(i)}return n},$.range=function(e,t){if(!e)return!1;var n,r,i,o;for(o=0;o<e.length;o++)i=t?e[o][t]:e[o],n||(n=i,r=i),n>i&&(n=i),i>r&&(r=i);return[n,r]},$.getArguments=function(){if($.args)return $.args;var e=document.getElementsByTagName("script");$.args={};for(var t in e){var n=e[t];if(n.src.indexOf("liber.js")>=0){var r=n.src.split("liber.js"),i=r[1];if(0==i.indexOf("?")){i=i.replace("?",""),r=i.split("&");for(var o in r){var a=r[o].split("=");$.args[a[0]]=a[1]}}return $.args}}},$.getCookie=function(e){if(document.cookie){var t=$.unserialize(document.cookie,";");return t[e]}return null},$.unserialize=function(e,t,n){if(!e)return null;t=t||"&",n=n||"=",e=e.replace(/(.*)\?/i,"");var r=e.split(t),i={};for(var o in r){var a=r[o].split(n);2==a.length&&(i[a[0].trim()]=a[1])}return i},$.serialize=function(e,t,n){var r=[];t=t||"&",n=n||"=";for(var i in e)r.push([i,e[i]].join(n));return r.join(t)},$.preload=function(e,t,n){for(var r=0;r<e.length;r++){var i=e[r];0!=i.indexOf("http")&&$conf.preload_image_path&&0!=i.indexOf($conf.preload_image_path)&&(i=$conf.preload_image_path+i);var o=new Image;t&&(o.onload=function(e){e=e||window.event;var n=e.target||e.srcElement;t(n.src)}),n&&(o.onerror=function(e){e=e||window.event,n(e.target||e.srcElement)}),o.src=i}},$.clone=function(e){return"object"==typeof e?JSON.parse(JSON.stringify(e)):$.isArray(e)?e.slice(0):e},$.include=function(e,t,n){e.indexOf(".js")<0&&(e+=".js"),e.indexOf("/")<0&&(e=$conf.liber_path+e);var r=e.split("/");r=r[r.length-1].replace(/\./g,"_");var i=(new Date).getTime();if($id(r,!0))t&&("function"==typeof t?t(n):"string"==typeof t&&(t=window[t],t&&t(n)));else{var o=t,a=n,s=function(e){$app.__included||($app.__included=[]),e=e||window.event;var t=e.target||e.srcElement;if("loading"!=t.readyState){if("error"==e.type)throw $app.onError&&$app.onError("app_include_error",t.src),new Error("ERROR : Failed to load "+t.src);t.onload=t.onreadystatechange=null,$app.__included.push(t.id),o&&o(a)}},l=document.createElement("script");l.id=r,l.type="text/javascript",l.onload=l.onreadystatechange=s,l.onerror=s;var c=document.head?document.head:document.getElementsByTagName("head")[0];document.head?(c.appendChild(l),l.src=e.indexOf("liber.")>=0?e+"?v="+i:e):(l.src=e.indexOf("liber.")>=0?e+"?v="+i:e,c.appendChild(l))}},$.extend=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},$.log=function(e,t){if($conf.log_path){var n=$.serialize(t);e=[$this.name,e].join("/"),$http&&$http.get([log_path,"/",e,"?",n].join(""))}},$.rand=function(e,t){var n=arguments.length;return 0===n?(e=0,t=2147483647):1===n&&(t=e,e=1),Math.floor(Math.random()*(t-e+1))+e},$.keygen=function(e,t){e=e||16,t=t||"abcdefghijklmnopqrstuvwxyz0123456789_.;,-$%()!@";for(var n=[],r=t.length,i=0;e>i;i++)n.push(t[$.rand(0,r-1)]);return n.join("")},$.uuid=function(){var e=(new Date).getTime(),t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)});return t},$.documentHeight=function(){var e=document.documentElement?document.documentElement:document.body;return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},$.screenWidth=function(){return window.innerWidth||document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth},$.screenHeight=function(){return window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight},$.rect=function(e){return e&&e.rect?e.rect():{left:0,top:0,width:0,height:0}},$.remvoe=function(e){e&&e.remove&&e.remove()},$.show=function(e){return e&&e.show&&e.show(),e},$.hide=function(e){return e&&e.hide&&e.hide(),e},$.fire=function(e){return e&&e.fire&&e.fire(),e},$.cursor=function(e,t){return $.__mouseX=0,$.__mouseY=0,e.pageX||e.pageY?($.__mouseX=e.pageX,$.__mouseY=e.pageY):($.__mouseX=e.clientX+document.body.scrollLeft,$.__mouseY=e.clientY+document.body.scrollTop),{x:$.__mouseX,y:$.__mouseY}},$.inRect=function(e,t){return e.x>=t.left&&e.x<=t.left+t.width&&e.y>=t.top&&e.y<=t.top+t.height},$.uploadWindow=function(e,t){var n="__tmpFileForm",r="__tmpFileBtn",i=$id(n,!0);if(void 0==i){i=$form({id:n,enctype:"multipart/form-data"},document.body).css({border:"0px",height:"0px",width:"0px",display:"none"});var o={id:r,type:"file",name:"tempfile"};t&&(o.multiple="multiple");var a=$input(o,i);a.bind("change",e),a.fire("click")}else i.style.display="block",$id(r).fire("click"),setTimeout(function(){$id(n,!0).style.display="none"},100)};var $app={status:"normal",viewIdx:1,views:[],legacy:!1,start:function(start_view){if("stopped"==$app.status)throw new Error("This app has been stopped for some reason.");var ps=window.location.href.split("#");if(ps[1]&&window[ps[1]]?$app.start_view=ps[1]:$app.start_view=$.isString(start_view)?start_view:$conf.default_view,!$app.start_view)throw $app.onError&&$app.onError("no_start_view_error"),new Error("No start view");var __default={modules:[],liber_path:"/js/"};for(var i in __default)$conf[i]||($conf[i]=__default[i]);$app.legacy=$conf.modules.indexOf("liber.legacy")>=0,window.onhashchange=function(e){var hash=window.location.hash;if(hash.startsWith("#"))if(hash=hash.replace(/^#/,""),hash.match(/^~/)){var func=hash.replace(/^~/,"");try{eval(func+"()")}catch(ex){$app.onError&&$app.onError("wrong_func_url_error")}}else{var vname=hash.split("?")[0];window[vname]&&window[vname].drawContent&&$app.openView(hash)}};var images=$conf.preload_images?$conf.preload_images:[],loadFiles=$conf.modules.length+images.length,loadedFiles=0;if(0==loadFiles)return $app.preloaded();var step=function(){loadedFiles++;var e=parseInt(100*loadedFiles/loadFiles);$app.onLoadProgress&&$app.onLoadProgress(e),e>=100&&$app.preloaded()};for(var i in $conf.modules)$.include($conf.modules[i],step,$conf.modules[i]);images.length>0&&$.preload(images,step,step)},stop:function(){$app.status="stopped",$("body > article.layer",function(e){e.parentNode.removeChild(e)})},preloaded:function(){$app.onload&&($app.onLoad=$app.onload),$app.onLoad?$app.onLoad():$app.loaded()},loaded:function(){$app.status="loaded",$app.openView($app.start_view)},handle:function(e,t,n){switch(e){case"stop":return $app.stop();case"loaded":return $app.drawView(t);case"close":return $app.closeView(t,n);case"front":return $app.bringViewToFront(t)}},trans:function(e){var t=this.getAttribute("url");if(t&&$.isString(t)){if(t.match(/@\?*/))$app.openView(t.replace("@?","?"),!0);else{var n=$browser.mobile&&!$browser.simulator,r=n?"touchstart":"click";"A"!=this.tagName?$a({href:"#"+t,html:"_"},document.body).css({opacity:0}).fire(r):this.fire(r)}e=e||window.event,e.stopPropagation()}},openView:function(e,t){if(!e||!$.isString(e))throw $app.onError&&$app.onError("unsupported_url_type_error",{url:e}),new Error("ERROR : $app.openView requires string type url");if(0==e.indexOf("http:")||0==e.indexOf("https:"))return location.href=e;var n=$.unserialize(e),r=e.split("?")[0],i=$this;r.endsWith("@")&&(t=!0,r=r.substring(0,r.length-1));var o=window[r];if(!o)throw $app.onError&&$app.onError("view_not_exists_error",{name:r}),new Error("Error :no view("+r+") to enhance");o.close&&o.loaded||(o.name=o.name||r,$.extend(o,$controller),$.isString(o.extend)&&$.isObject(window[o.extend])&&(console.log("extending:",o.extend),$.extend(o,window[o.extend]))),o.params=n,i&&(o.opener=i),i&&i.onInactive&&i.onInactive.call(i,o),t&&(o.isPopup=!0),$app.views.push(r),$this=o,o.onload&&(o.onLoad=o.onload),o.onLoad?o.onLoad.call(o,n):o.loaded()},drawView:function(e){e&&(e.reusable&&e.layer?(e.layer&&!e.layer.parentNode&&document.body.appendChild(e.layer),$app.bringViewToFront(e),e.onActive&&(e.onActive.call(e),$app.last_view=null)):(e.isPopup||$app.hideOthers(e),e.drawView.call(e,$app.viewIdx++)))},closeView:function(e,t){e.onClose&&e.onClose(),e.layer&&e.layer.remove(),$app.views.pop(),$this=e.opener||window[$app.start_view],$this.layer.show(),$this&&$this.onActive&&$this.onActive.call($this,e,t)},bringViewToFront:function(e){for(var t=[],n=0;n<$app.views.length;n++)e.name!=$app.views[n];t.push($app.views[n]),t.push(e.name),$app.views=t,e.layer.css({display:"block",zIndex:100+$app.viewIdx++})},hideOthers:function(e){for(var t=0;t<$app.views.length;t++){var n=window[$app.views[t]];$app.views[t]!=e.name&&n.layer&&n.layer.hide()}}},$controller={loaded:function(){$app.handle("loaded",$this)},close:function(e){$app.handle("close",$this,e)},reload:function(e){this.params=e||this.params,this.onLoad?this.onLoad.call(this,this.params):this.loaded()},drawView:function(e){var t=this,n=$article({idx:e,"class":t.isPopup?"view popup "+t.name:"view "+t.name,view:t.name},document.body);n.css({width:"100%",height:"100%",zIndex:100+e,position:"fixed",top:"0px",left:"0px",right:"0px",bottom:"0px",margin:"0px",border:"0px",padding:"0px",textAlign:"center"}),t.noHeader||(t.header=$header({},n),t.drawHeader?t.drawHeader.call(t,t.header,n):$app.drawHeader&&$app.drawHeader(t.header));var r=$section({},n);t.drawContent&&(t.layer&&t.layer.remove(),t.layer=n,t.content=r,$app.legacy&&(t.wrapper=r),t.drawContent.call(t,r,n)),t.noFooter||(t.footer=$footer({},n),t.drawFooter?t.drawFooter.call(t,t.footer,n):$app.drawFooter&&$app.drawFooter(t.footer))},bringToFront:function(){$app.handle("front",$this)}};String.prototype.ucfirst=function(){return this.charAt(0).toUpperCase()+this.substring(1)},String.prototype.toHex=function(){for(var e=[],t=this.length,n=0;t>n;n+=1){var r=this.charCodeAt(n);e.push(r.toString(16))}return e.join("")},String.prototype.getByte=function(){for(var e=0,t=0;t<this.length;t++){var n=escape(this.charAt(t));n.length<4?e++:e+=2}return e},String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")},String.prototype.CJKLength=function(){var e=escape(this).replace(/%u.{4}/gm,"1").replace(/%.{2}/gm,"1");return e.length},String.prototype.splice=function(e,t,n){return this.slice(0,e)+n+this.slice(e+Math.abs(t))},"function"!=typeof String.prototype.startsWith&&(String.prototype.startsWith=function(e){return this.slice(0,e.length)==e}),"function"!=typeof String.prototype.endsWith&&(String.prototype.endsWith=function(e){return this.slice(-e.length)==e}),String.prototype.escape=function(){var e=new RegExp("["+$.keys($.__HTML_ESC).join("")+"]","g");return this.replace(e,function(e){return $.__HTML_ESC[e]})},String.prototype.unescape=function(){var e=new RegExp("("+$.keys($.__HTML_UESC).join("|")+")","g");return this.replace(e,function(e){return $.__HTML_UESC[e]})},String.prototype.validate=function(e){var t;if(e.indexOf(":")){var n=e.split(":");e=n[0],t=n[1]}switch(e){case"email":return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(.+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this);case"phone-jp":return/^[a-zA-Z0-9\-().\s]{8,15}$/.test(this);case"zipcode-jp":return/^\d{5}(-\d{4})?$/.test(this);case"url":var r=new RegExp("^((http|https|ftp)://)*([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&amp;%$-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9-]+.)*[a-zA-Z0-9-]+.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(/($|[a-zA-Z0-9.,?'\\+&amp;%$#=~_-]+))*$");return r.test(this);case"len":var i=parseInt(n[1]),o=3==n.length?parseInt(n[2]):0;return o>0?this.length>=i&&this.length<=o:this.length>=i}return!0},NodeList.prototype.each=function(e){if(e)for(var t=0;t<this.length;t++)e(this[t],t);return this},NodeList.prototype.callfunc=function(e,t,n){var r=e&&("string"==typeof e||e instanceof String)?Element.prototype[e]:!1;if(r)for(var i=0;i<this.length;i++)r.call(this[i],t,n);return this},NodeList.prototype.attr=function(e,t){return this.callfunc("attr",e,t)},NodeList.prototype.css=function(e,t){return this.callfunc("css",e,t)},NodeList.prototype.bind=function(e,t){return this.callfunc("bind",e,t)},NodeList.prototype.hide=function(e){return this.callfunc("hide")},NodeList.prototype.show=function(){return this.callfunc("show")},NodeList.prototype.addClass=function(e){return this.callfunc("addClass",e)},NodeList.prototype.removeClass=function(e){return this.callfunc("removeClass",e)};var $deltas={linear:function(e){return e},quad:function(e){return Math.pow(e,2)},quad5:function(e){return Math.pow(e,5)},circ:function(e){return 1-Math.sin(Math.acos(e))},back:function(e,t){return t=t||1.5,Math.pow(e,2)*((t+1)*e-t)},bounce:function(e){for(var t=0,n=1;1;t+=n,n/=2)if(e>=(7-4*t)/11)return-Math.pow((11-6*t-11*e)/4,2)+Math.pow(n,2)},elastic:function(e,t){return t=t||.1,Math.pow(2,10*(e-1))*Math.cos(20*Math.PI*t/3*e)},easeOut:function(e){return"string"==typeof e&&(e=$deltas[e]),function(t){return 1-e(1-t)}},easeInOut:function(e){return"string"==typeof e&&(e=$deltas[e]),function(t){return.5>=t?e(2*t)/2:(2-e(2*(1-t)))/2}}},__element={isSvg:function(){return window.__svgTagIndex=window.__svgTagIndex||__tags.indexOf("svg"),__tags.indexOf(this.tagName.toLowerCase())>=window.__svgTagIndex},addClass:function(e){if(this.isSvg()){var t=this.getAttribute("class")||"";t=t.length>0?t+" ":"",this.setAttribute("class",t+e)}else this.className.indexOf(e)<0&&(this.className=this.className+" "+e);return this},removeClass:function(e){if(!e)return this;e=e.trim();var t=this.isSvg(),n=t?this.getAttribute("class"):this.className;return n=n.replace(new RegExp("\\b"+e+"\\b","g"),"").replace(/\s+/g," "),t?this.setAttribute("class",n):this.className=n,this},hasClass:function(e){var t=this.isSvg(),n=t?this.getAttribute("class"):this.className;return n&&new RegExp("\\b"+e+"\\b","g").test(n)},css:function(e,t){if("string"==typeof e){if(void 0===t)return this.style[e];e.indexOf("background")>=0&&t.indexOf("url(")>=0&&$conf.image_path&&t.indexOf("data:image")<0&&t.indexOf("http")<0&&(t=t.replace("url(","url("+$conf.image_path)),"Firefox"==$browser.name?this.style.setProperty(e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t):this.style[e]=t}else if("object"==typeof e&&!t)for(var n in e)this.css(n,e[n]);return this},attr:function(e,t){if("string"==typeof e){if("var"==e)return __set(t,this),this;if("id"==e)return this.id=t,__set(t,this),this;if("html"==e&&(e="innerHTML"),this.isSvg()||"class"!=e&&"classname"!=e||(e="className"),"url"==e&&"string"==typeof t&&this.bind("click",$app.trans),void 0==t)return this.getAttribute(e);"IMG"==this.tagName.toUpperCase()&&"src"==e.toLowerCase()?this[e]=$conf.image_path&&t.indexOf("data:image")<0&&0!=t.indexOf("http")?$conf.image_path+t:t:this[e]=t,"function"==typeof t||$.isBool(t)||"innerHTML"!=e&&"className"!=e&&"src"!=e&&this.setAttribute(e,t)}else if("object"==typeof e&&!t)for(var n in e)"function"==typeof e[n]?this.bind(n,e[n]):this.attr(n,e[n]);return this},find:function(e,t){var n=e.split(" "),r=n[n.length-1],i=this.querySelectorAll(e);if($.isFunc(t))for(var o,a=0;o=i[a];a++)t(o,a);return 0==r.indexOf("#")?i[0]:i},find1st:function(e){var t=e.split(" "),n=(t[t.length-1],this.querySelectorAll(e));return n?n[0]:null},bind:function(e,t){if("string"==typeof e){if(t)if(e=e.replace(/^on/,""),$browser.mobile||0!=e.indexOf("touch")||(e={touchstart:"click",touchmove:"mousemove",touchend:"mouseup"}[e]),$browser.mobile&&"click"==e){var n=this,r=t;this.addEventListener("touchend",function(e){var t=e.changedTouches[0].screenX,i=e.changedTouches[0].screenY;Math.abs(t-TSX)>12||Math.abs(i-TSY)>12||r.apply(n,e)},!1)}else this.addEventListener(e,t,!1)}else if("object"==typeof e&&!t)for(var i in e)this.bind(i,e[i]);return this},unbind:function(){console.log("ERR : unbind is removed, since it will lead a performance problem. use lock,unlock instead.")},lock:function(){var e=this.clone(!1).attr("__clone","true");return this.hide().attr("__lock","true"),e},unlock:function(){var e=this.nextSibling;return this.attr("__clone")&&e&&e.attr("__lock","true")&&(this.remove(),e.show().removeAttribute("__lock")),e},clone:function(e){var t=this.cloneNode(!0);return e&&this.parentNode&&(this.parentNode.insertBefore(t,this),this.remove()),t},rect:function(){var e=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft;if(this.getBoundingClientRect){var n=this.getBoundingClientRect();return{top:n.top+e,width:n.width,left:n.left+t,height:n.height}}for(var r=0,i=0,o=this.width(),a=this.height(),s=this;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)r+=s.offsetLeft-s.scrollLeft,i+=s.offsetTop-s.scrollTop,s=s.offsetParent;return{top:i+e,left:r+t,width:o,height:a}},height:function(){return Math.max(this.clientHeight||0,this.scrollHeight||0,this.offsetHeight||0)},width:function(){return Math.max(this.clientWidth||0,this.scrollWidth||0,this.offsetWidth||0)},hide:function(e){return"none"==this.style.display||this.attr("__orgDisplay")||this.attr("__orgDisplay",this.style.display),e>0?this.animate({duration:e,style:"easeIn",step:function(e,t){e.style.opacity=1-t,t>=1&&(e.style.opacity=1,e.style.display="none")}}):this.style.display="none",this},show:function(e){return"none"==this.style.display||this.attr("__orgDisplay")||this.attr("__orgDisplay",this.style.display),e>0?this.css({display:this.attr("__orgDisplay")||"block",opacity:0}).animate({duration:e,style:"easeOut",step:function(e,t){e.style.opacity=t,t>=1&&(e.style.display=e.attr("__orgDisplay")||"block")}}):this.style.display=this.attr("__orgDisplay")||"block",this},toggle:function(e){return"none"==this.style.display?this.show(e):this.hide(e)},remove:function(e){this.parentNode&&this.parentNode.removeChild(this)},before:function(e){return $.isElement(e)&&e.parentNode&&e.parentNode.insertBefore(this,e),this},after:function(e){return $.isElement(e)&&e.parentNode&&(e.nextSibling?e.parentNode.insertBefore(this,e.nextSibling):e.parentNode.appendChild(this)),this},selectable:function(e){return e=e===!1?"none":e===!0?"all":e,this.bind("selectstart",function(e){return e.preventDefault()}).css({"-moz-user-select":e,"-webkit-user-select":e,"-ms-user-select":e,"user-select":e})},animate:function(e){var t=this;if(e.delay){var n=parseInt(e.delay);return delete e.delay,setTimeout(function(e){e.ele&&e.ele.animate(e.opts)},n,{ele:t,opts:e}),t}var r=Date.now();e.duration=e.duration||1e3,e.frame=e.frame||60,e.interval=1e3/e.frame,e.delta=e.delta||"linear";var i=setInterval(function(){var n=new Date-r,o=n/e.duration;o>1&&(o=1);var a=$deltas[e.delta];e.style&&("easeOut"==e.style&&(a=$deltas.easeOut(a)),"easeInOut"==e.style&&(a=$deltas.easeInOut(a)));var s=a(o);e.step(t,s),1==o&&clearInterval(i)},e.interval);return this},hover:function(over,out){return over&&(this.attr({__over:"("+over.toString()+")",__exec:"no"}),this.bind({mouseover:function(e){e=e||window.event;var t=e.target||e.srcElement,f=eval(t.attr("__over"));return f&&"no"===t.attr("__exec")?(t.attr("__exec","yes"),void f.call(t,e)):e.preventDefault()&&!1}})),out&&(this.attr({__out:"("+out.toString()+")"}),this.bind({mouseout:function(e){e=e||window.event;var t=e.target||e.srcElement,rect=t.rect();if($.inRect($.cursor(e),rect))return e.preventDefault()&&!1;var out=eval(t.attr("__out"));out&&(t.attr({__exec:"no"}),out.call(t,e))}})),this},fire:function(e,t){var n=$.extend($.__eventOpts,t||{}),r=null,i=null;for(var o in $.__events)if($.__events[o].test(e)){i=o;break}if(!i)throw $app.onError&&$app.onError("event_fire_error",{name:e}),new SyntaxError("Only HTMLEvents and MouseEvents interfaces are supported");if(this[e])this[e]();else if(document.createEvent)r=document.createEvent(i),"HTMLEvents"===i?r.initEvent(e,n.bubbles,n.cancelable):r.initMouseEvent(e,n.bubbles,n.cancelable,document.defaultView,n.button,n.pointerX,n.pointerY,n.pointerX,n.pointerY,n.ctrlKey,n.altKey,n.shiftKey,n.metaKey,n.button,this),this.dispatchEvent(r);else{n.clientX=n.pointerX,n.clientY=n.pointerY;var a=document.createEventObject();r=$.extend(a,n),this.fireEvent("on"+e,r)}return this}};"function"==typeof Element.prototype.animate&&(Element.prototype.animate=__element.animate),$.extend(Element.prototype,__element);for(var $e=function(e,t,n,r){e=r?e.replace(/_/g,"-"):e;var i=r?document.createElementNS(r,e):document.createElement(e);if(n&&"string"==typeof n&&(n=$id(n)),t){var o=typeof t;if("string"==o)switch(e){case"img":i.src=$conf.image_path&&t.indexOf("data:image")<0&&t.indexOf("http")<0?$conf.image_path+t:t;break;case"a":i.href=t;break;default:i.innerHTML=t}else if($.isArray(t))for(var a=0;a<t.length;a++){var s=t[a];if(null!=s)if($.isElement(s))i.appendChild(s);else if($.isFunc(s)){var l=i,c=s();if($.isArray(c))for(var p=0;p<c.length;p++)$.isElement(c[p])&&l.appendChild(c[p]);else $.isElement(c)&&l.appendChild(c);i=l}else $app.onError&&$app.onError("invalid_child_error")}else if($.isElement(t))i.appendChild(t);else{if($.isFunc(t))return $e(e,t(),n);if("object"==o)for(var u in t){var d=t[u];"function"==typeof d?i[u]=d:i.attr(u,d)}}}return n&&"function"!=typeof n&&n.appendChild(i),i},__tags=["div","p","span","br","hr","ul","ol","li","dl","dt","dd","article","section","aside","footer","header","nav","table","caption","tbody","thead","tfoot","colgroup","col","tr","td","th","form","fieldset","legend","input","label","textarea","select","option","b","h1","h2","h3","h4","h5","h6","cite","pre","s","u","i","mark","q","small","sub","sup","abbr","bdo","time","em","dfn","code","samp","strong","kbd","var","map","area","figure","figcaption","a","img","button","progress","address","base","canvas","embed","audio","video","source","progress","svg","altglyph","altglyphdef","altglyphitem","animate","animateColor","animateMotion","animateTransform","circle","clippath","color_profile","cursor","defs","desc","ellipse","feblend","fecolormatrix","fecomponenttransfer","fecomposite","feconvolvematrix","fediffuselighting","fedisplacementmap","fedistantlight","feflood","fefunca","fefuncb","fefuncg","fefuncr","fegaussianblur","feimage","femerge","femergenode","femorphology","feoffset","fepointlight","fespecularlighting","fespotlight","fetile","feturbulence","filter","font","font_face","font_face_format","font_face_name","font_face_src","font_face_uri","foreignobject","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","missing_glyph","mpath","path","pattern","polygon","polyline","radialgradient","rect","script","set","stop","style","switch","symbol","text","textpath","tref","tspan","use","view","vkern"],_ns="",i=0;i<__tags.length;i++){var tag=__tags[i];"svg"==tag&&(_ns=",'http://www.w3.org/2000/svg'"),eval(["window.$",tag,"=",tag.toUpperCase(),"= function(args,target){ return $e('",tag,"', args,target",_ns,"); };"].join(""))}var $sel=function(e,t,n){var r=t.onclick;delete t.onclick;var i=t.value||[];$.isString(i)&&(i=i.split(","));for(var o,a=$.isFunc(t.drawOption)?t.drawOption:null,s=0;o=e[s];s++){var l=$label({},n);a?a(l,s):(l.attr({html:o.label}).css({position:"relative","padding-left":"20px","text-align":"left"}),$input({type:t.type,name:t.name,value:o.value,checked:i.indexOf(o.value)>=0?!0:!1},l).css({display:"block",position:"absolute",left:0,top:"50%",transform:"translateY(-50%)"}),r&&dd.bind("click",r))}},$radio=function(e,t,n){return delete t.multiple,$sel(e,t,n)},$checkbox=function(e,t,n){return t.multiple=1,$sel(e,t,n)},$select=function(e,t,n){if("MSIE"==$browser.name&&$browser.ver<9&&t.name){var r=document.createElement(["<select name=",t.name,"></select>"].join("'"));r.attr(t),n&&n.appendChild(r)}else r=$e("select",t,n);if($.isArray(e))for(var i in e)$e("option",{value:e[i],html:e[i]},r);else for(var o in e)$e("option",{value:o,html:e[o]},r);return t.value&&(r.value=t.value),r},$styles=function(e,t,n){t=t||document.body;var r={type:"text/css"};n&&(r.id=n);var i=$e("style",r,t),o=document.createTextNode("");if("string"==typeof e)o.appendData(e);else for(var a in e){var s="string"==typeof e[a]?e[a]:$.serialize(e[a],";",":");o.appendData([a,"{",s,"}\n"].join(""))}return i.appendChild(o),sid},$http={getRequest:function(){return window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")},ajax:function(e){if(!e||!e.url)throw"ERR: $http.ajax wrong params ";var t=$conf.http_host&&0!=e.url.indexOf("http")?$conf.http_host+e.url:e.url,n=$http.getRequest(),r=e.params||{},i=e.format||"json",o=e.method||"GET",a=e.callback||null;n.runtime={callback:a,format:i,url:t,method:o,params:r},e.onprogress&&(n.runtime.onprogress=e.onprogress);var s=!1;"UPLOAD"==o&&(o="POST",s=!0,n.upload.addEventListener("progress",function(e){var t=parseInt(100-e.loaded/e.total*100);n.runtime.onprogress&&n.runtime.onprogress(t)},!1)),n.onreadystatechange=function(){if(4==n.readyState)if(200==n.status){if(n.runtime.callback){var e=n.responseText;if("json"===n.runtime.format)try{e=JSON.parse(e)}catch(t){var r=$.extend({code:200,type:"json_error"},n.runtime);return $app.onError&&$app.onError("http_parse_error",r),n.runtime.callback(null,r)}n.runtime.callback(e)}}else{var i=$.extend({code:n.status,message:n.getResponseHeader("ERROR_MESSAGE"),data:n.responseText},n.runtime);n.runtime.callback&&n.runtime.callback(null,i),$app.onError&&$app.onError("http_server_error",i)}};var l="";if(r){var c=[];for(var p in r){var u=r[p]+"";p=encodeURIComponent(p),u=s?u:encodeURIComponent(u),c.push(p+"="+u)}if(l=c.join("&"),"GET"==o){var d=t.indexOf("?")>0?"&":"?";t+=d+l}}o=o.toUpperCase(),n.open(o,t,!0),console.log(t,o),"POST"==o||"PUT"==o||"DELETE"==o?(n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.send(l)):n.send()},get:function(e,t,n,r){$http.ajax({url:e,method:"GET",params:t,callback:n,format:r})},post:function(e,t,n,r){$http.ajax({url:e,method:"POST",params:t,callback:n,format:r})},put:function(e,t,n,r){$http.ajax({url:e,method:"PUT",params:t,callback:n,format:r})},del:function(e,t,n,r){$http.ajax({url:e,method:"DELETE",params:t,callback:n,format:r})},upload:function(e,t,n,r,i){$http.ajax({url:e,method:"UPLOAD",params:t,callback:n,format:r,onprogress:i})}};
