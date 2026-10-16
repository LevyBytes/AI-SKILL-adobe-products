# V2 manifest example

```json
{
  "id": 0,
  "index": 0,
  "type": "background_layer",
  "name": "Background",
  "visible": true,
  "protection": ["none"],
  "background": {
    "canConvertToLayer": true
  },
  "blendOptions": {
    "opacity": 100,
    "blendMode": "normal"
  }
}
```

Important fields:

- **`id: 0`** - For a document whose only layer is the background, the background layer reports `id` as `0`.
- **`background.canConvertToLayer`** - Shows whether the background may be promoted to a regular layer.
- **`index: 0`** - The background stays at index 0, the bottom position in the layer stack.
