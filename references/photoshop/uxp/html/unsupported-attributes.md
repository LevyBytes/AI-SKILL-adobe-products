# Unsupported Attributes

Unsupported global attributes:

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
- `tabindex` (supported, although behavior differs from the specification. Negative values do not receive focus; positive values can receive focus, but they cannot define tab order.)
- `translate`

For these and most other event handlers, attach callbacks with `addEventListener` rather than the matching `on*` handler properties.
