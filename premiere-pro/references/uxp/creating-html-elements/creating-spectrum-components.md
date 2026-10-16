# Creating Spectrum Components

`document.createElement()` can also create Spectrum UI elements dynamically:

```js
// Create a Spectrum button
const button = document.createElement("sp-button");
button.textContent = "Click me";
button.setAttribute("variant", "cta");
document.body.appendChild(button);
```

This works for **Spectrum Widgets** (`sp-*` elements). **Spectrum Web Components** must instead be declared in HTML markup.
