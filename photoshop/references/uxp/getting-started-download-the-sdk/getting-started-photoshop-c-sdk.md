# Getting started - Photoshop C++ SDK

Photoshop provides multiple C based plugin APIs, documented in the [downloadable package](https://console.adobe.io/servicesandapis).
To reach those APIs from a hybrid plugin, expose an additional function entry point.

Declaration excerpt: include the Photoshop and UXP Hybrid SDK headers that define `SPBasicSuite`, `SPErr` and `UXP_EXTERN_API_STDCALL`. The implementation follows in the sample code.

```cpp
extern "C" UXP_EXTERN_API_STDCALL(SPErr) PSDLLMain(const char* selector, SPBasicSuite* spBasic, void*);
```

Once Photoshop loads a hybrid addOn, this method is invoked. Use the `basicSuite` argument to acquire Photoshop API suites; the C++ SDK explains suite acquisition.
