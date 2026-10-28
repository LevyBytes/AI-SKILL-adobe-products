# window.FormData - set(name, value, filename)

When entries already use the input name, this operation replaces the first existing entry with the new entry and removes the rest.
If no matching entry exists, it appends a new name/value entry.

**See**: [FormData - set](https://developer.mozilla.org/en-US/docs/Web/API/FormData/set)  
**Since**: v7.3.0

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Field name |
| value | `string` \| `Blob` | Field value. Values that are neither string nor Blob are converted to a string. |
| filename | `string` | Filename sent to the server for a value supplied as a Blob object or File object. Blob object defaults to "blob"; File object uses the file name from the name property. |
