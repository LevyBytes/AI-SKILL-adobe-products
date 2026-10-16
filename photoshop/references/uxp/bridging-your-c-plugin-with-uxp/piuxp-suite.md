# PIUXPSuite

PIUXPSuite uses PIActionDescriptors to communicate with UXP plugins. When working with this suite, use the ActionDescriptor suite defined in the SDK's `PIAction.h`. Begin by adding `PIUXPSuite.h` from the Photoshop C++ SDK to your project.

`PIUXPSuite.h` provides these signatures:

```cpp
typedef void (*PIUXPMessageNotifier)(PIActionDescriptor descriptor);
typedef struct PsUXPSuite1
{
    SPAPI SPErr (*SendUXPMessage) (SPPluginRef selfRef, const char* uxpPluginId, PIActionDescriptor descriptor);
    SPAPI SPErr (*AddUXPMessageListener) (SPPluginRef selfRef, PIUXPMessageNotifier notifier);
    SPAPI SPErr (*RemoveUXPMessageListener) (SPPluginRef selfRef);

} PsUXPSuite1;
```
