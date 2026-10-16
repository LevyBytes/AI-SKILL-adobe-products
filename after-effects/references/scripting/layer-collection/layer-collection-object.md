# LayerCollection object

app.project.item(index).layers

### Description

A group of layers is modeled by the LayerCollection object. The one tied to a CompItem object carries every layer object for the layers in that composition, and the collection's methods give you a way to work with the layer list.

Info

LayerCollection is a subclass of Collection object. All methods and attributes of Collection, in addition to those listed below, are available when working with LayerCollection.

### Example

Suppose the project's first item is a CompItem and its second is an AVItem; this snippet reports how many layers sit in the CompItem's layer collection, brings in a new layer built from an AVItem in the project, and then reports the updated layer count.

```javascript
var firstComp = app.project.item(1);
var layerCollection = firstComp.layers;
alert("number of layers before is " + layerCollection.length);
var anAVItem = app.project.item(2);
layerCollection.add(anAVItem);
alert("number of layers after is " + layerCollection.length);
```
