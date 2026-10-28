# open

23.0

**async** : _Promise_<[*Document*](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md)>

Opens the requested document and returns its model.

> \*Pass a
> [UXPFileEntry](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/file.md)
> as the argument for this API.

Use either alternative in a Photoshop UXP async handler. Document changes run in a modal scope.

```javascript
const { app, core } = require("photoshop");
const fs = require("uxp").storage.localFileSystem;
const entry = await fs.getFileForOpening();
if (entry) {
  const document = await core.executeAsModal(
    () => app.open(entry), { commandName: "Open selected file" }
  );
}
```

Alternatively, let Photoshop show its open dialog:

```javascript
const { app, core } = require("photoshop");
const document = await core.executeAsModal(
  () => app.open(), { commandName: "Open document" }
);
```

### Parameters

| Name | Type |
| --- | --- |
| `entry?` | File |
