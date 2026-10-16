# ESInitialize()

char* ESInitialize (TaggedData* argv, long argc);

### Description

Invoked when the library is brought into memory.

### Parameters

| Parameter | Description |
| --- | --- |
| argv, argc | Pointer plus count for constructor arguments, represented as TaggedData. |

### Returns

A string containing function signatures; see Library initialization.
