define([ "troopjs-dom/component/widget" ], function (Widget) {
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
			$($event.target)
				.prev("label")
				.click();

			return false;
		}
	});
});