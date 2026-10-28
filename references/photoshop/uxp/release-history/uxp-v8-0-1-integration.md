# UXP v8.0.1 Integration

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
> - New command line templates make SWC setup easier. Details: [section](../spectrum-web-component/reference-index.md).
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
