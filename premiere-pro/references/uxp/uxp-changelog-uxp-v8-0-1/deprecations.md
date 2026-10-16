# Deprecations

- Changes to Clipboard
  - [Clipboard.setContent](../network-and-data/clipboard/set-content.md) is deprecated; prefer [Clipboard.write](../network-and-data/clipboard/write.md) as the replacement.
  - Replace deprecated [Clipboard.getContent](../network-and-data/clipboard/get-content.md) calls with [Clipboard.read](../network-and-data/clipboard/read.md).
  - Object input for [Clipboard.writeText(object)](../network-and-data/clipboard/write-text.md) is deprecated; call [Clipboard.write(object)](../network-and-data/clipboard/write.md) instead.
  - As a replacement for deprecated [Clipboard.clearContent](../network-and-data/clipboard/clear-content.md), call [Clipboard.writeText("")](../network-and-data/clipboard/write-text.md).
- Changes to VideoElement
  - Event `uxpvideoload` in [load()](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#load) is deprecated. Use `loadeddata` instead.
  - Event `uxpvideoplay` in [play()](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#play) is deprecated. Use `ended` instead.
  - Event `uxpvideocomplete` in [play()](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#play) is deprecated. Use `ended` instead.
  - Event `uxpvideopause` in [pause()](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#pause) is deprecated. Use `pause` instead.
