# Changelog (part 1)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

### Dialog lockDocumentFocus

The Photoshop-specific option for a dialog element's `showModal` method is documented under [Known Issues and Workarounds](uxp-ps-reference.md). A later documentation pass will move that note into [showModal](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/reference-js/Global%20Members/HTML%20Elements/HTMLDialogElement/index.md#showmodal).

## Photoshop API Changelog — Photoshop 27.4 (February 2026)

### New Adjustment layer kinds

- [Constants.layerKind](uxp-constants.md) now lists Grain and Clarity as new Adjustment layer entries.

### UXP v9.2.0 Integration

> ### New
>
> - System Sleep/Awake Events: Plugin JavaScript now gets notifications when the system sleeps or wakes, giving features such as video playback more control.
>
> ```javascript
> window.addEventListener("awake", () => {
>   console.log("System is awake");
> });
> window.addEventListener("sleep", () => {
>   console.log("System is sleeping");
> });
> ```

### UXP v9.1.0 Integration

> #### New
>
> - Video timeUpdate Event: UXP's [`video element`](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/changelog/reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement.md) now emits the `timeUpdate` event, matching the HTML5 video element behavior.
> - Video Element Audio Support: Audio file playback is now supported by UXP's [`video element`](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/changelog/reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement.md).
> - URLSearchParams Module Support: UXP now includes the [`URLSearchParams`](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/changelog/reference-js/Global%20Members/URL/URLSearchParams.md) module.
> - WebView Drag & Drop Support: Drops can now move between UXP panels and panels based on [`WebView`](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/changelog/reference-js/Global%20Members/HTML%20Elements/HTMLWebViewElement.md). A WebView can receive varied dropped data types from any location, bypassing UXP.
> - Improved Image Loading: When several views request the same URL, image loading now avoids false error states and visible flicker, producing steadier UI rendering.

> #### Updated
>
> - [`WebView`](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/changelog/reference-js/Global%20Members/HTML%20Elements/HTMLWebViewElement.md) Improvements
> - WebView2 swipe navigation is disabled. This keeps behavior aligned with macOS WKWebView. WebView2 gestures, including Swipe, Zoom Control, and Pinch Zoom, are now all disabled.
> - WebView load error messages now carry more information. `WebViewEvent.message` gives additional detail about error causes to support debugging.
> - The `allow` field was removed from `permissions.webview` configuration. Plugin manifests no longer use `permissions.webview.allow`.

## Photoshop API Changelog — Photoshop 27.2 (December 2025)

### Document Generative Upscale

- [Document.generativeUpscale(model, options)](uxp-document.md) runs generative upscaling on the image and places the result in a new document. At present, Firefly is the only supported model, with scale values of 2 or 4.

## Photoshop API Changelog — Photoshop 26.11 (September 2025)

### Preferences

- A new Notifications group was added to match the Preferences dialog. Quiet mode is included, along with an override tied to Rich Tooltips, What's new, and Feature Onboarding.

### UXP 9.0.2 Integration

> - WebViews now receive script injection across every frame, including nested `<iframe>` content. This fixes no-op context menus appearing for `<iframe>` in WebViews.
> - A Debug-build connection problem between UXP Developer Tools (UDT) and host applications is fixed, removing the related workflow disruption.
> - The WebView visibility-change script now always executes on the plugin's JavaScript thread, resolving a crash across all DVA codebases.

## Photoshop API Changelog — Photoshop 26.10 (August 2025)

### UXP v9.0.0 Integration

> ### Updated
>
> - Webview enhancements
>   - WebView2 uses Fluent overlay scrollbars, giving the UI a more current feel
>   - Manifest configuration is simpler because `requiredPermissions.webview.domains` is now optional
> - `SecureStorage` methods now use Web Storage API-style error handling.
> - For correctness, [`XMLHttpRequest`](uxp-data-transfers-2.md) now exposes `XMLHttpRequest.readyState`.

## Photoshop API Changelog — Photoshop 26.9 (July 2025)

- Set [Document](uxp-document.md) `activeLayers` by passing an array of [Layer](uxp-layer.md) objects.
- [app.createDocument](uxp-classes-4.md) no longer fails silently when `fillColor` is supplied without `fill`. Options containing only `fillColor` are now processed correctly, and document creation errors are now thrown instead of discarded.
- Internal validation for Document and Layer references was expanded.

### UXP v8.4.0 Integration

> #### Bug Fixes
>
> - Security Fix: On redirects to another origin, the 'Authorisation' header is removed from the HTTP request.
> - `\\` was not accepted as an authority delimiter on Windows. That behavior is now corrected.

## Photoshop API Changelog — Photoshop 26.8 (June 2025)

### UXP v8.3.0 Integration

> - Stability fixes for Video on Windows

### UXP v8.2.0 Integration

> #### New
>
> - **File System Stream Support**
>   UXP now supports [`fs.createReadStream`](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/fs/index.md), so large file uploads can stream without requiring the full file in memory.
>
> #### Updated
>
> - **[`XMLHttpRequest`](uxp-data-transfers-2.md) Enhancement**
>   The standard states are available for `XMLHttpRequest`: `UNSENT`, `OPENED`, `HEADERS_RECEIVED`, `LOADING`, `DONE`. Access to XMLHttpRequest state variables works in these forms.
>   XMLHttpRequest.`HEADERS_RECEIVED` -> It should not return undefined but return 2.
>   XMLHttpRequest.prototype.OPENED -> It should return 1.
>   (new XMLHttpRequest()).LOADING -> It should return 3.
> - **File System Improvements**
>   UXP filesystem support now covers all valid characters, including special characters such as pound(#), improving compatibility with varied file naming conventions.

## Photoshop API Changelog — Documentation update (May 2025)

- Output details for [`core.getDisplayConfiguration()`](uxp-media-4.md) were documented, including the new `maximumExtendedDynamicRangeColorComponent` property.
- [Event Codes](uxp-media-2.md): a new page now lists event names used with [`core.addNotificationListener()`](uxp-media-4.md) and [`action.addNotificationListener()`](uxp-photoshopaction.md). It also adds the Core event `displayConfigurationChanged`.
- RGB image data is required by [`imaging.encodeImageData()`](uxp-media-3.md), according to the new note.
- Descriptions and code samples were added, clarified, and cleaned up.

## Photoshop API Changelog — Photoshop 26.1 (November 2024)

### UXP v8.1.0 Integration

> #### New
>
> - [ResizeObserver APIs](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/resize-observer.md) can watch dimensions and border-box changes, helping manage automatic adjustments and track element size changes efficiently.
> - [IntersectionObserver APIs](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/intersection-observer.md) track a target element's intersection with an ancestor element, enabling lazy asset loading scenarios and infinite scrolling.
> - Existing `Web Component` support gains `:first-child` and `:not(:first-child)` pseudo-classes, allowing authors to target the intended elements.
> - The `linear-gradient` property supports start and end values for web alignment.
>
> #### Fixed
>
> - The default state discrepancy for `enableFillAsCustomAttribute` is fixed; it is now true by default.
> - UXP Dev Tool no longer omits `translate` -> `y` values when those values have been correctly applied on elements.

## Photoshop API Changelog — Photoshop 26.0 (Oct 2024)

### Photoshop app object

- `updateUI` To refresh the Layers panel while dragging a slider handle, use [`updateUI()`](uxp-classes-4.md).
- Use [`core.convertGlobalToLocal()`](uxp-media-4.md) to convert a global coordinate point into coordinates relative to a panel reference point.

### UXP v8.0.1 Integration

> #### Breaking Changes
>
> - The `enableFillAsCustomAttribute` feature flag, introduced in UXPv7.1.0, will be on automatically.
>
> #### Deprecations
>
> - Changes to Clipboard
>   - [Clipboard.setContent](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/data-transfers/Clipboard.md#setcontentdata) is deprecated; replacement API: [Clipboard.write](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/data-transfers/Clipboard.md#writedata).
>   - [Clipboard.getContent](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/data-transfers/Clipboard.md#getcontent) is deprecated; replacement API: [Clipboard.read](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/data-transfers/Clipboard.md#read).
>   - Passing an `object` to [Clipboard.writeText(object)](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/data-transfers/Clipboard.md#writetexttext) is deprecated; replacement API: [Clipboard.write(object)](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/data-transfers/Clipboard.md#writedata).
>   - [Clipboard.clearContent](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/data-transfers/Clipboard.md#clearcontent) is deprecated; alternative API: [Clipboard.writeText("")](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/data-transfers/Clipboard.md#writetexttext).
> - Changes to VideoElement
>   - Event `uxpvideoload` in [load()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#load) is deprecated; replacement event: `loadeddata`.
>   - Event `uxpvideoplay` in [play()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#play) is deprecated; replacement event: `ended`.
>   - Event `uxpvideocomplete` in [play()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#play) is deprecated; replacement event: `ended`.
>   - Event `uxpvideopause` in [pause()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#pause) is deprecated; replacement event: `pause`.
>
> #### New
>
> - Spectrum Web Components (SWC) gained new components. See [SWC wrapper details](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers)
>   - sp-asset
>   - sp-meter
>   - sp-number-field
>   - sp-overlay
>   - sp-quick-actions
>   - sp-search
>   - sp-swatch
> - New command line templates make SWC setup easier. Details: [section](uxp-api-2.md).
> - [WebView](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md) can now load local HTML files.
> - New CSS capabilities
>   - scaleX() & scaleY()
>   - transform-origin
>   - translate property
>   - `Box-shadow` property now supports `transform rotate`.
> - New feature flag `CSSNextSupport` in the manifest.json to gate the new and future CSS capability.
>
>   | Manifest setting                                                                                | Description                                    |
>   | ----------------------------------------------------------------------------------------------- | ---------------------------------------------- |
>   | `featureFlags: {"CSSNextSupport": true}`                                                        | Enables all the new CSS features.              |
>   | `featureFlags: {"CSSNextSupport": ["boxShadow", "transformFunctions", "transformProperties" ]}` | Enables only the named properties in the list. |
>
>   Note that `"enableSWCSupport": true` enables `CSSNextSupport` by default, even when the plugin manifest does not set it explicitly.
>
> - Video enhancements: [Seek Event](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md) is now supported.
> - Support now includes the [Navigator.language](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) API.
> - HTMLElement gained APIs for [append](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-element.md#appendnodes), [prepend](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-element.md#prependnodes), and [replaceChildren](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-element.md#replacechildrennodes).
> - [Beta] [HTMLFormElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) now supports form reset.
>
> #### Updated
>
> - Spectrum Web Components now use v0.37.0. [Details](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers)
> - Strings are now valid input for [UXP Clipboard.writeText()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/data-transfers/Clipboard.md#writetexttext), matching standards.

## Photoshop API Changelog — Photoshop 25.10 (May 2024)

The `timeOut` option was added to [`executeAsModal`](uxp-executeasmodal.md). The error message returned for a modal request collision now includes the id of the plugin that started the active modal state.

## Photoshop API Changelog — Photoshop 25.5 (February 2024)

### UXP v7.4 Integration

> #### Updated
>
> - Because of remaining inherent instabilities, UXP Alerts ([alert](uxp-html-dom.md), [prompt](uxp-html-dom-2.md), [confirm](uxp-html-dom.md)) moved back to beta. During the fix work, access requires the `enableAlerts` feature flag in the manifest.json file. UXP alerts are also `available only in Plugins` and `not in scripts`.
> - Top-level `domain` names cannot use Wildcards (\*). Check manifest.json `permissions` entries that cover [WebView](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md) plus network calls ([XMLHttp](uxp-data-transfers-2.md), [fetch](uxp-data-transfers.md)).
> - New doc for tracking the [mapping between Spectrum widgets and Spectrum Web Components](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-widgets-to-swc-mapping/index.md) in UXP
>
> #### Fixed
>
> - XMP now works in UXP Scripts.
> - Plugin crashes while using [fit-content](https://forums.creativeclouddeveloper.com/t/ps-2024-crashes-when-opening-my-uxp-plugin/6840/7)
> - WebView support for [file selector](https://forums.creativeclouddeveloper.com/t/macos-uxp-webview-for-photoshop-is-missing-file-selector/6843) in MacOS
> - GUID returning hashed empty string
> - The pseudo-class [defined](uxp-reference-css.md) docs were filled in. (Available since UXP v6.0)

## Photoshop API Changelog — Photoshop 25.2 (October 2023)

### UXP v7.3 Integration

> #### New
>
> - [GUID](uxp.md) is available as a unique identifier for a Creative Cloud User.
> - [fetch](uxp-data-transfers.md) now has multipart `FormData` support through [Request](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/data-transfers/Request.md) and [Response](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/data-transfers/Response.md).
> - [FormData](uxp-data-transfers.md) now supports the following APIs
>   - delete()
>   - get()
>   - getAll()
>   - has()
>   - keys()
>   - set()
>   - values()
>
> #### Updated
>
> - `Blob` is now accepted as an additional parameter by [FormData's append](uxp-data-transfers.md).
> - All 30 components now provide `Spectrum Web Components` support in `React` context.
>   - Reference [UXP-SWC React sample plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-react-starter).
>
> #### Fixed
>
> - Tab Navigation now works for several SWC Components.
> - SWC Button component now responds to Spacebar after focus reaches it through TAB navigation.
>
> ### UDT v2.0
>
> #### New
>
> - UXP Playground is available for experimenting with APIs. Click on the 'Playground' tab next to 'Developer Workspace' to choose an app and begin.
>
> #### Updated
>
> - Plugin actions are shown based on the 'Status' of your plugin in the Developer Workspace.

## Photoshop API Changelog — Photoshop 25.1 (October 2023)

The current [zoom](uxp-document.md) value is now available from Document objects.

### UXP Plugin Action Record Again

Re-recording an Action step now works through the Actions panel flyout menu item, "Record Again", and by double-clicking the step. Supporting notes for that feature are at [Action Recording](uxp-media.md).

## Photoshop API Changelog — Photoshop 25.0 (September 2023)

### Action Recording

UXP plugins can now record and play back Action steps.
Usage details are in Advanced > [Action Recording](uxp-media.md).

### batchPlay option: suppressProgressBar

Use this [value](uxp-media.md) to hide a Photoshop progress bar during command execution.

### Selection

The new [Selection](uxp-classes-5.md) class for pixel selection is available through [Document.selection](uxp-document.md).
Properties: `typename`, `docId`, `parent`, `bounds`, `solid`.

And methods:
`contract`, `deselect`, `expand`, `feather`, `grow`, `inverse`, `load`, `makeWorkPath`, `selectAll`, `selectRectangle`, `selectEllipse`, `selectPolygon`, `selectRow`, `selectColumn`, `save`, `saveTo`, `selectBorder`, `smooth`, `translateBoundary`, `resizeBoundary`, `rotateBoundary`. (All methods here return `Promise<void>`.)

### Bug Fixes

- Fixes error when `Channels.getByName` did not work for inactive document

### Photoshop C++ SDK Access from UXP Hybrid Plugins

UXP hybrid plugins can now use [Photoshop C++ SDK suites](uxp-guides-4.md).

### UXP v7.2 Integration

> #### New
>
> - Adobe [Extensibility Metadata Platform (XMP)](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/getting-started/index.md) support
> - [pointer-events: none](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) `CSS` property
> - Support for `pseudoElement` in [getComputedStyle(element, pseudoElement)](uxp-html-dom-2.md) API

> #### Updated
>
> - [Spectrum Web Component (SWC)](uxp-api-2.md) support in UXP is moving out of Beta.
> - SWC now supports [additional SWC components and variants](uxp-api-2.md)
> - The [SWC starter plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-starter) was updated.

## Photoshop API Changelog — Photoshop 24.6 (June 2023)

### 24.6 Bug Fixes

- Non-English localizations now handle component channels correctly. Affected items:
  - `document.componentChannels`
  - `document.compositeChannels` (deprecated)
  - `document.activeChannels`
  - `channels.getByName()`
  - other methods inherited from an Array in Channels Class
- Channels are now returned correctly in Bitmap and Indexed Color modes.
- If a component channel no longer exists in a document, its name now throws an error.
- Component channel names are no longer converted to lowercase and now match the UI.
- TypeScript: `channels.parent` now has the correct `Document` type.
- Deprecated `document.compositeChannels` because these channels are component rather than composite.
  Use `componentChannels` instead.

## Photoshop API Changelog — Photoshop 24.5 (May 2023)

### Calculations and Apply Image

Blending operations are now available for [Layer](uxp-layer.md) Apply Image and [Document](uxp-document.md) Calculations.

- [`applyImage()`](uxp-layer.md)
- [`calculations()`](uxp-document.md)

Both methods take an options object matching the parameters required by the corresponding UI dialog.

### Other updates

- The Document property `compositeChannels` was replaced by the more accurately named `componentChannels`.
- Returned Channels now use type `ComponentChannel` instead of `CompositeChannel`, with the corresponding `typename`.

### UXP v7.1 Integration

> #### New
>
> Support was added for these HTMLElement members
>
> - [setPointerCapture](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/Element.md#setpointercapturepointerid)
> - [releasePointerCapture](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/Element.md#releasepointercapturepointerid)
> - [hasPointerCapture](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/Element.md#haspointercapturepointerid)
> - [dir](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-html-element.md#dir--string)
>
> #### Updated
>
> - The `shell` module documentation now lives at the [shell module page](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/shell/index.md)
>
> #### Fixed
>
> - `SVGElement`: The `fill` attribute color now resolves from a CSS variable according to that variable's value. For validation right now, set `"featureFlags" : { "enableFillAsCustomAttribute" : true }` in the plugin manifest. The next UXP release enables this flag by default.
>
> ```
> // CSS variable
> html {
>   --iconColor: yellow;
> }
> ```

## See also

- [Known Issues](uxp-known-issues.md)
