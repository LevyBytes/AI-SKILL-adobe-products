# Distinct artboard layer type

In V1 manifests, artboards appeared as `layerSection` nodes and could not be distinguished from ordinary group folders. V2 assigns them a dedicated `type: "artboard"` plus full geometry, preset name, and background-color data.

Calling `documentManifest` in V1 on a PSD with artboards returned every artboard as a plain `layerSection` group. The response did not state that the node was an artboard or identify the device preset, so callers had to infer that from names.

With V2 `generate-manifest`, artboards become first-class layer entries. The response supplies:

- Device preset name for the artboard (e.g. `"iPhone 16 Pro"`)
- Full artboard rectangle data (`artboardRect`)
- Background type and background color
- Unambiguous child traversal through `layers[]`, not `children[]`

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "type": "artboard",
  "id": 1,
  "name": "iPhone 16 Pro – 1",
  "typeAttributes": {
    "artboard": {
      "artboardPresetName": "iPhone 16 Pro",
      "artboardRect": {
        "left": 0,
        "top": 0,
        "right": 393,
        "bottom": 852
      },
      "artboardBackgroundType": 1,
      "color": {
        "type": "RGBColor",
        "red": 255,
        "grain": 255,
        "blue": 255
      }
    }
  },
  "layers": [ /* additional content omitted */ ]
}
```

See [Manifest Response Migration](../../manifest-response-migration.md) for the full artboard field reference.
