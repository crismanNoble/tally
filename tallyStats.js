//relies on underscore

//get a sorted json object of any property of tally, sorted top to bottom

//to get a list of widths do: listSomething(browserWidths)

function listSomething(thing){
	var arr = _.chain(tallies).map(function(tick){return tick[thing];})._wrapped;
	var arr_u = _.uniq(arr);

	toReturn = [];

	for (var i=0; i<arr_u.length; i++){
	    var counter = 0;
	    for (var j=0;j<arr.length; j++){
	        if(arr[j] == arr_u[i]) {
	           counter ++; 
	        }
	    }
	    toReturn.push({thing:arr_u[i],'count':counter});
	}

	toReturn = _.sortBy(toReturn,function(number){return 0-number.count});
	return toReturn;
}