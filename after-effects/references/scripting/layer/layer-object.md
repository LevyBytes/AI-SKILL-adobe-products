# Layer object

app.project.item(index).layer(index)

### Description

Layers inside compositions are reached through the Layer object. You pull it from an item's layer collection by giving either an index number or a name string.

Info

Layer is a subclass of PropertyGroup, which is a subclass of PropertyBase. All methods and attributes of PropertyGroup, in addition to those listed below, are available when working with Layer, with the exception that propertyIndex attribute is set to undefined.

Info

Layer is the base class for CameraLayer object, LightLayer object, and AVLayer object, so Layer attributes and methods are available when working with all layer types. Layers contain AE properties, in addition to their JavaScript attributes and methods. For examples of how to access properties in layers, see PropertyBase object.

### Example

When the project's first item is a CompItem, this snippet turns off that composition's first layer and gives it a new name — handy, say, for switching an icon off within the composition.

```javascript
var firstLayer = app.project.item(1).layer(1);
firstLayer.enabled = false;
firstLayer.name = "DisabledLayer";
```
