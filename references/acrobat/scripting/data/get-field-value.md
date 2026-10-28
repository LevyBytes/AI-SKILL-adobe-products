# getFieldValue

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 9.0 | No | No | All |

Fetches, for this embedded file, the value of the field named by the name parameter. Should you ask for a field value the collection schema doesn't define, the result is null.

Parameters

| Parameter | Description |
| --- | --- |
| name | A string naming the field you want. |
| includePrefix | (Optional) A Boolean deciding whether the returned string gets the prefix tacked on. Set to true, the prefix rides along; the default is false. |

Returns

That field's value, or null when the schema lacks the field.
