# Text Objects

Typing into an Illustrator document automatically creates both a text frame object and, at the same time, a story object for that text.

You can see this by opening a new Illustrator document, entering text with the horizontal text tool, and then adding more text with the vertical text tool.

Next, draw a rectangle and enter text inside that shape.

Then run this JavaScript script:

```javascript
var myDoc = app.activeDocument;
alert("There are " + myDoc.textFrames.length + " text frames.");
alert("There are " + myDoc.stories.length + " stories.");
```
