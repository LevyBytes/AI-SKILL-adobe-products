# Sample code:

For testing, update the sample's `module.cpp` with:

```C++
// Photoshop SDK includes (add path to project)
#include "SPBasic.h"
#include "PIColorSpaceSuite.h"

. . .

// ----------------------------------------------------------------------------------------------------
static const SPBasicSuite* gBasicSuite = nullptr;
static const PSColorSpaceSuite2* gColorSpaceSuite = nullptr;

extern "C" UXP_EXTERN_API_STDCALL(SPErr) PSDLLMain(const char* selector, SPBasicSuite* spBasic, void*)
try {
  do {
    if (spBasic == nullptr)
    break;

    // cache the basic suite so we can use at any time
    gBasicSuite = spBasic;

    SPErr spErr = gBasicSuite->AcquireSuite(kPSColorSpaceSuite, kPSColorSpaceSuiteVersion, reinterpret_cast<const void**>(&gColorSpaceSuite));
    if (spErr != kSPNoError)
    break;

    if (gColorSpaceSuite == nullptr)
    break;

    Color8 colorArray[1] = {11, 30, 201, 0};
    spErr = gColorSpaceSuite->Convert8(plugIncolorServicesRGBSpace, plugIncolorServicesCMYKSpace, colorArray, 1);
    if (spErr != kSPNoError) break;
  } while (false);

  return kSPNoError;
}
  catch(...) {
  return -1;
}
```
