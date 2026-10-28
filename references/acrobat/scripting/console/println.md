# println

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

Writes a string value into the console window and follows it with a carriage return.

Parameters

| Parameter | Description |
| --- | --- |
| cMessage | A string message to print. |

Example 1: Here a field's value gets written out to the console window, in a script you might hook to a mouse-up event.

```javascript
var f = this.getField("myText");
console.clear(); console.show();
console.println("Field value = " + f.value);
```

Example 2: Treat the console as a debugging aid — dumping variable values into it, say. Here is a document-level script that does so:

Pass the implemented operation as the first argument. This wrapper reports its two inputs and actual return value.

```javascript
var debugIsOn = true;
function debugCall(operation, n, m) {
    if (debugIsOn) {
        console.println("Entering function: " + operation.name);
        console.println(" Parameter 1: n = " + n);
        console.println(" Parameter 2: m = " + m);
    }
    var rtn = operation(n, m);
    if (debugIsOn) console.println(" Return value: rtn = " + rtn);
    return rtn;
}
```

Starting in Acrobat 6.0, the JavaScript Debugger offers another route to debugging. See the dbg object.
