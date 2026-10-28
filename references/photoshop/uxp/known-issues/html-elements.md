# HTML Elements

- Each `<option>` tag needs a `value` attribute; otherwise reading the `select` element's `value` property returns `undefined`.
- `<select value="…"/>` does not mark that value as selected. Instead, reference the element and call `setAttribute("value", …)`, or put the `selected` attribute directly on the `option` tags.
- Without an explicit width on a `form`, block elements inside it might not span the full width. Workaround: set a width on every `form` element.
- `form` elements support only `method="dialog"`. They do not automatically submit data to a URL.
- Custom tab order cannot currently be specified.
- `rows` and `cols` cannot control a `<textarea>` size. Use CSS `height` and `width` styles instead.
- HTML5 input validation is not supported.
- Failed image loads do not display a replacement "broken icon" image.
- `defaultValue` is not accepted by input elements.
- `disabled` attributes are unavailable on `<option>` tags.
- `<label for="id"/>` is not supported. Put the control inside `<label>` instead.
- `<input type="file" />` has no support.
- `<input type="color" />` has no support.
- In UXP v3.1.0, unitless `width` and `height` attribute values are not supported. Use `px`, or set the values through CSS styles.
- In UXP v3.1.0 mode, `<label>` uses `inline-flex` layout semantics with `flex-wrap: wrap`. To keep these elements from wrapping, apply `flex-wrap: nowrap`. The default layout behavior is now _horizontal_ rather than _vertical_.
- `<progress>` is not theme aware.
- macOS does not allow password field values to be read. As a workaround, set `type` to `text` on `focus`, then return it to `password` on `blur`.
