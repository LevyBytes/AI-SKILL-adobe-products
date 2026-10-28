# 7. Per-layer-type reference

> **Every `edits.layers[]` entry must include `type`.** V2 will not infer a layer category. If `type` is omitted, validation fails even for small edits such as visibility or name updates.
>
> Valid types: `"layer"`, `"text_layer"`, `"adjustment_layer"`, `"smart_object_layer"`, `"group_layer"`, `"solid_color_layer"`.
>
> **V1 (no type needed; inferred):** `{"name": "My Layer", "isVisible": false}`
>
> **V2 (type required):** `{"type": "layer", "name": "My Layer", "isVisible": false}`
