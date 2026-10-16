# Differences

After seeing the available choices, compare their limits and behavior.

- **HTML elements**

  UXP is a plugin/script platform for desktop apps, not a browser. It offers convenient web technologies, but it does not include every HTML/CSS capability from browsers. Unsupported tags are handled like simple `<div>` elements.

  Review unsupported HTML [elements](../html/html-reference.md) and [attributes](../html/unsupported-attributes.md).

- **Spectrum UXP widgets**

  Because these components are built into UXP, debugging can feel opaque, and their behavior is not easy to inspect or change.

  [Figure: Debug Spectrum UXP Widgets](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/assets/debug-sp.png)

- **UXP Spectrum web components**

  SWC coverage in UXP is broader: 30 components, including items absent from Spectrum widgets, such as table, toast, card etc.
  These components follow SWC and Web Component principles, which means

  1.  Install and `import` each individual comp before using it
  2.  Debug SWC the way you would a regular Web Component
      [Figure: Debug SWC](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/assets/debug-swc.png)

These three approaches can be mixed to fit the use case. For example, this combination is valid:

```HTML
<form>
   <sp-banner>
     <div slot="header">Header text</div>
     <div slot="content">Content of the banner</div>
  </sp-banner>
  <sp-button variant="primary">I'm a button</sp-button>
</form>
```
