# Methods (part 5)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## CharacterRange object — Methods

### CharacterRange.pasteFrom()

CharacterRange.pasteFrom(characterRange)

Note

This functionality was added in After Effects 25.1

### Description

Using paste semantics, brings content over from the characterRange parameter into the callee CharacterRange object. Both can be one and the same instance, and their spans need not match.

A check confirms that both CharacterRange object instances are valid.

Under the hood the operation runs in these steps:

- Delete the text from the target instance.
- Paste the text from the source instance.

Because the call leaves the CharacterRange object's span untouched, a source CharacterRange object instance whose span is shorter than the target's can leave the target instance invalid.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| characterRange | CharacterRange object | Object whose text and styling will be pasted in place of the callee CharacterRange object. |

### Returns

None.

### CharacterRange.toString()

CharacterRange.toString()

### Description

Hands back a string holding the parameters that created the CharacterRange instance, for example "CharacterRange(0,-1)".

It is safe to call even on an instance where isRangeValid returns false.

### Parameters

None.

### Returns

String; read-only.

## ComposedLineRange object — Methods

### ComposedLineRange.characterRange()

ComposedLineRange.characterRange()

### Description

Hands back a CharacterRange object built from the characterStart and characterEnd values.

Should isRangeValid evaluate to false, calling this raises an exception.

Once you have the returned object, it stands on its own — later edits to the originating ComposedLineRange no longer affect it.

### Parameters

None.

### Returns

CharacterRange object;

### ComposedLineRange.toString()

ComposedLineRange.toString()

### Description

Produces a string showing the arguments that the ComposedLineRange instance was built with, e.g. "ComposedLineRange(0,-1)"

Even on an instance where isRangeValid is false, this call is safe to make.

### Parameters

None.

### Returns

String;

## Font object — Methods

### FontObject.hasGlyphsFor()

app.fonts.allFonts[0][0].hasGlyphsFor(charString)

Note

This functionality was added in After Effects 25.1

### Description

Since no font carries glyphs across every Unicode range, this method lets the caller ask a Font whether it covers one or more particular characters.

Comes back true when the font supplies a glyph for each character contained in the charString.

Ordering of the characters is irrelevant; and when the string passed in holds more than one character, this API gives no way to tell which character lacked glyph coverage.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| charString | String | Text that will be checked for support in the Font object. |

### Returns

Boolean.

### FontObject.hasSameDict()

app.fonts.fontsWithDefaultDesignAxes[0].hasSameDict(fontObject)

### Description

Comes back true when the Font object supplied as an argument draws on the same variable font dictionary as the Font object on which the call is made.

Tip

A true result is possible solely when the call targets a variable Font object and the supplied argument is likewise a Font object belonging to a variable font.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| fontObject | Font object | Object to check |

### Returns

Boolean.

### FontObject.postScriptNameForDesignVector()

app.fonts.fontsWithDefaultDesignAxes[0].postScriptNameForDesignVector([...vectorValues])

### Description

For the particular design vectors handed in as the argument, this gives back the variable font's postscript name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| vectorValues | Array of floating-point values | Values to check FontObject.designVector for the given variable font. |

### Returns

A String.

## Fonts object — Methods

### FontsObject.getCTScriptForString()

app.fonts.getCTScriptForString(charString, preferredCTScript)

Note

This functionality was added in After Effects 25.1

### Description

For the supplied characters, this gives back an array of generic objects, each reporting how many characters fall in the range and the CTScript enum tied to them. A complete list of CTScript enumerated values lives under FontObject.writingScripts.

When a character could belong to two or more CTScript values, the value handed in as the second argument, preferredCTScript, settles the tie.

```
var scriptsV = app.fonts.getCTScriptForString("ABヂ", CTScript.CT_ROMAN_SCRIPT);
var str = "[0] chars:" + scriptsV[0].chars +   // 2
            " ctScript:" + getEnumAsString(scriptsV[0].ctScript) +
            "\n[1] chars:" + scriptsV[1].chars + // 1
            " ctScript:" + getEnumAsString(scriptsV[1].ctScript);
alert(str);
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| charString | String | Characters to check. If empty, will return an empty array. |
| preferredCTScript | CTScript enum | CT Script to prefer |

### Returns

Array of generic objects;

- Key chars will be set to number of characters the in the range.
- Key ctScript will be set to the CTScript which applies to the characters in the range.

—

### FontsObject.getDefaultFontForCTScript()

app.fonts.getDefaultFontForCTScript(ctScript)

Note

This functionality was added in After Effects 25.1

### Description

This gives back the Font object instance that is mapped as the default font for a given CTScript.

After Effects leans on these mappings when text is typed or a font applied and the font turns out to lack a glyph for the character. It then tries to map that character onto a CTScript value and uses this default mapping to reach for a substitute font that might carry a glyph for it.

The same machinery also operates on text and fonts within Scripting, thereby revealing which fonts will serve which CTScript values.

Nothing guarantees that what comes back will cover all — or indeed any — of the Unicode characters mapped to the CTScript.

```
var font = app.fonts.getDefaultFontForCTScript(CTScript.CT_JAPANESE_SCRIPT);
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| ctScript | CTScript enum | Corresponding CTScript to get default font from. |

### Returns

Font object

### FontsObject.getFontByID()

app.fonts.getFontByID(fontID)

Note

This functionality was added in After Effects 24.2

### Description

For a font found earlier, this gives back its Font object instance keyed on that font's ID.

Where nothing matches, undefined comes back. That can happen with an ID that is not recognized, or if the original font has since been pulled from the font environment.

```
var font1 = app.fonts.allFonts[0][0];
var font2 = app.fonts.getFontByID(font1.fontID);
alert(font1.fontID == font2.fontID);
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| fontID | Integer | The ID of the font. |

### Returns

Font object, or undefined if no font by that ID.

### FontsObject.getFontsByFamilyNameAndStyleName()

app.fonts.getFontsByFamilyNameAndStyleName(familyName, styleName)

### Description

Keyed on a font's Family Name and Style Name, this gives back an array of Font object. When nothing suitable turns up, an empty Array comes back.

Tip

Owning several copies of one font can push the returned array's length past 1.

```
var fontList = app.fonts.getFontsByFamilyNameAndStyleName("Abolition", "Regular")
alert(fontList.length);
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| FamilyName | String | The Family Name of the font. |
| StyleName | String | The Style Name of the font. |

### Returns

Array of Font objects; read-only.

### FontsObject.getFontsByPostScriptName()

app.fonts.getFontsByPostScriptName(postscriptName)

### Description

Keyed on the PostScript name of Fonts found earlier, this gives back an array of Font objects.

Holding several Font objects under one shared PostScript name is perfectly valid; their ordering follows the sequence in which they were enumerated within the font environment. When the TextDocument.fontObject property is set, the entry at [0] is the one applied.

This API also carries a special behavior where Variable fonts are concerned. Should no Font object match the requested PostScript yet a variable font be found whose PostScript name prefix matches the request, that Variable font instance is asked to build a matching Font object. This stands as the sole route by which a returned instance did not already exist before the method was called.

When nothing matches, an empty Array comes back.

```
var fontList = app.fonts.getFontsByPostScriptName("Abolition")
alert(fontList.length);
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| postscriptName | String | The PostScript Name of the font. |

### Returns

Array of Font objects; read-only.

### FontsObject.pollForAndPushNonSystemFontFoldersChanges()

app.fonts.pollForAndPushNonSystemFontFoldersChanges()

Note

This functionality was added in After Effects 24.6

### Description

Adding or removing font files within the folders deemed system font folders is detected and dealt with on its own, no user action needed, to refresh the font environment. Non-system font folders get no such automatic handling, so adds and removes of font files there go unnoticed until After Effects is restarted.

This runs a check across the known non-system font folders, and should it spot a change, it schedules an asynchronous update of the font environment to take care of it.

These are the non-system font folders After Effects is aware of:

```
Windows: <systemDrive>:\Program Files\Common Files\Adobe\Fonts

Mac: /Library/Application Support/Adobe/Fonts
```

### Returns

Boolean; One of:

- false if no changes to the font environment are known.
- true if a change in the font environment has been detected and an asynchronous update scheduled to deal with it. This state will be cleared once the update has been processed, at which time FontsObject.fontServerRevision will return an incremented value.

—

### FontsObject.setDefaultFontForCTScript()

app.fonts.setDefaultFontForCTScript(ctScript, font)

Note

This functionality was added in After Effects 25.1

### Description

Keyed on the CTScript parameter, this assigns the mapped Font object instance.

After Effects leans on these mappings when text is typed or a font applied and the font turns out to lack a glyph for a given character. It then tries to map that character onto a CTScript value and uses this default mapping to reach for a substitute font that might carry a glyph for it.

Variable fonts cannot serve as defaults and passing one raises an exception.

There is no demand that the specified font hold glyphs for any or all of the characters mapped to the CTScript.

The same machinery also operates on text and fonts within Scripting, thereby revealing which fonts will serve which CTScript values (see FontsObject.getDefaultFontForCTScript()).

Whatever font is assigned to CTScript.`CT_ROMAN_SCRIPT` is the one used to re-initialize the Character Panel after the character style is reset.

Passing in null resets a particular CTScript's default back to whatever value it carried at App launch.

```
var font = app.fonts.getFontsByPostScriptName("MyriadPro-Regular")[0];
var ret = app.fonts.setDefaultFontForCTScript(CTScript.CT_ROMAN_SCRIPT, font);
alert("set:" + ret);
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| ctScript | CTScript enum | CTScript for font to be mapped |
| font | Font object | The font to be mapped. If null, then current mapping is reset. |

### Returns

Boolean; One of:

- false if the specfied mapping is the same the current one.
- true if the specified mapping is different from the current one.

## ParagraphRange object — Methods

### ParagraphRange.characterRange()

ParagraphRange.characterRange()

### Description

Hands back a CharacterRange object built from the characterStart and characterEnd values.

Should isRangeValid evaluate to false, calling this raises an exception.

Once you have the returned object, it stands on its own — later edits to the originating ParagraphRange no longer affect it.

### Parameters

None.

### Returns

CharacterRange object;

### ParagraphRange.toString()

ParagraphRange.toString()

### Description

Produces a string showing the arguments that the ParagraphRange instance was built with, e.g. "ParagraphRange(0,-1)"

Even on an instance where isRangeValid is false, this call is safe to make.

### Parameters

None.

### Returns

String;

## TextDocument object — Methods

### TextDocument.characterRange()

textDocument.characterRange(characterStart, [signedCharacterEnd])

Note

This functionality was added in After Effects 24.3

### Description

Hands back a CharacterRange range-accessor instance for the Text layer.

The constructor arguments are retained on the instance and never change; if the TextDocument length shifts, the instance may raise exceptions on access until that length returns to one where the range is valid once more.

Call toString() to see the parameters it was built with.

### Parameters

Parameter

Type

Description

characterStart

Unsigned integer

Starts at zero, must be the less than or equal to the (text) length of the TextDocument object.

signedCharacterEnd

Signed integer.

Optional. When omitted, it resolves to (characterStart + 1). A value of -1 makes the CharacterRange object resolve it on access to match the (text) length of the TextDocument object. signedCharacterEnd has to be at least characterStart and no greater than the (text) length of the TextDocument object.

| --- | --- | --- |

Throws an exception if the parameters would result in an invalid range.

There is no way to build a CharacterRange object that reaches across the closing carriage return of the TextDocument object.

### Returns

An instance of CharacterRange object

### TextDocument.composedLineCharacterIndexesAt()

textDocument.composedLineCharacterIndexesAt(characterIndex)

Note

This functionality was added in After Effects 24.3

### Description

Hands back the character-index bounds of a ComposedLineRange object within the Text layer.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| characterIndex | Unsigned integer | A text index in the Text layer, which will be mapped to the composed line it intersects. |

### Returns

Generic object; its start key is set to the text index where the composed line begins (at least zero). Its end key is set to the text index where the composed line ends (above start, or equal to start on the final composed line).

An exception is raised when the computed start and end fall beyond the current TextDocument object. Keep in mind that composed lines are static, so later edits to the TextDocument object instance that alter its length can leave the composed-line data stale.

### TextDocument.composedLineRange()

textDocument.composedLineRange(composedLineIndexStart, [signedComposedLineIndexEnd])

Note

This functionality was added in After Effects 24.3

### Description

Hands back a ComposedLineRange range-accessor instance for the Text layer.

The constructor arguments are retained on the instance and never change; if the TextDocument contents shift, the instance may raise exceptions on access until those contents return to a state where the range is valid once more.

Call ComposedLineRange.toString() to see the parameters it was built with.

### Parameters

Parameter

Type

Description

composedLineIndexStart

Unsigned integer

Starts at zero, must be the less than the number of composed lines in the TextDocument object.

signedComposedLineIndexEnd

Signed integer.

Optional. When omitted, it resolves to (composedLineIndexStart + 1). A value of -1 makes the ComposedLineRange object resolve it on access to the final composed line of the TextDocument object. signedComposedLineIndexEnd has to exceed composedLineIndexStart and be no greater than the number of composed lines in the TextDocument object.

| --- | --- | --- |

Throws an exception if the parameters would result in an invalid range.

Keep in mind that composed lines are static, so later edits to the TextDocument object instance that alter its length can leave the composed-line data stale.

### Returns

An instance of ComposedLineRange object

### TextDocument.paragraphCharacterIndexesAt()

textDocument.paragraphCharacterIndexesAt(characterIndex)

Note

This functionality was added in After Effects 24.3

### Description

Hands back the character-index bounds of a paragraph within the Text layer.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| characterIndex | Unsigned integer | A text index in the Text layer, which will be mapped to the paragraph it intersects. |

### Returns

Generic object; its start key is set to the text index where the paragraph begins (at least zero). Its end key is set to the text index where the paragraph ends (above start, or equal to start on the final paragraph).

### TextDocument.paragraphRange()

textDocument.paragraphRange(paragraphIndexStart, [signedParagraphIndexEnd])

Note

This functionality was added in After Effects 24.3

### Description

Hands back a ParagraphRange range-accessor instance for the Text layer.

The constructor arguments are retained on the instance and never change; if the TextDocument contents shift, the instance may raise exceptions on access until those contents return to a state where the range is valid once more.

Call ParagraphRange.toString() to see the parameters it was built with.

### Parameters

Parameter

Type

Description

paragraphIndexStart

Unsigned integer

Starts at zero, must be the less than the number of paragraphs in the TextDocument object.

signedParagraphIndexEnd

Signed integer

Optional. When omitted, it resolves to (paragraphIndexStart + 1). A value of -1 makes the ParagraphRange object resolve it on access to the final paragraph of the TextDocument object. signedParagraphIndexEnd has to exceed paragraphIndexStart and be no greater than the number of paragraphs in the TextDocument object.

| --- | --- | --- |

Throws an exception if the parameters would result in an invalid range.

### Returns

An instance of ParagraphRange object

### TextDocument.resetCharStyle()

textDocument.resetCharStyle()

### Description

Returns every character in the Text layer to the Character panel's default text-character settings.

### Parameters

None.

### Returns

Nothing.

### TextDocument.resetParagraphStyle()

textDocument.resetParagraphStyle()

### Description

Returns every paragraph in the Text layer to the Paragraph panel's default text-paragraph settings.

### Parameters

None.

### Returns

Nothing.

## Collection object — Methods

| Method | Return Type | Description |
| --- | --- | --- |
| [] | Object | Retrieves an object in the collection by its index number. The first object is at index 1. |

## ImportOptions object — Methods

### ImportOptions.canImportAs()

importOptions.canImportAs(type)

### Description

Tells you whether the file is eligible to be imported as the source of a given object type. A true result means you are clear to assign that type to the importAs attribute.

### Parameters

Parameter

Type

Description

type

ImportAsType enum.

The type of file that can be imported. One of: - ImportAsType.COMP - ImportAsType.FOOTAGE - ImportAsType.`COMP_CROPPED_LAYERS` - ImportAsType.PROJECT

| --- | --- | --- |

### Returns

Boolean.

### Example

```
var io = new ImportOptions(new File("c:\\myFile.psd"));
if (io.canImportAs(ImportAsType.COMP)) {
    io.importAs = ImportAsType.COMP;
}
```

### ImportOptions.isFileNameNumbered()

importOptions.isFileNameNumbered(file)

Warning

This method/property is officially undocumented and was found via research. The information here may be inaccurate, and this whole method/property may disappear or stop working some point. Please contribute if you have more information on it!

### Description

Tells you whether the file object carries a number, i.e. whether a digit appears in its file name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | Extendscript File object | The file to check |

### Returns

Object, containing 2 keys:

- isNumbered: Boolean; wether the file name contains any digit,
- num: Integer; a number found in file name. Returns 0 when isNumbered is false.

### Example

```
var importOptions = new ImportOptions();
importOptions.isFileNameNumbered('image.png');     // "isNumbered": false, "num": 0
importOptions.isFileNameNumbered('003image.png');  // "isNumbered": true, "num": 3
importOptions.isFileNameNumbered('ima0102ge.png'); // "isNumbered": true, "num": 102
importOptions.isFileNameNumbered('image0120.png'); // "isNumbered": true, "num": 120
```

## MarkerValue object — Methods

### MarkerValue.getParameters()

app.project.item(index).layer(index).property("Marker").keyValue(index).getParameters()

### Description

Hands back the key-value pairs of the Flash Video cue-point parameters belonging to the cue point tied to this marker value.

### Parameters

None.

### Returns

An object whose attributes mirror the parameter names, each attribute holding the value of its parameter.

### MarkerValue.setParameters()

app.project.item(index).layer(index).property("Marker").keyValue(index).setParameters(keyValuePairs)

### Description

Attaches a group of key-value pairs as Flash Video cue-point parameters to the cue point tied to this marker value. While the interface caps you at three parameters per cue point, a cue point itself has no such limit — reach for this method whenever you need more than three.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyValuePairs | Key-value pair object | Object containing the key-value pairs as attributes and values. The object's toString() method is called to assign the string value of each attribute to the named key. |

### Returns

Nothing.

### Example

```
var mv = new MarkerValue("MyMarker");
var parms = {};
parms.timeToBlink = 1;
parms.assignMe = "A string"
mv.setParameters(parms);
myLayer.property("Marker").setValueAtTime(2, mv);
```
