# KeyframeEase object

myKey = new KeyframeEase(speed, influence);

### Description

The keyframe ease settings on a layer's AE property are wrapped up by the KeyframeEase object. Those settings come down to the speed and influence numbers you supply through the property's setTemporalEaseAtKey method. A KeyframeEase object is produced by the constructor, and neither parameter may be left out.

- speed: A floating-point value. Sets the speed attribute.
- influence: A floating-pointvalue in the range [0.1..100.0]. Sets the influence attribute.

### Example

For this example, take it that Position — a spatial property — carries more than two keyframes.

```javascript
var easeIn = new KeyframeEase(0.5, 50);
var easeOut = new KeyframeEase(0.75, 85);
var myPositionProperty = app.project.item(1).layer(1).property("Position");
myPositionProperty.setTemporalEaseAtKey(2, [easeIn], [easeOut]);
```

Here Scale is set: a temporal property carrying either two or three dimensions. With 2D and 3D properties, every dimension needs its own easeIn and easeOut value:

```javascript
var easeIn = new KeyframeEase(0.5, 50);
var easeOut = new KeyframeEase(0.75, 85);
var myScaleProperty = app.project.item(1).layer(1).property("Scale")
myScaleProperty.setTemporalEaseAtKey(2, [easeIn, easeIn, easeIn], [easeOut, easeOut, easeOut]);
```
