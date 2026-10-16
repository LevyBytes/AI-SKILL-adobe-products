# Maximum thumbnail depth

Set how far into the layer hierarchy thumbnail creation should go:

```json
{
  "includeLayerThumbnails": true,
  "maximumThumbnailDepth": 3
}
```

- `0`: No maximum depth; create thumbnails for every layer
- `> 0`: Create thumbnails only through the specified depth
- Default: All layers
