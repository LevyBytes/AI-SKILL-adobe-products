# Manifest declaration

The `manifest.json` file sits at the root of the plugin bundle and stores the plugin metadata. Among the properties described in [this reference guide](../manifest.md), Entrypoints are declared in the required `entrypoints` array.

```json
{
  "manifestVersion": 5,
  "id": "test1234",
  "name": "Test Plugin",
  "version": "1.0.0",
  "host": {
    "app": "premierepro",
    "minVersion": "25.6.0"
  },
  "main": "index.html",
  "entrypoints": [
    {
      "type": "command",
      "id": "firstCommand",
      "label": {
        "default": "Run a Function"
      }
    },
    {
      "type": "panel",
      "id": "firstPanel",
      "label": {
        "default": "First Panel"
      }
    }
  ]
}
```

The Manifest must declare at least one entrypoint of type [`entrypointDefinition`](../supporting-definitions/entrypoint-definition.md).
