# HostDefinition

UXP runs in several host applications. A host definition names which host app a plugin supports.

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `app` \* | `"PS" \| "ID" \| "XD"` | required | Host application supported by the plugin. Possible values: • `PS`: Adobe Photoshop\\• `ID`: Adobe InDesign\\• `XD`: Adobe XD |
| `minVersion` \* | `string` | required | Lowest supported host-app version. The version string uses the `x.y.z` format. |
| `maxVersion` | `string` | optional | Highest supported host-app version. **Default value** `undefined` (the latest version of the host app) |
