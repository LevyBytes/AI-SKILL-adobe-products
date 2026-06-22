# Changelog3 P

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: UXP Changelog — UXP v8.1.0; UXP API Reference.

## UXP Changelog — UXP v8.1.0

### New

- Support for [UXP Plugins in Premiere Pro v25.1 (Beta)](https://developer.adobe.com/premiere-pro/uxp/)
- [ResizeObserver APIs](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-dom/resize-observer.md) can watch an element's dimensions or border-box, improving automatic adjustment handling and giving size-change observation a performant path.
- [IntersectionObserver APIs](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-dom/intersection-observer.md) can monitor how a target element intersects with an ancestor element, enabling lazy asset loading cases and helping infinite scrolling.
- Added `:first-child` and `:not(:first-child)` pseudo-class support so existing `Web Component` support can target the desired elements.
- Added `linear-gradient` property support with start and end values to match the web.

### Fixed

- Corrected the default-state mismatch for the `enableFillAsCustomAttribute` flag; it now defaults to true.
- Restored missing `translate` -> `y` values in UXP Dev Tool display, even though the values were already applied on the elements.

### UXP Changelog — UDT v2.1.0

- UDT now supports UXP Plugins for Premiere Pro v25.1 (Beta).

### UXP Changelog — UXP v8.0.1

### Breaking Changes

- The `enableFillAsCustomAttribute` feature flag, first added in UXPv7.1.0, now defaults to on.

### Deprecations

- Changes to Clipboard
  - [Clipboard.setContent](uxp-data-transfers.md) is deprecated; prefer [Clipboard.write](uxp-data-transfers.md) as the replacement.
  - Replace deprecated [Clipboard.getContent](uxp-data-transfers.md) calls with [Clipboard.read](uxp-data-transfers.md).
  - Object input for [Clipboard.writeText(object)](uxp-data-transfers.md) is deprecated; call [Clipboard.write(object)](uxp-data-transfers.md) instead.
  - As a replacement for deprecated [Clipboard.clearContent](uxp-data-transfers.md), call [Clipboard.writeText("")](uxp-data-transfers.md).
- Changes to VideoElement
  - Event `uxpvideoload` in [load()](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#load) is deprecated. Use `loadeddata` instead.
  - Event `uxpvideoplay` in [play()](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#play) is deprecated. Use `ended` instead.
  - Event `uxpvideocomplete` in [play()](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#play) is deprecated. Use `ended` instead.
  - Event `uxpvideopause` in [pause()](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#pause) is deprecated. Use `pause` instead.

### New

- Spectrum Web Components (SWC) adds support for more components. Details are available [here](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers).
  - sp-asset
  - sp-meter
  - sp-number-field
  - sp-overlay
  - sp-quick-actions
  - sp-search
  - sp-swatch
- SWC setup now has new command line templates; see this [section](uxp-api-2.md) for details.
- WebView gained local HTML file support; see [WebView](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md#load-local-content-onto-webview).
- New CSS capabilities
  - scaleX() & scaleY()
  - transform-origin
  - translate property
  - `Box-shadow` property now supports `transform rotate`.
- The manifest.json file has a new `CSSNextSupport` feature flag for gating new and future CSS capabilities.

| Manifest setting | Description |
| --- | --- |
| `featureFlags: {"CSSNextSupport": true}` | Enables all the new CSS features. |
| `featureFlags: {"CSSNextSupport": ["boxShadow", "transformFunctions", "transformProperties" ]}` | Enables only the named properties in the list. |

When `"enableSWCSupport": true` is set, `CSSNextSupport` is enabled by default.

- Video enhancements: The [Seek Event](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md) is now supported.
- [Navigator.language](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) API support was added.
- HTMLElement now includes [append](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-element.md#appendnodes), [prepend](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-element.md#prependnodes), and [replaceChildren](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-element.md#replacechildrennodes).
- [Beta] Form reset support is available in [HTMLFormElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form).

### Updated

- Spectrum Web Components has been upgraded to v0.37.0. More details are available [here](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers).
- [UXP Clipboard.writeText()](uxp-data-transfers.md) now accepts string input to align with standards.

### UXP Changelog — UXP v7.4.0

### Updated

- UXP Alerts ([alert](uxp-html-dom.md), [prompt](uxp-html-dom-2.md), [confirm](uxp-html-dom.md)) are beta again while stability problems are addressed. Access is controlled by the `enableAlerts` feature flag in manifest.json. UXP alerts are also `available only in Plugins` and `not in scripts`.
- Wildcards (\*) are not valid as top-level `domain` names. Review manifest.json `permissions` for [WebView](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md), along with network calls made through [XMLHttp](uxp-xml-http-request.md) and [fetch](uxp-data-transfers.md).
- New UXP documentation maps [Spectrum widgets to Spectrum Web Components](uxp-api-2.md).

### Fixed

- Corrected XMP in Scripts.
- Crashes triggered by [fit-content](https://forums.creativeclouddeveloper.com/t/ps-2024-crashes-when-opening-my-uxp-plugin/6840/7) no longer occur.
- Restored file-selector support in WebView for MacOS: [file selector](https://forums.creativeclouddeveloper.com/t/macos-uxp-webview-for-photoshop-is-missing-file-selector/6843).
- Fixed GUID values returning as a hashed empty string.
- Documented [defined](uxp-reference-css.md), the pseudo-class available since UXP v6.0.

### UXP Changelog — UXP v7.3.0

### New

- [GUID](uxp.md) can identify a Creative Cloud User uniquely; support currently exists only in `Photoshop`.
- For `fetch`, multipart `FormData` now works in [Request](uxp-data-transfers.md) and [Response](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/data-transfers/response.md).
- [FormData](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/data-transfers/form-data.md) adds these APIs:
  - delete()
  - get()
  - getAll()
  - has()
  - keys()
  - set()
  - values()

### Updated

- [FormData's append](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/data-transfers/form-data.md#append--namevaluefilename) now accepts `Blob` as an additional parameter.
- `Spectrum Web Components` support in a `React` context is available for all 30 components.
  - See the [React-context UXP-SWC sample plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-react-starter).

### Fixed

- Fixed Tab Navigation for several SWC Components.
- Fixed Spacebar behavior on SWC Button component when reached via TAB navigation.
- Added InDesign support for `Alerts`.
  - [alert()](uxp-html-dom.md)
  - [prompt()](uxp-html-dom-2.md)
  - [confirm()](uxp-html-dom.md)

### UXP Changelog — UDT v2.0

### New

UXP Playground lets you experiment with APIs. Select the 'Playground' tab beside 'Developer Workspace', then choose an app to begin.

### Updated

In the Developer Workspace, available plugin actions are shown according to the plugin's 'Status'.

### UXP Changelog — UXP v7.2.0

### New

- Added Adobe [Extensibility Metadata Platform (XMP)](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/getting-started/xmp.md) support.
- Added the [pointer-events: none](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) `CSS` property.
- Added `pseudoElement` support in the [getComputedStyle(element, pseudoElement)](uxp-html-dom.md) API.

### Updated

- `Spectrum Web Component` moved to `release` and supports an [additional list of components](https://developer.adobe.com/photoshop/uxp/2022/uxp-api/reference-spectrum/swc/).
- See the [Spectrum support matrix](https://developer.adobe.com/photoshop/uxp/2022/uxp-api/reference-spectrum/swc/#list-of-supported-swc) for updated coverage of Spectrum web components and variants.
- Inside UXP, consume the components through `swc-uxp-wrappers`; the wrappers are published on [npmjs](https://www.npmjs.com/search?q=swc-uxp-wrappers).
- A React plugin sample using SWC is available at the [React SWC sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-starter).

### UXP Changelog — UXP v7.1.0

### New

HTMLElement now includes support for

- [setPointerCapture](uxp-html-dom.md)
- [releasePointerCapture](uxp-html-dom.md)
- [hasPointerCapture](uxp-html-dom.md)
- [dir](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-html-element.md#dir--string)

### Updated

- The `shell` documentation now lives at a [new location](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/shell/index.md)

### Fixed

- `SVGElement`: when the `fill` attribute uses a CSS variable, the color now resolves from that variable's value. Until this becomes the default behavior, enable the plugin-manifest feature flag `"featureFlags" : { "enableFillAsCustomAttribute" : true }` to test the fix. The next UXP release will enable this flag by default.

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

- UXP Plugins now provide Web Components support. These HTML elements and methods were added for that capability.
  - Classes
    - [HTMLSlotElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-slot-element.md)
    - [HTMLTemplateElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-template-element.md)
  - Methods
    - [Element.assignedSlot](uxp-html-dom.md)
    - [Element.slot](uxp-html-dom.md)
    - [Element.attachShadow](uxp-html-dom.md)
    - [Element.shadowRoot](uxp-html-dom.md)
    - [CustomElementRegistry.upgrade](uxp-html-dom.md)
    - [CustomElementRegistry.whenDefined](uxp-html-dom.md)
- [Spectrum Web Components (Beta)](uxp-api-2.md) adds support for Adobe SWC.
- The JS API set gained these additional surfaces
  - Properties
    - [HTMLElement.lang](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-element.md#lang--string)
  - Classes added to the global scope
    - [TreeWalker](uxp-html-dom-2.md)
    - [NodeFilter](uxp-html-dom-2.md)
  - Methods
    - [Element.hasAttributes](uxp-html-dom.md)
    - [Element.getAttributeNames](uxp-html-dom.md)
    - [Event.composed](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-events/event.md#composed--boolean)
    - [Event.composedPath](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-events/event.md#composedpath)
    - [DocumentFragment.append](uxp-html-dom.md)
    - [DocumentFragment.querySelector](uxp-html-dom.md)
    - [DocumentFragment.querySelectorAll](uxp-html-dom.md)
- React 16 compatibility now includes these focus events
  - [Focusin Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event)
  - [Focusout Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event)
- HTML [2D Canvas Support](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-canvas-element.md) now covers Basic Shapes and Styling.
- Alerts
  - [alert()](uxp-html-dom.md)
  - [prompt()](uxp-html-dom-2.md)
  - [confirm()](uxp-html-dom.md)
- [ReadableStream](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/streams/readable-stream.md) now supports [pipeThrough](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/streams/readable-stream.md#pipeThroughtransform,-options) and [tee](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/streams/readable-stream.md#tee). See [Streams](uxp-global-members-2.md) for more information.
- [ImageBlob](uxp-global-members-2.md) lets UXP render image buffers that are uncompressed.

### Changed

- [HTMLVideoElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md): the `preload` attribute now defaults to 'metadata'.
- [FS API](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/fs/index.md): the `file://` protocol is no longer required.

### UXP Changelog — UXP v6.5.0

### New

- [UXP Hybrid plugins](uxp-plugins.md)
- Scripts can use unrestricted relative paths in require.
- LocalFileProvider now includes [getEntryWithUrl](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/file-system-provider.md#getentrywithurlurl).

### UXP Changelog — UXP v6.4

### New

- [WebView](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md) adds panel support.
- [Path Module APIs](uxp-global-members-2.md)
- fsapi can run from UXP Scripts with full localFileSystem access.

### Bugs Fixes

- PluginManifest parsing / Load Plugin errors were not logged in UDT.
- UDT APP logs showed an error on Plugin UnLoad.
- UXP script : file session tokens were not being created.
- When reject("error string") ran in script, both the error message and stack were empty.
- [Win only]-Volume muted automatically for the 3rd video in the tutorial while that video opened in Theatre mode.
- After theatre mode closed, videos overlapped while scrolling up and down in DP.
- An API was needed to programmatically close dialog in pop-out/theatre mode.
- Plugin Data folder should not be created for scripts.
- Crash on exit.
- script.setResult("kSuccess") did not work.
- Resource Leaks in Window Dialog on UWP.
- Privilege plugin failed to add in XD in certain cases.
- Mouse/keyboard events within Webview in XD v55 and Win 10 were fixed.

### UXP Changelog — UXP v6.3

### New

- [Blob](uxp-data-transfers.md) APIs.
- Fetch API now supports Blob.
- [Crypto APIs](uxp-global-members.md)
- With UXP Developer Tools v1.7.0, Debugging UXP Scripts is available in Photoshop and InDesign; see [here](https://developer.adobe.com/photoshop/uxp/2022/scripting/getting-started/) for details.
- The Create Plugin Dialog in UXP Developer Tools now includes new templates, including examples that use WebView and Multiple Menus in a Plugin. For WebView details, consult [HTMLWebViewElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md) in JavaScript Reference under `Global Members/HTML Elements`.

### Bugs Fixes

- Version dots being rejected prevented a plugin from opening its own folders.
- Frequent PS crashes occurred during UDT watch reload.
- UDT Window / Bring all to Front did not work.
- The UDT console closed after PS crashed or quit.
- UDT could fail to launch with "sign-in required" error.
- An empty `<svg> <polygon>` could crash PS.
- Manifest v5 caused failures in the file permissions dialog.
- Stability and performance received many Fixes and improvements.

## UXP API Reference

- [JavaScript Reference](uxp-reference-js.md) : Technical details for the functions, classes, and modules exposed globally, such as on window, and through `require`.
- [CSS Reference](uxp-reference-css.md) : Technical details for the UXP-supported CSS style set and feature coverage.
- [HTML Reference](uxp-reference-html.md) : Technical details for supported HTML elements and attributes.
- [Spectrum UXP Reference](uxp-api-2.md) : Details about Spectrum UXP Widgets, Spectrum Web Components, and their capabilities.
- [Known Issues](uxp-known-issues.md): Known UXP issues list.
