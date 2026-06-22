# Expressions Text Properties

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Oct 14, 2024

Adjust both text styles and text properties by way of the expression controls.

Reach for expressions whenever you want to drive text styling inside any text expression or Motion Graphics template. A few of the things expressions let you accomplish:

- Tie several titles together and restyle them in one pass (a real time-saver when designing titles).
- Hold font, size, and styling consistent across a number of Text layers.
- Apply sweeping changes to text properties.
- Assign style attributes to single characters within a Text layer.

After you've set these on a Text layer, point at that layer's properties to roll changes out across the whole composition with ease. In After Effects, expressions read (get) text-style values through properties and write (set) them through function methods inside the expression engine. That's what lets you link text styles between Text layers, or build controls for animating them or feeding them into a Motion Graphics template.

## Before you start using expressions to edit text properties

1. Switch the expression engine over to Javascript via Project Settings > Expressions > Expressions Engine > Javascript.
2. Attach an expression to the Source Text property on a Text layer.
3. From the Expression Language flyout menu, choose Text > Properties > Text Properties or Text > Styling.

## Available text attributes

By way of the style object, you can read and write these text-styling attributes:

- Font
- Font Size
- Faux Bold
- Faux Italics
- All Caps
- Small Caps
- Tracking
- Leading

- Auto Leading
- Baseline Shift
- Fill (enable/disable)
- Fill Color
- Stroke (enable/disable)
- Stroke Color
- Stroke Width

- Digit Set
- Scaling
- Kerning
- Tsume
- Baseline Direction
- Baseline Option

Every Text Property, including those presently in After Effects, is enumerated in the Expression Language flyout menu.

Every Text Property, including those presently in After Effects, is enumerated in the Expression Language flyout menu.

To expressions, a Text layer's Source Text property reads as a JavaScript string. You can pull the text itself with sourceText, but when you're altering style attributes it has to be written onto the style object via the setText method. Work through a few of the examples.

## Start a new line of text

To begin a fresh line of text, drop \r into a string expression. As an illustration, the expression below takes the original text from a layer, duplicates it on that same layer, and restates it all in uppercase on a new line:

```
  text.sourceText + "\r" + text.sourceText.toUpperCase()
```

## Available paragraph attributes

Beyond the text-style attributes, paragraph attributes exist as well. They apply solely to the whole Text layer. These paragraph attributes show up only in After Effects.

- Direction
- Every-Line Composer
- First Line Indent
- Justification

- Leading Type
- Left Margin
- Right Margin
- Space After

- Space Before
- Hanging Roman Punctuation

Every Paragraph Property bundled into After Effects is enumerated in the Expression Language flyout menu.

Every Paragraph Property bundled into After Effects is enumerated in the Expression Language flyout menu.

## PostScript font expression menu

Citing a font in an expression calls for a particular "system name" (or something close to it). To steer clear of expression errors, the advice is to drop that special name in from the Text > Font > Select Font dialog.

- Bring up the Expression Language flyout menu and pick Text > Font. A dialog appears with drop-down menus from which you choose the typeface and font to drop into the expression.

Use the Expression Language menu to select the typeface and font to insert into the expression.

Use the Expression Language menu to select the typeface and font to insert into the expression.

## Font syncing

Any font that's cited only within the Expressions Editor doesn't count among the project's recorded fonts. So that every font cited in the Expressions Editor auto-syncs or shows up in the Resolve Fonts dialog, place all of those fonts on a layer — even one whose source you've hidden.

## Style object

A Text layer's styling properties all live on the style object, which you get to from the Source Text property like so:

```
// Using the whole path to the Source Text property
text.sourceText.style

// Using the generic name for the current property
thisProperty.style
```

Writing style on its own works identically to either example above, though it can get muddled when you're mixing style attributes drawn from several Text layers.

The styling attributes of other Text layers are readable in the same way. Using the pick whip, link out to that other Text layer right where the first of the examples above begins.

```
// Accessing the style object of a specific text layer

thisComp.layer("Other Layer Name").text.sourceText.style;
```

## Style attributes of individual characters in a Text layer

Text expressions let you assign style attributes not just to the entire Text layer but to single characters within it too. The payoff of this per-character control is that text reflows automatically — when you scale letters, apply superscript, or switch fonts, for instance — exactly as substring styling from the Character panel would behave.

## Examples

### Change the font for certain words

```
text.sourceText.style
.setFont("Montserrat-Light")
.setFont("Gigantic", 0, 6).setFont("Gigantic", 10, 6).setFont("Gigantic", 20)
```

### Set the first line of a text layer to bold and make it larger

```
 text.sourceText.style.setFontSize(100, 0, 30).setFauxBold(true, 0, 30)
```

### Set superscript for characters

To try the string out, add a Text layer holding '1st and 2nd Place' as its text, then put the expression below on its Source Text.

```
text.sourceText.style.setBaselineOption("superscript",1,2).setBaselineOption("superscript", 9, 2)
```

## Combine style and source text

Combining Style and Source Text

Combining Style and Source Text

When you want both the style and the live Source Text returned at time, you'll need to bring the getStyleAt and setText functions together. Two ways of writing that expression follow.

```
// To return the values of both the style and the actual Source Text at time (short hand)

var sourceTextProperty = thisComp.layer("MAIN TEXT").text.sourceText;

var newStyle = sourceTextProperty.getStyleAt(0,0);

newStyle.setText(sourceTextProperty);
```

```
// To return the values of both the style and the actual Source Text of the previous layer in the layer stacking order

var sourceTextProperty = thisComp.layer(index - 1).text.sourceText;

var newStyle = sourceTextProperty.getStyleAt(0,0);

newStyle.setText(sourceTextProperty);
```

## Dropdown fonts

Link Fonts or Styles to a Dropdown Menu

Link Fonts or Styles to a Dropdown Menu

A Dropdown menu can drive text styling — for instance, pinning Text layers to chosen fonts. That comes in handy for templates, MoGRTs, brand-guideline enforcement, and similar use cases:

```
// To lock a text layer to specific fonts with a Dropdown Menu Control

var dropDownMenu = thisComp.layer("LayerName").effect("Dropdown Menu Control")("Menu");

switch (dropDownMenu.value) {

    case 1 :

        text.sourceText.style.setFont("Georgia");

        break;

    case 2 :

        text.sourceText.style.setFont("Impact");

        break;

default :

        text.sourceText.style.setFont("Tahoma");

}
```

## Main text layer

Get text properties from “Text Layer 1” but override Font Size and Fill Color

Get text properties from “Text Layer 1” but override Font Size and Fill Color

To style several Text layers from a single controller font, wire those layers to one master. Make two Text layers, then drop this expression into the Source Text of either one:

```
// To get all text properties from a text layer

thisComp.layer("Text Layer 1").text.sourceText.style;
```

You can pull a Text layer's style and still replace individual properties by feeding values through the set functions. The two snippets below demonstrate this with Fill Color and Font Size.

```
// To get all text properties from “Text Layer 1” but override Fill Color and Font Size with hardcoded values

var newStyle = thisComp.layer("Text Layer 1").text.sourceText.style;

newStyle.setFillColor(hexToRgb("FF0000")).setFontSize(100);
```

```
// To get all text properties from "Text Layer 1” but override Fill Color and Font Size with the layer’s current text properties

var newStyle = thisComp.layer("Text Layer 1").text.sourceText.style;

var currentFillColor = thisProperty.style.fillColor;

var currentFontSize = thisProperty.style.fontSize;

newStyle.setFillColor(currentFillColor).setFontSize(currentFontSize);
```

## Examples

What follows are sample expressions showing how text property values can be read and applied.

## Font

These samples cover reading a Text layer's Font, Font Size, Faux Bold, Faux Italic, Tracking, and Leading:

```
// To return the name of the Font for the text layer itself
text.sourceText.style.font;

// To return the name of the Font another text layer is using
var otherLayer = thisComp.layer("Other Layer Name");

otherLayer.text.sourceText.style.font;

// To return the value of Font Size for the text layer itself
text.sourceText.style.fontSize;

// To return the value of Font Size for another text layer
var otherLayer = thisComp.layer("Other Layer Name");

otherLayer.text.sourceText.style.fontSize;

// To return a Boolean value of whether a layer's text is Faux Bold or not (True or False)
text.sourceText.style.isFauxBold;

// To return a Boolean value of whether a layer's text is Faux Italic or not (True or False)
text.sourceText.style.isFauxItalic;

// To return the value of a text layer’s Tracking as a number
text.sourceText.style.tracking;

// To return the value of a text layer's Leading as a number
text.sourceText.style.leading;
```

## Fill

Here are samples for reading a Text layer's Fill and Fill Color:

```
// To return a Boolean value of whether a layer's text has Fill applied to it (True or False)
text.sourceText.style.applyFill;

// To return the value of the Fill Color of a text layer
// By default, this returns an array of the RGB values on a scale from 0 – 1.0
text.sourceText.style.fillColor;

// Set the Fill Color of a text layer with setApplyFill and setFillColor
// setFillColor values are defined as an RGB array on a scale between 0 – 1.0
var newStyle = style.setApplyFill(true);

newStyle.setFillColor([1.0, 1.0, 1.0]);

// Set the Fill Color of a text layer substituting the 0 – 1.0 RGB array with hexToRGB to define the color values with Hex values
var newStyle = style.setApplyFill(true);

newStyle.setFillColor(hexToRgb("FFFFFF"));
```

### Fill RGB Values

```
// To return the red (R) value of the Fill Color

text.sourceText.style.fillColor[0];
```

Note

For the Fill Color's R, G, or B channel of a text layer, place 0, 1, or 2 in brackets accordingly.

## Stroke

Below are samples for reading a Text layer's Stroke, Stroke Color, and Stroke Width:

```
// To return a Boolean value of whether a layer's text has Stroke applied to it (True or False)
text.sourceText.style.applyStroke;

// To return the value of the Stroke Color of a text layer
// By default, this returns an array of the RGB values on a scale from 0 – 1.0
text.sourceText.style.strokeColor;

// Set the Stroke Color of a text layer with setApplyStroke and setStrokeColor
// setStrokeColor values are defined as an RGB array on a scale between 0 – 1.0
var newStyle = style.setApplyStroke(true);

newStyle.setStrokeColor([1.0, 0.0, 0.0]);

// Set the Stroke Color of a text layer substituting the 0 – 1.0 RGB array with hexToRGB to define the color values with Hex values
var newStyle = style.setApplyStroke(true);

newStyle.setStrokeColor(hexToRgb("FF0000"));

// To return the value of a text layer's Stroke Width as a number
text.sourceText.style.strokeWidth;
```

### Stroke RGB Values

```
// To return the green (G) value of the Stroke Color

text.sourceText.style.strokeColor[1];
```

Note

For the Stroke Color's R, G, or B channel of a Text layer, place 0, 1, or 2 in brackets accordingly.

## getStyleAt function

This get function hands back the style value for one character at a chosen moment. The index argument is a number — the position of the letter or character whose style you want. The atTime argument is likewise a number, naming the composition time to read the style from, which matters when the style is keyframed and shifts over time.

```
text.sourceText.getStyleAt(index, atTime);
```

Note

Calling text.sourceText.style is equivalent to text.sourceText.getStyleAt(0,0).

```
// Gets the style of the first character at the beginning of the timeline

text.sourceText.getStyleAt(0,0);
```

## Set functions

Below are extra set functions you can apply on their own or stack together to drive styles across layers. Every one of them runs against the style object belonging to a Source Text property:

```
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

```
// Enable Fill, set Fill Color, set Baseline, set Tracking, and enable Auto Leading

text.sourceText.style

    .setApplyFill(true)

    .setFillColor(hexToRgb("FFFFFF"))

    .setBaselineShift(10)

    .setTracking(25)

    .setAutoLeading(true);
```

## Additional uses for expressions on source text

Dropping a Text layer into a composition and attaching an expression to its Source Text property is a handy way to inspect property values on other layers. As an illustration, the expression below — placed on a Source Text property — prints both the name and the Opacity value of whichever layer sits next in the stacking order:

```
var nextLayer =  thisComp.layer(index + 1);
nextLayer.name + "\rOpacity = " + nextLayer.opacity.value;
```

The next sample prints the name of the footage feeding the uppermost image layer in the stack — at the current time — that has its Video switch turned on:

```
// Create sourceFootageName as a blank string
var sourceFootageName = "";

// Loop through all layers in the composition
for (var i = 1; i <= thisComp.numLayers; i++) {

    // If i matches this layer's index, continue to next loop
    if (i == index) {
        continue;
    }

    // Set myLayer for the current iteration of the loop
    var myLayer = thisComp.layer(i);

    // If myLayer has no video or isn't active, continue to next loop/layer
    if ( !myLayer.hasVideo || !myLayer.active ) {
      continue;
    }

    // If myLayer is active at the current time
    if ( myLayer.active ) {
        try {
            // Set sourceFootageName to myLayer's source name
            sourceFootageName = myLayer.source.name;
        } catch ( err ) {
            // If myLayer has no source,
            // set sourceFootageName to the myLayer's name
            sourceFootageName = myLayer.name;
        }

        // Stop looping
        break;
    }
}

// Display the sourceFootageName
sourceFootageName;
```

## Save expressions as presets

Highlight the Source Text property carrying your expressions. Next, choose Animation > Save Animation Preset so the expressions can be reused across other projects. You'll find saved Animation Presets in the Effects & Presets panel.

To learn more, refer to Effects and animation presets overview.
