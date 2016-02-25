# typeok
Simple library to check the type of an object and throw its conresponding error.

Current functions and their errors:

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
</table>
