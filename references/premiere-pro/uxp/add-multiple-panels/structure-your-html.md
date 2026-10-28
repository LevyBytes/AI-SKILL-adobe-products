# 2. Structure Your HTML

In `index.html`, add distinct wrapper containers for the panels. The second wrapper needs an `id` so JavaScript can find it later.

```html
<!doctype html>
<html>
  <head>
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="wrapper">
      <sp-heading>First Panel</sp-heading>
      <sp-divider size="L"></sp-divider>
      <sp-body> This is the first panel. </sp-body>
      <sp-button id="open-second-panel">Open Second Panel</sp-button>
    </div>

    <div class="wrapper" id="second-panel">
      <sp-heading>Second Panel</sp-heading>
      <sp-divider size="L"></sp-divider>
      <sp-body> This is the second panel. </sp-body>
    </div>
  </body>
</html>
```

**Important notes:**

- Both panels use one shared HTML document.
- Only the second `<div>` wrapper requires an `id`, because it is appended into the second panel body and needs a lookup handle.
- The first panel content already exists in the DOM and requires no special treatment.

The `<div>` wrapper `id` that contains second-panel content may differ from the second panel's `id` in `manifest.json`.
