# eval()

ESerror_t eval (SohServer hServer, char* string, TaggedData* pTaggedData);

### Description

Invokes the JavaScript interpreter to evaluate a JavaScript expression.

### Parameters

| Parameter | Description |
| --- | --- |
| hServer | Support structures reference for this shared library, passed to the global ESClientInterface() function during initialization. |
| String | String containing the JavaScript expression to evaluate. |
| pTaggedData | Pointer to a TaggedData object that receives the evaluation result. |

### Returns

The value is an error code. kESErrOK is the OK result.
