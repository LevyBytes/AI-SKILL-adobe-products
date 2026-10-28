# Locale selection

Localization requires locale information from both the extension and the host application. Two locale categories are used.

- The **License Locale** - the AMT library returns this as applicationLocale
- The **Effective/Language/UI** Locale - the user controls this through
  OS settings.

The extension declares supported locales for both the License Locale and the Language Locale through `HostEnvironment`. This matters especially when extension features target a specific locale. The `PlugPlug` library expects locale information from the host application inside the environmental data.

The JavaScript API `HostEnvironment` includes the `appLocale` property.
