# `dispose`

This synchronous method releases the image data it contains. Calling it reduces memory use sooner than waiting for the JavaScript garbage collector.

```javascript
const imageData = await imaging.createImageDataFromBuffer(arrayBuffer, options);
// perhaps a putPixels call
imageData.dispose();
```
