# addMethods()

ESerror_t addMethods (SoHObject hObject, SoCClientName_p pNames);

### Description

Registers a set of new methods on an instance.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| pNames[] | SoCClientName. Structure containing the names and identifiers for methods to add. |

### Returns

The value is an error code. kESErrOK is the OK result.
