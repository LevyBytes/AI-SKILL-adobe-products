# Include layer thumbnails

Request thumbnail images for every layer:

```json
{
  "includeLayerThumbnails": true
}
```

Default: `false`

**Note:** Thumbnail generation is opt-in in both V1 and V2. V1 used an `options.thumbnails` object with a `type` property; V2 uses `includeLayerThumbnails: true`.
