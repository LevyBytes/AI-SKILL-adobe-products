# Includes and globals

Start by including the required files and declaring globals for the key pointers.

```cpp
// Include these
#include "PIActions.h" // For PIActionDescriptor
#include "PIUXPSuite.h" // For messaging

// Your globals
SPBasicSuite * sSPBasic = NULL; // This is passed to your main function
SPPluginRef gPlugInRef = NULL; // This is passed to your main function
PsUXPSuite1* sUxpProcs = NULL; // You acquire this using sSPBasic
PSActionDescriptorProcs* sDescriptorProcs = NULL; // You acquire this using sSPBasic
```
