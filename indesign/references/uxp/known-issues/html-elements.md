# HTML Elements

- Every `<option>` tag needs a `value` attribute; otherwise, reading the `select` element's `value` property returns `undefined`.
- `<select value="…"/>` does not mark that value as selected. Instead, reference the element and call `setAttribute("value", …)`, or put the `selected` attribute on the relevant `option` tags.
- Without an explicit width on a `form`, block elements inside it may not stretch across the full width. Workaround: set a width on all `form` elements.
- `form` elements accept only `method="dialog"`. They do not automatically submit to a URL.
- Tab order cannot currently be specified.
- `rows` and `cols` do not control the size of a `<textarea>`. Set CSS `height` and `width` styles instead.
- HTML5 input validation is unavailable.
- Failed image loads do not show a replacement "broken icon" image.
- Input elements ignore `defaultValue`.
- `<option>` tags do not accept `disabled` attributes.
- `<label for="id"/>` is unavailable. Put the control inside `<label>` instead.
- `<input type="file" />` is unavailable.
- `<input type="color" />` is unavailable.
- UXP v3.1.0 does not support unitless `width` and `height` attributes. Use `px` or CSS styles.
- In UXP v3.1.0 mode, `<label>` follows `inline-flex` layout semantics with `flex-wrap: wrap` enabled. To stop wrapping, apply `flex-wrap: nowrap` to those elements. The default layout behavior is now _horizontal_, not _vertical_.
- `<progress>` does not adapt to the active theme.
- macOS does not allow reading password field values. As a workaround, change `type` to `text` on `focus`, then restore `password` on `blur`.
