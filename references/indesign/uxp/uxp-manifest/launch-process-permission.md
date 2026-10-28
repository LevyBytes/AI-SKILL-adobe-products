# LaunchProcessPermission

Defines which schemes and extensions the plugin is allowed to launch.

For a plugin that opens a web browser, include `http` and `https` under `schemes`.

**Example**

```json
{
  "schemes": ["http", "https"],
  "extensions": []
}
```

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `schemes` \* | `string[]` | required | Schemes the plugin may launch. **Example** `["http", "https", "mailto"]` |
| `extensions` \* | `string[]` | required | Extensions the plugin may launch. Applies to local-file launches through `file://`. **Example** `["pdf", "png", "jpg"]` |

The [launch process recipe](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/cba672dce97bcb5805baaa7558d83abbabd825f6/src/pages/resources/recipes/launch-process/index.md) provides additional detail.
