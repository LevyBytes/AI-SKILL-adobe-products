# Step 1: Create a script

In your code editor, make a plain text file and place this JavaScript snippet inside it.

```js
let { app } = require("indesign");
let myDocument = app.documents.add();
let myTextFrame = myDocument.pages.item(0).textFrames.add();

// set the geometric bounds, the top, left, bottom, and right edges, of the text frame.
myTextFrame.geometricBounds = ["6p", "6p", "24p", "24p"];
myTextFrame.contents = "Hello World!";
```

**Remember** that an `idjs` file is simply JavaScript; its special extension tells InDesign to treat it as a UXP script.
