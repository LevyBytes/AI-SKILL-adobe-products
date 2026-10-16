# JavaScript

```js
async function foo() {
  const { shell } = require("uxp");
  try {
    await shell.openPath("/Users/user/Desktop/test.pdf");
  } catch (e) {
    console.error(e);
  }
}
```

### JavaScript

```js
async function foo() {
  const { shell } = require("uxp");
  try {
    await shell.openExternal("https://www.adobe.com", "Opening browser for testing purpose.");
    await shell.openExternal("mailto:/example.com/");
  } catch (e) {
    console.error(e);
  }
}
```
