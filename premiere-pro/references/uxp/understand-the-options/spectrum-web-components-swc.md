# Spectrum Web Components (SWC)

[Spectrum Web Components](https://opensource.adobe.com/spectrum-web-components/) are Adobe's official implementation of the Spectrum Design System, built on current [Web Components standard APIs](https://developer.mozilla.org/en-US/docs/Web/API/Web_components). They provide the deepest feature coverage and align most closely with Spectrum guidelines.

To use SWCs, [install each component](https://opensource.adobe.com/spectrum-web-components/getting-started/) separately with `npm` or `yarn`, then import it in the plugin code:

```bash
npm install @spectrum-web-components/button@0.37.0
npm install @spectrum-web-components/textfield@0.37.0
```

Version Requirement

For Premiere plugins, **all Spectrum Web Components must be locked to version 0.37.0** for now. That version requirement keeps them compatible with the current UXP release.

After installation, import and use them from JavaScript:

Add these imports to the plugin JavaScript entrypoint compiled by your configured bundler.

```javascript
import '@spectrum-web-components/button/sp-button.js';
import '@spectrum-web-components/textfield/sp-textfield.js';
```

```html
<sp-button variant="primary">I'm a SWC button</sp-button>
<sp-textfield placeholder="Enter your name"></sp-textfield>
```

| Best for | Trade-offs |
| --- | --- |
| **Production plugins** that need the **full range of Spectrum components**, or when you need to inspect and debug component internals. | Requires Node.js, a package manager (npm/yarn), and a bundler (Webpack, Rollup, etc.) to build your plugin. |

SWC also requires enabling support in `manifest.json`:

```json
{
  "featureFlags": {
    "enableSWCSupport": true
  }
}
```
