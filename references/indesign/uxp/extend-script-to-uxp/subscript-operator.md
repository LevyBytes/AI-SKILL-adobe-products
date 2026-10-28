# subscript operator `[ ]`

**Applicable to:** All Versions

Collection objects returned by InDesign, such as documents and paragraphs, do not support the subscript operator `[ ]` for accessing an element at a particular index. Use the named method `item()` instead. Objects of type Array, such as `app.selection`, do support the subscript operator.

ExtendScript:

```js
for (j = 0; j < app.selection[0].paragraphs.length; j++) {
  var item = app.selection[0].paragraphs[j];
}
```

UXP:

```js
for (j = 0; j < app.selection[0].paragraphs.length; j++) {
  var item = app.selection[0].paragraphs.item(j);
}
```
