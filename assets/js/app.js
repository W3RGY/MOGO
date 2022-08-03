$(function () {

	var introH = $("#intro").innerHeight(),
		header = $("header"),
		scrollOffSet = 0;

	$(window).on("scroll", function () {

		scrollOffSet = $(this).scrollTop();

		console.log(scrollOffSet)

	});
});