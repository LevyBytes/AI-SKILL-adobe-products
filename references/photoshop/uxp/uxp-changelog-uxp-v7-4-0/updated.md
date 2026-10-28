# Updated

- UXP Alerts ([alert](../dom/window/alert.md), [prompt](../dom/window/prompt.md), [confirm](../dom/window/confirm.md)) have returned to beta because the feature still has several inherent instabilities. While those issues are addressed, turn it on with the `enableAlerts` feature flag in manifest.json. Scope is limited: UXP alerts are `available only in Plugins` and `not in scripts`.
- Wildcards (\*) are disallowed for top-level `domain` names. Check the manifest.json `permissions` configuration for [WebView](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md) and for network calls [XMLHttp](../network-and-data/xml-http-request/reference-index.md) [fetch](../network-and-data/window/fetch.md).
- New documentation records the UXP [mapping between Spectrum widgets and Spectrum Web Components](../uxp-spectrum-widgets-to-swc-mapping.md).
