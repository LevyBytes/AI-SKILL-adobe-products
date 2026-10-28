# Property color and keyframe examples

Each excerpt requires the appropriate existing host object: `myLayer` for the layer, `myLight` for a light, or `myTextLayer` for a text layer. Run the selected example in After Effects; these are independent examples.

Get the value of a color at a particular time. A color is stored as an array of four floats, [r, g, b, opacity]. This sets the value of the red component of a light's color at time 4 to be half of that at time 2:

```javascript
var myProperty = myLight.color;
var colorValue = myProperty.valueAtTime(2, true);
colorValue[0] = 0.5 * colorValue[0];
myProperty.setValueAtTime(4, colorValue);
```

Check that a scale calculated by an expression at time 3.5 is the expected value of [10,50]:

```javascript
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

```javascript
var myProperty = myLayer.rotation;
myProperty.setValueAtTime(0, 0);
myProperty.setValueAtTime(5, 90);
myProperty.setValueAtTime(10, 0);
```

Change the key frame values for the first three keyframes of some sourcetext:

Set `myTextLayer` to the text layer whose first three Source Text keyframes should change.

```javascript
var myProperty = myTextLayer.sourceText;
if (myProperty.numKeys < 3) {
    alert("error, I thought there were 3 keyframes");
} else {
    myProperty.setValueAtKey(1, new TextDocument("keynumber1"));
    myProperty.setValueAtKey(2, new TextDocument("keynumber2"));
    myProperty.setValueAtKey(3, new TextDocument("keynumber3"));
}
```

Set values using the convenience syntax for position, scale, color, or source text:

Set `myLayer`, `myLight`, and `myTextLayer` to the appropriate layer, light, and text-layer objects.

```javascript
// These two are equivalent. The second fills in a default of 0.
myLayer.position.setValue([20, 30, 0]);
myLayer.position.setValue([20, 30]);
// These two are equivalent. The second fills in a default of 100.
myLayer.scale.setValue([50, 50, 100]);
myLayer.scale.setValue([50, 50]);
// These two are equivalent. The second fills in a default of 1.0
myLight.color.setValue([0.8, 0.3, 0.1, 1.0]);
myLight.color.setValue([0.8, 0.3, 0.1]);
// These two are equivalent. The second creates a TextDocument
myTextLayer.sourceText.setValue(new TextDocument("foo"));
myTextLayer.sourceText.setValue("foo");
```

Related: [Property objects and static values](property-object.md).
