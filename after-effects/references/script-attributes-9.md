# Attributes (part 9)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## TextDocument object — Attributes

Sets, by hand, where the first composed line sits measured down from the box's top edge.

Whenever this is given any nonzero value, it takes precedence over whatever TextDocument.boxFirstBaselineAlignment would otherwise do.

Zero is the default.

### Type

Floating-point value; read/write.

### TextDocument.boxInsetSpacing

textDocument.boxInsetSpacing

Note

This functionality was added in After Effects 24.6

### Description

Governs the padding that separates the box edges from where the composable text box actually starts. All four sides receive the identical value.

Zero is the default.

### Type

Floating-point value; read/write.

### TextDocument.boxOverflow

textDocument.boxOverflow

Note

This functionality was added in After Effects 24.6

### Description

Yields true whenever any portion of the text failed to compose within the box.

### Type

Boolean; read-only.

### TextDocument.boxText

textDocument.boxText

### Description

true if a Text layer is a layer of paragraph (bounded) text; otherwise false.

### Type

Boolean; read-only.

### TextDocument.boxTextPos

textDocument.boxTextPos

Note

This functionality was added in After Effects 13.2 (CC 2014.2)

As of After Effects 14 (CC2017), it seems this is also writeable.

### Description

Gives, as a [width, height] array measured in pixels, the layer coordinates taken from the anchor point of a paragraph (box) Text layer.

Warning

Unless boxText reads true for the Text layer, accessing this raises an exception.

### Type

Array of ([X,Y]) position coordinates; read/write.

### Example

```
// For a paragraph Text layer returns [x, y] position from layer anchor point in layer coordinates.
// e.g. approximately [0, -25] with default character panel settings.
var boxTextLayerPos = myTextLayer.sourceText.value.boxTextPos;
```

### TextDocument.boxTextSize

textDocument.boxTextSize

### Description

Gives, as a [width, height] array measured in pixels, the dimensions of a paragraph (box) Text layer.

Warning

Unless boxText reads true for the Text layer, accessing this raises an exception.

### Type

Array of two integers (minimum value of 1); read/write.

### TextDocument.boxVerticalAlignment

textDocument.boxVerticalAlignment

Note

This functionality was added in After Effects 24.6

### Description

Turns on automatic vertical positioning for the composed text inside the box.

Defaults to BoxVerticalAlignment.TOP

### Type

A BoxVerticalAlignment enumerated value; read-write. One of:

- BoxVerticalAlignment.TOP
- BoxVerticalAlignment.CENTER
- BoxVerticalAlignment.BOTTOM
- BoxVerticalAlignment.JUSTIFY

### TextDocument.composedLineCount

textDocument.composedLineCount

### Description

Gives back how many composed lines the Text layer has; this can be zero when every line is overset.

Because the TextDocument object instance is seeded from the composed state, editing that instance afterward will not trigger recomposition.

So even after you strip every bit of text out of the TextDocument object instance, the figure reported here stays the same.

### Type

Integer; read-only.

### TextDocument.composerEngine

textDocument.composerEngine

Note

This functionality was added in After Effects 24.0

### Description

Selects which paragraph composer engine the Text layer uses. Fresh Text layers default to ComposerEngine.`UNIVERSAL_TYPE_ENGINE`; you will only run into the alternative enum on projects built before the Universal Type Engine (once called the South Asian and Middle Eastern engine) became standard in After Effects 22.1.1.

A mixed value across the layer reads back as undefined.

You can read and write this attribute, yet writing any enum besides ComposerEngine.`UNIVERSAL_TYPE_ENGINE` raises an exception.

Put differently, an older document can be moved from ComposerEngine.`LATIN_CJK_ENGINE` up to ComposerEngine.`UNIVERSAL_TYPE_ENGINE`, though never back the other direction.

Warning

Every paragraph in the Text layer is covered by this value.

Assigning a new value pushes that setting onto every paragraph in the Text layer.

### Type

A ComposerEngine enumerated value; read-write. One of:

- ComposerEngine.`LATIN_CJK_ENGINE`
- ComposerEngine.`UNIVERSAL_TYPE_ENGINE`

### TextDocument.digitSet

textDocument.digitSet

Note

This functionality was added in After Effects 24.0

### Description

Selects the digit set the Text layer applies.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

A DigitSet enumerated value; read/write. One of:

- DigitSet.`DEFAULT_DIGITS`
- DigitSet.`ARABIC_DIGITS`
- DigitSet.`HINDI_DIGITS`
- DigitSet.`FARSI_DIGITS`
- DigitSet.`ARABIC_DIGITS_RTL`

### TextDocument.direction

textDocument.direction

Note

This functionality was added in After Effects 24.0

### Description

Selects the paragraph direction the Text layer applies.

A mixed value across the layer reads back as undefined.

Warning

Every paragraph in the Text layer is covered by this value.

Assigning a new value pushes that setting onto every paragraph in the Text layer.

### Type

A ParagraphDirection enumerated value; read/write. One of:

- ParagraphDirection.`DIRECTION_LEFT_TO_RIGHT`
- ParagraphDirection.`DIRECTION_RIGHT_TO_LEFT`

### TextDocument.endIndent

textDocument.endIndent

Note

This functionality was added in After Effects 24.0

### Description

Selects the paragraph end-indent setting the Text layer applies.

A mixed value across the layer reads back as undefined.

Warning

Every paragraph in the Text layer is covered by this value.

Assigning a new value pushes that setting onto every paragraph in the Text layer.

### Type

Floating-point value; read/write.

### TextDocument.everyLineComposer

textDocument.everyLineComposer

Note

This functionality was added in After Effects 24.0

### Description

Holds the Every-Line Composer paragraph setting for the Text layer. Switch it to false and the TextDocument falls back on the Single-Line Composer.

A mixed value across the layer reads back as undefined.

Warning

Every paragraph in the Text layer is covered by this value.

Assigning a new value pushes that setting onto every paragraph in the Text layer.

### Type

Boolean; read/write.

### TextDocument.fauxBold

textDocument.fauxBold

Note

The read functionality was added in After Effects 13.2 (CC 2014.2).

The write functionality was added in After Effects 24.0

### Description

true if a Text layer has faux bold enabled; otherwise false.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

Boolean; read/write.

### Example

```
var isFauxBold = myTextLayer.sourceText.value.fauxBold;
```

### TextDocument.fauxItalic

textDocument.fauxItalic

Note

The read functionality was added in After Effects 13.2 (CC 2014.2).

The write functionality was added in After Effects 24.0

### Description

true if a Text layer has faux italic enabled; otherwise false.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

Boolean; read/write.

### TextDocument.fillColor

textDocument.fillColor

### Description

Holds the fill color of the Text layer as an [r, g, b] array of floating-point values. To illustrate, an 8-bpc project represents a red value of 255 as 1.0, while a 32-bpc project can carry an overbright blue as high as something like 3.2.

Reading it raises an exception unless applyFill is true.

Writing it additionally flips applyFill to true on the characters involved.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

Array [r, g, b] of floating-point values; read/write.

### TextDocument.firstLineIndent

textDocument.firstLineIndent

Note

This functionality was added in After Effects 24.0

### Description

Selects the paragraph first-line-indent setting the Text layer applies.

A mixed value across the layer reads back as undefined.

Warning

Every paragraph in the Text layer is covered by this value.

Assigning a new value pushes that setting onto every paragraph in the Text layer.

### Type

Floating-point value; read/write.

### TextDocument.font

textDocument.font

### Description

Identifies the Text layer's font through its PostScript name.

Writing imposes almost no limits on the string you provide: should the font management system find no Font object instance matching that PostScript name, it fabricates a substitute. When PostScript names collide, the Font instance you get back is element 0 of the array that FontsObject.getFontsByPostScriptName() produces.

For tight control, reach for the Font object attribute instead.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

String; read/write.

### TextDocument.fontBaselineOption

textDocument.fontBaselineOption

Note

This functionality was added in After Effects 24.0

### Description

Carries the font baseline setting for the Text layer, which is how you push a textDocument into superscript or subscript.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

A FontBaselineOption enumerated value; read/write. One of:

- FontBaselineOption.`FONT_NORMAL_BASELINE`
- FontBaselineOption.`FONT_FAUXED_SUPERSCRIPT`
- FontBaselineOption.`FONT_FAUXED_SUBSCRIPT`

### TextDocument.fontCapsOption

textDocument.fontCapsOption

Note

This functionality was added in After Effects 24.0

### Description

Carries the font caps setting for the Text layer.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

A FontCapsOption enumerated value; read/write. One of:

- FontCapsOption.`FONT_NORMAL_CAPS`
- FontCapsOption.`FONT_SMALL_CAPS`
- FontCapsOption.`FONT_ALL_CAPS`
- FontCapsOption.`FONT_ALL_SMALL_CAPS`

### TextDocument.fontFamily

textDocument.fontFamily

Note

This functionality was added in After Effects 13.1 (CC 2014.1)

### Description

A string carrying the font family's name.

Warning

Only the layer's first character is reflected in this value.

### Type

String; read-only.

### TextDocument.fontLocation

textDocument.fontLocation

Note

This functionality was added in After Effects 13.1 (CC 2014.1)

### Description

The on-disk path that points to where the font file lives.

Warning

There is no promise it comes back for every font type; with certain fonts the result can be an empty string.

Warning

Only the layer's first character is reflected in this value.

### Type

String; read-only.

### TextDocument.fontObject

textDocument.fontObject

Note

This functionality was added in After Effects 24.0

### Description

Identifies the Text layer's Font object through its PostScript name.

Warning

Only the layer's first character is reflected in this value.

### Type

Font object; read/write.

### TextDocument.fontSize

textDocument.fontSize

### Description

How large the Text layer's font is, measured in pixels.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

Floating-point value (0.1 to 1296, inclusive); read/write.

### TextDocument.fontStyle

textDocument.fontStyle

Note

This functionality was added in After Effects 13.1 (CC 2014.1)

### Description

A string holding style details, e.g., "bold", "italic"

Warning

Only the layer's first character is reflected in this value.

### Type

String; read-only.

### TextDocument.hangingRoman

textDocument.hangingRoman

Note

This functionality was added in After Effects 24.0

### Description

Holds the Roman Hanging Punctuation paragraph setting for the Text layer. It matters solely for box Text layers, where it lets punctuation spill past the box edge instead of wrapping onto the following line.

A mixed value across the layer reads back as undefined.

Warning

Every paragraph in the Text layer is covered by this value.

Assigning a new value pushes that setting onto every paragraph in the Text layer.

### Type

Boolean; read/write.

### TextDocument.horizontalScale

textDocument.horizontalScale

Note

This functionality was added in After Effects 13.2 (CC 2014.2)

### Description

How wide the Text layer is scaled horizontally, in pixels.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

Floating-point value; read-write.

### Example

```
var valOfHScale = myTextLayer.sourceText.value.horizontalScale;
```

### TextDocument.justification

textDocument.justification

### Description

How paragraphs are justified within the Text layer.

### Type

A ParagraphJustification enumerated value; read/write. One of:

- ParagraphJustification.`LEFT_JUSTIFY`
- ParagraphJustification.`RIGHT_JUSTIFY`
- ParagraphJustification.`CENTER_JUSTIFY`
- ParagraphJustification.`FULL_JUSTIFY_LASTLINE_LEFT`
- ParagraphJustification.`FULL_JUSTIFY_LASTLINE_RIGHT`
- ParagraphJustification.`FULL_JUSTIFY_LASTLINE_CENTER`
- ParagraphJustification.`FULL_JUSTIFY_LASTLINE_FULL`
- ParagraphJustification.`MULTIPLE_JUSTIFICATIONS`

When a Text layer mixes justification values, the read returns ParagraphJustification.`MULTIPLE_JUSTIFICATIONS`.

Trying to set a TextDocument to ParagraphJustification.`MULTIPLE_JUSTIFICATIONS` lands on ParagraphJustification.`CENTER_JUSTIFY` instead.

Warning

Every paragraph in the Text layer is covered by this value.

Assigning a new value pushes that setting onto every paragraph in the Text layer.

### TextDocument.kerning

textDocument.kerning

Note

This functionality was added in After Effects 24.0

### Description

Carries the kerning setting for the Text layer.

For AutoKernType.`METRIC_KERN` and AutoKernType.`OPTICAL_KERN` it gives back zero.

Writing it also turns on AutoKernType.`NO_AUTO_KERN` across the characters involved.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

Integer value; read/write.

### TextDocument.leading

textDocument.leading

Note

This functionality was added in After Effects 14.2 (CC 2017.1)

### Description

How much vertical space the Text layer puts between lines.

Comes back as zero when TextDocument.autoLeading is true.

Writing it also turns on TextDocument.autoLeading across the characters involved.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

You may pass a minimum of 0, but it gets quietly bumped up to 0.01.

### Type

Floating-point value; read/write.

### Example

```
// This creates a Text layer and sets the leading to 100

var composition = app.project.activeItem;
var myTextLayer = comp.layers.addText("Spring\nSummer\nAutumn\nWinter");
var myTextSource = myTextLayer.sourceText;
var myTextDocument = myTextSource.value;
myTextDocument.leading = 100;
myTextSource.setValue(myTextDocument);
```

### TextDocument.leadingType

textDocument.leadingType

Note

This functionality was added in After Effects 24.0

### Description

Selects the paragraph leading-type setting the Text layer applies.

A mixed value across the layer reads back as undefined.

Warning

Every paragraph in the Text layer is covered by this value.

Assigning a new value pushes that setting onto every paragraph in the Text layer.

### Type

A LeadingType enumerated value; read/write. One of:

- LeadingType.`ROMAN_LEADING_TYPE`
- LeadingType.`JAPANESE_LEADING_TYPE`

### TextDocument.ligature

textDocument.ligature

Note

This functionality was added in After Effects 24.0

### Description

Carries the ligature setting for the Text layer.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

Boolean; read/write.

### TextDocument.lineJoinType

textDocument.lineJoinType

Note

This functionality was added in After Effects 24.0

### Description

Holds the Stroke line-join-type setting for the Text layer.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

A LineJoinType enumerated value; read/write. One of:

- LineJoinType.`LINE_JOIN_MITER`
- LineJoinType.`LINE_JOIN_ROUND`
- LineJoinType.`LINE_JOIN_BEVEL`

### TextDocument.lineOrientation

textDocument.lineOrientation

Note

This functionality was added in After Effects 24.2

### Description

The Text layer's line orientation — broadly horizontal versus vertical — which drives how every line of text in the layer gets composed.

### Type

A LineOrientation enumerated value; read/write. One of:

- LineOrientation.HORIZONTAL
- LineOrientation.`VERTICAL_RIGHT_TO_LEFT`
- LineOrientation.`VERTICAL_LEFT_TO_RIGHT`

### TextDocument.noBreak

textDocument.noBreak

Note

This functionality was added in After Effects 24.0

### Description

Carries the no-break setting for the Text layer.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

Boolean; read/write.

### TextDocument.paragraphCount

textDocument.paragraphCount

### Description

Gives back the paragraph count of the text layer, which is never below 1.

### Type

Integer; read-only.

### TextDocument.pointText

textDocument.pointText

### Description

true if a Text layer is a layer of point (unbounded) text; otherwise false.

### Type

Boolean; read-only.

### TextDocument.smallCaps

textDocument.smallCaps

Note

This functionality was added in After Effects 13.2 (CC 2014.2)

### Description

true if a Text layer has small caps enabled; otherwise false. To set this value, use TextDocument.fontCapsOption added in After Effects 24.0.

Warning

Only the layer's first character is reflected in this value.

### Type

Boolean; read-only.

### TextDocument.spaceAfter

textDocument.spaceAfter

Note

This functionality was added in After Effects 24.0

### Description

Selects the paragraph space-after setting the Text layer applies.

A mixed value across the layer reads back as undefined.

Warning

Every paragraph in the Text layer is covered by this value.

Assigning a new value pushes that setting onto every paragraph in the Text layer.

### Type

Floating-point value; read/write.

### TextDocument.spaceBefore

textDocument.spaceBefore

Note

This functionality was added in After Effects 24.0

### Description

Selects the paragraph space-before setting the Text layer applies.

A mixed value across the layer reads back as undefined.

Warning

Every paragraph in the Text layer is covered by this value.

Assigning a new value pushes that setting onto every paragraph in the Text layer.

### Type

Floating-point value; read/write.

### TextDocument.startIndent

textDocument.startIndent

Note

This functionality was added in After Effects 24.0

### Description

Selects the paragraph start-indent setting the Text layer applies.

A mixed value across the layer reads back as undefined.

Warning

Every paragraph in the Text layer is covered by this value.

Assigning a new value pushes that setting onto every paragraph in the Text layer.

### Type

Floating-point value; read/write.

### TextDocument.strokeColor

textDocument.strokeColor

### Description

Holds the stroke color of the Text layer as an [r, g, b] array of floating-point values. To illustrate, an 8-bpc project represents a red value of 255 as 1.0, while a 32-bpc project can carry an overbright blue as high as something like 3.2.

Reading it raises an exception unless applyStroke is true.

Writing it additionally flips applyStroke to true on the characters involved.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

Array [r, g, b] of floating-point values; read/write.

### TextDocument.strokeOverFill

textDocument.strokeOverFill

### Description

Tells you which of the fill and stroke a Text layer draws first. With this true, the stroke sits on top of the fill.

A Text layer can supersede the per-character setting when it is configured for All Strokes Over All Fills or All Fills Over All Strokes in the Character Panel. For that reason, what you read here may diverge from the attribute value actually applied to the character. The Fill/Stroke render order can be assigned through the "Fill & Stroke" property beneath More Options on the Text layer via TextLayer.text("ADBE Text More Options")("ADBE Text Render Order").

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

Boolean; read/write.

### TextDocument.strokeWidth

textDocument.strokeWidth

### Description

How thick the Text layer's stroke is, measured in pixels.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

You may pass a minimum of 0, but it gets quietly bumped up to 0.01.

### Type

Floating-point value (0 to 1000, inclusive); read/write.

### TextDocument.subscript

textDocument.subscript

Note

This functionality was added in After Effects 13.2 (CC 2014.2)

### Description

true if a Text layer has subscript enabled; otherwise false. To set this value, use TextDocument.fontBaselineOption added in After Effects 24.0.

Warning

Only the layer's first character is reflected in this value.

### Type

Boolean; read-only.

### TextDocument.superscript

textDocument.superscript

Note

This functionality was added in After Effects 13.2 (CC 2014.2)

### Description

true if a Text layer has superscript enabled; otherwise false. To set this value, use TextDocument.fontBaselineOption added in After Effects 24.0.

Warning

Only the layer's first character is reflected in this value.

### Type

Boolean; read-only.

### TextDocument.text

textDocument.text

### Description

What sits in the Source Text property of the Text layer.

### Type

String; read/write.

### TextDocument.tracking

textDocument.tracking

### Description

How much horizontal space the Text layer puts between characters.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

Floating-point value; read/write.

### TextDocument.tsume

textDocument.tsume

Note

This functionality was added in After Effects 13.2 (CC 2014.2)

### Description

The tsume amount on this Text layer, expressed as a normalized fraction running 0.0 -> 1.0.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

Although the attribute will take values from 0.0 -> 100.0, what it really wants is a normalized 0.0 -> 1.0 figure. Going above 1.0 yields unexpected results; the Character Panel in AE caps the display at 100% even when scripting set something larger (that is, TextDocument.tsume = 100 _really_ sets a value of 10,000%)

### Type

Floating-point value; read-write.

### TextDocument.verticalScale

textDocument.verticalScale

Note

This functionality was added in After Effects 13.2 (CC 2014.2)

### Description

How tall the Text layer is scaled vertically, in pixels.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

Floating-point value; read-write.

## Collection object — Attributes

| Attribute | Type | Description |
| --- | --- | --- |
| length | Integer | The number of objects in the collection. |
