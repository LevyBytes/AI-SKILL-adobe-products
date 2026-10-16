# Step 1: Adjust the panel UI

Because layer names no longer need to be displayed in the plugin UI, some `index.html` elements can be removed.

Delete `<sp-body id="layers" />` and its related styles, then change the _"Populate Layers"_ button label to _"Rename Layers"_:

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
    <footer>
      <sp-button id="btnRename">Rename Layers</sp-button>
    </footer>
  </body>
</html>
```

The button's `id` is also changed to `"btnRename"`. After re-loading, unless UDT's _"Watch"_ function is already enabled, the panel should appear like this:

[Figure: A Photoshop panel with a button "Rename Layers"](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/editing-the-document/panel.png)
