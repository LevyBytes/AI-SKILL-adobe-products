# Comparison operators (`==` and `===`)

**Applicable to:** All Versions

For InDesign DOM objects, `==` and `===` only evaluate as true when both operands point to the identical object reference. Use `equals()` when comparing DOM values.

ExtendScript:

```js
if (myPath.pathType == PathType.closedPath) {
  // ...
}
```

UXP:

```js
if (myPath.pathType.equals(PathType.closedPath)) {
  // ...
}
```
