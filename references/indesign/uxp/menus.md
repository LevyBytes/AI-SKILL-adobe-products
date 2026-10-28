# Menus

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
