# Using the File Menu

1. Create the script file using the `.psjs` extension (Photoshop JavaScript)
2. Launch Photoshop
3. Choose **File → Scripts → Browse...**
4. Select your `.psjs` file
5. Photoshop starts running it right away

```javascript
// Example: resize.psjs
const { app } = require("photoshop");

async function main() {
  const doc = app.activeDocument;

  await app.batchPlay(
    [
      {
        _obj: "imageSize",
        width: { _unit: "pixelsUnit", _value: 1920 },
        constrainProportions: true,
      },
    ],
    {},
  );

  console.log("Resize complete!");
}

main();
```
