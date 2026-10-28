# TextLayer object

app.project.item(index).layer(index)

### Description

A text layer inside a composition is represented by the TextLayer object. You create one through the LayerCollection object's addText method, and you reach it from an item's layer collection by index number or by a name string.

Info

TextLayer descends from AVLayer, which in turn descends from Layer; this means both the AVLayer and Layer methods and attributes are usable when you handle a TextLayer.
