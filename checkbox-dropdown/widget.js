define([ "troopjs-dom/component/widget" ], function (Widget) {
	var $ELEMENT = "$element";
	var UNDEFINED;


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
				.prevAll("button")
				.last()
				.find(".value")
				.text(text);
		},

		"dom:a/click": function ($event) {
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