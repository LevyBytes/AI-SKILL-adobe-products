# setFieldValue

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 9.0 | No | No | All |

Field values are type-converted as they are set, with the schema's collectionField dictating which conversion applies. Trying to set a value for a field the schema doesn't define throws an exception.

Parameters

| Parameter | Description |
| --- | --- |
| name | A string naming the field you want. Should the schema not hold name, an exception is raised. |
| value | A string, number, or date giving the field's value, which gets type-coerced to fit the schema. |
| prefix | (Optional) A string giving the prefix for the field value. |

Returns

That field's value, or null when the schema lacks the field.

Example: Read and write field values on this collection's first data object.

```javascript
var d = this.dataObjects[0];
d.setFieldValue("subject", "New laptop!", "RE: ");

// Now get the same field value we just set. Here s = "RE: New laptop!"
var s = d.getFieldValue({ name:"subject", includePrefix:true });

// Get the same field value, with includePrefix set to false, the default
// Now the value of s is "New laptop!".
s = d.getFieldValue("subject");

// Sets subject to "A. C. Robat" and clears prefix
d.setFieldValue("subject", "A. C. Robat");
```
