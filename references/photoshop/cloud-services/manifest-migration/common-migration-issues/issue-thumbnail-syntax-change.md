# Issue: Thumbnail syntax change

**Problem:** V1 thumbnail-generation syntax must be changed for V2

**Solution:** Both versions make thumbnail creation explicit, but the request shape changed:

```json
{
  "includeLayerThumbnails": true
}
```

**V1 Behavior:**

```json
{
  "options": {
    "thumbnails": {
      "type": "image/jpeg"
    }
  }
}
```

**V2 Equivalent:**

```json
{
  "includeLayerThumbnails": true,
  "exportOptions": {
    "mediaType": "image/jpeg"
  }
}
```
