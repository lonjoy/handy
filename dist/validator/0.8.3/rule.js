define("#validator/0.8.3/rule",["#zepto/0.9.0/zepto","#widget/0.9.16/widget","#base/0.9.16/base","#class/0.9.2/class","#events/0.9.1/events","#base/0.9.16/aspect","#base/0.9.16/attribute","#jquery/1.7.2/jquery","#widget/0.9.16/daparser","#widget/0.9.16/auto-render","#validator/0.8.3/async"],function(e,t,n){function f(e,t,n){if(r[e])throw new Error("The rule with the same name has existed and overriding a rule is not allowed!");t instanceof a?r[e]=new a(e,t.operator):r[e]=new a(e,t),c(e,n)}function l(e,t){var n=e.rule,r;return e.message?s.isPlainObject(e.message)?r=e.message[t?"success":"failure"]:r=t?"":e.message:r=i[n][t?"success":"failure"],r?d(e,r):r}function c(e,t){s.isPlainObject(t)?i[e]=t:i[e]={failure:t}}function h(e){return r[e].operator}function p(e,t){if(t){var n=r[e];return new a(null,function(e,r){n.operator(s.extend(null,e,t),r)})}return r[e]}function d(e,t){var n=t,r=/\{\{[^\{\}]*\}\}/g,i=/\{\{(.*)\}\}/,o=t.match(r);return o&&s.each(o,function(t,r){var o=r.match(i)[1],u=e[s.trim(o)];n=n.replace(r,u)}),n}var r={},i={},s=e("#zepto/0.9.0/zepto"),o=e("#validator/0.8.3/async"),u=e("#widget/0.9.16/widget"),a=u.extend({initialize:function(e,t){this.name=e;if(t instanceof RegExp)this.operator=function(e,n){var r=t.test(s(e.element).val());n(r?null:e.rule,l(e,r))};else{if(typeof t!="function")throw new Error("The second argument must be a regexp or a function.");this.operator=function(e,n){var r=t(e,n);r!==undefined&&n(r?null:e.rule,l(e,r))}}},and:function(e,t){if(e instanceof a)var n=e;else var n=p(e,t);if(!n)throw new Error('No rule with name "'+e+'" found.');var r=this,i=function(e,t){r.operator(e,function(r,i){r?t(r,l(e,!r)):n.operator(e,t)})};return new a(null,i)},or:function(e,t){if(e instanceof a)var n=e;else var n=p(e,t);if(!n)throw new Error('No rule with name "'+e+'" found.');var r=this,i=function(e,t){r.operator(e,function(r,i){r?n.operator(e,t):t(null,l(e,!0))})};return new a(null,i)},not:function(e){var t=p(this.name,e),n=function(e,n){t.operator(e,function(t,r){t?n(null,l(e,!0)):n(!0,l(e,!1))})};return new a(null,n)}});f("required",function(e){var t=s(e.element),n=t.attr("type");switch(n){case"checkbox":case"radio":var r=!1;return t.each(function(e,t){if(s(t).prop("checked"))return r=!0,!1}),r;default:return Boolean(t.val())}},"{{display}}不能为空。"),f("email",/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,"{{display}}的格式不正确。"),f("text",/.*/),f("password",/.*/),f("radio",/.*/),f("checkbox",/.*/),f("url",/^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,"{{display}}的格式不正确。"),f("number",/^[+-]?[1-9][0-9]*(\.[0-9]+)?([eE][+-][1-9][0-9]*)?$|^[+-]?0?\.[0-9]+([eE][+-][1-9][0-9]*)?$/,"{{display}}的格式不正确。"),f("date",/^\d{4}\-[01]?\d\-[0-3]?\d$|^[01]\d\/[0-3]\d\/\d{4}$|^\d{4}年[01]?\d月[0-3]?\d[日号]$/,"{{display}}的格式不正确。"),f("min",function(e){var t=e.element,n=e.min;return Number(t.val())>=Number(n)},"{{display}}必须大于或者等于{{min}}。"),f("max",function(e){var t=e.element,n=e.max;return Number(t.val())<=Number(n)},"{{display}}必须小于或者等于{{max}}。"),f("minlength",function(e){var t=e.element,n=t.val().length;return n>=Number(e.min)},"{{display}}的长度必须大于或等于{{min}}。"),f("maxlength",function(e){var t=e.element,n=t.val().length;return n<=Number(e.max)},"{{display}}长度必须小于或等于{{max}}。"),f("mobile",/^1\d{10}$/,"请输入正确的{{display}}。"),f("confirmation",function(e){var t=e.element,n=s(e.target);return t.val()==n.val()},"{{display}}的内容和{{name}}不同。"),n.exports={addRule:f,setMessage:c,getRule:p,getOperator:h}});