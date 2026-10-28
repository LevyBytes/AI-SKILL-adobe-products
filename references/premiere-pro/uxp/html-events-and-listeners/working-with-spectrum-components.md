# Working with Spectrum Components

Spectrum Web Components use the same listener pattern:

```js
// Spectrum button
const button = document.querySelector("sp-button");
button.addEventListener("click", () => {
  console.log("Spectrum button clicked");
});

// Spectrum slider
const slider = document.querySelector("sp-slider");
slider.addEventListener("input", (event) => {
  console.log(`Slider value: ${event.target.value}`);
});
```
