# The Sandbox Model

By default, UXP limits file-system reach through a security model. The protected set of locations available without extra permissions is the **sandbox**.

**In plugins**, the sandbox includes:

- **Plugin folder**: the directory where the plugin is installed (read-only)
- **Data folder**: durable storage for data owned by the plugin
- **Temporary folder**: short-lived storage that can be removed automatically

Treat the Temporary folder as _transitory_, because UXP may clear it automatically. The Data folder is _persistent_ through app upgrades, but uninstalling the plugin or user cleanup can remove it. Give users a way to save critical backups in locations they choose.

Many plugins can stay inside the sandbox. When access is needed elsewhere, such as a user's Documents folder or a project-specific directory, UXP uses a **permission-based system**.
