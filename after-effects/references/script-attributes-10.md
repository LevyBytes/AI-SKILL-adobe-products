# Attributes (part 10)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## ImportOptions object — Attributes

### ImportOptions.file

importOptions.file

### Description

The file slated for import. When the constructor was handed a file, this attribute is how you reach it.

### Type

Extendscript File object; read/write.

### ImportOptions.forceAlphabetical

importOptions.forceAlphabetical

### Description

Setting this true does the same thing as ticking "Force alphabetical order" in the File > Import > File dialog box.

### Type

Boolean; read/write.

### ImportOptions.importAs

importOptions.importAs

### Description

Which kind of object the imported file will serve as the source for. Ahead of setting it, call canImportAs to verify the file is allowed to come in as the source of that object type.

### Type

An ImportAsType enumerated value; read/write. One of:

- ImportAsType.`COMP_CROPPED_LAYERS`
- ImportAsType.FOOTAGE
- ImportAsType.COMP
- ImportAsType.PROJECT

### ImportOptions.rangeEnd

importOptions.rangeEnd

Warning

This method/property is officially undocumented and was found via research. The information here may be inaccurate, and this whole method/property may disappear or stop working some point. Please contribute if you have more information on it!

### Description

Defines where the clipping range of the sequence being imported stops.

- Produces 'missing frames' (video-bards) when rangeEnd runs past the length of the sequence being imported.
- Does nothing when sequence is false.
- Raises an exception when forceAlphabetical is true.
- Raises an exception when rangeEnd is below rangeStart, and snaps the range back to all the files.

### Type

Integer; read/write.

### ImportOptions.rangeStart

importOptions.rangeStart

Warning

This method/property is officially undocumented and was found via research. The information here may be inaccurate, and this whole method/property may disappear or stop working some point. Please contribute if you have more information on it!

### Description

Defines where the clipping range of the sequence being imported starts.

- Does nothing when sequence is false.
- Raises an exception when forceAlphabetical is true.
- Raises an exception when the rangeEnd value is 0.
- Raises an exception when rangeStart sits above rangeEnd, and snaps the range back to all the files.

### Type

Integer; read/write.

### Example

```
/*
    Import 20 frames of the sequence, starting at frame 10 and ending at frame 30
 */
var mySequence = '~/Desktop/sequence/image_000.png';

var importOptions = new ImportOptions();
importOptions.file = new File(mySequence);
importOptions.sequence = true;
importOptions.forceAlphabetical = false;
importOptions.rangeStart = 10;
importOptions.rangeEnd = 30;

var item = app.project.importFile(importOptions);
```

### ImportOptions.sequence

importOptions.sequence

### Description

True brings in a sequence; false brings in a single standalone file.

### Type

Boolean; read/write.

## KeyframeEase object — Attributes

### KeyframeEase.influence

myKey.influence

### Description

The keyframe's influence figure, the one the Keyframe Velocity dialog box displays.

### Type

Floating-point value, in the range [0.1..100.0]; read/write.

### KeyframeEase.speed

myKey.speed

### Description

The keyframe's speed figure. What unit applies hinges on the keyframe type, and the Keyframe Velocity dialog box shows it.

### Type

Floating-point value; read/write.

## MarkerValue object — Attributes

### MarkerValue.chapter

app.project.item(index).layer(index).property("Marker").keyValue(index).chapter

### Description

Holds a chapter-link string carried by this marker. Such links trigger a jump to a chapter inside a QuickTime movie, or inside any other format whose chapter marks are supported.

### Type

String; read/write.

### MarkerValue.comment

app.project.item(index).layer(index).property("Marker").keyValue(index).comment

### Description

Holds a free-text note attached to this marker. The Timeline panel shows the note beside the relevant layer marker.

### Type

String; read/write.

### MarkerValue.cuePointName

app.project.item(index).layer(index).property("Marker").keyValue(index).cuePointName

### Description

Carries the cue point's name for Flash Video, matching what the Marker dialog box displays.

### Type

String; read/write.

### MarkerValue.duration

app.project.item(index).layer(index).property("Marker").keyValue(index).duration

### Description

How long the marker lasts, measured in seconds. On the Timeline panel this length renders as a short bar reaching out from where the marker sits.

### Type

Floating-point value; read/write.

### MarkerValue.eventCuePoint

app.project.item(index).layer(index).property("Marker").keyValue(index).eventCuePoint

### Description

A value of true marks the FlashVideo cue point as an event type; false instead designates it for navigation.

### Type

Boolean; read/write.

### MarkerValue.frameTarget

app.project.item(index).layer(index).property("Marker").keyValue(index).frameTarget

### Description

Supplies a frame-target string for the marker. Paired with the URL value, it aims at one particular frame inside a Web page.

### Type

String; read/write.

### MarkerValue.url

app.project.item(index).layer(index).property("Marker").keyValue(index).url

### Description

Stores a URL on this marker that links automatically to a Web page.

### Type

String; read/write.

### MarkerValue.label

app.project.item(index).layer(index).property("Marker").keyValue(index).label

### Description

The marker's label color, applied to a composition or layer marker. Each color maps to a number — 0 means None, while 1 through 16 each pick one of the preset swatches defined under Labels preferences. There is no way to assign a custom label color through scripting.

Available in After Effects 16.0 or later.

### Type

Integer (0 to 16); read/write.

app.project.item(index).markerProperty.keyValue(index).protectedRegion

### Description

Reflects whether the Protected Region option is enabled in the Composition Marker dialog box. While true, the composition marker acts as a protected region. The value also comes back true for protected-region markers sitting on nested composition layers, though for ordinary layer markers it has no meaning.

Available in After Effects 16.0 or later.

### Type

Boolean; read/write.

## Shape object — Attributes

### Shape.closed

shapeObject.value.closed

### Description

A value of true joins the first vertex to the last to make a closed curve; a value of false leaves that closing segment undrawn.

### Type

Boolean; read/write.

### Shape.featherInterps

shapeObject.value.featherInterps

### Description

An array giving the radius interpolation type of every feather point (0 for feather points that aren't Hold, 1 for Hold feather points).

Tip

The array keeps values in the same order the feather points were created.

### Type

Array of integers (0 or 1); read/write.

### Shape.featherRadii

shapeObject.value.featherRadii

### Description

An array giving each feather point's radius — its feather amount — where inner feather points carry negative values.

Tip

The array keeps values in the same order the feather points were created.

### Type

Array of floating-point values; read/write.

### Shape.featherRelCornerAngles

shapeObject.value.featherRelCornerAngles

### Description

An array giving each feather point's relative angle percentage taken between the two normals flanking a curved outer feather boundary at a corner of a mask path. For feather points that aren't on corners, that angle reads 0%.

Tip

The array keeps values in the same order the feather points were created.

### Type

Array of floating-point percentage values (0 to 100); read/write.

### Shape.featherRelSegLocs

shapeObject.value.featherRelSegLocs

### Description

An array giving each feather point's relative position, ranging 0 to 1, along its mask path segment (the stretch of mask path between vertices, numbered from 0).

Tip

The array keeps values in the same order the feather points were created. Shifting a feather point onto a different mask path segment means first updating the featherSegLocs attribute value, then this one.

### Type

Array of floating-point values (0 to 1); read/write.

### Shape.featherSegLocs

shapeObject.value.featherSegLocs

### Description

An array giving each feather point's mask path segment number (the stretch of mask path between vertices, numbered from 0).

Tip

The array keeps values in the same order the feather points were created. Relocate a feather point to a different segment by adjusting both its segment number (this attribute) and, if you like, its featherRelSegLocs attribute value.

### Type

Array of integers; read/write.

### Example

```
// Assuming a rectangle closed mask (segments numbered 0-3) has 3 mask feather points,
// move all 3 feather points to the first mask segment.

// Get the Shape object for the mask, assumed here to be the first mask on the layer.
var my_maskShape = layer.mask(1).property("ADBE Mask Shape").value;

// Check where mask feather points are located.
// Note: They are stored in the order that they are added.
var where_are_myMaskFeatherPoints = my_maskShape.featherSegLocs;

// Move all 3 feather points to the first mask segment (numbered 0).
my_maskShape.featherSegLocs = [0, 0, 0];

// Update the mask path.
layer.mask(1).property("ADBE Mask Shape").setValue(my_maskShape);
```

### Shape.featherTensions

shapeObject.value.featherTensions

### Description

An array giving each feather point's tension amount, spanning 0 (0% tension) through 1 (100% tension).

Tip

The array keeps values in the same order the feather points were created.

### Type

Array of floating-point values (0 to 1); read/write.

### Shape.featherTypes

shapeObject.value.featherTypes

### Description

An array giving each feather point's direction — either 0 for an outer feather point or 1 for an inner one.

Tip

Once a feather point exists, its direction is fixed and can't be switched. The array keeps values in the same order the feather points were created.

### Type

Array of integers (0 or 1); read/write.

### Shape.inTangents

shapeObject.value.inTangents

### Description

The incoming tangent vectors — the direction handles — paired with the shape's vertices. Give each vector as a two-element array of floating-point values, and gather those vectors into an array matching the length of the vertices array.

Every tangent value starts out at [0,0]. On a mask that isn't RotoBezier, that produces a straight line segment.

Should the shape belong to a RotoBezier mask, all tangent values are disregarded and the tangents are computed automatically.

### Type

Array of floating-point pair arrays; read/write.

### Shape.outTangents

shapeObject.value.outTangents

### Description

The outgoing tangent vectors — the direction handles — paired with the shape's vertices. Give each vector as a two-element array of floating-point values, and gather those vectors into an array matching the length of the vertices array.

Every tangent value starts out at [0,0]. On a mask that isn't RotoBezier, that produces a straight line segment.

Should the shape belong to a RotoBezier mask, all tangent values are disregarded and the tangents are computed automatically.

### Type

Array of floating-point pair arrays; read/write.

### Shape.vertices

shapeObject.value.vertices

### Description

The shape's anchor points. Give each point as a two-element array of floating-point values, and gather the point pairs into one array holding the full set of points.

### Example

```
myShape.vertices = [[0,0], [0,1], [1,1], [1,0]];
```

### Type

Array of floating-point pair arrays; read/write.

## View object — Attributes

### View.active

app.activeViewer.views[0].active

### Description

True here signals that the viewer panel holds focus and is therefore frontmost.

### Type

Boolean; read-only.

### View.options

app.activeViewer.views[0].options

### Description

This View's Options object

### Type

ViewOptions object

## Viewer object — Attributes

### Viewer.active

viewer.active

### Description

True here signals that the viewer panel holds focus and is therefore frontmost.

### Type

Boolean; read-only.

### Viewer.activeViewIndex

viewer.activeViewIndex

### Description

Where the current active View object falls within the Viewer.views array.

### Type

Integer; read/write.

### Viewer.maximized

viewer.maximized

### Description

True here signals that the viewer panel is sized to its maximum.

### Type

Boolean; read/write.

### Viewer.views

viewer.views

### Description

The full set of Views belonging to this viewer.

### Type

Array of View object objects; read-only.

### Viewer.type

viewer.type

### Description

Whatever the viewer panel currently holds.

### Type

A ViewerType enumerated value; read-only. One of:

- ViewerType.`VIEWER_COMPOSITION`
- ViewerType.`VIEWER_LAYER`
- ViewerType.`VIEWER_FOOTAGE`

## ViewOptions object — Attributes

### ViewOptions.channels

app.activeViewer.views[0].options.channels

### Description

Where the Channels menu currently stands.

### Type

A ChannelType enumerated value; read/write. One of:

- `CHANNEL_ALPHA`
- `CHANNEL_ALPHA_BOUNDARY`
- `CHANNEL_ALPHA_OVERLAY`
- `CHANNEL_BLUE`
- `CHANNEL_BLUE_COLORIZE`
- `CHANNEL_GREEN`
- `CHANNEL_GREEN_COLORIZE`
- `CHANNEL_RED`
- `CHANNEL_RED_COLORIZE`
- `CHANNEL_RGB`
- `CHANNEL_RGB_STRAIGHT`

### ViewOptions.checkerboards

app.activeViewer.views[0].options.checkerboards

### Description

True here turns on the checkerboard transparency grid for the current view.

### Type

Boolean; read/write.

### ViewOptions.exposure

app.activeViewer.views[0].options.exposure

### Description

What exposure the current view is set to.

### Type

Floating-point value, in the range [-40..40]

### ViewOptions.fastPreview

app.activeViewer.views[0].options.fastPreview

Note

This functionality was added in After Effects 12.0 (CC)

### Description

Where the Fast Previews menu currently stands. The attribute is read/write and takes an enumerated value:

Warning

Try to read or set this attribute while in the Layer or Footage panel and an error message comes back.

Tip

Draft preview mode works only inside ray-traced 3D compositions. Attempt it in a Classic 3D composition and the error reads: "Cannot set Draft fast preview mode in a Classic 3D composition."

### Type

A FastPreviewType enumerated value; read/write. One of:

- FastPreviewType.`FP_OFF`: Off (Final Quality)
- FastPreviewType.`FP_ADAPTIVE_RESOLUTION`: Adaptive Resolution
- FastPreviewType.`FP_DRAFT`: Draft
- FastPreviewType.`FP_FAST_DRAFT`: Fast Draft
- FastPreviewType.`FP_WIREFRAME`: Wireframe

### Example

```
app.activeViewer.views[0].options.fastPreview === FastPreviewType.FP_ADAPTIVE_RESOLUTION;
app.activeViewer.views[0].options.fastPreview === FastPreviewType.FP_DRAFT;
app.activeViewer.views[0].options.fastPreview === FastPreviewType.FP_FAST_DRAFT;
app.activeViewer.views[0].options.fastPreview === FastPreviewType.FP_OFF;
app.activeViewer.views[0].options.fastPreview === FastPreviewType.FP_WIREFRAME;
```

### ViewOptions.guidesLocked

app.activeViewer.views[0].options.guidesLocked

Note

This functionality was added in After Effects 16.1 (CC 2019)

### Description

True here means the view's guides are locked.

### Type

Boolean; read/write.

### Example

```
app.activeViewer.views[0].options.guidesLocked;
```

### ViewOptions.guidesSnap

app.activeViewer.views[0].options.guidesSnap

Note

This functionality was added in After Effects 16.1 (CC 2019)

### Description

True here means layers snap onto guides as you drag them within the view.

### Type

Boolean; read/write.

### Example

```
app.activeViewer.views[0].options.guidesSnap;
```

### ViewOptions.guidesVisibility

app.activeViewer.views[0].options.guidesVisibility

Note

This functionality was added in After Effects 16.1 (CC 2019)

### Description

True here means the view's guides are showing.

### Type

Boolean; read/write.

### Example

```
app.activeViewer.views[0].options.guidesVisibility;
```

### ViewOptions.rulers

app.activeViewer.views[0].options.rulers

Note

This functionality was added in After Effects 16.1 (CC 2019)

### Description

True here means the view displays its rulers.

### Type

Boolean; read/write.

### Example

```
app.activeViewer.views[0].options.rulers;
```

### ViewOptions.zoom

app.activeViewer.views[0].options.zoom

### Description

Sets how far the view is zoomed, given as a normalized percentage running from 1% (0.01) up to 1600% (16).

### Type

Floating-point value, in the range [0.01..16]
