# `enableSWCSupport`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `enableSWCSupport` | `boolean` | optional | `false` |

`enableSWCSupport` permits use of [Spectrum Web Components](../spectrum-web-component.md). Components still need to be installed and imported separately.

```html
<sp-button variant="primary"> Click me </sp-button>
```

You must **manually install** the library with `npm` or `yarn`, **import** the components, for example with `import '@spectrum-web-components/button/sp-button.js'`, and **bundle** the plugin code using a tool such as [Webpack](https://webpack.js.org/) or [Esbuild](https://esbuild.github.io/) so the components are included.
