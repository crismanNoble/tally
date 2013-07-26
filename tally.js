//much love to: 
//http://www.quirksmode.org/mobile/viewports.html
//http://www.quirksmode.org/mobile/viewports2.html

var tally = {};

//timestamp
var date = new Date();
tally.timeLocal = date;
//UTC timestamp
tally.timeUTC = date.getTime;

//location info
tally.href = document.location.href;
tally.host = document.location.hostname;
tally.path = document.location.pathname;
tally.search = document.location.search;
tally.hash = document.location.hash;

//referrer info
tally.referrer = document.referrer;

//height and width of the device screen, in device pixels
tally.screenWidth = screen.width;
tally.screenHeight = screen.height;

//height and width of the browser window aka viewport
//mobile: actual viewport
tally.broswerWidth = window.innerWidth;
tally.browserHeight = window.innerHeight;

// or viewport, mobile is visual viewport
tally.viewportWidth = document.documentElement.clientWidth;
tally.viewportHeight = document.documentElement.clientHeight;

//html element
tally.htmlWidth = document.documentElement.offsetWidth;
tally.htmlHeight = document.documentElement.offsetHeight;

//scrolling offset
tally.scrollX = window.pageXOffset;
tally.scrollY = window.pageYOffset;

//basic user info, may want to use this code: http://www.quirksmode.org/js/detect.html
tally.os = navigator.platform;
tally.broswer = navigator.appVersion;
tally.language = navigator.language;

//click events
//click position relative to html
tally.click.htmlX = event.pageX;
tally.click.htmlY = event.pageY;

//click position relative to vieport
tally.click.browserX = event.clientX;
tally.click.broswerY = event.clientY;

//click position relative to screen
tally.click.screenX = event.screenX;
tally.click.screenY = event.screenY;


