# PropertyGroup.addProperty()

app.project.item(index).layer(index).propertyGroupSpec.addProperty(name)

### Description

Builds a PropertyBase object under the name you give, attaches it to this group, and returns it.

As a rule, properties can only join an indexed group (a property group of type PropertyType.`INDEXED_GROUP`; see PropertyBase.propertyType). The lone exception is a text animator property, which is allowed into a named group (one of type PropertyType.`NAMED_GROUP`).

Should the method be unable to build a property under the name supplied, it raises an exception.

Before invoking this, confirm the property is allowed in the group by calling canAddProperty first. (See PropertyGroup.canAddProperty().)

Warning

Adding a new property to an indexed group rebuilds that group from the ground up, which voids every reference you already hold to its properties.

A way around it is to stash the added property's index using property.propertyIndex.

### Examples

This approach fails, because the slider object goes stale the moment the Color Control property is added:

```javascript
var effectsProperty = layer.property("ADBE Effect Parade");
var slider = effectsProperty.addProperty("ADBE Slider Control");
var color = effectsProperty.addProperty("ADBE Color Control");

var sliderProperty = slider.property("ADBE Slider Control-0001"); // Object 'slider' is Invalid
```

Reworked this way, it succeeds:

```javascript
var effectsProperty = layer.property("ADBE Effect Parade");
var slider = effectsProperty.addProperty("ADBE Slider Control");
var sliderIndex = slider.propertyIndex; // Store 'slider' effect index so it can be reused later
var color = effectsProperty.addProperty("ADBE Color Control");

var sliderProperty = effectsProperty.property(sliderIndex).property("ADBE Slider Control-0001");
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The display name or matchName of the property to add. The following names are supported: - Any match name for a property that can be added through the user interface. For example, "ADBE Mask Atom", "ADBE Paint Atom", "ADBE Text Position", "ADBE Text Anchor Point". - When adding to an ADBE Mask Parade: "ADBE Mask Atom", "Mask". - When adding to an ADBE Effect Parade, any effect by match name, such as "ADBE Bulge", "ADBE Glo2", "APC Vegas". - Any effect by display name, such as "Bulge", "Glow", "Vegas". - For text animators, "ADBE Text Animator". - For selectors, Range Selector has the name "ADBE Text Selector", Wiggly Selector has the name "ADBE Text Wiggly Selector", and Expression Selector has the name "ADBE Text Expressible Selector". |

### Returns

PropertyBase object.
