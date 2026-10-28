# Spectrum UXP Reference

UXP offers three UI authoring paths: standard HTML Elements, built-in Spectrum UXP widgets, and the newer Spectrum Web Components support.

Before the details, keep these terms straight:

- Spectrum - Adobe's open-source design language and guidance.
- Web components - HTML5 Web technology that lets applications define custom tags.
- Adobe Spectrum Web Components (popularly known as SWC) - An open-source Spectrum-styled web component library.

With those names established, the options break down as follows:

- **HTML elements**

  Pure HTML elements follow web standards. Examples include `<img>`, `<dialog>` etc. Custom stylesheets can style them directly. See the supported HTML [tags](html/html-reference/reference-index.md) and [elements](html-elements.md).

- **Spectrum UXP widgets**

  UXP includes these built-in Spectrum-styled components. Their APIs mirror the Adobe SWC library and provide part of the matching SWC functionality.

  Use them like ordinary HTML tags. Example:

  ```html
  <sp-button variant="primary">I'm a Spectrum button</sp-button>
  ```

  Review the Spectrum widgets supported by UXP in [User Interface](user-interface.md) and [Typography](typography.md).

- **UXP Spectrum web components**

  Starting with UXP v7.0, Adobe Spectrum Web Components are available in UXP. Web Components technology underpins this option.

  To use them, install each component separately, then `import` it before placing its tag. Install command:

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

  The tag can look the same as a Spectrum UXP widget, but the implementation model is fundamentally different. Continue reading for the distinctions.
