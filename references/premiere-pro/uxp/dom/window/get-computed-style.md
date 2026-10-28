# window.getComputedStyle

Provides an object with every CSS property value for an element after active stylesheets have been applied and basic computations in those values have been resolved.

**Returns**: `CSSStyleDeclaration` - - A live CSSStyleDeclaration object that refreshes automatically when the element's styles change.  
**See**: [window.getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)

| Param | Type | Description |
| --- | --- | --- |
| element | `Element` | The Element whose computed style should be retrieved. |
| pseudoState | `string` | String naming the pseudo-element to match; omit it, or pass null, for real elements. |
