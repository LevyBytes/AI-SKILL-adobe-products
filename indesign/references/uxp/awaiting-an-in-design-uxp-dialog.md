# Awaiting an InDesign UXP dialog


In an InDesign UXP script, await the dialog promise. The example image requires access to its external HTTPS host. Listeners are installed before showing the dialog; close resolves, cancellation rejects, and both remove the dialog.

```javascript
function showDialog() {
    return new Promise((resolve, reject) => {
        let dialog;
        let closeButton;
        let settled = false;
        function finish(error) {
            if (settled) return;
            settled = true;
            if (closeButton) closeButton.removeEventListener("click", close);
            if (dialog) {
                dialog.removeEventListener("cancel", cancel);
                dialog.removeEventListener("close", closed);
                if (dialog.parentNode) dialog.parentNode.removeChild(dialog);
            }
            if (error) reject(error);
            else resolve("dialog Close called");
        }
        function close() {
            try { dialog.close(); } catch (error) { finish(error); }
        }
        function cancel(event) {
            event.preventDefault();
            finish(new Error("dialog cancel called"));
        }
        function closed() { finish(); }
        try {
            dialog = createDialog();
            closeButton = dialog.querySelector("#close");
            closeButton.addEventListener("click", close);
            dialog.addEventListener("cancel", cancel);
            dialog.addEventListener("close", closed);
            document.body.appendChild(dialog);
            dialog.showModal();
        } catch (error) { finish(error); }
    });
}

function createDialog() {
    const dialog = document.createElement("dialog");

    dialog.style.color = "white";

    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.height = "300px";
    div.style.width = "400px";
    div.style.alignItems = "center";

    const header = document.createElement("h2");
    header.id = "head";
    header.style.color = "white";
    header.textContent = "Dialog Created by a script.";
    div.appendChild(header);

    const image = document.createElement("img");
    image.src = "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png";
    image.style.marginTop = "30px";
    div.appendChild(image);

    const closeBtn = document.createElement("sp-button");
    closeBtn.id = "close";
    closeBtn.style.height = "30px";
    closeBtn.textContent = "Close";
    closeBtn.style.marginTop = "10px";
    div.appendChild(closeBtn);

    dialog.appendChild(div);
    return dialog;
}

// Keep the UXP script alive until the dialog settles.
await showDialog();
```

[https://javascript.info/promise-basics](https://javascript.info/promise-basics)

## See also

- [Characters](../document-model/characters/reference-index.md)
