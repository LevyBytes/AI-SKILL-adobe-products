# main.js

```javascript
const { entrypoints, host, versions } = require("uxp");
const manifest = require("./manifest.json");
const os = require("os");

entrypoints.setup({
  commands: {
    "about-command": async () => {
      // Load the HTML content from an external file
      // In this case, the _dialog.html file is located in the
      // same directory as the main.js file
      const dialogHtml = await fetch("./_dialog.html") // 👈
        .then((res) => res.text()); // 👈 handle the response as text
      console.log("About command");
      const dialog = document.createElement("dialog");
      dialog.innerHTML = dialogHtml.trim();
      // ...
      // Replace the placeholders with the actual values. It is the
      // equivalent of using Template Literals in the previous example
      dialog.querySelector("#version").textContent = manifest.version;
      dialog.querySelector("#app-name").textContent = host.name;
      dialog.querySelector("#app-version").textContent = host.version;
      dialog.querySelector("#platform").textContent = os.platform();
      dialog.querySelector("#uxp-version").textContent = versions.uxp;
      dialog.querySelector("#plugin-version").textContent = versions.plugin;
      // ...
      document.body.appendChild(dialog);
      // ...
      const result = await dialog.uxpShowModal({
        /* ... */
      });
    },
  },
});
```
