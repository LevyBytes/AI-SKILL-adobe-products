# Getting started

**Step 1**: Enable SWC in manifest.json

- Set `manifestVersion` to version 5 or above
- Turn `enableSWCSupport` on

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

**Step 2**: Install the component. Example:

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
