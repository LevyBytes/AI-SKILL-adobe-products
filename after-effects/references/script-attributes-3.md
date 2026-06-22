# Attributes (part 3)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Layer object — Attributes

### Layer.autoOrient

app.project.item(index).layer(index).autoOrient

### Description

Which style of automatic orientation the layer should use.

### Type

An AutoOrientType enumerated value; read/write. One of:

- AutoOrientType.`ALONG_PATH` Layer faces in the direction of the motion path.
- AutoOrientType.`CAMERA_OR_POINT_OF_INTEREST` Layer always faces the active camera or points at its point of interest.
- AutoOrientType.`CHARACTERS_TOWARD_CAMERA` Each character in a per-character 3D text layer automatically faces the active camera.
- AutoOrientType.`NO_AUTO_ORIENT` Layer rotates freely, independent of any motion path, point of interest, or other layers.

### Layer.comment

app.project.item(index).layer(index).comment

### Description

A free-text note describing the layer.

### Type

String; read/write.

### Layer.containingComp

app.project.item(index).layer(index).containingComp

### Description

Whichever composition this layer lives in.

### Type

CompItem object; read-only.

### Layer.hasVideo

app.project.item(index).layer(index).hasVideo

### Description

true when the layer carries a video switch — the eyeball icon — in the Timeline panel; false when it does not.

### Type

Boolean; read-only.

### Layer.id

app.project.item(index).layer(index).id

Note

This functionality was added in After Effects 22.0 (2022)

### Description

A property on each Layer instance that yields a stable, one-of-a-kind identification number used behind the scenes to tell one Layer from another across sessions.

Saving the project to a file and reopening it later leaves the ID unchanged.

Import that project into a different project, though, and fresh IDs are handed out to all of the imported project's Layers. Nowhere in the user interface is the ID shown..

### Type

Integer; read-only.

### Layer.index

app.project.item(index).layer(index).index

### Description

Where the layer sits in the stacking order.

### Type

Integer, in the range [1..numLayers]; read-only.

### Layer.inPoint

app.project.item(index).layer(index).inPoint

### Description

The layer's "in" point, given in composition time (seconds).

### Type

Floating-point value, in the range [-10800.0..10800.0] (minus or plus three hours); read/write.

### Layer.isNameSet

app.project.item(index).layer(index).isNameSet

### Description

true when the name attribute was assigned on purpose instead of being filled in automatically from the source.

Tip

Whenever a layer lacks an AVLayer.source, the result is invariably true.

### Type

Boolean; read-only.

### Layer.label

app.project.item(index).layer(index).label

### Description

The item's label color, identified by number (0 stands for None, while 1 through 16 each pick one of the preset colors set in the Labels preferences).

Tip

Custom label colors cannot be set programmatically.

### Type

Integer (0 to 16); read/write.

### Layer.locked

app.project.item(index).layer(index).locked

### Description

true while the layer is locked, false otherwise. It ties to the lock toggle found in the Layer panel.

### Type

Boolean; read/write.

### Layer.marker

app.project.item(index).layer(index).marker

### Description

A PropertyGroup object gathering every marker on a layer. Scripting layer markers behaves identically to scripting Comp markers.

See MarkerValue object.

### Type

PropertyGroup object or null; read-only.

### Example

The snippet below makes two layer markers, each with different properties

```
var solidLayer = comp.layers.addSolid([1, 1, 1], "mylayer", 1920, 1080, 1.0);

var layerMarker = new MarkerValue("This is a layer marker!");
layerMarker.duration = 1;

var layerMarker2 = new MarkerValue("Another comp marker!");
layerMarker2.duration = 1;

solidLayer.marker.setValueAtTime(1, layerMarker);
solidLayer.marker.setValueAtTime(3, layerMarker2);
```

### Layer.nullLayer

app.project.item(index).layer(index).nullLayer

### Description

true when the layer started out as a null object, false otherwise.

### Type

Boolean; read-only.

### Layer.outPoint

app.project.item(index).layer(index).outPoint

### Description

The layer's "out" point, given in composition time (seconds).

### Type

Floating-point value, in the range [-10800.0..10800.0] (minus or plus three hours); read/write.

### Layer.parent

app.project.item(index).layer(index).parent

### Description

This layer's parent, which may be null.

So that setting the parent produces no visible jump in the layer's transform, offset values are worked out to cancel any transforms sitting above this layer in the hierarchy.

To illustrate, when the new parent carries a 30-degree rotation, the child layer is given a -30-degree rotation.

Should you want to set the parent yet leave the child layer's transform values untouched, reach for the setParentWithJump method.

### Type

Layer object or null; read/write.

### Layer.selectedProperties

app.project.item(index).layer(index).selectedProperties

### Description

An array holding each Property and PropertyGroup object selected at the moment in the layer.

### Type

Array of PropertyBase objects; read-only.

### Layer.shy

app.project.item(index).layer(index).shy

### Description

true marks the layer as "shy" — meaning the Layer panel hides it whenever the composition's "Hide all shy layers" option is switched on.

### Type

Boolean; read/write.

### Layer.solo

app.project.item(index).layer(index).solo

### Description

true when the layer is soloed, false otherwise.

### Type

Boolean; read/write.

### Layer.startTime

app.project.item(index).layer(index).startTime

### Description

When the layer begins, given in composition time (seconds).

### Type

Floating-point value, in the range [-10800.0..10800.0] (minus or plus three hours); read/write.

### Layer.stretch

app.project.item(index).layer(index).stretch

### Description

How far the layer is time-stretched, written as a percentage; 100 leaves it unstretched. Anything from 0 up to 1 snaps to 1, and anything from -1 up to but not including 0 snaps to -1.

### Type

Floating-point value, in the range [-9900.0..9900.0]; read/write.

### Layer.time

app.project.item(index).layer(index).time

### Description

Where the layer sits right now, given in composition time (seconds).

### Type

Floating-point value; read-only.

## AVLayer object — Attributes

### AVLayer.adjustmentLayer

app.project.item(index).layer(index).adjustmentLayer

### Description

true if the layer is an adjustment layer.

### Type

Boolean; read/write.

### AVLayer.audioActive

app.project.item(index).layer(index).audioActive

### Description

Reads true when the layer's audio is live at the present time. That requires audioEnabled to be true, no other audio layer to be soloing (unless this layer is soloed as well), and the current time to fall between this layer's inPoint and outPoint.

### Type

Boolean; read-only.

### AVLayer.audioEnabled

app.project.item(index).layer(index).audioEnabled

### Description

When true, the layer's audio is enabled. This maps to the audio toggle switch found in the Timeline panel.

### Type

Boolean; read/write.

### AVLayer.blendingMode

app.project.item(index).layer(index).blendingMode

### Description

The blending mode of the layer.

### Type

A BlendingMode enumerated value; read/write. One of:

- BlendingMode.ADD
- BlendingMode.`ALPHA_ADD`
- BlendingMode.`CLASSIC_COLOR_BURN`
- BlendingMode.`CLASSIC_COLOR_DODGE`
- BlendingMode.`CLASSIC_DIFFERENCE`
- BlendingMode.COLOR
- BlendingMode.`COLOR_BURN`
- BlendingMode.`COLOR_DODGE`
- BlendingMode.`DANCING_DISSOLVE`
- BlendingMode.DARKEN
- BlendingMode.`DARKER_COLOR`
- BlendingMode.DIFFERENCE
- BlendingMode.DISSOLVE
- BlendingMode.DIVIDE
- BlendingMode.EXCLUSION
- BlendingMode.`HARD_LIGHT`
- BlendingMode.`HARD_MIX`
- BlendingMode.HUE
- BlendingMode.LIGHTEN
- BlendingMode.`LIGHTER_COLOR`
- BlendingMode.`LINEAR_BURN`
- BlendingMode.`LINEAR_DODGE`
- BlendingMode.`LINEAR_LIGHT`
- BlendingMode.`LUMINESCENT_PREMUL`
- BlendingMode.LUMINOSITY
- BlendingMode.MULTIPLY
- BlendingMode.NORMAL
- BlendingMode.OVERLAY
- BlendingMode.`PIN_LIGHT`
- BlendingMode.SATURATION
- BlendingMode.SCREEN
- BlendingMode.SUBTRACT
- BlendingMode.`SILHOUETE_ALPHA` - note the mispelling of 'SILHOUETTE'!
- BlendingMode.`SILHOUETTE_LUMA`
- BlendingMode.`SOFT_LIGHT`
- BlendingMode.`STENCIL_ALPHA`
- BlendingMode.`STENCIL_LUMA`
- BlendingMode.SUBTRACT
- BlendingMode.`VIVID_LIGHT`

### AVLayer.canSetCollapseTransformation

app.project.item(index).layer(index).canSetCollapseTransformation

### Description

true when changing this layer's collapseTransformation attribute is permitted.

### Type

Boolean; read-only.

### AVLayer.canSetTimeRemapEnabled

app.project.item(index).layer(index).canSetTimeRemapEnabled

### Description

true when altering the timeRemapEnabled attribute on this layer is allowed.

### Type

Boolean; read-only.

### AVLayer.collapseTransformation

app.project.item(index).layer(index).collapseTransformation

### Description

true when this layer has collapse transformation turned on.

### Type

Boolean; read/write.

### AVLayer.effectsActive

app.project.item(index).layer(index).effectsActive

### Description

true when the layer's effects are running, which the interface signals with the <f> icon beside the layer.

### Type

Boolean; read/write.

### AVLayer.environmentLayer

app.project.item(index).layer(index).environmentLayer

### Description

true when this serves as an environment layer inside a Ray-traced 3D composition. Flipping this attribute to true forces the layer into 3D on its own (threeDLayer turns true).

### Type

Boolean; read/write.

### AVLayer.frameBlending

app.project.item(index).layer(index).frameBlending

### Description

true when the layer has frame blending switched on.

### Type

Boolean; read-only.

### AVLayer.frameBlendingType

app.project.item(index).layer(index).frameBlendingType

### Description

Which kind of frame blending is applied once frame blending is active on the layer.

### Type

A FrameBlendingType enumerated value; read/write. One of:

- FrameBlendingType.`FRAME_MIX`
- FrameBlendingType.`NO_FRAME_BLEND`
- FrameBlendingType.`PIXEL_MOTION`

### AVLayer.guideLayer

app.project.item(index).layer(index).guideLayer

### Description

true if the layer is a guide layer.

### Type

Boolean; read/write.

### AVLayer.hasAudio

app.project.item(index).layer(index).hasAudio

### Description

true whenever the layer carries an audio component, no matter whether that audio is enabled or soloed.

### Type

Boolean; read-only.

### AVLayer.hasTrackMatte

app.project.item(index).layer(index).hasTrackMatte

Note

This functionality was updated in After Effects 23.0. Track Matte is no longer dependent on layer order.

### Description

true when this layer carries a track matte. In that case the layer's trackMatteType value dictates how the matte gets applied.

See AVLayer.trackMatteType for available track matte types.

### Type

Boolean; read-only.

### AVLayer.height

app.project.item(index).layer(index).height

### Description

The height of the layer in pixels.

### Type

Floating-point value; read-only.

### AVLayer.isNameFromSource

app.project.item(index).layer(index).isNameFromSource

### Description

true when the layer carries no deliberately assigned name yet holds a named source; here layer.name ends up matching layer.source.name. It is false if a name was set on the layer explicitly, or if the layer lacks a source altogether.

### Type

Boolean; read-only.

### AVLayer.isTrackMatte

app.project.item(index)layer(index).isTrackMatte

Note

This functionality was updated in After Effects 23.0. Track Matte is no longer dependent on layer order.

### Description

true when this layer is serving as a track matte.

### Type

Boolean; read-only.

### AVLayer.motionBlur

app.project.item(index).layer(index).motionBlur

### Description

true when the layer has motion blur switched on.

### Type

Boolean; read/write.

### AVLayer.preserveTransparency

app.project.item(index).layer(index).preserveTransparency

### Description

true when preserve transparency is active on the layer.

### Type

Boolean; read/write.

### AVLayer.quality

app.project.item(index).layer(index).quality

### Description

The quality with which this layer is displayed.

### Type

A LayerQuality enumerated value; read/write. One of:

- LayerQuality.BEST
- LayerQuality.DRAFT
- LayerQuality.WIREFRAME

### AVLayer.samplingQuality

app.project.item(index).layer(index).samplingQuality

Note

This functionality was added in After Effects 12.0 (CC)

### Description

Reads or assigns the layer's sampling method, either bicubic or bilinear.

### Type

A LayerSamplingQuality enumerated value; read/write. One of:

- LayerSamplingQuality.BICUBIC
- LayerSamplingQuality.BILINEAR

### AVLayer.source

app.project.item(index).layer(index).source

### Description

The source AVItem backing this layer. For a Text layer the value comes back null. To swap it out, call AVLayer.replaceSource().

### Type

AVItem object; read-only.

### AVLayer.threeDLayer

app.project.item(index).layer(index).threeDLayer

### Description

true if this is a 3D layer.

### Type

Boolean; read/write.

### AVLayer.threeDPerChar

app.project.item(index).layer(index).threeDPerChar

### Description

true when the layer has the Enable Per-character 3D switch engaged, which lets its individual characters move off the text layer's flat plane. This pertains to text layers only.

### Type

Boolean; read/write.

### AVLayer.timeRemapEnabled

app.project.item(index).layer(index).timeRemapEnabled

### Description

true when time remapping is turned on for this layer.

### Type

Boolean; read/write.

### AVLayer.trackMatteLayer

app.project.item(index).layer(index).trackMatteLayer

Note

This functionality was added in After Effects 23.0

### Description

Hands back this layer's track matte layer, or null when the layer has none.

### Type

AVLayer object; read only.

### AVLayer.trackMatteType

app.project.item(index).layer(index).trackMatteType

Note

This functionality was updated in After Effects 23.0

Warning

This is a Legacy API we don't recommend using for setting Track Matte Type in new scripts. Please consider using the latest track matte APIs AVLayer.setTrackMatte() and AVLayer.removeTrackMatte() for your tasks.

### Description

When a track matte is present on this layer, this sets how that matte is applied. Assign the TrackMatteType.`NO_TRACK_MATTE` type to strip the track matte off the layer and clear the track matte type back to its default.

### Type

A TrackMatteType enumerated value; read/write. One of:

- TrackMatteType.ALPHA
- TrackMatteType.`ALPHA_INVERTED`
- TrackMatteType.LUMA
- TrackMatteType.`LUMA_INVERTED`
- TrackMatteType.`NO_TRACK_MATTE`

### Example

```
// Returns the current track matte type for myLayer
var type = myLayer.trackMatteType;

// *** We recommend using the new Track Matte APIs for the operations below (See Warning) ***

// Changes the track matte type for myLayer to TrackMatteType.ALPHA_INVERTED
myLayer.trackMatteType = TrackMatteType.ALPHA_INVERTED;

// Removes the track matte and also resets the type
myLayer.trackMatteType = TrackMatteType.NO_TRACK_MATTE;
```

### AVLayer.width

app.project.item(index).layer(index).width

### Description

The width of the layer in pixels.

### Type

Floating-point value; read-only.

## LightLayer object — Attributes

### LightLayer.lightSource:

app.project.item(index).layer(index).lightSource

Note

LightLayer.lightSource was added in After Effects 24.3, but allowed only HDR and EXR layers as sources.

In After Effects 25.2, it was updated to allow any 2D layer type as a source.

### Description

On a light layer, this names the layer that acts as the light source whenever LightLayer.lightType equals LightType.ENVIRONMENT.

You may set LightLayer.lightSource to any 2D video, still, or pre-composition layer sitting in the same composition. Try to hand it a 3D layer and you get an "Invalid light source specified" error.

### LightLayer.lightType

app.project.item(index).layer(index).lightType

Note

LightType.ENVIRONMENT was added in After Effects 24.3

### Description

On a light layer, this is the kind of light it is. Attempting to assign it on a layer that is not a light raises an error.

### Type

A LightType enumerated value; read/write. One of:

- LightType.PARALLEL
- LightType.SPOT
- LightType.POINT
- LightType.AMBIENT
- LightType.ENVIRONMENT

## ParametricMeshLayer object — Attributes

### ParametricMeshLayer.parametricMeshType

app.project.item(index).layer(index).parametricMeshType

Note

This functionality was added in After Effects (Beta) 26.3 and is subject to change while it remains in Beta.

### Description

On a parametric mesh layer, this is its mesh type. Attempting to assign it on a layer that is not a parametric mesh raises an error.

### Type

A ParametricMeshType enumerated value; read/write. One of:

- ParametricMeshType.SPHERE
- ParametricMeshType.PLANE
- ParametricMeshType.CYLINDER
- ParametricMeshType.CONE
- ParametricMeshType.TORUS
- ParametricMeshType.CUBE

### ParametricMeshLayer.parametricMeshOptions

app.project.item(index).layer(index).parametricMeshOptions

Note

This functionality was added in After Effects (Beta) 26.3 and is subject to change while it remains in Beta.

### Description

Reads or writes the specifics of how the parametric mesh is built.

### Type

ParametricMeshOptions based on the ParametricMeshType of the layer, as follows.

### For ParametricMeshType.CUBE

- parametricMeshOptions.width
- parametricMeshOptions.height
- parametricMeshOptions.depth
- parametricMeshOptions.smoothingAngle

### For ParametricMeshType.SPHERE

- parametricMeshOptions.radius
- parametricMeshOptions.sides
- parametricMeshOptions.sliceCaps
- parametricMeshOptions.sliceStart
- parametricMeshOptions.sliceEnd
- parametricMeshOptions.smoothingAngle

### For ParametricMeshType.PLANE

- parametricMeshOptions.width
- parametricMeshOptions.length
- parametricMeshOptions.cornerRadius
- parametricMeshOptions.cornerSides

### For ParametricMeshType.TORUS

- parametricMeshOptions.ringRadius
- parametricMeshOptions.pipeRadius
- parametricMeshOptions.ringSides
- parametricMeshOptions.pipeSides
- parametricMeshOptions.caps
- parametricMeshOptions.sliceStart
- parametricMeshOptions.sliceEnd
- parametricMeshOptions.smoothingAngle

### For ParametricMeshType.CONE

- parametricMeshOptions.topRadius
- parametricMeshOptions.bottomRadius
- parametricMeshOptions.height
- parametricMeshOptions.sides
- parametricMeshOptions.topCap
- parametricMeshOptions.bottomCap
- parametricMeshOptions.sliceCaps
- parametricMeshOptions.sliceStart
- parametricMeshOptions.sliceEnd
- parametricMeshOptions.smoothingAngle

### For ParametricMeshType.CYLINDER

- parametricMeshOptions.radius
- parametricMeshOptions.height
- parametricMeshOptions.sides
- parametricMeshOptions.topCap
- parametricMeshOptions.bottomCap
- parametricMeshOptions.sliceCaps
- parametricMeshOptions.sliceStart
- parametricMeshOptions.sliceEnd
- parametricMeshOptions.smoothingAngle

### ParametricMeshLayer.parametricBevelOptions

app.project.item(index).layer(index).parametricBevelOptions

Note

This functionality was added in After Effects (Beta) 26.3 and is subject to change while it remains in Beta.

### Description

Reads or writes the specifics of how the parametric mesh is beveled.

Info

Only Parametric Mesh Layers with ParametricMeshType.CUBE, ParametricMeshType.CONE, and ParametricMeshType.CYLINDER have parametricBevelOptions.

### Type

ParametricBevelOptions based on the ParametricMeshType of the layer, as follows.

### For ParametricMeshType.CUBE

- parametricBevelOptions.radius
- parametricBevelOptions.sides

### For ParametricMeshType.CONE

- parametricBevelOptions.topRadius
- parametricBevelOptions.topSides
- parametricBevelOptions.bottomRadius
- parametricBevelOptions.bottomSides

### For ParametricMeshType.CYLINDER

- parametricBevelOptions.radius
- parametricBevelOptions.sides

## Property object

app.project.item(index).layer(index).propertySpec

### Description

Value, keyframe, and expression data for one specific AE property of a layer is held by the Property object. An AE property is some value — frequently animatable — that belongs to an effect, a mask, or a transform within a single layer. See PropertyBase object and PropertyGroup.property() for examples of reaching properties.

Info

As a subclass of PropertyBase, Property gives you the whole PropertyBase method and attribute set alongside the ones documented below.

Note

To keep them distinct from After Effects' own notion of a property, the JavaScript objects usually called "properties" are referred to as "attributes" throughout this guide.

### Examples

Get and set the value of opacity:

```
var myProperty = myLayer.opacity;
// opacity has propertyValueType of OneD, and is stored as a float
myProperty.setValue(50); //set opacity to 50%
// Variable my Opacity is a float value
var myOpacity = myProperty.value;
```

Get and set the value of a position:

```
var myProperty = myLayer.position;
// position has propertyValueType of ThreeD_SPATIAL, and is stored as an array of 3 floats
myProperty.setValue([10.0, 30.0, 0.0]);
// Variable my Position is an array of 3 floats
var myPosition = myProperty.value;
```

Change the value of a mask shape to be open instead of closed:

```
var myMask = mylayer.mask(1);
var myProperty = myMask.maskPath;
myShape = myProperty.value;
myShape.closed = false;
myProperty.setValue(myShape);
```

Get the value of a color at a particular time. A color is stored as an array of four floats, [r, g, b, opacity]. This sets the value of the red component of a light's color at time 4 to be half of that at time 2:

```
var myProperty = myLight.color;
var colorValue = myProperty.valueAtTime(2, true);
colorValue[0] = 0.5 * colorValue[0];
myProperty.setValueAtTime(4, colorValue);
```

Check that a scale calculated by an expression at time 3.5 is the expected value of [10,50]:

```
var myProperty = myLayer.scale;
// false value of preExpression means evaluate the expression
var scaleValue = myProperty.valueAtTime(3.5, false);

if (scaleValue[0] === 10 && scaleValue[1] === 50) {
    alert("hurray");
} else {
    alert("oops");
}
```

Keyframe a rotation from 0 to 90 and back again. The animation is 10 seconds, and the middle keyframe is at the 5 second mark. Rotation properties are stored as a OneD value:

```
var myProperty = myLayer.rotation;
myProperty.setValueAtTime(0, 0);
myProperty.setValueAtTime(5, 90);
myProperty.setValueAtTime(10, 0);
```

Change the key frame values for the first three keyframes of some sourcetext:

```
var myProperty = myTextLayer.sourceText;
if (myProperty.numKeys < 3) {
    alert("error, I thought there were 3 keyframes");
} else {
    myProperty.setValueAtKey(1, newTextDocument("keynumber1"));
    myProperty.setValueAtKey(2, newTextDocument("keynumber2"));
    myProperty.setValueAtKey(3, newTextDocument("keynumber3"));
}
```

Set values using the convenience syntax for position, scale, color, or source text:

```
// These two are equivalent. The second fills in a default of 0.
myLayer.position.setValue([20, 30, 0]);
myLayer.position.setValue([20, 30]);
// These two are equivalent. The second fills in a defaultof 100.
myLayer.scale.setValue([50, 50, 100]);
myLayer.scale.setValue([50, 50]);
// These two are equivalent. The second fills in a defaultof 1.0
myLight.color.setValue([0.8, 0.3, 0.1, 1.0]);
myLight.color.setValue([0.8, 0.3, 0.1]);
// These two are equivalent. The second creates a TextDocument
myTextLayer.sourceText.setValue(newTextDocument("foo"));
myTextLayer.sourceText.setValue("foo");
```
