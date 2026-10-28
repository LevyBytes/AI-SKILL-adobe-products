# User Interface (UI)

UXP UI can be authored through three main surfaces: standard HTML Elements, built-in Spectrum UXP widgets, and the newer Spectrum Web Components option.

Scripts and plugins

**In scripts**, only modal dialogs can be created.

**In plugins**, the UI may be a persistent plugin panel that stays visible, or a command plugin that opens modal dialogs only.

Before going further, keep these terms straight:

- **Spectrum** - Adobe's open-source design language and related guidelines.
- **Web components** - HTML5 technology used to create custom elements with their own tag names.
- **Adobe Spectrum Web Components** (popularly known as SWC) - A Spectrum-styled open-source component library.

Here is how the three choices break down:

- **HTML elements**
  These are regular HTML elements that follow web standards, such as `<img>`, `<dialog>` etc. You can style them with your own stylesheet.
- **Spectrum UXP widgets**
  UXP includes these Spectrum-styled components directly. Their APIs mirror the Adobe SWC library and expose part of the matching SWC functionality.

  Use them just like other HTML tags. For example,

  ```html
  <sp-button variant="primary">I'm a Spectrum button</sp-button>
  ```

- **UXP Spectrum web components (Beta)**
  This beta option uses Adobe Spectrum Web Components, with support in UXP v7.0 onwards. The implementation relies on Web Components technology.

  To use this route, install each component separately and `import` it before placing the component tag in your UI. For example,

```bash
npm i @spectrum-web-components/button@0.19.8
```

Add these imports to the plugin JavaScript entrypoint compiled by your configured bundler.

```js
import '@spectrum-web-components/button/sp-button.js';
```

  ```html
  <sp-button variant="primary">I'm a SWC button</sp-button>
  ```

  Although the tag can look the same as a Spectrum UXP widget, its implementation model is different. The following sections explain those distinctions.
