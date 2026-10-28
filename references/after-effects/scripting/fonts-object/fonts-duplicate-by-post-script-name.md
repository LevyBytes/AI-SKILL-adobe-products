# FontsObject.fontsDuplicateByPostScriptName

app.fonts.fontsDuplicateByPostScriptName

Note

This functionality was added in After Effects 24.6

### Description

More than one Font object returning the same postScriptName value is both legal and frequent, but since that can muddy which Font object actually gets used with TextDocument.font or with a CharacterRange object's .font attribute, this property is here to expose both the duplicates that exist and the order they fall in.

What comes back is an Array whose every element is itself an Array of Font objects, the 0th Font object being treated as the primary one for that PostScript name.

### Type

Array of Arrays of Font Objects; read-only.
