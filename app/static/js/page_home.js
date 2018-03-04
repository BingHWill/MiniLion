$(function() {
	view_init();

	$(window).resize(function() {
		view_init();
	});
});

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

function view_init() {
	var screen_width = $(document).width();
	var screen_height = $(document).height();

	var apply_btn = $('.apply_now_a');
	apply_btn.css({'width': screen_width*0.15, 'height': screen_width*0.04, 'left': screen_width*0.24, 'top': screen_width*0.24});

	var stick_btn = $('.float_stick_up');
	stick_btn.css({'width': screen_width*0.06, 'height': screen_width*0.06, 'left': screen_width*0.9, 'top': screen_height*0.5});
};