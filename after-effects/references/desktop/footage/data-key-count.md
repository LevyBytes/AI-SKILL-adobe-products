# dataKeyCount(dataPath)

Return type: Number

Argument type: dataPath is a String.

Counts the keyframes present along the named data path within a data-driven property.

### Footage.dataKeyCount

Signature: `{footageItem}.dataKeyCount(dataPath)`.

Returns the number of samples in a specificed dynamic data stream in a .mgJSON file.It takes one array value that traces the path through the hierarchy down to the dynamic data stream you want.

As an example:

- `footage("sample.mgjson").dataKeyCount([0])` returns the count of samples for the first child
- `footage("sample.mgjson").dataKeyCount([1, 0])` returns the count of samples for the first child in the second group

| Parameter | Description |
| --- | --- |
| `dataPath` | Array, required. The path in the hierarchy to a static or dynamic data stream. |

Returns:

The number of samples in the dynamic data stream.
