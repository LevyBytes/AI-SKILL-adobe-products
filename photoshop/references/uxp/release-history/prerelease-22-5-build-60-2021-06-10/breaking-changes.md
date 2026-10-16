# Breaking changes

To use the new API set, update the project's `manifest.json` so the `host` object includes:

```json
{
  "data": {
    "apiVersion": 2
  }
}
```

This is a manifest excerpt. Merge it with the corresponding properties of the complete plugin manifest.

Also, `manifest.json` must use version 4:

```json
{
  "manifestVersion": 4
}
```

This is a manifest excerpt. Merge it with the corresponding properties of the complete plugin manifest.

Set `apiVersion` to 1 to return to the MAX 2020 Photoshop DOM API version.
