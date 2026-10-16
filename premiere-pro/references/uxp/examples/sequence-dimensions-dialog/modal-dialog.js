const { G } = require("./settings.js");
const { createDialogElements } = require("./dialog-elements.js");
const { initializeDialog } = require("./dialog-input.js");

class ModalDialog {
    static #instance;
    #dialog;
    #creating;
    #params = { width: 0, height: 0 };

    constructor() {
        if (ModalDialog.#instance) return ModalDialog.#instance;
        ModalDialog.#instance = this;
    }
    static getInstance() {
        if (!ModalDialog.#instance) ModalDialog.#instance = new ModalDialog();
        return ModalDialog.#instance;
    }
    async createDialog() {
        if (!this.#creating) this.#creating = createDialogElements();
        try {
            this.#dialog = await this.#creating;
        } finally {
            this.#creating = null;
        }
    }
    initDialog() {
        initializeDialog(this.#dialog, params => { this.#params = params; });
    }
    async runDialog() {
        const result = await this.#dialog.uxpShowModal({
            title: G.title, resize: "none", size: G.dialogSize
        });
        if (result === "ok") {
            const value = await this.#runRoutine();
            if (value === true) return true;
            throw value;
        }
        if (result === "cancel" || result === "reasonCanceled") throw "cancel";
        throw "Dialog closed unexpectedly";
    }
    async #runRoutine() {
        console.log("Running PPro routine with params:", this.#params);
        // This tutorial logs dimensions; insert actual host operations here.
        return true;
    }
    getParams() {
        return { ...this.#params };
    }
}
module.exports = { ModalDialog };
