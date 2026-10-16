# main.js

```javascript
const openDialogBtn = document.getElementById("openDialogBtn");
openDialogBtn.addEventListener("click", () => {
  const dialog = document.querySelector("dialog");
  dialog.uxpShowModal({
    // 👈
    title: "Demo Modal Dialog", // 👈
    resize: "none", // 👈
    size: { width: 300, height: 300 }, // 👈
  }); // 👈
});
```

### main.js

```javascript
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");

documwent.querySelector("#openFirstDialogBtn").addEventListener("click", () => {
  modal1.uxpShowModal({
    /* ... options ... */
  });
});

document.querySelector("#openSecondDialogBtn").addEventListener("click", () => {
  modal2.uxpShowModal({
    /* ... options ... */
  });
});
```

You can also **chain modal dialogs** by opening one modal dialog from another. Add the needed UI controls and handlers to the dialog that starts the next one. In a chained flow, both dialogs are open together, but the first remains blocked until the second closes.

[Figure: add modal dialogs chained modals](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/add-modal-dialogs/img/add-modal-dialogs-chained-modals.png)
