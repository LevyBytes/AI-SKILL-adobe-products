# call()

ESerror_t call (SoHObject hObject, SoCClientName* name, int argc, TaggedData* argv, TaggedData\* pResult);

### Description

Invoked when JavaScript code calls a method of this class:

```javascript
xx.mymethod()
```

JavaScript method calls for this class require this function.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| name | Property name, as a pointer to an SoCClientName. |
| argc, argv | Count and pointer for arguments passed to the call, represented as TaggedData |
| pResult | Buffer that receives the call result, represented as TaggedData |

### Returns

The value is an error code. kESErrOK is the OK result.
