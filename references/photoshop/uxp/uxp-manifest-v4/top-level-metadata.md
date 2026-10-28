# Top-level metadata

The top-level manifest JSON object carries the plugin's main metadata.

In the "Required" column, these keywords have the following meanings:

- Develop - needed before the plugin can load.
- Publish - needed for Adobe Developer Console submission and Plugin Manager publication.

| Key path | Type | Description | Required |
| --- | --- | --- | --- |
| `manifestVersion` | `number` | Manifest schema version; for Photoshop, use `4` or a later value. | Develop / Publish `id` `string` Unique plugin identifier; get yours from the [Developer Distribution portal](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/).%7C Develop / Publish |
| `name` | `string` | Use a plugin name of 3 - 45 characters. A good practice is to match the _project name_ created when the Adobe Developer Console issued the plugin ID. | Develop / Publish `version` `string` Plugin version in `x.y.z` format. Use exactly three segments, and keep every component between `0` and `99`. Develop / Publish |
| `main` | `string` | Startup-code path; allowed targets are JavaScript source files and HTML files. | Optional (defaults to `main.js`) `icons` `IconDefinition[]` Plugin icons, which may be rendered in contexts such as the plugin panel. PNG and JPG/JPEG formats are supported, with a maximum file size of 1MB for each icon. Include at least the 1x and 2x sizes. Plugin Manager icons are uploaded through the Adobe Developer Console rather than bundled inside the plugin. See the ["Publishing your plugin" guide](../distribution-options/reference-index.md) for more information. Publish |
| `host` | `HostDefinition\|HostDefinition[]` | Supported host applications for this plugin, including the application type plus minimum or maximum supported host-app versions. **Note:** arrays are allowed ONLY during development; marketplace submission requires a single definition. | Develop / Publish `entrypoints` `EntryPointDefinition[]` Entries the plugin contributes to the _Plugins_ menu and plugin panel. The next section gives the details. Develop / Publish |
