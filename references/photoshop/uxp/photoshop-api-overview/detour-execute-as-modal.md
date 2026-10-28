# Detour - ExecuteAsModal

Before building Photoshop UXP plugins, understand the pattern referred to here as "execute as modal". Commands that may **modify the document** or **application state** must run through executeAsModal.

```javascript
async function makeDefaultDocument(executionContext) {
  const app = require("photoshop").app;
  let myDoc = await app.createDocument({ preset: "My Web Preset 1" });
}

await require("photoshop").core.executeAsModal(makeDefaultDocument);
```

This requirement can cover much of a plugin's behavior. The [Execute as Modal documentation](../executeasmodal.md) gives a fuller explanation of the model.
