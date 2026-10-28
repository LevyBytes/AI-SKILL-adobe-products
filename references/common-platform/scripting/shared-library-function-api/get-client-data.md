# getClientData()

ESerror_t setClientData (SoHObject hObject, void\*\* pData);

### Description

Gets data that was previously stored with setClientData().

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| pData | Buffer that receives a pointer to data defined by the library. |

### Returns

The value is an error code. kESErrOK is the OK result.
