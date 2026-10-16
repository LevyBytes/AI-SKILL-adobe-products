# SDK Contents

Inside the SDK are C++ headers, utilities, and templates for native addons, referred to as **uxpaddons**. Its API deliberately tracks [Node-API](https://nodejs.org/api/n-api.html) closely, so experience with Node.js native addons carries over well.

| Folder | Contents |
| --- | --- |
| `src/api` | **UxpAddonTypes.h** — fundamental data types (opaque abstractions consumed by the SDK APIs). **UxpAddonShared.h** — the full addon API surface, closely mirroring Node-API. |
| `src/utilities` | Utility classes with common helpers. **UxpAddon.h** — provides the `UXP_ADDON_INIT` and `UXP_ADDON_TERMINATE` macros for registering initialization and termination routines. |
| `template/template-dev` | Source code for a minimal addon example—use it as a starting point for your own plugin. |
| `template/template-plugin` | A pre-compiled Hybrid plugin ready to load in UDT. |
