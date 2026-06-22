# V2 Whats New

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

This page focuses on capabilities that are **net new in V2**, meaning operations that V1 could not perform. For a full behavior-by-behavior comparison covering changed, renamed, and breaking items, see the [V2 API Behavior Catalog](api-v2-api-catalog.md).

## `/v2/execute-actions` — new capabilities

### UXP script execution

Alongside traditional `.atn` Photoshop actions and ActionJSON, V2 can run modern ES6+ JavaScript automation through Adobe's UXP platform. These UXP scripts execute inside Photoshop and can work with the full API surface for document structure and layers.

V1 handled `.atn` action files and ActionJSON. V2 adds UXP scripts, which are JavaScript programs that run inside Photoshop on Adobe's current extension platform:

```json
{
  "image": {
    "source": { "url": "https://example.com/input.psd" }
  },
  "options": {
    "uxp": [
      {
        "source": {
          "content": "const doc = require('photoshop').app.activeDocument;\nconst layers = doc.layers;\nconst info = layers.map(l => ({ name: l.name, kind: l.kind }));\nrequire('uxp').storage.localFileSystem.getTemporaryFolder()\n  .then(tmp => tmp.createFile('info.json'))\n  .then(f => f.write(JSON.stringify(info)));"
        }
      }
    ]
  },
  "outputs": [
    {
      "mediaType": "application/json",
      "destination": { "embedded": "json" },
      "scriptOutputPattern": "info.json"
    }
  ]
}
```

UXP scripts can:

- Use ES6+ JavaScript, including modern syntax, arrow functions, async/await, and modules
- Read and change document structure, layers, and effects through the full Photoshop API
- Execute in a Photoshop sandbox where file I/O is limited to `plugin-temp:/`
- Run together with `.atn` / ActionJSON in one request, with actions first and UXP scripts afterward

### New actions

Actions execution now supports many newly available action workflows, including these and more:

1.  Generative Fill
2.  Generative Expand
3.  People/Wire Distractor
4.  Dynamic Text
5.  And many more...

See [Actions Migration](api-actions-migration.md) for the full UXP syntax reference.

### UXP adhoc file output

During execution, UXP scripts may write files into `plugin-temp:/`. The `scriptOutputPattern` field uses glob syntax to collect those runtime-created files and return them to the caller, which supports adhoc variable output sets that are not known before the job begins. This capability is **UXP-only** and does not apply to `.atn` or ActionJSON.

Under V1, every output needed a fixed file name and destination URL before processing started. Scripts that produced a variable file count had no capture mechanism.

In V2, `scriptOutputPattern` matches a glob against files produced by a UXP script at runtime:

```json
{
  "outputs": [
    {
      "mediaType": "image/png",
      "destination": { "validityPeriod": 3600 },
      "scriptOutputPattern": "preview-*.png"
    }
  ]
}
```

When the script creates `preview-small.png`, `preview-medium.png`, and `preview-large.png`, the response returns three output entries, each with a separate hosted URL.

Key constraints:

- Allowed destinations are only `embedded` and `hosted`; presigned URLs need filenames before execution
- Compare patterns without case sensitivity against filenames in the UXP output directory
- When `scriptOutputPattern` is set, ignore `quality`, `compression`, `width`, and `height` output parameters

For full syntax and examples, use [Actions Migration](api-actions-migration.md).

### Published and customizable action files

V1 convenience APIs such as `productCrop` used hidden server-side action files that callers could not inspect or edit. V2 makes those same action files available, so callers can review, fork, and customize them.

Several V1 convenience endpoints wrapped private Photoshop action files:

- `/pie/psdService/productCrop` - product auto-cropping with padding

In V2, these operations run through `/v2/execute-actions` and use published action files. You can:

- Review Adobe's implementation directly
- Execute the action unchanged with `additionalContents`
- Download the action and tailor it for your own requirements
- Use the published files as a reference when building similar behavior

Download links and usage details are in the individual guides:

- [Product Crop](api-convenience-apis.md)

## `/v2/generate-manifest` — richer document intelligence

### Distinct artboard layer type

In V1 manifests, artboards appeared as `layerSection` nodes and could not be distinguished from ordinary group folders. V2 assigns them a dedicated `type: "artboard"` plus full geometry, preset name, and background-color data.

Calling `documentManifest` in V1 on a PSD with artboards returned every artboard as a plain `layerSection` group. The response did not state that the node was an artboard or identify the device preset, so callers had to infer that from names.

With V2 `generate-manifest`, artboards become first-class layer entries. The response supplies:

- Device preset name for the artboard (e.g. `"iPhone 16 Pro"`)
- Full artboard rectangle data (`artboardRect`)
- Background type and background color
- Unambiguous child traversal through `layers[]`, not `children[]`

```json
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
  "layers": [ ... ]
}
```

See [Manifest Response Migration](api-manifest-response-migration.md) for the full artboard field reference.

### Smart object extraction

Embedded smart objects now include a manifest download link at `extracted.url`. Callers can fetch the raw embedded smart-object file, such as a PSD, PNG, or another file type, without launching Photoshop.

V1 only reported that a smart object existed, along with its filename and MIME type. It did not provide a way to retrieve the embedded content.

V2 `generate-manifest` adds `extracted` for non-linked, embedded smart objects:

```json
{
  "type": "smart_object_layer",
  "name": "button-component",
  "isSmartObject": true,
  "isLinked": false,
  "isValid": true,
  "smartObjectData": {
    "fileInfo": {
      "name": "button-component.psd",
      "fileType": "ps3"
    }
  },
  "extracted": {
    "mediaType": "image/vnd.adobe.photoshop",
    "url": "https://photoshop-api.adobe.io/v2/short-url/urn:aaid:ps:..."
  }
}
```

`extracted.url` is a short-URL redirect for the raw embedded content. Only embedded smart objects that are not CC-linked expose this value.

See [Manifest Response Migration](api-manifest-response-migration.md) for full smart object field details.

### Rich manifest layer metadata

Manifest responses in V2 expose many per-layer details absent from V1, including composite frame bounds, warp settings, blend-if ranges, CC Libraries linkage, missing-font data, and additional metadata.

V1 manifest data was much thinner, typically covering basics such as name, type, bounds, and blend mode.

V2 adds these fields on each layer:

| Field | Description |
| --- | --- |
| `compositeFrame` | Bounds in canvas space, both absolute and parent-relative |
| `referenceFrame` | Content bounds before transformations |
| `layerSettings.FXRefPoint` | Layer-effects reference point |
| `layerSettings` → `textLayerSettings` | Text warp data, including style, value, perspective, and rotation |
| `blendOptions.blendRanges` | Blend-if color-range information |
| `blendOptions.fillOpacity` | Fill opacity tracked separately from layer opacity |
| `blendOptions.channelRestrictions` | Blend limits per channel |
| `smartObjectData.ccLibrariesElement` | CC Libraries metadata: name, library, stock ID, and license state |
| `text.missingFonts` | Fonts unavailable on the server |
| `text.antiAliasing` | Anti-aliasing method, such as `"crisp"` |
| `text.paragraphAttributes` | Per-paragraph indents, spacing, and writing direction |

These fields appear automatically in `generate-manifest` responses, with no request-side change required.

See [Manifest Response Migration](api-manifest-response-migration.md) for the complete field catalog.

## `/v2/create-composite` — major new capabilities

### Smart object support - enhanced in V2

V2 reshapes the smart object API so place, replace, and transform operations behave predictably. It adds SVG source support, linked smart objects, and replacement capabilities that V1 did not offer.

V1 handled smart objects inconsistently across add, edit, and replace workflows. V2 brings those cases under one `operation` model with explicit `type` and `placement` values:

```json
{
  "type": "smart_object_layer",
  "name": "Logo",
  "operation": {
    "type": "add",
    "placement": { "type": "top" }
  },
  "smartObject": {
    "smartObjectFile": {
      "source": { "url": "<SMART_OBJECT_URL>" }
    }
  }
}
```

**New features in V2:**

1. **Expanded File Type Support** - V2 supports SVG (`image/svg+xml`) and AI / Adobe Illustrator (`application/illustrator`) as additional smart object source types. V1 accepted PSD, JPEG, PNG, and PDF.

2. **Linked Smart Objects** - V2 fully supports linked smart objects, where the PSD references external files instead of embedding them. Add a linked smart object by setting `isLinked: true`:

   ```json
   {
     "type": "smart_object_layer",
     "name": "External Logo",
     "operation": {
       "type": "add",
       "placement": { "type": "top" }
     },
     "smartObject": {
       "isLinked": true,
       "smartObjectFile": {
         "source": { "url": "<EXTERNAL_FILE_URL>" }
       }
     }
   }
   ```

3. **Replacement Operations** - V2 adds smart object replacement combinations that V1 could not perform:

   - Swap a linked smart object for a different linked smart object
   - Replace an embedded smart object by using a linked smart object

   Conversion example: embedded smart object to linked smart object:

   ```json
   {
     "name": "Existing Embedded Smart Object",
     "type": "smart_object_layer",
     "operation": {
       "type": "edit"
     },
     "smartObject": {
       "isLinked": true,
       "smartObjectFile": {
         "source": { "url": "<LINKED_FILE_URL>" }
       }
     }
   }
   ```

4. **Resize with Linked Smart Objects** - V1 rejected any resize (`width`/`maxWidth`) on documents containing linked smart objects. V2 removes this restriction. See [resize behavior details](api-layer-operations-smart-objects.md) in the Smart Object Operations Migration guide.

**Supported source types:** See [Supported Source File Types](api-layer-operations-smart-objects.md)

**Use cases for linked smart objects:**

- Shared assets across multiple PSDs
- Large files that shouldn't be embedded
- Assets that need to be updated independently

See [Smart Object Operations Migration](api-layer-operations-smart-objects.md) for complete documentation and examples.

### Text layer support - new rendering engine

Text rendering in V2 changes significantly for complex fonts, multilingual text, and related style handling.

V2 adds character and paragraph style attributes that V1 lacked:

| Property | Description |
| --- | --- |
| `syntheticBold` | Creates bold styling when no bold font variant exists |
| `syntheticItalic` | Creates italic styling when no italic font variant exists |
| `letterSpacing` | Character tracking / letter spacing |
| `lineHeight` | Leading / line height |
| `fontAlpha` | Opacity applied per character |
| `capsOption` | Capitalization setting, for example `"all_caps"` |

V2 also improves missing-font detection while text layers are edited. In V1, editing a text layer that referenced an unavailable font, such as changing `fontSize`, `fontName`, or another character attribute, did not reliably activate the configured `missingFontStrategy`; the job could finish while keeping the unresolved font. Across every edit path, V2 detects missing fonts and honors `missingFontStrategy`.

For character and paragraph style details, use [Text Layer Operations Migration](api-layer-operations-text.md); its [missing font detection details](api-layer-operations-text.md) section covers that behavior.

### Group layer create and edit

V2 adds `type: "group_layer"` where V1 used `"layerSection"`, plus one `operation` model for group reordering and insertion into existing groups.

**New document creation with a group layer is still not supported (upcoming feature).**
To add a layer inside a group layer while **editing an existing document**, use `placement.type: "into"` with `referenceLayer` (e.g. `"referenceLayer": { "name": "Group 1" }`); this case **is supported**.

```json
{
  "type": "smart_object_layer",
  "name": "Logo",
  "operation": {
    "type": "add",
    "placement": {
      "type": "into",
      "referenceLayer": { "name": "Group 1" }
    }
  },
  "smartObject": {
    "smartObjectFile": { "source": { "url": "<LOGO_URL>" } }
  }
}
```

Placement options for ordering within groups: `into`, `above`, `below`, `top`, `bottom`.

See [Advanced Layer Operations Migration](api-layer-operations-advanced.md) for the full group layer reference.

### Delete pixel mask

V2 can remove a pixel mask from a layer during an edit operation. V1 provided no way to delete an existing pixel mask except by replacing the whole layer.

When modifying an existing layer, set `pixelMask.delete` to `true` to remove that layer's pixel mask. The mask data is deleted completely.

```json
{
  "edits": {
    "layers": [
      {
        "name": "Layer with Mask",
        "operation": { "type": "edit" },
        "pixelMask": {
          "delete": true
        }
      }
    ]
  }
}
```

Key constraints:

- Only available on **edit** operations (`operation.type: "edit"`); not valid on add
- `delete` must be a boolean (`true` or `false`);
- Can be combined with other layer edits (opacity, visibility, etc.) in the same layer entry

See [Advanced Layer Operations Migration](api-layer-operations-advanced.md) for full examples and validation rules.

### ICC profile control

V2 allows each export to declare its output ICC profile, either from standard Photoshop profiles or from a caller-provided custom profile. V1 did not include ICC profile control.

Any V2 output destination may include `iccProfile`:

```json
{
  "outputs": [
    {
      "mediaType": "image/jpeg",
      "destination": { "url": "https://storage.example.com/output.jpg" },
      "iccProfile": {
        "standard": "sRGB IEC61966-2.1"
      }
    }
  ]
}
```

Standard profiles include `sRGB IEC61966-2.1`, `Adobe RGB (1998)`, `ProPhoto RGB`, and others. A custom `.icc` file can be supplied through `iccProfile.custom.source.url`.

The full profile list and constraints are in [ICC Profile Migration](api-v1-to-v2-3.md).

### Crop mode - unified enum for all export types

V1 controlled output bounds with two booleans, `trimToCanvas` and `trimToLayer`. V2 replaces those flags with one `cropMode` enum that applies to single-layer, multi-layer, and document exports.

In V1, rendition outputs used `trimToCanvas` for trimming transparent pixels and `trimToLayer` for layer bounds. Those flags handled document and single-layer export, but multi-layer composites lacked trim control.

V2 uses a single `cropMode` value on any output:

| Value | Description | Single-layer | Multi-layer | Document export |
| --- | --- | --- | --- | --- |
| `layer_bounds` | The layer's bounding box; default for single-layer export | Yes | No | No |
| `trim_to_transparency` | Non-transparent-pixel crop; V1 equivalent is `trimToCanvas: true` | Yes | Yes | Yes |
| `document_bounds` | Entire canvas size; default for document or multi-layer export | Yes | Yes | Yes |

```json
{
  "outputs": [
    {
      "mediaType": "image/png",
      "destination": { "url": "https://storage.example.com/output.png" },
      "layers": [{ "id": 1096 }, { "id": 996 }],
      "cropMode": "trim_to_transparency"
    }
  ]
}
```

`layer_bounds` can only be used for single-layer export; multi-layer or document export returns a validation error.

The full cropMode reference is in [Export Layers Migration](api-v1-to-v2-2.md).

## Architectural improvements

### Long running process support

The processing-time allowance has been increased to 15 minutes so larger and more complex edits can complete.

### Large file support

The previous file-size ceiling was 2 GB; the limit is being raised to 4 GB. Additional details are still in progress and a new number will be shared later.

### Better error handling and job timeouts

Most workflows should now return actionable error codes that make diagnosis easier. Jobs are also automatically marked failed after an hour without activity.

## Storage options

V2 adds two convenience storage modes for cases that need no external infrastructure. They are useful for quick prototypes and for returning intermediate pipeline results:

- **Embedded** - returns the result inline as base64 in the response body, with use limited to textual content only.
- **Hosted** - stores the result temporarily through Adobe and returns a download URL with configurable expiration.

For production use, external storage such as S3, Azure, Dropbox, or Creative Cloud is still recommended; choose according to the caller's intended access-control model.

The full reference is in the [Storage Solutions](https://raw.githubusercontent.com/getting-started/storage-solutions/index.md) guide.

## Next steps

- [V2 API Behavior Catalog](api-v2-api-catalog.md) - Complete per-endpoint behavioral comparison (V1 vs V2)
- [Migration Overview](api-v1-to-v2-3.md) - Architectural changes and high-level migration guidance
- [Quick Reference](api-v1-to-v2-3.md) - Endpoint mapping table and migration step list

## See also

- [Text Layer Operations](api-text-layer-operations.md)
