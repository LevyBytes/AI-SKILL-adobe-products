# 1. Register a new Entrypoint

Add an Entrypoint of type `"command"` in `manifest.json`.

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

A [`LocalizedString`](../supporting-definitions/localized-string.md) can also localize the [`label`](../supporting-definitions/label.md) property for the command.
