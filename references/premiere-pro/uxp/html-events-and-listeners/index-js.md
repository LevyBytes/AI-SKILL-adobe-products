# index.js

```js
// Method 1: addEventListener (recommended)
const firstButton = document.getElementById("firstButton");
firstButton.addEventListener("click", handleClick);

// Method 2: Event handler property
const secondButton = document.getElementById("secondButton");
secondButton.onclick = handleClick;

function handleClick(event) {
  console.log(`Button clicked: ${event.target.id}`);
}
```

Choose `addEventListener()` when you want more control over handling, including support for more than one listener on the same element.

### index.js

```js
function handleClick(event) {
  console.log(`Button clicked: ${event.target.id}`);
}
```
