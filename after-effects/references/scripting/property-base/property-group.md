# PropertyBase.propertyGroup()

app.project.item(index).layer(index).propertySpec.propertyGroup([countUp])

### Description

Retrieves the PropertyGroup object for one of this property's ancestor groups, chosen by how far up the parent-child hierarchy you want to climb.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| countUp | Integer, in the range [1..propertyDepth] | Optional. The number of levels to ascend within the parent-child hierarchy. Default is 1, which gets the immediate parent. |

### Returns

PropertyGroup object, or Layer object if the count reaches the containing layer.

### Example

```javascript
var containing_layer = my_property.propertyGroup(my_property.propertyDepth);
```
