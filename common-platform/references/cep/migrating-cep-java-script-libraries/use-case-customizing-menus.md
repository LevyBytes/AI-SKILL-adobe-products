# Use Case: Customizing Menus

CSInterface provides two APIs for flyout-menu customization. An example in [these notes](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_11.x/Documentation/CEP%2011.1%20HTML%20Extension%20Cookbook.md#fly-out-menu) configures flyout content and pairs it with event listeners.

UXP represents flyout menus as a JSON structure passed into `entrypoints.setup`. That method tells UXP how to handle the entrypoints declared in manifest.json. When the user invokes a menu item, UXP sends back the flyout menu ID. Developers can branch on that ID to handle each defined menu item. In manifest.json, define the menu item label that appears in the Plugins panel as `EntryPointDefinition.label`. This [example](https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/flyout-menus/#flyout-menus) walks through the flow.
