# Example with "Done" button

Run as a Photoshop UXP script. The modal promise settles on closure or cancellation; the Done listener is installed before opening the dialog.

```javascript
async function showDialog() {
  const dialog = createDialog();
  const doneButton = dialog.querySelector("#done");
  const onDone = () => dialog.close("user is done");
  doneButton.addEventListener("click", onDone);
  document.body.appendChild(dialog);
  try {
    return await dialog.showModal();
  } finally {
    doneButton.removeEventListener("click", onDone);
    dialog.remove();
  }
}

function createDialog() {
    const dialog = document.createElement("dialog");
    dialog.style.color = "white";
    const div = document.createElement("div");
    div.style.display = "block";
    div.style.height = "200px";
    div.style.width = "400px";
    const header = document.createElement("h2");
    header.id = "head";
    header.style.color = "white";
    header.textContent = "Sample Dialog";
    div.appendChild(header);
    const doneButton = document.createElement("button");
    doneButton.id = "done";
    doneButton.textContent = "Done";
    div.appendChild(doneButton);
    dialog.appendChild(div);
    return dialog;
}

await showDialog();
```
