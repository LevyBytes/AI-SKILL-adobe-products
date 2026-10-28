# UXP v9.1.0 Integration

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
