function apply_action() {
	
}

function phone_us_action() {

}

function stick_up_action() {
	window.scrollBy(0,-100);
    scrolldelay = setTimeout('stick_up_action()',10);
    var stop = document.documentElement.scrollTop + document.body.scrollTop;
    if (stop==0) clearTimeout(scrolldelay);
}