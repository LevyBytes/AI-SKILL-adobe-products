# Changelog

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

### New

- [Flyout Menus Support](uxp-recipes-2.md)
- [Peristent Storage Migration](uxp-recipes-3.md)
- [GUID support](https://raw.githubusercontent.com/reference/uxp-api/reference-js/modules/uxp/user-information/index.md)

### UXP v8.0.1

### Breaking Changes

- `enableFillAsCustomAttribute` is the feature flag introduced in UXP v7.1.0, and it now defaults to on.

### Deprecations

- Changes to Clipboard
  - [Clipboard.setContent](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/clipboard.md#setcontentdata) is deprecated; use [Clipboard.write](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/clipboard.md#writedata) instead.
  - [Clipboard.getContent](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/clipboard.md#getcontent) is deprecated; use [Clipboard.read](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/clipboard.md#read) instead.
  - Passing an `object` to [Clipboard.writeText(object)](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/clipboard.md#writetexttext) is deprecated; use [Clipboard.write(object)](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/clipboard.md#writedata) instead.
  - [Clipboard.clearContent](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/clipboard.md#clearcontent) is deprecated; [Clipboard.writeText("")](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/clipboard.md#writetexttext) can be used as an alternative.
- Changes to VideoElement
  - Event `uxpvideoload` in [load()](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/html-video-element.md#load) is deprecated; use `loadeddata` instead.
  - Event `uxpvideoplay` in [play()](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/html-video-element.md#play) is deprecated; use `ended` instead.
  - Event `uxpvideocomplete` in [play()](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/html-video-element.md#play) is deprecated; use `ended` instead.
  - Event `uxpvideopause` in [pause()](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/html-video-element.md#pause) is deprecated; use `pause` instead.

### New

- Spectrum Web Components (SWC) adds these components. Details: [here](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers)
  - sp-asset
  - sp-meter
  - sp-number-field
  - sp-overlay
  - sp-quick-actions
  - sp-search
  - sp-swatch
- Command line templates are available for starting with SWC. Details are in this [section](https://raw.githubusercontent.com/reference/uxp-api/reference-spectrum/swc/index.md#command-line-templates).
- [WebView](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md#load-local-content-onto-webview) supports local HTML files.
- New CSS capabilities
  - scaleX() & scaleY()
  - transform-origin
  - translate property
  - `Box-shadow` property now supports `transform rotate`.
- manifest.json now includes the `CSSNextSupport` feature flag for CSS features added now and later.

| Manifest setting | Description |
| --- | --- |
| `featureFlags: {"CSSNextSupport": true}` | Enables all the new CSS features. |
| `featureFlags: {"CSSNextSupport": ["boxShadow", "transformFunctions", "transformProperties" ]}` | Enables only the named properties in the list. |

Note: setting `"enableSWCSupport": true` also turns on `CSSNextSupport` by default, even if the plugin manifest does not set it separately.

- Video enhancements: [Seek Event](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/html-video-element.md) support is available.
- [Navigator.language](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) API is supported.
- New HTMLElement APIs include: [append](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/html-element.md#appendnodes), [prepend](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/html-element.md#prependnodes) and [replaceChildren](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/html-element.md#replacechildrennodes)
- [Beta] [HTMLFormElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) now supports form reset.

### Updated

- Spectrum Web Components has been upgraded to v0.37.0. Details: [More detail](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers)
- [UXP Clipboard.writeText()](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/clipboard.md#writetexttext) now accepts strings as input to meet standards

## Changelog — InDesign v19.4

### UXP v7.4.0

### Updated

- UXP Alerts ([alert](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/alert.md), [prompt](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/prompt.md), [confirm](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/confirm.md)) returned to beta because this feature still has some inherent instability. During the work to resolve those issues, enable access with the `enableAlerts` feature flag in the manifest.json file. UXP alerts are also `available only in Plugins` and `not in scripts`.
- Top-level `domain` names cannot use Wildcards (\*). Check manifest.json `permissions` for [WebView](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md) and for network calls [XMLHttp](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/xml-http-request.md) [fetch](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/fetch.md)
- A new doc tracks the [mapping between Spectrum widgets and Spectrum Web Components](https://raw.githubusercontent.com/reference/uxp-api/reference-spectrum/spectrum-widgets-to-swc-mapping/index.md) in UXP.

### Fixed

- XMP in Scripts.
- Plugin crashes while using [fit-content](https://forums.creativeclouddeveloper.com/t/ps-2024-crashes-when-opening-my-uxp-plugin/6840/7)
- WebView support for [file selector](https://forums.creativeclouddeveloper.com/t/macos-uxp-webview-for-photoshop-is-missing-file-selector/6843) in MacOS
- GUID returning hashed empty string
- Docs for pseudo-class [defined](https://raw.githubusercontent.com/reference/uxp-api/reference-css/pseudo-classes/defined.md) were updated (Available since UXP v6.0)

## Changelog — InDesign v19.2

### Updated

- **[BREAKING CHANGE]** UXP logs and console.log [paths](https://raw.githubusercontent.com/scripts/tutorials/debug/index.md) changed.

## Changelog — InDesign v19.0

The Plug-Ins menu displays installed UXP plugins together with the panel entrypoints they expose.

[Figure: Plug-Ins Menu](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/changelog/plugins-menu.png)

### Fixed

- Invoking `doScript()` from UXP plugins no longer causes intermittent app hangs.
- Quit-time crashes tied to registered event handlers are fixed.

### UXP v7.3.0 & UXP v7.2

### New

- Multipart `FormData` is available for [Request](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/request.md) and [Response](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/response.md) when used with [fetch](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/fetch.md).
- [FormData](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/form-data.md) includes these APIs:
  - delete()
  - get()
  - getAll()
  - has()
  - keys()
  - set()
  - values()
- **(Photoshop Only)** GUID support for unique Creative Cloud User identification.
- **(Photoshop Only)** Support for Adobe Extensibility Metadata Platform (XMP).
- The [pointer-events: none](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) `CSS` property is available.
- `pseudoElement` is supported by the [getComputedStyle(element, pseudoElement)](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/get-computed-style.md) API.

### Updated

- [FormData's append](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/form-data.md#append--namevaluefilename) accepts `Blob` as another parameter.
- UXP is moving [Spectrum Web Component (SWC)](https://raw.githubusercontent.com/reference/uxp-api/reference-spectrum/swc/index.md) out of Beta.
  - More [components and variants](https://raw.githubusercontent.com/reference/uxp-api/reference-spectrum/swc/index.md#list-of-supported-swc)
  - `Spectrum Web Components` can now be used in a `React` context for all 30 components.
  - Starter plugins are provided for [Spectrum Web Component](https://github.com/AdobeDocs/uxp-indesign-samples/tree/main/plugins/swc-uxp-starter) and [Spectrum Web Component in React context](https://github.com/AdobeDocs/uxp-indesign-samples/tree/main/plugins/swc-uxp-react-starter).

### Fixed

- Several SWC Components now handle Tab Navigation correctly.
- An SWC Button component reached through TAB navigation now responds to Spacebar.
- Support for `Alerts`
  - [alert()](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/alert.md)
  - [prompt()](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/prompt.md)
  - [confirm()](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/confirm.md)

### UDT v2.0

### New

- UXP Playground is available for API experimentation. Choose the 'Playground' tab beside 'Developer Workspace' to select an app and begin.

### Updated

- Plugin actions now appear according to the plugin 'Status' in Developer Workspace

## Changelog — InDesign v18.5

UXP Plugins are available now. Use [here](uxp-plugins.md) as the starting point.

### UXP v7.1

### New

HTMLElement support now includes:

- [setPointerCapture](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/element.md#setpointercapturepointerid)
- [releasePointerCapture](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/element.md#releasepointercapturepointerid)
- [hasPointerCapture](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/element.md#haspointercapturepointerid)
- [dir](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/html-html-element.md#dir--string)

### Updated

- The `shell` documentation is now at [new location](https://raw.githubusercontent.com/reference/uxp-api/reference-js/modules/uxp/shell/index.md).

### Fixed

- `SVGElement`: CSS variables used in the `fill` attribute now resolve to their variable values. For this release, validate the change by setting `"featureFlags" : { "enableFillAsCustomAttribute" : true }` in your plugin manifest. The next UXP release is expected to enable that flag automatically.

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

### UXP v7.0

### New

- UXP Plugins now include Web Components support, with added HTML elements and methods for that capability.
  - Classes
    - [HTMLSlotElement](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/html-slot-element.md)
    - [HTMLTemplateElement](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/html-template-element.md)
  - Methods
    - [Element.assignedSlot](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/element.md#assignedslot--htmlslotelement)
    - [Element.slot](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/element.md#slot--string)
    - [Element.attachShadow](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/element.md#attachshadowinit)
    - [Element.shadowRoot](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/element.md#shadowroot--shadowroot)
    - [CustomElementRegistry.upgrade](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/custom-element-registry.md#upgraderoot)
    - [CustomElementRegistry.whenDefined](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/custom-element-registry.md#whendefinedname)
- [Spectrum Web Components (Beta)](https://raw.githubusercontent.com/reference/uxp-api/reference-spectrum/swc/index.md) adds Adobe SWC support.
- The JS API set gains several additions.
  - Properties
    - [HTMLElement.lang](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/html-element.md#lang--string)
  - Global-scope classes
    - [TreeWalker](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/tree-walker.md)
    - [NodeFilter](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/node-filter.md)
  - Methods
    - [Element.hasAttributes](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/element.md#hasattributes)
    - [Element.getAttributeNames](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/element.md#getattributenames)
    - [Event.composed](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-events/event.md#composed--boolean)
    - [Event.composedPath](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-events/event.md#composedpath)
    - [DocumentFragment.append](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/document-fragment.md#appendargs)
    - [DocumentFragment.querySelector](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/document-fragment.md#queryselectorselector)
    - [DocumentFragment.querySelectorAll](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/document-fragment.md#queryselectorallselector)
- New focus events are present for React 16.
  - [Focusin Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event)
  - [Focusout Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event)
- HTML [2D Canvas Support](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/html-canvas-element.md) covers simple shape drawing and style work.
- Alerts
  - [alert()](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/alert.md)
  - [prompt()](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/prompt.md)
  - [confirm()](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-dom/confirm.md)
- [ReadableStream](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/streams/readable-stream.md) supports [pipeThrough](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/streams/readable-stream.md#pipeThroughtransform-options) and [tee](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/streams/readable-stream.md#tee). See [Streams](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/streams/index.md) for details.
- [ImageBlob](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/image-blob/index.md) renders an image buffer without compression in UXP.

### Changed

- [HTMLVideoElement](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/html-video-element.md): `preload` defaults to 'metadata'.
- [FS API](https://raw.githubusercontent.com/reference/uxp-api/reference-js/modules/fs/index.md): the `file://` protocol is no longer required.

## Changelog — InDesign v18.4

### InDesign APIs

### Added

- **[BREAKING CHANGE]** Mounting APIs
  InDesign DOM APIs are not exposed globally anymore. Before use, first [mount the APIs](uxp-resources.md). Multiple DOM API versions are now accessible.
- Events
  UXP scripts can now handle standard events emitted by InDesign. To receive those events, use the [eventListener](uxp-recipes-2.md) object.
- Arguments in UXP Scripts
  [Arguments](uxp-advanced-topics.md) may now be passed into a UXP script and consumed within that script.
- Setting script result
  UXP scripts now carry an associated "result" value. [Set a result](uxp-advanced-topics.md) for debugging purposes and for handoff to another script.
- Menus
  UXP scripts now include APIs for adding new menu items, removing existing menu items, and related menu work. [Read more](uxp-recipes-2.md).
