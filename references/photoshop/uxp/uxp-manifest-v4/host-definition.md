# HostDefinition

| Key | Type | Description | Required |
| --- | --- | --- | --- |
| `app` | `string` | Supported application for this plugin; currently the only valid values are `"XD"` and `"PS"`. | Develop / Publish `minVersion` `string` Required minimum host-app version in `x.y` format for this plugin; manifest V4 starts at `22.0`. **Note:** use at least two version segments. In typical cases, leave the minor segment at `0`, e.g. `22.0`. Develop / Publish |
| `maxVersion` | `string` | Highest host-app version that can run this plugin. Format it the same way as `host.minVersion`. | Optional |
