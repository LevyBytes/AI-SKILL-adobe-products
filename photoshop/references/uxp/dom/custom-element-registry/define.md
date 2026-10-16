# define(name, constructor, options)

Registers a custom element definition.

**See**

- [CustomElementRegistry - define](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define)
- [HTML Spec - Element definition](https://html.spec.whatwg.org/multipage/custom-elements.html#element-definition)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name assigned to the new custom element |
| constructor | `CustomElement` | Constructor used for the new custom element |
| options | `Object` | Object configuring how the element is defined |
| options.extends | `string` | Built-in element name to extend |
