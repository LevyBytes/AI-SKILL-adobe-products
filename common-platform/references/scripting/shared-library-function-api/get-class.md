# getClass()

ESerror_t getClass (SoHObject hObject, char\* name, int name_l);

### Description

Gets the parent class name for this object.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| name | String. Buffer that receives the class's unique name. |
| name_1 | Number. Size of the name buffer. |

### Returns

The value is an error code. kESErrOK is the OK result.
