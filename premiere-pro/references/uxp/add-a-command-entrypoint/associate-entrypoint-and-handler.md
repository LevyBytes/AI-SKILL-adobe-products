# 2. Associate Entrypoint and Handler

Define the command handler in `index.js`; it runs when the user selects that command in Premiere.

```js
// index.js
function myCommandHandler() {
  // The function name is not important.
  console.log("Command invoked!");
}
```

An Entrypoint can be connected to its Handler in either of these ways.
