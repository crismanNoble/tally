tally
=====

A privacy respecting alternative to google analytics.

**This is very much alpha, so if you are using it and you want to actually view the results, and your name is not Neil, then you better email me.**


###Usage

Include a link to the tally.js file in your head.
Something like:

`<script src="js/tally.js"></script>`

Tally is dependant on jQuery so make sure you pull it in **after** jQuery is loaded.


To record a hit use `_tally.tick(event,detail)` for example, something as simple as:

`
$(document).ready(function(){
	_tally.tick('hit','Any other detail you want.');
});
`

will do the trick.

Let's say you want to track hovering of your logo, well you could do this:

`
$('#logo').hover(function(){
	_tally.tick('hover','Logo Hover');
});
`

If you want to record a click that heads off the page, you should use `_tally.click(event,string)` where event is the actuall click event, and the string is an optional argument to record in the details.

For example:

If you have `<a href="http://google.com">Go To Google</a>` 
and you attach `_tally.click(e,'Search Engine Click: ')` 
the event will be recorded like 
`{...,event:click,details:Search Engine Click: Go To Google (http://google.com),...}`
