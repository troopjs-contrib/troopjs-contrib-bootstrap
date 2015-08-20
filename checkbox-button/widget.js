define([ "troopjs-dom/component/widget" ], function (Widget) {
	var UNDEFINED;

	return Widget.extend({
		"dom:input/change": function ($event) {
			var $target = $($event.target);
			var active = $target.is(":checked");

			$target
				.closest("label")
				.next("button")
				.toggleClass("active", active);

		},

		"dom:button/click": function ($event) {
			var $input = $($event.target)
				.prev("label")
				.find("input");

			var isChecked =
				$input.data('toggle') !== UNDEFINED?
				!$input.prop("checked") : true;

			$input.prop("checked", isChecked).change();
		}
	});
});