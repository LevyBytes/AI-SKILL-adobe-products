# Property.essentialPropertySource

app.project.item(index).layer(index).essentialProperty.property(index).essentialPropertySource

Note

This functionality was added in After Effects 22.0 (2022)

### Description

Defined on an Essential Property object, this instance property hands back the original source Property that the Essential Property was built from.

### Type

Can be either:

- A read/write Property object, in the case that the source object used to create the Essential Property was a Property
- A read/write AVLayer object, in the case that the source object used to create the Essential Property was a Media Replacement Footage item
- null if called on a non-Essential Property

### Example

```javascript
var firstComp = app.project.item(1);
var opacityProp = firstComp.layer(1).property("Transform").property("Opacity");

opacityProp.addToMotionGraphicsTemplate(firstComp);

var secondComp = app.project.item(2);
secondComp.layers.add(firstComp);

var essentialOpacity = secondComp.layer(1).essentialProperty.property(1);
if (essentialOpacity.essentialPropertySource == opacityProp) {
    alert("You can get the source Property from an Essential Property!");
}
```
