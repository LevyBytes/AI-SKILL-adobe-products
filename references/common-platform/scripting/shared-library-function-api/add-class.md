# addClass()

ESerror_t addClass (SoHServer hServer, char\* name, SoObjectInterface_p pObjectInterface);

### Description

Creates a JavaScript class.

### Parameters

| Parameter | Description |
| --- | --- |
| hServer | Support structures reference for this shared library, passed to the global ESClientInterface() function during initialization. |
| name | String. Unique name for the new class. It has to begin with an uppercase alphabetic character. |
| pObjectInterface | Pointer to an SoObjectInterface, the structure holding object-interface method pointers for instances of this class. |

### Returns

The value is an error code. kESErrOK is the OK result.
