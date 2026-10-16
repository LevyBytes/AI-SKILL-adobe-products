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
    </dialog>
  </body>
</html>
```

### index.html

```html
<!doctype html>
<html>
  <head>
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <sp-heading>Open Modal Dialog</sp-heading>
    <sp-button-group>
      <sp-button id="openFirstDialogBtn">Open First Dialog</sp-button>
      <sp-button id="openSecondDialogBtn">Open Second Dialog</sp-button>
    </sp-button-group>

    <dialog id="modal1">
      <sp-heading>👋 Hello Modal Dialog!</sp-heading>
      <sp-divider size="L"></sp-divider>
      <sp-body>Modal body content 1</sp-body>
    </dialog>

    <dialog id="modal2">
      <sp-heading>👋 Hello Another Modal Dialog!</sp-heading>
      <sp-divider size="L"></sp-divider>
      <sp-body>Modal body content 2</sp-body>
    </dialog>
  </body>
</html>
```
