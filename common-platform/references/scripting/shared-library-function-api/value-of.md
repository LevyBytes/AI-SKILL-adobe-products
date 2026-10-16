# valueOf()

ESerror_t valueOf (SoHObject hObject, TaggedData\* pResult);

### Description

Builds and returns the object's value without type conversion.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| pResult | Buffer that receives the value result, represented as TaggedData |

### Returns

The value is an error code. kESErrOK is the OK result.
