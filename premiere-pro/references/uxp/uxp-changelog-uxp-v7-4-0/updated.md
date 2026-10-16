# Updated

- UXP Alerts ([alert](../dom/window/alert.md), [prompt](../dom/window/prompt.md), [confirm](../dom/window/confirm.md)) are beta again while stability problems are addressed. Access is controlled by the `enableAlerts` feature flag in manifest.json. UXP alerts are also `available only in Plugins` and `not in scripts`.
- Wildcards (\*) are not valid as top-level `domain` names. Review manifest.json `permissions` for [WebView](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md), along with network calls made through [XMLHttp](../xml-http-request.md) and [fetch](../network-and-data/window/fetch.md).
- New UXP documentation maps [Spectrum widgets to Spectrum Web Components](../uxp-spectrum-widgets-to-swc-mapping.md).
