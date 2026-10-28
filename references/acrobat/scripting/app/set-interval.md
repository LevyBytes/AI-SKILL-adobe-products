# setInterval

Version (Key): 5.0 | Save-Prefs: No | Security: No | Product: All

Takes a JavaScript script plus a time span. Each time that span runs out, the script fires again.

Hold this method's return value in a JavaScript variable; otherwise garbage-collection can reclaim the interval object, and the clock stops as a result.

Hand the returned interval object to clearInterval to halt the repeating execution.

Note

From Acrobat 7.05 onward, closing the document whose script invoked setInterval ends the interval on its own — provided it had not already been ended.

Re-reading of the document JavaScripts, and thus re-initialization of any document-level variables, is triggered whenever the document JavaScripts dialog box is opened and then closed. Reset document-level variables this way once JavaScript expressions have already been queued for evaluation under setInterval or setTimeOut, and JavaScript errors can result if those scripts depend on document-level variables.

See also clearInterval, setTimeOut and clearTimeOut.

Parameters

cExpr

The JavaScript script that runs.

nMilliseconds

The span of time, given in milliseconds.

Returns

An interval object

Example: Drive a basic color animation, shifting once per second, on a field named "Color".

```javascript
function DoIt() {
    var f = this.getField("Color");
    var nColor = (timeout.count++ % 10 / 10);
    // Various shades of red.
    var aColor = new Array("RGB", nColor, 0, 0);
    f.fillColor = aColor;
}
// save return value as a variable
timeout = app.setInterval("DoIt()", 1000);
// Add a property to our timeout object so that DoIt() can keep
// a count going.
timeout.count = 0;
```

For one more sample, look to setTimeOut.
