# PropertyGroup.property()

app.project.item(index).layer(index).propertyGroupSpec.property(index)

app.project.item(index).layer(index).propertyGroupSpec.property(name)

### Description

Locates a child property within this group and returns it, keyed by either its index or its name. For a name, you can lean on the same syntax expressions accept. Every one of these forms is permitted and produces the same result:

```javascript
mylayer.position;
mylayer("position");
mylayer.property("position");
mylayer(1);
mylayer.property(1);
```

A handful of a layer's properties — position and zoom among them — are reachable by name only. To track down a property several levels deep by name, you will have to chain more than one call to this method.

To illustrate, the call below descends two levels and yields the first mask inside the mask group: myLayer.property("ADBE Masks").property(1)

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| index | Integer | The index for the child property, in the range [1..numProperties], if this is an indexed group. |
| name | String | The name of the child property. This can be: - Any match name - Any name in expression "parenthesis style" syntax, meaning the display name or the compact English name - Any name in expression "intercap style" syntax. For supported property names, see the table below. |

### Returns

PropertyBase object or null if no child property with the specified string name is found.
