const { ModalDialog } = require("./modal-dialog.js");
const button = document.querySelector("#openDialogBtn");
if (button && !button.dataset.listenerAttached) {
    button.addEventListener("click", async () => {
        button.disabled = true;
        try {
            const dialog = ModalDialog.getInstance();
            await dialog.createDialog();
            dialog.initDialog();
            await dialog.runDialog();
        } catch (error) {
            console.error("Dialog ended:", error);
        } finally {
            button.disabled = false;
        }
    });
    button.dataset.listenerAttached = "true";
}
