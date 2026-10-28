# Property objects and static values

app.project.item(index).layer(index).propertySpec

### Description

Value, keyframe, and expression data for one specific AE property of a layer is held by the Property object. An AE property is some value — frequently animatable — that belongs to an effect, a mask, or a transform within a single layer. See PropertyBase object and PropertyGroup.property() for examples of reaching properties.

Info

As a subclass of PropertyBase, Property gives you the whole PropertyBase method and attribute set alongside the ones documented below.

Note

To keep them distinct from After Effects' own notion of a property, the JavaScript objects usually called "properties" are referred to as "attributes" throughout this guide.

### Examples

Get and set the value of opacity:

```javascript
var myProperty = myLayer.opacity;
// opacity has propertyValueType of OneD, and is stored as a float
myProperty.setValue(50); //set opacity to 50%
// Variable my Opacity is a float value
var myOpacity = myProperty.value;
```

Get and set the value of a position:

```javascript
var myProperty = myLayer.position;
// position has propertyValueType of ThreeD_SPATIAL, and is stored as an array of 3 floats
myProperty.setValue([10.0, 30.0, 0.0]);
// Variable my Position is an array of 3 floats
var myPosition = myProperty.value;
```

Change the value of a mask shape to be open instead of closed:

Set `myLayer` to a layer containing at least one mask.

```javascript
var myMask = myLayer.mask(1);
var myProperty = myMask.maskPath;
var myShape = myProperty.value;
myShape.closed = false;
myProperty.setValue(myShape);
```

Related references:

- [Property color and keyframe examples](property-color-and-keyframe-examples.md)
