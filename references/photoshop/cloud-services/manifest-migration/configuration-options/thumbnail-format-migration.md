# Thumbnail format migration

**V1 Thumbnail Formats:**

V1 accepted three thumbnail formats through `options.thumbnails.type`:

- `image/jpeg`
- `image/png`
- `image/tiff`

**V2 Equivalent:**

For V2, put the format under `exportOptions.mediaType`:

```json
{
  "includeLayerThumbnails": true,
  "exportOptions": {
    "mediaType": "image/jpeg",
    "quality": "high"
  }
}
```

For PNG, use:

```json
{
  "includeLayerThumbnails": true,
  "exportOptions": {
    "mediaType": "image/png",
    "compression": "medium"
  }
}
```
