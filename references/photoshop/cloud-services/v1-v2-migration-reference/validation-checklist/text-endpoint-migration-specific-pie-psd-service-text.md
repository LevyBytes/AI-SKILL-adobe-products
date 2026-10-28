# Text endpoint migration specific (`/pie/psdService/text`)

- [ ] V2 has no declarative text endpoint; use `/v2/execute-actions`
- [ ] Use ActionJSON for fixed changes on known layers, and UXP for conditional or iterative logic
- [ ] Stringify ActionJSON and include `contentType: "application/json"`
- [ ] For UXP document changes, call `core.executeAsModal()` and include `contentType: "application/javascript"`
- [ ] **Multi-layer edits:** A V1 `options.layers[]` payload may target 10–50+ layers. Generate a separate `select`+`set` pair in V2 ActionJSON for every target layer; layers with the same replacement text still need their own pair, and none may be skipped. Use integer `_id` selectors instead of `_name` because names can repeat. Two-layer payload example: `[{"_obj":"select","_target":[{"_ref":"layer","_id":71}],"makeVisible":false},{"_obj":"set","_target":[{"_ref":"textLayer","_enum":"ordinal","_value":"targetEnum"}],"to":{"_obj":"textLayer","textKey":"Hello"}},{"_obj":"select","_target":[{"_ref":"layer","_id":44}],"makeVisible":false},{"_obj":"set","_target":[{"_ref":"textLayer","_enum":"ordinal","_value":"targetEnum"}],"to":{"_obj":"textLayer","textKey":"World"}}]`
- [ ] **Bounds/visibility-only edits:** When a V1 payload changes only layer bounds or visibility and has no text content/style fields, V2 still needs non-empty `options` containing ActionJSON or UXP; an empty `options` object fails with `"options: At least one of actions or uxp must be provided"`. Build ActionJSON that selects every target layer by `_id` and applies `translate`/transform` for bounds edits or `hide`/show` for visibility. Do not send a declarative V2 text-layer edit unless `options.actions` or `options.uxp` contains at least one entry.
- [ ] Convert `options.fonts[]` to `options.fontOptions.additionalFonts[]` using `{source: {url}}`
- [ ] Convert `options.manageMissingFonts: "useDefault"` to `options.fontOptions.missingFontStrategy: "use_default"`
