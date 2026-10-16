# UXP v7.4 Integration

> #### Updated
>
> - Because of remaining inherent instabilities, UXP Alerts ([alert](../dom/window/alert.md), [prompt](../dom/window/prompt.md), [confirm](../dom/window/confirm.md)) moved back to beta. During the fix work, access requires the `enableAlerts` feature flag in the manifest.json file. UXP alerts are also `available only in Plugins` and `not in scripts`.
> - Top-level `domain` names cannot use Wildcards (\*). Check manifest.json `permissions` entries that cover [WebView](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md) plus network calls ([XMLHttp](../network-and-data/xml-http-request/reference-index.md), [fetch](../network-and-data/window/fetch.md)).
> - New doc for tracking the [mapping between Spectrum widgets and Spectrum Web Components](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-spectrum/spectrum-widgets-to-swc-mapping/index.md) in UXP
>
> #### Fixed
>
> - XMP now works in UXP Scripts.
> - Plugin crashes while using [fit-content](https://forums.creativeclouddeveloper.com/t/ps-2024-crashes-when-opening-my-uxp-plugin/6840/7)
> - WebView support for [file selector](https://forums.creativeclouddeveloper.com/t/macos-uxp-webview-for-photoshop-is-missing-file-selector/6843) in MacOS
> - GUID returning hashed empty string
> - The pseudo-class [defined](../css/defined/reference-index.md) docs were filled in. (Available since UXP v6.0)
