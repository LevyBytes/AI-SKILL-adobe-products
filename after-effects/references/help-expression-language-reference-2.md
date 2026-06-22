# Expression Language Reference (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Dropdown Menu attributes (expression reference)

After Effects now lets you pull the text strings out of dropdown menu properties through both expressions and scripting. With this update you can:

- Show dropdown text straight in text layers, with no separate string arrays to keep around.
- Drive dynamic interfaces inside Motion Graphics templates, where the text follows whatever the dropdown selects.
- Cut upkeep by dropping the duplicate string lists that tend to drift out of sync.

text

Return type: String

Fetches the text of whichever dropdown menu item is selected at the current composition time.

Syntax: dropdownProperty.text

As your expression is evaluated, After Effects grabs and returns the text string belonging to the dropdown menu item currently selected. Should that selection be animated (carry keyframes), text follows along and returns the right text for each frame as the selection shifts.

For shared projects or Motion Graphics Templates, our advice is to keep driving expression logic off the dropdown menu index rather than off matching strings, because indexes hold up better. Some dropdown text shifts with the application language, and that breaks expressions.

items

Return type: Array of Strings

Fetches an array holding every text string in the dropdown menu, kept in order.

Syntax: dropdownProperty.items

What comes back is an ordinary JavaScript array: index 0 holds the first menu item's text, index 1 holds the second menu item's text, and onward from there.

Note

Whereas dropdown menu values count from 1, JavaScript array indexes count from 0. A dropdown menu whose value is 3 therefore exposes its text at items[2]. Each separator item "(-" — the divider line shown in the dropdown menu — lands in the array as the string "(-".

textAtTime(time)

Return type: String

Fetches the text of the selected dropdown menu item at a chosen time, much as valueAtTime() does for other properties.

Syntax: dropdownProperty.textAtTime(time)

The time parameter (Number) is the moment in seconds at which to sample the dropdown menu. It accepts either an absolute time or a relative time expression like time - 1 (one second back).

Think of this as the time-aware counterpart to .text. Rather than reading the text on the current frame, you name exactly which time to sample. That makes it especially handy for delayed effects, for weighing current against previous selections, or for assembling intricate time-based logic.

## Footage attributes and methods (expression reference)

A footage item from the Project panel becomes an expression object through the global footage method — footage("file_name"). Alternatively, reach a footage object via the source attribute of a layer whose source is itself a footage item.

width

Return type: Number.

Reports the footage item's width, in pixels.

height

Return type: Number.

Reports the footage item's height, in pixels.

duration

Return type: Number.

Reports the footage item's duration, in seconds.

frameDuration

Return type: Number.

Reports a frame's duration within the footage item, in seconds.

ntscDropFrame

Return type: Boolean.

Comes back true when the timecode uses drop-frame format. (After Effects CS5.5 and later.)

pixelAspect

Return type: Number.

Reports the footage item's pixel aspect ratio.

name

Return type: String.

Reports the footage item's name as it appears in the Project panel.

sourceText

Return type: String or TextDocument

Stands for the present value of the layer's Source Text property. Where the text carries formatting attributes, a TextDocument object is returned.

sourceData

Return type: Varies (Number, Array, Boolean, Object)

Stands for the data tied to the property under Data-Driven Animation. The data evaluated at the current time is returned.

dataValue(dataPath)

Return type: Varies (Number, Array, Boolean, String, etc.)

Argument type: dataPath is a String.

Pulls the value sitting at the named data path inside a data-driven layer (JSON, say). The value at the current time is returned.

dataKeyCount(dataPath)

Return type: Number

Argument type: dataPath is a String.

Counts the keyframes present along the named data path within a data-driven property.

dataKeyTimes(dataPath, t0 = startTime, t1 = endTime)

Return type: Array (Times in seconds)

Argument types:

dataPath is a String.

t0 and t1 are Numbers (optional).

Pulls an array of keyframe times (in seconds) for the data path, narrowed to the time range you give.

dataKeyValues(dataPath, t0 = startTime, t1 = endTime)

Return type: Array (Values)

Argument types:

dataPath is a String.

t0 and t1 are Numbers (optional).

Pulls an array of keyframe values for the data path, narrowed to the time range you give.

## Layer Sub-objects attributes and methods (expression reference)

source

Return type: Comp or Footage.

Hands back the layer's source Comp or source Footage object. The default time gets shifted to match the time in the source. Example: source.layer(1).position

sourceTime(t = time)

Return type: Number.

Hands back the layer source matching time t. (After Effects CS5.5 and later.)

sourceRectAtTime(t = time, includeExtents = false)

Return type: JavaScript object with four attributes: [top, left, width, height]. Extents apply only to shape layers, increasing the size of the layer bounds as necessary, and paragraph text layers (After Effects 15.1 and later), where it returns the bounds of the paragraph box. Example: myTextLayer.sourceRectAtTime().width.

effect(name)

Return type: Effect.

Argument type: name is a String.

After Effects looks the effect up by its name in the Effect Controls panel. That name may be the default one or one you assigned. When two effects carry the same name, the one nearest the top of the Effect Controls panel takes precedence. Example:

effect("Fast Blur")("Blurriness")

effect(index)

Return type: Effect.

Argument type: index is a Number.

After Effects looks the effect up by its index in the Effect Controls panel, beginning at 1 and counting downward from the top.

mask(name)

Return type: Mask.

Argument type: name is a String.

The name may be the default one or one you assigned. When two masks carry the same name, the topmost mask takes precedence. Example:

mask("Mask 1")

mask(index)

Return type: Mask.

Argument type: index is a Number.

After Effects looks the mask up by its index in the Timeline panel, beginning at 1 and counting downward from the top.

## Layer General attributes and methods (expression reference)

width

Return type: Number.

Reports the layer's width, in pixels. This equals source.width.

height

Return type: Number.

Reports the layer's height, in pixels. This equals source.height.

index

Return type: Number.

Reports the layer's index number within the composition.

parent

Return type: Layer, Light, or Camera.

Hands back the layer's parent Layer object when one exists. Example: position[0] + parent.width

hasParent

Return type: Boolean.

Comes back true when the layer has a parent, false when it doesn't.

Lean on the hasParent attribute to test whether a layer is parented. It works even while the layer currently lacks a parent. Take the expression below: it makes the layer it's applied to wiggle off the parent's position. With no parent, the layer wiggles off its own position instead. Attach a parent later, and the layer's behavior shifts to match:

idx = index; if (hasParent) { idx = parent.index; } thisComp.layer(idx).position.wiggle(5,20)

inPoint

Return type: Number.

Reports the layer's In point, in seconds.

Note

Typically outPoint exceeds inPoint. But reverse a layer in time and inPoint comes out larger than outPoint. By the same token, startTime can run larger than inPoint.

outPoint

Return type: Number.

Reports the layer's Out point, in seconds.

startTime

Return type: Number.

Reports the layer's start time, in seconds.

hasVideo

Return type: Boolean.

Comes back true when the layer carries video, false when it doesn't.

hasAudio

Return type: Boolean.

Comes back true when the layer carries audio, false when it doesn't.

active

Return type: Boolean.

Comes back true when the layer's Video switch is on and the current time falls inside the layer's In-point-to-Out-point range; otherwise false.

enabled

Return type: Boolean.

Comes back true when the layer's Video switch is on; otherwise false.

audioActive

Return type: Boolean.

Comes back true when the layer's Audio switch is on and the current time falls inside the layer's In-point-to-Out-point range; otherwise false.

sampleImage(point, radius = [.5, .5], postEffect=true, t=time)

Return type: Array [4].

Argument type: point is an Array [2], radius is an Array [2], postEffect is a Boolean, and t is a Number.

Reads a layer's color and alpha channel values and hands back, as the array [red, green, blue, alpha], the alpha-weighted average across the pixels lying within the given distance of the point. With postEffect set true, the readings reflect the layer once its masks and effects have been rendered; with postEffect false, they reflect the layer before any masks and effects render. The point input lives in layer space, where [0,0] marks the center of the layer's upper-left pixel. The radius input gives the horizontal and vertical reach from the sample center out to the edges of the sampled rectangle. By default it samples a single pixel.

Note

That postEffect parameter concerns effects placed directly on the layer, not ones applied indirectly such as through an adjustment layer.

Tip

Calling sampleImage inside an expression no longer switches off multiprocessing.

The sample below grabs a rectangle 4 pixels across and 3 pixels tall, centered on a point 100 pixels down from and 100 pixels right of the layer's upper-left corner:

thisComp.layer(1).sampleImage([100, 100], [2, 1.5])

## Layer Properties attributes and methods (expression reference)

Adding masks, effects, paint, or text to a layer prompts After Effects to put fresh properties into the Timeline panel. They are far too numerous to enumerate here, so reach for the pick whip to discover how your expressions should refer to them.

anchorPoint

Return type: Property [2 or 3].

Hands back the layer's anchor point value within the layer's own coordinate system (layer space).

position

Return type: Property [2 or 3].

Hands back the layer's position value — in world space when the layer is unparented. When the layer is parented, the value is given in the parent layer's coordinate system (the parent's layer space).

scale

Return type: Property [2 or 3].

Hands back the layer's scale value, given as a percentage.

rotation

Return type: Property.

Hands back the layer's rotation value in degrees. On a 3D layer, it hands back the z rotation value in degrees.

opacity

Return type: Property.

Hands back the layer's opacity value, given as a percentage.

audioLevels

Return type: Property [2].

Hands back the layer's Audio Levels property value in decibels. The value is 2D: its first component is the left audio channel and its second is the right. It does not reflect the amplitude of the source material's audio track. Rather, it reflects the Audio Levels property value, which keyframes may alter.

timeRemap

Return type: Property.

Hands back the Time Remap property value in seconds whenever that property is enabled.

marker.key(index)

Return type: MarkerKey.

Argument type: index is a Number.

Hands back the MarkerKey object for the layer marker at the given index.

marker.key(name)

Return type: MarkerKey.

Argument type: name is a String.

Hands back the MarkerKey object for the layer marker carrying the given name. The name value matches whatever was typed into the comment field of the marker dialog box, such as marker.key("ch1"). When several markers on the layer share a name, the one earliest in layer time is returned. A marker key's value is a String, not a Number.

Placed on a property, this expression ramps that property's value from 0 to 100 across the span between two markers named individually:

m1 = marker.key("Start").time; m2 = marker.key("End").time; linear(time, m1, m2, 0, 100);

marker.nearestKey(t)

Return type: MarkerKey.

Argument type: t is a Number.

Hands back whichever layer marker lies closest in time to t. For instance, this expression yields the time of the layer marker sitting nearest the 1-second mark:

marker.nearestKey(1).time

And this one yields the time of the layer marker closest to the current time:

marker.nearestKey(time).time

marker.numKeys

Return type: Number.

Tallies how many markers sit on the layer.

name

Return type: String.

Reports the layer's name.

## Layer 3D attributes and methods (expression reference)

orientation

Return type: Property [3].

Hands back a 3D layer's 3D orientation value, in degrees.

rotationX

Return type: Property.

Hands back a 3D layer's x rotation value, in degrees.

rotationY

Return type: Property.

Hands back a 3D layer's y rotation value, in degrees.

rotationZ

Return type: Property.

Hands back a 3D layer's z rotation value, in degrees.

lightTransmission

Return type: Property.

Hands back a 3D layer's Light Transmission property value.

castsShadows

Return type: Property.

Hands back 1.0 when the layer casts shadows.

acceptsShadows

Return type: Property.

Hands back 1.0 when the layer accepts shadows.

acceptsLights

Return type: Property.

Hands back 1.0 when the layer accepts lights.

ambient

Return type: Property.

Hands back the ambient component value as a percentage.

diffuse

Return type: Property.

Hands back the diffuse component value as a percentage.

specularIntensity

Return type: Property.

Hands back the specular component value as a percentage.

specularShininess

Return type: Property.

Hands back the shininess component value as a percentage.

metal

Return type: Property.

Hands back the metal component value as a percentage.

## Layer Space Transforms methods (expression reference)

Layer space transform methods exist to move values across spaces — layer space to world space, for example. The "from" methods carry values out of the named space (composition or world) into layer space. The "to" methods carry values out of layer space into the named space (composition or world). Every transform method accepts an optional argument fixing the time the transform is computed at, yet the current (default) time will nearly always serve.

Reach for the "Vec" transform methods when moving a direction vector, like the gap between two position values. Reach for the plain (non-"Vec") transform methods when moving a point, like position. For 2D layers, composition (comp) space and world space coincide. On 3D layers, though, composition space is referenced to the active camera while world space ignores the camera.

toComp(point, t=time)

Return type: Array [2 or 3].

Argument type: point is an Array [2 or 3], and t is a Number.

Carries a point out of layer space into composition space.

fromComp(point, t=time)

Return type: Array [2 or 3].

Argument type: point is an Array [2 or 3], and t is a Number.

Carries a point out of composition space into layer space. On a 3D layer the resulting point may hold a nonzero value even while sitting in layer space. Example: fromComp(thisComp.layer(2).position)

toWorld(point, t=time)

Return type: Array [2 or 3].

Argument type: point is an Array [2 or 3], and t is a Number.

Carries a point out of layer space into view-independent world space. Example:

toWorld.effect("Bulge")("Bulge Center")

fromWorld(point, t=time)

Return type: Array [2 or 3].

Argument type: point is an Array [2 or 3], and t is a Number.

Carries a point out of world space into layer space. Example: fromWorld(thisComp.layer(2).position)

For a worked example of putting this method to use, see Expression example: Create a bulge between two layers.

toCompVec(vec, t=time)

Return type: Array [2 or 3].

Argument type: vec is an Array [2 or 3], and t is a Number.

Carries a vector out of layer space into composition space. Example: toCompVec([1,0])

fromCompVec(vec, t=time)

Return type: Array [2 or 3].

Argument type: vec is an Array [2 or 3], and t is a Number.

Carries a vector out of composition space into layer space. Example (2D layer):

dir=sub(position, thisComp.layer(2).position); fromCompVec(dir)

toWorldVec(vec, t=time)

Return type: Array [2 or 3].

Argument type: vec is an Array [2 or 3], and t is a Number.

Carries a vector out of layer space into world space. Example: p1 = effect("Eye Bulge 1")("Bulge Center"); p2 = effect("Eye Bulge 2")("Bulge Center"); toWorld(sub(p1, p2))

fromWorldVec(vec, t=time)

Return type: Array [2 or 3].

Argument type: vec is an Array [2 or 3], and t is a Number.

Carries a vector out of world space into layer space. Example: fromWorld(thisComp.layer(2).position)

fromCompToSurface(point, t=time)

Return type: Array [2].

Argument type: point is an Array [2 or 3], and t is a Number.

Casts a point sitting in composition space onto the layer's surface (zero z-value), landing it where it shows up as seen from the active camera. Handy for placing effect control points. Restricted to 3D layers.

## Camera attributes and methods (expression reference)

Camera objects carry the same attributes and methods as Layer objects, apart from source, effect, mask, width, height, anchorPoint, scale, opacity, audioLevels, timeRemap, and every material property.

pointOfInterest

Return type: Property [3].

Hands back a camera's point of interest values in world space.

zoom

Return type: Property.

Hands back a camera's zoom values in pixels.

Below is an expression for a layer's Scale property that holds the layer's apparent size in frame steady while you shift its z position (depth) or the camera's Zoom value:

cam = thisComp.activeCamera; distance = length(sub(position, cam.position)); scale \* distance / cam.zoom;

depthOfField

Return type: Property.

Hands back 1 when a camera's Depth Of Field property is on, or 0 when it is off.

focusDistance

Return type: Property.

Hands back a camera's focus distance value, in pixels.

aperture

Return type: Property.

Hands back a camera's aperture value, in pixels.

blurLevel

Return type: Property.

Hands back a camera's blur level value as a percentage.

irisShape

Return type: Number, read-only

Hands back the iris shape value from 1-10, matching the dropdown value selected.

irisRotation

Return type: Number, read-only

Hands back the iris rotation value, in degrees.

irisRoundness

Return type: Number, ready-only

Reports, as a percentage, the iris roundness on the camera.

irisAspectRatio

Return type: Number, read-only

Reports the camera's iris aspect ratio on a 1-to-100 scale.

irisDiffractionFringe

Return type: Number, read-only

Reports the camera's iris diffraction fringe on a 1-to-100 scale.

highlightGain

Return type: Number, read-only

Reports the camera's highlight gain on a 1-to-100 scale.

highlightThreshold

Return type: Number, read-only

Reports the highlight threshold on the camera.

- In an 8-bit comp, this value ranges from 0 to 100
- In a 16-bit comp, this value ranges from 0 to 32768
- In a 32-bit comp, this value ranges from 0 to 1.0

highlightSaturation

Return type: Number, read-only

Reports the camera's highlight saturation on a 1-to-100 scale.

active

Return type: Boolean.

Comes back true when this camera is the composition's active camera at the current time — that is, the camera layer's Video switch is on, the current time falls inside the camera layer's In-point-to-Out-point range, and this is the topmost such camera layer in the Timeline panel. Otherwise false.

## Light attributes and methods (expression reference)

Light objects carry the same attributes and methods as Layer objects, apart from source, effect, mask, width, height, anchorPoint, scale, opacity, audioLevels, timeRemap, and every material property.

pointOfInterest

Return type: Property [3].

Hands back a light's point of interest values in world space.

intensity

Return type: Property.

Hands back a light's intensity values as a percentage.

color

Return type: Property [4].

Hands back a light's color value.

coneAngle

Return type: Property.

Hands back a light's cone angle, in degrees.

coneFeather

Return type: Property.

Hands back a light's cone feather value as a percentage.

shadowDarkness

Return type: Property.

Hands back a light's shadow darkness value as a percentage.

shadowDiffusion

Return type: Property.

Hands back a light's shadow diffusion value, in pixels.

## Effect attributes and methods (expression reference)

active

Return type: Boolean.

Comes back true when the effect is switched on (the Effect switch is selected).

param(name)

Return type: Property.

Argument type: name is a String.

Hands back a property living inside an effect. Effect control points sit in layer space without exception. Example:

effect("Bulge").param("Bulge Height")

param(index)

Return type: Property.

Argument type: index is a Number.

Hands back a property living inside an effect. Effect control points sit in layer space without exception. As a sample, effect("Bulge").param(4) hands back the Bulge Height property.

## Mask attributes and methods (expression reference)

Note

Mask Path properties can be linked to other path properties — paths on a shape layer and brush strokes — but expressions cannot reach those properties for direct numerical tweaking.

maskOpacity

Return type: Property.

Hands back a mask's opacity value as a percentage.

maskFeather

Return type: Property.

Hands back a mask's feather value, in pixels.

maskExpansion

Return type: Property.

Hands back a mask's expansion value, in pixels.

invert

Return type: Boolean.

Comes back true when the mask is inverted, false when it is not.

## See also

- [Layer Properties](help-layer-properties.md)
