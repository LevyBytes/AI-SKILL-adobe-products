# Working with Event Listeners

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
