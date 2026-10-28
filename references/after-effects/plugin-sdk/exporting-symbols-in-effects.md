# Exporting Symbols in Effects

Recently the After Effects team learned of a problem where clashing symbols break the C++ One Definition Rule (ODR).

After Effects moved its bundled Boost library up to 1.74 in early 2021. Across the months since, we've turned up several plugins that also rely on Boost but export their symbols in a way that can leave either After Effects or the plugin invoking the wrong Boost build, which produces hangs and crashes for users. We further found that a number of AE SDK samples shipped exporting every symbol by default, and — assuming developers used them as a template for other plugins — that likely fed the issue. The March 2021 SDK includes fixes for these.

What After Effects insists on exporting is just one thing: the plugin's entry point.

The SDK samples carry an example in entry.h:

```cpp
#ifdef AE_OS_WIN
#define DllExport __declspec( dllexport )
#elif defined AE_OS_MAC
#define DllExport __attribute__ ((visibility ("default")))
#endif

```

which then gets attached to the entry point function, as in:

```cpp
extern "C" DllExport
PF_Err PluginDataEntryFunction(
PF_PluginDataPtr inPtr,
PF_PluginDataCB inPluginDataCallBackPtr,
SPBasicSuite* inSPBasicSuitePtr,
const char* inHostName,
const char* inHostVersion)
{
PF_Err result = PF_Err_INVALID_CALLBACK;

    result = PF_REGISTER_EFFECT(
        inPtr,
        inPluginDataCallBackPtr,
        "ColorGrid", // Name
        "ADBE ColorGrid", // Match Name
        "Sample Plug-ins", // Category
        AE_RESERVED_INFO); // Reserved Info

    return result;

}

```
