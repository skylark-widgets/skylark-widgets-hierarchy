/**
 * skylark-widgets-hierarchy - The skylark hierarchy widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-hierarchy/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-browser","skylark-domx-eventer","skylark-domx-noder","skylark-domx-geom","skylark-domx-query","../Hierarchy"],function(e,t,a,r,n,s,i){"use strict";var o,d;if(!s.jstree.plugins.dnd)return s.jstree.defaults.dnd={copy:!0,open_timeout:500,is_draggable:!0,check_while_dragging:!0,always_copy:!1,inside_pos:0,drag_selection:!0,touch:!0,large_drop_target:!1,large_drag_target:!1,use_html5:!1},s.jstree.plugins.dnd=function(e,t){this.init=function(e,a){t.init.call(this,e,a),this.settings.dnd.use_html5=this.settings.dnd.use_html5&&"draggable"in document.createElement("span")},this.bind=function(){t.bind.call(this),this.element.on(this.settings.dnd.use_html5?"dragstart.jstree":"mousedown.jstree touchstart.jstree",this.settings.dnd.large_drag_target?".jstree-node":".jstree-anchor",s.proxy(function(e){if(this.settings.dnd.large_drag_target&&s(e.target).closest(".jstree-node")[0]!==e.currentTarget)return!0;if("touchstart"===e.type&&(!this.settings.dnd.touch||"selected"===this.settings.dnd.touch&&!s(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").hasClass("jstree-clicked")))return!0;var t=this.get_node(e.target),a=this.is_selected(t)&&this.settings.dnd.drag_selection?this.get_top_selected().length:1,r=a>1?a+" "+this.get_string("nodes"):this.get_text(e.currentTarget);if(this.settings.core.force_text&&(r=s.vakata.html.escape(r)),t&&t.id&&t.id!==s.jstree.root&&(1===e.which||"touchstart"===e.type||"dragstart"===e.type)&&(!0===this.settings.dnd.is_draggable||s.isFunction(this.settings.dnd.is_draggable)&&this.settings.dnd.is_draggable.call(this,a>1?this.get_top_selected(!0):[t],e))){if(o={jstree:!0,origin:this,obj:this.get_node(t,!0),nodes:a>1?this.get_top_selected():[t.id]},d=e.currentTarget,!this.settings.dnd.use_html5)return this.element.trigger("mousedown.jstree"),s.vakata.dnd.start(e,o,'<div id="jstree-dnd" class="jstree-'+this.get_theme()+" jstree-"+this.get_theme()+"-"+this.get_theme_variant()+" "+(this.settings.core.themes.responsive?" jstree-dnd-responsive":"")+'"><i class="jstree-icon jstree-er"></i>'+r+'<ins class="jstree-copy" style="display:none;">+</ins></div>');s.vakata.dnd._trigger("start",e,{helper:s(),element:d,data:o})}},this)),this.settings.dnd.use_html5&&this.element.on("dragover.jstree",function(e){return e.preventDefault(),s.vakata.dnd._trigger("move",e,{helper:s(),element:d,data:o}),!1}).on("drop.jstree",s.proxy(function(e){return e.preventDefault(),s.vakata.dnd._trigger("stop",e,{helper:s(),element:d,data:o}),!1},this))},this.redraw_node=function(e,a,r,n){if((e=t.redraw_node.apply(this,arguments))&&this.settings.dnd.use_html5)if(this.settings.dnd.large_drag_target)e.setAttribute("draggable",!0);else{var s,i,o=null;for(s=0,i=e.childNodes.length;s<i;s++)if(e.childNodes[s]&&e.childNodes[s].className&&-1!==e.childNodes[s].className.indexOf("jstree-anchor")){o=e.childNodes[s];break}o&&o.setAttribute("draggable",!0)}return e}},s(function(){var e=!1,t=!1,a=!1,r=!1,n=s('<div id="jstree-marker">&#160;</div>').hide();s(document).on("dnd_start.vakata.jstree",function(t,r){e=!1,a=!1,r&&r.data&&r.data.jstree&&n.appendTo(document.body)}).on("dnd_move.vakata.jstree",function(i,o){var d=o.event.target!==a.target;if(r&&(o.event&&"dragover"===o.event.type&&!d||clearTimeout(r)),o&&o.data&&o.data.jstree&&(!o.event.target.id||"jstree-marker"!==o.event.target.id)){a=o.event;var l,g,c,h,p,_,v,u,f,m,k,y,j,T,w,x,E=s.jstree.reference(o.event.target),b=!1,Y=!1,X=!1;if(E&&E._data&&E._data.dnd)if(n.attr("class","jstree-"+E.get_theme()+(E.settings.core.themes.responsive?" jstree-dnd-responsive":"")),w=o.data.origin&&(o.data.origin.settings.dnd.always_copy||o.data.origin.settings.dnd.copy&&(o.event.metaKey||o.event.ctrlKey)),o.helper.children().attr("class","jstree-"+E.get_theme()+" jstree-"+E.get_theme()+"-"+E.get_theme_variant()+" "+(E.settings.core.themes.responsive?" jstree-dnd-responsive":"")).find(".jstree-copy").first()[w?"show":"hide"](),o.event.target!==E.element[0]&&o.event.target!==E.get_container_ul()[0]||0!==E.get_container_ul().children().length){if((b=E.settings.dnd.large_drop_target?s(o.event.target).closest(".jstree-node").children(".jstree-anchor"):s(o.event.target).closest(".jstree-anchor"))&&b.length&&b.parent().is(".jstree-closed, .jstree-open, .jstree-leaf")&&(Y=b.offset(),X=(void 0!==o.event.pageY?o.event.pageY:o.event.originalEvent.pageY)-Y.top,c=b.outerHeight(),_=X<c/3?["b","i","a"]:X>c-c/3?["a","i","b"]:X>c/2?["i","a","b"]:["i","b","a"],s.each(_,function(a,i){switch(i){case"b":l=Y.left-6,g=Y.top,h=E.get_parent(b),p=b.parent().index();break;case"i":j=E.settings.dnd.inside_pos,T=E.get_node(b.parent()),l=Y.left-2,g=Y.top+c/2+1,h=T.id,p="first"===j?0:"last"===j?T.children.length:Math.min(j,T.children.length);break;case"a":l=Y.left-6,g=Y.top+c,h=E.get_parent(b),p=b.parent().index()+1}for(v=!0,u=0,f=o.data.nodes.length;u<f;u++)if(m=o.data.origin&&(o.data.origin.settings.dnd.always_copy||o.data.origin.settings.dnd.copy&&(o.event.metaKey||o.event.ctrlKey))?"copy_node":"move_node",k=p,"move_node"===m&&"a"===i&&o.data.origin&&o.data.origin===E&&h===E.get_parent(o.data.nodes[u])&&(y=E.get_node(h),k>s.inArray(o.data.nodes[u],y.children)&&(k-=1)),!(v=v&&(E&&E.settings&&E.settings.dnd&&!1===E.settings.dnd.check_while_dragging||E.check(m,o.data.origin&&o.data.origin!==E?o.data.origin.get_node(o.data.nodes[u]):o.data.nodes[u],h,k,{dnd:!0,ref:E.get_node(b.parent()),pos:i,origin:o.data.origin,is_multi:o.data.origin&&o.data.origin!==E,is_foreign:!o.data.origin})))){E&&E.last_error&&(t=E.last_error());break}var X,C;if("i"===i&&b.parent().is(".jstree-closed")&&E.settings.dnd.open_timeout&&(o.event&&"dragover"===o.event.type&&!d||(r&&clearTimeout(r),r=setTimeout((X=E,C=b,function(){X.open_node(C)}),E.settings.dnd.open_timeout))),v)return(x=E.get_node(h,!0)).hasClass(".jstree-dnd-parent")||(s(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),x.addClass("jstree-dnd-parent")),e={ins:E,par:h,pos:"i"!==i||"last"!==j||0!==p||E.is_loaded(T)?p:"last"},n.css({left:l+"px",top:g+"px"}).show(),o.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"),o.event.originalEvent&&o.event.originalEvent.dataTransfer&&(o.event.originalEvent.dataTransfer.dropEffect=w?"copy":"move"),t={},_=!0,!1}),!0===_))return}else{for(v=!0,u=0,f=o.data.nodes.length;u<f&&(v=v&&E.check(o.data.origin&&(o.data.origin.settings.dnd.always_copy||o.data.origin.settings.dnd.copy&&(o.event.metaKey||o.event.ctrlKey))?"copy_node":"move_node",o.data.origin&&o.data.origin!==E?o.data.origin.get_node(o.data.nodes[u]):o.data.nodes[u],s.jstree.root,"last",{dnd:!0,ref:E.get_node(s.jstree.root),pos:"i",origin:o.data.origin,is_multi:o.data.origin&&o.data.origin!==E,is_foreign:!o.data.origin}));u++);if(v)return e={ins:E,par:s.jstree.root,pos:"last"},n.hide(),o.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"),void(o.event.originalEvent&&o.event.originalEvent.dataTransfer&&(o.event.originalEvent.dataTransfer.dropEffect=w?"copy":"move"))}s(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),e=!1,o.helper.find(".jstree-icon").removeClass("jstree-ok").addClass("jstree-er"),o.event.originalEvent&&o.event.originalEvent.dataTransfer&&(o.event.originalEvent.dataTransfer.dropEffect="none"),n.hide()}}).on("dnd_scroll.vakata.jstree",function(t,r){r&&r.data&&r.data.jstree&&(n.hide(),e=!1,a=!1,r.helper.find(".jstree-icon").first().removeClass("jstree-ok").addClass("jstree-er"))}).on("dnd_stop.vakata.jstree",function(i,o){if(s(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),r&&clearTimeout(r),o&&o.data&&o.data.jstree){n.hide().detach();var d,l,g=[];if(e){for(d=0,l=o.data.nodes.length;d<l;d++)g[d]=o.data.origin?o.data.origin.get_node(o.data.nodes[d]):o.data.nodes[d];e.ins[o.data.origin&&(o.data.origin.settings.dnd.always_copy||o.data.origin.settings.dnd.copy&&(o.event.metaKey||o.event.ctrlKey))?"copy_node":"move_node"](g,e.par,e.pos,!1,!1,!1,o.data.origin)}else(d=s(o.event.target).closest(".jstree")).length&&t&&t.error&&"check"===t.error&&(d=d.jstree(!0))&&d.settings.core.error.call(this,t);a=!1,e=!1}}).on("keyup.jstree keydown.jstree",function(i,o){(o=s.vakata.dnd._get())&&o.data&&o.data.jstree&&("keyup"===i.type&&27===i.which?(r&&clearTimeout(r),e=!1,t=!1,a=!1,r=!1,n.hide().detach(),s.vakata.dnd._clean()):(o.helper.find(".jstree-copy").first()[o.data.origin&&(o.data.origin.settings.dnd.always_copy||o.data.origin.settings.dnd.copy&&(i.metaKey||i.ctrlKey))?"show":"hide"](),a&&(a.metaKey=i.metaKey,a.ctrlKey=i.ctrlKey,s.vakata.dnd._trigger("move",a))))})}),function(e){e.vakata.html={div:e("<div />"),escape:function(t){return e.vakata.html.div.text(t).html()},strip:function(t){return e.vakata.html.div.empty().append(e.parseHTML(t)).text()}};var t={element:!1,target:!1,is_down:!1,is_drag:!1,helper:!1,helper_w:0,data:!1,init_x:0,init_y:0,scroll_l:0,scroll_t:0,scroll_e:!1,scroll_i:!1,is_touch:!1};e.vakata.dnd={settings:{scroll_speed:10,scroll_proximity:20,helper_left:5,helper_top:10,threshold:5,threshold_touch:10},_trigger:function(t,a,r){void 0===r&&(r=e.vakata.dnd._get()),r.event=a,e(document).trigger("dnd_"+t+".vakata",r)},_get:function(){return{data:t.data,element:t.element,helper:t.helper}},_clean:function(){t.helper&&t.helper.remove(),t.scroll_i&&(clearInterval(t.scroll_i),t.scroll_i=!1),t={element:!1,target:!1,is_down:!1,is_drag:!1,helper:!1,helper_w:0,data:!1,init_x:0,init_y:0,scroll_l:0,scroll_t:0,scroll_e:!1,scroll_i:!1,is_touch:!1},e(document).off("mousemove.vakata.jstree touchmove.vakata.jstree",e.vakata.dnd.drag),e(document).off("mouseup.vakata.jstree touchend.vakata.jstree",e.vakata.dnd.stop)},_scroll:function(a){if(!t.scroll_e||!t.scroll_l&&!t.scroll_t)return t.scroll_i&&(clearInterval(t.scroll_i),t.scroll_i=!1),!1;if(!t.scroll_i)return t.scroll_i=setInterval(e.vakata.dnd._scroll,100),!1;if(!0===a)return!1;var r=t.scroll_e.scrollTop(),n=t.scroll_e.scrollLeft();t.scroll_e.scrollTop(r+t.scroll_t*e.vakata.dnd.settings.scroll_speed),t.scroll_e.scrollLeft(n+t.scroll_l*e.vakata.dnd.settings.scroll_speed),r===t.scroll_e.scrollTop()&&n===t.scroll_e.scrollLeft()||e.vakata.dnd._trigger("scroll",t.scroll_e)},start:function(a,r,n){"touchstart"===a.type&&a.originalEvent&&a.originalEvent.changedTouches&&a.originalEvent.changedTouches[0]&&(a.pageX=a.originalEvent.changedTouches[0].pageX,a.pageY=a.originalEvent.changedTouches[0].pageY,a.target=document.elementFromPoint(a.originalEvent.changedTouches[0].pageX-window.pageXOffset,a.originalEvent.changedTouches[0].pageY-window.pageYOffset)),t.is_drag&&e.vakata.dnd.stop({});try{a.currentTarget.unselectable="on",a.currentTarget.onselectstart=function(){return!1},a.currentTarget.style&&(a.currentTarget.style.touchAction="none",a.currentTarget.style.msTouchAction="none",a.currentTarget.style.MozUserSelect="none")}catch(e){}return t.init_x=a.pageX,t.init_y=a.pageY,t.data=r,t.is_down=!0,t.element=a.currentTarget,t.target=a.target,t.is_touch="touchstart"===a.type,!1!==n&&(t.helper=e("<div id='vakata-dnd'></div>").html(n).css({display:"block",margin:"0",padding:"0",position:"absolute",top:"-2000px",lineHeight:"16px",zIndex:"10000"})),e(document).on("mousemove.vakata.jstree touchmove.vakata.jstree",e.vakata.dnd.drag),e(document).on("mouseup.vakata.jstree touchend.vakata.jstree",e.vakata.dnd.stop),!1},drag:function(a){if("touchmove"===a.type&&a.originalEvent&&a.originalEvent.changedTouches&&a.originalEvent.changedTouches[0]&&(a.pageX=a.originalEvent.changedTouches[0].pageX,a.pageY=a.originalEvent.changedTouches[0].pageY,a.target=document.elementFromPoint(a.originalEvent.changedTouches[0].pageX-window.pageXOffset,a.originalEvent.changedTouches[0].pageY-window.pageYOffset)),t.is_down){if(!t.is_drag){if(!(Math.abs(a.pageX-t.init_x)>(t.is_touch?e.vakata.dnd.settings.threshold_touch:e.vakata.dnd.settings.threshold)||Math.abs(a.pageY-t.init_y)>(t.is_touch?e.vakata.dnd.settings.threshold_touch:e.vakata.dnd.settings.threshold)))return;t.helper&&(t.helper.appendTo(document.body),t.helper_w=t.helper.outerWidth()),t.is_drag=!0,e(t.target).one("click.vakata",!1),e.vakata.dnd._trigger("start",a)}var r=!1,n=!1,s=!1,i=!1,o=!1,d=!1,l=!1,g=!1,c=!1,h=!1;return t.scroll_t=0,t.scroll_l=0,t.scroll_e=!1,e(e(a.target).parentsUntil("body").addBack().get().reverse()).filter(function(){return/^auto|scroll$/.test(e(this).css("overflow"))&&(this.scrollHeight>this.offsetHeight||this.scrollWidth>this.offsetWidth)}).each(function(){var r=e(this),n=r.offset();if(this.scrollHeight>this.offsetHeight&&(n.top+r.height()-a.pageY<e.vakata.dnd.settings.scroll_proximity&&(t.scroll_t=1),a.pageY-n.top<e.vakata.dnd.settings.scroll_proximity&&(t.scroll_t=-1)),this.scrollWidth>this.offsetWidth&&(n.left+r.width()-a.pageX<e.vakata.dnd.settings.scroll_proximity&&(t.scroll_l=1),a.pageX-n.left<e.vakata.dnd.settings.scroll_proximity&&(t.scroll_l=-1)),t.scroll_t||t.scroll_l)return t.scroll_e=e(this),!1}),t.scroll_e||(r=e(document),n=e(window),s=r.height(),i=n.height(),o=r.width(),d=n.width(),l=r.scrollTop(),g=r.scrollLeft(),s>i&&a.pageY-l<e.vakata.dnd.settings.scroll_proximity&&(t.scroll_t=-1),s>i&&i-(a.pageY-l)<e.vakata.dnd.settings.scroll_proximity&&(t.scroll_t=1),o>d&&a.pageX-g<e.vakata.dnd.settings.scroll_proximity&&(t.scroll_l=-1),o>d&&d-(a.pageX-g)<e.vakata.dnd.settings.scroll_proximity&&(t.scroll_l=1),(t.scroll_t||t.scroll_l)&&(t.scroll_e=r)),t.scroll_e&&e.vakata.dnd._scroll(!0),t.helper&&(c=parseInt(a.pageY+e.vakata.dnd.settings.helper_top,10),h=parseInt(a.pageX+e.vakata.dnd.settings.helper_left,10),s&&c+25>s&&(c=s-50),o&&h+t.helper_w>o&&(h=o-(t.helper_w+2)),t.helper.css({left:h+"px",top:c+"px"})),e.vakata.dnd._trigger("move",a),!1}},stop:function(a){if("touchend"===a.type&&a.originalEvent&&a.originalEvent.changedTouches&&a.originalEvent.changedTouches[0]&&(a.pageX=a.originalEvent.changedTouches[0].pageX,a.pageY=a.originalEvent.changedTouches[0].pageY,a.target=document.elementFromPoint(a.originalEvent.changedTouches[0].pageX-window.pageXOffset,a.originalEvent.changedTouches[0].pageY-window.pageYOffset)),t.is_drag)a.target!==t.target&&e(t.target).off("click.vakata"),e.vakata.dnd._trigger("stop",a);else if("touchend"===a.type&&a.target===t.target){var r=setTimeout(function(){e(a.target).click()},100);e(a.target).one("click",function(){r&&clearTimeout(r)})}return e.vakata.dnd._clean(),!1}}}(s),s});
//# sourceMappingURL=../sourcemaps/addons/dnd.js.map
