# Quirks and Exceptions

- Font families such as `monospace`, `serif` or `sans-serif` are unsupported.
- When a requested font is unavailable, fallback fonts are checked until a match is available. If no fallback is found, UXP uses the host application's system font instead.
- By default, text uses the host's font family. To preserve the default look and feel, generally leave the font family unspecified.
- Text edit fields cannot override the font family.
- Some Spectrum UXP components cannot override the font family.
