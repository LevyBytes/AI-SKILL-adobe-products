# Write Your JavaScript Code

Create a `CSInterface` instance. That `CSInterface` instance provides methods and properties used while building the extension.

One useful method is `evalScript()`, which passes communication between client-side JavaScript and ExtendScript code, covered in the next section. Comments **#1-3** identify each part:

```javascript
/* 1) Create an instance of CSInterface. */
var csInterface = new CSInterface();

/* 2) Make a reference to your HTML button and add a click handler. */
var openButton = document.querySelector("#open-button");
openButton.addEventListener("click", openDoc);

/* 3) Write a helper function to pass instructions to the ExtendScript side. */
function openDoc() {
  csInterface.evalScript("openDocument()");
}
```

For more `CSInterface` capabilities, consult [the CEP Github repo](https://github.com/Adobe-CEP/CEP-Resources).
