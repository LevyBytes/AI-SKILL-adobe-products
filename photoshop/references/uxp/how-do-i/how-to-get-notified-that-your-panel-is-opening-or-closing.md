# How to get notified that your panel is opening or closing

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
