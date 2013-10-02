//relies on underscore

//get a sorted json object of screen widths, sorted top to bottom

//list of widths
var bw = _.chain(tallies).map(function(tick){return tick.browserWidth;})._wrapped;
//uniqe widths
var bw_u = _.chain(tallies).map(function(tick){return tick.browserWidth;}).uniq()._wrapped;

var browserWidths = [];

for (var i=0; i<bw_u.length; i++){
    var widthCount = 0;
    for (var j=0;j<bw.length; j++){
        if(bw[j] == bw_u[i]) {
           thisWidth ++; 
        }
    }
    browserWidths.push({'width':bw_u[i],'count':widthCount});
}

browserWidths = _.sortBy(browserWidths,function(width){return 0-width.count});