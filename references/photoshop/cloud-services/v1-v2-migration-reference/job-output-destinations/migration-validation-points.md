# Migration validation points

For polling-code migration, adjust these references:

**Change field paths:**

- `data.created` → `data.createdTime`
- `data.modified` → `data.modifiedTime`
- `data.outputs` → `data.result.outputs`
- `data.outputs[0]._links.self.href` → `data.result.outputs[0].destination.url` (or appropriate field)

**Update status checking:**

- V1: Loop through `outputs[]` checking each `output.status`
- V2: Check single `status` field at root level

**Remove hypermedia logic:**

- V1: Navigate via `_links.self.href`
- V2: Access `result.outputs[]` directly

**Handle destination types:**

- Check `destination.url` for external/hosted
- Check `destination.content` for embedded
- Check `destination.creativeCloudPath` for CC
- Handle multiple outputs for scriptOutputPattern

**Error handling:**

- V1: Check `outputs[].status` for errors
- V2: Check `status === "failed"` and parse `errorDetails[]` array
