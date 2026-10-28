# Common migration issues

These V1/V2 differences are common sources of migration bugs:

- **Character and paragraph style range (`from`/`to`):** V1 mistakenly interpreted `to` as a **length**. V2 treats both `apply.from` and `apply.to` as **inclusive** 0-based character indices. During migration, make `apply.to` the **last character index** that should receive the style, not the number of characters. Paragraph style ranges follow the same rule.
- **Layer type:** `"textLayer"` in V1 becomes `"text_layer"` in V2.
- **Font name:** Move V1's top-level `fontName` to V2 `characterStyle.font.postScriptName`.
- **Bounds:** V1 stores `left`, `top`, `width`, `height` in layer-level `bounds`. V2 stores an area frame in `text.frame` with `bounds: { top, left, right, bottom }`, where `right = left + width` and `bottom = top + height`.
- **Default when no frame/bounds given:** V1 defaulted to an area frame at (0, 0, 4, 4). V2 defaults to a **point** frame at the **center of the canvas**. Provide `text.frame` to make placement predictable.
- **Font options:** Replace V1 `options.fonts` (href, storage), `options.globalFont`, and `options.manageMissingFonts` with V2 `fontOptions.additionalFonts` (source.url), `fontOptions.defaultFontPostScriptName`, and `fontOptions.missingFontStrategy` (e.g. `"use_default"`).
