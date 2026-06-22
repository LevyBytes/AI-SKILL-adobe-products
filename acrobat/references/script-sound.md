# Sound, Span

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Sound; Span.

## Sound

### JavaScript APIs — Sound

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

A sound held inside the document is what this object stands for. You reach the array of every Sound object through the Doc sounds property. See also Doc methods getSound, importSound, and deleteSound.

### Sound properties

### name

Version (Key)

Save-Prefs

Security

Product

Type

Access

Deprecated

No

No

No

String

R/W

| --- | --- | --- | --- | --- | --- |

The name that belongs to this Sound object.

Example: Dump to the console the name of every sound embedded in the document at hand.

```
console.println("Dumping all sound objects in this document.");
var s = this.sounds;
for (var i = 0; i < this.sounds.length; i++)
    console.println("Sound[" + i + "]=" + s[i].name);
```

### Sound methods

### pause

Halts the sound that is presently playing. Where the sound already sits paused, playback picks up again instead.

### play

Plays the sound asynchronously.

### stop

Halts whichever sound is presently playing.

## Span

### JavaScript APIs — Span

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

A general-purpose object standing for a run of text plus its formatting properties inside a rich text form field or annotation. Any rich text value is built from an array of span objects that together hold the text and its formatting.

Note

A span object is merely a snapshot of the field's or annotation's rich text value. To change it and push the update back so the field refreshes, work through the Field object richValue property, or the Annotation object property richContents, together with the event object properties richValue, richChange, and richChangeEx.

### Span properties

### alignment

Type

Access

String

R/W

| --- | --- |

How the text lines up horizontally. For any given line, the first span on that line dictates the alignment. alignment accepts these values:

```
left
center
right
```

The default value is left.

Example: alignment is exercised in the example given below under superscript.

### fontFamily

Type

Access

String

R/W

| --- | --- |

The font family that draws the text. Supply it as an array of family names searched in sequence. Position one holds the actual font to use; position two is an optional generic family name applied when the first font has no exact match. These are the generic family names:

```
symbol, serif, sans-serif, cursive, monospace, fantasy
```

The default generic family name is sans-serif.

Example: Set the defaultStyle font family for a rich text field.

```
f = this.getField("Text1");
style = f.defaultStyle;

// If Courier Std is not found on the user's system, use a monospace font
style.fontFamily = ["Courier Std", "monospace" ];
f.defaultStyle = style;
```

### fontStretch

Type

Access

String

R/W

| --- | --- |

Picks the normal, condensed, or extended face within a font family for drawing the text. fontStretch takes these values:

```
ultra-condensed, extra-condensed, condensed, semi-condensed, normal,

 semi-expanded, expanded, extra-expanded, ultra-expanded
```

The default value is normal.

### fontStyle

Type

Access

String

R/W

| --- | --- |

Determines whether an italic face, or an oblique one, is used to render the text.

```
italic
normal
```

The default is normal.

### fontWeight

Type

Access

Number

R/W

| --- | --- |

How heavy the font is when drawing the text. For comparison's sake, anything below 700 counts as normal and 700 or above counts as bold. fontWeight takes these values:

```
100,200,300,400,500,600,700,800,900
```

The default value is 400.

### strikethrough

Type

Access

Boolean

R/W

| --- | --- |

When strikethrough is true, a line is drawn through the text. The default is false.

### subscript

Type

Access

Boolean

R/W

| --- | --- |

Controls subscript text. When true, the text renders subscript — shrunk in point size and dropped below the baseline. The default is false.

### superscript

Type

Access

Boolean

R/W

| --- | --- |

Controls superscript text. When true, the text renders superscript — shrunk in point size and lifted above the baseline. The default is false.

Example: Push rich text into a rich text field by combining several of these properties. The Field object richValue property covers further detail and examples.

```
var f = this.getField("myRichField");

// Create an array to hold the Span objects
var spans = new Array();

// Each Span object is an object, so we must create one
spans[0] = new Object();
spans[0].alignment = "center";
spans[0].text = "The answer is x";

spans[1] = new Object();
spans[1].text = "2/3";
spans[1].superscript = true;

spans[2] = new Object();
spans[2].superscript = false;
spans[2].text = ".  ";

spans[3] = new Object();
spans[3].underline = true;
spans[3].text = "Did you get it right?";
spans[3].fontStyle = "italic";
spans[3].textColor = color.red;

// Now assign our array of Span objects to the field using

// field.richValue
f.richValue = spans;
```

### text

The text contained by the span.

Type

Access

String

R/W

|  |  |
| --- | --- |
|  |  |

Example: text is exercised in the example given below under superscript.

### textColor

A color array giving the RGB color that draws the text (see the color object). Black is the default color.

Type

Access

Color Array

R/W

|  |  |
| --- | --- |
|  |  |

Example: textColor is exercised in the example given below under superscript.

### textSize

The text's point size. textSize accepts any number from 0 through 32767, inclusive. A value of zero asks Acrobat to scale up to the biggest point size that still keeps every bit of text data within the rectangle of the field.

When unset, textSize is 12.0.

Type

Access

Number

R/W

|  |  |
| --- | --- |
|  |  |

Example: textSize is exercised in the example given below under the Field object richValue property.

### underline

When underline is true, a line sits under the text. The default is false.

Type

Access

Boolean

R/W

|  |  |
| --- | --- |
|  |  |

Example: underline is exercised in the example given below under superscript.
