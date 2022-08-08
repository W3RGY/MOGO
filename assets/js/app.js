$(function () {

	var introH = $("#intro").innerHeight(),
		header = $("#header"),
		scrollOffSet = $(window).scrollTop();

		checkScroll(scrollOffSet);

	$(window).on("scroll", function () {
		scrollOffSet = $(this).scrollTop();

		checkScroll(scrollOffSet);

	});

	function checkScroll(scrollOffSet) {

		if (scrollOffSet >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	};
});