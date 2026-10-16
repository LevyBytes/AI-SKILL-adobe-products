# 2. Write Your C++ Logic

Register initialization and termination routines after including the main header:

```cpp
#include "UxpAddon.h"

addon_value init(addon_env env, addon_value exports) {
    // Register functions and properties on 'exports'
    return exports;
}

void terminate() {
    // Cleanup logic
}

UXP_ADDON_INIT(init);
UXP_ADDON_TERMINATE(terminate);
```

Inside `init`, use the addon APIs, defined in `UxpAddonShared.h` through `addon_apis`, to expose native functions that JavaScript can call. Calls to these APIs use the `UxpAddonApis.uxp_addon_***()` form.
