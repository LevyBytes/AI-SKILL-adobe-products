# Getting Started, How It Works, Reference, Samples

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Quickstart Guide — Creating your first script; How UXP Scripting Works; Overview; Scripting Reference — Script module; Samples — Create a new layer.

## Quickstart Guide — Creating your first script

1. Start by making a file on your computer whose name ends in the `.psjs` extension. Example filename: `hello-world.psjs`
2. Place this code in that file:

```js
require("photoshop").core.showAlert("Hello world!");
```

### Quickstart Guide — Run your script

Scripts can be launched through more than one entry point.

1. Choose the script that should run from: "File Menu > Scripts > Browse"
2. On Mac, drag a .psjs file onto the Photoshop icon in the Dock. On both Mac and Windows, you can drop script files anywhere on the Photoshop window except over an open document.

### Quickstart Guide — Debug your script

Photoshop scripts can be debugged with the [UXP Developer Tools](https://creativecloud.adobe.com/apps/download/uxp-developer-tools) (UDT) application. If it is not already installed, get it through the Creative Cloud desktop application. Script debugging is available starting with UDT 1.6.

Open UDT. After Photoshop is running, it should appear under "Connected Applications".

Inside the "Connected Applications" card, a "Debug Script" button should appear. Use that button to pick the script file and debug it in UDT.

[Figure: UDT Debugging](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/scripting/getting-started/udt-scripting.png)

## How UXP Scripting Works

A Photoshop script is stored as plain text and uses the `.psjs` extension. Adobe plans to broaden UXP scripting to additional applications and later allow scripts to open by double-click. When that support arrives, the extension will indicate which application should launch the script.

### Execution Context

When Photoshop starts a script, it creates an execution context for that invocation.

Only a single script runs inside a given execution context. A running script cannot start a second script. The UXP script module exposes `ExecutionContext` for use by scripts.

```js
const { script } = require("uxp");
const executionContext = script.executionContext;
```

This object reports information about the active script run, exposes methods for passing data to Photoshop, and supplies events for script lifecycle handling. Methods on `executionControl.hostControl` can also suspend or resume history states and automatically close documents. See the scripting [reference](uxp-scripting.md) for more detail.

### Events

Script cancellation can happen in these cases:

- the user selects "Cancel" in the progress bar
- Photoshop hits an exception while running a script file

To be informed that a command was cancelled, script authors can register event handlers. The callback receives "reason" as its parameter.

```js
executionContext.onCancel.addListener((reason) => {
  // reason would be a json object set by PS while cancelling
  reject("Message");
});
```

### User Interface

Script UI is limited to dialog display. Any interface a script creates is modal by nature. If `showModal()` is called without `await` and its Promise is not allowed to return, script execution can continue until completion, at which point the UI is destroyed. When a modal UI does not appear, verify that `await` precedes the call.

If a script needs more than 2-3 seconds to finish, Photoshop shows a **progress bar** automatically.

### Global Await

An `await` expression pauses execution of an `async` function until its Promise is fulfilled or rejected. After fulfillment, the `async` function continues, and the `await` expression evaluates to the fulfilled Promise value.

Global await refers to waiting for an async function in global scope to complete.

```js
function anyAsyncFunction() {
  return new Promise((resolve, reject) => {
    const val = Math.random();
    if (val > 0.5) {
      console.log("Resolve promise");
      resolve(val);
    } else {
      console.error("Rejecting promise");
      reject(val);
    }
  });
}

// Global await
try {
  const val = await anyAsyncFunction();
  console.log("Value from function", val);
} catch {
  console.log("Rejected promise!;");
}
console.log("Script completed");
```

### Permitted UXP Modules

During plugin development, the `manifest.json` file declares the UXP modules the plugin wants to use. Photoshop manages script permissions internally, so scripts do not need manifest configuration.

**Scripts cannot reach every UXP module yet; Adobe plans to open additional modules in later UXP versions.** The supported modules listed here are active by default:

| UXP Module | Supported | Current Access Level | Sample |
| --- | --- | --- | --- |
| Fonts | Yes | Can read installed fonts | [View sample.](uxp-scripting.md) |
| Clipboard | Yes | Can read and write | [View sample.](uxp-scripting.md) |
| LocalFileSystem | Yes | File pickers can open or save files. The `getTemporaryFolder API` can also be called to reach a temporary data folder. | [View sample.](uxp-scripting.md) |
| Network | No |  | LaunchProcess No |
| WebView | No |  | IPC No |

When a script needs UXP modules that scripts do not yet support, build a UXP plugin instead.

### FAQ

- Which minimum Photoshop and UDT versions are required for debugging?
  - UXP Scripting requires Photoshop v23.5 and UDT v1.6.
- Is one script allowed to invoke another script?
  - No; communication between scripts is unavailable.
- Are arguments supported for scripts?
  - The first release does not support argument passing, but **will be possible in a future release.**
- Are plugins able to execute scripts?
  - No, although UXP script code should generally be able to run inside a UXP plugin.
- Can module permissions be enabled manually?
  - Module permission cannot be enabled or requested by developers. Photoshop enables every permitted module by default.
- Why does PS permit only a small set of modules, and should future releases enable others?
  - The UXP script module is in its first release, and Adobe is working to enable access permissions for more modules in later releases.

## Overview

With UXP scripting, developers can run a single file that performs work in Photoshop. Instead of the ExtendScript model, these scripts can communicate with Photoshop through the [Photoshop](uxp-ps-reference.md) API and the [UXP](uxp-api.md) API.

### When are scripts useful?

One-off work that end users would normally do by hand is the main fit for scripts. They are especially useful for repetitive work, such as putting a watermark on documents. After a user invokes a script, it runs the task and Photoshop unloads it when the work is complete. A dialog can request user input when needed. Scripts may run headlessly or with minimal UI, and they do not require any manifest setup.

Scripting's primary benefit is simplicity. Tasks in Photoshop can be completed without the more involved setup required by a UXP plugin. Script code can also be reused inside a UXP plugin.

### How is it different from UXP plugin development?

1. **[Lifetime](uxp-scripting.md):** Script lifetime stops when execution finishes.
2. **[Limited UI](uxp-scripting.md):** Scripts differ from plugins because they cannot provide panel UI. Dialog UI is the only UI form they can create.
3. **No persistent data:** Persistent storage such as the plugin data folder or `window.localStorage` is unavailable to scripts.
4. **[UXP module access is limited](uxp-scripting.md):** The host application controls UXP module permissions, and currently enables only a small set of modules. _Adobe plans to enable additional modules in future versions._
5. **No identity:** Adobe distribution channels do not yet support UXP scripts. After sharing, any user can run them. Plugins, by contrast, are associated with a plugin ID and obtained through the CCD plugin marketplace.

### How is this different from ExtendScript scripting?

Older extensibility systems used ExtendScript for scripting. ExtendScript relies on a very old JavaScript version (ES3), while UXP runs on the V8 JavaScript engine with ES6 support. This lets developers write scripts using the flexibility available in modern JavaScript.

Relative to ExtendScript, UXP scripting gives developers a simpler route to the Photoshop DOM through the Photoshop API. Until UXP exposes every major capability, [**batchPlay**](https://developer.adobe.com/photoshop/uxp/2022/ps_reference/media/batchplay/) can be used to communicate with Photoshop elements.

## Scripting Reference — Script module

This is the UXP module that provides scripting-related properties and methods.

### Usage

```js
const { script } = require("uxp");
```

### Properties

| Name | Type | Access | Description |
| --- | --- | --- | --- |
| executionContext | ExecutionContext | readOnly | ExecutionContext supplied by the host during Script invocation |

### Scripting Reference — ExecutionContext

The host passes this object when it invokes scripts. It includes:

- Information about the active script run
- Methods for sending data to Photoshop
- Events used to manage the script lifecycle

### Usage

```jsx
const { script } = require("uxp");
const executionContext = script.executionContext;
console.log("isCancelled: ", executionContext.isCancelled);
```

### Properties

| Name | Type | Access | Description |
| --- | --- | --- | --- |
| isCancelled | bool | readOnly | Used to determine whether the client or host has cancelled the execution context. |
| hostControl | Object | readOnly | Object with 4 properties, described [below](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/scripting/reference/index.md#hostcontrol). |

### hostControl

Use the hostControl property to suspend and resume history states.

- `suspendHistory(options)`: suspends history on a target document
- `resumeHistory(suspensionID, commit)`: resumes history on a target document
- `registerAutoCloseDocument(docID)`: registers a document for closure when the modal scope exits
- `unregisterAutoCloseDocument(docID)`: removes a document from the automatic-close set for the modal scope

### Methods: hostControl

### History state suspension

**`executionContext.hostControl.suspendHistory(options)`**

- Returns a suspension identifier to pass to `resumeHistory`
- Suspends the history state for the document with ID `options.documentID`
- Combines all document edits into one history state named by `options.name`

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| options | Object | `documentID`: document ID whose history state will be suspended. |
|  |  | `name`: History panel label used for the history state |

**`executionContext.hostControl.resumeHistory(suspensionID, commit)`**

- Resumes the history state
- Can record the current document state as a history state

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| suspensionID | string | suspension identifier returned by `suspendHistory` |
| commit | bool | When true, commits the current document state and creates a history state. When false, restores the document to the point where suspension began. (optional and defaults to true) |

### Example

The example below suspends the history state for a target document, modifies that document, and then resumes the state.

```js
let hostControl = executionContext.hostControl;
// Get an ID for a target document
let documentID = await getTargetDocument();

// Suspend history state on the target document
// This will coalesce all changes into a single history state called
// 'Custom Command'
let suspensionID = await hostControl.suspendHistory({
  documentID: documentID,
  name: "Custom Command",
});

// modify the document
// . . .

// resume the history state
await hostControl.resumeHistory(suspensionID);
```

### Automatic document closing

**`executionContext.hostControl.registerAutoCloseDocument(docID)`**

- Registers a document to close without saving at execution-context completion

**`executionContext.hostControl.unregisterAutoCloseDocument(docID)`**

- Removes a document from that no-save auto-close behavior for execution-context completion

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| docID | number | Document ID associated with this history state ### Example This example first creates a document and marks it as "auto close". After content is added to the page, the document is removed from the auto-close set. If cancellation occurs during script execution, the document closes. `js let hostControl = executionContext.hostControl; let docID = await createDocument(); await hostControl.registerAutoCloseDocument(docID); // Add contents to docID ... await hostControl.unregisterAutoCloseDocument(docID); ` ### Events **`onCancel`** _ Cancellation may occur if "Cancel" is clicked in the progress bar, or if the host app encounters an exception during script execution. Developers can register **event handlers** for cancellation notification. The related callback receives the `reason` parameter. `jsx executionContext.onCancel.addListener((reason) => { // reason would be a json object set by the host while cancelling reject("Script Cancelled"); }); ` ## Samples — Create a new layer Through the Photoshop DOM API, a script can create a new layer: `js const app = require('photoshop').app; await app.documents.add(); await app.activeDocument.createLayer(); app.activeDocument.layers[0].name = 'New layer'; ` ### Samples — Access the local filesystem Use the UXP storage module when a script needs to reach the local filesystem: ``js const uxpfs = require("uxp").storage; const ufs = uxpfs.localFileSystem; try { const folder = await ufs.getTemporaryFolder() const metadata = await folder.getMetadata(); console.log(JSON.stringify(metadata)); } catch (e) { console.log(`Local File system error: ${e}`); } `` ### Samples — Using a file picker For file output, a script can open a save picker and write content through the selected file entry. `js const fs = require('uxp').storage.localFileSystem; try { // save file to a location using file picker const file = await fs.getFileForSaving("demo.txt"); await file.write("Hello World! This is demo."); } catch (e) { console.log(e); } ` ### Samples — Read/write to clipboard The clipboard module, `navigator.clipboard`, is available for these operations: _ place data on a clipboard (`setContent()`) \* retrieve clipboard text (`readText()`) `js try { const clipboard = navigator.clipboard; await clipboard.setContent({ 'text/plain': "Test string" }); } catch (e) { throw new Error(e); } try { const clipboard = navigator.clipboard; const text = await clipboard.readText(); console.log(text); }  catch (e) { throw new Error(e); } ` ### Samples — Create dialog UIs ### Simple example `js async function createDialog() { const dialog = document.createElement("dialog"); dialog.style.color = "white"; const div = document.createElement("div"); div.style.display = "block"; div.style.height = "200px"; div.style.width = "400px"; const header = document.createElement("h2"); header.id = "head"; header.style.color = "white"; header.textContent = "Sample Dialog"; div.appendChild(header); dialog.appendChild(div); await document.body.appendChild(dialog).showModal(); } // Wait for the dialog to render await createDialog(); ` ### Example with "Done" button `js async function showDialog() { let dialog = createDialog(); document.body.appendChild(dialog).showModal(); // Give the script time to show the dialog by returning a promise. Make sure that it is resolved/rejected later. return new Promise((resolve, reject) => { try { // Resolve the promise and dismiss the dialog when when user clicks on 'Done' button const doneBtn = document.getElementById("done"); doneBtn.addEventListener("click", () => { console.log("user is done"); dialog.close(); resolve("user is done"); }) // reject when dialog is cancelled/closed dialog.addEventListener("cancel", () => { console.log("dialog cancelled"); reject("dialog cancelled"); }); dialog.addEventListener("close", () => { console.log("dialog closed"); reject("dialog closed"); }); } catch (e) { console.log(e); reject(e); } }) } function createDialog() { const dialog = document.createElement("dialog"); dialog.style.color = "white"; const div = document.createElement("div"); div.style.display = "block"; div.style.height = "200px"; div.style.width = "400px"; const header = document.createElement("h2"); header.id = "head"; header.style.color = "white"; header.textContent = "Sample Dialog"; div.appendChild(header); const doneButton = document.createElement("button"); doneButton.id = "done"; doneButton.textContent = "Done"; div.appendChild(doneButton); dialog.appendChild(div); return dialog; } // Wait for the dialog to render await showDialog(); ` ### Samples — Access installed fonts Photoshop assigns the Fonts module permission `ReadInstalled`. If no font is supplied, or the named font is missing, UXP uses `"system-ui"`, the operating system's standard interface font. ``js async function createDialog() { const dialog = document.createElement("dialog"); dialog.style.color = "white"; const div = document.createElement("div"); div.style.display = "block"; div.style.height = "200px"; div.style.width = "450px"; const p1 = createParagraph("system-ui"); // use default OS font const p2 = createParagraph("non-existent-font"); // try using a non existent font. Will resolve to OS default. const p3 = createParagraph("Courier New"); // use any installed font div.appendChild(p1); div.appendChild(p2); div.appendChild(p3); dialog.appendChild(div); await document.body.appendChild(dialog).showModal(); } function createParagraph(fontFamily) { const p = document.createElement("p"); p.style.color = "white"; p.style.fontFamily = fontFamily; p.textContent = `font-family:${fontFamily}: A fox jumps over the lazy dog`; return p; } // Wait for the dialog to render await createDialog(); `` [Figure: Fonts example](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/scripting/samples/fonts.png) |

## See also

- [Getting Started](uxp-xmp.md)
