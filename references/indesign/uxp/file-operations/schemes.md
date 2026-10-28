# Schemes

UXP exposes these locations with short scheme prefixes.

For sandbox locations, use `plugin:/`, `plugin-data:/`and `plugin-temp:/`.
Use `file:/` for paths outside the sandbox.

````html
<img src="plugin:/sample.png" /> <img src="file:/Users/user/Downloads/sample.png" /> \ ### HTML
```html
<button id="showDialog">Show Dialog</button>
<dialog id="sampleDialog">
  <div>
    <h1>Well hello!</h1>
    <p>A dialog built using HTML tags</p>
  </div>
</dialog>
````
