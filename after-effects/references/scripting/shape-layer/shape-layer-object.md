# ShapeLayer object

app.project.item(index).layer(index)

### Description

A shape layer inside a composition is represented by the ShapeLayer object. You create one with LayerCollection.addShape(), and you reach it from an item's layer collection by index number or by a name string.

Info

ShapeLayer sits below AVLayer in the hierarchy, and AVLayer below Layer; consequently the methods and attributes of both AVLayer and Layer are usable when you handle a ShapeLayer.
