# Example 2: Conditional Processing Based on Image Size

```javascript
const { app } = require("photoshop");
const fs = require("fs");

async function main() {
  try {
    const doc = app.activeDocument;

    const width = doc.width;
    const height = doc.height;

    let resizeNeeded = false;
    let blurApplied = false;

    // Resize if image is too large
    if (width > 2000 || height > 2000) {
      await app.batchPlay(
        [
          {
            _obj: "imageSize",
            width: {
              _unit: "pixelsUnit",
              _value: Math.min(width, 2000),
            },
            height: {
              _unit: "pixelsUnit",
              _value: Math.min(height, 2000),
            },
            constrainProportions: true,
            interfaceIconFrameDimmed: {
              _enum: "interpolationType",
              _value: "bicubic",
            },
          },
        ],
        {},
      );

      resizeNeeded = true;
    }

    // Apply blur for very high-resolution images
    if (width > 3000 || height > 3000) {
      await app.batchPlay(
        [
          {
            _obj: "gaussianBlur",
            radius: {
              _unit: "pixelsUnit",
              _value: 2,
            },
          },
        ],
        {},
      );

      blurApplied = true;
    }

    // Export processing report
    const report = {
      originalSize: { width, height },
      finalSize: { width: doc.width, height: doc.height },
      resizeApplied: resizeNeeded,
      blurApplied: blurApplied,
      timestamp: new Date().toISOString(),
    };

    fs.writeFileSync("<YOUR_OUTPUT_DIRECTORY>/report.json", JSON.stringify(report, null, 2));
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

main().catch((err) => {
  console.error("Script failed:", err);
  process.exit(1);
});
```
