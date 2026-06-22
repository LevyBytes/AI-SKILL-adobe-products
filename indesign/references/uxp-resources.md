# Fundamentals, Migration Guides

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: APIs within UXP; User Interface (UI); InDesign DOM APIs; Fundamentals; UXP manifest; Measurements and positioning; Object model; Resources; CEP to UXP; ExtendScript to UXP; Migration Guides.

## APIs within UXP

Once an initial [script](uxp-advanced-topics.md) or [plugin](uxp-plugins.md) is working, more involved tasks require access to additional APIs. Start by identifying the API types available and where to find them.

The UXP platform has two main parts:

1. Core UXP APIs
2. Host-specific APIs

You will find examples of these APIs in the [recipes](uxp-recipes-2.md). For now, focus on the difference between the two categories.

### UXP Core APIs

Use these APIs for UI creation, file operations, network calls, and similar tasks.

The way you mount or access these APIs can differ. Many are directly available in the global scope, including [Crypto](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/crypto/index.md) and [Documents](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/document.md). Other modules require manifest permission first (for plugins) or explicit mounting with `require()`. Examples include `require(os)` and `require('uxp').shell`.

### Host-specific APIs

These APIs are for changing or interacting with the document.

**IMPORTANT**

These APIs are also called **Document Object Model (DOM) APIs** and **Object Model View (OMV)**. In this documentation, InDesign APIs, DOM APIs, and OMV are used interchangeably.

Do not confuse them with the HTML DOM that provides your plugin/script UI.

The mounting technique is covered in the [InDesign API](uxp-resources.md) topic.

### Example

Suppose you want to write a script/plugin that:

1. Reads text from a file on the user's system.
2. Adds that text to the document.
3. Applies certain modifications to it.

For Step #1, because the user's file system is involved, use the UXP API's `localFileSystem` or `fs` module.
For Steps #2 and 3, document updates use the DOM APIs.

### Updates and releases

The API surface is still evolving, and future releases will add more capabilities. As a result, both DOM and UXP APIs receive updates with each release.

The [What's new](uxp-changelog.md) section lists new features, changes, and fixes included in the latest release. DOM APIs are versioned according to the application version. The UXP version associated with each release is also important.

When a plugin/script uses a specific UXP API, the host application must support that UXP version. For example, InDesign v18.5 supports UXP v7.1; if you use a UXP v7.2 API, the plugin/script will not work and can produce unexpected errors. Look for the minimum compatible UXP and host application versions in API references, examples, and samples.

The minimum UXP version supported by the application can be found several ways:

1. In UDT, after InDesign is running and appears under 'Connected apps', the displayed entry includes the UXP version together with the InDesign version number.
2. Query host information programmatically with UXP APIs; the example is in [this recipe](uxp-recipes-2.md).
3. The [What's new](uxp-changelog.md) section mentions the UXP version number for each release.

## User Interface (UI)

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

  ```
  npm i @spectrum-web-components/button@0.19.8
  ```

  ```js

  ```

  ```html
  <sp-button variant="primary">I'm a SWC button</sp-button>
  ```

  Although the tag can look the same as a Spectrum UXP widget, its implementation model is different. The following sections explain those distinctions.

### Differences

After choosing among these UI paths, review their limitations and tradeoffs.

- **HTML elements**
  UXP should not be treated as a full browser. It gives desktop-app scripts and plugins access to web-technology ergonomics, but it does not implement every HTML/CSS feature that a browser supports. Unsupported tags are handled as simple `<div>`.

  Check the unsupported HTML [elements](https://raw.githubusercontent.com/reference/uxp-api/reference-html/general/unsupported-elements.md), and [attributes](https://raw.githubusercontent.com/reference/uxp-api/reference-html/general/unsupported-attributes.md) lists before relying on a tag or attribute.

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

### DOM version

DOM versioning means selecting a particular version of the InDesign Document Object Model. Pinning a version helps scripts and plugins stay forward compatible, so they can continue running in newer InDesign releases even when later DOM changes exist.

Current DOM version choices are **3.0, 4.0, 5.0, 6.0, 7.0, 7.5, 8.0, 9.0, 10.0, 10.1, 10.2, 11.0, 11.2, 11.3, 11.4, 12.0, 12.1, 13.0, 13.1, 14.0, 15.0, 15.1, 16.0, 16.1, 16.2, 17.0, 18.0**

To inspect the DOM API version currently used by the app, run:

```js
const myInDesign = require("indesign");
const app = myInDesign.app;
console.log(app.scriptPreferences.version);
```

To move to a specific DOM API version, require that versioned module:

```js
const myInDesign = require("indesign-16.1");
```

From that point forward, the script uses v16.1 DOM APIs.

**NOTE** that after retrieving a specific DOM version, assume that version is 'A'; a later `require("indesign")` call resolves to that same DOM version 'A'. For example,

```js
const inDesignAppV17 = require("indesign-17.0").app;
const inDesignApp = require("indesign").app;

console.log(
  `Versions: ${inDesignAppV17.scriptPreferences.version} and ${inDesignApp.scriptPreferences.version} will be v17.0`,
);
```

Also, two different DOM versions cannot be used simultaneously. `require("indesign");` indicates that the DOM version will not change again. In this example, `inDesignV17` resolves to 'undefined'.

```js
const inDesign = require("indesign");
const inDesignV17 = require("indesign-17.0");
```

After selecting the needed DOM API version, use the [API reference](https://raw.githubusercontent.com/dom/api/index.md) to find the available objects, methods etc.

## Fundamentals

Read the topics in this section to build a solid understanding of UXP as a platform.

## UXP manifest

The manifest is a core concept in UXP development. In practical terms, it is the configuration set that lets a script or plugin operate correctly.

This tutorial is meant to show how the manifest affects scripts and plugins behind the scenes, so the samples and recipes are easier to interpret.

For plugins, these settings must be supplied through a `manifest.json` file.

Scripts handle the same configuration differently: the values are fixed and hidden, almost as though no manifest exists. You cannot manage the script manifest directly, and you do not need to.

### Permission module for Scripts

The 'permission' module is one of the manifest modules that controls access and behavior for many APIs. The [plugin manifest section](uxp-plugins.md) explains each permission and option in detail; for completeness, this table shows the permissions that **scripts** receive implicitly.

| Permission module                | Value            | Description                                                          |
| -------------------------------- | ---------------- | -------------------------------------------------------------------- |
| `clipboard`                      | `"readAndWrite"` | Lets scripts read clipboard content and write new clipboard content. |
| `localFileSystem`                | `"fullAccess"`   | Gives complete file-system access.                                   |
| `network`                        | `"all"`          | Permits network access.                                              |
| **webview**                      | _any_            | Allows access to any domain.                                         |
| `launchProcess`                  | _any_            | Allows launching applications and files with full access.            |
| `allowCodeGenerationFromStrings` | false            | Does not apply to scripts.                                           |

**Note:** Script permissions can look more permissive than plugin permissions, while plugins still have their own benefits. The [introduction to scrips and plugins](uxp-for-adobe-indesign.md) helps compare which model fits a use case.

## Measurements and positioning

InDesign positions every item and object on a page according to the measurement choices in effect. Knowing the InDesign coordinate system and its measurement units helps when placing or reading objects.

### Coordinates

Like other page-layout and drawing tools, InDesign uses simple two-dimensional geometry to place objects on a page or spread. In a coordinate pair, x is the horizontal value and y is the vertical value. When an object is selected with the Selection tool, those values appear in the Transform panel or Control.

[Figure: Transform panel](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/resources/fundamentals/measurements-and-positioning/transform-panel.png)

Keep these coordinate rules in mind:

- Coordinates are measured from the **current** ruler zero point.
- On the vertical, or y, axis, values below the zero point are positive, while values above it are negative.
- Path-point locations are returned as x and y, and path-point coordinates should be set in that same order.
- An object's bounding box coordinates are stored in a four-coordinate array. The order is top, left, bottom, and right, corresponding to y1, x1, y2,x2.

### Working with measurement units

InDesign reports coordinates and other measurements using the publication's current units. In some situations, the returned values differ from what the InDesign Transform panel displays. For example, when picas are active, fractional values come back as decimals rather than the picas-and-points notation shown in the Transform panel. "1p6," for example, is returned as "1.5." This avoids forcing scripts/plugins to do arithmetic with measurement strings; adding "0p3.5" to "13p4" fails, while adding .2916 to 13.333, the converted pica values, succeeds.

When adding, subtracting, multiplying, or dividing particular measurement values, first set the related measurement units. After the operation, restore the previous measurement units if needed.

Measurement values can be set as numbers, such as 14.65, or as strings, such as "1p7.1". Numeric values use the publication's current units of measurement. Measurement strings, as shown in the table below, use the units encoded in the string.

Another option is to use measurement overrides, as many sample scripts do. A measurement override is a string with a special character, shown here:

| Override  | Meaning                                      | Example |
| --------- | -------------------------------------------- | ------- |
| c         | Ciceros, with didots after the c when needed | 1.4c    |
| cm        | Centimeters                                  | .635cm  |
| i (or in) | Inches                                       | .25i    |
| mm        | Millimeters                                  | 6.35mm  |
| p         | Picas, with points after the p when needed   | 1p6     |
| pt        | Points                                       | 18pt    |

## Object model

To locate the object you need to manipulate, first understand the object model of an InDesign document.

The following figure summarizes the InDesign object model. Objects in a publication follow a hierarchy: frames sit on pages, pages belong to a document, and the document belongs to the InDesign application object. That hierarchy is the object model, and together those objects define the publication in InDesign.

[Figure: InDesign object model](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/resources/fundamentals/object-model/id-om.png)

**NOTE** that this diagram is conceptual rather than a full catalog of every object available to InDesign. It shows how object types relate to each other and how the overall structure is organized.

The next section briefly describes the objects shown in the diagram:

### Application

| Term                      | What it represents                                                                                                                                                                                                                           |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Application _defaults_    | Default application settings, including colors, paragraph styles, and object styles. These defaults affect documents created afterward.                                                                                                      |
| Application _methods_     | JavaScript(Objects also haveExtend Script) Actions the application can perform, including finding and changing text, copying the selection, creating documents, and opening libraries.                                                       |
| Application _preferences_ | Settings such as text preferences, PDF export preferences, and document preferences. Many preference objects also exist for documents. Application preferences apply to new documents, while document preferences alter a specific document. |
| Application _properties_  | Application-level properties, such as the full application path, application locale, and user name.                                                                                                                                          |

### Books

The open books collection.

### Libraries

The open libraries collection.

### Document

An InDesign document.

| Term                 | What it represents                                                                                                                                                                                                                                                                                 |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Document defaults    | Default document settings, including colors, paragraph styles, and text-formatting defaults.                                                                                                                                                                                                       |
| Document elements    | Items that belong to a document, such as stories, imported graphics, and pages. The figure before this table highlights pages and stories because they are key object containers; rectangles, ovals, groups, XML elements, and any importable or creatable object type are also document elements. |
| Document methods     | Sample Scripts with UXP APIs Actions available to documents, such as closing, printing, and exporting a document.                                                                                                                                                                                  |
| Document preferences | Document settings, including guide preferences, view preferences, and document preferences.                                                                                                                                                                                                        |
| Document properties  | Values such as the document filename, page count, and zero point location.                                                                                                                                                                                                                         |
| Documents            | The collection of open documents.                                                                                                                                                                                                                                                                  |

### Pages or spreads

Pages or spreads inside an InDesign document.

| Term         | What it represents                                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Page         | One page within the document.                                                                                                                         |
| Page _items_ | Any object that can be created or placed on a page. Page items include many object types, such as text frames, rectangles, graphic lines, and groups. |

### Stories

Text content inside an InDesign document.

| Term         | What it represents                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------------- |
| Text objects | Examples of text objects in an InDesign story include characters, words, lines, paragraphs, and text columns. |

## Resources

At this point, you have likely tried a simple script or plugin by working through the getting-started guides.

These resources help you go deeper into UXP and build something more useful for real-world scenarios. Most topics apply to both scripts and plugins, though small differences can appear.

Begin with [fundamentals](uxp-resources.md), then move to [recipes](uxp-recipes-2.md) for bite-size examples covering common use cases. After that, explore the APIs in the [References](https://raw.githubusercontent.com/changelog/index.md) section.

### Contribute

If an important topic is missing, contribute through the [sample repo](https://github.com/AdobeDocs/uxp-indesign-samples). You can report the missing topic by creating a bug, or share a recipe with the community by opening a pull request.

## CEP to UXP

Follow the [migration Guide](https://github.com/Adobe-CEP/CEP-Resources/tree/master/UXP-Migration-Guide) when moving a [CEP panel](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_11.x/Documentation/CEP%2011.1%20HTML%20Extension%20Cookbook.md) to UXP.

## ExtendScript to UXP

ExtendScript runs on an older JavaScript version, ES3. UXP instead uses the V8 JavaScript engine with ES6 support, which brings several capabilities that ExtendScript lacks.

UXP does not use or support every newer ES6 feature, but ExtendScript developers should learn ECMAScript ES6 so the sample code is easier to understand.

This page explains the basic steps for rewriting ExtendScript as a UXP script.

For scripts,

1. Use the `.idjs` extension when saving the file.
2. Replace unsupported methods in the script

### subscript operator `[ ]`

**Applicable to:** All Versions

Collection objects returned by InDesign, such as documents and paragraphs, do not support the subscript operator `[ ]` for accessing an element at a particular index. Use the named method `item()` instead. Objects of type Array, such as `app.selection`, do support the subscript operator.

ExtendScript:

```js
for (j = 0; j < app.selection[0].paragraphs.length; j++) {
  var item = app.selection[0].paragraphs[j];
}
```

UXP:

```js
for (j = 0; j < app.selection[0].paragraphs.length; j++) {
  var item = app.selection[0].paragraphs.item(j);
}
```

### `Object.constructor.name`

**Applicable to:** Prior to v18.4

For DOM objects, the standard JS property `Object.constructor.name` returns an empty string (`""`). Use `object.constructorName` instead.

ExtendScript:

```js
switch (myPageItem.constructor.name) {
  case "Rectangle":
  case "Oval":
    // ...
    break;
}
```

UXP:

```js
switch (myPageItem.constructorName) {
  case "Rectangle":
  case "Oval":
    // ...
    break;
}
```

### Comparison operators (`==` and `===`)

**Applicable to:** All Versions

For InDesign DOM objects, `==` and `===` only evaluate as true when both operands point to the identical object reference. Use `equals()` when comparing DOM values.

ExtendScript:

```js
if (myPath.pathType == PathType.closedPath) {
  // ...
}
```

UXP:

```js
if (myPath.pathType.equals(PathType.closedPath)) {
  // ...
}
```

### `instanceof`

**Applicable to:** Prior to v18.4

InDesign DOM objects do not work with the `instanceof` keyword. Check the `object.constructorName` property instead.

ExtendScript:

```js
if (app.selection[0].paragraphs[0].appliedParagraphStyle.parent instanceof ParagraphStyleGroup) {
  // ...
}
```

UXP:

```js
if (app.selection[0].paragraphs.item(0).parent.constructorName == "ParagraphStyleGroup") {
  // ...
}
```

### Global object `document`

**Applicable to:** All Versions

The global `document` object is currently unavailable. Use `app.activeDocument` for the active document context.

ExtendScript:

```js
document.findText();
```

UXP:

```js
app.activeDocument.findText();
```

### ActiveScript `app.activeScript`

**Applicable to:** Prior to v18.4

With ExtendScript, `app.activeScript` gives back the running script as a file object, so additional file properties are available from that object.

With UXP, `app.activeScript` gives back the current script path as a string. Other properties are not available through `app.activeScript`.

### Fetching InDesign Server arguments passed to a script

**Applicable to:** v18.4 Onwards

ExtendScript:

```js
var myArg = app.scriptArgs.getValue("argumentName");
```

UXP:

```js
let arguments = script.args;
```

[Learn More](uxp-advanced-topics.md)

## Migration Guides

Move extensions from other extensibility systems into UXP.

When an existing ExtendScript or CEP extension needs to be ported to UXP, this section gives migration guidance for that process.
