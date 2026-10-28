# dataKeyValues(dataPath, t0 = startTime, t1 = endTime)

Return type: Array (Values)

Argument types:

dataPath is a String.

t0 and t1 are Numbers (optional).

Pulls an array of keyframe values for the data path, narrowed to the time range you give.

### Footage.dataKeyValues

Signature: `{footageItem}.dataKeyValues(dataPath, t0 = startTime, t1=endTime)`.

Returns the values for the samples of a specificed dynamic data stream in a .mgJSON file. You may optionally name the time span the samples come from. Left unspecified, it returns the time for every sample between startTime and endTime in the dynamic data stream, the bounds being set by that stream's samplesTemporalExtent property in the .mgJSON file. It takes one array value that traces the path through the hierarchy down to the dynamic data stream you want.

As an example:

`footage("sample.mgjson").dataKeyValues([0], 1, 3)` returns the values of samples between 1 second and 3 seconds for the first child.

| Parameter | Description |
| --- | --- |
| `dataPath` | Array, required. The path in the hierarchy to a dynamic data stream. |
| `t0` | Number, optional. The start time, in seconds, of the span from which to return samples. Defaults to startTime. |
| `t1` | Number, optional. The end time, in seconds, of the span from which to return samples. Defaults to endTime. |

Returns:

Array of numbers representing the sample values.
