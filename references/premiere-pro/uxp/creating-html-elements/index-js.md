# index.js

```js
const showDialogBtn = document.getElementById("showDialog");
showDialogBtn.addEventListener("click", () => {
  const dialog = document.getElementById("sampleDialog");
  dialog.show();

  dialog.addEventListener("cancel", () => {
    console.log("Dialog dismissed");
  });
});
```

### index.js

```js
const showDialogBtn = document.getElementById("showDialog");
showDialogBtn.addEventListener("click", () => {
  // Create dialog element
  const dialog = document.createElement("dialog");

  // Create container
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.height = "300px";
  div.style.width = "400px";
  div.style.alignItems = "center";
  div.style.color = "#DDD"; // Apply UXP host text color

  // Create header
  const header = document.createElement("h1");
  header.textContent = "Hello! ðŸ‘‹";
  header.style.color = "#FFF";
  div.appendChild(header);

  // Create paragraph
  const para = document.createElement("p");
  para.textContent = "A dialog built dynamically with JavaScript";
  para.style.marginTop = "30px";
  div.appendChild(para);

  // Assemble and show
  dialog.appendChild(div);
  document.body.appendChild(dialog);
  dialog.showModal();

  dialog.addEventListener("cancel", () => {
    console.log("Dialog dismissed");
  });
});
```

[Figure: Sample dialog created with JavaScript](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/recipes/html-elements/img/html-elements-dialog-js.png)
