# Attributes (part 8)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Font object — Attributes

### FontObject.designAxesData

app.fonts.allFonts[0][0].designAxesData

### Description

Hands back an Array of Objects holding the font's design-axis data. Within each object you get the axis name, its tag, the minimum and maximum values, plus the default value.

Tip

Will return undefined for non-variable fonts.

### Example

The snippet below shows how to inspect the axes of a variable font applied to a selected Text layer:

```
// Prerequisite: Create and select a Text layer that uses a variable font
var textLayer = app.project.activeItem.selectedLayers[0];

// Get the font object
var textDocument = textLayer.property("Source Text").value;
var fontObject = textDocument.fontObject;

// Check for axes and display any that are found
if (fontObject && fontObject.designAxesData) {
    var axes = fontObject.designAxesData;
    var message = "Variable Font Axes (" + axes.length + " total):\n\n";

    for (var i = 0; i < axes.length; i++) {
        var axis = axes[i];
        message += "Axis " + (i + 1) + ":\n";
        message += "  Tag: " + axis.tag + "\n";
        message += "  Name: " + axis.name + "\n";
        message += "  Min: " + axis.min + "\n";
        message += "  Max: " + axis.max + "\n";
        message += "  Default: " + axis.default + "\n";

        if (i < axes.length - 1) {
            message += "\n";
        }
    }

    alert(message);
} else {
    alert("No variable font axes found");
}
```

### Type

Array of Objects; read-only.

### FontObject.designVector

app.fonts.fontsWithDefaultDesignAxes[0].designVector

### Description

When the font is a Variable font, this gives back an ordered array whose length equals the count of design axes the font declares.

Tip

Will return undefined for non-variable fonts.

### Type

Array of floating-point values; read-only.

### FontObject.familyName

app.fonts.allFonts[0][0].familyName

### Description

This font's family name, expressed in the ASCII character set.

### Type

String; read-only.

### FontObject.familyPrefix

app.fonts.fontsWithDefaultDesignAxes[0].familyPrefix

### Description

The prefix on the variable font's family. To illustrate, the PostScript name "SFPro-Bold" has the family "SFPro".

Tip

Will return undefined for non-variable fonts.

### Type

String; read-only.

### FontObject.fontID

app.fonts.allFonts[0][0].fontID

Note

This functionality was added in After Effects 24.2

### Description

At creation each FontObject instance receives a one-of-a-kind number, never below 1. That value holds steady throughout an application session, though a later launch of the application may assign a different one.

It serves to test whether two FontObject instances point at the same underlying native font instance.

Use getFontByID to retrieve FontObjects by their fontID.

### Type

Integer; read-only.

### FontObject.fullName

app.fonts.allFonts[0][0].fullName

### Description

The font's full name in the ASCII character set, normally a combination of the family name and the style name.

### Type

String; read-only.

### FontObject.hasDesignAxes

app.fonts.allFonts[0][0].hasDesignAxes

### Description

Gives back true whenever the font is a variable font.

### Type

Boolean; read-only.

### FontObject.isFromAdobeFonts

app.fonts.allFonts[0][0].isFromAdobeFonts

### Description

Gives back true whenever the font originates from Adobe Fonts.

### Type

Boolean; read-only.

### FontObject.isSubstitute

app.fonts.allFonts[0][0].isSubstitute

### Description

Yields true when the font instance stands in for a font reference that was absent at the time the project opened.

### Type

Boolean; read-only.

### FontObject.location

app.fonts.allFonts[0][0].location

### Description

Where the font file sits on your system.

Warning

This is not promised for every font type; with certain kinds of fonts the return value can come back as an empty string.

### Type

String; read-only.

### FontObject.nativeFamilyName

app.fonts.allFonts[0][0].nativeFamilyName

### Description

The font's native family name carried in full 16-bit Unicode. For non-Latin fonts this frequently diverges from what FontObject.familyName hands back.

### Type

String; read-only.

### FontObject.nativeFullName

app.fonts.allFonts[0][0].nativeFullName

### Description

The font's native full name carried in full 16-bit Unicode. For non-Latin fonts this frequently diverges from what FontObject.fullName hands back.

### Type

String; read-only.

### FontObject.nativeStyleName

app.fonts.allFonts[0][0].nativeStyleName

### Description

The font's native style name carried in full 16-bit Unicode. For non-Latin fonts this frequently diverges from what FontObject.styleName hands back.

### Type

String; read-only.

### FontObject.otherFontsWithSameDict

app.fonts.fontsWithDefaultDesignAxes[0].otherFontsWithSameDict

Note

This functionality was added in After Effects 25.1

### Description

Hands back an Array of Font object instances that draw on the same font dictionary as this Font object.

Should this Font object not be a Variable font, or should the Variable font carry only a single instance, an empty Array comes back.

### Type

Array of Font objects; read-only.

### FontObject.postScriptName

app.fonts.allFonts[0][0].postScriptName

### Description

This font's postscript name.

### Type

String; read-only.

### FontObject.styleName

app.fonts.allFonts[0][0].styleName

### Description

This font's style name, expressed in the ASCII character set.

### Type

String; read-only.

### FontObject.technology

app.fonts.allFonts[0][0].technology

### Description

Which technology the font is built on.

### Type

An CTFontTechnology enumerated value; read-only. One of:

- CTFontTechnology.`CT_TYPE1_FONT`
- CTFontTechnology.`CT_TRUETYPE_FONT`
- CTFontTechnology.`CT_CID_FONT`
- CTFontTechnology.`CT_BITMAP_FONT`
- CTFontTechnology.`CT_ATC_FONT`
- CTFontTechnology.`CT_TYPE3_FONT`
- CTFontTechnology.`CT_SVG_FONT`
- CTFontTechnology.`CT_ANYTECHNOLOGY`

### FontObject.type

app.fonts.allFonts[0][0].type

### Description

The font's internal type.

### Type

An CTFontType enumerated value; read-only. One of:

- CTFontType.`CT_TYPE1_FONTTYPE`
- CTFontType.`CT_TRUETYPE_FONTTYPE`
- CTFontType.`CT_CID_FONTTYPE`
- CTFontType.`CT_ATC_FONTTYPE`
- CTFontType.`CT_BITMAP_FONTTYPE`
- CTFontType.`CT_OPENTYPE_CFF_FONTTYPE`
- CTFontType.`CT_OPENTYPE_CID_FONTTYPE`
- CTFontType.`CT_OPENTYPE_TT_FONTTYPE`
- CTFontType.`CT_TYPE3_FONTTYPE`
- CTFontType.`CT_SVG_FONTTYPE`

### FontObject.version

app.fonts.allFonts[0][0].version

### Description

The font's version number.

### Type

String; read-only.

### FontObject.writingScripts

app.fonts.allFonts[0][0].writingScripts

### Description

Which character sets the font supports.

### Type

An array of CTScript enumerated values; read-only. One or more of:

- CTScript.`CT_ROMAN_SCRIPT`
- CTScript.`CT_JAPANESE_SCRIPT`
- CTScript.`CT_TRADITIONALCHINESE_SCRIPT`
- CTScript.`CT_KOREAN_SCRIPT`
- CTScript.`CT_ARABIC_SCRIPT`
- CTScript.`CT_HEBREW_SCRIPT`
- CTScript.`CT_GREEK_SCRIPT`
- CTScript.`CT_CYRILLIC_SCRIPT`
- CTScript.`CT_RIGHTLEFT_SCRIPT`
- CTScript.`CT_DEVANAGARI_SCRIPT`
- CTScript.`CT_GURMUKHI_SCRIPT`
- CTScript.`CT_GUJARATI_SCRIPT`
- CTScript.`CT_ORIYA_SCRIPT`
- CTScript.`CT_BENGALI_SCRIPT`
- CTScript.`CT_TAMIL_SCRIPT`
- CTScript.`CT_TELUGU_SCRIPT`
- CTScript.`CT_KANNADA_SCRIPT`
- CTScript.`CT_MALAYALAM_SCRIPT`
- CTScript.`CT_SINHALESE_SCRIPT`
- CTScript.`CT_BURMESE_SCRIPT`
- CTScript.`CT_KHMER_SCRIPT`
- CTScript.`CT_THAI_SCRIPT`
- CTScript.`CT_LAOTIAN_SCRIPT`
- CTScript.`CT_GEORGIAN_SCRIPT`
- CTScript.`CT_ARMENIAN_SCRIPT`
- CTScript.`CT_SIMPLIFIEDCHINESE_SCRIPT`
- CTScript.`CT_TIBETAN_SCRIPT`
- CTScript.`CT_MONGOLIAN_SCRIPT`
- CTScript.`CT_GEEZ_SCRIPT`
- CTScript.`CT_EASTEUROPEANROMAN_SCRIPT`
- CTScript.`CT_VIETNAMESE_SCRIPT`
- CTScript.`CT_EXTENDEDARABIC_SCRIPT`
- CTScript.`CT_KLINGON_SCRIPT`
- CTScript.`CT_EMOJI_SCRIPT`
- CTScript.`CT_ROHINGYA_SCRIPT`
- CTScript.`CT_JAVANESE_SCRIPT`
- CTScript.`CT_SUNDANESE_SCRIPT`
- CTScript.`CT_LONTARA_SCRIPT`
- CTScript.`CT_SYRIAC_SCRIPT`
- CTScript.`CT_TAITHAM_SCRIPT`
- CTScript.`CT_BUGINESE_SCRIPT`
- CTScript.`CT_BALINESE_SCRIPT`
- CTScript.`CT_CHEROKEE_SCRIPT`
- CTScript.`CT_MANDAIC_SCRIPT`
- CTScript.`CT_VAI_SCRIPT`
- CTScript.`CT_THAANA_SCRIPT`
- CTScript.`CT_BRAVANESE_SCRIPT`
- CTScript.`CT_BRAHMI_SCRIPT`
- CTScript.`CT_CARIAN_SCRIPT`
- CTScript.`CT_CYPRIOT_SCRIPT`
- CTScript.`CT_EGYPTIAN_SCRIPT`
- CTScript.`CT_IMPERIALARAMAIC_SCRIPT`
- CTScript.`CT_PAHLAVI_SCRIPT`
- CTScript.`CT_PARTHIAN_SCRIPT`
- CTScript.`CT_KHAROSHTHI_SCRIPT`
- CTScript.`CT_LYCIAN_SCRIPT`
- CTScript.`CT_LYDIAN_SCRIPT`
- CTScript.`CT_PHOENICIAN_SCRIPT`
- CTScript.`CT_PERSIAN_SCRIPT`
- CTScript.`CT_SHAVIAN_SCRIPT`
- CTScript.`CT_SUMAKKCUNEIFORM_SCRIPT`
- CTScript.`CT_UGARITIC_SCRIPT`
- CTScript.`CT_GLAGOLITIC_SCRIPT`
- CTScript.`CT_GOTHIC_SCRIPT`
- CTScript.`CT_OGHAM_SCRIPT`
- CTScript.`CT_OLDITALIC_SCRIPT`
- CTScript.`CT_ORKHON_SCRIPT`
- CTScript.`CT_RUNIC_SCRIPT`
- CTScript.`CT_MEROITICCURSIVE_SCRIPT`
- CTScript.`CT_COPTIC_SCRIPT`
- CTScript.`CT_OLCHIKI_SCRIPT`
- CTScript.`CT_SORASOMPENG_SCRIPT`
- CTScript.`CT_OLDHANGUL_SCRIPT`
- CTScript.`CT_LISU_SCRIPT`
- CTScript.`CT_NKO_SCRIPT`
- CTScript.`CT_ADLAM_SCRIPT`
- CTScript.`CT_BAMUM_SCRIPT`
- CTScript.`CT_BASSAVAH_SCRIPT`
- CTScript.`CT_NEWA_SCRIPT`
- CTScript.`CT_NEWTAILU_SCRIPT`
- CTScript.`CT_SCRIPT`
- CTScript.`CT_OSAGE_SCRIPT`
- CTScript.`CT_UCAS_SCRIPT`
- CTScript.`CT_TIFINAGH_SCRIPT`
- CTScript.`CT_KAYAHLI_SCRIPT`
- CTScript.`CT_LAO_SCRIPT`
- CTScript.`CT_TAILE_SCRIPT`
- CTScript.`CT_TAIVIET_SCRIPT`
- CTScript.`CT_DONTKNOW_SCRIPT`

## Fonts object — Attributes

### FontsObject.allFonts

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

```
// Getting the first available Font Family Group on the system
var firstFontGroup = app.fonts.allFonts[0];

// Getting the first Style for that Font Family
var firstFontFamilyName = firstFontGroup[0].familyName;
var firstFamilyStyle = firstFontGroup[0].styleName;

alert(firstFontFamilyName+" "+firstFamilyStyle);
```

### FontsObject.favoriteFontFamilyList

app.fonts.favoriteFontFamilyList

Note

This functionality was added in After Effects 24.6

### Description

Opens up the Favorites list shown in the Character panel and Properties panel. Setting the Favorites is a matter of supplying an (unsorted) array of strings keyed on the familyName. Emptying the list is done by assigning an empty Array.

### Type

Array of Strings; read/write.

### FontsObject.fontsDuplicateByPostScriptName

app.fonts.fontsDuplicateByPostScriptName

Note

This functionality was added in After Effects 24.6

### Description

More than one Font object returning the same postScriptName value is both legal and frequent, but since that can muddy which Font object actually gets used with TextDocument.font or with a CharacterRange object's .font attribute, this property is here to expose both the duplicates that exist and the order they fall in.

What comes back is an Array whose every element is itself an Array of Font objects, the 0th Font object being treated as the primary one for that PostScript name.

### Type

Array of Arrays of Font Objects; read-only.

### FontsObject.fontServerRevision

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

```
var fsRev = app.fonts.fontServerRevision;
alert(fsRev);
```

### FontsObject.fontsWithDefaultDesignAxes

app.fonts.fontsWithDefaultDesignAxes

### Description

Gives back an array of variable Font objects, every one keyed to a distinct font dictionary and carrying default values across its design axes. The API offers a handy shortcut for narrowing down to one unique instance per installed variable font.

### Type

Array of Font objects; read-only.

### Example

```
var variableFontList = app.fonts.fontsWithDefaultDesignAxes;
alert(variableFontList.length);
```

### FontsObject.freezeSyncSubstitutedFonts

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

### FontsObject.missingOrSubstitutedFonts

app.fonts.missingOrSubstitutedFonts

### Description

Every missing or substituted font in the current Project, listed out.

Tip

Where a font was already absent at the moment the project opened, it counts as a substituted font; where a font dropped out (through being uninstalled, say) during an open project, it counts as a missing font.

### Type

Array of Font objects; read-only.

### FontsObject.mruFontFamilyList

app.fonts.mruFontFamilyList

Note

This functionality was added in After Effects 24.6

### Description

Opens up the Most Recently Used (MRU) list shown in the Character panel and Properties panel. Setting the MRU is a matter of supplying an (unsorted) array of strings keyed on the familyName. Emptying the list is done by assigning an empty Array.

### Type

Array of Strings; read/write.

### FontsObject.substitutedFontReplacementMatchPolicy

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

## ParagraphRange object — Attributes

### ParagraphRange.characterEnd

ParagraphRange.characterEnd

### Description

The character-end value the Text layer range works out.

On access, raises an exception should the effective value run past the bounds of the related TextDocument object.

### Type

Unsigned integer; read-only.

### ParagraphRange.characterStart

ParagraphRange.characterStart

### Description

The character-start value the Text layer range works out.

On access, raises an exception should the effective value run past the bounds of the related TextDocument object.

### Type

Unsigned integer; read-only.

### ParagraphRange.isRangeValid

ParagraphRange.isRangeValid

### Description

Comes back true while the current range stays within the bounds of the related TextDocument object, and false otherwise.

### Type

Boolean; read-only.

## TextDocument object — Attributes

### TextDocument.allCaps

textDocument.allCaps

Note

This functionality was added in After Effects 13.2 (CC 2014.2)

### Description

Reads true when a Text layer has All Caps switched on, otherwise false. Setting it is done through fontCapsOption, added in After Effects 24.0.

Warning

This value only reflects the first character in the Text layer.

### Type

Boolean; read-only.

### TextDocument.applyFill

textDocument.applyFill

### Description

While true, the Text layer displays a fill; reach for the fillColor attribute to get the actual color. While false, only a stroke appears.

### Type

Boolean; read/write.

### TextDocument.applyStroke

textDocument.applyStroke

### Description

While true, the Text layer displays a stroke; reach for the strokeColor attribute to get the actual color and strokeWidth for its thickness. While false, only a fill appears.

### Type

Boolean; read/write.

### TextDocument.autoHyphenate

textDocument.autoHyphenate

Note

This functionality was added in After Effects 24.0

### Description

The auto-hyphenate paragraph option for the Text layer.

Where this attribute carries a mixed value, undefined is what reads back.

Warning

Across the Text layer, this value stands for every paragraph.

Writing to it pushes the given setting onto all paragraphs throughout the Text layer.

### Type

Boolean; read/write.

### TextDocument.autoLeading

textDocument.autoLeading

### Description

The auto-leading character option for the Text layer.

Where this attribute carries a mixed value, undefined is what reads back.

Warning

Across the Text layer, this value stands for every paragraph.

Writing to it pushes the given setting onto all paragraphs throughout the Text layer.

### Type

Boolean; read/write.

### TextDocument.autoKernType

textDocument.autoKernType

Note

This functionality was added in After Effects 24.0

### Description

The auto-kern-type option for the Text layer.

Warning

Only the Text layer's opening character is mirrored in this value.

Writing to it pushes the given setting onto every character throughout the Text layer.

### Type

An AutoKernType enumerated value; read/write. One of:

- AutoKernType.`NO_AUTO_KERN`
- AutoKernType.`METRIC_KERN`
- AutoKernType.`OPTICAL_KERN`

### TextDocument.baselineDirection

textDocument.baselineDirection

Note

This functionality was added in After Effects 24.0

### Description

The baseline-direction option for the Text layer. It matters for the Japanese language in vertical texts. "`BASELINE_VERTICAL_CROSS_STREAM`" also goes by the name Tate-Chu-Yoko.

Warning

Only the Text layer's opening character is mirrored in this value.

Writing to it pushes the given setting onto every character throughout the Text layer.

### Type

A BaselineDirection enumerated value; read/write. One of:

- BaselineDirection.`BASELINE_WITH_STREAM`
- BaselineDirection.`BASELINE_VERTICAL_ROTATED`
- BaselineDirection.`BASELINE_VERTICAL_CROSS_STREAM`

### TextDocument.baselineLocs

textDocument.baselineLocs

Note

This functionality was added in After Effects 13.6 (CC 2015)

### Description

A Text layer's baseline (x,y) locations. Within a paragraph text box, line wraps count as separate lines.

Tip

On a line holding no characters, both the start and end x and y values come back as the largest float value (3.402823466e+38F).

### Type

Array of floating-point values in the form of

```
[
    line0.start_x,
    line0.start_y,
    line0.end_x,
    line0.end_y,
    line1.start_x,
    line1.start_y,
    line1.end_x,
    line1.end_y,
    ...
    lineN-1.start_x,
    lineN-1.start_y,
    lineN-1.end_x,
    lineN-1.end_y
]
```

### TextDocument.baselineShift

textDocument.baselineShift

Note

This functionality was added in After Effects 13.2 (CC 2014.2)

### Description

This Text layer's baseline shift, given in pixels.

Warning

Only the Text layer's opening character is mirrored in this value.

Writing to it pushes the given setting onto every character throughout the Text layer.

### Type

Floating-point value; read-write.

### TextDocument.boxAutoFitPolicy

textDocument.boxAutoFitPolicy

Note

This functionality was added in After Effects 24.6

### Description

Switches on the automatic resizing of the box height so it accommodates the text inside. Growth happens downward only.

Defaults to BoxAutoFitPolicy.NONE.

Will be disabled if TextDocument.boxVerticalAlignment is anything other than BoxVerticalAlignment.TOP.

### Type

A BoxAutoFitPolicy enumerated value; read-write. One of:

- BoxAutoFitPolicy.NONE
- BoxAutoFitPolicy.`HEIGHT_CURSOR`
- BoxAutoFitPolicy.`HEIGHT_PRECISE_BOUNDS`
- BoxAutoFitPolicy.`HEIGHT_BASELINE`

### TextDocument.boxFirstBaselineAlignment

textDocument.boxFirstBaselineAlignment

Note

This functionality was added in After Effects 24.6

### Description

Governs where the first line of composed text sits relative to the box's top edge.

Disabled if TextDocument.boxFirstBaselineAlignmentMinimum is anything other than zero.

Defaults to BoxFirstBaselineAlignment.ASCENT.

### Type

A BoxFirstBaselineAlignment enumerated value; read-write. One of:

- BoxFirstBaselineAlignment.ASCENT
- BoxFirstBaselineAlignment.`CAP_HEIGHT`
- BoxFirstBaselineAlignment.`EM_BOX`
- BoxFirstBaselineAlignment.LEADING
- BoxFirstBaselineAlignment.`LEGACY_METRIC`
- BoxFirstBaselineAlignment.`MINIMUM_VALUE_ASIAN`
- BoxFirstBaselineAlignment.`MINIMUM_VALUE_ROMAN`
- BoxFirstBaselineAlignment.`TYPO_ASCENT`
- BoxFirstBaselineAlignment.`X_HEIGHT`

### TextDocument.boxFirstBaselineAlignmentMinimum

textDocument.boxFirstBaselineAlignmentMinimum

Note

This functionality was added in After Effects 24.6

### Description
