# Reference Spectrum, Versions3 P

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: FAQs; Spectrum UXP Reference; UXP Spectrum widgets to SWC mapping; Spectrum UXP Widgets; Typography; User Interface; Using with React; Spectrum Web Component; UXP General Information.

## FAQs

### Q: What advantage does SWC provide?

A: SWC uses Web Components, which makes it compatible with the web and easier to move into browsers. Compared with Spectrum UXP Widgets, SWC can be debugged the same way you inspect a standard Web Component.

### Q: Can Spectrum UXP Widgets and SWC work with frameworks such as React?

A: Yes. The components are framework agnostic, so any framework that runs with UXP can use them. Some frameworks still have their own Web Component idioms, so check that framework's docs. For React-specific guidance, see [Use with React](uxp-api-2.md).

SWC React wrapper work is also underway. A sample plugin is planned soon.

### Q: Is the Spectrum UXP widget being retired?

A: No. These widgets are not receiving new capabilities.

### Q: How can I distinguish identical-looking Spectrum UXP widget and SWC tags?

A: Components such as `<sp-button>` and `<sp-link>` exist in both forms: Spectrum UXP Widget and SWC. The differentiator is the SWC `import` step. After the import, UXP treats the tag as the SWC variant.

### Q: Can Spectrum UXP widgets and SWC exist side by side?

A: Yes. The two sets can be combined. For example,

```
<sp-banner>
   <div slot="header">Header text</div>
   <div slot="content">Content of the banner</div>
</sp-banner>
<sp-dropdown placeholder="Select an option" style="width: 320px">
   <sp-menu slot="options">
      <sp-menu-item> Option 1 </sp-menu-item>
      <sp-menu-item> Option 2 </sp-menu-item>
   </sp-menu>
</sp-dropdown>
```

### Q: Are Spectrum UXP Widgets also Web Components?

A: No. These widgets resemble the open-source Spectrum Web Components library, but they are not implemented on top of Web Components. Earlier docs compared them with SWC because their names and APIs are very similar, and their custom tags look like Web Component usage in general. Do not treat them as Web Components.

## Spectrum UXP Reference

UXP lets you build UI in three ways: standard HTML Elements, built-in Spectrum UXP widgets, and the recently added Spectrum Web Components.

First, a few terms matter:

- Spectrum - Adobe's open-source design language and guidelines.
- Web components - HTML5 Web technology for defining custom elements and tags.
- Adobe Spectrum Web Components (popularly known as SWC) - Adobe's open-source library of Spectrum-styled web components.

With those terms set, here are the options:

- **HTML elements**

  Plain HTML elements that follow web standards, such as `<img>`, `<dialog>` etc. You can style them through your own stylesheet. See the supported HTML [tags](uxp-reference-html.md) and [elements](uxp-global-members-2.md).

- **Spectrum UXP widgets**

  Built-in UXP components styled for Spectrum. Their APIs resemble the Adobe SWC library and expose a subset of the matching SWC capabilities.

  Use the same tag syntax. Sample:

  ```html
  <sp-button variant="primary">I'm a Spectrum button</sp-button>
  ```

  See the UXP-supported Spectrum widget lists: [User Interface](uxp-api-2.md) and [Typography](uxp-api-2.md)

- **UXP Spectrum web components**

  These Adobe Spectrum Web Components are available starting in UXP v7.0 and are implemented with Web Components technology.

  To use them, install each component separately and `import` it before using its tag. A typical install command is:

  ```
  npm i @swc-uxp-wrappers/button
  ```

  ```js

  ```

  ```html
  <sp-button variant="primary">I'm a SWC button</sp-button>
  ```

  Even though the tag looks the same as a Spectrum UXP widget, its implementation path is fundamentally different. Continue for the differences.

### Differences

After seeing the available choices, compare their limits and behavior.

- **HTML elements**

  UXP is a plugin/script platform for desktop apps, not a browser. It offers convenient web technologies, but it does not include every HTML/CSS capability from browsers. Unsupported tags are handled like simple `<div>` elements.

  Review unsupported HTML [elements](uxp-reference-html.md) and [attributes](uxp-reference-html.md).

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

### What's best for you?

Pick the approach according to both the use case and the maturity of the work.

For ready-made Adobe Spectrum-styled UI, or when UI programming is just starting, begin with SWC. Use Spectrum UXP widgets as the fallback for comp variants SWC does not yet provide. When neither option includes what you need, use plain HTML elements.

If vanilla HTML is your preference and you are comfortable taking on the styling work, pair HTML elements with your own stylesheet. Web Components also let you define custom tags yourself.

For an existing UI upgrade, review the new SWC components and compare them with what Spectrum UXP widgets currently offer.

For more detail, see these topics:

- [Spectrum Web Components](uxp-api-2.md)
- [Spectrum UXP widgets](uxp-api-2.md)
- [Spectrum widgets to SWC Mapping](uxp-api-2.md)

## UXP Spectrum widgets to SWC mapping

Use this mapping when moving from Spectrum UXP widgets to the matching SWC (Spectrum Web Component) UXP equivalents. It helps match the UI components you need and check the support path between the two libraries.

Component status uses these meanings

✅ : available for integration.

🟡 : SWC includes the component, but UXP support is not available yet.

N/A : SWC does not provide a matching component.

| Control Name | Spectrum UXP Widget | Corresponding SWC in UXP | Status |
| --- | --- | --- | --- |
| Avatar | sp-avatar | sp-avatar | ✅ |
| Body | sp-body | N/A | N/A |
| Button | sp-button | sp-button | ✅ |
| ButtonGroup | sp-button-group | sp-button-group | ✅ |
| Checkbox | sp-checkbox | sp-checkbox | ✅ |
| Detail | sp-detail | N/A | N/A |
| Dialog | sp-dialog | sp-dialog | ✅ |
| Divider | sp-divider | sp-divider | ✅ |
| Heading | sp-heading | N/A | N/A |
| Icon | sp-icon | sp-icon | ✅ |
| Label | sp-label | sp-field-label | ✅ |
| Link | sp-link | sp-link | ✅ |
| Menu | sp-menu | sp-menu | ✅ |
| MenuItem | sp-menu-item | sp-menu-item | ✅ |
| MenuGroup | sp-menu-group | sp-menu-group | ✅ |
| MenuDivider | sp-menu-divider | sp-menu-divider | ✅ |
| Meter | sp-meter | sp-meter | 🟡 |
| Overlay | sp-overlay | sp-overlay | 🟡 |
| Picker | sp-picker | sp-picker | 🟡 |
| Popover | sp-popover | sp-popover | ✅ |
| Progressbar | sp-progressbar | sp-progress-bar | 🟡 |
| Radio | sp-radio | sp-radio | ✅ |
| RadioGroup | sp-radio-group | sp-radio-group | ✅ |
| Slider | sp-slider | sp-slider | 🟡 |
| Switch | sp-switch | sp-switch | ✅ |
| Textarea | sp-textarea | sp-textfield (multiline) | 🟡 |
| Textfiled | sp-textfield | sp-textfield/sp-number-field/sp-search | ✅ |
| Tooltip | sp-tooltip | sp-tooltip | ✅ |

## Spectrum UXP Widgets

Modeled after HTML5 Web Components, Spectrum UXP gives UXP a consistent custom UI surface without requiring React, Vue, or another specific framework, while keeping implementation details encapsulated.

To begin, use Spectrum UXP controls in markup the same way you would use ordinary HTML tags. No extra libraries need to be included; the controls are available immediately in the global context.

```html
<sp-button>Get started!</sp-button>
```

That is all it takes.

### Pages in this section

- [Typography](uxp-api-2.md)
- [User Interface](uxp-api-2.md)

## Typography

- [sp-body](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/typography/sp-body.md)
- [sp-detail](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/typography/sp-detail.md)
- [sp-heading](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/typography/sp-heading.md)
- [sp-label](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/typography/sp-label.md)

## User Interface

- [sp-action-button](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-action-button.md)
- [sp-button](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-button.md)
- [sp-checkbox](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-checkbox.md)
- [sp-divider](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-divider.md)
- [sp-dropdown](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-dropdown.md)
- [sp-icon](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-icon.md)
- [sp-link](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-link.md)
- [sp-menu-item](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-menu-item.md)
- [sp-menu](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-menu.md)
- [sp-progressbar](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-progressbar.md)
- [sp-radio-group](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-radio-group.md)
- [sp-radio](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-radio.md)
- [sp-slider](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-slider.md)
- [sp-textarea](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-textarea.md)
- [sp-textfield](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-textfield.md)

## Using with React

React's long-running relationship with Web Components can surface behavior that is easy to misread. In the cases below, React is technically behaving correctly, but the proper usage can still feel surprising and unlike typical React code.

### No self-closing tags

Self-closing syntax is not supported by Web Components, so include the explicit closing tag every time.

```html
<sp-icon></sp-icon>
```

### Use `class` instead of `className`

Inside React, Web Components expect `class`, not `className`.

### Boolean attributes

With a standard checkbox in React, code like this is common:

```js
<input type="checkbox" checked={checked} />
```

That pattern fails for `sp-checkbox`, for example, because `checked` is not interpreted as a boolean attribute. React then follows the web attribute rule: if any value is emitted, even a string-coerced "false", the attribute counts as `true`. For an unchecked checkbox, the web platform expects `checked` to be absent entirely.

Write the React expression this way so React knows when to omit the attribute:

```js
<sp-checkbox checked={checked ? true : undefined}></sp-checkbox>
```

### Event Handling

React does not add event listeners to Web Component elements. That behavior is technically consistent, because React cannot infer that a particular attribute is meant to be an event handler, but it can look broken when handlers are not called.

The simplest workaround is to place a `ref` on the component and attach listeners yourself. Because repeating that pattern adds a lot of boilerplate, Adobe provides the [simple wrapper comonent (WC)](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/blob/main/ui-react-starter/src/components/WC.jsx) to handle the repetitive work. The [plugin samples](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/blob/main/ui-react-starter/src/components/ColorPicker.jsx#L40) show Spectrum UXP components wrapped with this helper.

## Spectrum Web Component

**Since UXP v7.0**

Before working with Spectrum Web Components (popularly known as SWC), get familiar with:

- [Web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components): an HTML5 feature used to create custom tags.
- [Spectrum](https://spectrum.adobe.com/): Adobe's open-source design language and guideline system.

The open-source [Spectrum Web Components](https://opensource.adobe.com/spectrum-web-components/) package supplies Web Components styled for Adobe Spectrum. UXP v7.0 adds support for Web Components and Spectrum Web Components (SWC).

### Getting started

**Step 1**: Enable SWC in manifest.json

- Set `manifestVersion` to version 5 or above
- Turn `enableSWCSupport` on

```json
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
```

**Step 2**: Install the component. Example:

```
npm install @swc-uxp-wrappers/button
```

**Step 3**: Import the component

```js

```

```html
<sp-button variant="primary">I'm a button</sp-button>
```

### Sample plugin

Use these resources when you want a quick starting point:

### Command line Templates

For a new UXP-based React/Vanilla app with SWC bundling, start from the command-line starter templates. They scaffold a project already tuned for building UXP plugins with SWC.

- [Vanilla starter template](https://www.npmjs.com/package/@swc-uxp-wrappers/create-swc-uxp-app)
- [React starter template](https://www.npmjs.com/package/@swc-uxp-wrappers/create-swc-uxp-react-app)

### Photoshop

- [Photoshop SWC starter plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-starter)
- [Photoshop React-based SWC starter plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-react-starter) (since UXP v7.3).

### InDesign

- [InDesign SWC starter plugin](https://github.com/AdobeDocs/uxp-indesign-samples/tree/main/plugins/swc-uxp-starter)
- [InDesign React-based SWC starter plugin](https://github.com/AdobeDocs/uxp-indesign-samples/tree/main/plugins/swc-uxp-react-starter) (since UXP v7.3).

Follow the `README` provided by those `plugins`.

### List of supported SWC

See [Github page](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers) for the component list and available variants.
**Note** In UXP v8.0.0, every SWC component in UXP is pinned to version 0.37.0.
**Note** Beyond component-specific known issues, the `RTL` direction parameter does not work with `sp-theme` across components.

## UXP General Information

- ECMAScript Version in UXP v6.4 : ECMA-262
- React Version Supported in UXP v6.4: React 16 or lower

### Applications Integrated with UXP

| Application | UXP v8.1 | UXP v8.0 | UXP v7.4 | UXP v7.3 | UXP v7.2 | UXP v7.1 | UXP v7.0 | UXP v6.5 | UXP v6.4 | UXP v6.3 | UXP v6.2 | UXP v6.1 | UXP v6.0 | UXP v5.6 | UXP v5.5 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Photoshop | 26.1 | 26.0 | 25.5 | 25.2 | 25.0 | 24.6 | 24.4 | 24.1 | 24.1 | 24.0 | 23.5 | 23.4 | 23.3 | 23.2 | 23.0 |
| InDesign & InDesign Server | - | 20.0 | 19.4 | 19.0 | - | 18.5 | - | 18.1 | - | 18.0 | 17.4 | - | - | 17.1 | 17.0 |
| Premiere Pro | 25.1 | - | - | - | - | - | - | - | - | - | - | - | - | - | - |
| XD | - | - | - | - | - | - | - | - | - | 55 | 54 | - | - | 53 | 45 |

### UXP Features Supported in Applications

| Application | UXP Plugins | UXP C++ Hybrid Plugins | UXP Scripting |
| --- | --- | --- | --- |
| Photoshop | ✅ | ✅ from 24.2 | ✅ from 24.1 |
| InDesign | ✅ from 18.5 | - | ✅ from 18.0 |
| Premiere Pro | ✅ from 25.1 | - | - |

## See also

- [Unsupported](uxp-unsupported.md)
