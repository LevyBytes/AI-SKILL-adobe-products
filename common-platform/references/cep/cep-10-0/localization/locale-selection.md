# Locale selection

For localization to work, both the extension and the host application need to supply locale information. CEP distinguishes two locale categories.

- The **License Locale** (the AMT library returns this as applicationLocale)
- The **Effective/Language/UI** Locale (user-controlled through OS settings).

Through `HostEnvironment`, the extension provides supported-locale lists for both the License Locale and the Language Locale. This matters especially when extension features are locale-specific. The `PlugPlug` library expects the host application to include locale information in its environment data.

The JavaScript API `HostEnvironment` includes the `appLocale` property.
