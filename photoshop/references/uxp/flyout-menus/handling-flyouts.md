# Handling Flyouts

The `handleFlyout` function shown earlier receives the flyout menu id. Use that id to route execution to the code for the selected menuitem, as this example does.

```js
function handleFlyout(id) {
  switch (id) {
    case "setWarpFactor": {
      console.log("Aye captain");
      break;
    }
    case "raiseShields": {
      console.log("Shields at 40 percent");
      break;
    }
    case "makeItSo": {
      console.log("Warp drive is offline");
      break;
    }
  }
}
```
