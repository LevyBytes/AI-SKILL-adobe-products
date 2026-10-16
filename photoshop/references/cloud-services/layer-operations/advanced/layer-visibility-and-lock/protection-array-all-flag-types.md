# Protection array (all flag types)

V2 replaces the Boolean `locked` value with the `protection` array. Valid values:

- `none` - No protection; the layer stays fully editable
- `all` - Full protection; every aspect is locked
- `transparency` - Prevents edits to layer transparency
- `composite` - Prevents layer compositing/painting changes
- `position` - Prevents movement of the layer position
- `artboard_autonest` - Artboard-specific autonest protection

If `all` or `none` is used, it must be the only item in the array. `["all","transparency"]` and `["none","position"]` are invalid; use `["all"]`, `["none"]`, or combine only the four individual flags.

**Examples:** `["all"]`, `["none"]`, `["transparency","position"]`

**Add operations:** For a newly added layer, omitted `protection`, `null`, or an empty array defaults to `["none"]`. That matches V1, where leaving out `locked` meant the layer was unlocked.

**Edit operations:** In an edit, omitted, `null`, and `[]` all leave the existing protection unchanged. Send `protection` only when intentionally setting it.

**Group layers:** During a group-layer edit, setting `protection` also applies it to every descendant, including child layers and nested groups.
