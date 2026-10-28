# addMethod()

ESerror_t addMethod (SoHObject hObject, const char* name, int id, char* desc);

### Description

Registers a new method on an instance.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| name | String. Unique name for the new method. |
| id | Number. Unique identifier for the new method. |
| desc | String. Description for the new method. |

### Returns

The value is an error code. kESErrOK is the OK result.
