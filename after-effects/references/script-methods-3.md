# Methods (part 3)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Layer object — Methods

### Layer.activeAtTime()

app.project.item(index).layer(index).activeAtTime(time)

### Description

Comes back true when this layer is going to be active at the time you pass.

For that to hold, the layer has to be enabled, no other layer can be soloing unless this one is soloed as well, and the time has to fall between this layer's inPoint and outPoint values.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Floating-point value | The time in seconds. |

### Returns

Boolean.

### Layer.applyPreset()

app.project.item(index).layer(index).applyPreset(presetName);

### Description

Puts the named bundle of animation settings — an animation preset — onto every layer currently selected in the comp the layer belongs to. Where nothing is selected, the preset lands on a freshly made solid layer instead.

Animation preset files ship preinstalled in the Presets folder, and the user interface lets users build their own.

Warning

Rather than landing on the layer you invoke applyPreset on, the animation preset goes onto whichever layer(s) are selected in the comp. So the layer you call it on really only serves to pick which comp's layers get worked on.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| presetName | Extendscript File object | The file containing the animation preset. |

### Returns

Nothing.

app.project.item(index).layer(index).copyToComp(intoComp)

### Description

Drops a copy of the layer into the composition you name, leaving the original untouched.

It builds a new Layer object carrying the same values as this one and tucks that object at the front of the LayerCollection object in the destination CompItem. Grab the copy with into Comp.layer(1).

Bringing a layer in shifts the index positions of layers already present in the destination composition.

The result matches copying a layer and pasting it through the user interface.

Note

From After Effects 13.6 onward, calling this on a layer that has a parent will not crash the app anymore.

Warning

In After Effects 13.7 (13.6 remains untested), undoing the action after copying a layer that carries an effect makes After Effects Crash.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| intoComp | CompItem object | The target composition. |

### Returns

Nothing.

### Layer.doSceneEditDetection()

app.project.item(index).layer(index).doSceneEditDetection(applyOptions)

Note

This functionality was added in After Effects 22.3 (2022)

### Description

Carries out Scene Edit Detection on whichever layer the method is invoked on and gives back an array listing the times of every scene it found. It mirrors picking a layer in the Timeline and choosing "Layer > Scene Edit Detection", where the lone argument decides whether those edits become markers, layer splits, or pre-comps, or stay off the layer entirely.

As happens in the UI, doSceneEditDetection raises an error when run on a non-video layer or on a video layer that has Time Remapping switched on.

### Parameters

Parameter

Type

Description

applyOptions

SceneEditDetectionMode enum

How the detected edits will be applied. One of: - SceneEditDetectionMode.MARKERS: Create markers at edit points. - SceneEditDetectionMode.SPLIT: Split layer. - SceneEditDetectionMode.`SPLIT_PRECOMP`: Split layer at edit points and pre-compose each one. - SceneEditDetectionMode.NONE: Detected edits are not applied to the layer.

| --- | --- | --- |

### Returns

Array of floating-point values; the times of the detected edit points expressed in composition time.

### Layer.duplicate()

app.project.item(index).layer(index).duplicate()

### Description

Clones the layer, producing a new Layer object that copies all of this one's values. It works just like picking a layer in the user interface and choosing Edit > Duplicate, save that calling this method leaves the user-interface selection as it was.

### Parameters

None.

### Returns

Layer object.

### Layer.moveAfter()

app.project.item(index).layer(index).moveAfter(layer)

### Description

Shifts this layer to sit directly after (below) the layer you name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| layer | Layer object | The target layer in the same composition. |

### Returns

Nothing.

### Layer.moveBefore()

app.project.item(index).layer(index).moveBefore(layer)

### Description

Shifts this layer to sit directly before (above) the layer you name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| layer | Layer object | The target layer in the same composition. |

### Returns

Nothing.

### Layer.moveToBeginning()

app.project.item(index).layer(index).moveToBeginning()

### Description

Shifts this layer up to the very top slot of the layer stack, making it the first layer.

### Parameters

None.

### Returns

Nothing.

### Layer.moveToEnd()

app.project.item(index).layer(index).moveToEnd()

### Description

Shifts this layer down to the very bottom slot of the layer stack, making it the last layer.

### Parameters

None.

### Returns

Nothing.

### Layer.remove()

app.project.item(index).layer(index).remove()

### Description

Removes the named layer from the composition for good.

### Parameters

None.

### Returns

Nothing.

### Layer.setParentWithJump()

app.project.item(index).layer(index).setParentWithJump([newParent])

### Description

Makes the named layer this layer's parent while leaving the child layer's transform values as they are.

Because this layer's transform values get folded together with those of its ancestors, the child layer may visibly jump in rotation, translation, or scale.

To keep the child layer from jumping, assign the parent attribute on its own instead. Going that route, an offset is computed and stored in the child layer's transform fields so that no jump happens.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newParent | Layer object | Optional. A layer in the same composition. If not specified, it sets the parent to None. |

### Returns

Nothing.

## LayerCollection object — Methods

### LayerCollection.add()

app.project.item(index).layers.add(item[, duration])

### Description

Builds a fresh AVLayer wrapping the item you pass in and appends it to this collection. Whether the layer begins at the composition's start time depends on the "Create Layers at Composition Start Time" preference. Should the item be one that cannot legally become a layer of this CompItem, the call throws an exception.

### Parameters

Parameter

Type

Description

item

AVItem object

The item to be added.

duration

Floating-point value

Optional. Measured in seconds, this controls how long a still layer runs; it matters solely when the item holds still footage and is ignored for movies, sequences, and audio. Pass a value and the new layer's duration is set to it; leave it out and the duration falls back to whatever the user's preferences dictate. The default matches the duration of the CompItem that holds the layer. Should you want a different default, go to Edit > Preferences > Import (Windows) or After Effects > Preferences > Import (Mac OS) and adjust the choices listed under Still Footage.

| --- | --- | --- |

### Returns

AVLayer object;

### LayerCollection.addBoxText()

app.project.item(index).layers.addBoxText([width, height])

### Description

Generates a paragraph (box) text layer whose TextDocument.lineOrientation is LineOrientation.HORIZONTAL, then drops the resulting TextLayer object into this collection. When you instead need point text, reach for the LayerCollection.addText() method.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| [width, height] | Array of floating-point values | The dimensions of the new text box. |

### Returns

TextLayer object.

### LayerCollection.addCamera()

app.project.item(index).layers.addCamera(name, centerPoint)

### Description

Builds a camera layer and inserts the resulting CameraLayer object into this collection. Whether it starts at the comp's beginning is governed by the "Create Layers at Composition Start Time" preference.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the new layer. |
| centerPoint | Array of floating-point values, [x, y] | The initial X and Y values of the new camera's Point of Interest property. The z value is set to 0. |

### Returns

CameraLayer object.

### LayerCollection.addLight()

app.project.item(index).layers.addLight(name, centerPoint)

### Description

Builds a light layer and inserts the resulting LightLayer object into this collection. Whether it begins at the comp's start time is governed by the "Create Layers at Composition Start Time" preference.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the new layer. |
| centerPoint | Array of floating-point values, [x, y] | The center of the new light |

### Returns

LightLayer object.

### LayerCollection.addNull()

app.project.item(index).layers.addNull([duration])

### Description

Builds a null layer and appends the resulting AVLayer object to this collection. The effect mirrors picking Layer > New > Null Object from the menu.

### Parameters

Parameter

Type

Description

duration

Floating-point value

Optional. Expressed in seconds, this is how long a still layer lasts. Supply it and the new layer's duration takes that value; omit it and the duration defaults to the user's preference setting. By default that equals the duration of the CompItem containing the layer. For a different default, open Edit > Preferences > Import (Windows) or After Effects > Preferences > Import (Mac OS) and set choices under Still Footage.

| --- | --- | --- |

### Returns

AVLayer object.

### LayerCollection.addShape()

app.project.item(index).layers.addShape()

### Description

Produces a fresh, empty Shape layer as a ShapeLayer object. From that ShapeLayer you can attach properties like shape, fill, stroke, and path filters. The result is equivalent to drawing with a shape tool set to "Tool Creates Shape" mode. In that mode the tools insert a vector group automatically, complete with the Fill and Stroke configured in the tool options.

### Parameters

None.

### Returns

ShapeLayer object.

### LayerCollection.addSolid()

app.project.item(index).layers.addSolid(color, name, width, height, pixelAspect[, duration])

### Description

Builds a new SolidSource object using the values you provide, assigns that SolidSource as the mainSource of a brand-new FootageItem object, and registers the FootageItem with the project. It then constructs an AVLayer, points its source at the freshly made Footage Item, and appends that layer to this collection.

### Parameters

Parameter

Type

Description

color

Array of three floating-point values

The color of the solid. Three numbers, [R, G, B], in the range [0.0..1.0]

name

String

The name of the solid.

width

Integer

The width of the solid in pixels, in the range [4..30000]

height

Integer

The height of the solid in pixels, in the range [4..30000]

pixelAspect

Floating-point value

The pixel aspect ratio of the solid, in the range [0.01..100.0]

duration

Floating-point value

Optional. Expressed in seconds, this is how long a still layer lasts. Supply it and the new layer's duration takes that value; omit it and the duration defaults to the user's preference setting. By default that equals the duration of the CompItem containing the layer. For a different default, open Edit > Preferences > Import (Windows) or After Effects > Preferences > Import (MacOS) and set choices under Still Footage.

| --- | --- | --- |

### Returns

AVLayer object.

### LayerCollection.addText()

app.project.item(index).layers.addText([sourceText])

### Description

Generates a point text layer whose TextDocument.lineOrientation is LineOrientation.HORIZONTAL, then adds the resulting TextLayer object to this collection. For a paragraph (box) text layer instead, call LayerCollection.addBoxText().

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sourceText | String | Optional. The source text of the new layer, or a TextDocument object containing the source text of the new layer. |

### Returns

TextLayer object.

### LayerCollection.addVerticalBoxText()

app.project.item(index).layers.addVerticalBoxText([width, height])

Note

This functionality was added in After Effects 24.2

### Description

Generates a paragraph (box) text layer whose TextDocument.lineOrientation is set to LineOrientation.`VERTICAL_RIGHT_TO_LEFT`, then adds the resulting TextLayer object to this collection. When point text is what you want, turn to the LayerCollection.addText() or LayerCollection.addVerticalText() methods.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| [width, height] | Array of floating-point values | The dimensions of the new text box. |

### Returns

TextLayer object.

### LayerCollection.addVerticalText()

app.project.item(index).layers.addVerticalText([sourceText])

Note

This functionality was added in After Effects 24.2

### Description

Generates a point text layer whose TextDocument.lineOrientation is set to LineOrientation.`VERTICAL_RIGHT_TO_LEFT`, then adds the resulting TextLayer object to this collection. For a paragraph (box) text layer instead, use the LayerCollection.addBoxText() or LayerCollection.addVerticalBoxText() methods.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sourceText | String | Optional. The source text of the new layer, or a TextDocument object containing the source text of the new layer. |

### Returns

TextLayer object.

### LayerCollection.addParametricMesh()

app.project.item(index).layers.addParametricMesh(name, meshType)

Note

This functionality was added in After Effects (Beta) 26.3 and is subject to change while it remains in Beta.

### Description

Generates a new parametric 3D mesh layer.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the new layer. |
| meshType | MeshType | The mesh type of the new layer. |

### Returns

ParametricMeshLayer object.

### LayerCollection.byName()

app.project.item(index).layers.byName(name)

### Description

Looks through this collection and hands back the topmost layer whose name matches the one you supply, returning null when nothing carries that name.

### Parameters

| name | A string containing the name. |

### Returns

Layer object or null.

### LayerCollection.precompose()

app.project.item(index).layers.precompose(layerIndicies, name[, moveAllAttributes])

### Description

Spins up a fresh CompItem object and relocates the layers you name into its layer collection. Those individual layers leave this collection, and the new CompItem is added to it in their place.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| layerIndices | Array of integers | The position indexes of the layers to be collected. |
| name | String | The name of the new CompItem object. |
| moveAllAttributes | Boolean | Optional. Leave it true (the default) to carry every attribute over into the new composition, which matches ticking "Move all attributes into the new composition" in the Pre-compose dialog box. Setting it false is permitted only when the layerIndices array holds a single index, and corresponds to ticking the "Leave all attributes in" choice in that same dialog box. |

### Returns

CompItem object.

## AVLayer object — Methods

### AVLayer.addToMotionGraphicsTemplate()

app.project.item(index).layer(index).addToMotionGraphicsTemplate(comp)

Note

This functionality was added in After Effects 18.0 (2021)

### Description

Places the layer onto the Essential Graphics Panel belonging to the composition you specify.

Comes back true when the layer goes in successfully, and false otherwise.

A failure to add the layer happens for one of two reasons: the layer is not a type whose media can be swapped (these are called Media Replacement Layers), or it has already been put on that composition's EGP. After Effects pops up a warning dialog whenever the layer cannot join the EGP.

To check beforehand whether a layer is eligible for a Motion Graphics template, call AVLayer.canAddToMotionGraphicsTemplate().

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| comp | CompItem object | The composition where you wish to add the property to the EGP. |

### Returns

Boolean.

### AVLayer.addToMotionGraphicsTemplateAs()

app.project.item(index).layer(index).addToMotionGraphicsTemplateAs(comp, name)

Note

This functionality was added in After Effects 18.0 (2021)

### Description

Places the layer onto the Essential Graphics Panel belonging to the composition you specify.

Comes back true when the layer goes in successfully, and false otherwise.

A failure to add the layer happens for one of two reasons: the layer is not a type whose media can be swapped (these are called Media Replacement Layers), or it has already been put on that composition's EGP. After Effects pops up a warning dialog whenever the layer cannot join the EGP.

To check beforehand whether a layer is eligible for a Motion Graphics template, call AVLayer.canAddToMotionGraphicsTemplate().

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| comp | CompItem object | The composition where you wish to add the property to the EGP. |
| name | String | The new name. |

### Returns

Boolean.

### AVLayer.audioActiveAtTime()

app.project.item(index).layer(index).audioActiveAtTime(time)

### Description

Yields true if this layer's audio is going to play at the moment you specify.

A true result requires audioEnabled to be true, no other audio layer to be soloing (unless this layer is also soloed), and the given time to sit between this layer's inPoint and outPoint.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Floating-point value | The time, in seconds. |

### Returns

Boolean.

### AVLayer.calculateTransformFromPoints()

app.project.item(index).layer(index).calculateTransformFromPoints(pointTopLeft, pointTopRight, pointBottomRight)

### Description

Works out a transformation from a collection of points belonging to this layer.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| pointTopLeft | Array of floating-point values, [x, y, z] | The top left point coordinates. |
| pointTopRight | Array of floating-point values, [x, y, z] | The top right point coordinates. |
| pointBottomRight | Array of floating-point values, [x, y, z] | The bottom right point coordinates. |

### Returns

An Object with the transformation properties set.

### Example

```
var newLayer = comp.layers.add(newFootage);
newLayer.threeDLayer = true;
newLayer.blendingMode = BlendingMode.ALPHA_ADD;
var transform = newLayer.calculateTransformFromPoints(tl, tr, bl);
for (var sel in transform) {
    newLayer.transform[sel].setValue(transform[sel]);
}
```

### AVLayer.canAddToMotionGraphicsTemplate()

app.project.item(index).layer(index).canAddToMotionGraphicsTemplate(comp)

Note

This functionality was added in After Effects 18.0 (2021)

### Description

Checks whether the layer is eligible to go on the Essential Graphics Panel for the composition you specify.

Yields true when the layer is eligible, and false otherwise.

A layer is ineligible for one of two reasons: it is not a type whose media can be swapped (known as Media Replacement Layers), or it is already present on that composition's EGP.

Media Replacement layers are identified as AVLayers whose AVLayer.source points at a FootageItem object (of certain source types) or at a CompItem object.

For the AVLayer to count as a Media Replacement layer, it has to satisfy the conditions below:
