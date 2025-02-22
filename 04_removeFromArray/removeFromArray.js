const removeFromArray = function(numArray, ...elements) {
  let filteredArray = numArray;
	for (let element of elements){ // for each item in the arguement
				filteredArray = filteredArray.filter(num => num !== element);// filter it out the array
    }
      return filteredArray;
    };
		

// Do not edit below this line
module.exports = removeFromArray;
