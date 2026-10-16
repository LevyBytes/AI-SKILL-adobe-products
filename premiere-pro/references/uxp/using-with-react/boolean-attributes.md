# Boolean attributes

A normal React checkbox might be written this way:

```js
<input type="checkbox" checked={checked} />
```

That pattern fails for components such as `sp-checkbox`, because `checked` is not interpreted as a boolean attribute. React then follows the platform attribute rule: any emitted value, including a string-coerced "false", makes the attribute count as `true`. For an unchecked box, the web platform expects `checked` to be omitted entirely.

In React, write the component like this so React understands that it should skip outputting the attribute:

```js
<sp-checkbox checked={checked ? true : undefined}></sp-checkbox>
```
