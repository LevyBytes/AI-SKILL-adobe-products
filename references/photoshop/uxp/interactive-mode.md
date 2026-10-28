# Interactive Mode

_Added in Photoshop 23.3_

Some plugins need user input or other interaction while an `executeAsModal` scope is active; those cases may require "Interactive Mode".

In this mode, Photoshop does not show a blocking progress dialog, and fewer restrictions interfere with accepting user input. Interactive mode use cases can include:

- letting users enter data in an opened modal filter dialog
- pausing for input in a Photoshop workspace, including Select and Mask

```javascript
await require("photoshop").core.executeAsModal(targetFunction, {
  commandName: "Apply two filters",
  interactive: true,
});
```

Instead of using the progress bar dialog, users can choose `Cancel Plugin Command` from the Photoshop `Plugins` menu. That action interrupts the plugin's `executeAsModal` scope; see [User Cancellation](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/executeasmodal.md#user-cancellation).

[Figure: cancel via plugin menu](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/assets/eam-pluginmenu-cancel.png)
