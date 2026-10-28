# JavaScript

```js
async function foo() {
  const clipboard = navigator.clipboard;

  // Setting content for clipboard
  clipboard.setContent({ "text/plain": "Test string to validate clipboard setContent" }).then(
    () => {
      console.log("Data successfully set on clipboard");
    },
    (error) => {
      console.error("Error while setting data on clipboard:", error);
    },
  );

  // Reading from clipboard and printing
  clipboard.getContent().then(
    (result) => {
      console.log(`Data from clipboard: ${result["text/plain"]}`);
    },
    (error) => {
      console.error("Error while reading data from clipboard:", error);
    },
  );
}
```
