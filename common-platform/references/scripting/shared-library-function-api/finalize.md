# finalize()

ESerror_t finalize (SoHObject hObject);

### Description

Required. Invoked when JavaScript deletes an instance of this class.

Use this function to release memory allocated by your code.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |

### Returns

The value is an error code. kESErrOK is the OK result.
