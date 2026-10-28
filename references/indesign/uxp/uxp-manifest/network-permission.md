# NetworkPermission

Lists the domains available to plugin network requests.

**Example**

```json
{
  "domains": ["https://example.com", "https://*.adobe.com/", "wss://*.myplugin.com"]
}
```

In plugin code, a network request can then be made like this:

```javascript
const response = await fetch("https://example.com");
```

Images can also be loaded this way:

```html
<img src="https://example.com/image.png" />
```

To permit every domain, set `domains` to `"all"`.

```json
{
  "domains": "all"
}
```

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `domains` \* | `string[] \| "all"` | required | Domains available to the plugin, either as a domain list or as `"all"` for unrestricted domain access. |

The [network recipe](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/cba672dce97bcb5805baaa7558d83abbabd825f6/src/pages/resources/recipes/network/index.md) provides additional detail.
