/**
 * skylark-widgets-hierarchy - The skylark hierarchy widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-hierarchy/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-browser","skylark-domx-eventer","skylark-domx-noder","skylark-domx-geom","skylark-domx-query","../Hierarchy"],function(e,t,r,o,s,n,i){"use strict";if(!n.jstree.plugins.wholerow){var l=document.createElement("DIV");return l.setAttribute("unselectable","on"),l.setAttribute("role","presentation"),l.className="jstree-wholerow",l.innerHTML="&#160;",n.jstree.plugins.wholerow=function(t,r){this.bind=function(){r.bind.call(this),this.element.on("ready.jstree set_state.jstree",e.proxy(function(){this.hide_dots()},this)).on("init.jstree loading.jstree ready.jstree",e.proxy(function(){this.get_container_ul().addClass("jstree-wholerow-ul")},this)).on("deselect_all.jstree",e.proxy(function(e,t){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked")},this)).on("changed.jstree",e.proxy(function(e,t){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");var r,o,s=!1;for(r=0,o=t.selected.length;r<o;r++)(s=this.get_node(t.selected[r],!0))&&s.length&&s.children(".jstree-wholerow").addClass("jstree-wholerow-clicked")},this)).on("open_node.jstree",e.proxy(function(e,t){this.get_node(t.node,!0).find(".jstree-clicked").parent().children(".jstree-wholerow").addClass("jstree-wholerow-clicked")},this)).on("hover_node.jstree dehover_node.jstree",e.proxy(function(e,t){"hover_node"===e.type&&this.is_disabled(t.node)||this.get_node(t.node,!0).children(".jstree-wholerow")["hover_node"===e.type?"addClass":"removeClass"]("jstree-wholerow-hovered")},this)).on("contextmenu.jstree",".jstree-wholerow",e.proxy(function(e){if(this._data.contextmenu){e.preventDefault();var t=n.Event("contextmenu",{metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,pageX:e.pageX,pageY:e.pageY});n(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t)}},this)).on("click.jstree",".jstree-wholerow",function(e){e.stopImmediatePropagation();var t=n.Event("click",{metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey});n(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t).focus()}).on("dblclick.jstree",".jstree-wholerow",function(e){e.stopImmediatePropagation();var t=n.Event("dblclick",{metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey});n(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t).focus()}).on("click.jstree",".jstree-leaf > .jstree-ocl",e.proxy(function(e){e.stopImmediatePropagation();var t=n.Event("click",{metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey});n(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t).focus()},this)).on("mouseover.jstree",".jstree-wholerow, .jstree-icon",e.proxy(function(e){return e.stopImmediatePropagation(),this.is_disabled(e.currentTarget)||this.hover_node(e.currentTarget),!1},this)).on("mouseleave.jstree",".jstree-node",e.proxy(function(e){this.dehover_node(e.currentTarget)},this))},this.teardown=function(){this.settings.wholerow&&this.element.find(".jstree-wholerow").remove(),r.teardown.call(this)},this.redraw_node=function(t,o,s,n){if(t=r.redraw_node.apply(this,arguments)){var i=l.cloneNode(!0);-1!==e.inArray(t.id,this._data.core.selected)&&(i.className+=" jstree-wholerow-clicked"),this._data.core.focused&&this._data.core.focused===t.id&&(i.className+=" jstree-wholerow-hovered"),t.insertBefore(i,t.childNodes[0])}return t}},n}});
//# sourceMappingURL=../sourcemaps/addons/wholerow.js.map
