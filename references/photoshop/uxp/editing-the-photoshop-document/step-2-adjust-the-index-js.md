# Step 2: Adjust the `index.js`

Now update `index.js` so it matches the new behavior. During experimentation, a direct assignment like this may have seemed plausible:

```js
layer.name = `${layer.name} (${layer.opacity} %)`;
```

That approach is close, but Photoshop raises the error "Such events are only allowed from inside the modal scope":

[Figure: Chrome Developer Tools showing an error: "Uncaught Error: Event: select may modify the state of Photoshop. Such events are only allowed from inside a modal scope"](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/editing-the-document/modal-execution-error.png)

To open Chrome Developer Tools for the plugin, choose _"Debug"_ from the plugin actions menu in the UXP Developer Tool.

For the rename to work, wrap the code in `window.require('photoshop').core.executeAsModal(targetFunction, options)`. That call creates a context where the plugin has exclusive access for document manipulation, preventing other document changes while the handler runs and avoiding inconsistent errors. Use `executeAsModal` whenever an operation may alter the document. [Learn more about modal execution](../executeasmodal.md).

Change `index.js` to this version:

```js
function renameLayerNames() {
  return window.require("photoshop").core.executeAsModal(
    () => {
      // now, we have write-access

      const app = window.require("photoshop").app;

      app.activeDocument.layers.forEach((layer) => {
        layer.name = `${layer.name} (${layer.opacity} %)`;
      });
    },
    {
      commandName: "Rename layers",
    },
  );
}

document.getElementById("btnRename").addEventListener("click", renameLayerNames);
```

Reload the plugin with UDT and press the new button; the layer names are updated as shown:

[Figure: Photoshop Layers panel with layer names "Layer 1 (60 %)" and "Background (100 %)"](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/editing-the-document/layer-names.png)
