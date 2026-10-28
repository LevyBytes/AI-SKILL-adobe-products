# window.getComputedStyle

After active stylesheets are applied and basic computations are resolved, this returns an object with the element's CSS property values.

**Returns**: `CSSStyleDeclaration` - - Live CSSStyleDeclaration object that refreshes automatically after the element's styles change.  
**See**: [window.getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)

| Param | Type | Description |
| --- | --- | --- |
| element | `Element` | Element whose computed style should be read. |
| pseudoState | `string` | String naming the pseudo-element to match; omit it or pass null for real elements. |
