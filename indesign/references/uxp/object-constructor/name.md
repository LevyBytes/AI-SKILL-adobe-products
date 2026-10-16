# `Object.constructor.name`

**Applicable to:** Prior to v18.4

For DOM objects, the standard JS property `Object.constructor.name` returns an empty string (`""`). Use `object.constructorName` instead.

ExtendScript:

```js
switch (myPageItem.constructor.name) {
  case "Rectangle":
  case "Oval":
    // ...
    break;
}
```

UXP:

```js
switch (myPageItem.constructorName) {
  case "Rectangle":
  case "Oval":
    // ...
    break;
}
```
