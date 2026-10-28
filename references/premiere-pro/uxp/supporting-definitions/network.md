# `network`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `network` | [`NetworkPermission`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#networkpermission) | optional | `undefined` |

`network` permits network use such as HTTP requests (XHR, fetch, etc.) and image loading with markup like `<img src="" />`.

- `"all"`: permits access to every domain.
- `"domains"`: limits access to the domains that are listed.

Without this property, the value is `undefined`, meaning no network access. Details are in [`NetworkPermission`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#networkpermission), and examples are in the [network recipe](../network-operations/reference-index.md).
