function apply_action() {
	window.location.href = '/partner#apply_view';
}

function phone_us_action() {
	// TODO
}

function stick_up_action() {
	window.scrollBy(0,-100);
    scrolldelay = setTimeout('stick_up_action()',10);
    var stop = document.documentElement.scrollTop + document.body.scrollTop;
    if (stop==0) clearTimeout(scrolldelay);
}