# Solidsource, Characterrange, Composedlinerange, Font ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: SolidSource; CharacterRange; ComposedLineRange; Font; Fonts; ParagraphRange; TextDocument; Collection; Objects; ImportOptions; KeyframeEase; MarkerValue; Preferences; Settings; Shape; View; Viewer; ViewOptions.

## SolidSource

### SolidSource object

app.project.item(index).mainSource

app.project.item(index).proxySource

### Description

A footage source made of a single solid color is what the SolidSource object stands for.

Info

As a subclass of FootageSource, SolidSource inherits all of that class's methods and attributes, which stay usable in addition to those listed below.

## CharacterRange

### CharacterRange object

app.project.item(index).layer(index).text.sourceText.value.characterRange(characterIndexStart, [signedCharacterIndexEnd])

Note

This functionality was added in After Effects 24.3

### Description

Acting as an accessor into the TextDocument object instance that spawned it, the CharacterRange object addresses a range of characters within that document.

Whereas the TextDocument object reports character attributes from the first character alone, a character range may cover zero or more characters. The upshot is that when two or more characters disagree on an attribute, that mixed state is reported back as undefined.

- The characterStart attribute is the first character index of the range.
- The characterEnd attribue will report the (last + 1) character index of the range, such that (characterEnd - characterStart) represents the number of characters in the range.

For the majority of attributes, the effective range is allowed to be zero — that is, an insertion point.

On each access, the CharacterRange object confirms that its characterStart and effective characterEnd still fit the current span of the related TextDocument object. That check follows the same rule used at creation time, but since adding or removing characters can change the related TextDocument object's length, the characterStart and effective characterEnd may stop being valid. Where that occurs, any access — read or write alike — throws an exception. When the effective range is no longer valid, the isRangeValid attribute returns false.

Keep in mind that a later change to the TextDocument object length could restore the CharacterRange object range to validity.

### Differences from TextDocument

Given that CharacterRange accesses a TextDocument object, the bulk of TextDocument's methods and attributes remain available while working with CharacterRange. This page covers only those attributes and methods that belong uniquely to CharacterRange or that behave differently on it.

On a CharacterRange instance, the following attributes and methods cannot be used:

| Attributes | Methods |
| --- | --- |
| baselineLocs | characterRange |
| boxText | paragraphCharacterIndexesAt |
| boxTextPos | paragraphRange |
| boxTextSize |  |
| lineOrientation |  |
| paragraphCount |  |
| pointText |  |

### Examples

The snippet below bumps up the font size of the TextDocument's first character and fixes every remaining character at fontSize 40.

```
var textDocument = app.project.item(index).layer(index).property("Source Text").value;
var characterRange = textDocument.characterRange(0,1);

characterRange.fontSize = characterRange.fontSize + 5;
textDocument.characterRange(1,-1).fontSize = 40;
```

## ComposedLineRange

### ComposedLineRange object

app.project.item(index).layer(index).text.sourceText.value.composedLineRange(composedLineIndexStart, [signedComposedLineIndexEnd])

Note

This functionality was added in After Effects 24.3

### Description

Acting as an accessor into the TextDocument object instance that spawned it, the ComposedLineRange object addresses a range of composed lines within that document.

A TextDocument object's composed lines are set up when the object is created and stay put as the object is edited. Worth stressing: the TextDocument object instance is not recomposed as you alter it — recomposition happens only when the instance is reapplied to a TextLayer object. So even deleting all the text in a TextDocument object instance leaves the composed-line count where it was.

- The characterStart attribute will report the first character index of the range.
- The characterEnd attribute will report the (last + 1) character index of the range, such that (characterEnd - characterStart) represents the number of characters in the range.
- A composed line always has some length.

On each access, the ComposedLineRange object confirms that its effective characterStart and effective characterEnd still fit the current span of the related TextDocument object. That check follows the same rule used at creation time, but since adding or removing characters can change the related TextDocument object's length, the effective characterStart and effective characterEnd may stop being valid. Where that occurs, any access — read or write alike — throws an exception. When the effective range is no longer valid, the property isRangeValid returns false.

Keep in mind that a later change to the TextDocument object length could restore the character range to validity.

For convenience, calling ComposedLineRange.characterRange() returns a CharacterRange object instance built from characterStart and characterEnd. That instance stands apart from the ComposedLineRange instance it derived from, so any later shift in the ComposedLineRange limits is not relayed to the CharacterRange object instance.

To keep things fast when reading several attributes, it pays to fetch the CharacterRange object a single time and reuse it rather than creating a fresh one on each pass.

### Examples

The snippet below recolors the TextDocument's first composed line to red and sets all the remaining lines to blue.

```
var textDocument = app.project.item(index).layer(index).property("Source Text").value;

var composedLineRange0 = textDocument.composedLineRange(0,1);
var characterRange0 = composedLineRange0.characterRange();
characterRange0.fillColor = [1.0, 0, 0];

textDocument.composedLineRange(1,-1).characterRange().fillColor = [0, 0, 1.0];
```

## Font

### Font object

Note

This functionality was added in After Effects 24.0

### Description

For any single font, the Font object exposes details about that font together with the underlying font technology — useful for telling fonts apart when several installed on the system carry the same Postscript name.

The bulk of these APIs just surface data already held inside the Font data file itself, so consult that file for anything deeper.

## Fonts

### Fonts object

app.fonts

Note

This functionality was added in After Effects 24.0

### Description

The Fonts objects surfaces details about the font ecosystem as it currently stands on your device.

For every real font it has discovered across the font ecosystem, After Effects keeps an internal font proxy. Whenever fonts come and go in that ecosystem, these internal proxies track the change, getting added or dropped to match.

What we expose through the proxy Font object is whatever data the font files themselves make available — and naturally that differs by font technology and font type. There is simply no way to catalog here every quirky variation and complication this produces; broadly, be wary of presuming that one font type or technology behaves and carries properties identical to any other — the answer, as ever, is "it depends".

Because a Font object is only a soft reference to one of these internal font proxies, it cannot on its own keep that proxy alive. Consequently, once the internal font proxy goes away, any property access on the referencing Font object raises an invalid exception.

When a project opens — and in a handful of other cases — the font named in the persisted data may turn out to be absent from the present font ecosystem. Then an internal font proxy gets built holding the wanted properties, such as the PostScript name, and returns true for isSubstitute. Some real font underneath is chosen to back this internal proxy, but which one stays hidden and you cannot steer the choice.

As the open continues with these created substitute fonts, the application tries to sync matching fonts down from Creative Cloud Adobe Fonts. That work runs asynchronously, so the project will typically finish opening and become usable before any fonts arrive from Adobe Fonts. Install timing can vary from font to font depending on how many are being synced. This attempt cannot be switched off.

Once the font ecosystem changes through the installation of new real fonts, the remaining substitute-font list is re-examined to find whether a real font now qualifies as a valid stand-in — for the moment matching only on the PostScript name — and when one turns up, every project reference to the substitute is swapped automatically for the freshly installed font.

## ParagraphRange

### ParagraphRange object

app.project.item(index).layer(index).text.sourceText.value.paragraphRange(paragraphIndexStart, [signedParagraphIndexEnd])

Note

This functionality was added in After Effects 24.3

### Description

Serving as an accessor onto a paragraph range, the ParagraphRange object reaches into the particular TextDocument object instance it was built from.

- First character index of the range is what the characterStart attribute reports.
- The characterEnd attribute reports the (last + 1) character index of the range, so that (characterEnd - characterStart) gives the count of characters within it.
- These two properties coincide only on an empty trailing paragraph of the TextDocument object.

On access, the ParagraphRange object verifies that the range's effective characterStart and effective characterEnd are still valid for the current span of the related TextDocument object. That is the very rule applied at the ParagraphRange's creation, but since the related TextDocument object can grow or shrink as characters are added or removed, the effective characterStart and effective characterEnd may cease to be valid. When that happens an exception is raised on access, whether read or write. Where the effective range is no longer valid, the isRangeValid attribute returns false.

Bear in mind that a shift in the TextDocument object's length could render the character range valid once more.

For convenience, calling ParagraphRange.characterRange() yields a CharacterRange object instance built from characterStart and characterEnd. That instance stands apart from the ParagraphRange instance it came from, so later changes to the ParagraphRange limits do not carry over to the CharacterRange object instance.

On performance grounds, when you mean to read several attributes it pays to fetch the CharacterRange object just once and reuse it instead of building a fresh one each time.

### Examples

This bumps up the first paragraph's font size in the TextDocument and pins every remaining paragraph to fontSize 40.

```
var textDocument = app.project.item(index).layer(index).property("Source Text").value;

var paragraphRange0 = textDocument.paragraphRange(0,1);
var characterRange0 = paragraphRange0.characterRange();
characterRange0.fontSize = characterRange0.fontSize + 5;

textDocument.paragraphRange(1,-1).characterRange().fontSize = 40;
```

## TextDocument

### TextDocument object

new TextDocument(docText)

app.project.item(index).layer(index).property("Source Text").value

### Description

A TextLayer's Source Text property value is held by the TextDocument object. Build one through the constructor, handing it the string you want wrapped.

### Examples

Here a source-text value is set, then an alert pops up displaying the new value.

```
var myTextDocument = new TextDocument("HappyCake");
myTextLayer.property("Source Text").setValue(myTextDocument);
alert(myTextLayer.property("Source Text").value);
```

Here keyframe values are set so the text cycles through different words over time

```
var textProp = myTextLayer.property("Source Text");
textProp.setValueAtTime(0, newTextDocument("Happy"));
textProp.setValueAtTime(.33, newTextDocument("cake"));
textProp.setValueAtTime(.66, newTextDocument("is"));
textProp.setValueAtTime(1, newTextDocument("yummy!"));
```

Here a range of character and paragraph settings is applied to some text

```
var textProp = myTextLayer.property("Source Text");
var textDocument = textProp.value;
myString = "Happy holidays!";
textDocument.resetCharStyle();
textDocument.fontSize = 60;
textDocument.fillColor = [1, 0, 0];
textDocument.strokeColor = [0, 1, 0];
textDocument.strokeWidth = 2;
textDocument.font = "Times New Roman PSMT";
textDocument.strokeOverFill = true;
textDocument.applyStroke = true;
textDocument.applyFill = true;
textDocument.text = myString;
textDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
textDocument.tracking = 50;
textProp.setValue(textDocument);
```

## Collection

### Collection object

### Description

Much like an array, a collection ties a group of objects or values together as one logical set and lets you reach each member by index. Most collection objects, though, cannot be written to. Rather than you placing objects into them, they refresh on their own as objects come into being or are removed.

Tip

Indexing in a collection begins at 1 rather than 0.

## Objects

### Collection object — Objects

- ItemCollection object Every item the Project panel holds — imported files, folders, solids, and the like.
- LayerCollection object Every layer that a composition contains.
- OMCollection object Every Output Module item the project holds.
- RQItemCollection object Every render-queue item the project holds.

## ImportOptions

### ImportOptions object

new ImportOptions();

new ImportOptions(file);

### Description

Whatever options govern importing a file through the Project.importFile() methods are bundled together by the ImportOptions object.

Its constructor accepts one optional argument: an Extendscript File object standing for the file.

Leave that out and you have to assign the file attribute yourself before handing the object to the importFile method. As an example:

```
new ImportOptions().file = new File("myfile.psd");
```

## KeyframeEase

### KeyframeEase object

myKey = new KeyframeEase(speed, influence);

### Description

The keyframe ease settings on a layer's AE property are wrapped up by the KeyframeEase object. Those settings come down to the speed and influence numbers you supply through the property's setTemporalEaseAtKey method. A KeyframeEase object is produced by the constructor, and neither parameter may be left out.

- speed: A floating-point value. Sets the speed attribute.
- influence: A floating-pointvalue in the range [0.1..100.0]. Sets the influence attribute.

### Example

For this example, take it that Position — a spatial property — carries more than two keyframes.

```
var easeIn = new KeyframeEase(0.5, 50);
var easeOut = new KeyframeEase(0.75, 85);
var myPositionProperty = app.project.item(1).layer(1).property("Position");
myPositionProperty.setTemporalEaseAtKey(2, [easeIn], [easeOut]);
```

Here Scale is set — a temporal property carrying either two or three dimensions. With 2D and 3D properties, every dimension needs its own easeIn and easeOut value:

```
var easeIn = new KeyframeEase(0.5, 50);
var easeOut = new KeyframeEase(0.75, 85);
var myScaleProperty = app.project.item(1).layer(1).property("Scale")
myScaleProperty.setTemporalEaseAtKey(2, [easeIn, easeIn, easeIn], [easeOut, easeOut, easeOut]);
```

## MarkerValue

### MarkerValue object

new MarkerValue(comment, chapter, url, frameTarget, cuePointName, params)

### Description

A layer or composition marker is what the MarkerValue object stands for. To a specific spot in a layer it attaches a comment, plus — if you want them — a chapter reference point, a Web-page link, or a Flash Video cue point.

Build one with the constructor; every argument other than comment may be skipped.

Each argument is a string assigned into the matching attributes of the MarkerValue object that comes back, the lone exception being params; that one is an array of key-value pairs you then reach through the getParameters() and setParameters() methods.

Any number of parameter pairs can be set by a script; their order has no bearing on how they appear in the application.

Binding a marker to a layer means putting the MarkerValue object into the layer's Layer.marker property: layerObject.property("Marker").setValueAtTime(time, markerValueObject);

Binding a marker to a composition means putting the MarkerValue object into the comp's CompItem.markerProperty property: compObject.markerProperty.setValueAtTime(time, markerValueObject);

For details on how markers are used, consult "Using markers" within After Effects Help.

### Examples

```
var myMarker = new MarkerValue("FadeUp");
myLayer.property("Marker").setValueAtTime(2, myMarker);
// or
myLayer.marker.setValueAtTime(2, myMarker);
```

```
var myMarker = new MarkerValue("FadeUp");
comp.markerProperty.setValueAtTime(2, myMarker);
```

```
var layer = app.project.item(1).layer(1);
var markerProperty = layer.marker;

var commentOfFirstMarker = markerProperty.keyValue(1).comment;

// or
var commentOfMarkerAtTime4 = markerProperty.valueAtTime(4.0, true).comment;

// or
var markerValueAtTimeClosestToTime4 = markerProperty.keyValue(markerProperty.nearestKeyIndex(4.0));
var commentOfMarkerClosestToTime4 = markerValueAtTimeClosestToTime4.comment;
```

## Preferences

### Preferences object

app.preferences

### Description

Through the Preferences object you get a convenient handle on After Effects' internal preferences — the same ones surfaced under AE's Preferences menu. Stored in the After Effects preference files, they survive from one application session to the next.

Every preference is located by its section plus its key inside the file, and each key name pairs with one value.

Within the preferences file, brackets and quotation marks wrap each section name, while key names sit in quotation marks underneath the section name. Strings hold all of the values.

Beyond reading preferences that already exist, this object lets you add brand-new ones.

Starting with Version 12/CC, the preferences and settings methods accept a third argument naming the target preferences file, used whenever the Section/Key does not reside in "Adobe After Effects $versionNumber.x Prefs.txt".

Omit that third argument and the default — PREFType.`PREF_T`ype\_`MACHINE_SPECIFIC` — applies, so After Effects reads from or writes to the "Adobe After Effects $versionNumber.x Prefs.txt" preferences file.

### PREFType Enum

For the third argument, supply one of these enum PREFType values:

- `PREF_T`ype\_`MACHINE_SPECIFIC`: Adobe After Effects $versionNumber.x Prefs.txt
- `PREF_T`ype\_`MACHINE_INDEPENDENT`: Adobe After Effects $versionNumber.x Prefs-indep-general.txt
- `PREF_T`ype\_`MACHINE_INDEPENDENT_RENDER`: Adobe After Effects $versionNumber.x Prefs-indep-render.txt
- `PREF_T`ype\_`MACHINE_INDEPENDENT_OUTPUT`: Adobe After Effects $versionNumber.x Prefs-indep-output.txt
- `PREF_T`ype\_`MACHINE_INDEPENDENT_COMPOSITION`: Adobe After Effects $versionNumber.x Prefs-indep-composition.txt
- `PREF_T`ype\_`MACHINE_SPECIFIC_TEXT`: Adobe After Effects $versionNumber.x Prefs-text.txt
- `PREF_T`ype\_`MACHINE_SPECIFIC_PAINT`: Adobe After Effects $versionNumber.x Prefs-paint.txt

## Settings

### Settings object

app.settings

### Description

The Settings object hands third-party scripts a simple way to keep track of their own settings. They sit inside the main After Effects preferences file and persist from one application session to the next.

A section plus a key inside the file pinpoint each setting, and every key name is tied to one value.

Inside the settings file, brackets and quotation marks surround each section name, with key names quoted on the lines beneath the section name. Every value is a string.

Alongside reaching existing settings, this object also lets you create fresh ones.

Starting with Version 12/CC, the preferences and settings methods accept a third argument that names the target preferences file whenever the Section/Key is missing from the main preferences file. See Preferences object for more info.

Tip

- AE doesn't carry these values across versions; every fresh install lays down new settings files, so the prefs start over.
- Behind the scenes, "Settings\_" is prepended to the section name of every stored setting.
- To read or write internal AE preferences instead, see Preferences object

## Shape

### Shape object

app.project.item(index).layer(index).property(index).property("maskShape").value

### Description

A Shape object bundles up the data that describes either a shape inside a shape layer or the outline of a Mask. It serves as the value behind the "Mask Path" AE properties and behind a shape layer's "Path" AE property. Build a fresh, empty Shape object with the constructor new Shape(), then assign each attribute on its own to spell out the shape.

Every shape carries a collection of anchor points (its vertices) plus, for each anchor point, a pair of direction handles known as tangent vectors. In a mask that isn't RotoBezier, a tangent vector sets the heading of the line drawn into or out of an anchor point. Each vertex in the shape owns one incoming tangent vector and one outgoing tangent vector.

A tangent value is given as an x,y coordinate pair measured relative to the vertex it belongs to. Take a tangent of [-1,-1]: it sits up and to the left of the vertex at a 45 degree slope, no matter where the vertex actually lands. A longer handle pulls harder — an incoming segment hugs the vector more tightly for an inTangent of [-2,-2] than for one of [-1,-1], though both approach the vertex from an identical direction.

When a shape stays open, the inTangent of the first vertex and the outTangent of the last vertex are disregarded. When it is closed, those two vectors govern the direction handles of the final segment that runs out of the last vertex and loops back into the first.

Tangents on RotoBezier masks are worked out for you automatically. (See MaskPropertyGroup.rotoBezier) Put a shape inside a RotoBezier mask and its tangent values get disregarded. So for RotoBezier masks you can lay out a shape by assigning only the vertices attribute while leaving both inTangents and outTangents null. Read the new shape back and you'll find its tangent values populated with the automatically computed ones.

On closed mask shapes, variable-width mask feather points may sit anywhere along the mask path. These feather points belong to the Mask Path property. Pick out a given feather point by the segment number of the mask path — that is, the stretch of path lying between two adjacent vertices — where it sits.

Tip

A mask's feather points appear in an array ordered by when each one was created.

### Examples

```
var myShape = new Shape();
myShape.vertices = [[0,0], [0,100], [100,100], [100,0]];
myShape.closed = true;
```

```
var myShape = new Shape();
myShape.vertices = [[0,0], [0,100], [100,100], [100,0]];
myShape.closed = false;
```

```
var myShape = new Shape();
myShape.vertices = [[300,50], [200,150],[300,250],[400,150]];
myShape.inTangents = [[55.23,0],[0,-55.23],[-55.23,0],[0,55.23]];
myShape.outTangents = [[-55.23,0],[0,55.23],[55.23,0],[0,-55.23]];
myShape.closed = true;
```

```
var myShape = new Shape();
myShape.vertices = [[100,100], [100,400], [400,400], [400,100]]; // segments drawn counter clockwise
myShape.closed = true;
myShape.featherSegLocs = [1, 2]; // segments are numbered starting at 0, so second segment is 1
myShape.featherRelSegLocs = [0.15, 0.5]; // 0.15 is closer to the lower-left corner of the square
myShape.featherRadii = [30, 100]; // second feather point (onright-sidesegment) has a larger radius
```

## View

### View object

app.activeViewer.views[0]

### Description

One particular view is what the View object stands for.

## Viewer

### Viewer object

app.activeViewer

### Description

A Composition, Layer, or Footage panel is what the Viewer object stands for.

### Example

The following pushes the active viewer panel to its maximum size and, if a composition is loaded, reports its type.

```
var activeViewer = app.activeViewer;
activeViewer.maximized = true;
if (activeViewer.type === ViewerType.VIEWER_COMPOSITION) {
    alert("Composition panel is active.");
}
```

## ViewOptions

### ViewOptions object

app.activeViewer.views[0].options

### Description

For a given View object, its options are what the ViewOptions object holds

### Example

The following switches on checkerboards and locks the guides for one view

```
var activeViewer = app.activeViewer;
var viewOptions = activeViewer.views[0].options;
viewOptions.checkerboards = true;
viewOptions.guidesLocked = true;
```

## Top-Level

### AVLayer Match Names — Top-Level

| Match Name | Display Name (EN) |
| --- | --- |
| ADBE Marker | Marker |
| ADBE Time Remapping | Time Remap |
| ADBE MTrackers | Motion Trackers |
| ADBE Mask Parade | Masks |
| ADBE Effect Parade | Effects |
| ADBE Layer Overrides | Essential Properties |
