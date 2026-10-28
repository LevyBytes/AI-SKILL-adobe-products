# Use Case: Theme Support

CSInterface and the theme manager interface update a CEP extension's theme after the host application's theme changes. The listener uses the CSXS event `"com.adobe.csxs.events.ThemeColorChanged"`. CEP retrieves the current host theme with `var skinInfo = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo;`. The resulting `skinInfo` object contains host theme and font information and can be changed. In UXP, theme awareness can be added with Spectrum CSS and media queries.
