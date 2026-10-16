# Migration path by V1 endpoint

**When the V1 call is a Lightroom endpoint:**

- `/lrService/*` → Move all of them to `/v2/edit`
- Combine multiple operations in a single request

**When the V1 call is a PSD layer operation:**

- `/pie/psdService/documentOperations` → Use `/v2/create-composite` with `edits.layers`
- Choose the detailed guide based on layer type

**When the V1 call uses a dedicated smart object or text endpoint:**

- `/pie/psdService/smartObject` → Use `/v2/create-composite` with `type: "smart_object_layer"`
- `/pie/psdService/text` → Use `/v2/execute-actions` (ActionJSON or UXP)

**When the V1 call is an action endpoint:**

- Move every action endpoint to `/v2/execute-actions`
- Action files are now published and can be customized

**When the V1 call performs format conversion:**

- `/renditionCreate` → Use `/v2/create-composite` (no edits)
- One request can produce multiple outputs

**For the full behavior reference:**

- `v2-whats-new.md` — covers new V2 capabilities, including artboard metadata, smart object extraction, UXP scripts, hosted/embedded storage, ICC profiles, granular protection, scriptOutputPattern, and multiple outputs
- `v2-api-catalog.md` — provides endpoint-by-endpoint behavior comparison tables plus a breaking changes checklist for all endpoints
