# Automation Plugins: `AutoPluginMain`

For Automation plugins, use the `AutoPluginMain` entry method. The code below pulls out the plugin reference and basic suite.

```cpp
DLLExport SPAPI SPErr AutoPluginMain(const char* caller, const char* selector, void* message) {

    SPMessageData* basicMessage = (SPMessageData*) message;
    sSPBasic = basicMessage->basic;
    gPlugInRef = basicMessage->self;
    ...
```
