# footer

**Since** UXP v3.0

For dialogs, `<footer>` helps place buttons against the right side. Using it is optional, and its styles remain overrideable.

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
