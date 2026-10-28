# Writing events script to run throughout the session

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
