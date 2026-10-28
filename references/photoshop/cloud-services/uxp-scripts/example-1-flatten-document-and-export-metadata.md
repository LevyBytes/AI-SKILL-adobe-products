# Example 1: Flatten Document and Export Metadata

```javascript
const { app } = require("photoshop");
const fs = require("fs");

async function main() {
  try {
    const doc = app.activeDocument;

    // Collect document info before flattening
    const metadata = {
      originalName: doc.name,
      width: doc.width,
      height: doc.height,
      resolution: doc.resolution,
      originalLayerCount: doc.layers.length,
      colorMode: doc.mode,
    };

    // Flatten document
    await doc.flatten();

    // Add processing info
    metadata.processedAt = new Date().toISOString();
    metadata.finalLayerCount = doc.layers.length;

    // Write metadata to output
    fs.writeFileSync("<YOUR_OUTPUT_DIRECTORY>/metadata.json", JSON.stringify(metadata, null, 2));

    console.log("Processing complete!");
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
