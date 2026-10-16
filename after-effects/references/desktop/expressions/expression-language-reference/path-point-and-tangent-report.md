# Path point-and-tangent report

This example records the run of point and tangent coordinates taken from Path 1 of Shape 1 on the Shape Layer 1 layer, sampled at time=0, into a string. Drop it on a text layer's source text property to read out the shape's coordinates together with its incoming and outgoing tangents.

```javascript
var pointsList = "";
var sampleTime = 0;
var myShape = thisComp.layer("Shape Layer 1")
  .content("Shape 1").content("Path 1").path;
for (var i = 0; i < myShape.points(sampleTime).length; i++) {
  pointsList += "c: " + myShape.points(sampleTime)[i].toString() +
    " i: " + myShape.inTangents(sampleTime)[i].toString() +
    " o: " + myShape.outTangents(sampleTime)[i].toString() + "\n";
}
pointsList;
```
