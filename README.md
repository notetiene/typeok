# typeok
Simple library to check the type of an object and provide a corresponding error.

**Note**: The custom errors must be handled by the user. While custom errors are provided, functions don’t throw errors.

## Current Functions and their Errors

### Primitives Functions
#### isString
Argument is a String?

| Error          | Error message            |
|----------------|--------------------------|
| NotStringError | It’s not a valid String. |

### Container Functions
#### isArray
Argument is an Array and has values?

| Error         | Error message           |
|---------------|-------------------------|
| NotArrayError | It’s not a valid Array. |

#### isMap
Argument is a Map and has values?

| Error       | Error message                    |
|-------------|----------------------------------|
| NotMapError | It’s not a valid Map.            |

#### isSet
Argument is a Set and has values?

| Error       | Error message         |
|-------------|-----------------------|
| NotSetError | It’s not a valid Set. |

### String Container Functions
#### isStringArray
Argument is an Array of Strings?

| Error                | Error message                      |
|----------------------|------------------------------------|
| NotStringArrayError | It’s not a valid Array of Strings. |

#### isStringMap
Argument is a Map of Strings?

| Error             | Error message                    |
|-------------------|----------------------------------|
| NotStringMapError | It’s not a valid Map of Strings. |

#### isStringSet
Argument is a Set of Strings?

| Error             | Error message                    |
|-------------------|----------------------------------|
| NotStringSetError | It’s not a valid Set of Strings. |

### String Formatting Functions
#### isAscii
Does the String argument contains only [ASCII](https://en.wikipedia.org/wiki/ASCII/) characters? 

| Error               | Error message                        |
|---------------------|--------------------------------------|
| NotAsciiStringError | The String has non-ASCII characters. |

#### isValidEmailFormat
Does the String argument is a valid e-mail?

| Error                     | Error message                    |
|---------------------------|----------------------------------|
| NotValidEmailAddressError | It’s not a valid e-mail address. |

#### isValidUrlFormat
Does the String argument is an URL?

| Error             | Error message         |
|-------------------|-----------------------|
| NotValidURLError | It’s not a valid URL. |
