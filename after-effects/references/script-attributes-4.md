# Attributes (part 4)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Property object — Attributes

### Property.alternateSource

app.project.item(index).layer(index).propertySpec.alternateSource

Note

This functionality was added in After Effects 18.0 (2021)

### Description

You will get null back in two situations:

- No alternate source has been assigned to the layer this property belongs to.
- The property itself isn't one that can carry an alternate source.

To find out whether a given property qualifies as a Media Replacement Essential Property, query Property.canSetAlternateSource.

Every Media Replacement Layer carries an alternate source item that is settable.

The "marking" of a layer for media replacement happens at the moment it gets pushed into the Essential Graphics Panel (see AVLayer.addToMotionGraphicsTemplate() or AVLayer.addToMotionGraphicsTemplateAs()).

- When one exists, rendering of that layer draws from the alternate source.
- Without an alternate source assigned, rendering falls back to the source layer of the Media Replacement control, which is the standard path.

Assign a new value through Property.setAlternateSource().

### Type

AVItem object; read-only.

### Property.canSetAlternateSource

app.project.item(index).layer(index).propertySpec.canSetAlternateSource

Note

This functionality was added in After Effects 18.0 (2021)

### Description

Checks whether this property qualifies as an Essential Property capable of Media Replacement.

The result is true for properties that permit Media Replacement, and false otherwise.

### Type

Boolean; read-only.

### Property.canSetExpression

app.project.item(index).layer(index).propertySpec.canSetExpression

### Description

A true result means scripts are allowed to assign an expression to this property, because its type supports doing so. The Property expression attribute is also relevant here.

### Type

Boolean; read-only.

### Property.canVaryOverTime

app.project.item(index).layer(index).propertySpec.canVaryOverTime

### Description

A value of true indicates the property accepts time-based change — in other words, you may write keyframe values or expressions onto it.

### Type

Boolean; read-only.

### Property.dimensionsSeparated

app.project.item(index).layer(index).propertySpec.dimensionsSeparated

### Description

True here signals that the property has been split so each of its dimensions lives as its own property. Take a layer whose position shows up as separate X Position and Y Position entries in the Timeline panel: in that case the Position property reports this attribute as true.

Tip

Only when isSeparationLeader is true does this attribute have meaning.

### Type

Boolean; read/write.

### Property.essentialPropertySource

app.project.item(index).layer(index).essentialProperty.property(index).essentialPropertySource

Note

This functionality was added in After Effects 22.0 (2022)

### Description

Defined on an Essential Property object, this instance property hands back the original source Property that the Essential Property was built from.

### Type

Can be either:

- A read/write Property object, in the case that the source object used to create the Essential Property was a Property
- A read/write AVLayer object, in the case that the source object used to create the Essential Property was a Media Replacement Footage item
- null if called on a non-Essential Property

### Example

```
var firstComp = app.project.item(1);
var opacityProp = firstComp.layer(1).property("Transform").property("Opacity");

opacityProp.addToMotionGraphicsTemplate(firstComp);

var secondComp = app.project.item(2);
secondComp.layers.add(firstComp);

var essentialOpacity = secondComp.layer(1).essentialProperty.property(1);
if (essentialOpacity.essentialPropertySource == opacityProp) {
    alert("You can get the source Property from an Essential Property!");
}
```

### Property.expression

app.project.item(index).layer(index).propertySpec.expression

### Description

Holds the expression assigned to this property. It is writable only while canSetExpression reports true for the property. Any string you assign here gets evaluated on assignment.

- A syntactically valid expression in the string flips expressionEnabled to true.
- Should the string fail as an expression, an error fires and expressionEnabled drops to false.
- Assigning an empty string turns expressionEnabled off without raising any error.

### Type

String; read/write if canSetExpression for the named property is true.

### Property.expressionEnabled

app.project.item(index).layer(index).propertySpec.expressionEnabled

### Description

While true, the property derives its value from the expression tied to it; while false, it relies instead on keyframe data or its static value. Setting this to true is permitted only when canSetExpression is true for the property and expression already holds a valid expression string.

### Type

Boolean; read/write.

### Property.expressionError

app.project.item(index).layer(index).propertySpec.expressionError

### Description

Holds whatever error came out of evaluating the most recent string assigned to expression. When no expression string has ever been set, or the latest one evaluated cleanly, this is the empty string ("").

### Type

String; read-only.

### Property.hasMax

app.project.item(index).layer(index).propertySpec.hasMax

### Description

Reports true when the property is capped by a maximum allowed value, and false when it is not.

### Type

Boolean; read-only.

### Property.hasMin

app.project.item(index).layer(index).propertySpec.hasMin

### Description

Reports true when the property is bounded by a minimum allowed value, and false when it is not.

### Type

Boolean; read-only.

### Property.isDropdownEffect

app.project.item(index).layer(index).propertySpec.isDropdownEffect

Note

This functionality was added in After Effects 17.0.1 (2020)

### Description

A true value identifies the property as the Menu property belonging to a Dropdown Menu Control effect — one whose entries can be refreshed via setPropertyParameters.

### Examples

```
appliedEffect.property("Menu").isDropdownEffect;    // true
appliedEffect.property("Color").isDropdownEffect;   // false
appliedEffect.property("Feather").isDropdownEffect; // false
```

### Type

Boolean; read-only.

### Property.isSeparationFollower

app.project.item(index).layer(index).propertySpec.isSeparationFollower

### Description

When this is true, the property stands for a single split-out dimension of a multidimensional property. The X Position property, for instance, carries this attribute as true.

Tip

In this terminology, the "separation leader" denotes the single consolidated multidimensional property, while each of the fresh single-dimensional properties broken out from it is a "separation follower".

### Type

Boolean; read-only.

### Property.isSeparationLeader

app.project.item(index).layer(index).propertySpec.isSeparationLeader

### Description

A true value marks the property as multidimensional and therefore separable. The Position property, for example, reports this attribute as true.

Tip

A "separation leader" is the unified multidimensional property itself; the new single-axis properties that get split out from it are termed its "separation followers".

### Type

Boolean; read-only.

### Property.isSpatial

app.project.item(index).layer(index).propertySpec.isSpatial

### Description

True indicates the property holds a spatial value — position and effect point controls are typical examples.

### Type

Boolean; read-only.

### Property.isTimeVarying

app.project.item(index).layer(index).propertySpec.isTimeVarying

### Description

True means the property changes over time — it carries keyframes or an active expression. Whenever this attribute reads true, canVaryOverTime is necessarily true as well.

### Type

Boolean; read-only.

### Property.maxValue

app.project.item(index).layer(index).propertySpec.maxValue

### Description

Gives the highest value the property is allowed to take. Should hasMax be false, the access throws an exception and raises an error.

### Type

Floating-point value; read-only.

### Property.minValue

app.project.item(index).layer(index).propertySpec.minValue

### Description

Gives the lowest value the property is allowed to take. Should hasMin be false, the access throws an exception and raises an error.

### Type

Floating-point value; read-only.

### Property.numKeys

app.project.item(index).layer(index).propertySpec.numKeys

### Description

Tells you how many keyframes the property holds. A count of 0 means no keyframing is in effect on it.

### Type

Integer; read-only.

### Property.propertyIndex

app.project.item(index).layer(index).propertySpec.propertyIndex

### Description

Gives the property's index position, with index 1 marking the first property.

### Type

Integer; read-only.

### Property.propertyParameters

app.project.item(index).layer(index).propertySpec.propertyParameters

Note

This functionality was added in After Effects 26.0

### Description

Returns the full list of item strings held by a dropdown menu property, given as an array. It covers dropdown menu properties on both effects and layers, the custom strings in a Dropdown Menu Control's Menu property included.

Serving as the read side for Property.setPropertyParameters(), this property fetches the strings that populate a dropdown menu.

### Examples

```
// Get all options from a Dropdown Menu Control
var comp = app.project.activeItem;
if (comp && comp.selectedLayers.length > 0) {
    var lyr = comp.selectedLayers[0];
    var fx = lyr.property("ADBE Effect Parade").property("Dropdown Menu Control");
    var menuProp = fx.property("Menu");
    var options = menuProp.propertyParameters; // Array of strings
}
```

### Type

Array of strings; read-only.

### Property.propertyValueType

app.project.item(index).layer(index).propertySpec.propertyValueType

### Description

Identifies what kind of value the property keeps. Within the PropertyValueType enumeration there is a distinct entry for every data type a property may hold or return, and each one is kept and fetched through its own kind of structure. Data on every property object falls under one of these categories. A 3D spatial property like a layer's position, for instance, lives as an array of three floating-point numbers, so to assign a position you supply exactly that kind of array, like so: mylayer.property("position").setValue([10, 20, 0]);

A shape property such as a layer's mask shape, by contrast, is kept as a Shape object. To assign a shape, hand over a Shape object in this manner:

```
var myShape = new Shape();
myShape.vertices = [[0,0], [0,100], [100,100], [100,0]];
var myMask = mylayer.property("ADBE Mask Parade").property(1);
myMask.property("ADBE Mask Shape").setValue(myShape);
```

### Type

A PropertyValueType enumerated value; read/write. One of:

- PropertyValueType.`NO_VALUE`: Stores no data.
- PropertyValueType.Three`D_SPATIAL`: Array of three floating-point positional values. For example, an Anchor Point value might be [10.0, 20.2, 0.0]
- PropertyValueType.ThreeD: Array of three floating-point quantitative values. For example, a Scale value might be [100.0, 20.2, 0.0]
- PropertyValueType.Two`D_SPATIAL`: Array of 2 floating-point positional values. For example, an Anchor Point value might be [5.1, 10.0]
- PropertyValueType.TwoD: Array of 2 floating-point quantitative values. For example, a Scale value might be [5.1, 100.0]
- PropertyValueType.OneD: A floating-point value.
- PropertyValueType.COLOR:Array of 4 floating-point values in the range [0.0..1.0]. For example, [0.8, 0.3, 0.1, 1.0]
- PropertyValueType.`CUSTOM_VALUE` : Custom property value, such as the Histogram property for the Levels effect.
- PropertyValueType.MARKER: MarkerValue object
- PropertyValueType.`LAYER_INDEX`: Integer; a value of 0 means no layer.
- PropertyValueType.`MASK_INDEX`: Integer; a value of 0 means no mask.
- PropertyValueType.SHAPE: Shape object
- PropertyValueType.`TEXT_DOCUMENT`: TextDocument object

### Property.selectedKeys

app.project.item(index).layer(index).propertySpec.selectedKeys

### Description

Hands back an array holding the indices of every selected keyframe on the property. The array comes back empty when nothing is selected or the property carries no keyframes at all.

### Type

Array of integers; read-only.

### Property.separationDimension

app.project.item(index).layer(index).propertySpec.separationDimension

### Description

On a separated follower, this gives which dimension of the multidimensional leader it stands for, counting from 0. So the Y Position property reports a separationDimension of 1, while X Position reports 0.

### Type

Integer; read-only.

### Property.separationLeader

app.project.item(index).layer(index).propertySpec.separationLeader

### Description

Points to the multidimensional property that this separated follower was split from. If the property at hand is Y Position, for example, this attribute resolves to the Position property.

Tip

Within this scheme the consolidated multidimensional property goes by "separation leader," whereas the separate single-dimensional properties carved out of it are its "separation followers".

### Type

Property object; read-only.

### Property.unitsText

app.project.item(index).layer(index).propertySpec.unitsText

### Description

Gives a textual label for the units that the value is measured in.

### Type

String; read-only.

### Property.value

app.project.item(index).layer(index).propertySpec.value

### Description

The property's value as it stands at the current time.

- With expressionEnabled true, the evaluated expression result comes back.
- With keyframes present, the keyframed value at the current time comes back.
- Failing both, the static value comes back.

Which value type you receive is governed by the property's value type. Consult the examples for the Property object.

### Type

A value appropriate for the type of the property (see Property.propertyValueType); read-only.

### Property.valueText

app.project.item(index).layer(index).propertySpec.valueText

Note

This functionality was added in After Effects 26.0

### Description

Holds the text of whichever item is currently chosen in a dropdown menu property. It covers dropdown menu properties on effects and layers alike, including the custom strings in the Menu property of Dropdown Menu Controls.

### Examples

```
// Get the currently-selected text string from a Dropdown Menu Control
var comp = app.project.activeItem;
if (comp && comp.selectedLayers.length > 0) {
    var lyr = comp.selectedLayers[0];
    var fx = lyr.property("ADBE Effect Parade").property("Dropdown Menu Control");
    var menuProp = fx.property("Menu");
    var selectedText = menuProp.valueText; // e.g., "Sunday"
}
```

### Type

String; read-only.

## Property object — Methods

### Property.addKey()

app.project.item(index).layer(index).propertySpec.addKey(time)

### Description

Inserts a fresh keyframe or marker into the property at the time you give, then returns that new keyframe's index.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Floating-point value | The time, in seconds, at which to add the keyframe. The beginning of the composition is 0. |

### Returns

Integer; the index of the new keyframe or marker.

### Property.addToMotionGraphicsTemplate()

app.project.item(index).layer(index).propertySpec.addToMotionGraphicsTemplate(comp)

Note

This functionality was added in After Effects 15.0 (CC 2018)

### Description

Places the property into the Essential Graphics panel for the composition you name.

A successful add returns true; otherwise the result is false.

A failed add happens either because the property's type isn't among the supported ones or because that property is already in the EGP for the composition. In that situation After Effects pops a warning dialog noting the property could not be added to the EGP.

Before adding, you can call Property.canAddToMotionGraphicsTemplate() to confirm the property is eligible for a Motion Graphics template.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| comp | CompItem | The composition that you wish to add the property to. |

### Returns

Boolean.

### Property.addToMotionGraphicsTemplateAs()

app.project.item(index).layer(index).propertySpec.addToMotionGraphicsTemplateAs(comp, name)

Note

This functionality was added in After Effects 16.1 (CC 2019)

### Description

Like the plain add, this puts the property into the Essential Graphics panel for the named composition, but it additionally lets you hand the EGP property a name of your choosing.

A successful add returns true; otherwise the result is false.

A failed add happens either because the property's type isn't among the supported ones or because that property is already in the EGP for the composition. In that situation After Effects pops a warning dialog noting the property could not be added to the EGP.

Before adding, you can call Property.canAddToMotionGraphicsTemplate() to confirm the property is eligible for a Motion Graphics template.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| comp | CompItem | The composition that you wish to add the property to. |
| name | String | The new name. |

### Returns

Boolean.

### Property.canAddToMotionGraphicsTemplate()

app.project.item(index).layer(index).propertySpec.canAddToMotionGraphicsTemplate(comp)

Note

This functionality was added in After Effects 15.0 (CC 2018)

### Description

Reports whether the property is eligible to go into the Essential Graphics panel for the composition you name.

When the property can be added the result is true; otherwise it is false.

A property that cannot be added is either of an unsupported type or already present in the EGP for that composition. In that situation After Effects pops a warning dialog noting the property could not be added to the EGP.

Supported property types are:

- Checkbox
- Color
- Numerical Slider (i.e., a single-value numerical property, such as Transform > Opacity or the Slider Control expression control effect)
- Source Text

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| comp | CompItem | The composition that you wish to add the property to. |

### Returns

Boolean.

### Property.getSeparationFollower()

app.project.item(index).layer(index).propertySpec.getSeparationFollower(dim)

### Description

On a separated multidimensional property, fetches one particular follower property. You might, for instance, call this on Position to reach its separated X Position and Y Position properties

Tip

Only when isSeparationLeader is true does this attribute have meaning.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| dim | Integer | The dimension number (starting at 0). |

### Returns

Property object, or an error if the property is not multidimensional or does not have the specified dimension.

### Property.isInterpolationTypeValid()

app.project.item(index).layer(index).propertySpec.isInterpolationTypeValid(type)

### Description

Gives true when the property can be interpolated with the keyframe interpolation type you supply.

### Parameters

### Type

A KeyframeInterpolationType enumerated value; one of:

- KeyframeInterpolationType.LINEAR
- KeyframeInterpolationType.BEZIER
- KeyframeInterpolationType.HOLD

### Returns

Boolean.

### Property.keyInInterpolationType()

app.project.item(index).layer(index).propertySpec.keyInInterpolationType(keyIndex)

### Description

Gives the incoming ('in') interpolation type for the keyframe you specify.

### Parameters
