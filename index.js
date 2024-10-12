function myEach(collection, callback) {
    // Check if collection is an array
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection); // Pass the element, index, and collection
        }
    } else {
        // If collection is an object
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection); // Pass value, key, and collection
            }
        }
    }
    return collection; // Return original collection
}
function myMap(collection, callback) {
    let result = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(callback(collection[key], key, collection));
            }
        }
    }

    return result; // Return the new transformed array
}

function myReduce(collection, callback, acc) {
    let start = acc; // Initialize accumulator

    if (Array.isArray(collection)) {
        if (start === undefined) {
            start = collection[0]; // Use first element as start value if no accumulator
            for (let i = 1; i < collection.length; i++) {
                start = callback(start, collection[i], collection);
            }
        } else {
            for (let i = 0; i < collection.length; i++) {
                start = callback(start, collection[i], collection);
            }
        }
    } else {
        let keys = Object.keys(collection);
        if (start === undefined) {
            start = collection[keys[0]]; // Use first value as start
            for (let i = 1; i < keys.length; i++) {
                start = callback(start, collection[keys[i]], collection);
            }
        } else {
            for (let i = 0; i < keys.length; i++) {
                start = callback(start, collection[keys[i]], collection);
            }
        }
    }
    
    return start; // Return the reduced value
}
function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                return collection[i]; // Return the first element that passes the test
            }
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (predicate(collection[key], key, collection)) {
                    return collection[key]; // Return the first element that passes the test
                }
            }
        }
    }
    return undefined; // Return undefined if no element passes the test
}
function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                return collection[i]; // Return the first element that passes the test
            }
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (predicate(collection[key], key, collection)) {
                    return collection[key]; // Return the first element that passes the test
                }
            }
        }
    }
    return undefined; // Return undefined if no element passes the test
}
function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                return collection[i]; // Return the first element that passes the test
            }
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (predicate(collection[key], key, collection)) {
                    return collection[key]; // Return the first element that passes the test
                }
            }
        }
    }
    return undefined; // Return undefined if no element passes the test
}
function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                return collection[i]; // Return the first element that passes the test
            }
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (predicate(collection[key], key, collection)) {
                    return collection[key]; // Return the first element that passes the test
                }
            }
        }
    }
    return undefined; // Return undefined if no element passes the test
}
function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                return collection[i]; // Return the first element that passes the test
            }
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (predicate(collection[key], key, collection)) {
                    return collection[key]; // Return the first element that passes the test
                }
            }
        }
    }
    return undefined; // Return undefined if no element passes the test
}
function myFilter(collection, predicate) {
    let result = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                result.push(collection[i]); // Add the element to result if it passes the test
            }
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (predicate(collection[key], key, collection)) {
                    result.push(collection[key]); // Add the value to result if it passes the test
                }
            }
        }
    }

    return result; // Return the array of matching elements
}
function myFilter(collection, predicate) {
    let result = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                result.push(collection[i]); // Add the element to result if it passes the test
            }
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (predicate(collection[key], key, collection)) {
                    result.push(collection[key]); // Add the value to result if it passes the test
                }
            }
        }
    }

    return result; // Return the array of matching elements
}

function myFilter(collection, predicate) {
    let result = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                result.push(collection[i]); // Add the element to result if it passes the test
            }
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (predicate(collection[key], key, collection)) {
                    result.push(collection[key]); // Add the value to result if it passes the test
                }
            }
        }
    }

    return result; // Return the array of matching elements
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length; // For arrays, just return the length
    } else {
        return Object.keys(collection).length; // For objects, count the number of keys
    }
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0]; // If n is not provided, return the first element
    } else {
        return array.slice(0, n); // If n is provided, return the first n elements
    }
}
function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1]; // If n is not provided, return the last element
    } else {
        return array.slice(-n); // If n is provided, return the last n elements
    }
}

function myKeys(object) {
    return Object.keys(object); // Use Object.keys() to retrieve property names
}

function myValues(object) {
    return Object.values(object); // Use Object.values() to retrieve property values
}

