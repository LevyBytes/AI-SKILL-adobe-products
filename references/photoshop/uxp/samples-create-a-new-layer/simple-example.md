# Simple example

Run as a Photoshop UXP script; UXP dialog showModal supplies the modal lifetime promise.

```javascript
async function createDialog() {
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
    dialog.appendChild(div);
    document.body.appendChild(dialog);
    try {
        await dialog.showModal();
    } finally {
        dialog.remove();
    }
}
// Wait for the dialog to render
await createDialog();
```
