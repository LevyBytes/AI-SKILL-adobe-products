# `main`

| Name | Type | Default |
| --- | --- | --- |
| `main` | `string` | `main.js` |

`main` points to the plugin entry file, resolved from the plugin's installation directory. The target may be HTML or JavaScript; common examples are `index.html` and `index.js`. When older manifests omit the property, UXP falls back to `main.js`.
