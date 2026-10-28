# Quirks and Exceptions

- Font families such as `monospace`, `serif` or `sans-serif` are not supported.
- When one font is unavailable, fallback fonts are checked until a usable one is found. If no fallback works, the host application's system font is used instead.
- The host's font is the default font family. To preserve the default look and feel, you should generally avoid setting a font family.
- Text edit fields cannot override the font family.
- Some Spectrum UXP components do not allow the font family to be overridden.
