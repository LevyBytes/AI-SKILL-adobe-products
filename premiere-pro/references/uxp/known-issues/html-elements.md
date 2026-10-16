# HTML Elements

- `<option>` tags _must_ include a `value` attribute; otherwise reading the `select` element's `value` property returns `undefined`.
- `<select value="…"/>` does not mark that value as selected. Instead, reference the element and call `setAttribute("value", …)`, or set the `selected` attribute on the `option` tags.
- Without a specified width on a `form`, block elements inside it may not fill the full width. Workaround: always define a width for `form` elements.
- `form`s support only `method="dialog"` and do not automatically submit to a URL.
- Tab order cannot currently be specified.
- A `<textarea>` cannot be sized with `rows` or `cols`; use CSS `height` and `width`, respectively.
- HTML5 input validation is not supported.
- Failed image loads do not display a replacement "broken icon" image.
- Input elements ignore `defaultValue`.
- `disabled` attributes are unavailable on `<option>` tags.
- `<label for="id"/>` is not supported. Put the control inside `<label>` instead.
- UXP does not support `<input type="file" />`.
- UXP does not support `<input type="color" />`.
- In UXP v3.1.0, unitless `width` and `height` attribute values are unsupported. Use `px` or CSS styles.
- In UXP v3.1.0 mode, `<label>` uses `inline-flex` layout semantics with `flex-wrap: wrap` enabled. To block wrapping, apply `flex-wrap: nowrap` to these elements. By default, layout now runs _horizontal_ rather than _vertical_.
- `<progress>` does not respond to theme.
- macOS does not allow password field values to be read. As a workaround, set `type` to `text` on `focus`, then change it back to `password` on `blur`.
