# Step 2: Add the new function to the `index.js`

Exporting the report has two required parts:

1. Build a string containing the file content you want. This follows the same pattern as the earlier tutorials that use DOM APIs from the `window.require('photoshop')` module.
2. Call UXP APIs through `window.require('uxp')` so the user can choose where the file should be saved, then write the desired content to that location.

Update `index.js` with this code:

```javascript
// [...]

async function exportReport() {
  // create the TSV string
  let tsvString = "Base name\tOpacity\tIs visible";

  const app = window.require("photoshop").app;
  app.activeDocument.layers.forEach((layer) => {
    tsvString += "\n" + layer.name + "\t" + layer.opacity + "\t" + (layer.visible ? "yes" : "no");
  });

  // save the string to the filesystem
  const storage = window.require("uxp").storage;
  const file = await storage.localFileSystem.getFileForSaving("layers.tsv");
  if (!file) return;
  await file.write(tsvString);
}

document.getElementById("btnExport").addEventListener("click", () => {
  exportReport().catch(error => console.error("Cannot export layer report", error));
});
```

The `async` and `await` keywords matter here because UXP storage calls run asynchronously, so their completion must be awaited.

Reload the plugin, then click _"Export Report"_; a file picker appears:

[Figure: A native Windows 10 file saving dialog with a file type "TSV" and a pre-selected name "layers.tsv"](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/writing-a-file/save-file-dialog.png)

`getFileForSaving(defaultName)` takes the string you pass in as the suggested file name, and that value also determines the supported file type.

Opening the exported file in Excel shows the layers and their properties:

[Figure: Excel table with the columns "Base name", "Opacity", and "Is visible" and the layers as rows](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/writing-a-file/excel-tsv-preview.png)
