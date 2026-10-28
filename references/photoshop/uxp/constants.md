# Constants

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Before using constants, import the `constants` object from the photoshop module.

```javascript
const { app, constants } = require("photoshop");

await app.activeDocument.resizeImage(800, 600, 100, constants.InterpolationMethod.AUTOMATIC);
```
