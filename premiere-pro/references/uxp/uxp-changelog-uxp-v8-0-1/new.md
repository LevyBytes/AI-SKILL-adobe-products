# New

- Spectrum Web Components (SWC) adds support for more components. Details are available [here](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers).
  - sp-asset
  - sp-meter
  - sp-number-field
  - sp-overlay
  - sp-quick-actions
  - sp-search
  - sp-swatch
- SWC setup now has new command line templates; see this [section](../spectrum-web-component/command-line-templates.md) for details.
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
