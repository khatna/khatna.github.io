// underscore flicker effect
setInterval(function () {
	$("#_").toggleClass("hidden");
}, 1000);

// hover shows text
$(".project a").hover(
	function () {
		$($(this).children()[0]).css('-webkit-filter', 'brightness(20%)');
		$($(this).children()[1]).css('display', 'inline');
	}, function () {
		$($(this).children()[0]).css('-webkit-filter', 'brightness(100%)');
		$($(this).children()[1]).css('display', 'none');
});

// Open new tabs ---------------------------------------------------------------
$("a").attr("target", "_blank");