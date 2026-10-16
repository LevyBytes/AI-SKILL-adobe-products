# How to write debugging statements

For debugging output, use the console APIs rather than `console.writeln()`:

```js
console.log("foo"); // writes "foo" to the UXP Developer Tool console.

console.error("foo"); // does the same thing, but the text is shown in red so errors are more easily seen.
```
