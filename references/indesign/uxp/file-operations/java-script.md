# JavaScript

```js
const showDialogBtn = document.getElementById("showDialog");
showDialogBtn.addEventListener("click", showDialog);
function showDialog() {
  const dialog = document.getElementById("sampleDialog");
  dialog.show();
  dialog.addEventListener("cancel", () => {
    console.log("Dialog dismissed");
  });
}
```

### JavaScript

```js
const showDialogBtn = document.getElementById("showDialog");
showDialogBtn.addEventListener("click", showDialog);
function showDialog() {
  // create dialog
  const dialog = document.createElement("dialog");

  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.height = "300px";
  div.style.width = "400px";
  div.style.alignItems = "center";

  const header = document.createElement("h1");
  header.textContent = "Well hello!!";
  div.appendChild(header);

  const para = document.createElement("p");
  para.textContent = "A dialog built using HTML tags";
  div.appendChild(para);

  dialog.appendChild(div);

  // show dialog
  document.body.appendChild(dialog).showModal();

  dialog.addEventListener("cancel", () => {
    console.log("Dialog dismissed");
  });
}
```

[Figure: Sample dialog](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/resources/recipes/html-elements/sample-dialog.png)
