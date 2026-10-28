# Property.propertyValueType

app.project.item(index).layer(index).propertySpec.propertyValueType

### Description

Identifies what kind of value the property keeps. Within the PropertyValueType enumeration there is a distinct entry for every data type a property may hold or return, and each one is kept and fetched through its own kind of structure. Data on every property object falls under one of these categories. A 3D spatial property like a layer's position, for instance, lives as an array of three floating-point numbers, so to assign a position you supply exactly that kind of array, like so: mylayer.property("position").setValue([10, 20, 0]);

A shape property such as a layer's mask shape, by contrast, is kept as a Shape object. To assign a shape, hand over a Shape object in this manner:

```javascript
var myShape = new Shape();
myShape.vertices = [[0,0], [0,100], [100,100], [100,0]];
var myMask = mylayer.property("ADBE Mask Parade").property(1);
myMask.property("ADBE Mask Shape").setValue(myShape);
```

### Type

A PropertyValueType enumerated value; read/write. One of:

- PropertyValueType.`NO_VALUE`: Stores no data.
- PropertyValueType.`ThreeD_SPATIAL`: Array of three floating-point positional values. For example, an Anchor Point value might be [10.0, 20.2, 0.0]
- PropertyValueType.ThreeD: Array of three floating-point quantitative values. For example, a Scale value might be [100.0, 20.2, 0.0]
- PropertyValueType.`TwoD_SPATIAL`: Array of 2 floating-point positional values. For example, an Anchor Point value might be [5.1, 10.0]
- PropertyValueType.TwoD: Array of 2 floating-point quantitative values. For example, a Scale value might be [5.1, 100.0]
- PropertyValueType.OneD: A floating-point value.
- PropertyValueType.COLOR:Array of 4 floating-point values in the range [0.0..1.0]. For example, [0.8, 0.3, 0.1, 1.0]
- PropertyValueType.`CUSTOM_VALUE` : Custom property value, such as the Histogram property for the Levels effect.
- PropertyValueType.MARKER: MarkerValue object
- PropertyValueType.`LAYER_INDEX`: Integer; a value of 0 means no layer.
- PropertyValueType.`MASK_INDEX`: Integer; a value of 0 means no mask.
- PropertyValueType.SHAPE: Shape object
- PropertyValueType.`TEXT_DOCUMENT`: TextDocument object
