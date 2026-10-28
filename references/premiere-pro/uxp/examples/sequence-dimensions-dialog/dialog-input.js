const { G } = require("./settings.js");

function readDimensions(widthText, heightText) {
    if (!/^\d+$/.test(widthText.trim()) || !/^\d+$/.test(heightText.trim())) return null;
    const width = Number(widthText);
    const height = Number(heightText);
    if (![width, height].every(value => Number.isInteger(value) &&
        value >= G.valueRange.min && value <= G.valueRange.max)) return null;
    return { width, height };
}

function initializeDialog(dialog, saveParams) {
    const width = dialog.querySelector("#width");
    const height = dialog.querySelector("#height");
    width.value = G.defaultValues.width.toString();
    height.value = G.defaultValues.height.toString();
    if (dialog.dataset.listenersAttached) return;
    const accept = (reportInvalid) => {
        const params = readDimensions(width.value, height.value);
        if (params) {
            saveParams(params);
            dialog.close("ok");
        } else if (reportInvalid) {
            alert("Invalid parameters");
        }
    };
    dialog.querySelector("#okDialogBtn").addEventListener("click", () => accept(true));
    dialog.querySelector("#cancelDialogBtn").addEventListener("click", () => dialog.close("cancel"));
    dialog.addEventListener("keydown", event => {
        if (event.key === "Enter") accept(false);
    });
    dialog.dataset.listenersAttached = "true";
}
module.exports = { initializeDialog, readDimensions };
