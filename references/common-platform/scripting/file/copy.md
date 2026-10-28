# File.copy()

fileObj.copy(target)

### Description

Duplicates the file referenced by this object at target.

Aliases are resolved before locating the source file. A preexisting file at target is overwritten.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| target | String or File object | URI path for target, or a File object pointing at target. |

### Returns

Boolean. true if the copy succeeds; otherwise false.
