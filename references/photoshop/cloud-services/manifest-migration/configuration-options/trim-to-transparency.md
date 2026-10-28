# Trim to transparency

Crop each layer thumbnail tightly around its visible content by removing transparent pixels:

```json
{
  "includeLayerThumbnails": true,
  "trimToTransparency": true
}
```

Default: `false`

**Important:** `trimToTransparency` is honored only when `includeLayerThumbnails` is `true`. With `includeLayerThumbnails` set to `false`, the setting does nothing.

**Adjustment layers and layers with no pixel data:** For these layers, `trimToTransparency` does not change the result. Their thumbnails always come back as a blank white canvas, independent of this setting.

**Note:** The `trimToTransparency` flag belongs to the `/v2/generate-manifest` endpoint. To trim exported images from `/v2/create-composite` or `/v2/execute-actions`, place `cropMode: "trim_to_transparency"` in the output options instead.
