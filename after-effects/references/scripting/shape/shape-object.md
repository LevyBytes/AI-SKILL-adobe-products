# Shape object

app.project.item(index).layer(index).property(index).property("maskShape").value

### Description

A Shape object bundles up the data that describes either a shape inside a shape layer or the outline of a Mask. It serves as the value behind the "Mask Path" AE properties and behind a shape layer's "Path" AE property. Build a fresh, empty Shape object with the constructor new Shape(), then assign each attribute on its own to spell out the shape.

Every shape carries a collection of anchor points (its vertices) plus, for each anchor point, a pair of direction handles known as tangent vectors. In a mask that isn't RotoBezier, a tangent vector sets the heading of the line drawn into or out of an anchor point. Each vertex in the shape owns one incoming tangent vector and one outgoing tangent vector.

A tangent value is given as an x,y coordinate pair measured relative to the vertex it belongs to. Take a tangent of [-1,-1]: it sits up and to the left of the vertex at a 45 degree slope, no matter where the vertex actually lands. A longer handle pulls harder — an incoming segment hugs the vector more tightly for an inTangent of [-2,-2] than for one of [-1,-1], though both approach the vertex from an identical direction.

When a shape stays open, the inTangent of the first vertex and the outTangent of the last vertex are disregarded. When it is closed, those two vectors govern the direction handles of the final segment that runs out of the last vertex and loops back into the first.

Tangents on RotoBezier masks are worked out for you automatically. (See MaskPropertyGroup.rotoBezier) Put a shape inside a RotoBezier mask and its tangent values get disregarded. So for RotoBezier masks you can lay out a shape by assigning only the vertices attribute while leaving both inTangents and outTangents null. Read the new shape back and you'll find its tangent values populated with the automatically computed ones.

On closed mask shapes, variable-width mask feather points may sit anywhere along the mask path. These feather points belong to the Mask Path property. Pick out a given feather point by the segment number of the mask path — that is, the stretch of path lying between two adjacent vertices — where it sits.

Tip

A mask's feather points appear in an array ordered by when each one was created.

### Examples

```javascript
var myShape = new Shape();
myShape.vertices = [[0,0], [0,100], [100,100], [100,0]];
myShape.closed = true;
```

```javascript
var myShape = new Shape();
myShape.vertices = [[0,0], [0,100], [100,100], [100,0]];
myShape.closed = false;
```

```javascript
var myShape = new Shape();
myShape.vertices = [[300,50], [200,150],[300,250],[400,150]];
myShape.inTangents = [[55.23,0],[0,-55.23],[-55.23,0],[0,55.23]];
myShape.outTangents = [[-55.23,0],[0,55.23],[55.23,0],[0,-55.23]];
myShape.closed = true;
```

```javascript
var myShape = new Shape();
myShape.vertices = [[100,100], [100,400], [400,400], [400,100]]; // segments drawn counter clockwise
myShape.closed = true;
myShape.featherSegLocs = [1, 2]; // segments are numbered starting at 0, so second segment is 1
myShape.featherRelSegLocs = [0.15, 0.5]; // 0.15 is closer to the lower-left corner of the square
myShape.featherRadii = [30, 100]; // second feather point (onright-sidesegment) has a larger radius
```
