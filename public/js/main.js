// underscore flicker effect
setInterval(() => {
	$("#_").toggleClass("hidden");
}, 1000);

// Open new tabs ---------------------------------------------------------------
$("a").attr("target", "_blank");