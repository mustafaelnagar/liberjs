liberjs
=======


A pure javascript web framework

# Goals
* Liberated the server from view rendering. to let it concentrate on API/Calculating/Auth/SEO ...
* Save your much time from making pages UI. 
* Make the view transition under controll by independent logic
* Provide better user expierence by reduce the delay on screen transition.

# Main features
* Written in pure JS
* Message driven architecture, all view controllers only need to implement required delegate methods .
* Only requied libraries will be included automatically.
* render HTML with js methods named as same as HTML Tags, and support nested layout.
* Veriable utils to make it easier to use basical datatypes | gennerate animation | play HTTP/Soccket request...
* Reuse resources like rendered HTML, data ... to improve the performance.
* Multiple layers
* History control.
* works on IE8+ , Webkit(Chrome, Safari, Opera), Firefox.


# About The Framework

* [Installation Guide](#installation-guide)


----

* [One Minute Guide](#one-minute-guide)
* [Five Minutes Guide](#five-minutes-guide)

----

* [Architecture](#architecture)
* [View Controllers & Delegate](#view-controllers--delegate)
* [Selectors](#selectors)
* [Draw HTML Tags](#draw-html-tags)
* [Animations](#animations)
* [HTTP Request](#http-request)
* [Socket Request](#socket-request)
* [Garbage Collection](#garbage-collection)
* [History](#history)
* [Source Code Compression](#source-code-compression)


----

* [Class Reference](#class-reference)



## Installation Guide

* download or checkout all js files from here 

* put them in your WEBROOT/JS_DIR


----

## One Minute Guide
After the [Installation Guide](#installation-guide).

1) In your HTML.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
  <title>Test page of liber.js</title>
  <script src="YOUR_JS_PATH/liber.js"></script>
  <script src="YOUR_JS_PATH/views.js"></script>     
</head>
<body>
</body>
</html>

```

2) In your views.js

```javascript

my_view = {
    name : "my_view",
    drawContent : function(wrapper, layer){ //implement the delegate method
        TABLE([
            TR([
                TH("ColHeader1"),
                TH("ColHeader2"),
                TH("ColHeader3")
            ]),
            TR([
                TD("ColValue1"),
                TD("ColValue2"),
                TD("ColValue3")
            ]),
        ], document.body);
    }
};

window.onload = function(){
  $app.start("my_view");
}

```

3) Check the result on your browser


----


## Five Minutes Guide
* Read [#OneMinuteGuide this] first.
* To create common header
```
Coming soon ...
```

* To create common footer
```
Coming soon ...
```

* To customize header of the current view
```
Coming soon ...
```

* To customize footer of the current view
```
Coming soon ...
```

* To customize your layer
```
Coming soon ...
```

* What's next?
    Read from [#Architecture Architecture] please.


----


## Architecture ##
| File | Module | Description |
| --- | --- | --- |
| liber.js | | Core modules & functions |
| | Element.prototype | Let normal DOMElement works like jQuery, which can '''bind''', '''css''', '''attr''', '''animate'''  themselves [[BR]] without create new big objects into the memory like jQuery/ExtJS/dojo does  ... |
| | Date.prototype | |
| | String.prototype | |
| | $app.* | The application (singleton) |
| | $msg.* | Handling event-messages which JS isn't good at |
| | $ui.* | UI tool kits |
| | $http.* | Ajax tool kits |
| | $utils.* | common utilities |
| | $history.* | history control |
| liber.ui.ext.js | | Core modules & functions |
| |  | Extensions like FormView, ListView, Calendar ... |
| liber.net.js | | Core modules & functions |
| | SocketKits($socket.*) | Web socket tool kits (TODO) |
| liber.mapkit.js | | Core modules & functions |
| liber.oauth.js | | common Oauth Library |
| liber.db.js | | Local Storage Database Library |
| | $mk.* | Google map kits |
| | Other utility functions | Such as draw [#DrawHTMLTags HTML TAGS],   [#Selectors Selectors] ...  |

## View Controllers & Delegate

### Layers
Every time your draw a view with $ui.drawView. a new layer will be created and the other layers will be hidden.[[BR]]
Also there will be a [#GarbageCollection Garbage Collection] mechanism to prevent memory overflow.[[BR]]
[[BR]]

### Draw Views With Delegate
There are 3 steps to draw a view so you can implement the following 3 delegate methods to finish drawing.[[BR]]
1. view.drawHeader
 * Optional : default will be $app.drawHeader

2. view.drawContent
 * Required : or the body will be blank

3. view.drawFooter
 * Optional : default will be $app.drawFooter.

To present the view controller. you have to call
```javascript
  // this will be changed in the future.
  $app.loadView("YOUR_VIEW_NAME"); 
  
  // or 
  $div({url:"YOUR_VIEW_NAME?param1=b&param2=b"});
  
```

## Selectors
* $(query, thisLayer) selector : XPath selector, similar with jQuery selector. but you can specify if select from all layer or just current one. and the return value is Element but not jQuery Object
```javascript
$("#id"); //return Element
$(".className"); //return Element list
$("#myId .className", function(el, idx){ ... }); //do foreach on selected elements;
```

* $id() selector : = document.getElementById() MUCH faster than XPath selector $("#ID")

## Draw HTML Tags

### Normal Tags
#### Basic Usage :

```javascript
TAG_NAME_UPPERCASE(OPTIONS, TARGET);
$TAG_NAME_LOWERCASE(OPTIONS, TARGET);//or
```

 * There are shortcuts for these tags.
 * table,tr,th,td,div,img,ul,lo,li,p,a,b,strong,textarea,br,hr,form,input,span,label,h1,h2,h3
 * Both '''UPPERCASE''' and '''$LOWERCASE''' of functions as same as the tag names work.

```javascript
$a() == A()
```

* Example : Draw single Element.

```javascript
$img("http://google.com/images/xxxx.png");  // create an Image Element with src=http://.....
$a("http://google.com/", $id("myDiv")); // create a link with href=http://google.com and append to #myDiv
$label("Hey! How are you doing.").css({"color":"red"}).attr({id:"myLabel"}); // create a <label> with innerHTML=Hey!..... and set color=red, id=myLabel

$div({id:"myDiv", html:"the content of this div"}); // create a element like this: <div id="myDiv">the content of this div</div>

```

* Example : Draw Element with children.

```javascript
$table([
    $tr([
        $th("ColHeader1"),
        $th("ColHeader2"),
        $th("ColHeader3")
    ]),
    $tr([
        $td("ColValue1"),
        $td("ColValue2"),
        $td("ColValue3")
    ]),
], document.body);

```

Result
| ColHeader1 | ColHeader2 | ColHeadler3 |
| --- | --- | --- |
| ColValue1 | ColValue2 | ColValue3 |


### Special Form Tags
* select

```
Coming soon ...
```

* checkbox
```
$sel({value1:label1, value2:label2}, {multiple:true})
Coming soon ...
```

* radio
$sel({value1:label1, value2:label2}, {})
```
Coming soon ...
```

### Advanced Topics
* FormView
```javascript
$ui.formView();
Coming soon ...
```

* Show messages
```javascript
$ui.showMessage();
Coming soon ...
```



## Animations

### Usage
```javascript
Element.animate(OPTIONS);

Available OPTIONS:
@delay : time wait to start
@frame : how many frames per second. (1000ms) | 50
@duration : The full time the animation should take, in ms. default = 1000ms
@delta(progress) : A function name, which returns the current animation progress. @see deltas
@style : easeIn(default), easeOut, easeInOut
@step(element, delta) : function. do the real job

Examples:
$id("img").animate({
  delta :"bounce",  
  style : "easeOut",
  step: function(el, delta){
    el.style.marginTop = delta*600;
  }}).animate({
  delta :"quad",
  style :"easeOut",
  step:function(el, delta){
    el.style.marginLeft = delta*600;
    el.style.width = delta*24*10; 
  }});

```

### Deltas
* linear : Average speed.
```
>>>>>>>>>>
```

* quad : Accelerator 
```
o > >> >>> >>>> >>>>>
```

* quad5 : Accelerator faster
```
o > >>> >>>>> >>>>>>> >>>>>>>>>>>
```

* circ : Throwing 
```
o >> > ... > >> >>> >>>>
```

* back : bow - arrow 
```
<< < o > >> >>> >>>>
```

* bounce : 
```
< > < > < > o > >> >>> >>>>
```

* elastic :
```
< > << >> <<< >>> o > >> >>> >>>>
```

### Styles
* easeIn : same with the delta progress.
* easeOut : reverse the delta progress. 
* easeInOut : repeat 0~50% of the time of the delta progress and reverse it on the rest 50%.

## HTTP Request
* .get : $http.get(URL,PARAMS, CALLBACK, FORMAT)
```javascript
$http.get("/api/test", {page:1}, function(res){console.log(res)}, "json");
```

* .post : $http.get(URL,PARAMS, CALLBACK, FORMAT)
```javascript
$http.get("/api/test", {user:U, pass:P}, function(res){console.log(res)}, "html");
```

* .put : $http.get(URL,PARAMS, CALLBACK, FORMAT)
    send request with method = PUT
```javascript
$http.put("/api/test/1", {pass:P}, function(res){console.log(res)}, "text");
```

* .del : $http.get(URL,PARAMS, CALLBACK, FORMAT)
    send request with method = DELETE
```javascript
$http.put("/api/test/1", {}, function(res){console.log(res)}, "json");
```


## Socket Request
```javascript
Coming soon ...
```

## Garbage Collection
TODO : remove inactive layers

## Source Code Compression
TODO : compress the code, and load views dynamically


----


## Class Reference ##

### Element.prototype ###
* .attr(arg1, arg2)
```javascript
  comming soon...
```

* .css(arg1, arg2)
```javascript
  comming soon...
```

* .bind(arg1, arg2)
```javascript
  comming soon...
```
