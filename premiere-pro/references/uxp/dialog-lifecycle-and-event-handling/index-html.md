# index.html

```html
<!doctype html>
<html>
  <head>
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <sp-heading>Open Modal Dialog</sp-heading>
    <sp-button id="openDialogBtn">Click</sp-button>

    <dialog>
      <sp-heading>👋 Hello Modal Dialog!</sp-heading>
      <sp-divider size="L"></sp-divider>
      <sp-body>Modal body content</sp-body>
      <sp-button-group>
        <sp-button id="closeDialogBtn">OK</sp-button>
        <sp-button id="cancelDialogBtn">Cancel</sp-button>
      </sp-button-group>
    </dialog>
  </body>
</html>
```
