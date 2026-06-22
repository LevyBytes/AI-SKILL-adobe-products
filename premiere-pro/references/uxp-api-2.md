# Reference Spectrum, Versions3 P

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: FAQs; Spectrum UXP Reference; UXP Spectrum widgets to SWC mapping; Spectrum UXP Widgets; Typography; User Interface; Using with React; Spectrum Web Component; UXP General Information.

## FAQs

### Q: Why use SWC?

A: SWC are built with Web Components, so the same UI can move readily into web browsers.
Compared with Spectrum UXP Widgets, SWC can be debugged like ordinary Web Components.

### Q: Can Spectrum UXP Widgets and SWC work with frameworks such as React?

A: Yes. The components do not depend on a particular framework and can be used with any framework that works with UXP. Some frameworks have their own patterns for web components, so review the framework documentation. See [Use with React](uxp-api-2.md).

Work on a React wrapper for SWC is underway, and a sample plugin is expected to be added soon.

### Q: Will the Spectrum UXP widget be removed?

A: No, but new feature work for these widgets has stopped.

### Q: Spectrum UXP widgets and SWC use similar tags. How can I tell which one is active?

A: Some components, including `<sp-button>` and `<sp-link>`, exist in both forms: Spectrum UXP Widget and SWC. The SWC-specific `import` step is the key signal. After that import, UXP treats the tag as the SWC variant.

### Q: Can Spectrum UXP widgets and SWC be used together?

A: Yes. The two component sets can be combined cleanly. Example markup:

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

### Q: Are Spectrum UXP Widgets built on Web Components too?

A: No. These widgets imitate the open-source Spectrum Web Components library, but they are not implemented on top of Web Components. Earlier documentation compared them with SWC because the names and APIs are very similar, and because the custom tags resemble Web Components generally. Do not treat them as Web Components.

## Spectrum UXP Reference

UXP offers three UI authoring paths: standard HTML Elements, built-in Spectrum UXP widgets, and the newer Spectrum Web Components support.

Before the details, keep these terms straight:

- Spectrum - Adobe's open-source design language and guidance.
- Web components - HTML5 Web technology that lets applications define custom tags.
- Adobe Spectrum Web Components (popularly known as SWC) - An open-source Spectrum-styled web component library.

With those names established, the options break down as follows:

- **HTML elements**

  Pure HTML elements follow web standards. Examples include `<img>`, `<dialog>` etc. Custom stylesheets can style them directly. See the supported HTML [tags](uxp-reference-html.md) and [elements](uxp-global-members-2.md).

- **Spectrum UXP widgets**

  UXP includes these built-in Spectrum-styled components. Their APIs mirror the Adobe SWC library and provide part of the matching SWC functionality.

  Use them like ordinary HTML tags. Example:

  ```html
  <sp-button variant="primary">I'm a Spectrum button</sp-button>
  ```

  Review the Spectrum widgets supported by UXP in [User Interface](uxp-api-2.md) and [Typography](uxp-api-2.md).

- **UXP Spectrum web components**

  Starting with UXP v7.0, Adobe Spectrum Web Components are available in UXP. Web Components technology underpins this option.

  To use them, install each component separately, then `import` it before placing its tag. Install command:

  ```
  npm i @swc-uxp-wrappers/button
  ```

  ```js

  ```

  ```html
  <sp-button variant="primary">I'm a SWC button</sp-button>
  ```

  The tag can look the same as a Spectrum UXP widget, but the implementation model is fundamentally different. Continue reading for the distinctions.

### Differences

After the available choices are clear, compare their differences and constraints.

- **HTML elements**

  UXP should not be treated as a full browser. It gives desktop application plugins and scripts access to convenient web technologies, but it does not implement every HTML/CSS capability that a browser provides. Unsupported tags are handled as simple `<div>` elements.

  Review the unsupported HTML [elements](uxp-reference-html.md), and [attributes](uxp-reference-html.md).

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

### What's best for you?

Choose among these options based on the use case and where the UI is in its development lifecycle.

For a ready-made Adobe Spectrum-styled interface, or for an early UI implementation, begin with SWC. Use Spectrum UXP widgets when an SWC variant is not available yet, and use plain HTML elements when neither component set has the needed control.

For teams that prefer vanilla HTML and are willing to handle styling work, HTML elements plus a custom stylesheet are appropriate. Web Components can also be used to create custom tags.

When modernizing an existing UI, review the newer SWC components that Spectrum UXP widgets do not provide.

These topics cover the options in more depth:

- [Spectrum Web Components](uxp-api-2.md)
- [Spectrum UXP widgets](uxp-api-2.md)
- [Spectrum widgets to SWC Mapping](uxp-api-2.md)

## UXP Spectrum widgets to SWC mapping

Use this mapping guide when moving from Spectrum UXP widgets to the matching SWC (Spectrum Web Component) equivalents for UXP. It helps pair required UI components across the two libraries and plan the transition.

Component status is represented as follows:

âœ… : Ready to be integrated.

ðŸŸ¡ : The SWC library includes the component, but UXP does not support it yet.

N/A : SWC has no matching component.

| Control Name | Spectrum UXP Widget | Corresponding SWC in UXP | Status |
| --- | --- | --- | --- |
| Avatar | sp-avatar | sp-avatar | âœ… |
| Body | sp-body | N/A | N/A |
| Button | sp-button | sp-button | âœ… |
| ButtonGroup | sp-button-group | sp-button-group | âœ… |
| Checkbox | sp-checkbox | sp-checkbox | âœ… |
| Detail | sp-detail | N/A | N/A |
| Dialog | sp-dialog | sp-dialog | âœ… |
| Divider | sp-divider | sp-divider | âœ… |
| Heading | sp-heading | N/A | N/A |
| Icon | sp-icon | sp-icon | âœ… |
| Label | sp-label | sp-field-label | âœ… |
| Link | sp-link | sp-link | âœ… |
| Menu | sp-menu | sp-menu | âœ… |
| MenuItem | sp-menu-item | sp-menu-item | âœ… |
| MenuGroup | sp-menu-group | sp-menu-group | âœ… |
| MenuDivider | sp-menu-divider | sp-menu-divider | âœ… |
| Meter | sp-meter | sp-meter | ðŸŸ¡ |
| Overlay | sp-overlay | sp-overlay | ðŸŸ¡ |
| Picker | sp-picker | sp-picker | ðŸŸ¡ |
| Popover | sp-popover | sp-popover | âœ… |
| Progressbar | sp-progressbar | sp-progress-bar | ðŸŸ¡ |
| Radio | sp-radio | sp-radio | âœ… |
| RadioGroup | sp-radio-group | sp-radio-group | âœ… |
| Slider | sp-slider | sp-slider | ðŸŸ¡ |
| Switch | sp-switch | sp-switch | âœ… |
| Textarea | sp-textarea | sp-textfield (multiline) | ðŸŸ¡ |
| Textfiled | sp-textfield | sp-textfield/sp-number-field/sp-search | âœ… |
| Tooltip | sp-tooltip | sp-tooltip | âœ… |

## Spectrum UXP Widgets

Spectrum UXP imitates HTML5 Web Components so UXP can offer a consistent custom UI surface without tying plugins to a framework such as React or Vue, while implementation details remain encapsulated.

To begin, use Spectrum UXP controls the same way you use any other HTML tag. No special libraries are required; the controls are immediately present in the global context.

```html
<sp-button>Get started!</sp-button>
```

That is all the setup required.

### Pages in this section

- [Typography](uxp-api-2.md)
- [User Interface](uxp-api-2.md)

## Typography

- [sp-body](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/typography/sp-body.md)
- [sp-detail](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/typography/sp-detail.md)
- [sp-heading](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/typography/sp-heading.md)
- [sp-label](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/typography/sp-label.md)

## User Interface

- [sp-action-button](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-action-button.md)
- [sp-button](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-button.md)
- [sp-checkbox](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-checkbox.md)
- [sp-divider](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-divider.md)
- [sp-dropdown](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-dropdown.md)
- [sp-icon](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-icon.md)
- [sp-link](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-link.md)
- [sp-menu-item](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-menu-item.md)
- [sp-menu](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-menu.md)
- [sp-progressbar](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-progressbar.md)
- [sp-radio-group](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-radio-group.md)
- [sp-radio](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-radio.md)
- [sp-slider](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-slider.md)
- [sp-textarea](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-textarea.md)
- [sp-textfield](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-spectrum/spectrum-uxp-widgets/user-interface/sp-textfield.md)

## Using with React

Because React and Web Components have evolved along separate paths, their combination can produce behavior that is hard to reason about at first. React is still behaving according to its own model in these situations, but the required pattern may look unexpected to developers and can feel unlike typical React code.

### No self-closing tags

Self-closing syntax is not supported by Web Components, so include the matching closing tag every time.

```html
<sp-icon></sp-icon>
```

### Use `class` instead of `className`

With Web Components rendered from React, use `class` rather than `className`.

### Boolean attributes

A normal React checkbox might be written this way:

```js
<input type="checkbox" checked={checked} />
```

That pattern fails for components such as `sp-checkbox`, because `checked` is not interpreted as a boolean attribute. React then follows the platform attribute rule: any emitted value, including a string-coerced "false", makes the attribute count as `true`. For an unchecked box, the web platform expects `checked` to be omitted entirely.

In React, write the component like this so React understands that it should skip outputting the attribute:

```js
<sp-checkbox checked={checked ? true : undefined}></sp-checkbox>
```

### Event Handling

React does not wire event listeners onto Web Component elements. This follows React's assumptions, because it cannot infer that an arbitrary attribute names an event handler, yet the result can look broken when handler callbacks are never invoked.

The direct workaround is to place a `ref` on the component and register listeners yourself. Because that adds repetitive boilerplate, Adobe provides a [WC wrapper component](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/blob/main/ui-react-starter/src/components/WC.jsx) to handle that work. Sample code at [ColorPicker](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/blob/main/ui-react-starter/src/components/ColorPicker.jsx#L40) shows this approach, wrapping Spectrum UXP components through the helper component.

## Spectrum Web Component

**Since UXP v7.0**

Before working with Spectrum Web Components, commonly called SWC, get familiar with these foundations:

- [Web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components): HTML5 custom-element technology used to create custom HTML tags.
- [Spectrum](https://spectrum.adobe.com/): Adobe's open-source design system and its related guidelines.

[Spectrum Web Components](https://opensource.adobe.com/spectrum-web-components/) implement Adobe Spectrum styling as open-source Web Components. UXP v7.0 adds compatibility for Web Components and Spectrum Web Components (SWC).

### Getting started

**Step 1**: Turn on SWC in manifest.json

- Set `manifestVersion` to version 5 or above
- Set `enableSWCSupport` to `true`

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

**Step 2**: Install the component. For example,

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

Use the following resources to begin quickly.

### Command line Templates

Command-line starter templates can set up a new UXP-based React/Vanilla app with SWC bundling. They scaffold a project tuned for creating UXP plugins that use SWC.

- [Vanilla starter template](https://www.npmjs.com/package/@swc-uxp-wrappers/create-swc-uxp-app)
- [React starter template](https://www.npmjs.com/package/@swc-uxp-wrappers/create-swc-uxp-react-app)

### Photoshop

- [Photoshop SWC starter plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-starter)
- [Photoshop React-based SWC starter plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-react-starter) (since UXP v7.3).

### InDesign

- [InDesign SWC starter plugin](https://github.com/AdobeDocs/uxp-indesign-samples/tree/main/plugins/swc-uxp-starter)
- [InDesign React-based SWC starter plugin](https://github.com/AdobeDocs/uxp-indesign-samples/tree/main/plugins/swc-uxp-react-starter) (since UXP v7.3).

Follow each listed `README` inside the corresponding `plugins`.

### List of supported SWC

For the component list and variant details, see the [Github page](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers).
**Note** In UXP v8.0.0, every SWC component bundled with UXP is pinned to version 0.37.0.
**Note** Beyond component-specific known issues, the `RTL` direction parameter is not functional with `sp-theme` across components.

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

- [Hybrid Plugins](uxp-plugins.md)
