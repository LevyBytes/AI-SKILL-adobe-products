# Locale selection

Localization depends on locale data from both the extension and the host application. CEP distinguishes two locale categories.

- The **License Locale** (the AMT library returns this as applicationLocale)
- The **Effective/Language/UI** Locale (the user controls this through OS
  settings).

Through `HostEnvironment`, the extension supplies its supported locales for both the License Locale and the Language Locale. This matters especially when extension functionality is locale-specific. The `PlugPlug` library expects the host application to include locale data in the environment information.

The JavaScript API `HostEnvironment` includes the `appLocale` property.
