define([ "troopjs-dom/component/widget" ], function (Widget) {
	var $ELEMENT = "$element";

	return Widget.extend({
		"dom:input/change": function ($event) {
			var $target = $($event.target);
			var active = $target.is(":checked");
			var text = this[$ELEMENT]
				.find(":checked")
				.map(function () {
					return $(this).val();
				})
				.get()
				.join() || "Select";

			$target
				.closest("li")
				.toggleClass("active", active)
				.closest("ul")
				.prev("button")
				.find(".value")
				.text(text);
		},

		"dom:a/click": function ($event) {
			$($event.target)
				.prev("label")
				.click();

			return false;
		}
	});
});