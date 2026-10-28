# `instanceof`

**Applicable to:** Prior to v18.4

InDesign DOM objects do not work with the `instanceof` keyword. Check the `object.constructorName` property instead.

ExtendScript:

```js
if (app.selection[0].paragraphs[0].appliedParagraphStyle.parent instanceof ParagraphStyleGroup) {
  // ...
}
```

UXP:

```js
if (app.selection[0].paragraphs.item(0).parent.constructorName == "ParagraphStyleGroup") {
  // ...
}
```
