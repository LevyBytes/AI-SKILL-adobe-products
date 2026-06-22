# Unsupported

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Because UXP is not a complete web browser with every feature, several HTML and CSS capabilities are not implemented yet. Some are being developed; others, such as iFrames, may never arrive.

Bookmark this page and revisit it after each Photoshop release to see whether the list below has changed.

## Web features

- Drag and drop (coming soon)
- iFrames
- HTML5 Canvas
- `window.location` (to load a webpage from inside a plugin)
- data attributes and `font-face`
- CSS `float` (use `flexbox`)

## JavaScript Frameworks and Libraries

- jQuery
- Vue.js (some users have still reported success)

## JavaScript workarounds

UXP does not support `window.event.cancelBubble = true`; use `event.stopPropagation()` for that propagation control instead.

UXP does not support `getElementsByClassName(something)`; use `document.querySelectorAll("something")` to select those elements instead.
