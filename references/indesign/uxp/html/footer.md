# footer

**Since** UXP v3.0

Use `<footer>` in dialogs when buttons need right-side alignment. The element is optional, and any default styling can be overridden.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/footer](https://developer.mozilla.org/en/docs/Web/HTML/Element/footer)

**Example**

```html
<dialog>
  <form method="dialog">
    <sp-heading>A heading</sp-heading>
    <sp-divider size="large"></sp-divider>
    <sp-body>Hello!</sp-body>
    <footer>
      <sp-button>Close</sp-button>
    </footer>
  </form>
</dialog>
```

```js
document.querySelector("dialog").uxpShowModal({ size: { width: 480, height: 360 } });
```
