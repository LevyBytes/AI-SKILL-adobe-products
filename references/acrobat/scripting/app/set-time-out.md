# setTimeOut

Version (Key): 5.0 | Save-Prefs: No | Security: No | Product: All

Takes a JavaScript script plus a time span. Once that span runs out, the script fires a single time and no more.

Hold this method's return value in a JavaScript variable; otherwise garbage-collection can reclaim the timeout object, and the clock stops as a result.

Hand the returned timeout object to clearTimeOut to call off the timeout event.

Note

From Acrobat 7.05 onward, closing the document whose script invoked setInterval ends the interval on its own — provided it had not already been ended.

Re-reading of the document JavaScripts, and thus re-initialization of any document-level variables, is triggered whenever the document JavaScripts dialog box is opened and then closed. Reset document-level variables this way once JavaScript expressions have already been queued for evaluation under setInterval or setTimeOut, and JavaScript errors can result if those scripts depend on document-level variables.

See also clearTimeOut, setInterval, and clearInterval.

Parameters

cExpr

The JavaScript script that runs.

nMilliseconds

The span of time, given in milliseconds.

Returns

A timeout object

Example: Put together a basic scrolling marquee. Picture a text field called "marquee" whose default value reads "Adobe Acrobat version 8.0 will soon be here!".

```javascript
// Document-level JavaScript function
function runMarquee() {
    var f = this.getField("marquee");
    var cStr = f.value;
    // get field value
    var aStr = cStr.split("");        // Convert to an array
    aStr.push(aStr.shift());          // Move first char to last
    cStr = aStr.join("");             // Back to string again
    f.value = cStr;                   // Put new value in field
}

// Insert a mouse-up action into a "Go" button
run = app.setInterval("runMarquee()", 100);
// stop after a minute
stoprun=app.setTimeOut("app.clearInterval(run)",6000);

// Insert a mouse-up action into a "Stop" button
try {
    app.clearInterval(run);
    app.clearTimeOut(stoprun);
} catch (e){}
```

Wrapping the Stop button code in a try/catch guards it. Press Stop before ever pressing Go and both run and stoprun stay undefined, so the Stop code raises an exception. Once that exception fires, the catch block takes over. Here the code simply sits idle if the user hits Stop ahead of anything else.
