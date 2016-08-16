/**
 * @author soyoes 
 * @Copywrite (c) 2013, Liberhood, http://liberhood.com 
 * @URL : https://github.com/soyoes/liberjs
 * @license : MIT License
 */

function $id(a){return document.getElementById(a)}var $conf=$conf||{},$ui={},$browser=function(){var b,a=navigator.userAgent,c=navigator.platform,d={},e=a.match(/(MSIE|Trident|Firefox|Chrome|Safari|Opera)[\/\s](\d+\.*\d*)/i);if(d.name=e?e[1].toLowerCase():"unknown",d.ver=e?parseFloat(e[2]):0,"trident"==d.name&&(d.name="msie",e=a.match(/rv:(\d+\.?\d*)/),e&&(d.ver=parseFloat(e[1]))),"safari"==d.name&&(e=a.match(/Version\/(\d+\.*\d*)/),e&&(d.ver=parseFloat(e[1]))),b=a.match(/(iphone|ipad|ipod|android|iemobile|blackberry)/i)){d.os=b?b[0].toLowerCase():"Unknown";var f={iphone:/^iphone/i,ipad:/^ipad/i,ipod:/^ipod/i,android:/^linux\s(arm|i)/i,iemobile:/win/i};d.simulator=!c.match(f[d.os]),(b=a.match(/(iPhone|iPad|iPod)\sOS\s([\d_]+)/i))&&(d.osver=b[2].split("_").join(".")),(b=a.match(/(Android|BlackBerry|Windows\sPhone\sOS)\s([\d\.]+)/i))&&(d.osver=b[2]),d.name="unknown"==d.name?d.os:d.name,d.mobile=!0}else b=c.match(/(x11|linux|mac|win)/i),d.os=b?"x11"==b[0].toLowerCase()?"linux":b[0].toLowerCase():"unknown",(b=a.match(/Mac\sOS\sX\s([\d_]+)/i))&&(d.osver=b[1].split("_").join(".")),(b=a.match(/Windows\sNT\s([\d\.]+)/i))&&(d.osver=b[1],d.osname={5.1:"WinXP",5.2:"WinXP","6.0":"Vista",6.1:"Win7",6.2:"Win8",6.3:"Win8.1","10.0":"Win10"}[d.osver]);return"Unknown"!=d.name&&"Unknown"!=d.os||!$app.onError||$app.onError("unsupported_error"),d}(),$=function(a,b){var c="loaded"===$app.status&&$this&&$this.layer,d=c?$this.layer.find(a,b):document.querySelectorAll(a);if(!c&&d){b&&d.each(b);var e=a.split(" "),f=e[e.length-1];d=0==f.indexOf("#")?d[0]:d}return d};$.args=null,$.__events={HTMLEvents:/^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,MouseEvents:/^(?:click|dblclick|touch(start|end|up|cancel)|mouse(?:down|up|over|move|out))$/},$.__eventOpts={pointerX:0,pointerY:0,button:0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,bubbles:!0,cancelable:!0},$.__HTML_ESC={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",'"':"quot",amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"};var __={},__set=function(a,b,c){__[a]=b,c=c||300,setTimeout(function(a){delete __[a]},c,a)},__clear=function(){__={}},$this;$.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)},$.isFunc=function(a){var b={};return a&&"[object Function]"===b.toString.call(a)},$.isBool=function(a){return a===!0||a===!1},$.isElement=function(a){try{return a instanceof HTMLElement||a instanceof SVGElement}catch(b){return"object"==typeof a&&1===a.nodeType&&"object"==typeof a.style&&"object"==typeof a.ownerDocument}},$.isNumber=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},$.isString=function(a){return"string"==typeof a||a instanceof String},$.isObject=function(a){return"object"==typeof a},$.keys=function(a){var b=[];if($.isObject(a))for(var c in a)b.push(c);return b},$.values=function(a){var b=[];for(var c in a)b.push(a[c]);return b},$.unique=function(a){var b=[];for(var c in a)b.indexOf(a[c])<0&&b.push(a[c]);return b},$.trim=function(a,b){for(var c=[],d=0;d<a.length;d++){var e=a[d];b?b(e)&&c.push(e):(0===e||null!=e&&void 0!=e&&""!=e)&&c.push(e)}return c},$.empty=function(a){return!a||$.isArray(a)&&a.length<=0||$.isObject(a)&&Object.keys(a).length<=0},$.range=function(a,b){if(!a)return!1;var c,d,e,f;for(f=0;f<a.length;f++)e=b?a[f][b]:a[f],c||(c=e,d=e),c>e&&(c=e),d<e&&(d=e);return[c,d]},$.getArguments=function(){if($.args)return $.args;var a=document.getElementsByTagName("script");$.args={};for(var b in a){var c=a[b];if(c.src.indexOf("liber.js")>=0){var d=c.src.split("liber.js"),e=d[1];if(0==e.indexOf("?")){e=e.replace("?",""),d=e.split("&");for(var f in d){var g=d[f].split("=");$.args[g[0]]=g[1]}}return $.args}}},$.getCookie=function(a){if(document.cookie){var b=$.unserialize(document.cookie,";");return b[a]}return null},$.unserialize=function(a,b,c){if(!a)return null;b=b||"&",c=c||"=",a=a.replace(/(.*)\?/i,"");for(var g,d=a.split(b),e={},f=0;g=d[f];f++){var h=g.split(c);2==h.length&&(e[h[0].trim()]=h[1])}return e},$.serialize=function(a,b,c){var d=[];b=b||"&",c=c||"=";for(var e in a)d.push([e,a[e]].join(c));return d.join(b)},$.preload=function(a,b,c){for(var d=0;d<a.length;d++){var e=a[d];0!=e.indexOf("http")&&$conf.preload_image_path&&0!=e.indexOf($conf.preload_image_path)&&(e=$conf.preload_image_path+e);var f=new Image;b&&(f.onload=function(a){a=a||window.event;var c=a.target||a.srcElement;b(c.src)}),c&&(f.onerror=function(a){a=a||window.event,c(a.target||a.srcElement)}),f.src=e}},$.clone=function(a){return"object"==typeof a?JSON.parse(JSON.stringify(a)):$.isArray(a)?a.slice(0):a},$.link=function(a){if(a){var b=a.replace(/[\/\.]/g,"_");if(!($("link#"+b).length>0)){var c=document.createElement("link").attr({id:b,href:a,type:"text/css",rel:"stylesheet"});document.getElementsByTagName("head")[0].appendChild(c)}}},$.include=function(a,b,c){a.indexOf(".js")<0&&(a+=".js"),a.indexOf("/")<0&&(a=$conf.liber_path+a);var d=a.split("/");d=d[d.length-1].replace(/\./g,"_");var e=(new Date).getTime();if($id(d,!0))b&&("function"==typeof b?b(c):"string"==typeof b&&(b=window[b],b&&b(c)));else{var f=function(a){$app.__included||($app.__included=[]),a=a||window.event;var d=a.target||a.srcElement;if("loading"!=d.readyState){if("error"==a.type)throw $app.onError&&$app.onError("app_include_error",d.src),new Error("ERROR : Failed to load "+d.src);d.onload=d.onreadystatechange=null,$app.__included.push(d.id);var e=b?$.isString(b)?window[b]:b:null;e&&e(c)}},g=document.createElement("script");g.id=d,g.type="text/javascript",g.onload=g.onreadystatechange=f,g.onerror=f;var h=document.head?document.head:document.getElementsByTagName("head")[0];g.src=a.indexOf("liber.")>=0?a+"?v="+e:a,h.appendChild(g)}},$.extend=function(a,b){for(var c in b)c in a||(a[c]=b[c]);return a},$.log=function(a,b){if($conf.log_path){var c=$.serialize(b);a=[$this.name,a].join("/"),$http&&$http.get([log_path,"/",a,"?",c].join(""))}},$.rand=function(a,b){var c=arguments.length;return 0===c?(a=0,b=2147483647):1===c&&(b=a,a=1),Math.floor(Math.random()*(b-a+1))+a},$.keygen=function(a,b){a=a||16,b=b||"abcdefghijklmnopqrstuvwxyz0123456789_.;,-$%()!@";for(var c=[],d=b.length,e=0;e<a;e++)c.push(b[$.rand(0,d-1)]);return c.join("")},$.uuid=function(){var a=(new Date).getTime(),b="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var c=(a+16*Math.random())%16|0;return a=Math.floor(a/16),("x"==b?c:3&c|8).toString(16)});return b},$.documentHeight=function(){var a=document.documentElement?document.documentElement:document.body;return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},$.screenWidth=function(){return window.innerWidth||document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth},$.screenHeight=function(){return window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight},$.rect=function(a){return a&&a.rect?a.rect():{left:0,top:0,width:0,height:0}},$.remove=function(a){a&&a.remove&&a.remove()},$.show=function(a){return a&&a.show&&a.show(),a},$.hide=function(a){return a&&a.hide&&a.hide(),a},$.fire=function(a){return a&&a.fire&&a.fire(),a},$.cursor=function(a,b){return $.__mouseX=0,$.__mouseY=0,a.pageX||a.pageY?($.__mouseX=a.pageX,$.__mouseY=a.pageY):($.__mouseX=a.clientX+document.body.scrollLeft,$.__mouseY=a.clientY+document.body.scrollTop),{x:$.__mouseX,y:$.__mouseY}},$.inRect=function(a,b){return a.x>=b.left&&a.x<=b.left+b.width&&a.y>=b.top&&a.y<=b.top+b.height},$.uploadWindow=function(a,b){var c="__tmpFileForm",d="__tmpFileBtn",e=$id(c,!0);if(void 0==e){e=$form({id:c,enctype:"multipart/form-data"},document.body).css({border:"0px",height:"0px",width:"0px",display:"none"});var f={id:d,type:"file",name:"tempfile"};b&&(f.multiple="multiple");var g=$input(f,e);g.bind("change",a),g.fire("click")}else e.style.display="block",$id(d).fire("click"),setTimeout(function(){$id(c,!0).style.display="none"},100)};var $app={status:"normal",viewIdx:1,views:[],legacy:!1,start:function(start_view){if("stopped"==$app.status)throw new Error("This app has been stopped for some reason.");var ps=window.location.href.split("#");if(ps[1]&&window[ps[1]]?$app.start_view=ps[1]:$app.start_view=$.isString(start_view)?start_view:$conf.default_view,!$app.start_view)throw $app.onError&&$app.onError("no_start_view_error"),new Error("No start view");var __default={modules:[],liber_path:"/js/"};for(var i in __default)$conf[i]||($conf[i]=__default[i]);$app.legacy=$conf.modules.indexOf("liber.legacy")>=0,$app.hash=window.location.hash,setInterval(function(){if(window.location.hash!=$app.hash){$app.hash=window.location.hash;var hash=$app.hash;if(""==hash&&(hash="#"+$app.start_view),hash.startsWith("#"))if(hash=hash.replace(/^#/,""),hash.match(/^~/)){var func=hash.replace(/^~/,"");try{eval(func+"()")}catch(a){$app.onError&&$app.onError("wrong_func_url_error")}}else{var vname=hash.split("?")[0];window[vname]&&window[vname].drawContent&&$app.openView(hash)}}},100);var images=$conf.preload_images?$conf.preload_images:[],loadFiles=$conf.modules.length+images.length,loadedFiles=0;if(0==loadFiles)return $app.preloaded();for(var step=function(){loadedFiles++;var a=parseInt(100*loadedFiles/loadFiles);$app.onLoadProgress&&$app.onLoadProgress(a),a>=100&&$app.preloaded()},i=0,m;m=$conf.modules[i];i++)$.include(m,step,m);images.length>0&&$.preload(images,step,step)},stop:function(){$app.status="stopped",$("body > article.layer",function(a){a.parentNode.removeChild(a)})},preloaded:function(){$app.onload&&($app.onLoad=$app.onload),$app.onLoad?$app.onLoad():$app.loaded()},loaded:function(){$app.status="loaded",$app.openView($app.start_view)},handle:function(a,b,c){switch(a){case"stop":return $app.stop();case"loaded":return $app.drawView(b);case"close":return $app.closeView(b,c);case"front":return $app.bringViewToFront(b)}},trans:function(a){var b=this.getAttribute("url");if(b&&$.isString(b)&&b.trim().length>0){if(b.match(/@\?*/))$app.openView(b.replace("@?","?"),!0);else{var c=$browser.mobile&&!$browser.simulator,d=c?"touchstart":"click";"A"!=this.tagName?$a({href:"#"+b,html:"_"},document.body).css({opacity:0}).fire(d):this.fire(d)}a=a||window.event,a.stopPropagation()}},openView:function(a,b){if(!a||!$.isString(a))throw $app.onError&&$app.onError("unsupported_url_type_error",{url:a}),new Error("ERROR : $app.openView requires string type url");if(0==a.indexOf("http:")||0==a.indexOf("https:"))return location.href=a;var c=$.unserialize(a),d=a.split("?")[0],e=$this;d.endsWith("@")&&(b=!0,d=d.substring(0,d.length-1));var f=window[d];if(!f)throw $app.onError&&$app.onError("view_not_exists_error",{name:d}),new Error("Error :no view("+d+") to enhance");f.close&&f.loaded||(f.name=f.name||d,$.extend(f,$controller),$.isString(f.extend)&&$.isObject(window[f.extend])&&(console.log("extending:",f.extend),$.extend(f,window[f.extend]))),f.params=c,e&&(f.opener=e),e&&e.onInactive&&e.onInactive.call(e,f),b&&(f.isPopup=!0),$app.views.push(d),$this=f,f.onload&&(f.onLoad=f.onload),f.onLoad?f.onLoad.call(f,c):f.loaded()},drawView:function(a){a&&(a.reusable&&a.layer?(a.layer&&!a.layer.parentNode&&document.body.appendChild(a.layer),$app.bringViewToFront(a),a.onActive&&(a.onActive.call(a),$app.last_view=null)):(a.isPopup||$app.hideOthers(a),a.drawView.call(a,$app.viewIdx++)))},closeView:function(a,b){a.onClose&&a.onClose(),a.layer&&a.layer.remove(),$app.views.pop(),$this=a.opener||window[$app.start_view],$this.layer.show(),$this&&$this.onActive&&$this.onActive.call($this,a,b)},bringViewToFront:function(a){for(var b=[],c=0;c<$app.views.length;c++)a.name!=$app.views[c];b.push($app.views[c]),b.push(a.name),$app.views=b,a.layer.css({display:"block",zIndex:100+$app.viewIdx++})},hideOthers:function(a){for(var b=0;b<$app.views.length;b++){var c=window[$app.views[b]];$app.views[b]!=a.name&&c.layer&&c.layer.hide()}}},$controller={loaded:function(){$app.handle("loaded",$this)},close:function(a){$app.handle("close",$this,a)},reload:function(a){this.params=a||this.params,this.onLoad?this.onLoad.call(this,this.params):this.loaded()},drawView:function(a){var b=this;b.layer&&b.layer.remove();var c=$article({idx:a,class:b.isPopup?"view popup "+b.name:"view "+b.name,view:b.name},document.body);b.layer=c.css({width:"100%",height:"100%",zIndex:100+a,position:"fixed",top:"0px",left:"0px",right:"0px",bottom:"0px",margin:"0px",border:"0px",padding:"0px",textAlign:"center"}),b.header=b.noHeader?$header({}):$header({},c),b.content=$section({},c),b.footer=b.noFooter?$footer({}):$footer({},c),$app.legacy&&(b.wrapper=b.content),b.noHeader||($app.drawHeader&&$app.drawHeader(b.header,c),b.drawHeader&&b.drawHeader.call(b,b.header,c)),$app.drawContent&&$app.drawContent(b.content,c),b.drawContent&&b.drawContent.call(b,b.content,c),b.noFooter||($app.drawFooter&&$app.drawFooter(b.footer,c),b.drawFooter&&b.drawFooter.call(b,b.footer,c))},bringToFront:function(){$app.handle("front",$this)}};String.prototype.ucfirst=function(){return this.charAt(0).toUpperCase()+this.substring(1)},String.prototype.toHex=function(){for(var a=[],b=this.length,c=0;c<b;c+=1){var d=this.charCodeAt(c);a.push(d.toString(16))}return a.join("")},String.prototype.getByte=function(){for(var a=0,b=0;b<this.length;b++){var c=htmlencode(this.charAt(b));c.length<4?a++:a+=2}return a},String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")},String.prototype.CJKLength=function(){var a=htmlencode(this).replace(/%u.{4}/gm,"1").replace(/%.{2}/gm,"1");return a.length},String.prototype.splice=function(a,b,c){return this.slice(0,a)+c+this.slice(a+Math.abs(b))},"function"!=typeof String.prototype.startsWith&&(String.prototype.startsWith=function(a){return this.slice(0,a.length)==a}),"function"!=typeof String.prototype.endsWith&&(String.prototype.endsWith=function(a){return this.slice(-a.length)==a}),String.prototype.htmlencode=function(){if(!$.__HTML_ESC_EXP){$.__HTML_ESC_REV=[];for(var a in $.__HTML_ESC)$.__HTML_ESC_REV[$.__HTML_ESC[a]]=a;$.__HTML_ESC_EXP=new RegExp("["+Object.keys($.__HTML_ESC_REV).join("")+"]","g")}return this.replace($.__HTML_ESC_EXP,function(a){var b=$.__HTML_ESC_REV[a.substring(1,a.length-1)];return b?"&"+b+";":a})},String.prototype.htmldecode=function(){return $.__HTML_ESC_DEXP||($.__HTML_ESC_DEXP=new RegExp("&("+Object.keys($.__HTML_ESC).join("|")+");","g")),this.replace($.__HTML_ESC_DEXP,function(a){return $.__HTML_ESC[a.substring(1,a.length-1)]||a})},String.prototype.validate=function(a){var b;if(a.indexOf(":")){var c=a.split(":");a=c[0],b=c[1]}switch(a){case"email":return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(.+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this);case"phone-jp":return/^[a-zA-Z0-9\-().\s]{8,15}$/.test(this);case"zipcode-jp":return/^\d{5}(-\d{4})?$/.test(this);case"url":var d=new RegExp("^((http|https|ftp)://)*([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&amp;%$-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9-]+.)*[a-zA-Z0-9-]+.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(/($|[a-zA-Z0-9.,?'\\+&amp;%$#=~_-]+))*$");return d.test(this);case"len":var e=parseInt(c[1]),f=3==c.length?parseInt(c[2]):0;return f>0?this.length>=e&&this.length<=f:this.length>=e}return!0},Array.prototype.last=function(){return this.length>1?this[this.length-1]:null},NodeList.prototype.each=function(a){if(a)for(var b=0;b<this.length;b++)a(this[b],b);return this},NodeList.prototype.callfunc=function(a,b,c){var d=!(!a||!("string"==typeof a||a instanceof String))&&Element.prototype[a];if(d)for(var e=0;e<this.length;e++)d.call(this[e],b,c);return this},NodeList.prototype.attr=function(a,b){return this.callfunc("attr",a,b)},NodeList.prototype.css=function(a,b){return this.callfunc("css",a,b)},NodeList.prototype.bind=function(a,b){return this.callfunc("bind",a,b)},NodeList.prototype.hide=function(a){return this.callfunc("hide")},NodeList.prototype.show=function(){return this.callfunc("show")},NodeList.prototype.addClass=function(a){return this.callfunc("addClass",a)},NodeList.prototype.removeClass=function(a){return this.callfunc("removeClass",a)};var $deltas={linear:function(a){return a},quad:function(a){return Math.pow(a,2)},quad5:function(a){return Math.pow(a,5)},circ:function(a){return 1-Math.sin(Math.acos(a))},back:function(a,b){return b=b||1.5,Math.pow(a,2)*((b+1)*a-b)},bounce:function(a){for(var b=0,c=1;1;b+=c,c/=2)if(a>=(7-4*b)/11)return-Math.pow((11-6*b-11*a)/4,2)+Math.pow(c,2)},elastic:function(a,b){return b=b||.1,Math.pow(2,10*(a-1))*Math.cos(20*Math.PI*b/3*a)},easeOut:function(a){return"string"==typeof a&&(a=$deltas[a]),function(b){return 1-a(1-b)}},easeInOut:function(a){return"string"==typeof a&&(a=$deltas[a]),function(b){return b<=.5?a(2*b)/2:(2-a(2*(1-b)))/2}}},__element={isSvg:function(){return window.__svgTagIndex=window.__svgTagIndex||__tags.indexOf("svg"),__tags.indexOf(this.tagName.toLowerCase())>=window.__svgTagIndex},addClass:function(a){if(this.isSvg()){var b=this.getAttribute("class")||"";b=b.length>0?b+" ":"",this.setAttribute("class",b+a)}else this.className.indexOf(a)<0&&(this.className=this.className+" "+a);return this},removeClass:function(a){if(!a)return this;a=a.trim();var b=this.isSvg(),c=b?this.getAttribute("class"):this.className;return c=c.replace(new RegExp("\\b"+a+"\\b","g"),"").replace(/\s+/g," ").trim(),b?this.setAttribute("class",c):this.className=c,this},hasClass:function(a){var b=this.isSvg(),c=b?this.getAttribute("class"):this.className;return c&&c.match(new RegExp("\\b"+a+"\\b","g"))},css:function(a,b){if("string"==typeof a){if(void 0===b)return this.style[a];a.indexOf("background")>=0&&b.indexOf("url(")>=0&&$conf.image_path&&b.indexOf("data:image")<0&&b.indexOf("http")<0&&(b=b.replace("url(","url("+$conf.image_path)),"Firefox"==$browser.name?this.style.setProperty(a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}),b):this.style[a]=b}else if("object"==typeof a&&!b)for(var c in a)this.css(c,a[c]);return this},attr:function(a,b){if("string"==typeof a){if("var"==a)return __set(b,this),this;if("id"==a)return this.id=b,__set(b,this),this;if("html"==a&&(a="innerHTML"),this.isSvg()||"class"!=a&&"classname"!=a||(a="className"),"url"==a&&"string"==typeof b&&this.bind("click",$app.trans),void 0==b){var c=this.getAttribute(a);return c&&c.match(/^\d+$/)?parseInt(c):c}"IMG"==this.tagName.toUpperCase()&&"src"==a.toLowerCase()?this[a]=$conf.image_path&&b.indexOf("data:image")<0&&0!=b.indexOf("http")?$conf.image_path+b:b:this[a]=b,"function"==typeof b||$.isBool(b)||"innerHTML"!=a&&"className"!=a&&"src"!=a&&this.setAttribute(a,b)}else if("object"==typeof a&&!b)for(var d in a)"function"==typeof a[d]?this.bind(d,a[d]):this.attr(d,a[d]);return this},find:function(a,b){var c=a.split(" "),d=c[c.length-1],e=this.querySelectorAll(a);if($.isFunc(b))for(var g,f=0;g=e[f];f++)b(g,f);return 0==d.indexOf("#")?e[0]:e},find1st:function(a){var b=a.split(" "),d=(b[b.length-1],this.querySelectorAll(a));return d?d[0]:null},bind:function(a,b){if("string"==typeof a){if(b)if(a=a.replace(/^on/,""),$browser.mobile||0!=a.indexOf("touch")||(a={touchstart:"click",touchmove:"mousemove",touchend:"mouseup"}[a]),$browser.mobile&&"click"==a){var c=this,d=b;this.addEventListener("touchend",function(a){var b=a.changedTouches[0].screenX,e=a.changedTouches[0].screenY;Math.abs(b-TSX)>12||Math.abs(e-TSY)>12||d.apply(c,a)},!1)}else this.addEventListener(a,b,!1)}else if("object"==typeof a&&!b)for(var e in a)this.bind(e,a[e]);return this},unbind:function(){console.log("ERR : unbind is removed, since it will lead a performance problem. use lock,unlock instead.")},lock:function(){var a=this.clone(!1).attr("__clone","true");return this.hide().attr("__lock","true"),a},unlock:function(){var a=this.nextSibling;return this.attr("__clone")&&a&&a.attr("__lock","true")&&(this.remove(),a.show().removeAttribute("__lock")),a},clone:function(a){var b=this.cloneNode(!0);return a&&this.parentNode&&(this.parentNode.insertBefore(b,this),this.remove()),b},rect:function(){var a=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,b=document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft;if(this.getBoundingClientRect){var c=this.getBoundingClientRect();return{top:c.top+a,width:c.width,left:c.left+b,height:c.height}}for(var d=0,e=0,f=this.width(),g=this.height(),h=this;h&&!isNaN(h.offsetLeft)&&!isNaN(h.offsetTop);)d+=h.offsetLeft-h.scrollLeft,e+=h.offsetTop-h.scrollTop,h=h.offsetParent;return{top:e+a,left:d+b,width:f,height:g}},height:function(){return Math.max(this.clientHeight||0,this.scrollHeight||0,this.offsetHeight||0)},width:function(){return Math.max(this.clientWidth||0,this.scrollWidth||0,this.offsetWidth||0)},hide:function(a){return"none"==this.style.display||this.attr("__orgDisplay")||this.attr("__orgDisplay",this.style.display),a>0?this.animate({duration:a,style:"easeIn",step:function(a,b){a.style.opacity=1-b,b>=1&&(a.style.opacity=1,a.style.display="none")}}):this.style.display="none",this},show:function(a){return"none"==this.style.display||this.attr("__orgDisplay")||this.attr("__orgDisplay",this.style.display),a>0?this.css({display:this.attr("__orgDisplay")||"block",opacity:0}).animate({duration:a,style:"easeOut",step:function(a,b){a.style.opacity=b,b>=1&&(a.style.display=a.attr("__orgDisplay")||"block")}}):this.style.display=this.attr("__orgDisplay")||"block",this},toggle:function(a){return"none"==this.style.display?this.show(a):this.hide(a)},remove:function(a){this.parentNode&&this.parentNode.removeChild(this)},before:function(a){return $.isElement(a)&&a.parentNode&&a.parentNode.insertBefore(this,a),this},after:function(a){return $.isElement(a)&&a.parentNode&&(a.nextSibling?a.parentNode.insertBefore(this,a.nextSibling):a.parentNode.appendChild(this)),this},selectable:function(a){return a=a===!1?"none":a===!0?"all":a,this.bind("selectstart",function(a){return a.preventDefault()}).css({"-moz-user-select":a,"-webkit-user-select":a,"-ms-user-select":a,"user-select":a})},animate:function(a){var b=this;if(a.delay){var c=parseInt(a.delay);return delete a.delay,setTimeout(function(a){a.ele&&a.ele.animate(a.opts)},c,{ele:b,opts:a}),b}var d=Date.now();a.duration=a.duration||1e3,a.frame=a.frame||60,a.interval=1e3/a.frame,a.delta=a.delta||"linear";var e=setInterval(function(){var c=new Date-d,f=c/a.duration;f>1&&(f=1);var g=$deltas[a.delta];a.style&&("easeOut"==a.style&&(g=$deltas.easeOut(g)),"easeInOut"==a.style&&(g=$deltas.easeInOut(g)));var h=g(f);a.step(b,h),1==f&&clearInterval(e)},a.interval);return this},hover:function(over,out){return over&&(this.attr({__over:"("+over.toString()+")",__exec:"no"}),this.bind({mouseover:function(e){e=e||window.event;var t=e.target||e.srcElement,f=eval(t.attr("__over"));return f&&"no"===t.attr("__exec")?(t.attr("__exec","yes"),void f.call(t,e)):e.preventDefault()&&!1}})),out&&(this.attr({__out:"("+out.toString()+")"}),this.bind({mouseout:function(e){e=e||window.event;var t=e.target||e.srcElement,rect=t.rect();if($.inRect($.cursor(e),rect))return e.preventDefault()&&!1;var out=eval(t.attr("__out"));out&&(t.attr({__exec:"no"}),out.call(t,e))}})),this},fire:function(a,b){var c=$.extend($.__eventOpts,b||{}),d=null,e=null;for(var f in $.__events)if($.__events[f].test(a)){e=f;break}if(!e)throw $app.onError&&$app.onError("event_fire_error",{name:a}),new SyntaxError("Only HTMLEvents and MouseEvents interfaces are supported");if(this[a])this[a]();else if(document.createEvent)d=document.createEvent(e),"HTMLEvents"===e?d.initEvent(a,c.bubbles,c.cancelable):d.initMouseEvent(a,c.bubbles,c.cancelable,document.defaultView,c.button,c.pointerX,c.pointerY,c.pointerX,c.pointerY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,this),this.dispatchEvent(d);else{c.clientX=c.pointerX,c.clientY=c.pointerY;var g=document.createEventObject();d=$.extend(g,c),this.fireEvent("on"+a,d)}return this}};"function"==typeof Element.prototype.animate&&(Element.prototype.animate=__element.animate),$.extend(Element.prototype,__element);for(var $e=function(a,b,c,d){a=d?a.replace(/_/g,"-"):a;var e=d?document.createElementNS(d,a):document.createElement(a);if(c&&"string"==typeof c&&(c=$id(c)),b){var f=typeof b;if("string"==f)switch(a){case"img":e.src=$conf.image_path&&b.indexOf("data:image")<0&&b.indexOf("http")<0?$conf.image_path+b:b;break;case"a":e.href=b;break;default:e.innerHTML=b}else if($.isArray(b))for(var g=0;g<b.length;g++){var h=b[g];if(null!=h)if($.isElement(h))e.appendChild(h);else if($.isFunc(h)){var i=e,j=h();if($.isArray(j))for(var k=0;k<j.length;k++)$.isElement(j[k])&&i.appendChild(j[k]);else $.isElement(j)&&i.appendChild(j);e=i}else $app.onError&&$app.onError("invalid_child_error")}else if($.isElement(b))e.appendChild(b);else{if($.isFunc(b))return $e(a,b(),c);if("object"==f)for(var l in b){var m=b[l];"function"==typeof m?e[l]=m:e.attr(l,m)}}}return c&&"function"!=typeof c&&c.appendChild(e),e},__tags=["div","p","span","br","hr","ul","ol","li","dl","dt","dd","article","section","aside","footer","header","nav","table","caption","tbody","thead","tfoot","colgroup","col","tr","td","th","form","fieldset","legend","input","label","textarea","select","option","b","h1","h2","h3","h4","h5","h6","cite","pre","s","u","i","mark","q","small","sub","sup","abbr","bdo","time","em","dfn","code","samp","strong","kbd","var","map","area","figure","figcaption","a","img","button","progress","address","base","canvas","embed","audio","video","source","progress","svg","altglyph","altglyphdef","altglyphitem","animate","animateColor","animateMotion","animateTransform","circle","clippath","color_profile","cursor","defs","desc","ellipse","feblend","fecolormatrix","fecomponenttransfer","fecomposite","feconvolvematrix","fediffuselighting","fedisplacementmap","fedistantlight","feflood","fefunca","fefuncb","fefuncg","fefuncr","fegaussianblur","feimage","femerge","femergenode","femorphology","feoffset","fepointlight","fespecularlighting","fespotlight","fetile","feturbulence","filter","font","font_face","font_face_format","font_face_name","font_face_src","font_face_uri","foreignobject","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","missing_glyph","mpath","path","pattern","polygon","polyline","radialgradient","rect","script","set","stop","style","switch","symbol","text","textpath","tref","tspan","use","view","vkern"],_ns="",i=0;i<__tags.length;i++){var tag=__tags[i];"svg"==tag&&(_ns=",'http://www.w3.org/2000/svg'"),eval(["window.$",tag,"=",tag.toUpperCase(),"= function(args,target){ return $e('",tag,"', args,target",_ns,"); };"].join(""))}var $sel=function(a,b,c){var d=b.onclick;delete b.onclick;var e=b.value||[];$.isString(e)&&(e=e.split(","));for(var h,f=$.isFunc(b.drawOption)?b.drawOption:null,g=0;h=a[g];g++){var i=$label({},c);f?f(i,g):(i.attr({html:h.label}).css({position:"relative","padding-left":"20px","text-align":"left"}),$input({type:b.type,name:b.name,value:h.value,checked:e.indexOf(h.value)>=0},i).css({display:"block",position:"absolute",left:0,top:"50%",transform:"translateY(-50%)"}),d&&i.bind("click",d))}},$radio=function(a,b,c){return delete b.multiple,$sel(a,b,c)},$checkbox=function(a,b,c){return b.multiple=1,$sel(a,b,c)},$select=function(a,b,c){if("MSIE"==$browser.name&&$browser.ver<9&&b.name){var d=document.createElement(["<select name=",b.name,"></select>"].join("'"));d.attr(b),c&&c.appendChild(d)}else d=$e("select",b,c);if($.isArray(a))for(var f,e=0;f=a[e];e++)$e("option",{value:f,html:f},d);else for(var f in a)$e("option",{value:f,html:a[f]},d);return b.value&&(d.value=b.value),d},$styles=function(a,b,c){b=b||document.body;var d={type:"text/css"};c&&(d.id=c);var e=$e("style",d,b),f=document.createTextNode("");if("string"==typeof a)f.appendData(a);else for(var g in a){var h="string"==typeof a[g]?a[g]:$.serialize(a[g],";",":");$.isFunc(h)||f.appendData([g,"{",h,"}\n"].join(""))}return e.appendChild(f),sid},$http={getRequest:function(){return window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")},ajax:function(a){if(!a||!a.url)throw"ERR: $http.ajax wrong params ";var b=$conf.http_host&&0!=a.url.indexOf("http")?$conf.http_host+a.url:a.url,c=$http.getRequest(),d=a.params||{},e=a.format||"json",f=a.method||"GET",g=a.callback||null;c.runtime={callback:g,format:e,url:b,method:f,params:d},a.onprogress&&(c.runtime.onprogress=a.onprogress);var h=!1;"UPLOAD"==f&&(f="POST",h=!0,c.upload.addEventListener("progress",function(a){var b=parseInt(100-a.loaded/a.total*100);c.runtime.onprogress&&c.runtime.onprogress(b)},!1)),c.onreadystatechange=function(){if(4==c.readyState)if(200==c.status){if(c.runtime.callback){var a=c.responseText;if("json"===c.runtime.format)try{a=JSON.parse(a)}catch(a){var b=$.extend({code:200,type:"json_error"},c.runtime);return $app.onError&&$app.onError("http_parse_error",b),c.runtime.callback(null,b)}c.runtime.callback(a)}}else{var d=$.extend({code:c.status,message:c.getResponseHeader("ERROR_MESSAGE"),data:c.responseText},c.runtime);c.runtime.callback&&c.runtime.callback(null,d),$app.onError&&$app.onError("http_server_error",d)}};var i="";if(d){var j=[];for(var k in d){var l=d[k]+"";k=encodeURIComponent(k),l=h?l:encodeURIComponent(l),j.push(k+"="+l)}if(i=j.join("&"),"GET"==f){var m=b.indexOf("?")>0?"&":"?";b+=m+i}}f=f.toUpperCase(),c.open(f,b,!0),console.log(b,f),"POST"==f||"PUT"==f||"DELETE"==f?(c.setRequestHeader("Content-type","application/x-www-form-urlencoded"),c.send(i)):c.send()},get:function(a,b,c,d){$http.ajax({url:a,method:"GET",params:b,callback:c,format:d})},post:function(a,b,c,d){$http.ajax({url:a,method:"POST",params:b,callback:c,
format:d})},put:function(a,b,c,d){$http.ajax({url:a,method:"PUT",params:b,callback:c,format:d})},del:function(a,b,c,d){$http.ajax({url:a,method:"DELETE",params:b,callback:c,format:d})},upload:function(a,b,c,d,e){$http.ajax({url:a,method:"UPLOAD",params:b,callback:c,format:d,onprogress:e})}};