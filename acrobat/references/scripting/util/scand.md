# scand

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 4.0 | No | No | All |

Turns a date into a JavaScript Date object by following the conventions in a format string. Compared with calling the date constructor straight away, this routine gives you far more flexibility.

Note

When the input carries only a two-digit year, scand applies the date horizon heuristic to settle the ambiguity. A year below 50 is treated as belonging to the 21st century (so 2000 is added); a year of 50 or higher belongs to the 20th century (so 1900 is added).

Supply the date cDate in the very format that cFormat lays out.

Parameters

| Parameter | Description |
| --- | --- |
| cFormat | The conventions used to format the date. The syntax of cFormat matches the one printd uses. |
| cDate | The date to convert. |

Returns

A Date object holding the result, or null when the conversion does not succeed.

Example 1:

```javascript
/* Turn the current date into a string. */
var cDate = util.printd("mm/dd/yyyy", new Date());
console.println("Today's date: " + cDate);
/* Parse it back into a date. */
var d = util.scand("mm/dd/yyyy", cDate);
/* Output it in reverse order. */
console.println("Yet again: " + util.printd("yyyy mmm dd", d));
```

Example 2: Pull a value out of a text field, check whether it is a date in the allowed format, then surface the result in an alert box or the console window.

A failed conversion returns null — which happens when the user supplies data other than what was expected. So check the return value against null here.

```javascript
var d= util.scand("mm/dd/yyyy", this.getField("myDate").value);
    if ( d== null )
        app.alert("Please enter a valid date of the form" +

             ' "mm/dd/yyyy".')
    else {
        console.println("You entered the date: "
            + util.printd("mmmm dd, yyyy",d));
}
```
