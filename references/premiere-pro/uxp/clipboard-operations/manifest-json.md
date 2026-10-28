# manifest.json

```json
{
  "requiredPermissions": {
    "clipboard": "readAndWrite"
  }
}
```

...

...

### manifest.json

```json
{
  "requiredPermissions": {
    "clipboard": "read"
  }
}
```

...

...

Because this sample only reads clipboard content, the manifest uses `"read"` rather than a write-capable permission. Keep requested access to the minimum level the plugin actually needs.
