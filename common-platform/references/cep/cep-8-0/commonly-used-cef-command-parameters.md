# Commonly used CEF command parameters

| Parameters | Notes |
| --- | --- |
| --enable-media-stream | Turns on media streaming for WebRTC audio/video. |
| --enable-speech-input | Turns on speech input through x-webkit-speech. |
| --persist-session-cookies | Keeps session cookies after they are created. |
| --disable-image-loading | Stops network image loading. Requested images can still render when already cached. |
| --disable-javascript-open-windows | Prevents JavaScript from opening windows. |
| --disable-javascript-close-windows | Prevents JavaScript from closing windows. |
| --disable-javascript-access-clipboard | Blocks JavaScript clipboard access. |
| --enable-caret-browsing | Turns on caret browsing. |
| --proxy-auto-detect | Asks Chrome to detect proxy configuration automatically. See more info at http://www.chromium.org/developers/design-documents/network-settings. |
| --user-agent | Provides a custom string that replaces the default user agent. |
| --disable-application-cache | Turns off the ApplicationCache. |
| --enable-nodejs | Makes Node.js APIs available inside extensions. Supported since CEP 6.1. |
| --disable-pinch | Turns off compositor-accelerated pinch gestures on touch screens. |
| --mixed-conext | Turns on "mixed context" mode. Supported since CEP 7.0. |
