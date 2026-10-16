# Use Case: Adjusting Plugin Size

For modal and modeless CEP extensions, `window.__adobe_cep__.resizeContent()` accepts two parameters, width and height, and changes the extension content size to those dimensions. Both width and height should be unsigned integers. Min/max size limits from the manifest file still apply and take priority. When the requested size falls outside the allowed range, the corresponding min or max bound is used.

UXP plugins must stay within the sizes declared in the manifest. A plugin also cannot resize its panel through programmatic control. Plugin authors are expected to build responsive UI so users can adjust the panel as they prefer. When a plugin UI contains multiple accordions, consider shipping multiple panels instead. Users can then group, resize, reorder, collapse, and otherwise arrange those panels according to the manifest.
