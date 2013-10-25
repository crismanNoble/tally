       _______  _______  ___      ___    ___ ___ 
      |       ||   _   ||   |    |   |  |   Y   |
      |.|   | ||.  1   ||.  |    |.  |  |   1   |
      `-|.  |-'|.  _   ||.  |___ |.  |___\_   _/ 
        |:  |  |:  |   ||:  1   ||:  1   ||:  |  
        |::.|  |::.|:. ||::.. . ||::.. . ||::.|  
        `---'  `--- ---'`-------'`-------'`---'  

A privacy respecting alternative to google analytics.

**This is very much alpha, so if you are using it and you want to actually view the results, and your name is not Neil, then you better email me.**


###Quickstart
The  `tally.quickstart.js` file includes a `pageView` event out of the box. Just include the file after jQuery is loaded, usually in the `<head>` or at the end of the `<body>` in html.

Works (Hotlink to the script):

`<script type="text/javascript" src="http://mksht.com/tally/tally.quickstart.js"></script>`

Better (Link to a copy on your own server):

`<script type="text/javascript" src="tally.quickstart.js"></script>`

Best (Link to the library and leverage your likely pre-existing document ready call to manually trigger a `pageView`):

`<script type="text/javascript" src="tally.quickstart.js"></script>`

    //in a new <script> or a separate file...
    $(document).ready(function(){
    	// all you existing code
    	
        _tally.tick('pageView','Optional detail string');
        
    });
    

**Wordpress**

It seems word press uses noConflict quite a bit, if the above code doesn't work, try using `jQuery(stuff)` instead of `$(stuff)`
    
###Usage

Include a link to the tally.js file in your head.
Something like:

`<script src="js/tally.js"></script>`

Tally is dependant on jQuery so make sure you pull it in **after** jQuery is loaded.


To record a hit use `_tally.tick(event,detail)` for example, something as simple as:

    $(document).ready(function(){
        _tally.tick('hit','Any other detail you want.');
    });


will do the trick.

Let's say you want to track hovering of your logo, well you could do this:

    $('#logo').hover(function(){
        _tally.tick('hover','Logo Hover');
    });

If you want to record a click that heads off the page, you should use `_tally.click(event,string)` where event is the actuall click event, and the string is an optional argument to record in the details.

For example:

If you have `<a href="http://google.com">Go To Google</a>` 
and you attach `_tally.click(e,'Search Engine Click: ')` 
the event will be recorded like 
`{...,event:click,details:Search Engine Click: Go To Google (http://google.com),...}`
