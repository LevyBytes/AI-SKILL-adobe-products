# FontsObject.allFonts

app.fonts.allFonts

### Description

Every font presently available on your system, given as a list.

These get bundled into what is called a family group, namely Arrays of Font object.

A group's Family Name is just the familyName off any of the Font objects within it.

There is no promise that a Family Name in one font group is unique against other font groups — the grouping rests on several factors, among them the returned values of FontObject.technology and FontObject.writingScripts.

On top of that, several fonts may quite legitimately carry the same PostScript name, though just one will own a given (PostScript name, Technology, Primary Writing Script) tuple. Where genuine duplicates exist, which one is returned and which is suppressed is undefined.

Both the family groups and the Font objects within each group follow the order set by the Character Panel dropdown "Show Font Names in English". When that is true, the familyName and styleName properties drive the sort; otherwise the nativeFamilyName and nativeStyleName properties do.

Any Font object whose isSubstitute returns true always lands at the end, each as its own family group.

### Type

Array of Arrays of Font objects; read-only.

### Example

The following picks out the first Font Family Array that is returned.

```javascript
// Getting the first available Font Family Group on the system
var firstFontGroup = app.fonts.allFonts[0];

// Getting the first Style for that Font Family
var firstFontFamilyName = firstFontGroup[0].familyName;
var firstFamilyStyle = firstFontGroup[0].styleName;

alert(firstFontFamilyName+" "+firstFamilyStyle);
```
