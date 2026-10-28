# Issue: Missing `type` field on layer in `edits.layers[]`

**Problem:** A layer item omits `type`, for example a visibility-only V1 edit where the type was implicit.

```json
{ "edits": { "layers": [{ "name": "My Layer", "isVisible": false }] } }
```

**Solution:** Every object in `edits.layers[]` must carry `type`; V2 will not infer it.

```json
{ "edits": { "layers": [{ "type": "layer", "name": "My Layer", "isVisible": false }] } }
```

Pick the matching type value: `"layer"`, `"text_layer"`, `"adjustment_layer"`, `"smart_object_layer"`, `"group_layer"`, or `"solid_color_layer"`.
