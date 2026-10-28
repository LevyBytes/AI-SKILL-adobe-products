# JavaScript APIs - Monitors

Think of a Monitors object as a read-only list whose members are individual Monitor objects, one per attached display. You reach those members with standard array indexing plus the length property.

Querying app.monitors hands back a Monitors object covering all displays wired to the current machine. From there, script can iterate the list to inspect each available display and pick one to host a full-screen or pop-up media player.

Note

What app.monitors gives you arrives in no guaranteed sequence (the displays appear unsorted).

A set of filter methods lives on the Monitors object; each narrows the list down to one or more displays according to some test. Every monitor-selection option exposed in the PDF file format ultimately routes through one of these filter methods.

The original Monitors object is left untouched by any filter method. Instead, each produces a fresh Monitors object that typically holds one or more Monitor objects. When one display beats all the rest on the test, that single display fills the returned object. When the test ties across several displays (say, with bestColor, multiple displays sharing the same maximum color depth), every tied display ends up in the result.

A handful of the filter methods accept an optional floor or required argument. Supply that argument and have no display clear the bar, and the resulting Monitors object comes back empty. Skip it, and as long as the starting Monitors object held something, the result is never empty.

Any height, width, or area a filter method talks about is measured in pixels.

Example:

```javascript
var monitors = app.monitors;
for ( var i = 0; i< monitors.length; i++)
console.println("monitors["+i+"].colorDepth = "+monitors[i].colorDepth);
```

The element count of the Monitors object lives in Monitors.length. With the object from app.monitors, that count equals how many displays the machine has. With an object handed back by a filter method, expect a possibly smaller count.
