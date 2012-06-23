define("#floatLayer/0.9.0/floatLayer",["overlay"],function(a,b,c){var d=a("overlay"),e=function(a,b){var c=this,d;c.options={duration:"100ms"};if(typeof b=="object")for(d in b)c.options[d]=b[d];c.element=typeof a=="object"?a:document.querySelector(a),c.element.style.webkitTransitionProperty="-webkit-transform",c.element.style.webkitTransitionTimingFunction="cubic-bezier(0,0,0.25,1)",c.element.style.webkitTransitionDuration=c.element.style.webkitTransitionDuration=c.options.duration,c.element.style.webkitTransform=g+"0,0"+h,a=c.element,c.x1=c.x2=c.y1=c.y2=0;do c.x1+=a.offsetLeft,c.y1+=a.offsetTop;while(a=a.offsetParent);c.x2=c.x1+c.element.offsetWidth,c.y2=c.y1+c.element.offsetHeight,setTimeout(function(){c.follow()},0),window.addEventListener("scroll",c,!1)},f="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,g="translate"+(f?"3d(":"("),h=f?",0)":")";e.prototype={handleEvent:function(a){a.type=="scroll"&&this.follow(a)},follow:function(a){var b=this,c=window.scrollX,d=window.scrollY;window.scrollX>b.x1||window.scrollY>b.y1?(b.element.className=b.element.className?b.element.className+" float":"float",b.element.style.left=b.x1+"px",b.element.style.top=b.y1+"px",b.element.style.webkitTransform=g+c+"px,"+d+"px"+h):(b.element.style.webkitTransform=g+"0,0"+h,b.element.className=b.element.className.replace(/(^|\\s)float(\\s|$)/gi,""),b.element.style.left="",b.element.style.top="")}},c.exports=e});