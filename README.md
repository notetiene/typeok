# typeok
Simple library to check the type of an object and a corresponding error.

**Note**: The custom errors must be handled by the user. While custom errors are provided, functions don’t throw errors.

### Current functions and their errors

<table>
    <tr>
        <th>Function</th>
        <th>Description</th>
        <th></th>
        <th>Error</th>
        <th>Error message</th>
    </tr>
    <tr>
        <td>isString</td>
        <td>Argument is a String?</td>
        <td></td>
        <td>NotStringError</td>
        <td>It’s not a valid String.</td>
    </tr>
    <tr>
        <td>isArray</td>
        <td>Argument is an Array and has values?</td>
        <td></td>
        <td>NotArrayError</td>
        <td>It’s not a valid Array.</td>
    </tr>
    <tr>
        <td>isStringArray</td>
        <td>Argument is an Array of Strings?</td>
        <td></td>
        <td>NotArrayStringsError</td>
        <td>It’s not a valid Array of Strings.</td>
    </tr>
    <tr>
        <td>isAscii</td>
        <td>Does the String argument contains only <a href="https://en.wikipedia.org/wiki/ASCII/">ASCII</a> characters?</td>
        <td></td>
        <td>NotAsciiStringError</td>
        <td>The String has non-ASCII characters.</td>
    </tr>
    <tr>
        <td>isValidEmailFormat</td>
        <td>Does the String argument is a valid e-mail?</td>
        <td></td>
        <td>NotValidEmailAddressError</td>
        <td>It’s not a valid e-mail address.</td>
    </tr>
    <tr>
        <td>isAscii</td>
        <td>Does the String argument is an URL.</td>
        <td></td>
        <td>NotValidURLError</td>
        <td>It’s not a valid URL.</td>
    </tr>
</table>
