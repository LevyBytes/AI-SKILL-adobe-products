# Filter plugins: `PluginMain`

Filter plugins enter through `PluginMain`, where the basic suite and plugin reference are available directly.

```cpp
DLLExport MACPASCAL void PluginMain(const int16 selector,
                                    FilterRecordPtr filterRecord,
                                    intptr_t * data,
                                    int16 * result) {
    sSPBasic = filterRecord->sSPBasic;
    gPlugInRef = filterRecord->plugInRef;
    ...
```
