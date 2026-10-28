# Manifest

The manifest file's top-level object.

An asterisk (\*) marks required properties.

### Example

```json
{
  "manifestVersion": 5,
  "id": "YOUR_ID_HERE",
  "name": "Name of your plugin",
  "version": "1.0.0",
  "main": "index.html",
  "host": {
    "app": "HOST_APPLICATION",
    "minVersion": "HOST_VERSION"
  },
  "entrypoints": [
    {
      "type": "command",
      "id": "commandFn",
      "label": {
        "default": "Show A Dialog"
      }
    },
    {
      "type": "panel",
      "id": "panelName",
      "label": {
        "default": "Panel Name"
      }
    }
  ],
  "icons": [
    {
      "width": 24,
      "height": 24,
      "path": "icons/icon.png",
      "scale": [1, 2]
    }
  ],
  "requiredPermissions": {
    "network": {
      "domains": "all"
    }
  }
}
```

An asterisk (\*) marks required properties.

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `manifestVersion` \* | `"5"` | required | `manifestVersion` records the manifest schema version; this reference covers schema version 5. |
| `id` \* | `string` | required | `id` distinguishes a plugin across plugin contexts, storage areas, error records, and similar runtime data. For marketplace distribution, this value must match the ID registered in the [Developer Distribution portal plugin ID guide](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/). |
| `name` \* | `string \| LocalizedString` | required | `name` is the visible plugin name in the interface, commonly shown in plugin menus or launchers for top-level actions. It may be a plain string, a `StringsDefinition` key, or a localized string. |
| `strings` | `StringsDefinition` | optional | String resources for localizing the plugin name and other user-facing text. Alternatively, provide a JSON-file path that holds the `StringsDefinition` object. **Default value** `{}` (no strings) |
| `version` \* | `string` | required | `version` carries the plugin version, formatted as `major.minor.patch`. |
| `main` | `string` | optional | Identifies the plugin-bundle HTML or JavaScript entry file by path from the installed plugin directory. Supported files include HTML and JS files such as `index.html` and `index.js`. Deprecation cases fall back to `main.js`. **Default value** `"main.js"` |
| `icons` | `IconDefinition[]` | optional | Icons representing the plugin as a whole or a panel icon. Host applications use these icons when presenting the plugin to users. If the icons array is absent, the host falls back to a default icon. **Default value** `[]` (no icons) |
| `host` \* | `HostDefinition` | required | The `host` object states which host versions are compatible with the plugin. Incompatible plugins will: • fail to install in that host\\• not appear in the in-app plugin marketplace for that host\\• stop being offered for updates when the update no longer matches. |
| `entrypoints` \* | `EntrypointDefinition[]` | required | Lists the entrypoints supplied by the plugin. |
| `requiredPermissions` | `PermissionsDefinition` | optional | Lists the permissions needed by this plugin. Some API surfaces require these declarations before access, and missing permissions can make API calls fail or throw errors. Certain permissions may trigger a user-consent flow. **Default value** `{}` (no permissions) |
| `addon` | `object` | optional | _Not supported in InDesign v18.5_ \\ Definitions for hybrid plugins. A UXP Hybrid plugin can access C++ native-library capabilities. **Default value** `{}` (no addons) |
| `featureFlags` | `FeatureFlags` | optional | Feature flags used to switch selected plugin features on or off. These flags gate features that are not ready for general availability. **Default value** `{}` (no additional feature flags) |
