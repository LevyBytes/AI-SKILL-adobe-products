# JavaScript workarounds

UXP does not support `window.event.cancelBubble = true`; use `event.stopPropagation()` for that propagation control instead.

UXP does not support `getElementsByClassName(something)`; use `document.querySelectorAll("something")` to select those elements instead.
