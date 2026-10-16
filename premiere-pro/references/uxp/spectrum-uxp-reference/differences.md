# Differences

After the available choices are clear, compare their differences and constraints.

- **HTML elements**

  UXP should not be treated as a full browser. It gives desktop application plugins and scripts access to convenient web technologies, but it does not implement every HTML/CSS capability that a browser provides. Unsupported tags are handled as simple `<div>` elements.

  Review the unsupported HTML [elements](../html/html-reference/reference-index.md), and [attributes](../html/unsupported-attributes.md).

- **Spectrum UXP widgets**

  These widgets ship inside UXP. During debugging or behavioral customization, that can make them feel opaque.

  [Figure: Debug Spectrum UXP Widgets](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/assets/debug-sp.png)

- **UXP Spectrum web components**

  SWC support in UXP is broader, with 30 components. It also includes components absent from Spectrum widgets, such as table, toast, card etc.
  Because these components follow SWC and Web Components principles:

  1.  Install and `import` each component before use.
  2.  Debug SWC the same way you would debug a regular Web Component.
      [Figure: Debug SWC](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/assets/debug-swc.png)

You can still combine all three approaches when that best fits the UI. This mixed markup is valid:

```HTML
<form>
   <sp-banner>
     <div slot="header">Header text</div>
     <div slot="content">Content of the banner</div>
  </sp-banner>
  <sp-button variant="primary">I'm a button</sp-button>
</form>
```
