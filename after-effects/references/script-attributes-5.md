# Attributes (part 5)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Property object — Methods

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

A KeyframeInterpolationType enumerated value; one of:

- KeyframeInterpolationType.LINEAR
- KeyframeInterpolationType.BEZIER
- KeyframeInterpolationType.HOLD

### Property.keyInSpatialTangent()

app.project.item(index).layer(index).propertySpec.keyInSpatialTangent(keyIndex)

### Description

Hands back the incoming spatial tangent for the keyframe you name, provided the property is spatial — meaning its value type is Two`D_SPATIAL`orThree`D_SPATIAL`.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Array of floating-point values:

- If the property value type is PropertyValueType.Two`D_SPATIAL`, the array contains 2 floating-point values.
- If the property value type is PropertyValueType.Three`D_SPATIAL`, the array contains 3 floating-point values.
- If the property value type is neither of these types, an exception is generated.

### Property.keyInTemporalEase()

app.project.item(index).layer(index).propertySpec.keyInTemporalEase(keyIndex)

### Description

Hands back the incoming temporal ease for the keyframe you name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Array of KeyframeEase objects:

- If the property value type is PropertyValueType.TwoD, the array contains 2 objects.
- If the property value type is PropertyValueType.ThreeD, the array contains 3 objects.
- For any other value type, the array contains 1 object.

### Property.keyLabel()

app.project.item(index).layer(index).propertySpec.keyLabel(keyIndex)

Note

This functionality was added in After Effects 22.6.

### Description

Gives the keyframe's label color, identified by its number — 0 stands for None, while 1 through 16 each map to one of the preset colors defined in the Labels preferences.

Read only. Use setLabelAtKey to assign keyframe color labels.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Integer (0 to 16); read only.

### Property.keyOutInterpolationType()

app.project.item(index).layer(index).propertySpec.keyOutInterpolationType(keyIndex)

### Description

Gives the outgoing interpolation type for the keyframe you specify.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

A KeyframeInterpolationType enumerated value; one of:

- KeyframeInterpolationType.LINEAR
- KeyframeInterpolationType.BEZIER
- KeyframeInterpolationType.HOLD

### Property.keyOutSpatialTangent()

app.project.item(index).layer(index).propertySpec.keyOutSpatialTangent(keyIndex)

### Description

Hands back the outgoing spatial tangent for the keyframe you name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Array of floating-point values:

- If the property value type is PropertyValueType.Two`D_SPATIAL`, the array contains 2 floating-point values.
- If the property value type is PropertyValueType.Three`D_SPATIAL`, the array contains 3 floating-point values.
- If the property value type is neither of these types, an exception is generated.

### Property.keyOutTemporalEase()

app.project.item(index).layer(index).propertySpec.keyOutTemporalEase(keyIndex)

### Description

Hands back the outgoing temporal ease for the keyframe you name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Array of KeyframeEase objects:

- If the property value type is PropertyValueType.TwoD, the array contains 2 objects.
- If the property value type is PropertyValueType.ThreeD, the array contains 3 objects.
- For any other value type, the array contains 1 object.

### Property.keyRoving()

app.project.item(index).layer(index).propertySpec.keyRoving(keyIndex)

### Description

Gives true when the keyframe you name is roving. A property's first and last keyframes are never allowed to rove, so attempting to set roving on either is simply disregarded and keyRoving() keeps returning false for it. An exception fires whenever the property value type is neither Two`D_SPATIAL` nor Three`D_SPATIAL`.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Boolean.

### Property.keySelected()

app.project.item(index).layer(index).propertySpec.keySelected(keyIndex)

### Description

Gives true when the keyframe you name is currently selected.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Boolean.

### Property.keySpatialAutoBezier()

app.project.item(index).layer(index).propertySpec.keySpatialAutoBezier(keyIndex)

### Description

Gives true when the keyframe you name uses spatial auto-Bezier interpolation. (That interpolation takes hold on this keyframe only while keySpatialContinuous(keyIndex) is true as well.) An exception fires if the property value type is neither Two`D_SPATIAL` nor Three`D_SPATIAL`.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Boolean.

### Property.keySpatialContinuous()

app.project.item(index).layer(index).propertySpec.keySpatialContinuous(keyIndex)

### Description

Gives true when the keyframe you name has spatial continuity. An exception fires if the property value type is neither Two`D_SPATIAL` nor Three`D_SPATIAL`.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Boolean.

### Property.keyTemporalAutoBezier()

app.project.item(index).layer(index).propertySpec.keyTemporalAutoBezier(keyIndex)

### Description

Gives true when the keyframe you name uses temporal auto-Bezier interpolation. This interpolation takes hold on the keyframe only when the keyframe interpolation type is KeyframeInterpolationType.BEZIER across both keyInInterpolationType(keyIndex) and keyOutInterpolationType(keyIndex).

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Boolean.

### Property.keyTemporalContinuous()

app.project.item(index).layer(index).propertySpec.keyTemporalContinuous(keyIndex)

### Description

Gives true when the keyframe you name has temporal continuity. That continuity takes hold on the keyframe only when the keyframe interpolation type is KeyframeInterpolationType.BEZIER across both keyInInterpolationType(keyIndex) and keyOutInterpolationType(keyIndex).

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Boolean.

### Property.keyTime()

app.project.item(index).layer(index).propertySpec.keyTime(keyIndex) app.project.item(index).layer(index).propertySpec.keyTime(markerComment)

### Description

Locates the keyframe or marker you specify and returns when it occurs. When nothing matches the argument you pass, the method throws an exception and an error appears.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |
| markerComment | String | The comment attached to a marker (see MarkerValue.comment attribute). |

### Returns

Floating-point value.

### Property.keyValue()

app.project.item(index).layer(index).propertySpec.keyValue(keyIndex)

app.project.item(index).layer(index).propertySpec.keyValue(markerComment)

### Description

Locates the keyframe or marker you specify and returns its present value. When nothing matches the argument you pass, the method throws an exception and an error appears.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |
| markerComment | String | The comment attached to a marker (see MarkerValue.comment attribute). |

### Returns

Returns the value of the type corresponding to the PropertyValueType.

### Property.nearestKeyIndex()

app.project.item(index).layer(index).propertySpec.nearestKeyIndex(time)

### Description

Gives the index of whichever keyframe sits closest to the time you supply.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Floating-point value | The time, in seconds. The beginning of the composition is 0. |

### Returns

Integer.

### Property.removeKey()

app.project.item(index).layer(index).propertySpec.removeKey(keyIndex)

### Description

Deletes the keyframe you specify from the property. When no keyframe carries that index, an exception is thrown and an error shown. Each removal renumbers the keyframes that remain, so when deleting several you must begin at the largest index and descend to the smallest — that way every remaining index still points at the same keyframe after each deletion.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Nothing.

### Property.setAlternateSource()

app.project.item(index).layer(index).propertySpec.setAlternateSource(newSource)

Note

This functionality was added in After Effects 18.0 (2021)

### Description

Assigns the alternate source for this property.

For the action to succeed, both the Property object and the AVItem passed in for the call have to be Media Replacement compatible.

- Call AVItem.isMediaReplacementCompatible to verify the AVItem qualifies as an alternate source for Media Replacement.
- Call Property.canSetAlternateSource to verify the property permits Media Replacement.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newSource | AVItem object | The new source AVItem. |

### Returns

Nothing.

### Property.setInterpolationTypeAtKey()

app.project.item(index).layer(index).propertySpec.setInterpolationTypeAtKey(keyIndex, inType[, outType])

### Description

Assigns both the in and out interpolation types on the keyframe you specify.

### Parameters

Parameter

Type

Description

keyIndex

Integer

The index for the keyframe, in the range [1..numKeys], as returned by the addKey or nearestKeyIndex.

inType

KeyframeInterpolationType enum.

The incoming interpolation type. One of: - KeyframeInterpolationType.LINEAR - KeyframeInterpolationType.BEZIER - KeyframeInterpolationType.HOLD

outType

KeyframeInterpolationType enum.

Optional. The outgoing interpolation type. If not supplied, the 'out' type is set to the inType value. One of: - KeyframeInterpolationType.LINEAR - KeyframeInterpolationType.BEZIER - KeyframeInterpolationType.HOLD

| --- | --- | --- |

### Returns

Nothing.

### Property.setLabelAtKey()

app.project.item(index).layer(index).propertySpec.setLabelAtKey(keyIndex, labelIndex)

Note

This functionality was added in After Effects 22.6 (2022)

### Description

Assigns the keyframe's label color, identified by its number — 0 stands for None, while 1 through 16 each map to one of the preset colors defined in the Labels preferences.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |
| labelIndex | Integer, in the range [0..16] | The index for the new label value. |

### Returns

Nothing.

### Property.setPropertyParameters()

app.project.item(index).layer(index).propertySpec.setPropertyParameters(items)

Note

This functionality was added in After Effects 17.0.1 (2020)

### Description

Configures the parameters on the Menu Property of a Dropdown Menu Control. Whatever Menu items already exist get replaced wholesale by the array of strings you hand in.

- The only property accepting parameter assignment is the Menu property of the Dropdown Menu Control effect.
- Verify with isDropdownEffect that a property accepts parameter assignment before invoking this method.
- Any failure of this method raises an exception.

### Parameters

Parameter

Type

Description

items

Array of strings

Values which will replace the existing menu entries in a Dropdown Menu Control. - Only strings are allowed. - Empty item strings are not allowed. - Duplicate item strings are not allowed. - The character "\" is not allowed in the item strings. - The string "(-" can be specified as of the item strings, to create a separator line in the dropdown menu. The separator lines will claim an index for each of themselves.

| --- | --- | --- |

Tip

Provide item strings as ASCII, or as MultiByte text that the running system's current code-page can encode. Put another way, supply the item strings in the script of whatever system is executing.

For example: should you feed Japanese item strings to a script executing on an English system, the resulting dropdown effect shows garbled, unreadable characters in those item strings.

### Example

```
var dropdownItems = [
    "First Item",
    "Second Item",
    "(-",
    "Another Item",
    "Last Item"
];

var dropdownEffect = layer.property("ADBE Effect Parade").addProperty("ADBE Dropdown Control");
dropdownEffect.property(1).setPropertyParameters(dropdownItems);
```

### Returns

Property object, the updated Dropdown Menu Control's Menu property.

### Property.setRovingAtKey()

app.project.item(index).layer(index).propertySpec.setRovingAtKey(keyIndex, newVal)

### Description

Switches roving on or off for the keyframe you specify. A property's first and last keyframes can never rove, so any attempt to set roving on either is disregarded and keyRoving() keeps returning false. An exception fires if the property value type is neither Two`D_SPATIAL` nor Three`D_SPATIAL`.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |
| newVal | Boolean | true to turn roving on, false to turn roving off. |

### Returns

Nothing.

### Property.setSelectedAtKey()

app.project.item(index).layer(index).propertySpec.setSelectedAtKey(keyIndex, onOff)

### Description

Selects the keyframe you specify, or clears its selection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |
| onOff | Boolean | true to select the keyframe, false to deselect it. |

### Returns

Nothing.

### Property.setSpatialAutoBezierAtKey()

app.project.item(index).layer(index).propertySpec.setSpatialAutoBezierAtKey(keyIndex, newVal)

### Description

Switches spatial auto-Bezier interpolation on or off for the keyframe you specify. An exception fires if the property value type is neither Two`D_SPATIAL` nor Three`D_SPATIAL`.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |
| newVal | Boolean | true to turn spatial auto-Bezier on, false to turn it off. |

### Returns

Nothing.

### Property.setSpatialContinuousAtKey()

app.project.item(index).layer(index).propertySpec.setSpatialContinuousAtKey(keyIndex, newVal)

### Description

Switches spatial continuity on or off for the keyframe you specify. An exception fires if the property value type is neither Two`D_SPATIAL` nor Three`D_SPATIAL`.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |
| newVal | Boolean | true to turn spatial auto-Bezier on, false to turn it off. |

### Returns

Nothing.

### Property.setSpatialTangentsAtKey()

app.project.item(index).layer(index).propertySpec.setSpatialTangentsAtKey(keyIndex, inTangent[, outTangent])

### Description

Assigns the incoming and outgoing tangent vectors on the keyframe you specify. An exception fires if the property value type is neither Two`D_SPATIAL` nor Three`D_SPATIAL`.

### Parameters

Parameter

Type

Description

keyIndex

Integer

The index for the keyframe, in the range [1..numKeys], as returned by the addKey or nearestKeyIndex.

inTangent

An array of 2 or 3 floating-point values.

The incoming tangent vector. - If the property value type is PropertyValueType.Two`D_SPATIAL`, the array contains 2 values. - If the property value type is PropertyValueType.Three`D_SPATIAL`, the array contains 3 values.

outTangent

An array of 2 or 3 floating-point values.

Optional. The outgoing tangent vector. If not supplied, the out tangent is set to the inTangent value. - If the property value type is PropertyValueType.Two`D_SPATIAL`, the array contains 2 values. - If the property value type is PropertyValueType.Three`D_SPATIAL`, the array contains 3 values.

| --- | --- | --- |

### Returns

Nothing.

### Property.setTemporalAutoBezierAtKey()

app.project.item(index).layer(index).propertySpec.setTemporalAutoBezierAtKey(keyIndex, newVal)

### Description

Switches temporal auto-Bezier interpolation on or off for the keyframe you specify. While on, it influences this keyframe only when keySpatialContinuous(keyIndex) is true too.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |
| newVal | Boolean | true to turn temporal auto-Bezier on, false to turn it off. |

### Returns

Nothing.

### Property.setTemporalContinuousAtKey()

app.project.item(index).layer(index).propertySpec.setTemporalContinuousAtKey(keyIndex, newVal)

### Description

Switches temporal continuity on or off for the keyframe you specify. With temporal continuity on, it influences this keyframe only when the keyframe interpolation type is KeyframeInterpolationType.BEZIER across both keyInInterpolationType(keyIndex) and keyOutInterpolationType(keyIndex).

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |
| newVal | Boolean | true to turn temporal auto-Bezier on, false to turn it off. |

### Returns

Nothing.

### Property.setTemporalEaseAtKey()

app.project.item(index).layer(index).propertySpec.setTemporalEaseAtKey(keyIndex, inTemporalEase[, outTemporalEase])

### Description

Assigns the incoming and outgoing temporal ease on the keyframe you specify. Refer to the KeyframeEase object.

### Parameters

Parameter

Type

Description

keyIndex

Integer

The index for the keyframe, in the range [1..numKeys], as returned by the addKey or nearestKeyIndex.

inTemporalEase

An array of 1, 2, or 3 KeyframeEase objects

The incoming temporal ease. - If the property value type is PropertyValueType.TwoD, the array contains 2 objects. - If the property value type is PropertyValueType.ThreeD, the array contains 3 objects. - For all other value types, the array contains 1 object.

outTemporalEase

An array of 1, 2, or 3 KeyframeEase objects

Optional. The outgoing temporal ease. If not supplied, the outgoing ease is set to the inTemporalEase value. - If the property value type is PropertyValueType.TwoD, the array contains 2 objects. - If the property value type is PropertyValueType.ThreeD, the array contains 3 objects. - For all other value types, the array contains 1 object.

| --- | --- | --- |

### Returns

Nothing.

### Property.setValue()

app.project.item(index).layer(index).propertySpec.setValue(newValue)

### Description

Assigns the static value on a property that carries no keyframes. Should the property already hold keyframes, the method throws an exception and shows an error. For a keyframed property, reach instead for Property.setValueAtTime() or Property.setValueAtKey().

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newValue | Value | A value appropriate for the type of property being set; see Property.propertyValueType. |

### Returns

Nothing.

### Property.setValueAtKey()

app.project.item(index).layer(index).propertySpec.setValueAtKey(keyIndex, newValue)

### Description

Locates the keyframe you specify and assigns its value. When the property holds no keyframes, or none at that index, the method throws an exception and shows an error.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |
| newValue | Value | A value appropriate for the type of property being set; see Property.propertyValueType. |

### Returns

Nothing.

### Property.setValueAtTime()

app.project.item(index).layer(index).propertySpec.setValueAtTime(time, newValue)

### Description

Assigns a keyframe's value at the time you give. When no keyframe yet exists for the named property at that time, one is created and given the value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Floating-point value | The time, in seconds, at which to set the value. The beginning of the composition is 0. |
| newValue | Value | A value appropriate for the type of property being set; see Property.propertyValueType. |

### Returns

Nothing.

### Property.setValuesAtTimes()

app.project.item(index).layer(index).propertySpec.setValuesAtTimes(times, newValues)

### Description

Assigns values across a batch of keyframes at the times you give. Where the named property lacks a keyframe at a given time, one is created and given its value. You pass times and values as arrays, and the two arrays have to match in length.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| times | Array of floating-point values | An array of times, in seconds. The beginning of the composition is 0. |
| newValues | Array of values | A array of values appropriate for the type of property being set; see Property.propertyValueType. |

### Returns

Nothing.

### Property.valueAtTime()

app.project.item(index).layer(index).propertySpec.valueAtTime(time, preExpression)

### Description

Gives the named property's value evaluated at the time you supply. Be aware the returned value's type is left unstated; it varies with whichever property is being evaluated.

Tip

Beginning with After Effects 13.6, this method holds off until time-intensive expressions such as sampleImage have finished evaluating before handing back its result.

### Parameters
