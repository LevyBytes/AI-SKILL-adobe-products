# Create document element references

ExtendScript can interact with the host app DOM, including items in an open document. Because DOM properties and methods differ among host apps, this sample checks the global `app.name` property to identify the running application; see comments **#1-4**:

```javascript
function applyWeatherToAsset(currentWeatherSlug, currentWeatherString) {
  var layer;
  var frame;

  /* 1) If we're running in Photoshop */
  if (app.name === "Adobe Photoshop") {
    /* 2) Make a reference to the first art layer of the first open document */
    layer = app.documents[0].artLayers[0];
  } else if (app.name === "Adobe InDesign") {
  /* 3) Otherwise, if we're running in InDesign */
    /* 4) Create a text frame on the first page of the first open document */
    frame = app.documents
      .item(0)
      .pages.item(0)
      .textFrames.add({ geometricBounds: [72, 72, 110, 300] });
  }

  // To be continued...
}
```

Depending on which app hosts the extension, the code either stores an art-layer reference for Photoshop or creates a text frame in InDesign.
