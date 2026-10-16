# Handling missing fonts

Set `manageMissingFonts` in request `options` to control the behavior for missing fonts. Two values are accepted:

- `fail` makes the request/job fail.
- `useDefault` applies the system designated default font: `ArialMT`.

You can also set a global font in the `globalFont` field inside request `options`; that font serves as the default for the current request.

NOTE

For OAuth integrations, Adobe Fonts can also serve as a global font. When the global font is custom, upload it to a supported cloud storage type, then put both `href` and the `storage` type under request `options.fonts`.
