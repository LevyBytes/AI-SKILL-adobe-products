# manifest.json

```json
{
  "entrypoints": [
    {
      "type": "command",
      "id": "myCommand",
      "label": "This is a Command"
    }
  ]
}
```

...

...

The [Entrypoints concept guide](../uxp-entrypoints/reference-index.md) covers several roles for `entrypoints.setup()`, including binding commands to their handlers. Here, `myCommand` is the command Entrypoint ID registered in the manifest.

Call `entrypoints.setup()` only once; any later call throws an error. When more entrypoints are needed, register all of them together.

### manifest.json

```json
{
  "main": "index.js",
  "entrypoints": [
    {
      "type": "command",
      "id": "myCommand",
      "label": "This is a Command"
    }
  ]
}
```

...

...

...
