# Unsupported Attributes

These global attributes are not supported.

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
- `tabindex` (supported, but differs from the specification. Negative values do not receive focus; positive values can receive focus, but they cannot define tab order.)
- `translate`

For event handling, attach most listeners with `addEventListener` rather than using matching `on*` handler attributes.
