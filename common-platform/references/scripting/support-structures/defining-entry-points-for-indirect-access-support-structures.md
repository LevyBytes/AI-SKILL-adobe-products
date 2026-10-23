# Defining entry points for indirect access - Support structures

Functions that you define for the JavaScript interface receive these support structures:

### Parameters

| Parameter | Description |
| --- | --- |
| SoHObject | Opaque pointer (long \*) for a JavaScript object's C/C++ representation. |
| SoHServer | Opaque pointer (long \*) to the server object, which serves as the shared library's object factory. |
| SoCClientName | Structure that uniquely identifies methods and properties. |
| TaggedData | Structure that wraps data values together with type information for transfer between C/C++ and JavaScript. |
