# FeatureFlags

Lists the experimental features used by the plugin.

**Example**

```json
{
  "enableFillAsCustomAttribute": true,
  "enableSWCSupport": true
}
```

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `enableFillAsCustomAttribute` | `boolean` | optional | Allows CSS variables in the `fill` attribute on SVG elements. **Example** ` ` CSS sample: `:root { --iconColor: blue; }` **Default value** `false` |
| `enableSWCSupport` | `boolean` | optional | Adds support for [Spectrum Web Components](https://developer.adobe.com/indesign/uxp/reference/uxp-api/reference-spectrum/swc/) after those components are installed and imported separately. **Example** `Click me` Install the library yourself, bring it in with an import such as `import '@spectrum-web-components/button/sp-button.js'`, then package the result with webpack, esbuild, or a similar bundler so it ships inside the plugin. **Default value** `false` |
