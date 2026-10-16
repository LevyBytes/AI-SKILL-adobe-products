# Standard HTML Elements

Standard HTML elements include familiar tags such as `<div>`, `<button>`, `<input>`, `<img>`, `<dialog>`, and others. They follow web standards, with CSS providing full control over presentation.

```html
<div class="container">
  <button class="primary-button">Click me</button>
  <input type="text" placeholder="Enter text" />
</div>
```

| Best for | Trade-offs |
| --- | --- |
| Building **highly customized interfaces** that need match different design systems | Complex and expensive to implement |

UXP is not a browser

UXP can use modern web technology, but it is not a complete browser runtime. Some browser HTML elements, CSS properties, and JavaScript APIs are unavailable in UXP. Review [HTML element exclusions](../html/html-reference/reference-index.md) and [attribute exclusions](../html/html-reference/reference-index.md) for specifics.
