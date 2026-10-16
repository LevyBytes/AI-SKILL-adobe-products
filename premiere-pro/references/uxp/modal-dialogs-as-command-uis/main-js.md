# main.js

```javascript
const { entrypoints, host, versions } = require("uxp");
const manifest = require("./manifest.json");
const os = require("os");

entrypoints.setup({
  commands: {
    "about-command": async () => {
      // Create the dialog dynamically (or load from an HTML file)
      const dialog = document.createElement("dialog");
      dialog.innerHTML = `
        <sp-heading>Clip Mixer</sp-heading>
        <sp-divider size="L"></sp-divider>
        <sp-body>🙌 Thanks for using Clip Mixer v${manifest.version}!</sp-body>
        <sp-body><b>Application:</b> ${host.name} v${host.version} (${os.platform()})</sp-body>
        <sp-body><b>UXP Runtime:</b> ${versions.uxp} - <b>Plugin Version:</b> ${
          versions.plugin
        }</sp-body>
      `.trim();
      // ☝ trim is a safety measure to avoid whitespace issues

      document.body.appendChild(dialog);

      // Add styles programmatically using element.style
      dialog.style.color = "white";
      dialog.style.padding = "16px";
      dialog.querySelector("sp-divider").style.margin = "0 0 16px 0";
      dialog.querySelector("sp-heading").style.margin = "0 0 16px 0";

      // Show modal
      await dialog.uxpShowModal({
        title: "Command Modal Dialog",
        resize: "none",
        size: { width: 300, height: 200 },
      });
    },
  },
});
```
