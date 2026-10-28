# Convert to regular layer migration

**Convert to regular layer:**
Promote the background to a regular `layer` with `convertToLayer: true`. Add `convertedLayerName` to assign the name immediately, allowing later `layers` entries in the **same API call** to target that converted layer by name:

```json
{
  "type": "background_layer",
  "name": "Background",
  "operation": { "type": "edit" },
  "convertToLayer": true,
  "convertedLayerName": "Converted Background"
}
```

After conversion, the manifest shows the layer as `type: "layer"` with the assigned name. Operations that had been restricted, including `transform`, `protection`, and `blendOptions`, then become valid.
