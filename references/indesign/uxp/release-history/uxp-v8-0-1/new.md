# New

- Spectrum Web Components (SWC) now supports new components. Details are available [here](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers).
  - sp-asset
  - sp-meter
  - sp-number-field
  - sp-overlay
  - sp-quick-actions
  - sp-search
  - sp-swatch
- Command-line templates for starting with SWC are now available. This [section](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/cba672dce97bcb5805baaa7558d83abbabd825f6/src/pages/reference/uxp-api/reference-spectrum/swc/index.md) has details.
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

### New

- Spectrum Web Components (SWC) adds these components. Details: [here](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers)
  - sp-asset
  - sp-meter
  - sp-number-field
  - sp-overlay
  - sp-quick-actions
  - sp-search
  - sp-swatch
- Command line templates are available for starting with SWC. Details are in this [section](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/cba672dce97bcb5805baaa7558d83abbabd825f6/src/pages/reference/uxp-api/reference-spectrum/swc/index.md#command-line-templates).
- [WebView](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/cba672dce97bcb5805baaa7558d83abbabd825f6/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md#load-local-content-onto-webview) supports local HTML files.
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

- Video enhancements: [Seek Event](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/cba672dce97bcb5805baaa7558d83abbabd825f6/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-video-element.md) support is available.
- [Navigator.language](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) API is supported.
- New HTMLElement APIs include: [append](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/cba672dce97bcb5805baaa7558d83abbabd825f6/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-element.md#appendnodes), [prepend](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/cba672dce97bcb5805baaa7558d83abbabd825f6/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-element.md#prependnodes) and [replaceChildren](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/cba672dce97bcb5805baaa7558d83abbabd825f6/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-element.md#replacechildrennodes)
- [Beta] [HTMLFormElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) now supports form reset.
