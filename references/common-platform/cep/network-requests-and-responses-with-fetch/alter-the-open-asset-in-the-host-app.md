# Alter the open asset in the host app

Finally, change the open asset based on the weather condition. A `switch` statement selects behavior from `currentWeatherSlug`; see comments **1-8**:

```javascript
function applyWeatherToAsset(currentWeatherSlug, currentWeatherString) {
  var layer;
  var frame;

  if (app.name === "Adobe Photoshop") {
    layer = app.documents[0].artLayers[0];
  } else if (app.name === "Adobe InDesign") {
    frame = app.documents
      .item(0)
      .pages.item(0)
      .textFrames.add({ geometricBounds: [72, 72, 110, 300] });
  }

  /* 1) Switch based on the currentWeatherSlug we got from the Dark Sky API */
  switch (currentWeatherSlug) {
    /* 2) If it's a clear day */
    case "clear-day":
      /* 3) If we're running in Photoshop */
      if (app.name === "Adobe Photoshop") {
        /* 4) Adjust the color balance of the art layer */
        layer.adjustColorBalance([0, 0, 0], [-10, 0, 0], [-50, 0, 0]);
      } else if (app.name === "Adobe InDesign") {
      /* 5) If it's InDesign */
        /* 6) Use the currentWeatherString as the text frame contents */
        frame.contents = currentWeatherString;
      }
      break;

    /* 7) Repeat for clear night... */
    case "clear-night":
      if (app.name === "Adobe Photoshop") {
        layer.adjustColorBalance([0, 0, 33], [-39, -14, 100], [-10, 0, 17]);
      } else if (app.name === "Adobe InDesign") {
        frame.contents = currentWeatherString;
      }
      break;

    /* 8) And so on for all possible currentWeatherSlug strings... */
  }
}
```

Clicking the button produces output like this:

[Figure: photoshop](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch/readme-assets/photoshop.png)
[Figure: indesign](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch/readme-assets/indesign.png)

Put another way, a Photoshop-hosted panel adjusts an art layer's color balance, while an InDesign-hosted panel adds a text frame to the document containing the weather message.
