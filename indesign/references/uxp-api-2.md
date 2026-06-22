# Changelog3 P

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: UXP Changelog; UXP API Reference.

## UXP Changelog

### UXP v8.0.1

### Breaking Changes

- The `enableFillAsCustomAttribute` feature flag, introduced in UXPv7.1.0, becomes enabled by default.

### Deprecations

- Changes to Clipboard
  - [Clipboard.setContent](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/data-transfers/clipboard.md#setcontentdata) is deprecated. Replace it with [Clipboard.write](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/data-transfers/clipboard.md#writedata).
  - [Clipboard.getContent](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/data-transfers/clipboard.md#getcontent) is deprecated. Replace it with [Clipboard.read](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/data-transfers/clipboard.md#read).
  - Passing an `object` to [Clipboard.writeText(object)](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/data-transfers/clipboard.md#writetexttext) is deprecated. Replace that call with [Clipboard.write(object)](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/data-transfers/clipboard.md#writedata).
  - [Clipboard.clearContent](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/data-transfers/clipboard.md#clearcontent) is deprecated. [Clipboard.writeText("")](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/data-transfers/clipboard.md#writetexttext) is an alternative.
- Changes to VideoElement
  - Event `uxpvideoload` in [load()](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-video-element.md#load) is deprecated. Switch to `loadeddata`.
  - Event `uxpvideoplay` in [play()](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-video-element.md#play) is deprecated. Switch to `ended`.
  - Event `uxpvideocomplete` in [play()](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-video-element.md#play) is deprecated. Switch to `ended`.
  - Event `uxpvideopause` in [pause()](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-video-element.md#pause) is deprecated. Switch to `pause`.

### New

- Spectrum Web Components (SWC) now supports new components. Details are available [here](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers).
  - sp-asset
  - sp-meter
  - sp-number-field
  - sp-overlay
  - sp-quick-actions
  - sp-search
  - sp-swatch
- Command-line templates for starting with SWC are now available. This [section](uxp-api-3.md) has details.
- [WebView](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md#load-local-content-onto-webview) can load local HTML files.
- New CSS capabilities
  - scaleX() & scaleY()
  - transform-origin
  - translate property
  - `Box-shadow` property now works with `transform rotate`.
- New feature flag `CSSNextSupport` in the manifest.json controls CSS capability updates now and later.

| Manifest setting | Description |
| --- | --- |
| `featureFlags: {"CSSNextSupport": true}` | Enables all the new CSS features. |
| `featureFlags: {"CSSNextSupport": ["boxShadow", "transformFunctions", "transformProperties" ]}` | Enables only the named properties in the list. |

Note that `"enableSWCSupport": true` enables `CSSNextSupport` by default.

- Video enhancements: [Seek Event](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-video-element.md) support was added
- [Navigator.language](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) API support
- New HTMLElement API support - [append](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-element.md#appendnodes), [prepend](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-element.md#prependnodes) and [replaceChildren](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-element.md#replacechildrennodes)
- [Beta] Support for form reset in [HTMLFormElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

### Updated

- Spectrum Web Components was upgraded to v0.37.0. Details are available [here](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers).
- [UXP Clipboard.writeText()](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/data-transfers/clipboard.md#writetexttext) now accepts strings as input to meet standards

### UXP v7.4.0

### Updated

- UXP Alerts ([alert](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/alert.md), [prompt](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/prompt.md), [confirm](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/confirm.md)) have moved back to beta because the feature still has a few inherent instabilities. While those issues are addressed, access the feature with the `enableAlerts` feature flag in the manifest.json file. Also note that UXP alerts are `available only in Plugins` and `not in scripts`.
- Top-level wildcards (\*) are disallowed in the `domain` name. For [WebView](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md) and network calls [XMLHttp](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/data-transfers/xml-http-request.md) [fetch](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/data-transfers/fetch.md), review `permissions` in manifest.json.
- New doc records the [mapping between Spectrum widgets and Spectrum Web Components](uxp-api-3.md) in UXP

### Fixed

- XMP in Scripts.
- Plugin crash with [fit-content](https://forums.creativeclouddeveloper.com/t/ps-2024-crashes-when-opening-my-uxp-plugin/6840/7)
- WebView support for [file selector](https://forums.creativeclouddeveloper.com/t/macos-uxp-webview-for-photoshop-is-missing-file-selector/6843) in MacOS
- GUID returning hashed empty string
- Docs missing for pseudo-class [defined](uxp-reference-css.md) were updated (Available since UXP v6.0)

### UXP v7.3.0

### New

- [GUID](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/user-information/user-info.md) support provides a unique identifier for a Creative Cloud User (Currently Supported only in `Photoshop`).
- Multipart `FormData` works with `fetch` in [Request](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/data-transfers/request.md) and [Response](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/data-transfers/response.md)
- The following APIs are now available on [FormData](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/data-transfers/form-data.md)
  - delete()
  - get()
  - getAll()
  - has()
  - keys()
  - set()
  - values()

### Updated

- [FormData's append](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/data-transfers/form-data.md#append--namevaluefilename) now supports `Blob` as an additional parameter.
- `Spectrum Web Components` support in `React` context now covers all 30 components.
  - See the sample plugin for UXP-SWC plugin in React context [here](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-react-starter)

### Fixed

- Tab Navigation now works for several SWC Components
- Spacebar operation on SWC Button component when reached through TAB navigation is fixed.
- Support for `Alerts` in InDesign
  - [alert()](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/alert.md)
  - [prompt()](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/prompt.md)
  - [confirm()](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/confirm.md)

### UDT v2.0

### New

UXP Playground lets you experiment with APIs. Click the 'Playground' tab next to 'Developer Workspace' to select an app and begin.

### Updated

Plugin actions are now surfaced based on the 'Status' of your plugin in the Developer Workspace

### UXP v7.2.0

### New

- Adobe [Extensibility Metadata Platform (XMP)](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/xmp/getting-started/xmp.md) support
- [pointer-events: none](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) `CSS` property
- Support for `pseudoElement` in [getComputedStyle(element, pseudoElement)](uxp-global-members-2.md) API

### Updated

- `Spectrum Web Component` is promoted to `release` and supports the [additional list of components](https://developer.adobe.com/photoshop/uxp/2022/uxp-api/reference-spectrum/swc/).
- Support matrix changes for Spectrum web components and variants appear in the [support matrix](https://developer.adobe.com/photoshop/uxp/2022/uxp-api/reference-spectrum/swc/#list-of-supported-swc)
- Consume components inside UXP with `swc-uxp-wrappers`. [npmjs](https://www.npmjs.com/search?q=swc-uxp-wrappers) hosts these wrappers.
- A SWC plugin sample for React is available at [this sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-starter).

### UXP v7.1.0

### New

HTMLElement adds support for

- [setPointerCapture](uxp-global-members-2.md)
- [releasePointerCapture](uxp-global-members-2.md)
- [hasPointerCapture](uxp-global-members-2.md)
- [dir](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-html-element.md#dir--string)

### Updated

- Documentation for `shell` moved to [new location](uxp.md)

### Fixed

- `SVGElement`: The `fill` attribute color resolves from the CSS variable value when a CSS variable is used. To try this fix for now, enable the feature flag in your plugin manifest `"featureFlags" : { "enableFillAsCustomAttribute" : true }`. The next UXP release enables this flag by default.

```
// CSS variable
html {
  --iconColor: yellow;
}

<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="var(--iconColor, red)" />
</svg>
// shows a yellow circle
```

### UXP v7.0.0

### New

- UXP Plugins now support Web Components. The feature includes these HTML element and method additions.
  - Classes
    - [HTMLSlotElement](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-slot-element.md)
    - [HTMLTemplateElement](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-template-element.md)
  - Methods
    - [Element.assignedSlot](uxp-global-members-2.md)
    - [Element.slot](uxp-global-members-2.md)
    - [Element.attachShadow](uxp-global-members-2.md)
    - [Element.shadowRoot](uxp-global-members-2.md)
    - [CustomElementRegistry.upgrade](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/custom-element-registry.md#upgraderoot)
    - [CustomElementRegistry.whenDefined](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/custom-element-registry.md#whendefinedname)
- [Spectrum Web Components (Beta)](uxp-api-3.md) Support for Adobe SWC.
- JS API set additions include
  - Properties
    - [HTMLElement.lang](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-element.md#lang--string)
  - Classes added to the global scope
    - [TreeWalker](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/tree-walker.md)
    - [NodeFilter](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/node-filter.md)
  - Methods
    - [Element.hasAttributes](uxp-global-members-2.md)
    - [Element.getAttributeNames](uxp-global-members-2.md)
    - [Event.composed](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-events/event.md#composed--boolean)
    - [Event.composedPath](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-events/event.md#composedpath)
    - [DocumentFragment.append](uxp-global-members-2.md)
    - [DocumentFragment.querySelector](uxp-global-members-2.md)
    - [DocumentFragment.querySelectorAll](uxp-global-members-2.md)
- React 16 support adds new focus events
  - [Focusin Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event)
  - [Focusout Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event)
- HTML [2D Canvas Support](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-canvas-element.md) for Basic Shapes and Styling.
- Alerts
  - [alert()](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/alert.md)
  - [prompt()](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/prompt.md)
  - [confirm()](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/confirm.md)
- ReadableStream supports [pipeThrough](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/streams/readable-stream.md#pipeThroughtransform,-options) and [tee](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/streams/readable-stream.md#tee) in ReadableStream](./reference-js/Global%20Members/Streams/ReadableStream.md). Refer to [Streams](uxp-global-members-3.md) for more details
- [ImageBlob](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/image-blob/image-blob.md) lets UXP render an uncompressed image buffer

### Changed

- [HTMLVideoElement](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-video-element.md): 'metadata' is the default value for `preload` attribute
- [FS API](uxp-modules.md): The `file://` protocol is no longer needed

### UXP v6.5.0

### New

- UXP Hybrid plugins
- Scripts can use unrestricted relative paths in require
- [getEntryWithUrl](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/persistent-file-storage/file-system-provider.md#getentrywithurlurl) in LocalFileProvider

### UXP v6.4

### New

- [WebView](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md) for anels
- [Path Module APIs](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/path/path.md)
- UXP Scripts can run fsapi with full access in localFileSystem

### Bugs Fixes

- PluginManifest parsing / Load Plugin errors are now logged in UDT
- UDT APP logs no longer show an error on Plugin UnLoad
- UXP script : file session tokens are now created
- Error message and stack are populated when reject("error string") is executed in script
- [Win only]-Volume no longer mutes automatically for tutorial video 3 when that video opens in Theatre mode
- After theatre mode closes, videos no longer Overlap while scrolling up and down in DP
- API provided to programmatically close dialog in pop-out/theatre mode.
- Plugin Data folder is not created for scripts
- Crash on exit fixed
- script.setResult("kSuccess") now works
- Resource Leaks in Window Dialog on UWP fixed
- Privilege plugin add failure in XD fixed for certain cases
- Mouse/keyboard events within Webview fixed in XD v55 and Win 10.

### UXP v6.3

### New

- [Blob](uxp-global-members.md) APIs.
- Fetch API now supports Blob.
- [Crypto APIs](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/crypto/crypto.md)
- With UXP Developer Tools v1.7.0, Debugging UXP Scripts is supported in Photoshop and InDesign; details are available [here](https://developer.adobe.com/photoshop/uxp/2022/scripting/getting-started/)
- UXP Developer Tools adds templates to the Create Plugin Dialog. The examples cover WebView and Multiple Menus in a Plugin. For Webview details, see the JavaScript Reference entry [HTMLWebViewElement](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md) under `Global Members/HTML Elements`

### Bugs Fixes

- Version-dot rejection no longer prevents a plugin from opening its own folders
- PS crash frequency during UDT watch reload fixed
- UDT Window / Bring all to Front now works
- UDT console stays available when PS crashes or quits
- UDT launch failure with "sign-in required" error fixed
- PS crash with empty `<svg> <polygon>` fixed
- Manifest v5 file permissions dialog breakage fixed
- Many stability Fixes and performance improvements

## UXP API Reference

- [JavaScript Reference](uxp-reference-js.md) : Reference coverage for globally available functions, classes, and modules, including access through `require` and objects such as window.
- [CSS Reference](uxp-reference-css.md) : Reference coverage for the CSS style categories and feature set that UXP exposes.
- [HTML Reference](uxp-reference-html.md) : Reference coverage for supported HTML elements plus the attributes available with them.
- [Spectrum UXP Reference](uxp-api-3.md) : Details for Spectrum UXP Widgets, Spectrum Web Components, and the capabilities they provide.
- [Known Issues](uxp-known-issues.md): Known-issue inventory for UXP
