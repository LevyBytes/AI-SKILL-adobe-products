# FontsObject.fontServerRevision

app.fonts.fontServerRevision

Note

This functionality was added in After Effects 24.2

### Description

Yields an unsigned number standing for the font environment's revision as it currently is.

That revision steps forward whenever something happens to the font environment that would alter the contents, properties, or ordering of the Font objects a call to FontsObject.allFonts returns.

Those events include: adding or removing fonts in the font environment, opening or closing a project that has substituted fonts, prompting the creation of a custom Variable font instance, and toggling the Character Panel dropdown "Show Font Names in English".

### Type

Floating-point value; read-only.

### Example

```javascript
var fsRev = app.fonts.fontServerRevision;
alert(fsRev);
```
