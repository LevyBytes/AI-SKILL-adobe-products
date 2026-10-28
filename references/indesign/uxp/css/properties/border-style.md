# border-style

**Since** UXP v2.0

Selects the rendered border type.

| Value | Rendering |
| --- | --- |
| `none` | No border |
| `solid` | A solid border |
| `dashed` | A dashed border |

Any CSS border style not listed here maps to `solid`; that includes `hidden`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-style](https://developer.mozilla.org/en/docs/Web/CSS/border-style)

**Example**

```css
.button {
  border-width: 2px;
  border-style: solid;
  border-color: white;
}
```
