# Differences

After choosing among these UI paths, review their limitations and tradeoffs.

- **HTML elements**
  UXP should not be treated as a full browser. It gives desktop-app scripts and plugins access to web-technology ergonomics, but it does not implement every HTML/CSS feature that a browser supports. Unsupported tags are handled as simple `<div>`.

  Check the unsupported HTML [elements](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/cba672dce97bcb5805baaa7558d83abbabd825f6/src/pages/reference/uxp-api/reference-html/general/unsupported-elements.md), and [attributes](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/cba672dce97bcb5805baaa7558d83abbabd825f6/src/pages/reference/uxp-api/reference-html/general/unsupported-attributes.md) lists before relying on a tag or attribute.

- **Spectrum UXP widgets**
  Because these widgets are bundled inside UXP, debugging internals or changing their behavior can feel like working with a black-box component.

- **UXP Spectrum web components (Beta)**
  This option expects basic familiarity with [Web Components](https://javascript.info/web-components). It is also still beta, and support for additional components is still being expanded, so some components you want may not yet exist.

  These components follow SWC and web-component conventions, which means:

  1.  Import each individual comp before you use its tag
  2.  Debug SWC the same way you would debug a regular Web Component.

The three UI approaches can be combined when that fits the plugin or script. For example, this mixed form works:

````HTML
<form> \

### Reference material

- [Spectrum Web Components](https://raw.githubusercontent.com/reference/uxp-api/reference-spectrum/swc/index.md)
- [Spectrum UXP widgets](https://raw.githubusercontent.com/reference/uxp-api/reference-spectrum/spectrum-uxp-widgets/index.md)
- Supported HTML [tags](https://raw.githubusercontent.com/reference/uxp-api/reference-html/index.md) and [elements](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/index.md)

## InDesign DOM APIs

InDesign APIs, also called the Document Object Model DOM or OMV, are used to create and change application documents and their content.

**Prior to v18.4**, the InDesign DOM was available globally by default.

**Starting v18.4**, the InDesign DOM is exposed only through a JavaScript module and should be loaded when needed with `require()`.

For v18.4 and later, access the InDesign DOM APIs this way:

```js
const myInDesign = require("indesign");
const app = myInDesign.app;
````
