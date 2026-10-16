# Accessing the After Effects Function Suites

For C++ code, the way to reach the suites is through `AEFX_SuiteScoper`, which grabs the suite when it's needed and releases it once you're finished.

Below is an example that uses `AEFX_SuiteScope` to reach the `PF_GPUDeviceSuite1` suite:

```cpp
AEFX_SuiteScoper<PF_GPUDeviceSuite1> gpu_suite = AEFX_SuiteScoper<PF_GPUDeviceSuite1>(
    in_dataP,
    kPFGPUDeviceSuite,
    kPFGPUDeviceSuiteVersion1,
    out_dataP);
```

Note

When the requested suite can't be acquired and the optional second template argument, `ALLOW_NO_SUITE`, is left false, `AEFX_SuiteScoper` throws an Exception, `A_Err_MISSING_SUITE`.

When `ALLOW_NO_SUITE` is false, be sure to surround the `AEFX_SuiteScoper`<> call with a try/catch wrapper.

When `ALLOW_NO_SUITE` is true, you should verify the returned pointer isn't NULL before you use it.

With the suite in hand, you can call any function from the suite list, like so:

```cpp
gpu_suite->GetDeviceInfo(in_dataP->effect_ref, extraP->input->device_index, &device_info);
```

For C code, you'll need to acquire and release the suites by hand using the `PF_Suite_Helper` utility files, as shown in the Checkout sample project.

Under the hood, both approaches obtain PICA function suites via AcquireSuite, a member function of the SPBasicSuite that `PF_InData` points to.
