# Layer revolves in a circle

An expression doesn't have to borrow properties from other layers. You could, for example, send a layer orbiting around the composition's center.

Within your composition, choose a layer.

Hit P so the Timeline panel surfaces that layer's Position property.

The stopwatch to the left of the property name responds to an Alt-click on Windows or an Option-click on macOS.

Drop this code snippet into the expression field:

```javascript
var centerOfComp = [ ( thisComp.width / 2 ), ( thisComp.height / 2) ];
var circleOverTime = [ Math.sin( time ) * 50, -Math.cos( time ) * 50 ];
centerOfComp + circleOverTime;
```
