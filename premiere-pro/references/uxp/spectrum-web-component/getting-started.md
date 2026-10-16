# Getting started

**Step 1**: Turn on SWC in manifest.json

- Set `manifestVersion` to version 5 or above
- Set `enableSWCSupport` to `true`

```json
{
  "manifestVersion": 5,
  "host": [
    {
      "app": "PS",
      "minVersion": "24.4"
    }
  ],
  "featureFlags": {
    "enableSWCSupport": true
  }
}
```

**Step 2**: Install the component. For example,

```bash
npm install @swc-uxp-wrappers/button
```

**Step 3**: Import the component

Add these imports to the plugin JavaScript entrypoint compiled by your configured bundler.

```js
import '@swc-uxp-wrappers/button/sp-button.js';
```

```html
<sp-button variant="primary">I'm a button</sp-button>
```
