# entrypoints.setup() using promises

Lifecycle skeleton: register the matching panel and command IDs in the manifest, then supply the marked handlers and menu definitions.

```javascript
const { entrypoints } = require("uxp");
entrypoints.setup({
    plugin: {
        create() {
            console.log("Plugin has been loaded, plugin.create has been triggered.");
        },
        destroy() {
            return new Promise(function (resolve, reject) {
                console.log("plugin.destroy has been triggered.");
                resolve();
            });
        }
    },
    panels: {
        panelA: {
            create(rootNode) {
                return new Promise(function (resolve, reject) {
                    console.log("PanelA is created, panelA.create has been triggered.");
                    resolve();
                });
            },
            show(rootNode, data) {
                return new Promise(function (resolve, reject) {
                    console.log("PanelA is about to be displayed,  panelA.show has been triggered with data ", data);
                    resolve();
                });
            },
            hide(rootNode, data) {
                return new Promise(function (resolve, reject) {
                    console.log("PanelA is about to be hidden,  panelA.hide has been triggered with data ", data);
                    resolve();
                });
            },
            destroy(rootNode) {
                return new Promise(function (resolve, reject) {
                    console.log("PanelA is about to be destroyed,  panelA.destroy has been triggered.");
                    resolve();
                });
            },
            invokeMenu(menuId) {
                return new Promise(function (resolve, reject) {
                    console.log("A menu item on PanelA has been invoked,  panelA.invokeMenu has been triggered with menu id ", menuId);
                    resolve();
                });
            },
            menuItems: [] // Add the panel menu definitions here.
        },
        "panelB": { /* Supply the application-specific handler body. */ }
    },
    commands: {
        "command1": {
            run() { /* Supply the application-specific handler body. */ },
            cancel() { /* Supply the application-specific handler body. */ }
        },
        "command2": function(){ /* Supply the application-specific handler body. */ }
    }
});
```
