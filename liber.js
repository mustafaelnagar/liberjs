/**
 * @author soyoes 
 * @Copywrite (c) 2013, Liberhood, http://liberhood.com 
 * @URL : https://github.com/soyoes/liberjs
 * @license : MIT License
 */

function $(e,t,n){var r=[];if(!n&&e.indexOf(" ")<0){if(e.charAt(0)=="#")return document.getElementById(e.replace("#",""));if(e.charAt(0)=="."&&document.getElementsByClassName)r=document.getElementsByClassName(e.replace(".",""));if(/^[a-zA-Z]+$/.test(e))r=document.getElementsByTagName(e)}else{e=n?"#layer_"+window._layerIDX+" "+e:e;var i=e.trim().split(" ");var s=i[i.length-1];r=document.querySelectorAll(e);if(s.charAt(0)=="#")return r[0]}if(t){for(var o in r){var u=r[o];var a=typeof u;if(a!="string"&&a!="function"&&a!="number"){t(u)}}}return r}function $id(e){return document.getElementById(e)}window._params=undefined;var __packages="";var $this;if(!$conf)var $conf={};var $browser=function(){var e=navigator.appName,t=navigator.userAgent,n;var r=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);if(r&&(n=t.match(/version\/([\.\d]+)/i))!=null)r[2]=n[1];r=r?[r[1],r[2]]:[e,navigator.appVersion,0];var i=t.match(/(iPhone|iPod|Android)/i);return{name:r[0],version:parseInt(r[1]),device:i?"smartphone":"pc"}}();var $app={_view:undefined,layers:[],_histories:[],start:function(e){__default={modules:[],liber_path:"/js/"};$app.start_view=e;for(var t in __default){if(!$conf[t])$conf[t]=__default[t]}var n=$conf.layout?$conf.layout:$browser.device=="smartphone"?"grids":"overlay";$conf.modules.push("liber.layout."+n);var r=$conf.preload_images?$conf.preload_images:[];var i=$ui.progressBar(document.body,$conf.modules.length+r.length,{update:function(e,t){console.log("Preload : ",e+"%",t)},finish:function(e,t){console.log("Preload DONE");$app.preloaded()}});var s=function(e){i.update(e)};for(var t in $conf.modules){$utils.include($conf.modules[t],s,$conf.modules[t])}if(r.length>0){$utils.preload(r,s,s)}},preloaded:function(){$app.layout.init(document.body,$app,$conf.layout_options||{});if($app.onload)$app.onload();else{$app.loaded()}},loaded:function(){if(typeof $app.start_view=="string")$app.loadView($app.start_view);else $app.loadView()},handle:function(e,t){switch(e){case"loaded":$app.drawView();break;case"redirect":$app.loadView(t);break;default:break}},trans:function(e){e=e||window.event;var t=e.target||e.srcElement;if(t){var n=t.getAttribute("url");if(n){$app.loadView(n)}}},loadView:function(e){e=e||$conf.default_view;if(e){if(e.indexOf("http:")==0||e.indexOf("https:")==0){location.href=e;return}else{var t=$utils.unpackParams(e);var n=e.split("?")[0];$app.view=n;var r=$controller.enhance(window[n]);if(!r){throw new Error("100 : "+n+" does not exist");return}$this=r;$app._histories.push($this);r.params=t;if(r.onload){console.log("view.onload");r.onload(t)}else{r.loaded()}}}},drawView:function(e){e=e||$app.view;e=typeof e=="string"?window[e]:e;if(!e){$app.closeView($app.view);return}console.log(e);$app.layout.drawView(e)},closeView:function(e){e=e||$this;if(typeof e=="string")e=window[e];if(!e)return;$app.view=undefined;if($app._histories.length>1){$app._histories.pop()}$this=$app._histories.length>1?$app._histories.pop():$app._histories[0];$app.view=$this;if(e.onclose)e.onclose();$app.layout.closeView(e);console.log($app._histories,$this)}};var $controller={loaded:function(){$app.handle("loaded")},close:function(){$app.closeView($this)},redirect:function(e){$app.handle("redirect",e)},enhance:function(e){if(!e){throw new Error("101 :now view to enhance");return}if(!e.__enhanced){$utils.extend(e,$controller);delete e["enhance"];e.__enhanced=true}return e}};var $history={stack:[],change:function(e){anc=history.state||location.hash;console.log("history.change",anc);if(!anc||anc==""){window.location=window.location}else{if($history.stack.length>0){last=$history.stack.length>1?$history.stack[$history.stack.length-2]:null;console.log("last",last);if(last&&last==anc){$history.stack.pop();$history.stack.pop();console.log("remove layer");window._layers.pop();$ui.removeLayer()}else{if($history.stack[$history.stack.length-1]!=anc)$history.stack.push(anc)}}else{$history.stack.push(anc)}}},push:function(e){if(typeof e!="string"&&e.attr){href=e.attr("href");if(href)e=href;else return}if(e!="#"){if(history.pushState){history.pushState({},e,e)}else{lk=$a({href:e},document.body);$utils.fire(lk,"click")}$history.stack.push(e)}},init:function(){if(window.onpopstate){window.onpopstate=$history.change}else{window.onhashchange=$history.change}}};$history.init();String.prototype.ucfirst=function(){return this.charAt(0).toUpperCase()+this.substring(1)};String.prototype.toHex=function(){var e=[],t=this.length;for(var n=0;n<t;n+=1){var r=this.charCodeAt(n);e.push(r.toString(16))}return e.join("")};String.prototype.getByte=function(){var e=0;for(var t=0;t<this.length;t++){var n=escape(this.charAt(t));if(n.length<4)e++;else e+=2}return e};String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};String.prototype.CJKLength=function(){var e=0;var t=escape(this);for(var n=0;n<t.length;n++,e++){if(t.charAt(n)=="%"){if(t.charAt(++n)=="u"){n+=3;e++}n++}}return e};var $utils={_params:function(){if(_params)return _params;var e=document.getElementsByTagName("script");_params={};for(var t in e){var n=e[t];if(n.src.indexOf("liber.js")>=0){var r=n.src.split("liber.js");var i=r[1];if(i.indexOf("?")==0){i=i.replace("?","");r=i.split("&");for(var s in r){var o=r[s].split("=");_params[o[0]]=o[1]}}return _params}}},inArray:function(e,t,n){var r="",i=!!n;if(i){for(r in t){if(t[r]===e)return true}}else{for(r in t){if(t[r]==e)return true}}return false},getCookie:function(e){if(document.cookie){var t=$utils.unpackParams(document.cookie,";");return t[e]}return null},unpackParams:function(e,t){if(!e)return null;if(!t)t="&";e=e.replace(/(.*)\?/i,"");var n=e.split(t);var r={};for(var i in n){var s=n[i].split("=");if(s.length==2)r[s[0].trim()]=s[1]}return r},packParams:function(e,t){var n=[];if(!t)t="&";for(var r in e){n.push([r,e[r]].join("="))}return n.join(t)},preload:function(e,t,n){for(var r=0;r<e.length;r++){var i=e[r];if(i.indexOf("http")!=0&&$conf.preload_image_path){if(i.indexOf($conf.preload_image_path)!=0){i=$conf.preload_image_path+i}}var s=new Image;if(t)s.onload=function(e){e=e||window.event;var n=e.target||e.srcElement;t(n.src)};if(n)s.onerror=function(e){e=e||window.event;n(e.target||e.srcElement)};s.src=i}},keyCode:function(e){if(document.all)return e.keyCode;else if($id)return e.keyCode?e.keyCode:e.charCode;else if(document.layers)return e.which},isArray:function(e){return Object.prototype.toString.call(e)==="[object Array]"},isFunction:function(e){var t={};return e&&t.toString.call(e)==="[object Function]"},isBool:function(e){return e===true||e===false},isElement:function(e){try{return e instanceof HTMLElement}catch(t){return typeof e==="object"&&e.nodeType===1&&typeof e.style==="object"&&typeof e.ownerDocument==="object"}},empty:function(e){if(!e)return true;if(e.length&&e.length==0)return false;if(typeof e==="object"){for(var t in e){return false}return true}return false},clone:function(e){if(typeof e=="object"){var t={};for(var n in e)t[n]=e[n];return t}else if($utils.isArray(e)){return e.slice(0)}return e},include:function(e,t,n){if(e.indexOf(".js")<0)e+=".js";if(e.indexOf("/")<0)e=$conf.liber_path+e;var r=e.split("/");r=r[r.length-1].replace(/\./g,"_");var i=r.replace("_js","");if(!$id(r)){var s=document.createElement("script");s.id=r;s.src=e;document.head.appendChild(s);if(!$utils.__include)$utils.__include={};$utils.__include[r]={src:s.src,interval:setInterval(function(){if($utils.included(i)){clearInterval($utils.__include[r].interval);if($utils.__include[r].callback){var e=$utils.__include[r].callback;if(typeof e=="function")e($utils.__include[r].params);else if(typeof e=="string"){e=window[e];if(e)e($utils.__include[r].params)}}delete $utils.__include[r]}else{$utils.__include[r].times=$utils.__include[r].times+1;if($utils.__include[r].times>50){clearInterval($utils.__include[r].interval);console.log("Include timeover",$utils.__include[r].src);delete $utils.__include[r]}}},10),callback:t,times:0,params:n}}else{if(t){if(typeof t=="function")t(n);else if(typeof t=="string"){t=window[t];if(t)t(n)}}}},setTimeout:function(e,t,n){if($browser.name=="Firefox"){var r=e;setTimeout(r,t,n)}else if($browser.name=="MSIE"){setTimeout(function(t){return function(){e(t)}}(n),t)}else setTimeout(e,t,n)},archivePath:function(e,t){var n=parseInt(e)%parseInt(t);return[n,e].join("/")},extend:function(e,t){for(var n in t)e[n]=t[n];return e},_eventMatchers:{HTMLEvents:/^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,MouseEvents:/^(?:click|dblclick|mouse(?:down|up|over|move|out))$/},_eventDefaultOptions:{pointerX:0,pointerY:0,button:0,ctrlKey:false,altKey:false,shiftKey:false,metaKey:false,bubbles:true,cancelable:true},fire:function(e,t){e=typeof e=="string"?$id(e):e;if(e==undefined)return;var n=$utils.extend($utils._eventDefaultOptions,arguments[2]||{});var r,i=null;for(var s in $utils._eventMatchers){if($utils._eventMatchers[s].test(t)){i=s;break}}if(!i)throw new SyntaxError("Only HTMLEvents and MouseEvents interfaces are supported");if(e[t]){e[t]()}else if(document.createEvent){r=document.createEvent(i);if(i=="HTMLEvents"){r.initEvent(t,n.bubbles,n.cancelable)}else{r.initMouseEvent(t,n.bubbles,n.cancelable,document.defaultView,n.button,n.pointerX,n.pointerY,n.pointerX,n.pointerY,n.ctrlKey,n.altKey,n.shiftKey,n.metaKey,n.button,e)}e.dispatchEvent(r)}else{n.clientX=n.pointerX;n.clientY=n.pointerY;var o=document.createEventObject();r=$utils.extend(o,n);e.fireEvent("on"+t,r)}return e},log:function(e){e=_viewer_id?[_viewer_id,e].join(":"):"0:"+e;if($http)$http.get(["/log.php?action=",e].join(""))},rand:function(e,t){var n=arguments.length;if(n===0){e=0;t=2147483647}else if(n===1){t=e;e=1}return Math.floor(Math.random()*(t-e+1))+e},"package":function(e){__packages=__packages.split(",");__packages.push(e.replace(/_/g,"."));__packages=__packages.join(",")},included:function(e){return __packages.indexOf(e.replace(/_/g,"."))>=0}};var $deltas={linear:function(e){return e},quad:function(e){return Math.pow(e,2)},quad5:function(e){return Math.pow(e,5)},circ:function(e){return 1-Math.sin(Math.acos(e))},back:function(e,t){t=t||1.5;return Math.pow(e,2)*((t+1)*e-t)},bounce:function(e){for(var t=0,n=1,r;1;t+=n,n/=2){if(e>=(7-4*t)/11){return-Math.pow((11-6*t-11*e)/4,2)+Math.pow(n,2)}}},elastic:function(e,t){t=t||.1;return Math.pow(2,10*(e-1))*Math.cos(20*Math.PI*t/3*e)},easeOut:function(e){if(typeof e=="string")e=$deltas[e];return function(t){return 1-e(1-t)}},easeInOut:function(e){if(typeof e=="string")e=$deltas[e];return function(t){if(t<=.5){return e(2*t)/2}else{return(2-e(2*(1-t)))/2}}}};var __element={addClass:function(e){if(this.className.indexOf(e)<0){this.className+=" "+e}return this},removeClass:function(e){if(!e)return this;e=e.trim();if(this.className.indexOf(e)>=0){var t=this.className.split(" ");var n=[];for(var r in t){var i=t[r].trim();if(i!=e&&i.length>0)n.push(i)}this.className=n.join(" ")}return this},css:function(e,t){if(typeof e=="string"){if(t!=undefined){if(e.indexOf("background")>=0&&t.indexOf("url(")>=0&&$conf.image_path&&t.indexOf("data:image")<0){t=t.replace("url(","url("+$conf.image_path)}this.style[e]=t}else return this.style[e]}else if(typeof e=="object"&&!t){for(var n in e){this.css(n,e[n])}}return this},attr:function(e,t){if(typeof e=="string"){if(e=="html")e="innerHTML";if(e=="class")e="className";if(t!=undefined){if(this.tagName=="IMG"&&e.toLowerCase()=="src"){this[e]=$conf.image_path&&t.indexOf("data:image")<0?$conf.image_path+t:t}else{this[e]=t}if(typeof t!="function"&&!$utils.isBool(t)){if(this.tagName=="INPUT"){if($browser.name=="MSIE"&&$browser.version<9&&(e=="type"||e=="name"))return this;if($browser.name=="MSIE"&&$browser.version<10&&e=="placeHolder"){this.setAttribute(e,t);if(!this.value||this.value==""){this.value=t;this.style.color="#999";this.attachEvent("onfocus",function(e){e=e||window.event;var t=event.srcElement;t.style.color="#333";if(t.value==t.attr("placeHolder")){t.value=""}});this.attachEvent("onblur",function(e){e=e||window.event;var t=event.srcElement;if(t.value==""||t.value==t.attr("placeHolder")){t.value=t.attr("placeHolder");t.style.color="#999"}else{t.style.color="#333"}})}}}if(e!="innerHTML"&&e!="className")this.setAttribute(e,t)}}else{return this.getAttribute(e)}}else if(typeof e=="object"&&!t){for(var n in e){if(typeof e[n]=="function"){this.bind(n,e[n])}else{this.attr(n,e[n])}}}return this},bind:function(e,t){if(typeof e=="string"){if(t){e=e.replace(/^on/,"");if(this.addEventListener)this.addEventListener(e,t,false);else if(this.attachEvent){if(typeof t=="function")this.attachEvent("on"+e,t);else if(typeof t=="string")this.setAttribute("on"+e,t)}else{this["on"+e]=t}}}else if(typeof e=="object"&&!t){for(var n in e){n=n.replace(/^on/,"");if(this.addEventListener)this.addEventListener(n,e[n],false);else if(this.attachEvent){this.attachEvent("on"+n,e[n]);if(typeof e[n]=="function")this.attachEvent("on"+n,e[n]);else if(typeof e[n]=="string")this.setAttribute("on"+n,e[n])}else{this["on"+n]=e[n]}}}return this},height:function(){var e=this;return Math.max(e.clientHeight||0,e.scrollHeight||0,e.offsetHeight||0)},width:function(e){var e=this;return Math.max(e.clientWidth||0,e.scrollWidth||0,e.offsetWidth||0)},hide:function(){$ui.hide(this);return this},show:function(){$ui.show(this);return this},animate:function(e){var t=this;if(e.delay){var n=parseInt(e.delay);delete e["delay"];$utils.setTimeout(function(e){if(e.ele)e.ele.animate(e.opts)},n,{ele:t,opts:e});return t}var r=Date.now();e.duration=e.duration||1e3;e.frame=e.frame||60;e.interval=1e3/e.frame;e.delta=e.delta||"linear";var i=setInterval(function(){var n=new Date-r;var s=n/e.duration;if(s>1)s=1;var o=$deltas[e.delta];if(e.style){if(e.style=="easeOut")o=$deltas.easeOut(o);if(e.style=="easeInOut")o=$deltas.easeInOut(o)}var u=o(s);e.step(t,u);if(s==1){clearInterval(i)}},e.interval);return this}};if($browser.name=="MSIE"&&$browser.version<9){$utils.include("liber.ie8","ie8_enhance")}else{$utils.extend(Element.prototype,__element)}var $e=function(e,t,n){var r=document.createElement(e);if(n&&typeof n=="string")n=$id(n);if(t){var i=typeof t;if(i=="string"){switch(e){case"img":r.src=$conf.image_path&&t.indexOf("data:image")<0?$conf.image_path+t:t;break;case"a":r.href=t;break;default:r.innerHTML=t;break}}else if($utils.isArray(t)){for(var s in t){if(t[s]!=null){if($utils.isElement(t[s])){r.appendChild(t[s])}else if($utils.isFunction(t[s])){var o=r;var u=t[s]();if($utils.isArray(u)){for(var a in u){if($utils.isElement(u[a]))o.appendChild(u[a])}}else if($utils.isElement(u)){o.appendChild(u)}r=o}else{}}}}else if($utils.isElement(t)){r.appendChild(t)}else if($utils.isFunction(t)){return $e(e,t(),n)}else if(i=="object"){for(var f in t){var l=t[f];if(typeof l=="function"){r[f]=l}else{r.attr(f,l)}}}}if(n&&typeof n!="function")n.appendChild(r);return r};var TAGS=["table","tr","th","td","div","img","ul","lo","li","p","a","b","strong","textarea","br","hr","form","input","span","label","h1","h2","h3","canvas"];for(var i in TAGS){if(typeof TAGS[i]=="function")continue;eval(["var ",TAGS[i].toUpperCase(),"= function(args,target){ return $e('",TAGS[i],"', args,target); };"].join(""));eval(["var $",TAGS[i],"= function(args,target){ return $e('",TAGS[i],"', args,target); };"].join(""))}var $radio=function(e,t,n){var r=[];var i=function(e){e=e||window.event;var t=e.target||e.srcElement;var n=t.name.replace(/_options$/,"");var r=$id(n);var i=t.attr("value");if(i==r.value){r.value="";t.className="icons radio"}else{$("."+n+" .on",function(e){e.className="icons radio"});t.className="icons radio on";r.value=i}};for(var s in e){var o=$div({className:"radio-option "+t.id},n);var u=$span({className:"icons radio ",name:t.id+"_options",value:s,html:e[s],onclick:i},o);if(t.value==s){u.className="icons radio on "}r.push(o)}r.push($input({name:t.name,id:t.id,type:"hidden",className:t.className,value:t.value?t.value:""},n));return r};window.RADIO=$radio;var $checkbox=function(e,t,n){var r=[];var i=t.value?"#"+t.value.split(",").join("#,#")+"#":"";var s=function(e){e=e||window.event;var t=e.target||e.srcElement;var n=t.name.replace(/_options$/,"");var r=$id(n);var i=[];t.className=t.className.indexOf("check on")>0?"icons check":"icons check on";$("."+n+" .on",function(e){i.push(e.getAttribute("value"))});r.value=i.join(",")};for(var o in e){var u=$div({className:"check-option "+t.id},n);var a=$span({className:"icons check "+t.id+"_options",name:t.id+"_options",value:o,html:e[o]},u);if(!t.onchange){a.bind("click",s)}else{a.onchange=t.onchange}if(i.indexOf("#"+o+"#")>=0){a.className="icons check on "}r.push(u)}r.push($input({name:t.name,id:t.id,type:"hidden",className:t.className,value:t.value?t.value:""},n));return r};window.CHECKBOX=$checkbox;var $select=function(e,t,n){if($browser.name=="MSIE"&&$browser.version<9&&t.name){var r=document.createElement(["<select name=",t.name,"></select>"].join("'"));r.attr(t);if(n)n.appendChild(r)}else{r=$e("select",t,n)}if($utils.isArray(e)){for(var i in e)$e("option",{value:e[i],html:e[i]},r)}else{for(var s in e)$e("option",{value:s,html:e[s]},r)}if(t.value)r.value=t.value;return r};window.SELECT=$select;window._layerIDX=0;window._layers=[];var $msg={messages:{},register:function(e,t,n,r){$msg.messages[e]={};$msg.messages[e][t]={params:r,func:n}},call:function(e,t,n){if($msg.messages[e][t]){var r=$msg.messages[e][t];var i=r.params;if(!i)i={};if(n)for(k in n){i[k]=n[k]}r.func(i)}},trigger:function(e){e=e||window.event;if(e&&(e.target||e.srcElement)){var t=e.target||e.srcElement;$msg.call(t.id,event.type)}}};var $ui={hide:function(e){if(!e)return;if(typeof e=="object"&&e.style){e.style.display="none";return}e=typeof e=="string"?[e]:e;for(var t in e){var n=$id(e[t]);if(n)n.style.display="none"}},show:function(e){if(!e)return;if(typeof e=="object"&&e.style){if(e.className)e.className=e.className.replace("hidden","");e.style.display="block";return}e=typeof e=="string"?[e]:e;for(var t in e){var n=$id(e[t]);if(n)n.style.display="block"}},toggle:function(e){if(!e)return;if(typeof e=="object"&&e.style){e.style.display=e.style.display=="none"?"block":"none";return}e=typeof e=="string"?[e]:e;for(var t in e){var n=$id(e[t]);if(n){if(n.className.indexOf("hidden")>=0){n.className=n.className.replace("hidden","")}else{n.style.display=n.style.display=="none"?"block":"none"}}}},remove:function(e){if(!e)return;var t=typeof e;if(t=="function")return;if(t=="string")e=$id(e);if(e&&e.parentNode)e.parentNode.removeChild(e)},documentHeight:function(){var e=document.documentElement?document.documentElement:document.body;return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},screenWidth:function(){var e=null;if(window.screen!=null)e=window.screen.availWidth;if(window.innerWidth!=null)e=window.innerWidth;if(document.body!=null)e=document.body.clientWidth;return e},screenHeight:function(){var e=null;if(window.screen!=null)e=window.screen.availHeight;if(window.innerHeight!=null)e=window.innerHeight;if(document.body!=null)e=document.body.clientHeight;return e},preventDefault:function(e){e=e||window.event;if(e.preventDefault){e.preventDefault()}e.returnValue=false},addLayer:function(e,t,n){if(!n){for(var r in window._layers){$ui.hide(window._layers[r])}}var i=document.createElement("div");i.id="layer_"+window._layerIDX;i.setAttribute("layer",window._layerIDX);i.className="layer";i.style.height=$ui.documentHeight();window._layers.push(i);window._layerIDX++;document.body.appendChild(i);i.css({width:"100%",height:"100%",zIndex:100+window._layerIDX,position:"absolute",top:"0px",left:"0px",right:"0px",bottom:"0px",margin:"0px",border:"0px",padding:"0px",textAlign:"center"});if(e){e(i,t)}},removeLayer:function(e){var t=null;if(e){t=e.layer;if(!t)return;while(window._layers.length>0){var n=window._layers.pop();if(n.id==t.id){t.parentNode.removeChild(t);break}else if("message"==n.attr("layer-type")){n.parentNode.removeChild(n)}}}else{t=window._layers.pop();if(t){t.parentNode.removeChild(t)}}$ui.showLastLayer()},showLastLayer:function(){var e=window._layers.length;if(e>0){var t=window._layers[e-1];if("message"==t.attr("layer-type")){window._layers.pop();return $ui.showLastLayer()}if($id(t.id))$ui.show(t);else{window._layers.pop();return $ui.showLastLayer()}}else{if($conf.default_view){$app.loadView($conf.default_view)}else{window.location=window.location}}},bringLayerToFront:function(e){var t=[];for(var n in window._layers){var r=window._layers[n];if(r.attr("layer")!=e.attr("layer")){t.push(r)}}t.push(e);e.id="layer_"+window._layerIDX;e.setAttribute("layer",window._layerIDX);e.style.display="block";e.style.zIndex=100+window._layerIDX;window._layerIDX++;window._layers=t},showMessage:function(e,t,n){$ui.addLayer(function(n,r){n.attr("layer-type","message");n.className="layer-black";if(window.addEventListener){window.addEventListener("DOMMouseScroll",$ui.preventDefault,false)}window.onmousewheel=$ui.preventDefault;if(document.onmousewheel)document.onmousewheel=$ui.preventDefault;var i=$id("messageBox");var s=240;n.style.top=document.body.scrollTop+"px";if(!i)i=$div({id:"messageBox",html:e},n).css("marginTop",s+"px");if(t&&typeof t=="function")t(r,i);else{var o=parseInt(t);if(o>0){$utils.setTimeout($ui.hideMessage,o)}}},n,true)},updateMessage:function(e,t,n){var r=$id("messageBox");if(!r)return;if(n)r.innerHTML+=e;else r.innerHTML=e;if(t>0){$utils.setTimeout($ui.hideMessage,t)}},hideMessage:function(e){var t=$id("messageBox");if(t){if(window.removeEventListener){window.removeEventListener("DOMMouseScroll",$ui.preventDefault,false)}window.onmousewheel=document.onmousewheel=null;if(t.parentNode.getAttribute("layer")){$ui.removeLayer()}else $ui.remove(t)}},progressBar:function(e,t,n){var r=function(e,t,n){n=n||{};var r=n.width||240;var i=n.height||18;var s=t;var o=0;var u=n.label||"Loading ... ";var a=$div({id:"progress-bar-frame"},e).css({margin:"300px auto auto auto",position:"relative",width:r+"px",height:i+"px",padding:"0px",border:"3px double #666",borderRadius:"5px",fontSize:"0pt"});var f=$canvas({width:r,height:i},a);var l=$span({id:"progress-bar-label",html:u+"0%"},document.body).css(n.labelStyle||{position:"absolute",top:310+i+"px",width:"100%",height:"30px",zIndex:100,color:"#000",textAlign:"center",fontFamily:"verdana"});var c=f.getContext("2d");var h=n.update||null;var p=n.finish||null;c.fillStyle=n.bgColor||"#666";c.strokeStyle=n.strokeColor||"#CCC";c.lineWidth=10;this.update=function(e){o++;var t=parseInt(o*100/s);if(h){h(t,e)}f.attr({value:t});f.animate({duration:300,step:function(e,t){var n=e.attr("value");var s=t*n/100*r;c.fillRect(0,0,s,i);c.beginPath();for(var o=0;o<=s/20;o++){c.moveTo(o*20+10,-5);c.lineTo(o*20,i+5)}c.closePath();c.stroke()}});l.innerHTML=u+t+"%";if(t>=100){$ui.remove("progress-bar-frame");$ui.remove("progress-bar-label");if(p){p()}}}};return new r(e,t,n)},showAlertWindow:function(e,t,n,r){$ui.showMessage(e,function(e,t){t.addClass("alert-window");$div([$a({className:"button orange",html:"OK",data:e.data,onclick:e.ok}),$a({className:"button gray",html:"Cancel",onclick:function(t){$ui.hideMessage();if(e.cancel)e.cancel(t)}})],t).attr("class","button-bar buttons")},{ok:n,cancel:r,data:t})},imageUploadWindow:function(e,t){var n=$id("tempImages");if(n==undefined){n=$form({id:"tempImages",enctype:"multipart/form-data"},document.body).css({border:"0px",height:"0px",width:"0px",display:"none"});var r={id:"tempImage",type:"file",name:"tempImage"};if(t)r["multiple"]="multiple";var i=$input(r,n);i.bind("change",e);$utils.fire(i,"click")}else{n.style.display="block";$utils.fire("tempImage","click");$utils.setTimeout(function(){$id("tempImages").style.display="none"},100)}},loading:function(e,t){var n=$div({id:"loading"},e).css({width:"50px"});if(t){n.css(t)}var r=$e("canvas",{id:"canv",width:"50px",height:"20px"},n);var i=r.getContext("2d");var s={frame:60,duration:400,step:function(e,t){i.clearRect(0,0,70,25);var n=parseInt(t/.2)+1;if(n>5)n=5;for(var o=0;o<n;o++){i.fillStyle="rgb("+(180-o*32)+","+(180-o*32)+","+(180-o*32)+")";i.fillRect(o*10,10-o,7,10+o)}if(t>=1){r.animate(s)}}};r.animate(s);return n},_view:undefined};var $http={getRequest:function(){return window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")},ajax:function(e,t,n,r,i,s){t=$conf.http_host&&t.indexOf("http")!=0?$conf.http_host+t:t;var o=$http.getRequest();if(!i)i="json";o.runtimeParams={callback:r,format:i};if(s)o.runtimeParams.onprogress=s;var u=false;if(e=="UPLOAD"){e="POST";u=true;o.upload.addEventListener("progress",function(e){var t=parseInt(100-e.loaded/e.total*100);if(o.runtimeParams.onprogress)o.runtimeParams.onprogress(t)},false)}o.onreadystatechange=function(){if(o.readyState==4){if(o.status==200){if(o.runtimeParams.callback){var e=o.responseText;if(o.runtimeParams.format=="json"){try{e=JSON.parse(e)}catch(t){o.runtimeParams.callback(null,{message:"json_error",data:e})}}o.runtimeParams.callback(e)}}else{var n={code:o.status,message:o.getResponseHeader("ERROR_MESSAGE")};o.runtimeParams.callback(null,n)}}};var a="";if(n){var f=[];for(var l in n){l=l.replace(/\//g,"%2F").replace(/\s/g,"%20");var c=n[l]+"";c=!u?c.replace(/\//g,"%2F").replace(/\s/g,"%20"):c;f.push(l+"="+c)}a=f.join("&");if(e=="GET"){var h=t.indexOf("?")>0?"&":"?";t+=h+a}}e=e.toUpperCase();console.log("http send ",e,t,a);o.open(e,t,true);if(e=="POST"||e=="PUT"||e=="DELETE"){o.setRequestHeader("Content-type","application/x-www-form-urlencoded");o.send(a)}else o.send()},get:function(e,t,n,r){$http.ajax("GET",e,t,n,r)},post:function(e,t,n,r){$http.ajax("POST",e,t,n,r)},put:function(e,t,n,r){$http.ajax("PUT",e,t,n,r)},del:function(e,t,n,r){$http.ajax("DELETE",e,t,n,r)},upload:function(e,t,n,r,i){$http.ajax("UPLOAD",e,t,n,i,r)}};var _viewer_id=$utils.getCookie("tid")