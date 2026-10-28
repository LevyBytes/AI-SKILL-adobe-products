# Boolean attributes

With a standard checkbox in React, code like this is common:

```js
<input type="checkbox" checked={checked} />
```

That pattern fails for `sp-checkbox`, for example, because `checked` is not interpreted as a boolean attribute. React then follows the web attribute rule: if any value is emitted, even a string-coerced "false", the attribute counts as `true`. For an unchecked checkbox, the web platform expects `checked` to be absent entirely.

Write the React expression this way so React knows when to omit the attribute:

```js
<sp-checkbox checked={checked ? true : undefined}></sp-checkbox>
```
