# How to `#include` An External JavaScript File

Unlike C-family languages, JavaScript does not use `#include`, and it does not use Python-style `import` in this context. Modern JavaScript, including UXP's runtime, instead offers modules and `require`. Use them like this:

In the JavaScript file that will be included, arrange the code in this form:

```js
// file "includeMe.js"
// this file will be included by some other file
function foo(someNumber) {
  return someNumber * 2;
}

function bar() {
  return 42;
}
module.exports = {
  foo,
  bar,
};
```

Then put this line near the top of the file that includes it:

```javascript
const { foo, bar } = require("./includeMe.js");
const result = foo(3); // 6
```

Use the includeMe.js module shown in the preceding example; it exports foo and bar.

UXP's `require` is more limited than some include mechanisms; for example, it will not search global paths. With deliberate relative paths, though, you can organize the plugin directory however you prefer. For instance, load a file from a `lib` subfolder like this:

`const {foo, bar} = require("./lib/includeMe.js");`
