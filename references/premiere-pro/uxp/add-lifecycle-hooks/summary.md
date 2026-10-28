# Summary

Lifecycle hooks are callbacks that run automatically at specific plugin and panel moments, giving UXP plugins in Adobe Premiere a place for startup and cleanup work.

**Key Concepts:**

1. **Plugin-level hooks**: `create()` and `destroy()` run when the plugin container is created or destroyed.
2. **Panel-level hooks**: `create()`, `show()`, `hide()`, and `destroy()` run as panels move through their lifecycle.
3. **Implementation**: Register hooks with `entrypoints.setup()` using `plugin` and `panels` objects. Most callbacks can use Promises.
4. **Known limitations**: In Premiere, `hide()` and `destroy()` do not yet work as intended, with a fix expected in a later update. In plugins with multiple panels, lifecycle hooks currently run for every panel without indicating a specific one.
