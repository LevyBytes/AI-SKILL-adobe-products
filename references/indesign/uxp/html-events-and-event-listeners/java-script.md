# JavaScript

```js
const firstButton = document.getElementById("firstButton");
firstButton.addEventListener("click", foo);

const secondButton = document.getElementById("secondButton");
secondButton.onclick = foo;

function foo(event) {
  console.log(`Button clicked ${event.target.id}`);
}
```

**Declaring inline event handlers**

### JavaScript

```js
function foo(event) {
  console.log(`Button clicked ${event.target.id}`);
}
```
