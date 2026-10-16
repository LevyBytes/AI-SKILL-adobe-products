# dataKeyTimes(dataPath, t0 = startTime, t1 = endTime)

Return type: Array (Times in seconds)

Argument types:

dataPath is a String.

t0 and t1 are Numbers (optional).

Pulls an array of keyframe times (in seconds) for the data path, narrowed to the time range you give.

### Footage.dataKeyTimes

Signature: `{footageItem}.dataKeyTimes(dataPath, t0 = startTime, t1=endTime)`.

Returns the time in seconds for the samples of a specificed dynamic data stream in a .mgJSON file. You may optionally name the time span the samples come from. Left unspecified, it returns the time for every sample between startTime and endTime in the dynamic data stream, the bounds being set by that stream's samplesTemporalExtent property in the .mgJSON file. It takes one array value that traces the path through the hierarchy down to the dynamic data stream you want.

The example below returns the times of samples falling between 1 second and 3 seconds for the first child:

```javascript
footage("sample.mgjson").dataKeyTimes([0], 1, 3);
```

| Parameter | Description |
| --- | --- |
| `dataPath` | Array, required. The path in the hierarchy to a dynamic data stream. |
| `t0` | Number, optional. The start time, in seconds, of the span from which to return samples. Defaults to startTime. |
| `t1` | Number, optional. The end time, in seconds, of the span from which to return samples. Defaults to endTime. |

Returns:

Array of numbers representing the sample times.
