# Samples - Access installed fonts

Photoshop assigns the Fonts module permission `ReadInstalled`. If no font is supplied, or the named font is missing, UXP uses `"system-ui"`, the operating system's standard interface font. 

Run as a Photoshop UXP script; UXP dialog showModal supplies the modal lifetime promise.

```javascript
async function createDialog() {
    const dialog = document.createElement("dialog");

    dialog.style.color = "white";

    const div = document.createElement("div");
    div.style.display = "block";
    div.style.height = "200px";
    div.style.width = "450px";

    const p1 = createParagraph("system-ui"); // use default OS font
    const p2 = createParagraph("non-existent-font"); // try using a non existent font. Will resolve to OS default.
    const p3 = createParagraph("Courier New"); // use any installed font
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    dialog.appendChild(div);
    document.body.appendChild(dialog);
    try {
        await dialog.showModal();
    } finally {
        dialog.remove();
    }
}

function createParagraph(fontFamily) {
    const p = document.createElement("p");
    p.style.color = "white";
    p.style.fontFamily = fontFamily;
    p.textContent = `font-family:${fontFamily}: A fox jumps over the lazy dog`;
    return p;
}

// Wait for the dialog to render
await createDialog();
```

 [Figure: Fonts example](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/scripting/samples/fonts.png)

## See also

- [Getting Started](../quickstart-guide-creating-your-first-script/reference-index.md)
