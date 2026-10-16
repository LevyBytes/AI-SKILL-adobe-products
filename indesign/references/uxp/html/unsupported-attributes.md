# Unsupported Attributes

These global attributes are not supported:

- `accesskey`
- `aria*`
- `autocapitalize`
- `contenteditable`
- `contextmenu`
- `dir`
- `dropzone`
- `hidden`
- `inputmode`
- `is`
- `item*`
- `part`
- `spellcheck`
- `tabindex` (supported, but its behavior differs from the specification. Negative values are skipped during focus, and positive values permit focus without letting authors set the tab sequence.)
- `translate`

For most events, attach handlers with `addEventListener` rather than using the matching `on*` handler properties.
