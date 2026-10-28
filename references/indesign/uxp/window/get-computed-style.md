# window.getComputedStyle

After active stylesheets and basic value computations are applied, this returns an object with every CSS property value for the element.

**Returns**: `CSSStyleDeclaration` - - live CSSStyleDeclaration data that refreshes as the element's style changes.  
**See**: [window.getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)

| Param | Type | Description |
| --- | --- | --- |
| element | `Element` | Element whose computed style is requested. |
| pseudoState | `string` | String that selects the pseudo-element to evaluate; omit it, or pass null, for actual elements. |
