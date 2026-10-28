# JavaScript

```js
async function foo() {
  console.log("foo"); // writes "foo" to the UXP Developer Tool console.
  console.error("foo error"); // does the same thing, but the text is shown in red so errors are more easily seen.
}
```

### JavaScript

```js
function alert(msg) {
  const { app } = require("indesign");
  const dialog = app.dialogs.add();
  const col = dialog.dialogColumns.add();
  const colText = col.staticTexts.add();
  colText.staticLabel = `${msg}`;

  dialog.canCancel = false;
  dialog.show();
  dialog.destroy();
  return;
}

async function foo() {
  alert("foo");
}
```
