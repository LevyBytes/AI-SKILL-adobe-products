# User Interfaces

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

Create user interfaces for UXP plugins that are both attractive and functional.

## Overview

Any UXP plugin that shows visual content needs a user interface. From a simple dialog to a full panel, UXP offers several ways to build UI that fits naturally inside Premiere.

UXP supports three UI-building approaches:

1. [**Standard HTML Elements**](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/fundamentals/user-interfaces/index.md#standard-html-elements): familiar web technology that you style yourself.
2. [**Spectrum UXP Widgets**](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/fundamentals/user-interfaces/index.md#spectrum-uxp-widgets): Adobe-styled controls built into UXP and ready for immediate use.
3. [**Spectrum Web Components (SWC)**](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/fundamentals/user-interfaces/index.md#spectrum-web-components-swc): a modern Web Component library based on Adobe's design system.

Recommended approach

The approaches can be combined in one plugin, and each has different strengths. For new work, **we recommend using Spectrum Web Components** because it provides the broadest feature set and best future support. For more information, read the [Spectrum UXP Reference](uxp-api-2.md).

## Understand the Options

Before getting into implementation, define the main terms:

- [**Spectrum**](https://spectrum.adobe.com/): Adobe's open-source design language[^1], with guidelines that keep applications consistent.
- [**Web Components**](https://developer.mozilla.org/en-US/docs/Web/API/Web_components): HTML5 technologies for defining custom reusable elements in markup.
- [**Adobe Spectrum Web Components**](https://opensource.adobe.com/spectrum-web-components/) (SWC): ready-made Web Components whose styling follows Spectrum design guidelines.

[^1]: Adobe is developing the second iteration of the Spectrum design system; details are available [here](https://s2.spectrum.adobe.com/).

### Standard HTML Elements

Standard HTML elements include familiar tags such as `<div>`, `<button>`, `<input>`, `<img>`, `<dialog>`, and others. They follow web standards, with CSS providing full control over presentation.

```html
<div class="container">
  <button class="primary-button">Click me</button>
  <input type="text" placeholder="Enter text" />
</div>
```

| Best for | Trade-offs |
| --- | --- |
| Building **highly customized interfaces** that need match different design systems | Complex and expensive to implement |

UXP is not a browser

UXP can use modern web technology, but it is not a complete browser runtime. Some browser HTML elements, CSS properties, and JavaScript APIs are unavailable in UXP. Review [HTML element exclusions](uxp-reference-html.md) and [attribute exclusions](uxp-reference-html.md) for specifics.

### Spectrum UXP Widgets

Spectrum UXP Widgets are part of the UXP platform itself. They supply Adobe-styled components that are ready to use and automatically align with Premiere's appearance, including dark and light themes.

```html
<sp-button variant="primary">I'm a Spectrum button</sp-button>
<sp-textfield placeholder="Enter your name"></sp-textfield>
<sp-checkbox>Enable feature</sp-checkbox>
```

No install or import step is needed for these widgets. Use them the same way you would use any HTML tag.

| Best for | Trade-offs |
| --- | --- |
| **Quick prototyping**, getting started with UXP, or when you want Premiere's native look without extra setup. | **Limited number of components** available. **You can't customize their behavior** beyond the provided API or easily inspect their internal structure. |

### Spectrum Web Components (SWC)

[Spectrum Web Components](https://opensource.adobe.com/spectrum-web-components/) are Adobe's official implementation of the Spectrum Design System, built on current [Web Components standard APIs](https://developer.mozilla.org/en-US/docs/Web/API/Web_components). They provide the deepest feature coverage and align most closely with Spectrum guidelines.

To use SWCs, [install each component](https://opensource.adobe.com/spectrum-web-components/getting-started/) separately with `npm` or `yarn`, then import it in the plugin code:

```bash
npm install @spectrum-web-components/button@0.37.0
npm install @spectrum-web-components/textfield@0.37.0
```

Version Requirement

For Premiere plugins, **all Spectrum Web Components must be locked to version 0.37.0** for now. That version requirement keeps them compatible with the current UXP release.

After installation, import and use them from JavaScript:

```javascript

```

```html
<sp-button variant="primary">I'm a SWC button</sp-button>
<sp-textfield placeholder="Enter your name"></sp-textfield>
```

| Best for | Trade-offs |
| --- | --- |
| **Production plugins** that need the **full range of Spectrum components**, or when you need to inspect and debug component internals. | Requires Node.js, a package manager (npm/yarn), and a bundler (Webpack, Rollup, etc.) to build your plugin. |

SWC also requires enabling support in `manifest.json`:

```json
{
  "featureFlags": {
    "enableSWCSupport": true
  }
}
```

## Mix and Match

A single plugin can use all three UI approaches together. One interface may use HTML elements for base markup, Spectrum UXP Widgets for built-in controls, and Spectrum Web Components for SWC-based pieces:

```html
<form>
  <div class="section">
    <sp-banner>
      <div slot="header">Welcome</div>
      <div slot="content">This is a mixed UI example</div>
    </sp-banner>

    <sp-button variant="primary">Submit</sp-button>
  </div>
</form>
```

That flexibility lets each part of the interface use the most appropriate tool.

## Which Approach Should You Choose?

The right option depends on project needs, schedule, and experience.

### Start with Spectrum UXP Widgets if you:

- You are early in UXP development
- You want a quick prototype
- The UI only needs straightforward standard components
- Zero configuration is important

### Use Spectrum Web Components if you:

- The plugin is intended for production
- The project needs the full Spectrum component library
- Inspecting and debugging component internals matters
- npm and build tools fit the workflow

### Use Standard HTML Elements if you:

- The plugin needs highly custom UI components
- Design requirements go beyond Spectrum
- Writing custom CSS is acceptable
- Styling and behavior need maximum control

For most projects, **we recommend starting with Spectrum Web Components** and reserving standard HTML elements for narrowly custom needs. UXP Widgets remain supported, but future deprecation is possible.

Creative Cloud Marketplace and Visual Language

UXP plugins may use their own visual language. Currently, products submitted to the Creative Cloud Marketplace do not have to implement the Adobe Spectrum Design System, though using it is recommended for consistency.

During approval, reviewers apply best UX practices and the [Adobe Brand Guidelines](uxp-distribution-2.md).

## Working with JavaScript Frameworks

Vanilla JavaScript, HTML, and CSS are enough for many plugins, but modern JavaScript frameworks can help when an application becomes more complex. Popular frameworks such as **React**, **Vue**, and **Svelte** are compatible with [UXP plugin bundler workflows](uxp-udt-deep-dive.md).

Frameworks can simplify complex state, reusable components, and maintainable code. They also add setup requirements, including Node.js, package managers, and build tools.

If React is already familiar, or if the plugin is expected to become complex, read the [React Spectrum integration guide](uxp-api-2.md). A common path is to use [SWC React wrappers](https://opensource.adobe.com/spectrum-web-components/using-swc-react/).

## Reference Documentation

To begin building, review the full documentation for each UI option.

- **[Spectrum Web Components](uxp-api-2.md)**: complete SWC library and examples for use.
- **[Spectrum UXP Widgets](uxp-api-2.md)**: reference material and API details for built-in widgets.
- **[HTML Elements](uxp-global-members-2.md)**: HTML elements supported by UXP.
- **[HTML Tags Reference](uxp-reference-html.md)**: full HTML tag reference.
- **[Using Spectrum with React](uxp-api-2.md)**: React integration guidance; also see [Working with Bundlers](uxp-udt-deep-dive.md) in the UXP Developer Tool documentation.

For working examples and practical code, use the [CSS Styling recipe](uxp-recipes.md) to learn ways to customize plugin appearance.
