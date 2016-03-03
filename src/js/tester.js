/* typeok.js --- Functions verifying JavaScript data types
 Commentary:
 Code:
 */

/**
 * Namespace for functions verifying JavaScript data types.
 * @namespace
 */
var typeok = typeok || {};

/**
 * Test if the passed argument is a String.
 * @param {Object} s - A variable to test.
 * @returns {bool} True if a String.
 * @see NotStringError
 */
typeok.isString = function (s) {
    return (s instanceof String || typeof s === 'string');
};

/**
 * Test if the passed argument is an Array and has values.
 * @param {Object} a - A variable to test.
 * @returns {bool} True if an Array.
 * @see NotArrayError
 */
typeok.isArray = function (a) {
    return (a instanceof Array && a.length > 0);
};

/**
 * Test if the passed argument is an Array of Strings.
 * @param {Object} a - A variable to test.
 * @returns {bool} True if an Array of String.
 * @see isString
 * @see isArray
 * @see NotArrayStringsError
 * @todo Test if the String is empty
 */
typeok.isStringArray = function (a) {
    if(this.isArray(a)) {
        // Traverse the Array to verify they are all Strings.
        for(var i=0, l = a.length; i<l; i++) {
            if(!this.isString(a[i])) {
                return false;
            }
        }
        return true;
    }
    return false;
};

/**
 * Test if the passed argument is {@linkcode String} with only ASCII characters.
 * @param {Object} s - A String to test.
 * @returns {bool} True if only ASCII.
 * @see NotAsciiStringError
 */
typeok.isAscii = function(s) {
    /* Loop into each characters of the string */
    for(var pos = 0, l = s.length; pos < l; pos++) {
        /* If it's not a ascii character, abort*/
        if(s.charCodeAt(pos) > 127) {
            return false;
        }
    }
    return true;
};

/**
 * Verify that a {@linkcode String} is an e-mail address.
 * @param {String} s - The String to test.
 * @returns {bool} True if it's a valid e-mail address format, else returns false.
 * @see NotEmailAddressError
 */
typeok.isValidEmailFormat = function(s) {
    if(!this.isString) {
        return false;
    }
    return s.match('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}') !== null;
};

/**
 * Verify that a {@linkcode String} is a valid URL.
 * @param {String} s - The String to test.
 * @returns {bool} True if it's a valid URL format, else returns false.
 */
typeok.isValidUrlFormat = function(s) {
    // Taken at http://stackoverflow.com/a/22648406
    return s < 2083 &&
        (s.match('^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$') !== null);
};

/* tester.js ends here */
