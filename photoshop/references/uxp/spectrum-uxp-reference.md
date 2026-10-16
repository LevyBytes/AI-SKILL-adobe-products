# Spectrum UXP Reference

UXP lets you build UI in three ways: standard HTML Elements, built-in Spectrum UXP widgets, and the recently added Spectrum Web Components.

First, a few terms matter:

- Spectrum - Adobe's open-source design language and guidelines.
- Web components - HTML5 Web technology for defining custom elements and tags.
- Adobe Spectrum Web Components (popularly known as SWC) - Adobe's open-source library of Spectrum-styled web components.

With those terms set, here are the options:

- **HTML elements**

  Plain HTML elements that follow web standards, such as `<img>`, `<dialog>` etc. You can style them through your own stylesheet. See the supported HTML [tags](html/html-reference.md) and [elements](html-elements.md).

- **Spectrum UXP widgets**

  Built-in UXP components styled for Spectrum. Their APIs resemble the Adobe SWC library and expose a subset of the matching SWC capabilities.

  Use the same tag syntax. Sample:

  ```html
  <sp-button variant="primary">I'm a Spectrum button</sp-button>
  ```

  See the UXP-supported Spectrum widget lists: [User Interface](user-interface.md) and [Typography](typography.md)

- **UXP Spectrum web components**

  These Adobe Spectrum Web Components are available starting in UXP v7.0 and are implemented with Web Components technology.

  To use them, install each component separately and `import` it before using its tag. A typical install command is:

```bash
npm i @swc-uxp-wrappers/button
```

Add these imports to the plugin JavaScript entrypoint compiled by your configured bundler.

```js
import '@swc-uxp-wrappers/button/sp-button.js';
```

  ```html
  <sp-button variant="primary">I'm a SWC button</sp-button>
  ```

  Even though the tag looks the same as a Spectrum UXP widget, its implementation path is fundamentally different. Continue for the differences.
