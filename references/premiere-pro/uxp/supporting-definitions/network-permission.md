# `NetworkPermission`

`NetworkPermission` lists the domains available to plugin network requests.

```json
{
  "domains": ["https://example.com", "https://*.adobe.com/", "wss://*.myplugin.com"]
}
```

Plugin code can then issue network requests such as:

```javascript
const response = await fetch("https://example.com");
```

It can also load images with markup such as:

```html
<img src="https://example.com/image.png" />
```

To allow every domain, set `domains` to `"all"`.

```json
{
  "domains": "all"
}
```

See the [network recipe](../network-operations/reference-index.md) for additional detail.
