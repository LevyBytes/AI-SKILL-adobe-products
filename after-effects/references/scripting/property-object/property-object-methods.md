# Property object — Methods

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

A KeyframeInterpolationType enumerated value; one of:

- KeyframeInterpolationType.LINEAR
- KeyframeInterpolationType.BEZIER
- KeyframeInterpolationType.HOLD

## Property object — Methods

| Parameter | Type | Description |
| --- | --- | --- |
| time | Floating-point value | The time, in seconds, at which to set the value. The beginning of the composition is 0. |
| preExpression | Boolean | If the property has an expression and this is true, return the value for the specified time without applying the expression to it. When false, return the result of evaluating the expression for the specified time. Ignored if the property does not have an associated expression. |

### Returns

A value appropriate for the type of the property (see "Property propertyValueType attribute" on page 138).
