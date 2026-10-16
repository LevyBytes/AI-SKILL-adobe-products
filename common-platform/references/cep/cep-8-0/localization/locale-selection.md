# Locale selection

Localization requires locale information from both the extension and the host application. Two separate locale information types are involved.

- The **License Locale** (the AMT library returns this as applicationLocale)
- The **Effective/Language/UI** Locale (the user's OS settings control this)

Through `HostEnvironment`, the extension must list supported locales for both the License Locale and the Language Locale. This matters especially when an extension has locale-specific features. The `PlugPlug` library expects locale information from the host application as part of its environment data.

The JavaScript API `HostEnvironment` includes the `appLocale` property.
