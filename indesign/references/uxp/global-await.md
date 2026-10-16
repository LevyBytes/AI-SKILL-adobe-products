# Global await

Inside a UXP Script, Global await is the mechanism used for asynchronous operations.

Start with the behavior of asynchronous code. Async work is non-blocking, so execution continues while one or more operations are still running.

Texting or emailing a friend is a simple analogy. After sending the message, you can keep doing other work; waiting for the response is optional, but you will be informed or notified when the reply arrives.

Now review a short asynchronous example. Here, `foo` produces a value after a 2s delay. The delay shown here is simulated with `settimeout`; in a real script, the delay could come from many causes, such as a network call that fetches data.

```javascript
console.log("Start of execution.");

function delayedFoo(text) {
    setTimeout(() => {
      console.log("Greetings: Hello", text);
    }, 2000);
}
delayedFoo("InDesign");

console.log("End of execution.");
```

The output might seem as if it should be:

```text
Start of execution
Greetings: Hello
End of execution
```

In practice, output like this is what you would see:

```text
Start of execution
End of execution
```

Why is the console.log inside `settimeout` missing? The script had already stopped running. UXP scripts expect synchronous code.

To make the example succeed, force the thread to _wait_ until the async task finishes before the following statement runs. Use `Promise` together with `await` for that pattern. Review [promise](https://javascript.info/promise-basics) first if the concept is unfamiliar.

```js
console.log("Start of execution.");

async function delayedFoo() {
  let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Greetings: Hello");
      resolve();
    }, 2000);
  });
  return prom;
}
await delayedFoo();

console.log("End of execution.");
```

```text
Start of execution
Greetings: Hello // after a delay of 2s
End of execution
```

The changes are:

- Placing await before `delayedFoo()` is global await. It keeps the UXP Script paused at global scope until an async task finishes.
- Any number of global awaits can be used, but each `await` stops execution until the awaited async task completes.
- When an async function returns a promise, the value can be resolved later.
- Calling `resolve` on the promise matters after the asynchronous task is complete; that lets the script move on to the next line.
