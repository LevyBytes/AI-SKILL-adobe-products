# ExternalObject.search()

ExternalObject.search(spec)

### Description

Checks whether a compiled C/C++ library is locatable and leaves it unloaded. When logging is enabled, the ExtendScript Toolkit JavaScript Console receives the list of paths examined.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| spec | String | File specification for the compiled library; path information may be included or omitted. |

### Returns

Boolean. true when the library is found, false otherwise.
