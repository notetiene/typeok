/* errors.js --- Custom errors for typeok library
 Commentary:
 Code:
 */

/**
 * Error that a value is not of type {@linkcode String}.
 * @constructor
 * @param {String} message - Message to display.
 * @augments TypeError
 */
function NotStringError(message) {
    /**
     * @property {String} name - Name for the type of error.
     * @constant
     * @public
     */
    this.name = 'NotStringError';

    /**
     * @property {String} message - Human-readable description of the error.
     * @constant
     * @public
     */
    this.message = message || 'It’s not a valid String.';
    this.stack = (new Error()).stack;
}
NotStringError.prototype = new TypeError;

/**
 * Error that a value is not of type {@linkcode Array}.
 * @constructor
 * @param {String} message - Message to display.
 * @augments TypeError
 */
function NotArrayError(message) {
    /**
     * @property {String} name - Name for the type of error.
     * @constant
     * @public
     */
    this.name = 'NotArrayError';

    /**
     * @property {String} message - Human-readable description of the error.
     * @constant
     * @public
     */
    this.message = message || 'It’s not a valid Array.';
    this.stack = (new Error()).stack;
}
NotArrayError.prototype = new TypeError;

/**
 * Error that a value is not of type {@linkcode String[]}.
 * @constructor
 * @param {String} message - Message to display.
 * @augments NotArrayError
 */
function NotStringArrayError(message) {
    /**
     * @property {String} name - Name for the type of error.
     * @constant
     * @public
     */
    this.name = 'NotStringArrayError';

    /**
     * @property {String} message - Human-readable description of the error.
     * @constant
     * @public
     */
    this.message = message || 'It’s not a valid Array of Strings.';
    this.stack = (new Error()).stack;
}
NotStringArrayError.prototype = new NotArrayError;

/**
 * Error that a value is not of type {@linkcode Map}.
 * @constructor
 * @param {String} message - Message to display.
 * @augments TypeError
 */
function NotMapError(message) {
    /**
     * @property {String} name - Name for the type of error.
     * @constant
     * @public
     */
    this.name = 'NotMapError';

    /**
     * @property {String} message - Human-readable description of the error.
     * @constant
     * @public
     */
    this.message = message || 'It’s not a valid Map.';
    this.stack = (new Error()).stack;
}
NotMapError.prototype = new TypeError;

/**
 * Error that a value is not a {@linkcode Map} of {@linkcode String}.
 * @constructor
 * @param {String} message - Message to display.
 * @augments NotMapError
 */
function NotStringMapError(message) {
    /**
     * @property {String} name - Name for the type of error.
     * @constant
     * @public
     */
    this.name = 'NotStringMapError';

    /**
     * @property {String} message - Human-readable description of the error.
     * @constant
     * @public
     */
    this.message = message || 'It’s not a valid Map of Strings.';
    this.stack = (new Error()).stack;
}
NotStringMapError.prototype = new NotMapError;

/**
 * Error that a value is not of type {@linkcode Set}.
 * @constructor
 * @param {String} message - Message to display.
 * @augments TypeError
 */
function NotSetError(message) {
    /**
     * @property {String} name - Name for the type of error.
     * @constant
     * @public
     */
    this.name = 'NotSetError';

    /**
     * @property {String} message - Human-readable description of the error.
     * @constant
     * @public
     */
    this.message = message || 'It’s not a valid Set.';
    this.stack = (new Error()).stack;
}
NotSetError.prototype = new TypeError;

/**
 * Error that a value is not a {@linkcode Set} of {@linkcode String}.
 * @constructor
 * @param {String} message - Message to display.
 * @augments NotSetError
 */
function NotStringSetError(message) {
    /**
     * @property {String} name - Name for the type of error.
     * @constant
     * @public
     */
    this.name = 'NotStringSetError';

    /**
     * @property {String} message - Human-readable description of the error.
     * @constant
     * @public
     */
    this.message = message || 'It’s not a valid Set of Strings.';
    this.stack = (new Error()).stack;
}
NotStringSetError.prototype = new NotSetError;

/**
 * Error that a value {@linkcode String} contains other characters than ASCII.
 * @constructor
 * @param {String} message - Message to display.
 * @augments Error
 */
function NotAsciiStringError(message) {
    /**
     * @property {String} name - Name for the type of error.
     * @constant
     * @public
     */
    this.name = 'NotAsciiStringError';

    /**
     * @property {String} message - Human-readable description of the error.
     * @constant
     * @public
     */
    this.message = message || 'The String has non-ASCII characters.';
    this.stack = (new Error()).stack;
}
NotAsciiStringError.prototype = new Error;

/**
 * Error that a property was not found in an {@linkcode Object}.
 * @constructor
 * @param {String} message - Message to display.
 * @augments Error
 */
var NotMemberProperty = function(message) {
    /**
     * @property {String} name - Name for the type of error.
     * @constant
     * @public
     */
    this.name = 'NotPropertyMember';

    /**
     * @property {String} message - Human-readable description of the error.
     * @constant
     * @public
     */
    this.message = message || 'The property is not member of the Object.';
    this.stack = (new Error()).stack;
};
NotMemberProperty.prototype = new ReferenceError;

/**
 * Error that a value {@linkcode String} is not a valid e-mail address.
 * @constructor
 * @param {String} message - Message to display.
 * @augments Error
 */
var NotValidEmailAddressError = function(message) {
    /**
     * @property {String} name - Name for the type of error.
     * @constant
     * @public
     */
    this.name = 'NotValidEmailAddressError';

    /**
     * @property {String} message - Human-readable description of the error.
     * @constant
     * @public
     */
    this.message = message || 'It’s not a valid e-mail address.';
    this.stack = (new Error()).stack;
};
NotValidEmailAddressError.prototype = new Error;

/**
 * Error that a value {@linkcode String} is not in an URL format.
 * @constructor
 * @param {String} message - Message to display.
 * @augments Error
 */
var NotValidURLError = function(message) {
    /**
     * @property {String} name - Name for the type of error.
     * @constant
     * @public
     */
    this.name = 'NotValidURLError';

    /**
     * @property {String} message - Human-readable description of the error.
     * @constant
     * @public
     */
    this.message = message || 'It’s not a valid URL.';
    this.stack = (new Error()).stack;
};
NotValidURLError.prototype = new Error;


/*  errors.js ends here */
