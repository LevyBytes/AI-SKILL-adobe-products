# Attributes (part 6)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Property object — Methods

| Parameter | Type | Description |
| --- | --- | --- |
| time | Floating-point value | The time, in seconds, at which to set the value. The beginning of the composition is 0. |
| preExpression | Boolean | If the property has an expression and this is true, return the value for the specified time without applying the expression to it. When false, return the result of evaluating the expression for the specified time. Ignored if the property does not have an associated expression. |

### Returns

A value appropriate for the type of the property (see "Property propertyValueType attribute" on page 138).

## PropertyBase object

app.project.item(index).layer(index).propertySpec

### Description

Through a layer, you reach properties by their names, and the expression syntax you use depends on what the application preferences are set to. To illustrate, here are several equivalent routes into the properties found in the Effects group:

```
var effect1 = app.project.item(1).layer(1).effect("AddGrain")("Viewing Mode");
var effect1again = app.project.item(1).layer(1).effect.addGrain.viewingMode;
var effect1againtoo = app.project.item(1).layer(1)("Effects").addGrain.viewingMode;
var effect1againtoo2 = app.project.item(1).layer(1)("Effects")("Add Grain")("Viewing Mode");
```

See also PropertyGroup.property().

Info

Because PropertyBase underlies both Property and PropertyGroup, its attributes and methods stay available whether you are handling individual properties or whole property groups.

### Reference invalidation

A script reference can throw errors once an object has changed enough that the reference no longer points anywhere valid. The simplest scenarios are easy to reason about. Deleting an object, then touching a reference that still points at it, raises the "Object is Invalid" warning:

```
var layer1 = app.project.item(1).layer(1);
layer1.remove();
alert(layer1.name); // invalid reference to deleted object
```

The same warning fires if you reach for an AE property that lived on an object you already deleted:

```
var layer1 = app.project.item(1).layer(1);
var layer1position = layer1.transform.position;
layer1.remove();
alert(layer1position.value); // invalid reference to property inselected object
```

Trickier is the case of pulling a property out of a property group. Here, After Effects raises "Object is Invalid" the next time you reach for that item or its siblings in the group, since removing one entry shifts everyone's index position. As an example:

```
var effect1 = app.project.item(1).layer(1).effect(1);
var effect2 = app.project.item(1).layer(1).effect(2);
var effect2param = app.project.item(1).layer(1).effect(2).blendWithOriginal;
effect1.remove();
alert(effect2.name); // invalid reference because group index positions have changed
```

## PropertyBase object — Attributes

### PropertyBase.active

app.project.item(index).layer(index).active

app.project.item(index).layer(index).propertySpec.active

### Description

On a layer, this tracks the eyeball icon's state. A true value means the layer's video is live at the current moment, which requires several conditions at once: the layer is enabled, no competing layer is soloing (or, if one is, this layer is soloed as well), and the current time sits between this layer's inPoint and outPoint.

An audio layer never reports true here; the AVLayer object carries its own audioActive attribute for that purpose — see AVLayer.audioActive.

Where effects and any properties are concerned, this matches the enabled attribute but cannot be written to.

### Type

Boolean; read-only.

### PropertyBase.canSetEnabled

app.project.item(index).layer(index).propertySpec.canSetEnabled

### Description

A true value means the enabled attribute is writable for this property. As a rule of thumb, that holds whenever the interface shows an eyeball icon beside the property, and it always holds for layers.

### Type

Boolean; read-only.

### PropertyBase.elided

app.project.item(index).layer(index).propertySpec.elided

### Description

A true value flags this property as an organizing group for other properties. Such a group stays hidden in the interface, and its child properties get no indentation in the Timeline panel. Picture a text layer carrying two animators with nothing twirled open — what you would see is:

- Text
- PathOptions
- MoreOptions
- Animator1
- Animator2

Here, "Animator 1" and "Animator 2" both sit inside a PropertyBase named "Text Animators." Since that parent group never shows up in the interface, neither child is indented in the Timeline panel.

### Type

Boolean; read-only.

### PropertyBase.enabled

app.project.item(index).layer(index).enabled

app.project.item(index).layer(index).propertySpec.enabled

### Description

On a layer, this maps to the video switch state shown in the Timeline panel. For an effect or any property, it maps instead to the eyeball icon's setting, where one exists.

A true value means the layer or property is turned on; false means it is not.

### Type

Boolean; read/write if canSetEnabled is true, read-only if canSetEnabled is false.

### PropertyBase.isEffect

app.project.item(index).layer(index).propertySpec.isEffect

### Description

A true value identifies this property as an effect PropertyGroup.

### Type

Boolean; read-only.

### PropertyBase.isMask

app.project.item(index).layer(index).propertySpec.isMask

### Description

A true value identifies this property as a mask PropertyGroup.

### Type

Boolean; read-only.

### PropertyBase.isModified

app.project.item(index).layer(index).propertySpec.isModified

### Description

A true value means the property has been altered at some point after it was created.

### Type

Boolean; read-only.

### PropertyBase.matchName

app.project.item(index).layer(index).propertySpec.matchName

### Description

This is a dedicated name the property uses for assembling unique naming paths. It stays out of sight, yet scripts can reference it, and each property carries its own one-of-a-kind match-name identifier. Across releases these names hold steady no matter how the display name (the name attribute value) shifts or what changes land in the application, and unlike the display name they are never localized. While an indexed group might lack a name value, it always carries a matchName. (Indexed groups are of type PropertyType.`INDEXED_GROUP`; see PropertyBase.propertyType.)

### Type

String; read-only.

### PropertyBase.name

app.project.item(index).layer(index).name

app.project.item(index).layer(index).propertySpec.name

### Description

On a layer, this holds the layer's name. That defaults to matching the Source name unless Layer.isNameSet comes back false.

For an effect or any property, it is the property's display name instead. (Contrast PropertyBase.matchName.) Trying to set the name throws an error unless the property is a child of an indexed group — that is, a property group of type PropertyType.`INDEXED_GROUP`; see PropertyBase.propertyType.

### Type

String; read/write for a child of an indexed group; otherwise read-only.

### PropertyBase.parentProperty

app.project.item(index).layer(index).propertySpec.parentProperty

### Description

The property group sitting directly above this property as its parent — or null when this PropertyBase happens to be a layer.

### Type

PropertyGroup object or null; read-only.

### PropertyBase.propertyDepth

app.project.item(index).layer(index).propertySpec.propertyDepth

### Description

How many parent-group levels separate this property from the layer that contains it. A layer itself reports 0.

### Type

Integer; read-only.

### PropertyBase.propertyIndex

app.project.item(index).layer(index).propertySpec.propertyIndex

### Description

Where this property sits, by position, inside its parent group — applicable when it is a child of an indexed group (a property group of type PropertyType.`INDEXED_GROUP`; see PropertyBase.propertyType).

### Type

Integer; read-only.

### PropertyBase.propertyType

app.project.item(index).layer(index).propertySpec.propertyType

### Description

Which kind of property this is.

### Type

A PropertyType enumerated value; read/write. One of:

- PropertyType.PROPERTY: A single property such as position or zoom.
- PropertyType.`INDEXED_GROUP`: A property group whose members have an editable name and an index. Effects and masks are indexed groups. For example, the masks property of a layer refers to a variable number of individual masks by index number.
- PropertyType.`NAMED_GROUP`: A property group in which the member names are not editable. Layers are named groups.

### PropertyBase.selected

app.project.item(index).layer(index).propertySpec.selected

### Description

A true value marks this property as selected. Assign true to select it or false to clear the selection. Be aware that polling this attribute over and over across many properties can drag down system performance. When you want the complete set of selected properties for a composition or a layer, reach for CompItem.selectedProperties or Layer.selectedProperties instead.

### Type

Boolean; read/write.

## PropertyBase object — Methods

### PropertyBase.duplicate()

app.project.item(index).layer(index).propertySpec.duplicate()

### Description

When this property belongs to an indexed group as a child, the method builds a fresh PropertyBase object carrying the same attribute values and hands it back. Call it on a property that is not such a child and it raises an exception and surfaces an error. Indexed groups carry the type PropertyType.`INDEXED_GROUP`; see PropertyBase.propertyType.

### Parameters

None.

### Returns

PropertyBase object.

### PropertyBase.moveTo()

app.project.item(index).layer(index).propertySpec.moveTo(newIndex)

### Description

Shifts this property to a different slot within its parent property group. Only children of indexed groups support this; if the property is not one, or the index you pass is invalid, the method raises an exception and shows an error. (Indexed groups carry the type PropertyType.`INDEXED_GROUP`; see PropertyBase.propertyType.)

Warning

Calling this voids any existing references you hold to the other children of that same indexed group. Say a layer carries three effects, each one stored in its own variable — relocate any single effect and every one of those variable references goes stale. Expect to reassign them.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newIndex | Integer | The new index position at which to place this property in its group. |

### Returns

Nothing.

### PropertyBase.propertyGroup()

app.project.item(index).layer(index).propertySpec.propertyGroup([countUp])

### Description

Retrieves the PropertyGroup object for one of this property's ancestor groups, chosen by how far up the parent-child hierarchy you want to climb.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| countUp | Integer, in the range [1..propertyDepth] | Optional. The number of levels to ascend within the parent-child hierarchy. Default is 1, which gets the immediate parent. |

### Returns

PropertyGroup object, or Layer object if the count reaches the containing layer.

### Example

```
var containing_layer = my_property.propertyGroup(my_property.propertyDepth);
```

### PropertyBase.remove()

app.project.item(index).layer(index).propertySpec.remove()

### Description

Detaches this property from its parent group. Should this be a property group itself, its child properties go with it. The call is only legal for children of indexed groups; otherwise — or when the index value is invalid — it raises an exception and shows an error. (Indexed groups carry the type PropertyType.`INDEXED_GROUP`; see PropertyBase.propertyType.) You may also invoke it on a text animation property, meaning any animator that has been attached to a text layer.

### Parameters

None.

### Returns

Nothing.

## PropertyGroup object

app.project.item(index).layer(index).propertyGroupSpec

### Description

A PropertyGroup object stands for a collection of properties. Inside it you can find Property objects alongside further PropertyGroup objects. Nesting these groups builds a parent-child hierarchy that runs from a Layer object at the root all the way down to one Property object — the mask feather of the third mask, say. Walking that hierarchy is done through PropertyBase methods and attributes; see PropertyBase.propertyGroup(). To see how properties and property groups get accessed, refer to PropertyBase object.

Info

Since PropertyGroup descends from PropertyBase, every method and attribute of PropertyBase is on hand when you work with PropertyGroup, on top of the ones listed here.

Info

PropertyGroup also serves as the base class behind Layer and MaskPropertyGroup. That means its attributes and methods are available whenever you handle layer or mask groups.

## PropertyGroup object — Attributes

### PropertyGroup.numProperties

app.project.item(index).layer(index).propertyGroupSpec.numProperties

### Description

How many indexed properties live in this group.

On layers, the value comes back as 3 — one each for the mask, effect, and motion tracker groups, which together make up the layer's indexed groups.

That said, layers carry plenty of additional properties reachable only by name; see PropertyGroup.property().

### Type

Integer; read-only.

## PropertyGroup object — Methods

### PropertyGroup.addProperty()

app.project.item(index).layer(index).propertyGroupSpec.addProperty(name)

### Description

Builds a PropertyBase object under the name you give, attaches it to this group, and returns it.

As a rule, properties can only join an indexed group (a property group of type PropertyType.`INDEXED_GROUP`; see PropertyBase.propertyType). The lone exception is a text animator property, which is allowed into a named group (one of type PropertyType.`NAMED_GROUP`).

Should the method be unable to build a property under the name supplied, it raises an exception.

Before invoking this, confirm the property is allowed in the group by calling canAddProperty first. (See PropertyGroup.canAddProperty().)

Warning

Adding a new property to an indexed group rebuilds that group from the ground up, which voids every reference you already hold to its properties.

A way around it is to stash the added property's index using property.propertyIndex.

### Examples

This approach fails, because the slider object goes stale the moment the Color Control property is added:

```
var effectsProperty = layer.property("ADBE Effect Parade");
var slider = effectsProperty.addProperty("ADBE Slider Control");
var color = effectsProperty.addProperty("ADBE Color Control");

var sliderProperty = slider.property("ADBE Slider Control-0001"); // Object 'slider' is Invalid
```

Reworked this way, it succeeds:

```
var effectsProperty = layer.property("ADBE Effect Parade");
var slider = effectsProperty.addProperty("ADBE Slider Control");
var sliderIndex = slider.propertyIndex; // Store 'slider' effect index so it can be reused later
var color = effectsProperty.addProperty("ADBE Color Control");

var sliderProperty = effectsProperty.property(sliderIndex).property("ADBE Slider Control-0001");
```

### Parameters

Parameter

Type

Description

name

String

The display name or matchName of the property to add. The following names are supported: - Any match name for a property that can be added through the user interface. For example, "ADBE Mask Atom", "ADBE Paint Atom", "ADBE Text Position", "ADBE Text Anchor Point". - When adding to an ADBE Mask Parade: "ADBE Mask Atom", "Mask". - When adding to an ADBE Effect Parade, any effect by match name, such as "ADBE Bulge", "ADBE Glo2", "APC Vegas". - Any effect by display name, such as "Bulge", "Glow", "Vegas". - For text animators, "ADBE Text Animator". - For selectors, Range Selector has the name "ADBE Text Selector", Wiggly Selector has the name "ADBE Text Wiggly Selector", and Expression Selector has the name "ADBE Text Expressible Selector".

| --- | --- | --- |

### Returns

PropertyBase object.

### PropertyGroup.canAddProperty()

app.project.item(index).layer(index).propertyGroupSpec.canAddProperty(name)

### Description

Comes back true when a property under the supplied name is allowed into this property group.

Take masks as an example: only a mask group will accept one, so the sole valid arguments are "mask" or "ADBE Mask Atom".

```
maskGroup.canAddProperty("mask"); // returns `true`
maskGroup.canAddProperty("ADBE Mask Atom"); // returns `true`
maskGroup.canAddProperty("blend"); // returns false
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The display name or match name of the property to be checked. (See PropertyGroup.addProperty()). |

### Returns

Boolean.

### PropertyGroup.addVariableFontAxis()

app.project.item(index).layer(index).propertyGroupSpec.addVariableFontAxis(axisTag)

Note

This functionality was added in After Effects 26.0

### Description

Builds a Property object for one variable font axis, attaches it to this property group, and returns it. The call is restricted to the "ADBE Text Animator Properties" property group found within a text animator.

Frequently seen axis tags include, though are not limited to:

- "wght" - Weight (100-900 typical range)
- "wdth" - Width (percentage of normal width)
- "slnt" - Slant (angle in degrees)
- "ital" - Italic (0-1 range)
- "opsz" - Optical Size (point size)

Beyond these, fonts can carry custom axes identified by 4-character uppercase tags (e.g., "INFM" for Informality).

### Variable Font Spacing

As Variable Font axes animate, the width of individual characters can shift. To compensate for those width shifts, After Effects relies on the Variable Font Spacing property — which lives in the "More Options" section of a text animator — to govern character spacing.

You reach the Variable Font Spacing property through its matchName "ADBE Text Variable Font Spacing"; it is a dropdown control property and only surfaces once the animator has at least one active variable font axis.

Tip

An axis has to be present on the font before it does anything. Use FontObject.designAxesData to find out which axes a given font supports.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| axisTag | String | The 4-character tag identifying the variable font axis (e.g., "wght", "wdth", "slnt", "ital"). |

### Returns

Property object representing the variable font axis.

### Examples

```
// Create a comp
var comp = app.project.items.addComp("Create Axis Comp", 1920, 1080, 1, 30, 30);
comp.openInViewer();

// Create a text layer
var textLayer = comp.layers.addText("Hello World!");

// Set the font to variable font
var textDocument = textLayer.property("Source Text").value;
textDocument.font = 'ShantellSans'; // Must be a variable font
textLayer.property("Source Text").setValue(textDocument);

// Get the text property and animators group
var textProp = textLayer.property("Text");
var animators = textProp.property("Animators");

// Add a new animator
var animator = animators.addProperty("ADBE Text Animator");
var animatorProps = animator.property("ADBE Text Animator Properties");

// Add the Weight axis
var axisProp = animatorProps.addVariableFontAxis("wght");

// Set a static value
axisProp.setValue(700);

// Set keyframes
axisProp.setValueAtTime(0, 300);  // Light at 0 seconds
axisProp.setValueAtTime(2, 900);  // Heavy at 2 seconds
```

### PropertyGroup.property()

app.project.item(index).layer(index).propertyGroupSpec.property(index)

app.project.item(index).layer(index).propertyGroupSpec.property(name)

### Description

Locates a child property within this group and returns it, keyed by either its index or its name. For a name, you can lean on the same syntax expressions accept. Every one of these forms is permitted and produces the same result:

```
mylayer.position;
mylayer("position");
mylayer.property("position");
mylayer(1);
mylayer.property(1);
```

A handful of a layer's properties — position and zoom among them — are reachable by name only. To track down a property several levels deep by name, you will have to chain more than one call to this method.

To illustrate, the call below descends two levels and yields the first mask inside the mask group: myLayer.property("ADBE Masks").property(1)

### Parameters

Parameter

Type

Description

index

Integer

The index for the child property, in the range [1..numProperties], if this is an indexed group.

name

String

The name of the child property. This can be: - Any match name - Any name in expression "parenthesis style" syntax, meaning the display name or the compact English name - Any name in expression "intercap style" syntax. For supported property names, see the table below.

| --- | --- | --- |

### Returns

PropertyBase object or null if no child property with the specified string name is found.

### Properties accessible by name

Source

Values

From any Layer

- "ADBE Mask Parade", or "Masks"
- "ADBE Effect Parade", or "Effects"
- "ADBE MTrackers", or "Motion Trackers"

From an AVLayer

- "Anchor Point" or "anchorPoint"
- "Position" or "position"
- "Scale" or "scale"
- "Rotation" or "rotation"
- "Z Rotation" or "zRotation" or "Rotation Z" or "rotationZ"
- "Opacity" or "opacity"
- "Marker" or "marker"

From an AVLayer with a non-still source

- "Time Remap" or "timeRemapEnabled"

From an AVLayer with an audio component

- "Audio Levels" or "audioLevels"

From a camera layer

- "Zoom" or "zoom"
- "Depth of Field" or "depthOfField"
- "Focus Distance" or "focusDistance"
- "Aperture" or "aperture"
- "Blur Level" or "blurLevel"

From a light layer

- "Intensity" or "intensity"
- "Color" or "color"
- "Cone Angle" or "coneAngle"
- "Cone Feather" or "coneFeather"
- "Shadow Darkness" or "shadowDarkness"
- "Shadow Diffusion" or "shadowDiffusion"
- "Casts Shadows" or "castsShadows"

From a 3D layer

- "Accepts Shadows" or "acceptsShadows"
- "Accepts Lights" or "acceptsLights"
- "Ambient" or "ambient"
- "Diffuse" or "diffuse"
- "Specular" or "specular" (these are for the Specular Intensity property)
- "Shininess" or "shininess" (these are for the Specular Shininess property)
- "Casts Shadows" or "castsShadows"
- "Light Transmission" or "lightTransmission"
- "Metal" or "metal"

From a camera, light or 3D layer

- "X Rotation" or "xRotation" or "Rotation X" or "rotationX"
- "Y Rotation" or "yRotation" or "Rotation Y" or "rotationY"
- "Orientation" or "orientation"

From a text layer

- "Source Text" or "source Text" or "Text" or "text"

From PropertyGroup "ADBE Mask Parade"

- "ADBE Mask Atom"

From PropertyGroup "ADBE Mask Atom"

- "ADBE Mask Shape", or "maskShape", or "maskPath"
- "ADBE Mask Feather", or "maskFeather"
- "ADBE Mask Opacity", or "maskOpacity"
- "ADBE Mask Offset", or "maskOffset"

| --- | --- |

### Examples

Suppose a layer called "myLayer" has a Box Blur effect on it; any of these forms will fetch that effect:

```
myLayer.property("Effects").property("Box Blur");
myLayer.property("Effects").property("boxBlur");
myLayer.property("Effects").property("ADBE Box Blur");
```

And if "myLayer" carries a mask called "Mask 1", this is how you grab it:

```
myLayer.property("Masks").property("Mask1");
```

For pulling a Bulge Center value off a Bulge effect, either of these does the job:

```
myLayer.property("Effects").property("Bulge").property("Bulge Center");
myLayer.property("Effects").property("Bulge").property("bulgeCenter");
```
