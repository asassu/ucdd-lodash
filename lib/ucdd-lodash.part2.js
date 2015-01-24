/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`.
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0);
 * // => []
 */
function range(start, end) {
	rangeArray = Array();
	if(start == 0)
		return rangeArray
	else if(end)
	{
		for(var i = start; i < end; i++)
		{
			rangeArray.push(i);
		}
	}
	else
	{
		for(var i = 0; i < start; i++)
		{
			rangeArray.push(i);
		}
	}

    return rangeArray;
}


/**
 * Creates an object composed of the picked `object` properties. Property
 * names may be specified as individual arguments or as arrays of property
 * names.
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.pick(object, 'user');
 * // => { 'user': 'fred' }
 *
 */
function pick(object, propertyNames) {
	var myObject = {};

	for(var key in object)
	{
		for(var value in propertyNames)
		{
			if(key == propertyNames[value])
			{
				myObject[key] = object[key];
			}
		}
	}

    return myObject;
}


/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * The function returns as soon as it finds a passing value and does not iterate
 * over the entire collection. The predicate is invoked with (value)
 */
function some(collection, predicate) {

    for(var i = 0; i < collection.length; i++)
    {
    	if(predicate(collection[i]))
    	{
    		return true;
    	}
    }

    return false;
}

/**
 * Checks if the given callback returns truthy value for **all** elements of a collection.
 */
function every(collection, predicate) {
	var myBool = true;

    for(var i = 0; i < collection.length; i++)
    {
    	if(!(predicate(collection[i])))
    	{
    		myBool = false;
    	}
    }

    return myBool;
}

/**
 * Iterates over elements of `collection`, returning the first element
 * that have the properties of the given
 * object, else `false`.
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ];
 *
 *
 * _.find(users, { 'age': 1 })
 * // => { 'user': 'pebbles', 'age': 1,  'active': false }
 *
 */
function find(collection, object) {
	var myChecker = false;

	for(var i = 0 ; i < collection.length ; i++)
	{
		//Make it optimistic! It thinks every collection is correct
		myChecker = true;
		var myCollection = collection[i];

		for (var key in object)
		{
			if(myCollection[key] != object[key])
			{
				myChecker = false;
			}
		}

		if(myChecker == true)
		{
			return myCollection;
		}
	}

	return false;
}

// Export functions
var lib = {}
lib.range = range
lib.pick = pick
lib.some = some
lib.every = every
lib.find = find

module.exports = lib