# How is it different from UXP plugin development?

1. **[Lifetime](execution-context.md):** Script lifetime stops when execution finishes.
2. **[Limited UI](user-interface.md):** Scripts differ from plugins because they cannot provide panel UI. Dialog UI is the only UI form they can create.
3. **No persistent data:** Persistent storage such as the plugin data folder or `window.localStorage` is unavailable to scripts.
4. **[UXP module access is limited](permitted-uxp-modules.md):** The host application controls UXP module permissions, and currently enables only a small set of modules. _Adobe plans to enable additional modules in future versions._
5. **No identity:** Adobe distribution channels do not yet support UXP scripts. After sharing, any user can run them. Plugins, by contrast, are associated with a plugin ID and obtained through the CCD plugin marketplace.
