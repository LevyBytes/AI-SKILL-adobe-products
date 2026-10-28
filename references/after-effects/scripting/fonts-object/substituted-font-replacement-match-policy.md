# FontsObject.substitutedFontReplacementMatchPolicy

app.fonts.substitutedFontReplacementMatchPolicy

Note

This functionality was added in After Effects 24.6

### Description

Sets the rules applied when deciding which fonts qualify as a match for automatically replacing a substituted Font object.

### Type

A SubstitutedFontReplacementMatchPolicy enumerated value; read/write. One of:

- SubstitutedFontReplacementMatchPolicy.`POSTSCRIPT_NAME` is the default; any Font object which has the same PostScript name is a valid candidate for replacement of a substituted Font object.

  - postScriptName
  - technology
  - writingScripts (primary)
  - designVector

- SubstitutedFontReplacementMatchPolicy.DISABLED means that no Font object is an acceptable replacement for a the substituted Font object.
