# FontsObject.freezeSyncSubstitutedFonts

app.fonts.freezeSyncSubstitutedFonts

Note

This functionality was added in After Effects 24.6

### Description

Whenever a Project opens and one or more of its fonts are missing from the local font environment, a sync with Adobe Fonts kicks off to check whether any of those Fonts can be activated and installed.

That runs by default on its own — switching this property on disables it.

Warning

The decision about whether Adobe Fonts holds a matching font rests entirely on the PostScript name. With certain Variable Fonts, ambiguity over which font owns which named instance means more than one face (Regular/Italic) can end up installed during an activation. Whether what gets installed counts as a valid replacement is governed by FontsObject.substitutedFontReplacementMatchPolicy.

### Type

Boolean; read/write. One of:

- false is the default—sync from Adobe Fonts may be attempted.
- true means that no sync or install will be attempted.
