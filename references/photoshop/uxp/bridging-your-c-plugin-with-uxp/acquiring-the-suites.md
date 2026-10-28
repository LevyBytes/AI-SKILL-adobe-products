# Acquiring the suites

The next step is acquiring the suites used to create ActionDescriptors and send messages to the chosen UXP plugin.

```cpp
// in your main method
    sSPBasic->AcquireSuite(kPSUXPSuite,
                           kPSUXPSuiteVersion1,
                           (const void**)&sUxpProcs);

    sSPBasic->AcquireSuite(kPSActionDescriptorSuite,
                           kPSActionDescriptorSuiteVersion,
                           (const void**)&sDescriptorProcs);

    PIActionDescriptor desc;
    sDescriptorProcs->Make(&desc);
    sDescriptorProcs->PutString(desc, 'helo', "Hello World!");
    sDescriptorProcs->PutFloat(desc, 'fltp', 0.952);

    const char* UXP_MANIFEST_ID = "com.your.pluginId";
    sUxpProcs->SendUXPMessage(gPlugInRef, UXP_MANIFEST_ID, desc);
}
```
