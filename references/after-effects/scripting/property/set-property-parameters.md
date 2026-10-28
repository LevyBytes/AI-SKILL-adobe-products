# Property.setPropertyParameters()

app.project.item(index).layer(index).propertySpec.setPropertyParameters(items)

Note

This functionality was added in After Effects 17.0.1 (2020)

### Description

Configures the parameters on the Menu Property of a Dropdown Menu Control. Whatever Menu items already exist get replaced wholesale by the array of strings you hand in.

- The only property accepting parameter assignment is the Menu property of the Dropdown Menu Control effect.
- Verify with isDropdownEffect that a property accepts parameter assignment before invoking this method.
- Any failure of this method raises an exception.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| items | Array of strings | Values which will replace the existing menu entries in a Dropdown Menu Control. - Only strings are allowed. - Empty item strings are not allowed. - Duplicate item strings are not allowed. - The character "\" is not allowed in the item strings. - The string "(-" can be specified as of the item strings, to create a separator line in the dropdown menu. The separator lines will claim an index for each of themselves. |

Tip

Provide item strings as ASCII, or as MultiByte text that the running system's current code-page can encode. Put another way, supply the item strings in the script of whatever system is executing.

For example: should you feed Japanese item strings to a script executing on an English system, the resulting dropdown effect shows garbled, unreadable characters in those item strings.

### Example

```javascript
var dropdownItems = [
    "First Item",
    "Second Item",
    "(-",
    "Another Item",
    "Last Item"
];

var dropdownEffect = layer.property("ADBE Effect Parade").addProperty("ADBE Dropdown Control");
dropdownEffect.property(1).setPropertyParameters(dropdownItems);
```

### Returns

Property object, the updated Dropdown Menu Control's Menu property.
