# addProperty()

ESerror_t addProperty (SoHObject hObject, const char* name, int id, char* desc);

### Description

Registers a new property on an instance.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| name | String. Unique name for the new property. |
| id | Number. Unique identifier for the new property. |
| desc | String. Optional. Description for the new property, or null. |

### Returns

The value is an error code. kESErrOK is the OK result.
