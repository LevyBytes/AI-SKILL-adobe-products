# Defining Flyout Menus

To define flyout menus, pass a JSON structure into the UXP `entrypoints.setup` method. That JSON declares the menuitems and the action for each selection. The example below defines three starship-themed menuitems; when the user chooses one, UXP invokes the plugin function `handleFlyout`.

```js
const { entrypoints } = require("uxp");
// the setup() function tells UXP how to handle
// the entrypoints defined in your manifest.json file.
entrypoints.setup({
  panels: {
    my_panel_entrypoint: {
      show() {
        // put any initialization code for your plugin here.
      },
      menuItems: [
        { id: "setWarpFactor", label: "Warp Factor 1" },
        { id: "raiseShields", label: "Shields Up" },
        { id: "makeItSo", label: "Engage" },
      ],
      invokeMenu(id) {
        handleFlyout(id);
      },
    },
  },
});
```
