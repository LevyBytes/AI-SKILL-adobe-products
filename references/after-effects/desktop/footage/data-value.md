# dataValue(dataPath)

Return type: Varies (Number, Array, Boolean, String, etc.)

Argument type: dataPath is a String.

Pulls the value sitting at the named data path inside a data-driven layer (JSON, say). The value at the current time is returned.

### Footage.dataValue

Signature: `{footageItem}.dataValue(dataPath)`.

Returns the value of specificed static or dynamic data stream in a .mgJSON file. It takes one array value that traces the path through the hierarchy down to the data stream you want. As an example:

`footage("sample.mgjson").dataValue([0])` returns data of the first child.

`footage("sample.mgjson").dataValue([1, 0])` returns data of the first child in the second group.

| Parameter | Description |
| --- | --- |
| `dataPath` | Array, required. The path in the hierarchy to a static or dynamic data stream. |

Returns:

The value of the data stream.
