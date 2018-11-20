// underscore flicker effect

const no_  = "Mongolian student at Princeton University"
const yes_ = "Mongolian student at Princeton University_"

let underscore = false;

function changeBio(underscore) {
	if (underscore)
		$("#bio").html(no_);
	else
		$("#bio").html(yes_);
}

setInterval(() => {
	changeBio(underscore);
	underscore = !underscore;
}, 1000);

// -----------------------------------------------------------------------------