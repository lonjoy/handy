define("#switchable/0.9.5/plugins/autoplay",["$"],function(a,b,c){function e(a,b){function d(){d.stop(),c=setTimeout(a,b)}b=b||200;var c;return d.stop=function(){c&&(clearTimeout(c),c=0)},d}var d=a("$");c.exports={attrs:{autoplay:!0,interval:5e3},isNeeded:function(){return this.get("autoplay")},install:function(){function f(){g(),e.paused=!1,c=setInterval(function(){if(e.paused)return;e.next()},d)}function g(){c&&(clearInterval(c),c=null),e.paused=!0}var a=this.element,b="."+this.cid,c,d=this.get("interval"),e=this;f(),this.stop=g,this.start=f},destroy:function(){var a="."+this.cid;this.stop()}}});