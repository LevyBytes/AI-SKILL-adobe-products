# Global Await

An `await` expression pauses execution of an `async` function until its Promise is fulfilled or rejected. After fulfillment, the `async` function continues, and the `await` expression evaluates to the fulfilled Promise value.

Global await refers to waiting for an async function in global scope to complete.

```js
function anyAsyncFunction() {
  return new Promise((resolve, reject) => {
    const val = Math.random();
    if (val > 0.5) {
      console.log("Resolve promise");
      resolve(val);
    } else {
      console.error("Rejecting promise");
      reject(val);
    }
  });
}

// Global await
try {
  const val = await anyAsyncFunction();
  console.log("Value from function", val);
} catch {
  console.log("Rejected promise!;");
}
console.log("Script completed");
```
