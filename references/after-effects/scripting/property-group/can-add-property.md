# PropertyGroup.canAddProperty()

app.project.item(index).layer(index).propertyGroupSpec.canAddProperty(name)

### Description

Comes back true when a property under the supplied name is allowed into this property group.

Take masks as an example: only a mask group will accept one, so the sole valid arguments are "mask" or "ADBE Mask Atom".

```javascript
maskGroup.canAddProperty("mask"); // returns `true`
maskGroup.canAddProperty("ADBE Mask Atom"); // returns `true`
maskGroup.canAddProperty("blend"); // returns false
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The display name or match name of the property to be checked. (See PropertyGroup.addProperty()). |

### Returns

Boolean.
