tally = {}; //properties hash
_tally = {}; //function hash

//timestamp
tally.timeUTC = (new Date()).getTime();
tally.timeZone = (new Date()).getTimezoneOffset();

//location info
tally.href = document.location.href;
tally.host = document.location.hostname;
tally.path = document.location.pathname;
tally.search = document.location.search;
tally.hash = document.location.hash;

//referrer info
tally.referrer = document.referrer;

//basic user info for hashing visitor
tally.language = navigator.language;
tally.screenWidth = screen.width;
tally.screenHeight = screen.height;
tally.colorDepth = screen.colorDepth;
tally.pixelDensity = window.devicePixelRatio;

//some helper functions
_tally.tock = function(){
	var date = new Date();
	tally.eventTime = date.getTime();
	return tally.eventTime;
}

_tally.tick = function(action, detail){
	_tally.tock();
	tally.eventType = action;
	tally.eventDetail = detail;
	$.post('http://mksht.com/tally/POST/',tally);
}

_tally.click = function(e,string){
//this should be used to capture links going externally.
	e.preventDefault();
	var dest = e.currentTarget.href;
	var text = e.currentTarget.innerText;
	_tally.tock();
	tally.eventType = 'click';
	tally.eventDetail = string +text+' ('+dest+')';
	$.post('http://mksht.com/tally/POST/',tally)
	.done(function(){
		window.location=dest;	
	});	
}
