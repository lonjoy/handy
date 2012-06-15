define("#dialog/0.9.0/animDialog",["$","overlay","baseDialog"],function(a,b,c){function h(a){this._layer||(this._layer=new e({width:a[0].offsetWidth,height:a[0].offsetHeight,zIndex:100,visible:!0,style:{overflow:"hidden"},align:{baseElement:a[0]}})),this._layer.show()}var d=a("$"),e=a("overlay"),f=a("baseDialog"),g=f.extend({attrs:{effect:{type:"fade",duration:400,from:"up"},showEffect:{},hideEffect:{}},show:function(){this._rendered||this.render();var a=this.element,b=this,c=this.get("showEffect");c===null?c={type:"none"}:c=d.extend({},this.get("effect"),c);if(c.type==="none")a.show();else if(c.type==="fade")a.css({display:"block",opacity:0}).animate({opacity:1},c.duration,c.easing);else if(c.type==="slide"){var e=/left|right/i.test(c.from)?"x":"y",f=a.css({display:"block",opacity:0})&&a[0].offsetWidth,g=a[0].offsetHeight;a.css("opacity",1);switch(e){case"x":a.css({width:0,overflow:"hidden"}).animate({width:f},c.duration,c.easing,function(){a.css({overflow:"auto"})});break;case"y":a.css({height:0,overflow:"hidden"}).animate({height:g},c.duration,c.easing,function(){a.css({overflow:"auto"})})}}else if(c.type==="move"){a.css({display:"block"}),a.attr("tabindex",null),h.call(this,a);var i=this._layer.get("width"),j=this._layer.get("height"),k;a.appendTo(this._layer.element).css({top:0,left:0,display:"block"}),c.from=="left"?(a.css("left",parseInt(a.css("left"))-i),k={left:0}):c.from=="right"?(a.css("left",parseInt(a.css("left"))+i),k={left:0}):c.from=="up"?(a.css("top",parseInt(a.css("top"))-j),k={top:0}):c.from=="down"&&(a.css("top",parseInt(a.css("top"))+j),k={top:0}),a.animate(k,{duration:c.duration,easing:c.easing,complete:function(){b.element.appendTo(document.body),b.set("align",b.get("align")),b._layer.destroy(),b._layer=null}})}return this},hide:function(){var a=this.element,b=this,c=this.get("hideEffect");c===null?c={type:"none"}:c=d.extend({},this.get("effect"),c);if(!c||c.type==="none")a.hide();else if(c.type==="fade")a.animate({opacity:0},c.duration,c.easing,function(){a.css({display:"none",opacity:1})});else if(c.type==="slide"){var e=/left|right/i.test(c.from)?"x":"y",f=a[0].offsetWidth,g=a[0].offsetHeight;switch(e){case"x":a.css({overflow:"hidden"}).animate({width:0},c.duration,c.easing,function(){a.css({width:f}).hide()});break;case"y":a.css({overflow:"hidden"}).animate({height:0},c.duration,c.easing,function(){a.css({height:g}).hide()})}}else if(c.type==="move"){h.call(this,a);var i=this._layer.get("width"),j=this._layer.get("height"),k;a.appendTo(this._layer.element).css({top:0,left:0,display:"block"}),c.from=="left"?k={left:-i}:c.from=="right"?k={left:i}:c.from=="up"?k={top:-j}:c.from=="down"&&(k={top:j}),a.animate(k,{duration:c.duration,easing:c.easing,complete:function(){b.element.appendTo(document.body),b.set("align",b.get("align")),b.element.hide(),b._layer.destroy(),b._layer=null}})}return this}});c.exports=g});