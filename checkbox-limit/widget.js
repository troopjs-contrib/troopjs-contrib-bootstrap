define([
	"troopjs-dom/component/widget",
	"jquery"
], function (Widget, $) {

	var LIMIT = "limit";
	var CHECKED = "checked";

	return Widget.extend(function ($element, name, limit) {
		this[LIMIT] = limit || 0;
	}, {
		"dom:input/change": function ($event) {
			var me = this;
			var target = $event.target;
			// Set or remove CHECKED data
			if ($(target).is(":checked")) {
				$.data(target, CHECKED, $.now());
			}
			else {
				$.removeData(target, CHECKED);
			}
			
			me.$element
				// Find all :checked elements
				.find(":checked")
				// Reverse sort based on CHECKED data
				.sort(function (a, b) {
					return $.data(b, CHECKED) - $.data(a, CHECKED);
				})
				// Slice after LIMIT
				.slice(me[LIMIT])
				// Remove CHECKED prop
				.prop(CHECKED, false)
				// Trigger change
				.trigger("change");
		}
	});
});