# main.js

```javascript
// Modal Dialog reference
const mDialog = document.querySelector("dialog");

// Modal dialog buttons event handlers -----------------------
mDialog?.querySelector("#closeDialogBtn")?.addEventListener("click", (evt) => {
  mDialog.close("ok");
});
// Cancel button event handler on the modal dialog
mDialog?.querySelector("#cancelDialogBtn")?.addEventListener("click", (evt) => {
  mDialog.close("cancel");
});

// Open dialog button event handler -------------------------
document.querySelector("#openDialogBtn")?.addEventListener("click", async () => {
  console.log("Opening dialog");
  const res = await mDialog?.uxpShowModal({
    title: "Demo Modal Dialog",
    resize: "none",
    size: { width: 300, height: 300 },
  });
  console.log("Dialog closed with:", res); // 👈 "ok", "cancel", or
  // 👈 "reasonCanceled"!
});
```

Dialog dismissal

If the user closes the dialog with the **red dot** on Mac, the **X** button on Windows, or the **Esc** key, the `close()` method receives **`"reasonCanceled"`**. Handle that value so the plugin responds consistently.
