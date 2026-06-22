# File Operation, Flyout Menu, Host Info, Html Elements ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: File operations; Flyout Menus; Host Environment; HTML Elements; HTML events and event listeners; Events; Menus; Recipes.

## File operations

For file operations such as reading, writing, creating, and deleting, UXP offers two choices. Before comparing those APIs, start with the core concepts.

### Concepts

### Sandbox and other locations

By default, UXP limits file access to specific areas of the user's file system. Those allowed areas make up the sandbox.

Plugins and Scripts

**In plugins**, the sandbox normally includes the plugin folder together with temporary and data folders. The plugin folder cannot be written to. The temporary and data folders are intended for transient data. Information stored there may be erased unexpectedly, so do not treat it as durable.

**In scripts**, the sandbox contains only a temporary folder. Use it for transient data, and expect that it may be erased.

Some workflows need files outside those locations. UXP can reach them, but only after permission is requested.

### Manifest permission

File system access depends on permission for the `localFileSystem` module.

Plugins and Scripts

**In plugins**, request `localFileSystem` permission in the manifest. IMPORTANT: Review the [manifest permissions](uxp-plugins.md) module before continuing.

**In scripts**, `localFileSystem` permission is fixed. The manifest details in the examples below do not apply to scripts. These values are described in the [manifest fundamentals section](uxp-resources.md).

Here is a closer look at the manifest settings.

```json
/* manifest.json */
{
  "requiredPermissions": {
    "localFileSystem": "plugin"
  }
}
```

Accepted `localFileSystem` values:

- `plugin`: Default value. Limits access to the sandbox.
- `request`: Allows prompting the user to choose a location.
- `fullAccess`: Opens access to the user file system

_Protip_: Choose the narrowest permission that fits the use case, because future versions may ask users to consent based on this value. `fullAccess` can seem safest because it removes restrictions, but users may reject a plugin install if it requests system-wide file access without a clear need.

### Schemes

UXP exposes these locations with short scheme prefixes.

For sandbox locations, use `plugin:/`, `plugin-data:/`and `plugin-temp:/`.
Use `file:/` for paths outside the sandbox.

````html
<img src="plugin:/sample.png" /> <img src="file:/Users/user/Downloads/sample.png" /> \ ### HTML
```html
<button id="showDialog">Show Dialog</button>
<dialog id="sampleDialog">
  <div>
    <h1>Well hello!</h1>
    <p>A dialog built using HTML tags</p>
  </div>
</dialog>
````

### JavaScript

```js
const showDialogBtn = document.getElementById("showDialog");
showDialogBtn.addEventListener("click", showDialog);
function showDialog() {
  const dialog = document.getElementById("sampleDialog");
  dialog.show();
  dialog.addEventListener("cancel", () => {
    console.log("Dialog dismissed");
  });
}
```

### CSS

```css
#sampleDialog > div {
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 400px;
  align-items: center;
}
#sampleDialog > div > p {
  margin-top: 30px;
}
```

### Using only JavaScript

### HTML

```html
<button id="showDialog">Show Dialog</button>
```

### JavaScript

```js
const showDialogBtn = document.getElementById("showDialog");
showDialogBtn.addEventListener("click", showDialog);
function showDialog() {
  // create dialog
  const dialog = document.createElement("dialog");

  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.height = "300px";
  div.style.width = "400px";
  div.style.alignItems = "center";

  const header = document.createElement("h1");
  header.textContent = "Well hello!!";
  div.appendChild(header);

  const para = document.createElement("p");
  para.textContent = "A dialog built using HTML tags";
  div.appendChild(para);

  dialog.appendChild(div);

  // show dialog
  document.body.appendChild(dialog).showModal();

  dialog.addEventListener("cancel", () => {
    console.log("Dialog dismissed");
  });
}
```

[Figure: Sample dialog](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/resources/recipes/html-elements/sample-dialog.png)

### Additional notes

- Script dialogs can require extra care because showing and hiding them may need async or promise handling. See the script tutorial covering modal dialogs.
- `document.createElement` can also create Spectrum Widgets `sp-*` in UXP. This does not apply to Spectrum Web Components.

### Reference material

- [Dialog Element](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/html-dialog-element.md)
- [Other HTML Elements](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/index.md)

## HTML events and event listeners

Several approaches are available for catching an HTML event and attaching `eventlisteners` to an element.

The choice is mostly stylistic, so use whichever pattern fits your code best. Manifest setup is required for the inline-handler form, for example `<button onclick="btnClick()">Click Me</button>`.

Plugins and Scripts

**In plugins**, inline event handlers like the example above require `allowCodeGenerationFromStrings` to be enabled.
IMPORTANT: Review the [manifest permissions](uxp-plugins.md) module before continuing.

**In scripts**, inline event listeners cannot be added, so that permission has no effect.

### Examples

**Declaring event listeners in JavaScript**

### HTML

```html
<button id="firstButton">Click me</button> <button id="secondButton">Click me</button>
```

### JavaScript

```js
const firstButton = document.getElementById("firstButton");
firstButton.addEventListener("click", foo);

const secondButton = document.getElementById("secondButton");
secondButton.onclick = foo;

function foo(event) {
  console.log(`Button clicked ${event.target.id}`);
}
```

**Declaring inline event handlers**

### HTML

```html
<button id="thirdButton" onclick="foo(event)">Click me</button>
```

### JavaScript

```js
function foo(event) {
  console.log(`Button clicked ${event.target.id}`);
}
```

### manifest

```json
{
  "requiredPermissions": {
    "allowCodeGenerationFromStrings": true
  }
}
```

### Additional notes

- These examples are valid for Spectrum Widgets and Spectrum Web Components in UXP as well.

### Reference material

- [HTML Events](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-events/index.md)

## Events

InDesign sends standard application and document events for actions such as opening a file, making a new file, printing, and importing text or graphics from disk. Attach scripts to those events with the `eventListener` scripting object. For instance, to run a function right when a selected event happens, create an `eventListener` object and pass both the event name and the target function as parameters. Event-based scripts resemble other scripts, except that after the listener is attached, the script should be held open by a promise while it waits in the background until the listener is removed. The promise can then resolve so the script exits. After Events Scripts with listeners are started, the matching event triggers them automatically instead of requiring a user launch from the Scripts palette.

**The sample scripts move from simple examples toward more involved workflows.**

_For script creation, installation, and execution, see [Adobe InDesign UXP Scripting Tutorial](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/resources/guides/getting-started/index.md)._

### Understanding Event Scripting

Register an `eventListener` on an object that can receive the event. When that object receives the named event, the `eventListener` calls the script function configured as its handler; the handler can be a script function or a reference to a script file on disk.

_See the [list of available events](uxp-e-5.md)._

### Working with Event Listeners

_After an `eventListener` reacts to an event, other `eventListeners` may still handle the same event, depending on how propagation works. For example, `afterOpen` can be watched by listeners attached to both the application and the document._

_`eventListeners` are not saved past the active InDesign session. To load an `eventListener` in each InDesign session, place the script in the startup scripts folder._

**Adding an eventListener**

Creating an `eventListener` requires the event type plus the handler, supplied either as a function or as a file reference. This fragment adds an `eventListener` for a particular event; the full script is AddEventListener.

```js
const { app } = require("indesign");
let myEventListener = app.addEventListener("afterNew", myDisplayEventType);

function myDisplayEventType(myEvent) {
  console.log(`This event is the ${myEvent.eventType} event.`);
}
```

**Removing an eventListener**

Run this script to remove the `eventListener` created in the previous example:

```js
const { app } = require("indesign");
let myResult = app.removeEventListener("afterNew", myDisplayEventType);
```

As an event moves through the scripting object model, it can invoke more than one `eventListener`. The next sample shows one event reaching listeners attached in two places:

```js
const { app } = require("indesign");
let myApplicationEventListener = app.eventListeners.add("beforeImport", myEventInfo);
let myDocumentEventListener = app.documents.item(0).eventListeners.add("beforeImport", myEventInfo);
function myEventInfo(myEvent) {
  let myString = "Current Target: " + myEvent.currentTarget.name;
  console.log(myString);
}
```

After running that script, place a file. InDesign reports the following values in this order on the console:

1. Document name
2. Application name

Remove the listeners from the prior sample with this script:

```js
const { app } = require("indesign");
app.removeEventListener("beforeImport", myEventInfo);
app.documents.item(0).removeEventListener("beforeImport", myEventInfo);
```

### Writing events script to run throughout the session

Once the event listener has been attached, a promise keeps the script active while it waits in the background for the event until the listener is removed. When the event happens, the corresponding function is called automatically. Removing the listener allows the promise to resolve and the script to finish.

This sample events script listens for the "afterNew" event **throughout the InDesign session** and prints a matching string whenever a new document appears.

```js
const { app } = require("indesign");

await listenAfterNew();

async function listenAfterNew() {
  return new Promise((resolve, reject) => {
    mySnippet();
  });
}

function mySnippet() {
  //![Add event listener.]
  app.addEventListener("afterNew", myDisplayEventType);
}

//![Function that gets executed.]
function myDisplayEventType(myEvent) {
  console.log("This event is the " + myEvent.eventType + " event.");
}
```

The next sample events script listens for "afterNew" **only once**, then removes the listener. It prints a matching string when a new document appears.

```js
const { app } = require("indesign");
let myResolve;

await myPromiseFunction();

async function myPromiseFunction() {
  return new Promise((resolve, reject) => {
    mySnippet();
    myResolve = resolve;
  });
}

function mySnippet() {
  //![Add event listener.]
  app.addEventListener("afterNew", myDisplayEventType);
}

//![Function that gets executed.]
function myDisplayEventType(myEvent) {
  console.log("This event is the " + myEvent.eventType + " event.");

  //![Remove event listener.]
  app.removeEventListener("afterNew", myDisplayEventType);

  myResolve();
}
```

## Menus

InDesign APIs support adding and removing menu items, running menu commands, and binding scripts to menu items. This section covers InDesign menu scripting. Each `menuItem` is tied to a `menuAction` through the `associatedMenuAction` property. The `menuAction` properties determine the result when the menu item is chosen. Beyond the `menuActions` supplied by the user interface, users may define their own `scriptMenuActions`, which connect a script to a menu choice.

This example creates the menu item and binds it to an action.

```js
const { app } = require("indesign");

await main();
async function main() {
  return new Promise((resolve, reject) => {
    mySnippet();
  });
}

function mySnippet() {
  //Adds a menu at the end of the main menu bar.
  let mySampleScriptAction = app.scriptMenuActions.add("Display Message");

  let myEventListener = mySampleScriptAction.eventListeners.add("onInvoke", function () {
    console.log("This menu item was added by a script.");
  });

  //If the submenu "Script Menu Action" does not already exist, create it.
  try {
    let mySampleScriptMenu = app.menus.item("Main").submenus.item("Script Menu Action");
  } catch (myError) {
    let mySampleScriptMenu = app.menus.item("Main").submenus.add("Script Menu Action");
  }

  mySampleScriptMenu.menuItems.add(mySampleScriptAction);
}
```

## Recipes

This section provides small examples for frequent use cases.
