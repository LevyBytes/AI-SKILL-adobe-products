# Changelog3 P

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: UXP Changelog — UXP v8.1.0; UXP API Reference.

## UXP Changelog — UXP v8.1.0

### New

- [UXP Plugins in Premiere Pro v25.1 (Beta)](https://developer.adobe.com/premiere-pro/uxp/) are now supported.
- [ResizeObserver APIs](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/resize-observer.md) can watch an element's dimensions or border-box so automatic layout responses are easier to manage and size-change observation remains performant.
- [IntersectionObserver APIs](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/intersection-observer.md) can monitor when a target element intersects an ancestor element, which helps unblock lazy asset loading and infinite scrolling cases.
- `:first-child` and `:not(:first-child)` pseudo-classes are now supported, expanding existing `Web Component` behavior so desired elements can be targeted.
- The `linear-gradient` property supports start and end values, matching web behavior.

### Fixed

- Corrected the default state mismatch for the `enableFillAsCustomAttribute` flag; it is now true by default.
- Corrected missing `translate` -> `y` values in UXP Dev Tool even though the values were applied correctly on elements.

### UXP Changelog — UDT v2.1.0

- Adds support for UXP Plugins for Premiere Pro v25.1 (Beta)

### UXP Changelog — UXP v8.0.1

### Breaking Changes

- The `enableFillAsCustomAttribute` feature flag, added in UXPv7.1.0, will now default to enabled.

### Deprecations

- Clipboard updates
  - Deprecated: [Clipboard.setContent](uxp-data-transfers.md). Replace it with [Clipboard.write](uxp-data-transfers.md).
  - Deprecated: [Clipboard.getContent](uxp-data-transfers.md). Switch to [Clipboard.read](uxp-data-transfers.md).
  - Deprecated: using an `object` with [Clipboard.writeText(object)](uxp-data-transfers.md). Send that value through [Clipboard.write(object)](uxp-data-transfers.md).
  - Deprecated: [Clipboard.clearContent](uxp-data-transfers.md). One replacement is [Clipboard.writeText("")](uxp-data-transfers.md).
- VideoElement updates
  - For [load()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#load), `uxpvideoload` is deprecated; use `loadeddata`.
  - For [play()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#play), `uxpvideoplay` is deprecated; use `ended`.
  - For [play()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#play), `uxpvideocomplete` is deprecated; use `ended`.
  - For [pause()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#pause), `uxpvideopause` is deprecated; use `pause`.

### New

- Spectrum Web Components (SWC) now include additional supported components; details are [here](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers).
  - sp-asset
  - sp-meter
  - sp-number-field
  - sp-overlay
  - sp-quick-actions
  - sp-search
  - sp-swatch
- Command line templates are available for easier SWC startup. Details are in this [section](uxp-api-2.md).
- [WebView](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md#load-local-content-onto-webview) can load local HTML files.
- New CSS capabilities
  - scaleX() & scaleY()
  - transform-origin
  - translate property
  - `Box-shadow` property now supports `transform rotate`.
- The manifest.json can use the new feature flag `CSSNextSupport` to gate new and upcoming CSS capabilities.

| Manifest setting | Description |
| --- | --- |
| `featureFlags: {"CSSNextSupport": true}` | Enables all the new CSS features. |
| `featureFlags: {"CSSNextSupport": ["boxShadow", "transformFunctions", "transformProperties" ]}` | Enables only the named properties in the list. |

Note that `"enableSWCSupport": true` will enable `CSSNextSupport` by default.

- Video enhancements: [Seek Event](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md) support is included.
- The [Navigator.language](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) API is supported.
- HTMLElement adds [append](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-element.md#appendnodes), [prepend](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-element.md#prependnodes), and [replaceChildren](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-element.md#replacechildrennodes).
- [Beta] [HTMLFormElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) form reset support is included.

### Updated

- Spectrum Web Components have been upgraded to v0.37.0; details are [here](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers).
- [UXP Clipboard.writeText()](uxp-data-transfers.md) now accepts string input for standards alignment.

### UXP Changelog — UXP v7.4.0

### Updated

- UXP Alerts ([alert](uxp-html-dom.md), [prompt](uxp-html-dom-2.md), [confirm](uxp-html-dom.md)) have returned to beta because the feature still has several inherent instabilities. While those issues are addressed, turn it on with the `enableAlerts` feature flag in manifest.json. Scope is limited: UXP alerts are `available only in Plugins` and `not in scripts`.
- Wildcards (\*) are disallowed for top-level `domain` names. Check the manifest.json `permissions` configuration for [WebView](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md) and for network calls [XMLHttp](uxp-data-transfers-2.md) [fetch](uxp-data-transfers.md).
- New documentation records the UXP [mapping between Spectrum widgets and Spectrum Web Components](uxp-api-2.md).

### Fixed

- XMP in Scripts.
- Plugin crashes while using [fit-content](https://forums.creativeclouddeveloper.com/t/ps-2024-crashes-when-opening-my-uxp-plugin/6840/7)
- WebView support for [file selector](https://forums.creativeclouddeveloper.com/t/macos-uxp-webview-for-photoshop-is-missing-file-selector/6843) in MacOS
- GUID returning hashed empty string
- Updated missing docs for pseudo-class [defined](uxp-reference-css.md) (Available since UXP v6.0)

### UXP Changelog — UXP v7.3.0

### New

- [GUID](uxp.md) uniquely identifies a Creative Cloud User (Currently Supported only in `Photoshop`).
- Multipart `FormData` can now be used with [Request](uxp-data-transfers.md) and [Response](uxp-data-transfers.md) for `fetch`.
- [FormData](uxp-data-transfers.md) adds these APIs
  - delete()
  - get()
  - getAll()
  - has()
  - keys()
  - set()
  - values()

### Updated

- [FormData's append](uxp-data-transfers.md) now accepts `Blob` for the extra parameter.
- In a `React` context, `Spectrum Web Components` support covers the full set of 30 components.
  - React-context UXP-SWC sample plugin: [here](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-react-starter)

### Fixed

- Tab Navigation not working for several SWC Components is now fixed
- Spacebar doesn't work on SWC Button component when reached via TAB navigation.
- InDesign supports `Alerts`
  - [alert()](uxp-html-dom.md)
  - [prompt()](uxp-html-dom-2.md)
  - [confirm()](uxp-html-dom.md)

### UXP Changelog — UDT v2.0

### New

UXP Playground lets you experiment with APIs. Select the 'Playground' tab beside 'Developer Workspace', choose an app, and begin.

### Updated

Developer Workspace surfaces plugin actions according to the plugin's 'Status'.

### UXP Changelog — UXP v7.2.0

### New

- Adobe [Extensibility Metadata Platform (XMP)](uxp-xmp.md) support
- [pointer-events: none](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) `CSS` property
- `pseudoElement` is now supported in the [getComputedStyle(element, pseudoElement)](uxp-html-dom-2.md) API.

### Updated

- `Spectrum Web Component` has moved to `release`; component coverage is listed in the [additional list of components](https://developer.adobe.com/photoshop/uxp/2022/uxp-api/reference-spectrum/swc/).
- Spectrum web component and variant coverage has changed; see the [support matrix](https://developer.adobe.com/photoshop/uxp/2022/uxp-api/reference-spectrum/swc/#list-of-supported-swc).
- Use `swc-uxp-wrappers` to consume the components inside UXP. Find the wrappers on [npmjs](https://www.npmjs.com/search?q=swc-uxp-wrappers).
- A React SWC plugin sample is available at https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-starter.

### UXP Changelog — UXP v7.1.0

### New

HTMLElement now supports

- [setPointerCapture](uxp-html-dom-2.md)
- [releasePointerCapture](uxp-html-dom-2.md)
- [hasPointerCapture](uxp-html-dom-2.md)
- [dir](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-html-element.md#dir--string)

### Updated

- Documentation for `shell` moved to [new location](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/shell/index.md)

### Fixed

- `SVGElement`: When a CSS variable is used for the `fill` attribute, the color resolves from that variable. For the moment, verify the fix by enabling this plugin manifest feature flag: `"featureFlags" : { "enableFillAsCustomAttribute" : true }`. The following UXP release will enable this flag by default.

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

### UXP Changelog — UXP v7.0.0

### New

- UXP Plugins now support Web Components. The feature adds several HTML elements and methods.
  - Classes
    - [HTMLSlotElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-slot-element.md)
    - [HTMLTemplateElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-template-element.md)
  - Methods
    - [Element.assignedSlot](uxp-html-dom-2.md)
    - [Element.slot](uxp-html-dom-2.md)
    - [Element.attachShadow](uxp-html-dom-2.md)
    - [Element.shadowRoot](uxp-html-dom-2.md)
    - [CustomElementRegistry.upgrade](uxp-html-dom.md)
    - [CustomElementRegistry.whenDefined](uxp-html-dom.md)
- [Spectrum Web Components (Beta)](uxp-api-2.md) Support for Adobe SWC.
- The JS API set has several additions
  - Properties
    - [HTMLElement.lang](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-element.md#lang--string)
  - Classes added to the global scope
    - [TreeWalker](uxp-html-dom-2.md)
    - [NodeFilter](uxp-html-dom-2.md)
  - Methods
    - [Element.hasAttributes](uxp-html-dom-2.md)
    - [Element.getAttributeNames](uxp-html-dom-2.md)
    - [Event.composed](uxp-global-members-2.md)
    - [Event.composedPath](uxp-global-members-2.md)
    - [DocumentFragment.append](uxp-html-dom.md)
    - [DocumentFragment.querySelector](uxp-html-dom.md)
    - [DocumentFragment.querySelectorAll](uxp-html-dom.md)
- React 16 support now includes new focus events
  - [Focusin Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event)
  - [Focusout Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event)
- Basic Shapes and Styling are included in HTML [2D Canvas Support](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-canvas-element.md).
- Alerts
  - [alert()](uxp-html-dom.md)
  - [prompt()](uxp-html-dom-2.md)
  - [confirm()](uxp-html-dom.md)
- [pipeThrough](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/streams/readable-stream.md#pipeThroughtransform,-options) and [tee](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/streams/readable-stream.md#tee) are supported on [ReadableStream](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/streams/readable-stream.md). Additional details are in [Streams](uxp-global-members-2.md).
- Use [ImageBlob](uxp-global-members-2.md) for UXP uncompressed image-buffer rendering.

### Changed

- [HTMLVideoElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md): the `preload` attribute now defaults to 'metadata'.
- [FS API](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/fs/index.md): omit the `file://` protocol.

### UXP Changelog — UXP v6.5.0

### New

- [UXP Hybrid plugins](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/guides/hybrid-plugins/index.md)
- Scripts can require unrestricted relative paths.
- [getEntryWithUrl](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/file-system-provider.md#getentrywithurlurl) in LocalFileProvider

### UXP Changelog — UXP v6.4

### New

- [WebView](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md) for anels
- [Path Module APIs](uxp-global-members-2.md)
- UXP Scripts can run fsapi with full access in localFileSystem

### Bugs Fixes

- PluginManifest parsing / Load Plugin errors not logged in UDT
- Error shown in UDT APP logs on Plugin UnLoad
- UXP script : file session tokens are not getting created
- Error message and stack are empty in case of reject("error string") executed in script
- [Win only]-Volume is being muted automatically for 3rd video in the tutorial while opening the video in Theatre mode
- After closing the theatre mode, video's are Overlapping while scrolling up and down in DP
- Provide an API to programmatically close dialog in pop-out/theatre mode.
- Plugin Data folder shouldn't be created for scripts
- Crash on exit
- script.setResult("kSuccess") not working
- Resource Leaks in Window Dialog on UWP
- Privilege plugin fail to add in XD in certain cases
- Fixed mouse/keyboard events within Webview in XD v55 and Win 10.

### UXP Changelog — UXP v6.3

### New

- [Blob](uxp-data-transfers.md) APIs.
- Blob values are supported in Fetch API.
- [Crypto APIs](uxp-global-members.md)
- With UXP Developer Tools v1.7.0, Debugging UXP Scripts is supported in Photoshop and InDesign; see [here](https://developer.adobe.com/photoshop/uxp/2022/scripting/getting-started/) for details.
- UXP Developer Tools adds templates in the Create Plugin Dialog, including examples for using WebView and Multiple Menus in a Plugin. For Webview, consult the [HTMLWebViewElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md) module in JavaScript Reference under `Global Members/HTML Elements`.

### Bugs Fixes

- Plugin cannot open its own folders because version dots are rejected
- PS crashes frequently during UDT watch reload
- UDT Window / Bring all to Front does not work
- UDT console closed when PS crashes or quits
- UDT fails to launch with "sign-in required" error
- PS crashes with empty `<svg> <polygon>`
- Manifest v5 breaks file permissions dialog
- Many stability Fixes and performance improvements

## UXP API Reference

- [JavaScript Reference](uxp-reference-js.md) : Covers globally available functions, classes, and modules, including window members and items loaded through `require`.
- [CSS Reference](uxp-reference-css.md) : Covers CSS style and feature support in UXP.
- [HTML Reference](uxp-reference-html.md) : Covers supported HTML elements and attributes.
- [Spectrum UXP Reference](uxp-api-2.md) : Describes Spectrum UXP Widgets, Spectrum Web Components, and their capabilities.
- [Known Issues](uxp-known-issues.md): Known UXP issues list
