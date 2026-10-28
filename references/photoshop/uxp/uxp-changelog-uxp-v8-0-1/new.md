# New

- Spectrum Web Components (SWC) now include additional supported components; details are [here](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers).
  - sp-asset
  - sp-meter
  - sp-number-field
  - sp-overlay
  - sp-quick-actions
  - sp-search
  - sp-swatch
- Command line templates are available for easier SWC startup. Details are in this [section](../spectrum-web-component/command-line-templates.md).
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
