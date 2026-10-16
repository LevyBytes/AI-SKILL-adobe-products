# Deprecations

- Clipboard updates
  - Deprecated: [Clipboard.setContent](../network-and-data/clipboard/set-content.md). Replace it with [Clipboard.write](../network-and-data/clipboard/write.md).
  - Deprecated: [Clipboard.getContent](../network-and-data/clipboard/get-content.md). Switch to [Clipboard.read](../network-and-data/clipboard/read.md).
  - Deprecated: using an `object` with [Clipboard.writeText(object)](../network-and-data/clipboard/write-text.md). Send that value through [Clipboard.write(object)](../network-and-data/clipboard/write.md).
  - Deprecated: [Clipboard.clearContent](../network-and-data/clipboard/clear-content.md). One replacement is [Clipboard.writeText("")](../network-and-data/clipboard/write-text.md).
- VideoElement updates
  - For [load()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#load), `uxpvideoload` is deprecated; use `loadeddata`.
  - For [play()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#play), `uxpvideoplay` is deprecated; use `ended`.
  - For [play()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#play), `uxpvideocomplete` is deprecated; use `ended`.
  - For [pause()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md#pause), `uxpvideopause` is deprecated; use `pause`.
