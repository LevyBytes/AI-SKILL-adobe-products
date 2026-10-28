# Step 1: Adjust the `index.html`

The new feature for this tutorial is exporting a `.tsv` file from the plugin.

To add UI support, update `index.html` with another section and the additional button `<sp-button id="btnExport" />`:

```html
<!doctype html>
<html>
  <head>
    <script src="index.js"></script>
  </head>
  <style>
    body {
      color: white;
      padding: 0 16px;
    }
  </style>
  <body>
    <sp-heading>Layers</sp-heading>
    <sp-heading size="S">Rename layers</sp-heading>
    <sp-body size="S"> Rename layers to contain their opacity. </sp-body>
    <sp-button id="btnRename">Rename Layers</sp-button>
    <sp-heading size="S">Export Report</sp-heading>
    <sp-body size="S"> Export a report of all layers in the document. </sp-body>
    <sp-button id="btnExport" variant="secondary">Export Report</sp-button>
  </body>
</html>
```

The updated panel is shown below:

[Figure: Photoshop panel with two buttons: "Rename Layers" and "Export Report"](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/writing-a-file/panel.png)
