# photoshopCore

The `core` module exposes specialized commands inside the application.
Use it to read or change assorted application-state properties.

Some commands here are experimental. Others may later move into the DOM. When that happens, their use should become simpler, for example by removing the need to pass the document ID as an argument.

```javascript
const { core } = require("photoshop");
```

### Properties

| Name | Type | Min Version | Description |
| --- | --- | --- | --- |
| apiVersion | _number_ | 22.5 | API Version declared by the plugin's manifest.json under `host.data.apiVersion` field. |
