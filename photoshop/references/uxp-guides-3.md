# Getting Started, How To

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Creating your first UXP-based Photoshop plugin; Editing the Photoshop document; Writing a file with UXP; How Do I....

## Creating your first UXP-based Photoshop plugin

This tutorial walks through building your first Photoshop plugin with UXP.

### Prerequisites

For this tutorial, you need **Photoshop v23 or above** plus the **UXP Developer Tool (UDT)**. Install both through the Creative Cloud Desktop app. You should also be comfortable with **basic knowledge of HTML and JavaScript**.

### Step 1: Create the plugin

Start in the UXP Developer Tool and press the _"Create plugin..."_ button. When the dialog appears, supply these values:

| Field | Value |
| --- | --- |
| Plugin Name | My first plugin |
| Plugin Id | my.first.plugin |
| Plugin Version | 1.0.0 |
| Host Application | Adobe Photoshop |
| Host Application Version | 23.0.0 |
| Template | quick-layers-starter |

Press _"Select Folder"_ and choose a new empty folder for plugin development. The Developer Tool writes the required files into that folder and adds the plugin to its plugin list.

The chosen folder should now include these files:

- `icons`: a folder with the plugin icon set
- `index.html`: the plugin entrypoint, loaded when the plugin starts
- `manifest.json`: metadata from the UDT dialog, plus a pointer to `index.html` as an
  entrypoint.

Additional "meta" files such as `LICENSE`, `README.md`, etc. are created as well.

### Step 2: Run the plugin

Open Adobe Photoshop and create a sample document that the plugin can use.

To launch the plugin inside Photoshop, use the _"•••"_ button at the right side of the plugin row in the UDT and choose _"Load"_. Photoshop loads the plugin and opens its panel automatically.

The _quick-layers-starter_ template starts with a panel containing a _"Populate Layers"_ button. Pressing it fills a panel area with layer names:

[Figure: A Photoshop panel with a list of layer names and a button called "Populate Layers"](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/creating-your-first-plugin/panel-base.png)

Now look at the pieces that run behind that plugin.

In `manifest.json`, the `"main"` field points at `index.html`:

```json
{
  "id": "my.first.plugin",
  "name": "My first plugin",
  "version": "1.0.0",
  "main": "index.html",
  "host": [
    /* ... */
  ],
  "manifestVersion": 4,
  "entrypoints": [
    {
      "type": "panel",
      "id": "vanilla",
      // [...]
      "icons": [
        // [...]
      ],
      "label": {
        "default": "Starter Panel"
      }
    }
  ],
  "icons": [
    // [...]
  ]
}
```

Photoshop reads that setting and loads the referenced `index.html` file. That file defines the panel UI:

```html
<!doctype html>
<html>
  <head>
    <script src="index.js"></script>
  </head>
  <style>
    /* [...] */
  </style>
  <body>
    <sp-heading>Layers</sp-heading>
    <sp-body id="layers"> No layers </sp-body>
    <footer>
      <sp-button id="btnPopulate">Populate Layers</sp-button>
    </footer>
  </body>
</html>
```

The same `index.html` file then loads `index.js`.

Although the markup resembles ordinary HTML, UXP is not a browser; it supports only a [subset of HTML/CSS/JS features](https://raw.githubusercontent.com/src/pages/uxp-api/reference-html/General/Unsupported%20Elements.md). The custom tags `<sp-heading>`, `<sp-body>`, and `<sp-button>` are also visible in the sample. These [Spectrum UXP components](uxp-api-2.md) implement the Spectrum Design system so plugin panels fit naturally into the Photoshop UI.

In `index.js`, a `click` listener is attached to the _"Populate
Layers"_ button. The listener calls APIs documented under [Photoshop API](https://developer.adobe.com/photoshop/uxp/2022/ps_reference/) and writes the layer names into `<sp-body id="layers" />`:

```js
function showLayerNames() {
  const app = window.require("photoshop").app;
  const allLayers = app.activeDocument.layers;
  const allLayerNames = allLayers.map((layer) => layer.name);
  const sortedNames = allLayerNames.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  document.getElementById("layers").innerHTML = `
      <ul>${sortedNames.map((name) => `<li>${name}</li>`).join("")}</ul>`;
}

document.getElementById("btnPopulate").addEventListener("click", showLayerNames);
```

Use `window.require()` to import API modules; in this example, the imported module is `require('photoshop')`.

### Step 3: Adjust the plugin

_This starter plugin technically works, but it still feels generic. Add a small customization so the output includes more information from each layer._

Open the [`Layer` class API Reference](uxp-layer.md). That reference documents the properties and functions exposed on a layer object. Any property could be selected, but this tutorial uses the [`opacity: number` property](uxp-layer.md).

Update `main.js` so the output includes that property:

```js
function showLayerNames() {
  // [...]
  const allLayerNames = allLayers.map((layer) => `${layer.name} (${layer.opacity} %)`);
  // [...]
}

// [...]
```

After saving `main.js`, reload the plugin so Photoshop runs the changed code. In the UXP Developer Tool, use _"••• > Reload"_.

Changes in `manifest.json` require a full plugin reload before they appear. For that full reload, use the UXP Developer Tool: choose _"Unload"_, then choose _"Load"_.

Another option is automatic reloading whenever files change. In UDT, run _"Watch"_ from the plugin actions menu to watch the plugin folder.

Return to Photoshop and click _"Populate Layers"_ again; the output now includes the selected property:

[Figure: A Photoshop panel showing a list of layers including their opacity and a button called "Populate Layers"](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/creating-your-first-plugin/panel-with-opacity.png)

When the plugin panel is docked in a toolbar, the icon may also be missing. Fix that by updating the `"path"` field in `manifest.json` to the new icon filename. For example, `"path": "icons/dark.png",` points at this icon-file set:

[Figure: screenshot of a file structure. The folder icons contains two files: "dark@1x.png" and "dark@2x.png"](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/creating-your-first-plugin/icon-file.png)

### Next steps

You have now built a first plugin of your own. It is still simple, but the [API Reference](uxp-ps-reference.md) shows how far you can go with the concepts from this tutorial alone.

[In the next tutorial](uxp-guides-3.md), the plugin moves beyond reading document information and starts changing the document itself.

## Editing the Photoshop document

This tutorial shows how to edit a Photoshop document, specifically by changing layer names in that document.

### Prerequisites

Before starting, have a plugin development project ready. If you do not already have one, complete the [Creating your first plugin tutorial](uxp-guides-3.md) first.

### Step 1: Adjust the panel UI

Because layer names no longer need to be displayed in the plugin UI, some `index.html` elements can be removed.

Delete `<sp-body id="layers" />` and its related styles, then change the _"Populate Layers"_ button label to _"Rename Layers"_:

```html
<!doctype html>
<html>
  <head>
    <script src="index.js"></script>
  </head>
  <style>
    body {
      color: white;
      padding: 0 16px;
    }
  </style>
  <body>
    <sp-heading>Layers</sp-heading>
    <footer>
      <sp-button id="btnRename">Rename Layers</sp-button>
    </footer>
  </body>
</html>
```

The button's `id` is also changed to `"btnRename"`. After re-loading, unless UDT's _"Watch"_ function is already enabled, the panel should appear like this:

[Figure: A Photoshop panel with a button "Rename Layers"](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/editing-the-document/panel.png)

### Step 2: Adjust the `index.js`

Now update `index.js` so it matches the new behavior. During experimentation, a direct assignment like this may have seemed plausible:

```js
layer.name = `${layer.name} (${layer.opacity} %)`;
```

That approach is close, but Photoshop raises the error "Such events are only allowed from inside the modal scope":

[Figure: Chrome Developer Tools showing an error: "Uncaught Error: Event: select may modify the state of Photoshop. Such events are only allowed from inside a modal scope"](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/editing-the-document/modal-execution-error.png)

To open Chrome Developer Tools for the plugin, choose _"Debug"_ from the plugin actions menu in the UXP Developer Tool.

For the rename to work, wrap the code in `window.require('photoshop').core.executeAsModal(targetFunction, options)`. That call creates a context where the plugin has exclusive access for document manipulation, preventing other document changes while the handler runs and avoiding inconsistent errors. Use `executeAsModal` whenever an operation may alter the document. [Learn more about modal execution](uxp-executeasmodal.md).

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

### Step 3: Solve problem with consecutive executions

If you have already done some development, or clicked _"Rename Layers"_ more than once, the current implementation's flaw may be visible. The first click works, but later clicks append another percentage each time:

[Figure: A layer with the name "Layer 1 (60 %) (60 %) (60 %)"](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/editing-the-document/layer-name-problem.png)

Replace the layer loop with this code:

```js
// [...]
app.activeDocument.layers.forEach((layer) => {
  // Regular Expression that searches for the layer's name
  // without a previously appended layer opacity.
  // Cf. https://regex101.com/r/iWF1Yw/1
  const regExp = /^(.*?)( \(\d+ %\))?$/;
  const baseName = layer.name.match(regExp)[1];
  layer.name = `${baseName} (${layer.opacity} %)`;
});
// [...]
```

Here, `baseName` is taken from `layer.name.match(regExp)[1]`; it is the layer name with any trailing percentage removed, so each rename starts from that base.

### Next steps

You can now use Photoshop APIs for both reading from and writing to the document. As a practical guideline, a modal execution context is required for methods and properties marked "Read-write" in the [Photoshop API Reference](uxp-ps-reference.md).

[In the next tutorial](uxp-guides-3.md), the plugin uses UXP APIs for file-system interaction and creates a `.tsv` file containing a layer list.

## Writing a file with UXP

This tutorial extends the plugin with a button that exports a `.tsv` file listing every document layer and related details.

### Prerequisites

This tutorial continues from the plugin created in [the previous tutorial](uxp-guides-3.md).

### Step 1: Adjust the `index.html`

The new feature for this tutorial is exporting a `.tsv` file from the plugin.

To add UI support, update `index.html` with another section and the additional button `<sp-button id="btnExport" />`:

```html
<!doctype html>
<html>
  <head>
    <script src="index.js"></script>
  </head>
  <style>
    body {
      color: white;
      padding: 0 16px;
    }
  </style>
  <body>
    <sp-heading>Layers</sp-heading>
    <sp-heading size="S">Rename layers</sp-heading>
    <sp-body size="S"> Rename layers to contain their opacity. </sp-body>
    <sp-button id="btnRename">Rename Layers</sp-button>
    <sp-heading size="S">Export Report</sp-heading>
    <sp-body size="S"> Export a report of all layers in the document. </sp-body>
    <sp-button id="btnExport" variant="secondary">Export Report</sp-button>
  </body>
</html>
```

The updated panel is shown below:

[Figure: Photoshop panel with two buttons: "Rename Layers" and "Export Report"](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/writing-a-file/panel.png)

### Step 2: Add the new function to the `index.js`

Exporting the report has two required parts:

1. Build a string containing the file content you want. This follows the same pattern as the earlier tutorials that use DOM APIs from the `window.require('photoshop')` module.
2. Call UXP APIs through `window.require('uxp')` so the user can choose where the file should be saved, then write the desired content to that location.

Update `index.js` with this code:

```js
// [...]

async function exportReport() {
  // create the TSV string
  let tsvString = "Base name\tOpacity\tIs visible";

  const app = window.require("photoshop").app;
  app.activeDocument.layers.forEach((layer) => {
    tsvString += "\n" + layer.name + "\t" + layer.opacity + "\t" + (layer.visible ? "yes" : "no");
  });

  // save the string to the filesystem
  const storage = window.require("uxp").storage;
  const file = await storage.localFileSystem.getFileForSaving("layers.tsv");
  await file.write(tsvString);
}

document.getElementById("btnExport").addEventListener("click", exportReport);
```

The `async` and `await` keywords matter here because UXP storage calls run asynchronously, so their completion must be awaited.

Reload the plugin, then click _"Export Report"_; a file picker appears:

[Figure: A native Windows 10 file saving dialog with a file type "TSV" and a pre-selected name "layers.tsv"](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/writing-a-file/save-file-dialog.png)

`getFileForSaving(defaultName)` takes the string you pass in as the suggested file name, and that value also determines the supported file type.

Opening the exported file in Excel shows the layers and their properties:

[Figure: Excel table with the columns "Base name", "Opacity", and "Is visible" and the layers as rows](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/writing-a-file/excel-tsv-preview.png)

### Next steps

At this point, you have used UXP APIs to work with the file system. UXP also supports much more: network requests, preference storage with `localStorage`, operating-system details, external URL opening, and other capabilities. For the full surface, review [UXP's API Reference](uxp-reference-js.md).

For plugin distribution guidance, see [Sharing Your Plugin](uxp-guides-2.md).

## How Do I...

Use this section as a grab bag of HTML, CMS, and JavaScript snippets for common plugin tasks. It does not include complete plugins; paste the needed snippets into the relevant parts of your own plugin.

### Basic JavaScript

Experienced JavaScript developers can skip ahead; developers arriving from ExtendScript should read this section.

### How to `#include` An External JavaScript File

Unlike C-family languages, JavaScript does not use `#include`, and it does not use Python-style `import` in this context. Modern JavaScript, including UXP's runtime, instead offers modules and `require`. Use them like this:

In the JavaScript file that will be included, arrange the code in this form:

```js
// file "includeMe.js"
// this file will be included by some other file
function foo(someNumber) {
  return someNumber * 2;
}

function bar() {
  return 42;
}
module.exports = {
  foo,
  bar,
};
```

Then put this line near the top of the file that includes it:

```js
const {foo, bar} = require("./includeMe.js");
. . .
    result = foo(3); // will return 6
```

UXP's `require` is more limited than some include mechanisms; for example, it will not search global paths. With deliberate relative paths, though, you can organize the plugin directory however you prefer. For instance, load a file from a `lib` subfolder like this:

`const {foo, bar} = require("./lib/includeMe.js");`

### How to write debugging statements

For debugging output, use the console APIs rather than `console.writeln()`:

```js
console.log("foo"); // writes "foo" to the UXP Developer Tool console.

console.error("foo"); // does the same thing, but the text is shown in red so errors are more easily seen.
```

### How to Use Promises and async/await

Modern JavaScript's promise model can surprise developers who are new to current language versions. In practice, `await` lets code pause for an operation to finish without freezing the host app, such as Photoshop. The constraint is that `await` cannot appear inside an ordinary function; any function that uses it must be declared this way:

```js
    async function foo(argument1, argument2...) {

    }
```

That example only sketches `async` and `await`; both belong to JavaScript's larger `promises` model. For a fuller treatment, use your preferred search engine; a useful starting point is MDN's await reference: [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await).

### UXP-specific Snippets

### How to determine the host and OS a plugin is using

For localization or similar checks, a plugin may need to inspect its host environment. Use this pattern:

```js
const host = require("uxp").host;
const locale = host.uiLocale;
const hostName = host.name;
const hostVersion = host.version;
const hostOS = require("os").platform(); // note that this is a method, not a property
console.log(`locale: ${locale}  host ${hostName} version ${hostVersion} running on ${hostOS}`);
```

### How to get notified that your panel is opening or closing

Add a listener like this in startup code:

```js
document.addEventListener("uxpcommand", (event) => {
  const { commandId } = event;
  if (commandId === "uxpshowpanel") {
    console.log("panel is showing");
  } else if (commandId === "uxphidepanel") {
    console.log("panel is hiding");
  }
});
```

### File I/O

Files and folders in UXP for Photoshop can live in four different places, plus a separate `Secure Storage` facility:

- Your plugin's home directory. The plugin can read these files but cannot modify them, so this location fits localizations, static data files, and similar unchanging assets.

- Your plugin's data directory. UXP manages this directory and grants read/write access only to your plugin. Files stored here remain through application restarts and OS reboots.

- Your plugin's temp directory. Put session-specific data here when persistence is not guaranteed. Do not depend on anything in this directory being present after an application restart.

- The host OS filesystem. The plugin must request access to specific computer files or folders from the user, usually by displaying a file or folder picker. When the user chooses a file and does not cancel, the plugin receives a `token` for that file or folder.

- UXP also provides `Secure Storage`. This UXP-managed facility stores encrypted key/value pairs. It fits login information and other sensitive data that needs secure storage; it is not a general file-access area, though it can be appropriate for small amounts of data.

### How to Read a File

Coming soon.

### How to Write a File

Coming Soon

### Other Useful Snippets

### How to Display a Simple Alert

When a full dialog is unnecessary and a plain alert message is enough, use this if you do not need icons or special branding:

```js
const psCore = require("photoshop").core;
psCore.showAlert({ message: "Warp Factor 9!" });
```

## See also

- [Unsupported](uxp-unsupported.md)
- [Getting Started](uxp-xmp.md)
