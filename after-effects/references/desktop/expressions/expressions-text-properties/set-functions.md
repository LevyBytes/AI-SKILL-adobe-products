# Set functions

Below are extra set functions you can apply on their own or stack together to drive styles across layers. Every one of them runs against the style object belonging to a Source Text property:

```javascript
// Set the font used to Arial
style.setFont("ArialMT")

// Set the font size to 80
style.setFontSize(80);

// Enable Faux Bold with a Boolean
style.setFauxBold(true)

// Enable Faux Italics with a Boolean
style.setFauxItalics(true)

// Enable All Caps with a Boolean
style.setAllCaps(true)

// Enable Small Caps with a Boolean
style.setSmallCaps(true)

// Set the Tracking as a number
style.setTracking(10);

// Set the Leading as a number
style.setLeading(10);

// Enable Auto Leading with a Boolean
style.setAutoLeading(true);

// Set the Baseline Shift as a number
style.setBaselineShift(10);

// Set the Stroke Width as a number
style.setStrokeWidth(10);

// Set the first line of a text layer to bold and make it larger
 text.sourceText.style.setFontSize(100, 0, 30).setFauxBold(true, 0, 30)

// Sets uperscript for characters
text.sourceText.style.setBaselineOption("superscript",1,2).setBaselineOption("superscript", 9, 2)
```

Every text-style set function chains onto the next, letting you assign several attributes in one go rather than redeclaring a style for each, as the example here shows:

Note

No semicolon appears until the final attribute has been set. Putting each attribute on a separate line keeps the entire chain readable.

```javascript
// Enable Fill, set Fill Color, set Baseline, set Tracking, and enable Auto Leading

text.sourceText.style

    .setApplyFill(true)

    .setFillColor(hexToRgb("FFFFFF"))

    .setBaselineShift(10)

    .setTracking(25)

    .setAutoLeading(true);
```
