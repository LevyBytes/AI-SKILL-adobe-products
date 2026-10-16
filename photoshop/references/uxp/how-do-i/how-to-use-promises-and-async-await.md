# How to Use Promises and async/await

Modern JavaScript's promise model can surprise developers who are new to current language versions. In practice, `await` lets code pause for an operation to finish without freezing the host app, such as Photoshop. The constraint is that `await` cannot appear inside an ordinary function; any function that uses it must be declared this way:

Declare an asynchronous function with `async function foo(argument1, ...otherArguments) { }`. Its body may use `await`, and calling it returns a Promise. `...otherArguments` is a rest parameter when an arbitrary number of additional arguments is intended.

That example only sketches `async` and `await`; both belong to JavaScript's larger `promises` model. For a fuller treatment, use your preferred search engine; a useful starting point is MDN's await reference: [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await).
