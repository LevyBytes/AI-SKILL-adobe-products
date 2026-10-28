# taggedDataInit()

ESerror_t taggedDataInit (SoHSever hServer, TaggedData\* pTaggedData);

### Description

Initializes a TaggedData structure.

### Parameters

| Parameter | Description |
| --- | --- |
| hServer | Support structures reference for this shared library, passed to the global ESClientInterface() function during initialization. |
| pTaggedData | Pointer to a TaggedData. |

### Returns

The value is an error code. kESErrOK is the OK result.
