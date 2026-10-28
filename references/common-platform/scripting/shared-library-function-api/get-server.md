# getServer()

ESerror_t getServer (SoHObject hObject, SoHServer* phServer, SoServerInterface_p* ppServerInterface);

### Description

Gets the interface methods for this object together with the server object that manages it.

### Parameters

| Parameter | Description |
| --- | --- |
| hObject | Instance reference for this class in Support structures form. |
| phServer | Buffer that receives the Support structures reference for this object. |
| ppServerInterface | Buffer that receives the SoObjectInterface reference for this object. |

### Returns

The value is an error code. kESErrOK is the OK result.
