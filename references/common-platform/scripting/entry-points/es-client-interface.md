# ESClientInterface()

int ESClientInterface (SoCClient_e kReason, SoServerInterface\* pServer, SoHServer hServer)

### Description

To use the object interface to JavaScript, the library must define this global function. In each session, the function is called once immediately after the library loads and again as it unloads.

### Parameters

| Parameter | Description |
| --- | --- |
| kReason | Reason code for this call, one of these constants: - kSoCClient_init: the call is for initialization during load. - kSoCClient_term.: the call is for termination during unload. |
| pServer | Pointer to an SoServerInterface containing function pointers for entry points that let shared-library code call into JavaScript, create JavaScript classes, and access JavaScript objects. The shared-library code must store this structure between initialization and termination and retrieve it when those functions are needed. |
| hServer | A Support structures reference tied to this shared library. This server acts as the object factory, creating and managing Support structures objects. Shared-library code must retain this structure from initialization through termination. Pass it to taggedDataInit() and taggedDataFree(). |

### Returns

The value is an error code. kESErrOK is the OK result.
