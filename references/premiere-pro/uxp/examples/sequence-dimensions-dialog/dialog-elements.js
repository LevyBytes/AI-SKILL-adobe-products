async function readFragment(path) {
    const response = await fetch(path);
    if (!response.ok) throw new Error("Cannot load dialog fragment: " + path);
    return (await response.text()).trim();
}

async function createDialogElements() {
    if (!document.querySelector("#modal-dialog-styles")) {
        const styleEl = document.createElement("style");
        styleEl.id = "modal-dialog-styles";
        styleEl.textContent = await readFragment("./fragments/styles.css");
        document.head.appendChild(styleEl);
    }
    let dialog = document.querySelector("#modal-dialog");
    if (!dialog) {
        dialog = document.createElement("dialog");
        dialog.id = "modal-dialog";
        dialog.classList.add("modal-dialog");
        dialog.innerHTML = await readFragment("./fragments/dialog.html");
        document.body.appendChild(dialog);
    }
    return dialog;
}
module.exports = { createDialogElements };
