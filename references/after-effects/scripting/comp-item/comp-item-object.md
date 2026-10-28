# CompItem object

app.project.item(index)

app.project.items[index]

### Description

A composition is wrapped by the CompItem object, which lets you inspect and modify it. Reach these objects through their position index in a project's item collection.

Info

CompItem is a subclass of AVItem object, which is a subclass of Item object. All methods and attributes of AVItem and Item, in addition to those listed below, are available when working with CompItem.

### Example

Assuming the project's first item is a CompItem, the snippet below pops up two alerts: the opening one reports how many layers the CompItem holds, and the next reports the name of that CompItem's final layer.

```javascript
var firstComp = app.project.item(1);
alert("number of layers is " + firstComp.numLayers);
alert("name of last layer is " + firstComp.layer(firstComp.numLayers).name);
```
