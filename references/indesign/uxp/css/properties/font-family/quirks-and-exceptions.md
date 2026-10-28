# Quirks and Exceptions

- Font-family names such as `monospace`, `serif` or `sans-serif` are not supported.
- When a requested font cannot be found, UXP checks fallback fonts until one is available. If that search fails, it uses the host application's system font.
- The default family is the host font. To preserve the default appearance, generally leave the font family unspecified.
- Font-family overrides are unavailable for text edit fields.
- Some Spectrum UXP components do not allow the font family to be overridden.
